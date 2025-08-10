import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="relative">
            <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent opacity-20 select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-32 h-32 text-blue-500 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33m0 0l-.088-.088A7.962 7.962 0 014 12.001c0-4.418 3.582-8 8-8s8 3.582 8 8a7.96 7.96 0 01-2.333 5.67l-.088.088"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            The page you&apos;re looking for seems to have wandered off into the
            digital wilderness. Don&apos;t worry, even the best explorers
            sometimes take a wrong turn!
          </p>

          {/* Home Button */}
          <Link
            href="/"
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path>
            </svg>
            Take Me Home
          </Link>
        </div>

        {/* Popular Articles */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-center">
            <svg
              className="w-6 h-6 mr-2 text-blue-600"
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
            Or Try These Popular Articles
          </h3>

          <div className="space-y-4">
            <Link
              href="/articles/1"
              className="group block p-4 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all duration-200 hover:-translate-y-1"
            >
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-3 group-hover:bg-red-600 transition-colors duration-200"></div>
                <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  Understanding Next.js Framework
                </span>
                <svg
                  className="w-4 h-4 ml-auto text-gray-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
            </Link>

            <Link
              href="/articles/2"
              className="group block p-4 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all duration-200 hover:-translate-y-1"
            >
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-600 transition-colors duration-200"></div>
                <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  Getting Started with React Development
                </span>
                <svg
                  className="w-4 h-4 ml-auto text-gray-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
            </Link>

            <Link
              href="/articles/3"
              className="group block p-4 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all duration-200 hover:-translate-y-1"
            >
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 group-hover:bg-green-600 transition-colors duration-200"></div>
                <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  Building a Modern Blog with Next.js
                </span>
                <svg
                  className="w-4 h-4 ml-auto text-gray-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
            </Link>
          </div>
        </div>

        {/* Footer Message */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Lost? Our search function can help you find what you&apos;re looking
            for.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
