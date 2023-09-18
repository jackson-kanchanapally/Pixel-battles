import Stripe from "stripe";
import { NextResponse } from "next/server";
export async function GET(req){
    const stripe=new Stripe(process.env.SECRET_KEY)
    const prices=await stripe.prices.list({
        limit:1,
    })
    return NextResponse.json(prices.data.reverse())
}