import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsBoxDetailComponent } from './comments-box-detail.component';

describe('CommentsBoxDetailComponent', () => {
  let component: CommentsBoxDetailComponent;
  let fixture: ComponentFixture<CommentsBoxDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsBoxDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsBoxDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
