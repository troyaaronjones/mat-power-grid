import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class SearchPipe {
    transform(values, args) {
        if (args === undefined) {
            return values;
        }
        return values.filter((value) => {
            return value.text.toLowerCase().includes(args.toLowerCase());
        });
    }
}
SearchPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: SearchPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
SearchPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.3", ngImport: i0, type: SearchPipe, name: "search" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: SearchPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'search'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLW1hdGVyaWFsLWRhdGEtZ3JpZC9zcmMvbGliL2NvbXBvbmVudHMvcGlwZXMvc2VhcmNoLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBS3BELE1BQU0sT0FBTyxVQUFVO0lBRXJCLFNBQVMsQ0FBQyxNQUFXLEVBQUUsSUFBVTtRQUMvQixJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDdEIsT0FBTyxNQUFNLENBQUM7U0FDZjtRQUVELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQ2xDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDL0QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzt1R0FWVSxVQUFVO3FHQUFWLFVBQVU7MkZBQVYsVUFBVTtrQkFIdEIsSUFBSTttQkFBQztvQkFDSixJQUFJLEVBQUUsUUFBUTtpQkFDZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnc2VhcmNoJ1xufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHZhbHVlczogYW55LCBhcmdzPzogYW55KTogYW55IHtcbiAgICBpZiAoYXJncyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXMuZmlsdGVyKCh2YWx1ZTogYW55KSA9PiB7XG4gICAgICByZXR1cm4gdmFsdWUudGV4dC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGFyZ3MudG9Mb3dlckNhc2UoKSk7XG4gICAgfSk7XG4gIH1cblxufVxuIl19