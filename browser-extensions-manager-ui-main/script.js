let check = 0;

let jsonData;

fetch ("./data.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(obj) {
        jsonData = obj
        obj.forEach((e) => createDiv(e))
    });



const main = document.getElementById('main')
const body = document.body
const lightSwitch = document.getElementById('light-mode')
const myToggle = document.getElementsByClassName('toggle')
const h1 = document.querySelector('h1')
const svgPath = document.querySelectorAll('path')
const darkModeImg = './assets/images/icon-sun.svg'
const lightModeImg = './assets/images/icon-moon.svg'

const btnActive = document.getElementById('btnActive')
const btninActive = document.getElementById('btnInactive')
const btnAll = document.getElementById('btnAll')

// Populate Site Function


function createDiv(e) {

    main.innerHTML += `<section class="container dark">
      <section class="icon-container">
        <img src=${e.logo} alt="logo">
        <div class="text-div">
          <h2>
            ${e.name}
          </h2>
          <p>${e.description}</p>
        </div>
      </section>

      <section class="button-wrap">
        <button class="dark btn">Remove</button>
        <div class="toggle-container">
        <input type="checkbox" id="${check}" class="checkBoxes" ${e.isActive? 'checked = "true"': ''}>
        <label for="${check}" class="toggle tog-dark"></label>
        </div>
      </section>
    </section>`
    
    check ++;
}




// make light and dark mode work

lightSwitch.addEventListener('click', modeSwitch);
// switch the image
function modeSwitch() {
  if(lightSwitch.classList.contains('darkModeImg')){
    toLight();
  }
  else if(lightSwitch.classList.contains('lightModeImg')){
    toDark();
  }
}

// change classes to light mode or dark mode

function toLight () {
  const darkArr = document.querySelectorAll('.dark')
  // change image
  lightSwitch.classList.remove('darkModeImg')
  lightSwitch.classList.add('lightModeImg')
  // change body color
  body.classList.remove('dark-body');
  body.classList.add('light-body');

  // change .dark
  darkArr.forEach((e) => {
    e.classList.remove('dark')
    e.classList.add('light')
  })

  // change text 
  h1.classList.remove('light-letter');
  h1.classList.add('dark-letter');

  // change toggle

  for(i=0; i<myToggle.length; i++) {
    myToggle[i].classList.remove('tog-dark');
    myToggle[i].classList.add('tog-light')
}
// SVG FILL
  for(i=0; i<svgPath.length; i++){
    if(svgPath[i].classList.contains('dark-svg')){
      svgPath[i].classList.remove('dark-svg');
      svgPath[i].classList.add('light-svg');
    }
  }

}

function toDark () {
  const lightArr = document.querySelectorAll('.light')
  // change image
  lightSwitch.classList.remove('lightModeImg')
  lightSwitch.classList.add('darkModeImg')
  // change body color
  body.classList.remove('light-body');
  body.classList.add('dark-body');

  // change Text Color
  h1.classList.remove('dark-letter');
  h1.classList.add('light-letter');

  // change .light
  lightArr.forEach((e) => {
    e.classList.remove('light');
    e.classList.add('dark');
  })

  // change Toggle
  for(i=0; i<myToggle.length; i++) {
    myToggle[i].classList.remove('tog-light');
    myToggle[i].classList.add('tog-dark');
}
// SVG FILL
  for(i=0; i<svgPath.length; i++){
    if(svgPath[i].classList.contains('light-svg')){
      svgPath[i].classList.remove('light-svg');
      svgPath[i].classList.add('dark-svg');
    }
  }

}

// Make active button work

let inputList = document.getElementsByTagName('input')

btnActive.addEventListener('click',activeButton)

function activeButton() {
  console.log(inputList)
  
  console.log('it works')
}