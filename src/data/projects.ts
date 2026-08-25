export interface Project {
  id: string;
  slug: string;
  title: string;
  titleAr: string;
  industry: string;
  industryAr: string;
  application: string;
  applicationAr: string;
  location: string;
  locationAr: string;
  summary: string;
  summaryAr: string;
  challenge: string;
  challengeAr: string;
  existingSystem: string;
  existingSystemAr: string;
  cwaterApproach: string[];
  cwaterApproachAr: string[];
  technologiesUsed: string[];
  technologiesUsedAr: string[];
  results: { metric: string; metricAr: string; value: string; desc: string; descAr: string }[];
  relatedSolutionIds: string[];
  relatedProductIds: string[];
}

export const projectsData: Project[] = [
  {
    id: "industrial-cooling-tower-upgrade",
    slug: "industrial-cooling-tower-upgrade",
    title: "Heavy Industrial Plant Cooling Loop Modernization",
    titleAr: "تحديث وتطوير دوائر التبريد بمجمع صناعي كيميائي",
    industry: "Manufacturing & Chemicals",
    industryAr: "الصناعات الكيميائية والتحويلية",
    application: "Cooling Towers & Heat Exchangers",
    applicationAr: "أبراج التبريد والمبادلات الحرارية",
    location: "Suez Industrial Zone, Egypt",
    locationAr: "المنطقة الصناعية بالسويس، مصر",
    summary:
      "Modernization of a 4,500 m³/h open recirculating cooling tower experiencing severe scaling, high blowdown losses, and manual biocide dosing.",
    summaryAr:
      "تحديث منظومة أبراج تبريد مفتوحة بتدفق 4500 م³/ساعة كانت تعاني من تراكم الترسبات، هدر مياه التصريف، والحقن اليدوي العشوائي للكيماويات.",
    challenge:
      "The client experienced frequent heat exchanger tube pluggage every 4 months due to airborne sand ingestion and uncontrolled cycles of concentration. Make-up water consumption was surging, and biological slime was insulating condenser bundles.",
    challengeAr:
      "عانى العميل من انسداد متكرر لأنابيب المبادلات الحرارية كل 4 أشهر بسبب رمال الحوض الجوية وضعف التحكم في دورات التركيز، مع هدر ضخم في مياه التعويض وتراكم طبقات بكتيرية عازلة.",
    existingSystem:
      "Manual timer blowdown valve, erratic drum chemical pumping, no side-stream filtration, basin accumulated 15 cm of sand annually.",
    existingSystemAr:
      "صمام تصريف يعمل بمؤقت زمني يدوي، مضخات حقن غير متناسبة، غياب تام للترشيح الجانبي، وتراكم 15 سم من الرمال والطمي بحوض البرج سنوياً.",
    cwaterApproach: [
      "Engineered and installed a TIMEX SAF-3000 Automatic Self-Cleaning Screen Filter on a 15% side-stream loop.",
      "Deployed a Walchem W900 multi-parameter controller managing toroidal conductivity and biocide redox pacing.",
      "Replaced standard generic phosphate chemistry with Kurita eco-friendly polymeric scale inhibitors and biodispersants.",
      "Integrated continuous remote IoT telemetry for 24/7 engineering monitoring from C-Water Cairo HQ.",
    ],
    cwaterApproachAr: [
      "تصميم وتركيب فلتر شاشات ذاتي التنظيف TIMEX SAF-3000 على مسار ترشيح جانبي 15% من تدفق الحوض.",
      "تركيب وحدة تحكم متعددة القنوات Walchem W900 للتحكم في التوصيلية الحلقية وحقن المبيدات المبرمج.",
      "استبدال الكيماويات التقليدية ببوليمرات متطورة ومشتتات بكتيرية صديقة للبيئة من Kurita.",
      "ربط المنظومة ببوابة اتصال سحابي IoT للمتابعة الهندسية اللحظية من المقر الرئيسي لـ C-Water بالقاهرة.",
    ],
    technologiesUsed: [
      "Walchem W900 Multi-Parameter Controller",
      "TIMEX SAF-3000 Electric Suction Screen Filter",
      "Walchem E-Series Precision Metering Pumps",
      "Kurita Polymeric Scale & Corrosion Inhibitor Program",
    ],
    technologiesUsedAr: [
      "لوحة التحكم الذكية Walchem W900",
      "فلتر الشاشات ذاتي التنظيف TIMEX SAF-3000",
      "مضخات الحقن الإلكترونية Walchem E-Series",
      "برنامج بوليمرات كوريتـا لمنع الترسيب والتآكل",
    ],
    results: [
      {
        metric: "Cycles of Concentration",
        metricAr: "دورات التركيز",
        value: "From 2.8 to 5.4 Cycles",
        desc: "Virtually doubled water re-use efficiency within the cooling loop.",
        descAr: "مضاعفة كفاءة استغلال المياه وتدويرها داخل دائرة التبريد.",
      },
      {
        metric: "Make-up Water Savings",
        metricAr: "توفير مياه التعويض",
        value: "32,000 m³ / Year",
        desc: "Significant reduction in facility raw water acquisition and treatment bills.",
        descAr: "خفض مباشر وملموس في فواتير استهلاك ومعالجة المياه للمصنع.",
      },
      {
        metric: "Heat Exchanger Cleaning",
        metricAr: "فترات تنظيف المبادلات",
        value: "Extended from 4 to 24+ Months",
        desc: "Zero emergency plant downtime caused by condenser scaling.",
        descAr: "القضاء التام على التوقفات الطارئة لخطوط الإنتاج بسبب انسداد المكثفات.",
      },
    ],
    relatedSolutionIds: ["cooling-water", "industrial-water"],
    relatedProductIds: ["walchem-w900", "timex-saf", "walchem-e-series"],
  },
  {
    id: "food-beverage-ro-pretreatment",
    slug: "food-beverage-ro-pretreatment",
    title: "Beverage Bottling Facility RO Pretreatment & Membrane Protection",
    titleAr: "حماية ورفع كفاءة محطة التناضح العكسي بمصنع تعبئة مشروبات",
    industry: "Food & Beverage",
    industryAr: "الأغذية والمشروبات",
    application: "Reverse Osmosis & Pretreatment",
    applicationAr: "محطات التناضح العكسي والمعالجة الأولية",
    location: "6th of October City, Egypt",
    locationAr: "مدينة السادس من أكتوبر، مصر",
    summary:
      "Pretreatment overhaul for a 120 m³/h brackish well-water reverse osmosis plant experiencing rapid cartridge filter plugging and high differential pressure.",
    summaryAr:
      "تطوير منظومة المعالجة الأولية لمحطة تحلية مياه آبار 120 م³/ساعة كانت تعاني من انسداد سريع لفلاتر الخراطيش وارتفاع فرق ضغط الأغشية.",
    challenge:
      "Fine silt and high silica concentrations caused weekly disposable cartridge filter replacements and required intensive acid Clean-in-Place (CIP) every 6 weeks, damaging expensive RO elements.",
    challengeAr:
      "تسبب الطمي الدقيق وارتفاع نسبة السيليكا في استبدال خراطيش الفلاتر أسبوعياً وإجراء غسيل كيميائي CIP مجهد كل 6 أسابيع مما أدى لتدهور الأغشية.",
    existingSystem:
      "Conventional multimedia sand filter without coagulant, disposable 5-micron spun-bond cartridge housings, basic manual antiscalant feed.",
    existingSystemAr:
      "فلاتر رملية تقليدية دون حقن مروق، خراطيش ورقية مستهلكة باستمرار، وحقن يدوي بدائي لمضادات الترسيب.",
    cwaterApproach: [
      "Installed a TIMEX Automatic Disc Filtration Battery (50-micron) followed by precision fine screening.",
      "Implemented Kurita Kuriverter® specialized high-silica antiscalants and bio-dispersants.",
      "Integrated Walchem W600 dual-channel controller for proportional antiscalant and bisulfite injection.",
      "Instituted standardized normalized differential pressure tracking and preventative CIP protocols.",
    ],
    cwaterApproachAr: [
      "تركيب منظومة فلاتر أقراص أوتوماتيكية TIMEX (50 ميكرون) يعقبها ترشيح فائق دقيق.",
      "تطبيق مضادات ترسيب متخصصة لتركيزات السيليكا العالية Kuriverter® من Kurita.",
      "تركيب وحدة تحكم Walchem W600 للحقن المتناسب لمضاد الترسيب والميتابيسلفيت.",
      "تطبيق بروتوكول تتبع معيارية فرق الضغط وجدولة الغسيل الوقائي للأغشية.",
    ],
    technologiesUsed: [
      "TIMEX Automatic Disc Filtration Battery",
      "Kurita Kuriverter® Silica Scale Inhibitors",
      "Walchem W600 Dual Controller",
      "Walchem Precision Solenoid Metering Pumps",
    ],
    technologiesUsedAr: [
      "بطارية فلاتر أقراص أوتوماتيكية TIMEX",
      "مضاد ترسيب السيليكا المتطور Kuriverter®",
      "وحدة التحكم المزدوجة Walchem W600",
      "مضخات الحقن الإلكترونية Walchem",
    ],
    results: [
      {
        metric: "CIP Cleaning Frequency",
        metricAr: "تكرار الغسيل الكيميائي",
        value: "Reduced by 75%",
        desc: "CIP intervals extended from every 6 weeks to once every 6 months.",
        descAr: "مباعدة فترات الغسيل الكيميائي من 6 أسابيع إلى مرة واحدة كل 6 أشهر.",
      },
      {
        metric: "Disposable Filter Waste",
        metricAr: "فواقد خراطيش الفلاتر",
        value: "$18,000 / Year Saved",
        desc: "Eliminated continuous purchases of disposable cartridge filters.",
        descAr: "الاستغناء الكامل عن شراء مئات الخراطيش المستهلكة دورياً.",
      },
      {
        metric: "Membrane Recovery",
        metricAr: "معدل استخلاص الأغشية",
        value: "Maintained at 78%",
        desc: "Consistent permeate quality meeting beverage strict conductivity specs.",
        descAr: "ثبات جودة ونقاء المياه المنتجة ومطابقتها لمعايير الجودة العالمية للمشروبات.",
      },
    ],
    relatedSolutionIds: ["ro-membrane", "process-water"],
    relatedProductIds: ["timex-disc", "kurita-kuriverter", "walchem-w600"],
  },
  {
    id: "power-utility-boiler-feedwater",
    slug: "power-utility-boiler-feedwater",
    title: "High-Pressure Industrial Boiler Cetamine® Transformation",
    titleAr: "تطبيق تكنولوجيا Cetamine® بغلايات البخار بمجمع توليد طاقة صناعي",
    industry: "Power & Utilities",
    industryAr: "محطات الطاقة والمرافق الصناعية",
    application: "High-Pressure Steam Boilers",
    applicationAr: "غلايات البخار والضغط العالي",
    location: "Alexandria Industrial Hub, Egypt",
    locationAr: "المنطقة الصناعية بالإسكندرية، مصر",
    summary:
      "Conversion of three 40-bar package steam boilers from conventional solid phosphate/sulphite chemistry to Kurita Cetamine® film-forming amines.",
    summaryAr:
      "تحويل 3 غلايات بخار بقدرة 40 بار من المعالجة التقليدية بالفوسفات والكبريتات إلى تكنولوجيا الأمينات الغشائية Kurita Cetamine®.",
    challenge:
      "Heavy boiler blowdown requirements (8% of feedwater) caused massive fuel consumption and thermal losses. Condensate return piping suffered frequent corrosion leaks from carbonic acid attack.",
    challengeAr:
      "تطلب برنامج المعالجة القديم تصريفاً سطحياً مرتفعاً (8% من مياه التغذية) مما سبب هدراً كبيراً في الوقود، مع تآكل متكرر وثقوب في خطوط المتكاثف.",
    existingSystem:
      "Trisodium phosphate and sodium sulphite dosing with manual intermittent bottom blowdown.",
    existingSystemAr:
      "حقن فوسفات ثلاثي الصوديوم وسلفيت الصوديوم مع تصريف قاعي وسطحي يدوي غير منضبط.",
    cwaterApproach: [
      "Implemented Kurita Cetamine® all-volatile film-forming polyamine technology.",
      "Installed Walchem W900 boiler controllers with high-pressure continuous conductivity blowdown manifolds.",
      "Achieved complete passivation of steam drums, superheater tubes, and condensate return lines.",
      "Automated proportional chemical pacing based on make-up flow and condensate return rates.",
    ],
    cwaterApproachAr: [
      "تطبيق تكنولوجيا الأمينات الغشائية المتطايرة Kurita Cetamine®.",
      "تركيب وحدات تحكم Walchem W900 مع مجمعات تصريف آلي مستمر تحت الضغط العالي.",
      "تكوين غشاء واقٍ عازل لكافة أجزاء الغلايات وأنابيب البخار وشبكات المتكاثف.",
      "أتمتة الحقن الكيميائي المتناسب مع معدل تدفق مياه التغذية والمتكاثف الراجع.",
    ],
    technologiesUsed: [
      "Kurita Cetamine® Boiler Chemistry",
      "Walchem W900 Boiler Blowdown Controllers",
      "Walchem High-Temperature Toroidal Conductivity Probes",
      "Walchem Precision Chemical Dosing Pumps",
    ],
    technologiesUsedAr: [
      "كيمياء الأمينات الغشائية Kurita Cetamine®",
      "لوحات تحكم تصريف الغلايات Walchem W900",
      "حساسات توصيلية حرارية للضغط العالي من Walchem",
      "مضخات الحقن الرقمية فائقة الدقة من Walchem",
    ],
    results: [
      {
        metric: "Boiler Blowdown Reduction",
        metricAr: "خفض معدل التصريف السطحي",
        value: "45% Blowdown Reduction",
        desc: "Blowdown reduced from 8.2% to 4.5% of total feedwater flow.",
        descAr: "انخفاض معدل تصريف المياه الساخنة من 8.2% إلى 4.5% فقط.",
      },
      {
        metric: "Fuel & Thermal Energy Saved",
        metricAr: "توفير الوقود والطاقة الحرارية",
        value: "3.8% Overall Fuel Savings",
        desc: "Significant natural gas bill reduction across three continuous boilers.",
        descAr: "توفير مالي مباشر في فاتورة استهلاك الغاز الطبيعي للمصنع.",
      },
      {
        metric: "Condensate Iron Content",
        metricAr: "نسبة الحديد في المتكاثف",
        value: "Reduced from 420 ppb to <15 ppb",
        desc: "Eliminated condensate line corrosion and protects feedwater deaerator.",
        descAr: "حماية خطوط المتكاثف من الصدأ والتآكل وإعادة تدوير مياه نقية خالية من المعادن.",
      },
    ],
    relatedSolutionIds: ["boiler-steam", "industrial-water"],
    relatedProductIds: ["kurita-cetamine", "walchem-w900", "walchem-e-series"],
  },
];
