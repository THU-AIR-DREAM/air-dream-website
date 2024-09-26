---
title: "Instruction-Guided Visual Masking"

date: 2024-09-26

publishDate: 2024-05-30T08:43:06.104239Z

authors: ["Jinliang Zheng", "Jianxiong Li", "Sijie Cheng", "Yinan Zheng", "Jiaming Li", "Jihao Liu", "Yu Liu", "Jingjing Liu", "Xianyuan Zhan"]

author_notes:
- "Equal contribution"
- "Equal contribution"

publication_types: ["paper-conference"]

abstract: "Instruction following is crucial in contemporary LLM. However, when extended to multimodal setting, it often suffers from misalignment between specific textual instruction and targeted local region of an image. To achieve more accurate and nuanced multimodal instruction following, we introduce Instruction-guided Visual Masking (IVM), a new versatile visual grounding model that is compatible with diverse multimodal models, such as LMM and robot model. By constructing visual masks for instruction-irrelevant regions, IVM-enhanced multimodal models can effectively focus on task-relevant image regions to better align with complex instructions. Specifically, we design a visual masking data generation pipeline and create an IVM-Mix-1M dataset with 1 million image-instruction pairs. We further introduce a new learning technique, Discriminator Weighted Supervised Learning (DWSL) for preferential IVM training that prioritizes high-quality data samples. Experimental results on generic multimodal tasks such as VQA and embodied robotic control demonstrate the versatility of IVM, which as a plug-and-play tool, significantly boosts the performance of diverse multimodal models, yielding new state-of-the-art results across challenging multimodal benchmarks. "

featured: false

publication: "*In the Thirty-Eighth Conference on Neural Information Processing Systems (NeurIPS 2024) (Outstanding paper award of ICML 2024 MFM-EAI Workshop)*"

url_pdf: "https://arxiv.org/abs/2405.19783"

url_code: "https://github.com/2toinf/IVM"

# Custom links (uncomment lines below)
links:
- name: Website
  url: https://2toinf.github.io/IVM/

projects: 
  - Algorithms  
  - Robotics

tags:
  - Algorithms
  - Robotics

image:
  placement: 1
  caption: ""
  focal_point: "Smart"
  preview_only: false
  alt_text:
---

