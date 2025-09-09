import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule,TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
