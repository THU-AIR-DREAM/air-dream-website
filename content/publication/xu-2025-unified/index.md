---
title: "Unified Reinforcement Learning through Implicit Value Regularization"

date: 2025-09-22

publishDate: 2025-09-22T09:00:00Z

authors: ["Haoran Xu", "Liyuan Mao", "Hui Jin", "Weinan Zhang", "Xianyuan Zhan", "Amy Zhang"]

author_notes:

publication_types: ["paper-conference"]

abstract: "The practical use of reinforcement learning (RL) requires handling diverse settings, including online, offline, and offline-to-online learning. Instead of developing separate algorithms for each setting, we propose Uni-IVR, a unified model-free RL framework that addresses all these scenarios within a single formulation. Uni-IVR builds on the Implicit Value Regularization (IVR) framework and generalizes its dataset behavior constraint to the constraint w.r.t a reference policy, yielding an unified value learning objective for general settings. The reference policy is chosen to be the target policy in the online setting and the behavior policy in the offline setting. Using an iteratively refined behavior policy solves the over-constrained problem of directly applying IVR in the online setting, it provides an implicit trust-region style update through the value function while being off-policy. Uni-IVR also introduces an unified policy extraction objective that estimates in-sample policy gradient using only actions from the reference policy. This supports various policy classes and theoretically guaranntees less value estimation error and larger performance improvement over the reference policy. We evaluate Uni-IVR on a range of standard RL benchmarks across online, offline, and offline-to-online settings. In online RL, Uni-IVR achieves higher sample efficiency than both off-policy methods without trust-region updates and on-policy methods with trust-region updates. In offline RL, Uni-IVR retains the benefits of in-sample learning while outperforming IVR through better policy extraction. In offline-to-online RL, Uni-IVR beats both constraint-based methods and unconstrained approaches by effectively balancing stability and adaptability."

featured: false

publication: "*In the Thirty-Ninth Conference on Neural Information Processing Systems (NeurIPS 2025)*"

url_pdf: "https://neurips.cc/virtual/2025/poster/116192"

url_code: ""

# Custom links (uncomment lines below)
links:
- name: Website
  url: https://neurips.cc/virtual/2025/poster/116192

projects: 
  - Algorithms

tags:
  - Algorithms

image:
#   placement: 1
#   caption: ""
#   focal_point: "Smart"
#   preview_only: false
#   alt_text:
---