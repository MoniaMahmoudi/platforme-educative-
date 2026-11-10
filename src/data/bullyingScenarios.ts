import { BullyingScenario, Language } from '../types';

export const BULLYING_SCENARIOS_DATA: Record<Language, BullyingScenario[]> = {
  en: [
    {
      id: 'b1-group-chat',
      title: 'The Group Chat Roast Spiral',
      context: 'Classmate Group Chat (14 members)',
      situation: 'During PE class, Jordan slipped in the gym mud and ripped his shorts. Later that night, someone posts a slow-motion video of the fall into the 14-person class chat with laughing emojis. Three people start commenting mean insults like "Bro should just drop out" and "@everyone vote if Jordan is the biggest clown". Jordan goes completely silent.',
      options: [
        {
          role: 'Bystander',
          action: 'Send a laughing emoji ("😂💀") so the popular kids don’t think you’re weird or target you next.',
          outcome: 'Passive bullying. Adding a laughing emoji validates the bullies and makes Jordan feel 10x more isolated and ganged up on.',
          isRecommended: false,
          points: 0
        },
        {
          role: 'Bystander',
          action: 'Stay silent and just watch the chat unfold without saying anything.',
          outcome: 'Silence is interpreted by bullies as permission. While you didn’t hurt Jordan directly, silent crowds allow online harassment to grow.',
          isRecommended: false,
          points: 30
        },
        {
          role: 'Upstander',
          action: 'Post in the group: "Alright guys, that’s enough. It happened in gym, let it go." and immediately message Jordan privately: "Hey Jordan, don’t listen to them, they’re being childish. Are you good?"',
          outcome: 'Optimal Upstander Move! A single voice interrupting a roast breaks the bystander effect. Messaging the target privately gives critical emotional support.',
          isRecommended: true,
          points: 100
        }
      ],
      expertAdvice: 'Research shows that when just ONE student speaks up in a group chat, bullying stops within 10 seconds in over 50% of incidents. You don’t need to fight; a firm "that is getting old, move on" breaks the mob mentality.'
    },
    {
      id: 'b2-burner-page',
      title: 'The "Spotted / Roast" School Burner Page',
      context: 'Anonymous Instagram Story / Poll',
      situation: 'An anonymous account named "@west_ms_tea_drop" posts an anonymous poll rating girls and boys at your school on their looks and clothes, calling out specific 8th graders by their first and last initials with degrading comments. Several classmates are resharing the story onto their own accounts.',
      options: [
        {
          role: 'Bystander',
          action: 'Vote in the poll and screenshot it to send to friends to see who they voted for.',
          outcome: 'Fueling the fire! Participating in anonymous polls rewards the cyberbully with clicks and boosts algorithmic reach.',
          isRecommended: false,
          points: 0
        },
        {
          role: 'Upstander',
          action: 'Leave an aggressive comment threatening to find who owns the account and beat them up after school.',
          outcome: 'Escalation hazard. Threatening violence can get your own account banned or lead to school disciplinary consequences, shifting blame to you.',
          isRecommended: false,
          points: 20
        },
        {
          role: 'Upstander',
          action: 'Take screenshots with clear timestamps, tap Report > Harassment/Bullying on Instagram, tell a school counselor or dean, and encourage friends not to view or reshare.',
          outcome: 'Textbook Protocol! Reporting directly to Instagram + alerting school admin results in account removal without giving the bully attention.',
          isRecommended: true,
          points: 100
        }
      ],
      expertAdvice: 'Anonymous bully accounts thrive on one thing: "Audience Attention". If you starve them of reposts and submit reports with timestamps, platforms take them down swiftly.'
    },
    {
      id: 'b3-doxxing-threat',
      title: 'The Gaming Discord Doxxing & Swat Threat',
      context: 'Competitive Discord Voice & Text Channel',
      situation: 'During a competitive gaming match, a teammate loses a clutch round. An opposing player starts typing: "I know what city you live in kid. Drop your real name and address or I’m leaking your IP and calling your local police station with a fake emergency."',
      options: [
        {
          role: 'Target',
          action: 'Panic, apologize profusely, and offer to give them your rare in-game skins to make them stop.',
          outcome: 'Extortion trap! Bullies who see fear will continue blackmailing for more items, money, or personal info.',
          isRecommended: false,
          points: 10
        },
        {
          role: 'Target',
          action: 'Type back your fake address and challenge them to try it.',
          outcome: 'Dangerous gamble. Antagonizing someone threatening swatting or doxxing increases their determination.',
          isRecommended: false,
          points: 15
        },
        {
          role: 'Upstander',
          action: 'Immediately screenshot the threat with user ID tag, leave the call, block user, report to Discord Trust & Safety, and notify parents/school resource officer right away.',
          outcome: '100% Correct Protocol! Doxxing and swatting threats are serious offenses. Involving trusted adults ensures physical safety.',
          isRecommended: true,
          points: 100
        }
      ],
      expertAdvice: 'Swatting and Doxxing threats must NEVER be handled alone. Always save evidence before blocking (Discord User ID + exact chat log) and report to adult authorities immediately.'
    }
  ],
  fr: [
    {
      id: 'b1-group-chat',
      title: 'L\'Engrenage des Moqueries dans le Groupe de Classe',
      context: 'Groupe WhatsApp de la classe (14 membres)',
      situation: 'En cours d\'EPS, Jordan a glissé dans la boue et son short s\'est déchiré. Le soir même, un élève poste la vidéo au ralenti dans le groupe de classe avec des émojis mdr. Trois élèves enchaînent avec des insultes : "Il ferait mieux de changer d\'école" et "@toutlemonde votez pour le plus grand clown". Jordan ne répond plus du tout.',
      options: [
        {
          role: 'Bystander',
          action: 'Envoyer un émoji mort de rire ("😂💀") pour que les populaires ne te trouvent pas bizarre ou ne s\'en prennent pas à toi.',
          outcome: 'Complicité passive. Ajouter un émoji valide les harceleurs et fait sentir à Jordan qu\'il est totalement seul contre tous.',
          isRecommended: false,
          points: 0
        },
        {
          role: 'Bystander',
          action: 'Garder le silence et regarder la conversation sans rien écrire.',
          outcome: 'Le silence est interprété comme un accord. Même si tu n\'as rien dit de méchant, la foule silencieuse laisse le harcèlement enfler.',
          isRecommended: false,
          points: 30
        },
        {
          role: 'Upstander',
          action: 'Écrire dans le groupe : "Bon les gars c\'est bon, c\'est arrivé en sport, passez à autre chose." et envoyer en privé à Jordan : "Salut Jordan, les écoute pas, ils font les gamins. Tu vas bien ?"',
          outcome: 'Réaction modèle de Témoin Actif ! Une seule voix posée casse l\'effet de groupe. Le message privé apporte un soutien psychologique vital.',
          isRecommended: true,
          points: 100
        }
      ],
      expertAdvice: 'Les études prouvent que lorsqu\'UN SEUL élève intervient avec calme dans un groupe, le harcèlement s\'arrête en moins de 10 secondes dans plus de 50% des cas. Inutile d\'agresser, il suffit de casser l\'ambiance de meute.'
    },
    {
      id: 'b2-burner-page',
      title: 'Le Compte Instagram Anonyme de "Dossiers du Collège"',
      context: 'Story & Sondage Instagram Anonyme',
      situation: 'Un compte anonyme nommé "@college_tech_dossiers" publie un sondage notant les filles et garçons de 8ème sur leur physique et vêtements, en citant leurs initiales avec des remarques dégradantes. Plusieurs camarades repartagent la story.',
      options: [
        {
          role: 'Bystander',
          action: 'Voter dans le sondage et envoyer la capture d\'écran à ses amis pour voir qui a voté pour qui.',
          outcome: 'Alimenter la machine ! Participer aux sondages anonymes offre des vues au harceleur et booste son audience.',
          isRecommended: false,
          points: 0
        },
        {
          role: 'Upstander',
          action: 'Laisser un commentaire violent en menaçant de retrouver qui gère le compte et de le frapper à la sortie.',
          outcome: 'Risque d\'escalade. Les menaces physiques peuvent faire bannir ton propre compte ou t\'attirer des sanctions scolaires.',
          isRecommended: false,
          points: 20
        },
        {
          role: 'Upstander',
          action: 'Faire des captures d\'écran datées, signaler la story pour harcèlement, prévenir la vie scolaire et demander à ses amis de ne pas republier.',
          outcome: 'Protocole Parfait ! Le signalement + l\'alerte auprès de la direction scolaire entraîne la suppression rapide du compte sans nourrir le troll.',
          isRecommended: true,
          points: 100
        }
      ],
      expertAdvice: 'Les comptes anonymes ne cherchent qu\'une chose : "L\'Audience". Si personne ne partage et que des signalements précis sont envoyés, ils meurent en quelques heures.'
    },
    {
      id: 'b3-doxxing-threat',
      title: 'La Menace de Doxxing & Fuite d\'Adresse en Jeu Vidéo',
      context: 'Salon vocal Discord de jeu compétitif',
      situation: 'Pendant une partie classée, un coéquipier rate un coup décisif. Un adversaire tape : "Je sais dans quelle ville tu habites gamin. Donne ton vrai nom et ton adresse ou je fais fuiter ton adresse IP et j\'envoie une fausse alerte police chez toi."',
      options: [
        {
          role: 'Target',
          action: 'Paniquer, s\'excuser mille fois et lui proposer de lui donner ses skins rares pour qu\'il arrête.',
          outcome: 'Piège du chantage ! Face à la peur, l\'agresseur demandera toujours plus d\'objets ou d\'argent.',
          isRecommended: false,
          points: 10
        },
        {
          role: 'Target',
          action: 'Répondre avec une fausse adresse et le défier d\'essayer.',
          outcome: 'Pari dangereux. Provoquer quelqu\'un qui profère des menaces graves décuple sa rancœur.',
          isRecommended: false,
          points: 15
        },
        {
          role: 'Upstander',
          action: 'Faire immédiatement une capture d\'écran complète avec l\'identifiant Discord, quitter l\'appel, bloquer, signaler à Discord et en parler d\'urgence à ses parents.',
          outcome: 'Protocole 100% Correct ! Le doxxing et les fausses alertes d\'urgence sont des délits très graves. Prévenir un adulte protège ta sécurité physique.',
          isRecommended: true,
          points: 100
        }
      ],
      expertAdvice: 'Les menaces de fuite d\'IP et de fausse alerte ne se gèrent JAMAIS seul. Garde toujours les preuves (ID du compte + heure) avant de bloquer et montre-les immédiatement à tes parents.'
    }
  ],
  ar: [
    {
      id: 'b1-group-chat',
      title: 'موجة السخرية المتصاعدة في مجموعة الصف',
      context: 'مجموعة واتساب الصف (14 تلميذاً)',
      situation: 'خلال حصة التربية البدنية، تعثر زميلك "ياسين" في الطين وتمزق جزء من سرواله. في نفس الليلة، نشر أحد الطلاب مقطع فيديو للحادثة بالتصوير البطيء في مجموعة الصف مع إيموجيات ضاحكة. بدأ ثلاثة طلاب بالتعليق بإهانات جارحة مثل: "من الأفضل له ترك المدرسة" و"@الجميع صوتوا هل هو أكبر مهرج؟". سكت ياسين تماماً ولم يرد.',
      options: [
        {
          role: 'Bystander',
          action: 'إرسال إيموجي ضاحك ("😂💀") حتى لا يظن الطلاب المؤثرون أنك غريب الأطوار أو يسخروا منك أنت أيضاً.',
          outcome: 'مشاركة سلبية في التنمر. إرسال الإيموجي الضاحك يعطي الضوء الأخضر للمتنمرين ويجعل ياسين يشعر بأنه منبوذ ومحاصر.',
          isRecommended: false,
          points: 0
        },
        {
          role: 'Bystander',
          action: 'التزام الصمت ومراقبة ما يحدث في المحادثة دون كتابة أي كلمة.',
          outcome: 'الصمت يفسره المتنمرون بأنه موافقة وتشجيع. رغم أنك لم تسخر، إلا أن صمت الأغلبية يسمح بالتنمر بالتمدد.',
          isRecommended: false,
          points: 30
        },
        {
          role: 'Upstander',
          action: 'الكتابة في المجموعة: "يا شباب كفى، الموقف انتهى في الملعب والمزاح زاد عن حده". ومراسلة ياسين في الخاص: "مرحباً ياسين، لا تكترث لكلامهم، تصرفهم صبياني جداً. هل أنت بخير؟"',
          outcome: 'تصرف الشاهد الإيجابي المثالي! صوت واحد عاقل يقطع سلسلة التنمر. ومراسلة الزميل على الخاص تمنحه أماناً نفسياً كبيراً.',
          isRecommended: true,
          points: 100
        }
      ],
      expertAdvice: 'تؤكد الدراسات أنه عندما يتدخل طالب واحد بحكمة وهدوء في المحادثة الجماعية، يتوقف التنمر في أقل من 10 ثوانٍ في أكثر من 50% من الحالات. لا تحتاج للشجار، فقط أوقف حماس المتنمرين.'
    },
    {
      id: 'b2-burner-page',
      title: 'صفحة الفضائح المجهولة لطلاب المدرسة',
      context: 'ستوري واستطلاع رأي مجهول على إنستغرام',
      situation: 'أنشأ مجهول حساباً باسم "@فضائح_الإعدادية_التقنية" وبدأ بنشر استطلاعات رأي لتقييم مظهر وملابس طلاب الصف الثامن بذكر الحروف الأولى من أسمائهم مع تعليقات مسيئة. وبدأ بعض الزملاء بإعادة نشر الستوري في حساباتهم.',
      options: [
        {
          role: 'Bystander',
          action: 'المشاركة في التصويت وأخذ لقطة شاشة لإرسالها للأصدقاء لمعرفة من صوت لمن.',
          outcome: 'إشعال النار! المشاركة في هذه الحسابات تمنح المتنمر الشهرة وعدد المشاهدات التي يبحث عنها.',
          isRecommended: false,
          points: 0
        },
        {
          role: 'Upstander',
          action: 'كتابة تعليق هجومي عنيف والتهديد بضرب من يدير الصفحة بعد خروج المدرسة.',
          outcome: 'خطر تصعيد العنف. التهديد بالاعتداء الجسدي قد يعرض حسابك للحظر ويعرضك لعقوبات مدرسية، مما يحولك من مساند إلى مدان.',
          isRecommended: false,
          points: 20
        },
        {
          role: 'Upstander',
          action: 'أخذ لقطات شاشة موثقة بالوقت، الإبلاغ عن الستوري (Report > Bullying)، إعلام إدارة المدرسة وحث الأصدقاء على عدم المشاهدة أو النشر.',
          outcome: 'بروتوكول احترافي صحيح! الإبلاغ في التطبيق + إعلام إدارة المدرسة يؤدي لإغلاق الحساب في ساعات قليلة دون إعطاء المتنمر أي اهتمام.',
          isRecommended: true,
          points: 100
        }
      ],
      expertAdvice: 'الحسابات المجهولة تعيش على شيء واحد: "تفاعل الجمهور وإعادة النشر". إذا حرمتها من التفاعل وقدمت بلاغات رسمية مع لقطات الشاشة، تسقط فوراً.'
    },
    {
      id: 'b3-doxxing-threat',
      title: 'تهديد كشف العنوان وتسريب الآي بي (Doxxing) في الألعاب',
      context: 'محادثة صوتية وكتابية في لعبة جماعية تنافسية',
      situation: 'خلال جولة حاسمة في لعبة إلكترونية، خسر أحد أعضاء الفريق الجولة. بدأ لاعب منافس في الكتابة: "أعرف مدينتك ومدرستك يا صغير! اكتب اسمك الحقيقي وعنوانك الآن وإلا سأسرب رقم الآي بي (IP) الخاص بك وأرسل بلاغاً كاذباً للشرطة لمنزلك".',
      options: [
        {
          role: 'Target',
          action: 'الذعر والاعتذار المتكرر وعرض منحه ملابس وسكنات اللعبة النادرة لكي يتراجع عن تهديده.',
          outcome: 'فخ الابتزاز! المتنمر عندما يرى الخوف يستمر في طلب المزيد من الأموال أو الحسابات أو البيانات الشخصية.',
          isRecommended: false,
          points: 10
        },
        {
          role: 'Target',
          action: 'الرد عليه بعنوان وهمي وتحديه أن يفعل ما يستطيع.',
          outcome: 'مغامرة خطيرة. استفزاز شخص يهدد بالجرائم الإلكترونية يزيده إصراراً على إيذائك.',
          isRecommended: false,
          points: 15
        },
        {
          role: 'Upstander',
          action: 'تصوير الشاشة فوراً بما يوضح اسم حسابه (User ID)، مغادرة المحادثة فوراً، حظره، الإبلاغ عنه في منصة اللعبة، وإخبار الوالدين ومسؤول المدرسة فوراً.',
          outcome: 'بروتوكول صحيح 100%! التهديد بتسريب البيانات أو استدعاء الشرطة جرائم يعاقب عليها القانون. إشراك الكبار يضمن سلامتك تماماً.',
          isRecommended: true,
          points: 100
        }
      ],
      expertAdvice: 'تهديدات كشف الهوية وتسريب البيانات (Doxxing) لا يجوز التعامل معها بمفردك أبداً. احفظ الدليل بصورة واضحة ثم احظر وأخبر والديك فوراً.'
    }
  ]
};

export const UPSTANDER_SCRIPTS_DATA: Record<Language, { situation: string; phrase: string; impact: string }[]> = {
  en: [
    {
      situation: 'To defuse a group chat roast',
      phrase: '"Guys, this was funny for two seconds, but now it’s just dragging. Let’s move on."',
      impact: 'Shifts group social pressure without making yourself an open target.'
    },
    {
      situation: 'To check in on a classmate privately',
      phrase: '"Hey, saw what was happening in that chat. That wasn’t cool of them at all. I’m in your corner if you need to talk."',
      impact: 'Restores the target’s psychological safety and prevents self-isolation.'
    },
    {
      situation: 'When someone asks you to join in on mean rumors',
      phrase: '"Nah, I’m not really into drama about people behind their backs."',
      impact: 'Sets a boundary with friends and models high-status digital maturity.'
    },
    {
      situation: 'When an edited or leaked photo is shared',
      phrase: '"Delete that, sharing someone’s photo without their permission is illegal and gets people suspended."',
      impact: 'Reminds peers of legal and school handbook consequences.'
    }
  ],
  fr: [
    {
      situation: 'Pour calmer un groupe de classe qui s\'acharne',
      phrase: '"Les gars, deux secondes c\'était marrant, mais là ça devient lourd. On passe à autre chose."',
      impact: 'Casse l\'effet de meute calmement sans te désigner comme cible.'
    },
    {
      situation: 'Pour réconforter un camarade visé en privé',
      phrase: '"Salut, j\'ai vu ce qu\'ils ont posté. C\'est pas cool du tout de leur part. T\'inquiète, je suis avec toi si tu as besoin d\'en parler."',
      impact: 'Restaure sa sécurité émotionnelle et évite qu\'il se sente abandonné.'
    },
    {
      situation: 'Quand on te demande de participer à des rumeurs',
      phrase: '"Bof, je suis pas trop dans les délires de parler sur le dos des gens."',
      impact: 'Pose une limite ferme et montre une maturité numérique admirée.'
    },
    {
      situation: 'Quand une photo volée ou retouchée est partagée',
      phrase: '"Supprime ça direct, partager la photo de quelqu\'un sans son accord c\'est puni par la loi et ça mène à l\'exclusion."',
      impact: 'Rappelle les sanctions disciplinaires et légales réelles.'
    }
  ],
  ar: [
    {
      situation: 'لتهدئة السخرية في محادثة جماعية للصف',
      phrase: '"يا شباب، المزاح كان مقبولاً في أول ثانيتين، لكن الآن أصبح غير لائق. خلونا نغير الموضوع."',
      impact: 'يغير ضغط المجموعة بهدوء ويوقف المتنمرين دون أن يجعل نفسك هدفاً.'
    },
    {
      situation: 'لدعم زميل تعرض للإساءة في رسالة خاصة',
      phrase: '"أهلاً يا صديقي، رأيت ما كتبوه في المجموعة. تصرفهم غير لائق أبداً وأنا بجانبك إذا احتجت للحديث."',
      impact: 'يعيد لزميلك شعوره بالأمان ويمنعه من العزلة والانهيار النفسي.'
    },
    {
      situation: 'عندما يطلب منك زملاء المشاركة في نقل شائعة',
      phrase: '"لا شكراً، لست من محبي نشر الكلام خلف ظهور الناس."',
      impact: 'يضع حداً حازماً ويقدم نموذجاً رائعاً للشخصية القيادية الناضجة.'
    },
    {
      situation: 'عند نشر صورة مسربة أو معدلة لزميل في المدرسة',
      phrase: '"احذفوا هذه الصورة فوراً، مشاركة صور الأشخاص دون إذنهم تصرف مخالف للقانون ولائحة المدرسة."',
      impact: 'يذكر الجميع بالتبعات القانونية والمدرسية الصارمة.'
    }
  ]
};

export const BULLYING_SCENARIOS = BULLYING_SCENARIOS_DATA.en;
export const UPSTANDER_SCRIPTS = UPSTANDER_SCRIPTS_DATA.en;
