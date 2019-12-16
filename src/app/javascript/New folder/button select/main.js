var filterValues = {};
var isSelected=true;
var election = document.getElementById('election');
var payroll = document.getElementById('payroll');
var noThanks = document.getElementById('noThanks');
var nextBtn = document.getElementById('next');
function selectedBtn(selectedId){
	 var selectedOption = document.getElementById(selectedId);
	 var selectedBtnValue = selectedOption.value;
	 if(selectedOption.classList.contains('selectedBtn')){
		 selectedOption.classList.remove("selectedBtn");
		 delete filterValues[selectedId];
	 }else{
		 selectedOption.classList.add("selectedBtn");
		 filterValues[selectedId] = isSelected;
	 }
	 if(selectedBtnValue==="No Thanks" && (filterValues.election==true || filterValues.payroll==true)){
		 filterValues = {};
		 filterValues[selectedId] = isSelected;
		 election.classList.remove("selectedBtn");
		 payroll.classList.remove("selectedBtn");
	 }else if(filterValues.election==true || filterValues.payroll==true){
		 delete filterValues['noThanks'];
		 filterValues[selectedId] = isSelected;
		 noThanks.classList.remove("selectedBtn");
	 }	 	 
	 console.log(filterValues); 
	 nextBtn.disabled = true;
	 //document.getElementById("roleId").textContent= roleAccess; 
}
/**var filterValues={
	"A2":false,
	"B2":false,
	"C2":false,
	"D2":false,
	"E2":false
};

var filterValues={
	"A2":false,
	"B2":false,
	"C2":false,
	"D2":false,
	"E2":false
};
window.checkboxValue = function (id) {
    var checkboxesChecked = document.getElementById(id); 
    var checkboxes = document.getElementById(id).value; 
    var splitEntry=checkboxes.split('');
	 var firstIndex=splitEntry[0];
	 var seconIndex=parseInt(splitEntry[1])+1;
	 var concatIndex=firstIndex+seconIndex;
     filterValues[concatIndex] = checkboxesChecked.checked;
     console.log('filterValues', filterValues);
	  for (var key in filterValues) {
		if (filterValues.hasOwnProperty(key)) {
			console.log(key + " -> " + filterValues[key]);
			if(filterValues[key]==true){			
				if(key=="E2"){
						$("label[for=" + key + "]").css("display", "inline-block");
						$("label[for=F2]").css("display", "inline-block");
						$("label[for=G2]").css("display", "inline-block");
				}
				else{
					$("label[for=" + key + "]").css("display", "inline-block");
				}
			}else{
				$("label[for=" + key + "]").css("display", "none");
				$("label[for=F2]").css("display", "none");
				$("label[for=G2]").css("display", "none");
			}
		}
	}
}

*/

var filterValues={};
window.checkboxValue = function (name) {
	  var checkboxes = document.getElementsByName(name);
	  var checkedCheckboxes = [];
	for (var i = 0; i < checkboxes.length; i++) {
		var checkId=checkboxes[i].id;
		var splitEntry=checkId.split('');
	    var firstIndex=splitEntry[0];
		var seconIndex=parseInt(splitEntry[1])+1;
		var concatIndex=firstIndex+seconIndex;
		filterValues[concatIndex] = document.getElementById(checkboxes[i].id).checked;
	  }
	 showSelectedBox(filterValues);
}
function showSelectedBox(filterValues){
	 for (var key in filterValues) {
		if (filterValues.hasOwnProperty(key)) {
			if(filterValues[key]==true){			
				if(key=="E2"){
						$("label[for=" + key + "]").css("display", "inline-block");
						$("label[for=F2]").css("display", "inline-block");
						$("label[for=G2]").css("display", "inline-block");
				}
				else{
					$("label[for=" + key + "]").css("display", "inline-block");
				}
			}else{
				$("label[for=" + key + "]").css("display", "none");
				$("label[for=F2]").css("display", "none");
				$("label[for=G2]").css("display", "none");
			}
		}
	}
}
