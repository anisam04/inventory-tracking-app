const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ani:ani123@sei-flex.ot4ud.mongodb.net/cohorts?retryWrites=true&w=majority',
  { useNewUrlParser: true, }
);

// shortcut to mongoose.connection object
const db = mongoose.connection;

//connection success check
db.on('connected', function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});