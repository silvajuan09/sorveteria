<template>
    <header>
        <h1><router-link to ='/'>Sorveteria IFRN</router-link></h1>
        <nav>
            <ul>
                <li><router-link to ='/sabores'>Sabores</router-link></li>
                <li><router-link to="/contato">Contato</router-link></li>
                <li><router-link to="/noticias">Notícias</router-link></li>
                <li><router-link to="/circulo">Círculos</router-link></li>
                <li><button @click="trocar">Mudar Cor</button></li>
            </ul>
        </nav>
    </header>
</template>


    
<script setup>
    const cores = ["black", "gray", "blue", "purple", "yellow", "red", "pink", "rgb(193, 255, 249)"]
    const trocar = () => {
            const indice = Math.floor(Math.random() * cores.length)
            document.body.style.backgroundColor = cores[indice];
        };
</script>