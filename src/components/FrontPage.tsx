import React, { useState } from 'react';
import { Article, SectionType } from '../types/news';
import { GUEST_ESSAYS } from '../data/newsData';

interface FrontPageProps {
  articles: Article[];
  onSelectArticle: (id: string) => void;
  onOpenLiveUpdates: () => void;
  onOpenGames: (game: 'wordle' | 'spelling-bee' | 'crossword') => void;
  savedArticleIds: string[];
  onToggleBookmark: (id: string) => void;
  onShowToast: (message: string) => void;
  currentSection: SectionType;
}

export const FrontPage: React.FC<FrontPageProps> = ({
  articles,
  onSelectArticle,
  onOpenLiveUpdates,
  onOpenGames,
  savedArticleIds,
  onToggleBookmark,
  onShowToast,
  currentSection
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      onShowToast('Please enter a valid email address.');
      return;
    }
    setNewsletterSubscribed(true);
    onShowToast(`Subscribed! The Morning briefing will be sent to ${newsletterEmail}`);
    setNewsletterEmail('');
  };

  // Find articles by id
  const leadArticle = articles.find((a) => a.id === 'ceasefire-talks-geneva') || articles[0];
  const monetaryArticle = articles.find((a) => a.id === 'central-banks-rate-path') || articles[1];
  const aiArticle = articles.find((a) => a.id === 'regulators-ai-partnerships') || articles[2];
  const swingVotersArticle = articles.find((a) => a.id === 'suburban-voters-economy-2024') || articles[3];
  const techCryptoArticle = articles.find((a) => a.id === 'tech-giants-digital-media-authentication') || articles[4];
  const dowdArticle = articles.find((a) => a.id === 'maureen-dowd-statecraft') || articles[5];
  const kleinArticle = articles.find((a) => a.id === 'ezra-klein-building-things') || articles[6];
  const krugmanArticle = articles.find((a) => a.id === 'paul-krugman-resilient-economy') || articles[7];
  const chipArticle = articles.find((a) => a.id === 'chip-packaging-battle') || articles[8];
  const alzheimerArticle = articles.find((a) => a.id === 'alzheimers-blood-assay') || articles[9];
  const crucibleArticle = articles.find((a) => a.id === 'crucible-broadway-revival') || articles[10];
  const chickenArticle = articles.find((a) => a.id === 'sheet-pan-chicken-lemon-feta') || articles[11];

  // If a specific section is selected other than 'all', we can also display a section banner
  const isFilteredSection = currentSection !== 'all';

  return (
    <main className="w-full bg-[#fbf9f8] min-h-screen pt-4 pb-12">
      <div className="flex flex-col w-full">
        {/* Section Filter Banner if active */}
        {isFilteredSection && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full mb-4">
            <div className="bg-[#1b1c1c] text-white p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-kicker text-xs uppercase tracking-widest text-[#fd5833] font-bold">
                  Section Filter Active:
                </span>
                <span className="font-headline-sm text-lg capitalize font-bold">
                  {currentSection.replace('-', ' ')}
                </span>
              </div>
              <span className="font-caption text-xs text-[#c8c6c5]">
                Showing highlighted stories &amp; broadsheet overview
              </span>
            </div>
          </div>
        )}

        {/* Breaking / Live Developing Banner */}
        <div className="w-full bg-[#ffffff] shadow-xs mb-4 border-y border-[#e4e2e2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1.5 flex items-center justify-between gap-4">
            <div
              onClick={onOpenLiveUpdates}
              className="flex items-center gap-2 min-w-0 cursor-pointer group flex-1"
            >
              <span className="inline-flex items-center gap-1.5 px-1.5 py-0.5 bg-[#b52602] text-white font-kicker text-[11px] font-black tracking-widest shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fbf9f8] animate-ping" />
                LIVE
              </span>
              <span className="font-kicker text-kicker uppercase font-bold text-[#b52602] tracking-wider shrink-0 text-[11px]">
                Global Summit:
              </span>
              <span className="font-deck text-body-md text-[#1b1c1c] group-hover:text-[#444748] truncate font-medium text-xs sm:text-sm">
                World leaders meet in Geneva as ceasefire talks enter second day. Envoys draft provisional framework.
              </span>
            </div>
            <button
              onClick={onOpenLiveUpdates}
              className="shrink-0 flex items-center gap-1 text-[#b52602] font-kicker text-kicker uppercase font-bold hover:underline text-[11px]"
            >
              <span>See latest updates</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Main Editorial Canvas (12-Column Classic Broadsheet Grid) */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
          {/* Top Broadsheet Grid: 6 Cols (Lead) + 3 Cols (Analysis) + 3 Cols (Opinion) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            {/* Primary Lead Column (6 Columns - 50%) */}
            <section className="lg:col-span-6 flex flex-col space-y-4 pr-0 lg:pr-4 lg:border-r lg:border-[#e4e2e2]">
              {/* Lead Top Package */}
              <article className="flex flex-col group relative">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5">
                    <span className="font-kicker text-kicker uppercase tracking-widest text-[#b52602] font-black text-[11px]">
                      {leadArticle.kicker}
                    </span>
                    <span className="text-[#c4c7c7] font-label-sm text-[10px]">•</span>
                    <span className="font-timestamp text-[11px] text-[#444748] uppercase">
                      {leadArticle.subKicker || 'Geneva Dispatch'}
                    </span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleBookmark(leadArticle.id);
                    }}
                    title={savedArticleIds.includes(leadArticle.id) ? 'Saved' : 'Save article'}
                    className="text-[#747878] hover:text-[#b52602] p-1"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      {savedArticleIds.includes(leadArticle.id) ? 'bookmark' : 'bookmark_border'}
                    </span>
                  </button>
                </div>

                <h2
                  onClick={() => onSelectArticle(leadArticle.id)}
                  className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#1b1c1c] group-hover:text-[#444748] transition-colors cursor-pointer leading-[1.08] mb-1.5 font-bold"
                >
                  {leadArticle.title}
                </h2>

                <p
                  onClick={() => onSelectArticle(leadArticle.id)}
                  className="font-deck text-deck text-[#444748] italic mb-2 leading-snug cursor-pointer"
                >
                  {leadArticle.deck}
                </p>

                <div className="flex items-center gap-2 mb-4 text-xs">
                  <p className="font-byline text-[11px] uppercase tracking-wide text-[#1b1c1c]">
                    By{' '}
                    <span className="font-bold underline decoration-[#c4c7c7] cursor-pointer">
                      Julian E. Barnes
                    </span>
                    ,{' '}
                    <span className="font-bold underline decoration-[#c4c7c7] cursor-pointer">
                      Lara Jakes
                    </span>{' '}
                    and{' '}
                    <span className="font-bold underline decoration-[#c4c7c7] cursor-pointer">
                      Edward Wong
                    </span>
                  </p>
                  <span className="text-[#c4c7c7] text-[10px]">•</span>
                  <time className="font-timestamp text-[11px] text-[#444748]">{leadArticle.timestamp}</time>
                </div>

                {/* Hero Editorial Photograph */}
                <figure
                  onClick={() => onSelectArticle(leadArticle.id)}
                  className="w-full mb-3 cursor-pointer"
                >
                  <div className="w-full aspect-[16/9] overflow-hidden bg-[#efeded] relative">
                    <img
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                      alt={leadArticle.imageAlt}
                      src={leadArticle.imageUrl}
                    />
                  </div>
                  <figcaption className="mt-1 flex items-baseline justify-between text-xs font-caption text-[#444748]">
                    <span>{leadArticle.imageCaption}</span>
                    <span className="font-byline text-[10px] uppercase tracking-wider text-[#747878] shrink-0 ml-2">
                      {leadArticle.photoCredit}
                    </span>
                  </figcaption>
                </figure>

                {/* Executive Summary & Know Box */}
                <div className="bg-[#f5f3f3] p-4 space-y-2 mb-4 border-l-2 border-[#1b1c1c]">
                  <h3 className="font-kicker text-kicker uppercase tracking-widest text-[#000000] font-black text-[11px]">
                    Here is what we know:
                  </h3>
                  <ul className="space-y-1.5 font-body-md text-sm text-[#1b1c1c] list-none">
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#000000] mt-2 shrink-0" />
                      <span>
                        <strong>Three-phase roadmap:</strong> A draft compromise establishes a 45-day temporary truce accompanied by monitored troop redeployments from civilian corridors.
                      </span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#000000] mt-2 shrink-0" />
                      <span>
                        <strong>Verification standoff:</strong> European delegates insist on independent satellite and ground observation, a provision still resisted by tactical field commanders.
                      </span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#000000] mt-2 shrink-0" />
                      <span>
                        <strong>Humanitarian corridors:</strong> Unhindered medical convoys are scheduled to access southern enclaves starting at dawn if formal signatures are secured tonight.
                      </span>
                    </li>
                  </ul>
                </div>

                <p className="font-body-md text-body-md text-[#1b1c1c] leading-relaxed text-sm sm:text-base">
                  The discussions, held behind closed doors under Swiss auspices, represent the most sustained diplomatic engagement between the opposing delegations in over eleven months. While regional mediators described the mood as sober, senior negotiators underscored that past preliminary agreements collapsed over implementation details in the final hours.
                </p>
              </article>

              {/* Lead Column Sub-Story: Monetary Policy */}
              <article
                onClick={() => onSelectArticle(monetaryArticle.id)}
                className="bg-[#ffffff] p-4 group cursor-pointer shadow-xs border border-[#e4e2e2] transition-colors hover:border-[#1b1c1c]"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-kicker text-kicker uppercase tracking-wider text-[#b52602] font-bold text-[11px]">
                    {monetaryArticle.kicker}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleBookmark(monetaryArticle.id);
                    }}
                    className="text-[#747878] hover:text-[#b52602]"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      {savedArticleIds.includes(monetaryArticle.id) ? 'bookmark' : 'bookmark_border'}
                    </span>
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
                  <div className="sm:col-span-2 space-y-1">
                    <h3 className="font-headline-sm text-lg font-bold text-[#1b1c1c] group-hover:text-[#444748] leading-snug">
                      {monetaryArticle.title}
                    </h3>
                    <p className="font-body-md text-xs text-[#444748] line-clamp-2">
                      {monetaryArticle.deck}
                    </p>
                    <div className="flex items-center gap-1 pt-1 text-[11px]">
                      <span className="font-byline uppercase text-[#1b1c1c]">By Jeanna Smialek</span>
                      <span className="text-[#c4c7c7]">•</span>
                      <span className="font-timestamp text-[#444748]">{monetaryArticle.timestamp}</span>
                    </div>
                  </div>
                  <div className="sm:col-span-1 aspect-[4/3] bg-[#efeded] overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt={monetaryArticle.imageAlt}
                      src={monetaryArticle.imageUrl}
                    />
                  </div>
                </div>
              </article>
            </section>

            {/* Center Column: Secondary Hard News & Deep Investigations (3 Columns - 25%) */}
            <section className="lg:col-span-3 flex flex-col space-y-4 lg:border-r lg:border-[#e4e2e2] pr-0 lg:pr-4">
              <div className="bg-[#ffffff] p-4 shadow-xs border border-[#e4e2e2]">
                <div className="flex items-center justify-between pb-1 mb-3 bg-[#e9e8e7] px-2 py-1">
                  <span className="font-kicker text-kicker uppercase tracking-widest text-[#000000] font-black text-[10px]">
                    Investigative &amp; National
                  </span>
                  <span className="font-label-sm text-label-sm uppercase text-[#444748] text-[9px] font-bold">
                    Updated
                  </span>
                </div>

                {/* Story 1: AI Antitrust Inquiry */}
                <article
                  onClick={() => onSelectArticle(aiArticle.id)}
                  className="group mb-4 cursor-pointer"
                >
                  <span className="font-kicker text-kicker uppercase text-[#b52602] font-bold block mb-1 text-[10px]">
                    Regulatory Desk
                  </span>
                  <h3 className="font-headline-sm text-lg font-bold text-[#1b1c1c] group-hover:text-[#444748] leading-tight mb-1">
                    {aiArticle.title}
                  </h3>
                  <p className="font-body-md text-xs text-[#444748] leading-normal mb-1">
                    {aiArticle.deck}
                  </p>
                  <div className="flex items-center justify-between text-[#444748] pt-1 text-[11px]">
                    <span className="font-byline uppercase text-[#1b1c1c]">By David McCabe</span>
                    <span className="font-timestamp">{aiArticle.timestamp}</span>
                  </div>
                </article>

                {/* Visual Sparkline Inset */}
                <div className="bg-[#f5f3f3] p-2 mb-4 border border-[#e4e2e2]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-label-sm text-[9px] uppercase tracking-wider text-[#444748] font-bold">
                      AI Venture Deals Tracked
                    </span>
                    <span className="font-label-sm text-[10px] text-[#b52602] font-black">
                      +18.4% YoY
                    </span>
                  </div>
                  <div className="h-10 w-full flex items-end gap-1 pt-1">
                    <div className="w-1/12 bg-[#e4e2e2] h-3" />
                    <div className="w-1/12 bg-[#e4e2e2] h-4" />
                    <div className="w-1/12 bg-[#e4e2e2] h-5" />
                    <div className="w-1/12 bg-[#e4e2e2] h-4" />
                    <div className="w-1/12 bg-[#e4e2e2] h-7" />
                    <div className="w-1/12 bg-[#e4e2e2] h-6" />
                    <div className="w-1/12 bg-[#e4e2e2] h-8" />
                    <div className="w-1/12 bg-[#e4e2e2] h-7" />
                    <div className="w-1/12 bg-[#e4e2e2] h-9" />
                    <div className="w-1/12 bg-[#000000] h-10" />
                    <div className="w-1/12 bg-[#b52602] h-8" />
                    <div className="w-1/12 bg-[#b52602] h-10" />
                  </div>
                </div>

                {/* Story 2: 2024 Electorate */}
                <article
                  onClick={() => onSelectArticle(swingVotersArticle.id)}
                  className="group mb-4 cursor-pointer pt-3 border-t border-[#e4e2e2]"
                >
                  <span className="font-kicker text-kicker uppercase text-[#000000] font-bold block mb-1 text-[10px]">
                    The 2024 Electorate
                  </span>
                  <h3 className="font-headline-sm text-lg font-bold text-[#1b1c1c] group-hover:text-[#444748] leading-tight mb-1">
                    {swingVotersArticle.title}
                  </h3>
                  <p className="font-body-md text-xs text-[#444748] leading-normal mb-1">
                    {swingVotersArticle.deck}
                  </p>
                  <div className="flex items-center justify-between text-[#444748] pt-1 text-[11px]">
                    <span className="font-byline uppercase text-[#1b1c1c]">By Nate Cohn</span>
                    <span className="font-timestamp">{swingVotersArticle.timestamp}</span>
                  </div>
                </article>

                {/* Story 3: Cybersecurity */}
                <article
                  onClick={() => onSelectArticle(techCryptoArticle.id)}
                  className="group cursor-pointer pt-3 border-t border-[#e4e2e2]"
                >
                  <span className="font-kicker text-kicker uppercase text-[#b52602] font-bold block mb-1 text-[10px]">
                    Cybersecurity
                  </span>
                  <h3 className="font-headline-sm text-lg font-bold text-[#1b1c1c] group-hover:text-[#444748] leading-tight mb-1">
                    {techCryptoArticle.title}
                  </h3>
                  <p className="font-body-md text-xs text-[#444748] leading-normal mb-1">
                    {techCryptoArticle.deck}
                  </p>
                  <div className="flex items-center justify-between text-[#444748] pt-1 text-[11px]">
                    <span className="font-byline uppercase text-[#1b1c1c]">By Kevin Roose</span>
                    <span className="font-timestamp">{techCryptoArticle.timestamp}</span>
                  </div>
                </article>
              </div>
            </section>

            {/* Right Column: NYT Opinion & Columnists (3 Columns - 25%) */}
            <aside className="lg:col-span-3 bg-[#f5f3f3] p-4 flex flex-col space-y-4 border border-[#e4e2e2]">
              <div className="bg-[#000000] text-white py-1 px-3 flex items-center justify-between">
                <h3 className="font-headline-sm text-base tracking-wide font-normal italic">
                  Opinion
                </h3>
                <span className="font-kicker text-[9px] uppercase tracking-widest text-[#dbdad9] font-bold">
                  The Board &amp; Voices
                </span>
              </div>

              {/* Columnist 1: Maureen Dowd */}
              <article
                onClick={() => onSelectArticle(dowdArticle.id)}
                className="group cursor-pointer pb-3 border-b border-[#e4e2e2]"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-[#e4e2e2] shrink-0 shadow-xs border border-[#e4e2e2]">
                    <img
                      className="w-full h-full object-cover"
                      alt="Maureen Dowd"
                      src={dowdArticle.authorPhotoUrl}
                    />
                  </div>
                  <div>
                    <p className="font-kicker text-xs uppercase font-extrabold text-[#1b1c1c] tracking-wider">
                      Maureen Dowd
                    </p>
                    <span className="font-caption text-[11px] text-[#444748]">
                      Contributing Columnist
                    </span>
                  </div>
                </div>
                <h4 className="font-headline-sm text-lg text-[#1b1c1c] group-hover:text-[#444748] italic leading-snug font-medium">
                  {dowdArticle.title}
                </h4>
                <p className="font-body-md text-xs text-[#444748] mt-1 line-clamp-2">
                  {dowdArticle.deck}
                </p>
              </article>

              {/* Columnist 2: Ezra Klein */}
              <article
                onClick={() => onSelectArticle(kleinArticle.id)}
                className="group cursor-pointer pb-3 border-b border-[#e4e2e2]"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-[#e4e2e2] shrink-0 shadow-xs border border-[#e4e2e2]">
                    <img
                      className="w-full h-full object-cover"
                      alt="Ezra Klein"
                      src={kleinArticle.authorPhotoUrl}
                    />
                  </div>
                  <div>
                    <p className="font-kicker text-xs uppercase font-extrabold text-[#1b1c1c] tracking-wider">
                      Ezra Klein
                    </p>
                    <span className="font-caption text-[11px] text-[#444748]">Columnist</span>
                  </div>
                </div>
                <h4 className="font-headline-sm text-lg text-[#1b1c1c] group-hover:text-[#444748] italic leading-snug font-medium">
                  {kleinArticle.title}
                </h4>
                <p className="font-body-md text-xs text-[#444748] mt-1 line-clamp-2">
                  {kleinArticle.deck}
                </p>
              </article>

              {/* Columnist 3: Paul Krugman */}
              <article
                onClick={() => onSelectArticle(krugmanArticle.id)}
                className="group cursor-pointer pb-3 border-b border-[#e4e2e2]"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-[#e4e2e2] shrink-0 shadow-xs border border-[#e4e2e2]">
                    <img
                      className="w-full h-full object-cover"
                      alt="Paul Krugman"
                      src={krugmanArticle.authorPhotoUrl}
                    />
                  </div>
                  <div>
                    <p className="font-kicker text-xs uppercase font-extrabold text-[#1b1c1c] tracking-wider">
                      Paul Krugman
                    </p>
                    <span className="font-caption text-[11px] text-[#444748]">
                      Nobel Laureate &amp; Columnist
                    </span>
                  </div>
                </div>
                <h4 className="font-headline-sm text-lg text-[#1b1c1c] group-hover:text-[#444748] italic leading-snug font-medium">
                  {krugmanArticle.title}
                </h4>
                <p className="font-body-md text-xs text-[#444748] mt-1 line-clamp-2">
                  {krugmanArticle.deck}
                </p>
              </article>

              {/* Guest Essays Roundup */}
              <div className="bg-[#ffffff] p-3 space-y-2 border border-[#e4e2e2]">
                <span className="font-kicker text-[10px] uppercase tracking-widest text-[#1b1c1c] font-black block">
                  Guest Essays
                </span>
                <div className="space-y-2 divide-y divide-[#e4e2e2]">
                  {GUEST_ESSAYS.map((essay, idx) => (
                    <div
                      key={idx}
                      onClick={() => onShowToast(`Opening guest essay: "${essay.title}"`)}
                      className="pt-1.5 first:pt-0 cursor-pointer group"
                    >
                      <p className="font-body-md text-xs font-semibold text-[#1b1c1c] group-hover:text-[#b52602] leading-snug">
                        {essay.title}
                      </p>
                      <span className="font-caption text-[10px] text-[#444748] block mt-0.5">
                        By {essay.author} • {essay.readTime}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          {/* Mid-Page Special Feature: The Morning Newsletter Briefing Card */}
          <div className="my-10 bg-[#efeded] p-6 shadow-xs border border-[#e4e2e2]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 bg-[#000000] text-white font-kicker text-[10px] uppercase tracking-widest font-black">
                    Newsletter
                  </span>
                  <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-[#000000]">
                    The Morning
                  </h3>
                  <span className="text-[#c4c7c7]">•</span>
                  <span className="font-timestamp text-xs text-[#444748]">
                    Make sense of the day’s news and ideas
                  </span>
                </div>
                <h4 className="font-headline-sm text-lg text-[#1b1c1c] font-bold pt-1">
                  What 25 Million Early Ballots Reveal About Turnout Patterns
                </h4>
                <p className="font-body-md text-sm text-[#444748] leading-relaxed">
                  Good morning. Today we examine rural polling centers where mail-in shifts are confounding traditional party models, plus a look at why autumn travel bookings broke historic records despite high jet fuel surcharges.
                </p>
                <div className="flex items-center gap-4 pt-1">
                  <p className="font-byline text-xs uppercase text-[#1b1c1c]">
                    By <span className="font-bold">David Leonhardt</span>
                  </p>
                  <button
                    onClick={() => onShowToast("Loaded David Leonhardt's Morning Briefing.")}
                    className="font-kicker text-[11px] uppercase tracking-wider text-[#b52602] font-black hover:underline flex items-center gap-1"
                  >
                    <span>Read Today's Briefing</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </button>
                </div>
              </div>

              {/* Newsletter Form */}
              <div className="md:col-span-4 bg-[#ffffff] p-4 shadow-inner flex flex-col justify-center border border-[#e4e2e2]">
                <p className="font-kicker text-[11px] uppercase tracking-widest text-[#444748] font-black mb-2">
                  Delivered to your inbox daily
                </p>
                {newsletterSubscribed ? (
                  <div className="bg-[#f5f3f3] p-3 text-center border border-[#1b1c1c]">
                    <span className="material-symbols-outlined text-green-700 text-2xl">
                      check_circle
                    </span>
                    <p className="font-kicker text-xs uppercase font-bold text-[#1b1c1c] mt-1">
                      You are subscribed!
                    </p>
                    <p className="font-caption text-[11px] text-[#747878]">
                      Expect tomorrow's briefing at 6:00 a.m. ET.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                    <input
                      className="w-full px-3 py-1.5 text-xs bg-[#f5f3f3] text-[#1b1c1c] border border-[#c4c7c7] focus:outline-none focus:bg-[#ffffff] focus:border-[#1b1c1c]"
                      placeholder="Enter your email address"
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="bg-[#000000] hover:bg-[#474646] text-white font-kicker text-[11px] uppercase tracking-wider px-4 py-1.5 shrink-0 transition-colors font-black"
                    >
                      Sign Up
                    </button>
                  </form>
                )}
                <p className="font-caption text-[10px] text-[#747878] mt-2">
                  You can unsubscribe at any time. View privacy policy.
                </p>
              </div>
            </div>
          </div>

          {/* 4-Column Horizontal Specialized Sections Grid */}
          <div className="mb-10">
            <div className="flex items-center justify-between pb-1 mb-4 border-b border-[#1b1c1c]">
              <h3 className="font-kicker text-xs uppercase tracking-widest text-[#000000] font-black">
                Sections &amp; Coverage
              </h3>
              <span className="font-label-sm text-[10px] uppercase text-[#444748] font-bold">
                Selected Features
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Section 1: Business & Markets */}
              <div className="bg-[#ffffff] p-4 flex flex-col justify-between shadow-xs border border-[#e4e2e2] group">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-kicker text-xs uppercase text-[#b52602] font-black">
                      Business
                    </span>
                    <span className="font-label-sm text-[10px] text-[#444748] uppercase font-bold">
                      Markets
                    </span>
                  </div>

                  {/* Mini Market Dashboard */}
                  <div className="bg-[#f5f3f3] p-2 mb-3 border border-[#e4e2e2]">
                    <div className="grid grid-cols-3 text-center divide-x-0">
                      <div>
                        <span className="block font-label-sm text-[9px] uppercase text-[#747878] font-bold">
                          S&amp;P 500
                        </span>
                        <span className="font-label-sm text-xs font-bold text-[#1b1c1c]">5,842.1</span>
                        <span className="block font-timestamp text-[10px] text-[#b52602] font-bold">
                          +0.42%
                        </span>
                      </div>
                      <div>
                        <span className="block font-label-sm text-[9px] uppercase text-[#747878] font-bold">
                          NASDAQ
                        </span>
                        <span className="font-label-sm text-xs font-bold text-[#1b1c1c]">18,518.6</span>
                        <span className="block font-timestamp text-[10px] text-[#b52602] font-bold">
                          +0.68%
                        </span>
                      </div>
                      <div>
                        <span className="block font-label-sm text-[9px] uppercase text-[#747878] font-bold">
                          10-YR YLD
                        </span>
                        <span className="font-label-sm text-xs font-bold text-[#1b1c1c]">4.21%</span>
                        <span className="block font-timestamp text-[10px] text-[#8b1a00] font-bold">
                          -0.03
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    onClick={() => onSelectArticle(chipArticle.id)}
                    className="aspect-[16/10] bg-[#efeded] mb-2 overflow-hidden cursor-pointer"
                  >
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt={chipArticle.imageAlt}
                      src={chipArticle.imageUrl}
                    />
                  </div>

                  <h4
                    onClick={() => onSelectArticle(chipArticle.id)}
                    className="font-headline-sm text-lg font-bold text-[#1b1c1c] hover:text-[#444748] cursor-pointer leading-snug mb-1"
                  >
                    {chipArticle.title}
                  </h4>
                  <p
                    onClick={() => onSelectArticle(chipArticle.id)}
                    className="font-body-md text-xs text-[#444748] line-clamp-3 mb-2 cursor-pointer"
                  >
                    {chipArticle.deck}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#e4e2e2] flex items-center justify-between text-xs">
                  <span className="font-byline uppercase text-[#1b1c1c] font-bold">By Don Clark</span>
                  <button
                    onClick={() => onToggleBookmark(chipArticle.id)}
                    className="text-[#747878] hover:text-[#b52602]"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      {savedArticleIds.includes(chipArticle.id) ? 'bookmark' : 'bookmark_border'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Section 2: Science & Health */}
              <div className="bg-[#ffffff] p-4 flex flex-col justify-between shadow-xs border border-[#e4e2e2] group">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-kicker text-xs uppercase text-[#b52602] font-black">
                      Science
                    </span>
                    <span className="font-label-sm text-[10px] text-[#444748] uppercase font-bold">
                      Neuroscience
                    </span>
                  </div>

                  <div
                    onClick={() => onSelectArticle(alzheimerArticle.id)}
                    className="aspect-[16/10] bg-[#efeded] mb-2 overflow-hidden cursor-pointer"
                  >
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt={alzheimerArticle.imageAlt}
                      src={alzheimerArticle.imageUrl}
                    />
                  </div>

                  <h4
                    onClick={() => onSelectArticle(alzheimerArticle.id)}
                    className="font-headline-sm text-lg font-bold text-[#1b1c1c] hover:text-[#444748] cursor-pointer leading-snug mb-1"
                  >
                    {alzheimerArticle.title}
                  </h4>
                  <p
                    onClick={() => onSelectArticle(alzheimerArticle.id)}
                    className="font-body-md text-xs text-[#444748] line-clamp-3 mb-2 cursor-pointer"
                  >
                    {alzheimerArticle.deck}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#e4e2e2] flex items-center justify-between text-xs">
                  <span className="font-byline uppercase text-[#1b1c1c] font-bold">By Pam Belluck</span>
                  <button
                    onClick={() => onToggleBookmark(alzheimerArticle.id)}
                    className="text-[#747878] hover:text-[#b52602]"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      {savedArticleIds.includes(alzheimerArticle.id) ? 'bookmark' : 'bookmark_border'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Section 3: Arts & Culture */}
              <div className="bg-[#ffffff] p-4 flex flex-col justify-between shadow-xs border border-[#e4e2e2] group">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-kicker text-xs uppercase text-[#b52602] font-black">
                      Arts &amp; Theater
                    </span>
                    <span className="font-label-sm text-[10px] text-[#444748] uppercase font-bold">
                      Critic's Pick
                    </span>
                  </div>

                  <div
                    onClick={() => onSelectArticle(crucibleArticle.id)}
                    className="aspect-[16/10] bg-[#efeded] mb-2 overflow-hidden cursor-pointer"
                  >
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt={crucibleArticle.imageAlt}
                      src={crucibleArticle.imageUrl}
                    />
                  </div>

                  <h4
                    onClick={() => onSelectArticle(crucibleArticle.id)}
                    className="font-headline-sm text-lg font-bold text-[#1b1c1c] hover:text-[#444748] cursor-pointer leading-snug mb-1"
                  >
                    {crucibleArticle.title}
                  </h4>
                  <p
                    onClick={() => onSelectArticle(crucibleArticle.id)}
                    className="font-body-md text-xs text-[#444748] line-clamp-3 mb-2 cursor-pointer"
                  >
                    {crucibleArticle.deck}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#e4e2e2] flex items-center justify-between text-xs">
                  <span className="font-byline uppercase text-[#1b1c1c] font-bold">By Jesse Green</span>
                  <button
                    onClick={() => onToggleBookmark(crucibleArticle.id)}
                    className="text-[#747878] hover:text-[#b52602]"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      {savedArticleIds.includes(crucibleArticle.id) ? 'bookmark' : 'bookmark_border'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Section 4: Cooking & Games (Interactive Hub) */}
              <div className="bg-[#e9e8e7] p-4 flex flex-col justify-between shadow-xs border border-[#e4e2e2]">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-kicker text-xs uppercase text-[#000000] font-black">
                      Lifestyle &amp; Games
                    </span>
                    <span className="font-label-sm text-[10px] uppercase font-bold text-[#b52602]">
                      Interactive
                    </span>
                  </div>

                  {/* Games Teaser Strip */}
                  <div className="grid grid-cols-3 gap-1.5 mb-3">
                    <button
                      onClick={() => onOpenGames('wordle')}
                      className="bg-[#ffffff] p-1.5 text-center cursor-pointer hover:bg-[#e4e2e2] transition-colors border border-[#c4c7c7]"
                    >
                      <span className="font-label-sm text-[10px] font-black block text-[#1b1c1c]">
                        WORDLE
                      </span>
                      <span className="font-timestamp text-[9px] text-[#444748]">No. 1,224</span>
                    </button>
                    <button
                      onClick={() => onOpenGames('spelling-bee')}
                      className="bg-[#ffffff] p-1.5 text-center cursor-pointer hover:bg-[#e4e2e2] transition-colors border border-[#c4c7c7]"
                    >
                      <span className="font-label-sm text-[10px] font-black block text-[#1b1c1c]">
                        SPELLING BEE
                      </span>
                      <span className="font-timestamp text-[9px] text-[#444748]">7 Letters</span>
                    </button>
                    <button
                      onClick={() => onOpenGames('crossword')}
                      className="bg-[#ffffff] p-1.5 text-center cursor-pointer hover:bg-[#e4e2e2] transition-colors border border-[#c4c7c7]"
                    >
                      <span className="font-label-sm text-[10px] font-black block text-[#1b1c1c]">
                        CROSSWORD
                      </span>
                      <span className="font-timestamp text-[9px] text-[#444748]">Wednesday</span>
                    </button>
                  </div>

                  {/* Cooking Recipe Card */}
                  <div
                    onClick={() => onSelectArticle(chickenArticle.id)}
                    className="bg-[#ffffff] p-2 shadow-xs border border-[#c4c7c7] cursor-pointer group"
                  >
                    <div className="aspect-[16/10] bg-[#efeded] overflow-hidden mb-1.5">
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        alt={chickenArticle.imageAlt}
                        src={chickenArticle.imageUrl}
                      />
                    </div>
                    <span className="font-kicker text-[10px] uppercase text-[#b52602] font-bold">
                      NYT Cooking
                    </span>
                    <h5 className="font-headline-sm text-base font-bold text-[#1b1c1c] group-hover:underline leading-tight mb-1">
                      {chickenArticle.title}
                    </h5>
                    <p className="font-caption text-xs text-[#444748] line-clamp-2">
                      {chickenArticle.deck}
                    </p>
                  </div>
                </div>

                <div className="pt-2 mt-2 flex items-center justify-between border-t border-[#c4c7c7] text-xs">
                  <span className="font-byline uppercase text-[#1b1c1c] font-bold">By Melissa Clark</span>
                  <span className="font-label-sm text-[10px] text-[#b52602] font-black">
                    {chickenArticle.rating || '4.8 ★ (1,490)'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
