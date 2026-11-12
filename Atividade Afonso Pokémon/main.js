const formulario = document.getElementById("formPoke")


formulario.addEventListener("submit", async function(evento){
    evento.preventDefault();//evitar que a página recarregue

    const id = document.getElementById("idPoke").value

    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

    const pokemon = await resposta.json()

    document.getElementById("nomePokemon").textContent = pokemon.name;

    document.getElementById("imgPoke").src = pokemon.sprites.front_default;

    document.getElementById("basePoke").textContent = pokemon.base_experience;

})