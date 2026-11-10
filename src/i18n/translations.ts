import { Language, ConceptTip } from '../types';

export interface TranslationDictionary {
  appName: string;
  appSubtitle: string;
  schoolContext: string;
  badgeGrade: string;
  nav: {
    overview: string;
    concepts: string;
    passwords: string;
    strangers: string;
    bullying: string;
    social: string;
    sos: string;
    checkup: string;
  };
  hero: {
    tagline: string;
    title: string;
    description: string;
    progressTitle: string;
    progressCount: string;
    enterBtn: string;
    completed: string;
    checkupBtn: string;
  };
  conceptsSection: {
    badge: string;
    title: string;
    subtitle: string;
    analogyTitle: string;
    ruleTitle: string;
    exampleTitle: string;
    interactiveTitle: string;
    tryIt: string;
    correct: string;
    incorrect: string;
  };
  passwords: {
    badge: string;
    title: string;
    subtitle: string;
    markComplete: string;
    completed: string;
    testInputLabel: string;
    entropy: string;
    placeholder: string;
    presetsLabel: string;
    crackTimeLabel: string;
    crackTimeDesc: string;
    trapDetected: string;
    defenseCriteria: string;
    ruleLength: string;
    ruleUpper: string;
    ruleNumbers: string;
    ruleSymbols: string;
    passphraseTitle: string;
    passphraseBadge: string;
    passphraseDesc: string;
    passphraseBtn: string;
    passphraseCopied: string;
    simTitle: string;
    simDesc: string;
    twoFaToggle: string;
    twoFaActive: string;
    twoFaDisabled: string;
    simBtn: string;
    simBreaching: string;
    simPrevented: string;
    simPreventedDesc: string;
    simHijacked: string;
    simHijackedDesc: string;
    friendTrapTitle: string;
    friendTrapP1: string;
    friendTrapP2: string;
    friendTrapTip: string;
  };
  strangers: {
    badge: string;
    title: string;
    subtitle: string;
    markComplete: string;
    completed: string;
    warningNotice: string;
    selectMove: string;
    expertVerdictSafe: string;
    expertVerdictRisk: string;
    takeawayLabel: string;
    tryAgain: string;
  };
  bullying: {
    badge: string;
    title: string;
    subtitle: string;
    markComplete: string;
    completed: string;
    stopTitle: string;
    stopSubtitle: string;
    stopS_title: string;
    stopS_desc: string;
    stopT_title: string;
    stopT_desc: string;
    stopO_title: string;
    stopO_desc: string;
    stopP_title: string;
    stopP_desc: string;
    arenaTitle: string;
    selectAction: string;
    analysisLabel: string;
    insightLabel: string;
    scriptsTitle: string;
    scriptsSubtitle: string;
    copyScript: string;
    copied: string;
  };
  social: {
    badge: string;
    title: string;
    subtitle: string;
    markComplete: string;
    completed: string;
    progressLabel: string;
    allFound: string;
    clickPins: string;
    inspectorTitle: string;
    noItemSelected: string;
    noItemDesc: string;
    dangerLabel: string;
    fixLabel: string;
    timeMachineTitle: string;
    timeMachineDesc: string;
    tmTab1: string;
    tmTab2: string;
    tmTab3: string;
  };
  quiz: {
    modalTitle: string;
    modalSubtitle: string;
    questionOf: string;
    category: string;
    prev: string;
    next: string;
    submit: string;
    earnedTitle: string;
    scoreText: string;
    certTitle: string;
    certSub: string;
    certifies: string;
    certDesc: string;
    retake: string;
    print: string;
    back: string;
  };
  sos: {
    title: string;
    subtitle: string;
    helplineTitle: string;
    parentTitle: string;
    parentIntro: string;
    parentScript: string;
    evidenceTitle: string;
    close: string;
  };
  footer: {
    desc: string;
    privacy: string;
    standards: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  en: {
    appName: "CyberTech Prep",
    appSubtitle: "Technical Preparatory School Cybersecurity Lab",
    schoolContext: "Technical Preparatory School · 8th Grade Technology Workshop",
    badgeGrade: "Grade 8 · Tech Prep Workshop",
    nav: {
      overview: "Overview",
      concepts: "Simple Concepts",
      passwords: "Password Lab",
      strangers: "Stranger DM Radar",
      bullying: "Bullying Defense",
      social: "Social Media Audit",
      sos: "SOS Help",
      checkup: "Certification Checkup"
    },
    hero: {
      tagline: "Technical Preparatory School · Applied Digital Defense",
      title: "Master digital safety in the tech workshop, on gaming servers, and on social media.",
      description: "Designed for 8th grade technical preparatory students learning computer mechanics, electronics, and digital tools. Build real reflexes to defend against password leaks, fake stranger DMs, online intimidation, and privacy breaches.",
      progressTitle: "Technical Readiness Progress",
      progressCount: "Modules Completed",
      enterBtn: "Open Lab",
      completed: "Completed",
      checkupBtn: "Take Tech Certification"
    },
    conceptsSection: {
      badge: "Core Technical Notions · Explained Simply",
      title: "Cybersecurity Concepts Made Simple",
      subtitle: "Just like safety goggles in the school technical workshop, digital security has simple physical rules. Here is how each concept works in plain language:",
      analogyTitle: "Real-Life Workshop Analogy",
      ruleTitle: "The 3-Second Golden Rule",
      exampleTitle: "Everyday 8th-Grade Example",
      interactiveTitle: "Quick Reflex Check",
      tryIt: "Test Your Instinct",
      correct: "Correct! Outstanding technical reflex.",
      incorrect: "Watch out! That exposes your system."
    },
    passwords: {
      badge: "Mission 01 · Cryptographic Defense",
      title: "Password Strength Analyzer & 2FA Simulator",
      subtitle: "A weak password is like a cheap plastic lock on your school locker. See how fast automated brute-force attacks crack common 8th-grade passwords.",
      markComplete: "Mark Lab Complete",
      completed: "Lab Completed ✓",
      testInputLabel: "Test Password Strength",
      entropy: "Mathematical Entropy",
      placeholder: "Type any password to test...",
      presetsLabel: "Test Presets:",
      crackTimeLabel: "Estimated GPU Crack Time",
      crackTimeDesc: "Calculated for a cluster testing 100 billion combinations per second.",
      trapDetected: "8th-Grade Common Vulnerability:",
      defenseCriteria: "Defense Checklist:",
      ruleLength: "12+ Characters",
      ruleUpper: "Uppercase Letters (A-Z)",
      ruleNumbers: "Numbers (0-9)",
      ruleSymbols: "Symbols (!, #, $, %)",
      passphraseTitle: "The 4-Word Passphrase Method",
      passphraseBadge: "Easy to Remember · Impossible to Crack",
      passphraseDesc: "Instead of weird scrambles you forget, pick 4 unrelated words (like 'Velvet-Cactus-Orbit-Lantern7#'). High mathematical length makes computers choke while humans picture a vivid story.",
      passphraseBtn: "Generate Tech Passphrase",
      passphraseCopied: "Copied to clipboard!",
      simTitle: "Interactive 2FA Defense Simulator",
      simDesc: "What happens when an attacker finds your password in a database leak? Test the difference Two-Factor Authentication makes:",
      twoFaToggle: "Two-Factor Authentication (2FA)",
      twoFaActive: "Active (Key + Phone Code)",
      twoFaDisabled: "Disabled (Password only)",
      simBtn: "Simulate Hacker Login Attempt",
      simBreaching: "Attacker attempting authentication...",
      simPrevented: "BREACH BLOCKED BY 2FA!",
      simPreventedDesc: "The hacker had your password, but failed because they did not have your physical device with the 6-digit confirmation code. Your account stayed 100% safe.",
      simHijacked: "ACCOUNT HIJACKED!",
      simHijackedDesc: "Without 2FA, the hacker logged right in, changed your recovery email, kicked you out, and sent malicious links to all your friends.",
      friendTrapTitle: "The 'Best Friend' Password Trap",
      friendTrapP1: "Over 40% of middle school students admit to sharing passwords with a friend for game accounts or streak maintenance.",
      friendTrapP2: "Why it fails: phones get passed around, friendships evolve, or a heated argument leads to deleted chats or changed credentials.",
      friendTrapTip: "Pro tip: 'I keep my passwords between me and my parents' is a mature, drama-free technical boundary."
    },
    strangers: {
      badge: "Mission 02 · Social Engineering & DM Defense",
      title: "Stranger DM Red Flag Radar",
      subtitle: "Online impostors never introduce themselves as scammers. They pose as gamers, new classmates, or moderators. Learn to spot their psychological tricks.",
      markComplete: "Mark Lab Complete",
      completed: "Lab Completed ✓",
      warningNotice: "Notice: This sender is not in your verified school contacts.",
      selectMove: "What is your tactical move? Choose below:",
      expertVerdictSafe: "Cybersecurity Expert Verdict: SAFE MOVE",
      expertVerdictRisk: "Warning: RISKY OR DANGEROUS ACTION",
      takeawayLabel: "Tactical Defense Rule: ",
      tryAgain: "Try Another Action"
    },
    bullying: {
      badge: "Mission 03 · Group Dynamics & Social Shielding",
      title: "Cyberbullying Defense & Upstander Arena",
      subtitle: "Online harassment thrives on silence and mob reactions. Learn the S.T.O.P. protocol, how to interrupt group chat harassment, and how to preserve legal evidence.",
      markComplete: "Mark Lab Complete",
      completed: "Lab Completed ✓",
      stopTitle: "The S.T.O.P. Tactical Response Protocol",
      stopSubtitle: "Standard cyber safety protocol taught in technical schools",
      stopS_title: "Screenshot Evidence",
      stopS_desc: "Capture full screen with usernames, timestamps, and exact messages before blocking. Do not edit or crop.",
      stopT_title: "Talk to a Trusted Anchor",
      stopT_desc: "Inform a teacher, parent, or school advisor. Bullies count on you staying quiet out of fear.",
      stopO_title: "Offline De-escalation",
      stopO_desc: "Do not feed the troll in the comments. Algorithm engines boost angry replies by 10x.",
      stopP_title: "Protect & Block",
      stopP_desc: "Block offender handles, lock your DMs to friends only, and submit an in-app safety report.",
      arenaTitle: "Interactive Scenario Arena: Upstander vs Bystander",
      selectAction: "Select Your Response:",
      analysisLabel: "Consequence Analysis: ",
      insightLabel: "Technical & Psychological Insight: ",
      scriptsTitle: "Upstander Field Scripts (Copy-Paste Ready)",
      scriptsSubtitle: "Proven, calm sentences to defuse group chat cruelty without drawing fire onto yourself.",
      copyScript: "Copy Script",
      copied: "Copied!"
    },
    social: {
      badge: "Mission 04 · Digital Footprint Hygiene",
      title: "Social Media Privacy & Profile Auditor",
      subtitle: "In the technical workshop, careless tool handling causes injuries. Online, careless metadata leaking causes privacy breaches. Audit this mock 8th-grade profile for 6 stealth leaks.",
      markComplete: "Mark Lab Complete",
      completed: "Lab Completed ✓",
      progressLabel: "Inspection Progress",
      allFound: "All 6 Leaks Detected!",
      clickPins: "Click highlighted pins on Alex's profile to inspect:",
      inspectorTitle: "Vulnerability Inspector Dossier",
      noItemSelected: "No Item Selected",
      noItemDesc: "Click any pin on the profile above to review the technical risk and exact fix.",
      dangerLabel: "Why this is dangerous:",
      fixLabel: "Recommended Technical Fix:",
      timeMachineTitle: "Digital Footprint Time Machine",
      timeMachineDesc: "The internet never forgets. See how public middle school posts look when you are 16 applying for teams or 18 applying for engineering apprenticeships.",
      tmTab1: "8th Grade Now",
      tmTab2: "Age 16 (Team Coach)",
      tmTab3: "Age 18 (Tech Recruiter)"
    },
    quiz: {
      modalTitle: "8th Grade Cyber Certification Checkup",
      modalSubtitle: "10 Technical Scenarios · Passing Score: 70%",
      questionOf: "Question",
      category: "Topic",
      prev: "Previous",
      next: "Next Question",
      submit: "Submit Checkup",
      earnedTitle: "Certification Earned!",
      scoreText: "Your Final Score",
      certTitle: "Cyber Defense Certification",
      certSub: "Official Technical Preparatory School Credential",
      certifies: "This certifies that",
      certDesc: "has demonstrated verified technical proficiency in password cryptography, phishing defense, upstander cyberbullying intervention, and social footprint security.",
      retake: "Retake Checkup",
      print: "Print / Save PDF",
      back: "Back to Lab"
    },
    sos: {
      title: "Emergency Cyber Support & Crisis Toolkit",
      subtitle: "You are not in trouble. Confidential resources and adult support are available right now.",
      helplineTitle: "Free, Confidential 24/7 Helplines",
      parentTitle: "How to Tell Parents (Without Losing Your Device)",
      parentIntro: "Students often avoid reporting cyber incidents because they fear losing phone or computer privileges. Use this exact opening script:",
      parentScript: "\"Hey Mom / Dad, something uncomfortable happened online that I didn't ask for. I knew the smart thing was to show you right away so we can block and report it together. Please don't take my device away — I came to you because I need your help.\"",
      evidenceTitle: "Evidence Checklist Before You Block",
      close: "Close Window"
    },
    footer: {
      desc: "An applied cybersecurity and digital citizenship laboratory for 8th-grade technical preparatory school students.",
      privacy: "Zero personal data collection · All simulations run 100% locally in your browser sandbox.",
      standards: "Aligned with Technical Education & Digital Citizenship Curriculum"
    }
  },
  fr: {
    appName: "CyberTech Prépa",
    appSubtitle: "Laboratoire de Cybersécurité - Collège Préparatoire Technique",
    schoolContext: "Collège Préparatoire Technique · Atelier Technologie & Numérique 8ème",
    badgeGrade: "8ème Année · Atelier Technique",
    nav: {
      overview: "Accueil",
      concepts: "Notions Simples",
      passwords: "Mots de Passe",
      strangers: "Radar Inconnus DM",
      bullying: "Anti-Cyberharcèlement",
      social: "Audit Réseaux Sociaux",
      sos: "Aide SOS",
      checkup: "Test de Certification"
    },
    hero: {
      tagline: "Collège Préparatoire Technique · Défense Numérique Pratique",
      title: "Protège tes données personnelles, déjoue les arnaques et stoppe le cyberharcèlement.",
      description: "Conçu pour les élèves de 8ème / collège technique qui manipulent l'informatique, les ateliers et les outils digitaux. Développe les vrais réflexes pour verrouiller tes mots de passe, repérer les faux profils et sécuriser ton empreinte numérique.",
      progressTitle: "Progression de l'Atelier",
      progressCount: "Modules Complétés",
      enterBtn: "Ouvrir l'Atelier",
      completed: "Validé",
      checkupBtn: "Passer la Certification"
    },
    conceptsSection: {
      badge: "Notions Essentielles · Expliquées Simplement",
      title: "Les Concepts Clés de la Cybersécurité en Clair",
      subtitle: "Comme les lunettes de protection à l'atelier technique, la sécurité numérique repose sur des règles de bon sens simples. Voici les bases sans jargon :",
      analogyTitle: "Analogie Concrète d'Atelier",
      ruleTitle: "La Règle d'Or en 3 Secondes",
      exampleTitle: "Exemple Typique d'un Élève de 8ème",
      interactiveTitle: "Test Ton Réflexe",
      tryIt: "Fais le bon choix",
      correct: "Bravo ! Réflexe de pro de la sécurité.",
      incorrect: "Attention ! Cette action met en danger ton compte."
    },
    passwords: {
      badge: "Mission 01 · Cryptographie Pratique",
      title: "Laboratoire Mots de Passe & Bouclier 2FA",
      subtitle: "Un mot de passe faible, c'est comme un cadenas en plastique sur ton casier d'atelier. Découvre à quelle vitesse les ordinateurs cassent les codes d'élèves.",
      markComplete: "Valider ce module",
      completed: "Module Validé ✓",
      testInputLabel: "Tester la robustesse d'un mot de passe",
      entropy: "Entropie Mathématique",
      placeholder: "Tape un mot de passe pour tester...",
      presetsLabel: "Exemples types :",
      crackTimeLabel: "Temps estimé pour casser le code (GPU)",
      crackTimeDesc: "Calculé pour un robot testant 100 milliards de combinaisons par seconde.",
      trapDetected: "Piège fréquent chez les collégiens :",
      defenseCriteria: "Critères de défense :",
      ruleLength: "12+ Caractères",
      ruleUpper: "Majuscules (A-Z)",
      ruleNumbers: "Chiffres (0-9)",
      ruleSymbols: "Symboles (!, #, $, %)",
      passphraseTitle: "La Méthode des 4 Mots Aléatoires (Passphrase)",
      passphraseBadge: "Facile à mémoriser · Impossible à casser",
      passphraseDesc: "Au lieu d'un charabia impossible à retenir, assemble 4 mots sans rapport (ex: 'Fusée-Cactus-Nuage-Clavier7!'). La longueur bloque les robots alors que ton cerveau imagine une scène mémorable.",
      passphraseBtn: "Générer une Passphrase Robuste",
      passphraseCopied: "Copié dans le presse-papier !",
      simTitle: "Simulateur Interactif de Double Authentification (2FA)",
      simDesc: "Que se passe-t-il si un pirate vole ton mot de passe lors d'une fuite de données ? Teste l'effet de la double authentification :",
      twoFaToggle: "Double Authentification (2FA)",
      twoFaActive: "Activée (Clé + Code Téléphone)",
      twoFaDisabled: "Désactivée (Mot de passe seul)",
      simBtn: "Simuler l'attaque d'un pirate",
      simBreaching: "Tentative de piratage en cours...",
      simPrevented: "INTRUSION BLOQUÉE PAR LA 2FA !",
      simPreventedDesc: "Le pirate connaissait ton mot de passe, mais il n'a pas pu entrer car il ne possède pas ton téléphone avec le code à 6 chiffres. Ton compte est resté 100% protégé.",
      simHijacked: "COMPTE PIRATÉ !",
      simHijackedDesc: "Sans 2FA, le pirate s'est connecté directement, a modifié l'adresse de secours, a verrouillé ton accès et a envoyé des arnaques à tous tes amis.",
      friendTrapTitle: "Le Piège du 'Meilleur Ami'",
      friendTrapP1: "Plus de 40% des collégiens partagent leurs identifiants avec un ami pour garder les flammes Snapchat ou partager des jeux.",
      friendTrapP2: "Pourquoi ça tourne mal : un téléphone prêté, une dispute de groupe ou une indiscrétion et tes messages privés sont lus ou supprimés.",
      friendTrapTip: "Conseil de pro : 'Je ne donne mes mots de passe qu'à mes parents' est une règle claire qui évite toutes les embrouilles."
    },
    strangers: {
      badge: "Mission 02 · Ingénierie Sociale & Messages d'Inconnus",
      title: "Radar Anti-Pièges des Messages d'Inconnus (DM)",
      subtitle: "Sur Roblox, Discord, Insta ou Snap, les imposteurs se font passer pour des joueurs sympas ou de futurs élèves. Apprends à démasquer leurs techniques de manipulation.",
      markComplete: "Valider ce module",
      completed: "Module Validé ✓",
      warningNotice: "Alerte : Cet expéditeur ne fait pas partie de tes contacts vérifiés.",
      selectMove: "Quelle est ta réaction ? Choisis ci-dessous :",
      expertVerdictSafe: "Avis de l'Expert Cyber : ACTION SÉCURISÉE",
      expertVerdictRisk: "Alerte : DANGER OU ACTION À RISQUE",
      takeawayLabel: "Règle de défense : ",
      tryAgain: "Essayer une autre réponse"
    },
    bullying: {
      badge: "Mission 03 · Dynamique de Groupe & Défense Collective",
      title: "Défense Anti-Cyberharcèlement & Espace Témoin Actif",
      subtitle: "Le cyberharcèlement se nourrit du silence et des rires complices. Découvre le protocole S.T.O.P., comment désamorcer un groupe et comment figer les preuves.",
      markComplete: "Valider ce module",
      completed: "Module Validé ✓",
      stopTitle: "Le Protocole Tactique S.T.O.P.",
      stopSubtitle: "Méthode d'urgence enseignée aux élèves",
      stopS_title: "Screenshots des Preuves",
      stopS_desc: "Fais des captures d'écran complètes avec date, heure et pseudo visible avant de bloquer. Ne rogne rien.",
      stopT_title: "Tourne-toi vers un Adulte",
      stopT_desc: "Préviens un prof, tes parents ou la vie scolaire. Les harceleurs parient sur ta peur d'en parler.",
      stopO_title: "Offline : Ne Réponds Pas",
      stopO_desc: "Ne surenchéris pas dans les commentaires. L'algorithme donne 10x plus de visibilité aux disputes.",
      stopP_title: "Protège-toi & Bloque",
      stopP_desc: "Bloque les comptes toxiques, restreins tes messages aux amis vérifiés et signale sur la plateforme.",
      arenaTitle: "Arène Interactive : Témoin Passif vs Témoin Actif (Upstander)",
      selectAction: "Choisis ton intervention :",
      analysisLabel: "Analyse des conséquences : ",
      insightLabel: "Éclairage Technique & Psychologique : ",
      scriptsTitle: "Phrases Prêtes à Copier pour Désamorcer",
      scriptsSubtitle: "Des phrases calmes et efficaces à poster dans un groupe pour stopper les moqueries sans te mettre en danger.",
      copyScript: "Copier la phrase",
      copied: "Copié !"
    },
    social: {
      badge: "Mission 04 · Hygiène de l'Empreinte Numérique",
      title: "Audit de Confidentialité d'un Profil Social",
      subtitle: "À l'atelier technique, une négligence avec un outil blesse les mains. En ligne, une négligence sur tes photos livre ta vie privée. Détecte les 6 fuites d'Alex !",
      markComplete: "Valider ce module",
      completed: "Module Validé ✓",
      progressLabel: "Progression de l'audit",
      allFound: "Les 6 fuites ont été trouvées !",
      clickPins: "Clique sur les repères du profil d'Alex pour analyser les risques :",
      inspectorTitle: "Dossier d'Analyse des Risques",
      noItemSelected: "Aucun élément sélectionné",
      noItemDesc: "Clique sur un repère du profil ci-contre pour afficher les dangers et la correction.",
      dangerLabel: "Pourquoi c'est dangereux :",
      fixLabel: "Correction recommandée :",
      timeMachineTitle: "Machine à Voyager dans le Temps (Empreinte Numérique)",
      timeMachineDesc: "Internet n'oublie jamais. Découvre comment un post d'aujourd'hui sera vu à 16 ans par ton coach sportif ou à 18 ans par un recruteur technique.",
      tmTab1: "Aujourd'hui (8ème)",
      tmTab2: "À 16 ans (Coach Sportif)",
      tmTab3: "À 18 ans (Recruteur Pro)"
    },
    quiz: {
      modalTitle: "Contrôle de Certification Cyber 8ème",
      modalSubtitle: "10 Scénarios Concrets · Note de Passage : 70%",
      questionOf: "Question",
      category: "Thème",
      prev: "Précédent",
      next: "Question Suivante",
      submit: "Valider le Test",
      earnedTitle: "Certification Obtenue !",
      scoreText: "Ta note finale",
      certTitle: "Certificat de Défense Numérique",
      certSub: "Attestation Officielle du Collège Préparatoire Technique",
      certifies: "Ce certificat atteste que l'élève",
      certDesc: "a validé avec succès ses compétences en cryptographie des mots de passe, détection des arnaques et messages d'inconnus, réaction citoyenne face au cyberharcèlement et protection de l'empreinte numérique.",
      retake: "Recommencer le test",
      print: "Imprimer / Enregistrer PDF",
      back: "Retour à l'atelier"
    },
    sos: {
      title: "Boîte à Outils d'Urgence & Contacts d'Aide",
      subtitle: "Tu n'as rien fait de mal. Des professionnels et des adultes de confiance sont là pour t'aider 24h/24.",
      helplineTitle: "Numéros d'Aide Gratuits et Anonymes",
      parentTitle: "Comment en parler à ses parents (sans se faire confisquer son tel)",
      parentIntro: "Beaucoup d'élèves n'osent pas parler de harcèlement par peur qu'on leur retire leur téléphone. Utilise exactement cette phrase d'introduction :",
      parentScript: "\"Papa / Maman, il m'est arrivé un truc pas normal en ligne que je n'ai pas cherché. Je viens vous le montrer tout de suite pour qu'on le bloque et qu'on le signale ensemble. S'il vous plaît, ne me privez pas de téléphone : je viens vous voir justement parce que j'ai besoin de votre aide.\"",
      evidenceTitle: "Checklist des Preuves Avant de Bloquer",
      close: "Fermer"
    },
    footer: {
      desc: "Plateforme éducative d'apprentissage de la cybersécurité et de la citoyenneté numérique pour les élèves de collège préparatoire technique.",
      privacy: "Zéro collecte de données personnelles · Tous les tests et simulations tournent à 100% dans la mémoire locale de ton navigateur.",
      standards: "Conforme aux programmes d'Éducation aux Médias et à la Citoyenneté Numérique"
    }
  },
  ar: {
    appName: "سايبر تك إعدادي",
    appSubtitle: "مختبر الأمن السيبراني للمدارس الإعدادية التقنية",
    schoolContext: "المدرسة الإعدادية التقنية · ورشة التكنولوجيا والرقميات - السنة الثامنة",
    badgeGrade: "السنة الثامنة · الورشة التقنية",
    nav: {
      overview: "الرئيسية",
      concepts: "مفاهيم مبسطة",
      passwords: "مختبر كلمات المرور",
      strangers: "رادار رسائل الغرباء",
      bullying: "مكافحة التنمر الإلكتروني",
      social: "تدقيق الخصوصية",
      sos: "طوارئ ومساعدة",
      checkup: "اختبار الشهادة"
    },
    hero: {
      tagline: "المدرسة الإعدادية التقنية · الدفاع الرقمي التطبيقي",
      title: "احمِ بياناتك الشخصية، اكشف الخداع وأوقف التنمر الإلكتروني بثقة.",
      description: "منصة مصممة خصيصاً لطلاب السنة الثامنة بالإعداديات التقنية الذين يتعلمون أدوات الحاسوب وورشات التكنولوجيا. اكتشف القواعد الذهبية لحماية حساباتك، صد الغرباء، وتأمين بصمتك الرقمية بأمثلة بسيطة من واقعك.",
      progressTitle: "تقدم الورشة التقنية",
      progressCount: "وحدات مكتملة",
      enterBtn: "دخول المختبر",
      completed: "مكتمل ✓",
      checkupBtn: "خوض اختبار الشهادة"
    },
    conceptsSection: {
      badge: "مفاهيم أساسية · مشروحة بكل بساطة",
      title: "مفاهيم الأمن السيبراني بأسلوب سهل وواضح",
      subtitle: "تماماً مثل نظارات الأمان في ورشة التكنولوجيا، يحتاج استخدام الإنترنت إلى قواعد بديهية لحمايتك. إليك أهم المفاهيم بأمثلة ملموسة من حياتك اليومية:",
      analogyTitle: "تشبيه بسيط من الورشة والواقع",
      ruleTitle: "القاعدة الذهبية في 3 ثوانٍ",
      exampleTitle: "مثال حقيقي لطالب في الصف الثامن",
      interactiveTitle: "اختبر ردة فعلك السريعة",
      tryIt: "اختر التصرف السليم",
      correct: "أحسنت! هذا هو الوعي الأمني الصحيح.",
      incorrect: "انتبه! هذا التصرف قد يعرض حسابك للاختراق."
    },
    passwords: {
      badge: "المهمة 01 · التشفير العملي",
      title: "مختبر قوة كلمة المرور والتحقق بخطوتين (2FA)",
      subtitle: "كلمة المرور الضعيفة تشبه قفلاً بلاستيكياً رخيصاً على خزانة الورشة. شاهد كيف تكسر برامج القراصنة الكلمات البسيطة في أجزاء من الثانية.",
      markComplete: "تأكيد إكمال المختبر",
      completed: "تم إكمال المختبر ✓",
      testInputLabel: "اختبر قوة أي كلمة مرور الآن",
      entropy: "الإنتروبيا الرياضية (المتانة)",
      placeholder: "اكتب أي كلمة مرور لتجربتها...",
      presetsLabel: "أمثلة شائعة للتجربة:",
      crackTimeLabel: "الوقت المقدر لكسر الكلمة بواسطة كروت المعالجة (GPU)",
      crackTimeDesc: "محسوب لنظام آلي يجرب 100 مليار احتمال في الثانية الواحدة.",
      trapDetected: "فخ شائع يقع فيه طلاب الإعدادي:",
      defenseCriteria: "معايير الحماية القوية:",
      ruleLength: "12 حرفاً فأكثر",
      ruleUpper: "حروف كبيرة (A-Z)",
      ruleNumbers: "أرقام (0-9)",
      ruleSymbols: "رموز خاصة (!, #, $, %)",
      passphraseTitle: "طريقة الجملة السرية (4 كلمات عشوائية)",
      passphraseBadge: "سهلة الحفظ · مستحيلة الكسر",
      passphraseDesc: "بدلاً من كتابة رموز معقدة تنساها بسرعة، اجمع 4 كلمات لا علاقة بينها (مثل: 'صاروخ-صبار-قمر-مفتاح7!'). طول الكلمات يجعل الحواسيب تعجز عن تخمينها، بينما يتذكرها عقلك بسهولة.",
      passphraseBtn: "توليد جملة سرية تقنية",
      passphraseCopied: "تم النسخ إلى الحافظة!",
      simTitle: "محاكي التحقق بخطوتين (2FA)",
      simDesc: "ماذا يحدث لو تسربت كلمة مرورك في اختراق لموقع شهير؟ شاهد الفرق الهائل الذي تصنعه ميزة التحقق بخطوتين:",
      twoFaToggle: "التحقق بخطوتين (2FA)",
      twoFaActive: "مفعلة (مفتاح + رمز الهاتف)",
      twoFaDisabled: "معطلة (كلمة المرور فقط)",
      simBtn: "محاكاة هجوم مخترق على حسابك",
      simBreaching: "المخترق يحاول تسجيل الدخول الآن...",
      simPrevented: "تم صد الاختراق بنجاح بواسطة 2FA!",
      simPreventedDesc: "حتى لو عرف المخترق كلمة مرورك، لم يستطع الدخول لأنه لا يملك هاتفك لإدخال الرمز المكون من 6 أرقام. بقي حسابك آمناً 100%.",
      simHijacked: "تم الاستيلاء على الحساب بالكامل!",
      simHijackedDesc: "لعدم تفعيل 2FA، دخل المخترق فوراً، وغير بريد الاسترداد، وطردك من حسابك وبدأ يرسل رسائل احتيالية لكل أصدقائك.",
      friendTrapTitle: "فخ 'مشاركة الكلمة مع أعز صديق'",
      friendTrapP1: "أكثر من 40% من طلاب الإعدادي يعطون كلمات سرهم لأصدقائهم للحفاظ على السناب ستريك أو ألعاب الفيديو.",
      friendTrapP2: "لماذا ينتهي ذلك بمشكلة؟ قد يقع الهاتف في يد شخص آخر، أو تتغير الصداقات بعد شجار فيتم حذف محادثاتك أو التلاعب بحسابك.",
      friendTrapTip: "نصيحة الخبراء: 'كلمات سري لا أشاركها إلا مع والديّ' هي قاعدة ناضجة تحميك من أي إحراج."
    },
    strangers: {
      badge: "المهمة 02 · الهندسة الاجتماعية ورسائل الغرباء",
      title: "رادار كشف مصائد الغرباء في المحادثات (DM)",
      subtitle: "المحتالون عبر الإنترنت لا يقولون إنهم أشرار! بل يتظاهرون بأنهم زملاء في المدرسة أو يقدمون شحنات ألعاب مجانية. تعلم كشف ألاعيبهم النفسية.",
      markComplete: "تأكيد إكمال المختبر",
      completed: "تم إكمال المختبر ✓",
      warningNotice: "تنبيه: هذا المرسل ليس ضمن قائمة جهات اتصالك الموثوقة بالمدرسة.",
      selectMove: "ما هو تصرفك التكتيكي؟ اختر من الخيارات التالية:",
      expertVerdictSafe: "تقييم خبير الأمن: تصرف آمن وسليم 100%",
      expertVerdictRisk: "تحذير: تصرف خطير أو محفوف بالمخاطر",
      takeawayLabel: "القاعدة الذهبية: ",
      tryAgain: "جرب خياراً آخر"
    },
    bullying: {
      badge: "المهمة 03 · التعامل الجماعي والدفاع الاجتماعي",
      title: "مكافحة التنمر الإلكتروني وميدان الشاهد الإيجابي",
      subtitle: "التنمر الإلكتروني يتغذى على الصمت وتفاعل الجمهور. تعلم بروتوكول S.T.O.P. وكيفية نزع فتيل النزاعات وتوثيق الأدلة قانونياً.",
      markComplete: "تأكيد إكمال المختبر",
      completed: "تم إكمال المختبر ✓",
      stopTitle: "بروتوكول S.T.O.P. للتعامل التكتيكي السريع",
      stopSubtitle: "البروتوكول المعتمد للسلامة الرقمية في المدارس التقنية",
      stopS_title: "التقاط الأدلة (Screenshots)",
      stopS_desc: "التقط صور شاشة كاملة تظهر اسم الحساب والتاريخ والوقت والرسائل بوضوح قبل الحظر. لا تقص الصورة.",
      stopT_title: "التحدث لشخص راشد موثوق (Talk)",
      stopT_desc: "أخبر والديك أو مرشد المدرسة. المتنمرون يعتمدون على خوفك من مصادرة هاتفك ليبقوك صامتاً.",
      stopO_title: "الانسحاب وعدم الرد (Offline)",
      stopO_desc: "إياك والرد بغضب في التعليقات؛ فالخوارزميات تزيد من انتشار الشجارات وتمنح المتنمر ما يريد.",
      stopP_title: "الحماية والحظر (Protect & Block)",
      stopP_desc: "احظر الحسابات المسيئة فور توثيق الأدلة، واقفل الرسائل لتقتصر على أصدقائك وبلّغ إدارة المنصة.",
      arenaTitle: "الميدان التفاعلي: الشاهد السلبي ضد الشاهد الإيجابي (المساند)",
      selectAction: "اختر طريقة تدخلك في الموقف:",
      analysisLabel: "تحليل النتيجة والتبعات: ",
      insightLabel: "نظرة تقنية ونفسية: ",
      scriptsTitle: "عبارات جاهزة للنسخ لتهدئة المحادثات الجماعية",
      scriptsSubtitle: "كلمات هادئة وقوية يمكنك نسخها ولصقها لإيقاف التنمر في مجموعات الصف دون أن تصبح هدفاً.",
      copyScript: "نسخ العبارة",
      copied: "تم النسخ بنجاح!"
    },
    social: {
      badge: "المهمة 04 · حماية البصمة الرقمية والخصوصية",
      title: "مدقق خصوصية الحسابات والبصمة الرقمية",
      subtitle: "في ورشة التكنولوجيا، الإهمال في استخدام الأدوات يسبب جروحاً. وعلى الإنترنت، نشر تفاصيل عشوائية يسرب أمانك وموقع بيتك. افحص بروفايل 'أليكس' واكتشف 6 ثغرات خطيرة!",
      markComplete: "تأكيد إكمال المختبر",
      completed: "تم إكمال المختبر ✓",
      progressLabel: "تقدم الفحص",
      allFound: "تم اكتشاف جميع الثغرات الست!",
      clickPins: "اضغط على الدبابيس البارزة في حساب أليكس لفحص كل خطر:",
      inspectorTitle: "ملف فحص الثغرات الأمنية",
      noItemSelected: "لم يتم اختيار أي عنصر",
      noItemDesc: "اضغط على أي دبوس في البروفايل لمعرفة سبب الخطورة والحل السريع المناسب.",
      dangerLabel: "لماذا يعتبر هذا خطيراً؟",
      fixLabel: "الحل التقني الموصى به:",
      timeMachineTitle: "آلة الزمن للبصمة الرقمية",
      timeMachineDesc: "الإنترنت لا ينسى أبداً! شاهد كيف تبدو منشورات الإعدادي اليوم عندما تصبح بعمر 16 عاماً أمام مدرب النادي أو بعمر 18 عاماً أمام لجان المنح الدراسية والعمل التقني.",
      tmTab1: "اليوم (الصف الثامن)",
      tmTab2: "بعمر 16 سنة (مدرب النادي)",
      tmTab3: "بعمر 18 سنة (مسؤول التوظيف التقني)"
    },
    quiz: {
      modalTitle: "اختبار شهادة الأمان الرقمي للصف الثامن",
      modalSubtitle: "10 مواقف واقعية · نسبة النجاح: 70%",
      questionOf: "السؤال",
      category: "المجال",
      prev: "السابق",
      next: "السؤال التالي",
      submit: "إنهاء الاختبار",
      earnedTitle: "تهانينا! حصلت على الشهادة",
      scoreText: "درجتك النهائية",
      certTitle: "شهادة الدفاع السيبراني",
      certSub: "وثيقة كفاءة رسمية للمدارس الإعدادية التقنية",
      certifies: "تشهد هذه الوثيقة بأن الطالب/ـة",
      certDesc: "قد أتم بنجاح متطلبات الكفاءة في تشفير كلمات المرور، كشف رسائل الاحتيال، التدخل الإيجابي ضد التنمر الإلكتروني، وحماية البصمة الرقمية وفق المعايير المعتمدة.",
      retake: "إعادة الاختبار",
      print: "طباعة / حفظ PDF",
      back: "العودة إلى الورشة"
    },
    sos: {
      title: "صندوق طوارئ السلامة الرقمية",
      subtitle: "أنت لست في ورطة ولست مذنباً. توجد جهات مجانية وأشخاص موثوقون لمساعدتك فوراً.",
      helplineTitle: "خطوط مساعدة مجانية وسرية 24/7",
      parentTitle: "كيف تخبر والديك بالمشكلة (دون أن تُسحب أجهزتك)",
      parentIntro: "يتردد الكثير من الطلاب في طلب مساعدة الأهل خوفاً من معاقبتهم بمنع الهاتف أو الحاسوب. استخدم هذه العبارة الهادئة بالحرف:",
      parentScript: "\"أمي / أبي، لقد تعرضت لموقف غير مريح ومفاجئ على الإنترنت لم أطلبه. وفضلت إخبارك فوراً لنتصرف معاً ونحظر الشخص ونبلغ عنه. أرجو ألا تسحبوا هاتفي، فقد جئت إليكم لأنني أثق فيكم وأحتاج لمساعدتكم.\"",
      evidenceTitle: "قائمة حفظ الأدلة قبل الحظر",
      close: "إغلاق النافذة"
    },
    footer: {
      desc: "منصة تعليمية تطبيقية لتعزيز الأمان الرقمي والتربية التكنولوجية لطلاب المدارس الإعدادية التقنية.",
      privacy: "لا نجمع أي بيانات شخصية · جميع الاختبارات والمحاكاة تعمل محلياً 100% داخل متصفحك.",
      standards: "متوافقة مع أهداف التربية الرقمية والتكنولوجية الحديثة"
    }
  }
};

export const SIMPLE_CONCEPTS_DATA: Record<Language, ConceptTip[]> = {
  en: [
    {
      id: "passwords",
      category: "passwords",
      title: "Passwords & Passphrases",
      simpleAnalogy: "Like a padlock on your workshop tool cabinet. A 3-dial lock with '1-2-3' can be opened in 2 seconds. A lock with 4 full combination wheels is impossible to guess.",
      goldenRule: "Length beats complexity: 4 random words (Passphrase) are 10,000x stronger than a short word with scrambled letters.",
      concreteExample: "Instead of 'soccer2026' (cracked instantly), use 'Pancake-Cobalt-Rocket-Badger9!'. Easy to picture in your head, unbreakable by computers.",
      interactiveCheck: {
        question: "Which of these is the most unbreakable password for your school portal?",
        goodChoice: "Falcon-Timber-Cobalt-Neon8#",
        badChoice: "AlexRivera2012!",
        explanation: "Personal names + birth years are the #1 thing automated dictionary tools check first! 4 random words defeat dictionary attacks."
      }
    },
    {
      id: "phishing",
      category: "strangers",
      title: "Phishing & Fake Links",
      simpleAnalogy: "Like a fake shiny fishing lure in a lake. It looks like free food (free Robux, free skins, leaked quiz answers), but inside is a sharp metal hook designed to rip away your login session.",
      goldenRule: "Never log into your accounts through a link sent in a DM or chat comment. Always open the real app or browser bookmark yourself.",
      concreteExample: "A stranger on Discord messages: 'You won 5,000 game coins! Claim here: roblox-vip-promo.site'. The link leads to a clone page that steals your password.",
      interactiveCheck: {
        question: "Someone in a game chat says: 'Click this link to claim free game credits before midnight!' What should you do?",
        goodChoice: "Ignore the link, report the sender for spam, and block them.",
        badChoice: "Click quickly and enter your username and password before the timer runs out.",
        explanation: "Urgency ('before midnight!') and free prizes are the classic bait used by phishing scammers to hijack teen accounts."
      }
    },
    {
      id: "twofa",
      category: "passwords",
      title: "Two-Factor Authentication (2FA)",
      simpleAnalogy: "Like having a heavy key AND a fingerprint scanner on the school lab door. Even if a thief steals your key, they still cannot get past the biometric scanner.",
      goldenRule: "Turn on 2FA on every gaming, email, and social account. It stops 99.9% of automated account takeovers.",
      concreteExample: "When you log in from a new computer, your phone receives a 6-digit code. Without your physical phone, a hacker in another country is locked out completely.",
      interactiveCheck: {
        question: "Why should you never share a 6-digit SMS code you just received on your phone?",
        goodChoice: "Because that code is the master key to reset your account credentials.",
        badChoice: "Because it costs money to send SMS messages.",
        explanation: "When scammers say 'I accidentally sent my code to your number, read it back to me', they are actually resetting YOUR password!"
      }
    },
    {
      id: "footprint",
      category: "privacy",
      title: "The Digital Footprint",
      simpleAnalogy: "Like walking in wet concrete or writing with permanent marker on the school hallway wall. Even if you paint over it later, the impression remains visible under inspection.",
      goldenRule: "If you wouldn't want it printed on a giant poster at your school front entrance, don't post, send, or comment it online.",
      concreteExample: "Leaving an edgy roast comment or sending a goofy photo to a group chat. Someone screenshots it in 0.5 seconds, and it is saved forever on their hard drive.",
      interactiveCheck: {
        question: "A friend says: 'Send that funny picture on disappearing Snapchat, it deletes after 10 seconds anyway.' Is it really gone?",
        goodChoice: "No. Anyone can take a screenshot, screen record, or use another phone camera to save it permanently.",
        badChoice: "Yes, Snapchat permanently destroys all photo data immediately.",
        explanation: "Nothing disappears on the internet. Screenshots and recordings happen in a split second."
      }
    },
    {
      id: "upstander",
      category: "cyberbullying",
      title: "Being an Upstander (Not a Bystander)",
      simpleAnalogy: "Like an emergency circuit breaker in an electrical workshop. When an electrical wire sparks, the breaker trips to cut the current before a fire starts.",
      goldenRule: "A single calm voice in a group chat stops bullying in under 10 seconds. You don't need to fight; just break the crowd momentum.",
      concreteExample: "When classmates roast someone's gym fail in a group chat, type: 'Alright, we get it, move on.' Then message the classmate privately: 'Hey, don't sweat them, they are being dumb.'",
      interactiveCheck: {
        question: "In a class group chat, three students are ganging up on a quiet student with rude memes. What is the most effective move?",
        goodChoice: "Say 'That's enough guys, drop it' and privately message the student to offer support.",
        badChoice: "Add a laughing emoji so the popular kids don't turn on you.",
        explanation: "Silence or laughing emojis validate the bullies. A single mature interruption breaks the mob mentality instantly."
      }
    }
  ],
  fr: [
    {
      id: "passwords",
      category: "passwords",
      title: "Mots de Passe & Passphrases",
      simpleAnalogy: "Comme un cadenas sur ton casier d'atelier technique. Un cadenas à 3 chiffres (1-2-3) s'ouvre en 2 secondes. Un cadenas à 4 roulettes complexes résiste à tout.",
      goldenRule: "La longueur bat la complexité : 4 mots sans rapport (Passphrase) sont 10 000 fois plus solides qu'un mot court mélangé avec des chiffres.",
      concreteExample: "Au lieu de 'football2026' (cassé en 0,1 seconde), utilise 'Crepe-Cobalt-Fusee-Blaireau9!'. Facile à imaginer comme une histoire, impossible à deviner pour un robot.",
      interactiveCheck: {
        question: "Lequel de ces mots de passe est le plus impénétrable pour ton portail scolaire ?",
        goodChoice: "Faucon-Sapin-Cobalt-Neon8#",
        badChoice: "LucasDupont2012!",
        explanation: "Les prénoms et années de naissance sont les premiers éléments testés par les dictionnaires de piratage ! 4 mots aléatoires bloquent ces attaques."
      }
    },
    {
      id: "phishing",
      category: "strangers",
      title: "Le Hameçonnage (Phishing & Faux Liens)",
      simpleAnalogy: "Comme un leurre de pêche brillant dans l'eau. Il a l'air délicieux (Robux gratuits, skins offerts, corrigé de contrôle), mais il cache un hameçon en fer pour voler ton compte.",
      goldenRule: "Ne te connecte jamais à tes comptes en cliquant sur un lien reçu par message privé ou en commentaire. Ouvre toujours l'application officielle toi-même.",
      concreteExample: "Un inconnu sur Discord t'écrit : 'Tu as gagné 5000 pièces de jeu ! Clique ici : roblox-vip-promo.site'. La page ressemble à la vraie, mais elle enregistre tes identifiants pour te pirater.",
      interactiveCheck: {
        question: "Un joueur inconnu t'envoie : 'Clique vite sur ce lien pour recevoir des crédits gratuits avant minuit !' Que fais-tu ?",
        goodChoice: "Tu ne cliques pas, tu signales le message comme arnaque et tu bloques l'expéditeur.",
        badChoice: "Tu cliques vite et tu saisis ton mot de passe avant que le temps ne soit écoulé.",
        explanation: "L'urgence ('avant minuit !') et les cadeaux gratuits sont les appâts classiques pour piéger les adolescents."
      }
    },
    {
      id: "twofa",
      category: "passwords",
      title: "La Double Authentification (2FA)",
      simpleAnalogy: "Comme avoir une clé solide ET un scanner d'empreinte digitale pour entrer dans la salle informatique. Même si un voleur te dérobe la clé, il reste bloqué devant la porte.",
      goldenRule: "Active la double authentification (2FA) sur tous tes comptes de jeux, emails et réseaux sociaux. Elle bloque 99,9% des piratages.",
      concreteExample: "Quand tu te connectes depuis un nouvel ordinateur, ton téléphone reçoit un code à 6 chiffres. Sans ton téléphone physique, un pirate à l'autre bout du monde ne peut rien faire.",
      interactiveCheck: {
        question: "Pourquoi ne dois-tu JAMAIS donner un code SMS à 6 chiffres reçu sur ton téléphone à quelqu'un d'autre ?",
        goodChoice: "Car ce code est la clé maîtresse pour réinitialiser et voler ton compte.",
        badChoice: "Car l'envoi de SMS coûte de l'argent.",
        explanation: "Quand un arnaqueur te dit 'J'ai envoyé mon code par erreur sur ton numéro, donne-le moi', il est en fait en train de voler TON propre compte !"
      }
    },
    {
      id: "footprint",
      category: "privacy",
      title: "L'Empreinte Numérique",
      simpleAnalogy: "Comme marcher dans du ciment frais ou écrire au marqueur indélébile sur le mur du collège. Même si tu peins par-dessus plus tard, la marque reste décelable.",
      goldenRule: "Si tu n'aimerais pas voir ce message affiché en grand sur le panneau d'affichage du collège, ne l'écris pas et ne l'envoie pas en ligne.",
      concreteExample: "Lâcher une insulte dans un commentaire ou envoyer une photo bête dans un groupe : quelqu'un fait une capture d'écran en 0,5 seconde et elle est conservée pour toujours.",
      interactiveCheck: {
        question: "Un ami te dit : 'Envoie cette photo bizarre sur Snap, elle disparaît au bout de 10 secondes'. A-t-elle vraiment disparu ?",
        goodChoice: "Non. N'importe qui peut faire une capture d'écran ou la photographier avec un autre téléphone.",
        badChoice: "Oui, Snapchat détruit définitivement toutes les images instantanément.",
        explanation: "Rien ne disparaît sur internet. Une capture d'écran se fait en une fraction de seconde et reste gravée."
      }
    },
    {
      id: "upstander",
      category: "cyberbullying",
      title: "Être un Témoin Actif (Upstander)",
      simpleAnalogy: "Comme le disjoncteur d'urgence dans l'atelier d'électricité. Dès qu'une étincelle jaillit, le disjoncteur coupe le courant avant que l'incendie ne démarre.",
      goldenRule: "Une seule voix calme dans un groupe de discussion arrête le harcèlement en moins de 10 secondes. Pas besoin de crier, il suffit de casser l'effet de meute.",
      concreteExample: "Quand des camarades se moquent de la chute d'un élève en EPS dans le groupe de classe, écris : 'Bon, c'est bon, on a compris, passez à autre chose.' Puis écris-lui en privé : 'Fais pas attention à eux, ils sont immatures.'",
      interactiveCheck: {
        question: "Dans le groupe de classe, 3 élèves s'acharnent sur un camarade timide avec des mèmes méchants. Quelle est la meilleure réaction ?",
        goodChoice: "Écrire 'C'est bon les gars, arrêtez vos bêtises' et envoyer un message de soutien en privé au camarade.",
        badChoice: "Mettre un émoji qui rigole pour que les populaires ne s'en prennent pas à toi.",
        explanation: "Le silence ou les rires encouragent les harceleurs. Une simple phrase mature brise instantanément l'effet de groupe."
      }
    }
  ],
  ar: [
    {
      id: "passwords",
      category: "passwords",
      title: "كلمات المرور والجمل السرية",
      simpleAnalogy: "مثل قفل خزانة الأدوات في ورشة التكنولوجيا. القفل المكون من 3 أرقام (1-2-3) يُفتح في ثانيتين. أما القفل متعدد البكرات والأقراص فيستحيل فتحه بالتخمين.",
      goldenRule: "الطول يهزم التعقيد: 4 كلمات عشوائية (جملة سرية) أقوى بـ 10,000 مرة من كلمة قصيرة محشوة بأرقام بسيطة.",
      concreteExample: "بدلاً من 'football2026' (تُكسر في 0.1 ثانية)، استخدم: 'فطيرة-صبار-صاروخ-نيون9!'. سهلة التخيل في ذهنك، ومستحيلة على حواسيب المخترقين.",
      interactiveCheck: {
        question: "أي من هذه الكلمات هي الأقوى لحماية حسابك المدرسي؟",
        goodChoice: "صقر-صنوبر-كوبالت-برق8#",
        badChoice: "AhmedMohamed2012!",
        explanation: "الأسماء وسنوات الميلاد هي أول ما تخمنه برامج الاختراق الآلية! الكلمات العشوائية الطويلة تمنع التخمين تماماً."
      }
    },
    {
      id: "phishing",
      category: "strangers",
      title: "التصيد الاحتيالي والروابط المزيفة",
      simpleAnalogy: "مثل طُعم الصيد اللامع في البحر. يبدو شهياً من الخارج (شدات مجانية، هدايا ألعاب، تسريبات امتحانات)، لكنه يخفي سنارة حادة تسرق حسابك في ثانية.",
      goldenRule: "إياك أن تسجل دخولك إلى أي حساب عبر رابط أُرسل إليك في محادثة خاصة أو تعليق. افتح التطبيق الرسمي بنفسك دائماً.",
      concreteExample: "شخص غريب في الديسكورد يراسلك: 'مبروك! ربحت 5000 جوهرة في اللعبة، اضغط هنا لتسجيل الدخول واستلامها'. الرابط صفحة مزيفة تنسخ كلمة سرك.",
      interactiveCheck: {
        question: "أرسل لك لاعب في الدردشة: 'اضغط هنا فوراً للحصول على شحن مجاني قبل منتصف الليل!' ماذا تفعل؟",
        goodChoice: "لا تضغط على الرابط، بل أبلغ عن الرسالة واحظر هذا الشخص فوراً.",
        badChoice: "تضغط بسرعة وتسجل اسمك وكلمة سرك قبل أن ينتهي الوقت.",
        explanation: "الاستعجال المفتعل ('قبل منتصف الليل!') والجوائز الخيالية المجانية هما أشهر فخاخ سرقة الحسابات."
      }
    },
    {
      id: "twofa",
      category: "passwords",
      title: "التحقق بخطوتين (2FA)",
      simpleAnalogy: "مثل وجود مفتاح حديدي قوي بالإضافة إلى ماسح لبصمة الإصبع على باب قاعة الإعلامية. حتى لو سرق اللص مفتاحك، سيبقى عاجزاً عن فتح الباب.",
      goldenRule: "فعّل التحقق بخطوتين (2FA) على كل حساباتك (ألعاب، بريد، تواصل). هذه الميزة تمنع 99.9% من محاولات الاختراق.",
      concreteExample: "عند تسجيل الدخول من جهاز جديد، يرسل النظام رمزاً سرياً من 6 أرقام لهاتفك الشخصي. بدون هاتفك بين يديه، لن يستطيع المخترق دخول حسابك حتى لو عرف كلمتك.",
      interactiveCheck: {
        question: "لماذا يجب ألا تعطي رمز الـ SMS المكون من 6 أرقام لأي شخص مهما كان السبب؟",
        goodChoice: "لأن هذا الرمز هو المفتاح الرئيسي لإعادة تعيين حسابك وسرقته فوراً.",
        badChoice: "لأن إرسال الرسائل يخصم رصيداً مالياً.",
        explanation: "عندما يقول لك أحدهم 'أرسلت رمزي لرقمك بالخطأ، أعطني إياه'، فهو في الواقع يقوم باختراق وتغيير كلمة سر حسابك أنت!"
      }
    },
    {
      id: "footprint",
      category: "privacy",
      title: "البصمة الرقمية (أثرك على الإنترنت)",
      simpleAnalogy: "مثل المشي فوق إسمنت رطب أو الكتابة بقلم حبر دائم على جدار المدرسة. حتى لو حاولت مسحه أو طلائه لاحقاً، سيبقى أثره محفوراً للجميع.",
      goldenRule: "إذا كنت تخجل أن يُعرض هذا المنشور أو الصورة على شاشة التلفاز أمام أهلك وأساتذتك، فلا تنشره أو ترسله أبداً.",
      concreteExample: "كتابة تعليق ساخر جارح أو إرسال صورة محرجة في مجموعة خاصة؛ يكفي أن يلتقط أحدهم 'سكرين شوت' في نصف ثانية لتبقى للأبد على هاتفه.",
      interactiveCheck: {
        question: "قال لك زميل: 'أرسل الصورة على سناب شات، فهي تختفي بعد 10 ثوانٍ ولا يراها أحد'. هل تختفي حقاً؟",
        goodChoice: "كلا! يمكن لأي شخص التقاط لقطة شاشة (Screenshot) أو تصويرها بهاتف آخر وحفظها للأبد.",
        badChoice: "نعم، سناب شات يحذف الصور نهائياً ولا يمكن لأحد حفظها.",
        explanation: "لا شيء يختفي تماماً على الإنترنت. لقطة الشاشة تستغرق رمشة عين وتبقى دليلاً ثابتاً."
      }
    },
    {
      id: "upstander",
      category: "cyberbullying",
      title: "كن شاهداً إيجابياً (مسانداً) لا متفرجاً",
      simpleAnalogy: "مثل قاطع الدائرة الكهربائية في ورشة الكهرباء. بمجرد حدوث شرارة خطيرة، يفصل القاطع التيار فوراً ويمنع وقوع الحريق.",
      goldenRule: "كلمة واحدة هادئة في محادثة جماعية توقف التنمر في أقل من 10 ثوانٍ. لست بحاجة للشجار، فقط أوقف حماس المتنمرين.",
      concreteExample: "عندما يبدأ البعض بالسخرية من سقوط زميل في حصة الرياضة داخل مجموعة الصف، اكتب: 'يا شباب خلاص المزحة انتهت، خلونا نغير الموضوع'. ثم راسله في الخاص وقل له: 'لا تهتم لكلامهم، أنت رائع'.",
      interactiveCheck: {
        question: "في مجموعة الصف، يهاجم ثلاثة طلاب زميلاً هادئاً بتعليقات مسيئة. ما هو أفضل تصرف تكتيكي؟",
        goodChoice: "كتابة 'يا شباب كفى هذا التصرف غير لائق' وإرسال رسالة دعم خاصة للزميل المتأثر.",
        badChoice: "إرسال إيموجي ضاحك حتى لا تصبح هدفاً لهم.",
        explanation: "الضحك أو الصمت يشجع المتنمرين. جملة واحدة واعية من زميل شجاع تكسر شوكة المتنمر وتعيد الأمان للجميع."
      }
    }
  ]
};
