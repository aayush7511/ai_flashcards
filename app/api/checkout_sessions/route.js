import {stripe} from "@/app/utils/get-stripejs";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

function formatAmountForStripe(num){
    return num* 100
}
export async function POST() {
    try{

        const params ={
            submit_type: 'auto',
            payment_method_types: ['card'],
            line_items: [
            {
                price_data:{
                    currency: 'usd',
                    product_data: {
                        name: "Pro Subscription"
                    },
                    unit_amount: formatAmountForStripe(10),
                },
                quantity: 1,
            },
            ],
            mode:"subscription",
            success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
        };

        const checkoutSession = await stripe.checkout.session.create(params)

        NextResponse.redirect(checkoutSession,{
            status: 200
        })

    }catch(err){
        return NextResponse.json(err,{status: 500})
    }


}
  