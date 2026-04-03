<template>
  <div class="full-content fade-in">
    <div class="mega-card-inner">
      
      <div class="sidebar-internal">
        <div class="profile-header">
          <el-avatar :size="160" src="/foto-profil.jpeg" class="profile-img" style="border: 4px solid #626aef; box-shadow: 0 10px 30px rgba(0,0,0,0.1);" />
          <h1 class="name-text">{{ profile.nama }}</h1>
          <el-tag effect="dark" round class="tag-major">{{ profile.jurusan }}</el-tag>
          <div class="nim-badge">NIM: {{ profile.nim }}</div>
        </div>

        <el-divider>Kontak</el-divider>
        <div class="contact-list">
          <p>📧 {{ profile.email }}</p>
          <p>📞 {{ profile.hp }}</p>
          <p class="addr">📍 Ujungbatu Timur, Rokan Hulu, Riau</p>
        </div>

        <el-divider>Hobi</el-divider>
        <div class="hobby-tags">
          <el-tag v-for="h in ['Voli', 'Futsal', 'Bulu Tangkis']" :key="h" effect="plain" round class="h-tag">{{ h }}</el-tag>
        </div>
      </div>

      <div class="content-area-internal">
        <h2 class="title-border">Detail Informasi Pribadi</h2>
        <div class="info-grid-modern">
          <div class="info-card-modern" v-for="(val, label) in infoDetails" :key="label">
            <div class="info-icon">🔹</div>
            <div class="info-text">
              <span>{{ label }}</span>
              <strong>{{ val }}</strong>
            </div>
          </div>
        </div>

        <h2 class="title-border mt-35">Riwayat Pendidikan</h2>
        <el-timeline class="compact-timeline">
          <el-timeline-item v-for="edu in pendidikan" :key="edu.title" :timestamp="edu.level" placement="top" color="#626aef" size="large">
            {{ edu.title }}
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const profile = reactive({
  nama: 'NURSETO RAIHAN PRASETYO',
  nim: '12450112377',
  gender: 'Laki-laki',
  ttl: 'Rambah Utama, 09 Juli 2005',
  agama: 'Islam',
  hp: '082284773045',
  email: 'raihan1212@gmail.com',
  jurusan: 'S1 Teknik Informatika'
})
const infoDetails = {
  'Tempat, Tanggal Lahir': profile.ttl,
  'Jenis Kelamin': profile.gender,
  'Agama': profile.agama,
  'Status': 'Mahasiswa Aktif'
}
const pendidikan = [
  { level: 'SD', title: 'SDN 006 Ujungbatu' },
  { level: 'SMP', title: 'SMPN 1 Ujungbatu' },
  { level: 'SMA', title: 'SMA N 1 Ujungbatu' },
  { level: 'Kuliah', title: 'UIN SUSKA RIAU' }
]
</script>

<style scoped>
.full-content { width: 100%; height: auto; }
.mega-card-inner { display: flex; width: 100%; min-height: 750px; }

.sidebar-internal { width: 350px; min-width: 350px; background: #f8fafc; padding: 40px 20px; border-right: 1px solid #e2e8f0; display: flex; flex-direction: column; align-items: center; text-align: center; }
.name-text { font-size: 20px; font-weight: 900; color: #0f172a; margin: 20px 0 8px; line-height: 1.2; }
.nim-badge { font-weight: 800; color: #64748b; font-size: 14px; margin-top: 5px; }
.contact-list { text-align: left; width: 100%; font-size: 13px; color: #475569; }
.hobby-tags { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }

.content-area-internal { flex: 1; padding: 40px 50px; text-align: left; background: white; }
.title-border { font-size: 20px; color: #1e293b; border-left: 6px solid #626aef; padding-left: 15px; margin-bottom: 25px; }
.info-grid-modern { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
.info-card-modern { background: white; border: 1px solid #e2e8f0; padding: 15px; border-radius: 12px; display: flex; align-items: center; gap: 12px; }
.info-icon { font-size: 14px; color: #626aef; }
.info-text { display: flex; flex-direction: column; gap: 2px; }
.info-text span { font-size: 9px; color: #94a3b8; font-weight: 700; text-transform: uppercase; white-space: nowrap; }
.info-text strong { font-size: 13px; color: #1e293b; line-height: 1.2; }
.mt-35 { margin-top: 35px; }

@media (max-width: 1000px) {
  .mega-card-inner { flex-direction: column; }
  .sidebar-internal { width: 100%; border-right: none; border-bottom: 1px solid #e2e8f0; }
  .info-grid-modern { grid-template-columns: 1fr; }
}

.fade-in { animation: fadeIn 0.4s ease-out; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
</style>