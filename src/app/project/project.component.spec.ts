import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectComponent} from './project.component';
import {RouterTestingModule} from "@angular/router/testing"
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

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

    const projects = [
      {
        projectName: 'project1',
        projectUrl: 'github.com/project1',
        edit: false,
        templateValues: {
          name: 'template_value_name_1',
          value: 'template_value_1'
        }
      },
      {
        projectName: 'project2',
        projectUrl: 'github.com/project2',
        edit: false,
        templateValues: {
          name: 'template_value_name_2',
          value: 'template_value_2'
        }
      }
    ];


    const req = httpMock.expectOne('project');
    req.flush(projects);
  });

  afterEach(() => {
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('projects should populate', async() => {
    fixture.detectChanges();
    const text = fixture.debugElement.nativeElement.querySelector('#proj-url-0').textContent;
    expect(text).toBe('github.com/project1');
  })

  it('Should select correct project', () => {
    component.select(0);
    const projectTitle = component.selectedProject.projectName;
    expect(projectTitle).toBe('project1')
  });
});
