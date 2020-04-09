const expres = require('express');
const OngController = require('./controllers/OngController');
const incidentController = require('./controllers/incidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = expres.Router();

routes.post('/sessions',SessionController.create);
routes.get('/ongs', OngController.index);   
routes.post('/ongs', OngController.create);

routes.get('/profile',ProfileController.index);

routes.post('/incidents',incidentController.create);
routes.delete('/incidents/:id',incidentController.delete);
module.exports = routes;