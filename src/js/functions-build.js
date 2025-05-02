

//functions-build.js
//------------------------------------------------------------------------------------------------------------------------------------------

function assignConfiguration(menuSetName, suffix){
    if (!menuSetName){ return; }
 
    var profileHash = getProfileHash(suffix);
    profileHash[menuSetName] = [];
 
    var dataSet = MASTER_MENU[menuSetName];
    var defaulSetName = MENU_DEFAULT_BY_NAME[menuSetName];
    var textFieldKeys = BUILD_TARGETS_BY_NAME[menuSetName] || [];
    var numKeys = textFieldKeys.length;
 
    for (var i = 0; i < numKeys; i++){
       var key = textFieldKeys[i] + suffix;
       var textField = this.getField(key) || {};
       var val = textField.value;
       var config = dataSet[val] || dataSet[defaulSetName] || {};
       config[menuSetName] = config;
       profileHash[menuSetName].push(config);
    }
 }
 
 function assignConfigurations(buildTargetHash, suffix){
    if (!buildTargetHash){ return; }
 
    var targetKeys = Object.keys(buildTargetHash);
    for (var j = 0; j < targetKeys; j++){
       var targetKey = targetKeys[j];
 
       assignConfiguration(targetKey, suffix);
    }
 }
 
 function performBuild(buildTargetHash, suffixes){
    console.println("INVOKED performBuild");
    for (var i = 0; i < suffixes.length; i++){
       var suffix = suffixes[i];
 
       assignConfigurations(buildTargetHash, suffix);
    }   
 }