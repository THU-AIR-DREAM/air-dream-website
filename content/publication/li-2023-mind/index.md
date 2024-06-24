---
title: "Mind the Gap: Offline Policy Optimization for Imperfect Rewards"

date: 2023-01-21

publishDate: 2023-02-21T06:14:15.889896Z

authors: ["Jianxiong Li", "Xiao Hu", "Haoran Xu", "Jingjing Liu", "Xianyuan Zhan", "Qing-Shan Jia", "Ya-Qin Zhang"]

publication_types: ["paper-conference"]

abstract: "This paper proposes an offline policy optimization approach for imperfect rewards. Abstract: Reward function is essential in reinforcement learning (RL), serving as the guiding signal to incentivize an agent to solve a given task. However, reward function is notoriously difficult to design or even approximate. In many cases, only a sub-par reward function can be obtained, sometimes even with zero reward signal, which often inflicts substantial performance loss or stringent restrictive requirements on expert demonstrations. In this study, we propose a unified offline policy optimization approach, \textit{RGM} (Reward Gap Minimization), which can smartly handle diverse types of imperfect rewards. RGM is formulated as a bi-level optimization problem: the upper layer optimizes a reward correction term that performs state-action visitation distribution matching w.r.t. a small set of expert data; and the lower layer solves a pessimistic RL problem with the corrected rewards. By exploiting the duality of the lower level problem, we derive a tractable algorithm that enables sampled-based learning without any online interactions. Comprehensive experiments demonstrate that RGM achieves superior performance to existing methods under diverse settings of imperfect rewards. Further, RGM can effectively correct wrong or inconsistent rewards against expert preference, as well as retrieving useful information from biased rewards."

featured: false

publication: "*International Conference on Learning Representations*"

url_pdf: "https://openreview.net/forum?id=WumysvcMvV6"

projects: 
  - Algorithms  

tags:
  - Algorithms  
---

