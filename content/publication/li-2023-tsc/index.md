---
title: "A Fully Data-Driven Approach for Realistic Traffic Signal Control Using Offline Reinforcement Learning"

date: 2023-11-27

publishDate: 2024-01-01T21:28:44.013392Z

authors: ["Jianxiong Li", "Shichao Lin", "Tianyu Shi", "Chujie Tian", "Yu Mei", "Jian Song", "Xianyuan Zhan", "Ruimin Li"]

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["article"]

abstract: "The optimization of traffic signal control (TSC) is critical for an efficient transportation system. In recent years, reinforcement learning (RL) techniques have emerged as a popular approach for TSC and show promising results for highly adaptive control. However, existing RL-based methods suffer from notably poor real-world applicability and hardly have any successful deployments. The reasons for such failures are mostly due to the reliance on over-idealized traffic simulators for policy optimization, as well as using unrealistic fine-grained state observations and reward signals that are not directly obtainable from real-world sensors. In this paper, we propose a fully Data-Driven and simulator-free framework for realistic Traffic Signal Control (D2TSC). Specifically, we combine well-established traffic flow theory with machine learning to construct a reward inference model to infer the reward signals from coarse-grained traffic data. With the inferred rewards, we further propose a sample-efficient offline RL method to enable direct signal control policy learning from historical offline datasets of real-world intersections. To evaluate our approach, we collect historical traffic data from a real-world intersection, and develop a highly customized simulation environment that strictly follows real data characteristics. We demonstrate through extensive experiments that our approach achieves superior performance over conventional and offline RL baselines, and also enjoys much better real-world applicability."

featured: false

publication: ""

url_pdf: "https://arxiv.org/abs/2311.15920"

url_code: ""

projects: 
  - Algorithms  
  - AIoT

tags:
  - Algorithms 
  - AIoT
---

