"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const awilix_koa_1 = require("awilix-koa"); // or `awilix-router-core`
let UserAPI = class UserAPI {
    async getUser(ctx) {
        ctx.body = "Yeah, you done it";
    }
};
__decorate([
    awilix_koa_1.route('/test'),
    awilix_koa_1.GET()
], UserAPI.prototype, "getUser", null);
UserAPI = __decorate([
    awilix_koa_1.route('/absolute')
], UserAPI);
exports.default = UserAPI;
