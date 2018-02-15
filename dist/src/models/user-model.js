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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@sakuraapi/core");
exports.SakuraApi = core_1.SakuraApi;
const mongodb_1 = require("mongodb");
exports.Cursor = mongodb_1.Cursor;
exports.MongoDb = mongodb_1.Db;
exports.ObjectID = mongodb_1.ObjectID;
const db_1 = require("../config/bootstrap/db");
class Address {
    static fromJson(json) {
        json = json || {};
        const address = new Address();
        address.address1 = json.address1;
        address.address2 = json.address2;
        address.city = json.city;
        address.country = json.country;
        address.state = json.state;
        address.zip = json.zip;
        return address;
    }
}
__decorate([
    core_1.Db('addr1'), core_1.Json(),
    __metadata("design:type", String)
], Address.prototype, "address1", void 0);
__decorate([
    core_1.Db('addr2'), core_1.Json(),
    __metadata("design:type", String)
], Address.prototype, "address2", void 0);
__decorate([
    core_1.Db('cty'), core_1.Json(),
    __metadata("design:type", String)
], Address.prototype, "city", void 0);
__decorate([
    core_1.Db(), core_1.Json(),
    __metadata("design:type", String)
], Address.prototype, "country", void 0);
__decorate([
    core_1.Db('st'), core_1.Json(),
    __metadata("design:type", String)
], Address.prototype, "state", void 0);
__decorate([
    core_1.Db('zip'), core_1.Json(),
    __metadata("design:type", String)
], Address.prototype, "zip", void 0);
exports.Address = Address;
let User = class User extends core_1.SapiModelMixin() {
};
__decorate([
    core_1.Db('email'), core_1.Json(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    core_1.Db('emailVerified'), core_1.Json(),
    __metadata("design:type", Boolean)
], User.prototype, "emailVerified", void 0);
__decorate([
    core_1.Db('firstName'), core_1.Json(),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    core_1.Db('lastName'), core_1.Json(),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    core_1.Db('password'), core_1.Json(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    core_1.Db('phone'), core_1.Json(),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
User = __decorate([
    core_1.Model({
        dbConfig: db_1.dbs.user
    })
], User);
exports.User = User;
//# sourceMappingURL=user-model.js.map