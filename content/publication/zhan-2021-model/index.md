---
title: "Model-Based Offline Planning with Trajectory Pruning"
date: 2022-01-01
publishDate: 2023-02-21T08:18:52.891397Z
authors: ["Xianyuan Zhan", "Xiangyu Zhu", "Haoran Xu"]
publication_types: ["1"]
abstract: "Offline reinforcement learning (RL) enables learning policies using pre-collected datasets without environment interaction, which provides a promising direction to make RL usable in real-world systems. Although recent offline RL studies have achieved much progress, existing methods still face many practical challenges in real-world system control tasks, such as computational restriction during agent training and the requirement of extra control flexibility. Model-based planning framework provides an attractive solution for such tasks. However, most model-based planning algorithms are not designed for offline settings. Simply combining the ingredients of offline RL with existing methods either provides over-restrictive planning or leads to inferior performance. We propose a new light-weighted model-based offline planning framework, namely MOPP, which tackles the dilemma between the restrictions of offline learning and high-performance planning. MOPP encourages more aggressive trajectory rollout guided by the behavior policy learned from data, and prunes out problematic trajectories to avoid potential out-of-distribution samples. Experimental results show that MOPP provides competitive performance compared with existing model-based offline planning and RL approaches."
featured: false
publication: "*International Joint Conference on Artificial Intelligence*"
url_pdf: "https://www.ijcai.org/proceedings/2022/0516.pdf"
url_code: 'https://github.com/zhanzxy5/MOPP'
---

