import { DataService } from '../prodcts/data.service';
import { ToastrService } from 'ngx-toastr';

export abstract class AbstractIndexComponent  {
    protected loading: boolean = true;
    protected data: any;
    protected errorMessage = '';

    constructor(
        protected dataService: DataService<any>,
        protected toastr: ToastrService,
        protected entityName: string
    ) {
      // empty
    }

    public handleError(error): any {
        this.loading = false;
        this.errorMessage = error;
     }

}