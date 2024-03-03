import { Component, OnInit } from '@angular/core';
import { FunctionsService } from '../../functions.service';
import { endpoint } from './shared/constant';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  constructor(private f: FunctionsService) { }

  ngOnInit(): void {    
    this.getMovies();
  }
  public async getMovies() {
    
    console.log("getMovies()");
    
    this.f.getRequest(endpoint.getAllMovies)
  }

}
