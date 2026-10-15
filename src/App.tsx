import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { FrontPage } from './components/FrontPage';
import { ArticleView } from './components/ArticleView';
import { Footer } from './components/Footer';
import { GamesModal } from './components/GamesModal';
import { LiveUpdatesModal } from './components/LiveUpdatesModal';
import { SearchModal } from './components/SearchModal';
import { SectionsModal } from './components/SectionsModal';
import { SavedArticlesModal } from './components/SavedArticlesModal';
import { SubscriptionModal } from './components/SubscriptionModal';
import { ArchiveModal } from './components/ArchiveModal';
import { ARTICLES, LIVE_UPDATES } from './data/newsData';
import { SectionType } from './types/news';

export default function App() {
  const [currentView, setCurrentView] = useState<'frontpage' | 'article'>('frontpage');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [currentSection, setCurrentSection] = useState<SectionType>('all');
  const [currentEdition, setCurrentEdition] = useState<string>('us');
  const [currentDateStr, setCurrentDateStr] = useState<string>('Wednesday, October 24, 2024');

  // Modals
  const [isLiveUpdatesOpen, setIsLiveUpdatesOpen] = useState(false);
  const [isGamesOpen, setIsGamesOpen] = useState(false);
  const [activeGame, setActiveGame] = useState<'wordle' | 'spelling-bee' | 'crossword'>('wordle');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSectionsOpen, setIsSectionsOpen] = useState(false);
  const [isSavedArticlesOpen, setIsSavedArticlesOpen] = useState(false);
  const [isSubscriptionOpen, setIsSubscriptionOpen] = useState(false);
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);

  // Bookmarking / Saved Articles
  const [savedArticleIds, setSavedArticleIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('nyt_saved_articles');
      return stored ? JSON.parse(stored) : ['ceasefire-talks-geneva', 'sheet-pan-chicken-lemon-feta'];
    } catch {
      return ['ceasefire-talks-geneva', 'sheet-pan-chicken-lemon-feta'];
    }
  });

  // Toast notifications
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((curr) => (curr === message ? null : curr));
    }, 3200);
  };

  const handleToggleBookmark = (id: string) => {
    setSavedArticleIds((prev) => {
      const exists = prev.includes(id);
      const next = exists ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem('nyt_saved_articles', JSON.stringify(next));
      } catch {
        // ignore storage restrictions
      }
      showToast(exists ? 'Removed from saved articles.' : 'Saved to your reading list.');
      return next;
    });
  };

  const handleOpenArticle = (id: string) => {
    setSelectedArticleId(id);
    setCurrentView('article');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToFrontPage = () => {
    setCurrentView('frontpage');
    setSelectedArticleId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSection = (sec: SectionType) => {
    setCurrentSection(sec);
    if (currentView === 'article') {
      setCurrentView('frontpage');
      setSelectedArticleId(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenGames = (game: 'wordle' | 'spelling-bee' | 'crossword') => {
    setActiveGame(game);
    setIsGamesOpen(true);
  };

  const selectedArticle = ARTICLES.find((a) => a.id === selectedArticleId);
  const relatedArticles = ARTICLES.filter((a) => a.id !== selectedArticleId);

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f8] text-[#1b1c1c] selection:bg-[#1b1c1c] selection:text-white">
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1b1c1c] text-white px-4 py-3 shadow-2xl border-l-4 border-[#b52602] flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <span className="material-symbols-outlined text-[19px] text-[#b52602]">info</span>
          <span className="font-kicker text-xs uppercase tracking-wider font-extrabold">
            {toastMessage}
          </span>
          <button
            onClick={() => setToastMessage(null)}
            className="text-[#747878] hover:text-white ml-2"
          >
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>
      )}

      {/* Primary Broadsheet Header */}
      <Header
        currentSection={currentSection}
        onSelectSection={handleSelectSection}
        onOpenSectionsModal={() => setIsSectionsOpen(true)}
        onOpenSearchModal={() => setIsSearchOpen(true)}
        onOpenLiveUpdates={() => setIsLiveUpdatesOpen(true)}
        onOpenSavedArticles={() => setIsSavedArticlesOpen(true)}
        savedCount={savedArticleIds.length}
        currentEdition={currentEdition}
        onSelectEdition={(ed) => {
          setCurrentEdition(ed);
          showToast(`Switched edition to ${ed.toUpperCase()}`);
        }}
        onOpenSubscriptionModal={() => setIsSubscriptionOpen(true)}
        currentDateStr={currentDateStr}
        onSelectDate={() => setIsArchiveOpen(true)}
      />

      {/* Screen View Switching */}
      {currentView === 'frontpage' ? (
        <FrontPage
          articles={ARTICLES}
          onSelectArticle={handleOpenArticle}
          onOpenLiveUpdates={() => setIsLiveUpdatesOpen(true)}
          onOpenGames={handleOpenGames}
          savedArticleIds={savedArticleIds}
          onToggleBookmark={handleToggleBookmark}
          onShowToast={showToast}
          currentSection={currentSection}
        />
      ) : selectedArticle ? (
        <ArticleView
          article={selectedArticle}
          onBack={handleBackToFrontPage}
          onSelectArticle={handleOpenArticle}
          relatedArticles={relatedArticles}
          isBookmarked={savedArticleIds.includes(selectedArticle.id)}
          onToggleBookmark={handleToggleBookmark}
          onShowToast={showToast}
        />
      ) : (
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="font-headline-sm text-2xl font-bold mb-4">Article Not Found</h2>
          <button
            onClick={handleBackToFrontPage}
            className="px-4 py-2 bg-[#1b1c1c] text-white font-kicker text-xs uppercase font-bold"
          >
            Return to Front Page
          </button>
        </div>
      )}

      {/* Footer */}
      <Footer
        onSelectSection={handleSelectSection}
        onOpenGames={handleOpenGames}
        onOpenSubscriptionModal={() => setIsSubscriptionOpen(true)}
      />

      {/* Modals & Overlays */}
      <GamesModal
        isOpen={isGamesOpen}
        onClose={() => setIsGamesOpen(false)}
        initialGame={activeGame}
      />

      <LiveUpdatesModal
        isOpen={isLiveUpdatesOpen}
        onClose={() => setIsLiveUpdatesOpen(false)}
        updates={LIVE_UPDATES}
        onSelectArticle={handleOpenArticle}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        articles={ARTICLES}
        onSelectArticle={handleOpenArticle}
      />

      <SectionsModal
        isOpen={isSectionsOpen}
        onClose={() => setIsSectionsOpen(false)}
        selectedSection={currentSection}
        onSelectSection={handleSelectSection}
      />

      <SavedArticlesModal
        isOpen={isSavedArticlesOpen}
        onClose={() => setIsSavedArticlesOpen(false)}
        savedArticleIds={savedArticleIds}
        articles={ARTICLES}
        onSelectArticle={handleOpenArticle}
        onRemoveBookmark={handleToggleBookmark}
      />

      <SubscriptionModal
        isOpen={isSubscriptionOpen}
        onClose={() => setIsSubscriptionOpen(false)}
        onShowToast={showToast}
      />

      <ArchiveModal
        isOpen={isArchiveOpen}
        onClose={() => setIsArchiveOpen(false)}
        currentDateStr={currentDateStr}
        onSelectDateStr={(date) => {
          setCurrentDateStr(date);
          showToast(`Switched paper edition to ${date}`);
        }}
      />
    </div>
  );
}
