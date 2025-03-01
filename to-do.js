let t = JSON.parse(localStorage.getItem("t")) || [];
let ud = '';
let uf = '';

//renderHTML();

function x(event) {
  if(event.key === 'Enter') {
  oneTime();
  } 
}

let p = document.querySelector('.js-selector');

function present() {
  localStorage.setItem('t' ,JSON.stringify(t));
}

present();



function respond() {
  let li = document.querySelector('.js-deleteall-buttons');
  if (t.length > 0) {
    li.innerHTML = `<button class="css-deleteall-button" onclick="deleteAll()">DELETE All</button>`;
  } else {
    li.innerHTML = ''; // Hide the button when no tasks exist
  }
}

function deleteAll() {
  let p = document.querySelector('.js-selector');
  t =[];
  document.querySelector('.js-selector').innerHTML = '';
  localStorage.removeItem('t')
  present();
  respond();
}


function renderHTML() {
  let p = document.querySelector('.js-selector');
  let a = '';
for (let i = 0; i < t.length; i++) {
 const d = t[i];
 const { n } = d
 const { du } = d
 const { ti } = d
 const f = `
     <ul><li class="list-class"><div class="css-text-input">${n}</div></li></ul>
     <div class="css-time-input">${ti}</div>
     <div class="css-date-input">${du}</div> 
     <button class="css-delete-button" onclick="
     t.splice(${i}, 1);
     renderHTML();
     respond();
     present();
     ">Delete</button>
     <button class="css-update-button" onclick="
       ud = 'clicked';
       present();
      renderHTML();
      respond();
       c.value = t[${i}].n;
       dd.value =  t[${i}].du;
       tt.value =  t[${i}].ti;
        
        t.splice(${i}, 1);
     ">Update</button>  
     `

 a += f;

}; 
  p.innerHTML = `${a}`;
}


let e = document.querySelector('.js-selector-error');

function fError() {
  
  const w =  `<p>No items set ! Set items.</p>`
    e.innerHTML = `${w}`;
    renderHTML();
  } 

  
  const c = document.querySelector('.js-input-text');
  const dd = document.querySelector('.js-date-input');
  const tt = document.querySelector('.js-time-input');
  
  let tl = tt.value;
  let dc = dd.value;
  let r = c.value;


function oneTime() {
  tl = tt.value;
  dc = dd.value;
  r = c.value;

  console.log(r);
if(r !== '' && ud === '') {
    t.push({
      n: r,
      du: dc,
      ti: tl
    });
c.value = '';
tt.value = '';
dd.value = '';
e.innerHTML = '';
} else if(r !== "" && ud === 'clicked') {
  t.push({
    n: r,
    du: dc,
    ti: tl
  });

  c.value = '';
  tt.value = '';
  dd.value = '';
  e.innerHTML = '';

  ud = '';

} else {fError();}

present();

renderHTML();
respond();
}

renderHTML();
respond();

