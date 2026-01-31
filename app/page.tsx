export default function LandingPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          The Future of <span className="text-blue-600">JimTech</span> is Here.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
          The ultimate solution for your needs. Stop wasting time and start
          scaling your productivity with our lightning-fast platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
            Get Started for Free
          </button>
          <button className="px-8 py-4 bg-white border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition duration-300">
            View Demo
          </button>
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
