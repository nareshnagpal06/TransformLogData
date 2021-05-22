const csv = require("csv-parser");
const transform = require("./transform1");
const results = [];
const fs = require("fs");
csvFile = fs.readFileSync("Data1.csv", "utf8");
console.log("hey");

let csvToJson = function (csvFile) {
  fs.createReadStream("data1.csv")
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      // console.log(JSON.stringify(results));
      fs.appendFileSync("Data1.json", JSON.stringify(results));
      const output = transform.TranformFunction(results);
      fs.writeFileSync("Data2.json", JSON.stringify(output));
    });
};

csvToJson(csvFile);
