// 1. مصفوفة بيانات الـ Lookbook المحدثة بالإحداثيات ومسارات الصور
const lookbookData2 = [
    {
        id: "look-11",
        image: "./images/kbakandwatch.jpg",
        alt: "ساعة براود المخصصة",
        hotspots: [
            {
                id: "prod-mars",
                name: "ساعة براود المخصصة",
                description: "تصميم عصري مصقول مخصص للنحت اليدوي",
                price: "115ر.س",
                x: 25.0,
                y: 28.0
            },
            {
                id: "prod-marvin",
                name: "كبك براود المخصص",
                description: "تصميم عصري مصقول مخصص للنحت اليدوي",
                price: "30ر.س",
                x: 45.0,
                y: 78.0
            }
        ]
    },
    {
        id: "look-22",
        image: "./images/sabha.jpg",
        alt: "سبحة براود الهندسية المفتوحة",
        hotspots: [
            {
                id: "prod-sabha",
                name: "سبحة براود الهندسية المفتوحة",
                description: "مصممه بشكل هندسي مفتوح مع مساحة للنقش اليدوي",
                price: "10ر.س",
                x: 52.0,
                y: 45.0
            }
        ]
    },
    {
        id: "look-33",
        image: "./images/proudperfume.webp",
        alt: "عطر براود المخصص",
        hotspots: [
            {
                id: "prod-perfume",
                name: "عطر براود المخصص",
                description: "عطر براود ذو رائحة فريدة ومخصصة مع مساحة للنقش اليدوي",
                price: "170ر.س",
                x: 45.0,
                y: 42.0
            }
        ]
    }
];

// 2. دالة الرندرة وحقن البيانات والهياكل
const lookbookGrid2 = document.getElementById("lookbook-grid2");


function renderLookbookComponent2() {
    lookbookGrid2.innerHTML = lookbookData2.map(look => `
            <div class="flex-none w-[290px] sm:w-[320px] lg:w-full relative group select-none bg-gray-100 rounded-lg shadow-sm">
                <img src="${look.image}" alt="${look.alt}" class="w-full h-[440px] lg:h-[500px] object-cover block transition-transform duration-700 " />
                
                <div class="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                ${look.hotspots.map(spot => {
                    const isBottomSide = spot.y > 65;
const cardVerticalClasses = isBottomSide
    ? 'bottom-full mb-3 after:top-full after:border-t-white'
    : 'top-full mt-3 after:bottom-full after:border-b-white';


                    
                    return `
                    <div class="absolute z-20" style="left: ${spot.x}%; top: ${spot.y}%;">
                        
                        <button
                            onclick="toggleLookbookCard2(event, '${spot.id}')"
                            onmouseenter="openLookbookCard2('${spot.id}')"
                            onmouseleave="closeLookbookCard2('${spot.id}')"

                            class="relative w-5  h-5 border-white text-gray-900 border border-gray-300 shadow-xl rounded-full focus:outline-none flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110"
                            aria-label="عرض ${spot.name}"
                        >
                            <span class="w-3 h-3  bg-white rounded-full"></span>
                            <span class="w-5  absolute h-5 bg-white/60 animate-ping rounded-full -z-10"></span>
                        </button>

                        <div 
                            id="lookcard2-${spot.id}"
                             class="hidden absolute z-30 bg-white p-4 shadow-2xl rounded border border-gray-100 min-w-[210px] max-w-[240px] text-right transform -translate-x-1/2 left-1/2 
                            ${cardVerticalClasses}
                            after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent"
                        >
                            <div class="flex flex-col justify-between items-start gap-3 w-full">
                                <div class="w-full">
                                    <h4 class="text-xs font-bold text-gray-900 leading-tight">${spot.name}</h4>
                                    <p class="text-[10px] text-gray-500 font-medium leading-relaxed mt-1">${spot.description}</p>
                                    <p class="text-xs font-bold text-gray-900 mt-2">${spot.price}</p>
                                </div>
                                <button class="self-end mt-1 w-7 h-7 bg-black text-white rounded-full flex items-center justify-center hover:bg-neutral-800 transition-colors cursor-pointer shadow">
                                    <svg class="w-3 h-3 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"/>
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>
                `}).join("")}
            </div>
        `).join("");
}

// 3. الدوال البرمجية الذكية للتحكم بظهور الكروت وإغلاقها تلقائياً عند النقر الخارجي
function openLookbookCard2(spotId) {
    // إخفاء الكروت المفتوحة الأخرى أولاً لمنع التداخل والتعارض
    document.querySelectorAll('[id^="lookcard2-"]').forEach(card => card.classList.add("hidden"));
    const target = document.getElementById(`lookcard2-${spotId}`);
    if (target) target.classList.remove("hidden");
}

function closeLookbookCard2(spotId) {
    const target = document.getElementById(`lookcard2-${spotId}`);
    if (target) target.classList.add("hidden");
}

function toggleLookbookCard2(event, spotId) {
    event.stopPropagation();
    const target = document.getElementById(`lookcard2-${spotId}`);
    if (!target) return;

    const isCurrentlyOpen = !target.classList.contains("hidden");
    document.querySelectorAll('[id^="lookcard2-"]').forEach(card => card.classList.add("hidden"));

    if (!isCurrentlyOpen) {
        target.classList.remove("hidden");
    }
}

// إغلاق النوافذ المفتوحة تلقائياً بمجرد ضغط المستخدم على أي مكان فارغ بالخلفية
document.addEventListener("click", () => {
    document.querySelectorAll('[id^="lookcard2-"]').forEach(card => card.classList.add("hidden"));
});

// تشغيل وإطلاق البنية البرمجية فور تحميل الصفحة
renderLookbookComponent2();