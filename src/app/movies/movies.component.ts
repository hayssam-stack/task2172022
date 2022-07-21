import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  collection:any =[]
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.getdata().subscribe((results:any)=>{
      this.collection =results
    },
    (err)=>{
      console.log(err);
    })
  }
  

}
