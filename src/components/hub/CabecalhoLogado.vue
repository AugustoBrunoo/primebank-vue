<script setup>
import { LogOut } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

// Caso queira que o nome "Aluno FATEC" venha do HubView no futuro:
defineProps({
    usuario: {
        type: String,
        default: 'Aluno FATEC'
    },
    iniciais: {
        type: String,
        default: 'AF'
    }
})
</script>

<template>
    <nav class="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex items-center gap-2">
                    <div class="w-8 h-8 bg-prime-600 rounded-lg flex items-center justify-center">
                        <span class="text-white font-bold text-lg">P</span>
                    </div>
                    <span class="font-bold text-xl text-gray-900 tracking-tight">PrimeBank</span>
                </div>

                <div class="flex items-center gap-4">
                    <div class="hidden sm:flex flex-col text-right">
                        <span class="text-sm font-semibold text-gray-900">Olá, {{ usuario }}</span>
                        <span class="text-xs text-gray-500">Conta Corrente</span>
                    </div>
                    
                    <div class="w-10 h-10 rounded-full bg-prime-100 text-prime-700 flex items-center justify-center font-bold border border-prime-200">
                        {{ iniciais }}
                    </div>

                    <RouterLink to="/" class="flex items-center gap-2 text-gray-500 hover:text-red-600 transition-colors">
                        <LogOut :size="20" />
                        <span class="font-medium">Sair</span>
                    </RouterLink>
                </div>
            </div>
        </div>
    </nav>
</template>