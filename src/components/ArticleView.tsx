import React, { useState, useEffect } from 'react';
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

interface Comment {
  id: string;
  author: string;
  location: string;
  timeAgo: string;
  text: string;
  likes: number;
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
  const [readingTheme, setReadingTheme] = useState<'newsprint' | 'white' | 'sepia' | 'dark'>('newsprint');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Audio simulation player
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioSeconds, setAudioSeconds] = useState(38);
  const [playbackSpeed, setPlaybackSpeed] = useState<'1x' | '1.25x' | '1.5x'>('1x');

  // Interactive Comments
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 'c1',
      author: 'Eleanor Vance',
      location: 'Boston, MA',
      timeAgo: '2h ago',
      text: 'The verification standoff has always been the Achilles heel of past accords. Independent satellite monitoring is non-negotiable if this truce is to hold beyond the first 45 days.',
      likes: 48
    },
    {
      id: 'c2',
      author: 'Marcus Aurelius K.',
      location: 'Geneva, Switzerland',
      timeAgo: '4h ago',
      text: 'Having observed these delegations over the past week, the shift in diplomatic tone is genuine. Both sides recognize that prolonged attrition offers zero strategic upside.',
      likes: 29
    }
  ]);
  const [newComment, setNewComment] = useState('');
  const [commentAuthor, setCommentAuthor] = useState('');

  // Scroll depth tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Audio timer simulation
  useEffect(() => {
    let interval: any;
    if (isPlayingAudio) {
      interval = setInterval(() => {
        setAudioSeconds((prev) => (prev < 420 ? prev + 1 : 0));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlayingAudio]);

  const formatAudioTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    const added: Comment = {
      id: `c_${Date.now()}`,
      author: commentAuthor.trim() || 'Times Reader',
      location: 'Verified Subscriber',
      timeAgo: 'Just now',
      text: newComment.trim(),
      likes: 1
    };
    setComments([added, ...comments]);
    setNewComment('');
    onShowToast('Your comment has been submitted and published to the conversation.');
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    onShowToast('Article link copied to clipboard.');
  };

  const fontSizeClass = {
    sm: 'text-[15.5px] leading-[26px]',
    md: 'text-[17.5px] leading-[30px]',
    lg: 'text-[20px] leading-[34px]',
    xl: 'text-[23px] leading-[38px]'
  }[fontSize];

  const themeClasses = {
    newsprint: 'bg-[#fbf9f8] text-[#1b1c1c]',
    white: 'bg-[#ffffff] text-[#121212]',
    sepia: 'bg-[#f4ecd8] text-[#3d3224]',
    dark: 'bg-[#1b1c1c] text-[#f2f0f0]'
  }[readingTheme];

  const themeBorder = {
    newsprint: 'border-[#e4e2e2]',
    white: 'border-[#e4e2e2]',
    sepia: 'border-[#e3d7bf]',
    dark: 'border-[#303031]'
  }[readingTheme];

  return (
    <div className={`w-full min-h-screen transition-colors duration-300 ${themeClasses}`}>
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent">
        <div
          className="h-full bg-[#b52602] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Sticky Reader Utility Bar */}
      <div
        className={`sticky top-0 z-40 backdrop-blur-md border-b ${themeBorder} shadow-xs ${
          readingTheme === 'dark' ? 'bg-[#1b1c1c]/95' : 'bg-[#fbf9f8]/95'
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 h-12 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 font-kicker text-xs uppercase tracking-widest font-black hover:text-[#b52602] transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            <span>Front Page</span>
          </button>

          {/* Controls: Audio Listen, Font Scale, Theme, Save, Share */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Audio Listen Bar */}
            <button
              onClick={() => {
                setIsPlayingAudio(!isPlayingAudio);
                onShowToast(isPlayingAudio ? 'Paused narration' : 'Playing Times Voice narration');
              }}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-kicker uppercase font-bold border transition-colors ${
                isPlayingAudio
                  ? 'bg-[#b52602] text-white border-[#b52602]'
                  : 'bg-transparent border-[#c4c7c7] hover:border-[#1b1c1c]'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">
                {isPlayingAudio ? 'pause' : 'volume_up'}
              </span>
              <span className="hidden sm:inline">
                {isPlayingAudio ? `${formatAudioTime(audioSeconds)} / 6:40` : 'Listen'}
              </span>
            </button>

            {/* Font Size Adjuster */}
            <div className="flex items-center border border-[#c4c7c7] bg-transparent text-xs font-bold">
              <button
                onClick={() => setFontSize('sm')}
                className={`px-2 py-1 ${fontSize === 'sm' ? 'bg-[#1b1c1c] text-white' : 'hover:bg-black/5'}`}
                title="Smaller text"
              >
                A-
              </button>
              <button
                onClick={() => setFontSize('md')}
                className={`px-2 py-1 ${fontSize === 'md' ? 'bg-[#1b1c1c] text-white' : 'hover:bg-black/5'}`}
                title="Default text"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('lg')}
                className={`px-2 py-1 ${fontSize === 'lg' ? 'bg-[#1b1c1c] text-white' : 'hover:bg-black/5'}`}
                title="Larger text"
              >
                A+
              </button>
            </div>

            {/* Reading Theme Switcher */}
            <div className="hidden md:flex items-center gap-1 border border-[#c4c7c7] p-0.5">
              <button
                onClick={() => setReadingTheme('newsprint')}
                className={`w-5 h-5 bg-[#fbf9f8] border ${readingTheme === 'newsprint' ? 'border-[#1b1c1c]' : 'border-transparent'}`}
                title="Newsprint Theme"
              />
              <button
                onClick={() => setReadingTheme('sepia')}
                className={`w-5 h-5 bg-[#f4ecd8] border ${readingTheme === 'sepia' ? 'border-[#3d3224]' : 'border-transparent'}`}
                title="Sepia Theme"
              />
              <button
                onClick={() => setReadingTheme('dark')}
                className={`w-5 h-5 bg-[#1b1c1c] border ${readingTheme === 'dark' ? 'border-white' : 'border-transparent'}`}
                title="Dark Theme"
              />
            </div>

            {/* Bookmark button */}
            <button
              onClick={() => onToggleBookmark(article.id)}
              className={`p-1.5 border transition-colors ${
                isBookmarked
                  ? 'bg-[#b52602] text-white border-[#b52602]'
                  : 'border-[#c4c7c7] hover:border-[#1b1c1c]'
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
              className="p-1.5 border border-[#c4c7c7] hover:border-[#1b1c1c] transition-colors"
              title="Share article"
            >
              <span className="material-symbols-outlined text-[18px]">share</span>
            </button>
          </div>
        </div>

        {/* Audio scrub indicator if active */}
        {isPlayingAudio && (
          <div className="w-full bg-black/10 h-1">
            <div
              className="bg-[#b52602] h-full transition-all duration-300"
              style={{ width: `${(audioSeconds / 400) * 100}%` }}
            />
          </div>
        )}
      </div>

      {/* Main Reading Container */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Kicker & Breadcrumbs */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-kicker text-xs uppercase tracking-widest text-[#b52602] font-black">
            {article.kicker}
          </span>
          {article.subKicker && (
            <>
              <span className="text-[#c4c7c7] select-none">•</span>
              <span className="font-timestamp text-xs uppercase tracking-wider font-bold opacity-80">
                {article.subKicker}
              </span>
            </>
          )}
        </div>

        {/* Headline */}
        <h1
          style={{ textWrap: 'balance' }}
          className="font-headline-lg text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.08] mb-4 tracking-tight"
        >
          {article.title}
        </h1>

        {/* Deck */}
        <p className="font-deck text-xl sm:text-2xl italic leading-snug mb-6 border-b border-[#c4c7c7]/60 pb-6 opacity-90">
          {article.deck}
        </p>

        {/* Author / Byline Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[#1b1c1c]">
          <div className="flex items-center gap-3">
            {article.authorPhotoUrl ? (
              <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-[#c4c7c7]">
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
              <p className="font-byline text-xs uppercase tracking-wider font-black">
                By {article.bylines.join(', ')}
              </p>
              {article.authorRole && (
                <p className="font-caption text-xs opacity-75">{article.authorRole}</p>
              )}
            </div>
          </div>

          <div className="text-right">
            <time className="font-timestamp text-xs opacity-75 block">
              {article.publishedAt}
            </time>
            <span className="font-caption text-xs font-bold">
              {article.readingTime}
            </span>
          </div>
        </div>

        {/* Hero Figure (if present) */}
        {article.imageUrl && (
          <figure className="mb-8">
            <div className="w-full aspect-[16/9] overflow-hidden bg-black/5 border border-[#c4c7c7]">
              <img
                src={article.imageUrl}
                alt={article.imageAlt || article.title}
                className="w-full h-full object-cover"
              />
            </div>
            {(article.imageCaption || article.photoCredit) && (
              <figcaption className="mt-2 flex flex-col sm:flex-row items-baseline justify-between text-xs font-caption opacity-80 gap-1">
                <span>{article.imageCaption}</span>
                {article.photoCredit && (
                  <span className="font-byline text-[10.5px] uppercase tracking-wider shrink-0 font-bold">
                    {article.photoCredit}
                  </span>
                )}
              </figcaption>
            )}
          </figure>
        )}

        {/* "Here is what we know" / Executive Highlights Box */}
        {article.highlights && article.highlights.length > 0 && (
          <div className="bg-black/5 border border-black/15 p-5 my-8 space-y-3">
            <h3 className="font-kicker text-xs uppercase tracking-widest font-black pb-1 border-b border-black/10">
              Key Developments to Know:
            </h3>
            <ul className="space-y-2 font-body-md text-sm list-none">
              {article.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b52602] mt-2 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Article Body Content with Drop Cap */}
        <div className={`space-y-6 font-body-md ${fontSizeClass}`}>
          {article.content.map((paragraph, index) => {
            // First paragraph drop cap
            if (index === 0 && !paragraph.startsWith('•') && !paragraph.startsWith('Ingredients:') && !paragraph.startsWith('Instructions:')) {
              const firstLetter = paragraph.charAt(0);
              const rest = paragraph.slice(1);
              return (
                <p key={index} className="leading-relaxed">
                  <span className="float-left text-5xl font-headline-display font-bold leading-none pr-3 pt-1">
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
                  <blockquote className="my-8 py-5 px-6 border-y border-[#1b1c1c] text-center">
                    <p className="font-headline-sm text-2xl font-normal italic leading-snug">
                      "{article.pullQuote.quote}"
                    </p>
                    <cite className="block mt-2.5 font-kicker text-xs uppercase tracking-wider opacity-75 not-italic font-bold">
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
          <div className="w-3 h-3 bg-[#b52602] rotate-45" />
        </div>

        {/* Reader Comments & Discussion */}
        <section className="border-t-2 border-[#1b1c1c] pt-8 mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-headline-sm text-2xl font-bold">
                Reader Conversation
              </h3>
              <p className="font-caption text-xs opacity-75 mt-0.5">
                {comments.length + 420} comments • Moderated by Times editors
              </p>
            </div>
            <span className="font-kicker text-[11px] uppercase tracking-wider font-bold text-[#b52602]">
              Verified Subscribers
            </span>
          </div>

          {/* New Comment Submission Form */}
          <form onSubmit={handleAddComment} className="mb-8 p-4 bg-black/5 border border-black/10">
            <h4 className="font-kicker text-xs uppercase font-black mb-2">Share your perspective:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
              <input
                type="text"
                placeholder="Your Name (e.g. S. Davis)"
                value={commentAuthor}
                onChange={(e) => setCommentAuthor(e.target.value)}
                className="px-3 py-1.5 text-xs bg-white border border-[#c4c7c7] outline-none focus:border-[#1b1c1c] text-[#1b1c1c]"
              />
            </div>
            <textarea
              rows={3}
              required
              placeholder="What are your thoughts on this diplomatic development?"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-[#c4c7c7] outline-none focus:border-[#1b1c1c] text-[#1b1c1c] mb-2"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-[#1b1c1c] text-white font-kicker text-xs uppercase font-black tracking-wider hover:bg-[#303031] transition-colors"
              >
                Post Comment
              </button>
            </div>
          </form>

          {/* Comments List */}
          <div className="space-y-4 divide-y divide-[#c4c7c7]/50">
            {comments.map((c) => (
              <div key={c.id} className="pt-4 first:pt-0">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="font-kicker text-xs uppercase font-black">{c.author}</span>
                    <span className="font-caption text-[11px] opacity-70">({c.location})</span>
                  </div>
                  <span className="font-timestamp text-[11px] opacity-60">{c.timeAgo}</span>
                </div>
                <p className="font-body-md text-sm leading-relaxed mb-2 opacity-90">{c.text}</p>
                <div className="flex items-center gap-3 text-xs opacity-75">
                  <button
                    onClick={() => {
                      setComments(comments.map(item => item.id === c.id ? { ...item, likes: item.likes + 1 } : item));
                      onShowToast('Liked comment.');
                    }}
                    className="flex items-center gap-1 hover:text-[#b52602]"
                  >
                    <span className="material-symbols-outlined text-[14px]">thumb_up</span>
                    <span>{c.likes} Recommended</span>
                  </button>
                  <span>•</span>
                  <button onClick={() => onShowToast('Replying to thread')} className="hover:underline">
                    Reply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* More in this section */}
        <div className="border-t-2 border-[#1b1c1c] pt-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-kicker text-xs uppercase tracking-widest font-black">
              More In The Times
            </h3>
            <button
              onClick={onBack}
              className="font-kicker text-xs uppercase text-[#b52602] font-black hover:underline"
            >
              Return to Front Page
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
                    <div className="aspect-[16/10] bg-black/5 overflow-hidden mb-2 border border-[#c4c7c7]">
                      <img
                        src={rel.imageUrl}
                        alt={rel.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <span className="font-kicker text-[10px] uppercase font-black text-[#b52602] block mb-1">
                    {rel.kicker}
                  </span>
                  <h4 className="font-headline-sm text-base font-bold group-hover:opacity-75 leading-snug mb-1">
                    {rel.title}
                  </h4>
                  <p className="font-caption text-xs opacity-75 line-clamp-2 leading-relaxed">
                    {rel.deck}
                  </p>
                </div>
                <span className="font-byline text-[10.5px] uppercase opacity-70 mt-2 block font-semibold">
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
