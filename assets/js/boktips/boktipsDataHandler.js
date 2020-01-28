import apiServiceHandler from '../service/apiServiceHandler';
const btDataHandler = () => {
	let _apiObj = apiServiceHandler();

	function ServiceApi(tmpl, url, callback) {
		let $curtmpl = require('../../../htmlTemplate/tpl_boktipsListItem.hbs');
		_apiObj.GetjsonDetail(url, function(data) {
			callback($curtmpl(data));
		});
	}

	function servicePostApi(tmpl, url, data, callback) {
		let $curtmpl = require('../../../htmlTemplate/tpl_boktipsListItem.hbs');
		_apiObj.UpdPostjson(url, data, function(data) {
			callback($curtmpl(data));
		});
	}

	function HandelbarService(data, callback) {
		let $curtmpl = require('../../../htmlTemplate/tpl_boktipModal.hbs');
		callback($curtmpl(data));
	}

	function HandelbarPrint(data, callback) {
		let $curtmpl = require('../../../htmlTemplate/hb_booktipsPrint.hbs');
		callback($curtmpl(data));
	}

	return {
		boktipsServiceApi: ServiceApi,
		boktipsServicePostApi: servicePostApi,
		boktipsPrint: HandelbarPrint,
		HandlebarService: HandelbarService
	};
};

export default btDataHandler;
