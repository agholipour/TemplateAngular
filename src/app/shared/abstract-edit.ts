import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GenericValidator } from './generic-validator';
import { BaseDomain } from '../prodcts/base-domain';



export abstract class AbstractEdit  {
    protected genericValidator: GenericValidator;
    protected validationMessages: { [key: string]: { [key: string]: string } };
    protected form: FormGroup;

    constructor(
        protected formBuilder: FormBuilder,
        protected route: ActivatedRoute,
        protected toastr: ToastrService
      ) {
        // empty
      }

      public handleError(error): any {
        let message = '';
    
        if (error.json) {
          error = error.json();
        }
    
        if (typeof error['message'] !== 'undefined') {
          message = error.message;
        } else if (typeof error['messages']['error'] !== 'undefined') {
          message = error.messages.error.map((e) => e.message).join(', ');
        }
    
        return this.toastr.error(message, 'Error');
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