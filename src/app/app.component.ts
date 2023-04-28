import { Component } from '@angular/core';
import { KnowRatingService } from './know-rating.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LazyLoading-Routing-Services';


   result:string|undefined;
   constructor(private ratingService:KnowRatingService){}

   Rating(){
    this.result=this.ratingService.KnowRating()
    alert(this.result)
   }
 }
