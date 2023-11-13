import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  public readonly apiLoaded = signal(false);

  constructor() {
    if (!this.apiLoaded()) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const scriptElement = document.createElement('script') as HTMLScriptElement;
      scriptElement.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(scriptElement);
      scriptElement.onload = () => {
        this.apiLoaded.set(true);
      }
      scriptElement.onerror = () => {
        this.apiLoaded.set(false);
      }
    }
  }
}
