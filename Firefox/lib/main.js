var self = require('sdk/self');
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
	include: "*.sg.hu",
	contentScriptWhen: "start",
	attachTo: ["existing", "top"],
	contentStyleFile: [
		self.data.url('css/font-awesome.min.css'),
		self.data.url('css/skin.css')
	]
});