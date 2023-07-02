# Use vercel function and db3 to build a backend query api

## How to Use

```
curl https://db3-vercel-query.vercel.app/api/query?db=0x1efa81a1e1d69515e5d6667554af8b16536e6505&col=t2&query=/*
```
there are three parameters
* db the db3 network database address
* col the collection name 
* query the query str, you can get more example from [doc](https://docs.db3.network/functions/queryDoc.html)

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/dbpunk-labs/db3_vercel_query&project-name=db3_vercel_query&repository-name=db3_vercel_query)

### Clone and Local Test

```bash
git clone https://github.com/dbpunk-labs/db3_vercel_query.git
```

Install the Vercel CLI:

```bash
npm i -g vercel
```

Install the dependencies

```bash
yarn
```

Then run the app at the root of the repository:

```bash
npx vercel dev
```
