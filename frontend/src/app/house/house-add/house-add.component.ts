import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-house-add',
  templateUrl: './house-add.component.html',
  styleUrls: ['./house-add.component.scss']
})
export class HouseAddComponent implements OnInit {
  
  house:FormGroup;

  constructor(private houseService:HouseService) { }

  ngOnInit() {
    this.house=new FormGroup({
      label:new FormControl(''),
      adress:new FormGroup({
        street:new FormControl(''),
        city:new FormControl('')
      }),
      price:new FormControl('0000')
    })
  }

  saveHouse(){
    this.houseService.saveHouse(this.house.value).subscribe(data=>alert(data));
  }

}
