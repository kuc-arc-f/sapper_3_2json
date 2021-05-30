import axios from 'axios'
import marked from  'marked'
import LibCms from '../../lib/LibCms'
import Config from '../../../app_config'

//
export async function get(req, res, next) {
	const { slug } = req.params;
	var config = Config.get_config()
	var url = config.MY_JSON_URL + '?a1'
	const response = await axios.get(url)
	var data = await response.data
//console.log(data.items)
	data  = LibCms.get_show_item( data.items, String(slug) )
	if (data != null ) {
		data.content = marked(data.content)
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
		res.end(JSON.stringify(data));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});
		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}
