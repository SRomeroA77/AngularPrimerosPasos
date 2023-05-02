import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  contador = 1;

  incrementar(){
    this.contador++;
  }
  decrementar(){
    this.contador--;
  }

  constructor(){  }
  ngOnInit(){
    
  }
}
