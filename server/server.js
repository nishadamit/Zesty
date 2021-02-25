const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const buildPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 3000;

const Mailchimp = require('mailchimp-api-v3');
const mailchimp = new Mailchimp("a7ec0d20a1382078f202b7d23ed88a52-us5");

app.use(express.static(buildPath));
app.use(bodyParser.json());
app.get('/*', (req, res) => {
   res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.post('/subscription/create-subscriber', (req, res) => {
const data = req.body;
console.log(req.body);
mailchimp.request({
  method : 'post',
  path : '/lists/d668af31da/members',
  path_params : {
      list_id: 'd668af31da'
  },
  body : {
      email_address: data.email,
      status: data.status
  },
  query : {
      skip_merge_validation: true
    }
  }).then(function (result) {
      res.send({result: result});
    }).catch(function (err) {
      res.send({result: err});
  });
});

app.listen(port, () => {
   console.log('Server is up!');
});