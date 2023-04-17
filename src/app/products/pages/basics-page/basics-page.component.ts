import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'flor';
  public nameUpper: string = 'FLOR';
  public fullName: string = 'flOr SaNtoS';

}
