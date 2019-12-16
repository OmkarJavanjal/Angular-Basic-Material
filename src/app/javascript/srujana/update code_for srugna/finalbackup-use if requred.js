var checkedData = [];
var selectedProgramData = [];
var activeUserAccessList = '';
var degreeArray = [];
var nameList = '';
var bachelorArray = [];
var childLengthCount;
var finalArray = ["Accounting", "Enterprice", "Finnance", "Human Resources", "marketing", "Online", "On Campus"];
$(document).ready(function() {
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
     * checkAllCheckBox(): this method will be cal when
     */
    checkAllCheckBox();

    /** Second degree Array */
    $("input[name*='degree']").click(function() {
        activeAccess($(this).val(), this.checked);
    });
    /**
     * Below method call when we click on single check box
     */
    $("input[name*='bachelor']").click(function() {
        $("#checkAllbachelor").prop('checked', false);
        var loopData = $("input:checkbox[name*='bachelor']:checked");
        if (loopData.length == 5) {
            $("#checkAllbachelor").prop('checked', true);
        }
        activeAccess($(this).val(), this.checked);
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
function checkAllChecked() {
    $("ul#activeUserAccess li").click(function() {
        var checketlent = $("input:checkbox[type=checkbox]").length;
        var checkedMatch = $("input:checkbox[type=checkbox]:checked").length;
        if (checkedMatch > 0) {
            for (var i = 0; i < checketlent; i++) {
                if ($("input:checkbox[type=checkbox]:checked")[i]) {
                    var valueMatch = $("input:checkbox[type=checkbox]:checked")[i].defaultValue;
                    if (valueMatch == $(this)[0].innerHTML) {
                        var removeDId = '#' + $("input:checkbox[type=checkbox]:checked")[i].id;
                        $(removeDId).prop('checked', false);
                    }
                }
            }
            $(this).remove();
            var loopData = $("input:checkbox[name*='bachelor']:checked");
            var masterData = $("input:checkbox[name*='master']:checked");
            childLengthCount = loopData.length + masterData.length;
            if (loopData.length < 5) {
                $("#checkAllbachelor").prop('checked', false);
            }
            if (masterData.length < 5) {
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
var allArradata=[];
var childArray = [];
var matchData=[];
var notMatchData = [];
var notMatchuncheckData = [];
/**
 * Below method is call when we click on All check box
 */
function checkAllCheckBox() {
    $("#checkAllbachelor").click(function() {
        $("input[name*='bachelor']").not(this).prop('checked', this.checked);
           let d = document.getElementById("activeUserAccess");
            let childElememt = document.getElementById("activeUserAccess").children;         
            var loopDataNot = $("input:checkbox[type=checkbox]:not(:checked)");
            var rightBoxLen = document.getElementById("activeUserAccess").children.length;
            var loopData = $("input:checkbox[type=checkbox]:checked");
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
                                let childElememt = document.getElementById("activeUserAccess").children[findInArray(allArradata, item)];
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
                var loopData = $("input:checkbox[name*='bachelor']:checked");
                if (loopData) {
                    for (var m = 0; m < loopData.length; m++) {
                        activeAccess(loopData[m].defaultValue, true);
                    }
                }
            }
        } else {
            if (this.checked) {
                var loopData = $("input:checkbox[name*='bachelor']:checked");
                if (loopData) {
                    for (var m = 0; m < loopData.length; m++) {
                        activeAccess(loopData[m].defaultValue, true);
                    }
                }
            } else {
                var loopDataNot = $("input:checkbox[name*='bachelor']:not(:checked)");
                if (loopDataNot) {
                    for (var m = 0; m < loopDataNot.length; m++) {
                        activeAccess(loopDataNot[m].defaultValue, false);
                    }
                }
            }
        }
        childLengthCount = document.getElementById("activeUserAccess").children.length;
    });
};
