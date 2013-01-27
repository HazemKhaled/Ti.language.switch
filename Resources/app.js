// set default language only in app.js or set it from tiapp.xml
if (!Ti.App.Properties.hasProperty('language')) {
	Ti.App.Properties.setString('language', Ti.Locale.getCurrentLanguage());
}

// add this line in all windows
var lang = Ti.App.Properties.getString('language');

var self = Ti.UI.createWindow({
	backgroundColor : '#fff',
	layout : 'vertical'
});

// switch language button
var switchBtn = Ti.UI.createButton({
	title : L(lang + ':switch')
});

switchBtn.addEventListener('click', function() {
	if (lang == 'en') {
		Ti.App.Properties.setString('language', 'ar');
	} else {
		Ti.App.Properties.setString('language', 'en');
	}

	alert(L(lang + ':done'));
});

self.add(switchBtn);

var label = Ti.UI.createLabel({
	color : '#000000',
	text : L(lang + ':simple')
});
self.add(label);

var label1 = Ti.UI.createLabel({
	color : '#000000',
	text : String.format(L(lang + ':welcome'), 'Titanium')
});
self.add(label1);

var label2 = Ti.UI.createLabel({
	color : '#000000',
	text : L('all')
});
self.add(label2);

self.open();
