import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgForInAngular16';
  Students :any[]=[
    {
      'name': 'Ram'
    },
    {
      'name': 'krishna'
    },
    {
      'name':'Dinesh'
    },
    {
      'name':'Devensh'
    },
    {
      'name':'Pawan'
    },
    {
      'name':'Santosh'
    }
  ];
}
