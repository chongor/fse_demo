//Model: message

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
//if receiver_id is empty string "", ObjectID is normally of type string

var messageSchema = new Schema({
  username: { type: String, required: true },
  message: { type: String, required: true },
  time_created: { type: Date, default: Date.now, required:true }
});

// var messageSchema = new mongoose.Schema({
//   sender_id: { type: ObjectId, required: true },
//   receiver_id: { type: ObjectId, required: true },
//   message: { type: String, required: true },
//   time_created: { type: Date, default: Date.now, required:true }
// });

module.exports = mongoose.model('Message', messageSchema);
