import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITracker } from '../_models/ITracker';
import { timestamp } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElementTrackerService {
  private startTimes = new Map<string, number>();

  constructor(private http: HttpClient) { }

  startTracking(elementId: string) {
    this.startTimes.set(elementId, Date.now());
    console.log(this.startTimes);
  }

  stopTracking(elementId: string, eventType: string) {
    const startTime = this.startTimes.get(elementId);
    if (startTime) {
      const duration = Math.ceil((Date.now() - startTime) / 1000);
      this.sendTrackEvent({ elementId, eventType, eventTime: new Date() , duration });
    }
  }


  sendTrackEvent(trackEvent: ITracker) {
    this.http.post('https://localhost:7226/api/activity', trackEvent).subscribe();
}
}
