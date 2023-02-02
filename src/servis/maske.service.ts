import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaskeService {

  constructor(private http: HttpClient) { }

  url = "vendita-app\src\assets\maske.json";

  dohvatiPodatke() {
    return this.http.get(this.url);
  }
}
