import React from 'react';
import { SectionType } from '../types/news';
import { NYT_LOGO_URL } from '../data/newsData';

interface HeaderProps {
  currentSection: SectionType;
  onSelectSection: (section: SectionType) => void;
  onOpenSectionsModal: () => void;
  onOpenSearchModal: () => void;
  onOpenLiveUpdates: () => void;
  onOpenSavedArticles: () => void;
  savedCount: number;
  currentEdition: string;
  onSelectEdition: (edition: string) => void;
  onOpenSubscriptionModal: () => void;
  currentDateStr: string;
  onSelectDate: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentSection,
  onSelectSection,
  onOpenSectionsModal,
  onOpenSearchModal,
  onOpenLiveUpdates,
  onOpenSavedArticles,
  savedCount,
  currentEdition,
  onSelectEdition,
  onOpenSubscriptionModal,
  currentDateStr,
  onSelectDate
}) => {
  const sectionsList: { name: string; key: SectionType }[] = [
    { name: 'World', key: 'world' },
    { name: 'U.S.', key: 'us' },
    { name: 'Politics', key: 'politics' },
    { name: 'New York', key: 'new-york' },
    { name: 'Business', key: 'business' },
    { name: 'Tech', key: 'tech' },
    { name: 'Science', key: 'science' },
    { name: 'Health', key: 'health' },
    { name: 'Sports', key: 'sports' },
    { name: 'Arts', key: 'arts' },
    { name: 'Books', key: 'books' },
    { name: 'Style', key: 'style' },
    { name: 'Food', key: 'food' },
    { name: 'Travel', key: 'travel' },
    { name: 'Magazine', key: 'magazine' },
    { name: 'T Magazine', key: 't-magazine' },
    { name: 'Real Estate', key: 'real-estate' },
    { name: 'Video', key: 'video' },
    { name: 'Games', key: 'games' },
    { name: 'Cooking', key: 'cooking' },
    { name: 'Wirecutter', key: 'wirecutter' },
    { name: 'The Athletic', key: 'the-athletic' }
  ];

  return (
    <header className="w-full bg-[#fbf9f8] text-[#1b1c1c] border-b border-[#e4e2e2]">
      {/* Top Utility Nav */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-1.5">
        <div className="flex items-center justify-between pb-1.5 border-b border-[#e4e2e2]">
          {/* Left Actions: Sections & Search & Editions */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenSectionsModal}
              className="group flex items-center gap-1.5 text-[#1b1c1c] hover:text-[#444748] transition-colors py-1 cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[19px] group-hover:scale-105 transition-transform">
                menu
              </span>
              <span className="font-kicker text-kicker uppercase tracking-widest font-extrabold text-[11px]">
                Sections
              </span>
            </button>

            <button
              onClick={onOpenSearchModal}
              className="group flex items-center gap-1.5 text-[#1b1c1c] hover:text-[#444748] transition-colors py-1 cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[19px] group-hover:scale-105 transition-transform">
                search
              </span>
              <span className="font-kicker text-kicker uppercase tracking-widest font-extrabold text-[11px]">
                Search
              </span>
            </button>

            {/* Edition Switcher */}
            <div className="hidden xl:flex items-center gap-2 pl-3 border-l border-[#e4e2e2] text-[10px] font-label-sm uppercase font-bold tracking-wider">
              {[
                { code: 'us', label: 'U.S.' },
                { code: 'intl', label: 'International' },
                { code: 'ca', label: 'Canada' },
                { code: 'es', label: 'Español' },
                { code: 'zh', label: '中文' }
              ].map((ed, idx) => (
                <React.Fragment key={ed.code}>
                  {idx > 0 && <span className="text-[#c4c7c7] select-none">|</span>}
                  <button
                    onClick={() => onSelectEdition(ed.code)}
                    className={`hover:text-[#1b1c1c] uppercase transition-colors tracking-widest ${
                      currentEdition === ed.code
                        ? 'text-[#1b1c1c] font-black border-b border-[#1b1c1c]'
                        : 'text-[#747878]'
                    }`}
                  >
                    {ed.label}
                  </button>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right Actions: Subscribe, Log In, Saved Articles */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Saved Articles Bookmark Trigger */}
            <button
              onClick={onOpenSavedArticles}
              className="flex items-center gap-1.5 font-kicker text-[11px] uppercase tracking-wider font-extrabold text-[#1b1c1c] hover:text-[#b52602] transition-colors px-2 py-1"
              title="Saved Articles"
            >
              <span className="material-symbols-outlined text-[17px]">bookmark</span>
              <span className="hidden sm:inline">Saved</span>
              {savedCount > 0 && (
                <span className="px-1.5 py-0.2 bg-[#b52602] text-white text-[9px] font-bold">
                  {savedCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenSubscriptionModal}
              className="bg-[#000000] text-white font-kicker text-kicker uppercase px-3.5 py-1 text-[11px] font-black tracking-widest hover:bg-[#303031] transition-colors shadow-xs"
            >
              Subscribe for $1/Week
            </button>

            <button
              onClick={onOpenSubscriptionModal}
              className="font-kicker text-kicker uppercase px-2 py-1 text-[11px] font-extrabold text-[#1b1c1c] hover:text-[#444748] transition-colors hidden sm:block tracking-wider"
            >
              Log In
            </button>

            <button
              onClick={onOpenSubscriptionModal}
              className="w-7 h-7 bg-[#000000] flex items-center justify-center shrink-0 text-white cursor-pointer hover:bg-[#303031] transition-colors"
              title="User Account"
            >
              <span className="material-symbols-outlined text-[16px]">person</span>
            </button>
          </div>
        </div>

        {/* Masthead Centerpiece */}
        <div className="relative py-4 grid grid-cols-1 md:grid-cols-12 items-center gap-y-2">
          {/* Left: Motto & Date */}
          <div className="md:col-span-3 hidden md:block">
            <div className="p-1 inline-block max-w-[190px]">
              <p className="font-caption text-caption text-[#444748] leading-tight italic">
                "All the News That's Fit to Print"
              </p>
            </div>
            <div className="mt-1">
              <p className="font-timestamp text-timestamp text-[#1b1c1c] font-bold tracking-tight">
                {currentDateStr}
              </p>
              <button
                onClick={onSelectDate}
                className="font-caption text-caption text-[#444748] hover:text-[#1b1c1c] hover:underline block text-left transition-colors"
              >
                Today's Paper &amp; Archive
              </button>
            </div>
          </div>

          {/* Center: Masthead Title & Historical Gothic Emblem */}
          <div
            onClick={() => onSelectSection('all')}
            className="md:col-span-6 flex flex-col items-center justify-center text-center cursor-pointer select-none py-1 group"
          >
            <div className="flex items-center justify-center gap-2 sm:gap-3.5">
              <img
                alt="The New York Times Masthead Logo"
                className="h-7 sm:h-9 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                src={NYT_LOGO_URL}
              />
              <span className="font-headline-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#000000] leading-none">
                The New York Times
              </span>
            </div>
          </div>

          {/* Right: Weather & Stock Indices */}
          <div className="md:col-span-3 hidden md:flex flex-col items-end text-right">
            <div className="flex items-center gap-1.5 text-[#1b1c1c]">
              <span className="material-symbols-outlined text-[17px] text-amber-600">partly_cloudy_day</span>
              <span className="font-caption text-caption font-bold">NYC 68°F</span>
              <span className="text-[#747878] text-[11px]">Clear</span>
            </div>
            <div className="mt-1 flex items-center gap-2 font-label-sm text-label-sm tabular-nums">
              <span className="text-[#444748]">
                S&amp;P 500 <strong className="text-[#b52602] font-black">+0.4%</strong>
              </span>
              <span className="text-[#c4c7c7] select-none">•</span>
              <span className="text-[#444748]">
                Nasdaq <strong className="text-[#b52602] font-black">+0.6%</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Iconic Broadsheet Double Hairline Rule */}
        <div className="w-full border-t border-b border-[#1b1c1c] h-[3px] mb-1" />

        {/* Section Navigation Strip */}
        <nav className="w-full py-1 flex items-center justify-start lg:justify-center gap-x-4 sm:gap-x-5 overflow-x-auto whitespace-nowrap scrollbar-none">
          <button
            onClick={() => onSelectSection('all')}
            className={`font-label-sm text-label-sm uppercase tracking-wider text-[10.5px] transition-colors py-0.5 ${
              currentSection === 'all'
                ? 'text-[#000000] font-black border-b-2 border-[#000000]'
                : 'text-[#444748] hover:text-[#000000]'
            }`}
          >
            Top News
          </button>
          {sectionsList.map((sec) => (
            <button
              key={sec.key}
              onClick={() => onSelectSection(sec.key)}
              className={`font-label-sm text-label-sm uppercase tracking-wider text-[10.5px] transition-colors py-0.5 ${
                currentSection === sec.key
                  ? 'text-[#000000] font-black border-b-2 border-[#000000]'
                  : 'text-[#444748] hover:text-[#000000]'
              }`}
            >
              {sec.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Sticky Breaking News / Live Ticker Bar */}
      <div className="w-full sticky top-0 z-30 bg-[#ffffff]/98 backdrop-blur-xs border-y border-[#e4e2e2] shadow-[0_1px_6px_rgba(0,0,0,0.04)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-9 sm:h-10 flex items-center justify-between gap-4">
          <div
            onClick={onOpenLiveUpdates}
            className="flex items-center gap-2.5 overflow-hidden whitespace-nowrap cursor-pointer group flex-1"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b52602] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#b52602]" />
            </span>
            <span className="font-kicker text-kicker uppercase text-[#b52602] font-black tracking-wider text-[11px] shrink-0">
              Live Updates
            </span>
            <span className="text-[#c4c7c7] hidden sm:inline select-none">|</span>
            <span className="font-body-md text-xs sm:text-sm font-semibold text-[#1b1c1c] group-hover:underline truncate">
              Federal Reserve signals interest rate decision amid shifting labor market numbers
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <span className="font-timestamp text-[11px] text-[#747878]">Updated 3m ago</span>
            <button
              onClick={onOpenLiveUpdates}
              className="font-kicker text-[11px] uppercase text-[#1b1c1c] hover:text-[#b52602] underline decoration-1 underline-offset-2 font-bold tracking-wide"
            >
              Read 18 Updates
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
