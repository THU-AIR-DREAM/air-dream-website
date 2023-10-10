---
title: "A Policy-Guided Imitation Approach for Offline Reinforcement Learning"

date: 2022-09-15

publishDate: 2023-02-21T08:18:52.889312Z

authors: ["Haoran Xu", "Li Jiang", "Jianxiong Li", "Xianyuan Zhan"]

publication_types: ["1"]

abstract: "Offline reinforcement learning (RL) methods can generally be categorized into two types: RL-based and Imitation-based. RL-based methods could in principle enjoy out-of-distribution generalization but suffer from erroneous off-policy evaluation. Imitation-based methods avoid off-policy evaluation but are too conservative to surpass the dataset. In this study, we propose an alternative approach, inheriting the training stability of imitation-style methods while still allowing logical out-of-distribution generalization. We decompose the conventional reward-maximizing policy in offline RL into a guide-policy and an execute-policy. During training, the guide-poicy and execute-policy are learned using only data from the dataset, in a supervised and decoupled manner. During evaluation, the guide-policy guides the execute-policy by telling where it should go so that the reward can be maximized, serving as the Prophet. By doing so, our algorithm allows state-compositionality from the dataset, rather than action-compositionality conducted in prior imitation-style methods. We dumb this new approach Policy-guided Offline RL (POR). POR demonstrates the state-of-the-art performance on D4RL, a standard benchmark for offline RL. We also highlight the benefits of POR in terms of improving with supplementary suboptimal data and easily adapting to new tasks by only changing the guide-poicy."

featured: false

publication: "*Advances in Neural Information Processing Systems*"

url_pdf: "https://openreview.net/forum?id=CKbqDtZnSc"

url_code: "https://github.com/ryanxhr/POR"

projects: 
  - Algorithms  

tags:
  - Algorithms  
---

