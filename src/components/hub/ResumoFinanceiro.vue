<script setup>

const props = defineProps(['saldoFinal'])

const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value || 0);
};

</script>

<template>
            <div class="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 class="text-2xl font-bold text-gray-900">Extrato e Lançamentos</h1>
                    <p class="text-gray-500 text-sm">Controle de despesas e receitas da sua conta corrente.</p>
                </div>
                
                <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-6">
                    <div>
                        <p class="text-xs text-gray-500 font-medium">Saldo Atual</p>
                        <p class="text-xl font-bold" :class="saldoFinal < 0 ? 'text-red-600' : 'text-prime-600'">
                            {{ formatCurrency(saldoFinal) }}
                        </p>
                    </div>
                </div>
            </div>
</template>    