---
title: "Efficient Robotic Policy Learning via Latent Space Backward Planning"

date: 2025-05-01

publishDate: 2025-05-13T07:00:00Z

authors: ["Dongxiu Liu", "Haoyi Niu", "Zhihao Wang", "Jinliang Zheng", "Yinan Zheng", "Zhonghong Ou", "Jianming HU", "Jianxiong Li", "Xianyuan Zhan"]

author_notes:
- "Equal contribution"
- "Equal contribution"

publication_types: ["paper-conference"]

abstract: "Current robotic planning methods often rely on predicting multi-frame images with full pixel details. While this fine-grained approach can serve as a generic world model, it introduces two significant challenges for downstream policy learning: substantial computational costs that hinder real-time deployment, and accumulated inaccuracies that can mislead action extraction. Planning with coarse-grained subgoals partially alleviates efficiency issues. However, their forward planning schemes can still result in off-task predictions due to accumulation errors, leading to misalignment with long-term goals. This raises a critical question: Can robotic planning be both efficient and accurate enough for real-time control in long-horizon, multi-stage tasks? To address this, we propose a Backward Planning scheme in Latent space (LBP), which begins by grounding the task into final latent goals, followed by recursively predicting intermediate subgoals closer to the current state. The grounded final goal enables backward subgoal planning to always remain aware of task completion, facilitating on-task prediction along the entire planning horizon. The subgoal-conditioned policy incorporates a learnable token to summarize the subgoal sequences and determines how each subgoal guides action extraction. Through extensive simulation and real-robot long-horizon experiments, we show that LBP outperforms existing fine-grained and forward planning methods, achieving SOTA performance. Project Page: https://lbp-authors.github.io."

featured: false

publication: "*The 42nd International Conference on Machine Learning (ICML 2025)*"

url_pdf: "https://openreview.net/forum?id=DJiouYdH19"

url_code: "https://github.com/Dstate/LBP"

# Custom links (uncomment lines below)
links:
- name: Website
  url: https://lbp-authors.github.io/

projects: 
  - Algorithms  
  - Robotics

tags:
  - Algorithms
  - Robotics

image:
  placement: 1
  caption: ""
  focal_point: "Smart"
  preview_only: false
  alt_text:
---

