'use strict';

var mongoose = require('mongoose'),
  Response = mongoose.model('Responses');

exports.list_all_Responses = function(req, res) {
  Response.find({}, function(err, Response) {
    if (err)
      res.send(err);
    res.json(Response);
  });
};

exports.create_a_Response = function(req, res) {
  var new_Response = new Response(req.body);
  new_Response.save(function(err, Response) {
    if (err)
      res.send(err);
    res.json(Response);
  });
};

exports.read_a_Response = function(req, res) {
  Response.findById(req.params.ResponseId, function(err, Response) {
    if (err)
      res.send(err);
    res.json(Response);
  });
};

exports.update_a_Response = function(req, res) {
  Response.findOneAndUpdate({_id: req.params.ResponseId}, req.body, {new: true}, function(err, Response) {
    if (err)
      res.send(err);
    res.json(Response);
  });
};


exports.delete_a_Response = function(req, res) {


  Response.remove({
    _id: req.params.ResponseId
  }, function(err, Response) {
    if (err)
      res.send(err);
    res.json({ message: 'Response successfully deleted' });
  });
};
