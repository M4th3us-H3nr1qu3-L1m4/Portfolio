window.addEventListener('scroll', function() {
    // Obter a posição de rolagem
    const scrollPosition = window.scrollY;
    
    // Calcular a largura com base na posição de rolagem
    // Você pode ajustar o fator para controlar a velocidade do aumento da largura
    const maxWidth = window.innerWidth / 2;
    const width = Math.min(scrollPosition * 0.84, maxWidth);

    
    // Definir a largura do elemento de fundo
    document.querySelector('.background').style.width = width + 'px';
});

function vermais() {
    var vm=document.getElementById("vm");
    var vermais=document.getElementById("vermais");
    var btnvermais=document.getElementById("btnvermais");

    if(vm.style.display === "none") {
        vm.style.display = "inline";
        vermais.style.display = "none";
        btnvermais.innerHTML = "Ver Mais";
    }else{
        vm.style.display = "none";
        vermais.style.display = "inline";
        btnvermais.innerHTML = "Ver Menos";
    }
}
