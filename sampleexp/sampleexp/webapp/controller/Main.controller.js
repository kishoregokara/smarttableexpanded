sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ns.sampleexp.controller.Main", {
            onInit: function () {
                // this.getView().bindElement({
                //     path: '/Products(1)'
                // });
            },
onBeforeRebind: function(oEvent) {
     var mBindingParams = oEvent.getParameter("bindingParams");
    mBindingParams.parameters["expand"] = "Supplier" ;
}
        });
    });
