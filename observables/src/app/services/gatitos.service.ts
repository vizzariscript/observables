import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GatitosService {

  private gatitos:any=[];
  public miradorGatitos:Observable<any> = from(this.gatitos);

  constructor() {

  }

  // crearObservable() {
  //   return new Observable(subscriber => {
  //     subscriber.next(1);
  //     subscriber.next(2);
  //     subscriber.next(3);
  //     setTimeout(() => {
  //       subscriber.next(4);
  //       subscriber.complete();
  //     }, 1000);
  //   });
  // }

  agregarGatito(nombreGatito, img) {
    this.gatitos.push({ nombre: nombreGatito, img: img });
  }

}
