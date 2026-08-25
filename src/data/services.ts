export interface Service {
  id: string;
  slug: string;
  title: string;
  titleAr: string;
  headline: string;
  headlineAr: string;
  description: string;
  descriptionAr: string;
  icon: string;
  whyItMatters: string;
  whyItMattersAr: string;
  whenYouNeedIt: string[];
  whenYouNeedItAr: string[];
  cwaterApproach: string[];
  cwaterApproachAr: string[];
  whatYouReceive: string[];
  whatYouReceiveAr: string[];
}

export const servicesData: Service[] = [
  {
    id: "water-analysis",
    slug: "water-analysis",
    title: "Comprehensive Water Analysis & Forensics",
    titleAr: "التحاليل المائية وتشريح الرواسب",
    headline: "Accurate Lab Data Preceding Every Chemical Application.",
    headlineAr: "بيانات مخبرية دقيقة تسبق أي تطبيق كيميائي أو هندسي.",
    description:
      "Water chemistry changes seasonally and across operational cycles. C-Water provides complete analytical testing including ion balancing, deposit forensics, and biological counts.",
    descriptionAr:
      "تتغير كيمياء المياه موسمياً ومع تغير أحمال التشغيل. تقدم C-Water فحوصات مخبرية شاملة تشمل التوازن الأيوني، تشريح قشور الرواسب، وفحوصات التعداد البكتيري.",
    icon: "FlaskConical",
    whyItMatters: "Treating water without lab analysis leads to misapplied chemistry, wasted budget, and unprevented equipment corrosion.",
    whyItMattersAr: "معالجة المياه دون تحاليل معملية تؤدي لاختيار كيماويات خاطئة وهدر الميزانيات واستمرار تآكل الأصول.",
    whenYouNeedIt: ["Commissioning a new water source or well", "Experiencing unexpected scaling or corrosion failures", "Conducting routine monthly compliance verification", "Planning an RO recovery or cooling concentration increase"],
    whenYouNeedItAr: ["تشغيل مصدر مياه أو بئر جديدة", "ظهور ترسبات أو أعطال تآكل غير مفسرة", "التدقيق الشهري الدوري والتحقق من الامتثال", "التخطيط لرفع كفاءة محطة RO أو دورات أبراج التبريد"],
    cwaterApproach: ["Full ionic cation/anion panel testing", "XRD and XRF scale deposit mineral analysis", "Legionella PCR screening & microbiological cultures", "Langelier, Ryznar & Puckorius index calculations"],
    cwaterApproachAr: ["فحص أيوني شامل للموجبات والسوالب بدقة عالية", "تحليل الأشعة السينية XRD و XRF لعينات الرواسب والتآكل", "فحص بكتيريا الليجيونيلا بتقنية PCR والمزارع البكتيرية", "حساب مؤشرات التشبع والتوازن Langelier و Ryznar"],
    whatYouReceive: ["Certified Laboratory Analysis Certificate", "Detailed Engineering Interpretation Report", "Customized Chemical Dosage Recommendations", "Operational Risk Assessment"],
    whatYouReceiveAr: ["شهادة تحليل مخبري معتمدة ومفصلة", "تقرير تفسيري وتوصيات هندسية قابلة للتنفيذ", "جدول معايرة وحقن دقيق للمركبات", "تقييم شامل للمخاطر التشغيلية للمنظومة"],
  },
  {
    id: "system-assessment",
    slug: "system-assessment",
    title: "Plant Water System Assessment & Audits",
    titleAr: "تقييم وتدقيق منظومات المياه الصناعية",
    headline: "Uncovering Hidden Inefficiencies, Scale Risks, and Water Losses.",
    headlineAr: "كشف الفواقد الخفية ومخاطر الترسبات وفرص ترشيد الاستهلاك.",
    description:
      "A comprehensive on-site engineering audit of your complete water loop: heat exchangers, cooling towers, boilers, pretreatment, and piping to benchmark performance against international standards.",
    descriptionAr:
      "تدقيق هندسي ميداني شامل لكافة دوائر المياه بالمصنع: المبادلات الحرارية، أبراج التبريد، الغلايات، والشبكات لمقارنة الأداء بالمعايير الهندسية العالمية.",
    icon: "ClipboardCheck",
    whyItMatters: "Most industrial facilities waste 15% to 30% of their water and energy due to undetected sub-optimal cycles of concentration and unmonitored blowdown.",
    whyItMattersAr: "تهدر معظم المنشآت الصناعية ما بين 15% إلى 30% من المياه والطاقة بسبب انخفاض دورات التركيز والتصريف غير المنضبط.",
    whenYouNeedIt: ["High utility water or energy bills", "Persistent maintenance bottlenecks in cooling or boiler loops", "Preparation for ISO 14001 or sustainability audits", "Facility expansion planning"],
    whenYouNeedItAr: ["ارتفاع فواتير المياه والوقود والكهرباء", "تكرار أعمال الصيانة للمبادلات والغلايات", "الاستعداد لتدقيق شهادات الآيزو 14001 والاستدامة", "التخطيط لتوسعات جديدة في خطوط الإنتاج"],
    cwaterApproach: ["On-site inspection of heat transfer surfaces and metallurgy", "Hydraulic mass-balance and blowdown rate calculations", "Sensor calibration and controller logic auditing", "Chemical mass-feed verification"],
    cwaterApproachAr: ["معاينة وفحص أسطح التبادل الحراري والمواسير", "حساب الموازنة المائية ومعدلات التصريف الحقيقية", "معايرة الحساسات ومراجعة خوارزميات لوحات التحكم", "تدقيق معدلات استهلاك وتوزيع الكيماويات"],
    whatYouReceive: ["Executive Water & Energy Savings Roadmap", "Equipment Health Matrix", "Priority Corrective Action Plan", "ROI & Payback Calculation on Upgrades"],
    whatYouReceiveAr: ["خارطة طريق تنفيذية لترشيد المياه والطاقة", "مصفوفة الحالة الفنية لكافة المعدات", "خطة إجراءات تصحيحية محددة الأولويات", "حساب العائد الاستثماري وفترة الاسترداد للتحسينات"],
  },
  {
    id: "engineering-design",
    slug: "engineering-design",
    title: "Engineering & System Integration",
    titleAr: "التصميم الهندسي وبناء المنظومات المتكاملة",
    headline: "Custom Turnkey Skids, Dosing Panels, and SCADA Architectures.",
    headlineAr: "تصميم وتجميع المحطات المدمجة (Skids) ولوحات التحكم و SCADA.",
    description:
      "C-Water designs and builds customized water treatment skids, automated dosing systems, side-stream filtration batteries, and multi-parameter monitoring stations engineered for your plant.",
    descriptionAr:
      "تصمم C-Water وتبني محطات معالجة مدمجة، لوحات حقن آلية، بطاريات ترشيح جانبي، ومحطات مراقبة متعددة القياسات مهندسة خصيصاً لمصنعك.",
    icon: "Wrench",
    whyItMatters: "Off-the-shelf equipment rarely matches specific plant hydraulics, chemical characteristics, and ambient Egyptian operating conditions.",
    whyItMattersAr: "المعدات النمطية الجاهزة نادراً ما تتطابق مع المتطلبات الهيدروليكية وطبيعة المياه والظروف التشغيلية في مصر.",
    whenYouNeedIt: ["Upgrading manual dosing to automated PLC control", "Installing side-stream basin filtration on cooling towers", "Retrofitting aging boiler blowdown controllers", "Integrating plant water data into central SCADA"],
    whenYouNeedItAr: ["تحويل الحقن اليدوي إلى منظومة تحكم PLC آلية", "تركيب ترشيح جانبي ذاتي التنظيف لأحواض الأبراج", "تحديث وتطوير لوحات التحكم القديمة للغلايات", "ربط بيانات المياه بنظام SCADA المركزي للمصنع"],
    cwaterApproach: ["3D CAD modeling and hydraulic sizing", "Panel fabrication with Walchem controllers & IP65 enclosures", "Piping manifolds in PVDF, CPVC, or 316L stainless steel", "Factory Acceptance Testing (FAT) before delivery"],
    cwaterApproachAr: ["تصميم هندسي ثلاثي الأبعاد 3D CAD وحسابات هيدروليكية", "تجميع اللوحات بأجهزة Walchem وهياكل معزولة IP65", "تمديد المجمعات بمواد PVDF و CPVC و 316L المقاومة", "إجراء اختبارات القبول بالمصنع (FAT) قبل التوريد"],
    whatYouReceive: ["Turnkey Fully Wired & Plumbed Skids", "Complete Electrical Wiring & P&ID Schematics", "PLC / Controller Configuration Files", "Operation & Maintenance Manuals"],
    whatYouReceiveAr: ["محطات مدمجة جاهزة للتشغيل والتوصيل المباشر", "مخططات كهربية وهيدروليكية كاملة (P&ID)", "ملفات برمجة وضبط لوحات التحكم", "أدلة التشغيل والصيانة الهندسية الشاملة"],
  },
  {
    id: "installation-commissioning",
    slug: "installation-commissioning",
    title: "Installation & Commissioning",
    titleAr: "التركيب والتشغيل الميداني المعتمد",
    headline: "Seamless Implementation by Certified Egyptian Water Engineers.",
    headlineAr: "تنفيذ ميداني دقيق بإشراف مهندسي C-Water المعتمدين.",
    description:
      "Professional mechanical mounting, plumbing, sensor immersion, electrical wiring, loop testing, calibration, and initial chemical passivation carried out to strict safety standards.",
    descriptionAr:
      "تركيب ميكانيكي محكم، تمديد خطوط السحب والحقن، معايرة الحساسات، واختبار دوائر الإشارات، والتخميل الكيميائي الأولي للشبكات وفق أعلى معايير السلامة.",
    icon: "Settings",
    whyItMatters: "Improper sensor mounting or piping installation leads to erratic readings, air-binding, and premature equipment failure.",
    whyItMattersAr: "التركيب الخاطئ للحساسات أو خطوط الحقن يسبب قراءات متذبذبة واحتباس هواء وتلفاً مبكراً للمعدات.",
    whenYouNeedIt: ["Deploying newly purchased filtration or controller equipment", "Starting up after plant turnaround or seasonal shutdown", "Integrating new chemical treatment programs into existing lines"],
    whenYouNeedItAr: ["استلام وتركيب معدات ترشيح أو لوحات تحكم جديدة", "إعادة تشغيل المصنع بعد الصيانة السنوية", "تطبيق برنامج كيميائي جديد على خطوط قائمة"],
    cwaterApproach: ["Precision physical & electrical mounting", "Wet sensor calibration against NIST-traceable standards", "Safety pressure testing and injection quill verification", "Operator on-site training during handover"],
    cwaterApproachAr: ["تثبيت وتوصيل كهربي وميكانيكي محكم", "معايرة رطبة للحساسات بمحاليل قياسية معتمدة", "اختبارات ضغط وتأكد من سلامة صمامات الحقن", "تدريب ميداني شامل لمشغلي وفنيي المصنع"],
    whatYouReceive: ["Commissioning Sign-Off Certificate", "Calibrated Sensor Baseline Log", "On-Site Operator Training Session", "Emergency Contact Protocol"],
    whatYouReceiveAr: ["شهادة إتمام التشغيل والتسليم المعتمدة", "سجل معايرة خط الأساس للحساسات", "جلسة تدريب عملي لمشغلي المنشأة", "بروتوكول الدعم والاستجابة الطارئة"],
  },
  {
    id: "preventive-maintenance",
    slug: "preventive-maintenance",
    title: "Preventive Maintenance & Site Support",
    titleAr: "عقود الصيانة الوقائية والدعم الميداني",
    headline: "Protecting System Continuity Through Scheduled Engineering Visits.",
    headlineAr: "حماية استمرارية التشغيل بزيارات هندسية دورية منتظمة.",
    description:
      "Scheduled technical service visits ensuring sensor calibration, filter screen inspection, pump seal replacement, chemical inventory audits, and immediate emergency response.",
    descriptionAr:
      "زيارات دورية منتظمة لمهندسينا لضمان معايرة الحساسات، فحص شاشات الفلاتر، صيانة مضخات الحقن، ومراجعة المخزون الكيميائي مع الاستجابة الميدانية الفورية.",
    icon: "ShieldAlert",
    whyItMatters: "Uncalibrated sensors drift over time, causing controllers to blindly under-dose or over-dose without plant staff noticing.",
    whyItMattersAr: "الحساسات غير المعايرة تنحرف قراءاتها تدريجياً، مما يدفع لوحات التحكم للحقن الخاطئ دون انتباه المشغلين.",
    whenYouNeedIt: ["Continuous industrial production facilities", "Commercial facilities requiring guaranteed Legionella compliance", "Facilities aiming to maximize equipment operational lifespan"],
    whenYouNeedItAr: ["المصانع التي تعمل على مدار 24 ساعة", "المنشآت التجارية والفندقية الملتزمة بمعايير الليجيونيلا", "الشركات الساعية لإطالة عمر أصولها المائية لأقصى حد"],
    cwaterApproach: ["Monthly or bi-weekly scheduled site technician visits", "Electrode cleaning and buffer calibration", "Pump diaphragm and valve wear inspections", "Detailed chemical residual testing"],
    cwaterApproachAr: ["زيارات دورية مجدولة شهرياً أو نصف شهرياً", "تنظيف الأقطاب ومعايرة الحساسات بالمحاليل القياسية", "فحص واختبار أجزاء مضخات الحقن وصمامات الترجيع", "قياس نسب تركيز الكيماويات المتبقية بالشبكة"],
    whatYouReceive: ["Monthly Technical Service Audit Report", "Consumable & Spare Parts Availability", "24/7 Priority Emergency Callout Service", "Continuous System Health Dashboard Access"],
    whatYouReceiveAr: ["تقرير تدقيق فني شامل بعد كل زيارة", "توفير فوري لقطع الغيار والمستهلكات", "خدمة استدعاء هندسي طارئ على مدار الساعة", "متابعة مستمرة لحالة المنظومة عبر لوحة البيانات"],
  },
];
