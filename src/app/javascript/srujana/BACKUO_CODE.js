var checkedData = [];
var selectedProgramData = [];
var activeUserAccessList = '';
var degreeArray = [];
var nameList = '';
var bachelorArray = [];
var childLengthCount;
var finalArray = ["Accounting", "Enterprice", "Finnance", "Human Resources", "marketing", "Online", "On Campus"];
$(document).ready(function () {
	$('.panel-collapse').on('show.bs.collapse', function () {
		$(this).siblings('.panel-heading').addClass('active');
	});
	$('.panel-collapse').on('hide.bs.collapse', function () {
		$(this).siblings('.panel-heading').removeClass('active');
	});
	/** First select Array */
	var temp;
	$("select.selectProgram").change(function () {
		var selectedProgram = $(this).children("option:selected").val();
		alert(selectedProgram);
		if(selectedProgram){
			let d = document.getElementById("activeUserAccess");
		if((document.getElementById("activeUserAccess").children.length>0) && (temp !=undefined)){
			for (var i = 0; i < document.getElementById("activeUserAccess").children.length; i++) {

				for (var j = 0; j < $(this)[0].children.length; j++) {

					let childElememt = document.getElementById("activeUserAccess").children[i];
					if(document.getElementById("activeUserAccess").children[i].innerHTML == $(this)[0].children[j].innerHTML){							
						d.removeChild(childElememt);					
						if(selectedProgram !=="Select"){
							document.getElementById("activeUserAccess").innerHTML  += "<li>" + selectedProgram + "</li>";
						}else{
							d.removeChild(childElememt);
						}
					}else{
						d.removeChild(childElememt);
					}	
							
				}


			}
		}else{
			document.getElementById("activeUserAccess").innerHTML  += "<li>" + selectedProgram + "</li>";
			temp = selectedProgram;
		}
		 	 console.log('temp', temp);
		}		
	});
	/**
	 * checkAllCheckBox(): this method will be cal when 
	 */
	checkAllCheckBox();

	/** Second degree Array */
	$("input[name*='degree']").click(function () {
		activeAccess($(this).val(),this.checked);	
	});
	/**
	 * Below method call when we click on single check box
	 */
	$("input[name*='bachelor']").click(function () {
		$("#checkAllbachelor").prop('checked', false);
		var loopData = $("input:checkbox[name*='bachelor']:checked");
		if(loopData.length == 5){
			$("#checkAllbachelor").prop('checked', true);
		}
		activeAccess($(this).val(),this.checked);
	});

	/**
	 * Below method call when we click on single check box for Master check Box
	 */
	$("input[name*='master']").click(function () {
		$("#checkAllMasters").prop('checked', false);
		var loopData = $("input:checkbox[name*='master']:checked");
		if(loopData.length == 5){
			$("#checkAllMasters").prop('checked', true);
		}
		activeAccess($(this).val(),this.checked);
	});
});

/**
 * Below methos call when we click on checkBox
 * @param {*} finalArray 
 * @param {*} checked 
 */
function activeAccess(finalArray,checked){
	console.log('finalArray', finalArray);
	if (checked == true){
		document.getElementById("activeUserAccess").innerHTML  += "<li>" + finalArray + "</li>";
	} else {		
		for (var i = 0; i < document.getElementById("activeUserAccess").children.length; i++) {
			if(document.getElementById("activeUserAccess").children[i].innerHTML == finalArray){
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
function findChild(){
	let childlen = document.getElementById("activeUserAccess").children.length;
	if(childlen>0){
		checkAllChecked();
     }
}
/**
 * below code for checkAllMasters
 */
function checkAllChecked(){
	$("ul#activeUserAccess li").click(function () {
		var checketlent = $("input:checkbox[type=checkbox]").length;
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
		if(loopData.length < 5){
			$("#checkAllbachelor").prop('checked', false);
		}
		if(masterData.length < 5){
			$("#checkAllMasters").prop('checked', false);
		}
	});
}

/**
	 * Below method is call when we click on All check box
	 */
	function checkAllCheckBox() {
		$("#checkAllbachelor").click(function () {
			$("input[name*='bachelor']").not(this).prop('checked', this.checked);		
			if(childLengthCount>0){
				let d = document.getElementById("activeUserAccess");
				let childElememt = document.getElementById("activeUserAccess").children;
				console.log('childLengthCount', childLengthCount);
				for (var i = 0; i < childLengthCount; i++) {
					var loopDataNot = $("input:checkbox[name*='bachelor']:not(:checked)");
					if(loopDataNot){
						for (var m = 0; m < loopDataNot.length; m++) {
								if(document.getElementById("activeUserAccess").children[i] !=undefined){
									if( document.getElementById("activeUserAccess").children[i].innerHTML==loopDataNot[m].value){
										let childElememt = document.getElementById("activeUserAccess").children[i];
										d.removeChild(childElememt);
									}
								}						
						 }
					}	
					if(document.getElementById("activeUserAccess").children.length > 0){					
					var loopData = $("input:checkbox[name*='bachelor']:checked");
					if (loopData) {
						for (var m = 0; m < loopData.length; m++) {
							if(document.getElementById("activeUserAccess").children[i] !=undefined){
								if( document.getElementById("activeUserAccess").children[i].innerHTML==loopData[m].value){
									let childElememt = document.getElementById("activeUserAccess").children[i];
									d.removeChild(childElememt);
								}

							}			
						}				
					}
				 }
					
				 }
				 if(document.getElementById("activeUserAccess").children.length == 0){
					childLengthCount=0;
					var loopData = $("input:checkbox[name*='bachelor']:checked");
					if (loopData) {
						for (var m = 0; m < loopData.length; m++) {
							activeAccess(loopData[m].defaultValue,true);			
						}				
					}
				 }
			}else{
				if (this.checked) {
					var loopData = $("input:checkbox[name*='bachelor']:checked");
					if (loopData) {
						for (var m = 0; m < loopData.length; m++) {
							activeAccess(loopData[m].defaultValue,true);			
						}				
					}
				} else {
					var loopDataNot = $("input:checkbox[name*='bachelor']:not(:checked)");
					if(loopDataNot){
						for (var m = 0; m < loopDataNot.length; m++) {
							activeAccess(loopDataNot[m].defaultValue,false);
						}
					}
				}	
			}
			//childLengthCount = document.getElementById("activeUserAccess").children.length;
		//	alert(childLengthCount);
		});
	};	
