# SupBot
(Supreme Bot)
*An app that allows you to secure items that are about to drop on Supremes website with the use of Puppeteer.*

![alt text](https://media.giphy.com/media/llxw630hSarzwkOQbe/giphy.gif 'Supbot In Action')

#### Deployed Page: [here](https://supbot123.herokuapp.com/) 
(work in progress: bot and google auth do not run on the deployed page just yet)

#### Video Example: [youtube](https://youtu.be/Lqnfn3zthrw)


Everyone wants Supreme but only a few can successfully get the items they want. The hyped items tend to be bought using bots and this app is here to offer a free service that does the same. We would all love to live in a world where everyone had a fair chance at grabbing the items they want but that's just not going to happen. This bot is here to make it possible for anyone to get the items they want. Hopefully with future updates and help from other developers this bot will be on par with the bots that cost you money.  


#### Installation

Clone the project then be sure to install the package dependencies.

``` npm install ```

Note: Puppeteer installs with Chromium. You may use a core version of puppeteer that does not install with Chromium but the bots code would need to be refactored to use a browser of your choice when it launches.

#### Usage

Start up the app by using

``` npm start ```

Be sure to run this on the express side of the app. If you run this on the react side of the app it will not run correctly.

You can also choose to execute bot file by itself if you so wish. Just be sure to uncomment all the necessary items used for card information and item choice. 

``` node supreme.js ```

The running app is available in your browser on 

`` http://localhost:3000 ``

API routes for testing are available on 

`` http://localhost:3002 ``

If you would like to improve this bot you can view Puppeteer documentation here [Puppeteer Docs](https://github.com/GoogleChrome/puppeteer/blob/v1.16.0/docs/api.md)

##### Also if you have any ideas or would like to contribute to this project feel free to.

#### Future updates:
* The ability to add multiples items to each card.
* A full proof way to not get hit with captchas.(stealth works most the time but 100% effectiveness is needed.)
* Standalone app that a user can install on whatever device they choose.
* Better looking front-end.

### Technologies Used:
* React 
* Puppeteer
* Moment.js
* CRON
* Formspree(email service)
* MongoDB
* Mongoose
* Express
* Node.js
* Passport(GoogleAuth)
* Cheerio
* Axios

