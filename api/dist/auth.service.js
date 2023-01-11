"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
let AuthService = AuthService_1 = class AuthService {
    constructor() {
        this.validTokens = new Set();
    }
    login(user, password) {
        if (user !== AuthService_1.expectedUsername)
            return { err: 'Wrong username' };
        if (password !== AuthService_1.expectedPassword)
            return { err: 'Wrong password' };
        const token = (0, crypto_1.randomUUID)();
        this.validTokens.add(token);
        return { token };
    }
    checkToken(token) {
        return this.validTokens.has(token);
    }
};
AuthService.expectedUsername = 'Canal-plus';
AuthService.expectedPassword = 'Super-secret';
AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)()
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map