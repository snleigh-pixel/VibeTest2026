import React, { useState } from 'react';
import { Article } from '../types/news';

interface ArticleViewProps {
  article: Article;
  onBack: () => void;
  onSelectArticle: (id: string) => void;
  relatedArticles: Article[];
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  onShowToast: (msg: string) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  article,
  onBack,
  onSelectArticle,
  relatedArticles,
  isBookmarked,
  onToggleBookmark,
  onShowToast
}) => {
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('md');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioProgress, setAudioProgress] = useState(25);

  const fontSizeClass = {
    sm: 'text-[16px] leading-[26px]',
    md: 'text-[18px] leading-[30px]',
    lg: 'text-[21px] leading-[34px]',
    xl: 'text-[24px] leading-[38px]'
  }[fontSize];

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    onShowToast('Article link copied to clipboard.');
  };

  const handleToggleAudio = () => {
    setIsPlayingAudio(!isPlayingAudio);
    if (!isPlayingAudio) {
      onShowToast('Simulating audio narration (Times Voice)');
    }
  };

  return (
    <div className="w-full bg-[#fbf9f8] min-h-screen text-[#1b1c1c]">
      {/* Sticky Reader Utility Bar */}
      <div className="sticky top-0 z-40 bg-[#fbf9f8]/95 backdrop-blur-xs border-b border-[#e4e2e2] shadow-xs">
        <div className="max-w-4xl mx-auto px-4 h-12 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-1 font-kicker text-xs uppercase tracking-wider font-bold text-[#1b1c1c] hover:text-[#b52602] transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            <span>Front Page</span>
          </button>

          <div className="flex items-center gap-3">
            {/* Audio Listen Bar */}
            <button
              onClick={handleToggleAudio}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-kicker uppercase font-bold border transition-colors ${
                isPlayingAudio
                  ? 'bg-[#b52602] text-white border-[#b52602]'
                  : 'bg-[#ffffff] text-[#1b1c1c] border-[#c4c7c7] hover:border-[#1b1c1c]'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">
                {isPlayingAudio ? 'pause' : 'volume_up'}
              </span>
              <span className="hidden sm:inline">
                {isPlayingAudio ? 'Listening...' : 'Listen'}
              </span>
            </button>

            {/* Font Size Selector */}
            <div className="flex items-center border border-[#c4c7c7] bg-white">
              <button
                onClick={() => setFontSize('sm')}
                className={`px-2 py-1 text-[11px] font-bold ${
                  fontSize === 'sm' ? 'bg-[#1b1c1c] text-white' : 'text-[#444748] hover:bg-[#efeded]'
                }`}
                title="Small text"
              >
                A-
              </button>
              <button
                onClick={() => setFontSize('md')}
                className={`px-2 py-1 text-[12px] font-bold ${
                  fontSize === 'md' ? 'bg-[#1b1c1c] text-white' : 'text-[#444748] hover:bg-[#efeded]'
                }`}
                title="Medium text"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('lg')}
                className={`px-2 py-1 text-[13px] font-bold ${
                  fontSize === 'lg' ? 'bg-[#1b1c1c] text-white' : 'text-[#444748] hover:bg-[#efeded]'
                }`}
                title="Large text"
              >
                A+
              </button>
            </div>

            {/* Bookmark button */}
            <button
              onClick={() => onToggleBookmark(article.id)}
              className={`p-1.5 border transition-colors ${
                isBookmarked
                  ? 'bg-[#b52602] text-white border-[#b52602]'
                  : 'bg-white text-[#1b1c1c] border-[#c4c7c7] hover:border-[#1b1c1c]'
              }`}
              title={isBookmarked ? 'Saved to reading list' : 'Save article'}
            >
              <span className="material-symbols-outlined text-[18px]">
                {isBookmarked ? 'bookmark' : 'bookmark_border'}
              </span>
            </button>

            {/* Share button */}
            <button
              onClick={handleShare}
              className="p-1.5 bg-white border border-[#c4c7c7] text-[#1b1c1c] hover:border-[#1b1c1c] transition-colors"
              title="Share article"
            >
              <span className="material-symbols-outlined text-[18px]">share</span>
            </button>

            {/* Print button */}
            <button
              onClick={() => window.print()}
              className="hidden md:flex p-1.5 bg-white border border-[#c4c7c7] text-[#1b1c1c] hover:border-[#1b1c1c] transition-colors"
              title="Print article"
            >
              <span className="material-symbols-outlined text-[18px]">print</span>
            </button>
          </div>
        </div>

        {/* Audio Progress indicator if active */}
        {isPlayingAudio && (
          <div className="w-full bg-[#efeded] h-1">
            <div
              className="bg-[#b52602] h-full transition-all duration-300"
              style={{ width: `${audioProgress}%` }}
            />
          </div>
        )}
      </div>

      {/* Main Reading Container */}
      <article className="max-w-3xl mx-auto px-4 py-8">
        {/* Kicker & Breadcrumbs */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-kicker text-xs uppercase tracking-widest text-[#b52602] font-black">
            {article.kicker}
          </span>
          {article.subKicker && (
            <>
              <span className="text-[#c4c7c7]">•</span>
              <span className="font-timestamp text-xs text-[#747878] uppercase font-bold">
                {article.subKicker}
              </span>
            </>
          )}
        </div>

        {/* Headline */}
        <h1 className="font-headline-lg text-3xl sm:text-4xl md:text-5xl font-bold text-[#1b1c1c] leading-[1.12] mb-4">
          {article.title}
        </h1>

        {/* Deck */}
        <p className="font-deck text-xl sm:text-2xl text-[#444748] italic leading-snug mb-6 border-b border-[#e4e2e2] pb-6">
          {article.deck}
        </p>

        {/* Author / Byline Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[#1b1c1c]">
          <div className="flex items-center gap-3">
            {article.authorPhotoUrl ? (
              <div className="w-12 h-12 rounded-full overflow-hidden bg-[#efeded] shrink-0 border border-[#e4e2e2]">
                <img
                  src={article.authorPhotoUrl}
                  alt={article.bylines[0]}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-10 h-10 rounded-full bg-[#1b1c1c] text-white flex items-center justify-center font-kicker text-xs font-bold uppercase">
                {article.bylines[0]?.slice(0, 2) || 'NY'}
              </div>
            )}
            <div>
              <p className="font-byline text-xs uppercase tracking-wider text-[#1b1c1c] font-bold">
                By {article.bylines.join(', ')}
              </p>
              {article.authorRole && (
                <p className="font-caption text-xs text-[#747878]">{article.authorRole}</p>
              )}
            </div>
          </div>

          <div className="text-right">
            <time className="font-timestamp text-xs text-[#747878] block">
              {article.publishedAt}
            </time>
            <span className="font-caption text-xs text-[#1b1c1c] font-semibold">
              {article.readingTime}
            </span>
          </div>
        </div>

        {/* Hero Figure (if present) */}
        {article.imageUrl && (
          <figure className="mb-8">
            <div className="w-full aspect-[16/9] overflow-hidden bg-[#efeded]">
              <img
                src={article.imageUrl}
                alt={article.imageAlt || article.title}
                className="w-full h-full object-cover"
              />
            </div>
            {(article.imageCaption || article.photoCredit) && (
              <figcaption className="mt-2 flex flex-col sm:flex-row items-baseline justify-between text-xs font-caption text-[#444748] gap-1">
                <span>{article.imageCaption}</span>
                {article.photoCredit && (
                  <span className="font-byline text-[10px] uppercase tracking-wider text-[#747878] shrink-0">
                    {article.photoCredit}
                  </span>
                )}
              </figcaption>
            )}
          </figure>
        )}

        {/* "Here is what we know" / Executive Highlights Box */}
        {article.highlights && article.highlights.length > 0 && (
          <div className="bg-[#f5f3f3] border-l-4 border-[#1b1c1c] p-5 my-8 space-y-3">
            <h3 className="font-kicker text-xs uppercase tracking-widest text-[#1b1c1c] font-black">
              Key Developments to Know:
            </h3>
            <ul className="space-y-2 font-body-md text-sm text-[#1b1c1c]">
              {article.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b52602] mt-2 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Article Body Content */}
        <div className={`space-y-6 font-body-md text-[#1b1c1c] ${fontSizeClass}`}>
          {article.content.map((paragraph, index) => {
            // First paragraph drop cap
            if (index === 0 && !article.content[0].startsWith('•') && !article.content[0].startsWith('Ingredients:')) {
              const firstLetter = paragraph.charAt(0);
              const rest = paragraph.slice(1);
              return (
                <p key={index} className="leading-relaxed">
                  <span className="float-left text-5xl font-headline-display font-bold leading-none pr-3 pt-1 text-[#1b1c1c]">
                    {firstLetter}
                  </span>
                  {rest}
                </p>
              );
            }

            // Pull quote in middle
            if (index === 2 && article.pullQuote) {
              return (
                <React.Fragment key={index}>
                  <p className="leading-relaxed">{paragraph}</p>
                  <blockquote className="my-8 py-4 px-6 border-y-2 border-[#1b1c1c] bg-[#ffffff] text-center">
                    <p className="font-headline-sm text-2xl font-normal italic text-[#1b1c1c] leading-snug">
                      "{article.pullQuote.quote}"
                    </p>
                    <cite className="block mt-2 font-kicker text-xs uppercase tracking-wider text-[#747878] not-italic font-bold">
                      — {article.pullQuote.attribution}
                    </cite>
                  </blockquote>
                </React.Fragment>
              );
            }

            return (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Editorial End Mark */}
        <div className="my-10 flex items-center justify-center">
          <div className="w-3 h-3 bg-[#1b1c1c] rotate-45" />
        </div>

        {/* Reader Feedback & Engagement */}
        <div className="bg-[#ffffff] border border-[#e4e2e2] p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-headline-sm text-base font-bold text-[#1b1c1c]">
              Join the Conversation
            </h4>
            <p className="font-caption text-xs text-[#747878]">
              {article.metrics?.comments || 420} readers have contributed comments to this dispatch.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onShowToast('Comment submission modal opened.')}
              className="px-4 py-2 bg-[#1b1c1c] text-white font-kicker text-xs uppercase font-bold tracking-wider hover:bg-[#474646] transition-colors"
            >
              Add a Comment
            </button>
            <button
              onClick={() => onToggleBookmark(article.id)}
              className="px-3 py-2 border border-[#747878] font-kicker text-xs uppercase font-bold hover:bg-[#f5f3f3] transition-colors flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px]">
                {isBookmarked ? 'bookmark' : 'bookmark_border'}
              </span>
              <span>{isBookmarked ? 'Saved' : 'Save'}</span>
            </button>
          </div>
        </div>

        {/* Related Coverage */}
        <div className="border-t-2 border-[#1b1c1c] pt-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-kicker text-xs uppercase tracking-widest text-[#1b1c1c] font-black">
              More From The New York Times
            </h3>
            <button
              onClick={onBack}
              className="font-kicker text-xs uppercase text-[#b52602] font-bold hover:underline"
            >
              View Front Page
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.slice(0, 3).map((rel) => (
              <div
                key={rel.id}
                onClick={() => onSelectArticle(rel.id)}
                className="cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  {rel.imageUrl && (
                    <div className="aspect-[16/10] bg-[#efeded] overflow-hidden mb-2">
                      <img
                        src={rel.imageUrl}
                        alt={rel.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <span className="font-kicker text-[10px] uppercase font-bold text-[#b52602] block mb-1">
                    {rel.kicker}
                  </span>
                  <h4 className="font-headline-sm text-base font-bold text-[#1b1c1c] group-hover:text-[#444748] leading-snug mb-1">
                    {rel.title}
                  </h4>
                  <p className="font-caption text-xs text-[#747878] line-clamp-2">
                    {rel.deck}
                  </p>
                </div>
                <span className="font-byline text-[10px] uppercase text-[#747878] mt-2 block">
                  By {rel.bylines[0]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};
