import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor(private router: Router) { }

  projects = [
    {
      projectName: 'project1',
      projectUrl: 'github.com/danielptm'
    },
    {
      projectName: 'project2',
      projectUrl: 'github.com/danielptm'
    }
  ]

  ngOnInit(): void {
  }

  select(i: number) {
    console.log(i);
  }
}
