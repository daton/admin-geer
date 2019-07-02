import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminclavesComponent } from './adminclaves.component';

describe('AdminclavesComponent', () => {
  let component: AdminclavesComponent;
  let fixture: ComponentFixture<AdminclavesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminclavesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminclavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
