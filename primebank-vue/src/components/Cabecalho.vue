<template>
    <!-- Navegação (Header) -->
    <nav class="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">

                <!-- Logo -->
                <div class="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                    <div class="w-8 h-8 bg-prime-600 rounded-lg flex items-center justify-center">
                        <span class="text-white font-bold text-lg">P</span>
                    </div>
                    <span class="font-bold text-xl text-gray-900 tracking-tight">PrimeBank</span>
                </div>

                <!-- Links Desktop -->
                <div class="hidden md:flex space-x-8 items-center">
                    <a href="#inicio"
                        class="text-gray-500 hover:text-prime-600 font-medium transition-colors">Início</a>
                    <a href="#vantagens"
                        class="text-gray-500 hover:text-prime-600 font-medium transition-colors">Vantagens</a>
                    <a href="#cartao"
                        class="text-gray-500 hover:text-prime-600 font-medium transition-colors">Entrar</a>

                    <button
                        class="bg-prime-600 text-white px-5 py-2 rounded-full font-medium hover:bg-prime-700 transition-colors shadow-sm">
                        Abrir Conta
                    </button>
                </div>

                <!-- Botão Menu Mobile -->
                <div class="md:hidden flex items-center">
                    <button @click="toggleMenu" id="mobile-menu-btn" class="text-gray-500 hover:text-prime-600 focus:outline-none">
                        <Menu v-if="!isMenuOpen" class="w-6 h-6" />
                        <X v-else class="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>

        <!-- Menu Mobile Dropdown (Escondido por padrão) -->
        <div v-show="isMenuOpen"
            class="md:hidden bg-white border-b border-gray-100 pb-4 px-4 shadow-lg absolute w-full">
            <a href="#inicio" @click="closeMenu"
                class="block py-3 text-gray-600 font-medium border-b border-gray-50">Início</a>
            <a href="#vantagens" @click="closeMenu"
                class="block py-3 text-gray-600 font-medium border-b border-gray-50">Vantagens</a>
            <a href="#cartao" @click="closeMenu"
                class="block py-3 text-gray-600 font-medium border-b border-gray-50">Cartão</a>
            <button @click="closeMenu"
                class="w-full mt-4 bg-prime-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-prime-700 transition-colors">
                Abrir Conta
            </button>
        </div>
    </nav>
</template>

<script lang="js" setup>
import { ref } from 'vue'

// Importando os ícones oficiais do Lucide para Vue
import { Menu, X } from 'lucide-vue-next'

// Criamos uma variável reativa que diz se o menu está aberto ou não
const isMenuOpen = ref(false)

// Função que inverte o estado (abre se estiver fechado, fecha se estiver aberto)
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

// Função para garantir que o menu feche quando clicarmos em um link
const closeMenu = () => {
    isMenuOpen.value = false
}
</script>