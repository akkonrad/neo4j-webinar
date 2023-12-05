import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {cypherQueries} from "../cypher-queries";
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {ClipboardModule} from "@angular/cdk/clipboard";

@Component({
  selector: 'app-neo4j-queries',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatExpansionModule, MatIconModule, ClipboardModule],
  templateUrl: './neo4j-queries.component.html',
  styleUrls: ['./neo4j-queries.component.scss']
})
export class Neo4jQueriesComponent {
  queries = cypherQueries;
  step = 0;

  nextStep() {
    this.step++;
  }

  setStep(index: number) {
    this.step = index;
  }
}
