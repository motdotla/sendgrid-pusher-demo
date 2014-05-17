# After presentation

Send an email to everyone that sent in to the inbound portion of the demo.

## Usage

Install [postman](https://github.com/zachlatta/postman).

Edit contents of recipients.csv

Edit contents of template.html

```
postman -text template.txt -html template.html -csv recipients.csv \
    -sender "Scott Motte <scott.motte@sendgrid.com>" \
    -subject "[Music Hack Day SF] If you need help I'm in the blue LA hat" -server smtp.sendgrid.net -port 587 \
    -user your_username -password your_password
```
