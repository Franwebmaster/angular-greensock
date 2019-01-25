import { Component, ViewChild, ElementRef } from '@angular/core';


import { TimelineMax, Power2, Expo } from 'gsap';
import TweenMaxModule from "gsap/TweenMax";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('btnAnimated') btnAnimated: ElementRef;
  @ViewChild('backgroundText') backgroundText: ElementRef;
  @ViewChild('containerOverlay') containerOverlay: ElementRef;
  @ViewChild('containerOverlayTwo') containerOverlayTwo: ElementRef;

  animated():void {

    let timeLine = new TimelineMax();

    timeLine.to(this.btnAnimated.nativeElement, 1, {
      y: -100,
      opacity: 0
    })
    .to(this.backgroundText.nativeElement, 2, {
      y: -400,
      opacity: 0,
      ease: Power2.easeInOut,
    }, 2)
    .from(this.containerOverlay.nativeElement, 2, {
      ease: Power2.easeInOut
    })
    .to(this.containerOverlay.nativeElement, 2, {
      top: "-110%",
      ease: Expo.easeInOut
    }, 2.6)
    .to(this.containerOverlayTwo.nativeElement, 2, {
      top: "-110%",
      ease: Expo.easeInOut
    }, 3)
  }
  
}
