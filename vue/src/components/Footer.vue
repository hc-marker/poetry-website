<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <!-- 网站信息 -->
        <div class="footer-section">
          <div class="footer-logo">
            <i class="fas fa-mountain"></i>
            <h3>旸谷诗文集</h3>
          </div>
          <p class="footer-description">
           将山河的壮阔、人间的烟火与时光的独白，酿成一首静默流淌的诗。
          </p>
          <div class="social-links">
            <a href="#" class="social-link" title="微信">
              <i class="fab fa-weixin"></i>
            </a>
            <a href="#" class="social-link" title="微博">
              <i class="fab fa-weibo"></i>
            </a>
            <a href="#" class="social-link" title="GitHub">
              <i class="fab fa-github"></i>
            </a>
            <a href="#" class="social-link" title="邮箱">
              <i class="far fa-envelope"></i>
            </a>
          </div>
        </div>

        <!-- 快速链接 -->
        <div class="footer-section">
          <h4>快速链接</h4>
          <ul class="footer-links">
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/poems">全部诗集</router-link></li>
            <li><router-link to="/categories">分类浏览</router-link></li>
            <li><router-link to="/about">关于作者</router-link></li>
          </ul>
        </div>

        <!-- 热门分类 -->
        <div class="footer-section">
          <h4>热门分类</h4>
          <ul class="footer-links">
            <li v-for="category in hotCategories" :key="category.id">
              <router-link :to="{ path: '/poems', query: { category: category.id } }">
                {{ category.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- 订阅更新 -->
        <div class="footer-section">
          <h4>订阅更新</h4>
          <p>订阅以获取最新的诗词作品</p>
          <div class="subscribe-form">
            <input 
              type="email" 
              placeholder="输入您的邮箱" 
              v-model="email"
              class="subscribe-input"
            >
            <button class="btn btn-primary" @click="subscribe">
              订阅
            </button>
          </div>
        </div>
      </div>

      <!-- 版权信息 -->
      <div class="footer-bottom">
        <div class="copyright">
          &copy; {{ currentYear }} 旸谷诗文集. 保留所有权利.
        </div>
        <div class="footer-links-bottom">
          <router-link to="/about">关于我们</router-link>
          <span class="separator">|</span>
          <a href="#">隐私政策</a>
          <span class="separator">|</span>
          <a href="#">使用条款</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue'
import { categories } from '../data/poems.js'

const email = ref('')
const currentYear = computed(() => new Date().getFullYear())

// 获取热门分类（数量最多的前4个）
const hotCategories = computed(() => {
  return [...categories]
    .sort((a, b) => b.count - a.count)
    .slice(0, 4)
})

const subscribe = () => {
  if (email.value && validateEmail(email.value)) {
    alert(`感谢订阅！我们会发送最新作品到 ${email.value}`)
    email.value = ''
  } else {
    alert('请输入有效的邮箱地址')
  }
}

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}
</script>

<style scoped>
.footer {
  background-color: var(--card-bg);
  padding: 3rem 0 1.5rem;
  margin-top: 4rem;
  border-top: 1px solid var(--border-color);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.footer-logo i {
  font-size: 2rem;
  color: var(--accent-color);
}

.footer-logo h3 {
  font-size: 1.5rem;
  margin: 0;
  color: var(--primary-color);
}

.footer-description {
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--background-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color);
  transition: var(--transition);
}

.social-link:hover {
  background-color: var(--accent-color);
  color: white;
  transform: translateY(-3px);
}

.footer-section h4 {
  font-size: 1.1rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-links li a {
  color: var(--text-light);
  transition: var(--transition);
}

.footer-links li a:hover {
  color: var(--accent-color);
  padding-left: 5px;
}

.subscribe-form {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.subscribe-input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--background-color);
  font-family: "Noto Serif SC", serif;
  font-size: 0.95rem;
}

.subscribe-input:focus {
  outline: none;
  border-color: var(--accent-color);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
  font-size: 0.9rem;
  color: var(--text-light);
}

.copyright {
  font-family: "Noto Serif SC", serif;
}

.footer-links-bottom {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.footer-links-bottom a {
  color: var(--text-light);
  transition: var(--transition);
}

.footer-links-bottom a:hover {
  color: var(--accent-color);
}

.separator {
  color: var(--border-color);
}

/* 暗色主题 */
[data-theme="dark"] .footer {
  background-color: #1a1a1a;
  border-top-color: #333;
}

[data-theme="dark"] .social-link {
  background-color: #2d2d2d;
  color: #ddd;
}

[data-theme="dark"] .subscribe-input {
  background-color: #2d2d2d;
  border-color: #444;
  color: #ddd;
}

[data-theme="dark"] .footer-bottom {
  border-top-color: #333;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>