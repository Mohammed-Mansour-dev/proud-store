
const collectionData = [
    { link: "https://www.deraahstore.com/ar_sa/accessories/men-accessories/proud-accessories", title: "براود | نظارة براود رجالي PD004 C.2", price: "230.00", img: "./images/glasses.jpg" },
    { link: "https://www.deraahstore.com/ar_sa/accessories/men-accessories/proud-accessories", title: "براود | حقيبة يد رجالي براود اسود L2305093-A", price: "130.00", img: "./images/handBag.jpg" },
    { link: "https://www.deraahstore.com/ar_sa/accessories/men-accessories/proud-accessories", title: "براود | قلم براود بول بوينت", price: "130.00", img: "./images/pen.webp" }, 
    { link: "https://www.deraahstore.com/ar_sa/accessories/men-accessories/proud-accessories", title: "براود | خاتم براود فضة-RA5891", price: "130.00", img: "./images/ring.jpg" },
    { link: "https://www.deraahstore.com/ar_sa/accessories/men-accessories/proud-accessories", title: "براود | كبك روز جولد براود", price: "60.00", img: "./images/kbak2.webp" },
    { link: "https://www.deraahstore.com/ar_sa/accessories/men-accessories/proud-accessories", title: "براود | سبحة عقيق براود", price: "79.00", img: "./images/rosary.webp" },
];

const collectionContainer = document.getElementById('collectionContainer');
const prevBtnCollection = document.getElementById('prevBtnCollection');
const nextBtnCollection = document.getElementById('nextBtnCollection');
const collectionIndicator = document.getElementById('collectionCustomScrollIndicator');

// إنشاء وتوليد البطاقات ديناميكياً بناءً على الصورة والمطلوب بدقة
collectionContainer.innerHTML = collectionData.map(item => `
            <a href="${item.link}" class="flex-none w-64 sm:w-72 bg-[#EAE7E2] text-gray-900 flex flex-col justify-between p-4 relative group/card select-none">
                
                <div class="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                    <span class="bg-[#4D6575] text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wide">جديد</span>
                    <button class="text-gray-500 hover:text-red-500 transition-colors cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
                    </button>
                </div>

                <div class="h-64 w-full flex items-center justify-center mix-blend-multiply my-2">
                    <img src="${item.img}" alt="${item.title}" class="max-h-full max-w-full object-contain p-2 mix-blend-multiply" loading="lazy">
                </div>

                <div class="mt-4 flex flex-col justify-end relative">
                    <h3 class="text-xs font-medium text-gray-800 tracking-tight leading-snug line-clamp-2 h-8 pl-8">${item.title}</h3>
                    <div class="text-sm font-bold text-gray-900 mt-2">$${item.price}</div>
                    
                    <button class="absolute left-0 bottom-0 bg-black hover:bg-neutral-800 text-white p-2 rounded-full shadow transition-all cursor-pointer flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
                    </button>
                </div>
            </a>
        `).join('');

// حساب وإدارة التمرير وحركة المقبض السفلي لشريط التمرير بدقة RTL
function updateScrollIndicator() {
    const maxScrollable = collectionContainer.scrollWidth - collectionContainer.clientWidth;
    if (maxScrollable <= 0) return;

    const currentScrolled = Math.abs(collectionContainer.scrollLeft);
    const scrollFraction = currentScrolled / maxScrollable;
    const viewRatio = collectionContainer.clientWidth / collectionContainer.scrollWidth;

    const handleWidth = Math.max(viewRatio * 100, 15);
    collectionIndicator.style.width = `${handleWidth}%`;

    const freeTrackSpace = 100 - handleWidth;
    const dynamicRightPos = scrollFraction * freeTrackSpace;

    collectionIndicator.style.right = `${dynamicRightPos}%`;
}

collectionContainer.addEventListener('scroll', updateScrollIndicator);
window.addEventListener('resize', updateScrollIndicator);
setTimeout(updateScrollIndicator, 150);

// وظائف أزرار التنقل السلس للتمرير لليمين واليسار المخصصة للمحيط العربي
const stepSize = 310;
nextBtnCollection.addEventListener('click', () => collectionContainer.scrollBy({ left: -stepSize, behavior: 'smooth' }));
prevBtnCollection.addEventListener('click', () => collectionContainer.scrollBy({ left: stepSize, behavior: 'smooth' }));

// خاصية السحب المباشر بواسطة الماوس للمستخدمين على الحواسب الشخصية (Drag to Scroll)
let activeDrag = false; let initialX; let baseScroll;

collectionContainer.addEventListener('mousedown', (e) => {
    activeDrag = true;
    collectionContainer.style.scrollBehavior = 'auto';
    initialX = e.pageX - collectionContainer.offsetLeft;
    baseScroll = collectionContainer.scrollLeft;
});
collectionContainer.addEventListener('mouseleave', () => activeDrag = false);
collectionContainer.addEventListener('mouseup', () => {
    activeDrag = false;
    collectionContainer.style.scrollBehavior = 'smooth';
});
collectionContainer.addEventListener('mousemove', (e) => {
    if (!activeDrag) return;
    e.preventDefault();
    const currentX = e.pageX - collectionContainer.offsetLeft;
    const shiftAmount = (currentX - initialX) * 1.4;
    collectionContainer.scrollLeft = baseScroll - shiftAmount;
});
