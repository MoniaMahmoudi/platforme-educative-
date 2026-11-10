import React from 'react';
import { ShieldCheck, HelpCircle, Globe, Cpu } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface HeaderProps {
  language: Language;
  onChangeLanguage: (lang: Language) => void;
  activeTab: string;
  onSelectTab: (tab: string) => void;
  onOpenCheckup: () => void;
  onOpenSOS: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onChangeLanguage,
  activeTab,
  onSelectTab,
  onOpenCheckup,
  onOpenSOS
}) => {
  const t = TRANSLATIONS[language];

  return (
    <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 md:gap-8">
        {/* Zone 1: Single text wordmark with technical prep icon */}
        <button
          onClick={() => onSelectTab('overview')}
          className="flex items-center gap-2.5 text-left text-lg font-bold tracking-tight text-white hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0"
        >
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Cpu className="w-5 h-5" />
          </div>
          <span className="font-extrabold">{t.appName}</span>
        </button>

        {/* Zone 2: Single-line nav links */}
        <nav className="hidden lg:flex items-center gap-5 text-xs font-semibold text-slate-300">
          <button
            onClick={() => onSelectTab('concepts')}
            className={`whitespace-nowrap shrink-0 hover:text-white transition-colors py-1 ${
              activeTab === 'concepts' ? 'text-cyan-400 font-bold border-b-2 border-cyan-400' : ''
            }`}
          >
            {t.nav.concepts}
          </button>
          <button
            onClick={() => onSelectTab('passwords')}
            className={`whitespace-nowrap shrink-0 hover:text-white transition-colors py-1 ${
              activeTab === 'passwords' ? 'text-cyan-400 font-bold border-b-2 border-cyan-400' : ''
            }`}
          >
            {t.nav.passwords}
          </button>
          <button
            onClick={() => onSelectTab('stranger-dms')}
            className={`whitespace-nowrap shrink-0 hover:text-white transition-colors py-1 ${
              activeTab === 'stranger-dms' ? 'text-cyan-400 font-bold border-b-2 border-cyan-400' : ''
            }`}
          >
            {t.nav.strangers}
          </button>
          <button
            onClick={() => onSelectTab('cyberbullying')}
            className={`whitespace-nowrap shrink-0 hover:text-white transition-colors py-1 ${
              activeTab === 'cyberbullying' ? 'text-cyan-400 font-bold border-b-2 border-cyan-400' : ''
            }`}
          >
            {t.nav.bullying}
          </button>
          <button
            onClick={() => onSelectTab('social-media')}
            className={`whitespace-nowrap shrink-0 hover:text-white transition-colors py-1 ${
              activeTab === 'social-media' ? 'text-cyan-400 font-bold border-b-2 border-cyan-400' : ''
            }`}
          >
            {t.nav.social}
          </button>
        </nav>

        {/* Zone 3: Language Switcher + SOS + Primary Action */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Language Switcher */}
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5 text-xs font-semibold">
            <button
              onClick={() => onChangeLanguage('en')}
              className={`px-2 py-1 rounded transition-colors ${
                language === 'en'
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="English"
            >
              EN
            </button>
            <button
              onClick={() => onChangeLanguage('fr')}
              className={`px-2 py-1 rounded transition-colors ${
                language === 'fr'
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Français"
            >
              FR
            </button>
            <button
              onClick={() => onChangeLanguage('ar')}
              className={`px-2 py-1 rounded transition-colors ${
                language === 'ar'
                  ? 'bg-cyan-500 text-slate-950 font-bold font-arabic'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="العربية"
            >
              عربي
            </button>
          </div>

          <button
            onClick={onOpenSOS}
            title={t.nav.sos}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-rose-300 bg-rose-500/10 border border-rose-500/30 rounded-lg hover:bg-rose-500/20 transition-colors whitespace-nowrap shrink-0"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.nav.sos}</span>
          </button>

          <button
            onClick={onOpenCheckup}
            className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold text-slate-950 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-colors shadow-sm whitespace-nowrap shrink-0"
          >
            {t.nav.checkup}
          </button>
        </div>
      </div>
    </header>
  );
};
