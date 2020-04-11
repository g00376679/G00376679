import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovieWatchlistPage } from './movie-watchlist.page';

describe('MovieWatchlistPage', () => {
  let component: MovieWatchlistPage;
  let fixture: ComponentFixture<MovieWatchlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieWatchlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieWatchlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
