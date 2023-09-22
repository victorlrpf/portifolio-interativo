document.addEventListener('DOMContentLoaded', function() {
    var menuVisible = false;
    var menu = document.getElementById("menu-selecao");
    var hamburgerIcon = document.getElementById("hamburguer-icon");

    hamburgerIcon.addEventListener("click", function () {
        console.log("Cliqeu no ione");
        if (menuVisible) {
            menu.style.right = "-250px"; // Esconde o menu à esquerda
        } else {
            menu.style.right = "0"; // Mostra o menu
        }
        menuVisible = !menuVisible;
    });
});