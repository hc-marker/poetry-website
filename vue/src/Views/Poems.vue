<template>
  <div class="poems-page">
    <!-- 页面标题 -->
    <div class="page-header">
      <div class="container">
        <div class="header-content">
          <h1>诗集浏览</h1>
          <p>共 {{ filteredPoems.length }} 篇作品</p>
          
          <!-- 搜索框 -->
          <div class="search-box">
            <i class="fas fa-search"></i>
            <input 
              type="text" 
              v-model="searchTerm"
              placeholder="搜索诗词标题、内容或标签..."
              @input="handleSearch"
            >
            <button class="btn btn-primary" @click="handleSearch">
              搜索
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="poems-container">
        <!-- 侧边栏筛选 -->
        <aside class="sidebar">
          <CategoryFilter 
            :categories="categories"
            :tags="tags"
          />
        </aside>

        <!-- 主内容区 -->
        <main class="main-content">
          <!-- 筛选信息 -->
          <div v-if="activeFilter" class="filter-info">
            <div class="filter-tags">
              <span class="filter-tag" v-if="$route.query.category">
                分类: {{ getCategoryName($route.query.category) }}
                <button @click="removeFilter('category')" class="remove-filter">
                  <i class="fas fa-times"></i>
                </button>
              </span>
              <span class="filter-tag" v-if="$route.query.tag">
                标签: {{ $route.query.tag }}
                <button @click="removeFilter('tag')" class="remove-filter">
                  <i class="fas fa-times"></i>
                </button>
              </span>
              <span class="filter-tag" v-if="$route.query.search">
                搜索: "{{ $route.query.search }}"
                <button @click="removeFilter('search')" class="remove-filter">
                  <i class="fas fa-times"></i>
                </button>
              </span>
            </div>
            <button 
              v-if="activeFilter" 
              @click="clearAllFilters"
              class="btn btn-outline"
            >
              清除所有筛选
            </button>
          </div>

          <!-- 排序选项 -->
          <div class="sort-options">
            <div class="sort-by">
              <span>排序方式:</span>
              <select v-model="sortBy" @change="handleSort">
                <option value="date-desc">最新发布</option>
                <option value="date-asc">最早发布</option>
                <option value="title">标题顺序</option>
              </select>
            </div>
            <div class="view-toggle">
              <button 
                :class="{ active: viewMode === 'grid' }"
                @click="viewMode = 'grid'"
                title="网格视图"
              >
                <i class="fas fa-th-large"></i>
              </button>
              <button 
                :class="{ active: viewMode === 'list' }"
                @click="viewMode = 'list'"
                title="列表视图"
              >
                <i class="fas fa-list"></i>
              </button>
            </div>
          </div>

          <!-- 诗集列表 -->
          <div v-if="filteredPoems.length > 0" :class="['poems-grid', viewMode]">
            <PoemCard
              v-for="poem in paginatedPoems"
              :key="poem.id"
              :poem="poem"
              :class="viewMode"
            />
          </div>

          <!-- 空状态 -->
          <div v-else class="empty-state">
            <i class="fas fa-book-open fa-3x"></i>
            <h3>未找到相关作品</h3>
            <p>尝试调整筛选条件或搜索关键词</p>
            <button @click="clearAllFilters" class="btn btn-primary">
              显示所有作品
            </button>
          </div>

          <!-- 分页 -->
          <div v-if="totalPages > 1" class="pagination">
            <button 
              @click="prevPage"
              :disabled="currentPage === 1"
              class="pagination-btn"
            >
              <i class="fas fa-chevron-left"></i>
            </button>
            
            <button
              v-for="page in visiblePages"
              :key="page"
              @click="goToPage(page)"
              :class="{ active: currentPage === page }"
              class="pagination-btn"
            >
              {{ page }}
            </button>
            
            <button 
              @click="nextPage"
              :disabled="currentPage === totalPages"
              class="pagination-btn"
            >
              <i class="fas fa-chevron-right"></i>
            </button>
            
            <span class="page-info">
              第 {{ currentPage }} 页，共 {{ totalPages }} 页
            </span>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PoemCard from '../components/PoemCard.vue'
import CategoryFilter from '../components/CategoryFilter.vue'
import { poems, categories, tags } from '../data/poems.js'

const route = useRoute()
const router = useRouter()

// 响应式数据
const searchTerm = ref('')
const viewMode = ref('grid')
const sortBy = ref('date-desc')
const currentPage = ref(1)
const pageSize = 6

// 计算属性
const filteredPoems = computed(() => {
  let result = [...poems]
  
  // 按分类筛选
  if (route.query.category && route.query.category !== 'all') {
    result = result.filter(poem => {
      const categoryMap = {
        'guti': '古体诗',
        'ci': '词',
		'fu': '赋',
        'modern': '现代诗',
        'prose': '散文'
      }
      return poem.category === categoryMap[route.query.category]
    })
  }
  
  // 按标签筛选
  if (route.query.tag) {
    result = result.filter(poem => 
      poem.tags.some(tag => 
        tag.toLowerCase().includes(route.query.tag.toLowerCase())
      )
    )
  }
  
  // 按搜索词筛选
  if (route.query.search) {
    const search = route.query.search.toLowerCase()
    result = result.filter(poem => 
      poem.title.toLowerCase().includes(search) ||
      poem.content.toLowerCase().includes(search) ||
      poem.description.toLowerCase().includes(search) ||
      poem.tags.some(tag => tag.toLowerCase().includes(search))
    )
  }
  
  // 排序
  switch (sortBy.value) {
    case 'date-desc':
      result.sort((a, b) => new Date(b.date) - new Date(a.date))
      break
    case 'date-asc':
      result.sort((a, b) => new Date(a.date) - new Date(b.date))
      break
    case 'title':
      result.sort((a, b) => a.title.localeCompare(b.title, 'zh-CN'))
      break
  }
  
  return result
})

const activeFilter = computed(() => {
  return route.query.category || route.query.tag || route.query.search
})

const totalPages = computed(() => {
  return Math.ceil(filteredPoems.value.length / pageSize)
})

const paginatedPoems = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  const end = start + pageSize
  return filteredPoems.value.slice(start, end)
})

const visiblePages = computed(() => {
  const pages = []
  const maxVisible = 5
  
  let start = Math.max(1, currentPage.value - Math.floor(maxVisible / 2))
  let end = Math.min(totalPages.value, start + maxVisible - 1)
  
  if (end - start + 1 < maxVisible) {
    start = Math.max(1, end - maxVisible + 1)
  }
  
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  
  return pages
})

// 方法
const handleSearch = () => {
  if (searchTerm.value.trim()) {
    router.push({ 
      path: '/poems', 
      query: { ...route.query, search: searchTerm.value.trim() }
    })
  } else {
    const query = { ...route.query }
    delete query.search
    router.push({ path: '/poems', query })
  }
  currentPage.value = 1
}

const handleSort = () => {
  router.push({ 
    path: '/poems', 
    query: { ...route.query, sort: sortBy.value }
  })
}

const getCategoryName = (categoryId) => {
  const category = categories.find(c => c.id === categoryId)
  return category ? category.name : categoryId
}

const removeFilter = (filterType) => {
  const query = { ...route.query }
  delete query[filterType]
  router.push({ path: '/poems', query })
  currentPage.value = 1
}

const clearAllFilters = () => {
  router.push({ path: '/poems' })
  searchTerm.value = ''
  currentPage.value = 1
}

const goToPage = (page) => {
  currentPage.value = page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

// 监听路由变化
watch(() => route.query, () => {
  currentPage.value = 1
  
  // 更新排序
  if (route.query.sort) {
    sortBy.value = route.query.sort
  }
  
  // 更新搜索框
  if (route.query.search) {
    searchTerm.value = route.query.search
  }
}, { immediate: true })

onMounted(() => {
  // 初始化搜索框
  if (route.query.search) {
    searchTerm.value = route.query.search
  }
  
  // 初始化排序
  if (route.query.sort) {
    sortBy.value = route.query.sort
  }
})
</script>

<style scoped>
.poems-page {
  min-height: 100vh;
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
  margin-bottom: 2rem;
}

.search-box {
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  display: flex;
  gap: 0.5rem;
}

.search-box i {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-light);
  z-index: 1;
}

.search-box input {
  flex: 1;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: white;
  font-family: "Noto Serif SC", serif;
  font-size: 1rem;
  transition: var(--transition);
}

.search-box input:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 3px rgba(139, 115, 85, 0.1);
}

.search-box button {
  white-space: nowrap;
}

.poems-container {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
  padding: 2rem 0;
}

/* 筛选信息 */
.filter-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: rgba(139, 115, 85, 0.05);
  border-radius: 8px;
  margin-bottom: 1.5rem;
  border: 1px solid var(--border-color);
}

.filter-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.filter-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: var(--accent-color);
  color: white;
  border-radius: 20px;
  font-size: 0.9rem;
}

.remove-filter {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0;
  font-size: 0.8rem;
  transition: var(--transition);
}

.remove-filter:hover {
  transform: scale(1.2);
}

/* 排序选项 */
.sort-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
}

.sort-by {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.sort-by span {
  color: var(--text-light);
  font-size: 0.9rem;
}

.sort-by select {
  padding: 0.5rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: white;
  font-family: "Noto Serif SC", serif;
  font-size: 0.9rem;
  color: var(--text-color);
  cursor: pointer;
}

.sort-by select:focus {
  outline: none;
  border-color: var(--accent-color);
}

.view-toggle {
  display: flex;
  gap: 0.25rem;
}

.view-toggle button {
  width: 40px;
  height: 40px;
  border: 1px solid var(--border-color);
  background-color: white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
  color: var(--text-light);
}

.view-toggle button:hover {
  border-color: var(--accent-color);
  color: var(--accent-color);
}

.view-toggle button.active {
  background-color: var(--accent-color);
  border-color: var(--accent-color);
  color: white;
}

/* 诗集网格 */
.poems-grid {
  display: grid;
  gap: 2rem;
  margin-bottom: 3rem;
}

.poems-grid.grid {
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

.poems-grid.list {
  grid-template-columns: 1fr;
}

.poems-grid.list .poem-card {
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: auto;
}

.poems-grid.list .poem-card-header {
  grid-column: 1 / -1;
}

.poems-grid.list .poem-card-body {
  border-right: 1px solid var(--border-color);
}

.poems-grid.list .poem-card-footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* 空状态 */
.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  color: var(--text-light);
}

.empty-state i {
  margin-bottom: 1.5rem;
  color: var(--border-color);
}

.empty-state h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.empty-state p {
  margin-bottom: 2rem;
}

/* 分页 */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
}

.pagination-btn {
  width: 40px;
  height: 40px;
  border: 1px solid var(--border-color);
  background-color: white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
  color: var(--text-color);
}

.pagination-btn:hover:not(:disabled) {
  border-color: var(--accent-color);
  color: var(--accent-color);
}

.pagination-btn.active {
  background-color: var(--accent-color);
  border-color: var(--accent-color);
  color: white;
}

.pagination-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-info {
  margin-left: 1rem;
  color: var(--text-light);
  font-size: 0.9rem;
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

[data-theme="dark"] .search-box input {
  background-color: #3d3d3d;
  border-color: #555;
  color: var(--text-color);
}

[data-theme="dark"] .search-box input:focus {
  border-color: var(--accent-color);
  background-color: #444;
}

[data-theme="dark"] .filter-info {
  background-color: rgba(212, 184, 150, 0.1);
  border-color: var(--border-color);
}

[data-theme="dark"] .filter-tag {
  background-color: var(--accent-color);
  color: #1a1a1a;
}

[data-theme="dark"] .sort-by select {
  background-color: #3d3d3d;
  border-color: #555;
  color: var(--text-color);
}

[data-theme="dark"] .sort-by select:focus {
  border-color: var(--accent-color);
}

[data-theme="dark"] .view-toggle button {
  background-color: #3d3d3d;
  border-color: #555;
  color: var(--text-light);
}

[data-theme="dark"] .view-toggle button:hover {
  border-color: var(--accent-color);
  color: var(--accent-color);
}

[data-theme="dark"] .view-toggle button.active {
  background-color: var(--accent-color);
  border-color: var(--accent-color);
  color: #1a1a1a;
}

[data-theme="dark"] .empty-state {
  color: var(--text-light);
}

[data-theme="dark"] .empty-state h3 {
  color: var(--primary-color);
}

[data-theme="dark"] .pagination-btn {
  background-color: #3d3d3d;
  border-color: #555;
  color: var(--text-color);
}

[data-theme="dark"] .pagination-btn:hover:not(:disabled) {
  border-color: var(--accent-color);
  color: var(--accent-color);
}

[data-theme="dark"] .pagination-btn.active {
  background-color: var(--accent-color);
  border-color: var(--accent-color);
  color: #1a1a1a;
}

[data-theme="dark"] .page-info {
  color: var(--text-light);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .poems-container {
    grid-template-columns: 1fr;
  }
  
  .sidebar {
    order: 2;
  }
  
  .main-content {
    order: 1;
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 2rem 0;
  }
  
  .header-content h1 {
    font-size: 2rem;
  }
  
  .search-box {
    flex-direction: column;
  }
  
  .search-box input {
    width: 100%;
  }
  
  .filter-info {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
  
  .poems-grid.grid {
    grid-template-columns: 1fr;
  }
  
  .poems-grid.list .poem-card {
    grid-template-columns: 1fr;
  }
  
  .poems-grid.list .poem-card-body {
    border-right: none;
    border-bottom: 1px solid var(--border-color);
  }
}

@media (max-width: 480px) {
  .sort-options {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
  
  .view-toggle {
    align-self: flex-end;
  }
}
</style>