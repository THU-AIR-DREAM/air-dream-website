---
title: "Uni-RL: Unifying Online and Offline RL via Implicit Value Regularization"

date: 2025-09-22

publishDate: 2025-09-22T09:00:00Z

authors: ["Haoran Xu", "Liyuan Mao", "Hui Jin", "Weinan Zhang", "Xianyuan Zhan", "Amy Zhang"]

author_notes:

publication_types: ["paper-conference"]

abstract: "The practical implementations of reinforcement learning (RL) often face diverse settings, such as online, offline, and offline-to-online learning. Instead of developing separate algorithms for each setting, we propose Uni-RL, a unified model-free RL framework that addresses all these scenarios within a single formulation. Uni-RL builds on the Implicit Value Regularization (IVR) framework (Xu et al., 2023) and generalizes its dataset behavior constraint to the constraint w.r.t. a reference policy, yielding a unified value learning objective for general settings. The reference policy is chosen to be the target policy in the online setting and the behavior policy in the offline setting. Using an iteratively refined behavior policy solves the over-conservative issue of directly applying IVR in the online setting, it provides an implicit trust-region style update through the value function while being offpolicy. Uni-RL also introduces a unified policy extraction objective that estimates in-sample policy gradient using only actions from the reference policy. This not only supports various policy classes, but also theoretically guarantees less value estimation error and larger performance improvement over the reference policy. We evaluate Uni-RL on a range of standard RL benchmarks across online, offline, and offline-to-online settings. In online RL, Uni-RL achieves higher sample efficiency than both off-policy methods without trust-region updates and on-policy methods with trust-region updates. In offline RL, Uni-RL retains the benefits of in-sample learning while outperforming IVR through better policy extraction. In offline-to-online RL, Uni-RL beats both constraint-based methods and unconstrained approaches by effectively balancing stability and adaptability."

featured: false

publication: "*In the Thirty-Ninth Conference on Neural Information Processing Systems (NeurIPS 2025)*"

url_pdf: "https://openreview.net/pdf?id=mjZi8cV18P"

url_code: "https://github.com/ryanxhr/Uni-RL"

# Custom links (uncomment lines below)
links:
- name: Website
  url: https://openreview.net/pdf?id=mjZi8cV18P

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