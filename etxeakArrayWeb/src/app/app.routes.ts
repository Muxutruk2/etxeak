import { Routes } from '@angular/router';
import { Xehetasuna } from './orriak/xehetasuna/xehetasuna';
import { Nagusia } from './orriak/nagusia/nagusia';

export const routes: Routes = [
  { path: "", component: Nagusia,
  title: 'Xehetasuna' },
  { path: "xehetasuna/:id", component: Xehetasuna,
  title: 'Xehetasuna' }

];
