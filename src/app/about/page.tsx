import TrustBlock from "@/components/layout/TrustBlock";

export const metadata = {
    title: "About Us | Mkhonjana Foundation",
    description: "Learn about our roots in the Mkhonjana community and our commitment to dignity and integrity.",
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="py-20 px-6 bg-brand/5">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground">Our <span className="text-brand">Story</span></h1>
                    <p className="text-xl text-foreground/80 leading-relaxed">
                        Founded on the soil of Mkhonjana, we are a collective of residents and leaders dedicated to self-driven development.
                    </p>
                </div>
            </section>

            <section className="py-20 px-6 max-w-4xl mx-auto space-y-12">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground">Community-Rooted Empowerment</h2>
                    <p className="text-lg text-foreground/70 leading-relaxed">
                        The Mkhonjana Foundation was born from a simple observation: the local community possesses the greatest insight into its own challenges and the most effective solutions. We don't believe in external fixes; we believe in internal empowerment.
                    </p>
                    <p className="text-lg text-foreground/70 leading-relaxed">
                        Our mission is to provide the resources, platform, and coordination necessary for the people of Mkhonjana to thrive. From sports leagues to safety workshops, every initiative is vetted and led by community members.
                    </p>
                </div>

                <div id="accountability" className="bg-zinc-50 p-8 md:p-12 rounded-3xl border border-zinc-200 scroll-mt-24">
                    <h2 className="text-3xl font-bold text-foreground mb-6">Accountability Standards</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-brand">Financial Integrity</h3>
                            <p className="text-foreground/70 text-sm italic">
                                "Every Rand has a purpose."
                            </p>
                            <p className="text-foreground/80">
                                We operate with zero administrative waste. Over 85% of every donation goes directly into project materials, local labor, and community resources.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-brand">Traditional Alignment</h3>
                            <p className="text-foreground/80">
                                We work within the established structures of our community, ensuring that our projects respect traditional leadership and local customs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <TrustBlock />
        </div>
    );
}
