import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL="http://localhost:3000/houses";

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private httpClient:HttpClient) { }

  getAllHouses(){
    return this.httpClient.get(API_URL);
  }

  saveHouse(house){
    return this.httpClient.post(API_URL,house);
  }

  updateHouse(house){
    return this.httpClient.put(API_URL+'/'+house._id,house);
  }
}
