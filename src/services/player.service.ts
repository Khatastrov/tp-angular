import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Player } from 'src/models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  apiBaseUrl = "http://localhost:3000/players";

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(this.apiBaseUrl);
  }

  get(id) {
    return this.httpClient.get(`${this.apiBaseUrl}/${id}`);
  }

  create(player: Player) {
    return this.httpClient.post(this.apiBaseUrl, player);
  }
  
  update(player: Player) {
    return this.httpClient.put(this.apiBaseUrl, player);
  }

  delete(id) {
    return this.httpClient.delete(`${this.apiBaseUrl}/${id}`)
  }
}
