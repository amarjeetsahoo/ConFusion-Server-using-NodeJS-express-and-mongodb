const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send you all the dishes!');
    })
    .post((req, res, next) => {
        res.end('Will add the dishes: ' + req.body.name + ' with details ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('Put operation not supported!');
    })
    .delete((req, res, next) => {
        res.end('Deleting all the dishes!');
    });

//DishId
dishRouter.route('/:dishId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send you the dish:' + req.params.dishId + ' to you');
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /dishes/'+ req.params.dishId);
    })
    .put((req, res, next) => {
        res.write('Updating the dish:' + req.params.dishId);
        res.end('\nWill add the dish: ' + req.body.name + ' with details ' + req.body.description);
    })
    .delete((req, res, next) => {
        res.end('Deleting all the dishes!');
    });

module.exports = dishRouter;