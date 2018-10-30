import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  setupId = 'ae9a79d0-d93a-11e8-aebb-51df6010fd72';
  channelId = null;
  authId = null;

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  ngAfterViewInit() {
    this.elementRef.nativeElement.addEventListener('bearer|2627b8-slack-sharing|connect|authorized', (event: any) => {
      this.authId = event.detail.authId;
    });

    this.elementRef.nativeElement.addEventListener('bearer|2627b8-slack-sharing|channel|saved', (event: any) => {
      this.channelId = event.detail.channelId;
    });
  }
}
