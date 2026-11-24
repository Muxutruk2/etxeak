import { inject, Service } from '@angular/core';
import { Etxea } from '../models/etxeak';
import { HttpClient } from '@angular/common/http';

const ARGAZKIAK = 'https://angular.dev/assets/images/tutorials/common/';

@Service()
export class Etxeak {
  private http = inject(HttpClient)

  guztiak(){
    return this.http.get<Etxea[]>("http://localhost:3000/etxeak")
  }

    bilaketa(bilaketa: string){
    return this.http.get<Etxea[]>(`http://localhost:3000/etxeak?city:contains=${bilaketa}`)
  }

  bat(id: string){
     return this.http.get<Etxea>(`http://localhost:3000/etxeak/${id}`)
  }

  bilatu(izena : string){
      const inputIzena = izena.trim().toLowerCase()
      if(!inputIzena) return this.guztiak()
      return this.bilaketa(izena);
  }
}


