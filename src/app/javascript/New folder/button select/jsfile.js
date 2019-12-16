// Configuration. Don't delete this.
import "./internal/configure";
import $ from "jquery";
import "./vidyard";
import "./testimonialVidyard"
import "./testimonial";
import "./customizedDemoTabs";

// This console.log is simply here to demonstrate the use of the baseURL
// variable, which is defined in each HTML file. You should remove it before
// publishing your bundle; if you don't need this variable, you can, and
// should, remove it from your HTML files, too.
//
// Note that in dev, this will always have a value of "/bundle". However, it
// will have a dynamic value when your bundle is deployed.
//
// TODO: remove this line
console.log(
  `cec-customized-demo has a bundle dir value of: ${document
    .querySelector(".CecCustomizeddemouicheckpoint")
    .getAttribute("data-base-url")}`
);

console.log(videoGroup);

window.customizedVideoId = 'Nb85VnAEbcfndqnrWtJar7';
window.testimonialVideoId = 'CarbxnapfVXdQvURFQgGth';
/**
//define filterValues object to store flag based on which we apply hide/show
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
		
		// If no need below code then remove it.
		if (checkboxes[i].checked) {
		  checkedCheckboxes.push(checkboxes[i].id);
		}
		
	  }
  checkboxesChecked.filter(p => p.key === name)[0].value = checkedCheckboxes;
  sessionStorage.setItem("profCheckBoxesChecked", JSON.stringify(checkboxesChecked));
  setActiveNextButton(name);
  showSelectedBox(filterValues);
}
/**
//Belo is code show hide button based on condition.
*/
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
window.setActiveNextButton = function (name) {
  var totalCheckedBoxes = checkboxesChecked.filter(p => p.key === name)[0].value.length
  if (totalCheckedBoxes > 0) {
    $("#next").addClass("profCustomDemo-navButton-active");
  } else {
    $("#next").removeClass("profCustomDemo-navButton-active");
  }
}

window.removeDuplicateUsingSet = function (arr) {
  let unique_array = Array.from(new Set(arr));
  return unique_array;
}

window.currentPage = 1;

$(document).ready(function () {
  if (document.getElementById("profCustomizedDemo-tabset")) getCheckBoxesValues();
  var url = window.location.href;
  // name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + "videos" + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  var id = new RegExp("[?&]" + "vidyard" + "(=([^&#]*)|&|#|$)").exec(url);
  if (!id || !id[2]) return '';
  if (!results) return null;
  if (!results[2]) return '';
  var videosToPlay = decodeURIComponent(results[2].replace(/\+/g, " ")).split(',');
  if (id[2] == 'Nb85VnAEbcfndqnrWtJar7') {
    loadVidyardWithoutQuestionnaire(videosToPlay, true, id[2]);
  } else if (id[2] = testimonialVideoId) {
    loadTestimonialVidyardWithoutQuestionnaire(videosToPlay, true, id[2]);
  }
});

window.nextQuestionnaire = function () {
  if (checkboxesChecked.filter(p => p.key === "questionnaire0" + currentPage)[0].value.length > 0) {

    currentPage++;
    hideShowNextPrevious();
    if (currentPage <= checkboxesChecked.length) {
      for (var i = 1; i <= checkboxesChecked.length; i++) {
        console.log(currentPage);
        if (currentPage == i) {
          $("#questionnaire0" + i).show();
          setActiveNextButton("questionnaire0" + i);
        }
        else {
          $("#questionnaire0" + i).hide();
        }
      }
    }
    else {
      fillVideoGroupFromQeustionnaire();
      $("#bg_image").hide();
      showVidyard(true, customizedVideoId);
      //video.playChapter(videoGroup[0] - 1);
      // loadVideo();
    }
  }
}

window.fillVideoGroupFromQeustionnaire = function () {
  videoGroup = [7];
  if (checkboxesChecked.filter(p => p.key === "questionnaire01")[0].value.length > 0) {
    checkboxesChecked.filter(p => p.key === "questionnaire01")[0].value.forEach(element => {
      fillArrayQuestionnaire01(element.toLowerCase());
    });
  }
  if (checkboxesChecked.filter(p => p.key === "questionnaire02")[0].value.length > 0) {
    checkboxesChecked.filter(p => p.key === "questionnaire02")[0].value.forEach(element => {
      fillArrayQuestionnaire02(element.toLowerCase());
    });
  }
  // if (checkboxesChecked.filter(p => p.key === "questionnaire03")[0].value.length > 0) {
  //   checkboxesChecked.filter(p => p.key === "questionnaire03")[0].value.forEach(element => {
  //     fillArrayQuestionnaire03(element.toLowerCase());
  //   });
  // }
  videoGroup = removeDuplicateUsingSet(videoGroup.sort(sortNumber));
}

window.checkAllQuestionsAnswered = function () {
  var allQeustionsAnswered = true;
  for (var i = 0; i < checkboxesChecked.length; i++) {
    if (checkboxesChecked[i].value.length === 0) allQeustionsAnswered = false;
  }
  if (allQeustionsAnswered) {
    document.getElementById('profCustomizedDemo-take-questionnaire').value = 'Edit my responses';
    $('#profCustomizedDemo-take-questionnaire').addClass('profCustomizedDemo-all-questionnaire-answered');
  } else {
    document.getElementById('profCustomizedDemo-take-questionnaire').value = 'Take the quiz';
    $('#profCustomizedDemo-take-questionnaire').removeClass('profCustomizedDemo-all-questionnaire-answered');
  }
}

// show/hide model
window.showModal = function (show) {
  var modal = document.getElementById("profCustomizedDemo-modal");
  if (show) {
    modal.style.display = "block";
    showBackToQuestionnaire(true);
    resetCopyLink();
    document.getElementById('vidyard-main-header').innerHTML = 'My Custom Playlist';
    if (currentPage === checkboxesChecked.length + 1) {
      showVidyard(false, customizedVideoId);
      $("#questionnaire").show();
    }
    currentPage = 2; // 2 is to take questionnaire on first page. do not change this
    previousQuestionnaire();
  } else {
    video.pause();
    modal.style.display = "none";
    checkAllQuestionsAnswered();

    if (document.getElementById('video-back-questionnaire-button').style.display !== "none") {
      eventFire(document.getElementById('profCustomizedDemo-custom-playlist'), 'click');
    }
  }
}

window.sortNumber = function (a, b) {
  return a - b;
}

window.fillArrayQuestionnaire02 = function (answer) {
  switch (answer.toLowerCase()) {
    case "a2":
      videoGroup.push(4);
      break;
    case "b2":
      videoGroup.push(6);
      break;
    case "c2":
      videoGroup.push(4);
      break;
    case "d2":
      videoGroup.push(6);
      break;
    case "e2":
      videoGroup.push(5);
      break;
    case "f2":
      videoGroup.push(5);
      break;
    default:
  }
}

window.fillArrayQuestionnaire01 = function (answer) {
  switch (answer.toLowerCase()) {
    case "a1":
      videoGroup.push(1, 7);
      break;
    case "b1":
      videoGroup.push(2, 7);
      break;
    case "c1":
      videoGroup.push(3, 7);
      break;
    default:
  }
}

window.fillArrayQuestionnaire03 = function (answer) {
  switch (answer.toLowerCase()) {
    case "a3":
      videoGroup.push(5, 6, 7, 11);
      break;
    case "b3":
      videoGroup.push(8, 11);
      break;
    case "c3":
      videoGroup.push(4, 5);
      break;
    case "d3":
      videoGroup.push(9);
      break;
    case "e3":
      videoGroup.push(3);
      break;
    case "f3":
      videoGroup.push(10);
      break;
    case "g3":
      videoGroup.push(2);
      break;
    default:
  }
}

// when to show/hide next previous button also change text next on last step
window.hideShowNextPrevious = function () {
  $("#next").removeClass('profCustomDemo-navButton-lastNext');
  $("#next").attr('value', 'Next');
  if (currentPage == 1) {
    $("#previous").hide();
    $("#next").show();
  }
  else if (currentPage <= checkboxesChecked.length) {
    $("#previous").show();
    $("#next").show();
  }
  // else if (currentPage == 3) {
  //   $("#previous").show();
  //   $("#next").attr('value', 'See your custom demo');
  //   $("#next").addClass('profCustomDemo-navButton-lastNext');
  // }
  else {
    $("#previous").hide();
    $("#questionnaire").hide();
  }

}


window.previousQuestionnaire = function () {
  if (currentPage <= checkboxesChecked.length) {
    console.log(currentPage);
    currentPage--;
    hideShowNextPrevious();
    for (var i = 1; i <= checkboxesChecked.length; i++) {
      console.log(currentPage);
      if (currentPage == i) {
        $("#questionnaire0" + i).show();
        setActiveNextButton("questionnaire0" + i);
      }
      else {
        $("#questionnaire0" + i).hide();
      }
    }
  }
  else {
    currentPage--;
    pause();
    $("#questionnaire").show();
    $("#bg_image").show();
    showVidyard(false, customizedVideoId);
    hideShowNextPrevious();
  }
  // }
}

// $("#questionnaire02").hide();
// $("#questionnaire03").hide();
showVidyard(false, customizedVideoId);
$("#bg_image").show();
$("#previous").hide();

window.getCheckBoxesValues = function () {
  var sessionCheckBoxes = sessionStorage.getItem("profCheckBoxesChecked");
  if (sessionCheckBoxes != null) {
    checkboxesChecked = JSON.parse(sessionStorage.getItem("profCheckBoxesChecked"));
    checkboxesChecked.forEach(element => {
      element.value.forEach(answerElement => {
        document.getElementById(answerElement).checked = true;
      })
    });

  }
  checkAllQuestionsAnswered();
}
