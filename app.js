const noteItems = document.querySelectorAll(".item")

noteItems.forEach((item) => {
    item.addEventListener("click", function(e){

        // console.log(e.clientX, e.clientY)
        let x = e.clientX - item.offsetLeft + "px"
        let y = e.clientY - item.offsetTop + "px"

        let effectElement = item.childNodes[1]
        effectElement.style.left = x
        effectElement.style.top = y
        effectElement.style.height = "500px"
        effectElement.style.width = "500px"
        effectElement.style.backgroundColor = "#ffffff10"
        
        // setTimeout(function(){
        //     // effectElement.style.left = "auto"
        //     // effectElement.style.top = "auto"
        //     effectElement.style.height = "0"
        //     effectElement.style.width = "0"
        //     effectElement.style.backgroundColor = "opacity(0)"
        // }, 1000)
        setTimeout(() => {
            goDetailpage("123")
        }, 200);
    })
})


function goDetailpage(noteId) {
    window.location.href = "./details.html"
}
