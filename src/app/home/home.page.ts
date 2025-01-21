import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonLabel, IonButton, IonAlert } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonLabel, IonButton, FormsModule, IonAlert],
})
export class HomePage {
  altura : number = 0;
  peso : number = 0;
  imc : number = 0;
  alertButtons = ['Cerrar'];
  constructor() {}
  calcularIMC() {
    this.imc = this.peso / (this.altura * this.altura);
    this.imc = parseFloat(this.imc.toFixed(2));
    console.log(this.imc);
  }
}
