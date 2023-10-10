function getAllData() {
    fetch('https://be-balikpapan-10-production.up.railway.app/team')
        .then(response => response.json())
        .then(data => {
        let teams = data.data;
        let wrapper = document.getElementById("wrapper-team");
  let TeamList = "";
  
  for(let i=0; i<1; i++){
  teams.forEach((team) => {
    TeamList += `
    <div class="TeamList">
    <div class="FotoBox">
        <div class="FotoTeam">
            <img src="${team.image_people}" width="216px" height="216px" alt="foto">
        </div>
            </div>
            <span class="NamaTeam">${team.name}</span>
            <span class="TeamJob">${team.role}</span>
            <div class="linkedid">
                <a href="${team.profil_linkedin}"><img src="${team.image_linkedin}" width="28px" height="28px" alt="linkedid"></a>
                    </div>
            <div class="github">
                <a href="${team.profil_github}"><img src="${team.image_github}" width="28px" height="28px" alt="github"></a>
                </div>
                    </div>
         `
  });
  }
  wrapper.innerHTML = TeamList;
        });
  }
  window.onload = getAllData;
  