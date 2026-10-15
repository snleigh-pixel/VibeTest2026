import React from 'react';
import { SectionType } from '../types/news';

interface FooterProps {
  onSelectSection: (section: SectionType) => void;
  onOpenGames: (game: 'wordle' | 'spelling-bee' | 'crossword') => void;
  onOpenSubscriptionModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectSection,
  onOpenGames,
  onOpenSubscriptionModal
}) => {
  return (
    <footer className="w-full bg-[#f5f3f3] border-t border-[#1b1c1c] mt-12 pt-8 pb-10 text-[#1b1c1c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Masthead & Actions */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#e4e2e2] gap-4">
          <div className="flex items-center gap-3">
            <span
              onClick={() => onSelectSection('all')}
              className="font-headline-display text-2xl font-bold text-[#000000] cursor-pointer"
            >
              The New York Times
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenSubscriptionModal}
              className="font-kicker text-kicker uppercase px-4 py-1.5 bg-[#000000] text-white hover:bg-[#474646] font-black text-xs transition-colors"
            >
              Subscribe
            </button>
            <button
              onClick={() => onSelectSection('all')}
              className="font-caption text-xs text-[#1b1c1c] hover:underline"
            >
              Today's Paper
            </button>
          </div>
        </div>

        {/* 7-Column Directory */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 py-8 border-b border-[#e4e2e2] text-xs">
          {/* News */}
          <div className="flex flex-col gap-1.5">
            <h4 className="font-kicker text-xs uppercase text-[#000000] font-black pb-1 border-b border-[#1b1c1c]">
              News
            </h4>
            <button onClick={() => onSelectSection('all')} className="text-left font-caption text-[#444748] hover:text-[#1b1c1c]">Home Page</button>
            <button onClick={() => onSelectSection('world')} className="text-left font-caption text-[#444748] hover:text-[#1b1c1c]">World</button>
            <button onClick={() => onSelectSection('us')} className="text-left font-caption text-[#444748] hover:text-[#1b1c1c]">U.S.</button>
            <button onClick={() => onSelectSection('politics')} className="text-left font-caption text-[#444748] hover:text-[#1b1c1c]">Politics</button>
            <button onClick={() => onSelectSection('new-york')} className="text-left font-caption text-[#444748] hover:text-[#1b1c1c]">New York</button>
            <button onClick={() => onSelectSection('business')} className="text-left font-caption text-[#444748] hover:text-[#1b1c1c]">Business</button>
            <button onClick={() => onSelectSection('tech')} className="text-left font-caption text-[#444748] hover:text-[#1b1c1c]">Tech</button>
            <button onClick={() => onSelectSection('science')} className="text-left font-caption text-[#444748] hover:text-[#1b1c1c]">Science</button>
          </div>

          {/* Opinion */}
          <div className="flex flex-col gap-1.5">
            <h4 className="font-kicker text-xs uppercase text-[#000000] font-black pb-1 border-b border-[#1b1c1c]">
              Opinion
            </h4>
            <button onClick={() => onSelectSection('opinion')} className="text-left font-caption text-[#444748] hover:text-[#1b1c1c]">Today's Opinion</button>
            <button onClick={() => onSelectSection('opinion')} className="text-left font-caption text-[#444748] hover:text-[#1b1c1c]">Columnists</button>
            <button onClick={() => onSelectSection('opinion')} className="text-left font-caption text-[#444748] hover:text-[#1b1c1c]">Editorials</button>
            <button onClick={() => onSelectSection('opinion')} className="text-left font-caption text-[#444748] hover:text-[#1b1c1c]">Guest Essays</button>
            <button onClick={() => onSelectSection('opinion')} className="text-left font-caption text-[#444748] hover:text-[#1b1c1c]">Letters</button>
            <button onClick={() => onSelectSection('opinion')} className="text-left font-caption text-[#444748] hover:text-[#1b1c1c]">Sunday Opinion</button>
          </div>

          {/* Arts */}
          <div className="flex flex-col gap-1.5">
            <h4 className="font-kicker text-xs uppercase text-[#000000] font-black pb-1 border-b border-[#1b1c1c]">
              Arts
            </h4>
            <button onClick={() => onSelectSection('arts')} className="text-left font-caption text-[#444748] hover:text-[#1b1c1c]">Today's Arts</button>
            <button onClick={() => onSelectSection('books')} className="text-left font-caption text-[#444748] hover:text-[#1b1c1c]">Books</button>
            <button onClick={() => onSelectSection('arts')} className="text-left font-caption text-[#444748] hover:text-[#1b1c1c]">Movies</button>
            <button onClick={() => onSelectSection('arts')} className="text-left font-caption text-[#444748] hover:text-[#1b1c1c]">Music</button>
            <button onClick={() => onSelectSection('arts')} className="text-left font-caption text-[#444748] hover:text-[#1b1c1c]">Television</button>
            <button onClick={() => onSelectSection('arts')} className="text-left font-caption text-[#444748] hover:text-[#1b1c1c]">Theater</button>
          </div>

          {/* Living */}
          <div className="flex flex-col gap-1.5">
            <h4 className="font-kicker text-xs uppercase text-[#000000] font-black pb-1 border-b border-[#1b1c1c]">
              Living
            </h4>
            <button onClick={() => onSelectSection('style')} className="text-left font-caption text-[#444748] hover:text-[#1b1c1c]">Style</button>
            <button onClick={() => onSelectSection('food')} className="text-left font-caption text-[#444748] hover:text-[#1b1c1c]">Food</button>
            <button onClick={() => onSelectSection('travel')} className="text-left font-caption text-[#444748] hover:text-[#1b1c1c]">Travel</button>
            <button onClick={() => onSelectSection('style')} className="text-left font-caption text-[#444748] hover:text-[#1b1c1c]">Love</button>
            <button onClick={() => onSelectSection('real-estate')} className="text-left font-caption text-[#444748] hover:text-[#1b1c1c]">Real Estate</button>
          </div>

          {/* More */}
          <div className="flex flex-col gap-1.5">
            <h4 className="font-kicker text-xs uppercase text-[#000000] font-black pb-1 border-b border-[#1b1c1c]">
              More
            </h4>
            <button onClick={() => onSelectSection('cooking')} className="text-left font-caption text-[#444748] hover:text-[#1b1c1c]">Cooking</button>
            <button onClick={() => onSelectSection('wirecutter')} className="text-left font-caption text-[#444748] hover:text-[#1b1c1c]">Wirecutter</button>
            <button onClick={() => onOpenGames('wordle')} className="text-left font-caption text-[#444748] hover:text-[#1b1c1c]">Games</button>
            <button onClick={() => onSelectSection('the-athletic')} className="text-left font-caption text-[#444748] hover:text-[#1b1c1c]">The Athletic</button>
            <button onClick={() => onSelectSection('video')} className="text-left font-caption text-[#444748] hover:text-[#1b1c1c]">Video</button>
          </div>

          {/* Subscribe */}
          <div className="flex flex-col gap-1.5">
            <h4 className="font-kicker text-xs uppercase text-[#000000] font-black pb-1 border-b border-[#1b1c1c]">
              Subscribe
            </h4>
            <button onClick={onOpenSubscriptionModal} className="text-left font-caption text-[#444748] hover:text-[#1b1c1c]">Home Delivery</button>
            <button onClick={onOpenSubscriptionModal} className="text-left font-caption text-[#444748] hover:text-[#1b1c1c]">Digital Subscriptions</button>
            <button onClick={onOpenSubscriptionModal} className="text-left font-caption text-[#444748] hover:text-[#1b1c1c]">Games</button>
            <button onClick={onOpenSubscriptionModal} className="text-left font-caption text-[#444748] hover:text-[#1b1c1c]">Cooking</button>
            <button onClick={onOpenSubscriptionModal} className="text-left font-caption text-[#444748] hover:text-[#1b1c1c]">Gift Subscriptions</button>
          </div>

          {/* Account */}
          <div className="flex flex-col gap-1.5">
            <h4 className="font-kicker text-xs uppercase text-[#000000] font-black pb-1 border-b border-[#1b1c1c]">
              Account
            </h4>
            <button onClick={onOpenSubscriptionModal} className="text-left font-caption text-[#444748] hover:text-[#1b1c1c]">Log In</button>
            <button onClick={onOpenSubscriptionModal} className="text-left font-caption text-[#444748] hover:text-[#1b1c1c]">Manage Account</button>
            <button onClick={onOpenSubscriptionModal} className="text-left font-caption text-[#444748] hover:text-[#1b1c1c]">Newsletters</button>
            <button onClick={onOpenSubscriptionModal} className="text-left font-caption text-[#444748] hover:text-[#1b1c1c]">Help</button>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p className="font-timestamp text-[11px] text-[#747878]">
            © 2024 The New York Times Company
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-center font-timestamp text-[11px] text-[#747878]">
            <a href="#nytco" className="hover:underline">NYTCo</a>
            <a href="#contact" className="hover:underline">Contact Us</a>
            <a href="#accessibility" className="hover:underline">Accessibility</a>
            <a href="#work" className="hover:underline">Work with us</a>
            <a href="#advertise" className="hover:underline">Advertise</a>
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
            <a href="#terms" className="hover:underline">Terms of Service</a>
            <a href="#sitemap" className="hover:underline">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
