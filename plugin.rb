# name: Astro Banner Discourse Plugin
# about: Adds Custom Banner ads from AstroBanner.com
# version: 1.0.8
# author: Astrobanner.com
# url: https://www.github.com/tommytcchan/discourse-astrobanner
# Supported Discourse version: v1.3 and up

register_css <<CSS

.astrobanner {
  text-align: center;
  padding: 5px;
  margin: 5px 0 10px;
}

.astrobanner img {
  max-width: 100%;
}

.astrobanner_topic_bottom {
  margin-top: 3.8em;
}

CSS
