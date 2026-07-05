 const newArrivalsData = [
        { title: "جواهر خفية | أقراط دراجون فاير الفضية 925", tag: "فضة إسترلينية", price: "44.90", img: "https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/blt572c468c044e25d3/6a3929059e876961ee9c02bf/Pack_39877-BlueFront_copy.jpg?format=pjpg&auto=webp&quality=75%2C90&width=3840" },
        { title: "جواهر خفية | أقراط بليز الفضية الصغيرة الدائرية", tag: "فضة إسترلينية", price: "44.90", img: "https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/blt6b26755d569c7c5f/6a39288d4fb300e4779d6d47/pack_39867-Blue-Front_copy.jpg?format=pjpg&auto=webp&quality=75%2C90&width=3840" },
        { title: "جواهر خفية | عقد فروست الفضي نقي التصميم والأناقة", tag: "فضة إسترلينية", price: "275.00", img: "https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/blt3d632e07df9a6b9b/6a3926ebe7d21c1c1a835fe6/Pack_39822-Front-Hidden-GEM.jpg?format=pjpg&auto=webp&quality=75%2C90&width=3840" },
        { title: "جواهر خفية | عقد الأبدية دراجون فاير الملكي النادر", tag: "فضة إسترلينية", price: "275.00", img: "https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/blte991ef10e7b45403/6a3928ef3aa710324c258c49/Pack_39875-Red-Front_copy.jpg?format=pjpg&auto=webp&quality=75%2C90&width=3840" },
        { title: "جواهر خفية | سلسلة بليز الكلاسيكية الفاخرة المجدولة", tag: "فضة إسترلينية", price: "275.00", img: "https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/blt84c5299a893bf5c6/6a392a1c493af405d1edda35/pack_39897-Blue-Front.jpg?format=pjpg&auto=webp&quality=75%2C90&width=3840" },
        { title: "جواهر خفية | سوار الحلقات المتصلة المصقول بعناية", tag: "فضة إسترلينية", price: "119.00", img: "https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/blt289885f45261f532/6a39276fe7d21c3257835fea/pack_39843-Orange-Front_copy.jpg?format=pjpg&auto=webp&quality=75%2C90&width=3840" },
        { title: "جواهر خفية | خلخال نيو ويف الفضي المرصع اللامع", tag: "فضة إسترلينية", price: "135.00", img: "https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/blt68b76034a4643a56/6a39296b725547defafc9c92/pack_39887-Orange-Front.jpg?format=pjpg&auto=webp&quality=75%2C90&width=3840" },
        { title: "جواهر خفية | قلادة عين النمر مع الطوق الفضي النقي", tag: "فضة إسترلينية", price: "195.00", img: "https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/bltd3aef6db0ac82a66/6a392865b1a3232ed43ace62/pack_39863-Orange-Front.jpg?format=pjpg&auto=webp&quality=75%2C90&width=3840" },
        { title: "جواهر خفية | سوار الفسيفساء المتناسق بألوان الطيف", tag: "فضة إسترلينية", price: "160.00", img: "https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/blt9f2c1f4e6db8ca6e/6a4608545a61cf277391765a/pack_39881-Multicolor-Front-a.jpg?format=pjpg&auto=webp&quality=75%2C90&width=3840" },
        { title: "جواهر خفية | طقم الأقراط العصرية بلمسة زيتونية فريدة", tag: "فضة إسترلينية", price: "85.00", img: "https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/blt135a5231331d06de/6a392789a1c5066b65507e1b/pack_39845-OliveGreen-Front_copy.jpg?format=pjpg&auto=webp&quality=75%2C90&width=3840" }
    ];

    // حقن الكروت بشكل ديناميكي متطابق مع الأبعاد والهيكل المطلوب
    const newContainer = document.getElementById('newArrivalsContainer');
    newContainer.innerHTML = newArrivalsData.map(item => `
        <a href="?" class="flex-none w-64 sm:w-72 bg-[#EAE7E2] text-gray-900 flex flex-col justify-between p-4 relative select-none">
            
            <div class="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                <span class="bg-[#4D6575] text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wide">جديد</span>
                <button class="text-gray-400 hover:text-red-500 transition-colors cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
                </button>
            </div>

            <div class="h-64 w-full flex items-center justify-center mix-blend-multiply my-2">
                <img src="${item.img}" alt="${item.title}" class="max-h-full max-w-full object-contain p-2 mix-blend-multiply" loading="lazy">
            </div>

            <div class="mt-4 flex flex-col justify-end relative">
                <span class="text-[10px] sm:text-[12px] bg-stone-300 px-1 w-fit text-gray-500 font-medium mb-1 tracking-wide block">${item.tag}</span>
                <h3 class="text-xs sm:text-sm font-semibold text-gray-800  line-clamp-2  pl-8">${item.title}</h3>
                <p class="text-sm sm:text-base font-bold text-gray-900 mt-2">$${item.price}</p>
                
                <button class="absolute left-0 bottom-0 bg-black hover:bg-neutral-800 text-white p-2 rounded-full shadow transition-all cursor-pointer flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
                </button>
            </div>
        </a>
    `).join('');

    // إدارة وضبط حركة شريط التمرير والأزرار بشكل مستقل
    const newIndicator = document.getElementById('newScrollIndicator');
    
    function updateNewIndicator() {
        const maxScrollable = newContainer.scrollWidth - newContainer.clientWidth;
        if (maxScrollable <= 0) return;
        
        const currentScrolled = Math.abs(newContainer.scrollLeft);
        const scrollFraction = currentScrolled / maxScrollable;
        const viewRatio = newContainer.clientWidth / newContainer.scrollWidth;
        
        const handleWidth = Math.max(viewRatio * 100, 14);
        newIndicator.style.width = `${handleWidth}%`;
        
        const freeTrackSpace = 100 - handleWidth;
        const dynamicRightPos = scrollFraction * freeTrackSpace;
        
        newIndicator.style.right = `${dynamicRightPos}%`;
    }

    newContainer.addEventListener('scroll', updateNewIndicator);
    window.addEventListener('resize', updateNewIndicator);
    setTimeout(updateNewIndicator, 150);

    // ربط أزرار التحكم الفردية للقسم
    const moveStep = 320;
    document.getElementById('newNextBtn').addEventListener('click', () => newContainer.scrollBy({ left: -moveStep, behavior: 'smooth' }));
    document.getElementById('newPrevBtn').addEventListener('click', () => newContainer.scrollBy({ left: moveStep, behavior: 'smooth' }));

    // تفعيل ميزة السحب بالفأرة (Drag to Scroll) لهذا القسم
    let isNewDragging = false; let newStartX; let newScrollLeft;
    newContainer.addEventListener('mousedown', (e) => {
        isNewDragging = true;
        newContainer.style.scrollBehavior = 'auto';
        newStartX = e.pageX - newContainer.offsetLeft;
        newScrollLeft = newContainer.scrollLeft;
    });
    newContainer.addEventListener('mouseleave', () => isNewDragging = false);
    newContainer.addEventListener('mouseup', () => {
        isNewDragging = false;
        newContainer.style.scrollBehavior = 'smooth';
    });
    newContainer.addEventListener('mousemove', (e) => {
        if (!isNewDragging) return;
        e.preventDefault();
        const currentX = e.pageX - newContainer.offsetLeft;
        const shiftAmount = (currentX - newStartX) * 1.4;
        newContainer.scrollLeft = newScrollLeft - shiftAmount;
    });