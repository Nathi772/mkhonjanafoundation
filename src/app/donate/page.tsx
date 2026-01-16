import TrustBlock from "@/components/layout/TrustBlock";

import Link from "next/link";

export default function DonatePage() {
    const faqs = [
        {
            question: "Is the foundation political?",
            answer: "No. The Mkhonjana Foundation is strictly non-political and community-led. Our focus is entirely on social development, sports, and safety within the village."
        },
        {
            question: "How are funds used?",
            answer: "Funds are allocated to our core community programs (Sports, Arts, Skills, Crime Prevention). We maintain lean administrative costs and provide quarterly impact reporting to all donors."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="py-20 px-6 bg-brand/5">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground">Make a <span className="text-brand">Lasting Difference</span></h1>
                    <p className="text-xl text-foreground/80 leading-relaxed">
                        Your contribution directly powers our community-led initiatives in the Mkhonjana Village.
                        We ensure every Rand is used with integrity and purpose.
                    </p>
                </div>
            </section>

            {/* Trust & Accountability Highlight */}
            <TrustBlock />

            {/* Main Donation Sections */}
            <section className="py-20 px-6 max-w-5xl mx-auto w-full space-y-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* EFT Section */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-foreground">Donate by EFT</h2>
                        <p className="text-foreground/80">
                            Electronic Funds Transfer is our preferred method as it ensures 100% of your donation reaches the community without transaction fees.
                        </p>

                        <div className="bg-white border-2 border-brand/20 p-8 rounded-2xl space-y-4 shadow-md relative overflow-hidden">
                            {/* Placeholder Label */}
                            <div className="absolute top-0 right-0 bg-brand/10 text-brand text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-widest">
                                Bank Details (Placeholder)
                            </div>

                            <div className="grid grid-cols-3 gap-2 py-3 border-b border-brand/10">
                                <span className="font-bold text-brand uppercase text-xs tracking-wider">Bank</span>
                                <span className="col-span-2 font-medium">[Bank Name e.g. FNB]</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2 py-3 border-b border-brand/10">
                                <span className="font-bold text-brand uppercase text-xs tracking-wider">Account Name</span>
                                <span className="col-span-2 font-medium">Mkhonjana Foundation</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2 py-3 border-b border-brand/10">
                                <span className="font-bold text-brand uppercase text-xs tracking-wider">Account Number</span>
                                <span className="col-span-2 font-medium font-mono text-lg">[000 000 0000]</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2 py-3 border-b border-brand/10">
                                <span className="font-bold text-brand uppercase text-xs tracking-wider">Branch Code</span>
                                <span className="col-span-2 font-medium">[000000]</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2 py-3">
                                <span className="font-bold text-brand uppercase text-xs tracking-wider">Reference</span>
                                <span className="col-span-2 font-medium italic text-foreground/60">Your Name / [Project]</span>
                            </div>
                        </div>

                        <div className="bg-brand/5 p-6 rounded-2xl border border-brand/10 flex items-start gap-4">
                            <div className="w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center shrink-0 font-bold">W</div>
                            <div>
                                <h4 className="font-bold text-foreground">WhatsApp Proof of Payment</h4>
                                <p className="text-sm text-foreground/80">
                                    To help us track your impact, please send a screenshot of your POP to <span className="font-bold">+27 00 000 0000</span>.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Online & Transparency */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold text-foreground mb-6">Online Payments</h2>
                            <div className="p-8 border-2 border-dashed border-zinc-200 rounded-2xl bg-zinc-50 flex flex-col items-center justify-center text-center space-y-4">
                                <div className="w-16 h-16 bg-zinc-200 rounded-full flex items-center justify-center text-zinc-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15.75a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15.75a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-zinc-500">PayFast Integration Soon</h3>
                                    <p className="text-zinc-400 text-sm">We're currently setting up secure credit card and SnapScan options.</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-foreground">Our Promise</h2>
                            <p className="text-foreground/80 leading-relaxed">
                                We believe that trust is the foundation of any community work. We are committed to transparency in all our financial dealings.
                            </p>
                            <Link
                                href="/about#accountability"
                                className="inline-flex items-center text-brand font-bold hover:underline"
                            >
                                Read about our Accountability Standards
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="ml-2 w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-zinc-50 p-8 md:p-12 rounded-3xl border border-zinc-200">
                    <h2 className="text-3xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {faqs.map((faq, index) => (
                            <div key={index} className="space-y-3">
                                <h3 className="text-xl font-bold text-brand">{faq.question}</h3>
                                <p className="text-foreground/80 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
