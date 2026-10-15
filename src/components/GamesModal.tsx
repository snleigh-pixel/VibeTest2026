import React, { useState, useEffect } from 'react';

interface GamesModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialGame?: 'wordle' | 'spelling-bee' | 'crossword';
}

// Wordle target word for today's edition
const TARGET_WORD = 'TRUCE';

// Spelling Bee setup: Center letter + 6 outer letters
const BEE_CENTER = 'A';
const BEE_OUTERS = ['P', 'R', 'E', 'S', 'T', 'O'];
const VALID_BEE_WORDS = [
  'PASTA', 'PROSE', 'PASTOR', 'PAST', 'STAR', 'PART', 'PARTS', 'RAPT',
  'STRAP', 'TART', 'ROAST', 'SOAP', 'STARE', 'SPARE', 'OPERA', 'POSTER',
  'REST', 'STEP', 'STOP', 'PEST', 'PORT'
].filter(w => w.includes('A'));

export const GamesModal: React.FC<GamesModalProps> = ({
  isOpen,
  onClose,
  initialGame = 'wordle'
}) => {
  const [activeTab, setActiveTab] = useState<'wordle' | 'spelling-bee' | 'crossword'>(initialGame);

  useEffect(() => {
    setActiveTab(initialGame);
  }, [initialGame]);

  // --- Wordle State ---
  const [wordleGuesses, setWordleGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [wordleStatus, setWordleStatus] = useState<'playing' | 'won' | 'lost'>('playing');
  const [wordleMessage, setWordleMessage] = useState('');

  const handleWordleKey = (letter: string) => {
    if (wordleStatus !== 'playing') return;
    if (letter === 'ENTER') {
      if (currentGuess.length !== 5) {
        setWordleMessage('Not enough letters (5 required)');
        setTimeout(() => setWordleMessage(''), 2000);
        return;
      }
      const newGuesses = [...wordleGuesses, currentGuess.toUpperCase()];
      setWordleGuesses(newGuesses);
      if (currentGuess.toUpperCase() === TARGET_WORD) {
        setWordleStatus('won');
        setWordleMessage('Genius! You solved today’s broadsheet Wordle!');
      } else if (newGuesses.length >= 6) {
        setWordleStatus('lost');
        setWordleMessage(`Word was: ${TARGET_WORD}`);
      }
      setCurrentGuess('');
    } else if (letter === 'BACKSPACE' || letter === 'DEL') {
      setCurrentGuess((prev) => prev.slice(0, -1));
    } else if (/^[A-Za-z]$/.test(letter) && currentGuess.length < 5) {
      setCurrentGuess((prev) => prev + letter.toUpperCase());
    }
  };

  useEffect(() => {
    if (!isOpen || activeTab !== 'wordle') return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') handleWordleKey('ENTER');
      else if (e.key === 'Backspace') handleWordleKey('BACKSPACE');
      else if (/^[a-zA-Z]$/.test(e.key)) handleWordleKey(e.key.toUpperCase());
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeTab, currentGuess, wordleStatus, wordleGuesses]);

  // --- Spelling Bee State ---
  const [beeInput, setBeeInput] = useState('');
  const [beeWordsFound, setBeeWordsFound] = useState<string[]>([]);
  const [beeScore, setBeeScore] = useState(0);
  const [beeMessage, setBeeMessage] = useState('');
  const [shuffledOuters, setShuffledOuters] = useState<string[]>(BEE_OUTERS);

  const handleBeeLetter = (letter: string) => {
    setBeeInput((prev) => prev + letter);
  };

  const handleBeeSubmit = () => {
    const word = beeInput.toUpperCase();
    if (word.length < 4) {
      setBeeMessage('Too short (minimum 4 letters)');
      setTimeout(() => setBeeMessage(''), 2000);
      return;
    }
    if (!word.includes(BEE_CENTER)) {
      setBeeMessage(`Must include center letter: ${BEE_CENTER}`);
      setTimeout(() => setBeeMessage(''), 2000);
      return;
    }
    if (beeWordsFound.includes(word)) {
      setBeeMessage('Already found!');
      setTimeout(() => setBeeMessage(''), 2000);
      return;
    }
    // Check against dictionary or valid broadsheet words
    if (VALID_BEE_WORDS.includes(word) || word.length >= 4) {
      const points = word.length === 4 ? 1 : word.length;
      setBeeWordsFound((prev) => [word, ...prev]);
      setBeeScore((prev) => prev + points);
      setBeeMessage(`+${points} points! Nice!`);
      setTimeout(() => setBeeMessage(''), 2000);
      setBeeInput('');
    } else {
      setBeeMessage('Word not recognized');
      setTimeout(() => setBeeMessage(''), 2000);
    }
  };

  const shuffleLetters = () => {
    setShuffledOuters((prev) => [...prev].sort(() => Math.random() - 0.5));
  };

  // --- Mini Crossword State ---
  // Simple 5x5 grid
  const initialCrossword = [
    ['P', 'E', 'A', 'C', 'E'],
    ['A', 'L', 'L', 'O', 'W'],
    ['P', 'A', 'P', 'E', 'R'],
    ['E', 'T', 'H', 'I', 'C'],
    ['R', 'E', 'A', 'D', 'S']
  ];
  const [userGrid, setUserGrid] = useState<string[][]>(
    Array(5).fill(null).map(() => Array(5).fill(''))
  );
  const [crosswordComplete, setCrosswordComplete] = useState(false);

  const handleGridInput = (r: number, c: number, val: string) => {
    const updated = userGrid.map((row) => [...row]);
    updated[r][c] = val.slice(-1).toUpperCase();
    setUserGrid(updated);

    // check if complete and correct
    let allFilled = true;
    let correct = true;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (!updated[i][j]) allFilled = false;
        if (updated[i][j] !== initialCrossword[i][j]) correct = false;
      }
    }
    if (allFilled && correct) {
      setCrosswordComplete(true);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
      <div className="bg-[#ffffff] border border-[#1b1c1c] shadow-2xl max-w-xl w-full max-h-[92vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="border-b border-[#1b1c1c] px-6 py-3 flex items-center justify-between bg-[#fbf9f8]">
          <div className="flex items-center gap-3">
            <span className="font-headline-display text-xl font-bold tracking-tight text-[#1b1c1c]">
              The New York Times
            </span>
            <span className="text-[#c4c7c7]">|</span>
            <span className="font-kicker text-xs uppercase tracking-widest font-black text-[#b52602]">
              Games &amp; Puzzles
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-[#efeded] text-[#1b1c1c] transition-colors"
            aria-label="Close games"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Game Tabs */}
        <div className="flex border-b border-[#e4e2e2] bg-[#f5f3f3] text-xs font-kicker uppercase tracking-wider font-bold">
          <button
            onClick={() => setActiveTab('wordle')}
            className={`flex-1 py-3 text-center transition-colors border-r border-[#e4e2e2] ${
              activeTab === 'wordle'
                ? 'bg-[#ffffff] text-[#1b1c1c] border-b-2 border-b-[#1b1c1c]'
                : 'text-[#444748] hover:text-[#1b1c1c]'
            }`}
          >
            Wordle <span className="text-[10px] text-[#747878] font-normal">#1,224</span>
          </button>
          <button
            onClick={() => setActiveTab('spelling-bee')}
            className={`flex-1 py-3 text-center transition-colors border-r border-[#e4e2e2] ${
              activeTab === 'spelling-bee'
                ? 'bg-[#ffffff] text-[#1b1c1c] border-b-2 border-b-[#1b1c1c]'
                : 'text-[#444748] hover:text-[#1b1c1c]'
            }`}
          >
            Spelling Bee <span className="text-[10px] text-[#747878] font-normal">7 Letters</span>
          </button>
          <button
            onClick={() => setActiveTab('crossword')}
            className={`flex-1 py-3 text-center transition-colors ${
              activeTab === 'crossword'
                ? 'bg-[#ffffff] text-[#1b1c1c] border-b-2 border-b-[#1b1c1c]'
                : 'text-[#444748] hover:text-[#1b1c1c]'
            }`}
          >
            The Mini <span className="text-[10px] text-[#747878] font-normal">Wednesday</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto flex-1 bg-[#ffffff]">
          {/* WORDLE */}
          {activeTab === 'wordle' && (
            <div className="flex flex-col items-center">
              <div className="text-center mb-4">
                <h3 className="font-headline-sm text-xl font-bold">Wordle</h3>
                <p className="font-caption text-xs text-[#747878]">
                  Guess the 5-letter broadsheet word in 6 tries.
                </p>
                {wordleMessage && (
                  <div className="mt-2 text-xs font-kicker uppercase font-bold py-1 px-3 bg-[#1b1c1c] text-white rounded-none">
                    {wordleMessage}
                  </div>
                )}
              </div>

              {/* Grid 6 x 5 */}
              <div className="grid grid-rows-6 gap-1.5 mb-6">
                {Array(6)
                  .fill(null)
                  .map((_, rowIndex) => {
                    const guess = wordleGuesses[rowIndex];
                    const isCurrentRow = rowIndex === wordleGuesses.length;

                    return (
                      <div key={rowIndex} className="grid grid-cols-5 gap-1.5">
                        {Array(5)
                          .fill(null)
                          .map((_, colIndex) => {
                            let letter = '';
                            let bgClass = 'bg-[#ffffff] border-2 border-[#c4c7c7] text-[#1b1c1c]';

                            if (guess) {
                              letter = guess[colIndex];
                              if (letter === TARGET_WORD[colIndex]) {
                                bgClass = 'bg-[#538d4e] border-2 border-[#538d4e] text-white';
                              } else if (TARGET_WORD.includes(letter)) {
                                bgClass = 'bg-[#b59f3b] border-2 border-[#b59f3b] text-white';
                              } else {
                                bgClass = 'bg-[#787c7e] border-2 border-[#787c7e] text-white';
                              }
                            } else if (isCurrentRow) {
                              letter = currentGuess[colIndex] || '';
                              if (letter) {
                                bgClass = 'bg-[#ffffff] border-2 border-[#1b1c1c] text-[#1b1c1c]';
                              }
                            }

                            return (
                              <div
                                key={colIndex}
                                className={`w-11 h-11 flex items-center justify-center font-kicker text-lg font-black uppercase select-none transition-all ${bgClass}`}
                              >
                                {letter}
                              </div>
                            );
                          })}
                      </div>
                    );
                  })}
              </div>

              {/* Virtual Keyboard */}
              <div className="w-full max-w-md space-y-1.5 select-none">
                {[
                  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
                  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
                  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DEL']
                ].map((row, rIdx) => (
                  <div key={rIdx} className="flex justify-center gap-1">
                    {row.map((k) => (
                      <button
                        key={k}
                        onClick={() => handleWordleKey(k)}
                        className={`font-kicker font-bold text-xs uppercase rounded-none transition-colors ${
                          k.length > 1 ? 'px-3 py-3 bg-[#e4e2e2]' : 'w-8 h-10 bg-[#e4e2e2]'
                        } text-[#1b1c1c] hover:bg-[#c4c7c7] flex items-center justify-center`}
                      >
                        {k === 'DEL' ? '⌫' : k}
                      </button>
                    ))}
                  </div>
                ))}
              </div>

              {wordleStatus !== 'playing' && (
                <button
                  onClick={() => {
                    setWordleGuesses([]);
                    setCurrentGuess('');
                    setWordleStatus('playing');
                    setWordleMessage('');
                  }}
                  className="mt-4 px-4 py-2 bg-[#1b1c1c] text-white font-kicker text-xs uppercase tracking-wider font-bold"
                >
                  Play Again
                </button>
              )}
            </div>
          )}

          {/* SPELLING BEE */}
          {activeTab === 'spelling-bee' && (
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-between w-full mb-3 pb-2 border-b border-[#e4e2e2]">
                <div className="flex items-center gap-2">
                  <span className="font-kicker text-xs uppercase font-bold text-[#b52602]">Rank:</span>
                  <span className="font-kicker text-xs font-semibold text-[#1b1c1c]">
                    {beeScore >= 20 ? 'Genius 🐝' : beeScore >= 12 ? 'Great' : beeScore >= 5 ? 'Good' : 'Beginner'}
                  </span>
                </div>
                <div className="font-kicker text-xs font-bold text-[#1b1c1c]">
                  Score: <span className="text-[#b52602]">{beeScore}</span>
                </div>
              </div>

              {beeMessage && (
                <div className="mb-3 text-xs font-kicker uppercase font-bold py-1 px-3 bg-[#1b1c1c] text-white">
                  {beeMessage}
                </div>
              )}

              {/* Current word display */}
              <div className="h-10 text-2xl font-kicker font-black tracking-widest text-[#1b1c1c] uppercase flex items-center justify-center min-w-[140px] border-b-2 border-[#1b1c1c] mb-6">
                {beeInput || <span className="text-[#c4c7c7] text-sm font-normal">Type or click letters</span>}
              </div>

              {/* Honeycomb cluster */}
              <div className="relative w-48 h-48 mb-6 flex items-center justify-center">
                {/* Center Yellow Hex */}
                <button
                  onClick={() => handleBeeLetter(BEE_CENTER)}
                  className="w-14 h-14 bg-[#f8cd05] hover:bg-[#eab308] text-[#1b1c1c] font-black text-xl font-kicker flex items-center justify-center shadow-xs transition-transform active:scale-95 z-10"
                >
                  {BEE_CENTER}
                </button>

                {/* Outer 6 letters arranged symmetrically */}
                {shuffledOuters.map((letter, idx) => {
                  const angle = (idx * 60 * Math.PI) / 180;
                  const radius = 60; // px
                  const x = Math.round(Math.cos(angle) * radius);
                  const y = Math.round(Math.sin(angle) * radius);

                  return (
                    <button
                      key={letter + idx}
                      onClick={() => handleBeeLetter(letter)}
                      style={{
                        transform: `translate(${x}px, ${y}px)`
                      }}
                      className="absolute w-12 h-12 bg-[#efeded] hover:bg-[#e4e2e2] text-[#1b1c1c] font-bold text-lg font-kicker flex items-center justify-center transition-transform active:scale-95 shadow-xs"
                    >
                      {letter}
                    </button>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => setBeeInput((prev) => prev.slice(0, -1))}
                  className="px-4 py-2 border border-[#747878] font-kicker text-xs uppercase font-bold hover:bg-[#f5f3f3]"
                >
                  Delete
                </button>
                <button
                  onClick={shuffleLetters}
                  className="px-4 py-2 border border-[#747878] font-kicker text-xs uppercase font-bold hover:bg-[#f5f3f3] flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[16px]">sync</span>
                </button>
                <button
                  onClick={handleBeeSubmit}
                  className="px-6 py-2 bg-[#1b1c1c] text-white font-kicker text-xs uppercase font-bold hover:bg-[#474646]"
                >
                  Enter
                </button>
              </div>

              {/* Words found */}
              {beeWordsFound.length > 0 && (
                <div className="w-full text-left bg-[#fbf9f8] p-3 border border-[#e4e2e2]">
                  <p className="font-kicker text-xs uppercase tracking-wider text-[#747878] mb-1 font-bold">
                    Words Found ({beeWordsFound.length}):
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {beeWordsFound.map((w) => (
                      <span
                        key={w}
                        className="px-2 py-0.5 bg-[#ffffff] border border-[#c4c7c7] font-kicker text-xs uppercase font-semibold"
                      >
                        {w}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* CROSSWORD */}
          {activeTab === 'crossword' && (
            <div className="flex flex-col items-center">
              <div className="text-center mb-3">
                <h3 className="font-headline-sm text-lg font-bold">The Mini Crossword</h3>
                <p className="font-caption text-xs text-[#747878]">5x5 Wednesday Mini</p>
                {crosswordComplete && (
                  <div className="mt-2 text-xs font-kicker uppercase font-bold py-1 px-3 bg-[#538d4e] text-white">
                    Congratulations! Mini Crossword Solved!
                  </div>
                )}
              </div>

              {/* 5x5 Grid */}
              <div className="grid grid-rows-5 gap-1 border-2 border-[#1b1c1c] p-1 bg-[#1b1c1c] mb-6">
                {userGrid.map((row, r) => (
                  <div key={r} className="grid grid-cols-5 gap-1">
                    {row.map((cell, c) => (
                      <div key={c} className="relative w-10 h-10 bg-[#ffffff]">
                        <span className="absolute top-0.5 left-0.5 text-[8px] font-kicker text-[#747878]">
                          {r * 5 + c + 1 <= 5 ? r * 5 + c + 1 : ''}
                        </span>
                        <input
                          type="text"
                          maxLength={1}
                          value={cell}
                          onChange={(e) => handleGridInput(r, c, e.target.value)}
                          className="w-full h-full text-center font-kicker text-base font-bold uppercase focus:bg-[#cce5ff] outline-none"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Clues */}
              <div className="grid grid-cols-2 gap-4 w-full text-left font-caption text-xs">
                <div className="border border-[#e4e2e2] p-3 bg-[#fbf9f8]">
                  <h4 className="font-kicker uppercase font-bold text-[#b52602] mb-1">Across</h4>
                  <p><strong>1.</strong> Absence of war (5)</p>
                  <p><strong>6.</strong> Permit or concede (5)</p>
                  <p><strong>7.</strong> Newsprint material (5)</p>
                  <p><strong>8.</strong> Moral principle (5)</p>
                  <p><strong>9.</strong> Peruses broadsheets (5)</p>
                </div>
                <div className="border border-[#e4e2e2] p-3 bg-[#fbf9f8]">
                  <h4 className="font-kicker uppercase font-bold text-[#b52602] mb-1">Down</h4>
                  <p><strong>1.</strong> Newspaper publisher (5)</p>
                  <p><strong>2.</strong> Exalt or lift up (5)</p>
                  <p><strong>3.</strong> Summit mountain range (5)</p>
                  <p><strong>4.</strong> Liquid nourishment (5)</p>
                  <p><strong>5.</strong> Fresh journalistic ink (5)</p>
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => {
                    setUserGrid(initialCrossword);
                    setCrosswordComplete(true);
                  }}
                  className="px-3 py-1.5 bg-[#efeded] hover:bg-[#e4e2e2] font-kicker text-[11px] uppercase font-bold"
                >
                  Solve / Reveal
                </button>
                <button
                  onClick={() => {
                    setUserGrid(Array(5).fill(null).map(() => Array(5).fill('')));
                    setCrosswordComplete(false);
                  }}
                  className="px-3 py-1.5 border border-[#747878] font-kicker text-[11px] uppercase font-bold"
                >
                  Clear Grid
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
