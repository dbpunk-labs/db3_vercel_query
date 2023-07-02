import type { VercelRequest, VercelResponse } from '@vercel/node'
import {
createClient,
getCollection,
queryDoc,
createFromPrivateKey,
getDatabase
} from 'db3.js'

const execute_query = async (db, col, query) => {
    const private_key = '0xdc6f560254643be3b4e90a6ba85138017aadd78639fbbb43c57669067c3bbe76'
    const account = createFromPrivateKey(private_key)
    const client = createClient("https://rollup.cloud.db3.network",
                                "https://index.cloud.db3.network",
                                 account)
    const database = await getDatabase(db, client)
    const collection = await getCollection(db, col, client)
    const resultSet = queryDoc(collection, query)
    return resultSet
}

export default async function (req, res) {
  const response = await execute_query(req.query.db, req.query.col, req.query.query)
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({
      db: req.query.db,
      col: req.query.col,
      docs: response.docs
  }))
}
