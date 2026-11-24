import { Component, input } from '@angular/core';
import { Etxea } from '../../models/etxeak';
import { EtxeakItem } from '../etxeak-item/etxeak-item';

@Component({
  imports: [EtxeakItem],
  selector: 'app-etxeak-zerrenda',
  styleUrl: './etxeak-zerrenda.css',
  templateUrl: './etxeak-zerrenda.html',
})
export class EtxeakZerrenda {
  
  etxeak = input.required<Etxea[]>();
}
