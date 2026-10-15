import React, { useState } from 'react';
import { LiveUpdate } from '../types/news';

interface LiveUpdatesModalProps {
  isOpen: boolean;
  onClose: () => void;
  updates: LiveUpdate[];
  onSelectArticle?: (id: string) => void;
}

export const LiveUpdatesModal: React.FC<LiveUpdatesModalProps> = ({
  isOpen,
  onClose,
  updates,
  onSelectArticle
}) => {
  const [filter, setFilter] = useState<'all' | 'diplomatic' | 'military' | 'economic'>('all');

  if (!isOpen) return null;

  const filteredUpdates = updates.filter(
    (u) => filter === 'all' || u.category === filter
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/50 backdrop-blur-xs">
      <div className="bg-[#ffffff] w-full max-w-2xl h-full shadow-2xl flex flex-col border-l border-[#1b1c1c] animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-4 border-b border-[#1b1c1c] bg-[#fbf9f8] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#b52602] animate-ping" />
            <span className="font-kicker text-xs uppercase tracking-widest text-[#b52602] font-black">
              LIVE COVERAGE &amp; DEVELOPING BULLETINS
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#1b1c1c] hover:bg-[#efeded] transition-colors"
            aria-label="Close live updates"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>

        {/* Title & Context */}
        <div className="px-6 py-4 bg-[#f5f3f3] border-b border-[#e4e2e2]">
          <h2 className="font-headline-sm text-2xl font-bold text-[#1b1c1c] leading-tight mb-1">
            Global Summit in Geneva &amp; Federal Reserve Decision
          </h2>
          <p className="font-deck text-sm text-[#444748] italic">
            Continuous real-time reporting from correspondents in Geneva, Washington, Brussels, and London.
          </p>

          {/* Filters */}
          <div className="flex gap-2 mt-4">
            {(['all', 'diplomatic', 'military', 'economic'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`font-kicker text-[11px] uppercase tracking-wider px-3 py-1 font-bold border transition-colors ${
                  filter === cat
                    ? 'bg-[#1b1c1c] text-white border-[#1b1c1c]'
                    : 'bg-[#ffffff] text-[#444748] border-[#c4c7c7] hover:border-[#1b1c1c]'
                }`}
              >
                {cat === 'all' ? 'All Updates' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline list */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {filteredUpdates.map((update, idx) => (
            <article
              key={update.id}
              className="relative pl-6 border-l-2 border-[#1b1c1c] pb-6 last:pb-0 group"
            >
              {/* Dot */}
              <div className="absolute -left-[7px] top-0 w-3 h-3 bg-[#b52602] border-2 border-white rounded-full" />

              <div className="flex items-center gap-2 mb-1">
                <span className="font-timestamp text-[11px] font-bold text-[#b52602]">
                  {update.timestamp}
                </span>
                <span className="text-[#c4c7c7]">•</span>
                <span className="font-timestamp text-[11px] text-[#747878]">{update.timeAgo}</span>
                <span className="text-[#c4c7c7]">•</span>
                <span className="font-kicker text-[10px] uppercase tracking-wider text-[#444748] font-bold">
                  {update.location}
                </span>
              </div>

              <h3 className="font-headline-sm text-lg font-bold text-[#1b1c1c] leading-snug mb-2 group-hover:text-[#444748]">
                {update.headline}
              </h3>

              <p className="font-body-md text-sm text-[#1b1c1c] leading-relaxed mb-2">
                {update.content}
              </p>

              <div className="flex items-center justify-between pt-1 text-xs">
                <span className="font-byline uppercase text-[#747878] font-semibold">
                  By {update.author}
                </span>
                {idx === 0 && onSelectArticle && (
                  <button
                    onClick={() => {
                      onClose();
                      onSelectArticle('ceasefire-talks-geneva');
                    }}
                    className="font-kicker text-[10px] uppercase font-bold text-[#b52602] hover:underline flex items-center gap-1"
                  >
                    Read Lead Story
                    <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Footer info */}
        <div className="p-4 border-t border-[#e4e2e2] bg-[#fbf9f8] text-center">
          <p className="font-caption text-[11px] text-[#747878]">
            Times correspondents verify all dispatches in coordination with regional bureau desks.
          </p>
        </div>
      </div>
    </div>
  );
};
