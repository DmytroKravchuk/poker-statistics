const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

async function start() {
  try {
    await mongoose.connect(
      'mongodb+srv://dmitry:Lbyfvjrbtd12@cluster0.stalo.mongodb.net/poker',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );
    app.listen(PORT, () => {
      console.log('server has been started...');
    });
  } catch (e) {
    console.log(e);
  }
}

start();
