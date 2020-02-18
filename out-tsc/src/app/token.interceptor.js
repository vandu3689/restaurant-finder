export class AuthInterceptor {
    intercept(req, next) {
        let newHeaders = req.headers;
        newHeaders = newHeaders.append('user-key', '894946516275cc672c67117629fd3f7a');
        const authReq = req.clone({ headers: newHeaders });
        return next.handle(authReq);
    }
}
//# sourceMappingURL=token.interceptor.js.map