/* ========================================
   Associação Venezuela Amiga — Scripts
   ======================================== */

(function() {
    'use strict';

    // ========================================
    // i18n — Translations
    // ========================================
    const translations = {
        es: {
            page_title: 'Asociación Venezuela Amiga — Eventos 2026',
            meta_description: 'Asociación Venezuela Amiga — Conoce los eventos y actividades de la Asociación Venezuela Amiga.',
            nav_inicio: 'Inicio',
            nav_eventos: 'Eventos',
            nav_actividades: 'Actividades',
            nav_sobre: 'Sobre',
            nav_contacto: 'Contacto',
            nav_portal: 'Portal del Socio',
            hero_tagline: 'Venezolanos en Portugal',
            btn_call: 'Llamar',
            link_eventos: 'Eventos 2026',
            link_actividades: 'Actividades Periódicas',
            link_sobre: '¿Quiénes Somos?',
            hero_cta: 'Únete a nuestra comunidad venezolana en el Algarve',
            events_title: 'Eventos y Actividades 2026',
            events_subtitle: 'Conoce las iniciativas de nuestra comunidad a lo largo del año',
            filter_categoria: 'Categoría',
            filter_mes: 'Mes',
            cat_todas: 'Todas',
            cat_cultural: 'Cultural',
            cat_desportivo: 'Deportivo',
            cat_social: 'Social',
            cat_educativo: 'Educativo',
            cat_comunitario: 'Comunitario',
            mes_todos: 'Todos los meses',
            mes_0: 'Enero', mes_1: 'Febrero', mes_2: 'Marzo', mes_3: 'Abril',
            mes_4: 'Mayo', mes_5: 'Junio', mes_6: 'Julio', mes_7: 'Agosto',
            mes_8: 'Septiembre', mes_9: 'Octubre', mes_10: 'Noviembre', mes_11: 'Diciembre',
            events_empty: 'No se encontraron eventos para los filtros seleccionados.',
            activities_title: 'Actividades Periódicas',
            activities_subtitle: 'Encuentros regulares de nuestra comunidad a lo largo del año',
            about_title: '¿Quiénes Somos?',
            about_p1: 'La <strong>Asociación Venezuela Amiga</strong> es una organización sin fines de lucro dedicada a la integración, apoyo y celebración de la cultura venezolana en Portugal.',
            about_p2: 'Desde nuestra fundación en 2010, trabajamos para crear puentes entre la comunidad venezolana y la sociedad portuguesa, promoviendo eventos culturales, actividades deportivas, acciones solidarias e iniciativas educativas.',
            about_p3: 'Creemos que la fuerza de nuestra comunidad está en la unión, el intercambio de experiencias y el compromiso con un futuro mejor para todos.',
            stat_fundacao: 'Fundación',
            stat_total: 'Total de Socios',
            stat_ativos: 'Socios Activos',
            contact_title: 'Datos de Contacto',
            contact_subtitle: 'Ponte en contacto con nosotros',
            contact_tel: 'Teléfono',
            contact_end: 'Dirección',
            footer_privacy: 'Política de Privacidad',
            footer_cookies: 'Configurar Cookies',
            cookie_title: 'Uso de Cookies',
            cookie_desc: 'Utilizamos cookies para mejorar su experiencia y recordar su preferencia de idioma. Puede aceptar todas las cookies o gestionar sus preferencias. Para más información, consulte nuestra <a href="#" id="privacy-link">Política de Privacidad</a>.',
            cookie_reject: 'Rechazar',
            cookie_accept: 'Aceptar',
            privacy_title: 'Política de Privacidad',
            status_open: 'Inscripciones abiertas',
            status_confirmed: 'Confirmado',
            status_soon: 'Próximamente',
            cat_label_cultural: 'Cultural',
            cat_label_desportivo: 'Deportivo',
            cat_label_social: 'Social',
            cat_label_educativo: 'Educativo',
            cat_label_comunitario: 'Comunitario',
            freq_semanal: 'Semanal',
            freq_quinzenal: 'Quincenal',
            freq_mensal: 'Mensual',
            freq_bimensal: 'Bimensual',
            day_lunes: 'Lunes',
            day_martes: 'Martes',
            day_miercoles: 'Miércoles',
            day_jueves: 'Jueves',
            day_viernes: 'Viernes',
            day_sabado: 'Sábado',
            day_domingo: 'Domingo',
            month_names: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            full_month_names: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            privacy_body: '<p><strong>Responsable:</strong> Associação Venezuela Amiga — Algarve, Portugal</p><p><strong>Email:</strong> geral@ava-pt.org</p><h4>1. Cookies utilizadas</h4><p>Este sitio utiliza únicamente cookies técnicas necesarias para el funcionamiento:</p><ul><li><strong>ava_lang:</strong> Guarda su preferencia de idioma (es/pt). Duración: 1 año.</li><li><strong>ava_consent:</strong> Registra si ha aceptado o rechazado las cookies. Duración: 1 año.</li></ul><p>No utilizamos cookies de seguimiento, publicidad ni análisis de terceros.</p><h4>2. Base legal</h4><p>El tratamiento se basa en el consentimiento del interesado (Art. 6.1.a RGPD) para las cookies de preferencia, y en el interés legítimo (Art. 6.1.f RGPD) para las cookies técnicas estrictamente necesarias.</p><h4>3. Derechos del usuario</h4><p>Conforme al RGPD y la Ley Orgánica 3/2018 (LOPDGDD), usted tiene derecho a:</p><ul><li>Acceder a sus datos personales</li><li>Rectificar datos inexactos</li><li>Solicitar la supresión de sus datos</li><li>Oponerse al tratamiento</li><li>Portabilidad de datos</li><li>Revocar el consentimiento en cualquier momento</li></ul><p>Para ejercer sus derechos, contacte a: geral@ava-pt.org</p><h4>4. Conservación</h4><p>Los datos se conservan durante el tiempo necesario para cumplir con la finalidad para la que se recabaron y mientras no se solicite su supresión.</p><h4>5. Autoridad de control</h4><p>En Portugal: Comissão Nacional de Proteção de Dados (CNPD) — www.cnpd.pt</p>'
        },
        pt: {
            page_title: 'Associação Venezuela Amiga — Eventos 2026',
            meta_description: 'Associação Venezuela Amiga — Conheça os eventos e actividades da Associação Venezuela Amiga.',
            nav_inicio: 'Início',
            nav_eventos: 'Eventos',
            nav_actividades: 'Actividades',
            nav_sobre: 'Sobre',
            nav_contacto: 'Contacto',
            nav_portal: 'Portal do Sócio',
            hero_tagline: 'Venezuelanos em Portugal',
            btn_call: 'Ligar',
            link_eventos: 'Eventos 2026',
            link_actividades: 'Actividades Periódicas',
            link_sobre: 'Quem Somos?',
            hero_cta: 'Junte-se à nossa comunidade venezuelana no Algarve',
            events_title: 'Eventos e Actividades 2026',
            events_subtitle: 'Conheça as iniciativas da nossa comunidade ao longo do ano',
            filter_categoria: 'Categoria',
            filter_mes: 'Mês',
            cat_todas: 'Todas',
            cat_cultural: 'Cultural',
            cat_desportivo: 'Desportivo',
            cat_social: 'Social',
            cat_educativo: 'Educativo',
            cat_comunitario: 'Comunitário',
            mes_todos: 'Todos os meses',
            mes_0: 'Janeiro', mes_1: 'Fevereiro', mes_2: 'Março', mes_3: 'Abril',
            mes_4: 'Maio', mes_5: 'Junho', mes_6: 'Julho', mes_7: 'Agosto',
            mes_8: 'Setembro', mes_9: 'Outubro', mes_10: 'Novembro', mes_11: 'Dezembro',
            events_empty: 'Nenhum evento encontrado para os filtros selecionados.',
            activities_title: 'Actividades Periódicas',
            activities_subtitle: 'Encontros regulares da nossa comunidade ao longo do ano',
            about_title: 'Quem Somos?',
            about_p1: 'A <strong>Associação Venezuela Amiga</strong> é uma organização sem fins lucrativos dedicada à integração, apoio e celebração da cultura venezuelana em Portugal.',
            about_p2: 'Desde a nossa fundação em 2010, trabalhamos para criar pontes entre a comunidade venezuelana e a sociedade portuguesa, promovendo eventos culturais, actividades desportivas, acções solidárias e iniciativas educativas.',
            about_p3: 'Acreditamos que a força da nossa comunidade está na união, na partilha de experiências e no compromisso com um futuro melhor para todos.',
            stat_fundacao: 'Fundação',
            stat_total: 'Total de Sócios',
            stat_ativos: 'Sócios Ativos',
            contact_title: 'Dados de Contacto',
            contact_subtitle: 'Entre em contacto connosco',
            contact_tel: 'Telefone',
            contact_end: 'Endereço',
            footer_privacy: 'Política de Privacidade',
            footer_cookies: 'Configurar Cookies',
            cookie_title: 'Uso de Cookies',
            cookie_desc: 'Utilizamos cookies para melhorar a sua experiência e lembrar a sua preferência de idioma. Pode aceitar todos os cookies ou gerir as suas preferências. Para mais informações, consulte a nossa <a href="#" id="privacy-link">Política de Privacidade</a>.',
            cookie_reject: 'Rejeitar',
            cookie_accept: 'Aceitar',
            privacy_title: 'Política de Privacidade',
            status_open: 'Inscrições abertas',
            status_confirmed: 'Confirmado',
            status_soon: 'Em breve',
            cat_label_cultural: 'Cultural',
            cat_label_desportivo: 'Desportivo',
            cat_label_social: 'Social',
            cat_label_educativo: 'Educativo',
            cat_label_comunitario: 'Comunitário',
            freq_semanal: 'Semanal',
            freq_quinzenal: 'Quinzenal',
            freq_mensal: 'Mensal',
            freq_bimensal: 'Bimensal',
            day_lunes: 'Segunda-feira',
            day_martes: 'Terça-feira',
            day_miercoles: 'Quarta-feira',
            day_jueves: 'Quinta-feira',
            day_viernes: 'Sexta-feira',
            day_sabado: 'Sábado',
            day_domingo: 'Domingo',
            month_names: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            full_month_names: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            privacy_body: '<p><strong>Responsável:</strong> Associação Venezuela Amiga — Algarve, Portugal</p><p><strong>Email:</strong> geral@ava-pt.org</p><h4>1. Cookies utilizados</h4><p>Este site utiliza apenas cookies técnicos necessários ao funcionamento:</p><ul><li><strong>ava_lang:</strong> Guarda a sua preferência de idioma (es/pt). Duração: 1 ano.</li><li><strong>ava_consent:</strong> Regista se aceitou ou rejeitou os cookies. Duração: 1 ano.</li></ul><p>Não utilizamos cookies de rastreamento, publicidade ou análise de terceiros.</p><h4>2. Base legal</h4><p>O tratamento baseia-se no consentimento do titular (Art. 6.1.a RGPD) para os cookies de preferência, e no interesse legítimo (Art. 6.1.f RGPD) para os cookies técnicos estritamente necessários.</p><h4>3. Direitos do utilizador</h4><p>Conforme o RGPD e a Lei n.º 58/2019 (Lei de Proteção de Dados), tem direito a:</p><ul><li>Aceder aos seus dados pessoais</li><li>Retificar dados inexatos</li><li>Solicitar o apagamento dos seus dados</li><li>Opor-se ao tratamento</li><li>Portabilidade de dados</li><li>Revogar o consentimento a qualquer momento</li></ul><p>Para exercer os seus direitos, contacte: geral@ava-pt.org</p><h4>4. Conservação</h4><p>Os dados são conservados durante o tempo necessário para cumprir a finalidade para a qual foram recolhidos e enquanto não for solicitada a sua supressão.</p><h4>5. Autoridade de controlo</h4><p>Em Portugal: Comissão Nacional de Proteção de Dados (CNPD) — www.cnpd.pt</p>'
        }
    };

    // Current language (default: es)
    let currentLang = 'es';

    // ========================================
    // Cookie Helpers
    // ========================================
    function setCookie(name, value, days) {
        const d = new Date();
        d.setTime(d.getTime() + days * 86400000);
        document.cookie = name + '=' + value + ';expires=' + d.toUTCString() + ';path=/;SameSite=Lax';
    }

    function getCookie(name) {
        const v = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
        return v ? v.pop() : null;
    }

    // ========================================
    // i18n — Apply translations
    // ========================================
    function t(key) {
        return (translations[currentLang] && translations[currentLang][key]) || key;
    }

    function applyTranslations() {
        // Update html lang
        document.documentElement.lang = currentLang;

        // Translate elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(function(el) {
            const key = el.getAttribute('data-i18n');
            const val = t(key);
            if (val && val !== key) {
                // For elements that should use innerHTML (contain HTML tags)
                if (key.startsWith('about_p') || key === 'cookie_desc' || key === 'privacy_body') {
                    el.innerHTML = val;
                } else {
                    el.textContent = val;
                }
            }
        });

        // Translate meta description
        const meta = document.querySelector('[data-i18n-attr]');
        if (meta) {
            const attrKey = meta.getAttribute('data-i18n-attr');
            const parts = attrKey.split(':');
            if (parts.length === 2) {
                meta.setAttribute(parts[0], t(parts[1]));
            }
        }

        // Update active lang button
        document.querySelectorAll('.lang-btn').forEach(function(btn) {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
        });
    }

    // ========================================
    // Language Switcher
    // ========================================
    function initLangSwitcher() {
        // Check cookie for saved language
        const savedLang = getCookie('ava_lang');
        if (savedLang && translations[savedLang]) {
            currentLang = savedLang;
        } else {
            currentLang = 'es'; // default
        }
        applyTranslations();

        // Button click handlers
        document.querySelectorAll('.lang-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                if (lang !== currentLang) {
                    currentLang = lang;
                    // Only save to cookie if consent was given
                    if (getCookie('ava_consent') === 'accepted') {
                        setCookie('ava_lang', lang, 365);
                    }
                    applyTranslations();
                    // Re-render dynamic content
                    renderEvents();
                    renderActivities();
                }
            });
        });
    }

    // ========================================
    // Cookie Consent Banner
    // ========================================
    function initCookieConsent() {
        const banner = document.getElementById('cookie-consent');
        const acceptBtn = document.getElementById('cookie-accept');
        const rejectBtn = document.getElementById('cookie-reject');
        const privacyModal = document.getElementById('privacy-modal');
        const modalClose = document.getElementById('modal-close');
        const privacyLink = document.getElementById('footer-privacy-link');
        const cookiesLink = document.getElementById('footer-cookies-link');

        if (!banner) return;

        // Check if consent already given
        const consent = getCookie('ava_consent');
        if (!consent) {
            banner.style.display = 'flex';
        } else if (consent === 'accepted') {
            // Re-apply saved language from cookie
            const savedLang = getCookie('ava_lang');
            if (savedLang && translations[savedLang]) {
                currentLang = savedLang;
                applyTranslations();
            }
        }

        acceptBtn.addEventListener('click', function() {
            setCookie('ava_consent', 'accepted', 365);
            setCookie('ava_lang', currentLang, 365);
            banner.style.display = 'none';
        });

        rejectBtn.addEventListener('click', function() {
            setCookie('ava_consent', 'rejected', 365);
            // Delete lang cookie if exists
            setCookie('ava_lang', '', -1);
            banner.style.display = 'none';
        });

        // Privacy modal
        function openPrivacy(e) {
            if (e) e.preventDefault();
            privacyModal.style.display = 'flex';
        }
        function closePrivacy() {
            privacyModal.style.display = 'none';
        }

        // Delegate click on privacy link (inside cookie description)
        document.addEventListener('click', function(e) {
            if (e.target && e.target.id === 'privacy-link') {
                openPrivacy(e);
            }
        });

        if (privacyLink) privacyLink.addEventListener('click', openPrivacy);
        if (cookiesLink) cookiesLink.addEventListener('click', function(e) {
            e.preventDefault();
            banner.style.display = 'flex';
        });
        if (modalClose) modalClose.addEventListener('click', closePrivacy);
        if (privacyModal) {
            privacyModal.addEventListener('click', function(e) {
                if (e.target === privacyModal) closePrivacy();
            });
        }
    }

    // ========================================
    // Dynamic month/category labels (i18n-aware)
    // ========================================
    function getMonthNames() {
        return t('month_names');
    }
    function getFullMonthNames() {
        return t('full_month_names');
    }
    function getCategoryLabel(cat) {
        return t('cat_label_' + cat) || cat;
    }
    function getStatusLabel(status) {
        return t('status_' + status) || status;
    }
    function getFrequencyLabel(freq) {
        return t('freq_' + freq) || freq;
    }
    function getDayLabel(day) {
        return t('day_' + day) || day;
    }

    // ========================================
    // State
    // ========================================
    let events = [];
    let activeCategory = 'todas';
    let activeMonth = 'todos';

    // DOM
    const grid = document.getElementById('events-grid');
    const emptyState = document.getElementById('events-empty');
    const categoryFilters = document.getElementById('category-filters');
    const monthFilter = document.getElementById('month-filter');
    const navToggle = document.getElementById('nav-toggle');
    const navList = document.querySelector('.nav-list');

    // Category keys (stable, not translated)
    const categoryKeys = {
        cultural: true,
        desportivo: true,
        social: true,
        educativo: true,
        comunitario: true
    };

    // Embedded events data
    const eventsData = [
        {
            "id": 1,
            "title_es": "Fiesta de Aniversario de la Asociación",
            "title_pt": "Festa de Aniversário da Associação",
            "date": "2026-05-10",
            "time": "18:00",
            "location": "Sede da Associação, Lisboa",
            "category": "cultural",
            "desc_es": "Celebración del aniversario de Venezuela Amiga con música en vivo, gastronomía venezolana y actividades para toda la familia.",
            "desc_pt": "Celebração do aniversário da Venezuela Amiga com música ao vivo, gastronomia venezuelana e actividades para toda a família.",
            "registrationUrl": "https://forms.exemplo.com/festa-aniversario",
            "status": "open"
        },
        {
            "id": 2,
            "title_es": "Torneo de Fútbol Comunitario",
            "title_pt": "Torneio de Futebol Comunitário",
            "date": "2026-05-24",
            "time": "10:00",
            "location": "Complexo Desportivo Municipal, Amadora",
            "category": "desportivo",
            "desc_es": "Torneo abierto a todos los miembros y amigos de la comunidad venezolana. Inscripción por equipos de 5 jugadores.",
            "desc_pt": "Torneio aberto a todos os membros e amigos da comunidade venezuelana. Inscrição por equipas de 5 jogadores.",
            "registrationUrl": "https://forms.exemplo.com/torneio-futebol",
            "status": "open"
        },
        {
            "id": 3,
            "title_es": "Taller: Emprendimiento para Inmigrantes",
            "title_pt": "Workshop: Empreendedorismo para Imigrantes",
            "date": "2026-06-07",
            "time": "14:00",
            "location": "Centro Cultural, Lisboa",
            "category": "educativo",
            "desc_es": "Taller práctico sobre cómo abrir un negocio en Portugal, con especialistas en derecho empresarial y fiscalidad.",
            "desc_pt": "Workshop prático sobre como abrir negócio em Portugal, com especialistas em direito empresarial e fiscalidade.",
            "registrationUrl": "https://forms.exemplo.com/workshop-empreendedorismo",
            "status": "open"
        },
        {
            "id": 4,
            "title_es": "Día de la Independencia de Venezuela",
            "title_pt": "Dia da Independência da Venezuela",
            "date": "2026-07-05",
            "time": "16:00",
            "location": "Praça do Comércio, Lisboa",
            "category": "cultural",
            "desc_es": "Celebración del Día de la Independencia con desfile, música, danza y exposición cultural venezolana.",
            "desc_pt": "Celebração do Dia da Independência com desfile, música, dança e exposição cultural venezuelana.",
            "registrationUrl": null,
            "status": "confirmed"
        },
        {
            "id": 5,
            "title_es": "Campaña de Recolección de Alimentos",
            "title_pt": "Campanha de Recolha de Alimentos",
            "date": "2026-07-20",
            "time": "09:00",
            "location": "Vários pontos em Lisboa e Porto",
            "category": "social",
            "desc_es": "Campaña solidaria de recolección de alimentos no perecederos para familias venezolanas en situación de vulnerabilidad.",
            "desc_pt": "Campanha solidária de recolha de alimentos não perecíveis para famílias venezuelanas em situação de vulnerabilidade.",
            "registrationUrl": "https://forms.exemplo.com/recolha-alimentos",
            "status": "open"
        },
        {
            "id": 6,
            "title_es": "Clases de Portugués para Principiantes",
            "title_pt": "Aulas de Português para Iniciantes",
            "date": "2026-08-04",
            "time": "18:30",
            "location": "Sede da Associação, Lisboa",
            "category": "educativo",
            "desc_es": "Curso intensivo de lengua portuguesa para recién llegados. 4 sesiones semanales durante el mes de agosto.",
            "desc_pt": "Curso intensivo de língua portuguesa para recém-chegados. 4 sessões semanais durante o mês de agosto.",
            "registrationUrl": "https://forms.exemplo.com/aulas-portugues",
            "status": "open"
        },
        {
            "id": 7,
            "title_es": "Fiesta de la Comunidad Venezolana",
            "title_pt": "Arraial da Comunidade Venezuelana",
            "date": "2026-08-15",
            "time": "12:00",
            "location": "Jardim da Estrela, Lisboa",
            "category": "comunitario",
            "desc_es": "Fiesta con comidas típicas, música en vivo, actividades para niños y mucha convivencia. Entrada libre.",
            "desc_pt": "Arraial com comidas típicas, música ao vivo, actividades para crianças e muita convivialidade. Entrada livre.",
            "registrationUrl": null,
            "status": "confirmed"
        },
        {
            "id": 8,
            "title_es": "Noche de Cine Venezolano",
            "title_pt": "Noite de Cinema Venezuelano",
            "date": "2026-09-12",
            "time": "20:00",
            "location": "Cinema São Jorge, Lisboa",
            "category": "cultural",
            "desc_es": "Sesión de cine con película venezolana premiada, seguida de debate con el director. Subtítulos en portugués.",
            "desc_pt": "Sessão de cinema com filme venezuelano premiado, seguida de debate com o realizador. Legendas em português.",
            "registrationUrl": "https://forms.exemplo.com/cinema-venezuelano",
            "status": "open"
        },
        {
            "id": 9,
            "title_es": "Maratón Solidaria: Correr por Venezuela",
            "title_pt": "Maratona Solidária: Correr por Venezuela",
            "date": "2026-10-03",
            "time": "08:00",
            "location": "Parque das Nações, Lisboa",
            "category": "desportivo",
            "desc_es": "Maratón solidaria de 5km y 10km para recaudar fondos para proyectos educativos en Venezuela.",
            "desc_pt": "Maratona solidária de 5km e 10km para angariação de fundos para projectos educativos na Venezuela.",
            "registrationUrl": "https://forms.exemplo.com/maratona-solidaria",
            "status": "open"
        },
        {
            "id": 10,
            "title_es": "Fiesta de Navidad de la Comunidad",
            "title_pt": "Festa de Natal da Comunidade",
            "date": "2026-12-19",
            "time": "17:00",
            "location": "Sede da Associação, Lisboa",
            "category": "comunitario",
            "desc_es": "Cena navideña venezolana con hallacas, pan de jamón, música y la tradición de celebrar en familia. Inscripción obligatoria para control de aforo.",
            "desc_pt": "Ceia de Natal venezuelana com hallacas, pan de jamón, música e a tradição de celebrar em família. Inscrição obrigatória para controlo de lotação.",
            "registrationUrl": "https://forms.exemplo.com/festa-natal",
            "status": "open"
        }
    ];

    // Embedded recurring activities data
    const activitiesData = [
        {
            "id": 101,
            "title_es": "Clases de Inglés",
            "title_pt": "Aulas de Inglês",
            "subtitle_es": "Nivel Intermedio",
            "subtitle_pt": "Nível Intermédio",
            "frequency": "semanal",
            "day": "terca",
            "time": "20:00 - 21:00",
            "location": "Sede da Associação, Lisboa",
            "category": "educativo",
            "desc_es": "Clases de inglés para nivel intermedio. Material incluido. Ambiente relajado y práctica conversacional.",
            "desc_pt": "Aulas de inglês para nível intermedio. Material incluído. Ambiente descontraído e prática conversacional.",
            "registrationUrl": "https://forms.exemplo.com/aulas-ingles",
            "status": "open"
        },
        {
            "id": 102,
            "title_es": "Clases de Portugués",
            "title_pt": "Aulas de Português",
            "subtitle_es": "Nivel Principiante",
            "subtitle_pt": "Nível Iniciante",
            "frequency": "semanal",
            "day": "quinta",
            "time": "18:30 - 20:00",
            "location": "Sede da Associação, Lisboa",
            "category": "educativo",
            "desc_es": "Curso de portugués para recién llegados. Enfoque en comunicación diaria, vocabulario práctico e integración cultural.",
            "desc_pt": "Curso de português para recém-chegados. Foco em comunicação do dia a dia, vocabulário prático e integração cultural.",
            "registrationUrl": "https://forms.exemplo.com/aulas-portugues",
            "status": "open"
        },
        {
            "id": 103,
            "title_es": "Grupo de Fútbol",
            "title_pt": "Grupo de Futebol",
            "subtitle_es": "Abierto a todos",
            "subtitle_pt": "Aberto a todos",
            "frequency": "semanal",
            "day": "sabado",
            "time": "10:00 - 12:00",
            "location": "Complexo Desportivo Municipal, Amadora",
            "category": "desportivo",
            "desc_es": "Partido recreativo de fútbol abierto a todos los miembros de la comunidad. No es necesaria inscripción previa.",
            "desc_pt": "Jogo recreativo de futebol aberto a todos os membros da comunidade. Não é necessário inscrição prévia.",
            "registrationUrl": null,
            "status": "open"
        },
        {
            "id": 104,
            "title_es": "Noche Cultural Venezolana",
            "title_pt": "Noite Cultural Venezuelana",
            "subtitle_es": "Música, danza y gastronomía",
            "subtitle_pt": "Música, dança e gastronomia",
            "frequency": "mensal",
            "day": "sabado",
            "time": "19:00 - 23:00",
            "location": "Sede da Associação, Lisboa",
            "category": "cultural",
            "desc_es": "Noche mensal con música en vivo, danza y platos típicos venezolanos. Ven a compartir nuestra cultura con la comunidad.",
            "desc_pt": "Noite mensal com música ao vivo, dança e pratos típicos venezuelanos. Venha partilhar a nossa cultura com a comunidade.",
            "registrationUrl": null,
            "status": "confirmed"
        }
    ];

    // Day key mapping
    const dayKeyMap = {
        segunda: 'day_lunes',
        terca: 'day_martes',
        quarta: 'day_miercoles',
        quinta: 'day_jueves',
        sexta: 'day_viernes',
        sabado: 'day_sabado',
        domingo: 'day_domingo'
    };

    // ========================================
    // Google Sheets
    // ========================================
    function parseCSV(csvText) {
        var lines = csvText.split('\n').filter(function(line) { return line.trim(); });
        if (lines.length < 2) return [];
        var headers = lines[0].split(',').map(function(h) { return h.trim().replace(/^"|"$/g, ''); });
        var rows = [];
        for (var i = 1; i < lines.length; i++) {
            var values = [];
            var current = '';
            var inQuotes = false;
            for (var j = 0; j < lines[i].length; j++) {
                var char = lines[i][j];
                if (char === '"') { inQuotes = !inQuotes; }
                else if (char === ',' && !inQuotes) { values.push(current.trim()); current = ''; }
                else { current += char; }
            }
            values.push(current.trim());
            var row = {};
            headers.forEach(function(header, index) {
                var val = values[index] || '';
                val = val.replace(/^"|"$/g, '');
                row[header] = val;
            });
            rows.push(row);
        }
        return rows;
    }

    async function loadFromGoogleSheets() {
        var sheetId = window.GOOGLE_SHEET_ID;
        if (!sheetId || sheetId === 'PEGA_AQUI_EL_ID_DE_TU_HOJA') return null;
        try {
            var url;
            if (sheetId.startsWith('2PACX-')) {
                url = 'https://docs.google.com/spreadsheets/d/e/' + sheetId + '/pub?output=csv';
            } else {
                url = 'https://docs.google.com/spreadsheets/d/' + sheetId + '/gviz/tq?tqx=out:csv';
            }
            var response = await fetch(url);
            if (!response.ok) return null;
            var csvText = await response.text();
            if (!csvText || csvText.trim().length === 0) return null;
            var data = parseCSV(csvText);
            return data.length > 0 ? data : null;
        } catch (e) {
            return null;
        }
    }

    // ========================================
    // Events
    // ========================================
    async function loadEvents() {
        var sheetData = await loadFromGoogleSheets();
        if (sheetData) {
            events = sheetData
                .filter(function(row) { return !row.type || row.type === 'evento'; })
                .map(function(row) {
                    return {
                        id: parseInt(row.id) || 0,
                        title_es: row.title_es || row.title || '',
                        title_pt: row.title_pt || row.title || '',
                        date: row.date || '',
                        time: row.time || '',
                        location: row.location || '',
                        category: row.category || 'cultural',
                        desc_es: row.desc_es || row.description || '',
                        desc_pt: row.desc_pt || row.description || '',
                        registrationUrl: row.registrationUrl || null,
                        status: row.status || 'confirmed'
                    };
                }).sort(function(a, b) { return new Date(a.date) - new Date(b.date); });
        } else {
            events = eventsData.sort(function(a, b) { return new Date(a.date) - new Date(b.date); });
        }
        renderEvents();
    }

    function getFilteredEvents() {
        return events.filter(function(event) {
            var eventDate = new Date(event.date);
            var matchesCategory = activeCategory === 'todas' || event.category === activeCategory;
            var matchesMonth = activeMonth === 'todos' || eventDate.getMonth() === parseInt(activeMonth);
            return matchesCategory && matchesMonth;
        });
    }

    function formatDate(dateStr) {
        var date = new Date(dateStr + 'T00:00:00');
        var mn = getMonthNames();
        var fmn = getFullMonthNames();
        return {
            day: date.getDate(),
            month: mn[date.getMonth()],
            monthFull: fmn[date.getMonth()],
            year: date.getFullYear()
        };
    }

    function createEventCard(event) {
        var date = formatDate(event.date);
        var card = document.createElement('article');
        card.className = 'event-card';
        var statusClass = event.status || 'confirmed';
        var statusText = event.status === 'open' && !event.registrationUrl
            ? getStatusLabel('confirmed')
            : (getStatusLabel(statusClass) || getStatusLabel('confirmed'));
        var title = event['title_' + currentLang] || event.title_es || event.title_pt || '';
        var desc = event['desc_' + currentLang] || event.desc_es || event.desc_pt || '';
        var regLabel = currentLang === 'pt' ? 'Inscrever-se' : 'Inscribirse';

        card.innerHTML =
            '<div class="event-card-header">' +
                '<div class="event-date-badge"><span class="day">' + date.day + '</span><span class="month">' + date.month + '</span></div>' +
                '<div class="event-card-info"><span class="event-category ' + event.category + '">' + getCategoryLabel(event.category) + '</span><h3 class="event-title">' + title + '</h3></div>' +
            '</div>' +
            '<div class="event-card-body">' +
                '<p class="event-description">' + desc + '</p>' +
                '<div class="event-meta">' +
                    '<div class="event-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><span>' + event.time + 'h — ' + date.day + ' ' + date.monthFull + ' ' + date.year + '</span></div>' +
                    '<div class="event-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg><span>' + event.location + '</span></div>' +
                '</div>' +
            '</div>' +
            '<div class="event-card-footer">' +
                '<span class="event-status ' + statusClass + '">' + statusText + '</span>' +
                (event.registrationUrl ? '<a href="' + event.registrationUrl + '" target="_blank" rel="noopener noreferrer" class="btn-register">' + regLabel + '</a>' : '') +
            '</div>';
        return card;
    }

    function renderEvents() {
        var filtered = getFilteredEvents();
        grid.innerHTML = '';
        if (filtered.length === 0) {
            emptyState.style.display = 'block';
            return;
        }
        emptyState.style.display = 'none';
        filtered.forEach(function(event) {
            grid.appendChild(createEventCard(event));
        });
    }

    // ========================================
    // Activities
    // ========================================
    function createActivityCard(activity) {
        var card = document.createElement('article');
        card.className = 'activity-card';
        var statusClass = activity.status || 'confirmed';
        var statusText = activity.status === 'open' && !activity.registrationUrl
            ? getStatusLabel('confirmed')
            : (getStatusLabel(statusClass) || getStatusLabel('confirmed'));
        var title = activity['title_' + currentLang] || activity.title_es || activity.title_pt || '';
        var subtitle = activity['subtitle_' + currentLang] || activity.subtitle_es || activity.subtitle_pt || '';
        var desc = activity['desc_' + currentLang] || activity.desc_es || activity.desc_pt || '';
        var dayText = activity.day ? getDayLabel(dayKeyMap[activity.day] || activity.day) : '';
        var freqText = activity.frequency ? getFrequencyLabel(activity.frequency) : '';
        var regLabel = currentLang === 'pt' ? 'Inscrever-se' : 'Inscribirse';

        card.innerHTML =
            '<div class="activity-card-header">' +
                (activity.frequency ? '<span class="activity-frequency ' + activity.frequency + '">' + freqText + '</span>' : '') +
                '<span class="event-category ' + activity.category + '">' + getCategoryLabel(activity.category) + '</span>' +
            '</div>' +
            '<h3 class="activity-title">' + title + '</h3>' +
            (subtitle ? '<p class="activity-subtitle">' + subtitle + '</p>' : '') +
            '<p class="activity-description">' + desc + '</p>' +
            '<div class="activity-meta">' +
                (activity.day ? '<div class="activity-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg><span>' + dayText + '</span></div>' : '') +
                '<div class="activity-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><span>' + activity.time + '</span></div>' +
                '<div class="activity-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg><span>' + activity.location + '</span></div>' +
            '</div>' +
            '<div class="activity-card-footer">' +
                '<span class="event-status ' + statusClass + '">' + statusText + '</span>' +
                (activity.registrationUrl ? '<a href="' + activity.registrationUrl + '" target="_blank" rel="noopener noreferrer" class="btn-register">' + regLabel + '</a>' : '') +
            '</div>';
        return card;
    }

    async function renderActivities() {
        var actGrid = document.getElementById('activities-grid');
        if (!actGrid) return;
        actGrid.innerHTML = '';
        var sheetData = await loadFromGoogleSheets();
        var data;
        if (sheetData) {
            data = sheetData
                .filter(function(row) { return row.type === 'actividad'; })
                .map(function(row) {
                    return {
                        id: parseInt(row.id) || 0,
                        title_es: row.title_es || row.title || '',
                        title_pt: row.title_pt || row.title || '',
                        subtitle_es: row.subtitle_es || row.subtitle || '',
                        subtitle_pt: row.subtitle_pt || row.subtitle || '',
                        frequency: row.frequency || '',
                        day: row.day || '',
                        time: row.time || '',
                        location: row.location || '',
                        category: row.category || 'cultural',
                        desc_es: row.desc_es || row.description || '',
                        desc_pt: row.desc_pt || row.description || '',
                        registrationUrl: row.registrationUrl || null,
                        status: row.status || 'confirmed'
                    };
                });
        } else {
            data = activitiesData;
        }
        data.forEach(function(activity) {
            actGrid.appendChild(createActivityCard(activity));
        });
    }

    // ========================================
    // Event Listeners
    // ========================================
    categoryFilters.addEventListener('click', function(e) {
        var btn = e.target.closest('.filter-btn');
        if (!btn) return;
        categoryFilters.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        activeCategory = btn.dataset.category;
        renderEvents();
    });

    monthFilter.addEventListener('change', function(e) {
        activeMonth = e.target.value;
        renderEvents();
    });

    navToggle.addEventListener('click', function() {
        navList.classList.toggle('open');
    });

    navList.addEventListener('click', function(e) {
        if (e.target.classList.contains('nav-link')) {
            navList.classList.remove('open');
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            var target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    var sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', function() {
        var scrollY = window.scrollY + 100;
        sections.forEach(function(section) {
            var top = section.offsetTop;
            var height = section.offsetHeight;
            var id = section.getAttribute('id');
            var link = document.querySelector('.nav-link[href="#' + id + '"]');
            if (link) {
                if (scrollY >= top && scrollY < top + height) {
                    document.querySelectorAll('.nav-link').forEach(function(l) { l.classList.remove('active'); });
                    link.classList.add('active');
                }
            }
        });
    });

    window.addEventListener('scroll', function() {
        var header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)';
        } else {
            header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
        }
    });

    // Scroll animations
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
        var animatedElements = document.querySelectorAll('.fade-in-up');
        animatedElements.forEach(function(el) { el.style.animationPlayState = 'paused'; });
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
        animatedElements.forEach(function(el) { observer.observe(el); });
    }

    // ========================================
    // Init
    // ========================================
    initLangSwitcher();
    initCookieConsent();
    loadEvents();
    renderActivities();

})();
