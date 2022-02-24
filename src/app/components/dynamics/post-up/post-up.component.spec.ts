import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostUpComponent } from './post-up.component';

describe('PostUpComponent', () => {
  let component: PostUpComponent;
  let fixture: ComponentFixture<PostUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
