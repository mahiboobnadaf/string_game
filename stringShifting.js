let containerBox=document.querySelector(".container")
let gameBox=document.querySelector(".game")
let ltBtn=document.querySelector(".left-shift")
let rtBtn=document.querySelector(".right-shift")
let textbox=document.querySelector("h1")

containerBox.onclick= function(e) {
    console.log("Container clicked")
    console.log(this)
    // console.log(e.target)
};

gameBox.onclick=function(e){
    // console.log("Gme box clicked")
    // console.log(this)
    e.stopPropagation();
    // console.log(e.target)
    let clickedObject=e.target
    // console.log(clickedObject)
    // console.log(clickedObject.classList)

    let currWord=textbox.innerText.trim()

    if (clickedObject.classList.contains("left-shift"))
        currWord=rotateleft(currWord)

    else
        currWord=rotateright(currWord)
    
    textbox.innerText=currWord

};
function rotateleft(word){
    return word[word.length-1]+
    word.slice(0,word.length-1)
}

function rotateright(word){
    return word.slice(1)+word[0]
}
/* ltBtn.onclick= function(e){
    console.log("LT button clicked")
    console.log(this)
};
*/
// rtBtn.onclick= function(e){
//     console.log("RT button Clicked")
//     console.log(this)
// }
