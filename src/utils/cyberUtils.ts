import { PasswordAnalysis, Language } from '../types';

interface TrapDefinition {
  pattern: RegExp;
  names: {
    en: string;
    fr: string;
    ar: string;
  };
}

const COMMON_TRAPS: TrapDefinition[] = [
  {
    pattern: /^(12345|123456|12345678|123456789)$/i,
    names: {
      en: 'Sequential Numbers (Cracked in 0.001 seconds)',
      fr: 'Chiffres consécutifs (Cassé en 0,001 seconde)',
      ar: 'أرقام متتالية سهلة التخمين (تُكسر في 0.001 ثانية)'
    }
  },
  {
    pattern: /^(password|pass123|admin|qwerty|azerty|abc123)$/i,
    names: {
      en: 'Default Keyboard Pattern (Known to all hacker dictionaries)',
      fr: 'Suite de touches clavier courante (Présent dans tous les dictionnaires de piratage)',
      ar: 'نمط لوحة مفاتيح شهير (موجود في كل قواميس القراصنة)'
    }
  },
  {
    pattern: /(roblox|fortnite|minecraft|tiktok|snapchat|bball|soccer|football)/i,
    names: {
      en: 'Game / Sport name (First thing attackers guess)',
      fr: 'Nom de jeu / sport (Premier mot testé par les pirates)',
      ar: 'اسم لعبة أو رياضة مفضلة (أول ما يخمنه المهاجمون)'
    }
  },
  {
    pattern: /(2010|2011|2012|2013|2014|2024|2025|2026)/i,
    names: {
      en: 'Birth year or current year pattern',
      fr: 'Année de naissance ou année en cours',
      ar: 'سنة ميلاد أو السنة الحالية'
    }
  },
  {
    pattern: /^(iloveyou|monkey|dragon|superman|princess)$/i,
    names: {
      en: 'Top-50 Global common password',
      fr: 'Mot de passe parmi les 50 plus utilisés au monde',
      ar: 'كلمة من أكثر 50 كلمة مرور شائعة عالمياً'
    }
  }
];

export function analyzePassword(password: string, lang: Language = 'en'): PasswordAnalysis {
  if (!password) {
    return {
      score: 0,
      crackTimeText: lang === 'ar' ? 'فورياً (أقل من ثانية)' : lang === 'fr' ? 'Instantané' : 'Instantly',
      category: 'Critical Risk',
      color: '#ef4444',
      feedback: [],
      hasCommonTrap: null,
      entropy: 0,
    };
  }

  let poolSize = 0;
  if (/[a-z]/.test(password)) poolSize += 26;
  if (/[A-Z]/.test(password)) poolSize += 26;
  if (/[0-9]/.test(password)) poolSize += 10;
  if (/[^a-zA-Z0-9]/.test(password)) poolSize += 33;

  const entropy = Math.round(password.length * (poolSize > 0 ? Math.log2(poolSize) : 0));

  let trapFound: string | null = null;
  for (const trap of COMMON_TRAPS) {
    if (trap.pattern.test(password)) {
      trapFound = trap.names[lang] || trap.names.en;
      break;
    }
  }

  const combinations = Math.pow(poolSize, Math.min(password.length, 30));
  const seconds = combinations / 100_000_000_000;

  let crackTimeText = lang === 'ar' ? 'فورياً' : lang === 'fr' ? 'Instantané' : 'Instantly';
  let category: PasswordAnalysis['category'] = 'Critical Risk';
  let color = '#ef4444';
  let score = 0;

  if (trapFound && password.length < 10) {
    score = 15;
    crackTimeText = lang === 'ar'
      ? 'أقل من ثانية (هجوم قاموس فوري)'
      : lang === 'fr'
      ? 'Moins d\'une seconde (Attaque par dictionnaire)'
      : 'Less than 1 second (Dictionary Attack)';
    category = 'Critical Risk';
    color = '#ef4444';
  } else if (entropy < 28 || password.length < 7) {
    score = 20;
    crackTimeText = lang === 'ar' ? 'أقل من 3 ثوانٍ' : lang === 'fr' ? 'Moins de 3 secondes' : 'Under 3 seconds';
    category = 'Critical Risk';
    color = '#ef4444';
  } else if (entropy < 45 || password.length < 10) {
    score = 45;
    if (seconds < 60) {
      const s = Math.max(1, Math.round(seconds));
      crackTimeText = lang === 'ar' ? `${s} ثوانٍ` : lang === 'fr' ? `${s} secondes` : `${s} seconds`;
    } else {
      const m = Math.round(seconds / 60);
      crackTimeText = lang === 'ar' ? `${m} دقائق` : lang === 'fr' ? `${m} minutes` : `${m} minutes`;
    }
    category = 'Weak';
    color = '#f97316';
  } else if (entropy < 65 || password.length < 12) {
    score = 70;
    const days = Math.round(seconds / 86400);
    if (days > 365) {
      const y = Math.round(days / 365);
      crackTimeText = lang === 'ar' ? `${y} سنوات` : lang === 'fr' ? `${y} ans` : `${y} years`;
    } else {
      crackTimeText = lang === 'ar' ? `${days} أيام` : lang === 'fr' ? `${days} jours` : `${days} days`;
    }
    category = 'Moderate';
    color = '#eab308';
  } else if (entropy < 85) {
    score = 88;
    const centuries = Math.round(seconds / (86400 * 365 * 100));
    const val = Math.max(1, centuries * 100).toLocaleString();
    crackTimeText = lang === 'ar' ? `${val} سنة` : lang === 'fr' ? `${val} ans` : `${val} years`;
    category = 'Strong';
    color = '#10b981';
  } else {
    score = 100;
    crackTimeText = lang === 'ar'
      ? 'مليارات السنين (مستحيل الكسر بالحواسيب الحالية)'
      : lang === 'fr'
      ? 'Des milliards d\'années (Incassable actuellement)'
      : 'Trillions of years (Uncrackable by current tech)';
    category = 'Fortress';
    color = '#06b6d4';
  }

  return {
    score,
    crackTimeText,
    category,
    color,
    feedback: [],
    hasCommonTrap: trapFound,
    entropy,
  };
}

const PASSPHRASE_WORDS_EN = [
  'Galaxy', 'Rocket', 'Shadow', 'Cobalt', 'Falcon', 'Velvet', 'Pancake', 'Thunder',
  'Solar', 'Cosmic', 'Pixel', 'Vortex', 'Neon', 'Bicycle', 'Dragon', 'Timber',
  'Summit', 'Compass', 'Whistle', 'Meteor', 'Copper', 'Badger', 'Canyon', 'Puzzle',
  'Magnet', 'Rhythm', 'Anchor', 'Blizzard', 'Cactus', 'Horizon', 'Lantern', 'Quartz'
];

const PASSPHRASE_WORDS_FR = [
  'Fusee', 'Cobalt', 'Faucon', 'Cactus', 'Galaxie', 'Soleil', 'Pancake', 'Eclair',
  'Cosmique', 'Pixel', 'Vortex', 'Dragon', 'Sommet', 'Boussole', 'Meteore', 'Cuivre',
  'Blaireau', 'Canyon', 'Aimant', 'Rythme', 'Ancre', 'Horizon', 'Lanterne', 'Quartz'
];

const PASSPHRASE_WORDS_AR = [
  'صاروخ', 'صبار', 'كوبالت', 'صقر', 'مجرة', 'فطيرة', 'برق', 'شمس',
  'بكسل', 'تنين', 'قمة', 'بوصلة', 'نيزك', 'نحاس', 'مغناطيس', 'مرساة',
  'أفق', 'فانوس', 'ياقوت', 'غيمة', 'مفتاح', 'سيف', 'درع', 'كوكب'
];

export function generatePassphrase(lang: Language = 'en'): string {
  const list = lang === 'ar' ? PASSPHRASE_WORDS_AR : lang === 'fr' ? PASSPHRASE_WORDS_FR : PASSPHRASE_WORDS_EN;
  const selected: string[] = [];
  const wordsCopy = [...list];
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * wordsCopy.length);
    selected.push(wordsCopy.splice(randomIndex, 1)[0]);
  }
  const randomNum = Math.floor(Math.random() * 90 + 10);
  const symbols = ['!', '$', '#', '@', '&'];
  const symbol = symbols[Math.floor(Math.random() * symbols.length)];
  return `${selected.join('-')}${symbol}${randomNum}`;
}
