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
    ovGames:         '⚽ Games',
    ovBracket:       '🏆 Bracket',
    bracketGroupStage: 'Group Stage in Progress',
    bracketSoon:     'Knockout bracket will appear here once the group stage ends.',
    roundLabels: { r32:'Round of 32', r16:'Round of 16', qf:'Quarterfinals', sf:'Semifinals', '3rd':'3rd Place', final:'Final' },
    projTitle:       'Projected Round of 32',
    projTitleFull:   'Projected Bracket',
    projNote:        'Fills in live as results come in',
    projAdvance:     'Top 2 of each group + 8 best 3rd-place teams advance',
    posThird:        '3rd',
    tbd:             'TBD',
    koWinner:        'Winner',
    koLoser:         'Loser',
    live:            'Live',
    refresh:         '↻ Refresh',
    updated:         'Updated',
    tz:              'ET',
    todayLabel:      (d) => `⚽ Games — ${d}`,
    tomorrowLabel:   (d) => `⚽ Tomorrow — ${d}`,
    allStandings:    '📊 All Group Standings',
    colSchedule:     '📅 Match History',
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
    koNext:          (round) => `⏭ Next Match · ${round}`,
    koLive:          (round) => `🔴 LIVE NOW · ${round}`,
    groupComplete:   'Group Stage Complete',
    stageComplete:   (round) => `${round} Complete`,
    colAdvance:      'Colombia advance to the knockout rounds!',
    mexAdvance:      'Mexico advance to the knockout rounds!',
    checkFIFA:       'Check FIFA.com for Round of 32 schedule.',
    roundAdvance:    (team, round) => `${team} advance to the ${round}!`,
    knockoutTBD:     'Opponent to be determined',
    eliminatedTitle: (team) => `${team} Have Been Eliminated`,
    eliminatedSub:   'It was a tough game — unfortunately the run ends here.',
    championTitle:   (team) => `${team} Are World Cup Champions! 🏆`,
    matchdayGroup:   (n) => `Matchday ${n} · Group K`,
    groupStage:      'Group Stage',
    stTeam:          'Team',  stGP:'GP', stW:'W', stD:'D', stL:'L',
    stGF:'GF', stGA:'GA', stGD:'GD', stPts:'Pts',
    stPtsTitle:      'Points', stGDTitle:'Goal Difference', stGPTitle:'Games Played',
    qualifyNote:     'Top 2 qualify · Best 3rd-place teams also advance',
    fullSquad:       'Full 26-man squad on',
    matchStatsLocal: 'Match stats available via local server',
    wcGoals:         (n) => `${n} goal${n === 1 ? '' : 's'} this World Cup`,
  },
  es: {
    appTitle:        'Copa Mundial 2026',
    tabTournament:   '🌍 Torneo',
    tabColombia:     '🇨🇴 Colombia',
    tabMexico:       '🇲🇽 México',
    tabScores:       '📅 Resultados',
    ovGames:         '⚽ Partidos',
    ovBracket:       '🏆 Cuadro',
    bracketGroupStage: 'Fase de grupos en curso',
    bracketSoon:     'El cuadro eliminatorio aparecerá aquí al terminar la fase de grupos.',
    roundLabels: { r32:'Ronda de 32', r16:'Ronda de 16', qf:'Cuartos de Final', sf:'Semifinales', '3rd':'3er Puesto', final:'Final' },
    projTitle:       'Ronda de 32 Proyectada',
    projTitleFull:   'Cuadro Proyectado',
    projNote:        'Se completa en vivo con los resultados',
    projAdvance:     'Los 2 mejores de cada grupo + los 8 mejores terceros avanzan',
    posThird:        '3º',
    tbd:             'Por definir',
    koWinner:        'Ganador',
    koLoser:         'Perdedor',
    live:            'En vivo',
    refresh:         '↻ Actualizar',
    updated:         'Actualizado',
    tz:              'COT',
    todayLabel:      (d) => `⚽ Partidos de hoy — ${d}`,
    tomorrowLabel:   (d) => `⚽ Mañana — ${d}`,
    allStandings:    '📊 Tabla de posiciones',
    colSchedule:     '📅 Historial de Partidos',
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
    koNext:          (round) => `⏭ Próximo Partido · ${round}`,
    koLive:          (round) => `🔴 EN VIVO · ${round}`,
    groupComplete:   'Fase de grupos completada',
    stageComplete:   (round) => `${round} Completada`,
    colAdvance:      '¡Colombia avanza a la ronda eliminatoria!',
    mexAdvance:      '¡México avanza a la ronda eliminatoria!',
    checkFIFA:       'Consulta FIFA.com para el calendario de eliminatorias.',
    roundAdvance:    (team, round) => `¡${team} avanza a ${round}!`,
    knockoutTBD:     'Rival por definir',
    eliminatedTitle: (team) => `${team} Ha Sido Eliminado`,
    eliminatedSub:   'Fue un partido difícil — lastimosamente el camino termina aquí.',
    championTitle:   (team) => `¡${team} Es Campeón del Mundo! 🏆`,
    matchdayGroup:   (n) => `Jornada ${n} · Grupo K`,
    groupStage:      'Fase de grupos',
    stTeam:          'Equipo', stGP:'PJ', stW:'G', stD:'E', stL:'P',
    stGF:'GF', stGA:'GC', stGD:'DG', stPts:'Pts',
    stPtsTitle:      'Puntos', stGDTitle:'Diferencia de goles', stGPTitle:'Partidos jugados',
    qualifyNote:     'Los 2 mejores clasifican · Los mejores 3eros también avanzan',
    fullSquad:       'Plantilla completa en',
    matchStatsLocal: 'Estadísticas disponibles en servidor local',
    wcGoals:         (n) => `${n} gol${n === 1 ? '' : 'es'} en este Mundial`,
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
  'dr congo': '🇨🇩', 'democratic republic of congo': '🇨🇩', 'congo dr': '🇨🇩',
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
    away: { name: 'Congo DR',  flag: '🇨🇩', espn: 'congo' },
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
  { team:'Congo DR',   flag:'🇨🇩', gp:0,w:0,d:0,l:0,gf:0,ga:0,pts:0 },
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
let EVENT_BY_PAIR = {};   // order-independent team-pair → schedule/score/state
let TODAY_GAMES = [];
let TOMORROW_GAMES = [];
let ALL_GROUPS_DATA = [];
let MATCH_SUMMARIES = {}; // key: "homeTeamLower|awayTeamLower"
let BRACKET_GAMES = {};   // key: round id → array of games

const ROUND_ORDER = ['r32', 'r16', 'qf', 'sf', '3rd', 'final'];

// ── KNOCKOUT BRACKET TREE ─────────────────────────────────────────────────────
// Official FIFA 2026 knockout structure, by match number (73–104). Round of 32
// slots are group positions ('1X' winner, '2X' runner-up, '3rd' = one of the
// eight best third-placed teams). Later rounds reference the winner {w:n} or
// loser {l:n} of an earlier match, so the bracket fills through every round.
const KO_TREE = [
  // Round of 32 (73–88)
  { m: 73, round: 'r32', home: '2A', away: '2B' },
  { m: 74, round: 'r32', home: '1E', away: '3rd' },
  { m: 75, round: 'r32', home: '1F', away: '2C' },
  { m: 76, round: 'r32', home: '1C', away: '2F' },
  { m: 77, round: 'r32', home: '1I', away: '3rd' },
  { m: 78, round: 'r32', home: '2E', away: '2I' },
  { m: 79, round: 'r32', home: '1A', away: '3rd' },
  { m: 80, round: 'r32', home: '1L', away: '3rd' },
  { m: 81, round: 'r32', home: '1D', away: '3rd' },
  { m: 82, round: 'r32', home: '1G', away: '3rd' },
  { m: 83, round: 'r32', home: '2K', away: '2L' },
  { m: 84, round: 'r32', home: '1H', away: '2J' },
  { m: 85, round: 'r32', home: '1B', away: '3rd' },
  { m: 86, round: 'r32', home: '1J', away: '2H' },
  { m: 87, round: 'r32', home: '1K', away: '3rd' },
  { m: 88, round: 'r32', home: '2D', away: '2G' },
  // Round of 16 (89–96)
  { m: 89, round: 'r16', home: { w: 74 }, away: { w: 77 } },
  { m: 90, round: 'r16', home: { w: 73 }, away: { w: 75 } },
  { m: 91, round: 'r16', home: { w: 76 }, away: { w: 78 } },
  { m: 92, round: 'r16', home: { w: 79 }, away: { w: 80 } },
  { m: 93, round: 'r16', home: { w: 83 }, away: { w: 84 } },
  { m: 94, round: 'r16', home: { w: 81 }, away: { w: 82 } },
  { m: 95, round: 'r16', home: { w: 86 }, away: { w: 88 } },
  { m: 96, round: 'r16', home: { w: 85 }, away: { w: 87 } },
  // Quarterfinals (97–100)
  { m: 97,  round: 'qf', home: { w: 89 }, away: { w: 90 } },
  { m: 98,  round: 'qf', home: { w: 93 }, away: { w: 94 } },
  { m: 99,  round: 'qf', home: { w: 91 }, away: { w: 92 } },
  { m: 100, round: 'qf', home: { w: 95 }, away: { w: 96 } },
  // Semifinals (101–102)
  { m: 101, round: 'sf', home: { w: 97 }, away: { w: 98 } },
  { m: 102, round: 'sf', home: { w: 99 }, away: { w: 100 } },
  // Third-place match (103) and Final (104)
  { m: 103, round: '3rd',   home: { l: 101 }, away: { l: 102 } },
  { m: 104, round: 'final', home: { w: 101 }, away: { w: 102 } },
];

function normTeam(n) { return (n || '').toLowerCase().trim(); }
function pairKey(a, b) { return [normTeam(a), normTeam(b)].sort().join('~'); }

function groupLetter(g) {
  return g.letter || parseGroupLetter(g) || (g.abbr || '').trim().toUpperCase();
}
function findGroup(letter) {
  return ALL_GROUPS_DATA.find(g => groupLetter(g) === letter);
}
// teams in ALL_GROUPS_DATA are pre-sorted by pts / GD / GF in parseAllGroups
function teamAtPos(pos) {
  const rank = +pos[0], letter = pos.slice(1);
  const g = findGroup(letter);
  if (!g || !g.teams || g.teams.length < rank) return null;
  return g.teams[rank - 1];
}
// A group winner's real Round of 32 opponent, read from the schedule: it's the
// earliest fixture involving the winner against a team from a *different* group
// (its three group-stage opponents are all group-mates). This yields the
// official third-place pairing — and its date/score — without guessing FIFA's
// combination table. Returns the opponent's display name, or null if unknown.
function realKnockoutOpponent(winnerName, groupMates) {
  const w = normTeam(winnerName);
  let best = null;
  for (const ev of Object.values(EVENT_BY_PAIR)) {
    if (!ev.teams) continue;
    const opp = ev.teams[0] === w ? ev.teams[1] : ev.teams[1] === w ? ev.teams[0] : null;
    if (!opp || groupMates.has(opp)) continue;
    if (!best || new Date(ev.kickoffUTC) < new Date(best.kickoffUTC)) {
      best = { kickoffUTC: ev.kickoffUTC, name: ev.display?.[opp] || opp };
    }
  }
  return best ? best.name : null;
}

// the eight best third-placed teams, ranked by FIFA tiebreakers
function bestThirds() {
  const thirds = ALL_GROUPS_DATA
    .filter(g => g.teams && g.teams.length >= 3)
    .map(g => ({ letter: groupLetter(g), used: false, ...g.teams[2] }));
  thirds.sort((a, b) =>
    b.pts - a.pts || (b.gf - b.ga) - (a.gf - a.ga) || b.gf - a.gf ||
    String(a.team).localeCompare(String(b.team)));
  return thirds.slice(0, 8);
}

// attach the real ESPN fixture (kickoff, state, score, winner) to a match once
// both teams are known, so every round shows its date/time and live result
function attachEvent(m) {
  if (!m.home.name || !m.away.name) return m;
  const ev = EVENT_BY_PAIR[pairKey(m.home.name, m.away.name)];
  if (!ev) return m;
  m.kickoffUTC = ev.kickoffUTC;
  m.state      = ev.state;
  m.clock      = ev.clock;
  m.venue      = ev.venue;
  m.city       = ev.city;
  m.tv         = ev.tv;
  m.home.score = ev.scores[normTeam(m.home.name)];
  m.away.score = ev.scores[normTeam(m.away.name)];
  if (m.state === 'post') {
    const hw = ev.winners?.[normTeam(m.home.name)];
    const aw = ev.winners?.[normTeam(m.away.name)];
    if (hw || aw) {
      m.winnerName = hw ? m.home.name : m.away.name;
      m.loserName  = hw ? m.away.name : m.home.name;
    } else if (m.home.score != null && m.away.score != null && m.home.score !== m.away.score) {
      const homeWon = Number(m.home.score) > Number(m.away.score);
      m.winnerName = homeWon ? m.home.name : m.away.name;
      m.loserName  = homeWon ? m.away.name : m.home.name;
    }
  }
  return m;
}

// resolve a later-round slot from a {w:n}/{l:n} reference: the real team once
// that match is decided, otherwise a placeholder naming the feeding matchup
function resolveRef(ref, resolved) {
  const num  = ref.w ?? ref.l;
  const kind = ref.w ? 'w' : 'l';
  const fm   = resolved[num];
  const decided = fm && (kind === 'w' ? fm.winnerName : fm.loserName);
  if (decided) return { name: decided, letter: null, fromMatch: num };
  const a = fm && fm.home.name, b = fm && fm.away.name;
  return {
    name: null,
    placeholder: (kind === 'w' ? 'W' : 'L') + num,
    feedLabel: (a && b) ? (a + ' / ' + b) : null,
    fromMatch: num,
  };
}

// Build the full knockout bracket, resolving each match in number order so
// later rounds can read the winners/losers of earlier ones. Round of 32 teams
// come from the standings (third-place opponents from the real schedule);
// later rounds carry placeholders until their feeding matches are decided.
function buildKnockout() {
  const thirds = bestThirds();
  const slot = pos => {
    const t = teamAtPos(pos);
    return { pos, name: t ? t.team : null, letter: pos.slice(1) };
  };
  const thirdSlot = oppLetter => {
    const pick = thirds.find(t => !t.used && t.letter !== oppLetter)
              || thirds.find(t => !t.used);
    if (!pick) return { pos: '3rd', name: null, letter: null };
    pick.used = true;
    return { pos: '3rd', name: pick.team, letter: pick.letter };
  };
  // prefer the real Round of 32 fixture (official third-place pairing), else project
  const thirdFor = winner => {
    if (winner.name) {
      const g = findGroup(winner.letter);
      const mates = new Set((g?.teams || [])
        .map(t => normTeam(t.team)).filter(n => n !== normTeam(winner.name)));
      if (mates.size) {
        const real = realKnockoutOpponent(winner.name, mates);
        if (real) return { pos: '3rd', name: real, letter: null };
      }
    }
    return thirdSlot(winner.letter);
  };

  const resolved = {};
  return KO_TREE.map(tie => {
    let home, away;
    if (tie.round === 'r32') {
      if (tie.away === '3rd')      { home = slot(tie.home); away = thirdFor(home); }
      else if (tie.home === '3rd') { away = slot(tie.away); home = thirdFor(away); }
      else                         { home = slot(tie.home); away = slot(tie.away); }
    } else {
      home = resolveRef(tie.home, resolved);
      away = resolveRef(tie.away, resolved);
    }
    const match = attachEvent({ m: tie.m, round: tie.round, home, away });
    resolved[tie.m] = match;
    return match;
  });
}

// ── TEAM KNOCKOUT RUN (Colombia / Mexico tab) ──────────────────────────────────
// Reuses the same live bracket resolution as the Tournament > Bracket tab, so the
// team tab automatically tracks a country through every round it survives —
// no manual fixture entry needed once a team's slot is known and results post.

function teamDisplayName(team) { return team === 'mexico' ? 'Mexico' : 'Colombia'; }

const DEFAULT_KO_STREAMS = [
  { name: 'FOX (Free OTA!)', type: 'free',  url: 'https://www.fox.com/live',           note: 'Free broadcast TV' },
  { name: 'Telemundo',       type: 'free',  url: 'https://www.telemundo.com/deportes', note: 'Free OTA antenna, Spanish' },
  { name: 'Peacock',         type: 'cable', url: 'https://www.peacocktv.com',          note: 'Telemundo stream online' },
  { name: 'Tubi',            type: 'free',  url: 'https://tubitv.com',                 note: 'Selected WC games free' },
];

// adapt a resolved KO_TREE match into the same shape group-stage matches use,
// so the hero card, countdown, live score and match-history grid all work unmodified
function toDisplayMatch(bm) {
  const wrapSide = side => ({
    name:  side.name || T[LANG].tbd,
    flag:  side.name ? flagFor(side.name) : '◦',
    espn:  side.name ? side.name.toLowerCase() : '',
    score: side.score,
  });
  return {
    id: `ko-m${bm.m}`,
    round: bm.round,
    kickoffUTC: bm.kickoffUTC || null,
    state: bm.state || null,
    home: wrapSide(bm.home),
    away: wrapSide(bm.away),
    venue: bm.venue || '',
    city:  bm.city  || '',
    tv:    bm.tv    || 'FOX',
    streams: DEFAULT_KO_STREAMS,
    winnerName: bm.winnerName || null,
    loserName:  bm.loserName  || null,
  };
}

// the team's knockout matches, in display shape, ordered Round of 32 → Final —
// only the rounds that team's real slot has actually reached appear here
function knockoutRunFor(team) {
  const teamName = teamDisplayName(team);
  return buildKnockout()
    .filter(bm => bm.home.name === teamName || bm.away.name === teamName)
    .sort((a, b) => ROUND_ORDER.indexOf(a.round) - ROUND_ORDER.indexOf(b.round))
    .map(toDisplayMatch);
}

function detectRound(notes) {
  const text = (notes || []).map(n => (n.headline || n.text || '')).join(' ').toLowerCase();
  if (!text) return null;
  if (text.includes('third') || text.includes('3rd place'))          return '3rd';
  if (text.includes('final') && !text.includes('semi') && !text.includes('quarter')) return 'final';
  if (text.includes('semi'))                                          return 'sf';
  if (text.includes('quarter'))                                       return 'qf';
  if (text.includes('round of 16') || text.includes('16'))           return 'r16';
  if (text.includes('round of 32') || text.includes('32') || text.includes('eighth')) return 'r32';
  return null;
}

function parseBracketGames(events) {
  const found = {};
  (events || []).forEach(ev => {
    const comp = ev.competitions?.[0];
    if (!comp) return;
    const notes = comp.notes || ev.notes || [];
    const round = detectRound(notes);
    if (!round) return;

    const home = comp.competitors?.find(c => c.homeAway === 'home');
    const away = comp.competitors?.find(c => c.homeAway === 'away');
    if (!home || !away) return;

    const hn = home.team?.displayName || home.team?.name || 'TBD';
    const an = away.team?.displayName || away.team?.name || 'TBD';

    if (!found[round]) found[round] = [];
    found[round].push({
      id:         ev.id,
      homeTeam:   hn,
      awayTeam:   an,
      homeScore:  home.score,
      awayScore:  away.score,
      state:      ev.status?.type?.state || 'pre',
      detail:     ev.status?.type?.shortDetail || '',
      clock:      ev.status?.displayClock || '',
      kickoffUTC: ev.date,
      note:       notes[0]?.headline || '',
    });
  });
  Object.values(found).forEach(arr => arr.sort((a, b) => new Date(a.kickoffUTC) - new Date(b.kickoffUTC)));
  BRACKET_GAMES = found;
}

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

function fmtDateTimeShort(utc) {
  const d = new Date(utc);
  return d.toLocaleDateString(uiLocale(), { timeZone: uiTZ(), month:'short', day:'numeric' }) +
    ' · ' + d.toLocaleTimeString(uiLocale(), { timeZone: uiTZ(), hour:'numeric', minute:'2-digit', hour12:true }) +
    ' ' + T[LANG].tz;
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

// Same ESPN team IDs already used for the team-profile links in NEWS/MEXICO_NEWS
const TEAM_ESPN_ID = { colombia: '116', mexico: '164' };
let ROSTER = { colombia: null, mexico: null }; // team → Map(normalized name → {jersey, position})

function normPlayerName(name) {
  return (name || '')
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[©*]/g, '')
    .toLowerCase()
    .replace(/[^a-z\s]/g, '')
    .trim();
}

function rosterKey(name) {
  const parts = normPlayerName(name).split(/\s+/).filter(Boolean);
  return parts.length ? parts[parts.length - 1] : '';
}

async function fetchRoster(team) {
  if (ROSTER[team]) return;
  try {
    const id = TEAM_ESPN_ID[team];
    const res = await fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/teams/${id}?enable=roster`);
    if (!res.ok) return;
    const data = await res.json();
    const map = new Map();
    (data.team?.athletes || []).forEach(a => {
      const full = normPlayerName(a.displayName || a.fullName || '');
      const last = rosterKey(a.displayName || a.fullName || '');
      const rec  = { jersey: a.jersey || null, position: a.position?.abbreviation || null };
      if (full) map.set(full, rec);
      if (last && !map.has(last)) map.set(last, rec);
    });
    ROSTER[team] = map;
  } catch (_) { /* squad cards fall back to no jersey number */ }
}

function rosterEntry(team, playerName) {
  const map = ROSTER[team];
  if (!map) return null;
  return map.get(normPlayerName(playerName)) || map.get(rosterKey(playerName)) || null;
}

// tallies goals scored this World Cup by matching scorer names already
// parsed into MATCH_SUMMARIES against each key player's surname
function goalsForPlayer(team, playerName) {
  const last = rosterKey(playerName);
  if (!last) return 0;
  let count = 0;
  Object.entries(MATCH_SUMMARIES).forEach(([key, summary]) => {
    if (!key.split('|').includes(team)) return;
    (summary.scorers || []).forEach(s => {
      if (!s.isOG && rosterKey(s.name) === last) count++;
    });
  });
  return count;
}

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
      parseBracketGames(sbData.events || []);
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

    await Promise.all([fetchRoster('colombia'), fetchRoster('mexico')]);
    renderSquad();

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

    // order-independent index so the projected bracket can pull the real
    // kickoff time, live status and score for any matchup once teams are set
    EVENT_BY_PAIR[pairKey(hn, an)] = {
      kickoffUTC: ev.date,
      state:      ev.status?.type?.state || 'pre',
      clock:      ev.status?.displayClock || '',
      venue:      comp.venue?.fullName || '',
      city:       comp.venue?.address?.city || '',
      tv:         (comp.broadcasts || []).flatMap(b => b.names || []).filter(Boolean).join(' · '),
      scores:     { [hn]: home.score, [an]: away.score },
      winners:    { [hn]: home.winner === true, [an]: away.winner === true },
      teams:      [hn, an],
      display:    { [hn]: home.team?.displayName || hn, [an]: away.team?.displayName || an },
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

    // Assign a canonical A–L letter to each group so the bracket can resolve
    // positions (1A, 2B, …). Prefer a letter parsed from the name/abbr; fall
    // back to alphabetical order (ESPN returns the 12 groups A→L in order).
    ALL_GROUPS_DATA.forEach((g, i) => {
      g.letter = parseGroupLetter(g) || String.fromCharCode(65 + i);
    });
  } catch(_) {}
}

// pull a standalone A–L out of a group's name or abbreviation, e.g.
// "Group A" → "A", "Grp. K" → "K"; returns null if none found
function parseGroupLetter(g) {
  for (const raw of [g.name, g.abbr]) {
    const m = (raw || '').toUpperCase().match(/(?:^|[^A-Z])([A-L])(?:[^A-Z]|$)/);
    if (m) return m[1];
  }
  return null;
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
  set('ov-btn-games',   T[LANG].ovGames);
  set('ov-btn-bracket', T[LANG].ovBracket);
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
  renderBracket();
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

// ── OVERVIEW SUB-VIEW TOGGLE ─────────────────────────────────────────────────

let OVERVIEW_VIEW = 'games';

function switchOverview(view) {
  OVERVIEW_VIEW = view;
  document.getElementById('ov-games').classList.toggle('hidden', view !== 'games');
  document.getElementById('ov-bracket').classList.toggle('hidden', view !== 'bracket');
  document.getElementById('ov-btn-games').classList.toggle('active', view === 'games');
  document.getElementById('ov-btn-bracket').classList.toggle('active', view === 'bracket');
  if (view === 'bracket') renderBracket();
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

// ── RENDER: BRACKET ──────────────────────────────────────────────────────────

// one team row: a resolved team (flag + name + score) or a placeholder
// (group position TBD, or "winner/loser of match N" with the feeding matchup)
function bracketSlotHtml(s, m, showScore, isFinal) {
  const known = !!s.name;
  if (known) {
    const nm = normTeam(s.name);
    const hl = nm === 'colombia' ? ' hl-col' : nm === 'mexico' ? ' hl-mex' : '';
    const winClass = (isFinal && m.winnerName) ? (nm === normTeam(m.winnerName) ? ' winner' : ' loser') : '';
    const scoreHtml = (showScore && s.score != null && s.score !== '')
      ? `<span class="b-score">${s.score}</span>` : '';
    return `<div class="b-team${hl}${winClass}">
      <span class="b-flag">${flagFor(s.name)}</span>
      <span class="b-name">${s.name}</span>
      ${scoreHtml}
    </div>`;
  }
  if (s.pos) {   // Round of 32 slot whose team isn't decided yet
    const code = s.pos === '3rd' ? T[LANG].posThird : s.pos;
    return `<div class="b-team tbd">
      <span class="b-pos">${code}</span>
      <span class="b-flag">◦</span>
      <span class="b-name">${T[LANG].tbd}</span>
    </div>`;
  }
  // later-round placeholder: "W74" / "L101" + the feeding matchup if known
  const def = s.placeholder && s.placeholder[0] === 'L' ? T[LANG].koLoser : T[LANG].koWinner;
  return `<div class="b-team tbd">
    <span class="b-pos">${s.placeholder || 'W'}</span>
    <span class="b-name b-feed">${s.feedLabel || def}</span>
  </div>`;
}

function bracketMatchHtml(m) {
  const isLive = m.state === 'in';
  const isDone = m.state === 'post';
  const showScore = isLive || isDone;

  let status = '';
  if (isLive)            status = `<div class="b-status live">🔴 ${m.clock || T[LANG].live}</div>`;
  else if (isDone)       status = `<div class="b-status final">${T[LANG].ft}</div>`;
  else if (m.kickoffUTC) status = `<div class="b-status">${fmtDateTimeShort(m.kickoffUTC)}</div>`;

  const sub = m.round === '3rd' ? `<span class="b-sub">${T[LANG].roundLabels['3rd']}</span>` : '';

  return `<div class="b-match${isLive ? ' is-live' : isDone ? ' is-done' : ''}" data-m="${m.m}">
    <div class="b-mhead">${sub}<span class="b-mno">M${m.m}</span></div>
    ${bracketSlotHtml(m.home, m, showScore, isDone)}
    ${bracketSlotHtml(m.away, m, showScore, isDone)}
    ${status}
  </div>`;
}

// columns: the Final column also carries the third-place match
const BRACKET_COLS = [
  { id: 'r32',   rounds: ['r32'] },
  { id: 'r16',   rounds: ['r16'] },
  { id: 'qf',    rounds: ['qf'] },
  { id: 'sf',    rounds: ['sf'] },
  { id: 'final', rounds: ['final', '3rd'] },
];

// match number -> the match number(s) that feed into it, read straight from
// the tree definition (not the resolved runtime data) so lines can be drawn
// before — or after — a feeding match is actually decided.
function bracketFeeders(matchNum) {
  const tie = KO_TREE.find(t => t.m === matchNum);
  if (!tie || tie.round === 'r32') return [];
  return [tie.home, tie.away].map(ref => ref.w ?? ref.l).filter(n => n != null);
}

// FIFA numbers knockout matches by fixture calendar (date/venue), not by
// bracket position — e.g. match 98 is Winner-93-v-Winner-94 while match 99
// is Winner-91-v-Winner-92, so listing Round of 16 in plain match-number
// order puts 91/92 ahead of 93/94 and makes their connector lines cross.
// This derives each round's *display* order by walking the tree backward
// from the Final so a round's pairs land adjacent to, and in the same
// order as, the next-round match they feed — matching ESPN's bracket —
// without renumbering or re-dating anything.
function bracketDisplayOrder(cols, matches) {
  const orderedNums = {};
  for (let i = cols.length - 1; i >= 0; i--) {
    const c = cols[i];
    const natural = c.rounds.flatMap(r => matches.filter(m => m.round === r).map(m => m.m));
    if (i === cols.length - 1) { orderedNums[c.id] = natural; continue; }

    const nextNums = orderedNums[cols[i + 1].id];
    const seen = new Set();
    const order = [];
    nextNums.forEach(num => {
      bracketFeeders(num).forEach(fn => {
        if (!seen.has(fn) && natural.includes(fn)) { seen.add(fn); order.push(fn); }
      });
    });
    natural.forEach(n => { if (!seen.has(n)) { seen.add(n); order.push(n); } }); // safety net
    orderedNums[c.id] = order;
  }
  return orderedNums;
}

const BRACKET_CARD_GAP = 7; // px — matches .bracket-matches's .45rem gap

// Positions every round after anchorIdx at the exact vertical midpoint of
// the two matches feeding it, using real measured card heights (a card
// without a kickoff time yet has no status row, so heights aren't uniform).
// Rounds at or before anchorIdx are reset to plain compact flow — the
// "focused" round (and reload) ignores whatever height the rounds before it
// needed, instead of inheriting the tall spread true alignment requires.
// Every measurement is taken in a single shared coordinate space (relative
// to roundsEl) so later rounds can be positioned with plain absolute
// offsets. Returns { [colId]: {top, bottom} } spans in that same shared
// space, for the scroll-focus crop.
function layoutBracketTree(roundsEl, cols, anchorIdx) {
  const spans = {};
  const rootRect = roundsEl.getBoundingClientRect();
  const relTop = node => node.getBoundingClientRect().top - rootRect.top;

  let centers = null;
  cols.forEach((c, idx) => {
    const roundEl = document.getElementById('brk-col-' + c.id);
    const matchesEl = roundEl.querySelector('.bracket-matches');
    const cards = [...matchesEl.children];

    if (idx <= anchorIdx) {
      // compact, independent flow — a fresh start that doesn't care how
      // tall (or spread out) the round(s) before it ended up being
      matchesEl.style.position = '';
      matchesEl.style.height = '';
      cards.forEach(card => { card.style.position = ''; card.style.top = ''; card.style.left = ''; card.style.right = ''; });
      const heights = cards.map(card => card.getBoundingClientRect().height);
      const tops = cards.map(card => relTop(card));
      centers = tops.map((t, i) => t + heights[i] / 2);
      spans[c.id] = { top: Math.min(...tops), bottom: Math.max(...tops.map((t, i) => t + heights[i])) };
      return;
    }

    // beyond the anchor: cascade from the previous round's centers, same
    // true-midpoint math as before
    matchesEl.style.position = 'relative';
    const heights = cards.map(card => card.getBoundingClientRect().height);
    let tops;
    if (cards.length * 2 === centers.length) {
      tops = cards.map((_, i) => (centers[2 * i] + centers[2 * i + 1]) / 2 - heights[i] / 2);
    } else {
      // e.g. Final + 3rd place both come from the same semifinal pair —
      // stack them as one small block centered on that pair's midpoint
      const mid = centers.reduce((a, b) => a + b, 0) / centers.length;
      const blockH = heights.reduce((a, b) => a + b, 0) + BRACKET_CARD_GAP * (heights.length - 1);
      let y = mid - blockH / 2;
      tops = heights.map(h => { const t = y; y += h + BRACKET_CARD_GAP; return t; });
    }

    const matchesTop = relTop(matchesEl);
    let maxBottom = 0;
    cards.forEach((card, i) => {
      const localTop = tops[i] - matchesTop;
      card.style.position = 'absolute';
      card.style.left = '0';
      card.style.right = '0';
      card.style.top = localTop + 'px';
      maxBottom = Math.max(maxBottom, localTop + heights[i]);
    });
    matchesEl.style.height = Math.max(maxBottom, 0) + 'px';

    centers = tops.map((t, i) => t + heights[i] / 2);
    spans[c.id] = { top: Math.min(...tops), bottom: Math.max(...tops.map((t, i) => t + heights[i])) };
  });

  const anyLabel = roundsEl.querySelector('.bracket-round-label');
  return { spans, labelH: anyLabel ? anyLabel.offsetHeight : 0 };
}

// draws the elbow connector from each feeding match's right edge into the
// match it feeds, using the positions layoutBracketTree just computed
function drawBracketConnectors(roundsEl, matches) {
  const old = roundsEl.querySelector('.bracket-lines');
  if (old) old.remove();

  const rootRect = roundsEl.getBoundingClientRect();
  const w = roundsEl.scrollWidth, h = roundsEl.scrollHeight;

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('class', 'bracket-lines');
  svg.setAttribute('width', w);
  svg.setAttribute('height', h);

  let d = '';
  matches.forEach(m => {
    const feeders = bracketFeeders(m.m);
    if (!feeders.length) return;
    const targetEl = roundsEl.querySelector(`[data-m="${m.m}"]`);
    if (!targetEl) return;
    const tr = targetEl.getBoundingClientRect();
    const tY = tr.top - rootRect.top + tr.height / 2;
    const tX = tr.left - rootRect.left;
    feeders.forEach(fn => {
      const feederEl = roundsEl.querySelector(`[data-m="${fn}"]`);
      if (!feederEl) return;
      const fr = feederEl.getBoundingClientRect();
      const fY = fr.top - rootRect.top + fr.height / 2;
      const fX = fr.right - rootRect.left;
      const midX = (fX + tX) / 2;
      d += `M${fX},${fY} H${midX} V${tY} H${tX} `;
    });
  });

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', d);
  path.setAttribute('class', 'bracket-line-path');
  svg.appendChild(path);
  roundsEl.appendChild(svg);
}

let BRACKET_SPANS = {}, BRACKET_LABEL_H = 0, BRACKET_SCROLL_BOUND = false;
let BRACKET_RENDER_COLS = null, BRACKET_MATCHES = null;

function renderBracket() {
  const el = document.getElementById('bracket-rounds');
  if (!el) return;

  const matches = buildKnockout();
  const matchByNum = {};
  matches.forEach(m => { matchByNum[m.m] = m; });
  const order = bracketDisplayOrder(BRACKET_COLS, matches);
  const cols = BRACKET_COLS.map(c => ({
    id: c.id,
    label: T[LANG].roundLabels[c.id] || c.id.toUpperCase(),
    list: order[c.id].map(num => matchByNum[num]),
  }));

  el.innerHTML = cols.map(c => `<div class="bracket-round" id="brk-col-${c.id}">
      <div class="bracket-round-label">${c.label}</div>
      <div class="bracket-matches">${c.list.map(bracketMatchHtml).join('')}</div>
    </div>`).join('');

  BRACKET_RENDER_COLS = cols;
  BRACKET_MATCHES = matches;

  const activeId = renderBracketChrome(el, cols);
  applyBracketFocus(activeId);
  setupBracketScrollSync();
}

// the round-tab bar + projection note, inserted once above the scroll area.
// Returns the currently-active round id.
function renderBracketChrome(el, cols) {
  const wrap = el.closest('.bracket-scroll-wrap');
  if (!wrap) return 'r32';
  const host = wrap.parentElement;

  let note = host.querySelector('.bracket-note');
  if (!note) { note = document.createElement('div'); note.className = 'bracket-note'; host.insertBefore(note, wrap); }
  note.textContent = `🔮 ${T[LANG].projTitleFull} · ${T[LANG].projNote}`;

  let tabs = host.querySelector('.bracket-tabs');
  if (!tabs) { tabs = document.createElement('div'); tabs.className = 'bracket-tabs'; host.insertBefore(tabs, wrap); }
  const active = tabs.querySelector('.bracket-tab.active')?.dataset.r || 'r32';
  tabs.innerHTML = cols.map(c =>
    `<button class="bracket-tab${c.id === active ? ' active' : ''}" data-r="${c.id}" onclick="scrollBracketTo('${c.id}')">${c.label}</button>`
  ).join('');
  return active;
}

// Reloads the bracket layout anchored at the focused round: that round (and
// everything before it) resets to compact flow — ignoring whatever height
// the rounds to its left needed — while the round(s) after it cascade from
// its fresh, tightly-packed positions. Then crops the scroll-wrap to the
// focused round plus the tree it feeds, so it fills the view with no
// leftover whitespace, shrinking further for each later round.
function applyBracketFocus(rid) {
  const wrap = document.querySelector('.bracket-scroll-wrap');
  const roundsEl = document.getElementById('bracket-rounds');
  const cols = BRACKET_RENDER_COLS;
  if (!wrap || !roundsEl || !cols) return;

  const focusIdx = Math.max(0, cols.findIndex(c => c.id === rid));
  // the very last round has nothing after it to cascade forward into, so
  // anchoring there would leave it (and its feeder) both independently
  // compact with no real connection between them — anchor one round
  // earlier instead so the last round still cascades in, properly aligned
  const anchorIdx = Math.min(focusIdx, cols.length - 2);
  const layout = layoutBracketTree(roundsEl, cols, anchorIdx);
  BRACKET_SPANS = layout.spans;
  BRACKET_LABEL_H = layout.labelH;
  drawBracketConnectors(roundsEl, BRACKET_MATCHES || []);

  const relevant = cols.slice(anchorIdx).map(c => BRACKET_SPANS[c.id]).filter(Boolean);
  if (!relevant.length) return;
  const pad = 10;
  const top = Math.max(0, Math.min(...relevant.map(s => s.top)) - BRACKET_LABEL_H - pad);
  const bottom = Math.max(...relevant.map(s => s.bottom));
  wrap.style.height = (bottom - top + pad) + 'px';
  roundsEl.style.transform = `translateY(${-top}px)`;
  document.querySelectorAll('.bracket-tab').forEach(t => t.classList.toggle('active', t.dataset.r === rid));
}

// scroll the round into view and focus it. Uses rect math so it works
// regardless of which ancestor establishes the positioning context.
function scrollBracketTo(rid) {
  const col = document.getElementById('brk-col-' + rid);
  const wrap = col && col.closest('.bracket-scroll-wrap');
  if (wrap) {
    const delta = col.getBoundingClientRect().left - wrap.getBoundingClientRect().left;
    wrap.scrollTo({ left: Math.max(0, wrap.scrollLeft + delta - 10), behavior: 'smooth' });
  }
  applyBracketFocus(rid);
}

// keeps the tab bar + height-crop in sync when the user swipes/scrolls the
// bracket directly instead of tapping a round tab
function setupBracketScrollSync() {
  if (BRACKET_SCROLL_BOUND) return;
  const wrap = document.querySelector('.bracket-scroll-wrap');
  if (!wrap) return;
  BRACKET_SCROLL_BOUND = true;
  let ticking = false;
  wrap.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const cols = [...document.querySelectorAll('.bracket-round')];
      if (!cols.length) return;
      // at the scroll-right limit the last column(s) may never reach the
      // left edge (not enough scrollable width left), so nearest-edge
      // matching would keep picking its neighbor instead — snap to the
      // last column explicitly once we've hit the end
      const atEnd = wrap.scrollLeft >= wrap.scrollWidth - wrap.clientWidth - 2;
      let closest = cols[cols.length - 1];
      if (!atEnd) {
        const wrapLeft = wrap.getBoundingClientRect().left;
        let closestDist = Infinity;
        cols.forEach(col => {
          const dist = Math.abs(col.getBoundingClientRect().left - wrapLeft);
          if (dist < closestDist) { closestDist = dist; closest = col; }
        });
      }
      const rid = closest.id.replace('brk-col-', '');
      if (document.querySelector('.bracket-tab.active')?.dataset.r !== rid) applyBracketFocus(rid);
    });
  }, { passive: true });
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

// team-specific hero colors
function heroTheme() {
  return ACTIVE_TEAM === 'mexico'
    ? { accent: '#3dd68c', border: '#006847',
        bg: 'linear-gradient(135deg, var(--surface) 0%, #0a200a 100%)',
        liveBg: 'linear-gradient(135deg, var(--surface) 0%, #0a2a0a 100%)' }
    : { accent: 'var(--col-yellow)', border: 'var(--col-blue)',
        bg: 'linear-gradient(135deg, var(--surface) 0%, #0a1a3a 100%)',
        liveBg: 'linear-gradient(135deg, var(--surface) 0%, #2a0808 100%)' };
}

// the live/upcoming match card (with countdown), shared by group and knockout
function heroMatchCard(target, upcomingEyebrow, liveEyebrow) {
  const { accent, border, bg, liveBg } = heroTheme();
  const sc    = liveScoreFor(target);
  const state = matchState(target.kickoffUTC);
  const cd    = countdown(target.kickoffUTC);
  const freeStreams = target.streams.filter(s => s.type === 'free');

  if (state === 'live' && sc) {
    return `
      <div class="hero live-mode" style="background:${liveBg}">
        <div>
          <div class="hero-eyebrow" style="color:${accent}">${liveEyebrow}</div>
          <div class="hero-title">${target.home.flag} ${target.home.name} &nbsp;vs&nbsp; ${target.away.flag} ${target.away.name}</div>
          ${target.venue ? `<div class="hero-detail" style="margin-top:.3rem">📍 ${target.venue}${target.city ? ', ' + target.city : ''}</div>` : ''}
          <div class="hero-streams">
            ${freeStreams.map(s => `
              <a href="${s.url}" target="_blank" class="chip free">▶ ${s.name} <span class="free-tag">FREE</span></a>
            `).join('')}
          </div>
        </div>
        <div style="text-align:center">
          <div class="score-big" style="color:${accent}">${sc.homeScore} – ${sc.awayScore}</div>
          <div class="score-teams-label">${target.home.name} · ${target.away.name}</div>
          <div><span class="live-badge">${sc.clock || sc.detail || T[LANG].live.toUpperCase()}</span></div>
        </div>
      </div>`;
  }
  return `
      <div class="hero" style="border-color:${border};background:${bg}">
        <div>
          <div class="hero-eyebrow" style="color:${accent}">${upcomingEyebrow}</div>
          <div class="hero-title">${target.home.flag} ${target.home.name} <span style="color:var(--muted);font-weight:400">vs</span> ${target.away.flag} ${target.away.name}</div>
          <div class="hero-detail" style="margin-top:.3rem">🕐 ${fmtET(target.kickoffUTC)}</div>
          <div class="hero-detail">${target.venue ? `📍 ${target.venue}${target.city ? ', ' + target.city : ''} &nbsp;·&nbsp; ` : ''}📺 ${target.tv}</div>
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
            <div class="cd-unit"><div class="cd-num" id="cd-d" style="color:${accent}">${pad(cd.d)}</div><div class="cd-lbl">${T[LANG].days}</div></div>
            <div class="cd-unit"><div class="cd-num" id="cd-h" style="color:${accent}">${pad(cd.h)}</div><div class="cd-lbl">${T[LANG].hrs}</div></div>
            <div class="cd-unit"><div class="cd-num" id="cd-m" style="color:${accent}">${pad(cd.m)}</div><div class="cd-lbl">${T[LANG].min}</div></div>
            <div class="cd-unit"><div class="cd-num" id="cd-s" style="color:${accent}">${pad(cd.s)}</div><div class="cd-lbl">${T[LANG].sec}</div></div>
          </div>
        </div>` : ''}
      </div>`;
}

// compact "advanced to the next round" banner
function heroCongratsHtml(eyebrow, title) {
  const { accent, border, bg } = heroTheme();
  return `
      <div class="hero hero-congrats" style="border-color:${border};background:${bg}">
        <div class="congrats-emoji">🎉</div>
        <div>
          <div class="hero-eyebrow" style="color:${accent}">${eyebrow}</div>
          <div class="hero-congrats-title">${title}</div>
        </div>
      </div>`;
}

// "eliminated" banner — the team's run ends here
function heroEliminatedHtml(teamName, lastMatch) {
  const { bg } = heroTheme();
  const roundLabel = T[LANG].roundLabels[lastMatch.round] || '';
  return `
      <div class="hero hero-congrats" style="border-color:var(--col-red);background:${bg}">
        <div class="congrats-emoji">💔</div>
        <div>
          <div class="hero-eyebrow" style="color:var(--col-red)">${T[LANG].stageComplete(roundLabel)}</div>
          <div class="hero-congrats-title">${T[LANG].eliminatedTitle(teamName)}</div>
          <div class="hero-detail">${T[LANG].eliminatedSub}</div>
        </div>
      </div>`;
}

// "champions" banner — nothing left to play and the team won it all
function heroChampionHtml(teamName) {
  const { border, bg } = heroTheme();
  return `
      <div class="hero hero-congrats" style="border-color:${border};background:${bg}">
        <div class="congrats-emoji">🏆</div>
        <div>
          <div class="hero-eyebrow" style="color:var(--col-yellow)">${T[LANG].stageComplete(T[LANG].roundLabels.final)}</div>
          <div class="hero-congrats-title">${T[LANG].championTitle(teamName)}</div>
        </div>
      </div>`;
}

// the match whose countdown the hero is currently showing (group, else knockout)
function heroTargetMatch() {
  const matches = ACTIVE_TEAM === 'mexico' ? MEXICO_MATCHES : MATCHES;
  const groupTarget = matches.find(m => matchState(m.kickoffUTC) === 'live')
                   || matches.find(m => matchState(m.kickoffUTC) === 'upcoming');
  if (groupTarget) return groupTarget;
  const run = knockoutRunFor(ACTIVE_TEAM);
  return run.find(m => !m.winnerName && m.kickoffUTC) || null;
}

function renderHero() {
  const el = document.getElementById('hero');
  if (!el) return;
  const matches  = ACTIVE_TEAM === 'mexico' ? MEXICO_MATCHES : MATCHES;
  const teamName = teamDisplayName(ACTIVE_TEAM);

  const groupTarget = matches.find(m => matchState(m.kickoffUTC) === 'live')
                   || matches.find(m => matchState(m.kickoffUTC) === 'upcoming');

  // group stage still in progress — single match card as before
  if (groupTarget) {
    el.innerHTML = heroMatchCard(groupTarget, T[LANG].nextMatch(groupTarget.matchday), T[LANG].liveNow(groupTarget.matchday));
    return;
  }

  // group stage complete — walk the team's knockout run: history, current
  // fixture and advance/eliminate language all derive from the live bracket
  const run = knockoutRunFor(ACTIVE_TEAM);
  if (run.length === 0) {
    // bracket not resolved yet (offline, or standings still loading)
    const advanceMsg = ACTIVE_TEAM === 'mexico' ? T[LANG].mexAdvance : T[LANG].colAdvance;
    el.innerHTML = `<div class="hero-stack">${heroCongratsHtml(T[LANG].groupComplete, advanceMsg)}
      <div class="hero-detail" style="text-align:center">${T[LANG].checkFIFA}</div></div>`;
    return;
  }

  const decided = run.filter(m => m.winnerName);
  const last    = decided[decided.length - 1];
  const current = run.find(m => !m.winnerName);

  let html = '<div class="hero-stack">';

  if (last && normTeam(last.winnerName) !== normTeam(teamName)) {
    html += heroEliminatedHtml(teamName, last);
  } else if (current) {
    const roundLabel  = T[LANG].roundLabels[current.round] || '';
    const eyebrow     = last ? T[LANG].stageComplete(T[LANG].roundLabels[last.round]) : T[LANG].groupComplete;
    html += heroCongratsHtml(eyebrow, T[LANG].roundAdvance(teamName, roundLabel));
    if (current.kickoffUTC) {
      html += heroMatchCard(current, T[LANG].koNext(roundLabel), T[LANG].koLive(roundLabel));
    } else {
      html += `<div class="hero-detail" style="text-align:center">${T[LANG].knockoutTBD} — ${T[LANG].checkFIFA}</div>`;
    }
  } else if (last && last.round === 'final') {
    html += heroChampionHtml(teamName);
  } else if (last) {
    html += heroCongratsHtml(T[LANG].stageComplete(T[LANG].roundLabels[last.round]), T[LANG].checkFIFA);
  }

  el.innerHTML = html + '</div>';
}

// group-stage matches + every knockout match the team's real slot has reached
// (chronological — the definitive record of the team's whole tournament)
function historyMatchesFor(team) {
  // completed games only — the upcoming/live fixture already has its own
  // "Next Match" card up top, so repeating it here would be redundant
  const groupMatches = (team === 'mexico' ? MEXICO_MATCHES : MATCHES)
    .map(m => ({ ...m, round: 'group' }))
    .filter(m => matchState(m.kickoffUTC) === 'final');
  const koMatches = knockoutRunFor(team).filter(m => m.kickoffUTC && m.winnerName);
  // most recent game first, oldest last
  return [...groupMatches, ...koMatches].sort((a, b) => new Date(b.kickoffUTC) - new Date(a.kickoffUTC));
}

function renderMatches() {
  const teamName = teamDisplayName(ACTIVE_TEAM);
  const hlClass  = ACTIVE_TEAM === 'mexico' ? 'mex' : 'col';
  const groupMatchdayLabel = ACTIVE_TEAM === 'mexico'
    ? (n => LANG === 'es' ? `Jornada ${n} · Grupo A` : `Matchday ${n} · Group A`)
    : T[LANG].matchdayGroup;
  const matches = historyMatchesFor(ACTIVE_TEAM);

  document.getElementById('matches').innerHTML = matches.map(m => {
    // prefer the real ESPN status (set on knockout matches via attachEvent) over
    // the kickoff-time heuristic, since knockout games can run past its 2hr window
    const state = m.winnerName ? 'final' : m.state === 'in' ? 'live' : matchState(m.kickoffUTC);
    const sc    = liveScoreFor(m);
    const homeCol = m.home.name === teamName;
    const awayCol = m.away.name === teamName;
    const label = m.round && m.round !== 'group'
      ? (T[LANG].roundLabels[m.round] || '')
      : groupMatchdayLabel(m.matchday);

    let badge = '';
    let hs = '–', as_ = '–';

    if (state === 'live') {
      badge = `<span class="status-chip live">🔴 ${sc?.clock || T[LANG].live}</span>`;
      hs = sc?.homeScore ?? m.home.score ?? '0'; as_ = sc?.awayScore ?? m.away.score ?? '0';
    } else if (state === 'final') {
      badge = `<span class="status-chip final">${T[LANG].ft}</span>`;
      hs = sc?.homeScore ?? m.home.score ?? '–'; as_ = sc?.awayScore ?? m.away.score ?? '–';
    } else {
      badge = `<span class="status-chip sched">${fmtDateShort(m.kickoffUTC)}</span>`;
    }

    const metaTags = [
      `🕐 ${fmtET(m.kickoffUTC)}`,
      m.venue ? `📍 ${m.venue}${m.city ? ', ' + m.city : ''}` : '',
      m.tv    ? `📺 ${m.tv}` : '',
    ].filter(Boolean).map(t => `<span class="meta-tag">${t}</span>`).join('');

    return `
      <div class="match-card ${state === 'live' ? 'is-live' : state === 'upcoming' ? 'is-next' : ''}">
        <div class="match-top">
          <span>${label}</span>
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
            ${metaTags}
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
  const base = ACTIVE_TEAM === 'mexico' ? MEXICO_MATCHES : MATCHES;
  // include the upcoming knockout fixture so its free-to-watch options show here too
  const run = knockoutRunFor(ACTIVE_TEAM);
  const current = run.find(m => !m.winnerName && m.kickoffUTC);
  const matches = current ? [current, ...base] : base;
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
  document.getElementById('squad').innerHTML = players.map(p => {
    const jersey = rosterEntry(ACTIVE_TEAM, p.name)?.jersey;
    const goals  = goalsForPlayer(ACTIVE_TEAM, p.name);
    return `
    <div class="player">
      <div class="p-top">
        <div class="p-pos">${p.pos}</div>
        ${jersey ? `<div class="p-num">#${jersey}</div>` : ''}
      </div>
      <div class="p-name">${p.name}</div>
      <div class="p-club">${p.club}</div>
      ${goals > 0 ? `<div class="p-stat">⚽ ${T[LANG].wcGoals(goals)}</div>` : ''}
    </div>`;
  }).join('');
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
  const m = heroTargetMatch();
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
  renderBracket();
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
renderBracket();
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
