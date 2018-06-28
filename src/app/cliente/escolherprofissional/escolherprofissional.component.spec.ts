import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolherprofissionalComponent } from './escolherprofissional.component';

describe('EscolherprofissionalComponent', () => {
  let component: EscolherprofissionalComponent;
  let fixture: ComponentFixture<EscolherprofissionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolherprofissionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolherprofissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
