<template>
  <div class="full-content fade-in">
    <div class="content-padding">
      <el-button @click="$router.back()" type="info" plain size="small" icon="Back" class="btn-back">⬅ Kembali ke Portofolio</el-button>
      
      <div v-if="repo" class="detail-card">
        <div class="header-section">
          <h2 class="title-border">Project: {{ repo.name }}</h2>
          <el-tag effect="dark" class="lang-badge">{{ repo.language || 'Code' }}</el-tag>
        </div>

        <div class="repo-info">
          <div class="info-grid-detail">
            <div class="info-row"><span>⭐ Stargazers</span><strong>{{ repo.stargazers_count }} Stars</strong></div>
            <div class="info-row"><span>🍴 Forks</span><strong>{{ repo.forks_count }} Forks</strong></div>
            <div class="info-row"><span>🕒 Terakhir Update</span><strong>{{ new Date(repo.updated_at).toLocaleDateString() }}</strong></div>
          </div>
          
          <el-divider class="divider-text">Deskripsi Project</el-divider>
          <p class="desc-text">{{ repo.description || 'Tidak ada deskripsi rincian untuk repository ini.' }}</p>
          
          <div style="margin-top: 35px; text-align: center;">
            <el-link :href="repo.html_url" target="_blank" type="primary" class="github-link-btn">
              BUKA DI GITHUB REPOSITORY ↗
            </el-link>
          </div>
        </div>
      </div>
      <div v-else class="loading-state">
        <el-skeleton :rows="5" animated />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps(['namaRepo'])
const repo = ref(null)

onMounted(async () => {
  try {
    const res = await fetch(`https://api.github.com/repos/raihan-05-sys/${props.namaRepo}`)
    repo.value = await res.json()
  } catch (err) {
    console.error("Detail gagal dimuat", err)
  }
})
</script>

<style scoped>
.full-content { width: 100%; height: 100%; overflow-y: auto; text-align: left; background: #f8fafc; }
.content-padding { padding: 40px; }
.btn-back { margin-bottom: 20px; }

.detail-card { 
  background: white; 
  padding: 40px; 
  border-radius: 25px; 
  border: 1px solid #e2e8f0; 
  box-shadow: 0 15px 35px rgba(0,0,0,0.05); 
}
.header-section { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; }
.title-border { font-size: 24px; color: #1e293b; border-left: 6px solid #626aef; padding-left: 15px; margin: 0; }
.lang-badge { font-weight: bold; background-color: #626aef; }

.info-grid-detail { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 30px; }
.info-row { display: flex; flex-direction: column; background: #f1f5f9; padding: 15px; border-radius: 12px; }
.info-row span { color: #94a3b8; font-size: 11px; font-weight: 700; text-transform: uppercase; margin-bottom: 5px; }
.info-row strong { font-size: 16px; color: #1e293b; }

.divider-text { color: #94a3b8; font-size: 13px; font-weight: 600; }
.desc-text { line-height: 1.6; color: #475569; font-size: 15px; background: #fafafa; padding: 20px; border-radius: 10px; }

/* CSS TOMBOL GITHUB KOTAK BIRU */
.github-link-btn {
  background-color: #626aef;
  color: white !important;
  padding: 12px 30px;
  border-radius: 10px;
  font-weight: 700;
  text-decoration: none;
  font-size: 14px;
  transition: 0.3s;
  box-shadow: 0 5px 15px rgba(98, 106, 239, 0.3);
}
.github-link-btn:hover { background-color: #4f57c9; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(98, 106, 239, 0.4); }

.loading-state { padding: 100px; background: white; border-radius: 20px; border: 1px solid #e2e8f0; }
</style>