import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-information-page',
  standalone: true,
  templateUrl: './information-page.component.html',
  styleUrls: ['./information-page.component.scss'],
  imports: [CommonModule, FormsModule, HttpClientModule]
})
export class InformationPageComponent {
  client: any = {};
  submitted = false;

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(form: NgForm) {
    console.log('Form submitted'); // Add this line to verify form submission
    if (form.valid) {
      this.client = form.value;
      console.log('Client information:', this.client); // Log client information

      // Temporarily bypass the API call for testing
      this.submitted = true;
      form.reset();
      console.log('Navigating to user page'); // Add this line to verify navigation
      this.router.navigate(['/user']); // Ensure this line is present

      // Uncomment the following lines to include the API call
      
      this.saveClientInformation(this.client).subscribe(
        response => {
          console.log('Client information saved:', response);
          this.submitted = true;
          form.reset();
          console.log('Navigating to user page'); // Add this line to verify navigation
          this.router.navigate(['/user']); // Ensure this line is present
        },
        error => {
          console.error('Error saving client information:', error);
        }
      );
      
    }
  }

  saveClientInformation(client: any): Observable<any> {
    // Replace with your backend API URL
    const url = 'https://your-backend-api-url.com/clients';
    return this.http.post<any>(url, client);
  }
}
