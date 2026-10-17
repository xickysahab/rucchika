export const portfolioData = {
  personal: {
    name: "Rucchika Bhatia",
    shortName: "Rucchika",
    role: "AI Platform Engineer",
    targetRole: "AI Platform Engineer | 8+ Years of Experience",
    experienceYears: "8+ Years",
    headline: "AI Platform Engineer & Multi-Cloud Architect",
    summary: "AI Platform Engineer and cloud platform professional with 8+ years of experience in architecting, automating, and scaling enterprise-grade platforms across AWS, Azure, and GCP. Experienced in cloud and data engineering, resilient data pipelines, real-time streaming architectures, and analytics platforms in multi-cloud environments. Focused on enabling AI tool technologies, secure cloud foundations, platform reliability, observability, and repeatable delivery through infrastructure as code, CI/CD, and container orchestration.",
    subheadline: "AI Platform Engineer and cloud platform professional with 8+ years of experience architecting, automating, and scaling enterprise platforms across AWS, Azure, and GCP — specializing in AI tool technologies, GraphTalk, and multi-cloud reliability.",
    positioning: "AI Platform Engineer • Cloud & Data Engineering • MLOps & AIOps • GraphTalk Platform",
    brandPromise: "Building intelligent, secure, and repeatable cloud & AI platforms through IaC and automation.",
    location: "Global / Remote",
    status: "Available for Leadership & Contractual DevOps/AI Consulting",
    email: "rucchikabhatia@gmail.com",
    github: "https://github.com/Rucchika/My_Project",
    githubProfile: "https://github.com/Rucchika",
    linkedin: "https://www.linkedin.com/in/rucchika-bhatia/",
    whatsapp: "https://wa.me/918319295211",
    whatsappUsername: "@_Rucchika",
    medium: "https://medium.com/@rucchikabhatia",
    phone: "+91-8319295211",
    avatar: "/images/profile.png",
    banner: "/images/ai-platform-engineer-banner.jpg",
    resumeUrl: "#",
    hobbies: [
      { name: "Cooking", desc: "Crafting wholesome culinary creations, experimenting with rich spices, herbs, and vibrant flavor profiles.", image: "/images/cooking.jpg", tag: "Culinary Art" },
      { name: "Meditation & Mindfulness", desc: "Cultivating stillness, mental clarity, and reflective awareness to fuel sustained focus and high-stakes problem solving.", image: "/images/meditation.jpg", tag: "Mindfulness & Zen" },
      { name: "Reading", desc: "Deep diving into systems engineering, distributed architecture, and self-evolution literature.", image: "/images/reading.png", tag: "Continuous Learning" },
      { name: "Adventure", desc: "Exploring untamed wildlife, natural sanctuaries, and thrill sports across diverse destinations.", image: "/images/adventure.jpg", tag: "Exploration" }
    ],
    extraCurricular: [
      { title: "Teaching", role: "Technical Educator", desc: "Conducting hands-on workshops on Linux fundamentals, Docker containerization, Kubernetes, and multi-cloud architecture.", icon: "GraduationCap" },
      { title: "Mentoring", role: "Engineering Mentor", desc: "Guiding aspiring cloud engineers, junior DevOps practitioners, and platform leads with actionable 1:1 career roadmaps.", icon: "Users" },
      { title: "DevOps & AI Platform Consulting", role: "Contractual Consultant", desc: "Available for contractual advisory and platform architecture: multi-cloud infrastructure automation, Kubernetes production hardening, and GenAI/MLOps platform delivery.", icon: "Briefcase" }
    ],
    stats: [
      { label: "Experience", value: "8+ Years", desc: "Multi-Cloud & AI Platforms" },
      { label: "Client Environments", value: "30+", desc: "AWS, GCP & Azure Deployments" },
      { label: "Multi-Cloud Uptime", value: "99.9%", desc: "Sustained over 3+ Years" },
      { label: "Deployment Velocity", value: "-60%", desc: "CI/CD & GitOps Automation" },
    ]
  },

  snapshots: [
    {
      title: "Cloud Infrastructure",
      desc: "Architecting resilient multi-region infrastructure with Terraform and CloudFormation across AWS, Azure, and GCP.",
      badge: "Multi-Cloud"
    },
    {
      title: "DevOps & Automation",
      desc: "Zero-touch CI/CD pipelines, container orchestration with Kubernetes, Helm, and GitOps workflows via ArgoCD.",
      badge: "GitOps & CI/CD"
    },
    {
      title: "GraphTalk & AI Platform",
      desc: "Architecting GraphTalk with Knowledge Graphs, hybrid RAG pipelines, sub-200ms semantic search, and zero-hallucination guardrails.",
      badge: "GraphTalk & GenAI"
    },
    {
      title: "MLOps Pipelines",
      desc: "Automated model training, tracking with MLflow, Kubeflow orchestration, and zero-downtime model rollouts.",
      badge: "Model Lifecycle"
    },
    {
      title: "Observability & AIOps",
      desc: "Proactive telemetry with Prometheus, Grafana, OpenTelemetry, and ML-assisted anomaly detection & alert suppression.",
      badge: "Real-time Telemetry"
    },
    {
      title: "Platform Engineering",
      desc: "Building internal developer platforms (IDP), self-service infrastructure blueprints, and secure developer golden paths.",
      badge: "Developer Experience"
    }
  ],

  domains: [
    {
      id: "cloud",
      number: "01",
      title: "Cloud Engineering",
      shortDesc: "Multi-cloud architecture, high availability, and infrastructure design across public clouds.",
      platforms: ["AWS", "Microsoft Azure", "Google Cloud Platform (GCP)"],
      highlights: [
        { name: "AWS Core", items: ["EC2, S3, VPC, IAM", "ELB, Auto Scaling, RDS Multi-AZ", "SQS, SNS, CloudWatch, Lambda"] },
        { name: "Azure Core", items: ["Virtual Machines & Scale Sets", "Azure Virtual Network & Entra ID", "Azure Monitor, Storage & AKS"] },
        { name: "GCP Core", items: ["Compute Engine, GKE", "Cloud Storage, VPC Peering", "BigQuery, Cloud Composer"] }
      ],
      practicalApplication: "Designed auto-scaling VPC topologies with cross-region replication and automated failover, reducing single-point-of-failure risks to near zero."
    },
    {
      id: "devops",
      number: "02",
      title: "DevOps & Infrastructure Automation",
      shortDesc: "End-to-end continuous delivery, infrastructure as code, and immutable artifact lifecycles.",
      platforms: ["Terraform", "Kubernetes", "Docker", "GitHub Actions", "ArgoCD"],
      highlights: [
        { name: "Infrastructure as Code", items: ["Terraform Modular Architectures", "AWS CloudFormation", "Ansible Configuration Management"] },
        { name: "CI/CD & GitOps", items: ["GitHub Actions Matrix Workflows", "Jenkins Declarative Pipelines", "GitLab CI/CD & ArgoCD Sync"] },
        { name: "Containers & Scripts", items: ["Docker Multi-Stage Builds", "Kubernetes Manifests & Helm Charts", "Python & Bash Automation Scripts"] }
      ],
      practicalApplication: "Automated provisioning of 50+ microservices environments in under 12 minutes using modular Terraform code and GitHub Actions."
    },
    {
      id: "genai",
      number: "03",
      title: "AI & Generative AI Systems",
      shortDesc: "Production-grade GenAI pipelines, contextual retrieval, and LLM orchestration infrastructure.",
      platforms: ["GraphTalk", "Knowledge Graphs", "RAG Architecture", "Vector Databases", "LLM APIs", "LangChain / LlamaIndex"],
      highlights: [
        { name: "GraphTalk Product Development", items: ["Knowledge Graph + Hybrid RAG platform engineering", "Sub-200ms graph traversal & contextual semantic indexing", "Enterprise guardrails & zero-hallucination suppression"] },
        { name: "Generative AI Architectures", items: ["Retrieval-Augmented Generation (RAG)", "Semantic Search & Dense Embeddings", "Prompt Engineering & Guardrails"] },
        { name: "Vector & Storage", items: ["Pinecone, Qdrant, Milvus & pgvector", "Document Ingestion & Chunking Strategies", "Hybrid Keyword + Dense Search"] },
        { name: "AI Platform Infrastructure", items: ["vLLM & Triton Inference Server", "GPU Cluster Scheduling & Quotas", "Model Security, Token Rate Limiting & Auditing"] }
      ],
      practicalApplication: "Architected and engineered GraphTalk, fusing enterprise Knowledge Graphs with hybrid RAG to achieve sub-200ms factual retrieval across 150k+ technical entities."
    },
    {
      id: "mlops",
      number: "04",
      title: "Machine Learning & MLOps",
      shortDesc: "Reproducible model development, experiment tracking, automated retraining, and model registries.",
      platforms: ["MLflow", "Kubeflow", "SageMaker", "Vertex AI", "DVC"],
      highlights: [
        { name: "Experiment & Model Registry", items: ["MLflow Experiment Tracking", "Model Lineage & Version Control", "Artifact Storage & Model Signoff"] },
        { name: "Automated ML Pipelines", items: ["Continuous Training Triggers", "Data Drift & Concept Drift Detection", "Automated Validation Gates"] },
        { name: "Deployment Patterns", items: ["Canary & Shadow Deployments", "A/B Testing Infrastructure", "FastAPI / BentoML Model Serving"] }
      ],
      practicalApplication: "Created an end-to-end ML pipeline with MLflow and Kubernetes that reduced model rollout time from 3 weeks to 45 minutes with zero downtime."
    },
    {
      id: "observability",
      number: "05",
      title: "AIOps & Observability",
      shortDesc: "Full-stack telemetry, distributed tracing, automated incident triage, and intelligent alerting.",
      platforms: ["Prometheus", "Grafana", "OpenTelemetry", "ELK Stack", "CloudWatch"],
      highlights: [
        { name: "Telemetry Collection", items: ["Prometheus Metrics & Alertmanager", "OpenTelemetry Traces & Spans", "Grafana Unified Dashboards"] },
        { name: "Centralized Logging", items: ["Elasticsearch, Logstash & Kibana", "Fluentbit Log Aggregation", "Structured JSON Log Standards"] },
        { name: "AIOps & Anomaly Detection", items: ["Dynamic Baseline Thresholding", "Alert De-duplication & Correlation", "Automated Healing / Runbook Triggers"] }
      ],
      practicalApplication: "Reduced alert fatigue by 74% by implementing ML-driven noise suppression and automated root-cause metric correlation across 120 services."
    },
    {
      id: "data",
      number: "06",
      title: "Data Engineering & Analytics",
      shortDesc: "Scalable data ingestion, workflow orchestration, and high-performance analytical data stores.",
      platforms: ["Python", "SQL", "Apache Airflow", "Google BigQuery", "Cloud Composer"],
      highlights: [
        { name: "Orchestration & Workflow", items: ["Apache Airflow DAG Authoring", "GCP Cloud Composer Environments", "Task Retries & Backfill Management"] },
        { name: "Data Warehousing & SQL", items: ["Google BigQuery Partitioning & Clustering", "Advanced SQL & Window Functions", "Data Modeling & Star Schemas"] },
        { name: "Data Quality & CI", items: ["Great Expectations Validation", "Schema Evolution Protection", "Data Freshness SLA Monitoring"] }
      ],
      practicalApplication: "Engineered scalable ETL pipelines processing 4TB+ daily data into BigQuery with automated schema validation and 99.8% SLA compliance."
    },
    {
      id: "platform",
      number: "07",
      title: "Platform Engineering & IDP",
      shortDesc: "Internal developer platforms, self-service golden paths, and GitOps developer experiences.",
      platforms: ["Backstage / Port", "Crossplane", "ArgoCD", "Kubernetes CRDs", "Vault"],
      highlights: [
        { name: "Developer Experience (DevEx)", items: ["Self-Service Service Catalog", "Golden Path Infrastructure Templates", "Environment Provisioning On-Demand"] },
        { name: "GitOps & Policy", items: ["ArgoCD Declarative App Management", "Kyverno / OPA Policy as Code", "RBAC & HashiCorp Vault Secrets"] },
        { name: "Platform Observability", items: ["Cluster Resource Quotas & Cost Tracking", "SLO / Error Budget Dashboards", "Cluster Autoscaler & Karpenter"] }
      ],
      practicalApplication: "Empowered 40+ developers with one-click staging environment creation using GitOps and Kubernetes operator templates."
    },
    {
      id: "security",
      number: "08",
      title: "Architecture, Security & Reliability",
      shortDesc: "Enterprise resilience, zero-trust cloud security, cost governance, and disaster recovery.",
      platforms: ["Zero Trust", "IAM Least Privilege", "AWS Well-Architected", "FinOps", "Disaster Recovery"],
      highlights: [
        { name: "Resilience & HA", items: ["Active-Active Multi-Region Setups", "RPO < 5min & RTO < 15min Design", "Chaos Engineering & Load Testing"] },
        { name: "Security & Governance", items: ["Cloud Security Posture Management (CSPM)", "KMS Key Rotation & Secrets Management", "Least-Privilege Role Policies"] },
        { name: "Cost Governance & FinOps", items: ["AWS Cost Explorer & Spot Optimization", "Kubernetes Right-Sizing", "Idle Resource Automated Reclamation"] }
      ],
      practicalApplication: "Achieved a 32% annual cloud cost reduction by implementing automated spot instances, ARM-based Graviton migration, and storage tiering."
    }
  ],

  techStack: [
    { name: "AWS", category: "Cloud", level: "Professional Experience", icon: "Cloud" },
    { name: "Microsoft Azure", category: "Cloud", level: "Professional Experience", icon: "Cloud" },
    { name: "Google Cloud (GCP)", category: "Cloud", level: "Professional Experience", icon: "Cloud" },
    { name: "Terraform", category: "IaC & Automation", level: "Professional Experience", icon: "FileCode" },
    { name: "CloudFormation", category: "IaC & Automation", level: "Professional Experience", icon: "FileCode" },
    { name: "Ansible", category: "IaC & Automation", level: "Hands-on Projects", icon: "Terminal" },
    { name: "Docker", category: "Containers", level: "Professional Experience", icon: "Box" },
    { name: "Kubernetes (K8s)", category: "Containers", level: "Professional Experience", icon: "Boxes" },
    { name: "Helm", category: "Containers", level: "Professional Experience", icon: "Package" },
    { name: "GitHub Actions", category: "CI/CD", level: "Professional Experience", icon: "GitBranch" },
    { name: "Jenkins", category: "CI/CD", level: "Professional Experience", icon: "Cpu" },
    { name: "ArgoCD", category: "CI/CD", level: "Hands-on Projects", icon: "RefreshCw" },
    { name: "Python", category: "Programming", level: "Professional Experience", icon: "Code" },
    { name: "Bash & Shell", category: "Programming", level: "Professional Experience", icon: "Terminal" },
    { name: "SQL", category: "Programming", level: "Professional Experience", icon: "Database" },
    { name: "Prometheus", category: "Observability", level: "Professional Experience", icon: "Activity" },
    { name: "Grafana", category: "Observability", level: "Professional Experience", icon: "BarChart3" },
    { name: "ELK Stack", category: "Observability", level: "Professional Experience", icon: "Search" },
    { name: "OpenTelemetry", category: "Observability", level: "Hands-on Projects", icon: "Radio" },
    { name: "Apache Airflow", category: "Data Engineering", level: "Professional Experience", icon: "Workflow" },
    { name: "Google BigQuery", category: "Data Engineering", level: "Professional Experience", icon: "Database" },
    { name: "Cloud Composer", category: "Data Engineering", level: "Professional Experience", icon: "Layers" },
    { name: "GraphTalk (Product)", category: "AI & GenAI", level: "Professional Experience", icon: "Sparkles" },
    { name: "LLM APIs & RAG", category: "AI & GenAI", level: "Hands-on Projects", icon: "Sparkles" },
    { name: "Vector Databases (Pinecone/pgvector)", category: "AI & GenAI", level: "Hands-on Projects", icon: "Database" },
    { name: "MLflow", category: "MLOps", level: "Hands-on Projects", icon: "GitCommit" },
    { name: "Kubeflow", category: "MLOps", level: "Currently Exploring", icon: "Server" },
    { name: "Amazon SageMaker", category: "MLOps", level: "Hands-on Projects", icon: "Bot" },
    { name: "Vertex AI", category: "MLOps", level: "Currently Exploring", icon: "Bot" },
    { name: "Linux Administration", category: "Infrastructure", level: "Professional Experience", icon: "Terminal" },
    { name: "HashiCorp Vault", category: "Security", level: "Hands-on Projects", icon: "Shield" },
  ],

  projects: [
    {
      id: "project-1",
      number: "01",
      title: "Multi-Cloud Infrastructure Automation",
      subtitle: "Terraform • AWS • Azure • GCP • OIDC • GitHub Actions",
      tag: "Cloud & IaC",
      summary: "Modular, zero-trust infrastructure-as-code repository capable of orchestrating multi-region VPCs, IAM policies, and networking across AWS, Azure, and GCP through unified GitHub Actions pipelines.",
      problem: "Manual multi-cloud deployments led to drift, inconsistent security policies, and high provisioning lead times across team environments.",
      solution: "Created an opinionated Terraform module architecture with OIDC-based cloud authentication (no permanent secrets), automated terraform-docs, tfsec security scanning, and drift detection cron jobs.",
      architecture: [
        "GitHub Actions triggers on PR with OIDC federation to AWS/Azure/GCP",
        "TFLint, tfsec, and Infracost runs for security & cost estimation",
        "Terraform state locked securely in remote S3 bucket with DynamoDB locking",
        "Isolated staging and production VPCs with auto-configured NAT, Subnets, and IAM roles"
      ],
      metrics: [
        { label: "Provisioning Speed", value: "<10 Mins" },
        { label: "Configuration Drift", value: "0%" },
        { label: "Secret Leaks", value: "0 (OIDC)" }
      ],
      technologies: ["Terraform", "AWS", "Azure", "GCP", "GitHub Actions", "OIDC", "tfsec", "Infracost"],
      githubUrl: "https://github.com/Rucchika/My_Project",
      demoUrl: "#"
    },
    {
      id: "project-2",
      number: "02",
      title: "Kubernetes Platform Engineering",
      subtitle: "EKS • ArgoCD • Helm • Prometheus • Karpenter • GitOps",
      tag: "Platform Engineering",
      summary: "Production-grade Kubernetes developer platform featuring automated cluster autoscaling, GitOps synchronization, zero-trust network policies, and end-to-end telemetry.",
      problem: "Development teams faced high friction deploying microservices, lack of resource visibility, and cluster cost overruns due to inefficient autoscaling.",
      solution: "Built a self-healing Kubernetes platform managed purely through ArgoCD GitOps, using Karpenter for sub-minute node autoscaling and Cilium for microservice network security.",
      architecture: [
        "Git repository acts as single source of truth for all Kubernetes resources",
        "ArgoCD continually reconciles declared state against live EKS cluster",
        "Karpenter schedules right-sized AWS Graviton spot instances dynamically",
        "Prometheus & Grafana stack monitors pod latency, error rates, and CPU/memory saturations"
      ],
      metrics: [
        { label: "Node Spin-Up", value: "45 Seconds" },
        { label: "Compute Savings", value: "38%" },
        { label: "MTTR On Pod Crash", value: "<15 Seconds" }
      ],
      technologies: ["Kubernetes", "AWS EKS", "ArgoCD", "Helm", "Karpenter", "Prometheus", "Grafana", "Cilium"],
      githubUrl: "https://github.com/example/k8s-platform-gitops",
      demoUrl: "#"
    },
    {
      id: "project-3",
      number: "03",
      title: "GraphTalk — Conversational Graph & AI Platform",
      subtitle: "Product Engineering • Knowledge Graphs • Hybrid RAG • Python • FastAPI",
      tag: "AI Product & GenAI",
      summary: "Proprietary conversational graph platform architected and developed by Rucchika Bhatia that fuses enterprise Knowledge Graph reasoning with hybrid RAG pipelines, delivering hallucination-free contextual intelligence at sub-200ms latency.",
      problem: "Traditional semantic search and generic RAG engines lack relational awareness, suffering from hallucinated cross-domain connections and shallow document synthesis.",
      solution: "Engineered GraphTalk using Python, Knowledge Graph ontologies, hybrid search (BM25 + Dense vector embeddings), Pinecone, and real-time graph relation traversals.",
      architecture: [
        "Entity & relation extraction pipeline transforms enterprise documents into a connected Knowledge Graph",
        "Hybrid RAG engine fuses dense vector similarity with multi-hop graph entity traversal",
        "FastAPI asynchronous serving cluster executes LLM context synthesis with citation tracing",
        "Zero-hallucination guardrail layer evaluates faithfulness and context alignment before stream emission"
      ],
      metrics: [
        { label: "Query Response", value: "180ms" },
        { label: "Factuality Score", value: "99.4%" },
        { label: "Entities Indexed", value: "150,000+" }
      ],
      technologies: ["GraphTalk", "Knowledge Graphs", "Hybrid RAG", "Python", "FastAPI", "Pinecone", "LangChain", "Docker"],
      githubUrl: "https://github.com/Rucchika/My_Project",
      demoUrl: "#"
    },
    {
      id: "project-4",
      number: "04",
      title: "MLOps Automated Deployment Pipeline",
      subtitle: "MLflow • Docker • GitHub Actions • SageMaker • Model Registry",
      tag: "MLOps",
      summary: "Continuous Machine Learning pipeline enabling automated model validation, versioned artifact storage, canary rollouts, and real-time data drift monitoring.",
      problem: "Data science models remained stuck in Jupyter notebooks for months due to lack of standard packaging, validation tests, and deployment automation.",
      solution: "Developed an automated MLOps framework using MLflow and GitHub Actions that validates model accuracy thresholds before pushing containerized endpoints to AWS.",
      architecture: [
        "Training pipeline logs metrics, parameters, and model artifacts directly into MLflow",
        "Automated GitHub Action tests model schema and evaluates regression against test datasets",
        "Containerized model packaged with FastAPI and deployed as a Canary service",
        "CloudWatch monitors prediction latency and drift anomalies with automated rollback"
      ],
      metrics: [
        { label: "Rollout Velocity", value: "45 Mins" },
        { label: "Rollback Trigger", value: "Automated" },
        { label: "Zero Downtime", value: "100%" }
      ],
      technologies: ["Python", "MLflow", "Docker", "AWS SageMaker", "GitHub Actions", "Prometheus"],
      githubUrl: "https://github.com/example/mlops-continuous-delivery",
      demoUrl: "#"
    },
    {
      id: "project-5",
      number: "05",
      title: "AIOps Observability & Anomaly Detection",
      subtitle: "Prometheus • Grafana • OpenTelemetry • Python • Isolation Forest",
      tag: "AIOps & Observability",
      summary: "Intelligent telemetry engine that correlates microservice logs and metrics, detects anomalies before incidents occur, and automates alert triage.",
      problem: "Ops teams received over 2,000 alert notifications daily, causing fatigue and critical incident delays.",
      solution: "Implemented an AIOps aggregation layer that uses unsupervised anomaly detection to group related alerts into unified incidents and identify root causes.",
      architecture: [
        "OpenTelemetry agents stream traces and metrics into Prometheus and Elasticsearch",
        "Python background service calculates rolling z-scores and isolation-forest anomaly vectors",
        "Intelligent correlation engine bundles related microservice alerts into a single incident card",
        "Slack webhook dispatches root-cause analysis summary with direct Grafana jump links"
      ],
      metrics: [
        { label: "Alert Noise Reduction", value: "74%" },
        { label: "Mean Time To Detect", value: "-52%" },
        { label: "False Positive Rate", value: "<4%" }
      ],
      technologies: ["Prometheus", "Grafana", "OpenTelemetry", "Elasticsearch", "Python", "Scikit-Learn"],
      githubUrl: "https://github.com/example/aiops-anomaly-detector",
      demoUrl: "#"
    },
    {
      id: "project-6",
      number: "06",
      title: "Cloud-Native Data Platform",
      subtitle: "Apache Airflow • Google BigQuery • Cloud Storage • Great Expectations",
      tag: "Data Engineering",
      summary: "Robust data orchestration and warehousing platform handling multi-terabyte analytical workloads with automated data hygiene and SLA monitoring.",
      problem: "Downstream reporting broke frequently due to upstream schema changes, missing data partitions, and unmonitored cron scripts.",
      solution: "Engineered scalable Airflow DAGs on GCP Cloud Composer with integrated Great Expectations validation suites and BigQuery partitioned tables.",
      architecture: [
        "Cloud Composer schedules hourly ingestion DAGs extracting source application databases",
        "Data dumped to GCS landing buckets with automated validation checks",
        "BigQuery executes incremental ELT transformations with partitioned and clustered tables",
        "Alerting webhook notifies data team if data freshness SLA misses the 30-minute threshold"
      ],
      metrics: [
        { label: "Daily Data Ingest", value: "4.2 TB" },
        { label: "Data Quality Score", value: "99.9%" },
        { label: "Pipeline SLA", value: "99.8%" }
      ],
      technologies: ["Apache Airflow", "Google BigQuery", "Google Cloud Storage", "Python", "SQL", "Great Expectations"],
      githubUrl: "https://github.com/example/cloud-native-data-platform",
      demoUrl: "#"
    }
  ],

  experience: [
    {
      period: "October 2026 – Present",
      role: "AI Platform Engineer",
      company: "Zensar Technologies",
      client: "Citrix Client",
      focus: "AI Tool Technologies • AWS • GCP",
      bullets: [
        "Working as an AI Platform Engineer supporting the Citrix client, with a focus on AI tool technologies and cloud platform capabilities across AWS and Google Cloud Platform (GCP).",
        "Supporting the enablement and integration of AI tools within cloud environments, with attention to platform reliability, access controls, and operational readiness.",
        "Working across AWS and GCP cloud services to support scalable platform foundations and AI-related engineering workflows."
      ]
    },
    {
      period: "January 2026 – September 2026",
      role: "AI Platform Engineer / Platform Engineering",
      company: "Infosys",
      client: "Goldman Sachs Project",
      focus: "AWS • GCP • Enterprise Banking Platform Engineering",
      bullets: [
        "Contributed to platform engineering initiatives for the Goldman Sachs project across AWS and GCP environments.",
        "Worked on cloud-native platform foundations, infrastructure automation, and repeatable deployment patterns to support enterprise workloads.",
        "Supported CI/CD and GitOps practices using Jenkins, GitHub Actions, AWS CodePipeline, and ArgoCD for consistent delivery across services.",
        "Helped strengthen observability and operational monitoring using Google Cloud Monitoring, Prometheus, Grafana, and OpenTelemetry.",
        "Supported cloud security practices involving IAM, VPC firewall rules, role-based access control, and secrets management."
      ]
    },
    {
      period: "June 2025 – December 2025",
      role: "Lead Platform Engineer",
      company: "Infosys",
      client: "Athena Project",
      focus: "AWS • GCP • Kubernetes & Data Platform Enablement",
      bullets: [
        "Worked on platform engineering for the Athena project, supporting cloud infrastructure and deployment enablement across AWS and GCP.",
        "Helped standardize deployment workflows and reusable platform patterns for Kubernetes-based workloads on GKE and Amazon EKS.",
        "Supported Infrastructure as Code practices using Terraform and Terragrunt to improve provisioning consistency and reduce manual effort.",
        "Contributed to monitoring, alerting, and service observability using cloud monitoring tools, Prometheus, Grafana, and OpenTelemetry.",
        "Supported cloud data platform capabilities using services including BigQuery, Pub/Sub, Dataflow, Kinesis, Glue, and Redshift."
      ]
    },
    {
      period: "October 2024 – April 2025",
      role: "Lead Platform Engineer",
      company: "DXC Technology",
      client: "Shell Team",
      focus: "GCP • AWS • Azure • Observability & GCVE Migration",
      bullets: [
        "Architected and delivered an enterprise real-time monitoring and observability platform on GCP and Azure, unifying telemetry from 20+ infrastructure tools into a Grafana-powered operations console and reducing incident triage time by 50%.",
        "Engineered geo-location failure detection using GCP Pub/Sub streaming and ML-based anomaly detection, cutting downtime by 75% across enterprise environments spanning 15+ global data centers.",
        "Designed multi-cloud networking with VPC segmentation, firewall rule hierarchies, Azure ExpressRoute, and GCP Interconnect, improving disaster recovery times by 60% and achieving 99.95% network availability.",
        "Led VMware-to-GCP (GCVE) migration planning, including migration waves, dependency mapping, and data replatforming.",
        "Established IaC governance, Terraform module registries, and reusable Helm chart libraries, reducing platform team toil by 45%.",
        "Implemented cross-cloud data integration pipelines using Azure Data Factory and GCP Dataflow."
      ]
    },
    {
      period: "July 2024 – October 2024",
      role: "Senior Platform Engineer",
      company: "DXC Technology",
      client: "Philips Team",
      focus: "GCP • AWS • Azure • APM & AIOps Telemetry",
      bullets: [
        "Architected an enterprise observability and APM platform integrating Grafana, Elasticsearch, Google Cloud Logging, and Azure Monitor; produced HLD/LLD documentation and onboarded 8 product teams.",
        "Designed event-driven telemetry pipelines using Apache Kafka and GCP Pub/Sub into an Elasticsearch data lake for sub-second anomaly correlation.",
        "Integrated Moogsoft AIOps with ServiceNow ITSM to automate L1 incident detection, correlation, and ticketing; improved detection accuracy by 45%.",
        "Built self-service Grafana dashboards and Prometheus recording rules for SLOs, error budgets, and infrastructure health.",
        "Produced runbooks and architectural decision records and enabled knowledge transfer to 15+ engineers."
      ]
    },
    {
      period: "June 2021 – July 2024",
      role: "Lead Platform Engineer",
      company: "DXC Technology",
      client: "Graphtalk Product (A.I.A. Insurance)",
      focus: "AWS • GCP • AI & High-Availability Insurance Platform",
      bullets: [
        "Led platform engineering for the Graphtalk A.I.A. insurance product across AWS and GCP, supporting 30+ client environments and sustaining 99.9% uptime over 3 years.",
        "Designed highly available AWS data infrastructure using EC2, ELB, VPC, RDS, S3, SQS, and SNS; reduced infrastructure costs by 25% through Reserved Instances and right-sizing.",
        "Architected GCP infrastructure using GCE, GCS, GKE, BigQuery, Cloud Functions, and Google VPC for serverless ETL and real-time ingestion.",
        "Built ETL/ELT orchestration with Apache Airflow (Cloud Composer) and AWS Glue, processing millions of insurance records daily with lineage tracking and data quality checks.",
        "Implemented CI/CD with Jenkins and GitHub Actions and Docker-based builds on GKE/EKS, reducing deployment time by 60% and post-release defects by 35%.",
        "Enforced multi-cloud security and compliance using Google Cloud IAM, VPC firewall hierarchies, AWS security groups, and secrets rotation, supporting SOC 2 and ISO 27001 compliance.",
        "Delivered cloud observability with Google Cloud Monitoring, CloudWatch, Grafana, and Prometheus, reducing P1 incident resolution time by 40%.",
        "Mentored 8 junior and mid-level engineers in multi-cloud architecture, IaC, data engineering, and DevSecOps."
      ]
    },
    {
      period: "February 2021 – June 2021",
      role: "Database Administrator (Apprenticeship)",
      company: "DXC Technology",
      client: "Core Database Engineering",
      focus: "SQL & RDBMS Platforms, SDLC & Agile DevOps",
      bullets: [
        "Built foundational hands-on experience with SQL and RDBMS platforms including MySQL, PostgreSQL, Microsoft SQL Server, and Oracle; learned SDLC, Agile, and DevOps practices."
      ]
    }
  ],

  additionalExperience: [
    {
      period: "March 2019 – February 2021",
      role: "DevOps & Cloud Platform Consultant",
      company: "Marktine Technology Solution Pvt. Ltd.",
      focus: "AWS • Azure • AI-Powered SaaS (Vriti.AI)",
      bullets: [
        "Delivered cloud-native platform infrastructure on AWS and Azure for AI-powered SaaS products (Vriti.AI, chatbots), including autoscaling Kubernetes, serverless functions, and managed databases.",
        "Optimized CI/CD pipelines using Jenkins and Bitbucket Pipelines with SAST/DAST, drift detection, and automated rollback, reducing production deployment risk by 50%.",
        "Applied right-sizing, spot/preemptible instances, and storage lifecycle policies to reduce monthly cloud spend by 30%."
      ]
    },
    {
      period: "Ongoing Mentorship",
      role: "Cloud & Platform Engineering Mentor",
      company: "Thinkcloudly • Wiingy • Coursry • Occupy",
      focus: "DevOps, AWS, GCP, Azure, Data Engineering, ServiceNow",
      bullets: [
        "Mentored 1,000+ students globally across DevOps, AWS, GCP, Azure, Data Engineering, and ServiceNow, creating learning paths and hands-on labs."
      ]
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology – Electrical Engineering",
      institution: "Lakshmi Narain College of Technology, Bhopal, India",
      period: "July 2017 – June 2021"
    }
  ],

  certifications: [
    { 
      id: "cert-1",
      name: "GitHub Copilot", 
      issuer: "Microsoft", 
      date: "June 2026",
      category: "AI & Developer Productivity",
      status: "Active Credential",
      badge: "Microsoft Certified",
      credentialUrl: "https://learn.microsoft.com/en-us/users/rucchikabhatia/"
    },
    { 
      id: "cert-2",
      name: "AWS Cloud Practitioner", 
      issuer: "Amazon Web Services", 
      date: "October 2023",
      category: "Cloud Infrastructure",
      status: "Active Credential",
      badge: "AWS Certified",
      credentialUrl: "https://aws.amazon.com/verification"
    },
    { 
      id: "cert-3",
      name: "Oracle Cloud Infrastructure Foundation Associate", 
      issuer: "Oracle", 
      date: "February 2022",
      category: "Multi-Cloud Platforms",
      status: "Verified",
      badge: "OCI Certified",
      credentialUrl: "https://catalog-education.oracle.com"
    },
    { 
      id: "cert-4",
      name: "Database Administrator", 
      issuer: "DXC Technology", 
      date: "February 2021 – June 2021",
      category: "Database Systems",
      status: "Enterprise Verified",
      badge: "DXC Professional",
      credentialUrl: "#"
    },
    { 
      id: "cert-5",
      name: "Python Data Structure", 
      issuer: "Cisco", 
      date: "October 2020",
      category: "Algorithms & Programming",
      status: "Verified",
      badge: "Cisco Certified",
      credentialUrl: "#"
    }
  ],

  technicalSkillsCategories: [
    { category: "Cloud Platforms", skills: "Google Cloud Platform (GCP), Amazon Web Services (AWS), Microsoft Azure" },
    { category: "Platform Engineering", skills: "Platform design and architecture, Internal Developer Platforms (IDP), self-service infrastructure, golden-path templates, Istio service mesh, API Gateway" },
    { category: "GCP", skills: "GKE, GCE, GCS, Cloud Functions, Cloud Deployment Manager, Cloud Monitoring & Logging, IAM, VPC, Apigee, GCVE Migration, BigQuery, Dataflow, Pub/Sub, Cloud Composer" },
    { category: "AWS", skills: "EC2, EKS, ECS, S3, RDS, Redshift, Glue, Kinesis, Lambda, Step Functions, MSK, VPC, IAM, CodePipeline, CloudFormation" },
    { category: "Azure", skills: "AKS, Azure DevOps, Azure Data Factory, Azure Synapse, Event Hubs, Azure Monitor, Key Vault, Blob Storage, Logic Apps" },
    { category: "Data Engineering", skills: "Apache Kafka, Apache Spark, Apache Airflow, dbt, BigQuery, Redshift, Synapse Analytics, data lakes, ETL/ELT pipelines, real-time streaming" },
    { category: "DevOps & IaC", skills: "Jenkins, GitHub Actions, GitLab CI/CD, Bitbucket, Docker, Kubernetes, Terraform, Terragrunt, CloudFormation, Ansible, Helm, ArgoCD, Maven" },
    { category: "AI/ML Platform Engineering", skills: "Vertex AI (Model Garden, Pipelines, Feature Store, Model Registry, Endpoints), AWS SageMaker, Azure ML, Agentic AI frameworks, LLM orchestration (LangChain, LlamaIndex), Generative AI integration, GitHub Copilot, model serving (TensorFlow Serving, TorchServe, BentoML), vector databases, BigQuery ML, AI governance & risk assessment" },
    { category: "AIOps", skills: "Moogsoft AIOps, ML-based anomaly detection, intelligent alert correlation & suppression, AI-driven root-cause analysis, predictive incident management, GCP AI-powered observability, ServiceNow ITSM AI workflows" },
    { category: "MLOps", skills: "End-to-end ML pipeline automation, model versioning & registry, CI/CD for ML (GitHub Actions, Vertex AI Pipelines, Kubeflow), automated model training & retraining, model monitoring & drift detection, feature store management, A/B model testing, ML governance, containerised model deployment on GKE" },
    { category: "Monitoring & Security", skills: "Grafana, Prometheus, ELK Stack, CloudWatch, Google Cloud Monitoring, Azure Monitor, Moogsoft, ServiceNow, OpenTelemetry, firewalls, load balancers, Zero Trust, IAM, RBAC, SSL/TLS, secrets management" },
    { category: "Languages & OS", skills: "Python, Bash/Shell, JavaScript, SQL, HCL, YAML, HTML, CSS; Linux, Windows" },
    { category: "Soft Skills", skills: "Technical leadership, platform strategy, problem solving, critical thinking, cross-team collaboration, stakeholder management" }
  ],

  blogPosts: [
    {
      id: "blog-1",
      title: "Designing Highly Available & Multi-Region Cloud Platforms on AWS",
      category: "Cloud Architecture",
      readTime: "7 min read",
      date: "Oct 2026",
      mediumUrl: "https://medium.com/@rucchikabhatia",
      excerpt: "A deep architectural breakdown of active-active and active-passive multi-region topologies, Route 53 latency routing, DynamoDB global tables, and RPO/RTO mitigation strategies.",
      content: `## Architecture Strategy for Mission-Critical Resiliency
Building multi-region applications isn't merely about deploying copies of your services; it requires a rigorous synchronization and failover strategy.

### 1. The Real Cost of Multi-Region
Before going multi-region, consider:
- **Data consistency:** CAP theorem tradeoffs between synchronous and asynchronous replication.
- **Data transfer costs:** Cross-region egress fees can quickly balloon.
- **Operational complexity:** Managing stateful databases across geographic zones.

### 2. The Recommended Pattern
1. **Global Traffic Management:** AWS Route 53 with ARC (Application Recovery Controller) or CloudFront Anycast.
2. **Stateless Compute:** EKS clusters deployed in both primary and secondary regions with synchronized GitOps manifests via ArgoCD.
3. **Stateful Data Tier:** Amazon Aurora Global Database with fast replication lag (<1s) or DynamoDB Global Tables.

### Key Takeaway
Keep stateless layers identical via Terraform, and test simulated failover exercises every quarter rather than waiting for an actual cloud outage.`
    },
    {
      id: "blog-2",
      title: "GitOps at Scale: Mastering ArgoCD, Helm, and Terraform",
      category: "DevOps & Platform",
      readTime: "6 min read",
      date: "Sep 2026",
      mediumUrl: "https://medium.com/@rucchikabhatia",
      excerpt: "How to decouple cloud infrastructure provisioning from application deployment lifecycles using Terraform for the base layer and ArgoCD for application workloads.",
      content: `## Bridging the Gap Between IaC and Workload Delivery
A common anti-pattern in platform engineering is trying to manage both Kubernetes pods and cloud IAM roles in the exact same Terraform workspace.

### The Two-Tier Paradigm
- **Tier 1 (Infrastructure Layer):** Terraform provisions the EKS cluster, VPC, KMS keys, and IAM roles using OIDC federation.
- **Tier 2 (Application Layer):** ArgoCD synchronizes Helm charts and raw manifests from application Git repositories.

### Why this works:
1. Fast rollouts without waiting for 10-minute \`terraform apply\` executions.
2. Built-in drift detection and automatic reconciliation if someone executes an ad-hoc \`kubectl edit\`.
3. Granular RBAC allowing developers to manage workloads without accessing AWS admin credentials.`
    },
    {
      id: "blog-3",
      title: "Building an Enterprise RAG Pipeline: Vector Search, Chunking & Observability",
      category: "AI Engineering",
      readTime: "8 min read",
      date: "Aug 2026",
      mediumUrl: "https://medium.com/@rucchikabhatia",
      excerpt: "Practical lessons learned moving from a naive LangChain prototype to an enterprise-grade Retrieval-Augmented Generation system with sub-200ms latency.",
      content: `## Why Naive RAG Fails in Production
Most demo tutorials split documents into 500-token chunks and do simple cosine similarity search. In production, this fails when documents contain tables, code blocks, or ambiguous pronouns.

### Crucial Engineering Upgrades:
1. **Semantic Recursive Chunking:** Keep paragraphs, headers, and bullet lists logically bonded.
2. **Hybrid Search:** Combine sparse lexical search (BM25) with dense vector embeddings to catch both exact keyword acronyms and semantic concepts.
3. **Reranking:** Use a cross-encoder model to re-score the top 25 retrieved passages down to the top 5 most relevant chunks.
4. **LLM Evaluation:** Continuously evaluate against groundedness and answer relevance metrics using TruLens or Ragas.`
    },
    {
      id: "blog-4",
      title: "From Alert Fatigue to AIOps: Automated Incident Correlation",
      category: "Observability",
      readTime: "5 min read",
      date: "Jul 2026",
      mediumUrl: "https://medium.com/@rucchikabhatia",
      excerpt: "How we slashed 74% of redundant alert noise by applying unsupervised machine learning and topological graph correlation on Prometheus telemetry.",
      content: `## The Problem with Static Alert Thresholds
When an upstream database experiences high latency, 40 downstream microservices fire "504 Gateway Timeout" alerts simultaneously. Engineers are flooded with 40 PagerDuty notifications for a single root issue.

### The AIOps Approach:
- **Dependency Graph Awareness:** Map services using distributed tracing spans (OpenTelemetry).
- **Incident Deduplication:** Group alerts sharing common temporal windows and dependency edges.
- **Dynamic Thresholding:** Use metric baselines that adjust automatically for peak hours versus weekend traffic.

### Outcome
Engineers receive one actionable incident card pointing directly to the root-cause database rather than an avalanche of downstream symptoms.`
    }
  ]
};
