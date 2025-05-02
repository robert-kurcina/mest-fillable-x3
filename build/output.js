import concat from "simple-file-concat";

const outputDir = "./build";
const outputFile = "output.js";

concat("./src/scripts", "output.js", {ext: "js", outputDir: "./build"});

function able(){ console.println('Hello!! World'); }

var f = this.addField("actionField", "button", 0 , [20, 100, 100, 20]);
f.setAction("MouseUp", "able();");
f.delay = true;
    f.fillColor = color.ltGray;
    f.buttonSetCaption("Beep");
    f.borderStyle = border.b;
    f.lineWidth = 3;
    f.strokeColor = color.red;
    f.highlight = highlight.p;
f.delay = false;