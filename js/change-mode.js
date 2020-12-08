// Função Light
btLight.addEventListener("click", lightMode);

// Função Light
btDark.addEventListener("click", darkMode);


function lightMode() {
    document.getElementById("bodyChangeMode").classList.remove("bg-black");
    document.getElementById("bodyChangeMode").classList.remove("text-white");
}

function darkMode() {
    document.getElementById("bodyChangeMode").classList.add("bg-black");
    document.getElementById("bodyChangeMode").classList.add("text-white");
}
