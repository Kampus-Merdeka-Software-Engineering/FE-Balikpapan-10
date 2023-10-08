// alert('hi');

const API_BASE_URL = 'https://be-balikpapan-10-production.up.railway.app';

async function fetchLesson(){
    const path = window.location.pathname;
    console.log(path);
    const split = path.split('/');
    console.log(split);
    const id = split.pop();
    console.log(id);
    try {
        const response = await fetch(`${API_BASE_URL}/lessonDetails/${id}`); 
        const data = await response.json();
        let coloumns = data.data;
       const releaseDate = document.getElementsByClassName('release-date')[0];
        const create = document.getElementById('create');
        const like = document.getElementById('like');
        const comment = document.getElementById('comment');
        const title = document.getElementById('lesson-title');
        const desc = document.getElementById('desc-text');
        const lessonTag = document.getElementsByClassName('lesson-tag')[0];
        const age = document.getElementsByClassName('age')[0];
        const level = document.getElementsByClassName('level')[0];
        coloumns.forEach((lesson) => {
            comment.innerText = lesson.comments;
        create.innerText = lesson.creator;
        like.innerText = lesson.likes;
        title.innerText = lesson.lessonTitle;
        desc.innerText = lesson.description;
        releaseDate.innerText = lesson.releaseDate;
        age.innerText = lesson.age;
        level.innerText = lesson.level;
        })
    }
    catch (error) {
        console.error(error);
    }
}

fetchLesson();

let iconLike = document.getElementById('iconLike');

document.getElementById('btnLike').addEventListener('click', (e) => {
    e.preventDefault();
    iconLike.style.color = 'rgb(117, 148, 214)';
})


const jsonFile = "./lesson.json";

fetch(jsonFile).then((response) => {
    return response.json();
}).then(data => {
    // const desc = document.getElementsByClassName('lesson-desc')[0];
    console.log(data)
    // data = JSON.parse(data);
    data.forEach((lesson) => {
        const releaseDate = document.getElementsByClassName('release-date')[0];
        const create = document.getElementById('create');
        const like = document.getElementById('like');
        const comment = document.getElementById('comment');
        const title = document.getElementById('lesson-title');
        const desc = document.getElementById('desc-text');
        // const lessonTag = document.getElementsByClassName('lesson-tag')[0];
        const age = document.getElementsByClassName('age')[0];
        const level = document.getElementsByClassName('level')[0];
        comment.innerText = lesson.comments;
        create.innerText = lesson.creator;
        like.innerText = lesson.likes;
        title.innerText = lesson.lessonTitle;
        desc.innerText = lesson.description;
        releaseDate.innerText = lesson.releaseDate;
        age.innerText = lesson.age;
        level.innerText = lesson.level;
    });
})

const main = document.getElementsByClassName('main-content')[0];

main.addEventListener('scroll', (e) => {
    AOS.init();
})

// window.addEventListener('load', function() { AOS.init(); });
// window.addEventListener('load', AOS.refresh);