import { Component, OnInit, OnDestroy } from '@angular/core';
import { AbstractEdit } from '../shared/abstract-edit';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from './product.service';
import { GenericValidator } from '../shared/generic-validator';
import { Subscription } from 'rxjs';
import { Product } from './product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent  extends AbstractEdit implements OnInit , OnDestroy{

  private sub: Subscription;
  errorMessage: string;
  product: Product;

  constructor(
    protected formBuilder: FormBuilder,
    protected route: ActivatedRoute,
    protected productService: ProductService,
    protected toastr: ToastrService
  ) {
    super(formBuilder, route, toastr,'Product Edit');
     // Defines all of the validation messages for the form.
    // These could instead be retrieved from a file or database.
    this.validationMessages = {
      productName: {
        required: 'Product name is required.',
        minlength: 'Product name must be at least three characters.',
        maxlength: 'Product name cannot exceed 50 characters.'
      },
      productCode: {
        required: 'Product code is required.'
      },
      starRating: {
        range: 'Rate the product between 1 (lowest) and 5 (highest).'
      }
    };

    // Define an instance of the validator for use with this form,
    // passing in this form's set of validation messages.
    this.genericValidator = new GenericValidator(this.validationMessages);
    
  }

 ngOnInit(): void {
    this.form = this.formBuilder.group({
      productName: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
      productCode: ['', Validators.required],
      description: ''
    });

    // Read the product Id from the route parameter
    this.sub = this.route.params.subscribe(
      params => {
        const id = +params['id'];
        this.getProduct(id);
      }
    );
  }

  getProduct(id: number): void {
    this.productService.getProduct(id)
      .subscribe(
        (product: Product) => this.onRetrieved(product),
        (error: any) =>  this.handleError(error)
      );
  }
  
  onRetrieved(product: Product): void {
    if (this.form) {
      this.form.reset();
    }
    this.product = product;
    // Update the data on the form
    this.form.patchValue({
      productName: this.product.productName,
      productCode: this.product.productCode,
      description: this.product.description
    });
    this.loading=false;

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  protected buildForm(): void {
    throw new Error("Method not implemented.");
  }
  protected save(): void {
    throw new Error("Method not implemented.");
  }
  saveProduct(): void{

  }
  protected onSaveComplete(): void {
    throw new Error("Method not implemented.");
  }
  
}
