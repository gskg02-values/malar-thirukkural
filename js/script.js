/* ==========================================================================
   MALAR KURALS — ZERO-MANUAL ORG-CHART & AUTOMATION ENGINE (js/script.js)
   --------------------------------------------------------------------------
   1. Loads Sections 1 & 2 from js/datas.js
   2. Auto-scans 1.jpg–133.jpg from images/ (or assets/images/)
   3. Automatically maps every chapter number (1–133) into the exact classical
      Thirukkural 3-Pillar / 13-Iyal Organization Chart
   4. Updates live counts on header + every Pillar & Iyal node automatically
   ========================================================================== */

// MASTER CLASSICAL THIRUKKURAL ARCHITECTURE (3 Pillars • 13 Iyals • 133 Chapters)
const KURAL_ARCHITECTURE = [
    {
        id: "aram",
        number: 1,
        tamilName: "அறத்துப்பால்",
        englishName: "Aram",
        theme: "Virtue & Inbuilt Ethics",
        start: 1,
        end: 38,
        totalChapters: 38,
        totalKurals: 380,
        iyals: [
            { id: "payiraviyal", num: 1, tamil: "பாயிரவியல்", translit: "Payiraviyal", english: "Prologue / Universal Foundations", start: 1, end: 4 },
            { id: "illaraviyal", num: 2, tamil: "இல்லறவியல்", translit: "Illaraviyal", english: "Domestic Virtue / Household Order", start: 5, end: 24 },
            { id: "thuravaraviyal", num: 3, tamil: "துறவறவியல்", translit: "Thuravaraviyal", english: "Ascetic Virtue / Detachment & Restraint", start: 25, end: 37 },
            { id: "oozhiyal", num: 4, tamil: "ஊழியல்", translit: "Oozhiyal", english: "Cosmic Law / Destiny", start: 38, end: 38 }
        ]
    },
    {
        id: "porul",
        number: 2,
        tamilName: "பொருட்பால்",
        englishName: "Porul",
        theme: "Governance, Strategy & Resource Logic",
        start: 39,
        end: 108,
        totalChapters: 70,
        totalKurals: 700,
        iyals: [
            { id: "arasiyal", num: 5, tamil: "அரசியல்", translit: "Arasiyal", english: "Sovereignty & Leadership", start: 39, end: 63 },
            { id: "amaichiyal", num: 6, tamil: "அமைச்சியல்", translit: "Amaichiyal", english: "Executive Counsel & Execution", start: 64, end: 73 },
            { id: "araniyal", num: 7, tamil: "அரணியல்", translit: "Araniyal", english: "Territory & Fortification (நாடு, அரண்)", start: 74, end: 75 },
            { id: "koozhiyal", num: 8, tamil: "கூழியல்", translit: "Koozhiyal", english: "Wealth & Resource Economics (பொருள் செயல்வகை)", start: 76, end: 76 },
            { id: "padaiyiyal", num: 9, tamil: "படையியல்", translit: "Padaiyiyal", english: "Protective Force & Courage (படைமாட்சி, படைச்செருக்கு)", start: 77, end: 78 },
            { id: "natpiyal", num: 10, tamil: "நட்பியல்", translit: "Natpiyal", english: "Alliances, Symbiosis & Networks", start: 79, end: 95 },
            { id: "kudiyiyal", num: 11, tamil: "குடியியல்", translit: "Kudiyiyal", english: "Citizenship & Community Ethics", start: 96, end: 108 }
        ]
    },
    {
        id: "inbam",
        number: 3,
        tamilName: "இன்பத்துப்பால்",
        englishName: "Inbam",
        theme: "Love, Harmony & Continuity",
        start: 109,
        end: 133,
        totalChapters: 25,
        totalKurals: 250,
        iyals: [
            { id: "kalaviyal", num: 12, tamil: "களவியல்", translit: "Kalaviyal", english: "Secret / Pre-Marital Love & Attraction", start: 109, end: 115 },
            { id: "karpiyal", num: 13, tamil: "கற்பியல்", translit: "Karpiyal", english: "Wedded / Enduring Love & Union", start: 116, end: 133 }
        ]
    }
];

// Global state
window.AUTO_DETECTED_IMAGES = [];
window.ACTIVE_IMAGES_FOLDER = "images/";
let activePillarId = "aram";   // Opens directly on Aram so the 3-tier Org Chart is immediately visible
let activeIyalId = "all";      // "all" shows all chapters within the active Pillar

document.addEventListener("DOMContentLoaded", function () {
    populateSectionOne();
    populateSectionTwo();
    setupNavigationModals();
    setupChapterReaderModal();
    setupOrgChartStaticButtons();

    initializeCounters();
    renderOrgChartAndGrid();   // Draw full Org Chart immediately even before scan finishes
    autoScanChapterImages();
});

/* --------------------------------------------------------------------------
   HELPERS: SAFE IMAGE LOADER & CLASSICAL CHAPTER-TO-IYAL ROUTER
   -------------------------------------------------------------------------- */
function setSafeImage(imgEl, src, isLogo) {
    if (!imgEl || !src) return;
    imgEl.classList.remove("missing-img");

    if (isLogo) {
        imgEl.style.display = "block";
        const fallback = document.getElementById("logo-fallback");
        if (fallback) fallback.style.display = "none";
    }

    imgEl.src = src;
}

// Automatically merges Aram (Chapters 1–38), Porul (Chapters 39–108), and Inbam (Chapters 109–133)
function getChaptersList() {
    const aram = typeof ARAM_CHAPTERS_DATA !== "undefined" && Array.isArray(ARAM_CHAPTERS_DATA)
        ? ARAM_CHAPTERS_DATA : [];
    const porul = typeof PORUL_CHAPTERS_DATA !== "undefined" && Array.isArray(PORUL_CHAPTERS_DATA)
        ? PORUL_CHAPTERS_DATA : [];
    const inbam = typeof INBAM_CHAPTERS_DATA !== "undefined" && Array.isArray(INBAM_CHAPTERS_DATA)
        ? INBAM_CHAPTERS_DATA : [];

    return aram.concat(porul, inbam);
}

// Helper to display the exact target filename for any upcoming chapter
function getDataFileNameForChapter(chapterNum) {
    if (chapterNum <= 38) return "js/aram-datas.js";
    if (chapterNum <= 108) return "js/porul-datas.js";
    return "js/inbam-datas.js";
}

// Automatically determines exact Pillar + Sub-Pillar (Iyal) from chapterNumber (1–133)
function findArchitectureForChapter(chapterNum) {
    for (let i = 0; i < KURAL_ARCHITECTURE.length; i++) {
        const pillar = KURAL_ARCHITECTURE[i];
        if (chapterNum >= pillar.start && chapterNum <= pillar.end) {
            const iyal = pillar.iyals.find(function (sub) {
                return chapterNum >= sub.start && chapterNum <= sub.end;
            });
            return { pillar: pillar, iyal: iyal || null };
        }
    }
    return { pillar: null, iyal: null };
}

function formatChapterRange(start, end) {
    return start === end ? "Chapter " + start : "Chapters " + start + "–" + end;
}

/* --------------------------------------------------------------------------
   1. POPULATE SECTION 1 & SECTION 2 (From js/datas.js)
   -------------------------------------------------------------------------- */
function populateSectionOne() {
    setSafeImage(document.getElementById("site-logo"), SITE_CONFIG.logoImage, true);
    setSafeImage(document.getElementById("hero-image"), SITE_CONFIG.heroImage, false);

    const titleEl = document.getElementById("main-title");
    const subtitleEl = document.getElementById("main-subtitle");
    if (titleEl) titleEl.textContent = SITE_CONFIG.mainTitle;
    if (subtitleEl) subtitleEl.textContent = SITE_CONFIG.mainSubtitle;
}

function populateSectionTwo() {
    document.getElementById("showcase-tamil-heading").textContent = FEATURED_SHOWCASE.tamilHeading;
    document.getElementById("showcase-english-heading").textContent = FEATURED_SHOWCASE.englishHeading;
    setSafeImage(document.getElementById("showcase-flower-img"), FEATURED_SHOWCASE.flowerImage, false);

    document.getElementById("showcase-kural-line1").textContent = FEATURED_SHOWCASE.kuralLine1;
    document.getElementById("showcase-kural-line2").textContent = FEATURED_SHOWCASE.kuralLine2;
    document.getElementById("showcase-message-title").textContent = FEATURED_SHOWCASE.messageTitle;
    document.getElementById("showcase-message-body").textContent = FEATURED_SHOWCASE.messageBody;
}

/* --------------------------------------------------------------------------
   2. ZERO-MANUAL IMAGE AUTO-SCANNER (Detects 1.jpg, 2.jpg, 3.jpg... Live!)
   -------------------------------------------------------------------------- */
function checkImageExists(url) {
    return new Promise(function (resolve) {
        const probe = new Image();
        probe.onload = function () { resolve(true); };
        probe.onerror = function () { resolve(false); };
        probe.src = url;
    });
}

async function autoScanChapterImages() {
    const foldersToTry = SITE_CONFIG.chapterImageFolders || ["images/", "assets/images/"];
    const ext = SITE_CONFIG.chapterImageExtension || ".jpg";
    const maxLimit = SITE_CONFIG.targetImages || 133;

    let detectedFolder = null;
    for (let i = 0; i < foldersToTry.length; i++) {
        const folder = foldersToTry[i];
        if (await checkImageExists(folder + "1" + ext)) {
            detectedFolder = folder;
            break;
        }
    }

    if (!detectedFolder) {
        updateCounterDisplay(0);
        renderOrgChartAndGrid();
        return;
    }

    window.ACTIVE_IMAGES_FOLDER = detectedFolder;
    window.AUTO_DETECTED_IMAGES = [];

    for (let num = 1; num <= maxLimit; num++) {
        const imagePath = detectedFolder + num + ext;
        const exists = num === 1 ? true : await checkImageExists(imagePath);
        if (!exists) break;

        window.AUTO_DETECTED_IMAGES.push({
            chapterNumber: num,
            imagePath: imagePath
        });

        updateCounterDisplay(window.AUTO_DETECTED_IMAGES.length);
    }

    // Refresh Org-Chart live counts & Chapter Grid once scanning finishes
    renderOrgChartAndGrid();
}

/* --------------------------------------------------------------------------
   3. AUTOMATED LIVE HEADER COUNTERS
   -------------------------------------------------------------------------- */
function initializeCounters() {
    document.getElementById("image-count-total").textContent = SITE_CONFIG.targetImages;
    document.getElementById("kural-count-total").textContent = SITE_CONFIG.targetKurals;
    updateCounterDisplay(0);
}

function updateCounterDisplay(detectedImageCount) {
    const formatNum = function (num) { return String(num).padStart(2, "0"); };
    document.getElementById("image-count-current").textContent = formatNum(detectedImageCount);

    let completedKurals = 0;
    if (SITE_CONFIG.autoMultiplyKuralsByImages) {
        completedKurals = detectedImageCount * 10;
    } else {
        completedKurals = getChaptersList().reduce(function (total, chapter) {
            return total + (Array.isArray(chapter.kurals) ? chapter.kurals.length : 0);
        }, 0);
    }

    document.getElementById("kural-count-current").textContent = formatNum(completedKurals);
}

/* --------------------------------------------------------------------------
   4. SECTION 3: 3-TIER ORG-CHART NAVIGATION & AUTO-ROUTED DATABANK GRID
   -------------------------------------------------------------------------- */
function getMergedChapterRecords() {
    const chaptersData = getChaptersList();
    const detectedImages = window.AUTO_DETECTED_IMAGES;
    const ext = SITE_CONFIG.chapterImageExtension || ".jpg";

    const chapterNumbers = new Set();
    detectedImages.forEach(function (img) { chapterNumbers.add(img.chapterNumber); });
    chaptersData.forEach(function (ch) { chapterNumbers.add(ch.chapterNumber); });

    return Array.from(chapterNumbers)
        .sort(function (a, b) { return a - b; })
        .map(function (num) {
            const textData = chaptersData.find(function (c) { return c.chapterNumber === num; }) || null;
            const imgData = detectedImages.find(function (i) { return i.chapterNumber === num; }) || null;
            const arch = findArchitectureForChapter(num);

            return {
                chapterNumber: num,
                imagePath: imgData ? imgData.imagePath : (window.ACTIVE_IMAGES_FOLDER + num + ext),
                pillarId: arch.pillar ? arch.pillar.id : "unassigned",
                pillarTamil: arch.pillar ? arch.pillar.tamilName : "",
                pillarEnglish: arch.pillar ? arch.pillar.englishName : ((textData && textData.pillar) || "Upcoming"),
                iyalId: arch.iyal ? arch.iyal.id : "unassigned",
                iyalTamil: arch.iyal ? arch.iyal.tamil : "",
                iyalTranslit: arch.iyal ? arch.iyal.translit : "",
                iyalEnglish: arch.iyal ? arch.iyal.english : "",
                chapterTitle: (textData && textData.chapterTitle) || ("Bloom Chapter " + String(num).padStart(2, "0")),
                tamilTitle: (textData && textData.tamilTitle) || "",
                flowerName: (textData && textData.flowerName) || "",
                summary:
                    (textData && textData.summary) ||
                    "Unedited bloom captured in the archive. Couplets and chapter summary will be published here shortly.",
                tamilSummary: (textData && textData.tamilSummary) || "",
                architecturalArc: (textData && Array.isArray(textData.architecturalArc)) ? textData.architecturalArc : [],
                greenThinkingPrinciple: (textData && textData.greenThinkingPrinciple) || "",
                kurals: (textData && Array.isArray(textData.kurals)) ? textData.kurals : []
            };
        });
}

function setupOrgChartStaticButtons() {
    const rootBtn = document.getElementById("org-root-btn");
    const wholePillarBtn = document.getElementById("org-show-whole-pillar-btn");

    if (rootBtn) {
        rootBtn.addEventListener("click", function () {
            activePillarId = "all";
            activeIyalId = "all";
            renderOrgChartAndGrid();
        });
    }

    if (wholePillarBtn) {
        wholePillarBtn.addEventListener("click", function () {
            activeIyalId = "all";
            renderOrgChartAndGrid();
        });
    }
}

function renderOrgChartAndGrid() {
    const allRecords = getMergedChapterRecords();
    const formatNum = function (n) { return String(n).padStart(2, "0"); };

    // 1. Update Tier 1 Root Node
    const rootBtn = document.getElementById("org-root-btn");
    const rootProgress = document.getElementById("org-root-progress");
    if (rootBtn) rootBtn.classList.toggle("active", activePillarId === "all");
    if (rootProgress) rootProgress.textContent = formatNum(allRecords.length) + " / 133 Blooms Ready";

    // 2. Render Tier 2: 3 Main Pillar Nodes
    const pillarsGrid = document.getElementById("org-pillars-grid");
    if (pillarsGrid) {
        pillarsGrid.innerHTML = "";

        KURAL_ARCHITECTURE.forEach(function (pillar) {
            const countInPillar = allRecords.filter(function (r) { return r.pillarId === pillar.id; }).length;
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "org-pillar-node" + (activePillarId === pillar.id ? " active" : "");
            btn.setAttribute("role", "tab");
            btn.setAttribute("aria-selected", String(activePillarId === pillar.id));

            btn.innerHTML =
                '<span class="org-pillar-num">Pillar 0' + pillar.number + ' &bull; ' + pillar.iyals.length + ' Iyals</span>' +
                '<span class="tamil-text org-pillar-tamil">' + pillar.tamilName + '</span>' +
                '<span class="org-pillar-eng">' + pillar.englishName + ' — ' + pillar.theme + '</span>' +
                '<span class="org-pillar-stats">' + formatChapterRange(pillar.start, pillar.end) + ' &bull; ' + pillar.totalKurals + ' Kurals</span>' +
                '<span class="org-progress-pill">' + formatNum(countInPillar) + ' / ' + pillar.totalChapters + ' Blooms</span>';

            btn.addEventListener("click", function () {
                activePillarId = pillar.id;
                activeIyalId = "all";
                renderOrgChartAndGrid();
            });

            pillarsGrid.appendChild(btn);
        });
    }

    // 3. Render Tier 3: Sub-Pillars (Iyals) under the active Pillar
    const iyalBranch = document.getElementById("org-iyal-branch");
    const iyalBranchLabel = document.getElementById("org-iyal-branch-label");
    const wholePillarBtn = document.getElementById("org-show-whole-pillar-btn");
    const iyalsGrid = document.getElementById("org-iyals-grid");

    const selectedPillar = KURAL_ARCHITECTURE.find(function (p) { return p.id === activePillarId; }) || null;

    if (iyalBranch && iyalsGrid) {
        if (!selectedPillar) {
            iyalBranch.hidden = true;
        } else {
            iyalBranch.hidden = false;
            if (iyalBranchLabel) {
                iyalBranchLabel.textContent =
                    selectedPillar.tamilName + " (" + selectedPillar.englishName + ") — " + selectedPillar.iyals.length + " Sub-Pillars (இயல்கள்)";
            }
            if (wholePillarBtn) {
                wholePillarBtn.textContent = "All " + selectedPillar.englishName + " (" + formatChapterRange(selectedPillar.start, selectedPillar.end) + ")";
                wholePillarBtn.classList.toggle("active", activeIyalId === "all");
            }

            iyalsGrid.innerHTML = "";
            selectedPillar.iyals.forEach(function (iyal) {
                const countInIyal = allRecords.filter(function (r) { return r.iyalId === iyal.id; }).length;
                const totalInIyal = iyal.end - iyal.start + 1;
                const kuralsInIyal = totalInIyal * 10;

                const node = document.createElement("button");
                node.type = "button";
                node.className = "org-iyal-node" + (activeIyalId === iyal.id ? " active" : "");
                node.setAttribute("role", "tab");
                node.setAttribute("aria-selected", String(activeIyalId === iyal.id));

                node.innerHTML =
                    '<div class="org-iyal-top">' +
                        '<span class="org-iyal-index">Iyal ' + String(iyal.num).padStart(2, "0") + '</span>' +
                        '<span class="org-iyal-count-badge' + (countInIyal === 0 ? ' zero' : '') + '">' +
                            countInIyal + ' / ' + totalInIyal +
                        '</span>' +
                    '</div>' +
                    '<span class="tamil-text org-iyal-tamil">' + iyal.tamil + '</span>' +
                    '<span class="org-iyal-eng">' + iyal.translit + ' — ' + iyal.english + '</span>' +
                    '<span class="org-iyal-range">' + formatChapterRange(iyal.start, iyal.end) + ' &bull; ' + kuralsInIyal + ' Kurals</span>';

                node.addEventListener("click", function () {
                    activeIyalId = iyal.id;
                    renderOrgChartAndGrid();
                });

                iyalsGrid.appendChild(node);
            });
        }
    }

    // 4. Filter Records for the Selected Org-Chart Node
    let filteredRecords = allRecords;
    let selectedIyal = null;

    if (selectedPillar) {
        filteredRecords = allRecords.filter(function (r) { return r.pillarId === selectedPillar.id; });
        if (activeIyalId !== "all") {
            selectedIyal = selectedPillar.iyals.find(function (sub) { return sub.id === activeIyalId; }) || null;
            if (selectedIyal) {
                filteredRecords = filteredRecords.filter(function (r) { return r.iyalId === selectedIyal.id; });
            }
        }
    }

    // 5. Update Active Branch Context Bar
    renderActiveBranchBar(selectedPillar, selectedIyal, filteredRecords.length);

    // 6. Render Chapter Bloom Cards
    renderChaptersGrid(filteredRecords, selectedPillar, selectedIyal);
}

function renderActiveBranchBar(selectedPillar, selectedIyal, shownCount) {
    const bar = document.getElementById("active-branch-bar");
    if (!bar) return;

    let breadcrumb = "Master Sanctuary";
    let heading = "All Published Blooms (Chapters 1–133)";
    let capacity = 133;

    if (selectedPillar && !selectedIyal) {
        breadcrumb = "Pillar 0" + selectedPillar.number + " • " + formatChapterRange(selectedPillar.start, selectedPillar.end);
        heading = selectedPillar.tamilName + " — " + selectedPillar.englishName + " (" + selectedPillar.theme + ")";
        capacity = selectedPillar.totalChapters;
    } else if (selectedPillar && selectedIyal) {
        const range = formatChapterRange(selectedIyal.start, selectedIyal.end);
        breadcrumb = selectedPillar.tamilName + " › Iyal " + String(selectedIyal.num).padStart(2, "0") + " • " + range;
        heading = selectedIyal.tamil + " (" + selectedIyal.translit + ") — " + selectedIyal.english;
        capacity = selectedIyal.end - selectedIyal.start + 1;
    }

    bar.innerHTML =
        '<div class="branch-bar-left">' +
            '<span class="branch-breadcrumb">' + breadcrumb + '</span>' +
            '<h3 class="branch-current-title tamil-text">' + heading + '</h3>' +
        '</div>' +
        '<div class="branch-bar-right">' +
            'Showing <strong>' + String(shownCount).padStart(2, "0") + '</strong> of ' + capacity + ' Chapters' +
        '</div>';
}

/* --------------------------------------------------------------------------
   HELPER: BUILD REUSABLE PILLAR / IYAL / ADHIGARAM / KURAL HTML BLOCKS
   Full Bilingual Clarity (Tamil + English) across Grid Cards & Chapter Reader
   -------------------------------------------------------------------------- */
function buildArchHeaderHTML(chapterNum) {
    const arch = findArchitectureForChapter(chapterNum);
    const pillar = arch.pillar;
    const iyal = arch.iyal;
    const pillarNum = pillar ? String(pillar.number).padStart(2, "0") : "00";
    const paalTamil = pillar ? pillar.tamilName : "அறத்துப்பால்";
    const paalEnglish = pillar ? (pillar.englishName + " — " + pillar.theme) : "";
    const iyalNum = iyal ? String(iyal.num).padStart(2, "0") : "00";
    const iyalTamil = iyal ? iyal.tamil : "";
    const iyalTranslit = iyal ? iyal.translit : "";
    const iyalEnglish = iyal ? iyal.english : "";

    let html =
        '<div class="frame-pillar-row">' +
            '<span class="frame-pillar-badge">Pillar: ' + pillarNum + '</span>' +
            '<span class="frame-paal-badge tamil-text">' +
                'பால்: ' + paalTamil +
                (paalEnglish ? ' <span class="frame-paal-eng">&bull; ' + paalEnglish + '</span>' : '') +
            '</span>' +
        '</div>';

    if (iyal) {
        html +=
            '<div class="frame-iyal-box">' +
                '<span class="frame-iyal-line tamil-text">Sub-Pillar (Iyal) ' + iyalNum + ' &bull; ' + iyalTamil + '</span>' +
                '<span class="frame-iyal-translit">' + iyalTranslit + ' &mdash; ' + iyalEnglish + '</span>' +
            '</div>';
    }

    return html;
}

function buildAdhigaramHTML(record) {
    const chNum = record.chapterNumber;
    const cleanTamil = record.tamilTitle
        ? record.tamilTitle.replace(/^(அத்தியாயம்|அதிகாரம்)\s*:?\s*\d+\s*[-–—:]?\s*/i, "").trim()
        : "";
    const adhigaramTamil = cleanTamil
        ? ("அதிகாரம் : " + chNum + " - " + cleanTamil)
        : ("Chapter " + chNum + " — " + record.chapterTitle);

    return (
        '<div class="frame-adhigaram-badge">' +
            '<span class="frame-adhigaram-ta tamil-text">' + adhigaramTamil + '</span>' +
            (cleanTamil && record.chapterTitle
                ? '<span class="frame-adhigaram-eng">Chapter ' + chNum + ' : ' + record.chapterTitle + '</span>'
                : '') +
        '</div>'
    );
}

function buildKuralUnitHTML(kural, globalKuralNum) {
    const porulText = kural.tamilPorul || "";
    const meaningText = kural.meaning || "";

    let html =
        '<div class="frame-kural-unit">' +
            '<div class="frame-kural-top">' +
                '<div class="frame-kural-num-box">' +
                    '<span class="frame-kural-num-ta tamil-text">குறள் : ' + globalKuralNum + '</span>' +
                    '<span class="frame-kural-num-en">Kural : ' + globalKuralNum + '</span>' +
                '</div>' +
                '<div class="frame-kural-verse-wrap">' +
                    '<span class="frame-kural-seal">' + globalKuralNum + '</span>' +
                    '<p class="tamil-text frame-kural-verse">' + kural.line1 + '<br>' + kural.line2 + '</p>' +
                '</div>' +
            '</div>';

    if (porulText) {
        html +=
            '<div class="frame-porul-box">' +
                '<span class="frame-porul-label tamil-text">தமிழ்ப் பொருள் :</span>' +
                '<p class="frame-porul-text tamil-text">' + porulText + '</p>' +
            '</div>';
    }

    if (meaningText) {
        html +=
            '<div class="frame-meaning-box">' +
                '<span class="frame-meaning-label">English Meaning:</span>' +
                '<p class="frame-meaning-text">' + meaningText + '</p>' +
            '</div>';
    }

    html += '</div>';
    return html;
}

function renderChaptersGrid(records, selectedPillar, selectedIyal) {
    const grid = document.getElementById("chapters-grid");
    if (!grid) return;

    grid.innerHTML = "";

    if (records.length === 0) {
        let emptyMessage =
            "Drop numbered flower photos (<code>1.jpg</code>–<code>133.jpg</code>) into <code>images/</code> and add their chapters to the corresponding Pillar data file to illuminate this branch automatically.";

        if (selectedIyal) {
            const range = formatChapterRange(selectedIyal.start, selectedIyal.end);
            const totalKurals = (selectedIyal.end - selectedIyal.start + 1) * 10;
            const rangeHint = selectedIyal.end > selectedIyal.start
                ? (" through <code>" + selectedIyal.end + ".jpg</code>")
                : "";
            emptyMessage =
                '<strong style="color: var(--gold-bright); display: block; margin-bottom: 8px;">' +
                    selectedIyal.tamil + ' (' + selectedIyal.translit + ') &bull; ' + range + ' (' + totalKurals + ' Kurals)' +
                '</strong>' +
                'This sub-pillar sanctuary is reserved and ready. Once you place <code>' + selectedIyal.start + '.jpg</code>' +
                rangeHint + ' in your <code>images/</code> folder, they will appear right here automatically.';
        } else if (selectedPillar) {
            emptyMessage =
                '<strong style="color: var(--gold-bright); display: block; margin-bottom: 8px;">' +
                    selectedPillar.tamilName + ' (' + selectedPillar.englishName + ') &bull; ' + formatChapterRange(selectedPillar.start, selectedPillar.end) +
                '</strong>' +
                'No blooms uploaded in this pillar yet. Photos numbered <code>' + selectedPillar.start + '.jpg</code> to <code>' + selectedPillar.end + '.jpg</code> will automatically populate here.';
        }

        grid.innerHTML = '<div class="empty-databank-msg">' + emptyMessage + '</div>';
        return;
    }

    records.forEach(function (rec) {
        const card = document.createElement("article");
        card.className = "chapter-card";

        const firstKural = rec.kurals.length > 0 ? rec.kurals[0] : null;
        const firstKuralNum = firstKural
            ? (firstKural.kuralNumber || (rec.chapterNumber - 1) * 10 + 1)
            : (rec.chapterNumber - 1) * 10 + 1;
        const targetFile = getDataFileNameForChapter(rec.chapterNumber);

        const previewContentHTML = firstKural
            ? buildKuralUnitHTML(firstKural, firstKuralNum)
            : (
                '<div class="frame-meaning-box">' +
                    '<span class="frame-meaning-label">Status:</span>' +
                    '<p class="frame-meaning-text">' +
                        'Unedited bloom archived. Couplets ' + firstKuralNum + '–' + (firstKuralNum + 9) +
                        ' and meanings will appear here automatically once added to <code>' + targetFile + '</code>.' +
                    '</p>' +
                '</div>'
            );

        const btnText = rec.kurals.length > 0
            ? ("Open Full Chapter (" + rec.kurals.length + " / 10 Couplets)")
            : "View Bloom Frame";

        card.innerHTML =
            '<div class="card-arch-header">' +
                buildArchHeaderHTML(rec.chapterNumber) +
            '</div>' +
            '<div class="chapter-card-img-box">' +
                '<img src="' + rec.imagePath + '" alt="' + rec.chapterTitle + '" loading="lazy">' +
            '</div>' +
            '<div class="chapter-card-body">' +
                '<div class="frame-kural-enclosure">' +
                    buildAdhigaramHTML(rec) +
                    previewContentHTML +
                '</div>' +
                '<button class="chapter-open-btn" type="button">' + btnText + '</button>' +
            '</div>';

        card.querySelector(".chapter-open-btn").addEventListener("click", function () {
            openChapterReader(rec);
        });

        grid.appendChild(card);
    });
}

/* --------------------------------------------------------------------------
   5. FULL CHAPTER READING SANCTUARY MODAL (Exact Blueprint Layout)
   -------------------------------------------------------------------------- */
function openChapterReader(record) {
    const modal = document.getElementById("chapter-modal");
    const paddedNum = String(record.chapterNumber).padStart(2, "0");

    // 1. Top Centered Pillar + Paal + Iyal Header
    const metaEl = document.getElementById("ch-modal-meta");
    metaEl.innerHTML = buildArchHeaderHTML(record.chapterNumber);

    // Keep accessible modal title populated, hide duplicate visual title lines above image
    const titleEl = document.getElementById("ch-modal-title");
    titleEl.textContent = "Chapter " + paddedNum + " — " + record.chapterTitle;
    titleEl.className = "ch-sr-only";

    const tamilTitleEl = document.getElementById("ch-modal-tamil-title");
    tamilTitleEl.textContent = record.tamilTitle || "";
    tamilTitleEl.style.display = "none";

    // 2. Full Uncropped Bloom Image
    document.getElementById("ch-modal-img").src = record.imagePath;

    // 3. Chapter Summary Snapshot (தமிழ் சுருக்கம் + Message + 2x2 Arc + Green Thinking)
    const summaryBox = modal.querySelector(".ch-summary-box");
    if (summaryBox) {
        const startK = (record.chapterNumber - 1) * 10 + 1;
        const endK = record.chapterNumber * 10;
        const hasRichSummary =
            record.tamilSummary || record.architecturalArc.length > 0 || record.greenThinkingPrinciple;

        if (!hasRichSummary) {
            summaryBox.innerHTML =
                '<h3 class="ch-sub-heading">Chapter Summary</h3>' +
                '<p id="ch-modal-summary" class="ch-summary-text">' + record.summary + '</p>';
        } else {
            let arcHTML = "";
            if (record.architecturalArc.length > 0) {
                const arcCards = record.architecturalArc.map(function (step) {
                    return (
                        '<div class="ch-arc-card">' +
                            '<div class="ch-arc-top">' +
                                '<span class="ch-arc-range">' + step.range + '</span>' +
                                '<span class="ch-arc-phase">' + step.phase + '</span>' +
                            '</div>' +
                            '<p class="ch-arc-traits">' + step.traits + '</p>' +
                        '</div>'
                    );
                }).join("");

                arcHTML =
                    '<div class="ch-arc-section">' +
                        '<span class="ch-block-label">Architectural Arc (Kurals ' + startK + '–' + endK + ' at a Glance)</span>' +
                        '<div class="ch-arc-grid">' + arcCards + '</div>' +
                    '</div>';
            }

            let snapshotHTML =
                '<div class="ch-snapshot-stack">' +
                    '<div class="ch-snapshot-header">' +
                        '<span class="tamil-text ch-snapshot-tamil-head">அதிகாரப் பிழிவு</span>' +
                        '<span class="ch-snapshot-eng-sub">Chapter ' + record.chapterNumber + ' Summary Snapshot &bull; Kurals ' + startK + '–' + endK + '</span>' +
                    '</div>';

            if (record.tamilSummary) {
                snapshotHTML +=
                    '<div class="ch-essence-box">' +
                        '<span class="ch-block-label ch-block-label-ta">தமிழ் சுருக்கம் (Tamil Essence)</span>' +
                        '<p class="tamil-text ch-essence-text">' + record.tamilSummary + '</p>' +
                    '</div>';
            }

            if (record.summary) {
                snapshotHTML +=
                    '<div class="ch-message-box">' +
                        '<span class="ch-block-label">Chapter Message (Humanity\'s Takeaway)</span>' +
                        '<p class="ch-message-text">' + record.summary + '</p>' +
                    '</div>';
            }

            snapshotHTML += arcHTML;

            if (record.greenThinkingPrinciple) {
                snapshotHTML +=
                    '<div class="ch-green-principle">' +
                        '<span class="ch-green-label">Green Thinking Principle</span>' +
                        '<p class="ch-green-text">“' + record.greenThinkingPrinciple + '”</p>' +
                    '</div>';
            }

            snapshotHTML += '</div>';
            summaryBox.innerHTML = snapshotHTML;
        }
    }

    // 4. Enclosed Adhigaram + All 10 Kurals with Bilingual Numbers & Meanings
    const listEl = document.getElementById("ch-modal-kurals-list");
    listEl.innerHTML = "";

    const enclosure = document.createElement("div");
    enclosure.className = "frame-kural-enclosure";

    let kuralsMarkup = buildAdhigaramHTML(record);

    if (record.kurals.length === 0) {
        const startK = (record.chapterNumber - 1) * 10 + 1;
        const targetFile = getDataFileNameForChapter(record.chapterNumber);
        kuralsMarkup +=
            '<div class="frame-meaning-box">' +
                '<span class="frame-meaning-label">Upcoming Couplets (' + startK + '–' + (startK + 9) + '):</span>' +
                '<p class="frame-meaning-text">' +
                    'The 10 couplets and English meanings for Chapter ' + paddedNum + ' are currently being composed in <code>' + targetFile + '</code>.' +
                '</p>' +
            '</div>';
    } else {
        record.kurals.forEach(function (kural, index) {
            const kNum = kural.kuralNumber || (record.chapterNumber - 1) * 10 + (index + 1);
            kuralsMarkup += buildKuralUnitHTML(kural, kNum);
        });
    }

    enclosure.innerHTML = kuralsMarkup;
    listEl.appendChild(enclosure);

    const cardEl = modal.querySelector(".modal-card");
    if (cardEl) cardEl.scrollTop = 0;

    modal.hidden = false;
    document.body.style.overflow = "hidden";
}

function setupChapterReaderModal() {
    const modal = document.getElementById("chapter-modal");
    const closeBtn = document.getElementById("ch-modal-close-btn");

    const closeChapterModal = function () {
        modal.hidden = true;
        document.body.style.overflow = "";
    };

    closeBtn.addEventListener("click", closeChapterModal);
    modal.addEventListener("click", function (event) {
        if (event.target === modal) closeChapterModal();
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && !modal.hidden) closeChapterModal();
    });
}

/* --------------------------------------------------------------------------
   6. TOP NAVIGATION INFO MODALS (About, Vision, ESD2030, Mission, Author)
   -------------------------------------------------------------------------- */
function setupNavigationModals() {
    const modal = document.getElementById("info-modal");
    const closeBtn = document.getElementById("modal-close-btn");
    const modalTag = document.getElementById("modal-tag");
    const modalTitle = document.getElementById("modal-title");
    const modalBody = document.getElementById("modal-body");
    const navButtons = document.querySelectorAll(".nav-btn[data-modal]");

    navButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const key = button.getAttribute("data-modal");
            const data = NAV_MODALS[key];
            if (!data) return;

            modalTag.textContent = data.tag;
            modalTitle.textContent = data.title;

            modalBody.innerHTML = "";
            if (data.richContent) {
                modalBody.innerHTML = data.richContent;
            } else if (Array.isArray(data.paragraphs)) {
                data.paragraphs.forEach(function (text) {
                    const p = document.createElement("p");
                    p.textContent = text;
                    modalBody.appendChild(p);
                });
            }

            const cardEl = modal.querySelector(".modal-card");
            if (cardEl) cardEl.scrollTop = 0;

            modal.hidden = false;
            document.body.style.overflow = "hidden";
        });
    });

    const closeModal = function () {
        modal.hidden = true;
        document.body.style.overflow = "";
    };

    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", function (event) {
        if (event.target === modal) closeModal();
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && !modal.hidden) closeModal();
    });
}