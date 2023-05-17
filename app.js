let answers01 = document.querySelector('.content01');
let btn01 = document.querySelector('.BTN01');
let answers02 = document.querySelector('.content02');
let btn02 = document.querySelector('.BTN02');
let answers03 = document.querySelector('.content03');
let btn03 = document.querySelector('.BTN03');

// answers.forEach(function(button01){


//     console.log(btn)
//     console.log(answers)

//     btn.addEventListener("click",()=>{
//         answers.forEach(function(item){
//             if(item != btn){

//                 item.classList.remove("active")
//             }
//         });
//         button01.classList.add("active")
//     })

// });
btn01.addEventListener('click',()=>{
    answers01.classList.toggle('active')
})
btn02.addEventListener('click',()=>{
    answers02.classList.toggle('active')
})
btn03.addEventListener('click',()=>{
    answers03.classList.toggle('active')
})
