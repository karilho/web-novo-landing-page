import './style.css'

/* ===== Data ===== */
interface BlogPost {
  tag: string
  title: string
  excerpt: string
  date: string
  readTime: string
}

interface Roadmap {
  tag: string
  title: string
  description: string
  steps: number
  completed: number
}

const blogPosts: BlogPost[] = [
  {
    tag: 'Arquitetura',
    title: 'Clean Architecture em projetos Go',
    excerpt:
      'Como estruturar aplicações Go seguindo os princípios de Clean Architecture, separando domínio, casos de uso e infraestrutura.',
    date: '08 Jun 2026',
    readTime: '8 min',
  },
  {
    tag: 'DevOps',
    title: 'GitOps com GitHub Actions e Docker',
    excerpt:
      'Automatizando deploys com pipelines de CI/CD, construindo imagens Docker e publicando em registries com segurança.',
    date: '01 Jun 2026',
    readTime: '6 min',
  },
  {
    tag: 'Frontend',
    title: 'TypeScript vanilla sem frameworks',
    excerpt:
      'Por que TS puro é suficiente para muitos projetos e como manter a produtividade sem abstrações pesadas.',
    date: '25 Mai 2026',
    readTime: '5 min',
  },
]

const roadmaps: Roadmap[] = [
  {
    tag: 'Backend',
    title: 'Go do Zero à Produção',
    description: 'Aprenda Go desde os fundamentos até deploy em nuvem com testes e observabilidade.',
    steps: 8,
    completed: 5,
  },
  {
    tag: 'DevOps',
    title: 'Docker & Kubernetes Essentials',
    description: 'Containerização, orquestração e deploy de aplicações em clusters.',
    steps: 6,
    completed: 3,
  },
  {
    tag: 'Frontend',
    title: 'Design Engineering Moderno',
    description: 'Animações performáticas, acessibilidade e interfaces que encantam.',
    steps: 5,
    completed: 2,
  },
  {
    tag: 'Carreira',
    title: 'De Junior a Senior',
    description: 'Habilidades técnicas e comportamentais para evoluir na carreira de dev.',
    steps: 7,
    completed: 4,
  },
]

/* ===== Render ===== */
function createBlogCard(post: BlogPost): string {
  return `
    <article class="card">
      <span class="card__tag">${post.tag}</span>
      <h3 class="card__title">${post.title}</h3>
      <p class="card__excerpt">${post.excerpt}</p>
      <div class="card__meta">
        <span>${post.date}</span>
        <span class="card__meta-dot"></span>
        <span>${post.readTime} de leitura</span>
      </div>
    </article>
  `
}

function createRoadmapCard(rm: Roadmap): string {
  const stepsHtml = Array.from({ length: rm.steps }, (_, i) => {
    const active = i < rm.completed ? 'roadmap-card__step--active' : ''
    return `<div class="roadmap-card__step ${active}"></div>`
  }).join('')

  return `
    <article class="card roadmap-card">
      <span class="card__tag">${rm.tag}</span>
      <h3 class="card__title">${rm.title}</h3>
      <p class="card__excerpt">${rm.description}</p>
      <div class="roadmap-card__steps">
        ${stepsHtml}
      </div>
      <div class="card__meta" style="margin-top: 12px">
        <span>${rm.completed}/${rm.steps} etapas</span>
      </div>
    </article>
  `
}

function render() {
  const blogGrid = document.getElementById('blog-grid')
  const roadmapsGrid = document.getElementById('roadmaps-grid')

  if (blogGrid) {
    blogGrid.innerHTML = blogPosts.map(createBlogCard).join('')
  }

  if (roadmapsGrid) {
    roadmapsGrid.innerHTML = roadmaps.map(createRoadmapCard).join('')
  }
}

/* ===== Intersection Observer for fade-in ===== */
function initFadeIn() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          observer.unobserve(el)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  )

  document.querySelectorAll('.card').forEach((card) => {
    const el = card as HTMLElement
    el.style.opacity = '0'
    el.style.transform = 'translateY(12px)'
    el.style.transition = 'opacity 400ms ease, transform 400ms ease'
    observer.observe(el)
  })
}

/* ===== Init ===== */
document.addEventListener('DOMContentLoaded', () => {
  render()
  initFadeIn()
})
