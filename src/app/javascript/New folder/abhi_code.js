function changeProgramData(selectedprogramData) {
    ProgramArrayData = [];
    var allUserData = userData.bomUserContainer['componentsMap'];
    var selectedProgramGrantRef = GRANT.concat(selectedprogramData);
    if (roleArrayData.length > 0) {
        alert('NO');
    } else {
        for (var key in allUserData) {
            if (allUserData.hasOwnProperty(key)) {
                for (var i = 0; i < all_UserData[key].grantRef.length; i++) {
                    if (allUserData[key].grantRef[i] === selectedProgramGrantRef) {
                        programArrayData.push(allUserData[key]);
                    }
                }
            }
        }
        console.log('programArrayData-----', programArrayData);
    }
}

function changeRoleData(selectedRoleData) {
    roleArrayData = [];
    var allUserData = userData.bomUserContainer['componentsMap'];
    var selectedRoleGrantRef = GRANT.concat(selectedRoleData);
    if (programArrayData.length > 0) {
        checkIfUserHasPermissions()
    } else {
        for (var key in all_UserData) {
            if (allUserData.hasOwnProperty(key)) {
                for (var i = 0; i < allUserData[key].grantRef.length; i++) {
                    if (allUserData[key].grantRef[i] === selectedRoleGrantRef) {
                        roleArrayData.push(allUserData[key]);
                    }
                }
            }
        }
        console.log('roleArrayData-----', roleArrayData);
    }
}