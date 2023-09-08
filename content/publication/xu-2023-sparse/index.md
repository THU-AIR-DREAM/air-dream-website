---
title: "Offline RL with No OOD Actions: In-Sample Learning via Implicit Value Regularization"

date: 2023-02-02

publishDate: 2023-02-21T06:14:15.890456Z

authors: ["Haoran Xu", "Li Jiang", "Jianxiong Li", "Zhuoran Yang", "Zhaoran Wang", "Victor Wai Kin Chan", "Xianyuan Zhan"]

publication_types: ["1"]

abstract: Most offline reinforcement learning (RL) methods suffer from the trade-off between improving the policy to surpass the behavior policy and constraining the policy to limit the deviation from the behavior policy as computing Q-values using out-of-distribution (OOD) actions will suffer from errors due to distributional shift. The recent proposed In-sample Learning paradigm (i.e., IQL), which improves the policy by quantile regression using only data samples, shows great promise because it learns an optimal policy without querying the value function of any unseen actions. However, it remains unclear how this type of method handles the distributional shift in learning the value function. In this work, we make a key finding that the in-sample learning paradigm arises under the Implicit Value Regularization (IVR) framework. This gives a deeper understanding of why the in-sample learning paradigm works, i.e., it applies implicit value regularization to the policy. Based on the IVR framework, we further propose two practical algorithms, Sparse Q-learning (SQL) and Exponential Q-learning (EQL), which adopt the same value regularization used in existing works, but in a complete in-sample manner. Compared with IQL, we find that our algorithms introduce sparsity in learning the value function, making them more robust in noisy data regimes. We also verify the effectiveness of SQL and EQL on D4RL benchmark datasets and show the benefits of in-sample learning by comparing them with CQL in small data regimes. 

# Summary. An optional shortened abstract.
summary: Based on the IVR framework, we further propose two practical algorithms, Sparse Q-learning (SQL) and Exponential Q-learning (EQL), which adopt the same value regularization used in existing works, but in a complete in-sample manner.

publication: "*International Conference on Learning Representations*"

url_pdf: "https://openreview.net/forum?id=ueYYgo2pSSU"

url_code: "https://github.com/ryanxhr/IVR"

# Display this page in the Featured widget?
featured: true

# Cover image
# To use, place an image named `featured.jpg/png` in your page's folder.
# Otherwise, specify the `filename` option to load an image from your `assets/media/` folder.
# Placement options: 1 = Full column width, 2 = Out-set, 3 = Screen-width
# Focal point options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
# Set `preview_only` to `true` to just use the image for thumbnails.
image:
  placement: 1
  caption: ""
  focal_point: "Smart"
  preview_only: false
  alt_text:
  # filename: my-image.jpg  # Uncomment to load an image from `assets/media/` instead.
  
# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: 
  - example
  
researches:
  - example
  
tags: 
  - research

---

