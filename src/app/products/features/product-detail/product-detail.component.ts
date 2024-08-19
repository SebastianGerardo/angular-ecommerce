import { Component, effect, inject, input } from '@angular/core';
import { ProductsStateService } from '../../data-access/products-state.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../data-access/products.service';
import { ProductsDetailStateService } from '../../data-access/products-detail-state.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styles: ``,
  providers: [ProductsDetailStateService]
})
export default class ProductDetailComponent {
  productDetailState = inject(ProductsDetailStateService).state;

  // ---- Primera forma ----
  // private activatedRoute = inject(ActivatedRoute)

  // constructor() {
  //   this.activatedRoute.params.subscribe((params) => {
  //     console.log(params)
  //   })
  // }

  // ---- Segunda forma ----
  id = input.required<string>();

  constructor() {
    effect(() => {
      console.log(this.id());
      this.productDetailState.getById(this.id());
    });
  }
  // ----------------
}
