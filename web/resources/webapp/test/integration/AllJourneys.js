jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 POHeader in the list
// * All 3 POHeader have at least one POItem

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/yr/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/yr/test/integration/pages/App",
	"com/yr/test/integration/pages/Browser",
	"com/yr/test/integration/pages/Master",
	"com/yr/test/integration/pages/Detail",
	"com/yr/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.yr.view."
	});

	sap.ui.require([
		"com/yr/test/integration/MasterJourney",
		"com/yr/test/integration/NavigationJourney",
		"com/yr/test/integration/NotFoundJourney",
		"com/yr/test/integration/BusyJourney",
		"com/yr/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});