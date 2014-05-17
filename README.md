# sendgrid-pusher-demo

Demo of using SendGrid's Parse API with Pusher to change the background color. Copycatted from [Kunal](https://github.com/kunal732)'s excellent <http://hook.meteor.com>.

## Guide

[Create a SendGrid account](http://sendgrid.com).

[Create a Pusher account](http://pusher.com/).

```
cp .env.example .env
```

Edit .env with your credentials.

```
npm install
node app.js
```

Visit <https://sendgrid.com/developer/reply> and set the following.

|---------|---------------------------------|
|Hostname |color.webhook.email              |
|Url      |https://color.ngrok.com/inbound  |

Save it.

Send an email to [color@color.webhook.email](mailto:color@color.webhook.email). Set the subject to a color - like 'red', or 'blue'.



