---
title: "Mind the Gap: Offline Policy Optimizaiton for Imperfect Rewards"
date: 2023-01-01
publishDate: 2023-02-21T06:14:15.889896Z
authors: ["Jianxiong Li", "Xiao Hu", "Haoran Xu", "Jingjing Liu", "Xianyuan Zhan", "Qing-Shan Jia", "Ya-Qin Zhang"]
publication_types: ["1"]

abstract: Reward function is essential in reinforcement learning (RL), serving as the guiding signal to incentivize agents to solve given tasks, however, is also notoriously difficult to design. In many cases, only imperfect rewards are available, which inflicts substantial performance loss for RL agents. In this study, we propose a unified offline policy optimization approach, _RGM (Reward Gap Minimization)_, which can smartly handle diverse types of imperfect rewards. RGM is formulated as a bi-level optimization problem： the upper layer optimizes a reward correction term that performs visitation distribution matching w.r.t. some expert data; the lower layer solves a pessimistic RL problem with the corrected rewards. By exploiting the duality of the lower layer, we derive a tractable algorithm that enables sampled-based learning without any online interactions. Comprehensive experiments demonstrate that RGM achieves superior performance to existing methods under diverse settings of imperfect rewards. Further, RGM can effectively correct wrong or inconsistent rewards against expert preference and retrieve useful information from biased rewards.



featured: false
publication: "*International Conference on Learning Representations*"
url_pdf: "https://openreview.net/forum?id=WumysvcMvV6"
---

