
let header = document.getElementById('title')
let bear = document.getElementById("bear")

header.addEventListener('mouseover', hoverBear)
header.addEventListener('mouseout', unHoverBear)

function hoverBear(){
  bear.setAttribute('src', 'images/redBear.png' )
}
function unHoverBear(){
  bear.setAttribute('src', 'images/bear.png' )
}


function openFormBear() {
    document.querySelector(".form-popup").style.display = "block";
  }

  function closeFormBear() {
    document.querySelector(".form-popup").style.display = "none";
  }
  //ne bonyolítsd túl, csak másold majd ki egymás után többször

  //ha advancebb leszek akkor az icon nyitás és zárás egyben --> if icon.style.display == hiddennel