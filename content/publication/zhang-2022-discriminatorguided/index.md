---
title: "Discriminator-Guided Model-Based Offline Imitation Learning"

date: 2022-09-01

publishDate: 2023-02-21T08:18:52.890346Z

authors: ["Wenjia Zhang", "Haoran Xu", "Haoyi Niu", "Peng Cheng", "Ming Li", "Heming Zhang", "Guyue Zhou", "Xianyuan Zhan"]

publication_types: ["1"]

abstract: "Offline imitation learning (IL) is a powerful method to solve decision-making problems from expert demonstrations without reward labels. Existing offline IL methods suffer from severe performance degeneration under limited expert data due to covariate shift. Including a learned dynamics model can potentially improve the state-action space coverage of expert data, however, it also faces challenging issues like model approximation/generalization errors and suboptimality of rollout data. In this paper, we propose the Discriminator-guided Model-based offline Imitation Learning (DMIL) framework, which introduces a discriminator to simultaneously distinguish the dynamics correctness and suboptimality of model rollout data against real expert demonstrations. DMIL adopts a novel cooperative-yet-adversarial learning strategy, which uses the discriminator to guide and couple the learning process of the policy and dynamics model, resulting in improved model performance and robustness. Our framework can also be extended to the case when demonstrations contain a large proportion of suboptimal data. Experimental results show that DMIL and its extension achieve superior performance and robustness compared to state-of-the-art offline IL methods under small datasets."

featured: false

publication: "*Conference on Robot Learning (CoRL 2022)*"

url_pdf: "https://openreview.net/forum?id=RzhhFh4rkWu"

projects: 
  - Algorithms  
  - Robotics

tags:
  - Algorithms  
  - Robotics
---

