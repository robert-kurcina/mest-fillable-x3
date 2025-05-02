import concat from "simple-file-concat";

const outputDir = "./build";
const outputFile = "output.js";

concat("./src/scripts", "output.js", {ext: "js", outputDir: "./build"});

