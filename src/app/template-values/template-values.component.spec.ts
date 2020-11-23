import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateValuesComponent } from './template-values.component';

describe('TemplateValuesComponent', () => {
  let component: TemplateValuesComponent;
  let fixture: ComponentFixture<TemplateValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
