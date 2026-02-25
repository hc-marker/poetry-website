<template>
  <div class="poem-card card" @click="goToDetail">
    <div class="poem-card-header">
      <div class="poem-category">{{ poem.category }}</div>
      <div class="poem-date">{{ formatDate(poem.date) }}</div>
    </div>
    
    <div class="poem-card-body">
      <h3 class="poem-title">{{ poem.title }}</h3>
      <p class="poem-description">{{ poem.description }}</p>
      
      <div class="poem-preview">
        {{ getPreview(poem.content) }}
      </div>
    </div>
    
    <div class="poem-card-footer">
      <div class="poem-tags">
        <span 
          v-for="tag in poem.tags.slice(0, 3)" 
          :key="tag" 
          class="tag"
          @click.stop="filterByTag(tag)"
        >
          {{ tag }}
        </span>
        <span v-if="poem.tags.length > 3" class="tag-more">+{{ poem.tags.length - 3 }}</span>
      </div>
      
      <div class="poem-actions">
        <button class="action-btn" @click.stop="copyToClipboard" title="复制">
          <i class="far fa-copy"></i>
        </button>
        <button class="action-btn" @click.stop="toggleFavorite" title="收藏">
          <i :class="isFavorite ? 'fas fa-heart' : 'far fa-heart'"></i>
        </button>
        <button class="action-btn" @click.stop="sharePoem" title="分享">
          <i class="fas fa-share-alt"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  poem: {
    type: Object,
    required: true
  }
})

const router = useRouter()
const isFavorite = ref(false)

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

const getPreview = (content) => {
  // 获取前100个字符作为预览
  const preview = content.replace(/\n/g, ' ').substring(0, 100)
  return preview + (content.length > 100 ? '...' : '')
}

const goToDetail = () => {
  router.push({ name: 'PoemDetail', params: { id: props.poem.id } })
}

const filterByTag = (tag) => {
  router.push({ 
    path: '/poems', 
    query: { tag: tag }
  })
}

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(`${props.poem.title}\n\n${props.poem.content}`)
    alert('已复制到剪贴板')
  } catch (err) {
    console.error('复制失败:', err)
  }
}

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value
  // 这里可以添加保存到本地存储的逻辑
}

const sharePoem = () => {
  if (navigator.share) {
    navigator.share({
      title: props.poem.title,
      text: props.poem.description,
      url: window.location.origin + `/poem/${props.poem.id}`
    })
  } else {
    copyToClipboard()
    alert('链接已复制到剪贴板')
  }
}
</script>

<style scoped>
.poem-card {
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.poem-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem 0.5rem;
  border-bottom: 1px solid var(--border-color);
}

.poem-category {
  font-size: 0.85rem;
  color: var(--accent-color);
  background-color: rgba(139, 115, 85, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-weight: 500;
}

.poem-date {
  font-size: 0.85rem;
  color: var(--text-light);
}

.poem-card-body {
  padding: 1.5rem;
  flex: 1;
}

.poem-title {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: var(--primary-color);
  font-family: "Ma Shan Zheng", cursive;
}

.poem-description {
  font-size: 0.95rem;
  color: var(--text-light);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.poem-preview {
  font-family: "Ma Shan Zheng", cursive;
  font-size: 1rem;
  line-height: 1.8;
  color: var(--text-color);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px dashed var(--border-color);
}

.poem-card-footer {
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--border-color);
  background-color: rgba(248, 245, 240, 0.5);
}

.poem-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag {
  font-size: 0.8rem;
  color: var(--accent-color);
  background-color: rgba(139, 115, 85, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  cursor: pointer;
  transition: var(--transition);
}

.tag:hover {
  background-color: rgba(139, 115, 85, 0.2);
}

.tag-more {
  font-size: 0.8rem;
  color: var(--text-light);
  background-color: rgba(0, 0, 0, 0.05);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
}

.poem-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}

.action-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
  color: var(--text-light);
}

.action-btn:hover {
  background-color: var(--accent-color);
  color: white;
  border-color: var(--accent-color);
  transform: translateY(-2px);
}

/* 暗色主题优化 */
[data-theme="dark"] .poem-card {
  background-color: var(--card-bg);
  border-color: var(--border-color);
}

[data-theme="dark"] .poem-card-header {
  border-bottom-color: var(--border-color);
}

[data-theme="dark"] .poem-category {
  background-color: rgba(212, 184, 150, 0.2);
  color: var(--accent-color);
}

[data-theme="dark"] .poem-card-body {
  color: var(--text-color);
}

[data-theme="dark"] .poem-title {
  color: var(--primary-color);
}

[data-theme="dark"] .poem-description {
  color: var(--text-light);
}

[data-theme="dark"] .poem-preview {
  color: var(--text-color);
  border-top-color: var(--border-color);
}

[data-theme="dark"] .poem-card-footer {
  background-color: rgba(45, 45, 45, 0.8);
  border-top-color: var(--border-color);
}

[data-theme="dark"] .tag {
  background-color: rgba(212, 184, 150, 0.2);
  color: var(--accent-color);
}

[data-theme="dark"] .tag:hover {
  background-color: rgba(212, 184, 150, 0.3);
}

[data-theme="dark"] .tag-more {
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--text-light);
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

/* 响应式设计 */
@media (max-width: 768px) {
  .poem-card-body {
    padding: 1rem;
  }
  
  .poem-title {
    font-size: 1.3rem;
  }
}
</style>