/* ========================================
   Associação Venezuela Amiga — Scripts
   ======================================== */

(function() {
    'use strict';

    // State
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

    // Month names in Portuguese
    const monthNames = [
        'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
        'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
    ];

    const fullMonthNames = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    // Category labels
    const categoryLabels = {
        cultural: 'Cultural',
        desportivo: 'Desportivo',
        social: 'Social',
        educativo: 'Educativo',
        comunitario: 'Comunitário'
    };

    // Status labels
    const statusLabels = {
        open: 'Inscrições abertas',
        confirmed: 'Confirmado',
        soon: 'Em breve'
    };

    // Embedded events data (edit events.json and paste here to update)
    const eventsData = [
        {
            "id": 1,
            "title": "Festa de Aniversário da Associação",
            "date": "2026-05-10",
            "time": "18:00",
            "location": "Sede da Associação, Lisboa",
            "category": "cultural",
            "description": "Celebração do aniversário da Venezuela Amiga com música ao vivo, gastronomia venezuelana e actividades para toda a família.",
            "registrationUrl": "https://forms.exemplo.com/festa-aniversario",
            "status": "open"
        },
        {
            "id": 2,
            "title": "Torneio de Futebol Comunitário",
            "date": "2026-05-24",
            "time": "10:00",
            "location": "Complexo Desportivo Municipal, Amadora",
            "category": "desportivo",
            "description": "Torneio aberto a todos os membros e amigos da comunidade venezuelana. Inscrição por equipas de 5 jogadores.",
            "registrationUrl": "https://forms.exemplo.com/torneio-futebol",
            "status": "open"
        },
        {
            "id": 3,
            "title": "Workshop: Empreendedorismo para Imigrantes",
            "date": "2026-06-07",
            "time": "14:00",
            "location": "Centro Cultural, Lisboa",
            "category": "educativo",
            "description": "Workshop prático sobre como abrir negócio em Portugal, com especialistas em direito empresarial e fiscalidade.",
            "registrationUrl": "https://forms.exemplo.com/workshop-empreendedorismo",
            "status": "open"
        },
        {
            "id": 4,
            "title": "Dia da Independência da Venezuela",
            "date": "2026-07-05",
            "time": "16:00",
            "location": "Praça do Comércio, Lisboa",
            "category": "cultural",
            "description": "Celebração do Dia da Independência com desfile, música, dança e exposição cultural venezuelana.",
            "registrationUrl": null,
            "status": "confirmed"
        },
        {
            "id": 5,
            "title": "Campanha de Recolha de Alimentos",
            "date": "2026-07-20",
            "time": "09:00",
            "location": "Vários pontos em Lisboa e Porto",
            "category": "social",
            "description": "Campanha solidária de recolha de alimentos não perecíveis para famílias venezuelanas em situação de vulnerabilidade.",
            "registrationUrl": "https://forms.exemplo.com/recolha-alimentos",
            "status": "open"
        },
        {
            "id": 6,
            "title": "Aulas de Português para Iniciantes",
            "date": "2026-08-04",
            "time": "18:30",
            "location": "Sede da Associação, Lisboa",
            "category": "educativo",
            "description": "Curso intensivo de língua portuguesa para recém-chegados. 4 sessões semanais durante o mês de agosto.",
            "registrationUrl": "https://forms.exemplo.com/aulas-portugues",
            "status": "open"
        },
        {
            "id": 7,
            "title": "Arraial da Comunidade Venezuelana",
            "date": "2026-08-15",
            "time": "12:00",
            "location": "Jardim da Estrela, Lisboa",
            "category": "comunitario",
            "description": "Arraial com comidas típicas, música ao vivo, actividades para crianças e muita convivialidade. Entrada livre.",
            "registrationUrl": null,
            "status": "confirmed"
        },
        {
            "id": 8,
            "title": "Noite de Cinema Venezuelano",
            "date": "2026-09-12",
            "time": "20:00",
            "location": "Cinema São Jorge, Lisboa",
            "category": "cultural",
            "description": "Sessão de cinema com filme venezuelano premiado, seguida de debate com o realizador. Legendas em português.",
            "registrationUrl": "https://forms.exemplo.com/cinema-venezuelano",
            "status": "open"
        },
        {
            "id": 9,
            "title": "Maratona Solidária: Correr por Venezuela",
            "date": "2026-10-03",
            "time": "08:00",
            "location": "Parque das Nações, Lisboa",
            "category": "desportivo",
            "description": "Maratona solidária de 5km e 10km para angariação de fundos para projectos educativos na Venezuela.",
            "registrationUrl": "https://forms.exemplo.com/maratona-solidaria",
            "status": "open"
        },
        {
            "id": 10,
            "title": "Festa de Natal da Comunidade",
            "date": "2026-12-19",
            "time": "17:00",
            "location": "Sede da Associação, Lisboa",
            "category": "comunitario",
            "description": "Ceia de Natal venezuelana com hallacas, pan de jamón, música e a tradição de celebrar em família. Inscrição obrigatória para controlo de lotação.",
            "registrationUrl": "https://forms.exemplo.com/festa-natal",
            "status": "open"
        }
    ];

    // Frequency labels
    const frequencyLabels = {
        semanal: 'Semanal',
        quinzenal: 'Quinzenal',
        mensal: 'Mensual',
        bimensal: 'Bimensal'
    };

    // Day labels
    const dayLabels = {
        segunda: 'Segunda-feira',
        terca: 'Terça-feira',
        quarta: 'Quarta-feira',
        quinta: 'Quinta-feira',
        sexta: 'Sexta-feira',
        sabado: 'Sábado',
        domingo: 'Domingo'
    };

    // Embedded recurring activities data
    const activitiesData = [
        {
            "id": 101,
            "title": "Aulas de Inglês",
            "subtitle": "Nível Intermedio",
            "frequency": "semanal",
            "day": "terca",
            "time": "20:00 - 21:00",
            "location": "Sede da Associação, Lisboa",
            "category": "educativo",
            "description": "Aulas de inglês para nível intermedio. Material incluído. Ambiente descontraído e prática conversacional.",
            "registrationUrl": "https://forms.exemplo.com/aulas-ingles",
            "status": "open"
        },
        {
            "id": 102,
            "title": "Aulas de Português",
            "subtitle": "Nível Iniciante",
            "frequency": "semanal",
            "day": "quinta",
            "time": "18:30 - 20:00",
            "location": "Sede da Associação, Lisboa",
            "category": "educativo",
            "description": "Curso de português para recém-chegados. Foco em comunicação do dia a dia, vocabulário prático e integração cultural.",
            "registrationUrl": "https://forms.exemplo.com/aulas-portugues",
            "status": "open"
        },
        {
            "id": 103,
            "title": "Grupo de Futebol",
            "subtitle": "Aberto a todos",
            "frequency": "semanal",
            "day": "sabado",
            "time": "10:00 - 12:00",
            "location": "Complexo Desportivo Municipal, Amadora",
            "category": "desportivo",
            "description": "Jogo recreativo de futebol aberto a todos os membros da comunidade. Não é necessário inscrição prévia.",
            "registrationUrl": null,
            "status": "open"
        },
        {
            "id": 104,
            "title": "Noite Cultural Venezuelana",
            "subtitle": "Música, dança e gastronomia",
            "frequency": "mensal",
            "day": "sabado",
            "time": "19:00 - 23:00",
            "location": "Sede da Associação, Lisboa",
            "category": "cultural",
            "description": "Noite mensal com música ao vivo, dança e pratos típicos venezuelanos. Venha partilhar a nossa cultura com a comunidade.",
            "registrationUrl": null,
            "status": "confirmed"
        }
    ];

    // Load events (Google Sheets first, fallback to embedded data)
    async function loadEvents() {
        const sheetData = await loadFromGoogleSheets();
        if (sheetData) {
            // Filtrar solo filas de tipo "evento" (o sin tipo, para compatibilidad)
            events = sheetData
                .filter(row => !row.type || row.type === 'evento')
                .map(row => ({
                    id: parseInt(row.id) || 0,
                    title: row.title || '',
                    date: row.date || '',
                    time: row.time || '',
                    location: row.location || '',
                    category: row.category || 'cultural',
                    description: row.description || '',
                    registrationUrl: row.registrationUrl || null,
                    status: row.status || 'confirmed'
                })).sort((a, b) => new Date(a.date) - new Date(b.date));
        } else {
            events = eventsData.sort((a, b) => new Date(a.date) - new Date(b.date));
        }
        renderEvents();
    }

    // Parse CSV text into array of objects
    function parseCSV(csvText) {
        const lines = csvText.split('\n').filter(line => line.trim());
        if (lines.length < 2) return [];
        const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));
        const rows = [];
        for (let i = 1; i < lines.length; i++) {
            const values = [];
            let current = '';
            let inQuotes = false;
            for (let j = 0; j < lines[i].length; j++) {
                const char = lines[i][j];
                if (char === '"') {
                    inQuotes = !inQuotes;
                } else if (char === ',' && !inQuotes) {
                    values.push(current.trim());
                    current = '';
                } else {
                    current += char;
                }
            }
            values.push(current.trim());
            const row = {};
            headers.forEach((header, index) => {
                let val = values[index] || '';
                val = val.replace(/^"|"$/g, '');
                row[header] = val;
            });
            rows.push(row);
        }
        return rows;
    }

    // Fetch data from Google Sheets (published as CSV)
    async function loadFromGoogleSheets() {
        const sheetId = window.GOOGLE_SHEET_ID;
        if (!sheetId || sheetId === 'PEGA_AQUI_EL_ID_DE_TU_HOJA') return null;
        try {
            let url;
            if (sheetId.startsWith('2PACX-')) {
                // ID de publicación
                url = `https://docs.google.com/spreadsheets/d/e/${sheetId}/pub?output=csv`;
            } else {
                // ID de hoja de cálculo normal
                url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv`;
            }
            const response = await fetch(url);
            if (!response.ok) {
                console.warn('Google Sheets respondió con error:', response.status);
                return null;
            }
            const csvText = await response.text();
            if (!csvText || csvText.trim().length === 0) {
                console.warn('Google Sheets devolvió contenido vacío');
                return null;
            }
            const data = parseCSV(csvText);
            console.log(`Google Sheets: ${data.length} filas cargadas`);
            return data.length > 0 ? data : null;
        } catch (e) {
            console.warn('No se pudo cargar desde Google Sheets, usando datos locales:', e.message);
            return null;
        }
    }

    // Filter events
    function getFilteredEvents() {
        return events.filter(event => {
            const eventDate = new Date(event.date);
            const matchesCategory = activeCategory === 'todas' || event.category === activeCategory;
            const matchesMonth = activeMonth === 'todos' || eventDate.getMonth() === parseInt(activeMonth);
            return matchesCategory && matchesMonth;
        });
    }

    // Format date
    function formatDate(dateStr) {
        const date = new Date(dateStr + 'T00:00:00');
        return {
            day: date.getDate(),
            month: monthNames[date.getMonth()],
            monthFull: fullMonthNames[date.getMonth()],
            year: date.getFullYear()
        };
    }

    // Render event card
    function createEventCard(event) {
        const date = formatDate(event.date);
        const card = document.createElement('article');
        card.className = 'event-card';

        const statusClass = event.status || 'confirmed';
        const statusText = event.status === 'open' && !event.registrationUrl
            ? statusLabels['confirmed']
            : (statusLabels[statusClass] || 'Confirmado');

        card.innerHTML = `
            <div class="event-card-header">
                <div class="event-date-badge">
                    <span class="day">${date.day}</span>
                    <span class="month">${date.month}</span>
                </div>
                <div class="event-card-info">
                    <span class="event-category ${event.category}">${categoryLabels[event.category]}</span>
                    <h3 class="event-title">${event.title}</h3>
                </div>
            </div>
            <div class="event-card-body">
                <p class="event-description">${event.description}</p>
                <div class="event-meta">
                    <div class="event-meta-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        <span>${event.time}h — ${date.day} de ${date.monthFull} de ${date.year}</span>
                    </div>
                    <div class="event-meta-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        <span>${event.location}</span>
                    </div>
                </div>
            </div>
            <div class="event-card-footer">
                <span class="event-status ${statusClass}">${statusText}</span>
                ${event.registrationUrl
                    ? `<a href="${event.registrationUrl}" target="_blank" rel="noopener noreferrer" class="btn-register">Inscrever-se</a>`
                    : ''
                }
            </div>
        `;

        return card;
    }

    // Render all events
    function renderEvents() {
        const filtered = getFilteredEvents();
        grid.innerHTML = '';

        if (filtered.length === 0) {
            emptyState.style.display = 'block';
            return;
        }

        emptyState.style.display = 'none';
        filtered.forEach(event => {
            grid.appendChild(createEventCard(event));
        });
    }

    // Render recurring activity card
    function createActivityCard(activity) {
        const card = document.createElement('article');
        card.className = 'activity-card';

        const statusClass = activity.status || 'confirmed';
        const statusText = activity.status === 'open' && !activity.registrationUrl
            ? statusLabels['confirmed']
            : (statusLabels[statusClass] || 'Confirmado');

        card.innerHTML = `
            <div class="activity-card-header">
                ${activity.frequency ? `<span class="activity-frequency ${activity.frequency}">${frequencyLabels[activity.frequency]}</span>` : ''}
                <span class="event-category ${activity.category}">${categoryLabels[activity.category]}</span>
            </div>
            <h3 class="activity-title">${activity.title}</h3>
            ${activity.subtitle ? `<p class="activity-subtitle">${activity.subtitle}</p>` : ''}
            <p class="activity-description">${activity.description}</p>
            <div class="activity-meta">
                ${activity.day ? `<div class="activity-meta-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    <span>${dayLabels[activity.day]}s</span>
                </div>` : ''}
                <div class="activity-meta-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    <span>${activity.time}</span>
                </div>
                <div class="activity-meta-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span>${activity.location}</span>
                </div>
            </div>
            <div class="activity-card-footer">
                <span class="event-status ${statusClass}">${statusText}</span>
                ${activity.registrationUrl
                    ? `<a href="${activity.registrationUrl}" target="_blank" rel="noopener noreferrer" class="btn-register">Inscrever-se</a>`
                    : ''
                }
            </div>
        `;

        return card;
    }

    // Render all recurring activities
    async function renderActivities() {
        const grid = document.getElementById('activities-grid');
        if (!grid) return;
        grid.innerHTML = '';
        const sheetData = await loadFromGoogleSheets();
        let data;
        if (sheetData) {
            // Filtrar solo filas de tipo "actividad"
            data = sheetData
                .filter(row => row.type === 'actividad')
                .map(row => ({
                    id: parseInt(row.id) || 0,
                    title: row.title || '',
                    subtitle: row.subtitle || '',
                    frequency: row.frequency || '',
                    day: row.day || '',
                    time: row.time || '',
                    location: row.location || '',
                    category: row.category || 'cultural',
                    description: row.description || '',
                    registrationUrl: row.registrationUrl || null,
                    status: row.status || 'confirmed'
                }));
        } else {
            data = activitiesData;
        }
        data.forEach(activity => {
            grid.appendChild(createActivityCard(activity));
        });
    }

    // Event Listeners
    categoryFilters.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;

        categoryFilters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.dataset.category;
        renderEvents();
    });

    monthFilter.addEventListener('change', (e) => {
        activeMonth = e.target.value;
        renderEvents();
    });

    // Mobile nav toggle
    navToggle.addEventListener('click', () => {
        navList.classList.toggle('open');
    });

    // Close mobile nav on link click
    navList.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-link')) {
            navList.classList.remove('open');
        }
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY + 100;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            const link = document.querySelector(`.nav-link[href="#${id}"]`);
            if (link) {
                if (scrollY >= top && scrollY < top + height) {
                    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)';
        } else {
            header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)';
        }
    });

    // Scroll-triggered animations with Intersection Observer
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
        const animatedElements = document.querySelectorAll('.fade-in-up');
        // Reset elements for observer
        animatedElements.forEach(el => {
            el.style.animationPlayState = 'paused';
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

        animatedElements.forEach(el => observer.observe(el));
    }

    // Init
    loadEvents();
    renderActivities();

})();
