import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {
  constructor(){}
  ngOnInit(){}

  Empleado = {
    Persona: {
      nombre: "Pepe",
      edad: 30,
      sexo: "hombre"
    },
    Persona1: {
      nombre: "María",
      edad: 28,
      sexo: "mujer"
    }
  }

  data = Object.values(this.Empleado);
}
