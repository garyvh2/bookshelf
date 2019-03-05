import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsBoxAddComponent } from './comments-box-add.component';

describe('CommentsBoxAddComponent', () => {
  let component: CommentsBoxAddComponent;
  let fixture: ComponentFixture<CommentsBoxAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsBoxAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsBoxAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
