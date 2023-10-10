const API_BASE_URL = 'https://be-balikpapan-10-production.up.railway.app';

async function fetchLesson(){
    let params = window.location.href ;
    params = params.split('/')
    params = params[params.length - 1] 
    let id = params.replace('lessonPage.html?id=','')
    try {
        const response = await fetch(`${API_BASE_URL}/lessonDetails/${id}`); 
        const data = await response.json();
        
        const releaseDate = document.getElementsByClassName('release-date')[0];
        const create = document.getElementById('create');
        const like = document.getElementById('like');
        const comment = document.getElementById('comment');
        const title = document.getElementById('lesson-title');
        const desc = document.getElementById('desc-text');
        
        const img = document.getElementById("image")
        const age = document.getElementsByClassName('age')[0];
        const level = document.getElementsByClassName('level')[0];

        comment.innerText = data.comments;
        create.innerText = data.creator;
        like.innerText = data.likes;
        title.innerText = data.title;
        desc.innerText = data.desc;
        releaseDate.innerText = data.release_date;
        age.innerText = data.age;
        level.innerText = data.level;
        img.src = data.image_lesson_page;
    }
    catch (error) {
    }
}

fetchLesson();

let iconLike = document.getElementById('iconLike');

document.getElementById('btnLike').addEventListener('click', (e) => {
    e.preventDefault();
    iconLike.style.color = 'rgb(117, 148, 214)';
})

const main = document.getElementsByClassName('main-content')[0];

main.addEventListener('scroll', (e) => {
    AOS.init();
})
