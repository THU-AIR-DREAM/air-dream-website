---
title: "Flow Matching-Based Autonomous Driving Planning with Advanced Interactive Behavior Modeling"

date: 2025-09-22

publishDate: 2025-09-22T09:00:00Z

authors: ["Tianyi Tan", "Yinan Zheng", "Ruiming Liang", "Zexu Wang", "Kexin Zheng", "Jinliang Zheng", "Jianxiong Li", "Xianyuan Zhan", "Jingjing Liu"]

author_notes:

publication_types: ["paper-conference"]

abstract: "Modeling interactive driving behaviors in complex scenarios remains a fundamental challenge for autonomous driving planning. Learning-based approaches attempt to address this challenge with advanced generative models, removing the dependency on over-engineered architectures for representation fusion. However, brute-force implementation by simply stacking transformer blocks lacks a dedicated mechanism for modeling interactive behaviors that is common in real driving scenarios. The scarcity of interactive driving data further exacerbates this problem, leaving conventional imitation learning methods ill-equipped to capture high-value interactive behaviors. We propose Flow Planner, which tackles these problems through coordinated innovations in data modeling, model architecture, and learning scheme. Specifically, we first introduce fine-grained trajectory tokenization, which decomposes the trajectory into overlapping segments to decrease the complexity of whole trajectory modeling. With a sophisticatedly designed architecture, we achieve efficient temporal and spatial fusion of planning and scene information, to better capture interactive behaviors. In addition, the framework incorporates flow matching with classifier-free guidance for multi-modal behavior generation, which dynamically reweights agent interactions during inference to maintain coherent response strategies, providing a critical boost for interactive scenario understanding. Experimental results on the large-scale nuPlan dataset demonstrate that Flow Planner achieves state-of-the-art performance among learning-based approaches while effectively modeling interactive behaviors in complex driving scenarios."

featured: false

publication: "*In the Thirty-Ninth Conference on Neural Information Processing Systems (NeurIPS 2025)*"

url_pdf: "https://arxiv.org/pdf/2510.11083"

url_code: "https://github.com/DiffusionAD/Flow-Planner"

# Custom links (uncomment lines below)
links:
- name: Website
  url: "https://github.com/DiffusionAD/Flow-Planner"

projects: 
  - Algorithms  
  - Robotics

tags:
  - Algorithms
  - Robotics

image:
#   placement: 1
#   caption: ""
#   focal_point: "Smart"
#   preview_only: false
#   alt_text:
---
