import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EmpleadoCComponent } from './empleado-c/empleado-c.component';
import { NgifComponent } from './directivas/ngif/ngif.component';
import { NgforComponent } from './directivas/ngfor/ngfor.component';
import { NgswitchComponent } from './directivas/ngswitch/ngswitch.component';
import { NgmodelComponent } from './directivas/ngmodel/ngmodel.component';
import { NgclassComponent } from './directivas/ngclass/ngclass.component';
import { NgstyleComponent } from './directivas/ngstyle/ngstyle.component';
import { FormsModule } from '@angular/forms';
import { InterpolacionComponent } from './databindings/interpolacion/interpolacion.component';
import { PropertybindingComponent } from './databindings/propertybinding/propertybinding.component';
import { EventbindingComponent } from './databindings/eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './databindings/twowaybinding/twowaybinding.component';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    EmpleadoCComponent,
    NgifComponent,
    NgforComponent,
    NgswitchComponent,
    NgmodelComponent,
    NgclassComponent,
    NgstyleComponent,
    InterpolacionComponent,
    PropertybindingComponent,
    EventbindingComponent,
    TwowaybindingComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
