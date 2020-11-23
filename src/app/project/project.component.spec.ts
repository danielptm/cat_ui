import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComponent } from './project.component';
import {RouterTestingModule} from "@angular/router/testing"
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { By } from "@angular/platform-browser";
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import {Project} from "../model/project";
import {Templatevalue} from "../model/templatevalue";
import {Observable, of} from 'rxjs';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  let service;
  let injector;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        HttpClient
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = TestBed.get(HttpClient);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('projects should populate', async() => {
    const dummyUsers = [
      { login: 'John' },
      { login: 'Doe' }
    ];

    const req = httpMock.expectOne('project');
    expect(req.request.method).toBe("GET");
    const x = req.flush(dummyUsers);



    // const proj = new Project();
    // proj.projectName = 'proj1';
    // proj.projectUrl = 'github.com/test1'
    // proj.templateValues = [
    //   new Templatevalue('$temp1', 'template_value_1'),
    //   new Templatevalue('$temp2', 'template_value_2')
    // ];
    //
    // const proj2 = new Project();
    // proj.projectName = 'proj2';
    // proj.projectUrl = 'github.com/test2'
    // proj.templateValues = [
    //   new Templatevalue('$temp3', 'template_value_3'),
    //   new Templatevalue('$temp4', 'template_value_4')
    // ];
    //
    // component.projects.push(proj);
    // component.projects.push(proj2);
    //
    // fixture.detectChanges();
    // fixture.nativeElement.blur();
    //
    // var de = fixture.nativeElement.querySelector('proj-name-0');
    //
    // console.log('*******');
    // console.log('**' + de);

  })
});
