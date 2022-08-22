import clientPromise from '../../lib/connectDB';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("sample_airbnb");
  switch (req.method) {
    case "GET":
      let myPost = await db.collection("listingsAndReviews").findOne({name:"Ribeira Charming Duplex"});
      res.json(myPost);
      break;
    // case "GET":
    //   const allPosts = await db.collection("allPosts").find({}).toArray();
    //   res.json({ status: 200, data: allPosts });
    //   break;
  }
}
