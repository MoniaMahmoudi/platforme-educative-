import React from 'react';
import {
  X,
  PhoneCall,
  MessageSquare,
  ShieldAlert,
  Camera,
  Users,
  ExternalLink,
  LifeBuoy
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface EmergencySOSModalProps {
  language: Language;
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencySOSModal: React.FC<EmergencySOSModalProps> = ({
  language,
  isOpen,
  onClose
}) => {
  const t = TRANSLATIONS[language].sos;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-rose-500/40 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-sm">
              <LifeBuoy className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white leading-tight">
                {t.title}
              </h3>
              <p className="text-xs text-rose-300">
                {t.subtitle}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Helplines based on language */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {t.helplineTitle}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {language === 'fr' ? (
                <>
                  <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
                    <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                      <PhoneCall className="w-4 h-4" />
                      <span>3018 (Non au Harcèlement)</span>
                    </div>
                    <div className="text-base font-extrabold text-white font-mono">
                      Numéro Gratuit 3018
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Numéro national gratuit, anonyme et confidentiel pour les victimes et témoins de cyberharcèlement.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
                    <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                      <MessageSquare className="w-4 h-4" />
                      <span>Net Écoute / e-Enfance</span>
                    </div>
                    <div className="text-base font-extrabold text-white font-mono">
                      Chat sur 3018.fr
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Aide immédiate par messagerie et signalement direct des contenus illégaux.
                    </p>
                  </div>
                </>
              ) : language === 'ar' ? (
                <>
                  <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
                    <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                      <PhoneCall className="w-4 h-4" />
                      <span>خط نجدة الطفل وحماية القاصرين</span>
                    </div>
                    <div className="text-base font-extrabold text-white font-mono">
                      اتصال مجاني ومحمي
                    </div>
                    <p className="text-[11px] text-slate-400">
                      خدمة وطنية مجانية وسرية للتبليغ عن الابتزاز الإلكتروني ومساعدة الأطفال والمراهقين.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
                    <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                      <MessageSquare className="w-4 h-4" />
                      <span>المرشد التربوي / أخصائي المدرسة</span>
                    </div>
                    <div className="text-base font-extrabold text-white font-mono">
                      إدارة الإعدادية التقنية
                    </div>
                    <p className="text-[11px] text-slate-400">
                      استشارة سرية مع أستاذ التكنولوجيا أو المرشد دون أي عقاب لحمايتك فوراً.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
                    <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                      <MessageSquare className="w-4 h-4" />
                      <span>Crisis Text Line</span>
                    </div>
                    <div className="text-base font-extrabold text-white font-mono">
                      Text "HOME" to 741741
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Free 24/7 crisis support via text message for anyone struggling with cyberbullying or anxiety.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
                    <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                      <PhoneCall className="w-4 h-4" />
                      <span>988 Lifeline</span>
                    </div>
                    <div className="text-base font-extrabold text-white font-mono">
                      Call or Text 988
                    </div>
                    <p className="text-[11px] text-slate-400">
                      National Crisis & Mental Health Lifeline. Free, confidential, 24/7 support.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* How to Talk to Parents without phone confiscation */}
          <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
              <Users className="w-4 h-4" />
              <span>{t.parentTitle}</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {t.parentIntro}
            </p>
            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs italic text-amber-200 leading-relaxed font-sans">
              {t.parentScript}
            </div>
          </div>

          {/* Evidence Checklist */}
          <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
              <Camera className="w-4 h-4" />
              <span>{t.evidenceTitle}</span>
            </div>
            <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
              <li>
                {language === 'ar'
                  ? 'لقطة شاشة واضحة تظهر اسم حساب المرسل (Username) والصورة الشخصية.'
                  : language === 'fr'
                  ? 'Capture d\'écran nette montrant le pseudo exact et la photo de profil.'
                  : 'Full screenshot showing sender’s username and profile picture.'}
              </li>
              <li>
                {language === 'ar'
                  ? 'تاريخ ووقت الرسالة وظهورهما بوضوح في أسفل المحادثة.'
                  : language === 'fr'
                  ? 'Date et heure exactes visibles sur chaque message d\'intimidation.'
                  : 'Visible timestamps and dates on every harassing message.'}
              </li>
              <li>
                {language === 'ar'
                  ? 'عدم قص أطراف الصورة أو تعديلها بالألوان لتبقى دليلاً موثوقاً به.'
                  : language === 'fr'
                  ? 'Ne rogne pas et ne modifie pas l\'image pour qu\'elle garde sa valeur de preuve.'
                  : 'Do not edit, crop, or mark up the screenshot.'}
              </li>
              <li>
                {language === 'ar'
                  ? 'الاحتفاظ بنسخة من المحادثة إلى حين مراجعتها مع شخص راشد أو إدارة المنصة.'
                  : language === 'fr'
                  ? 'Conserve la conversation dans ton téléphone avant que l\'agresseur ne la supprime.'
                  : 'Keep the message thread until an adult or counselor reviews it.'}
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
};
