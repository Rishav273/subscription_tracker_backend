import {Router} from "express";
import authorize from "../middlewares/auth.middleware.js";
import {createSubscription, getUserSubscriptions} from "../controllers/subscription.controller.js";
import {getUser} from "../controllers/user.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => {
    res.send({title: 'Get all subscriptions'});
})

subscriptionRouter.get('/:id', (req, res) => {
    res.send({title: 'Get subscription id'});
})

subscriptionRouter.get('/user/:id', authorize, getUserSubscriptions);

subscriptionRouter.get('/upcoming-renewals', (req, res) => {
    res.send({title: 'Get upcoming renewals'});
})

subscriptionRouter.post('/', authorize, createSubscription);

subscriptionRouter.put('/:id', (req, res) => {
    res.send({title: 'Update subscription'});
})

subscriptionRouter.put('/:id/cancel', (req, res) => {
    res.send({title: 'Cancel subscription'});
})

subscriptionRouter.delete('/:id', (req, res) => {
    res.send({title: 'Delete subscription'});
})

export default subscriptionRouter;
