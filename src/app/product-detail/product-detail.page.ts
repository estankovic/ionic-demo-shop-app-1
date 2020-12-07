import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  constructor(private readonly navigation: NavController) { }

  ngOnInit() {
  }

  goBack() {
    this.navigation.navigateBack(['']);
  }

}
