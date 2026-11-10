import React, { useState } from 'react';
import { analyzePassword, generatePassphrase } from '../utils/cyberUtils';
import { Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import {
  KeyRound,
  ShieldCheck,
  AlertTriangle,
  RefreshCw,
  Copy,
  Check,
  Lock,
  Smartphone,
  Eye,
  EyeOff,
  Sparkles,
  Zap,
  Wrench
} from 'lucide-react';

interface PasswordLabProps {
  language: Language;
  onComplete: () => void;
  isCompleted: boolean;
}

export const PasswordLab: React.FC<PasswordLabProps> = ({
  language,
  onComplete,
  isCompleted
}) => {
  const t = TRANSLATIONS[language].passwords;
  const [passwordInput, setPasswordInput] = useState('fortnite2026');
  const [showPassword, setShowPassword] = useState(true);
  const [generatedPassphrase, setGeneratedPassphrase] = useState('');
  const [copied, setCopied] = useState(false);

  // 2FA Simulator state
  const [has2FA, setHas2FA] = useState(false);
  const [simStep, setSimStep] = useState<'idle' | 'breaching' | 'result'>('idle');

  const analysis = analyzePassword(passwordInput, language);

  const presets = [
    { label: language === 'ar' ? 'فخ شائع (123456)' : language === 'fr' ? 'Piège classique (123456)' : 'Common Trap (123456)', val: '123456' },
    { label: language === 'ar' ? 'طالب إعدادي تقليدي (fortnite2026)' : language === 'fr' ? 'Élève typique (fortnite2026)' : 'Typical 8th Grader (fortnite2026)', val: 'fortnite2026' },
    { label: language === 'ar' ? 'أفضل بقليل (Tigers@2026!)' : language === 'fr' ? 'Un peu mieux (Tigers@2026!)' : 'Slightly Better (Tigers@2026!)', val: 'Tigers@2026!' },
    { label: language === 'ar' ? 'جملة سرية فولاذية' : language === 'fr' ? 'Passphrase Incassable' : 'Uncrackable Passphrase', val: language === 'ar' ? 'صاروخ-صبار-قمر-مفتاح7!' : language === 'fr' ? 'Fusee-Cactus-Nuage-Clavier7!' : 'Solar-Badger-Summit-Pixel#84' }
  ];

  const handleGenerate = () => {
    const p = generatePassphrase(language);
    setGeneratedPassphrase(p);
    setPasswordInput(p);
  };

  const handleCopy = () => {
    if (generatedPassphrase) {
      navigator.clipboard.writeText(generatedPassphrase);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleRun2FASim = () => {
    setSimStep('breaching');
    setTimeout(() => {
      setSimStep('result');
    }, 1200);
  };

  return (
    <div className="space-y-8">
      {/* Lab Header */}
      <div className="border-b border-slate-800 pb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5" />
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
                : 'bg-cyan-500 text-slate-950 hover:bg-cyan-400'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>{isCompleted ? t.completed : t.markComplete}</span>
          </button>
        </div>
      </div>

      {/* Main 2-Zone Sandbox */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Zone: Live Password Analyzer */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <label htmlFor="pass-input" className="text-sm font-bold text-white flex items-center gap-2">
                <KeyRound className="w-4 h-4 text-cyan-400" />
                <span>{t.testInputLabel}</span>
              </label>
              <span className="text-xs text-slate-400 font-mono">
                {t.entropy}: {analysis.entropy} bits
              </span>
            </div>

            {/* Input with Show/Hide */}
            <div className="relative mb-3">
              <input
                id="pass-input"
                type={showPassword ? 'text' : 'password'}
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder={t.placeholder}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-base text-white font-mono focus:outline-none focus:border-cyan-400 ltr:pr-12 rtl:pl-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute ltr:right-3 rtl:left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {/* Quick Preset Buttons */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="text-xs text-slate-400">{t.presetsLabel}</span>
              {presets.map((p) => (
                <button
                  key={p.label}
                  onClick={() => setPasswordInput(p.val)}
                  className="px-2.5 py-1 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 rounded transition-colors"
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Crack Time Hero Box */}
            <div
              className="p-5 rounded-xl border mb-6 transition-all"
              style={{
                backgroundColor: `${analysis.color}10`,
                borderColor: `${analysis.color}40`
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs uppercase font-bold tracking-wider" style={{ color: analysis.color }}>
                    {t.crackTimeLabel}
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white mt-1 font-mono tracking-tight">
                    {analysis.crackTimeText}
                  </div>
                  <div className="text-xs text-slate-300 mt-1">
                    {t.crackTimeDesc}
                  </div>
                </div>
                <div
                  className="px-3 py-1 rounded text-xs font-bold uppercase tracking-wider shrink-0 text-white"
                  style={{ backgroundColor: analysis.color }}
                >
                  {analysis.category}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-950 h-2 rounded-full mt-4 overflow-hidden">
                <div
                  className="h-full transition-all duration-300"
                  style={{
                    width: `${analysis.score}%`,
                    backgroundColor: analysis.color
                  }}
                />
              </div>
            </div>

            {/* Red Flag Warning if common trap */}
            {analysis.hasCommonTrap && (
              <div className="mb-4 p-3.5 bg-rose-500/10 border border-rose-500/30 rounded-lg flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-rose-200">
                  <strong className="font-semibold block text-white">{t.trapDetected}</strong>
                  {analysis.hasCommonTrap}
                </div>
              </div>
            )}

            {/* Security Checklist */}
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="font-bold text-slate-300 mb-1">{t.defenseCriteria}</div>
              <div className="grid grid-cols-2 gap-2">
                <div className={`p-2.5 rounded border flex items-center gap-2 ${
                  passwordInput.length >= 12
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                    : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}>
                  <div className="w-4 h-4 rounded-full border flex items-center justify-center text-xs font-bold">
                    {passwordInput.length >= 12 ? '✓' : '•'}
                  </div>
                  <span>{t.ruleLength} ({passwordInput.length})</span>
                </div>

                <div className={`p-2.5 rounded border flex items-center gap-2 ${
                  /[A-Z]/.test(passwordInput)
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                    : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}>
                  <div className="w-4 h-4 rounded-full border flex items-center justify-center text-xs font-bold">
                    {/[A-Z]/.test(passwordInput) ? '✓' : '•'}
                  </div>
                  <span>{t.ruleUpper}</span>
                </div>

                <div className={`p-2.5 rounded border flex items-center gap-2 ${
                  /[0-9]/.test(passwordInput)
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                    : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}>
                  <div className="w-4 h-4 rounded-full border flex items-center justify-center text-xs font-bold">
                    {/[0-9]/.test(passwordInput) ? '✓' : '•'}
                  </div>
                  <span>{t.ruleNumbers}</span>
                </div>

                <div className={`p-2.5 rounded border flex items-center gap-2 ${
                  /[^a-zA-Z0-9]/.test(passwordInput)
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                    : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}>
                  <div className="w-4 h-4 rounded-full border flex items-center justify-center text-xs font-bold">
                    {/[^a-zA-Z0-9]/.test(passwordInput) ? '✓' : '•'}
                  </div>
                  <span>{t.ruleSymbols}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Passphrase Generator Tool */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>{t.passphraseTitle}</span>
              </h3>
              <span className="text-xs text-cyan-400 font-semibold">{t.passphraseBadge}</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
              {t.passphraseDesc}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={handleGenerate}
                className="px-4 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm rounded-lg flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
              >
                <RefreshCw className="w-4 h-4" />
                <span>{t.passphraseBtn}</span>
              </button>

              {generatedPassphrase && (
                <div className="flex-1 bg-slate-950 border border-cyan-500/40 rounded-lg px-4 py-2.5 flex items-center justify-between gap-2">
                  <span className="font-mono text-cyan-300 font-bold text-sm sm:text-base select-all truncate">
                    {generatedPassphrase}
                  </span>
                  <button
                    onClick={handleCopy}
                    className="text-slate-400 hover:text-white p-1 rounded"
                    title="Copy to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Zone: 2FA Simulator & The Friend Trap */}
        <div className="lg:col-span-5 space-y-6">
          {/* Interactive 2FA Simulation */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-2 mb-3">
              <Smartphone className="w-5 h-5 text-indigo-400" />
              <h3 className="text-base font-bold text-white">
                {t.simTitle}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
              {t.simDesc}
            </p>

            {/* Toggle 2FA switch */}
            <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-lg flex items-center justify-between mb-4">
              <div>
                <div className="text-sm font-bold text-white">{t.twoFaToggle}</div>
                <div className="text-xs text-slate-400">
                  {has2FA ? t.twoFaActive : t.twoFaDisabled}
                </div>
              </div>

              <button
                onClick={() => {
                  setHas2FA(!has2FA);
                  setSimStep('idle');
                }}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  has2FA ? 'bg-cyan-500' : 'bg-slate-700'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    has2FA ? 'ltr:translate-x-6 rtl:-translate-x-6' : 'ltr:translate-x-1 rtl:-translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Simulator action */}
            <button
              onClick={handleRun2FASim}
              disabled={simStep === 'breaching'}
              className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm rounded-lg border border-slate-700 flex items-center justify-center gap-2 transition-colors mb-4"
            >
              <Zap className="w-4 h-4 text-amber-400" />
              <span>{t.simBtn}</span>
            </button>

            {/* Results Display */}
            {simStep === 'breaching' && (
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg text-center animate-pulse">
                <span className="text-xs text-amber-400 font-mono">
                  [{t.simBreaching}]
                </span>
              </div>
            )}

            {simStep === 'result' && (
              <div>
                {has2FA ? (
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/40 rounded-lg">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-1">
                      <ShieldCheck className="w-5 h-5" />
                      <span>{t.simPrevented}</span>
                    </div>
                    <p className="text-xs text-emerald-200 leading-relaxed">
                      {t.simPreventedDesc}
                    </p>
                  </div>
                ) : (
                  <div className="p-4 bg-rose-500/10 border border-rose-500/40 rounded-lg">
                    <div className="flex items-center gap-2 text-rose-400 font-bold text-sm mb-1">
                      <AlertTriangle className="w-5 h-5" />
                      <span>{t.simHijacked}</span>
                    </div>
                    <p className="text-xs text-rose-200 leading-relaxed">
                      {t.simHijackedDesc}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* The "Best Friend Password Sharing" Trap */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-2 mb-3">
              <Lock className="w-5 h-5 text-rose-400" />
              <h3 className="text-base font-bold text-white">
                {t.friendTrapTitle}
              </h3>
            </div>

            <div className="text-xs sm:text-sm text-slate-300 space-y-3 leading-relaxed">
              <p>{t.friendTrapP1}</p>
              <p className="text-slate-400">{t.friendTrapP2}</p>
              <p className="text-xs text-cyan-300 font-medium bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                {t.friendTrapTip}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
