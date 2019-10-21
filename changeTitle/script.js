var ourList = document.getElementById("list");
var myBtn = document.getElementById("btn");
var listItems = document.getElementById("list").getElementsByTagName("li");
var ourHeadline = document.getElementById("our-headline")



ourList.addEventListener("click",selectItem)
function selectItem(e){
    if(e.target.nodeName == "LI"){
        ourHeadline.innerHTML = e.target.innerHTML;
        for(i = 0; i < e.target.parentNode.children.length;i++){
            e.target.parentNode.children[i].classList.remove("active")
        }
          e.target.classList.add("active");
    }
    
}


myBtn.addEventListener("click", additem);

function additem(){
    ourList.innerHTML += "<li>item</li>";

}