// getElementById()	ID менен табат
// querySelector()	Бир элемент табат
// querySelectorAll()	Бардык элементтерди табат
// textContent	Текстти өзгөртөт
// innerHTML	HTML мазмунун өзгөртөт
// style	CSS өзгөртөт
// classList.add()	Класс кошот
// classList.remove()	Класс өчүрөт
// classList.toggle()	Класс кошот/өчүрөт
// addEventListener()	Окуяны кармайт
// createElement()	Жаңы элемент түзөт
// append()	Элемент кошот
// remove()	Элемент өчүрөт
// getAttribute()	Атрибутту алат
// setAttribute()	Атрибутту өзгөртөт

// innerText, innerHTML, textContent


// const box = document.querySelector(".box");
// const info = prompt("Enter your name: ");
// function getText() {
//   return;
//   box.innerHTML = `
//     <h1 class="title">My Students</h1>
//     <p> Hello, JAVA</p>
//     <p> Hello ${info}</p>
// `;
//   box.style.backgroundColor = "black";
// }
// getText();



// const info=[ 
//     {
//         name: "Ainura",
//         age: 18,
//         id: 0,
//         imge:"https://img.magnific.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg"
//     },
//     {
//         name: "Akylay",
//         age: 20,
//         id: 1,
//         imge: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbP_y9nypLLYLpROxg_FR93bM-_daymaAnW8QpEcEXLA&s=10"
//     },
//     {
//         name: "Aizhan",
//         age: 19,
//         id: 2,
//         imge:"https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
//     }
// ]

// const box = document.querySelector(".box");
// box.innerHTML = info.map((item)=>{
//     return `
//     <div class="card"> 
//     <h1> ${item.name}</h1>
//     <img src="${item.imge}">
//     <p> Age: ${item.age}</p>
    
//     </div>
    
//     `

// })

