import { QuizQuestion, Language } from '../types';

export const QUIZ_QUESTIONS_DATA: Record<Language, QuizQuestion[]> = {
  en: [
    {
      id: 1,
      category: 'Passwords',
      question: 'Which of the following passwords is the STRONGEST against a modern automated hacker dictionary attack?',
      scenario: 'You are setting up a password for your main school portal and gaming email.',
      options: [
        'LincolnTigers2026!',
        'P@ssw0rd1234',
        'Velvet-Cactus-Orbit-Lantern7#',
        'ilovefortnite99'
      ],
      correctIndex: 2,
      explanation: 'A four-word random passphrase (like Velvet-Cactus-Orbit-Lantern7#) has high entropy and length (28+ characters), making it virtually uncrackable by modern GPU clusters, while still being easy for humans to picture in their heads.'
    },
    {
      id: 2,
      category: 'Passwords',
      question: 'Your best friend at school asks for your Instagram password so they can keep your "Snap streaks" and post for you while you are at camp. What should you do?',
      scenario: 'Sharing credentials with friends.',
      options: [
        'Give it to them, since they are your best friend and promised not to tell anyone.',
        'Politely decline: Never share your password with anyone except your parents or guardians.',
        'Give them a fake password and see if they notice.',
        'Change your password to their name so it’s easy for them to remember.'
      ],
      correctIndex: 1,
      explanation: 'Passwords should never be shared with friends or partners. Friendships can change, devices can get lost or borrowed, and credential sharing is the leading cause of middle school account compromises.'
    },
    {
      id: 3,
      category: 'Strangers',
      question: 'A user you don’t know sends you a message in Roblox: "Hey! Join my private VIP server. I have 10,000 Robux codes for the first 3 people who log in through this link: roblox-vip-claim.site". What is your safest reaction?',
      scenario: 'Game lobby gift links.',
      options: [
        'Click quickly so you are one of the first 3 people.',
        'Send the link to your classmates to test if it’s real.',
        'Do not click. Take a screenshot, report the user for phishing/scamming, and block them.',
        'Reply with a rude insult.'
      ],
      correctIndex: 2,
      explanation: 'This is classic credential phishing. Legitimate platforms never give away premium currency through external third-party login pages.'
    },
    {
      id: 4,
      category: 'Strangers',
      question: 'An online acquaintance you met in a mobile game says: "Don’t tell your parents about our chats, they wouldn’t understand our friendship. Can you send a selfie in your bedroom?" What is this an immediate sign of?',
      scenario: 'Online boundary testing.',
      options: [
        'They are just shy and want to make friends.',
        'A massive red flag of online grooming and boundary violation.',
        'Standard gamer etiquette.',
        'A harmless dare.'
      ],
      correctIndex: 1,
      explanation: 'Any adult or online acquaintance who asks a minor for secrecy ("don’t tell your parents") or requests private photos is exhibiting dangerous grooming tactics. Always alert an adult immediately.'
    },
    {
      id: 5,
      category: 'Cyberbullying',
      question: 'In a group chat with 12 classmates, someone shares an embarrassing video of a student crying after failing a test, and people are laughing. What is the most effective Upstander action?',
      scenario: 'Group chat mob mentality.',
      options: [
        'Leave a laughing emoji so you don’t stand out.',
        'Say "Guys, this isn’t funny, cut it out" and privately message the student to offer support.',
        'Download the video and send it to other friends outside the group.',
        'Remain silent and ignore it.'
      ],
      correctIndex: 1,
      explanation: 'Speaking up publicly stops the mob momentum, and privately checking on the target helps counter the devastating isolation caused by group chat bullying.'
    },
    {
      id: 6,
      category: 'Cyberbullying',
      question: 'What does the cybersecurity "S.T.O.P." protocol stand for when dealing with cyberbullying?',
      scenario: 'Emergency response protocol.',
      options: [
        'Shout, Threaten, Offend, Post',
        'Screenshot evidence, Talk to a trusted adult, Offline de-escalation, Protect & Block',
        'Search, Track, Overreact, Panic',
        'Send, Text, Overcharge, Phone'
      ],
      correctIndex: 1,
      explanation: 'S.T.O.P. stands for: Screenshot evidence (with timestamps), Talk to a trusted adult, Offline de-escalation (do not feed the troll), and Protect & Block on the platform.'
    },
    {
      id: 7,
      category: 'Social Media',
      question: 'Why is it dangerous to post photos in your school sports jersey with the school name clearly visible while geotagging "Current Location: Gym"?',
      scenario: 'Location privacy and personal safety.',
      options: [
        'Because it drains phone battery faster.',
        'It allows strangers to pinpoint your exact physical schedule, building, and routine in real time.',
        'Because sports jerseys are copyrighted.',
        'It has no danger at all.'
      ],
      correctIndex: 1,
      explanation: 'Combining school identifiers, team schedules, and live location stamps gives potential predators or stalkers your physical whereabouts.'
    },
    {
      id: 8,
      category: 'Social Media',
      question: 'What is a "Digital Footprint"?',
      scenario: 'Understanding online permanence.',
      options: [
        'The physical weight of your phone and tablet.',
        'The trail of data, posts, comments, photos, and searches you leave behind online, which can be seen by future high schools, colleges, and coaches.',
        'The step tracker on a smartwatch.',
        'A cyber virus that deletes files.'
      ],
      correctIndex: 1,
      explanation: 'Your digital footprint is permanent. Even "deleted" stories or messages can be screenshotted and archived, impacting your future sports teams, high school standing, and college admissions.'
    },
    {
      id: 9,
      category: 'Passwords',
      question: 'What is Two-Factor Authentication (2FA) and why is it recommended for all social media and gaming accounts?',
      scenario: 'Account defense layers.',
      options: [
        'It requires you to type your password twice every time you log in.',
        'It’s an extra security layer requiring a password PLUS a secondary verification (like a text code or authenticator app), stopping hackers even if they steal your password.',
        'It deletes your account after 2 failed attempts.',
        'It gives you two different accounts.'
      ],
      correctIndex: 1,
      explanation: '2FA means a stolen password alone is useless to an attacker because they still do not have your physical device or authenticator token.'
    },
    {
      id: 10,
      category: 'Social Media',
      question: 'You see an online quiz that says "Log in with TikTok to find out which Disney character matches your personality!". What should you check first?',
      scenario: 'Third-party app permissions.',
      options: [
        'Nothing, personality quizzes are always completely safe.',
        'Check the permissions requested: Many quiz apps ask for full access to your profile data, email, and direct messages.',
        'Share it to 10 friends to unlock the answers.',
        'Enter your credit card number.'
      ],
      correctIndex: 1,
      explanation: 'Third-party quiz apps frequently harvest personal data, access friend lists, or gain permission to post on your behalf. Always inspect permissions before connecting external apps.'
    }
  ],
  fr: [
    {
      id: 1,
      category: 'Mots de passe',
      question: 'Lequel de ces mots de passe est le PLUS ROBUSTE face à un robot de piratage automatisé ?',
      scenario: 'Création d\'un mot de passe pour ton ENT scolaire et ton compte de jeu.',
      options: [
        'CollegeTech2026!',
        'M0tdep@sse123',
        'Fusee-Cactus-Nuage-Clavier7!',
        'jaimefortnite99'
      ],
      correctIndex: 2,
      explanation: 'Une phrase de 4 mots sans rapport (Passphrase) possède une longueur mathématique impressionnante (plus de 25 caractères), impossible à casser par les robots tout en restant facile à mémoriser pour un humain.'
    },
    {
      id: 2,
      category: 'Mots de passe',
      question: 'Ton meilleur ami au collège te demande ton mot de passe Instagram pour garder tes flammes Snap pendant que tu es en voyage scolaire. Que dois-tu faire ?',
      scenario: 'Partage des identifiants avec des amis.',
      options: [
        'Lui donner, c\'est ton meilleur pote et il a juré de ne le dire à personne.',
        'Refuser poliment : un mot de passe ne se donne à personne, sauf à tes parents.',
        'Lui donner un faux mot de passe pour tester sa réaction.',
        'Changer ton mot de passe pour mettre son prénom.'
      ],
      correctIndex: 1,
      explanation: 'Un mot de passe est strictement personnel. Les téléphones se prêtent, les amitiés évoluent, et le partage d\'identifiants est la première cause de piratage au collège.'
    },
    {
      id: 3,
      category: 'Inconnus',
      question: 'Un joueur inconnu t\'écrit sur Roblox : "Rejoins mon serveur VIP ! J\'ai des codes de 10 000 Robux pour les 3 premiers qui se connectent sur : roblox-vip-claim.site". Quelle est la réaction la plus sûre ?',
      scenario: 'Cadeaux et liens en jeu vidéo.',
      options: [
        'Cliquer très vite pour être parmi les 3 premiers.',
        'Envoyer le lien dans le groupe de classe pour voir si ça marche.',
        'Ne pas cliquer. Faire une capture d\'écran, signaler le compte et le bloquer.',
        'Lui envoyer une insulte.'
      ],
      correctIndex: 2,
      explanation: 'C\'est du phishing pur et simple. Les vrais éditeurs de jeux ne distribuent jamais de monnaie virtuelle via des pages web externes.'
    },
    {
      id: 4,
      category: 'Inconnus',
      question: 'Une personne rencontrée dans un jeu mobile t\'écrit : "N\'en parle pas à tes parents, ils ne comprendraient pas notre amitié. Envoie-moi un selfie dans ta chambre". Qu\'est-ce que cela indique ?',
      scenario: 'Test des limites et manipulation.',
      options: [
        'Cette personne est juste timide et veut sympathiser.',
        'Un signal d\'alarme gravissime de manipulation et de prédation en ligne.',
        'Une habitude normale entre gamers.',
        'Un défi innocent.'
      ],
      correctIndex: 1,
      explanation: 'Toute personne qui demande à un mineur de cacher des conversations à ses parents ou qui demande des photos privées franchit une ligne rouge. Alerte un adulte immédiatement.'
    },
    {
      id: 5,
      category: 'Cyberharcèlement',
      question: 'Dans un groupe de classe de 12 élèves, quelqu\'un poste une vidéo embarrassante d\'un camarade qui pleure après une mauvaise note, et tout le monde rigole. Quelle est la réaction la plus efficace ?',
      scenario: 'Effet de meute en groupe de discussion.',
      options: [
        'Mettre un émoji mort de rire pour ne pas être exclu.',
        'Écrire "Les gars, c\'est pas drôle, arrêtez" et envoyer un message de soutien en privé au camarade.',
        'Télécharger la vidéo et l\'envoyer à d\'autres amis hors du groupe.',
        'Rester silencieux sans rien dire.'
      ],
      correctIndex: 1,
      explanation: 'Intervenir publiquement brise la dynamique de meute, et le soutien privé évite au camarade de sombrer dans l\'isolement.'
    },
    {
      id: 6,
      category: 'Cyberharcèlement',
      question: 'Que signifie le protocole d\'urgence "S.T.O.P." face au cyberharcèlement ?',
      scenario: 'Protocole de sécurité.',
      options: [
        'Crier, Menacer, Offenser, Poster',
        'Screenshots des preuves, Tourne-toi vers un adulte, Offline (ne réponds pas), Protège-toi et Bloque',
        'Supprimer, Taire, Oublier, Paniquer',
        'Signaler, Taper, Oser, Pleurer'
      ],
      correctIndex: 1,
      explanation: 'Le protocole S.T.O.P. : Screenshots (garder les preuves avec l\'heure), Tourne-toi vers un adulte, Offline (refuse la surenchère en ligne), et Protège-toi & Bloque les agresseurs.'
    },
    {
      id: 7,
      category: 'Réseaux Sociaux',
      question: 'Pourquoi est-il dangereux de poster une photo avec le maillot de ton collège et le tag "Actuellement au gymnase" ?',
      scenario: 'Localisation et sécurité physique.',
      options: [
        'Parce que ça use la batterie plus vite.',
        'Parce que cela permet à des inconnus de connaître ton emploi du temps exact et ta présence physique en direct.',
        'Parce que le maillot du collège est protégé par un copyright.',
        'Ce n\'est pas du tout dangereux.'
      ],
      correctIndex: 1,
      explanation: 'Associer le nom de ton établissement, les horaires et la géolocalisation en direct donne à n\'importe quel individu malveillant ton emplacement géographique immédiat.'
    },
    {
      id: 8,
      category: 'Réseaux Sociaux',
      question: 'Qu\'est-ce qu\'une "Empreinte Numérique" ?',
      scenario: 'Comprendre la mémoire du web.',
      options: [
        'Le poids physique de ton smartphone.',
        'La trace de données, messages, photos et recherches que tu laisses en ligne, consultable plus tard par tes futurs lycées et recruteurs.',
        'Le podomètre de ta montre connectée.',
        'Un virus informatique qui efface les fichiers.'
      ],
      correctIndex: 1,
      explanation: 'Ton empreinte numérique ne s\'efface jamais vraiment. Même un post supprimé peut avoir été capturé par écran et ressortir lors de ton orientation ou d\'une embauche.'
    },
    {
      id: 9,
      category: 'Mots de passe',
      question: 'Qu\'est-ce que la double authentification (2FA) et pourquoi est-elle indispensable ?',
      scenario: 'Boucliers de protection.',
      options: [
        'Elle t\'oblige à taper deux fois ton mot de passe.',
        'C\'est une sécurité supplémentaire qui demande un mot de passe PLUS un code éphémère reçu sur ton téléphone, bloquant les pirates même s\'ils ont ton mot de passe.',
        'Elle supprime ton compte après 2 échecs de connexion.',
        'Elle crée deux comptes identiques.'
      ],
      correctIndex: 1,
      explanation: 'La 2FA rend un mot de passe volé inutile au pirate, car il lui manque ton téléphone physique pour valider l\'accès.'
    },
    {
      id: 10,
      category: 'Réseaux Sociaux',
      question: 'Tu vois un quiz : "Connecte-toi avec ton compte TikTok pour découvrir quel personnage de jeu tu es !". Que vérifies-tu en premier ?',
      scenario: 'Autorisations des applications tierces.',
      options: [
        'Rien, les quiz sont toujours inoffensifs.',
        'Les autorisations demandées : beaucoup de quiz réclament l\'accès complet à tes messages privés, liste d\'amis et adresse email.',
        'Tu le partages à 10 amis.',
        'Tu tapes ton numéro de carte bleue.'
      ],
      correctIndex: 1,
      explanation: 'Les applications de quiz récoltent souvent massivement tes données personnelles et peuvent publier en ton nom. Vérifie toujours les autorisations demandées !'
    }
  ],
  ar: [
    {
      id: 1,
      category: 'كلمات المرور',
      question: 'أي من كلمات المرور التالية هي الأقوى لمقاومة هجمات التخمين الآلية لبرامج القراصنة؟',
      scenario: 'إنشاء كلمة مرور لحسابك المدرسي وبريدك الإلكتروني.',
      options: [
        'LincolnTigers2026!',
        'P@ssw0rd1234',
        'صاروخ-صبار-قمر-مفتاح7!',
        'ilovefortnite99'
      ],
      correctIndex: 2,
      explanation: 'الجملة السرية المكونة من 4 كلمات عشوائية تمتلك طولاً رياضياً كبيراً (أكثر من 20 حرفاً)، مما يجعل الحواسيب تعجز عن كسرها بالتخمين، بينما يسهل على الإنسان تخيلها وتذكرها.'
    },
    {
      id: 2,
      category: 'كلمات المرور',
      question: 'طلب منك أعز أصدقائك في المدرسة كلمة سر حسابك لكي يحافظ لك على تفاعلك أثناء غيابك في رحلة. ماذا تفعل؟',
      scenario: 'مشاركة الحسابات مع الأصدقاء.',
      options: [
        'تعطيه الكلمة، فهو أعز أصدقائك ووعدك ألا يخبر أحداً.',
        'ترفض بلباقة: كلمة المرور سر شخصي لا يُعطى لأي شخص إلا للوالدين فقط.',
        'تعطيه كلمة سر وهمية لتختبره.',
        'تغير كلمة سرك لتصبح باسم صديقك.'
      ],
      correctIndex: 1,
      explanation: 'كلمات المرور سرية تماماً. الهواتف قد تُفقد أو تُستعار، وعلاقات الصداقة قد تتغير بعد خلاف، ومشاركة الحسابات هي السبب الأول لسرقة حسابات الطلاب.'
    },
    {
      id: 3,
      category: 'رسائل الغرباء',
      question: 'أرسل لك شخص غريب في لعبة روبلوكس: "ادخل سيرفري الخاص، أوزع 10,000 روبوكس لأول 3 يسجلون عبر الرابط: roblox-vip-claim.site". ما هو التصرف الأكثر أماناً؟',
      scenario: 'هدايا وروابط الألعاب.',
      options: [
        'الضغط بسرعة لتكون من أول ثلاثة فائزين.',
        'إرسال الرابط لزملائك في الصف لتجربته.',
        'عدم الضغط نهائياً، أخذ لقطة شاشة، الإبلاغ عن الحساب للاحتيال، وحظره.',
        'شتمه في المحادثة.'
      ],
      correctIndex: 2,
      explanation: 'هذا تصيد احتيالي صريح. الشركات الرسمية لا تطلب منك تسجيل الدخول عبر روابط خارجية للحصول على مكافآت.'
    },
    {
      id: 4,
      category: 'رسائل الغرباء',
      question: 'قال لك شخص تعرفت عليه في لعبة إلكترونية: "لا تخبر والديك بمحادثاتنا فلن يفهما صداقتنا، وأرسل لي صورة لوجهك في غرفتك". علامَ يدل هذا الموقف؟',
      scenario: 'اختبار الحدود واستدراج المراهقين.',
      options: [
        'أنه شخص خجول ويريد تكوين صداقة بريئة.',
        'مؤشر خطر شديد ومحاولة استدراج وابتزاز عبر الإنترنت.',
        'تصرف عادي بين اللاعبين.',
        'تحدٍ ترفيهي بسيط.'
      ],
      correctIndex: 1,
      explanation: 'أي شخص يطلب من قاصر كتمان المحادثات عن الأهل أو يطلب صوراً خاصة يتجاوز الخطوط الحمراء للسلامة. يجب إبلاغ الوالدين فوراً.'
    },
    {
      id: 5,
      category: 'التنمر الإلكتروني',
      question: 'في مجموعة الصف، نشر أحدهم فيديو محرجاً لزميل يبكي بعد رسوبه في اختبار، والجميع يضحكون. ما هو تصرف الشاهد الإيجابي الأكثر فعالية؟',
      scenario: 'السخرية الجماعية في المجموعات.',
      options: [
        'إرسال إيموجي ضاحك حتى لا يستهدفوك.',
        'الكتابة بحزم: "يا شباب هذا تصرف غير لائق وتوقفوا عن هذا"، ومراسلة الزميل في الخاص لدعمه.',
        'تحميل الفيديو وإرساله لأصدقاء خارج المجموعة.',
        'التزام الصمت وعدم التدخل.'
      ],
      correctIndex: 1,
      explanation: 'الكلام الواعي أمام الجميع يوقف اندفاع المتنمرين، ومراسلة الزميل تكسر عنه شعور العزلة القاتل.'
    },
    {
      id: 6,
      category: 'التنمر الإلكتروني',
      question: 'إلامَ يرمز بروتوكول "S.T.O.P." للتعامل السريع مع التنمر الإلكتروني؟',
      scenario: 'بروتوكول الطوارئ.',
      options: [
        'صراخ، تهديد، إساءة، نشر',
        'توثيق الأدلة بالصور (Screenshot)، إخبار راشد موثوق (Talk)، الانسحاب وعدم الرد (Offline)، الحظر والحماية (Protect)',
        'بحث، تتبع، هلع، ارتباك',
        'إرسال، اتصال، مبالغة، تهديد'
      ],
      correctIndex: 1,
      explanation: 'بروتوكول S.T.O.P. المعتمد: تصوير الشاشة مع الوقت، إخبار الأهل أو الإدارة، عدم الرد في التعليقات، وحظر الحسابات المسيئة.'
    },
    {
      id: 7,
      category: 'الخصوصية',
      question: 'لماذا يعتبر نشر صورك بقميص المدرسة الرياضي مع تفعيل خاصية "الموقع المباشر: القاعة الرياضية" تصرفاً خطيراً؟',
      scenario: 'الخصوصية والموقع الجغرافي.',
      options: [
        'لأنه يستهلك بطارية الهاتف بسرعة.',
        'لأنه يتيح للغرباء تحديد موقعك الفعلي، ومدرستك، وجدولك اليومي بدقة في الوقت الحقيقي.',
        'لأن قميص المدرسة محمي بحقوق الملكية.',
        'ليس فيه أي خطر.'
      ],
      correctIndex: 1,
      explanation: 'دمج اسم المدرسة وجدول التمارين وتحديد الموقع المباشر يكشف مكان وجودك الفعلي لأي شخص غريب.'
    },
    {
      id: 8,
      category: 'الخصوصية',
      question: 'ما هي "البصمة الرقمية" (Digital Footprint)؟',
      scenario: 'فهم أثر الإنترنت الدائم.',
      options: [
        'الوزن الحقيقي للهاتف أو الجهاز اللوحي.',
        'أثر البيانات، والمنشورات، والتعليقات، والصور التي تتركها على الإنترنت، والتي يمكن أن تراها مستقبلاً لجان القبول والتوظيف.',
        'عداد الخطوات في الساعة الذكية.',
        'فيروس حاسوبي يحذف الملفات.'
      ],
      correctIndex: 1,
      explanation: 'البصمة الرقمية دائمة. حتى القصص المؤقتة أو المنشورات المحذوفة يمكن حفظها بلقطة شاشة، وقد تؤثر على فرصك المستقبلية.'
    },
    {
      id: 9,
      category: 'كلمات المرور',
      question: 'ما هي ميزة التحقق بخطوتين (2FA) ولماذا ينصح بها بشدة في جميع الحسابات؟',
      scenario: 'طبقات حماية الحسابات.',
      options: [
        'تطلب منك كتابة كلمة المرور مرتين عند كل دخول.',
        'طبقة أمان تطلب كلمة السر بالإضافة إلى رمز تأكيد يرسل لهاتفك، مما يمنع المخترق حتى لو سرق كلمة السر.',
        'تحذف الحساب بعد محاولتين خاطئتين.',
        'تنشئ حسابين متطابقين.'
      ],
      correctIndex: 1,
      explanation: 'التحقق بخطوتين يجعل كلمة السر المسروقة عديمة الجدوى للمخترق، لأنه لا يملك هاتفك الشخصي لإدخال الرمز المؤقت.'
    },
    {
      id: 10,
      category: 'الخصوصية',
      question: 'شاهدت اختباراً يقول: "سجل دخولك بحساب تيك توك لتعرف أي شخصية كرتونية تشبهك!". ما الذي يجب أن تنتبه إليه أولاً؟',
      scenario: 'أذونات التطبيقات الخارجية.',
      options: [
        'لا شيء، مثل هذه الاختبارات آمنة دائماً.',
        'فحص الأذونات المطلوبة: فالكثير من هذه التطبيقات تطلب وصولاً كاملاً لبياناتك، وبريدك، ورسائلك الخاصة.',
        'إرساله لعشرة أصدقاء لفتح النتيجة.',
        'كتابة رقم بطاقة البنك.'
      ],
      correctIndex: 1,
      explanation: 'تطبيقات الألعاب والاختبارات الترفيهية تجمع بياناتك الشخصية وقد تنشر منشورات باسمك دون علمك. تحقق دائماً من الصلاحيات المطلوبة!'
    }
  ]
};

export const QUIZ_QUESTIONS = QUIZ_QUESTIONS_DATA.en;
