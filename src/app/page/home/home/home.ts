import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Header } from "../../shared/header/header";
import { Footer } from "../../shared/footer/footer";
import { Page } from "../../shared/page/page";
import { UnderConstruction } from "../../shared/under-construction/under-construction";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, Header, Footer, Page, UnderConstruction],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  IsDev: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const value = localStorage.getItem('IsDev');
      this.IsDev = value === 'true';
    }
  }

  toggleProduction() {
    if (isPlatformBrowser(this.platformId)) {
      this.IsDev = !this.IsDev;
      localStorage.setItem('IsDev', this.IsDev.toString());
    }
  }
}

