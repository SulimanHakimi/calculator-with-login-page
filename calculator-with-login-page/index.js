let m = document.getElementById("mm");
let jam = document.getElementById("جمع");
let mnfi = document.getElementById("منفی");
let zarb = document.getElementById("ضرب");
let taqsim = document.getElementById("تقسیم");
let tawan = document.getElementById("توان");
let fisad = document.getElementById("فیصد");
let namsawe = document.getElementById("نامساوی");
let allClear = document.getElementById("all-clear");
let b = document.getElementById("b");
let c = document.getElementById("c");



let userName = prompt("enter your user name");


while(userName!=="suliman"){
  
   userName = prompt("wrong user name pleas try aging");
  }
  if(userName=="suliman"){
    
  }
  let userPassword = prompt("enter your pasword");
  while(userPassword!=="hakimi"){
    userPassword = prompt("wrong password pleas try aging");
   }
  if(userPassword=="hakimi"){
    alert("welcome")
  }
  






if (
  jam.addEventListener("click", function () {
    if (b.value && c.value == "0") {
      mm.innerText = "pleas insert a number";
    } else {
      m.innerText = parseInt(b.value) + parseInt(c.value);
    }
  })
) {
} else if (
  mnfi.addEventListener("click", function () {
    if (b.value && c.value == "0") {
      mm.innerText = "pleas insert a number";
    } else {
      m.innerText = b.value - c.value;
    }
  })
) {
} else if (
  taqsim.addEventListener("click", function () {
    if (b.value && c.value == "0") {
      mm.innerText = "pleas insert a number";
    } else {
      m.innerText = b.value / c.value;
    }
  })
) {
} else if (
  zarb.addEventListener("click", function () {
    if (b.value && c.value == "0") {
      mm.innerText = "pleas insert a number";
    } else {
      m.innerText = b.value * c.value;
    }
  })
) {
} else if (
  tawan.addEventListener("click", function () {
    if (b.value && c.value == "0") {
      mm.innerText = "pleas insert a number";
    } else {
      m.innerText = b.value ** c.value;
    }
  })
) {
} else if (
  fisad.addEventListener("click", function () {
    if (b.value && c.value == "0") {
      mm.innerText = "pleas insert a number";
    } else {
      m.innerText = b.value % c.value;
    }
  })
) {
} else if (
  namsawe.addEventListener("click", function () {
    if (b.value && c.value == "0") {
      mm.innerText = "pleas insert a number";
    } else {
      m.innerText = b.value != c.value;
    }
  })
) {
}else if(allClear.addEventListener("click", function(){
  m.innerText = 0;
  b.value = "0";
  c.value = "0";
})){
  
}

