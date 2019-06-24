import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  
  toggle =true;
  edit= true;
  disp = false;
  constructor(private dataService: DataService) { }
  
  ngOnInit() {
    
  }
  
  confirm_delete(list_id, item_id)
  {
    var result = confirm('Do you really want to delete this item?')
    if (result){
      this.dataService.delete_item(list_id, item_id)
      
    }
  }

  findcompleteditem(list_id) {
    this.dataService.data.lists.forEach(list=>{   
      if (list.id == list_id)
      {
        list.items.forEach(item=>
        {
          if (item.is_complete == true)
          {
            return true
          }
        })
        return false
      }
  })
}
}
