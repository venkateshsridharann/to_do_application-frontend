import { Component, OnInit, OnChanges } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  editflag = false;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.get_all_list() 
    
  }
  confirm_delete(id)
  {
    var result = confirm('do you really want to delete the list?')
    if (result){
      this.dataService.delete_list(id)
    }
  }
  ngAfterViewInit(){
    this.dataService.get_unfinished()
  }

}
