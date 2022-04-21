import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashtrancsComponent } from './cashtrancs.component';

describe('CashtrancsComponent', () => {
  let component: CashtrancsComponent;
  let fixture: ComponentFixture<CashtrancsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashtrancsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashtrancsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
