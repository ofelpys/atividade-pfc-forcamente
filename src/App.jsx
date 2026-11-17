import { useEffect, useRef, useState } from "react";
import { articles, exercises, quizQuestions, sources } from "./content.js";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/articles", label: "Artigos" },
  { href: "/quiz", label: "Quiz" },
  { href: "/library", label: "Biblioteca" },
  { href: "/progress", label: "Calculadoras" },
  { href: "/about", label: "Quem somos" },
];

function Icon({ name, size = 24 }) {
  const shapes = {
    dumbbell: (
      <>
        <path d="m6.5 6.5 11 11" />
        <path d="m4 9 5-5M2.5 6.5l4-4M15 20l5-5m-2.5 6.5 4-4" />
      </>
    ),
    book: (
      <>
        <path d="M12 7a6 6 0 0 0-9-1v13a6 6 0 0 1 9 1 6 6 0 0 1 9-1V6a6 6 0 0 0-9 1Z" />
        <path d="M12 7v13" />
      </>
    ),
    brain: (
      <>
        <path d="M12 18V5a3 3 0 0 0-5.7-1.3A4 4 0 0 0 4 10a4 4 0 0 0 1 7.5A3.5 3.5 0 0 0 12 18Zm0 0V5a3 3 0 0 1 5.7-1.3A4 4 0 0 1 20 10a4 4 0 0 1-1 7.5A3.5 3.5 0 0 1 12 18Z" />
      </>
    ),
    calculator: (
      <>
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M8 6h8M8 11h2m4 0h2m-8 4h2m4 0h2m-8 4h2m4 0h2" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    arrow: (
      <>
        <path d="M4 12h16m-7-7 7 7-7 7" />
      </>
    ),
    arrowUp: (
      <>
        <path d="M7 17 17 7M8 7h9v9" />
      </>
    ),
    menu: (
      <>
        <path d="M3 7h18M3 12h18M3 17h18" />
      </>
    ),
    close: (
      <>
        <path d="M5 5 19 19M19 5 5 19" />
      </>
    ),
    check: (
      <>
        <path d="m5 12 4 4L19 6" />
      </>
    ),
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m16 16 5 5" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    chart: (
      <>
        <path d="M4 20V4M4 20h17M8 16v-4m5 4V7m5 9V9" />
      </>
    ),
  };
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {shapes[name] || shapes.arrow}
    </svg>
  );
}

function ButtonLink({ href, children, secondary = false, external = false }) {
  return (
    <a
      className={`button ${secondary ? "button-secondary" : "button-primary"}`}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      <Icon name={external ? "arrowUp" : "arrow"} size={18} />
    </a>
  );
}

function Header({ path }) {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef(null);
  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="/" aria-label="ForçaMente — página inicial">
          <span className="brand-icon">
            <Icon name="dumbbell" size={20} />
          </span>
          <span>
            FORÇA<span className="brand-red">MENTE</span>
          </span>
        </a>
        <nav
          className={`main-nav ${open ? "nav-open" : ""}`}
          aria-label="Navegação principal"
          id="menu-principal"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={
                path === item.href ||
                (item.href === "/articles" && path.startsWith("/articles/"))
                  ? "page"
                  : undefined
              }
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="menu-principal"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-intro">
          <a className="brand" href="/">
            <span className="brand-icon">
              <Icon name="dumbbell" size={20} />
            </span>
            <span>
              FORÇA<span className="brand-red">MENTE</span>
            </span>
          </a>
          <p>
            Mais que músculos, conhecimento.
            <br />
            Um começo mais informado para quem quer treinar.
          </p>
        </div>
        <div className="footer-links">
          <span>Explore</span>
          <a href="/articles">Artigos</a>
          <a href="/quiz">Quiz</a>
          <a href="/library">Biblioteca</a>
          <a href="/progress">Calculadoras</a>
        </div>
        <div className="footer-links">
          <span>Projeto</span>
          <a href="/about">Quem somos</a>
          <a
            href="https://pfc-frontend-two.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Plataforma original <Icon name="arrowUp" size={14} />
          </a>
          <a
            href="https://github.com/forcamente2026/PFC-FRONTEND"
            target="_blank"
            rel="noopener noreferrer"
          >
            Código de referência <Icon name="arrowUp" size={14} />
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 ForçaMente · Projeto acadêmico UMC</span>
        <span>
          Conteúdo educativo; orientação individual com profissionais
          habilitados.
        </span>
      </div>
    </footer>
  );
}

function PageIntro({ eyebrow, title, text, icon }) {
  return (
    <section className="page-intro">
      <div className="container page-intro-inner">
        <div className="page-intro-icon">
          <Icon name={icon} size={28} />
        </div>
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function Home() {
  const features = [
    {
      icon: "book",
      number: "01",
      title: "Artigos",
      text: "Entenda os fundamentos antes de colocá-los em prática.",
      href: "/articles",
    },
    {
      icon: "brain",
      number: "02",
      title: "Quiz",
      text: "Revise o que aprendeu de um jeito leve e objetivo.",
      href: "/quiz",
    },
    {
      icon: "dumbbell",
      number: "03",
      title: "Biblioteca",
      text: "Conheça exercícios e os padrões de movimento.",
      href: "/library",
    },
    {
      icon: "calculator",
      number: "04",
      title: "Calculadoras",
      text: "Explore métricas simples e aprenda a interpretá-las.",
      href: "/progress",
    },
  ];

  return (
    <>
      <section className="hero">
        <div className="hero-halo" aria-hidden="true" />
        <div className="container hero-content">
          <div className="hero-topline">
            <span className="live-dot" /> PLATAFORMA DE CONHECIMENTO PARA
            INICIANTES <span className="hero-topline-tail">PFC · UMC 2026</span>
          </div>
          <img
            className="hero-logo"
            src="/images/logo-oficial.png"
            alt="Logo oficial ForçaMente com atleta e raio vermelho"
            fetchPriority="high"
          />
          <div className="hero-copy">
            <span className="eyebrow">TREINE COM PROPÓSITO</span>
            <h1>
              Mais que músculos, <span>conhecimento.</span>
            </h1>
            <p>
              Estude com disciplina. Evolua com informação. Seu primeiro passo
              na musculação começa por entender o que você faz.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/articles">Começar a aprender</ButtonLink>
              <ButtonLink href="/about" secondary>
                Conheça o projeto
              </ButtonLink>
            </div>
          </div>
          <div className="hero-scroll">
            EXPLORE A PLATAFORMA <span aria-hidden="true">↓</span>
          </div>
        </div>
      </section>

      <section className="promise-strip">
        <div className="container promise-inner">
          <div>
            <Icon name="shield" size={22} />
            <span>Informação antes da execução</span>
          </div>
          <div>
            <Icon name="target" size={22} />
            <span>Aprendizado no seu ritmo</span>
          </div>
          <div>
            <Icon name="chart" size={22} />
            <span>Evolução com consciência</span>
          </div>
        </div>
      </section>

      <section className="section section-spacious">
        <div className="container">
          <div className="home-mission">
            <div className="mission-number">
              01<span>/</span>04
            </div>
            <div>
              <span className="eyebrow">A NOSSA PROPOSTA</span>
              <h2>Conhecimento também faz parte do treino.</h2>
            </div>
            <p>
              O ForçaMente nasceu para ajudar quem está começando na musculação
              a transformar dúvidas em decisões mais informadas. Aqui, o foco é
              entender os fundamentos, explorar movimentos e aprender com
              conteúdo acessível.
            </p>
          </div>
        </div>
      </section>

      <section className="section feature-section">
        <div className="container">
          <SectionTitle
            eyebrow="UM CAMINHO PARA EXPLORAR"
            title="Tudo começa pela curiosidade."
            text="Quatro espaços para aprender, testar o que você sabe e dar sentido aos números do treino."
          />
          <div className="feature-grid">
            {features.map((feature) => (
              <a
                href={feature.href}
                className="feature-card"
                key={feature.title}
              >
                <span className="feature-number">
                  {feature.number} / CONHEÇA
                </span>
                <span className="feature-icon">
                  <Icon name={feature.icon} size={30} />
                </span>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
                <span className="round-arrow">
                  <Icon name="arrowUp" size={19} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section spotlight-section">
        <div className="container spotlight-grid">
          <div className="spotlight-copy">
            <span className="eyebrow">COMECE PELO BÁSICO</span>
            <h2>Um primeiro passo que faz sentido para você.</h2>
            <p>
              Começar devagar, aprender a técnica e manter uma rotina possível
              são orientações presentes em guias de atividade física. Explore
              esses princípios e leve perguntas melhores para o seu treino.
            </p>
            <ButtonLink href="/articles/primeiros-passos">
              Leia o guia inicial
            </ButtonLink>
          </div>
          <div className="spotlight-panel">
            <span className="panel-label">SEU PONTO DE PARTIDA</span>
            <div className="panel-step">
              <span>01</span>
              <div>
                <strong>Entenda</strong>
                <small>Leia o essencial antes de treinar.</small>
              </div>
            </div>
            <div className="panel-step">
              <span>02</span>
              <div>
                <strong>Explore</strong>
                <small>Conheça os exercícios e suas funções.</small>
              </div>
            </div>
            <div className="panel-step">
              <span>03</span>
              <div>
                <strong>Reforce</strong>
                <small>Teste o que aprendeu no quiz.</small>
              </div>
            </div>
            <div className="panel-line" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="section section-cta">
        <div className="container cta-box">
          <div>
            <span className="eyebrow">APRENDER É O PRIMEIRO MOVIMENTO</span>
            <h2>Pronto para começar?</h2>
            <p>
              Descubra os temas que dão base a uma rotina de treino mais
              consciente.
            </p>
          </div>
          <ButtonLink href="/articles">Explorar artigos</ButtonLink>
        </div>
      </section>
    </>
  );
}

function Articles() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todos");
  const categories = ["Todos", "Primeiros passos", "Treino", "Saúde"];
  const normalized = (value) =>
    value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  const visible = articles.filter(
    (article) =>
      (category === "Todos" || article.category === category) &&
      normalized(`${article.title} ${article.summary}`).includes(
        normalized(query),
      ),
  );

  return (
    <>
      <PageIntro
        eyebrow="CONHECIMENTO EM MOVIMENTO"
        title="Artigos"
        text="Conteúdo introdutório para transformar dúvidas comuns em um começo mais informado."
        icon="book"
      />
      <section className="section">
        <div className="container">
          <div className="listing-toolbar">
            <div className="filter-list" aria-label="Filtrar artigos por tema">
              {categories.map((item) => (
                <button
                  type="button"
                  key={item}
                  className={category === item ? "chip active" : "chip"}
                  aria-pressed={category === item}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <label className="search-box">
              <Icon name="search" size={19} />
              <span className="sr-only">Buscar artigos</span>
              <input
                type="search"
                placeholder="Buscar assunto..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </label>
          </div>
          <div className="result-count" aria-live="polite">
            {visible.length}{" "}
            {visible.length === 1 ? "artigo encontrado" : "artigos encontrados"}
          </div>
          <div className="article-grid">
            {visible.map((article) => (
              <a
                href={`/articles/${article.slug}`}
                className="article-card"
                key={article.slug}
              >
                <div className="article-card-top">
                  <span>{article.category}</span>
                  <span>{article.number}</span>
                </div>
                <div className="article-card-icon">
                  <Icon
                    name={
                      article.category === "Saúde"
                        ? "shield"
                        : article.category === "Treino"
                          ? "dumbbell"
                          : "book"
                    }
                    size={31}
                  />
                </div>
                <h2>{article.title}</h2>
                <p>{article.summary}</p>
                <div className="article-card-bottom">
                  <span>
                    <Icon name="clock" size={16} /> {article.time}
                  </span>
                  <span className="round-arrow">
                    <Icon name="arrowUp" size={19} />
                  </span>
                </div>
              </a>
            ))}
          </div>
          {visible.length === 0 && (
            <div className="empty-state">
              <h2>Nenhum artigo encontrado.</h2>
              <p>Tente outro termo ou escolha “Todos”.</p>
              <button
                type="button"
                className="text-button"
                onClick={() => {
                  setQuery("");
                  setCategory("Todos");
                }}
              >
                Limpar filtros <Icon name="arrow" size={16} />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function ArticleDetail({ slug }) {
  const article = articles.find((item) => item.slug === slug);
  if (!article) return <NotFound />;
  return (
    <>
      <section className="article-detail-hero">
        <div className="container article-detail-head">
          <a className="back-link" href="/articles">
            ← Voltar aos artigos
          </a>
          <div className="article-meta">
            <span>{article.category}</span>
            <span>{article.time}</span>
          </div>
          <h1>{article.title}</h1>
          <p>{article.lead}</p>
        </div>
      </section>
      <article className="container article-body">
        <div className="article-body-main">
          {article.sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </section>
          ))}
          <div className="takeaway">
            <span>GUARDE ESTA IDEIA</span>
            <p>{article.takeaway}</p>
          </div>
          <h2>Fontes</h2>
          <ul className="source-list">
            {article.references.map((source) => (
              <li key={source.url}>
                <a href={source.url} target="_blank" rel="noopener noreferrer">
                  {source.label} <Icon name="arrowUp" size={15} />
                </a>
              </li>
            ))}
          </ul>
          <p className="article-disclaimer">
            Este texto tem finalidade educativa e não substitui avaliação
            individual de profissionais de Educação Física ou de saúde.
          </p>
        </div>
        <aside className="article-aside">
          <span>CONTINUE EXPLORANDO</span>
          <h3>Aprender é uma prática.</h3>
          <p>
            Teste os conceitos no quiz ou conheça os movimentos na biblioteca.
          </p>
          <a href="/quiz">
            Fazer o quiz <Icon name="arrow" size={17} />
          </a>
          <a href="/library">
            Ver exercícios <Icon name="arrow" size={17} />
          </a>
        </aside>
      </article>
    </>
  );
}

function Quiz() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const question = quizQuestions[step];
  const answer = () => {
    if (selected === null) return;
    setRevealed(true);
    if (selected === question.answer) setScore((value) => value + 1);
  };
  const next = () => {
    if (step === quizQuestions.length - 1) setDone(true);
    else {
      setStep((value) => value + 1);
      setSelected(null);
      setRevealed(false);
    }
  };
  const reset = () => {
    setStep(0);
    setSelected(null);
    setRevealed(false);
    setScore(0);
    setDone(false);
  };

  return (
    <>
      <PageIntro
        eyebrow="APRENDA E REFORCE"
        title="Quiz"
        text="Cinco perguntas rápidas para revisar os fundamentos da atividade física e da musculação."
        icon="brain"
      />
      <section className="section quiz-section">
        <div className="container quiz-layout">
          <div className="quiz-side">
            <span className="eyebrow">TESTE SEU CONHECIMENTO</span>
            <h2>Aprender também é se perguntar.</h2>
            <p>
              Escolha uma resposta por vez. Depois de conferir, leia a
              explicação antes de seguir.
            </p>
            <div className="quiz-side-decoration" aria-hidden="true">
              <Icon name="brain" size={104} />
            </div>
          </div>
          <div className="quiz-card">
            {done ? (
              <div className="quiz-result">
                <div className="result-orbit">
                  <span>
                    {score}/{quizQuestions.length}
                  </span>
                </div>
                <span className="eyebrow">QUIZ CONCLUÍDO</span>
                <h2>
                  {score === quizQuestions.length
                    ? "Excelente revisão!"
                    : "Cada resposta é um novo começo."}
                </h2>
                <p>
                  Você acertou {score} de {quizQuestions.length} perguntas.
                  Releia as explicações e continue explorando o conteúdo.
                </p>
                <div className="quiz-result-actions">
                  <button
                    type="button"
                    className="button button-primary"
                    onClick={reset}
                  >
                    Refazer quiz <Icon name="arrow" size={18} />
                  </button>
                  <ButtonLink href="/articles" secondary>
                    Ver artigos
                  </ButtonLink>
                </div>
              </div>
            ) : (
              <>
                <div className="quiz-card-top">
                  <span>
                    PERGUNTA {String(step + 1).padStart(2, "0")} /{" "}
                    {String(quizQuestions.length).padStart(2, "0")}
                  </span>
                  <span>
                    {Math.round((step / quizQuestions.length) * 100)}% concluído
                  </span>
                </div>
                <div className="progress-track">
                  <span
                    style={{
                      width: `${((step + (revealed ? 1 : 0)) / quizQuestions.length) * 100}%`,
                    }}
                  />
                </div>
                <h2>{question.question}</h2>
                <div
                  className="quiz-options"
                  role="group"
                  aria-label="Opções de resposta"
                >
                  {question.options.map((option, index) => (
                    <button
                      type="button"
                      key={option}
                      disabled={revealed}
                      aria-pressed={selected === index}
                      className={`quiz-option ${selected === index ? "selected" : ""} ${revealed && index === question.answer ? "correct" : ""} ${revealed && selected === index && index !== question.answer ? "incorrect" : ""}`}
                      onClick={() => setSelected(index)}
                    >
                      <span className="option-letter">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span>{option}</span>
                      {revealed && index === question.answer && (
                        <Icon name="check" size={18} />
                      )}
                    </button>
                  ))}
                </div>
                {revealed && (
                  <div className="answer-feedback" role="status">
                    <strong>
                      {selected === question.answer
                        ? "Resposta certa!"
                        : "Quase lá."}
                    </strong>
                    {selected !== question.answer && (
                      <p>
                        A resposta correta é:{" "}
                        <strong>{question.options[question.answer]}</strong>.
                      </p>
                    )}
                    <p>{question.explanation}</p>
                    <button
                      type="button"
                      className="button button-primary"
                      onClick={next}
                    >
                      {step === quizQuestions.length - 1
                        ? "Ver resultado"
                        : "Próxima pergunta"}{" "}
                      <Icon name="arrow" size={18} />
                    </button>
                  </div>
                )}
                {!revealed && (
                  <div className="quiz-actions">
                    <button
                      type="button"
                      className="button button-primary"
                      disabled={selected === null}
                      onClick={answer}
                    >
                      Conferir resposta <Icon name="arrow" size={18} />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Library() {
  const [group, setGroup] = useState("Todos");
  const [query, setQuery] = useState("");
  const groups = ["Todos", "Pernas", "Peito", "Costas", "Ombros"];
  const visible = exercises.filter(
    (exercise) =>
      (group === "Todos" || exercise.group === group) &&
      `${exercise.name} ${exercise.pattern}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  return (
    <>
      <PageIntro
        eyebrow="CONHEÇA OS MOVIMENTOS"
        title="Biblioteca de exercícios"
        text="Explore alguns exercícios da plataforma e aprenda a reconhecer seus padrões de movimento."
        icon="dumbbell"
      />
      <section className="section">
        <div className="container">
          <div className="library-note">
            <Icon name="shield" size={22} />
            <p>
              As descrições são introdutórias. Peça orientação profissional para
              ajustar a execução e o treino à sua condição.
            </p>
          </div>
          <div className="listing-toolbar">
            <div
              className="filter-list"
              aria-label="Filtrar exercícios por grupo"
            >
              {groups.map((item) => (
                <button
                  type="button"
                  className={group === item ? "chip active" : "chip"}
                  aria-pressed={group === item}
                  key={item}
                  onClick={() => setGroup(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <label className="search-box">
              <Icon name="search" size={19} />
              <span className="sr-only">Buscar exercício</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar exercício..."
              />
            </label>
          </div>
          <div className="result-count" aria-live="polite">
            {visible.length}{" "}
            {visible.length === 1
              ? "exercício encontrado"
              : "exercícios encontrados"}
          </div>
          <div className="exercise-grid">
            {visible.map((exercise) => (
              <article className="exercise-card" key={exercise.name}>
                <div className="exercise-image">
                  <img src={exercise.image} alt={exercise.alt} loading="lazy" />
                  <span>{exercise.group}</span>
                </div>
                <div className="exercise-info">
                  <div className="exercise-pattern">
                    PADRÃO: {exercise.pattern.toUpperCase()}
                  </div>
                  <h2>{exercise.name}</h2>
                  <p>{exercise.intro}</p>
                  <details>
                    <summary>
                      Saiba mais <span>+</span>
                    </summary>
                    <div className="exercise-details">
                      <p>
                        <strong>Equipamento:</strong> {exercise.equipment}
                      </p>
                      <p>
                        <strong>Ao começar:</strong> {exercise.attention}
                      </p>
                    </div>
                  </details>
                </div>
              </article>
            ))}
          </div>
          {visible.length === 0 && (
            <div className="empty-state">
              <h2>Nenhum exercício encontrado.</h2>
              <p>Tente outro termo ou escolha “Todos”.</p>
              <button
                type="button"
                className="text-button"
                onClick={() => {
                  setGroup("Todos");
                  setQuery("");
                }}
              >
                Limpar filtros <Icon name="arrow" size={16} />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function NumberField({
  id,
  label,
  value,
  onChange,
  min,
  max,
  unit,
  step = "1",
}) {
  return (
    <label className="number-field" htmlFor={id}>
      <span>{label}</span>
      <div>
        <input
          id={id}
          type="number"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          inputMode={step === "any" ? "decimal" : "numeric"}
        />
        <small>{unit}</small>
      </div>
    </label>
  );
}

function Calculators() {
  const [sets, setSets] = useState("3");
  const [reps, setReps] = useState("10");
  const [load, setLoad] = useState("20");
  const [days, setDays] = useState("3");
  const [minutes, setMinutes] = useState("30");
  const valid = (value, min, max) =>
    value !== "" &&
    Number.isFinite(Number(value)) &&
    Number(value) >= min &&
    Number(value) <= max;
  const validInteger = (value, min, max) =>
    valid(value, min, max) && Number.isInteger(Number(value));
  const volume =
    validInteger(sets, 1, 20) &&
    validInteger(reps, 1, 50) &&
    valid(load, 0, 500)
      ? Number(sets) * Number(reps) * Number(load)
      : null;
  const aerobic =
    validInteger(days, 0, 7) && validInteger(minutes, 0, 300)
      ? Number(days) * Number(minutes)
      : null;
  return (
    <>
      <PageIntro
        eyebrow="NÚMEROS COM CONTEXTO"
        title="Calculadoras"
        text="Duas ferramentas simples para entender medidas que aparecem nas conversas sobre treino."
        icon="calculator"
      />
      <section className="section">
        <div className="container calculator-grid">
          <article className="calculator-card">
            <div className="calculator-heading">
              <span className="calculator-icon">
                <Icon name="chart" size={25} />
              </span>
              <span>01 / TREINO DE FORÇA</span>
            </div>
            <h2>Volume de um exercício</h2>
            <p>
              Multiplique séries, repetições e carga externa para visualizar o
              volume total de um exercício.
            </p>
            <div className="number-grid">
              <NumberField
                id="sets"
                label="Séries"
                value={sets}
                onChange={setSets}
                min="1"
                max="20"
                unit="séries"
              />
              <NumberField
                id="reps"
                label="Repetições"
                value={reps}
                onChange={setReps}
                min="1"
                max="50"
                unit="reps"
              />
              <NumberField
                id="load"
                label="Carga externa"
                value={load}
                onChange={setLoad}
                min="0"
                max="500"
                unit="kg"
                step="any"
              />
            </div>
            <div className="calculator-result" aria-live="polite">
              <span>VOLUME TOTAL</span>
              <strong>
                {volume === null ? "—" : volume.toLocaleString("pt-BR")}{" "}
                <small>kg</small>
              </strong>
              <p>
                {volume === null
                  ? "Preencha valores dentro dos limites indicados."
                  : `${sets} séries × ${reps} repetições × ${load} kg`}
              </p>
            </div>
            <p className="calculator-footnote">
              É uma medida descritiva de carga externa, não uma avaliação da
              qualidade ou eficácia do treino. Exercícios sem carga externa
              aparecem como zero nesta fórmula.
            </p>
          </article>
          <article className="calculator-card">
            <div className="calculator-heading">
              <span className="calculator-icon">
                <Icon name="clock" size={25} />
              </span>
              <span>02 / ATIVIDADE AERÓBICA</span>
            </div>
            <h2>Minutos de movimento na semana</h2>
            <p>
              Some seus dias e minutos de atividade aeróbica moderada para
              visualizar seu total semanal.
            </p>
            <div className="number-grid two">
              <NumberField
                id="days"
                label="Dias por semana"
                value={days}
                onChange={setDays}
                min="0"
                max="7"
                unit="dias"
              />
              <NumberField
                id="minutes"
                label="Minutos por dia"
                value={minutes}
                onChange={setMinutes}
                min="0"
                max="300"
                unit="min"
              />
            </div>
            <div className="calculator-result" aria-live="polite">
              <span>TOTAL SEMANAL</span>
              <strong>
                {aerobic === null ? "—" : aerobic.toLocaleString("pt-BR")}{" "}
                <small>min</small>
              </strong>
              <div className="scale-track">
                <span
                  style={{
                    width: `${aerobic === null ? 0 : Math.min((aerobic / 300) * 100, 100)}%`,
                  }}
                />
              </div>
              <div className="scale-labels">
                <span>0</span>
                <span>150</span>
                <span>300+ min</span>
              </div>
            </div>
            <p className="calculator-footnote">
              A OMS recomenda 150 a 300 minutos semanais de atividade aeróbica
              moderada para adultos, além de fortalecimento muscular em pelo
              menos dois dias. É uma referência geral; adapte a prática com
              orientação profissional.
            </p>
          </article>
        </div>
        <div className="container calculator-source">
          <span>FONTES PARA INTERPRETAR OS RESULTADOS</span>
          <a href={sources.oms.url} target="_blank" rel="noopener noreferrer">
            {sources.oms.label} <Icon name="arrowUp" size={15} />
          </a>
          <a
            href={sources.ministerio.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {sources.ministerio.label} <Icon name="arrowUp" size={15} />
          </a>
        </div>
      </section>
    </>
  );
}

function About() {
  return (
    <>
      <PageIntro
        eyebrow="O PROJETO"
        title="Quem somos"
        text="Um projeto acadêmico voltado a quem deseja começar a musculação com informação de qualidade."
        icon="users"
      />
      <section className="section">
        <div className="container about-lead">
          <div>
            <span className="eyebrow">NOSSA RAZÃO DE EXISTIR</span>
            <h2>Mais que músculos, conhecimento.</h2>
          </div>
          <div>
            <p>
              O ForçaMente reúne conteúdo educativo sobre musculação para ajudar
              iniciantes a compreender o que fazem antes de treinar. A proposta
              da plataforma principal inclui artigos, exercícios, quizzes e
              calculadoras.
            </p>
            <p>
              Explore essas áreas com exemplos introdutórios e ferramentas
              educativas que funcionam diretamente aqui.
            </p>
          </div>
        </div>
      </section>
      <section className="section about-values">
        <div className="container">
          <SectionTitle
            eyebrow="O QUE NOS MOVE"
            title="Aprender para evoluir."
          />
          <div className="value-grid">
            <div>
              <span>
                <Icon name="book" size={28} />
              </span>
              <h3>Informação acessível</h3>
              <p>
                Conceitos explicados em linguagem clara, para que o início não
                pareça um salto no escuro.
              </p>
            </div>
            <div>
              <span>
                <Icon name="shield" size={28} />
              </span>
              <h3>Responsabilidade</h3>
              <p>
                Conteúdo educativo e fontes identificadas, com respeito às
                diferenças individuais.
              </p>
            </div>
            <div>
              <span>
                <Icon name="target" size={28} />
              </span>
              <h3>Autonomia</h3>
              <p>
                Ferramentas que ajudam a fazer perguntas melhores e acompanhar o
                próprio aprendizado.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container about-team">
          <div>
            <span className="eyebrow">PFC · SISTEMAS DE INFORMAÇÃO</span>
            <h2>Um projeto criado na UMC.</h2>
            <p>
              O ForçaMente é o Projeto Final de Curso do Bacharelado em Sistemas
              de Informação da Universidade de Mogi das Cruzes, desenvolvido em
              2026.
            </p>
          </div>
          <div className="team-card">
            <span>EQUIPE DO PROJETO PRINCIPAL</span>
            <div>
              <strong>Felipe Costa Monteiro</strong>
              <small>Front-end e experiência de uso</small>
            </div>
            <div>
              <strong>Jonathan Augusto Rodrigues Barbosa</strong>
              <small>Back-end, regras e banco de dados</small>
            </div>
            <a
              href="https://pfc-frontend-two.vercel.app/about"
              target="_blank"
              rel="noopener noreferrer"
            >
              Conhecer a plataforma original <Icon name="arrowUp" size={17} />
            </a>
          </div>
        </div>
      </section>
      <section className="section sources-section">
        <div className="container">
          <SectionTitle
            eyebrow="TRANSPARÊNCIA"
            title="Fontes para continuar aprendendo."
            text="As orientações gerais deste site foram apoiadas nestes materiais. Elas não substituem avaliação individual."
          />
          <div className="source-grid">
            {Object.values(sources).map((source, index) => (
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                key={source.url}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{source.label}</strong>
                <Icon name="arrowUp" size={18} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function NotFound() {
  return (
    <div className="container not-found">
      <span className="eyebrow">PÁGINA NÃO ENCONTRADA</span>
      <h1>Esse caminho não existe por aqui.</h1>
      <p>Volte ao início e continue explorando o ForçaMente.</p>
      <ButtonLink href="/">Ir para a home</ButtonLink>
    </div>
  );
}

function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  let page;
  if (path === "/") page = <Home />;
  else if (path === "/articles") page = <Articles />;
  else if (path.startsWith("/articles/"))
    page = <ArticleDetail slug={path.split("/")[2]} />;
  else if (path === "/quiz") page = <Quiz />;
  else if (path === "/library") page = <Library />;
  else if (path === "/progress") page = <Calculators />;
  else if (path === "/about") page = <About />;
  else page = <NotFound />;

  useEffect(() => {
    const routeName =
      navigation.find((item) => item.href === path)?.label ||
      (path.startsWith("/articles/")
        ? articles.find((item) => `/articles/${item.slug}` === path)?.title
        : undefined);
    document.title =
      routeName && path !== "/"
        ? `${routeName} | ForçaMente`
        : "ForçaMente — Mais que músculos, conhecimento.";
  }, [path]);

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Header path={path} />
      <main id="conteudo">{page}</main>
      <Footer />
    </>
  );
}

export default App;
