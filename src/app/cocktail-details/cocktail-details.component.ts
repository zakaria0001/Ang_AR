import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay, switchMap } from 'rxjs/operators';
import { CocktailService } from '../cocktail.service';
import { Observable } from 'rxjs';
import { Cocktail } from '../cocktail.model';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css']
})
export class CocktailDetailsComponent implements OnInit {
  // Importing Cocktails Model to compare it 
  cocktail : Cocktail; 

  // calling both activatedroute (provides access to information about a route associated with a component that is loaded in an outlet)
  // and CocktailService that contains methods we can use to get cocktail's detail 
  constructor(private activatedRoute:ActivatedRoute) { }

  // on the launch of the component we will call those methods
  ngOnInit(): void {
    // get The returned data from the resolver and map it 
   this.activatedRoute.data.subscribe(
      (data:{
        cocktail:Cocktail
      })=>{
        this.cocktail=data.cocktail;
      }
    )
  }

}
