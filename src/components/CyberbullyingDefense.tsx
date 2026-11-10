import React, { useState } from 'react';
import { BULLYING_SCENARIOS_DATA, UPSTANDER_SCRIPTS_DATA } from '../data/bullyingScenarios';
import { BullyingScenario, Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import {
  Users,
  ShieldCheck,
  Camera,
  MessageCircle,
  VolumeX,
  UserCheck,
  Check,
  Copy,
  Lightbulb,
  ExternalLink,
  ShieldAlert
} from 'lucide-react';

interface CyberbullyingDefenseProps {
  language: Language;
  onComplete: () => void;
  isCompleted: boolean;
  onOpenSOS: () => void;
}

export const CyberbullyingDefense: React.FC<CyberbullyingDefenseProps> = ({
  language,
  onComplete,
  isCompleted,
  onOpenSOS
}) => {
  const t = TRANSLATIONS[language].bullying;
  const scenarios = BULLYING_SCENARIOS_DATA[language] || BULLYING_SCENARIOS_DATA.en;
  const scripts = UPSTANDER_SCRIPTS_DATA[language] || UPSTANDER_SCRIPTS_DATA.en;

  const [activeScenarioId, setActiveScenarioId] = useState<string>(scenarios[0].id);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [copiedScriptIndex, setCopiedScriptIndex] = useState<number | null>(null);

  const scenario: BullyingScenario =
    scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];

  const handleCopyScript = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedScriptIndex(index);
    setTimeout(() => setCopiedScriptIndex(null), 2000);
  };

  const handleSelectScenario = (id: string) => {
    setActiveScenarioId(id);
    setSelectedOptionIndex(null);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold text-rose-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>{t.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.title}
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-3xl leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenSOS}
              className="px-3 py-2 text-xs font-bold text-rose-300 bg-rose-500/10 border border-rose-500/30 rounded-lg hover:bg-rose-500/20 transition-colors"
            >
              {language === 'ar' ? 'طلب مساعدة فورية' : language === 'fr' ? 'Aide d\'Urgence' : 'Get Help Now'}
            </button>
            <button
              onClick={onComplete}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                isCompleted
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'bg-rose-500 text-white hover:bg-rose-400'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{isCompleted ? t.completed : t.markComplete}</span>
            </button>
          </div>
        </div>
      </div>

      {/* The S.T.O.P. Protocol 4-Pillar Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-rose-400" />
            <span>{t.stopTitle}</span>
          </h3>
          <span className="text-xs text-slate-400 font-medium">{t.stopSubtitle}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* S */}
          <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl shadow-md">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-sm">
                S
              </div>
              <div className="font-bold text-white text-sm">{t.stopS_title}</div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {t.stopS_desc}
            </p>
          </div>

          {/* T */}
          <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl shadow-md">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm">
                T
              </div>
              <div className="font-bold text-white text-sm">{t.stopT_title}</div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {t.stopT_desc}
            </p>
          </div>

          {/* O */}
          <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl shadow-md">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-sm">
                O
              </div>
              <div className="font-bold text-white text-sm">{t.stopO_title}</div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {t.stopO_desc}
            </p>
          </div>

          {/* P */}
          <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl shadow-md">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">
                P
              </div>
              <div className="font-bold text-white text-sm">{t.stopP_title}</div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {t.stopP_desc}
            </p>
          </div>
        </div>
      </div>

      {/* Upstander Scenario Simulation Arena */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Users className="w-5 h-5 text-cyan-400" />
            <span>{t.arenaTitle}</span>
          </h3>
          <span className="text-xs text-cyan-400 font-semibold">
            {language === 'ar' ? 'اختبر ردة فعلك في الواقع' : language === 'fr' ? 'Teste ta réaction réelle' : 'Test your real reaction'}
          </span>
        </div>

        {/* Tab row for scenarios */}
        <div className="flex flex-wrap gap-2">
          {scenarios.map((s) => (
            <button
              key={s.id}
              onClick={() => handleSelectScenario(s.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors border ${
                activeScenarioId === s.id
                  ? 'bg-slate-800 border-cyan-400 text-white shadow-sm'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* Selected Scenario Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6 shadow-md">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
              <span>{language === 'ar' ? 'المكان والسياق:' : language === 'fr' ? 'Contexte :' : 'Setting:'}</span>
              <span className="text-cyan-400 font-semibold">{scenario.context}</span>
            </div>
            <h4 className="text-lg font-bold text-white">{scenario.title}</h4>
            <div className="p-4 bg-slate-950 border border-slate-800/80 rounded-lg text-slate-200 text-sm leading-relaxed">
              {scenario.situation}
            </div>
          </div>

          {/* Decision Options */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-slate-300 uppercase tracking-wide">
              {t.selectAction}
            </div>

            <div className="grid grid-cols-1 gap-3">
              {scenario.options.map((opt, idx) => {
                const isSelected = selectedOptionIndex === idx;

                return (
                  <div key={idx} className="space-y-2">
                    <button
                      onClick={() => setSelectedOptionIndex(idx)}
                      className={`w-full p-4 rounded-xl border text-left rtl:text-right transition-all flex items-start justify-between gap-3 ${
                        isSelected
                          ? opt.isRecommended
                            ? 'bg-emerald-500/10 border-emerald-500 text-white shadow-sm'
                            : 'bg-amber-500/10 border-amber-500 text-white shadow-sm'
                          : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="space-y-1">
                        <span className={`inline-block text-[11px] font-bold uppercase tracking-wider ${
                          opt.role === 'Upstander' ? 'text-emerald-400' : 'text-slate-400'
                        }`}>
                          {language === 'ar'
                            ? (opt.role === 'Upstander' ? 'تصرف: شاهد إيجابي (مساند)' : opt.role === 'Target' ? 'تصرف: الضحية' : 'تصرف: شاهد سلبي (متفرج)')
                            : language === 'fr'
                            ? (opt.role === 'Upstander' ? 'Rôle : Témoin Actif' : opt.role === 'Target' ? 'Rôle : Cible' : 'Rôle : Témoin Passif')
                            : `Action: ${opt.role}`}
                        </span>
                        <div className="text-xs sm:text-sm leading-relaxed">
                          {opt.action}
                        </div>
                      </div>
                      <span className="text-xs font-bold font-mono text-cyan-400 shrink-0">
                        +{opt.points} {language === 'ar' ? 'نقطة' : 'pts'}
                      </span>
                    </button>

                    {isSelected && (
                      <div className={`p-3.5 rounded-lg border text-xs sm:text-sm leading-relaxed ${
                        opt.isRecommended
                          ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-200'
                          : 'bg-slate-950 border-slate-800 text-slate-300'
                      }`}>
                        <strong>{t.analysisLabel}</strong>
                        {opt.outcome}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Expert Takeaway */}
          <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              <strong className="text-white font-semibold">{t.insightLabel}</strong>
              {scenario.expertAdvice}
            </div>
          </div>
        </div>
      </div>

      {/* Upstander Script Generator (Copy-Paste Ready) */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4 shadow-md">
        <div>
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span>{t.scriptsTitle}</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            {t.scriptsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {scripts.map((script, idx) => (
            <div
              key={idx}
              className="p-4 bg-slate-950 border border-slate-800 rounded-xl flex flex-col justify-between gap-3 shadow-sm"
            >
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
                  {script.situation}
                </span>
                <p className="text-sm font-medium text-white italic mt-1.5 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  {script.phrase}
                </p>
                <div className="text-xs text-slate-400 mt-2">
                  <span className="text-slate-300 font-semibold">
                    {language === 'ar' ? 'الأثر النفسي والاجتماعي:' : language === 'fr' ? 'Effet psychologique :' : 'Psychological impact:'}
                  </span>{' '}
                  {script.impact}
                </div>
              </div>

              <button
                onClick={() => handleCopyScript(script.phrase, idx)}
                className="w-full py-1.5 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg flex items-center justify-center gap-1.5 transition-colors border border-slate-700"
              >
                {copiedScriptIndex === idx ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">{t.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{t.copyScript}</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
