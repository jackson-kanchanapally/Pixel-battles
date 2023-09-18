import Stripe from "stripe";
import { NextResponse,NextRequest } from "next/server";

export async function POST(request){
    const stripe = new Stripe(process.env.SECRET_KEY)
    let data=await request.json()
    let priceId=data.priceId
    let Gname=data.name
    let GImg=data.GImg
    const session=await stripe.checkout.sessions.create({
        line_items:[
            {
                price_data:{
                    unit_amount:priceId,
                   currency:"inr",
                   product_data:{
                    name:Gname,
                    description:"See you at Lobby...",
                 
                   } 
                },
                quantity:1
            }

        ],
        mode:'payment',
        success_url:"http://localhost:3000/success",  
        cancel_url:"http://localhost:3000/game/pubg"
    })
    return NextResponse.json(session.url)
}