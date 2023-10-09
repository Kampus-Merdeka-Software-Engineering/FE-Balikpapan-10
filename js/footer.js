// const submit = document.getElementById('btnSubmit');

// submit.addEventListener('click', (e) => {
//     e.preventDefault();
//     sendMessage();
// });

// const API_BASE_URL = 'https://be-balikpapan-10-production.up.railway.app';

// async function sendMessage() {
//     let name = document.getElementById('name').value;
//     let email = document.getElementById('emailMssg').value;
//     let message = document.getElementById('message').value;
//     try {
//         const response = await fetch(`${API_BASE_URL}/message`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ name, email, message })
//         })
//         const data = await response.json();
//     }
//     catch (error) {
//         console.error(error);
//     }
//     finally {
//         alert("Pesan berhasil dikirimkan!")
//     }
// }

// async function addMessage() {
//     let name = document.getElementById('name').value;
//     let email = document.getElementById('emailMssg').value;
//     let message = document.getElementById('message').value;
//     console.log(name, email, message)
// }    