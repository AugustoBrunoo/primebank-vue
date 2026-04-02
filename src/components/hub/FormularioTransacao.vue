<script setup>
import { ref } from 'vue' // Faltava importar o ref
import { PlusCircle } from 'lucide-vue-next'

const emit = defineEmits(['adicionar'])

const form = ref({ description: '', value: '' })

const enviarDados = () => {
    if (!form.value.description || !form.value.value) return
    
    emit('adicionar', {
        description: form.value.description, 
        value: Number(form.value.value)
    })
    
    form.value.description = ''
    form.value.value = ''
}
</script>

<template>
    <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 class="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <PlusCircle :size="20" class="text-prime-600" />
            Nova Transação
        </h3>
        
        <form @submit.prevent="enviarDados" class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
                <input 
                    v-model="form.description"
                    type="text" 
                    placeholder="Ex: Aluguel"
                    class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-prime-500 focus:border-transparent outline-none transition-all"
                    required
                />
            </div>
            
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Valor (negativo para despesas)</label>
                <input 
                    v-model="form.value"
                    type="number" 
                    step="0.01"
                    placeholder="Ex: -1200.00"
                    class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-prime-500 focus:border-transparent outline-none transition-all"
                    required
                />
            </div>
            
            <button 
                type="submit"
                class="w-full bg-prime-600 text-white py-2.5 rounded-lg font-semibold hover:bg-prime-700 transition-colors shadow-sm"
            >
                Adicionar
            </button>
        </form>
    </div>
</template>