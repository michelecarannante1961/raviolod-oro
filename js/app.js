/**
 * Raviolo d'Oro — Official Website Application
 * Full Bilingual Engine (IT / EN) + Interactive Booking System + Native Dialogs
 */

(function () {
  'use strict';

  // --- Translation Dictionary (IT / EN) ---
  const i18n = {
    it: {
      // Header & Nav
      nav_home: "Home",
      nav_story: "La Nostra Storia",
      nav_specialties: "Specialità",
      nav_menu: "Menu",
      nav_booking: "Prenotazioni",
      nav_reviews: "Recensioni",
      nav_location: "Dove Siamo",
      btn_book_table: "Prenota un Tavolo",
      nav_call_btn: "Tel: 06 678 2885",
      mobile_nav_call: "Prenota Tavolo: 06 678 2885",

      // Hero
      hero_badge_rating: "★ 4.7 su oltre 15.000 recensioni verificate",
      hero_badge_source: "Google & TripAdvisor",
      hero_title: "L'Arte della Pasta Fresca nel Cuore di Roma",
      hero_desc: "A due passi dal Pantheon e da Montecitorio, Raviolo d'Oro è il rifugio autentico dei sapori romani: celebri ravioli artigianali fatti a mano ogni giorno e i grandi classici della tradizione capitolina.",
      hero_btn_book: "Prenota Subito un Tavolo",
      hero_btn_call: "Prenota al 06 678 2885",
      hero_btn_menu: "Esplora il Menu",
      hero_status_open: "Aperto Oggi 11:30 – 23:30 (Cucina Continua)",
      hero_location_meta: "Via della Guglia 63, Roma (Montecitorio)",
      hero_phone_meta: "Prenota: 06 678 2885",
      hero_card_badge_title: "Pastificio Espresso",
      hero_card_badge_desc: "Pasta stesa e chiusa a mano ogni mattina",

      // Stats
      stat_reviews_num: "15.000+",
      stat_reviews_label: "Recensioni Certificate",
      stat_rating_num: "4.7 / 5",
      stat_rating_label: "Punteggio di Eccellenza",
      stat_craft_num: "100%",
      stat_craft_label: "Pasta Fatta a Mano",
      stat_dist_num: "2 Min",
      stat_dist_label: "A Piedi dal Pantheon",

      // Story Section
      story_tag: "Tradizione & Passione",
      story_title: "Nascosto nei Vicoli Storici, Lontano dal Caos Turistico",
      story_p1: "In Via della Guglia 63, a pochi metri da Piazza Montecitorio, c'è un luogo dove il tempo rallenta per lasciare spazio alla memoria culinaria di Roma.",
      story_p2: "Raviolo d'Oro nasce dall'amore per la vera pasta all'uovo tirata a sfoglia sottile. I nostri mastri pastai creano ogni giorno ripieni equilibrati che fondono l'anima popolare romana con un tocco di eleganza contemporanea.",
      story_feat1_title: "Sfoglia Tirata a Mano",
      story_feat1_desc: "Semola di grano duro 100% italiano e uova fresche di fattoria.",
      story_feat2_title: "Ingredienti del Territorio",
      story_feat2_desc: "Pecorino Romano DOP, guanciale amatriciano e carciofi romaneschi.",
      story_feat3_title: "Atmosfera Calda & Curata",
      story_feat3_desc: "Sale storiche accoglienti e suggestivo dehors illuminato.",
      story_feat4_title: "Accoglienza Capitolina",
      story_feat4_desc: "Staff caloroso e attento, per sentirsi sempre a casa.",
      story_quote_author: "Mastri Pastai — Raviolo d'Oro",
      story_quote: "«Il raviolo perfetto è un piccolo scrigno dorato che racchiude tutta la generosità di Roma.»",

      // Specialties
      spec_tag: "I Piatti Iconici",
      spec_title: "Le Creazioni Più Amate dai Nostri Ospiti",
      spec_subtitle: "Dai nostri celebri ravioli ripieni ai capisaldi della cucina romana eseguiti a regola d'arte.",
      badge_signature: "Piatto Firma",
      badge_classic: "Classico Romano",
      badge_tradition: "Tradizione Ebraico-Romana",

      spec1_title: "Ravioli Cacio e Pepe",
      spec1_desc: "Ravioli freschi fatti a mano ripieni di crema vellutata di Pecorino Romano DOP e pepe nero tostato in padella. Il perfetto connubio di cremosità ed energia.",
      spec2_title: "La Vera Carbonara",
      spec2_desc: "Rigatoni trafilati al bronzo con tuorli d'uovo da galline ruspanti, guanciale croccante pepato e abbondante Pecorino Romano DOP. Zero panna, solo passione.",
      spec3_title: "Carciofo alla Giudia",
      spec3_desc: "Il vero carciofo romanesco 'cimarolo', aperto a rosa e fritto due volte fino a diventare croccante come una patatina ma tenerissimo al cuore.",

      // Menu
      menu_tag: "La Nostra Carta",
      menu_title: "Viaggio Gastronomico tra Pasta Fresca e Tradizione",
      menu_subtitle: "Ingredienti accuratamente selezionati, ricette storiche e porzioni generose.",
      tab_all: "Tutto il Menu",
      tab_ravioli: "Ravioli Artigianali",
      tab_primi: "Primi Classici",
      tab_antipasti: "Antipasti",
      tab_secondi: "Secondi Piatti",
      tab_dessert: "Dolci Fatti in Casa",
      tab_vini: "Vini & Cantina",

      // Booking Engine
      book_tag: "Prenota il Tuo Tavolo",
      book_title: "Riserva il Tuo Posto in Pochi Secondi",
      book_subtitle: "Conferma immediata con selezione della sala preferita o del dehors romantico.",
      book_phone_strip_title: "Preferisci prenotare un tavolo per telefono?",
      book_phone_strip_desc: "Chiamaci per disponibilità immediata e prenotazioni dirette:",
      book_phone_btn: "06 678 2885",
      book_phone_num: "06 678 2885",
      lbl_booking_phone_alt: "Oppure prenota telefonicamente al",
      float_call_table: "Prenota: 06 678 2885",
      step1_label: "1. Data & Coperti",
      step2_label: "2. Dettagli Ospite",
      step3_label: "3. Conferma",

      lbl_date: "Seleziona Data",
      lbl_guests: "Numero di Persone",
      lbl_service_lunch: "Servizio Pranzo (12:00 – 15:00)",
      lbl_service_dinner: "Servizio Cena (19:00 – 23:00)",
      lbl_seating_pref: "Preferenza Tavolo",
      seat_indoor_title: "Sala Interna Storica",
      seat_indoor_desc: "Ambiente accogliente, climatizzato, atmosfera tipica",
      seat_outdoor_title: "Dehors & Giardino con Luci",
      seat_outdoor_desc: "Tavoli all'aperto nella suggestiva quiete di Via della Guglia",

      lbl_fullname: "Nome e Cognome",
      lbl_phone: "Numero di Telefono (WhatsApp)",
      lbl_email: "Indirizzo Email",
      lbl_notes: "Richieste Speciali / Intolleranze / Occasione",
      ph_fullname: "es. Mario Rossi",
      ph_phone: "+39 333 1234567",
      ph_email: "mario.rossi@example.com",
      ph_notes: "es. Compleanno, intolleranza al lattosio, seggiolone bimbo...",

      btn_confirm_booking: "Conferma Prenotazione Istantanea",
      booking_success_title: "Prenotazione Confermata!",
      booking_success_desc: "Abbiamo riservato il vostro tavolo al Raviolo d'Oro. Vi aspettiamo!",
      ticket_code_label: "Codice Prenotazione",
      ticket_name_label: "Ospite",
      ticket_date_label: "Data & Orario",
      ticket_guests_label: "Numero Ospiti",
      ticket_seating_label: "Zona Tavolo",
      ticket_phone_label: "Recapito",
      btn_whatsapp_confirm: "Invia Notifica WhatsApp al Locale",
      btn_calendar_add: "Aggiungi a Google Calendar",
      btn_print_ticket: "Stampa / Salva Ricevuta",
      active_booking_alert: "Hai una prenotazione attiva!",
      btn_view_active_booking: "Visualizza Ricevuta",
      btn_cancel_booking: "Annulla",

      // Reviews
      reviews_tag: "Dicono di Noi",
      reviews_title: "L'Esperienza Raccontata da Chi Ci Ha Scelto",
      trust_based_on: "In base a oltre 15.000 recensioni verificate",
      btn_write_review: "Lascia una Recensione su Google",

      // Location
      loc_tag: "Come Raggiungerci",
      loc_title: "Nel Cuore del Centro Storico di Roma",
      loc_address_title: "Indirizzo",
      loc_address_val: "Via della Guglia, 63, 00186 Roma RM (Piazza Montecitorio)",
      loc_hours_title: "Orari di Apertura",
      loc_hours_val: "Lunedì – Domenica: 11:30 – 23:30 (Orario Continuato)",
      loc_phone_title: "Telefono Prenotazioni & Info",
      loc_phone_val: "Tavoli: 06 678 2885  •  WhatsApp: +39 352 089 1239",
      walk_montecitorio: "1 Min da Piazza Montecitorio",
      walk_pantheon: "2 Min dal Pantheon",
      walk_navona: "5 Min da Piazza Navona",
      walk_trevi: "7 Min da Fontana di Trevi",
      btn_open_google_maps: "Indicazioni Google Maps",
      btn_open_apple_maps: "Apri Apple Maps",

      // Footer
      footer_about_desc: "Ristorante e pastificio artigianale romano a due passi dal Pantheon. Pasta fresca fatta a mano, specialità della tradizione e una calorosa accoglienza.",
      footer_phone_lbl: "Prenota Tavolo:",
      footer_col_links: "Navigazione",
      footer_col_hours: "Orari di Cucina",
      footer_col_contact: "Contatti Diretti",
      footer_rights: "© 2026 Raviolo d'Oro. Tutti i diritti riservati.",
      footer_legal: "lemm srl Roma – Via della Guglia 62-66, 00186 Roma (RM) – REA 1549837 | P.IVA 14841901003",
      footer_credit: "Progettato con standard web moderni per alte prestazioni e conversioni.",
            // Specialty Tag Pills
      pill_fresh_pasta: "Pasta Fresca Espresso",
      pill_pecorino: "Pecorino DOP",
      pill_vegetarian: "Vegetariano",
      pill_guanciale: "Guanciale Croccante",
      pill_yolks: "Tuorli Freschi",
      pill_traditional_recipe: "Ricetta Tradizionale",
      pill_artichoke: "Carciofo Romanesco",
      pill_golden_fried: "Frittura Dorata",
      pill_gluten_free: "Senza Glutine",

      // Menu Item Labels
      lbl_chef_rec: "★ Piatto Consigliato",
      lbl_handmade_pasta: "Pasta Fatta in Casa",
      lbl_chef_specialty: "Specialità dello Chef",
      lbl_fresh_catch: "Pescato Fresco",
      lbl_most_popular: "Il Più Richiesto",
      lbl_roman_classic: "Classico Capitolino",
      lbl_100_gf: "100% Senza Glutine",
      lbl_warm_starter: "Antipasto Caldo",
      lbl_trad_main: "Secondo Tradizionale",
      lbl_homemade: "Fatto in Casa",
      lbl_wine_labels: "Oltre 60 Etichette",
      lbl_wine_price_from: "da € 22,00",

      // Booking Form specifics
      lbl_guests_suffix: "ospiti al tavolo",
      err_name: "Inserisci il nome dell'ospite (almeno 3 caratteri).",
      err_phone: "Inserisci un numero di telefono valido per la conferma.",
      err_email: "Inserisci un indirizzo email valido.",
      lbl_no_card: "Nessuna carta richiesta • Cancellazione gratuita in qualsiasi momento",

      // Reviews Badges & Meta
      badge_cert_excellence: "Certificato di Eccellenza",
      badge_verified_review: "Recensione Verificata",
      badge_recent_visit: "Visita recente",
      badge_dinner_friends: "Cena con amici",
      badge_couple_tourist: "Turista in coppia",
      city_istanbul: "Istanbul, Turchia",
      city_warsaw: "Varsavia, Polonia",
      city_madrid: "Madrid, Spagna",

      // Footer Kitchen days
      day_mon: "Lunedì: 11:30 – 23:30",
      day_tue: "Martedì: 11:30 – 23:30",
      day_wed: "Mercoledì: 11:30 – 23:30",
      day_thu: "Giovedì: 11:30 – 23:30",
      day_fri: "Venerdì: 11:30 – 23:30",
      day_sat: "Sabato: 11:30 – 23:30",
      day_sun: "Domenica: 11:30 – 23:30",
      day_nostop: "★ Orario Continuato No Stop",
      chat_whatsapp: "Prenota su WhatsApp"
    },

    en: {
      // Header & Nav
      nav_home: "Home",
      nav_story: "Our Story",
      nav_specialties: "Specialties",
      nav_menu: "Menu",
      nav_booking: "Reservations",
      nav_reviews: "Reviews",
      nav_location: "Location",
      btn_book_table: "Book a Table",
      nav_call_btn: "Tel: +39 06 678 2885",
      mobile_nav_call: "Book a Table: +39 06 678 2885",

      // Hero
      hero_badge_rating: "★ 4.7 based on 15,000+ verified reviews",
      hero_badge_source: "Google & TripAdvisor",
      hero_title: "The Art of Fresh Handmade Pasta in the Heart of Rome",
      hero_desc: "Just steps away from the Pantheon and Montecitorio, Raviolo d'Oro is the authentic sanctuary of Roman cuisine: legendary handmade ravioli crafted daily and timeless Roman classics.",
      hero_btn_book: "Reserve Your Table Now",
      hero_btn_call: "Book by Phone: +39 06 678 2885",
      hero_btn_menu: "Explore Menu",
      hero_status_open: "Open Today 11:30 AM – 11:30 PM (All-Day Dining)",
      hero_location_meta: "Via della Guglia 63, Rome (near Pantheon)",
      hero_phone_meta: "Bookings: +39 06 678 2885",
      hero_card_badge_title: "Handmade Daily",
      hero_card_badge_desc: "Fresh egg pasta rolled & filled every morning",

      // Stats
      stat_reviews_num: "15,000+",
      stat_reviews_label: "Verified Reviews",
      stat_rating_num: "4.7 / 5",
      stat_rating_label: "Excellence Rating",
      stat_craft_num: "100%",
      stat_craft_label: "Handcrafted Pasta",
      stat_dist_num: "2 Min",
      stat_dist_label: "Walk from Pantheon",

      // Story Section
      story_tag: "Tradition & Passion",
      story_title: "Tucked in Historic Roman Alleys, Away from Tourist Traps",
      story_p1: "At Via della Guglia 63, only a few paces from Piazza Montecitorio, lies a dining room where time slows down to celebrate genuine Roman gastronomic heritage.",
      story_p2: "Raviolo d'Oro is born from an uncompromising devotion to authentic fresh egg pasta rolled razor-thin. Every single day, our master pasta makers balance traditional warmth with contemporary culinary finesse.",
      story_feat1_title: "Rolled & Crimped by Hand",
      story_feat1_desc: "100% Italian durum wheat semolina and fresh farm eggs.",
      story_feat2_title: "Locally Sourced Roman Terroir",
      story_feat2_desc: "AOP Pecorino Romano, seasoned amatriciano guanciale, and roman artichokes.",
      story_feat3_title: "Warm & Elegant Ambiance",
      story_feat3_desc: "Cozy vaulted interior dining and an intimate lantern-lit outdoor patio.",
      story_feat4_title: "Genuine Roman Hospitality",
      story_feat4_desc: "Attentive, friendly English-speaking service where you feel right at home.",
      story_quote_author: "Master Pasta Makers — Raviolo d'Oro",
      story_quote: "«A perfect raviolo is a little golden treasure holding the entire soul and generosity of Rome.»",

      // Specialties
      spec_tag: "Signature Dishes",
      spec_title: "Beloved Favorites from Our Guests",
      spec_subtitle: "From our celebrated filled ravioli to Rome's quintessential pasta executed with mastery.",
      badge_signature: "Signature Dish",
      badge_classic: "Roman Classic",
      badge_tradition: "Jewish-Roman Heritage",

      spec1_title: "Ravioli Cacio e Pepe",
      spec1_desc: "Fresh handcrafted ravioli filled with a silky reduction of Pecorino Romano DOP and freshly cracked toasted black peppercorns. Pure creamy indulgence.",
      spec2_title: "Authentic Carbonara",
      spec2_desc: "Bronze-die rigatoni with rich free-range egg yolks, crispy cured guanciale, and abundant Pecorino Romano DOP. Strictly no cream, 100% authentic Rome.",
      spec3_title: "Carciofo alla Giudia",
      spec3_desc: "Authentic Roman artichoke fried twice until its outer petals turn crispy like golden chips while retaining an ultra-tender, aromatic heart.",

      // Menu
      menu_tag: "Our À la Carte Menu",
      menu_title: "A Culinary Journey Through Fresh Pasta & Roman Heritage",
      menu_subtitle: "Prime certified ingredients, time-honored recipes, and generous Italian portions.",
      tab_all: "Complete Menu",
      tab_ravioli: "Artisan Ravioli",
      tab_primi: "Classic Pastas",
      tab_antipasti: "Antipasti",
      tab_secondi: "Main Courses",
      tab_dessert: "Homemade Desserts",
      tab_vini: "Wines & Cellar",

      // Booking Engine
      book_tag: "Instant Online Booking",
      book_title: "Reserve Your Table in Seconds",
      book_subtitle: "Instant confirmation with your choice of cozy indoor dining or romantic patio seating.",
      book_phone_strip_title: "Prefer to reserve a table by phone?",
      book_phone_strip_desc: "Call our hosting team for instant table availability and booking:",
      book_phone_btn: "+39 06 678 2885",
      book_phone_num: "+39 06 678 2885",
      lbl_booking_phone_alt: "Or reserve your table by phone at",
      float_call_table: "Book: +39 06 678 2885",
      step1_label: "1. Date & Guests",
      step2_label: "2. Guest Details",
      step3_label: "3. Confirmation",

      lbl_date: "Select Date",
      lbl_guests: "Number of Guests",
      lbl_service_lunch: "Lunch Service (12:00 PM – 3:00 PM)",
      lbl_service_dinner: "Dinner Service (7:00 PM – 11:00 PM)",
      lbl_seating_pref: "Table Preference",
      seat_indoor_title: "Historic Indoor Room",
      seat_indoor_desc: "Cozy, climate-controlled, authentic Roman ambiance",
      seat_outdoor_title: "Lantern-lit Outdoor Patio",
      seat_outdoor_desc: "Al-fresco dining in the peaceful, historic Via della Guglia",

      lbl_fullname: "Full Name",
      lbl_phone: "Phone Number (WhatsApp)",
      lbl_email: "Email Address",
      lbl_notes: "Special Requests / Allergies / Occasion",
      ph_fullname: "e.g. John Smith",
      ph_phone: "+1 (555) 019-2834",
      ph_email: "john.smith@example.com",
      ph_notes: "e.g. Anniversary dinner, gluten sensitivity, high chair needed...",

      btn_confirm_booking: "Confirm Instant Reservation",
      booking_success_title: "Reservation Confirmed!",
      booking_success_desc: "We have reserved your table at Raviolo d'Oro. We look forward to welcoming you!",
      ticket_code_label: "Booking Code",
      ticket_name_label: "Guest Name",
      ticket_date_label: "Date & Time",
      ticket_guests_label: "Party Size",
      ticket_seating_label: "Seating Area",
      ticket_phone_label: "Contact",
      btn_whatsapp_confirm: "Send WhatsApp Notice to Restaurant",
      btn_calendar_add: "Add to Google Calendar",
      btn_print_ticket: "Print / Save Receipt",
      active_booking_alert: "You have an active reservation!",
      btn_view_active_booking: "View Receipt",
      btn_cancel_booking: "Cancel Booking",

      // Reviews
      reviews_tag: "Guest Testimonials",
      reviews_title: "Loved by Travelers & Roman Locals Alike",
      trust_based_on: "Based on 15,000+ verified guest reviews",
      btn_write_review: "Write a Google Review",

      // Location
      loc_tag: "How to Find Us",
      loc_title: "Right in the Heart of Historic Rome",
      loc_address_title: "Address",
      loc_address_val: "Via della Guglia, 63, 00186 Rome, Italy (Montecitorio / Pantheon)",
      loc_hours_title: "Opening Hours",
      loc_hours_val: "Monday – Sunday: 11:30 AM – 11:30 PM (Non-Stop Kitchen)",
      loc_phone_title: "Phone Reservations & Info",
      loc_phone_val: "Bookings: +39 06 678 2885  •  WhatsApp: +39 352 089 1239",
      walk_montecitorio: "1 Min from Piazza Montecitorio",
      walk_pantheon: "2 Min from the Pantheon",
      walk_navona: "5 Min from Piazza Navona",
      walk_trevi: "7 Min from Trevi Fountain",
      btn_open_google_maps: "Google Maps Directions",
      btn_open_apple_maps: "Open Apple Maps",

      // Footer
      footer_about_desc: "Handcrafted pasta workshop and traditional Roman restaurant steps from the Pantheon. Fresh ravioli rolled daily, Roman classics, and genuine hospitality.",
      footer_phone_lbl: "Table Reservations:",
      footer_col_links: "Quick Navigation",
      footer_col_hours: "Kitchen Hours",
      footer_col_contact: "Direct Contact",
      footer_rights: "© 2026 Raviolo d'Oro. All rights reserved.",
      footer_legal: "lemm srl Roma – Via della Guglia 62-66, 00186 Roma (RM) – REA 1549837 | VAT IT14841901003",
      footer_credit: "Built with modern web standards for lightning speed and conversion.",
            // Specialty Tag Pills
      pill_fresh_pasta: "Fresh Artisan Pasta",
      pill_pecorino: "Pecorino Romano PDO",
      pill_vegetarian: "Vegetarian",
      pill_guanciale: "Crispy Cured Guanciale",
      pill_yolks: "Farm Fresh Yolks",
      pill_traditional_recipe: "Traditional Recipe",
      pill_artichoke: "Roman Artichoke",
      pill_golden_fried: "Crispy Golden Fried",
      pill_gluten_free: "Gluten-Free",

      // Menu Item Labels
      lbl_chef_rec: "★ Chef Recommendation",
      lbl_handmade_pasta: "Handcrafted Pasta",
      lbl_chef_specialty: "Chef Specialty",
      lbl_fresh_catch: "Fresh Catch of the Day",
      lbl_most_popular: "Most Popular",
      lbl_roman_classic: "Roman Classic",
      lbl_100_gf: "100% Gluten-Free",
      lbl_warm_starter: "Warm Starter",
      lbl_trad_main: "Traditional Main Course",
      lbl_homemade: "Homemade Daily",
      lbl_wine_labels: "Over 60 Wine Labels",
      lbl_wine_price_from: "from € 22.00",

      // Booking Form specifics
      lbl_guests_suffix: "guests at the table",
      err_name: "Please enter guest name (at least 3 characters).",
      err_phone: "Please enter a valid phone number for confirmation.",
      err_email: "Please enter a valid email address.",
      lbl_no_card: "No credit card required • Free cancellation at any time",

      // Reviews Badges & Meta
      badge_cert_excellence: "Certificate of Excellence",
      badge_verified_review: "Verified Review",
      badge_recent_visit: "Recent visit",
      badge_dinner_friends: "Dinner with friends",
      badge_couple_tourist: "Couple travelers",
      city_istanbul: "Istanbul, Turkey",
      city_warsaw: "Warsaw, Poland",
      city_madrid: "Madrid, Spain",

      // Footer Kitchen days
      day_mon: "Monday: 11:30 AM – 11:30 PM",
      day_tue: "Tuesday: 11:30 AM – 11:30 PM",
      day_wed: "Wednesday: 11:30 AM – 11:30 PM",
      day_thu: "Thursday: 11:30 AM – 11:30 PM",
      day_fri: "Friday: 11:30 AM – 11:30 PM",
      day_sat: "Saturday: 11:30 AM – 11:30 PM",
      day_sun: "Sunday: 11:30 AM – 11:30 PM",
      day_nostop: "★ All-Day Dining No Stop",
      chat_whatsapp: "WhatsApp Reservation"
    }
  };

  // State
  let currentLang = localStorage.getItem('raviolodoro_lang') || 'it';
  let bookingState = {
    guests: 2,
    date: '',
    time: '20:00',
    seating: 'indoor',
    name: '',
    phone: '',
    email: '',
    notes: '',
    code: ''
  };

  // --- Initializer ---
  document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initNavigation();
    initMenuFilter();
    initBookingEngine();
    initDialogs();
    initActiveBookingCheck();
    initLiveStatusBadge();
    initAccessibilityFallbacks();
  });

  // --- Language Switcher Engine ---
  function initLanguage() {
    const langBtns = document.querySelectorAll('[data-set-lang]');
    langBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const selected = btn.dataset.setLang;
        setLanguage(selected);
      });
    });
    setLanguage(currentLang, false);
  }

  function setLanguage(lang, save = true) {
    if (!i18n[lang]) lang = 'it';
    currentLang = lang;
    if (save) {
      localStorage.setItem('raviolodoro_lang', lang);
    }

    document.documentElement.lang = lang === 'it' ? 'it-IT' : 'en-US';

    // Update active class on switchers
    document.querySelectorAll('[data-set-lang]').forEach(b => {
      b.classList.toggle('active', b.dataset.setLang === lang);
    });

    // Translate all text nodes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (i18n[lang][key]) {
        el.textContent = i18n[lang][key];
      }
    });

    // Translate placeholder attributes
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.dataset.i18nPh;
      if (i18n[lang][key]) {
        el.placeholder = i18n[lang][key];
      }
    });

    // Update dishes description if bilingual
    document.querySelectorAll('[data-desc-it]').forEach(el => {
      const desc = lang === 'it' ? el.dataset.descIt : el.dataset.descEn;
      if (desc) el.textContent = desc;
    });

    document.querySelectorAll('[data-name-it]').forEach(el => {
      const name = lang === 'it' ? el.dataset.nameIt : el.dataset.nameEn;
      if (name) el.textContent = name;
    });
  }

  // --- Navigation & Scrollspy ---
  function initNavigation() {
    const header = document.querySelector('.site-header');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Sticky glass on scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      // Active Section Scrollspy
      const fromTop = window.scrollY + 120;
      navLinks.forEach(link => {
        const section = document.querySelector(link.hash);
        if (section) {
          if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
          ) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        }
      });
    });

    // Mobile Hamburger
    if (mobileToggle && navMenu) {
      mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        const isOpen = navMenu.classList.contains('open');
        mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });

      // Close menu on link click
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('open');
          mobileToggle.setAttribute('aria-expanded', 'false');
        });
      });
    }
  }

  // --- Interactive Menu Category Filter ---
  function initMenuFilter() {
    const filterBtns = document.querySelectorAll('.menu-tab-btn');
    const menuItems = document.querySelectorAll('.menu-item-row');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.dataset.category;

        menuItems.forEach(item => {
          if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'flex';
            item.style.animation = 'fadeIn 0.3s ease-out';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // --- Interactive Booking Engine ---
  function initBookingEngine() {
    const dateInput = document.getElementById('bookingDate');
    const guestsCountEl = document.getElementById('guestsCountDisplay');
    const btnMinus = document.getElementById('guestMinus');
    const btnPlus = document.getElementById('guestPlus');
    const timeSlots = document.querySelectorAll('.time-slot-btn');
    const seatingCards = document.querySelectorAll('.seating-card');
    const bookingForm = document.getElementById('bookingForm');

    // Date Setup: minimum date is today!
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.min = today;
      dateInput.value = today;
      bookingState.date = today;

      dateInput.addEventListener('change', (e) => {
        bookingState.date = e.target.value;
      });
    }

    // Party Size Counter
    if (btnMinus && btnPlus && guestsCountEl) {
      btnMinus.addEventListener('click', () => {
        if (bookingState.guests > 1) {
          bookingState.guests--;
          guestsCountEl.textContent = bookingState.guests;
          btnMinus.disabled = bookingState.guests <= 1;
          btnPlus.disabled = false;
        }
      });

      btnPlus.addEventListener('click', () => {
        if (bookingState.guests < 14) {
          bookingState.guests++;
          guestsCountEl.textContent = bookingState.guests;
          btnMinus.disabled = false;
          btnPlus.disabled = bookingState.guests >= 14;
        }
      });
    }

    // Time Slot Selectors
    timeSlots.forEach(slot => {
      slot.addEventListener('click', () => {
        timeSlots.forEach(s => s.classList.remove('active'));
        slot.classList.add('active');
        bookingState.time = slot.dataset.time;
      });
    });

    // Seating Preference Radio Cards
    seatingCards.forEach(card => {
      card.addEventListener('click', () => {
        seatingCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        bookingState.seating = card.dataset.seating;
      });
    });

    // Form Submission & Validation
    if (bookingForm) {
      bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Standard HTML5 validation check
        if (!bookingForm.checkValidity()) {
          bookingForm.reportValidity();
          return;
        }

        const nameInput = document.getElementById('guestName');
        const phoneInput = document.getElementById('guestPhone');
        const emailInput = document.getElementById('guestEmail');
        const notesInput = document.getElementById('guestNotes');

        bookingState.name = nameInput ? nameInput.value.trim() : '';
        bookingState.phone = phoneInput ? phoneInput.value.trim() : '';
        bookingState.email = emailInput ? emailInput.value.trim() : '';
        bookingState.notes = notesInput ? notesInput.value.trim() : '';

        // Generate Booking Code: ROMA-XXXX
        const randNum = Math.floor(1000 + Math.random() * 9000);
        bookingState.code = `ROMA-${randNum}`;

        // Save active booking in localStorage
        localStorage.setItem('raviolodoro_active_booking', JSON.stringify(bookingState));

        // Open Confirmation Dialog
        showConfirmationTicket(bookingState);
        updateActiveBookingBanner();
      });
    }
  }

  // --- Confirmation Ticket & Receipt Dialog ---
  function showConfirmationTicket(state) {
    const dialog = document.getElementById('bookingConfirmationModal');
    if (!dialog) return;

    // Fill in ticket details
    const codeEl = document.getElementById('ticketCode');
    const nameEl = document.getElementById('ticketName');
    const dateEl = document.getElementById('ticketDateTime');
    const guestsEl = document.getElementById('ticketGuests');
    const seatingEl = document.getElementById('ticketSeating');
    const phoneEl = document.getElementById('ticketPhone');
    const btnWhatsApp = document.getElementById('ticketBtnWhatsApp');
    const btnCal = document.getElementById('ticketBtnCalendar');
    const btnPrint = document.getElementById('ticketBtnPrint');

    if (codeEl) codeEl.textContent = state.code;
    if (nameEl) nameEl.textContent = state.name;
    if (dateEl) dateEl.textContent = `${state.date} • ${state.time}`;
    if (guestsEl) guestsEl.textContent = `${state.guests} ${currentLang === 'it' ? 'Persone' : 'Guests'}`;
    if (phoneEl) phoneEl.textContent = state.phone;

    if (seatingEl) {
      const isIndoor = state.seating === 'indoor';
      seatingEl.textContent = isIndoor
        ? (currentLang === 'it' ? 'Sala Interna Storica' : 'Historic Indoor Room')
        : (currentLang === 'it' ? 'Dehors Esterno con Luci' : 'Lantern-lit Patio');
    }

    // Direct WhatsApp Notice Link
    if (btnWhatsApp) {
      const waText = currentLang === 'it'
        ? `Salve Ristorante Raviolo d'Oro! Vorrei confermare la mia prenotazione codice *${state.code}* a nome di *${state.name}* per *${state.guests} persone* il *${state.date}* alle ore *${state.time}* (${state.seating === 'indoor' ? 'Sala Interna' : 'Dehors'}). Grazie!`
        : `Hello Raviolo d'Oro! I would like to confirm my booking code *${state.code}* for *${state.name}*, party of *${state.guests}* on *${state.date}* at *${state.time}* (${state.seating === 'indoor' ? 'Indoor' : 'Outdoor Patio'}). Thank you!`;

      btnWhatsApp.href = `https://wa.me/393520891239?text=${encodeURIComponent(waText)}`;
    }

    // Google Calendar Link
    if (btnCal) {
      const [year, month, day] = state.date.split('-');
      const [hour, minute] = state.time.split(':');
      const startIso = `${year}${month}${day}T${hour}${minute}00`;
      const endHour = String(parseInt(hour, 10) + 2).padStart(2, '0');
      const endIso = `${year}${month}${day}T${endHour}${minute}00`;

      const calTitle = encodeURIComponent("Pranzo/Cena al Raviolo d'Oro (Roma)");
      const calDetails = encodeURIComponent(`Prenotazione confermata (Codice: ${state.code})\nOspiti: ${state.guests}\nVia della Guglia 63, Roma (Montecitorio/Pantheon)\nTel: +39 06 678 2885`);
      const calLoc = encodeURIComponent("Via della Guglia, 63, 00186 Roma RM");

      btnCal.href = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${calTitle}&dates=${startIso}/${endIso}&details=${calDetails}&location=${calLoc}`;
    }

    // Print Button
    if (btnPrint) {
      btnPrint.onclick = () => window.print();
    }

    // Native showModal
    dialog.showModal();
  }

  // --- Active Booking Persistence Banner ---
  function initActiveBookingCheck() {
    updateActiveBookingBanner();

    const btnView = document.getElementById('btnViewActiveBooking');
    const btnCancel = document.getElementById('btnCancelActiveBooking');

    if (btnView) {
      btnView.addEventListener('click', () => {
        const stored = localStorage.getItem('raviolodoro_active_booking');
        if (stored) {
          const parsed = JSON.parse(stored);
          showConfirmationTicket(parsed);
        }
      });
    }

    if (btnCancel) {
      btnCancel.addEventListener('click', () => {
        const confirmMsg = currentLang === 'it' 
          ? "Sei sicuro di voler annullare questa prenotazione?" 
          : "Are you sure you want to cancel this reservation?";
        if (confirm(confirmMsg)) {
          localStorage.removeItem('raviolodoro_active_booking');
          updateActiveBookingBanner();
        }
      });
    }
  }

  function updateActiveBookingBanner() {
    const banner = document.getElementById('activeBookingBanner');
    const stored = localStorage.getItem('raviolodoro_active_booking');
    if (!banner) return;

    if (stored) {
      const booking = JSON.parse(stored);
      banner.classList.add('visible');
      const textEl = document.getElementById('activeBookingText');
      if (textEl) {
        textEl.textContent = `${booking.date} • ${booking.time} (${booking.guests} ${currentLang === 'it' ? 'ospiti' : 'guests'}) — Cod. ${booking.code}`;
      }
    } else {
      banner.classList.remove('visible');
    }
  }

  // --- Native Dialog Light Dismiss Fallback (as required by modern-web-guidance) ---
  function initDialogs() {
    const dialogs = document.querySelectorAll('dialog');

    dialogs.forEach(dialog => {
      // Close buttons
      dialog.querySelectorAll('.dialog-close-btn, [data-dialog-close]').forEach(btn => {
        btn.addEventListener('click', () => dialog.close());
      });

      // Fallback for browsers without native 'closedby="any"' support (Safari, etc.)
      if (!('closedBy' in HTMLDialogElement.prototype)) {
        dialog.addEventListener('click', (event) => {
          if (event.target !== dialog) return;
          const rect = dialog.getBoundingClientRect();
          const isDialogContent = (
            rect.top <= event.clientY &&
            event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX &&
            event.clientX <= rect.left + rect.width
          );
          if (!isDialogContent) {
            dialog.close();
          }
        });
      }
    });
  }

  // --- Real-time Open/Closed Badge ---
  function initLiveStatusBadge() {
    const statusEl = document.getElementById('liveRestaurantStatus');
    if (!statusEl) return;

    const now = new Date();
    // Rome Time check (approx)
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const timeDecimal = hours + minutes / 60;

    // Open from 11:30 (11.5) to 23:30 (23.5)
    const isOpen = timeDecimal >= 11.5 && timeDecimal <= 23.5;
    if (isOpen) {
      statusEl.innerHTML = `<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#22c55e;margin-right:6px;animation:pulse 2s infinite"></span> ${currentLang === 'it' ? 'Aperto Ora • Cucina Attiva' : 'Open Now • Kitchen Active'}`;
      statusEl.style.color = '#86efac';
    } else {
      statusEl.innerHTML = `<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#f59e0b;margin-right:6px;"></span> ${currentLang === 'it' ? 'Chiuso Ora • Apertura ore 11:30' : 'Currently Closed • Opens at 11:30 AM'}`;
      statusEl.style.color = '#fde68a';
    }
  }

  // --- Accessibility & Validation Feedback (as per modern-web-guidance) ---
  function initAccessibilityFallbacks() {
    const syncAria = (el) => {
      if (el && el.setAttribute && el.matches) {
        el.setAttribute('aria-invalid', el.matches(':user-invalid') ? 'true' : 'false');
      }
    };

    document.addEventListener('blur', (e) => syncAria(e.target), true);
    document.addEventListener('input', (e) => {
      if (e.target.hasAttribute && e.target.hasAttribute('aria-invalid')) syncAria(e.target);
    });
  }

})();
