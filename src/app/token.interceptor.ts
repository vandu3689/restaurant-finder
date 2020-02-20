import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingServiceService } from './loading-service.service';

export class AuthInterceptor implements HttpInterceptor {
  activeRequests: number = 0;
  constructor(private loadingScreenService: LoadingServiceService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.activeRequests === 0) {
      this.loadingScreenService.startLoading();
    }
    this.activeRequests++;
    let newHeaders = req.headers;
    newHeaders = newHeaders.append('user-key', '894946516275cc672c67117629fd3f7a');
    const authReq = req.clone({headers: newHeaders});
    return next.handle(authReq).pipe(
      finalize(() => {
        this.activeRequests--;
        if (this.activeRequests === 0) {
          this.loadingScreenService.stopLoading();
        }
      })
    );
  }
}
