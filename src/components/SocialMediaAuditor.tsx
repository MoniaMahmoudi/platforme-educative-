import React, { useState } from 'react';
import { PROFILE_AUDIT_DATA } from '../data/profileAuditData';
import { ProfileAuditItem, Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import {
  ShieldAlert,
  ShieldCheck,
  Eye,
  Lock,
  Globe,
  MapPin,
  Calendar,
  AlertOctagon,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  GraduationCap
} from 'lucide-react';

interface SocialMediaAuditorProps {
  language: Language;
  onComplete: () => void;
  isCompleted: boolean;
}

export const SocialMediaAuditor: React.FC<SocialMediaAuditorProps> = ({
  language,
  onComplete,
  isCompleted
}) => {
  const t = TRANSLATIONS[language].social;
  const initialItems = PROFILE_AUDIT_DATA[language] || PROFILE_AUDIT_DATA.en;

  const [items, setItems] = useState<ProfileAuditItem[]>(initialItems);
  const [selectedItem, setSelectedItem] = useState<ProfileAuditItem | null>(null);
  const [timeMachineView, setTimeMachineView] = useState<'8th-grade' | 'high-school' | 'college'>('8th-grade');

  // Keep items updated if language changes
  React.useEffect(() => {
    const localized = PROFILE_AUDIT_DATA[language] || PROFILE_AUDIT_DATA.en;
    setItems((prev) =>
      localized.map((loc) => {
        const existing = prev.find((p) => p.id === loc.id);
        return existing ? { ...loc, detected: existing.detected } : loc;
      })
    );
  }, [language]);

  const detectedCount = items.filter((i) => i.detected).length;
  const allDetected = detectedCount === items.length;

  const handleInspect = (item: ProfileAuditItem) => {
    setSelectedItem(item);
    setItems((prev) =>
      prev.map((i) => (i.id === item.id ? { ...i, detected: true } : i))
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
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

          <button
            onClick={onComplete}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              isCompleted
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                : 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>{isCompleted ? t.completed : t.markComplete}</span>
          </button>
        </div>
      </div>

      {/* Progress Counter Banner */}
      <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md">
        <div>
          <div className="text-xs text-slate-400 uppercase font-bold tracking-wider">
            {t.progressLabel}
          </div>
          <div className="text-sm font-bold text-white flex items-center gap-2 mt-0.5">
            <span>
              {detectedCount} / {items.length}{' '}
              {language === 'ar' ? 'ثغرات تم اكتشافها' : language === 'fr' ? 'fuites détectées' : 'vulnerabilities detected'}
            </span>
            {allDetected && (
              <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> {t.allFound}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-36 bg-slate-950 h-2 rounded-full overflow-hidden">
            <div
              className="bg-emerald-400 h-full transition-all duration-300"
              style={{ width: `${(detectedCount / items.length) * 100}%` }}
            />
          </div>
          <span className="text-xs font-mono font-bold text-emerald-400">
            {Math.round((detectedCount / items.length) * 100)}%
          </span>
        </div>
      </div>

      {/* Main Two-Zone Sandbox: Mock Profile vs Vulnerability Dossier */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Interactive Simulated Profile UI */}
        <div className="lg:col-span-7 space-y-4">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wide">
            {t.clickPins}
          </div>

          <div className="bg-slate-950 rounded-2xl border-2 border-slate-800 p-6 space-y-6 shadow-xl relative">
            {/* Profile Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-500 p-0.5">
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-xl font-bold text-white">
                    AR
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-white">alex_tech_2012</h3>
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                      {language === 'ar' ? 'الصف الثامن' : language === 'fr' ? 'Élève 8ème' : '8th Grader'}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">Alex Rivera</div>
                </div>
              </div>

              {/* Hotspot: Public Account Toggle */}
              {items[5] && (
                <button
                  onClick={() => handleInspect(items[5])}
                  className={`p-2 rounded-lg border text-xs flex items-center gap-1.5 transition-all text-left rtl:text-right ${
                    items[5].detected
                      ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-300'
                      : 'bg-rose-500/10 border-rose-500/50 text-rose-300 animate-pulse'
                  }`}
                >
                  <Globe className="w-4 h-4 shrink-0" />
                  <div>
                    <div className="font-bold">
                      {language === 'ar' ? 'الحالة: عام (Public)' : language === 'fr' ? 'Statut : Public' : 'Status: Public'}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {language === 'ar' ? 'اضغط للفحص' : language === 'fr' ? 'Cliquer pour examiner' : 'Click to Inspect'}
                    </div>
                  </div>
                </button>
              )}
            </div>

            {/* Bio Section with 2 Hotspots */}
            <div className="space-y-2 p-3 bg-slate-900/60 rounded-xl border border-slate-800">
              <div className="text-xs font-semibold text-slate-400">
                {language === 'ar' ? 'السيرة الذاتية (Bio):' : language === 'fr' ? 'Biographie (Bio) :' : 'Bio:'}
              </div>

              {/* Hotspot 1: Bio School & Grad Year */}
              {items[0] && (
                <button
                  onClick={() => handleInspect(items[0])}
                  className={`w-full text-left rtl:text-right p-2 rounded border text-xs transition-all ${
                    items[0].detected
                      ? 'bg-slate-900 border-emerald-500/40 text-slate-200'
                      : 'bg-amber-500/10 border-amber-500/40 text-amber-200 hover:border-amber-400'
                  }`}
                >
                  <span className="font-mono font-bold mr-1 rtl:ml-1">📍 #1:</span>
                  {items[0].targetElement}
                </button>
              )}

              {/* Hotspot 2: Snap Handle Link */}
              {items[1] && (
                <button
                  onClick={() => handleInspect(items[1])}
                  className={`w-full text-left rtl:text-right p-2 rounded border text-xs transition-all ${
                    items[1].detected
                      ? 'bg-slate-900 border-emerald-500/40 text-slate-200'
                      : 'bg-amber-500/10 border-amber-500/40 text-amber-200 hover:border-amber-400'
                  }`}
                >
                  <span className="font-mono font-bold mr-1 rtl:ml-1">📍 #2:</span>
                  {items[1].targetElement}
                </button>
              )}
            </div>

            {/* Post Feed Grid with 3 Hotspots */}
            <div className="space-y-3">
              <div className="text-xs font-semibold text-slate-400">
                {language === 'ar' ? 'أحدث المنشورات:' : language === 'fr' ? 'Publications récentes :' : 'Recent Posts:'}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Post 1: Location Tagged Practice */}
                {items[2] && (
                  <button
                    onClick={() => handleInspect(items[2])}
                    className={`p-3 rounded-xl border text-left rtl:text-right flex flex-col justify-between h-36 transition-all ${
                      items[2].detected
                        ? 'bg-slate-900 border-emerald-500/40'
                        : 'bg-slate-900 border-amber-500/40 hover:border-amber-400'
                    }`}
                  >
                    <div className="flex items-center gap-1 text-[11px] text-amber-300 font-semibold truncate">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{items[2].targetElement}</span>
                    </div>
                    <div className="text-xs text-slate-300">
                      {language === 'ar' ? '"تدريبات القاعة! 🏀 مع زملائي في الورشة!"' : language === 'fr' ? '"Entraînement en cours ! 🏀"' : '"Pre-game drills! 🏀"'}
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono">📍 #3</span>
                  </button>
                )}

                {/* Post 2: Porch Skateboard photo with house number */}
                {items[3] && (
                  <button
                    onClick={() => handleInspect(items[3])}
                    className={`p-3 rounded-xl border text-left rtl:text-right flex flex-col justify-between h-36 transition-all ${
                      items[3].detected
                        ? 'bg-slate-900 border-emerald-500/40'
                        : 'bg-slate-900 border-amber-500/40 hover:border-amber-400'
                    }`}
                  >
                    <div className="text-[11px] text-slate-300 font-semibold truncate">
                      {items[3].targetElement}
                    </div>
                    <div className="text-xs text-rose-300 bg-rose-500/10 p-1.5 rounded border border-rose-500/20">
                      {language === 'ar'
                        ? '[صورة أمام البيت: رقم 42 ولافتة الحي ظاهرة بالانعكاس]'
                        : language === 'fr'
                        ? '[Photo perron : N°42 et panneau de rue visibles]'
                        : '[Photo: House #742 & street sign visible]'}
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono">📍 #4</span>
                  </button>
                )}

                {/* Post 3: Pet birthday (security question leak) */}
                {items[4] && (
                  <button
                    onClick={() => handleInspect(items[4])}
                    className={`p-3 rounded-xl border text-left rtl:text-right flex flex-col justify-between h-36 transition-all ${
                      items[4].detected
                        ? 'bg-slate-900 border-emerald-500/40'
                        : 'bg-slate-900 border-amber-500/40 hover:border-amber-400'
                    }`}
                  >
                    <div className="text-[11px] text-slate-300 font-semibold truncate">
                      {items[4].targetElement}
                    </div>
                    <div className="text-xs text-amber-200 bg-amber-500/10 p-1.5 rounded border border-amber-500/20">
                      {language === 'ar'
                        ? '"كلبي باستر ولد في 14 جويلية!"'
                        : language === 'fr'
                        ? '"Mon chien Buster est né le 14 juillet !"'
                        : '"My golden retriever Buster born July 14!"'}
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono">📍 #5</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Vulnerability Dossier Panel */}
        <div className="lg:col-span-5 space-y-4">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wide">
            {t.inspectorTitle}
          </div>

          {selectedItem ? (
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-4 shadow-md">
              <div className="flex items-center justify-between">
                <span className={`px-2.5 py-0.5 text-xs font-bold rounded uppercase ${
                  selectedItem.riskLevel === 'High Risk'
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                    : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                }`}>
                  {selectedItem.riskLevel}
                </span>
                <span className="text-xs text-emerald-400 font-semibold">
                  {language === 'ar' ? 'تم الفحص ✓' : language === 'fr' ? 'Examiné ✓' : 'Inspected ✓'}
                </span>
              </div>

              <h4 className="text-base font-bold text-white">
                {selectedItem.title}
              </h4>

              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs text-slate-400">
                <span className="text-slate-300 font-semibold">
                  {language === 'ar' ? 'العنصر المسرب: ' : language === 'fr' ? 'Élément fuité : ' : 'Leaked Element: '}
                </span>
                {selectedItem.targetElement}
              </div>

              <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                <strong className="text-white block mb-1">{t.dangerLabel}</strong>
                {selectedItem.description}
              </div>

              <div className="p-3.5 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-xs sm:text-sm text-emerald-200">
                <strong className="text-emerald-300 block mb-1">{t.fixLabel}</strong>
                {selectedItem.fixGuide}
              </div>
            </div>
          ) : (
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-center space-y-3 shadow-md">
              <ShieldAlert className="w-10 h-10 text-slate-500 mx-auto" />
              <h4 className="text-sm font-bold text-white">{t.noItemSelected}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.noItemDesc}
              </p>
            </div>
          )}

          {/* Checklist of all 6 items */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2 shadow-sm">
            <div className="text-xs font-bold text-slate-300 mb-2">
              {language === 'ar' ? 'قائمة الثغرات الأمنية:' : language === 'fr' ? 'Liste des vulnérabilités :' : 'Vulnerabilities Checklist:'}
            </div>
            {items.map((it) => (
              <div
                key={it.id}
                onClick={() => handleInspect(it)}
                className={`p-2 rounded-lg text-xs flex items-center justify-between cursor-pointer transition-colors ${
                  it.detected
                    ? 'bg-slate-950 text-slate-300'
                    : 'bg-slate-950/40 text-slate-500 hover:text-slate-400'
                }`}
              >
                <span>{it.title}</span>
                <span className="font-mono">
                  {it.detected
                    ? (language === 'ar' ? '✓ تم الكشف' : language === 'fr' ? '✓ Trouvé' : '✓ Found')
                    : (language === 'ar' ? '• قيد الانتظار' : language === 'fr' ? '• En attente' : '• Pending')}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Digital Footprint Time Machine Section */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <span>{t.timeMachineTitle}</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              {t.timeMachineDesc}
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-lg border border-slate-800">
            <button
              onClick={() => setTimeMachineView('8th-grade')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                timeMachineView === '8th-grade' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.tmTab1}
            </button>
            <button
              onClick={() => setTimeMachineView('high-school')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                timeMachineView === 'high-school' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.tmTab2}
            </button>
            <button
              onClick={() => setTimeMachineView('college')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                timeMachineView === 'college' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.tmTab3}
            </button>
          </div>
        </div>

        {/* Time Machine Content */}
        <div className="p-5 bg-slate-950 border border-slate-800 rounded-xl">
          {timeMachineView === '8th-grade' && (
            <div className="space-y-2 text-xs sm:text-sm text-slate-300">
              <span className="text-xs text-cyan-400 font-bold uppercase tracking-wider">
                {language === 'ar' ? 'المنظور: اليوم في الصف الثامن' : language === 'fr' ? 'Perspective : Collégien en 8ème' : 'Perspective: Current 8th Grade View'}
              </span>
              <p>
                {language === 'ar'
                  ? '"إنها مجرد نكتة في التعليقات، الجميع يفعلها! من يهتم إذا نشرت صورة بدون تفكير؟ على أي حال سأنساها غداً."'
                  : language === 'fr'
                  ? '"C\'est juste un mème délire en commentaire, tout le monde le fait. Qui verra si je poste une photo sans réfléchir ? Ça disparaît de toute façon."'
                  : '"It’s just an edgy meme in the comments, everyone does it. Who cares if I leave a roast comment or share an unfiltered photo? It disappears anyway."'}
              </p>
              <div className="text-xs text-rose-300 mt-2 font-medium">
                {language === 'ar'
                  ? 'الحقيقة المرة: لقطات الشاشة، الأرشفة، والنسخ الاحتياطي في السحابة تحفظ المنشورات حتى لو حذفتها بعد دقيقتين.'
                  : language === 'fr'
                  ? 'La réalité : Les captures d\'écran, les archives et les sauvegardes conservent les posts même si tu les supprimes 10 minutes après.'
                  : 'The Reality: Screenshots, archives, and cloud backups save posts even if deleted from the app 10 minutes later.'}
              </div>
            </div>
          )}

          {timeMachineView === 'high-school' && (
            <div className="space-y-2 text-xs sm:text-sm text-slate-300">
              <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                {language === 'ar' ? 'المنظور: بعمر 16 سنة (مدرب النادي وقائد الفريق)' : language === 'fr' ? 'Perspective : Sélection en équipe & Capitaine à 16 ans' : 'Perspective: High School Team Tryouts & Captaincy'}
              </span>
              <p>
                {language === 'ar'
                  ? 'مدربو الفرق الرياضية والمشرفون على أندية الروبوتات والمسابقات يفحصون حسابات الطلاب الرقمية قبل اختيار قادة الفرق. المنشورات غير المسؤولة تسلبك ثقة المدرب فوراً.'
                  : language === 'fr'
                  ? 'Les sélectionneurs sportifs et responsables de clubs de robotique examinent régulièrement les réseaux sociaux des candidats avant d\'attribuer le brassard de capitaine. Les propos toxiques passés coûtent ta place.'
                  : 'Varsity athletic directors and club advisers routinely check student social media before awarding captain badges or travel roster spots. Screenshots of mean comments can cost you a roster spot.'}
              </p>
            </div>
          )}

          {timeMachineView === 'college' && (
            <div className="space-y-2 text-xs sm:text-sm text-slate-300">
              <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">
                {language === 'ar' ? 'المنظور: بعمر 18 سنة (القبول الأكاديمي والتوظيف التقني)' : language === 'fr' ? 'Perspective : Admission Études Supérieures & Recrutement Technique' : 'Perspective: Tech Apprenticeship & College Admissions'}
              </span>
              <p>
                {language === 'ar'
                  ? 'أكثر من 70% من مسؤولي المعاهد التقنية ولجان المنح وأرباب العمل يفحصون البصمة الرقمية للطلاب. السجل النظيف المليء بالمشاريع الإيجابية يمنحك الأسبقية المطلقة.'
                  : language === 'fr'
                  ? 'Plus de 70% des écoles d\'ingénieurs, filières techniques et recruteurs vérifient l\'empreinte numérique publique. Un profil propre, respectueux et passionné fait immédiatement la différence.'
                  : 'Over 70% of tech admissions committees and apprenticeship review boards review public digital footprints. A clean history of leadership, positive hobbies, and respect stands out instantly.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
