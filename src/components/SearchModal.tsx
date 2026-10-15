import React, { useState } from 'react';
import { Article } from '../types/news';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  articles: Article[];
  onSelectArticle: (id: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  articles,
  onSelectArticle
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const matches = query.trim()
    ? articles.filter(
        (a) =>
          a.title.toLowerCase().includes(query.toLowerCase()) ||
          a.deck.toLowerCase().includes(query.toLowerCase()) ||
          a.kicker.toLowerCase().includes(query.toLowerCase()) ||
          a.bylines.some((b) => b.toLowerCase().includes(query.toLowerCase())) ||
          a.section.toLowerCase().includes(query.toLowerCase())
      )
    : articles.slice(0, 5);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-xs pt-16 p-4">
      <div className="bg-[#ffffff] border border-[#1b1c1c] shadow-2xl max-w-2xl w-full flex flex-col overflow-hidden max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#1b1c1c] flex items-center gap-3 bg-[#fbf9f8]">
          <span className="material-symbols-outlined text-[22px] text-[#444748]">search</span>
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search news, topics, opinion, authors..."
            className="flex-1 bg-transparent font-deck text-lg text-[#1b1c1c] placeholder:text-[#747878] outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-[#747878] hover:text-[#1b1c1c] text-xs font-kicker uppercase font-bold"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 text-[#1b1c1c] hover:bg-[#efeded] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Suggested Searches */}
        {!query && (
          <div className="px-5 py-3 border-b border-[#e4e2e2] bg-[#f5f3f3] flex items-center gap-2 flex-wrap">
            <span className="font-kicker text-[10px] uppercase font-bold text-[#747878]">
              Trending Topics:
            </span>
            {['Geneva Talks', 'Federal Reserve', 'Artificial Intelligence', 'Suburban Voters', 'Cooking'].map((t) => (
              <button
                key={t}
                onClick={() => setQuery(t)}
                className="font-caption text-xs px-2.5 py-1 bg-white border border-[#c4c7c7] hover:border-[#1b1c1c] transition-colors"
              >
                {t}
              </button>
            ))}
          </div>
        )}

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-4 divide-y divide-[#e4e2e2]">
          {matches.length === 0 ? (
            <div className="text-center py-10 font-caption text-[#747878]">
              No articles found matching "{query}".
            </div>
          ) : (
            matches.map((article) => (
              <div
                key={article.id}
                onClick={() => {
                  onSelectArticle(article.id);
                  onClose();
                }}
                className="py-3 px-2 hover:bg-[#fbf9f8] cursor-pointer group transition-colors"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-kicker text-[10px] uppercase font-black text-[#b52602]">
                    {article.kicker}
                  </span>
                  <span className="text-[#c4c7c7]">•</span>
                  <span className="font-timestamp text-[11px] text-[#747878]">
                    {article.timestamp}
                  </span>
                </div>
                <h4 className="font-headline-sm text-base font-bold text-[#1b1c1c] group-hover:text-[#444748] mb-1">
                  {article.title}
                </h4>
                <p className="font-caption text-xs text-[#444748] line-clamp-1">
                  {article.deck}
                </p>
                <span className="font-byline text-[11px] text-[#747878] mt-1 block uppercase">
                  By {article.bylines.join(', ')}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
