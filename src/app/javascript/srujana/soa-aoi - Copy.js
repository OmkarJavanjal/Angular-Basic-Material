var childLengthCount;
var temData;
var allArradata=[];
var childArray = [];
var matchData=[];
var notMatchData = [];
var notMatchuncheckData = [];
var degreeParams={};
var checkedLength;
var zipValid;

var fosAoiSearch = {

// handle bar template file name        
	fosAoiSearchTemplate: "/components/fosaoi-search/fosaoi-search.handlebars",
	zipcodeCounter: 0,
	plctServiceUrl: "/bin/api/plct/3/uopx",
	plctValidationUrl: "/bin/api/validation-service/1/uopx",
	jsonResponse: {},
	allProgramsObj: {},
	selectedFos: '',
	selectedFosJsonResponse: {},
	apiResponse: {},
	degreeAPIData: {},
	certificateArray: ["certificate", "undergraduate-certificate", "graduate-certificate", "associates-certificate"],
	disabledAOIArray: ["hospitality", "retail-management"],
    onlineModality: "",
    onCampusModality: "",

	init: function () {

		var delay = 50;
		var timerId = setTimeout(function getZipCodeFromDataMgr() {
			// priority order - UPX.dataMgr, CQ_Analytics.UpxDataMgr otherwise default value of the text field
			var defaultZipCode = UPX.dataMgr.get("postalCode") ? UPX.dataMgr.get("postalCode") : CQ_Analytics.UpxDataMgr.getProperty("postalCode");
			// stop retrying after 10 times. load the default value from input field
			if (defaultZipCode || fosAoiSearch.zipcodeCounter >= 9) {
				// if zip code is still empty (load it from the input field) - invoked during retries
				defaultZipCode = defaultZipCode ? defaultZipCode : $(".zipCodeInputBox").val();
				console.log("defaultZipCode ", defaultZipCode);
				// update the default zip code in input fields
				fosAoiSearch.updateZipCode(defaultZipCode);
				//getFOS detail from pageproperties
				fosAoiSearch.selectedFos = fosAoiSeachObj.fos;
				// update the default fos in input fields
				fosAoiSearch.updateFosDropdown(fosAoiSearch.selectedFos);

                $(".custom-checkbox>[type='checkbox'][value='Online']")[0].checked = fosAoiSeachObj.isModalityOnline == "true" ? true:false;
                $(".custom-checkbox>[type='checkbox'][value='On Campus']")[0].checked =  fosAoiSeachObj.isModalityCampus == "true" ? true:false;
				// load the component immediately (including the API call)
				fosAoiSearch.populatePageData();
			} else {
				// increment the counter
				fosAoiSearch.zipcodeCounter++;
				// if undefined, set another timeout function to check for the value after 500 milliseconds
				timerId = setTimeout(getZipCodeFromDataMgr, delay);
			}
		}, delay);

		this.bindEvents();
		//this.bindEventsCheckBox();
      

	},
	// Bind DOM events for handling changes called inside the handlebars template
	bindEvents: function () {
		// calls the filterFOSData to get new fos based on changed zipcode value.
		$(".zipCodeInputBox").change(function () {
			var newZipCode = $(".zipCodeInputBox").val();
			// to handle NULL condition
			if (!newZipCode || newZipCode == '') {
				 var newZipCode = $(".zipCodeInputBox").val();
				console.log('newZipCode', newZipCode);
				if (!newZipCode || newZipCode == '') {
					fosAoiSearch.showZipErrorMsg();
				}else{
					$('span.error_msg').html('');
				}
			}
			// TODO : hide the error message
			fosAoiSearch.showZipErrorMsg();
			debugger;
            // Make the API call, validate it and display new results or error message
			fosAoiSearch.getJsonResponse(fosAoiSearch.plctValidationUrl + "/address/postalcode?postalCode=" + newZipCode).then(function (info) {

                console.log('info', info);
					if(info.state !=""){
						if (info.state) {
							CQ_Analytics.UpxDataMgr.setProperty("state", info.state);
							UPX.dataMgr.set('state', info.state);
						}
						if (info.city) {
							CQ_Analytics.UpxDataMgr.setProperty("city", info.city);
							UPX.dataMgr.set('city', info.city);
						}
						if (info.postalCode && info.state && info.city) {
							CQ_Analytics.UpxDataMgr.setProperty("postalCode", info.postalCode);
							UPX.dataMgr.set('postalCode', info.postalCode);
						}

						if (info.state && info.city) {
							// valid zip code. show the section if it is hidden
							fosAoiSearch.populatePageData();
						}
						zipValid=false;
						$("div.showDataBox").removeClass("boxHidden");
					}				
					else {
						// TODO : Show error message
						zipValid=true;
						fosAoiSearch.showZipErrorMsg();
					}

			});
		});

		 $(".zipCodeInputBox").focus(function(){
            $('span.error_msg').html('');
            $("span.tooltiptext").removeClass("showTooltip");
        });
        $(".zipCodeInputBox").focusout(function(){
            fosAoiSearch.showZipErrorMsg();          
        });

        $(".zipCodeInputBox").keypress(function (event) {
			var charCode = (event.which) ? event.which : event.keyCode;
			return (charCode > 31 && (charCode < 48 || charCode > 57)) ? false : true;
		});

		$('select[name="test"]').on('change', function () {
			fosAoiSearch.selectedFos = $(this).val();
			fosAoiSearch.populatePageData();

		});

        /**
     * Below method call when we click on single check box
     **/
	},
	// to combine the API data and author dialog configurations
	populatePageData: function () {

		var zipCodeInputBox = this.getZipCode(),
			fosAPIURL = this.getServiceURL(zipCodeInputBox);

		// call the PLCT API to get the data based on zip code
		this.getJsonResponse(fosAPIURL).then(function (apiResponse) {
			fosAoiSearch.apiResponse = apiResponse;
			// check if the API response has FOS data
			if (!_.isEmpty(apiResponse.fieldOfStudy)) {

				// TODO: filter the API response and pull the FOS data
				// fosAoiSearch.jsonResponse = apiResponse;

				fosAoiSearch.populateResultsSection();

				// get all the program objects and store it in a map as key/value pair
				// the results will be used to include programs based on parent program attribute in child program
				$.map(apiResponse.fieldOfStudy, function (fosObj) {

					if (fosObj.name == fosAoiSearch.selectedFos) {
						fosAoiSearch.selectedFosJsonResponse = fosObj;
					}

					$.map(fosObj.areas, function (areaObj) {
						$.map(areaObj.levels, function (levelObj) {
							$.map(levelObj.programs, function (programObj) {
								// check to pull only parent programs
								if (programObj.attributes && programObj.attributes.isParentProgram) {
									fosAoiSearch.allProgramsObj[programObj.name] = programObj
								}
							});

						});
					});
				});

				fosAoiSearch.degreeAPIData = fosAoiSearch.getDegreeData(fosAoiSearch.apiResponse, fosAoiSearch.selectedFos);

				// TODO: format the api response to populate search and results section
				fosAoiSearch.updateElementHtml(fosAoiSearch.fosAoiSearchTemplate, fosAoiSearch.getMockJSONData(fosAoiSearch.apiResponse), $(".accordion-container-left")).then(function () {

					var accordionLeft = new Accordion('.accordion-container-left');
					fosAoiSearch.updateSearchSelections();
					fosAoiSearch.populateResultsSection(); 
					$("input[name*='degree']").click(function() {
						var titleNmae = '';
						fosAoiSearch.checkBoxmark(titleNmae, $(this).val(), this.checked);
					});                 				
                    $("input[id*='bachelors']").click(function () {
                        $("#checkAllbachelor").prop('checked', false);
                        var loopData = $("input:checkbox[id*='bachelors']:checked");
                        var titleNmae = $(this)[0].id.split("-")[0];
						var bachelorDatalength = $("input:checkbox[id*='bachelors']").length;
						checkedLength = $("input:checkbox[id*='bachelors']:checked").length;
                        if (loopData.length == bachelorDatalength) {
                            $("#checkAllbachelor").prop('checked', true);
                        }
                        fosAoiSearch.checkBoxmark(titleNmae, $(this).val(), this.checked);
                    });
                    $("input[id*='masters']").click(function () {
                        $("#checkAllMasters").prop('checked', false);
                        var loopData = $("input:checkbox[id*='masters']:checked");
						var masterDatalength = $("input:checkbox[id*='masters']").length;
						checkedLength = $("input:checkbox[id*='masters']:checked").length;
                        var titleNmae = $(this)[0].id.split("-")[0];
                        if (loopData.length == masterDatalength) {
                            $("#checkAllMasters").prop('checked', true);
                        }
                        fosAoiSearch.checkBoxmark(titleNmae, $(this).val(), this.checked);
                    });
            
                    $("input[id*='doctoral']").click(function () {
                        $("#checkAllMasters").prop('checked', false);
                        var loopData = $("input:checkbox[id*='doctoral']:checked");
						var doctoralDatalength = $("input:checkbox[id*='doctoral']").length;
						checkedLength = $("input:checkbox[id*='doctoral']:checked").length;
                        var titleNmae = $(this)[0].id.split("-")[0];
                        if (loopData.length == doctoralDatalength) {
                            $("#checkAllMasters").prop('checked', true);
                        }
                        fosAoiSearch.checkBoxmark(titleNmae, $(this).val(), this.checked);
                    });
                    $("input[id*='certificate']").click(function () {
                        $("#checkAllMasters").prop('checked', false);
                        var loopData = $("input:checkbox[id*='certificate']:checked");
						var certificateDatalength = $("input:checkbox[id*='certificate']").length;
						checkedLength = $("input:checkbox[id*='certificate']:checked").length;
                        var titleNmae = $(this)[0].id.split("-")[0];
                        if (loopData.length == certificateDatalength) {
                            $("#checkAllMasters").prop('checked', true);
                        }
                        fosAoiSearch.checkBoxmark(titleNmae, $(this).val(), this.checked);
                    });
                    $("input[id*='associates']").click(function () {
                        $("#checkAllMasters").prop('checked', false);
                        var loopData = $("input:checkbox[id*='associates']:checked");
						var associatesDatalength = $("input:checkbox[id*='associates']").length;
						checkedLength = $("input:checkbox[id*='associates']:checked").length;
                        var titleNmae = $(this)[0].id.split("-")[0];
                        if (loopData.length == associatesDatalength) {
                            $("#checkAllMasters").prop('checked', true);
                        }
                        fosAoiSearch.checkBoxmark(titleNmae, $(this).val(), this.checked);
                    });

				});
		      	} else {
				// TODO : display the error message
				fosAoiSearch.showZipErrorMsg();
			}

		});
	},


	updateSearchSelections: function () {

	},


	populateResultsSection: function () {

	},


	getZipCode: function () {
		// check the onload anonymous function on how zip code value is set on input fields
		return $(".zipCodeInputBox").val();
	},


	updateZipCode: function (newZipCode) {
		// update the value
		$(".zipCodeInputBox").val(newZipCode);
	},
	updateFosDropdown: function (fosval) {
		// update the value
		$(".selectProgram").val(fosval);
	},


	/**
 * showZipErrorMsg(): this method is use to show and hide tooltip
 */
    showZipErrorMsg: function () {
		$("span.tooltiptext").removeClass("showTooltip");
		$("div.showDataBox").removeClass("boxHidden");

        if($.trim($(".zipCodeInputBox").val()) == ''){
			removeAllData();
            $('span.error_msg').html("Please Enter Zip code.");
			$("span.tooltiptext").addClass("showTooltip");		
         }else if($(".zipCodeInputBox").val().length != 5){
            $('span.error_msg').html("Please Enter 5 digit Zip code number.");
            $("span.tooltiptext").addClass("showTooltip");
         }else if($(".zipCodeInputBox").val() !== "" && !$.isNumeric($(".zipCodeInputBox").val())){
            $('span.error_msg').html("Please Enter numeric digit.");
            $("span.tooltiptext").addClass("showTooltip");
         }else if(zipValid){
            $('span.error_msg').html("Please Enter Valid Zip code.");
            $("span.tooltiptext").addClass("showTooltip");
         }
         else{
            $('span.error_msg').html('');
            $("span.tooltiptext").removeClass("showTooltip");
		 }

		 $("div.showDataBox").addClass("boxHidden");
    },


	//it will build service URLs based on the zip code
	getServiceURL: function (zip) {
		return this.plctServiceUrl + "/programs/availability/fos?postalCode=" + zip;
	},


	//it updates html of the element with response of handlebars 
	updateElementHtml: function (tempalteFilePath, jsonObj, $el) {
		return UopxSearch.templates.execute(tempalteFilePath, jsonObj).done(function (html) {
			$el.html(html);
		});
	},


	getJsonResponse: function (url) {
		return $.ajax({
			type: "GET",
			url: url,
			cache: false,
			headers: {
				Accept: "application/json; charset=utf-8",
				"Content-Type": "application/json; charset=utf-8"
			},
			contentType: "application/json"

		}).done(function (res) {
			return res
		})
	},


	getMockJSONData: function (apiResponse) {

		var apiResponseObj = {};
		var fosData = [];
		var degreeAPIData = fosAoiSearch.degreeAPIData;
		$.each(degreeAPIData, function (key, degree) {
			fosData.push(fosAoiSearch.createMockObj(degree.title, degree.name));


		});

		apiResponseObj.fosData = fosData;
		console.log('apiResponseObj--', apiResponseObj);
		return apiResponseObj;
	},


	createMockObj: function (degreeTitle, degreeName) {
		var degreeObj = {};
		degreeObj.name = degreeTitle;
		degreeObj.aoiList = this.getMockAOIArray(fosAoiSearch.apiResponse, fosAoiSearch.selectedFos, degreeName);
		degreeObj.aoiList.map((val, index, arr) => {
                    console.log('val', val);               
                });
		return degreeObj;
	},


	getMockAOIArray: function (jsonData, selectedFOS, degreeLevels) {
		var aoiList = [];
		var aoiAPIData = fosAoiSearch.getAreasOfInterestData(jsonData, selectedFOS, degreeLevels);
		$.each(aoiAPIData, function (key, aoi) {
            var idData = degreeLevels+'-'+key;
			aoiList.push({
				name: aoi.title,
				value: aoi.name,
				id: idData
			});


		});


		return aoiList;
	},

	getAreasOfInterestData: function (jsonData, selectedFOS, degreeLevels) {

		var fosObjArray = [];

		if (selectedFOS === "view-all") {
			fosObjArray = jsonData.fieldOfStudy;
		} else {
			fosObjArray = $.grep(jsonData.fieldOfStudy, function (element, index) {
				return element.name == selectedFOS;
			});
		}

		// get all the Area of Interest
		var aoiAllArray = $.map(fosObjArray, function (fosObj) {
			return fosObj.areas
		});

		// degree levels can be view-all, certificate or the acutal degree
		var aoiArray = $.grep(aoiAllArray, function (element, index) {
			// do not show Hospitality and Retail Management
			if (fosAoiSearch.disabledAOIArray.indexOf(element.name) > -1) {
				return false;
			} else if (degreeLevels == "view-all") {
				return true;
			} else {
				for (var i = 0; i < element.levels.length; i++) {
					if (degreeLevels == "certificate" && fosAoiSearch.certificateArray.indexOf(element.levels[i].name) > -1) {
						return true;
					} else if (element.levels[i].name == degreeLevels) {
						return true;
					}
				}
				return false;
			}
		});

		// apply sorting
		aoiArray = aoiArray.sort(function (a, b) {
			return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
		});

		return aoiArray;

	},

	getDegreeData: function (jsonData, selectedFOS) {

		var fosObjArray = [];

		fosObjArray = $.grep(jsonData.fieldOfStudy, function (element, index) {
			return element.name == selectedFOS;
		});


		// get all the degree levels
		var degreeArray = $.map(fosObjArray, function (fosObj) {
			return $.map(fosObj.areas, function (areasObj) {
				return $.map(areasObj.levels, function (levelObj) {
					return {
						"name": levelObj.name,
						"title": levelObj.title
					};
				});
			});
		});

		// remove duplicates
		degreeArray = fosAoiSearch.removeDuplicates(degreeArray, "name");

		// check for certificate program
		var certArray = $.grep(degreeArray, function (element, index) {
			return element.name.includes("certificate") ? true : false;
		});

		// suppress certificate degrees
		degreeArray = $.grep(degreeArray, function (element, index) {
			return fosAoiSearch.certificateArray.indexOf(element.name) == -1;
		});

		// suppress non-degree
		degreeArray = $.grep(degreeArray, function (element, index) {
			return ["nondegree"].indexOf(element.name) == -1;
		});


		// add certificate
		if (certArray.length > 0) {
			degreeArray.push({
				"name": "certificate",
				"title": "Certificate"
			});
		}


		// apply sorting
		for (i = 0; i < degreeArray.length; i++) {
			if (degreeArray[i].hasOwnProperty("name") && degreeArray[i].name == "associates") {
				degreeArray[i].rank = 1;
			} else if (degreeArray[i].hasOwnProperty("name") && degreeArray[i].name == "bachelors") {
				degreeArray[i].rank = 2;
			} else if (degreeArray[i].hasOwnProperty("name") && degreeArray[i].name == "masters") {
				degreeArray[i].rank = 3;
			} else if (degreeArray[i].hasOwnProperty("name") && degreeArray[i].name == "doctoral") {
				degreeArray[i].rank = 4;
			} else if (degreeArray[i].hasOwnProperty("name") && degreeArray[i].name == "certificate") {
				degreeArray[i].rank = 5;
			}
		}

		degreeArray.sort(function (a, b) {
			return a.rank - b.rank
		});

		return degreeArray;

	},

	removeDuplicates: function (array, propertyName) {
		var distinctArray = [],
			distinctVal = [];

		$.each(array, function (index, element) {
			if (element !== undefined) {
				if (distinctVal.indexOf(element[propertyName]) == -1) {
					distinctVal.push(element[propertyName]);
					distinctArray.push(element);
				}
			}
		});

		return distinctArray;
    },
	checkBoxmark: function (checkedLength, titleNmae, thisValue, thisChecked) {
		activeAccess(checkedLength,titleNmae, thisValue, thisChecked);

		/**if (thisValue != undefined && titleNmae != "") {
			if (Array.isArray(degreeParams[titleNmae])) {
				var index = degreeParams[titleNmae].indexOf(thisValue);
				if (index > -1) {
					degreeParams[titleNmae].splice(index, 1);
				} else {
					degreeParams[titleNmae].push(thisValue);
				}
			} else {
				degreeParams[titleNmae] = [];
				degreeParams[titleNmae].push(thisValue);
			}
			updateURL(degreeParams);
		}**/

	}
/**
     * Event bind for to bind methods for checkbox
     */
};
$(document).ready(function () {
	fosAoiSearch.init();
	/**
	 * Below method is call on select option box
	 */

    var navigateData = JSON.parse($('#fosUrlMapping').val());

	$(document).on('change', 'select', function(e) {
		var selected = $(this).find('option:selected');	
		var selectedItem=selected[0].value;
        if(navigateData !=undefined){
			for (var i = 0; i < navigateData.length; i++) { 
				if(navigateData[i].foslist == selectedItem) {
					var navigateUrl = navigateData[i].pageURL;
					var navigate= mainURL+'/'+navigateUrl
				  //  window.open(navigate, '_blank');
					window.open(navigate);
					}
			  }         
        }
	});
});

/**
 * Below methos call when we click on checkBox
 * @param {*} finalArray
 * @param {*} checked
 */
var temp="";
var arrayBox=[];
function activeAccess(checkedLength,titleNmae, finalArray, checked) {
	if (checked == true) {
		if(titleNmae !=""){		
			if(document.getElementById("activeUserAccess").children.length>0){

				
				    var isTitle = false;
					var boxLength =  $("#activeUserAccess").children().length;
					if(temp !=""){
						//document.getElementById("activeUserAccess").innerHTML += "<li>" + finalArray  + "</li>";					
						for (var t = 0; t <boxLength; t++) {	
							var dataTitle = $("#activeUserAccess").children()[t].innerHTML;
							//console.log('wewewewewewew', $("#activeUserAccess").children()[t].innerHTML);																				
							var inde = arrayBox.indexOf(dataTitle);
							if (inde > -1) {
							}else{								
								arrayBox.push(dataTitle);
							}
							console.log('arrayBox->>>--', arrayBox);	
						}
						if(arrayBox.length>0){
							var index = arrayBox.indexOf(finalArray);
							var indexTitle = arrayBox.indexOf(titleNmae);
							if (index > -1 && indexTitle == -1) {
								document.getElementById("activeUserAccess").innerHTML += "<li>" + titleNmae  + "</li>";
								//$("#activeUserAccess").innerHTML += "<li>" + titleNmae  + "</li>";
								console.log('$("#activeUserAccess").innerHTML', $("#activeUserAccess").innerHTML);
								var indew = arrayBox.indexOf(titleNmae);
								if (indew > -1) {
								}else{								
									arrayBox.push(titleNmae);
								}
								console.log('titleNmae->>>--', arrayBox);
							}else{								
								if (indexTitle > -1) {
							
								}else{
									document.getElementById("activeUserAccess").innerHTML += "<li>" + titleNmae  + "</li>";
									
									var inde = arrayBox.indexOf(titleNmae);
									if (inde > -1) {
									}else{								
										arrayBox.push(titleNmae);
									}
								}
							//document.getElementById("activeUserAccess").innerHTML += "<li>" + finalArray  + "</li>";
								var indec = arrayBox.indexOf(finalArray);
								if (indec > -1) {
								}else{	
									document.getElementById("activeUserAccess").innerHTML += "<li>" + finalArray  + "</li>";					
									arrayBox.push(finalArray);
								}
								console.log('arrayBrrrr-', arrayBox);
							}
						}
						}else{
							document.getElementById("activeUserAccess").innerHTML += "<li>" + titleNmae  + "</li>";
							document.getElementById("activeUserAccess").innerHTML += "<li>" + finalArray  + "</li>";
							temp = '';
							temp = titleNmae;
							arrayBox.push(titleNmae);
							arrayBox.push(finalArray);
							console.log('arrayBoxterer---', arrayBox);	
						}		
			}else{
				document.getElementById("activeUserAccess").innerHTML += "<li>" + titleNmae  + "</li>";
				document.getElementById("activeUserAccess").innerHTML += "<li>" + finalArray  + "</li>";
				temp = titleNmae;
				arrayBox.push(titleNmae);
				arrayBox.push(finalArray);
				console.log('dfdfdfd---', arrayBox);					
			}						
				
			}else{
				document.getElementById("activeUserAccess").innerHTML += "<li>" + finalArray  + "</li>";
			}
		} else {
			for (var i = 0; i < document.getElementById("activeUserAccess").children.length; i++) {	
			if(titleNmae !=""){
				var data = $("#activeUserAccess").children()[i].innerHTML;
				console.log('checkedLength', checkedLength);
				if(checkedLength==0){
					for (var r = 0; r <= document.getElementById("activeUserAccess").children.length; r++) {
						console.log('checkedLengthsdsd', document.getElementById("activeUserAccess").children[r]);
						var d = document.getElementById("activeUserAccess");
						var childElememt;
						var dataRem;
						if(document.getElementById("activeUserAccess").children.length==1){
							childElememt = $("#activeUserAccess").children()[0];
							dataRem = $("#activeUserAccess").children()[0].innerHTML;
						}else{
							childElememt = $("#activeUserAccess").children()[r];
							dataRem = $("#activeUserAccess").children()[r].innerHTML;
						}						
					}
				}
			}else{
				var data = $("#activeUserAccess").children()[i].innerHTML;
			}
			if (data == finalArray) {
				var indexRemove = arrayBox.indexOf(finalArray);
					if (indexRemove > -1) {
						arrayBox.splice(indexRemove, 1);
					}else{								
					//	arrayBox.push(titleNmae);
					}
				var d = document.getElementById("activeUserAccess");
				var childElememt = $("#activeUserAccess").children()[i];
				$("#activeUserAccess").children()[i].checked = false;
				d.removeChild(childElememt);
				console.log('REMONE---', arrayBox);	
			}

			console.log('arrayBox', arrayBox);
		}
	}
	childLengthCount =$("#activeUserAccess").children().length;
	findChild();
}
/**
 * Below method call when we click on cross icon in right side.
 */
	function findChild() {
        var childlen = $("#activeUserAccess").children().length;;
        checkAllChecked();
	}
	/**
	 * removeAllData: remove all code when zip code is blank
	 */
	function removeAllData() {
        var d = document.getElementById("activeUserAccess");
        var checketlent = $("input:checkbox[type=checkbox]").length;
        var checkedMatch = $("input:checkbox[type=checkbox]:checked").length;
        if ((document.getElementById("activeUserAccess").children.length > 0)) {
            for (var i = 0; i < document.getElementById("activeUserAccess").children.length; i++) {
                if (document.getElementById("activeUserAccess").children[i].innerHTML) {
                    var removeDId = '#' + $("input:checkbox[type=checkbox]:checked")[i].id;
                    $(removeDId).prop('checked', false);
                    var childElememt = document.getElementById("activeUserAccess").children[i];
                    d.removeChild(childElememt);
                }
            }
        }
    
        /** for (var h = 0; h< checketlent; h++) {
             if ($("input:checkbox[type=checkbox]:checked")[h]) {
                     var removeDId = '#' + $("input:checkbox[type=checkbox]:checked")[h].id;
                     $(removeDId).prop('checked', false);
             }
         }**/
        degreeParams = {};
        updateURL(degreeParams);
    
    
    }
	/**
	 * 
	 * @param {*} thisData 
	 * @param {*} titleNmae 
	 */
   
    /**
     * below code for checkAllMasters
     */
   
	function checkAllChecked() {
		$("ul#activeUserAccess li").click(function () {
			var checketlent = $("input:checkbox[type=checkbox]").length;
			var checkedMatch = $("input:checkbox[type=checkbox]:checked").length;
			if (checkedMatch > 0) {
				for (var i = 0; i < checketlent; i++) {
					if ($("input:checkbox[type=checkbox]:checked")[i]) {
						var valueMatch = $("input:checkbox[type=checkbox]:checked")[i].defaultValue;
						var valueMatchId = $("input:checkbox[type=checkbox]:checked")[i].id;
						var keyMatch = $("input:checkbox[type=checkbox]:checked")[i].id.split("-")[0];
						var dataTextLength = $(this)[0].innerHTML.split("-");
						var dataTex = $(this)[0].innerHTML;
	
						/**if(dataTextLength.length>1){
							var dataText = $(this)[0].innerHTML.split("-")[1];
							var index = degreeParams[keyMatch].indexOf(dataText);
							if (index > -1) {
								degreeParams[keyMatch].splice(index, 1);
							}
							updateURL(degreeParams);
							}else{
								var dataText = $(this)[0].innerHTML;
							}**/
	
						if ((valueMatch == dataTex)) {
							var removeDId = '#' + $("input:checkbox[type=checkbox]:checked")[i].id;
							$(removeDId).prop('checked', false);
						}
					}
				}
				$(this).remove();
				var loopData = $("input:checkbox[name*='bachelor']:checked");
				var masterData = $("input:checkbox[name*='master']:checked");
				var bachelorDatalength = $("input:checkbox[name*='bachelor']").length;
				var masterDatalength = $("input:checkbox[name*='master']").length;
				var checkedMatch = $("input:checkbox[type=checkbox]:checked").length;
				childLengthCount = $("input:checkbox[type=checkbox]:checked").length;
				if (loopData.length < bachelorDatalength) {
					$("#checkAllbachelor").prop('checked', false);
				}
				if (masterData.length < masterDatalength) {
					$("#checkAllMasters").prop('checked', false);
				}
			}
			if (this.innerHTML) {
				for (var j = 0; j <= $('select.selectProgram').children.length; j++) {
					if ($('select.selectProgram')[0].children[j].innerHTML === this.innerHTML) {
						$(this).remove();
						$("select.selectProgram").val($("select.selectProgram:first").val());
					}
				}
			}
		});
	}
/**
 * findInArray(ar, val): it will return index of matched value in array data
 * @param {*} ar :it will accept array data
 * @param {*} val : it will accept current value
 */
function findInArray(ar, val) {
    for (var i = 0,len = ar.length; i < len; i++) {
        if ( ar[i] === val ) { 
            return i;
        }
    }
    return -1;
}
function callB(){
     var d = document.getElementById("activeUserAccess");
     var childElememt = document.getElementById("activeUserAccess").children;         
     var loopDataNot = $("input:checkbox[type=checkbox]:not(:checked)");
     var rightBoxLen = document.getElementById("activeUserAccess").children.length;
     var loopData = $("input:checkbox[type=checkbox]:checked:not(input:checkbox[value*='All'])");
     childArray=[];
     allArradata=[];
     matchData=[];
     notMatchData = [];
     notMatchuncheckData = [];
     for (var m = 0; m < rightBoxLen; m++) {
         allArradata.push(document.getElementById("activeUserAccess").children[m].innerHTML);
     }
 if (childLengthCount > 0) {                        
         if (loopDataNot.length>0) {
             for (var g = 0; g < loopDataNot.length; g++) {
                 notMatchuncheckData.push(loopDataNot[g].value);
             }                  
             notMatchuncheckData.forEach((item,index)=>{                              
                 if(allArradata.includes(item)){
                     if(findInArray(allArradata, item) != -1){
                         var childElememt = document.getElementById("activeUserAccess").children[findInArray(allArradata, item)];
                         d.removeChild(childElememt);
                         allArradata=[];
                         console.log(d.children.length);
                         for (var y = 0; y< d.children.length; y++) {
                             allArradata.push(document.getElementById("activeUserAccess").children[y].innerHTML);
                         }
                     }                          
                 }
             })
         }
 
         if ((allArradata.length>0) && (rightBoxLen > 0)) {
             if (loopData.length>0) {
                 for (var m = 0; m < loopData.length; m++) {
                     childArray.push(loopData[m].value);
                 }
                 if (childArray.length>0) {                         
                     childArray.forEach(item=>{                              
                         if(allArradata.includes(item)){
                             matchData.push(item);
                           
                         }else{
                             notMatchData.push(item);
                         }
                     })
                     for (var p = 0; p < notMatchData.length; p++) {
                         activeAccess(notMatchData[p], true);
                     }  
                 }
                 }
             }
     if (document.getElementById("activeUserAccess").children.length == 0) {
         childLengthCount = 0;
         var loopData = $("input:checkbox[type=checkbox]:checked:not(input:checkbox[value*='All'])");
         if (loopData) {
             for (var m = 0; m < loopData.length; m++) {
                 activeAccess(loopData[m].defaultValue, true);
             }
         }
     }
 } else {
    var loopData = $("input:checkbox[type=checkbox]:checked:not(input:checkbox[value*='All'])");
    if (loopData.length>0) {
        for (var m = 0; m < loopData.length; m++) {
            activeAccess(loopData[m].defaultValue, true);
        }
    }              
 }
 childLengthCount = document.getElementById("activeUserAccess").children.length;
}

/**
 * updateURL(params): it is use to set param in URL
 * @param {*} params 
 */
  function updateURL(params) {
	var str = (jQuery.param(params)).replace(/%5B%5D/g, "");
	// var str = (jQuery.param(params));
	if (history.pushState) {
		var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + str;
		window.history.pushState({
			path: newurl
		}, '', newurl);
	}
}

// to disable Back-Forward Cache for Firefox
window.onunload = function () {};