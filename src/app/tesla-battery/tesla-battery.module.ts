import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// containers
import { TeslaBatteryComponent } from './containers/tesla-battery/tesla-battery.component';
// service
import { BatteryService } from './tesla-battery.service';


@NgModule({
  declarations: [
    // registering our container component
    TeslaBatteryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    // add the service to our sub-module
    BatteryService
  ],
  exports: [
    // exporting so our root module can access
    TeslaBatteryComponent
  ]
})
export class TeslaBatteryModule {}
