import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Etxeak } from '../../services/etxeak';
import { Etxea } from '../../models/etxeak';
import { HttpClient } from '@angular/common/http';

@Component({
  imports: [RouterLink],
  selector: 'app-xehetasuna',
  styleUrl: './xehetasuna.css',
  templateUrl: './xehetasuna.html',
})
export class Xehetasuna {
  etxeakService = inject(Etxeak);

  http = inject(HttpClient);
  private route = inject(ActivatedRoute);
  id = this.route.snapshot.paramMap.get('id');

  etxea = signal<Etxea | undefined>(undefined);
  kargatzen = signal(true);

  constructor() {
    if (this.id) {
      this.etxeakService.bat(this.id).subscribe({
        next: (data) => {
          this.etxea.set(data);
        },
        error: (e) => {
          console.error(e);
        },
        complete: () => {
          this.kargatzen.set(false);
        },
      });
    }
  }
}
