import { Component, inject } from '@angular/core';
import { Etxeak } from '../../services/etxeak';
import { EtxeakZerrenda } from '../../etxeak/etxeak-zerrenda/etxeak-zerrenda';

@Component({
  imports: [EtxeakZerrenda],
  selector: 'app-nagusia',
  styleUrl: './nagusia.css',
  templateUrl: './nagusia.html',
})
export class Nagusia {
  etxeakService = inject(Etxeak);
}
