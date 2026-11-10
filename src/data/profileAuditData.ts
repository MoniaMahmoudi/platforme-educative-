import { ProfileAuditItem, Language } from '../types';

export const PROFILE_AUDIT_DATA: Record<Language, ProfileAuditItem[]> = {
  en: [
    {
      id: 'bio-pii',
      title: 'School Name & Grade Year in Bio',
      targetElement: 'Bio Description ("Lincoln Tech MS • Class of ’29")',
      riskLevel: 'High Risk',
      description: 'Listing your specific technical middle school and graduation year tells strangers your exact age, school building, and daily whereabouts between 8:00 AM and 3:00 PM.',
      fixGuide: 'Keep bios creative and generic (e.g. "Robotics & skater 🤖🛹"). Never list your school name or grade level.',
      detected: false
    },
    {
      id: 'snap-handle',
      title: 'Secondary Private App Handle Exposed',
      targetElement: 'Bio link ("Add my Snap: alex_privv")',
      riskLevel: 'Medium Risk',
      description: 'Advertising private messaging handles on public feeds invites spam bots, adult strangers, and malicious burner accounts directly into your personal DMs.',
      fixGuide: 'Only give your Snapchat or Discord handle to people you have spoken with face-to-face.',
      detected: false
    },
    {
      id: 'geotag-location',
      title: 'Live Geotagged Sports Practice',
      targetElement: 'Post 1 Tag ("West Gym - Court 2 • Just now")',
      riskLevel: 'High Risk',
      description: 'Posting real-time locations ("Just now at the gym") broadcasts your live physical location to anyone browsing public location tags.',
      fixGuide: 'Turn off location services for camera & social apps, or post photos after you have already left the venue.',
      detected: false
    },
    {
      id: 'house-photo',
      title: 'Street Sign & House Number in Background',
      targetElement: 'Post 2 Photo ("New skateboard on the porch")',
      riskLevel: 'High Risk',
      description: 'Even an innocent photo of a skateboard or bike on your porch can reveal house numbers, distinct mailbox designs, or street corners in reflections.',
      fixGuide: 'Crop out backgrounds before posting, or blur house numbers and car license plates.',
      detected: false
    },
    {
      id: 'security-question-leak',
      title: 'Password Security Question Clue',
      targetElement: 'Post 3 ("Happy 2nd birthday to my golden retriever Buster! 🐶")',
      riskLevel: 'Privacy Leak',
      description: 'Your pet’s name, mother’s maiden name, and first school are the #1 most common security questions used to reset account passwords! Attackers harvest this from feeds.',
      fixGuide: 'Avoid using real pet names as security questions, or use random answers stored in a secure password manager.',
      detected: false
    },
    {
      id: 'public-account-status',
      title: 'Public Account Mode Enabled',
      targetElement: 'Account Privacy Status ("Public - Visible to All")',
      riskLevel: 'High Risk',
      description: 'A public account allows anyone on Earth to download your pictures, scrape your face for AI deepfakes, or track who your friends are.',
      fixGuide: 'Switch account to "Private" so only people you explicitly approve can view your posts and stories.',
      detected: false
    }
  ],
  fr: [
    {
      id: 'bio-pii',
      title: 'Nom du Collège et Année Scolaire en Bio',
      targetElement: 'Description de la Bio ("Collège Tech Jules Verne • Promo 2029")',
      riskLevel: 'High Risk',
      description: 'Indiquer le nom de ton collège technique et ta classe révèle à des inconnus ton âge exact, ton bâtiment scolaire et tes horaires de présence de 8h à 17h.',
      fixGuide: 'Reste créatif et général dans ta bio (ex: "Robotique & skate 🤖🛹"). N\'indique jamais le nom de ton établissement ni ta classe.',
      detected: false
    },
    {
      id: 'snap-handle',
      title: 'Pseudo Privé Affiché Publiquement',
      targetElement: 'Lien en bio ("Ajoutez mon Snap : alex_privv")',
      riskLevel: 'Medium Risk',
      description: 'Afficher ton pseudo privé sur un profil public invite directement les robots spammeurs et les faux profils d\'inconnus dans tes messages intimes.',
      fixGuide: 'Ne partage ton Snap ou ton Discord qu\'avec des personnes que tu connais en vrai.',
      detected: false
    },
    {
      id: 'geotag-location',
      title: 'Géolocalisation en Direct au Gymnase',
      targetElement: 'Tag du Post 1 ("Gymnase Ouest - Terrain 2 • À l\'instant")',
      riskLevel: 'High Risk',
      description: 'Publier sa position en temps réel ("À l\'instant au gymnase") diffuse ta localisation géographique exacte à n\'importe qui consultant le tag du lieu.',
      fixGuide: 'Désactive la géolocalisation sur les applications photo et ne publie tes stories qu\'après avoir quitté les lieux.',
      detected: false
    },
    {
      id: 'house-photo',
      title: 'Numéro de Rue et Maison Visibles',
      targetElement: 'Photo du Post 2 ("Nouveau skate sur le perron")',
      riskLevel: 'High Risk',
      description: 'Une simple photo de planche de skate devant chez toi peut faire apparaître le numéro de rue (ex: n°42), le nom de la rue sur le panneau ou la plaque d\'immatriculation.',
      fixGuide: 'Recadre la photo pour masquer l\'arrière-plan ou floute les numéros de maison et plaques de voiture.',
      detected: false
    },
    {
      id: 'security-question-leak',
      title: 'Indice Donné pour la Question Secrète',
      targetElement: 'Post 3 ("Joyeux anniversaire à mon chien Buster ! 🐶")',
      riskLevel: 'Privacy Leak',
      description: 'Le nom de ton animal de compagnie et ton école primaire sont les questions secrètes n°1 utilisées pour réinitialiser les mots de passe ! Les pirates les collectent sur les profils.',
      fixGuide: 'N\'utilise jamais le vrai nom de ton chien comme question de sécurité, ou invente des réponses fictives.',
      detected: false
    },
    {
      id: 'public-account-status',
      title: 'Compte Laissé en Mode Public',
      targetElement: 'Statut du Compte ("Public - Visible par tout le monde")',
      riskLevel: 'High Risk',
      description: 'Un compte public permet à n\'importe qui dans le monde de télécharger tes photos, d\'alimenter des faux comptes ou de surveiller tes amis.',
      fixGuide: 'Bascule immédiatement le compte en mode "Privé" pour n\'accepter que les personnes que tu as personnellement validées.',
      detected: false
    }
  ],
  ar: [
    {
      id: 'bio-pii',
      title: 'اسم المدرسة الإعدادية وسنة الدراسة في البايو',
      targetElement: 'وصف البايو ("المدرسة الإعدادية التقنية • دفعة 2029")',
      riskLevel: 'High Risk',
      description: 'كتابة اسم مدرستك وسنة تخرجك تكشف للغرباء سنك الحقيقي، وموقع مدرستك، ومواعيد تواجدك اليومية من الصباح حتى المساء.',
      fixGuide: 'اجعل البايو إبداعياً وعاماً (مثال: "عاشق الروبوتات والتزلج 🤖🛹"). إياك وكتابة اسم مدرستك أو فصلك الدراسي.',
      detected: false
    },
    {
      id: 'snap-handle',
      title: 'نشر اسم حسابك الخاص للعامة في البايو',
      targetElement: 'رابط البايو ("أضيفوني على سناب شات: alex_privv")',
      riskLevel: 'Medium Risk',
      description: 'نشر معرفات تطبيقاتك الخاصة على حساب عام يجلب الروبوتات والمحتالين والغرباء مباشرة إلى محادثاتك السرية.',
      fixGuide: 'لا تعطِ حساب سناب شات أو ديسكورد إلا للأشخاص الذين تحدثت معهم وجهاً لوجه في الواقع.',
      detected: false
    },
    {
      id: 'geotag-location',
      title: 'تحديد الموقع الجغرافي المباشر في قاعة الرياضة',
      targetElement: 'وسم المنشور 1 ("القاعة الرياضية الغربية - ملعب 2 • الآن")',
      riskLevel: 'High Risk',
      description: 'نشر الموقع في الوقت الفعلي ("الآن في الملعب") يبث موقعك الجغرافي الفعلي لأي شخص يتصفح وسوم المدينة.',
      fixGuide: 'أوقف تشغيل خدمة تحديد المواقع (GPS) للكاميرا، ولا تنشر صور أنشطتك إلا بعد مغادرة المكان تماماً.',
      detected: false
    },
    {
      id: 'house-photo',
      title: 'رقم المنزل ولوحة الشارع ظاهرة في الخلفية',
      targetElement: 'صورة المنشور 2 ("لوح التزلج الجديد أمام الباب")',
      riskLevel: 'High Risk',
      description: 'حتى الصورة البريئة للوح تزلج أو دراجة أمام البيت قد تكشف رقم منزلك (مثلاً رقم 42) أو لافتة الشارع أو لوحة سيارة العائلة.',
      fixGuide: 'قم بقص أطراف الصورة قبل النشر لإخفاء الخلفية، أو غبّش على أرقام المنازل ولوحات السيارات.',
      detected: false
    },
    {
      id: 'security-question-leak',
      title: 'تسريب إجابة سؤال الأمان السري',
      targetElement: 'المنشور 3 ("عيد ميلاد سعيد لكلبي الذهبي باستر! 🐶")',
      riskLevel: 'Privacy Leak',
      description: 'اسم حيوانك الأليف واسم مدرستك الأولى هما أكثر أسئلة الأمان شيوعاً لاسترجاع وسرقة كلمات المرور! يجمع القراصنة هذه المعلومات من المنشورات.',
      fixGuide: 'تجنب استخدام اسم حيوانك الحقيقي كسؤال أمان، أو اكتب إجابات عشوائية لا يمكن لأحد تخمينها.',
      detected: false
    },
    {
      id: 'public-account-status',
      title: 'ترك الحساب بوضعية "عام" للجميع',
      targetElement: 'حالة خصوصية الحساب ("عام - متاح للجميع")',
      riskLevel: 'High Risk',
      description: 'الحساب العام يسمح لأي شخص في العالم بتحميل صورك الشخصية، أو سرقة ملامحك لتزييف حسابات أخرى، أو تتبع مع من تتحدث.',
      fixGuide: 'حوّل الحساب فوراً إلى "خاص (Private)" ليقتصر الاطلاع على منشوراتك على من توافق عليهم بنفسك.',
      detected: false
    }
  ]
};

export const PROFILE_AUDIT_ITEMS = PROFILE_AUDIT_DATA.en;
