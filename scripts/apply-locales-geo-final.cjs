const fs = require("fs");
const path = require("path");

const localesDir = path.join(__dirname, "../src/translations/locales");

const UPDATES = {
  en: {
    heroSub: "Connecting the DRC and Southern Africa with end-to-end operational, regulatory, and field capabilities.",
    importExportDesc: "Trade facilitation, compliance, logistics and cross-border movement for goods across the DRC–Southern Africa trade corridor.",
    miningDesc: "Practical support for mining-related sourcing, workforce placement, partnerships, supplies and commercial coordination across the DRC–Southern Africa trade corridor.",
    miningPreview: ["Mining support", "Sourcing", "Workforce placement", "Partnerships", "Supply coordination"],
    corridorTitle: "The DRC–Southern Africa Trade Corridor",
    corridorDesc: "Expanding across the DRC and Southern Africa requires deep local intelligence, robust compliance frameworks and grounded logistics. ARSSA removes cross-border friction by uniting market entry, commercial distribution, regulatory handling and operational support under a single roof.",
    ctaText: "ARSSA provides practical, integrated support for businesses seeking to establish, operate and grow across the DRC–Southern Africa trade corridor.",
    footerDesc: "Headquartered in the Democratic Republic of Congo with an established South African presence, ARSSA connects businesses, suppliers and opportunities between the DRC and Southern Africa, with South Africa serving as a key regional sourcing and commercial hub.",
    footerLocation: "Established South African Presence — serving the DRC–Southern Africa trade corridor",
  },
  fr: {
    heroSub: "Relier la RDC et l'Afrique australe avec des capacités opérationnelles, réglementaires et de terrain complètes.",
    importExportDesc: "Facilitation des échanges, dédouanement, logistique intégrée et acheminement transfrontalier sécurisé le long du corridor commercial RDC–Afrique australe.",
    miningDesc: "Accompagnement pratique pour l'approvisionnement minier, placement de main-d'œuvre, partenariats stratégiques, fournitures industrielles et coordination commerciale sur le corridor commercial RDC–Afrique australe.",
    miningPreview: ["Soutien minier", "Approvisionnement", "Placement de main-d'œuvre", "Partenariats", "Coordination des fournitures"],
    corridorTitle: "Le Corridor Commercial RDC–Afrique Australe",
    corridorDesc: "Se développer entre la RDC et l'Afrique australe exige une solide intelligence locale, une maîtrise réglementaire rigoureuse et une logistique ancrée sur le terrain. ARSSA supprime les frictions transfrontalières en réunissant implantation, distribution, conformité et opérations sous un même toit.",
    ctaText: "ARSSA offre un accompagnement opérationnel et intégré pour les entreprises souhaitant s'implanter, opérer et grandir le long du corridor commercial RDC–Afrique australe.",
    footerDesc: "Basée en République Démocratique du Congo avec une présence établie en Afrique du Sud, ARSSA relie les entreprises, fournisseurs et opportunités entre la RDC et l'Afrique australe, l'Afrique du Sud servant de hub régional clé pour l'approvisionnement et le commerce.",
    footerLocation: "Présence Établie en Afrique du Sud — desservant le corridor commercial RDC–Afrique australe",
  },
  pt: {
    heroSub: "Conectando a RDC e a África Austral com capacidades operacionais, regulatórias e logísticas completas.",
    importExportDesc: "Facilitação de comércio, conformidade aduaneira, logística e movimento transfronteiriço de mercadorias no corredor comercial RDC–África Austral.",
    miningDesc: "Apoio prático para aprovisionamento mineiro, colocação de força de trabalho, parcerias, fornecimento industrial e coordenação comercial no corredor comercial RDC–África Austral.",
    miningPreview: ["Apoio mineiro", "Aprovisionamento", "Colocação de pessoal", "Parcerias", "Coordenação de fornecimento"],
    corridorTitle: "O Corredor Comercial RDC–África Austral",
    corridorDesc: "Expandir operações entre a RDC e a África Austral exige profundo conhecimento local, conformidade rigorosa e logística consolidada. A ARSSA remove o atrito transfronteiriço ao integrar mercado, distribuição e apoio num único parceiro.",
    ctaText: "A ARSSA oferece apoio integrado para empresas que procuram estabelecer-se, operar e crescer no corredor comercial RDC–África Austral.",
    footerDesc: "Com sede na República Democrática do Congo e presença estabelecida na África do Sul, a ARSSA conecta empresas, fornecedores e oportunidades entre a RDC e a África Austral, servindo a África do Sul como um polo regional de aprovisionamento e comércio.",
    footerLocation: "Presença Estabelecida na África do Sul — servindo o corredor comercial RDC–África Austral",
  },
  sw: {
    heroSub: "Kuunganisha DRC na Kusini mwa Afrika kwa utaalamu thabiti wa kisheria, kiutendaji na usambazaji wa mashinani.",
    importExportDesc: "Uwezeshaji wa biashara, vibali vya forodha na usafirishaji salama wa mizigo katika ukanda wa biashara wa DRC–Kusini mwa Afrika.",
    miningDesc: "Usaidizi madhubuti wa ununuzi wa vifaa vya migodi, upangaji wa nguvu kazi, ushirikiano, ugavi wa viwandani na uratibu wa kibiashara katika ukanda wa DRC–Kusini mwa Afrika.",
    miningPreview: ["Usaidizi wa madini", "Ununuzi", "Upangaji wa wafanyakazi", "Ushirikiano", "Uratibu wa ugavi"],
    corridorTitle: "Ukanda wa Biashara wa DRC–Kusini mwa Afrika",
    corridorDesc: "Kupanua biashara kati ya DRC na Kusini mwa Afrika kunahitaji ufahamu wa kina wa ndani, uzingatiaji thabiti wa sheria na usafirishaji wa kutegemewa. ARSSA inaondoa vikwazo vya mipakani kwa kuunganisha huduma zote chini ya paa moja.",
    ctaText: "ARSSA inatoa msaada kamili wa kiutendaji kwa wafanyabiashara wanaotaka kuanzisha, kuendesha na kukuza biashara katika ukanda wa biashara wa DRC–Kusini mwa Afrika.",
    footerDesc: "Ikiwa na makao makuu katika Jamhuri ya Kidemokrasia ya Kongo na uwepo thabiti nchini Afrika Kusini, ARSSA inaunganisha biashara, wasambazaji na fursa kati ya DRC na Kusini mwa Afrika, huku Afrika Kusini ikitumika kama kitovu kikuu cha ununuzi na biashara cha kikanda.",
    footerLocation: "Uwepo Thabiti Afrika Kusini — inahudumia ukanda wa biashara wa DRC–Kusini mwa Afrika",
  },
  ln: {
    heroSub: "Kokangisa RDC mpe Afríka ya Súdi na makoki ya mosala, mibeko mpe bopanzani ya biloko.",
    importExportDesc: "Kosalisa mombo, kofuta mpako ya douane, kotambwisa biloko malamu na nzela ya mombo RDC–Afríka ya Súdi na zoni mobimba.",
    miningDesc: "Lisalisi ya solo mpo na kozwa biloko ya mabele ya talo, kozwa basali, boyokani, biloko ya misala mpe kokamba mombo na nzela ya DRC–Afríka ya Súdi.",
    miningPreview: ["Lisalisi ya mabanga", "Kozwa biloko", "Kopesa basali misala", "Boyokani", "Bokambi biloko"],
    corridorTitle: "Nzela ya Mombo RDC–Afríka ya Súdi na Zoni",
    corridorDesc: "Kopanisa mombo na RDC mpe Afríka ya Súdi esengaka boyebi ya mozindo ya mboka, kotosa mibeko mpe nzela ya kotinda biloko ya solosolo. ARSSA elongolaka mikakatano nyonso na kokangisa makambo nyonso esika moko.",
    ctaText: "ARSSA epesaka lisalisi ya solosolo mpo na bakompani oyo balingi kotonga, kosala mpe kokola na nzela ya mombo RDC–Afríka ya Súdi.",
    footerDesc: "Kitelemisi monene na République Démocratique du Congo mpe esika ya mosala na Afríka ya Súdi, ARSSA ekangisaka bakompani, bapesil biloko mpe mabaku ya mombo kati ya RDC mpe Afríka ya Súdi.",
    footerLocation: "Kozala na Afríka ya Súdi — kosalela nzela ya mombo RDC–Afríka ya Súdi na zoni",
  },
  af: {
    heroSub: "Verbind die DRK en Suider-Afrika met omvattende operasionele, regulatoriese en veldvermoëns.",
    importExportDesc: "Handelsfasilitering, doeane-nakoming, logistiek en oorgrensvervoer van goedere oor die DRK–Suider-Afrika-handelskorridor.",
    miningDesc: "Praktiese ondersteuning vir mynbouverwante verkryging, werksmagplasing, vennootskappe, voorrade en kommersiële koördinering oor die DRK–Suider-Afrika-handelskorridor.",
    miningPreview: ["Mynbou-ondersteuning", "Verkryging", "Werksmagplasing", "Vennootskappe", "Voorrade-koördinering"],
    corridorTitle: "Die DRK–Suider-Afrika Handelskorridor",
    corridorDesc: "Uitbreiding tussen die DRK en Suider-Afrika verg diepgaande plaaslike kennis, sterk regulatoriese raamwerke en gevestigde logistiek. ARSSA verwyder oorgrenswrywing deur fasilitering, verkope, logistiek en nakoming onder een dak te verenig.",
    ctaText: "ARSSA bied praktiese, geïntegreerde ondersteuning vir ondernemings wat wil vestig, bedryf en groei oor die DRK–Suider-Afrika-handelskorridor.",
    footerDesc: "Met sy hoofkantoor in die Demokratiese Republiek van die Kongo en 'n gevestigde Suid-Afrikaanse teenwoordigheid, verbind ARSSA besighede, verskaffers en geleenthede tussen die DRK en Suider-Afrika, met Suid-Afrika as 'n sleutelstreeks- en verkrygingsentrum.",
    footerLocation: "Gevestigde Suid-Afrikaanse Teenwoordigheid — bedien die DRK–Suider-Afrika-handelskorridor",
  },
  zu: {
    heroSub: "Ukuxhumanisa i-DRC neNingizimu Afrika yonkana ngamakhono aqinile okusebenza, ezomthetho nezokuthutha.",
    importExportDesc: "Ukuxhasa ukuhweba, ukuthobela imithetho yempahla, ezokuthutha nokuhamba kwempahla emngceleni we-DRC–Ningizimu Afrika.",
    miningDesc: "Ukwesekwa okubambekayo kokuthola izinsiza zezimayini, ukubekwa kwabasebenzi, ubambiswano nempahla ephasishini lokuhweba le-DRC–Ningizimu Afrika.",
    miningPreview: ["Ukuxhaswa kwezimayini", "Ukuthola impahla", "Ukubekwa kwabasebenzi", "Ubambiswano", "Ukuxhumanisa impahla"],
    corridorTitle: "Iphasishi Lokuhweba lase-DRC–Ningizimu Afrika",
    corridorDesc: "Ukwandisa amabhizinisi phakathi kwe-DRC neNingizimu Afrika kudinga ulwazi olunzulu lwendawo, imithetho eqinile kanye nezokuthutha eziphephile. I-ARSSA isusa ubunzima ngokuhlanganisa yonke into ngaphansi kophahla olulodwa.",
    ctaText: "I-ARSSA inikeza ukwesekwa okudidiyelwe kwamabhizinisi afisa ukusungula nokukhula ephasishini lokuhweba le-DRC–Ningizimu Afrika.",
    footerDesc: "Ikomkhulu layo liseDemocratic Republic of Congo kanti inobukhona obuqinile eNingizimu Afrika, i-ARSSA ixhumanisa amabhizinisi, abahlinzeki kanye namathuba phakathi kwe-DRC neNingizimu Afrika yonkana.",
    footerLocation: "Ubukhona Obumisiwe eNingizimu Afrika — sikhonza iphasishi lokuhweba le-DRC–Ningizimu Afrika",
  },
  xh: {
    heroSub: "Ukudibanisa i-DRC noMzantsi Afrika wonke ngamakhono aqinileyo okusebenza, ezomthetho nezothutho.",
    importExportDesc: "Uququzelelo lorhwebo, ukuthotyelwa kwemithetho yeempahla, ulogistiki nokuthuthwa kweempahla kummandla we-DRC–Mazantsi e-Afrika.",
    miningDesc: "Inkxaso esebenzayo yokufumana izixhobo zokumba, ukubekwa kwabasebenzi, ubudlelwane, unikezelo lweempahla kunye nolungelelaniso lorhwebo kumda we-DRC–Mazantsi e-Afrika.",
    miningPreview: ["Inkxaso yezemigodi", "Ukufumana izixhobo", "Ukubekwa kwabasebenzi", "Ubudlelwane", "Ulungelelaniso lweempahla"],
    corridorTitle: "Indlela yoRhwebo yase-DRC–Mazantsi e-Afrika",
    corridorDesc: "Ukwandisa amashishini phakathi kwe-DRC noMzantsi Afrika kufuna ulwazi olunzulu lwasekhaya, imimiselo engqongqo kunye nothutho oluthembekileyo. I-ARSSA isusa imiqobo ngokudibanisa yonke into phantsi kophahla olunye.",
    ctaText: "I-ARSSA ibonelela ngenkxaso edityanisiweyo kumashishini afuna ukuzinza nokukhula kwindlela yoRhwebo yase-DRC–Mazantsi e-Afrika.",
    footerDesc: "Ikomkhulu layo liseDemocratic Republic of Congo kanti inobukho obuqinileyo eMzantsi Afrika, i-ARSSA idibanisa amashishini, ababoneleli kunye namathuba phakathi kwe-DRC noMzantsi Afrika wonke.",
    footerLocation: "Ubukho Obumisiweyo eMzantsi Afrika — sikhonza indlela yoRhwebo yase-DRC–Mazantsi e-Afrika",
  },
  zh: {
    heroSub: "依托端到端的运营、法规合规与实地网络，深度连通刚果（金）与南部非洲各主要市场。",
    importExportDesc: "依托刚果（金）–南部非洲核心贸易走廊，提供进出口通关、海关合规、国际物流与货运供应链一体化服务。",
    miningDesc: "为刚果（金）–南部非洲矿业走廊提供设备采购、专业人才派遣配置、战略合作、备件供应与跨国商业落地协同。",
    miningPreview: ["矿业落地支持", "关键设备采购", "专业人才派遣", "跨国战略合作", "供应链统筹"],
    corridorTitle: "刚果（金）–南部非洲经贸走廊",
    corridorDesc: "在刚果（金）与南部非洲之间拓展商业版图，需要深厚的地方商业洞察、严谨的法规风控及扎实的物流履约。ARSSA 将准入、分销、物流与法务整合于一体，彻底消除跨境贸易壁垒。",
    ctaText: "ARSSA 为计划在刚果（金）–南部非洲贸易走廊拓展业务的企业提供实用、落地的一体化综合支持。",
    footerDesc: "总部设立于刚果民主共和国，并在南非拥有成熟的常设运营实体，ARSSA 紧密连接刚果（金）与南部非洲各国的企业、供应商与商业机遇，以南非作为关键的区域采购与商业枢纽。",
    footerLocation: "扎根南非实体运营 — 全面服务刚果（金）–南部非洲经贸走廊",
  },
  ar: {
    heroSub: "ربط جمهورية الكونغو الديمقراطية والجنوب الأفريقي بقدرات تشغيلية وقانونية ولوجستية متكاملة.",
    importExportDesc: "تيسير حركة التجارة الدولية، التخليص الجمركي، اللوجستيات وسلسلة الإمداد عبر ممر التجارة بين الكونغو الديمقراطية والجنوب الأفريقي.",
    miningDesc: "دعم عملي لعمليات التوريد لقطاع التعدين، وتوظيف الكفاءات، والشراكات وتوريد المعدات والتنسيق التجاري عبر ممر الكونغو الديمقراطية والجنوب الأفريقي.",
    miningPreview: ["دعم قطاع التعدين", "عمليات التوريد", "توظيف الكفاءات", "بناء الشراكات", "تنسيق سلاسل الإمداد"],
    corridorTitle: "ممر التجارة بين الكونغو الديمقراطية والجنوب الأفريقي",
    corridorDesc: "يتطلب التوسع التجاري بين الكونغو الديمقراطية والجنوب الأفريقي دراية ميدانية عميقة وأطراً تنظيمية دقيقة ولوجستيات موثوقة. ترفع ARSSA كافة العقبات عبر توحيد التراخيص والمبيعات واللوجستيات في مكان واحد.",
    ctaText: "تقدم ARSSA دعماً تشغيلياً متكاملاً للشركات الراغبة في التأسيس والنمو عبر ممر التجارة بين الكونغو الديمقراطية والجنوب الأفريقي.",
    footerDesc: "يقع مقرها الرئيسي في جمهورية الكونغو الديمقراطية ولديها وجود تشغيلي راسخ في جنوب أفريقيا، وتربط ARSSA بين الشركات والموردين والفرص بين الكونغو الديمقراطية والجنوب الأفريقي، حيث تعمل جنوب أفريقيا كمركز إقليمي رئيسي للتوريد والتجارة.",
    footerLocation: "تواجد تشغيلي راسخ في جنوب أفريقيا — خدمة ممر التجارة مع جمهورية الكونغو الديمقراطية والجنوب الأفريقي",
  },
  es: {
    heroSub: "Conectando la RDC y el África Austral con capacidades operativas, regulatorias y de campo de extremo a extremo.",
    importExportDesc: "Facilitación comercial, despacho aduanero, logística y transporte transfronterizo en el corredor comercial RDC–África Austral.",
    miningDesc: "Apoyo práctico para abastecimiento minero, dotación de personal técnico, alianzas comerciales, suministros industriales y coordinación bilateral en el corredor RDC–África Austral.",
    miningPreview: ["Apoyo minero", "Abastecimiento", "Dotación de personal", "Alianzas", "Coordinación de suministros"],
    corridorTitle: "El Corredor Comercial RDC–África Austral",
    corridorDesc: "La expansión entre la RDC y el África Austral requiere un sólido conocimiento local, cumplimiento normativo estricto y logística consolidada. ARSSA elimina la fricción transfronteriza integrando todos los servicios bajo un mismo techo.",
    ctaText: "ARSSA proporciona respaldo integral y práctico para empresas que buscan establecerse, operar y crecer a lo largo del corredor comercial RDC–África Austral.",
    footerDesc: "Con sede en la República Democrática del Congo y presencia establecida en Sudáfrica, ARSSA conecta empresas, proveedores y oportunidades entre la RDC y el África Austral, sirviendo Sudáfrica como un centro regional clave de aprovisionamiento y comercio.",
    footerLocation: "Presencia Establecida en Sudáfrica — sirviendo al corredor comercial RDC–África Austral",
  },
  de: {
    heroSub: "Verbindung der DR Kongo und des südlichen Afrikas durch operative Exzellenz, Rechtssicherheit und Vor-Ort-Kompetenz.",
    importExportDesc: "Handelsabwicklung, Zoll-Compliance, Logistik und grenzüberschreitender Güterverkehr entlang des Handelskorridors DR Kongo–Südliches Afrika.",
    miningDesc: "Praktische Unterstützung bei bergbaubezogener Beschaffung, Fachkräftevermittlung, Partnerschaften, Industriegütern und kommerzieller Koordination im Handelskorridor DR Kongo–Südliches Afrika.",
    miningPreview: ["Bergbauliche Unterstützung", "Beschaffung", "Fachkräftevermittlung", "Partnerschaften", "Lieferkoordination"],
    corridorTitle: "Der Handelskorridor DR Kongo–Südliches Afrika",
    corridorDesc: "Die Expansion zwischen der DR Kongo und dem südlichen Afrika erfordert profunde lokale Kenntnisse, präzise Einhaltung von Vorschriften und zuverlässige Logistikketten. ARSSA eliminiert grenzüberschreitende Reibungsverluste durch die Bündelung aller Dienstleistungen.",
    ctaText: "ARSSA bietet ganzheitliche, praxiserprobte Unterstützung für Unternehmen, die im Handelskorridor DR Kongo–Südliches Afrika wachsen wollen.",
    footerDesc: "Mit Hauptsitz in der Demokratischen Republik Kongo und einer etablierten Präsenz in Südafrika verbindet ARSSA Unternehmen, Lieferanten und Geschäftsmöglichkeiten zwischen der DR Kongo und dem südlichen Afrika, wobei Südafrika als zentraler regionaler Beschaffungs- und Handelsknotenpunkt dient.",
    footerLocation: "Etablierte Präsenz in Südafrika — im Einsatz für den Handelskorridor DR Kongo–Südliches Afrika",
  },
  hi: {
    heroSub: "एंड-टू-एंड परिचालन, विनियामक और क्षेत्रीय क्षमताओं के साथ डीआरसी और दक्षिणी अफ्रीका को जोड़ना।",
    importExportDesc: "डीआरसी-दक्षिणी अफ्रीका व्यापार गलियारे में वस्तुओं के लिए व्यापार सुविधा, सीमा शुल्क अनुपालन, रसद और सीमा पार आवाजाही।",
    miningDesc: "डीआरसी-दक्षिणी अफ्रीका व्यापार गलियारे में खनन संबंधी सोर्सिंग, कार्यबल प्लेसमेंट, साझेदारी, आपूर्ति और वाणिज्यिक समन्वय के लिए व्यावहारिक सहायता।",
    miningPreview: ["खनन सहायता", "सोर्सिंग", "कार्यबल प्लेसमेंट", "साझेदारी", "आपूर्ति समन्वय"],
    corridorTitle: "डीआरसी-दक्षिणी अफ्रीका व्यापार गलियारा",
    corridorDesc: "डीआरसी और दक्षिणी अफ्रीका के बीच विस्तार के लिए गहन स्थानीय समझ, मजबूत विनियामक अनुपालन और विश्वसनीय रसद की आवश्यकता होती है। ARSSA सभी प्रक्रियाओं को एक छत के नीचे एकीकृत करता है।",
    ctaText: "ARSSA उन व्यवसायों के लिए व्यावहारिक, एकीकृत सहायता प्रदान करता है जो डीआरसी-दक्षिणी अफ्रीका व्यापार गलियारे में विस्तार करना चाहते हैं।",
    footerDesc: "कांगो लोकतांत्रिक गणराज्य में मुख्यालय और दक्षिण अफ्रीका में स्थापित उपस्थिति के साथ, ARSSA व्यवसायों, आपूर्तिकर्ताओं और अवसरों को डीआरसी और दक्षिणी अफ्रीका के बीच जोड़ता है, जिसमें दक्षिण अफ्रीका एक प्रमुख क्षेत्रीय सोर्सिंग और वाणिज्यिक केंद्र के रूप में कार्य करता है।",
    footerLocation: "दक्षिण अफ्रीका में स्थापित उपस्थिति — डीआरसी-दक्षिणी अफ्रीका व्यापार गलियारे की सेवा",
  },
  ru: {
    heroSub: "Соединяем ДРК и страны Южной Африки надежными оперативными, юридическими и логистическими решениями.",
    importExportDesc: "Таможенное содействие, регуляторное соответствие, логистика и надежные трансграничные перевозки по торговому коридору ДРК – Южная Африка.",
    miningDesc: "Практическое содействие в закупках для горнодобывающей отрасли, подборе кадров, партнерствах, поставках оборудования и коммерческой координации по коридору ДРК – Южная Африка.",
    miningPreview: ["Поддержка горной отрасли", "Закупки и поставки", "Подбор персонала", "Партнерство", "Координация поставок"],
    corridorTitle: "Торговый коридор ДРК – Южная Африка",
    corridorDesc: "Экспансия между ДРК и Южной Африкой требует глубокого понимания местной специфики, точного соблюдения регуляторных требований и четкой логистики. ARSSA устраняет границы, объединяя все процессы под одной крышей.",
    ctaText: "ARSSA предоставляет комплексную поддержку для компаний, планирующих запуск и масштабирование бизнеса по торговому коридору ДРК – Южная Африка.",
    footerDesc: "Штаб-квартира в Демократической Республике Конго и постоянное операционное присутствие в ЮАР позволяют ARSSA соединять бизнес, поставщиков и возможности между ДРК и Южной Африкой, где ЮАР служит ключевым региональным центром закупок и торговли.",
    footerLocation: "Постоянное присутствие в ЮАР — обслуживание торгового коридора ДРК – Южная Африка",
  },
  ja: {
    heroSub: "エンドツーエンドの実務、法規制コンプライアンス、および現地展開力により、コンゴ民主共和国と南部アフリカ全域を結びます。",
    importExportDesc: "コンゴ民主共和国–南部アフリカ貿易回廊における物品の貿易円滑化、通関手続き、複合物流、および国境間輸送。",
    miningDesc: "コンゴ民主共和国–南部アフリカ貿易回廊における鉱業調達、専門人材派遣・配置、提携、資機材供給および商業調整の実践的支援。",
    miningPreview: ["鉱業支援", "調達支援", "専門人材配置", "戦略的提携", "資機材供給調整"],
    corridorTitle: "コンゴ民主共和国–南部アフリカ貿易回廊",
    corridorDesc: "コンゴ民主共和国と南部アフリカ間の事業拡大には、深い現地知見、厳格な法規制遵守、および確固たる物流網が不可欠です。ARSSA は市場参入から流通、法務対応までを一元化します。",
    ctaText: "ARSSA は、コンゴ民主共和国–南部アフリカ貿易回廊で事業を設立・運営・拡大する企業に、実用的な統合ソリューションを提供します。",
    footerDesc: "コンゴ民主共和国に本社を置き、南アフリカに強固な事業拠点を有する ARSSA は、南アフリカを主要な調達・商業ハブとして機能させながら、コンゴ民主共和国と南部アフリカ全域の企業、サプライヤー、商業機会を結びます。",
    footerLocation: "南アフリカにおける確立された事業基盤 — コンゴ民主共和国–南部アフリカ貿易回廊に対応",
  },
  ko: {
    heroSub: "현장 중심의 실행력과 엄격한 규정 준수를 바탕으로 콩고민주공화국과 남부 아프리카 전역을 유기적으로 연결합니다.",
    importExportDesc: "콩고민주공화국–남부 아프리카 무역 회랑을 통한 물품의 무역 촉진, 통관 준수, 복합 물류 및 국경 간 수송.",
    miningDesc: "콩고민주공화국–남부 아프리카 무역 회랑을 통한 광업 소싱, 전문 인력 파견 및 배치, 전략적 제휴, 자재 공급 및 상업적 조율을 위한 실질적 지원.",
    miningPreview: ["광업 지원", "소싱 지원", "전문 인력 배치", "파트너십", "공급 조율"],
    corridorTitle: "콩고민주공화국–남부 아프리카 무역 회랑",
    corridorDesc: "콩고민주공화국과 남부 아프리카 간의 비즈니스 확장은 깊이 있는 현지 통찰력, 엄격한 규제 프레임워크 및 견고한 물류 네트워크를 필요로 합니다. ARSSA는 모든 과정을 단일 파트너로서 통합 지원합니다.",
    ctaText: "ARSSA는 콩고민주공화국–남부 아프리카 무역 회랑에서 사업을 설립, 운영 및 확장하려는 기업을 위해 실용적인 통합 지원을 제공합니다.",
    footerDesc: "콩고민주공화국에 본사를 두고 남아프리카공화국에 확고한 현지 거점을 둔 ARSSA는 남아프리카공화국을 핵심 조달 및 상업 허브로 삼아 콩고민주공화국과 남부 아프리카 전역의 기업, 공급업체 및 상업적 기회를 연결합니다.",
    footerLocation: "남아프리카공화국 현지 거점 — 콩고민주공화국–남부 아프리카 무역 회랑 지원",
  },
  it: {
    heroSub: "Collegare la RDC e l'Africa australe con capacità operative, normative e sul campo complete.",
    importExportDesc: "Facilitazione del commercio, sdoganamento, logistica e movimento transfrontaliero di merci lungo il corridoio commerciale RDC–Africa australe.",
    miningDesc: "Supporto pratico per l'approvvigionamento minerario, collocamento della manodopera, partnership, forniture industriali e coordinamento commerciale nel corridoio RDC–Africa australe.",
    miningPreview: ["Supporto minerario", "Approvvigionamento", "Collocamento del personale", "Partnership", "Coordinamento delle forniture"],
    corridorTitle: "Il Corridoio Commerciale RDC–Africa Australe",
    corridorDesc: "L'espansione tra la RDC e l'Africa australe richiede una profonda conoscenza locale, conformità rigorosa e logistica affidabile. ARSSA elimina gli attriti transfrontalieri integrando tutti i servizi sotto un unico tetto.",
    ctaText: "ARSSA offre un supporto integrato e pratico per le aziende che desiderano insediarsi, operare e crescere lungo il corridoio commerciale RDC–Africa australe.",
    footerDesc: "Con sede nella Repubblica Democratica del Congo e una presenza consolidata in Sudafrica, ARSSA collega aziende, fornitori e opportunità tra la RDC e l'Africa australe, con il Sudafrica come snodo commerciale e di approvvigionamento regionale chiave.",
    footerLocation: "Presenza Consolidata in Sudafrica — al servizio del corridoio commerciale RDC–Africa australe",
  },
  nl: {
    heroSub: "Het verbinden van de DRC en Zuidelijk Afrika met end-to-end operationele, regelgevende en veldcapaciteiten.",
    importExportDesc: "Handelsfacilitering, douane-naleving, logistiek en grensoverschrijdend goederenvervoer over de handelscorridor DRC–Zuidelijk Afrika.",
    miningDesc: "Praktische ondersteuning voor mijnbouwgerelateerde inkoop, personeelsplaatsing, partnerschappen, leveringen en commerciële coördinatie over de handelscorridor DRC–Zuidelijk Afrika.",
    miningPreview: ["Mijnbouwondersteuning", "Inkoop", "Personeelsplaatsing", "Partnerschappen", "Leveringscoördinatie"],
    corridorTitle: "De Handelscorridor DRC–Zuidelijk Afrika",
    corridorDesc: "Uitbreiden tussen de DRC en Zuidelijk Afrika vereist diepgaande lokale kennis, sterke naleving van wetgeving en betrouwbare logistiek. ARSSA neemt alle grensoverschrijdende obstakels weg door markttoetreding, distributie en naleving onder één dak te verenigen.",
    ctaText: "ARSSA biedt praktische, integrale ondersteuning voor bedrijven die willen starten en groeien over de handelscorridor DRC–Zuidelijk Afrika.",
    footerDesc: "Met het hoofdkantoor in de Democratische Republiek Congo en een gevestigde aanwezigheid in Zuid-Afrika, verbindt ARSSA bedrijven, leveranciers en kansen tussen de DRC en Zuidelijk Afrika, waarbij Zuid-Afrika fungeert als een belangrijke regionale inkoop- en commerciële hub.",
    footerLocation: "Gevestigde Aanwezigheid in Zuid-Afrika — ten dienste van de handelscorridor DRC–Zuidelijk Afrika",
  },
};

for (const [lang, u] of Object.entries(UPDATES)) {
  const filePath = path.join(localesDir, `${lang}.ts`);
  let content = fs.readFileSync(filePath, "utf8");

  // 1. Replace subtitle in divisionsSection
  content = content.replace(
    /("divisionsSection":\s*\{[^}]*"subtitle":\s*)"[^"]*"/,
    `$1"${u.heroSub.replace(/"/g, '\\"')}"`
  );

  // 2. Replace import-export description
  content = content.replace(
    /("slug":\s*"import-export"[\s\S]*?"description":\s*)"[^"]*"/,
    `$1"${u.importExportDesc.replace(/"/g, '\\"')}"`
  );

  // 3. Replace mining description
  content = content.replace(
    /("slug":\s*"mining"[\s\S]*?"description":\s*)"[^"]*"/,
    `$1"${u.miningDesc.replace(/"/g, '\\"')}"`
  );

  // 4. Replace mining preview array
  const formattedPreview = JSON.stringify(u.miningPreview, null, 8)
    .replace(/^\[/, "[\n        ")
    .replace(/\n\s*\]$/, "\n      ]");
  content = content.replace(
    /("slug":\s*"mining"[\s\S]*?"preview":\s*)\[[^\]]*\]/,
    `$1${formattedPreview}`
  );

  // 5. Replace corridor title
  content = content.replace(
    /("corridor":\s*\{[^}]*"title":\s*)"[^"]*"/,
    `$1"${u.corridorTitle.replace(/"/g, '\\"')}"`
  );

  // 6. Replace corridor desc
  content = content.replace(
    /("corridor":\s*\{[\s\S]*?"desc":\s*)"[^"]*"/,
    `$1"${u.corridorDesc.replace(/"/g, '\\"')}"`
  );

  // 7. Replace cta text
  content = content.replace(
    /("cta":\s*\{[\s\S]*?"text":\s*)"[^"]*"/,
    `$1"${u.ctaText.replace(/"/g, '\\"')}"`
  );

  // 8. Replace footer desc
  content = content.replace(
    /("footer":\s*\{[\s\S]*?"desc":\s*)"[^"]*"/,
    `$1"${u.footerDesc.replace(/"/g, '\\"')}"`
  );

  // 9. Replace footer location
  content = content.replace(
    /("footer":\s*\{[\s\S]*?"location":\s*)"[^"]*"/,
    `$1"${u.footerLocation.replace(/"/g, '\\"')}"`
  );

  fs.writeFileSync(filePath, content, "utf8");
  console.log(`Updated locale file: ${lang}.ts`);
}

console.log("All 18 locale files successfully updated.");
