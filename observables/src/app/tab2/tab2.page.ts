import { Component } from '@angular/core';
import { GatitosService } from '../services/gatitos.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private gatitos: GatitosService) {
    this.gatitos.miradorGatitos.subscribe({
      next(gatitos) {
        console.log(gatitos);
      }
    });
  }

  crearObservable() {
    // this.gatitos.crearObservable().subscribe({
    //   next(x) { console.log('got value ' + x); },
    //   error(err) { console.error('something wrong occurred: ' + err); },
    //   complete() { console.log('done'); }
    // });
  }

  agregarGatito(name, img) {
    this.gatitos.agregarGatito(name, img);
  }
}
