import { Component } from '@angular/core';
import { ROUTES } from 'src/app/app.config';
import { AuthService } from 'src/app/services/auth.service';
import { Observable, map, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  links:NavItemData[]
  isLoggedIn$: Observable<boolean>
  isLoggedIn: boolean = false

  constructor(private authService: AuthService,private router:Router) { 
    this.links = ROUTES.map((route) =>  new NavItemData(route.path!, route.title as string))
    this.links = this.links.filter((link) => link.path !== "**" && link.path !== "" && link.label !== undefined)
    this.isLoggedIn$ = this.authService.isAuthed$
  }

  logout(): void {
    this.authService.logout().pipe(
      tap(() => this.router.navigate(['/login']))
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