
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

function openCurry() {
    document.querySelector("#curry-pop").style.display = "block";
  }

  function closeCurry() {
    document.querySelector("#curry-pop").style.display = "none";
  }

  function openBurger() {
    document.querySelector("#burger-pop").style.display = "block";
  }

  function closeBurger() {
    document.querySelector("#burger-pop").style.display = "none";
  }

  function openHostel() {
    document.querySelector("#hostel-pop").style.display = "block";
  }

  function closeHostel() {
    document.querySelector("#hostel-pop").style.display = "none";
  }

  function openDisko() {
    document.querySelector("#disko-pop").style.display = "block";
  }

  function closeDisko() {
    document.querySelector("#disko-pop").style.display = "none";
  }

  function openKebab() {
    document.querySelector("#kebab-pop").style.display = "block";
  }

  function closeKebab() {
    document.querySelector("#kebab-pop").style.display = "none";
  }

  function openDome() {
    document.querySelector("#dome-pop").style.display = "block";
  }

  function closeDome() {
    document.querySelector("#dome-pop").style.display = "none";
  }

  function openThai() {
    document.querySelector("#thai-pop").style.display = "block";
  }

  function closeThai() {
    document.querySelector("#thai-pop").style.display = "none";
  }
  //ne bonyolítsd túl, csak másold majd ki egymás után többször

  //ha advancebb leszek akkor az icon nyitás és zárás egyben --> if icon.style.display == hiddennel