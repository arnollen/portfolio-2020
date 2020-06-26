const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const clientRoutes = express.Router();
const PORT = 4000;

const Client = require('./client.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/clients', { useNewUrlParser: true, useUnifiedTopology: true });
const { connection } = mongoose;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

clientRoutes.route('/').get((req, res) => {
  Client.find((err, clients) => {
    if (err) {
      console.log(err);
    } else {
      res.json(clients);
    }
  });
});

clientRoutes.route('/:id').get((req, res) => {
  const {id} = req.params;
  Client.findById(id, (err, client) => {
    res.json(client);
  });
});

clientRoutes.route('/update/:id').post((req, res) => {
  Client.findById(req.params.id, (err, client) => {
    if (!client)
      res.status(404).send('data is not found');
    else
      client.client_name = req.body.client_name;
    client.client_route = req.body.client_route;
    client.client_type = req.body.client_type;
    client.client_description = req.body.client_description;
    client.client_bgPath = req.body.client_bgPath;
    client.client_bgColor = req.body.client_bgColor
    client.client_video = req.body.client_video;
    client.client_images = req.body.client_images;
    client.client_imageCopy= req.body.client_imageCopy;
    client.client_imageHeaders= req.body.client_imageHeaders;
    client.client_link= req.body.client_link;

    client.save().then(client => {
      res.json('Client updated!');
    })
      .catch(err => {
        res.status(400).send('Update not possible');
      });
  });
});

clientRoutes.route('/add').post((req, res) => {
  const client = new Client(req.body);
  client.save()
    .then((client) => {
      res.status(200).json({ client: 'client added successfully' });
    })
    .catch((err) => {
      res.status(400).send('adding new client failed');
    });
});

app.use('/clients', clientRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${  PORT}`);
});
