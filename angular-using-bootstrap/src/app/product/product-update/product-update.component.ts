import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private productService: ProductService,
    private activateRoute: ActivatedRoute,
    private router:Router
  ) { }

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((paramMap: ParamMap)=>{
      const id = paramMap.get('id');
      this.product = this.productService.findProductById(Number(id)-1);

      this.productForm.controls['id'].setValue(this.product.id);
      this.productForm.controls['name'].setValue(this.product.name);
      this.productForm.controls['price'].setValue(this.product.price);
      this.productForm.controls['description'].setValue(this.product.description);
    });
  }

  submit(){
    const product = this.productForm.value;
    this.productService.updateById(product.id-1,product);
    console.log(product);
    this.router.navigate(['product/list']);
  }

  delete(){
    const product = this.productForm.value;
    this.productService.deleteById(product.id-1);
    console.log(product);
    this.router.navigate(['product/list']);
  }
}
