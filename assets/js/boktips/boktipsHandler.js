import btdataHandler from './boktipsDataHandler';
import appsettings from '../appsettings';

const boktipsHandler = () => {
	let _apiObj = btdataHandler();
	let _appsettings = appsettings.config;
	let $boklistContainer, $aj_boktips_v3_Modal;

	function DOMHandler() {
		$boklistContainer = $('#aj_boktips_v3_List');
		$aj_boktips_v3_Modal = $('#aj_boktips_v3_Modal');
	}

	function EventHandler() {
		$('#mainboklistcontainer').on('click', '.aj_boktips_v3_item', function(e) {
			let val = $(this).attr('data-tipid');
			RenderModal(val);
		});
	}

	function getLatestboktips() {
		let tmpl = _appsettings.handlebartemplate.hb_bt_list_tmp;
		let apiurl = _appsettings.api.boktipslistor.getlatestBoktips(100);

		Render(tmpl, apiurl);
	}

	function Render(hbtmpl, apiurl) {
		_apiObj.boktipsServiceApi(hbtmpl, apiurl, function(tmpldata) {
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
