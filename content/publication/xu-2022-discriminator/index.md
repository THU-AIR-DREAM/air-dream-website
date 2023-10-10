---
title: "Discriminator-Weighted Offline Imitation Learning from Suboptimal Demonstrations"

date: 2022-05-15

publishDate: 2023-02-21T08:18:52.890858Z

authors: ["Haoran Xu", "Xianyuan Zhan", "Honglei Yin", "Huiling Qin"]

publication_types: ["1"]

abstract: "We study the problem of offline Imitation Learning (IL) where an agent aims to learn an optimal expert behavior policy without additional online environment interactions. Instead, the agent is provided with a static offline dataset of state-action-next state transition triples from both optimal and non-optimal expert behaviors. This strictly offline imitation learning problem arises in many real-world problems, where environment interactions and expert annotations are costly. Prior works that address the problem either require that expert data occupies the majority proportion of the offline dataset, or need to learn a reward function and perform offline reinforcement learning (RL) based on the learned reward function. In this paper, we propose an imitation learning algorithm to address the problem without additional steps of reward learning and offline RL training for the case when demonstrations containing large-proportion of suboptimal data. Built upon behavioral cloning (BC), we introduce an additional discriminator to distinguish expert and non-expert data, we propose a cooperation strategy to boost the performance of both tasks, this will result in a new policy learning objective and surprisingly, we find its equivalence to a generalized BC objective, where the outputs of discriminator serve as the weights of the BC loss function. Experimental results show that the proposed algorithm can learn behavior policies that are much closer to the optimal policies than policies learned by baseline algorithms."

featured: false

publication: "*International Conference on Machine Learning (ICML 2022)*"

url_pdf: "https://proceedings.mlr.press/v162/xu22l/xu22l.pdf"

url_code: "https://github.com/ryanxhr/DWBC"

projects: 
  - Algorithms  

tags:
  - Algorithms  
---

