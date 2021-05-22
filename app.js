const transform = require("./transform1");
const csv = require("csv-parser");
const results = [];
const fs = require("fs");
csvFile = fs.readFileSync("Data1.csv", "utf8");
console.log("hey");

let csvToJson = function (csvFile) {
  console.log("Hey Naresh");
  const lines = csvFile.split("\n");
  const result = [];
  const headers = lines[0].split("\n");
  //console.log(headers);

  var obj = {};
  obj.tables = [];
  obj.tables[0] = {};
  obj.tables[0].name = "PrimaryResult";
  obj.tables[0].columns = [];
  obj.tables[0].rows = [];
  // obj.tables[0].columns[0] = {};
  // obj.tables[0].columns[0].name = "MessageId";
  // obj.tables[0].columns[0].type = "string";

  // obj.tables[0].columns[1] = {};
  // obj.tables[0].columns[1].name = "EDIComponent";
  // obj.tables[0].columns[1].type = "string";
  var headerArray = lines[0].split(",");

  // populate columns with header
  for (var i = 0; i < headerArray.length; i++) {
    obj.tables[0].columns[i] = {};
    obj.tables[0].columns[i].name = headerArray[i];
    obj.tables[0].columns[i].type = "string";
    //obj.tables[0].rows[i] = [];
  }

  // populate rows with values
  for (var i = 1; i < lines.length; i++) {
    var currentline = lines[i].split(",");
    obj.tables[0].rows[i - 1] = currentline;

    // var arr = obj.tables[0].rows[i];
    // arr.push(lines[i]);
    //obj.tables[0].rows[i - 1] = lines[i];

    // for (var j = 0; j < headers.length; j++) {
    //   obj[headers[j]] = currentline[j];
    // }
  }
  console.log(JSON.stringify(obj));
  // const output = transform.TranformFunction(JSON.stringify(obj));
  // fs.writeFileSync("Data2.json", JSON.stringify(output));
  // console.log(result);
  //console.log(JSON.stringify(obj));
};

csvToJson(csvFile);
