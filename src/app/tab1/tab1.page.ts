import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  sliderOptions = {
    slidesPerView: 1.7,
    spaceBetween: 30,
    freeMode: true,
    slidesOffsetAfter: 16,
    slidesOffsetBefore: 16,
    mousewheel: {
      enabled: true
    }
  };

  constructor() {}

}
