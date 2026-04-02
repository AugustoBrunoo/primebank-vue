<script lang="js" setup>
import { ref, reactive } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()

// Importando os ícones necessários do Lucide
import {
    ArrowLeft,
    User,
    Lock,
    Eye,
    EyeOff,
    ArrowRight,
    Nfc,
    ShieldCheck,
    Loader2
} from 'lucide-vue-next'


// Reatividade para os dados do formulário
const formData = reactive({
    document: '',
    password: '',
    rememberMe: false
})

// Controles de estado da interface
const showPassword = ref(false)
const isLoading = ref(false)

// Função que substitui o antigo eventListener do submit
const handleLogin = async () => {
    isLoading.value = true

    // Simula o tempo de rede (2 segundos)
    await new Promise(resolve => setTimeout(resolve, 2000))

    isLoading.value = false

    // Redireciona usando o Vue Router (assumindo que seja /hub pelo commit do seu amigo)
    router.push('/hub')
}
</script>

<template>
    <div class="text-gray-800 antialiased min-h-screen flex bg-white">

        <div class="w-full lg:w-1/2 flex flex-col relative px-6 sm:px-12 md:px-24">

            <div class="absolute top-8 left-6 sm:left-12 md:left-24">
                <RouterLink to="/"
                    class="flex items-center text-gray-500 hover:text-prime-600 transition-colors text-sm font-medium">
                    <ArrowLeft class="w-4 h-4 mr-2" />
                    Voltar para o site
                </RouterLink>
            </div>

            <div class="flex-grow flex flex-col justify-center max-w-md w-full mx-auto py-20">

                <RouterLink to="/" class="flex items-center gap-2 mb-10 cursor-pointer w-fit">
                    <div
                        class="w-10 h-10 bg-prime-600 rounded-xl flex items-center justify-center shadow-lg shadow-prime-600/30">
                        <span class="text-white font-bold text-xl">P</span>
                    </div>
                    <span class="font-bold text-2xl text-gray-900 tracking-tight">PrimeBank</span>
                </RouterLink>

                <div class="mb-8">
                    <h1 class="text-3xl font-extrabold text-gray-900 mb-2">Acesse sua conta</h1>
                    <p class="text-gray-500">Bem-vindo de volta! Insira seus dados para continuar.</p>
                </div>

                <form @submit.prevent="handleLogin" class="space-y-6">

                    <div>
                        <label for="document" class="block text-sm font-medium text-gray-700 mb-1.5">CPF ou
                            E-mail</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                <User class="h-5 w-5 text-gray-400" />
                            </div>
                            <input v-model="formData.document" type="text" id="document"
                                class="block w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-prime-500 focus:border-transparent focus:bg-white transition-all duration-200"
                                placeholder="Digite seu CPF ou e-mail" required>
                        </div>
                    </div>

                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-700 mb-1.5">Senha de acesso 8
                            dígitos</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                <Lock class="h-5 w-5 text-gray-400" />
                            </div>
                            <input v-model="formData.password" :type="showPassword ? 'text' : 'password'" id="password"
                                class="block w-full pl-11 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-prime-500 focus:border-transparent focus:bg-white transition-all duration-200"
                                placeholder="••••••••" required>

                            <button type="button" @click="showPassword = !showPassword"
                                class="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-prime-600 transition-colors focus:outline-none">
                                <EyeOff v-if="showPassword" class="h-5 w-5" />
                                <Eye v-else class="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <input v-model="formData.rememberMe" id="remember-me" type="checkbox"
                                class="h-4 w-4 text-prime-600 focus:ring-prime-500 border-gray-300 rounded cursor-pointer transition-colors accent-prime-600">
                            <label for="remember-me" class="ml-2 block text-sm text-gray-600 cursor-pointer">
                                Lembrar meu acesso
                            </label>
                        </div>

                        <div class="text-sm">
                            <a href="#" class="font-medium text-prime-600 hover:text-prime-700 transition-colors">
                                Esqueci minha senha
                            </a>
                        </div>
                    </div>

                    <button type="submit" :disabled="isLoading" :class="[
                        'w-full flex justify-center items-center gap-2 bg-prime-600 text-white py-3.5 px-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg shadow-prime-600/30',
                        isLoading ? 'opacity-80 cursor-not-allowed' : 'hover:bg-prime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-prime-500'
                    ]">
                        <template v-if="isLoading">
                            <Loader2 class="w-5 h-5 animate-spin" />
                            <span>Acessando...</span>
                        </template>
                        <template v-else>
                            <span>Entrar na conta</span>
                            <ArrowRight class="w-5 h-5" />
                        </template>
                    </button>
                </form>

                <p class="mt-8 text-center text-sm text-gray-600">
                    Ainda não é cliente?
                    <a href="#" class="font-semibold text-prime-600 hover:text-prime-700 transition-colors">Abra sua
                        conta grátis</a>
                </p>

            </div>

            <div class="py-6 text-center text-xs text-gray-400">
                &copy; 2026 PrimeBank. Segurança em primeiro lugar.
            </div>
        </div>

        <div class="hidden lg:flex lg:w-1/2 bg-gray-50 relative overflow-hidden items-center justify-center">
            <div class="absolute inset-0 bg-gradient-to-br from-prime-900 via-prime-700 to-prime-500 opacity-95"></div>

            <div class="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div class="absolute -top-40 -right-40 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
                <div class="absolute bottom-10 -left-20 w-80 h-80 bg-prime-400 opacity-20 rounded-full blur-3xl"></div>
            </div>

            <div class="relative z-10 p-12 max-w-lg text-center flex flex-col items-center">

                <div
                    class="mb-12 w-80 h-48 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl p-6 text-white float-anim relative overflow-hidden">
                    <div
                        class="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]">
                    </div>

                    <div class="flex justify-between items-center mb-8 relative z-10">
                        <Nfc class="w-6 h-6 opacity-80" />
                        <span class="font-bold text-lg italic opacity-90">PrimeBank</span>
                    </div>
                    <div class="text-md tracking-widest font-mono mb-6 opacity-90 relative z-10 drop-shadow-md">
                        **** **** **** 3948
                    </div>
                    <div class="flex justify-between items-end text-sm relative z-10">
                        <div class="text-left">
                            <p class="opacity-70 text-xs">Titular</p>
                            <p class="font-medium tracking-wide">João Villas Boas</p>
                        </div>
                        <div class="flex -space-x-3">
                            <div class="w-8 h-8 rounded-full bg-red-500/80 mix-blend-multiply"></div>
                            <div class="w-8 h-8 rounded-full bg-yellow-500/80 mix-blend-multiply"></div>
                        </div>
                    </div>
                </div>

                <h2 class="text-3xl font-bold text-white mb-4">Seu banco no seu ritmo.</h2>
                <p class="text-prime-100 text-lg leading-relaxed">
                    Controle total do seu dinheiro, sem tarifas ocultas e com um cartão de crédito aprovado na hora. A
                    evolução
                    financeira ao seu alcance.
                </p>

                <div class="flex items-center justify-center gap-6 mt-12 opacity-80">
                    <div class="flex items-center text-white text-sm font-medium">
                        <ShieldCheck class="w-5 h-5 mr-2" /> Proteção de Dados
                    </div>
                    <div class="flex items-center text-white text-sm font-medium">
                        <Lock class="w-5 h-5 mr-2" /> Criptografia 256-bit
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
/* Animação suave para o cartão flutuante */
.float-anim {
    animation: float 6s ease-in-out infinite;
}

@keyframes float {
    0% {
        transform: translateY(0px) rotate(-5deg);
    }

    50% {
        transform: translateY(-15px) rotate(-2deg);
    }

    100% {
        transform: translateY(0px) rotate(-5deg);
    }
}
</style>