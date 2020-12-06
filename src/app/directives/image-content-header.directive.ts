import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';
import {IonContent} from '@ionic/angular';

@Directive({
  selector: '[imageContentHeader]'
})
export class ImageContentHeaderDirective implements AfterViewInit {

  @Input() container: IonContent;

  @Input() imageSectionHeight = 300;


  private toolbarHeight = 0;

  constructor(private readonly el: ElementRef<HTMLElement>) {
    console.log('HERE')
  }

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
      console.log(this.calcToolbarHeight())


      if (detail.scrollTop > (this.imageSectionHeight + this.calcToolbarHeight())) {
        this.el.nativeElement.style.removeProperty('--background');
      } else {
        this.el.nativeElement.style.setProperty('--background', 'transparent');
      }

    });
  }




}
