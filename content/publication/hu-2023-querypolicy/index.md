---
title: "Query-Policy Misalignment in Preference-Based Reinforcement Learning"

date: 2024-01-16

publishDate: 2024-01-17T08:07:44.015394Z

authors: ["Xiao Hu", "Jianxiong Li", "Xianyuan Zhan", "Qing-Shan Jia", "Ya-Qin Zhang"]

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["paper-conference"]

abstract: "Preference-based reinforcement learning (PbRL) provides a natural way to align RL agents’ behavior with human desired outcomes, but is often restrained by costly human feedback. To improve feedback efficiency, most existing PbRL methods focus on selecting queries to maximally improve the overall quality of the reward model, but counter-intuitively, we find that this may not necessarily lead to improved performance. To unravel this mystery, we identify a long-neglected issue in the query selection schemes of existing PbRL studies: Query-Policy Misalignment. We show that the seemingly informative queries selected to improve the overall quality of reward model actually may not align with RL agents’ interests, thus offering little help on policy learning and eventually resulting in poor feedback efficiency. We show that this issue can be effectively addressed via policy-aligned query and a specially designed hybrid experience replay, which together enforce the bidirectional query-policy alignment. Simple yet elegant, our method can be easily incorporated into existing approaches by changing only a few lines of code. We showcase in comprehensive experiments that our method achieves substantial gains in both human feedback and RL sample efficiency, demonstrating the importance of addressing query-policy misalignment in PbRL tasks."

featured: false

publication: "*In 12th International Conference on Learning Representations (ICLR 2024)(spotlight)*"

url_pdf: "https://openreview.net/forum?id=UoBymIwPJR"

projects: 
  - Algorithms  

tags:
  - Algorithms
---

