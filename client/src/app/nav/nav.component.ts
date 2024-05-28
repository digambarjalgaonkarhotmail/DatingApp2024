import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";

@Component({
    selector: 'app-nav',
    standalone: true,
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.css',
    imports: [HomeComponent]
})
export class NavComponent {

}
