import {navbar} from "./components/navbar.js"

 
let navbar_html= navbar()
let dis_navbar=document.getElementById("navbar")
dis_navbar.innerHTML=navbar_html;

let button=document.getElementById("create_btn")
button.onclick=()=>{
    createPost()
}
 
let inp_image=document.getElementById("image")
 inp_image.onchange=()=>{
    handleImage()
 }
 let image_url
 let createPost= async ()=>
 { 
    console.log("inside")
   let id=document.getElementById("id").value
   let caption=document.getElementById("caption").value
   let send_this_data={
    id,
    caption,
    image_url,
   };

   let res= await fetch("http://localhost:3000/posts",{
    method:"POST",
    body:JSON.stringify(send_this_data),
    headers:{
        "Content-Type":"application/json",
    },

   })
   let data = await res.json()
   console.log(data)
 }
 

 const handleImage = async()=>
 { 
    let img=document.getElementById('image')
    let actual_image=img.files[0]
    let form = new FormData()
    form.append("image",actual_image)
    let res= await fetch("https://api.imgbb.com/1/upload?key=7fdecf996f34c873753cafc72d7e6e8c",{
        method:"POST",
        body:form,
    })
    let data=await res.json()
   
    image_url=data.data.display_url
    console.log("img",image_url)
}