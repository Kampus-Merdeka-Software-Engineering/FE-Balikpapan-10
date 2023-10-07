function getAllData() {
  fetch('https://be-balikpapan-10-production.up.railway.app/lessonslist')
      .then(response => response.json())
      .then(data => {
      let coloumns = data.data;
      let wrapper = document.getElementById("wrapper-class");
let listClass = "";
console.log(listClass);

for(let i=0; i<1; i++){
coloumns.forEach((coloumn) => {
  listClass += `
  <div class="content">
				<img src="${coloumn.image}" alt="eduten" class="images"/>
        <button class=button1>Age:${coloumn.age}</button>
        <button class=button2>Level:${coloumn.level}</button>
				<h4>${coloumn.title}</h4>
        <button class="delete-button" onclick="del()">Unsubscribe</button>
			</div>
       `
});
}
wrapper.innerHTML = listClass;
      });
}
window.onload = getAllData;
