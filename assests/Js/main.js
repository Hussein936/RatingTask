const subBtn = document.getElementById("subBtn");
const firstContainer = document.getElementById("main-container");
const secondContainer = document.querySelector(".second-container");
const ratingBtn = document.querySelectorAll(".btn");
let ratingScore = document.querySelector(".dNum");
let score = 0;

console.log(ratingScore);
subBtn.addEventListener("click",e => {
    e.preventDefault();
    firstContainer.style.display = "none";
    secondContainer.style.display= "block";
    ratingScore.textContent = score;
});

ratingBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        ratingBtn.forEach(e => e.classList.remove("active")); 
        btn.classList.add("active"); 
        score = btn.textContent;
    });
});

