---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:
  - block: hero
    id: home
    content:
#      title: DREAM
      image:
        filename: hero-robot-head-s.png
      text: |- 
        <div class="dream-hero-copy">
          <span class="dream-eyebrow">Tsinghua AIR · Beijing</span>
          <h1>AIR-DREAM <span>Lab</span></h1>
          <p class="dream-hero-tagline">Decision intelligence, built for the real world.</p>
          <p class="dream-hero-summary"><span>AIR-DREAM develops learning-based, data-driven decision-making</span><span>methods that are robust, generalizable, and ready for deployment.</span></p>
          <div class="dream-topics" aria-label="Research areas">
            <span>Decision-making AI</span>
            <span>Embodied Intelligence</span>
            <span>AI for Systems</span>
          </div>
          <div class="dream-hero-actions">
            <a class="dream-button dream-button-primary" href="#researches">Explore our research <span aria-hidden="true">&rarr;</span></a>
            <a class="dream-button dream-button-secondary" href="#people">Meet the team</a>
          </div>
          <p class="dream-affiliation">A research group at the <a href="https://air.tsinghua.edu.cn/en/">Institute for AI Industry Research (AIR)</a>, Tsinghua University.</p>
        </div>
    design:
      background:
#        gradient_start: '#5882FA'
#        gradient_end: '#2E64FE'
#        gradient_angle: 180
#        text_color_light: true
          image:
              # Name of image in `assets/media/`.
              filename: air-dream.jpg
              # Apply image filters?
              filters:
                # Darken the image? Range 0-1 where 1 is transparent and 0 is opaque.
                brightness: 1
              # Image fit. Options are `cover` (default), `contain`, or `actual` size.
              size: cover
              # Image focal point. Options include `left`, `center` (default), or `right`.
              position: center
              # Use a fun parallax-like fixed background effect on desktop? true/false
              parallax: true
          text_color_light: false
      spacing:
        # Customize the section spacing. Order is top, right, bottom, left.
        padding: ["80px", "0", "60px", "0"]
#  - block: markdown
#    content:
#      title: DREAM
#      text: |-
#        <!-- DREAM团队的研究方向是探索如何在决策制定中应用强大的人工智能方法。我们致力于提高AI技术的应用能力，使其能够更好地服务于现实生活和产业界的决策需求。-->
#
#        DREAM focuses on research related to decision-making in the field of artificial intelligence. 
#        
#        The team aims to empower Al methods to address real-world problems and challenges.
#    design: 
#      columns: '1'
#      background:
#        image:
#          # Name of image in `assets/media/`.
#          filename: air-dream.jpg
#          # Apply image filters?
#          filters:
#            # Darken the image? Range 0-1 where 1 is transparent and 0 is opaque.
#            brightness: 1
#          #  Image fit. Options are `cover` (default), `contain`, or `actual` size.
#          size: cover
#          # Image focal point. Options include `left`, `center` (default), or `right`.
#          position: center
#          # Use a fun parallax-like fixed background effect on desktop? true/false
#          parallax: true
#          # Text color (true=light, false=dark, or remove for the dynamic theme color).
#          text_color_light: true
  - block: markdown
    id: news
    content:
      title: News
      text: |-

        - **Aug. 2026**: Our latest works ["ODEWorld: A Continuous Predictive Architecture via Physical-Time Flow"](https://github.com/Dstate/ODEWorld), ["Horizon Adaptive Offline Policy Learning via Value Stitching"](https://github.com/Whiterrrrr/value-stitching) have been open-sourced! Please take a look!

        - **Jan. 2026**: Our four recent papers [“X-VLA: Soft-Prompted Transformer as Scalable Cross-Embodiment Vision-Language-Action Model”](./publication/zheng-2025-xvla), [“Dichotomous Diffusion Policy Optimization”](./publication/liang-2026-dipole), [“Sample Efficient Offline RL via T-Symmetry Enforced Latent State-Stitching”](./publication/cheng-2026-tels), and [“Discrete Diffusion for Reflective Vision-Language-Action Models in Autonomous Driving”](./publication/li-2026-discrete) have been accepted in ICLR 2026!

        - **Oct. 2025**: Our [X-VLA](./publication/zheng-2025-xvla) has won **First Place** in the [AGIBOT World Challenge (Manipulation track) @ IROS 2025](https://agibot-world.com/challenge)!

        - **Oct. 2025**: We have released ["X-VLA: Soft-Prompted Transformer as Scalable Cross-Embodiment Vision-Language-Action Model"](./publication/zheng-2025-xvla)! A lightweight yet scalable cross-embodiment VLA model that achieve SOTA performance over all mainstream embodied AI benchmarks! Project page available at https://thu-air-dream.github.io/X-VLA/.

        - **Sep. 2025**: Our three recent papers [“Flow Matching-Based Autonomous Driving Planning with Advanced Interactive Behavior Modeling”](./publication/tan-2025-flow), [“Towards Robust Zero-Shot Reinforcement Learning”](./publication/zheng-2025-towards), and [“Uni-RL: Unifying Online and Offline RL via Implicit Value Regularization”](./publication/xu-2025-unified) have been accepted in NeurIPS 2025!
        
        - **May. 2025**: Our recent paper [“Efficient Robotic Policy Learning via Latent Space Backward Planning”](./publication/liu-2025-lbp/) has been accepted in ICML 2025!

        - **Feb. 2025**: Our recent paper [“Universal Actions for Enhanced Embodied Foundation Models”](./publication/zheng-2025-universal/) has been accepted in CVPR 2025! It enables learning universal actions to power **any** robotic embodiment, physical meaning, and control interfaces! Project page available at https://2toinf.github.io/UniAct/.

        - **Jan. 2025**: Our two recent papers [“Robo-MUTUAL: Robotic Multimodal Task Specification via Unimodal Learning”](./publication/li-2025-robo/) and [“H2O+: An Improved Framework for Hybrid Offline-and-Online RL with Dynamics Gaps”](./publication/niu-2023-h-2-o/) have been accepted in ICRA 2025!

        - **Jan. 2025**: Our three recent papers [“Data Center Cooling System Optimization Using Offline Reinforcement Learning”](./publication/zhan-2025-data/), [“Diffusion-Based Planning for Autonomous Driving with Flexible Guidance”](./publication/zheng-2025-diffusion/), and [“Skill Expansion and Composition in Parameter Space”](./publication/liu-2025-skill/) have been accepted in ICLR 2025!

        :fire: **We are hiring:** Our team is looking for student interns/postdocs at [AIR](https://air.tsinghua.edu.cn/)! If you are interested in the research directions of **real-world RL/IL, AI alignment/AI safety, embodied AI**, and **decision-making in autonomous driving**, please feel free to contact us!

# - **Dec. 2024**: Our recent paper [“Are Expressive Models Truly Necessary for Offline RL?”](./publication/wang-niu-2024-rsp) has been accepted as an **oral paper** in AAAI 2025!

# - **Sep. 2024**: Our two recent papers [“Instruction-Guided Visual Masking”](./publication/zheng-2024-instructionguided) and [“Diffusion-DICE: In-Sample Diffusion Guidance for Offline Reinforcement Learning”](./publication/mao-2024-diffusiondice) have been accepted in NeurIPS 2024!

# - **Jul. 2024**: Our two recent papers [“DecisionNCE: Embodied Multimodal Representations via Implicit Preference Learning”](./publication/li-2024-decisionnce) and [“Instruction-Guided Visual Masking”](./publication/zheng-2024-instructionguided) have won the **Outstanding Paper Awards** at ICML 2024 Workshop on Multi-modal Foundation Model meets Embodied AI (MFM-EAI).

# - **May. 2024**: Our four recent papers [“DecisionNCE: Embodied Multimodal Representations via Implicit Preference Learning”](./publication/li-2024-decisionnce), [“OMPO: A Unified Framework for Reinforcement Learning under Policy and Dynamics Shifts”](./publication/luo-2024-ompo), [“Offline-Boosted Actor-Critic: Adaptively Blending Optimal Historical Behaviors in Deep Off-Policy RL”](./publication/luo-2024-offlineboosted), [“Seizing Serendipity: Exploiting the Value of Past Success in Off-Policy Actor-Critic”](./publication/ji-2023-seizing) have been accepted in ICML 2024!        

# - **Apr. 2024**: Our recent survey paper [“A Comprehensive Survey of Cross-Domain Policy Transfer for Embodied Agents”](./publication/niu-2024-comprehensive) has been accepted in IJCAI 2024.

# - **Jan. 2024**: Our four recent papers [“Revealing the Mystery of Distribution Correction Estimation via Orthogonal-gradient Update”](./publication/mao-2024-odice/), [“Safe Offline Reinforcement Learning with Feasibility-Guided Diffusion Model”](./publication/zheng-2024-fisor/), [“Query-Policy Misalignment in Preference-Based Reinforcement Learning”](./publication/hu-2023-querypolicy/), and [“OpenChat: Advancing Open-source Language Models with Mixed-Quality Data”](./publication/wang-2023-openchat/) have been accepted in ICLR 2024!

# - **Oct. 2023**: We have released [“Data-Driven Control Library (D2C)”](./project/libs/), which provides an easy-to-use and comprehensive library for real-world data-driven control & decision-making problems! Project page available at https://github.com/AIR-DI/D2C. 

# - **Sep. 2023**: We have released [“OpenChat: Advancing Open-source Language Models with Mixed-Quality Data”](./publication/wang-2023-openchat/), which uses ideas from offline RL to fine-tune open-source large language models! Project page available at https://github.com/imoneoi/openchat.
        
# - **Sep. 2023**: Our two recent papers [“Look Beneath the Surface: Exploiting Fundamental Symmetry for Sample-Efficient Offline RL”](./publication/cheng-2023-look/) and [“Offline Multi-Agent Reinforcement Learning with Implicit Global-to-Local Value Regularization”](./publication/wang-2023-offline/) have been accepted in NeurIPS 2023!

#        - **Jan. 2023**: Our three recent papers [“Offline RL with No OOD Actions: In-Sample Learning via Implicit Value Regularization”](./publication/xu-2023-sparse/), [“When Data Geometry Meets Deep Function: Generalizing Offline Reinforcement Learning”](./publication/li-2023-when/) and [“Mind the Gap: Offline Policy Optimization for Imperfect Rewards”](./publication/li-2023-mind/) have been accepted in ICLR 2023!
    design:
      columns: '1'
#      background:
#        image:
#          # Name of image in `assets/media/`.
#          filename: air-dream.jpg
#          # Apply image filters?
#          filters:
#            # Darken the image? Range 0-1 where 1 is transparent and 0 is opaque.
#            brightness: 1
#          # Image fit. Options are `cover` (default), `contain`, or `actual` size.
#          size: cover
#          # Image focal point. Options include `left`, `center` (default), or `right`.
#          position: center
#          # Use a fun parallax-like fixed background effect on desktop? true/false
#          parallax: true
#          # Text color (true=light, false=dark, or remove for the dynamic theme color).
#        text_color_light: false
      spacing:
        # Customize the section spacing. Order is top, right, bottom, left.
        padding: ["30px", "80px", "30px", "80px"]
#  - block: collection
#    id: posts
#    content:
#      title: Recent Posts
#      subtitle: ''
#      text: ''
#      # Choose how many pages you would like to display (0 = all pages)
#      count: 5
#      # Filter on criteria
#      filters:
#        folders:
#          - post
#        author: ""
#        category: ""
#        tag: ""
#        exclude_featured: false
#        exclude_future: false
#        exclude_past: false
#        publication_type: ""
#      # Choose how many pages you would like to offset by
#      offset: 0
#      # Page order: descending (desc) or ascending (asc) date.
#      order: desc
#    design:
#      # Choose a layout view
#      view: compact
#      columns: '2'
#  - block: portfolio
#    id: projects
#    content:
#      title: Projects
#      filters:
#        folders:
#          - project
#      default_button_index: 0
#      buttons:
#        - name: All
#          tag: '*'
#        - name: example
#          tag: example
#        - name: example1
#          tag: example1
#    design:
#      view: grid      
  - block: portfolio
    id: researches
    content:
      title: Research
      subtitle: Building dependable decision-making systems from algorithms to deployment.
      filters:
        folders:
          - project
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '1'
      # The following content previews are available: list, compact, card, citation, showcase, masonry.
      view: research-card
#  - block: collection
#    id: featured
#    content:
#      title: Featured Publications
#      filters:
#        folders:
#          - publication
#        featured_only: true
#    design:
#      columns: '2'
#      view: card
  - block: collection
    id: featured
    content:
      title: Recent Publications
      subtitle: Selected work from our latest research.
      text: |-
        {{% callout note %}}
        Quickly discover relevant content by [filtering publications](./publication/).
        {{% /callout %}}
      count: 6
      filters:
        folders:
          - publication
        exclude_featured: false
        publication_type: 'paper-conference'
      archive:
        enable: true
        text: See all publications
        link: publication/
    design:
      columns: '2'
      view: citation
#  - block: collection
#    id: talks
#    content:
#      title: Recent & Upcoming Talks
#      filters:
#        folders:
#          - event
#    design:
#      columns: '2'
#      view: compact
  - block: people
    id: people
    content:
      title: Meet the Team
      subtitle: Researchers working across learning, control, robotics, and intelligent systems.
      # Choose which groups/teams of users to display.
      #   Edit `user_groups` in each user's profile to add them to one or more of these groups.
      user_groups:
        - Research team members
        - Alumni
      sort_by: Params.role_rank
      sort_ascending: true
    design:
      # Show user's social networking links? (true/false)
      show_social: false
      # Show user's interests? (true/false)
      show_interests: false
      # Show user's role?
      show_role: true
      # Show user's organizations/affiliations?
      show_organizations: false
#      columns: "2"
#  - block: github.zackxiangyu.people
#    id: people_
#    content:
#      title: Meet the Team
#      filters:
#        folders:
#          - authors
#      user_groups:
#        - Research team members
#      sort_by: 
#      sort_ascending: true
#    design:
#      # Show user's social networking links? (true/false)
#      show_social: true
#      # Show user's interests? (true/false)
#      show_interests: false
#      # Show user's role?
#      show_role: true
#      # Show user's organizations/affiliations?
#      show_organizations: true
  # - block: tag_cloud
  #   content:
  #     title: Popular Topics
  #   design:
  #     columns: '2'
  - block: markdown
    id: gallery
    content:
      title: Gallery
      subtitle: Life, collaboration, and milestones at AIR-DREAM.
      text: |-
        {{< gallery album="group" >}}
    design:
      columns: '1'
#      spacing:
#        padding: ["20px", "0", "20px", "0"]
  - block: contact
    id: contact
    content:
      title: Contact
      subtitle: Start a conversation with AIR-DREAM.
      # Contact (add or remove contact options as necessary)
      email: zhanxianyuan@air.tsinghua.edu.cn
#      phone: 888 888 88 88
      address:
        street: 12 / F, block C, Qidi science and technology building, Tsinghua Science and Technology Park, Haidian District
        city: Beijing
        region: 
        postcode: '100000'
        country: China
        country_code: 
      directions: 
      office_hours:
      contact_links:
        - icon: github
          icon_pack: fab
          name: Find us on GitHub
          link: 'https://github.com/THU-AIR-DREAM'
      # Automatically link email and phone or display as text?
      autolink: true
      # Email form provider
      # form:
      #  provider: netlify
      #  formspree:
      #    id:
      #  netlify:
      #    # Enable CAPTCHA challenge to reduce spam?
      #    captcha: false
    design:
      columns: '2'
---
