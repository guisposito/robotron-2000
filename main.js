const robotron = document.querySelector("#robotron");

const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");



somar.addEventListener("click", () =>{
    braco.value = parseInt(braco.value) +1;
});

subtrair.addEventListener("click", () =>{
    braco.value = braco.value < 1 ? '0' : braco.value = parseInt(braco.value) -1; 
})