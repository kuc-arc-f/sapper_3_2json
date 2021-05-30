import axios from 'axios'
import Config from '../../../app_config'
import LibCommon from '../../lib/LibCommon'
//
export async function get(req, res) {
  var config = Config.get_config()
  var url = config.MY_JSON_URL + '?a1'
//console.log("list =", url )
  const response = await axios.get(url)
  var data = await response.data
  var items = data.items
  items =  LibCommon.get_reverse_items(items)
  data.items = items

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
//  res.end(JSON.stringify(data.items));
  res.end(JSON.stringify(data));
}