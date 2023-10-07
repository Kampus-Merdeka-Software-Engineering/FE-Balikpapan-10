// const API_BASE_URL = ''
const submit = document.getElementById('btnSubmit');

// alert('hii');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log('clicked');
    addMessage();
});

async function addMessage() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('emailMssg').value;
    let message = document.getElementById('message').value;
    // console.log(name, email, message)

    // try {
    //     const response = await fetch(`${API_BASE_URL}/message`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify({ name, email, message })
    //     });
    //     const data = await response.json
    // }
    
    // catch (error) {
    //     console.error('Error sending message:', error)
    // } 
}