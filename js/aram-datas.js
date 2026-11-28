/* ==========================================================================
   MALAR KURALS — PILLAR 01: ARAM DATABANK (js/aram-datas.js)
   Covers Chapters 1 to 38 (அறத்துப்பால் — 380 Kurals)
   Images 1.jpg through 38.jpg link automatically by chapterNumber.
   MILESTONE LOCKED: 100 / 1,330 Kurals Complete (Chapters 1–10)
   ========================================================================== */

const ARAM_CHAPTERS_DATA = [
    // ======================================================================
    // CHAPTER 1: கடவுள் வாழ்த்து — தாமரை (Kurals 1–10)
    // ======================================================================
    {
        chapterNumber: 1,                       // Automatically loads images/1.jpg -> Pillar 01 -> Iyal 01 (பாயிரவியல்)
        tamilTitle: "கடவுள் வாழ்த்து — தாமரை",
        chapterTitle: "Praise of the Supreme Source – The Sacred Lotus",
        flowerName: "The Sacred Lotus (தாமரை)",
        tamilSummary:
            "சேற்றில் வேரூன்றிப் பிறந்தாலும் மாசுபடாமல் உயர்ந்து, கதிரவனை நோக்கி மலர்ந்து, நீர்த்துளியைப் பற்றாது விலக்கி, இரவில் உள்ஒடுங்கி, கனிந்ததும் பணிந்து, குளிர்நீரிலும் அகச்சூட்டைக் காத்து, ஆயிரம் ஆண்டுகள் கடந்தும் உயிர்த்து, பொற்கருவறை ஒளிர்ந்து, வெள்ளத்திற்கு ஏற்பத் தண்டை நீட்டி வான்நோக்கி நிற்கும் தாமரையின் வாழ்வியல் — பேராற்றலை உணர்ந்து, அகந்தை நீங்கி, மாசற்ற ஒழுக்கத்தோடு நிலைத்திருப்பதே மெய்யான கடவுள் வாழ்த்து என்பதைக் குறள்கள் 1–10 வழியே நிறுவுகிறது.",
        summary:
            "Through ten verified survival mechanisms of the Sacred Lotus, Chapter 1 establishes that reverence for the Supreme Source is not a sectarian ritual, but a lived law of alignment. Nature proves that enduring life requires turning toward the primary source (1), staying uncorrupted by harsh origins (2), practicing detachment amid abundance (3), guarding the inner core through restraint (4), bowing in humility upon maturity (5), sustaining inner warmth against external coldness (6), trusting imperishable continuity (7), unveiling inner wisdom beyond surface layers (8), adapting upward above rising floods (9), and offering one's full radiance back to the Source (10).",
        architecturalArc: [
            {
                range: "1–3",
                phase: "Alignment & Purity",
                traits: "Solar devotion • Spotless rise from mud • Superhydrophobic detachment"
            },
            {
                range: "4–6",
                phase: "Discipline & Inner Core",
                traits: "Nocturnal restraint • Post-bloom humility • Self-generated inner warmth"
            },
            {
                range: "7–9",
                phase: "Continuity & Resilience",
                traits: "1,000-year seed dormancy • Golden center of wisdom • Flood-adapting stem"
            },
            {
                range: "10",
                phase: "Ultimate Surrender",
                traits: "Full upright bloom as a selfless offering to the Supreme"
            }
        ],
        greenThinkingPrinciple:
            "True reverence is structural integrity—staying rooted in reality without absorbing its corruption, adapting upward when conditions turn against you, and returning your ripest harvest humbly to the source.",
        kurals: [
            {
                kuralNumber: 1,
                line1: "பொன்கதிர் காணக் கமலம் விரிந்தெழல்",
                line2: "தொன்மூலன் சீர்காட்டும் சால்பு.",
                tamilPorul:
                    "வானில் பொற்கதிரவன் தோன்றியவுடனே தாமரை இதழ்கள் விரிந்து எழுவது, இவ்வுலகின் தொன்மையான முதற்பொருளின் பெருமையை வெளிப்படுத்தும் பேரியற்கைச் சால்பாகும்.",
                meaning:
                    "Forged within nature's 4.8-billion-year cosmic blueprint, the lotus tracks and opens strictly to the first solar ray without prompt or delay. It teaches humanity that lasting alignment begins by orienting our lives daily toward the primal source of truth and light."
            },
            {
                kuralNumber: 2,
                line1: "சேற்றிடைத் தோன்றினும் தீதின்றி ஓங்குதல்",
                line2: "ஆற்றலான் தூய்மைகொள் பேறு.",
                tamilPorul:
                    "ஆழமான சேற்றிடையே வேரூன்றித் தோன்றினாலும் எவ்விதக் கறையுமின்றித் தூய்மையாக ஓங்கி வளர்வதே, பேராற்றல் கொண்ட இறைவனின் தூய்மையை அடையும் பெரும் பேறாகும்.",
                meaning:
                    "Engineered through deep-time survival design, the lotus emerges completely unblemished from dense, stagnant pond mire. It teaches humanity that corrupted surroundings never excuse a compromised character—true integrity rises spotless from any terrain."
            },
            {
                kuralNumber: 3,
                line1: "பாசடை மேல்நீர் படியாமல் ஓடுதல்",
                line2: "மாசற்றோன் தண்ணருள் மாண்பு.",
                tamilPorul:
                    "பசிய தாமரை இலையின் மீது நீர்த்துளி ஒட்டாமல் முத்துப்போல் உருண்டு ஓடுவது, மாசற்ற இறைவனின் குளிர்ந்த அருளில் நிலைபெற்ற பற்றற்ற மாண்பாகும்.",
                meaning:
                    "Through microscopic superhydrophobic architecture refined across deep time, the lotus leaf lets water and dirt bead and roll away effortlessly. It teaches humanity the discipline of active detachment—engaging fully with the world without allowing greed or sorrow to cling to the self."
            },
            {
                kuralNumber: 4,
                line1: "ஞாயிறு சாய நளினம் குவிந்திடல்",
                line2: "மாயை அகற்றும் தவம்.",
                tamilPorul:
                    "கதிரவன் சாய்ந்து மறையும் மாலையில் தாமரை தன் இதழ்களை உள்ளே குவித்து மூடிக்கொள்வது, புறமாயைகளை அகற்றி அகத்தைக் காக்கும் மெய்த்தவமாகும்.",
                meaning:
                    "Guided by an ancient circadian defense mechanism, the lotus folds its petals inward at dusk to shield its vital core through darkness. It teaches humanity that deliberate restraint and inward withdrawal from external noise are essential to protect inner clarity."
            },
            {
                kuralNumber: 5,
                line1: "கனிந்து முளரி கயம்நோக்கித் தாழ்தல்",
                line2: "தனியோன் கழல்பணியும் பண்பு.",
                tamilPorul:
                    "முழுமையாக மலர்ந்து விதைகள் கனிந்ததும் அகந்தையின்றித் தாமரை குளத்து நீரை நோக்கித் தாழ்ந்து சாய்வது, ஒப்பற்ற இறைவனின் திருவடியைப் பணியும் உயரிய பண்பாகும்.",
                meaning:
                    "Once pollination completes and its seed pod ripens, nature's timeless design bends the heavy lotus receptacle humbly downward to return its seeds to the water. It teaches humanity that genuine wisdom and maturity never breed arrogance—they culminate in gratitude, humility, and service to the source."
            },
            {
                kuralNumber: 6,
                line1: "குளிர்புனல் சூழினும் நெஞ்சம் சுடர்தல்",
                line2: "ஒளியோன் உறைவதன் சான்று.",
                tamilPorul:
                    "குளிர்ந்த நீர் தன்னைச் சூழ்ந்திருந்தாலும் தன் அகத்தே கதகதப்பான வெப்பம் சுடர்ந்து கொண்டிருப்பது, பேரொளி வடிவான இறைவன் உள்ளே உறைவதன் உயிர்ச் சான்றாகும்.",
                meaning:
                    "Powered by rare floral thermoregulation evolved over deep time, the lotus generates its own steady internal warmth (30–35°C) even in icy water to sustain life. It teaches humanity to cultivate an unshakeable inner equilibrium rather than surrendering emotional steadiness to cold external circumstances."
            },
            {
                kuralNumber: 7,
                line1: "பல்லூழி தொல்வித்து துஞ்சி உயிர்பெறல்",
                line2: "வல்லோன் அழியாத் திறம்.",
                tamilPorul:
                    "பல நூற்றாண்டுகள் மண்ணுள் உறங்கிக் கிடந்தாலும் நீர் பட்டவுடன் மீண்டும் உயிர்பெற்று முளைக்கும் தொன்மையான தாமரை விதை, வல்லமை மிக்க இறைவனின் அழியாத பேராற்றலாகும்.",
                meaning:
                    "Carrying one of nature's oldest dormancy mechanisms, a single lotus seed can remain viable in dry earth for over a millennium and germinate the moment water arrives. It teaches humanity that patience, resilience, and purposeful potential never perish when anchored in enduring natural law."
            },
            {
                kuralNumber: 8,
                line1: "புறவிதழ் வாய்விடப் பொற்கரு மின்னல்",
                line2: "நிறைவுணர்வு கூடும் நிலை.",
                tamilPorul:
                    "புறத்தே சூழ்ந்திருக்கும் இதழ்கள் விரிந்து வாய்விடும்போது உள்ளே உள்ள பொற்கரு ஒளிர்ந்து மின்னுவது, மயக்கம் நீங்கி நிறைவான மெய்யுணர்வு கூடும் உயர் நிலையாகும்.",
                meaning:
                    "Designed with precision floral geometry, the lotus unfolds its outer pink petals in sequence to reveal the radiant golden receptacle that holds the future of its lineage. It teaches humanity to look past superficial layers and awaken the luminous core of pure awareness within."
            },
            {
                kuralNumber: 9,
                line1: "வெள்ளம் மிகுகினும் தண்டுடன் நீள்வது",
                line2: "உள்ளம் உயர்த்தும் உரம்.",
                tamilPorul:
                    "குளத்து வெள்ளம் எவ்வளவுதான் மிகுந்து உயர்ந்தாலும் அதற்கேற்பத் தன் தண்டை நீட்டி நீருக்கு மேலேயே நிற்பது, சோதனைகளைக் கடந்து உள்ளத்தை உயர்த்தும் மனஉரமாகும்.",
                meaning:
                    "Built with adaptive stem-elongation mechanics refined over deep time, the lotus dynamically lengthens its stalk to stay above sudden floods without uprooting. It teaches humanity that when crises rise, we must adapt our functional capacity upward while staying firmly rooted in our principles."
            },
            {
                kuralNumber: 10,
                line1: "தாமரை நேர்நிமிர்ந்து வான்போற்றிப் பூப்பதே",
                line2: "ஏமம் விளைத்திடும் வீடு.",
                tamilPorul:
                    "தாமரை நேராக நிமிர்ந்து வானைப் போற்றி முழுமையாகப் பூத்து நிற்பதே, துயரற்ற பேரின்பக் காவலாகிய வீடுபேற்றை விளைவிக்கும் பெருநிலையாகும்.",
                meaning:
                    "Standing upright in full solar radiance before withdrawing quietly into seed formation, the lotus fulfills nature's 4.8-billion-year law of selfless continuity. It teaches humanity that living upright in complete harmony with universal order is the ultimate path to liberation and lasting legacy."
            }
        ]
    },

    // ======================================================================
    // CHAPTER 2: வான் சிறப்பு — மழை அல்லி (Kurals 11–20)
    // ======================================================================
    {
        chapterNumber: 2,                       // Automatically loads images/2.jpg -> Pillar 01 -> Iyal 01 (பாயிரவியல்)
        tamilTitle: "வான் சிறப்பு — மழை அல்லி",
        chapterTitle: "The Blessing of Rain – The Rain Lily",
        flowerName: "The Rain Lily (மழை அல்லி)",
        tamilSummary:
            "மழைத்துளி தீண்டியதும் மறைகுமிழிலிருந்து விழித்தெழுந்து, வண்டுகளுக்கும் சூழலுக்கும் தேன்சுரந்து, வறட்சியில் கலகமின்றிப் பொறுத்து, மழையின்றி வேர்கொள்ளாது அமைந்து, பெயலில் முகைநிமிர்த்தி, பைந்தாள் தழைத்து, கடல்-மேகச் சுழற்சியை உணர்ந்து, அறுவிதழ் விரித்துப் பூவிழா நடத்தி, அகநோன்பையும் பூங்கொடையையும் நிறைவேற்றி மழையாலேயே நிலைக்கும் மழை அல்லியின் வாழ்வியல் — வான்மழையே புவியின் உயிர், வளம், சூழல் மற்றும் அறமுறைமையின் அடிப்படை என்பதைக் குறள்கள் 11–20 வழியே மெய்ப்பிக்கிறது.",
        summary:
            "Through ten verified hydrological survival mechanisms of the Rain Lily, Chapter 2 demonstrates that rain is the living constitution behind all earthly abundance and moral order. Nature proves that rainfall is life's irreplaceable elixir (11), the mother-food that feeds whole ecosystems (12), the test that shapes silent endurance without protest (13), the precondition for all soil labor (14), the twin power of humbling contraction and swift resurrection (15), the spark behind every green blade (16), the unbroken covenant linking oceans to land (17), the catalyst of joyful collective celebration (18), the foundation sustaining both inner discipline and outer charity (19), and the ultimate anchor without which universal order collapses (20).",
        architecturalArc: [
            {
                range: "11–13",
                phase: "Elixir & Endurance",
                traits: "Rainwater chemical awakening • Pollinator nectar supply • Silent drought dormancy"
            },
            {
                range: "14–16",
                phase: "Action & Renewal",
                traits: "Moisture-gated sprouting • 48–72 hr bud resurrection • Grass-like green emergence"
            },
            {
                range: "17–19",
                phase: "Cycle & Offering",
                traits: "Barometric sea-cloud sensing • Six-petaled mass festival • Hidden patience & floral charity"
            },
            {
                range: "20",
                phase: "Universal Order",
                traits: "Rain-choreographed lifecycle proving no ecological or moral order stands without rain"
            }
        ],
        greenThinkingPrinciple:
            "Water is not a resource to exploit, but a planetary rhythm to honor—wait with discipline in scarcity, share your harvest freely in abundance, and protect the unbroken sea-to-sky cycle that sustains every living order.",
        kurals: [
            {
                kuralNumber: 11,
                line1: "மாரித் தளியால் மறைகுமிழ் பூத்தெழல்",
                line2: "பாரிடை நன்மருந்தின் சான்று.",
                tamilPorul:
                    "வறண்ட மண்ணுள் அமைதியாகப் பதுங்கியிருக்கும் மழை அல்லியின் மறைகுமிழ், பருவமழையின் முதல் துளிகள் தீண்டியவுடனே பூத்தெழுவது, இப்புவியைக் காக்கும் மெய்யான உயிர்மருந்து மழையே என்பதற்கான நேரடிச் சான்றாகும்.",
                meaning:
                    "Forged within nature's 4.8-billion-year cosmic blueprint, the Rain Lily's dormant underground bulb ignores ordinary watering and awakens specifically to the dissolved atmospheric nitrogen and natural chemistry of rainfall. It teaches humanity to recognize and revere life's primary, irreplaceable elixirs rather than taking our living water cycle for granted."
            },
            {
                kuralNumber: 12,
                line1: "கொண்டல் பருகி நறுந்தாது தேன்சுரக்கும்",
                line2: "வண்டுணவும் தாயுணவும் கார்.",
                tamilPorul:
                    "கார்மேகத்தின் நீரைப் பருகி வண்டுகளுக்கும் பூச்சிகளுக்கும் நறுந்தாதையும் தேனையும் சுரந்து தரும் இந்த மலருக்கும், அதை நம்பி வாழும் உயிரினங்களுக்கும் தாயுணவாக அமைவது மழையே ஆகும்.",
                meaning:
                    "Engineered through deep-time survival design, the Rain Lily rapidly converts rainwater and stored starches into golden pollen and sweet nectar that revive hungry pollinators right after dry spells. It teaches humanity that true nourishment is never hoarded—what sustains us is meant to flow onward and sustain the wider ecosystem."
            },
            {
                kuralNumber: 13,
                line1: "மஞ்சு கரப்பினும் பொங்காது வற்றியே",
                line2: "பஞ்சம் பொறுக்கும் கிழங்கு.",
                tamilPorul:
                    "மழைமேகம் தன்னை மறைத்துக் கொண்டு பொழியாமல் போனாலும், எவ்விதக் கலகமோ எதிர்ப்போ இன்றி அமைதியாகத் தன் உள்ளிருப்பைக் கரைத்து வற்றியபடி, கடும் வறட்சிப் பஞ்சத்தைப் பொறுத்து நிற்பது மழை அல்லியின் கிழங்காகும்.",
                meaning:
                    "Guided by an ancient drought-dormancy protocol, the Rain Lily withdraws its surface foliage during scarcity and quietly draws upon internal reserves without futile protest or wasted energy. It teaches humanity disciplined endurance—conserving strength with quiet dignity during lean seasons instead of panicking or blaming circumstances."
            },
            {
                kuralNumber: 14,
                line1: "பண்செய் நிலத்தும் பெயலில்லேல் வேர்கொளா",
                line2: "மண்தொழில் சோர்ந்திடும் ஆறு.",
                tamilPorul:
                    "எவ்வளவுதான் பண்படுத்தப்பட்ட வளமான நிலமாக இருந்தாலும், மழைப்பெயல் இல்லாவிட்டால் மழை அல்லி வேர்கொண்டு எழாதது போலவே, நீரற்ற நிலத்தில் மனிதரின் மண்தொழிலும் உழைப்பும் சோர்ந்து முடங்கிவிடுவது இயற்கையின் நியதியாகும்.",
                meaning:
                    "Governed by strict moisture-gated sprouting, neither fertile tilled soil nor bright sunlight can force the Rain Lily to root and shoot until deep rainfall arrives. It teaches humanity humility in enterprise—human labor, skill, and capital only bear fruit when aligned with nature's foundational ecological wealth."
            },
            {
                kuralNumber: 15,
                line1: "ஒடுக்கி உலர்த்தி முகைநிமிர்த்திக் காக்கும்",
                line2: "அடக்கி அருளும் முகில்.",
                tamilPorul:
                    "பெய்யாமல் நிறுத்தி இலைகளை உலரச் செய்து மண்ணுள் ஒடுக்குவதும், மீண்டும் பொழிந்து சில நாட்களிலேயே அரும்புகளை வான்நோக்கி நிமிர்த்திக் காப்பதும் ஆகிய இரு ஆற்றல்களும் மழைமுகிலுக்கே உரியன.",
                meaning:
                    "Calibrated over deep time for rapid 48-to-72-hour resurrection, a single downpour reverses months of parched dormancy and sends upright crimson buds surging from bare earth. It teaches humanity that nature's cycles of restraint and renewal are two halves of the same wisdom—times of contraction prepare us to rise swiftly when grace returns."
            },
            {
                kuralNumber: 16,
                line1: "துவலை பொழியாதேல் பைந்தாள் தழைக்கா",
                line2: "புவனத்து வண்பசுமை இல்.",
                tamilPorul:
                    "வானின் மழைத்துளி மண்ணில் பொழியாவிட்டால், புல்லைப் போன்ற மழை அல்லியின் மெல்லிய பைந்தாள் நுனிகூட மண்ணைப் பிளந்து தழைக்காது; இப்புவனம் முழுவதிலும் வளமான பசுமை இல்லாமல் போய்விடும்.",
                meaning:
                    "Hidden beneath dry soil crusts, the Rain Lily's slender, grass-like linear leaves remain completely invisible until raindrops unlock synchronized green emergence across the land. It teaches humanity that planetary greenery and biodiversity hang on the fragile, indispensable thread of regular rainfall."
            },
            {
                kuralNumber: 17,
                line1: "ஆழிப் புனல்சுமக்கும் கொண்மூ சொரியாதேல்",
                line2: "சூழல் மலர்நலம் பாழ்.",
                tamilPorul:
                    "ஆழ்கடலின் நீரைச் சுமந்து செல்லும் மழைமேகம் மீண்டும் மண்ணில் சொரிந்து பெய்யாமல் போனால், புயல் சுழற்சியை உணர்ந்து மலரும் பூவின் நலனும் அதனைச் சார்ந்த முழு இயற்கைச் சூழலும் பாழாகிவிடும்.",
                meaning:
                    "Tuned across deep time to barometric pressure drops and ocean-fed monsoon fronts, the Rain Lily proves how landbound blooms depend directly on the unbroken sea-to-sky hydrological covenant. It teaches humanity systemic thinking—when we disrupt global climate and ocean cycles, every local habitat pays the price."
            },
            {
                kuralNumber: 18,
                line1: "சோனை தவறின் அறுவிதழ் சீரேத்தும்",
                line2: "கானத்துப் பூவிழா அற்று.",
                tamilPorul:
                    "பருவமழை தவறிப் போனால், ஆறு இதழ்களையும் விரித்து வான்நோக்கி இறைச்சீரைப் போற்றி வணங்கும் மழை அல்லியின் கூட்டமலர்ச்சியும், அது மண்ணில் நிகழ்த்தும் இயற்கைப் பூவிழாவும் அற்றுப் போய்விடும்.",
                meaning:
                    "Triggered strictly by monsoon downpours, hundreds of six-petaled blooms erupt together across open ground as a synchronized seasonal offering of beauty and gratitude to the sky. It teaches humanity that celebration, culture, and collective gratitude flourish only when we safeguard the natural abundance that makes them possible."
            },
            {
                kuralNumber: 19,
                line1: "அகநோன்பும் பூங்கொடையும் தண்தாரை நீங்கின்",
                line2: "புகழ்கொள் நிலையும் இல.",
                tamilPorul:
                    "வறட்சியில் அமைதியாகக் காத்திருக்கும் அகநோன்பும், மலர்ந்ததும் உயிர்களுக்குத் தேனும் விதையும் வழங்கும் பூங்கொடையும் ஆகிய இரண்டும், குளிர்ந்த மழைத்தாரை நீங்கிவிட்டால் புகழோடு நிலைபெறாது அழியும்.",
                meaning:
                    "Uniting quiet underground patience with open-petaled nectar and seed generosity, the Rain Lily turns hidden endurance into public charity only when pure rain arrives. It teaches humanity that both inner spiritual discipline and outer social generosity rely upon a healthy, life-sustaining ecological foundation."
            },
            {
                kuralNumber: 20,
                line1: "அல்லி உயிர்ப்பும் பொழிவின்றி மாயுமேல்",
                line2: "எல்லார் முறையும் அறும்.",
                tamilPorul:
                    "எளிய மழை அல்லியின் உயிர்ப்புச் சுழற்சிகூட மழைப்பொழிவு இன்றி மாய்ந்து அழியும் என்றால், இவ்வுலகில் வாழும் எல்லா உயிர்களின் இயற்கை முறைமையும் அறநெறியும் அறுந்துபோகும்.",
                meaning:
                    "From dormancy and sudden budding to solar blooming and seed dispersal, the Rain Lily's entire existence obeys nature's 4.8-billion-year water-choreographed order. It teaches humanity that water is not a mere commodity—it is the supreme guarantor of ecological balance, ethical order, and planetary continuity."
            }
        ]
    },

    // ======================================================================
    // CHAPTER 3: நீத்தார் பெருமை — வெள்ளை எருக்கு (Kurals 21–30)
    // ======================================================================
    {
        chapterNumber: 3,                       // Automatically loads images/3.jpg -> Pillar 01 -> Iyal 01 (பாயிரவியல்)
        tamilTitle: "நீத்தார் பெருமை — வெள்ளை எருக்கு",
        chapterTitle: "The Greatness of Ascetics – The Sacred White Crown Flower",
        flowerName: "The Sacred White Crown Flower (வெள்ளை எருக்கு)",
        tamilSummary:
            "வறண்ட மண்ணில் பராமரிப்பின்றித் தூய்மையாகத் துலங்கி, வெண்பஞ்சு வித்துகளைப் பற்றின்றி வானில் விடுவித்து, தூசி படிந்த புறஇலைகளிடையே மாசற்ற வெண்மை விரித்து, ஐங்கோணப் பூட்டுள் மகரந்தப் பொறிகளை அடக்கி, சுடும் வெயிலிலும் வாடாமல் நிலைத்து, ஆழமான வேரால் பாலைநிலத்தில் பூத்து, தகுதியான வண்டுகளை மட்டுமே நுட்பமாகத் தேர்ந்து, அமைதியான ஐந்திதழ் வடிவத்தால் சாட்சி நின்று, முள்ளின்றித் தற்காத்துப் பல்லுயிர்க்கும் தேனும் புகலிடமும் நல்கும் வெள்ளை எருக்கின் வாழ்வியல் — புலனடக்கம், பற்றின்மை, மனவலிமை மற்றும் எல்லா உயிர்களிடத்தும் கருணை ஆகியவையே நீத்தாரின் மெய்யான பெருமை என்பதைக் குறள்கள் 21–30 வழியே உணர்த்துகிறது.",
        summary:
            "Across ten verified survival designs of the Sacred White Crown Flower, Chapter 3 reveals that true renunciation is not fragile withdrawal—it is supreme self-mastery in action. Enduring stature emerges from spotless purity amid austerity (21), immeasurable reach through total non-clinging (22), separating outer dust from inner truth (23), locking the five senses in disciplined stillness (24), standing unwithered under blazing pressure (25), accomplishing hard feats through deep-rooted strength (26), applying sharp discernment beyond surface appearances (27), letting silent structural perfection speak as timeless truth (28), pairing thornless gentleness with instant moral firmness (29), and crowning every discipline with boundless compassion for all life (30).",
        architecturalArc: [
            {
                range: "21–23",
                phase: "Purity & Detachment",
                traits: "Untended arid bloom • Countless wind-borne silk seeds • Ash-dusted leaf vs. spotless white petal"
            },
            {
                range: "24–26",
                phase: "Mastery & Fortitude",
                traits: "Five-sided crown lock • Unwithered solar endurance • Deep taproot blooming in dryland"
            },
            {
                range: "27–29",
                phase: "Discernment & Force",
                traits: "Precision-slotted pollinator selection • Silent star symmetry • Thornless instant self-sealing sap"
            },
            {
                range: "30",
                phase: "Universal Compassion",
                traits: "Dry-season nectar & butterfly host sanctuary sustaining all life"
            }
        ],
        greenThinkingPrinciple:
            "True restraint is abundant strength under quiet command—draw deeply from within, demand little from the earth, guard your core with precision, and turn your resilience into shelter for every creature around you.",
        kurals: [
            {
                kuralNumber: 21,
                line1: "வறள்மண் துலங்கும் தவமலர் தூய்மை",
                line2: "திறனூல் உரைக்கும் சிறப்பு.",
                tamilPorul:
                    "நீரும் வளமும் அற்ற வறண்ட மண்ணில் எவ்விதப் பராமரிப்புமின்றித் தானே துலங்கிப் பூக்கும் வெள்ளை எருக்கின் மாசற்ற தூய்மையே, அறிவு நூல்கள் போற்றி உரைக்கும் உயர்ந்த சிறப்பாகும்.",
                meaning:
                    "Engineered through deep-time survival design, the White Crown Flower blooms spotless in parched, untended soil and earns its place in sacred garlands without ever demanding pampering. True greatness rests on uncompromised inner discipline rather than comfortable surroundings."
            },
            {
                kuralNumber: 22,
                line1: "காற்றில் மிதக்கும் கணக்கிலா வெண்துய்ப்போல்",
                line2: "சாற்றல் கடந்தது சீர்.",
                tamilPorul:
                    "முதிர்ந்த காய்களிலிருந்து பற்றின்றி விடுபட்டுக் காற்றில் மிதந்து செல்லும் வெள்ளை எருக்கின் கணக்கற்ற வெண்பஞ்சுத் துய்களைப் போல, பற்றற்ற சான்றோரின் சீர்மையை அளவிட்டுச் சொல்ல இயலாது.",
                meaning:
                    "Once its pods ripen, the plant releases countless buoyant silk-plumed seeds freely into the wind to cross vast distances without clinging to a single one. The stature and reach of those who master detachment surpass every human measure."
            },
            {
                kuralNumber: 23,
                line1: "மெய்யும் மருளும் பகுத்த தவளப்பூ",
                line2: "உய்யும் நெறிகொண்டோர் மாண்பு.",
                tamilPorul:
                    "சாம்பல் தூசி படிந்த புறஇலைகளுக்கும் உள்ளே விரியும் மாசற்ற வெண்மை இதழ்களுக்கும் இடையே தெளிவான வேறுபாட்டைக் காட்டும் தவள எருக்குப் பூவே, மெய்யையும் மருளையும் பகுத்தறிந்து உய்யும் நெறி கொண்டோரின் மாண்பாகும்.",
                meaning:
                    "Wrapped in matte, ash-dusted foliage that absorbs harsh outdoor grit while unfolding an immaculate ivory blossom at its tip, the plant separates outward weathering from inner clarity. Lasting nobility belongs to those who distinguish the transient from the enduring and anchor their lives in truth."
            },
            {
                kuralNumber: 24,
                line1: "ஐங்கோணப் பூட்டுள் பொறியடக்கும் திண்மைதான்",
                line2: "ஓங்கும் உயர்கதியின் பேறு.",
                tamilPorul:
                    "தன் மையத்தில் அமைந்த ஐங்கோண மகுடப் பூட்டிற்குள் மகரந்தப் பொறிகளை இறுக்கமாக அடக்கிக் காக்கும் வெள்ளை எருக்கின் உறுதிப்பாடே, உயர்ந்த பேரின்ப நிலையை அடையும் பேறாகும்.",
                meaning:
                    "At the heart of the blossom sits a precision five-sided crown lock that seals and safeguards its five reproductive pollen chambers against casual loss. Mastering the five senses through firm inner restraint is the true foundation of an elevated life."
            },
            {
                kuralNumber: 25,
                line1: "வெங்கதிர் வேந்தனே வாட்டாத வெள்ளெருக்கின்",
                line2: "மங்கா வலிமைக்குச் சான்று.",
                tamilPorul:
                    "கடும் கோடையில் சுட்டெரிக்கும் கதிரவன் என்னும் வான்வேந்தனால்கூட வாட்ட முடியாத வெள்ளை எருக்கின் நிலைத்த பொலிவே, புலனடக்கியோரின் மங்காத மனவலிமைக்கு உயிர்ச் சான்றாகும்.",
                meaning:
                    "Protected by waxy moisture-locking tissues evolved over deep time, the White Crown Flower stands upright and blooms cleanly under relentless tropical heat that wilts ordinary plants. Even the fiercest external pressures become living proof of the invincible steadiness born from self-mastery."
            },
            {
                kuralNumber: 26,
                line1: "நீரற்ற வன்பாலை பூத்துயர்வோர் மேலோரே",
                line2: "வேரற்றோர் ஏற்றல் இலர்.",
                tamilPorul:
                    "நீரற்ற வறண்ட பாலை போன்ற கடின நிலத்திலும் ஆழமாக வேரூன்றிப் பூத்து உயர்வோரே மேலானவர்கள்; ஆழமான வேரும் உறுதியும் அற்றோர் இத்தகைய அரிய சாதனையை ஏற்க இயலாதவர்கள்.",
                meaning:
                    "Driven by a deep, self-reliant taproot that mines hidden moisture beneath arid gravel, the plant achieves effortless flowering where pampered species perish. Noble character is proven by accomplishing what others deem impossible, while the shallow falter before hardship."
            },
            {
                kuralNumber: 27,
                line1: "புலன்மயக்கம் நீக்கித் தகுதியார் தேரும்",
                line2: "அலர்போல் அறிவோர் தலம்.",
                tamilPorul:
                    "மேலோட்டமான புறக்கவர்ச்சிக்கு மயங்காமல் தன் நுட்பமான பூட்டு அமைப்பால் தகுதியான மகரந்தச் சேர்க்கையாளரை மட்டுமே தேர்ந்தெடுக்கும் வெள்ளை எருக்கைப் போல, புலன்களின் மெய்யியல்பை அறிந்தோரின் ஆளுமைக்குள்ளேயே இவ்வுலகம் அடங்கும்.",
                meaning:
                    "Rather than surrendering its pollen to every passing visitor, the flower's precision-slotted crown responds strictly to the exact weight and alignment of disciplined pollinators like native carpenter bees. Complete mastery over the world belongs to those who pierce sensory illusion and act with exact discernment."
            },
            {
                kuralNumber: 28,
                line1: "பேசாமல் நேர்ந்த வடிவமே சீலர்தம்",
                line2: "ஆசற்ற வாய்மையின் ஏடு.",
                tamilPorul:
                    "ஒரு சொல்லும் பேசாமல் ஐந்திதழ் நட்சத்திர அமைப்பும் மைய மகுடமும் கொண்டு இயல்பாக அமைந்த வெள்ளை எருக்கின் நேர்த்தியான வடிவமே, சீலம் நிறைந்த பெரியோர்களின் குற்றமற்ற வாய்மையைக் காட்டும் உயிர் ஏடாகும்.",
                meaning:
                    "Without uttering a sound, the blossom's five-pointed star geometry and crowned symmetry stand as an unmistakable living emblem revered across centuries in sacred garlands. The quiet integrity of fulfilled lives leaves behind timeless truths that speak for themselves."
            },
            {
                kuralNumber: 29,
                line1: "முள்ளற்ற மென்கிளை கீறின் எழும்பால்போல்",
                line2: "தெள்ளியோர் சீற்றம் நெருப்பு.",
                tamilPorul:
                    "முட்களற்ற அமைதியான வெள்ளை எருக்கின் மெல்லிய கிளையை அத்துமீறி கீறிய கணத்திலேயே தன்னியல்பாகப் பொங்கி எழும் வெண்பால் காப்பைப் போல, தெளிந்த உள்ளம் கொண்டோரின் அறச்சீற்றம் எவராலும் தடுக்க முடியாத நெருப்பாகும்.",
                meaning:
                    "Completely thornless and non-aggressive, the plant nevertheless responds the exact instant its stalk is carelessly torn by surging protective white latex to seal the wound without delay. Gentle composure should never be mistaken for weakness—when boundaries of righteousness are violated, the response of the disciplined is swift and unstoppable."
            },
            {
                kuralNumber: 30,
                line1: "பல்லுயிர்க்கும் தேன்நல்கித் தாங்கும் அருக்கமே",
                line2: "நல்லோர் கருணை இயல்பு.",
                tamilPorul:
                    "வறண்ட வெயிலிலும் கருவண்டுகள், வண்ணத்துப்பூச்சிகள் உள்ளிட்ட பல்லுயிர்களுக்கும் தேனும் புகலிடமும் நல்கித் தாங்கும் வெள்ளை எருக்கின் கொடையே, உண்மையான நல்லோரின் எல்லையற்ற கருணை இயல்பாகும்.",
                meaning:
                    "Even through harsh dry seasons, the White Crown Flower sustains native bees with nectar and shelters developing butterfly generations as an essential host sanctuary. Authentic spiritual stature is never defined by title or solitude alone—it is proven by unwavering, universal compassion toward every living being."
            }
        ]
    },

    // ======================================================================
    // CHAPTER 4: அறன் வலியுறுத்தல் — நித்திய கல்யாணி (Kurals 31–40)
    // Completes Iyal 01: பாயிரவியல் (Payiraviyal — 4 Chapters • 40 Kurals)
    // ======================================================================
    {
        chapterNumber: 4,                       // Automatically loads images/4.jpg -> Pillar 01 -> Iyal 01 (பாயிரவியல்)
        tamilTitle: "அறன் வலியுறுத்தல் — நித்திய கல்யாணி",
        chapterTitle: "Assertion of the Strength of Virtue – The Eternal Periwinkle",
        flowerName: "The Eternal Periwinkle (நித்திய கல்யாணி)",
        tamilSummary:
            "மருந்தும் வனப்பும் ஒருங்கே சுரந்து, முப்பொழுதும் தப்பாமல் பூத்து, கற்பிளவிலும் வன்புலத்திலும் வேரூன்றி, ஆரவாரமின்றிச் செங்கண் தூய்மையுடன் ஒளிர்ந்து, முள்ளும் படர்வேட்கையும் இன்றி அமைதியாக வாழ்ந்து, இன்றைய மலரின் கீழேயே நாளைய சுருள்மொட்டை ஆயத்தமாக்கி, வாடாமல் இரட்டைக் காய் தாங்கிக் கண்கூடாக நின்று, ஒருநாளும் அயராமல் புதிய இதழ்களைத் தோற்றுவித்து, நீர்மணி சூடித் திகழ்ந்து, அல்லன தள்ளிப் பசுந்தளிரைக் காக்கும் நித்திய கல்யாணியின் வாழ்வியல் — காலம் தாழ்த்தாமல் இடைவிடாது நன்னெறியைப் பேணுவதே அழியாத வளம், உவப்பு மற்றும் மெய்யான வாழ்வு என்பதைக் குறள்கள் 31–40 வழியே வலியுறுத்துகிறது.",
        summary:
            "Across ten verified survival designs of the Eternal Periwinkle, Chapter 4 establishes virtue not as an abstract sermon, but as an unceasing daily operating system. Enduring strength arises from generating both grace and healing worth (31), keeping unbroken fidelity to right law (32), acting well in every available crevice of life (33), centering purity in a spotless mind free from clamor (34), shedding envy, greed, wrath, and harshness (35), preparing tomorrow's good without delay (36), letting lived vitality stand as its own proof (37), letting no day pass barren (38), drawing true joy exclusively from inner goodness (39), and cleanly rejecting what harms while upholding what sustains life (40).",
        architecturalArc: [
            {
                range: "31–33",
                phase: "Worth & Steadfastness",
                traits: "Medicinal alkaloids & grace • 365-day evergreen rhythm • Blooming in stone cracks & dryland"
            },
            {
                range: "34–36",
                phase: "Purity & Readiness",
                traits: "Spotless crimson eye • Thornless non-invasive peace • Spiraled bud poised beneath today's bloom"
            },
            {
                range: "37–39",
                phase: "Proof & Joy",
                traits: "Self-evident vitality & twin pods • Zero-barren-day succession • Raindrop-crowned inner radiance"
            },
            {
                range: "40",
                phase: "Clear Imperative",
                traits: "Selective defense & clean shedding — shunning harm to guard living virtue"
            }
        ],
        greenThinkingPrinciple:
            "Virtue is unbroken daily maintenance—bloom wherever you are planted, prepare the next seed before today fades, shed what drains life, and let your quiet continuity speak louder than any slogan.",
        kurals: [
            {
                kuralNumber: 31,
                line1: "மருந்தும் வனப்பும் சுரக்கும் மலர்போல்",
                line2: "திருந்திய செந்நெறிப் பேறு.",
                tamilPorul:
                    "உயிர்காக்கும் அரிய மருந்துப் பொருளையும் கண்கவரும் பொலிவான வனப்பையும் ஒருங்கே சுரந்து தரும் நித்திய கல்யாணி மலரைப் போல, சீர்படுத்தப்பட்ட செந்நெறியே வாழ்க்கைக்குப் பெருமையையும் வளத்தையும் ஒருசேர வழங்கும் உயர்ந்த பேறாகும்.",
                meaning:
                    "Engineered through deep-time biochemistry, the Periwinkle synthesizes life-saving medicinal alkaloids inside its tissues while displaying radiant magenta grace. Steadfast virtue is the highest wealth any life can attain, yielding both enduring honor and genuine inner abundance."
            },
            {
                kuralNumber: 32,
                line1: "முப்பொழுதும் தப்பாமல் பூத்தலே வாழ்வெனின்",
                line2: "செப்பம் நெகிழ்தல் அழிவு.",
                tamilPorul:
                    "கோடை, மழை, குளிர் என எக்காலத்திலும் தவறாமல் தொடர்ந்து பூத்துக்கொண்டிருப்பதே நித்திய கல்யாணியின் வாழ்வு என்றால், தன் இயல்பான செம்மை நெறியிலிருந்து நெகிழ்ந்து விலகுதலே எத்தகைய உயிருக்கும் பெரும் அழிவாகும்.",
                meaning:
                    "True to its Tamil name meaning \"eternally auspicious,\" the Periwinkle maintains unbroken flowering across scorching heat, monsoon rain, and cool seasons without ever losing its rhythm. No gain surpasses steadfast alignment with righteous law, and no ruin cuts deeper than neglecting it."
            },
            {
                kuralNumber: 33,
                line1: "கற்பிளவும் வன்புலமும் கூடும் இடமெலாம்",
                line2: "நற்பணி சோராது ஆற்று.",
                tamilPorul:
                    "கடினமான கற்பிளவுகளிலும் வளமற்ற வன்புலத்திலும் தனக்கு இடம் கிடைக்கும் எல்லா இடங்களிலும் வேரூன்றி மலரும் நித்திய கல்யாணியைப் போல, வாய்ப்பு கூடும் இடமெல்லாம் சோர்வின்றி நற்பணியை ஆற்றுக.",
                meaning:
                    "Unbothered by harsh terrain, the Periwinkle germinates and blooms relentlessly in stone cracks, gravel edges, and dry soil wherever a foothold appears. Righteous action must never wait for ideal comfort—practice goodness unceasingly through every channel available."
            },
            {
                kuralNumber: 34,
                line1: "செங்கண் கறையின்றி ஆரவாரம் தீர்ந்தொளிரல்",
                line2: "பங்கமில் நெஞ்சமே மெய்.",
                tamilPorul:
                    "மிகைப்படுத்தப்பட்ட ஆடம்பரமோ ஆரவாரமோ இன்றி, தன் மையத்துச் செங்கண் கறையற்றுத் தூய்மையுடன் ஒளிரும் நித்திய கல்யாணியைப் போல, மாசுபடாத பங்கமற்ற நெஞ்சமே மெய்யான நல்லொழுக்கமாகும்.",
                meaning:
                    "Without loud scent or theatrical display, the blossom centers its entire design around a spotless, precision-ringed crimson eye washed clean by morning rain. Authentic virtue resides completely in an unblemished mind; everything outside that inner clarity is hollow noise."
            },
            {
                kuralNumber: 35,
                line1: "முள்ளற்றுக் காழ்ப்பொழிந்து வேட்கை சினநீத்த",
                line2: "கள்ளமில் பண்பே நலம்.",
                tamilPorul:
                    "பிற செடிகளைப் பற்றிக் கெடுக்கும் படர்வேட்கையோ, காயப்படுத்தும் முற்களோ, பகைமைக் காழ்ப்போ இன்றி அமைதியாக வாழும் நித்திய கல்யாணியின் கள்ளமற்ற பண்பே, பொறாமை, பேராசை, சினம், கடுமை நீங்கிய முழுமையான நலமாகும்.",
                meaning:
                    "Completely thornless, compact, and non-invasive, the Periwinkle shares soil peacefully without choking neighbors or flashing defensive spikes. Living free from envy, restless craving, wrath, and abrasive harshness is the complete definition of a virtuous life."
            },
            {
                kuralNumber: 36,
                line1: "தாழ்த்தாமல் சீர்வினை பூணிடின் மொட்டெனவே",
                line2: "வீழ்காலும் மாயாத சார்பு.",
                tamilPorul:
                    "இன்று மலர்ந்த பூவின் அடியிலேயே நாளைக்கான சுருள்மொட்டைத் தாழ்த்தாமல் உடனுக்குடன் ஆயத்தமாக வைத்திருக்கும் நித்திய கல்யாணியைப் போல, காலம் கடத்தாமல் இன்றே சீரிய நல்வினையைப் பூண்டால் அது வீழும் வேளையிலும் அழியாத சார்பாய் நிற்கும்.",
                meaning:
                    "Even while today's five petals open fully to the light, a tightly spiraled bud already waits directly beneath it so continuity never pauses when the current bloom fades. Never postpone right action for an uncertain tomorrow—virtue practiced today stands as an imperishable companion at life's final hour."
            },
            {
                kuralNumber: 37,
                line1: "கண்கூடாய் வாடாமல் காய்தாங்கும் செவ்வியே",
                line2: "நுண்ணுரை சாற்றல் மிகை.",
                tamilPorul:
                    "பராமரிப்பின்றி வளர்ந்தும் வாடாமல் இரட்டைக் காய்களைத் தாங்கி நிமிர்ந்து நிற்கும் நித்திய கல்யாணியின் கண்கூடான செவ்வியே போதும்; நன்னெறியின் பயனை விளக்க வேறு நுட்பமான உரைகள் சாற்றுவது மிகையாகும்.",
                meaning:
                    "Standing vibrant with morning dewdrops and reliable twin upright seed pods where pampered ornamentals quickly collapse, the plant offers undeniable visual evidence of sound design. The harvest of a righteous life is plainly visible in lived reality and requires no lengthy philosophical debate to prove."
            },
            {
                kuralNumber: 38,
                line1: "அயர்வின்றி நாடோறும் தண்ணிதழ் தோன்றல்",
                line2: "துயர்வாயில் பூட்டும் மதில்.",
                tamilPorul:
                    "ஒருநாளும்கூட வீணாகாமல் சோர்வின்றி நாடோறும் புதிய குளிர்ந்த இதழ்கள் தோன்றிக்கொண்டே இருக்கும் நித்திய கல்யாணியின் இடைவிடா மலர்ச்சியே, துயரத்தின் வாயிலை அடைத்துப் பூட்டும் உறுதியான மதிலாகும்.",
                meaning:
                    "Through continuous daily flower replacement, the Periwinkle allows not a single barren dawn to interrupt its cycle of renewal. Practicing goodness each day without wasting time builds an unbreachable fortress that seals off the path of recurring misery."
            },
            {
                kuralNumber: 39,
                line1: "மென்மடல் நீர்மணி சூடித் திகழ்வதென",
                line2: "நன்மையே நல்கும் உவப்பு.",
                tamilPorul:
                    "தன் மெல்லிய இதழ்களில் மழைத்துளி மணிகளைச் சூடியும் தளராமல் இயல்பாகத் திகழும் நித்திய கல்யாணியைப் போல, உள்ளார்ந்த நன்மையிலிருந்து பிறப்பதே மெய்யான உவப்பும் பெருமையும் ஆகும்; பிற வெற்றுப் பகட்டுகள் நிலைக்காது.",
                meaning:
                    "Carrying heavy raindrops gracefully across delicate magenta petals without bruising or bowing, the bloom draws its brilliance entirely from healthy inner structure. Genuine joy and lasting esteem spring solely from righteous living; all outward substitutes remain hollow and fleeting."
            },
            {
                kuralNumber: 40,
                line1: "அல்லன தள்ளிப் பசுந்தளிர் காப்பதொப்ப",
                line2: "நல்லன பேணல் கடன்.",
                tamilPorul:
                    "தீங்கிழைக்கும் பூச்சிகளையும் உலர்ந்த இதழ்களையும் இயல்பாகத் தள்ளிவிட்டுப் பசுந்தளிர்களைக் காக்கும் நித்திய கல்யாணியின் வாழ்வியல் முறைமைக்கு ஒப்ப, தீயவற்றை விலக்கி நல்லவற்றைப் பேணிச் செய்தலே வாழ்வின் முதற்கடனாகும்.",
                meaning:
                    "Guided by selective inner chemistry and clean petal abscission, the Periwinkle repels destructive pests and sheds spent tissue effortlessly to safeguard vigorous new growth. The sole imperative of a clear life is simple: reject what corrupts and steadfastly uphold what is right."
            }
        ]
    },

    // ======================================================================
    // CHAPTER 5: இல்வாழ்க்கை — வாழைப்பூ (Kurals 41–50)
    // Opens Iyal 02: இல்லறவியல் (Illaraviyal — Chapters 5–24)
    // ======================================================================
    {
        chapterNumber: 5,                       // Automatically loads images/5.jpg -> Pillar 01 -> Iyal 02 (இல்லறவியல்)
        tamilTitle: "இல்வாழ்க்கை — வாழைப்பூ",
        chapterTitle: "Domestic Life (Family Life) – The Banana Blossom",
        flowerName: "The Banana Blossom (வாழைப்பூ)",
        tamilSummary:
            "காய்க்குலம், பூத்தொகுதி, வண்டினம் ஆகியவற்றைத் தாய்த்தண்டால் தாங்கி, பசித்த உயிர்களுக்குப் பனித்தேன் நல்கி, வேர்க்கன்று முதல் மடல் வரை ஐவகைக் கூறுகளைச் சீராகப் பேணி, தான் திரள்வதற்கு முன்பே தேனை ஈந்து பகிர்ந்து, மென்மடலால் தளிர்வளர்த்து, அகத்துறு சீப்புகளைப் புரந்து நிறைவு கண்டு, முறைப்படி மடல்விரித்துப் பூத்து, கனத்த குலை தாங்கியும் சாயாது நின்று, உலர்ந்த இதழ்களை நீக்கித் தூய்மை காத்து, வேர் முதல் தார் வரை மண்ணுயிர்களுக்கே ஈந்து வாழும் வாழைப்பூவின் வாழ்வியல் — பகிர்வு, பொறுப்பு, கனிவு மற்றும் குற்றமற்ற ஒழுக்கத்தோடு வாழும் இல்லறமே எல்லா அறங்களுக்கும் தலையாயது என்பதைக் குறள்கள் 41–50 வழியே நிறுவுகிறது.",
        summary:
            "Across ten verified structural and ecological designs of the Banana Blossom, Chapter 5 reveals that domestic life is nature's primary engine of shared continuity. A healthy household serves as the steady pillar supporting every dependent order (41), offers ungrudging refuge and nourishment to the hungry and wandering (42), harmonizes fivefold duties within one unified rhythm (43), shares abundance before consuming so its lineage endures (44), unites tender protection with disciplined order (45), finds complete fulfillment within righteous family stewardship (46), excels all other strivers through measured, natural cadence (47), bears heavy responsibilities with greater fortitude than solitary austerity (48), sheds spent clutter cleanly to stay beyond reproach (49), and elevates earthly existence to sacred stature through total self-giving (50).",
        architecturalArc: [
            {
                range: "41–43",
                phase: "Pillar & Fivefold Duty",
                traits: "Mother stalk bearing all tiers • Cool bract nectar for visitors • Five-part unified ecosystem"
            },
            {
                range: "44–46",
                phase: "Sharing & Inner Grace",
                traits: "Nectar given before fruit swells • Velvet bract shelter & spiral order • Complete fulfillment in place"
            },
            {
                range: "47–49",
                phase: "Cadence & Fortitude",
                traits: "Sequential bract opening • Flexible stalk holding heavy bunches • Clean shedding of spent tips"
            },
            {
                range: "50",
                phase: "Sacred Self-Giving",
                traits: "Root-to-crown generosity earning timeless reverence on earth"
            }
        ],
        greenThinkingPrinciple:
            "A thriving household is a zero-waste ecosystem—anchor those who depend on you, share your nectar before harvesting your fruit, shed what is spent without clutter, and turn daily stewardship into generational continuity.",
        kurals: [
            {
                kuralNumber: 41,
                line1: "காய்க்குலம் பூத்தொகுதி வண்டினம் தாங்கிடும்",
                line2: "தாய்த்தண்டு சான்றோர் கடன்.",
                tamilPorul:
                    "முதிர்ந்து வரும் காய்க்குலங்களையும், மலர்ந்து விரியும் பூத்தொகுதிகளையும், தேன் நாடி வரும் வண்டினங்களையும் ஒருங்கே தாங்கிப் புரக்கும் வாழையின் தாய்த்தண்டைப் போல, சமுதாயத்தின் அனைத்து நிலைகளையும் தாங்கி நிற்பதே சான்றோரின் இல்லறக் கடமையாகும்.",
                meaning:
                    "Engineered across deep time as a multi-tiered inflorescence, the Banana Blossom's central mother stalk simultaneously supports ripening upper fruit hands, opening middle florets, and visiting pollinators. Sound domestic life serves as the steady structural pillar that sustains learners, elders, and vulnerable dependents on the path of virtue."
            },
            {
                kuralNumber: 42,
                line1: "வந்தபசி வண்டிற்கும் வாடும் உயிர்க்கும்",
                line2: "பனிந்ததேன் நல்கும் மடல்.",
                tamilPorul:
                    "தேன் பசி கொண்டு வரும் வண்டுகளுக்கும், வெயிலில் வாடி இளைப்பாற வரும் சிறு உயிர்களுக்கும் தன் இதழ் அடியில் குளிர்ந்த தேனை வஞ்சனையின்றி வழங்கும் வாழை மடலைப் போல, இல்லறத்தாரே பற்றற்றோர்க்கும் வறியோர்க்கும் உற்ற துணையாவர்.",
                meaning:
                    "Beneath every lifting maroon bract, rows of tubular florets secrete abundant, cool nectar that revives wandering bees and hungry insects before later nourishing soil life when spent bracts drop. A well-ordered household stands as an unfailing sanctuary for renunciants, the destitute, and those in need of care."
            },
            {
                kuralNumber: 43,
                line1: "வேர்க்கன்று காய்க்கூட்டம் பூத்தேன் மடலென",
                line2: "சீர்க்கொள் இனம்காக்கும் ஐந்து.",
                tamilPorul:
                    "மண்ணடியில் வளரும் வேர்க்கன்று, மேலே திரளும் காய்க்கூட்டம், நடுவே மலரும் பூக்கள், தேன் அருந்தும் விருந்தினர்கள், அவற்றைச் சூழ்ந்து காக்கும் மடல் என ஐந்து நிலைகளையும் சீராகப் பேணும் வாழையைப் போல, ஐவகைக் கடமைகளையும் தவறாது காப்பதே இல்லறத்தின் தலையாய நெறியாகும்.",
                meaning:
                    "Within one unified living system, the banana plant harmonizes five distinct duties—root suckers securing lineage, ripening fruit hands, nectar-bearing blossoms for guests, protective outer bracts, and self-sustaining sap flow. Fulfilling one's fivefold obligations to heritage, the Divine, guests, kin, and self is the foremost discipline of domestic stewardship."
            },
            {
                kuralNumber: 44,
                line1: "தேன்முதல் ஈந்து காய்திரட்டும் வாழையாம்",
                line2: "தான்பகிர்வோர் தொல்குடி வாழ்வு.",
                tamilPorul:
                    "தான் காயாகத் திரண்டு முதிர்வதற்கு முன்பே மகரந்தச் சேர்க்கைக்கு வரும் உயிர்களுக்குத் தேனை முதலில் ஈந்து பகிரும் வாழையடி வாழைப் பரம்பரையைப் போல, பிறர்க்குப் பகிர்ந்தளித்த பின் உண்போரின் தொல்குடி வாழ்வு எக்காலத்திலும் அழியாது நிலைக்கும்.",
                meaning:
                    "Guided by deep-time pollination logic, the blossom offers its sweet nectar to visiting creatures first before sealing and swelling its own fruit tiers, ensuring unbroken generational shoots below. A household that shuns selfish hoarding and shares nourishment before partaking preserves its lineage and honor without end."
            },
            {
                kuralNumber: 45,
                line1: "மென்மடல் போர்த்தித் தளிர்வளர்க்கும் காவல்தான்",
                line2: "நன்மனை மாண்பும் விளைவு.",
                tamilPorul:
                    "மென்மையான ஊதா மடல்களால் உள்ளிருக்கும் இளம் பூக்களை அன்போடு போர்த்திப் பாதுகாத்து, ஒழுங்கான வரிசையில் காய்களை வளர்த்தெடுக்கும் வாழைப்பூவின் கனிவான காவலே, நல்ல இல்லறத்தின் மாண்பும் பயனும் ஆகும்.",
                meaning:
                    "Wrapped in curved, velvety bracts that shield delicate cream florets from scorching sun and wind while arranging each hand in exact spiral order, the blossom turns protective tenderness into wholesome fruit. When domestic life unites genuine affection with disciplined order, that harmony itself is both its dignity and its reward."
            },
            {
                kuralNumber: 46,
                line1: "அகத்துறு சீப்பும் அரும்பும் புரக்கும்",
                line2: "தகவுடை வாழ்விற்கு வேறு.",
                tamilPorul:
                    "தன் அகத்தே அமைந்த காய்ச்சீப்புகளையும் இளம் அரும்புகளையும் முழுமையாகப் புரந்து நிறைவு காணும் வாழைப்பூவைப் போல, அறநெறியில் நின்று குடும்பத்தைப் பேணும் தகுதி உடைய இல்லற வாழ்விற்கு மேல் வேறென்ன பேறு இருக்க முடியும்?",
                meaning:
                    "Without needing solitary isolation, the Banana Blossom achieves complete biological fulfillment right inside its clustered household—sheltering, feeding, and maturing every tier in place. When domestic life is lived cleanly along the path of righteousness, nothing greater remains to be gained by abandoning it."
            },
            {
                kuralNumber: 47,
                line1: "கூர்மடல் சீருடன் பூத்தலால் வாழைப்பூ",
                line2: "பார்முயல்வோர் யாவருள் மேல்.",
                tamilPorul:
                    "கூர்மையான தன் மடல்களை அவசரமின்றி ஒன்றன்பின் ஒன்றாகச் சீரிய ஒழுங்குடன் விரித்துப் பூப்பதால், உலகில் பலவாறு முயன்று உழைப்போரையெல்லாம் விட இயல்பான இல்லற நெறியில் வாழ்பவரே மேலானவராவர்.",
                meaning:
                    "Unfolding one bract at a time in measured, unhurried cadence so each tier receives light and pollination in proper turn, the Banana Blossom outperforms erratic, uncoordinated bloomers. One who conducts household life in harmony with its true natural order stands foremost among all who strive."
            },
            {
                kuralNumber: 48,
                line1: "தொகுதிகாய் தாங்கியும் சாயாத தண்டின்",
                line2: "மிகுதவம் செய்வாரின் சீர்.",
                tamilPorul:
                    "பல சீப்புகளாகத் திரண்ட கனமான காய்த் தொகுதிகளைத் தாங்கிக்கொண்டும் முறிந்து சாயாமல் வளைந்து கொடுத்து நிற்கும் வாழைத்தண்டின் உறுதிப்பாடே, கடுமையான தவத்தை மேற்கொள்வோரின் மனவலிமையை விட உயர்ந்த சீர்மையாகும்.",
                meaning:
                    "Suspended downward from a fibrous, flexible peduncle engineered to bear the heavy weight of dozens of growing green bananas through fierce winds without snapping, the stalk demonstrates extraordinary structural fortitude. Guiding a household steadily on the right path without swerving from integrity requires greater endurance than solitary austerity."
            },
            {
                kuralNumber: 49,
                line1: "உலர்ந்தமடல் நீக்கி உயர்குலை காக்கும்",
                line2: "நலந்திகழும் குற்றமில் பண்பு.",
                tamilPorul:
                    "ஒவ்வொரு சீப்பும் காயாகப் பிடித்தவுடன் உலர்ந்து போன பூவிதழ்களையும் மடல்களையும் தானே உதிர்த்து நீக்கி, உயரும் குலையைத் தூய்மையாகக் காக்கும் வாழைப்பூவைப் போல, பிறர் பழிக்கும் குற்றமின்றி வாழ்வதே நலம் திகழும் இல்லறப் பண்பாகும்.",
                meaning:
                    "As each upper hand sets fruit, the blossom cleanly sheds withered perianth tips and spent bracts so the developing bunch remains neat, ventilated, and free from decay. Domestic life is itself the definition of virtue, and it shines brightest when kept free from any blemish that invites reproach."
            },
            {
                kuralNumber: 50,
                line1: "வேர்முதல் தார்வரை மண்ணுயிர்க்கு ஈந்தவாழ்வு",
                line2: "பார்மதிக்கும் வானோர் தலம்.",
                tamilPorul:
                    "மண்ணில் புதைந்த வேர்க்கன்று முதல் உச்சியில் தொங்கும் தார் வரை தன் ஒவ்வொரு கூறையும் மண்ணுயிர்களுக்கே முழுமையாக ஈந்து வாழும் வாழையின் வாழ்வியல் போல, உலகில் வாழ வேண்டிய அறநெறிப்படி வாழ்பவர் வானோர் உலகத்துள் வைத்து மதிக்கப்படுவர்.",
                meaning:
                    "From underground shoots and nourishing pith to nectar-rich florets and abundant fruit, every single part of the banana plant is offered back to sustain living beings, earning it sacred reverence at auspicious thresholds. Living on earth in complete alignment with life's highest duties elevates human existence to celestial stature."
            }
        ]
    },

    // ======================================================================
    // CHAPTER 6: வாழ்க்கை துணைநலம் — சங்குப்பூ (Kurals 51–60)
    // ======================================================================
    {
        chapterNumber: 6,                       // Automatically loads images/6.jpg -> Pillar 01 -> Iyal 02 (இல்லறவியல்)
        tamilTitle: "வாழ்க்கை துணைநலம் — சங்குப்பூ",
        chapterTitle: "The Worth of a Wife (Life Partner) – The Butterfly Pea",
        flowerName: "The Butterfly Pea (சங்குப்பூ)",
        tamilSummary:
            "பற்றும் கிளையை நெருக்காமல் நலம் பெருக்கி, வேரகத்து உரத்தால் மண்ணை வளப்படுத்தி, வாய்த்த இடத்தில் குறையகற்றி, நீலவிதழ்க்குள் கருவுறுதி காத்து, பிறிதின்றி வைகறை பூத்து நிலம் குளிர்வித்து, தன்னரண் ஓம்பி அயராது சேர்மரத்தையும் நன்பெயரையும் தாங்கி, முள்வேலியின்றி கவிழ்மடல் உள்காவலால் நிலைத்து, தகுங்கொம்போடு கூடி வான்மேன்மை எய்தி, கோட்டிற்குப் பொலிவும் வீரமும் சேர்த்து, மணியொளித் திருவுடன் முதிர்காயால் ஆன்ற மரபுக்கு அணிகலனாகும் சங்குப்பூவின் வாழ்வியல் — ஒத்திசைவு, கற்புறுதி, உள்காவல், சோர்விலாப் பேணல் மற்றும் நன்மக்கட் பேறு ஆகியவையே வாழ்க்கைத் துணைநலத்தின் முழுமை என்பதைக் குறள்கள் 51–60 வழியே நிறுவுகிறது.",
        summary:
            "Across ten verified survival designs of the Butterfly Pea, Chapter 6 establishes partnership not as passive dependence, but as active mutual enrichment. True companionship thrives by harmonizing gently within shared means (51), supplying unseen inner nourishment without which outward wealth is hollow (52), turning scarcity into completeness through worthy presence (53), anchoring the core in unshakeable chastity (54), radiating single-hearted devotion at whose bidding even the rains fall (55), balancing self-integrity, partner care, and reputation untiringly (56), trusting the self-governed inner restraint of chastity over external barriers (57), rising through balanced union to exalted honor (58), lending unshaken poise before detractors (59), and crowning auspicious domestic grace with a noble next generation (60).",
        architecturalArc: [
            {
                range: "51–53",
                phase: "Harmony & Enrichment",
                traits: "Non-strangling gentle twining • Nitrogen-fixing root nodules • Lean-soil fertility & renewal"
            },
            {
                range: "54–56",
                phase: "Chastity & Stewardship",
                traits: "Clasped inner keel petals • Dawn-opening cooling canopy • Fourfold defense & tireless bloom"
            },
            {
                range: "57–59",
                phase: "Restraint & Dignity",
                traits: "Thornless hooded self-guard • Anthocyanin-rich sacred union • Regal blue banner elevating bare twigs"
            },
            {
                range: "60",
                phase: "Auspicious Continuity",
                traits: "Sapphire blossom grace crowned by slender pods maturing vigorous seeds"
            }
        ],
        greenThinkingPrinciple:
            "True partnership enriches the very ground it leans on—never choke your support, build unseen fertility at the roots, rely on inner restraint rather than walls, and let shared harmony ripen into a resilient lineage.",
        kurals: [
            {
                kuralNumber: 51,
                line1: "பற்றும் கிளைநலம் மெல்லப் பெருக்கிடும்",
                line2: "உற்ற மலர்க்கொடி சார்பு.",
                tamilPorul:
                    "தான் பற்றிப் படரும் கிளையை நெருக்கி வருத்தாமல் மெல்லப் பிணைந்து, அதன் சூழலின் நலத்தைப் பெருக்கி வாழும் சங்குப்பூ மலர்க்கொடியைப் போல, இல்லத்தின் இயல்புக்கும் வருவாய்க்கும் பொருந்தி வளம் பெருக்கும் உற்ற இணையே சிறந்த வாழ்க்கைத் துணையாகும்.",
                meaning:
                    "Engineered as a graceful twining legume, the Butterfly Pea climbs its supporting branch softly without strangling it, balancing its own growth cleanly within available sunlight and soil. A worthy life partner embodies household grace while harmonizing life steadily within shared means."
            },
            {
                kuralNumber: 52,
                line1: "வேரகத்து நல்கும் அகவுரம் அற்றக்கால்",
                line2: "பார்பெருமை எத்தனையும் பாழ்.",
                tamilPorul:
                    "மண்ணுள் மறைந்திருக்கும் வேர் முடிச்சுகள் நல்கும் உள்ளார்ந்த உயிர் உரம் இல்லாவிட்டால், வெளிப்புற இலைப்பரப்பும் மண் வளமும் எத்துணை பெரிதாயினும் பயனற்றது போல, உள்ளார்ந்த இல்லற நற்பண்பு இல்லாதபோது உலகப் பெருமைகள் எத்தனை இருந்தாலும் அவை பாழாகும்.",
                meaning:
                    "Beneath the surface, symbiotic root nodules quietly fix atmospheric nitrogen to enrich the soil; without that unseen inner vitality, broad trellises and lush appearances soon turn barren. When domestic excellence is absent in a partnership, outward prestige and abundance amount to emptiness."
            },
            {
                kuralNumber: 53,
                line1: "நறுஞ்சங்கு வாய்ப்பின் குறைவெது வாடின்",
                line2: "உறுபொருள் யாதுளது கூறு.",
                tamilPorul:
                    "வளம் தரும் நறுஞ்சங்குப் பூங்கொடி வேரூன்றி வாய்த்த நிலத்தில் வேறு என்ன குறை இருக்க முடியும்? அது வாடி அற்றுப்போன இடத்தில் நிலைத்த உறுபொருள் எதுதான் இருக்கிறது என்று கூறுக.",
                meaning:
                    "Wherever a thriving Butterfly Pea vine takes hold, even lean village soil turns fertile, vibrant, and alive with pollinators; when it withers away, the ground lapses back into bareness. With a truly worthy life partner, nothing essential is lacking; without that worth, nothing of substance truly endures."
            },
            {
                kuralNumber: 54,
                line1: "நீலவிதழ் சூழும் கருவுறுதி சேர்ந்திடின்",
                line2: "சீலநிலை மிஞ்சல் அரிது.",
                tamilPorul:
                    "ஆழ்ந்த நீல இதழ்களுக்குள் தன் கருவைச் சூழ்ந்து சிதையாமல் காக்கும் சங்குப்பூவின் உள்ளார்ந்த உறுதியை ஒப்ப, மாறாத சீலநிலையாகிய கற்புறுதி வாய்க்கப் பெற்றால் அதனை மிஞ்சும் மேன்மை உலகில் எதுவும் இல்லை.",
                meaning:
                    "Nestled at the center of the broad royal-blue banner, tightly clasped inner keel petals shield the flower's reproductive heart against harsh wind and casual disturbance. Nothing in existence surpasses the stature of a life partner anchored in unshakeable chastity and steadfast inner resolve."
            },
            {
                kuralNumber: 55,
                line1: "பிறிதின்றி வைகறை பூத்தெழும் வல்லி",
                line2: "நெறிநின்றாள் ஏவப் பெயல்.",
                tamilPorul:
                    "வேறு சிதறலின்றி நாள்தோறும் வைகறைப் பொழுதில் தன்னைத் தாங்கும் கிளையை நோக்கி மலர்ந்தெழுந்து நிலத்தைக் குளிரவைக்கும் சங்குப்பூ வல்லியைப் போல, ஒருமுகப்பட்ட அறநெறியில் நின்று துணைவனைப் போற்றுபவள் ஏவியவுடனே வான்மழையும் பொழியும்.",
                meaning:
                    "Awakening faithfully each dawn with single-minded orientation, the Butterfly Pea weaves a dense, cool green canopy that locks dew into parched earth and softens its micro-climate into rain-welcoming fertility. Undivided devotion and steadfast partnership carry a moral harmony at whose bidding even the rains fall."
            },
            {
                kuralNumber: 56,
                line1: "தன்னரண் ஓம்பி அயராது சேர்மரம்",
                line2: "நன்பெயர் தாங்கும் இணை.",
                tamilPorul:
                    "இயற்கைக் காப்பால் தன் அரணை ஓம்பி, சோர்வின்றித் தான் சேர்ந்த மரத்திற்கு வேர் உரம் தந்து, மாசற்ற நீலப் பொலிவால் சூழலுக்கு நன்பெயர் தாங்கும் சங்குப்பூவைப் போல, தன்னைக் காத்துத் துணையைப் பேணி இல்லத்தின் நற்பெயரை அயராது தாங்குபவளே சிறந்த இணையாவாள்.",
                meaning:
                    "Simultaneously protecting its own tissues with natural defense peptides, feeding its host plant's soil with nitrogen, displaying unblemished purity, and blooming untiringly across seasons, the vine sustains four duties without burnout. Guarding personal integrity, cherishing one's partner, and upholding family honor without fatigue define true partnership."
            },
            {
                kuralNumber: 57,
                line1: "முள்வேலி ஆற்றுவது ஏது கவிழ்மடல்",
                line2: "உள்காவல் ஒன்றே முதல்.",
                tamilPorul:
                    "முட்களற்ற சங்குப்பூ வெளிக்கூண்டு எதுவுமின்றித் திறந்த வெளியில் வளர்ந்தும் தன் கவிழ்ந்த மடலால் கருவைக் காப்பது போல, புறத்தே அமைக்கும் முள்வேலிகள் எதைத்தான் காத்துவிட முடியும்? தன்னியல்பான உள்காவல் ஒன்றே எல்லாவற்றிலும் முதலானதாகும்.",
                meaning:
                    "Completely thornless and growing across open hedges without cages or spines, the Butterfly Pea safeguards its pollen entirely from within through its inverted, hooded petal architecture. External walls and forced confinement guard nothing; the self-governed inner restraint of chastity is the supreme protection."
            },
            {
                kuralNumber: 58,
                line1: "தகுங்கொம்பு கூடிக் கருவிளை ஓங்கின்",
                line2: "மிகுமேன்மை வானில் தரும்.",
                tamilPorul:
                    "தகுதியான கொம்போடு இணக்கமாகக் கூடிப் படரும் கருவிளையாகிய சங்குப்பூ செழித்து ஓங்கும்போது அரிய மருத்துவப் பயனும் வழிபாட்டுச் சிறப்பும் பெறுவது போல, தகுதியான துணையோடு ஒத்திசைந்து வாழும் இல்வாழ்வு வானுலகினும் மிகுந்த மேன்மையைத் தரும்.",
                meaning:
                    "When the Karuvilai vine entwines a worthy support in balanced harmony, it rises into luminous indigo blooms prized across healing traditions for their rich anthocyanins and revered in sacred offerings. Devoted mutual union elevates partnership to exalted honor even in the highest realms."
            },
            {
                kuralNumber: 59,
                line1: "காக்கணம் சூடாத கோடொப்பச் சால்பிலார்",
                line2: "தாக்குவார்க்கண் வீரம் கெடும்.",
                tamilPorul:
                    "ஒளிவீசும் காக்கணம் பூக்களைச் சூடாத வெறும் உலர்ந்த மரக்கோடு பொலிவிழந்து நிற்பது போல, இல்லத்தின் பெருமையைக் காக்கும் சால்புடைய துணை இல்லாதவர்க்கு இகழ்ந்து தாக்குவார் முன்னிலையில் அஞ்சா வீரமும் நிமிர்வும் கெட்டுப்போகும்.",
                meaning:
                    "Draped in glowing cobalt conch-banners, even an ordinary hedge branch commands unmistakable poise and admiration, whereas an unpartnered dry twig stands bare and overlooked. Without a partner who safeguards honor and dignity, fearless composure falters before detractors."
            },
            {
                kuralNumber: 60,
                line1: "மணியொளி வீசும் திருவாம் முதிர்காய்",
                line2: "அணிகலன் ஆன்ற மரபு.",
                tamilPorul:
                    "நீலமணி ஒளிவீசும் சங்குப்பூவின் பொலிவே இல்லத்திற்கு மெய்யான திருவாகும்; அதிலிருந்து விளைந்து நெற்றாகத் திரளும் முதிர்காயும் அதனுள் விளையும் வித்துகளும் போல, ஆன்ற நன்மக்களின் மரபே அத்திருவிற்குச் சிறந்த அணிகலனாகும்.",
                meaning:
                    "The serene sapphire-and-ivory radiance of the open blossom stands as living auspiciousness on the vine, while the slender green pods maturing cleanly afterward cradle vigorous seeds that carry the lineage forward. Household grace in a partner is true auspiciousness, and noble offspring are its crowning jewel."
            }
        ]
    },

    // ======================================================================
    // CHAPTER 7: புதல்வரைப்பெறுதல் — மாதுளம்பூ (Kurals 61–70)
    // ======================================================================
    {
        chapterNumber: 7,                       // Automatically loads images/7.jpg -> Pillar 01 -> Iyal 02 (இல்லறவியல்)
        tamilTitle: "புதல்வரைப்பெறுதல் — மாதுளம்பூ",
        chapterTitle: "The Wealth of Children – The Pomegranate Blossom",
        flowerName: "The Pomegranate Blossom (மாதுளம்பூ)",
        tamilSummary:
            "செங்குடத்துள் நூறு அருமணி வித்துகளைப் பொதிந்து, வன்றோலால் மாசற்ற தலைமுறையைக் காத்து, ஒவ்வொரு சுளையிலும் தன் சுவைச்சாற்றைத் தானே சுரந்து, எளிய களிமண் நீரை இனிய நறவாக்கி, மென்னிதழ் ஊறும் வண்டிசையும் தந்து, இளம் பூமுகையின் இயல்பான பண்ணால் கவர்ந்து, கொம்பேந்திப் பூமுடி சூட்டி உயர்த்தி, முதிர்கிளையைத் தாண்டிப் பொலியும் கனியாகி, பூத்த நாளைக் காட்டிலும் வெடித்து மின்னும் முதிர்வில் நிறைவு கண்டு, சுவைத்தோர் எல்லாம் தாய்வேரின் தவத்தை வியந்து வாழ்த்தும்படித் திகழும் மாதுளம்பூவின் வாழ்வியல் — அறிவு, நற்செயல், பண்பு மற்றும் உலகம் போற்றும் சான்றாண்மை கொண்ட நன்மக்களே பெற்றோருக்கும் உலகுக்கும் அழியாத பெருஞ்செல்வம் என்பதைக் குறள்கள் 61–70 வழியே நிறுவுகிறது.",
        summary:
            "Across ten verified reproductive and structural designs of the Pomegranate Blossom, Chapter 7 celebrates enlightened offspring as life's supreme inheritance. True wealth shines in raising discerning children (61) whose blameless integrity shields generations from harm (62) and whose lasting worth blossoms from their own righteous deeds (63). Everyday simplicity touched by young hands surpasses celestial nectar (64), a child's embrace and voice delight both body and ear (65), and tender early speech outshines every crafted instrument (66). Parents fulfill their highest calling by crowning their children with wisdom to lead among the learned (67); when the next generation surpasses the previous one, the whole world flourishes (68), a mother's proudest joy outweighs the hour of birth (69), and a child's noble life becomes the world's highest tribute to the unseen roots that raised them (70).",
        architecturalArc: [
            {
                range: "61–63",
                phase: "True Wealth & Lineage",
                traits: "Multi-chambered ruby seed cup • Tannin-rich protective rind • Self-synthesized aril vigor"
            },
            {
                range: "64–66",
                phase: "Tenderness & Grace",
                traits: "Plain water turned sweet nectar • Ruffled petals & bee hum • Living melody of young crimson buds"
            },
            {
                range: "67–69",
                phase: "Elevation & Triumph",
                traits: "Persistent royal sepal crown • Fruit surpassing gnarled parent branch • First bloom vs. radiant ripe harvest"
            },
            {
                range: "70",
                phase: "Tribute to the Roots",
                traits: "Sweet ruby harvest prompting wonder at the unseen root discipline that bore it"
            }
        ],
        greenThinkingPrinciple:
            "The highest legacy of any living system is not guarding its own branch, but crowning the next generation to outshine it—investing unseen root discipline today so tomorrow's seeds nourish the whole earth.",
        kurals: [
            {
                kuralNumber: 61,
                line1: "அருமணி நூறு பொதிந்த குடப்பூ",
                line2: "கருத்துடை மைந்தர் வளம்.",
                tamilPorul:
                    "ஒரு செந்நிறக் குடம்போன்ற மாதுளம்பூ தன் உள்ளே நூற்றுக்கணக்கான அரிய செம்மணி வித்துகளைப் பொதிந்து உருவாக்குவது போல, நுட்பமான அறிவும் தெளிந்த கருத்தும் உடைய நன்மக்களைப் பெறுவதே வாழ்வில் எவற்றினும் உயர்ந்த வளமாகும்.",
                meaning:
                    "Engineered across deep time, a single scarlet urn-shaped pomegranate blossom transforms its swollen floral cup into a multi-chambered treasury holding hundreds of translucent ruby seeds. Among every acquisition life can offer, nothing equals the wealth of wise, discerning children."
            },
            {
                kuralNumber: 62,
                line1: "வன்றோல் புரக்கும் மறுவிலா வித்தென",
                line2: "நன்சீர் வழித்தோன்றல் காப்பு.",
                tamilPorul:
                    "உறுதியான தோல்காப்பு உள்ளிருக்கும் மாசற்ற மாதுளை வித்துகளைப் புழுபூச்சிகளும் சிதைவும் தீண்டாமல் தலைமுறை கடந்தும் காப்பது போல, குற்றமற்ற நற்சீர் கொண்ட வழித்தோன்றல்களைப் பெறுதல் ஏழு தலைமுறைக்கும் தீமை அணுகாத அரணாகும்.",
                meaning:
                    "Wrapped inside a tough, tannin-rich leathery rind evolved to resist rot, pests, and drought, the blossom's unblemished seeds preserve their vitality cleanly across generations. Blameless, virtuous children stand as an enduring shield that keeps calamity far from a family's lineage."
            },
            {
                kuralNumber: 63,
                line1: "முற்றும் சுளையுள் சுரந்திடும் சாறென",
                line2: "நற்செயல் சேயர் திரு.",
                tamilPorul:
                    "கிளையில் தோன்றினாலும் முதிர்ந்து வரும் ஒவ்வொரு மாதுளைச் சுளையின் உள்ளேயே அதன் சுவைமிக்க சாறும் முளைப்புத் திறனும் தனித்துச் சுரப்பது போல, நம் குழந்தைகளே நம் மெய்யான செல்வம்; அவர்களின் சிறப்பு அவரவர் நற்செயலாலேயே உருவாகும்.",
                meaning:
                    "Although nourished on a shared mother branch, each pomegranate aril synthesizes its own translucent sweetness and self-contained embryonic vigor from within. Children are a parent's truest wealth, and the enduring worth of that wealth is forged directly through their own righteous deeds."
            },
            {
                kuralNumber: 64,
                line1: "களிமண் புனலும் நறவாகும் பூப்போல்",
                line2: "தளிர்க்கை துழாவுணவே தேன்.",
                tamilPorul:
                    "சாதாரண களிமண்ணின் எளிய நீரை உறிஞ்சித் தன் மலர் அலகால் இனிய நறவாக மாற்றும் மாதுளம்பூவைப் போல, தம் குழந்தைகளின் மென்மையான தளிர்க்கைகள் தொட்டுத் துழாவிய எளிய உணவே வானத்து அமிழ்தினும் மேலான தேனாகும்.",
                meaning:
                    "Drawing plain rainwater and ordinary earth minerals up through a modest twig, the crinkled vermilion blossom converts humble elements into luminous, sweet drops eagerly gathered by small hands. Simple food touched and stirred by the tender fingers of one's own children tastes far sweeter than celestial nectar."
            },
            {
                kuralNumber: 65,
                line1: "மெல்லிதழ் ஊறும் அளிமுரலும் போல்மகவின்",
                line2: "புல்லல் உரையும் களிப்பு.",
                tamilPorul:
                    "மாதுளம்பூவின் மென்மையான சுருள் இதழ்களைத் தொடுதலால் ஏற்படும் இனிய ஊறும், அதன் தேன்குடத்துள் வண்டுகள் முரலும் மெல்லிசையும் போல, தம் குழந்தையைத் தழுவும் உடலூறும் அதன் இனிய உரையைக் கேட்பதும் உள்ளத்திற்குப் பெருங்களிப்பாகும்.",
                meaning:
                    "The soft, ruffled scarlet petals offer gentle tactile grace, while the quiet hum of bees gathering inside the waxy floral bell fills the garden air with soothing resonance. Embracing one's child brings deep joy to the body, and listening to their voice brings equal joy to the ear."
            },
            {
                kuralNumber: 66,
                line1: "வீணையும் வேயும் நயம்பகர்வர் பூமுகையின்",
                line2: "காணார் இளங்கிளவிப் பண்.",
                tamilPorul:
                    "மாதுளையின் மென்மையான பூமுகை காற்றில் அசைந்து உயிர்பெறும் இயல்பான இசையை அறியாதவர் போல, தம் குழந்தைகளின் கொஞ்சும் இளங்கிளவிப் பண்ணை அனுபவித்திராதவரே வீணையும் மூங்கில் வேய்குழலும் இனிமையானவை என்று புகழ்வர்.",
                meaning:
                    "Before the mature fruit ever forms, the earliest crimson buds trembling open amid morning breezes carry a living, unscripted vitality that outshines every human-crafted ornament. Only those who have never heard the sweet, lisping melody of their own children rank the flute or lute as life's sweetest music."
            },
            {
                kuralNumber: 67,
                line1: "கொம்பேந்திப் பூமுடி சூட்டுதல்போல் கற்றோர்முன்",
                line2: "செம்மலாய்ச் சேர்த்தல் கடன்.",
                tamilPorul:
                    "மாதுளையின் கிளை தன் மலரை உயர்த்திப் பிடித்து அதன் தலையில் அழியாத பூமுடியைச் சூட்டிப் பழமாக்குவது போல, தம் பிள்ளையைக் கற்றறிந்த அறிஞர் அவையில் முதன்மையான செம்மலாக உயர்த்திச் சேர்ப்பதே பெற்றோரின் தலையாய கடமையாகும்.",
                meaning:
                    "Lifting its blossom outward into full sunlight, the parent branch permanently fixes the calyx lobes into a sculpted royal crown atop the ripening fruit's head. The foremost duty a parent owes a child is nurturing their wisdom so they stand crowned and foremost in the assembly of the learned."
            },
            {
                kuralNumber: 68,
                line1: "முதிர்கிளை தாண்டிப் பொலியும் பழம்போல்",
                line2: "மதிமிகல் வையகத்து நன்று.",
                tamilPorul:
                    "கரடுமுரடான முதிர்ந்த முட்கிளையைக் காட்டிலும் ஒளிவீசிப் பொலியும் செம்மாதுளைப் பழம் பறவைகள் முதல் மானுடர் வரை அனைவருக்கும் நலம் சேர்ப்பது போல, பெற்றோரை விடப் பிள்ளைகள் அறிவுமதியில் மிகுந்து வளர்தல் இவ்வுலக உயிர்களுக்கெல்லாம் நலமாகும்.",
                meaning:
                    "Arising from a gnarled, modest, lightly thorned woody shrub, the luminous ruby-packed pomegranate far surpasses its humble branch to nourish birds, pollinators, and communities across the land. When children grow wiser than their parents, that triumph brings joy and benefit to every living being on earth."
            },
            {
                kuralNumber: 69,
                line1: "பூத்தநாள் காட்டிலும் செங்காய் விரிதல்போல்",
                line2: "ஏத்த மிகமகிழும் யாய்.",
                tamilPorul:
                    "மாதுளை முதன்முதலாகச் செந்நிறத்தில் பூத்த நாளைக் காட்டிலும், அது முழுமையாகக் கனிந்து வெடித்து உள்ளிருக்கும் ஒளிமணிகளை உலகுக்குக் காட்டும் நாளே அதன் பேரழகு போல, தம் பிள்ளையைப் பிறர் நற்குணச் சான்றோன் எனப் போற்றி ஏத்தும்போது அன்னை பிறந்த நாளை விட மிகுதியாக மகிழ்வாள்.",
                meaning:
                    "Brilliant as the pomegranate's first scarlet flowering is, the parent plant reaches its true culmination months later when the crowned fruit splits cleanly to unveil radiant, perfected ruby seeds admired far and wide. A mother's heart swells with far deeper joy upon hearing her child acclaimed for noble character than on the very day of birth."
            },
            {
                kuralNumber: 70,
                line1: "மாதுளை தீங்கனி மாந்தியோர் வேர்நோக்கி",
                line2: "யாதுதவம் செய்ததாம் வாழ்த்து.",
                tamilPorul:
                    "இனிமை நிறைந்த மாதுளைக் கனியைச் சுவைத்து மகிழ்ந்தோர், இத்தகைய அருங்கனியை விளைவித்த தாய்மரத்தின் வேரும் மண்ணும் என்ன தவம் செய்தனவோ என வியந்து போற்றுவது போல, \"இவரைப் பெற இவர்தம் பெற்றோர் என்ன தவம் செய்தாரோ\" என உலகம் வாழ்த்தும்படி வாழ்வதே பிள்ளை ஆற்றும் உயர்ந்த கைம்மாறாகும்.",
                meaning:
                    "Whoever tastes a sweet, ruby-laden pomegranate—or watches its scattered seeds raise a thriving new grove—instinctively marvels at the unseen root discipline and fertile ground that shaped it. Living with such luminous excellence that the world asks what great merit one's parents practiced is the highest gratitude a child can ever repay."
            }
        ]
    },

    // ======================================================================
    // CHAPTER 8: அன்புடைமை — செம்பருத்தி (Kurals 71–80)
    // ======================================================================
    {
        chapterNumber: 8,                       // Automatically loads images/8.jpg -> Pillar 01 -> Iyal 02 (இல்லறவியல்)
        tamilTitle: "அன்புடைமை — செம்பருத்தி",
        chapterTitle: "The Possession of Love – The Scarlet Hibiscus",
        flowerName: "The Scarlet Hibiscus (செம்பருத்தி)",
        tamilSummary:
            "கதவின்றி அகல விரிந்து தேன்துளியால் உள்ளூற்றைக் காட்டி, கருத்தூணை வெளியே நீட்டிப் பிறர்க்காகப் பகிர்ந்து, சூல்தண்டும் கேசரமும் ஒன்றாய்ப் பிணைந்து, வண்ணத்துப்பூச்சிகளையும் மகரந்தச் சேர்க்கையாளர்களையும் ஈர்த்து அரிய கேண்மை சேர்த்து, நாள்தோறும் கனிவுடன் பூத்துலவி, நன்மைக்கே அன்றி வெம்மைப் புன்மைக்கும் குளிர் மருந்தாகி, உயிர்ப்பசையற்றால் வெயிலில் வாடுவதையும் காய்ந்த கொம்பில் பூவாததையும் உணர்த்தி, உள்ளே தேனற்றால் புறக்கோலம் பயனில என்பதைக் காட்டி, காதலால் பூப்பதே ஆவிநலம் என நிலைநாட்டும் செம்பருத்தியின் வாழ்வியல் — தடையற்ற கனிவு, தன்னலமற்ற பகிர்வு, நட்புப் பிணைப்பு மற்றும் உயிரோட்டமான நேயமே வாழ்வின் மெய்ப்பொருள் என்பதைக் குறள்கள் 71–80 வழியே மெய்ப்பிக்கிறது.",
        summary:
            "Across ten verified floral and ecological designs of the Scarlet Hibiscus, Chapter 8 reveals love not as sentimental softness, but as the vital sap animating all existence. Authentic affection refuses confinement and reveals itself through quiet overflow (71), extends its very core freely for others (72), gives embodied life its true purpose of union (73), draws pollinators into enduring, priceless friendship (74), crowns daily earthly life with serene joy (75), serves both peaceful virtue and the healing transformation of harsh enmity (76), shields life where lovelessness withers under cosmic law (77), makes domestic flourishing possible where barren dryness fails (78), gives meaning to outward splendor that is otherwise empty (79), and marks the dividing line between a truly living soul and a hollow husk (80).",
        architecturalArc: [
            {
                range: "71–73",
                phase: "Openness & Self-Giving",
                traits: "Barrier-free petals & nectar drop • Outstretched staminal pillar • Fused style-stamen union"
            },
            {
                range: "74–76",
                phase: "Attraction & Healing",
                traits: "Butterfly & pollinator magnetism • Daily vibrant bloom renewal • Cooling medicinal mucilage"
            },
            {
                range: "77–79",
                phase: "Vitality vs. Emptiness",
                traits: "Sapless petal scorching in sun • Dry cutting in barren soil • Showy petals without inner nectar"
            },
            {
                range: "80",
                phase: "Essence of Living",
                traits: "Radiant living bloom vs. dusk's pollen-stripped papery husk"
            }
        ],
        greenThinkingPrinciple:
            "Love is nature's primary energy circuit—stay open without thorns, share your vital core to build symbiotic alliances, heal harshness with calm steadiness, and never mistake outward display for living sap within.",
        kurals: [
            {
                kuralNumber: 71,
                line1: "செந்தோடு மூடக் கதவுளதோ மென்மலரின்",
                line2: "சிந்தும் துளிகாட்டும் ஊற்று.",
                tamilPorul:
                    "அகல விரிந்த செம்பருத்தியின் செந்நிற இதழ்களை அடைத்து மூடுவதற்குக் கதவு ஏதேனும் உள்ளதோ? அந்த மென்மலரின் அடியில் சுரந்து சிந்தும் தேன்துளியே உள்ளே பொங்கும் கனிவின் ஊற்றை உலகுக்கு வெளிப்படுத்திக் காட்டிவிடும்.",
                meaning:
                    "Engineered with five wide-open, thornless crimson petals and zero enclosing hood or barrier, the Hibiscus reveals glistening droplets of nectar at its throat the moment it opens. Genuine love can never be locked away behind closed doors—the quiet overflow of tender feeling inevitably reveals the deep spring within."
            },
            {
                kuralNumber: 72,
                line1: "கருத்தூண் வெளியே பகிர்பூப்போல் நேயர்",
                line2: "தருவார் அயலார்க்கும் மெய்.",
                tamilPorul:
                    "தன் உள்ளே ஒளித்து வைக்காமல் நீண்ட கருத்தூணை முழுமையாக வெளியே நீட்டி, மகரந்தத்தையும் தேனையும் பிற உயிர்களுக்குப் பகிர்ந்தளிக்கும் செம்பருத்திப் பூவைப் போல, நேயம் கொண்டோர் தம் மெய்யையே பிறர்க்கு உரியதாகத் தருவர்.",
                meaning:
                    "Rather than guarding its reproductive core inside a sealed cup, the Hibiscus thrusts its entire staminal pillar boldly outward to share golden pollen and nectar freely with bees, butterflies, and sunbirds. While the loveless hoard everything for themselves, those rich in love give even their very essence for the good of others."
            },
            {
                kuralNumber: 73,
                line1: "சூல்தண்டும் கேசரமும் ஒன்றாய்ப் பிணைந்தது",
                line2: "நல்லீரம் வாழும் பொருட்டு.",
                tamilPorul:
                    "செம்பருத்தியின் நடுவே பெண் உறுப்பான சூல்தண்டும் ஆண் உறுப்புகளான கேசரங்களும் பிரிவின்றி ஒன்றாகப் பிணைந்து ஒரே தூணாக எழுந்திருப்பது, இனப்பெருக்கப் பிணைப்பாகிய நல்லீரம் வாழ்வதன் பொருட்டே ஆகும்.",
                meaning:
                    "Through a specialized fused-column architecture refined across deep time, the Hibiscus weaves its central female style and surrounding male filaments into one inseparable living tube. The union of precious consciousness with a physical frame exists for one enduring purpose—to live and flourish in tender affection."
            },
            {
                kuralNumber: 74,
                line1: "செம்பருத்தி வண்ணத்துப் பூச்சிகளை ஈர்த்திடும்",
                line2: "அம்பரிவு கேண்மைசேர் பேறு.",
                tamilPorul:
                    "ஒளிரும் செம்பருத்தி மலர் தன் கவர்ச்சியான நிறத்தாலும் திறந்த தேன்குழலாலும் வண்ணத்துப்பூச்சிகளையும் மகரந்தச் சேர்க்கையாளர்களையும் இயல்பாக ஈர்த்திடும் அழகிய பரிவே, ஒப்பற்ற நட்பாகிய கேண்மையைச் சேர்க்கும் பெரும் பேறாகும்.",
                meaning:
                    "Radiating vivid scarlet wavelengths and displaying an unmistakable golden pollen beacon, the Hibiscus holds extraordinary power to draw butterflies, sunbirds, and native bees into recurring mutualistic partnership. Authentic love awakens warm attraction, and that fondness ripens into the priceless treasure of enduring friendship."
            },
            {
                kuralNumber: 75,
                line1: "கனிவுற்று நாள்தோறும் பூத்துலவும் செம்பூ",
                line2: "தனிமகிழ்வு பார்நல்கும் சீர்.",
                tamilPorul:
                    "அகத்தே கனிவான உயிர்ச்சாற்றோடு நிலைத்து நாள்தோறும் புதிய செம்பூக்களாகப் பூத்துலவும் செம்பருத்தியின் பொலிவே, இப்புவியில் வாழ்ந்து தனிமகிழ்வு எய்துவோர் பெறும் உயர்ந்த சீராகும்.",
                meaning:
                    "Nourished by steady inner vitality, the Hibiscus renews its bright crimson blooms morning after morning, transforming ordinary village courtyards into vibrant havens of life and color. The deepest joy attainable in earthly existence is the natural harvest of a life steadily anchored in love."
            },
            {
                kuralNumber: 76,
                line1: "நன்மைக்கே தண்ணிதழ் ஓதும் மடமையர்",
                line2: "புன்மைக்கும் மாற்றும் மருந்து.",
                tamilPorul:
                    "குளிர்ச்சியான செம்பருத்தி இதழ்கள் அமைதியான நன்மைக்கு மட்டுமே பயன்படும் எனக் கூறுவோர் அறிவற்ற மடமையர்; உடலின் கடும் வெப்பத்தையும் தீய புண் நோயையும் தணித்து மாற்றும் மருந்தாகவும் அதுவே விளங்கும்.",
                meaning:
                    "Rich in cooling mucilage and protective antioxidants, Hibiscus petals do more than grace peaceful health—they also soothe scorching inflammation, calm harsh fever, and heal damaged tissue. Only the unseeing claim love serves goodness alone; compassionate steadiness is equally the supreme remedy that disarms hostility and transforms evil."
            },
            {
                kuralNumber: 77,
                line1: "பசையற்ற பூமடலை வெய்யோன் எரிப்ப",
                line2: "நசையிலரைச் செப்பம் சுடும்.",
                tamilPorul:
                    "உள்ளே உயிர்ப்பசை வற்றிப்போன மென்மையான செம்பருத்திப் பூமடலைச் சுடும் கதிரவன் எளிதில் எரித்து வாட்டுவது போல, உள்ளத்தில் நேயப்பசையற்ற நசையிலரை உலகின் செம்மை நெறியே சுட்டு வருத்தும்.",
                meaning:
                    "Lacking woody armor or thorny shields, a Hibiscus petal stripped of its internal moisture shrivels swiftly under blazing midday sun, whereas a sap-filled bloom holds its radiance intact. Just as fierce sunlight scorches a sapless petal, universal moral law inevitably burns a life devoid of love."
            },
            {
                kuralNumber: 78,
                line1: "உளப்பாசம் நீங்கின் மனைவாழ்வு காய்ந்த",
                line2: "களர்க்கொம்பில் பூத்தெழுதல் நேர்.",
                tamilPorul:
                    "உயிர்ப்பசையுள்ள கிளையால் எளிதில் தழைக்கும் செம்பருத்திக்கு மாறாக, உள்ளத்தில் பாசம் நீங்கிவிட்டால் இல்லற மனைவாழ்வு செழிப்பது என்பது, வறண்ட களர்நிலத்தில் நட்ட காய்ந்த கொம்பில் பூத்தெழுவதற்கு நேராகும்.",
                meaning:
                    "While a fresh, sap-rich Hibiscus cutting roots readily and breaks into scarlet bloom, a bone-dry dead twig planted in barren saline ground can never put forth a single flower. Household life emptied of inner affection has no more chance of flourishing than a withered branch blooming in sterile earth."
            },
            {
                kuralNumber: 79,
                line1: "வெளியிதழ் கோலங்கள் ஆற்றுவதென் உள்ளே",
                line2: "அளிவிரும்பும் தேன்மறந்த கால்.",
                tamilPorul:
                    "வண்டுகளும் பட்டாம்பூச்சிகளும் விரும்பி நாடும் இனிய தேனும் வளமான கருவும் உள்ளே அமையாமல் மறந்துவிட்ட பொழுது, செம்பருத்தியின் புறத்தே விரியும் பெரிய செந்நிற இதழ்க் கோலங்கள் எதைத்தான் ஆற்றிவிட முடியும்?",
                meaning:
                    "Even the grandest, ruffled crimson petals fail their ecological purpose if the flower lacks the sweet inner nectar and fertile core that summon butterflies and bees to sustain continuity. Every outward ornament and physical advantage accomplishes nothing when the inner faculty of love is absent."
            },
            {
                kuralNumber: 80,
                line1: "காதலால் பூத்தலே ஆவிநலம் ஓய்ந்திடின்",
                line2: "தாதற்ற வெற்றலரின் கூடு.",
                tamilPorul:
                    "உள்ளார்ந்த காதலால் உயிர்ப்புடன் பூத்து வாழ்வதே மெய்யான ஆவிநலமாகும்; அந்த உயிரோட்டம் ஓய்ந்துவிட்டால், மாலையில் மகரந்தத் தாது உதிர்ந்து சுருங்கி விழும் செம்பருத்தியின் வெற்றலர்க் கூட்டைப் போல வெறும் உருவமாகவே எஞ்சும்.",
                meaning:
                    "Pulsing with sap, open radiance, and active pollen throughout its living day, the Hibiscus embodies vitality only while its inner current flows; once that current withdraws at dusk, nothing remains but a twisted, pollen-stripped papery husk. Life truly lives only along the path of love—without it, a frame is merely an empty shell."
            }
        ]
    },

    // ======================================================================
    // CHAPTER 9: விருந்தோம்பல் — தும்பைப்பூ (Kurals 81–90)
    // ======================================================================
    {
        chapterNumber: 9,                       // Automatically loads images/9.jpg -> Pillar 01 -> Iyal 02 (இல்லறவியல்)
        tamilTitle: "விருந்தோம்பல் — தும்பைப்பூ",
        chapterTitle: "Hospitality – The Sacred Thumbai Blossom",
        flowerName: "The Sacred Thumbai Blossom (தும்பைப்பூ)",
        tamilSummary:
            "எட்டுத்திசையும் நோக்கி வட்டமாய் மலர்ந்து நறவீந்து, வண்டுகள் வெளியே நிற்க வெண்மடலை மூடாது திறந்து, நாள்தோறும் அன்றலர் நல்கி வளங்குன்றாது செழித்து, தூய வெண்மலர் ஒளியால் நலமகளைத் தங்கவைத்து, விதைக்காமலேயே வயல் வரப்புகளில் பம்பிப் பயிரைக் காத்து, அடுக்கடுக்காய்ப் பூத்து வருவோர்க்காகக் காத்திருந்து தேவர்க்கும் உகந்ததாகி, சிறுதுளி தேனாலும் தகுந்த உயிர்களால் பெருமாட்சி பெற்று, தேன்மறைத்து வாடும் அரும்பையும் மதுவொடுக்கும் புன்மையையும் விலக்கி, நுண்ணிதழ் தீண்ட வதங்கும் மென்மையால் கண்மாறா இன்முகத்தின் அருமையை உணர்த்தும் தும்பைப்பூவின் வாழ்வியல் — தடையற்ற வரவேற்பு, தன்னலமற்ற பகிர்வு மற்றும் நுட்பமான கனிவே விருந்தோம்பலின் முழுமை என்பதைக் குறள்கள் 81–90 வழியே நிறுவுகிறது.",
        summary:
            "Across ten verified floral and ecological designs of the Sacred Thumbai Blossom, Chapter 9 reveals hospitality as nature's supreme network of mutual survival. Domestic abundance exists to cherish those who arrive (81); hoarding nourishment alone while a guest waits outside corrupts even immortality's nectar (82); daily generosity keeps a household permanently immune to ruin (83); radiant, cheerful welcome invites prosperity to dwell within (84); sharing before consuming turns the surrounding field self-fertile and protected (85); honoring departing guests while eagerly awaiting incoming ones earns celestial esteem (86); even a tiny offering yields greatness scaled to the guest's worth (87); anxiously withholding what should be shared strips away both wealth and allies (88); refusing hospitality amid plenty is sheer folly (89); and because a guest's spirit is as fragile as a gossamer petal, even a fleeting chill in the host's eyes makes it wilt (90).",
        architecturalArc: [
            {
                range: "81–83",
                phase: "Open Table & Daily Flow",
                traits: "360° radiating nectar whorl • Open white lip vs. closed hoarding • Daily fresh node blooming"
            },
            {
                range: "84–86",
                phase: "Prosperity & Readiness",
                traits: "Luminous sacred white welcome • Self-sown companion pest control • Tiered whorls awaiting visitors"
            },
            {
                range: "87–89",
                phase: "Scale & Hoarding's Cost",
                traits: "Pinpoint drop feeding vast pollination • Unpollinated sealed bud • Lean-ridge giver vs. sap-rich hoarder"
            },
            {
                range: "90",
                phase: "Supreme Sensitivity",
                traits: "Tissue-thin white corolla drooping at a touch — honoring a guest's fragile dignity"
            }
        ],
        greenThinkingPrinciple:
            "No ecosystem thrives behind locked gates—keep your threshold open in every direction, welcome beneficial companions before guarding your harvest, and treat every visitor's dignity with the gentleness owed to a gossamer petal.",
        kurals: [
            {
                kuralNumber: 81,
                line1: "வட்டமாய்த் தும்பை மலர்ந்து நறவீதல்",
                line2: "கிட்டியோர் பேணும் கடன்.",
                tamilPorul:
                    "தன் தண்டைச் சுற்றி முழு வட்டமாய் எட்டுத்திசையும் நோக்கித் தும்பை மலர்ந்து தேனமுது ஈவது போல, இல்லம் அமைத்து வளம் காப்பதன் முழு நோக்கமும் தன்னை அணுகி வந்தோரை அன்போடு பேணி உபசரிக்கும் கடமையை ஆற்றுவதே ஆகும்.",
                meaning:
                    "Engineered as a 360-degree floral ring, the Thumbai opens outward in every direction with wide white landing petals solely to offer sweet nectar to passing bees and butterflies. Maintaining a home and gathering resources find their true purpose in welcoming and sustaining those who arrive at the door."
            },
            {
                kuralNumber: 82,
                line1: "அளிகள் வெளிநிற்க வெண்மடல் மூடி",
                line2: "ஒளித்துணல் வானமுதும் தீது.",
                tamilPorul:
                    "தேன் நாடி வந்த வண்டுகளும் பூச்சிகளும் வெளியே காத்திருக்க, தன் தூய வெண்மடலை மூடிக்கொண்டு உள்ளிருக்கும் உயிர்ச்சாற்றைத் தனியே ஒளித்து வைத்தல் தும்பையின் இயல்பு அன்று; வந்தோர் வெளியே நிற்கத் தனியே உண்பது சாவா வானமுதமாக இருந்தாலும் அது தகாத தீதாகும்.",
                meaning:
                    "Prized in traditional heritage for its pure, restorative essence, the Thumbai never seals its tubular nectar cup shut while pollinators hover outside. Consuming nourishment alone while a guest waits beyond the threshold is unworthy—even if the meal were the very elixir of immortality."
            },
            {
                kuralNumber: 83,
                line1: "அன்றலர் வந்தோர்க்கு நல்கும் நறுந்தும்பை",
                line2: "குன்றல் அறியாத சீர்.",
                tamilPorul:
                    "நாள்தோறும் புதிதாக மலரும் அன்றலர் பூக்களால் வரும் உயிர்களுக்கெல்லாம் தேன் நல்கும் நறுந்தும்பை வறட்சியிலும் வளங்குன்றாமல் செழிப்பது போல, நாடோறும் அணுகும் விருந்தினரை அன்போடு போற்றுவோர் வாழ்வு எப்போதும் வறுமையால் குன்றாத சீர்மை உடையதாகும்.",
                meaning:
                    "Opening fresh white blooms daily along successive stem nodes to feed arriving pollinators, the Thumbai ensures uninterrupted pollination and thrives effortlessly without ever slipping into barrenness. A household that tends arriving guests faithfully day after day will never sink into scarcity or ruin."
            },
            {
                kuralNumber: 84,
                line1: "மலரொளி காட்டிப் புதியோரைப் போற்றின்",
                line2: "நலமகள் தங்கிடும் வீடு.",
                tamilPorul:
                    "எளிமையும் தூய்மையும் நிறைந்த வெண்மலர் ஒளியைக் காட்டி வண்டுகளை வரவேற்கும் தும்பையைப் போல, மலர்ந்த பொலிவுடன் புதியோரை இன்முகத்தோடு போற்றி வரவேற்கும் இல்லமே திருமகளாகிய நலமகள் மகிழ்ந்து தங்கிடும் வீடாகும்.",
                meaning:
                    "Radiating clean, luminous white contrast against deep green leaves, the Thumbai invites friendly insects into thriving companion ecosystems and earns a cherished place in traditional worship. Prosperity dwells gladly inside the home where guests are greeted with genuine, radiant warmth."
            },
            {
                kuralNumber: 85,
                line1: "பம்பிய பூந்தும்பை போலப் பகிர்ந்துண்போன்",
                line2: "செம்பயிர்க்குத் தூவல் எவன்.",
                tamilPorul:
                    "உழவர் விதைக்காமலேயே வயல் வரப்புகளில் தானே செழித்துப் பம்பி வளர்ந்து, மகரந்தச் சேர்க்கையாளர்களை ஈர்த்தும் தீய பூச்சிகளைக் கட்டுப்படுத்தியும் பயிரைக் காக்கும் பூந்தும்பையைப் போல, வந்தோர்க்குப் பகிர்ந்தபின் எஞ்சியதை உண்போனின் வளமான செம்பயிர் நிலத்திற்குத் தனியே விதை தூவுதல் எதற்கு?",
                meaning:
                    "Sprouting unplanted along rural farm ridges, the self-sown Thumbai feeds pollinators first, deters destructive agricultural pests, and naturally multiplies surrounding field vitality. For one who partakes only of what remains after feeding guests, abundance regenerates on its own without anxious effort."
            },
            {
                kuralNumber: 86,
                line1: "போவோரை வாழ்த்தி அடுக்கிதழ்போல் காத்திருப்போர்",
                line2: "தேவர் உவக்கும் துணை.",
                tamilPorul:
                    "ஒரு வட்டத்துப் பூக்களில் தேன் அருந்திச் செல்லும் வண்டுகளை வழியனுப்பியபடி, மேலே அடுத்த அடுக்கில் புதிய இதழ்களை விரித்து வரும் வண்டுகளுக்காகக் காத்திருக்கும் தும்பையைப் போல, விடைபெறும் விருந்தினரை வாழ்த்தி அனுப்பி வரவிருப்போரை ஆர்வமுடன் எதிர்நோக்குவோர் வானத்துத் தேவர்களும் உவந்து ஏற்கும் இனிய துணையாவர்.",
                meaning:
                    "Stacking tiered whorls steadily up its stem, the Thumbai sees off satisfied pollinators from lower rings while opening upper buds in quiet readiness for the next arrivals—becoming a revered white blossom offered in sacred rituals. Honoring departing guests while eagerly awaiting incoming ones earns welcome companionship even among the celestials."
            },
            {
                kuralNumber: 87,
                line1: "சிறுதுளி பெய்யினும் ஈகையின் மாட்சி",
                line2: "உறுவோர் தகுதியின் கூறு.",
                tamilPorul:
                    "அளவில் சிறிய தும்பைப்பூ ஒரு நுண்ணிய துளி தேனை மட்டுமே பெய்து வழங்கினாலும், அதனை நாடி வரும் தேனீக்களும் பயிர்க்காப்புப் பூச்சிகளும் அதனைப் பெருமகசூலாக மாற்றுவது போல, விருந்தளிக்கும் ஈகையின் மாட்சிக்கு நிலையான அளவு இல்லை; அது வந்து சேரும் விருந்தினரின் தகுதிக்கு ஏற்பவே பெருகும் கூறாகும்.",
                meaning:
                    "Though each tiny Thumbai floret holds only a microscopic drop of nectar, that modest gift multiplies into honey, rich pollination, and natural crop defense depending on the beneficial insects it attracts. The true fruit of hospitality cannot be measured by a fixed scale—it rises strictly in proportion to the worth of the guest honored."
            },
            {
                kuralNumber: 88,
                line1: "தேக்கிய தேன்மறைத்து வாடும் அரும்பென",
                line2: "ஆக்கமும் நீங்கிப் புலம்பு.",
                tamilPorul:
                    "உள்ளே தேக்கிய தேனை வெளியே பகிராமல் மறைத்து வைத்துக்கொண்டு மகரந்தச் சேர்க்கையின்றி வாடி விழும் அரும்பைப் போல, விருந்தளிக்கும் அறவேள்வியில் ஈடுபடாமல் பொருளை மட்டும் பூட்டி வைப்போர், இறுதியில் தம் ஆக்கமும் சார்பும் நீங்கிப் புலம்புவர்.",
                meaning:
                    "Any flower bud that hoards its stored nectar inward instead of opening to pollinators withers unfertilized, forfeiting both seed continuity and ecological allies. Those who guard wealth anxiously while withholding hospitality ultimately find both their store and their support vanished, left only to lament."
            },
            {
                kuralNumber: 89,
                line1: "செழுமையுள் ஏழ்மை மதுவொடுக்கும் புன்மை",
                line2: "மழுமதியோர் மாட்டே நிலை.",
                tamilPorul:
                    "வறண்ட வரப்பிலும் தும்பை தாராளமாகப் பூக்கும்போது, உள்ளே செழுமையான உயிர்ச்சாறு நிரம்பியிருந்தும் மதுவை ஒடுக்கிப் பூக்க மறுக்கும் செடி வளத்துள் வறுமையுற்றது போல, செல்வம் இருந்தும் விருந்தோம்பலைத் தவிர்க்கும் புன்மை அறிவு மழுங்கியவரிடத்திலேயே நிலைத்திருக்கும்.",
                meaning:
                    "Flourishing generously even on lean ridges where sap-heavy, non-blooming weeds give nothing back to the habitat, the Thumbai exposes ecological stinginess for what it is. Poverty in the midst of plenty is the petty folly of neglecting hospitality—a blindness found solely among the unwise."
            },
            {
                kuralNumber: 90,
                line1: "நுண்ணிதழ் தீண்ட வதங்கிடும் தும்பைபோல்",
                line2: "கண்மாறக் கூம்பும் உளம்.",
                tamilPorul:
                    "வெண்பட்டு போன்ற மிக மெல்லிய தும்பையின் நுண்ணிதழைக் கைவிரல் லேசாகத் தீண்டிய கணத்திலேயே அது வாடி வதங்கிவிடுவது போல, வரவேற்கும் இல்லத்தாரின் கண்களில் தோன்றும் சிறிய மாற்றத்தாலேயே வந்த விருந்தினரின் உள்ளம் சுருங்கிக் கூம்பிவிடும்.",
                meaning:
                    "Crafted with translucent, tissue-thin white petals that droop the very instant rough hands brush them, the Thumbai mirrors the supreme fragility of human dignity. Just as its delicate petal wilts at the faintest harsh touch, a guest's heart folds shut the moment a host's gaze cools or alters."
            }
        ]
    },

    // ======================================================================
    // CHAPTER 10: இனியவை கூறல் — மகிழம்பூ (Kurals 91–100)
    // MILESTONE: 100 KURALS COMPLETED!
    // ======================================================================
    {
        chapterNumber: 10,                      // Automatically loads images/10.jpg -> Pillar 01 -> Iyal 02 (இல்லறவியல்)
        tamilTitle: "இனியவை கூறல் — மகிழம்பூ",
        chapterTitle: "Uttering Pleasant Words – The Sacred Spanish Cherry Blossom",
        flowerName: "The Sacred Spanish Cherry Blossom (மகிழம்பூ)",
        tamilSummary:
            "வஞ்சமில் தண்ணளியோடு பூத்து, பொருட்கொடையினும் மேலான நறுமலர்ச்சியாய் விரிந்து, உள்ளுறைத் தீமணத்தால் கண்மலர வரவேற்று, எவ்வுயிர்க்கும் பாகுபாடின்றி நறைபரப்பி, கிளையில் தாழ்ந்து தொங்கி வாழ்வின் தனிப்பூணாகி, நிறைநலம் தேர்ந்து கறைமாய்க்கும் மருந்தாகி, தகைமை பிறழாது ஆக்கம் அளித்து, பூத்தபோதும் உலர்ந்தபோதும் மணம் மாறாமல் இருமை உவப்பு நல்கி, முள்ளின்றி யாவரையும் ஈர்த்து, பழுத்த செம்பழம் நிற்கத் துவர்ப்பிஞ்சை விலக்கும் மகிழம்பூவின் வாழ்வியல் — வஞ்சமற்ற பணிவும் உள்ளார்ந்த கனிவும் கொண்ட இனிய உரையே வாழ்வின் மெய்யான அணிகலன் மற்றும் அறவளம் என்பதைக் குறள்கள் 91–100 வழியே மெய்ப்பிக்கிறது.",
        summary:
            "Across ten verified floral and fruiting designs of the Sacred Spanish Cherry Blossom, Chapter 10 reveals pleasant speech as the quiet, enduring power of inner refinement. Genuine sweetness flows without deceit from truth-perceiving hearts (91), outranks even lavish material charity when paired with a welcoming face (92), anchors virtue in warm eyes and heartfelt gentleness (93), shields those who speak kindly to all from sorrowful scarcity (94), stands alongside humility as life's only true ornament (95), dissolves harm while multiplying righteousness when guided by good intent (96), yields lasting benefit without ever departing from grace (97), carries unbroken fragrance across both this life and the beyond (98), renders harshness senseless once sweetness's power is witnessed (99), and exposes cruel speech as choosing bitter unripe pods when sweet ripe fruit hangs right within reach (100).",
        architecturalArc: [
            {
                range: "91–93",
                phase: "Source & Warmth",
                traits: "Thornless guileless star bloom • Modest bloom outshining lavish display • Inner-core perfume & welcoming grace"
            },
            {
                range: "94–96",
                phase: "Humility & Healing",
                traits: "Dawn carpet serving all beings • Downward-nodding garland jewel • Purifying oral & ecological medicine"
            },
            {
                range: "97–99",
                phase: "Continuity & Proof",
                traits: "Unwavering bud-to-fruit utility • Fragrance enduring even after drying • Spineless charm winning every heart"
            },
            {
                range: "100",
                phase: "The Choice of Speech",
                traits: "Sweet ripe orange-red Magizham fruit vs. astringent unripe green berry"
            }
        ],
        greenThinkingPrinciple:
            "Gentle strength outlives harsh force—bow your head in humility like the Magizham, leave a fragrance that endures long after the season passes, and never reach for bitter thorns when sweetness is already ripe in your hands.",
        kurals: [
            {
                kuralNumber: 91,
                line1: "வஞ்சமில் தண்ணளி பூத்த மகிழம்போல்",
                line2: "நெஞ்சுணர் சான்றோர் மொழி.",
                tamilPorul:
                    "முட்களோ கபடப் பொறிகளோ இன்றித் தூய குளிர்ந்த நறுமணத்தோடு பூக்கும் மகிழம்பூவைப் போல, வஞ்சனை சிறிதுமின்றி உள்ளத்தில் ஈரமும் தெளிவும் உணர்ந்த சான்றோரின் வாயிலிருந்து பிறப்பதே மெய்யான இனிய மொழியாகும்.",
                meaning:
                    "Engineered without thorns, stinging sap, or deceptive traps, the Magizham opens its tiny creamy star solely to offer pure, gentle fragrance from within. True pleasant speech flows without guile, steeped in genuine tenderness from those who perceive enduring truth in their heart."
            },
            {
                kuralNumber: 92,
                line1: "பலர்க்குக் கொடைபொழியும் சீரினும் மேலாம்",
                line2: "அலர்மகிழ் போன்ற உரை.",
                tamilPorul:
                    "பலருக்கும் பொருட்கொடை பொழிந்து வழங்கும் பெருஞ்சீரைக் காட்டிலும், மலர்ந்து பொலியும் மகிழம்பூவின் குளிர்ந்த நறுமணம் போல இன்முகத்தோடு பிறக்கும் மென்மையான உரையே மிக மேலானதாகும்.",
                meaning:
                    "Modest in size yet unmatched in grace, a single cluster of blooming Magizham delights every passerby effortlessly without the spectacle of heavy showy petals. Greeting others with a cheerful countenance and gentle speech surpasses even the merit of generous material giving."
            },
            {
                kuralNumber: 93,
                line1: "வெண்மகிழ் உள்ளுறைத் தீமணம்போல் கண்மலர்ந்து",
                line2: "தண்கிளவி நல்கலே சால்பு.",
                tamilPorul:
                    "வெண்நிற மகிழம்பூவின் உள்ளே உறைந்து வெளிப்படும் இனிய நறுமணத்தைப் போல, அன்போடு கண்கள் மலரப் பார்த்து உள்ளத்திலிருந்து பிறக்கும் குளிர்ந்த மென்கிளவியை வழங்குவதே மெய்யான அறச்சால்பாகும்.",
                meaning:
                    "Radiating delicate perfume straight from the sheltered heart of its pale, star-ringed corolla rather than from loud external colors, the flower proves that charm begins within. Looking warmly with welcoming eyes and offering soothing words directly from the heart is the living essence of virtue."
            },
            {
                kuralNumber: 94,
                line1: "எவ்வுயிர்க்கும் தேன்வகுளம் போல்களிப்பு சாற்றுவார்க்குக்",
                line2: "கவ்வைசேர் நல்கூர்வு அற்று.",
                tamilPorul:
                    "தேனீக்கள் முதல் வழிப்போக்கர் வரை எல்லா உயிர்களுக்கும் பாகுபாடின்றி நறுமணம் பரப்பும் தேன்வகுளமாகிய மகிழம்பூவைப் போல, யாவரிடத்தும் மகிழ்ச்சி தரும் மென்மொழி சாற்றுவோரைத் துயரம் சேர்க்கும் வறுமை ஒருபோதும் அணுகாது.",
                meaning:
                    "Carpeted evenly beneath its evergreen canopy every dawn so bees, birds, and passersby alike gather its blooms without distinction, the Magizham tree remains perpetually lush and cherished. Sorrow-bringing scarcity never touches those who offer uplifting, joy-giving speech to everyone they meet."
            },
            {
                kuralNumber: 95,
                line1: "தாழ்ந்து மணக்கும் மகிழ்போல் நறுமாற்றம்",
                line2: "வாழ்வுக்கு வேறில்லை பூண்.",
                tamilPorul:
                    "கிளையின் கீழே அடக்கத்தோடு தலைதாழ்ந்து தொங்கியபடி நறுமணம் வீசும் மகிழம்பூவைப் போல, உள்ளார்ந்த பணிவும் இனிய நறுமாற்றமும் மட்டுமே ஒருவரின் வாழ்விற்கு மெய்யான அணிகலன்; அவற்றைத் தவிர வேறு பூண் எதுவும் இல்லை.",
                meaning:
                    "Rather than jutting arrogantly skyward, Magizham blossoms nod humbly downward along slender twigs, earning a revered place in sacred garlands that outshine heavy gold jewelry. Humility paired with sweet speech forms a person's sole authentic ornament; all outward finery counts for nothing beside it."
            },
            {
                kuralNumber: 96,
                line1: "நிறைநலம் தேர்ந்து மகிழ்ப்பூப்போல் ஓதின்",
                line2: "கறைமாய்ந்து செப்பம் மிகும்.",
                tamilPorul:
                    "மாசு நீக்கித் தூய நறுமணமும் வாய்நல மருந்தும் தரும் மகிழம்பூவைப் போல, நிறைவான நன்மைகளைத் தேர்ந்தறிந்து மென்மையாக ஓதினால் தீய கறைகள் மாய்ந்து செம்மையான அறம் மேன்மேலும் மிகும்.",
                meaning:
                    "Celebrated across traditional healing for purifying air, soothing the mouth and throat, and sustaining beneficial pollinators, the flower transforms its immediate surroundings into clean harmony. Seeking what is truly wholesome and speaking with gentle clarity dissolves harm while steadily multiplying virtue."
            },
            {
                kuralNumber: 97,
                line1: "ஆக்கம் அளித்துத் தகைமை பிறழாத",
                line2: "வாக்கே வகுளம்போல் பேறு.",
                tamilPorul:
                    "நறுமணம், மருந்து, நிழல், பழம் எனப் பல ஆக்கங்களையும் அளித்துத் தன் மென்மையான தகைமையிலிருந்து ஒருபோதும் பிறழாத வகுள மலரைப் போல, பயன் விளைவித்து நற்பண்பு பிறழாத வாக்கே நலமும் நன்றியும் தரும் உயர்ந்த பேறாகும்.",
                meaning:
                    "Unwavering in its gentle character from velvety bud to open star to nourishing berry, the Vakulam delivers continuous utility without ever turning invasive or harsh. Speech that creates real value while never departing from gracious integrity generates both righteous delight and lasting good."
            },
            {
                kuralNumber: 98,
                line1: "குற்றமில் தீங்கூற்று பூத்தும் உலர்மகிழ்போல்",
                line2: "முற்றும் இருமை உவப்பு.",
                tamilPorul:
                    "கிளையில் பசுமையாகப் பூத்திருக்கும் போதும், உதிர்ந்து உலர்ந்து போன பின்னரும் தன் நறுமணம் சிறிதும் மாறாத மகிழம்பூவைப் போல, சிறுமையும் குற்றமும் அற்ற இனிய கூற்று இம்மை மறுமை ஆகிய இருமை நிலைகளிலும் முழுமையான உவப்பைத் தரும்.",
                meaning:
                    "Possessing one of botany's rarest traits, the Magizham blossom retains its sweet fragrance long after falling and drying completely—continuing to perfume homes months beyond its living bloom. Pleasant speech purged of pettiness and malice yields unbroken joy both in this life and in the life beyond."
            },
            {
                kuralNumber: 99,
                line1: "முள்ளின்றி மென்மகிழ் ஈர்த்தல் உணர்ந்தபின்",
                line2: "தெள்ளியோன் வெம்பகர்வு ஏன்.",
                tamilPorul:
                    "சிறு முள்கூட இன்றித் தன் மென்மையான நறுமணத்தாலேயே எல்லா உயிர்களையும் எளிதில் ஈர்த்து மகிழ்விக்கும் மகிழம்பூவின் ஆற்றலை உணர்ந்த பின்னும், தெளிந்த அறிவுடையவன் சுடும் கடுஞ்சொற்களைப் பகர்வது ஏன்?",
                meaning:
                    "Without a single spine, prickle, or bitter warning, the soft star-flower wins pollinators, birds, and human affection effortlessly through sheer sweetness alone. Once a discerning mind witnesses how effortlessly gentle words awaken joy, there is no reason left to ever utter scorching speech."
            },
            {
                kuralNumber: 100,
                line1: "அழகிய பேச்சுண்டு தீய நவிலல்",
                line2: "பழம்நிற்கப் பிஞ்சுணல் நேர்.",
                tamilPorul:
                    "இனிமை நிறைந்த அழகிய மென்பேச்சு அருகே எளிதில் இருக்கும்போது பிறரை வருத்தும் தீய கடுமைகளை நவில்வது, மகிழமரத்தில் இனிமையாகப் பழுத்த செம்பழம் நிற்கும்போது துவர்ப்பு மிக்க பச்சைப் பிஞ்சைப் பறித்து உண்பதற்கு நேராகும்.",
                meaning:
                    "While the unripe green berry of the Magizham tree is fiercely astringent and puckering with raw tannins, its fully ripened orange-red fruit is soft, sweet, and nourishing to birds and humans alike. Choosing harsh, wounding speech when pleasant words are right within reach is exactly like passing over sweet ripe fruit to bite into bitter unripe pods."
            }
        ]
    },

    // ======================================================================
    // CHAPTER 11: செய்ந்நன்றியறிதல் — தென்னம்பூ (Kurals 101–110)
    // ======================================================================
    {
        chapterNumber: 11,                      // Automatically loads images/11.jpg -> Pillar 01 -> Iyal 02 (இல்லறவியல்)
        tamilTitle: "செய்ந்நன்றியறிதல் — தென்னம்பூ",
        chapterTitle: "Gratitude – The Coconut Blossom",
        flowerName: "The Coconut Blossom (தென்னம்பூ)",
        tamilSummary:
            "முன்பணி நாடாது தானே நற்கொடை ஈந்து, கடும் வேனிலிலும் தக்க பொழுதில் தேன் துளித்து, விலைகருதாமல் ஆயிரக்கணக்கான பூக்களில் மகரந்தம் தூவி, வேர்தீண்டும் சிறுதுளியை வான்குலையாய்ப் பெருக்கி, உவர்ப்புனலைத் தீஞ்சாற்று நீராவாய் மாற்றி, புயலில் காத்த பன்னாடைப் பிணைப்பைப் பேணி, பல பத்தாண்டுகள் திங்கள் தவறாமல் பூத்து, காரத்தை உடனே கழித்து ஈரத்தை உச்சிவரை காத்து, அரிந்த புண்ணிலும் தீமருந்தான சாற்றை ஊற்றி, மடல்சாய்ந்தாலும் வாழ்ந்து குருத்தழிந்தால் மீளாமல் மாயும் தென்னம்பூவின் வாழ்வியல் — செய்த நன்மையை ஒருபோதும் மறவாமல் பெருக்கிப் போற்றுவதும், தீமையை உடனே கழிப்பதுமே வாழ்வின் அழியாத அறக்கடன் என்பதைக் குறள்கள் 101–110 வழியே மெய்ப்பிக்கிறது.",
        summary:
            "Across ten verified floral and physiological designs of the Coconut Blossom, Chapter 11 reveals gratitude as the living circulatory law that keeps ecosystems and civilizations alive. Unprompted generosity outweighs both earth and heaven (101); timely aid in scorching scarcity surpasses the whole globe (102); selfless giving without calculating profit runs deeper than the sea (103); discerning hearts magnify even a tiny drop of care into a towering mountain (104); the true worth of a favor is defined by the noble character of the recipient (105); one must never abandon spotless companions who stood firm in storms (106); noble gratitude endures across decades and generations without faltering (107); refined character discards bitterness immediately while preserving every trace of kindness (108); recalling a single past goodness dissolves even a sharp wound into healing sweetness (109); and just as a palm survives torn fronds yet dies irreversibly when its central crown is severed, betraying gratitude leaves no path back to wholeness (110).",
        architecturalArc: [
            {
                range: "101–103",
                phase: "Measureless Giving",
                traits: "Unassisted coastal bloom • Dry-season timely nectar • Thousands of freely shared pollen florets"
            },
            {
                range: "104–106",
                phase: "Magnification & Bond",
                traits: "Root drop turned sky-high cluster • Brackish water turned sweet neera • Woven fiber sheath bracing storms"
            },
            {
                range: "107–109",
                phase: "Memory & Forgiveness",
                traits: "Monthly blooming for 70+ years • Instant root salt-filtration • Sliced spathe yielding healing neera"
            },
            {
                range: "110",
                phase: "The Sacred Core",
                traits: "Storm-torn fronds regrow vs. severed apical crown — gratitude as life's irreplaceable heart"
            }
        ],
        greenThinkingPrinciple:
            "Gratitude is nature's highest multiplier—take plain care at the roots, filter out every trace of salt and bitterness immediately, return sweetness month after month without tallying debts, and guard the grateful core that keeps life regenerating.",
        kurals: [
            {
                kuralNumber: 101,
                line1: "முன்பணி நாடாது தெங்கீந்த நற்கொடைக்கு",
                line2: "மன்னுலகும் விண்ணுலகும் தாழ்வு.",
                tamilPorul:
                    "தனக்கு முன் எவ்விதப் பணியும் பராமரிப்பும் நாடாமல் தானே முளைத்துப் பூத்து நற்கொடை வழங்கும் தென்னை மரத்தின் ஈகைக்கு, இந்த நிலைத்த மண்ணுலகும் மேலுள்ள விண்ணுலகும் ஈடாகாமல் தாழ்ந்தே நிற்கும்.",
                meaning:
                    "Engineered through deep-time coastal resilience, a fallen coconut germinates unassisted and unfolds its golden inflorescence to shower pollinators and communities with nectar, pollen, and fruit without ever awaiting prior care. Kindness rendered without expecting or receiving any earlier favor outweighs both earth and heaven combined."
            },
            {
                kuralNumber: 102,
                line1: "வேனில் வறட்சியில் பாளை துளித்ததேன்",
                line2: "மாநிலத்தின் மேலாம் உயர்வு.",
                tamilPorul:
                    "மற்ற பூக்களெல்லாம் கருகி மறையும் கடும் கோடை வேனில் வறட்சியிலும் தவறாமல் விரியும் தென்னம்பாளை துளித்த சிறிதளவு தேனும் நீராவும் போல, உற்ற நெருக்கடிப் பொழுதில் செய்த சிறு நன்மையும் இந்தப் பரந்த மாநிலத்தைக் காட்டிலும் மேலான உயர்வாகும்.",
                meaning:
                    "Opening faithfully even through scorching dry-season heat when surrounding blossoms vanish, the coconut spadix offers timely droplets of nectar and refreshing sap to thirsty bees and living beings. Help extended in the exact hour of need, however small in measure, towers far above the entire world."
            },
            {
                kuralNumber: 103,
                line1: "விலைகருதாத் தென்னம்பூத் தூவிடும் தாது",
                line2: "அலையாழி ஆழத்தின் மேல்.",
                tamilPorul:
                    "கைம்மாறாக எவ்வித விலையும் கருதாமல் வண்டுகளுக்கும் காற்றிற்கும் ஆயிரக்கணக்கான பூக்களிலிருந்து மகரந்தத் தாதைத் தாராளமாகத் தூவிடும் தென்னம்பூவின் பெருந்தன்மை, அலைவீசும் ஆழ்கடலின் ஆழத்தையும் விட மேலானதாகும்.",
                meaning:
                    "Releasing clouds of golden pollen from thousands of tiny male florets across every radiating spike without measuring return or withholding a single grain, the coconut blossom sustains whole pollinator colonies effortlessly. When measured by its pure graciousness, generosity offered without weighing personal gain runs deeper than the ocean."
            },
            {
                kuralNumber: 104,
                line1: "சிறுதுளி வேர்தீண்டின் வான்குலை ஆக்கும்",
                line2: "உறுமலையாய்ப் போற்றும் மதி.",
                tamilPorul:
                    "வேரில் வார்க்கும் ஒரு சிறுதுளி நீரைக்கூட ஏற்றுக்கொண்டு வானளாவிய உச்சியில் பெரிய பூங்குலையாகவும் கனிகளாகவும் பெருக்கித் தரும் தென்னையைப் போல, பயன் உணரும் தெளிந்த மதி கொண்டோர் சிறிய நன்மையையும் உயர்ந்த மலையாகப் போற்றி ஏற்பர்.",
                meaning:
                    "Receiving even a modest trickle of plain water at its base, the palm magnifies that humble care upward into towering floral spikes and heavy fruit clusters crowned high in the sky. Those who truly grasp the value of goodness treasure even a speck of kindness as an immense mountain."
            },
            {
                kuralNumber: 105,
                line1: "உவர்ப்புனலும் தீஞ்சாறாய் மாறிடும் நீரா",
                line2: "உவந்தேற்றோர் மாண்பின் அளவு.",
                tamilPorul:
                    "கடற்கரை மண்ணின் உப்பு நிறைந்த உவர்ப்புனலை உறிஞ்சினாலும், தன் உயர்ந்த இயல்பால் அதனை இனிமை நிறைந்த தீஞ்சாறான நீராவாக மாற்றும் தென்னம்பாளையைப் போல, ஒரு நன்மையின் பெருமை அந்நன்மையை உவந்து ஏற்றவரின் அகமாண்பின் அளவாலேயே மதிக்கப்படும்.",
                meaning:
                    "Drawing brackish, mineral-heavy groundwater from coastal sands, the coconut blossom's refined internal architecture transforms plain salty moisture into crystal-sweet neera nectar and tender elixir. The true stature of a kindness is never fixed by the size of the gift—it is measured by the inner nobility of the heart that receives it."
            },
            {
                kuralNumber: 106,
                line1: "புயல்சூழப் பன்னாடை காத்திடும் பூப்போல்",
                line2: "அயர்தீர்த்த தூயோர் விடேல்.",
                tamilPorul:
                    "கடும் புயலும் காற்றும் சூழும்போது இளம் தென்னம்பாளையை இறுகப் பிணைந்து பாதுகாக்கும் இயற்கைப் பன்னாடையைப் போல, மாசற்ற தூய உள்ளத்தாரின் பிணைப்பையும் துயரத்தில் அயர்வு தீர்த்துத் தாங்கியோரின் துணையையும் ஒருபோதும் கைவிடாதே.",
                meaning:
                    "Wrapped tightly inside a woven natural fiber sheath and a rugged woody spathe that brace the emerging flower spikes against fierce tropical gales, the blossom never severs the protective grip that sheltered its tender emergence. Never forget the bond of the spotless, and never forsake those who stood as strength in your hour of distress."
            },
            {
                kuralNumber: 107,
                line1: "பல்லாண்டு திங்கள் தவறாது பூத்திடும்",
                line2: "அல்லல் களைந்தார் நினைவு.",
                tamilPorul:
                    "ஒருமுறை நட்டு நீரூற்றி வளர்த்த கைம்மாறாகப் பல பத்தாண்டுகள் ஒவ்வொரு திங்களும் தவறாமல் புதிய பாளை விரித்துப் பூக்கும் தென்னையைப் போல, தம் அல்லலைக் களைந்து காத்தவரின் நினைவைச் சான்றோர் பல தலைமுறை கடந்தும் போற்றிப் பேணுவர்.",
                meaning:
                    "Repaying minimal early care with an unbroken rhythm of one fresh inflorescence every single month for seventy to eighty years, the coconut palm honors its planter across successive human generations. Noble hearts carry the living remembrance of those who wiped away their affliction across lifetimes without fading."
            },
            {
                kuralNumber: 108,
                line1: "காரம் உடனே கழித்துக் கனிதரும்",
                line2: "ஈரம் அகலாமை சீர்.",
                tamilPorul:
                    "மண்ணிலிருந்து உறிஞ்சும் உப்புக் காரத்தையும் கசப்பையும் வேரடியிலேயே உடனடியாகக் கழித்துவிட்டு, தூய நீரின் ஈரத்தை மட்டும் உச்சிவரை காத்துக் கனி தரும் தென்னையைப் போல, பிறர் செய்த தீமையை அப்போதே விலக்கிவிட்டுச் செய்த நன்மையின் ஈரத்தை நெஞ்சிலிருந்து அகற்றாமல் காப்பதே உயர்ந்த சீராகும்.",
                meaning:
                    "Filtering out coastal salt and harsh impurities instantaneously at its roots while preserving only pure sweetness all the way to its blooming crown, the palm refuses to carry bitterness upward. Remembering a kindness faithfully while letting an injury drop on the very same day is the mark of refined character."
            },
            {
                kuralNumber: 109,
                line1: "அரிந்தபுண் தீமருந்தாய் ஊறும் மலர்போல்",
                line2: "புரிநலம் உன்ன அறும்.",
                tamilPorul:
                    "கூரிய கத்தியால் தன் பாளை நுனியை அரிந்து புண்படுத்திய போதும், கசப்பையோ நஞ்சையோ கக்காமல் இனிய தீமருந்தான நீராவை ஊற்றித் தரும் தென்னம்பூவைப் போல, பிறர் உயிர்க்கொலை ஒத்த கொடுமை செய்தாலும் அவர் முன்பு புரிந்த ஒரு நலத்தை நினைத்த அளவிலேயே அந்தத் துயரம் அற்றுப்போகும்.",
                meaning:
                    "Even when the tip of the unopened spathe is sliced repeatedly by a sharp blade, the coconut inflorescence answers not with venom or bitterness, but by welling up with restorative, sweet medicinal neera sap. Even a devastating wrong dissolves the moment one recalls a single past act of kindness from that hand."
            },
            {
                kuralNumber: 110,
                line1: "மடல்சாய்ந்தும் வாழும் குருத்தழிய மாயும்",
                line2: "கடன்சிதைப்பார் மீளா அழிவு.",
                tamilPorul:
                    "புறத்தே உள்ள ஓலை மடல்கள் புயலில் சாய்ந்து முறிந்தாலும் மீண்டும் தளிர்த்து வாழும் தென்னை, தன் மைய உயிர்க் குருத்து அழிந்தால் மீளாமல் மாய்ந்து போவது போல, பிற அறங்களைச் சிதைத்தோர்க்கு மீட்சி இருந்தாலும் செய்ந்நன்றிக் கடனைச் சிதைப்பார்க்கு மீளாத அழிவே நேரும்.",
                meaning:
                    "Resilient enough to survive storm-torn fronds and scarred trunks by sprouting fresh foliage year after year, the coconut palm possesses only one single apical heart—if that central crown is destroyed, the entire tree perishes with zero possibility of regrowth. While redemption remains possible for other failures, destroying the sacred bond of gratitude brings irreversible ruin."
            }
        ]
    },

    // ======================================================================
    // CHAPTER 12: நடுவு நிலைமை — சூரியகாந்தி (Kurals 111–120)
    // ======================================================================
    {
        chapterNumber: 12,                      // Automatically loads images/12.jpg -> Pillar 01 -> Iyal 02 (இல்லறவியல்)
        tamilTitle: "நடுவு நிலைமை — சூரியகாந்தி",
        chapterTitle: "Impartiality – The Radiant Sunflower",
        flowerName: "The Radiant Sunflower (சூரியகாந்தி)",
        tamilSummary:
            "சுழல்கணக்கில் நூற்றுக்கணக்கான நுண்மலர்களை ஒப்பவே பூக்கவைத்து, சமமான பூம்பரப்பில் நெய்வித்துகளை வளர்த்துப் பின்னோர்க்குக் காப்பாகி, சமநிலை பிறழும் சாய்தண்டின் மிகைவளத்தை உடனே கழித்து, இதழுதிர்ந்த வேளையில் பதர்மணியால் மெய்யைக் காட்டி, ஏற்றமும் வீழ்வும் மாறிவரினும் அலர்வட்டமாய் மாற்றமில்லா உள்ளம் பூண்டு, அச்சு விலகின் உச்சிப்பூ சோர்வதால் அழிவை உணர்த்தி, பொன்வண்ணம் ஓய்ந்தும் பயன்சுமந்து கீழ்கவிழ்தலை மன்பதை வெற்றியாகப் போற்றச்செய்து, துலைநிகர் தட்டுப்பூவாய் எப்புறமும் சரியாமல் நிலைகொண்டு, அகம்திருந்திய தெளிவால் வெளிமடல் செம்மை காத்து, வண்டினம் ஊட்டியே சூல்கருவும் ஓம்பிப் பண்டமாற்றின் நெறி காட்டும் சூரியகாந்தியின் வாழ்வியல் — எவர் பக்கமும் சாயாத துல்லியமான சமநோக்கும் உள்ளொத்த நேர்மையுமே வாழ்வின் அழியாத அழகு என்பதைக் குறள்கள் 111–120 வழியே மெய்ப்பிக்கிறது.",
        summary:
            "Across ten verified geometric and physiological designs of the Radiant Sunflower, Chapter 12 establishes impartiality not as passive neutrality, but as structural balance that keeps whole systems standing. Equity allocates fair space to every member without crowding (111), generates enduring wealth that shields future generations (112), rejects skewed gain the instant balance is threatened (113), reveals true character unmistakably through the harvest left behind (114), adorns life with unswerving inner poise through rise and fall alike (115), warns that deserting the central axis triggers collapse from within (116), proves that humble bowing under a heavy harvest is triumph rather than defeat (117), holds upright like a leveled weighing beam unbent toward any side (118), aligns straight outward speech with a clear, uncrooked core within (119), and makes commerce flourish by nourishing others' interests alongside one's own (120).",
        architecturalArc: [
            {
                range: "111–113",
                phase: "Mathematical Equity",
                traits: "137.5-degree Golden Angle spiral • Uniform oil-rich seed supply • Rejecting stalk-breaking skewed weight"
            },
            {
                range: "114–116",
                phase: "Proof & Inner Axis",
                traits: "Plump kernels vs. empty chaff • Mature eastward lock amid wind • Central vascular axis collapse"
            },
            {
                range: "117–119",
                phase: "Balance & Alignment",
                traits: "Seed-laden autumn bow revered • Counterbalanced living beam-scale • Straight outer rays from straight inner disc"
            },
            {
                range: "120",
                phase: "Fair Exchange",
                traits: "Gatekeeper-free nectar platform uniting pollinator nourishment with fertile seed-setting"
            }
        ],
        greenThinkingPrinciple:
            "Impartiality is nature's load-bearing geometry—distribute space and resources by fair measure, keep your inner axis aligned with your outer display, and build economies where feeding your partners is the exact mechanism that sustains your own harvest.",
        kurals: [
            {
                kuralNumber: 111,
                line1: "சுழல்கணக்கில் நுண்மலர்கள் ஒப்பவே பூத்தல்",
                line2: "பழுதற்ற நேர்மையின் மாண்பு.",
                tamilPorul:
                    "சூரியகாந்தியின் வட்டத்துள் நூற்றுக்கணக்கான நுண்மலர்கள் துல்லியமான சுழல்கணக்கின்படி ஒன்றையொன்று நெருக்காமலும் மறைக்காமலும் ஒப்பவே பூத்து நிற்பது போல, பகைவர், நண்பர், அயலார் என யாவரிடத்தும் பாகுபாடின்றிப் பழுதற்ற நேர்மையோடு ஒழுகுவதே தலையாய மாண்பாகும்.",
                meaning:
                    "Engineered along interlocking Fibonacci spirals separated by the Golden Angle (137.5 degrees), the sunflower arranges hundreds of tiny disc florets so no single bloom shades, crowds, or steals space from another. Unblemished impartiality—rendering fair measure to friend, foe, and stranger alike—stands as life's supreme nobility."
            },
            {
                kuralNumber: 112,
                line1: "முறைமையார் பூம்பரப்பில் நெய்வித்தாய் ஓங்கல்",
                line2: "குறையாது பின்னோர்க்குக் காப்பு.",
                tamilPorul:
                    "சூரியகாந்தியின் சமமான பூம்பரப்பில் உயிர்ச்சாறு சீராகப் பகிரப்படுவதால் நூற்றுக்கணக்கான நெய்வித்துகள் வளமாகத் திரண்டு ஓங்கி அடுத்த தலைமுறையைக் காப்பது போல, முறைமை வழுவாதவரின் வளம் எக்காலத்தும் குறையாது அவர்தம் பின்னோர்க்கும் நிலைத்த காப்பாகும்.",
                meaning:
                    "Because sap flows uniformly across every spiral ring of its level head, the sunflower matures hundreds of oil-rich, nutrient-dense seeds cleanly without waste to sustain future generations. Prosperity earned through steadfast fairness never decays—it endures as a lasting shield for one's descendants."
            },
            {
                kuralNumber: 113,
                line1: "சாய்தண்டில் மல்கும் மிகைவளம் தேன்சுரப்பின்",
                line2: "ஆய்ந்து பொழுதே கழி.",
                tamilPorul:
                    "சமநிலை பிறழ்ந்து ஒருபுறம் சாய்ந்த தண்டில் மிகையாகத் திரளும் வளம் தேன்சுரந்து இனிப்பதாகத் தோன்றினாலும் விரைவில் தண்டை முறித்து அழித்துவிடுவது போல, நேர்மை நெறி பிறழ்ந்து வரும் வளம் நன்மை தருவதாகத் தோன்றினாலும் அதனை ஆய்ந்து அப்பொழுதே கழித்துவிடுக.",
                meaning:
                    "On a tall sunflower stem, any lopsided surge of uneven growth upsets center-of-gravity balance and threatens to snap the stalk under its own weight, compelling the plant's design to reject skewed excess. Even if wealth gained by departing from equity appears sweet and profitable, discern its danger and cast it away that very hour."
            },
            {
                kuralNumber: 114,
                line1: "இதழுதிர்ந்த வேளையில் செவ்வியோர் புல்லார்",
                line2: "பதர்மணியால் தோன்றிடும் மெய்.",
                tamilPorul:
                    "சூரியகாந்தியின் ஒளிவீசும் மஞ்சள் இதழ்கள் உதிர்ந்துபோன வேளையில், அதன் வட்டத்தில் நிறைந்த வித்துமணிகள் உள்ளதா அல்லது வெற்றுப் பதர்களா என்பதே உண்மையைக் காட்டுவது போல, நேர்மையுடைய செவ்வியோரும் நேர்மையற்ற புல்லாரும் அவர் விட்டுச்செல்லும் எச்சத்தின் வழியே மெய்யாகத் தோன்றுவர்.",
                meaning:
                    "Once the bright outer ray petals drop away, the dried disc lays bare the unmistakable record of the plant's life—balanced nourishment yields rows of plump, fertile kernels, while skewed neglect leaves hollow chaff. Whether a person lived with impartiality or bias is revealed beyond doubt by the legacy they leave behind."
            },
            {
                kuralNumber: 115,
                line1: "ஏற்றமும் வீழ்வும் இயல்பே அலர்வட்டின்",
                line2: "மாற்றமில் உள்ளமே பூண்.",
                tamilPorul:
                    "கதிரொளி மிகும் பொழுதும் புயற்காற்று வீசும் பொழுதும் மாறிவரினும் மலர்ந்த சூரியகாந்தியின் அலர்வட்டம் கிழக்கு நோக்கி மாறாமல் நிலைத்திருப்பது போல, வாழ்வில் ஏற்றமும் வீழ்வும் இயல்பானவை; அவ்விரு நிலைகளிலும் மாற்றமில்லாத உள்ளமே சான்றோர்க்கு மெய்யான பூணாகும்.",
                meaning:
                    "While rising sun, shifting clouds, and fierce field winds sweep endlessly overhead, the mature blooming sunflower locks its face calmly eastward without swaying off its inner axis. Gain and loss are natural tides of existence—remaining unswerving at heart through both is the truest ornament of noble character."
            },
            {
                kuralNumber: 116,
                line1: "அச்சு விலகி மனம்பிழைப்பின் மாய்வதனை",
                line2: "உச்சிப்பூ சோர்வில் உணர்.",
                tamilPorul:
                    "தன் மைய அச்சிலிருந்து விலகித் தண்டு சிதையும் கணத்திலேயே சூரியகாந்தியின் உச்சிப்பூ உயிரோட்டம் அறுந்து சோர்ந்து மாய்வதைப் போல, நேர்மை என்னும் அச்சிலிருந்து விலகித் தன் மனம் பிழைசெய்யின் தான் அழிவது உறுதி என்பதை அப்போதே உணர்க.",
                meaning:
                    "The instant a sunflower's central vascular axis fractures or veers off alignment, sap delivery chokes inward and the radiant golden crown inevitably droops and perishes. Know with absolute certainty that ruin has already begun the moment the mind abandons the center of justice and commits wrong."
            },
            {
                kuralNumber: 117,
                line1: "பொன்வண்ணம் ஓய்ந்தும் பயன்சுமந்து கீழ்கவிழ்தல்",
                line2: "மன்பதை தோல்வியெனல் இல்.",
                tamilPorul:
                    "முதிர்ந்த சூரியகாந்தியின் பொன்வண்ண இதழ்கள் ஓய்ந்து உதிர்ந்தாலும், உள்ளே நிறைந்த வித்துப் பயனைச் சுமந்தபடி அது கீழே கவிழ்ந்து தாழ்வதை உலகம் வீழ்ச்சியாகக் கருதாமல் அறுவடையின் வெற்றியாகப் போற்றுவது போல, நேர்மையிலும் நன்மையிலும் நிலைத்தவரின் எளிய தாழ்வை மன்பதை ஒருபோதும் தோல்வியெனக் கருதாது.",
                meaning:
                    "When autumn strips away its gleaming gold petals and the browned head bows low beneath the heavy weight of ripened seeds, neither farmers nor birds mistake that lowering for collapse—they revere it as the peak of harvest. The world never counts as ruin the humble material decline of one who stands steadfastly in equity and goodness."
            },
            {
                kuralNumber: 118,
                line1: "துலைநிகர் தட்டுப்பூ பக்கம் சரியா",
                line2: "நிலைகொள்ளல் மேலோர் அழகு.",
                tamilPorul:
                    "எடைபார்த்துச் சமன் காட்டும் துலையாகிய தராசுக்கு நிகராக, அகன்ற தட்டுப்பூவை வலமோ இடமோ எந்தப் பக்கமும் சரியாமல் நேராக நிறுத்தித் தாங்கும் சூரியகாந்தியைப் போல, எவர் பக்கமும் சாயாமல் நேர்நிலை கொள்ளுதலே மேலோரின் மெய்யான அழகாகும்.",
                meaning:
                    "Balancing hundreds of symmetrical outer petals and heavy central seeds evenly atop an upright stalk without leaning left or right, the sunflower disc functions as nature's living weighing beam. Remaining completely uninclined toward any side—just like a true, leveled balance—is the crowning grace of the noble."
            },
            {
                kuralNumber: 119,
                line1: "வெளிமடல் வாய்மொழி கோணாமை செம்மை",
                line2: "தெளிவாய் அகம்திருந்தும் கால்.",
                tamilPorul:
                    "உள்ளே உள்ள நூற்றுக்கணக்கான நுண்மலர்கள் நேர்த்தியாக அமைந்திருப்பதாலேயே சூரியகாந்தியின் வெளிமடல் சுழற்சியும் கோணாமல் பொலிவது போல, உள்ளகம் தெளிவோடு திருந்தி நேராக அமைந்திருக்கும் பொழுதே வாய்மொழி கோணாமல் பேசுவது மெய்யான செம்மையாகும்.",
                meaning:
                    "The sunflower's crisp, outward ring of golden petals owes its flawless radial symmetry entirely to the hidden, straight geometric matrix of fertile disc florets arranged beneath it. Speech free from distortion qualifies as true uprightness only when the inner heart itself is steadfastly clear and free from hidden crookedness."
            },
            {
                kuralNumber: 120,
                line1: "வண்டினம் ஊட்டியே சூல்கருவும் ஓம்புதல்",
                line2: "பண்டமாற்று வாழ்ந்திடும் ஆறு.",
                tamilPorul:
                    "முட்களோ தடையோ இன்றி அகன்ற திறந்த மேடையில் வண்டினங்களுக்குத் தேனும் மகரந்தமும் தாராளமாக ஊட்டியே தன் சூல்கருவையும் வளமாக ஓம்பி நிறைவு காணும் சூரியகாந்தியைப் போல, பிறர் நலனையும் தம் நலன் போல் காத்துப் பகிர்வதே பண்டமாற்றுத் தொழில் செழித்து வாழ்ந்திடும் மெய்யான ஆறாகும்.",
                meaning:
                    "Spreading a broad, thornless, gatekeeper-free nectar platform that feeds honeybees, bumblebees, and wild pollinators generously while securing its own fertile cross-pollination, the sunflower thrives on mutual fairness. Commerce truly prospers only when one guards others' goods and interests with the exact same care devoted to one's own."
            }
        ]
    },

    // ======================================================================
    // CHAPTER 13: அடக்கமுடைமை — பூவரசம்பூ (Kurals 121–130)
    // ======================================================================
    {
        chapterNumber: 13,                      // Automatically loads images/13.jpg -> Pillar 01 -> Iyal 02 (இல்லறவியல்)
        tamilTitle: "அடக்கமுடைமை — பூவரசம்பூ",
        chapterTitle: "The Possession of Self-Control – The Portia Tree Blossom",
        flowerName: "The Portia Tree Blossom (பூவரசம்பூ)",
        tamilSummary:
            "அளவறிந்து மாலையில் கூம்பி விண்ணுலகம் காட்டி, உறுதியான பூங்காய்க்குள் விதைபோல் தன்வரம்பைப் பேணி, காலமறிந்து இளமஞ்சளிலிருந்து இளஞ்சிவப்பாய் நிறம்மாறித் திறந்தெளிந்து, கடற்காற்றில் சாயாது வெற்பினும் மேலாய் நிலைத்து, அரசன் எனப் பெயர்கொண்டும் தாழ்ந்திலங்கி வாழ்வின் வளமாகி, அந்திவர ஐந்திதழும் உள்குவித்து ஏழ்பிறப்புக்கும் நந்தாத காப்பளித்து, உள்புதைந்த தூண்போல் வாக்கோம்பலின் அருமையை உணர்த்தி, தூயவிதழில் ஓர்கறைபோல் வெம்மொழித்துளியை விலக்கி, கனல்வெந்த மடல் மாறினும் வஞ்சொல் தழும்பு தீராததைக் காட்டி, தன்னுள் செந்தணலை மறைத்துச் சினங்கடிந்து நன்னெறியையே நாடி வரச்செய்யும் பூவரசம்பூவின் வாழ்வியல் — உள்ளொடுக்கம், பணிவு, நாக்காவல் மற்றும் சினமடக்கமே வாழ்வின் அழியாத மாட்சி என்பதைக் குறள்கள் 121–130 வழியே மெய்ப்பிக்கிறது.",
        summary:
            "Across ten verified structural and rhythmic designs of the Portia Tree Blossom, Chapter 13 proves that self-control is not weakness, but concentrated strength. Disciplined composure elevates life to celestial heights while arrogance plunges into darkness (121); guarding one's boundaries is the highest treasure a soul can hold (122); knowing when to pause and shift brings quiet eminence recognized by the wise (123); unswerving steadiness amid storms towers taller than a mountain (124); humility adds a second wealth to those already blessed with abundance (125); drawing the five senses inward secures an unfailing shield across generations (126); tucking speech safely within restraint prevents deep grief from careless slips (127); even one drop of harsh speech mars every accumulated goodness (128); heat-burns heal swiftly while scars carved by bitter words endure forever (129); and containing inner fire beneath calm wisdom draws virtue itself eagerly to one's threshold (130).",
        architecturalArc: [
            {
                range: "121–123",
                phase: "Rhythm & Boundary",
                traits: "Dusk-folding diurnal clock • Sealed woody seed capsule • Yellow-to-purple pollinator closure signal"
            },
            {
                range: "124–126",
                phase: "Stature & Inwardness",
                traits: "Salt-wind coastal composure • Humble thornless \"King of Flowers\" • Five cupped petals folding inward at dusk"
            },
            {
                range: "127–129",
                phase: "Guard of Speech",
                traits: "Short recessed staminal column • Single dark blemish on pale yellow • Sun-scorched petal renewal vs. lasting scar"
            },
            {
                range: "130",
                phase: "Mastery of Fire",
                traits: "Intense crimson core quietly contained within a cool pale-yellow bell"
            }
        ],
        greenThinkingPrinciple:
            "True power needs no noise or display—know your season, hold your fire quietly within a cool exterior, seal your vital core before night falls, and let disciplined restraint turn resilience into lasting grace.",
        kurals: [
            {
                kuralNumber: 121,
                line1: "கூம்புமலர் நெஞ்சொடுக்கம் விண்ணுலகம் சேர்த்திடும்",
                line2: "வீம்புமனம் கங்குல் புகும்.",
                tamilPorul:
                    "மாலைப் பொழுதில் அளவறிந்து தன் இதழ்களைக் குவித்துக் கூம்பும் பூவரசமலர் போல நெஞ்சை ஒடுக்கி வாழும் பண்பு ஒருவரை விண்ணுலகத் தேவரிடையே சேர்த்திடும்; கட்டுப்பாடின்றித் திரியும் வீம்புமனம் மீளாப் பேரிருளாகிய கங்குலில் புகுந்து அழியும்.",
                meaning:
                    "Governed by a disciplined single-day clock, the Portia Blossom opens calmly at dawn and folds its petals neatly shut before nightfall so its vital core is never wasted in darkness. Composed self-restraint elevates a life to celestial stature, whereas willful, unbridled impulse plunges straight into pitch-black abyss."
            },
            {
                kuralNumber: 122,
                line1: "பூங்காயில் வித்தெனவே தன்வரம்பைப் பேணுக",
                line2: "ஓங்குநிதி ஆவிக்கு இன்று.",
                tamilPorul:
                    "மலர்ந்து முடிந்த பின் உறுதியான பூவரசின் காய்க்குள் விதைகள் சிதறாமல் இறுகப் பொதிந்து காக்கப்படுவது போல, ஒருவன் தன் எல்லை வரம்பை அரிய செல்வமாகக் கருதிப் பேணுக; உயிர்க்கு அதனினும் ஓங்கி நிற்கும் நிதி உலகில் வேறொன்றும் இல்லை.",
                meaning:
                    "Once pollinated, the Portia flower drops its petals cleanly and seals its persistent calyx into a tough, tightly closed woody capsule that guards its seeds patiently rather than bursting impulsively. Guard self-restraint as your foremost treasury—no greater wealth exists for a living soul."
            },
            {
                kuralNumber: 123,
                line1: "நிறம்மாறும் பூவரசின் பாங்குணர்ந்து கற்றோர்",
                line2: "திறந்தெளிந்து நிற்பின் உயர்வு.",
                tamilPorul:
                    "காலையில் இளமஞ்சளாக மலர்ந்து, தேன் வழங்கும் நேரம் முடிந்ததும் மாலையில் இளஞ்சிவப்பாக நிறம்மாறித் தெளிவாக உணர்த்தும் பூவரசின் பாங்குணர்ந்து ஒழுகுவது போல, அறிய வேண்டிய திறத்தைத் தெளிந்து அறவழியில் ஒடுங்கி நிற்பவர்க்கு உலகம் மதிக்கும் உயர்வு தானே வந்து சேரும்.",
                meaning:
                    "Shifting calmly from pale sulfur-yellow at morning to rose-purple by afternoon once its nectar window closes, the Portia Blossom communicates exact boundaries to pollinators without confusion or overextension. Knowing what wisdom requires and holding steady in disciplined restraint earns unmistakable eminence recognized by the wise."
            },
            {
                kuralNumber: 124,
                line1: "கடற்காற்றில் சாயாது பூக்கும் மலர்போல்",
                line2: "தடம்மாறான் வெற்பினும் மேல்.",
                tamilPorul:
                    "கடற்கரையின் கடும் உப்புக்காற்றிலும் சுடும் வெயிலிலும் முறிந்து சாயாது தன் அமைப்பில் உறுதியாகப் பூத்து நிற்கும் பூவரசமலரைப் போல, தன் நெறித்தடத்திலிருந்து சிறிதும் மாறாது அமைதி காப்பவனின் தோற்றம் வானளாவிய வெற்பினும் மேலானதாகும்.",
                meaning:
                    "Rooted along Tamil Nadu's wind-lashed coastal belts and sun-baked roadsides, the Portia Blossom's sturdy leathery cup and woody stalk hold their composure through fierce salt gales without snapping or losing cadence. The stature of one who stands unswerving in their station with quiet self-mastery towers far above a mountain peak."
            },
            {
                kuralNumber: 125,
                line1: "அரசுமலர் தாழ்ந்திலங்கல் யார்க்கும் நலமே",
                line2: "வரமுடையார் வாழ்வின் வளம்.",
                tamilPorul:
                    "பூக்களுக்கு அரசன் என்னும் பொருள்படப் 'பூவரசு' எனப் பெயர் தாங்கியும் முட்களின்றிக் கிளையில் தாழ்ந்து பணிவுடன் இலங்கும் மலரைப் போல, அடக்கமும் பணிவும் எல்லோர்க்கும் நலமே; அதிலும் செல்வ வரமுடையார்க்கு அது வாழ்வின் மேல் மேலும் சேரும் பெருவளமாகும்.",
                meaning:
                    "Named Poovarasu—\"King of Flowers\"—and endowed with year-round blooms, medicinal value, and dense shade, the flower still wears soft thornless petals and nods humbly downward rather than thrusting arrogantly skyward. Humility adorns every human being, and for those already blessed with abundance, it crowns their wealth with a second, richer grace."
            },
            {
                kuralNumber: 126,
                line1: "அந்திவர ஐந்திதழ்போல் ஐம்புலனும் உள்குவிக்கின்",
                line2: "நந்தாத ஏழ்பிறப்பும் காப்பு.",
                tamilPorul:
                    "அந்திப் பொழுது வந்தவுடன் தன் ஐந்து இதழ்களையும் ஒன்றாக உள்ளே குவித்துத் தன் கருவைப் பாதுகாக்கும் பூவரசம்பூவைப் போல, ஒருவன் தன் ஐம்புலன்களையும் உள்ளே ஒடுக்கி ஆள வல்லானாயின், அது தலைமுறைகள் கடந்தும் குன்றாத நந்தாத காப்பாக விளங்கும்.",
                meaning:
                    "Overlapping in a sheltering spiral bell, the Portia Blossom's five crinkled petals curl inward together as dusk arrives, sealing the delicate reproductive core from nocturnal harm to secure unbroken generational seed continuity. Drawing the five senses inward under steady mastery in one lifetime builds an unfailing shield across seven generations."
            },
            {
                kuralNumber: 127,
                line1: "உள்புதைந்த தூண்போல் பிறவிடினும் வாக்கோம்பல்",
                line2: "தள்ளின் பிழைமொழியால் நோய்.",
                tamilPorul:
                    "தன் இனத்துச் செம்பருத்தி போல மகரந்தத் தூணை வெளியே நீட்டாமல், இதழ்க் கிண்ணத்தின் உள்ளேயே அடக்கமாகப் புதைத்து வைத்திருக்கும் பூவரசம்பூவின் தூணைப் போல, மற்ற எவற்றைக் காக்கத் தவறினாலும் ஒருவன் தன் வாக்கை ஓம்ப வேண்டும்; அதனைத் தள்ளிவிட்டால் பிழைமொழியால் தீரா நோய் போன்ற துயரம் வந்து சேரும்.",
                meaning:
                    "Unlike its close botanical cousin the Hibiscus, whose staminal column thrusts far beyond its rim, the Portia Blossom keeps its short golden column strictly tucked inside the protective yellow bell. Whatever else one fails to guard, guard speech carefully—neglecting it invites deep, lasting anguish from a single slip of the tongue."
            },
            {
                kuralNumber: 128,
                line1: "தூயவிதழ் ஓர்கறை மாய்ப்பதுபோல் வெம்மொழி",
                line2: "தீயதுளி நற்செயலும் பாழ்.",
                tamilPorul:
                    "மென்மையான தூய இளமஞ்சள் பூவரசிதழின் அழகு முழுவதையும் அதன்மேல் படும் ஒரேயொரு கருங்கறை மாய்த்துச் சிதைப்பது போல, பிறர்க்குத் துன்பம் தரும் வெம்மொழியின் ஒரு தீயதுளியே இதுவரை செய்த எல்லா நற்செயல்களையும் பாழாக்கிவிடும்.",
                meaning:
                    "Across the pristine, calm cream-yellow expanse of a Portia petal, even a single dark blemish or rough tear instantly mars the serenity of the entire floral bell. Even one solitary drop of harsh, wounding speech spoils the worth of every accumulated good deed."
            },
            {
                kuralNumber: 129,
                line1: "கனல்வெந்த பூமடல் மாறிடும் தீரா",
                line2: "மனங்கீறும் வஞ்சொல் தழும்பு.",
                tamilPorul:
                    "சுடும் கதிரவனின் கனல்வெப்பத்தால் வாடி வெந்த பூவரசின் பூமடல் உதிர்ந்து கிளையில் புதிய மலராய் எளிதில் மாறி ஆறிடும்; ஆனால் பிறர் மனத்தைக் கீறிப் புண்படுத்திய கடுமையான வஞ்சொல்லின் தழும்பு எக்காலத்தும் தீராது நிலைத்திருக்கும்.",
                meaning:
                    "Even when blazing coastal heat scorches the outer crinkled rim of a Portia petal, the blossom sheds cleanly and the living twig heals swiftly into fresh bloom by the next dawn. A wound seared by fire heals from within, whereas the deep scar carved into a heart by cruel words never fades."
            },
            {
                kuralNumber: 130,
                line1: "தன்னுள் தணல்மறைக்கும் பூப்போல் சினங்கடிந்தோன்",
                line2: "நன்னெறியும் நாடி வரும்.",
                tamilPorul:
                    "தன் இதழ்க் கிண்ணத்தின் அடிப்பாகத்தில் எரியும் செந்தணல் போன்ற ஆழ்ந்த செந்நிறக் கருவை வெளியே கக்காமல் குளிர்ந்த இளமஞ்சள் இதழ்க்குள் அடக்கி மறைக்கும் பூவரசம்பூவைப் போல, கற்றறிந்து சினத்தைக் கடிந்து ஒடுங்கும் சான்றோனை நன்னெறியாகிய அறமே தானே நாடித் தேடி வரும்.",
                meaning:
                    "Holding a fierce five-pointed crimson eye burning deep at its center while presenting an utterly cool, serene pale-yellow cup outward, the Portia Blossom contains inner fire without ever scorching its visitors, drawing pollinators peacefully into its heart. Righteous virtue itself eagerly seeks out the path of one who masters wisdom, subdues anger, and dwells in calm restraint."
            }
        ]
    },

    // ======================================================================
    // CHAPTER 14: ஒழுக்கமுடைமை — அந்திமந்தாரை (Kurals 131–140)
    // ======================================================================
    {
        chapterNumber: 14,                      // Automatically loads images/14.jpg -> Pillar 01 -> Iyal 02 (இல்லறவியல்)
        tamilTitle: "ஒழுக்கமுடைமை — அந்திமந்தாரை",
        chapterTitle: "The Possession of Decorum (Right Conduct) – The Four O'Clock Flower",
        flowerName: "The Four O'Clock Flower (அந்திமந்தாரை)",
        tamilSummary:
            "அந்திப் பொழுதில் தப்பாமல் மலர்ந்து பெருமை பயத்து, ஐந்து பச்சைப் புல்லிகளால் தன்னைப் புரந்து காத்து, மஞ்சளும் செவ்வூதாவும் கலங்காத தூய இதழ்மரபால் மேற்குலமாகி, மேலிலை உதிர்ந்தாலும் கிழங்கு வேரால் மீண்டும் தளிர்த்து, பகல் வெம்மையில் முரண்படாமல் கூம்பித் தீது தவிர்த்து, நன்னடையால் புகழ்பூண்டு, ஒவ்வொரு மலரும் கருமணி விதையாகித் தலைமுறைதோறும் நலம்பூத்து, நறுங்குழலில் எப்போதும் தேன்மணம் வீசி, மாலைக் குளிரோடும் விடியலோடும் ஞாலத்து ஒத்திசைந்து வாழும் அந்திமந்தாரையின் வாழ்வியல் — உயிரினும் மேலான சீலம், காலம் தவறா ஒழுங்கு மற்றும் உலகத்தோடு ஒத்திசையும் நன்னடையே வாழ்வின் மெய்யான அறிவும் பெருமையும் என்பதைக் குறள்கள் 131–140 வழியே மெய்ப்பிக்கிறது.",
        summary:
            "Across ten verified circadian, structural, and genetic designs of the Four O'Clock Flower, Chapter 14 establishes good conduct not as rigid conformity, but as living alignment with natural order. Steadfast discipline yields eminence worth guarding even above life itself (131) and stands as one's surest support after weighing every virtue (132); clean inner integrity defines true nobility whereas straying degrades it (133); lost learning can always regrow like seasonal leaves, yet destroying one's root conduct ruins everything (134); just as envy strips away vitality, lack of conduct bars one from true stature (135); sensing midday harm keeps the steadfast from ever swerving off course (136); orderly conduct crowns life with renown while unruly straying leaves an unbearable stain (137); right conduct acts as the hardy black seed of all future welfare while crookedness breeds constant distress (138); deep refinement makes mean speech impossible even by accident (139); and all book-learning stands hollow if one fails to harmonize with the noble rhythm of the world (140).",
        architecturalArc: [
            {
                range: "131–133",
                phase: "Circadian Order & Lineage",
                traits: "Exact 4 PM twilight clock • Five-pointed green involucre shield • Crisp unmuddied bicolor genetics"
            },
            {
                range: "134–136",
                phase: "Root Core & Vigilance",
                traits: "Perennial tuberous root renewal • Non-competitive twilight grace • Daytime folding against scorching heat"
            },
            {
                range: "137–139",
                phase: "Renown, Seed & Purity",
                traits: "\"Marvel\" honor vs. withered straying • Single ribbed black seed • Pure sweet nectar-tube fragrance"
            },
            {
                range: "140",
                phase: "World Synchrony",
                traits: "Effortless evening-to-dawn alignment with planetary light and nocturnal pollinators"
            }
        ],
        greenThinkingPrinciple:
            "Decorum is nature's operating clock—keep your appointed season, guard your deep roots more closely than outward leaves, stay unmuddied in character, and align your daily rhythm harmoniously with the living world around you.",
        kurals: [
            {
                kuralNumber: 131,
                line1: "அந்திமலர் சீலம் பெருமை பயத்தலால்",
                line2: "முந்தியே ஆவியினும் பேண்.",
                tamilPorul:
                    "மாலைப் பொழுதில் தப்பாமல் மலரும் அந்திமந்தாரை மலரின் சீரிய ஒழுங்கு அதற்கு உலகம் வியக்கும் பெருமையைப் பயப்பது போல, மாறாத நற்சீலமே வாழ்விற்கு உயர்ந்த பெருமையைத் தருதலால் அதனைத் தம் உயிராகிய ஆவியைக் காட்டிலும் முந்தியே போற்றிப் பேணுக.",
                meaning:
                    "Governed by an unerring circadian clock, the Four O'Clock Flower opens faithfully in the cool of late afternoon every single day—earning its botanical title as nature's \"Marvel\" purely through steadfast regularity. Because right conduct yields true eminence, cherish and guard it foremost, even above life itself."
            },
            {
                kuralNumber: 132,
                line1: "புல்லி புரக்கும் மலர்நெறி போற்றுக",
                line2: "எல்லாம் அளந்தாலும் சார்பு.",
                tamilPorul:
                    "ஐந்து கூரிய பச்சைப் புல்லி மடல்கள் தம் உள்ளிருக்கும் மென்மையான மலர்க்குழலை அக்கறையோடு சுற்றிப் புரந்து காப்பது போல, நன்மலர் நெறியாகிய ஒழுக்கத்தை விழிப்புடன் போற்றுக; அறங்கள் எல்லாவற்றையும் நுட்பமாக அளந்து ஆராய்ந்தாலும் அது ஒன்றே நிலைத்த சார்பாகும்.",
                meaning:
                    "Cradled tightly inside a five-pointed green involucre cup that shields the delicate elongated floral tube from midday glare until dusk, the blossom thrives through attentive self-guarding. Guard right conduct with unceasing vigilance—even after weighing every path of virtue, conduct alone proves your unfailing support."
            },
            {
                kuralNumber: 133,
                line1: "தூய இதழ்மரபு போல்நடை மேற்குலம்",
                line2: "சாயின் கடையாம் இனம்.",
                tamilPorul:
                    "மஞ்சளும் செவ்வூதாவும் கலங்கி மங்காமல் தெளிவான கோடாகத் தம் மரபு வண்ணத்தைத் தூய்மையாகக் காட்டும் அந்திமந்தாரை இதழ்களைப் போல, செம்மையான நன்னடையே மெய்யான மேற்குலமாகும்; அதிலிருந்து சாய்ந்து விலகின் அதுவே கடையான இனமாகிவிடும்.",
                meaning:
                    "Celebrated in botanical genetics for preserving crisp, unmuddied bicolor patterns—where lemon-yellow and vibrant magenta meet along clean hereditary lines without dissolving into disorder—the flower embodies purity of lineage. Steadfast right conduct itself constitutes noble birth; falling away from it reduces life to an ignoble state."
            },
            {
                kuralNumber: 134,
                line1: "இலைகள் தளிர்த்தல்போல் மீளும் பனுவல்",
                line2: "நிலைநெறி வீழின் அறும்.",
                tamilPorul:
                    "வறட்சியில் மேலுள்ள இலைகளும் கிளைகளும் உதிர்ந்து மறைந்தாலும் மண்ணடியில் உள்ள உறுதிமிக்க கிழங்கு வேரால் அந்திமந்தாரை மீண்டும் தளிர்ப்பது போல, மறந்துபோன பனுவலாகிய நூற்கல்வியை மீண்டும் கற்று மீட்டுக்கொள்ளலாம்; ஆனால் வேர்போன்ற நிலைநெறி வீழ்ந்து சிதைந்தால் வாழ்வே அற்றுப்போகும்.",
                meaning:
                    "Even when seasonal drought or frost strips away its upper stems and foliage, the Four O'Clock regrows vigorously from its deep perennial tuberous root; yet if that buried foundation rots, the plant vanishes completely. Forgotten learning and scripture can always be re-acquired, but once foundational conduct collapses, true stature is severed beyond repair."
            },
            {
                kuralNumber: 135,
                line1: "பொறாமை வளமிலா வாடுமலர் அன்ன",
                line2: "நெறியிலார் காணார் சிறப்பு.",
                tamilPorul:
                    "வெயிலோடு முரண்பட்டுப் பிறசெடிகளை நெருக்காமல் தன் அந்திப் பொழுதில் அமைதியாகப் பூக்கும் அந்திமந்தாரைக்கு மாறாக, பொறாமை என்னும் வெப்பத்தால் வளமிழந்து வாடும் மலரைப் போல, செந்நெறி இல்லாதவர் எக்காலத்திலும் உயர்ந்த சிறப்பைக் காண மாட்டார்.",
                meaning:
                    "Refusing to compete aggressively in harsh daytime glare or choke neighboring plants out of rivalry, the Four O'Clock reserves its vitality for serene dusk bloom, whereas stressed, competitive weeds shrivel without grace. Just as genuine prosperity never dwells in the envious, true eminence is never beheld by those devoid of right conduct."
            },
            {
                kuralNumber: 136,
                line1: "பகல்வெம்மை தீதுணர்ந்து கூம்புமலர் ஒப்ப",
                line2: "தகவுடையோர் நீங்கார் வழி.",
                tamilPorul:
                    "உச்சிப் பகலின் கடும் வெம்மை தன் மென்னிதழ்களுக்குத் தீங்கு விளைவிக்கும் என்பதை உணர்ந்து, அவசரப்படாமல் அமைதியாகக் கூம்பி நிற்கும் அந்திமந்தாரையை ஒப்ப, நெறிதவறினால் விளையும் தீமையை உணர்ந்த தகவுடையோர் தம் நல்வழியிலிருந்து ஒருபோதும் நீங்க மாட்டார்.",
                meaning:
                    "Sensing the destructive cost of midday heat, the blossom holds its tender funnel tightly sealed through scorching hours rather than exposing its pollen prematurely to dehydration and ruin. Recognizing the deep harm that follows any lapse, those of steadfast worth never swerve from the path of decorum."
            },
            {
                kuralNumber: 137,
                line1: "நன்னடையால் மந்தாரை போல்புகழ் பூணுவர்",
                line2: "புன்னடையால் தாங்காத மாசு.",
                tamilPorul:
                    "மாறாத கால ஒழுங்கால் அந்திமந்தாரை மாலை வானில் அனைவரும் போற்றும் புகழைப் பூணுவது போல, நன்னடையால் மக்கள் உலகம் மதிக்கும் பெருமையைப் பூணுவர்; ஒழுங்கு பிறழ்ந்த புன்னடையால் எவரும் தாங்க முடியாத பெரும் மாசை அடைவர்.",
                meaning:
                    "Honoring its twilight appointment day after day, the Four O'Clock commands enduring admiration across courtyards and draws swift hawkmoths to its fragrance, while disordered straying leaves only withered decay. Right conduct clothes a life in lasting renown, whereas base conduct brings an unbearable stain of disgrace."
            },
            {
                kuralNumber: 138,
                line1: "நலம்பூக்கும் கார்மணியாம் செந்நெறி கோணல்",
                line2: "கலக்கமே நாளும் உறும்.",
                tamilPorul:
                    "ஒழுங்காக மலர்ந்த ஒவ்வொரு அந்திமந்தாரை மலரும் முதிர்ந்து ஒரு தூய கருமணி விதையாகித் தலைமுறைதோறும் நலம்பூப்பது போல, செந்நெறியே எல்லா நன்மைக்கும் அடிப்படை வித்தாகும்; அதிலிருந்து கோணிய தீநடை நாள்தோறும் நீங்கா மனக்கலக்கத்தையே உண்டாக்கும்.",
                meaning:
                    "Each orderly twilight flower matures cleanly into a single hard, ribbed jet-black seed that stores generational vitality and sparks fresh fragrant blooms season after season. Right conduct is the living seed from which every good flourishes, whereas crooked conduct invites unending distress day after day."
            },
            {
                kuralNumber: 139,
                line1: "நறுங்குழல் தேன்மணம்போல் சான்றோர் மறந்தும்",
                line2: "சிறுமொழி கூறல் அரிது.",
                tamilPorul:
                    "மென்மையான நறுங்குழல் அமைப்புடைய அந்திமந்தாரை காற்றில் அசைந்தாலும் எப்போதும் இனிய தேன்மணத்தை மட்டுமே வீசுவது போல, நன்னடையில் நிலைத்த சான்றோர் தம்மை மறந்த பொழுதிலும் சிறுமையான தீய மொழிகளைக் கூறுதல் அரிதாகும்.",
                meaning:
                    "Shaped as a sleek, nectar-lined floral tube that releases exclusively sweet, soothing evening perfume—even when shaken by gusting night breezes—never turning foul or caustic, the flower stays pure in its expression. Those anchored in good conduct find it unthinkable to utter mean or evil words even by an accidental slip."
            },
            {
                kuralNumber: 140,
                line1: "ஞாலத்து ஒத்திசையும் மாலைப்பூ போல்நடவார்",
                line2: "நூலெல்லாம் ஓதினும் வீண்.",
                tamilPorul:
                    "மாலைக் குளிரோடும் இரவுப் பூச்சிகளோடும் விடியல் ஒளியோடும் துல்லியமாக ஒத்திசைந்து வாழும் மாலைப்பூவான அந்திமந்தாரை போல, இவ்வுலகத்தின் உயர்ந்த நெறிகளோடு ஒத்திசைந்து நடக்க அறியாதவர் எத்தனை நூல்களை எல்லாம் கற்று ஓதினாலும் அது வீணேயாகும்.",
                meaning:
                    "Synchronized seamlessly with planetary light, cooling evening air, and nocturnal hawkmoths—opening when pollinators awaken and folding cleanly at sunrise—the Four O'Clock survives through total ecological harmony. Those who fail to live in harmony with the noble rhythm of the world render all their book-learning hollow and vain."
            }
        ]
    },

    // ======================================================================
    // CHAPTER 15: பிறனில்விழையாமை — கானாவாழைப்பூ (Kurals 141–150)
    // ======================================================================
    {
        chapterNumber: 15,                      // Automatically loads images/15.jpg -> Pillar 01 -> Iyal 02 (இல்லறவியல்)
        tamilTitle: "பிறனில்விழையாமை — கானாவாழைப்பூ",
        chapterTitle: "Sanctity of Boundaries (Not Coveting Another's Spouse) – The Benghal Dayflower",
        flowerName: "The Benghal Dayflower (கானாவாழைப்பூ)",
        tamilSummary:
            "தன் பச்சைப் புல்லி மடலுக்குள்ளேயே ஒழுங்காக வாழ்ந்து, பிற மரங்களில் ஒட்டி உறிஞ்சாத படர்கொடியாய்ப் பாங்கு காட்டி, முரட்டுத் தீண்டலில் நீராகக் கரைந்து சிதைவதால் துரோகத்தின் உயிரற்ற தன்மையை உணர்த்தி, புல்லியிலிருந்து உயர்ந்தும் வரம்புகடவாமல் நின்று, காலையில் தோன்றி மறையும் சிற்றிதழ் போல எண்ணித் தாவினால் அற்றிடாத் தூற்றல் வரும் என்பதைக் காட்டி, கூரிய தூவி சூழ்ந்த தங்குமடலின் எல்லை மீறின் இகல்-வசை-மறம்-வெருள் ஆகிய நான்கும் பற்றுவதை எச்சரித்து, பச்சை மடலுள் கருவுறும் நிறைவால் செங்குடிவாழ்வை நிறுவி, உச்சிக்குள் கூம்பித் தன்பால் கருவுறும் ஆழ்வீரத்தால் செம்மைமேல் பண்பாகி, ஆழிசூழ் புவியில் தன் மண்ணில் நிலைக்கும் மண்மலர்போல் சீர்பெற்று, காட்டுப்புறத் தண்பூவாயினும் பிறசெடி நயவா மெய்ச்சீரை உணர்த்தும் கானாவாழைப்பூவின் வாழ்வியல் — பிறர் இல்லற வரம்பை மனத்தாலும் கண்ணாலும் தீண்டாத தூய்மையும் ஆழ்ந்த மனவீரமுமே மெய்யான இல்லற மாண்பு என்பதைக் குறள்கள் 141–150 வழியே மெய்ப்பிக்கிறது.",
        summary:
            "Across ten verified floral, boundary, and amphicarpic designs of the Benghal Dayflower, Chapter 15 establishes fidelity to boundaries not as timid hesitation, but as the highest form of moral courage. Those grounded in righteous order never harbor delusion toward another's spouse (141); among all who stray from virtue, lurking at another's gate is the supreme folly (142); violating the home of trusting friends reduces a living person to a lifeless corpse (143); lofty stature means nothing without even an atom of boundary discernment (144); treating trespass as a light, fleeting indulgence brings undying public infamy (145); crossing a guarded threshold binds four relentless curses—enmity, disgrace, sin, and dread—permanently to the offender (146); true domestic righteousness rests in being completely free of desire for another's partner (147); refusing even a covetous glance is deep valor that surpasses ordinary virtue as perfected character (148); uprightly never touching another's spouse marks those truly worthy of every blessing on earth (149); and even amid lesser human failings, honoring the sanctity of another's domestic boundary remains genuine goodness (150).",
        architecturalArc: [
            {
                range: "141–143",
                phase: "Order, Folly & Betrayal",
                traits: "Self-contained green spathe • Non-parasitic ground creeper • Fragile petals collapsing at rough touch"
            },
            {
                range: "144–146",
                phase: "Discernment & Four Curses",
                traits: "Rising high without breaking bract limit • Fleeting morning petal vs. lasting decay • Bristled protective spathe rim"
            },
            {
                range: "147–149",
                phase: "Valor & Pure Lineage",
                traits: "Sealed inner & subterranean conception • Midday inward self-pollinating fold • Soil-anchored underground blooms"
            },
            {
                range: "150",
                phase: "Enduring Sanctity",
                traits: "Wild, untamed cool dayflower that still refuses to parasitize another plant's host"
            }
        ],
        greenThinkingPrinciple:
            "Healthy ecosystems survive because every organism honors its ecological niche—draw nourishment from your own lawful soil, never parasitize another's shelter, and treat self-governed respect for boundaries as the highest form of strength.",
        kurals: [
            {
                kuralNumber: 141,
                line1: "கானமலர் தன்மடலில் வாழ்வொப்ப மாநெறியோர்",
                line2: "ஊனமயல் வேற்றிணைமேல் இன்று.",
                tamilPorul:
                    "கானாவாழை மலர் பிற செடிகளின் எல்லையை மீறாமல் தன் பச்சைப் புல்லி மடலுக்குள்ளேயே ஒழுங்காக மலர்ந்து வாழ்வதைப் போல, உலகின் உயர்ந்த அறமும் பொருளும் உணர்ந்த மாநெறியோரிடம் பிறர் வாழ்க்கைத் துணையை விரும்பும் ஊனமான மயக்கம் ஒருபோதும் இல்லை.",
                meaning:
                    "Engineered to bloom strictly inside its own folded green spathe without encroaching on neighboring plants, the Benghal Dayflower honors spatial order effortlessly. Among those who truly comprehend virtue and righteous order in the world, the flawed folly of coveting another's spouse simply does not exist."
            },
            {
                kuralNumber: 142,
                line1: "படர்கொடி வேறொட்டாப் பாங்கற்றோர் தம்முள்",
                line2: "மடமிகும் வேற்றுவாயில் காப்பு.",
                tamilPorul:
                    "மென்மையாக மண்ணில் படரும் கானாவாழைக்கொடி பிற மரங்களின் தண்டில் ஒட்டி அவற்றின் சத்தை உறிஞ்சாத நற்பாங்கினை இழந்து அறநெறியின் புறத்தே நிற்போர் எல்லாரிலும், பிறர் வீட்டு வாயிலைக் காத்துப் பதுங்கி நிற்பவரை விடப் பெருமடமையர் எவரும் இல்லை.",
                meaning:
                    "Unlike parasitic vines that latch onto neighboring trunks to drain another's sap, the creeping Benghal Dayflower stays humbly on its own damp earth without clinging to another host. Even among all who stand outside the path of virtue, no folly surpasses lurking covertly at another's doorstep."
            },
            {
                kuralNumber: 143,
                line1: "தீண்டக் கரைபூப்போல் நட்டார் அகங்கெடுப்போர்",
                line2: "மாண்டார் உயிரற்ற கூடு.",
                tamilPorul:
                    "மென்மையான கானாவாழை நீலவிதழ்களை முரட்டுத்தனமாகத் தீண்டிய கணத்திலேயே அவை உயிரோட்டமின்றி நீராகக் கரைந்து சிதைவது போல, தம்மைத் தெளிவாக நம்பிய நண்பர்களின் இல்லத்தைக் கெடுத்துத் துரோகம் செய்வோர் செத்து மாண்டவரின் உயிரற்ற உடற்கூட்டிற்குச் சமமானவரே ஆவர்.",
                meaning:
                    "So delicate is the sanctity of the Dayflower's sky-blue petals that a single rough violation collapses them instantly into lifeless watery pulp. Those who commit treachery against the home of friends who trusted them are no different from the lifeless, empty shells of the dead."
            },
            {
                kuralNumber: 144,
                line1: "புல்லியுள் பூப்போல் உயர்ந்தெவன் வேற்றகத்துச்",
                line2: "சில்லணுவும் ஓரான் கடப்பு.",
                tamilPorul:
                    "தன் பச்சைப் புல்லி மடலுக்குள்ளிருந்து நீலமலர் மேலே நிமிர்ந்து உயர்ந்தாலும் தன் எல்லை வரம்பைக் கடக்காதது போல, உலகில் எத்துணை உயர்ந்த பெருமை உடையவராக இருந்தாலும் நுண்ணிய அணுவளவு கூட ஆராய்ந்து உணராமல் பிறர் இல்லத்தின் வரம்பைக் கடப்பதால் என்ன பயன்?",
                meaning:
                    "Though its twin periwinkle petals rise prominently aloft above its folded bract cup, the blossom never oversteps the fine bristled boundary guarding its base. However lofty a person's stature or greatness may appear, it counts for nothing if they cross into another's sanctuary without even an atom of discernment."
            },
            {
                kuralNumber: 145,
                line1: "சிற்றிதழ் நொய்தாய் அயல்வீடு தாவியோர்க்கு",
                line2: "அற்றிடாத் தூற்றல் உறும்.",
                tamilPorul:
                    "காலையில் சில மணிநேரமே தோன்றி மறையும் கானாவாழையின் சிற்றிதழைப் போல எளிமையான நொய்மையான செயல் என்று எண்ணிப் பிறர் வீட்டின் எல்லையைத் தாவி மீறுவோர்க்கு, எக்காலத்தும் அற்றுப்போகாத நிலைத்த பழித்தூற்றலே வந்து சேரும்.",
                meaning:
                    "Opening for only a few brief morning hours before dissolving, the Dayflower's small petal might look fleeting, yet violating its stem invites lasting decay. Anyone who trespasses into another's home thinking the act is light, brief, and easy incurs an undying reproach that never fades."
            },
            {
                kuralNumber: 146,
                line1: "தங்குமடல் மீறின் இகல்வசை வெம்மறம்",
                line2: "பொங்கும் வெருள்நாலும் பற்று.",
                tamilPorul:
                    "தன் அரும்புகள் தங்கும் பச்சைப் புல்லி மடலின் விளிம்பில் கூரிய பாதுகாப்புத் தூவிகள் சூழ்ந்திருக்கும் கானாவாழையின் வரம்பை மீறுவது போலப் பிறர் இல்லற வரம்பை மீறினால், பகையாகிய இகல், இழிவாகிய வசை, கொடிய பாவமாகிய வெம்மறம், பொங்கும் அச்சமாகிய வெருள் ஆகிய நான்கும் ஒருபோதும் நீங்காமல் பற்றிக்கொள்ளும்.",
                meaning:
                    "Guarded along the rim of its sheltering green spathe by dense bristly hairs evolved to repel intruders, the blossom warns against crossing protected limits. Breaching the sanctity of another's household binds four relentless curses to the trespasser forever: enmity, infamy, harsh sin, and surging dread."
            },
            {
                kuralNumber: 147,
                line1: "பச்சை மடலுள் கருமலர்போல் செங்குடியோன்",
                line2: "இச்சை அயல்துணைமேல் அற்று.",
                tamilPorul:
                    "வெளியுலகை நாடாமல் தன் பச்சைப் புல்லி மடலுக்குள்ளும் தன் மண்ணுக்குள்ளும் அமைதியாகக் கருவுற்று நிறைவு காணும் கானாவாழை மலரைப் போல, பிறருக்கு உரிய வாழ்க்கைத் துணையின் மீது எவ்வித இச்சையும் கொள்ளாதவனே செம்மையான இல்லறக் குடிவாழ்வோன் ஆவான்.",
                meaning:
                    "Endowed with sealed subterranean cleistogamous flowers and a mucilage-cushioned inner spathe that mature viable seeds faithfully inside their own home boundary, the Benghal Dayflower finds complete fulfillment within its own threshold. He alone truly embodies righteous household life who harbors zero covetous desire toward another's partner."
            },
            {
                kuralNumber: 148,
                line1: "சூழ்மடல் போல்மற்றோர் தாரத்தைப் பாராத",
                line2: "ஆழ்வீரம் செம்மைமேல் பண்பு.",
                tamilPorul:
                    "உச்சிப் பொழுது நெருங்கும் முன்பே தன் நீல இதழ்களை உள்ளே சுருக்கித் தன் மகரந்தத்தாலேயே கருவுற்றுப் பிற மலர்களை ஏறிட்டுப் பாராமல் சூழ்மடலுள் அடங்கும் கானாவாழையைப் போல, பிறர் மனைவியைக் காமக் கண்ணோடு பாராத ஆழ்ந்த மனவீரம் சான்றோர்க்கு வெறும் அறம் மட்டுமன்று; அது அறத்திற்கும் மேலான நிறைந்த நற்பண்பாகும்.",
                meaning:
                    "Folding its petals cleanly inward before midday so its own anthers touch its own stigma without ever leaning outward for foreign pollen, the blossom demonstrates quiet, sovereign self-mastery. The deep inner valor of never casting a covetous glance at another's wife is not merely ordinary virtue—it stands above it as perfected nobility of conduct."
            },
            {
                kuralNumber: 149,
                line1: "இப்புவியின் ஆழிசூழ் மண்மலர்போல் சீர்பெறுவோர்",
                line2: "செப்பால் அயல்மெய் தொடார்.",
                tamilPorul:
                    "அலைவீசும் ஆழ்கடல் சூழ்ந்த இப்புவியில் தன் சொந்த மண்ணுக்குள்ளேயே வேரோடு பிணைந்து தூய வித்துகளை ஈனும் கானாவாழையின் மண்மலரைப் போல, எல்லா நலன்களையும் சீரையும் பெறுவதற்குத் தகுதியானவர் யார் எனின், செம்மையான நெறியால் பிறருக்கு உரியவரின் உடலை ஒருபோதும் தீண்டாதவரே ஆவர்.",
                meaning:
                    "Anchoring its hidden underground blooms strictly inside its own patch of earth across this vast ocean-ringed planet, the Dayflower secures enduring vitality without touching another plant's domain. On this sea-girt earth, those truly worthy of every blessing are they who, through steadfast uprightness, never touch another's spouse."
            },
            {
                kuralNumber: 150,
                line1: "நொய்ய பிழைகள் நிகழ்த்தினும் தண்பூப்போல்",
                line2: "மெய்யாய் அயல்வேண்டாச் சீர்.",
                tamilPorul:
                    "எளிமையான காட்டுப் புறங்களில் தன்னியல்பாக வளர்ந்து சில குறைகளுக்கு ஆளானாலும் பிற செடிகளை ஒட்டுண்ணியாய் அழிக்காமல் தன் குளிர்ந்த வரம்பைக் காக்கும் தண்பூவான கானாவாழையைப் போல, வாழ்வில் சிறுமை தரும் பிற பிழைகளை நிகழ்த்தினாலும் பிறர் வரம்பிற்குள் உள்ள துணையை விரும்பாமல் இருத்தல் மெய்யான நற்சீராகும்.",
                meaning:
                    "Even growing wild and untamed along rugged village margins where it faces constant neglect, the cool, moisture-rich Dayflower never turns parasitic or steals another plant's support. Even if one falters into lesser wrongs outside virtue's perfection, refraining genuinely from coveting one who belongs within another's boundary remains true goodness."
            }
        ]
    },

    // ======================================================================
    // CHAPTER 16: பொறையுடைமை — நெருஞ்சிப்பூ (Kurals 151–160)
    // ======================================================================
    {
        chapterNumber: 16,                      // Automatically loads images/16.jpg -> Pillar 01 -> Iyal 02 (இல்லறவியல்)
        tamilTitle: "பொறையுடைமை — நெருஞ்சிப்பூ",
        chapterTitle: "The Possession of Patience (Forbearance) – The Nerunji Blossom",
        flowerName: "The Nerunji Blossom (நெருஞ்சிப்பூ)",
        tamilSummary:
            "வழியோரக் காலடியை ஏற்றும் மறுநாள் எழுந்து, மிதியேற்ற தழும்பின்றிப் பிழை கருதாது மலர்ந்து, வறண்ட பாதையிலும் தேன்மறுக்காமல் அறிவிலாரை ஏற்று, மண்ணோடு தவழ்கொடியாய் நின்று சால்பு குன்றாது தணிவுநெறி பேணி, கடிந்தோர் இன்றி ஆர்ந்தோர் கொடிமணியாய் அகத்துள் காக்கப்பட்டு, பூப்பொழுதைக் கடந்து ஓய்ந்திடா வித்தென நிலைத்த பேர் பெற்று, நஞ்சற்ற தண்பூவாய்க் குளிர் மருந்தாகிப் பாவம் தவிர்த்து, தாழ்மலர்போல் செம்பண்பால் வாகை கொண்டு, வீதிப்புழுதியிலும் மாசற்ற சீரோடு மாதவரினும் உயர்ந்து, கார்மழை காத்திருக்கும் பசித்தவத்தினும் மேலாய்க் கசப்புரை ஏற்போரின் பெருமையை உணர்த்தும் நெருஞ்சிப்பூவின் வாழ்வியல் — மிதிபட்டாலும் நிமிர்ந்து நலம் தரும் பொறுமையும் பிழைமறக்கும் பெருந்தன்மையுமே மெய்யான வலிமையும் தூய்மையும் என்பதைக் குறள்கள் 151–160 வழியே மெய்ப்பிக்கிறது.",
        summary:
            "Across ten verified structural, seasonal, and medicinal designs of the Nerunji Blossom, Chapter 16 reveals patience not as passive surrender, but as unbreakable living strength. Bearing detractors calmly like a trampled blossom rising at dawn is life's supreme virtue (151); enduring wrongs is good, yet releasing them completely from memory is higher nobility (152); denying hospitality is the worst poverty while bearing the ignorant is the highest strength (153); hugging the ground in calm forbearance preserves fullness of character intact (154); the wise disregard retaliators and treasure the patient like bright gold on the vine (155); vengeance brings a fleeting flower-day's thrill while forbearance earns renown as enduring as a drought-proof seed (156); answering unjust injury without venom—and with compassionate restraint—keeps one free from sin (157); low-lying composure conquers arrogant excess through pure character (158); staying spotless amid roadside harsh speech surpasses the purity of secluded ascetics (159); and even austere dry-season fasting ranks second to patiently enduring the bitter words of others (160).",
        architecturalArc: [
            {
                range: "151–153",
                phase: "Endurance & Strength",
                traits: "Trampled stem rising at dawn • Unscarred morning bloom • Generous open nectar cup under heavy feet"
            },
            {
                range: "154–156",
                phase: "Poise & Lasting Renown",
                traits: "Ground-hugging five-petal balance • Treasured golden vine vs. stinging weeds • Ephemeral petal vs. drought-proof seed"
            },
            {
                range: "157–159",
                phase: "Compassion & Purity",
                traits: "Venomless cooling medicinal sap • Low-lying victory over tall excess • Grit-shedding silky hairs on dusty roads"
            },
            {
                range: "160",
                phase: "Supreme Austerity",
                traits: "Rainless monsoon-awaiting dormancy outranked only by enduring bitter human speech"
            }
        ],
        greenThinkingPrinciple:
            "True resilience does not waste energy fighting every footstep—hug the earth firmly, shed roadside grit without growing bitter, outlast arrogance through quiet regeneration, and let patient endurance turn pressure into lasting continuity.",
        kurals: [
            {
                kuralNumber: 151,
                line1: "காலடி ஏற்றும் மறுநாள் எழுமலர்",
                line2: "ஏலார் வசையாற்றல் மேல்.",
                tamilPorul:
                    "ஊர் வழியோரங்களில் நடப்போரின் காலடி அழுத்தத்தை அமைதியாக ஏற்றுத் தாங்கிய பின்னும், சினமோ சிதைவோ இன்றி மறுநாள் காலையில் மீண்டும் புத்தொளியோடு மலர்ந்து எழும் நெருஞ்சி மலரைப் போல, தம்மை இகழ்ந்து பழிக்கும் ஏலாரின் வசைகளை ஆற்றிப் பொறுத்தலே எல்லா அறங்களினும் மேலானதாகும்.",
                meaning:
                    "Engineered with flexible prostrate stems hugging village paths, the Nerunji blossom absorbs the crushing pressure of passing footsteps without snapping and lifts fresh golden blooms again the very next dawn. Just as this resilient ground flower bears every footstep calmly, enduring the scorn of detractors stands as life's foremost virtue."
            },
            {
                kuralNumber: 152,
                line1: "நெருஞ்சி மிதியேற்றல் போற்பிழை ஆற்றல்",
                line2: "கருதாமை மேலாய மாண்பு.",
                tamilPorul:
                    "நெருஞ்சிப் பூச்செடி தன்மேல் படும் மிதியை அமைதியாக ஏற்றுக்கொண்டு, மறுநாள் எவ்விதக் கசப்போ தழும்போ இன்றி மலர்வது போல, பிறர் செய்த பிழைகளை எப்போதும் ஆற்றிப் பொறுத்தல் நன்மையே; அதனை உள்ளத்தில் சிறிதும் கருதாமல் மறந்துவிடுதல் அதனினும் மேலான மாண்பாகும்.",
                meaning:
                    "After taking the weight of heavy boots along monsoon lanes, Nerunji opens clean, unscarred petals at sunrise as though no pressure ever occurred. Always bear with the wrongs inflicted by others—yet letting them go completely from memory is an even higher nobility."
            },
            {
                kuralNumber: 153,
                line1: "வறுமையுள் தேன்மறுப்பே புன்மை உரத்துள்",
                line2: "அறிவிலார் ஏற்றல் திறம்.",
                tamilPorul:
                    "வறண்ட பாதையிலும் மிதிபட்ட பின்னரும் தேன்நாடி வரும் சிறு பூச்சிகளை விலக்காமல் இதழ் விரிக்கும் நெருஞ்சி உணர்த்துவது போல, வறுமையுள் கொடிய புன்மை விருந்தாகிய தேனீகையை மறுத்தலாகும்; வலிமையுள் மிகச்சிறந்த திறம் அறிவற்றவர் செய்யும் பிழைகளை அமைதியாக ஏற்றுக்கொள்ளுதலாகும்.",
                meaning:
                    "Even on lean, trampled village margins, Nerunji keeps its open yellow cup generous to tiny bees and ants while absorbing thoughtless footsteps without shattering. The bleakest poverty within poverty is refusing hospitality to arriving guests, and the greatest strength within strength is enduring the folly of the ignorant."
            },
            {
                kuralNumber: 154,
                line1: "தவழ்கொடி போல்சால்பு குன்றாமை நாடின்",
                line2: "உவந்து தணிவுநெறி பேண்.",
                tamilPorul:
                    "உயர்ந்து சாயாமல் மண்ணோடு ஒட்டித் தவழும் கொடியால் தன் ஐந்திதழ் முழுமையைப் புயலிலும் குன்றாமல் காத்துக்கொள்ளும் நெருஞ்சியைப் போல, தம்மிடமுள்ள நிறைவான நற்சால்பு எக்காலத்தும் குன்றாமல் நிலைக்க வேண்டுமாயின், உள்ளம் உவந்து தணிவுநெறியாகிய பொறுமையைப் பேணுக.",
                meaning:
                    "By staying low along the earth on creeping stems rather than straining rigidly into fierce monsoon gusts, Nerunji preserves its crisp five-petaled symmetry intact. If you desire that fullness of noble character never diminish, gladly cherish and guard the path of calm forbearance."
            },
            {
                kuralNumber: 155,
                line1: "கடிந்தோரை மேலோர் மதியாரே ஆர்ந்தோர்",
                line2: "கொடிமணியாய்க் காப்பர் அகத்து.",
                tamilPorul:
                    "சுள்ளெனக் காயப்படுத்தும் களைச்செடிகளை உலகம் அகற்றி ஒதுக்குவதும், மிதித்தாலும் அமைதியாகப் பூக்கும் நெருஞ்சியைப் பொன்நிறக் கொடிமணியாய் மருந்தெனப் போற்றுவதும் போல, பழிதீர்த்துக் கடிந்தோரை மேலோர் ஒருபோதும் மதியார்; அமைதியாக ஆர்ந்தோரைத் தம் அகத்துள் அரிய மணியெனப் போற்றிக் காப்பர்.",
                meaning:
                    "While aggressive stinging weeds are uprooted without regard, the humble golden Nerunji—enduring roadside trampling while offering valued cooling medicine—is prized like bright gold on the vine. The wise attach no worth to those who strike back in retaliation, whereas they treasure the forbearing deep within their heart like a priceless jewel."
            },
            {
                kuralNumber: 156,
                line1: "காய்ந்தோர்க்குப் பூப்பொழுதே பூரிப்பு ஆற்றினர்க்கு",
                line2: "ஓய்ந்திடா வித்தொக்கும் பேர்.",
                tamilPorul:
                    "சினத்தால் காய்ந்து பழிதீர்ப்போர்க்குக் கிடைக்கும் பூரிப்பு ஒரு மலரின் சிறு பூப்பொழுதைப் போல ஒரு நாளுக்கு மட்டுமே நிலைக்கும்; ஆனால் பொறுமையுடன் ஆற்றினர்க்குக் கிடைக்கும் நற்பேர், கடும் கோடையையும் கடந்து அழியாமல் மீண்டும் முளைக்கும் நெருஞ்சியின் வித்தை ஒத்து எக்காலத்தும் ஓய்ந்திடாமல் நிலைக்கும்.",
                meaning:
                    "Retaliation's brief surge of satisfaction fades as quickly as a single ephemeral petal, whereas Nerunji's tough, patient seed capsules endure scorching droughts across seasons to renew life again and again. For those who avenge, exhilaration lasts barely a day; for those who forbear, renown endures unendingly like an imperishable seed."
            },
            {
                kuralNumber: 157,
                line1: "நஞ்சற்ற தண்பூப்போல் தீங்கயலார் ஆற்றினும்",
                line2: "நெஞ்சுருகிப் பாவம் தவிர்.",
                tamilPorul:
                    "கசக்கி மிதிக்கப்பட்டாலும் கடுமையான நஞ்சுப்பால் கக்காமல் உடலின் உள்வெப்பத்தைத் தணிக்கும் குளிர்ந்த மருந்தாகத் திகழும் நஞ்சற்ற தண்பூவான நெருஞ்சியைப் போல, அயலார் தகுதியற்ற தீங்கைத் தனக்கு ஆற்றினாலும் அவர் அடையும் துன்பத்திற்காக நெஞ்சுருகிப் பழிசெய்யும் பாவத்தைத் தவிர்க்க.",
                meaning:
                    "Even when crushed underfoot, Nerunji never secretes caustic venom; instead, its cool, soothing medicinal properties dissolve burning internal heat and stone-like affliction. Even when others inflict unmerited injury upon you, let your heart melt with compassion for the harm they bring upon themselves and refrain from unrighteous retaliation."
            },
            {
                kuralNumber: 158,
                line1: "வம்பால் கொடுமை இழைத்தாரைத் தாழ்மலர்போல்",
                line2: "செம்பண்பால் வாகை கொளல்.",
                tamilPorul:
                    "வீண் ஆணவத்தால் வம்புசெய்து கொடுமை இழைத்தோரைப் பதிலுக்குத் தாக்காமல், பாதையின் தரையில் பணிவாகத் தாழ்ந்து மலர்ந்தும் எதனாலும் அழியாது வெல்லும் தாழ்மலரான நெருஞ்சியைப் போல, தம்முடைய செம்மையான நற்பண்பாலேயே அமைதியாக வாகை கொள்க.",
                meaning:
                    "Refusing to wrestle tall, boastful weeds or snap against heavy boots, the low-lying golden Nerunji outlasts every disturbance through pure, grounded resilience. Overcome those who commit arrogant wrongs out of bloated pride not by matching their fury, but by winning serene triumph through your own noble composure."
            },
            {
                kuralNumber: 159,
                line1: "வீதிப்பூ ஒப்பக் கடுமொழி ஆற்றுவோர்",
                line2: "மாதவரின் மாசற்ற சீர்.",
                tamilPorul:
                    "புழுதியும் சேறும் நிறைந்த ஊர் வீதியோரத்தில் வளர்ந்தாலும் தன் நுண்தூவி இலைகளால் அழுக்குப் படியாமல் தூய பொன்நிறமாய்ப் பொலியும் வீதிப்பூவான நெருஞ்சியை ஒப்ப, நெறிதவறியோரின் கடுமொழிகளை அமைதியாக ஆற்றுவோர் காட்டில் தவம் புரியும் மாதவரைக் காட்டிலும் மாசற்ற சீருடையவர் ஆவர்.",
                meaning:
                    "Blooming along dusty, mud-splashed village thoroughfares yet shedding grit cleanly off its fine silky hairs to display unstained golden petals, the roadside flower stays purer amid traffic than a sheltered mountain bloom. Those who calmly bear the harsh, unrestrained words of others attain a spotless purity surpassing even secluded ascetics."
            },
            {
                kuralNumber: 160,
                line1: "பசித்தவம் கார்ப்பூப்போல் ஓம்புவோர் மேலோர்",
                line2: "கசப்புரை ஏற்பார் அடுத்து.",
                tamilPorul:
                    "மழையும் நீருமின்றி வறண்ட கோடை மாதங்களில் எல்லாம் உணவற்றுப் பொறுமையோடு காத்திருந்து, கார்மழை வந்தவுடனே புத்துயிர் பெற்றுப் பூக்கும் கார்ப்பூவான நெருஞ்சியைப் போலப் பசித்தவம் ஓம்புவோர் மேலானவர்களே; ஆயினும் அவர்கள் பிறர் கூறும் கசப்புரையை அமைதியாக ஏற்பவர்களுக்கு அடுத்த நிலையினரே ஆவர்.",
                meaning:
                    "Surviving rainless, sun-baked months in austere dormancy without moisture or nourishment until monsoon showers return, Nerunji embodies extraordinary biological fasting. Those who practice ascetic fasting without food are truly great—yet they rank second, right after those who patiently endure the bitter speech of others."
            }
        ]
    }








];