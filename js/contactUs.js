const form = document.querySelector('.formMsg');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addMessage();
});

const API_BASE_URL = 'https://be-balikpapan-10-production.up.railway.app';

async function addMessage() {
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#emailMssg').value;
    let message = document.querySelector('#message').value;

    try {
        const response = await fetch(`${API_BASE_URL}/message`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        })
        const data = await response.json()
    }

    catch(error) {
        console.error(error);
    }

    finally {
        alert('Message sent');
        window.location.assign('./');
    }
}