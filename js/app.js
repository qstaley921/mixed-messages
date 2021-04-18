/**
 * THIS IS WHERE YOU'LL WRITE THE FUNCTIONALITY OF THE BUTTONS
 */

/******************************
 * NODE VARIABLES GO BELOW
 ******************************/

const rightArrows = document.querySelectorAll('.r-arrow'); 
const leftArrows = document.querySelectorAll('.l-arrow'); 
// selects all buttons within the #attitude id
const attBtns = document.querySelectorAll('#attitudes .btn-bag'); 
const msgBtns = document.querySelectorAll('#messages .btn-bag'); 
const intBtns = document.querySelectorAll('#intents .btn-bag'); 

// **************************** NODE VAR END
/******************************
 * ARROW EVENTS GO BELOW
 ******************************/

function scrollToEnd(btnTarget, distance) {
  const btnBoxNode = btnTarget.parentNode.parentNode; 
  console.log(btnBoxNode.scrollLeft);
  btnBoxNode.scrollLeft = distance; 
  console.log(btnBoxNode.scrollLeft);
}

rightArrows.forEach(btn => btn.addEventListener('click', () => {
  scrollToEnd(btn, 200);
}));

leftArrows.forEach(btn => btn.addEventListener('click', () => {
  scrollToEnd(btn, 0); 
}));

// **************************** ARROW EVENTS END
/******************************
 * BTN EVENTS GO BELOW
 ******************************/
const activeBtns = {
  attBtns: null,
  msgBtns: null,
  intBtns: null,
}; 

function addBtnEvent (btnList, key) {
  btnList.forEach(btn => btn.addEventListener('click', (event) => {
    const target = event.target;
    const sibling = target.previousSibling;

    handleBtnClick(target, btnList, key);
  })); 
}

// Helper Functions
function handleBtnClick (target, btnList, key) {
  console.log(target)
  activeBtns[key] = target;
  setBtnClass(btnList, key); 
}

function setBtnClass (btnList, key) {
  btnList.forEach(bag => () => {
    btn = bag.firstChild;
    console.log(btn);
    btn.className = 'btn';
  });
  activeBtns[key].classList.add('active'); 
}

addBtnEvent(attBtns, 'attBtns');

// **************************** ARROW EVENTS END