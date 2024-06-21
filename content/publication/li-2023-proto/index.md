---
title: "PROTO: Iterative Policy Regularized Offline-to-Online Reinforcement Learning"

date: 2023-05-25

publishDate: 2023-10-09T08:07:44.015394Z

authors: ["Jianxiong Li", "Xiao Hu", "Haoran Xu", "Jingjing Liu", "Xianyuan Zhan", "Ya-Qin Zhang"]

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

abstract: "Offline-to-online reinforcement learning (RL), by combining the benefits of offline pretraining and online finetuning, promises enhanced sample efficiency and policy performance. However, existing methods, effective as they are, suffer from suboptimal performance, limited adaptability, and unsatisfactory computational efficiency. We propose a novel framework, PROTO, which overcomes the aforementioned limitations by augmenting the standard RL objective with an iteratively evolving regularization term. Performing a trust-region-style update, PROTO yields stable initial finetuning and optimal final performance by gradually evolving the regularization term to relax the constraint strength. By adjusting only a few lines of code, PROTO can bridge any offline policy pretraining and standard off-policy RL finetuning to form a powerful offline-to-online RL pathway, birthing great adaptability to diverse methods. Simple yet elegant, PROTO imposes minimal additional computation and enables highly efficient online finetuning. Extensive experiments demonstrate that PROTO achieves superior performance over SOTA baselines, offering an adaptable and efficient offline-to-online RL framework."

featured: false

publication: ""

url_pdf: "https://arxiv.org/abs/2305.15669"

projects: 
  - Algorithms  

tags:
  - Algorithms
---

