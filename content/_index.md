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

        <!-- DREAM团队的研究方向是探索如何在决策制定中应用强大的人工智能方法。我们致力于提高AI技术的应用能力，使其能够更好地服务于现实生活和产业界的决策需求。-->

        <font size=6>
        Welcome to 
        <b>
        AIR-DREAM (Decision-making Research for Empowered AI Methods) Lab
        </b> 
        </font>
        <font size=4>
        Our research focus is to develop advanced learning-based data-driven decision-making theories and practical technologies that are robust, generalizable, and deployable to tackle real-world challenges. We work on fundamental learning algorithms, robust robotic control methods, optimization technologies for real-world AIoT systems, and data-driven decision-making tools & libraries.
        </font>
        
        <font size=3>
        <p style="color: #CEECF5;">
        AIR-DREAM Lab is a research group at <a href="https://air.tsinghua.edu.cn/en/">Institute for AI Industry Research (AIR)</a>, Tsinghua University. 
        </p>
        </font>

        <!--Custom spacing-->
        <div class="mb-3"></div>
        <!--GitHub Button JS-->
        <script async defer src="https://buttons.github.io/buttons.js"></script>
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

        - **May. 2024**: Our four recent papers [“DecisionNCE: Embodied Multimodal Representations via Implicit Preference Learning”](./publication/li-2024-decisionnce), [“OMPO: A Unified Framework for Reinforcement Learning under Policy and Dynamics Shifts”](./publication/luo-2024-ompo), [“Offline-Boosted Actor-Critic: Adaptively Blending Optimal Historical Behaviors in Deep Off-Policy RL”](./publication/luo-2024-offlineboosted), [“Seizing Serendipity: Exploiting the Value of Past Success in Off-Policy Actor-Critic”](./publication/ji-2023-seizing) have been accepted in ICML 2024!        

        - **Apr. 2024**: Our recent survey paper [“A Comprehensive Survey of Cross-Domain Policy Transfer for Embodied Agents”](./publication/niu-2024-comprehensive) has been accepted in IJCAI 2024.

        - **Jan. 2024**: Our four recent papers [“Revealing the Mystery of Distribution Correction Estimation via Orthogonal-gradient Update”](./publication/mao-2024-odice/), [“Safe Offline Reinforcement Learning with Feasibility-Guided Diffusion Model”](./publication/zheng-2024-fisor/), [“Query-Policy Misalignment in Preference-Based Reinforcement Learning”](./publication/hu-2023-querypolicy/), and [“OpenChat: Advancing Open-source Language Models with Mixed-Quality Data”](./publication/wang-2023-openchat/) have been accepted in ICLR 2024!

        - **Oct. 2023**: We have released [“Data-Driven Control Library (D2C)”](./project/libs/), which provides an easy-to-use and comprehensive library for real-world data-driven control & decision-making problems! Project page available at https://github.com/AIR-DI/D2C. 

        - **Sep. 2023**: We have released [“OpenChat: Advancing Open-source Language Models with Mixed-Quality Data”](./publication/wang-2023-openchat/), which uses ideas from offline RL to fine-tune open-source large language models! Project page available at https://github.com/imoneoi/openchat.
        
        - **Sep. 2023**: Our two recent papers [“Look Beneath the Surface: Exploiting Fundamental Symmetry for Sample-Efficient Offline RL”](./publication/cheng-2023-look/) and [“Offline Multi-Agent Reinforcement Learning with Implicit Global-to-Local Value Regularization”](./publication/wang-2023-offline/) have been accepted in NeurIPS 2023!
        
        - **Jan. 2023**: Our three recent papers [“Offline RL with No OOD Actions: In-Sample Learning via Implicit Value Regularization”](./publication/xu-2023-sparse/), [“When Data Geometry Meets Deep Function: Generalizing Offline Reinforcement Learning”](./publication/li-2023-when/) and [“Mind the Gap: Offline Policy Optimization for Imperfect Rewards”](./publication/li-2023-mind/) have been accepted in ICLR 2023!

        :fire: **We are hiring:** we are looking for postdocs and student interns. If you are interested in the research directions of data-driven decision-making, please feel free to contact us!
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
      title: Researches
      filters:
        folders:
          - project
      # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
      default_button_index: 0
      # Filter toolbar (optional).
      # Add or remove as many filters (`filter_button` instances) as you like.
      # To show all items, set `tag` to "*".
      # To filter by a specific tag, set `tag` to an existing tag name.
      # To remove the toolbar, delete the entire `filter_button` block.
      buttons:
        - name: All
          tag: '*'
        - name: Algorithms
          tag: Algorithms
        - name: Robotics
          tag: Robotics
        - name: AIoT
          tag: AIoT
        - name: Libs
          tag: Libs
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '1'
      # The following content previews are available: list, compact, card, citation, showcase, masonry.
      view: showcase
      # For Showcase view, flip alternate rows?
      flip_alt_rows: true
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
    content:
      title: Gallery
      subtitle: ''
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
          link: 'https://github.com/AIR-DI'
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
