import {ViewChild, ElementRef, Component, signal, OnInit} from '@angular/core';
import {
  IonCardContent, IonButton, IonList, IonItem, IonLabel,
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonFab, IonFabButton, IonIcon, IonCard,
} from '@ionic/angular/standalone';
import {ExploreContainerComponent} from '../explore-container/explore-container.component';
import {addIcons} from 'ionicons';
import {cloudUploadOutline} from 'ionicons/icons';
import {TeachablemachineService} from '../services/teachablemachine.service';
import {PercentPipe} from '@angular/common';
import {Camera, CameraResultType, CameraSource} from '@capacitor/camera';
import {AccesibilidadService} from '../services/accesibilidad.service'


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    PercentPipe,
    IonCardContent, IonButton, IonList, IonItem, IonLabel,
    IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,
    IonFab, IonFabButton, IonIcon, IonCard,
  ],
})

export class Tab1Page implements OnInit {

  @ViewChild('image', {static: false}) imageElement!: ElementRef<HTMLImageElement>;
  imageReady = signal(false)
  imageUrl = signal("")
  captureImage: string | undefined;
  modelLoaded = signal(false);
  classLabels: string[] = [];
  /* Lista de predicciones */
  predictions: any[] = [];

  constructor(private teachablemachine: TeachablemachineService, protected accesibilidadService: AccesibilidadService) {
    addIcons({cloudUploadOutline});
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      const reader = new FileReader();

      // Convertir el archivo a una URL base64 para mostrarlo en el html
      reader.onload = () => {
        this.imageUrl.set(reader.result as string)
        this.imageReady.set(true)
      };

      reader.readAsDataURL(file); // Leer el archivo como base64
    }
  }

  /* Método ngOnInit para cargar el modelo y las clases */
  async ngOnInit() {
    await this.teachablemachine.loadModel()
    this.classLabels = this.teachablemachine.getClassLabels()
    this.modelLoaded.set(true)
  }

  /* Método para obtener la predicción a partir de la imagen */
  async predict() {
    try {
      const image = this.imageElement.nativeElement;
      this.predictions = await this.teachablemachine.predict(image);
    } catch (error) {
      console.error(error);
      alert('Error al realizar la predicción.');
    }
  }

  async openCamera() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        source: CameraSource.Camera,
      });

      this.captureImage = image.base64String;

      // Verifica que `this.captureImage` no sea undefined antes de asignar
      this.imageUrl.set(this.captureImage || ''); // Usa un valor vacío como fallback
      this.imageReady.set(true);
    } catch (error) {
      console.error('Error al abrir la cámara:', error);
      alert('Error al acceder a la cámara.');
    }
  }

  async openGallery() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        source: CameraSource.Photos,
      });

      this.captureImage = image.base64String;

      // Verifica que `this.captureImage` no sea undefined antes de asignar
      this.imageUrl.set(this.captureImage || ''); // Usa un valor vacío como fallback
      this.imageReady.set(true);
    } catch (error) {
      console.error('Error al abrir la galería:', error);
      alert('Error al acceder a la galería.');
    }
  }

  async clearImage() {
    this.imageUrl.set('');
    this.imageReady.set(false);
  }

}
