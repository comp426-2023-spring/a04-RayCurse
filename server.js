#!/usr/bin/env node

import {rps, rpsls} from "./lib/rpsls.js"
import minimist from 'minimist'
import express from 'express'

const port = minimist(process.argv.slice(2)).port || 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.all('*', (req, res) => {
    res.status(404).send('404 NOT FOUND').end();
})

app.get('/app', (req, res) => {
    res.status(200).send('200 OK').end();
});
