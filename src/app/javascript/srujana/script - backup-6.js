var childLengthCount;
var temData;
var allArradata = [];
var childArray = [];
var matchData = [];
var notMatchData = [];
var notMatchuncheckData = [];
var degreeParams = {};

/************************************************************************************************************ */
var fosAoiSearch = {

	init: function () {
		this.bindEvents();
		this.bindEventsCheckBox();
		this.eventBindcheckAllCheckBox();
	},
	/**
	 * Events Bind for Zip code validation
	 */
	bindEvents: function () {
		$(".zipCodeInputBox").change(function () {
			var newZipCode = $(".zipCodeInputBox").val();
			console.log('newZipCode', newZipCode);
			if (!newZipCode || newZipCode == '') {
				fosAoiSearch.showZipErrorMsg();
			} else {
				$('span.error_msg').html('');
			}
		});
		$(".zipCodeInputBox").focus(function () {
			$('span.error_msg').html('');
			$("span.tooltiptext").removeClass("showTooltip");
		});
		$(".zipCodeInputBox").focusout(function () {
			fosAoiSearch.showZipErrorMsg();
		});
		$(".zipCodeInputBox").keypress(function (event) {
			var charCode = (event.which) ? event.which : event.keyCode;
			fosAoiSearch.onlyZipNumber(event);
		});
	},
	/**
	 * Event bind for to bind methods for checkbox
	 */
	bindEventsCheckBox: function () {
			/** Second degree Array */
			$("input[name*='degree']").click(function() {
				var titleNmae = '';
				fosAoiSearch.checkBoxmark(titleNmae, $(this).val(), this.checked);
			});

		$("input[id*='bachelor']").click(function () {
			$("#checkAllbachelor").prop('checked', false);
			var loopData = $("input:checkbox[id*='bachelor']:checked");
			var titleNmae = $(this)[0].id.split("-")[0];
			var bachelorDatalength = $("input:checkbox[id*='bachelor']").length;
			if (loopData.length == bachelorDatalength) {
				$("#checkAllbachelor").prop('checked', true);
			}
			fosAoiSearch.checkBoxmark(titleNmae, $(this).val(), this.checked);
		});

		$("input[id*='master']").click(function () {
			$("#checkAllMasters").prop('checked', false);
			var loopData = $("input:checkbox[id*='master']:checked");
			var masterrDatalength = $("input:checkbox[id*='master']").length;
			var titleNmae = $(this)[0].id.split("-")[0];
			if (loopData.length == masterrDatalength) {
				$("#checkAllMasters").prop('checked', true);
			}
			fosAoiSearch.checkBoxmark(titleNmae, $(this).val(), this.checked);
		});

		$("input[id*='doctorate']").click(function () {
			$("#checkAllMasters").prop('checked', false);
			var loopData = $("input:checkbox[id*='doctorate']:checked");
			var masterrDatalength = $("input:checkbox[id*='doctorate']").length;
			var titleNmae = $(this)[0].id.split("-")[0];
			if (loopData.length == masterrDatalength) {
				$("#checkAllMasters").prop('checked', true);
			}
			fosAoiSearch.checkBoxmark(titleNmae, $(this).val(), this.checked);
		});

		/**
		 * below method will call when we select option from select
		 */
		$("select.selectProgram").change(function () {
			var selectedProgram = $(this).children("option:selected").val();
			if (selectedProgram) {
				let d = document.getElementById("activeUserAccess");
				if ((document.getElementById("activeUserAccess").children.length > 0) && (temData != undefined)) {
					for (var i = 0; i < document.getElementById("activeUserAccess").children.length; i++) {
						for (var j = 0; j < $(this)[0].children.length; j++) {
							if ((document.getElementById("activeUserAccess").children[i].innerHTML == $(this)[0].children[j].innerHTML)) {
								let childElememt = document.getElementById("activeUserAccess").children[i];
								d.removeChild(childElememt);
								if (selectedProgram !== "Select") {
									document.getElementById("activeUserAccess").innerHTML += "<li>" + selectedProgram + "</li>";
								}
								if (selectedProgram == "Select") {
									temData = undefined;
								}
							}
						}
					}
				} else if ((document.getElementById("activeUserAccess").children.length > 0)) {
					if (selectedProgram !== "Select") {
						document.getElementById("activeUserAccess").innerHTML += "<li>" + selectedProgram + "</li>";
						temData = selectedProgram;
					}
				} else if (temData == undefined) {
					if (selectedProgram !== "Select") {
						document.getElementById("activeUserAccess").innerHTML += "<li>" + selectedProgram + "</li>";
						temData = selectedProgram;
					}
				} else {

					if (selectedProgram !== "Select") {
						document.getElementById("activeUserAccess").innerHTML += "<li>" + selectedProgram + "</li>";
						temData = selectedProgram;
					}
				}
				findChild();
			}
		});
	},
	checkBoxmark: function (titleNmae, thisValue, thisChecked) {
		activeAccess(titleNmae, thisValue, thisChecked);
		if (thisValue != undefined && titleNmae != "") {
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
		}
	},
	/**
	 * Below method is call when we click on All check box
	 */
	eventBindcheckAllCheckBox: function () {
		$("#checkAllbachelor").click(function () {
			$("input[name*='bachelor']").not(this).prop('checked', this.checked);
			var delay = 500;
			setTimeout(function () {
					callB();
				},
				delay
			);
		});
		$("#checkAllMasters").click(function () {
			$("input[name*='master']").not(this).prop('checked', this.checked);
			setTimeout(function () {
				callB();
			}, 500);
		});
		$("#checkAllDoctorate").click(function () {
			$("input[name*='doctorate']").not(this).prop('checked', this.checked);
			setTimeout(function () {
				callB();
			}, 500);
		});
	},
	/**
	 * showZipErrorMsg(): this method is use to show and hide tooltip
	 */
	showZipErrorMsg: function () {
		$("span.tooltiptext").removeClass("showTooltip");
		if ($.trim($(".zipCodeInputBox").val()) == '') {
			$('span.error_msg').html("Please Enter Zip code.");
			$("span.tooltiptext").addClass("showTooltip");
			removeAllData();
		} else if ($(".zipCodeInputBox").val().length != 5) {
			$('span.error_msg').html("Please Enter 5 digit Zip code number.");
			$("span.tooltiptext").addClass("showTooltip");
		} else if ($(".zipCodeInputBox").val() !== "" && !$.isNumeric($(".zipCodeInputBox").val())) {
			$('span.error_msg').html("Please Enter numeric digit.");
			$("span.tooltiptext").addClass("showTooltip");
		} else {
			$('span.error_msg').html('');
			$("span.tooltiptext").removeClass("showTooltip");
		}
	},
	onlyZipNumber: function (e) {
		console.log(e.which);
		if ((e.which >= 48 && e.which <= 57)) {
			return true;
		} else {
			return false;
		}
	}
}
/********************************************************************************************************** */
$(document).ready(function () {
	let dataJson =[
		{"foslist": "Business Program","pageURL":"deals/"},
		{"foslist": "Business","pageURL":"scripts/"}
  ];
	fosAoiSearch.init();
	var navigateData = $('#fosUrlMapping').val();
	console.log('navigateData check', navigateData);
	$(document).on('change', 'select', function(e) {
		var selected = $(this).find('option:selected');
		console.log('selected', selected[0].value);
		let selectedItem=selected[0].value;
		let mainURL ="https://www.codexworld.com";
		let dataJson =[
				{"foslist": "technology","pageURL":"/about_us/our-roots-hero"},
				{"foslist": "criminal-justice","pageURL":"/at-a-glance"}
		  ];
		  dataJson.forEach(item=>{
			  console.log('item', item);
			  if(item.foslist == selectedItem) {
			  let navigateUrl = item.pageURL;
			  let navigate= mainURL+'/'+navigateUrl
			  window.open(navigate, '_blank');
			  }
		  }); 
	});

});

/**
 * Below methos call when we click on checkBox
 * @param {*} finalArray
 * @param {*} checked
 */
let temp="";
let arrayBox=[];
function activeAccess(titleNmae, finalArray, checked) {
	if (checked == true) {
		if(titleNmae !=""){		
			if(document.getElementById("activeUserAccess").children.length>0){

					let boxLength =  document.getElementById("activeUserAccess").children.length;
				    let isTitle = false;
					
					if(temp !=""){
						//document.getElementById("activeUserAccess").innerHTML += "<li>" + finalArray  + "</li>";
						for (var t = 0; t <boxLength; t++) {	
							var dataTitle = document.getElementById("activeUserAccess").children[t].innerHTML;
							arrayBox.push(document.getElementById("activeUserAccess").children[t].innerHTML);							
						}
						if(arrayBox.length>0){
							var index = arrayBox.indexOf(finalArray);
							var indexTitle = arrayBox.indexOf(titleNmae);
							if (index > -1 && indexTitle == -1) {
								document.getElementById("activeUserAccess").innerHTML += "<li>" + titleNmae  + "</li>";
							}else{								
								if (indexTitle > -1) {
							
								}else{
									document.getElementById("activeUserAccess").innerHTML += "<li>" + titleNmae  + "</li>";
								}
								document.getElementById("activeUserAccess").innerHTML += "<li>" + finalArray  + "</li>";
							}
						}
						}else{
							document.getElementById("activeUserAccess").innerHTML += "<li>" + titleNmae  + "</li>";
							document.getElementById("activeUserAccess").innerHTML += "<li>" + finalArray  + "</li>";
							temp = '';
							temp = titleNmae;
						}

			



			}else{
				document.getElementById("activeUserAccess").innerHTML += "<li>" + titleNmae  + "</li>";
				document.getElementById("activeUserAccess").innerHTML += "<li>" + finalArray  + "</li>";
				temp = titleNmae;
				
			}						
				
			}else{
				document.getElementById("activeUserAccess").innerHTML += "<li>" + finalArray  + "</li>";
			}
		} else {
			for (var i = 0; i < document.getElementById("activeUserAccess").children.length; i++) {	
			if(titleNmae !=""){
				var data = document.getElementById("activeUserAccess").children[i].innerHTML.split('-')[1];
			}else{
				var data = document.getElementById("activeUserAccess").children[i].innerHTML;
			}
			if (data == finalArray) {
				let d = document.getElementById("activeUserAccess");
				let childElememt = document.getElementById("activeUserAccess").children[i];
				document.getElementById("activeUserAccess").children[i].checked = false;
				d.removeChild(childElememt);
			}
		}
	}
	childLengthCount = document.getElementById("activeUserAccess").children.length;
	findChild();
}
/**
 * Below method call when we click on cross icon in right side.
 */
function findChild() {
	let childlen = document.getElementById("activeUserAccess").children.length;
	checkAllChecked();
}
/**
 * below code for checkAllMasters
 */
function removeAllData() {
	let d = document.getElementById("activeUserAccess");
	var checketlent = $("input:checkbox[type=checkbox]").length;
	var checkedMatch = $("input:checkbox[type=checkbox]:checked").length;
	if ((document.getElementById("activeUserAccess").children.length > 0)) {
		for (var i = 0; i < document.getElementById("activeUserAccess").children.length; i++) {
			if (document.getElementById("activeUserAccess").children[i].innerHTML) {
				var removeDId = '#' + $("input:checkbox[type=checkbox]:checked")[i].id;
				$(removeDId).prop('checked', false);
				let childElememt = document.getElementById("activeUserAccess").children[i];
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
					if(dataTextLength.length>1){
						var dataText = $(this)[0].innerHTML.split("-")[1];
						var index = degreeParams[keyMatch].indexOf(dataText);
						if (index > -1) {
							degreeParams[keyMatch].splice(index, 1);
						}
						updateURL(degreeParams);
						}else{
							var dataText = $(this)[0].innerHTML;
						}
					if ((valueMatch == dataText)) {
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
	for (var i = 0, len = ar.length; i < len; i++) {
		if (ar[i] === val) {
			return i;
		}
	}
	return -1;
}

function callB() {
	let d = document.getElementById("activeUserAccess");
	let childElememt = document.getElementById("activeUserAccess").children;
	var loopDataNot = $("input:checkbox[type=checkbox]:not(:checked)");
	var rightBoxLen = document.getElementById("activeUserAccess").children.length;
	var loopData = $("input:checkbox[type=checkbox]:checked:not(input:checkbox[value*='All'])");
	childArray = [];
	allArradata = [];
	matchData = [];
	notMatchData = [];
	notMatchuncheckData = [];
	for (var m = 0; m < rightBoxLen; m++) {
		allArradata.push(document.getElementById("activeUserAccess").children[m].innerHTML);
	}
	if (childLengthCount > 0) {
		if (loopDataNot.length > 0) {
			for (var g = 0; g < loopDataNot.length; g++) {
				notMatchuncheckData.push(loopDataNot[g].value);
			}
			notMatchuncheckData.forEach((item, index) => {
				if (allArradata.includes(item)) {
					if (findInArray(allArradata, item) != -1) {
						let childElememt = document.getElementById("activeUserAccess").children[findInArray(allArradata, item)];
						d.removeChild(childElememt);
						allArradata = [];
						console.log(d.children.length);
						for (var y = 0; y < d.children.length; y++) {
							allArradata.push(document.getElementById("activeUserAccess").children[y].innerHTML);
						}
					}
				}
			})
		}

		if ((allArradata.length > 0) && (rightBoxLen > 0)) {
			if (loopData.length > 0) {
				for (var m = 0; m < loopData.length; m++) {
					childArray.push(loopData[m].value);
				}
				if (childArray.length > 0) {
					childArray.forEach(item => {
						if (allArradata.includes(item)) {
							matchData.push(item);

						} else {
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
		if (loopData.length > 0) {
			for (var m = 0; m < loopData.length; m++) {
				activeAccess(loopData[m].defaultValue, true);
			}
		}
	}
	childLengthCount = document.getElementById("activeUserAccess").children.length;
}


/*************************************************************************** */
//var params = { width:1680, height:1050 };
//$('#link').attr('href','http://smashingmagazine.com');

function updateURL(params) {
	console.log(',params--', params);
	var str = (jQuery.param(params)).replace(/%5B%5D/g, "");
	// var str = (jQuery.param(params)).replace(/%5D%5B%5D/g, "").replace(/%5B/g, "/").replace(/%5D/g, "");
	//console.log('params', params);
	// var str = (jQuery.param(params));
	if (history.pushState) {
		var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + str;
		window.history.pushState({
			path: newurl
		}, '', newurl);
	}
}