import React from 'react';
import { SectionType } from '../types/news';

interface SectionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSection: SectionType;
  onSelectSection: (section: SectionType) => void;
}

export const SectionsModal: React.FC<SectionsModalProps> = ({
  isOpen,
  onClose,
  selectedSection,
  onSelectSection
}) => {
  if (!isOpen) return null;

  const sectionsDirectory = [
    {
      category: 'News',
      items: [
        { label: 'Front Page / Top News', key: 'all' },
        { label: 'World News', key: 'world' },
        { label: 'U.S. News', key: 'us' },
        { label: 'Politics & Elections', key: 'politics' },
        { label: 'New York Metro', key: 'new-york' },
        { label: 'Business & Economy', key: 'business' },
        { label: 'Technology & AI', key: 'tech' },
        { label: 'Science & Cosmos', key: 'science' },
        { label: 'Health & Medicine', key: 'health' },
        { label: 'Sports', key: 'sports' }
      ]
    },
    {
      category: 'Opinion & Editorial',
      items: [
        { label: "Today's Opinion", key: 'opinion' },
        { label: 'Columnists', key: 'opinion' },
        { label: 'Editorials', key: 'opinion' },
        { label: 'Guest Essays', key: 'opinion' },
        { label: 'Letters to the Editor', key: 'opinion' }
      ]
    },
    {
      category: 'Culture & Arts',
      items: [
        { label: 'Arts & Culture', key: 'arts' },
        { label: 'Books & Literary', key: 'books' },
        { label: 'Style & Fashion', key: 'style' },
        { label: 'Food & Dining', key: 'food' },
        { label: 'Travel & Exploration', key: 'travel' },
        { label: 'Magazine', key: 'magazine' },
        { label: 'T Magazine', key: 't-magazine' },
        { label: 'Real Estate', key: 'real-estate' }
      ]
    },
    {
      category: 'Lifestyle & Games',
      items: [
        { label: 'NYT Cooking', key: 'cooking' },
        { label: 'Games (Wordle, Spelling Bee, Mini)', key: 'games' },
        { label: 'Wirecutter Product Reviews', key: 'wirecutter' },
        { label: 'The Athletic', key: 'the-athletic' },
        { label: 'Video & Documentaries', key: 'video' }
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-xs pt-12 p-4">
      <div className="bg-[#ffffff] border border-[#1b1c1c] shadow-2xl max-w-4xl w-full max-h-[85vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-[#1b1c1c] flex items-center justify-between bg-[#fbf9f8]">
          <div className="flex items-center gap-3">
            <span className="font-headline-display text-xl font-bold tracking-tight text-[#1b1c1c]">
              The New York Times
            </span>
            <span className="text-[#c4c7c7]">|</span>
            <span className="font-kicker text-xs uppercase tracking-widest font-black text-[#1b1c1c]">
              Sections &amp; Departments
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#1b1c1c] hover:bg-[#efeded] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Directory Columns */}
        <div className="p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#ffffff]">
          {sectionsDirectory.map((group) => (
            <div key={group.category} className="space-y-3">
              <h3 className="font-kicker text-xs uppercase tracking-wider font-black text-[#1b1c1c] border-b border-[#1b1c1c] pb-1">
                {group.category}
              </h3>
              <ul className="space-y-1.5 font-caption text-xs">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => {
                        onSelectSection(item.key as SectionType);
                        onClose();
                      }}
                      className={`text-left w-full hover:underline transition-colors ${
                        selectedSection === item.key
                          ? 'font-bold text-[#b52602]'
                          : 'text-[#1b1c1c]'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#f5f3f3] border-t border-[#e4e2e2] flex items-center justify-between px-6 text-xs">
          <span className="font-timestamp text-[#747878]">
            Selected Edition: Broadsheet (International &amp; U.S.)
          </span>
          <button
            onClick={() => {
              onSelectSection('all');
              onClose();
            }}
            className="font-kicker text-[11px] uppercase tracking-wider font-bold text-[#b52602] hover:underline"
          >
            Return to Front Page
          </button>
        </div>
      </div>
    </div>
  );
};
