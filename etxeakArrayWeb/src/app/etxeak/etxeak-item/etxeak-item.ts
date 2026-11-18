import { Component, input } from '@angular/core';
import { Etxea } from '../../models/etxeak';
import { RouterLink } from '@angular/router';
@Component({
  imports: [RouterLink],
  selector: 'app-etxeak-item',
  styleUrl: './etxeak-item.css',
  templateUrl: './etxeak-item.html',
})
export class EtxeakItem {
  etxea = input.required<Etxea>();
}
