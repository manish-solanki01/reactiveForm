import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { MsgService } from 'src/app/shared/services/msg.service';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor( public productService: ProductService, public msgService: MsgService ) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.productService.allProducts().subscribe({
      next: (res: any) => {
        this.products = res['body']['data'];
        if(this.products.length < 1) {
          this.msgService.warning('Empty!', 'No products available!');
        }
      },
      error: (err: any) => {
        this.msgService.errorHandle(err);
      }
    });
  }

  deleteProduct(product: any) {
    if (confirm("Are you sure to delete " + product.name)) {
      this.productService.delete(product._id).subscribe({
        next: () => {
          this.load();
        },
        error: (err: any) => {
          this.msgService.errorHandle(err);
        }
      });
    }
  }

}
