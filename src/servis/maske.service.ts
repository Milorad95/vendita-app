import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaskeService {

  constructor(private http: HttpClient) { }

  url = "/assets/maske.json";

    // this.http.get(url).subscribe( res => {
    //   this.maske = res;
    // });

  dohvatiPodatke() {
    return this.http.get(this.url);
  }
}
