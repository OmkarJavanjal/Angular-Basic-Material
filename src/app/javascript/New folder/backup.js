 if(matchCdsid[i] && result){
                    for (i = 0; i < result.length; ++i) {
                        var userName = /AKOTHA/i;
                        var usertimestamp = /2018-07-28 11:42:13 /i;
                        //var userName = /matchCdsid[i].loggedInUser/i;
                        //var usertimestamp = /matchCdsid[i].timestamp/i;
                       // console.log('userActive with userName--', userName);
                        if(result[i].match(usertimestamp)){
                            if(result[i].match(userName)){      
                                if(result[i].match(regexpPrograms)){
                                    console.log('userActive with program--', result[i]);                       
                                    var splitRow=result[i].split(", Programs - ");
                                    var selecteDateTime=splitRow[0].split(" ");
                                    var dateTimeSet=selecteDateTime[0] +" "+ selecteDateTime[1];
                                    var selectedUser=splitRow[0].split(" Logged in user - ")[1].split(" - ")[0];
                                    var selectedUserPrograms=splitRow[1];
                                    var activeUserProgramsObj={
                                        "timestamp":dateTimeSet,
                                        "activeUser":selectedUser,
                                        "activeUserPrograms":selectedUserPrograms,
                                       };
                                    activeUserProgramsArray.push(activeUserProgramsObj);
                                    console.log('userActive with program--', activeUserProgramsArray);                                          
                                }                            
                            }                                   
                      }
                    }
                }