/// <reference types="youtube" />

import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-dashboard-ui',
  templateUrl: './dashboard-ui.component.html',
  styleUrls: ['./dashboard-ui.component.css']
})
export class DashboardUIComponent implements OnInit, AfterViewInit {
  @ViewChild('videoContainer', { static: true }) videoContainer!: ElementRef;
  private player: YT.Player | undefined;
  constructor()
  {}

  ngOnInit(): void {
    // Load the YouTube IFrame API script if not already loaded
    if (!(window as any).YT) {
      const scriptTag = document.createElement('script');
      scriptTag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(scriptTag);
    }
  }

  ngAfterViewInit(): void {
    // Ensure the YouTube API is available globally
    (window as any).onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady.bind(this);
  }

  onYouTubeIframeAPIReady(): void {
    this.player = new YT.Player(this.videoContainer.nativeElement, {
      height: '315',
      width: '560',
      videoId: '7rocYoaekCk', // Replace with actual video ID
      events: {
        'onReady': this.onPlayerReady.bind(this),
        'onStateChange': this.onPlayerStateChange.bind(this)
      }
    });
  }

  onPlayerReady(event: YT.PlayerEvent): void {
    console.log('Player is ready');
    // You can optionally play the video once it's ready
    // event.target.playVideo();
  }

  onPlayerStateChange(event: YT.OnStateChangeEvent): void {
    console.log('Player state changed to:', event.data);
  }
}
