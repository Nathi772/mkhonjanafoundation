import Link from "next/link";

export default function TrustBlock() {
    const pillars = [
        {
            title: "Community-led",
            description: "Projects are identified and driven by the residents of the Mkhonjana region.",
        },
        {
            title: "Recognised Local Leadership",
            description: "Working hand-in-hand with traditional and community leaders for sustainable impact.",
        },
        {
            title: "Non-political",
            description: "Our mission is purely focused on community upliftment, free from political affiliation.",
        },
        {
            title: "Transparency & Accountability",
            description: "Every Rand spent is tracked and reported back to our donors and community.",
        },
    ];

    return (
        <section className="py-20 px-6 bg-white border-y border-brand/10">
            <div className="max-w-5xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        Built on Community. <span className="text-brand">Guided by Integrity.</span>
                    </h2>
                    <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                        Our foundation is rooted in the belief that true change happens when those on the ground lead the way.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {pillars.map((pillar, index) => (
                        <div key={index} className="p-6 border border-brand/5 bg-brand/5 rounded-2xl hover:bg-brand/10 transition-colors">
                            <h3 className="text-xl font-bold text-brand mb-2">{pillar.title}</h3>
                            <p className="text-foreground/90">{pillar.description}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-brand text-white p-8 md:p-12 rounded-3xl space-y-8 relative overflow-hidden shadow-xl shadow-brand/20">
                    <div className="relative z-10 space-y-6">
                        <h3 className="text-2xl md:text-3xl font-bold">How Your Support Is Used</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-brand-foreground/90">
                            <div className="space-y-2">
                                <div className="text-4xl font-black opacity-20">01</div>
                                <h4 className="font-bold text-xl">Direct Impact</h4>
                                <p className="text-sm">85% of funds go directly to our four key pillars (Sports, Arts, Skills, Safety).</p>
                            </div>
                            <div className="space-y-2">
                                <div className="text-4xl font-black opacity-20">02</div>
                                <h4 className="font-bold text-xl">Local Sourcing</h4>
                                <p className="text-sm">We prioritise local suppliers and talent to keep resources within the community.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="text-4xl font-black opacity-20">03</div>
                                <h4 className="font-bold text-xl">Reporting</h4>
                                <p className="text-sm">Quarterly impact reports are shared with all active donors and stakeholders.</p>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-6">
                            <p className="text-lg font-medium italic">
                                "Dignity is in every action we take."
                            </p>
                            <Link
                                href="/donate"
                                className="bg-white text-brand px-8 py-4 rounded-full font-bold hover:bg-brand-accent hover:text-white transition-all shadow-lg"
                            >
                                Support Community Development
                            </Link>
                        </div>
                    </div>
                    {/* Subtle background decoration */}
                    <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                </div>
            </div>
        </section>
    );
}
