
let img = ["img/cute-cat.jpg","img/friends.jpg" , 
"img/rabbit.jpg" , "img/pet.jpg"]

let imgTag = document.querySelector(".petImg")
   imgTag.style.width = "450px",
   imgTag.style.objectFit ="cover";
   imgTag.style.height ="300px";

  let i = 0 ;

function next(){
    if(i >=img.length-1){
        return false
    }
    i++
    imgTag.setAttribute("src", img[i])
    }

function pre() {
   if(i<= 0 ){
    return false
   }
   i-- 
   imgTag.setAttribute("src", img[i])
}