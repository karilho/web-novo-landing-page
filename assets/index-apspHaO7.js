(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{tag:`Arquitetura`,title:`Clean Architecture em projetos Go`,excerpt:`Como estruturar aplicações Go seguindo os princípios de Clean Architecture, separando domínio, casos de uso e infraestrutura.`,date:`08 Jun 2026`,readTime:`8 min`},{tag:`DevOps`,title:`GitOps com GitHub Actions e Docker`,excerpt:`Automatizando deploys com pipelines de CI/CD, construindo imagens Docker e publicando em registries com segurança.`,date:`01 Jun 2026`,readTime:`6 min`},{tag:`Frontend`,title:`TypeScript vanilla sem frameworks`,excerpt:`Por que TS puro é suficiente para muitos projetos e como manter a produtividade sem abstrações pesadas.`,date:`25 Mai 2026`,readTime:`5 min`}],t=[{tag:`Backend`,title:`Go do Zero à Produção`,description:`Aprenda Go desde os fundamentos até deploy em nuvem com testes e observabilidade.`,steps:8,completed:5},{tag:`DevOps`,title:`Docker & Kubernetes Essentials`,description:`Containerização, orquestração e deploy de aplicações em clusters.`,steps:6,completed:3},{tag:`Frontend`,title:`Design Engineering Moderno`,description:`Animações performáticas, acessibilidade e interfaces que encantam.`,steps:5,completed:2},{tag:`Carreira`,title:`De Junior a Senior`,description:`Habilidades técnicas e comportamentais para evoluir na carreira de dev.`,steps:7,completed:4}];function n(e){return`
    <article class="card">
      <span class="card__tag">${e.tag}</span>
      <h3 class="card__title">${e.title}</h3>
      <p class="card__excerpt">${e.excerpt}</p>
      <div class="card__meta">
        <span>${e.date}</span>
        <span class="card__meta-dot"></span>
        <span>${e.readTime} de leitura</span>
      </div>
    </article>
  `}function r(e){let t=Array.from({length:e.steps},(t,n)=>`<div class="roadmap-card__step ${n<e.completed?`roadmap-card__step--active`:``}"></div>`).join(``);return`
    <article class="card roadmap-card">
      <span class="card__tag">${e.tag}</span>
      <h3 class="card__title">${e.title}</h3>
      <p class="card__excerpt">${e.description}</p>
      <div class="roadmap-card__steps">
        ${t}
      </div>
      <div class="card__meta" style="margin-top: 12px">
        <span>${e.completed}/${e.steps} etapas</span>
      </div>
    </article>
  `}function i(){let i=document.getElementById(`blog-grid`),a=document.getElementById(`roadmaps-grid`);i&&(i.innerHTML=e.map(n).join(``)),a&&(a.innerHTML=t.map(r).join(``))}function a(){let e=new IntersectionObserver(t=>{t.forEach(t=>{if(t.isIntersecting){let n=t.target;n.style.opacity=`1`,n.style.transform=`translateY(0)`,e.unobserve(n)}})},{threshold:.1,rootMargin:`0px 0px -40px 0px`});document.querySelectorAll(`.card`).forEach(t=>{let n=t;n.style.opacity=`0`,n.style.transform=`translateY(12px)`,n.style.transition=`opacity 400ms ease, transform 400ms ease`,e.observe(n)})}document.addEventListener(`DOMContentLoaded`,()=>{i(),a()});