import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'app/_services/account.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  private accountService = inject(AccountService);
  private router = inject(Router)
  
  ngOnInit(): void {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }  
}
