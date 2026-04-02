<script setup>
import Cabecalho from '../components/Cabecalho.vue';
import ConteudoPrincipal from '../components/ConteudoPrincipal.vue';
import Rodape from '../components/Rodape.vue';


</script>

<template>
    <div class="flex flex-col min-h-screen">

        <!-- Navegação (Header) -->
        <Cabecalho />

        <!-- Conteúdo Principal -->
        <ConteudoPrincipal />

        <!-- Footer -->
        <Rodape />
    </div>

</template>

<style scoped>
body {
    font-family: 'Inter', sans-serif;
    background-color: #f9fafb;
    /* gray-50 */
}

/* Uma animação suave bem simples para os cards */
.feature-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px -5px rgba(139, 92, 246, 0.15);
    /* Sombra roxa leve */
}
</style>
