const fs = require("fs");
const path = require("path");

const targetFile = path.join(__dirname, "../src/translations/universalPhrases.ts");
let fileContent = fs.readFileSync(targetFile, "utf8");

const visionFr = "Être le partenaire de référence qui simplifie et renforce les affaires transfrontalières entre la RDC et l'Afrique australe, en donnant aux entreprises pharmaceutiques, cosmétiques, agroalimentaires et minières les moyens de se développer en toute confiance.";
const visionPt = "Ser o parceiro líder que simplifica e fortalece os negócios transfronteiriços entre a RDC e a África Austral, capacitando empresas farmacêuticas, cosméticas, agroalimentares e mineiras a expandir com confiança.";
const visionSw = "Kuwa mshirika kiongozi anayerahisisha na kuimarisha biashara ya mipakani kati ya DRC na Kusini mwa Afrika, tukiwezesha kampuni za dawa, vipodozi, kilimo na vyakula, na madini kupanuka kwa kujiamini.";
const visionLn = "Kozala moninga ya yambo oyo azali kosalisa mpe kokolisa misala ya mombo ya kokatisa bindelo kati ya RDC mpe Afríka ya Súdi, kopesaka bakompani ya nkisi, biloko ya bopeto, biloko ya kolia mpe ya mabanga ya ntalo makoki ya kokola na motema mobimba.";
const visionAf = "Om die toonaangewende vennoot te wees wat oorgrenssake tussen die DRK en Suider-Afrika vereenvoudig en versterk, en farmaseutiese, kosmetiese, landbou-voedsel- en mynboumaatskappye bemagtig om met vertroue uit te brei.";
const visionZu = "Ukuba nguzakwethu ohamba phambili owenza ibhizinisi elinqamula imingcele phakathi kwe-DRC neNingizimu Afrika libe lula futhi liqine, sinikeza izinkampani zemithi, izimonyo, ezokudla nezolimo, kanye nezimayini amandla okukhula ngokuzethemba.";
const visionXh = "Ukuba liqabane eliphambili elenza lula kwaye lomeleze ushishino olunqumla imida phakathi kwe-DRC noMzantsi Afrika, lixhobisa iinkampani zamayeza, ezokuthambisa, ezokutya nezolimo, kunye nezemigodi ukuba zande ngokuzithemba.";
const visionZh = "成为简化并强化刚果（金）与南部非洲之间跨境商业往来的领先合作伙伴，赋能医药、化妆品、农产食品及矿产企业充满信心地拓展市场。";
const visionAr = "أن نكون الشريك الرائد الذي ييسر ويعزز الأعمال التجارية العابرة للحدود بين جمهورية الكونغو الديمقراطية وجنوب إفريقيا، وتمكين شركات الأدوية ومستحضرات التجميل والصناعات الغذائية والتعدين من التوسع بثقة.";
const visionEs = "Ser el socio líder que simplifica y fortalece el comercio transfronterizo entre la RDC y el sur de África, capacitando a las empresas farmacéuticas, cosméticas, agroalimentarias y mineras para expandirse con total confianza.";
const visionDe = "Der führende Partner zu sein, der grenzüberschreitende Geschäfte zwischen der DR Kongo und dem südlichen Afrika vereinfacht und stärkt, und Pharma-, Kosmetik-, Agrar- und Bergbauunternehmen befähigt, mit Zuversicht zu expandieren.";
const visionHi = "डीआरसी और दक्षिणी अफ्रीका के बीच सीमा पार व्यापार को सरल और मजबूत बनाने वाला अग्रणी भागीदार बनना, जिससे दवा, सौंदर्य प्रसाधन, कृषि-खाद्य और खनन कंपनियों को आत्मविश्वास के साथ विस्तार करने में सशक्त बनाया जा सके।";
const visionRu = "Быть ведущим партнером, упрощающим и укрепляющим трансграничный бизнес между ДРК и странами Южной Африки, помогая фармацевтическим, косметическим, агропродовольственным и горнодобывающим компаниям уверенно масштабироваться.";
const visionJa = "コンゴ民主共和国と南部アフリカ間の国境を越えたビジネスを簡素化・強化し、製薬、化粧品、農産食品、および鉱業分野の企業が自信を持って市場拡大できるよう支援する主導的パートナーを目指します。";
const visionKo = "콩고민주공화국과 남부 아프리카 간의 국경 간 비즈니스를 간소화하고 강화하여, 제약, 화장품, 농식품 및 광업 기업이 확信을 갖고 비즈니스를 확장할 수 있도록 지원하는 선도적인 파트너가 되는 것입니다.";
const visionIt = "Essere il partner di riferimento che semplifica e rafforza il commercio transfrontaliero tra la RDC e l'Africa australe, consentendo alle aziende farmaceutiche, cosmetiche, agroalimentari e minerarie di espandersi con fiducia.";
const visionNl = "De toonaangevende partner zijn die grensoverschrijdend zakendoen tussen de DRC en Zuidelijk Afrika vereenvoudigt en versterkt, en farmaceutische, cosmetische, agrofood- en mijnbouwbedrijven in staat stelt met vertrouwen uit te breiden.";

const missionFr = "Permettre aux entreprises de s'implanter, d'opérer et de se développer en RDC grâce à une facilitation structurée, conforme et axée sur les résultats, tout en renforçant les liens commerciaux entre la RDC et les marchés régionaux et internationaux.";
const missionPt = "Capacitar as empresas a estabelecerem-se, operarem e crescerem na RDC através de uma facilitação estruturada, em conformidade e orientada para resultados, fortalecendo simultaneamente as ligações comerciais entre a RDC e os mercados regionais e internacionais.";
const missionSw = "Kuziwezesha biashara kuanzisha, kuendesha na kukuza shughuli zao nchini DRC kupitia uwezeshaji uliopangwa, unaozingatia sheria na wenye kuleta matokeo, huku tukiimarisha uhusiano wa kibiashara kati ya DRC na masoko ya kikanda na ya kimataifa.";
const missionLn = "Kopesa bakompani nzela ya kofanda, kosala mpe kokola na RDC na nzela ya lisalisi ya kolongobana, oyo etosaka mibeko mpe epesaka matomba ya solo, wana tozali kokolisa boyokani ya mombo kati ya RDC mpe bazando ya zoni na mokili mobimba.";
const missionAf = "Om besighede in staat te stel om in die DRK te vestig, bedryf en groei deur gestruktureerde, voldoenende en resultaatgedrewe fasilitering, terwyl handels- en kommersiële verbindings tussen die DRK en streeks- sowel as internasionale markte versterk word.";
const missionZu = "Ukunika amabhizinisi amandla okusungula, ukusebenza kanye nokukhula e-DRC ngokusebenzisa ukuhlelwa okuhlelekile, okuthobela imithetho futhi okugxile emiphumeleni, ngenkathi kuqiniswa ukuxhumana kwezohwebo phakathi kwe-DRC nezimakethe zesifunda nezamazwe ngamazwe.";
const missionXh = "Ukwenza amashishini akwazi ukuzinza, ukusebenza nokukhula e-DRC ngoququzelelo olulungelelanisiweyo, oluthobela imithetho nolujolise kwiziphumo, ngelixa kuqiniswa uxhulumaniso lwezorhwebo phakathi kwe-DRC neemarike zengingqi nezamazwe ngamazwe.";
const missionZh = "通过严谨合规、结构化且注重实效的综合落地赋能，助力企业在刚果（金）顺利落地、高效运营与长效增长，同时持续深化刚果（金）与区域及全球市场之间的商贸互联。";
const missionAr = "تمكين الشركات من التأسيس والعمل والنمو في جمهورية الكونغو الديمقراطية من خلال تيسير منظم وممتثل وقائم على تحقيق النتائج، مع تعزيز الروابط التجارية بين جمهورية الكونغو الديمقراطية والأسواق الإقليمية والدولية.";
const missionEs = "Capacitar a las empresas para establecerse, operar y crecer en la RDC mediante una facilitación estructurada, conforme a la normativa y orientada a resultados, fortaleciendo al mismo tiempo los vínculos comerciales entre la RDC y los mercados regionales e internacionales.";
const missionDe = "Unternehmen in die Lage zu versetzen, sich in der DR Kongo durch strukturierte, regelkonforme und ergebnisorientierte Begleitung zu etablieren, zu operieren und zu wachsen, während gleichzeitig die Handels- und Wirtschaftsbeziehungen zwischen der DR Kongo sowie regionalen und internationalen Märkten gestärkt werden.";
const missionHi = "व्यवसायों को संरचित, अनुपालन-युक्त और परिणाम-संचालित सुविधा के माध्यम से डीआरसी में स्थापित होने, संचालित करने और विकसित होने में सक्षम बनाना, साथ ही डीआरसी और क्षेत्रीय तथा अंतर्राष्ट्रीय बाजारों के बीच व्यापार और वाणिज्यिक संबंधों को मजबूत करना।";
const missionRu = "Обеспечивать компаниям возможность успешно выходить на рынок, вести деятельность и расти в ДРК благодаря структурированному, нормативно выверенному и результативному сопровождению, одновременно укрепляя торговые и деловые связи между ДРК, региональными и международными рынками.";
const missionJa = "体系的で法規制を遵守した成果重視の支援を通じて、企業がコンゴ民主共和国において事業を確立・運営・拡大できるようにするとともに、コンゴ民主共和国と地域および国際市場との貿易・商業連携を強化します。";
const missionKo = "체계적이고 규정을 준수하며 결과 중심적인 원스톱 지원을 통해 기업이 콩고민주공화국에서 사업을 설립, 운영 및 확장할 수 있도록 지원하고, 콩고민주공화국과 역내 및 글로벌 시장 간의 무역과 상업적 연결을 공고히 합니다.";
const missionIt = "Consentire alle imprese di insediarsi, operare e crescere nella RDC attraverso una facilitazione strutturata, conforme e orientata ai risultati, rafforzando al contempo le connessioni commerciali tra la RDC e i mercati regionali e internazionali.";
const missionNl = "Bedrijven in staat stellen zich te vestigen, te opereren en te groeien in de DRC door middel van gestructureerde, regelconforme en resultaatgerichte facilitering, terwijl de handels- en commerciële verbindingen tussen de DRC en regionale en internationale markten worden versterkt.";

const PHRASES_TO_ADD = {
  // Vision (Primary - with Oxford comma)
  "To be the leading partner that simplifies and strengthens cross-border business between the DRC and Southern Africa, empowering pharmaceutical, cosmetic, agri-food, and mining companies to expand with confidence.": {
    en: "To be the leading partner that simplifies and strengthens cross-border business between the DRC and Southern Africa, empowering pharmaceutical, cosmetic, agri-food, and mining companies to expand with confidence.",
    fr: visionFr,
    pt: visionPt,
    sw: visionSw,
    ln: visionLn,
    af: visionAf,
    zu: visionZu,
    xh: visionXh,
    zh: visionZh,
    ar: visionAr,
    es: visionEs,
    de: visionDe,
    hi: visionHi,
    ru: visionRu,
    ja: visionJa,
    ko: visionKo,
    it: visionIt,
    nl: visionNl,
  },

  // Vision variation (without Oxford comma)
  "To be the leading partner that simplifies and strengthens cross-border business between the DRC and Southern Africa, empowering pharmaceutical, cosmetic, agri-food and mining companies to expand with confidence.": {
    en: "To be the leading partner that simplifies and strengthens cross-border business between the DRC and Southern Africa, empowering pharmaceutical, cosmetic, agri-food and mining companies to expand with confidence.",
    fr: visionFr,
    pt: visionPt,
    sw: visionSw,
    ln: visionLn,
    af: visionAf,
    zu: visionZu,
    xh: visionXh,
    zh: visionZh,
    ar: visionAr,
    es: visionEs,
    de: visionDe,
    hi: visionHi,
    ru: visionRu,
    ja: visionJa,
    ko: visionKo,
    it: visionIt,
    nl: visionNl,
  },

  // Vision variation (mining first)
  "To be the leading partner that simplifies and strengthens cross-border business between the DRC and Southern Africa, empowering mining, pharmaceutical, cosmetic, and agri-food companies to expand with confidence.": {
    en: "To be the leading partner that simplifies and strengthens cross-border business between the DRC and Southern Africa, empowering mining, pharmaceutical, cosmetic, and agri-food companies to expand with confidence.",
    fr: visionFr,
    pt: visionPt,
    sw: visionSw,
    ln: visionLn,
    af: visionAf,
    zu: visionZu,
    xh: visionXh,
    zh: visionZh,
    ar: visionAr,
    es: visionEs,
    de: visionDe,
    hi: visionHi,
    ru: visionRu,
    ja: visionJa,
    ko: visionKo,
    it: visionIt,
    nl: visionNl,
  },

  // Mission (Primary - exact user text from prompt #2)
  "To enable businesses to establish, operate and grow in the DRC through structured, compliant and results-driven facilitation, while strengthening trade and commercial connections between the DRC and regional and international markets.": {
    en: "To enable businesses to establish, operate and grow in the DRC through structured, compliant and results-driven facilitation, while strengthening trade and commercial connections between the DRC and regional and international markets.",
    fr: missionFr,
    pt: missionPt,
    sw: missionSw,
    ln: missionLn,
    af: missionAf,
    zu: missionZu,
    xh: missionXh,
    zh: missionZh,
    ar: missionAr,
    es: missionEs,
    de: missionDe,
    hi: missionHi,
    ru: missionRu,
    ja: missionJa,
    ko: missionKo,
    it: missionIt,
    nl: missionNl,
  },

  // Mission variation (with Oxford comma)
  "To enable businesses to establish, operate, and grow in the DRC through structured, compliant, and results-driven facilitation, while strengthening trade and commercial connections between the DRC and regional and international markets.": {
    en: "To enable businesses to establish, operate, and grow in the DRC through structured, compliant, and results-driven facilitation, while strengthening trade and commercial connections between the DRC and regional and international markets.",
    fr: missionFr,
    pt: missionPt,
    sw: missionSw,
    ln: missionLn,
    af: missionAf,
    zu: visionZu ? missionZu : missionZu,
    xh: missionXh,
    zh: missionZh,
    ar: missionAr,
    es: missionEs,
    de: missionDe,
    hi: missionHi,
    ru: missionRu,
    ja: missionJa,
    ko: missionKo,
    it: missionIt,
    nl: missionNl,
  },
};

// Generate TypeScript object entries
let additions = "\n";
for (const [key, trans] of Object.entries(PHRASES_TO_ADD)) {
  additions += `  ${JSON.stringify(key)}: {\n`;
  for (const [lang, val] of Object.entries(trans)) {
    additions += `    ${JSON.stringify(lang)}: ${JSON.stringify(val)},\n`;
  }
  additions += `  },\n`;
}

// Insert before the closing `};`
const lastBraceIndex = fileContent.lastIndexOf("};");
if (lastBraceIndex === -1) {
  throw new Error("Could not find closing brace in universalPhrases.ts");
}

fileContent = fileContent.slice(0, lastBraceIndex) + additions + fileContent.slice(lastBraceIndex);
fs.writeFileSync(targetFile, fileContent, "utf8");
console.log("Successfully added new Vision and Mission phrases with 18-language translations.");
