import React from 'react';

const plans = [
    {
        name: "Starter",
        tagline: "Perfect for getting started",
        price: 0,
        period: "Month",
        highlight: false,
        badge: null,
        features: [
            "Access to 10 free tools",
            "Basic templates",
            "Community support",
            "1 project per month",
        ],
        cta: "Get Started Free",
        ctaStyle: "outline",
    },
    {
        name: "Pro",
        tagline: "Best for professionals",
        price: 29,
        period: "Month",
        highlight: true,
        badge: "Most Popular",
        features: [
            "Access to all premium tools",
            "Unlimited templates",
            "Priority support",
            "Unlimited projects",
            "Cloud sync",
            "Advanced analytics",
        ],
        cta: "Start Pro Trial",
        ctaStyle: "white",
    },
    {
        name: "Enterprise",
        tagline: "For teams and businesses",
        price: 99,
        period: "Month",
        highlight: false,
        badge: null,
        features: [
            "Everything in Pro",
            "Team collaboration",
            "Custom integrations",
            "Dedicated support",
            "SLA guarantee",
            "Custom branding",
        ],
        cta: "Contact Sales",
        ctaStyle: "solid",
    },
];

const Pricing = () => {
    return (
        <section id="pricing" className="bg-gray-50 py-16 lg:py-20">
            <div className=" px-6 lg:px-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-sm  text-gray-500 mt-3">
                        Choose the plan that fits your needs. Upgrade or downgrade anytime.
                    </p>
                </div>

                <div className="grid grid-cols-1 w-[90%] mx-auto md:grid-cols-3 gap-10 md:gap-10  items-stretch ">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col rounded-2xl p-8 w-[380px] hover:shadow-xl ${plan.highlight
                                    ? "text-white shadow-2xl scale-105 bg-linear-to-l from-[#9514FA] to-[#4F39F6]"
                                    : "bg-white border border-gray-200 shadow-sm"
                                }`}
                        >
                            {plan.badge && (
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-yellow-600 bg-yellow-100 text-xs font-bold px-4 py-1 rounded-full shadow">
                                    {plan.badge}
                                </span>
                            )}

                            <h3
                                className={`text-xl font-extrabold ${plan.highlight ? "text-white" : "text-gray-900"
                                    }`}
                            >
                                {plan.name}
                            </h3>

                            <p
                                className={`text-sm mt-1 ${plan.highlight ? "text-purple-200" : "text-gray-400"
                                    }`}
                            >
                                {plan.tagline}
                            </p>

                            <div className="flex items-baseline gap-1 mt-6">
                                <span
                                    className={`text-4xl font-extrabold ${plan.highlight ? "text-white" : "text-gray-900"
                                        }`}
                                >
                                    ${plan.price}
                                </span>
                                <span
                                    className={`text-sm ${plan.highlight ? "text-purple-200" : "text-gray-400"
                                        }`}
                                >
                                    /{plan.period}
                                </span>
                            </div>

                            <ul className="flex flex-col gap-3 flex-1 mt-6">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm">
                                        <span
                                            className={`w-4 h-4 flex items-center justify-center ${plan.highlight ? "text-white" : "text-green-600"
                                                }`}
                                        >
                                            ✔
                                        </span>
                                        <span
                                            className={
                                                plan.highlight ? "text-purple-100" : "text-gray-600"
                                            }
                                        >
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`mt-4 w-full py-2.5 rounded-full text-sm font-semibold active:shadow-xl ${plan.highlight
                                        ? "text-purple-700 bg-white"
                                        : "text-white bg-linear-to-l from-[#9514FA] to-[#4F39F6]"
                                    } cursor-pointer transition-all duration-200 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed`}
                            >
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;