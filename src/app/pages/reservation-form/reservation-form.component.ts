import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [FormsModule, CommonModule],

  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss'],
})
export class ReservationFormComponent {
  @Input() station: any;


constructor(private router: Router) {


}

ngOnInit() {

}

searchWagons() {
  this.router.navigate(['/tickets']);

}



}
