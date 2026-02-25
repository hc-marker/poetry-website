<template>
  <div class="category-filter">
    <div class="filter-header">
      <h3>分类浏览</h3>
      <button 
        class="btn btn-outline" 
        @click="resetFilters"
        v-if="activeCategory !== 'all' || activeTag"
      >
        重置筛选
      </button>
    </div>
    
    <div class="categories">
      <button
        v-for="category in categories"
        :key="category.id"
        class="category-item"
        :class="{ active: activeCategory === category.id }"
        @click="filterByCategory(category.id)"
      >
        <span class="category-name">{{ category.name }}</span>
        <span class="category-count">{{ category.count }}</span>
      </button>
    </div>
    
    <div class="tags-section" v-if="tags.length > 0">
      <h4>热门标签</h4>
      <div class="tags">
        <button
          v-for="tag in tags"
          :key="tag"
          class="tag-item"
          :class="{ active: activeTag === tag }"
          @click="filterByTag(tag)"
        >
          {{ tag }}
        </button>
      </div>
    </div>
    
    <div class="sort-section">
      <h4>排序方式</h4>
      <div class="sort-options">
        <button
          v-for="option in sortOptions"
          :key="option.value"
          class="sort-item"
          :class="{ active: sortBy === option.value }"
          @click="setSort(option.value)"
        >
          {{ option.label }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  categories: {
    type: Array,
    required: true
  },
  tags: {
    type: Array,
    required: true
  }
})

const router = useRouter()
const activeCategory = ref('all')
const activeTag = ref('')
const sortBy = ref('date-desc')

const sortOptions = [
  { value: 'date-desc', label: '最新发布' },
  { value: 'date-asc', label: '最早发布' },
  { value: 'title', label: '标题顺序' }
]

const filterByCategory = (categoryId) => {
  activeCategory.value = categoryId
  updateRouter()
}

const filterByTag = (tag) => {
  activeTag.value = tag
  updateRouter()
}

const setSort = (sortValue) => {
  sortBy.value = sortValue
  updateRouter()
}

const resetFilters = () => {
  activeCategory.value = 'all'
  activeTag.value = ''
  sortBy.value = 'date-desc'
  updateRouter()
}

const updateRouter = () => {
  const query = {}
  if (activeCategory.value !== 'all') query.category = activeCategory.value
  if (activeTag.value) query.tag = activeTag.value
  if (sortBy.value !== 'date-desc') query.sort = sortBy.value
  
  router.push({ 
    path: '/poems', 
    query: query 
  })
}
</script>

<style scoped>
.category-filter {
  background-color: var(--card-bg);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: var(--shadow);
  position: sticky;
  top: 100px;
}

.filter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
}

.filter-header h3 {
  font-size: 1.2rem;
  color: var(--primary-color);
  margin: 0;
}

.categories {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.category-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background-color: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  cursor: pointer;
  transition: var(--transition);
  text-align: left;
  font-family: "Noto Serif SC", serif;
  font-size: 0.95rem;
}

.category-item:hover {
  background-color: rgba(139, 115, 85, 0.1);
  border-color: var(--accent-color);
  transform: translateX(5px);
}

.category-item.active {
  background-color: var(--accent-color);
  border-color: var(--accent-color);
  color: white;
}

.category-name {
  font-weight: 500;
}

.category-count {
  font-size: 0.85rem;
  opacity: 0.8;
}

.tags-section, .sort-section {
  margin-bottom: 2rem;
}

.tags-section h4, .sort-section h4 {
  font-size: 1rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-weight: 600;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag-item {
  padding: 0.5rem 0.75rem;
  background-color: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: var(--transition);
}

.tag-item:hover {
  background-color: rgba(139, 115, 85, 0.1);
  border-color: var(--accent-color);
}

.tag-item.active {
  background-color: var(--accent-color);
  border-color: var(--accent-color);
  color: white;
}

.sort-options {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.sort-item {
  padding: 0.75rem 1rem;
  background-color: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  text-align: left;
  cursor: pointer;
  transition: var(--transition);
  font-family: "Noto Serif SC", serif;
  font-size: 0.95rem;
}

.sort-item:hover {
  background-color: rgba(139, 115, 85, 0.1);
  border-color: var(--accent-color);
}

.sort-item.active {
  background-color: var(--accent-color);
  border-color: var(--accent-color);
  color: white;
}

/* 暗色主题优化 */
[data-theme="dark"] .category-filter {
  background-color: var(--card-bg);
  border-color: var(--border-color);
}

[data-theme="dark"] .filter-header {
  border-bottom-color: var(--border-color);
}

[data-theme="dark"] .filter-header h3 {
  color: var(--primary-color);
}

[data-theme="dark"] .category-item {
  background-color: #3d3d3d;
  border-color: #555;
  color: var(--text-color);
}

[data-theme="dark"] .category-item:hover {
  background-color: rgba(212, 184, 150, 0.2);
  border-color: var(--accent-color);
}

[data-theme="dark"] .category-item.active {
  background-color: var(--accent-color);
  border-color: var(--accent-color);
  color: #1a1a1a;
}

[data-theme="dark"] .tag-item {
  background-color: #3d3d3d;
  border-color: #555;
  color: var(--text-color);
}

[data-theme="dark"] .tag-item:hover {
  background-color: rgba(212, 184, 150, 0.2);
  border-color: var(--accent-color);
}

[data-theme="dark"] .tag-item.active {
  background-color: var(--accent-color);
  border-color: var(--accent-color);
  color: #1a1a1a;
}

[data-theme="dark"] .sort-item {
  background-color: #3d3d3d;
  border-color: #555;
  color: var(--text-color);
}

[data-theme="dark"] .sort-item:hover {
  background-color: rgba(212, 184, 150, 0.2);
  border-color: var(--accent-color);
}

[data-theme="dark"] .sort-item.active {
  background-color: var(--accent-color);
  border-color: var(--accent-color);
  color: #1a1a1a;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .category-filter {
    position: static;
    margin-bottom: 2rem;
  }
}
</style>