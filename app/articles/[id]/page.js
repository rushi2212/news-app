import Link from "next/link";
import { notFound } from "next/navigation";

const articles = [
  {
    id: 1,
    title: "Article 1",
    excerpt: "This is the excerpt for article 1.",
    content: "This is the full content for article 1.",
    category: "Category 1",
    readTime: "5 min read",
    author: "Author 1",
    publishedAt: "2023-01-01",
  },
  {
    id: 2,
    title: "Article 2",
    excerpt: "This is the excerpt for article 2.",
    content: "This is the full content for article 2.",
    category: "Category 2",
    readTime: "4 min read",
    author: "Author 2",
    publishedAt: "2023-01-02",
  },
  {
    id: 3,
    title: "Article 3",
    excerpt: "This is the excerpt for article 3.",
    content: "This is the full content for article 3.",
    category: "Category 3",
    readTime: "6 min read",
    author: "Author 3",
    publishedAt: "2023-01-03",
  },
  {
    id: 4,
    title: "Article 4",
    excerpt: "This is the excerpt for article 4.",
    content: "This is the full content for article 4.",
    category: "Category 4",
    readTime: "5 min read",
    author: "Author 4",
    publishedAt: "2023-01-04",
  },
  {
    id: 5,
    title: "Article 5",
    excerpt: "This is the excerpt for article 5.",
    content: "This is the full content for article 5.",
    category: "Category 5",
    readTime: "4 min read",
    author: "Author 5",
    publishedAt: "2023-01-05",
  },
  {
    id: 6,
    title: "Article 6",
    excerpt: "This is the excerpt for article 6.",
    content: "This is the full content for article 6.",
    category: "Category 6",
    readTime: "5 min read",
    author: "Author 6",
    publishedAt: "2023-01-06",
  },
];

export default async function ArticlePage({ params }) {
  const { id } = await params;
  const articleId = await parseInt(id);
  const article = articles.find((article) => article.id === articleId);

  if (!article) {
    return notFound();
  }

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

        {/* Article Header */}
        <header className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span
              className={`px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide ${
                article.category === "Category 1"
                  ? "bg-red-100 text-red-700"
                  : article.category === "Category 2"
                  ? "bg-blue-100 text-blue-700"
                  : article.category === "Category 3"
                  ? "bg-green-100 text-green-700"
                  : article.category === "Category 4"
                  ? "bg-orange-100 text-orange-700"
                  : article.category === "Category 5"
                  ? "bg-purple-100 text-purple-700"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {article.category}
            </span>
            <div className="flex items-center text-gray-500 text-sm">
              <svg
                className="w-4 h-4 mr-1"
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
              {article.readTime}
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center text-gray-600 border-t border-gray-200 pt-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">
                  {article.author.charAt(0)}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-900">
                  By {article.author}
                </span>
                <div className="flex items-center text-sm text-gray-500">
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  {article.publishedAt}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100">
          <div className="prose prose-lg max-w-none">
            {article.content.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="mb-6 text-gray-700 leading-relaxed text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        {/* Related Articles */}
        <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
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
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3v6m0 0l4 4m-4-4l-4 4"
              ></path>
            </svg>
            More Articles
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {articles
              .filter((a) => a.id !== articleId)
              .slice(0, 2)
              .map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  href={`/articles/${relatedArticle.id}`}
                  className="group block p-6 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
                >
                  <h4 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-2">
                    {relatedArticle.title}
                  </h4>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                    {relatedArticle.excerpt.substring(0, 100)}...
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span>{relatedArticle.readTime}</span>
                    <span className="mx-2">•</span>
                    <span>{relatedArticle.author}</span>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}
