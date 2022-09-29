import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class ColumnFilterPipe {
    transform(value, ...args) {
        const headings = [];
        value.forEach(heading => {
            if (heading.show || heading.show === undefined) {
                headings.push(heading);
            }
        });
        return headings;
    }
}
ColumnFilterPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ColumnFilterPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
ColumnFilterPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.3", ngImport: i0, type: ColumnFilterPipe, name: "columnFilter" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ColumnFilterPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'columnFilter'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWZpbHRlci5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1tYXRlcmlhbC1kYXRhLWdyaWQvc3JjL2xpYi9jb21wb25lbnRzL3BpcGVzL2NvbHVtbi1maWx0ZXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFLcEQsTUFBTSxPQUFPLGdCQUFnQjtJQUUzQixTQUFTLENBQUMsS0FBWSxFQUFFLEdBQUcsSUFBZTtRQUN4QyxNQUFNLFFBQVEsR0FBYSxFQUFFLENBQUM7UUFDOUIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN0QixJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7Z0JBQzlDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDeEI7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7OzZHQVZVLGdCQUFnQjsyR0FBaEIsZ0JBQWdCOzJGQUFoQixnQkFBZ0I7a0JBSDVCLElBQUk7bUJBQUM7b0JBQ0osSUFBSSxFQUFFLGNBQWM7aUJBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdjb2x1bW5GaWx0ZXInXG59KVxuZXhwb3J0IGNsYXNzIENvbHVtbkZpbHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0odmFsdWU6IGFueVtdLCAuLi5hcmdzOiB1bmtub3duW10pOiBhbnlbXSB7XG4gICAgY29uc3QgaGVhZGluZ3M6IHN0cmluZ1tdID0gW107XG4gICAgdmFsdWUuZm9yRWFjaChoZWFkaW5nID0+IHtcbiAgICAgIGlmIChoZWFkaW5nLnNob3cgfHwgaGVhZGluZy5zaG93ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaGVhZGluZ3MucHVzaChoZWFkaW5nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gaGVhZGluZ3M7XG4gIH1cblxufVxuIl19