import { Component, inject } from '@angular/core';
import { EtxeakItem } from '../../etxeak/etxeak-item/etxeak-item';
import { Etxea } from '../../models/etxeak';
import { Etxeak } from '../../services/etxeak';
import { EtxeakZerrenda } from '../../etxeak/etxeak-zerrenda/etxeak-zerrenda';

@Component({
  imports: [EtxeakItem, EtxeakZerrenda],
  selector: 'app-nagusia',
  styleUrl: './nagusia.css',
  templateUrl: './nagusia.html',
})
export class Nagusia {
  testEtxea: Etxea = {
    id: '9999',
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: 'https://angular.dev/assets/images/tutorials/common/example-house.jpg',
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };


  etxeakService = inject(Etxeak)
}
