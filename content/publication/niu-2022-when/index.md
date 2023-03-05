---
title: "When to Trust Your Simulator: Dynamics-Aware Hybrid Offline-and-Online Reinforcement Learning"
date: 2022-01-01
publishDate: 2023-02-21T08:18:52.889830Z
authors: ["Haoyi Niu", "Shubham Sharma", "Yiwen Qiu", "Ming Li", "Guyue Zhou", "Jianming HU", "Xianyuan Zhan"]
publication_types: ["1"]
abstract: "Learning effective reinforcement learning (RL) policies to solve real-world complex tasks can be quite challenging without a high-fidelity simulation environment. In most cases, we are only given imperfect simulators with simplified dynamics, which inevitably lead to severe sim-to-real gaps in RL policy learning. The recently emerged field of offline RL provides another possibility to learn policies directly from pre-collected historical data. However, to achieve reasonable performance, existing offline RL algorithms need impractically large offline data with sufficient state-action space coverage for training. This brings up a new question: is it possible to combine learning from limited real data in offline RL and unrestricted exploration through imperfect simulators in online RL to address the drawbacks of both approaches? In this study, we propose the Dynamics-Aware Hybrid Offline-and-Online Reinforcement Learning (H2O) framework to provide an affirmative answer to this question. H2O introduces a dynamics-aware policy evaluation scheme, which adaptively penalizes the Q function learning on simulated state-action pairs with large dynamics gaps, while also simultaneously allowing learning from a fixed real-world dataset. Through extensive simulation and real-world tasks, as well as theoretical analysis, we demonstrate the superior performance of H2O against other cross-domain online and offline RL algorithms. H2O provides a brand new hybrid offline-and-online RL paradigm, which can potentially shed light on future RL algorithm design for solving practical real-world tasks."
featured: false
publication: "*Advances in Neural Information Processing Systems*"
url_pdf: "https://openreview.net/forum?id=zXE8iFOZKw"
url_code: 'https://github.com/t6-thu/H2O'
---

