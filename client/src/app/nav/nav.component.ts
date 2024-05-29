import { Component, inject } from '@angular/core';
import { HomeComponent } from "../home/home.component";
import { AccountService } from 'app/_services/account.service';
import { Router, RouterLink } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
    selector: 'app-nav',
    standalone: true,
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.css',
    imports: [HomeComponent, RouterLink, BsDropdownModule]
})
export class NavComponent {
    accountService = inject(AccountService);
    private router = inject(Router)

    logout() {
        this.accountService.logout();
        this.router.navigateByUrl('/');
    }
}
