import { Component } from '@angular/core';
import {Router} from '@angular/router';

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

  slides: {name: string; image: string, color: string}[] = [
    {
      name: 'Nike',
      image: 'assets/images/slide-1.png',
      color: '0, 140, 255'
    },
    {
      name: 'Nike',
      image: 'assets/images/slide-2.png',
      color: '236, 218, 196'
    }
  ]

  products: {name: string, image: string, liked?: boolean}[] = [
    {
      name: 'Ceramic Cup',
      image: 'assets/images/product-2.png'
    },
    {
      name: 'Nike Shoes',
      image: 'assets/images/product-1.png',
      liked: true
    },
    {
      name: 'iPhone 11',
      image: 'assets/images/product-3.png'
    },
    {
      name: 'Towel',
      image: 'assets/images/product-4.png'
    },
    {
      name: 'iPhone 11',
      image: 'assets/images/product-3.png'
    },
    {
      name: 'Ceramic Cup',
      image: 'assets/images/product-2.png'
    },
    {
      name: 'Nike Shoes',
      image: 'assets/images/product-1.png'
    },
    {
      name: 'iPhone 11',
      image: 'assets/images/product-3.png'
    },
    {
      name: 'Towel',
      image: 'assets/images/product-4.png'
    },
  ];

  constructor(private readonly router: Router) {}

  openDetail() {
    this.router.navigate(['/product-detail']);
  }

  getBgImageString(img: string) {
    return `url('${img}')`
  }

  getBgColorString(rgb: string) {
    return `rgb(${rgb})`
  }

  getBgShadowString(rgb: string) {
    return `0px 6px 17px 0px rgba(${rgb},0.66)`
  }
}
