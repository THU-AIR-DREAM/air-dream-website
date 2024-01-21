---
title: "Safe Offline Reinforcement Learning with Feasibility-Guided Diffusion Model"

date: 2024-01-16

publishDate: 2024-01-18T08:07:44.015394Z

authors: ["Yinan Zheng", "Jianxiong Li", "Dongjie Yu", "Yujie Yang", "Shengbo Eben Li", "Xianyuan Zhan", "Jingjing Liu"]

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

abstract: "Safe offline reinforcement learning is a promising way to bypass risky online interactions towards safe policy learning. Most existing methods only enforce soft constraints, i.e., constraining safety violations in expectation below thresholds predetermined. This can lead to potentially unsafe outcomes, thus unacceptable in safety-critical scenarios. An alternative is to enforce the hard constraint of zero violation. However, this can be challenging in offline setting, as it needs to strike the right balance among three highly intricate and correlated aspects: safety constraint satisfaction, reward maximization, and behavior regularization imposed by offline datasets. Interestingly, we discover that via reachability analysis of safe-control theory, the hard safety constraint can be equivalently translated to identifying the largest feasible region given the offline dataset. This seamlessly converts the original trilogy problem to a feasibility-dependent objective, i.e., maximizing reward value within the feasible region while minimizing safety risks in the infeasible region. Inspired by these, we propose FISOR (FeasIbility-guided Safe Offline RL), which allows safety constraint adherence, reward maximization, and offline policy learning to be realized via three decoupled processes, while offering strong safety performance and stability. In FISOR, the optimal policy for the translated optimization problem can be derived in a special form of weighted behavior cloning, which can be effectively extracted with a guided diffusion model thanks to its expressiveness. Moreover, we propose a novel energy-guided sampling method that does not require training a complicated time-dependent classifier to simplify the training. We compare FISOR against baselines on DSRL benchmark for safe offline RL. Evaluation results show that FISOR is the only method that can guarantee safety satisfaction in all tasks, while achieving top returns in most tasks."

featured: false

publication: "*In 12th International Conference on Learning Representations (ICLR 2024)*"

url_pdf: "https://openreview.net/forum?id=j5JvZCaDM0"

url_code: "https://github.com/ZhengYinan-AIR/FISOR"

url_project: "https://zhengyinan-air.github.io/FISOR/"

# Custom links (uncomment lines below)
links:
- name: Website
  url: https://zhengyinan-air.github.io/FISOR/

projects: 
  - Algorithms  

tags:
  - Algorithms

# Optional external URL for project (replaces project detail page).
external_link: "https://zhengyinan-air.github.io/FISOR/"
---

