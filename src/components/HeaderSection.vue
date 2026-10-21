<template>
    <header>
        <h1><router-link to ='/'>Sorveteria IFRN</router-link></h1>
        <nav>
            <ul>
                <li><router-link to ='/sabores'>Sabores</router-link></li>
                <li><router-link to="/contato">Contato</router-link></li>
<<<<<<< HEAD
                <li><button @click="trocar">Mudar Cor</button></li>
=======
                <li><router-link to="/noticias">Notícias</router-link></li>
>>>>>>> e721c7a651692f7b035350b86dce5740a4b2e11e
            </ul>
        </nav>
    </header>
</template>


    
<script>
    const cores = ["black", "gray", "blue", "purple", "yellow", "red", "pink"]
    const trocar = document.querySelector("#trocar");
        trocar.addEventListener("click", function() {
            const indice = Math.floor(Math.random() * cores.length)
            document.body.style.backgroundColor = cores[indice];
        })
</script>