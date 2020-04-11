import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpcomingMoviePage } from './upcoming-movie.page';

describe('UpcomingMoviePage', () => {
  let component: UpcomingMoviePage;
  let fixture: ComponentFixture<UpcomingMoviePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingMoviePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpcomingMoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
