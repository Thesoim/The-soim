// --- قائمة الألعاب ---
// تم تحديث الكلمات المفتاحية لتشمل (تعريب، معربة، Arabic، للاندرويد) لجميع الألعاب
const gamesData = [
    {                           
        title: "OMORI",
        images: ["omori1.png", "omori2.png", "omori3.png"],
        downloadLink: "https://github.com/Thesoim/me-games-/releases/download/1.2/OMORI.apk",
        version: "v1.0.8.1",
        size: "993MB",
        platform: "Android",
        story: "لعبة رعب نفسي سريالية. استكشف عالمًا غريبًا مليئًا بالأصدقاء والأعداء الملونين. تنقل بين الواقع والخيال لكشف حقيقة منسية ومؤلمة.",
        timeToBeat: "20 ساعة",
        endings: "4 نهايات",
        keywords: "تعريب OMORI للاندرويد, OMORI معربة, OMORI Arabic, تحميل أوموري بالعربي, لعبة أوموري معربة, OMORI APK Arabic, تعريب لعبة OMORI, ذا سويم OMORI"
    },
    {
        title: "Loop Hero",
        images: ["loop1.png", "loop2.png", "loop3.png", "loop4.png"],
        downloadLink: "https://pixeldrain.com/u/eeXoB7N4",
        version: "v1.0.5",
        size: "208MB",
        platform: "Android",
        story: "يقع العالم في حلقة زمنية لا نهائية أغرقته في فوضى شاملة. استخدم مجموعة من البطاقات الغامضة لوضع الأعداء والمباني والتضاريس للبطل الشجاع في رحلته لكسر الدائرة.",
        timeToBeat: "20 - 30 ساعة",
        endings: "3 نهايات",
        keywords: "تعريب Loop Hero للاندرويد, Loop Hero معربة, Loop Hero Arabic, تحميل لوب هيرو بالعربي, لعبة Loop Hero معربة, Loop Hero APK Arabic, تعريب لعبة Loop Hero"
    },
    {
        title: "Door Kickers",
        images: ["door1.png", "door2.png", "door3.png"],
        downloadLink: "https://pixeldrain.com/u/XWpk8zzw",
        version: "v1.1.35",
        size: "467MB",
        platform: "Android",
        story: "لعبة استراتيجية تكتيكية تتحكم فيها بفريق SWAT. قم بتحليل الموقف، خطط لمسارات الاقتحام، واختر المعدات المناسبة لإنقاذ الرهائن والقضاء على الأشرار.",
        timeToBeat: "غير محدد",
        endings: "نظام مراحل",
        keywords: "تعريب Door Kickers للاندرويد, Door Kickers معربة, Door Kickers Arabic, تحميل دور كيكرز بالعربي, لعبة Door Kickers معربة, Door Kickers APK Arabic, لعبة سوات تكتيكية"
    },
    {
        title: "Twilight Railway",
        images: ["twilight1.png", "twilight2.png", "twilight3.png"],
        downloadLink: "https://pixeldrain.com/u/KDnCt4eD",
        version: "v1.0.0",
        size: "187MB",
        platform: "Android",
        story: "رواية بصرية مؤثرة تدور أحداثها في قطار يسافر عبر عالم غامض عند الغسق. استكشف قصص الركاب ووجهاتهم في رحلة هادئة ومليئة بالمشاعر.",
        timeToBeat: "2 - 4 ساعات",
        endings: "نهاية واحدة",
        keywords: "تعريب Twilight Railway للاندرويد, Twilight Railway معربة, Twilight Railway Arabic, تحميل توايلايت ريلواي بالعربي, لعبة Twilight Railway معربة, رواية بصرية أندرويد"
    },
    {
        title: "The Wolf Among Us",
        images: ["wolf1.png", "wolf2.png", "wolf3.png"],
        downloadLink: "https://pixeldrain.com/u/5Goz2NnR",
        extraLink: "https://pixeldrain.com/u/homJHrvn",
        extraText: "ملف التعريب",
        hasInstructions: true,
        version: "v1.23",
        size: "2.34GB",
        platform: "Android",
        story: "مبنية على قصص Fables. العب دور Bigby Wolf وحقق في جريمة قتل وحشية في عالم مظلم ومليء بالغموض.",
        timeToBeat: "8 - 10 ساعات",
        endings: "حسب الخيارات",
        keywords: "تعريب The Wolf Among Us للاندرويد, The Wolf Among Us معربة, The Wolf Among Us Arabic, تحميل الذئب بيننا بالعربي, لعبة The Wolf Among Us معربة, The Wolf Among Us APK Arabic"
    },
    {
        title: "Seven Mysteries",
        images: ["sevenmysteries1.png", "sevenmysteries2.png", "sevenmysteries3.png"],
        downloadLink: "https://pixeldrain.com/u/vSY6Miye",
        version: "v1.7",
        size: "94MB",
        platform: "Android",
        story: "لعبة رعب أنمي خارقة للطبيعة. في بلدة صغيرة، تخفي المدرسة أسراراً مرعبة. استكشف الفصول والممرات المظلمة لكشف الحقيقة.",
        timeToBeat: "3 - 5 ساعات",
        endings: "متعددة",
        keywords: "تعريب Seven Mysteries للاندرويد, Seven Mysteries معربة, Seven Mysteries Arabic, تحميل الألغاز السبعة بالعربي, لعبة Seven Mysteries معربة, Seven Mysteries APK Arabic"
    },
    {
        title: "Undertale Red",
        images: ["UndertaleRed1.png", "UndertaleRed2.png", "UndertaleRed3.png"],
        downloadLink: "https://pixeldrain.com/u/1baa2Ci6",
        version: "v1.0.0",
        size: "27MB",
        platform: "Android",
        story: "معركة معجبين مشهورة تركز على قتال شخصية جديدة في عالم Undertale. تقدم تجربة قتالية فريدة.",
        timeToBeat: "30 دقيقة - 1 ساعة",
        endings: "قتل/رحمة",
        keywords: "تعريب Undertale Red للاندرويد, Undertale Red معربة, Undertale Red Arabic, تحميل أندرتيل ريد بالعربي, لعبة Undertale Red معربة, Undertale Red APK Arabic"
    },
    {
        title: "Our Monsoon Balcony",
        images: ["OurMonsoonBalcony1.png", "OurMonsoonBalcony2.png", "OurMonsoonBalcony3.png", "OurMonsoonBalcony4.png"],
        downloadLink: "https://pixeldrain.com/u/GCUTArQL",
        version: "v2.2.2",
        size: "14MB",
        platform: "Android",
        story: "لعبة فيزيائية وتأملية بسيطة. استرخ في شرفتك أثناء المطر، وتفاعل مع العناصر البيئية.",
        timeToBeat: "لا نهائية",
        endings: "لا يوجد",
        keywords: "تعريب Our Monsoon Balcony للاندرويد, Our Monsoon Balcony معربة, Our Monsoon Balcony Arabic, تحميل شرفتنا الموسمية بالعربي, لعبة Our Monsoon Balcony معربة, محاكي المطر أندرويد"
    },
    {
        title: "The Henry Stickmin Collection",
        images: ["TheHenryStickminCollection1.png", "TheHenryStickminCollection2.png"],
        downloadLink: "https://pixeldrain.com/u/qxzpD7fB",
        version: "v0.2",
        size: "411MB",
        platform: "Android",
        story: "مجموعة ألعاب كوميدية حيث تتحكم بـ Henry وتقرر مصيره عبر خيارات سخيفة.",
        timeToBeat: "4 - 6 ساعات",
        endings: "كثيرة جداً",
        keywords: "تعريب The Henry Stickmin Collection للاندرويد, Henry Stickmin معربة, Henry Stickmin Arabic, تحميل هنري ستيكمن بالعربي, لعبة Henry Stickmin Collection معربة, Henry Stickmin APK Arabic"
    },
    {
        title: "Stickman Completing the Mission",
        images: ["StickmanCompletingtheMission1.png", "StickmanCompletingtheMission2.png", "StickmanCompletingtheMission3.png"],
        downloadLink: "https://pixeldrain.com/u/5DEpMhTV",
        version: "v1.0",
        size: "269MB",
        platform: "Android",
        story: "الفصل الأخير من ملحمة Henry Stickmin. تحالفات متعددة ومسارات قصصية متشابكة.",
        timeToBeat: "2 - 3 ساعات",
        endings: "16 نهاية",
        keywords: "تعريب Completing the Mission للاندرويد, Completing the Mission معربة, Stickman Completing the Mission Arabic, تحميل هنري ستيكمن إتمام المهمة بالعربي, لعبة Completing the Mission معربة"
    }
];
