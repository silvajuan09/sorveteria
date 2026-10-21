<template>
    <div>
        <ul>
            <li v-for="item in noticias" :key="item.id">
                {{ item.titulo }} - {{ item.texto }}
            </li>
        </ul>
    </div>
</template>

<script setup>

import { ref } from 'vue'

const noticias = ref([
  { id: 1, titulo: 'Dia do Sorvete', texto: 'Veja onde tomar sorvete de graça em Natal/RN' },
  { id: 2, titulo: 'Bis no Mercado de Sorvetes', texto: ' A Mondelēz Brasil e a Froneri lançaram no Brasil os primeiros sorvetes com a marca Bis, disponíveis nos formatos picolé (BIScolé) e petisco (BIS Mini Bites)' },
  { id: 3, titulo: 'Sorvetes Proteicos e Funcionais', texto: 'A Sorvetes Rochinha lançou a linha Nutre+, voltada para o mercado de produtos proteicos e funcionais.' },
  { id: 4, titulo: 'Expansão da Frosty', texto: 'A rede nordestina Frosty atingiu 145 unidades distribuídas em sete estados e planeja fechar 2026 com até 180 lojas, mirando expansão em Alagoas, Sergipe e Bahia.' }
])
</script>

<script>
export default {
    name: 'NoticiasView'
}
</script>

<style scoped>
ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 2rem;
}
li{
    width: 15rem;
    margin: 1rem;
    padding: 1rem;
    border: 1px solid white;
    background-color: white;
    border-radius: 1rem;
}
</style>




