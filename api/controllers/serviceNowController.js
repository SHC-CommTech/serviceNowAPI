'use strict';

var mongoose = require('mongoose'),
  Response = mongoose.model('Responses');

exports.post_Incident = function(req, res){
var new_Response = new Response(req.body);
  console.log(new_Response);
  //new_Response.save(function(err, Response){
  //if (err)
  //   res.send(err);
  //res.json(Response);
},