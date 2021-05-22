var transform = require("node-json-transform").transform;
const fs = require("fs");
// var data = [
//   {
//     MessageId: "514e4f7c-62fa-487f-a198-baabaedd6a15",
//     EDIComponentException:
//       "Error encountered during parsing. The Edifact transaction set with id \\'EW53505312\\' contained in interchange (without group) with id \\'EW64060617\\', with sender id \\'8431224000002\\', receiver id \\'MS-EMEA\\' is being suspended with following errors:\r\nError: 1 (Field level error)\r\n\tSegmentID: NAD\r\n\tPosition in TS: 8\r\n\tData Element ID: C08001\r\n\tPosition in Segment: 5\r\n\tPosition in Field: 1\r\n\tData Value: DIGIBÃRIA Information Technologies,\r\n\t39: Data element too long\r\n\r\n",
//     PartnerName: "GTI(Spain)",
//     TransactionSetControlNumber: "EW53505312",
//     InterchangeControlNumber: "EW64060617",
//     MessageType:
//       "http://MSIT.EAS.ICOE.VL.Orders.EOCSelect.Schemas.PA.EFACTD97AOrders#EFACT_D97A_ORDERS",
//     GroupControlNumber: "",
//   },
//   {
//     MessageId: "384d8aa8-89b9-4968-9ec9-e4c9e14c40c4",
//     EDIComponentException:
//       "Error encountered during parsing. The Edifact transaction set with id \\'EW37557639\\' contained in interchange (without group) with id \\'EW64060617\\', with sender id \\'8431224000002\\', receiver id \\'MS-EMEA\\' is being suspended with following errors:\r\nError: 1 (Field level error)\r\n\tSegmentID: NAD\r\n\tPosition in TS: 8\r\n\tData Element ID: C05901\r\n\tPosition in Segment: 6\r\n\tPosition in Field: 1\r\n\tData Value: Calle Teide nÂº 4 # NÃºcleo 2 # 1Âª Pl\r\n\t39: Data element too long\r\n\r\n",
//     PartnerName: "GTI(Spain)",
//     TransactionSetControlNumber: "EW37557639",
//     InterchangeControlNumber: "EW64060617",
//     MessageType:
//       "http://MSIT.EAS.ICOE.VL.Orders.EOCSelect.Schemas.PA.EFACTD97AOrders#EFACT_D97A_ORDERS",
//     GroupControlNumber: "",
//   },
//   {
//     MessageId: "5003f614-6133-4b6f-af09-748e91a8c81a",
//     EDIComponentException:
//       "Error encountered during parsing. The Edifact transaction set with id \\'3\\' contained in interchange (without group) with id \\'10312\\', with sender id \\'FTNTBPROD\\', receiver id \\'081466849\\' is being suspended with following errors:\r\nError: 1 (Segment level error)\r\n\tSegmentID: UNT\r\n\tPosition in TS: 163\r\n\t15: Use of segment, data-type or segment not supported in this position\r\n\r\n",
//     PartnerName: "FedEx",
//     TransactionSetControlNumber: "3",
//     InterchangeControlNumber: "10312",
//     MessageType:
//       "http://schemas.microsoft.com/BizTalk/EDI/EDIFACT/2006#EFACT_D10B_CUSDEC",
//     GroupControlNumber: "",
//   },
//   {
//     MessageId: "9eb7926f-f69c-45b0-9928-2063e57a10d6",
//     EDIComponentException:
//       "Error encountered during parsing. The Edifact transaction set with id \\'5\\' contained in interchange (without group) with id \\'10312\\', with sender id \\'FTNTBPROD\\', receiver id \\'081466849\\' is being suspended with following errors:\r\nError: 1 (Segment level error)\r\n\tSegmentID: UNT\r\n\tPosition in TS: 49\r\n\t15: Use of segment, data-type or segment not supported in this position\r\n\r\n",
//     PartnerName: "FedEx",
//     TransactionSetControlNumber: "5",
//     InterchangeControlNumber: "10312",
//     MessageType:
//       "http://schemas.microsoft.com/BizTalk/EDI/EDIFACT/2006#EFACT_D10B_CUSDEC",
//     GroupControlNumber: "",
//   },
// ];

module.exports = {
  TranformFunction: function (data) {
    var keys = Object.keys(data[0]);

    var obj = {};
    obj.tables = [];
    obj.tables[0] = {};
    obj.tables[0].name = "PrimaryResult";
    obj.tables[0].columns = [];
    obj.tables[0].rows = [];

    for (var i = 0; i < keys.length; i++) {
      obj.tables[0].columns[i] = {};
      obj.tables[0].columns[i].name = keys[i];
      obj.tables[0].columns[i].type = "string";
    }
    //console.log(JSON.stringify(obj));

    for (var j = 0; j < data.length; j++) {
      var value = data[j];

      //console.log(value);
      var keys = Object.keys(value);
      var keysbyindex = Object.keys(value);
      obj.tables[0].rows[j] = [];
      for (let i = 0; i < keys.length; i++) {
        var value1 = value[keysbyindex[i]];
        obj.tables[0].rows[j].push(value1);
      }
    }

    //fs.writeFileSync("Data3.json", JSON.stringify(obj));
    return obj;
  },
};

//var output = TranformFunction(data);

//console.log(JSON.stringify(output));
