import Link from "next/link";
import { getPostData, getSortedPostsData } from "@/lib/news";
import { notFound } from "next/navigation";

interface PostParams {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function PostPage({ params }: PostParams) {
    const { slug } = await params;

    try {
        const postData = await getPostData(slug);

        return (
            <article className="min-h-screen pb-20">
                {/* Post Header */}
                <header className="py-20 px-6 bg-brand/5 border-b border-brand/10">
                    <div className="max-w-3xl mx-auto space-y-6">
                        <Link
                            href="/news"
                            className="inline-flex items-center text-brand font-bold text-sm hover:underline"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="mr-2 w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                            Back to News
                        </Link>

                        <div className="space-y-4">
                            <div className="flex gap-2">
                                {postData.tags.map(tag => (
                                    <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-brand bg-brand/10 px-2 py-1 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                                {postData.title}
                            </h1>
                            <p className="text-foreground/50 font-medium">Published on {postData.date}</p>
                        </div>
                    </div>
                </header>

                {/* Featured Image Placeholder */}
                <div className="max-w-4xl mx-auto px-6 -mt-10">
                    <div className="aspect-video bg-zinc-100 rounded-3xl shadow-xl flex items-center justify-center text-zinc-300 font-bold border border-white">
                        [Featured Image: {postData.title}]
                    </div>
                </div>

                {/* Post Content */}
                <div className="max-w-3xl mx-auto px-6 py-16">
                    <div
                        className="prose prose-lg prose-zinc max-w-none prose-headings:text-foreground prose-p:text-foreground/80 prose-strong:text-brand prose-a:text-brand prose-a:font-bold hover:prose-a:underline"
                        dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }}
                    />

                    <div className="mt-16 pt-8 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="space-y-2">
                            <h4 className="font-bold text-lg">Share this story</h4>
                            <div className="flex gap-4">
                                {/* Social placeholders */}
                                {['Facebook', 'Twitter', 'WhatsApp'].map(platform => (
                                    <button key={platform} className="text-zinc-400 hover:text-brand transition-colors text-sm font-medium">
                                        {platform}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <Link
                            href="/donate"
                            className="px-8 py-4 bg-brand text-white rounded-full font-bold hover:opacity-90 transition-opacity shadow-lg shadow-brand/20"
                        >
                            Support Our Work
                        </Link>
                    </div>
                </div>
            </article>
        );
    } catch (error) {
        notFound();
    }
}
