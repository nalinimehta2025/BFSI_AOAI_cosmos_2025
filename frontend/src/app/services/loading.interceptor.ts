import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from './loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(`Intercepting request: ${req.url}`);  // Debug log
    this.loadingService.show();  // Trigger loading spinner

    return next.handle(req).pipe(
      finalize(() => {
        console.log(`Completed request: ${req.url}`);  // Debug log
        this.loadingService.hide();  // Hide loading spinner
      })
    );
  }
}
