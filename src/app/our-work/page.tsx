export const metadata = {
    title: "Our Work | Mkhonjana Foundation",
    description: "Explore our pillars of impact: Sports, Crime Prevention, Arts, Skills Development, and Partnerships.",
};

export default function OurWorkPage() {
    const pillars = [
        {
            title: "Sports & Recreation",
            description: "Building character and discipline through local football and netball leagues.",
            icon: "⚽",
            details: ["Youth League", "Local Tournaments", "Equipment Support"]
        },
        {
            title: "Crime Prevention",
            description: "Securing our community through visibility, collaboration, and youth engagement.",
            icon: "🛡️",
            details: ["Safety Workshops", "Neighborhood Watch Support", "Counseling"]
        },
        {
            title: "Arts & Culture",
            description: "Preserving our heritage and promoting local talent in music and traditional arts.",
            icon: "🎨",
            details: ["Traditional Festivals", "Artisan Markets", "Youth Workshops"]
        },
        {
            title: "Skills Development",
            description: "Providing the tools for rural entrepreneurs to grow and support their families.",
            icon: "📈",
            details: ["Business Mentorship", "Digital Literacy", "Vocational Training"]
        },
        {
            title: "Partnerships",
            description: "Connecting Mkhonjana with regional stakeholders for large-scale development.",
            icon: "🤝",
            details: ["NGO Collaborations", "Government Liaison", "Private Sector Engagement"]
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <section className="py-20 px-6 bg-brand/5">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground">Our <span className="text-brand">Work</span></h1>
                    <p className="text-xl text-foreground/80 leading-relaxed">
                        Dignity in every project. We focus on five key pillars of development that reflect the needs and aspirations of our people.
                    </p>
                </div>
            </section>

            <section className="py-20 px-6 max-w-6xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pillars.map((pillar) => (
                        <div key={pillar.title} className="p-8 bg-white border border-zinc-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border-b-4 border-b-brand/20">
                            <div className="text-4xl mb-6">{pillar.icon}</div>
                            <h3 className="text-2xl font-bold text-foreground mb-4">{pillar.title}</h3>
                            <p className="text-foreground/70 mb-6 text-sm leading-relaxed">
                                {pillar.description}
                            </p>
                            <div className="space-y-2 pt-4 border-t border-zinc-50">
                                {pillar.details.map(detail => (
                                    <div key={detail} className="flex items-center text-xs font-bold text-brand uppercase tracking-wider">
                                        <span className="w-1.5 h-1.5 bg-brand rounded-full mr-2"></span>
                                        {detail}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-20 px-6 bg-zinc-900 text-white">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl font-bold">Driven by Impact, Not Interest</h2>
                    <p className="text-zinc-400 text-lg">
                        We measure our success not by the number of projects we start, but by the tangible improvement in the quality of life for the residents of Mkhonjana.
                    </p>
                </div>
            </section>
        </div>
    );
}
