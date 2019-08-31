import { Component, OnInit } from '@angular/core';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss']
})
export class HouseListComponent implements OnInit {
  displayedColumns: string[] = ['label', 'adress', 'price'];
  houses :any;

  constructor(private houseService:HouseService) { }

  ngOnInit() {
      this.houseService.getAllHouses().subscribe(data=>this.houses=data);
  }

}
