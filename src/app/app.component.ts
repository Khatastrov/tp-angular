import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message: string | null = null;

  alert(event) {
    console.log(event.target);
    this.message = "la cagnotte de " + event + " a bien été modifiée ! 😊"

    setTimeout(() => {
      this.message = null;
    }, 2000)
  }
}
