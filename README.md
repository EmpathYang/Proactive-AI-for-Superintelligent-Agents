# Proactive AI for Superintelligent Agents

[![Website](https://img.shields.io/badge/Website-empathyang.github.io-1f6feb?logo=googlechrome&logoColor=white)](https://empathyang.github.io/Proactive-AI-for-Superintelligent-Agents/)
[![Video](https://img.shields.io/badge/Video-overview-ffb44c)](https://empathyang.github.io/Proactive-AI-for-Superintelligent-Agents/classic/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

This repository accompanies the survey **Proactive AI for Superintelligent Agents**.
AI agents are increasingly capable of reasoning, planning, using tools, and executing long-horizon tasks, yet many still rely on humans to identify worthwhile work and initiate it. Proactiveness adds the capacity to initiate purposeful action without an explicit request. We examine proactiveness as a capability that complements intelligence and alignment in the development of superintelligent agents. The repository organizes the works the survey cites around its six capacities (**Awareness**, **Anticipation**, **Agenda**, **Arbitration**, **Action**, and **Adaptation**) and its 13 application domains.

> [!TIP]
> 🌐 Explore the survey on its [website](https://empathyang.github.io/Proactive-AI-for-Superintelligent-Agents/): the whole survey told as one continuous scroll-driven film, a 3D map and a searchable table of every paper listed here, and a short [video overview](https://empathyang.github.io/Proactive-AI-for-Superintelligent-Agents/classic/).

<!-- citation:begin -->

> [!NOTE]
> 📚 If you find this resource useful, please cite the survey:
>
> ```bibtex
> @misc{yang2026proactiveai,
>   title  = {Proactive AI for Superintelligent Agents},
>   author = {Yang, Ke and Liu, Jiateng and Jiang, Jize and Zhao, Chun and Cao, Yufan and Zhong, Shanshan and Du, Yiyang and Liu, Ruixuan and Ning, Xuying and Alvarez, Dean and Zhang, Yuji and Zhou, Duo and Liu, Miri and Cheng, Yuhao and Chen, Hanyang and Yang, Rui and Wang, Zifeng and Tong, Hanghang and He, Jingrui and Xiong, Chenyan and Lee, Chen-Yu and Han, Jiawei and Zhai, ChengXiang},
>   year   = {2026},
>   note   = {Manuscript}
> }
> ```

<!-- citation:end -->

![Reactive agents wait for explicit requests; proactive agents use awareness, anticipation, agenda formation, arbitration, action, and adaptation.](assets/figures/hero.webp)

<!-- papers:begin -->

<!-- Everything from here to papers:end is written by `python3 scripts/papers.py readme` from data/ and assets/figures/manifest.json. -->

## 📋 Table of Contents

The list covers the **1,410** works the survey cites.

- [🧩 Mechanisms: The Six Capacities](#-mechanisms-the-six-capacities)
  - [👀 Awareness](#-awareness)
  - [🔮 Anticipation](#-anticipation)
  - [🎯 Agenda](#-agenda)
  - [⚖️ Arbitration](#%EF%B8%8F-arbitration)
  - [⚡ Action](#-action)
  - [🔄 Adaptation](#-adaptation)
- [🚀 Applications](#-applications)
  - [💻 Coding](#-coding)
  - [🖥️ GUI Agents](#%EF%B8%8F-gui-agents)
  - [🔍 Information Access](#-information-access)
  - [🤖 Embodied & Robotics](#-embodied--robotics)
  - [🔒 Security](#-security)
  - [🔬 AutoResearch](#-autoresearch)
  - [🏠 Smart Home](#-smart-home)
  - [🏙️ Smart City](#%EF%B8%8F-smart-city)
  - [🏥 Healthcare](#-healthcare)
  - [📜 Law](#-law)
  - [🎓 Education](#-education)
  - [🎬 Entertainment & Media](#-entertainment--media)
  - [🌾 Agriculture](#-agriculture)
- [📖 General References](#-general-references)

---

## 🧩 Mechanisms: The Six Capacities

Six interacting capacities for exercising proactive discretion.

![Six interacting capacities for exercising proactive discretion](assets/figures/six-capacities.webp)

### 👀 Awareness

**What is happening, and what information is missing?** Maintains decision-relevant context between requests and closes consequential information gaps.

![Awareness grounds initiative in decision-relevant context](assets/figures/awareness.webp)

#### Multimodal state tracking & context management

| Paper | Venue |
| --- | --- |
| [PLAUD NotePin: Your Wearable AI Note Taker and Memory Capsule](https://www.plaud.ai/products/plaud-notepin) | 2026 |
| [screenpipe: AI that knows what you've seen, said, or heard](https://github.com/screenpipe/screenpipe) | 2026 |
| [Wearable Foundation Models Should Go Beyond Static Encoders](https://arxiv.org/abs/2603.19564) | arXiv 2026 |
| [FingerTip 20K: A Benchmark for Proactive and Personalized Mobile LLM Agents](https://arxiv.org/abs/2507.21071) | arXiv 2026 |
| [ProAgent: Harnessing On-Demand Sensory Contexts for Proactive LLM Agent Systems in the Wild](https://arxiv.org/abs/2512.06721) | IMWUT 2025 |
| [MIRIX: Multi-Agent Memory System for LLM-Based Agents](https://arxiv.org/abs/2507.07957) | arXiv 2025 |
| [Transforming Mental Health Care with Autonomous LLM Agents at the Edge](http://dx.doi.org/10.1145/3715014.3724073) | Proceedings of the 23rd ACM Conference on Embedded Networked Sensor Systems 2025 |
| [Recall overview](https://learn.microsoft.com/en-us/windows/apps/develop/windows-integration/recall/) | 2025 |
| [UI-TARS: Pioneering Automated GUI Interaction with Native Agents](https://arxiv.org/abs/2501.12326) | arXiv 2025 |
| [Eye Gaze as a Signal for Conveying User Attention in Contextual AI Systems](https://arxiv.org/abs/2501.13878) | arXiv 2025 |
| [ContextAgent: Context-Aware Proactive LLM Agents with Open-World Sensory Perceptions](https://arxiv.org/abs/2505.14668) | arXiv 2025 |
| [ScreenAI: A Vision-Language Model for UI and Infographics Understanding](https://arxiv.org/abs/2402.04615) | arXiv 2024 |
| [VideoLLM-online: Online Video Large Language Model for Streaming Video](https://arxiv.org/abs/2406.11816) | arXiv 2024 |
| [Personal LLM Agents: Insights and Survey about the Capability, Efficiency and Security](https://arxiv.org/abs/2401.05459) | arXiv 2024 |
| [Efficient Streaming Language Models with Attention Sinks](https://arxiv.org/abs/2309.17453) | arXiv 2024 |
| [Gaze-based intention estimation: principles, methodologies, and applications in HRI](https://arxiv.org/abs/2302.04530) | arXiv 2023 |
| ["Do you follow me?": A Survey of Recent Approaches in Dialogue State Tracking](https://arxiv.org/abs/2207.14627) | arXiv 2022 |
| [Deep Learning in Human Activity Recognition with Wearable Sensors: A Review on Advances](https://arxiv.org/abs/2111.00418) | arXiv 2022 |
| [MultiWOZ – A Large-Scale Multi-Domain Wizard-of-Oz Dataset for Task-Oriented Dialogue Modelling](https://arxiv.org/abs/1810.00278) | arXiv 2020 |
| [The Warfighter Associate: decision-support software agent for the management of intelligence, surveillance, and reconnaissance (ISR) assets](http://dx.doi.org/10.1117/12.2054646) | Ground/Air Multisensor Interoperability, Integration, and Networking for Persistent ISR V 2014 |
| [An ambient agent system assisting humans in complex tasks by analysis of a human’s state and performance](http://dx.doi.org/10.1504/ijiids.2013.051735) | International Journal of Intelligent Information and Database Systems 2013 |
| [The Dialog State Tracking Challenge](https://aclanthology.org/W13-4065/) | Proceedings of the SIGDIAL 2013 Conference |
| [Towards a Better Understanding of Context and Context-Awareness](http://dx.doi.org/10.1007/3-540-48157-5_29) | Handheld and Ubiquitous Computing 1999 |
| [Context-Aware Computing Applications](https://doi.org/10.1109/wmcsa.1994.16) | IEEE 1994 |

#### Active perception & proactive information seeking

| Paper | Venue |
| --- | --- |
| [Ask Early, Ask Late, Ask Right: When Does Clarification Timing Matter for Long-Horizon Agents?](https://arxiv.org/abs/2605.07937) | arXiv 2026 |
| [RecThinker: An Agentic Framework for Tool-Augmented Reasoning in Recommendation](https://arxiv.org/abs/2603.09843) | arXiv 2026 |
| [BED-LLM: Intelligent Information Gathering with LLMs and Bayesian Experimental Design](https://arxiv.org/abs/2508.21184) | arXiv 2026 |
| [BALAR : A Bayesian Agentic Loop for Active Reasoning](https://arxiv.org/abs/2605.05386) | arXiv 2026 |
| [MINT: Minimal Information Neuro-Symbolic Tree for Objective-Driven Knowledge-Gap Reasoning and Active Elicitation](https://arxiv.org/abs/2602.05048) | arXiv 2026 |
| [Uncertainty Mitigation and Intent Inference: A Dual-Mode Human-Machine Joint Planning System](https://arxiv.org/abs/2603.07822) | arXiv 2026 |
| [IntentRL: Training Proactive User-intent Agents for Open-ended Deep Research via Reinforcement Learning](https://arxiv.org/abs/2602.03468) | arXiv 2026 |
| [Learning to Ask: When LLM Agents Meet Unclear Instruction](https://arxiv.org/abs/2409.00557) | arXiv 2026 |
| [Pushing Forward Pareto Frontiers of Proactive Agents with Behavioral Agentic Optimization](https://arxiv.org/abs/2602.11351) | arXiv 2026 |
| [Clarify Before You Draw: Proactive Agents for Robust Text-to-CAD Generation](https://arxiv.org/abs/2602.03045) | arXiv 2026 |
| [Enabling Self-Improving Agents to Learn at Test Time With Human-In-The-Loop Guidance](https://arxiv.org/abs/2507.17131) | arXiv 2025 |
| [Uncertainty Comes for Free: Human-in-the-Loop Policies with Diffusion Models](https://arxiv.org/abs/2503.01876) | arXiv 2025 |
| [PathFound: An Agentic Multimodal Model Activating Evidence-seeking Pathological Diagnosis](https://arxiv.org/abs/2512.23545) | arXiv 2025 |
| [Search-o1: Agentic Search-Enhanced Large Reasoning Models](https://arxiv.org/abs/2501.05366) | arXiv 2025 |
| [SCOOP: A Framework for Proactive Collaboration and Social Continual Learning through Natural Language Interaction andCausal Reasoning](https://arxiv.org/abs/2503.10241) | arXiv 2025 |
| [Collaborative Instance Object Navigation: Leveraging Uncertainty-Awareness to Minimize Human-Agent Dialogues](https://arxiv.org/abs/2412.01250) | arXiv 2025 |
| [Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection](https://arxiv.org/abs/2310.11511) | ICLR 2024 |
| [STaR-GATE: Teaching Language Models to Ask Clarifying Questions](https://arxiv.org/abs/2403.19154) | arXiv 2024 |
| [Uncertainty of Thoughts: Uncertainty-Aware Planning Enhances Information Seeking in Large Language Models](https://arxiv.org/abs/2402.03271) | arXiv 2024 |
| [Learning When to Ask for Help: Efficient Interactive Navigation via Implicit Uncertainty Estimation](https://arxiv.org/abs/2305.16502) | arXiv 2024 |
| [Adaptive-RAG: Learning to Adapt Retrieval-Augmented Large Language Models through Question Complexity](https://arxiv.org/abs/2403.14403) | arXiv 2024 |
| [Ask-before-Plan: Proactive Language Agents for Real-World Planning](https://arxiv.org/abs/2406.12639) | arXiv 2024 |
| [CLAMBER: A Benchmark of Identifying and Clarifying Ambiguous Information Needs in Large Language Models](https://aclanthology.org/2024.acl-long.578/) | Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers) 2024 |
| [Asking Before Acting: Gather Information in Embodied Decision Making with Language Models](https://arxiv.org/abs/2305.15695) | arXiv 2023 |
| [Active Retrieval Augmented Generation](https://arxiv.org/abs/2305.06983) | arXiv 2023 |
| [CLAM: Selective Clarification for Ambiguous Questions with Generative Language Models](https://arxiv.org/abs/2212.07769) | arXiv 2023 |
| [Eliciting Human Preferences with Language Models](https://arxiv.org/abs/2310.11589) | arXiv 2023 |
| [Measuring and Narrowing the Compositionality Gap in Language Models](https://arxiv.org/abs/2210.03350) | arXiv 2023 |
| [Ask4Help: Learning to Leverage an Expert for Embodied Tasks](https://arxiv.org/abs/2211.09960) | arXiv 2022 |
| [Asking Clarifying Questions in Open-Domain Information-Seeking Conversations](https://arxiv.org/abs/1907.06554) | arXiv 2019 |
| [Learning to Ask Good Questions: Ranking Clarification Questions using Neural Expected Value of Perfect Information](https://arxiv.org/abs/1805.04655) | arXiv 2018 |
| [Revisiting active perception](http://dx.doi.org/10.1007/s10514-017-9615-3) | Autonomous Robots 2017 |
| Active learning literature survey | University of Wisconsin-Madison Department of Computer Sciences 2009 |
| [Bayesian Experimental Design: A Review](http://dx.doi.org/10.1214/ss/1177009939) | Statistical Science 1995 |
| [Active perception](http://dx.doi.org/10.1109/5.5968) | Proceedings of the IEEE 1988 |

#### Hierarchical memory systems

| Paper | Venue |
| --- | --- |
| [PlugMem: A Task-Agnostic Plugin Memory Module for LLM Agents](https://arxiv.org/abs/2603.03296) | ICML 2026 |
| [CogniFold: Always-On Proactive Memory via Cognitive Folding](https://arxiv.org/abs/2605.13438) | arXiv 2026 |
| [Memory in the Age of AI Agents](https://arxiv.org/abs/2512.13564) | arXiv 2026 |
| [PRIME: Training Free Proactive Reasoning via Iterative Memory Evolution for User-Centric Agent](https://arxiv.org/abs/2604.07645) | arXiv 2026 |
| [PASK: Toward Intent-Aware Proactive Agents with Long-Term Memory](https://arxiv.org/abs/2604.08000) | arXiv 2026 |
| [Deep Researcher Agent: An Autonomous Framework for 24/7 Deep Learning Experimentation with Zero-Cost Monitoring](https://arxiv.org/abs/2604.05854) | arXiv 2026 |
| [HERAKLES: Hierarchical Skill Compilation for Open-ended LLM Agents](https://arxiv.org/abs/2508.14751) | arXiv 2025 |
| [Mem0: Building Production-Ready AI Agents with Scalable Long-Term Memory](https://arxiv.org/abs/2504.19413) | arXiv 2025 |
| [Episodic Memory in Agentic Frameworks: Suggesting Next Tasks](https://arxiv.org/abs/2511.17775) | arXiv 2025 |
| [PRINCIPLES: Synthetic Strategy Memory for Proactive Dialogue Agents](https://arxiv.org/abs/2509.17459) | arXiv 2025 |
| [Hello Again! LLM-powered Personalized Agent for Long-term Dialogue](https://arxiv.org/abs/2406.05925) | arXiv 2025 |
| [Zep: A Temporal Knowledge Graph Architecture for Agent Memory](https://arxiv.org/abs/2501.13956) | arXiv 2025 |
| [In Prospect and Retrospect: Reflective Memory Management for Long-term Personalized Dialogue Agents](https://aclanthology.org/2025.acl-long.413/) | Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers) 2025 |
| [Social-RAG: Retrieving from Group Interactions to Socially Ground AI Generation](https://arxiv.org/abs/2411.02353) | arXiv 2025 |
| [From Human Memory to AI Memory: A Survey on Memory Mechanisms in the Era of LLMs](https://arxiv.org/abs/2504.15965) | arXiv 2025 |
| [LongMemEval: Benchmarking Chat Assistants on Long-Term Interactive Memory](https://openreview.net/forum?id=pZiyCaVuti) | The Thirteenth International Conference on Learning Representations 2025 |
| [A-MEM: Agentic Memory for LLM Agents](https://arxiv.org/abs/2502.12110) | arXiv 2025 |
| [Cognitive Architectures for Language Agents](https://openreview.net/forum?id=1i6ZCvflQJ) | Transactions on Machine Learning Research 2024 |
| [Agent Workflow Memory](https://arxiv.org/abs/2409.07429) | arXiv 2024 |
| [A Survey on the Memory Mechanism of Large Language Model based Agents](https://arxiv.org/abs/2404.13501) | arXiv 2024 |
| [MemGPT: Towards LLMs as Operating Systems](https://arxiv.org/abs/2310.08560) | arXiv 2023 |
| [Generative Agents: Interactive Simulacra of Human Behavior](https://arxiv.org/abs/2304.03442) | UIST 2023 |
| [MemoryBank: Enhancing Large Language Models with Long-Term Memory](https://arxiv.org/abs/2305.10250) | arXiv 2023 |
| [A Standard Model of the Mind: Toward a Common Computational Framework Across Artificial Intelligence, Cognitive Science, Neuroscience, and Robotics](http://dx.doi.org/10.1609/aimag.v38i4.2744) | AI Magazine 2017 |
| [Extending Cognitive Architecture with Episodic Memory](http://www.aaai.org/Library/AAAI/2007/aaai07-247.php) | Proceedings of the Twenty-Second AAAI Conference on Artificial Intelligence, July 22-26, 2007, Vancouver, British Columbia, Canada |
| [An Integrated Theory of the Mind.](http://dx.doi.org/10.1037/0033-295x.111.4.1036) | Psychological Review 2004 |
| Episodic and semantic memory | Organization of memory 1972 |

#### Runtime architectures

| Paper | Venue |
| --- | --- |
| [Simulating Human Cognition: Heartbeat-Driven Autonomous Thinking Activity Scheduling for LLM-based AI systems](https://arxiv.org/abs/2604.14178) | arXiv 2026 |
| [Dreams](https://platform.claude.com/docs/en/managed-agents/dreams) | 2026 |
| [IdleSpec: Exploiting Idle Time via Speculative Planning for LLM Agents](https://arxiv.org/abs/2605.22154) | arXiv 2026 |
| [Anticipate and Learn: Unleashing Idle-Time Compute in Proactive Agents](https://arxiv.org/abs/2605.25971) | arXiv 2026 |
| [Jagarin: A Three-Layer Architecture for Hibernating Personal Duty Agents on Mobile](https://arxiv.org/abs/2603.05069) | arXiv 2026 |
| [Towards Real-time Adaptation of Embodied Agent in Human-Robot Collaboration](https://arxiv.org/abs/2412.00435) | arXiv 2026 |
| [VisionClaw: Always-On AI Agents through Smart Glasses](https://arxiv.org/abs/2604.03486) | arXiv 2026 |
| [GroupGPT: A Token-efficient and Privacy-preserving Agentic Framework for Multi-User Chat Assistant](https://arxiv.org/abs/2603.01059) | arXiv 2026 |
| [Auto-Dreamer: Learning Offline Memory Consolidation for Language Agents](https://arxiv.org/abs/2605.20616) | arXiv 2026 |
| [Sleep-time Compute: Beyond Inference Scaling at Test-time](https://arxiv.org/abs/2504.13171) | arXiv 2025 |
| [Agent.xpu: Efficient Scheduling of Agentic LLM Workloads on Heterogeneous SoC](https://arxiv.org/abs/2506.24045) | arXiv 2025 |
| [Introducing ambient agents](https://blog.langchain.com/introducing-ambient-agents/) | 2025 |
| [AIOS: LLM Agent Operating System](https://arxiv.org/abs/2403.16971) | arXiv 2025 |
| [Interactive Speculative Planning: Enhance Agent Efficiency through Co-design of System and User Interface](https://arxiv.org/abs/2410.00079) | arXiv 2024 |
| [PowerCut and Obfuscator: An Exploration of the Design Space for Privacy-Preserving Interventions for Voice Assistants](https://arxiv.org/abs/1812.00263) | arXiv 2021 |
| [Practical trigger-action programming in the smart home](http://dx.doi.org/10.1145/2556288.2557420) | Proceedings of the SIGCHI Conference on Human Factors in Computing Systems 2014 |
| [Active database systems](http://dx.doi.org/10.1145/311531.311623) | ACM Computing Surveys 1999 |
| BDI Agents: From Theory to Practice | Proceedings of the First International Conference on Multiagent Systems, June 12-14, 1995, San Francisco, California, USA |

#### Other Works

| Paper | Venue |
| --- | --- |
| [Mem-Gallery: Benchmarking Multimodal Long-Term Conversational Memory for MLLM Agents](https://aclanthology.org/2026.acl-long.1892/) | Proceedings of the 64th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers) 2026 |
| [Evaluating Memory in LLM Agents via Incremental Multi-Turn Interactions](https://openreview.net/forum?id=DT7JyQC3MR) | The Fourteenth International Conference on Learning Representations 2026 |
| [From Recall to Forgetting: Benchmarking Long-Term Memory for Personalized Agents](https://arxiv.org/abs/2604.20006) | arXiv 2026 |
| [LongMemEval-V2: Evaluating Long-Term Agent Memory Toward Experienced Colleagues](https://arxiv.org/abs/2605.12493) | arXiv 2026 |
| [Multimodal Needle in a Haystack: Benchmarking Long-Context Capability of Multimodal Large Language Models](https://aclanthology.org/2025.naacl-long.166/) | Proceedings of the 2025 Conference of the Nations of the Americas Chapter of the Association for Computational Linguistics: Human Language Technologies (Volume 1: Long Papers) |
| [LongBench: A Bilingual, Multitask Benchmark for Long Context Understanding](https://aclanthology.org/2024.acl-long.172/) | Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers) 2024 |
| [RULER: What's the Real Context Size of Your Long-Context Language Models?](https://openreview.net/forum?id=kIoBbc76Sy) | First Conference on Language Modeling 2024 |
| [LongLLMLingua: Accelerating and Enhancing LLMs in Long Context Scenarios via Prompt Compression](https://doi.org/10.18653/v1/2024.acl-long.91) | Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers) 2024 |
| [Lost in the Middle: How Language Models Use Long Contexts](https://aclanthology.org/2024.tacl-1.9/) | Transactions of the Association for Computational Linguistics 2024 |
| [Evaluating Very Long-Term Conversational Memory of LLM Agents](https://aclanthology.org/2024.acl-long.747/) | Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers) 2024 |
| [MileBench: Benchmarking MLLMs in Long Context](https://openreview.net/forum?id=Uhwze2LEwq) | First Conference on Language Modeling 2024 |
| [Needle in a Multimodal Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/hash/24a8968affe71ffe4067d022b9d16566-Abstract-Datasets_and_Benchmarks_Track.html) | Advances in Neural Information Processing Systems 2024 |
| [Compressing Context to Enhance Inference Efficiency of Large Language Models](https://doi.org/10.18653/v1/2023.emnlp-main.391) | Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing |

### 🔮 Anticipation

**What may happen, and could acting improve the outcome?** Connects forecasts and counterfactuals to the expected value of possible interventions.

![Anticipation establishes why an intervention may be worth initiating](assets/figures/anticipation.webp)

#### Modeling the user

| Paper | Venue |
| --- | --- |
| [SimpleToM: Exposing the Gap between Explicit ToM Inference and Implicit ToM Application in LLMs](https://arxiv.org/abs/2410.13648) | arXiv 2026 |
| [Knowing Isn't Understanding: Re-grounding Generative Proactivity with Epistemic and Behavioral Insight](https://arxiv.org/abs/2602.15259) | arXiv 2026 |
| [Omakase: proactive assistance with actionable suggestions for evolving scientific research projects](https://arxiv.org/abs/2604.08898) | arXiv 2026 |
| [Collaborative Belief Reasoning with LLMs for Efficient Multi-Agent Collaboration](https://arxiv.org/abs/2509.21981) | arXiv 2026 |
| [Behavior Latticing: Inferring User Motivations from Unstructured Interactions](https://arxiv.org/abs/2604.07629) | arXiv 2026 |
| [IceBreaker for Conversational Agents: Breaking the First-Message Barrier with Personalized Starters](https://arxiv.org/abs/2604.18375) | arXiv 2026 |
| [JIR-Arena: The First Benchmark Dataset for Just-in-time Information Recommendation](https://arxiv.org/abs/2505.13550) | arXiv 2025 |
| [ProToM: Promoting Prosocial Behaviour via Theory of Mind-Informed Feedback](https://arxiv.org/abs/2509.05091) | arXiv 2025 |
| [UserBench: An Interactive Gym Environment for User-Centric Agents](https://arxiv.org/abs/2507.22034) | arXiv 2025 |
| [ToMCAT: Theory-of-Mind for Cooperative Agents in Teams via Multiagent Diffusion Policies](https://arxiv.org/abs/2502.18438) | arXiv 2025 |
| [MuMA-ToM: Multi-modal Multi-Agent Theory of Mind](https://arxiv.org/abs/2408.12574) | arXiv 2025 |
| [Human-Centric Open-Future Task Discovery: Formulation, Benchmark, and Scalable Tree-Based Search](https://arxiv.org/abs/2511.18929) | arXiv 2025 |
| [Tell Me More! Towards Implicit User Intention Understanding of Language Model Driven Agents](https://arxiv.org/abs/2402.09205) | ACL 2024 |
| [Evaluating large language models in theory of mind tasks](http://dx.doi.org/10.1073/pnas.2405460121) | Proceedings of the National Academy of Sciences 2024 |
| [ToMBench: Benchmarking Theory of Mind in Large Language Models](https://arxiv.org/abs/2402.15052) | arXiv 2024 |
| [MMToM-QA: Multimodal Theory of Mind Question Answering](https://arxiv.org/abs/2401.08743) | arXiv 2024 |
| [Autonomous Agents for Collaborative Task under Information Asymmetry](https://arxiv.org/abs/2406.14928) | arXiv 2024 |
| [Expedient Assistance and Consequential Misunderstanding: Envisioning an Operationalized Mutual Theory of Mind](https://arxiv.org/abs/2406.11946) | arXiv 2024 |
| [OpenToM: A Comprehensive Benchmark for Evaluating Theory-of-Mind Reasoning Capabilities of Large Language Models](https://arxiv.org/abs/2402.06044) | arXiv 2024 |
| [ProAgent: Building Proactive Cooperative Agents with Large Language Models](https://arxiv.org/abs/2308.11339) | arXiv 2024 |
| [FANToM: A Benchmark for Stress-testing Machine Theory of Mind in Interactions](https://arxiv.org/abs/2310.15421) | arXiv 2023 |
| [Minding Language Models' (Lack of) Theory of Mind: A Plug-and-Play Multi-Character Belief Tracker](https://arxiv.org/abs/2306.00924) | arXiv 2023 |
| [Large Language Models Fail on Trivial Alterations to Theory-of-Mind Tasks](https://arxiv.org/abs/2302.08399) | arXiv 2023 |
| [Think Twice: Perspective-Taking Improves Large Language Models' Theory-of-Mind Capabilities](https://arxiv.org/abs/2311.10227) | arXiv 2023 |
| [Robust Planning for Human-Robot Joint Tasks with Explicit Reasoning on Human Mental State](https://arxiv.org/abs/2210.08879) | arXiv 2022 |
| [Machine Theory of Mind](https://arxiv.org/abs/1802.07740) | arXiv 2018 |
| [Rational quantitative attribution of beliefs, desires and percepts in human mentalizing](https://doi.org/10.1038/s41562-017-0064) | Springer Science and Business Media LLC 2017 |
| Plan, activity, and intent recognition: Theory and practice | Newnes 2014 |
| [The Lumiere Project: Bayesian User Modeling for Inferring the Goals and Needs of Software Users](https://arxiv.org/abs/1301.7385) | arXiv 2013 |
| [Generalized Plan Recognition](http://www.aaai.org/Library/AAAI/1986/aaai86-006.php) | Proceedings of the 5th National Conference on Artificial Intelligence. Philadelphia, PA, USA, August 11-15, 1986. Volume 1: Science |
| [Does the autistic child have a “theory of mind” ?](http://dx.doi.org/10.1016/0010-0277(85)90022-8) | Cognition 1985 |
| [Beliefs about beliefs: Representation and constraining function of wrong beliefs in young children's understanding of deception](https://doi.org/10.1016/0010-0277(83)90004-5) | Elsevier BV 1983 |
| [Does the chimpanzee have a theory of mind?](http://dx.doi.org/10.1017/s0140525x00076512) | Behavioral and Brain Sciences 1978 |

#### Modeling the world

| Paper | Venue |
| --- | --- |
| [Qwen-AgentWorld: Language World Models for General Agents](https://arxiv.org/abs/2606.24597) | arXiv 2026 |
| [V-JEPA 2: Self-Supervised Video Models Enable Understanding, Prediction and Planning](https://arxiv.org/abs/2506.09985) | arXiv 2025 |
| [How Far is Video Generation from World Model: A Physical Law Perspective](https://arxiv.org/abs/2411.02385) | arXiv 2025 |
| [GAIA-2: A Controllable Multi-View Generative World Model for Autonomous Driving](https://arxiv.org/abs/2503.20523) | arXiv 2025 |
| [Genie: Generative Interactive Environments](https://arxiv.org/abs/2402.15391) | arXiv 2024 |
| [Can Language Models Serve as Text-Based World Simulators?](https://arxiv.org/abs/2406.06485) | arXiv 2024 |
| [User Behavior Simulation with Large Language Model based Agents](https://arxiv.org/abs/2306.02552) | arXiv 2024 |
| [Anticipatory Thinking Challenges in Open Worlds: Risk Management](https://arxiv.org/abs/2306.13157) | arXiv 2023 |
| [Mastering Diverse Domains through World Models](https://arxiv.org/abs/2301.04104) | arXiv 2023 |
| [Reasoning with Language Model is Planning with World Model](https://arxiv.org/abs/2305.14992) | arXiv 2023 |
| [Model-Based Reinforcement Learning: A Survey](https://doi.org/10.1561/2200000086) | Foundations and Trends in Machine Learning 2023 |
| [Ego4D: Around the World in 3,000 Hours of Egocentric Video](https://openaccess.thecvf.com/content/CVPR2022/html/Grauman_Ego4D_Around_the_World_in_3000_Hours_of_Egocentric_Video_CVPR_2022_paper.html) | Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition 2022 |
| [Mastering Atari with Discrete World Models](https://arxiv.org/abs/2010.02193) | arXiv 2022 |
| [Anticipative Video Transformer](https://arxiv.org/abs/2106.02036) | arXiv 2021 |
| [Rolling-Unrolling LSTMs for Action Anticipation from First-Person Video](https://arxiv.org/abs/2005.02190) | arXiv 2020 |
| [World Models](https://arxiv.org/abs/1803.10122) | arXiv 2018 |
| [An Internal Model for Sensorimotor Integration](https://doi.org/10.1126/science.7569931) | American Association for the Advancement of Science (AAAS) 1995 |
| [Forward Models: Supervised Learning with a Distal Teacher](http://dx.doi.org/10.1207/s15516709cog1603_1) | Cognitive Science 1992 |
| [Dyna, an integrated architecture for learning, planning, and reacting](http://dx.doi.org/10.1145/122344.122377) | ACM SIGART Bulletin 1991 |

#### Counterfactual reasoning

| Paper | Venue |
| --- | --- |
| [PersonalHomeBench: Evaluating Agents in Personalized Smart Homes](https://arxiv.org/abs/2604.16813) | arXiv 2026 |
| [Look Before You Decide: Prompting Active Deduction of MLLMs for Assumptive Reasoning](https://arxiv.org/abs/2404.12966) | arXiv 2025 |
| [Counterfactual Multi-Agent Policy Gradients](https://arxiv.org/abs/1705.08926) | arXiv 2024 |
| [CLadder: Assessing Causal Reasoning in Language Models](https://arxiv.org/abs/2312.04350) | arXiv 2024 |
| [Causal Reasoning and Large Language Models: Opening a New Frontier for Causality](https://arxiv.org/abs/2305.00050) | arXiv 2024 |
| [Reasoning or Reciting? Exploring the Capabilities and Limitations of Language Models Through Counterfactual Tasks](https://arxiv.org/abs/2307.02477) | arXiv 2024 |
| [CRASS: A Novel Data Set and Benchmark to Test Counterfactual Reasoning of Large Language Models](https://arxiv.org/abs/2112.11941) | arXiv 2022 |
| [Planning for Proactive Assistance in Environments with Partial Observability](https://arxiv.org/abs/2105.00525) | arXiv 2021 |
| [Communication Strategy for Efficient Guidance Providing : Domain-structure Awareness, Performance Trade-offs, and Value of Future Observations](http://dx.doi.org/10.1109/icra48506.2021.9561880) | 2021 IEEE International Conference on Robotics and Automation (ICRA) |
| [Woulda, Coulda, Shoulda: Counterfactually-Guided Policy Search](https://arxiv.org/abs/1811.06272) | ICLR 2019 |
| [Counterfactuals in Explainable Artificial Intelligence (XAI): Evidence from Human Reasoning](http://dx.doi.org/10.24963/ijcai.2019/876) | Proceedings of the Twenty-Eighth International Joint Conference on Artificial Intelligence 2019 |
| [Hindsight Experience Replay](https://arxiv.org/abs/1707.01495) | arXiv 2018 |
| [Explanation in Artificial Intelligence: Insights from the Social Sciences](https://arxiv.org/abs/1706.07269) | arXiv 2018 |
| The book of why: The new science of cause and effect | Basic Books 2018 |
| [Counterfactual Explanations Without Opening the Black Box: Automated Decisions and the GDPR](http://dx.doi.org/10.2139/ssrn.3063289) | SSRN Electronic Journal 2017 |
| [Counterfactual Reasoning and Learning Systems](https://arxiv.org/abs/1209.2355) | arXiv 2013 |
| Causality | Cambridge university press 2009 |
| [The Functional Theory of Counterfactual Thinking](https://doi.org/10.1177/1088868308316091) | SAGE Publications 2008 |
| [Counterfactual thinking.](http://dx.doi.org/10.1037/0033-2909.121.1.133) | Psychological Bulletin 1997 |

#### Generative scenario simulation

| Paper | Venue |
| --- | --- |
| [After Talking with 1,000 Personas: Learning Preference-Aligned Proactive Assistants From Large-Scale Persona Interactions](https://arxiv.org/abs/2602.04000) | arXiv 2026 |
| [ProMediate: A Socio-cognitive framework for evaluating proactive agents in multi-party negotiation](https://arxiv.org/abs/2510.25224) | Findings of ACL 2026 |
| [SimRPD: Optimizing Recruitment Proactive Dialogue Agents through Simulator-Based Data Evaluation and Selection](https://arxiv.org/abs/2601.02871) | arXiv 2026 |
| [Real-World Doctor Agent with Proactive Consultation through Multi-Agent Reinforcement Learning](https://arxiv.org/abs/2505.19630) | arXiv 2026 |
| [Collaborate, Deliberate, Evaluate: How LLM Alignment Affects Coordinated Multi-Agent Outcomes](https://arxiv.org/abs/2509.05882) | arXiv 2026 |
| [Lost in Simulation: LLM-Simulated Users are Unreliable Proxies for Human Users in Agentic Evaluations](https://arxiv.org/abs/2601.17087) | arXiv 2026 |
| [ProAgentBench: Evaluating LLM Agents for Proactive Assistance with Real-World Data](https://arxiv.org/abs/2602.04482) | arXiv 2026 |
| [AgentSociety: Large-Scale Simulation of LLM-Driven Generative Agents Advances Understanding of Human Behaviors and Society](https://arxiv.org/abs/2502.08691) | arXiv 2025 |
| [LLMs Get Lost In Multi-Turn Conversation](https://arxiv.org/abs/2505.06120) | arXiv 2025 |
| [Towards Understanding Sycophancy in Language Models](https://arxiv.org/abs/2310.13548) | arXiv 2025 |
| [LLM-based Human Simulations Have Not Yet Been Reliable](https://arxiv.org/abs/2501.08579) | arXiv 2025 |
| [Modeling Future Conversation Turns to Teach LLMs to Ask Clarifying Questions](https://arxiv.org/abs/2410.13788) | arXiv 2025 |
| [Project Sid: Many-agent simulations toward AI civilization](https://arxiv.org/abs/2411.00114) | arXiv 2024 |
| [Plug-and-Play Policy Planner for Large Language Model Powered Dialogue Agents](https://arxiv.org/abs/2311.00262) | arXiv 2024 |
| [Towards Full Delegation: Designing Ideal Agentic Behaviors for Travel Planning](https://arxiv.org/abs/2411.13904) | arXiv 2024 |
| [DuetSim: Building User Simulator with Dual Large Language Models for Task-Oriented Dialogues](https://arxiv.org/abs/2405.13028) | arXiv 2024 |
| [Devil's Advocate: Anticipatory Reflection for LLM Agents](https://arxiv.org/abs/2405.16334) | arXiv 2024 |
| [SOTOPIA-π: Interactive Learning of Socially Intelligent Language Agents](https://arxiv.org/abs/2403.08715) | arXiv 2024 |
| [Language Agent Tree Search Unifies Reasoning Acting and Planning in Language Models](https://arxiv.org/abs/2310.04406) | arXiv 2024 |
| [SOTOPIA: Interactive Evaluation for Social Intelligence in Language Agents](https://arxiv.org/abs/2310.11667) | arXiv 2024 |
| [MARLUI: Multi-Agent Reinforcement Learning for Adaptive UIs](https://arxiv.org/abs/2209.12660) | arXiv 2023 |
| [Tree of Thoughts: Deliberate Problem Solving with Large Language Models](https://arxiv.org/abs/2305.10601) | arXiv 2023 |
| [Social Simulacra: Creating Populated Prototypes for Social Computing Systems](https://arxiv.org/abs/2208.04024) | arXiv 2022 |
| [Deal or No Deal? End-to-End Learning for Negotiation Dialogues](https://arxiv.org/abs/1706.05125) | arXiv 2017 |
| [Episodic Future Thought: An Emerging Concept](http://dx.doi.org/10.1177/1745691610362350) | Perspectives on Psychological Science 2010 |
| [Remembering the past to imagine the future: the prospective brain](http://dx.doi.org/10.1038/nrn2213) | Nature Reviews Neuroscience 2007 |
| [Conscious thought as simulation of behaviour and perception](https://doi.org/10.1016/s1364-6613(02)01913-7) | Elsevier BV 2002 |
| [The simulation heuristic](https://api.semanticscholar.org/CorpusID:142448674) | 1982 |

#### Other Works

| Paper | Venue |
| --- | --- |
| [PIRA-Bench: A Transition from Reactive GUI Agents to GUI-based Proactive Intent Recommendation Agents](https://arxiv.org/abs/2603.08013) | arXiv 2026 |
| [LifeSim: Long-Horizon User Life Simulator for Personalized Assistant Evaluation](https://arxiv.org/abs/2603.12152) | arXiv 2026 |
| [Web Agents with World Models: Learning and Leveraging Environment Dynamics in Web Navigation](https://openreview.net/forum?id=moWiYJuSGF) | The Thirteenth International Conference on Learning Representations 2025 |
| [Clarify When Necessary: Resolving Ambiguity Through Interaction with LMs](https://aclanthology.org/2025.findings-naacl.306/) | Findings of the Association for Computational Linguistics: NAACL 2025 |
| [Towards Scalable Multi-Domain Conversational Agents: The Schema-Guided Dialogue Dataset](https://ojs.aaai.org/index.php/AAAI/article/view/6394) | Proceedings of the AAAI Conference on Artificial Intelligence 2020 |
| [Scaling Egocentric Vision: The EPIC-KITCHENS Dataset](https://openaccess.thecvf.com/content_ECCV_2018/html/Dima_Damen_Scaling_Egocentric_Vision_ECCV_2018_paper.html) | Proceedings of the European Conference on Computer Vision 2018 |

### 🎯 Agenda

**Which candidate goals deserve sustained commitment?** Turns forecasts into prioritized intentions that persist and evolve across interactions.

![Agenda bridges foresight and sustained goal pursuit](assets/figures/agenda.webp)

#### Goal generation

| Paper | Venue |
| --- | --- |
| [La VIDA: towards a motivated goal reasoning agent](https://underline.io/lecture/142623-la-vida-towards-a-motivated-goal-reasoning-agent) | Underline Science Inc. 2026 |
| [Beyond Reactivity: Measuring Proactive Problem Solving in LLM Agents](https://arxiv.org/abs/2510.19771) | arXiv 2026 |
| [MAGELLAN: Metacognitive predictions of learning progress guide autotelic LLM agents in large goal spaces](https://arxiv.org/abs/2502.07709) | arXiv 2025 |
| [Do Large Language Model Agents Exhibit a Survival Instinct? An Empirical Study in a Sugarscape-Style Simulation](https://arxiv.org/abs/2508.12920) | arXiv 2025 |
| [LLM Agents Beyond Utility: An Open-Ended Perspective](https://arxiv.org/abs/2510.14548) | arXiv 2025 |
| [What Do LLM Agents Do When Left Alone? Evidence of Spontaneous Meta-Cognitive Patterns](https://arxiv.org/abs/2509.21224) | arXiv 2025 |
| [Simulating Human-like Daily Activities with Desire-driven Autonomy](https://arxiv.org/abs/2412.06435) | arXiv 2025 |
| [The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery](https://arxiv.org/abs/2408.06292) | arXiv 2024 |
| [The Goal after Tomorrow: Offline Goal Reasoning with Norms](http://dx.doi.org/10.1613/jair.1.15566) | Journal of Artificial Intelligence Research 2024 |
| [OMNI: Open-endedness via Models of human Notions of Interestingness](https://arxiv.org/abs/2306.01711) | arXiv 2024 |
| [Voyager: An Open-Ended Embodied Agent with Large Language Models](https://arxiv.org/abs/2305.16291) | arXiv 2023 |
| [Autotelic Agents with Intrinsically Motivated Goal-Conditioned Reinforcement Learning: a Short Survey](https://arxiv.org/abs/2012.09830) | arXiv 2022 |
| [Language and Culture Internalisation for Human-Like Autotelic AI](https://arxiv.org/abs/2206.01134) | arXiv 2022 |
| [Intrinsically Motivated Goal Exploration Processes with Automatic Curriculum Learning](http://jmlr.org/papers/v23/21-0808.html) | Journal of Machine Learning Research 2022 |
| [A Case Study of Adding Proactivity in Indoor Social Robots Using Belief–Desire–Intention (BDI) Model](http://dx.doi.org/10.3390/biomimetics4040074) | Biomimetics 2019 |
| [Goal Reasoning: Foundations, Emerging Applications, and Prospects](http://dx.doi.org/10.1609/aimag.v39i2.2800) | AI Magazine 2018 |
| [Goal Reasoning and Trusted Autonomy](http://dx.doi.org/10.1007/978-3-319-64816-3_3) | Foundations of Trusted Autonomy 2018 |
| [Curiosity-Driven Exploration by Self-Supervised Prediction](https://arxiv.org/abs/1705.05363) | Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition Workshops 2017 |
| Goal-driven autonomy for cognitive systems | Proceedings of the Annual Meeting of the Cognitive Science Society 2014 |
| Breadth of approaches to goal reasoning: A research survey | 2013 |
| [GOAL‐DRIVEN AUTONOMY FOR RESPONDING TO UNEXPECTED EVENTS IN STRATEGY SIMULATIONS](http://dx.doi.org/10.1111/j.1467-8640.2012.00445.x) | Computational Intelligence 2012 |
| [Goal-Driven Autonomy in a Navy Strategy Simulation](https://doi.org/10.1609/aaai.v24i1.7576) | AAAI 2010 |
| [Formal Theory of Creativity, Fun, and Intrinsic Motivation (1990–2010)](https://doi.org/10.1109/tamd.2010.2056368) | Institute of Electrical and Electronics Engineers (IEEE) 2010 |
| [The Basic AI Drives](http://www.booksonline.iospress.nl/Content/View.aspx?piid=8341) | Artificial General Intelligence 2008, Proceedings of the First AGI Conference, AGI 2008, March 1-3, 2008, University of Memphis, Memphis, TN, USA |
| [Intrinsic Motivation Systems for Autonomous Mental Development](http://dx.doi.org/10.1109/tevc.2006.890271) | IEEE Transactions on Evolutionary Computation 2007 |
| Intrinsically motivated learning of hierarchical collections of skills | Proceedings of the 3rd International Conference on Development and Learning 2004 |
| [Intention Is Choice with Commitment](https://doi.org/10.1016/0004-3702(90)90055-5) | Artificial Intelligence 1990 |
| Intention, plans, and practical reason | 1987 |

#### Sub-goal proposal & long-horizon agendas

| Paper | Venue |
| --- | --- |
| [Long-term Task-oriented Agent: Proactive Long-term Intent Maintenance in Dynamic Environments](https://arxiv.org/abs/2601.09382) | arXiv 2026 |
| [PEPA: a Persistently Autonomous Embodied Agent with Personalities](https://arxiv.org/abs/2603.00117) | arXiv 2026 |
| [InternAgent-1.5: A Unified Agentic Framework for Long-Horizon Autonomous Scientific Discovery](https://arxiv.org/abs/2602.08990) | arXiv 2026 |
| [Beyond Entangled Planning: Task-Decoupled Planning for Long-Horizon Agents](https://arxiv.org/abs/2601.07577) | arXiv 2026 |
| [Virtuous Machines: Towards Artificial General Science](https://arxiv.org/abs/2508.13421) | arXiv 2026 |
| [SelfAI: A self-directed framework for long-horizon scientific discovery](https://arxiv.org/abs/2512.00403) | arXiv 2026 |
| [π-Bench: Evaluating Proactive Personal Assistant Agents in Long-Horizon Workflows](https://arxiv.org/abs/2605.14678) | arXiv 2026 |
| [Sparks: Multi-Agent Artificial Intelligence Model Discovers Protein Design Principles](https://arxiv.org/abs/2504.19017) | arXiv 2025 |
| [Kosmos: An AI Scientist for Autonomous Discovery](https://arxiv.org/abs/2511.02824) | arXiv 2025 |
| [ADaPT: As-Needed Decomposition and Planning with Language Models](https://arxiv.org/abs/2311.05772) | arXiv 2024 |
| [Describe, Explain, Plan and Select: Interactive Planning with Large Language Models Enables Open-World Multi-Task Agents](https://arxiv.org/abs/2302.01560) | arXiv 2024 |
| [Game On: Towards Language Models as RL Experimenters](https://arxiv.org/abs/2409.03402) | arXiv 2024 |
| [CodePlan: Repository-level Coding using LLMs and Planning](https://arxiv.org/abs/2309.12499) | arXiv 2023 |
| [AdaPlanner: Adaptive Planning from Feedback with Language Models](https://arxiv.org/abs/2305.16653) | arXiv 2023 |
| [Plan-and-Solve Prompting: Improving Zero-Shot Chain-of-Thought Reasoning by Large Language Models](https://arxiv.org/abs/2305.04091) | arXiv 2023 |
| [ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629) | International Conference on Learning Representations 2023 |
| [Least-to-Most Prompting Enables Complex Reasoning in Large Language Models](https://arxiv.org/abs/2205.10625) | arXiv 2023 |
| [Goal-Conditioned Reinforcement Learning: Problems and Solutions](https://arxiv.org/abs/2201.08299) | arXiv 2022 |
| [Automatic Goal Generation for Reinforcement Learning Agents](https://arxiv.org/abs/1705.06366) | arXiv 2018 |
| [CAMP-BDI: A Pre-emptive Approach for Plan Execution Robustness in Multiagent Systems](http://dx.doi.org/10.1007/978-3-319-25524-8_5) | PRIMA 2015: Principles and Practice of Multi-Agent Systems |
| [Plan Stability: Replanning versus Plan Repair](http://www.aaai.org/Library/ICAPS/2006/icaps06-022.php) | Proceedings of the Sixteenth International Conference on Automated Planning and Scheduling, ICAPS 2006, Cumbria, UK, June 6-10, 2006 |
| [Hierarchical Reinforcement Learning with the MAXQ Value Function Decomposition](https://doi.org/10.1613/jair.639) | J. Artif. Intell. Res. 2000 |
| [Between MDPs and semi-MDPs: A framework for temporal abstraction in reinforcement learning](http://dx.doi.org/10.1016/s0004-3702(99)00052-1) | Artificial Intelligence 1999 |
| [HTN Planning: Complexity and Expressivity](http://www.aaai.org/Library/AAAI/1994/aaai94-173.php) | Proceedings of the 12th National Conference on Artificial Intelligence, Seattle, WA, USA, July 31 - August 4, 1994, Volume 2 |

#### Goal prioritization & conflict resolution

| Paper | Venue |
| --- | --- |
| [Incomplete Tasks Induce Shutdown Resistance in Some Frontier LLMs](https://arxiv.org/abs/2509.14260) | arXiv 2026 |
| [ProactiveEval: A Unified Evaluation Framework for Proactive Dialogue Agents](https://arxiv.org/abs/2508.20973) | arXiv 2025 |
| [Agentic Misalignment: How LLMs Could Be Insider Threats](https://arxiv.org/abs/2510.05179) | arXiv 2025 |
| [Defining and Characterizing Reward Hacking](https://arxiv.org/abs/2209.13085) | arXiv 2025 |
| [The Instruction Hierarchy: Training LLMs to Prioritize Privileged Instructions](https://arxiv.org/abs/2404.13208) | arXiv 2024 |
| [MISR: Measuring Instrumental Self-Reasoning in Frontier Models](https://arxiv.org/abs/2412.03904) | arXiv 2024 |
| [A Survey on Proactive Dialogue Systems: Problems, Methods, and Prospects](https://arxiv.org/abs/2305.02750) | arXiv 2023 |
| [A practical guide to multi-objective reinforcement learning and planning](http://dx.doi.org/10.1007/s10458-022-09552-y) | Autonomous Agents and Multi-Agent Systems 2022 |
| [The Off-Switch Game](https://arxiv.org/abs/1611.08219) | arXiv 2017 |
| Corrigibility | AAAI Workshop on AI and Ethics 2015 |
| [A Survey of Multi-Objective Sequential Decision-Making](https://arxiv.org/abs/1402.0590) | arXiv 2014 |
| [The Superintelligent Will: Motivation and Instrumental Rationality in Advanced Artificial Agents](http://dx.doi.org/10.1007/s11023-012-9281-3) | Minds and Machines 2012 |
| [Choosing Objectives in Over-Subscription Planning](http://www.aaai.org/Library/ICAPS/2004/icaps04-046.php) | Proceedings of the Fourteenth International Conference on Automated Planning and Scheduling (ICAPS 2004), June 3-7 2004, Whistler, British Columbia, Canada |
| [The theory and practice of intention reconsideration](http://dx.doi.org/10.1080/09528130412331309277) | Journal of Experimental & Theoretical Artificial Intelligence 2004 |
| [Detecting & Avoiding Interference Between Goals in Intelligent Agents](http://ijcai.org/Proceedings/03/Papers/105.pdf) | IJCAI-03, Proceedings of the Eighteenth International Joint Conference on Artificial Intelligence, Acapulco, Mexico, August 9-15, 2003 |
| [Commitment and Effectiveness of Situated Agents](http://ijcai.org/Proceedings/91-1/Papers/014.pdf) | Proceedings of the 12th International Joint Conference on Artificial Intelligence. Sydney, Australia, August 24-30, 1991 |

#### Other Works

| Paper | Venue |
| --- | --- |
| ProactiveMobile: A Comprehensive Benchmark for Boosting Proactive Intelligence on Mobile Devices | Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition 2026 |
| [AdaPlanBench: Evaluating Adaptive Planning in Large Language Model Agents under World and User Constraints](https://arxiv.org/abs/2606.05622) | arXiv 2026 |
| [Agent Planning Benchmark: A Diagnostic Framework for Planning Capabilities in LLM Agents](https://doi.org/10.48550/arXiv.2606.04874) | arXiv 2026 |
| [Flex-TravelPlanner: A Benchmark for Flexible Planning with Language Agents](https://openreview.net/forum?id=a7unQ5jMx7) | Workshop on Reasoning and Planning for Large Language Models at ICLR 2025 |
| Benchmarking Agentic Workflow Generation | The Thirteenth International Conference on Learning Representations 2025 |
| [COMPASS: A Multi-Turn Benchmark for Tool-Mediated Planning and Preference Optimization](https://arxiv.org/abs/2510.07043) | arXiv 2025 |
| [TripTide: A Benchmark for Adaptive Travel Planning under Disruptions](https://arxiv.org/abs/2510.21329) | arXiv 2025 |
| AgentBoard: An Analytical Evaluation Board of Multi-turn LLM Agents | Advances in Neural Information Processing Systems 2024 |
| TravelPlanner: A Benchmark for Real-World Planning with Language Agents | Proceedings of the 41st International Conference on Machine Learning 2024 |
| [NATURAL PLAN: Benchmarking LLMs on Natural Language Planning](https://arxiv.org/abs/2406.04520) | arXiv 2024 |
| PlanBench: An Extensible Benchmark for Evaluating Large Language Models on Planning and Reasoning about Change | Advances in Neural Information Processing Systems 2023 |

### ⚖️ Arbitration

**Is intervention well-founded, worthwhile, timely, and safe?** Gates initiative using uncertainty, utility, timing, risk, and reversibility.

![Arbitration: a worthwhile goal is not yet a warranted intervention](assets/figures/arbitration.webp)

#### Uncertainty quantification & confidence thresholds

| Paper | Venue |
| --- | --- |
| [Ask or Assume? Uncertainty-Aware Clarification-Seeking in Coding Agents](https://arxiv.org/abs/2603.26233) | EMNLP 2026 |
| [Proact-VL: A Proactive VideoLLM for Real-Time AI Companions](https://arxiv.org/abs/2603.03447) | arXiv 2026 |
| [DiscussLLM: Teaching Large Language Models When to Speak](https://arxiv.org/abs/2508.18167) | arXiv 2025 |
| [Observe, Ask, Intervene: Designing AI Agents for More Inclusive Meetings](http://dx.doi.org/10.1145/3706598.3713838) | Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems |
| [Know Your Limits: A Survey of Abstention in Large Language Models](https://arxiv.org/abs/2407.18418) | arXiv 2025 |
| [Large Language Model-based Human-Agent Collaboration for Complex Task Solving](http://dx.doi.org/10.18653/v1/2024.findings-emnlp.72) | Findings of the Association for Computational Linguistics: EMNLP 2024 |
| [Conformal Language Modeling](https://arxiv.org/abs/2306.10193) | arXiv 2024 |
| [Can LLMs Express Their Uncertainty? An Empirical Evaluation of Confidence Elicitation in LLMs](https://arxiv.org/abs/2306.13063) | arXiv 2024 |
| [R-Tuning: Instructing Large Language Models to Say ‘I Don't Know’](https://arxiv.org/abs/2311.09677) | arXiv 2024 |
| [Robots That Ask For Help: Uncertainty Alignment for Large Language Model Planners](https://arxiv.org/abs/2307.01928) | CoRL 2023 |
| [A Framework for Intervention Based Team Support in Time Critical Tasks](http://dx.doi.org/10.1109/smc53992.2023.10393881) | 2023 IEEE International Conference on Systems, Man, and Cybernetics (SMC) |
| [Prompting and Evaluating Large Language Models for Proactive Dialogues: Clarification, Target-guided, and Non-collaboration](https://aclanthology.org/2023.findings-emnlp.711/) | Findings of the Association for Computational Linguistics: EMNLP 2023 |
| [Semantic Uncertainty: Linguistic Invariances for Uncertainty Estimation in Natural Language Generation](https://arxiv.org/abs/2302.09664) | arXiv 2023 |
| [Just Ask for Calibration: Strategies for Eliciting Calibrated Confidence Scores from Language Models Fine-Tuned with Human Feedback](https://arxiv.org/abs/2305.14975) | arXiv 2023 |
| [Language Models (Mostly) Know What They Know](https://arxiv.org/abs/2207.05221) | arXiv 2022 |
| [Teaching Models to Express Their Uncertainty in Words](https://arxiv.org/abs/2205.14334) | arXiv 2022 |
| [Consistent Estimators for Learning to Defer to an Expert](https://arxiv.org/abs/2006.01862) | Proceedings of the 37th International Conference on Machine Learning 2020 |
| [Predict Responsibly: Improving Fairness and Accuracy by Learning to Defer](https://arxiv.org/abs/1711.06664) | arXiv 2018 |
| [Selective Classification for Deep Neural Networks](https://arxiv.org/abs/1705.08500) | arXiv 2017 |
| [On Calibration of Modern Neural Networks](https://arxiv.org/abs/1706.04599) | arXiv 2017 |
| [A multi-agent approach for autonomous digital preservation](http://dx.doi.org/10.1109/icmew.2015.7169866) | 2015 IEEE International Conference on Multimedia & Expo Workshops (ICMEW) |
| [On optimum recognition error and reject tradeoff](https://doi.org/10.1109/tit.1970.1054406) | Institute of Electrical and Electronics Engineers (IEEE) 1970 |

#### Utility–cost analysis

| Paper | Venue |
| --- | --- |
| [Breaking the Observability Tax: Dynamic Resolution Anomaly Detection via Topology-Aware Active LLM Agents](http://dx.doi.org/10.1109/access.2026.3675074) | IEEE Access 2026 |
| [From Helpfulness to Toxic Proactivity: Diagnosing Behavioral Misalignment in LLM Agents](https://arxiv.org/abs/2602.04197) | arXiv 2026 |
| [LLAMAPIE: Proactive In-Ear Conversation Assistants](https://api.semanticscholar.org/CorpusID:278367660) | arXiv 2025 |
| [Evaluating Personalized Tool-Augmented LLMs from the Perspectives of Personalization and Proactivity](https://arxiv.org/abs/2503.00771) | arXiv 2025 |
| [Budget-Aware Tool-Use Enables Effective Agent Scaling](https://arxiv.org/abs/2511.17006) | arXiv 2025 |
| [Ten Principles of AI Agent Economics](https://arxiv.org/abs/2505.20273) | arXiv 2025 |
| [Legible and Proactive Robot Planning for Prosocial Human-Robot Interactions](https://arxiv.org/abs/2404.03734) | arXiv 2024 |
| [Mixed-Initiative Human-Robot Teaming under Suboptimality with Online Bayesian Adaptation](https://arxiv.org/abs/2403.16178) | arXiv 2024 |
| [A Survey of AIOps for Failure Management in the Era of Large Language Models](https://arxiv.org/abs/2406.11213) | arXiv 2024 |
| [FrugalGPT: How to Use Large Language Models While Reducing Cost and Improving Performance](https://arxiv.org/abs/2305.05176) | arXiv 2023 |
| [Autonomous Intelligent Cyber-defense Agent (AICA) Reference Architecture. Release 2.0](https://arxiv.org/abs/1803.10664) | arXiv 2023 |
| [Improving Proactive Dialog Agents Using Socially-Aware Reinforcement Learning](https://arxiv.org/abs/2211.15359) | arXiv 2023 |
| [Modelling and Predicting Trust for Developing Proactive Dialogue Strategies in Mixed-Initiative Interaction](http://dx.doi.org/10.1145/3462244.3479906) | Proceedings of the 2021 International Conference on Multimodal Interaction |
| [Predictive and Adaptive Failure Mitigation to Avert Production Cloud VM Interruptions](https://www.usenix.org/conference/osdi20/presentation/levy) | 14th USENIX Symposium on Operating Systems Design and Implementation, OSDI 2020, Virtual Event, November 4-6, 2020 |
| [Speaker or Listener? The Role of a Dialog Agent](http://dx.doi.org/10.18653/v1/2020.findings-emnlp.437) | Findings of the Association for Computational Linguistics: EMNLP 2020 |
| [A review on maintenance optimization](http://dx.doi.org/10.1016/j.ejor.2019.09.047) | European Journal of Operational Research 2020 |
| [A Snooze-less User-Aware Notification System for Proactive Conversational Agents](https://arxiv.org/abs/2003.02097) | arXiv 2020 |
| [Learning What Information to Give in Partially Observed Domains](https://arxiv.org/abs/1805.08263) | arXiv 2018 |
| [Disruption and recovery of computing tasks: field study, analysis, and directions](https://doi.org/10.1145/1240624.1240730) | Proceedings of the 2007 Conference on Human Factors in Computing Systems, CHI 2007, San Jose, California, USA, April 28 - May 3, 2007 |
| [On the need for attention-aware systems: Measuring effects of interruption on task performance, error rate, and affective state](http://dx.doi.org/10.1016/j.chb.2005.12.009) | Computers in Human Behavior 2006 |
| [A review on machinery diagnostics and prognostics implementing condition-based maintenance](https://doi.org/10.1016/j.ymssp.2005.09.012) | Elsevier BV 2006 |
| [BusyBody: creating and fielding personalized models of the cost of interruption](http://dx.doi.org/10.1145/1031607.1031690) | Proceedings of the 2004 ACM conference on Computer supported cooperative work |
| [The Boy Who Cried Wolf Revisited: The Impact of False Alarm Intolerance on Cost–Loss Scenarios](https://doi.org/10.1175/1520-0434(2004)019<0391:tbwcwr>2.0.co;2) | American Meteorological Society 2004 |
| [Comparison of Four Primary Methods for Coordinating the Interruption of People in Human-Computer Interaction](http://dx.doi.org/10.1207/s15327051hci1701_2) | Human–Computer Interaction 2002 |
| The Foundations of Cost-Sensitive Learning | Proceedings of the Seventeenth International Joint Conference on Artificial Intelligence, IJCAI 2001, Seattle, Washington, USA, August 4-10, 2001 |
| [Principles of Mixed-Initiative User Interfaces](https://doi.org/10.1145/302979.303030) | CHI 1999 |
| Attention-Sensitive Alerting | UAI 1999 |
| [Humans and Automation: Use, Misuse, Disuse, Abuse](http://dx.doi.org/10.1518/001872097778543886) | Human Factors: The Journal of the Human Factors and Ergonomics Society 1997 |
| [Principles of metareasoning](http://dx.doi.org/10.1016/0004-3702(91)90015-c) | Artificial Intelligence 1991 |
| [Information Value Theory](https://doi.org/10.1109/tssc.1966.300074) | Institute of Electrical and Electronics Engineers (IEEE) 1966 |

#### Timing & interruption management

| Paper | Venue |
| --- | --- |
| [ProActor: Timing-Aware Reinforcement Learning for Proactive Task Scheduling Agents](https://arxiv.org/abs/2605.24900) | arXiv 2026 |
| [RESPOND: Responsive Engagement Strategy for Predictive Orchestration and Dialogue](https://arxiv.org/abs/2603.21682) | arXiv 2026 |
| [From Reactive to Proactive: Assessing the Proactivity of Voice Agents via ProVoice-Bench](https://arxiv.org/abs/2604.15037) | arXiv 2026 |
| [Beyond the Turn-Based Game: Enabling Real-Time Conversations with Duplex Models](https://arxiv.org/abs/2406.15718) | arXiv 2026 |
| [SHANKS: Simultaneous Hearing and Thinking for Spoken Language Models](https://arxiv.org/abs/2510.06917) | arXiv 2025 |
| [ProMemAssist: Exploring Timely Proactive Assistance Through Working Memory Modeling in Multi-Modal Wearable Devices](https://arxiv.org/abs/2507.21378) | UIST 2025 |
| [YETI (YET to Intervene) Proactive Interventions by Multimodal AI Agents in Augmented Reality Tasks](https://arxiv.org/abs/2501.09355) | arXiv 2025 |
| [Time to Talk: LLM Agents for Asynchronous Group Communication in Mafia Games](https://arxiv.org/abs/2506.05309) | arXiv 2025 |
| [EgoSpeak: Learning When to Speak for Egocentric Conversational Agents in the Wild](https://arxiv.org/abs/2502.14892) | arXiv 2025 |
| [WHEN TO ACT, WHEN TO WAIT: Modeling the Intent-Action Alignment Problem in Dialogue](https://arxiv.org/abs/2506.01881) | arXiv 2025 |
| [Active Health Data Collection Using Social Robot](http://dx.doi.org/10.1109/robot61475.2024.10796933) | 2024 7th Iberian Robotics Conference (ROBOT) |
| [“Hey Genie, You Got Me Thinking about My Menu Choices!” Impact of Proactive Feedback on User Perception and Reflection in Decision-making Tasks](http://dx.doi.org/10.1145/3685274) | ACM Transactions on Computer-Human Interaction 2024 |
| [Moshi: a speech-text foundation model for real-time dialogue](https://arxiv.org/abs/2410.00037) | arXiv 2024 |
| [Language Model Can Listen While Speaking](https://arxiv.org/abs/2408.02622) | arXiv 2024 |
| [Towards a Progression-Aware Autonomous Dialogue Agent](http://dx.doi.org/10.18653/v1/2022.naacl-main.87) | Proceedings of the 2022 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies |
| [Turn-taking in Conversational Systems and Human-Robot Interaction: A Review](http://dx.doi.org/10.1016/j.csl.2020.101178) | Computer Speech & Language 2021 |
| [Hello There! Is Now a Good Time to Talk?: Opportune Moments for Proactive Interactions with Smart Speakers](http://dx.doi.org/10.1145/3411810) | Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies 2020 |
| [Autopilot: workload autoscaling at Google](http://dx.doi.org/10.1145/3342195.3387524) | Proceedings of the Fifteenth European Conference on Computer Systems 2020 |
| [Adaptive Planning with Evidence Based Prediction for Improved Fluency in Routine Human-Robot Collaborative Tasks](http://dx.doi.org/10.1609/aaai.v33i01.33019880) | Proceedings of the AAAI Conference on Artificial Intelligence 2019 |
| [Proactive Robots With the Perception of Nonverbal Human Behavior: A Review](http://dx.doi.org/10.1109/access.2019.2921986) | IEEE Access 2019 |
| [Interrupting Drivers for Interactions: Predicting Opportune Moments for In-vehicle Proactive Auditory-verbal Tasks](http://dx.doi.org/10.1145/3287053) | Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies 2018 |
| [Effects of agent timing on the human-agent team](http://dx.doi.org/10.1016/j.cogsys.2017.02.007) | Cognitive Systems Research 2017 |
| [My Phone and Me: Understanding People's Receptivity to Mobile Notifications](https://doi.org/10.1145/2858036.2858566) | Proceedings of the 2016 CHI Conference on Human Factors in Computing Systems, San Jose, CA, USA, May 7-12, 2016 |
| [AdaHeat: A General Adaptive Intelligent Agent for Domestic Heating Control](http://dl.acm.org/citation.cfm?id=2773317) | Proceedings of the 2015 International Conference on Autonomous Agents and Multiagent Systems, AAMAS 2015, Istanbul, Turkey, May 4-8, 2015 |
| [Opportunistic maintenance (OM) as a new advancement in maintenance approaches: A review](http://dx.doi.org/10.1108/jqme-04-2013-0018) | Journal of Quality in Maintenance Engineering 2014 |
| [InterruptMe: designing intelligent prompting mechanisms for pervasive applications](https://doi.org/10.1145/2632048.2632062) | Proceedings of the 2014 ACM International Joint Conference on Pervasive and Ubiquitous Computing, UbiComp '14, Seattle, WA, USA, September 13-17, 2014 |
| [Finding the timings for a guide agent to interveneinter-user conversation in considering their gazebehaviors](http://dx.doi.org/10.1145/2535948.2535957) | Proceedings of the 6th workshop on Eye gaze in intelligent human machine interaction: gaze in multimodal interaction 2013 |
| [Oasis: A framework for linking notification delivery to the perceptual structure of goal-directed tasks](https://doi.org/10.1145/1879831.1879833) | ACM Trans. Comput. Hum. Interact. 2010 |
| [Predicting human interruptibility with sensors](http://dx.doi.org/10.1145/1057237.1057243) | ACM Transactions on Computer-Human Interaction 2005 |
| [Using context-aware computing to reduce the perceived burden of interruptions from mobile devices](http://dx.doi.org/10.1145/1054972.1055100) | Proceedings of the SIGCHI Conference on Human Factors in Computing Systems 2005 |
| [Towards an index of opportunity: understanding changes in mental workload during task execution](http://dx.doi.org/10.1145/1054972.1055016) | Proceedings of the SIGCHI Conference on Human Factors in Computing Systems 2005 |
| [If Not Now, When? The Effects of Interruption at Different Moments Within Task Execution](https://doi.org/10.1145/985692.985727) | CHI 2004 |
| [Learning and reasoning about interruption](https://doi.org/10.1145/958432.958440) | Proceedings of the 5th International Conference on Multimodal Interfaces, ICMI 2003, Vancouver, British Columbia, Canada, November 5-7, 2003 |
| [On Optimum Methods in Quickest Detection Problems](http://dx.doi.org/10.1137/1108002) | Theory of Probability & Its Applications 1963 |
| [Continuous Inspection Schemes](https://doi.org/10.2307/2333009) | JSTOR 1954 |

#### Risk- & reversibility-aware gating

| Paper | Venue |
| --- | --- |
| [The Intelligent Disobedience Game: Formulating Disobedience in Stackelberg Games and Markov Decision Processes](https://arxiv.org/abs/2603.20994) | arXiv 2026 |
| [The Oversight Game: Learning to Cooperatively Balance an AI Agent's Safety and Autonomy](https://arxiv.org/abs/2510.26752) | arXiv 2026 |
| [Progent: Securing AI Agents with Privilege Control](https://arxiv.org/abs/2504.11703) | arXiv 2026 |
| [SafetyALFRED: Evaluating Safety-Conscious Planning of Multimodal Large Language Models](https://arxiv.org/abs/2604.19638) | arXiv 2026 |
| [Structural Enforcement of Goal Integrity in AI Agents via Separation-of-Powers Architecture](https://arxiv.org/abs/2604.23646) | arXiv 2026 |
| [LlamaFirewall: An open source guardrail system for building secure AI agents](https://arxiv.org/abs/2505.03574) | arXiv 2025 |
| [VIGIL: A Reflective Runtime for Self-Healing Agents](https://arxiv.org/abs/2512.07094) | arXiv 2025 |
| [OS-Harm: A Benchmark for Measuring Safety of Computer Use Agents](https://arxiv.org/abs/2506.14866) | arXiv 2025 |
| [SafeArena: Evaluating the Safety of Autonomous Web Agents](https://arxiv.org/abs/2503.04957) | arXiv 2025 |
| [AgentSpec: Customizable Runtime Enforcement for Safe and Reliable LLM Agents](https://arxiv.org/abs/2503.18666) | arXiv 2025 |
| [GuardAgent: Safeguard LLM Agents by a Guard Agent via Knowledge-Enabled Reasoning](https://arxiv.org/abs/2406.09187) | arXiv 2025 |
| [Identifying the Risks of LM Agents with an LM-Emulated Sandbox](https://arxiv.org/abs/2309.15817) | ICLR 2024 |
| [The Art of Saying No: Contextual Noncompliance in Language Models](https://arxiv.org/abs/2407.12043) | arXiv 2024 |
| [AI Control: Improving Safety Despite Intentional Subversion](https://arxiv.org/abs/2312.06942) | arXiv 2024 |
| [ST-WebAgentBench: A Benchmark for Evaluating Safety and Trustworthiness in Web Agents](https://arxiv.org/abs/2410.06703) | arXiv 2024 |
| [R-Judge: Benchmarking Safety Risk Awareness for LLM Agents](https://arxiv.org/abs/2401.10019) | arXiv 2024 |
| [Emergent autonomous scientific research capabilities of large language models](https://arxiv.org/abs/2304.05332) | arXiv 2023 |
| [Towards Cooperative Flight Control Using Visual-Attention](https://arxiv.org/abs/2212.11084) | arXiv 2023 |
| [A Hierarchical Variable Autonomy Mixed-Initiative Framework for Human-Robot Teaming in Mobile Robotics](https://arxiv.org/abs/2211.14095) | arXiv 2022 |
| [On Optimizing Interventions in Shared Autonomy](https://arxiv.org/abs/2112.09169) | arXiv 2022 |
| [There Is No Turning Back: A Self-Supervised Approach for Reversibility-Aware Reinforcement Learning](https://arxiv.org/abs/2106.04480) | arXiv 2021 |
| [Conservative Agency via Attainable Utility Preservation](https://arxiv.org/abs/1902.09725) | AIES 2020 |
| [Avoiding Side Effects By Considering Future Tasks](https://arxiv.org/abs/2010.07877) | arXiv 2020 |
| [Avoiding Side Effects in Complex Environments](https://arxiv.org/abs/2006.06547) | arXiv 2020 |
| [Penalizing side effects using stepwise relative reachability](https://arxiv.org/abs/1806.01186) | arXiv 2019 |
| [A comprehensive survey on safe reinforcement learning](https://dl.acm.org/doi/10.5555/2789272.2886795) | J. Mach. Learn. Res. 2015 |
| [Asking for Help Using Inverse Semantics](https://doi.org/10.15607/rss.2014.x.024) | Robotics: Science and Systems Foundation 2014 |

#### Other Works

| Paper | Venue |
| --- | --- |
| [KnowU-Bench: Towards Interactive, Proactive, and Personalized Mobile Agent Evaluation](https://arxiv.org/abs/2604.08455) | arXiv 2026 |
| [EgoPro-Bench: Benchmarking Personalized Proactive Interaction in Egocentric Video Streams](https://arxiv.org/abs/2605.07299) | arXiv 2026 |
| HiL-Bench (Human-in-Loop Benchmark): Do Agents Know When to Ask for Help? | arXiv 2026 |
| [OmniPro: A Comprehensive Benchmark for Omni-Proactive Streaming Video Understanding](https://arxiv.org/abs/2605.18577) | arXiv 2026 |
| Proactivevideoqa: A comprehensive benchmark evaluating proactive interactions in video large language models | arXiv 2025 |
| [ProCIS: A Benchmark for Proactive Retrieval in Conversations](http://dx.doi.org/10.1145/3626772.3657869) | Proceedings of the 47th International ACM SIGIR Conference on Research and Development in Information Retrieval 2024 |
| Calibrated Learning to Defer with One-vs-All Classifiers | Proceedings of the 39th International Conference on Machine Learning 2022 |
| [Beyond Interruptibility: Predicting Opportune Moments to Engage Mobile Phone Users](https://doi.org/10.1145/3130956) | Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies 2017 |
| Effects of intelligent notification management on users and their tasks | Proceedings of the SIGCHI Conference on Human Factors in Computing Systems 2008 |
| Predicting human interruptibility with sensors: a Wizard of Oz feasibility study | Proceedings of the SIGCHI conference on Human factors in computing systems 2003 |
| [Towards Adjustable Autonomy for the Real World](http://dx.doi.org/10.1613/jair.1037) | Journal of Artificial Intelligence Research 2002 |

### ⚡ Action

**How much work should the agent perform before returning control, and how should it present the intervention?** Resolves unspecified details within granted authority while preserving human control over consequential commitments.

![Action: exercising discretion while preserving human control](assets/figures/action.webp)

#### Spectrum of autonomy & interaction paradigm

| Paper | Venue |
| --- | --- |
| [Towards Verifiably Safe Tool Use for LLM Agents](https://arxiv.org/abs/2601.08012) | arXiv 2026 |
| [Agentic Business Process Management Systems](https://arxiv.org/abs/2601.18833) | arXiv 2026 |
| [Reframing LLM Agent Security as an Agent-Human Interaction Problem](https://arxiv.org/abs/2605.24309) | arXiv 2026 |
| [Levels of Autonomy for AI Agents](https://arxiv.org/abs/2506.12469) | arXiv 2025 |
| [Flip Co-op: Cooperative Takeovers in Shared Autonomy](https://arxiv.org/abs/2509.09281) | arXiv 2025 |
| [Fully Autonomous AI Agents Should Not be Developed](https://arxiv.org/abs/2502.02649) | arXiv 2025 |
| [An Evaluation of Situational Autonomy for Human-AI Collaboration in a Shared Workspace Setting](http://dx.doi.org/10.1145/3613904.3642564) | Proceedings of the CHI Conference on Human Factors in Computing Systems 2024 |
| [AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation](https://arxiv.org/abs/2308.08155) | arXiv 2023 |
| [Automatic topic selection for long-term interaction with embodied conversational agents in health coaching: A micro-randomized trial](http://dx.doi.org/10.1016/j.invent.2022.100502) | Internet Interventions 2022 |
| [The Effects of System Initiative during Conversational Collaborative Search](https://arxiv.org/abs/2202.09728) | arXiv 2022 |
| [Doers, not Watchers: Intelligent Autonomous Agents are a Path to Cyber Resilience](https://arxiv.org/abs/2201.11111) | arXiv 2022 |
| [When to Ask for Help: Proactive Interventions in Autonomous Reinforcement Learning](https://arxiv.org/abs/2210.10765) | arXiv 2022 |
| [Balancing Performance and Human Autonomy with Implicit Guidance Agent](https://arxiv.org/abs/2109.00414) | arXiv 2021 |
| [How to Design a Program Repair Bot? Insights from the Repairnator Project](https://arxiv.org/abs/1811.09852) | arXiv 2018 |
| [Medical robotics—Regulatory, ethical, and legal considerations for increasing levels of autonomy](http://dx.doi.org/10.1126/scirobotics.aam8638) | Science Robotics 2017 |
| [Digital Nudging](http://dx.doi.org/10.1007/s12599-016-0453-1) | Business & Information Systems Engineering 2016 |
| [Agent-assisted task management that reduces email overload](http://dx.doi.org/10.1145/1719970.1719980) | Proceedings of the 15th international conference on Intelligent user interfaces 2010 |
| [Coordinated Multiagent Teams and Sliding Autonomy for Large-Scale Assembly](http://dx.doi.org/10.1109/jproc.2006.876966) | Proceedings of the IEEE 2006 |
| [Dimensions of Adjustable Autonomy and Mixed-Initiative Interaction](http://dx.doi.org/10.1007/978-3-540-25928-2_3) | Agents and Computational Autonomy 2004 |
| [A model for types and levels of human interaction with automation](http://dx.doi.org/10.1109/3468.844354) | IEEE Transactions on Systems, Man, and Cybernetics - Part A: Systems and Humans 2000 |
| Human and Computer Control of Undersea Teleoperators | MIT Man-Machine Systems Laboratory technical report 1978 |
| [Claude Code Documentation](https://code.claude.com/docs/en/overview) |  |
| [Autonomous shipping](https://www.imo.org/en/MediaCentre/HotTopics/Pages/Autonomous-shipping.aspx) |  |
| [Codex Documentation](https://developers.openai.com/codex) |  |
| [Automated Vehicle Safety](https://www.nhtsa.gov/vehicle-safety/automated-vehicle-safety) |  |

#### Action presentation & mixed-initiative delivery

| Paper | Venue |
| --- | --- |
| [Less Interaction But More Explanation: A Communication Perspective on Agentic AI Interfaces](https://arxiv.org/abs/2605.01610) | arXiv 2026 |
| [Help Without Being Asked: A Deployed Proactive Agent System for On-Call Support with Continuous Self-Improvement](https://arxiv.org/abs/2604.09579) | arXiv 2026 |
| [Mixed-Initiative Dialog for Human-Robot Collaborative Manipulation](https://arxiv.org/abs/2508.05535) | arXiv 2026 |
| [Magentic-UI: Towards Human-in-the-loop Agentic Systems](https://arxiv.org/abs/2507.22358) | arXiv 2025 |
| [Sensible Agent: A Framework for Unobtrusive Interaction with Proactive AR Agents](https://arxiv.org/abs/2509.09255) | UIST 2025 |
| [Need Help? Designing Proactive AI Assistants for Programming](https://arxiv.org/abs/2410.04596) | CHI 2025 |
| [ReaLJam: Real-Time Human-AI Music Jamming with Reinforcement Learning-Tuned Transformers](https://arxiv.org/abs/2502.21267) | CHI EA 2025 |
| [Assistance or Disruption? Exploring and Evaluating the Design and Trade-offs of Proactive AI Programming Support](http://dx.doi.org/10.1145/3706598.3713357) | Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems |
| [Proactive Agentic Whiteboards: Enhancing Diagrammatic Learning](https://arxiv.org/abs/2512.01234) | arXiv 2025 |
| [Agentic Software Engineering: Foundational Pillars and a Research Roadmap](https://arxiv.org/abs/2509.06216) | arXiv 2025 |
| [Controlling AI Agent Participation in Group Conversations: A Human-Centered Approach](https://arxiv.org/abs/2501.17258) | arXiv 2025 |
| [CodingGenie: A Proactive LLM-Powered Programming Assistant](https://arxiv.org/abs/2503.14724) | arXiv 2025 |
| [Overhearing LLM Agents: A Survey, Taxonomy, and Roadmap](https://arxiv.org/abs/2509.16325) | arXiv 2025 |
| [AgentOps: Enabling Observability of LLM Agents](https://arxiv.org/abs/2411.05285) | arXiv 2024 |
| [“I'm Not Sure, But...”: Examining the Impact of Large Language Models' Uncertainty Expression on User Reliance and Trust](https://arxiv.org/abs/2405.00623) | arXiv 2024 |
| [Reading Between the Lines: Modeling User Behavior and Costs in AI-Assisted Programming](https://arxiv.org/abs/2210.14306) | arXiv 2024 |
| [GoEX: Perspectives and Designs Towards a Runtime for Autonomous LLM Applications](https://arxiv.org/abs/2404.06921) | arXiv 2024 |
| [Generation Probabilities Are Not Enough: Uncertainty Highlighting in AI Code Completions](https://doi.org/10.1145/3702320) | ACM Transactions on Computer-Human Interaction 2024 |
| [Grounded Copilot: How Programmers Interact with Code-Generating Models](https://arxiv.org/abs/2206.15000) | arXiv 2022 |
| [Effect of Confidence and Explanation on Accuracy and Trust Calibration in AI-Assisted Decision Making](https://doi.org/10.1145/3351095.3372852) | Proceedings of the 2020 Conference on Fairness, Accountability, and Transparency |
| [Canary Analysis Service: Automated canarying quickens development, improves production safety, and helps prevent outages.](http://dx.doi.org/10.1145/3194653.3194655) | Queue 2018 |
| [Textual Explanations for Self-Driving Vehicles](http://dx.doi.org/10.1007/978-3-030-01216-8_35) | Computer Vision – ECCV 2018 |
| [An in-situ study of mobile phone notifications](http://dx.doi.org/10.1145/2628363.2628364) | Proceedings of the 16th international conference on Human-computer interaction with mobile devices & services 2014 |
| [Legibility and predictability of robot motion](https://doi.org/10.1109/hri.2013.6483603) | IEEE 2013 |
| [A toolkit for managing user attention in peripheral displays](https://doi.org/10.1145/1029632.1029676) | ACM 2004 |
| [Explaining collaborative filtering recommendations](https://doi.org/10.1145/358916.358995) | ACM 2000 |
| [Ambient Displays: Turning Architectural Space into an Interface between People and Digital Information](http://dx.doi.org/10.1007/3-540-69706-3_4) | Cooperative Buildings: Integrating Information, Organization, and Architecture 1998 |
| [The Coming Age of Calm Technology](http://dx.doi.org/10.1007/978-1-4612-0685-9_6) | Beyond Calculation 1997 |
| [Computers are social actors](http://dx.doi.org/10.1145/191666.191703) | Proceedings of the SIGCHI Conference on Human Factors in Computing Systems 1994 |

#### Other Works

| Paper | Venue |
| --- | --- |
| [ProactiveVA: Proactive Visual Analytics with LLM-Based UI Agent](https://arxiv.org/abs/2507.18165) | arXiv 2025 |
| [WebArena: A Realistic Web Environment for Building Autonomous Agents](https://webarena.dev) | arXiv 2023 |
| [Does the Whole Exceed its Parts? The Effect of AI Explanations on Complementary Team Performance](https://doi.org/10.1145/3411764.3445717) | Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems |
| [Guidelines for Human-AI Interaction](https://doi.org/10.1145/3290605.3300233) | Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems |
| [Design and Evaluation of Service Robot's Proactivity in Decision-Making Support Process](https://doi.org/10.1145/3290605.3300328) | Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems |
| [Efficient human-robot collaboration](https://doi.org/10.1177/0278364916688253) | Int. J. Rob. Res. 2017 |
| [Which robot behavior can motivate children to tidy up their toys? design and evaluation of "ranger"](https://doi.org/10.1145/2559636.2559659) | Proceedings of the 2014 ACM/IEEE International Conference on Human-Robot Interaction |
| [Cost-Based Anticipatory Action Selection for Human–Robot Fluency](https://doi.org/10.1109/TRO.2007.907483) | Trans. Rob. 2007 |
| Toward meta-cognitive tutoring: A model of help seeking with a Cognitive Tutor | International journal of artificial intelligence in education 2006 |
| Detecting student misuse of intelligent tutoring systems | International conference on intelligent tutoring systems 2004 |

### 🔄 Adaptation

**Was the initiative warranted, and what should change?** Uses outcomes and feedback for fast reflection and slower calibration of future initiative.

![Adaptation: learning whether initiative was warranted](assets/figures/adaptation.webp)

#### Implicit feedback & self-correction

| Paper | Venue |
| --- | --- |
| [Optimizing Multi-Turn Interactive Recommendation Agents via Generative Intrinsic Motivation](http://dx.doi.org/10.1145/3774904.3792209) | Proceedings of the ACM Web Conference 2026 |
| [PowerLens: Taming LLM Agents for Safe and Personalized Mobile Power Management](https://arxiv.org/abs/2603.19584) | arXiv 2026 |
| [Actively Obtaining Environmental Feedback for Autonomous Action Evaluation Without Predefined Measurements](https://arxiv.org/abs/2601.04235) | arXiv 2026 |
| [Grounded in Reality: Learning and Deploying Proactive LLM from Offline Logs](https://arxiv.org/abs/2510.25441) | arXiv 2025 |
| [Proactive Agent: Shifting LLM Agents from Reactive Responses to Active Assistance](https://arxiv.org/abs/2410.12361) | ICLR 2025 |
| [Generalising from Self-Produced Data: Model Training Beyond Human Constraints](https://arxiv.org/abs/2504.04711) | arXiv 2025 |
| [AutoGuard: A Self-Healing Proactive Security Layer for DevSecOps Pipelines Using Reinforcement Learning](https://arxiv.org/abs/2512.04368) | arXiv 2025 |
| [RLEF: Grounding Code LLMs in Execution Feedback with Reinforcement Learning](https://arxiv.org/abs/2410.02089) | arXiv 2025 |
| [User Feedback in Human-LLM Dialogues: A Lens to Understand Users But Noisy as a Learning Signal](https://arxiv.org/abs/2507.23158) | arXiv 2025 |
| [Reward-Driven Interaction: Enhancing Proactive Dialogue Agents through User Satisfaction Prediction](https://arxiv.org/abs/2505.18731) | arXiv 2025 |
| [Automated Alert Classification and Triage (AACT): An Intelligent System for the Prioritisation of Cybersecurity Alerts](https://arxiv.org/abs/2505.09843) | arXiv 2025 |
| [Magnet: Multi-turn Tool-use Data Synthesis and Distillation via Graph Translation](https://aclanthology.org/2025.acl-long.1566/) | Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers) 2025 |
| [When to Show a Suggestion? Integrating Human Feedback in AI-Assisted Programming](https://arxiv.org/abs/2306.04930) | AAAI 2024 |
| [Aligning LLM Agents by Learning Latent Preference from User Edits](https://arxiv.org/abs/2404.15269) | arXiv 2024 |
| [Beyond Following: Mixing Active Initiative into Computational Creativity](https://arxiv.org/abs/2409.16291) | arXiv 2024 |
| [FaGeL: Fabric LLMs Agent empowered Embodied Intelligence Evolution with Autonomous Human-Machine Collaboration](https://arxiv.org/abs/2412.20297) | arXiv 2024 |
| [Trial and Error: Exploration-Based Trajectory Optimization for LLM Agents](https://arxiv.org/abs/2403.02502) | arXiv 2024 |
| CodecLM: Aligning Language Models with Tailored Synthetic Data | Findings of the Association for Computational Linguistics: NAACL 2024 |
| [Mixed-Initiative Multiagent Apprenticeship Learning for Human Training of Robot Teams](http://papers.nips.cc/paper_files/paper/2023/hash/6f5288d7059cbe3f5a19dad1b3bf17e1-Abstract-Conference.html) | Advances in Neural Information Processing Systems 36: Annual Conference on Neural Information Processing Systems 2023, NeurIPS 2023, New Orleans, LA, USA, December 10 - 16, 2023 |
| [Productivity Assessment of Neural Code Completion](https://arxiv.org/abs/2205.06537) | arXiv 2022 |
| [Expert Intervention Learning: An online framework for robot learning from explicit and implicit human feedback](http://dx.doi.org/10.1007/s10514-021-10006-9) | Autonomous Robots 2021 |
| [Interaction-Grounded Learning](https://arxiv.org/abs/2106.04887) | arXiv 2021 |
| [Gandalf: An Intelligent, End-To-End Analytics Service for Safe Deployment in Large-Scale Cloud Infrastructure](https://www.usenix.org/conference/nsdi20/presentation/li) | 17th USENIX Symposium on Networked Systems Design and Implementation, NSDI 2020, Santa Clara, CA, USA, February 25-27, 2020 |
| [Quick Question: Interrupting Users for Microtasks with Reinforcement Learning](https://arxiv.org/abs/2007.09515) | arXiv 2020 |
| [Waymo Public Road Safety Performance Data](https://arxiv.org/abs/2011.00038) | arXiv 2020 |
| [Autonomous vehicles’ disengagements: Trends, triggers, and regulatory limitations](http://dx.doi.org/10.1016/j.aap.2017.11.001) | Accident Analysis & Prevention 2018 |
| [The Communicative Activity of “Making Suggestions” as an Interactional Process: Towards a Dialog Model for HAI](http://dx.doi.org/10.1145/3125739.3125752) | Proceedings of the 5th International Conference on Human Agent Interaction 2017 |
| [Towards personalized human AI interaction - adapting the behavior of AI agents using neural signatures of subjective interest](https://arxiv.org/abs/1709.04574) | arXiv 2017 |
| [Counterfactual Risk Minimization: Learning from Logged Bandit Feedback](http://proceedings.mlr.press/v37/swaminathan15.html) | Proceedings of the 32nd International Conference on Machine Learning, ICML 2015, Lille, France, 6-11 July 2015 |
| [Modeling delayed feedback in display advertising](http://dx.doi.org/10.1145/2623330.2623634) | Proceedings of the 20th ACM SIGKDD international conference on Knowledge discovery and data mining 2014 |
| [Collaborative Filtering for Implicit Feedback Datasets](https://doi.org/10.1109/icdm.2008.22) | IEEE 2008 |
| [Accurately interpreting clickthrough data as implicit feedback](http://dx.doi.org/10.1145/1076034.1076063) | Proceedings of the 28th annual international ACM SIGIR conference on Research and development in information retrieval 2005 |
| [Optimizing search engines using clickthrough data](http://dx.doi.org/10.1145/775047.775067) | Proceedings of the eighth ACM SIGKDD international conference on Knowledge discovery and data mining 2002 |

#### Inference-time reflection

| Paper | Venue |
| --- | --- |
| [PreFlect: From Retrospective to Prospective Reflection in Large Language Model Agents](https://arxiv.org/abs/2602.07187) | arXiv 2026 |
| [Proactive Conversational Agents with Inner Thoughts](https://arxiv.org/abs/2501.00383) | arXiv 2025 |
| [Agentic Metacognition: Designing a "Self-Aware" Low-Code Agent for Failure Prediction and Human Handoff](https://arxiv.org/abs/2509.19783) | arXiv 2025 |
| [The Danger of Overthinking: Examining the Reasoning-Action Dilemma in Agentic Tasks](https://arxiv.org/abs/2502.08235) | arXiv 2025 |
| [A Stitch in Time Saves Nine: Proactive Self-Refinement for Language Models](https://arxiv.org/abs/2508.12903) | arXiv 2025 |
| [PARC: An Autonomous Self-Reflective Coding Agent for Robust Execution of Long-Horizon Tasks](https://arxiv.org/abs/2512.03549) | arXiv 2025 |
| [Enhancing User-Oriented Proactivity in Open-Domain Dialogues with Critic Guidance](https://arxiv.org/abs/2505.12334) | arXiv 2025 |
| [TN-AutoRCA: Benchmark Construction and Agentic Framework for Self-Improving Alarm-Based Root Cause Analysis in Telecommunication Networks](https://arxiv.org/abs/2507.18190) | arXiv 2025 |
| [Scene Graph-Guided Proactive Replanning for Failure-Resilient Embodied Agent](https://arxiv.org/abs/2508.11286) | arXiv 2025 |
| [Leveraging Dual Process Theory in Language Agent Framework for Real-time Simultaneous Human-AI Collaboration](https://arxiv.org/abs/2502.11882) | arXiv 2025 |
| [AssistantX: An LLM-Powered Proactive Assistant in Collaborative Human-Populated Environment](https://arxiv.org/abs/2409.17655) | arXiv 2024 |
| [CRITIC: Large Language Models Can Self-Correct with Tool-Interactive Critiquing](https://arxiv.org/abs/2305.11738) | arXiv 2024 |
| [Large Language Models Cannot Self-Correct Reasoning Yet](https://arxiv.org/abs/2310.01798) | arXiv 2024 |
| [DiLu: A Knowledge-Driven Approach to Autonomous Driving with Large Language Models](https://arxiv.org/abs/2309.16292) | arXiv 2024 |
| Autonomous chemical research with large language models | Nature 2023 |
| [Self-Refine: Iterative Refinement with Self-Feedback](https://arxiv.org/abs/2303.17651) | arXiv 2023 |
| [Reflexion: Language Agents with Verbal Reinforcement Learning](https://arxiv.org/abs/2303.11366) | arXiv 2023 |

#### Long-term calibration, personalization & trust

| Paper | Venue |
| --- | --- |
| [ProPerSim: Developing Proactive and Personalized AI Assistants through User-Assistant Simulation](https://arxiv.org/abs/2509.21730) | arXiv 2026 |
| [SIL: Symbiotic Interactive Learning for Language-Conditioned Human-Agent Co-Adaptation](https://arxiv.org/abs/2511.05203) | arXiv 2026 |
| [Training Proactive and Personalized LLM Agents](https://arxiv.org/abs/2511.02208) | arXiv 2025 |
| [Mind the Gap: Linguistic Divergence and Adaptation Strategies in Human-LLM Assistant vs. Human-Human Interactions](https://arxiv.org/abs/2510.02645) | arXiv 2025 |
| [Trust repair in human-agent teams: the effectiveness of explanations and expressing regret](http://dx.doi.org/10.1007/s10458-021-09515-9) | Autonomous Agents and Multi-Agent Systems 2021 |
| [Performative Prediction](https://arxiv.org/abs/2002.06673) | arXiv 2021 |
| [Towards a Theory of Longitudinal Trust Calibration in Human-Robot Teams](https://doi.org/10.1007/s12369-019-00596-x) | Int. J. Soc. Robotics 2020 |
| [Adaptive trust calibration for human-AI collaboration](http://dx.doi.org/10.1371/journal.pone.0229132) | PLOS ONE 2020 |
| [A Sleeping, Recovering Bandit Algorithm for Optimizing Recurring Notifications](http://dx.doi.org/10.1145/3394486.3403351) | Proceedings of the 26th ACM SIGKDD International Conference on Knowledge Discovery & Data Mining 2020 |
| [Attitudes Toward Attributed Agency: Role of Perceived Control](http://dx.doi.org/10.1007/s12369-020-00672-7) | International Journal of Social Robotics 2020 |
| [Effects of Proactive Dialogue Strategies on Human-Computer Trust](https://doi.org/10.1145/3340631.3394840) | Proceedings of the 28th ACM Conference on User Modeling, Adaptation and Personalization 2020 |
| [Degenerate Feedback Loops in Recommender Systems](https://arxiv.org/abs/1902.10730) | arXiv 2019 |
| [Human-robot mutual adaptation in collaborative tasks: Models and experiments](http://dx.doi.org/10.1177/0278364917690593) | The International Journal of Robotics Research 2017 |
| [Towards Learning Efficient Intervention Policies for Wearable Devices](http://dx.doi.org/10.1109/chase.2017.111) | 2017 IEEE/ACM International Conference on Connected Health: Applications, Systems and Engineering Technologies (CHASE) |
| [Driving to safety: How many miles of driving would it take to demonstrate autonomous vehicle reliability?](http://dx.doi.org/10.1016/j.tra.2016.09.010) | Transportation Research Part A: Policy and Practice 2016 |
| [Tourists’ Attitudes toward Proactive Smartphone Systems](http://dx.doi.org/10.1177/0047287514563168) | Journal of Travel Research 2014 |
| [Complacency and Bias in Human Use of Automation: An Attentional Integration](http://dx.doi.org/10.1177/0018720810376055) | Human Factors: The Journal of the Human Factors and Ergonomics Society 2010 |
| [Trust in Automation: Designing for Appropriate Reliance](https://doi.org/10.1518/hfes.46.1.50.30392) | Human Factors 2004 |
| [The effects of level of automation and adaptive automation on human performance, situation awareness and workload in a dynamic control task](http://dx.doi.org/10.1080/1463922021000054335) | Theoretical Issues in Ergonomics Science 2004 |
| [Robotic Assistance in Coordination of Patient Care](http://dx.doi.org/10.15607/rss.2016.xii.026) | Robotics: Science and Systems XII |

#### Other Works

| Paper | Venue |
| --- | --- |
| [Test-Time Adaptation for LLM Agents via Environment Interaction](https://arxiv.org/abs/2511.04847) | arXiv 2026 |
| [VitaBench 2.0: Evaluating Personalized and Proactive Agents in Long-Term User Interactions](https://arxiv.org/abs/2605.27141) | arXiv 2026 |
| [Gaia2: Benchmarking LLM Agents on Dynamic and Asynchronous Environments](https://arxiv.org/abs/2602.11964) | arXiv 2026 |
| [Towards Realistic Personalization: Evaluating Long-Horizon Preference Following in Personalized User-LLM Interactions](https://arxiv.org/abs/2603.04191) | arXiv 2026 |
| [OP-Bench: Benchmarking Over-Personalization for Memory-Augmented Personalized Conversational Agents](https://arxiv.org/abs/2601.13722) | arXiv 2026 |
| [An Empirical Study of Proactive Coding Assistants in Real-World Software Development](https://arxiv.org/abs/2605.05700) | arXiv 2026 |
| [The World Won't Stay Still: Programmable Evolution for Agent Benchmarks](https://arxiv.org/abs/2603.05910) | arXiv 2026 |
| [Learning Personalized Agents from Human Feedback](https://arxiv.org/abs/2602.16173) | arXiv 2026 |
| [PERMA: Benchmarking Personalized Memory Agents via Event-Driven Preference and Realistic Task Environments](https://arxiv.org/abs/2603.23231) | arXiv 2026 |
| [EvoArena: Tracking Memory Evolution for Robust LLM Agents in Dynamic Environments](https://arxiv.org/abs/2606.13681) | arXiv 2026 |
| [PersonaLens: A Benchmark for Personalization Evaluation in Conversational AI Assistants](https://aclanthology.org/2025.findings-acl.927/) | Findings of the Association for Computational Linguistics: ACL 2025 |
| [AndroidWorld: A Dynamic Benchmarking Environment for Autonomous Agents](https://arxiv.org/abs/2405.14573) | arXiv 2024 |
| [AgentGym: Evolving Large Language Model-based Agents across Diverse Environments](https://arxiv.org/abs/2406.04151) | arXiv 2024 |

---

## 🚀 Applications

From executing assigned tasks to sustaining delegated objectives.

![From executing assigned tasks to sustaining delegated objectives](assets/figures/applications-delegated-objectives.webp)

A proactive-maturity map of the surveyed domains. **Initiative** places each domain on a 5-rung ladder (reactive → trigger-initiated → forecast-initiated → mandate-directed → agenda-generative); a range means that the surveyed systems span both rungs. **Authority** is what the agent is permitted to do on its first move. **Binding constraint** names the dominant limiter on further progress.

| Domain | Initiative | Authority | Next milestone | Binding constraint |
| --- | --- | --- | --- | --- |
| [Coding](#-coding) | Forecast–mandate | Gated action | Repository custodian under standing objectives | Incomplete oracles; manual review budget |
| [GUI Agents](#%EF%B8%8F-gui-agents) | Forecast–mandate | Gated action | Persistent cross-app operator with bounded delegation | Atomic operation proficiency; privacy; permissions |
| [Information Access](#-information-access) | Forecast | Suggestion | Persistent, revisable model of evolving user info needs | User model; benchmark coverage of appropriate silence |
| [Embodied & Robotics](#-embodied--robotics) | Reactive–mandate | Gated action | Mutual-cognitive partner inferring human intent | Latency; physical irreversibility; generalization |
| [Security](#-security) | Trigger–forecast | Gated action | Mandate-directed defense; reversible pre-positioning | Verification and remediation throughput |
| [AutoResearch](#-autoresearch) | Mandate | Gated action | Agent-originated research agendas with resource-aware design | Novelty and significance; cost and latency of the physical oracle |
| [Smart Home](#-smart-home) | Trigger–forecast | Acceptance-gated action | Ambient orchestration under standing objectives | Arbitration: will the act be welcome? |
| [Smart City](#%EF%B8%8F-smart-city) | Forecast | Suggestion | Supervised anticipatory infrastructure operations | Diffuse authority; public accountability |
| [Healthcare](#-healthcare) | Trigger–forecast | Clinician-gated | Longitudinal, multi-visit proactive care | Evidence standards; liability |
| [Law](#-law) | Trigger–forecast | Attorney-gated | Strategy-aware assistance across a matter's lifecycle | Professional responsibility; confidentiality |
| [Education](#-education) | Trigger | Suggestion | Trajectory-aware learning-path planning | Slow, noisy outcome feedback |
| [Agriculture](#-agriculture) | Trigger | Gated action | Season-aware coordination and preventive intervention | Seasonal feedback latency |
| [Entertainment & Media](#-entertainment--media) | Forecast | Suggestion / action | Anticipatory immersion across sessions | Noisy user satisfaction feedback |

The survey also compares 80 representative works from these domains across the six capacities. They can be browsed in the [website's library](https://empathyang.github.io/Proactive-AI-for-Superintelligent-Agents/#library).

### 💻 Coding

| Paper | Venue |
| --- | --- |
| [How We Built Claude Code Auto Mode: A Safer Way to Skip Permissions](https://www.anthropic.com/engineering/claude-code-auto-mode) | 2026 |
| [Building a C Compiler with a Team of Parallel Claudes](https://www.anthropic.com/engineering/building-c-compiler) | 2026 |
| [Agentic Coding and Persistent Returns to Expertise](https://www.anthropic.com/research/claude-code-expertise) | 2026 |
| [Harness Design for Long-Running Application Development](https://www.anthropic.com/engineering/harness-design-long-running-apps) | 2026 |
| [Governing Agent Autonomy with Auto-review](https://cursor.com/blog/agent-autonomy-auto-review) | 2026 |
| [Scaling Long-Running Autonomous Coding](https://cursor.com/blog/scaling-agents) | 2026 |
| [Towards Self-Driving Codebases](https://cursor.com/blog/self-driving-codebases) | 2026 |
| [ClarifyCodeBench: Evaluating LLMs on Clarifying Ambiguous Requirements for Code Generation](https://arxiv.org/abs/2607.00711) | arXiv 2026 |
| [SWE-MeM: Learning Adaptive Memory Management for Long-Horizon Coding Agents](https://arxiv.org/abs/2606.28434) | arXiv 2026 |
| [Effective Strategies for Asynchronous Software Engineering Agents](https://arxiv.org/abs/2603.21489) | arXiv 2026 |
| [Agentic Autofix for Code Scanning Alerts in Public Preview](https://github.blog/changelog/2026-07-10-agentic-autofix-for-code-scanning-alerts-in-public-preview/) | 2026 |
| [Introducing the Agents Tab in Your Repository](https://github.blog/changelog/2026-01-26-introducing-the-agents-tab-in-your-repository/) | 2026 |
| [Trace Any Copilot Coding Agent Commit to Its Session Logs](https://github.blog/changelog/2026-03-20-trace-any-copilot-coding-agent-commit-to-its-session-logs/) | 2026 |
| [Coding Agents Don't Know When to Act](https://arxiv.org/abs/2605.07769) | arXiv 2026 |
| [SWE-Skills-Bench: Do Agent Skills Actually Help in Real-World Software Engineering?](https://arxiv.org/abs/2603.15401) | arXiv 2026 |
| [Coding Agents Are Guessing: Measuring Action-Boundary Violations in Underspecified DevOps Instructions](https://arxiv.org/abs/2607.02294) | arXiv 2026 |
| [Handoff Debt: The Rediscovery Cost When Coding Agents Take Over Interrupted Tasks](https://arxiv.org/abs/2606.02875) | arXiv 2026 |
| [CooperBench: Why Coding Agents Cannot Be Your Teammates Yet](https://arxiv.org/abs/2601.13295) | arXiv 2026 |
| [CODESKILL: Learning Self-Evolving Skills for Coding Agents](https://arxiv.org/abs/2605.25430) | arXiv 2026 |
| [Code as Agent Harness](https://arxiv.org/abs/2605.18747) | arXiv 2026 |
| [Introducing the Codex App](https://openai.com/index/introducing-the-codex-app/) | 2026 |
| [Running Codex Safely at OpenAI](https://openai.com/index/running-codex-safely/) | 2026 |
| [Introducing dots](https://openai.com/index/introducing-dots/) | 2026 |
| [Harness Engineering: Leveraging Codex in an Agent-First Company](https://openai.com/index/harness-engineering/) | 2026 |
| [An Open-Source Spec for Codex Orchestration: Symphony](https://openai.com/index/open-source-codex-orchestration-symphony/) | 2026 |
| [Revelio: Cost-Efficient Agentic Memory Safety Vulnerability Detection for Repository-Scale Codebases](https://arxiv.org/abs/2606.22263) | arXiv 2026 |
| [Breaking, Stale, or Missing? Benchmarking Coding Agents on Project-Level Test Evolution](https://arxiv.org/abs/2605.06125) | arXiv 2026 |
| [SWE-CI: Evaluating Agent Capabilities in Maintaining Codebases via Continuous Integration](https://arxiv.org/abs/2603.03823) | arXiv 2026 |
| [Copilot Memory Supports User Preferences for Pro, Pro+ Users](https://github.blog/changelog/2026-05-15-copilot-memory-supports-user-preferences-for-pro-pro-users/) | 2026 |
| EvoHarness-RL: Learning Self-Evolving Runtime Harness for Long-Horizon LLM Agents | arXiv 2026 |
| [Equipping Agents for the Real World with Agent Skills](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills) | 2025 |
| [Effective Context Engineering for AI Agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) | 2025 |
| [Effective Harnesses for Long-Running Agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) | 2025 |
| [GitHub Introduces Coding Agent for GitHub Copilot](https://github.com/newsroom/press-releases/coding-agent-for-github-copilot) | 2025 |
| [Introducing Codex](https://openai.com/index/introducing-codex/) | 2025 |
| [OpenHands: An Open Platform for AI Software Developers as Generalist Agents](https://openreview.net/forum?id=OJd3ayDDoF) | The Thirteenth International Conference on Learning Representations 2025 |
| [RFCAudit: AI Agent for Auditing Protocol Implementations Against RFC Specifications](https://doi.org/10.1109/ASE63991.2025.00105) | 2025 40th IEEE/ACM International Conference on Automated Software Engineering (ASE) |
| [SWE-EVO: Benchmarking Coding Agents in Long-Horizon Software Evolution Scenarios](https://arxiv.org/abs/2512.18470) | arXiv 2025 |
| [A new Tab model](https://cursor.com/blog/tab-update) | Cursor Blog/Produt 2025 |
| [Improving Cursor Tab with online RL](https://cursor.com/en-US/blog/tab-rl) | 2025 |
| [From Naptime to Big Sleep: Using Large Language Models To Catch Vulnerabilities In Real-World Code](https://googleprojectzero.blogspot.com/2024/10/from-naptime-to-big-sleep.html) | Project Zero blog 2024 |
| [AutoCodeRover: Autonomous Program Improvement](https://doi.org/10.1145/3650212.3680384) | Proceedings of the 33rd ACM SIGSOFT International Symposium on Software Testing and Analysis 2024 |
| [SWE-bench: Can Language Models Resolve Real-world GitHub Issues?](https://proceedings.iclr.cc/paper_files/paper/2024/hash/edac78c3e300629acfe6cbe9ca88fb84-Abstract-Conference.html) | The Twelfth International Conference on Learning Representations 2024 |
| [Repoformer: Selective Retrieval for Repository-Level Code Completion](https://proceedings.mlr.press/v235/wu24a.html) | Proceedings of the 41st International Conference on Machine Learning 2024 |
| [SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering](https://proceedings.neurips.cc/paper_files/paper/2024/hash/5a7c947568c1b1328ccc5230172e1e7c-Abstract-Conference.html) | Advances in Neural Information Processing Systems 2024 |
| [RepoCoder: Repository-Level Code Completion Through Iterative Retrieval and Generation](https://aclanthology.org/2023.emnlp-main.151/) | Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing |
| [Claude Code](https://www.anthropic.com/product/claude-code) |  |
| [Rolling Back Changes Made During a GitHub Copilot CLI Session](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/roll-back-changes) |  |
| [About GitHub Copilot Cloud Agent](https://docs.github.com/copilot/concepts/agents/coding-agent/about-coding-agent) |  |

### 🖥️ GUI Agents

| Paper | Venue |
| --- | --- |
| WebGym: Scaling Training Environments for Visual Web Agents with Realistic Tasks | 2026 |
| UI-KOBE: Knowledge-Oriented Behavior Exploration for Lightweight Graph-Guided GUI Agents | arXiv 2026 |
| CUA-Skill: Develop Skills for Computer Using Agent | arXiv 2026 |
| SkillDroid: Compile Once, Reuse Forever | arXiv 2026 |
| [Perceive Before Reasoning: A Pre-Reasoning Perception Framework for Efficient and Reliable Proactive Mobile Agents](https://arxiv.org/abs/2606.03236) | arXiv 2026 |
| [CADWorld: Computer-Use Benchmark for Long-Horizon Computer-Aided Design](https://arxiv.org/abs/2609.16251) | arXiv 2026 |
| [Screenshots or Tools? Eliciting Tool Use and Managing Multimodal Context in Hybrid GUI-MCP Computer-Use Agents](https://arxiv.org/abs/2608.03327) | arXiv 2026 |
| [WM-R1: Training GUI Agents to Reason and Leverage World Models with Reinforcement Learning](https://arxiv.org/abs/2608.27508) | arXiv 2026 |
| [EE-MCP: Self-Evolving MCP-GUI Agents via Automated Environment Generation and Experience Learning](https://arxiv.org/abs/2604.09815) | arXiv 2026 |
| [EvoCUA-1.5: Online Reinforcement Learning for Multi-turn Computer-Use Agents](https://arxiv.org/abs/2607.09773) | arXiv 2026 |
| [MobileExplorer: Accelerating On-Device Inference for Mobile GUI Agents via Online Exploration](https://arxiv.org/abs/2605.26546) | arXiv 2026 |
| VISUALSKILL: Multimodal Skills for Computer-Use Agents | arXiv 2026 |
| WeaveBench: A Long-Horizon, Real-World Benchmark for Computer-Use Agents with Hybrid Interfaces | arXiv 2026 |
| UI-Voyager: A Self-Evolving GUI Agent Learning via Failed Experience | arXiv 2026 |
| [OSExpert: Computer-Use Agents Learning Professional Skills via Exploration](https://arxiv.org/abs/2603.07978) | arXiv 2026 |
| [UI-Copilot: Advancing Long-Horizon GUI Automation via Tool-Integrated Policy Optimization](https://arxiv.org/abs/2604.13822) | arXiv 2026 |
| [Introducing dots](https://openai.com/index/introducing-dots/) | 2026 |
| [CUA-Universe: A Scalable and Dynamic Environment for Hybrid GUI+CLI Agents](https://arxiv.org/abs/2609.05374) | arXiv 2026 |
| [SEAgent: Self-Evolving Computer Use Agent with Autonomous Learning from Experience](https://proceedings.mlr.press/v306/sun26w.html) | Proceedings of the 43rd International Conference on Machine Learning 2026 |
| [DeskCraft: Benchmarking Desktop Agents on Professional Workflows and Human-in-the-Loop Collaboration](https://arxiv.org/abs/2606.03103) | arXiv 2026 |
| [OpenComputer: Verifiable Software Worlds for Computer-Use Agents](https://arxiv.org/abs/2605.19769) | arXiv 2026 |
| [OS-Marathon: Benchmarking Computer-Use Agents on Long-Horizon Repetitive Tasks](https://arxiv.org/abs/2601.20650) | arXiv 2026 |
| [Mobile-Agent-v3.5: Multi-platform Fundamental GUI Agents](https://arxiv.org/abs/2602.16855) | arXiv 2026 |
| [Act2Intention: A Benchmark For Developing Active Mobile Agents Through Inferring User Intention from GUI Actions](https://arxiv.org/abs/2608.14132) | arXiv 2026 |
| CLI-Anything: Towards Agent-Native Computer Use | arXiv 2026 |
| OSWorld2. 0: Benchmarking Computer Use Agents on Long-Horizon Real-World Tasks | arXiv 2026 |
| GUI vs. CLI: Execution Bottlenecks in Screen-Only and Skill-Mediated Computer-Use Agents | arXiv 2026 |
| [Hybrid Self-evolving Structured Memory for GUI Agents](https://arxiv.org/abs/2603.10291) | arXiv 2026 |
| [MagicOS 11](https://www.honor.com/cn/magic-os/) | 2026 |
| [Introducing Muse: The World's First Personal AI Agent Built for Everyone](https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/) | 2026 |
| [How to use Now nudge on Samsung Galaxy phone](https://www.samsung.com/us/support/answer/ANS10010355/) | 2026 |
| [Qwen-UI-Agent Technical Report: Toward Next-Generation Real-World Centric Foundation GUI Agents](https://arxiv.org/abs/2607.28227) | arXiv 2026 |
| [AppAgent-Pro: A Proactive GUI Agent System for Multidomain Information Integration and User Assistance](https://arxiv.org/abs/2508.18689) | CIKM 2025 |
| [9 ways AI makes Pixel 10 our most helpful phone yet](https://blog.google/products-and-platforms/devices/pixel/google-pixel-10-ai-features-updates/) | Google Blog 2025 |
| [AgentOccam: A Simple Yet Strong Baseline for LLM-Based Web Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/f2c6e459b95694a24ac69c469a4ee746-Paper-Conference.pdf) | International Conference on Learning Representations 2025 |
| [OSWorld-Human: Benchmarking the Efficiency of Computer-Use Agents](https://arxiv.org/abs/2506.16042) | arXiv 2025 |
| [Agent S2: A Compositional Generalist-Specialist Framework for Computer Use Agents](https://arxiv.org/abs/2504.00906) | arXiv 2025 |
| [WASP: Benchmarking Web Agent Security Against Prompt Injection Attacks](https://arxiv.org/abs/2504.18575) | arXiv 2025 |
| [GUI-Bee: Align GUI Action Grounding to Novel Environments via Autonomous Exploration](https://doi.org/10.18653/v1/2025.emnlp-main.1688) | Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing |
| [Go-Browse: Training Web Agents with Structured Exploration](https://arxiv.org/abs/2506.03533) | arXiv 2025 |
| [LEGOMem: Modular Procedural Memory for Multi-agent LLM Systems for Workflow Automation](https://arxiv.org/abs/2510.04851) | arXiv 2025 |
| [OSWorld-MCP: Benchmarking MCP Tool Invocation In Computer-Use Agents](https://arxiv.org/abs/2510.24563) | arXiv 2025 |
| [ComputerRL: Scaling End-to-End Online Reinforcement Learning for Computer Use Agents](https://arxiv.org/abs/2508.14040) | arXiv 2025 |
| [WEBSERV: A Browser-Server Environment for Efficient Training of Reinforcement Learning-based Web Agents at Scale](https://arxiv.org/abs/2510.16252) | arXiv 2025 |
| [WebRL: Training LLM Web Agents via Self-Evolving Online Curriculum Reinforcement Learning](https://openreview.net/forum?id=oVKEAFjEqv) | International Conference on Learning Representations 2025 |
| [MobileGUI-RL: Advancing Mobile GUI Agent through Reinforcement Learning in Online Environment](https://arxiv.org/abs/2507.05720) | arXiv 2025 |
| [OdysseyBench: Evaluating LLM Agents on Long-Horizon Complex Office Application Workflows](https://arxiv.org/abs/2508.09124) | arXiv 2025 |
| [WebAgent-R1: Training Web Agents via End-to-End Multi-Turn Reinforcement Learning](https://aclanthology.org/2025.emnlp-main.401/) | Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing |
| [MobileRL: Online Agentic Reinforcement Learning for Mobile GUI Agents](https://arxiv.org/abs/2509.18119) | arXiv 2025 |
| [MCPWorld: A Unified Benchmarking Testbed for API, GUI, and Hybrid Computer Use Agents](https://arxiv.org/abs/2506.07672) | arXiv 2025 |
| [Self-Guided Hierarchical Exploration for Generalist Foundation Model Web Agents](https://doi.org/10.52202/085713-0944) | Advances in Neural Information Processing Systems 2025 |
| [AgentCPM-GUI: Building Mobile-Use Agents with Reinforcement Fine-Tuning](https://arxiv.org/abs/2506.01391) | arXiv 2025 |
| [UFO2: The Desktop AgentOS](https://arxiv.org/abs/2504.14603) | arXiv 2025 |
| [SkillWeaver: Web Agents can Self-Improve by Discovering and Honing Skills](https://arxiv.org/abs/2504.07079) | arXiv 2025 |
| [Human-centered AI](https://www.microsoft.com/en-us/microsoft-copilot/blog/2025/10/23/human-centered-ai/) | 2025 |
| [Agent S: An Open Agentic Framework that Uses Computers Like a Human](https://arxiv.org/abs/2410.08164) | arXiv 2024 |
| Windows Agent Arena: Evaluating Multi-Modal OS Agents at Scale | Advances in Neural Information Processing Systems 2024 |
| [VisualWebArena: Evaluating Multimodal Agents on Realistic Visual Web Tasks](https://doi.org/10.18653/v1/2024.acl-long.50) | Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics 2024 |
| GUI Agents: A Survey | arXiv 2024 |
| OfficeBench: Benchmarking Language Agents across Multiple Applications for Office Automation | arXiv 2024 |
| OS-Copilot: Towards Generalist Computer Agents with Self-Improvement | arXiv 2024 |
| [OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments](https://doi.org/10.52202/079017-1650) | Advances in Neural Information Processing Systems 2024 |
| [WebPilot: A Versatile and Autonomous Multi-Agent System for Web Task Execution with Strategic Exploration](https://arxiv.org/abs/2408.15978) | arXiv 2024 |
| [Mind2Web: Towards a Generalist Agent for the Web](https://arxiv.org/abs/2306.06070) | arXiv 2023 |
| [Reinforcement Learning on Web Interfaces Using Workflow-Guided Exploration](https://openreview.net/forum?id=ryTp3f-0-) | International Conference on Learning Representations 2018 |

### 🔍 Information Access

| Paper | Venue |
| --- | --- |
| [A Self-Triggered Agentic Push Recommendation System](https://arxiv.org/abs/2608.01949) | arXiv 2026 |
| [OpenAI is retiring ChatGPT Pulse and replacing it with scheduled tasks, here is why](https://www.digit.in/news/general/openai-is-retiring-chatgpt-pulse-and-replacing-it-with-scheduled-tasks-here-is-why.html) | 2026 |
| [What Generative Search Engines Like and How to Optimize Web Content Cooperatively](https://openreview.net/forum?id=K8EinVWtUB) | The Fourteenth International Conference on Learning Representations (ICLR) 2026 |
| AgentWebBench: Benchmarking Multi-Agent Coordination in Agentic Web | Proceedings of the 43rd International Conference on Machine Learning (ICML) 2026 |
| [9 ways AI makes Pixel 10 our most helpful phone yet](https://blog.google/products-and-platforms/devices/pixel/google-pixel-10-ai-features-updates/) | Google Blog 2025 |
| [Introducing ChatGPT Pulse](https://openai.com/index/introducing-chatgpt-pulse/) | 2025 |
| A survey on llm-powered agents for recommender systems | arXiv 2025 |
| [Speculative RAG: Enhancing Retrieval Augmented Generation through Drafting](https://openreview.net/forum?id=xgQfWbV6Ey) | International Conference on Learning Representations (ICLR) 2025 |
| Deepresearcher: Scaling deep research via reinforcement learning in real-world environments | Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing |
| [The Effect of Proactive Cues on the Use of Decision Aids in Conversational Recommender Systems](https://doi.org/10.1145/3631700.3665186) | Adjunct Proceedings of the 32nd ACM Conference on User Modeling, Adaptation and Personalization 2024 |
| [PACIFIC: Towards Proactive Conversational Question Answering over Tabular and Textual Data in Finance](https://aclanthology.org/2022.emnlp-main.469/) | Proceedings of the 2022 Conference on Empirical Methods in Natural Language Processing |
| Follow me: Conversation planning for target-driven recommendation dialogue systems | arXiv 2022 |
| [Building and Evaluating Open-Domain Dialogue Corpora with Clarifying Questions](https://aclanthology.org/2021.emnlp-main.367/) | Proceedings of the 2021 Conference on Empirical Methods in Natural Language Processing |
| BERT4Rec: Sequential recommendation with bidirectional encoder representations from transformer | Proceedings of the 28th ACM international conference on information and knowledge management 2019 |
| Investigating proactive search support in conversations | Proceedings of the 2018 Designing Interactive Systems Conference |
| Self-attentive sequential recommendation | 2018 IEEE international conference on data mining (ICDM) |
| [Procrastination is the Thief of Time: Evaluating the Effectiveness of Proactive Search Systems](https://doi.org/10.1145/3209978.3210114) | The 41st International ACM SIGIR Conference on Research & Development in Information Retrieval 2018 |
| Session-based recommendations with recurrent neural networks | International Conference on Learning Representations 2016 |
| [Android @ I/O: The playground is open](https://blog.google/products-and-platforms/platforms/android/android-io-playground-is-open/) | 2012 |
| The filter bubble: What the Internet is hiding from you | penguin UK 2011 |
| Information filtering: Overview of issues, research and systems | User modeling and user-adapted interaction 2001 |
| User interactions with everyday applications as context for just-in-time information access | Proceedings of the 5th international conference on intelligent user interfaces 2000 |
| Just-in-time information retrieval agents | IBM Systems Journal 2000 |
| Remembrance Agent: A Continuously Running Automated Information Retrieval System | PAAM 1996 |
| [Letizia: An Agent That Assists Web Browsing](https://cdn.aaai.org/Symposia/Fall/1995/FS-95-03/FS95-03-016.pdf) | AAAI Fall Symposium Series, Technical Report FS-95-03 1995 |
| Grouplens: An open architecture for collaborative filtering of netnews | Proceedings of the 1994 ACM conference on Computer supported cooperative work |
| Information filtering and information retrieval: Two sides of the same coin? | Communications of the ACM 1992 |
| Using collaborative filtering to weave an information tapestry | Communications of the ACM 1992 |

### 🤖 Embodied & Robotics

| Paper | Venue |
| --- | --- |
| [ProAct: Harnessing Streaming Motion Generation and Agentic Reasoning for Real-Time Embodied Social Interaction](https://arxiv.org/abs/2602.14048) | arXiv 2026 |
| [Robots That Take Initiative: A Framework for Building and Evaluating Proactive Robots](https://arxiv.org/abs/2609.28910) | arXiv 2026 |
| [Personalized and Robust Proactive Robot Assistance with Uncertainty-Guided LLM Reasoning](https://arxiv.org/abs/2606.08458) | RO-MAN 2026 |
| [Assistance Without Interruption: A Benchmark and LLM-based Framework for Non-Intrusive Human–Robot Assistance](https://arxiv.org/abs/2605.01368) | IROS 2026 |
| [Safety Guardrails for LLM-Enabled Robots](https://arxiv.org/abs/2503.07885) | IEEE RA-L 2026 |
| [Gemini Robotics 2 brings whole body intelligence to robots](https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/) | Google DeepMind 2026 |
| [Introducing Gemini Robotics ER 2](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-robotics-er-2/) | Google DeepMind 2026 |
| [Helix 2.5: Zero-Shot 30-Home Generalization](https://www.figure.ai/news/helix-2-5-zero-shot-30-home-generalization) | Figure AI 2026 |
| [NVIDIA Isaac GR00T N1.7: Open Reasoning VLA Model for Humanoid Robots](https://huggingface.co/blog/nvidia/gr00t-n1-7) | NVIDIA 2026 |
| [NEO Home Robot](https://www.1x.tech/neo) | 1X Technologies 2026 |
| Cosmos 3: Omnimodal world models for physical ai | arXiv 2026 |
| [AGIBOT Open-Sources ‘AGIBOT WORLD 2026’ Dataset to Accelerate Embodied AI Development](https://www.agibot.com/article/231/detail/54.html) | 2026 |
| [Agility Robotics to Go Public Through \$2.5 Billion Merger with Churchill Capital Corp XI](https://www.sec.gov/Archives/edgar/data/0002074973/000121390026071290/ea029548401ex99-1.htm) | 2026 |
| [FA3D: a fault-aware monitoring framework for 3D printing using vision-language models (VLMs)](https://doi.org/10.1007/s10845-026-02935-y) | Journal of Intelligent Manufacturing 2026 |
| Neurosymbolic Embodied Agents | arXiv 2026 |
| Pedestrian Crossing Intent Prediction via Psychological Features and Transformer Fusion | arXiv 2026 |
| [MicroFactories and AI Software for Real-World Home Building](https://auar.io/) | 2026 |
| [Aurora Outlines 2030 Vision to Scale to 30,000 Driverless Trucks at Analyst and Investor Day](https://ir.aurora.tech/news-events/press-releases/detail/152) | 2026 |
| [Aurora Announces Second Quarter 2026 Results](https://ir.aurora.tech/news-events/press-releases/detail/147) | 2026 |
| [Backflip AI Converts 2D Engineering Drawings and Photos into 3D CAD, Continuing the Path to Digitize the World](https://finance.yahoo.com/technology/ai/articles/backflip-ai-converts-2d-engineering-130000356.html) | 2026 |
| CADSmith: Multi-Agent CAD Generation with Programmatic Geometric Validation | arXiv 2026 |
| NVIDIA OmniDreams: Real-Time Generative World Model for Closed-Loop Autonomous Vehicle Simulation | arXiv 2026 |
| [First Global Regulatory Framework For Autonomous Vehicles: Key Takeaways For Canada And The Auto Industry](https://www.bennettjones.com/Insights/Blogs/2026/08/First-Global-Regulatory-Framework-For-Autonomous-Vehicles) | 2026 |
| Motus2: A Self-Evolving General World Model for Dexterous Manipulation | arXiv 2026 |
| Humanoid Robot and Factory Worker Go Head-to-Head in Packing Challenge | 2026 |
| [BMW Group bringing Physical AI to Europe: Pilot project at BMW Group Plant Leipzig; First pilot deployment of humanoid robots successfully completed at BMW Group Plant Spartanburg, USA](https://www.press.bmwgroup.com/global/article/detail/T0455864EN/bmw-group-to-deploy-humanoid-robots-in-production-in-germany-for-the-first-time?language=en) | 2026 |
| Visual Proactivity: Enhancing Human-Robot Collaboration Through Intent Communication | arXiv 2026 |
| [CES 2026: Where's Ballie? Samsung's Rolling Robot Is Nowhere To Be Seen](https://www.channelnews.com.au/ces-2026-wheres-ballie-samsungs-rolling-robot-is-nowhere-to-be-seen/) | 2026 |
| RobotEQ-Video: A Video-Centric Benchmark for Social Proactive Intelligence with World-State Taxonomy | arXiv 2026 |
| Dexterous manipulation policies from rgb human videos via 3d hand-object trajectory reconstruction | arXiv 2026 |
| HazardArena: Evaluating Semantic Safety in Vision-Language-Action Models | arXiv 2026 |
| Patch-Based Spatial Authorship Attribution in Human-Robot Collaborative Paintings | arXiv 2026 |
| From Perception to Symbolic Task Planning: Vision-Language Guided Human-Robot Collaborative Structured Assembly | arXiv 2026 |
| RoboDojo: A Unified Sim-and-Real Benchmark for Comprehensive Evaluation of Generalist Robot Manipulation Policies | arXiv 2026 |
| EMBGuard: Constructing Hazard-Aware Guardrails for Safe Planning in Embodied Agents | arXiv 2026 |
| [Baidu's Apollo Go robotaxi hits 300,000 weekly rides as service expands to South Korea](https://cnevpost.com/2026/02/27/baidu-apollo-go-robotaxi-300000-weekly-rides-expands-to-south-korea/) | 2026 |
| Do Robots Need Body Language? Comparing Communication Modalities for Legible Motion Intent in Human-Shared Spaces | arXiv 2026 |
| [Global Humanoid Robot Shipments Soar Nearly 300% YoY in H1 2026, Driven by Commercial Deployments](https://counterpointresearch.com/en/insights/global-humanoid-robot-shipments-soar-nearly-300-percent-yoy-in-h1-2026) | 2026 |
| [Boston Dynamics opens Metaplant Application Center to train Atlas humanoids](https://www.therobotreport.com/boston-dynamics-opens-metaplant-application-center-train-atlas-humanoid-robots/) | 2026 |
| [FedEx and Dexterity Expand Physical AI Deployment for Autonomous Trailer Loading at Hagerstown Hub](https://dexterity.ai/blog/fedex-hagerstown-physical-ai-deployment) | 2026 |
| Toward Certified Functional Safety for Industrial Humanoid Robots: The Fail-Passive Gap and a Feasibility Study | arXiv 2026 |
| [How Dirac and AWS Are Transforming Process Design: BuildOS Delivers AI-Driven Manufacturing at Software Speed](https://www.webull.com/news/15508677710177280) | 2026 |
| MUSE: Benchmarking Manufacturable, Functional, and Assemblable Text-to-CAD Generation | arXiv 2026 |
| [Tesla starts Robotaxi rides without safety monitor in Austin: what you need to know](https://electrek.co/2026/01/22/tesla-starts-robotaxi-rides-without-safety-monitor-in-austin-what-you-need-to-know/) | 2026 |
| [Tesla announces Robotaxi has driven 1 million unsupervised miles](https://electrek.co/2026/09/03/tesla-announces-1-million-unsupervised-miles-driven-by-robotaxi/) | 2026 |
| [The robots we saw at CES 2026: The lovable, the creepy and the utterly confusing](https://www.engadget.com/ai/the-robots-we-saw-at-ces-2026-the-lovable-the-creepy-and-the-utterly-confusing-153537930.html) | 2026 |
| LLM-ADAM: A Generalizable LLM Agent Framework for Pre-Print Anomaly Detection in Additive Manufacturing | arXiv 2026 |
| [Digital Omnibus on AI: What Changed in the EU AI Act](https://www.euaiact.com/digital-omnibus-ai) | 2026 |
| Drive-HWM: Hierarchical World Models for Dynamic-Latent Guided Autonomous Driving | arXiv 2026 |
| RobotEQ: Towards Social Proactive Intelligence in Embodied Agents | arXiv 2026 |
| InstructMesh: Selective Refinement of Generative 3D Models for Fabrication | arXiv 2026 |
| [F.03 Arrives at BMW](https://www.figure.ai/news/f-03-at-bmw) | 2026 |
| [Helix 02 Bedroom Tidy](https://www.figure.ai/news/helix-02-bedroom-tidy) | 2026 |
| [Introducing Index: Building The World's Largest and Most Diverse Physical Dataset](https://www.figure.ai/news/introducing-index) | 2026 |
| [IDC data shows Agibot led global humanoid robot shipments in H1 2026](https://roboticsandautomationnews.com/2026/10/02/idc-data-shows-agibot-led-global-humanoid-robot-shipments-in-h1-2026/105463/) | 2026 |
| Temporal Difference Calibration in Sequential Tasks: Application to Vision-Language-Action Models | arXiv 2026 |
| [Chinese Post Office Deploys Humanoid Robots to Sort Mail](https://futurism.com/robots-and-machines/chinese-post-office-humanoid-robots-mail) | 2026 |
| DreamDojo: A Generalist Robot World Model from Large-Scale Human Videos | arXiv 2026 |
| EBench: Elemental Diagnosis of Generalist Mobile Manipulation Policies | arXiv 2026 |
| FabDreamer: Exploring the Image-to-Physical Workflow Through AI-Assisted Layered Fabrication | arXiv 2026 |
| Learning Latent Action World Models In The Wild | arXiv 2026 |
| [WeRide Posts 230 Million Yuan in Q2 Revenue, Overseas Revenue Surges 164% YoY](https://autonews.gasgoo.com/articles/news/2088109006169329664) | 2026 |
| [GEN-1: A Generalist Foundation Model for Embodied AI](https://generalistai.com/blog/apr-02-2026-GEN-1) | 2026 |
| [GENE-26.5: Advancing Robotic Manipulation to Human Level](https://www.genesis.ai/blog/gene-26-5-advancing-robotic-manipulation-to-human-level) | 2026 |
| Vinci2: Providing Proactive Assistance in Continuous Egocentric Videos | arXiv 2026 |
| Unified 4D World Action Modeling from Video Priors with Asynchronous Denoising | arXiv 2026 |
| Test-Time Scaling for CAD Generation via Verifier-Free Consensus Selection | arXiv 2026 |
| MobiWave: Dispatch-Oriented Graph Wavelets and Drift-Guided Selective Optimization for Autonomous Fleet Rebalancing | arXiv 2026 |
| PACT: Proactive Asking for Continual Task Assistance in Human-Robot Collaboration | arXiv 2026 |
| [1X to deliver humanoid household robot Neo to US customers in 2026](https://www.heise.de/en/news/1X-to-deliver-humanoid-household-robot-Neo-to-US-customers-in-2026-11287205.html) | 2026 |
| Uncertainty-Aware Intention Prediction for Human-to-Robot Assembly Teleoperation | arXiv 2026 |
| When Should Robots Intervene? Balancing Engagement and Intrusiveness in Human-Robot Interaction | arXiv 2026 |
| EgoAsk: Egocentric Teaching of Personalized Object Knowledge for Household Robots | arXiv 2026 |
| IterCAD: An Iterative Multimodal Agent for Visually-Grounded CAD Generation and Editing | arXiv 2026 |
| MindVLA-U1: VLA Beats VA with Unified Streaming Architecture for Autonomous Driving | arXiv 2026 |
| [Sunday Robotics Raises \$165M to Transition from Demos to Real-World Deployment](https://www.humanoidsdaily.com/news/sunday-robotics-raises-165m-to-transition-from-demos-to-real-world-deployment) | 2026 |
| [NHTSA Takes Major Steps in Establishing an Autonomous Vehicle Framework](https://www.hunton.com/insights/legal/nhtsa-takes-major-steps-in-establishing-an-autonomous-vehicle-framework) | 2026 |
| [Five Million Robots now Operate in Factories Globally](https://ifr.org/ifr-press-releases/five-million-robots-now-operate-in-factories-globally) | 2026 |
| π0.7: a Steerable Generalist Robotic Foundation Model with Emergent Capabilities | arXiv 2026 |
| [ISO 25785-1 explained and what it means for humanoid robot safety](https://www.i-scoop.eu/iso-25785-1-explained-and-what-it-means-for-humanoid-robot-safety/) | 2026 |
| [ISO/CD 25785-1: Robotics — Safety requirements for dynamically stable industrial mobile robots (legged, wheeled, or other forms of locomotion) — Part 1: Robots](https://www.iso.org/standard/91469.html) | 2026 |
| PDDL-ART: Autonomous Symbolic Abstraction From Demonstration For Long-Horizon Robotic Manipulation Using Vision-Language Models | arXiv 2026 |
| Containing Behavioral Cascades from Manipulated Claims in LLM-Powered Multi-Robot Systems | arXiv 2026 |
| A Deployable Architecture for Robot-Mediated Tasks (DART): Evaluation in Socially Assistive Robot-Guided Cognitive Behavioral Therapy Exercises | arXiv 2026 |
| Collision Snapshot Guided Time-Reversed Safety-Critical Scenario Generation | arXiv 2026 |
| Modular Safety Guardrails Are Necessary for Foundation-Model-Enabled Robots in the Real World | arXiv 2026 |
| MolmoSpaces: A Large-Scale Open Ecosystem for Robot Navigation and Manipulation | arXiv 2026 |
| [Figure AI says its humanoid robots ran 24 hours straight sorting packages](https://foxnews.com/tech/humanoid-robots-work-nonstop-package-test) | 2026 |
| [Boston Dynamics' next-gen humanoid robot will have Google DeepMind DNA](https://techcrunch.com/2026/01/05/boston-dynamicss-next-gen-humanoid-robot-will-have-google-deepmind-dna/) | 2026 |
| [UBTech's full-size humanoid robot revenue jumps 1,445% in H1 2026](https://kr-asia.com/ubtechs-full-size-humanoid-robot-revenue-jumps-1445-in-h1-2026) | 2026 |
| [Domestic robots and the right to privacy: the case of NEO by 1X Technologies](https://lawandtech.ie/domestic-robots-and-the-right-to-privacy-the-case-of-neo-by-1x-technologies/) | 2026 |
| Causal World Modeling for Robot Control | arXiv 2026 |
| " It's like a pet... but my pet doesn't collect data about me": Multi-person Households' Privacy Design Preferences for Household Robots | arXiv 2026 |
| Lehome: A simulation environment for deformable object manipulation in household scenarios | arXiv 2026 |
| Roboclaw: An agentic framework for scalable long-horizon robotic tasks | arXiv 2026 |
| Safe Task Planning with Long-Term Graph Memory for Embodied Agents | arXiv 2026 |
| Vision-Language-Action Safety: Threats, Challenges, Evaluations, and Mechanisms | arXiv 2026 |
| EgoWild2Dex: Learning Dexterous Robotic Manipulation from In-the-Wild Human Experience | arXiv 2026 |
| Event-Driven Proactive Assistive Manipulation with Grounded Vision-Language Planning | arXiv 2026 |
| Physical Agentic AI: An Architecture for Orchestrating a Robot Crew with LLMs | arXiv 2026 |
| Prompt-to-Product: Generative Assembly via Bimanual Manipulation | IEEE Robotics & Automation Magazine 2026 |
| ASPIRE: Agentic /Skills Discovery for Robotics | arXiv 2026 |
| Being-H0.5: Scaling Human-Centric Robot Learning for Cross-Embodiment Generalization | arXiv 2026 |
| [Machina Labs Raises \$124 Million to Scale Manufacturing Infrastructure for Defense and Advanced Mobility](https://machinalabs.ai/resources/machina-labs-raises-124-million-to-scale-manufacturing-infrastructure-for-defense-and-advanced-mobility) | 2026 |
| [Intelligent, Software-Defined Factories for Complex Metal Structures](https://machinalabs.ai/) | 2026 |
| [Google and Mercedes-Benz back humanoid robot Apollo in new global funding drive](https://interestingengineering.com/ai-robotics/us-startup-raises-funds-to-deploy-apollo) | 2026 |
| [Matic Robot Vacuum and Mop: The Privacy-First Floor Cleaning Robot](https://maticrobots.com/) | 2026 |
| [Humanoid Robots In The Home](https://www.mondaq.com/unitedstates/privacy-protection/1819630/humanoid-robots-in-the-home) | 2026 |
| Longitudinal Robot Learning from Demonstration with Care Providers in a Home Environment | arXiv 2026 |
| RoboCasa365: A Large-Scale Simulation Framework for Training and Benchmarking Generalist Robots | arXiv 2026 |
| Self-Evolving AI for Humanoids: Mechanisms, Safety, and Evaluation of Post-Deployment Self-Improvement | arXiv 2026 |
| [Automated Driving Systems](https://www.nhtsa.gov/vehicle-manufacturers/automated-driving-systems) | 2026 |
| Learning Composable Skills by Discovering Spatial and Temporal Structure with Foundation Models | 2026 |
| [Figure AI streamed humanoid robots sorting packages for 8 hours straight — and not everyone is convinced it was fully real](https://www.techradar.com/ai-platforms-assistants/figure-ai-streamed-humanoid-robots-sorting-packages-for-8-hours-straight-and-not-everyone-is-convinced-it-was-fully-real) | 2026 |
| [Pretrained to Imagine, Fine-Tuned to Act: The Rise of World-Action Models](https://developer.nvidia.com/blog/pretrained-to-imagine-fine-tuned-to-act-the-rise-of-world-action-models/) | 2026 |
| [Order NEO](https://www.1x.tech/order) | 2026 |
| [1X Launches World Model Lab to Scale Humanoid Intelligence](https://www.1x.tech/discover/1x-world-model-lab) | 2026 |
| AI Agentic Selective Laser Sintering Process Optimization | arXiv 2026 |
| Emergent neural automaton policies: Learning symbolic structure from visuomotor trajectories | arXiv 2026 |
| When Should a Failing Robot Ask? Initiating Corrective Human-Robot Dialogue from Audited Sensor Evidence | arXiv 2026 |
| [Baidu's Apollo Go Goes Live on Uber in Dubai, Offering a New Way for Users to Hail Fully Driverless Rides](https://www.prnewswire.com/news-releases/baidus-apollo-go-goes-live-on-uber-in-dubai-offering-a-new-way-for-users-to-hail-fully-driverless-rides-302856106.html) | 2026 |
| Egoverse: An egocentric human dataset for robot learning from around the world | arXiv 2026 |
| CoBrush: A Hierarchical Planning Framework for Human-Robot Co-Painting | arXiv 2026 |
| [How Machina Labs is Reshaping Defense Manufacturing with AI-Driven 7-Axis Robotics](https://www.mobilityengineeringtech.com/component/content/article/55129-how-machina-labs-is-reshaping-defense-manufacturing-with-ai-driven-7-axis-robotics) | 2026 |
| [SAG: Global Humanoid Robot Shipments Surged 272% YoY to 19.1K Units in 1H 2026; AGIBOT Overtook Unitree for No. 1 Position](https://smartanalyticsglobal.com/global-humanoid-robot-shipments-2026-agibot-unitree/) | 2026 |
| Visual Sculpting: Visually-Aligned Planning Representations for Long-Horizon Robot Clay Sculpting | arXiv 2026 |
| [Segway Navimow i110: Smart, Wire-Free Robotic Lawn Mower](https://navimow.com/products/navimow-i110) | 2026 |
| ArtiCAD: Articulated CAD Assembly Design via Multi-Agent Code Generation | arXiv 2026 |
| [Introducing S1: In-Context Learning for Robotics](https://www.skild.ai/blogs/s1) | 2026 |
| [2026 BEHAVIOR Challenge](https://behavior.stanford.edu/challenge/) | 2026 |
| [Memo: The Helpful Home Robot](https://www.sunday.ai/) | 2026 |
| ScaffoldM3C: A Multimodal Sequential Monte Carlo Framework for Generative Stable Construction Planning | arXiv 2026 |
| Proactive Service Agents: A Unified Decision Framework, Methods, and Evaluation | arXiv 2026 |
| ShieldVLA: Feasibility-Aware Safety Alignment for Vision-Language-Action Models | arXiv 2026 |
| [Divergent unveils large-format metal 3D printer with twelve 2kW lasers](https://www.tctmagazine.com/divergent-unveils-large-format-metal-3d-printer-with-twelve-2kw-lasers/) | 2026 |
| GigaBrain-0.7: Scaling Embodied Foundation Models to Emergent Capabilities with a Three-System Architecture | arXiv 2026 |
| [Robotaxi operators will face fines for blocking first responders](https://techcrunch.com/2026/10/01/robotaxi-operators-will-face-fines-for-blocking-first-responders/) | 2026 |
| [Waymo accelerates robotaxi expansion with launches in Denver, San Diego, and Tampa](https://techcrunch.com/2026/09/01/waymo-accelerates-robotaxi-expansion-with-launches-in-denver-san-diego-and-tampa/) | 2026 |
| [Waymo is scaling fast: Here's what the fleet data shows](https://techcrunch.com/2026/09/24/waymo-is-scaling-fast-heres-what-the-fleet-data-shows/) | 2026 |
| [Waymo issues recall to deal with a flooding problem](https://techcrunch.com/2026/05/12/waymo-issues-recall-to-deal-with-a-flooding-problem/) | 2026 |
| [Waymo robotaxis are headed to Munich](https://techcrunch.com/2026/08/25/waymo-robotaxis-are-headed-to-munich/) | 2026 |
| [Zoox clears final federal hurdle to launch paid robotaxi service](https://techcrunch.com/2026/07/30/zoox-clears-final-federal-hurdle-to-launch-paid-robotaxi-service/) | 2026 |
| [Zoox to start charging for robotaxi rides in Las Vegas](https://techcrunch.com/2026/08/05/zoox-to-start-charging-for-robotaxi-rides-in-las-vegas/) | 2026 |
| [Pony.ai Proves Robotaxi Profit, Then Deploys 2,000 Robotaxis Across Europe](https://www.techtimes.com/articles/324445/20260814/ponyai-proves-robotaxi-profit-then-deploys-2000-robotaxis-across-europe.htm) | 2026 |
| [Q2 2026 Update](https://www.sec.gov/Archives/edgar/data/0001318605/000162828026049213/exhibit991.htm) | 2026 |
| Rethinking External Communication of Autonomous Vehicles: Is the Field Converging, Diverging, or Stalling? | arXiv 2026 |
| [Wayve and Uber Launch First-Ever Autonomous Rides in the UK](https://investor.uber.com/news-events/news/press-release-details/2026/Wayve-and-Uber-Launch-First-Ever-Autonomous-Rides-in-the-UK-2026-VoFQI1WbQi/default.aspx) | 2026 |
| When May I Help You? On The Effect of Proactivity on Group Human-Robot Collaboration | arXiv 2026 |
| Agentic Artifact Creation: Systems, Evaluation, Principles, and Opportunities | arXiv 2026 |
| EmbodiedSkills: A Unified Framework for Orchestrating, Training, and Deploying VLA Agents | arXiv 2026 |
| GigaBrain-0.5M\*: a VLA That Learns From World Model-Based Reinforcement Learning | arXiv 2026 |
| OpenWAM: An Open, Modular Exploration Towards Systematic World-Action Model Pretraining | arXiv 2026 |
| Qwen-vla: Unifying vision-language-action modeling across tasks, environments, and robot embodiments | arXiv 2026 |
| SV-WAM: An Efficient Surround-View World-Action Model for End-to-End Autonomous Driving | arXiv 2026 |
| Text2CAD-Bench: A Benchmark for LLM-based Text-to-Parametric CAD Generation | arXiv 2026 |
| [Building Waymo's Risk and Insurance Foundation in Europe with Allianz Partners](https://waymo.com/blog/2026/09/allianzpartnership) | 2026 |
| [From the road — September 24, 2026: Across Waymo's 270 million autonomous miles](https://waymo.com/blog/shorts/safetydata-september26/) | 2026 |
| [Singapore, Next Stop: Bringing Scalable, Safe Autonomous Mobility to the Lion City](https://waymo.com/blog/2026/09/waymo-in-singapore) | 2026 |
| [The Waymo World Model: A New Frontier For Autonomous Driving Simulation](https://waymo.com/blog/2026/02/the-waymo-world-model-a-new-frontier-for-autonomous-driving-simulation/) | 2026 |
| [GAIA-4: Multimodal World Models Powering Closed-Loop Simulation for Safe and Scalable Autonomy](https://wayve.ai/thinking/gaia-4/) | 2026 |
| [Wayve, Uber and Nissan Announce Collaboration on Robotaxis](https://wayve.ai/press/wayve-nissan-uber-robotaxi-collaboration/) | 2026 |
| [Wayve Secures \$1.5B to Deploy Its Global Autonomy Platform](https://wayve.ai/press/series-d/) | 2026 |
| [Volvo, Waabi Launch Autonomous Freight Runs From Dallas To Houston](https://www.wbap.com/2026/10/05/volvo-waabi-launch-autonomous-freight-runs-from-dallas-to-houston/) | 2026 |
| [Isaac 1](https://www.weaverobotics.com/isaac-1) | 2026 |
| BrickSim: A Physics-Based Simulator for Manipulating Interlocking Brick Assemblies | arXiv 2026 |
| [Agility's Digit 5 humanoid has new legs, batteries, and safety upgrades](https://www.therobotreport.com/agilitys-digit-5-humanoid-has-new-legs-batteries-safety-upgrades/) | 2026 |
| ENPIRE: Agentic Robot Policy Self-Improvement in the Real World | arXiv 2026 |
| Designing Robots for Families: In-Situ Prototyping for Contextual Reminders on Family Routines | arXiv 2026 |
| Learning to Assist: Collaborative VLAs for Implicit Human-Robot Collaboration | arXiv 2026 |
| Seeing Less Is Not Seeing Safely: Privacy Leakage from Task-Scoped Robot Perception Exports | arXiv 2026 |
| Safe reinforcement learning with online filtering for fatigue-predictive human-robot task planning and allocation in production | arXiv 2026 |
| WCog-VLA: A Dual-Level World-Cognitive Vision-Language-Action Model for End-to-End Autonomous Driving | arXiv 2026 |
| [MAVE: An Augmented Multi-agent LLM System for Interactive Design and Robotic Fabrication](https://doi.org/10.1145/3800645.3813008) | Proceedings of the 2026 ACM Designing Interactive Systems Conference (DIS '26) |
| Stable and Efficient Real-World Online VLA Post-Training via Asynchronous Replay-Anchored Policy Improvement | arXiv 2026 |
| [Yarbo Snow Blower: Autonomous Snow Clearing Robot](https://www.yarbo.com/products/yarbo-snow-blower) | 2026 |
| World action models are zero-shot policies | arXiv 2026 |
| ROBOSHACKLES: A Safety Dataset for Human-Injury Prevention in Embodied Foundation Models | arXiv 2026 |
| Autonomous Integration and Improvement of Robotic Assembly using Skill Graph Representations | arXiv 2026 |
| [From Tool to Partner: Expressive Behaviors as the Bridge to Human-Robot Creative Collaboration](https://doi.org/10.1145/3772318.3790270) | Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems (CHI '26) |
| Wall-OSS-0.5 Technical Report | arXiv 2026 |
| Agent Manufacturing: Foundation-Model Agents as First-Class Industrial Entities | arXiv 2026 |
| RedVLA: Physical Red Teaming for Vision-Language-Action Models | arXiv 2026 |
| NormAct: Benchmarking Embodied Agents' Proactive Compliance with Unspoken Social Norms | arXiv 2026 |
| Egoscale: Scaling dexterous manipulation with diverse egocentric human data | arXiv 2026 |
| Can Vision-Language-Action Models Learn from Real-World Data Continually without Forgetting? | arXiv 2026 |
| A Factory-Floor Deployment Case Study of VLA Pipelines for Industrial Packaging Task: Workflow, Failures, and Lessons | arXiv 2026 |
| When Robots Do the Chores: A Benchmark and Agent for Long-Horizon Household Task Execution | arXiv 2026 |
| ProAct: A Benchmark and Multimodal Framework for Structure-Aware Proactive Response | arXiv 2026 |
| [Announcing Zookeeper, Our Conversational CAD Agent](https://zoo.dev/blog/announcing-zookeeper) | 2026 |
| [Zoox Expands Robotaxi Service and Unveils New Product Features](https://zoox.com/journal/zoox-service-updates-and-expansions) | 2026 |
| [π\*0.6: a VLA That Learns From Experience](https://arxiv.org/abs/2511.14759) | arXiv 2025 |
| [GR00T N1: An Open Foundation Model for Generalist Humanoid Robots](https://arxiv.org/abs/2503.14734) | arXiv 2025 |
| [Redwood AI](https://www.1x.tech/discover/redwood-ai) | 1X Technologies 2025 |
| Proactive robot task sequencing through real-time hand motion prediction in human–robot collaboration | Image and Vision Computing 2025 |
| [Digit Moves Over 100,000 Totes in Commercial Deployment](https://www.agilityrobotics.com/content/digit-moves-over-100k-totes) | 2025 |
| [Introducing Blue Jay and Project Eluna, Amazon's latest robotics and AI technology for its operations](https://www.aboutamazon.com/news/operations/new-robots-amazon-fulfillment-agentic-ai) | 2025 |
| RoboArena: Distributed Real-World Evaluation of Generalist Robot Policies | arXiv 2025 |
| [Egocentric-100K](https://huggingface.co/datasets/builddotai/Egocentric-100K) | 2025 |
| Web2grasp: Learning functional grasps from web images of hand-object interactions | arXiv 2025 |
| Artists' Views on Robotics Involvement in Painting Productions | arXiv 2025 |
| LIBERO-Plus: In-depth Robustness Analysis of Vision-Language-Action Models | arXiv 2025 |
| [China approves first L3 autonomous passenger cars for limited public deployment](https://autonews.gasgoo.com/articles/news/china-approves-first-l3-autonomous-passenger-cars-for-limited-public-deployment-70039881) | 2025 |
| [GEN-0: Embodied Foundation Models That Scale with Physical Interaction](https://generalistai.com/blog/nov-04-2025-GEN-0) | 2025 |
| Blox-net: Generative design-for-robot-assembly using vlm supervision, physics simulation, and a robot with reset | 2025 IEEE International Conference on Robotics and Automation (ICRA) |
| NovaPlan: An Efficient Plan of Renting Ground Stations for Emerging LEO Satellite Networks | IEEE INFOCOM 2025-IEEE Conference on Computer Communications |
| RobotFleet: An Open-Source Framework for Centralized Multi-Robot Task Planning | arXiv 2025 |
| Egodex: Learning dexterous manipulation from large-scale egocentric video | arXiv 2025 |
| RoboMIND 2.0: A Multimodal, Bimanual Mobile Manipulation Dataset for Generalizable Embodied Intelligence | arXiv 2025 |
| Vision-Language-Action Models for Autonomous Driving: Past, Present, and Future | arXiv 2025 |
| APEX-MR: Multi-robot asynchronous planning and execution for cooperative assembly | arXiv 2025 |
| π0.5: a Vision-Language-Action Model with Open-World Generalization | arXiv 2025 |
| Prompt2Craft: Generating Functional Craft Assemblies with LLMs | arXiv 2025 |
| Speech to Reality: On-Demand Production using Natural Language, 3D Generative AI, and Discrete Robotic Assembly | Proceedings of the ACM Symposium on Computational Fabrication 2025 |
| Text to Robotic Assembly of Multi Component Objects using 3D Generative AI and Vision Language Models | arXiv 2025 |
| Task adaptation of Vision-Language-Action model: 1st Place Solution for the 2025 BEHAVIOR Challenge | arXiv 2025 |
| Rdt-1b: a diffusion foundation model for bimanual manipulation | International Conference on Learning Representations 2025 |
| Isaac lab: A gpu-accelerated simulation framework for multi-modal robot learning | arXiv 2025 |
| [Waymo will recall software after its self-driving cars passed stopped school buses](https://www.npr.org/2025/12/06/nx-s1-5635614/waymo-school-buses-recall) | 2025 |
| [Pony AI Inc. Among the First to Receive Permit for Fully Driverless Commercial Robotaxi Services in Shanghai's Pudong New Area](https://ir.pony.ai/news-releases/news-release-details/pony-ai-inc-among-first-receive-permit-fully-driverless) | 2025 |
| [PONY AI Inc. Realized Gen-7 Robotaxi city-wide UE Breakeven; Set to Surpass 2025 Fleet Target and Expand to 3,000+ Vehicles by End of Next Year](https://www.globenewswire.com/news-release/2025/11/25/3194073/0/en/PONY-AI-Inc-Realized-Gen-7-Robotaxi-city-wide-UE-Breakeven-Set-to-Surpass-2025-Fleet-Target-and-Expand-to-3-000-Vehicles-by-End-of-Next-Year.html) | 2025 |
| Communicating robots’ intent through visual cues enhances human anticipatory behavior in human–dual robot collaboration | Robotics and Computer-Integrated Manufacturing 2025 |
| Generating physically stable and buildable brick structures from text | Proceedings of the IEEE/CVF International Conference on Computer Vision 2025 |
| [Saros Z70 - Grasp the Future with Intelligence](https://us.roborock.com/pages/roborock-saros-z70) | 2025 |
| [VIDEO: Sunday launches Memo personal robot that ‘actually learns your home’](https://www.robotics247.com/article/video_sunday_launches_memo_personal_robot_that_actually_learns_your_home) | 2025 |
| [UPS Purchases 400 Robots to Unload Trucks in Automation Push](https://www.ttnews.com/article/ups-robots-unload-trucks) | 2025 |
| Gemini robotics: Bringing ai into the physical world | arXiv 2025 |
| [Veo: A state-of-the-art generative video model by Google DeepMind](https://deepmind.google/models/veo/) | 2025 |
| Alpamayo-R1: Bridging Reasoning and Action Prediction for Generalizable Autonomous Driving in the Long Tail | arXiv 2025 |
| From Prompts to Printable Models: Support-Effective 3D Generation via Offset Direct Preference Optimization | arXiv 2025 |
| RoboCOIN: An Open-Sourced Bimanual Robotic Data Collection for Integrated Manipulation | arXiv 2025 |
| Dexumi: Using human hand as the universal manipulation interface for dexterous manipulation | arXiv 2025 |
| " Stack It Up!": 3D Stable Structure Generation from 2D Hand-drawn Sketch | arXiv 2025 |
| RoboChallenge: Large-scale Real-robot Evaluation of Embodied Policies | arXiv 2025 |
| Guiding long-horizon task and motion planning with vision language models | 2025 IEEE International Conference on Robotics and Automation (ICRA) |
| Mujoco playground | arXiv 2025 |
| RLinf-VLA: A Unified and Efficient Framework for Reinforcement Learning of Vision-Language-Action Models | arXiv 2025 |
| Hunyuan3d 2.0: Scaling diffusion models for high resolution textured 3d assets generation | arXiv 2025 |
| WMPO: World Model-based Policy Optimization for Vision-Language-Action Models | arXiv 2025 |
| [Zoox Robotaxi Launches in Las Vegas](https://zoox.com/journal/las-vegas) | 2025 |
| [CoFRIDA: Self-Supervised Fine-Tuning for Human-Robot Co-Painting](https://arxiv.org/abs/2402.13442) | ICRA 2024 |
| [Scaling Waymo One Safely Across Four Cities This Year](https://waymo.com/blog/2024/03/scaling-waymo-one-safely-across-four-cities-this-year/) | Waymo 2024 |
| [AssistantX: An LLM-Powered Proactive Assistant in Collaborative Human-Populated Environments](https://api.semanticscholar.org/CorpusID:272911445) | 2025 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS) 2024 |
| Genesis: A universal and generative physics engine for robotics and beyond | URL https://github. com/Genesis-Embodied-AI/Genesis 2024 |
| π0: A Vision-Language-Action Flow Model for General Robot Control | arXiv 2024 |
| [Humanoid Robots for BMW Group Plant Spartanburg](https://www.bmwgroup.com/en/news/general/2024/humanoid-robots.html) | 2024 |
| Universal manipulation interface: In-the-wild robot teaching without in-the-wild robots | arXiv 2024 |
| Socially adaptive cognitive architecture for human-robot collaboration in industrial settings | Frontiers in Robotics and AI 2024 |
| [Real-Time Adaptive Industrial Robots: Improving Safety And Comfort In Human-Robot Collaboration](https://arxiv.org/abs/2409.09429) | arXiv 2024 |
| Droid: A large-scale in-the-wild robot manipulation dataset | arXiv 2024 |
| Openvla: An open-source vision-language-action model | arXiv 2024 |
| Anatomy of a robotaxi crash: Lessons from the cruise pedestrian dragging mishap | International Conference on Computer Safety, Reliability, and Security 2024 |
| Decomposition-based hierarchical task allocation and planning for multi-robots under hierarchical temporal logic specifications | IEEE Robotics and Automation Letters 2024 |
| [Video generation models as world simulators](https://openai.com/index/video-generation-models-as-world-simulators/) | 2024 |
| Octo: An open-source generalist robot policy | arXiv 2024 |
| [Seven Waymo robotaxis blocked traffic to a San Francisco freeway on-ramp](https://techcrunch.com/2024/04/17/seven-waymo-robotaxis-block-traffic-to-san-francisco-freeway-on-ramp/) | 2024 |
| Triposr: Fast 3d object reconstruction from a single image | arXiv 2024 |
| Gello: A general, low-cost, and intuitive teleoperation framework for robot manipulators | 2024 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS) |
| SafeAgentBench: A Benchmark for Safe Task Planning of Embodied LLM Agents | arXiv 2024 |
| Ropotter: Toward robotic pottery and deformable object manipulation with structural priors | 2024 IEEE-RAS 23rd International Conference on Humanoid Robots (Humanoids) |
| Robustifying Long-term Human-Robot Collaboration through a Multimodal and Hierarchical Framework | arXiv 2024 |
| Robust and context-aware real-time collaborative robot handling via dynamic gesture commands | IEEE Robotics and Automation Letters 2023 |
| Palm-e: An embodied multimodal language model | arXiv 2023 |
| Behavior-1k: A benchmark for embodied ai with 1,000 everyday activities and realistic simulation | Conference on Robot Learning 2023 |
| Proactive human-robot co-assembly: Leveraging human intention prediction and robust safe control | 2023 IEEE Conference on Control Technology and Applications (CCTA) |
| Learning reusable manipulation strategies | Conference on Robot Learning 2023 |
| Robogen: Towards unleashing infinite data for automated robot learning via generative simulation | arXiv 2023 |
| Learning fine-grained bimanual manipulation with low-cost hardware | arXiv 2023 |
| Do as i can, not as i say: Grounding language in robotic affordances | arXiv 2022 |
| [Advanced Applications of Industrial Robotics: New Trends and Possibilities](https://www.mdpi.com/2076-3417/12/1/135) | Applied Sciences 2022 |
| Task-agnostic adaptation for safe human-robot handover | IFAC-PapersOnLine 2022 |
| High-resolution image synthesis with latent diffusion models | Proceedings of the IEEE/CVF conference on computer vision and pattern recognition 2022 |
| Frida: A collaborative robot painter with a differentiable, real2sim2real planning environment | arXiv 2022 |
| Large scale interactive motion forecasting for autonomous driving: The waymo open motion dataset | Proceedings of the IEEE/CVF international conference on computer vision 2021 |
| Robotsculptor: Artist-directed robotic sculpting of clay | Proceedings of the 5th annual ACM symposium on computational fabrication 2020 |
| Scalability in perception for autonomous driving: Waymo open dataset | Proceedings of the IEEE/CVF conference on computer vision and pattern recognition 2020 |
| Evaluating fluency in human–robot collaboration | IEEE Transactions on Human-Machine Systems 2019 |
| Unpaired image-to-image translation using cycle-consistent adversarial networks | Proceedings of the IEEE international conference on computer vision 2017 |
| Anticipatory robot control for efficient human-robot collaboration | 2016 11th ACM/IEEE international conference on human-robot interaction (HRI) |
| Autonomous floor-cleaning robot | Google Patents 2005 |
| [Handbook of Industrial Robotics](https://books.google.com/books?id=K271EAAAQBAJ) | Wiley 1999 |

### 🔒 Security

| Paper | Venue |
| --- | --- |
| [Incident Report: Unsanctioned Agent Behaviour During Cyber Testing](https://www.aisi.gov.uk/blog/incident-report-unsanctioned-agent-behaviour-during-cyber-testing) | 2026 |
| [Claude Security](https://claude.com/product/claude-security) | 2026 |
| [How we contain Claude across products](https://www.anthropic.com/engineering/how-we-contain-claude) | 2026 |
| [Project Glasswing](https://www.anthropic.com/glasswing) | 2026 |
| [Trustworthy Agents in Practice](https://www.anthropic.com/research/trustworthy-agents) | 2026 |
| [QVAD: A Question-Centric Agentic Framework for Efficient and Training-Free Video Anomaly Detection](https://arxiv.org/abs/2604.03040) | arXiv 2026 |
| [Cyber Defense Benchmark: Agentic Threat Hunting Evaluation for LLMs in SecOps](https://arxiv.org/abs/2604.19533) | arXiv 2026 |
| [AgenticVAU: Multi-Agent Explore-Verify Reasoning for Video Anomaly Understanding](https://arxiv.org/abs/2608.03779) | arXiv 2026 |
| [Open Security Benchmark: Towards Autonomous Enterprise Cyber Defense](https://arxiv.org/abs/2607.27288) | arXiv 2026 |
| [Agentic AI for Security Operations](https://cloud.google.com/security/resources/agentic-soc) | 2026 |
| [Securing Agents With Tracked Capabilities](https://www.yichenxu.me/files/publications/securing-agents/paper.pdf) | Proceedings of the ACM Conference on AI and Agentic Systems 2026 |
| [Security, privacy, and agentic AI in a regulatory view: From definitions and distinctions to provisions and reflections](https://arxiv.org/abs/2603.18914) | arXiv 2026 |
| [ATLANTIS: AI-driven Threat Localization, Analysis, and Triage Intelligence System](https://arxiv.org/abs/2509.14589) | arXiv 2025 |
| [Transforming cybersecurity with agentic AI to combat emerging cyber threats](https://www.sciencedirect.com/science/article/pii/S0308596125000734) | Telecommunications Policy 2025 |
| [Design Patterns for Securing LLM Agents against Prompt Injections](https://arxiv.org/abs/2506.08837) | arXiv 2025 |
| [StruQ: Defending Against Prompt Injection with Structured Queries](https://www.usenix.org/conference/usenixsecurity25/presentation/chen-sizhe) | 34th USENIX Security Symposium (USENIX Security 25) 2025 |
| [AI Cyber Challenge Marks Pivotal Inflection Point for Cyber Defense](https://www.darpa.mil/news/2025/aixcc-results) | 2025 |
| [Defeating Prompt Injections by Design](https://arxiv.org/abs/2503.18813) | arXiv 2025 |
| [AI Agents That Matter](https://arxiv.org/abs/2407.01502) | Transactions on Machine Learning Research 2025 |
| [Incident Response Recommendations and Considerations for Cybersecurity Risk Management: A CSF 2.0 Community Profile](https://csrc.nist.gov/pubs/sp/800/61/r3/final) | 2025 |
| [Introducing CodeMender: An AI Agent for Code Security](https://deepmind.google/blog/introducing-codemender-an-ai-agent-for-code-security/) | 2025 |
| [Death by a Thousand Slops](https://daniel.haxx.se/blog/2025/07/14/death-by-a-thousand-slops/) | 2025 |
| [The Evolution of Agentic AI in Cybersecurity: From Single LLM Reasoners to Multi-Agent Systems and Autonomous Pipelines](https://arxiv.org/abs/2512.06659) | arXiv 2025 |
| [CyberGym: Evaluating AI Agents' Cybersecurity Capabilities with Real-World Vulnerabilities at Scale](https://arxiv.org/abs/2506.02548) | arXiv 2025 |
| [Cybench: A Framework for Evaluating Cybersecurity Capabilities and Risks of Language Models](https://arxiv.org/abs/2408.08926) | The Thirteenth International Conference on Learning Representations 2025 |
| [Holmes-VAU: Towards Long-term Video Anomaly Understanding at Any Granularity](https://openaccess.thecvf.com/content/CVPR2025/html/Zhang_Holmes-VAU_Towards_Long-term_Video_Anomaly_Understanding_at_Any_Granularity_CVPR_2025_paper.html) | Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2025 |
| [CVE-Bench: A Benchmark for AI Agents' Ability to Exploit Real-World Web Application Vulnerabilities](https://arxiv.org/abs/2503.17332) | Proceedings of the 42nd International Conference on Machine Learning 2025 |
| [From Naptime to Big Sleep: Using Large Language Models To Catch Vulnerabilities In Real-World Code](https://googleprojectzero.blogspot.com/2024/10/from-naptime-to-big-sleep.html) | Project Zero blog 2024 |
| [Visibility into AI Agents](https://doi.org/10.1145/3630106.3658948) | Proceedings of the 2024 ACM Conference on Fairness, Accountability, and Transparency |
| [How Low Can You Go? An Analysis of 2023 Time-to-Exploit Trends](https://cloud.google.com/blog/topics/threat-intelligence/time-to-exploit-trends-2023) | 2024 |
| [External Technical Root Cause Analysis — Channel File 291](https://www.crowdstrike.com/wp-content/uploads/2024/08/Channel-File-291-Incident-Root-Cause-Analysis-08.06.2024.pdf) | 2024 |
| [AgentDojo: A Dynamic Environment to Evaluate Prompt Injection Attacks and Defenses for LLM Agents](https://proceedings.neurips.cc/paper_files/paper/2024/hash/97091a5177d8dc64b1da8bf3e1f6fb54-Abstract-Datasets_and_Benchmarks_Track.html) | Advances in Neural Information Processing Systems 2024 |
| [PentestGPT: Evaluating and Harnessing Large Language Models for Automated Penetration Testing](https://www.usenix.org/conference/usenixsecurity24/presentation/deng) | 33rd USENIX Security Symposium (USENIX Security 24) 2024 |
| [CybORG++: An Enhanced Gym for the Development of Autonomous Cyber Agents](https://arxiv.org/abs/2410.16324) | arXiv 2024 |
| [Formalizing and Benchmarking Prompt Injection Attacks and Defenses](https://arxiv.org/abs/2310.12815) | 33rd USENIX Security Symposium (USENIX Security 24) 2024 |
| [An Interview Study on Third-Party Cyber Threat Hunting Processes in the U.S. Department of Homeland Security](https://www.usenix.org/conference/usenixsecurity24/presentation/maxam) | 33rd USENIX Security Symposium (USENIX Security 24) 2024 |
| [NYU CTF Bench: A Scalable Open-Source Benchmark Dataset for Evaluating LLMs in Offensive Security](https://arxiv.org/abs/2406.05590) | Advances in Neural Information Processing Systems (Datasets and Benchmarks Track) 2024 |
| [Autonomous Threat Hunting: A Future Paradigm for AI-Driven Threat Intelligence](https://arxiv.org/abs/2401.00286) | arXiv 2024 |
| [The I in LLM Stands for Intelligence](https://daniel.haxx.se/blog/2024/01/02/the-i-in-llm-stands-for-intelligence/) | 2024 |
| [SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering](https://proceedings.neurips.cc/paper_files/paper/2024/hash/5a7c947568c1b1328ccc5230172e1e7c-Abstract-Conference.html) | Advances in Neural Information Processing Systems 2024 |
| [Helping Our Customers through the CrowdStrike Outage](https://blogs.microsoft.com/blog/2024/07/20/helping-our-customers-through-the-crowdstrike-outage/) | 2024 |
| [InjecAgent: Benchmarking Indirect Prompt Injections in Tool-Integrated Large Language Model Agents](https://aclanthology.org/2024.findings-acl.624/) | Findings of the Association for Computational Linguistics: ACL 2024 |
| [Not What You've Signed Up For: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection](https://doi.org/10.1145/3605764.3623985) | Proceedings of the 16th ACM Workshop on Artificial Intelligence and Security 2023 |
| [Examining Zero-Shot Vulnerability Repair with Large Language Models](https://doi.org/10.1109/SP46215.2023.10179420) | 2023 IEEE Symposium on Security and Privacy (SP) |
| [Practices for Governing Agentic AI Systems](https://cdn.openai.com/papers/practices-for-governing-agentic-ai-systems.pdf) | 2023 |
| [99% False Positives: A Qualitative Study of SOC Analysts' Perspectives on Security Alarms](https://www.usenix.org/conference/usenixsecurity22/presentation/alahmadi) | 31st USENIX Security Symposium (USENIX Security 22) 2022 |
| [Ignore Previous Prompt: Attack Techniques For Language Models](https://arxiv.org/abs/2211.09527) | arXiv 2022 |
| [2022 0-day In-the-Wild Exploitation…so far](https://googleprojectzero.blogspot.com/2022/06/2022-0-day-in-wild-exploitationso-far.html) | 2022 |
| [Exploit Prediction Scoring System (EPSS)](https://doi.org/10.1145/3436242) | Digital Threats: Research and Practice 2021 |
| [CybORG: A Gym for the Development of Autonomous Cyber Agents](https://arxiv.org/abs/2108.09118) | arXiv 2021 |
| [Improving Vulnerability Remediation through Better Exploit Prediction](https://doi.org/10.1093/cybsec/tyaa015) | Journal of Cybersecurity 2020 |
| [Stay Ahead of Poachers: Illegal Wildlife Poaching Prediction and Patrol Planning Under Uncertainty with Field Test Evaluations (Short Version)](http://dx.doi.org/10.1109/icde48307.2020.00198) | 2020 IEEE 36th International Conference on Data Engineering (ICDE) |
| [NoDoze: Combatting Threat Alert Fatigue with Automated Provenance Triage](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_03B-1-3_UlHassan_paper.pdf) | Network and Distributed System Security Symposium (NDSS) 2019 |
| [A Multi-Vocal Review of Security Orchestration](https://doi.org/10.1145/3305268) | ACM Computing Surveys 2019 |
| [Vulnerable Open Source Dependencies: Counting Those That Matter](https://arxiv.org/abs/1808.09753) | Proceedings of the 12th ACM/IEEE International Symposium on Empirical Software Engineering and Measurement 2018 |
| [VUDDY: A Scalable Approach for Vulnerable Code Clone Discovery](https://doi.org/10.1109/SP.2017.62) | 2017 IEEE Symposium on Security and Privacy (SP) |
| Deploying PAWS: Field Optimization of the Protection Assistant for Wildlife Security | IAAI 2016 |
| [AI²: Training a Big Data Machine to Defend](https://doi.org/10.1109/BigDataSecurity-HPSC-IDS.2016.79) | 2016 IEEE 2nd International Conference on Big Data Security on Cloud (BigDataSecurity), IEEE International Conference on High Performance and Smart Computing (HPSC), and IEEE International Conference on Intelligent Data and Security (IDS) |
| [Before We Knew It: An Empirical Study of Zero-Day Attacks in the Real World](https://doi.org/10.1145/2382196.2382284) | Proceedings of the 2012 ACM Conference on Computer and Communications Security |
| [ReDeBug: Finding Unpatched Code Clones in Entire OS Distributions](https://doi.org/10.1109/SP.2012.13) | 2012 IEEE Symposium on Security and Privacy |
| [Guide for Security-Focused Configuration Management of Information Systems](https://doi.org/10.6028/NIST.SP.800-128) | 2011 |
| [The Base-Rate Fallacy and the Difficulty of Intrusion Detection](https://doi.org/10.1145/357830.357849) | ACM Transactions on Information and System Security 2000 |

### 🔬 AutoResearch

| Paper | Venue |
| --- | --- |
| From Prompts to Protocols: An AI Agent for Laboratory Automation | arXiv 2026 |
| [Claude Science, an AI workbench for scientists](https://www.anthropic.com/news/claude-science-ai-workbench) | 2026 |
| [Claude Discovers a Novel Enzyme System with CRISPR-Like Repeats](https://www.anthropic.com/news/claude-discovers-novel-enzyme-system) | 2026 |
| [AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation](https://arxiv.org/abs/2605.28655) | arXiv 2026 |
| [Autonomous biomedical research with an artificial intelligence agent](https://www.science.org/doi/abs/10.1126/science.adz4351) | Science 2026 |
| [How Do Agents Fail on AutoResearch: End-to-End Diagnostic Evaluation on 100 Real-World Frontier Research Tasks](https://arxiv.org/abs/2608.14905) | arXiv 2026 |
| [A Severe Misalignment of AI in Mathematics](https://mathandai.org/) | 2026 |
| A multi-agent system for automating scientific discovery | Nature 2026 |
| [Reward Hacking Challenges Oversight of Autonomous Research Agents](https://arxiv.org/abs/2609.28614) | arXiv 2026 |
| [Can AI agents conduct open-ended AI research? Early evidence from two case studies](https://arxiv.org/abs/2607.27191) | arXiv 2026 |
| [HypoBench: Towards Systematic and Principled Benchmarking for Hypothesis Generation](https://arxiv.org/abs/2504.11524) | arXiv 2026 |
| [The Last Human-Written Paper: Agent-Native Research Artifacts](https://arxiv.org/abs/2604.24658) | arXiv 2026 |
| [ScientistTwo: Pioneering the Human Knowledge Frontier with Autonomous AI](https://arxiv.org/abs/2609.19644) | arXiv 2026 |
| [One Run Is Not an Idea: The Implementation Lottery in Automated Research](https://arxiv.org/abs/2607.26587) | arXiv 2026 |
| [Scores Alone Do Not Prove Discovery: The Discovery Certification Protocol for Auditing AI Research Agents](https://arxiv.org/abs/2609.09219) | arXiv 2026 |
| [On the Navier–Stokes Millennium Prize Problem](https://openai.com/index/navier-stokes-solution/) | 2026 |
| [Ten advances in mathematics and theoretical computer science](https://openai.com/index/ten-advances-in-mathematics/) | 2026 |
| [Towards Scientific Intelligence: A Survey of LLM-based Scientific Agents](https://arxiv.org/abs/2503.24047) | arXiv 2026 |
| [Accelerating Scientific Research with Gemini in the Real-World](https://arxiv.org/abs/2608.26701) | arXiv 2026 |
| [Is this Idea Novel? An Automated Benchmark for Judgment of Research Ideas](https://arxiv.org/abs/2603.10303) | arXiv 2026 |
| [ScientistOne: Towards Human-Level Autonomous Research via Chain-of-Evidence](https://arxiv.org/abs/2605.26340) | arXiv 2026 |
| [On the Limits of LLM-as-Judge for Scientific Novelty Assessment](https://arxiv.org/abs/2606.12071) | arXiv 2026 |
| [Critique of Agent Model](https://arxiv.org/abs/2606.23991) | arXiv 2026 |
| [PrimeScientist: Strategic Allocation of Research Effort in Autonomous Research](https://arxiv.org/abs/2609.17846) | arXiv 2026 |
| [Agora: Git as Shared Memory for Collective AutoResearch](https://arxiv.org/abs/2609.18094) | arXiv 2026 |
| [The AI Scientist-v2: Workshop-Level Automated Scientific Discovery via Agentic Tree Search](https://arxiv.org/abs/2504.08066) | arXiv 2025 |
| [Towards an AI co-scientist](https://arxiv.org/abs/2502.18774) | arXiv 2025 |
| Researchagent: Iterative research idea generation over scientific literature with large language models | Proceedings of the 2025 Conference of the Nations of the Americas Chapter of the Association for Computational Linguistics: Human Language Technologies (Volume 1: Long Papers) |
| [Agentic AI for Scientific Discovery: A Survey of Progress, Challenges, and Future Directions](https://arxiv.org/abs/2503.08979) | arXiv 2025 |
| Evaluating large language model agents for automation of atomic force microscopy | Nature Communications 2025 |
| [AI Idea Bench 2025: AI Research Idea Generation Benchmark](https://arxiv.org/abs/2504.14191) | arXiv 2025 |
| [Agent Laboratory: Using LLM Agents as Research Assistants](https://arxiv.org/abs/2501.04227) | arXiv 2025 |
| [AgentRxiv: Towards Collaborative Autonomous Research](https://arxiv.org/abs/2503.18102) | arXiv 2025 |
| Can llms generate novel research ideas? a large-scale human study with 100+ nlp researchers | International Conference on Learning Representations 2025 |
| The Virtual Lab of AI agents designs new SARS-CoV-2 nanobodies | Nature 2025 |
| [LAB-Bench: Measuring Capabilities of Language Models for Biology Research](https://arxiv.org/abs/2407.10362) | arXiv 2024 |
| Challenges in high-throughput inorganic materials prediction and autonomous synthesis | PRX Energy 2024 |
| Augmenting large language models with chemistry tools | Nature machine intelligence 2024 |
| [Language agents achieve superhuman synthesis of scientific knowledge](https://arxiv.org/abs/2409.13740) | arXiv 2024 |
| Self-driving laboratories for chemistry and materials science | Chemical Reviews 2024 |
| The rise of self-driving labs in chemical and materials sciences | Nature Synthesis 2023 |
| Support academic access to automated cloud labs to improve reproducibility | PLoS biology 2023 |
| [PaperQA: Retrieval-Augmented Generative Agent for Scientific Research](https://arxiv.org/abs/2312.07559) | arXiv 2023 |
| An autonomous laboratory for the accelerated synthesis of inorganic materials | Nature 2023 |
| Autonomous chemical experiments: Challenges and perspectives on establishing a self-driving lab | Accounts of Chemical Research 2022 |
| On-the-fly closed-loop materials discovery via Bayesian active learning | Nature communications 2020 |
| Jupyter Notebooks-a publishing format for reproducible computational workflows | Positioning and power in academic publishing: players, agents and agendas: proceedings of the 20th International Conference on Electronic Publishing 2016 |
| Enhancing reproducibility for computational methods | Science 2016 |
| The FAIR Guiding Principles for scientific data management and stewardship | Scientific data 2016 |
| Taking the human out of the loop: A review of Bayesian optimization | Proceedings of the IEEE 2015 |
| Cheaper faster drug development validated by the repositioning of drugs against neglected tropical diseases | Journal of the Royal society Interface 2015 |
| Why linked data is not enough for scientists | Future Generation Computer Systems 2013 |
| Ten simple rules for reproducible computational research | PLoS computational biology 2013 |
| The automation of science | Science 2009 |

### 🏠 Smart Home

| Paper | Venue |
| --- | --- |
| [“Having Lunch Now”: Understanding How Users Engage with a Proactive Agent for Daily Planning and Self-Reflection](http://dx.doi.org/10.1145/3772318.3790957) | Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems |
| FARM: Field-Aware Resolution Model for Intelligent Trigger-Action Automation | arXiv 2026 |
| Leveraging LLMs for Efficient and Personalized Smart Home Automation | arXiv 2026 |
| [DESAMO: A Device for Elder-Friendly Smart Homes Powered by Embedded LLM with Audio Modality](https://arxiv.org/abs/2508.18918) | UIST 2025 Adjunct |
| [IoT-LLM: a framework for enhancing Large Language Model reasoning from real-world sensor data](https://arxiv.org/abs/2410.02429) | arXiv 2025 |
| Generating HomeAssistant Automations Using an LLM-based Chatbot | arXiv 2025 |
| Redefining Elderly Care with Agentic AI: Challenges and Opportunities | arXiv 2025 |
| SimuHome: A Temporal- and Environment-Aware Benchmark for Smart Home LLM Agents | arXiv 2025 |
| [ProAgent: Harnessing On-Demand Sensory Contexts for Proactive LLM Agent Systems](https://arxiv.org/abs/2512.06721) | arXiv 2025 |
| [Sasha: Creative Goal-Oriented Reasoning in Smart Homes with Large Language Models](https://arxiv.org/abs/2305.09802) | IMWUT 2024 |
| A Survey on Multimodal Wearable Sensor-based Human Action Recognition | arXiv 2024 |
| [Better to Ask Than Assume: Proactive Voice Assistants' Communication Strategies That Respect User Agency in a Smart Home Environment](https://doi.org/10.1145/3613904.3642193) | Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems (CHI) |
| [SAGE: Smart home Agent with Grounded Execution](https://arxiv.org/abs/2311.00772) | arXiv 2024 |
| [Towards Human-centered Proactive Conversational Agents](https://doi.org/10.1145/3626772.3657843) | Proceedings of the 47th International ACM SIGIR Conference on Research and Development in Information Retrieval, SIGIR 2024, Washington DC, USA, July 14-18, 2024 |
| [A survey on large language model based autonomous agents](http://dx.doi.org/10.1007/s11704-024-40231-1) | Frontiers of Computer Science 2024 |
| [Penetrative AI: Making LLMs Comprehend the Physical World](https://doi.org/10.18653/v1/2024.findings-acl.437) | Findings of the Association for Computational Linguistics: ACL 2024 |
| LLMind: Orchestrating AI and IoT with LLM for Complex Task Execution | arXiv 2023 |
| [The Science behind Hunches: Deep Device Embeddings](https://www.amazon.science/blog/the-science-behind-hunches-deep-device-embeddings) | Amazon Science, Amazon Science 2022 |
| [Vision-based Human Fall Detection Systems Using Deep Learning: A Review](https://doi.org/10.1016/j.compbiomed.2022.105626) | Computers in Biology and Medicine 2022 |
| Proactive Robot Assistance via Spatio-Temporal Object Modeling | arXiv 2022 |
| [Detecting Anomalies in Daily Activity Routines of Older Persons in Single Resident Smart Homes: Proof-of-Concept Study](https://doi.org/10.2196/28260) | JMIR Aging 2022 |
| [Understanding User Perceptions of Proactive Smart Speakers](https://doi.org/10.1145/3494965) | Proc. ACM Interact. Mob. Wearable Ubiquitous Technol. 2022 |
| [What Could Possibly Go Wrong When Interacting with Proactive Smart Speakers? A Case Study Using an ESM Application](https://doi.org/10.1145/3491102.3517432) | Proceedings of the 2022 CHI Conference on Human Factors in Computing Systems (CHI) |
| [Understanding Circumstances for Desirable Proactive Behaviour of Voice Assistants: The Proactivity Dilemma](https://doi.org/10.1145/3543829.3543834) | Proceedings of the 4th Conference on Conversational User Interfaces (CUI) 2022 |
| [A Survey of Human Activity Recognition in Smart Homes Based on IoT Sensors Algorithms: Taxonomies, Challenges, and Opportunities with Deep Learning](https://doi.org/10.3390/s21186037) | Sensors 2021 |
| [Deep Learning for Sensor-based Human Activity Recognition: Overview, Challenges, and Opportunities](https://doi.org/10.1145/3447744) | ACM Computing Surveys 2021 |
| [May I Interrupt? Diverging Opinions on Proactive Smart Speakers](https://doi.org/10.1145/3469595.3469629) | Proceedings of the 3rd Conference on Conversational User Interfaces (CUI) 2021 |
| [Privacy-Preserving Learning of Human Activity Predictors in Smart Environments](https://arxiv.org/abs/2101.06564) | arXiv 2021 |
| [Trace2TAP: Synthesizing Trigger-Action Programs from Traces of Behavior](https://doi.org/10.1145/3411838) | IMWUT 2020 |
| [Deep Reinforcement Learning for Smart Home Energy Management](https://doi.org/10.1109/JIOT.2019.2957289) | IEEE Internet of Things Journal 2020 |
| More than Smart Speakers: Security and Privacy Perceptions of Smart Home Personal Assistants | Fifteenth Symposium on Usable Privacy and Security (SOUPS) 2019 |
| [How Users Interpret Bugs in Trigger-Action Programming](https://doi.org/10.1145/3290605.3300782) | Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems (CHI) |
| [Empowering End Users in Debugging Trigger-Action Rules](https://doi.org/10.1145/3290605.3300618) | Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems (CHI) |
| [RecRules: Recommending IF-THEN Rules for End-User Development](https://doi.org/10.1145/3344211) | ACM Trans. Intell. Syst. Technol. 2019 |
| [Privacy Attitudes of Smart Speaker Users](https://doi.org/10.2478/popets-2019-0068) | Proceedings on Privacy Enhancing Technologies (PoPETs) 2019 |
| [AutoTap: Synthesizing and Repairing Trigger-Action Programs Using LTL Properties](https://doi.org/10.1109/ICSE.2019.00043) | Proceedings of the 41st International Conference on Software Engineering (ICSE) 2019 |
| [Alexa, Are You Listening? Privacy Perceptions, Concerns and Privacy-seeking Behaviors with Smart Speakers](https://doi.org/10.1145/3274371) | Proc. ACM Hum.-Comput. Interact. 2018 |
| [User Perceptions of Smart Home IoT Privacy](https://doi.org/10.1145/3274469) | Proceedings of the ACM on Human-Computer Interaction (CSCW) 2018 |
| [An Empirical Characterization of IFTTT: Ecosystem, Usage, and Performance](https://doi.org/10.1145/3131365.3131369) | Proceedings of the 2017 Internet Measurement Conference (IMC) |
| [DeepSense: A Unified Deep Learning Framework for Time-Series Mobile Sensing Data Processing](https://doi.org/10.1145/3038912.3052577) | Proceedings of the 26th International Conference on World Wide Web (WWW) 2017 |
| [Deep Convolutional and LSTM Recurrent Neural Networks for Multimodal Wearable Activity Recognition](https://doi.org/10.3390/s16010115) | Sensors 2016 |
| [Supporting Mental Model Accuracy in Trigger-Action Programming](https://doi.org/10.1145/2750858.2805830) | Proceedings of the 2015 ACM International Joint Conference on Pervasive and Ubiquitous Computing (UbiComp) |
| [Neural NILM: Deep Neural Networks Applied to Energy Disaggregation](https://doi.org/10.1145/2821650.2821672) | Proceedings of the 2nd ACM International Conference on Embedded Systems for Energy-Efficient Built Environments (BuildSys) 2015 |
| PreHeat: Controlling Home Heating Using Occupancy Prediction | UbiComp 2011 |
| [Accurate Activity Recognition in a Home Setting](https://doi.org/10.1145/1409635.1409637) | Proceedings of the 10th International Conference on Ubiquitous Computing (UbiComp) 2008 |

### 🏙️ Smart City

| Paper | Venue |
| --- | --- |
| AI Agents as Policymakers in Simulated Epidemics | arXiv 2026 |
| [Towards Urban General Intelligence: A Review and Outlook of Urban Foundation Models](https://arxiv.org/abs/2402.01749) | arXiv 2026 |
| [LLMLight: Large Language Models as Traffic Signal Control Agents](https://arxiv.org/abs/2312.16044) | KDD 2025 |
| [EpiPlanAgent: Agentic Automated Epidemic Response Planning](https://arxiv.org/abs/2512.10313) | arXiv 2025 |
| CitySim: Modeling Urban Behaviors and City Dynamics with Large-Scale LLM-Driven Agent Simulation | arXiv 2025 |
| Empowering LLM Agents with Geospatial Awareness: Toward Grounded Reasoning for Wildfire Response | arXiv 2025 |
| Large Language Model Powered Intelligent Urban Agents: Concepts, Capabilities, and Applications | arXiv 2025 |
| Characterizing AI Agents for Alignment and Governance | arXiv 2025 |
| Disaster Management in the Era of Agentic AI Systems: A Vision for Collective Human-Machine Intelligence for Augmented Resilience | arXiv 2025 |
| GATSim: Urban Mobility Simulation with Generative Agents | arXiv 2025 |
| [Oversight Structures for Agentic AI in Public-Sector Organizations](https://doi.org/10.18653/v1/2025.realm-1.21) | Proceedings of the 1st Workshop for Research on Agent Language Models (REALM) 2025 |
| Global prediction of extreme floods in ungauged watersheds | Nature 2024 |
| [UrbanGPT: Spatio-Temporal Large Language Models](https://doi.org/10.1145/3637528.3671578) | Proceedings of the 30th ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD) 2024 |
| TransGPT: Multi-modal Generative Pre-trained Transformer for Transportation | arXiv 2024 |
| Leveraging Generative AI for Urban Digital Twins: A Scoping Review on the Autonomous Generation of Urban Data, Scenarios, Designs, and 3D City Models for Smart City Advancement | arXiv 2024 |
| Deep Learning for Wildfire Risk Prediction: Integrating Remote Sensing and Environmental Data | arXiv 2024 |
| OpenCity: A Scalable Platform to Simulate Urban Activities with Massive LLM Agents | arXiv 2024 |
| CrisisSense-LLM: Instruction Fine-Tuned Large Language Model for Multi-label Social Media Text Classification in Disaster Informatics | arXiv 2024 |
| [TrafficGPT: Viewing, processing and interacting with traffic foundation models](https://www.sciencedirect.com/science/article/pii/S0967070X24000726) | Transport Policy 2024 |
| [Harms from Increasingly Agentic Algorithmic Systems](https://doi.org/10.1145/3593013.3594033) | Proceedings of the 2023 ACM Conference on Fairness, Accountability, and Transparency (FAccT) |
| Multi-Agent Reinforcement Learning for Fast-Timescale Demand Response of Residential Loads | arXiv 2023 |
| Epidemic Modeling with Generative Agents | arXiv 2023 |
| Urban Generative Intelligence (UGI): A Foundational Platform for Agents in Embodied City Environment | arXiv 2023 |
| [Multi-agent deep reinforcement learning approach for EV charging scheduling in a smart grid](https://www.sciencedirect.com/science/article/pii/S030626192201368X) | Applied Energy 2022 |
| Distributed Energy Management and Demand Response in Smart Grids: A Multi-Agent Deep Reinforcement Learning Framework | arXiv 2022 |
| [Graph Neural Network Reinforcement Learning for Autonomous Mobility-on-Demand Systems](https://doi.org/10.1109/CDC45484.2021.9683135) | 2021 60th IEEE Conference on Decision and Control (CDC) |
| Spatial-Temporal Sequential Hypergraph Network for Crime Prediction with Dynamic Multiplex Relation Learning | Proceedings of the 30th International Joint Conference on Artificial Intelligence (IJCAI) 2021 |
| [Toward a Thousand Lights: Decentralized Deep Reinforcement Learning for Large-Scale Traffic Signal Control](https://doi.org/10.1609/aaai.v34i04.5744) | Proceedings of the AAAI Conference on Artificial Intelligence 2020 |
| [Spatiotemporal Deep Learning Model for Citywide Air Pollution Interpolation and Prediction](https://doi.org/10.1109/BigComp48618.2020.00-99) | 2020 IEEE International Conference on Big Data and Smart Computing (BigComp) |
| [MetaLight: Value-Based Meta-Reinforcement Learning for Traffic Signal Control](https://doi.org/10.1609/aaai.v34i01.5467) | Proceedings of the AAAI Conference on Artificial Intelligence 2020 |
| CityLearn: Standardizing Research in Multi-Agent Reinforcement Learning for Demand Response and Urban Energy Management | BuildSys 2019 |
| [DeepPool: Distributed Model-free Algorithm for Ride-sharing Using Deep Reinforcement Learning](https://doi.org/10.1109/TITS.2019.2931830) | IEEE Transactions on Intelligent Transportation Systems 2019 |
| [CoRide: Joint Order Dispatching and Fleet Management for Multi-Scale Ride-Hailing Platforms](https://doi.org/10.1145/3357384.3357978) | Proceedings of the 28th ACM International Conference on Information and Knowledge Management (CIKM) 2019 |
| [Efficient Ridesharing Order Dispatching with Mean Field Multi-Agent Reinforcement Learning](https://doi.org/10.1145/3308558.3313433) | The World Wide Web Conference (WWW) 2019 |
| [Reinforcement Learning for Demand Response: A Review of Algorithms and Modeling Techniques](https://doi.org/10.1016/j.apenergy.2018.11.002) | Applied Energy 2019 |
| [CoLight: Learning Network-level Cooperation for Traffic Signal Control](https://doi.org/10.1145/3357384.3357902) | Proceedings of the 28th ACM International Conference on Information and Knowledge Management 2019 |
| [PressLight: Learning Max Pressure Control to Coordinate Traffic Signals in Arterial Network](https://doi.org/10.1145/3292500.3330949) | Proceedings of the 25th ACM SIGKDD International Conference on Knowledge Discovery & Data Mining (KDD) 2019 |
| [Graph WaveNet for Deep Spatial-Temporal Graph Modeling](https://doi.org/10.24963/ijcai.2019/264) | Proceedings of the 28th International Joint Conference on Artificial Intelligence (IJCAI) 2019 |
| [DeepCrime: Attentive Hierarchical Recurrent Networks for Crime Prediction](https://doi.org/10.1145/3269206.3271793) | Proceedings of the 27th ACM International Conference on Information and Knowledge Management (CIKM) 2018 |
| [Data-Driven Model Predictive Control of Autonomous Mobility-on-Demand Systems](https://doi.org/10.1109/ICRA.2018.8460966) | 2018 IEEE International Conference on Robotics and Automation (ICRA) |
| Diffusion Convolutional Recurrent Neural Network: Data-Driven Traffic Forecasting | International Conference on Learning Representations (ICLR) 2018 |
| [Efficient Large-Scale Fleet Management via Multi-Agent Deep Reinforcement Learning](https://doi.org/10.1145/3219819.3219993) | Proceedings of the 24th ACM SIGKDD International Conference on Knowledge Discovery & Data Mining (KDD) 2018 |
| [IntelliLight: A Reinforcement Learning Approach for Intelligent Traffic Light Control](https://doi.org/10.1145/3219819.3220096) | Proceedings of the 24th ACM SIGKDD International Conference on Knowledge Discovery & Data Mining (KDD) 2018 |
| [Large-Scale Order Dispatch in On-Demand Ride-Hailing Platforms: A Learning and Planning Approach](https://doi.org/10.1145/3219819.3219824) | Proceedings of the 24th ACM SIGKDD International Conference on Knowledge Discovery & Data Mining (KDD) 2018 |
| [Spatio-Temporal Graph Convolutional Networks: A Deep Learning Framework for Traffic Forecasting](https://doi.org/10.24963/ijcai.2018/505) | Proceedings of the 27th International Joint Conference on Artificial Intelligence (IJCAI) 2018 |
| Deep Spatio-Temporal Residual Networks for Citywide Crowd Flows Prediction | Proceedings of the Thirty-First AAAI Conference on Artificial Intelligence (AAAI) 2017 |
| [The Multi-Agent Transport Simulation MATSim](https://doi.org/10.5334/baw) | Ubiquity Press, London 2016 |
| [Urban Computing: Concepts, Methodologies, and Applications](https://doi.org/10.1145/2629592) | ACM Transactions on Intelligent Systems and Technology (TIST) 2014 |
| [Agent-based Modeling: Methods and Techniques for Simulating Human Systems](https://doi.org/10.1073/pnas.082080899) | Proceedings of the National Academy of Sciences (PNAS) 2002 |

### 🏥 Healthcare

| Paper | Venue |
| --- | --- |
| [Benchmarking Multi-turn Medical Diagnosis: Hold, Lure, and Self-Correction](https://api.semanticscholar.org/CorpusID:287204916) | arXiv 2026 |
| [STELLA: Towards a Biomedical World Model with Self-Evolving Multimodal Agents](https://api.semanticscholar.org/CorpusID:279973197) | bioRxiv 2026 |
| [AgentRx: A Benchmark Study of LLM Agents for Multimodal Clinical Prediction Tasks](https://api.semanticscholar.org/CorpusID:288255411) | 2026 |
| [TheraAgent: Self-Improving Therapeutic Agent for Precise and Comprehensive Treatment Planning](https://api.semanticscholar.org/CorpusID:288014890) | 2026 |
| [MeDxAgent: Multi-Agent Consultation for Interactive Medical Diagnosis](https://api.semanticscholar.org/CorpusID:288903956) | 2026 |
| [MediHive: A Decentralized Agent Collective for Medical Reasoning](https://api.semanticscholar.org/CorpusID:286961612) | arXiv 2026 |
| [MedAgent-Pro: Towards Evidence-based Multi-modal Medical Diagnosis via Reasoning Agentic Workflow](https://arxiv.org/abs/2503.18968) | arXiv 2025 |
| [Self-Evolving Multi-Agent Simulations for Realistic Clinical Interactions](https://api.semanticscholar.org/CorpusID:277435004) | arXiv 2025 |
| [A Field Guide to Deploying AI Agents in Clinical Practice](https://api.semanticscholar.org/CorpusID:281683236) | 2025 |
| [MedAgentBench: A Realistic Virtual EHR Environment to Benchmark Medical LLM Agents](https://api.semanticscholar.org/CorpusID:275906711) | 2025 |
| [MACD: Multi-Agent Clinical Diagnosis with Self-Learned Knowledge for LLM](https://api.semanticscholar.org/CorpusID:281505225) | arXiv 2025 |
| [MedChat: A Multi-Agent Framework for Multimodal Diagnosis with Large Language Models](https://api.semanticscholar.org/CorpusID:279250322) | 2025 IEEE 8th International Conference on Multimedia Information Processing and Retrieval (MIPR) |
| [Healthcare agent: eliciting the power of large language models for medical consultation](https://api.semanticscholar.org/CorpusID:281064731) | npj Artificial Intelligence 2025 |
| [LLM Agent Swarm for Hypothesis-Driven Drug Discovery](https://api.semanticscholar.org/CorpusID:278129440) | arXiv 2025 |
| [MRGAgents: A Multi-Agent Framework for Improved Medical Report Generation with Med-LVLMs](https://api.semanticscholar.org/CorpusID:278905046) | 2025 International Conference on Digital Image Computing: Techniques and Applications (DICTA) |
| [MMedAgent-RL: Optimizing Multi-Agent Collaboration for Multimodal Medical Reasoning](https://api.semanticscholar.org/CorpusID:279075781) | arXiv 2025 |
| [A Multi-Agent System for Complex Reasoning in Radiology Visual Question Answering](https://api.semanticscholar.org/CorpusID:280527311) | 2025 ACM/IEEE Joint Conference on Digital Libraries (JCDL) |
| [MedCoAct: Confidence-Aware Multi-Agent Collaboration for Complete Clinical Decision](https://api.semanticscholar.org/CorpusID:282058197) | 2025 IEEE International Conference on Bioinformatics and Biomedicine (BIBM) |
| MASTER: A multi-agent system with LLM specialized MCTS | Proceedings of the 2025 Conference of the Nations of the Americas Chapter of the Association for Computational Linguistics: Human Language Technologies (Volume 1: Long Papers) |
| [Large Language Model Agent for Modular Task Execution in Drug Discovery](https://arxiv.org/abs/2507.02925) | arXiv 2025 |
| [MDAgents: An Adaptive Collaboration of LLMs for Medical Decision-Making](https://arxiv.org/abs/2404.15155) | NeurIPS 2024 |
| [Agent Hospital: A Simulacrum of Hospital with Evolvable Medical Agents](https://arxiv.org/abs/2405.02957) | arXiv 2024 |
| [MMedAgent: Learning to Use Medical Tools with Multi-modal Agent](https://api.semanticscholar.org/CorpusID:270877969) | arXiv 2024 |
| [DrugAgent: Automating AI-aided Drug Discovery Programming through LLM Multi-Agent Collaboration](https://api.semanticscholar.org/CorpusID:274234223) | arXiv 2024 |
| [MedAide: Towards an Omni Medical Aide via Specialized LLM-based Multi-Agent Collaboration](https://api.semanticscholar.org/CorpusID:281616098) | arXiv 2024 |
| [MedAgents: Large Language Models as Collaborators for Zero-shot Medical Reasoning](https://api.semanticscholar.org/CorpusID:265281260) | arXiv 2023 |
| A dynamic LLM-powered agent network for task-oriented agent collaboration | arXiv 2023 |

### 📜 Law

| Paper | Venue |
| --- | --- |
| [Chinese Court Simulation with LLM-Based Agents System](https://aclanthology.org/2026.findings-acl.411/) | Findings of the Association for Computational Linguistics: ACL 2026 |
| [L-MARS: Legal Multi-Agent Workflow with Orchestrated Reasoning and Agentic Search](https://arxiv.org/abs/2509.00761) | ICML 2026 AI4Law workshop 2025 |
| [AgentCourt: Simulating Court with Adversarial Evolvable Lawyer Agents](https://arxiv.org/abs/2408.08089) | Findings of ACL 2025 |
| [LegalSim: Multi-Agent Simulation of Legal Systems for Discovering Procedural Exploits](https://aclanthology.org/2025.nllp-1.27/) | Proceedings of the Natural Legal Language Processing Workshop 2025 |
| [Debate-Feedback: A Multi-Agent Framework for Efficient Legal Judgment Prediction](https://aclanthology.org/2025.naacl-short.39/) | Proceedings of the 2025 Conference of the Nations of the Americas Chapter of the Association for Computational Linguistics: Human Language Technologies (Volume 2: Short Papers) |
| Deterministic Legal Agents: A Canonical Primitive API for Auditable Reasoning over Temporal Knowledge Graphs | arXiv 2025 |
| SAMVAD: A Multi-Agent System for Simulating Judicial Deliberation Dynamics in India | arXiv 2025 |
| Privacy Artifact ConnecTor (PACT): Embedding Enterprise Artifacts for Compliance AI Agents | arXiv 2025 |
| COURTREASONER: Can LLM Agents Reason Like Judges? | Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing |
| MASLegalBench: Benchmarking Multi-Agent Systems in Deductive Legal Reasoning | arXiv 2025 |
| Legalagentbench: Evaluating llm agents in legal domain | Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers) 2025 |
| Multi-Agent Legal Verifier Systems for Data Transfer Planning | arXiv 2025 |
| [PAKTON: A Multi-Agent Framework for Question Answering in Long Legal Agreements](https://aclanthology.org/2025.emnlp-main.403/) | Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing |
| [AutoSpec: An Agentic Framework for Automatically Drafting Patent Specification](https://aclanthology.org/2025.findings-emnlp.687/) | Findings of the Association for Computational Linguistics: EMNLP 2025 |
| [Multi-Agent Simulator Drives Language Models for Legal Intensive Interaction](https://aclanthology.org/2025.findings-naacl.365/) | Findings of the Association for Computational Linguistics: NAACL 2025 |
| Positioning LLM-Enabled Agents as Legal Compliance Aides for Data Pipelines | International Joint Conference on Rules and Reasoning 2025 |
| LAW: Legal agentic workflows for custody and fund services contracts | Proceedings of the 31st International Conference on Computational Linguistics: Industry Track 2025 |
| Compliance Brain Assistant: Conversational Agentic AI for Assisting Compliance Tasks in Enterprise Environments | arXiv 2025 |
| [AgentsCourt: Building Judicial Decision-Making Agents with Court Debate Simulation and Legal Knowledge Augmentation](https://aclanthology.org/2024.findings-emnlp.549/) | Findings of the Association for Computational Linguistics: EMNLP 2024 |
| A large language model agent based legal assistant for governance applications | International Conference on Electronic Government 2024 |
| Lawluo: A multi-agent collaborative framework for multi-round chinese legal consultation | arXiv 2024 |
| Autopatent: a multi-agent framework for automatic patent generation | arXiv 2024 |
| Patentagent: Intelligent agent for automated pharmaceutical patent analysis | arXiv 2024 |
| Chatlaw: A multi-agent collaborative legal assistant with knowledge graph enhanced mixture-of-experts large language model | arXiv 2023 |

### 🎓 Education

| Paper | Venue |
| --- | --- |
| Scaffolding Human Learning by Shaping Visual Environment | Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Workshops 2026 |
| ProPACT: A Proactive AI-Driven Adaptive Collaborative Tutor for Pair Programming | arXiv 2026 |
| Errorradar: Benchmarking complex mathematical reasoning of multimodal large language models via error detection | Findings of the Association for Computational Linguistics: ACL 2026 |
| StudentSim: Training LLM-based Student Simulators | arXiv 2026 |
| [SEFL: A Framework for Generating Synthetic Educational Assignment Feedback with LLM Agents](https://arxiv.org/abs/2502.12927) | arXiv 2026 |
| [Exploring the potential of LLM to enhance teaching plans through teaching simulation](https://api.semanticscholar.org/CorpusID:276158247) | NPJ Science of Learning 2025 |
| [LLM Agents for Education: Advances and Applications](https://aclanthology.org/2025.findings-emnlp.743/) | Findings of the Association for Computational Linguistics: EMNLP 2025 |
| “My Grade is Wrong!”: A Contestable AI Framework for Interactive Feedback in Evaluating Student Essays | International Conference on Artificial Intelligence in Education 2025 |
| Teachtune: Reviewing pedagogical agents against diverse student profiles with simulated students | Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems |
| Exploring knowledge tracing in tutor-student dialogues using llms | Proceedings of the 15th international learning analytics and knowledge conference 2025 |
| Ai-driven virtual teacher for enhanced educational efficiency: Leveraging large pretrain models for autonomous error analysis and correction | Proceedings of the AAAI conference on artificial intelligence 2025 |
| Classroom simulacra: Building contextual student generative agents in online education for learning behavioral simulation | Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems |
| Mathagent: Leveraging a mixture-of-math-agent framework for real-world multimodal mathematical error detection | Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 6: Industry Track) 2025 |
| From correctness to comprehension: Ai agents for personalized error diagnosis in education | arXiv 2025 |
| Evaluation of an LLM-Powered Student Agent for Teacher Training | Technology Enhanced Learning for Inclusive and Equitable Quality Education 2024 |
| [Teaching via LLM-enhanced simulations: Authenticity and barriers to suspension of disbelief](https://api.semanticscholar.org/CorpusID:274695185) | Internet High. Educ. 2024 |
| Knowledge graphs as context sources for llm-based explanations of learning recommendations | 2024 IEEE Global Engineering Education Conference (EDUCON) |
| Supporting student decisions on learning recommendations: An llm-based chatbot with knowledge graph contextualization for conversational explainability and mentoring | arXiv 2024 |
| Empowering private tutoring by chaining large language models | Proceedings of the 33rd ACM International Conference on Information and Knowledge Management 2024 |
| Using generative AI and multi-agents to provide automatic feedback | arXiv 2024 |
| Foke: A personalized and explainable education framework integrating foundation models, knowledge graphs, and prompt engineering | China national conference on big data and social computing 2024 |
| Teach ai how to code: Using large language models as teachable agents for programming education | Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems |
| Evaai: a multi-agent framework leveraging large language models for enhanced automated grading | International conference on intelligent tutoring systems 2024 |
| Personalized tutoring through conversational agents | Using Educational Robots to Enhance Learning: An Analysis of 100 Academic Articles 2024 |
| Teaching CS50 with AI: leveraging generative artificial intelligence in computer science education | Proceedings of the 55th ACM technical symposium on computer science education V. 1 2024 |
| Closing the Loop: Learning to Generate Writing Feedback via Language Model Simulated Student Revisions | Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing |
| Empowering personalized learning through a conversation-based tutoring system with student modeling | Extended Abstracts of the CHI Conference on Human Factors in Computing Systems 2024 |
| Content knowledge identification with multi-agent large language models (llms) | International conference on artificial intelligence in education 2024 |
| A large language model-assisted education tool to provide feedback on open-ended responses | arXiv 2023 |
| Oatutor: An open-source adaptive tutoring system and curated content library for learning sciences research | Proceedings of the 2023 chi conference on human factors in computing systems |

### 🎬 Entertainment & Media

| Paper | Venue |
| --- | --- |
| [PUBG Ally: A Conversational Embodied Agent as an AI Teammate](https://arxiv.org/abs/2609.29837) | arXiv 2026 |
| [Firefly AI Assistant Now Available in Public Beta](https://blog.adobe.com/en/publish/2026/04/27/firefly-ai-assistant-public-beta) | Adobe Blog 2026 |
| Live Assistant: Learning Whether, When, and Whom to Assist in Real-World Live Social Streams | arXiv 2026 |
| [NVIDIA ACE for Games](https://developer.nvidia.com/ace-for-games) | 2026 |
| [DJ](https://support.spotify.com/us/article/dj/) | 2026 |
| [Prompted Playlist in Beta Coming to Premium Listeners in More Markets](https://newsroom.spotify.com/2026-01-22/prompted-playlists-expansion/) | 2026 |
| [How creators use AI for content creation](https://www.youtube.com/howyoutubeworks/ai/) | 2026 |
| " What Can I Do for You": How Should AI Companions Provide Assistance to Players in Virtual Reality Games | arXiv 2026 |
| A causality-aware paradigm for evaluating creativity of multimodal large language models | IEEE Transactions on Pattern Analysis and Machine Intelligence 2025 |
| An Empirical Evaluation of AI-Powered Non-Player Characters' Perceived Realism and Performance in Virtual Reality Environments | arXiv 2025 |
| Engagement, user satisfaction, and the amplification of divisive content on social media | PNAS nexus 2025 |
| [NVIDIA redefines game AI with ACE autonomous game characters](https://www.nvidia.com/en-us/geforce/news/nvidia-ace-autonomous-ai-companions-pubg-naraka-bladepoint/) | 2025 |
| Towards a harms taxonomy of ai likeness generation | arXiv 2024 |
| Generative AI enhances individual creativity but reduces the collective diversity of novel content | Science advances 2024 |
| Let's think outside the box: Exploring leap-of-thought in large language models with creative humor generation | Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition 2024 |
| [Spotify debuts a new AI DJ, right in your pocket](https://newsroom.spotify.com/2023-02-22/spotify-debuts-a-new-ai-dj-right-in-your-pocket/) | Spotify Newsroom 2023 |
| [On YouTube's recommendation system](https://blog.youtube/inside-youtube/on-youtubes-recommendation-system/) | 2021 |
| [How TikTok recommends videos #ForYou](https://newsroom.tiktok.com/how-tiktok-recommends-videos-for-you) | 2020 |
| Mixed-initiative creative interfaces | Proceedings of the 2017 CHI conference extended abstracts on human factors in computing systems |
| Interactive narrative: An intelligent systems approach | Ai Magazine 2013 |
| Measuring and defining the experience of immersion in games | International journal of human-computer studies 2008 |
| Creativity support tools: accelerating discovery and innovation | Communications of the ACM 2007 |
| Interpersonal distance in immersive virtual environments | Personality and social psychology bulletin 2003 |
| An experiment in building a fully-realized interactive drama | Game Developers Conference, Game Design Track, 2003 |
| Designing embodied conversational agents | Embodied conversational agents 2000 |

### 🌾 Agriculture

| Paper | Venue |
| --- | --- |
| [Agri-SAGE: Simulation-Grounded Multi-Agent LLM for Context-Aware Agricultural Advisory Generation](https://api.semanticscholar.org/CorpusID:289706820) | 2026 |
| [Agentic AI-Based IoT Precision Agriculture Framework—Our Vision and Challenges](https://api.semanticscholar.org/CorpusID:287414641) | AgriEngineering 2026 |
| [Agent Technology for Agricultural Intelligence: Methodological Framework and Applications](https://api.semanticscholar.org/CorpusID:287331235) | Electronics 2026 |
| [Agentic AI Framework to Automate Traditional Farming for Smart Agriculture](https://api.semanticscholar.org/CorpusID:284507438) | AgriEngineering 2026 |
| [An Agent-Based Service Architecture for Smart Greenhouses: Telemetry Analytics and Decision Support with RAG-grounded LLM Agents](https://api.semanticscholar.org/CorpusID:285991943) | Smart Agricultural Technology 2026 |
| [Optimization of irrigation and fertigation in smart agriculture: An IoT-based micro-services framework](https://api.semanticscholar.org/CorpusID:277015087) | Smart Agricultural Technology 2025 |
| [AgroAskAI: A Multi-Agentic AI Framework for Supporting Smallholder Farmers' Enquiries Globally](https://api.semanticscholar.org/CorpusID:283920327) | arXiv 2025 |
| [Dynamic Agricultural Pest Classification Using Enhanced SAO-CNN and Swarm Intelligence Optimization for UAVs](https://api.semanticscholar.org/CorpusID:277620091) | International Journal of Cognitive Computing in Engineering 2025 |
| [AgriSentinel: Privacy-Enhanced Embedded-LLM Crop Disease Alerting System](https://api.semanticscholar.org/CorpusID:281252749) | arXiv 2025 |
| [PDD-AGENT: Multimodal Large Language Model-Driven AI Agent for Enhanced Plant Disease Diagnosis](https://api.semanticscholar.org/CorpusID:280732396) | 2025 IEEE International Conference on Image Processing (ICIP) |
| [PestMA: LLM-based Multi-Agent System for Informed Pest Management](https://api.semanticscholar.org/CorpusID:277781521) | arXiv 2025 |
| [Water distribution in community irrigation using a multi-agent system](https://api.semanticscholar.org/CorpusID:253002143) | Journal of the Royal Society of New Zealand 2022 |
| [On Multi-Agent Coordination of Agri-Robot Fleets](https://api.semanticscholar.org/CorpusID:225048086) | ATT@ECAI 2020 |
| [Combining Multi-Agent Systems and Wireless Sensor Networks for Monitoring Crop Irrigation](https://api.semanticscholar.org/CorpusID:3508808) | Sensors (Basel, Switzerland) 2017 |
| [A MULTI-AGENT SYSTEM FOR INTEGRATED PRODUCTION IN GREENHOUSE HYDROPONICS](https://api.semanticscholar.org/CorpusID:53480411) | 2005 |

---

## 📖 General References

Works the survey cites outside the capacity and application sections.

| Paper | Venue |
| --- | --- |
| [Introducing Dynamic Workflows in Claude Code](https://claude.com/blog/introducing-dynamic-workflows-in-claude-code) | 2026 |
| [Project Glasswing: An Initial Update](https://www.anthropic.com/research/glasswing-initial-update) | 2026 |
| [Legal infrastructure for transformative AI governance](http://dx.doi.org/10.1073/pnas.2509742123) | Proceedings of the National Academy of Sciences 2026 |
| [AssemLM: A Spatial Reasoning Multimodal Large Language Model for Robotic Assembly](https://arxiv.org/abs/2604.08983) | arXiv 2026 |
| [Augmenting Interface Usability Heuristics for Reliable Computer-Use Agents](https://arxiv.org/abs/2605.02729) | arXiv 2026 |
| [Brick-Composer: Using MLLMs for Assembly with Diverse Bricks](https://arxiv.org/abs/2606.05445) | arXiv 2026 |
| [Do Proactive Agents Really Need an LLM to Decide When to Wake and What to Anchor?](https://doi.org/10.48550/arXiv.2605.30152) | arXiv 2026 |
| [Proactive Agent Research Environment: Simulating Active Users to Evaluate Proactive Assistants](https://arxiv.org/abs/2604.00842) | arXiv 2026 |
| [SkillOS: Learning Skill Curation for Self-Evolving Agents](https://arxiv.org/abs/2605.06614) | arXiv 2026 |
| [EgoForge: Goal-Directed Egocentric World Simulator](https://arxiv.org/abs/2603.20169) | arXiv 2026 |
| [RealWebAssist: A Benchmark for Long-Horizon Web Assistance with Real-World Users](https://doi.org/10.1609/aaai.v40i40.40742) | Proceedings of the AAAI Conference on Artificial Intelligence 2026 |
| [Can Open-Source LLM Agents Replace Static Application Security Testing Tools? An Empirical Assessment](https://arxiv.org/abs/2606.11672) | arXiv 2026 |
| [LMBuild: Evaluating LLM Agents for Generating Buildable and Functional Structures](https://arxiv.org/abs/2610.04292) | arXiv 2026 |
| [AI for Service: Proactive Assistance with AI Glasses](https://arxiv.org/abs/2510.14359) | arXiv 2025 |
| [Claude Code: Anthropic's Agentic Coding System](https://www.anthropic.com/product/claude-code) | 2025 |
| Behave ai: Best practices and guidelines for human-centric design and evaluation of proactive ai agents | Companion Proceedings of the 30th International Conference on Intelligent User Interfaces 2025 |
| [The Impact of Generative AI on Critical Thinking: Self-Reported Reductions in Cognitive Effort and Confidence Effects from a Survey of Knowledge Workers](https://doi.org/10.1145/3706598.3713778) | Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems |
| [PropaInsight: Toward Deeper Understanding of Propaganda in Terms of Techniques, Appeals, and Intent](https://aclanthology.org/2025.coling-main.376/) | Proceedings of the 31st International Conference on Computational Linguistics 2025 |
| [Sensible Agent: A Framework for Unobtrusive Interaction with Proactive AR Agent](https://duruofei.com/papers/Lee_SensibleAgent-AFrameworkForUnobtrusiveInteractionWithProactiveARAgent_UIST2025.pdf) | Proceedings of the 39th Annual ACM Symposium on User Interface Software and Technology (UIST) 2025 |
| [Welcome to the Era of Experience](https://storage.googleapis.com/deepmind-media/Era-of-Experience%20/The%20Era%20of%20Experience%20Paper.pdf) | 2025 |
| [Evaluating proactivity levels in socially assistive robots for elderly care: a user adoption assessment](https://doi.org/10.1080/0144929X.2025.2546976) | Behaviour & Information Technology 2025 |
| Context Engineering for Trustworthiness: Rescorla Wagner Steering Under Mixed and Inappropriate Contexts | arXiv 2025 |
| RESIST: Rationale-Enhanced and Reward Model-Based End-to-End Social Influence Dialogue System | ACM Transactions on Multimedia Computing, Communications and Applications 2025 |
| [Does Chain-of-Thought Reasoning Help Mobile GUI Agent? An Empirical Study](https://doi.org/10.48550/arXiv.2503.16788) | arXiv 2025 |
| [CogAgent: A Visual Language Model for GUI Agents](https://arxiv.org/abs/2312.08914) | CVPR 2024 |
| [ComPeer: A Generative Conversational Agent for Proactive Peer Support](https://arxiv.org/abs/2407.18064) | UIST 2024 |
| [WorkFit: Designing Proactive Voice Assistance for the Health and Well-Being of Knowledge Workers](https://doi.org/10.1145/3640794.3665561) | CUI 2024 |
| [The Law of AI is the Law of Risky Agents Without Intentions](https://lawreview.uchicago.edu/online-archive/law-ai-law-risky-agents-without-intentions) | University of Chicago Law Review Online 2024 |
| [Let's Verify Step by Step](https://arxiv.org/abs/2305.20050) | arXiv 2023 |
| [A Language-First Approach for Procedure Planning](https://aclanthology.org/2023.findings-acl.122/) | Findings of the Association for Computational Linguistics: ACL 2023 |
| [Visual Captions: Augmenting Verbal Communication with On-the-fly Visuals](https://doi.org/10.1145/3544548.3581566) | Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems |
| [Pervasive AI for IoT Applications: A Survey on Resource-Efficient Distributed Artificial Intelligence](https://doi.org/10.1109/ACCESS.2022.3209611) | IEEE Access 2022 |
| [The Turing Trap: The Promise & Peril of Human-Like Artificial Intelligence](https://doi.org/10.1162/daed_a_01915) | Daedalus 2022 |
| [A Path Towards Autonomous Machine Intelligence](https://openreview.net/pdf?id=BZ5a1r-kVsf) | 2022 |
| Should I follow AI-based advice? Measuring appropriate reliance in human-AI decision-making | arXiv 2022 |
| On the opportunities and risks of foundation models | arXiv 2021 |
| [To Trust or to Think: Cognitive Forcing Functions Can Reduce Overreliance on AI in AI-Assisted Decision-Making](https://doi.org/10.1145/3449287) | Proceedings of the ACM on Human-Computer Interaction 2021 |
| [On the Social-Relational Moral Standing of AI: An Empirical Study Using AI-Generated Art](https://doi.org/10.3389/frobt.2021.719944) | Frontiers in Robotics and AI 2021 |
| Procedure planning in instructional videos | European Conference on Computer Vision 2020 |
| [Open Problems in Cooperative AI](https://arxiv.org/abs/2012.08630) | arXiv 2020 |
| [Extending the Hint Factory for the Assistance Dilemma: A Novel, Data-driven HelpNeed Predictor for Proactive Problem-solving Help](https://zenodo.org/record/4399683) | Zenodo 2020 |
| [Artificial Intelligence, Automation, and Work](http://dx.doi.org/10.7208/chicago/9780226613475.003.0008) | The Economics of Artificial Intelligence: An Agenda 2019 |
| Gmail smart compose: Real-time assisted writing | Proceedings of the 25th ACM SIGKDD international conference on knowledge discovery & data mining 2019 |
| [Automation and Utopia: Human Flourishing in a World without Work](http://dx.doi.org/10.4159/9780674242203) | Harvard University Press 2019 |
| [Machine behaviour](https://doi.org/10.1038/s41586-019-1138-y) | Nature 2019 |
| [Overcoming Algorithm Aversion: People Will Use Imperfect Algorithms If They Can (Even Slightly) Modify Them](https://doi.org/10.1287/mnsc.2016.2643) | Management Science 2018 |
| [Meaningful Human Control over Autonomous Systems: A Philosophical Account](https://doi.org/10.3389/frobt.2018.00015) | Frontiers in Robotics and AI 2018 |
| A prototype for credit card fraud management: Industry paper | Proceedings of the 11th ACM international conference on distributed and event-based systems 2017 |
| [Mastering Chess and Shogi by Self-Play with a General Reinforcement Learning Algorithm](https://arxiv.org/abs/1712.01815) | arXiv 2017 |
| Attention Is All You Need | Advances in Neural Information Processing Systems 2017 |
| [I Think, Therefore I Invent: Creative Computers and the Future of Patent Law](https://bclawreview.bc.edu/articles/566) | Boston College Law Review 2016 |
| [Trust in Automation: Integrating Empirical Evidence on Factors That Influence Trust](https://doi.org/10.1177/0018720814547570) | Human Factors 2015 |
| [The Mind in the Machine: Anthropomorphism Increases Trust in an Autonomous Vehicle](https://doi.org/10.1016/j.jesp.2014.01.005) | Journal of Experimental Social Psychology 2014 |
| Impact of robot failures and feedback on real-time trust | 2013 8th ACM/IEEE International Conference on Human-Robot Interaction (HRI) |
| [Measurement Instruments for the Anthropomorphism, Animacy, Likeability, Perceived Intelligence, and Perceived Safety of Robots](https://doi.org/10.1007/s12369-008-0001-3) | International Journal of Social Robotics 2009 |
| [The Cost of Interrupted Work: More Speed and Stress](https://doi.org/10.1145/1357054.1357072) | Proceedings of the SIGCHI Conference on Human Factors in Computing Systems 2008 |
| [Construction and Evaluation of a User Experience Questionnaire](https://doi.org/10.1007/978-3-540-89350-9_6) | USAB 2008 |
| Recognizing instantiated goals using statistical methods | IJCAI Workshop on Modeling Others from Observations (MOO-2005) |
| [The Responsibility Gap: Ascribing Responsibility for the Actions of Learning Automata](https://doi.org/10.1007/s10676-004-3422-1) | Ethics and Information Technology 2004 |
| Privacy as Contextual Integrity | Washington Law Review 2004 |
| Foundations for an empirically determined scale of trust in automated systems | International journal of cognitive ergonomics 2000 |
| [Self-determination theory and the facilitation of intrinsic motivation, social development, and well-being.](http://dx.doi.org/10.1037/0003-066X.55.1.68) | American Psychologist 2000 |
| [Proactive Computing](https://doi.org/10.1145/332833.332837) | Commun. ACM 2000 |
| [Formal and Real Authority in Organizations](https://doi.org/10.1086/262063) | Journal of Political Economy 1997 |
| PARADISE: A framework for evaluating spoken dialogue agents | 35th Annual Meeting of the Association for Computational Linguistics and 8th Conference of the European Chapter of the Association for Computational Linguistics 1997 |
| TRAINS-95: Towards a Mixed-Initiative Planning Assistant. | AIPS 1996 |
| Diagnosticity and multidimensional subjective workload ratings | Ergonomics 1996 |
| [The Out-of-the-Loop Performance Problem and Level of Control in Automation](https://doi.org/10.1518/001872095779064555) | Human Factors 1995 |
| Firms, Contracts, and Financial Structure | Clarendon Press 1995 |
| SUS: A quick and dirty usability scale | Usability Eval. Ind. 1995 |
| Intelligent agents: Theory and practice | The knowledge engineering review 1995 |
| [Performance Consequences of Automation-Induced “Complacency”](https://doi.org/10.1207/S15327108IJAP0301_1) | The International Journal of Aviation Psychology 1993 |
| [The Computer for the 21st Century](https://doi.org/10.1038/scientificamerican0991-94) | Scientific American 1991 |
| [Property Rights and the Nature of the Firm](https://doi.org/10.1086/261729) | Journal of Political Economy 1990 |
| [Mixed Initiative in Dialogue: An Investigation into Discourse Segmentation](https://arxiv.org/abs/cmp-lg/9504007) | Proceedings of the 28th Annual Meeting of the Association for Computational Linguistics 1990 |
| [Development and validation of the Working Alliance Inventory](https://doi.org/10.1037/0022-0167.36.2.223) | Journal of Counseling Psychology 1989 |
| [Development of NASA-TLX (Task Load Index): Results of Empirical and Theoretical Research](https://doi.org/10.1016/S0166-4115(08)62386-9) | Advances in Psychology 1988 |
| [Incomplete Contracts and Renegotiation](https://doi.org/10.2307/1912698) | Econometrica 1988 |
| The subjective workload assessment technique: A scaling procedure for measuring mental workload | Advances in psychology 1988 |
| [The Costs and Benefits of Ownership: A Theory of Vertical and Lateral Integration](https://doi.org/10.1086/261404) | Journal of Political Economy 1986 |
| The Economic Institutions of Capitalism: Firms, Markets, Relational Contracting | Free Press 1985 |
| Computer science as empirical inquiry: Symbols and search | ACM Turing award lectures 1976 |
| Markets and Hierarchies: Analysis and Antitrust Implications | Free Press 1975 |
| STRIPS: A new approach to the application of theorem proving to problem solving | Artificial intelligence 1971 |
| [A Formal Theory of the Employment Relationship](https://doi.org/10.2307/1906815) | Econometrica 1951 |
| Cybernetics: Or Control and Communication in the Animal and the Machine | The Technology Press 1948 |
| Behavior, purpose and teleology | Philosophy of science 1943 |
| [The Nature of the Firm](https://doi.org/10.1111/j.1468-0335.1937.tb00002.x) | Economica 1937 |

<!-- papers:end -->

## ✨ Acknowledgements

We thank the broader community for the work surveyed here. If a paper should be added or moved, please [open an issue](https://github.com/EmpathYang/Proactive-AI-for-Superintelligent-Agents/issues/new/choose).

## 📄 License

This repository is released under the [MIT License](LICENSE).
