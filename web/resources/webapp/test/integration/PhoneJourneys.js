jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"com/yr/test/integration/NavigationJourneyPhone",
		"com/yr/test/integration/NotFoundJourneyPhone",
		"com/yr/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});