jQuery(function ($) {

    $(function(){
        $("#footer-module").load("footer.html");
        $("#header-video").load("header-video.html");
        // $("#modal-dialog-popup").load("modal.html");
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
        $(".performance, .artist-talks, .workshops, .festival, .nova-grow").hide(delay, 'swing', function () {

            if ($(".performance:visible").length === 0 &&
                $(".artist-talks:visible").length === 0 &&
                $(".workshops:visible").length === 0 &&
                $(".nova-grow:visible").length === 0) {
                if (id === 'festival') {
                    refreshCalendarDateSpacings(".calendar-day-container");
                    $(".performance").show(delay, 'swing');
                    $(".artist-talks").show(delay, 'swing');
                    $(".workshops").show(delay, 'swing');
                    $(".festival").show(delay, 'swing');
                    $(".nova-grow").show(delay, 'swing');

                } else if (id === 'performance') {
                    refreshCalendarDateSpacings(".performance");
                    $(".performance").show(delay, 'swing');
                } else if (id === 'artist-talks') {
                    refreshCalendarDateSpacings(".artist-talks");
                    $(".artist-talks").show(delay, 'swing');
                } else if (id === 'workshops') {
                    refreshCalendarDateSpacings(".workshops");
                    $(".workshops").show(delay, 'swing');
                } else if (id === 'nova-grow') {
                    refreshCalendarDateSpacings(".nova-grow");
                    $(".nova-grow").show(delay, 'swing');
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
                "start-date": "september 16",
                "ends": "ends",
                "end-date": "september 30",
                "open-info": "The exhibition is open Tuesday to Friday 16:00 - 21:00 and on Saturday 11:00 - 21:00",
                "festival": "Festival",
                "expo": "Expo",
                "performance": "Immersive Experience",
                "performances": "Immersive Experiences",
                "immersive-performative-installation": "Immersive performative installation",
                "immersive-interactive-installation": "Immersive interactive installation",
                "open-till-23": "open for exploration until 23.09",
                "open-till-23-16_22": "16:00 - 22:00",
                "open-till-28-14_22": "12:00 - 20:00",
                "open-till-28-16_22": "16:00 - 22:00",
                "nova-grow": "NOVA Grow",
                "artist-talks": "Talks",
                "nova-talks": "Nova Talks",
                "artist-talk": "Talk",
                "workshops": "Edu",
                "workshop": "Edu",
                "nov": "nov",
                "dec": "dec",
                "sep": "sep",
                "buy-tickets-pass": "buy festival pass",
                "buy-tickets-expo": "buy expo pass",
                "buy-tickets": "buy ticket in the hall",
                "buy-tickets-online": "buy ticket live stream",
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
                "expo-opening": "Opening event",
                "performative-installation": "performative installation/research setting",
                "drawing-exercises-2": "Drawing exercises, performative research setting part of Digital Sensemaking (DIGI-SENSE) // Claudia Schnugg, Daniela Brill ",
                "expo-closing": "Exhibition closing",
                "space-and-spatiality": "Space and spatiality in art installations // IULIA GHERGHESCU",
                "space-and-spatiality-detail": "Space and spatiality in art installations",
                "have-you-seen": "Have you seen my body? <br/><i>a seascape</i>",
                "tammy-lovin": "Claudia Schnugg (AT), Daniela Brill (AT), Vicente Matallana (ES), Tammy Lovin (RO), Florian Ruiz (FR)",
                "walk-a-rhythm": "Walk <br/> <i>a rhythm</i>",
                "roly-poly": "rolypoly~, an adaptive and generative drum machine designed for real-time performance // Grigore Burloiu",
                "bodies-of-light": "Bodies of light // Amélie Laurence-Fortin",
                "sonic-explorations": "Sonic Explorations // Denis Flueraru",
                "protocols-applied-to-production": "Protocols applied to the production, maintenance, and preservation of new media art. Practical cases from the .NewArt {foundation;} // Vicente Matallana",
                "aio-opening": "AIO all in one",
                "an-error-has": "an error has occurred. <br/> The aesthetic appeal of imperfection and glitches in visual images // M Kardinal",
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
                "text-main-drawing-exercises": "Drawing Exercises is a participatory performance piece by Antoni Rayzhekov for the DIGI-Sense project, a performative installation in which the audience become the performers. A series of drawings are performed by two participants together, who have to find out the movements, velocities, and strategies to carry them out. " +
                    "<br/><br/>"+
                    "The experience takes the participants through a sensemaking process in which they will develop different strategies and methods to draw, with their bodies, the figure they imagine with the given task." +
                    "<br/><br/>" +
                    "Sets of sensors on the bodies of the participants digitize the information produced by their bodies: their movements, their orientation, and even their heart rate and stress levels. This combined digital information produces a digital twin of their combined actions – a line to draw their envisioned outcomes." +
                    "<br/><br/>" +
                    "The DIGI-Sense project is funded as a Seed Project at the Linz Institute of Technology, which is realized at the Institute of Communications Engineering, part of the Linz Business School at the Johannes Kepler University Linz. ",
                "text-main-author-drawing-exercises": "<b>Antoni Rayzhekov</b> is an interdisciplinary artist working in the field of music, theatre and digital arts. He has a master degree in theatre directing and bachelor in drama acting at the National Academy for Theatre and Film Arts in Sofia. He studied jazz improvisation at the Vienna Konservatorium and computer programming at LearningTree  in London and was an IT consultant for the United Nations Office, Vienna. He is a co-founder of the Vienna-based New Media label THIS.PLAY[2013], focused on interactive technologies and art, and a associate lecturer since 2012 in the Media and Digital Technologies (Interactive Media / Experimental Media) at the University for Applied Science (St. Pölten, Austria) and since 2016, a guest lecturer at the National Academy of Art (Digital Arts MA program / 'Performative Media') - Sofia, Bulgaria. " +
                    "<br/><br/>" +
                    "<b>Claudia Schnugg</b> is Principal Investigator of the Digital Sensemaking (DIGI-SENSE) project at the Johannes Kepler University Linz, which is realized at the Communications Engineering Institute. She holds a PhD in social and economic sciences with an additional focus on cultural sciences. Her research focuses on art, aesthetics and artistic initiatives in interdisciplinary and social settings, such as change processes, digitalization and knowledge management, and explores implications and organization of art-science collaboration. As curator and consultant she is working internationally with industrial, scientific and artistic organizations to realize art-sci-tech projects. " +
                    "<br/><br/>" +
                    "<b>Daniela Brill</b> has a Master’s degree in Art & Science from the University of Applied ArtsVienna.  Daniela works in collaboration with scientific institutions and networks such as Art at CMS at CERN, the ORIGIN network of high energy physics, and with artistic institutions such as the ArtSci Center + Lab UCLA. Brill is the creator and co-organizer of Suratómica, a collaborative network of Art and Science based in Bogotá, Colombia. Daniela’s artistic and theoretical work focuses on the idea of in-disciplinarity and the wish to eliminate certain frontiers and boundaries aiming to find a space of queerness at many levels for creative processes and for the formation of new knowledge, researching mainly the areas of aesthetics and complexity. ",
                "text-main-aio-1": "Developed by Present Continuous Association, in collaboration with the Research Center for Neuro Performance Enhancement Veruvis, AIO is an immersive interactive installation that creatively illustrates anxiety and the ways in which it manifests in our body, translating relevant neural research data into sound and image. " +
                    "<br/><br/>" +
                    "The music in AIO is partly formed by converting EEG signals into musical notes. The video portraits humanize the experience and become a channel for your emotion, expressing through mimics, gestures and movement, various degrees of anxiety. " +
                    "<br/><br/>" +
                    "<b>Artistic direction:</b> Emilia Păunescu" +
                    "<br/>"+
                    "<b>Sound design:</b>: Bogdan Moroșanu" +
                    "<br/>"+
                    "<b>Image:</b> Florin Constantin" +
                    "<br/>"+
                    "<b>Coding of interactive interface:</b> Dragoș Iulian Matei" +
                    "<br/>"+
                    "<b>Distribution:</b> Ada Galeș, Alexandra Bălășoiu, Cătălin Diaconu, Cezar Grumăzescu, Denis Bolborea, Denisa Diaconescu, Dragoș Iulian Matei, Ema Alexandrescu, Florin Constantin, Oana Pușcatu, Simona Dabija",
                "text-main-aio-2": "<i>\"I started from the idea that we are all resonance chambers one for the other and I imagined this unconventional choir that sings your anxiety and helps you process it. <br/><br/>" +
                    "In the space of the installation you drop this weight from your shoulders and let it wash out through sound and the bodies of the people that form the choir. You see your anxiety moving other arms, other faces, going under other peoples skin. <br/><br/> " +
                    "AIO - all in one - is a common body, with many dimensions. It has both the overwhelming side of anxiety, that feels like \"everything piling up altogether at once\", but also the bright side, where we learn, one through the other, that we are whole.\"<br/> <br/><b>Emilia Păunescu</b></i>",
                "text-main-aio-3": "On AIO’s screens you discover a total of 55 videoportraits, accompanied by 5 sound compositions rendered in Quadrophonic format. All these paired with a certain degree of intensity of anxiety." +
                    "<br/><br/> " +
                    "The work is interactive and allows the visitors to modulate the sound and image in the space through a simple digital interface. Explore the space, select on the interface the level of anxiety you consider describes how you are feeling and your choice is expressed in the installation through a sound and video composition. ",
                "text-main-have-you-seen": "An immersive 15-minute experience that will take you deep in the oceans to find yourself in new, unexpected ways. Just like the other installation developed within NOVA lab, it’s purpose is to offer, for two visitors in turn, the feeling of being present in more than one place at the same time. " +
                    "<br/><br/> " +
                    "6 photo artists joined forces with 4 performers, 1 art director, 1 graphic designer, 2 creative coders and 4 professionals from psychology, communication and neuroscience, to create this interactive installation." +
                    "<br/><br/> " +
                    "Before you enter the installation we record your voice and photograph you in various postures. These digital imprints of your body are integrated in real time in the audio-visual setting of the installation." +
                    "<br/><br/> " +
                    "The stage is yours now. You are in the waves. It’s never something certain, is it? A performer guides you through this experience on stage." +
                    "<br/><br/> " +
                    "<b>Art direction and texts:</b> Emilia Păunescu" +
                    "<br/>" +
                    "<b>Photo artists:</b> Felicia Simion (RO), Mads Nissen (DK), Michele Bressan (IT/RO), M Kardinal (DE), Rachel Talibart (UK), Valentina Fusco (IT)" +
                    "<br/>" +
                    "<b>Performers:</b> Alexandra Bălășoiu (RO), Denisa Nicolae (RO), Ema Alexandrescu (RO), Judith State (RO)" +
                    "<br/>" +
                    "<b>Graphics:</b> Ana Cârlan (RO)" +
                    "<br/>" +
                    "<b>Creative coders:</b> Andrei Văcaru (RO), Victor Jercan (RO)" +
                    "<br/>" +
                    "<b>Psychology, communication & neuroscience professionals:</b> Ana Mirodonie (RO), Caroline Heimerl (AT) & Champalimaud Center for the Unknown (PT), Monica Cure (RO/SUA)" +
                    "<br/><br/> " +
                    "Access based on ticket and time slot reservation. ",
                "text-main-walk": "Developed within NOVA lab, with the collaboration of 7 photo artists, 4 performers, 1 art director, 1 graphic designer, 2 creative coders and 4 professionals from psychology, communication and neuroscience, Walk is an interactive installation that invites you to a simple game. " +
                    "<br/><br/> " +
                    "A performer meets you on stage and, together, you build a rhythm of your own, a personal walk, by moving in reaction to the images on the screens that surround you. " +
                    "<br/><br/> " +
                    "Your digital body, captured at the entrance in the installation, is integrated in some of the images on stage. This way you “inhabit” these new spaces, while your physical body is engaged in creating, with the performer, various ways to get closer and farther to these images, to react to them through movement. This generates a specific walk, with a certain musicality." +
                    "<br/><br/> " +
                    "Walk is a sort of open movement dialogue with everything that surrounds you. A playful way to get to know yourself." +
                    "<br/><br/> " +
                    "<b>Art direction:</b> Emilia Păunescu" +
                    "<br/>" +
                    "<b>Photo artists:</b> Felicia Simion (RO), Florian Ruiz (FR), Mads Nissen (DK), Michele Bressan (IT/RO), M Kardinal (DE), Rachel Talibart (UK), Valentina Fusco (IT)" +
                    "<br/>" +
                    "<b>Performers:</b> Alexandra Bălășoiu (RO), Denisa Nicolae (RO), Ema Alexandrescu (RO), Judith State (RO)" +
                    "<br/>" +
                    "<b>Graphics:</b> Ana Cârlan (RO)" +
                    "<br/>" +
                    "<b>Creative coders:</b> Andrei Văcaru (RO), Victor Jercan (RO)" +
                    "<br/>" +
                    "<b>Psychology, communication & neuroscience professionals:</b> Ana Mirodonie (RO), Caroline Heimerl (AT) & Champalimaud Center for the Unknown (PT), Monica Cure (RO/SUA)" +
                    "<br/><br/> " +
                    "Access based on ticket and time slot reservation. ",
                "text-main-error": "Experiența te poartă în lumea tehnicilor video analog și a electronicelor modificate, explorând allura imperfectului și glitch-urilor în mediile vizuale, în special în autoportrete. Vom analiza diferite fațete ale imaginilor în mișcare folosindu-ne de circuite disfuncționale pentru a scoate la lumină modul în care acestea pot modela un gest. " +
                    "<br/><br/> " +
                    "Scopul este să celebrăm imperfecțiunea, ca o declarație puternică la polul opus față de hyper-realitatea și goana după portretul perfect care domină cultura vizuală curentă." +
                    "<br/><br/> " +
                    "Prin exerciții aplicate și demonstrații, vom descoperi fascinația tehnologiei vintage și abilitățile sale speciale să evoce emoția prin defectele sale unice. Participanții vor experimenta cu distorsiunile vizuale neașteptate și artefactele ce rezultă din acest proces și vor învăța să le utilizeze ca instrumente potente de a crea autenticitate și profunzime." +
                    "<br/><br/> " +
                    "Hai să descoperi tărâmul neîmblânzit al electronicelor modificate și al sintetizatoarelor video și să îmbrățisezi erorile ca pe o sursă de inspirație. " +
                    "<br/><br/> " +
                    "<b>Nu este necesară experiență anterioară pentru a participa la acest workshop. Este așteptat să te simți confortabil să fii filmat și să îți explorezi elemente subtile, subconștiente din portretul tău. Workshopul este susținut în limba engleză.</b>",
                "text-main-author-error": "<b>M. Kardinal</b> is a Berlin-based visual artist working with photography, film, performance, and installation. She holds a Master of Arts degree in Fine Arts and has studied art history and fine arts in both Germany and Italy." +
                    "<br/><br/> " +
                    "Her particular interest in perceptual processes is reflected in her work, ultimately leading to the exploration and development of an abstract visual vocabulary that enables her to create a 'mental landscape of desire' in which the viewer actively participates in the process of conveying meaning. " +
                    "<br/><br/> " +
                    "In most of her work she uses obsolete analogue techniques and materials, fascinated by their unpredictable nature. Since 2016, she has collaborated with musicians, sound artists, and choreographers from Germany, Romania, Ukraine, and Canada to develop installations and audiovisual performances based on her artistic research into perceptual processes.",
                "text-main-new-art-title": "Protocols applied to the production, maintenance, and preservation of new media art. Practical cases from the .NewArt {foundation;}",
                "text-main-new-art": "The .NewArt {foundation;} & {collection;} is recognized not only for what it collects but also for how it does so. It has pioneered an entirely new approach to collecting, promoting programs for producing, preserving, and patronizing technological art, while encouraging debates on issues related to the integration of new technologies in art." +
                    "<br/><br/> " +
                    "Vicente Matallana, its director, with over 25 years of experience in the production, management, and development of technological art, is one of the foremost pioneers in this field." +
                    "<br/><br/> " +
                    "The .NewArt {foundation;} has established a series of stringent production and conservation protocols aimed at developing a sustainable technological artistic legacy for future generations. These protocols are made possible through collaborative efforts between the foundation and the Universitat Politècnica de València, and the Foundation have been further expanded and implemented through the NASS consortium, New Art Sustainable Services. This consortium includes partners such as Eurecat, Catalan Technological Center (ES), V2_ Lab for the Unstable Media (NL), Gallerie Charlot (FR), NIAL ART Boutique Law Firm (ES), Fraunhofer Institute for Applied Information Technology FIT (DE), and the .NewArt {foundation;} (ES)."+
                    "<br/><br/> " +
                    "Likewise, a set of best practices will be reviewed, encompassing contractual relationships with artists and institutions, project management protocols, and the development of sponsorship packages.",
                "text-main-author-new-art": "<b>Vicente Matallana</b> is the director of the .NewArt { foundation;} & { collection;}, as well as the founder and director of LaAgencia, an independent new media art company created in 1998 in Madrid. LaAgencia is engaged in programs and projects focused on electronic art as an alternative paradigm of research and knowledge. With Joasia Krysa, he has been the co-director of the Kunsthal Aarhus, Aarhus. He is member of the advisory board of Kurator, and project director of ArtFutura, the veteran digital art festival in Spain. He is member of the steering committee of the HacTe, Barcelona’s new hub for Art, Science, and Technology.",
                "text-main-title-rolypoly": "Rolypoly~ <br/> adaptive and generative drum machine",
                "text-main-rolypoly": "The time axis is underrepresented in recent AI Art advances. However, audio timing/groove can also be a locus for augmentation and generation. This workshop introduces rolypoly~, an adaptive and generative drum machine designed for real-time performance. Supplementary materials (source code, online documentation and tutorials) are also available." +
                    "<br/><br/>" +
                    "The workshop has two parts; you can join one, the other, or both."+
                    "<br/><br/>" +
                    "1. <b>Standard practice.</b> We run through the following steps:<br/>"+
                    "<ul>"+
                    "<li>writing a (section of) a song with rolypoly~ in mind</li>"+
                    "<li>\"rehearsing\" the song and fine tuning the model"+
                    "<li>performing the song, including improvisation sections where the model is allowed to deviate from the score and generate beats on the fly</li>"+
                    "</ul><br/>"+
                    "2. <b>Technology.</b> We will cover the basics of:<br/>"+
                    "<ul>"+
                    "<li>representing timing/groove sequences as time series for prediction and generation in Transformer models</li>"+
                    "<li>implementing these in PyTorch and pretraining on data such as the Groove MIDI Dataset</li>"+
                    "<li>adapting the model in TorchScript and LibTorch for embedding in C++ projects</li>"+
                    "<li>using the Min-API to implement the finetuning and inference pipelines into a Max object</li>"+
                    "</ul><br/><br/>"+
                    "At the end of the workshop, participants will have a comprehensive view of the options for creating and interacting with rolypoly~. They will also understand the inner workings of the rolypoly~ Max object and will have the ability to modify it or to create similar deep learning-powered tools.",
                "text-main-author-rolypoly": "<b>Grigore Burloiu</b> is a lecturer in the Animation and Interactivity department of UNATC, where he coordinates the master’s degree program Interactive Technologies in Performing and Media Arts (ITPMA). There, he teaches creative coding and interactive musical instruments."+
                    "<br/><br/>"+
                    "Grigore develops expressive background systems for interactive music and tackles the use of AI in art - especially for sound and text. He collaborated on the creation of numerous art works, such as CORPUS VIDERUM (Ryan Walsh 2022, with Hans Brouwer), VIOLIN CONCERTO (Fred Popovici 2021, with Patricia Kopatchinskaja), LOST INTERFERENCES (Alexandru Berceanu 2021), URBAN DELTA SCAPES (Anne Dubos, IRCAM & CINETic 2019).<br/><br/>"+
                    "Academic: <a href=\"https://orcid.org/0000-0002-9059-9621\">https://orcid.org/0000-0002-9059-9621</a><br/>"+
                    "Site: <a href=\"https://rvirmoors.github.io/\">https://rvirmoors.github.io/</a><br/>"+
                    "Code: <a href=\"https://github.com/rvirmoors\">https://github.com/rvirmoors</a><br/>"+
                    "Email: grigore.burloiu@unatc.ro",
                "text-main-sonic-explorations": "Explore the intersection of sound, electronics and the human habitat by building your contact microphone and capturing the unseen movements surrounding us."+
                    "<br/><br/>"+
                    "Through hands-on experiments, participants will be introduced to the \"musique concrète\" concept, which will help them understand the electronic music foundation, followed by building a contact microphone allowing them to navigate our space and search for sounds. Lastly, the gathered sounds will lay the foundation for a collaborative sound piece."+
                    "<br/><br/>"+
                    "The participant will keep the microphones they create within the workshop. ",
                "when": "when",
                "where": "where",
                "excelsior": "Excelsior Theatre",
                "areal": "AREAL Space for choreographic development",
                "areal-detailed": "AREAL Space for choreographic development <br/> Anastasie Simu 2",
                "cndb": "National Center for Dance Bucharest",
                "cndb-detailed": "National Center for Dance Bucharest<br/>Blv. Marasesti 80-82",
                "unteatru": "Unteatru",
                "elvire-popesco": "Cinema Elvire Popesco",
                "galateca": "Galateca Gallery",
                "galateca-detailed": "Galateca Gallery <br/> C.A. Rosetti 2-4",
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
                "text-main-rhiza": "You’ve dived deep within yourself and found yourself in so many new dimensions. Breathe. Life grows with your presence. Touch the wall. Feel the vibration. Discover further within you. <br/><br/>Over the course of the exhibition the mushrooms growing in this work will evolve in surprising ways.",
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
                "text-main-zimmt": "The third edition of NOVA festival is distinguished from the previous ones by the events that are organized in several places in Bucharest. Presentations, performances or workshops, they create the context of surprising meetings between artists with varied interests, but also between artists and the general public. <br/><br/> IQOS joins NOVA festival this year and hosts, <b>between December 5-8, starting 8 p.m., at Platforma Wolff</b>, a series of special experiences that represent the intersection of new technology tools with performances and innovative installations which become the framework for these meetings. <br/><br/> <b>ZiMMT 3D Sound Lab</b> is a 3D sound installation, developed by one of the world's most prolific centers studying immersive experiences created with sound. Constructed of dozens of connected speakers, it forms a 3D audio system that provides the most faithful sound experience, superior to surround sound systems. At the invitation of the organizers and with the support of IQOS, ZiMMT 3D Sound Lab becomes, for 4 days, the setting for some unique performances. <br/><br/> In addition, to visually complete the whole experience, inside the ZiMMT 3D Sound Lab installation will be mounted <b>WONDER</b>, the sound-reactive light installation developed by artists Alexandros Raptis and Andrei Cozlac, which will remain at Platforma Wolff for during all performances. Together, the two installations become a place for exploration and experiment by the artists Judith State and Radu Dumitriu, Alexandros Raptis and Andrei Cozlac, Bogdan Moroșanu (Rockabella), Felix Deufel and Nikhil Nagaraj. <br/><br/> These events have the role of testing, in the presence of the public, the possibilities offered by the 3D sound system in a special context, where contemporary dance, music and light installations will contribue, in turns, to the immersive effect that the ZiMMT system creates. The 4-day program describes a process of exploration-research of the installation by artists active in various performing arts, with the aim of revealing new creative valences created by innovation. <br/><br/> Those who want to learn more about the technology behind a three-dimensional audio construction, can take part in the 3-day workshop held by <b>Felix Deufel, the initiator of ZiMMT, Spatial Audio Workshop, December 6-8, between 14:00 and 16:00, at Platforma Wolff</b>. This workshop is part of the EDU section of the festival, organized in partnership with Goethe-Institut Bucharest and CINETic/International Center for Research and Education in Innovative Creative Technologies of UNATC. <br/><br/> <i>The 3D Sound Lab x IQOS experience at the Platforma Wolff is created exclusively for people over 18 years of age. Participation at the events, as well as the workshop, is made by purchasing a ticket on Eventbook.</i>",
                "text-main-author-zimmt": "<div class=\"details-text-separator\"></div><h2>5 DEC // 20:00 // WONDER // ALEXANDROS RAPTIS ȘI ANDREI COZLAC</h2> The first event is hosted by <b>Alexandros Raptis</b>, artist passionate about theater direction, light design and music composition, and <b>Andrei Cozlac</b>, experimental video artist, interested in the latest multimedia technologies. They created the sound-reactive light installation, <b>WONDER</b>, which will be placed inside the ZiMMT 3D Sound Lab sound installation. Especially for this event, the artists have also developed a 3D music, which will contribute to the immersive atmosphere induced by the sound installation, but also by the lights.<br/><br/> <b>WONDER</b> is an installation where sound and light interact to create space-time instances that spark the imagination and guide you to create your own inner narrative thread. The installation will remain at Platforma Wolff during all 4 days of ZiMMT 3D Sound Lab events to add a new dimension to the space and other performances. <br/><br/> <b>ANDREI COZLAC</b> - is a video artist and Lect. Univ. Doctor at the George Enescu National University of Arts in Iași, Faculty of Visual Arts, Department of Photography, Video and computerized image processing, and associate professor at the media department of the Faculty of Arts in the Romanian Language in Târgu Mureș. Experimentalist, interested in the latest multimedia technologies, collaborated on numerous independent projects of visuals, video-mapping, live projections. <br/><br/> <b>ALEXANDROS-IOAN RAPTIS</b> - His main areas of interest are theater direction, lighting design and music composition. He lives and works in Bucharest, but is also involved in projects from other cities or countries. He makes electronic music together with Andrei Raicu, in the formula Al'iikhwa Ra, and is the drummer of the band MIDPOINT. He is currently working on an interactive audio installation called \"Chemical Soundscape\", in which he transforms the chemical properties of substances into sound compositions. <div class=\"details-text-separator\"></div><h2>6 DEC // JUDITH STATE ȘI RADU DUMITRIU</h2> <b><i>When the sound moves, it moves you. <br/>When the light goes on, you remember.</i></b><br/><br/> The show invites the participants on a journey of self-discovery through music and dance. Choreographer Judith State and musician Radu Dumitriu will meet the audience at Platforma Wolff to embark together on a process of self-discovery, in a context created by the sound-reactive light installation, WONDER, as well as the sound installation ZiMMT 3D Sound Lab. In this participatory performance, the audience, together with the artists, will add layers of personal history to the visual and sound universe created by the two installations and, through them, will create an imprint of the present shared with those who participate in this experience. <br/><br/> Inspired by the architecture and aesthetics of the space, by the mutual interaction, but also by the meeting with the audience and its energy, the two performers will compose musical, choreographic and vocal scores in real time starting from the topics that are the basis of their research for the last four years: memory, the passage of time and how memories and the forms they take over time inexorably mark our present. <br/><br/> <b>JUDITH STATE</b> is a professional dancer, choreographer and actress with a background in classical dance and BA in foreign languages. Scholarship of Broadway Dance Center in New York and ImpulsTanz Vienna through the Wild Card offered by the 4Culture Association. In 2019, she signs the concept of the modular project \"Eemlék - memory\" in which she creates a performance with live electronic music alongside the musician Radu Dumitriu, an experimental dance short film - \"You Who Never Arrived\", selected and awarded in international film festivals - an electronic music and voice concert, and a movement and text workshop for professional actors and dancers. In 2022, she continues the research started with \"Emlék\" and creates the performance \"Ember(om)\", analyzing and deepening the themes of the passage of time, emotional information transmitted transgenerationally, memory, memories, the forms they take over time and how it inexorably marks our present. <br/><br/> She is cast in the film SIERANEVADA, directed by Cristi Puiu, which premiered in 2016 at the Cannes Film Festival and is nominated for the Gopo Awards for Best Supporting Actress. In 2018, she resumes her collaboration with Cristi Puiu for the film \"Malmkrog\" and is cast in her debut feature film \"Monsters.\" by director Marius Olteanu, which premiered in 2019 at the Berlin Film Festival and brought her the 2020 Gopo award for Best Actress in a leading role. Next comes \"Dad moves the mountains\" directed by Daniel Sandu and the film \"REFUGIU\", directed by Liviu Mărghidan. Also in 2021, she collaborates with the Hungarian director Krisztóf Gyuri on the dance feature film \"Zenith\", and in 2022 she plays the main role in the latest feature film by director Cristian Mungiu, \"R.M.N.\", which premiered at the 75th edition of the Cannes Film Festival. <br/><br/> <b>RADU DUMITRIU</b> - Composer/performer, graduate of the Bucharest National University of Music and master\'s degree in the piano department. Since 2006 he has been collaborating in the pop industry with various mainstream artists both as an instrumentalist and as a studio musician, and since 2017 he has been creating his own electronic music project called NEON, with which he is releasing his own album in 2020, \"Jupiter\". <br/><br/> In 2019 he collaborates with Judith State on all four parts of the modular project \"Emlék - memory\": he creates the live music of the performance \"Emlék\", writes the music of the short film \"You Who Never Arrived\" (Best Original Score nominee Bucharest ShortCut CineFest ), composes the music for the electronic and voice concert and creates the soundtrack for the \"Body Talks\" movement, voice and sound workshops for professional dancers and actors. In 2022, the collaboration with Judith continues for the performance \"Ember\", creating the music based on the same joint research that analyzes the passage of time, memory and the way memories shape our present. <div class=\"details-text-separator\"></div><h2>7 DEC // ROCKABELLA – INvulnerabili // BOGDAN MOROȘANU</h2> The series of performances continues with music the following evening. Thus, fans of the Rockabella band will be able to discover its new album, INvulnerabili, mixed live in three-dimensional sound format by Bogdan Moroșanu, a member of the band. Rockabella blends art-rock, indie pop and alternative influences into story-songs about the moments that transform us. The album is to be officially released on December 9. By adapting the tracks to the multi-channel format of the installation, they will generate a musical experience completely different from that of a live concert or mediated by a stereo system. <br/><br/> <b>ROCKABELLA</b> - debuted in 2014 and has numerous concerts, showcases and festivals in the country and abroad, as well as two studio albums, \"A World Outside\" - 2015 and \"Clarobscur - 2019. The band consists of: Teodora Moroșanu - vocals, Ștefan Mustață - guitar, Bogdan Diaconeasa - bass guitar, Alina Horez - violin, Bogdan Moroșanu - drums, music production.  <br/><br/> The album \"INvulnerabili\" is a collection of ten songs written during perhaps the most complicated period of the band's life, with the pandemic just a dystopian backdrop to the tectonic movements in the members' lives. The album explores the idea of vulnerability as a source of courage. Tracks like Let's Get A Little Complicated!, Earthquake or The map reveal the masked faces of trauma, while INvulnerabili, Show yourself and So far, tell about the courage to face ourselves and about healing by being close. <br/><br/> <b>BOGDAN MOROSANU</b> - has over 15 years of experience, in which he has worked in all aspects of the industry: performance sound, film and TV sound, music production, but also design and implementation of audio solutions and acoustic treatments. In the last 4 years, his activity has been marked by his involvement in research and education, with Bogdan teaching audio production courses at the Faculty of Electronics within the Polytechnic University of Bucharest, and in 2021 he began his doctoral studies in the field of sound engineering. In the music domain, Bogdan has worked with bands such as The Mono Jacks and Rockabella, as a musician, but also as a live engineer and music producer, and is often involved as a technical consultant for rock and indie music festivals and events. <div class=\"details-text-separator\"></div><h2>8 DEC // IF WE VANISH – IN SEARCH OF NATURAL SILENCE // FELIX DEUFEL & NIKHIL NAGARAJ</h2> The latter event is presented by Felix Deufel, the initiator of ZiMMT, and Nikhil Nagaraj, sound artist, who present at Platforma Wolff part of the results of the project If we vanish – In search of natural silence. Based on the 3D system's ability to faithfully reproduce sounds from reality, the two artists and their team set off to the wildest areas in India, untouched by sound pollution or human intervention, to record their specific sounds. During the project, they recorded over 434 hours of sounds. <br/><br/> The artists will present part of their collection of sound data as an immersive art installation where the public can experience some of these last wild places. In this experience, the audience will be able to immerse themselves in the tropical forests of south and northeast India or the arid mountain landscape of the Himalayas and explore three different types of sound: biophony - produced by non-human factors, geophony - natural non- biological and anthropophony - human-generated noise. <br/><br/> <b>NIKHIL NAGARAJ (Bangalore, India) and FELIX DEUFEL (Leipzig, Germany)</b> are two sound artists and sound engineers who have collaborated since 2017 in the field of 3D audio research and production. Both share a strong fascination for the human aural perception, the hearing. Their concepts and works intersect design, technology, science and philosophy. Experiments with spatial sound in pitch-dark rooms, fading out visual stimulus completely gave the artists crucial, hallucinating experiences. In their works they explore the influence of sound and music on emotions and pictures, the narrative and remembrance power of sound and its enormous impact on perception of space. <br/><br/> <b>ZiMMT</b> provides the appropriate stage for the many facets of media immersion and a place for creative experimentation. As one of only a few cultural institutions, ZIMMT has an innovative 3D audio system consisting of 36 loudspeakers. This offers the opportunity to develop and present immersive, space-consuming concerts, exhibitions and performances. In addition to the interdisciplinary exchange of artists and developers, the center is particularly interested in the transfer of knowledge and workshops. ZiMMT is a gallery, production space, concert hall, research lab and network all in one. ",
                "text-main-nova-talks-program": "<b>\n" +
                    "SCHEDULE:\n" +
                    "<ul>\n" +
                    "<li>PANEL I: 12:00 - 13:15 </li>\n" +
                    "<li>COFFEE BREAK: 13:15 - 13:45 </li>\n" +
                    "<li>PANEL II: 13:45 - 15:00 </li>\n" +
                    "</ul>\n" +
                    "</b>",
                "text-main-nova-talks": "<br/><br/>Through this event, NOVA proposes a marathon of inspiration and creates the context for fascinating discussions about the importance of new technologies in the creative process and in exploring human cognitive potential.\n" +
                    "<br/><br/>\n" +
                    "Thus, on November 26, at Cinema Elvire Popesco, the public will meet and interact with 5 speakers, including researchers, but also artists whose works are included in the main exhibition.\n" +
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
                    "Part of the team that developed the <a href='otherlands.html'>Otherlands</a> installation, included in this year's exhibition  at NOVA, and the creator of the humanoid robot Eva, Maša will open this section of the festival with a lecture-performance structured in two parts. In the first part, she will talk about exploring the implications of human-robot interaction research. The artist considers that the study of robotics cannot evolve without an in-depth knowledge of human nature. This is why her research is interdisciplinary, moving rapidly from engineering and social science to cognitive science, neuroscience, ethics and even art. In this presentation, Maša will approach Android Science and how the development of human-like robots can contribute to cognitive research.\n" +
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
                "text-main-nova-digi-sense": "<h2>DIGI-Sense – how the body understands, feels and goes through processes of sensemaking with digital tools</h2><br/><br/>" +
                    "To understand and be able to use digital technologies and tools, we need to make sense of them. Usually, the sensemaking process (in the tradition proposed by Karl E. Weick) is studied as a process happening mainly cognitively, only giving a minor part to the body. In the  DIGI-Sense (Digital Sensemaking) project, we suggest bringing the body into the foreground to understand sensemaking, also and especially in digital environments. <br/><br/>The project invites performance artists and dancers to explore how the body perceives, translates, transforms and goes through the process of sensemaking with technological tools and in digital environments. How do our senses, our muscles, the way our limbs move, the velocity of our movements, among others, support the sensemaking processes we go through in moments, for example of digitization of information? ",
                "text-main-author-nova-talks-digi-sense":"<b>Claudia Schnugg</b> is Principal Investigator of the Digital Sensemaking (DIGI-SENSE) project at the Johannes Kepler University Linz, which is realized at the Communications Engineering Institute. She holds a PhD in social and economic sciences with an additional focus on cultural sciences. Her research focuses on art, aesthetics and artistic initiatives in interdisciplinary and social settings, such as change processes, digitalization and knowledge management, and explores implications and organization of art-science collaboration. As curator and consultant she is working internationally with industrial, scientific and artistic organizations to realize art-sci-tech projects.<br/><br/>"+
                    "<b>Daniela Brill</b> has a Master’s degree in Art & Science from the University of Applied ArtsVienna.  Daniela works in collaboration with scientific institutions and networks such as Art at CMS at CERN, the ORIGIN network of high energy physics, and with artistic institutions such as the ArtSci Center + Lab UCLA. Brill is the creator and co-organizer of Suratómica, a collaborative network of Art and Science based in Bogotá, Colombia. Daniela’s artistic and theoretical work focuses on the idea of in-disciplinarity and the wish to eliminate certain frontiers and boundaries aiming to find a space of queerness at many levels for creative processes and for the formation of new knowledge, researching mainly the areas of aesthetics and complexity.",
                "text-main-nova-talks-new-art": "<h2>.NewArt { foundation;}. Explorând un nou om cibernetic prin artă</h2><br/><br/>" +
                    "The .NewArt { foundation;} is based in Reus, Catalonia. Its ambition is to help the artistic community develop new technological, scientific, conceptual, and social practices. The foundation disseminates art at the intersection and transgression of science and technology, as a strategy for social development and empowerment. It acts not just as a witness, but as an active agent."+
                    "<br/><br/>"+
                    "One of its main challenges consists in the development, conservation, and preservation of an artistic legacy linked to science and technology, within the framework of the .NewArt { collection;}. A corpus of over 100 pieces that eclectically cover everything that has happened and is happening in this new means of expression.This project will be brought further by the creation of a new Art Center in the city of Reus."+
                    "<br/><br/>"+
                    "Guided by Vicente Matallana, director of the .NewArt {foundation;} & {collection;}, we will visit key works from the collection that explore the concept of a cybernetic human. A journey that will begin with the 1972 artwork \"Mano Térmica de Artista\" by Luís Lugán, considered the first robotic artwork created in Spain, and will extend to the latest productions and additions to the Collection.",
                "text-main-author-nova-talks-new-art":"<b>Vicente Matallana</b> este directorul .NewArt { foundation;} & { collection;}, precum și fondatorul și directorul LaAgencia, o companie independentă de new media art creată în 1998 în Madrid. LaAgencia este implicată în programe și proiecte în jurul artei electronice ca paradigmă alternativă pentru cercetare și cunoaștere. Împreună cu Joasia Krysa, a fost co-directorul Kunsthal Aarhus, Aarhus. Este membru în boardul consultativ al Kurator, și director al proiectului ArtFutura, un festival de artă digitală veteran în Spania. Este membru în comitetul de conducere al HacTe, un important hub de artă x știință  x tehnologie al Barcelonei.",
                "text-main-nova-talks-beyond-the-screen": "<h2>Beyond the Screen: Exploring Proprioception and Kinesthesia in the Digital Age, a digital creator perspective on what’s next </h2><br/><br/>" +
                    "An eye-opening exploration of the convergence of cutting-edge technologies such as AR, XR, programmable art, and AI with the human senses of proprioception and kinesthesia, in the context of our rapidly evolving growingly digital world. As we embrace virtual and augmented reality within fashion & make-up , sports, socializing and work, arts, traveling, gaming, and immersive experiences of all sorts, we must consider how these technologies influence our perception of self and alter our fundamental connection to the physical realm. "+
                    "<br/><br/>"+
                    "Join renowned digital artist and emerging tech specialist Tammy Lovin, as they delve into the intriguing questions of whether being neurodivergent is a natural consequence of digital evolution and how these transformative experiences are shaping our minds today and redefining the essence of human existence in the near future. "+
                    "<br/><br/>"+
                    "Discover the potential implications and possibilities for personal growth, creativity, and the way we interact with the world around us. This talk will inspire you to reimagine the boundaries of human experience and ponder the profound impact of digital innovations on our boundaries between the virtual and the tangible. Prepare to be inspired and challenge your perceptions in this not-to-be-missed talk on the future of art and human experience.",
                "text-main-author-nova-talks-beyond-the-screen":"<b>Tammy Lovin</b> is an internationally acclaimed digital artist that specializes in creating art experiences using a variety of emerging tech tools such as AR, XR , programmable art or A.I. Her work thrives on the blockchain or in the Metaverse, and it can range from whimsical colorful art compositions, digital fashion , VR performances or VR sculptures that can also be experimented as AR filters. The themes of her eye-candy artworks often address complex human experiences and deep inner thoughts.",
                "text-main-nova-talks-white-contamination": "<h2>White Contamination</h2><br/><br/>" +
                    "A personal insight on the amazing photography project, White contamination, for which the artist was awarded the first place at Sony World Photography Awards, Creative.  "+
                    "<br/><br/>"+
                    "In the snowy landscapes of the heights of Fukushima, Florian has captured the invisible pain of radiation. Inspired by the Japanese engravings, he hoped to capture the ever-shifting perceptions of nature, where radiation accumulates the most. "+
                    "<br/><br/>"+
                    "With a geiger counter, he measured the radioactive contamination’s presence in becquerels (Bq), a unit that expresses atom disintegration and its mutations number per second. By a digital process, he intended to show the atom’s alteration in his pictures. The transparency effects, the broken perspectives give rise to a shape that is in motion, an impermanent world as in traditionalJapanese engravings."+
                    "<br/><br/>"+
                    "Then, he created a vibration, a departure from the reality of the subject that reveals the presence of radiation in the image. The process reinvents and twists the very landscape, leading to a sort of vertigo or malaise, a threatening danger hidden behind the purity of the white of the landscapes. "+
                    "<br/><br/>"+
                    "Part of the images from this series were integrated within the interactive installation Walk, that can be visited within this edition of NOVA, between 26 and 29th September at Teatrelli. ",
                "text-main-author-nova-talks-white-contamination":"<b>Florian Ruiz</b> is an artist well-known for his unique way to capture the atmosphere of abandoned or harmed places through human action. Always involved in sensitive projects that express important social realities through image, FLorian lives between France and Tokyo and is represented by Galerie Sit Down in Paris. His works have received numerous relevant awards and were exhibited in Japan, Holland, Great Britain, Germany, France, Italy and Slovakia.",
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
                "edition-2022": "2022 Edition",
            },

            // Arabic translations
            "ro": {
                "starts": "începe pe",
                "start-date": "16 septembrie",
                "ends": "se încheie pe",
                "end-date": "30 septembrie",
                "open-info": "Expoziția este deschisă de marți până vineri 16:00 - 21:00 și sâmbătă 11:00 - 21:00",
                "festival": "Festival",
                "expo": "Expo",
                "performances": "Experiențe imersive",
                "performance": "Experiență imersivă",
                "immersive-performative-installation": "Instalație imersivă performativă",
                "immersive-interactive-installation": "Instalație imersivă interactivă",
                "open-till-23": "deschis pentru explorare până în 23.09",
                "open-till-23-16_22": "16:00 - 22:00",
                "open-till-28-14_22": "12:00 - 20:00",
                "open-till-28-16_22": "16:00 - 22:00",
                "nova-grow": "NOVA Grow",
                "artist-talks": "Talks",
                "nova-talks": "Nova talks",
                "artist-talk": "Talk",
                "workshops": "Edu",
                "workshop": "Edu",
                "nov": "nov",
                "dec": "dec",
                "sep": "sep",
                "buy-tickets-pass": "cumpără festival pass",
                "buy-tickets-expo": "cumpără expo pass",
                "buy-tickets": "cumpără bilet în sală",
                "buy-tickets-online": "cumpără bilet live stream",
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
                "expo-opening": "Opening event",
                "performative-installation": "performative installation/research setting",
                "drawing-exercises-2": "Drawing exercises, performative research setting part of Digital Sensemaking (DIGI-SENSE) // Claudia Schnugg, Daniela Brill ",
                "expo-closing": "Finisaj expoziție",
                "space-and-spatiality": "Spațiu și spațialitate în creația instalațiilor artistice // IULIA GHERGHESCU",
                "space-and-spatiality-detail": "Spațiu și spațialitate în creația instalațiilor artistice",
                "have-you-seen": "Have you seen my body? <br/><i>a seascape</i>",
                "tammy-lovin": "Claudia Schnugg (AT), Daniela Brill (AT), Vicente Matallana (ES), Tammy Lovin (RO), Florian Ruiz (FR)",
                "walk-a-rhythm": "Walk <br/> <i>a rhythm</i>",
                "roly-poly": "rolypoly~, an adaptive and generative drum machine designed for real-time performance // Grigore Burloiu",
                "protocols-applied-to-production": "Protocoale aplicate în producția, întreținerea și prezervarea artei new media. Cazuri practice de la .NewArt {foundation;} // Vicente Matallana",
                "bodies-of-light": "Bodies of light // Amélie Laurence-Fortin",
                "sonic-explorations": "Sonic Explorations // Denis Flueraru",
                "aio-opening": "AIO all in one",
                "an-error-has": "an error has occurred. <br/> The aesthetic appeal of imperfection and glitches in visual images// M Kardinal",
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
                "a-project": "Un proiect al",
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
                "text-main-drawing-exercises": "Drawing Exercises este un performance participativ creat de Antoni Rayzhekov pentru proiectul DIGI-Sense, o instalație în care publicul devine performerul. Doi participanți realizează împreună o serie de desene prin mișcare, aceștia trebuind să descopere, interacționând, traiectoriile, vitezele și strategiile potrivite pentru a reuși. " +
                    "<br/><br/>"+
                    "Experiența îi poartă pe participanți prin procese de înțelegere, de atribuire de sens. Treptat, aceștia își dau seama de noi metode să deseneze cu corpurile lor și să creeze reprezentările cerute de la ei în acest joc. " +
                    "<br/><br/>" +
                    "Mai multe seturi de senzori, îmbrăcate de participanți, digitizează în timp real informația produsă de corpurile lor, urmărind mișcarea, orientarea, pulsul și nivelul de stres pe care aceștia îl resimt. Aceste informații combinate produc un digital twin / geamăn digital al acțiunilor lor combinate - o linie cu care aceștia desenează. " +
                    "<br/><br/>" +
                    "Proiectul DIGI-Sense project este finanțat ca un Seed Project al Linz Institute of Technology, realizat la Institute of Communications Engineering, parte a Linz Business School de la Johannes Kepler University Linz. ",
                "text-main-author-drawing-exercises": "<b>Antoni Rayzhekov</b> este un artist interdisciplinar ce lucrează la intersecția dintre muzică, teatru și arte digitale. Are un master în regie de teatru și este licențiat în arta actorului la Academia Națională de Teatru și Film din Sofia. A studiat improvizația de jazz la Conservatorul din Viena și programare la LearningTree in Londra. A fost consultant IT la biroul vienez al United Nations. Este co-fondatorul brandului new media THIS.PLAY[2013], specializat în artă și tehnologii interactive. Antoni predă, de asemenea, din 2012, Tehnologii Digitale și Media (experimental/ interactiv) la Universitatea de Științe Aplicate din St. Pölten, Austria și din 2016 este profesor invitat al Academiei Naționale de Artă din Sofia, în cadrul studiului masteral Arte Digitale. " +
                    "<br/><br/>" +
                    "<b>Claudia Schnugg</b> este cercetătorul principal al proiectului Digital Sensemaking (DIGI-SENSE), implementat la Universitatea Johannes Kepler din Linz prin Communications Engineering Institute. Deține un doctorat în științe sociale și economie, cu focus suplimentar pe cultură. Cercetarea sa se concentrează pe artă, estetică și inițiative creative în contexte sociale interdisciplinare, cum ar fi managementul cunoașterii, procese de digitalizare, facilitarea colaborării dintre artă și știință și implicațiile aduse de aceasta. În plus, Claudia este curator și consultant artistic pentru mai multe organizații, în plan internațional, care desfășoară inițiative art-sci-tech. " +
                    "<br/><br/>" +
                    "<b>Daniela Brill</b> are un masterat în Artă & Știință de la reputata Universitate de Arte Aplicate din Viena. Lucrează în colaborare cu instituții și rețele științifice ca Art at CMS al CERN, ORIGIN network of high energy physics, și cu instituții de artă ca ArtSci Center + Lab UCLA. Brill este și creatoarea și co-organizatoarea Suratómica, o rețea de colaborare la intersecția dintre artă și știință cu sediul în Bogotá, Columbia.  Focusul artistic și teoretic al Danielei este ideea de in-disciplinaritate și își propune să estompeze granițele și să găsească un loc de originalitate care să fie aplicat în procese de creație și de formare cu cunoștințe noi. În puține cuvinte, aria sa de cercetare este concentrată pe estetică și complexitate. ",
                "text-main-aio-1": "Dezvoltată de Asociația Prezent Continuu, în colaborare cu Centrul de Cercetare în Augmentarea Performanțelor Neuronale Veruvis, AIO ilustrează creativ anxietatea și felul în care se manifestă ea în corp, traducând în sunet și imagine mai multe date de cercetare neuronală relevante." +
                    "<br/><br/>" +
                    "Muzica AIO conține pasaje obținute din conversia unor semnale EEG în note muzicale. Videoportretele umanizează experiența și devin canal pentru emoția ta, traducând prin mimică, gesturi și mișcare diverse grade de anxietate." +
                    "<br/><br/>" +
                    "<b>Direcție artistică:</b> Emilia Păunescu" +
                    "<br/>"+
                    "<b>Sound design:</b>: Bogdan Moroșanu" +
                    "<br/>"+
                    "<b>Imagine:</b> Florin Constantin" +
                    "<br/>"+
                    "<b>Programare interfață interactivă:</b> Dragoș Iulian Matei" +
                    "<br/>"+
                    "<b>Distribuție:</b> Ada Galeș, Alexandra Bălășoiu, Cătălin Diaconu, Cezar Grumăzescu, Denis Bolborea, Denisa Diaconescu, Dragoș Iulian Matei, Ema Alexandrescu, Florin Constantin, Oana Pușcatu, Simona Dabija",
                "text-main-aio-2": "\"<i>Am pornit de la ideea că suntem cu toții cutii de rezonanță și amplificare unii pentru ceilalți și am imaginat acest cor neconvențional care îți cântă anxietatea și te ajută să o procesezi.<br/><br/>" +
                    "În spațiul instalației exprimi această greutate și îi dai drumul să treacă prin sunet și prin corpurile oamenilor care formează corul. Îți vezi anxietatea transformând alte brațe, alte fețe, intrând pe sub pielea altor oameni și mișcându-le corpurile în tot felul de dinamici. <br/> <br/>" +
                    "AIO - all in one - e un corp comun, cu multe dimensiuni. Are și partea copleșitoare a anxietății, care se simte ca \"toate deodată grămadă\", dar și partea luminoasă, în care realizăm că suntem întregi unii prin alții.\"<br/><br/><b>Emilia Păunescu</b></i> ",
                "text-main-aio-3": "Pe ecranele AIO rulează, în total, 55 de videoportrete însoțite de 5 compoziții sonore în format Quadrophonic, toate aferente mai multor grade de intensitate a anxietății resimțite." +
                    "<br/><br/> " +
                    "Lucrarea este interactivă și îți permite să modulezi imaginea și sunetul din spațiu printr-o interfață digitală facilă, amplasată în incintă. Explorează spațiul, selectează pe tableta-interfață nivelul de anxietate pe care îl resimți în corp și alegerea ta este redată printr-o compoziție audio-vizuală. ",
                "text-main-have-you-seen": "O experiență imersivă de aproximativ 15 minute care te duce în adâncul oceanelor pentru a te descoperi în feluri noi, neașteptate. La fel ca cealaltă instalație dezvoltată în cadrul NOVA lab, lucrarea urmărește să ofere, pe rând, pentru câte 2 vizitatori, sentimentul de a fi prezent în mai multe locuri în același timp." +
                    "<br/><br/> " +
                    "Pentru a crea această instalație interactivă, am adus împreună 6 artiști foto, 4 performeri, un director artistic, un grafician, 2 programatori creativi și 4 profesioniști din psihologie, comunicare și neuroștiință." +
                    "<br/><br/> " +
                    "Înainte de a păși în spațiul instalației, îți înregistrăm vocea și te fotografiem în diferite posturi. Aceste amprente digitale ale corpului tău sunt integrate în timp real în cadrul audio-vizual al instalației." +
                    "<br/><br/> " +
                    "Acum scena e a ta. Ești în brațele valurilor. Nu-i niciodată ceva cert, așa-i? " +
                    "Un performer te ghidează prin experiența ta pe scenă. " +
                    "<br/><br/> " +
                    "<b>Direcție artistică și text:</b> Emilia Păunescu" +
                    "<br/>" +
                    "<b>Artiști foto:</b> Felicia Simion (RO), Mads Nissen (DK), Michele Bressan (IT/RO), M Kardinal (DE), Rachel Talibart (UK), Valentina Fusco (IT)" +
                    "<br/>" +
                    "<b>Performeri:</b> Alexandra Bălășoiu (RO), Denisa Nicolae (RO), Ema Alexandrescu (RO), Judith State (RO)" +
                    "<br/>" +
                    "<b>Grafică:</b> Ana Cârlan (RO)" +
                    "<br/>" +
                    "<b>Programare sisteme interactive:</b> Andrei Văcaru (RO), Victor Jercan (RO)" +
                    "<br/>" +
                    "<b>Profesioniști psihologie, comunicare, neuroștiință:</b> Ana Mirodonie (RO), Caroline Heimerl (AT) & Champalimaud Center for the Unknown (PT), Monica Cure (RO/SUA)" +
                    "<br/><br/> " +
                    "Accesul se face în baza biletului asociat unui interval de timp. ",
                "text-main-walk": "Dezvoltată în cadrul NOVA lab din colaborarea a 7 artiști foto, 4 performeri, un director artistic, un grafician, 2 programatori creativi și 4 profesioniști din psihologie, comunicare și neuroștiință, Walk este o instalație interactivă care îți propune un joc simplu." +
                    "<br/><br/> " +
                    "Un performer te întâmpină pe scenă și împreună construiți un ritm al tău, personal, din felul în care tu reacționezi la imaginile de pe ecranele care vă înconjoară." +
                    "<br/><br/> " +
                    "Corpul tău digital, captat la intrarea în instalație, este introdus în imagini pe scenă. Astfel ajungi să “locuiești” aceste spații noi, în timp ce corpul tău fizic construiește cu performerul o mulțime de feluri de a te apropia și îndepărta de aceste imagini, de a reacționa la ele, generând un mers specific, cu o anumită muzicalitate." +
                    "<br/><br/> " +
                    "Walk este un fel de dialog corporal deschis cu tot ce te înconjoară. O formă jucăușă de a te cunoaște." +
                    "<br/><br/> " +
                    "<b>Direcție artistică:</b> Emilia Păunescu" +
                    "<br/>" +
                    "<b>Artiști foto:</b> Felicia Simion (RO), Florian Ruiz (FR), Mads Nissen (DK), Michele Bressan (IT/RO), M Kardinal (DE), Rachel Talibart (UK), Valentina Fusco (IT)" +
                    "<br/>" +
                    "<b>Performeri:</b> Alexandra Bălășoiu (RO), Denisa Nicolae (RO), Ema Alexandrescu (RO), Judith State (RO)" +
                    "<br/>" +
                    "<b>Grafică:</b> Ana Cârlan (RO)" +
                    "<br/>" +
                    "<b>Programare sisteme interactive:</b> Andrei Văcaru (RO), Victor Jercan (RO)" +
                    "<br/>" +
                    "<b>Profesioniști psihologie, comunicare, neuroștiință:</b> Ana Mirodonie (RO), Caroline Heimerl (AT) & Champalimaud Center for the Unknown (PT), Monica Cure (RO/SUA)" +
                    "<br/><br/> " +
                    "Access based on ticket and time slot reservation. ",
                "text-main-error": "The experience delves into the world of analogue video techniques and modified electronics, examining the allure of imperfection and glitches in visual media, particularly in self-portraits. We will analyze different facets of the moving images by using malfunction circuits to reveal their inherent gestural character. " +
                    "<br/><br/> " +
                    "The aim is to celebrate the allure of imperfection as a powerful counter statement to the prevailing hyperreality and the pursuit of the flawless self-portrait that dominates contemporary visual culture." +
                    "<br/><br/> " +
                    "Through hands-on demonstrations, we will explore the fascination of vintage technology and its unique ability to evoke emotion through its unique flaws. Participants will discover how the unexpected visual distortions and artefacts that result from this process serve as powerful tools for conveying authenticity and depth." +
                    "<br/><br/> " +
                    "I encourage you to leave behind the pursuit of pixel-perfect images and explore the untamed realm of modified electronics and video synthesizers, embracing glitches and imperfections as a source of creative inspiration. " +
                    "<br/><br/> " +
                    "<b>Prior experience is not necessary for the workshop. You are expected to feel at ease while being recorded and exploring the subconscious elements of your portrait. The workshop will be held in English.</b>",
                "text-main-author-error": "<b>M. Kardinal</b> este o artistă berlineză ce lucrează în special cu fotografie, film, performance și instalații. Deține un masterat în Arte Plastice și a studiat și istoria artei atât în Germania cât și în Italia." +
                    "<br/><br/> " +
                    "Lucrările sale reflectă interesul ei particular pentru procese de percepție. Astfel, practica ei este o explorare a unui vocabular vizual abstract care o ajută să creeze “peisaje mentale ale dorinței” în care vizitatorul participă activ și construiește însemnătatea lucrării." +
                    "<br/><br/> " +
                    "Fascinată de natura lor imprevizibilă, artista folosește tehnici și materiale depășite în majoritatea lucrărilor sale. Din 2016, a colaborat cu muzicieni, sound designeri și coregrafi din Germania, România, Ukraina și Canada, dezvoltând instalații și performance-uri audio-vizuale bazate pe cercetarea sa artistică în jurul percepției. ",
                "text-main-new-art-title": "Protocoale aplicate în producția, întreținerea și prezervarea artei new media.  Cazuri practice de la .NewArt {foundation;}",
                "text-main-new-art": ".NewArt {foundation;} & {collection;} este recunoscută nu doar pentru ceea ce colectează, ci și pentru modul în care o face. Fundația este creatoarea unei abordări cu totul inovatoare în ceea ce privește colectarea, susținerea producției, prezervarea și consumul artei tech, precum și încurajarea dezbaterii subiectelor importante ca integrarea noilor tehnologii cu sens în artă. " +
                    "<br/><br/> " +
                    "Vicente Matallana, directorul său, cu peste 25 de ani de experiență în producția, managementul și dezvoltarea de lucrări de artă new media, este unul dintre pionierii acestui domeniu." +
                    "<br/><br/> " +
                    ".NewArt {foundation;} a creat o serie de protocoale stringente de producție și conservare menite să facă durabilă în timp moștenirea tehnică și artistică adusă de aceste lucrări. Aceste protocoale sunt făcute posibile prin colaborarea fundației cu Universitatea Politehnică din Valencia, NASS consortium, New Art Sustainable Services.  Acest consorțiu include parteneri ca Eurecat, Catalan Technological Center (ES), V2_ Lab for the Unstable Media (NL), Gallerie Charlot (FR), NIAL ART Boutique Law Firm (ES), Fraunhofer Institute for Applied Information Technology FIT (DE), și .NewArt {foundation;} (ES)."+
                    "<br/><br/> " +
                    "De asemenea, la acest masterclass vei descoperi exemple de practici de succes și instrumente utile artiștilor și producătorilor din domeniul noilor media, care abordează aspecte ca relațiile contractuale cu artiști și instituții, management de proiect, atragerea de fonduri și sponsorizări.",
                "text-main-author-new-art": "<b>Vicente Matallana</b> este directorul .NewArt { foundation;} & { collection;}, precum și fondatorul și directorul LaAgencia, o companie independentă de new media art creată în 1998 în Madrid. LaAgencia este implicată în programe și proiecte în jurul artei electronice ca paradigmă alternativă pentru cercetare și cunoaștere. Împreună cu Joasia Krysa, a fost co-directorul Kunsthal Aarhus, Aarhus. Este membru în boardul consultativ al Kurator, și director al proiectului ArtFutura, un festival de artă digitală veteran în Spania. Este membru în comitetul de conducere al HacTe, un important hub de artă x știință  x tehnologie al Barcelonei. ",
                "text-main-title-rolypoly": "Rolypoly~ <br/> un drum machine adaptiv și generativ",
                "text-main-rolypoly": "Axa timpului se regăsește rar între uneltele recente pentru artă AI. Totuși, și elemente de sincronizare / groove muzical pot fi augmentate sau generate. Acest atelier prezintă rolypoly~,un drum machine adaptiv și generativ conceput pentru cântat în timp real. Materiale suplimentare (cod sursă, documentație online, tutoriale) sunt și ele disponibile." +
                    "<br/><br/>" +
                    "Atelierul are două părți. Puteți participa la una, cealaltă, sau ambele."+
                    "<br/><br/>" +
                    "1. <b>Utilizare standard.</b> Trecem prin următorii pași:<br/>"+
                    "<ul>"+
                    "<li>scrierea unei părți de piesă pentru a fi cântată cu rolypoly~</li>"+
                    "<li>\"repetiții\" ale piesei pentru reglarea modelului AI</li>"+
                    "<li>cântarea live a piesei, incluzând secțiuni de improvizație unde modelului îi este permis să devieze de la partitură și să genereze ritmuri din mers</li>"+
                    "</ul><br/>"+
                    "2. <b>Tehnologie.</b> Vom acoperi noțiuni de:<br/>"+
                    "<ul>"+
                    "<li>reprezentare a secvențelor de tobe cu nuanțe de timing drept serii temporale pentru predicție și generare în modele tip Transformer</li>"+
                    "<li>implementare a acestora în PyTorch și preantrenare pe seturi de date precum Groove MIDI Dataset</li>"+
                    "<li>adaptarea modelului în TorchScript și LibTorch pentru includerea în proiecte C++</li>"+
                    "<li>folosirea Min-API pentru a implementa traseele de reglare și inferență într-un obiect Max</li>"+
                    "</ul><br/><br/>"+
                    "La finalul atelierului, participanții vor avea o perspectivă completă a modurilor de creație și interacțiune cu rolypoly~. În plus, vor înțelege cum funcționează obiectul Max din punct de vedere tehnic și vor avea cunoștințele necesare pentru a îl modifica sau a crea unelte similare bazate pe deep learning.",
                "text-main-author-rolypoly": "<b>Grigore Burloiu</b> este lector în departamentul Animație și Interactivitate al UNATC, unde coordonează programul de master Tehnologii interactive pentru arte performative și media (ITPMA), în cadrul căruia predă programare creativă și sisteme muzicale interactive."+
                    "<br/><br/>"+
                    "Grigore dezvoltă sisteme de acompaniament expresiv pentru muzica interactivă, și explorează utilizarea AI în artă - în special pentru sunet și text. A colaborat la numeroase lucrări artistice dintre care CORPUS VIDERUM (Ryan Walsh 2022, cu Hans Brouwer), VIOLIN CONCERTO (Fred Popovici 2021, cu Patricia Kopatchinskaja), LOST INTERFERENCES (Alexandru Berceanu 2021), URBAN DELTA SCAPES (Anne Dubos, IRCAM & CINETic 2019).<br/><br/>"+
                    "Academic: <a href=\"https://orcid.org/0000-0002-9059-9621\">https://orcid.org/0000-0002-9059-9621</a><br/>"+
                    "Site: <a href=\"https://rvirmoors.github.io/\">https://rvirmoors.github.io/</a><br/>"+
                    "Cod: <a href=\"https://github.com/rvirmoors\">https://github.com/rvirmoors</a><br/>"+
                    "Email: grigore.burloiu@unatc.ro",
                "text-main-sonic-explorations": "Explorează intersecția dintre sunet, electronică și habitatul uman, construind microfonul tău de contact care te va ajuta să surprinzi mișcările nevăzute din spațiul înconjurător. "+
                    "<br/><br/>"+
                    "Prin experimente practice, participanții vor fi introduși în conceptul de \"musique concrète\", care îi va ajuta să înțeleagă fundația muzicii electronice apoi vor construi un microfon de contact ce va permite participanților navigarea și găsirea de sunete aflate în spațiul înconjurător. În final, sunetele adunate vor constitui bazele unei compoziții audio colaborative."+
                    "<br/><br/>"+
                    "Participanții păstrează microfoanele create în cadrul workshopului. ",
                "when": "când",
                "where": "unde",
                "excelsior": "Teatrul Excelsior",
                "areal": "AREAL Spațiu pentru dezvoltare coregrafică",
                "areal-detailed": "AREAL Spațiu pentru dezvoltare coregrafică <br/> Anastasie Simu 2",
                "cndb": "Centrul Național al Dansului București",
                "cndb-detailed": "Centrul Național al Dansului București<br/>Blv. Marasesti 80-82",
                "unteatru": "Unteatru",
                "elvire-popesco": "Cinema Elvire Popesco",
                "galateca": "Galateca Gallery",
                "galateca-detailed": "Galateca Gallery <br/> C.A. Rosetti 2-4",
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
                "text-main-rhiza": "Te-ai scufundat în tine și ți-ai găsit atâtea dimensiuni noi. Respiră. Viața crește prin prezența ta. Atinge peretele. Simte vibrația. Descoperă mai departe în tine.<br/><br/> De-a lungul expoziției ciupercile care cresc în această lucrare vor evolua în feluri surprinzătoare.",
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
                "text-main-zimmt": "Ediția a treia a festivalului NOVA se distinge de cele precedente prin evenimentele conexe pe care le organizează în mai multe locuri din București. Prezentări, spectacole sau worskhopuri, acestea creează contextul unor întâlniri surprinzătoare între artiști cu interese variate, dar și între artiști și publicul larg.  <br/><br/>IQOS se alătură anul acesta festivalului NOVA și găzduiește, <b>în perioada 5-8 decembrie, de la ora 20:00, la Platforma Wolff</b>, o serie de evenimente speciale care împletesc instrumente noi de lucru, facilitate de tehnologie, cu arte performative și instalații inovatoare care devin cadrul de desfășurare a acestor întâlniri. <br/><br/><b>ZiMMT 3D Sound Lab</b> este o instalație de sunet 3D, dezvoltată de unul dintre cele mai prolifice centre din lume care studiază experiențele imersive create cu ajutorul sunetului. Construită din douazeci de difuzoare conectate, aceasta formează un sistem audio 3D, care oferă cea mai fidelă experiență a sunetului, superioară sistemului de sunet tip surround. La invitația organizatorilor și cu sprijinul IQOS, ZiMMT 3D Sound Lab devine, timp de 4 zile, cadrul de desfășurare a unor spectacole inedite.<br/><br/> În plus, pentru a completa la nivel vizual întreaga experiență, în interiorul instalației ZiMMT 3D Sound Lab va fi montată <b>WONDER</b>, instalația de lumini reactive la sunet, dezvoltată de artiștii Alexandros Raptis și Andrei Cozlac, care va rămâne la Platforma Wolff pe durata tuturor spectacolelor. Împreună, cele două instalații devin loc de explorare și experiment al artiștilor Judith State și Radu Dumitriu, Alexandros Raptis și Andrei Cozlac, Bogdan Moroșanu (Rockabella), Felix Deufel și Nikhil Nagaraj.<br/><br/> Aceste evenimente au rolul de a testa, în prezența publicului, posibilitățile oferite de sistemul de sunet 3D într-un context special, în care dansul contemporan, muzica și instalațiile de lumini vor contribui, pe rând, la efectul imersiv pe care sistemul ZiMMT îl creează. Programul celor 4 zile descrie un proces de explorare-cercetare a instalației de către artiști care activează în arte performative variate, cu scopul de a dezvălui noi valențe creative prilejuite de inovație. <br/><br/>Cei care vor să afle mai multe despre tehnologia din spatele unei construcții audio tridimensionale, pot lua parte la atelierul de 3 zile susținut de <b>Felix Deufel, inițiatorul ZiMMT, Spatial Audio Workshop, în perioada 6-8 decembrie, între orele 14:00-16:00, la Platforma Wolff</b>. Acest workshop face parte din secțiunea EDU a festivalului, organizată în parteneriat cu Goethe-Institut București și CINETic/Centrul Internațional de Cercetare și Educație în Tehnologii Inovativ Creative al UNATC.<br/><br/> <i>Experiența 3D Sound Lab x IQOS la Platforma Wolff se adresează persoanelor cu vârsta peste 18 ani. Participarea la evenimente, precum și la workshop se realizează prin achiziționarea unui bilet de pe Eventbook. </i>",
                "text-main-author-zimmt": "<div class=\"details-text-separator\"></div> <h2>5 DEC // 20:00 // WONDER // ALEXANDROS RAPTIS ȘI ANDREI COZLAC</h2>Primul eveniment este găzduit de Alexandros Raptis, artist pasionat de regia de teatru, light design-ul și compoziție muzicală, și Andrei Cozlac, artist video experimentalist, interesat de cele mai recente tehnologii multimedia. Aceștia au creat instalația de lumini reactive la sunet, WONDER, care va fi amplasată în interiorul instalației de sunet ZiMMT 3D Sound Lab. Special pentru acest eveniment, artiștii au dezvoltat și o muzică 3D, care va contribui la atmosfera imersivă indusă de instalația de sunet, dar și de cea de lumini. <br/><br/> <b>WONDER</b> este o instalație în care sunetul și lumina interacționează pentru a crea instanțe spațiu-timp care suscită imaginația și te ghidează să-ți creezi propriul fir narativ interior. Instalația va rămâne la Platforma Wolff în toate cele 4 zile de evenimente din cadrul ZiMMT 3D Sound Lab pentru a adăuga o nouă dimensiune spațiului și celorlalte spectacole.  <br/><br/> <b>ANDREI COZLAC</b> - este artist video și Lect. Univ. Dr. la Universitatea Națională de Arte George Enescu din Iași, Facultatea de Arte Vizuale, Secția Fotografie, Video și procesarea computerizată a imaginii, și profesor colaborator la secția de media a Facultății de Arte în Limba Română din Târgu Mureș. Experimentalist, interesat în ultimele tehnologii multimedia, a colaborat la numeroase proiecte independente de visuals, video-mapping, proiecții live. <b>ALEXANDROS-IOAN RAPTIS</b> - Principalele sale arii de interes sunt regia de teatru, lighting design-ul și compoziția muzicală. Locuiește și lucrează în București, dar se implică și în proiecte din alte orașe sau țări. Face muzică electronică împreună cu Andrei Raicu, în formula Al’iikhwa Ra, și este toboșarul formației MIDPOINT. În prezent, lucrează la o instalație interactivă audio numită „Chemical Soundscape”, prin care transformă proprietățile chimice ale substanțelor în compoziții sonore. <div class=\"details-text-separator\"></div><h2>6 DEC // JUDITH STATE ȘI RADU DUMITRIU </h2> <b><i>When the sound moves, it moves you.<br/> When the light goes on, you remember.</i></b> <br/><br/> Spectacolul invită participanții într-o călătorie de autocunoaștere prin intermediul muzicii și al dansului. Coregrafa Judith State și muzicianul Radu Dumitriu se vor întâlni cu publicul în spațiul Platformei Wolff pentru a porni împreună într-un proces de dezvăluire a sinelui, într-un context creat de instalația de lumini reactive la sunet, WONDER, precum și de instalația de sunet ZiMMT 3D Sound Lab. În cadrul acestui spectacol participativ, audiența, împreună cu artiștii, vor adăuga universului vizual și sonor creat de cele două instalații, straturi din istoria personală și, prin ele, vor crea o amprentă a prezentului comună cu cei care participă la această experiență. <br/><br/> Inspirați de arhitectura și estetica spațiului, de interacțiunea reciprocă, dar și de întâlnirea cu publicul și energia acestuia, cei doi performeri vor compune în timp real partituri muzicale, coregrafice și vocale pornind de la subiectele care stau la baza cercetării lor din ultimii patru ani: memoria, trecerea timpului și felul în care amintirile și formele pe care acestea le capătă în timp ne marchează în mod implacabil prezentul. <br/><br/> <b>JUDITH STATE</b> este dansatoare profesionistă, coregraf și actriță, cu o pregătire de bază în dansul clasic și licența în limbi străine. Bursieră a <b>Broadway Dance Centre</b> din New York și a <b>ImpulsTanz Vienna</b> prin Wild Card-ul oferit de Asociația 4Culture. În 2019, semnează conceptul proiectului modular <b>“Eemlék - amintire”</b> în cadrul căruia creează un performance cu muzică electronică live alături de muzicianul Radu Dumitriu, un scurtmetraj experimental de dans - <b>“You Who Never Arrived”</b>, selectat și premiat în festivaluri internaționale de film - un concert de muzică electronică și voce, și un atelier de mișcare și text adresat actorilor și dansatorilor profesioniști.<br/><br/> În 2022, continuă cercetarea pornită cu <b>“Emlék”</b> și creează performance-ul <b>“Ember(om)”</b>, analizând și aprofundând temele trecerii timpului, a informațiilor emoționale transmise transgenerațional, a memoriei, a amintirilor, a formelor pe care acestea le iau în timp și a felului în care ne marchează în mod implacabil prezentul. Este distribuită în filmul SIERANEVADA, în regia lui Cristi Puiu, care a avut premiera în 2016, la Festivalul de Film de la Cannes și este nominalizată la Premiile Gopo pentru cea mai bună actriță în rol secundar. În 2018, reia colaborarea cu Cristi Puiu pentru filmul „Malmkrog” și este distribuită în lungmetrajul de debut „Monștri.” al regizorului Marius Olteanu, care a avut premiera în 2019 la Festivalul De Film de la Berlin și îi aduce în 2020 premiul Gopo pentru cea mai bună actriță în rol principal. Urmează „Tata mută munții” al regizorului Daniel Sandu și filmul „REFUGIU”, în regia lui Liviu Mărghidan. Tot în 2021, colaborează cu regizorul ungur Krisztóf Gyuri la lungmetrajul de dans „Zenith”, iar în 2022 joacă în rolul principal al celui mai recent lungmetraj al regizorului Cristian Mungiu, „R.M.N.”, care a avut premiera la cea de-a 75-a ediție a Festivalului de Film de la Cannes. <br/><br/> <b>RADU DUMITRIU</b> - Compozitor/performer, absolvent al Universității Naționale de Muzică București și master la secția pian. Din 2006 colaborează în industria pop cu diverși artiști din mainstream atât ca instrumentist, cât și ca muzician de studio, iar din 2017 își creează propriul proiect de muzică electronică numit NEON, cu care și lansează propriul album în 2020, “Jupiter”. <br/><br/> În 2019, colaborează cu Judith State la toate cele patru părți ale proiectului modular “Emlék - amintire”: creează muzica live a performance-ului “Emlék”, scrie muzica filmului de scurtmetraj “You Who Never Arrived” (Best Original Score nominee Bucharest ShortCut CineFest), compune muzica pentru concertul electronic și voce și creează suportul sonor al atelierelor de mișcare, voce și sunet “Body Talks”, adresat dansatorilor și actorilor profesioniști. În 2022, continuă colaborarea cu Judith pentru performance-ul “Ember”, creând muzica pe baza aceleiași cercetări comune ce analizează trecerea timpului, memoria și felul în care amintirile ne modelează prezentul. <div class=\"details-text-separator\"></div><h2>7 DEC // ROCKABELLA – INvulnerabili // BOGDAN MOROȘANU</h2> Seria de performance-uri continuă în următoarea seară cu muzică. Astfel,  fanii trupei Rockabella vor putea descoperi noul album al acesteia, INvulnerabili, mixat live în format sonor tridimensional de Bogdan Moroșanu, membru al trupei. Rockabella îmbină influențe art-rock, indie pop și alternative în cântece-poveste despre momentele care ne transformă. Albumul urmează să fie lansat oficial în 9 decembrie. Prin adaptarea pieselor la formatul multi-channel al instalației, acestea vor genera o experiență muzicală complet diferită de cea a unui concert live sau intermediată de un sistem stereo.  <br/><br/> ROCKABELLA - a debutat în anul 2014 și are la activ numeroase concerte, showcase-uri și festivaluri în țară și în străinătate, precum și două albume de studio, “A World Outside” - 2015 și “Clarobscur -  2019. Din componența trupei fac parte: Teodora Moroșanu – voce, Ștefan Mustață – chitară, Bogdan Diaconeasa - chitară bass, Alina Horez -  vioară, Bogdan Moroșanu - tobe, producție muzicală. <br/><br/> Albumul “INvulnerabili” va fi lansat oficial în luna decembrie a acestui an. Este o colecție de zece cântece scrise în poate cea mai complicată perioadă a vieții trupei, pandemia fiind doar un fundal distopic pentru mișcările tectonice din viața membrilor. Albumul explorează ideea vulnerabilității ca sursă a curajului. Piese precum Hai să ne complicăm puțin! , Cutremur sau Harta dezvlăluie chipurile mascate ale traumei, pe când INvulnerabili, Arată-te și Până Departe povestesc despre curajul de a ne confrunta cu noi înșine și despre vindecarea prin apropiere.  <br/><br/> BOGDAN MOROȘANU - are peste 15 ani de experiență, în care a activat în toate laturile industriei: sunet de spectacol, sunet de film si TV, producție muzicală, dar și design și implementare de soluții audio și tratamente acustice. În ultimii 4 ani, activitatea lui a fost marcată de implicarea în cercetare și educație, Bogdan predând cursuri de producție audio la Facultatea de Electronică din cadrul Universității Politehnică din București, iar din 2021, a început studiile doctorale pe domeniul ingineriei de sunet. În domeniul muzical, Bogdan a lucrat cu trupe precum The Mono Jacks și Rockabella, în rol de muzician, dar și inginer de live și producător muzical; este adesea implicat în rol de consultant tehnic pentru festivaluri și evenimente muzicale din sfera rock și indie. <br/><br/> <div class=\"details-text-separator\"></div><h2>8 DEC // IF WE VANISH – IN SEARCH OF NATURAL SILENCE // FELIX DEUFEL & NIKHIL NAGARAJ</h2> Cel din urmă eveniment este susținut de <b>Felix Deufel, inițiatorul ZiMMT, și Nikhil Nagaraj, sound artist</b>, care prezintă la Platforma Wolff o parte din rezultatele proiectului If we vanish – In search of natural silence. Pornind de la capacitatea tehnologiei audio 3D de a reda fidel dinamica naturală a sunetelor în spațiu și a crea experiențe de ascultare similare cu realitatea, cei doi artiști și echipa lor au pornit spre cele mai sălbatice zone din India, neafectate de poluarea sonică sau de intervenția umană, pentru a înregistra amprenta sonoră a acestora. Pe parcursul proiectului, au captat peste 434 de ore material audio.  <br/><br/> Artiștii își vor prezenta colecția de date sonore ca o instalație de artă imersivă, în care publicul poate experimenta unele dintre aceste ultime locuri sălbatice. În această experiență, te vei cufunda în pădurile tropicale din sudul și nord-estul Indiei sau în peisajul montan arid din Himalaya și vei explora trei tipuri diferite de sunet: biofonie - produs de factori non-umani, geofonie - sunet natural non-biologic și antropofonie - zgomot generat de om.  <br/><br/> <b>NIKHIL NAGARAJ (Bangalore, India) și FELIX DEUFEL (Leipzig, Germania)</b> sunt doi sound designers și ingineri de sunet care au colaborat din 2017 în domeniul cercetării și producției audio 3D. Ambii împărtășesc o puternică fascinație pentru percepția auditivă umană, pentru sunet. Conceptele și lucrările lor îmbină designul, tehnologia, știința și filozofia. Experimente cu sunetul spațial în camere întunecate, eliminarea stimulului vizual complet le-a oferit artiștilor experiențe cruciale, halucinante. În lucrările lor, explorează influența sunetului și a muzicii asupra emoțiilor și imaginilor, puterea narativă și de amintire a sunetului și impactul său enorm asupra percepției spațiului. <br/><br/><b>ZiMMT</b> este o galerie, un spațiu de producție multimedia, o sală de concerte, un laborator de cercetare și o rețea de artiști și profesioniști care susțin inovația. Centrul oferă o platformă deosebită pentru diverse aplicații artistice imersive și experimente creative. Este una dintre puținele instituții culturale dotate cu un sistem audio 3D inovator format din 36 de difuzoare. Acesta permite dezvoltarea și prezentarea unor concerte imersive, care învăluie întregul spațiu, expoziții și performance-uri inedite. Pe lângă schimbul interdisciplinar dintre artiști și dezvoltatori, centrul se focusează în mod particular pe activități educaționale.",
                "text-main-nova-talks-program": "<b>PROGRAM:\n" +
                    "<ul>\n" +
                    "<li>PANELUL I: 12:00 - 13:15 </li>\n" +
                    "<li>COFFEE BREAK: 13:15 - 13:45 </li>\n" +
                    "<li>PANELUL AL II-LEA: 13:45 - 15:00 </li>\n" +
                    "</ul>\n" +
                    "</b>",
                "text-main-nova-talks": "<br/><br/>Prin acest eveniment, NOVA propune un maraton al inspirației și creează contextul unor discuții fascinante despre importanța noilor tehnologii în procesul creativ și în explorarea potențialul cognitiv uman. \n" +
                    "Astfel, în 26 noiembrie, la Cinema Elvire Popesco, publicul va cunoaște și va interacționa cu 5 speakeri, printre care se numără cercetători, dar și artiști ale căror lucrări sunt incluse în expoziția principală. \n" +
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
                "text-main-nova-digi-sense": "<h2>DIGI-Sense – cum înțelege, simte și experimentează corpul procesele de atribuire de sens atunci când lucrează cu instrumente digitale</h2><br/><br/>" +
                    "Pentru a înțelege și a fi capabili să folosim tehnologii și instrumente digitale, avem nevoie să le găsim sensul. De obicei, procesul de atribuire de sens (în tradiția propusă de Karl E. Weick) este studiat ca un proces predominant cognitiv, dând un rol foarte mic corpului. În proiectul DIGI-Sense (Digital Sensemaking) propunem să aducem corpul în prim plan pentru a înțelege cum ceva “are sens” pentru noi, în special în interacțiunea cu medii digitale. <br/><br/>Proiectul invită artiști și dansatori să exploreze cum corpul percepe, traduce, transformă și parcurge procese de atribuire de sens atunci când aceștia folosesc instrumente tech sau medii virtuale. În ce fel pot susține simțurile noastre, mușchii noștri, modul în care ne mișcăm membrele, viteza mișcărilor noastre, etc procesul de înțelegere a sensului? ",
                "text-main-author-nova-talks-digi-sense":"<b>Claudia Schnugg</b> este cercetătorul principal al proiectului Digital Sensemaking (DIGI-SENSE), implementat la Universitatea Johannes Kepler din Linz prin Communications Engineering Institute. Deține un doctorat în științe sociale și economie, cu focus suplimentar pe cultură. Cercetarea sa se concentrează pe artă, estetică și inițiative creative în contexte sociale interdisciplinare, cum ar fi managementul cunoașterii, procese de digitalizare, facilitarea colaborării dintre artă și știință și implicațiile aduse de aceasta. În plus, Claudia este curator și consultant artistic pentru mai multe organizații, în plan internațional, care desfășoară inițiative art-sci-tech <br/><br/>"+
                    "<b>Daniela Brill</b> are un masterat în Artă & Știință de la reputata Universitate de Arte Aplicate din Viena. Lucrează în colaborare cu instituții și rețele științifice ca Art at CMS al CERN, ORIGIN network of high energy physics, și cu instituții de artă ca ArtSci Center + Lab UCLA. Brill este și creatoarea și co-organizatoarea Suratómica, o rețea de colaborare la intersecția dintre artă și știință cu sediul în Bogotá, Columbia.  Focusul artistic și teoretic al Danielei este ideea de in-disciplinaritate și își propune să estompeze granițele și să găsească un loc de originalitate care să fie aplicat în procese de creație și de formare cu cunoștințe noi. În puține cuvinte, aria sa de cercetare este concentrată pe estetică și complexitate. ",
                "text-main-nova-talks-new-art": "<h2>.NewArt { foundation;}. Explorând un nou om cibernetic prin artă</h2><br/><br/>" +
                    ".NewArt { foundation;} este o organizație puternic implicată în sprijinirea comunității artistice în a dezvolta noi practici în plan tehnologic, științific, conceptual și social. Fundația promovează arta aflată la intersecția și transgresia cu știința și tehnologia, folosind asta ca o strategie de dezvoltare și împuternicire socială. Arta care nu este doar un martor, ci un agent activ."+
                    "<br/><br/>"+
                    "Una din principalele provocări ale fundației este dezvoltarea, conservarea și păstrarea moștenirii artistice venite din această interacțiune cu știința și tehnologia. Facem asta prin .NewArt { collection;} - un corp de peste 100 de lucrări ce acoperă, în mod eclectic, tot ce s-a întâmplat și tot ce se întâmplă în acest limbaj nou al artei. Următorul pas este crearea unui nou Centru de Artă în orașul Reus. "+
                    "<br/><br/>"+
                    "Ghidați de Vicente Matallana, directorul .NewArt {foundation;} & {collection;}, vom descoperi lucrări cheie ale colecției care abordează subiectul de om cibernetic. Această călătorie începe în 1972 cu lucrarea \"Mano Térmica de Artista\" de Luís Lugán, considerată a fi prima lucrare de artă robotică creată în Spania și se extinde până la cele mai recente producții și adăugiri la colecție. ",
                "text-main-author-nova-talks-new-art":"<b>Vicente Matallana</b>  is the director of the .NewArt { foundation;} & { collection;}, as well as the founder and director of LaAgencia, an independent new media art company created in 1998 in Madrid. LaAgencia is engaged in programs and projects focused on electronic art as an alternative paradigm of research and knowledge. With Joasia Krysa, he has been the co-director of the Kunsthal Aarhus, Aarhus. He is member of the advisory board of Kurator, and project director of ArtFutura, the veteran digital art festival in Spain. He is member of the steering committee of the HacTe, Barcelona’s new hub for Art, Science, and Technology.",
                "text-main-nova-talks-beyond-the-screen": "<h2>In spatele ecranului: Explorarea propriocepției și kinesteziei în era digitală, din perspectiva unui creator digital asupra viitorului </h2><br/><br/>" +
                    "O explorare fascinantă a convergenței tehnologiilor de vârf precum AR, XR, artă programabilă și AI , cu simțurile umane ale propriocepției și kinesteziei, în contextul ascensiunii rapide a lumilor digitale. Realitatea virtuală și augmentată este tot mai folosită în domeniul modei și machiajului, al sporturilor, al socializării și muncii, al artelor, călătoriilor, jocurilor și experiențelor imersive de toate felurile, trebuie să luăm în considerare modul în care aceste tehnologii influențează percepția noastră despre sine și modul în care schimbă conexiunea noastră fundamentală cu lumea fizică. "+
                    "<br/><br/>"+
                    "Descoperă alături de renumitului artist digital și specialist în tehnologie emergentă, Tammy Lovin,  întrebările intrigante legate de neurodivergența ca o consecință naturală a evoluției digitale și cum aceste experiențe transformative ne modelează și redefinesc însăși esența existenței umane. Afla posibilele implicații și oportunități pentru a te dezvolta personal , a-ti spori creativitatea și a schimba modul în care interacționezi cu lumea din jur. "+
                    "<br/><br/>"+
                    "Această prezentare va reimagina limitele experienței umane și va pune în lumina impactului profund al inovațiilor digitale asupra granițelor dintre virtual și tangibil. Pregătește-te să fii inspirat și să-ți pui în discuție percepțiile în această prezentare de neratat despre viitorul artei și experienței umane.",
                "text-main-author-nova-talks-beyond-the-screen":"<b>Tammy Lovin</b> este artist digital si specialistă în tehnologii emergente, precum AR, VR, XR , arta programabilă sau A.I art. , dar și NFT. Simultan Tammy dezvoltă proiecte de tip digital fashion și este arhitectă de spații în Metaverse. Lucrările sale eye-candy au fost expuse în multiple galerii internaționale din Miami, L.A. , Beijing, fiind prima româncă care a avut arta pe ecranele uriașe din Times Square NYC de mai multe ori, și care are o așa recunoaștere extinsă la nivel global în acest domeniu. Este frecvent invitată ca speaker specialist la conferințe internaționale și își continuă ascensiunea și pe social media cu videouri educative și tutoriale din zona de web3.",
                "text-main-nova-talks-white-contamination": "<h2>White Contamination</h2><br/><br/>" +
                    "O perspectivă personală asupra acestui proiect de fotografie extraordinar, White contamination (Contaminarea albă), pentru care artistul a primit locul 1 la secțiunea Creație a competiției Sony World Photography Awards. "+
                    "<br/><br/>"+
                    "În peisajele înzăpezite ale înălțimilor din Fukushima, Florian a surprins durerea invizibilă cauzată de radiații. Inspirat de gravurile japoneze, artistul spera să surprindă în lucrările sale percepțiile în continuă mișcare ale naturii, în locurile în care s-a acumulat cel mai ridicat grad de radiație."+
                    "<br/><br/>"+
                    "Cu un contor Geiger, Florian a măsurat gradul de contaminare radioactivă a locurilor în becquerel (Bq), o unitate de măsură care arată gradul de dezintegrare al atomului și numărul de mutații ale acestuia pe secundă. Printr-un proces de digitalizare, artistul a folosit aceste grade de radioactivitate măsurate și le-a aplicat prin diferite efecte grafice, pe imagini. Astfel, imaginile conțin această alterare a atomilor. Efectele de transparență, perspectivele sparte, crează această formă în mișcare, o lume efemeră, la fel ca în gravurile tradiționale japoneze. "+
                    "<br/><br/>"+
                    "Parte din imaginile din această serie sunt integrate în instalația interactivă Walk, ce poate fi vizitată, în cadrul acestei ediții a NOVA, între 26 și 29 septembrie, la Teatrelli.",
                "text-main-author-nova-talks-white-contamination":"<b>Florian Ruiz</b> este un artist cunoscut pentru felul inedit în care reușește să redea atmosfera locurilor abandonate sau distruse de intervenția nocivă a activității umane. Implicat în proiecte unice de exprimare a realităților sociale stringente prin imagine, Florin locuiește între Franța și Tokyo și este reprezentat de Galerie Sit Down din Paris. Lucrările sale au primit numeroase premii relevante și au fost expuse în Japonia, Olanda, Marea Britanie, Germania, Franța, Italia și Slovacia.",
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
                "edition-2022": "Ediția 2022",
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