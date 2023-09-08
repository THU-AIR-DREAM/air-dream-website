---
#draft: true
title: Tools & Libraries
summary:  Tools & software libraries for data-driven decision-making problems.
tags:
  - Libs
date: '2021-04-27T00:00:00Z'

# Optional external URL for project (replaces project detail page).
external_link: ''

image:
  caption: Photo by rawpixel on Unsplash
  focal_point: Smart

# links:
#   - icon: twitter
#     icon_pack: fab
#     name: Follow
#     url: https://twitter.com/georgecushen
# url_code: ''
# url_pdf: ''
# url_slides: ''
# url_video: ''

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
# slides: example
---

We provide open code implementations for most of our research, please check our papers for related codes. In addition, we aim to develop easy-to-use and comprehensive algorithm libraries and tools to accelerate the real-world deployment of advanced data-driven decision-making methods.

## Data-Drivien Decision-Making Libraries / Tools
- [Data-Driven Control Lib (D2C)](https://github.com/AIR-DI/D2C): is a data-driven decision-making algorithm library designed for solving real-world control/optimization problems. It implements a series of advanced offline RL/IL algorithms and provide easy-to-use tools & utilities to facilitate real-world deployment. 

## Online RL library
- [OneRL](https://github.com/imoneoi/onerl): Event-driven fully distributed reinforcement learning framework proposed in "A Versatile and Efficient Reinforcement Learning Approach for Autonomous Driving" (https://arxiv.org/abs/2110.11573) that can facilitate highly efficient policy learning in RL-based tasks.

  - Super fast RL training! (15~30min for MuJoCo & Atari on single machine)
  - State-of-the-art performance
  - Scheduled and pipelined sample collection
  - Completely lock-free execution
  - Fully distributed architecture
  - Full profiling & overhead identification tools 
  - Online visualization & rendering
  - Support multi-GPU parallel training
  - Support exporting trained policy to ONNX for faster inference & deployment

