module.exports = {
	config: (function() {
		let _apiserver = 'http://localhost:59015';
		let _dnnURL = 'http://localdev.kivdev.se';
		// let _apiserver = "http://dev1.barnensbibliotek.se:8080";
		//let _dnnURL = "http://dev1.barnensbibliotek.se";
		//let _apiserver = "http://dev1.barnensbibliotek.se:8080";
		//let _dnnURL = "http://nytt.barnensbibliotek.se";
		// let _apiserver = 'https://www2.barnensbibliotek.se';
		// let _dnnURL = 'https://www.barnensbibliotek.se';
		let _devkey = 'alf';
		let _apidevkeyend = '/devkey/' + _devkey + '/?type=json';
		let _localOrServerURL = '';
		let _htmltemplateURL = '/Portals/_default/Skins/bb_DANTOOINE/htmlTemplate/';

		// Boktipslistor START
		let _bt_List_template =
			_dnnURL + _htmltemplateURL + 'tpl_boktipsListItem.hbs';
		//// api
		let _fn_LatestBoktips = function(antal) {
			return (
				_apiserver +
				'/Api_v3.1/boktips/typ/Latest/val/' +
				antal +
				'/txtval/0' +
				_apidevkeyend
			);
		};
		let _fn_RndBoktips = function(antal) {
			return (
				_apiserver +
				'/Api_v3.1/boktips/typ/ByRandom/val/' +
				antal +
				'/txtval/0' +
				_apidevkeyend
			);
		};

		let _fn_AgeBoktips = function(ageval) {
			return (
				_apiserver +
				'/Api_v3.1/boktips/typ/ByAge/val/' +
				ageval +
				'/txtval/0' +
				_apidevkeyend
			);
		};
		let _fn_FreesrhBoktips = function(searchtext) {
			return (
				_apiserver + '/Api_v3.1/boktips/cmdtyp/BySearch/antal/0' + _apidevkeyend
			);
		};

		let _fn_autocompleteSrhBoktips = function(searchtext) {
			return (
				_apiserver +
				'/Api_v3.1/boktips/typ/ByAutoComplete/val/0/txtval/' +
				searchtext +
				_apidevkeyend
			);
		};

		let _fn_CategoryBoktips = function(catid) {
			return (
				_apiserver +
				'/Api_v3.1/boktips/typ/ByCategory/val/' +
				catid +
				'/txtval/0' +
				_apidevkeyend
			);
		};

		// Skrivboken START
		//// Template
		let _hb_skrivbokenlist_template =
			_dnnURL + _htmltemplateURL + 'skrivboken_lista.txt';
		//// API
		let _fn_userSkrivbokenlist = function(userid) {
			return (
				_apiserver +
				'/Api_v3.1/skrivboken/cmdtyp/ByUserID/val/' +
				userid +
				'/typ/2/ap/0/pub/0' +
				_apidevkeyend
			);
		};

		return {
			apiserver: _apiserver,
			dnnURL: _dnnURL,
			localOrServerURL: _localOrServerURL,
			htmltemplateurl: _dnnURL + _htmltemplateURL,
			devkey: _devkey,
			handlebartemplate: {
				hb_bt_list_tmp: _bt_List_template
			},
			api: {
				boktipslistor: {
					getlatestBoktips: _fn_LatestBoktips,
					getRandomBoktips: _fn_RndBoktips,
					getAgeBoktips: _fn_AgeBoktips,
					getfreesearchBoktips: _fn_FreesrhBoktips,
					getCategoryBoktips: _fn_CategoryBoktips
				},
				autocomplete: {
					getbyAuto: _fn_autocompleteSrhBoktips
				},
				devkeyend: _apidevkeyend
			},
			currentJson: {},
			debug: 'false'
		};
	})()
};
