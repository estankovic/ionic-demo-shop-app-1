import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';
import {IonContent} from '@ionic/angular';

@Directive({
  selector: '[imageContentHeader]'
})
export class ImageContentHeaderDirective implements AfterViewInit {

  @Input() container: IonContent;

  @Input() imageSectionHeight = 300;

  constructor(private readonly el: ElementRef<HTMLElement>) { }

  ngAfterViewInit(): void {
    this.initTransparency();
    this.registerListeners();
  }


  initTransparency() {
    this.el.nativeElement.style.setProperty('--background', 'transparent');
  }

  calcToolbarHeight() {
    return this.el.nativeElement.clientHeight;
  }

  async registerListeners() {

    this.container.ionScroll.subscribe(({detail}) => {
      if (detail.scrollTop > (this.imageSectionHeight + this.calcToolbarHeight())) {
        this.el.nativeElement.style.removeProperty('--background');
      } else {
        this.el.nativeElement.style.setProperty('--background', 'transparent');
      }
    });
  }
}
