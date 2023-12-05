import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Neo4jQueriesComponent} from "./neo4j-queries/neo4j-queries.component";
import {Neo4jGraphqlQueriesComponent} from "./neo4j-graphql-queries/neo4j-graphql-queries.component";

const routes: Routes = [
    {
      path: 'cypher',
      component: Neo4jQueriesComponent,
    },
    {
      path: 'graphql',
      component: Neo4jGraphqlQueriesComponent
    },
    {
      path: '',
      redirectTo: '/cypher',
      pathMatch: 'full'
    }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
