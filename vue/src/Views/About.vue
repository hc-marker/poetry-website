<template>
	<div class="about-page">
		<!-- 页面标题 -->
		<div class="page-header">
			<div class="container">
				<div class="header-content">
					<h1>关于作者</h1>
					<p>了解作者生平与创作理念</p>
				</div>
			</div>
		</div>

		<div class="container">
			<!-- 作者简介 -->
			<div class="author-profile">
				<div class="author-card-large card">
					<div class="author-image">
						<i class="fas fa-user-circle"></i>
					</div>
					<div class="author-info">
						<h2>旸谷</h2>
						<div class="author-tags">
							<span class="author-tag">诗人</span>
							<span class="author-tag">写作</span>
							<span class="author-tag">传统文化爱好者</span>
						</div>
						<p class="author-bio">
							陕西武功人，诗词爱好者，热爱传统文化，擅长古体诗、词与现代诗创作。
							作品以山水田园、人生哲理为主题，注重意境的营造与情感的表达。
							希望通过诗词记录生活感悟，传承中华传统文化。
						</p>
						<div class="author-contacts">
							<span class="contact-link">
								<i class="far fa-envelope"></i>
								{{ authorInfo.email }}
							</span>
							<span class="contact-link">
								<i class="fas fa-phone"></i>
								{{ authorInfo.telphone }}
							</span>
							<span class="contact-link">
								<i class="fas fa-map-marker-alt"></i>
								{{ authorInfo.location }}
							</span>
						</div>
					</div>
				</div>
			</div>

			<!-- 创作历程 -->
			<div class="creation-timeline">
				<h2>创作历程</h2>
				<p class="section-description">从初学到创作的心路历程</p>

				<div class="timeline">
					<div class="timeline-item">
						<div class="timeline-date">2010年</div>
						<div class="timeline-content">
							<h3>初识诗词</h3>
							<p>开始接触古典诗词，被其韵律美和意境深所吸引，开始尝试创作简单的古体诗。</p>
						</div>
					</div>

					<div class="timeline-item">
						<div class="timeline-date">2015年</div>
						<div class="timeline-content">
							<h3>深入学习</h3>
							<p>系统学习诗词格律，研究唐宋诗词，开始尝试词牌创作，作品逐渐丰富。</p>
						</div>
					</div>

					<div class="timeline-item">
						<div class="timeline-date">2017年</div>
						<div class="timeline-content">
							<h3>风格形成</h3>
							<p>形成独特的创作风格，以山水田园为主题，注重意境的营造和情感的表达。</p>
						</div>
					</div>

					<div class="timeline-item">
						<div class="timeline-date">2019年至今</div>
						<div class="timeline-content">
							<h3>创作高峰</h3>
							<p>创作了大量诗词作品，尝试多种诗词形式，包括回文诗、现代诗等，作品更加成熟。</p>
						</div>
					</div>
				</div>
			</div>

			<!-- 创作理念 -->
			<div class="creation-philosophy">
				<h2>创作理念</h2>
				<p class="section-description">对诗词创作的理解与追求</p>

				<div class="philosophy-grid">
					<div class="philosophy-card card">
						<div class="philosophy-icon">
							<i class="fas fa-mountain"></i>
						</div>
						<h3>自然之美</h3>
						<p>从自然中汲取灵感，通过诗词表现山水之美、四季之变，追求天人合一的境界。</p>
					</div>

					<div class="philosophy-card card">
						<div class="philosophy-icon">
							<i class="fas fa-heart"></i>
						</div>
						<h3>情感之真</h3>
						<p>以真情实感为基础，抒发内心世界，让诗词成为情感的载体和心灵的寄托。</p>
					</div>

					<div class="philosophy-card card">
						<div class="philosophy-icon">
							<i class="fas fa-pen-fancy"></i>
						</div>
						<h3>文字之精</h3>
						<p>注重文字的锤炼，追求语言的精炼与优美，让每个字都恰到好处。</p>
					</div>

					<div class="philosophy-card card">
						<div class="philosophy-icon">
							<i class="fas fa-history"></i>
						</div>
						<h3>传承之责</h3>
						<p>继承中华诗词传统，同时探索现代表达方式，让传统文化在新时代焕发新生。</p>
					</div>
				</div>
			</div>

			<!-- 统计信息 -->
			<div class="statistics-section">
				<h2>创作统计</h2>
				<p class="section-description">作品数量与分类统计</p>

				<div class="statistics-grid">
					<div class="statistic-card card">
						<div class="statistic-chart">
							<div class="chart-circle" style="--percentage: 70">
								<span>70%</span>
							</div>
						</div>
						<div class="statistic-info">
							<h3>古体诗占比</h3>
							<p>作品以古体诗为主，占全部作品的70%</p>
						</div>
					</div>

					<div class="statistic-card card">
						<div class="statistic-chart">
							<div class="chart-circle" style="--percentage: 30">
								<span>30%</span>
							</div>
						</div>
						<div class="statistic-info">
							<h3>现代作品占比</h3>
							<p>词、现代诗、散文等占全部作品的30%</p>
						</div>
					</div>

					<div class="statistic-card card">
						<div class="statistic-chart">
							<div class="chart-bar" style="--height: 80">
								<span>80%</span>
							</div>
						</div>
						<div class="statistic-info">
							<h3>山水主题</h3>
							<p>80%的作品以山水田园为主题</p>
						</div>
					</div>

					<div class="statistic-card card">
						<div class="statistic-chart">
							<div class="chart-bar" style="--height: 60">
								<span>60%</span>
							</div>
						</div>
						<div class="statistic-info">
							<h3>情感表达</h3>
							<p>60%的作品包含情感抒发</p>
						</div>
					</div>
				</div>
			</div>

			<!-- 联系作者 -->
			<div class="contact-section">
				<h2>联系作者</h2>
				<p class="section-description">欢迎交流与合作</p>

				<div class="contact-form card">
					<form @submit.prevent="submitContactForm">
						<div class="form-grid">
							<div class="form-group">
								<label for="name">姓名</label>
								<input type="text" id="name" v-model="contactForm.name" required placeholder="请输入您的姓名">
							</div>

							<div class="form-group">
								<label for="email">邮箱</label>
								<input type="email" id="email" v-model="contactForm.email" required
									placeholder="请输入您的邮箱">
							</div>
						</div>

						<div class="form-group">
							<label for="subject">主题</label>
							<input type="text" id="subject" v-model="contactForm.subject" required
								placeholder="请输入邮件主题">
						</div>

						<div class="form-group">
							<label for="message">留言</label>
							<textarea id="message" v-model="contactForm.message" rows="5" required
								placeholder="请输入您的留言内容..."></textarea>
						</div>

						<button type="submit" class="btn btn-primary" :disabled="sending">
							<i class="fas fa-paper-plane"></i>
							{{ sending ? '发送中...' : '发送留言' }}
						</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		authorInfo
	} from '../data/poems.js'

	const contactForm = ref({
		name: '',
		email: '',
		subject: '',
		message: ''
	})

	const sending = ref(false)

	const submitContactForm = () => {
		sending.value = true

		// 模拟发送过程
		setTimeout(() => {
			alert('留言已发送！感谢您的联系。')
			contactForm.value = {
				name: '',
				email: '',
				subject: '',
				message: ''
			}
			sending.value = false
		}, 1500)
	}
</script>

<style scoped>
	.about-page {
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

	/* 作者简介 */
	.author-profile {
		margin-bottom: 4rem;
	}

	.author-card-large {
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
		font-size: 10rem;
		color: var(--accent-color);
	}

	.author-info h2 {
		font-size: 3rem;
		color: var(--primary-color);
		margin-bottom: 1rem;
	}

	.author-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 1.5rem;
	}

	.author-tag {
		padding: 0.5rem 1rem;
		background-color: rgba(139, 115, 85, 0.1);
		color: var(--accent-color);
		border-radius: 20px;
		font-size: 0.9rem;
	}

	.author-bio {
		font-size: 1.1rem;
		line-height: 1.8;
		color: var(--text-color);
		margin-bottom: 2rem;
	}

	.author-contacts {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.contact-link {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		color: var(--text-color);
		text-decoration: none;
		transition: var(--transition);
	}

	.contact-link:hover {
		color: var(--accent-color);
		gap: 1rem;
	}

	.contact-link i {
		width: 20px;
		color: var(--accent-color);
	}

	/* 创作历程 */
	.creation-timeline,
	.creation-philosophy,
	.statistics-section,
	.contact-section {
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

	.timeline {
		position: relative;
		padding-left: 2rem;
	}

	.timeline::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: 2px;
		background-color: var(--accent-color);
	}

	.timeline-item {
		position: relative;
		margin-bottom: 2rem;
		padding-left: 2rem;
	}

	.timeline-item:last-child {
		margin-bottom: 0;
	}

	.timeline-item::before {
		content: '';
		position: absolute;
		left: -9px;
		top: 0;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background-color: var(--accent-color);
		border: 3px solid white;
		box-shadow: 0 0 0 2px var(--accent-color);
	}

	.timeline-date {
		font-weight: bold;
		color: var(--accent-color);
		margin-bottom: 0.5rem;
		font-size: 1.1rem;
	}

	.timeline-content h3 {
		font-size: 1.3rem;
		color: var(--primary-color);
		margin-bottom: 0.5rem;
	}

	.timeline-content p {
		color: var(--text-color);
		line-height: 1.6;
	}

	/* 创作理念 */
	.philosophy-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
	}

	.philosophy-card {
		padding: 2rem;
		text-align: center;
		transition: var(--transition);
	}

	.philosophy-card:hover {
		transform: translateY(-5px);
		box-shadow: var(--shadow-hover);
	}

	.philosophy-icon {
		width: 70px;
		height: 70px;
		border-radius: 50%;
		background-color: rgba(139, 115, 85, 0.1);
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 1.5rem;
		color: var(--accent-color);
		font-size: 1.8rem;
	}

	.philosophy-card h3 {
		font-size: 1.3rem;
		color: var(--primary-color);
		margin-bottom: 1rem;
	}

	.philosophy-card p {
		color: var(--text-color);
		line-height: 1.6;
	}

	/* 统计信息 */
	.statistics-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
	}

	.statistic-card {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		padding: 1.5rem;
	}

	.statistic-chart {
		flex-shrink: 0;
	}

	.chart-circle {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		background: conic-gradient(var(--accent-color) calc(var(--percentage) * 1%), var(--background-color) 0);
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.chart-circle::before {
		content: '';
		position: absolute;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background-color: white;
	}

	.chart-circle span {
		position: relative;
		z-index: 1;
		font-weight: bold;
		color: var(--accent-color);
		font-size: 1.2rem;
	}

	.chart-bar {
		width: 80px;
		height: 80px;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		background-color: var(--background-color);
		border-radius: 4px;
		position: relative;
	}

	.chart-bar::before {
		content: '';
		position: absolute;
		bottom: 0;
		width: 40px;
		height: calc(var(--height) * 0.8%);
		background-color: var(--accent-color);
		border-radius: 4px 4px 0 0;
	}

	.chart-bar span {
		position: relative;
		z-index: 1;
		margin-bottom: 5px;
		font-weight: bold;
		color: var(--accent-color);
		font-size: 1.2rem;
	}

	.statistic-info h3 {
		font-size: 1.2rem;
		color: var(--primary-color);
		margin-bottom: 0.5rem;
	}

	.statistic-info p {
		color: var(--text-color);
		font-size: 0.9rem;
		line-height: 1.5;
	}

	/* 联系表单 */
	.contact-form {
		padding: 2rem;
	}

	.form-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
		margin-bottom: 1.5rem;
	}

	.form-group {
		margin-bottom: 1.5rem;
	}

	.form-group label {
		display: block;
		margin-bottom: 0.5rem;
		color: var(--text-color);
		font-weight: 500;
	}

	.form-group input,
	.form-group textarea {
		width: 100%;
		padding: 0.75rem 1rem;
		border: 1px solid var(--border-color);
		border-radius: 4px;
		font-family: "Noto Serif SC", serif;
		font-size: 1rem;
		color: var(--text-color);
		background-color: white;
		transition: var(--transition);
	}

	.form-group input:focus,
	.form-group textarea:focus {
		outline: none;
		border-color: var(--accent-color);
		box-shadow: 0 0 0 3px rgba(139, 115, 85, 0.1);
	}

	.form-group textarea {
		resize: vertical;
		min-height: 120px;
	}

	.contact-form button {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
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

	[data-theme="dark"] .author-card-large {
		background-color: var(--card-bg);
		border-color: var(--border-color);
	}

	[data-theme="dark"] .author-info h2 {
		color: var(--primary-color);
	}

	[data-theme="dark"] .author-tag {
		background-color: rgba(212, 184, 150, 0.2);
		color: var(--accent-color);
	}

	[data-theme="dark"] .author-bio {
		color: var(--text-color);
	}

	[data-theme="dark"] .contact-link {
		color: var(--text-color);
	}

	[data-theme="dark"] .contact-link:hover {
		color: var(--accent-color);
	}

	[data-theme="dark"] h2 {
		color: var(--primary-color);
	}

	[data-theme="dark"] .section-description {
		color: var(--text-light);
	}

	[data-theme="dark"] .timeline::before {
		background-color: var(--accent-color);
	}

	[data-theme="dark"] .timeline-item::before {
		background-color: var(--accent-color);
		border-color: var(--background-color);
		box-shadow: 0 0 0 2px var(--accent-color);
	}

	[data-theme="dark"] .timeline-date {
		color: var(--accent-color);
	}

	[data-theme="dark"] .timeline-content h3 {
		color: var(--primary-color);
	}

	[data-theme="dark"] .timeline-content p {
		color: var(--text-color);
	}

	[data-theme="dark"] .philosophy-card {
		background-color: var(--card-bg);
		border-color: var(--border-color);
	}

	[data-theme="dark"] .philosophy-icon {
		background-color: rgba(212, 184, 150, 0.1);
		color: var(--accent-color);
	}

	[data-theme="dark"] .philosophy-card h3 {
		color: var(--primary-color);
	}

	[data-theme="dark"] .philosophy-card p {
		color: var(--text-color);
	}

	[data-theme="dark"] .statistic-card {
		background-color: var(--card-bg);
		border-color: var(--border-color);
	}

	[data-theme="dark"] .chart-circle::before {
		background-color: var(--card-bg);
	}

	[data-theme="dark"] .chart-circle span {
		color: var(--accent-color);
	}

	[data-theme="dark"] .chart-bar {
		background-color: #3d3d3d;
	}

	[data-theme="dark"] .chart-bar span {
		color: var(--accent-color);
	}

	[data-theme="dark"] .statistic-info h3 {
		color: var(--primary-color);
	}

	[data-theme="dark"] .statistic-info p {
		color: var(--text-color);
	}

	[data-theme="dark"] .contact-form {
		background-color: var(--card-bg);
		border-color: var(--border-color);
	}

	[data-theme="dark"] .form-group label {
		color: var(--text-color);
	}

	[data-theme="dark"] .form-group input,
	[data-theme="dark"] .form-group textarea {
		background-color: #3d3d3d;
		border-color: #555;
		color: var(--text-color);
	}

	[data-theme="dark"] .form-group input:focus,
	[data-theme="dark"] .form-group textarea:focus {
		border-color: var(--accent-color);
		box-shadow: 0 0 0 3px rgba(212, 184, 150, 0.2);
	}

	/* 响应式设计 */
	@media (max-width: 1024px) {
		.author-card-large {
			grid-template-columns: 1fr;
			text-align: center;
			gap: 2rem;
		}

		.author-contacts {
			align-items: center;
		}
	}

	@media (max-width: 768px) {
		.form-grid {
			grid-template-columns: 1fr;
		}

		.philosophy-grid,
		.statistics-grid {
			grid-template-columns: 1fr;
		}

		.statistic-card {
			flex-direction: column;
			text-align: center;
		}
	}

	@media (max-width: 480px) {
		.author-card-large {
			padding: 1.5rem;
		}

		.author-info h2 {
			font-size: 2rem;
		}

		.author-image i {
			font-size: 6rem;
		}

		.contact-form {
			padding: 1.5rem;
		}

		h2 {
			font-size: 1.8rem;
		}
	}
</style>