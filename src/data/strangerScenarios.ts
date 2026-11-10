import { StrangerScenario, Language } from '../types';

export const STRANGER_SCENARIOS_DATA: Record<Language, StrangerScenario[]> = {
  en: [
    {
      id: 'scam-gaming',
      platform: 'Roblox / Discord',
      title: 'The "Free Robux / Limited Skin" Giveaway',
      threatType: 'Phishing Scam',
      redFlags: [
        'Claims to have "extra codes" for strangers',
        'Uses urgent pressure ("deal ends in 5 minutes")',
        'Requires clicking an unofficial link to "verify account"',
        'Asking for Discord/Roblox login or password reset token'
      ],
      initialMessages: [
        {
          id: 'm1',
          sender: 'stranger',
          senderName: 'xX_GamerLoot_99Xx',
          text: 'Yo!! 🎮 You were ranked top 10 in our server bracket! I’m giving away 5,000 Robux codes today.',
          timestamp: '4:15 PM'
        },
        {
          id: 'm2',
          sender: 'stranger',
          senderName: 'xX_GamerLoot_99Xx',
          text: 'Click this link right now to claim before the timer expires: claim-free-robux-promo.net/verify/8th. Just login with your account to verify!',
          timestamp: '4:16 PM'
        }
      ],
      choices: [
        {
          id: 'c1',
          text: 'Click the link and quickly log in so you don’t lose the free 5,000 Robux.',
          isCorrect: false,
          riskRating: 'Dangerous',
          explanation: 'Critical Trap! That link is a fake phishing website made to steal your login credentials, two-factor cookies, and all your inventory items.'
        },
        {
          id: 'c2',
          text: 'Ask the stranger to send the code directly in Discord chat without using any link.',
          isCorrect: false,
          riskRating: 'Risky',
          explanation: 'Still risky. Scammers will claim "the server rules require verification" or send fake files. Engaging keeps you on their target list.'
        },
        {
          id: 'c3',
          text: 'Do not click the link. Take a screenshot, report the account for phishing/scamming, and block them immediately.',
          isCorrect: true,
          riskRating: 'Safe',
          explanation: '100% Expert Move! Real companies never give free currency through weird third-party links. Blocking and reporting protects both you and other students.'
        }
      ],
      expertTakeaway: 'Cybersecurity Rule: "If something online is too good to be true, your account credentials are the actual price." Legitimate game studios never need external verification.'
    },
    {
      id: 'catfish-school',
      platform: 'Instagram DM',
      title: 'The "Friend of a Friend" Infiltrator',
      threatType: 'Catfishing / Grooming',
      redFlags: [
        'Account has 8 followers, no mutual tagged photos, created recently',
        'Mentions your school or local sports team to build fake trust',
        'Pushes to switch to Snapchat or private disappearing messages',
        'Requests personal selfies or home address'
      ],
      initialMessages: [
        {
          id: 'm1',
          sender: 'stranger',
          senderName: 'jayden_hoops_09',
          text: 'Hey! Are you from Lincoln Middle School? I saw you at the track meet on Friday! 🏃‍♂️',
          timestamp: '6:30 PM'
        },
        {
          id: 'm2',
          sender: 'stranger',
          senderName: 'jayden_hoops_09',
          text: 'I’m transferring there next month. Add my private Snap so we can talk where teachers don’t see: snap_ghost_j9. Also send a pic of your schedule so I know if we share 4th period!',
          timestamp: '6:31 PM'
        }
      ],
      choices: [
        {
          id: 'c1',
          text: 'Send a photo of your school schedule and add them on Snap to be friendly to the "new kid".',
          isCorrect: false,
          riskRating: 'Dangerous',
          explanation: 'High Danger! Your school schedule contains your full name, student ID, exact classroom numbers, and physical location every hour of the day. Never share this with anyone unverified.'
        },
        {
          id: 'c2',
          text: 'Reply asking what town they moved from and asking who their favorite teacher is.',
          isCorrect: false,
          riskRating: 'Risky',
          explanation: 'Catfishes excel at improvising or researching school websites to bluff answers. Engaging opens the door to deeper social manipulation.'
        },
        {
          id: 'c3',
          text: 'Inspect the profile (brand new, 0 real school mutuals). Do not share your schedule or private Snap. Inform a trusted adult and hit block.',
          isCorrect: true,
          riskRating: 'Safe',
          explanation: 'Spot-on! Predators and scammers frequently pretend to be incoming students to gather private schedules and photos. Verifying through real in-person friends is essential.'
        }
      ],
      expertTakeaway: 'Social Engineering Principle: Attackers weaponize "local familiarity" (school names, sports teams, mascot names) to bypass your natural skepticism. Always keep real-world schedules private.'
    },
    {
      id: 'guilt-trip',
      platform: 'Snapchat',
      title: 'The "Secret Keeper" Guilt-Trip DM',
      threatType: 'Emotional Manipulation',
      redFlags: [
        'Demands secrecy ("don’t tell your friends or parents")',
        'Uses emotional guilt ("I thought you trusted me")',
        'Escalates demands for private photos or webcam access',
        'Becomes angry when you set boundaries'
      ],
      initialMessages: [
        {
          id: 'm1',
          sender: 'stranger',
          senderName: 'shadow_vibes_x',
          text: 'Hey, remember the chat we had yesterday? I really feel like you’re the only person who actually understands me.',
          timestamp: '9:04 PM'
        },
        {
          id: 'm2',
          sender: 'stranger',
          senderName: 'shadow_vibes_x',
          text: 'Can you send a face pic right now? Don’t show your mom or anyone. If you leave me on read, you’re basically proving you were lying about being my friend.',
          timestamp: '9:05 PM'
        }
      ],
      choices: [
        {
          id: 'c1',
          text: 'Feel bad and quickly send a photo so they don’t get upset or feel hurt.',
          isCorrect: false,
          riskRating: 'Dangerous',
          explanation: 'This is textbook emotional coercion. Once an online stranger gets one photo or piece of personal data, they often blackmail for more ("send another or I post this").'
        },
        {
          id: 'c2',
          text: 'Argue back angrily: "You are being creepy, leave me alone or my older brother will fight you!"',
          isCorrect: false,
          riskRating: 'Risky',
          explanation: 'Confronting or making empty threats feeds the troll and gives them emotional leverage. It rarely stops manipulation.'
        },
        {
          id: 'c3',
          text: 'Recognize the manipulation tactic. Take a screenshot of the chat immediately as evidence, block the sender, and tell a parent or school counselor.',
          isCorrect: true,
          riskRating: 'Safe',
          explanation: 'Masterclass response! Anyone asking an 8th grader for secrecy or photos is violating safety boundaries. Telling a trusted adult removes all power from the manipulator.'
        }
      ],
      expertTakeaway: 'The Golden Safety Rule: Any online contact who insists on secrecy ("keep this between us") is a red alert. Safe, respectful friends never ask you to hide things from adults who protect you.'
    },
    {
      id: 'tiktok-impersonator',
      platform: 'TikTok',
      title: 'The "Mutual Follower Burner" Gossip Bait',
      threatType: 'Credential Harvesting',
      redFlags: [
        'Account bio says "backup account of your classmate"',
        'Offers juicy school gossip or secret leaked photos in exchange for info',
        'Urges you to click a bio link or scan a QR code',
        'Requests passwords or verification codes sent to your phone'
      ],
      initialMessages: [
        {
          id: 'm1',
          sender: 'stranger',
          senderName: '8th_grade_confessions_tea',
          text: 'OMG 😱 someone at your school submitted a rumor about you on our anonymous page!',
          timestamp: '3:45 PM'
        },
        {
          id: 'm2',
          sender: 'stranger',
          senderName: '8th_grade_confessions_tea',
          text: 'Click the link in my bio to read it before 500 students see it. You just need to verify your TikTok phone code to unlock the post.',
          timestamp: '3:46 PM'
        }
      ],
      choices: [
        {
          id: 'c1',
          text: 'Panic, click the link, and enter your phone number and security code to delete the rumor.',
          isCorrect: false,
          riskRating: 'Dangerous',
          explanation: 'The entire rumor is fake clickbait! The SMS code you enter is actually the 2-Factor Authentication reset code for your real TikTok account, handing full control to the hacker.'
        },
        {
          id: 'c2',
          text: 'Leave a comment telling them to take it down or you’ll report them.',
          isCorrect: false,
          riskRating: 'Risky',
          explanation: 'Comment engagement boosts the scammer’s visibility on TikTok’s algorithm, attracting more victims from your school.'
        },
        {
          id: 'c3',
          text: 'Recognize the FOMO/fear tactic. Never share 2FA SMS codes with any website. Report the burner account to TikTok for impersonation/harassment and warn friends in person.',
          isCorrect: true,
          riskRating: 'Safe',
          explanation: 'Outstanding cyber awareness! "Anonymous confession / tea" accounts weaponize middle school social anxiety to hijack accounts and spread malware.'
        }
      ],
      expertTakeaway: 'SMS & 2FA Security: Never, under any circumstances, share a 6-digit security code sent to your phone with anyone else—even if they claim it is to verify a contest, post, or friend.'
    }
  ],
  fr: [
    {
      id: 'scam-gaming',
      platform: 'Roblox / Discord',
      title: 'L\'Arnaque "Robux Gratuits & Skins Rares"',
      threatType: 'Phishing Scam',
      redFlags: [
        'Prétend avoir des "codes en trop" pour des inconnus',
        'Met la pression ("l\'offre expire dans 5 minutes")',
        'Oblige à cliquer sur un lien externe pour "vérifier le compte"',
        'Demande les identifiants Discord ou Roblox'
      ],
      initialMessages: [
        {
          id: 'm1',
          sender: 'stranger',
          senderName: 'xX_GamerLoot_99Xx',
          text: 'Salut !! 🎮 Tu étais dans le top 10 du tournoi de notre serveur ! Je distribue des codes de 5000 Robux aujourd\'hui.',
          timestamp: '16:15'
        },
        {
          id: 'm2',
          sender: 'stranger',
          senderName: 'xX_GamerLoot_99Xx',
          text: 'Clique sur ce lien avant la fin du chrono : claim-free-robux-promo.net/verify/8th. Connecte-toi juste avec ton compte pour valider !',
          timestamp: '16:16'
        }
      ],
      choices: [
        {
          id: 'c1',
          text: 'Cliquer sur le lien et se connecter vite pour ne pas rater les 5000 Robux.',
          isCorrect: false,
          riskRating: 'Dangerous',
          explanation: 'Gros Piège ! Ce lien est un faux site de phishing créé pour voler tes identifiants, tes cookies de session et tout ton inventaire de jeu.'
        },
        {
          id: 'c2',
          text: 'Demander à l\'inconnu d\'envoyer le code directement dans le chat sans passer par un lien.',
          isCorrect: false,
          riskRating: 'Risky',
          explanation: 'Toujours risqué. Les arnaqueurs vont prétexter que le système exige un lien ou vont t\'envoyer un fichier infecté. Répondre te maintient dans leur viseur.'
        },
        {
          id: 'c3',
          text: 'Ne pas cliquer. Faire une capture d\'écran, signaler le compte pour tentative d\'arnaque et le bloquer immédiatement.',
          isCorrect: true,
          riskRating: 'Safe',
          explanation: '100% Réflexe Pro ! Les éditeurs officiels de jeux n\'offrent jamais de monnaie virtuelle via des liens bizarres. Bloquer et signaler te protège toi et tes camarades.'
        }
      ],
      expertTakeaway: 'Règle d\'or Cyber : "Si une offre en ligne est trop belle pour être vraie, tes identifiants sont le vrai prix." Ne te réauthentifie jamais sur un site tiers.'
    },
    {
      id: 'catfish-school',
      platform: 'Instagram DM',
      title: 'L\'Infiltré "Ami d\'un Ami du Collège"',
      threatType: 'Catfishing / Grooming',
      redFlags: [
        'Compte récent avec 8 abonnés et 0 photo identifiée avec des élèves',
        'Cite le nom de ton collège ou club pour créer une fausse confiance',
        'Pousse à basculer sur Snapchat en messages éphémères',
        'Demande ton emploi du temps ou des selfies perso'
      ],
      initialMessages: [
        {
          id: 'm1',
          sender: 'stranger',
          senderName: 'jayden_hoops_09',
          text: 'Salut ! Tu es bien au collège technique ? Je t\'ai vu au cross vendredi ! 🏃‍♂️',
          timestamp: '18:30'
        },
        {
          id: 'm2',
          sender: 'stranger',
          senderName: 'jayden_hoops_09',
          text: 'J\'arrive dans votre établissement le mois prochain. Ajoute mon Snap privé pour qu\'on parle : snap_ghost_j9. Envoie aussi une photo de ton emploi du temps pour voir si on a cours ensemble !',
          timestamp: '18:31'
        }
      ],
      choices: [
        {
          id: 'c1',
          text: 'Envoyer une photo de son emploi du temps et l\'ajouter sur Snap pour être sympa avec le "nouveau".',
          isCorrect: false,
          riskRating: 'Dangerous',
          explanation: 'Très Dangereux ! Ton emploi du temps contient ton nom, tes salles de classe exactes et ta localisation physique heure par heure. Ne donne jamais ça à un inconnu.'
        },
        {
          id: 'c2',
          text: 'Lui demander de quelle ville il vient et qui est son prof principal.',
          isCorrect: false,
          riskRating: 'Risky',
          explanation: 'Les imposteurs savent improviser ou consulter le site internet du collège pour inventer des réponses. Discuter permet de t\'embobiner.'
        },
        {
          id: 'c3',
          text: 'Vérifier le profil (compte neuf, aucun vrai contact commun). Ne donner ni emploi du temps ni Snap, en parler à un adulte et bloquer.',
          isCorrect: true,
          riskRating: 'Safe',
          explanation: 'Parfait ! Les prédateurs se font souvent passer pour de futurs élèves pour collecter photos et plannings. Vérifie toujours auprès de vrais amis en classe.'
        }
      ],
      expertTakeaway: 'Ingénierie Sociale : Les escrocs utilisent la "familiarité locale" (nom du collège, de l\'équipe) pour désactiver ta méfiance. Garde toujours tes horaires secrets.'
    },
    {
      id: 'guilt-trip',
      platform: 'Snapchat',
      title: 'Le Chantage Émotionnel "Garde le Secret"',
      threatType: 'Emotional Manipulation',
      redFlags: [
        'Exige le secret ("n\'en parle surtout pas à tes parents")',
        'Culpabilise ("je croyais que tu étais mon ami")',
        'Réclame des photos privées ou l\'activation de la caméra',
        'Devient agressif dès que tu poses une limite'
      ],
      initialMessages: [
        {
          id: 'm1',
          sender: 'stranger',
          senderName: 'shadow_vibes_x',
          text: 'Salut, tu te rappelles de notre discussion d\'hier ? J\'ai l\'impression que tu es la seule personne qui me comprend vraiment.',
          timestamp: '21:04'
        },
        {
          id: 'm2',
          sender: 'stranger',
          senderName: 'shadow_vibes_x',
          text: 'Tu peux m\'envoyer une photo de ton visage là maintenant ? Ne la montre à personne. Si tu me laisses en vu, ça prouve que tu me mentais.',
          timestamp: '21:05'
        }
      ],
      choices: [
        {
          id: 'c1',
          text: 'Se sentir coupable et envoyer vite une photo pour ne pas le blesser.',
          isCorrect: false,
          riskRating: 'Dangerous',
          explanation: 'C\'est du chantage émotionnel pur. Dès qu\'un inconnu obtient une photo intime, il s\'en sert pour faire du chantage ("envoie-en d\'autres ou je la publie partout").'
        },
        {
          id: 'c2',
          text: 'S\'énerver dans le chat : "T\'es bizarre, laisse-moi tranquille ou mon grand frère va venir te voir !"',
          isCorrect: false,
          riskRating: 'Risky',
          explanation: 'Répondre par des menaces nourrit le manipulateur et lui donne des prises pour continuer à te harceler.'
        },
        {
          id: 'c3',
          text: 'Repérer la manipulation. Prendre une capture d\'écran comme preuve, bloquer immédiatement et prévenir ses parents ou le CPE.',
          isCorrect: true,
          riskRating: 'Safe',
          explanation: 'Réaction modèle ! Toute personne réclamant du secret ou des photos franchit une ligne rouge. En parler à un adulte casse net le pouvoir du manipulateur.'
        }
      ],
      expertTakeaway: 'Règle d\'Or : Tout contact en ligne qui exige le secret ("ça reste entre nous") est un signal d\'alarme absolu. Un vrai ami ne te demande jamais de mentir à tes proches.'
    },
    {
      id: 'tiktok-impersonator',
      platform: 'TikTok',
      title: 'Le Compte Burner "Rumeurs & Gossip"',
      threatType: 'Credential Harvesting',
      redFlags: [
        'Bio disant "compte secret du collège"',
        'Promet des scoops ou des dossiers secrets en échange d\'un clic',
        'Pousse à cliquer sur un lien en bio ou scanner un QR code',
        'Demande le code SMS reçu sur ton téléphone'
      ],
      initialMessages: [
        {
          id: 'm1',
          sender: 'stranger',
          senderName: '8th_grade_confessions_tea',
          text: 'OMG 😱 quelqu\'un de ton collège a posté un gros dossier sur toi sur notre page anonyme !',
          timestamp: '15:45'
        },
        {
          id: 'm2',
          sender: 'stranger',
          senderName: '8th_grade_confessions_tea',
          text: 'Clique sur le lien en bio pour le lire avant que 500 élèves ne le voient. Tu dois juste valider le code SMS reçu pour débloquer l\'article.',
          timestamp: '15:46'
        }
      ],
      choices: [
        {
          id: 'c1',
          text: 'Paniquer, cliquer sur le lien et taper son numéro et le code reçu pour supprimer la rumeur.',
          isCorrect: false,
          riskRating: 'Dangerous',
          explanation: 'Toute la rumeur est fausse ! Le code SMS reçu est en fait le code de récupération pour pirater ton propre compte TikTok et en prendre le contrôle total.'
        },
        {
          id: 'c2',
          text: 'Mettre un commentaire rageur pour exiger qu\'ils suppriment la publication.',
          isCorrect: false,
          riskRating: 'Risky',
          explanation: 'Commenter fait monter la visibilité de la vidéo dans l\'algorithme de TikTok et attire encore plus d\'élèves.'
        },
        {
          id: 'c3',
          text: 'Reconnaître le piège de la peur (FOMO). Ne jamais donner de code SMS reçu. Signaler le compte anonyme et prévenir ses camarades de vive voix.',
          isCorrect: true,
          riskRating: 'Safe',
          explanation: 'Excellente lucidité cyber ! Les comptes anonymes de potins jouent sur la peur pour voler des comptes et diffuser des liens malveillants.'
        }
      ],
      expertTakeaway: 'Sécurité SMS & 2FA : Ne donne JAMAIS un code de sécurité reçu par SMS à qui que ce soit, même sous prétexte de débloquer un jeu ou une information.'
    }
  ],
  ar: [
    {
      id: 'scam-gaming',
      platform: 'روبلوكس / ديسكورد',
      title: 'خدعة "شحن روبوكس مجاني وسكنات نادرة"',
      threatType: 'Phishing Scam',
      redFlags: [
        'يدعي امتلاك "أكواد إضافية مجانية" يوزعها على الغرباء',
        'يمارس ضغطاً نفسياً بالوقت ("العرض ينتهي خلال 5 دقائق")',
        'يطلب الضغط على رابط خارجي غير رسمي "لتأكيد الحساب"',
        'يطلب بيانات تسجيل الدخول إلى ديسكورد أو روبلوكس'
      ],
      initialMessages: [
        {
          id: 'm1',
          sender: 'stranger',
          senderName: 'xX_GamerLoot_99Xx',
          text: 'مرحباً يا بطل! 🎮 حسابك فاز ضمن أفضل 10 لاعبين في سيرفرنا! سأوزع أكواد 5000 روبوكس اليوم.',
          timestamp: '4:15 م'
        },
        {
          id: 'm2',
          sender: 'stranger',
          senderName: 'xX_GamerLoot_99Xx',
          text: 'اضغط على هذا الرابط فوراً قبل انتهاء الوقت: claim-free-robux-promo.net/verify/8th. فقط سجل دخولك لتفعيل الكود في حسابك!',
          timestamp: '4:16 م'
        }
      ],
      choices: [
        {
          id: 'c1',
          text: 'الضغط بسرعة على الرابط وتسجيل الدخول حتى لا تضيع الـ 5000 روبوكس المجانية.',
          isCorrect: false,
          riskRating: 'Dangerous',
          explanation: 'فخ تصيد خطير! الرابط هو صفحة وهمية مصممة لسرقة اسم المستخدم وكلمة السر وملفات تعريف الحساب وكل ما تملكه في اللعبة.'
        },
        {
          id: 'c2',
          text: 'الطلب من الشخص الغريب إرسال الكود مباشرة في محادثة الديسكورد دون استخدام الرابط.',
          isCorrect: false,
          riskRating: 'Risky',
          explanation: 'ما زال تصرفاً محفوفاً بالمخاطر. سيتحجج المحتال بأن القوانين تتطلب الرابط أو يرسل ملفاً خبيثاً. الاستمرار في الرد يبقيك هدفاً له.'
        },
        {
          id: 'c3',
          text: 'عدم الضغط على الرابط. التقاط صورة شاشة (Screenshot)، الإبلاغ عن الحساب للاحتيال وحظره فوراً.',
          isCorrect: true,
          riskRating: 'Safe',
          explanation: 'تصرف احترافي 100%! الشركات الرسمية للألعاب لا توزع عملاتها عبر روابط غريبة في الدردشة. الحظر والإبلاغ يحميك ويحمي زملاءك.'
        }
      ],
      expertTakeaway: 'قاعدة الأمن السيبراني: "إذا كان العرض على الإنترنت مجانياً بشكل مبالغ فيه، فحسابك الشخصي هو الثمن الفعلي!" الشركات لا تطلب إعادة تسجيل الدخول عبر روابط خارجية.'
    },
    {
      id: 'catfish-school',
      platform: 'إنستغرام (رسالة خاصة)',
      title: 'المتسلل المتظاهر بأنه "صديق من المدرسة"',
      threatType: 'Catfishing / Grooming',
      redFlags: [
        'حساب جديد يتابعه 8 أشخاص فقط ولا توجد له أي صور مع طلاب المدرسة',
        'يذكر اسم مدرستك أو فريقك الرياضي لبناء ثقة زائفة',
        'يصر على الانتقال إلى سناب شات والرسائل المؤقتة',
        'يطلب جدول حصصك المدرسي أو صوراً شخصية في غرفتك'
      ],
      initialMessages: [
        {
          id: 'm1',
          sender: 'stranger',
          senderName: 'jayden_hoops_09',
          text: 'أهلاً! أنت في المدرسة الإعدادية التقنية صحيح؟ رأيتك في ورشة التكنولوجيا يوم الجمعة! 🏃‍♂️',
          timestamp: '6:30 م'
        },
        {
          id: 'm2',
          sender: 'stranger',
          senderName: 'jayden_hoops_09',
          text: 'أنا سأنتقل لمدرستكم الشهر القادم. ضفني على سناب شات لنتحدث دون مراقبة الأساتذة: snap_ghost_j9. وأرسل لي صورة جدول حصصك لنعرف إذا كنا في نفس القسم!',
          timestamp: '6:31 م'
        }
      ],
      choices: [
        {
          id: 'c1',
          text: 'إرسال صورة جدول الحصص وإضافته على سناب شات بدافع اللطف مع التلميذ "الجديد".',
          isCorrect: false,
          riskRating: 'Dangerous',
          explanation: 'خطر شديد جداً! جدول الحصص يحتوي على اسمك وقسمك وقاعاتك وأوقات تواجدك ومغادرتك ساعة بساعة. إياك وإعطاء هذه البيانات لشخص غير موثوق.'
        },
        {
          id: 'c2',
          text: 'الرد عليه وسؤاله عن المدينة التي جاء منها واسم أستاذه المفضل لاختباره.',
          isCorrect: false,
          riskRating: 'Risky',
          explanation: 'المحتالون بارعون في اختلاق الإجابات والبحث في موقع المدرسة الإلكتروني للتظاهر بالمعرفة. التجاوب معهم يفتح الباب للاستدراج.'
        },
        {
          id: 'c3',
          text: 'فحص الحساب (جديد، لا أصدقاء حقيقيين مشتركين). عدم إرسال الجدول أو السناب، إخبار الأهل وحظر الحساب فوراً.',
          isCorrect: true,
          riskRating: 'Safe',
          explanation: 'أحسنت! يستغل المتربصون أسماء المدارس لبناء ألفة وهمية لجمع صور ومواعيد الطلاب. تأكد دائماً من زملائك الحقيقيين وجهاً لوجه في المدرسة.'
        }
      ],
      expertTakeaway: 'مبدأ الهندسة الاجتماعية: يستغل المخترقون أسماء المدارس والفرق المحلية لتعطيل حذرك الطبيعي. احتفظ دائماً بجداولك وموقعك لنفسك.'
    },
    {
      id: 'guilt-trip',
      platform: 'سناب شات',
      title: 'الابتزاز العاطفي وفرض "السرية"',
      threatType: 'Emotional Manipulation',
      redFlags: [
        'يطلب كتمان الأمر والسرية التامة ("إياك أن تخبر والديك أو أصدقاءك")',
        'يستخدم الشعور بالذنب ("كنت أظنك تثق بي وتعتبرني صديقك")',
        'يتدرج في طلب صور شخصية أو فتح كاميرا الهاتف',
        'يغضب بمجرد أن تضع حدوداً واضحة وترفض طلبه'
      ],
      initialMessages: [
        {
          id: 'm1',
          sender: 'stranger',
          senderName: 'shadow_vibes_x',
          text: 'أهلاً، هل تذكر حديثنا بالأمس؟ أشعر بصدق أنك الشخص الوحيد الذي يفهمني ويهتم بي.',
          timestamp: '9:04 م'
        },
        {
          id: 'm2',
          sender: 'stranger',
          senderName: 'shadow_vibes_x',
          text: 'هل يمكنك إرسال صورة لوجهك الآن فوراً؟ ولا تخبر والدتك. إذا تجاهلت رسالتي فأنت تثبت أنك كنت تكذب بشأن صداقتنا.',
          timestamp: '9:05 م'
        }
      ],
      choices: [
        {
          id: 'c1',
          text: 'الشعور بالإحراج والذنب، وإرسال صورة سريعة حتى لا يغضب أو يحزن.',
          isCorrect: false,
          riskRating: 'Dangerous',
          explanation: 'هذا ابتزاز عاطفي كلاسيكي! بمجرد حصول الغريب على صورة شخصية، يبدأ في تهديدك ("أرسل صوراً أخرى وإلا نشرت هذه في كل مكان").'
        },
        {
          id: 'c2',
          text: 'الشجار معه بغضب: "أنت شخص مريب، ابتعد عني وإلا سيضربك أخي الأكبر!"',
          isCorrect: false,
          riskRating: 'Risky',
          explanation: 'الرد بعصبية وتهديدات فارغة يغذي المتنمر ويمنحه وسيلة للضغط عليك أكثر.'
        },
        {
          id: 'c3',
          text: 'كشف أسلوب التلاعب. أخذ لقطة شاشة فورية كدليل، حظر المرسل وإخبار الوالدين أو المرشد التربوي.',
          isCorrect: true,
          riskRating: 'Safe',
          explanation: 'تصرف قمة في النضج والشجاعة! أي شخص يطلب من طالب السرية أو صوراً شخصية يتجاوز الخطوط الحمراء. إخبار شخص راشد يسقط كل قوة المبتز.'
        }
      ],
      expertTakeaway: 'القاعدة الذهبية: أي تواصل عبر الإنترنت يصر على السرية ("دع هذا بيننا فقط") هو جرس إنذار أحمر. الأصدقاء الحقيقيون لا يطلبون منك إخفاء أمور عن أهلك.'
    },
    {
      id: 'tiktok-impersonator',
      platform: 'تيك توك',
      title: 'حساب الفضائح والاعترافات المزيف',
      threatType: 'Credential Harvesting',
      redFlags: [
        'وصف الحساب: "حساب سري لفضائح طلاب المدرسة"',
        'يعد بكشف شائعات سرية وصور مسربة مقابل الضغط على رابط',
        'يحثك على فتح الرابط في البايو أو مسح باركود (QR)',
        'يطلب إدخال رقم الهاتف وكود التأكيد الذي يصلك في رسالة'
      ],
      initialMessages: [
        {
          id: 'm1',
          sender: 'stranger',
          senderName: '8th_grade_confessions_tea',
          text: 'يا إلهي 😱 شخص ما في مدرستك أرسل إشاعة محرجة جداً عنك في صفحتنا المجهولة!',
          timestamp: '3:45 م'
        },
        {
          id: 'm2',
          sender: 'stranger',
          senderName: '8th_grade_confessions_tea',
          text: 'اضغط على الرابط في البايو لقراءتها قبل أن يراها 500 طالب. تحتاج فقط لإدخال رمز الـ SMS الذي وصلك لفتح المنشور.',
          timestamp: '3:46 م'
        }
      ],
      choices: [
        {
          id: 'c1',
          text: 'الارتباك والهلع، والضغط على الرابط وكتابة رقم الهاتف والرمز السري لحذف المنشور.',
          isCorrect: false,
          riskRating: 'Dangerous',
          explanation: 'الإشاعة كلها كذبة للإيقاع بك! الرمز الذي أدخلته هو رمز إعادة تعيين حساب التيك توك الخاص بك، وبإدخاله تكون قد سلمت حسابك للمخترق.'
        },
        {
          id: 'c2',
          text: 'كتابة تعليقات غاضبة تطالبهم بحذف المنشور فوراً.',
          isCorrect: false,
          riskRating: 'Risky',
          explanation: 'التفاعل والتعليقات يرفعان الفيديو في خوارزميات تيك توك ويجذبان عدداً أكبر من ضحايا مدرستك.'
        },
        {
          id: 'c3',
          text: 'إدراك حيلة الخوف (FOMO). عدم مشاركة أي رمز SMS نهائياً، الإبلاغ عن الحساب الوهمي وتحذير الأصدقاء شفهياً.',
          isCorrect: true,
          riskRating: 'Safe',
          explanation: 'وعي رقمي استثنائي! حسابات "الاعترافات المجهولة" تستغل قلق المراهقين لسرقة الحسابات وزرع البرمجيات الخبيثة.'
        }
      ],
      expertTakeaway: 'أمان الرسائل النصية والتحقق: إياك تحت أي ظرف أن تعطي كود الـ SMS السري المكون من 6 أرقام لأي شخص أو موقع خارجي، مهما كانت الحجة.'
    }
  ]
};

export const STRANGER_SCENARIOS = STRANGER_SCENARIOS_DATA.en;
