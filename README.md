# Site Develop Guide

## Preparation

### Install Hugo
* For Windows
  1. 在[github release](https://github.com/gohugoio/hugo/releases)中下载预编译程序（下载带有hugo_extended_xxx 的版本，这里使用[hugo_extended_0.110.0_windows-amd64.zip](https://github.com/gohugoio/hugo/releases/download/v0.110.0/hugo_extended_0.110.0_windows-amd64.zip)）；
  2. 下载zip并解压到本地，如C:\Program Files\Hugo，然后将路径添加到环境变量;
  3. 在命令行中执行hugo version可检查安装是否正确;

### Install Go
* Download the [installation package of Go](https://go.dev/dl/) and install it.

### Install [hugo-academic-cli](https://github.com/wowchemy/hugo-academic-cli)(Optional)
* Function: Import publications from your reference manager to Hugo(Import publications from BibTex);
* Installation: pip3 install academic==0.5.1;
* Usage(To add a new publication): 
  1. Add the BibTex record of the publication to [publications.bib](./publications.bib) within the root directory of this repo;
  2. Use the cd command to navigate to your website folder(the root directory of this repo) in the terminal;
  3. Import your publications with: `academic import --bibtex publications.bib`;
  4. The generated output in the content/publication folder should be reviewed prior to publishing your site.

## Contribute to the project
### Two ways to contribute(Pick any one)
* Be the collaborators of this project(please send your github ID to the administrator of this project). 
  > 基于 dev 分支创建自己的开发分支 dev-yourname，在 dev-yourname 上开发完成后，推送 dev-yourname 分支并发起将该分支合并到 dev 分支的 Pull Request，等待管理员审核；
* Fork this project.
  > 不用成为项目成员，直接对该项目进行"派生（Fork）"。修改推送到派生出的项目副本中，并通过创建拉取请求（Pull Request，简称 PR）来让改动进入源版本库。[(参考文档)](https://git-scm.com/book/zh/v2/GitHub-%E5%AF%B9%E9%A1%B9%E7%9B%AE%E5%81%9A%E5%87%BA%E8%B4%A1%E7%8C%AE)
  >
  > General process:
  > 1. 派生一个项目
  > 2. 从 dev 分支创建一个新分支
  > 3. 提交一些修改来改进项目
  > 4. 将这个分支推送到 GitHub 上
  > 5. 创建一个拉取请求
  > 6. 讨论，根据实际情况继续修改
  > 7. 项目的拥有者合并或关闭你的拉取请求
  > 8. 将更新后的 dev 分支同步到你的派生中

### Develop
* 开启本地测试服务器
  * 代码库根目录下开启终端并输入hugo server来启动测试服务器，@http://localhost:1313
  * hugo server会自动侦测源文件变动自动刷新页面
* 网页个性化配置
  * 参考[官方文档](https://wowchemy.com/docs/).
  * Hugo site structure
    > There are 3 main folders for Hugo sites:
    * `content/` for your Markdown-formatted content files (homepage, etc.)
    * `assets/media/` for your media files (images, videos)
    * `config/_default/` for your site configuration files
      > * `config.yaml` to configure Hugo (site title, URL, Hugo options, enable page features)
      > * `params.yaml` to configure Wowchemy options (SEO, site features)
      > * `menus.yaml` to configure your menu links (if the menu is enabled in params.yaml)
      > * `languages.yaml` to configure your site’s language or to set language-specific options in a multilingual site
* Create an author profile[(Guide)](https://wowchemy.com/docs/content/authors/)
  * Add a new author profile in command line: 
      
    `hugo new content/authors/firstname-lastname`
  * Then edit the newly created file at `content/authors/firstname-lastname/_index.md`
  * Upload a square photo for the user to the new `authors/firstname-lastname/` folder and name it `avatar`.
* Create a publication[(Guide)](https://wowchemy.com/docs/content/publications/)
  * Import from BibTeX(适合批量添加) 
    > 1. Add the BibTex record of the publication to [publications.bib](./publications.bib) within the root directory of this repo;
    > 2. Use the cd command to navigate to your website folder(the root directory of this repo) in the terminal;
    > 3. Import your publications with: `academic import --bibtex publications.bib`;
    > 4. The generated output in the content/publication folder should be reviewed prior to publishing your site. You can complete the information of the publication in `index.md` by referring to `content/publication/conference-paper/index.md`;
    > 5. Add an image named `featured.*`(e.g. `featured.jpg`) into the publication folder as the cover image.
  * Command line
    > Alternatively, publications can be manually created using the command:
    >
    > `hugo new content/publication/<my-publication>`
    >
    > where `<my-publication>` is the name of your publication, using hyphens (-) instead of spaces.

* Create a blog post[(Guide)](https://wowchemy.com/docs/content/blog-posts/)
* 网页部署
  * This site is deployed with [Netlify](https://www.netlify.com/)
    > Netlify is free and provides ultra-fast global access, automated deployment when you add content, and automatic HTTPS security.
  * When the `main` branch has a new commit and pushed, the site will be deployed automatically.
  * The domain of this site is [air-dream.netlify.app](https://air-dream.netlify.app/).

# [Hugo Academic CV Theme](https://github.com/HugoBlox/theme-academic-cv)

[![Screenshot](.github/preview.webp)](https://hugoblox.com/templates/)

The Hugo **Academic CV Template** empowers you to easily create your job-winning online resumé, showcase your academic publications, and create online courses or knowledge bases to grow your audience.

[![Get Started](https://img.shields.io/badge/-Get%20started-ff4655?style=for-the-badge)](https://hugoblox.com/templates/)
[![Discord](https://img.shields.io/discord/722225264733716590?style=for-the-badge)](https://discord.com/channels/722225264733716590/742892432458252370/742895548159492138)  
[![Twitter Follow](https://img.shields.io/twitter/follow/GetResearchDev?label=Follow%20on%20Twitter)](https://twitter.com/GetResearchDev)

️**Trusted by 250,000+ researchers, educators, and students.** Highly customizable via the integrated **no-code, Hugo Blox Builder**, making every site truly personalized ⭐⭐⭐⭐⭐

Easily write technical content with plain text Markdown, LaTeX math, diagrams, RMarkdown, or Jupyter, and import publications from BibTeX.

[Check out the latest demo](https://academic-demo.netlify.app/) of what you'll get in less than 10 minutes, or [get inspired by our academics and research groups](https://hugoblox.com/creators/).

The integrated [**Hugo Blox Builder**](https://hugoblox.com) and CMS makes it easy to create a beautiful website for free. Edit your site in the CMS (or your favorite editor), generate it with [Hugo](https://github.com/gohugoio/hugo), and deploy with GitHub or Netlify. Customize anything on your site with widgets, light/dark themes, and language packs.

- 👉 [**Get Started**](https://hugoblox.com/templates/)
- 📚 [View the **documentation**](https://docs.hugoblox.com/)
- 💬 [Chat with the **Hugo Blox Builder community**](https://discord.gg/z8wNYzb) or [**Hugo community**](https://discourse.gohugo.io)
- 🐦 Twitter: [@GetResearchDev](https://twitter.com/GetResearchDev) [@GeorgeCushen](https://twitter.com/GeorgeCushen) [#MadeWithHugoBlox](https://twitter.com/search?q=%23MadeWithHugoBlox&src=typed_query)
- ⬇️ **Automatically import your publications from BibTeX** with the [Hugo Academic CLI](https://github.com/GetRD/academic-file-converter)
- 💡 [Suggest an improvement](https://github.com/HugoBlox/hugo-blox-builder/issues)
- ⬆️ **Updating?** View the [Update Guide](https://docs.hugoblox.com/reference/update/) and [Release Notes](https://github.com/HugoBlox/hugo-blox-builder/releases)

## We ask you, humbly, to support this open source movement

Today we ask you to defend the open source independence of the Hugo Blox Builder and themes 🐧

We're an open source movement that depends on your support to stay online and thriving, but 99.9% of our creators don't give; they simply look the other way.

### [❤️ Click here to become a Sponsor, unlocking awesome perks such as _exclusive academic templates and blocks_](https://hugoblox.com/sponsor/)

<!--
<p align="center"><a href="https://hugoblox.com/templates/" target="_blank" rel="noopener"><img src="https://hugoblox.com/uploads/readmes/academic_logo_200px.png" alt="Hugo Academic Theme for Hugo Blox Builder"></a></p>
-->

## Demo image credits

- [Unsplash](https://unsplash.com)

## Latest news

<!--START_SECTION:news-->

- [Easily make an academic CV website to get more cites and grow your audience 🚀](https://hugoblox.com/blog/easily-make-academic-website/)
- [What&#39;s new in v5.2?](https://hugoblox.com/blog/whats-new-in-v5.2/)
- [What&#39;s new in v5.1?](https://hugoblox.com/blog/whats-new-in-v5.1/)
- [Version 5.0 (February 2021)](https://hugoblox.com/blog/version-5.0-february-2021/)
- [Version 5.0 Beta 3 (February 2021)](https://hugoblox.com/blog/version-5.0-beta-3-february-2021/)
<!--END_SECTION:news-->
