"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@sakuraapi/core");
exports.SakuraApi = core_1.SakuraApi;
const http_status_1 = require("../lib/http-status");
const user_model_1 = require("../models/user-model");
let ConfigApi = class ConfigApi extends core_1.SapiRoutableMixin() {
    getHandler(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.uid;
            if (!id) {
                res
                    .status(http_status_1.FORBIDDEN)
                    .json({ error: 'FORBIDDEN' });
                return next();
            }
            user_model_1.User.getById(id).then(user => {
                res.json(user);
                return next();
            }).catch(err => {
                res.json(err);
                return next();
            });
        });
    }
    configHandler(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const locals = res.locals;
            try {
                locals
                    .send(http_status_1.OK, {
                    server: 'sdsdsds',
                    serverUp: true
                });
            }
            catch (err) {
                locals
                    .send(http_status_1.SERVER_ERROR, {
                    error: 'SERVER_ERROR'
                });
                this.log.error(err);
            }
        });
    }
};
__decorate([
    core_1.Route({
        method: 'get',
        path: ':uid'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], ConfigApi.prototype, "getHandler", null);
ConfigApi = __decorate([
    core_1.Routable({
        baseUrl: 'users',
        model: user_model_1.User,
        suppressApi: true
    })
], ConfigApi);
exports.ConfigApi = ConfigApi;
//# sourceMappingURL=config.api.js.map