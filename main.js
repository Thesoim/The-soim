// 1. توليد كود SEO الخفي (Schema) تلقائياً من بيانات الألعاب
function generateGameSchema() {
    // نتأكد أن بيانات الألعاب موجودة
    if (typeof gamesData === 'undefined') return;

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": gamesData.map((game, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "SoftwareApplication",
                "name": game.title,
                "operatingSystem": "Android",
                "applicationCategory": "Game",
                "description": game.story,
                "softwareVersion": game.version,
                // 🔥 هنا السر: يرسل الكلمات لقوقل دون عرضها في الصفحة
                "keywords": game.keywords || "Android Game, Translation", 
                "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            }
        }))
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);
}

// تشغيل الـ SEO فوراً
generateGameSchema();

// إعدادات الصفحات
const itemsPerPage = 5;
let currentPage = 1;
const totalPages = Math.ceil(gamesData.length / itemsPerPage);

function showSection(sectionId) {
    document.querySelectorAll('.container').forEach(el => {
        el.classList.remove('active-section');
        el.style.display = 'none';
    });
    const activeEl = document.getElementById(sectionId);
    activeEl.style.display = 'block';
    setTimeout(() => activeEl.classList.add('active-section'), 10);

    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    if(sectionId === 'home') document.querySelectorAll('.nav-btn')[0].classList.add('active');
    if(sectionId === 'games') document.querySelectorAll('.nav-btn')[1].classList.add('active');
    if(sectionId === 'accounts') document.querySelectorAll('.nav-btn')[2].classList.add('active');
}

function renderGames(page) {
    const grid = document.getElementById('gamesGrid');
    if (!grid) return;
    grid.innerHTML = '';
    
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const gamesToShow = gamesData.slice(start, end);

    gamesToShow.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.onclick = (e) => {
            if(!e.target.classList.contains('arrow') && !e.target.classList.contains('download-btn')) {
                openGameDetails(game);
            }
        };

        let imagesHtml = '';
        game.images.forEach((img, index) => {
            imagesHtml += `<img src="${img}" class="slider-img ${index === 0 ? 'active' : ''}" data-idx="${index}">`;
        });

        card.innerHTML = `
            <div class="slider-container">
                ${imagesHtml}
                <div class="slider-nav">
                    <div class="arrow" onclick="moveSlide(this, -1)">&#10094;</div>
                    <div class="arrow" onclick="moveSlide(this, 1)">&#10095;</div>
                </div>
            </div>
            <div class="game-title">${game.title}</div>
            <a href="${game.downloadLink}" class="download-btn" target="_blank">تحميل</a>
            <div class="game-info-small">${game.version} | ${game.size}</div>
            <div class="game-info-small">${game.platform}</div>
        `;
        grid.appendChild(card);
    });

    const pageInfo = document.getElementById('pageInfo');
    if(pageInfo) pageInfo.innerText = `${currentPage} / ${totalPages}`;
}

function moveSlide(btn, direction) {
    const container = btn.parentElement.parentElement;
    const images = container.querySelectorAll('.slider-img');
    let activeIndex = 0;
    images.forEach((img, index) => {
        if (img.classList.contains('active')) {
            activeIndex = index;
            img.classList.remove('active');
        }
    });
    let newIndex = activeIndex + direction;
    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;
    images[newIndex].classList.add('active');
}

function changePage(direction) {
    const newPage = currentPage + direction;
    if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        renderGames(currentPage);
        window.scrollTo(0, 0);
    }
}

function openGameDetails(game) {
    const detailTitle = document.getElementById('detailTitle');
    const detailImage = document.getElementById('detailImage');
    const detailStory = document.getElementById('detailStory');
    const detailTime = document.getElementById('detailTime');
    const detailEndings = document.getElementById('detailEndings');
    const btnContainer = document.getElementById('detailButtons');
    const instructBox = document.getElementById('instructionsArea');
    const view = document.getElementById('gameDetailView');

    if (detailTitle) detailTitle.innerText = game.title;
    if (detailImage) detailImage.src = game.images[0];
    if (detailStory) detailStory.innerText = game.story;
    if (detailTime) detailTime.innerText = game.timeToBeat;
    if (detailEndings) detailEndings.innerText = game.endings;

    if (btnContainer) {
        btnContainer.innerHTML = `<a href="${game.downloadLink}" class="big-btn" target="_blank">تحميل اللعبة</a>`;
        
        if (game.extraLink) {
            const extraBtn = document.createElement('a');
            extraBtn.href = game.extraLink;
            extraBtn.className = 'big-btn';
            extraBtn.innerText = game.extraText;
            extraBtn.target = "_blank";
            btnContainer.appendChild(extraBtn);
        }

        if (game.hasInstructions) {
            const instructBtn = document.createElement('button');
            instructBtn.className = 'big-btn';
            instructBtn.innerText = "طريقة إضافة التعريب";
            instructBtn.style.background = "#2a2a2a";
            instructBtn.onclick = () => {
                instructBox.style.display = 'block';
            };
            btnContainer.appendChild(instructBtn);
            
            if (instructBox) {
                instructBox.innerHTML = `
                    <h4 style="color:var(--accent-red); margin-bottom:10px;">طريقة إضافة التعريب :</h4>
                    <p>1. استخدم تطبيق ZArchiver.</p>
                    <p>2. استخرج ملف التعريب وسيظهر لك مجلد باسم Telltale.</p>
                    <p>3. انقل مجلد Telltale إلى ذاكرة الهاتف الداخلية بجانب مجلدات: Download و Android.</p>
                `;
                instructBox.style.display = 'none';
            }
        }
    }

    if (view) view.style.display = 'block';
}

function closeGameDetail() {
    const view = document.getElementById('gameDetailView');
    if (view) view.style.display = 'none';
}

// تشغيل الألعاب عند التحميل
renderGames(currentPage);
