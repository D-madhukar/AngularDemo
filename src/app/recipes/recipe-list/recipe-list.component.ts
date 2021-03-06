import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is  simply a  test', 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png'),
    new Recipe('Test Recipe', 'This is  simply a  test', 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png'),
    new Recipe('Test Recipe', 'This is  simply a  test', 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png')
  ];
  constructor() { }

  ngOnInit() {
  }

}
