import React from 'react';
import { ShieldCheck, Lock, Cpu } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface FooterProps {
  language: Language;
  onSelectTab: (tab: string) => void;
  onOpenSOS: () => void;
  onOpenCheckup: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onSelectTab,
  onOpenSOS,
  onOpenCheckup
}) => {
  const t = TRANSLATIONS[language];

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-900">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>{t.appName}</span>
              <span className="text-[11px] text-cyan-400 font-mono">
                {language === 'ar' ? '· إعدادي تقني' : language === 'fr' ? '· Prépa Tech' : '· Tech Prep'}
              </span>
            </div>
            <p className="text-slate-400 text-xs max-w-md leading-relaxed">
              {t.footer.desc}
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-xs text-slate-300">
            <button
              onClick={() => onSelectTab('concepts')}
              className="hover:text-cyan-400 transition-colors"
            >
              {t.nav.concepts}
            </button>
            <button
              onClick={() => onSelectTab('passwords')}
              className="hover:text-cyan-400 transition-colors"
            >
              {t.nav.passwords}
            </button>
            <button
              onClick={() => onSelectTab('stranger-dms')}
              className="hover:text-cyan-400 transition-colors"
            >
              {t.nav.strangers}
            </button>
            <button
              onClick={() => onSelectTab('cyberbullying')}
              className="hover:text-cyan-400 transition-colors"
            >
              {t.nav.bullying}
            </button>
            <button
              onClick={() => onSelectTab('social-media')}
              className="hover:text-cyan-400 transition-colors"
            >
              {t.nav.social}
            </button>
            <button
              onClick={onOpenSOS}
              className="text-rose-400 hover:text-rose-300 font-semibold transition-colors"
            >
              {t.nav.sos}
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>{t.footer.privacy}</span>
          </div>

          <div>
            {t.footer.standards}
          </div>
        </div>
      </div>
    </footer>
  );
};
