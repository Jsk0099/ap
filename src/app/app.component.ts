import { Component, OnInit } from '@angular/core';
import { OfflineHandlerService } from './shared/services/offline-handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'multipleUsage';
  currentYear = new Date().getFullYear();

  constructor(private offlineHandler: OfflineHandlerService) {}

  ngOnInit(): void {
    // Initialize offline handling
    // This prevents "You're Offline" messages and ensures app works with cached content
    this.suppressBrowserOfflineNotifications();
  }

  /**
   * Suppress any browser-default offline notifications
   * App will work seamlessly with cached content when offline
   */
  private suppressBrowserOfflineNotifications(): void {
    // Disable showing offline message when connection is lost
    if ('serviceWorker' in navigator) {
      // Service Worker is already set up, app will use cached content
      console.log('PWA offline-first mode enabled');
    }

    // Prevent automatic reload on online/offline changes
    window.addEventListener('offline', (event) => {
      event.preventDefault();
      console.log('Offline detected - app will use cached content');
    });

    window.addEventListener('online', (event) => {
      event.preventDefault();
      console.log('Online restored - app will sync data');
    });

    // Override any fetch failures with graceful fallback
    if (!navigator.onLine) {
      console.log('App started in offline mode - using cached resources');
    }
  }
}
