

//functions-build.js
//------------------------------------------------------------------------------------------------------------------------------------------

function assignConfiguration(menuSetName, suffix){
    if (!menuSetName){ return; }
    console.println("INVOKED assignConfiguration " + menuSetName + ":" + suffix);
 
    var profileHash = getProfileHash(suffix);
    profileHash[menuSetName] = [];
 
    var dataSet = MASTER_MENU[menuSetName]; console.println("-- dataSet " + stringify(dataSet));
    var defaulSetName = MENU_DEFAULT_BY_NAME[menuSetName]; console.println("-- defaulSetName " + defaulSetName);
    var textFieldKeys = BUILD_TARGETS_BY_NAME[menuSetName] || []; console.println("-- textFieldKeys " + textFieldKeys);
    var numKeys = textFieldKeys.length; console.println("-- numKeys " + numKeys);
 
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
    console.println("INVOKED assignConfigurations " + suffix);
 
    var menuSetNames = Object.keys(buildTargetHash);
    console.println("menuSetName " + stringify(menuSetNames));

    for (var j = 0; j < menuSetNames.length; j++){
       var menuSetName = menuSetNames[j];
 
       assignConfiguration(menuSetName, suffix);
    }
 }
 
 function performBuild(buildTargetHash, suffixes){
    console.println("INVOKED performBuild \n" + stringify(buildTargetHash));

    for (var i = 0; i < suffixes.length; i++){
       var suffix = suffixes[i];
 
       assignConfigurations(buildTargetHash, suffix);
    }   
 }