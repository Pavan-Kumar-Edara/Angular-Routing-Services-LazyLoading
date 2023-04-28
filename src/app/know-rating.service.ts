import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KnowRatingService {

  constructor() { }

  KnowRating(){
    return "Rated 4+"
  }
}
