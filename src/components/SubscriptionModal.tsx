import React, { useState } from 'react';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const SubscriptionModal: React.FC<SubscriptionModalProps> = ({
  isOpen,
  onClose,
  onShowToast
}) => {
  const [selectedPlan, setSelectedPlan] = useState<'standard' | 'all-access'>('standard');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    onShowToast(`Subscribed to ${selectedPlan === 'standard' ? 'Digital Access ($1/week)' : 'All Access'}! Full access granted.`);
    setTimeout(() => {
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
      <div className="bg-[#ffffff] border border-[#1b1c1c] shadow-2xl max-w-lg w-full flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-4 border-b border-[#1b1c1c] bg-[#fbf9f8] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-headline-display text-xl font-bold">The New York Times</span>
            <span className="text-[#c4c7c7]">|</span>
            <span className="font-kicker text-xs uppercase tracking-widest text-[#b52602] font-black">
              Subscription
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#1b1c1c] hover:bg-[#efeded] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <div className="text-center mb-6">
            <h3 className="font-headline-sm text-2xl font-bold text-[#1b1c1c] mb-1">
              Independent journalism worth paying for.
            </h3>
            <p className="font-deck text-sm text-[#444748] italic">
              Unlimited access to groundbreaking reporting, Opinion, Cooking, Wirecutter, and Games.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <div
              onClick={() => setSelectedPlan('standard')}
              className={`p-4 border-2 cursor-pointer transition-colors ${
                selectedPlan === 'standard'
                  ? 'border-[#1b1c1c] bg-[#f5f3f3]'
                  : 'border-[#e4e2e2] bg-[#ffffff] hover:border-[#747878]'
              }`}
            >
              <span className="font-kicker text-[10px] uppercase font-black text-[#b52602] block mb-1">
                SPECIAL OFFER
              </span>
              <h4 className="font-headline-sm text-lg font-bold text-[#1b1c1c]">Basic Digital</h4>
              <p className="font-headline-sm text-2xl font-bold text-[#1b1c1c] mt-1">$1<span className="text-xs font-normal text-[#747878]"> / week</span></p>
              <p className="font-caption text-xs text-[#747878] mt-2">Billed every 4 weeks. Cancel anytime.</p>
            </div>

            <div
              onClick={() => setSelectedPlan('all-access')}
              className={`p-4 border-2 cursor-pointer transition-colors ${
                selectedPlan === 'all-access'
                  ? 'border-[#1b1c1c] bg-[#f5f3f3]'
                  : 'border-[#e4e2e2] bg-[#ffffff] hover:border-[#747878]'
              }`}
            >
              <span className="font-kicker text-[10px] uppercase font-black text-[#1b1c1c] block mb-1">
                RECOMMENDED
              </span>
              <h4 className="font-headline-sm text-lg font-bold text-[#1b1c1c]">All Access</h4>
              <p className="font-headline-sm text-2xl font-bold text-[#1b1c1c] mt-1">$3<span className="text-xs font-normal text-[#747878]"> / week</span></p>
              <p className="font-caption text-xs text-[#747878] mt-2">Includes News, Cooking, Games &amp; Athletic.</p>
            </div>
          </div>

          <form onSubmit={handleSubscribe} className="space-y-3">
            <div>
              <label className="block font-kicker text-xs uppercase font-bold text-[#1b1c1c] mb-1">
                Your Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="reader@example.com"
                className="w-full px-3 py-2 bg-[#f5f3f3] border border-[#c4c7c7] font-body-md text-sm text-[#1b1c1c] focus:outline-none focus:border-[#1b1c1c]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#000000] hover:bg-[#474646] text-white font-kicker text-xs uppercase tracking-wider font-black transition-colors"
            >
              Continue to Subscription
            </button>
          </form>

          <p className="font-caption text-[11px] text-[#747878] text-center mt-4">
            Already have an account? <span className="underline cursor-pointer hover:text-[#1b1c1c]">Log in here</span>.
          </p>
        </div>
      </div>
    </div>
  );
};
