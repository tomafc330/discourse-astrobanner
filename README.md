# discourse-astrobanner

Astrobanner.com plugin for Discourse the forum software

## Introduction

What is astrobanner.com? We are a banner advertising / campaign management solution. If you have owned a Discourse forum, you've likely had brands reach out to you to place banner ads on your forum. Unfortunately, there isn't currently a solution available that will let you work with advertisers with ease. An Adsense plugin does exist but it doesn’t allow you to place your own banners and only places ads from the Adsense network. However, the ROI that you receive from the Adsense network is significantly lower than that which you would receive from a custom banner advertisement.

We experienced this exact same problem, and when we realized how much revenue we were losing by utilizing Adsense rather than working with advertisers and placing custom ads on our site (which we had worked so hard to build up!), we wanted to solve this painful problem for other people. 

Astrobanner will help you easily generate 5x-10x or more what you would generate from Adsense. Why do all the hard work of building up a great site just to let Google get all your profits? Astrobanner lets site owners upload banner images and schedule campaigns on the platform, all in one easy to use dashboard. Astrobanner will even collect the payment on your behalf from the advertiser, then send you payment automatically, so you don't need to worry about collecting payments, and can focus on the important things - like growing your site even more! 

If that isn't enough, we have some even more amazing features that Astrobanner offers:
 - Easy Installation -- just sign up with us and install the plugin and enter your site id. We will take care of the rest for you!
 - Scheduling of campaigns -- schedule your campaigns automatically with the date and time you'd like the campaign to start and end so you optimize running campaign after campaign non-stop and effortlessly.
 - A/B test different banners -- impress your advertising partners and give them the ability to test different banners so they can get more conversions and run multiple advertising campaigns on your site.
 - Targeted custom views -- set parameters based on geographical area so that your advertising partners can run campaigns to customers that are most relevant to their business. This also allows you to optimize your banner space so you can show different ads to customers who don't fall within certain parameters. 
 - Custom CPM (Cost Per Impression) -- determine your CPM by unique pageviews or all pageviews so you can create custom campaign pricing for your advertising partners.
 - Clickthrough tracking -- track how many clicks your campaign generates for your advertising partners as one measure of ROI.
 - Conversions -- we provide the ability for you to track conversions that your advertising partners get from their campaign with you so you can prove the awesome ROI of your campaigns and schedule successful campaign after campaign!
 - With all these amazing features, you can truly run a customized and most importantly, value generating, advertising campaign with your partners. Don't wait - sign up now so you can start optimizing your site for successful banner advertising campaigns! 


![](https://static_garage.s3.amazonaws.com/Admin_-_Tommy__2018-04-08_20-57-15.png)

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
* Enter your Astrobanner site ID after you sign up with us on <a href="https://astrobanner.com" rel="asdf" target="_blank">Astrobanner</a>
* Remember to watch extra whitespace at the beginning and end of the id field.

* You can use the 'astrobanner_through_trust_level' to disable ads for users above a certain trust level. 
 - 0 only shows to users that are not logged in
 - 1 shows ads to users that are not logged in, and to new and basic users
 - 2 shows ads to regular users as well, but not to leaders and elders
 - 3 shows ads to everyone but elders
 - 4 shows ads to everyone including elders
 
## License

GPL v2
