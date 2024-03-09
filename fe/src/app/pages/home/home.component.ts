import { Component, OnInit } from '@angular/core';
import { FunctionsService } from '../../functions.service';
import { endpoint } from './shared/constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private f: FunctionsService) {}
  req: any;
  uniqueObjects: any;

  ngOnInit(): void {
      this.getAllMovies();
  }

  async getAllMovies() {
    this.req = await this.f.getRequest(endpoint.getAllMovies);
    this.req = this.req.data.movieList.items;

    this.uniqueObjects = this.req.reduce(
      (accumulator: any, currentValue: any) => {
        const existingObject = accumulator.find(
          (obj: any) => obj.originaltitle === currentValue.originaltitle
        );
        if (!existingObject) {
          accumulator.push(currentValue);
        }
        return accumulator;
      },
      []
    );
  }
}
