import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ComponentsDemoComponent } from './components-demo/components-demo.component';



@NgModule({
  declarations: [ComponentsDemoComponent],
  exports: [ComponentsDemoComponent],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule {

}