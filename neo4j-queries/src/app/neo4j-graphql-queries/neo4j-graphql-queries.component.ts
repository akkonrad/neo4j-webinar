import {Component} from '@angular/core';
import {cypherQueries} from "../cypher-queries";

@Component({
  selector: 'app-neo4j-graphql-queries',
  templateUrl: './neo4j-graphql-queries.component.html',
  styleUrls: ['./neo4j-graphql-queries.component.scss']
})
export class Neo4jGraphqlQueriesComponent {
  queries = cypherQueries;
  step = 0;

  nextStep() {
    this.step++;
  }

  setStep(index: number) {
    this.step = index;
  }
}
