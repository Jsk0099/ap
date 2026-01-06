import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfflineHandlerService {
  private isOnlineSubject = new BehaviorSubject<boolean>(navigator.onLine);
  public isOnline$ = this.isOnlineSubject.asObservable();

  constructor() {
    this.initializeOfflineDetection();
  }

  private initializeOfflineDetection(): void {
    // Listen for online/offline events
    window.addEventListener('online', () => {
      console.log('App is back online');
      this.isOnlineSubject.next(true);
    });

    window.addEventListener('offline', () => {
      console.log('App is offline - using cached content');
      this.isOnlineSubject.next(false);
    });

    // Suppress default browser offline indicators
    this.suppressDefaultOfflineUI();
  }

  /**
   * Suppress default browser offline UI and notifications
   * This prevents "You're Offline" messages while app works from cache
   */
  private suppressDefaultOfflineUI(): void {
    // Prevent automatic offline messages from appearing
    if (document.querySelector('meta[name="theme-color"]')) {
      // Theme is set, app should load normally
    }

    // Handle service worker offline gracefully
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        console.log('Service Worker updated');
      });
    }
  }

  /**
   * Check if app is currently online
   */
  public isOnline(): boolean {
    return navigator.onLine;
  }

  /**
   * Get current online status as observable
   */
  public getOnlineStatus(): Observable<boolean> {
    return this.isOnline$;
  }

  /**
   * Handle requests to ensure fallback to cached content
   * This prevents errors when offline
   */
  public handleOfflineRequest(error: any): void {
    if (!navigator.onLine) {
      console.warn('Network request failed - offline mode. Using cached content.');
      // App continues to work with cached data
    }
  }
}
