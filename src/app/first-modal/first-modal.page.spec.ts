import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirstModalPage } from './first-modal.page';

describe('FirstModalPage', () => {
  let component: FirstModalPage;
  let fixture: ComponentFixture<FirstModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirstModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
