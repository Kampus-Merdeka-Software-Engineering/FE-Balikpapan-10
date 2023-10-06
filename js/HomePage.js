let coloumns = [
  {
    title : "Imagination Classes 1",
    button1 : "Age: 5-7",
    button2 : "Level: 1-5",
    img : "./img/Colouring.jpg"
  },
  {
    title : "Imagination Classes 1",
    button1 : "Age: 5-7",
    button2 : "Level: 1-5",
    img : "./img/Creativity.jpg"
  },
  {
    title : "Imagination Classes 1",
    button1 : "Age: 5-7",
    button2 : "Level: 1-5",
    img : "./img/Calistung.jpg"
  },
  {
    title : "Imagination Classes 1",
    button1 : "Age: 5-7",
    button2 : "Level: 1-5",
    img : "./img/Math.jpg"
  },
  {
    title : "Imagination Classes 1",
    button1 : "Age: 5-7",
    button2 : "Level: 1-5",
    img : "./img/Reading.jpg"
  },
  {
    title : "Imagination Classes 1",
    button1 : "Age: 5-7",
    button2 : "Level: 1-5",
    img : "./img/Writing.jpg"
  },
]

let wrapper = document.getElementById("wrapper-class");
let listClass = "";
console.log(listClass);

for(let i=0; i<1; i++){
coloumns.forEach((coloumn) => {
  listClass += `
  <div class="content">
				<img src="${coloumn.img}" alt="eduten" class="images"/>
        <button class=button1>${coloumn.button1}</button>
        <button class=button2>${coloumn.button2}</button>
				<h4>${coloumn.title}</h4>
        <button class="delete-button" onclick="del()">Unsubscribe</button>
			</div>
       `
});
}
console.log(listClass);

wrapper.innerHTML = listClass;
 function del(coloumn) {
   document.getElementById("wapper-class");
   element.remove(coloumn)
 }
