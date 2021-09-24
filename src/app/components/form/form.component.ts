import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../product.service";
import {Form} from "../../model/form.model";
import { Router } from '@angular/router';
import {Subscription} from "rxjs";
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
newProduct = new Form();
/*

   cat_id: Number;
   title: String;
   description: String;
   short_desc: String;
   image: String;
   price: Number;
   quantity: Number;*/
 subs: Subscription[] = [];
  errorMessage: string;
  hasError = false;
  success = false;
  constructor(private productService: ProductService,private router: Router
  ) {

  }
  // tslint:disable-next-line:no-empty
  ngOnInit(): void {
  }


 /*  AddProduct(): void {

  const newProduct = function (product) {

    this.cat_id = product.cat_id;
    this.title = product.title,
      this.description = product.description,
      this.image = product.image,
      this.price = product.price,
      this.short_desc = product.short_desc,
      this.quantity = product.quantity
  };
  this.productService.AddProduct(newProduct).subscribe(res => {
    console.log(res)
  }, error => {
    console.log(error)
  });

}*/

  AddProduct():void {
    this.productService
      .AddProduct(this.newProduct)
      .subscribe((form: any) => {
        // tslint:disable-next-line:no-console
        console.log(form);
        this.router.navigate(['products/all-products']);

      }, error => {
        // tslint:disable-next-line:no-console
      console.log(error)
    });
  }




}




