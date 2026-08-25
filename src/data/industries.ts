export interface Industry {
  id: string;
  slug: string;
  name: string;
  nameAr: string;
  headline: string;
  headlineAr: string;
  description: string;
  descriptionAr: string;
  icon: string;
  typicalSystems: string[];
  typicalSystemsAr: string[];
  waterChallenges: string[];
  waterChallengesAr: string[];
  cwaterSolutions: string[];
  cwaterSolutionsAr: string[];
  relevantSolutionIds: string[];
}

export const industriesData: Industry[] = [
  {
    id: "manufacturing",
    slug: "manufacturing",
    name: "Manufacturing & Industrial",
    nameAr: "الصناعات التحويلية والثقيلة",
    headline: "Water Treatment That Supports Production.",
    headlineAr: "معالجة مياه تدعم استمرارية الإنتاج وترفع كفاءة التشغيل.",
    description:
      "Heavy industrial plants rely on continuous cooling loops, process heating, and raw water conditioning. C-Water delivers robust engineering programs that eliminate unscheduled shutdowns.",
    descriptionAr:
      "تعتمد المصانع والمنشآت الثقيلة على دوائر التبريد المستمر، التدفئة الصناعية، ومعالجة المياه الخام. تقدم C-Water برامج هندسية متينة تمنع التوقفات المفاجئة للإنتاج.",
    icon: "Factory",
    typicalSystems: ["Cooling Towers & Heat Exchangers", "Process Boilers", "Side-stream Sand/Screen Filters", "Effluent Neutralization"],
    typicalSystemsAr: ["أبراج التبريد والمبادلات الحرارية", "غلايات البخار للعمليات", "فلاتر جانبية ذاتية التنظيف", "محطات معادلة الصرف الصناعي"],
    waterChallenges: ["Heat exchanger fouling", "Corrosion under deposit", "High water intake costs", "Inconsistent effluent discharge"],
    waterChallengesAr: ["انسداد المبادلات الحرارية بالرواسب", "التآكل تحت الترسبات", "ارتفاع تكاليف مياه التغذية", "تذبذب مطابقة مياه الصرف"],
    cwaterSolutions: ["Automatic blowdown & chemical dosing", "Basin self-cleaning screen filtration", "Non-heavy-metal corrosion inhibitors", "Closed-loop effluent recycling"],
    cwaterSolutionsAr: ["أتمتة التصريف والحقن الكيميائي", "ترشيح ذاتي التنظيف لأحواض الأبراج", "مثبطات تآكل بيئية خالية من المعادن الثقيلة", "إعادة تدوير مياه الصرف المعالجة"],
    relevantSolutionIds: ["cooling-water", "boiler-steam", "industrial-water", "wastewater"],
  },
  {
    id: "food-beverage",
    slug: "food-beverage",
    name: "Food & Beverage",
    nameAr: "الأغذية والمشروبات",
    headline: "Water Quality Behind Every Process.",
    headlineAr: "أعلى معايير النقاء وسلامة الغذاء في كل قطرة ماء.",
    description:
      "Hygiene, ingredient water purity, and thermal utility reliability are non-negotiable in F&B. We design multi-stage RO, food-grade boiler chemistry, and sanitary CIP monitoring.",
    descriptionAr:
      "النقاء الصحي الفائق، جودة مياه التصنيع، وموثوقية مرافق البخار والتبريد ركائز لا تقبل المساومة. نصمم منظومات RO متطورة، كيمياء غلايات صالحة لملامسة الأغذية، ومراقبة دقيقة لمحطات الغسيل CIP.",
    icon: "Utensils",
    typicalSystems: ["Ingredient RO Systems", "Steam for Sterilization & Pasteurization", "Pasteurizer Cooling Loops", "CIP Chemical Dosing"],
    typicalSystemsAr: ["محطات التناضح العكسي لمياه المنتج", "بخار التعقيم والبسترة", "دوائر تبريد المبردات والمبسترات", "أنظمة حقن وتطهير الـ CIP"],
    waterChallenges: ["Microbial contamination risks", "Membrane biofouling from organics", "Steam purity regulations", "High wastewater BOD/COD from washing"],
    waterChallengesAr: ["مخاطر التلوث الميكروبي", "انسداد الأغشية بالمواد العضوية", "معايير نقاء البخار الغذائي", "ارتفاع الحمل العضوي في مياه الغسيل"],
    cwaterSolutions: ["Sanitary membrane antiscalants & biocides", "FDA-compliant boiler treatment amines", "Walchem precision conductivity CIP controllers", "TIMEX DAF flotation for grease and organic removal"],
    cwaterSolutionsAr: ["مضادات ترسيب ومطهرات أغشية معتمدة صحياً", "معالجة غلايات متوافقة مع متطلبات الغذاء والدواء", "وحدات تحكم Walchem لتركيز وسوائل الـ CIP", "فواصل DAF من TIMEX لإزالة الدهون والزيوت"],
    relevantSolutionIds: ["ro-membrane", "boiler-steam", "cooling-water", "wastewater"],
  },
  {
    id: "hospitality",
    slug: "hospitality",
    name: "Hospitality & Resorts",
    nameAr: "الفنادق والمنتجعات السياحية",
    headline: "Reliable Water. Seamless Guest Experience.",
    headlineAr: "مياه نقية وموثوقة لضمان تجربة فندقية راقية وخالية من الأعطال.",
    description:
      "Major resorts across the Red Sea, Mediterranean, and Cairo demand 24/7 cooling tower comfort, safe domestic water, crystal-clear swimming pools, and quiet, reliable RO desalination.",
    descriptionAr:
      "تتطلب المنتجعات الكبرى في البحر الأحمر والساحل الشمالي والقاهرة تبريداً مستمراً للتكييف المركزي، مياه شرب واستخدام آمنة، وتحلية مياه بحر موثوقة وهادئة.",
    icon: "Hotel",
    typicalSystems: ["HVAC Central Chiller Cooling Towers", "Seawater & Brackish RO Plants", "Domestic Hot & Cold Water Networks", "Swimming Pools & Water Features"],
    typicalSystemsAr: ["أبراج تبريد أنظمة التكييف المركزي HVAC", "محطات تحلية مياه الآبار والبحر RO", "شبكات المياه الساخنة والباردة", "حمامات السباحة والبحيرات"],
    waterChallenges: ["Legionella bacteria in cooling towers & showers", "High salinity well water fouling ROs", "Scale buildup in boilers and calorifiers", "High water consumption rates per guest room"],
    waterChallengesAr: ["بكتيريا الليجيونيلا في الأبراج وشبكات الدش", "ارتفاع ملوحة الآبار وتدهور الأغشية", "ترسبات السخانات المركزية والغلايات", "ارتفاع معدلات استهلاك المياه للغرفة"],
    cwaterSolutions: ["Automated biocide & Legionella risk management", "High-recovery RO pretreatment & antiscalants", "Comprehensive potable water chlorination monitoring", "Cooling tower cycle optimization to save make-up water"],
    cwaterSolutionsAr: ["إدارة ذكية لمبيدات البكتيريا ومكافحة الليجيونيلا", "معالجة أولية ومضادات ترسيب لرفع استخلاص الـ RO", "مراقبة آلية للكلور المتبقي في مياه الاستخدام", "رفع دورات تركيز التبريد لتوفير مياه التعويض"],
    relevantSolutionIds: ["cooling-water", "ro-membrane", "potable-drinking", "boiler-steam"],
  },
  {
    id: "healthcare",
    slug: "healthcare",
    name: "Healthcare & Pharmaceuticals",
    nameAr: "الرعاية الصحية والمستشفيات والأدوية",
    headline: "Water Systems Where Reliability and Purity Save Lives.",
    headlineAr: "أنظمة مياه فائقة النقاء حيث ترتبط الموثوقية بسلامة المرضى.",
    description:
      "Hospitals and pharma production require zero-fail hemodialysis water, sterile steam, and critical infection-control disinfection with complete audit-ready monitoring.",
    descriptionAr:
      "تتطلب المستشفيات ومصانع الأدوية مياه غسيل كلوي بدون أي هامش للخطأ، بخاراً نقياً للتعقيم، وتحكماً صارماً في مكافحة العدوى وتوثيقاً قابلاً للتدقيق.",
    icon: "HeartPulse",
    typicalSystems: ["Hemodialysis Double-Pass RO Systems", "Sterilizer Pure Steam Generators", "Central Chilled Water Plant", "Domestic Disinfection Stations"],
    typicalSystemsAr: ["محطات RO مزدوجة لمراكز الغسيل الكلوي", "مولدات البخار النقي للتعقيم المركزي", "محطات التبريد المركزي للمباني", "محطات التطهير والكلورة لشبكات المبنى"],
    waterChallenges: ["Endotoxin & bacterial slip", "Biofilm formation in distribution loops", "Strict pharmacopeia water quality limits", "Critical reliance on uninterrupted steam"],
    waterChallengesAr: ["تسرب الإندوتوكسين والبكتيريا الدقيقة", "تكون الأغشية الحيوية في شبكات التوزيع", "معايير دساتير الأدوية الصارمة للمياه النقية", "الاعتماد الحيوي على استمرار البخار المعقم"],
    cwaterSolutions: ["Validated pharmaceutical RO/EDI pre-filtration", "Online TOC, conductivity and temperature telemetry", "Non-chemical UV and secondary barrier protection", "24/7 priority engineering support and emergency response"],
    cwaterSolutionsAr: ["ترشيح أولي معتمد لأنظمة RO/EDI الدوائية", "أجهزة قياس وتتبع لحظية للـ TOC والتوصيلية", "حواجز تطهير بالأشعة فوق البنفسجية والترشيح الدقيق", "دعم هندسي ميداني طارئ على مدار الساعة"],
    relevantSolutionIds: ["process-water", "ro-membrane", "boiler-steam", "potable-drinking"],
  },
  {
    id: "oil-gas",
    slug: "oil-gas",
    name: "Oil, Gas & Petrochemical",
    nameAr: "البترول والغاز والبتروكيماويات",
    headline: "Engineered for Extreme Industrial Environments.",
    headlineAr: "حلول هندسية مصممة للبيئات البترولية والصناعية الأشد قسوة.",
    description:
      "Refineries and petrochemical complexes face severe hydrocarbon contamination, high heat flux cooling, and produced water challenges. We provide industrial-grade filtration and chemistry.",
    descriptionAr:
      "تواجه مصافي البترول والمجمعات البتروكيماوية تحديات تلوث الهيدروكربونات، أحمال التبريد الحرارية الهائلة، ومياه الإنتاج المصاحبة. نقدم ترشيحاً وكيمياء بمعايير صناعية قاسية.",
    icon: "Flame",
    typicalSystems: ["Open Recirculating Refinery Cooling Towers", "High-Pressure Utility Boilers", "Produced Water Treatment", "Oily Effluent DAF & Screen Separation"],
    typicalSystemsAr: ["أبراج تبريد المصافي المفتوحة العملاقة", "غلايات المرافق ذات الضغط العالي", "معالجة مياه الإنتاج المصاحبة للبترول", "فواصل DAF وترشيح مياه الصرف الزيتي"],
    waterChallenges: ["Oil ingress fouling heat exchangers", "Severe H2S and CO2 corrosion", "Heavy solids loading in raw intake", "Strict zero-discharge discharge criteria"],
    waterChallengesAr: ["تسرب الزيوت والشوائب لدوائر التبريد", "تآكل حاد ناتج عن غازات H2S و CO2", "أحمال عوالق وطمي هائلة في مآخذ المياه", "معايير بيئية صارمة للصرف وإعادة التدوير"],
    cwaterSolutions: ["Heavy-duty automatic screen filters (TIMEX SAF/EBS)", "Hydrocarbon-resistant dispersants and bio-dispersants", "Walchem robust titanium & toroidal conductivity sensors", "DAF primary separation units for free/emulsified oil"],
    cwaterSolutionsAr: ["فلاتر شاشات ذاتية التنظيف للخدمة الشاقة (TIMEX)", "مشتتات بوليمرية مقاومة لتلوث الزيوت والهيدروكربونات", "حساسات Walchem الحلقية المقاومة للتآكل والترسب", "وحدات تعويم DAF لفصل الزيوت الحرة والمستحلبة"],
    relevantSolutionIds: ["industrial-water", "cooling-water", "wastewater", "boiler-steam"],
  },
  {
    id: "power-utilities",
    slug: "power-utilities",
    name: "Power Generation & Utilities",
    nameAr: "محطات توليد الكهرباء والمرافق",
    headline: "Protecting the Water Infrastructure Behind the Grid.",
    headlineAr: "حماية البنية التحتية المائية لمحطات توليد الطاقة والمرافق.",
    description:
      "Turbine steam purity, superheater protection, and condenser vacuum preservation are essential for utility heat rates and multi-megawatt generation reliability.",
    descriptionAr:
      "نقاء البخار المغذي للتوربينات، حماية أجهزة التحميص الفائق، والحفاظ على كفاءة تفريغ المكثفات عوامل حاسمة لضمان استقرار توليد الكهرباء على الشبكة القومية.",
    icon: "Zap",
    typicalSystems: ["Supercritical / High-Pressure Boilers", "Surface Condensers & Cooling Loops", "Demineralization Demin / RO Trains", "Raw River Water Intake Filtration"],
    typicalSystemsAr: ["غلايات الضغط العالي وفوق الحرج", "المكثفات السطحية ودوائر التبريد الضخمة", "محطات نزع الأملاح والتبادل الأيوني", "مآخذ مياه النيل والترشيح الأولي"],
    waterChallenges: ["Silica carryover damaging turbine blades", "Condenser tube micro-fouling reducing vacuum", "Intake water biofouling (mussels/algae)", "High chemical consumption in demin plants"],
    waterChallengesAr: ["تسرب السيليكا مع البخار وتلف ريش التوربينات", "تراكم الشوائب الدقيقة في المكثفات وانخفاض التفريغ", "النمو البيولوجي والطحالب في مآخذ المياه الخام", "استهلاك كيميائي ضخم في محطات نزع الأملاح"],
    cwaterSolutions: ["Cetamine® all-volatile steam-water treatment", "Large-scale TIMEX automatic intake strainers", "Walchem high-purity cation/specific conductivity analyzers", "Turbine condenser continuous cleanliness monitoring"],
    cwaterSolutionsAr: ["تكنولوجيا Cetamine® المتطايرة لحماية التوربين والغلاية", "مصافي ومصائد شوائب ضخمة ذاتية التنظيف من TIMEX", "أجهزة Walchem فائقة الدقة لقياس التوصيلية الموجبة", "مراقبة مستمرة لنظافة وكفاءة مكثفات البخار"],
    relevantSolutionIds: ["boiler-steam", "cooling-water", "industrial-water", "ro-membrane"],
  },
];
