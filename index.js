renderHeaderScroll()
renderFakeContent()



function renderHeaderScroll() {
window.onscroll = function() {staticHeader()};

const header = document.querySelector('.js-bottom-section')
const sticky = header.offsetTop;

function staticHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky-bottom-section")
  } else {
    header.classList.remove("sticky-bottom-section")
  }
}
}

function renderFakeContent() {

let test = '';

 for(let i = 0; i < 30; i++) {
  test += `
  <div class="test-div"></div>
  `;
 }

 document.querySelector('.js-test-container').innerHTML = test;
}