import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { HighlightDelayBarrier } from 'blocking-proxy/built/lib/highlight_delay_barrier';

@Component({
  selector: 'app-alllistitems',
  templateUrl: './alllistitems.component.html',
  styleUrls: ['./alllistitems.component.css']
})
export class AlllistitemsComponent implements OnInit {
  
  hide = false;
  list_id = 0;
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  toggle(id){
    console.log(id)
    this.list_id = id;
    this.hide=!this.hide;
  }
}
