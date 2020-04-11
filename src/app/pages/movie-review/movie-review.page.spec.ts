import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovieReviewPage } from './movie-review.page';

describe('MovieReviewPage', () => {
  let component: MovieReviewPage;
  let fixture: ComponentFixture<MovieReviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieReviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieReviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
