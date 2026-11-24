import { Routes } from '@angular/router';
import { Xehetasuna } from './orriak/xehetasuna/xehetasuna';
import { Nagusia } from './orriak/nagusia/nagusia';

export const routes: Routes = [
  { path: "", component: Nagusia,
  title: 'Zerrenda' },
  { path: "xehetasuna/:id", component: Xehetasuna,
  title: 'Xehetasuna' }

];
