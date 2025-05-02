

//functions-process.js
//------------------------------------------------------------------------------------------------------------------------------------------

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





