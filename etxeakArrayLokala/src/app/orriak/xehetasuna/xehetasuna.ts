import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Etxeak } from '../../services/etxeak';


@Component({
  imports: [RouterLink],
  selector: 'app-xehetasuna',
  styleUrl: './xehetasuna.css',
  templateUrl: './xehetasuna.html',
})
export class Xehetasuna {

etxeakService = inject(Etxeak)

private route = inject(ActivatedRoute);
id = this.route.snapshot.paramMap.get('id');

etxea = this.id ? this.etxeakService.bat(this.id) : undefined;



}
