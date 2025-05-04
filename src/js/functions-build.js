

//functions-build.js
//------------------------------------------------------------------------------------------------------------------------------------------
function updateAttribute(attrName, givenVal, suffix){
   var attrKey = OUTPUT_FIELDS.attributes[attrName] || "";
   var fieldKey = attrKey + suffix;
   var field = this.getField(fieldKey) || {};
   var currentVal = field.value;
   var updatedVal = currentVal + (givenVal || 0);
   field.value = updatedVal;
}

function updateCharacterAttributes(attrList){
   ;
}

function updatCharacterDbp(dBP){
   ;
}

function updateCharacterIcr(iCR){
   ;
}

function updateCharacterTraits(traitList){
   ;
}

function updateCharacterBpOffset(bpOffset){
   ;
}

function updateCharacterBpMulitplier(bpMultiplier){
   ;
}

function updateCharacterCr(cr){
   ;
}

function updateCharcterVariantLabel(priority, label){
   ;
}

function updateArchetypeOutput(suffix){
   var inputFieldKey = "text_archetype" + suffix;
   var inputField = this.getField(inputFieldKey) || {};
   var inputVal = inputField.value;
   var dataSet = MASTER_MENU.ARCHETYPES[inputVal] || {};
   var dataKeys = Object.keys(dataSet) || [];

   for (var i = 0; i < dataKeys.length; i++){
      var key = dataKeys[i];
      var val = dataKeys[key];

      if (key == "attr"){ updateCharacterAttributes(val); }
      if (key == "dBP"){ updatCharacterDbp(val); }
      if (key == "iCR"){ updateCharacterIcr(val); }
      if (key == "traits"){ updateCharacterTraits(val); }
   }
}

function updateVariantOutput(index, suffix){
   var inputFieldKey = "text_variant" + "_" + index + suffix;
   var inputField = this.getField(inputFieldKey) || {};
   var inputVal = inputField.value;
   var dataSet = MASTER_MENU.VARIANTS[inputVal] || {};
   var dataKeys = Object.keys(dataSet) || [];

   for (var i = 0; i < dataKeys.length; i++){
      var key = dataKeys[i];
      var val = dataKeys[key];

      if (key == "bpOffset"){ updateCharacterBpOffset(val); }
      if (key == "bpMultiplier"){ updateCharacterBpMulitplier(val); }
      if (key == "CR"){ updateCharacterCr(val); }
      if (key == "traits"){ updateCharacterTraits(val); }
      if (key == "termPriority"){ updateCharcterVariantLabel(val, inputVal); }
   }
}

function assignConfiguration(menuSetName, suffix){
    if (!menuSetName){ return; }
    console.println("INVOKED assignConfiguration " + menuSetName + ":" + suffix);
 
    var profileHash = getProfileHash(suffix);
    profileHash[menuSetName] = [];
 
    var dataSet = MASTER_MENU[menuSetName]; //console.println("-- dataSet " + stringify(dataSet));
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

   //  console.println("-- profileHash[" + menuSetName + "] is\n" + invokeStringify(profileHash[menuSetName], 8) + "\n");
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