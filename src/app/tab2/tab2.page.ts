import {Component} from '@angular/core';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonText, IonButton, IonLabel} from '@ionic/angular/standalone';
import {ExploreContainerComponent} from '../explore-container/explore-container.component';
import {AccesibilidadService} from '../services/accesibilidad.service'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonText, IonButton, IonLabel,],
  providers: []
})
export class Tab2Page {

  constructor(protected accesibilidadService: AccesibilidadService) {

  }


}
