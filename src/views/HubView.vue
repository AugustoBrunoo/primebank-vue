<!-- HubView seria um One-Way Data Flow (Fluxo de Dados Unidirecional) -->

<script setup>

import {ref, computed } from 'vue'

import CabecalhoLogado from '../components/hub/CabecalhoLogado.vue'
import ResumoFinanceiro from '../components/hub/ResumoFinanceiro.vue'
import GraficoResumo from '../components/hub/GraficoResumo.vue'
import FormularioTransacao from '../components/hub/FormularioTransacao.vue'
import ListaTransacoes from '../components/hub/ListaTransacoes.vue'

// Mini banco de dados (dados brutos) com transações já prontas

// !=s entre computed e ref = ref (trabalha cm dados brutos) e computed com calculo 
// manipulando dados brutos

const transactions = ref ([
    { id: 1, description: 'Salário Monitoria', value: 3500.00 },
    { id: 2, description: 'Aluguel', value: -1200.00 },
    { id: 3, description: 'Supermercado', value: -650.50 },
    { id: 4, description: 'Bolsa Estágio', value: 800.00 },
    { id: 5, description: 'Conta de Luz', value: -145.00 },
    { id: 6, description: 'Internet', value: -110.00 },
    { id: 7, description: 'Compra de Notebook (Exemplo de Saldo Negativo)', value: -2500.00 },
    { id: 8, description: 'Pix Recebido', value: 150.00 },     
])

// Monitoramento Automático (Reatividade)

// computed é um método retornável, deve sempre retorna algo

const processedTransactions = computed(() => {
    // o acumulador é zerado apenas uma vez por recálculo.

    let accumulator = 0

    return transactions.value.map(t => {
        // O loop (map) gira várias vezes e acumulador se lembra do valor da volta anterior
        accumulator += Number(t.value)
        return { ...t, balance: accumulator}
    })
})

const saldoFinal = computed(() => {           
    // A lista de transações processadas tem alguma coisa dentro dela? (length > 0)

    return processedTransactions.value.length > 0
    // SE SIM (?), vá na lista processada, pegue a última linha (length - 1) 
    // e olhe o valor da etiqueta "balance"

    ? processedTransactions.value[processedTransactions.value.length - 1].balance
    // se não zera o saldo.
    : 0
})

const addTransaction = (nova) => {

    transactions.value.push({
        id: Date.now(),
        ...nova
    });
    
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

                    <!-- Envia as transações para a lista e a lista pode invocaar o método de remover transações-->
                    <ListaTransacoes 
                        :transacoes="processedTransactions" 
                        @remover="removeTransaction"
                    />
                </div>
            </div>
        </main>
    </div>
</template>