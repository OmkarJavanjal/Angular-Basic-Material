/**
 * All variable define
 */
var programData = [],
roleData = [],
grantRef = [],
gruntUnicId,
removeGrunt,
int_length,
matches,
allUserData,
userData,
GRANT = "grant_pc",
programDataBox = '<option value="">Please Select</option>',
roleDataBox = '<option value="">Please Select</option>',
assignDataToDropdowns,
regex = /\d+/g,
roleArrayData = [],
programArrayData = [],
combinProgramRoleData = [],
filteredUserData,
activeuserData,
listofActiveUser=[],
filterValues = {};

/**
* assignDataToDropdowns: method to assign data
*/
assignDataToDropdowns = function () {
allUserData = userData.bomUserContainer['componentsMap'];
var t = $.each(allUserData, function (i, item) {
    var p = allUserData[i].grantRef
    var g = $.each(p, function (j, item) {
        grantRef.push(p[j])
    })
})
for (i = 0; i < grantRef.length; i++) {
    if (grantRef[i].UniqueId) {
        gruntUnicId = grantRef[i].UniqueId;
        removeGrunt = gruntUnicId.split(GRANT);
        matches = gruntUnicId.match(regex);
        if (matches) {
            if (matches[1]) {
                int_length = matches[0].length + matches[1].length;
            } else {
                int_length = matches[0].length;
            }
        }
        if (removeGrunt[1]) {
            if ((removeGrunt[1].match(/PMT/i)) || (int_length <= 2) || (matches == null)) {
                roleDataBox += "<option>" + removeGrunt[1] + "</option>";
                document.getElementById("roleDataBox").innerHTML = roleDataBox;
            } else {
                programDataBox += "<option>" + removeGrunt[1] + "</option>";
                document.getElementById("programDataBox").innerHTML = programDataBox;
            }
        }
    } else {
        var dd = grantRef[1];
    }
}
}
/**
* 
* call ajax request data

$.ajax({
url: 'BOMUser.json',
method: 'GET',
success: function (response) {
    console.log('response', response);
    userData= JSON.parse(response.response);
    assignDataToDropdowns();
},
error: function (err) {
    console.error(err);
}
});*/

$.ajax({
    type: "get",
    url: 'BOMUser.json' ,
    dataType: "json",
    cache: "false",
    jsonpCallback: "onJSONPLoad",
    success: function(response){
    //alert('hi!');
    userData= response;
    assignDataToDropdowns();
    },
    error: function() {
      alert('Error occurs!');
   }
});
$.ajax({
    type: "get",
    url: 'user.json' ,
    dataType: "json",
    cache: "false",
    jsonpCallback: "onJSONPLoad",
    success: function(response){
    activeuserData= response.log;
    console.log('activeuserData', activeuserData);
    },
    error: function() {
      alert('Error occurs!');
   }
});


/**
* 
* @param {*} selectedAccess : 
* @param {*} type : Role Type,Program Type
*/
function checkPermissions(selectedAccess, type) {
console.log('selectedAccess--', selectedAccess);
var allUserData = filteredUserData || userData.bomUserContainer['componentsMap'];
if (selectedAccess !== '') {
    filterValues[type] = GRANT.concat(selectedAccess);
} else {
    delete filterValues[type];
    console.log('Updated filter values: ', filterValues);
}
console.log('filterValues--', filterValues);
if (filterValues[type] !== selectedAccess) {
    allUserData = userData.bomUserContainer['componentsMap'];
}
filteredUserData = checkIfUserHasPermission(allUserData);
var filteredUser = Object.keys(filteredUserData);
var userlist = document.getElementById("userlist");
var nameList = '';
filteredUser.forEach(function (user) {
    nameList += "<li>" + user + "</li>";
});
if (userlist.hasChildNodes()) {
    nameList = '';
    userlist.innerHTML = '';
    filteredUser.forEach(function (user) {
        nameList += "<li>" + user + "</li>";
    });
}
document.getElementById("userlist").innerHTML = nameList;
}

/**
* 
* @param {*} checkForPermission 
* @param {*} allUsers 
*/
function checkIfUserHasPermission(allUsers) {
var allUserData = allUsers,
    userList = {};
for (var filterKeys in filterValues) {
    if (filterValues.hasOwnProperty(filterKeys)) {
        for (var key in allUserData) {
            if (allUserData.hasOwnProperty(key)) {
                if (allUserData[key].grantRef.indexOf(filterValues[filterKeys]) !== -1) {
                    userList[key] = allUserData[key];
                }
            }
        }
        allUserData = userList;
        userList = {};
    }
}
return allUserData;
}

function myFunction() {
  var text = '<option value="">Please Select</option>';
    var i;
    for (i = 1; i <= 48; i++) {
        text += "<option>" + i + "</option>";
        if(i===1){
        //text += "<option>" + i + " "+"hour" + "</option>";
        }else{
        //text += "<option>" + i + " "+"hours" + "</option>";
        }
    }
    document.getElementById("hoursList").innerHTML = text;
}
myFunction();

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
function zero(i) {
    if (i.toString().length < 2) {
        i = "0" + i;
    }
    return i;
}
function checkActiveUsers(selectedLastHour){
    var currenTime = new Date();
    var hh = addZero(currenTime.getHours());
    var mm = addZero(currenTime.getMinutes());
    var ss = addZero(currenTime.getSeconds());
    var currentTimeValue =hh + ":" + mm + ":" + ss;


    var DD = zero(currenTime.getDate());
    var MM = zero(currenTime.getMonth()+1); 
    var YYYY = currenTime.getFullYear();
    var monthDateYear  = YYYY + "-" + MM + "-" + DD;


     var previousTime = new Date();
     previousTime.setHours(previousTime.getHours() - selectedLastHour);
     var localOffset = (-1) * previousTime.getTimezoneOffset() * 60000;
     var previousStamp = parseInt(Math.round(new Date(previousTime + localOffset).getTime() / 1000));

     var h = addZero(previousTime.getHours());
     var m = addZero(previousTime.getMinutes());
     var s = addZero(previousTime.getSeconds());
     var previousTimeValue =h + ":" + m + ":" + s;
 

     var D = zero(previousTime.getDate());
     var M= zero(previousTime.getMonth()+1); 
     var Y = previousTime.getFullYear();
     var previousMonthDateYear  = Y + "-" + M + "-" + D;


     for (i = 0; i < activeuserData.length; i++) {
        var now = activeuserData[i].date +' '+ activeuserData[i].time;
        var d = new Date(now);
        var localOffset = (-1) * d.getTimezoneOffset() * 60000;
        var stamp = parseInt(Math.round(new Date(d + localOffset).getTime() / 1000));
        if(previousTime > d){
            alert('ok');
            listofActiveUser.push(activeuserData[i]);
        }else{
            alert('okfffffffff');
        }
       console.log('listofActiveUser', listofActiveUser);
     }
}
