const jsonFile = "./lesson.json";
fetch(jsonFile).then((response) => {
    return response.json();
}).then(data => {
    data.forEach((lesson) => {
        // const
    });
})