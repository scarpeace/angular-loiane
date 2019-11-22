import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoListagemComponent } from './curso-listagem.component';

describe('CursoListagemComponent', () => {
  let component: CursoListagemComponent;
  let fixture: ComponentFixture<CursoListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
