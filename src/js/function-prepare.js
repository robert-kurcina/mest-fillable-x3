

//functions-prepare.js
//------------------------------------------------------------------------------------------------------------------------------------------

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

function prepareForm(){
   var btnBuild = this.getField("btn_build") || {};
   var btnCalculate = this.getField("btn_calculate") || {};
   var btnReset = this.getField("btn_reset") || {};

   btnBuild.setAction("MouseUp", "runBuild();");
   btnCalculate.setAction("MouseUp", "runCalculate();");
   btnReset.setAction("MouseUp", "runReset();");
}

function runInitialize(){
   showEverything();
   initializeGlobal();
   prepareForm();
}