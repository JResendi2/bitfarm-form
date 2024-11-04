import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisableButtonService {
  private disableSubject = new BehaviorSubject<boolean>(false); // Estado del botón
  disable$ = this.disableSubject.asObservable();

  disableButton() {
    this.disableSubject.next(true); // Cambiar estado a deshabilitado
  }

  enableButton() {
    this.disableSubject.next(false); // Cambiar estado a habilitado
  }
}
