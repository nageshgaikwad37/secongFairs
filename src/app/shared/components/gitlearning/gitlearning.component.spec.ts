import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitlearningComponent } from './gitlearning.component';

describe('GitlearningComponent', () => {
  let component: GitlearningComponent;
  let fixture: ComponentFixture<GitlearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitlearningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitlearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
