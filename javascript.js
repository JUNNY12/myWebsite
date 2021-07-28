document.querySelector('#dropdown').addEventListener('click', function(e){
    e.preventDefault();
    dropdownMenu();
})


const dropIcon = document.querySelector("#dropdown")

function dropdownMenu(){
    var x = document.getElementById("dropdownClick");
    x.classList.toggle('active-nav');
    
    dropIcon.style.display="none"
    IconRemove.style.display="block"
   
    
}


const IconRemove = document.querySelector(".dropIconRemove")
var x = document.getElementById("dropdownClick");
IconRemove.addEventListener("click", function(e){
    e.preventDefault()
    x.classList.remove("active-nav")
    IconRemove.style.display="none"
    dropIcon.style.display="block"

})









//PAGE SLIDER

document.querySelector("#prevbtn").addEventListener("click", function(e){
    e.preventDefault();
    plusSlides(-1);
})


document.querySelector("#nextbtn").addEventListener("click", function(e){
    e.preventDefault();
    plusSlides(1);
})



document.querySelector("#dotslide").addEventListener("click", function(e){
    e.preventDefault();
    currentSlide(1);
})


document.querySelector("#dotslide").addEventListener("click", function(e){
    e.preventDefault();
    currentSlide(2);
})

document.querySelector("#dotslide").addEventListener("click", function(e){
    e.preventDefault();
    currentSlide(3);
})

document.querySelector("#dotslide").addEventListener("click", function(e){
    e.preventDefault();
    currentSlide(4);
})

document.querySelector("#dotslide").addEventListener("click", function(e){
    e.preventDefault();
    currentSlide(5);
})

document.querySelector("#dotslide").addEventListener("click", function(e){
    e.preventDefault();
    currentSlide(6);
})





const myslide = document.querySelectorAll(".myslides"),
dot = document.querySelectorAll(".dot");




let counter = 1;
slidefun(counter);


function plusSlides(n){
    counter += n;
    slidefun (counter);
    resetTimer();
}

function currentSlide(n){
    counter = n;
    slidefun(counter);
    resetTimer();
}

 



function slidefun(n){
    let i;
    for(i = 0;i<myslide.length;i++){
        myslide[i].style.display ="none";
    }

    for(i = 0;i<dot.length;i++){
        dot[i].classList.remove("active");
    }


    if(n > myslide.length){
        counter = 1;
    }
    if(n < 1){
        counter = myslide.length;
    }
    myslide[counter - 1].style.display ="block";
    dot[counter - 1].classList.add("active")

}



//BUTTON ALERT

// const buttonAlert = document.querySelector("#btn__alert");

// buttonAlert.addEventListener("click", function(e){
//     e.preventDefault()
//     alert("Thank You For Subscribing To My Weekly Tech Tips");
// })