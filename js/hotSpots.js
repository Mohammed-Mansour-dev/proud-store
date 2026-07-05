      // 1. Lookbook Data Structure containing images, products, and their relative coordinate percentages
      const lookbookData = [
        {
          id: "look-1",
          image:
            "./images/watch.png",
          alt: "Beach dunes look",
          hotspots: [
            {
              id: "prod-luca",
              name: "ساعة براود ماركة ",
              description: "تروس فضة",
              price: "£115",
              x: 35.0, 
              y: 50.0,
            }
          ],
        },
        {
          id: "look-2",
          image:
            "./images/proudCollection.png",
          alt: "افضل تجميعه من براود",
          hotspots: [
            {
              id: "prod-mars",
              name: "ساعه براود سوداء",
              description: "ساعه الضمان الشامل",
              price: "110ر.س",
              x: 15.0,
              y: 60.5,
            },
            {
              id: "prod-edmund",
              name: "سبحة براود",
              description: "سبحة من الفضة الاصلية والاحجار الكريمة",
              price: "140ر.س",
              x: 40.0,
              y: 81.0,
            },
            {
              id: "prod-glasses",
              name: "نظارة براود",
              description: "نظارة شمسية",
              price: "70ر.س",
              x: 40.0,
              y: 47.0,
            },
          ],
        },
        {
          id: "look-3",
          image:
            "./images/kbak.webp",
          alt: "Shoreline look",
          hotspots: [
            {
              id: "prod-marvin",
              name: "كبك براود",
              description: "كبك من الفضة الاصلية",
              price: "50ر.س",
              x: 61.0,
              y: 77.0,
            },
          ],
        },
      ];

      // 2. DOM Rendering Logic
      const gridContainer = document.getElementById("lookbook-grid");

      function renderLookbook() {
        gridContainer.innerHTML = lookbookData
          .map(
            (look) => `
        <div class="relative group select-none">
          <img src="${look.image}" alt="${look.alt}" class=" max-sm:w-[300px] max-sm:max-w-max w-full h-full  max-sm:h-[500px] object-cover block" />
          
          ${look.hotspots
            .map(
              (spot) =>{
                const isBottomSide2 = spot.y > 65;
const cardVerticalClasses2 = isBottomSide2
    ? 'bottom-full mb-3 after:top-full after:border-t-white'
    : 'top-full mt-3 after:bottom-full after:border-b-white';


                return `
            <div class="absolute group/hotspot z-10" style="left: ${spot.x}%; top: ${spot.y}%;">
              
            <button
  onclick="toggleCard(event, '${spot.id}')"
  onmouseenter="toggleCard(event, '${spot.id}')"
  onmouseleave="toggleCard(event, '${spot.id}')"
  class="hotspot-pulse relative 
   w-5 h-5 bg-white border border-gray-400 z-10 rounded-full shadow-md focus:outline-none flex items-center justify-center cursor-pointer transition-transform duration-200"
  aria-label="View ${spot.name}"
>
                <span class="w-1.5 h-1.5 bg-gray-700 rounded-full"></span>
                <span class="w-5 absolute h-5 bg-white animate-ping -z-10 rounded-full"></span>
              </button>

              <div 
                id="card-${spot.id}"
  class="hidden absolute  bg-white p-4 shadow-2xl rounded border border-gray-100 min-w-[210px] max-w-[240px] text-right transform z-50 -translate-x-1/2 left-1/2 
                            ${cardVerticalClasses2}
                            after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent"              >
                <div class="flex flex-col justify-between items-start gap-2">
                  <div>
                    <h4 class="text-xs font-bold tracking-wider text-gray-900 uppercase">${spot.name}</h4>
                    <p class="text-[10px] text-gray-500 font-medium tracking-wide mt-0.5">${spot.description}</p>
                    <p class="text-xs font-semibold text-gray-800 mt-2">${spot.price}</p>
                  </div>
                  <button class="self-end mt-1 w-7 h-7 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                    <svg class="w-3 h-3 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </div>

            </div>
          `
            })
            .join("")}
        </div>
      `
          )
          .join("");
      }

      // 3. UI Interactions (Toggle pop-ups and auto-close when clicking outside)
      function toggleCard(event, spotId) {
        event.stopPropagation();

        const target = document.getElementById(`card-${spotId}`);
        const open = !target.classList.contains("hidden");

        document.querySelectorAll('[id^="card-"]').forEach((card) => {
          card.classList.add("hidden");
        });

        target.classList.toggle("hidden", open);
      }

      // Close popups when clicking anywhere else on the screen
      document.addEventListener("click", () => {
        document
          .querySelectorAll('[id^="card-"]')
          .forEach((card) => card.classList.add("hidden"));
      });

      // Initialize the grid layout on load
      renderLookbook();
