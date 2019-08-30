import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GenericValidator } from './generic-validator';
import { BaseDomain } from '../prodcts/base-domain';



export abstract class AbstractEdit  {
    protected genericValidator: GenericValidator;
    protected validationMessages: { [key: string]: { [key: string]: string } };
    form: FormGroup;
    protected loading: boolean = true;
    protected errorMessage = '';

    constructor(
        protected formBuilder: FormBuilder,
        protected route: ActivatedRoute,
        protected toastr: ToastrService,
        protected entityName: string
      ) {
        // empty
      }

      public handleError(error): any {
        this.loading = false;
        this.errorMessage = error;
     }

      protected abstract buildForm(): void;

      protected  abstract onRetrieved(data: BaseDomain): void;// {
    //     if (this.form) {
    //         this.form.reset();
    //       }
    //   };

      protected abstract save(): void;

      protected abstract onSaveComplete(): void;

}