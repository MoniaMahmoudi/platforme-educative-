/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { TRANSLATIONS } from './i18n/translations';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SimpleConceptsSection } from './components/SimpleConceptsSection';
import { PasswordLab } from './components/PasswordLab';
import { StrangerDMSimulator } from './components/StrangerDMSimulator';
import { CyberbullyingDefense } from './components/CyberbullyingDefense';
import { SocialMediaAuditor } from './components/SocialMediaAuditor';
import { CyberCheckupModal } from './components/CyberCheckupModal';
import { EmergencySOSModal } from './components/EmergencySOSModal';
import { Footer } from './components/Footer';
import { ArrowRight, BookOpen, KeyRound, MessageSquareWarning } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('cybertech_language') as Language;
      if (saved && (saved === 'en' || saved === 'fr' || saved === 'ar')) {
        return saved;
      }
    } catch {
      // fallback
    }
    return 'fr'; // default friendly to technical prep school curriculum (Français)
  });

  const [activeTab, setActiveTab] = useState<string>('overview');
  const [completedModules, setCompletedModules] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('cybertech_completed_modules');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCheckupOpen, setIsCheckupOpen] = useState(false);
  const [isSOSOpen, setIsSOSOpen] = useState(false);

  // Sync RTL and lang attribute on document root
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    try {
      localStorage.setItem('cybertech_language', language);
    } catch {
      // ignore
    }
  }, [language]);

  useEffect(() => {
    try {
      localStorage.setItem('cybertech_completed_modules', JSON.stringify(completedModules));
    } catch {
      // ignore
    }
  }, [completedModules]);

  const handleToggleComplete = (moduleId: string) => {
    setCompletedModules((prev) => {
      if (prev.includes(moduleId)) {
        return prev.filter((id) => id !== moduleId);
      } else {
        return [...prev, moduleId];
      }
    });
  };

  const handleSelectTab = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const t = TRANSLATIONS[language];

  return (
    <div
      dir={language === 'ar' ? 'rtl' : 'ltr'}
      className={`min-h-screen text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950 ${
        language === 'ar' ? 'font-arabic' : 'font-sans'
      }`}
    >
      {/* Top Navigation */}
      <Header
        language={language}
        onChangeLanguage={setLanguage}
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onOpenCheckup={() => setIsCheckupOpen(true)}
        onOpenSOS={() => setIsSOSOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'overview' && (
          <div>
            <Hero
              language={language}
              completedModules={completedModules}
              onSelectTab={handleSelectTab}
              onOpenCheckup={() => setIsCheckupOpen(true)}
            />

            {/* Quick interactive highlights on overview */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
              {/* Highlight 1: Simple Concepts & Rules */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{t.conceptsSection.badge}</span>
                  </div>
                  <button
                    onClick={() => handleSelectTab('concepts')}
                    className="text-xs font-bold text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    <span>{t.nav.concepts}</span>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </button>
                </div>
                <SimpleConceptsSection
                  language={language}
                  onExploreModule={handleSelectTab}
                />
              </div>

              {/* Highlight 2: Password Lab Quick Jump */}
              <div className="space-y-4 pt-12 border-t border-slate-800/80">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                    <KeyRound className="w-3.5 h-3.5" />
                    <span>{t.passwords.badge}</span>
                  </div>
                  <button
                    onClick={() => handleSelectTab('passwords')}
                    className="text-xs font-bold text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    <span>{t.nav.passwords}</span>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </button>
                </div>
                <PasswordLab
                  language={language}
                  onComplete={() => handleToggleComplete('passwords')}
                  isCompleted={completedModules.includes('passwords')}
                />
              </div>

              {/* Highlight 3: Stranger DM Radar Quick Jump */}
              <div className="space-y-4 pt-12 border-t border-slate-800/80">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <MessageSquareWarning className="w-3.5 h-3.5" />
                    <span>{t.strangers.badge}</span>
                  </div>
                  <button
                    onClick={() => handleSelectTab('stranger-dms')}
                    className="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1"
                  >
                    <span>{t.nav.strangers}</span>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </button>
                </div>
                <StrangerDMSimulator
                  language={language}
                  onComplete={() => handleToggleComplete('stranger-dms')}
                  isCompleted={completedModules.includes('stranger-dms')}
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'concepts' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <SimpleConceptsSection
              language={language}
              onExploreModule={handleSelectTab}
            />
          </div>
        )}

        {activeTab === 'passwords' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <PasswordLab
              language={language}
              onComplete={() => handleToggleComplete('passwords')}
              isCompleted={completedModules.includes('passwords')}
            />
          </div>
        )}

        {activeTab === 'stranger-dms' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <StrangerDMSimulator
              language={language}
              onComplete={() => handleToggleComplete('stranger-dms')}
              isCompleted={completedModules.includes('stranger-dms')}
            />
          </div>
        )}

        {activeTab === 'cyberbullying' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <CyberbullyingDefense
              language={language}
              onComplete={() => handleToggleComplete('cyberbullying')}
              isCompleted={completedModules.includes('cyberbullying')}
              onOpenSOS={() => setIsSOSOpen(true)}
            />
          </div>
        )}

        {activeTab === 'social-media' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <SocialMediaAuditor
              language={language}
              onComplete={() => handleToggleComplete('social-media')}
              isCompleted={completedModules.includes('social-media')}
            />
          </div>
        )}
      </main>

      {/* Modals */}
      <CyberCheckupModal
        language={language}
        isOpen={isCheckupOpen}
        onClose={() => setIsCheckupOpen(false)}
        onCertificateEarned={() => {
          if (!completedModules.includes('quiz')) {
            setCompletedModules((prev) => [...prev, 'quiz']);
          }
        }}
      />

      <EmergencySOSModal
        language={language}
        isOpen={isSOSOpen}
        onClose={() => setIsSOSOpen(false)}
      />

      {/* Footer */}
      <Footer
        language={language}
        onSelectTab={handleSelectTab}
        onOpenSOS={() => setIsSOSOpen(true)}
        onOpenCheckup={() => setIsCheckupOpen(true)}
      />
    </div>
  );
}
