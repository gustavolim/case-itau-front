import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundoEditComponent } from './fundo-edit.component';

describe('FundoEditComponent', () => {
  let component: FundoEditComponent;
  let fixture: ComponentFixture<FundoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundoEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
