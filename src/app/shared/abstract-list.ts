import { DataService } from '../prodcts/data.service';
import { ToastrService } from 'ngx-toastr';

export abstract class AbstractIndexComponent  {
    protected loading: boolean = true;
    protected data: any;
  
    constructor(
        protected dataService: DataService<any>,
        protected toastr: ToastrService,
        protected entityName: string
    ) {
      // empty
    }

    public handleError(error): any {
        this.loading = false;
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

}