# discourse-astrobanner

Astrobanner.com plugin for Discourse the forum software

## Introduction
What is Astrobanner.com? We are a banner advertising / campaign management solution. If you have owned a Discourse forum, chances are there are brands who have reached out to you to ask for placeing banner ads on your forum. Unfortunately there isn't a solution out there currently that will let advertisers place ads on your site with ease. There is the Adsense plugin but the ROI on Adsense would be much lower than a custom banner advertising campaign.

Astrobanner will help you with getting much more revenue than just Adsense. Brands can upload banner images and schedule a campaign on the platform, and Astrobanner will collect the payment on your behalf. In addition, these are the features we support:

- Easy Installation -- just sign up with us and install the plugin and enter your site id. We will take care of the rest for you
- Scheduling of campaigns -- we make sure you show 
- Custom CPM (Cost Per Impression) -- we make sure the brand has paid prior to starting the campaign 
- Metrics -- we track the CPMs, the clickthroughs, as well as conversions (via a tracking pixel that the advertiser will use). 

## Installation

* Supported Discourse version: v1.3 and up

### Docker installation

As seen in a [how-to on meta.discourse.org](https://meta.discourse.org/t/advanced-troubleshooting-with-docker/15927#Example:%20Install%20a%20plugin), simply **add the plugin's repo url to your container's app.yml file**:

```yml
hooks:
  after_code:
    - exec:
        cd: $home/plugins
        cmd:
          - mkdir -p plugins
          - git clone https://github.com/tommytcchan/discourse-astrobanner.git
```
* Rebuild the container

```
cd /var/discourse
git pull
./launcher rebuild app
```

### Non-docker installation

* Run `bundle exec rake plugin:install repo=http://github.com/tommytcchan/discourse-astrobanner` in your discourse directory
* In development mode, run `bundle exec rake assets:clean`
* In production, recompile your assets: `bundle exec rake assets:precompile`
* Restart Discourse


## Usage

* Go to Admin -> Settings -> Astrobanner
* Enter your Astrobanner site ID after you sign up with us on <a href="https://astrobanner.com" target="_blank">Astrobanner</a>
* Remember to watch extra whitespace at the beginning and end of the id field.

* You can use the 'astrobanner_through_trust_level' to disable ads for users above a certain trust level. 
 - 0 only shows to users that are not logged in
 - 1 shows ads to users that are not logged in, and to new and basic users
 - 2 shows ads to regular users as well, but not to leaders and elders
 - 3 shows ads to everyone but elders
 - 4 shows ads to everyone including elders
 
## License

GPL v2
