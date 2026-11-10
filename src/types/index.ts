export type Language = 'en' | 'fr' | 'ar';

export interface ConceptTip {
  id: string;
  category: 'passwords' | 'strangers' | 'cyberbullying' | 'privacy';
  title: string;
  simpleAnalogy: string;
  goldenRule: string;
  concreteExample: string;
  interactiveCheck: {
    question: string;
    goodChoice: string;
    badChoice: string;
    explanation: string;
  };
}

export interface NavSection {
  id: 'overview' | 'concepts' | 'passwords' | 'stranger-dms' | 'cyberbullying' | 'social-media';
  label: string;
}

export interface PasswordAnalysis {
  score: number; // 0 to 100
  crackTimeText: string;
  category: 'Critical Risk' | 'Weak' | 'Moderate' | 'Strong' | 'Fortress';
  color: string;
  feedback: string[];
  hasCommonTrap: string | null;
  entropy: number;
}

export interface ChatMessage {
  id: string;
  sender: 'stranger' | 'user' | 'system';
  senderName: string;
  avatar?: string;
  text: string;
  timestamp: string;
}

export interface ScenarioChoice {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation: string;
  riskRating: 'Safe' | 'Risky' | 'Dangerous';
}

export interface StrangerScenario {
  id: string;
  platform: string;
  title: string;
  threatType: string;
  initialMessages: ChatMessage[];
  choices: ScenarioChoice[];
  expertTakeaway: string;
  redFlags: string[];
}

export interface BullyingScenario {
  id: string;
  title: string;
  situation: string;
  context: string;
  options: {
    action: string;
    role: 'Bystander' | 'Target' | 'Upstander' | string;
    outcome: string;
    isRecommended: boolean;
    points: number;
  }[];
  expertAdvice: string;
}

export interface ProfileAuditItem {
  id: string;
  title: string;
  targetElement: string;
  riskLevel: 'High Risk' | 'Medium Risk' | 'Privacy Leak' | string;
  description: string;
  fixGuide: string;
  detected: boolean;
}

export interface QuizQuestion {
  id: number;
  question: string;
  scenario: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  category: string;
}
