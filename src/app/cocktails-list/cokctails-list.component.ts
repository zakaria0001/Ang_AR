import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Observable } from 'rxjs';
import { Cocktail } from '../cocktail.model';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cokctails-list.component.html',
  styleUrls: ['./cokctails-list.component.css']
})
export class CocktailsListComponent implements OnInit {
  cocktails$ : Observable<Cocktail[]>; 
  
  constructor(private cocktailService:CocktailService) { }

  ngOnInit(): void {
    this.cocktails$ = this.cocktailService.listByFirstLetter('a');
  }

}
