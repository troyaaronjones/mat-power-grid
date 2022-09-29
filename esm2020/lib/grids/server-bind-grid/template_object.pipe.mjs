import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class TemplateObjectPipe {
    constructor() { }
    transform(value, args) {
        let modifiedTemplate = JSON.stringify(value);
        const splitOne = modifiedTemplate.split('{{');
        splitOne.splice(0, 1); // remove first element
        splitOne.forEach((item) => {
            const [customVariable] = item.split('}}');
            modifiedTemplate = modifiedTemplate.replaceAll('{{' + customVariable + '}}', args[customVariable]);
        });
        return JSON.parse(modifiedTemplate);
    }
}
TemplateObjectPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: TemplateObjectPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
TemplateObjectPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.3", ngImport: i0, type: TemplateObjectPipe, name: "template_object" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: TemplateObjectPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'template_object'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGVfb2JqZWN0LnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLW1hdGVyaWFsLWRhdGEtZ3JpZC9zcmMvbGliL2dyaWRzL3NlcnZlci1iaW5kLWdyaWQvdGVtcGxhdGVfb2JqZWN0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBS3BELE1BQU0sT0FBTyxrQkFBa0I7SUFFN0IsZ0JBQWUsQ0FBQztJQUVoQixTQUFTLENBQUMsS0FBVSxFQUFFLElBQVM7UUFDN0IsSUFBSSxnQkFBZ0IsR0FBUSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xELE1BQU0sUUFBUSxHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLHVCQUF1QjtRQUM5QyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBWSxFQUFFLEVBQUU7WUFDaEMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxDQUFFLElBQUksR0FBRyxjQUFjLEdBQUcsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQ3RHLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDdEMsQ0FBQzs7K0dBYlUsa0JBQWtCOzZHQUFsQixrQkFBa0I7MkZBQWxCLGtCQUFrQjtrQkFIOUIsSUFBSTttQkFBQztvQkFDSixJQUFJLEVBQUUsaUJBQWlCO2lCQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAndGVtcGxhdGVfb2JqZWN0J1xufSlcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZU9iamVjdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGFyZ3M6IGFueSk6IEpTT04ge1xuICAgIGxldCBtb2RpZmllZFRlbXBsYXRlOiBhbnkgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgY29uc3Qgc3BsaXRPbmUgPSBtb2RpZmllZFRlbXBsYXRlLnNwbGl0KCd7eycpO1xuICAgIHNwbGl0T25lLnNwbGljZSgwLCAxKTsgLy8gcmVtb3ZlIGZpcnN0IGVsZW1lbnRcbiAgICBzcGxpdE9uZS5mb3JFYWNoKChpdGVtOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IFtjdXN0b21WYXJpYWJsZV0gPSBpdGVtLnNwbGl0KCd9fScpO1xuICAgICAgbW9kaWZpZWRUZW1wbGF0ZSA9IG1vZGlmaWVkVGVtcGxhdGUucmVwbGFjZUFsbCggJ3t7JyArIGN1c3RvbVZhcmlhYmxlICsgJ319JywgYXJnc1tjdXN0b21WYXJpYWJsZV0pO1xuICAgIH0pO1xuICAgIHJldHVybiBKU09OLnBhcnNlKG1vZGlmaWVkVGVtcGxhdGUpO1xuICB9XG5cbn1cbiJdfQ==