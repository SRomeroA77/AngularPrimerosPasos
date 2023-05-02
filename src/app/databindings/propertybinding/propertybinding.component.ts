import { Component } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent {

  estado = false;

  constructor(){}
  ngOnInit(){}

  motrarOcultar(){
    if (this.estado) {
      this.estado = false;
    }
    this.estado = true;
  }
}
