import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class ColumnSearchFilterPipe {
    transform(values, args) {
        if (args === undefined) {
            return values;
        }
        return values.filter(value => {
            return value.display.toLowerCase().includes(args.toLowerCase());
        });
    }
}
ColumnSearchFilterPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ColumnSearchFilterPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
ColumnSearchFilterPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.3", ngImport: i0, type: ColumnSearchFilterPipe, name: "columnSearchFilter" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ColumnSearchFilterPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'columnSearchFilter'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXNlYXJjaC1maWx0ZXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZGF0YS1ncmlkL3NyYy9saWIvY29tcG9uZW50cy9waXBlcy9jb2x1bW4tc2VhcmNoLWZpbHRlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUtwRCxNQUFNLE9BQU8sc0JBQXNCO0lBRWpDLFNBQVMsQ0FBQyxNQUFhLEVBQUUsSUFBUztRQUNoQyxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDdEIsT0FBTyxNQUFNLENBQUM7U0FDZjtRQUVELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMzQixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ2xFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7bUhBVlUsc0JBQXNCO2lIQUF0QixzQkFBc0I7MkZBQXRCLHNCQUFzQjtrQkFIbEMsSUFBSTttQkFBQztvQkFDSixJQUFJLEVBQUUsb0JBQW9CO2lCQUMzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnY29sdW1uU2VhcmNoRmlsdGVyJ1xufSlcbmV4cG9ydCBjbGFzcyBDb2x1bW5TZWFyY2hGaWx0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHZhbHVlczogYW55W10sIGFyZ3M6IGFueSk6IGFueVtdIHtcbiAgICBpZiAoYXJncyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXMuZmlsdGVyKHZhbHVlID0+IHtcbiAgICAgIHJldHVybiB2YWx1ZS5kaXNwbGF5LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoYXJncy50b0xvd2VyQ2FzZSgpKTtcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=