

//functions-prepare.js
//------------------------------------------------------------------------------------------------------------------------------------------

function runReset(){
   console.println("INVOKED runReset");
   hideEverything();
   initializeGlobal();
}

function runCalculate(){
   console.println("INVOKED runCalculate");
   performCalculations(SUFFIX_LIST);
}

function runBuild(){
   console.println("INVOKED runBuild");
   performBuild(BUILD_TARGETS_BY_NAME, SUFFIX_LIST);
}

function prepareForm(){
   console.println("INVOKED prepareForm");
   var btnBuild = this.getField("btn_build") || {};
   var btnCalculate = this.getField("btn_calculate") || {};
   var btnReset = this.getField("btn_reset") || {};

   btnBuild.setAction("MouseUp", "runBuild();");
   btnCalculate.setAction("MouseUp", "runCalculate();");
   btnReset.setAction("MouseUp", "runReset();");
}

function runInitialize(){
   console.println("INVOKED runInitialize");
   showEverything();
   initializeGlobal();
   prepareForm();
}