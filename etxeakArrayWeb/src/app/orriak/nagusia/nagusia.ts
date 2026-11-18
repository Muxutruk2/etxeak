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
  // Testu-sarrera bat eta «Bilatu» botoia zerrendaren gainean.
  // Hiriaren izenean testua duten etxeak bakarrik erakutsi. Maiuskulek eta minuskulek berdin dute: «chica» idatzita, Chicago aurkitu behar da.
  // Testua hutsik badago, etxe guztiak.
  // Etxeen zerrenda osoa ez da galdu behar: bilaketa batetik bestera, etxe guztien artean bilatzen da.
}
