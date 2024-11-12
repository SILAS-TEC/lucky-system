sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/Text"
], function (Controller, JSONModel, Text) {
    "use strict";

    return Controller.extend("btpluck.controller.Viewluck", {
        onInit: function () {
            var oModel = new JSONModel({
                numbers: []
            });
            this.getView().setModel(oModel);
            this.onGenerateNumber();
        },

        onGenerateNumber: function () {
            var that = this;
            fetch('http://localhost:4004/odata/v4/luck/randomLuck')
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    var number = data.value;
                    that.getView().byId("luckNumber").setText(number);
                    var oModel = that.getView().getModel();
                    var aNumbers = oModel.getProperty("/numbers");
                    aNumbers.unshift(number);
                    oModel.setProperty("/numbers", aNumbers);
                    that.updateNumbers();
                });
        },

        updateNumbers: function () {
            var oHBox = this.getView().byId("sortedNumbers");
            oHBox.removeAllItems();
            var aNumbers = this.getView().getModel().getProperty("/numbers");
            aNumbers.forEach(function(num) {
                var oText = new Text({
                    text: num.toString(),
                    width: "4rem",
                    textAlign: "Center"
                }).addStyleClass("numberBox");
                oHBox.addItem(oText);
            });
        }
    });
});