import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Project} from "../model/project";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  selectedProject: any;
  projects: Project[]= [];

  ngOnInit(): void {
    console.log('starting');
    const x = this.http.get('project')
      x.subscribe((response: Project[]) => {
        this.projects.push(response[0]);
      }, e => {
        console.log(e);
      });
  }


  select(i: number){
  // this.selectedProject = this.projects[i];
  }
}
