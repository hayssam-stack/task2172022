import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  collection: any = []

  constructor( private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.getdata().subscribe((results:any)=>{
      this.collection =results
    },
    (err)=>{
      console.log(err);
    })
  }

}
