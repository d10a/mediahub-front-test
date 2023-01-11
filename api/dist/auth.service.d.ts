export declare class AuthService {
    static expectedUsername: string;
    static expectedPassword: string;
    private validTokens;
    login(user: string, password: string): {
        token: string;
    } | {
        err: string;
    };
    checkToken(token: string): boolean;
}
