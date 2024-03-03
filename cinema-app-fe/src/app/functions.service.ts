import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FunctionsService {

  constructor(private http: HttpClient) { }


  public async getRequest(url: string) {
    let response = this.http.get(url).subscribe((x: any) => {
      console.log(x);
    });

    return response;
  }

}
