function getAllData() {
    fetch('https://be-balikpapan-10-production.up.railway.app/team')
        .then(response => response.json())
        .then(data => {
        let teams = data.data;
        let wrapper = document.getElementById("wrapper-team");
  let TeamList = "";
  console.log(TeamList);
  
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
                <img src="${team.image_linkedin}" width="28px" height="28px" alt="linkedid">
                    </div>
            <div class="github">
                <img src="${team.image_github}" width="28px" height="28px" alt="github">
                </div>
                    </div>
         `
  });
  }
  wrapper.innerHTML = TeamList;
        });
  }
  window.onload = getAllData;
  