import { Component, ViewChild, ElementRef } from '@angular/core';


import TweenMaxModule from "gsap/TweenMax";
import { TimelineMax } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('btnAnimated') btnAnimated: ElementRef;

  animated():void {

    let timeLine = new TimelineMax();

    timeLine.to(this.btnAnimated.nativeElement, 1, {
      y: -100,
      opacity: 0
    })

  }
  
}
