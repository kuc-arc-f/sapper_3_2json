import axios from 'axios'
import marked from  'marked'
import Config from '../../../app_config'
import LibCms from '../../lib/LibCms'
import LibCommon from '../../lib/LibCommon'
import LibPagenate from '../../lib/LibPagenate'

//
export async function get(req, res, next) {
  const { slug } = req.params;
console.log("slug=", slug)
  var config = Config.get_config()
  var url = config.MY_JSON_URL + '?a1'
  const response = await axios.get(url)
  var data = await response.data
  LibPagenate.init()
  var pageInfo=LibPagenate.get_page_start(parseInt(slug) )
  data.items =  LibCommon.get_reverse_items(data.items)
  data.items = LibPagenate.getOnepageItems(data.items, pageInfo.start , pageInfo.end )
//console.log(data.items)
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
