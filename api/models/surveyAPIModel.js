'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var SurveySchema = new Schema({
  Date: {
    type: String,
	default: Date.now
  },
  Time: {
    type: String,
    default: Date.now
  },
  systemName: {
    type: String,
    required: 'Please Include a System Name.'
  },
  surveyType: {
	type: String,
	required: 'You must specify a survey type.',
    enum: ['Complete Call', 'Incomplete Call', 'Other']
  },
  CallNumber: {
    type: String,
  },
  result: {
    type: String,
	required: 'You must include a survey response in String format.'
  },
});

module.exports = mongoose.model('Responses', SurveySchema);