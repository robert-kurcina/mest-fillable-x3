

//functions-calculate.js
//------------------------------------------------------------------------------------------------------------------------------------------

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
 
function performCalculations(suffixes){   
    for (var i = 0; i < suffixes.length; i++){
       var suffix = suffixes[i];
 
       driveBPSum(suffix);
       driveBurden(suffix);
    }          
 }