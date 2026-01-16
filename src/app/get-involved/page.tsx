import Link from "next/link";

export const metadata = {
    title: "Get Involved | Mkhonjana Foundation",
    description: "Find out how you can contribute to the Mkhonjana Foundation through volunteering or partnerships.",
};

export default function GetInvolvedPage() {
    const options = [
        {
            title: "Volunteer Your Time",
            description: "We are always looking for mentors, coaches, and workshop facilitators. If you have a skill to share, Mkhonjana needs you.",
            cta: "Contact Us to Volunteer",
            href: "/contact"
        },
        {
            title: "Partner With Us",
            description: "Are you an NGO or business looking to make an impact in rural KZN? Let's build sustainable solutions together.",
            cta: "Discuss a Partnership",
            href: "/contact"
        },
        {
            title: "Support Financially",
            description: "Your financial support is the fuel that runs our community engines. Every donation counts toward dignity.",
            cta: "Go to Donate Page",
            href: "/donate",
            primary: true
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <section className="py-20 px-6 bg-brand/5">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground">Get <span className="text-brand">Involved</span></h1>
                    <p className="text-xl text-foreground/80 leading-relaxed">
                        There are many ways to support the Mkhonjana community. Join us in our mission to build a brighter future for all.
                    </p>
                </div>
            </section>

            <section className="py-20 px-6 max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8">
                {options.map((option) => (
                    <div key={option.title} className={`p-8 rounded-[2rem] border flex flex-col ${option.primary ? "bg-brand text-white border-brand shadow-xl shadow-brand/20" : "bg-white border-zinc-100 shadow-sm"
                        }`}>
                        <h3 className="text-2xl font-bold mb-4 leading-tight">{option.title}</h3>
                        <p className={`text-sm mb-8 flex-grow leading-relaxed ${option.primary ? "text-white/80" : "text-zinc-600"
                            }`}>
                            {option.description}
                        </p>
                        <Link
                            href={option.href}
                            className={`text-center py-4 rounded-xl font-bold transition-all ${option.primary
                                    ? "bg-white text-brand hover:bg-zinc-100"
                                    : "bg-brand/5 text-brand border border-brand/10 hover:bg-brand/10"
                                }`}
                        >
                            {option.cta}
                        </Link>
                    </div>
                ))}
            </section>

            <section className="py-20 px-6 bg-zinc-50 border-t border-zinc-100">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl font-bold text-foreground">A Note to Our Community</h2>
                    <p className="text-foreground/70 italic text-lg leading-relaxed">
                        "We are not here to 'save' anyone. we are here to walk alongside our brothers and sisters in Mkhonjana. If you share this vision of dignity and mutual respect, we welcome your hands and your heart."
                    </p>
                </div>
            </section>
        </div>
    );
}
