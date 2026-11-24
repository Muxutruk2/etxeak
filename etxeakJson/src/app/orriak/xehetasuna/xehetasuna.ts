import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Etxeak } from '../../services/etxeak';
import { Etxea } from '../../models/etxeak';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Interesatua } from '../../models/interesatuak';

@Component({
  imports: [RouterLink,FormsModule],
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

  // Interesatuen atala
  izena: string = '';
  abizena: string = '';
  emaila: string = '';

  interesatuak: Interesatua[] = []

  bidali(id : string){
    const interesatua = {
      izena: this.izena,
      abizena: this.abizena,
      emaila: this.emaila,
      etxeaId: id
    
    };

    this.interesatuak.push(interesatua)
    localStorage.setItem( 'interesatuak', JSON.stringify(this.interesatuak));

    this.izena = '';
    this.abizena = '';
    this.emaila = '';
  }

}
