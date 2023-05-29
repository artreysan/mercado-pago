import { Route, Router } from "express";
const route  = Route();

route.get('/create-order', (req, res) => {res.send('createring order')})
route.get('/success', (req, res) => {res.send('created order')})
route.get('/webhook', (req, res) => {res.send('webhook')})

export default route;


