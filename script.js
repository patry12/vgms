

const menu = document.getElementById("menu");
const ul = document.getElementById("ul");
const rf2 = document.getElementById("conteiner_rf2");
ul.style.left = "-450px";
rf2.style.top = "35px";

menu.addEventListener('click', () => {
    if(ul.style.left == "-450px",
      rf2.style.top == "35px")
      {
     ul.style.left = "450px",
    rf2.style.top = "45px"}
   else{ul.style.left ="-450px",
    rf2.style.top = "35px"
   } })

  