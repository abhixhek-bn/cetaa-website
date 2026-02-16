/* Smooth scroll reveal */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
});

/* Animated counters */
const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{
  const update = ()=>{
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const inc = target / 200;

    if(count < target){
      counter.innerText = Math.ceil(count + inc);
      setTimeout(update,10);
    } else {
      counter.innerText = target;
    }
  };
  update();
});

/* Progress bar animation */
const progress = document.getElementById("progressBar");

if(progress){
  window.addEventListener("scroll", ()=>{
    let pos = progress.getBoundingClientRect().top;
    if(pos < window.innerHeight){
      progress.style.width = "35%";
    }
  });
}

/* Donation modal */
const donateBtn = document.getElementById("donateBtn");

if(donateBtn){
donateBtn.addEventListener("click",()=>{
  document.getElementById("thankModal").style.display="flex";
});
}

function closeModal(){
document.getElementById("thankModal").style.display="none";
}
