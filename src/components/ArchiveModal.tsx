import React from 'react';

interface ArchiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentDateStr: string;
  onSelectDateStr: (date: string) => void;
}

export const ArchiveModal: React.FC<ArchiveModalProps> = ({
  isOpen,
  onClose,
  currentDateStr,
  onSelectDateStr
}) => {
  if (!isOpen) return null;

  const editions = [
    { date: 'Wednesday, October 24, 2024', label: "Today's Paper (Morning Edition)", lead: 'Diplomats Signal Tentative Progress in Ceasefire Negotiations' },
    { date: 'Tuesday, October 23, 2024', label: 'Yesterday’s Edition', lead: 'Global Envoys Arrive in Geneva Under Tight Security' },
    { date: 'Monday, October 22, 2024', label: 'Archival Broadsheet', lead: 'Tech Consortia Convene to Establish AI Media Provenance Standards' },
    { date: 'Sunday, October 21, 2024', label: 'Sunday Broadsheet & Magazine', lead: 'The 2024 Electorate: The Deep Economic Divide in Suburbia' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-xs pt-16 p-4">
      <div className="bg-[#ffffff] border border-[#1b1c1c] shadow-2xl max-w-xl w-full flex flex-col overflow-hidden">
        <div className="p-4 border-b border-[#1b1c1c] bg-[#fbf9f8] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-[#b52602]">newspaper</span>
            <h3 className="font-kicker text-xs uppercase tracking-widest font-black text-[#1b1c1c]">
              Today's Paper &amp; Broadsheet Archive
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#1b1c1c] hover:bg-[#efeded] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="p-5 overflow-y-auto space-y-3">
          <p className="font-deck text-xs text-[#444748] italic mb-3">
            Browse digitized front pages and archival editions as originally typeset and distributed.
          </p>

          <div className="space-y-2">
            {editions.map((ed) => (
              <div
                key={ed.date}
                onClick={() => {
                  onSelectDateStr(ed.date);
                  onClose();
                }}
                className={`p-3 border cursor-pointer transition-colors ${
                  currentDateStr === ed.date
                    ? 'border-[#1b1c1c] bg-[#f5f3f3]'
                    : 'border-[#e4e2e2] hover:border-[#1b1c1c] hover:bg-[#fbf9f8]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-timestamp text-xs font-bold text-[#1b1c1c]">{ed.date}</span>
                  {currentDateStr === ed.date && (
                    <span className="font-kicker text-[10px] uppercase font-black text-[#b52602]">
                      Active Edition
                    </span>
                  )}
                </div>
                <h4 className="font-headline-sm text-sm font-bold text-[#1b1c1c] leading-snug">
                  {ed.lead}
                </h4>
                <span className="font-caption text-[11px] text-[#747878] mt-1 block">
                  {ed.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3 bg-[#f5f3f3] border-t border-[#e4e2e2] text-center">
          <span className="font-timestamp text-[11px] text-[#747878]">
            TimesMachine archives back to 1851 are accessible with an All Access subscription.
          </span>
        </div>
      </div>
    </div>
  );
};
