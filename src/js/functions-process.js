//MEST.functions

function calcBPTotal(bpFields, suffix){
   var sum = 0;

   for (var i = 0; i < bpFields.length; i++){
      var item = bpFields[i];
      var key = item + suffix;
      var field = this.getField(key) || {};    
      var val = field.value || 0;
      sum = sum + val;
   }

   return sum || 0;
}

function driveBPSum(suffix){
   var key = BP_TOTAL_FIELD + suffix;
   var field = this.getField(key) || {};
   var bpTotal = calcBPTotal(BP_SUBFIELDS, suffix);

   field.value = bpTotal;
}

function getHighest(fieldSet, suffix){
   var highest = -1000;

   for (var i = 0; i < fieldSet.length; i++){
      var key = fieldSet[i] + suffix;
      var field = this.getField(key) || {};
      var val = field.value || 0;
      
      if (val > highest){ 
        highest = val;
      }
   }

   return highest || 0;
}

function extractValue(str, searchStr){
    if (! (str && searchStr)){ return 0; }
    if (str.length <= 3){ return 0; }

    var reClean = new RegExp("\\b" + searchStr + "\\b", "i");
    var resultClean = reClean.exec(str);

    var reDigit = new RegExp("\\b" + searchStr + " \\d\\b", "i");    
    var resultDigit = reDigit.exec(str);

    var found = 0;
    if (resultDigit){
       var text = ":" + resultDigit;
       found = text.split(" ")[1];
    }
    else if (resultClean){
       found = 1;
    }

    return 1*found || 0;
}

function extractTraitLevel(traitFields, searchStr, suffix){
    var sum = 0;

    for (var i = 0; i < traitFields.length; i++) {
        var key = traitFields[i] + suffix;
        var field = this.getField(key) || {};
        var str = field.value;
        var amt = extractValue(str, searchStr);

        sum = sum + amt;
    }

    return sum || 0;
}

function resetChecks(fieldSet, suffix){
   for (var j = 0; j < fieldSet.length; j++){
      var cbField = fieldSet[j];

      for (var k = 0; k <= 3; k++){
         var key = cbField + "_" + k + suffix;
         var field = this.getField(key) || {};

         if (field.checkThisBox){
           field.checkThisBox(0, false);
         }
      }
   }
}

function setChecks(fieldSet, threshold, suffix){
   for (var j = 0; j < fieldSet.length; j++){
      var cbField = fieldSet[j];

      for (var k = 0; k <= threshold; k++){
         var key = cbField + "_" + k + suffix;
         var field = this.getField(key) || {};

         if (field.checkThisBox){
            field.checkThisBox(0, true);
         }
      }
   }
}

function driveBurden(suffix){
   var physicality = getHighest(PHYSICALITY_FIELDS, suffix);
   var laden = extractTraitLevel(TRAITS_FIELDS, "Laden", suffix);
   var burden = 1 + laden - physicality;
   
   resetChecks(BURDEN_FIELDS, suffix);
   
   if (burden > 0){ 
      setChecks(BURDEN_FIELDS, burden - 1, suffix);
   }
}

/**
 * INVOKED by each Profile Configuration button
 * -- requires that buttons are in the pattern btn_foo_suffix
 * -- requires that fields for storing results are in the pattern text_foo_suffix
 * -- requires that foo is a single word possibly followed by a _digit
 * -- requires that suffix is unique
 * -- requires that configurationHash contains foo and resolves
 * -- example btn_variant_1_a which matches text_variant_1_a
 */

function getSuffix(buttonName){
   if (!buttonName){ return; }

   var list = buttonName.split(GLOBAL_DELIMITER);
   var numItems = list.length;
 
   return GLOBAL_DELIMITER + list[numItems - 1];
}

function getFoo(buttonName){
   if (!buttonName){ return; }

   var list = buttonName.split(GLOBAL_DELIMITER);
   list.shift();
   list.pop();

   return list.join(GLOBAL_DELIMITER);
}

function getTextField(fooText, suffix){
   if (!fooText){ return {}; }

   var key = "text_" + fooText + suffix;
   var field = this.getField(key) || {};

   return field;
}

function getMenuName(fooText){
   if (!fooText){ return {}; }

   var rootFoo = fooText.split(GLOBAL_DELIMITER)[0];
   var menuName = MENU_REFERENCES_BY_FOO[rootFoo] || MENU_NAME_ERROR;

   return menuName;
}

function getMenuEntriesHash(menuName){
   if (!menuName){ return {}; }

   var entriesHash = MASTER_MENU[menuName] || {};

   return entriesHash;
}

function getMenuItems(menuName, entriesList){
   if (!menuName){ return []; }

   var firstItem = "Choose [ " + menuName + " ]";
   var result = entriesList;
   result.unshift(firstItem);
 
   return result;
}

function getMenuDefaultValue(menuName){
   if (!menuName){ return MENU_DEFAULT_NONE; }

   var result = MENU_DEFAULT_BY_NAME[menuName];

   return result;
}

/**
 * INVOKED by each Configuration button
 * via displayMenuSetText(event.target.name);
 */
function displayMenuSetText(buttonName){
   if (!buttonName){ return []; }

   var suffix = getSuffix(buttonName);
   var fooText = getFoo(buttonName);
   var menuName = getMenuName(fooText);
   var entriesHash = getMenuEntriesHash(menuName);
   var entriesList = Object.keys(entriesHash);
   var field = getTextField(fooText, suffix);
   var menuItems = getMenuItems(menuName, entriesList);
   var defaultValue = getMenuDefaultValue(menuName);
   var choice = app.popUpMenu(menuItems) || defaultValue;

   field.value = choice;
}

 /**
  * TOGGLE the control, field, or button to one of the enumerated TOGGLE_STATUS values
  * -- givenList is one of either BUTTON_LIST or CONTROL_LIST
  * -- optional suffix is the set identifier such as _a or _b or _c
  */
 function toggleVisibility(givenList, toggleState, suffix){
   if (!givenList || !givenList.length){ return; }
   
   var state = toggleState || 0;
   for (var i = 0; i < givenList.length; i++){
      var key = givenList[i] + (suffix || "");
      var field = this.getField(key) || {};

      field.display = toggleState;
   }
}

function toggleSets(toggleState, suffixes){
   toggleVisibility(BUTTON_LIST, toggleState);
   toggleVisibility(LABEL_LIST, toggleState);

   for (var i = 0; i < suffixes.length; i++){
      var suffix = suffixes[i];
      toggleVisibility(CONTROL_LIST, toggleState, suffix);
      toggleVisibility(TEXT_LIST, toggleState, suffix);
   }
}

function hideEverything(){
   toggleSets(TOGGLE_STATUS.hidden, SUFFIX_LIST);
}

function showEverything(){
   toggleSets(TOGGLE_STATUS.noPrint, SUFFIX_LIST);
}

function performCalculations(suffixes){   
   for (var i = 0; i < suffixes.length; i++){
      var suffix = suffixes[i];

      driveBPSum(suffix);
      driveBurden(suffix);
   }          
}

function initializeGlobal(){
   _global = {};
}

function getProfileKey(suffix){
   var profileKey = PROFILE_KEY + suffix;
   return profileKey;
}

function getProfileHash(suffix){
   var profileKey = getProfileKey(suffix);
   var profileHash = _global[profileKey];

   if (!profileHash){
      profileHash = initializeProfile(suffix);
   }

   return profileHash;
}

function initializeProfile(suffix){
   var profileKey = getProfileKey(suffix);

   _global[profileKey] = {
      "attrList": [2,2,2,2,2,2,2,2,3],
      "dBPList": [],
      "iCRrList": []
   };

   var pHash = _global[profileId];
   return pHash;
}

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
   for (var i = 0; i < suffixes.length; i++){
      var suffix = suffixes[i];

      assignConfigurations(buildTargetHash, suffix);
   }   
}

function runReset(){
   hideEverything();
   initializeGlobal();
}

function runCalculate(){
   performCalculations(SUFFIX_LIST);
}

function runBuild(){
   performBuild(BUILD_TARGETS_BY_NAME, SUFFIX_LIST);
}

function runInitialize(){
   showEverything();
   initializeGlobal();
}

//runInitialize(); invoke at end of INITIALIZE button
//runBuild(); invoke via BUILD button
//runCalculate(); invoke via CALCULATE button
//runReset(); invoke via RESET button

