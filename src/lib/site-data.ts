import type {
  BlogPost,
  FaqItem,
  Founder,
  Locale,
  Package,
  Service,
  StaticRouteKey
} from "@/lib/types";
import {getPath} from "@/lib/routes";

export const navLabels: Record<Locale, Record<StaticRouteKey, string>> = {
  hr: {
    home: "Početna",
    services: "Usluge",
    nutrition: "Plan prehrane",
    workout: "Plan treninga",
    coaching: "Online coaching",
    packages: "Paketi",
    about: "O nama",
    results: "Rezultati",
    blog: "Blog",
    contact: "Kontakt",
    guide: "Besplatni vodič",
    privacy: "Privatnost",
    terms: "Uvjeti",
    healthDisclaimer: "Zdravstvena napomena"
  },
  en: {
    home: "Home",
    services: "Services",
    nutrition: "Nutrition plan",
    workout: "Workout plan",
    coaching: "Online coaching",
    packages: "Packages",
    about: "About",
    results: "Results",
    blog: "Blog",
    contact: "Contact",
    guide: "Free guide",
    privacy: "Privacy",
    terms: "Terms",
    healthDisclaimer: "Health disclaimer"
  }
};

export const homeContent = {
  hr: {
    eyebrow: "Laboratorij susreće fight camp",
    title: "Personalizirani trening i prehrana za ljude koji žele plan, ne šablonu.",
    lead: "Spoj 15+ godina sportskog iskustva, boksačke discipline i fitness znanja preveden u jasan plan koji možeš stvarno provoditi.",
    primaryCta: "Zatraži personalizirani plan",
    secondaryCta: "Pogledaj pakete",
    proof: ["15+ godina iskustva", "2x boksački prvak", "Planovi prema tvom ritmu", "Hrvatski i engleski"],
    labNote: "Bez dijagnoza. Bez čuda. Samo strukturiran trening, prehrana i podrška.",
    processTitle: "Kako izgleda put od upita do plana",
    process: [
      {
        title: "Kratka procjena",
        text: "Prvo razumijemo cilj, iskustvo, raspored, opremu i ograničenja."
      },
      {
        title: "Coach review",
        text: "Trener ručno pregleda odgovor i bira smjer plana prije izrade."
      },
      {
        title: "Plan koji živi",
        text: "Dobivaš jasne treninge, prehrambene smjernice i korekcije kroz podršku."
      }
    ],
    objectionsTitle: "Najčešće kočnice rješavamo prije prodaje",
    objections: [
      "Ako nemaš vremena, plan se gradi oko stvarnog tjedna, ne idealnog tjedna.",
      "Ako si početnik, prvo dobivaš sigurnu strukturu i jasne korake.",
      "Ako si već trenirao, fokus je na preciznijoj progresiji i prehrani.",
      "Ako ne vjeruješ online coachingu, proces je transparentan od prvog upita."
    ],
    finalCtaTitle: "Ako želiš plan koji se uklapa u stvaran život, kreni s kratkom procjenom.",
    finalCtaText: "Ne tražimo osjetljive zdravstvene podatke na javnoj formi. Detaljan intake ide kasnije uz jasnu privolu."
  },
  en: {
    eyebrow: "Laboratory meets fight camp",
    title: "Personalized training and nutrition for people who want a plan, not a template.",
    lead: "A blend of 15+ years of sport experience, boxing discipline and fitness knowledge translated into a plan you can actually follow.",
    primaryCta: "Request a custom plan",
    secondaryCta: "View packages",
    proof: ["15+ years experience", "2x boxing champion", "Plans around your rhythm", "Croatian and English"],
    labNote: "No diagnoses. No miracles. Just structured training, nutrition and support.",
    processTitle: "From inquiry to plan",
    process: [
      {
        title: "Short assessment",
        text: "We first understand your goal, experience, schedule, equipment and constraints."
      },
      {
        title: "Coach review",
        text: "A coach manually reviews your answers and chooses the plan direction."
      },
      {
        title: "A plan that lives",
        text: "You receive clear workouts, nutrition guidance and support-based adjustments."
      }
    ],
    objectionsTitle: "We handle common blockers before selling",
    objections: [
      "If time is limited, the plan is built around your real week, not an imaginary perfect one.",
      "If you are a beginner, you start with safe structure and clear steps.",
      "If you already train, the focus is tighter progression and nutrition execution.",
      "If you doubt online coaching, the process is transparent from the first inquiry."
    ],
    finalCtaTitle: "If you want a plan that fits real life, start with a short assessment.",
    finalCtaText: "We do not ask for sensitive health data on the public form. Detailed intake comes later with explicit consent."
  }
};

export const serviceData: Record<Locale, Service[]> = {
  hr: [
    {
      slug: "plan-prehrane",
      routeKey: "nutrition",
      eyebrow: "Prehrana bez panike",
      title: "Plan prehrane",
      shortTitle: "Prehrana",
      subtitle: "Jasna struktura obroka za mršavljenje, mišićnu masu ili stabilniju rutinu.",
      bestFor: "Osobe koje znaju da ih prehrana najviše koči.",
      outcome: "Dobivaš smjernice, okvir obroka, prilagodbe i objašnjenje zašto plan izgleda baš tako.",
      timeline: "Izrada nakon procjene i potvrde opsega.",
      pricing: "Cijena nakon kratke procjene",
      deliverables: [
        "Personaliziran kalorijski i makro okvir",
        "Primjeri obroka i zamjena",
        "Smjernice za kupovinu i obroke izvan kuće",
        "Napomena o suplementima bez pretjeranih obećanja"
      ],
      process: ["Procjena cilja", "Analiza navika", "Izrada okvira", "Korekcija prema povratnoj informaciji"],
      objections: ["Ne moraš jesti savršeno.", "Plan uzima u obzir posao, obitelj i trening.", "Nema ekstremnih eliminacija bez razloga."],
      faq: [
        {
          question: "Je li ovo medicinska dijeta?",
          answer: "Ne. Ovo je fitness i prehrambeno savjetovanje za opće ciljeve. Za medicinska stanja potrebno je savjetovati liječnika ili nutricionista."
        },
        {
          question: "Moram li jesti uvijek isto?",
          answer: "Ne. Plan uključuje okvir i zamjene kako bi prehrana bila izvediva."
        }
      ],
      disclaimer: "Plan prehrane nije medicinski tretman i ne zamjenjuje stručnu zdravstvenu skrb.",
      primaryCta: "Zatraži plan prehrane"
    },
    {
      slug: "plan-treninga",
      routeKey: "workout",
      eyebrow: "Struktura prije motivacije",
      title: "Plan treninga",
      shortTitle: "Trening",
      subtitle: "Trening koji poštuje tvoju razinu, opremu, vrijeme i cilj.",
      bestFor: "Početnike, rekreativce i naprednije vježbače koji žele jasan smjer.",
      outcome: "Dobivaš raspored, vježbe, progresiju i način praćenja rezultata.",
      timeline: "Izrada nakon procjene cilja, opreme i rasporeda.",
      pricing: "Cijena nakon kratke procjene",
      deliverables: [
        "Tjedni raspored treninga",
        "Vježbe, serije, ponavljanja i intenzitet",
        "Progresija i zamjene za opremu",
        "Upute za zagrijavanje i sigurnost"
      ],
      process: ["Procjena iskustva", "Odabir fokusa", "Programiranje tjedna", "Praćenje i korekcije"],
      objections: ["Ne treba ti savršena teretana.", "Početnici dobivaju sigurniji ulaz.", "Napredniji dobivaju precizniju progresiju."],
      faq: [
        {
          question: "Može li plan biti za kućni trening?",
          answer: "Da. Plan se može prilagoditi kući, teretani ili kombinaciji."
        },
        {
          question: "Uključuje li borilački conditioning?",
          answer: "Može, ako je smisleno za cilj i razinu. Ne dodajemo intenzitet samo da plan izgleda teže."
        }
      ],
      disclaimer: "Trening treba prilagoditi zdravstvenom stanju i eventualnim ozljedama uz stručnu medicinsku procjenu kada je potrebna.",
      primaryCta: "Zatraži plan treninga"
    },
    {
      slug: "online-coaching",
      routeKey: "coaching",
      eyebrow: "Plan plus odgovornost",
      title: "Online coaching",
      shortTitle: "Coaching",
      subtitle: "Kontinuirana podrška, korekcije i bolji fokus od jednokratnog plana.",
      bestFor: "Osobe koje žele ritam, feedback i osjećaj da netko prati proces.",
      outcome: "Dobivaš plan, check-in, korekcije i jasne prioritete iz tjedna u tjedan.",
      timeline: "Mjesečni rad nakon dogovora.",
      pricing: "Mjesečni paket nakon procjene",
      deliverables: [
        "Plan treninga i prehrane",
        "Redovni check-in",
        "Korekcije prema napretku",
        "Prioriteti za sljedeći tjedan"
      ],
      process: ["Intake", "Prvi plan", "Tjedni check-in", "Korekcije i podrška"],
      objections: ["Online ne znači automatizirano.", "Ne moraš biti napredan.", "Cilj je izvedivost, ne savršenstvo."],
      faq: [
        {
          question: "Koliko često dobivam feedback?",
          answer: "Ritam feedbacka definira se prema paketu i potrebi, ali svaka promjena plana ima jasan razlog."
        },
        {
          question: "Je li coaching za početnike?",
          answer: "Da. Početnici često najviše profitiraju od jasne strukture i smanjenja konfuzije."
        }
      ],
      disclaimer: "Online coaching je fitness podrška i edukacija, ne zdravstvena dijagnoza ili liječenje.",
      primaryCta: "Rezerviraj konzultaciju"
    },
    {
      slug: "transformacija",
      routeKey: "packages",
      eyebrow: "Širi paket",
      title: "Transformacijski paket",
      shortTitle: "Transformacija",
      subtitle: "Kombinacija treninga, prehrane i podrške za ozbiljniji period promjene.",
      bestFor: "Klijente koji žele sve elemente procesa pod jednim sustavom.",
      outcome: "Dobivaš strukturu, prioritet, praćenje i realnu korekciju kroz dogovoreni period.",
      timeline: "Obično 8-12 tjedana, ovisno o cilju.",
      pricing: "Po dogovoru nakon procjene",
      deliverables: [
        "Trening i prehrana",
        "Check-in ritam",
        "Praćenje mjera i navika",
        "Korekcije kroz period rada"
      ],
      process: ["Konzultacija", "Detaljni intake", "Plan", "Praćenje i revizije"],
      objections: ["Nema garancije rezultata.", "Napredak ovisi o provedbi.", "Plan se prilagođava realnom životu."],
      faq: [
        {
          question: "Jesu li rezultati garantirani?",
          answer: "Ne. Možemo garantirati strukturiran proces, ali individualni rezultat ovisi o provedbi, kontekstu i zdravlju."
        }
      ],
      disclaimer: "Transformacijski paket ne smije se predstavljati kao medicinski tretman ili garancija rezultata.",
      primaryCta: "Razgovarajmo o cilju"
    }
  ],
  en: [
    {
      slug: "plan-prehrane",
      routeKey: "nutrition",
      eyebrow: "Nutrition without panic",
      title: "Nutrition plan",
      shortTitle: "Nutrition",
      subtitle: "A clear meal structure for fat loss, muscle gain or a steadier routine.",
      bestFor: "People who know nutrition is their main bottleneck.",
      outcome: "You receive guidelines, meal structure, adjustments and the reasoning behind the plan.",
      timeline: "Delivered after assessment and scope confirmation.",
      pricing: "Price after short assessment",
      deliverables: ["Personal calorie and macro framework", "Meal examples and swaps", "Shopping and eating-out guidance", "Supplement notes without exaggerated promises"],
      process: ["Goal assessment", "Habit review", "Framework design", "Feedback-based adjustment"],
      objections: ["You do not need to eat perfectly.", "The plan considers work, family and training.", "No extreme eliminations without a reason."],
      faq: [
        {
          question: "Is this a medical diet?",
          answer: "No. This is fitness and nutrition coaching for general goals. Medical conditions require a physician or qualified clinician."
        },
        {
          question: "Do I have to eat the same meals every day?",
          answer: "No. The plan includes structure and swaps so nutrition can be practical."
        }
      ],
      disclaimer: "A nutrition plan is not medical treatment and does not replace healthcare.",
      primaryCta: "Request nutrition plan"
    },
    {
      slug: "plan-treninga",
      routeKey: "workout",
      eyebrow: "Structure before motivation",
      title: "Workout plan",
      shortTitle: "Training",
      subtitle: "Training that respects your level, equipment, time and goal.",
      bestFor: "Beginners, recreational trainees and experienced lifters who want direction.",
      outcome: "You receive schedule, exercises, progression and a way to track results.",
      timeline: "Delivered after goal, equipment and schedule assessment.",
      pricing: "Price after short assessment",
      deliverables: ["Weekly training schedule", "Exercises, sets, reps and intensity", "Progression and equipment swaps", "Warm-up and safety notes"],
      process: ["Experience review", "Focus selection", "Weekly programming", "Tracking and adjustments"],
      objections: ["You do not need a perfect gym.", "Beginners get a safer start.", "Advanced trainees get tighter progression."],
      faq: [
        {
          question: "Can this be a home workout plan?",
          answer: "Yes. The plan can be adapted to home, gym or a hybrid setup."
        },
        {
          question: "Can it include combat conditioning?",
          answer: "Yes, when it makes sense for your goal and level."
        }
      ],
      disclaimer: "Training should account for health status and injuries with medical input when needed.",
      primaryCta: "Request workout plan"
    },
    {
      slug: "online-coaching",
      routeKey: "coaching",
      eyebrow: "Plan plus accountability",
      title: "Online coaching",
      shortTitle: "Coaching",
      subtitle: "Ongoing support, adjustments and clearer focus than a one-time plan.",
      bestFor: "People who want rhythm, feedback and someone tracking the process.",
      outcome: "You get a plan, check-ins, adjustments and weekly priorities.",
      timeline: "Monthly work after agreement.",
      pricing: "Monthly package after assessment",
      deliverables: ["Training and nutrition plan", "Regular check-ins", "Progress-based changes", "Priorities for the next week"],
      process: ["Intake", "First plan", "Weekly check-in", "Adjustments and support"],
      objections: ["Online does not mean automated.", "You do not need to be advanced.", "The goal is execution, not perfection."],
      faq: [
        {
          question: "How often do I get feedback?",
          answer: "The rhythm depends on the package, but every plan change has a clear reason."
        },
        {
          question: "Is coaching suitable for beginners?",
          answer: "Yes. Beginners often benefit most from clear structure and less confusion."
        }
      ],
      disclaimer: "Online coaching is fitness support and education, not diagnosis or treatment.",
      primaryCta: "Book consultation"
    },
    {
      slug: "transformacija",
      routeKey: "packages",
      eyebrow: "Fuller package",
      title: "Transformation package",
      shortTitle: "Transformation",
      subtitle: "Training, nutrition and support combined for a serious change period.",
      bestFor: "Clients who want the entire process in one system.",
      outcome: "You receive structure, priority, tracking and realistic adjustment over an agreed period.",
      timeline: "Usually 8-12 weeks depending on the goal.",
      pricing: "By agreement after assessment",
      deliverables: ["Training and nutrition", "Check-in rhythm", "Measurement and habit tracking", "Adjustments throughout the period"],
      process: ["Consultation", "Detailed intake", "Plan", "Tracking and reviews"],
      objections: ["No result guarantees.", "Progress depends on execution.", "The plan adapts to real life."],
      faq: [
        {
          question: "Are results guaranteed?",
          answer: "No. We can guarantee a structured process, but individual results depend on execution, context and health."
        }
      ],
      disclaimer: "The transformation package is not medical treatment or a result guarantee.",
      primaryCta: "Discuss your goal"
    }
  ]
};

export const packageData: Record<Locale, Package[]> = {
  hr: [
    {
      name: "Plan Start",
      label: "Jednokratni smjer",
      price: "Opseg nakon procjene",
      description: "Za osobu kojoj treba jasan plan treninga ili prehrane bez mjesečnog coachinga.",
      bestFor: "Samostalne klijente",
      features: ["Jedan personalizirani plan", "Jasna objašnjenja", "Osnovne zamjene", "Privatni intake nakon dogovora"],
      cta: "Zatraži plan"
    },
    {
      name: "Coaching Fokus",
      label: "Najbolji omjer podrške",
      price: "Mjesečni rad",
      description: "Za klijente koji žele plan, feedback i korekcije dok se rutina razvija.",
      bestFor: "Većinu online klijenata",
      features: ["Trening i prehrana", "Redovni check-in", "Korekcije plana", "Prioriteti za tjedan"],
      cta: "Rezerviraj konzultaciju",
      highlighted: true
    },
    {
      name: "Transformacija",
      label: "Intenzivniji period",
      price: "8-12 tjedana",
      description: "Za ozbiljniji cilj gdje treba povezati trening, prehranu, navike i praćenje.",
      bestFor: "Promjenu rutine i tijela",
      features: ["Detaljniji intake", "Planovi i revizije", "Praćenje navika", "Dogovoreni ritam podrške"],
      cta: "Pošalji cilj"
    }
  ],
  en: [
    {
      name: "Plan Start",
      label: "One-time direction",
      price: "Scope after assessment",
      description: "For people who need a clear training or nutrition plan without monthly coaching.",
      bestFor: "Independent clients",
      features: ["One personalized plan", "Clear explanation", "Basic swaps", "Private intake after agreement"],
      cta: "Request plan"
    },
    {
      name: "Coaching Focus",
      label: "Best support fit",
      price: "Monthly work",
      description: "For clients who want a plan, feedback and adjustments as the routine develops.",
      bestFor: "Most online clients",
      features: ["Training and nutrition", "Regular check-in", "Plan adjustments", "Weekly priorities"],
      cta: "Book consultation",
      highlighted: true
    },
    {
      name: "Transformation",
      label: "Focused period",
      price: "8-12 weeks",
      description: "For a serious goal that connects training, nutrition, habits and tracking.",
      bestFor: "Routine and body change",
      features: ["Detailed intake", "Plans and reviews", "Habit tracking", "Agreed support rhythm"],
      cta: "Send your goal"
    }
  ]
};

export const founders: Record<Locale, Founder[]> = {
  hr: [
    {
      name: "Praktični trener",
      role: "Sportaš, trener, borilačka disciplina",
      profile: "15+ godina u fitnessu i sportu, 2x boksački prvak, bivši rukometaš i hrvač. Njegova prednost je praktična procjena: što osoba stvarno može odraditi, gdje se lomi disciplina i kako trening napraviti izvedivim.",
      proof: ["2x boksački prvak", "Rukomet i hrvanje", "Real-world coaching", "Praktična progresija"]
    },
    {
      name: "Istraživački trener",
      role: "Bodybuilding, prehrana, suplementi, edukacija",
      profile: "Fokusiran na bodybuilding, trening znanost, prehranu, suplemente i prevođenje kompleksnih informacija u jednostavne odluke za klijenta. Kombinira rad s literaturom i iskustvo iz prakse.",
      proof: ["Fitness literatura", "Bodybuilding fokus", "Prehrana i suplementi", "Jednostavna objašnjenja"]
    }
  ],
  en: [
    {
      name: "Practical coach",
      role: "Athlete, coach, combat-sport discipline",
      profile: "15+ years in fitness and sport, 2x boxing champion, former handball player and wrestler. His edge is practical assessment: what a person can actually execute and how to make training workable.",
      proof: ["2x boxing champion", "Handball and wrestling", "Real-world coaching", "Practical progression"]
    },
    {
      name: "Research coach",
      role: "Bodybuilding, nutrition, supplements, education",
      profile: "Focused on bodybuilding, training science, nutrition, supplementation and translating complex information into simple client decisions.",
      proof: ["Fitness literature", "Bodybuilding focus", "Nutrition and supplements", "Simple explanations"]
    }
  ]
};

export const sharedFaq: Record<Locale, FaqItem[]> = {
  hr: [
    {
      question: "Je li ovo zamjena za liječnika ili nutricionista?",
      answer: "Ne. Radimo fitness i prehrambeno savjetovanje za opće ciljeve. Kod bolesti, ozljeda, trudnoće, poremećaja prehrane, lijekova ili ozbiljnih simptoma prvo se savjetuj s liječnikom."
    },
    {
      question: "Moram li već biti u formi?",
      answer: "Ne. Plan se prilagođava početnoj razini. Početnik treba jasniji sustav, a ne agresivniji marketing."
    },
    {
      question: "Kako znate što mi treba ako je online?",
      answer: "Kroz strukturirani intake, dodatna pitanja i redovne povratne informacije. Ne otključavamo ozbiljan plan na temelju jedne rečenice."
    },
    {
      question: "Što ako nemam puno vremena?",
      answer: "Tada je raspored dio plana. Bolje je imati tri realna treninga nego šest idealnih koje nećeš napraviti."
    }
  ],
  en: [
    {
      question: "Is this a replacement for a doctor or dietitian?",
      answer: "No. This is fitness and nutrition coaching for general goals. For illness, injury, pregnancy, eating disorders, medication or serious symptoms, consult a medical professional first."
    },
    {
      question: "Do I already need to be fit?",
      answer: "No. The plan adapts to your starting level. A beginner needs clearer structure, not louder marketing."
    },
    {
      question: "How do you know what I need online?",
      answer: "Through structured intake, follow-up questions and regular feedback. We do not build serious plans from a single sentence."
    },
    {
      question: "What if I do not have much time?",
      answer: "Then scheduling is part of the plan. Three realistic sessions beat six ideal ones you will not do."
    }
  ]
};

export const proofItems = {
  hr: [
    {
      label: "Dokaz bez izmišljanja",
      title: "Rezultati se objavljuju tek uz pristanak",
      text: "Prije/poslije fotografije, imena i citati neće se koristiti bez pisanog dopuštenja."
    },
    {
      label: "Proces kao dokaz",
      title: "Svaki plan ima kontekst",
      text: "Uz plan se objašnjava cilj, logika i način korekcije. Klijent zna što radi i zašto."
    },
    {
      label: "Realna očekivanja",
      title: "Ne prodajemo garanciju tijela",
      text: "Prodajemo strukturiran coaching proces. Rezultat ovisi o provedbi, zdravlju i okolnostima."
    }
  ],
  en: [
    {
      label: "Proof without fiction",
      title: "Results are published only with consent",
      text: "Before/after photos, names and quotes are not used without written permission."
    },
    {
      label: "Process as proof",
      title: "Every plan has context",
      text: "The plan explains the goal, logic and adjustment method. The client knows what they are doing and why."
    },
    {
      label: "Real expectations",
      title: "We do not sell a body guarantee",
      text: "We sell a structured coaching process. Results depend on execution, health and context."
    }
  ]
};

export const blogPosts: BlogPost[] = [
  {
    locale: "hr",
    slug: "plan-prehrane-za-mrsavljenje",
    title: "Plan prehrane za mršavljenje: što mora biti jasno prije kalorija",
    description: "Kako razmišljati o planu prehrane za mršavljenje bez ekstremnih zabrana i praznih fitness slogana.",
    category: "Plan prehrane",
    date: "2026-04-27",
    reviewed: "2026-04-27",
    author: "Istraživački trener",
    reviewer: "Praktični trener",
    readingTime: "5 min",
    sources: ["Smjernice javnog zdravstva o energetskoj ravnoteži", "Pregled literature o prehrambenoj adherenciji"],
    relatedRoutes: ["nutrition", "coaching"],
    paragraphs: [
      "Dobar plan prehrane za mršavljenje ne počinje zabranom kruha, nego razumijevanjem rutine. Ako osoba ne zna kada jede, gdje joj pada energija i koji obroci su joj najlakši za ponoviti, kalorijski izračun ostaje samo broj.",
      "Prvi cilj je napraviti okvir koji osoba može ponavljati: dovoljno proteina, dovoljno vlakana, razumna raspodjela obroka i fleksibilne zamjene. Tek tada deficit postaje alat, a ne kazna.",
      "Za hrvatski kontekst važno je uključiti obroke kod kuće, marende, obiteljske ručkove i izlazak van. Plan koji ignorira društveni život često izgleda dobro na papiru i loše u ponedjeljak.",
      "Suplementi mogu biti korisni, ali ne smiju zamijeniti san, unos proteina, trening i dosljednost. Ako neki dodatak prehrani ima medicinski rizik ili interakciju s lijekovima, odluka ne pripada fitness coachu."
    ]
  },
  {
    locale: "hr",
    slug: "plan-treninga-za-pocetnike",
    title: "Plan treninga za početnike: kako krenuti bez straha i kaosa",
    description: "Početnički plan treninga treba smanjiti konfuziju, zaštititi ego i graditi naviku prije ekstremnog intenziteta.",
    category: "Plan treninga",
    date: "2026-04-27",
    reviewed: "2026-04-27",
    author: "Praktični trener",
    reviewer: "Istraživački trener",
    readingTime: "4 min",
    sources: ["Osnovna načela progresivnog opterećenja", "Smjernice za tjelesnu aktivnost odraslih"],
    relatedRoutes: ["workout", "services"],
    paragraphs: [
      "Početnik ne treba plan koji dokazuje koliko je trener kreativan. Treba plan koji se može ponoviti, razumjeti i pratiti. Najveća pobjeda prvog mjeseca često je ritam, ne maksimalni umor.",
      "Dobar početak uključuje mali broj osnovnih obrazaca: čučanj ili varijantu potiska nogama, hip hinge, horizontalni i vertikalni potisak, povlačenje, core i hodanje ili conditioning koji ne uništi oporavak.",
      "Ako osoba trenira kod kuće, plan mora priznati stvarnu opremu. Ako radi u teretani, plan mora objasniti zamjene jer sprave nisu uvijek slobodne. To je praktična razlika između šablone i coaching plana.",
      "Ozljede, bol i medicinska ograničenja ne rješavaju se motivacijskim citatima. Ako postoji zdravstveni problem, prvo treba odgovarajuća stručna procjena."
    ]
  },
  {
    locale: "en",
    slug: "online-coaching-croatia",
    title: "Online coaching in Croatia: what should feel personal, not automated",
    description: "A practical guide to judging whether an online fitness coaching process is human, structured and realistic.",
    category: "Online coaching",
    date: "2026-04-27",
    reviewed: "2026-04-27",
    author: "Research coach",
    reviewer: "Practical coach",
    readingTime: "4 min",
    sources: ["Behavior change adherence literature", "General physical activity guidance"],
    relatedRoutes: ["coaching", "packages"],
    paragraphs: [
      "Online coaching should not feel like a PDF vending machine. The useful part is not only the workout or calories, but the review process that turns your context into decisions.",
      "A strong process asks about schedule, equipment, training history, nutrition patterns and constraints before prescribing intensity. It also explains why the plan is shaped the way it is.",
      "Croatian clients often need practical food and schedule decisions, not generic meal photos. A plan should work with local habits, family meals, work rhythm and realistic training frequency.",
      "Good coaching avoids diagnosis, miracle claims and unsafe supplement certainty. When health conditions, medication or injury are involved, the right move is to involve medical professionals."
    ]
  }
];

export const pageMeta: Record<
  StaticRouteKey,
  Record<Locale, {title: string; description: string; kind: string}>
> = {
  home: {
    hr: {
      title: "Personalizirani plan treninga i prehrane",
      description: "Premium online coaching, plan prehrane i plan treninga za Hrvatsku. Fight camp disciplina i fitness edukacija u jednom sustavu.",
      kind: "home"
    },
    en: {
      title: "Personalized training and nutrition coaching",
      description: "Premium online coaching, nutrition plans and workout plans built from combat-sport discipline and fitness education.",
      kind: "home"
    }
  },
  services: {
    hr: {
      title: "Usluge: plan prehrane, plan treninga i online coaching",
      description: "Usporedi usluge i odaberi plan prehrane, plan treninga, online coaching ili transformacijski paket.",
      kind: "services"
    },
    en: {
      title: "Services: nutrition, training and online coaching",
      description: "Compare nutrition plans, workout plans, online coaching and transformation packages.",
      kind: "services"
    }
  },
  nutrition: {
    hr: {
      title: "Plan prehrane za mršavljenje, mišićnu masu i rutinu",
      description: "Personalizirani plan prehrane s jasnim obrocima, zamjenama i realnim smjernicama za hrvatski način života.",
      kind: "service"
    },
    en: {
      title: "Nutrition plan for fat loss, muscle gain and routine",
      description: "Personalized nutrition plan with clear meals, swaps and realistic guidance.",
      kind: "service"
    }
  },
  workout: {
    hr: {
      title: "Plan treninga za teretanu, kuću i napredak",
      description: "Personalizirani plan treninga za početnike i naprednije vježbače, s progresijom i jasnim uputama.",
      kind: "service"
    },
    en: {
      title: "Workout plan for gym, home and progression",
      description: "Personalized workout plan for beginners and experienced trainees with progression and clear instructions.",
      kind: "service"
    }
  },
  coaching: {
    hr: {
      title: "Online coaching Hrvatska",
      description: "Online coaching s planom treninga, prehranom, check-inom i podrškom na hrvatskom ili engleskom.",
      kind: "service"
    },
    en: {
      title: "Online coaching Croatia",
      description: "Online coaching with training, nutrition, check-ins and support in Croatian or English.",
      kind: "service"
    }
  },
  packages: {
    hr: {
      title: "Paketi online coachinga",
      description: "Jasni paketi za plan prehrane, plan treninga, online coaching i transformacijski rad.",
      kind: "packages"
    },
    en: {
      title: "Online coaching packages",
      description: "Clear packages for nutrition plans, workout plans, online coaching and transformation work.",
      kind: "packages"
    }
  },
  about: {
    hr: {
      title: "O nama: sport, znanje i coaching",
      description: "Upoznaj dva trenerska profila: borilačko-sportsko iskustvo i istraživački fitness pristup.",
      kind: "about"
    },
    en: {
      title: "About: sport, knowledge and coaching",
      description: "Meet the two coaching profiles: combat-sport experience and research-driven fitness thinking.",
      kind: "about"
    }
  },
  results: {
    hr: {
      title: "Rezultati, iskustva i standard dokaza",
      description: "Kako prikazujemo rezultate i iskustva klijenata etično, uz pristanak i bez lažnih garancija.",
      kind: "results"
    },
    en: {
      title: "Results, testimonials and proof standard",
      description: "How client results and testimonials are shown ethically, with consent and without false guarantees.",
      kind: "results"
    }
  },
  blog: {
    hr: {
      title: "Fitness blog: trening, prehrana, bodybuilding i suplementi",
      description: "Hrvatski edukativni članci o treningu, prehrani, online coachingu, bodybuildingu i suplementima.",
      kind: "blogIndex"
    },
    en: {
      title: "Fitness blog: training, nutrition and coaching",
      description: "Educational articles on training, nutrition, online coaching, bodybuilding and supplementation.",
      kind: "blogIndex"
    }
  },
  contact: {
    hr: {
      title: "Kontakt i konzultacija",
      description: "Pošalji kratki upit za plan treninga, plan prehrane ili online coaching.",
      kind: "contact"
    },
    en: {
      title: "Contact and consultation",
      description: "Send a short inquiry for a workout plan, nutrition plan or online coaching.",
      kind: "contact"
    }
  },
  guide: {
    hr: {
      title: "Besplatni vodič za trening i prehranu",
      description: "Preuzmi vodič s osnovama treninga, prehrane i realnog planiranja rutine.",
      kind: "guide"
    },
    en: {
      title: "Free training and nutrition guide",
      description: "Download a guide with the basics of training, nutrition and realistic routine planning.",
      kind: "guide"
    }
  },
  privacy: {
    hr: {
      title: "Pravila privatnosti",
      description: "Privatnost, GDPR privole i obrada podataka za fitness coaching platformu.",
      kind: "legal"
    },
    en: {
      title: "Privacy policy",
      description: "Privacy, GDPR consent and data processing for the fitness coaching platform.",
      kind: "legal"
    }
  },
  terms: {
    hr: {
      title: "Uvjeti korištenja",
      description: "Uvjeti korištenja web stranice i budućih coaching usluga.",
      kind: "legal"
    },
    en: {
      title: "Terms of use",
      description: "Terms for the website and future coaching services.",
      kind: "legal"
    }
  },
  healthDisclaimer: {
    hr: {
      title: "Zdravstvena napomena",
      description: "Važna napomena: sadržaj nije medicinski savjet, dijagnoza ili liječenje.",
      kind: "legal"
    },
    en: {
      title: "Health disclaimer",
      description: "Important notice: content is not medical advice, diagnosis or treatment.",
      kind: "legal"
    }
  }
};

export function getServiceByRoute(locale: Locale, key: StaticRouteKey) {
  return serviceData[locale].find((service) => service.routeKey === key);
}

export function getBlogPosts(locale: Locale) {
  return blogPosts.filter((post) => post.locale === locale);
}

export function getBlogPost(locale: Locale, slug: string) {
  return blogPosts.find((post) => post.locale === locale && post.slug === slug);
}

export function getStaticRouteForSlug(locale: Locale, slugPath: string): StaticRouteKey | null {
  for (const key of Object.keys(pageMeta) as StaticRouteKey[]) {
    const path = getPath(locale, key).replace(/^\/en\/?/, "/").replace(/\/$/, "") || "/";
    const normalizedSlug = `/${slugPath}`.replace(/\/$/, "") || "/";
    if (path === normalizedSlug) {
      return key;
    }
  }

  return null;
}
