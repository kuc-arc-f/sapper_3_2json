import axios from 'axios'
import marked from  'marked'
import LibCms from '../../lib/LibCms'
import Config from '../../../app_config'
import LibCommon from '../../lib/LibCommon'
//
export async function get(req, res, next) {
	const { slug } = req.params;
	var config = Config.get_config()
	var url = config.MY_JSON_URL + '?a1'
	const response = await axios.get(url)
	var data = await response.data
//console.log(data.page_items)
  var items = data.page_items 
  items = LibCommon.convert_items(items)
  var item  = LibCms.get_page_item( items, String(slug) )
	if (data != null ) {
    item.content = marked(item.content)
    //console.log(data)
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
		res.end(JSON.stringify(item));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});
		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}
