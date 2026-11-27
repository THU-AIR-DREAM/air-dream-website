---
title: "Horizon Adaptive Offline Policy Learning via Value Stitching"

date: 2026-06-19

publishDate: 2026-11-21T00:00:00Z

authors: ["Kexin Zheng", "Xianyuan Zhan", "Xintao Yan"]

publication_types: ["paper-conference"]

abstract: "Learning accurate value functions plays a decisive role for reinforcement learning (RL) agents to solve long-horizon, complex tasks. Conventional temporal-difference (TD) learning objectives suffer from value-estimation bias that accumulates over the horizon, while extended-horizon modeling methods, such as n-step TD backups and Q-chunking, adopt a rigid, fixed-horizon value-modeling recipe that is often not flexible enough to capture complex value structures in long-horizon, multi-stage tasks. In this paper, we show that enabling value updates with dynamic horizon composition can yield a strong offline policy learning scheme. Our method, Horizon Adaptive Offline Policy Learning via VAlue STitching (VAST), replaces fixed-horizon backups with recursive, horizon-adaptive value composition. Its key ingredient is to couple value optimization with a future state- and horizon-length-conditioned auxiliary value function that is learned through direct data supervision, and a stitching policy that optimally selects the reward-maximizing horizon length and future sub-goal to achieve horizon-adaptive value stitching. This design enables direct estimation and compositional stitching of variable-length returns grounded in actionable sub-goal states, providing an accurate and greedily exploitable value-supervision signal for offline policy optimization. Across 50 tasks on OGBench, VAST outperforms fixed-step, extended-horizon methods, and generative-value offline RL baselines, achieving strong performance particularly in high-complexity, long-horizon decision-making tasks."

summary: VAST replaces fixed-horizon backups with recursive, horizon-adaptive value composition for long-horizon offline reinforcement learning.

featured: false

publication: "*In the Fortieth Conference on Neural Information Processing Systems (NeurIPS 2026)*"

url_pdf: "https://arxiv.org/pdf/2606.21136"

links:
  - name: arXiv
    url: https://arxiv.org/abs/2606.21136

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
---
