import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  id: number;
  categories: Category[] = [];
  currentCat: Category;
  productCategories: Category[];

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
      this.getCurrentCat(this.id);
    });
  }

  ngOnInit() {
    this.getAllCategory();
  }

  getProduct(id: number) {
    return this.productService.findById(id).subscribe(product => {
      this.productForm = new FormGroup({
        name: new FormControl(product.name),
        unitPrice: new FormControl(product.unitPrice),
        description: new FormControl(product.description),
        category: new FormControl(product._links)
      });
      console.log(product._links);
    });
  }

  updateProduct(id: number) {
    const product = this.productForm.value;
    product.category = {
      id: product.category.id,
      categoryName: product.category.name
    };
    this.productService.updateProduct(id, product);
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe(categoires => {
      this.categories = categoires;
    });
  }

  private getCurrentCat(id: number) {
    this.productService.getCategory(id).subscribe(cat => {
      this.currentCat = cat;
      console.log('This is cat: ');
      console.log(cat);
    });
  }
}
