const debatersData = {
    'HIROO': {
        country: 'Indonesia 🇮🇩',
        status: 'ACTIVE',
        division: 'Mid Tier',
        matches: []
    },
    'RANZT': {
        country: 'Indonesia 🇮🇩',
        status: 'ACTIVE',
        division: 'Mid Tier',
        matches: []
    },
    'ZOGRATIS': {
        country: 'Indonesia 🇮🇩',
        status: 'ACTIVE',
        division: 'High Tier',
        matches: []
    },
    'PRATAMA': {
        country: 'Indonesia 🇮🇩',
        status: 'ACTIVE',
        division: 'High Tier',
        matches: []
    },
    'AHENG': {
        country: 'Indonesia 🇮🇩',
        status: 'ACTIVE',
        division: 'High Tier',
        matches: []
    },
    'ARYANWT': {
        country: 'Indonesia 🇮🇩',
        status: 'ACTIVE',
        division: 'High Tier',
        matches: []
    },
    'THINZEL': {
        country: 'Indonesia 🇮🇩',
        status: 'ACTIVE',
        division: 'Low Tier',
        matches: []
    },
    'LIANX': {
        country: 'Indonesia 🇮🇩',
        status: 'ACTIVE',
        division: 'High Tier',
        matches: []
    },
    'VALEN': {
        country: 'Indonesia 🇮🇩',
        status: 'ACTIVE',
        division: 'Mid Tier',
        matches: []
    },
    'KUREJI': {
        country: 'Indonesia 🇮🇩',
        status: 'ACTIVE',
        division: 'Low Tier',
        matches: []
    },
    'KARIZ': {
        country: 'Indonesia 🇮🇩',
        status: 'ACTIVE',
        division: 'High Tier',
        matches: []
    },
    'FARRAS': {
        country: 'Indonesia 🇮🇩',
        status: 'ACTIVE',
        division: 'Low Tier',
        matches: []
    },
    'ADYY': {
        country: 'Malaysia 🇲🇾',
        status: 'ACTIVE',
        division: 'High Tier',
        matches: []
    },
    'RYUU': {
        country: 'Malaysia 🇲🇾',
        status: 'ACTIVE',
        division: 'High Tier',
        matches: []
    },
    'MUCHIBEI': {
        country: 'Malaysia 🇲🇾',
        status: 'ACTIVE',
        division: 'High Tier',
        matches: []
    },
    'RENJI': {
        country: 'Malaysia 🇲🇾',
        status: 'ACTIVE',
        division: 'Mid Tier',
        matches: []
    },
    'RIM': {
        country: 'Malaysia 🇲🇾',
        status: 'ACTIVE',
        division: 'Low Tier',
        matches: []
    },
    'SHADE': {
        country: 'Malaysia 🇲🇾',
        status: 'ACTIVE',
        division: 'High Tier',
        matches: []
    },
    'KYUKI': {
        country: 'Malaysia 🇲🇾',
        status: 'ACTIVE',
        division: 'High Tier',
        matches: []
    },
    'KLEIN': {
        country: 'Vietnam 🇻🇳',
        status: 'INACTIVE',
        division: 'High Tier',
        matches: []
    },
    'KAZ': {
        country: 'Philippines 🇵🇭',
        status: 'ACTIVE',
        division: 'Mid Tier',
        matches: []
    },
    'AARON': {
        country: 'Mexico 🇲🇽',
        status: 'ACTIVE',
        division: 'High Tier',
        matches: []
    },
    'XAVIER': {
        country: 'Brazil 🇧🇷',
        status: 'INACTIVE',
        division: 'Mid Tier',
        matches: []
    },
    'MIKAEL': {
        country: 'Brazil 🇧🇷',
        status: 'ACTIVE',
        division: 'High Tier',
        matches: []
    },
    'RABBITTO': {
        country: 'Canada 🇨🇦',
        status: 'ACTIVE',
        division: 'High Tier',
        matches: []
    },
    'HYRUKI': {
        country: 'Italy 🇮🇹',
        status: 'ACTIVE',
        division: 'High Tier',
        matches: []
    },
    'LARNEX': {
        country: 'France 🇫🇷',
        status: 'INACTIVE',
        division: 'Mid Tier',
        matches: []
    },
    'IULIAN': {
        country: 'Romania 🇷🇴',
        status: 'ACTIVE',
        division: 'Low Tier',
        matches: []
    },
    'HOMURA KIN': {
        country: 'Russia 🇷🇺',
        status: 'ACTIVE',
        division: 'Mid Tier',
        matches: []
    },
    'YULZ CLOVER': {
        country: 'Unknown ❓',
        status: 'ACTIVE',
        division: 'Mid Tier',
        matches: []
    },
    'RAJU': {
        country: 'Unknown ❓',
        status: 'ACTIVE',
        division: 'High Tier',
        matches: []
    }
};

const matches = [
    { event: 'DBA 1', debater1: 'HIROO', debater2: 'RENJI', winner: 'HIROO', loser: 'RENJI', tier: 'Mid Tier' },
    { event: 'DBA 1', debater1: 'ZOGRATIS', debater2: 'MUCHIBEI', winner: 'ZOGRATIS', loser: 'MUCHIBEI', tier: 'High Tier' },
    { event: 'DBA 1', debater1: 'ARYANWT', debater2: 'RIM', winner: 'ARYANWT', loser: 'RIM', tier: 'Low Tier' },
    { event: 'DBA 1', debater1: 'THINZEL', debater2: 'SHADE', winner: 'SHADE', loser: 'THINZEL', tier: 'Low Tier' },
    { event: 'DBA 1', debater1: 'RANZT', debater2: 'RYUU', winner: 'RANZT', loser: 'RYUU', tier: 'Mid Tier' },
    { event: 'DBA 1', debater1: 'LIANX', debater2: 'ADYY', winner: 'LIANX', loser: 'ADYY', tier: 'High Tier' },
    { event: 'DBA 2', debater1: 'RAJU', debater2: 'RYUU', winner: 'RYUU', loser: 'RAJU', tier: 'High Tier' },
    { event: 'DBA 2', debater1: 'SHADE', debater2: 'KYUKI', winner: 'KYUKI', loser: 'SHADE', tier: 'High Tier' },
    { event: 'DBA 2', debater1: 'AHENG', debater2: 'PRATAMA', winner: 'PRATAMA', loser: 'AHENG', tier: 'High Tier' },
    { event: 'DBA 2', debater1: 'ADYY', debater2: 'ZOGRATIS', winner: 'ADYY', loser: 'ZOGRATIS', tier: 'High Tier' },
    { event: 'DBA 2', debater1: 'ARYANWT', debater2: 'AARON', winner: 'AARON', loser: 'ARYANWT', tier: 'High Tier' },
    { event: 'DBA Special Match', debater1: 'YULZ CLOVER', debater2: 'KAZ', winner: 'YULZ CLOVER', loser: 'KAZ', tier: 'Mid Tier' },
];

const points = {
    'Menang Main Event': 20,
    'Kalah Main Event': -10,
    'Menang Co-Main Event': 10,
    'Kalah Co-Main Event': -5,
    'Menang Main Card': 5,
    'Kalah Main Card': 0
};

// Mengisi data matches ke debatersData
function populateDebaterData() {
    for (const name in debatersData) {
        debatersData[name].record = { W: 0, L: 0, D: 0 };
    }

    matches.forEach(match => {
        // Update records
        if (debatersData[match.winner]) debatersData[match.winner].record.W++;
        if (debatersData[match.loser]) debatersData[match.loser].record.L++;

        // Add match history
        if (debatersData[match.debater1]) {
            debatersData[match.debater1].matches.push({
                opponent: match.debater2,
                outcome: match.debater1 === match.winner ? 'Win' : 'Loss',
                event: match.event
            });
        }
        if (debatersData[match.debater2]) {
            debatersData[match.debater2].matches.push({
                opponent: match.debater1,
                outcome: match.debater2 === match.winner ? 'Win' : 'Loss',
                event: match.event
            });
        }
    });
}

function calculateRanking() {
    const ranking = {};

    for (const name in debatersData) {
        ranking[name] = {
            points: 0,
            tier: debatersData[name].division,
            country: debatersData[name].country,
        };
    }

    matches.forEach(match => {
        const matchType = 'Main Card';
        if (ranking[match.winner]) {
            ranking[match.winner].points += points[`Menang ${matchType}`];
        }
        if (ranking[match.loser]) {
            ranking[match.loser].points += points[`Kalah ${matchType}`];
        }
    });

    const sortedRanking = Object.keys(ranking).sort((a, b) => ranking[b].points - ranking[a].points);

    const tieredRanking = {
        'High Tier': [],
        'Mid Tier': [],
        'Low Tier': []
    };

    sortedRanking.forEach(name => {
        const debater = ranking[name];
        if (debater.tier && tieredRanking[debater.tier]) {
            tieredRanking[debater.tier].push({
                name: name,
                points: debater.points,
                country: debater.country
            });
        }
    });

    for (const tier in tieredRanking) {
        tieredRanking[tier].sort((a, b) => b.points - a.points);
    }

    return tieredRanking;
}

function renderDebaterProfiles() {
    const container = document.getElementById('debater-container');
    if (!container) return;

    const debatersToShow = Object.keys(debatersData);
    debatersToShow.forEach(name => {
        const debater = debatersData[name];
        const card = document.createElement('a');
        card.className = 'debater-card';
        card.href = `profile.html?name=${encodeURIComponent(name)}`;

        card.innerHTML = `
            <img src="images/placeholder_profile.jpg" alt="${name}">
            <h3>${name}</h3>
            <p>${debater.country}</p>
        `;
        container.appendChild(card);
    });
}

function renderSpecificDebaterProfile() {
    const urlParams = new URLSearchParams(window.location.search);
    const debaterName = urlParams.get('name');
    const container = document.querySelector('main');

    if (!debaterName || !debatersData[debaterName]) {
        container.innerHTML = `<p style="text-align: center; margin-top: 5rem;">Debater tidak ditemukan.</p>`;
        return;
    }

    const debater = debatersData[debaterName];
    const profileHTML = `
        <section class="single-profile-card">
            <div class="profile-header">
                <img src="images/placeholder_profile.jpg" alt="${debaterName}">
                <div class="profile-info">
                    <h3>${debaterName}</h3>
                    <p>${debater.country} | ${debater.division}</p>
                </div>
            </div>
            <div class="profile-details">
                <div class="detail-box">
                    <h4>Status</h4>
                    <p>${debater.status}</p>
                </div>
                <div class="detail-box">
                    <h4>Record</h4>
                    <p>${debater.record.W}–${debater.record.L}–${debater.record.D}</p>
                </div>
            </div>
            <div class="profile-record">
                <h4>WINS - ${debater.record.W} | LOSSES - ${debater.record.L} | DRAWS - ${debater.record.D}</h4>
            </div>
            <div class="match-history-section">
                <h4>MATCH HISTORY</h4>
                <div class="match-list">
                    ${debater.matches.length > 0 ?
                        debater.matches.map(match => `
                            <div class="match-row">
                                <span class="result-text ${match.outcome.toLowerCase()}">${match.outcome.toUpperCase()}</span>
                                <div class="opponent-event">
                                    <p class="debater-name">${match.opponent}</p>
                                    <p class="event-details-text">${match.event}</p>
                                </div>
                            </div>
                        `).join('')
                        : '<p>Belum ada riwayat pertandingan.</p>'
                    }
                </div>
            </div>
        </section>
    `;

    container.innerHTML = profileHTML;
}

function renderRanking() {
    const ranking = calculateRanking();
    const container = document.getElementById('ranking-container');
    if (!container) return;

    container.innerHTML = '';
    const tiers = ['High Tier', 'Mid Tier', 'Low Tier'];
    tiers.forEach(tier => {
        const tierCard = document.createElement('div');
        tierCard.className = 'ranking-tier-card';
        tierCard.innerHTML = `<h3>${tier.toUpperCase()}</h3>`;
        const list = document.createElement('ol');
        list.className = 'ranking-list';

        ranking[tier].forEach(debater => {
            const li = document.createElement('li');
            li.innerHTML = `
                <img src="images/placeholder_profile.jpg" alt="${debater.name}">
                <div class="ranking-info">
                    <span class="ranking-name">${debater.name}</span>
                    <span class="ranking-country">${debater.country}</span>
                </div>
                <span class="ranking-points">${debater.points}</span>
            `;
            list.appendChild(li);
        });
        tierCard.appendChild(list);
        container.appendChild(tierCard);
    });
}

function renderArchive() {
    const container = document.getElementById('archive-container');
    if (!container) return;

    const events = [...new Set(matches.map(match => match.event))];
    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `<h3>${event.toUpperCase()}</h3>`;
        const eventMatches = matches.filter(match => match.event === event);

        const matchesList = document.createElement('div');
        matchesList.className = 'match-results';

        eventMatches.forEach(match => {
            const matchRow = document.createElement('div');
            matchRow.className = 'match-row';
            matchRow.innerHTML = `
                <span class="result-text win">${match.winner === match.debater1 ? 'WIN' : 'LOSS'}</span>
                <div class="opponent-event">
                    <p class="debater-name">${match.debater1} vs ${match.debater2}</p>
                    <p class="event-details-text">${match.event}</p>
                </div>
            `;
            matchesList.appendChild(matchRow);
        });
        eventCard.appendChild(matchesList);
        container.appendChild(eventCard);
    });
}

function setupNavigation() {
    const menuToggle = document.getElementById('menu-toggle');
    const searchToggle = document.getElementById('search-toggle');
    const mainNav = document.getElementById('main-nav');
    const searchContainer = document.getElementById('search-container');
    const searchInput = document.getElementById('searchInput');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('hidden');
            searchContainer.classList.add('hidden');
        });
    }

    if (searchToggle && searchContainer) {
        searchToggle.addEventListener('click', () => {
            searchContainer.classList.toggle('hidden');
            mainNav.classList.add('hidden');
            searchInput.focus();
        });
    }
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    if (!searchInput || !searchButton) return;

    const handleSearch = () => {
        const query = searchInput.value.toLowerCase().trim();
        if (query) {
            const debaterFound = Object.keys(debatersData).find(name => name.toLowerCase().includes(query));
            if (debaterFound) {
                window.location.href = `profile.html?name=${encodeURIComponent(debaterFound)}`;
            } else {
                alert('Debater tidak ditemukan.');
            }
        }
    };

    searchButton.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    populateDebaterData();
    setupNavigation();
    setupSearch();

    const path = window.location.pathname;
    if (path.includes('profile.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('name')) {
            renderSpecificDebaterProfile();
        } else {
            renderDebaterProfiles();
        }
    } else if (path.includes('ranking.html')) {
        renderRanking();
    } else if (path.includes('archive.html')) {
        renderArchive();
    }
});
