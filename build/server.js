"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var koa_1 = __importDefault(require("koa"));
var awilix_1 = require("awilix");
var awilix_koa_1 = require("awilix-koa");
var app = new koa_1.default();
var container = awilix_1.createContainer().register({});
app.use(awilix_koa_1.scopePerRequest(container));
// Loads all controllers in the `routes` folder
// relative to the current working directory.
// This is a glob pattern.
app.use(awilix_koa_1.loadControllers('routes/*.js', { cwd: __dirname }));
app.listen(3000);
