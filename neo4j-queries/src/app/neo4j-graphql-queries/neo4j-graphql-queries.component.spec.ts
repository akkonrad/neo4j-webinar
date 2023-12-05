import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Neo4jGraphqlQueriesComponent } from './neo4j-graphql-queries.component';

describe('Neo4jGraphqlQueriesComponent', () => {
  let component: Neo4jGraphqlQueriesComponent;
  let fixture: ComponentFixture<Neo4jGraphqlQueriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Neo4jGraphqlQueriesComponent]
    });
    fixture = TestBed.createComponent(Neo4jGraphqlQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
