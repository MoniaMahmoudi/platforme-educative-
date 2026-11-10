import React from 'react';
import {
  KeyRound,
  MessageSquareWarning,
  Users,
  ShieldAlert,
  Award,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Cpu,
  Wrench
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface HeroProps {
  language: Language;
  completedModules: string[];
  onSelectTab: (tab: string) => void;
  onOpenCheckup: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  completedModules,
  onSelectTab,
  onOpenCheckup
}) => {
  const t = TRANSLATIONS[language];

  const modules = [
    {
      id: 'concepts',
      title: t.nav.concepts,
      desc: language === 'ar'
        ? 'تشبيهات بديهية من واقع ورشة التكنولوجيا، قواعد ذهبية وأمثلة لاختبار ردة فعلك.'
        : language === 'fr'
        ? 'Analogies concrètes d\'atelier technique, règles d\'or et exemples simples pour tester tes réflexes.'
        : 'Concrete workshop analogies, golden rules, and everyday examples to test your instincts.',
      icon: Lightbulb,
      color: 'text-amber-400',
      borderColor: 'hover:border-amber-500/50',
      badge: language === 'ar' ? 'مفاهيم مبسطة' : language === 'fr' ? 'Notions Clés' : 'Quick Notions'
    },
    {
      id: 'passwords',
      title: t.nav.passwords,
      desc: language === 'ar'
        ? 'اختبر سرعة كسر كلمة مرورك بنظام القراصنة، ولّد جملة سرية متينة وجرب التحقق بخطوتين.'
        : language === 'fr'
        ? 'Mesure le temps de cassage par GPU, génère une passphrase de 4 mots et simule la 2FA.'
        : 'Test GPU brute-force crack time, generate uncrackable 4-word passphrases, and test 2FA.',
      icon: KeyRound,
      color: 'text-cyan-400',
      borderColor: 'hover:border-cyan-500/50',
      badge: language === 'ar' ? 'مختبر التشفير' : language === 'fr' ? 'Lab Cryptographie' : 'Crypto Lab'
    },
    {
      id: 'stranger-dms',
      title: t.nav.strangers,
      desc: language === 'ar'
        ? 'محاكاة واقعية لرسائل روبلوكس، ديسكورد، سناب وتيك توك لكشف المحتالين وروابط التصيد.'
        : language === 'fr'
        ? 'Simulateur réaliste de messages sur Roblox, Discord, Snap et Insta pour déjouer les pièges.'
        : 'Interactive chat simulator for Roblox, Discord, Snap, and Insta. Spot phishing and catfishing.',
      icon: MessageSquareWarning,
      color: 'text-rose-400',
      borderColor: 'hover:border-rose-500/50',
      badge: language === 'ar' ? 'محاكي المحادثات' : language === 'fr' ? 'Simulateur DM' : 'Chat Radar'
    },
    {
      id: 'cyberbullying',
      title: t.nav.bullying,
      desc: language === 'ar'
        ? 'تعلم بروتوكول S.T.O.P. لحفظ الأدلة وانسخ عبارات جاهزة لإيقاف المضايقات في مجموعات الصف.'
        : language === 'fr'
        ? 'Maîtrise le protocole S.T.O.P., désamorce les moqueries de classe et copie des phrases d\'upstander.'
        : 'Master the S.T.O.P. protocol, defuse group chat roast spirals, and copy-paste upstander scripts.',
      icon: Users,
      color: 'text-indigo-400',
      borderColor: 'hover:border-indigo-500/50',
      badge: language === 'ar' ? 'درع المواجهة' : language === 'fr' ? 'Arène Upstander' : 'Scenario Arena'
    },
    {
      id: 'social-media',
      title: t.nav.social,
      desc: language === 'ar'
        ? 'افحص بروفايل حساب واكتشف 6 ثغرات تسرب عنوانك ومدرستك، واكتشف آلة الزمن للبصمة الرقمية.'
        : language === 'fr'
        ? 'Détecte 6 fuites d\'adresse et d\'horaires sur un profil type et explore la machine temporelle.'
        : 'Audit a student profile to catch 6 stealth leaks and test the Digital Footprint Time Machine.',
      icon: ShieldAlert,
      color: 'text-emerald-400',
      borderColor: 'hover:border-emerald-500/50',
      badge: language === 'ar' ? 'مدقق البصمة' : language === 'fr' ? 'Scanner Profil' : 'Profile Auditor'
    }
  ];

  const totalCoreModules = 4;
  const completedCount = completedModules.filter(m => m !== 'quiz').length;
  const progressPercent = Math.min(100, Math.round((completedCount / totalCoreModules) * 100));

  return (
    <div className="relative pt-6 pb-12 border-b border-slate-800/80 overflow-hidden">
      {/* Background blueprint tech grid glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>{t.hero.tagline}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {t.hero.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
            {t.hero.description}
          </p>

          {/* Student Status Bar with technical workshop theme */}
          <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center justify-center font-bold text-sm">
                <Wrench className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wide font-medium">
                  {t.hero.progressTitle}
                </div>
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <span>{completedCount} / {totalCoreModules} {t.hero.progressCount}</span>
                  <span className="text-xs text-cyan-400">({progressPercent}%)</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-32 bg-slate-800 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-cyan-400 h-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <button
                onClick={onOpenCheckup}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-950 bg-white hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
              >
                <span>{t.hero.checkupBtn}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Lab Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {modules.map((mod) => {
            const Icon = mod.icon;
            const isDone = completedModules.includes(mod.id);

            return (
              <div
                key={mod.id}
                onClick={() => onSelectTab(mod.id)}
                className={`group cursor-pointer p-5 bg-slate-900/70 border border-slate-800 rounded-xl transition-all duration-200 ${mod.borderColor} hover:bg-slate-850 flex flex-col justify-between shadow-sm`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center ${mod.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    {isDone ? (
                      <span className="flex items-center gap-1 text-xs text-emerald-400 font-semibold">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>{t.hero.completed}</span>
                      </span>
                    ) : (
                      <span className="text-xs text-slate-400 font-medium">
                        {mod.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {mod.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {mod.desc}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform">
                  <span>{t.hero.enterBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
