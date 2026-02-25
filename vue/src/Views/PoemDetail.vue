<template>
  <div class="poem-detail">
    <!-- 返回按钮 -->
    <div class="container">
      <router-link to="/poems" class="back-button">
        <i class="fas fa-arrow-left"></i>
        返回诗集
      </router-link>
    </div>

    <!-- 诗歌内容 -->
    <div class="container">
      <div class="poem-content card">
        <!-- 诗歌头部 -->
        <div class="poem-header">
          <div class="poem-meta">
            <span class="poem-category">{{ poem.category }}</span>
            <span class="poem-date">{{ formatDate(poem.date) }}</span>
          </div>
          <h1 class="poem-title">{{ poem.title }}</h1>
          <div class="poem-author">
            <i class="fas fa-user"></i>
            作者: {{ poem.author }}
          </div>
        </div>

        <!-- 诗歌正文 -->
        <div class="poem-body">
          <div class="poem-text" :class="[fontSizeClass, getPoemStyleClass(poem.category)]">
            <pre>{{ poem.content }}</pre>
          </div>
          
          <!-- 诗歌描述 -->
          <div v-if="poem.description" class="poem-description">
            <h3><i class="fas fa-info-circle"></i> 作品简介</h3>
            <p>{{ poem.description }}</p>
          </div>
        </div>

        <!-- 诗歌标签 -->
        <div class="poem-tags">
          <h3><i class="fas fa-tags"></i> 标签</h3>
          <div class="tags">
            <router-link
              v-for="tag in poem.tags"
              :key="tag"
              :to="{ path: '/poems', query: { tag: tag } }"
              class="tag"
            >
              {{ tag }}
            </router-link>
          </div>
        </div>

        <!-- 诗歌操作 -->
        <div class="poem-actions">
          <button class="action-btn" @click="toggleFontSize" title="调整字体大小">
            <i class="fas fa-text-height"></i>
            <span>字体</span>
          </button>
          <button class="action-btn" @click="copyToClipboard" title="复制全文">
            <i class="far fa-copy"></i>
            <span>复制</span>
          </button>
          <button class="action-btn" @click="toggleFavorite" title="收藏">
            <i :class="isFavorite ? 'fas fa-heart' : 'far fa-heart'"></i>
            <span>收藏</span>
          </button>
          <button class="action-btn" @click="sharePoem" title="分享">
            <i class="fas fa-share-alt"></i>
            <span>分享</span>
          </button>
          <button class="action-btn" @click="printPoem" title="打印">
            <i class="fas fa-print"></i>
            <span>打印</span>
          </button>
        </div>
      </div>

      <!-- 相邻诗歌导航 -->
      <div class="poem-navigation">
        <router-link 
          v-if="prevPoem" 
          :to="`/poem/${prevPoem.id}`"
          class="nav-link prev"
        >
          <i class="fas fa-chevron-left"></i>
          <div class="nav-info">
            <span class="nav-label">上一篇</span>
            <span class="nav-title">{{ prevPoem.title }}</span>
          </div>
        </router-link>
        
        <div v-else class="nav-link placeholder"></div>
        
        <router-link 
          v-if="nextPoem" 
          :to="`/poem/${nextPoem.id}`"
          class="nav-link next"
        >
          <div class="nav-info">
            <span class="nav-label">下一篇</span>
            <span class="nav-title">{{ nextPoem.title }}</span>
          </div>
          <i class="fas fa-chevron-right"></i>
        </router-link>
        
        <div v-else class="nav-link placeholder"></div>
      </div>

      <!-- 相关诗歌 -->
      <div v-if="relatedPoems.length > 0" class="related-poems">
        <h2>相关作品</h2>
        <div class="related-grid">
          <PoemCard
            v-for="relatedPoem in relatedPoems"
            :key="relatedPoem.id"
            :poem="relatedPoem"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import PoemCard from '../components/PoemCard.vue'
import { poems } from '../data/poems.js'

const route = useRoute()
const poem = ref({})
const fontSizeClass = ref('font-medium')
const isFavorite = ref(false)

const getPoemStyleClass = (category) => {
  switch (category) {
    case '古体诗':
    case '回文诗':
      return 'poem-classical'
    case '词':
      return 'poem-ci'
    case '现代诗':
      return 'poem-modern'
    default:
      return ''
  }
}

// 计算相邻诗歌
const prevPoem = computed(() => {
  const currentIndex = poems.findIndex(p => p.id === poem.value.id)
  return currentIndex > 0 ? poems[currentIndex - 1] : null
})

const nextPoem = computed(() => {
  const currentIndex = poems.findIndex(p => p.id === poem.value.id)
  return currentIndex < poems.length - 1 ? poems[currentIndex + 1] : null
})

// 计算相关诗歌（相同分类或标签）
const relatedPoems = computed(() => {
  if (!poem.value.id) return []
  
  return poems
    .filter(p => p.id !== poem.value.id)
    .filter(p => 
      p.category === poem.value.category ||
      p.tags.some(tag => poem.value.tags.includes(tag))
    )
    .slice(0, 3)
})

// 方法
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const toggleFontSize = () => {
  const sizes = ['font-small', 'font-medium', 'font-large']
  const currentIndex = sizes.indexOf(fontSizeClass.value)
  fontSizeClass.value = sizes[(currentIndex + 1) % sizes.length]
}

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(`${poem.value.title}\n\n${poem.value.content}`)
    alert('诗歌已复制到剪贴板')
  } catch (err) {
    console.error('复制失败:', err)
  }
}

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value
  // 这里可以添加保存到本地存储的逻辑
  const message = isFavorite.value ? '已添加到收藏' : '已从收藏中移除'
  alert(message)
}

const sharePoem = () => {
  if (navigator.share) {
    navigator.share({
      title: poem.value.title,
      text: poem.value.description,
      url: window.location.href
    })
  } else {
    copyToClipboard()
    alert('链接已复制到剪贴板，可以分享给朋友')
  }
}

const printPoem = () => {
  window.print()
}

onMounted(() => {
  const poemId = parseInt(route.params.id)
  poem.value = poems.find(p => p.id === poemId) || {}
  
  if (!poem.value.id) {
    alert('诗歌不存在')
  }
  
  // 检查是否已收藏
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
  isFavorite.value = favorites.includes(poemId)
  
  // 更新浏览历史
  const history = JSON.parse(localStorage.getItem('viewHistory') || '[]')
  const newHistory = [poemId, ...history.filter(id => id !== poemId)].slice(0, 10)
  localStorage.setItem('viewHistory', JSON.stringify(newHistory))
})
</script>

<style scoped>
.poem-detail {
  padding: 2rem 0 4rem;
  min-height: 100vh;
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-light);
  margin-bottom: 1.5rem;
  transition: var(--transition);
}

.back-button:hover {
  color: var(--accent-color);
  gap: 0.75rem;
}

/* 诗歌内容卡片 */
.poem-content {
  padding: 3rem;
  margin-bottom: 3rem;
}

/* 诗歌头部 */
.poem-header {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border-color);
}

.poem-meta {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.poem-category {
  font-size: 0.9rem;
  color: var(--accent-color);
  background-color: rgba(139, 115, 85, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 500;
}

.poem-date {
  font-size: 0.9rem;
  color: var(--text-light);
  display: flex;
  align-items: center;
}

.poem-title {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
  line-height: 1.3;
}

.poem-author {
  font-size: 1.1rem;
  color: var(--text-light);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

/* 诗歌正文 */
.poem-body {
  margin-bottom: 3rem;
}

.poem-text {
  font-family: "Ma Shan Zheng", cursive;
  line-height: 2;
  white-space: pre-wrap;
  margin-bottom: 3rem;
  padding: 2rem;
  background-color: var(--background-color);
  border-radius: 8px;
  border-left: 4px solid var(--accent-color);
}

.poem-text.font-small {
  font-size: 1rem;
}

.poem-text.font-medium {
  font-size: 1.1rem;
}

.poem-text.font-large {
  font-size: 1.3rem;
}

.poem-text pre {
  font-family: inherit;
  margin: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.poem-description {
  padding: 1.5rem;
  background-color: rgba(139, 115, 85, 0.05);
  border-radius: 8px;
  border-left: 3px solid var(--accent-color);
}

.poem-description h3 {
  font-size: 1.2rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.poem-description p {
  line-height: 1.8;
  color: var(--text-color);
}

/* 诗歌标签 */
.poem-tags {
  margin-bottom: 3rem;
}

.poem-tags h3 {
  font-size: 1.2rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.poem-tags .tag {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: var(--background-color);
  color: var(--accent-color);
  border-radius: 20px;
  font-size: 0.9rem;
  transition: var(--transition);
  text-decoration: none;
}

.poem-tags .tag:hover {
  background-color: var(--accent-color);
  color: white;
}

/* 诗歌操作 */
.poem-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
}

.action-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background-color: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  cursor: pointer;
  transition: var(--transition);
  color: var(--text-color);
  min-width: 80px;
}

.action-btn:hover {
  background-color: var(--accent-color);
  color: white;
  border-color: var(--accent-color);
  transform: translateY(-3px);
}

.action-btn i {
  font-size: 1.2rem;
}

.action-btn span {
  font-size: 0.85rem;
}

/* 相邻诗歌导航 */
.poem-navigation {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 3rem;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background-color: var(--card-bg);
  border-radius: 8px;
  border: 1px solid var(--border-color);
  transition: var(--transition);
  text-decoration: none;
  color: var(--text-color);
}

.nav-link:hover {
  border-color: var(--accent-color);
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

.nav-link.prev {
  text-align: left;
}

.nav-link.next {
  text-align: right;
  flex-direction: row-reverse;
}

.nav-info {
  flex: 1;
}

.nav-label {
  display: block;
  font-size: 0.9rem;
  color: var(--text-light);
  margin-bottom: 0.25rem;
}

.nav-title {
  display: block;
  font-size: 1.1rem;
  color: var(--primary-color);
  font-weight: 500;
}

.nav-link.placeholder {
  visibility: hidden;
}

/* 相关诗歌 */
.related-poems h2 {
  font-size: 1.8rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
  text-align: center;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

/* 暗色主题优化 */
[data-theme="dark"] .poem-content {
  background-color: var(--card-bg);
  border-color: var(--border-color);
}

[data-theme="dark"] .poem-header {
  border-bottom-color: var(--border-color);
}

[data-theme="dark"] .poem-category {
  background-color: rgba(212, 184, 150, 0.2);
  color: var(--accent-color);
}

[data-theme="dark"] .poem-title {
  color: var(--primary-color);
}

[data-theme="dark"] .poem-author {
  color: var(--text-light);
}

[data-theme="dark"] .poem-text {
  background-color: #3d3d3d;
  border-left-color: var(--accent-color);
  color: var(--text-color);
}

[data-theme="dark"] .poem-description {
  background-color: rgba(212, 184, 150, 0.1);
  border-left-color: var(--accent-color);
}

[data-theme="dark"] .poem-description h3 {
  color: var(--primary-color);
}

[data-theme="dark"] .poem-description p {
  color: var(--text-color);
}

[data-theme="dark"] .poem-tags .tag {
  background-color: rgba(212, 184, 150, 0.2);
  color: var(--accent-color);
}

[data-theme="dark"] .poem-tags .tag:hover {
  background-color: var(--accent-color);
  color: #1a1a1a;
}

[data-theme="dark"] .action-btn {
  background-color: #3d3d3d;
  border-color: #555;
  color: var(--text-light);
}

[data-theme="dark"] .action-btn:hover {
  background-color: var(--accent-color);
  border-color: var(--accent-color);
  color: #1a1a1a;
}

[data-theme="dark"] .nav-link {
  background-color: var(--card-bg);
  border-color: var(--border-color);
  color: var(--text-color);
}

[data-theme="dark"] .nav-link:hover {
  border-color: var(--accent-color);
}

[data-theme="dark"] .nav-title {
  color: var(--primary-color);
}

[data-theme="dark"] .nav-label {
  color: var(--text-light);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .poem-content {
    padding: 2rem;
  }
  
  .poem-title {
    font-size: 2rem;
  }
  
  .poem-text {
    padding: 1.5rem;
  }
  
  .poem-actions {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  
  .action-btn {
    min-width: 70px;
    padding: 0.75rem;
  }
  
  .poem-navigation {
    grid-template-columns: 1fr;
  }
  
  .related-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .poem-content {
    padding: 1.5rem;
  }
  
  .poem-title {
    font-size: 1.8rem;
  }
  
  .poem-text {
    padding: 1rem;
  }
  
  .poem-actions {
    gap: 0.5rem;
  }
  
  .action-btn {
    min-width: 60px;
    padding: 0.5rem;
  }
  
  .action-btn span {
    font-size: 0.75rem;
  }
}

/* 打印样式 */
@media print {
  .back-button,
  .poem-actions,
  .poem-navigation,
  .related-poems {
    display: none;
  }
  
  .poem-content {
    box-shadow: none;
    border: none;
    padding: 0;
  }
  
  .poem-text {
    background: none;
    border: none;
    padding: 0;
  }
}
</style>