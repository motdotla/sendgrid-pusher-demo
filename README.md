# sendgrid-pusher-demo

![](https://s3.amazonaws.com/giphymedia/media/DupMFENd0g6bu/200.gif)

Demo of using SendGrid's Parse API with Pusher to change the background color. Copycatted from [Kunal](https://github.com/kunal732)'s excellent <http://hook.meteor.com>.

## Guide

[Create a SendGrid account](http://sendgrid.com).

[Create a Pusher account](http://pusher.com/).

```
cp .env.example .env
```

Edit .env with your credentials.

Edit the Pusher key at about line 19 of public/index.html.

Visit <https://sendgrid.com/developer/reply> and set the following.

* Hostname: color.webhook.email
* Url: https://color.ngrok.com/inbound

Save it.

```
npm install
node app.js
ngrok -subdomain color 3000
```

(don't have ngrok, [install it](https://ngrok.com))

Send an email to [hi@color.webhook.email](mailto:hi@color.webhook.email). Set the subject to a color - like 'red', or 'blue'.

Watch the background change colors.


## Approach

* Cmd + F1
* I'm with a cool API company called SendGrid.
* We make it easy to send and receive email from your applications.
* Rather than talk about it let me show you.
* **show sending** It's as easy as building a url and pasting it in your browser.
* We have libraries too.
* You can use this for signup emails, password resets, notifications, whatever you can imagine.
* But that's not all. We do receiving email too.
* Demo the receiving.
* Announce prize.

![](http://media0.giphy.com/media/3yETZB0oWiB7G/200.gif)



