---
title: "Sparse Q-Learning: Offline Reinforcement Learning with Implicit Value Regularization"
date: 2023-01-01
publishDate: 2023-02-21T06:14:15.890456Z
authors: ["Haoran Xu", "Li Jiang", "Jianxiong Li", "Zhuoran Yang", "Zhaoran Wang", "Victor Wai Kin Chan", "Xianyuan Zhan"]
publication_types: ["1"]
abstract: "Most offline reinforcement learning (RL) methods suffer from the trade-off between improving the policy to surpass the behavior policy and constraining the policy to limit the deviation from the behavior policy as computing Q-values using out-of-distribution (OOD) actions will suffer from errors due to distributional shift. The recent proposed In-sample Learning paradigm (i.e., IQL), which improves the policy by quantile regression using only data samples, shows great promise because it learns an optimal policy without querying the value function of any unseen actions. However, it remains unclear how this type of method handles the distributional shift in learning the value function. In this work, we make a key finding that the in-sample learning paradigm arises under the Implicit Value Regularization (IVR) framework. This gives a deeper understanding of why the in-sample learning paradigm works, i.e., it applies implicit value regularization to the policy. Based on the IVR framework, we further propose two practical algorithms, Sparse Q-learning (SQL) and Exponential Q-learning (EQL), which adopt the same value regularization used in existing works, but in a complete in-sample manner. Compared with IQL, we find that our algorithms introduce sparsity in learning the value function, making them more robust in noisy data regimes. We also verify the effectiveness of SQL and EQL on D4RL benchmark datasets and show the benefits of in-sample learning by comparing them with CQL in small data regimes. Code is available at https://github.com/ryanxhr/IVR."
featured: false
publication: "*International Conference on Learning Representations*"
url_pdf: "https://openreview.net/forum?id=ueYYgo2pSSU"
url_code: 'https://github.com/ryanxhr/IVR'

NOTE: Nothing here on the homepage
# Display this page in the Featured widget?
featured: true

---

