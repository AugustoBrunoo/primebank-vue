<script setup>
import { ref, computed } from 'vue'
import { Trash2, ChevronLeft, ChevronRight } from 'lucide-vue-next'


// Ele recebe a lista completa (com os saldos já calculados) do componente pai.
const props = defineProps(['transacoes'])

// Ele prepara para avisar o método remover caso o usuário clique na lixeira, 
// avisando o pai para deletar aquele item específico.

const emit = defineEmits(['remover'])

// Página atual da lista de transação separado em 5 itens
const currentPage = ref(1)
const itemsPerPage = 5

const totalPages = computed(() => {
    const total = props.transacoes ? props.transacoes.length : 0
    // faz o calculo de quantas páginas devem

    return Math.max(1, Math.ceil(total / itemsPerPage))
})

const paginatedTransactions = computed(() => {
    if (!props.transacoes || props.transacoes.length === 0) return []
    const reversed = [...props.transacoes].reverse()
    const start = (currentPage.value - 1) * itemsPerPage
    const end = start + itemsPerPage
    return reversed.slice(start, end)
})

// logica do formato da moeda

const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value || 0)
}

const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--
}

const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++
}
</script>

<template>
    <div class="lg:col-span-2">
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-gray-50 border-b border-gray-100 text-xs uppercase tracking-wider text-gray-500 font-semibold">
                            <th class="px-6 py-4">Descrição</th>
                            <th class="px-6 py-4 text-right">Valor</th>
                            <th class="px-6 py-4 text-right">Saldo</th>
                            <th class="px-6 py-4 text-center">Ações</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100">
                        <tr v-if="paginatedTransactions.length === 0">
                            <td colspan="4" class="px-6 py-8 text-center text-gray-500">
                                Nenhuma transação registrada.
                            </td>
                        </tr>
                        <tr v-for="t in paginatedTransactions" :key="t.id" class="hover:bg-gray-50 transition-colors">
                            <td class="px-6 py-4 text-sm font-medium text-gray-900">{{ t.description }}</td>
                            <td class="px-6 py-4 text-sm text-right font-semibold" :class="t.value >= 0 ? 'text-green-600' : 'text-red-600'">
                                {{ formatCurrency(t.value) }}
                            </td>
                            <td class="px-6 py-4 text-sm text-right font-medium">
                                <span class="px-2 py-1 rounded" :class="t.balance < 0 ? 'bg-red-600 text-yellow-300' : 'text-gray-900'">
                                    {{ formatCurrency(t.balance) }}
                                </span>
                            </td>
                            <td class="px-6 py-4 text-center">
                                <div class="flex items-center justify-center gap-2">
                                    <button @click="emit('remover', t.id)" class="p-1.5 rounded text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors">
                                        <Trash2 :size="18" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="border-t border-gray-100 bg-white px-6 py-4 flex items-center justify-between">
                <span class="text-sm text-gray-500">
                    Página {{ currentPage }} de {{ totalPages }}
                </span>
                <div class="flex gap-2">
                    <button @click="prevPage" :disabled="currentPage === 1" class="p-1 border rounded disabled:opacity-30 flex items-center justify-center">
                        <ChevronLeft :size="20" />
                    </button>
                    <button @click="nextPage" :disabled="currentPage >= totalPages" class="p-1 border rounded disabled:opacity-30 flex items-center justify-center">
                        <ChevronRight :size="20" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>