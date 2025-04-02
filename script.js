document.addEventListener('DOMContentLoaded', function () {
    let tamanhoAtualFonte = 1;

    const aumentarFonteBotao = document.getElementById('aumentar-fonte');

    aumentarFonteBotao.addEventListener('clik', function () {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })
})