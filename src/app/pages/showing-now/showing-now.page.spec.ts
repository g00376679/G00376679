import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowingNowPage } from './showing-now.page';

describe('ShowingNowPage', () => {
  let component: ShowingNowPage;
  let fixture: ComponentFixture<ShowingNowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowingNowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowingNowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
