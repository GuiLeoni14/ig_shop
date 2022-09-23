// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const checkoutItems = req.body.checkoutProducts;

  if (!checkoutItems || checkoutItems.length < 1) {
    return res.status(400).json({ error: "Items not found" });
  }

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    success_url: `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_URL}`,
    line_items: checkoutItems,
  });

  return res.status(201).json({ checkoutUrl: checkoutSession.url });
}
