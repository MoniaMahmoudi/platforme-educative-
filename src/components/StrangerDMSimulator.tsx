import React, { useState } from 'react';
import { STRANGER_SCENARIOS_DATA } from '../data/strangerScenarios';
import { StrangerScenario, ScenarioChoice, Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import {
  MessageSquareWarning,
  ShieldCheck,
  AlertOctagon,
  CheckCircle,
  Smartphone,
  ChevronRight,
  UserX,
  Flag,
  RotateCcw,
  Radio
} from 'lucide-react';

interface StrangerDMSimulatorProps {
  language: Language;
  onComplete: () => void;
  isCompleted: boolean;
}

export const StrangerDMSimulator: React.FC<StrangerDMSimulatorProps> = ({
  language,
  onComplete,
  isCompleted
}) => {
  const t = TRANSLATIONS[language].strangers;
  const scenarios = STRANGER_SCENARIOS_DATA[language] || STRANGER_SCENARIOS_DATA.en;

  const [activeScenarioId, setActiveScenarioId] = useState<string>(scenarios[0].id);
  const [selectedChoice, setSelectedChoice] = useState<ScenarioChoice | null>(null);
  const [showAnalysis, setShowAnalysis] = useState(false);

  const scenario: StrangerScenario =
    scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];

  const handleSelectScenario = (id: string) => {
    setActiveScenarioId(id);
    setSelectedChoice(null);
    setShowAnalysis(false);
  };

  const handleMakeChoice = (choice: ScenarioChoice) => {
    setSelectedChoice(choice);
    setShowAnalysis(true);
  };

  const handleReset = () => {
    setSelectedChoice(null);
    setShowAnalysis(false);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Radio className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>{t.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.title}
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-3xl leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          <button
            onClick={onComplete}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              isCompleted
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                : 'bg-amber-400 text-slate-950 hover:bg-amber-300'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>{isCompleted ? t.completed : t.markComplete}</span>
          </button>
        </div>
      </div>

      {/* Scenario Selector Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
        {scenarios.map((s) => (
          <button
            key={s.id}
            onClick={() => handleSelectScenario(s.id)}
            className={`p-3 rounded-xl border text-left rtl:text-right transition-all ${
              activeScenarioId === s.id
                ? 'bg-slate-800 border-amber-400 text-white shadow-sm'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-850'
            }`}
          >
            <div className="text-[11px] font-semibold uppercase tracking-wider text-amber-400 mb-1">
              {s.platform}
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-200 truncate">
              {s.title}
            </div>
          </button>
        ))}
      </div>

      {/* Two-Zone Simulation Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Interactive Simulated Phone Messenger */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="w-full max-w-sm bg-slate-950 rounded-3xl border-4 border-slate-800 shadow-2xl overflow-hidden flex flex-col h-[520px]">
            {/* Phone Top Notch / Status */}
            <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono">15:42</span>
              <div className="w-16 h-3.5 bg-slate-800 rounded-full" />
              <span className="font-semibold text-amber-400">{scenario.platform}</span>
            </div>

            {/* Chat Contact Header */}
            <div className="bg-slate-900/95 px-4 py-3 border-b border-slate-800/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-white text-xs">
                  {scenario.initialMessages[0].senderName.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white leading-tight">
                    {scenario.initialMessages[0].senderName}
                  </div>
                  <div className="text-[11px] text-amber-400 font-medium">
                    {scenario.threatType}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  title="Report User"
                  className="p-1.5 text-slate-400 hover:text-rose-400 transition-colors"
                >
                  <Flag className="w-4 h-4" />
                </button>
                <button
                  title="Block User"
                  className="p-1.5 text-slate-400 hover:text-rose-400 transition-colors"
                >
                  <UserX className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Messages Feed */}
            <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-slate-950/70">
              {/* Threat warning banner in chat */}
              <div className="p-2 bg-amber-500/10 border border-amber-500/20 rounded-lg text-center">
                <span className="text-[11px] text-amber-300 font-medium">
                  {t.warningNotice}
                </span>
              </div>

              {scenario.initialMessages.map((msg) => (
                <div key={msg.id} className="flex flex-col items-start rtl:items-start max-w-[85%]">
                  <div className="bg-slate-800 text-slate-100 rounded-2xl ltr:rounded-tl-sm rtl:rounded-tr-sm px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed border border-slate-700/60 shadow-sm">
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-slate-500 mt-1 font-mono">
                    {msg.timestamp}
                  </span>
                </div>
              ))}

              {/* If user answered, show user response message */}
              {selectedChoice && (
                <div className="flex flex-col items-end rtl:items-end max-w-[85%] ltr:ml-auto rtl:mr-auto">
                  <div className={`rounded-2xl ltr:rounded-tr-sm rtl:rounded-tl-sm px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed border shadow-sm ${
                    selectedChoice.isCorrect
                      ? 'bg-cyan-600 text-white border-cyan-500'
                      : 'bg-rose-600/90 text-white border-rose-500'
                  }`}>
                    {selectedChoice.text}
                  </div>
                  <span className="text-[10px] text-slate-500 mt-1 font-mono">
                    {language === 'ar' ? 'أُرسلت للتو' : language === 'fr' ? 'Envoyé à l\'instant' : 'Sent just now'}
                  </span>
                </div>
              )}
            </div>

            {/* Message Bar / Action State */}
            <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                {selectedChoice
                  ? (language === 'ar' ? 'تم تسجيل الاختيار' : language === 'fr' ? 'Réponse enregistrée' : 'Choice recorded')
                  : t.selectMove}
              </span>
              {selectedChoice && (
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 font-semibold"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{t.tryAgain}</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right: Decision Panel & Red Flag Radar */}
        <div className="lg:col-span-6 space-y-6">
          {/* Red Flag Radar Box */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-md">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 mb-3">
              <AlertOctagon className="w-4 h-4 text-amber-400" />
              <span>
                {language === 'ar'
                  ? 'رادار الأعلام الحمراء: ماذا يفعل المحتال في الخفاء؟'
                  : language === 'fr'
                  ? 'Radar Signaux d\'Alerte : Que cache ce message ?'
                  : 'Red Flag Radar: What\'s Happening Behind The Scenes'}
              </span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {scenario.redFlags.map((flag, idx) => (
                <div
                  key={idx}
                  className="p-2.5 bg-slate-950 border border-slate-800/80 rounded-lg text-slate-300 flex items-start gap-2"
                >
                  <span className="text-amber-400 font-bold">!</span>
                  <span>{flag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Response Choices */}
          <div className="space-y-3">
            <div className="text-sm font-bold text-white flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-cyan-400" />
              <span>{t.selectMove}</span>
            </div>

            {scenario.choices.map((choice) => {
              const isSelected = selectedChoice?.id === choice.id;

              return (
                <button
                  key={choice.id}
                  onClick={() => handleMakeChoice(choice)}
                  className={`w-full p-4 rounded-xl border text-left rtl:text-right transition-all flex items-start justify-between gap-3 ${
                    isSelected
                      ? choice.isCorrect
                        ? 'bg-emerald-500/10 border-emerald-500 text-white shadow-sm'
                        : 'bg-rose-500/10 border-rose-500 text-white shadow-sm'
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-850 hover:border-slate-700'
                  }`}
                >
                  <div className="text-xs sm:text-sm leading-relaxed">
                    {choice.text}
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 mt-0.5 rtl:rotate-180" />
                </button>
              );
            })}
          </div>

          {/* Expert Analysis Feedback */}
          {showAnalysis && selectedChoice && (
            <div
              className={`p-5 rounded-xl border transition-all ${
                selectedChoice.isCorrect
                  ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-100'
                  : 'bg-rose-500/10 border-rose-500/40 text-rose-100'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 font-bold text-sm">
                  {selectedChoice.isCorrect ? (
                    <>
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      <span className="text-emerald-400">{t.expertVerdictSafe}</span>
                    </>
                  ) : (
                    <>
                      <AlertOctagon className="w-5 h-5 text-rose-400" />
                      <span className="text-rose-400">{t.expertVerdictRisk}</span>
                    </>
                  )}
                </div>
              </div>

              <p className="text-xs sm:text-sm leading-relaxed mb-3">
                {selectedChoice.explanation}
              </p>

              <div className="pt-3 border-t border-slate-800/60 text-xs text-slate-300">
                <strong className="text-white font-semibold">{t.takeawayLabel}</strong>
                {scenario.expertTakeaway}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
