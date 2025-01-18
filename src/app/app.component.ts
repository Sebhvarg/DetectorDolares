import {Component} from '@angular/core';
import {IonApp, IonRouterOutlet, IonTitle} from '@ionic/angular/standalone';
import {AccesibilidadService} from './services/accesibilidad.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, IonTitle,],
  providers: [AccesibilidadService],
})
export class AppComponent {
  constructor(protected accesibilidadService: AccesibilidadService) {

  }
}
