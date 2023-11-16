import { Component } from '@angular/core';
import { ROUTES } from 'src/app/app.config';
import { AuthService } from 'src/app/services/auth.service';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [MessageService]
})
export class NavbarComponent {
  links:NavItemData[]
  isLoggedIn$: Observable<boolean>
  isLoggedIn: boolean = false

  constructor(
    private authService: AuthService,
    private router:Router,
    private messageService: MessageService,
  ) {
    this.links = ROUTES.map((route) =>  new NavItemData(route.path!, route.title as string))
    this.links = this.links.filter((link) => link.path !== "**" && link.path !== "" && link.label !== undefined)
    this.isLoggedIn$ = this.authService.isAuthed$
  }

  logout(): void {
    this.authService.logout().pipe(
      tap(() => {
        this.messageService.add({
          severity:'success',
          summary:'Logout',
          detail:'You have been logged out',
          key: 'br',
        });
        return this.router.navigate(['/login'])
      })
    ).subscribe()
  }
}



class NavItemData {
  path: string;
  label: string;
  constructor(path: string, label: string) {
    this.path = path;
    this.label = label;
  }
}
