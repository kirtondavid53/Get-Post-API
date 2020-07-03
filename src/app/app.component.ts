import { Component } from '@angular/core';
import { FreeapiService } from './services/freeapi.service';
import { Comments } from './classes/comments'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'get-post-api';
  lstcomments : Comments[];
  constructor(private freeApiService: FreeapiService) { }

  ngOnInit(){
    this.freeApiService.getComments()
    .subscribe
    (
      data => {
        this.lstcomments = data;
      }
    );
  }

}
