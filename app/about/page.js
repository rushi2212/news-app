import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 group"
          >
            <svg
              className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            Back to Home
          </Link>
        </nav>

        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            About NewsHub
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our story, mission, and the passionate team behind NewsHub
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-8 lg:gap-12">
          {/* Mission Section */}
          <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Welcome to NewsHub, where staying informed meets exceptional user
              experience. We believe that access to quality news and information
              is fundamental to an informed society.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to provide the best service and experience for our
              users, delivering timely, accurate, and engaging news content that
              matters to your daily life.
            </p>
          </section>

          {/* Team Section */}
          <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.281-1.27-.743-1.694M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.281-1.27.743-1.694M12 12a4 4 0 100-8 4 4 0 000 8z"
                  ></path>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We are committed to excellence in journalism and technology. Our
              diverse team of writers, editors, and developers works tirelessly
              to ensure that we meet and exceed the needs of our growing
              community.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From breaking news to in-depth analysis, our team brings you
              content that informs, educates, and inspires meaningful
              conversations.
            </p>
          </section>

          {/* Contact Section */}
          <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-2.53-.36c-.44-.122-.884-.215-1.327-.27A4.021 4.021 0 018 20H4a2 2 0 01-2-2v-8a2 2 0 012-2h2.09A8 8 0 0121 12z"
                  ></path>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Get In Touch</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Have questions, feedback, or story suggestions? We&apos;d love to
              hear from you! Your input helps us improve and create content that
              resonates with our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                Contact Us
              </Link>
              <Link
                href="#newsletter"
                className="inline-flex items-center justify-center border-2 border-blue-500 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-3.5-3.5a50.002 50.002 0 00-1.154-1.199l-.051-.045-.046-.041-.142-.127-.054-.048-.12-.106-.051-.045-.142-.127-.054-.048-.12-.106-.051-.045-.046-.041-.024-.022-.024-.022-.046-.041-.051-.045-.046-.041-.051-.045-.046-.041-.051-.045-.046-.041-.051-.045-.046-.041-.051-.045-.046-.041-.051-.045-.046-.041-.051-.045-.046-.041-.051-.045-.142-.127-.054-.048-.12-.106-.051-.045-.142-.127-.054-.048-.12-.106-.051-.045-.046-.041a50.002 50.002 0 00-1.154-1.199L9 14v3h6z"
                  ></path>
                </svg>
                Subscribe
              </Link>
            </div>
          </section>

          {/* Thank You Section */}
          <section className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg p-8 text-white text-center">
            <div className="mb-6">
              <svg
                className="w-16 h-16 mx-auto text-white opacity-80"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
            <p className="text-lg text-blue-100 leading-relaxed max-w-2xl mx-auto">
              Thank you for visiting our About page and for being part of the
              NewsHub community. We appreciate your interest, support, and trust
              in us as your news source.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
