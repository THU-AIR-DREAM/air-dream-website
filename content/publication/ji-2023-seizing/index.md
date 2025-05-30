---
title: "Seizing Serendipity: Exploiting the Value of Past Success in Off-Policy Actor-Critic"

date: 2024-02-17

publishDate: 2024-02-17T08:07:44.014393Z

authors: ["Tianying Ji", "Yu Luo", "Fuchun Sun", "Xianyuan Zhan", "Jianwei Zhang", "Huazhe Xu"]

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["paper-conference"]

abstract: "Learning high-quality Q-value functions plays a key role in the success of many modern off-policy deep reinforcement learning (RL) algorithms. Previous works focus on addressing the value overestimation issue, an outcome of adopting function approximators and off-policy learning. Deviating from the common viewpoint, we observe that Q-values are indeed underestimated in the latter stage of the RL training process, primarily related to the use of inferior actions from the current policy in Bellman updates as compared to the more optimal action samples in the replay buffer. We hypothesize that this long-neglected phenomenon potentially hinders policy learning and reduces sample efficiency. Our insight to address this issue is to incorporate sufficient exploitation of past successes while maintaining exploration optimism. We propose the Blended Exploitation and Exploration (BEE) operator, a simple yet effective approach that updates Q-value using both historical best-performing actions and the current policy. The instantiations of our method in both model-free and model-based settings outperform state-of-the-art methods in various continuous control tasks and achieve strong performance in failure-prone scenarios and real-world robot tasks."

featured: false

publication: "*In the 41st International Conference on Machine Learning (ICML 2024)*"

url_pdf: "https://openreview.net/pdf/8ae24c4cb660d3ec4cf3df2602d7dee1f356480a.pdf"

links:
- name: Website
  url: https://beeauthors.github.io/

projects: 
  - Algorithms  

tags:
  - Algorithms
---

