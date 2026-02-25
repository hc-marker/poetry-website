<template>
  <div class="categories-page">
    <!-- 页面标题 -->
    <div class="page-header">
      <div class="container">
        <div class="header-content">
          <h1>分类浏览</h1>
          <p>探索不同风格的诗词作品，共 {{ totalPoems }} 篇作品</p>
        </div>
      </div>
    </div>

    <div class="container">
      <!-- 分类统计 -->
      <div class="categories-stats">
        <div class="stat-card card">
          <div class="stat-icon">
            <i class="fas fa-book-open"></i>
          </div>
          <div class="stat-content">
            <h3>{{ totalPoems }}</h3>
            <p>总作品数</p>
          </div>
        </div>
        
        <div class="stat-card card">
          <div class="stat-icon">
            <i class="fas fa-tags"></i>
          </div>
          <div class="stat-content">
            <h3>{{ categories.length }}</h3>
            <p>分类数量</p>
          </div>
        </div>
        
        <div class="stat-card card">
          <div class="stat-icon">
            <i class="fas fa-hashtag"></i>
          </div>
          <div class="stat-content">
            <h3>{{ tags.length }}</h3>
            <p>标签数量</p>
          </div>
        </div>
        
        <div class="stat-card card">
          <div class="stat-icon">
            <i class="fas fa-calendar-alt"></i>
          </div>
          <div class="stat-content">
            <h3>{{ yearRange }}</h3>
            <p>创作年份</p>
          </div>
        </div>
      </div>

      <!-- 分类网格 -->
      <div class="categories-section">
        <h2>按分类浏览</h2>
        <p class="section-description">点击分类查看该类别下的所有作品</p>
        
        <div class="categories-grid">
          <router-link
            v-for="category in categories"
            :key="category.id"
            :to="{ path: '/poems', query: { category: category.id } }"
            class="category-card-large card"
          >
            <div class="category-header">
              <div class="category-icon">
                <i :class="getCategoryIcon(category.id)"></i>
              </div>
              <div class="category-info">
                <h3>{{ category.name }}</h3>
                <span class="poem-count">{{ category.count }} 篇作品</span>
              </div>
            </div>
            
            <div class="category-description">
              {{ getCategoryDescription(category.id) }}
            </div>
            
            <div class="category-footer">
              <span class="view-all">
                查看全部 <i class="fas fa-arrow-right"></i>
              </span>
            </div>
          </router-link>
        </div>
      </div>

      <!-- 标签云 -->
      <div class="tags-section">
        <h2>标签云</h2>
        <p class="section-description">点击标签查看相关作品</p>
        
        <div class="tags-cloud">
          <router-link
            v-for="tag in tags"
            :key="tag"
            :to="{ path: '/poems', query: { tag: tag } }"
            class="tag-cloud-item"
            :style="getTagStyle(tag)"
          >
            {{ tag }}
            <span class="tag-count">({{ getTagCount(tag) }})</span>
          </router-link>
        </div>
      </div>

      <!-- 热门作品 -->
      <div class="popular-poems">
        <h2>热门作品</h2>
        <p class="section-description">阅读量最高的作品</p>
        
        <div class="poems-list">
          <div
            v-for="(poem, index) in popularPoems"
            :key="poem.id"
            class="popular-poem-item"
            @click="goToPoem(poem.id)"
          >
            <div class="poem-rank">{{ index + 1 }}</div>
            <div class="poem-info">
              <h4>{{ poem.title }}</h4>
              <p>{{ poem.category }} · {{ formatDate(poem.date) }}</p>
            </div>
            <div class="poem-stats">
              <span class="stat">
                <i class="far fa-eye"></i> {{ getRandomViews() }}
              </span>
              <span class="stat">
                <i class="far fa-heart"></i> {{ getRandomLikes() }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { poems, categories, tags } from '../data/poems.js'

const router = useRouter()

// 计算属性
const totalPoems = computed(() => poems.length)

const yearRange = computed(() => {
  const dates = poems.map(p => new Date(p.date))
  const minYear = Math.min(...dates.map(d => d.getFullYear()))
  const maxYear = Math.max(...dates.map(d => d.getFullYear()))
  return minYear === maxYear ? `${minYear}` : `${minYear}-${maxYear}`
})

const popularPoems = computed(() => {
  // 随机选择5篇作为热门作品
  return [...poems]
    .sort(() => Math.random() - 0.5)
    .slice(0, 5)
})

// 方法
const getCategoryIcon = (categoryId) => {
  const icons = {
    'guti': 'fas fa-scroll',
    'huiwen': 'fas fa-retweet',
    'ci': 'fas fa-music',
    'modern': 'fas fa-pen-alt',
    'prose': 'fas fa-book'
  }
  return icons[categoryId] || 'fas fa-file-alt'
}

const getCategoryDescription = (categoryId) => {
  const descriptions = {
    'guti': '传统古体诗，遵循古典韵律，抒发山水田园之情',
    'huiwen': '回文诗体，正读倒读皆成意境，展现文字技巧',
    'ci': '宋词词牌，婉约豪放兼具，抒发细腻情感',
    'modern': '现代自由诗，形式自由，表达现代情感与思考',
    'prose': '散文随笔，记录生活感悟与旅行见闻'
  }
  return descriptions[categoryId] || '诗词作品'
}

const getTagStyle = (tag) => {
  const sizes = ['0.9rem', '1rem', '1.1rem', '1.2rem', '1.3rem', '1.4rem']
  const colors = [
    'rgba(139, 115, 85, 0.8)',
    'rgba(139, 115, 85, 0.7)',
    'rgba(139, 115, 85, 0.6)',
    'rgba(139, 115, 85, 0.5)',
    'rgba(139, 115, 85, 0.4)'
  ]
  
  const randomSize = sizes[Math.floor(Math.random() * sizes.length)]
  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  
  return {
    fontSize: randomSize,
    color: randomColor,
    fontWeight: Math.random() > 0.5 ? '500' : '400'
  }
}

const getTagCount = (tag) => {
  return poems.filter(poem => poem.tags.includes(tag)).length
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

const getRandomViews = () => {
  return Math.floor(Math.random() * 500) + 50
}

const getRandomLikes = () => {
  return Math.floor(Math.random() * 100) + 10
}

const goToPoem = (poemId) => {
  router.push({ name: 'PoemDetail', params: { id: poemId } })
}

onMounted(() => {
  // 页面加载逻辑
})
</script>

<style scoped>
.categories-page {
  min-height: 100vh;
  padding-bottom: 4rem;
}

.page-header {
  background-color: var(--card-bg);
  padding: 3rem 0;
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--border-color);
}

.header-content {
  text-align: center;
}

.header-content h1 {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.header-content p {
  font-size: 1.1rem;
  color: var(--text-light);
}

/* 统计卡片 */
.categories-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  transition: var(--transition);
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.stat-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgba(139, 115, 85, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  font-size: 1.5rem;
}

.stat-content h3 {
  font-size: 2rem;
  color: var(--primary-color);
  margin: 0;
  line-height: 1;
}

.stat-content p {
  color: var(--text-light);
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
}

/* 分类网格 */
.categories-section,
.tags-section,
.popular-poems {
  margin-bottom: 4rem;
}

h2 {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.section-description {
  color: var(--text-light);
  margin-bottom: 2rem;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.category-card-large {
  padding: 1.5rem;
  transition: var(--transition);
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
}

.category-card-large:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-hover);
}

.category-card-large:hover .view-all {
  gap: 0.75rem;
  color: var(--accent-color);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.category-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(139, 115, 85, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  font-size: 1.2rem;
}

.category-info h3 {
  font-size: 1.3rem;
  margin: 0;
  color: var(--primary-color);
}

.poem-count {
  font-size: 0.9rem;
  color: var(--text-light);
}

.category-description {
  flex: 1;
  color: var(--text-color);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.category-footer {
  border-top: 1px solid var(--border-color);
  padding-top: 1rem;
}

.view-all {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-light);
  font-size: 0.9rem;
  transition: var(--transition);
}

/* 标签云 */
.tags-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 2rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: var(--shadow);
  justify-content: center;
}

.tag-cloud-item {
  padding: 0.75rem 1.25rem;
  background-color: rgba(139, 115, 85, 0.1);
  border-radius: 25px;
  transition: var(--transition);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.tag-cloud-item:hover {
  background-color: var(--accent-color);
  color: white !important;
  transform: translateY(-3px);
}

.tag-count {
  font-size: 0.85em;
  opacity: 0.8;
}

/* 热门作品 */
.poems-list {
  background-color: white;
  border-radius: 12px;
  box-shadow: var(--shadow);
  overflow: hidden;
}

.popular-poem-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid var(--border-color);
  cursor: pointer;
  transition: var(--transition);
}

.popular-poem-item:hover {
  background-color: var(--background-color);
}

.popular-poem-item:last-child {
  border-bottom: none;
}

.poem-rank {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(139, 115, 85, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--accent-color);
  font-size: 1.1rem;
}

.poem-info {
  flex: 1;
}

.poem-info h4 {
  font-size: 1.1rem;
  color: var(--primary-color);
  margin-bottom: 0.25rem;
}

.poem-info p {
  font-size: 0.9rem;
  color: var(--text-light);
  margin: 0;
}

.poem-stats {
  display: flex;
  gap: 1.5rem;
}

.poem-stats .stat {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.9rem;
  color: var(--text-light);
}

/* 暗色主题优化 */
[data-theme="dark"] .page-header {
  background-color: var(--card-bg);
  border-bottom-color: var(--border-color);
}

[data-theme="dark"] .header-content h1 {
  color: var(--primary-color);
}

[data-theme="dark"] .header-content p {
  color: var(--text-light);
}

[data-theme="dark"] .stat-card {
  background-color: var(--card-bg);
  border-color: var(--border-color);
}

[data-theme="dark"] .stat-icon {
  background-color: rgba(212, 184, 150, 0.1);
  color: var(--accent-color);
}

[data-theme="dark"] .stat-content h3 {
  color: var(--primary-color);
}

[data-theme="dark"] .stat-content p {
  color: var(--text-light);
}

[data-theme="dark"] h2 {
  color: var(--primary-color);
}

[data-theme="dark"] .section-description {
  color: var(--text-light);
}

[data-theme="dark"] .category-card-large {
  background-color: var(--card-bg);
  border-color: var(--border-color);
}

[data-theme="dark"] .category-icon {
  background-color: rgba(212, 184, 150, 0.1);
  color: var(--accent-color);
}

[data-theme="dark"] .category-info h3 {
  color: var(--primary-color);
}

[data-theme="dark"] .poem-count {
  color: var(--text-light);
}

[data-theme="dark"] .category-description {
  color: var(--text-color);
}

[data-theme="dark"] .view-all {
  color: var(--text-light);
}

[data-theme="dark"] .view-all:hover {
  color: var(--accent-color);
}

[data-theme="dark"] .tags-cloud {
  background-color: var(--card-bg);
}

[data-theme="dark"] .tag-cloud-item {
  background-color: rgba(212, 184, 150, 0.2);
}

[data-theme="dark"] .tag-cloud-item:hover {
  background-color: var(--accent-color);
  color: #1a1a1a !important;
}

[data-theme="dark"] .poems-list {
  background-color: var(--card-bg);
}

[data-theme="dark"] .popular-poem-item {
  border-bottom-color: var(--border-color);
}

[data-theme="dark"] .popular-poem-item:hover {
  background-color: #3d3d3d;
}

[data-theme="dark"] .poem-rank {
  background-color: rgba(212, 184, 150, 0.1);
  color: var(--accent-color);
}

[data-theme="dark"] .poem-info h4 {
  color: var(--primary-color);
}

[data-theme="dark"] .poem-info p {
  color: var(--text-light);
}

[data-theme="dark"] .poem-stats .stat {
  color: var(--text-light);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .categories-stats {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .categories-grid {
    grid-template-columns: 1fr;
  }
  
  .popular-poem-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
  
  .poem-stats {
    align-self: flex-end;
  }
}

@media (max-width: 480px) {
  .categories-stats {
    grid-template-columns: 1fr;
  }
  
  .header-content h1 {
    font-size: 2rem;
  }
  
  .tags-cloud {
    padding: 1rem;
  }
  
  .tag-cloud-item {
    padding: 0.5rem 1rem;
  }
}
</style>