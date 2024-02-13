// selector of button that send to top of the page
let toTop = document.querySelector('#toTop')


// Side button that goes up to the top of the page
toTop.addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})


window.onscroll = function() {myFunction()};

// Detects when the page scrolls down
function myFunction() {
    if (window.scrollY < 200) {
        console.log(window.scrollY)
        toTop.style.display = 'none'

    } else  {
        console.log(window.scrollY)
        toTop.style.display = 'block'
    }
};



