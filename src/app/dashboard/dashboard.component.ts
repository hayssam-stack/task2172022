import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  collection:any =[];

  constructor( private auth: AuthService) { }

  ngOnInit(): void {
    const elemet = document.getElementById('changes');
    timer(3000).subscribe(x => {   
      document.getElementById('changes')!.style.color = 'red' });
    
    this.auth.getdata().subscribe((results:any)=>{
      this.collection =results
    },
    (err)=>{
      console.log(err);
    })
  }
  click(data:any){
    console.log('hb');
    console.log(data.value);
    data.style = "color:red";
  }

}
