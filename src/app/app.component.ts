import { Component } from '@angular/core';
import { FreeapiService } from './services/freeapi.service';
import { Comments } from './classes/comments'
import { Posts } from './classes/post'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'get-post-api';
  lstcomments : Comments[];
  lstpost : Posts[];
  objPosts : Posts;
  constructor(private freeApiService: FreeapiService) { }

  ngOnInit(){
    this.freeApiService.getComments()
    .subscribe
    (
      data => {
        this.lstcomments = data;
      }
    );

    this.freeApiService.getCommentsByParameter()
    .subscribe
    (
      data => {
        this.lstpost = data;
      }
    );
    
    var opost = new Posts();
    opost.body = 'testbody';
    opost.title = 'testtitle';
    opost.userId = 5;

    this.freeApiService.post(opost)
    .subscribe(
      data => {
        this.objPosts = data;
      }
    );
  }
  

}
