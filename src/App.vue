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
body, html { margin: 0; padding: 0; font-family: 'Poppins', sans-serif; background-color: #0b0f19; overflow-x: hidden; width: 100%; }

.app-viewport {
  min-height: 100vh;
  width: 100%;
  background-color: #0b0f19;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
}

.blob, .blob2 { position: absolute; border-radius: 50%; filter: blur(100px); opacity: 0.15; z-index: 1; }
.blob { width: 400px; height: 400px; background-color: #626aef; top: -100px; right: -100px; }
.blob2 { width: 350px; height: 350px; background-color: #ec4899; bottom: -80px; left: -80px; }

.main-layout { width: 100%; display: flex; flex-direction: column; align-items: center; z-index: 2; }

.glass-nav {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  padding: 10px 20px;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex; gap: 10px; margin-bottom: 25px;
}
.nav-link { text-decoration: none; color: rgba(255, 255, 255, 0.7); font-size: 12px; font-weight: 700; padding: 8px 18px; border-radius: 30px; transition: 0.3s; }
.router-link-active { background-color: #626aef; color: white; box-shadow: 0 4px 15px rgba(98, 106, 239, 0.4); }

.mega-card {
  width: 1300px;
  height: auto;
  min-height: 600px;
  background: #ffffff;
  /* Atas & Bawah Melengkung Sempurna */
  border-radius: 30px; 
  box-shadow: 0 25px 50px rgba(0,0,0,0.15);
  display: flex; flex-direction: column; 
  overflow: hidden; /* KUNCI: Menghapus toolbar ganda */
  position: relative;
}

.simple-footer {
  margin-top: auto; width: 100%; background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 15px 0; text-align: center;
}
.simple-footer p { margin: 0; font-size: 10px; color: #94a3b8; }

@media (max-width: 1350px) {
  .mega-card { width: 95%; margin: 0 auto; border-radius: 25px; }
}
@media (max-width: 768px) {
  .app-viewport { padding: 20px 0; }
  .glass-nav { width: 85%; }
}
</style>