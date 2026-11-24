import { Service } from '@angular/core';
import { Etxea } from '../models/etxeak';

const ARGAZKIAK = 'https://angular.dev/assets/images/tutorials/common/';

@Service()
export class Etxeak {
  etxeak: Etxea[] = [
    {
      id: '0',
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: "etxeak0.jpg",
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      id: '1',
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo:  "etxeak1.jpg",
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      id: '2',
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo:  "etxeak2.jpg",
      availableUnits: 1,
      wifi: false,
      laundry: false,
    },
    {
      id: '3',
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      photo:  "etxeak3.jpg",
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: '4',
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo:  "etxeak4.jpg",
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: '5',
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
      photo:  "etxeak5.jpg",
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: '6',
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo:  "etxeak6.jpg",
      availableUnits: 5,
      wifi: true,
      laundry: true,
    },
    {
      id: '7',
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo:  "etxeak7.jpg",
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: '8',
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo:  "etxeak8.jpg",
      availableUnits: 10,
      wifi: false,
      laundry: false,
    },
    {
      id: '9',
      name: 'Capital Safe Towns',
      city: 'Portland',
      state: 'OR',
      photo:  "etxeak9.jpg",
      availableUnits: 6,
      wifi: true,
      laundry: true,
    },
  ];

  guztiak():Etxea[]{
    return this.etxeak
  }

  bat(id: string){
    return this.etxeak.find(e => e.id === id)
  }

  bilatu(izena : string):Etxea[]{
      const inputIzena = izena.trim().toLowerCase()
      if(!inputIzena) return this.etxeak
      return this.etxeak.filter(e =>
      e.city.toLowerCase().includes(inputIzena));
  }
}


