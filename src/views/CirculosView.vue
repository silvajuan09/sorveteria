<template>
    <div class="conteudo">
        <h2>Bem-vindo à nossa sorveteria! 🍦</h2>
      <p>
        Aqui, cada sabor é uma oportunidade de adoçar o seu dia!
      </p>
      <p>
        Nossa sorveteria oferece uma variedade de sabores
        para todos os gostos, desde os clássicos até as
        combinações mais especiais.
      </p>
      <p>
        Seja para se refrescar, compartilhar um momento com
        os amigos ou simplesmente aproveitar uma sobremesa,
        temos uma opção perfeita para você.
      </p>
       <p>
        Explore nossos sabores, escolha seu favorito e
        venha se refrescar com a gente!
      </p>
    </div>
    <router-link to="/sabores">Conheça nossos sabores!</router-link> <br> <br>
    <button  @click="Circulo">Clique para gerar!</button>
    <div id='circulo'></div>
</template>

<script setup>
    const cores = ["black", "gray", "blue", "purple", "yellow", "red", "pink", "rgb(193, 255, 249)"];

    function Circulo(){
      const indice = Math.floor(Math.random() * cores.length);
      const cor = cores[indice];
        
      document.getElementById('circulo').innerHTML +=
          `
          <div style="
              width:100px;
              height: 100px;
              border-radius: 50%;
              background-color: ${cor};
              display: inline-block;
              margin: 10px">
          </div>
          `;
    }

</script>