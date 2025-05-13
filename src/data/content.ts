
export type Language = "en" | "pt";

export type ContentType = {
  nav: {
    about: string;
    projects: string;
    technologies: string;
    fun: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    description: string[];
    experience: {
      title: string;
      items: Array<{
        period: string;
        role: string;
        company: string;
        description: string;
      }>;
    };
  };
  projects: {
    title: string;
    description: string;
    viewProject: string;
    items: Array<{
      title: string;
      description: string;
      tags: string[];
      link: string;
      image: string;
    }>;
  };
  technologies: {
    title: string;
    description: string;
    categories: Array<{
      name: string;
      items: Array<{
        name: string;
        level: string;
      }>;
    }>;
  };
  fun: {
    title: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  contact: {
    title: string;
    description: string;
  };
  footer: {
    copyright: string;
  };
};

export const content: Record<Language, ContentType> = {
  en: {
    nav: {
      about: "About Me",
      projects: "Projects",
      technologies: "Technologies",
      fun: "Fun Stuff",
      contact: "Contact"
    },
    hero: {
      greeting: "Hi there, I'm",
      name: "DAVY",
      title: "Game Developer & Backend Engineer",
      subtitle: "Bringing games to life and building robust systems",
      cta: "Learn more"
    },
    about: {
      title: "About Me",
      description: [
        "I'm a passionate game developer and backend engineer with a focus on creating engaging user experiences and scalable systems.",
        "With expertise in both game development and backend architecture, I bring a unique perspective to projects that require technical depth and creative thinking."
      ],
      experience: {
        title: "Professional Experience",
        items: [
          {
            period: "2020 - Present",
            role: "Lead Game Developer",
            company: "Game Studio X",
            description: "Leading development of multiplayer game experiences, focusing on performance optimization and innovative gameplay mechanics."
          },
          {
            period: "2017 - 2020",
            role: "Backend Engineer",
            company: "Tech Solutions Inc",
            description: "Designed and implemented scalable APIs and database architectures for high-traffic web applications."
          }
        ]
      }
    },
    projects: {
      title: "Projects",
      description: "A selection of my recent work in game development and backend engineering.",
      viewProject: "View Project",
      items: [
        {
          title: "Multiplayer RPG Game",
          description: "A cross-platform RPG with real-time multiplayer capabilities, custom game engine and advanced AI systems.",
          tags: ["Unity", "C#", "Multiplayer", "AI"],
          link: "#",
          image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
        },
        {
          title: "Game Backend Service",
          description: "A scalable backend service handling player authentication, game state synchronization, and leaderboards.",
          tags: ["Node.js", "MongoDB", "WebSockets", "Redis"],
          link: "#",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
        },
        {
          title: "Interactive Story Game",
          description: "A narrative-driven game with branching storylines and dynamic character development.",
          tags: ["Unreal Engine", "Blueprints", "Storytelling"],
          link: "#",
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        }
      ]
    },
    technologies: {
      title: "Technologies",
      description: "The tools and technologies I use to build amazing experiences.",
      categories: [
        {
          name: "Game Development",
          items: [
            { name: "Unity", level: "Expert" },
            { name: "Unreal Engine", level: "Advanced" },
            { name: "C#", level: "Expert" },
            { name: "C++", level: "Advanced" }
          ]
        },
        {
          name: "Backend",
          items: [
            { name: "Node.js", level: "Expert" },
            { name: "Python", level: "Advanced" },
            { name: "MongoDB", level: "Expert" },
            { name: "PostgreSQL", level: "Advanced" },
            { name: "Redis", level: "Intermediate" }
          ]
        },
        {
          name: "Other",
          items: [
            { name: "Git", level: "Expert" },
            { name: "Docker", level: "Advanced" },
            { name: "CI/CD", level: "Intermediate" },
            { name: "AWS", level: "Advanced" }
          ]
        }
      ]
    },
    fun: {
      title: "Fun Stuff",
      description: "Some personal interests and things I enjoy outside of work.",
      items: [
        {
          title: "Game Jams",
          description: "I regularly participate in game jams to challenge myself and explore new game mechanics."
        },
        {
          title: "Open Source",
          description: "I contribute to open source game development tools and libraries."
        },
        {
          title: "Pixel Art",
          description: "I create pixel art in my spare time, mostly character designs and environment tiles."
        }
      ]
    },
    contact: {
      title: "Get In Touch",
      description: "Feel free to reach out through any of these platforms."
    },
    footer: {
      copyright: "© 2025 Game Developer Portfolio. All rights reserved."
    }
  },
  pt: {
    nav: {
      about: "Sobre Mim",
      projects: "Projetos",
      technologies: "Tecnologias",
      fun: "Diversão",
      contact: "Contato"
    },
    hero: {
      greeting: "Olá, eu sou",
      name: "DAVY",
      title: "Desenvolvedor de Jogos & Engenheiro Backend",
      subtitle: "Dando vida aos jogos e construindo sistemas robustos",
      cta: "Saiba mais"
    },
    about: {
      title: "Sobre Mim",
      description: [
        "Sou um desenvolvedor de jogos e engenheiro de backend apaixonado, com foco em criar experiências de usuário envolventes e sistemas escaláveis.",
        "Com expertise em desenvolvimento de jogos e arquitetura de backend, trago uma perspectiva única para projetos que exigem profundidade técnica e pensamento criativo."
      ],
      experience: {
        title: "Experiência Profissional",
        items: [
          {
            period: "2020 - Presente",
            role: "Desenvolvedor de Jogos Líder",
            company: "Game Studio X",
            description: "Liderando o desenvolvimento de experiências de jogos multiplayer, com foco em otimização de desempenho e mecânicas de jogabilidade inovadoras."
          },
          {
            period: "2017 - 2020",
            role: "Engenheiro Backend",
            company: "Tech Solutions Inc",
            description: "Projetei e implementei APIs escaláveis e arquiteturas de banco de dados para aplicações web de alto tráfego."
          }
        ]
      }
    },
    projects: {
      title: "Projetos",
      description: "Uma seleção dos meus trabalhos recentes em desenvolvimento de jogos e engenharia backend.",
      viewProject: "Ver Projeto",
      items: [
        {
          title: "Jogo RPG Multiplayer",
          description: "Um RPG multiplataforma com recursos multiplayer em tempo real, motor de jogo personalizado e sistemas de IA avançados.",
          tags: ["Unity", "C#", "Multiplayer", "IA"],
          link: "#",
          image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
        },
        {
          title: "Serviço Backend para Jogos",
          description: "Um serviço backend escalável que gerencia autenticação de jogadores, sincronização de estado de jogo e tabelas de classificação.",
          tags: ["Node.js", "MongoDB", "WebSockets", "Redis"],
          link: "#",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
        },
        {
          title: "Jogo de História Interativa",
          description: "Um jogo narrativo com linhas de história ramificadas e desenvolvimento de personagens dinâmico.",
          tags: ["Unreal Engine", "Blueprints", "Narrativa"],
          link: "#",
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        }
      ]
    },
    technologies: {
      title: "Tecnologias",
      description: "As ferramentas e tecnologias que uso para construir experiências incríveis.",
      categories: [
        {
          name: "Desenvolvimento de Jogos",
          items: [
            { name: "Unity", level: "Especialista" },
            { name: "Unreal Engine", level: "Avançado" },
            { name: "C#", level: "Especialista" },
            { name: "C++", level: "Avançado" }
          ]
        },
        {
          name: "Backend",
          items: [
            { name: "Node.js", level: "Especialista" },
            { name: "Python", level: "Avançado" },
            { name: "MongoDB", level: "Especialista" },
            { name: "PostgreSQL", level: "Avançado" },
            { name: "Redis", level: "Intermediário" }
          ]
        },
        {
          name: "Outros",
          items: [
            { name: "Git", level: "Especialista" },
            { name: "Docker", level: "Avançado" },
            { name: "CI/CD", level: "Intermediário" },
            { name: "AWS", level: "Avançado" }
          ]
        }
      ]
    },
    fun: {
      title: "Diversão",
      description: "Alguns interesses pessoais e coisas que gosto fora do trabalho.",
      items: [
        {
          title: "Game Jams",
          description: "Eu participo regularmente de game jams para me desafiar e explorar novas mecânicas de jogo."
        },
        {
          title: "Open Source",
          description: "Eu contribuo para ferramentas e bibliotecas de desenvolvimento de jogos de código aberto."
        },
        {
          title: "Pixel Art",
          description: "Eu crio pixel art no meu tempo livre, principalmente designs de personagens e tiles de ambiente."
        }
      ]
    },
    contact: {
      title: "Entre em Contato",
      description: "Sinta-se à vontade para me contatar através de qualquer uma dessas plataformas."
    },
    footer: {
      copyright: "© 2025 Portfólio de Desenvolvedor de Jogos. Todos os direitos reservados."
    }
  }
};
