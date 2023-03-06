---
# Files in this folder represent a Widget Page
# type: widget_page
title: People
date: 2022-10-24

type: landing

sections:
  - block: github.zackxiangyu.people
    content:
      title: Meet the Team
      filters:
        folders:
          - authors
      # Choose which groups/teams of users to display.
      #   Edit `user_groups` in each user's profile to add them to one or more of these groups.
      user_groups:
          - Principal Investigators
          - Researchers
          - Grad Students
          - Administration
          - Visitors
          - Alumni
      sort_by: .Params.last_name
      sort_ascending: true
    design:
      show_interests: false
      show_role: true
      show_social: true
---
