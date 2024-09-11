// Basic Scroll to Element Functionality
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const section = document.querySelector(e.target.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});


// const billValue = document.querySelector("#billValue");
// const billInput = document.querySelector("#billOffset");
// billValue.textContent = billInput.value;
// billInput.addEventListener("oninput", (e) => {
//   billValue.textContent = e.target.value;
// //   billvalue.innerHTML = ${e.target.value};
// }); 