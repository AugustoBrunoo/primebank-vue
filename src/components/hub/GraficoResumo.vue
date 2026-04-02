<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue' // Adicionado onUnmounted
import Chart from 'chart.js/auto'
import { LineChart } from 'lucide-vue-next' 

const props = defineProps(['dados'])
const chartCanvas = ref(null)
let chartInstance = null

const updateChart = () => {
    if (!chartCanvas.value) return
    const ctx = chartCanvas.value.getContext('2d')
    if (!props.dados || props.dados.length === 0) return

    const labels = props.dados.map(t => t.description)
    const values = props.dados.map(t => t.balance)

    if (chartInstance) {
        chartInstance.data.labels = labels
        chartInstance.data.datasets[0].data = values
        chartInstance.update()
    } else {
        chartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels,
                datasets: [{
                    label: 'Saldo Evolutivo',
                    data: values,
                    borderColor: '#7c3aed',
                    tension: 0.4,
                    fill: true,
                    backgroundColor: 'rgba(124, 58, 237, 0.1)'
                }]
            },
            options: { 
                responsive: true, 
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false } // Opcional: esconde a legenda para ficar mais limpo
                }
            }
        })
    }
}

onMounted(updateChart)

onUnmounted(() => {
    if (chartInstance) {
        chartInstance.destroy()
    }
})

watch(() => props.dados, updateChart, { deep: true })
</script>

<template>
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
        <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-2 text-prime-600">
                <LineChart :size="20" /> 
                <h2 class="text-lg font-bold text-gray-900">Evolução de Receitas e Despesas</h2>
            </div>
        </div>
        
        <div class="relative h-64 w-full">
            <canvas ref="chartCanvas"></canvas>
        </div>
    </div>
</template>