sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Text",
    "sap/ui/model/json/JSONModel"
], function (Controller, Text, JSONModel) {
    "use strict";

    return Controller.extend("luckyNumbers.controller.Main", {
        onInit: function () {
            this.numbers = [];
            this.onGenerateNumber();
        },

        onGenerateNumber: function () {
            var that = this;
            var oModel = this.getView().getModel("luckModel");
            
            oModel.callFunction("/randomLuck", {
                method: "GET"
            }).then(function (oData) {
                var number = oData.value;
                that.getView().byId("luckyNumberText").setText(number);
                that.numbers.unshift(number);
                that.updateNumbers();
            }).catch(function (error) {
                console.error("Error fetching lucky number:", error);
            });
        },
        updateNumbers: function () {
            var sortedNumbersContainer = this.getView().byId("sortedNumbers");
            sortedNumbersContainer.removeAllItems();

            this.numbers.forEach(function (num) {
                var numberText = new Text({
                    text: num.toString(),
                    width: "4rem",
                    textAlign: "Center"
                }).addStyleClass("sapUiTinyMargin sapThemeHighlight-asColor sapUiSmallMarginEnd");

                sortedNumbersContainer.addItem(numberText);
            });
        }
    });
});