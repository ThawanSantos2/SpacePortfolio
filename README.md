# 🚀 Portfólio Thawan Santos - Desenvolvedor Full-Stack

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-0.169-black?style=for-the-badge&logo=three.js)](https://threejs.org/)

## 📋 Sobre o Projeto

Portfólio profissional moderno e interativo desenvolvido com Next.js 14, apresentando meus projetos, habilidades e serviços como desenvolvedor Full-Stack. O site conta com animações fluidas, design espacial futurista e componentes reutilizáveis.

## ✨ Features Implementadas

### 🎨 Design & Interface
- ⭐ Background animado com estrelas em 3D usando Three.js
- 🌊 Animações suaves com Framer Motion
- 📱 Design 100% responsivo (Mobile-first)
- 🎭 Tema espacial escuro com gradientes roxo/ciano
- ♿ Interface acessível e intuitiva

### 🔥 Componentes Principais
- 🏠 **Hero Section**: Apresentação dinâmica com animações
- 👤 **About**: Seção sobre mim
- 💼 **Services**: Cards de serviços oferecidos (Frontend, Backend, DevOps, Consultoria)
- 🛠️ **Skills**: Grid animado de tecnologias e ferramentas
- 📂 **Projects**: Sistema completo de portfólio de projetos com modal
- 📞 **Footer**: Links sociais e contato

### 🎯 Funcionalidades Avançadas
- 🖼️ **Modal de Projetos**: Pop-up detalhado com descrição completa, tags e link direto
- 💬 **Modal WhatsApp**: Formulário de contato integrado com WhatsApp
- 🔗 **Navegação Suave**: Scroll suave entre seções
- 🚫 **Fix Canvas**: Solução para eventos de clique bloqueados pelo Three.js
- 📊 **Cards Padronizados**: Imagens e layout consistentes

## 🛠️ Tecnologias Utilizadas

### Frontend
- [Next.js 14.2](https://nextjs.org/) - Framework React com SSR
- [React 18.3](https://react.dev/) - Biblioteca UI
- [TypeScript](https://www.typescriptlang.org/) - Superset JavaScript tipado
- [Tailwind CSS 3.3](https://tailwindcss.com/) - Framework CSS utility-first
- [Framer Motion](https://www.framer.com/motion/) - Animações React

### 3D & Gráficos
- [Three.js](https://threejs.org/) - Biblioteca 3D WebGL
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) - React renderer para Three.js
- [@react-three/drei](https://github.com/pmndrs/drei) - Helpers úteis para R3F

### Ícones & UI
- [React Icons](https://react-icons.github.io/react-icons/) - Biblioteca de ícones
- [React Intersection Observer](https://www.npmjs.com/package/react-intersection-observer) - Detecção de visibilidade

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- Node.js 18+ instalado
- npm, yarn, pnpm ou bun

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/ThawanSantos2/portfolio.git
cd portfolio
```

2. Instale as dependências:
```bash
npm install
```

3. Rode o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build para Produção

```bash
npm run build
npm start
```

## 📂 Estrutura do Projeto

```
portfolio/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página home
│   └── globals.css         # Estilos globais
├── components/
│   ├── main/               # Componentes principais
│   │   ├── About.tsx
│   │   ├── Hero.tsx
│   │   ├── HeroContent.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── Services.tsx
│   │   ├── Skills.tsx
│   │   ├── StarBackground.tsx
│   │   └── Footer.tsx
│   └── sub/                # Subcomponentes
│       ├── ProjectCard.tsx
│       ├── ProjectModal.tsx
│       ├── WhatsAppModal.tsx
│       ├── SkillDataProvider.tsx
│       └── SkillText.tsx
├── constants/
│   └── index.ts            # Dados estáticos (projetos, skills, sociais)
├── utils/
│   └── motion.ts           # Variantes de animação
└── public/                 # Assets estáticos
```

## 🎨 Personalização

### Adicionar Novo Projeto

Edite o arquivo `constants/index.ts`:

```typescript
export const Projects_data = [
  {
    id: 1,
    title: "Seu Projeto",
    shortDescription: "Descrição curta",
    fullDescription: "Descrição completa do projeto...",
    image: "/seu-projeto.png",
    link: "https://seu-projeto.com",
    tags: ["React", "Node.js", "MongoDB"],
  },
  // ...
];
```

### Atualizar Skills

No mesmo arquivo `constants/index.ts`, edite:

```typescript
export const Frontend_skill = [
  {
    skill_name: "Nova Skill",
    Image: "/nova-skill.png",
    width: 50,
    height: 50,
  },
  // ...
];
```

### Alterar Informações Pessoais

Edite `components/main/HeroContent.tsx` e `components/main/Footer.tsx`

## 📦 Deploy

### Vercel (Recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push para GitHub
2. Importe no Vercel
3. Deploy automático!

### Netlify

```bash
npm run build
```

Faça upload da pasta `.next` para o Netlify.

## 🤝 Créditos & Contribuições

### 👨‍💻 Desenvolvedor
**Thawan Bomfim dos Santos**
- GitHub: [@ThawanSantos2](https://github.com/ThawanSantos2)
- LinkedIn: [thawansantos2](https://linkedin.com/in/thawansantos2)
- Email: sthawan860@gmail.com

### 🎨 Template Base
Este projeto foi construído a partir de um template de portfólio espacial desenvolvido originalmente por [Jenin82](https://github.com/Jenin82) e extensivamente customizado.

### ✨ Minhas Contribuições
- ✅ Resolução de bugs críticos de dependências (Three.js, @react-three/drei)
- ✅ Atualização de dependências e compatibilidade Next.js 14
- ✅ Implementação completa do sistema de projetos com modal interativo
- ✅ Criação da seção de Serviços com cards animados
- ✅ Integração do formulário WhatsApp com redirecionamento automático
- ✅ Fix do Canvas Three.js bloqueando eventos de clique (`pointer-events: none`)
- ✅ Sistema de cards padronizados e responsivos
- ✅ Otimização de performance e responsividade
- ✅ Personalização completa de conteúdo, cores e animações
- ✅ Documentação completa do projeto

## 🐛 Problemas Conhecidos & Soluções

### Canvas bloqueando cliques?
Adicione `style={{ pointerEvents: "none" }}` no componente `<Canvas>`.

### Erros de dependência Three.js?
Execute:
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📝 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e distribuir.

## 📞 Contato

Interessado em colaborar ou contratar meus serviços?

📧 Email: sthawan860@gmail.com  
💼 LinkedIn: [thawansantos2](https://linkedin.com/in/thawansantos2)  
📱 WhatsApp: +55 (79) 99846-6084  
🐙 GitHub: [@ThawanSantos2](https://github.com/ThawanSantos2)

---

<p align="center">
  ⭐ <strong>Se este projeto foi útil, deixe uma estrela!</strong> ⭐
</p>

<p align="center">
  Feito com 💜 por <a href="https://github.com/ThawanSantos2">Thawan Santos</a>
</p>
