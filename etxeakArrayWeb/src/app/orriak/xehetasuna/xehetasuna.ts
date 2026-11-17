import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-xehetasuna',
  styleUrl: './xehetasuna.css',
  templateUrl: './xehetasuna.html',
})
export class Xehetasuna {
  private route = inject(ActivatedRoute)
  id = this.route.snapshot.paramMap.get("id")
}
