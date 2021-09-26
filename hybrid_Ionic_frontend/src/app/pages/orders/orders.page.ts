/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {


  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private tokenService: TokenService
  ) { }

  productType: string;
  title: string;
  ngOnInit() {
    // catching the routing params passed from previous page
    this.productType = this.route.snapshot.params.productType;
    this.getCanWater();
    if (this.productType === 'normal') { return this.title = 'Order Water'; }
    else if (this.productType === 'cooling') { return this.title = 'Buy Cans?'; }
    return this.title = 'Water Purifiers';
  }

  products: Product[] = [];
  //  creating a method to get the list of specific can type of normal
  getCanWater() {
    const token = JSON.parse(this.tokenService.retreiveToken());
    this.productService.getSelectedProducts(this.productType, token.role).subscribe((res) => {
      this.products = res;
    }, error => {
      console.log(error);
    }

    );
  }

}
