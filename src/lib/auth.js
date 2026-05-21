import { betterAuth } from "better-auth";
import { jwt } from "better-auth/plugins";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import dns from 'node:dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);




const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("tutor");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
   
    client
  }),
  emailAndPassword: {
    enabled:true,
  },
  socialProviders:{
    google: {
      clientId:process.env.GOOGLE_CLIENT_ID,
      clientSecret:process.env.GOOGLE_CLIENT_SECRET
    }

  },
  session: {
          cookieCache: {
            enabled: true,
            strategy: "jwt", 
            maxAge: 30 * 24 * 60 * 60
          }
  },
  plugins: [
    jwt()
  ]

});