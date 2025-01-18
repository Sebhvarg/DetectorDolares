import {Component} from '@angular/core';
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent
} from '@ionic/angular/standalone';
import {ExploreContainerComponent} from '../explore-container/explore-container.component';
import {AccesibilidadService} from '../services/accesibilidad.service'


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',

  styleUrls: ['tab3.page.scss'],
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonHeader, IonToolbar, IonTitle, IonContent,],
  providers: []
})
export class Tab3Page {
  constructor(protected accesibilidadService: AccesibilidadService) {
  }
}
