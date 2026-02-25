<template>
  <nav class="navigation">
    <div class="container">
      <div class="nav-content">
        <!-- Logo -->
        <router-link to="/" class="logo">
          <div class="logo-icon">
            <img src="../assets/logo.png" width="32" alt="">
          </div>
          <div class="logo-text">
            <h1>旸谷诗文集</h1>
            <p class="logo-subtitle">古体诗、词、赋、现代诗、散文作品集</p>
          </div>
        </router-link>

        <!-- 导航菜单 -->
        <div class="nav-menu">
          <router-link 
            v-for="item in navItems" 
            :key="item.path"
            :to="item.path"
            class="nav-item"
            :class="{ active: isActive(item.path) }"
          >
            <i :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </router-link>
          
          <!-- 搜索框 -->
          <div class="search-container">
            <i class="fas fa-search search-icon"></i>
            <input 
              type="text" 
              class="search-input" 
              placeholder="搜索诗词..."
              v-model="searchQuery"
              @keyup.enter="searchPoems"
            >
          </div>
          
          <!-- 主题切换 -->
          <button class="theme-toggle" @click="toggleTheme">
            <i :class="themeIcon"></i>
          </button>
        </div>

        <!-- 移动端菜单按钮 -->
        <button class="mobile-menu-btn" @click="toggleMobileMenu">
          <i class="fas fa-bars"></i>
        </button>
      </div>

      <!-- 移动端菜单 -->
      <div v-if="mobileMenuOpen" class="mobile-menu">
        <div class="mobile-menu-content">
          <router-link 
            v-for="item in navItems" 
            :key="item.path"
            :to="item.path"
            class="mobile-nav-item"
            @click="closeMobileMenu"
          >
            <i :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </router-link>
          
          <div class="mobile-search">
            <input 
              type="text" 
              class="search-input" 
              placeholder="搜索诗词..."
              v-model="searchQuery"
              @keyup.enter="searchPoems"
            >
            <button class="btn btn-primary" @click="searchPoems">
              搜索
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const searchQuery = ref('')
const mobileMenuOpen = ref(false)
const darkMode = ref(false)

const navItems = [
  { path: '/', name: '首页', icon: 'fas fa-home' },
  { path: '/poems', name: '诗集', icon: 'fas fa-book-open' },
  { path: '/categories', name: '分类', icon: 'fas fa-tags' },
  { path: '/about', name: '关于', icon: 'fas fa-info-circle' }
]

const themeIcon = computed(() => {
  return darkMode.value ? 'fas fa-sun' : 'fas fa-moon'
})

const isActive = (path) => {
  if (path === '/' && route.path === '/') return true
  if (path !== '/' && route.path.startsWith(path)) return true
  return false
}

const toggleTheme = () => {
  darkMode.value = !darkMode.value
  if (darkMode.value) {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.removeAttribute('data-theme')
  }
  localStorage.setItem('theme', darkMode.value ? 'dark' : 'light')
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const searchPoems = () => {
  if (searchQuery.value.trim()) {
    router.push({ path: '/poems', query: { search: searchQuery.value } })
    closeMobileMenu()
  }
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    darkMode.value = true
    document.documentElement.setAttribute('data-theme', 'dark')
  }
})
</script>

<style scoped>
.navigation {
  background-color: var(--card-bg);
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 1rem 0;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Logo 样式 */
.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--primary-color);
  text-decoration: none;
}

.logo-icon {
  width: 50px;
  height: 50px;
  background-color: var(--accent-color);
  border-radius: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
}

.logo-text h1 {
  font-size: 1.5rem;
  margin: 0;
  line-height: 1.2;
}

.logo-subtitle {
  font-size: 0.85rem;
  color: var(--text-light);
  margin: 0;
}

/* 导航菜单 */
.nav-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-color);
  padding: 0.5rem 0;
  position: relative;
  transition: var(--transition);
  font-size: 1rem;
}

.nav-item:hover {
  color: var(--accent-color);
}

.nav-item.active {
  color: var(--accent-color);
}

.nav-item.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--accent-color);
  border-radius: 1px;
}

/* 搜索框 */
.search-container {
  position: relative;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-light);
}

.search-input {
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--background-color);
  font-family: "Noto Serif SC", serif;
  font-size: 0.95rem;
  width: 200px;
  transition: var(--transition);
}

.search-input:focus {
  outline: none;
  border-color: var(--accent-color);
  width: 250px;
}

/* 主题切换 */
.theme-toggle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--background-color);
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
  color: var(--text-color);
}

.theme-toggle:hover {
  background-color: var(--accent-color);
  color: white;
  border-color: var(--accent-color);
}

/* 移动端菜单按钮 */
.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--text-color);
  cursor: pointer;
  padding: 0.5rem;
}

/* 移动端菜单 */
.mobile-menu {
  display: none;
  margin-top: 1rem;
  padding: 1rem;
  background-color: var(--card-bg);
  border-radius: 8px;
  box-shadow: var(--shadow);
}

.mobile-menu-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mobile-nav-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  color: var(--text-color);
  border-radius: 4px;
  transition: var(--transition);
}

.mobile-nav-item:hover {
  background-color: var(--background-color);
  color: var(--accent-color);
}

.mobile-search {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.mobile-search .search-input {
  flex: 1;
  width: auto;
}

/* 暗色主题优化 - 搜索框 */
[data-theme="dark"] .search-input {
  background-color: #3d3d3d;
  border-color: #555;
  color: var(--text-color);
}

[data-theme="dark"] .search-input:focus {
  border-color: var(--accent-color);
  background-color: #444;
}

[data-theme="dark"] .search-icon {
  color: var(--text-light);
}

/* 暗色主题优化 - 导航项 */
[data-theme="dark"] .nav-item {
  color: var(--text-color);
}

[data-theme="dark"] .nav-item:hover {
  color: var(--accent-color);
}

[data-theme="dark"] .nav-item.active {
  color: var(--accent-color);
}

/* 暗色主题优化 - Logo 图标 */
[data-theme="dark"] .logo-icon {
  background-color: var(--accent-color);
}

/* 暗色主题优化 - 主题切换按钮 */
[data-theme="dark"] .theme-toggle {
  background-color: #3d3d3d;
  border-color: #555;
  color: var(--text-color);
}

[data-theme="dark"] .theme-toggle:hover {
  background-color: var(--accent-color);
  border-color: var(--accent-color);
  color: #1a1a1a;
}

/* 暗色主题优化 - 移动端菜单 */
[data-theme="dark"] .mobile-menu {
  background-color: var(--card-bg);
  border-color: var(--border-color);
}

[data-theme="dark"] .mobile-nav-item:hover {
  background-color: rgba(212, 184, 150, 0.1);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }
  
  .mobile-menu-btn {
    display: block;
  }
  
  .mobile-menu {
    display: block;
  }
  
  .logo-text h1 {
    font-size: 1.2rem;
  }
  
  .logo-subtitle {
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .logo {
    gap: 0.5rem;
  }
  
  .logo-icon {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
}
</style>