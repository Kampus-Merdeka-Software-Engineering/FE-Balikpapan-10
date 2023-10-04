// const API_BASE_URL = '';

// async function fetchLesson(){
//   try {
//     const response = await fetch(`${API_BASE_URL}/lessons`);
//     const data = await response.json();
//     const lessonList = document.getElementById('wrapper-class');
//     let cards = ``;
//     data.forEach((lesson) => {
//       cards+=`
//       <div class="class-card" data-aos="fade-up" data-aos-duration="700" data-aos-offset="-100">
//       <img src="${lesson.image}" alt="Class 1" class="class1">
//       <div class="class-info">
//         <p class="age">Age: 5-8</p>
//         <p class="level">Level: 3</p>
//       </div>
//       <h3>${lesson.lessonTitle}</h3>
//       <div class="description">
//         <p class="desc-time">Class Time: 08:00 am - 10:00 am</p>
//         <p class="desc-title">Description<button><i class="bi bi-chevron-down"></i></button></p>
//         <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas neque enim nesciunt nemo nam. Quis, illo nulla suscipit adipisci nesciunt maxime debitis totam iure aperiam! Nesciunt voluptas ad accusamus harum!</p>
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

const jsonFile = "./lesson.json";
fetch(jsonFile).then((response) => {
    return response.json();
}).then(data => {
    let container = document.getElementById('wrapper-class');
    let cards = ``;
    // for(let i=0; i<5; i++){}
    data.forEach((lesson) => {
        cards+=`
        <div class="class-card" data-aos="fade-up" data-aos-duration="700" data-aos-offset="-100">
        <img src="${lesson.image}" alt="Class 1" class="class1">
        <div class="class-info">
          <p class="age">Age: 5-8</p>
          <p class="level">Level: 3</p>
        </div>
        <h3>${lesson.lessonTitle}</h3>
        <div class="description">
          <p class="desc-time">Class Time: 08:00 am - 10:00 am</p>
          <p class="desc-title">Description<button><i class="bi bi-chevron-down"></i></button></p>
          <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas neque enim nesciunt nemo nam. Quis, illo nulla suscipit adipisci nesciunt maxime debitis totam iure aperiam! Nesciunt voluptas ad accusamus harum!</p>
          <button class="addLesson"><i class="bi bi-plus-lg"></i></button>
        </div>
      </div>
      `
    });
    container.innerHTML = cards;
})