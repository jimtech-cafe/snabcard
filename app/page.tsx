import Header from "@/components/header";
import Hero from "@/components/hero";
import DataPurchase from "@/components/data-purchase";

export default function LandingPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      <Header />
      {/* Hero Section */}
      <Hero />
      {/* Data Purchase Section */}
      <DataPurchase />
      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-screen mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Simple Pricing
          </h2>
          <div className="grid md:grid-cols-2 gap-8 w-screen mx-auto">
            {/* Free Tier */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold mb-4">Starter</h3>
              <p className="text-4xl font-bold mb-6">
                $0<span className="text-lg text-gray-500 font-normal">/mo</span>
              </p>
              <ul className="mb-8 space-y-4 text-gray-600 flex-1">
                <li>✅ Basic Features</li>
                <li>✅ Community Support</li>
                <li>✅ 1 Project</li>
              </ul>
              <button className="w-full py-3 px-6 rounded-lg border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition">
                Join Free
              </button>
            </div>

            {/* Pro Tier */}
            <div className="bg-white p-8 rounded-2xl border-2 border-blue-600 shadow-xl flex flex-col relative">
              <span className="absolute top-0 right-8 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                Most Popular
              </span>
              <h3 className="text-xl font-bold mb-4">Pro</h3>
              <p className="text-4xl font-bold mb-6">
                $19
                <span className="text-lg text-gray-500 font-normal">/mo</span>
              </p>
              <ul className="mb-8 space-y-4 text-gray-600 flex-1">
                <li>✅ Advanced Analytics</li>
                <li>✅ Priority Email Support</li>
                <li>✅ Unlimited Projects</li>
                <li>✅ Custom Branding</li>
              </ul>
              <button className="w-full py-3 px-6 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                Go Pro
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section Preview */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-xl font-bold mb-2">Fast Deployment</h3>
            <p className="text-gray-500">
              Go live in seconds with Vercel integration.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Secure by Default</h3>
            <p className="text-gray-500">
              Enterprise-grade security for your data.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
            <p className="text-gray-500">
              Our team is always here to help you grow.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
