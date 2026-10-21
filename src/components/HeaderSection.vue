<template>
    <header>
        <h1><router-link to ='/'>Sorveteria IFRN</router-link></h1>
        <nav>
            <ul>
                <li><router-link to ='/sabores'>Sabores</router-link></li>
                <li><router-link to="/contato">Contato</router-link></li>
                <li><button @click="trocar">Mudar Cor</button></li>
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