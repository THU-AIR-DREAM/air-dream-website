---
title: "Are Expressive Models Truly Necessary for Offline RL?"

date: 2024-12-13

publishDate: 2024-12-13T07:36:05.899594Z

authors: ["Guan Wang", "Haoyi Niu", "Jianxiong Li", "Li Jiang", "Jianming HU", "Xianyuan Zhan"]

author_notes:
- "Equal contribution"
- "Equal contribution"

publication_types: ["paper-conference"]

abstract: "Among various branches of offline reinforcement learning (RL) methods, goal-conditioned supervised learning (GCSL) has gained increasing popularity as it formulates the offline RL problem as a sequential modeling task, therefore bypassing the notoriously difficult credit assignment challenge of value learning in conventional RL paradigm. Sequential modeling, however, requires capturing accurate dynamics across long horizons in trajectory data to ensure reasonable policy performance. To meet this requirement, leveraging large, expressive models has become a popular choice in recent literature, which, however, comes at the cost of significantly increased computation and inference latency. Contradictory yet promising, we reveal that lightweight models as simple as shallow 2-layer MLPs, can also enjoy accurate dynamics consistency and significantly reduced sequential modeling errors against large expressive models by adopting a simple recursive planning scheme: recursively planning coarse-grained future sub-goals based on current and target information, and then executes the action with a goal-conditioned policy learned from data relabeled with these sub-goals. We term our method as Recursive Skip-Step Planning (RSP). Simple yet effective, RSP enjoys great efficiency improvements thanks to its lightweight structure, and substantially outperforms existing methods, reaching new SOTA performances on the D4RL benchmark, especially in multi-stage long-horizon tasks."

featured: false

publication: "*The 39th Annual AAAI Conference on Artificial Intelligence (AAAI) (oral) (This paper is also accepted in NeurIPS 2024 Workshop on Open-World Agents (OWA))*"

url_pdf: "https://openreview.net/forum?id=19KvVggjVr"

url_code: "https://github.com/imoneoi/RSP_JAX"

projects: 
    - Algorithms
    - Robotics

tags:
    - Algorithms
    - Robotics
---

