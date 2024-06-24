---
title: "DecisionNCE: Embodied Multimodal Representations via Implicit Preference Learning"

date: 2024-02-28

publishDate: 2024-02-28T08:43:06.102703Z

authors: ["Jianxiong Li", "Jinliang Zheng", "Yinan Zheng", "Liyuan Mao", "Xiao Hu", "Sijie Cheng", "Haoyi Niu", "Jihao Liu", "Yu Liu", "Jingjing Liu", " others"]

author_notes:
- "Equal contribution"
- "Equal contribution"
- "Equal contribution"

publication_types: ["paper-conference"]

abstract: "Multimodal pretraining has emerged as an effective strategy for the trinity of goals of representation learning in autonomous robots: 1) extracting both local and global task progression information; 2) enforcing temporal consistency of visual representation; 3) capturing trajectory-level language grounding. Most existing methods approach these via separate objectives, which often reach sub-optimal solutions. In this paper, we propose a universal unified objective that can simultaneously extract meaningful task progression information from image sequences and seamlessly align them with language instructions. We discover that via implicit preferences, where a visual trajectory inherently aligns better with its corresponding language instruction than mismatched pairs, the popular Bradley-Terry model can transform into representation learning through proper reward reparameterizations. The resulted framework, DecisionNCE, mirrors an InfoNCE-style objective but is distinctively tailored for decision-making tasks, providing an embodied representation learning framework that elegantly extracts both local and global task progression features, with temporal consistency enforced through implicit time contrastive learning, while ensuring trajectory-level instruction grounding via multimodal joint encoding. Evaluation on both simulated and real robots demonstrates that DecisionNCE effectively facilitates diverse downstream policy learning tasks, offering a versatile solution for unified representation and reward learning."

featured: false

publication: "*Forty-first International Conference on Machine Learning (ICML 2024)*"

url_pdf: "https://arxiv.org/pdf/2402.18137"

url_code: "https://github.com/2toinf/DecisionNCE"

#url_video: "https://2toinf.github.io/DecisionNCE/assets/web/teaser.mp4"

links:
- name: Website
  url: https://2toinf.github.io/DecisionNCE/

projects: 
  - Algorithms  

tags:
  - Algorithms 

images:
  - url: https://2toinf.github.io/DecisionNCE/assets/web/teaser.mp4

---
{{< video src="https://2toinf.github.io/DecisionNCE/assets/web/teaser.mp4" >}}
