import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  [x: string]: any;

  constructor(private route:Router) {} 
  
  ngOnInit() {
  }

  gohome(){
    this.router.navigate(['/'])
  }

}
