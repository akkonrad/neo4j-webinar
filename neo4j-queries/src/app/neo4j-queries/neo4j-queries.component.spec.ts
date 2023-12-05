import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Neo4jQueriesComponent } from './neo4j-queries.component';

describe('Neo4jQueriesComponent', () => {
  let component: Neo4jQueriesComponent;
  let fixture: ComponentFixture<Neo4jQueriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Neo4jQueriesComponent]
    });
    fixture = TestBed.createComponent(Neo4jQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
