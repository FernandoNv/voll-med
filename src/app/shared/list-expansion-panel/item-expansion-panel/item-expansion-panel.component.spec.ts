import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemExpansionPanelComponent } from './item-expansion-panel.component';

describe('ItemExpansionPanelComponent', () => {
  let component: ItemExpansionPanelComponent;
  let fixture: ComponentFixture<ItemExpansionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemExpansionPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
