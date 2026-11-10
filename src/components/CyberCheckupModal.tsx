import React, { useState } from 'react';
import { QUIZ_QUESTIONS_DATA } from '../data/quizData';
import { Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import {
  X,
  Award,
  Printer,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  CheckCircle,
  HelpCircle,
  Cpu
} from 'lucide-react';

interface CyberCheckupModalProps {
  language: Language;
  isOpen: boolean;
  onClose: () => void;
  onCertificateEarned: () => void;
}

export const CyberCheckupModal: React.FC<CyberCheckupModalProps> = ({
  language,
  isOpen,
  onClose,
  onCertificateEarned
}) => {
  const t = TRANSLATIONS[language].quiz;
  const questions = QUIZ_QUESTIONS_DATA[language] || QUIZ_QUESTIONS_DATA.en;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>(new Array(questions.length).fill(-1));
  const [isFinished, setIsFinished] = useState(false);
  const [studentName, setStudentName] = useState(
    language === 'ar' ? 'طالب الإعدادية التقنية' : language === 'fr' ? 'Élève du Collège Technique' : '8th Grade Tech Student'
  );
  const [isEditingName, setIsEditingName] = useState(false);

  if (!isOpen) return null;

  const currentQ = questions[currentQuestionIndex];

  const handleSelectOption = (optionIndex: number) => {
    const updated = [...userAnswers];
    updated[currentQuestionIndex] = optionIndex;
    setUserAnswers(updated);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsFinished(true);
      onCertificateEarned();
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleRestart = () => {
    setUserAnswers(new Array(questions.length).fill(-1));
    setCurrentQuestionIndex(0);
    setIsFinished(false);
  };

  let correctCount = 0;
  userAnswers.forEach((ans, idx) => {
    if (ans === questions[idx].correctIndex) {
      correctCount++;
    }
  });

  const scorePercent = Math.round((correctCount / questions.length) * 100);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-sm">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white leading-tight">
                {t.modalTitle}
              </h3>
              <p className="text-xs text-slate-400">
                {t.modalSubtitle}
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

        {/* Modal Body */}
        <div className="p-6">
          {!isFinished ? (
            <div className="space-y-6">
              {/* Question Progress Tracker */}
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>
                  {t.questionOf} {currentQuestionIndex + 1} / {questions.length}
                </span>
                <span className="font-semibold text-cyan-400">
                  {t.category}: {currentQ.category}
                </span>
              </div>

              {/* Progress Line */}
              <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-cyan-400 h-full transition-all duration-300"
                  style={{
                    width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`
                  }}
                />
              </div>

              {/* Scenario Context & Question */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {currentQ.scenario}
                </div>
                <h4 className="text-lg font-bold text-white leading-snug">
                  {currentQ.question}
                </h4>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((opt, oIdx) => {
                  const isSelected = userAnswers[currentQuestionIndex] === oIdx;

                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleSelectOption(oIdx)}
                      className={`w-full p-4 rounded-xl border text-left rtl:text-right text-xs sm:text-sm transition-all flex items-start gap-3 ${
                        isSelected
                          ? 'bg-cyan-500/10 border-cyan-400 text-white font-medium shadow-sm'
                          : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-850 hover:border-slate-700'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs shrink-0 mt-0.5 ${
                          isSelected
                            ? 'border-cyan-400 bg-cyan-400 text-slate-950 font-bold'
                            : 'border-slate-700 text-slate-500'
                        }`}
                      >
                        {String.fromCharCode(65 + oIdx)}
                      </div>
                      <div className="leading-relaxed">{opt}</div>
                    </button>
                  );
                })}
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                <button
                  onClick={handlePrev}
                  disabled={currentQuestionIndex === 0}
                  className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
                  <span>{t.prev}</span>
                </button>

                <button
                  onClick={handleNext}
                  disabled={userAnswers[currentQuestionIndex] === -1}
                  className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm rounded-lg flex items-center gap-1.5 transition-colors disabled:opacity-40 disabled:pointer-events-none"
                >
                  <span>
                    {currentQuestionIndex === questions.length - 1
                      ? t.submit
                      : t.next}
                  </span>
                  <ChevronRight className="w-4 h-4 rtl:rotate-180" />
                </button>
              </div>
            </div>
          ) : (
            /* Results & Certificate Screen */
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <div
                  className={`w-14 h-14 mx-auto rounded-full flex items-center justify-center ${
                    scorePercent >= 70
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                  }`}
                >
                  <Award className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-extrabold text-white">
                  {scorePercent >= 70 ? t.earnedTitle : (language === 'ar' ? 'اكتمل الاختبار' : 'Test Complete')}
                </h3>
                <p className="text-sm text-slate-300">
                  {t.scoreText}: <span className="font-bold text-cyan-400">{scorePercent}%</span> ({correctCount} / {questions.length})
                </p>
              </div>

              {/* Certificate Component (Printable) */}
              <div className="p-8 bg-slate-950 border-2 border-cyan-500/60 rounded-2xl relative shadow-2xl text-center space-y-4">
                <div className="text-[11px] font-bold text-cyan-400 uppercase tracking-widest flex items-center justify-center gap-2">
                  <Cpu className="w-4 h-4" />
                  <span>{t.certSub}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-wide uppercase">
                  {t.certTitle}
                </h2>

                <div className="text-xs text-slate-400">
                  {t.certifies}
                </div>

                <div className="py-2">
                  {isEditingName ? (
                    <div className="flex items-center justify-center gap-2">
                      <input
                        type="text"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        className="px-3 py-1 bg-slate-900 border border-cyan-400 rounded text-center text-lg font-bold text-cyan-300"
                      />
                      <button
                        onClick={() => setIsEditingName(false)}
                        className="px-2.5 py-1 text-xs bg-cyan-500 text-slate-950 font-bold rounded"
                      >
                        ✓
                      </button>
                    </div>
                  ) : (
                    <div
                      onClick={() => setIsEditingName(true)}
                      className="text-xl sm:text-2xl font-extrabold text-cyan-300 cursor-pointer hover:underline underline-offset-4"
                      title={language === 'ar' ? 'اضغط لتعديل اسمك' : 'Cliquer pour modifier votre nom'}
                    >
                      {studentName} ✎
                    </div>
                  )}
                </div>

                <p className="text-xs text-slate-300 max-w-lg mx-auto leading-relaxed">
                  {t.certDesc}
                </p>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Score: {scorePercent}%</span>
                  <span>{language === 'ar' ? 'التاريخ: نوفمبر 2026' : 'Date: 2026'}</span>
                  <span>ID: TECH-PREP-{Math.floor(Math.random() * 89999 + 10000)}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <button
                  onClick={handleRestart}
                  className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white flex items-center justify-center gap-1.5 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{t.retake}</span>
                </button>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={handlePrint}
                    className="flex-1 sm:flex-initial px-4 py-2 text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg flex items-center justify-center gap-1.5 transition-colors border border-slate-700"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>{t.print}</span>
                  </button>

                  <button
                    onClick={onClose}
                    className="flex-1 sm:flex-initial px-5 py-2 text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-lg transition-colors"
                  >
                    {t.back}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
