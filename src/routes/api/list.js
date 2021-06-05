import axios from 'axios'
import Config from "../../../app_config"
import LibPagenate from '../../lib/LibPagenate'
import LibCommon from '../../lib/LibCommon'

//
export async function get(req, res) {
  try{
    var page = 1    
//console.log( typeof req.query.page )  
    if(typeof req.query.page != 'undefined'){
      page = req.query.page
    }
//console.log("page=" , page )  
    LibPagenate.init()
    var pageInfo=LibPagenate.get_page_start(page)
    var config = Config.get_config()
    var url = config.MY_JSON_URL + '?a1'
    const response = await axios.get(url)
    var data = await response.data
    var items = data.items  
    items =  LibCommon.get_reverse_items(items)  
    data.items = LibPagenate.getOnepageItems(items, pageInfo.start , pageInfo.end )
//console.log(display)
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(data));
  } catch (err) {
    console.error(err);
    res.writeHead(500, {'Content-Type': 'application/json' });
    res.end(JSON.stringify({}));
  }  
}