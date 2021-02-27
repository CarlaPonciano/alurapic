import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
    {
      url: 'https://dmwnh9nwzeoaa.cloudfront.net/2020-11/ciandt-logo-thumbnail.png',
      description: 'CI&T'
    }, 
    {
      url: 'https://www.folhavitoria.com.br/geral/blogs/empregoseconcursos/wp-content/uploads/2019/09/CIT.jpg',
      description: 'CI&T Base CPS'
    }
  ]
}
