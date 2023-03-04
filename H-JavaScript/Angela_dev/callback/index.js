let btn = document.querySelector(".btn")

// function toggle(){
//     btn.classList.toggle('toggle')

// }

btn.addEventListener('click', ()=>{
    btn.classList.toggle('toggle')
})

// !If you call a function like this toggle() then this is not callback it called inn==mmediatily
// Js runs code from top to bottom, sometimes we want functio n be called after some condition meet  this is sync programming

