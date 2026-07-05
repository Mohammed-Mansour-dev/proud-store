  // 1. Unified Structured Data Array
        const productsData = [
            { title: "وصلنا حديثاً", img: "./images/recentlyArrivedjpg.jpg" },
            { title: "الأكثر مبيعاً", img: "./images/newArrivals2.jpg" },
            { title: "العلامات التجارية", img: "https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/blte0cf26e5ccbe43dd/678a2e6b5732c526949b0ac0/33176-1.jpg?format=pjpg&auto=webp&quality=75%2C90&width=256" },
            { title: "قلائد", img: "https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/bltab0f2bcdecbc9300/69bbc92d132e7766552b1b15/necklace_1.jpg?format=pjpg&auto=webp&quality=75%2C90&width=256" },
            { title: "أساور", img: "https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/blt15998bda8221c99f/69bbc94e78da064cfc1c271b/image_262.jpg?format=pjpg&auto=webp&quality=75%2C90&width=256" },
            { title: "ساعات", img: "https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/blt4a6e896ac19aa832/69bbc8fa65cf385afe1f89e8/image_263.jpg?format=pjpg&auto=webp&quality=75%2C90&width=256" },
            { title: "خواتم", img: "https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/bltf652416d1cc38f29/69bbc8c365cf382d771f89e4/ring_1.jpg?format=pjpg&auto=webp&quality=75%2C90&width=256" },
            { title: "نظارات", img: "https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/bltc7f60cf3479e13ff/655737b29d8002040acbbbb6/2-1-yvanglasss.jpg?format=pjpg&auto=webp&quality=75%2C90&width=256" },
            { title: "إكسسوارات البدلة", img: "https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/bltbe5b42fab8c68739/663b305478d650f4e9918213/15_151.jpg?format=pjpg&auto=webp&quality=75%2C90&width=256" },
            { title: "وصلنا حديثاً", img: "https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/blt67cd7b9775ef5067/6a3923e4dbc3ff41ee4b941f/Pack_39780-Front-Hidden-GEM.jpg?format=pjpg&auto=webp&quality=75%2C90&width=256" },
            { title: "الأكثر مبيعاً", img: "https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/bltabab130f7444bdcf/679ce62632968951d32ed2ab/9633-1.jpg?format=pjpg&auto=webp&quality=75%2C90&width=256" },
            { title: "العلامات التجارية", img: "https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/blte0cf26e5ccbe43dd/678a2e6b5732c526949b0ac0/33176-1.jpg?format=pjpg&auto=webp&quality=75%2C90&width=256" },
            { title: "قلائد", img: "https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/bltab0f2bcdecbc9300/69bbc92d132e7766552b1b15/necklace_1.jpg?format=pjpg&auto=webp&quality=75%2C90&width=256" },
            ];

        const container = document.getElementById('scrollContainer');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const indicator = document.getElementById('scrollIndicator');

        // 2. Dynamic Card Generation using .map()
        container.innerHTML = productsData.map((item, index) => {
            // Apply text decoration to the last element matching the reference layout
            const isLast = index === productsData.length - 1 ? 'underline underline-offset-4' : '';
            return `
                <a href="?${item.title}" class="contents">
                <div class="flex-none group w-44 sm:w-52 md:w-56 bg-[#F0EDE9] flex flex-col items-center justify-between py-10 transition-transform duration-300 hover:scale-[1.02]">
                    <div class="h-36 flex w-full items-center justify-center mix-blend-multiply">
                        <img src="${item.img}" alt="${item.title}" class="max-h-full w-full object-cover" loading="lazy">
                    </div>
                    <p class="text-xs group-hover:underline md:text-sm font-bold text-gray-800 tracking-wider mt-6 text-center ${isLast}">${item.title}</p>
                </div>
                </a>
            `;
        }).join('');

        // 3. Progress Scrollbar Indicator Logic (RTL Configured)
        function updateIndicator() {
            const scrollWidth = container.scrollWidth - container.clientWidth;
            if (scrollWidth <= 0) return;
            
            const scrolledFraction = Math.abs(container.scrollLeft) / scrollWidth;
            const visibleRatio = container.clientWidth / container.scrollWidth;
            
            const indicatorWidthPct = Math.max(visibleRatio * 100, 12); 
            indicator.style.width = `${indicatorWidthPct}%`;
            
            const availableSpacePct = 100 - indicatorWidthPct;
            const rightPosition = scrolledFraction * availableSpacePct;
            
            indicator.style.right = `${rightPosition}%`;
        }

        container.addEventListener('scroll', updateIndicator);
        window.addEventListener('resize', updateIndicator);
        setTimeout(updateIndicator, 100);

        // 4. Button Navigation Operations
        const scrollAmount = 320; 
        nextBtn.addEventListener('click', () => container.scrollBy({ left: -scrollAmount, behavior: 'smooth' }));
        prevBtn.addEventListener('click', () => container.scrollBy({ left: scrollAmount, behavior: 'smooth' }));

        // 5. Drag-to-Scroll Mechanism
        let isDown = false; let startX; let scrollLeft;

        container.addEventListener('mousedown', (e) => {
            isDown = true;
            container.style.scrollBehavior = 'auto'; 
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });
        container.addEventListener('mouseleave', () => isDown = false);
        container.addEventListener('mouseup', () => {
            isDown = false;
            container.style.scrollBehavior = 'smooth';
        });
        container.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 1.5; 
            container.scrollLeft = scrollLeft - walk;
        });
  