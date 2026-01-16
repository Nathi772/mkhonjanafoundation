import Link from "next/link";
import { getSortedPostsData } from "@/lib/news";

export const metadata = {
    title: "News & Updates | Mkhonjana Foundation",
    description: "Latest stories and impact reports from the Mkhonjana Foundation's work in the community.",
};

export default function NewsPage() {
    const allPostsData = getSortedPostsData();

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header Section */}
            <section className="py-20 px-6 bg-brand/5">
                <div className="max-w-3xl mx-auto text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground">News & <span className="text-brand">Updates</span></h1>
                    <p className="text-xl text-foreground/70 leading-relaxed">
                        Stories of impact, community progress, and announcements from the Mkhonjana Village.
                    </p>
                </div>
            </section>

            {/* News List */}
            <section className="py-20 px-6 max-w-6xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allPostsData.map((post) => (
                        <article key={post.slug} className="group flex flex-col bg-white border border-zinc-100 rounded-3xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                            <div className="aspect-video bg-zinc-100 relative overflow-hidden">
                                {/* Image Placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center text-zinc-300 font-bold bg-zinc-50 border-b border-zinc-100">
                                    [Image: {post.title}]
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow space-y-4">
                                <div className="flex gap-2">
                                    {post.tags.slice(0, 2).map(tag => (
                                        <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-brand bg-brand/10 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-bold text-foreground group-hover:text-brand transition-colors leading-tight">
                                        <Link href={`/news/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </h2>
                                    <p className="text-sm text-foreground/50">{post.date}</p>
                                </div>
                                <p className="text-foreground/70 line-clamp-3 text-sm flex-grow">
                                    {post.excerpt}
                                </p>
                                <div className="pt-4 border-t border-zinc-100 mt-auto">
                                    <Link
                                        href={`/news/${post.slug}`}
                                        className="text-brand font-bold text-sm inline-flex items-center group-hover:underline"
                                    >
                                        Read Story
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="ml-1 w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-20 px-6 bg-zinc-50 border-t border-zinc-100">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl font-bold">Stay Updated</h2>
                    <p className="text-foreground/70">
                        Sign up to our quarterly newsletter to receive impact reports and community highlights directly in your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="px-6 py-4 rounded-full border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-brand bg-white md:w-80"
                        />
                        <button className="px-8 py-4 bg-brand text-white rounded-full font-bold hover:opacity-90 transition-opacity">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
