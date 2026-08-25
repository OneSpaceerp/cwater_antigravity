export interface Partner {
  id: string;
  slug: string;
  name: string;
  nameAr: string;
  tagline: string;
  taglineAr: string;
  origin: string;
  originAr: string;
  specialization: string;
  specializationAr: string;
  description: string;
  descriptionAr: string;
  cwaterRole: string;
  cwaterRoleAr: string;
  corePillars: string[];
  corePillarsAr: string[];
  verifiedCategories: string[];
  verifiedCategoriesAr: string[];
  featuredProductIds: string[];
}

export const partnersData: Partner[] = [
  {
    id: "walchem",
    slug: "walchem",
    name: "Walchem",
    nameAr: "والكـيم (Walchem)",
    tagline: "Sense. Dose. Control. Connect.",
    taglineAr: "استشعار · حقن · تحكم آلي · اتصال سحابي مباشر",
    origin: "USA (Iwaki America)",
    originAr: "الولايات المتحدة الأمريكية (Iwaki America)",
    specialization: "Advanced Water Treatment Controllers, Precision Dosing Pumps & Analytical Sensors",
    specializationAr: "وحدات التحكم المتقدمة، مضخات الحقن الإلكترونية فائقة الدقة، والحساسات التحليلية",
    description:
      "Walchem is a world-leading manufacturer of online water-treatment instrumentation, multi-parameter controllers, electronic solenoid metering pumps, and cloud telemetry gateways. As an authorized engineering partner in Egypt, C-Water engineers, integrates, programs, commissions, and supports Walchem systems.",
    descriptionAr:
      "تعد شركة Walchem من أبرز الشركات العالمية في تصنيع أجهزة قياس وتحكم معالجة المياه، وحدات التحكم متعددة القنوات، مضخات الحقن الإلكترونية الذكية، ومنصات الربط السحابي. وبصفتها شريكاً هندسياً معتمداً في مصر، تتولى C-Water تصميم وبرمجة وتركيب وصيانة منظومات Walchem بالكامل.",
    cwaterRole:
      "C-Water integrates Walchem hardware with customized control algorithms, panel fabrication, field wiring, calibration, remote SCADA dashboards, and 24/7 technical field support across Egypt.",
    cwaterRoleAr:
      "تقوم C-Water بدمج أجهزة Walchem وتصميم لوحات التحكم وتمديد الدوائر الكهربائية، وبرمجة الخوارزميات، والمعايرة الميدانية، والربط السحابي، مع توفير الدعم الفني وقطع الغيار المعتمدة.",
    corePillars: ["Multi-Parameter Process Controllers (W900 / W600 / Intuition)", "High-Precision Solenoid Metering Pumps (E-Series)", "Industrial Differential pH/ORP & Toroidal Conductivity Sensors", "Fluorescence, Free Chlorine, & Corrosion Rate Telemetry"],
    corePillarsAr: ["لوحات التحكم متعددة القنوات (W900 / W600 / Intuition)", "مضخات الحقن الإلكترونية الرقمية (E-Series)", "حساسات الـ pH/ORP التفاضلية والتوصيلية الحلقية", "حساسات الفلورسنت، الكلور الحر، ومعدلات التآكل اللحظية"],
    verifiedCategories: ["Controllers", "Metering Pumps", "Sensors & Probes", "Accessories & Manifolds", "Cloud Telemetry"],
    verifiedCategoriesAr: ["وحدات التحكم", "مضخات الحقن", "الحساسات والمجسات", "المجمعات والملحقات", "الاتصال السحابي"],
    featuredProductIds: ["walchem-w900", "walchem-w600", "walchem-e-series"],
  },
  {
    id: "timex",
    slug: "timex",
    name: "TIMEX",
    nameAr: "تايمكـس (TIMEX Filtration)",
    tagline: "Filter. Protect. Perform.",
    taglineAr: "ترشيح فائق · حماية للأصول · استقرار للأداء التشغيلي",
    origin: "Turkey / Global",
    originAr: "تركيا / حضور عالمي في أكثر من 60 دولة",
    specialization: "Automatic Self-Cleaning Screen Filters, Disc Filters, DAF & Industrial Separation Systems",
    specializationAr: "فلاتر الشاشات ذاتية التنظيف، فلاتر الأقراص، أنظمة تعويم DAF وفواصل الشوائب الصناعية",
    description:
      "TIMEX is a recognized global engineering power in water and wastewater filtration, manufacturing automatic self-cleaning screen filters, disc filters, drum filters, and dissolved air flotation (DAF) systems. C-Water brings TIMEX filtration into Egyptian industrial, utility, and municipal projects.",
    descriptionAr:
      "تعتبر شركة TIMEX اسماً عالمياً بارزاً في هندسة ترشيح المياه والصرف الصناعي، حيث تصنع فلاتر الشاشات ذاتية التنظيف، فلاتر الأقراص، فلاتر الطبول، ووحدات التعويم بالهواء المذاب DAF. تقدم C-Water حلول ترشيح TIMEX لكبرى المشروعات الصناعية ومحطات المياه في مصر.",
    cwaterRole:
      "C-Water conducts hydraulic analysis, solids characterization, micron-rating selection, turnkey skid design, pipeline integration, automated PLC valve commissioning, and ongoing preventive maintenance.",
    cwaterRoleAr:
      "تقوم C-Water بالتحليل الهيدروليكي وتحديد أحمال العوالق، واختيار قياس الميكرون المناسب، وتصميم وبناء محطات الترشيح المتكاملة (Skids)، وربطها بالشبكة وتشغيل صمامات التحكم والغسيل التلقائي.",
    corePillars: ["Automatic Hydraulic & Electric Screen Filters (SAF, EBS, TSF)", "Automatic High-Flow Disc Filtration Systems", "Dissolved Air Flotation (DAF) Clarifiers", "Heavy-Duty Intake Strainers & Hydrocyclone Separators"],
    corePillarsAr: ["فلاتر الشاشات الكهربية والهيدروليكية ذاتية التنظيف (SAF, EBS)", "فلاتر الأقراص الدقيقة للتدفقات العالية", "وحدات التعويم بالهواء المذاب DAF لفصل الزيوت والعوالق", "مصافي المآخذ للخدمة الشاقة وفواصل الرمل الهيدروسيكلونية"],
    verifiedCategories: ["Self-Cleaning Screen Filters", "Disc Filters", "Drum Filters", "DAF Systems", "Hydrocyclone Separators"],
    verifiedCategoriesAr: ["فلاتر شاشات ذاتية التنظيف", "فلاتر أقراص", "فلاتر طبول", "أنظمة DAF", "فواصل هيدروسيكلون"],
    featuredProductIds: ["timex-saf", "timex-disc", "timex-daf"],
  },
  {
    id: "kurita",
    slug: "kurita",
    name: "Kurita Europe",
    nameAr: "كوريتـا (Kurita Europe)",
    tagline: "Treat. Protect. Optimize.",
    taglineAr: "معالجة متقدمة · حماية شاملة · تحسين مستمر للأداء",
    origin: "Japan / Germany (Kurita Europe GmbH)",
    originAr: "اليابان / ألمانيا (Kurita Europe GmbH)",
    specialization: "Advanced Water Treatment Chemistry, Film-Forming Amines & Membrane Technologies",
    specializationAr: "الكيماويات المتخصصة، تكنولوجيا الأمينات الغشائية، وكيماويات حماية أغشية التناضح العكسي",
    description:
      "Kurita is one of the world's largest water-treatment technology corporations, renowned for groundbreaking research in non-heavy-metal chemistry, all-volatile amine programs (Cetamine®), and specialized membrane antiscalants (Kuriverter®). C-Water applies Kurita chemistry to solve Egypt's toughest water challenges.",
    descriptionAr:
      "تعد شركة كوريتـا (Kurita) من كبرى المؤسسات العالمية في أبحاث وتطوير كيمياء معالجة المياه، وتشتهر بابتكاراتها في تكنولوجيا الأمينات الغشائية المتطايرة (Cetamine®)، ومضادات الترسيب المتقدمة لأغشية التناضح العكسي (Kuriverter®). تطبق C-Water كيمياء كوريتـا لتجاوز أصعب تحديات المياه في مصر.",
    cwaterRole:
      "C-Water conducts on-site water testing, ion modeling, chemical program formulation, dosing optimization, corrosion rate auditing, and periodic KPI reporting to maximize client ROI.",
    cwaterRoleAr:
      "تتولى C-Water الفحص المخبري، ونمذجة التشبع الأيوني، وتحديد نسب التركيز وحقن الجرعات، وتدقيق معدلات التآكل الدورية، وتقديم تقارير هندسية متكاملة تضمن أعلى عائد استثماري للعميل.",
    corePillars: ["Cetamine® Film-Forming Amine Technology for Steam & Boilers", "Kuriverter® High-Recovery RO Antiscalants & Membrane Preservers", "Ferrocid® Targeted Biodispersants & Non-Oxidizing Biocides", "Eco-Friendly Polymeric Scale & Corrosion Inhibitors for Cooling Towers"],
    corePillarsAr: ["تكنولوجيا الأمينات الغشائية Cetamine® لحماية الغلايات والبخار", "مضادات الترسيب ومنظفات الأغشية المتطورة Kuriverter®", "مبيدات ومشتتات الأغشية الحيوية المتخصصة Ferrocid®", "بوليمرات صديقة للبيئة لمنع الترسيب والتآكل في أبراج التبريد"],
    verifiedCategories: ["Boiler Water Chemicals", "Cooling Water Chemicals", "RO Membrane Chemicals", "Wastewater Coagulants & Flocculants", "Biocides & Disinfectants"],
    verifiedCategoriesAr: ["كيماويات الغلايات والبخار", "كيماويات أبراج التبريد", "كيماويات محطات التناضح العكسي RO", "مخثرات ومروقات الصرف الصناعي", "المطهرات والمبيدات البيولوجية"],
    featuredProductIds: ["kurita-cetamine", "kurita-kuriverter"],
  },
];
