---
title: "X-VLA: Soft-Prompted Transformer as Scalable Cross-Embodiment Vision-Language-Action Model"

date: 2025-10-16

publishDate: 2025-10-15T00:00:00Z

authors: ["Jinliang Zheng", "Jianxiong Li", "Zhihao Wang", "Dongxiu Liu", "Xirui Kang", "Yuchun Feng", "Yinan Zheng", "Jiayin Zou", "Yilun Chen", "Jia Zeng", "Ya-Qin Zhang", "Jiangmiao Pang", "Jingjing Liu", "Tai Wang", "Xianyuan Zhan"]

author_notes:
- "Equal contribution"
- "Equal contribution"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["article"]

abstract: "Successful generalist Vision-Language-Action (VLA) models rely on effective training across diverse robotic platforms with large-scale, cross-embodiment, heterogeneous datasets. To facilitate and leverage the heterogeneity in rich, diverse robotic data sources, we propose a novel Soft Prompt approach with minimally added parameters, by infusing prompt learning concepts into cross-embodiment robot learning and introducing separate sets of learnable embeddings for each distinct data source. These embeddings serve as embodiment-specific prompts, which in unity empower VLA models with effective exploitation of varying cross-embodiment features. Our new X-VLA, a neat flow-matching-based VLA architecture, relies exclusively on soft-prompted standard Transformer encoders, enjoying both scalability and simplicity. Evaluated across 6 simulations as well as 3 real-world robots, our 0.9B instantiation-X-VLA-0.9B simultaneously achieves SOTA performance over a sweep of benchmarks, demonstrating superior results on a wide axes of capabilities, from flexible dexterity to quick adaptation across embodiments, environments, and tasks. Website: https://thu-air-dream.github.io/X-VLA/."

featured: false

publication: ""

url_pdf: "https://arxiv.org/abs/2510.10274"

url_code: "https://github.com/2toinf/X-VLA"

links:
- name: Website
  url: https://thu-air-dream.github.io/X-VLA/

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
## **Other information**
- X-VLA has won **First Place** in the [AGIBOT World Challenge (Manipulation track) @ IROS 2025](https://agibot-world.com/challenge)!

{{< video src="https://thu-air-dream.github.io/X-VLA/sources/demo.mp4" >}}

