import { useState, useEffect } from "react";

const GITHUB = "https://github.com/fahadamjad009";
const LINKEDIN = "https://www.linkedin.com/in/fahad-amjad009";
const EMAIL = "fahadamjad_10@hotmail.com";
const RESUME_URL = "#"; // UPDATE: host your CV PDF and link here

const ROLES = [
  "Data Scientist.",
  "Analytics Engineer.",
  "AI/ML Engineer.",
  "FinTech Risk Analyst.",
];

const EXPERIENCE = [
  {
    company: "JAMID (Decentralized Identity Wallet)",
    logo: "🔐",
    period: "2025 — Present",
    roles: [
      {
        title: "Contributing Engineer — Android / Identity",
        period: "2025 — Present",
        points: [
          "Contributing engineer on a merged Altme + AlphaWallet Android APK integrating W3C Verifiable Credentials holder flows with an embedded crypto wallet.",
          "Designed and wired the normalized holder-flow activity chain across six Android Activities with consistent internal data contracts.",
          "Built the issuer-path scaffolding against a 15-field normalized issuer contract with Java, XML layouts, and Gradle builds.",
          "Implemented Keycloak-backed portal authentication with real sign-in, role mapping, and protected admin routes.",
        ],
      },
    ],
  },
  {
    company: "University of Technology Sydney",
    logo: "🎓",
    period: "2024",
    roles: [
      {
        title: "Data Scientist — UTS Industry Capstone",
        period: "2024",
        points: [
          "Developed ML models (Random Forest, SVM, ensemble learning) for healthcare and weather predictive analytics with high accuracy.",
          "Delivered stakeholder presentations with Tableau and Power BI dashboards communicating model performance to non-technical audiences.",
          "Applied cross-validation, ROC/AUC, precision-recall analysis, and confusion matrices for rigorous model evaluation.",
        ],
      },
    ],
  },
];

const PROJECTS = [
  {
    num: "01",
    title: "ML1 — Deep Learning Credit Risk Scorer",
    subtitle: "PyTorch attention NN + XGBoost · AUC 0.7689",
    points: [
      "Production-grade credit default risk scorer combining a PyTorch attention neural network with XGBoost baseline, trained on 307K real loan applications.",
      "Custom FeatureAttention gate learns per-feature importance; 143 engineered features including domain ratios, EXT_SOURCE aggregates, and polynomial interactions.",
      "FastAPI REST service (/predict, /predict/batch) + Streamlit dark dashboard with live gauges, ROC curves, SHAP explainability, and interactive risk ratios.",
      "34/34 pytest tests passing · CI with GitHub Actions · BCEWithLogitsLoss with pos_weight=11.4 for class imbalance.",
    ],
    tags: ["PyTorch", "XGBoost", "FastAPI", "Streamlit", "SHAP", "scikit-learn"],
    link: "https://github.com/fahadamjad009/ml1-credit-risk-scorer",
    live: "https://ml1-credit-risk-scorer.streamlit.app",
  },
  {
    num: "02",
    title: "ASX/ABS Early Warning Platform",
    subtitle: "Financial risk detection with ML",
    points: [
      "Built an ML pipeline combining ASX market data with macroeconomic indicators for financial risk detection using XGBoost and Random Forest ensemble.",
      "Engineered features: 12-month returns, rolling volatility, maximum drawdown, momentum, and liquidity proxies from real ASX price data.",
      "Deployed as a Streamlit dashboard with FastAPI scoring service, calibrated threshold (0.8267), and interactive risk visualizations.",
      "Implemented CI/CD with GitHub Actions, Docker containerization, and 8-test pytest suite.",
    ],
    tags: ["Python", "XGBoost", "scikit-learn", "FastAPI", "Streamlit", "Docker"],
    link: "https://github.com/fahadamjad009/asx-abs-early-warning",
    live: "https://asx-early-warning.streamlit.app",
  },
  {
    num: "03",
    title: "NLP1 — Financial Sentiment & NER Transformer",
    subtitle: "DistilBERT fine-tuned · 87.9% accuracy",
    points: [
      "Fine-tuned DistilBERT on financial news for 3-class sentiment classification (positive/negative/neutral) achieving 87.9% accuracy on held-out test set.",
      "Named Entity Recognition pipeline extracting companies, tickers, and financial events from earnings reports and news articles.",
      "HuggingFace Transformers training pipeline with custom tokenization, class-weighted loss, and evaluation metrics (F1, precision, recall per class).",
      "FastAPI inference service + Streamlit demo with batch processing and confidence scores.",
    ],
    tags: ["PyTorch", "HuggingFace", "DistilBERT", "NLP", "FastAPI", "Streamlit"],
    link: "https://github.com/fahadamjad009/nlp1-financial-sentiment",
  },
  {
    num: "04",
    title: "DE1 — Airflow + dbt + DuckDB Pipeline",
    subtitle: "ASX Financial Data Engineering · Medallion Architecture",
    points: [
      "End-to-end financial data pipeline ingesting ASX market data through Bronze → Silver → Gold medallion layers using Apache Airflow orchestration.",
      "dbt transformations for data quality, business logic, and analytical models; DuckDB as the analytical engine with sub-second query performance.",
      "Docker-containerized stack with Streamlit analytics dashboard consuming Gold layer aggregates.",
      "Demonstrates production data engineering: DAG scheduling, lineage tracking, schema tests, and incremental loading.",
    ],
    tags: ["Airflow", "dbt", "DuckDB", "Docker", "Python", "Streamlit"],
    link: "https://github.com/fahadamjad009/de1-airflow-dbt-duckdb-pipeline",
  },
  {
    num: "05",
    title: "T1-RAG-REG Regulatory Intelligence",
    subtitle: "Hybrid RAG · APRA + AUSTRAC compliance",
    points: [
      "Evaluation-first RAG system with hybrid retrieval (BM25 + dense vectors) and reciprocal rank fusion for Australian regulatory document search.",
      "Evaluated with Recall@K, MRR, nDCG retrieval quality metrics; deployed as a FastAPI service with fail-closed safety design.",
      "Built for APRA prudential standards and AUSTRAC AML/CTF guidance — demonstrates enterprise AI capability in RegTech.",
      "Hardened to blueprint standard: false README claims removed, CI passing, stale artifacts untracked.",
    ],
    tags: ["Python", "FastAPI", "BM25", "FAISS", "sentence-transformers", "RAG"],
    link: "https://github.com/fahadamjad009/t1-rag-reg",
  },
  {
    num: "06",
    title: "NLP2 — ESG Regulatory Intelligence",
    subtitle: "NER + topic modelling + semantic similarity",
    points: [
      "Multi-task NLP pipeline extracting ESG entities, classifying regulatory topics, and computing semantic similarity across sustainability disclosures.",
      "Named Entity Recognition for ESG-specific entities (environmental targets, governance structures, social commitments) using fine-tuned transformer.",
      "Topic modelling with BERTopic for thematic clustering of regulatory documents; cosine similarity for cross-document alignment.",
      "Demonstrates advanced NLP beyond sentiment: structured extraction from unstructured regulatory text.",
    ],
    tags: ["PyTorch", "HuggingFace", "BERTopic", "NLP", "ESG", "Streamlit"],
    link: "https://github.com/fahadamjad009/nlp2-esg-regulatory-intelligence",
  },
  {
    num: "07",
    title: "NLP3 — Crypto Financial News Intelligence",
    subtitle: "Multi-label NLP · ticker sentiment · crypto signals",
    points: [
      "Multi-label classification pipeline tagging crypto news with sentiment, asset tickers, event types, and market impact signals.",
      "Real-time news ingestion pipeline with entity linking to CoinGecko asset universe; aggregated sentiment scores per ticker.",
      "Transformer-based multi-label classifier with threshold tuning for precision/recall trade-off across 20+ label classes.",
      "Streamlit dashboard with live sentiment feeds, ticker-level trend charts, and signal aggregation.",
    ],
    tags: ["PyTorch", "HuggingFace", "Multi-label", "Crypto", "NLP", "Streamlit"],
    link: "https://github.com/fahadamjad009/nlp3-crypto-financial-news-intelligence",
  },
  {
    num: "08",
    title: "BI — Financial KPI Command Centre",
    subtitle: "Executive-grade financial intelligence dashboard",
    points: [
      "Executive-grade financial intelligence dashboard analysing US large-cap bank quarterly performance across revenue, margins, efficiency ratios, and risk metrics.",
      "Power BI + Python pipeline ingesting SEC filings and Yahoo Finance data; automated ETL with scheduled refresh.",
      "KPI scorecards, waterfall charts, cohort analysis, and YoY/QoQ variance decomposition across 20+ financial metrics.",
      "Demonstrates BI engineering: data modelling, DAX measures, drill-through, and stakeholder-ready visualisation.",
    ],
    tags: ["Power BI", "Python", "DAX", "SQL", "Financial Analytics"],
    link: "https://github.com/fahadamjad009/bi-financial-kpi-command-centre",
  },
  {
    num: "09",
    title: "ASX Tableau Intelligence",
    subtitle: "Interactive Tableau · 11 GICS sectors · live demo",
    points: [
      "Interactive Tableau dashboard analysing ASX market intelligence across all 11 GICS sectors with sector rotation, performance heatmaps, and volatility analysis.",
      "9-sheet workbook published to Tableau Public with story-driven narrative: market overview → sector drill-down → stock screener.",
      "Custom calculated fields for rolling returns, Z-score normalisation, and relative strength indicators.",
    ],
    tags: ["Tableau", "Python", "ASX", "Financial Analytics", "Data Viz"],
    link: "https://github.com/fahadamjad009/asx-tableau-intelligence",
    live: "https://public.tableau.com/app/profile/fahad.amjad2750",
  },
  {
    num: "10",
    title: "FinTech Fraud Detection Platform",
    subtitle: "XGBoost champion · cost-based decision threshold",
    points: [
      "End-to-end fraud detection ML platform using XGBoost champion model with cost-sensitive threshold optimisation minimising financial loss.",
      "Feature engineering from transaction patterns: velocity features, merchant risk scores, temporal aggregations, and behavioural baselines.",
      "Calibrated probability outputs with Platt scaling; business-metric-driven threshold at optimal cost-benefit inflection point.",
      "FastAPI scoring service with real-time and batch endpoints; Streamlit dashboard with fraud analytics and model explainability.",
    ],
    tags: ["Python", "XGBoost", "FastAPI", "Streamlit", "SHAP", "scikit-learn"],
    link: "https://github.com/fahadamjad009/fintech-fraud-detection-platform",
  },
  {
    num: "11",
    title: "Customer Churn Benchmark Pipeline",
    subtitle: "ML benchmarking · model comparison",
    points: [
      "Reproducible benchmarking pipeline comparing Random Forest, Logistic Regression, and XGBoost for customer churn prediction with CLV-weighted business metrics.",
      "Streamlit dashboard displaying ROC curves, confusion matrices, and model comparison metrics.",
      "Demonstrates MLOps thinking: reproducible evaluation, model selection, and interactive results communication.",
    ],
    tags: ["Python", "XGBoost", "LightGBM", "Streamlit", "scikit-learn"],
    link: "https://github.com/fahadamjad009/customer-churn-ml-benchmark",
  },
  {
    num: "12",
    title: "Mining Operations Analytics Platform",
    subtitle: "Industrial IoT · predictive maintenance",
    points: [
      "Predictive maintenance platform using equipment telemetry data for downtime risk prediction with SHAP explainability and KS drift detection.",
      "ML models for failure forecasting with Streamlit dashboards and end-to-end analytics workflow.",
      "Demonstrates domain analytics capability in industrial/IoT context beyond financial services.",
    ],
    tags: ["Python", "scikit-learn", "SHAP", "Streamlit", "Predictive Analytics"],
    link: "https://github.com/fahadamjad009/mining-operations-analytics-platform",
  },
];

const SKILLS = [
  {
    num: "I",
    title: "Languages & ML",
    items: [
      "Python",
      "SQL",
      "R",
      "PyTorch",
      "XGBoost",
      "LightGBM",
      "Random Forest",
      "scikit-learn",
      "Pandas",
      "NumPy",
    ],
  },
  {
    num: "II",
    title: "NLP & Deep Learning",
    items: [
      "HuggingFace Transformers",
      "DistilBERT",
      "Fine-tuning",
      "NER",
      "Sentiment Analysis",
      "BERTopic",
      "Multi-label Classification",
    ],
  },
  {
    num: "III",
    title: "Data Engineering",
    items: [
      "Apache Airflow",
      "dbt",
      "DuckDB",
      "FastAPI",
      "ETL Pipelines",
      "Medallion Architecture",
      "GitHub Actions",
      "Docker",
    ],
  },
  {
    num: "IV",
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "BigQuery", "Snowflake", "MongoDB", "DuckDB", "FAISS"],
  },
  {
    num: "V",
    title: "Visualisation & BI",
    items: ["Tableau", "Power BI", "Streamlit", "Plotly", "Matplotlib", "DAX"],
  },
  {
    num: "VI",
    title: "Cloud & DevOps",
    items: ["AWS (EC2, S3)", "GCP (BigQuery, Vertex AI)", "Azure", "Docker", "Git/GitHub", "CI/CD"],
  },
  {
    num: "VII",
    title: "AI & RAG",
    items: ["RAG Systems", "BM25 + Vector Search", "sentence-transformers", "SHAP", "Hybrid Retrieval", "LLM Integration"],
  },
  {
    num: "VIII",
    title: "Domain Knowledge",
    items: [
      "Financial Analytics",
      "Credit Risk Modelling",
      "Regulatory Compliance (APRA/AUSTRAC)",
      "Fraud Detection",
      "ESG Analytics",
      "Accounting (AASB)",
    ],
  },
];

function useTypewriter(words, typingSpeed = 80, deletingSpeed = 40, pause = 2000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setText(current.substring(0, text.length + (isDeleting ? -1 : 1)));
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return text;
}

export default function Portfolio() {
  const typedRole = useTypewriter(ROLES);

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap');

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --bg: #0a0a0a;
      --bg2: #111111;
      --bg3: #1a1a1a;
      --bg4: #222222;
      --border: #2a2a2a;
      --text: #ededed;
      --text2: #999;
      --text3: #666;
      --accent: #64ffda;
      --accent2: #5ce0c8;
      --blue: #6699ff;
      --font: 'Inter', -apple-system, sans-serif;
      --mono: 'JetBrains Mono', monospace;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      background: var(--bg);
      color: var(--text);
      font-family: var(--font);
      line-height: 1.6;
    }

    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes blink {
      0%, 100% {
        opacity: 1;
      }

      50% {
        opacity: 0;
      }
    }

    .nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      background: rgba(10, 10, 10, 0.85);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border);
      padding: 0 48px;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .nav-logo {
      font-size: 18px;
      font-weight: 800;
      color: var(--accent);
      font-family: var(--mono);
      letter-spacing: 2px;
      text-decoration: none;
    }

    .nav-links {
      display: flex;
      gap: 32px;
    }

    .nav-links a {
      color: var(--text2);
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;
      transition: color 0.2s;
    }

    .nav-links a:hover,
    .nav-links a.active {
      color: var(--accent);
    }

    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding: 0 48px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .hero-content {
      animation: fadeUp 0.8s ease;
    }

    .hero-hello {
      color: var(--accent);
      font-family: var(--mono);
      font-size: 16px;
      margin-bottom: 12px;
    }

    .hero-name {
      font-size: 64px;
      font-weight: 900;
      color: var(--text);
      letter-spacing: -2px;
      margin-bottom: 8px;
      line-height: 1.1;
    }

    .hero-typed {
      font-size: 20px;
      color: var(--text2);
      margin-bottom: 20px;
      height: 30px;
    }

    .hero-typed span {
      color: var(--accent);
      font-family: var(--mono);
    }

    .hero-cursor {
      animation: blink 0.8s infinite;
      color: var(--accent);
    }

    .hero-sub {
      font-size: 15px;
      color: var(--text3);
      max-width: 560px;
      margin-bottom: 8px;
    }

    .hero-role {
      font-size: 14px;
      color: var(--text2);
      margin-bottom: 28px;
    }

    .hero-role strong {
      color: var(--text);
    }

    .hero-btns {
      display: flex;
      gap: 16px;
      margin-bottom: 24px;
    }

    .btn {
      padding: 12px 28px;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.2s;
      cursor: pointer;
      font-family: var(--font);
    }

    .btn-primary {
      background: transparent;
      border: 1px solid var(--accent);
      color: var(--accent);
    }

    .btn-primary:hover {
      background: rgba(100, 255, 218, 0.1);
    }

    .btn-ghost {
      background: transparent;
      border: 1px solid var(--border);
      color: var(--text2);
    }

    .btn-ghost:hover {
      border-color: var(--accent);
      color: var(--accent);
    }

    .hero-socials {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }

    .hero-socials a {
      color: var(--text3);
      text-decoration: none;
      font-size: 14px;
      font-family: var(--mono);
      transition: color 0.2s;
    }

    .hero-socials a:hover {
      color: var(--accent);
    }

    .section {
      padding: 100px 48px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-title {
      font-size: 32px;
      font-weight: 800;
      margin-bottom: 48px;
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .section-title::after {
      content: '';
      flex: 1;
      height: 1px;
      background: var(--border);
    }

    .exp-item {
      display: flex;
      gap: 24px;
      margin-bottom: 48px;
      animation: fadeUp 0.6s ease;
    }

    .exp-logo {
      width: 56px;
      height: 56px;
      border-radius: 12px;
      background: var(--bg3);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
      flex-shrink: 0;
      border: 1px solid var(--border);
    }

    .exp-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 16px;
      flex-wrap: wrap;
      gap: 8px;
    }

    .exp-company {
      font-size: 20px;
      font-weight: 700;
    }

    .exp-period {
      font-size: 14px;
      color: var(--text3);
      font-family: var(--mono);
    }

    .exp-role-title {
      font-size: 16px;
      font-weight: 600;
      color: var(--accent);
      margin-bottom: 4px;
    }

    .exp-role-period {
      font-size: 13px;
      color: var(--text3);
      margin-bottom: 12px;
    }

    .exp-points {
      list-style: none;
    }

    .exp-points li {
      position: relative;
      padding-left: 20px;
      margin-bottom: 8px;
      font-size: 14px;
      color: var(--text2);
      line-height: 1.7;
    }

    .exp-points li::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: var(--accent);
    }

    .proj-grid {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }

    .proj-card {
      background: var(--bg2);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 32px;
      transition: all 0.3s;
      position: relative;
      overflow: hidden;
    }

    .proj-card:hover {
      border-color: var(--accent);
      transform: translateY(-4px);
      box-shadow: 0 16px 48px rgba(100, 255, 218, 0.06);
    }

    .proj-num {
      font-size: 48px;
      font-weight: 900;
      color: var(--bg4);
      font-family: var(--mono);
      position: absolute;
      top: 16px;
      right: 24px;
    }

    .proj-title {
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 4px;
      padding-right: 56px;
    }

    .proj-subtitle {
      font-size: 14px;
      color: var(--accent);
      font-family: var(--mono);
      margin-bottom: 16px;
    }

    .proj-points {
      list-style: none;
      margin-bottom: 16px;
    }

    .proj-points li {
      position: relative;
      padding-left: 20px;
      margin-bottom: 6px;
      font-size: 14px;
      color: var(--text2);
      line-height: 1.7;
    }

    .proj-points li::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: var(--accent);
    }

    .proj-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 16px;
    }

    .proj-tag {
      font-size: 12px;
      padding: 4px 12px;
      border-radius: 20px;
      background: rgba(100, 255, 218, 0.08);
      color: var(--accent);
      font-family: var(--mono);
      border: 1px solid rgba(100, 255, 218, 0.15);
    }

    .proj-links {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }

    .proj-link {
      font-size: 13px;
      color: var(--text2);
      text-decoration: none;
      font-family: var(--mono);
      transition: color 0.2s;
    }

    .proj-link:hover {
      color: var(--accent);
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 16px;
    }

    .skill-card {
      background: var(--bg2);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 24px;
      transition: border-color 0.2s;
    }

    .skill-card:hover {
      border-color: var(--accent);
    }

    .skill-num {
      font-size: 12px;
      color: var(--accent);
      font-family: var(--mono);
      margin-bottom: 4px;
    }

    .skill-title {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 12px;
    }

    .skill-items {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }

    .skill-item {
      font-size: 13px;
      color: var(--text2);
      padding: 4px 10px;
      background: var(--bg3);
      border-radius: 4px;
    }

    .contact {
      text-align: center;
      padding: 80px 48px;
    }

    .contact-text {
      font-size: 16px;
      color: var(--text2);
      margin-bottom: 24px;
    }

    .contact-btns {
      display: flex;
      gap: 16px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .footer {
      text-align: center;
      padding: 32px;
      border-top: 1px solid var(--border);
      font-size: 13px;
      color: var(--text3);
    }

    @media (max-width: 768px) {
      .nav {
        padding: 0 20px;
      }

      .nav-links {
        gap: 16px;
      }

      .nav-links a {
        font-size: 12px;
      }

      .hero {
        padding: 0 20px;
      }

      .hero-name {
        font-size: 36px;
      }

      .section {
        padding: 60px 20px;
      }

      .skills-grid {
        grid-template-columns: 1fr;
      }

      .exp-item {
        flex-direction: column;
      }
    }
  `;

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <style>{css}</style>

      <nav className="nav">
        <a href="#home" className="nav-logo">
          FAHAD
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-hello">Hello, my name is</div>

          <h1 className="hero-name">FAHAD AMJAD</h1>

          <div className="hero-typed">
            <span>{typedRole}</span>
            <span className="hero-cursor">|</span>
          </div>

          <p className="hero-sub">
            Building ML systems, data pipelines, and analytics platforms.
            Combining financial domain expertise with production-grade data science.
          </p>

          <p className="hero-role">
            <strong>Data Scientist & Analytics Engineer</strong> — Sydney, NSW
            <br />
            UTS Master of Data Science (Distinction) + Master of Professional Accounting
          </p>

          <div className="hero-btns">
            <a href={RESUME_URL} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              View Resume
            </a>

            <a href="#projects" className="btn btn-ghost">
              See Projects
            </a>
          </div>

          <div className="hero-socials">
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
              linkedin.com/in/fahad-amjad009
            </a>

            <a href={GITHUB} target="_blank" rel="noopener noreferrer">
              github.com/fahadamjad009
            </a>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <h2 className="section-title">Experience</h2>

        {EXPERIENCE.map((exp) => (
          <div key={exp.company} className="exp-item">
            <div className="exp-logo">{exp.logo}</div>

            <div style={{ flex: 1 }}>
              <div className="exp-header">
                <span className="exp-company">{exp.company}</span>
                <span className="exp-period">{exp.period}</span>
              </div>

              {exp.roles.map((role) => (
                <div key={role.title} style={{ marginBottom: 20 }}>
                  <div className="exp-role-title">{role.title}</div>
                  <div className="exp-role-period">{role.period}</div>

                  <ul className="exp-points">
                    {role.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section id="projects" className="section">
        <h2 className="section-title">Projects</h2>

        <div className="proj-grid">
          {PROJECTS.map((project) => (
            <div key={project.title} className="proj-card">
              <div className="proj-num">{project.num}</div>

              <h3 className="proj-title">{project.title}</h3>

              <div className="proj-subtitle">{project.subtitle}</div>

              <ul className="proj-points">
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="proj-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="proj-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="proj-links">
                <a href={project.link} className="proj-link" target="_blank" rel="noopener noreferrer">
                  GitHub ↗
                </a>

                {project.live && (
                  <a href={project.live} className="proj-link" target="_blank" rel="noopener noreferrer">
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          {SKILLS.map((category) => (
            <div key={category.title} className="skill-card">
              <div className="skill-num">{category.num}</div>
              <h4 className="skill-title">{category.title}</h4>

              <div className="skill-items">
                {category.items.map((skill) => (
                  <span key={skill} className="skill-item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <h2 className="section-title" style={{ justifyContent: "center" }}>
          Contact
        </h2>

        <p className="contact-text">
          Open to new opportunities in Data Science, Analytics Engineering, and AI/ML roles.
          <br />
          Reach out via LinkedIn or email.
        </p>

        <div className="contact-btns">
          <a href={LINKEDIN} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>

          <a href={GITHUB} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>

          <a href={`mailto:${EMAIL}`} className="btn btn-ghost">
            Email
          </a>
        </div>
      </section>

      <div className="footer">Designed & Built by Fahad Amjad · 2026</div>
    </div>
  );
}
