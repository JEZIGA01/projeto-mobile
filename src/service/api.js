import axios from 'axios'
/*
rodar API cp, ipv4: json-server --watch -d 180 --host 192.168.1.4 db.json
 */

const api = axios.create({
  baseURL:'http://192.168.1.4:3000/'
})

export default api;