import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-item-detailed-view',
  templateUrl: './item-detailed-view.component.html',
  styleUrls: ['./item-detailed-view.component.css']
})
export class ItemDetailedViewComponent implements OnInit {
   
  constructor(private dataService: DataService) { }
  
  ngOnInit() {
  }

}
