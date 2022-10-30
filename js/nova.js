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
                "buy-tickets-pass": "buy festival pass",
                "buy-tickets-expo": "buy expo pass",
                "buy-tickets": "buy ticket",
                "installation": "installation",
                "interactive-installation": "multi-channel video installation",
                "interactive-installation-peep": "interactive installation peep media",
                "video-installation-multi-channel": "multi-channel video installation",
                "video-installation": "video installation",
                "mixed-media-installation": "mixed media installation",
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
                "space-and-spatiality-detail": "Space and spatiality in art installations",
                "intro-to-metaverse": "Intro to Metaverse: 360/VR Filmmaking // MARIUS HODEA",
                "intro-to-metaverse-detail": "Intro to Metaverse: 360/VR Filmmaking",
                "intro-to-metaverse-2": "Intro to Metaverse: from real to digital objects // MARIUS HODEA",
                "intro-to-metaverse-2-detail": "Intro to Metaverse: from real to digital objects",
                "sound-design": "Sound design for imaginary worlds // ȘTEFAN DAMIAN",
                "sound-design-detail": "Sound design for imaginary worlds",
                "style-gan": "Real-time interaction with StyleGAN // GRIGORE BURLOIU",
                "style-gan-detail": "Real-time interaction with StyleGAN",
                "deep-learning": "Using Deep Learning to generate dialogue text // GRIGORE BURLOIU",
                "deep-learning-detail": "Using Deep Learning to generate dialogue text",
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
                "text-main-metamorphosis": "<i>Metamorphosis</i> is a poetic meditation on the notions of transformation, impermanence and the entanglement of species. Creatures form and dissolve, elusive hybrids of plants, insects, human and non-human shapes. " +
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
            "text-main-wonderland": "Otherlands takes you outside of your own body only to have you discover it from unknown angles. You have at hand a VR headset, a playful sculptural structure similar to a labyrinth and a robotic device to whom you lend you sight. Friends can join the experience and further influence your self-perception. <br/><br/> " +
                    "The work was created starting from the results of the research setting VR in Wonderland, developed in 2019 by a multidisciplinary team, bringing together researchers and artists with a background in exploring hybrid art, creative coding and textile design.  <br/><br/>"+
                    "The research setting started from the intention to explore possibilities to recreate through artistic means the symptoms of the Alice in Wonderland syndrome. This syndrome describes a neurological condition in which both your self-perception as well as that of your surrounding environment are affected. Your sensory input no longer reflects reality faithfully, so you experience a distortion in understanding your own presence in space and time.",
            "text-main-author-wonderland": "More about the research setting team: <a href=\"http://masajazbec.si/bio/\">Maša Jazbec</a>, <a href=\"https://www.vanessav.net/bio/\">Vanessa Vozzo</a>, <a href=\"https://juergenropp.at/about/\">Jürgen Ropp</a>, <a href=\"https://novanova.ro/img/details/vr-in-wonderland/aleksandra-mitic-bio.pdf\">Aleksandra Mitic</a>, <a href=\"https://www.instagram.com/balintbudaibalint/\">Bàlint Budai</a>, <a href=\"http://martinnadal.eu/about/\">Martìn Nadal</a>. ",

            "text-main-intuition": "A sky of possibilities is also a cosmos of choices. How do we shape ourselves through what we choose? Is there a hidden pattern? <br/><br/>\n" +
                    "Intuition is a project about human decisions and subconscious behavior, exploring self-awareness and the attempt to find new solutions to know ourselves better in a meaningful way.<br/><br/>\n" +
                    "The overall experience of the users is based on an intimate exchange of interactions with a digital interface, where the mental flow of the artist is represented through numbers and sounds. The installation allows users to create individually, or in collaboration with others, their own audio-visual constellations of thoughts and feelings, starting from this deeply personal process of the artist. <br/><br/>\n" +
                    "\n" +
                    "Concept, design & graphics: Marius Jurca<br/>\n" +
                    "Coding of interactivity: Grigore Burloiu",
                "text-main-author-intuition": "<b>13m10j (Marius Jurca)</b> is a multidisciplinary artist, interested in the connections between art, science and technology. He uses numbers, sounds and algorithms to explore the complexity and aesthetics of his own mental flow. Most of his projects are interactive programs or apps, created in relation to the devices on which they are presented.<br/><br/>\n" +
                    "During his artistic activity, Marius received a number of awards and scholarships and participated in many artistic residencies, national and international group exhibitions, festivals and biennials.\n",
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
                "text-main-wimp": "In 2019, on the second floor of a block in a Bucharest neighborhood, a summer storm sparks the artist's imagination and becomes the catalyst for writing stories ready to be discovered. Imagining that the walnut branches knocking on the window become the voice of the wind telling him stories from long ago, the artist aims to graphically direct these messages from afar. <br/><br/>With the help of the walnut armed with a liner that draws on a sheet of paper, in a rhythm dictated by the wind, Alexandru manages to record a series of stories, which leave room for the viewers' imagination to build plots and characters that cross time and space. <br/><br/>During the pandemic, Alexandru continued to imagine and collect over 40 stories drawn at his window.",
                "text-main-author-wimp": "Alexandru Claudiu Maxim is a visual artist, video editor, member of the artistic group Pastila Roz and manager of The Art Machine. ",
                "text-main-ear-to-ear": "How open are you to sharing your deepest secret with strangers? Through this participatory installation, Anaïs invites people to anonymously confess their secrets, which she records and plays back to the general public through ceramic ears. In this way, the artist collected many stories from all over the world, which she will reveal at NOVA together with those collected from Romania.<br/><br/>\n" +
                    "In approaching with sensitivity this intimate space of a shared confession, Anaïs blends in her work the use of old and novel technologies. The project is aligned with the artist’s recent research efforts that explore the relationship between identity and numeric environments.",
                "text-main-author-ear-to-ear": "<b>Anaïs Lossouarn</b> is a young French artist working with mecatronics.<br/><br/>\n" +
                    "The question central to her work concerns human dependency on technologies. She explores and finds inspiration in the intimate links that we maintain with digital machines, building works that combine humor and absurdity through the juxtaposition of old and new media. Subjects that excite her curiosity include obsolescence, hacking and artificial life. <br/><br/>\n" +
                    "Using her skills in mechatronics, her recent works explore the unexpected animation of objects through different techniques. This detournement or re-appropriation that employs the use of sound, movement and visual elements, endows these ordinary objects with a certain poetry as they behave in unexpected ways.<br/><br/>\n" +
                    "She holds a BA from the Ecole supérieure d’Art d’Aix-en-Provence and is currently engaged in a masters degree with a specialization in \"Real time Art\".",
                "cinetic": "CINETic / The International Research and Education Centre in Innovative Creative Technologies, Str. Tudor Arghezi, 3B",
                "available-places": "Available places",
                "text-main-space-and-spatiality": "Art installations as a multi-sensory experiential artistic practice will deliberately blur the boundaries between form and function. One of their unifying functions is to redefine and re-organize space. <br/><br/> Unlike art forms such as painting and sculptural objects, which may be considered Fine Art, installation art directly influences how a viewer perceives their surroundings. An installation in situ, in three separate places, results in three very distinct and separate visual experiences. The formal and functional qualities of an installation are ultimately affected by the context of the work’s physical setting.  <br/><br/> Installation art as a practice marries concepts of transformation of space, socio-political visual commentary, and the need for human engagement and interaction in order for such works to become “complete.” Many contemporary artists work with spatial elements and the idea of spatiality, not only for the sake of space itself but also as a methodological tool to meet their own artistic needs. <br/><br/> This presentation explores a few perspectives on how space influences people’s perception of an art installation piece and tries to approach subjects like space as an extension of art installations, why space is essential in design, how we communicate through space, what are the elements through which a space communicates, interactions and space elements with a role in enhancing the immersive experience.",
                "text-main-author-space-and-spatiality": "<b>Iulia Gherghescu</b> is a scenographer, researcher, and associate lecturer at UNATC. Her experience includes projects in theatre as a set and costume designer, in film, as a space designer for events, and creation of installations dedicated to performance art projects. As a designer and researcher, she is interested in the interdisciplinary methods of developing transformable and interactive spaces to amplify their scenographic potential.",
                "text-main-metaverse-1": "Virtual reality and creating 360 films is becoming rapidly a fundamental part of the film and media entertainment industries. Through this workshop we propose a comprehensive  introduction to VR/360 creation, offering the participants the tools, knowledge and necessary skills to create their own immersive experiences. <br/><br/>With clear and precise explanations, Marius will walk you through the extensive process of creating real or virtual 360 content, from pre-production to distribution. The content of the course includes, among others: a general presentation of the field of VR/360 creation, terminology, technology, camera selection, camera functioning, positioning of camera and actors, light specs, editing, managing content for VR headsets and online environments. <br/><br/>The workshop is designed to offer a captivating, yet knowledgeable, practical and technical learning of this novel field. ",
                "text-main-author-metaverse-1": "<b>Marius Hodea</b> is a creator of digital spaces, with a focus on virtual reality, more specifically virtual environments in relation to human experience. Assistant researcher at CINETic Bucharest and PhD student at the National Art University, Marius is largely experienced in VR creation both in terms of design and implementation, having contributed through his activity to the development of ideas and techniques, offering lead consultancy on research and educational projects in the field, as well as having a prolific activity as an artist.",
                "text-main-metaverse-2": "A collective, virtual space, created through the convergence of physical and virtual reality, improved objects and spaces. The Metaverse promises large scale, persistent environments so that users can share experiences at the intersection between the physical and the digital. If we are to have a 3D digital world, we’ll have to fill it with things, and not just a handful. We’ll need sufficient 3D objects so that we can create a rich, vibrant world, full of digital items that mirror the physical reality we are used to. <br/><br/>This workshop presents a method to transpose real objects into the metaverse using photogrammetry. Through this technique we extract 2D information from photos and then process it to obtain a 3D object. ",
                "text-main-sound-design": "The sonic world we are immersed into, from our very first moments of life, offers us countless listening experiences, whether active or passive, based on which we establish representations, associations and perceptual expectations. Almost everyone can recognize the sound of a car, the chirping of birds or the sound of sea waves. <br/><br/>Such perceptual automatisms form the pillars which guide a sound designer when creating the sound of a movie, a game or an installation. However, things are different when a sound designer creates the sound of abstract, imaginary worlds that have no correspondence to the real world. <br/><br/>How would a black hole sound? How would two interacting geometrical shapes sound? What inspires a sound designer facing such challenges? In which degree can he take certain sonic associations from the real world in order to create an imaginary world? The workshop aims for a discussion starting with these questions, while also trying to offer a few potential approaches in the practice of sound design for imaginary worlds.",
                "text-main-author-sound-design": "<b>Ștefan Damian</b> is a sound designer, composer and associate lecturer at UNATC “I.L. Caragiale” – Faculty of Film. He has been working as a producer, composer, mix engineer, sound designer and interaction designer for a variety of music, cinema and installation projects. Some of his artistic exploration subjects include sound synthesis, spatialization and sonic interaction design.",
                "text-main-style-gan": "StyleGAN is a deep learning model used to generate images in a latent space obtained by training on a certain type of images (e.g. portraits, landscapes, photos of animals etc).  Even though in the last two years text-to-image models (DALL-E, Midjourney, Stable Diffusion…) have captured the spotlight, StyleGAN models remain attractive for fluid explorations of latent spaces. This type of applications (latent walk, projection), controlled in real time, are the subject of this workshop. <br/><br/>The workshop is open for anyone, but experience with Python, PyTorch, Google Colab etc will be useful for the practical part.",
                "text-main-author-style-gan": "<b>Grigore Burloiu</b> is a lecturer in the Animation and Interactivity department of UNATC, where he coordinates the master’s degree program <i>Interactive Technologies in Performing and Media Arts (ITPMA)</i>. There, he teaches creative coding and interactive music systems. <br/><br/> Grigore develops expressive accompaniment systems for interactive music and tackles the use of AI in art - especially for sound and text. He collaborated on the creation of numerous art works, such as CORPUS VIDERUM (Ryan Walsh 2022, with Hans Brouwer), VIOLIN CONCERTO (Fred Popovici 2021, with Patricia Kopatchinskaja), LOST INTERFERENCES (Alexandru Berceanu 2021), URBAN DELTA SCAPES (Anne Dubos, IRCAM & CINETic 2019). <br/><br/>Academic: <a href=\"https://orcid.org/0000-0002-9059-9621 \">https://orcid.org/0000-0002-9059-9621 </a><br/> Site: <a href=\"https://rvirmoors.github.io/\">https://rvirmoors.github.io/</a><br/> Code: <a href=\"https://github.com/rvirmoors\">https://github.com/rvirmoors</a> <br/> Email: grigore.burloiu@unatc.ro",
                "text-main-deep-learning": "GPT-3 from OpenAI is the most famous and powerful generative model of NLP (natural language processing), but one can obtain impressive results also with smaller models, derived from GPT-2. The latter carry the advantage that we can train them on our own datasets (collections of texts), then place them in the desired contexts. <br/><br/>In this workshop I will demonstrate how I created, based on a set of speculative texts, a chatbot / oracle that responds to the user’s questions about the future. You can use the same principles to create your own interactive text situations. <br/><br/>Coding knowledge is not necessary. However, a basic understanding of deep learning and the Google Colab environment are welcomed.",
                "text-main-zimmt": "This year, the festival expands with a performative lab project that brings to Bucharest the 3D sound installation of the German center for immersive media art, music and technology ZiMMT. \n" +
                    "<br/><br/>\n" +
                    "Between the 5th and 8th of December, the installation becomes the host of a series of unique performances, with DJs, vocalists, bands and sound designers from the local scene. Together with the audience, they will experiment their music in this new, immersive environment. \n" +
                    "<br/><br/>\n" +
                    "Felix Deufel, founder of ZiMMT, will also hold a workshop here, for those interested in learning the specificities of 3D audio constructions. ",
                "text-main-author-zimmt": "<b>ZiMMT</b> provides the appropriate stage for the many facets of media immersion and a place for creative experimentation. As one of only a few cultural institutions, ZIMMT has an innovative 3D audio system consisting of 36 loudspeakers. This offers the opportunity to develop and present immersive, space-consuming concerts, exhibitions and performances. In addition to the interdisciplinary exchange of artists and developers, the center is particularly interested in the transfer of knowledge and workshops. ZiMMT is a gallery, production space, concert hall, research lab and network all in one.\n" +
                    "<br/><br/>\n" +
                    "ZiMMT 3D Sound Lab is an experience offered by IQOS and is only intended for people over the age of 18 years old.\n" +
                    "<br/><br/>\n" +
                    "The workshop is part of the EDU section of the festival, organized in partnership with Goethe-Institut Bucharest and CINETic/The International Center for Research and Education in Innovative Creative Technologies of UNATC.\n",
                "text-main-nova-talks-program": "<b>\n" +
                    "SCHEDULE:\n" +
                    "<ul>\n" +
                    "<li>PANEL I: 11:00 – 13:00 </li>\n" +
                    "<li>COFFEE BREAK: 13:00 – 13:30 </li>\n" +
                    "<li>PANEL II: 13:30 – 15:30</li>\n" +
                    "</ul>\n" +
                    "</b>",
                "text-main-nova-talks": "<br/><br/>Through this event, NOVA proposes a marathon of inspiration and creates the context for fascinating discussions about the importance of new technologies in the creative process and in exploring human cognitive potential.\n" +
                    "<br/><br/>\n" +
                    "Thus, on November 26, at Cinema Elvire Popesco, the public will meet and interact with 6 speakers, including researchers, but also artists whose works are included in the main exhibition.\n" +
                    "<br/><br/>\n" +
                    "Speakers with varied interests and professions, an aspect that is reflected in the interdisciplinary nature of their works, they come to Bucharest to talk about the searches that were the basis of their projects.\n" +
                    "<br/><br/>\n" +
                    "And they are not the only ones who will take the stage. Eva, the humanoid robot operated with the power of the mind, will come for the first time in Romania and will dialogue with the participants during a lecture-performance given by the artist and researcher Maša Jazbec.\n" +
                    "<br/><br/>\n" +
                    "The topics of discussion will slide smoothly from robots to neuroscience, from storytelling to spiritualizing artificial intelligence and its role in reconstructing one's own memories, from knowing the conscious and unconscious self to deeply connecting with the environment with the help of technology.\n" +
                    "<br/><br/>\n" +
                    "They all speak of the passion and curiosity of these artists, ready to answer questions and open to interacting with the Romanian public.",
                "text-main-author-nova-talks-panel-1": "PANEL I",
                "text-main-author-nova-talks-panel-2": "PANEL II",
                "text-main-nova-talks-masa": "<h2>MAŠA JAZBEC// LECTURE - PERFORMANCE: What kind of future do you envision with robots? </h2><br/><br/>" +
                    "Part of the team that developed the VR in Wonderland installation, included in this year's exhibition  at NOVA, and the creator of the humanoid robot Eva, Maša will open this section of the festival with a lecture-performance structured in two parts. In the first part, she will talk about exploring the implications of human-robot interaction research. The artist considers that the study of robotics cannot evolve without an in-depth knowledge of human nature. This is why her research is interdisciplinary, moving rapidly from engineering and social science to cognitive science, neuroscience, ethics and even art. In this presentation, Maša will approach Android Science and how the development of human-like robots can contribute to cognitive research.\n" +
                    " <br/><br/>\n" +
                    "In the second part of the presentation, Maša will give a participatory demonstration, through which she will show her interaction with the humanoid robot Eva, which is operated with the power of the mind through a BCI (brain-computer interfaces) system. Capable of reading minds, Eva illustrates perfectly the direct communication between humans and machines, with the help of neuroimaging technologies. As interest in BCI has grown, new applications of it have emerged outside of the medical field for healthy users. One of these is the integration of BCI with other interactive technologies like Eva. In these configurations, users control a humanoid robotic body and navigate through physical space with the power of their own brain activity.\n" +
                    " <br/><br/>\n" +
                    "At the end of the lecture, some participants will have the chance to directly interact and manipulate the robot, but also to ask the artist some questions. ",
                "text-main-author-nova-talks-masa": "<b>Maša Jazbec</b> is an artist, curator and researcher. She holds a Ph.D. in human informatics, attained at the University of Tsukuba (Virtual Reality Lab) in Japan and MA in interactive art, achieved at Interface Culture at the University of Arts and Design Linz. She was a visiting researcher at Ishiguro Laboratory at ATR where has deepened her research in human-like robotics and android science also in practice. She is engaged in the vision and execution of the Trbovlje New Media Setting project in Slovenia, and was curating events integrating science, art and technology at the new media culture festival Speculum Artium (2013 – 2018). \n" +
                    " <br/><br/>\n" +
                    "Her projects, exhibited as artworks, have always shown her understanding of new media as a research artistic practice, stemming from artistic and scientific thought, linked to the current situation in contemporary society. Her latest research interests are mostly focused on social robotics and android science. She presented her research at conferences such as Computer Human Interaction, Human Robot Interaction, ISEA and System Man and Cybernetics IEEE, ACM Siggraph Sparks. She exhibitied her artworks in the festival art platforms such as Ars Electronica, SONICA, Athens Digital Art Festival, Lab30, Kiblix, ISEA, Tsukuba Media Art Festival, PixxelPoint, R.O.R. She was in the jury for the Ars Electronica Golden Nika 2018 Awards and in the Jury for the Asia SIGGRAPH 2021. \n" +
                    " <br/><br/>\n" +
                    "Currently she is leading the Creative Robotics Lab in Trbovlje, Slovenia in the frame of McRUK and Katapult. \n" +
                    "<br/><br/>\n" +
                    "<a href=\"http://masajazbec.si\">http://masajazbec.si</a>",
                "text-main-nova-talks-costin": "<h2>How can neurotechnology improve the intimate communication between our conscious self and our subconscious?</h2><br/><br/>\n" +
                    "In a world where the flow of information is ever greater and our attention span becomes lower than the attention span of a goldfish, how could technology, help us use our inner resources more comprehensive?<br/><br/>\n" +
                    "At this point in our evolution, the issue of intimacy at a level of inner dialogue, becomes a key factor but how can we actually facilitate this inner process?<br/><br/>\n" +
                    "Neural training facilitated by Brain Mapping and Brain Computer Interface technology is becoming an increasingly accessible solution in terms of improving and creating favorable contexts to an intimate inner dialogue, between the conscious and the subconscious self.<br/><br/>",
                "text-main-author-nova-talks-costin": "<b>Costin studied</b> at MIT (Massachusetts Institute of Technology) in Boston, USA, within the Executive Education Program – Neuroscience for Leadership. There he worked with world leading researchers in the field of Human Brain Performance Enhancement using Brain Computer Interface and Brain Mapping technology.<br/><br/>\n" +
                    "He has a PhD in Management, a bachelor’s degree in Psychology and an Executive Master in Business Administration. He is currently a PhD student in Physics at the Faculty of Applied Sciences in Bucharest.<br/><br/>\n" +
                    "He is the founder and CEO of the Neuro Performance Enhancement Research Center, Veruvis, a lifelong project for him, deeply rooted in his healing journey.<br/><br/>\n" +
                    "His mission is to help people access the immense healing power of their brains in order to reach their full potential.",
                "text-main-nova-talks-monika": "<h2>MÓNICA RIKIĆ // Existential crises of conscious machines</h2>\n" +
                    "<br/><br/>\n" +
                    "Thanks to scientific and technological development, we know that we will never know everything; we need to learn and live with uncertainty and mystery. Creative thinking, and specifically art, are practices that allow us to explore the unknown without seeking an absolute answer to everything since sometimes there is simply no answer, but new questions that are a priori unimaginable. In this talk, Mónica will explore some examples and proposals of how we can transit our anxieties about our technological present and future together, using art to create common spaces of reflection and affective discussions. Her futuristic fiction art installation New Home of Mind is included in NOVA exhibition this year.",
                "text-main-author-nova-talks-monika": "<b>Mónica Rikić</b> is a Spanish artist whose practice is focused on creative coding, robotics, electronics and non-digital objects used to create interactive projects often framed as experimental games. <br/><br/>\n" +
                    "The Artist’s interest lies in the social impact of technology and explores, through art, a reimagination of the coexistence between humans and machines. <br/><br/>\n" +
                    "Mónica has a Bachelor in Fine Arts and graduated from 2 master studies: Digital Arts (UPF) and Contemporary Philosophy (UOC). Currently, Phd Student at Network and Information Technologies doctoral program (UOC).\n" +
                    "Her projects have been presented in several relevant contexts around the world (Ars Electronica, Creative Tech Week New York, Robotronica Australia, FILE Brazilia, Centre de Cultura Contemporània de Barcelona, Arts Santa Mónica) and awarded, among others, by the Catalan National Culture and Arts Council, Japan Media Arts Festival, AMAZE Berlin, Margaret Guthman Musical Instrument Competition in Atlanta.\n" +
                    "<br/><br/><a href=\"http://monicarikic.com\">monicarikic.com</a>",
                "text-main-nova-talks-nomi": "<h2>NOMI SASAKI // Peep Media in Digital Times and the Reconstruction of Personal Spaces Through AI</h2>\n" +
                    "<br/><br/>\n" +
                    "During this talk, the artist will share part of her research on the historical development of peep media and its presence in digital times by analyzing and comparing different artworks based on the act of peeping. This research proposes that peep media and one-to-one performances are, nowadays, an answer to a multitasking-hyperconnected lifestyle, where it is increasingly difficult to enjoy privacy, intimacy, and unmediated interpersonal relationships. Likewise, this research understands that the peep box as an object contains the spirit of its time, a condensed and miniaturized version of its own reality, and in so, reflects the knowledge and aspirations of the moment it exists in.\n" +
                    "<br/><br/>\n" +
                    "<a href=\"senrian.html\">SenriAn</a> is a peep media installation, included in the NOVA exhibition this year, created after researching in this particular format and explores family memories as data and how these can be reconstructed through AI. How will we remember in the future? Will these memories have the same emotional and sensory dimension?",
                "text-main-author-nova-talks-nomi": "<b>Nomi Sasaki Otani</b> is a Peruvian Japanese visual artist. As a Ph.D. candidate at the University of Art and Design Linz, in collaboration with the Zurich University of the Arts, her artistic research focuses on interactive art related to personal data processing and children's rights in the digital realm. She holds a bachelor's degree in Communication Sciences from Lima University and a master of Arts degree from the Interface Cultures department of the University of Art and Design Linz. <br/><br/>\n" +
                    "Sasaki is devoted to Chinese black ink tradition and animation. Her artwork explores scale and dimension, the material nature of water, the behavior of light, and how these elements can create new landscapes and atmospheres for multidisciplinary performances. Her recent work focuses on micro realities and peep media. Sasaki has worked as a producer and cultural manager for more than ten years, and she pursued studies at the Purple Cloud Calligraphy Association 紫雲 in Tokyo.\n" +
                    "<br/><br/><a href=\"http://nomisasaki.com\">nomisasaki.com</a>",
                "text-main-nova-talks-noor": "<h2>NOOR STENFERT KROESE // Meeting Spaces for Humans and Non-humans</h2>\n" +
                    "<br/><br/>\n" +
                    "From a critical post-human perspective, the new media artist and scenographer Noor Stenfert Kroese’s works evolve around the relationship between humans and non-humans. During this event, she will talk about her work – RHIZA - and her ongoing research on the collaboration with fungi and other non-humans.\n" +
                    "<br/><br/>\n" +
                    "A meditation on the deep relationship between humans and the environment, RHIZA is a trans-disciplinary interactive installation at the border between biology, nature and technology. Included in this year's exhibition at NOVA, this living installation is inspired by the dynamics of the network of fungal connections, known as the wood wide web, through which plants constantly dialogue. To illustrate the connection between humans and the plant environment, the installation facilitates access to this subtle dialogue by calling upon our own roots: the soles. A speech about the importance of creating a bridge between humans and non-humans to establish a direct connection.",
                "text-main-author-nova-talks-noor": "<b>Noor Stenfert Kroese</b> is an interdisciplinary artist from Holland. Currently she is finishing her master’s study at the Interface Culture department of the Art and Design University in Linz, where she is also developing the activity of her studio through innovative collaborations.<br/><br/>\n" +
                    "Noor works across various media such as bio-art, theatre, and new media art. Her creations aim for an intertwinement between the work and the spectators in which new and existing ideas can be reflected on and explored. Her work does not provide a direct answer but seeks a space to ask questions and to experiment. From a posthuman perspective, she explores the possibilities of taking a conscious place in the moving, uncontrollable network we are part of.<br/><br/>\n" +
                    "Studio Stenfert Kroese’s work was exhibited and performed at venues and festivals such as the Barcelona Design week (ES), EYE Filmmuseum Amsterdam (NL) Dutch National Opera & Ballet (NL), and the Ars Electronica Festival (AT). Her works received awards from YouFab Global Awards (JP) and Prins Bernhard Young talent Award (NL).\n" +
                    "<br/><br/>\n" +
                    "<a href=\"http://stenfertkroese.com/\">stenfertkroese.com</a>",
                "text-main-nova-talks-anais": "<h2>ANAIS LOSSOUARN // Intimacy On Numeric Platforms</h2>\n" +
                    "<br/><br/>\n" +
                    "It is widely known that virtual platforms serve a significant part of our daily interactions and create a multitude of layers of reality. These layers constitute dematerialized fragments of our memory and personality. The artist behind the participative sound installation Ear to Ear, exhibited at NOVA, Anais, wil speak about the different aspects of digital media and technologies and their influence on art. As an artist who loves storytelling, through her works, she tries to create meeting points in various ways between the recordings she has gathered while working on the installation. The idea of sharing a secret with people you don’t know gives a precious aspect to these personal testimonies. This allows people to identify with the others and creates a feeling of intimacy. As a mecatronics artist, her recent work explores the relation between identity and numeric environments, hence the theme of this talk.\n",
                "text-main-author-nova-talks-anais": "<b>Anaïs Lossouarn</b> is a young French artist working with mecatronics.<br/><br/>\n" +
                    "The question central to her work concerns human dependency on technologies. She explores and finds inspiration in the intimate links that we maintain with digital machines, building works that combine humor and absurdity through the juxtaposition of old and new media. Subjects that excite her curiosity include obsolescence, hacking and artificial life. Using her skills in mechatronics, her recent works explore the unexpected animation of objects through different techniques. This detournement or re-appropriation that employs the use of sound, movement and visual elements, endows these ordinary objects with a certain poetry as they behave in unexpected ways.<br/><br/>\n" +
                    "She holds a BA from the Ecole supérieure d’Art d’Aix-en-Provence and is currently engaged in a masters degree with a specialization in \"Real time Art\".\n" +
                    "<br/><br/>\n" +
                    "<a href=\"http://anaislossouarn.journoportfolio.com\">anaislossouarn.journoportfolio.com</a>",
                "program-full": "NOV 23 - DEC 17<br/>\n" +
                    "TUESDAY - FRIDAY 16:00 - 21:00<br/>\n" +
                    "SATURDAY: 11:00 - 21:00",
                "edition-2018": "2018 Edition",
                "edition-2021": "2021 Edition",


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
                "buy-tickets-pass": "cumpără festival pass",
                "buy-tickets-expo": "cumpără expo pass",
                "buy-tickets": "cumpără bilet",
                "installation": "instalație",
                "interactive-installation": "instalație interactivă",
                "interactive-installation-peep": " instalație interactivă peep media",
                "video-installation-multi-channel": "instalație video multi-channel",
                "video-installation": "instalație video",
                "mixed-media-installation": "instalație mixed media",
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
                "space-and-spatiality-detail": "Spațiu și spațialitate în creația instalațiilor artistice",
                "intro-to-metaverse": "Intro to Metaverse: 360/VR Filmmaking // MARIUS HODEA",
                "intro-to-metaverse-detail": "Intro to Metaverse: 360/VR Filmmaking",
                "intro-to-metaverse-2": "Intro to Metaverse: from real to digital objects // MARIUS HODEA",
                "intro-to-metaverse-2-detail": "Intro to Metaverse: from real to digital objects",
                "sound-design": "Sound design pentru lumi imaginate // ȘTEFAN DAMIAN",
                "sound-design-detail": "Sound design pentru lumi imaginate",
                "style-gan": "Interacțiune cu StyleGAN în timp real // GRIGORE BURLOIU",
                "style-gan-detail": "Interacțiune cu StyleGAN în timp real",
                "deep-learning": "Folosirea Deep Learning pentru generare de text dialog // GRIGORE BURLOIU",
                "deep-learning-detail": "Folosirea Deep Learning pentru generare de text dialog",
                "a-project": "Un proiect de",
                "presented-by": "Prezentat de",
                "with-support-of": "Cu sprijinul",
                "sponsors": "Parteneri",
                "our-sponsors": "Partenerii noștri",
                "media-partners": "Parteneri media",
                "text-main-headline-seeing-double": "„Două perechi de ochi privesc aceeași scenă. Aceeași lumină trece prin două deschideri care văd lucruri complet diferite. Unul este biologic, celălalt este mecanic.”<br/><br/>",
                "text-main-seeing-double": "La invitația NOVA, artista multidisciplinară și cercetătoarea de renume internațional, <b>Sougwen 愫君 Chung</b>, vine pentru prima dată în România și susține în deschiderea festivalului un performance-lecture spectaculos, îmbogățit de un conținut audio-video puternic, care explorează intersecția dintre artă, știință și inginerie." +
                    "<br/><br/>" +
                    "În timpul evenimentului, Sougwen demonstrează poetica privind colaborarea umană și non-umană prin explorarea diferitelor moduri de percepție și de desenare între artist și mașină, organic și sintetic, improvizațional și computațional. Procesul a condus la o vastă perspectivă interdisciplinară, cercetare filozofică și dezvoltări ale sistemului tehnologic printr-o practică artistică de pionierat. Acest performance-lecture speculează viitorul alternativ al relațiilor dintre oameni și mașini, adresând întrebarea: unde se termină „AI” și unde începe „noi”?"+
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
                "text-main-metamorphosis": "<i>Metamorphosis</i> deschide o meditație plină de poezie despre transformare, efemeritate și amestecul speciilor. Creaturi misterioase se construiesc și se dizolvă în acest spațiu de devenire, dând naștere la forme hibride alunecoase, care leagă plante, insecte, oameni și obiecte. " +
                    "<br/><br/>" +
                    "Inspirată din lucrări literare despre metamorfoză, instalația propune o perspectivă dinamică asupra omului, în posibilele sale simbioze cu materia și alte forme de viață. " +
                    "<br/><br/>" +
                    "Lucrarea este generată folosind algoritmi de machine learning și astfel, prin procesul de creație, alătură acestei reflecții asupra transformării și schimbările aduse de evoluția vertiginoasă a sistemelor de inteligență artificială. În această nouă paradigmă, ne îndreptăm împreună spre modele din ce în ce mai dematerializate de cunoaștere și cultură." +
                    "<br/><br/>",
                "text-main-author-metamorphosis" : "<b>Myriam Bleau</b> este compozitoare, artist digital și performer din Montréal. Folosind lumina și sunetul ca punct de plecare, Myriam le articulează împreună cu mișcarea în performance-uri audio-vizuale, lucrări video, instalații și interfețe interactive. " +
                    "<br/><br/>" +
                    "Artista este interesată de latura performativă atât ca o formă codificată de manifestare culturală, cât și ca o reconstituire în propriul corp a unor sisteme simbol, care aduc împreună entități umane și non-umane, inclusiv machine learning. Practica sa hibridă explorează spații poroase dintre lumea fizică și cea virtuală, dintre natural și sintetic. " +
                    "<br/><br/>" +
                    "Lucrările artistei au fost recunoscute și prezentate la nivel internațional, în contexte ca Prix Ars Electronica (AT), Sónar (ES, HK), Transmediale (DE), Sonic Arts Award (IT), Elektra (CA), Mutek (MX, CA, JP, AR), ISEA (CA, KR), ACT (KR), L.E.V et LABoral (ES), Scopitone (FR), Café Oto (UK)." +
                    "<br/><br/>",
                "text-main-acqua-alta": "O carte pop-up, ale cărei desene și modelaje din hârtie devin decorul unei povești înduioșătoare, vizibilă numai în realitate augmentată prin aplicația custom made dezvoltată de studioul francez. În cele 10 pagini duble ale sale, ești purtat într-un univers la intersecția dintre teatru, dans, benzi desenate, film de animație și joc video artistic." +
                    "<br/><br/>" +
                    "Ilustrat, produs și editat de Adrien M & Claire B, cartea spune povestea unui bărbat, a unei femei și rutina lor de zi cu zi, întreruptă dramatic de o ploaie puternică, în timpul căreia femeia dispare. În urma ei rămâne numai părul și acesta prinde viață. Ne scufundăm în tărâmurile imaginare ale apei. " +
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
                "text-main-wonderland": "Otherlands te poartă în afara corpului tău pentru a te descoperi din unghiuri nebănuite. Ai la dispoziție un headset VR, o structură sculpturală amețitoare similară unui labirint și un device robotic căruia îi împrumuți privirea. Prietenii tăi se pot alătura și ei experienței și îți pot influența mai departe percepția de sine.  <br/><br/>"+
                    "Lucrarea a fost creată pornind de la rezultatele proiectului de cercetare VR in Wonderland, dezvoltat în 2019 de o echipă multidisciplinară, care aduce la un loc cercetători și artiști cu experiență în explorarea artei hibride, programare creativă și design textil. <br/><br/>" +
                    "Proiectul de cercetare a pornit de la intenția de a explora posibilitățile de a recrea într-un demers artistic simptomele sindromului Alice în Țara Minunilor.  Acest sindrom descrie o situație neurologică în care îți este afectată percepția reală a propriei persoane, dar și a lucrurilor care te înconjoară. Experiența senzorială nu mai reflectă fidel realitatea și astfel experimentezi o distorsiune în înțelegerea propriei prezențe în spațiu și în timp.",
                "text-main-author-wonderland": "Membrii echipei proiectului de cercetare: <a href=\"http://masajazbec.si/bio/\">Maša Jazbec</a>, <a href=\"https://www.vanessav.net/bio/\">Vanessa Vozzo</a>, <a href=\"https://juergenropp.at/about/\">Jürgen Ropp</a>, <a href=\"https://www.instagram.com/balintbudaibalint/\">Bàlint Budai</a>, <a href=\"http://martinnadal.eu/about/\">Martìn Nadal</a>. ",
                "text-main-intuition": "Un cer de posibilități e totodată un cosmos de alegeri. Cum ne definim prin alegerile noastre? Există un tipar ascuns? <br/><br/>\n" +
                    "Intuition este un proiect despre decizii și comportament condus de inconștient, ce explorează prezența în sine și caută noi metode de autocunoaștere.<br/><br/>\n" +
                    "Experiența generală a utilizatorului se bazează pe un schimb de interacțiuni intime cu o interfață digitală, unde fluxul mental al artistului este reprezentat prin numere și sunete. Instalația îți dă posibilitatea să creezi individual, sau în colaborare cu ceilalți, propriile tale constelații audio-vizuale de gânduri și emoții, pornind de la acest proces profund personal al artistului. <br/><br/>\n" +
                    "\n" +
                    "Concept, design & grafică: Marius Jurca<br/>\n" +
                    "Programare interactivitate: Grigore Burloiu",
                "text-main-author-intuition": "<b>13m10j (Marius Jurca)</b> este un artist multidisciplinar, preocupat de conexiunile dintre artă, știință și tehnologie. Folosește numere, sunete și algoritmi pentru a explora complexitatea și estetica fluxului mental personal. Proiectele sale sunt programe sau aplicații interactive, create în relație cu dispozitivele pe care acestea sunt prezentate.<br/><br/>\n" +
                    "În decursul activității sale artistice, a obținut o serie de premii și burse și a participat în numeroase rezidențe artistice, expoziții de grup, festivaluri și bienale de artă desfășurate la nivel național și internațional.",
                "text-main-rhiza": "Rhiza este un conector între specii care te invită să devii parte din comunicarea între ciupercile pleurotus roz ce cresc în instalație și miceliul lor. Există un schimb constant de biodate între aceștia care este preluat de senzori și transformat în vibrații pe platformele circulare care înconjoară turnul din Rhiza. <br/><br/>\n" +
                    "Pășește pe ele cu tălpile goale și intră în conversație. <br/><br/>\n" +
                    "Lucrarea este inspirată din interacțiunea minunată prezentă în rețelele micorizale, acest wood-wide-web subteran care leagă plantele și ciupercile prin conexiuni valoroase care le ajută pe acestea să supraviețuiască și să crească, susținând schimbul de informații și substanțe nutriente. La fel, Rhiza, termen care se traduce prin “rădăcini”, îți propune să îți integrezi propriile rădăcini, tălpile, în această rețea hrănitoare bazată pe împreună.",
                "text-main-author-rhiza": "<b>Noor Stenfert Kroese</b> este o artistă interdisciplinară de origine olandeză. În prezent își finalizează studiul masteral la Universitatea de Artă și Design din Linz, departamentul Interface Cultures, unde dezvoltă activitatea studioului său de creație prin colaborări inedite. <br/><br/>\n" +
                    "Noor lucrează în diverse medii, cum ar fi arta biologică, teatrul și arta new media. Creațiile sale urmăresc conectarea și integrarea publicului în operă. Interacțiunea între oameni și entități non-umane este un subiect central în munca sa. Instrumentele pe care artista le folosește, dar și maniera sa de lucru arată un interes pentru împletirea perspectivelor noi cu cele vechi și astfel, lucrările artistei nu oferă un răspuns, ci caută mai degrabă spațiul pentru a pune întrebări și a experimenta. Dintr-o perspectivă postumană, ea explorează posibilitățile de a ocupa un loc conștient în rețeaua în mișcare și incontrolabilă din care facem parte.<br/><br/>\n" +
                    "Lucrările Studioului Stenfert Kroese au fost expuse și interpretate în locații și festivaluri precum Barcelona Design week (ES), EYE Filmmuseum Amsterdam (NL), Dutch National Opera & Ballet (NL) și Festivalul Ars Electronica (AT). Lucrările ei au primit premii de la YouFab Global Awards (JP) și Prins Bernhard Young talent Award (NL).",
                "text-main-senrian": "În 1927 bunicii lui Nomi părăseau Japonia și se așezau în Peru. SenriAn este numele ceainăriei japoneze pe care aceștia au construit-o în Lima. După moartea lor, ceainăria a fost demolată. De atunci, SenriAn a rămas acest loc intangibil, prezent numai în amintirile familiei.<br/><br/> \n" +
                    "Prin această lucrare Peep Media, Nomi explorează posibilitatea de a reconstrui acest spațiu special din trecutul său cu ajutorul inteligenței artificiale. Artista pornește de la un dataset personal care înglobează fotografii de familie și picturile sale cu cerneală. <br/><br/> \n" +
                    "Când doi privitori se uită împreună prin vizoarele instalației, li se dezvăluie aceste noi reprezentări ale ceainăriei. La fel ca natura amintirilor în sine, ele sunt continuu transformate cu fiecare rememorare și se modelează după contextul în care sunt evocate. ",
                "text-main-author-senrian": "<b>Nomi Sasaki Otani</b> este o artistă vizuală cu origini japoneze și peruane. Doctorandă la Universitatea de Artă și Design Linz, în colaborare cu Universitatea de Arte din Zurich, cercetarea ei artistică se concentrează pe arta interactivă privind prelucrarea datelor cu caracter personal și drepturile copiilor în domeniul digital. Ea deține o diplomă de licență în Științe ale Comunicării de la Universitatea din Lima și un masterat la departamentul Interface Cultures al Universității de Artă și Design din Linz.<br/><br/> \n" +
                    "Sasaki este dedicată tradiției și animației cu cerneală neagră chinezească. Opera ei de artă explorează scara și dimensiunea, natura materială a apei, comportamentul luminii și modul în care aceste elemente pot crea noi peisaje și atmosfere pentru spectacole multidisciplinare. Lucrările ei recente se concentrează pe micro-realități și peep media. Sasaki a lucrat ca producător și manager cultural mai bine de zece ani și a urmat studiile la Purple Cloud Calligraphy Association 紫雲 din Tokyo.",
                "text-main-after-ego": "Empatia este un proces care te duce dincolo de tine pentru a îi simți pe ceilalți. Numai depășind ego-ul ne putem întoarce atenția autentic către altcineva și să observăm conexiunea profundă pe care o împărtășim.<br/><br/>\n" +
                    "Personalitatea, experiențele și mediul care ne-au format influențează cât de empatici putem fi. Cu deschidere și răbdare, morfoza ta cu subiectul către care te îndrepți cu empatie se întâmplă. <br/><br/>\n" +
                    "Această instalație oferă o experiență interactivă în care imaginea vizitatorului se contopește treptat cu portretul unui străin, în funcție de timpul investit în acest proces empatic. ",
                "text-main-author-after-ego": "<b>RIZI</b> este un studio de design cross-media fondat în 2013, care activează la intersecția dintre arhitectură, comunicare vizuală și tehnologie. Proiectele studioului vizează atât spațiul fizic, cât si pe cel virtual, având ca focus experiența umană pe toate palierele: rațională, emoțională, senzorială. <br/><br/>\n" +
                    "Misiunea RIZI este axată pe crearea de conexiuni, prin intermediul mediilor diverse, între oameni și informație. Transpunerea mesajelor este facilitată de designul calibrat pe mediul cel mai potrivit în funcție de proiect, variind de la grafică la obiecte de design sau spații interioare, platforme digitale, instalații sau expoziții.",
                "text-main-anima": "În încercarea de a te apleca mental asupra conceptului de suflet, precum și de a te apropia emoțional de un altul, avem de multe ori senzația că ne aflăm în fața unui abis. Reflectă oare această imposibilitate conceptuală ori incapacitate emoțională cu adevărat o absență?<br/><br/> Sufletele celorlalți ne rămân invizibile, asupra lor nu putem face decât presupuneri - poate corecte, poate false. Sufletul nostru îl numim și-l căutăm, îl protejăm și ni se frânge, uneori se bucură, ni se așază călduț aproape de inimă. Putem crede oare că nu este cu adevărat acolo?<br/><br/> Acestea sunt câteva dintre întrebările și ideile de la care a pornit instalația „Anima”. Ea este despre un univers invizibil adus la lumină, o posibilitate materializată de a vedea și de ne vedea dinspre interior, dinspre întunericul galaxiei către lumina din noi și dinspre întunericul inițial către cel final, între care însă pulsează (o) viață. ",
                "text-main-author-anima": "<b>Denis Simion</b> este sculptor și al doilea nume al său ar putea fi “inima”. De ce inima? De-a lungul timpului a dezvoltat o adevărată dragoste pentru forma anatomică a inimii, care a devenit și laitmotivul creațiilor sale în ultimii 7 ani.<br/><br/>\n" +
                    "Se definește ca un artist al sufletelor, pentru că mereu a vrut să imortalizeze în arta sa stările sufletului, mai întâi ale ei, iar apoi ale ființelor din jurul său.",
                "text-main-wimp": "În 2019, la etajul al doilea al unui bloc dintr-un cartier bucureștean, o furtună de vară stârnește imaginația artistului și devine catalizatorul scrierii unor povești în curs de a fi descoperite. Imaginându-și că ramurile nucului care bat în geam devin vocea vântului și îi spun povești de demult, artistul își propune să regizeze la nivel grafic transmiterea acestor mesaje de departe și de demult.<br/><br/> Cu ajutorul nucului înzestrat cu un liner care desenează pe o coală de hârtie, într-un ritm dictat de vânt, Alexandru reușește să înregistreze o serie de povești, care lasă loc imaginației privitorilor în a construi intrigi și personaje care traversează timpul și spațiul.<br/><br/> În perioada pandemiei, Alexandru a continuat să regizeze și să adune peste 40 de povești desenate de nucul de la geam.",
                "text-main-author-wimp": "Alexandru Claudiu Maxim este un artist vizual, editor video, membru în grupul artistic Pastila Roz și manager The Art Machine.",
                "text-main-ear-to-ear": "Cât de deschis ești să împărtășești cel mai ascuns secret al tău cu oameni necunoscuți? Prin această instalație participativă, Anaïs invită oamenii să-și mărturisească în mod anonim secretele, pe care le înregistrează și le redă publicului prin intermediul unor urechi de ceramică. În felul acesta, artista a strâns o mulțime de povești variate din toată lumea, pe care le va dezvălui la NOVA împreună cu cele colectate din România. <br/><br/>\n" +
                    "Lucrarea aduce împreună tehnologii mai vechi și mai noi pentru a aborda cu sensibilitate acest spațiu intim al confesiunii împărtășite. Proiectul este aliniat demersului recent de cercetare al artistei care explorează relația dintre identitate și câmpurile numerice.",
                "text-main-author-ear-to-ear": "<b>Anaïs Lossouarn</b> este o tânără artistă franceză care lucrează cu mecatronica.<br/><br/>\n" +
                    "Întrebarea centrală a muncii ei vizează dependența umană față de tehnologii. Ea explorează și găsește inspirație în legăturile intime pe care le stabilim cu mașinile digitale, creând lucrări care combină umorul și absurdul prin juxtapunerea mediilor vechi și noi. Subiectele care îi stârnesc curiozitatea includ vechiul, hacking-ul și viața artificială. <br/><br/>\n" +
                    "Folosindu-și abilitățile în mecatronică, lucrările sale recente explorează animarea neașteptată a obiectelor prin diferite tehnici. Această deturnare sau reapropriere care folosește sunetul, mișcarea și elementele vizuale, oferă acestor obiecte obișnuite o anumită poezie, deoarece se comportă în moduri neașteptate.\n" +
                    "Este licențiată la Ecole Supérieure d’Art d’Aix-en-Provence și este în prezent studentă la un masterat cu specializare în „Artă în timp real”.",
                "cinetic": "CINETic / Centrul Internațional de Cercetare și Educație în Tehnologii Inovativ Creative, Str. Tudor Arghezi, 3B",
                "available-places": "Locuri disponibile",
                "text-main-space-and-spatiality": "Instalațiile de artă ca practică artistică experiențială multisenzorială vor estompa în mod deliberat granițele dintre formă și funcție. Una dintre funcțiile lor unificatoare este redefinirea și reorganizarea spațiului. <br/><br/> Spre deosebire de formele de artă plastică bidimensionale, cum ar fi pictură și obiectele sculpturale, instalațiile influențează direct modul în care un spectator percepe mediul înconjurător și invers. O instalație în situ, în trei locuri separate, are ca rezultat trei experiențe vizuale foarte distincte și separate. Calitățile formale și funcționale ale unei instalații sunt în cele din urmă afectate de contextul cadrului fizic al lucrării.  <br/><br/> Instalația ca practică îmbină conceptele de transformare a spațiului, comentariul vizual socio-politic și nevoia de implicare și interacțiune umană pentru ca astfel de lucrări să devină „complete”. Mulți artiști contemporani lucrează cu elemente spațiale și ideea de spațialitate, nu numai de dragul spațiului în sine, ci și folosindu-l ca instrument metodologic pentru a-și satisface propriile nevoi artistice.<br/><br/> Această prezentare explorează câteva perspective despre modul în care spațiul influențează percepția oamenilor asupra unei piese de instalație de artă și abordează subiecte precum spațiul ca o extensie a instalațiilor de artă, de ce spațiul este esențial în design, cum comunicăm prin spațiu, care sunt elementele prin care un spațiu comunică, interacțiunea și elemente spațiale care amplifică experiența imersivă.",
                "text-main-author-space-and-spatiality": "<b>Iulia Gherghescu</b> este scenograf, cercetător și lector asociat în cadrul UNATC. Experiența sa cuprinde proiecte în teatru ca designer de décor si costume, in film, ca designer de spațiu pentru evenimente și creație de instalații pentru proiecte de performance art. Ca designer și în cercetare este interesată de metodele interdisciplinare de dezvoltare de spații transformabile și interactive pentru amplificarea potențialul lor scenografic.",
                "text-main-metaverse-1": "Realitatea virtuală și realizarea de filme 360 devine rapid o parte fundamentală a industriilor de film si media entertainment. Propunem o introducere în creația de VR/360 cu un atelier cuprinzător, care oferă participanților instrumentele, cunoștințele și abilitățile necesare pentru a-și crea propriile experiențe imersive. Pe parcursul cursului, voi oferi o explicație clară și precisă a procesului de realizare a conținutului 360 real sau virtual, de la pre-producție până la distribuție. Conținutul cursului include, dar nu se limitează la, prezentarea generala a VR/360, terminologie, tehnologie, selecția camerei, funcționarea camerei, poziționarea camerei și a actorilor, iluminare, editare, stăpânire conținut pentru căștile de VR și online. Acest atelier este conceput pentru a oferi o abordare tehnică, captivantă și practică a învățării acestui nou mediu.",
                "text-main-author-metaverse-1": "<b>Marius Hodea</b> este creator de spații digitale, cu focus pe realitate virtuală, în special medii virtuale în relație cu experiența umană. Asistent cercetare în cadrul CINETic București și în curs de finalizare a studiilor doctorale în cadrul Universității Naționale de Artă București, Marius are o experiență bogată în creația VR atât la nivel de design cât și de implementare, contribuind prin activitatea sa la dezvoltarea de idei și tehnici, oferind consultanță în proiecte de cercetare și educație în domeniu și având o activitate artistică prolifică. ",
                "text-main-metaverse-2": "Un spațiu colectiv, virtual, creat prin convergența realității fizice cu virtualul, obiecte și spații îmbunătățite. Metaversul promite medii pe scară largă și persistente pentru ca utilizatorii să împărtășească experiențe la intersecția dintre fizic și digital. Dacă vom avea o lume 3D digitală, va trebui să o umplem cu lucruri, și nu doar cu o mână de obiecte, vom avea nevoie de suficiente obiecte 3D pentru a crea o lume bogată, vibrantă, plină de obiecte digitale care oglindesc realitatea fizica cu care suntem obișnuiți. Astfel acest atelier prezinta o metoda de a trece obiectele reale în metavers folosind fotogrametria. Prin tehnica fotogrammetriei extragem informații 2D  din fotografii și apoi le procesam pentru a obține un obiect 3D.",
                "text-main-sound-design": "Lumea sonoră în care suntem imersați încă din primele momente de viață ne oferă nenumărate experiențe de ascultare, active sau pasive, pe baza cărora ne formăm reprezentări, asocieri și așteptări perceptuale. Aproape oricine poate recunoaște sunetul unei mașini, ciripitul unor păsări sau sunetul produs de valurile mării. <br/><br/>Astfel de automatisme perceptuale constituie pilonii care ghidează un sound designer atunci când realizează sunetul unui film, al unui joc, sau a unei instalații. Lucrurile, însă, stau diferit atunci când un sound designer concepe sunetul unor lumi abstracte, imaginare, fără corespondent în lumea reală. <br/><br/>Cum ar putea suna o gaură neagră? Dar două figuri geometrice care interacționează? Pe ce se bazează un sound designer în fața unor astfel de provocări? În ce măsură poate prelua anumite asocieri sonore din lumea reală pentru a crea o lume imaginară? Workshopul își propune să pornească o discuție pe baza acestor întrebări, încercând să ofere și câteva potențiale abordări în practica de sound design pentru astfel de lumi imaginare.",
                "text-main-author-sound-design": "<b>Ștefan Damian</b> este un sound designer, compozitor și lector asociat la Facultatea de Film a UNATC I.L. Caragiale. A lucrat ca producător, compozitor, inginer mix, sound designer și interaction designer pentru o varietate de proiecte muzicale, cinematografice și instalații. O parte din subiectele sale de explorare artistică includ metode de sinteză de sunet, spațializare și design de interacțiuni sonore.",
                "text-main-style-gan": "StyleGAN este un model deep learning pentru generare de imagini într-un anumit <i>spațiu latent</i> obținut din antrenarea pe o anumită categorie de imagini (e.g. portrete, peisaje, poze cu animale etc). Chiar dacă în ultimii 1-2 ani atenția a fost captată de modelele text-to-image (DALL-E, Midjourney, Stable Diffusion…), modelele tip StyleGAN rămân atractive pentru explorarea fluidă a spațiului. Acest fel de aplicații (latent walk, projection), controlate în timp real, fac subiectul acestui workshop. <br/><br/>Workshop-ul este deschis oricui dar experiența cu Python, PyTorch, Google Colab etc va fi utilă pentru partea practică.",
                "text-main-author-style-gan": "<b>Grigore Burloiu</b> este lector în departamentul Animație și Interactivitate al UNATC, unde coordonează programul de master Tehnologii interactive pentru arte performative și media (ITPMA), în cadrul căruia predă programare creativă și sisteme muzicale interactive.<br/> Grigore dezvoltă sisteme de acompaniament expresiv pentru muzica interactivă, și explorează utilizarea AI în artă - în special pentru sunet și text. A colaborat la numeroase lucrări artistice dintre care CORPUS VIDERUM (Ryan Walsh 2022, cu Hans Brouwer), VIOLIN CONCERTO (Fred Popovici 2021, cu Patricia Kopatchinskaja), LOST INTERFERENCES (Alexandru Berceanu 2021), URBAN DELTA SCAPES (Anne Dubos, IRCAM & CINETic 2019). <br/><br/> Academic: <a href=\"https://orcid.org/0000-0002-9059-9621 \">https://orcid.org/0000-0002-9059-9621 </a> <br/> Site: <a href=\"https://rvirmoors.github.io/\">https://rvirmoors.github.io/</a> <br/> Code: <a href=\"https://github.com/rvirmoors\">https://github.com/rvirmoors</a> <br/> Email: grigore.burloiu@unatc.ro",
                "text-main-deep-learning": "GPT-3 de la OpenAI este cel mai faimos și puternic model generativ de NLP (natural language processing), dar rezultate impresionante pot fi obținute și din modele mai mici, derivate din GPT-2. Acestea din urmă au avantajul că le putem antrena pe propriile dataset-uri (colecții de texte), urmând ca apoi să le plasăm în situații dorite de noi. <br/><br/>În acest workshop voi demonstra cum am creat un chatbot / oracol care răspunde la întrebările user-ului despre viitor bazat pe un set de texte speculative. Puteți folosi aceleași principii pentru a vă crea propriile situații textuale interactive. <br/><br/>Nu sunt necesare cunoștințe de programare. Noțiuni de bază despre deep learning și mediul Google Colab sunt binevenite însă.",
                "text-main-zimmt": "Anul acesta, festivalul se extinde cu un proiect-laborator, care aduce la București instalația de sunet 3D a centrului german de artă imersivă, muzică și tehnologie ZiMMT. \n" +
                    "<br/><br/>\n" +
                    "Timp de 4 zile (5-8 decembrie), instalația devine gazda unor performance-uri inedite, susținute de DJs, interpreți, instrumentiști, trupe, sound designeri de pe scena de muzică locală. Împreună cu publicul, aceștia vor experimenta un cadru nou, imersiv, pentru muzica lor. \n" +
                    "<br/><br/>\n" +
                    "Felix Deufel, inițiatorul ZiMMT, va susține aici și un workshop pentru cei interesați să învețe specificitățile unei construcții audio tridimensionale.",
                "text-main-author-zimmt": "<b>ZiMMT</b> este o galerie, un spațiu de producție multimedia, o sală de concerte, un laborator de cercetare și o rețea de artiști și profesioniști care susțin inovația. Centrul oferă o platformă deosebită pentru diverse aplicații artistice imersive și experimente creative. Este una dintre puținele instituții culturale dotate cu un sistem audio 3D inovator format din 36 de difuzoare. Acesta permite dezvoltarea și prezentarea unor concerte imersive, care învăluie întregul spațiu, expoziții și performance-uri inedite. Pe lângă schimbul interdisciplinar dintre artiști și dezvoltatori, centrul se focusează în mod particular pe activități educaționale.\n" +
                    "<br/><br/>\n" +
                    "ZiMMT 3D Sound Lab este o experiență oferită de IQOS și se adresează doar persoanelor cu vârsta peste 18 ani.\n" +
                    "<br/><br/>\n" +
                    "Workshopul este parte din secțiunea EDU a festivalului, organizată în parteneriat cu Goethe-Institut București și CINETic/Centrul Internațional de Cercetare și Educație în Tehnologii Inovativ Creative al UNATC. \n",
                "text-main-nova-talks-program": "<b>PROGRAM:\n" +
                    "<ul>\n" +
                    "<li>PANELUL I: 11:00 – 13:00 </li>\n" +
                    "<li>COFFEE BREAK: 13:00 – 13:30 </li>\n" +
                    "<li>PANELUL AL II-LEA: 13:30 – 15:30 </li>\n" +
                    "</ul>\n" +
                    "</b>",
                "text-main-nova-talks": "<br/><br/>Prin acest eveniment, NOVA propune un maraton al inspirației și creează contextul unor discuții fascinante despre importanța noilor tehnologii în procesul creativ și în explorarea potențialul cognitiv uman. \n" +
                    "Astfel, în 26 noiembrie, la Cinema Elvire Popesco, publicul va cunoaște și va interacționa cu 6 speakeri, printre care se numără cercetători, dar și artiști ale căror lucrări sunt incluse în expoziția principală. \n" +
                    "Speakeri cu interese și profesii variate, aspect care se reflectă în caracterul interdisciplinar al lucrărilor lor, aceștia vin la București pentru a vorbi despre căutările care au stat la baza proiectelor lor. \n" +
                    "<br/><br/>\n" +
                    "Și nu doar aceștia vor urca pe scenă. Eva, robotul umanoid acționat cu puterea minții, va veni în premieră în România și va dialoga cu participanții din sală, în cadrul unui lecture-performance susținut de artista și cercetătoarea Maša Jazbec. \n" +
                    "<br/><br/>\n" +
                    "Temele de discuție vor aluneca ușor de la roboți la neuroștiință, de la storytelling la spiritualitatea inteligenței artificiale și la rolul acesteia în reconstruirea propriilor amintiri, de la cunoașterea sinelui conștient și inconștient până la conectarea profundă cu mediul înconjurător cu ajutorul tehnologiei. \n" +
                    "<br/><br/>\n" +
                    "Toate vorbesc despre pasiunea și curiozitatea acestor artiști, pregătiți să răspundă la întrebări și deschiși să interacționeze cu publicul român. ",
                "text-main-author-nova-talks-panel-1": "PANELUL I",
                "text-main-author-nova-talks-panel-2": "PANELUL II",
                "text-main-nova-talks-masa": "<h2>MAŠA JAZBEC// LECTURE - PERFORMANCE: What kind of future do you envision with robots? </h2><br/><br/>" +
                    "Parte din echipa care a dezvoltat instalația <a href=\"otherlands.html\">Otherlands</a>, inclusă în expoziția NOVA de anul acesta, și creatoarea robotului umanoid Eva, Maša va deschide această secțiune a festivalului cu un lecture-performance structurat în două părți. În prima parte, ea va explora implicațiile cercetărilor privind interacțiunea om-robot. Artista susține că studiul roboticii nu poate evolua fără a cunoaște în profunzime natura umană. Tocmai de aceea, cercetările sale sunt interdisciplinare, trecând rapid de la inginerie și știință socială, la știință cognitivă, neuroștiință, etică și chiar artă. În cadrul acestui eveniment, Maša va vorbi despre Știința Androidă și despre modul în care dezvoltarea roboților similari oamenilor poate contribui la cercetarea cognitivă. \n" +
                    "<br/><br/>\n" +
                    "În partea a doua a prezentării, Maša va face o demonstrație participativă, prin care va arăta interacțiunea sa cu robotul umanoid Eva, acționat cu puterea minții prin intermediul unui sistem BCI (brain-computer interfaces). Capabil să citească mințile, roboțelul Eva ilustrează perfect comunicarea directă dintre om și mașini, cu ajutorul tehnologiilor de tip neuroimagistică. Odată cu creșterea interesului față de BCI, au apărut noi utilizări ale acestuia în afara domeniului medical, pentru utilizatorii sănătoși. Una dintre acestea este integrarea BCI cu alte tehnologii interactive, cum ar fi robotul Eva. În aceste configurații, utilizatorii controlează un corp robotic umanoid și navighează prin spațiul fizic prin puterea propriei activități cerebrale.\n" +
                    "<br/><br/>\n" +
                    "La finalul prelegerii, câțiva participanți vor avea șansa de a interacționa direct și de a manipula robotul Eva, dar și de a adresa întrebări artistei. ",
                "text-main-author-nova-talks-masa": "<b>Maša Jazbec</b> este artistă, curatoare și cercetătoare. Ea deține un doctorat în informatica umană, obținut la Universitatea Tsukuba (Virtual Reality Lab) din Japonia și un masterat în artă interactivă, susținut la secțiunea Interfață Culturală, la Universitatea de Arte și Design Linz. A fost invitată la Laboratorul Ishiguro de la ATR, unde și-a aprofundat cercetările în ceea ce privește robotica asemănătoare omului și știința androidă, dar și în practic. Ea se află în spatele viziunii și execuției proiectului Trbovlje New Media Setting în Slovenia și a organizat evenimente care aduc la un loc știința, arta și tehnologia la festivalul de cultură a noii media Speculum Artium (2013 – 2018).\n" +
                    "<br/><br/>\n" +
                    "Proiectele ei, expuse ca opere de artă, au reliefat întotdeauna înțelegerea ei privind noile media ca practică artistică de cercetare, izvorâtă din gândirea artistică și științifică, strâns legată de situația actuală din societatea contemporană. Cele mai recente interese de cercetare ale ei sunt concentrate în principal pe robotica socială și știința android. Ea și-a prezentat cercetările la conferințe precum Computer Human Interaction, Human Robot Interaction, ISEA și System Man and Cybernetics IEEE, ACM Siggraph Sparks. Și-a expus lucrările în platformele de artă ale festivalului unor festivaluri precum Ars Electronica, SONICA, Festivalul de Artă Digitală din Atena, Lab30, Kiblix, ISEA, Tsukuba Media Art Festival, PixxelPoint, R.O.R. Ea a fost în juriul Premiilor Ars Electronica Golden Nika 2018 și în juriul Asia SIGGRAPH 2021.\n" +
                    "<br/><br/>\n" +
                    "În prezent, conduce Laboratorul de Robotică Creativă din Trbovlje, Slovenia, în cadrul McRUK și Katapult.\n" +
                    "<br/><br/>\n" +
                    "<a href=\"http://masajazbec.si\">http://masajazbec.si</a>",
                "text-main-nova-talks-costin": "<h2>COSTIN DĂMĂȘARU // Cum poate facilita neurotehologia comunicarea intimă dintre sinele conștient și cel subconștient?</h2><br/><br/>" +
                    "Într-o lume în care fluxul de informații este din ce în ce mai mare, iar attention span-ul devine mai mic decât al unui peștișor auriu, cum ar putea, în mod paradoxal, să ne ajute tehnologia să ne utilizăm mai inteligent resursele interioare?<br/><br/>\n" +
                    "Intimitatea la nivelul dialogului interior devine în acest moment al evoluției noastre un factor cheie, însă cum putem facilita de fapt acest proces interior?<br/><br/>\n" +
                    "Antrenamentul neuronal realizat cu ajutorul tehnologiei Brain Mapping și Brain Computer Interface devine o soluție tot mai accesată în ceea ce privește îmbunătățirea și crearea contextelor favorabile unui dialog interior intim între sinele conștient și cel subconștient.",
                "text-main-author-nova-talks-costin": "<b>Costin</b> a studiat la MIT (Massachusetts Institute of Technology) din Boston, SUA, în cadrul programului de Executive Education – Neuroscience for Leadership. Acolo a lucrat cu cercetători de renume la nivel global, în domeniul îmbunătățirii performanței creierului uman folosind tehnologia Brain Mapping și Brain Computer Interface.<br/><br/>\n" +
                    "Este Doctor în Management, licențiat în Psihologie, a obținut un Masterat în Administrarea Afacerilor și în prezent este Doctorand în Fizică, în cadrul Facultății de Științe Aplicate din București.<br/><br/>\n" +
                    "Este fondatorul și directorul general al Centrului de Cercetare în Augmentarea Performanțelor Neuronale, Veruvis, un proiect de o viață pentru el, adânc înrădăcinat în călătoria sa de vindecare. Misiunea sa este de a ajuta oamenii să-și acceseze imensa putere de vindecare a creierului și să își atingă potențialul maxim.",
                "text-main-nova-talks-monika": "<h2>MÓNICA RIKIĆ // Criza existențială a unor mașini conștiente</h2>\n" +
                    "<br/><br/>\n" +
                    "Datorită dezvoltării științifice și tehnologice, știm că nu vom ști niciodată totul. Trebuie să învățăm și să trăim cu incertitudine și mister. Gândirea creativă și arta, în special, sunt o practică prin care explorăm necunoscutul fără să căutăm un răspuns absolut la toate, deoarece uneori pur și simplu nu există răspuns, ci întrebări noi care sunt a priori de neimaginat. În această discuție, Mónica va explora câteva exemple și propuneri despre cum putem naviga propriile anxietăți despre prezentul și viitorul nostru tehnologic împreună, folosind arta pentru a crea spații comune de reflecție și discuții afective. Instalația ei de ficțiune futuristă New Home of Mind este inclusă în expoziția NOVA în acest an.",
                "text-main-author-nova-talks-monika": "<b>Mónica Rikić</b> este o artistă de origine spaniolă a cărei practică este concentrată în jurul programării creative, roboticii, electronicii și a obiectelor non-digitale, folosite pentru a crea proiecte interactive adesea considerate jocuri experimentale. <br/><br/>\n" +
                    "Interesul artistei merge în direcția impactului social al tehnologiei și al reimaginării relației om-mașină prin artă.  <br/><br/>\n" +
                    "Mónica este licențiată în Arte Plastice și a absolvit două masterate: Arte Digitale (UPF) și Filosofie Contemporană (UOC). Doctorand în programul doctoral Rețele și Tehnologii Informaționale (UOC).\n" +
                    "Proiectele sale au fost prezentate în numeroase contexte relevante în jurul lumii (Ars Electronica, Creative Tech Week New York, Robotronica Australia, FILE Brazilia, Centre de Cultura Contemporània de Barcelona, Arts Santa Mónica) și premiate, printre altele, de Consiliul Național de Cultură și Arte al Cataloniei, Japan Media Arts Festival, AMAZE Berlin, Margaret Guthman Musical Instrument Competition în Atlanta.\n" +
                    "<br/><br/><a href=\"http://monicarikic.com\">monicarikic.com</a>",
                "text-main-nova-talks-nomi": "<h2>NOMI SASAKI // Peep Media în vremurile digitale și reconstrucția spațiilor personale prin AI</h2>\n" +
                    "<br/><br/>\n" +
                    "Prin această prezentare, artista va împărtăși o parte din cercetarea ei cu privire la dezvoltarea istorică a peep media și prezența acesteia în vremurile digitale, analizând și comparând diferite opere de artă bazate pe actul de tip peeping. Această cercetare susține că peep media și spectacolele one-to-one sunt, în zilele noastre, un răspuns la un stil de viață multitasking-hiperconectat, în care este din ce în ce mai dificil să te bucuri de spațiul personal, intimitate și relații interpersonale nemediate. De asemenea, această cercetare subliniază faptul că peep box ca obiect conține spiritul timpului său, o versiune condensată și miniaturizată a propriei realități și, prin urmare, reflectă cunoștințele și aspirațiile momentului în care există.\n" +
                    "<br/><br/>\n" +
                    "<a href=\"senrian.html\">SenriAn</a> este o instalație peep media, inclusă în expoziția NOVA anul acesta, creată după cercetări în acest format special și explorează amintirile de familie ca date și modul în care acestea pot fi reconstruite prin AI. Cum ne vom aminti în viitor? Vor avea aceste amintiri aceeași dimensiune emoțională și senzorială?",
                "text-main-author-nova-talks-nomi": "<b>Nomi Sasaki Otani</b> (*Lima, 1986) este o artistă vizuală cu origini japoneze și peruane. Doctorandă la Universitatea de Artă și Design Linz, în colaborare cu Universitatea de Arte din Zurich, cercetarea ei artistică se concentrează pe arta interactivă privind prelucrarea datelor cu caracter personal și drepturile copiilor în domeniul digital. Ea deține o diplomă de licență în Științe ale Comunicării de la Universitatea din Lima și un masterat la departamentul Interface Cultures al Universității de Artă și Design din Linz.\n" +
                    "<br/><br/>\n" +
                    "Sasaki este dedicată tradiției și animației cu cerneală neagră chinezească. Opera ei de artă explorează scara și dimensiunea, natura materială a apei, comportamentul luminii și modul în care aceste elemente pot crea noi peisaje și atmosfere pentru spectacole multidisciplinare. Lucrările ei recente se concentrează pe micro-realități și peep media. Sasaki a lucrat ca producător și manager cultural de mai bine de zece ani și a urmat studiile la Purple Cloud Calligraphy Association 紫雲 din Tokyo.\n" +
                    "<br/><br/><a href=\"http://nomisasaki.com\">nomisasaki.com</a>",
                "text-main-nova-talks-noor": "<h2>NOOR STENFERT KROESE // Locuri de întâlnire pentru oameni și entități non-umane</h2>\n" +
                    "<br/><br/>\n" +
                    "Dintr-o perspectivă critică post-umană, lucrările artistei new media și scenografei Noor Stenfert Kroese evoluează în jurul relației dintre uman și non-uman. În cadrul prezentării sale, ea va vorbi despre lucrarea ei – RHIZA - și despre cercetarea continuă privind colaborarea cu ciuperci și alte entități non-umane. \n" +
                    "O meditație asupra relației profunde dintre oameni și mediul înconjurător, RHIZA este o instalație interactivă transdisciplinară, la granița dintre biologie, natură și tehnologie. Inclusă în expoziția de anul acesta de la NOVA, această instalație vie este inspirată de dinamica rețelei de conexiuni fungice, cunoscută drept wood wide web, prin care plantele dialoghează constant. Pentru a ilustra conexiunea dintre oameni și mediul vegetal, instalația facilitează accesarea acestui dialog subtil, prin apelarea la propriile noastre rădăcini: tălpile. Un discurs despre importanța creării unei punți între uman și non-uman, pentru a stabili o conexiune nemijlocită.",
                "text-main-author-nova-talks-noor": "<b>Noor Stenfert Kroese</b> este o artistă interdisciplinară de origine olandeză. În prezent își finalizează studiul masteral la Universitatea de Artă și Design din Linz, departamentul Interface Cultures, unde dezvoltă activitatea studioului său de creație prin colaborări inedite. <br/><br/>\n" +
                    "Noor lucrează în diverse medii, cum ar fi arta biologică, teatrul și arta new media. Creațiile sale urmăresc conectarea și integrarea publicului în operă. Interacțiunea între oameni și entități non-umane este un subiect central în munca sa. Instrumentele pe care artista le folosește, dar și maniera sa de lucru arată un interes pentru împletirea perspectivelor noi cu cele vechi și astfel, lucrările artistei nu oferă un răspuns, ci caută mai degrabă spațiul pentru a pune întrebări și a experimenta. Dintr-o perspectivă postumană, ea explorează posibilitățile de a ocupă un loc conștient în rețeaua în mișcare și incontrolabilă din care facem parte.\n" +
                    "Lucrările Studioului Stenfert Kroese au fost expuse și interpretate în locații și festivaluri precum Barcelona Design week (ES), EYE Filmmuseum Amsterdam (NL), Dutch National Opera & Ballet (NL) și Festivalul Ars Electronica (AT). Lucrările ei au primit premii de la YouFab Global Awards (JP) și Prins Bernhard Young talent Award (NL).\n" +
                    "<br/><br/>\n" +
                    "<a href=\"http://stenfertkroese.com/\">stenfertkroese.com</a>",
                "text-main-nova-talks-anais": "<h2>ANAIS LOSSOUARN // Intimitatea în spații numerice</h2>\n" +
                    "<br/><br/>\n" +
                    "Este cunoscut deja faptul că platformele virtuale reprezintă o parte semnificativă a interacțiunilor noastre zilnice și creează multiple straturi ale realității. Acestea reprezintă fragmente dematerializate ale memoriei și ale personalității noastre. Artista din spatele instalației sonore participative Ear to Ear, prezentă la NOVA, Anais va vorbi despre diferitele aspecte ale mediilor și tehnologiilor digitale și despre influența acestora asupra artei. Ca artistă care iubește storytelling-ul, prin lucrările ei încearcă să găsească un fir roșu al înregistrărilor pe care le-a adunat în timp ce lucra la acest proiect. Ideea de a împărtăși un secret cu oameni pe care nu îi cunoști oferă un aspect prețios acestor confesiuni. Acest lucru le permite oamenilor să se identifice cu ceilalți și creează un sentiment de intimitate. Ca artist care lucrează cu mecatronica, lucrarea sa recentă explorează relația dintre identitate și câmpurile numerice, demers care dă tema acestui discurs.",
                "text-main-author-nova-talks-anais": "<b>Anaïs Lossouarn</b> este o tânără artistă franceză care lucrează cu mecatronica.<br/><br/>\n" +
                    "Întrebarea centrală a muncii ei vizează dependența umană față de tehnologii. Ea explorează și găsește inspirație în legăturile intime pe care stabilim cu mașinile digitale, creând lucrări care combină umorul și absurdul prin juxtapunerea mediilor vechi și noi. Subiectele care îi stârnesc curiozitatea includ vechiul, hacking-ul și viața artificială. Folosindu-și abilitățile în mecatronică, lucrările sale recente explorează animarea neașteptată a obiectelor prin diferite tehnici. Această deturnare sau reapropriere care folosește sunetul, mișcarea și elementele vizuale, oferă acestor obiecte obișnuite o anumită poezie, deoarece se comportă în moduri neașteptate.\n" +
                    "<br/><br/>\n" +
                    "Este licențiată la Ecole Supérieure d’Art d’Aix-en-Provence și este în prezent studentă la un masterat cu specializare în „Artă în timp real”.\n" +
                    "<br/><br/>\n" +
                    "<a href=\"http://anaislossouarn.journoportfolio.com\">anaislossouarn.journoportfolio.com</a>",
                "program-full": "23 NOV - 17 DEC<br/>\n" +
                    "MARȚI - VINERI 16:00 - 21:00<br/>\n" +
                    "SÂMBĂTĂ: 11:00 - 21:00",
                "edition-2018": "Ediția 2018",
                "edition-2021": "Ediția 2021",

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

        $('.prevent-default-click').on("click", function() {
            $this.preventDefault();
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
        $(".div-button").on("click", function() {
            window.location = $(this).attr("href");
            return false;
        });

        $(".div-button-new-tab").on("click", function() {
            window.open($(this).attr("href"),'_blank');
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