let btnPrev = document.getElementById("prev")
let btnNext = document.getElementById("next")
let book = document.querySelector(".book")

let paper1 =document.getElementById("p1")
let paper2 =document.getElementById("p2")
let paper3 =document.getElementById("p3")


btnPrev.addEventListener('click', goPrev)
btnNext.addEventListener('click', goNext)


let currentLocation =1
let numberOfPapers = 3
let maxLocation = numberOfPapers + 1




document.addEventListener("keydown", function(e){

    if(e.key=== "ArrowRight"){
        goNext()
    }
 else if(e.key=== "ArrowLeft"){
        goPrev()
    }
})




function openBook (){
    book.style.transform = "translatex(50%)";
    btnPrev.style.transform ="translatex(-180px)";
    btnNext.style.transform ="translatex(180px)";
}




function closeBook (isAtTheBegging){

    if(isAtTheBegging){
        book.style.transform = "translatex(0)";

    }else{
        book.style.transform = "translatex(100%)";   
    }
    btnPrev.style.transform ="translatex(0px)";
    btnNext.style.transform ="translatex(0px)";
}

function goPrev(){

    if(currentLocation > 1){
        switch(currentLocation){
            case 2 :
                closeBook(true);
                paper1.classList.remove("flipped")
                paper1.style.zIndex= 3
                break;
            case 3 :
               
                paper2.classList.remove("flipped")
                paper2.style.zIndex= 2
                break;
            case 4 :
               openBook()
                paper3.classList.remove("flipped")
                paper3.style.zIndex= 1
                break;
        }

        currentLocation--;
    }
    
   

}

function goNext(){

    if(currentLocation < maxLocation){
        switch(currentLocation){
            case 1 :
                openBook();
                paper1.classList.add("flipped")
                paper1.style.zIndex= 1
                break;
            case 2 :
                paper2.classList.add("flipped")
                paper2.style.zIndex= 2
                break;
            case 3 :
               
                paper3.classList.add("flipped")
                paper3.style.zIndex= 3
                closeBook(false)
                break;
        }

        currentLocation++
    }
    
}