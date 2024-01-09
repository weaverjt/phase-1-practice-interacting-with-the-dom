
// buttons---grab elements
const minus = document.getElementById("minus");
const plus  = document.getElementById("plus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");
const counter = document.getElementById("counter");
const submit = document.getElementById("submit");
const comment = document.getElementById("comment-input");
const list = document.getElementById("list");
const likes = document.getElementById("likes");

//functionality goals --- 
//complete


// |||Basic Counter set up|| 
let nIntervId;

//callback func for counter interval func
function counterGo () {
       counter.innerText ++;
       
}
function counterInterval() {
  // check if an interval has already been set up
  if (!nIntervId) {
    nIntervId = setInterval(counterGo, 1000);
  }
}

// |||Event Listeners for Plus, Minus, Pause 
pause.addEventListener("click", stopInterval);
plus.addEventListener("click", addCount);
minus.addEventListener("click", subCount);
heart.addEventListener("click", likeNumber);
submit.addEventListener("click", listComment, false);
// |||Func for event listeners

function addCount () {
    counter.innerText ++;
}
function subCount () {
    counter.innerText --;
}
let count = 0;
const likeNumArray = []
//create a function that 1. checks the array for a match 2. pushes it into the array if it's not 3. updates the count? to be an obj?
function likeNumber () { 
  let match = likeNumArray.indexOf(counter.innerText)
  if (match == -1) {  
    count = 0;
    count ++;
    likeNumArray.push(counter.innerText);
    const li = document.createElement('li');
    likes.appendChild(li);
    li.textContent = counter.innerText + " has been liked " + count + " times"
  }
  else {
  count++
  var ul = document.getElementById("likes");
  var mango = ul.children[ul.children.length - 1];
  mango.innerText = counter.innerText + " has been liked " + count + " times"
  }
    
}

function listComment (event) {
    let warn = comment.value;
    document.getElementById("list").innerHTML += warn<br>   
      event.preventDefault();
    }

//stop-start func
function stopInterval() {
    if (nIntervId) {
  clearInterval(nIntervId);
  // release our intervalID from the variable
  nIntervId = null;
    pause.innerText = "resume";
    plus.disabled = true;
    minus.disabled = true;
    heart.disabled = true;
    submit.disabled = true;
    }
    else {
        nIntervId = setInterval(counterGo, 1000)
        pause.innerText = 'pause';
        pause.innerText = "resume";
    plus.disabled = false;
    minus.disabled = false;
    heart.disabled = false;
    submit.disabled = false;
    }
}


//need thing to run function on page load for counterGo
document.addEventListener("DOMContentLoaded", counterInterval);

