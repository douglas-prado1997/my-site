import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Header } from "../../shared/header/header";
import { Footer } from "../../shared/footer/footer";
import { Page } from "../../shared/page/page";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, Header, Footer, Page],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {

}
