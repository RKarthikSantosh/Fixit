import NextAuth from "next-auth";

import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

// import { Customer } from "./model/customer-model";
// import { Employee } from "./model/employee-model";
import { User } from "./model/user-model";

import bcrypt from "bcryptjs";

export const { 
    handlers:{GET, POST}, 
    auth,
    signIn,
    signOut
} = NextAuth({
    session:{
        strategy:"jwt",
    },

    providers: [
        CredentialsProvider({
            async authorize (credentials) {
                if(credentials === null) return null;
                try{
                    const user = await User.findOne({
                        username:credentials.username,
                    });

                    if( user ){
                        const isMatch= await bcrypt.compare(
                            credentials.password, 
                            user.password
                        );
                        
                        if(isMatch){
                            return user;
                        }
                        else{
                            throw new Error("Invalid password");
                        }
                        return user;
                    }
                    else{
                        throw new Error("User not found");
                    }
                }catch(error){
                    throw new Error("Invalid credentials");
                }
            }
        }),


        GitHubProvider({
            clientId:process.env.GITHUB_CLIENT_ID,
            clientSecret:process.env.GITHUB_CLIENT_SECRET,

            authorization:{
                params:{
                    prompt:"consent",
                    access_type:"offline",
                    response_type:"code",
                }
            }
        })
    ],
  })