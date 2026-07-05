
      // 1. مصفوفة كامل تصنيفات المنتجات (الأساسية والإضافية معاً)
      const allCategories = [
        // التصنيفات الأساسية (التي تظهر دائماً في البداية)
        { name: "أساور", isExtra: false },
        { name: "قلائد", isExtra: false },
        { name: "ساعات", isExtra: false },
        { name: "خواتم", isExtra: false },
        { name: "أقراط", isExtra: false },
        { name: "مجوهرات ثقب الجسم", isExtra: false },
        { name: "ربطات عنق", isExtra: false },
        { name: "ربطات عنق بوبون", isExtra: false },
        { name: "حمالات بنطال", isExtra: false },
        { name: "مظلات ومشابك عنق", isExtra: false },
        { name: "أزرار أكمام", isExtra: false },

        // التصنيفات الإضافية (تظهر فقط عند الضغط على عرض المزيد)
        { name: "مناديل جيب الجاكيت", isExtra: true },
        { name: "دبابيس جاكيت البدلة", isExtra: true },
        { name: "أحزمة", isExtra: true },
        { name: "حقائب", isExtra: true },
        { name: "محافظ", isExtra: true },
        { name: "قبعات", isExtra: true },
        { name: "أوشحة وشالات", isExtra: true },
        { name: "قفازات", isExtra: true },
        { name: "تيشرتات وبروتيلات", isExtra: true },
      ];

      // متغير لمراقبة حالة فتح وإغلاق القائمة الإضافية
      let isMenuExpanded = false;
      const gridContainerBtns = document.getElementById("catGridContainer");

      // 2. دالة بناء ورسم الأزرار بناءً على الحالة الحالية للزر
      function renderCategories() {
        // تصفية العناصر: إذا كانت القائمة مغلقة، نعرض فقط العناصر غير الإضافية
        const visibleCategories = allCategories.filter(
          (cat) => !cat.isExtra || isMenuExpanded,
        );

        // إنشاء الهيكل البرمجي للأزرار
        let htmlContent = visibleCategories
          .map(
            (cat) => `
            <a href="#" class="bg-neutral-600 hover:bg-neutral-700 text-white text-xs md:text-sm font-medium px-5 py-2.5 rounded-full transition-colors duration-200 tracking-wider inline-block">
                ${cat.name}
            </a>
        `,
          )
          .join("");

        // إضافة زر التحكم الديناميكي (عرض المزيد / عرض أقل) في نهاية المصفوفة دائماً
        const actionButtonText = isMenuExpanded ? "عرض أقل" : "عرض المزيد";
        htmlContent += `
            <button id="catGridToggleBtn" class="text-white hover:text-gray-300 text-xs md:text-sm font-semibold px-5 py-2.5 tracking-wider cursor-pointer underline underline-offset-4 transition-all">
                ${actionButtonText}
            </button>
        `;

        // حقن المحتوى داخل الحاوية الأساسية
        gridContainerBtns.innerHTML = htmlContent;

        // إعادة ربط حدث الضغط بالزر الجديد بعد إعادة بناء المحتوى
        document
          .getElementById("catGridToggleBtn")
          .addEventListener("click", () => {
            isMenuExpanded = !isMenuExpanded; // عكس الحالة الحالية
            renderCategories(); // إعادة بناء الأزرار فوراً
          });
      }

      // 3. تشغيل الدالة للمرة الأولى عند تحميل الصفحة
      renderCategories();
    