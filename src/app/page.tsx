import Link from "next/link";
import TrustBlock from "@/components/layout/TrustBlock";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-8 py-24 px-6 max-w-5xl mx-auto text-center items-center">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
            Dignity. Community. <br />
            <span className="text-brand">Empowerment.</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            A rural-rooted NGO dedicated to the development of the Mkhonjana region through community-led initiatives.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link
            href="/donate"
            className="px-8 py-4 bg-brand text-white rounded-full font-bold hover:opacity-90 transition-opacity shadow-lg shadow-brand/20"
          >
            Donate to Our Work
          </Link>
          <Link
            href="/get-involved"
            className="px-8 py-4 border-2 border-brand text-brand rounded-full font-bold hover:bg-brand hover:text-white transition-all"
          >
            Get Involved
          </Link>
        </div>
      </div>

      {/* What We Do Section Placeholder */}
      <section className="py-20 px-6 bg-zinc-50">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
            <div className="w-20 h-1.5 bg-brand mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {['Sports', 'Crime Prevention', 'Arts & Culture', 'Skills Development', 'Partnerships'].map((item) => (
              <div key={item} className="p-6 bg-white rounded-2xl shadow-sm border border-zinc-100 flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center text-brand font-bold text-xl">
                  {item[0]}
                </div>
                <h3 className="font-bold text-foreground leading-tight">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustBlock />

      {/* Rest of home page sections will go here */}
    </div>
  );
}
