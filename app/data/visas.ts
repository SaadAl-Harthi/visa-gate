export type Faq = {
  question: string;
  answer: string;
};

export type VisaType = {
  id: string;
  title: string;
  icon: string;
  subtitle: string;
  price: string;
  duration: string;
  requirements: string[];
  notes: string[];
  faqs: Faq[];
};

export type SchengenCountry = {
  name: string;
  flag: string;
  price: string;
  duration: string;
  status: string;
  requirements: string[];
  extraRequirements?: string[];
  notes: string[];
};

export type SimpleVisaData = {
  title: string;
  visaName: string;
  price: string;
  duration: string;
  requirements: string[];
  notes: string[];
  faqs: Faq[];
  whatsappMessage: string;
};

export type RelatedVisa = {
  href: string;
  flag: string;
  title: string;
  text: string;
};

export type VisaPageStatus = "active" | "hidden" | "draft";

export type VisaPageVariant = {
  id: string;
  name: string;
  title: string;
  icon: string;
  subtitle?: string;
  country: string;
  price: string;
  duration: string;
  status?: string;
  typeLabel: string;
  requirements: string[];
  notes: string[];
  faqs: Faq[];
  whatsappName: string;
  whatsappMessage?: string;
  preApplyNote?: string;
};

export type VisaPageData = {
  slug: string;
  status: VisaPageStatus;
  title: string;
  highlightedTitle: string;
  description: string;
  seo: {
    title: string;
    description: string;
    openGraphTitle: string;
    openGraphDescription: string;
    twitterTitle?: string;
    twitterDescription?: string;
  };
  heroIcon: string;
  aboutTitle: string;
  aboutText: string;
  aboutNote: string;
  selectorTitle?: string;
  requirementsTitle: string;
  variants: VisaPageVariant[];
  infoCards?: { label: string; value: string }[];
  relatedVisas: RelatedVisa[];
};

const schengenDefaultRequirements = [
  "أصل الجواز وصورة منه.",
  "ورقة تعريف بالراتب باللغة الإنجليزية موجهة للسفارة ومختومة من جهة العمل.",
  "للشركات الخاصة: يجب تصديق تعريف العمل من الغرفة التجارية.",
  "كشف حساب مطبوع باللغة الإنجليزية لمدة 4 أشهر وبرصيد لا يقل عن 10,000 ريال للشخص.",
  "صورة من الهوية.",
  "صورة من كرت العائلة إذا كان الموعد للعائلة.",
  "ورقة الموعد الخاصة بمركز الاعتماد.",
  "ورقة الأبلكيشن الخاصة بالسفارة.",
  "حجز الفندق - نسخة لكل شخص.",
  "حجز الطيران - نسخة لكل شخص.",
  "بوليصة التأمين - نسخة لكل شخص.",
  "صورتان شخصية مقاس 3.5 × 4.5 بخلفية بيضاء.",
  "صورة من تأشيرة الشنغن السابقة إن وجدت.",
  "تأشيرة خروج وعودة لغير السعوديين.",
];

const buildSchengenNotes = (country: string) => [
  "الهويات وكرت العائلة إذا لم تكن بالإصدار الجديد يجب ترجمتها باللغة الإنجليزية، ويمكن ترجمتها عن طريقنا برسوم إضافية.",
  `يمكن لسفارة ${country} تغيير بعض المتطلبات أو طلب مستندات إضافية دون سابق إنذار.`,
  "لا يوجد أي وعد أو ضمان من جهتنا باستخراج التأشيرة أو تحديد وقت إصدارها.",
  "في حال رغبتك بالاستفسار عن تأشيرتك يمكنك زيارة مركز الاعتماد للسؤال عن معاملتك.",
];

export const schengenCountries: SchengenCountry[] = [
  {
    name: "فرنسا",
    flag: "🇫🇷",
    price: "450 ريال غير شاملة رسوم السفارة",
    duration: "حسب المواعيد المتاحة",
    status: "متاحة للتقديم",
    requirements: schengenDefaultRequirements,
    extraRequirements: [
      "قد تطلب سفارة فرنسا مستندات إضافية حسب حالة مقدم الطلب أو الغرض من الزيارة.",
    ],
    notes: buildSchengenNotes("فرنسا"),
  },
  {
    name: "إيطاليا",
    flag: "🇮🇹",
    price: "450 ريال غير شاملة رسوم السفارة",
    duration: "حسب المواعيد المتاحة",
    status: "متاحة للتقديم",
    requirements: schengenDefaultRequirements,
    extraRequirements: [
      "قد تطلب سفارة إيطاليا تفاصيل إضافية عن خطة الرحلة أو حجوزات المدن داخل إيطاليا.",
    ],
    notes: buildSchengenNotes("إيطاليا"),
  },
  {
    name: "سويسرا",
    flag: "🇨🇭",
    price: "450 ريال غير شاملة رسوم السفارة",
    duration: "حسب المواعيد المتاحة",
    status: "متاحة للتقديم",
    requirements: schengenDefaultRequirements,
    extraRequirements: [
      "قد تطلب سفارة سويسرا توضيحًا إضافيًا لمسار الرحلة أو حجوزات الإقامة حسب الحالة.",
    ],
    notes: buildSchengenNotes("سويسرا"),
  },
  {
    name: "ألمانيا",
    flag: "🇩🇪",
    price: "350 ريال غير شاملة رسوم السفارة",
    duration: "حسب المواعيد المتاحة",
    status: "متاحة للتقديم",
    requirements: schengenDefaultRequirements,
    extraRequirements: [
      "قد تطلب سفارة ألمانيا مستندات إضافية لإثبات الغرض من الزيارة أو الوضع المالي.",
    ],
    notes: buildSchengenNotes("ألمانيا"),
  },
  {
    name: "هولندا",
    flag: "🇳🇱",
    price: "450 ريال غير شاملة رسوم السفارة",
    duration: "حسب المواعيد المتاحة",
    status: "متاحة للتقديم",
    requirements: schengenDefaultRequirements,
    extraRequirements: [
      "قد تطلب سفارة هولندا تفاصيل إضافية عن الإقامة أو برنامج الرحلة.",
    ],
    notes: buildSchengenNotes("هولندا"),
  },
  {
    name: "إسبانيا",
    flag: "🇪🇸",
    price: "450 ريال غير شاملة رسوم السفارة",
    duration: "حسب المواعيد المتاحة",
    status: "متاحة للتقديم",
    requirements: schengenDefaultRequirements,
    extraRequirements: [
      "قد تطلب سفارة إسبانيا مستندات إضافية حسب مدينة الوصول أو مدة الإقامة.",
    ],
    notes: buildSchengenNotes("إسبانيا"),
  },
  {
    name: "النمسا",
    flag: "🇦🇹",
    price: "450 ريال غير شاملة رسوم السفارة",
    duration: "حسب المواعيد المتاحة",
    status: "متاحة للتقديم",
    requirements: [
      ...schengenDefaultRequirements.filter(
        (item) => !item.includes("10,000 ريال")
      ),
      "كشف حساب مطبوع باللغة الإنجليزية لمدة 4 أشهر وبرصيد لا يقل عن 15,000 ريال للشخص.",
    ],
    extraRequirements: [
      "قد تطلب سفارة النمسا توضيحات إضافية عن برنامج الرحلة أو حجوزات السكن.",
    ],
    notes: buildSchengenNotes("النمسا"),
  },
  {
    name: "البرتغال",
    flag: "🇵🇹",
    price: "450 ريال غير شاملة رسوم السفارة",
    duration: "حسب المواعيد المتاحة",
    status: "متاحة للتقديم",
    requirements: schengenDefaultRequirements,
    extraRequirements: [
      "قد تطلب سفارة البرتغال مستندات إضافية حسب الغرض من السفر أو مدة الرحلة.",
    ],
    notes: buildSchengenNotes("البرتغال"),
  },
  {
    name: "اليونان",
    flag: "🇬🇷",
    price: "450 ريال غير شاملة رسوم السفارة",
    duration: "حسب المواعيد المتاحة",
    status: "متاحة للتقديم",
    requirements: schengenDefaultRequirements,
    extraRequirements: [
      "قد تطلب سفارة اليونان تفاصيل إضافية عن الجزر أو المدن التي سيتم زيارتها.",
    ],
    notes: buildSchengenNotes("اليونان"),
  },
  {
    name: "التشيك",
    flag: "🇨🇿",
    price: "450 ريال غير شاملة رسوم السفارة",
    duration: "حسب المواعيد المتاحة",
    status: "متاحة للتقديم",
    requirements: schengenDefaultRequirements,
    extraRequirements: [
      "قد تطلب سفارة التشيك مستندات إضافية عن خطة السفر أو حجوزات الإقامة.",
    ],
    notes: buildSchengenNotes("التشيك"),
  },
  {
    name: "بلجيكا",
    flag: "🇧🇪",
    price: "450 ريال غير شاملة رسوم السفارة",
    duration: "حسب المواعيد المتاحة",
    status: "متاحة للتقديم",
    requirements: schengenDefaultRequirements,
    extraRequirements: [
      "قد تطلب سفارة بلجيكا مستندات إضافية حسب الغرض من الزيارة أو جهة الاستضافة.",
    ],
    notes: buildSchengenNotes("بلجيكا"),
  },
];

const usaTouristRequirements = [
  "أصل الجواز وصورة منه.",
  "ورقة تعريف بالراتب باللغة الإنجليزية موجهة للسفارة ومختومة من جهة العمل، وللشركات الخاصة يجب تصديقها من الغرفة التجارية.",
  "كشف حساب مطبوع باللغة الإنجليزية لمدة 6 أشهر وبرصيد لا يقل عن 10,000 ريال للشخص.",
  "صورة من الهوية.",
  "صورة من كرت العائلة في حال كان الموعد للعائلة.",
  "ورقة الموعد الخاصة بمركز الاعتماد.",
  "ورقة الكونفرميشن الخاصة بالسفارة.",
  "حجز الفندق - نسخة لكل شخص.",
  "حجز الطيران - نسخة لكل شخص.",
  "صورتان شخصية مقاس 5×5 مكشوف الرأس للرجال ومكشوف الوجه للنساء.",
  "صورة من تأشيرة أمريكا السابقة إن وجدت.",
  "تأشيرة خروج وعودة لغير السعوديين.",
];

const usaStudentRequirements = [
  ...usaTouristRequirements.slice(0, 9),
  "فاتورة SEVIS.",
  "قبول جهة الدراسة.",
  "نموذج I-20.",
  ...usaTouristRequirements.slice(9),
];

const usaCommonNotes = [
  "الهويات وكرت العائلة إذا لم تكن بالإصدار الجديد يجب ترجمتها باللغة الإنجليزية، ويمكن ترجمتها عن طريقنا برسوم إضافية.",
  "يمكن للسفارة الأمريكية تغيير بعض المتطلبات أو طلب مستندات إضافية دون سابق إنذار.",
  "لا يوجد أي وعد أو ضمان من جهتنا باستخراج التأشيرة أو تحديد وقت إصدارها.",
  "في حال رغبتك بالاستفسار عن تأشيرتك يمكنك زيارة السفارة الأمريكية للاستفسار عن معاملتك.",
];

export const usaVisaTypes: VisaType[] = [
  {
    id: "tourist",
    title: "تأشيرة أمريكا السياحية",
    icon: "🇺🇸",
    subtitle: "للسياحة والزيارة وحضور الفعاليات.",
    price: "900 ريال",
    duration: "من 5 إلى 15 يوم عمل وقد تزيد حسب السفارة",
    requirements: usaTouristRequirements,
    notes: usaCommonNotes,
    faqs: [
      {
        question: "هل البصمة مطلوبة؟",
        answer: "نعم، البصمة مطلوبة عند التقديم على التأشيرة الأمريكية.",
      },
      {
        question: "هل توجد مقابلة شخصية؟",
        answer:
          "نعم، توجد مقابلة شخصية في السفارة الأمريكية ضمن إجراءات التقديم.",
      },
      {
        question: "كم مدة استخراج التأشيرة؟",
        answer:
          "عادة تستغرق من 5 إلى 15 يوم عمل، وقد تزيد حسب السفارة وحالة الطلب.",
      },
      {
        question: "هل التأشيرة مضمونة؟",
        answer:
          "لا، التأشيرة ليست مضمونة، والقرار النهائي يعود للسفارة الأمريكية.",
      },
      {
        question: "هل يمكن توفير حجوزات الطيران والفندق؟",
        answer:
          "نعم، يمكن توفير حجوزات مبدئية للطيران والفندق وتجهيزها ضمن ملف التأشيرة.",
      },
    ],
  },
  {
    id: "student",
    title: "تأشيرة أمريكا الدراسية",
    icon: "🎓",
    subtitle: "للطلاب المقبولين في معاهد أو جامعات داخل أمريكا.",
    price: "2500 ريال",
    duration: "من 5 إلى 15 يوم عمل وقد تزيد حسب السفارة",
    requirements: usaStudentRequirements,
    notes: usaCommonNotes,
    faqs: [
      {
        question: "هل البصمة مطلوبة؟",
        answer: "نعم، البصمة مطلوبة عند التقديم على التأشيرة الأمريكية.",
      },
      {
        question: "هل توجد مقابلة شخصية؟",
        answer:
          "نعم، توجد مقابلة شخصية في السفارة الأمريكية ضمن إجراءات التقديم.",
      },
      {
        question: "ما هو نموذج I-20؟",
        answer:
          "نموذج I-20 هو مستند رسمي يصدر من جهة الدراسة في أمريكا، ويثبت قبول الطالب ويُستخدم للتقديم على التأشيرة الدراسية.",
      },
      {
        question: "هل رسوم SEVIS مشمولة؟",
        answer: "نعم، يتم تجهيز فاتورة SEVIS ضمن متطلبات التأشيرة الدراسية.",
      },
      {
        question: "كم مدة استخراج التأشيرة؟",
        answer:
          "عادة تستغرق من 5 إلى 15 يوم عمل، وقد تزيد حسب السفارة وحالة الطلب.",
      },
      {
        question: "هل التأشيرة مضمونة؟",
        answer:
          "لا، التأشيرة ليست مضمونة، والقرار النهائي يعود للسفارة الأمريكية.",
      },
    ],
  },
];

const canadaTouristRequirements = [
  "أصل الجواز وصورة منه.",
  "صورة الهوية.",
  "صورة التأشيرة السابقة إن وجدت.",
  "صورة من كرت العائلة.",
  "العنوان الوطني.",
  "سجل السفريات من توكلنا.",
  "صور الأختام من جواز السفر.",
  "ورقة التعريف بالراتب باللغة الإنجليزية موجهة للسفارة ومختومة من جهة العمل، وللشركات الخاصة يجب تصديقها من الغرفة التجارية.",
  "كشف حساب لمدة 6 أشهر باللغة الإنجليزية وبرصيد لا يقل عن 15,000 ريال.",
  "صورتان شخصية مقاس 5×5 بخلفية بيضاء، مكشوف الرأس للرجال ومكشوف الوجه للنساء.",
];

const canadaStudentRequirements = [
  ...canadaTouristRequirements,
  "قبول المعهد أو جهة الدراسة في كندا.",
];

const canadaCommonNotes = [
  "يمكن للسفارة الكندية تغيير بعض المتطلبات أو طلب مستندات إضافية دون سابق إنذار.",
  "لا يوجد أي وعد أو ضمان من جهتنا باستخراج التأشيرة أو تحديد وقت إصدارها.",
  "يجب أن تكون جميع المستندات واضحة وحديثة عند التقديم.",
  "قد تختلف مدة المعالجة حسب نوع التأشيرة وحالة الطلب.",
];

export const canadaVisaTypes: VisaType[] = [
  {
    id: "tourist",
    title: "تأشيرة كندا السياحية",
    icon: "🇨🇦",
    subtitle: "للسياحة والزيارة العائلية أو حضور الفعاليات.",
    price: "1100 ريال",
    duration: "حسب مدة معالجة السفارة",
    requirements: canadaTouristRequirements,
    notes: canadaCommonNotes,
    faqs: [
      {
        question: "هل البصمة مطلوبة؟",
        answer: "نعم، البصمة مطلوبة عند التقديم على تأشيرة كندا.",
      },
      {
        question: "هل التأشيرة مضمونة؟",
        answer: "لا، التأشيرة ليست مضمونة، والقرار النهائي يعود للسفارة الكندية.",
      },
      {
        question: "كم مدة استخراج التأشيرة؟",
        answer:
          "تختلف مدة المعالجة حسب السفارة وحالة الطلب، وقد تزيد في بعض المواسم.",
      },
      {
        question: "هل يجب توفير كشف حساب؟",
        answer:
          "نعم، يتطلب ملف التأشيرة كشف حساب لمدة 6 أشهر باللغة الإنجليزية وبرصيد لا يقل عن 15,000 ريال.",
      },
    ],
  },
  {
    id: "student",
    title: "تأشيرة كندا الدراسية",
    icon: "🎓",
    subtitle: "للطلاب المقبولين في معاهد أو مؤسسات تعليمية في كندا.",
    price: "1170 ريال",
    duration: "حسب مدة معالجة السفارة",
    requirements: canadaStudentRequirements,
    notes: canadaCommonNotes,
    faqs: [
      {
        question: "هل قبول المعهد مطلوب؟",
        answer:
          "نعم، قبول المعهد أو جهة الدراسة مطلوب ضمن ملف التأشيرة الدراسية.",
      },
      {
        question: "هل البصمة مطلوبة؟",
        answer: "نعم، البصمة مطلوبة عند التقديم على تأشيرة كندا.",
      },
      {
        question: "هل التأشيرة مضمونة؟",
        answer: "لا، التأشيرة ليست مضمونة، والقرار النهائي يعود للسفارة الكندية.",
      },
      {
        question: "كم مدة استخراج التأشيرة؟",
        answer:
          "تختلف مدة المعالجة حسب السفارة وحالة الطلب، وقد تزيد في بعض المواسم.",
      },
    ],
  },
];

export const ukVisa: SimpleVisaData = {
  title: "تصريح بريطانيا الإلكتروني ETA",
  visaName: "بريطانيا",
  price: "180 ريال",
  duration: "حتى 6 أشهر لكل زيارة",
  requirements: [
    "صورة شخصية بخلفية بيضاء.",
    "صورة واضحة للجواز.",
    "العنوان الوطني.",
  ],
  notes: [
    "التصريح الإلكتروني البريطاني ETA صالح لمدة سنتين.",
    "يسمح بالإقامة حتى 6 أشهر لكل زيارة.",
    "صالح للسياحة والدراسة قصيرة المدة أقل من 6 أشهر.",
    "التقديم يتم إلكترونيًا بالكامل بدون زيارة السفارة.",
    "لا توجد بصمة أو مقابلة شخصية.",
    "استخراج التصريح الإلكتروني غير مضمون 100٪، وتصل نسبة القبول غالبًا إلى 99٪ عند استيفاء المتطلبات بشكل صحيح.",
    "القرار النهائي بالدخول يعود لضابط الجوازات البريطاني عند الوصول.",
  ],
  faqs: [
    {
      question: "هل يحتاج حضور للسفارة؟",
      answer: "لا، التقديم يتم إلكترونيًا بالكامل.",
    },
    {
      question: "هل توجد بصمة؟",
      answer: "لا، لا توجد بصمة للتصريح الإلكتروني البريطاني ETA.",
    },
    {
      question: "كم مدة صلاحية التصريح؟",
      answer: "التصريح صالح لمدة سنتين.",
    },
    {
      question: "كم مدة الإقامة المسموحة؟",
      answer: "يمكن البقاء حتى 6 أشهر لكل زيارة.",
    },
    {
      question: "هل يمكن استخدامه للدراسة؟",
      answer: "نعم، يمكن استخدامه للدراسة قصيرة المدة أقل من 6 أشهر.",
    },
    {
      question: "هل التصريح مضمون؟",
      answer:
        "لا، استخراج التصريح غير مضمون 100٪، والقرار النهائي يعود للجهات البريطانية.",
    },
  ],
  whatsappMessage: `
السلام عليكم، أرغب بالتقديم على تصريح بريطانيا الإلكتروني ETA

نوع الخدمة: تصريح بريطانيا الإلكتروني ETA
السعر: 180 ريال
الصلاحية: سنتين
مدة الإقامة: حتى 6 أشهر لكل زيارة
`,
};

export const uaeVisa: SimpleVisaData = {
  title: "تأشيرة الإمارات",
  visaName: "الإمارات",
  price: "550 ريال",
  duration: "من 4 إلى 15 يوم عمل وقد تزيد",
  requirements: [
    "صورة الجواز.",
    "صورة الإقامة.",
    "صورة شخصية بخلفية بيضاء.",
    "العنوان الوطني.",
  ],
  notes: [
    "هذه الخدمة مخصصة لمقيمي دول مجلس التعاون الخليجي.",
    "يجب أن تكون صلاحية الإقامة أكثر من 6 أشهر من تاريخ العودة.",
    "التأشيرة إلكترونية ولا تتطلب حضور أو بصمة.",
    "إصدار التأشيرة غير مضمون، ويعود القرار النهائي للجهات المختصة في الإمارات.",
    "قد تختلف مدة المعالجة حسب حالة الطلب أو تحديثات الجهات المختصة.",
  ],
  faqs: [
    {
      question: "هل التأشيرة إلكترونية؟",
      answer: "نعم، يتم إصدار التأشيرة إلكترونيًا.",
    },
    {
      question: "هل يلزم حضور أو بصمة؟",
      answer: "لا، لا يلزم حضور أو بصمة للتقديم.",
    },
    {
      question: "كم مدة استخراج التأشيرة؟",
      answer:
        "من 4 إلى 15 يوم عمل، وقد تزيد حسب حالة الطلب أو تحديثات الجهات المختصة.",
    },
    {
      question: "هل التأشيرة مضمونة؟",
      answer:
        "لا، إصدار التأشيرة غير مضمون، ويعود القرار النهائي للجهات المختصة في الإمارات.",
    },
    {
      question: "هل يمكن التقديم للمقيمين بدول الخليج؟",
      answer:
        "نعم، يمكن لمقيمي دول مجلس التعاون الخليجي التقديم حسب الشروط المطلوبة.",
    },
    {
      question: "هل توجد شروط على الإقامة؟",
      answer:
        "نعم، يجب أن تكون صلاحية الإقامة أكثر من 6 أشهر من تاريخ العودة.",
    },
  ],
  whatsappMessage: `
السلام عليكم، أرغب بالتقديم على تأشيرة الإمارات

نوع التأشيرة: إلكترونية لمقيمي دول الخليج
المدة: من 4 إلى 15 يوم عمل وقد تزيد
`,
};

export const australiaVisa: SimpleVisaData = {
  title: "تأشيرة أستراليا",
  visaName: "أستراليا",
  price: "650 ريال",
  duration: "من 4 إلى 10 أيام عمل، وقد تختلف حسب حالة الطلب.",
  requirements: [
    "صورة الهوية.",
    "صورة الجواز.",
    "صورة شخصية بخلفية بيضاء.",
    "العنوان الوطني.",
    "قبول الجهة التعليمية في حال التقديم الدراسي.",
  ],
  notes: [
    "التأشيرة إلكترونية بالكامل.",
    "يمكن استخدام التأشيرة للسياحة أو الدراسة لمدة أقل من 3 أشهر.",
    "يجب أن تكون جميع المستندات واضحة وحديثة.",
    "قد تطلب السفارة مستندات إضافية حسب حالة الطلب.",
    "إصدار التأشيرة غير مضمون ويعود القرار النهائي للسفارة الأسترالية.",
  ],
  faqs: [
    {
      question: "هل التأشيرة إلكترونية؟",
      answer: "نعم، يتم إصدار التأشيرة إلكترونيًا.",
    },
    {
      question: "هل يلزم حضور أو بصمة؟",
      answer: "لا، لا يلزم حضور أو بصمة للتقديم.",
    },
    {
      question: "كم مدة استخراج التأشيرة؟",
      answer: "من 4 إلى 10 أيام عمل، وقد تختلف حسب حالة الطلب.",
    },
    {
      question: "هل التأشيرة مضمونة؟",
      answer:
        "إصدار التأشيرة غير مضمون، ويعود القرار النهائي للسفارة الأسترالية.",
    },
    {
      question: "هل تشمل التأشيرة الدراسة؟",
      answer:
        "نعم، يمكن استخدامها للدراسة إذا كانت مدة الدراسة أقل من 3 أشهر.",
    },
    {
      question: "هل أحتاج قبول دراسي؟",
      answer:
        "نعم، في حال التقديم على تأشيرة دراسية يجب إرفاق قبول الجهة التعليمية.",
    },
  ],
  whatsappMessage: "السلام عليكم، أود استخراج تأشيرة أستراليا",
};

const schengenFaqs: Faq[] = [
  {
    question: "هل الحضور شخصي لمركز التأشيرات؟",
    answer:
      "نعم، يجب حضور صاحب الطلب شخصيًا لمركز التأشيرات لإجراء البصمة وتسليم الجواز.",
  },
  {
    question: "هل البصمة مطلوبة؟",
    answer: "نعم، البصمة مطلوبة عند التقديم على تأشيرة شنغن.",
  },
  {
    question: "كم مدة استخراج التأشيرة؟",
    answer:
      "تختلف مدة المعالجة حسب السفارة والموسم، وعادة تستغرق من عدة أيام إلى عدة أسابيع.",
  },
  {
    question: "هل التأشيرة مضمونة؟",
    answer: "لا يمكن ضمان الموافقة على التأشيرة، حيث يعود القرار النهائي للسفارة فقط.",
  },
  {
    question: "هل يمكن التقديم للعائلة؟",
    answer: "نعم، يمكن التقديم للأفراد أو العائلات مع تجهيز كامل للملفات والمواعيد.",
  },
  {
    question: "هل يجب حجز طيران وفندق قبل التقديم؟",
    answer:
      "نعم، يتطلب ملف التأشيرة وجود حجوزات مبدئية للطيران والفندق، ويمكن توفيرها وتجهيزها من خلالنا.",
  },
];

export const schengenVisaPage: VisaPageData = {
  slug: "schengen",
  status: "active",
  title: "تأشيرة",
  highlightedTitle: "شنغن",
  description:
    "اختر دولة الشنغن المطلوبة واطّلع على المتطلبات والملاحظات المهمة قبل بدء طلب التأشيرة.",
  seo: {
    title: "استخراج تأشيرة الشنغن | رحلتنا للتأشيرات",
    description:
      "استخراج تأشيرة الشنغن للسعوديين مع تجهيز الملف، التأمين الطبي، حجوزات السفر، والمتابعة الكاملة.",
    openGraphTitle: "استخراج تأشيرة الشنغن",
    openGraphDescription:
      "نساعدك في استخراج فيزا الشنغن لجميع الدول الأوروبية بسهولة.",
    twitterTitle: "استخراج تأشيرة الشنغن",
    twitterDescription:
      "خدمة استخراج تأشيرة الشنغن للسعوديين بخطوات سهلة.",
  },
  heroIcon: "🌍",
  aboutTitle: "ما هي تأشيرة شنغن؟",
  aboutText:
    "تأشيرة شنغن هي تأشيرة موحدة تسمح لحاملها بالتنقل بين دول منطقة الشنغن الأوروبية لمدة تصل إلى 90 يومًا خلال فترة 180 يومًا، سواءً للسياحة أو زيارة العائلة أو الأعمال.",
  aboutNote:
    "قد تختلف المتطلبات والإجراءات من دولة لأخرى، لذلك يتم تحديث الشروط حسب السفارة المختارة.",
  selectorTitle: "اختر الدولة",
  requirementsTitle: "المتطلبات عند الحضور لمركز التأشيرات",
  variants: schengenCountries.map((country) => ({
    id: country.name,
    name: country.name,
    title: `تأشيرة شنغن - ${country.name}`,
    icon: country.flag,
    country: country.name,
    price: country.price,
    duration: country.duration,
    status: country.status,
    typeLabel: "سياحية",
    requirements: [
      ...country.requirements,
      ...(country.extraRequirements ?? []),
    ],
    notes: country.notes,
    faqs: schengenFaqs,
    whatsappName: `الشنغن - ${country.name}`,
    preApplyNote: `المتطلبات التالية مخصصة لسفارة ${country.name}، وقد تختلف حسب حالة مقدم الطلب أو تحديثات السفارة.`,
  })),
  relatedVisas: [
    {
      href: "/uk",
      flag: "🇬🇧",
      title: "تأشيرة بريطانيا",
      text: "تصريح السفر الإلكتروني للسعوديين.",
    },
    {
      href: "/usa",
      flag: "🇺🇸",
      title: "تأشيرة أمريكا",
      text: "تجهيز ملف التأشيرة الأمريكية ومساعدتك في خطوات التقديم.",
    },
    {
      href: "/canada",
      flag: "🇨🇦",
      title: "تأشيرة كندا",
      text: "خدمات التأشيرات السياحية والدراسية لكندا.",
    },
  ],
};

export const usaVisaPage: VisaPageData = {
  slug: "usa",
  status: "active",
  title: "تأشيرة",
  highlightedTitle: "أمريكا",
  description:
    "اختر نوع التأشيرة المطلوبة واطّلع على المتطلبات والملاحظات المهمة قبل بدء طلب التأشيرة.",
  seo: {
    title: "استخراج تأشيرة أمريكا للسعوديين | رحلتنا للتأشيرات",
    description:
      "نساعدك في استخراج تأشيرة أمريكا السياحية أو الدراسية مع تجهيز الملف، تعبئة النماذج، وحجز الموعد.",
    openGraphTitle: "استخراج تأشيرة أمريكا للسعوديين",
    openGraphDescription:
      "خدمة متكاملة لاستخراج تأشيرة أمريكا مع متابعة الطلب خطوة بخطوة.",
    twitterTitle: "استخراج تأشيرة أمريكا",
    twitterDescription: "خدمة استخراج تأشيرة أمريكا السياحية والدراسية.",
  },
  heroIcon: "🇺🇸",
  aboutTitle: "عن التأشيرة الأمريكية",
  aboutText:
    "نساعدك في تجهيز ملف التأشيرة الأمريكية سواءً للسياحة أو الدراسة، مع توضيح المتطلبات ومساعدتك في خطوات النماذج والمواعيد.",
  aboutNote:
    "تختلف المتطلبات حسب نوع التأشيرة وحالة مقدم الطلب، والقرار النهائي يعود للسفارة الأمريكية.",
  selectorTitle: "اختر نوع التأشيرة",
  requirementsTitle: "المتطلبات عند الحضور للسفارة الأمريكية",
  variants: usaVisaTypes.map((visa) => ({
    id: visa.id,
    name: visa.title,
    title: visa.title,
    icon: visa.icon,
    subtitle: visa.subtitle,
    country: "أمريكا",
    price: visa.price,
    duration: visa.duration,
    status: "الحالة: متاحة للتقديم",
    typeLabel: visa.id === "tourist" ? "سياحية" : "دراسية",
    requirements: visa.requirements,
    notes: visa.notes,
    faqs: visa.faqs,
    whatsappName: visa.title,
    preApplyNote: `المتطلبات التالية خاصة بالتقديم على ${visa.title}، وقد تختلف حسب حالة مقدم الطلب أو تحديثات السفارة الأمريكية.`,
  })),
  relatedVisas: [
    {
      href: "/schengen",
      flag: "🇪🇺",
      title: "تأشيرة شنغن",
      text: "خدمات استخراج تأشيرات الشنغن لجميع الدول الأوروبية.",
    },
    {
      href: "/uk",
      flag: "🇬🇧",
      title: "تصريح بريطانيا",
      text: "تصريح السفر الإلكتروني للسعوديين.",
    },
    {
      href: "/australia",
      flag: "🇦🇺",
      title: "تأشيرة أستراليا",
      text: "تأشيرات سياحية ودراسية إلكترونية بخطوات سهلة.",
    },
  ],
};

export const canadaVisaPage: VisaPageData = {
  slug: "canada",
  status: "active",
  title: "تأشيرة",
  highlightedTitle: "كندا",
  description:
    "اختر نوع التأشيرة المطلوبة واطّلع على المتطلبات والملاحظات المهمة قبل بدء طلب التأشيرة.",
  seo: {
    title: "استخراج تأشيرة كندا للسعوديين | رحلتنا للتأشيرات",
    description:
      "خدمة استخراج تأشيرة كندا السياحية والدراسية مع تجهيز الملفات والمتابعة الكاملة حتى إصدار التأشيرة.",
    openGraphTitle: "استخراج تأشيرة كندا للسعوديين",
    openGraphDescription:
      "نساعدك في استخراج تأشيرة كندا بسهولة مع مراجعة المتطلبات والملف.",
    twitterTitle: "استخراج تأشيرة كندا",
    twitterDescription:
      "خدمة استخراج تأشيرة كندا للسعوديين بسهولة وسرعة.",
  },
  heroIcon: "🇨🇦",
  aboutTitle: "عن تأشيرة كندا",
  aboutText:
    "نساعدك في تجهيز ملف تأشيرة كندا سواء للسياحة أو الدراسة، مع مراجعة المستندات وتوضيح المتطلبات حسب نوع التأشيرة.",
  aboutNote:
    "تختلف المتطلبات ومدة المعالجة حسب نوع التأشيرة وحالة مقدم الطلب.",
  selectorTitle: "اختر نوع التأشيرة",
  requirementsTitle: "المتطلبات المطلوبة للتقديم",
  variants: canadaVisaTypes.map((visa) => ({
    id: visa.id,
    name: visa.title,
    title: visa.title,
    icon: visa.icon,
    subtitle: visa.subtitle,
    country: "كندا",
    price: visa.price,
    duration: visa.duration,
    status: "الحالة: متاحة للتقديم",
    typeLabel: visa.id === "tourist" ? "سياحية" : "دراسية",
    requirements: visa.requirements,
    notes: visa.notes,
    faqs: visa.faqs,
    whatsappName: visa.title,
    preApplyNote: `المتطلبات التالية خاصة بالتقديم على ${visa.title}، وقد تختلف حسب حالة مقدم الطلب أو تحديثات السفارة الكندية.`,
  })),
  relatedVisas: [
    {
      href: "/usa",
      flag: "🇺🇸",
      title: "تأشيرة أمريكا",
      text: "خدمات التأشيرات السياحية والدراسية لأمريكا.",
    },
    {
      href: "/australia",
      flag: "🇦🇺",
      title: "تأشيرة أستراليا",
      text: "تأشيرات سياحية ودراسية إلكترونية بخطوات سهلة.",
    },
    {
      href: "/uae",
      flag: "🇦🇪",
      title: "تأشيرة الإمارات",
      text: "تأشيرة إلكترونية لمقيمي دول مجلس التعاون الخليجي.",
    },
  ],
};

export const ukVisaPage: VisaPageData = {
  slug: "uk",
  status: "active",
  title: "تصريح بريطانيا الإلكتروني",
  highlightedTitle: "ETA",
  description:
    "تصريح سفر إلكتروني للسعوديين يتيح زيارة بريطانيا للسياحة أو الدراسة قصيرة المدة.",
  seo: {
    title: "استخراج تأشيرة بريطانيا للسعوديين | رحلتنا للتأشيرات",
    description:
      "خدمة استخراج تأشيرة بريطانيا للسعوديين مع تجهيز الملف، حجز الموعد، والمتابعة خطوة بخطوة عبر واتساب.",
    openGraphTitle: "استخراج تأشيرة بريطانيا للسعوديين",
    openGraphDescription:
      "نساعدك في استخراج تأشيرة بريطانيا وتجهيز الملف والمتطلبات بسهولة.",
  },
  heroIcon: "🇬🇧",
  aboutTitle: "ما هو تصريح بريطانيا ETA؟",
  aboutText:
    "تصريح ETA هو تصريح سفر إلكتروني يسمح للمسافرين المؤهلين بدخول بريطانيا للسياحة أو الدراسة قصيرة المدة، ويتم التقديم عليه إلكترونيًا دون الحاجة لزيارة السفارة.",
  aboutNote: "التصريح صالح لمدة سنتين، ويسمح بالإقامة حتى 6 أشهر لكل زيارة.",
  requirementsTitle: "المتطلبات",
  infoCards: [
    { label: "الصلاحية", value: "سنتين" },
    { label: "مدة الإقامة", value: "6 أشهر" },
    { label: "نوع التقديم", value: "إلكتروني" },
    { label: "البصمة", value: "غير مطلوبة" },
  ],
  variants: [
    {
      id: "uk-eta",
      name: ukVisa.title,
      title: ukVisa.title,
      icon: "🇬🇧",
      country: "بريطانيا",
      price: ukVisa.price,
      duration: ukVisa.duration,
      typeLabel: "إلكتروني",
      requirements: ukVisa.requirements,
      notes: ukVisa.notes,
      faqs: ukVisa.faqs,
      whatsappName: ukVisa.visaName,
      whatsappMessage: ukVisa.whatsappMessage,
    },
  ],
  relatedVisas: [
    {
      href: "/uae",
      flag: "🇦🇪",
      title: "تأشيرة الإمارات",
      text: "تأشيرة إلكترونية لمقيمي دول مجلس التعاون الخليجي.",
    },
    {
      href: "/australia",
      flag: "🇦🇺",
      title: "تأشيرة أستراليا",
      text: "تأشيرات سياحية ودراسية إلكترونية بخطوات سهلة.",
    },
    {
      href: "/canada",
      flag: "🇨🇦",
      title: "تأشيرة كندا",
      text: "خدمات التأشيرات السياحية والدراسية لكندا.",
    },
  ],
};

export const uaeVisaPage: VisaPageData = {
  slug: "uae",
  status: "active",
  title: "تأشيرة",
  highlightedTitle: "الإمارات",
  description:
    "تأشيرة إلكترونية لمقيمي دول مجلس التعاون الخليجي بخطوات سهلة وواضحة.",
  seo: {
    title: "استخراج تأشيرة الإمارات للسعوديين | رحلتنا للتأشيرات",
    description:
      "خدمة استخراج تأشيرة الإمارات السياحية بسرعة وسهولة مع متابعة الطلب وتجهيز المتطلبات.",
    openGraphTitle: "استخراج تأشيرة الإمارات",
    openGraphDescription:
      "نساعدك في استخراج تأشيرة الإمارات بخطوات سهلة وسريعة.",
    twitterTitle: "استخراج تأشيرة الإمارات",
    twitterDescription:
      "خدمة استخراج تأشيرة الإمارات للسعوديين.",
  },
  heroIcon: "🇦🇪",
  aboutTitle: "لمن تناسب تأشيرة الإمارات؟",
  aboutText:
    "هذه الخدمة مناسبة لمقيمي دول مجلس التعاون الخليجي الراغبين في زيارة الإمارات، مع تقديم إلكتروني دون الحاجة للحضور أو البصمة.",
  aboutNote:
    "يجب أن تكون صلاحية الإقامة أكثر من 6 أشهر من تاريخ العودة.",
  requirementsTitle: "المتطلبات",
  infoCards: [
    { label: "نوع التقديم", value: "إلكتروني" },
    { label: "الحضور", value: "غير مطلوب" },
    { label: "المدة", value: "4 - 15 يوم عمل" },
    { label: "الفئة", value: "مقيمي الخليج" },
  ],
  variants: [
    {
      id: "uae-gcc-resident",
      name: uaeVisa.title,
      title: uaeVisa.title,
      icon: "🇦🇪",
      country: "الإمارات",
      price: uaeVisa.price,
      duration: uaeVisa.duration,
      typeLabel: "إلكترونية لمقيمي دول الخليج",
      requirements: uaeVisa.requirements,
      notes: uaeVisa.notes,
      faqs: uaeVisa.faqs,
      whatsappName: uaeVisa.visaName,
      whatsappMessage: uaeVisa.whatsappMessage,
    },
  ],
  relatedVisas: [
    {
      href: "/uk",
      flag: "🇬🇧",
      title: "تصريح بريطانيا",
      text: "تصريح السفر الإلكتروني للسعوديين.",
    },
    {
      href: "/schengen",
      flag: "🇪🇺",
      title: "تأشيرة شنغن",
      text: "خدمات استخراج تأشيرات الشنغن لجميع الدول الأوروبية.",
    },
    {
      href: "/canada",
      flag: "🇨🇦",
      title: "تأشيرة كندا",
      text: "خدمات التأشيرات السياحية والدراسية لكندا.",
    },
  ],
};

export const australiaVisaPage: VisaPageData = {
  slug: "australia",
  status: "active",
  title: "تأشيرة",
  highlightedTitle: "أستراليا",
  description:
    "خدمات التأشيرات السياحية والدراسية لأستراليا بخطوات إلكترونية سهلة وواضحة.",
  seo: {
    title: "استخراج تأشيرة أستراليا للسعوديين | رحلتنا للتأشيرات",
    description:
      "استخراج تأشيرة أستراليا السياحية والدراسية مع تجهيز الملف ومتابعة الطلب خطوة بخطوة.",
    openGraphTitle: "استخراج تأشيرة أستراليا للسعوديين",
    openGraphDescription:
      "خدمة احترافية لاستخراج تأشيرة أستراليا بسهولة وسرعة.",
    twitterTitle: "استخراج تأشيرة أستراليا",
    twitterDescription:
      "خدمة استخراج تأشيرة أستراليا السياحية والدراسية.",
  },
  heroIcon: "🇦🇺",
  aboutTitle: "عن تأشيرة أستراليا",
  aboutText:
    "تأشيرة إلكترونية مناسبة للسياحة أو الدراسة القصيرة لمدة أقل من 3 أشهر، ويتم تجهيز الطلب إلكترونيًا دون الحاجة للحضور أو البصمة.",
  aboutNote:
    "في حال التقديم للدراسة، يجب إرفاق قبول الجهة التعليمية ضمن المستندات.",
  requirementsTitle: "المتطلبات",
  infoCards: [
    { label: "نوع التقديم", value: "إلكتروني" },
    { label: "المدة", value: "4 - 10 أيام" },
    { label: "نوع التأشيرة", value: "سياحية + دراسية" },
    { label: "البصمة", value: "غير مطلوبة" },
  ],
  variants: [
    {
      id: "australia-tourist-student",
      name: australiaVisa.title,
      title: australiaVisa.title,
      icon: "🇦🇺",
      country: "أستراليا",
      price: australiaVisa.price,
      duration: australiaVisa.duration,
      typeLabel: "سياحية + دراسية",
      requirements: australiaVisa.requirements,
      notes: australiaVisa.notes,
      faqs: australiaVisa.faqs,
      whatsappName: australiaVisa.visaName,
      whatsappMessage: australiaVisa.whatsappMessage,
    },
  ],
  relatedVisas: [
    {
      href: "/usa",
      flag: "🇺🇸",
      title: "تأشيرة أمريكا",
      text: "خدمات التأشيرات السياحية والدراسية لأمريكا.",
    },
    {
      href: "/uae",
      flag: "🇦🇪",
      title: "تأشيرة الإمارات",
      text: "تأشيرة إلكترونية لمقيمي دول مجلس التعاون الخليجي.",
    },
    {
      href: "/schengen",
      flag: "🇪🇺",
      title: "تأشيرة شنغن",
      text: "خدمات استخراج تأشيرات الشنغن لجميع الدول الأوروبية.",
    },
  ],
};

export const allVisaPages = [
  schengenVisaPage,
  usaVisaPage,
  canadaVisaPage,
  ukVisaPage,
  uaeVisaPage,
  australiaVisaPage,
];

export const activeVisaPages = allVisaPages.filter(
  (visa) => visa.status === "active"
);

export const publicVisaPages = allVisaPages.filter(
  (visa) => visa.status !== "draft"
);

export const sitemapVisaPages = allVisaPages.filter(
  (visa) => visa.status === "active"
);

export const visaPages = publicVisaPages;

export function getVisaPageBySlug(slug: string) {
  return publicVisaPages.find((visa) => visa.slug === slug);
}
