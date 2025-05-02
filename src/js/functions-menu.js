//functions-menu.js

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