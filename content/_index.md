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
        filename: hero-robot-head-xs.png
#      text: |-
#        **Decision-making Research for Empowered AI Methods.**
#
#        <!-- DREAM团队的研究方向是探索如何在决策制定中应用强大的人工智能方法。我们致力于提高AI技术的应用能力，使其能够更好地服务于现实生活和产业界的决策需求。-->
#
#        DREAM focuses on research related to decision-making in the field of artificial intelligence. The team aims to empower Al methods to address real-world problems and challenges.
#
#        <!--Custom spacing-->
#        <div class="mb-3"></div>
#        <!--GitHub Button JS-->
#        <script async defer src="https://buttons.github.io/buttons.js"></script>
    design:
      background:
        # gradient_end: '#1976d2'
        # gradient_start: '#004ba0'
#        gradient_end: '#A9D0F5'
#        gradient_start: '#01A9DB'
        gradient_end: '#9A2EFE'
        gradient_start: '#5882FA'
        gradient_angle: 180
        text_color_light: true
  - block: markdown
    content:
      title: DREAM
      text: |-
        **Decision-making Research for Empowered AI Methods.**

        <!-- DREAM团队的研究方向是探索如何在决策制定中应用强大的人工智能方法。我们致力于提高AI技术的应用能力，使其能够更好地服务于现实生活和产业界的决策需求。-->

        DREAM focuses on research related to decision-making in the field of artificial intelligence. 
        
        The team aims to empower Al methods to address real-world problems and challenges.
    design: 
      columns: '1'
      background:
        image:
          # Name of image in `assets/media/`.
          filename: air-dream.jpg
          # Apply image filters?
          filters:
            # Darken the image? Range 0-1 where 1 is transparent and 0 is opaque.
            brightness: 1
          #  Image fit. Options are `cover` (default), `contain`, or `actual` size.
          size: cover
          # Image focal point. Options include `left`, `center` (default), or `right`.
          position: center
          # Use a fun parallax-like fixed background effect on desktop? true/false
          parallax: true
          # Text color (true=light, false=dark, or remove for the dynamic theme color).
          text_color_light: true
  - block: markdown
    id: news
    content:
      title: News
      text: Here are the latest news.
    design:
      columns: '2'
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
  - block: portfolio
    id: researches
    content:
      title: Researches
      filters:
        folders:
          - research
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
        - name: Research
          tag: research
        - name: Research1
          tag: research1
        - name: Research2
          tag: research2
        - name: Research3
          tag: research3
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '1'
      # The following content previews are available: list, compact, card, citation, showcase, masonry.
      view: masonry
      # For Showcase view, flip alternate rows?
      flip_alt_rows: true
  - block: collection
    id: featured
    content:
      title: Featured Publications
      filters:
        folders:
          - publication
        featured_only: true
    design:
      columns: '2'
      view: card
  - block: collection
    content:
      title: Recent Publications
      text: |-
        {{% callout note %}}
        Quickly discover relevant content by [filtering publications](./publication/).
        {{% /callout %}}
      filters:
        folders:
          - publication
        exclude_featured: true
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
      sort_by: Params.last_name
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
      columns: '2'
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
