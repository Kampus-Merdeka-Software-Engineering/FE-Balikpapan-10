const API_BASE_URL = 'https://be-balikpapan-10-production.up.railway.app'
const submit = document.getElementById('btnSubmit');

async function sendUser() {
    let name = document.getElementsByClassName('name')[0].value;
    let email = document.getElementsByClassName('email')[0].value;
    let password = document.getElementsByClassName('password')[0].value;
  
    console.log(name, email, password)
  
    try {
      const response = await fetch(`${API_BASE_URL}/signUp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
      })
      const data = await response.json();
    }
    catch (error) {
      console.error(error);
    }
    finally {
      alert("Selamat Datang di Eduten!")
    }
}