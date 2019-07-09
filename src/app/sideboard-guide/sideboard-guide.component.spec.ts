import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideboardGuideComponent } from './sideboard-guide.component';

describe('SideboardGuideComponent', () => {
  let component: SideboardGuideComponent;
  let fixture: ComponentFixture<SideboardGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideboardGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideboardGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
