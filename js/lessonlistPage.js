const API_BASE_URL = 'https://be-balikpapan-10-production.up.railway.app';

async function fetchLesson(){
  try {
    const response = await fetch(`${API_BASE_URL}/lessonslist`);
    const data = await response.json();
    let coloumns = data.data
    console.log(coloumns);
    const container = document.getElementById('wrapper-class');
    let cards = ``;
    coloumns.forEach((lesson) => {
      cards+=`
      <div class="class-card" data-aos="fade-up" data-aos-duration="700" data-aos-offset="-100" id="${lesson.id}">
      <img src="${lesson.image}" alt="Class 1" class="class1">
      <div class="class-info">
        <p class="age">Age: ${lesson.age}</p>
        <p class="level">Level: ${lesson.level}</p>
      </div>
      <h3>${lesson.title}</h3>
      <div class="description">
        <p class="desc-title">Description<button><i class="bi bi-chevron-down"></i></button></p>
        <p class="desc">${lesson.description}</p>
        <button class="addLesson"><i class="bi bi-plus-lg"></i></button>
      </div>
    </div>
    `
    })
    container.innerHTML = cards;
  }
  catch (error) {
    console.error(error);
  }
}

fetchLesson();