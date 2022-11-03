 let append=(data,container)=>{
  container.innerHTML=null;
 data.forEach(({id,caption,image_url})=>{
    let div=document.createElement("div")
    let caption_h4=document.createElement("h4")
    caption_h4.textContent=caption;
    let image=document.createElement("img")
    image.src=image_url;
    let id_no=document.createElement("h1")
    id_no.innerText=id
    div.append(id_no,image,caption_h4)
    container.append(div)
 })

 }
 export {append}