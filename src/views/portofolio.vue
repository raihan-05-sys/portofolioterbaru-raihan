<template>
  <div class="full-content fade-in">
    <div class="content-padding">
      
      <h2 class="title-border">💰 Real-Time Crypto Market (CoinGecko)</h2>
      <div class="crypto-container">
        <div class="crypto-box" v-loading="!crypto" element-loading-text="Fetching Price...">
          <div class="coin" v-if="crypto && crypto.bitcoin">
            <span class="label">Bitcoin (BTC) Live Price</span>
            <span class="price">USD ${{ crypto.bitcoin.usd.toLocaleString() }}</span>
          </div>
        </div>

        <div class="chart-box">
          <p class="chart-label">MARKET TREND (24H)</p>
          <div style="height: 80px;">
            <Line :data="chartData" :options="chartOptions" />
          </div>
        </div>
      </div>

      <h2 class="title-border mt-35">🚀 My Github Project</h2>
      <div class="project-grid" v-loading="loading" element-loading-text="Syncing Github...">
        <div v-for="repo in repos" :key="repo.id" class="p-item">
          <div class="repo-header">
            <h4>{{ repo.name }}</h4>
            <el-tag size="small" type="success" effect="dark">Public</el-tag>
          </div>
          <p class="repo-desc">{{ repo.description || 'Project Informatika dikembangkan dengan Vue.js Framework.' }}</p>
          <div class="repo-meta">
            <span>⭐ {{ repo.stargazers_count }} stars</span>
            <el-tag size="small" effect="plain" class="lang-tag">{{ repo.language || 'Vue' }}</el-tag>
          </div>
          <div class="btn-space">
            <router-link :to="'/detail/' + repo.name">
              <el-button type="primary" size="small" round>Lihat Rincian</el-button>
            </router-link>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Line } from 'vue-chartjs'
import { 
  Chart as ChartJS, Title, Tooltip, Legend, LineElement, 
  CategoryScale, LinearScale, PointElement 
} from 'chart.js'

// Registrasi komponen Chart.js
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)

const repos = ref([])
const crypto = ref(null)
const loading = ref(true)

// Data Grafik Tren (Warna ungu #626aef agar senada)
const chartData = {
  labels: ['12am', '4am', '8am', '12pm', '4pm', '8pm'],
  datasets: [{
    label: 'Price Trend',
    backgroundColor: '#626aef',
    borderColor: '#626aef',
    data: [64200, 65500, 64800, 66200, 65900, 66552],
    tension: 0.4,
    pointRadius: 2
  }]
}

const chartOptions = { 
  responsive: true, 
  maintainAspectRatio: false, 
  plugins: { legend: { display: false } },
  scales: { x: { display: false }, y: { display: false } }
}

onMounted(async () => {
  try {
    const [resRepo, resCoin] = await Promise.all([
      fetch('https://api.github.com/users/raihan-05-sys/repos'),
      fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
    ])
    repos.value = await resRepo.json()
    crypto.value = await resCoin.json()
  } catch (err) {
    console.error("Gagal ambil data", err)
  } finally {
    loading.value = false // Matikan animasi loading
  }
})
</script>

<style scoped>
.full-content { width: 100%; height: auto; overflow-y: visible; text-align: left; }
.content-padding { padding: 40px 50px 40px; }
.title-border { font-size: 20px; color: #1e293b; border-left: 6px solid #626aef; padding-left: 15px; margin-bottom: 25px; }

.crypto-container { display: grid; grid-template-columns: 1fr 1.5fr; gap: 20px; margin-bottom: 20px; }
.crypto-box { background: #f8fafc; padding: 25px; border-radius: 15px; border-left: 6px solid #f59e0b; display: flex; align-items: center; }
.chart-box { background: #ffffff; padding: 15px; border-radius: 15px; border: 1px solid #e2e8f0; }
.chart-label { font-size: 10px; color: #94a3b8; font-weight: bold; margin-bottom: 8px; }
.coin .price { font-size: 26px; font-weight: bold; color: #b45309; display: block; margin-top: 5px; }

.project-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
.p-item { background: white; padding: 25px; border-radius: 20px; border: 1px solid #e2e8f0; transition: 0.3s; }
.p-item:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); border-color: #626aef; }

.repo-header h4 { font-size: 15px; margin: 0; color: #0f172a; text-transform: uppercase; }
.repo-desc { font-size: 13px; color: #64748b; line-height: 1.5; margin-bottom: 20px; min-height: 40px; }
.lang-tag { font-weight: bold; color: #626aef; }
.mt-35 { margin-top: 35px; }
</style>