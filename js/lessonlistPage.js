const API_BASE_URL = 'https://be-balikpapan-10-production.up.railway.app';


  fetch(`${API_BASE_URL}/lessons`)
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById('wrapper-class');
    console.log(data);
    let lesson = data.data;
    let cards = ``;
  lesson.forEach((lesson) => {
      cards+=`
    
      <div class="class-card" data-aos="fade-up" data-aos-duration="700" data-aos-offset="-100" id="${lesson.id}" onclick="window.location.href='/FE-Balikpapan-10/lessonPage.html?id=${lesson.id}'">
      <img src="${lesson.image_lesson}" alt="Class 1" class="class1">
      <div class="class-info">
        <p class="age">Age: ${lesson.age}</p>
        <p class="level">Level: ${lesson.level}</p>
      </div>
      <h3>${lesson.title}</h3>
      <div class="description">
        <h3 class="card-title">${lesson.title}</h3>
        <p class="desc-title">Description<button><i class="bi bi-chevron-down"></i></button></p>
        <p class="desc">${lesson.desc}</p>
      </div>
    </div>
  
    `
    })
    container.innerHTML = cards;
  })
  .catch((err) => {console.log(err)})
  

const path = window.location.pathname;
console.log(path);

