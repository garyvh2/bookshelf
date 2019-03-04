import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsChipListComponent } from './tags-chip-list.component';

describe('TagsChipListComponent', () => {
  let component: TagsChipListComponent;
  let fixture: ComponentFixture<TagsChipListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsChipListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsChipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
