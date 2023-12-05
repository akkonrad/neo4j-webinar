interface CypherQuery {
  name: string,
  query: string,
  graphql?: string
}
export const cypherQueries: CypherQuery[] = [
  {
    name: 'Find actor named "Tom Hanks"',
    query: `
    MATCH (tom {name: "Tom Hanks"})
    RETURN tom`,
    graphql: `
    query {
      people(where: { name: "Tom Hanks" }) {
        name
      }
    }`
  },
  {
    name: 'Find the movie with title "Cloud Atlas"...',
    query: `
    MATCH (cloudAtlas {title: "Cloud Atlas"})
    RETURN cloudAtlas`,
    graphql: `
    query {
      movies(where: { title: "Cloud Atlas" }) {
        title
        headline
        released
      }
    }`
  },
  {
    name: 'Find movies released in the 1990s...',
    query: `
    MATCH (nineties:Movie) WHERE nineties.released >= 1990
    AND nineties.released < 2000
    RETURN nineties.title`,
    graphql: `
    query {
      movies(where: { released_GTE: 1990, released_LT: 2000 }) {
        title
        headline
        released
      }
    }`
  },
  {
    name: 'Find all Tom Hanks movies',
    query: `
    MATCH (tom:Person {name: "Tom Hanks"})-[:ACTED_IN]->(tomHanksMovies)
    RETURN tom,tomHanksMovies`,
    graphql: `
    query {
      people(where: { name: "Tom Hanks" }) {
        actedInMovies {
          title
          headline
          released
        }
      }
    }`
  },
  {
    name: 'How people are related to "Cloud Atlas"...',
    query: `
    MATCH (people:Person)-[relatedTo]-(:Movie {title: "Cloud Atlas"})
    RETURN people.name, Type(relatedTo), relatedTo`,
    graphql: `
    query {
      movies(where: { title: "Cloud Atlas" }) {
        actorsConnection {
          edges {
            node {
              name
              __typename
            }
          }
        }
        directorConnection {
          edges {
            node {
              name
              __typename
            }
          }
        }
      }
    }`
  },
  {
    name: 'Movies and actors up to 4 "hops" away from Keanu Reeves',
    query: `
    MATCH (keanu:Person {name:"Keanu Reeves"})-[*1]-(hollywood)
    RETURN hollywood,keanu
    `,
    graphql: `
    No support for pattern matching`
  },
  {
    name: 'Shortest path between Tom Hanks and Keanu Reeves',
    query: `
    MATCH p=shortestPath(
      (tom:Person {name: "Tom Hanks"})-[*]-(keanu:Person {name: "Keanu Reeves"})
    )
    RETURN p`,
    graphql: `
    No support for graph algorithms`
  },
  {
   name: `Extend Tom Hanks co-actors, to find co-co-actors who haven't worked with Tom Hanks`,
   query: `
   MATCH (tom:Person {name:"Tom Hanks"})-[:ACTED_IN]->(m)<-[:ACTED_IN]-(coActors),
   (coActors)-[:ACTED_IN]->(m2)<-[:ACTED_IN]-(cocoActors)
   WHERE NOT (tom)-[:ACTED_IN]->()<-[:ACTED_IN]-(cocoActors) AND tom <> cocoActors
   RETURN cocoActors.name AS Recommended, count(*) AS Strength ORDER BY Strength DESC`,
    graphql: `
    No support for pattern matching`
  },
  {
    name: 'Find someone to introduce Tom Hanks to Tom Cruise',
    query: `
    MATCH (tom:Person {name:"Tom Hanks"})-[:ACTED_IN]->(m)<-[:ACTED_IN]-(coActors),
    (coActors)-[:ACTED_IN]->(m2)<-[:ACTED_IN]-(cruise:Person {name:"Tom Cruise"})
    RETURN tom, m, coActors, m2, cruise`,
    graphql: `
    No support for pattern matching`
  }
]
