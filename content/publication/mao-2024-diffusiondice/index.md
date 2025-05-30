---
title: "Diffusion-DICE: In-Sample Diffusion Guidance for Offline Reinforcement Learning"

date: 2024-09-26

publishDate: 2024-01-19T08:07:44.015394Z

authors: ["Liyuan Mao", "Haoran Xu", "Weinan Zhang", "Xianyuan Zhan", "Amy Zhang"]

author_notes:
- "Equal contribution"
- "Equal contribution"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["paper-conference"]

abstract: "One important property of DIstribution Correction Estimation (DICE) methods is that the solution is the optimal stationary distribution ratio between the optimized and data collection policy. In this work, we show that DICE-based methods can be viewed as a transformation from the behavior distribution to the optimal policy distribution. Based on this, we propose a novel approach, Diffusion-DICE, that directly performs this transformation using diffusion models. We find that the optimal policy's score function can be decomposed into two terms: the behavior policy's score function and the gradient of a guidance term which depends on the optimal distribution ratio. The first term can be obtained from a diffusion model trained on the dataset and we propose an in-sample learning objective to learn the second term. Due to the multi-modality contained in the optimal policy distribution, the transformation in Diffusion-DICE may guide towards those local-optimal modes. We thus generate a few candidate actions and carefully select from them to approach global-optimum. Different from all other diffusion-based offline RL methods, the guide-then-select paradigm in Diffusion-DICE only uses in-sample actions for training and brings minimal error exploitation in the value function. We use a didatic toycase example to show how previous diffusion-based methods fail to generate optimal actions due to leveraging these errors and how Diffusion-DICE successfully avoids that. We then conduct extensive experiments on benchmark datasets to show the strong performance of Diffusion-DICE."

featured: false

publication: "*In the Thirty-Eighth Conference on Neural Information Processing Systems (NeurIPS 2024)*"

url_pdf: "https://proceedings.neurips.cc/paper_files/paper/2024/file/b2fea79b1137d917e8b7cce9434ab5fa-Paper-Conference.pdf"

url_code: "https://github.com/maoliyuan/diffusion-DICE-Pytorch"

links:
- name: Website
  url: https://ryanxhr.github.io/Diffusion-DICE/

url_project: ""

projects: 
  - Algorithms  

tags:
  - Algorithms

image:
  placement: 1
  caption: ""
  focal_point: "Smart"
  preview_only: false
  alt_text:
---


