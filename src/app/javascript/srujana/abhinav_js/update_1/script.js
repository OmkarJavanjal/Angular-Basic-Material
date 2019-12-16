var checkedData = [];
var selectedProgramData = [];
var activeUserAccessList = '';
var degreeArray = [];
var nameList = '';
var bachelorArray = [];
var childLengthCount;
var finalArray = ["Accounting", "Enterprice", "Finnance", "Human Resources", "marketing", "Online", "On Campus"];
$(document).ready(function() {
	 updateURL(JSON.parse(sessionStorage.getItem('data')));
	 
    $('.panel-collapse').on('show.bs.collapse', function() {
        $(this).siblings('.panel-heading').addClass('active');
    });
    $('.panel-collapse').on('hide.bs.collapse', function() {
        $(this).siblings('.panel-heading').removeClass('active');
    });
    /** First select Array */
    var temData;
    var tempIndex;
    $("select.selectProgram").change(function() {
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
    /**
     * Below method call when we click on single check box
     */
	  var Bachelorparams={};
    var selectedData =[];
    $("input[name*='bachelor']").click(function() {
        $("#checkAllbachelor").prop('checked', false);
        var loopData = $("input:checkbox[name*='bachelor']:checked");
        if (loopData.length == 5) {
            $("#checkAllbachelor").prop('checked', true);
        }
        activeAccess($(this).val(), this.checked);
		var index = selectedData.indexOf($(this).val());
            if (index > -1) {
                selectedData.splice(index, 1);
            }else{
                selectedData.push($(this).val());
            }
        Bachelorparams['Bachelor']=selectedData;
      
        updateURL(Bachelorparams);
    });

    /**
     * Below method call when we click on single check box for Master check Box
     */
    $("input[name*='master']").click(function() {
        $("#checkAllMasters").prop('checked', false);
        var loopData = $("input:checkbox[name*='master']:checked");
        if (loopData.length == 5) {
            $("#checkAllMasters").prop('checked', true);
        }
        activeAccess($(this).val(), this.checked);
		
    });
});

/**
 * Below methos call when we click on checkBox
 * @param {*} finalArray
 * @param {*} checked
 */
function activeAccess(finalArray, checked) {
    console.log('finalArray', finalArray);
    if (checked == true) {
        document.getElementById("activeUserAccess").innerHTML += "<li>" + finalArray + "</li>";
    } else {
        for (var i = 0; i < document.getElementById("activeUserAccess").children.length; i++) {
            if (document.getElementById("activeUserAccess").children[i].innerHTML == finalArray) {
                let d = document.getElementById("activeUserAccess");
                let childElememt = document.getElementById("activeUserAccess").children[i];
                document.getElementById("activeUserAccess").children[i].checked = false;
                d.removeChild(childElememt);
            }
        }
    }
    childLengthCount = document.getElementById("activeUserAccess").children.length;
    console.log('childLengthCount', childLengthCount);
}



/******************************1 type demo********************************************* */

function updateURL(params) {
  var str = (jQuery.param(params)).replace(/%5D%5B%5D/g, "").replace(/%5B/g, "/").replace(/%5D/g, "");
    if (history.pushState) {
        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?'+ str;            
        window.history.pushState({path:newurl},'',newurl);       
    }
  }
  
 /******************************2 type demo***********************************************************/
/**
function updateURL(params) {
    var str = (jQuery.param(params));
    if (history.pushState) {
        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?'+ str;       
        window.history.pushState({path:newurl},'',newurl);     
    }
  }
  **/
  
  
  
  
  
  
  
  