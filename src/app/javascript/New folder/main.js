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
userArrayData=[],
allUserWithAccess=[],
roleAccess=[],
programAccess=[],
gruntUnicId,
removeGrunt,
int_length,
matches,
allUserData,
userData,
filteredUserData,
activeuserData,
allUserData,
result,
allUserListData,
upperCaseName,
filteredUserLength,
filterValues = {},
activeUserList = '',
activeUserAccessList = '',
userWithRoleAccess='',
userWithProgramAccess='',
nameList = '',
regex = /\d+/g,
regexp = /CDSID -/i,
regexpPrograms = /Programs -/i,
GRANT = "grant_pc",
programDataBox = '<option value="">Please Select</option>',
roleDataBox = '<option value="">Please Select</option>',
userListBox = '<option value="">Please Select</option>';
$(function () {
$('.js-example-basic-single').select2();   
function assignDataToDropdowns(userData) {
allUserData = userData.bomUserContainer['componentsMap'];
//console.log('allUserData--', allUserData);
allUserListData = Object.keys(allUserData).length;
var userCollection = Object.keys(allUserData).sort();
//var filtereUser = (Object.keys(allUserData)).sort();
//console.log('allUserData name', userCollection);
for(i = 0; i < userCollection.length; i++){
    userListBox += "<option>" + userCollection[i].toUpperCase() + "</option>"; 
   // nameList += "<li>" + userCollection[i].toUpperCase() +  ","  + "</li> ";
}
document.getElementById("allUserList").innerHTML = userListBox;
//document.getElementById("userList").innerHTML = nameList;
var t = $.each(allUserData, function (i, item) {
    var p = allUserData[i].grantRef
    //console.log('p--', p);
    var g = $.each(p, function (j, item) {
        grantRef.push(p[j])
    })
})
for (i = 0; i < grantRef.length; i++) {
    //console.log(grantRef[i]);
    if (grantRef[i].UniqueId) {
        gruntUnicId = grantRef[i].UniqueId;
       // console.log(gruntUnicId);
        removeGrunt = gruntUnicId.split(GRANT);
      // console.log('removeGrunt', removeGrunt[1]);
        matches = gruntUnicId.match(regex);
        //console.log('matches', matches);
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
    }
}
piChart(combinProgramRoleData,allUserListData);
showDataUser(allUserData);
}
/**
* 
* call ajax request data
*/
$.ajax({
    type: "get",
    url: 'data.json' ,
    dataType: "json",
    cache: "false",
    jsonpCallback: "onJSONPLoad",
    success: function(response){
    userData= response;
    console.log('userData', userData);
    assignDataToDropdowns(userData);
    },
    error: function() {
      alert('Error occurs!');
   }
});
/**
 * 
 *  
 */
 $.ajax({
        url: "log.txt",
        async: false, 
        cache: false,
        dataType: "text",
        success: function( data, textStatus, jqXHR ) {
            matchedUser(data);                   
        }
    });

/**
 * 
 *
 */  
function matchedUser(data){
    result = data.split("\n");              
    for (i = 0; i < result.length; ++i) {
        if(result[i].match(regexp)){
            var dateTime=result[i].split(",")[0].split(" ");
            var combineDateTime=dateTime[0] +" "+ dateTime[1];
            var userActiveSeconIndex=result[i].split(",")[1];
            var userActive=userActiveSeconIndex.split(" - ")[1].split(" ")[0];
            var activeUserObj={
                "timestamp":combineDateTime,
                "loggedInUser":userActive
               };
            matchCdsid.push(activeUserObj);
        }
        else{
            notMatchCdsid.push(result[i]);
        }             
    }
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
document.getElementById("csv").disabled = true;
document.getElementById("clearData").disabled = true;
});
 /**
  * 
  */
  function flag(combinProgramRoleData){
     
    if(combinProgramRoleData.length>0){
        //document.getElementById('chart').style.display = 'block';
        document.getElementById("csv").disabled = false;
        document.getElementById("clearData").disabled = false;
    }else{
        //document.getElementById('chart').style.display = 'none';
        document.getElementById("csv").disabled = true;
        document.getElementById("clearData").disabled = false;
    }
 }
 /**
  * 
  * if (
        document.getElementById("userList").hasChildNodes() || document.getElementById("activeUserAccess").hasChildNodes() ||
        document.getElementById("activeUser").hasChildNodes() || 
        document.getElementById("select2-hoursList-container").textContent != 'Please Select') {
       // nameList = '';
       // document.getElementById("userList").innerHTML = '';
  */

  function showDataUser(allUserData){
    nameList = '';
    document.getElementById("userList").innerHTML = '';
    allUserListData = Object.keys(allUserData).length;
    var userCollection = Object.keys(allUserData).sort();
    //var filtereUser = (Object.keys(allUserData)).sort();
    console.log('----------', userCollection);
    for(i = 0; i < userCollection.length; i++){ 
        nameList += "<li>" + userCollection[i].toUpperCase() +  ","  + "</li> ";
    }
    document.getElementById("userList").innerHTML = nameList;
  }
/**
 * Code for PI chart for all user and user with Program and Active User name
 * 
 */ 
function piChart(combinProgramRoleData){
    chartBox = c3.generate({
        data: {
        columns: [
            ['programRoleData', combinProgramRoleData.length],
            ['AllUserData', allUserListData]
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
   }
/**
 * 
 * @param {*} selectedLastHour : based on this param we will find all Active user list from Arrray Data
 */
function checkActiveUsers(selectedLastHour){
    listofActiveUser=[];
    allUserWithAccess=[];
    var selectedhr = (selectedLastHour.match(regex))[0];
    var previousTime = new Date();
    previousTime.setHours(previousTime.getHours() - selectedhr);
    if (document.getElementById("activeUser").hasChildNodes() || document.getElementById("activeUserAccess").hasChildNodes()) {
        activeUserList = '';
        activeUserAccessList='';
        activeUserList.innerHTML = '';
        document.getElementById("activeUserAccess").innerHTML='';
    }  
    if(matchCdsid){     
        for (i = 0; i < matchCdsid.length; i++) {
            var findTime= new Date(matchCdsid[i].timestamp); 
            if(previousTime <= findTime){         
                listofActiveUser.push((matchCdsid[i].loggedInUser).toUpperCase());                                                
            }    
         }
         if(listofActiveUser){
            var sortActiveUser = listofActiveUser.sort();
            for(i=0;i<sortActiveUser.length;i++){
                var activeUserLowerCase= sortActiveUser[i].toLowerCase();              
               allUserWithAccess.push(activeUserLowerCase);
                console.log('activeUserLowerCase---', activeUserLowerCase)                 
                if((sortActiveUser.length===1) || (sortActiveUser.length === sortActiveUser.length - 1)){
                    activeUserList += "<li>" + sortActiveUser[i]  + "</li>";
                }else{
                    activeUserList += "<li>" + sortActiveUser[i]  +  ","  + "</li>";
                }               
              }
            console.log('allUserWithAccess-->>', allUserWithAccess);
            console.log('combinProgramRoleData-->>', combinProgramRoleData);
            console.log('sortActiveUser-->>', sortActiveUser);
         }
    }   
    activeAccess();
    document.getElementById("activeUser").innerHTML = activeUserList;
    
 }
/**
* 
* @param {*} selectedAccess : 
* @param {*} type : Role Type,Program Type
*/
function checkPermissions(selectedAccess, type) {

    console.log('selectedAccess>>>>', selectedAccess !== '');

    if(selectedAccess !== ''){
        combinProgramRoleData=[];
        userArrayData=[];
      allUserData = filteredUserData || userData.bomUserContainer['componentsMap'];
        console.log(' userData.bomUserContainer',  filteredUserData);
        console.log(' userData.allUserData',  allUserData);
       /**if(filteredUserData==undefined){
             allUserData =userData.bomUserContainer['componentsMap'];
       }else{
        allUserData = userData.bomUserContainer['componentsMap'];;
        alert('ggg')
       }*/
        if (selectedAccess !== '') {
            filterValues[type] = GRANT.concat(selectedAccess);
        } else {
            delete filterValues[type];
        }
        if (filterValues[type] !== selectedAccess) {
            allUserData = userData.bomUserContainer['componentsMap'];
        }
       console.log('filterValues--', filterValues);
        
        filteredUserData = checkIfUserHasPermission(allUserData);
        //console.log('filteredUserData', filteredUserData);
        var filteredUser = (Object.keys(filteredUserData)).sort();
        nameList = '';
        console.log('filteredUser-----', filteredUser);
        //Object.keys(filteredUser).length;
        filteredUserLength=filteredUser.length;
        if(filteredUser.length>0){
            filteredUser.forEach(function (user) {
                upperCaseName = user.toUpperCase();
                var activeUser={
                    "name":upperCaseName
                   };
                userArrayData.push(activeUser);
                
                combinProgramRoleData.push(user);
                nameList += "<li>" + upperCaseName +  ","  + "</li> ";
            });
            console.log('userArrayData', userArrayData);
            if (document.getElementById("userList").hasChildNodes()) {
                nameList = '';
                document.getElementById("userList").innerHTML = '';
                filteredUser.forEach(function (user) {
                    upperCaseName= user.toUpperCase();
                    nameList += "<li>" + upperCaseName +  ","  + "</li>";
                });
            }
            
        }
        
       document.getElementById("userList").innerHTML = nameList;
        console.log('combinProgramRoleData', combinProgramRoleData.length);
        activeAccess();
        flag(combinProgramRoleData);
        piChart(combinProgramRoleData,allUserListData);
    }else{
        combinProgramRoleData=[];
        showDataUser(allUserData);
        piChart(combinProgramRoleData,allUserListData);
       
    }
  
showChart(filteredUserLength);
//piChart(combinProgramRoleData,allUserListData);  
}
function showChart(filteredUser){
console.log('filteredUser', filteredUser);
    if(filteredUser>0){
        document.getElementById('chart').style.display = 'block';
       }else{
        document.getElementById('chart').style.display = 'none';
       }
}
/**
* checkIfUserHasPermission(allUsers):=-
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
 * 
 * 
 */
function activeAccess(){
    if(combinProgramRoleData.length>0){                     
        for(i=0;i<allUserWithAccess.length;i++){
            for(j=0;j<combinProgramRoleData.length;j++){
                if(combinProgramRoleData[j]==allUserWithAccess[i]){
                    if((allUserWithAccess.length===1) || (allUserWithAccess.length === allUserWithAccess.length - 1)){
                        activeUserAccessList += "<li>" + allUserWithAccess[i].toUpperCase()  + "</li>";
                    }else{
                        activeUserAccessList += "<li>" + allUserWithAccess[i].toUpperCase()  +  ","  + "</li>";
                    }
               }
            }          
        }
     }
    document.getElementById("activeUserAccess").innerHTML = activeUserAccessList;
}
/**
 * selectedUser():-
 * @param {*} selectedUser 
 */
function selectedUser(selectedUser){
    var seleUserSmallCase= selectedUser.toLowerCase();
     var allowed = [],roleAccess=[],programAccess=[];
      allowed.push(seleUserSmallCase);
      /**
       * Below code is use to filter the data object based on key match in all given Object
       */
      if(allUserData){
        const filtered = Object.keys(allUserData)
        .filter(key => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = allUserData[key];
          return obj;
        }, {});
        grantAccess= filtered[seleUserSmallCase].grantRef;
        console.log('grantAccess', grantAccess);
        if(grantAccess.length>0){
            for (i = 0; i < grantAccess.length; i++) {
                 removeGruntPc = grantAccess[i].split(GRANT);
                 var matchesAccess = removeGruntPc[1].match(regex);
                 if (matchesAccess) {
                     if (matchesAccess[1]) {
                         intLength = matchesAccess[0].length + matchesAccess[1].length;
                     } else {
                         intLength = matchesAccess[0].length;
                     }
                 }
                 if (removeGrunt[1]) {
                     if ((removeGruntPc[1].match(/PMT/i)) || (intLength <= 2) || (matchesAccess == null)) {
                         roleAccess.push(removeGruntPc[1]);
                     } else {
                         programAccess.push(removeGruntPc[1]);
                     }
                 }
            }
			
			
           console.log('roleAccess', roleAccess);
            console.log('programAccess', programAccess);
            document.getElementById("roleId").textContent= roleAccess; 
            document.getElementById("programId").textContent= programAccess; 
            document.getElementById("userName").textContent= selectedUser; 
        }
      }
}
 /**
 * CLear All selected user data when we click on clear button
 */
function clearData(){
 
       // nameList = '';
       // document.getElementById("userList").innerHTML = '';
        combinProgramRoleData=[];
        activeUserList = '';
        activeUserAccessList ='';
        document.getElementById("activeUser").innerHTML = '';
        document.getElementById("activeUserAccess").innerHTML = '';
        listofActiveUser=[];
        allUserWithAccess=[];
        filterValues={};
        document.getElementById("select2-programDataBox-container").title='Please Select';
        document.getElementById("select2-programDataBox-container").textContent='Please Select'; 
        document.getElementById("select2-roleDataBox-container").title='Please Select';
        document.getElementById("select2-roleDataBox-container").textContent='Please Select';
        document.getElementById("select2-hoursList-container").title='Please Select';
        document.getElementById("select2-hoursList-container").textContent='Please Select';
        piChart(combinProgramRoleData,allUserListData);
        
        showDataUser(allUserData);
        //flag(combinProgramRoleData);
        showChart(allUserListData);
        console.log('filterValues', filterValues);
}   
/**
 * @ onvertToCSV() method is use data into CSV form
 * @param {*} objArray
 */
function convertToCSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';
    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if (line != '') line += ','
            line += array[i][index];
        }
        str += line + '\r\n';
    }
    return str;
}
/**
 * exportCSVFile():- 
 * @param {*} headers 
 * @param {*} items 
 * @param {*} fileTitle 
 */
function exportCSVFile(headers, items, fileTitle) {
    if (headers) {
        items.unshift(headers);
    }
    var jsonObject = JSON.stringify(items);
    var csv = this.convertToCSV(jsonObject);
    var exportedFilenmae = fileTitle + '.csv' || 'export.csv';
    var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { 
        navigator.msSaveBlob(blob, exportedFilenmae);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) {
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", exportedFilenmae);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}
/**
 * download() willbe call when we click on button to save data in CSV.
 */
function download(){
if(userArrayData.length>0){
  var headers = {
      name: 'User Name'
  };
  var itemsFormatted = [];
  userArrayData.forEach((item) => {
      itemsFormatted.push({
          name: item.name
      });
  });
    var fileTitle = 'orders';
    exportCSVFile(headers, itemsFormatted, fileTitle);
    }
}