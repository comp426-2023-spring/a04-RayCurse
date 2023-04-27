#!/usr/bin/env node

import {rps, rpsls} from "./lib/rpsls.js"
import minimist from 'minimist'
import express from 'express'

const port = minimist(process.argv.slice(2)).port || 5000;
console.log(port)


