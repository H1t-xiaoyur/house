import axios from 'axios'
import qs from 'qs'

export const IP ='http://localhost:81'

const req = axios.create({
    baseURL:IP,
    timeout:10000
})
// 登陆
export function login(acc,pwd){
    return req.post('/login.php',qs.stringify({acc,pwd}))
}

export function gethouselist(){
    return req.get('/gethouselist.php')
}