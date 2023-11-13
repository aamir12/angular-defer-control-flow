import { Component, Input, inject } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [YouTubePlayerModule],
  template: `
    @if(apiLoaded()) {
    <youtube-player
      [playerVars]="{ autoplay: 1 }"
      [width]="800"
      [height]="400"
      [videoId]="id"
    />
    }
  `,
  styles: `
    :host {
      display: flex;
      height: 400px;
      position: relative;
      overflow: hidden;
      width: 100%;
      padding-top: 56.25%;
    }

    
  `,
})
export class VideoComponent {
  @Input({ required: true })
  id!: string;

  apiLoaded = inject(YoutubeService).apiLoaded;

  ngOnInit() {}
}
