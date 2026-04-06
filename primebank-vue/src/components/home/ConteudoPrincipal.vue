<script setup>
import { ref } from 'vue'

import { Smartphone, TrendingUp, CreditCardIcon, Nfc } from 'lucide-vue-next'

import qrcode from '@/assets/qrcode-primebank.png' 

const isMenuOpen = ref(false)

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
    <main class="flex-grow">

        <!-- Hero Section -->
        <section id="inicio" class="relative bg-white overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <!-- Texto -->
                    <div class="text-center lg:text-left">
                        <div
                            class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-prime-50 text-prime-700 font-medium text-sm mb-6">
                            <span class="relative flex h-2 w-2">
                                <span
                                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-prime-500 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-2 w-2 bg-prime-600"></span>
                            </span>
                            Novo: Cartão sem anuidade
                        </div>
                        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                            Seu dinheiro, <br>
                            <span class="text-prime-600">simples assim.</span>
                        </h1>
                        <p class="mt-4 text-lg text-gray-500 mb-8 max-w-lg mx-auto lg:mx-0">
                            Uma conta digital completa, cartão de crédito sem taxas escondidas e um aplicativo feito
                            para facilitar a sua vida financeira.
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button
                                class="bg-prime-600 text-white px-8 py-3.5 rounded-full font-semibold text-lg hover:bg-prime-700 transition-colors shadow-lg shadow-prime-600/30">
                                Quero ser Prime
                            </button>
                            <button
                                class="bg-white text-gray-700 border border-gray-300 px-8 py-3.5 rounded-full font-semibold text-lg hover:bg-gray-50 transition-colors">
                                Conhecer mais
                            </button>
                        </div>
                    </div>

                    <!-- Imagem/Ilustração Simples -->
                    <div class="relative mx-auto w-full max-w-md lg:max-w-none flex justify-center">
                        <!-- Círculo de Fundo -->
                        <div
                            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 bg-prime-100 rounded-full blur-3xl -z-10">
                        </div>

                        <!-- Um mock de cartão de crédito feito com CSS básico -->
                        <div
                            class="w-90 h-50 rounded-2xl bg-gradient-to-tr from-prime-900 to-prime-500 shadow-2xl p-6 text-white transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                            <div class="flex justify-between items-center mb-8">
                                <Nfc class="w-6 h-6 opacity-80" />
                                <span class="font-bold text-lg italic opacity-80">PrimeBank</span>
                            </div>
                            <div class="text-xl tracking-widest font-mono mb-6 opacity-90">
                                5512 2026 2222 3948
                            </div>
                            <div class="flex justify-between items-end text-sm">
                                <div>
                                    <p class="opacity-70 text-xs">Titular</p>
                                    <p class="font-medium">Carlos Henrique</p>
                                    <!-- Mudei o nome para dar um toque de projeto acadêmico -->
                                </div>
                                <svg viewBox="0 0 36 24" class="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="12" fill="#EA001B" />
                                    <circle cx="24" cy="12" r="12" fill="#FFA200" fill-opacity="0.8" />
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- Vantagens Section (Cards Simples) -->
        <section id="vantagens" class="bg-gray-50 py-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-prime-600 font-semibold tracking-wide uppercase text-sm mb-2">Por que escolher o
                        PrimeBank?</h2>
                    <h3 class="text-3xl font-bold text-gray-900 sm:text-4xl">Tudo que você precisa em um só lugar
                    </h3>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="bg-white rounded-2xl p-8 border border-gray-100 feature-card">
                        <div
                            class="w-12 h-12 bg-prime-100 text-prime-600 rounded-xl flex items-center justify-center mb-6">
                            <Smartphone class="w-6 h-6" />
                        </div>
                        <h4 class="text-xl font-bold text-gray-900 mb-3">Conta 100% Digital</h4>
                        <p class="text-gray-500 leading-relaxed">Resolva tudo pelo aplicativo. Sem filas, sem
                            papelada e
                            sem tarifas de manutenção mensais.</p>
                    </div>

                    <div class="bg-white rounded-2xl p-8 border border-gray-100 feature-card">
                        <div
                            class="w-12 h-12 bg-prime-100 text-prime-600 rounded-xl flex items-center justify-center mb-6">
                            <CreditCardIcon class="w-6 h-6" />
                        </div>
                        <h4 class="text-xl font-bold text-gray-900 mb-3">Cartão sem Anuidade</h4>
                        <p class="text-gray-500 leading-relaxed">Cartão de crédito internacional com limite aprovado
                            na
                            hora e zero taxa de anuidade para sempre.</p>
                    </div>

                    <div class="bg-white rounded-2xl p-8 border border-gray-100 feature-card">
                        <div
                            class="w-12 h-12 bg-prime-100 text-prime-600 rounded-xl flex items-center justify-center mb-6">
                            <TrendingUp class="w-6 h-6" />
                        </div>
                        <h4 class="text-xl font-bold text-gray-900 mb-3">Rendimento Automático</h4>
                        <p class="text-gray-500 leading-relaxed">Seu dinheiro não fica parado. O saldo da sua conta
                            rende 100% do CDI todos os dias úteis.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Banner Chamada Final -->
        <section class="bg-white py-16">
            <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    class="bg-prime-600 rounded-3xl p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-10">

                    <div class="text-center md:text-left flex-1">
                        <h2 class="text-3xl font-bold mb-4">Pronto para assumir o controle?</h2>
                        <p class="text-prime-100 mb-8 max-w-xl mx-auto md:mx-0 text-lg">
                            Junte-se a milhares de clientes e experimente a liberdade de um banco feito para você.
                            <span class="block mt-2 font-medium text-white">Chame seus amigos e família para fazer parte
                                da Primebank também!</span>
                        </p>
                        <button
                            class="bg-white text-prime-700 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors shadow-md">
                            Baixar o Aplicativo
                        </button>
                    </div>

                    <div class="bg-white rounded-2xl p-5 flex flex-col items-center shadow-lg shrink-0">
                        <p class="text-prime-700 text-sm font-bold mb-3">Escaneie para Baixar</p>

                        <div
                            class="w-32 h-32 bg-gray-100 flex items-center justify-center rounded-lg border-none border-gray-200">
                            <!-- logo site -->

                            <img :src="qrcode" alt="QR code do site do primebank">
                        </div>
                    </div>

                </div>
            </div>
        </section>

    </main>
</template>