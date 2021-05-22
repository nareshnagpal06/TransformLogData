var data = {
  MessageId: "514e4f7c-62fa-487f-a198-baabaedd6a15",
  EDIComponentException:
    "Error encountered during parsing. The Edifact transaction set with id \\'EW53505312\\' contained in interchange (without group) with id \\'EW64060617\\', with sender id \\'8431224000002\\', receiver id \\'MS-EMEA\\' is being suspended with following errors:\r\nError: 1 (Field level error)\r\n\tSegmentID: NAD\r\n\tPosition in TS: 8\r\n\tData Element ID: C08001\r\n\tPosition in Segment: 5\r\n\tPosition in Field: 1\r\n\tData Value: DIGIBÃRIA Information Technologies,\r\n\t39: Data element too long\r\n\r\n",
  PartnerName: "GTI(Spain)",
  TransactionSetControlNumber: "EW53505312",
  InterchangeControlNumber: "EW64060617",
  MessageType:
    "http://MSIT.EAS.ICOE.VL.Orders.EOCSelect.Schemas.PA.EFACTD97AOrders#EFACT_D97A_ORDERS",
  GroupControlNumber: "",
};

Object.keys(data).forEach(function (key1) {
  var value1 = data[key1];

  console.log(key1, value1);
});
