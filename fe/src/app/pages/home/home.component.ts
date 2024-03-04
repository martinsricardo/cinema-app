import { Component, OnInit } from '@angular/core';
import { FunctionsService } from '../../functions.service';
import { endpoint } from './shared/constant';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  constructor(private f: FunctionsService) { }

  ngOnInit(): void {
    this.getAllMovies();
  }

  async getAllMovies() {
    let req = await this.f.getRequest(endpoint.getAllMovies)
    console.log(req)
  }

}
