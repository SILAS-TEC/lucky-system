sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Text",
    "sap/ui/model/json/JSONModel"
], function (Controller, Text, JSONModel) {
    "use strict";

    return Controller.extend("btpluck.controller.Viewluck", {
        onInit: function () {
            this.numbers = [];
            this.onGenerateNumber();
        },

        onGenerateNumber: function () {
            var that = this;
            fetch('http://localhost:4004/odata/v4/luck/randomLuck')
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    var number = data.value;
                    that.getView().byId("luckyNumberText").setText(number);
                    that.numbers.unshift(number);
                    that.updateNumbers();
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