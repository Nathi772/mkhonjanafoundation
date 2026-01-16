export const metadata = {
    title: "Contact Us | Mkhonjana Foundation",
    description: "Get in touch with the Mkhonjana Foundation team for partnerships, volunteering, or general inquiries.",
};

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="py-20 px-6 bg-brand/5">
                <div className="max-w-3xl mx-auto text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground">Get in <span className="text-brand">Touch</span></h1>
                    <p className="text-xl text-foreground/70 leading-relaxed">
                        Whether you're looking to partner, volunteer, or simply learn more about our work, we'd love to hear from you.
                    </p>
                </div>
            </section>

            <section className="py-20 px-6 max-w-6xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
                    {/* Contact Details */}
                    <div className="lg:col-span-2 space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-foreground">Contact Details</h2>
                            <p className="text-foreground/70 leading-relaxed">
                                Our team is primarily active on the ground within the Mkhonjana community, but you can reach us through any of the channels below.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-brand/10 rounded-2xl flex items-center justify-center text-brand shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground text-lg">Phone & WhatsApp</h4>
                                    <p className="text-foreground/70">+27 00 000 0000 (Placeholder)</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-brand/10 rounded-2xl flex items-center justify-center text-brand shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground text-lg">Email Address</h4>
                                    <p className="text-foreground/70">info@mkhonjanafoundation.org.za (Placeholder)</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-brand/10 rounded-2xl flex items-center justify-center text-brand shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground text-lg">Our Location</h4>
                                    <p className="text-foreground/70">Mkhonjana Community, KwaZulu-Natal, South Africa</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100">
                            <h4 className="font-bold mb-2">Visit Us</h4>
                            <p className="text-sm text-foreground/70 leading-relaxed">
                                While we do not have a formal public office yet, we can arrange meetings at the Mkhonjana Community Center or the Skills Hub.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-3">
                        <div className="bg-white border-2 border-brand/5 shadow-2xl shadow-brand/5 p-8 md:p-12 rounded-[2rem] space-y-8 relative">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold text-foreground">Send a Message</h2>
                                <p className="text-foreground/60">Fill out the form below and we'll get back to you as soon as possible.</p>
                            </div>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-bold text-foreground/80 ml-1">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="e.g. Sipho Khumalo"
                                            className="w-full px-6 py-4 rounded-2xl border-2 border-zinc-100 focus:border-brand focus:outline-none transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="contact" className="text-sm font-bold text-foreground/80 ml-1">Email or Phone</label>
                                        <input
                                            type="text"
                                            id="contact"
                                            placeholder="e.g. sipho@email.com"
                                            className="w-full px-6 py-4 rounded-2xl border-2 border-zinc-100 focus:border-brand focus:outline-none transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-bold text-foreground/80 ml-1">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        placeholder="How can we help you?"
                                        className="w-full px-6 py-4 rounded-2xl border-2 border-zinc-100 focus:border-brand focus:outline-none transition-colors"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-bold text-foreground/80 ml-1">Message</label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        placeholder="Tell us more..."
                                        className="w-full px-6 py-4 rounded-2xl border-2 border-zinc-100 focus:border-brand focus:outline-none transition-colors resize-none"
                                    ></textarea>
                                </div>

                                <div className="pt-4 flex flex-col items-center gap-6">
                                    <button
                                        disabled
                                        className="w-full py-5 bg-brand text-white rounded-2xl font-bold opacity-50 cursor-not-allowed text-lg shadow-xl shadow-brand/20 transition-all"
                                    >
                                        Send Message
                                    </button>
                                    <div className="flex items-center gap-3 py-3 px-6 bg-brand/5 rounded-full border border-brand/10">
                                        <div className="w-2 h-2 bg-brand rounded-full animate-pulse"></div>
                                        <p className="text-sm font-bold text-brand italic">This form will be connected to our backend soon.</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
