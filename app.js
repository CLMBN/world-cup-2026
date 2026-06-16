// ── LANGUAGE ──────────────────────────────────────────────────────────────────

let LANG = localStorage.getItem('wc_lang') || 'en';
let ACTIVE_TEAM = window.__defaultCountry || localStorage.getItem('wc_team') || 'colombia';

const T = {
  en: {
    appTitle:        'World Cup 2026',
    tabTournament:   '🌍 Tournament',
    tabColombia:     '🇨🇴 Colombia',
    tabMexico:       '🇲🇽 Mexico',
    tabScores:       '📅 Scores',
    live:            'Live',
    refresh:         '↻ Refresh',
    updated:         'Updated',
    tz:              'ET',
    todayLabel:      (d) => `⚽ Games — ${d}`,
    tomorrowLabel:   (d) => `⚽ Tomorrow — ${d}`,
    allStandings:    '📊 All Group Standings',
    colSchedule:     '📅 Group Stage Schedule',
    colStandings:    '📊 Group K Standings',
    howToWatch:      '📺 How to Watch Colombia — Free & Paid',
    keyPlayers:      '⚽ Key Players',
    newsResources:   '📰 News & Resources',
    loadingToday:    "Loading today's schedule…",
    loadingTomorrow: "Loading tomorrow's schedule…",
    loadingStandings:'Loading standings…',
    noGamesToday:    'No games scheduled today',
    noGamesTomorrow: 'No games scheduled tomorrow',
    noGamesDate:     'No games scheduled',
    noStandings:     'Standings not yet available',
    noStandingsSub:  'Open via a local server to fetch live ESPN data: <code>python3 -m http.server 8765</code>',
    noTodaySub:      'Check back on the next match day — or open via a local server for live ESPN data.',
    noTomorrowSub:   'Check back later for the updated schedule.',
    selectDate:      'Select a date above',
    loading:         'Loading…',
    ft:              'FT',
    possession:      'Possession',
    shotsOnTarget:   'Shots on Target',
    yellowCards:     'Yellow Cards',
    pen:             'pen',
    og:              'og',
    liveStats:       'Live match stats',
    matchPreview:    'Match preview',
    fullStats:       'Full match stats',
    espnOn:          'on ESPN →',
    kickoffIn:       'Kickoff In',
    days:            'Days',
    hrs:             'Hrs',
    min:             'Min',
    sec:             'Sec',
    liveNow:         (n) => `🔴 LIVE NOW — Matchday ${n}`,
    nextMatch:       (n) => `⏭ Next Match — Matchday ${n}`,
    groupComplete:   'Group Stage Complete',
    colAdvance:      'Colombia advance to the knockout rounds!',
    checkFIFA:       'Check FIFA.com for Round of 32 schedule.',
    matchdayGroup:   (n) => `Matchday ${n} · Group K`,
    groupStage:      'Group Stage',
    stTeam:          'Team',  stGP:'GP', stW:'W', stD:'D', stL:'L',
    stGF:'GF', stGA:'GA', stGD:'GD', stPts:'Pts',
    stPtsTitle:      'Points', stGDTitle:'Goal Difference', stGPTitle:'Games Played',
    qualifyNote:     'Top 2 qualify · Best 3rd-place teams also advance',
    fullSquad:       'Full 26-man squad on',
    matchStatsLocal: 'Match stats available via local server',
  },
  es: {
    appTitle:        'Copa Mundial 2026',
    tabTournament:   '🌍 Torneo',
    tabColombia:     '🇨🇴 Colombia',
    tabMexico:       '🇲🇽 México',
    tabScores:       '📅 Resultados',
    live:            'En vivo',
    refresh:         '↻ Actualizar',
    updated:         'Actualizado',
    tz:              'COT',
    todayLabel:      (d) => `⚽ Partidos de hoy — ${d}`,
    tomorrowLabel:   (d) => `⚽ Mañana — ${d}`,
    allStandings:    '📊 Tabla de posiciones',
    colSchedule:     '📅 Calendario — Fase de grupos',
    colStandings:    '📊 Tabla del Grupo K',
    howToWatch:      '📺 Cómo ver a Colombia — Gratis y de pago',
    keyPlayers:      '⚽ Jugadores clave',
    newsResources:   '📰 Noticias y recursos',
    loadingToday:    'Cargando partidos de hoy…',
    loadingTomorrow: 'Cargando partidos de mañana…',
    loadingStandings:'Cargando tabla…',
    noGamesToday:    'No hay partidos hoy',
    noGamesTomorrow: 'No hay partidos mañana',
    noGamesDate:     'No hay partidos programados',
    noStandings:     'Tabla de posiciones no disponible',
    noStandingsSub:  'Abre en un servidor local para obtener datos en vivo: <code>python3 -m http.server 8765</code>',
    noTodaySub:      'Vuelve en la próxima jornada, o abre desde un servidor local para datos en vivo.',
    noTomorrowSub:   'Vuelve más tarde para el calendario actualizado.',
    selectDate:      'Selecciona una fecha arriba',
    loading:         'Cargando…',
    ft:              'FT',
    possession:      'Posesión',
    shotsOnTarget:   'Tiros al arco',
    yellowCards:     'Tarjetas amarillas',
    pen:             'pen',
    og:              'ag',
    liveStats:       'Estadísticas en vivo',
    matchPreview:    'Vista previa',
    fullStats:       'Estadísticas del partido',
    espnOn:          'en ESPN →',
    kickoffIn:       'Inicio en',
    days:            'Días',
    hrs:             'Hrs',
    min:             'Min',
    sec:             'Seg',
    liveNow:         (n) => `🔴 EN VIVO — Jornada ${n}`,
    nextMatch:       (n) => `⏭ Próximo Partido — Jornada ${n}`,
    groupComplete:   'Fase de grupos completada',
    colAdvance:      '¡Colombia avanza a la ronda eliminatoria!',
    checkFIFA:       'Consulta FIFA.com para el calendario de eliminatorias.',
    matchdayGroup:   (n) => `Jornada ${n} · Grupo K`,
    groupStage:      'Fase de grupos',
    stTeam:          'Equipo', stGP:'PJ', stW:'G', stD:'E', stL:'P',
    stGF:'GF', stGA:'GC', stGD:'DG', stPts:'Pts',
    stPtsTitle:      'Puntos', stGDTitle:'Diferencia de goles', stGPTitle:'Partidos jugados',
    qualifyNote:     'Los 2 mejores clasifican · Los mejores 3eros también avanzan',
    fullSquad:       'Plantilla completa en',
    matchStatsLocal: 'Estadísticas disponibles en servidor local',
  },
};

function uiLocale() { return LANG === 'es' ? 'es-CO' : 'en-US'; }
function uiTZ()     { return LANG === 'es' ? 'America/Bogota' : 'America/New_York'; }

// ── FLAG MAP ──────────────────────────────────────────────────────────────────

const FLAGS = {
  'argentina': '🇦🇷', 'australia': '🇦🇺', 'austria': '🇦🇹',
  'bahrain': '🇧🇭', 'belgium': '🇧🇪', 'bolivia': '🇧🇴',
  'brazil': '🇧🇷', 'cameroon': '🇨🇲', 'canada': '🇨🇦',
  'chile': '🇨🇱', 'colombia': '🇨🇴', 'costa rica': '🇨🇷',
  'croatia': '🇭🇷', 'czech republic': '🇨🇿', 'czechia': '🇨🇿', 'denmark': '🇩🇰',
  'dr congo': '🇨🇩', 'democratic republic of congo': '🇨🇩',
  'ecuador': '🇪🇨', 'egypt': '🇪🇬', 'england': '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
  'france': '🇫🇷', 'germany': '🇩🇪', 'ghana': '🇬🇭',
  'hungary': '🇭🇺', 'iran': '🇮🇷', 'italy': '🇮🇹',
  "ivory coast": '🇨🇮', "côte d'ivoire": '🇨🇮',
  'japan': '🇯🇵', 'kenya': '🇰🇪', 'mexico': '🇲🇽',
  'morocco': '🇲🇦', 'netherlands': '🇳🇱', 'new zealand': '🇳🇿',
  'nigeria': '🇳🇬', 'norway': '🇳🇴', 'paraguay': '🇵🇾',
  'peru': '🇵🇪', 'poland': '🇵🇱', 'portugal': '🇵🇹',
  'qatar': '🇶🇦', 'romania': '🇷🇴', 'saudi arabia': '🇸🇦',
  'senegal': '🇸🇳', 'serbia': '🇷🇸', 'slovenia': '🇸🇮',
  'south korea': '🇰🇷', 'korea republic': '🇰🇷', 'spain': '🇪🇸',
  'switzerland': '🇨🇭', 'turkey': '🇹🇷', 'turkiye': '🇹🇷', 'türkiye': '🇹🇷',
  'ukraine': '🇺🇦', 'united states': '🇺🇸', 'usa': '🇺🇸',
  'uruguay': '🇺🇾', 'uzbekistan': '🇺🇿', 'venezuela': '🇻🇪',
  'wales': '🏴󠁧󠁢󠁷󠁬󠁳󠁿', 'panama': '🇵🇦', 'jamaica': '🇯🇲',
  'honduras': '🇭🇳', 'el salvador': '🇸🇻', 'guatemala': '🇬🇹',
  'cuba': '🇨🇺', 'indonesia': '🇮🇩', 'thailand': '🇹🇭',
  'china pr': '🇨🇳', 'china': '🇨🇳', 'iraq': '🇮🇶',
  'united arab emirates': '🇦🇪', 'uae': '🇦🇪',
  'south africa': '🇿🇦', 'tanzania': '🇹🇿', 'mali': '🇲🇱',
  'algeria': '🇩🇿', 'tunisia': '🇹🇳', 'angola': '🇦🇴',
  'cape verde': '🇨🇻', 'benin': '🇧🇯', 'zambia': '🇿🇲',
  'greece': '🇬🇷', 'scotland': '🏴󠁧󠁢󠁳󠁣󠁴󠁿', 'ireland': '🇮🇪',
  'republic of ireland': '🇮🇪', 'north korea': '🇰🇵',
  'dpr korea': '🇰🇵', 'philippines': '🇵🇭', 'vietnam': '🇻🇳',
  'new caledonia': '🇳🇨', 'tajikistan': '🇹🇯', 'kyrgyzstan': '🇰🇬',
  'curaçao': '🇨🇼', 'curacao': '🇨🇼',
  'trinidad & tobago': '🇹🇹', 'trinidad and tobago': '🇹🇹',
  'haiti': '🇭🇹', 'nicaragua': '🇳🇮', 'dominican republic': '🇩🇴',
  'oman': '🇴🇲', 'jordan': '🇯🇴', 'palestine': '🇵🇸',
  'syria': '🇸🇾', 'india': '🇮🇳', 'myanmar': '🇲🇲',
  'ethiopia': '🇪🇹', 'guinea': '🇬🇳', 'comoros': '🇰🇲',
  'liberia': '🇱🇷', 'namibia': '🇳🇦', 'mozambique': '🇲🇿',
  'guinea-bissau': '🇬🇼', 'mauritania': '🇲🇷', 'gambia': '🇬🇲',
  'sudan': '🇸🇩', 'rwanda': '🇷🇼', 'sierra leone': '🇸🇱',
  'central african republic': '🇨🇫', 'equatorial guinea': '🇬🇶',
  'malawi': '🇲🇼', 'zimbabwe': '🇿🇼', 'botswana': '🇧🇼',
  'lesotho': '🇱🇸', 'eswatini': '🇸🇿', 'swaziland': '🇸🇿',
  'north macedonia': '🇲🇰', 'albania': '🇦🇱', 'bulgaria': '🇧🇬',
  'slovakia': '🇸🇰', 'finland': '🇫🇮', 'sweden': '🇸🇪',
  'norway': '🇳🇴', 'denmark': '🇩🇰', 'austria': '🇦🇹',
};

function flagFor(name) {
  return FLAGS[(name || '').toLowerCase().normalize('NFC')] || '🏴';
}

// ── STATIC DATA ──────────────────────────────────────────────────────────────

const MATCHES = [
  {
    id: 'uzb-col', matchday: 1,
    kickoffUTC: '2026-06-18T02:00:00Z',
    home: { name: 'Uzbekistan', flag: '🇺🇿', espn: 'uzbekistan' },
    away: { name: 'Colombia',   flag: '🇨🇴', espn: 'colombia' },
    venue: 'Estadio Azteca', city: 'Mexico City, MX', tv: 'FS1',
    streams: [
      { name: 'FS1',             type: 'cable', url: 'https://www.foxsports.com/live',         note: 'Cable/satellite required' },
      { name: 'Telemundo',       type: 'free',  url: 'https://www.telemundo.com/deportes',     note: 'Free OTA antenna, Spanish' },
      { name: 'Peacock',         type: 'cable', url: 'https://www.peacocktv.com',              note: 'Telemundo stream online' },
      { name: 'Tubi',            type: 'free',  url: 'https://tubitv.com',                     note: 'Selected WC games free' },
    ]
  },
  {
    id: 'col-drc', matchday: 2,
    kickoffUTC: '2026-06-24T02:00:00Z',
    home: { name: 'Colombia', flag: '🇨🇴', espn: 'colombia' },
    away: { name: 'DR Congo',  flag: '🇨🇩', espn: 'dr congo' },
    venue: 'Estadio Akron', city: 'Guadalajara, MX', tv: 'FS1',
    streams: [
      { name: 'FS1',             type: 'cable', url: 'https://www.foxsports.com/live',         note: 'Cable/satellite required' },
      { name: 'Telemundo',       type: 'free',  url: 'https://www.telemundo.com/deportes',     note: 'Free OTA antenna, Spanish' },
      { name: 'Peacock',         type: 'cable', url: 'https://www.peacocktv.com',              note: 'Telemundo stream online' },
      { name: 'Tubi',            type: 'free',  url: 'https://tubitv.com',                     note: 'Selected WC games free' },
    ]
  },
  {
    id: 'col-por', matchday: 3,
    kickoffUTC: '2026-06-27T23:30:00Z',
    home: { name: 'Colombia', flag: '🇨🇴', espn: 'colombia' },
    away: { name: 'Portugal',  flag: '🇵🇹', espn: 'portugal' },
    venue: 'Hard Rock Stadium', city: 'Miami, FL', tv: 'FOX',
    streams: [
      { name: 'FOX (Free OTA!)', type: 'free',  url: 'https://www.fox.com/live',               note: 'Free broadcast TV' },
      { name: 'Telemundo',       type: 'free',  url: 'https://www.telemundo.com/deportes',     note: 'Free OTA antenna, Spanish' },
      { name: 'Peacock',         type: 'cable', url: 'https://www.peacocktv.com',              note: 'Telemundo stream online' },
      { name: 'Tubi',            type: 'free',  url: 'https://tubitv.com',                     note: 'Selected WC games free' },
    ]
  }
];

const PLAYERS = [
  { pos:'GK',  name:'Camilo Vargas',       club:'Atlas FC' },
  { pos:'DEF', name:'Davinson Sánchez',    club:'Galatasaray' },
  { pos:'DEF', name:'Jhon Lucumí',         club:'Bologna' },
  { pos:'DEF', name:'Yerry Mina',          club:'Club América' },
  { pos:'DEF', name:'Daniel Muñoz',        club:'Crystal Palace' },
  { pos:'MID', name:'James Rodríguez ©',   club:'Rayo Vallecano' },
  { pos:'MID', name:'Richard Ríos',        club:'Palmeiras' },
  { pos:'MID', name:'Jefferson Lerma',     club:'Crystal Palace' },
  { pos:'FWD', name:'Luis Díaz',           club:'Liverpool' },
  { pos:'FWD', name:'R. Santos Borré',     club:'Eintracht Frankfurt' },
  { pos:'FWD', name:'Jhon Córdoba',        club:'Krasnodar' },
];

const NEWS = [
  { icon:'⚽', src:'FIFA.com',    title:'Colombia official team news',        url:'https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/teams/colombia/team-news' },
  { icon:'📺', src:'ESPN',       title:'Colombia scores & stats',            url:'https://www.espn.com/soccer/team/_/id/116/colombia' },
  { icon:'🩹', src:'ESPN',       title:'2026 WC injuries tracker',           url:'https://www.espn.com/soccer/story/_/id/48572979/2026-fifa-world-cup-injuries-tracker-which-stars-miss-latest-info' },
  { icon:'🗓', src:'NBC Sports', title:'Daily WC schedule & how to watch',   url:'https://www.nbcsports.com/soccer/news/2026-world-cup-daily-schedule-how-to-watch-live-what-games-are-on-today' },
  { icon:'📊', src:'FIFA.com',   title:'Group K official standings',         url:'https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/scores-fixtures' },
  { icon:'📰', src:'beIN Sports','title':'Colombia WC squad deep-dive',      url:'https://www.beinsports.com/en-us/soccer/fifa-world-cup-2026/articles/colombia-at-the-2026-fifa-world-cup-squad-schedule-and-everything-you-need-to-know-2026-05-25' },
  { icon:'🎟', src:'Yahoo Sports','title':'Full 2026 WC schedule & groups',  url:'https://sports.yahoo.com/soccer/article/2026-world-cup-schedule-qualified-teams-groups-match-dates-fixtures-how-to-watch-050724214.html' },
  { icon:'🌐', src:'Wikipedia',  title:'Group K · full bracket info',        url:'https://en.wikipedia.org/wiki/2026_FIFA_World_Cup_Group_K' },
];

let STANDINGS = [
  { team:'Portugal',   flag:'🇵🇹', gp:0,w:0,d:0,l:0,gf:0,ga:0,pts:0 },
  { team:'Colombia',   flag:'🇨🇴', gp:0,w:0,d:0,l:0,gf:0,ga:0,pts:0 },
  { team:'DR Congo',   flag:'🇨🇩', gp:0,w:0,d:0,l:0,gf:0,ga:0,pts:0 },
  { team:'Uzbekistan', flag:'🇺🇿', gp:0,w:0,d:0,l:0,gf:0,ga:0,pts:0 },
];

// ── MEXICO STATIC DATA ───────────────────────────────────────────────────────

const MEXICO_MATCHES = [
  {
    id: '760415', matchday: 1,
    kickoffUTC: '2026-06-11T19:00:00Z',
    home: { name: 'Mexico',       flag: '🇲🇽', espn: 'mexico' },
    away: { name: 'South Africa', flag: '🇿🇦', espn: 'south africa' },
    venue: 'Estadio Banorte', city: 'Mexico City, MX', tv: 'FOX',
    streams: [
      { name: 'FOX (Free OTA!)', type: 'free',  url: 'https://www.fox.com/live',               note: 'Free broadcast TV' },
      { name: 'Telemundo',       type: 'free',  url: 'https://www.telemundo.com/deportes',     note: 'Free OTA antenna, Spanish' },
      { name: 'Peacock',         type: 'cable', url: 'https://www.peacocktv.com',              note: 'Telemundo stream online' },
    ]
  },
  {
    id: '760441', matchday: 2,
    kickoffUTC: '2026-06-19T01:00:00Z',
    home: { name: 'Mexico',      flag: '🇲🇽', espn: 'mexico' },
    away: { name: 'South Korea', flag: '🇰🇷', espn: 'south korea' },
    venue: 'Estadio Akron', city: 'Guadalajara, MX', tv: 'FOX',
    streams: [
      { name: 'FOX (Free OTA!)', type: 'free',  url: 'https://www.fox.com/live',               note: 'Free broadcast TV' },
      { name: 'Telemundo',       type: 'free',  url: 'https://www.telemundo.com/deportes',     note: 'Free OTA antenna, Spanish' },
      { name: 'Peacock',         type: 'cable', url: 'https://www.peacocktv.com',              note: 'Telemundo stream online' },
    ]
  },
  {
    id: '760467', matchday: 3,
    kickoffUTC: '2026-06-25T01:00:00Z',
    home: { name: 'Czechia', flag: '🇨🇿', espn: 'czechia' },
    away: { name: 'Mexico',  flag: '🇲🇽', espn: 'mexico' },
    venue: 'Estadio Banorte', city: 'Mexico City, MX', tv: 'FOX',
    streams: [
      { name: 'FOX (Free OTA!)', type: 'free',  url: 'https://www.fox.com/live',               note: 'Free broadcast TV' },
      { name: 'Telemundo',       type: 'free',  url: 'https://www.telemundo.com/deportes',     note: 'Free OTA antenna, Spanish' },
      { name: 'Peacock',         type: 'cable', url: 'https://www.peacocktv.com',              note: 'Telemundo stream online' },
    ]
  },
];

const MEXICO_PLAYERS = [
  { pos:'GK',  name:'Guillermo Ochoa',    club:'Club América' },
  { pos:'DEF', name:'Jorge Sánchez',      club:'Porto' },
  { pos:'DEF', name:'Johan Vásquez',      club:'Genoa' },
  { pos:'DEF', name:'César Montes',       club:'Espanyol' },
  { pos:'DEF', name:'Kevin Álvarez',      club:'Pachuca' },
  { pos:'MID', name:'Edson Álvarez',      club:'West Ham' },
  { pos:'MID', name:'Luis Chávez',        club:'Pachuca' },
  { pos:'MID', name:'Carlos Rodríguez',   club:'Cruz Azul' },
  { pos:'FWD', name:'Santiago Giménez',   club:'Feyenoord' },
  { pos:'FWD', name:'Hirving Lozano',     club:'PSV Eindhoven' },
  { pos:'FWD', name:'Henry Martín',       club:'Club América' },
];

const MEXICO_NEWS = [
  { icon:'⚽', src:'FIFA.com',    title:'Mexico official team news',         url:'https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/teams/mexico/team-news' },
  { icon:'📺', src:'ESPN',        title:'Mexico scores & stats',             url:'https://www.espn.com/soccer/team/_/id/164/mexico' },
  { icon:'🩹', src:'ESPN',        title:'2026 WC injuries tracker',          url:'https://www.espn.com/soccer/story/_/id/48572979/2026-fifa-world-cup-injuries-tracker-which-stars-miss-latest-info' },
  { icon:'🗓', src:'NBC Sports',  title:'Daily WC schedule & how to watch', url:'https://www.nbcsports.com/soccer/news/2026-world-cup-daily-schedule-how-to-watch-live-what-games-are-on-today' },
  { icon:'📊', src:'FIFA.com',    title:'Mexico group standings',            url:'https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/scores-fixtures' },
  { icon:'🎟', src:'Yahoo Sports','title':'Full 2026 WC schedule & groups', url:'https://sports.yahoo.com/soccer/article/2026-world-cup-schedule-qualified-teams-groups-match-dates-fixtures-how-to-watch-050724214.html' },
  { icon:'🌐', src:'Wikipedia',   title:'Mexico at the 2026 World Cup',     url:'https://en.wikipedia.org/wiki/Mexico_at_the_2026_FIFA_World_Cup' },
  { icon:'📰', src:'ESPN',        title:'Mexico squad & WC preview',        url:'https://www.espn.com/soccer/team/_/id/164/mexico' },
];

let MEXICO_STANDINGS = [
  { team:'Mexico',       flag:'🇲🇽', gp:1,w:1,d:0,l:0,gf:2,ga:0,pts:3 },
  { team:'South Korea',  flag:'🇰🇷', gp:1,w:1,d:0,l:0,gf:2,ga:1,pts:3 },
  { team:'Czechia',      flag:'🇨🇿', gp:1,w:0,d:0,l:1,gf:1,ga:2,pts:0 },
  { team:'South Africa', flag:'🇿🇦', gp:1,w:0,d:0,l:1,gf:0,ga:2,pts:0 },
];

let LIVE_SCORES = {};
let TODAY_GAMES = [];
let TOMORROW_GAMES = [];
let ALL_GROUPS_DATA = [];
let MATCH_SUMMARIES = {}; // key: "homeTeamLower|awayTeamLower"

// ── UTILITIES ────────────────────────────────────────────────────────────────

const pad = n => String(n).padStart(2,'0');

function fmtET(utc) {
  return new Date(utc).toLocaleString(uiLocale(), {
    timeZone: uiTZ(),
    weekday:'short', month:'short', day:'numeric',
    hour:'numeric', minute:'2-digit', hour12:true
  }) + ' ' + T[LANG].tz;
}

function fmtTimeET(utc) {
  return new Date(utc).toLocaleTimeString(uiLocale(), {
    timeZone: uiTZ(),
    hour:'numeric', minute:'2-digit', hour12:true
  }) + ' ' + T[LANG].tz;
}

function fmtDateShort(utc) {
  return new Date(utc).toLocaleDateString(uiLocale(), {
    timeZone: uiTZ(), month:'short', day:'numeric'
  });
}

function todayESPNDate() {
  const d = new Date();
  return `${d.getFullYear()}${String(d.getMonth()+1).padStart(2,'0')}${String(d.getDate()).padStart(2,'0')}`;
}

function tomorrowESPNDate() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return `${d.getFullYear()}${String(d.getMonth()+1).padStart(2,'0')}${String(d.getDate()).padStart(2,'0')}`;
}

function matchState(utc) {
  const diff = new Date(utc).getTime() - Date.now();
  if (diff >  0)        return 'upcoming';
  if (diff > -7200000)  return 'live';
  return 'final';
}

function countdown(utc) {
  const diff = new Date(utc).getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff % 86400000) / 3600000),
    m: Math.floor((diff % 3600000)  / 60000),
    s: Math.floor((diff % 60000)    / 1000),
  };
}

function parseGoalDetails(details, homeTeamLower, awayTeamLower) {
  return (details || [])
    .filter(d => d.scoringPlay === true)
    .map(d => {
      const spTeam = (d.team?.displayName || d.team?.name || '').toLowerCase();
      const side = (awayTeamLower && spTeam === awayTeamLower) ? 'away' : 'home';
      const rawClock = d.clock?.displayValue || '';
      const clock = /^\d+:\d+$/.test(rawClock) ? rawClock.split(':')[0] + "'" : rawClock;
      const involved = d.athletesInvolved || [];
      const scorerName = involved[0]?.displayName || involved[0]?.shortName || involved[0]?.fullName;
      if (!scorerName) return null;
      return {
        side,
        name: shortenName(scorerName),
        clock,
        isOG: d.ownGoal === true || (d.type?.text || '').toLowerCase().includes('own'),
        isPK: d.penaltyKick === true || (d.type?.text || '').toLowerCase().includes('penalty'),
      };
    }).filter(Boolean);
}

function shortenName(full) {
  if (!full || full === '?') return full;
  const parts = full.trim().split(/\s+/);
  if (parts.length < 2) return full;
  return parts[0][0] + '. ' + parts.slice(1).join(' ');
}

async function fetchSummariesFromEvents(events) {
  const completed = (events || []).filter(ev => ev.status?.type?.state === 'post');
  await Promise.all(completed.map(async ev => {
    const comp = ev.competitions?.[0];
    if (!comp) return;
    const home = comp.competitors?.find(c => c.homeAway === 'home');
    const away = comp.competitors?.find(c => c.homeAway === 'away');
    if (!home || !away) return;
    const hn = (home.team?.displayName || '').toLowerCase();
    const an = (away.team?.displayName || '').toLowerCase();
    const existing = MATCH_SUMMARIES[`${hn}|${an}`];
    if (existing && Object.keys(existing.statsByTeam || {}).length > 0) return;
    try {
      const res = await fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/summary?event=${ev.id}`);
      if (!res.ok) return;
      parseSummary(await res.json(), hn, an);
    } catch(_) {}
  }));
}

function parseSummary(data, homeKeyLower, awayKeyLower) {
  // Use boxscore to reliably identify home vs away team names
  const boxTeams = data.boxscore?.teams || [];
  const homeBoxTeam = boxTeams.find(t => t.homeAway === 'home');
  const awayBoxTeam = boxTeams.find(t => t.homeAway === 'away');
  const homeBoxName = (homeBoxTeam?.team?.displayName || '').toLowerCase();
  const awayBoxName = (awayBoxTeam?.team?.displayName || '').toLowerCase();

  // Primary: header.competitions[0].details — ESPN summary reliably has athletesInvolved here
  const headerDetails = data.header?.competitions?.[0]?.details || [];
  let scorers = parseGoalDetails(headerDetails, homeKeyLower, awayKeyLower);

  // Fallback: scoringPlays (structure varies by endpoint/league)
  if (scorers.length === 0) {
    scorers = (data.scoringPlays || []).map(sp => {
      const spTeamName = (sp.team?.displayName || sp.team?.name || '').toLowerCase();
      let side = 'home';
      if (spTeamName && ((awayBoxName && spTeamName === awayBoxName) || spTeamName === awayKeyLower)) {
        side = 'away';
      }
      const involved = sp.athletesInvolved || [];
      const participants = sp.participants || [];
      const pType = p => typeof p.type === 'string' ? p.type : (p.type?.name || p.type?.description || '');
      const scorerP = participants.find(p => pType(p).toLowerCase().includes('scor')) || participants[0];
      const scorerObj = involved[0] || scorerP?.athlete || scorerP;
      const scorerName = scorerObj?.displayName || scorerObj?.shortName || scorerObj?.fullName;
      if (!scorerName) return null;
      const rawClock = sp.clock?.displayValue || '';
      const clock = /^\d+:\d+$/.test(rawClock) ? rawClock.split(':')[0] + "'" : rawClock;
      const typeText = (sp.type?.text || '').toLowerCase();
      return { side, name: shortenName(scorerName), clock,
               isOG: typeText.includes('own'), isPK: typeText.includes('penalty') };
    }).filter(Boolean);
  }

  const statsByTeam = {};
  boxTeams.forEach(t => {
    const side = t.homeAway === 'home' ? 'home' : 'away';
    const s = {};
    (t.statistics || []).forEach(st => { s[st.name] = st.displayValue ?? String(st.value); });
    statsByTeam[side] = s;
  });

  const key = `${homeKeyLower}|${awayKeyLower}`;
  if (!MATCH_SUMMARIES[key]) MATCH_SUMMARIES[key] = { scorers: [], statsByTeam: {} };
  const hasNamedScorers = MATCH_SUMMARIES[key].scorers.some(s => s.name && s.name !== '?');
  if (scorers.length > 0 && !hasNamedScorers) MATCH_SUMMARIES[key].scorers = scorers;
  MATCH_SUMMARIES[key].statsByTeam = statsByTeam;
}

function summaryForGame(homeTeam, awayTeam) {
  return MATCH_SUMMARIES[`${homeTeam.toLowerCase()}|${awayTeam.toLowerCase()}`] || null;
}

function matchRecapHtml(homeTeam, awayTeam, summary) {
  if (!summary) return '';
  const { scorers, statsByTeam } = summary;
  const hs  = statsByTeam['home'] || {};
  const as_ = statsByTeam['away'] || {};

  const hGoals = scorers.filter(s => s.side === 'home');
  const aGoals = scorers.filter(s => s.side === 'away');

  const goalStr = goals => goals.map(g =>
    `${g.name} ${g.clock}${g.isPK ? ` <span class="goal-type">${T[LANG].pen}</span>` : g.isOG ? ` <span class="goal-type">${T[LANG].og}</span>` : ''}`
  ).join(' · ');

  const homeGoalHtml = hGoals.length ? `<div class="recap-goals">⚽ ${goalStr(hGoals)}</div>` : '';
  const awayGoalHtml = aGoals.length ? `<div class="recap-goals away">⚽ ${goalStr(aGoals)}</div>` : '';

  const statRow = (label, hv, av) => (hv || av) ? `
    <div class="recap-stat">
      <span class="recap-val">${hv || '–'}</span>
      <span class="recap-label">${label}</span>
      <span class="recap-val">${av || '–'}</span>
    </div>` : '';

  const rows = [
    statRow(T[LANG].possession,    hs.possessionPct,  as_.possessionPct),
    statRow(T[LANG].shotsOnTarget, hs.shotsOnTarget,  as_.shotsOnTarget),
    statRow(T[LANG].yellowCards,   hs.yellowCards,    as_.yellowCards),
  ].filter(Boolean).join('');

  if (!homeGoalHtml && !awayGoalHtml && !rows) return '';

  return `<div class="match-recap">
    ${homeGoalHtml}${awayGoalHtml}
    ${rows ? `<div class="recap-stats">${rows}</div>` : ''}
  </div>`;
}

function liveScoreFor(match) {
  for (const [key, val] of Object.entries(LIVE_SCORES)) {
    const k = key.toLowerCase();
    const hn = match.home.espn, an = match.away.espn;
    if (k.includes(hn) && k.includes(an)) return val;
    if (k.includes(an) && k.includes(hn)) {
      return { ...val, homeScore: val.awayScore, awayScore: val.homeScore };
    }
  }
  return null;
}

// ── ESPN API ─────────────────────────────────────────────────────────────────

const SB_URL = 'https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard?limit=200&dates=20260611-20260720';
const ST_URL = 'https://site.api.espn.com/apis/v2/sports/soccer/fifa.world/standings';

async function fetchESPN() {
  try {
    const todayDate    = todayESPNDate();
    const tomorrowDate = tomorrowESPNDate();
    const TODAY_SB_URL    = `https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard?dates=${todayDate}`;
    const TOMORROW_SB_URL = `https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard?dates=${tomorrowDate}`;

    const [sbRes, stRes, todayRes, tomorrowRes] = await Promise.all([
      fetch(SB_URL),
      fetch(ST_URL),
      fetch(TODAY_SB_URL),
      fetch(TOMORROW_SB_URL),
    ]);

    let sbData = null, tdData = null;
    if (sbRes.ok) {
      sbData = await sbRes.json();
      parseScoreboard(sbData);
    }
    if (stRes.ok) {
      const st = await stRes.json();
      parseStandings(st);
      parseMexicoStandings(st);
      parseAllGroups(st);
    }
    if (todayRes.ok) {
      tdData = await todayRes.json();
      parseTodayGames(tdData);
    }
    if (tomorrowRes.ok) {
      const tm = await tomorrowRes.json();
      parseTomorrowGames(tm);
    }

    // Fetch match summaries for completed Colombia matches + today's completed games
    const summaryEvents = [];
    if (sbData) {
      summaryEvents.push(...(sbData.events || []).filter(ev => {
        const comps = ev.competitions?.[0]?.competitors || [];
        return ev.status?.type?.state === 'post' &&
          comps.some(c => {
            const n = (c.team?.displayName || '').toLowerCase();
            return n === 'colombia' || n === 'mexico';
          });
      }));
    }
    if (tdData) {
      summaryEvents.push(...(tdData.events || []).filter(ev => ev.status?.type?.state === 'post'));
    }
    const seenIds = new Set();
    await fetchSummariesFromEvents(summaryEvents.filter(ev => seenIds.has(ev.id) ? false : seenIds.add(ev.id)));

    hideAlert();
  } catch (e) {
    showAlert('ESPN API unreachable — scores may not be live. ' +
      'For live data open via: <code>python3 -m http.server 8765</code> then visit <code>localhost:8765</code>');
  }
}

function parseScoreboard(data) {
  (data.events || []).forEach(ev => {
    const comp = ev.competitions?.[0];
    if (!comp) return;
    const home = comp.competitors?.find(c => c.homeAway === 'home');
    const away = comp.competitors?.find(c => c.homeAway === 'away');
    if (!home || !away) return;
    const hn = (home.team?.displayName || '').toLowerCase();
    const an = (away.team?.displayName || '').toLowerCase();
    LIVE_SCORES[`${hn}|${an}`] = {
      homeScore: home.score ?? '-',
      awayScore: away.score ?? '-',
      status:    ev.status?.type?.name || '',
      detail:    ev.status?.type?.shortDetail || '',
      clock:     ev.status?.displayClock || '',
    };

    // For completed games, extract goal scorers from competition details
    if (ev.status?.type?.state === 'post') {
      const key = `${hn}|${an}`;
      const scorers = parseGoalDetails(comp.details, hn, an);
      if (scorers.length > 0) {
        if (!MATCH_SUMMARIES[key]) MATCH_SUMMARIES[key] = { scorers: [], statsByTeam: {} };
        MATCH_SUMMARIES[key].scorers = scorers;
      }
    }
  });
}

function parseTodayGames(data) {
  TODAY_GAMES = (data.events || []).map(ev => {
    const comp = ev.competitions?.[0];
    if (!comp) return null;
    const home = comp.competitors?.find(c => c.homeAway === 'home');
    const away = comp.competitors?.find(c => c.homeAway === 'away');
    if (!home || !away) return null;

    const hn = home.team?.displayName || home.team?.name || '?';
    const an = away.team?.displayName || away.team?.name || '?';
    const tvList = (comp.broadcasts || []).flatMap(b => b.names || []).filter(Boolean);

    const game = {
      id:        ev.id,
      homeTeam:  hn,
      awayTeam:  an,
      homeScore: home.score,
      awayScore: away.score,
      state:     ev.status?.type?.state || 'pre',
      detail:    ev.status?.type?.shortDetail || '',
      clock:     ev.status?.displayClock || '',
      kickoffUTC: ev.date,
      venue:     comp.venue?.fullName || '',
      city:      comp.venue?.address?.city || '',
      note:      comp.notes?.[0]?.headline || '',
      tv:        tvList.join(' · '),
    };

    // Extract scorers from details for completed games
    if (game.state === 'post') {
      const key = `${hn.toLowerCase()}|${an.toLowerCase()}`;
      const scorers = parseGoalDetails(comp.details, hn.toLowerCase(), an.toLowerCase());
      if (scorers.length > 0) {
        if (!MATCH_SUMMARIES[key]) MATCH_SUMMARIES[key] = { scorers: [], statsByTeam: {} };
        MATCH_SUMMARIES[key].scorers = scorers;
      }
    }

    return game;
  }).filter(Boolean);
}

function parseTomorrowGames(data) {
  TOMORROW_GAMES = (data.events || []).map(ev => {
    const comp = ev.competitions?.[0];
    if (!comp) return null;
    const home = comp.competitors?.find(c => c.homeAway === 'home');
    const away = comp.competitors?.find(c => c.homeAway === 'away');
    if (!home || !away) return null;

    const hn = home.team?.displayName || home.team?.name || '?';
    const an = away.team?.displayName || away.team?.name || '?';
    const tvList = (comp.broadcasts || []).flatMap(b => b.names || []).filter(Boolean);

    return {
      id:        ev.id,
      homeTeam:  hn,
      awayTeam:  an,
      homeScore: home.score,
      awayScore: away.score,
      state:     ev.status?.type?.state || 'pre',
      detail:    ev.status?.type?.shortDetail || '',
      clock:     ev.status?.displayClock || '',
      kickoffUTC: ev.date,
      venue:     comp.venue?.fullName || '',
      city:      comp.venue?.address?.city || '',
      note:      comp.notes?.[0]?.headline || '',
      tv:        tvList.join(' · '),
    };
  }).filter(Boolean);
}

function parseStandings(data) {
  try {
    const groups = data.standings?.groups || data.children || [];
    const grpK = groups.find(g =>
      /\bK\b/.test((g.name || '').toUpperCase()) ||
      /\bK\b/.test((g.abbreviation || '').toUpperCase())
    );
    if (!grpK) return;
    const entries = grpK.standings?.entries || grpK.entries || [];
    if (entries.length < 2) return;

    const parsed = entries.map(e => {
      const s = {};
      (e.stats || []).forEach(st => { s[st.name] = st.value; });
      return {
        team: e.team?.displayName || e.team?.name || '?',
        flag: flagFor(e.team?.displayName || ''),
        gp:  s.gamesPlayed       ?? 0,
        w:   s.wins              ?? 0,
        d:   s.ties              ?? 0,
        l:   s.losses            ?? 0,
        gf:  s.pointsFor ?? s.goalsFor ?? 0,
        ga:  s.pointsAgainst ?? s.goalsAgainst ?? 0,
        pts: s.points            ?? 0,
      };
    });
    if (parsed.length >= 2) STANDINGS = parsed;
  } catch(_) {}
}

function parseMexicoStandings(data) {
  try {
    const groups = data.standings?.groups || data.children || [];
    const mexicoGroup = groups.find(g => {
      const entries = g.standings?.entries || g.entries || [];
      return entries.some(e => (e.team?.displayName || '').toLowerCase() === 'mexico');
    });
    if (!mexicoGroup) return;
    const entries = mexicoGroup.standings?.entries || mexicoGroup.entries || [];
    if (entries.length < 2) return;
    const parsed = entries.map(e => {
      const s = {};
      (e.stats || []).forEach(st => { s[st.name] = st.value; });
      return {
        team: e.team?.displayName || e.team?.name || '?',
        flag: flagFor(e.team?.displayName || ''),
        gp:  s.gamesPlayed       ?? 0,
        w:   s.wins              ?? 0,
        d:   s.ties              ?? 0,
        l:   s.losses            ?? 0,
        gf:  s.pointsFor ?? s.goalsFor ?? 0,
        ga:  s.pointsAgainst ?? s.goalsAgainst ?? 0,
        pts: s.points            ?? 0,
      };
    });
    if (parsed.length >= 2) MEXICO_STANDINGS = parsed;
  } catch(_) {}
}

function parseAllGroups(data) {
  try {
    const groups = data.standings?.groups || data.children || [];
    ALL_GROUPS_DATA = groups.map(g => {
      const entries = g.standings?.entries || g.entries || [];
      const teams = entries.map(e => {
        const s = {};
        (e.stats || []).forEach(st => { s[st.name] = st.value; });
        return {
          team: e.team?.displayName || e.team?.name || '?',
          gp:  s.gamesPlayed  ?? 0,
          w:   s.wins         ?? 0,
          d:   s.ties         ?? 0,
          l:   s.losses       ?? 0,
          gf:  s.pointsFor ?? s.goalsFor ?? 0,
          ga:  s.pointsAgainst ?? s.goalsAgainst ?? 0,
          pts: s.points       ?? 0,
        };
      }).sort((a,b) => b.pts - a.pts || (b.gf-b.ga)-(a.gf-a.ga) || b.gf-a.gf);

      return {
        name: g.name || ('Group ' + (g.abbreviation || '?')),
        abbr: g.abbreviation || '',
        teams,
      };
    }).filter(g => g.teams.length > 0);
  } catch(_) {}
}

// ── ALERTS ───────────────────────────────────────────────────────────────────

function showAlert(msg) {
  const el = document.getElementById('alert-bar');
  document.getElementById('alert-msg').innerHTML = msg;
  el.style.display = 'flex';
}
function hideAlert() {
  document.getElementById('alert-bar').style.display = 'none';
}

// ── LANGUAGE SWITCHING ────────────────────────────────────────────────────────

function applyStaticLabels() {
  const set = (id, txt) => { const el = document.getElementById(id); if (el) el.textContent = txt; };
  set('app-title',           T[LANG].appTitle);
  set('label-all-standings', T[LANG].allStandings);
  set('label-col-schedule',  T[LANG].colSchedule);
  set('label-how-to-watch',  ACTIVE_TEAM === 'mexico'
    ? (LANG === 'es' ? '📺 Cómo ver a México — Gratis y de pago' : '📺 How to Watch Mexico — Free & Paid')
    : T[LANG].howToWatch);
  set('label-col-standings', ACTIVE_TEAM === 'mexico'
    ? (LANG === 'es' ? '📊 Tabla del Grupo A — México' : '📊 Group A Standings')
    : T[LANG].colStandings);
  set('label-key-players',   T[LANG].keyPlayers);
  set('label-news',          T[LANG].newsResources);
  const sf = document.getElementById('squad-footer');
  if (sf) {
    if (ACTIVE_TEAM === 'mexico') {
      sf.innerHTML = `Full squad on <a href="https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/teams/mexico/team-news" target="_blank" style="color:#3dd68c">FIFA.com →</a>`;
    } else {
      sf.innerHTML = `${T[LANG].fullSquad} <a href="https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/teams/colombia/team-news" target="_blank" style="color:var(--col-yellow)">FIFA.com →</a>`;
    }
  }
  const sp = document.getElementById('scores-placeholder');
  if (sp) sp.textContent = T[LANG].selectDate;
  document.querySelector('[data-tab="overview"]').textContent = T[LANG].tabTournament;
  const teamTabBtn = document.getElementById('btn-tab-team');
  if (teamTabBtn) teamTabBtn.textContent = ACTIVE_TEAM === 'colombia' ? T[LANG].tabColombia : T[LANG].tabMexico;
  document.querySelector('[data-tab="scores"]').textContent   = T[LANG].tabScores;
  document.getElementById('live-indicator').innerHTML = `<span class="live-dot"></span>${T[LANG].live}`;
  document.getElementById('btn-refresh').textContent = T[LANG].refresh;
}

function setLang(lang) {
  LANG = lang;
  localStorage.setItem('wc_lang', lang);
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.id === 'lang-' + lang));
  applyStaticLabels();
  renderTodayGames();
  renderTomorrowGames();
  renderAllGroupStandings();
  renderHero();
  renderMatches();
  renderStandings();
  renderStreams();
  renderSquad();
  renderNews();
  renderScoresList();
  updateTimestamp();
  // Rebuild date pills with new locale
  const track = document.getElementById('date-track');
  if (track) track.innerHTML = '';
  buildDateTrack();
  scrollActivePill();
}

// ── TAB SWITCHING ─────────────────────────────────────────────────────────────

function switchTab(tab) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  document.querySelector(`.tab-btn[data-tab="${tab}"]`).classList.add('active');
  if (tab === 'scores') initScoresTab();
  if (tab === 'team') { renderHero(); renderMatches(); renderStandings(); renderStreams(); renderSquad(); renderNews(); }
}

// ── TEAM SWITCHING ────────────────────────────────────────────────────────────

function updateFlagStripe() {
  const stripe = document.querySelector('.flag-stripe');
  if (!stripe) return;
  if (ACTIVE_TEAM === 'mexico') {
    stripe.style.background = 'linear-gradient(90deg, #006847 33.3%, #fff 33.3% 66.6%, #ce1126 66.6%)';
  } else {
    stripe.style.background = 'linear-gradient(90deg, #FCD116 33.3%, #003087 33.3% 66.6%, #CE1126 66.6%)';
  }
}

function switchTeam(team) {
  ACTIVE_TEAM = team;
  localStorage.setItem('wc_team', team);
  document.querySelectorAll('.team-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.team === team));
  const tabBtn = document.getElementById('btn-tab-team');
  if (tabBtn) tabBtn.textContent = team === 'colombia' ? T[LANG].tabColombia : T[LANG].tabMexico;
  updateFlagStripe();
  renderHero();
  renderMatches();
  renderStandings();
  renderStreams();
  renderSquad();
  renderNews();
}

// ── SCORES TAB ───────────────────────────────────────────────────────────────

let SCORES_DATE    = todayESPNDate();
let SCORES_GAMES   = [];
let SCORES_EXPANDED = new Set();
let SCORES_LOADED  = false;

function espnSlug(name) {
  return (name || '').toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function espnMatchUrl(eventId, homeTeam, awayTeam) {
  return `https://www.espn.com/soccer/match/_/gameId/${eventId}/${espnSlug(awayTeam)}-${espnSlug(homeTeam)}`;
}

function wcDates() {
  const out = [];
  const d = new Date('2026-06-11T12:00:00Z');
  const end = new Date('2026-07-20T12:00:00Z');
  while (d < end) {
    const y = d.getUTCFullYear(), m = d.getUTCMonth()+1, day = d.getUTCDate();
    out.push(`${y}${String(m).padStart(2,'0')}${String(day).padStart(2,'0')}`);
    d.setUTCDate(d.getUTCDate() + 1);
  }
  return out;
}

function fmtDatePill(ds) {
  const y = +ds.slice(0,4), m = +ds.slice(4,6)-1, d = +ds.slice(6,8);
  const dt = new Date(y, m, d);
  return {
    dow: dt.toLocaleDateString(uiLocale(), { weekday:'short' }),
    md:  dt.toLocaleDateString(uiLocale(), { month:'short', day:'numeric' }),
  };
}

function buildDateTrack() {
  const track = document.getElementById('date-track');
  if (!track || track.children.length) return;
  track.innerHTML = wcDates().map(ds => {
    const { dow, md } = fmtDatePill(ds);
    return `<button class="date-pill${ds === SCORES_DATE ? ' active' : ''}" id="dp-${ds}"
      onclick="selectScoreDate('${ds}')">${'<span class="dp-dow">'}${dow}</span><span class="dp-md">${md}</span></button>`;
  }).join('');
}

function scrollActivePill() {
  requestAnimationFrame(() => {
    const el = document.getElementById(`dp-${SCORES_DATE}`);
    if (el) el.scrollIntoView({ block: 'nearest', inline: 'center' });
  });
}

async function initScoresTab() {
  buildDateTrack();
  scrollActivePill();
  if (!SCORES_LOADED || SCORES_DATE !== todayESPNDate()) {
    await loadScoreDate(SCORES_DATE);
  }
}

async function selectScoreDate(ds) {
  SCORES_DATE = ds;
  SCORES_EXPANDED = new Set();
  document.querySelectorAll('.date-pill').forEach(p => p.classList.remove('active'));
  const pill = document.getElementById(`dp-${ds}`);
  if (pill) { pill.classList.add('active'); pill.scrollIntoView({ block:'nearest', inline:'center' }); }
  document.getElementById('scores-list').innerHTML =
    `<div class="today-empty"><div class="empty-title">${T[LANG].loading}</div></div>`;
  await loadScoreDate(ds);
}

async function loadScoreDate(ds) {
  try {
    const res = await fetch(
      `https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard?dates=${ds}`
    );
    if (!res.ok) { renderScoresList(); return; }
    const data = await res.json();
    SCORES_GAMES = parseScoreGames(data);
    SCORES_LOADED = true;
    const completed = (data.events || []).filter(ev => ev.status?.type?.state === 'post');
    await fetchSummariesFromEvents(completed);
  } catch(_) {}
  renderScoresList();
}

function parseScoreGames(data) {
  return (data.events || []).map(ev => {
    const comp = ev.competitions?.[0];
    if (!comp) return null;
    const home = comp.competitors?.find(c => c.homeAway === 'home');
    const away = comp.competitors?.find(c => c.homeAway === 'away');
    if (!home || !away) return null;
    const hn = home.team?.displayName || home.team?.name || '?';
    const an = away.team?.displayName || away.team?.name || '?';
    if (ev.status?.type?.state === 'post') {
      const key = `${hn.toLowerCase()}|${an.toLowerCase()}`;
      const sc = parseGoalDetails(comp.details, hn.toLowerCase(), an.toLowerCase());
      if (sc.length > 0) {
        if (!MATCH_SUMMARIES[key]) MATCH_SUMMARIES[key] = { scorers:[], statsByTeam:{} };
        if (!MATCH_SUMMARIES[key].scorers.some(s => s.name && s.name !== '?'))
          MATCH_SUMMARIES[key].scorers = sc;
      }
    }
    return {
      id:         ev.id,
      homeTeam:   hn,
      awayTeam:   an,
      homeScore:  home.score,
      awayScore:  away.score,
      state:      ev.status?.type?.state || 'pre',
      detail:     ev.status?.type?.shortDetail || '',
      clock:      ev.status?.displayClock || '',
      kickoffUTC: ev.date,
      note:       comp.notes?.[0]?.headline || '',
    };
  }).filter(Boolean);
}

function toggleScore(gameId) {
  SCORES_EXPANDED.has(gameId) ? SCORES_EXPANDED.delete(gameId) : SCORES_EXPANDED.add(gameId);
  renderScoresList();
}

function renderScoresList() {
  const el = document.getElementById('scores-list');
  if (!el) return;
  if (SCORES_GAMES.length === 0) {
    el.innerHTML = `<div class="today-empty"><div class="empty-title">${T[LANG].noGamesDate}</div></div>`;
    return;
  }
  el.innerHTML = `<div class="scores-list">` + SCORES_GAMES.map(g => {
    const isLive  = g.state === 'in';
    const isFinal = g.state === 'post';
    const isPre   = g.state === 'pre';
    const open    = SCORES_EXPANDED.has(g.id);

    const badge = isLive  ? `<span class="status-chip live">🔴 ${g.clock || g.detail || T[LANG].live}</span>`
                : isFinal ? `<span class="status-chip final">${T[LANG].ft}</span>`
                :           `<span class="status-chip sched">${fmtTimeET(g.kickoffUTC)}</span>`;

    const showScore = isLive || isFinal;
    const hs  = showScore ? (g.homeScore ?? '–') : '';
    const as_ = showScore ? (g.awayScore ?? '–') : '';

    let detail = '';
    if (open) {
      const espnUrl = espnMatchUrl(g.id, g.homeTeam, g.awayTeam);
      const label   = isLive ? T[LANG].liveStats : isPre ? T[LANG].matchPreview : T[LANG].fullStats;
      const recap   = isFinal ? matchRecapHtml(g.homeTeam, g.awayTeam, summaryForGame(g.homeTeam, g.awayTeam)) : '';
      detail = `<div class="score-detail">
        ${recap}
        <a href="${espnUrl}" target="_blank" class="espn-link" onclick="event.stopPropagation()">
          📊 ${label} ${T[LANG].espnOn}
        </a>
      </div>`;
    }

    return `<div class="score-row" onclick="toggleScore('${g.id}')">
      <div class="score-header">
        <div class="score-teams">
          <div class="score-team">
            <span class="t-flag">${flagFor(g.homeTeam)}</span>
            <span>${g.homeTeam}</span>
            ${hs !== '' ? `<span class="score-num">${hs}</span>` : ''}
          </div>
          <div class="score-team">
            <span class="t-flag">${flagFor(g.awayTeam)}</span>
            <span>${g.awayTeam}</span>
            ${as_ !== '' ? `<span class="score-num">${as_}</span>` : ''}
          </div>
        </div>
        <div class="score-right">
          ${badge}
          <span class="score-chevron">${open ? '▲' : '▼'}</span>
        </div>
      </div>
      ${detail}
    </div>`;
  }).join('') + `</div>`;
}

// ── RENDER: TODAY'S GAMES ─────────────────────────────────────────────────────

function renderTodayGames() {
  const el = document.getElementById('today-games');
  if (!el) return;

  const todayLabel = document.getElementById('today-label');
  if (todayLabel) {
    const dateStr = new Date().toLocaleDateString(uiLocale(), {
      timeZone: uiTZ(), weekday:'long', month:'long', day:'numeric'
    });
    todayLabel.textContent = T[LANG].todayLabel(dateStr);
  }

  if (TODAY_GAMES.length === 0) {
    el.innerHTML = `
      <div class="today-empty">
        <div class="empty-title">${T[LANG].noGamesToday}</div>
        <div style="margin-top:.4rem;font-size:.8rem">${T[LANG].noTodaySub}</div>
      </div>`;
    return;
  }

  el.innerHTML = `<div class="matches-grid">` + TODAY_GAMES.map(g => {
    const isLive  = g.state === 'in';
    const isFinal = g.state === 'post';
    const isPre   = g.state === 'pre';

    let badge, hs, as_;
    if (isLive) {
      badge = `<span class="status-chip live">🔴 ${g.clock || g.detail || T[LANG].live}</span>`;
      hs = g.homeScore ?? '0'; as_ = g.awayScore ?? '0';
    } else if (isFinal) {
      badge = `<span class="status-chip final">${T[LANG].ft}</span>`;
      hs = g.homeScore ?? '–'; as_ = g.awayScore ?? '–';
    } else {
      badge = `<span class="status-chip sched">${fmtTimeET(g.kickoffUTC)}</span>`;
      hs = '–'; as_ = '–';
    }

    const noteText = g.note || T[LANG].groupStage;
    const tvText   = g.tv   ? `<span class="meta-tag">📺 ${g.tv}</span>` : '';
    const cityText = (g.city || g.venue) ? `<span class="meta-tag">📍 ${g.city || g.venue}</span>` : '';
    const recap    = isFinal ? matchRecapHtml(g.homeTeam, g.awayTeam, summaryForGame(g.homeTeam, g.awayTeam)) : '';

    return `
      <div class="match-card ${isLive ? 'is-live' : isPre ? 'is-next' : ''}">
        <div class="match-top">
          <span>${noteText}</span>
          ${badge}
        </div>
        <div class="match-body">
          <div class="match-teams">
            <div class="t-block home">
              <span class="t-flag">${flagFor(g.homeTeam)}</span>
              <span class="t-name ${g.homeTeam === 'Colombia' ? 'col' : ''}">${g.homeTeam}</span>
            </div>
            <div class="score-pair">
              <span class="snum">${hs}</span>
              <span class="ssep">:</span>
              <span class="snum">${as_}</span>
            </div>
            <div class="t-block away">
              <span class="t-flag">${flagFor(g.awayTeam)}</span>
              <span class="t-name ${g.awayTeam === 'Colombia' ? 'col' : ''}">${g.awayTeam}</span>
            </div>
          </div>
          <div class="match-meta">
            ${cityText}
            ${tvText}
          </div>
          ${isFinal ? recap : `<div class="match-streams">
            <a href="https://www.telemundo.com/deportes" target="_blank" class="chip tele" title="Telemundo Spanish broadcast — free OTA">
              📺 Telemundo <span class="free-tag">FREE</span>
            </a>
            <a href="https://www.peacocktv.com" class="chip cable" title="Stream Telemundo online via Peacock — opens app if installed">
              ▶ Peacock
            </a>
          </div>`}
        </div>
      </div>`;
  }).join('') + `</div>`;
}

// ── RENDER: TOMORROW'S GAMES ─────────────────────────────────────────────────

function renderTomorrowGames() {
  const el = document.getElementById('tomorrow-games');
  if (!el) return;

  const tomorrowLabel = document.getElementById('tomorrow-label');
  if (tomorrowLabel) {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    const dateStr = d.toLocaleDateString(uiLocale(), {
      timeZone: uiTZ(), weekday:'long', month:'long', day:'numeric'
    });
    tomorrowLabel.textContent = T[LANG].tomorrowLabel(dateStr);
  }

  if (TOMORROW_GAMES.length === 0) {
    el.innerHTML = `
      <div class="today-empty">
        <div class="empty-title">${T[LANG].noGamesTomorrow}</div>
        <div style="margin-top:.4rem;font-size:.8rem">${T[LANG].noTomorrowSub}</div>
      </div>`;
    return;
  }

  el.innerHTML = `<div class="matches-grid">` + TOMORROW_GAMES.map(g => {
    const isLive  = g.state === 'in';
    const isFinal = g.state === 'post';

    let badge, hs, as_;
    if (isLive) {
      badge = `<span class="status-chip live">🔴 ${g.clock || g.detail || T[LANG].live}</span>`;
      hs = g.homeScore ?? '0'; as_ = g.awayScore ?? '0';
    } else if (isFinal) {
      badge = `<span class="status-chip final">${T[LANG].ft}</span>`;
      hs = g.homeScore ?? '–'; as_ = g.awayScore ?? '–';
    } else {
      badge = `<span class="status-chip sched">${fmtTimeET(g.kickoffUTC)}</span>`;
      hs = '–'; as_ = '–';
    }

    const noteText = g.note || T[LANG].groupStage;
    const tvText   = g.tv   ? `<span class="meta-tag">📺 ${g.tv}</span>` : '';
    const cityText = (g.city || g.venue) ? `<span class="meta-tag">📍 ${g.city || g.venue}</span>` : '';
    const recap    = isFinal ? matchRecapHtml(g.homeTeam, g.awayTeam, summaryForGame(g.homeTeam, g.awayTeam)) : '';

    return `
      <div class="match-card ${isLive ? 'is-live' : 'is-next'}">
        <div class="match-top">
          <span>${noteText}</span>
          ${badge}
        </div>
        <div class="match-body">
          <div class="match-teams">
            <div class="t-block home">
              <span class="t-flag">${flagFor(g.homeTeam)}</span>
              <span class="t-name ${g.homeTeam === 'Colombia' ? 'col' : ''}">${g.homeTeam}</span>
            </div>
            <div class="score-pair">
              <span class="snum">${hs}</span>
              <span class="ssep">:</span>
              <span class="snum">${as_}</span>
            </div>
            <div class="t-block away">
              <span class="t-flag">${flagFor(g.awayTeam)}</span>
              <span class="t-name ${g.awayTeam === 'Colombia' ? 'col' : ''}">${g.awayTeam}</span>
            </div>
          </div>
          <div class="match-meta">
            ${cityText}
            ${tvText}
          </div>
          ${isFinal ? recap : `<div class="match-streams">
            <a href="https://www.telemundo.com/deportes" target="_blank" class="chip tele" title="Telemundo Spanish broadcast — free OTA">
              📺 Telemundo <span class="free-tag">FREE</span>
            </a>
            <a href="https://www.peacocktv.com" class="chip cable" title="Stream Telemundo online via Peacock — opens app if installed">
              ▶ Peacock
            </a>
          </div>`}
        </div>
      </div>`;
  }).join('') + `</div>`;
}

// ── RENDER: ALL GROUP STANDINGS ───────────────────────────────────────────────

function renderAllGroupStandings() {
  const el = document.getElementById('all-groups');
  if (!el) return;

  if (ALL_GROUPS_DATA.length === 0) {
    el.innerHTML = `
      <div class="today-empty">
        <div class="empty-title">${T[LANG].noStandings}</div>
        <div style="margin-top:.4rem;font-size:.8rem">${T[LANG].noStandingsSub}</div>
      </div>`;
    return;
  }

  el.innerHTML = `<div class="groups-grid">` + ALL_GROUPS_DATA.map(g => `
    <div class="card">
      <div class="group-name">${g.name}</div>
      <table class="standings-tbl">
        <thead>
          <tr>
            <th style="width:20px">#</th>
            <th>${T[LANG].stTeam}</th>
            <th title="${T[LANG].stPtsTitle}">${T[LANG].stPts}</th>
            <th title="${T[LANG].stGDTitle}">${T[LANG].stGD}</th>
            <th title="${T[LANG].stGPTitle}">${T[LANG].stGP}</th>
          </tr>
        </thead>
        <tbody>
          ${g.teams.map((t, i) => {
            const gd = t.gf - t.ga;
            const isCol = t.team === 'Colombia';
            const q = i < 2;
            return `<tr class="${isCol ? 'col-row' : ''}">
              <td><span class="pos-num ${q ? 'q' : ''}">${i+1}</span></td>
              <td><div class="t-cell">${flagFor(t.team)} ${t.team}</div></td>
              <td style="font-weight:700">${t.pts}</td>
              <td>${gd > 0 ? '+' : ''}${gd}</td>
              <td>${t.gp}</td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>
  `).join('') + `</div>`;
}

// ── RENDER: TEAM TAB ─────────────────────────────────────────────────────────

function renderHero() {
  const matches = ACTIVE_TEAM === 'mexico' ? MEXICO_MATCHES : MATCHES;
  const accentColor = ACTIVE_TEAM === 'mexico' ? '#3dd68c' : 'var(--col-yellow)';
  const heroBg  = ACTIVE_TEAM === 'mexico'
    ? 'linear-gradient(135deg, var(--surface) 0%, #0a200a 100%)'
    : 'linear-gradient(135deg, var(--surface) 0%, #0a1a3a 100%)';
  const liveBg  = ACTIVE_TEAM === 'mexico'
    ? 'linear-gradient(135deg, var(--surface) 0%, #0a2a0a 100%)'
    : 'linear-gradient(135deg, var(--surface) 0%, #2a0808 100%)';
  const borderColor = ACTIVE_TEAM === 'mexico' ? '#006847' : 'var(--col-blue)';

  const liveM = matches.find(m => matchState(m.kickoffUTC) === 'live');
  const nextM  = matches.find(m => matchState(m.kickoffUTC) === 'upcoming');
  const target = liveM || nextM;

  const teamName = ACTIVE_TEAM === 'mexico' ? 'Mexico' : 'Colombia';

  if (!target) {
    document.getElementById('hero').innerHTML = `
      <div class="hero" style="justify-content:center;text-align:center;grid-template-columns:1fr;border-color:${borderColor};background:${heroBg}">
        <div>
          <div class="hero-eyebrow" style="color:${accentColor}">${T[LANG].groupComplete}</div>
          <div class="hero-title">${teamName} advance to the knockout rounds!</div>
          <div class="hero-detail" style="margin-top:.5rem">${T[LANG].checkFIFA}</div>
        </div>
      </div>`;
    return;
  }

  const sc    = liveScoreFor(target);
  const state = matchState(target.kickoffUTC);
  const cd    = countdown(target.kickoffUTC);
  const freeStreams = target.streams.filter(s => s.type === 'free');

  if (state === 'live' && sc) {
    document.getElementById('hero').innerHTML = `
      <div class="hero live-mode" style="background:${liveBg}">
        <div>
          <div class="hero-eyebrow" style="color:${accentColor}">${T[LANG].liveNow(target.matchday)}</div>
          <div class="hero-title">${target.home.flag} ${target.home.name} &nbsp;vs&nbsp; ${target.away.flag} ${target.away.name}</div>
          <div class="hero-detail" style="margin-top:.3rem">📍 ${target.venue}, ${target.city}</div>
          <div class="hero-streams">
            ${freeStreams.map(s => `
              <a href="${s.url}" target="_blank" class="chip free">▶ ${s.name} <span class="free-tag">FREE</span></a>
            `).join('')}
          </div>
        </div>
        <div style="text-align:center">
          <div class="score-big" style="color:${accentColor}">${sc.homeScore} – ${sc.awayScore}</div>
          <div class="score-teams-label">${target.home.name} · ${target.away.name}</div>
          <div><span class="live-badge">${sc.clock || sc.detail || T[LANG].live.toUpperCase()}</span></div>
        </div>
      </div>`;
  } else {
    document.getElementById('hero').innerHTML = `
      <div class="hero" style="border-color:${borderColor};background:${heroBg}">
        <div>
          <div class="hero-eyebrow" style="color:${accentColor}">${T[LANG].nextMatch(target.matchday)}</div>
          <div class="hero-title">${target.home.flag} ${target.home.name} <span style="color:var(--muted);font-weight:400">vs</span> ${target.away.flag} ${target.away.name}</div>
          <div class="hero-detail" style="margin-top:.3rem">🕐 ${fmtET(target.kickoffUTC)}</div>
          <div class="hero-detail">📍 ${target.venue}, ${target.city} &nbsp;·&nbsp; 📺 ${target.tv}</div>
          <div class="hero-streams">
            ${freeStreams.map(s => `
              <a href="${s.url}" target="_blank" class="chip free">▶ ${s.name} <span class="free-tag">FREE</span></a>
            `).join('')}
          </div>
        </div>
        ${cd ? `
        <div class="countdown">
          <div class="countdown-label">${T[LANG].kickoffIn}</div>
          <div class="cd-grid">
            <div class="cd-unit"><div class="cd-num" id="cd-d" style="color:${accentColor}">${pad(cd.d)}</div><div class="cd-lbl">${T[LANG].days}</div></div>
            <div class="cd-unit"><div class="cd-num" id="cd-h" style="color:${accentColor}">${pad(cd.h)}</div><div class="cd-lbl">${T[LANG].hrs}</div></div>
            <div class="cd-unit"><div class="cd-num" id="cd-m" style="color:${accentColor}">${pad(cd.m)}</div><div class="cd-lbl">${T[LANG].min}</div></div>
            <div class="cd-unit"><div class="cd-num" id="cd-s" style="color:${accentColor}">${pad(cd.s)}</div><div class="cd-lbl">${T[LANG].sec}</div></div>
          </div>
        </div>` : ''}
      </div>`;
  }
}

function renderMatches() {
  const matches = ACTIVE_TEAM === 'mexico' ? MEXICO_MATCHES : MATCHES;
  const teamName = ACTIVE_TEAM === 'mexico' ? 'Mexico' : 'Colombia';
  const hlClass  = ACTIVE_TEAM === 'mexico' ? 'mex' : 'col';
  const matchdayLabel = ACTIVE_TEAM === 'mexico'
    ? (n => LANG === 'es' ? `Jornada ${n} · Grupo A` : `Matchday ${n} · Group A`)
    : T[LANG].matchdayGroup;
  document.getElementById('matches').innerHTML = matches.map(m => {
    const state = matchState(m.kickoffUTC);
    const sc    = liveScoreFor(m);
    const homeCol = m.home.name === teamName;
    const awayCol = m.away.name === teamName;

    let badge = '';
    let hs = '–', as_ = '–';

    if (state === 'live') {
      badge = `<span class="status-chip live">🔴 ${sc?.clock || T[LANG].live}</span>`;
      hs = sc?.homeScore ?? '0'; as_ = sc?.awayScore ?? '0';
    } else if (state === 'final') {
      badge = `<span class="status-chip final">${T[LANG].ft}</span>`;
      hs = sc?.homeScore ?? '–'; as_ = sc?.awayScore ?? '–';
    } else {
      badge = `<span class="status-chip sched">${fmtDateShort(m.kickoffUTC)}</span>`;
    }

    return `
      <div class="match-card ${state === 'live' ? 'is-live' : state === 'upcoming' ? 'is-next' : ''}">
        <div class="match-top">
          <span>${matchdayLabel(m.matchday)}</span>
          ${badge}
        </div>
        <div class="match-body">
          <div class="match-teams">
            <div class="t-block home">
              <span class="t-flag">${m.home.flag}</span>
              <span class="t-name ${homeCol ? hlClass : ''}">${m.home.name}</span>
            </div>
            <div class="score-pair">
              <span class="snum">${hs}</span>
              <span class="ssep">:</span>
              <span class="snum">${as_}</span>
            </div>
            <div class="t-block away">
              <span class="t-flag">${m.away.flag}</span>
              <span class="t-name ${awayCol ? hlClass : ''}">${m.away.name}</span>
            </div>
          </div>
          <div class="match-meta">
            <span class="meta-tag">🕐 ${fmtET(m.kickoffUTC)}</span>
            <span class="meta-tag">📍 ${m.venue}</span>
            <span class="meta-tag">📺 ${m.tv}</span>
          </div>
          ${state === 'final' ? matchRecapHtml(m.home.name, m.away.name, summaryForGame(m.home.name, m.away.name)) : ''}
        </div>
      </div>`;
  }).join('');
}

function renderStandings() {
  const standings = ACTIVE_TEAM === 'mexico' ? MEXICO_STANDINGS : STANDINGS;
  const teamName  = ACTIVE_TEAM === 'mexico' ? 'Mexico' : 'Colombia';
  const rowClass  = ACTIVE_TEAM === 'mexico' ? 'mex-row' : 'col-row';
  const sorted = [...standings].sort((a,b) =>
    b.pts - a.pts || (b.gf-b.ga)-(a.gf-a.ga) || b.gf-a.gf
  );
  document.getElementById('standings').innerHTML = `
    <thead>
      <tr>
        <th style="width:22px">#</th>
        <th>${T[LANG].stTeam}</th>
        <th>${T[LANG].stGP}</th><th>${T[LANG].stW}</th><th>${T[LANG].stD}</th><th>${T[LANG].stL}</th><th>${T[LANG].stGF}</th><th>${T[LANG].stGA}</th><th>${T[LANG].stGD}</th><th>${T[LANG].stPts}</th>
      </tr>
    </thead>
    <tbody>
      ${sorted.map((t,i) => {
        const gd = t.gf - t.ga;
        const isHL = t.team === teamName;
        const q = i < 2;
        return `<tr class="${isHL ? rowClass : ''}">
          <td><span class="pos-num ${q ? 'q' : ''}">${i+1}</span></td>
          <td><div class="t-cell">${t.flag} ${t.team}</div></td>
          <td>${t.gp}</td><td>${t.w}</td><td>${t.d}</td><td>${t.l}</td>
          <td>${t.gf}</td><td>${t.ga}</td>
          <td>${gd > 0 ? '+' : ''}${gd}</td>
          <td style="font-weight:700">${t.pts}</td>
        </tr>`;
      }).join('')}
    </tbody>
    <tfoot>
      <tr><td colspan="10" style="font-size:.62rem;color:var(--muted);padding-top:.4rem">
        <span style="color:var(--green)">■</span> ${T[LANG].qualifyNote}
      </td></tr>
    </tfoot>`;
}

function renderStreams() {
  const matches = ACTIVE_TEAM === 'mexico' ? MEXICO_MATCHES : MATCHES;
  document.getElementById('streams').innerHTML = matches.map((m, i) => {
    const state   = matchState(m.kickoffUTC);
    const sc      = liveScoreFor(m);
    const isFinal = state === 'final';

    if (isFinal) {
      const scoreStr  = sc ? `${sc.homeScore} – ${sc.awayScore}` : '';
      const summary   = summaryForGame(m.home.name, m.away.name);
      const recap     = matchRecapHtml(m.home.name, m.away.name, summary);
      return `
        ${i > 0 ? '<hr class="stream-divider">' : ''}
        <div class="stream-row is-final">
          <div class="stream-recap-header">
            <div class="stream-match-name">${m.home.flag} ${m.home.name} vs ${m.away.flag} ${m.away.name}</div>
            ${scoreStr ? `<span class="stream-final-score">${scoreStr}</span>` : ''}
            <span class="status-chip final" style="font-size:.62rem">FT</span>
          </div>
          ${recap || `<div style="font-size:.75rem;color:var(--muted)">${T[LANG].matchStatsLocal}</div>`}
        </div>`;
    }

    return `
      ${i > 0 ? '<hr class="stream-divider">' : ''}
      <div class="stream-row">
        <div>
          <div class="stream-match-name">${m.home.flag} ${m.home.name} vs ${m.away.flag} ${m.away.name}</div>
          <div class="stream-match-time">${fmtET(m.kickoffUTC)} · ${m.tv}</div>
        </div>
        <div class="chips">
          ${m.streams.map(s => `
            <a href="${s.url}" ${s.name !== 'Peacock' ? 'target="_blank"' : ''} class="chip ${s.type}" title="${s.note}${s.name === 'Peacock' ? ' — opens app if installed' : ''}">
              ▶ ${s.name}${s.type === 'free' ? ' <span class="free-tag">FREE</span>' : ''}
            </a>`).join('')}
        </div>
      </div>`;
  }).join('');
}

function renderSquad() {
  const players = ACTIVE_TEAM === 'mexico' ? MEXICO_PLAYERS : PLAYERS;
  document.getElementById('squad').innerHTML = players.map(p => `
    <div class="player">
      <div class="p-pos">${p.pos}</div>
      <div class="p-name">${p.name}</div>
      <div class="p-club">${p.club}</div>
    </div>`).join('');
  const sf = document.getElementById('squad-footer');
  if (sf) {
    if (ACTIVE_TEAM === 'mexico') {
      sf.innerHTML = `Full squad on <a href="https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/teams/mexico/team-news" target="_blank" style="color:#3dd68c">FIFA.com →</a>`;
    } else {
      sf.innerHTML = `${T[LANG].fullSquad} <a href="https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/teams/colombia/team-news" target="_blank" style="color:var(--col-yellow)">FIFA.com →</a>`;
    }
  }
}

function renderNews() {
  const news = ACTIVE_TEAM === 'mexico' ? MEXICO_NEWS : NEWS;
  document.getElementById('news').innerHTML = news.map(n => `
    <a href="${n.url}" target="_blank" class="news-a">
      <span class="news-icon">${n.icon}</span>
      <div>
        <div class="news-src">${n.src}</div>
        <div class="news-ttl">${n.title}</div>
      </div>
    </a>`).join('');
}

function updateTimestamp() {
  document.getElementById('last-updated').textContent =
    T[LANG].updated + ' ' + new Date().toLocaleTimeString(uiLocale(), { hour:'numeric', minute:'2-digit', second:'2-digit' });
}

// ── COUNTDOWN TICK ───────────────────────────────────────────────────────────

function tickCountdown() {
  const matches = ACTIVE_TEAM === 'mexico' ? MEXICO_MATCHES : MATCHES;
  const m = matches.find(m => matchState(m.kickoffUTC) === 'upcoming');
  if (!m) return;
  const cd = countdown(m.kickoffUTC);
  if (!cd) return;
  const d  = document.getElementById('cd-d');
  const h  = document.getElementById('cd-h');
  const mn = document.getElementById('cd-m');
  const s  = document.getElementById('cd-s');
  if (d)  d.textContent  = pad(cd.d);
  if (h)  h.textContent  = pad(cd.h);
  if (mn) mn.textContent = pad(cd.m);
  if (s)  s.textContent  = pad(cd.s);
}

// ── MAIN ─────────────────────────────────────────────────────────────────────

async function refresh() {
  await fetchESPN();
  renderTodayGames();
  renderTomorrowGames();
  renderAllGroupStandings();
  renderHero();
  renderMatches();
  renderStandings();
  renderStreams();
  updateTimestamp();
}

// Apply saved language preference
if (LANG !== 'en') {
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.id === 'lang-' + LANG));
}

// Apply team (from URL hint or saved preference)
if (ACTIVE_TEAM !== 'colombia') {
  document.querySelectorAll('.team-btn').forEach(b => b.classList.toggle('active', b.dataset.team === ACTIVE_TEAM));
}
updateFlagStripe();

// Render static sections (team-aware)
renderStreams();
renderSquad();
renderNews();

// Initial render with hardcoded data, then fetch live
renderHero();
renderMatches();
renderStandings();
renderTodayGames();
renderTomorrowGames();
updateTimestamp();
applyStaticLabels();
refresh();

// If a country subpage set a default tab, switch to it now
if (window.__defaultTab) switchTab(window.__defaultTab);

// Countdown: every second
setInterval(tickCountdown, 1000);

// Live refresh: every 60s
setInterval(refresh, 60000);

// State transitions: every 30s
setInterval(() => { renderHero(); renderMatches(); renderTodayGames(); renderTomorrowGames(); }, 30000);
