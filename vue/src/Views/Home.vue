<template>
  <div class="home">
    <!-- 英雄区域 -->
    <section class="hero-section">
      <div class="hero-background"></div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <div class="title-decor">
              <div class="line"></div>
              <div class="circle"></div>
              <div class="line"></div>
            </div>
            <h1 class="hero-title">旸谷诗文集</h1>
            <div class="title-decor">
              <div class="line"></div>
              <div class="circle"></div>
              <div class="line"></div>
            </div>
            <p class="hero-subtitle">耽美延川，秦北望川，兰秋往矣，高朋聚焉</p>
            <p class="hero-description">
              如一枚月光穿过的旧书签，夹在古典的平仄与今世的晨昏之间，<br>
              轻轻一翻，便落下整个山河的寂静与回响。
            </p>
            <div class="hero-actions">
              <router-link to="/poems" class="btn btn-primary">
                <i class="fas fa-book-open"></i>
                浏览诗集
              </router-link>
              <router-link to="/about" class="btn btn-outline">
                <i class="fas fa-user"></i>
                了解作者
              </router-link>
            </div>
          </div>
          <div class="hero-image">
            <div class="image-container">
              <img src="../assets/book.png" width="320" alt="诗文集封面">
              <div class="book-shadow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 特色作品 -->
    <section class="featured-section">
      <div class="container">
        <div class="section-header">
          <div class="header-decoration">
            <div class="dash"></div>
            <h2>特色作品</h2>
            <div class="dash"></div>
          </div>
          <p>精选诗词作品，感受文字之美</p>
        </div>
        <div class="featured-grid">
          <PoemCard
            v-for="(poem, index) in featuredPoems"
            :key="poem.id"
            :poem="poem"
            class="slide-up"
            :style="{ 'animation-delay': `${index * 0.1}s` }"
          />
        </div>
        <div class="text-center mt-4">
          <router-link to="/poems" class="btn btn-outline">
            查看全部作品 <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </section>

    <!-- 分类浏览 -->
    <section class="categories-section">
      <div class="container">
        <div class="section-header">
          <div class="header-decoration">
            <div class="dash"></div>
            <h2>按分类浏览</h2>
            <div class="dash"></div>
          </div>
          <p>探索不同风格的诗词作品</p>
        </div>
        <div class="categories-grid">
          <router-link
            v-for="(category, index) in categories"
            :key="category.id"
            :to="{ path: '/poems', query: { category: category.id } }"
            class="category-card card"
            :style="{ 'animation-delay': `${index * 0.1}s` }"
          >
            <div class="category-icon">
              <div class="icon-backdrop"></div>
              <i :class="getCategoryIcon(category.id)"></i>
            </div>
            <div class="category-info">
              <h3>{{ category.name }}</h3>
              <p>{{ category.count }} 篇作品</p>
            </div>
            <div class="arrow-icon">
              <i class="fas fa-chevron-right"></i>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- 作者简介 - 保持原有结构 -->
    <section class="author-section">
      <div class="container">
        <div class="author-card card">
          <div class="author-image">
            <i class="fas fa-user-circle"></i>
          </div>
          <div class="author-info">
            <h2>关于作者</h2>
            <h3>旸谷</h3>
            <p>
              陕西武功人，诗词爱好者，热爱传统文化，擅长古体诗、词与现代诗创作。
              作品以山水田园、人生哲理为主题，注重意境的营造与情感的表达。
              希望通过诗词记录生活感悟，传承中华传统文化。
            </p>
            <div class="author-stats">
              <div class="stat">
                <span class="stat-number">{{ totalPoems }}</span>
                <span class="stat-label">篇作品</span>
              </div>
              <div class="stat">
                <span class="stat-number">{{ categories.length }}</span>
                <span class="stat-label">个分类</span>
              </div>
              <div class="stat">
                <span class="stat-number">{{ tags.length }}</span>
                <span class="stat-label">个标签</span>
              </div>
            </div>
            <router-link to="/about" class="btn btn-primary">
              了解更多 <i class="fas fa-arrow-right"></i>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- 热门标签 -->
    <section class="tags-section">
      <div class="container">
        <div class="section-header">
          <div class="header-decoration">
            <div class="dash"></div>
            <h2>热门标签</h2>
            <div class="dash"></div>
          </div>
          <p>探索诗词中的主题与意境</p>
        </div>
        <div class="tags-cloud">
          <router-link
            v-for="(tag, index) in popularTags"
            :key="tag"
            :to="{ path: '/poems', query: { tag: tag } }"
            class="tag-cloud-item"
            :style="getTagStyle(tag, index)"
          >
            {{ tag }}
          </router-link>
        </div>
        <div class="tags-footer">
          <p>点击标签探索更多</p>
        </div>
      </div>
    </section>

    <!-- 底部装饰 -->
    <div class="bottom-wave">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import PoemCard from '../components/PoemCard.vue'
import { poems, categories, tags } from '../data/poems.js'

const featuredPoems = ref([])
const popularTags = computed(() => {
  return [...tags].sort(() => Math.random() - 0.5).slice(0, 18)
})

const totalPoems = computed(() => poems.length)

const getCategoryIcon = (categoryId) => {
  const icons = {
    'guti': 'fas fa-scroll',
    'ci': 'fas fa-retweet',
    'fu': 'fas fa-music',
    'modern': 'fas fa-pen-alt',
    'prose': 'fas fa-book'
  }
  return icons[categoryId] || 'fas fa-file-alt'
}

const getTagStyle = (tag, index) => {
  const sizes = ['0.85rem', '0.95rem', '1.05rem', '1.15rem']
  const colors = [
    'rgba(139, 115, 85, 0.9)',
    'rgba(139, 115, 85, 0.8)',
    'rgba(139, 115, 85, 0.7)',
    'rgba(139, 115, 85, 0.6)'
  ]
  
  const sizeIndex = index % sizes.length
  const colorIndex = Math.floor(index / sizes.length) % colors.length
  
  return {
    fontSize: sizes[sizeIndex],
    color: colors[colorIndex],
    backgroundColor: colors[colorIndex].replace('rgb', 'rgba').replace(')', ', 0.1)'),
    '--hover-color': colors[colorIndex]
  }
}

onMounted(() => {
  featuredPoems.value = [...poems]
    .sort(() => Math.random() - 0.5)
    .slice(0, 6)
})
</script>

<style scoped>
.home {
  min-height: 100vh;
  overflow-x: hidden;
}

/* 英雄区域 */
.hero-section {
  position: relative;
  padding: 6rem 0;
  background: linear-gradient(135deg, 
    rgba(248, 245, 240, 0.95) 0%, 
    rgba(255, 253, 250, 0.98) 100%);
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(139, 115, 85, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(212, 184, 150, 0.05) 0%, transparent 50%);
  background-size: 50% 50%;
  background-repeat: no-repeat;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-text {
  animation: fadeInUp 0.8s ease-out;
}

.title-decor {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
}

.line {
  width: 60px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent-color), transparent);
}

.circle {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--accent-color);
}

.hero-title {
  font-size: 3.5rem;
  color: var(--primary-color);
  text-align: center;
  margin: 1rem 0;
  position: relative;
  font-family: "Ma Shan Zheng", cursive;
}

.hero-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 3px;
  background: linear-gradient(90deg, 
    transparent, 
    var(--accent-color), 
    transparent);
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--accent-color);
  margin: 2rem 0;
  text-align: center;
  font-style: italic;
  position: relative;
  padding: 0 2rem;
}

.hero-subtitle::before,
.hero-subtitle::after {
  content: '"';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(139, 115, 85, 0.3);
  font-size: 2rem;
  font-family: serif;
}

.hero-subtitle::before {
  left: 0;
}

.hero-subtitle::after {
  right: 0;
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-color);
  margin: 2rem 0;
  text-align: center;
  padding: 0 1rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.hero-image {
  animation: fadeInRight 0.8s ease-out 0.2s both;
}

.image-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container img {
  width: 100%;
  max-width: 320px;
  filter: drop-shadow(0 20px 40px rgba(139, 115, 85, 0.15));
  transform: perspective(1000px) rotateY(-5deg);
  transition: transform 0.6s ease;
}

.image-container img:hover {
  transform: perspective(1000px) rotateY(5deg);
}

.book-shadow {
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 20px;
  background: radial-gradient(ellipse at center, 
    rgba(0,0,0,0.2) 0%, 
    transparent 70%);
  filter: blur(10px);
  z-index: -1;
}

/* 通用部分样式 */
.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.header-decoration {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
}

.header-decoration h2 {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin: 0;
  white-space: nowrap;
}

.dash {
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, 
    transparent,
    var(--accent-color),
    transparent);
}

.section-header p {
  font-size: 1.1rem;
  color: var(--text-light);
  margin-top: 0.5rem;
}

.text-center {
  text-align: center;
}

.mt-4 {
  margin-top: 2rem;
}

/* 特色作品区域 */
.featured-section {
  padding: 5rem 0;
  background: linear-gradient(to bottom, 
    white 0%, 
    rgba(248, 245, 240, 0.5) 100%);
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.slide-up {
  animation: slideUp 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(30px);
}

/* 分类浏览区域 */
.categories-section {
  padding: 5rem 0;
  background: white;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  gap: 1.5rem;
}

.category-card {
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.4s ease;
  border: 1px solid rgba(139, 115, 85, 0.1);
  background: white;
  animation: slideUp 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(30px);
}

.category-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent-color);
  box-shadow: 0 10px 30px rgba(139, 115, 85, 0.15);
}

.category-icon {
  position: relative;
  width: 60px;
  height: 60px;
  flex-shrink: 0;
}

.icon-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(139, 115, 85, 0.1) 0%, 
    rgba(212, 184, 150, 0.1) 100%);
  border-radius: 12px;
  transform: rotate(45deg);
  transition: transform 0.4s ease;
}

.category-card:hover .icon-backdrop {
  transform: rotate(135deg);
}

.category-icon i {
  position: relative;
  z-index: 1;
  font-size: 1.5rem;
  color: var(--accent-color);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.category-info {
  flex: 1;
}

.category-info h3 {
  font-size: 1.3rem;
  color: var(--primary-color);
  margin-bottom: 0.3rem;
}

.category-info p {
  color: var(--text-light);
  font-size: 0.9rem;
}

.arrow-icon {
  color: rgba(139, 115, 85, 0.3);
  transition: all 0.3s ease;
}

.category-card:hover .arrow-icon {
  color: var(--accent-color);
  transform: translateX(5px);
}

/* 作者简介区域 - 保持原有样式 */
.author-section {
  padding: 5rem 0;
  background: linear-gradient(to bottom,
    rgba(248, 245, 240, 0.5) 0%,
    white 100%);
}

.author-card {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  padding: 3rem;
  align-items: center;
}

.author-image {
  text-align: center;
}

.author-image i {
  font-size: 8rem;
  color: var(--accent-color);
  filter: drop-shadow(0 5px 15px rgba(139, 115, 85, 0.2));
}

.author-info h2 {
  font-size: 1.5rem;
  color: var(--text-light);
  margin-bottom: 0.5rem;
}

.author-info h3 {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-family: "Ma Shan Zheng", cursive;
}

.author-info p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-color);
  margin-bottom: 2rem;
}

.author-stats {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: bold;
  color: var(--accent-color);
  font-family: "Ma Shan Zheng", cursive;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-light);
}

/* 热门标签区域 */
.tags-section {
  padding: 5rem 0;
  background: white;
}

.tags-cloud {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem;
  padding: 2.5rem;
  background: linear-gradient(135deg, 
    rgba(248, 245, 240, 0.5) 0%, 
    rgba(255, 255, 255, 1) 100%);
  border-radius: 16px;
  border: 1px solid rgba(139, 115, 85, 0.1);
}

.tag-cloud-item {
  padding: 0.5rem 1.2rem;
  border-radius: 20px;
  transition: all 0.3s ease;
  text-decoration: none;
  border: 1px solid transparent;
  background-color: rgba(139, 115, 85, 0.1);
  font-weight: 500;
  position: relative;
  overflow: hidden;
}

.tag-cloud-item::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background-color: var(--hover-color, var(--accent-color));
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
  opacity: 0.1;
}

.tag-cloud-item:hover::before {
  width: 200px;
  height: 200px;
}

.tag-cloud-item:hover {
  background-color: var(--hover-color, var(--accent-color));
  color: white !important;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(139, 115, 85, 0.2);
  border-color: var(--hover-color, var(--accent-color));
}

.tags-footer {
  text-align: center;
  margin-top: 1.5rem;
  color: var(--text-light);
  font-size: 0.9rem;
  font-style: italic;
}

/* 底部波浪 */
.bottom-wave {
  margin-top: 4rem;
  color: rgba(139, 115, 85, 0.1);
}

.bottom-wave svg {
  display: block;
  width: 100%;
  height: 120px;
}

/* 按钮样式 */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.btn:hover::before {
  width: 200px;
  height: 200px;
}

.btn-primary {
  background: var(--accent-color);
  color: white;
}

.btn-primary:hover {
  background: var(--light-accent);
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(139, 115, 85, 0.3);
}

.btn-outline {
  background: transparent;
  color: var(--accent-color);
  border-color: var(--accent-color);
}

.btn-outline:hover {
  background: var(--accent-color);
  color: white;
  transform: translateY(-2px);
}

/* 卡片样式 */
.card {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: var(--transition);
}

.card:hover {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* 动画定义 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 暗色主题适配 */
[data-theme="dark"] .hero-section {
  background: linear-gradient(135deg, 
    rgba(26, 26, 26, 0.95) 0%, 
    rgba(40, 40, 40, 0.98) 100%);
}

[data-theme="dark"] .hero-background {
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(212, 184, 150, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(212, 184, 150, 0.03) 0%, transparent 50%);
}

[data-theme="dark"] .hero-title {
  color: var(--primary-color);
}

[data-theme="dark"] .hero-subtitle {
  color: var(--accent-color);
}

[data-theme="dark"] .hero-description {
  color: var(--text-color);
}

[data-theme="dark"] .featured-section {
  background: linear-gradient(to bottom, 
    var(--background-color) 0%, 
    rgba(40, 40, 40, 1) 100%);
}

[data-theme="dark"] .categories-section {
  background: var(--background-color);
}

[data-theme="dark"] .category-card {
  background: var(--card-bg);
  border-color: var(--border-color);
}

[data-theme="dark"] .author-section {
  background: linear-gradient(to bottom,
    rgba(40, 40, 40, 1) 0%,
    var(--background-color) 100%);
}

[data-theme="dark"] .author-card {
  background: var(--card-bg);
  border-color: var(--border-color);
}

[data-theme="dark"] .author-info h2 {
  color: var(--text-light);
}

[data-theme="dark"] .author-info h3 {
  color: var(--primary-color);
}

[data-theme="dark"] .author-info p {
  color: var(--text-color);
}

[data-theme="dark"] .stat-number {
  color: var(--accent-color);
}

[data-theme="dark"] .stat-label {
  color: var(--text-light);
}

[data-theme="dark"] .tags-section {
  background: var(--background-color);
}

[data-theme="dark"] .tags-cloud {
  background: linear-gradient(135deg, 
    rgba(40, 40, 40, 0.8) 0%, 
    var(--card-bg) 100%);
  border-color: var(--border-color);
}

[data-theme="dark"] .bottom-wave {
  color: rgba(212, 184, 150, 0.05);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .author-card {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem;
    text-align: center;
  }
  
  .author-stats {
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .featured-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .header-decoration h2 {
    font-size: 2rem;
  }
  
  .categories-grid {
    grid-template-columns: 1fr;
  }
  
  .tag-cloud-item {
    padding: 0.4rem 1rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .author-stats {
    flex-direction: column;
    gap: 1rem;
  }
  
  .tags-cloud {
    padding: 1.5rem;
  }
}
</style>