"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

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

export default function SearchPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(newsArticles);

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term.trim() === "") {
      setSearchResults(newsArticles);
      return;
    }
    const filtered = newsArticles.filter(
      (article) =>
        article.title.toLowerCase().includes(term.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(term.toLowerCase()) ||
        article.category.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(filtered);
  };

  const handleRandomArticle = () => {
    const randomIndex = Math.floor(Math.random() * newsArticles.length);
    const randomArticle = newsArticles[randomIndex];
    router.push(`/articles/${randomArticle.id}`);
  };

  const goback = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Search Articles
            </h1>
            <button
              onClick={goback}
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
              Go Back
            </button>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4"></div>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search articles by title, content, or category..."
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              />
            </div>
            <button
              onClick={handleRandomArticle}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg whitespace-nowrap"
            >
              <svg
                className="w-4 h-4 mr-2 inline"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                ></path>
              </svg>
              Random Article
            </button>
          </div>

          {/* Search Results Summary */}
          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              Found{" "}
              <span className="font-semibold text-blue-600">
                {searchResults.length}
              </span>{" "}
              article{searchResults.length !== 1 ? "s" : ""}
              {searchTerm && (
                <span>
                  {" "}
                  matching &ldquo;
                  <span className="font-semibold text-blue-600">
                    {searchTerm}
                  </span>
                  &rdquo;
                </span>
              )}
            </p>
            {searchTerm && (
              <button
                onClick={() => handleSearch("")}
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                Clear search
              </button>
            )}
          </div>
        </div>

        {/* Search Results */}
        <div className="space-y-6">
          {searchResults.map((article, index) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-blue-200 overflow-hidden group"
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
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex justify-end">
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

        {/* No Results */}
        {searchResults.length === 0 && (
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              No articles found
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              We couldn&apos;t find any articles matching &ldquo;{searchTerm}
              &rdquo;. Try adjusting your search terms or explore our latest
              articles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleSearch("")}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                View All Articles
              </button>
              <button
                onClick={handleRandomArticle}
                className="px-6 py-3 border-2 border-blue-500 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
              >
                Try Random Article
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
