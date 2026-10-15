import React from 'react';
import { Article } from '../types/news';

interface SavedArticlesModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedArticleIds: string[];
  articles: Article[];
  onSelectArticle: (id: string) => void;
  onRemoveBookmark: (id: string) => void;
}

export const SavedArticlesModal: React.FC<SavedArticlesModalProps> = ({
  isOpen,
  onClose,
  savedArticleIds,
  articles,
  onSelectArticle,
  onRemoveBookmark
}) => {
  if (!isOpen) return null;

  const savedArticles = articles.filter((a) => savedArticleIds.includes(a.id));

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-xs pt-16 p-4">
      <div className="bg-[#ffffff] border border-[#1b1c1c] shadow-2xl max-w-xl w-full flex flex-col overflow-hidden max-h-[80vh]">
        <div className="p-4 border-b border-[#1b1c1c] flex items-center justify-between bg-[#fbf9f8]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-[#b52602]">bookmark</span>
            <h3 className="font-kicker text-xs uppercase tracking-widest font-black text-[#1b1c1c]">
              Your Saved Articles ({savedArticles.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#1b1c1c] hover:bg-[#efeded] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 divide-y divide-[#e4e2e2]">
          {savedArticles.length === 0 ? (
            <div className="text-center py-12 px-4">
              <span className="material-symbols-outlined text-4xl text-[#c4c7c7] mb-2">
                bookmark_border
              </span>
              <p className="font-deck text-base text-[#444748]">No saved articles yet.</p>
              <p className="font-caption text-xs text-[#747878] mt-1">
                Click the bookmark icon on any article card or while reading to save it for later.
              </p>
            </div>
          ) : (
            savedArticles.map((article) => (
              <div
                key={article.id}
                className="py-3 px-2 flex items-start justify-between gap-4 hover:bg-[#fbf9f8] transition-colors"
              >
                <div
                  onClick={() => {
                    onSelectArticle(article.id);
                    onClose();
                  }}
                  className="cursor-pointer flex-1"
                >
                  <span className="font-kicker text-[10px] uppercase font-bold text-[#b52602] block mb-1">
                    {article.kicker}
                  </span>
                  <h4 className="font-headline-sm text-base font-bold text-[#1b1c1c] leading-tight mb-1 hover:underline">
                    {article.title}
                  </h4>
                  <span className="font-byline text-[11px] text-[#747878] block">
                    By {article.bylines.join(', ')} • {article.readingTime}
                  </span>
                </div>
                <button
                  onClick={() => onRemoveBookmark(article.id)}
                  title="Remove bookmark"
                  className="text-[#747878] hover:text-[#b52602] p-1"
                >
                  <span className="material-symbols-outlined text-[18px]">delete</span>
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
