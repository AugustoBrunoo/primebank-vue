<script setup>

import {ref, computed } from 'vue'

import CabecalhoLogado from '../components/hub/CabecalhoLogado.vue'
import ResumoFinanceiro from '../components/hub/ResumoFinanceiro.vue'
import GraficoResumo from '../components/hub/GraficoResumo.vue'
import FormularioTransacao from '../components/hub/FormularioTransacao.vue'
import ListaTransacoes from '../components/hub/ListaTransacoes.vue'

const transactions = ref ([
    { id: 1, description: 'Salário FATEC', value: 3500.00 },
    { id: 2, description: 'Aluguel', value: -1200.00 },
    { id: 3, description: 'Supermercado', value: -650.50 },
    { id: 4, description: 'Bolsa Estágio', value: 800.00 },
    { id: 5, description: 'Conta de Luz', value: -145.00 },
    { id: 6, description: 'Internet', value: -110.00 },
    { id: 7, description: 'Compra de Notebook (Exemplo de Saldo Negativo)', value: -2500.00 },
    { id: 8, description: 'Pix Recebido', value: 150.00 },     
])

const processedTransactions = computed(() => {
    let accumulator = 0
    return transactions.value.map(t => {
        accumulator += Number(t.value)
        return { ...t, balance: accumulator}
    })
})

const saldoFinal = computed(() => {               
    return processedTransactions.value.length > 0
    ? processedTransactions.value[processedTransactions.value.length - 1].balance
    : 0
})

const addTransaction = (nova) => {
    transactions.value.push({
        id: Date.now(),
        ...nova
    });
    currentPage.value = totalPages.value;
};

const removeTransaction = (id) => {
    transactions.value = transactions.value.filter(t => t.id !== id)
}

</script>

<template>
    <div class="min-h-screen bg-gray-50 flex flex-col">
        <CabecalhoLogado />
        
        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
            <ResumoFinanceiro :saldoFinal="saldoFinal"/>
          
            <GraficoResumo :dados="processedTransactions"/>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                <div class="lg:col-span-1">
                    <FormularioTransacao @adicionar="addTransaction" />
                </div>
                <div class="lg:col-span-2">
                    <ListaTransacoes 
                        :transacoes="processedTransactions" 
                        @remover="removeTransaction"
                    />
                </div>
            </div>
        </main>
    </div>
</template>