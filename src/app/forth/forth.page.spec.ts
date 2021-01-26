import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForthPage } from './forth.page';

describe('ForthPage', () => {
  let component: ForthPage;
  let fixture: ComponentFixture<ForthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForthPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ForthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
