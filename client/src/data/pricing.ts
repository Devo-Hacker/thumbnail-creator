import type { IPricing } from "../types";

export const pricingData: IPricing[] = [
    {
        name: "Basic",
        price: 29,
        period: "month",
        features: [
            "50 AI thumbnails per month",
            "Basic templates",
            "Standard Resolution",
            "No watermark",
            "Email support"
        ],
        mostPopular: false
    },
    {
        name: "Pro",
        price: 79,
        period: "month",
        features: [
            "Unlimited AI thumbnails",
            "premium templates",
            "High resolution",
            "AB testing tool",
            "priority support",
            "custom tools",
            "Brand kit analysis"
        ],
        mostPopular: true
    },
    {
        name: "Enterprise",
        price: 199,
        period: "month",
        features: [
            "Everything in Pro",
            "API Acess",
            "Team collabration and open source contribution",
            "Custom Branding",
            "Dedicated account manager"
        ],
        mostPopular: false
    }
];