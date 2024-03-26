function scrollToContact() {
    var contatoSection = document.getElementById("contato");
    window.scrollTo({
        top: contatoSection.offsetTop,
        behavior: "smooth"
    });
}

document.getElementById("link-projetos").addEventListener("click", function() {
    var projetosSection = document.getElementById("projetos");
    window.scrollTo({
        top: projetosSection.offsetTop,
        behavior: "smooth"
    });
});

document.getElementById("link-sobre").addEventListener("click", function() {
    var projetosSection = document.getElementById("sobre");
    window.scrollTo({
        top: projetosSection.offsetTop,
        behavior: "smooth"
    });
});

document.getElementById("link-especialidades").addEventListener("click", function() {
    var projetosSection = document.getElementById("especialidades");
    window.scrollTo({
        top: projetosSection.offsetTop,
        behavior: "smooth"
    });
});