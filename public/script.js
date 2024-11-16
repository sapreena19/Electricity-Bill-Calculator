var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")
addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})
var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
var submit=document.getElementById("submit")
submit.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

var container=document.querySelector(".container")
var entername=document.getElementById("name")
var phonenumber=document.getElementById("phone-number")
var entermessage=document.getElementById("enter-message")

sendmessage.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h1>${entername.value}</h1>
    <h5>${phone-number.value}</h5>
    <p>${enter-message.value}</p>
    <button onclick="deletebox(event)">delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
function deletebox(event){
    event.target.parentElement.remove()
}