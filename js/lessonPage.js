// alert('hi');
let iconLike = document.getElementById('iconLike');

document.getElementById('btnLike').addEventListener('click', (e) => {
    e.preventDefault();
    iconLike.style.color = 'blue';
})

const jsonFile = "./lesson.json";

fetch(jsonFile).then((response) => {
    return response.json();
}).then(data => {
    // const desc = document.getElementsByClassName('lesson-desc')[0];
    // console.log(data)
    // data = JSON.parse(data);
    data.forEach((lesson) => {
        const create = document.getElementById('create');
        const like = document.getElementById('like');
        const comment = document.getElementById('comment');
        const title = document.getElementById('lesson-title');
        const desc = document.getElementById('desc-text');
        comment.innerText = lesson.comments;
        create.innerText = lesson.creator;
        like.innerText = lesson.likes;
        title.innerText = lesson.lessonTitle;
        desc.innerText = lesson.description;
        // console.log(lesson.creator);
    });
})