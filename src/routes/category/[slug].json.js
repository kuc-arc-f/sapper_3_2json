import axios from 'axios'
import marked from  'marked'
import Config from '../../../app_config'
import LibCms from '../../lib/LibCms'
import LibCommon from '../../lib/LibCommon'

//
export async function get(req, res, next) {
  const { slug } = req.params;
  //console.log("id=", slug)
  var config = Config.get_config()
  var url = config.MY_JSON_URL + '?a1'
  const response = await axios.get(url)
  var data = await response.data
  var items = LibCms.get_category_items(data.items, String(slug))
  items =  LibCommon.get_reverse_items(items)
  data.items = items
//console.log(items)
	if (data != null ) {
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
