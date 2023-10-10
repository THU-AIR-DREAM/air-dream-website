---
title: "Offline Multi-Agent Reinforcement Learning with Coupled Value Factorization"

date: 2023-01-04

publishDate: 2023-10-09T08:07:44.013392Z

authors: ["Xiangsen Wang", "Xianyuan Zhan"]

publication_types: ["1"]

abstract: "Offline reinforcement learning (RL) that learns policies from offline datasets without environment interaction has received considerable attention in recent years. Compared with the rich literature in the single-agent case, offline multi-agent RL is still a relatively underexplored area. Most existing methods directly apply offline RL ingredients in the multi-agent setting without fully leveraging the decomposable problem structure, leading to less satisfactory performance in complex tasks. We present OMAC, a new Offline Multi-Agent RL algorithm with Coupled value factorization. OMAC adopts a coupled value factorization scheme that decomposes the global value function into local and shared components, and also maintains the credit assignment consistency between the state-value and action-value functions. Moreover, OMAC performs in-sample learning on the decomposed local state-value functions, which implicitly conducts max-Q operation at the local level while avoiding distributional shift caused by evaluating out-of-distribution actions. Based on the comprehensive evaluations of the offline multi-agent StarCraft II micro-management tasks, we demonstrate the superior performance of OMAC over the state-of-the-art offline multi-agent RL methods."

featured: false

publication: "*International Conference on Autonomous Agents and Multiagent Systems 2023 (AAMAS 2023)*"

url_pdf: "https://arxiv.org/pdf/2306.08900.pdf"
---

