import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { OfflineHandlerService } from './offline-handler.service';

@Injectable()
export class OfflineInterceptor implements HttpInterceptor {
  constructor(private offlineHandler: OfflineHandlerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Add a header to help with caching if online
    if (this.offlineHandler.isOnline()) {
      request = request.clone({
        setHeaders: {
          'Cache-Control': 'public'
        }
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle network errors gracefully
        if (!navigator.onLine) {
          console.warn('Network error occurred while offline:', error);
          // Log but don't break the app - cached content will be used
          this.offlineHandler.handleOfflineRequest(error);
        } else {
          console.error('Network error:', error);
        }
        return throwError(() => error);
      })
    );
  }
}
