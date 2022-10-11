jQuery(function ($) {

    $(function(){
        $("#footer-module").load("footer.html");
    });

    <!-- mobile check -->
    var is_mobile = true;

    if( $('#isMobile').css('display')==='none') {
        is_mobile = false;
    }

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    var refreshCalendarDateSpacings = function(id) {
        if(!is_mobile){
            $(".calendar-day-container").css("margin-left", "0px");
            $(".calendar-day-container-wide").css("margin-left", "0px");
            $(id+":odd").css("margin-left", "24px");

            // $("calendar-day-container-wide").css("margin-left", "0px");
            setTimeout(function () {
                if ($(".calendar-day-container:visible").length % 2 == 1) {
                    // console.log($(".calendar-day-container:visible").length);
                    var rrand = Math.floor(Math.random() * 10);
                    $(".calendar-day-container").last().css("margin-left", "0px");
                    // console.log($(".calendar-day-container").last());
                    // console.log(rrand);
                }
            }, 300);
        }
    }

    refreshCalendarDateSpacings(".calendar-day-container");

    var filterCalendar = function(id) {
        // console.log(id);
        var delay = 250;
        $(".performance, .artist-talks, .workshops, .festival").hide(delay, 'swing', function () {

            if ($(".performance:visible").length === 0 &&
                $(".artist-talks:visible").length === 0 &&
                $(".workshops:visible").length === 0) {
                if (id === 'festival') {
                    refreshCalendarDateSpacings(".calendar-day-container");
                    $(".performance").show(delay, 'swing');
                    $(".artist-talks").show(delay, 'swing');
                    $(".workshops").show(delay, 'swing');
                    $(".festival").show(delay, 'swing');

                } else if (id === 'performance') {
                    refreshCalendarDateSpacings(".performance");
                    $(".performance").show(delay, 'swing');
                } else if (id === 'artist-talks') {
                    refreshCalendarDateSpacings(".artist-talks");
                    $(".artist-talks").show(delay, 'swing');
                } else if (id === 'workshops') {
                    refreshCalendarDateSpacings(".workshops");
                    $(".workshops").show(delay, 'swing');
                }

            }

        });


        // setTimeout(refreshCalendarDateSpacings(".artist-talks"), 2000);

    }

    if(getCookie("lang").length == 0){
        document.cookie = "lang=ro";
    }

    $(function() {

        // translations
        // The active locale
        let locale = getCookie("lang");
        if(locale === "ro") {
            $("#lang-en").removeClass("active");
            $("#lang-ro").addClass("active");
        } else {
            $("#lang-ro").removeClass("active");
            $("#lang-en").addClass("active");
        }

        const translations = {
            // English translations
            "en": {
                "starts": "starts",
                "start-date": "november 22",
                "ends": "ends",
                "end-date": "december 17",
                "open-info": "The exhibition is open Tuesday to Friday 16:00 - 21:00 and on Saturday 11:00 - 21:00",
                "festival": "Festival",
                "expo": "Expo",
                "performance": "Performance",
                "artist-talks": "Talks",
                "nova-talks": "Nova Talks",
                "artist-talk": "Talk",
                "workshops": "Edu",
                "workshop": "Edu",
                "nov": "nov",
                "dec": "dec",
                "installation": "installation",
                "interactive-installation": "multi-channel video installation",
                "interactive-installation-peep": "interactive installation peep media",
                "video-installation-multi-channel": "multi-channel video installation",
                "video-installation": "video installation",
                "interactive-video-installation": "interactive video installation",
                "ar-installation": "interactive AR installation",
                "vr-installation": "interactive VR installation",
                "prev-ed": "previous editions",
                "concept-text-1": "Created as a connecting experience, this year's exhibition literally and figuratively embraces you and creates a context where you discover different dimensions of intimacy. You can explore them in a profound or light way, depending on how open you are to the experience. \n" +
                    "<br/><br/>" +
                    "We propose an immersive path, constantly moving and transforming, that responds to your presence in surprising ways.\n" +
                    "<br/><br/>" +
                    "We start from 11 individual works and create connections between them so that the experience of the exhibition takes you on a journey of becoming, from one work to another, from you to them and vice versa, each element influencing the whole.\n" +
                    "<br/><br/>" +
                    "We can't wait to see how you set this living space into motion!\n" +
                    "<br/><br/>" +
                    "The experience of the exhibition is built within a creative lab held in the months leading up to the festival. This year, 22 artists from 13 countries are involved in this process. They benefit from the support of several specialists in psychology, neuroscience and anthropology. \n",
                "expo-opening": "Exhibition opening",
                "expo-closing": "Exhibition closing",
                "festival": "Festival",
                "space-and-spatiality": "Space and spatiality in art installations // IULIA GHERGHESCU",
                "intro-to-metaverse": "Intro to Metaverse: 360/VR Filmmaking // MARIUS HODEA",
                "intro-to-metaverse-2": "Intro to Metaverse: from real to digital objects // MARIUS HODEA",
                "sound-design": "Sound design for imaginary worlds // ȘTEFAN DAMIAN",
                "style-gan": "Real-time interaction with StyleGAN // GRIGORE BURLOIU",
                "deep-learning": "Using Deep Learning to generate dialogue text // GRIGORE BURLOIU",
                "a-project": "A project by",
                "presented-by": "Presented by",
                "with-support-of": "With the support of",
                "sponsors": "Partners",
                "our-sponsors": "Our partners",
                "media-partners": "Our media partners",
                "text-main-headline-seeing-double": "'Two sets of eyes take in the same scene. The same light passes through two apertures that see completely different things. One is biological, the other is mechanical.'<br/><br/>",
                "text-main-seeing-double": "At the invitation of NOVA, internationally renowned multidisciplinary artist and researcher, Sougwen 愫君 Chung, visits Romania for the first time with a spectacular audio-visually enhanced      performance-lecture for the opening of the festival, exploring the intersection of art, science and engineering.\n" +
                    "<br/><br/>" +
                    "During the event, Sougwen demonstrates the poetics of human & non-human collaboration through considering the various modes of sensing and mark-making between the artist and machine, organic and synthetic, and improvisational and computational. This process has led to vast interdisciplinary insight, philosophical inquiry and technological system developments through a pioneering artistic practice. The performance-lecture speculates on the alternative futures for the relationships between humans and machines, questioning: where does “AI” end and “we” begin?\n" +
                    "<br/><br/>" +
                    "As an artist with an extensive background in drawing, creative coding and an expert in robotic systems, Sougwen has been developing a process of artistic co-creation with robotics taught to collaboratively      paint as equal partners. In its first iteration, the robotic system Drawing Operations Unit: Generation 1: MIMICRY, also known as D.O.U.G._1, imitated the gestures of the artist. The latest version, D.O.U.G._5 responds to Sougwen’s biofeedback through the use of an E.E.G headset while engaging in centering rituals like drawing and meditating – intertwining the gestural authorship of biological and mechanical subjects in space.\n" +
                    "<br/><br/>" +
                    "Through this innovative approach, Sougwen works together with robotics to push the limits of art and their own creativity through a process based on empathy, emotional connection and hybridity. Closely followed by a captivated audience, mesmerized by their movements, Souwgen's performances are uniquely fascinating and a provocation for thinking about the future of our interrelations with systems.     \n" +
                    "<br/><br/>" +
                    "The performance-lecture will be followed by a Q&A session.\n",
                "text-main-author-seeing-double": "<b>Sougwen 愫君 Chung</b> is a Chinese-Canadian artist and researcher, and is the founder and artistic director of Scilicet, a London-based studio exploring human & non-human collaboration. \n" +
                    "<br/><br/>" +
                    "A former research fellow at MIT’s Media Lab, Chung is considered a pioneer in the field of human-machine collaboration. Chung was selected as the Woman of the Year in Monaco for achievement in the Arts & Sciences and received the Lumen Prize for Art in Technology. Chung's work explores the mark-made-by-hand and the mark-made-by-machine as an approach to understanding the dynamics of humans and systems. \n" +
                    "<br/><br/>" +
                    "This speculative critical practice spans performance, installation, and drawings. They  have been featured in numerous exhibitions at museums and galleries around the world such as the Espoo Museum of Modern Art, Espoo; Vancouver Art Gallery, Vancouver; Art Basel, Miami; National Art Center, Tokyo; NTT InterCommunication Center [ICC], Tokyo, Japan; ArtScience Museum, Singapore; MIT Media Lab, Cambridge; The Drawing Center, New York; The New Museum, New York; Museum of Contemporary Art, Geneva; Mana Contemporary, New York, Tribeca Film Festival, New York; The Hospital Club, London; Mutek Festival, Montreal & Mexico City; Sonar Festival, Barcelona. \n",
                "when": "when",
                "where": "where",
                "excelsior": "Excelsior Theatre",
                "text-main-new-home-of-mind": "Imagine the following situation: a self-conscious robot has an existential crisis, after having its life purpose removed from its code. Together with those who interact with the installation, he tries to find his reason for being, through an artificial spiritual interface presented as a divine robot."+
                    "<br/><br/>" +
                    "In this edition of NOVA, the artist Mónica Rikić presents an adaptation of her work to the exhibition space in the festival, specifically created for this presentation in Romania.",
                "text-main-author-new-home-of-mind": "<b>Mónica Rikić</b> is a Spanish artist whose practice is focused on creative coding, robotics, electronics and non-digital objects used to create interactive projects often framed as experimental games."+
                    "<br/><br/>" +
                    "The Artist’s interest lies in the social impact of technology and explores, through art, a reimagination of the coexistence between humans and machines."+
                    "<br/><br/>" +
                    "Mónica has a Bachelor in Fine Arts and graduated from 2 master studies: Digital Arts (UPF) and Contemporary Philosophy (UOC). Currently, Phd Student at Network and Information Technologies doctoral program (UOC)."+
                    "<br/><br/>" +
                    "Her projects have been presented in several relevant contexts around the world (Ars Electronica, Creative Tech Week New York, Robotronica Australia, FILE Brazilia, Centre de Cultura Contemporània de Barcelona, Arts Santa Mónica) and awarded, among others, by the Catalan National Culture and Arts Council, Japan Media Arts Festival, AMAZE Berlin, Margaret Guthman Musical Instrument Competition in Atlanta.",
                "text-main-metamorphosis": "<i>metamorphosis</i> is a poetic meditation on the notions of transformation, impermanence and the entanglement of species. Creatures form and dissolve, elusive hybrids of plants, insects, human and non-human shapes. " +
                    "<br/><br/>" +
                    "Taking inspiration from literary works about metamorphosis, the installation proposes to consider the human as shifting rather than static, inviting towards a potential symbiosis with matter and other forms of life." +
                    "<br/><br/>" +
                    "Generated with machine learning algorithms, the piece contemplates the kind of transformations that lie ahead of us as artificial intelligence becomes vertiginously capable and reflects upon the paradigm shift that might result as we tumble down towards dematerialized models of knowledge and culture." +
                    "<br/><br/>",
                "text-main-author-metamorphosis" : "<b>Myriam Bleau</b> is a composer, digital artist and performer based in Montréal. Using music and sound as a point of departure, she articulates them with movement, creating audiovisual performances, video works, installations and interactive interfaces " +
                    "<br/><br/>" +
                    "She’s interested in the performative, both as a codified cultural manifestation, and as an embodied reenactment of symbolic systems through human and non-human agencies, including machine learning. Her hybrid practice explores porous spaces between the physical and the virtual world, between the natural and the synthetic. " +
                    "<br/><br/>" +
                    "Her work has been recognized and presented internationally, in festivals such as Prix Ars Electronica (AT), Sónar (ES, HK), Transmediale (DE), Sonic Arts Award (IT), Elektra (CA), Mutek (MX, CA, JP, AR), ISEA (CA, KR), ACT (KR), L.E.V et LABoral (ES), Scopitone (FR), Café Oto (UK)." +
                    "<br/><br/>",
                "text-main-acqua-alta": "A pop-up book whose drawings and paper volumes are the décor of a story, only visible in augmented reality.\n" +
                    "Looking through a tablet or a smartphone, the ten double-pages of the book Acqua Alta - Crossing the mirror become the stage for a short dance performance - thanks to a custom-made augmented reality application. In a simple graphic stroke in black and white, ink drawings and white folded paper come together to reveal the virtual life of dancing miniature beings and their dive into the imaginary realms of water. The experience is at the crossroads of  theater, dance, comic book, animated film  and “artsy” video game." +
                    "<br/><br/>" +
                    "Designed, produced and edited by Adrien M & Claire B, Acqua Alta tells the story of a woman, a man, a house. A daily routine, absurd and filled with discrepancies. But one wet rainy day, their life is turned upside down: the rising waters drown their home in an ink-coloured sea. The woman slips and disappears. Only her hair remains, and it is alive. It tells the tale of a disaster, unique and universal. It tells of losing and searching. It tells of the fear of the bizarre and otherness, and how to tame it." +
                    "<br/><br/>" +
                    "The work has received the Excellence Award in the Art division of the 2021 Japan Media Arts Festival, the special AR jury award at the 2021 New Images Festival in Paris and the Individual Award in the Interactive Experience category for the 2020 CITIC Press Lightening Selection." +
                    "<br/><br/>",
                "text-main-author-acqua-alta": "<b>The company Adrien M & Claire B</b> places its work in the field of digital arts since 2004.  Its creations are performances and exhibitions, that associate reality and virtuality. Its specificity is the custom-made development of its computing tools.  Among the artistic and technological stakes, the attention is focused on the human being and its body, by using contemporary tools in the service of a timeless poetry, developing and using a visual language based on game and pleasure as mediums of the imagination. Today, the company counts around 30 collaborators." +
                    "<br/><br/><br/>" +
                    "Full Credits" +
                    "<br/><br/>" +
                    "Concept and artistic direction: Claire Bardainne and Adrien Mondot<br/>" +
                    "Drawings and paper design: Claire Bardainne<br/>" +
                    "Computer design: Adrien Mondot<br/>" +
                    "Original music: Olivier Mellano<br/>" +
                    "Choreographic performance: Dimitri Hatton and Satchie Noro\<br/>" +
                    "Computer development: Rémi Engel<br/>" +
                    "Paper engineering: Eric Singelin<br/>" +
                    "Script doctor: Marietta Ren<br/>" +
                    "Administration: Marek Vuiton , assisted by Mathis Guyetand<br/>" +
                    "Technical direction: Raphaël Guénot<br/>" +
                    "Production and booking: Joanna Rieussec<br/>" +
                    "Production: Juli Allard-Schaefer, Margaux Fritsch and Delphine Teypaz<br/>" +
                    "Mediation and production: Johanna Guerreiro<br/>" +
                    "Production: Adrien M & Claire B<br/>" +
                    "Co-production: This book was produced by the company Adrien M & Claire B, and coproduced in France by LUX scène nationale de Valence, with help from the support fund [SCAN] Auvergne-Rhône-Alpes. It was subject to a fundraising campaign on Kickstarter.<br/>" +
                    "<br/>" +
                    "Published by Adrien M & Claire B - 54 quai Saint-Vincent - 69001 Lyon – France<br/>" +
                    "Legal deposit March 2022<br/>" +
                    "ISBN 978-2-9570029-2-4<br/>" +
                    "Manufactured and printed in March 2022 by Printing house Druka, Lithuania<br/>" +
                    "The Adrien M & Claire B Company is accredited by DRAC Auvergne-Rhône-Alpes, Auvergne-Rhône-Alpes Region and is supported by the City of Lyon.<br/>" +
                    "<br/>" +
                    "Photos © Adrien M & Claire B and © Romain Etienne - item<br/>",
                "text-main-wonderland": "The installation starts from the Alice in Wonderland syndrome, which describes a neurological condition, in which the real perception of one's own person, but also of the things that surround him is affected. The person's sensory experience does not faithfully reflect reality, so the person experiences a distortion in understanding his own presence in space, but also in time.<br/><br/>\n" +
                    "With the help of VR technology, the artists recreate the symptoms of this syndrome and thus play with the self-perception of the participants, creating various illusions about their body position and giving them the opportunity to observe themselves from the outside.<br/><br/>\n" +
                    "The natural view of the participants is replaced by the vision of a small robotic device that you move through an adventurous labyrinth structure, built within the space of the installation. Friends can join in the labyrinth and expand this mind-bending experience even more. For NOVA, the artists are developing a new version of this labyrinth.<br/><br/>\n" +
                    "A dizzying, but also very fun experience, built on solid scientific foundations.",
                "text-main-author-wonderland": "<a href=\"https://www.youtube.com/watch?v=cNYjQ_kAooE\">The project</a> was first presented at the Ars Electronica festival in Linz in 2019. It is developed by a multidisciplinary team, bringing together researchers and artists with a background in exploring hybrid art, creative coding and textile design.  \n" +
                    "\n" +
                    "More about the team members: <a href=\"http://masajazbec.si/bio/\">Maša Jazbec</a>, <a href=\"https://www.vanessav.net/bio/\">Vanessa Vozzo</a>, <a href=\"https://juergenropp.at/about/\">Jürgen Ropp</a>, <a href=\"https://novanova.ro/img/details/vr-in-wonderland/aleksandra-mitic-bio.pdf\">Aleksandra Mitic</a>, <a href=\"https://www.instagram.com/balintbudaibalint/\">Bàlint Budai</a>, <a href=\"http://martinnadal.eu/about/\">Martìn Nadal</a>. ",
                "text-main-intuition": "A sky of possibilities is also a cosmos of choices. How do we shape ourselves through what we choose? Is there a hidden pattern? <br/><br/>\n" +
                    "Intuition is a project about human decisions and subconscious behavior, exploring self-awareness and the attempt to find new solutions to know ourselves better in a meaningful way.<br/><br/>\n" +
                    "The overall experience of the users is based on an intimate exchange of interactions with a digital interface, where the mental flow of the artist is represented through numbers and sounds. The installation allows users to create individually, or in collaboration with others, their own audio-visual constellations of thoughts and feelings, starting from this deeply personal process of the artist. <br/><br/>\n" +
                    "\n" +
                    "Concept, design & graphics: Marius Jurca<br/>\n" +
                    "Coding of interactivity: Grigore Burloiu",
                "text-main-author-intuition": "Un cer de posibilități e totodată un cosmos de alegeri. Cum ne definim prin alegerile noastre? Există un tipar ascuns? <br/><br/>\n" +
                    "Intuition este un proiect despre decizii și comportament condus de inconștient, ce explorează prezența în sine și caută noi metode de autocunoaștere.<br/><br/>\n" +
                    "Experiența generală a utilizatorului se bazează pe un schimb de interacțiuni intime cu o interfață digitală, unde fluxul mental ale artistului este reprezentat prin numere și sunete. Instalația îți dă posibilitatea să creezi individual, sau în colaborare cu ceilalți, propriile tale constelații audio-vizuale de gânduri și emoții, pornind de la acest proces profund personal al artistului. <br/><br/>\n" +
                    "\n" +
                    "Concept, design & grafică: Marius Jurca<br/>\n" +
                    "Programare interactivitate: Grigore Burloiu",
                "text-main-rhiza": "Rhiza is an interspecies connector that invites you to become part of the communication between several oyster mushrooms and their mycelium. There is a continual exchange of biodata between these through electrical signals. Biosensors pick up the signals and translate them into vibrations on the circular floor-pads, also made of mycelium, that surround the tower in the installation. <br/><br/>\n" +
                    "Step with your bare feet on these floor-pads and enter this conversation. <br/><br/>\n" +
                    "The work is inspired by the wonderful interaction within mycorrhizal networks, this underground wood-wide-web that links plants and mushrooms through valuable connections that sustain survival and growth through the exchange of data and nutrient substances they allow. Similarly, Rhiza, meaning “roots”, invites you to integrate your own roots, your feet, in this nurturing network based on togetherness.",
                "text-main-author-rhiza": "<b>Noor Stenfert Kroese</b> is an interdisciplinary artist from Holland. Currently she is finishing her master’s study at the Interface Culture department of the Art and Design University in Linz, where she is also developing the activity of her studio through innovative collaborations.<br/><br/>\n" +
                    "Noor works across various media such as bio-art, theatre, and new media art. Her creations aim for an intertwinement between the work and the spectators in which new and existing ideas can be reflected on and explored. Her work does not provide a direct answer but seeks a space to ask questions and to experiment. From a posthuman perspective, she explores the possibilities of taking a conscious place in the moving, uncontrollable network we are part of.<br/><br/>\n" +
                    "Studio Stenfert Kroese’s work was exhibited and performed at venues and festivals such as the Barcelona Design week (ES), EYE Filmmuseum Amsterdam (NL) Dutch National Opera & Ballet (NL), and the Ars Electronica Festival (AT). Her works received awards from YouFab Global Awards (JP) and Prins Bernhard Young talent Award (NL).",
                "text-main-senrian": "In 1927 Sasaki’s grandparents left Japan and chose Peru as their new homeland. SenriAn is the name of the Japanese tea house they constructed in Lima. After their passing away, the tea house was dismantled. Since then, SenriAn remained this intangible place, only present in the family memories.<br/><br/>\n" +
                    "Through this Peep Media installation, Nomi explores the possibilities to reconstruct a subjective space with the help of an AI. Within a black box, the artist recreates the phenomenon of reminiscence by displaying AI-generated images from a dataset composed of the artist’s Chinese ink paintings and family photographs from her childhood. <br/><br/>\n" +
                    "The images are shown only when two spectators peep together, referring to the mutable nature of memories, reviving with each transmission.",
                "text-main-author-senrian": "<b>Nomi Sasaki Otani</b> is a Peruvian Japanese visual artist. As a Ph.D. candidate at the University of Art and Design Linz, in collaboration with the Zurich University of the Arts, her artistic research focuses on interactive art related to personal data processing and children's rights in the digital realm. She holds a bachelor's degree in Communication Sciences from Lima University and a master of Arts degree from the Interface Cultures department of the University of Art and Design Linz. <br/><br/>\n" +
                    "Sasaki is devoted to Chinese black ink tradition and animation. Her artwork explores scale and dimension, the material nature of water, the behavior of light, and how these elements can create new landscapes and atmospheres for multidisciplinary performances. Her recent work focuses on micro realities and peep media. Sasaki has worked as a producer and cultural manager for more than ten years, and she pursued studies at the Purple Cloud Calligraphy Association 紫雲 in Tokyo.",
                "text-main-after-ego": "Empathy as a process requires you to look past yourself in order to begin feeling others. Only by leaving the ego behind you can turn your attention to someone else. Regardless, your perception will always be influenced by who you are, your experiences and personality, the environment that defined you. If you open up, with patience, morphosis will happen between you and the person who’s the target of your empathy. <br/><br/>\n" +
                    "The installation is an interactive experience through which the image of the visitor transforms into the image of a stranger, as one invests time in the empathic process.",
                "text-main-author-after-ego": "<b>RIZI</b> is a cross-media design studio founded in 2013, operating at the intersection between architecture, visual communication and technology. The studio's projects target both physical and virtual space, focusing on human experience on all levels: rational, emotional, sensorial.\n" +
                    "RIZI’s mission centers on creating connections between people and data through various media. The delivery of the messages is facilitated by a calibrated choice of the medium used for each project, ranging from graphics to object design, interior spaces, digital platforms, installations or exhibitions.",
                "text-main-anima": "In trying to lean mentally on the concept of the soul, as well as get emotionally closer to another, we often have the feeling that we are facing an abyss. Does this conceptual impossibility or emotional incapacity really reflect an absence?<br/><br/>\n" +
                    "The souls of others remain invisible to us; we can only make assumptions about them - maybe correct, maybe false. As for our own soul, we search for it, name it, protect it as sometimes it breaks, sometimes rejoices,  warmly sitting close to our heart. Can we really believe it’s not there?<br/><br/>\n" +
                    "”Anima” installation started from some of these questions and ideas. It is about an invisible universe brought to light, a materialized possibility to see (ourselves) from within, from the darkness of the galaxy to the light within us and from the initial darkness to the final one, between which, however, (a) life pulsates.",
                "text-main-author-anima": "<b>Denis Simion</b> is a sculptor whose second name could just as well be \"heart\". Over time she has developed a true love language with the shape of the anatomical heart, which has become the leitmotif of her creations in the last 7 years.<br/><br/>\n" +
                    "She defines herself as an artist of the souls, as she has always wanted to capture in her art the immaterial feelings, first her own and then those of the beings around her.",
                "text-main-wimp": "In 2019, on the second floor of a block in a Bucharest neighborhood, a summer storm sparks the artist's imagination and becomes the catalyst for writing unknown stories. Imagining that the walnut branches knocking on the window are telling him stories from long ago, some more peaceful, some more violent, the artist aims to graphically encapsulate these messages from afar. With the help of the walnut armed with a liner that draws on a sheet of paper, in a rhythm dictated by the weather, Claudiu manages to record a series of stories, which leave room for the viewers' imagination to build plots and characters that cross time and space. During the pandemic, Claudiu continued to imagine and collect over 40 stories drawn at his window.",
                "text-main-author-wimp": "Alexandru Claudiu Maxim is a visual artist, video editor, member of the artistic group Pastila Roz and manager of The Art Machine. ",
                "text-main-ear-to-ear": "How open are you to sharing your deepest secret with strangers? Through this participatory installation, Anaïs invites people to anonymously confess their secrets, which she records and plays back to the general public through ceramic ears. In this way, the artist collected many stories from all over the world, which she will reveal at NOVA together with those collected from Romania.<br/><br/>\n" +
                    "In approaching with sensitivity this intimate space of a shared confession, Anaïs blends in her work the use of old and novel technologies. The project is aligned with the artist’s recent research efforts that explore the relationship between identity and numeric environments.",
                "text-main-author-ear-to-ear": "<b>Anaïs Lossouarn</b> is a young French artist working with mecatronics.<br/><br/>\n" +
                    "The question central to her work concerns human dependency on technologies. She explores and finds inspiration in the intimate links that we maintain with digital machines, building works that combine humor and absurdity through the juxtaposition of old and new media. Subjects that excite her curiosity include obsolescence, hacking and artificial life. <br/><br/>\n" +
                    "Using her skills in mechatronics, her recent works explore the unexpected animation of objects through different techniques. This detournement or re-appropriation that employs the use of sound, movement and visual elements, endows these ordinary objects with a certain poetry as they behave in unexpected ways.<br/><br/>\n" +
                    "She holds a BA from the Ecole supérieure d’Art d’Aix-en-Provence and is currently engaged in a masters degree with a specialization in \"Real time Art\".",

            },

            // Arabic translations
            "ro": {
                "starts": "începe pe",
                "start-date": "22 noiembrie",
                "ends": "se încheie pe",
                "end-date": "17 decembrie",
                "open-info": "Expoziția este deschisă de marți până vineri 16:00 - 21:00 și sâmbătă 11:00 - 21:00",
                "festival": "Festival",
                "expo": "Expo",
                "performance": "Performance",
                "artist-talks": "Talks",
                "nova-talks": "Nova talks",
                "artist-talk": "Talk",
                "workshops": "Edu",
                "workshop": "Edu",
                "nov": "nov",
                "dec": "dec",
                "installation": "instalație",
                "interactive-installation": "instalație interactivă",
                "interactive-installation-peep": " instalație interactivă peep media",
                "video-installation-multi-channel": "instalație video multi-channel",
                "video-installation": "instalație video",
                "interactive-video-installation": "instalație video interactivă",
                "ar-installation": "instalație interactivă AR",
                "vr-installation": "instalație interactivă VR",
                "prev-ed": "ediții anterioare",
                "concept-text-1": "Construită ca o experiență de conectare, expoziția de anul acesta te ia în brațe la propriu și la figurat și îți creează un context în care descoperi diferite dimensiuni ale intimității. Le poți explora mai profund sau mai domol, în funcție de deschiderea ta către acest proces. \n" +
                    "<br/><br/>" +
                    "Îți propunem un traseu imersiv, în continuă mișcare și transformare, care răspunde la prezența ta în feluri surprinzătoare. \n" +
                    "<br/><br/>" +
                    "Pornim de la 11 lucrări pilon și creăm legături între acestea astfel încât traseul expoziției să te poarte printr-o suită de deveniri, de la o lucrare la alta, de la tine la ele și viceversa, fiecare element influențând întregul. \n" +
                    "<br/><br/>" +
                    "Abia așteptăm să vedem ritmurile specifice în care vei pune în mișcare acest spațiu viu!\n" +
                    "<br/><br/>" +
                    "Experiența expoziției este construită în cadrul unui laborator creativ desfășurat în lunile premergătoare festivalului. Anul acesta sunt implicați 22 de artiști din 13 țări în acest proces. Aceștia beneficiază de sprijinul câtorva specialiști în psihologie, neuroștiință și antropologie.\n" +
                    "<br/><br/>",
                "expo-opening": "Vernisaj expoziție",
                "expo-closing": "Finisaj expoziție",
                "space-and-spatiality": "Spațiu și spațialitate în creația instalațiilor artistice // IULIA GHERGHESCU",
                "intro-to-metaverse": "Intro to Metaverse: 360/VR Filmmaking // MARIUS HODEA",
                "intro-to-metaverse-2": "Intro to Metaverse: from real to digital objects // MARIUS HODEA",
                "sound-design": "Sound design pentru lumi imaginate // ȘTEFAN DAMIAN",
                "style-gan": "Interacțiune cu StyleGAN în timp real // GRIGORE BURLOIU",
                "deep-learning": "Folosirea Deep Learning pentru generare de text dialog // GRIGORE BURLOIU",
                "a-project": "Un proiect de",
                "presented-by": "Prezentat de",
                "with-support-of": "Cu sprijinul",
                "sponsors": "Parteneri",
                "our-sponsors": "Partenerii noștri",
                "media-partners": "Parteneri media",
                "text-main-headline-seeing-double": "„Două perechi de ochi privesc aceeași scenă. Aceeași lumină trece prin două deschideri care văd lucruri complet diferite. Unul este biologic, celălalt este mecanic.”<br/><br/>",
                "text-main-seeing-double": "La invitația NOVA, artista multidisciplinară și cercetătoarea de renume internațional, <b>Sougwen 愫君 Chung</b>, vine pentru prima dată în România și susține în deschiderea festivalului un performance-lecture spectaculos, îmbogățit de un conținut audio-video puternic, care explorează intersecția dintre artă, știință și inginerie." +
                    "<br/><br/>" +
                    "În timpul evenimentului, Sougwen demonstrează poetica colaborării umane și non-umane prin explorarea diferitelor moduri de percepție și de desenare între artist și mașină, organic și sintetic, improvizațional și computațional. Procesul a condus la o vastă perspectivă interdisciplinară, cercetare filozofică și dezvoltări ale sistemului tehnologic printr-o practică artistică de pionierat. Acest performance-lecture speculează viitorul alternativ al relațiilor dintre oameni și mașini, adresând întrebarea: unde se termină „AI” și unde începe „noi”?"+
                    "<br/><br/>" +
                    "Artistă cu o experiență extinsă în desen, programare creativă și expertă în sisteme robotice, Sougwen a dezvoltat un proces de co-creare artistică în colaborare cu roboți învățați să picteze alături de ea, ca parteneri egali. În prima sa versiune, sistemul robotic Drawing Operations Unit: Generation 1: MIMICRY, cunoscut și sub numele de D.O.U.G._1, imita gesturile artistei. Cea mai recentă versiune, D.O.U.G._5 răspunde biofeedback-ului lui Sougwen prin utilizarea unei căști E.E.G în timpul unor ritualuri de centrare precum desenul și meditația – împletind autoritatea gestuală a subiecților biologici și mecanici din spațiu."+
                    "<br/><br/>" +
                    "În abordarea ei inovatoare, Sougwen lucrează împreună cu roboții pentru a împinge limitele artei și ale propriei creativități, printr-un proces bazat pe empatie, conectare emoțională și hibriditate. Umărite îndeaproape de o audiență captivă, hipnotizată de mișcările sale și ale roboților, performance-urile lui Souwgen sunt deopotrivă fascinante și provocatoare, invitându-ne să reflectăm asupra viitorului interrelațiilor noastre cu sistemele."+
                    "<br/><br/>" +
                    "Evenimentul  va fi urmat de o sesiune de Q&A.",
                "text-main-author-seeing-double": "<b>Sougwen 愫君 Chung</b> este o artistă și cercetătoare de origine chineză-canadiană și este fondatoarea și directoarea artistică a Scilicet, un studio din Londra care explorează colaborarea umană și non-umană."+
                    "<br/><br/>" +
                    "Fostă cercetătoare la Media Lab al MIT, Chung este considerată un pionier în domeniul colaborării om-mașină. Chung a fost selectată drept Femeia Anului în Monaco pentru realizările în Arte și Științe și a primit Premiul Lumen pentru Artă în Tehnologie. Lucrările lui Chung explorează desenele realizate manual și desenele realizate de mașină printr-o abordare care duce la înțelegerea dinamicii dintre oameni și sisteme." +
                    "<br/><br/>" +
                    "Această practică critică speculativă include performance-uri, instalații și lucrări grafice. Acestea au fost prezentate în numeroase expoziții la muzee și galerii din întreaga lume, cum ar fi Espoo Museum of Modern Art, Espoo; Vancouver Art Gallery, Vancouver; Art Basel, Miami; National Art Center, Tokyo; NTT InterCommunication Center [ICC], Tokyo, Japan; ArtScience Museum, Singapore; MIT Media Lab, Cambridge; The Drawing Center, New York; The New Museum, New York; Museum of Contemporary Art, Geneva; Mana Contemporary, New York, Tribeca Film Festival, New York; The Hospital Club, London; Mutek Festival, Montreal & Mexico City; Sonar Festival, Barcelona.",
                "when": "când",
                "where": "unde",
                "excelsior": "Teatrul Excelsior",
                "text-main-headline-new-home-of-mind": "",
                "text-main-new-home-of-mind": "Imaginează-ți următoarea situație: un robot conștient de sine are o criză existențială, după ce i-a fost îndepărtat din cod motivul de a trăi. Împreună cu cei care interacționează cu instalația, el încearcă să-și regăsească rațiunea de a fi, într-o căutare care aduce în discuție spiritualitatea în lumea inteligenței artificiale." +
                    "<br/><br/>" +
                    "În cadrul ediției NOVA din acest an, artista Mónica Rikić prezintă o adaptare a lucrării sale la spațiul expozițional din festival, specific creată pentru această prezentare în România.",
                "text-main-author-new-home-of-mind": "<b>Mónica Rikić</b> este o artistă de origine spaniolă a cărei practică este concentrată în jurul programării creative, roboticii, electronicii și a obiectelor non-digitale, folosite pentru a crea proiecte interactive adesea considerate jocuri experimentale." +
                    "<br/><br/>" +
                    "Interesul artistei merge în direcția impactului social al tehnologiei și al reimaginării relației om-mașină prin artă." +
                    "<br/><br/>" +
                    "Mónica este licențiată în Arte Plastice și a absolvit două masterate: Arte Digitale (UPF) și Filosofie Contemporană (UOC). Doctorand în programul doctoral Rețele și Tehnologii Informaționale (UOC)." +
                    "<br/><br/>" +
                    "Proiectele sale au fost prezentate în numeroase contexte relevante în jurul lumii (Ars Electronica, Creative Tech Week New York, Robotronica Australia, FILE Brazilia, Centre de Cultura Contemporània de Barcelona, Arts Santa Mónica) și premiate, printre altele, de Consiliul Național de Cultură și Arte al Cataloniei, Japan Media Arts Festival, AMAZE Berlin, Margaret Guthman Musical Instrument Competition în Atlanta.",
                "text-main-headline-new-home-of-mind": "",
                "text-main-metamorphosis": "<i>metamorphosis</i> deschide o meditație plină de poezie despre transformare, efemeritate și amestecul speciilor. Creaturi misterioase se construiesc și se dizolvă în acest spațiu de devenire, dând naștere la forme hibride alunecoase, care leagă plante, insecte, oameni și obiecte. " +
                    "<br/><br/>" +
                    "Inspirată din lucrări literare despre metamorfoză, instalația propune o perspectiva dinamică asupra omului, în posibilele sale simbioze cu materia și alte forme de viață. " +
                    "<br/><br/>" +
                    "Lucrarea este generată folosind algoritmi de machine learning și astfel, prin procesul de creație, alătură acestei reflecții asupra transformării și schimbările aduse de evoluția vertiginoasă a sistemelor de inteligență artificială. În această nouă paradigmă, ne îndreptăm împreună spre modele din ce în ce mai dematerializate de cunoaștere și cultură." +
                    "<br/><br/>",
                "text-main-author-metamorphosis" : "<b>Myriam Bleau</b> este compozitoare, artist digital și performer din Montréal. Folosind lumina și sunetul ca punct de plecare, Myriam le articulează împreună cu mișcarea în performance-uri audio-vizuale, lucrări video, instalații și interfețe interactive. " +
                    "<br/><br/>" +
                    "Artista este interesată de latura performativă atât ca o formă codificată de manifestare culturală, cât și ca o reconstituire în propriul corp a unor sisteme simbol, care aduc împreună entități umane și non-umane, inclusiv machine learning. Practica sa hibridă explorează spații poroase dintre lumea fizică și cea virtuală, dintre natural și sintetic. " +
                    "<br/><br/>" +
                    "Lucrările artistei au fost recunoscute și prezentate la nivel internațional, in contexte ca Prix Ars Electronica (AT), Sónar (ES, HK), Transmediale (DE), Sonic Arts Award (IT), Elektra (CA), Mutek (MX, CA, JP, AR), ISEA (CA, KR), ACT (KR), L.E.V et LABoral (ES), Scopitone (FR), Café Oto (UK)." +
                    "<br/><br/>",
                "text-main-acqua-alta": "O carte pop-up, ale cărei desene și modelaje din hârtie devin decorul unei povești înduioșătoare, vizibilă numai în realitate augmentată prin aplicația custom made dezvoltată de studioul francez. În cele 10 pagini duble ale sale, ești purtat într-un univers la intersecția dintre teatru, dans, benzi desenate, film de animație și joc video artistic." +
                    "<br/><br/>" +
                    "Ilustrat, produs și editat de Adrien M & Claire B, cartea spune povestea unui bărbat, a unei femei și rutina lor de zi cu zi, întreruptă dramatic de o ploaie puternică, când femeia dispare. În urma ei rămâne numai părul și acesta prinde viață. Ne scufundăm în tărâmurile imaginare ale apei. " +
                    "<br/><br/>" +
                    "Acqua Alta vorbește despre unicitatea și totodată universalitatea dezastrului, despre pierdere și căutare, despre teama de necunoscut și de celălalt și cum o putem depăși.   " +
                    "<br/><br/>" +
                    "Lucrarea a primit premiul de excelență la Japan Media Arts Festival din 2021, premiul special al juriului la secțiunea AR din 2021 a New Images Festival din Paris și premiul individual în categoria “experiență interactivă” la ediția 2020 a CITIC Press Lightening Selection." +
                    "<br/><br/>",
                "text-main-author-acqua-alta": "Înființată în 2004, <b>compania Adrien M & Claire B</b> numără astăzi aproximativ 30 de colaboratori și este unul din colectivele artistice emblematice ale Franței. Creațiile companiei sunt performance-uri și expoziții care aduc împreună realitatea și virtualitatea, punând accent pe om și experiența sa corporală și dezvoltând in-house instrumente computaționale și construcții tehnologice care permit explorarea sa poetică și senzorială într-un mod inovator." +
                    "<br/><br/><br/>" +
                    "Concept și direcție artistică: Claire Bardainne și Adrien Mondot" +
                    "<br/>" +
                    "Desene și design modelaje hârtie: Claire Bardainne" +
                    "<br/>" +
                    "Design computațional: Adrien Mondot" +
                    "<br/>" +
                    "Muzică originală: Olivier Mellano" +
                    "<br/>" +
                    "Performance-uri coregrafiate: Dimitri Hatton și Satchie Noro" +
                    "<br/>" +
                    "Dezvoltare computațională: Rémi Engel" +
                    "<br/>" +
                    "Inginerie hârtie: Eric Singelin" +
                    "<br/>" +
                    "Script doctor: Marietta Ren" +
                    "<br/>" +
                    "Administrare: Marek Vuiton , asistat de Mathis Guyetand" +
                    "<br/>" +
                    "Regizor tehnic: Raphaël Guénot" +
                    "<br/>" +
                    "Producție și booking: Joanna Rieussec" +
                    "<br/>" +
                    "Producție: Juli Allard-Schaefer, Margaux Fritsch și Delphine Teypaz" +
                    "<br/>" +
                    "Mediatizare și producție: Johanna Guerreiro" +
                    "<br/>" +
                    "Producător: Adrien M & Claire B" +
                    "<br/>" +
                    "Co-producători: " +
                    "<br/>" +
                    "Această carte a fost produsă de compania Adrien M & Claire B, și co-produsă în Franța de LUX scène nationale de Valence, cu ajutorul liniei de finanțare [SCAN] Auvergne-Rhône-Alpes. Dezvoltarea sa a fost de asemenea susținută printr-o campanie pe platforma Kickstarter." +
                    "<br/>" +
                    "Publicată de Adrien M & Claire B - 54 quai Saint-Vincent - 69001 Lyon – France" +
                    "<br/>" +
                    "Depozit legal martie 2022" +
                    "<br/>" +
                    "ISBN 978-2-9570029-2-4" +
                    "<br/>" +
                    "Manufacturată și printată în martie 2022 de tipografia Druka, Lithuania" +
                    "<br/>" +
                    "Compania Adrien M & Claire B este acreditată de DRAC Auvergne-Rhône-Alpes, Regiunea Auvergne-Rhône-Alpes și susținută de municipalitatea Lyon." +
                    "<br/>" +
                    "Fotografii © Adrien M & Claire B și © Romain Etienne \n",
                "text-main-wonderland": "Instalația pornește de la sindromul Alice în Țara Minunilor, care descrie o situație neurologică, în care este afectată percepția reală a propriei persoane, dar și a lucrurilor care te înconjoară. Experiența senzorială a persoanei nu reflectă fidel realitatea, astfel că aceasta experimentează o distorsiune în înțelegerea propriei prezențe în spațiu, dar și în timp.<br/><br/>\n" +
                    "Cu ajutorul tehnologiei VR, artiștii recreează simptomele acestui sindrom și se joacă, astfel, cu percepția de sine a participanților, creând diverse iluzii despre poziția corpului lor și dându-le posibilitatea să se observe din exterior. <br/><br/>\n" +
                    "Privirea participanților este înlocuită cu cea a unui mic device robotic, care explorează un spațiu-labirint, parte din instalație. Pentru NOVA, artiștii dezvoltă o variantă nouă a acestui labirint.\n" +
                    "O experiență năucitoare, dar și foarte fun, construită pe baze științifice solide. <br/><br/>",
                "text-main-author-wonderland": "<a href=\"https://www.youtube.com/watch?v=cNYjQ_kAooE\">Proiectul</a> a fost inaugurat la festivalul Ars Electronica din Linz, în 2019. Este dezvoltat de o echipă multidisciplinară, care aduce la un loc cercetători și artiști cu experiență în explorarea artei hibride, programare creativă și design textil. <br/><br/>\n" +
                    "Mai multe despre membrii echipei: <a href=\"http://masajazbec.si/bio/\">Maša Jazbec</a>, <a href=\"https://www.vanessav.net/bio/\">Vanessa Vozzo</a>, <a href=\"https://juergenropp.at/about/\">Jürgen Ropp</a>, <a href=\"https://novanova.ro/img/details/vr-in-wonderland/aleksandra-mitic-bio.pdf\">Aleksandra Mitic</a>, <a href=\"https://www.instagram.com/balintbudaibalint/\">Bàlint Budai</a>, <a href=\"http://martinnadal.eu/about/\">Martìn Nadal</a>. ",
                "text-main-intuition": "<b>13m10j (Marius Jurca)</b> is a multidisciplinary artist, interested in the connections between art, science and technology. He uses numbers, sounds and algorithms to explore the complexity and aesthetics of his own mental flow. Most of his projects are interactive programs or apps, created in relation to the devices on which they are presented.<br/><br/>\n" +
                    "During his artistic activity, Marius received a number of awards and scholarships and participated in many artistic residencies, national and international group exhibitions, festivals and biennials.\n",
                "text-main-author-intuition": "<b>13m10j (Marius Jurca)</b> este un artist multidisciplinar, preocupat de conexiunile dintre artă, știință și tehnologie. Folosește numere, sunete și algoritmi pentru a explora complexitatea și estetica fluxului mental personal. Proiectele sale sunt programe sau aplicații interactive, create în relație cu dispozitivele pe care acestea sunt prezentate.<br/><br/>\n" +
                    "În decursul activității sale artistice, a obținut o serie premii și burse și a participat în numeroase rezidențe artistice, expoziții de grup, festivaluri și bienale de artă desfășurate la nivel național și internațional.",
                "text-main-rhiza": "Rhiza este un conector între specii care te invită să devii parte din comunicarea între ciupercile pleurotus roz ce cresc în instalație și miceliul lor. Există un schimb constant de biodate între aceștia care este preluat de senzori și transformat în vibrații pe platformele circulare care înconjoară turnul din Rhiza. <br/><br/>\n" +
                    "Pășește pe ele cu tălpile goale și intră în conversație. <br/><br/>\n" +
                    "Lucrarea este inspirată din interacțiunea minunată prezentă în rețelele micorizale, acest wood-wide-web subteran care leagă plantele și ciupercile prin conexiuni valoroase care le ajută pe acestea să supraviețuiască și să crească, susținând schimbul de informații și substanțe nutriente. La fel, Rhiza, termen care se traduce prin “rădăcini”, îți propune să îți integrezi propriile rădăcini, tălpile, în această rețea hrănitoare bazată pe împreună.",
                "text-main-author-rhiza": "<b>Noor Stenfert Kroese</b> este artist interdisciplinar de origine olandeză. În prezent își finalizează studiul masteral la Universitatea de Artă și Design din Linz, departamentul Interface Cultures, unde își și dezvoltă activitatea studioului său de creație prin colaborări inedite. <br/><br/>\n" +
                    "Noor lucrează în diverse medii, cum ar fi arta biologică, teatrul și arta new media. Creațiile sale urmăresc conectarea și integrarea publicului în operă. Interacțiunea între oameni și entități non-umane este un subiect central în munca sa. Instrumentele pe care artista le folosește, dar și maniera sa de lucru arată un interes pentru împletirea perspectivelor noi cu cele vechi și astfel, lucrările artistei nu oferă un răspuns, ci caută mai degrabă spațiul pentru a pune întrebări și a experimenta. Dintr-o perspectivă postumană, ea explorează posibilitățile de a ocupa un loc conștient în rețeaua în mișcare și incontrolabilă din care facem parte.<br/><br/>\n" +
                    "Lucrările Studioului Stenfert Kroese au fost expuse și interpretate în locații și festivaluri precum Barcelona Design week (ES), EYE Filmmuseum Amsterdam (NL), Dutch National Opera & Ballet (NL) și Festivalul Ars Electronica (AT). Lucrările ei au primit premii de la YouFab Global Awards (JP) și Prins Bernhard Young talent Award (NL).",
                "text-main-senrian": "În 1927 bunicii lui Nomi părăseau Japonia și se așezau în Peru. SenriAn este numele ceainăriei japoneze pe care aceștia au construit-o în Lima. După moartea lor, ceainăria a fost demolată. De atunci, SenriAn a rămas acest loc intangibil, prezent numai în amintirile familiei.<br/><br/> \n" +
                    "Prin această lucrare Peep Media, Nomi explorează posibilitatea de a reconstrui acest spațiu special din trecutul său cu ajutorul inteligenței artificiale. Artista pornește de la un dataset personal care înglobează fotografii de familie și picturile sale cu cerneală. <br/><br/> \n" +
                    "Când doi privitori se uită împreună prin vizoarele instalației, li se dezvăluie aceste noi reprezentări ale ceainăriei. La fel ca natura amintirilor în sine, ele sunt continuu transformate cu fiecare rememorare și se modelează după contextul în care sunt evocate. ",
                "text-main-author-senrian": "<b>Nomi Sasaki Otani</b> este o artistă vizuală cu origini japoneze și peruane. Doctorandă la Universitatea de Artă și Design Linz, în colaborare cu Universitatea de Arte din Zurich, cercetarea ei artistică se concentrează pe arta interactivă privind prelucrarea datelor cu caracter personal și drepturile copiilor în domeniul digital. Ea deține o diplomă de licență în Științe ale Comunicării de la Universitatea din Lima și un masterat la departamentul Interface Cultures al Universității de Artă și Design din Linz.<br/><br/> \n" +
                    "Sasaki este dedicat tradiției și animației cu cerneală neagră chinezească. Opera ei de artă explorează scara și dimensiunea, natura materială a apei, comportamentul luminii și modul în care aceste elemente pot crea noi peisaje și atmosfere pentru spectacole multidisciplinare. Lucrările ei recente se concentrează pe micro-realități și peep media. Sasaki a lucrat ca producător și manager cultural de mai bine de zece ani și a urmat studiile la Purple Cloud Calligraphy Association 紫雲 din Tokyo.",
                "text-main-after-ego": "Empatia este un proces care te duce dincolo de tine pentru a îi simții pe ceilalți. Numai depășind ego-ul ne putem întoarce atenția autentic către altcineva și să observăm conexiunea profundă pe care o împărtășim.<br/><br/>\n" +
                    "Personalitatea, experiențele și mediul care ne-au format influențează cât de empatici putem fi. Cu deschidere și răbdare, morfoza ta cu subiectul către care te îndrepți cu empatie se întâmplă. <br/><br/>\n" +
                    "Această instalație oferă o experiență interactivă în care imaginea vizitatorului se contopește treptat cu portretul unui străin, în funcție de timpul investit în acest proces empatic. ",
                "text-main-author-after-ego": "<b>RIZI</b> este un studio de design cross-media fondat în 2013, care activează la intersecția dintre arhitectură, comunicare vizuală și tehnologie. Proiectele studioului vizează atât spațiul fizic, cât si pe cel virtual, având ca focus experiența umană pe toate palierele: rațională, emoțională, senzorială. <br/><br/>\n" +
                    "Misiunea RIZI este axată pe crearea de conexiuni, prin intermediul mediilor diverse, între oameni și informație. Transpunerea mesajelor este facilitată de designul calibrat pe mediul cel mai potrivit în funcție de proiect, variind de la grafică la obiecte de design sau spații interioare, platforme digitale, instalații sau expoziții.",
                "text-main-anima": "În încercarea de a te apleca mental asupra conceptului de suflet precum și de a te apropia emoțional de un altul, avem de multe ori senzația că ne aflăm în fața unui abis. Reflectă oare această imposibilitate conceptuală ori incapacitate emoțională cu adevărat o absență?<br/><br/> Sufletele celorlalți ne rămân invizibile, asupra lor nu putem face decât presupuneri - poate corecte, poate false. Sufletul nostru îl numim și-l căutăm, îl protejăm și ni se frânge, uneori se bucură, ni se așează călduț aproape de inimă. Putem crede oare că nu este cu adevărat acolo?<br/><br/> Acestea sunt câteva dintre întrebările și ideile de la care a pornit instalația „Anima”. Ea este despre un univers invizibil adus la lumină, o posibilitate materializată de a vedea și de ne vedea dinspre interior, dinspre întunericul galaxiei către lumina din noi și dinspre întunericul inițial către cel final, între care însă pulsează (o) viață. ",
                "text-main-author-anima": "<b>Denis Simion</b> este sculptor și al doilea nume al său ar putea fi “inima”. De ce inima? De-a lungul timpului a dezvoltat o adevărată dragoste pentru forma anatomică a inimii, care a devenit și laitmotivul creațiilor sale în ultimii 7 ani.<br/><br/>\n" +
                    "Se definește ca un artist al sufletelor, pentru că mereu a vrut să imortalizeze în arta sa stările sufletului, mai întâi ale ei iar apoi ale ființelor din jurul său.",
                "text-main-wimp": "În 2019, la etajul al doilea al unui bloc dintr-un cartier bucureștean, o furtună de vară stârnește imaginația artistului și devine catalizatorul scrierii unor povești necunoscute. Imaginându-și că ramurile nucului care bat în geam îi spun povești de demult, unele liniștitoare, altele mai violente, artistul își propune să încapsuleze grafic aceste mesaje de departe. <br/><br/>\n" +
                    "Cu ajutorul nucului înarmat cu un liner care desenează pe o coală de hârtie, într-un ritm dictat de vreme, Claudiu reușește să înregistreze o serie de povești, care lasă loc imaginației privitorilor în a construi intrigi și personaje care traversează timpul și spațiul. <br/><br/>\n" +
                    "În perioada pandemiei, Claudiu a continuat să-și imagineze și să adune peste 40 de povești desenate de nucul de la geam. ",
                "text-main-author-wimp": "Alexandru Claudiu Maxim este un artist vizual, editor video, membru în grupul artistic Pastila Roz și manager The Art Machine.",
                "text-main-ear-to-ear": "Cât de deschis ești să împărtășești cel mai ascuns secret al tău cu oameni necunoscuți? Prin această instalație participativă, Anaïs invită oamenii să-și mărturisească în mod anonim secretele, pe care le înregistrează și le redă publicului prin intermediul unor urechi de ceramică. În felul acesta, artista a strâns o mulțime de povești variate din toată lumea, pe care le va dezvălui la NOVA împreună cu cele colectate din România. <br/><br/>\n" +
                    "Lucrarea aduce împreună tehnologii mai vechi și mai noi pentru a aborda cu sensibilitate acest spațiu intim al confesiunii împărtășite. Proiectul este aliniat demersului recent de cercetare al artistei care explorează relația dintre identitate și câmpurile numerice.",
                "text-main-author-ear-to-ear": "<b>Anaïs Lossouarn</b> este o tânără artistă franceză care lucrează cu mecatronica.<br/><br/>\n" +
                    "Întrebarea centrală a muncii ei vizează dependența umană față de tehnologii. Ea explorează și găsește inspirație în legăturile intime pe care stabilim cu mașinile digitale, creând lucrări care combină umorul și absurdul prin juxtapunerea mediilor vechi și noi. Subiectele care îi stârnesc curiozitatea includ vechiul, hacking-ul și viața artificială. <br/><br/>\n" +
                    "Folosindu-și abilitățile în mecatronică, lucrările sale recente explorează animarea neașteptată a obiectelor prin diferite tehnici. Această deturnare sau reapropriere care folosește sunetul, mișcarea și elementele vizuale, oferă acestor obiecte obișnuite o anumită poezie, deoarece se comportă în moduri neașteptate.\n" +
                    "Este licențiată la Ecole Supérieure d’Art d’Aix-en-Provence și este în prezent studentă la un masterat cu specializare în „Artă în timp real”.",

            },
        };

        // When the page content is ready...
        document
            .querySelectorAll("[data-i18n-key]")
            .forEach(translateElement);

        function translateElement(element) {
            const key = element.getAttribute("data-i18n-key");
            const translation = translations[locale][key];

            element.innerHTML = translation;
        }

        // ----- translations

        function GetURLParameter(sParam){
            var sPageURL = window.location.search.substring(1);
            var sURLVariables = sPageURL.split('&');
            for (var i = 0; i < sURLVariables.length; i++)
            {
                var sParameterName = sURLVariables[i].split('=');
                if (sParameterName[0] == sParam)
                {
                    return sParameterName[1];
                }
            }
        }

        function getLocalStream() {
            // navigator.mediaDevices.getUserMedia({video: true, audio: false}).then((stream) => {
            //     window.localStream = stream; // A
            //     window.localAudio.srcObject = stream; // B
            //     window.localAudio.autoplay = true; // C
            // }).catch((err) => {
            //     console.error(`you got an error: ${err}`)
            // });
        }


        const expo_item_audio_click = new Audio("sound/softer-click.mp3" );
        const calendar_item_audio_click = new Audio("sound/pull-plant.mp3" );

        <!-- random default inits -->
        $('#accordion a').click(function($e) {
            $e.preventDefault();
        });

        // load category from url
        let category = GetURLParameter('category');
        if (category !== undefined && $(".main-menu-item-"+category).length > 0) {
            $(".main-menu-item").removeClass("active-main-menu-item");
            $(".main-menu-item-"+category).addClass("active-main-menu-item");
            $('#mobile-selected').html(translations[locale][category]);
            filterCalendar(category);
        }

        <!-- accordion menu -->
        var Accordion = function(el, multiple) {
            this.el = el || {};
            this.multiple = multiple || false;

            // Variables privadas
            var links = this.el.find('.link');
            // Evento
            links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
        }

        Accordion.prototype.dropdown = function(e) {
            var $el = e.data.el;
            $this = $(this);
            $next = $this.next();

            $next.slideToggle();
            $this.parent().toggleClass('open');

            if (!e.data.multiple) {
                $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
            };
        }

        var accordion = new Accordion($('#accordion'), false);

        // menu behavior for mobile and desktop.
        if (is_mobile) {
            $(".submenu .main-menu-item ").on("click", function () {
                let selectedOption = $(this).text();
                $('#mobile-selected').html(selectedOption);

                // toggle list back.
                $next = $('.link').next();
                $next.slideToggle();
                $('.link').parent().toggleClass('open');

                // leave selected item activated in the dropdown list.
                $(".main-menu-item").removeClass("active-main-menu-item");
                $(this).addClass("active-main-menu-item");

                filterCalendar($(this).find('.main-menu-item-text').attr('id'));

                selectedOption = $(this).find(".main-menu-item-text").attr('id');
                const url = new URL(window.location);
                url.searchParams.set('category', selectedOption.trim());
                window.history.pushState({}, '', url);
                // parent.location.hash = "?category=" + selectedOption;

                return false;
            });
        } else {
            $(".main-menu-item").on("click", function () {
                let selectedOption = $(this).find(".main-menu-item-text").attr('id');
                $(".main-menu-item").removeClass("active-main-menu-item");
                $(this).addClass("active-main-menu-item");

                filterCalendar($(this).find('.main-menu-item-text').attr('id'));

                const url = new URL(window.location);
                url.searchParams.set('category', selectedOption.trim());
                window.history.pushState({}, '', url);

                // parent.location.hash = "?category=" + selectedOption.trim();

                return false;
            });
        }

        // init dates background
        $('.calendar-day-container, .calendar-day-container-wide').each(function() {
            let cal_date = $(this).find('.day-date-nr').text();
            $(this).css('background-image', 'url(\'../img/numbers/' + cal_date.trim() + '.svg\')');

        });

        // set notification visibility
        $("#bell").hide();

        // calendar items links
        $(".calendar-day-container").on("click", function() {
            window.location = $(this).attr("href"); //TODO: uncomment when details ready.
            return false;
        });

        $(".calendar-day-container-wide").on("click", function() {
            window.location = $(this).attr("href");
            return false;
        });

        $('.calendar-day-container, .calendar-day-container-wide-plain').on({
            mouseenter: function() {
                $(this).find(".day-event-part").css("flex", "0 1 400px");
                $(this).find(".day-event-part").css("transition", "all 0.4s");
                calendar_item_audio_click.play();
            },
            mouseleave: function() {
                $(this).find(".day-event-part").css("flex", "0 1 348px");
                $(this).find(".day-event-part").css("transition", "all 2s");
            }
        });

        $('.calendar-day-container-wide').on({
            mouseenter: function() {
                $(this).find(".day-event-part").css("flex", "0 1 300px");
                $(this).find(".day-special-right").css("flex", "0 1 800px");
                $(this).find(".day-event-part").css("transition", "all 0.3s");
                calendar_item_audio_click.play();
                // $(this).find(".day-special-right").css("transition", "all 0.4s");
            },
            mouseleave: function() {
                $(this).find(".day-event-part").css("flex", "0 1 348px");
                $(this).find(".day-special-right").css("flex", "0 1 632px");
                $(this).find(".day-event-part").css("transition", "all 1s");
                // $(this).find(".day-special-right").css("transition", "all 2s");
            }
        });


        // logo item click
        $("#logo").on("click", function() {
            window.location = $(this).attr("href");
            return false;
        });

        // expo items links

        $(".clickable-expo-item").on("click", function() {
            window.location = $(this).attr("href"); //TODO: uncomment after content ready
            return false;
        });

        $(".clickable-expo-item").on({
            mouseenter: function() {
                $(this).fadeTo(100, 0.5, function (){
                    $(this).removeClass("clickable-expo-item-hover");
                    expo_item_audio_click.play();
                });
                $(this).fadeTo(300, 1);
            },
            mouseleave: function() {
                $(this).fadeTo(100, 0.5, function () {
                    $(this).addClass("clickable-expo-item-hover");
                });
                $(this).fadeTo(300, 1.0);
            }
        })

        $(".clickable-expo-item").each(function () {
            // $(this).css('background-image', 'url(\'' + $(this).attr("bgimg") + '\')');
            $(this).css('--bg-image', 'url(\'' + $(this).attr("bgimg") + '\')');
        });

        $(".details-image").each(function () {
            // $(this).css('background-image', 'url(\'' + $(this).attr("bgimg") + '\')');
            $(this).css('--bg-image', 'url(\'' + $(this).attr("bgimg") + '\')');
        });

        // footer button links
        $(".footer-button").on("click", function() {
            window.location = $(this).attr("href");
            return false;
        });

        // language links
        $("#lang-en").on("click", function() {
            locale = "en";
            $("#lang-en").addClass("active");
            $("#lang-ro").removeClass("active");
            document
                .querySelectorAll("[data-i18n-key]")
                .forEach(translateElement);
            document.cookie = "lang=en";
            return false;
        });

        $("#lang-ro").on("click", function() {
            locale = "ro";
            $("#lang-en").removeClass("active");
            $("#lang-ro").addClass("active");
            document
                .querySelectorAll("[data-i18n-key]")
                .forEach(translateElement);
            document.cookie = "lang=ro";
            return false;
        });

        getLocalStream();
    });

});