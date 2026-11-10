import React, { useState } from 'react';
import { ConceptTip, Language } from '../types';
import { SIMPLE_CONCEPTS_DATA, TRANSLATIONS } from '../i18n/translations';
import {
  Lightbulb,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ShieldCheck,
  Zap,
  ArrowRight,
  BookOpen
} from 'lucide-react';

interface SimpleConceptsSectionProps {
  language: Language;
  onExploreModule: (moduleId: string) => void;
}

export const SimpleConceptsSection: React.FC<SimpleConceptsSectionProps> = ({
  language,
  onExploreModule
}) => {
  const t = TRANSLATIONS[language];
  const concepts = SIMPLE_CONCEPTS_DATA[language];

  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, 'good' | 'bad'>>({});
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const handleChoose = (conceptId: string, choice: 'good' | 'bad') => {
    setSelectedAnswers((prev) => ({ ...prev, [conceptId]: choice }));
  };

  const filteredConcepts = activeCategory === 'all'
    ? concepts
    : concepts.filter((c) => c.category === activeCategory);

  const categories = [
    { id: 'all', label: language === 'ar' ? 'الكل' : language === 'fr' ? 'Toutes les notions' : 'All Notions' },
    { id: 'passwords', label: language === 'ar' ? 'كلمات المرور والتشفير' : language === 'fr' ? 'Mots de passe' : 'Passwords & 2FA' },
    { id: 'strangers', label: language === 'ar' ? 'رسائل الغرباء والاحتيال' : language === 'fr' ? 'Pièges & Inconnus' : 'Phishing & Strangers' },
    { id: 'privacy', label: language === 'ar' ? 'الخصوصية والبصمة' : language === 'fr' ? 'Empreinte & Vie Privée' : 'Digital Footprint' },
    { id: 'cyberbullying', label: language === 'ar' ? 'مواجهة التنمر' : language === 'fr' ? 'Cyberharcèlement' : 'Upstander Defense' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
          <BookOpen className="w-4 h-4" />
          <span>{t.conceptsSection.badge}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {t.conceptsSection.title}
        </h2>
        <p className="text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
          {t.conceptsSection.subtitle}
        </p>

        {/* Filter categories */}
        <div className="flex flex-wrap gap-2 mt-5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors border ${
                activeCategory === cat.id
                  ? 'bg-cyan-500 text-slate-950 border-cyan-400'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredConcepts.map((item) => {
          const userChoice = selectedAnswers[item.id];
          const hasAnswered = !!userChoice;

          return (
            <div
              key={item.id}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-5 hover:border-slate-700 transition-colors shadow-lg"
            >
              <div className="space-y-4">
                {/* Title & Category */}
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-bold text-xs">
                      #
                    </span>
                    <span>{item.title}</span>
                  </h3>
                </div>

                {/* 1. Real-life workshop analogy */}
                <div className="p-3.5 bg-slate-950/80 rounded-xl border border-slate-800/80 space-y-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>{t.conceptsSection.analogyTitle}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.simpleAnalogy}
                  </p>
                </div>

                {/* 2. Golden Rule */}
                <div className="p-3.5 bg-cyan-950/30 rounded-xl border border-cyan-500/30 space-y-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    <span>{t.conceptsSection.ruleTitle}</span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-white leading-relaxed">
                    "{item.goldenRule}"
                  </p>
                </div>

                {/* 3. Everyday Example */}
                <div className="space-y-1 text-xs sm:text-sm text-slate-300">
                  <span className="text-slate-400 font-semibold block text-xs">
                    {t.conceptsSection.exampleTitle}:
                  </span>
                  <p className="bg-slate-950/60 p-3 rounded-lg border border-slate-800/80 leading-relaxed font-sans text-slate-200">
                    {item.concreteExample}
                  </p>
                </div>

                {/* 4. Interactive Quick Reflex Check */}
                <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-3">
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{t.conceptsSection.interactiveTitle}:</span>
                  </div>
                  <p className="text-xs text-slate-300 font-medium">
                    {item.interactiveCheck.question}
                  </p>

                  <div className="grid grid-cols-1 gap-2 pt-1">
                    {/* Safe Choice Button */}
                    <button
                      onClick={() => handleChoose(item.id, 'good')}
                      className={`p-2.5 rounded-lg border text-xs text-left transition-all flex items-start gap-2 ${
                        userChoice === 'good'
                          ? 'bg-emerald-500/20 border-emerald-500 text-emerald-200 font-semibold'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-850 hover:border-slate-700'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item.interactiveCheck.goodChoice}</span>
                    </button>

                    {/* Risky Choice Button */}
                    <button
                      onClick={() => handleChoose(item.id, 'bad')}
                      className={`p-2.5 rounded-lg border text-xs text-left transition-all flex items-start gap-2 ${
                        userChoice === 'bad'
                          ? 'bg-rose-500/20 border-rose-500 text-rose-200 font-semibold'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-850 hover:border-slate-700'
                      }`}
                    >
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{item.interactiveCheck.badChoice}</span>
                    </button>
                  </div>

                  {/* Feedback on Choice */}
                  {hasAnswered && (
                    <div
                      className={`p-2.5 rounded-lg text-xs leading-relaxed border animate-fadeIn ${
                        userChoice === 'good'
                          ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                          : 'bg-rose-950/40 border-rose-500/40 text-rose-200'
                      }`}
                    >
                      <div className="font-bold mb-0.5">
                        {userChoice === 'good' ? t.conceptsSection.correct : t.conceptsSection.incorrect}
                      </div>
                      <div className="text-slate-300">{item.interactiveCheck.explanation}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button to launch full lab */}
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => {
                    const target = item.category === 'passwords'
                      ? 'passwords'
                      : item.category === 'strangers'
                      ? 'stranger-dms'
                      : item.category === 'cyberbullying'
                      ? 'cyberbullying'
                      : 'social-media';
                    onExploreModule(target);
                  }}
                  className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
                >
                  <span>{t.hero.enterBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[11px] text-slate-500 font-mono">
                  Module 0{filteredConcepts.indexOf(item) + 1}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
