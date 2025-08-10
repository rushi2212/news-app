import Link from "next/link";
import { notFound } from "next/navigation";

const newsArticles = [
  {
    id: 1,
    title: "Breaking News: Major Event Unfolds",
    category: "World",
    excerpt:
      "A major event has just occurred, shaking the foundations of global politics.",
    publishedAt: "2023-10-01",
  },
  {
    id: 2,
    title: "Tech Innovations: The Future is Here",
    category: "Technology",
    excerpt:
      "New technological advancements are changing the way we live and work.",
    publishedAt: "2023-10-02",
  },
  {
    id: 3,
    title: "Health Update: New Findings on Disease Prevention",
    category: "Health",
    excerpt:
      "Recent studies reveal new insights into preventing common diseases.",
    publishedAt: "2023-10-03",
  },
  {
    id: 4,
    title: "Sports Highlights: Top Teams Battle it Out",
    category: "Sports",
    excerpt:
      "The latest sports events have brought thrilling moments and unexpected outcomes.",
    publishedAt: "2023-10-04",
  },
  {
    id: 5,
    title: "Entertainment Buzz: Celebrity News and Gossip",
    category: "Entertainment",
    excerpt:
      "Catch up on the latest happenings in the world of entertainment and celebrities.",
    publishedAt: "2023-10-05",
  },
  {
    id: 6,
    title: "Finance Tips: Managing Your Money Wisely",
    category: "Finance",
    excerpt: "Expert advice on how to manage your finances and invest wisely.",
    publishedAt: "2023-10-06",
  },
];

const categories = {
  world: {
    name: "World",
    description: "Breaking news and global events from around the world.",
  },
  technology: {
    name: "Technology",
    description: "Latest updates in technology and innovation.",
  },
  health: {
    name: "Health",
    description: "Latest health news and medical updates.",
  },
  sports: { name: "Sports", description: "Latest sports news and highlights." },
  entertainment: {
    name: "Entertainment",
    description: "Latest entertainment news and celebrity gossip.",
  },
  finance: {
    name: "Finance",
    description: "Latest finance news and investment tips.",
  },
};

export default async function CategoryPage({ params }) {
  const { slug } = await params;

  if (!categories[slug]) {
    return notFound();
  }

  const category = categories[slug];
  const categoryArticles = newsArticles.filter(
    (article) => article.category.toLowerCase() === slug.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
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

        {/* Category Header */}
        <header className="text-center mb-12">
          <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-6">
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center ${
                slug === "world"
                  ? "bg-gradient-to-r from-red-500 to-pink-500"
                  : slug === "technology"
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                  : slug === "health"
                  ? "bg-gradient-to-r from-green-500 to-emerald-500"
                  : slug === "sports"
                  ? "bg-gradient-to-r from-orange-500 to-yellow-500"
                  : slug === "entertainment"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500"
                  : "bg-gradient-to-r from-indigo-500 to-purple-500"
              }`}
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {slug === "world" && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                )}
                {slug === "technology" && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  ></path>
                )}
                {slug === "health" && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                )}
                {slug === "sports" && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                )}
                {slug === "entertainment" && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v3M7 4H5a1 1 0 00-1 1v3M7 4v10a1 1 0 001 1h8a1 1 0 001-1V4m-9 0h8"
                  ></path>
                )}
                {slug === "finance" && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  ></path>
                )}
              </svg>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            {category.name}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {category.description}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-6"></div>
        </header>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categoryArticles.map((article, index) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200 overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${
                      article.category === "World"
                        ? "bg-red-100 text-red-700"
                        : article.category === "Technology"
                        ? "bg-blue-100 text-blue-700"
                        : article.category === "Health"
                        ? "bg-green-100 text-green-700"
                        : article.category === "Sports"
                        ? "bg-orange-100 text-orange-700"
                        : article.category === "Entertainment"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center">
                    <svg
                      className="w-3 h-3 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    {article.publishedAt}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                  {article.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex justify-between items-center">
                  <Link
                    href={`/articles/${article.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200 group"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200"
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
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* No Articles Message */}
        {categoryArticles.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              No articles found
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              We don&apos;t have any articles in the {category.name} category
              yet. Check back soon for updates!
            </p>
          </div>
        )}

        {/* Other Categories Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Explore Other Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(categories)
              .filter(([key]) => key !== slug)
              .map(([key, categoryItem]) => (
                <Link key={key} href={`/category/${key}`} className="group">
                  <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 p-6 border border-gray-100 hover:border-blue-200">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                        key === "world"
                          ? "bg-gradient-to-r from-red-500 to-pink-500"
                          : key === "technology"
                          ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                          : key === "health"
                          ? "bg-gradient-to-r from-green-500 to-emerald-500"
                          : key === "sports"
                          ? "bg-gradient-to-r from-orange-500 to-yellow-500"
                          : key === "entertainment"
                          ? "bg-gradient-to-r from-purple-500 to-pink-500"
                          : "bg-gradient-to-r from-indigo-500 to-purple-500"
                      }`}
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {key === "world" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        )}
                        {key === "technology" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                          ></path>
                        )}
                        {key === "health" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          ></path>
                        )}
                        {key === "sports" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          ></path>
                        )}
                        {key === "entertainment" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v3M7 4H5a1 1 0 00-1 1v3M7 4v10a1 1 0 001 1h8a1 1 0 001-1V4m-9 0h8"
                          ></path>
                        )}
                        {key === "finance" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                          ></path>
                        )}
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                      {categoryItem.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {categoryItem.description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}
