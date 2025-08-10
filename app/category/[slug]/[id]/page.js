import Link from "next/link";
import { notFound } from "next/navigation";

const articles = [
  {
    id: 1,
    title: "Breaking News: Major Event Unfolds",
    excerpt:
      "A major event has just occurred, shaking the foundations of global politics.",
    content:
      "This groundbreaking event has sent shockwaves through the international community. Leaders from around the world are calling for immediate action and diplomatic solutions. The implications of this development are far-reaching and will likely influence global politics for years to come.\n\nExperts suggest that this event marks a turning point in international relations. The response from various nations has been swift, with emergency sessions being called at major international organizations. Citizens worldwide are closely following the developments as they unfold.\n\nThe economic implications are also significant, with markets reacting strongly to the news. Financial analysts are predicting potential long-term effects on global trade and economic stability.",
    category: "World",
    readTime: "8 min read",
    author: "Sarah Johnson",
    publishedAt: "2023-10-01",
  },
  {
    id: 2,
    title: "Tech Innovations: The Future is Here",
    excerpt:
      "New technological advancements are changing the way we live and work.",
    content:
      "The rapid pace of technological innovation continues to reshape our world in unprecedented ways. From artificial intelligence to quantum computing, breakthrough technologies are emerging that promise to revolutionize industries and transform daily life.\n\nMajor tech companies are investing billions in research and development, pushing the boundaries of what's possible. These investments are yielding remarkable results, from more efficient renewable energy systems to advanced medical devices that can detect diseases earlier than ever before.\n\nThe implications for the future workforce are significant. As automation and AI become more sophisticated, new job categories are emerging while others become obsolete. Educational institutions and governments are working to prepare citizens for this technological transition.",
    category: "Technology",
    readTime: "6 min read",
    author: "Michael Chen",
    publishedAt: "2023-10-02",
  },
  {
    id: 3,
    title: "Health Update: New Findings on Disease Prevention",
    excerpt:
      "Recent studies reveal new insights into preventing common diseases.",
    content:
      "Groundbreaking medical research has uncovered new strategies for preventing some of the world's most common diseases. These findings could potentially save millions of lives and reduce healthcare costs globally.\n\nThe research, conducted across multiple institutions worldwide, involved thousands of participants over several years. The results show that simple lifestyle changes, combined with targeted interventions, can significantly reduce the risk of developing chronic conditions.\n\nHealthcare professionals are already beginning to implement these findings in their practice. Public health officials are developing new guidelines and recommendations based on this research, which could transform preventive medicine.",
    category: "Health",
    readTime: "7 min read",
    author: "Dr. Emily Rodriguez",
    publishedAt: "2023-10-03",
  },
  {
    id: 4,
    title: "Sports Highlights: Championship Victory",
    excerpt:
      "The latest sports events have brought thrilling moments and unexpected outcomes.",
    content:
      "In a stunning upset that will be remembered for years to come, the underdog team claimed victory in yesterday's championship match. The game was filled with spectacular plays, dramatic comebacks, and moments that had fans on the edge of their seats.\n\nThe winning team's journey to the championship was nothing short of remarkable. Starting the season with little expectation, they overcame numerous challenges and defeats to reach this pinnacle moment. Their victory represents the power of determination, teamwork, and never giving up on one's dreams.\n\nFans celebrated throughout the night, and the victory parade is expected to draw hundreds of thousands of supporters. This championship win will likely inspire a new generation of athletes and fans alike.",
    category: "Sports",
    readTime: "5 min read",
    author: "Jake Thompson",
    publishedAt: "2023-10-04",
  },
  {
    id: 5,
    title: "Entertainment Buzz: Award Season Highlights",
    excerpt:
      "Catch up on the latest happenings in the world of entertainment and celebrities.",
    content:
      "Award season brought its usual mix of surprises, emotional speeches, and memorable moments. This year's ceremonies were particularly notable for their focus on diversity and inclusion, with several historic wins and groundbreaking achievements.\n\nThe red carpet fashion was spectacular, with designers pushing creative boundaries and celebrities making bold style statements. Social media was buzzing with commentary and reactions to the various looks and moments throughout the evening.\n\nBeyond the glamour, the ceremonies highlighted important social causes and used their platform to raise awareness about critical issues facing society today. Many acceptance speeches called for positive change and unity.",
    category: "Entertainment",
    readTime: "4 min read",
    author: "Amanda Foster",
    publishedAt: "2023-10-05",
  },
  {
    id: 6,
    title: "Finance Tips: Smart Investment Strategies",
    excerpt: "Expert advice on how to manage your finances and invest wisely.",
    content:
      "Financial experts are sharing new insights on smart investment strategies for the current economic climate. With markets experiencing volatility and uncertainty, having a well-thought-out investment approach is more crucial than ever.\n\nDiversification remains a key principle, but experts are recommending new approaches to portfolio balance. Alternative investments and emerging markets are gaining attention as traditional investment vehicles face challenges.\n\nThe advice emphasizes the importance of long-term thinking and avoiding emotional decision-making during market fluctuations. Building a solid financial foundation through education and careful planning remains the cornerstone of successful investing.",
    category: "Finance",
    readTime: "6 min read",
    author: "Robert Kim",
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

export default function ArticlePage({ params }) {
  const { slug, id } = params;
  const category = categories[slug];
  const articleId = parseInt(id);
  const article = articles.find((article) => article.id === articleId);

  if (
    !category ||
    !article ||
    article.category.toLowerCase() !== slug.toLowerCase()
  ) {
    return notFound();
  }

  const relatedArticles = articles
    .filter(
      (a) =>
        a.id !== articleId && a.category.toLowerCase() === slug.toLowerCase()
    )
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
            <Link
              href="/"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </Link>
            <svg
              className="w-4 h-4"
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
            <Link
              href={`/category/${slug}`}
              className="hover:text-blue-600 transition-colors duration-200"
            >
              {category.name}
            </Link>
            <svg
              className="w-4 h-4"
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
            <span className="text-gray-800 font-medium">Article</span>
          </div>
          <Link
            href={`/category/${slug}`}
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
            Back to {category.name}
          </Link>
        </nav>

        {/* Article Header */}
        <header className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span
              className={`px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide ${
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
                  : article.category === "Finance"
                  ? "bg-indigo-100 text-indigo-700"
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

          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 leading-tight">
            {article.title}
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between border-t border-gray-200 pt-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-lg">
                  {article.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <span className="font-semibold text-gray-900 text-lg">
                  {article.author}
                </span>
                <div className="flex items-center text-sm text-gray-500">
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  Published on {article.publishedAt}
                </div>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                  ></path>
                </svg>
              </button>
              <button className="p-2 text-gray-400 hover:text-red-500 transition-colors duration-200">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </button>
              <button className="p-2 text-gray-400 hover:text-green-600 transition-colors duration-200">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100">
          <div className="prose prose-lg max-w-none">
            {article.content.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="mb-6 text-gray-700 leading-relaxed text-lg first-letter:text-4xl first-letter:font-bold first-letter:text-blue-600 first-letter:float-left first-letter:mr-2 first-letter:mt-1"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Article Tags */}
          <div className="border-t border-gray-200 pt-6 mt-8">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                #{article.category.toLowerCase()}
              </span>
              <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm font-medium">
                #news
              </span>
              <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm font-medium">
                #breaking
              </span>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
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
              More from {category.name}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedArticles.map((relatedArticle, index) => (
                <Link
                  key={relatedArticle.id}
                  href={`/category/${slug}/${relatedArticle.id}`}
                  className="group block p-6 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-3 ${
                      relatedArticle.category === "World"
                        ? "bg-red-100 text-red-700"
                        : relatedArticle.category === "Technology"
                        ? "bg-blue-100 text-blue-700"
                        : relatedArticle.category === "Health"
                        ? "bg-green-100 text-green-700"
                        : relatedArticle.category === "Sports"
                        ? "bg-orange-100 text-orange-700"
                        : relatedArticle.category === "Entertainment"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {relatedArticle.category}
                  </span>
                  <h4 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-2 line-clamp-2">
                    {relatedArticle.title}
                  </h4>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {relatedArticle.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center">
                      <span>{relatedArticle.readTime}</span>
                      <span className="mx-2">•</span>
                      <span>{relatedArticle.author}</span>
                    </div>
                    <span className="group-hover:text-blue-600 transition-colors duration-200">
                      Read more →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* No Related Articles */}
        {relatedArticles.length === 0 && (
          <section className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Explore More Articles
            </h3>
            <p className="text-gray-600 mb-6">
              Check out other articles from different categories
            </p>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Browse All Articles
              <svg
                className="w-4 h-4 ml-2"
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
          </section>
        )}
      </div>
    </div>
  );
}
