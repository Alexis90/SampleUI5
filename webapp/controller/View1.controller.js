sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	"use strict";

	return Controller.extend("com.sap.rig.cp.SampleUI5.controller.View1", {
		onButtonPressed: function(oEvent){
			
			MessageToast.show("Hello!");
			
			
		}
	});
});