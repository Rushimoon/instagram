const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const PORT=process.env.PORT||8000
server.use(middlewares)
server.use(router)
server.listen(PORT, () => {
  console.log('JSON Server is running')
})



import {navbar} from "./components/navbar.js"
import {append} from "./scripts/append.js" 



let navbar_html= navbar()
let dis_navbar=document.getElementById("navbar")
dis_navbar.innerHTML=navbar_html;

const get_data=async()=>{
    let post_div=document.getElementById("post")
    let res= await fetch("http://localhost:3000/posts")
    let data= await res.json()
    append(data,post_div)
}
get_data()