'use strict';
module.exports = function(app) {
  var surveyResponses = require('../controllers/surveyAPIController');
  var serviceNow = require('../controllers/serviceNowController');

  // surveyResponses Routes
  app.route('/Responses')
    .get(surveyResponses.list_all_Responses)
    .post(surveyResponses.create_a_Response);

  app.route('/ServiceNow/v1/Table/Incidents')
	//.get(surveyResponses.get_Incident)
	.post(serviceNow.post_Incident);

  app.route('/Responses/:ResponseId')
    .get(surveyResponses.read_a_Response)
    .put(surveyResponses.update_a_Response)
    .delete(surveyResponses.delete_a_Response);
};