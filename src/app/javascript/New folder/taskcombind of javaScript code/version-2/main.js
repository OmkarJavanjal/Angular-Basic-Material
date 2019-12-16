/**
 * All variable define
 */
var programData = [],
roleData = [],
grantRef = [],
roleArrayData = [],
programArrayData = [],
combinProgramRoleData = [],
activeUserProgramsArray=[],
listofActiveUser=[],
matchCdsid=[], 
notMatchCdsid=[],
gruntUnicId,
removeGrunt,
int_length,
matches,
allUserData,
userData,
assignDataToDropdowns,
filteredUserData,
activeuserData,
logsData,
allUserData,
filterValues = {},
activeUserList = '';
regex = /\d+/g,
regexp = /CDSID -/i,
regexpPrograms = /Programs -/i,
GRANT = "grant_pc",
//result,

programDataBox = '<option value="">Please Select</option>',
roleDataBox = '<option value="">Please Select</option>',
activeUserChildList = document.getElementById("activeUser"),
userChildlist = document.getElementById("userList"),
programDataBoxId = document.getElementById('programDataBox'),
roleDataBoxId = document.getElementById('roleDataBox'),
hoursListId = document.getElementById('hoursList'),
chartBox = document.getElementById('chart');
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
*/
$.ajax({
    type: "get",
    url: 'BOMUser.json' ,
    dataType: "json",
    cache: "false",
    jsonpCallback: "onJSONPLoad",
    success: function(response){
    userData= response;
    assignDataToDropdowns();
    },
    error: function() {
      alert('Error occurs!');
   }
});
/**
 * 
$.ajax({
    type: "get",
    url: 'user.json' ,
    dataType: "json",
    cache: "false",
    jsonpCallback: "onJSONPLoad",
    success: function(response){
    activeuserData= response.log;
    },
    error: function() {
      alert('Error occurs!');
   }
});*/
/**
 *  https://stackoverflow.com/questions/6535882/retrieve-text-file-line-by-line-using-jquery-get
 */

 $.ajax({
        url: "log.txt",
        async: false,   // asynchronous request? (synchronous requests are discouraged...)
        cache: false,   // with this, you can force the browser to not make cache of the retrieved data
        dataType: "text",  // jQuery will infer this, but you can set explicitly
        success: function( data, textStatus, jqXHR ) {
            logsData = data; // can be a global variable too...
            result = data.split("\n");         
            for (i = 0; i < result.length; ++i) {
                if(result[i].match(regexp)){
                   // console.log('activeUserObj-result[i]-', result[i]);
                    var dateTime=result[i].split(",")[0].split(" ");
                    var combineDateTime=dateTime[0] +" "+ dateTime[1];
                    var userActiveSeconIndex=result[i].split(",")[1];
                    console.log('userActiveSeconIndex', userActiveSeconIndex);
                    var userActive=userActiveSeconIndex.split(" - ")[1].split(" ")[0];
                    var activeUserObj={
                        "timestamp":combineDateTime,
                        "loggedInUser":userActive
                       };
                       console.log('activeUserObj-', activeUserObj);
                    matchCdsid.push(activeUserObj);
                }
                else{
                    notMatchCdsid.push(result[i]);
                }             
            }          
            console.log('userActive', matchCdsid);
          //  console.log('notMatchCdsid', notMatchCdsid);
           // console.log('matchCdsid-->>', matchCdsid);           
        }
    });
/**
* 
* @param {*} selectedAccess : 
* @param {*} type : Role Type,Program Type
*/
function checkPermissions(selectedAccess, type) {
    combinProgramRoleData=[];
allUserData = filteredUserData || userData.bomUserContainer['componentsMap'];
if (selectedAccess !== '') {
    filterValues[type] = GRANT.concat(selectedAccess);
} else {
    delete filterValues[type];
}
if (filterValues[type] !== selectedAccess) {
    allUserData = userData.bomUserContainer['componentsMap'];
}
filteredUserData = checkIfUserHasPermission(allUserData);
var filteredUser = Object.keys(filteredUserData);
var nameList = '';
console.log('filteredUserData', filterValues);
filteredUser.forEach(function (user) {
    combinProgramRoleData.push(user);
    nameList += "<li>" + user +  ","  + "</li> ";
});
if (userChildlist.hasChildNodes()) {
    nameList = '';
    userChildlist.innerHTML = '';
    filteredUser.forEach(function (user) {
        nameList += "<li>" + user +  ","  + "</li>";
    });
}
userChildlist.innerHTML = nameList;
console.log('combinProgramRoleData', combinProgramRoleData.length);
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
                    for ( property in filterValues ) {
                        if(property==='program'){
                            programArrayData.push(allUserData[key]);
                        }else if(property==='role'){
                            roleArrayData.push(allUserData[key]);
                        }else if(property==='role' && property==='program'){
                            combinProgramRoleData.push(allUserData[key]);
                        }
                      }                 
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
/**
 * showHours(): it is use to display list of hours into dropdownbox
 */
function showHours() {
  var text = '<option value="">Please Select</option>';
    var i;
    for (i = 1; i <= 48; i++) {
        if(i===1){
        text += "<option>" + i + " "+"hour" + "</option>";
        }else{
        text += "<option>" + i + " "+"hours" + "</option>";
        }
    }
    document.getElementById("hoursList").innerHTML = text;
}
showHours();
/**
 * 
 * @param {*} selectedLastHour : based on this param we will find all Active user list from Arrray Data
 */
function checkActiveUsers(selectedLastHour){
    listofActiveUser=[];
    var selectedhr = (selectedLastHour.match(regex))[0];
    var previousTime = new Date();
    previousTime.setHours(previousTime.getHours() - selectedhr);
    if (activeUserChildList.hasChildNodes()) {
        activeUserList = '';
        activeUserList.innerHTML = '';
    }  
    if(matchCdsid){
        for (i = 0; i < matchCdsid.length; i++) {
            var findTime= new Date(matchCdsid[i].timestamp);
            console.log('previousTime', previousTime); 
            console.log('findTime', findTime); 
            if(previousTime <= findTime){
               console.log('matchCdsid[i].loggedInUser', matchCdsid[i].loggedInUser);             
                listofActiveUser.push(matchCdsid[i].loggedInUser);
                if((listofActiveUser.length===1) || (listofActiveUser.length === listofActiveUser.length - 1)){
                    activeUserList += "<li>" + matchCdsid[i].loggedInUser  + "</li>";
                }else{
                    activeUserList += "<li>" + matchCdsid[i].loggedInUser +  ","  + "</li>";
                }                             
            }else{
              //  alert('okfffffffff');
            }    
         }
    }       
     console.log('listofActiveUser', listofActiveUser);
     activeUserChildList.innerHTML = activeUserList;
}
/**
 * CLear All selected user data when we click on clear button
 */
function clearData(){
    if (
        userChildlist.hasChildNodes() || 
        activeUserChildList.hasChildNodes() || 
        document.getElementById("select2-hoursList-container").textContent != 'Please Select') {

        nameList = '';
        userChildlist.innerHTML = '';
        combinProgramRoleData=[];

        activeUserList = '';
        activeUserChildList.innerHTML = '';
        listofActiveUser=[];

        document.getElementById("select2-programDataBox-container").title='Please Select';
        document.getElementById("select2-programDataBox-container").textContent='Please Select';
 
        document.getElementById("select2-roleDataBox-container").title='Please Select';
        document.getElementById("select2-roleDataBox-container").textContent='Please Select';
 
        document.getElementById("select2-hoursList-container").title='Please Select';
        document.getElementById("select2-hoursList-container").textContent='Please Select';


    }
}

/**
 * Code for PI chart for all user and user with Program and Active User name
 * 
 */	
chartBox = c3.generate({
data: {
columns: [
    ['programRoleData', 575],
    ['AllUserData', 777]
],
type: 'pie'
},
pie: {
label: {
    format: function (value, ratio, id) {
        return value;
    }
}
}
});
$(document).ready(function() {
    $('.js-example-basic-single').select2();
});