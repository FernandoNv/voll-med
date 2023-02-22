import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExpansionPanelComponent } from './list-expansion-panel.component';

describe('ListExpansionPanelComponent', () => {
  let component: ListExpansionPanelComponent;
  let fixture: ComponentFixture<ListExpansionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListExpansionPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
