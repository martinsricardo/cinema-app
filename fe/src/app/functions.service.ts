import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FunctionsService {

  constructor(private http: HttpClient) { }

  public async getRequest(url: string) {
      return await this.http.get(url).toPromise();
  }

}
