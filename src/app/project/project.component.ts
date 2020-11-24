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
  projectsPersisted = [
    {
      projectName: 'project1',
      projectUrl: 'github.com/project1',
      edit: false,
      templateValues: [
        {
          name: 'template_value_name_1',
          value: 'template_value_1'
        }
      ]
    },
    {
      projectName: 'project2',
      projectUrl: 'github.com/project2',
      edit: false,
      templateValues: [
        {
          name: 'template_value_name_2',
          value: 'template_value_2'
        }
      ]
    }
  ];

  ngOnInit(): void {
    const x = this.http.get('project');
      x.subscribe((response: Project[]) => {
        this.projectsPersisted = response;
      }, e => {
        console.error(e);
      });
  }


  select(i: number): void {
    this.projectsPersisted.forEach(item => item.edit = false);
    this.selectedProject = this.projectsPersisted[i];
  }

  edit(i: number) {
    this.projectsPersisted.forEach(item => item.edit = false);
    this.projectsPersisted[i].edit = !this.projectsPersisted[i].edit;
    this.selectedProject = this.projectsPersisted[i];
  }

  create(): void {

  }

  update(): void {

  }
}
