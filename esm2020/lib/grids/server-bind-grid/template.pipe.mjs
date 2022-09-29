import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
export class TemplatePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, args) {
        let modifiedTemplate = value;
        const splitOne = value.split('{{');
        splitOne.splice(0, 1); // remove first element
        splitOne.forEach((item) => {
            const [customVariable] = item.split('}}');
            modifiedTemplate = modifiedTemplate.replaceAll('{{' + customVariable + '}}', args[customVariable]);
        });
        return this.sanitizer.bypassSecurityTrustHtml(modifiedTemplate);
    }
}
TemplatePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: TemplatePipe, deps: [{ token: i1.DomSanitizer }], target: i0.ɵɵFactoryTarget.Pipe });
TemplatePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.3", ngImport: i0, type: TemplatePipe, name: "template" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: TemplatePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'template'
                }]
        }], ctorParameters: function () { return [{ type: i1.DomSanitizer }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZGF0YS1ncmlkL3NyYy9saWIvZ3JpZHMvc2VydmVyLWJpbmQtZ3JpZC90ZW1wbGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOzs7QUFNcEQsTUFBTSxPQUFPLFlBQVk7SUFFdkIsWUFBb0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztJQUFHLENBQUM7SUFFL0MsU0FBUyxDQUFDLEtBQVUsRUFBRSxJQUFTO1FBQzdCLElBQUksZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzdCLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyx1QkFBdUI7UUFDOUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQVksRUFBRSxFQUFFO1lBQ2hDLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDLFVBQVUsQ0FBRSxJQUFJLEdBQUcsY0FBYyxHQUFHLElBQUksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUN0RyxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7O3lHQWJVLFlBQVk7dUdBQVosWUFBWTsyRkFBWixZQUFZO2tCQUh4QixJQUFJO21CQUFDO29CQUNKLElBQUksRUFBRSxVQUFVO2lCQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQFBpcGUoe1xuICBuYW1lOiAndGVtcGxhdGUnXG59KVxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHt9XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGFyZ3M6IGFueSk6IFNhZmVIdG1sIHtcbiAgICBsZXQgbW9kaWZpZWRUZW1wbGF0ZSA9IHZhbHVlO1xuICAgIGNvbnN0IHNwbGl0T25lID0gdmFsdWUuc3BsaXQoJ3t7Jyk7XG4gICAgc3BsaXRPbmUuc3BsaWNlKDAsIDEpOyAvLyByZW1vdmUgZmlyc3QgZWxlbWVudFxuICAgIHNwbGl0T25lLmZvckVhY2goKGl0ZW06IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgW2N1c3RvbVZhcmlhYmxlXSA9IGl0ZW0uc3BsaXQoJ319Jyk7XG4gICAgICBtb2RpZmllZFRlbXBsYXRlID0gbW9kaWZpZWRUZW1wbGF0ZS5yZXBsYWNlQWxsKCAne3snICsgY3VzdG9tVmFyaWFibGUgKyAnfX0nLCBhcmdzW2N1c3RvbVZhcmlhYmxlXSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKG1vZGlmaWVkVGVtcGxhdGUpO1xuICB9XG5cbn1cbiJdfQ==