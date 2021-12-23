import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  productForm: FormGroup;
  id: string;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      console.log(this.id);
      this.getProduct(this.id).subscribe(product => {
        console.log(JSON.stringify(product));
        this.productForm = new FormGroup({
          _id: new FormControl(product._id),
          name: new FormControl(product.name),
          price: new FormControl(product.price),
          description: new FormControl(product.description),
        });
      });
    });
  }

  ngOnInit() {
  }

  getProduct(id: string) {
    // console.log('id: ' + id);
    return this.productService.findById(id);
  }

  deleteProduct(id: string) {
    console.log(id);
    this.productService.deleteProduct(id);
    this.router.navigate(['/product/list']);
  }
}
