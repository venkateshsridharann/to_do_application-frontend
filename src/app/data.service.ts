import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  data = { 
    alllist: false,
    undone : [],
    lists: [],
    root: 'http://127.0.0.1:8000/todo_list',
    httpOptions: {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic dmVua3k6dGVzdGluZzEyMyE='
      }),
    list_id: 0,
    item_id: 0,
    
  },
  
  }

  constructor(private http: HttpClient) { }
  
  dropdown(toggle){
    toggle = !toggle;
    return toggle
  }
  
  get_unfinished(){
    this.data.undone = []
    this.data.lists.forEach(list=>{
        var incomplete = 0
        list.items.forEach(item=>{
          if (item.is_complete == false){
            incomplete+=1
          }
        })
        this.data.undone.push(incomplete)
    })
    console.log(this.data.undone)
  }

  sortbypriority(){
    this.data.lists.forEach(list=>{
      if (list.id == this.data.list_id){
        list.items.sort(function(a,b){
          return (b.priority - a.priority)
        })
      }
    })
  }

  get_all_list()
  { 
    return this.http.get(`${this.data.root}/lists/`, this.data.httpOptions)
    .subscribe(data => {
      console.log(data)
        this.data.lists = data;
        this.data.lists.forEach(element => {
          element.items = []
          this.http.get(`${this.data.root}/lists/${element.id}/items/`, this.data.httpOptions).
          subscribe(items => {
            element.items = items;
          })        
        });
      });
  }

  add_new_list(value)
  {
    console.log(`${value} `)
    var newList = {
      name: value,
    }
    console.log('this is dataservice')
    this.http.post(`${this.data.root}/lists/`, {name: value}, this.data.httpOptions)
    .subscribe(createdList => {
      console.log(createdList);
      createdList.items = [];
      this.data.lists.push(createdList);
    })
    return ''
  }

  delete_list(id){
    this.http.delete(`${this.data.root}/lists/${id}/`, this.data.httpOptions)
    .subscribe(deleteList=>{
      this.data.lists.forEach(list=>{
        if(list.id == id){
          var index = this.data.lists.indexOf(list)
          console.log(index)
          this.data.lists.splice(index, 1);
        }
      })
    });
  }

  update_list_name(value, id){
    console.log(`update name as ${value} and id ${id}`)
    this.http.put(`${this.data.root}/lists/${id}/`, {name: value}, this.data.httpOptions)
    .subscribe(UpdatedList =>{
      console.log(UpdatedList);
      this.data.lists.forEach(list=>{
        if (list.id == id){
          list.name = UpdatedList.name;
        }
      })
    })
  }

  update_item_name(summary, is_complete, list_id, item_id , description, due_date, priority){
    console.log(`update summary as ${summary} iscomplete as ${is_complete}  list_id as ${list_id} and item_id ${item_id}`)
    this.http.put(`${this.data.root}/lists/${list_id}/items/${item_id}/`, {summary: summary, is_complete: is_complete, description: description, due_date: due_date, priority: priority}, this.data.httpOptions)
    .subscribe(UpdatedList =>{
      console.log(UpdatedList);
    })
  }

  delete_item(list_id, item_id){
    
    this.http.delete(`${this.data.root}/lists/${list_id}/items/${item_id}`, this.data.httpOptions)
    .subscribe(deleteElement=>{
      this.data.lists.forEach(lists=>{
        if (lists.id == list_id){
          lists.items.forEach(item=>{
            if (item.id== item_id){
              var index = lists.items.indexOf(item)
              lists.items.splice(index, 1);
            }
          })
          }
        });
      });
  }
  
  add_new_item(list_id, value)
  {
    this.http.post(`${this.data.root}/lists/${list_id}/items/`, {summary:value}, this.data.httpOptions)
    .subscribe(createdItem=>{
        this.data.lists.forEach(element=>{
          if (element.id == list_id){
           element.items.unshift(createdItem) 
          }
        })
      })
      return ''
  }
}