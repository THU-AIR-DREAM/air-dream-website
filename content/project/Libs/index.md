---
#draft: true
title: Tools & Libraries
summary:  Tools & software libraries for data-driven decision-making problems.
tags:
  - Libs
date: '2023-10-01T00:00:00Z'

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
[Data-Driven Control Lib (D2C)](https://github.com/AIR-DI/D2C) is a library for data-driven decision-making & control based on state-of-the-art offline reinforcement learning (RL), offline imitation learning (IL), and offline planning algorithms. It is a platform for solving various decision-making & control problems in real-world scenarios. D2C is designed to offer fast and convenient algorithm performance development and testing, as well as providing easy-to-use toolchains to accelerate the real-world deployment of SOTA data-driven decision-making methods.

The current supported offline RL/IL algorithms include (**more to come**):

- [Twin Delayed DDPG with Behavior Cloning (TD3+BC)](https://arxiv.org/pdf/2106.06860.pdf)
- [Distance-Sensitive Offline Reinforcement Learning (DOGE)](https://arxiv.org/abs/2205.11027.pdf)
- [Dynamics-Aware Hybrid Offline-and-Online Reinforcement Learning (H2O)](https://arxiv.org/abs/2206.13464.pdf)
- [Sparse Q-learning (SQL)](https://arxiv.org/abs/2303.15810)
- [Policy-guided Offline RL (POR)](https://arxiv.org/abs/2210.08323)
- [Offline Reinforcement Learning with Implicit Q-Learning (IQL)](https://arxiv.org/pdf/2110.06169.pdf)
- [Discriminator-Guided Model-Based Offline Imitation Learning (DMIL)](https://arxiv.org/abs/2207.00244)
- [Behavior Cloning (BC)](http://www.cse.unsw.edu.au/~claude/papers/MI15.pdf)

Features:
  - D2C includes a large collection of offline RL and IL algorithms: model-free and model-based offline RL/IL algorithms, as well as planning methods. 
  - D2C is highly modular and extensible. You can easily build custom algorithms and conduct experiments with it.
  - D2C automates the development process in real-world control applications. It simplifies the steps of problem definition/mathematical formulation, policy training, policy evaluation and model deployment.

Library Information:
  - The library is available in [https://github.com/AIR-DI/D2C](https://github.com/AIR-DI/D2C).
  - The tutorials and API documentation are hosted on [air-d2c.readthedocs.io](https://air-d2c.readthedocs.io/).

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

