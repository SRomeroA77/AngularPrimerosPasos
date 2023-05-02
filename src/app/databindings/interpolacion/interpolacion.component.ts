import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css']
})
export class InterpolacionComponent {
cadena = "cadena de texto ejemplo";

constructor(){}
ngOnInit(){}

getTitle(){
  return "Prueba de método";
}
}
