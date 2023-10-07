// const API_BASE_URL = 'https://be-balikpapan-10-production.up.railway.app';

// async function fetchLesson(){
//   try {
//     const response = await fetch(`${API_BASE_URL}/lessonslist`);
//     const data = await response.json();
//     const lessonList = document.getElementById('wrapper-class');
//     let cards = ``;
//     data.forEach((lesson) => {
//       cards+=`
//       <div class="class-card" data-aos="fade-up" data-aos-duration="700" data-aos-offset="-100" id="${lesson.id}>
//       <img src="${lesson.image}" alt="Class 1" class="class1">
//       <div class="class-info">
//         <p class="age">Age: ${lesson.age}</p>
//         <p class="level">Level: ${lesson.level}</p>
//       </div>
//       <h3>${lesson.title}</h3>
//       <div class="description">
//         <p class="desc-title">Description<button><i class="bi bi-chevron-down"></i></button></p>
//         <p class="desc">${lesson.description}</p>
//         <button class="addLesson"><i class="bi bi-plus-lg"></i></button>
//       </div>
//     </div>
//     `
//     })
//     container.innerHTML = cards;
//   }
//   catch (error) {
//     console.error(error);
//   }
// }

// fetchLesson();

// const baseUrl = 'http://localhost:3000/lessons'
// document.addEventListener('load', getLesson)
// async function getLesson(e){
//   window.location('/lessons')
//   e.preventDefault();
//   const res = await fetch(baseUrl,
//     {
//       method: 'GET'
//     })
//     console.log(res);
// }


const jsonFile = "./lesson.json";
fetch(jsonFile).then((response) => {
    return response.json();
}).then(data => {
    let container = document.getElementById('wrapper-class');
    let cards = ``;
    // for(let i=0; i<5; i++){}
    data.forEach((lesson) => {
        cards+=`
        <div class="class-card" data-aos="fade-up" data-aos-duration="700" data-aos-offset="-100" id="${lesson.id_lesson}">
        <img src="${lesson.image}" alt="Class 1" class="class1">
        <div class="class-info">
          <p class="age">Age: ${lesson.age}</p>
          <p class="level">Level: ${lesson.level}</p>
        </div>
        <h3>${lesson.lessonTitle}</h3>
        <div class="description">
          <p class="desc-title">Description<button><i class="bi bi-chevron-down"></i></button></p>
          <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas neque enim nesciunt nemo nam. Quis, illo nulla suscipit adipisci nesciunt maxime debitis totam iure aperiam! Nesciunt voluptas ad accusamus harum!</p>
          <button class="addLesson"><i class="bi bi-plus-lg"></i></button>
        </div>
      </div>
      `
    });
    container.innerHTML = cards;

    handleCard();
    // addLesson();
})

const handleCard = () => {
  let elementCards = document.querySelectorAll('.class-card:not(.addLesson)');
  let addBtn = document.querySelector('.addLesson');
  elementCards.forEach((card) => {
    card.addEventListener('click', (e) => {
      console.log(card.id);
      // location.href = "./lessonPage.html";
    });
    // addBtn.addEventListener('click', (e) => {
    //   e.stopPropagation();
    //   console.log('click');
    // })
  })
}

async function fetchLessonById(){
  let elementCards = document.querySelectorAll('.class-card:not(.addLesson)');
  let addBtn = document.querySelector('.addLesson');
  try { 
    elementCards.forEach((card) => {
      card.addEventListener('click', (e) => {
        const lessonId = card.id
        console.log(card.id);
        window.location.assign(`https://kampus-merdeka-software-engineering.github.io/FE-Balikpapan-10/lessonDetails/${lessonId}`)
        // const response = await fetch{`${API_BASE_URL}/lessonPage/${lessonId}`};
        // const lesson = await response.json();
        // location.href = "./lessonPage.html";
      });
    })
  }
  catch {

  }
}

// const addLesson = () => {
//   let addBtn = document.querySelectorAll('.addLesson');
//   addBtn.
//   addBtn.addEventListener('click', (e) => {
//     console.log('click');
//   })
// }

// const btn = document.getElementsByClassName('addLesson')[0];
// btn.addEventListener('click', createNewSubs);

// async function createNewSubs(){
//   try {

//   }
//   catch {

//   }
// }


// let btn = document.getElementsByClassName('addLesson')[0];

// btn.addEventListener('click', (e) => {
  
// })