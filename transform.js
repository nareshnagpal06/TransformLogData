var transform = require("node-json-transform").transform;
var data1 = {
  title: "title1",
  description: "description1",
  blog: "This is a blog.",
  date: "11/4/2013",
  extra: {
    link: "http://goo.cm",
  },
  list1: [
    {
      name: "mike",
    },
  ],
  list2: [
    {
      item: "thing",
    },
  ],
  clearMe: "text",
};

var map = {
  item: {
    id: "id",
    sku: "sku",
    zero: "zero",
    toReplace: "sku",
    errorReplace: "notFound",
    simpleArray: ["id", "sku", "sku"],
    complexArray: [{ node: "id" }, { otherNode: "sku" }, { toReplace: "sku" }],
    subObject: {
      node1: "id",
      node2: "sku",
      subSubObject: {
        node1: "id",
        node2: "sku",
      },
    },
  },
  remove: ["unwanted"],
  defaults: {
    missingData: true,
  },
  operate: [
    {
      run: (val) => "replacement",
      on: "subObject.subSubObject.node1",
    },
    {
      run: (val) => "replacement",
      on: "errorReplace",
    },
    {
      run: (val) => "replacement",
      on: "toReplace",
    },
    {
      run: (val) => "replacement",
      on: "simpleArray.2",
    },
    {
      run: (val) => "replacement",
      on: "complexArray.2.toReplace",
    },
  ],
};

var data = [
  {
    id: "books",
    zero: 0,
    sku: "10234-12312",
    unwanted: true,
  },
];

var result = transform(data, map);

console.log(JSON.stringify(result));
