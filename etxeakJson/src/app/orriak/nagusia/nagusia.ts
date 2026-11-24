import { Component, inject, signal } from '@angular/core';
import { Etxeak } from '../../services/etxeak';
import { EtxeakZerrenda } from '../../etxeak/etxeak-zerrenda/etxeak-zerrenda';
import { FormsModule } from '@angular/forms';
import { Etxea } from '../../models/etxeak';

@Component({
  imports: [EtxeakZerrenda,FormsModule],
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

  etxeInput = signal<string>("")
  etxeak: Etxea[] = []

  constructor(){
    this.etxeak = this.etxeakService.etxeak
  }

  bilatu(){
   this.etxeak =  this.etxeakService.bilatu(this.etxeInput())
  }
}
