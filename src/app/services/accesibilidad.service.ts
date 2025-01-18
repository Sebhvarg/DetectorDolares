import {Injectable} from '@angular/core';
import {Opciones} from '../interfaz/opciones'

@Injectable({
  providedIn: 'root',
})
export class AccesibilidadService {

  private op: Opciones = {
    "font_size": 16,
  };

  constructor() {
  }

  public SetFontSize(newSize: number) {
    if (newSize >= 10 && newSize <= 52) {
      this.op.font_size = newSize;
      document.documentElement.style.setProperty('--ion-font-size', newSize + 'px');
      console.log(document.documentElement.style.getPropertyValue('--ion-font-size'));
    }
  }

  public SetFontToDefaultSize() {
    this.SetFontSize(16);
  }

  public GetFontSize() {
    return this.op.font_size;
  }
}
