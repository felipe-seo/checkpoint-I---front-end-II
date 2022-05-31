let i = 0
function test(){    
    //setar as variáveis com o conteúdo da página HTML
    nome = document.getElementById("Nome").value;
    equipe = document.getElementById("Equipe").value;
    url = document.getElementById("URL").value;

    card = document.getElementById("card");
    cardTitle = document.getElementById("card_title");
    image = document.getElementById("image");
    cardTeam = document.getElementById("card_team");
    
    //aplicar mudanças
    card_title.innerHTML = nome
    cardTeam.innerHTML = equipe
    image.src = url;

    if( i===0 ){
        card.classList.toggle("hidden");
        image.classList.toggle("hidden");
        
    }

    i++;
}