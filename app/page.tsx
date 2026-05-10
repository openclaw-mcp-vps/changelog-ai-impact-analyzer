export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Changelog Analytics
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Know Which Changes Actually{" "}
          <span className="text-[#58a6ff]">Move the Needle</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Changelog AI Impact Analyzer correlates your feature releases with real user behavior — so you ship what matters and cut what doesn&apos;t.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Analyzing — $29/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">No credit card required for 7-day trial.</p>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-xl p-8 bg-[#161b22] max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$29</p>
          <p className="text-[#8b949e] text-sm mb-6">/month · cancel anytime</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited changelog entries</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Analytics platform integrations</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Webhook auto-tracking</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> AI-generated impact reports</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Slack & email alerts</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Which analytics platforms do you support?</h3>
            <p className="text-[#8b949e] text-sm">We integrate with Mixpanel, Amplitude, Segment, and Google Analytics out of the box. Custom webhook endpoints are also supported.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does the AI correlation work?</h3>
            <p className="text-[#8b949e] text-sm">Our engine timestamps each changelog entry and compares user engagement metrics before and after each release, surfacing statistically significant changes automatically.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel from your billing dashboard at any time. You keep access until the end of your billing period with no hidden fees.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
