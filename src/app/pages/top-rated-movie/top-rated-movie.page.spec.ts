import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TopRatedMoviePage } from './top-rated-movie.page';

describe('TopRatedMoviePage', () => {
  let component: TopRatedMoviePage;
  let fixture: ComponentFixture<TopRatedMoviePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopRatedMoviePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TopRatedMoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
