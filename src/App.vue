<template>
  <div class="app-viewport">
    <div class="blob"></div>
    <div class="blob2"></div>

    <div class="main-layout">
      <div class="glass-nav">
        <router-link to="/" class="nav-link">👤 BIODATA</router-link>
        <router-link to="/portofolio" class="nav-link">🚀 PORTOFOLIO</router-link>
      </div>

      <div class="mega-card">
        <router-view></router-view>
        
        <div class="simple-footer">
          <p>© 2026 <strong>Nurseto Raihan Prasetyo</strong> - Informatics Engineering</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Reset Global */
body, html { margin: 0; padding: 0; font-family: 'Poppins', sans-serif; overflow: hidden; height: 100vh; width: 100vw; }

/* Latar Gelap Total */
.app-viewport {
  height: 100vh;
  width: 100vw;
  background-color: #0b0f19;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Hiasan Blobs */
.blob, .blob2 { position: absolute; border-radius: 50%; filter: blur(100px); opacity: 0.15; z-index: 1; }
.blob { width: 400px; height: 400px; background-color: #626aef; top: -100px; right: -100px; }
.blob2 { width: 350px; height: 350px; background-color: #ec4899; bottom: -80px; left: -80px; }

/* Layout Mewah */
.main-layout { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 2; }

/* Navigasi Melayang */
.glass-nav {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  padding: 12px 30px;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
}
.nav-link { text-decoration: none; color: rgba(255, 255, 255, 0.7); font-size: 13px; font-weight: 700; padding: 8px 20px; border-radius: 30px; transition: 0.3s; }
.nav-link:hover { background: rgba(255, 255, 255, 0.05); color: white; }
.router-link-active { background-color: #626aef; color: white; box-shadow: 0 4px 15px rgba(98, 106, 239, 0.4); }

/* Kotak Mega Card (Latar Putih) */
.mega-card {
  width: 1300px;
  height: 720px;
  background: #ffffff;
  border-radius: 30px;
  box-shadow: 0 25px 50px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
}

/* Footer di App.vue */
.simple-footer {
  margin-top: auto;
  width: 100%;
  background: rgba(248, 250, 252, 0.9);
  border-top: 1px solid #e2e8f0;
  padding: 15px 0;
  text-align: center;
}
.simple-footer p { margin: 0; font-size: 11px; color: #94a3b8; }
.simple-footer strong { color: #626aef; }

/* Animasi Muncul */
.fade-in { animation: fadeIn 0.4s ease-out; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
</style>