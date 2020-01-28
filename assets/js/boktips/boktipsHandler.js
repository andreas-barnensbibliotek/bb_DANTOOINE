import btdataHandler from './boktipsDataHandler';
import autocompleteObj from '../autocomplete/autocompleteHandler';
import appsettings from '../appsettings';

const boktipsHandler = () => {
	let _apiObj = btdataHandler();
	let _appsettings = appsettings.config;
	let autoObj = autocompleteObj();
	let $boklistContainer, $aj_boktips_v3_Modal;

	function DOMHandler() {
		$boklistContainer = $('#aj_boktips_v3_List');
		$aj_boktips_v3_Modal = $('#aj_boktips_v3_Modal');
		autoObj.initAuto();
	}

	function EventHandler() {
		let searchbox = document.getElementById('inptxt_search');
		if (typeof searchbox != 'undefined' && searchbox != null) {
			searchbox.addEventListener('keyup', function(event) {
				event.preventDefault();
				if (event.keyCode === 13) {
					$bb_aj_searchbtn.click();
					$bb_aj_searchbtn.focus();
				}
			});
		}

		$('#mainboklistcontainer').on('click', '.aj_boktips_v3_item', function(e) {
			let val = $(this).attr('data-tipid');
			RenderModal(val);
		});

		$('#mainboklistcontainer').on('click', '#cmd_rndBooktip', function(e) {
			console.log('random');
			getRandomboktips();
			return false;
		});

		$('#mainboklistcontainer').on('click', '#cmd_byAgeBooktip', function(e) {
			let ageval = $('#drpTipsForAgeList').val();
			console.log('age: ' + ageval);
			getbyAgeboktips(ageval);
			return false;
		});

		$('#mainboklistcontainer').on('click', '.cmd_catBooktip', function(e) {
			let catid = $(this).attr('data-catid');
			console.log('CAtegory id: ' + catid);
			getCategoryboktips(catid);
			return false;
		});

		$('#mainboklistcontainer').on('click', '#cmdPrintBooktip', function(e) {
			let TipId = $(this).attr('data-tipid');
			console.log('tipid: ' + TipId);
			RenderPint(TipId);
			return false;
		});

		$('#mainboklistcontainer').on('click', '#cmd_searchbtn', function(e) {
			let searchtext = $('#inptxt_search')
				.val()
				.trim();
			console.log('searchtext: ' + searchtext);
			getFreeSearchboktips(searchtext);
			return false;
		});
	}

	function getLatestboktips() {
		let tmpl = _appsettings.handlebartemplate.hb_bt_list_tmp;
		let apiurl = _appsettings.api.boktipslistor.getlatestBoktips(100);

		Render(tmpl, apiurl);
	}

	function getRandomboktips() {
		let tmpl = _appsettings.handlebartemplate.hb_bt_list_tmp;
		let apiurl = _appsettings.api.boktipslistor.getRandomBoktips(100);

		Render(tmpl, apiurl);
	}

	function getbyAgeboktips(ageVal) {
		let tmpl = _appsettings.handlebartemplate.hb_bt_list_tmp;
		let apiurl = _appsettings.api.boktipslistor.getAgeBoktips(ageVal);

		Render(tmpl, apiurl);
	}

	function getCategoryboktips(catid) {
		let tmpl = _appsettings.handlebartemplate.hb_bt_list_tmp;
		let apiurl = _appsettings.api.boktipslistor.getCategoryBoktips(catid);

		Render(tmpl, apiurl);
	}

	function getFreeSearchboktips(searchtxt) {
		let tmpl = _appsettings.handlebartemplate.hb_bt_list_tmp;
		let apiurl = _appsettings.api.boktipslistor.getfreesearchBoktips();
		let Postdata = {
			Searchtext: searchtxt
		};

		RenderPost(tmpl, Postdata, apiurl);
	}

	function Render(hbtmpl, apiurl) {
		_apiObj.boktipsServiceApi(hbtmpl, apiurl, function(tmpldata) {
			$boklistContainer.html(tmpldata);
		});
	}

	function RenderPost(hbtmpl, postdata, apiurl) {
		_apiObj.boktipsServicePostApi(hbtmpl, apiurl, postdata, function(tmpldata) {
			$boklistContainer.html(tmpldata);
		});
	}

	function RenderModal(val) {
		let jsn = _appsettings.currentJson;
		let obj = _.find(jsn.Boktips, ['TipID', Number(val)]);

		_apiObj.HandlebarService(obj, function(tmpldata) {
			$aj_boktips_v3_Modal.html(tmpldata);
		});
	}

	function RenderPint(val) {
		let jsn = _appsettings.currentJson;
		let obj = _.find(jsn.Boktips, ['TipID', Number(val)]);

		_apiObj.boktipsPrint(obj, function(tmpldata) {
			let printWP = window.open('', 'Boktips');
			printWP.document.open();
			//insert content
			printWP.document.write(tmpldata);
			printWP.document.close();
			//open print dialog
			setTimeout(function() {
				printWP.print();
			}, 1000);
		});
	}

	function init(callback) {
		DOMHandler();
		EventHandler();
		getLatestboktips();
		callback('test');
	}

	return {
		init: init
	};
};

export default boktipsHandler;
