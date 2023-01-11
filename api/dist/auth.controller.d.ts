import { Response } from 'express';
import { AuthService } from './auth.service';
export declare class AuthController {
    service: AuthService;
    constructor(service: AuthService);
    login(body: LoginBody, res: Response): Response<any, Record<string, any>>;
}
interface LoginBody {
    username: string;
    password: string;
}
export {};
