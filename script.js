document.addEventListener('DOMContentLoaded', () => {

    const debatersData = {
        'HIROO': {
            country: 'INDONESIA', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'MID TIER',
            imageUrl: 'images/Hiroo.JPEG.png', record: { W: 2, L: 0, D: 0 },
            breakdown: { wins: { KO: 1, UD: 1, SD: 0 }, losses: { KO: 0, UD: 0, SD: 0 } }, matches: []
        },
        'RANZT': {
            country: 'INDONESIA', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'MID TIER',
            imageUrl: 'images/ranzt_profile.jpg', record: { W: 1, L: 0, D: 0 },
            breakdown: { wins: { KO: 1, UD: 0, SD: 0 }, losses: { KO: 0, UD: 0, SD: 0 } }, matches: []
        },
        'ZOGRATIS': {
            country: 'INDONESIA', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'HIGH TIER',
            imageUrl: 'images/zogratis_profile.jpg', record: { W: 1, L: 1, D: 0 },
            breakdown: { wins: { KO: 1, UD: 0, SD: 0 }, losses: { KO: 1, UD: 0, SD: 0 } }, matches: []
        },
        'PRATAMA': {
            country: 'INDONESIA', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'HIGH TIER',
            imageUrl: 'images/pratama_profile.jpg', record: { W: 1, L: 0, D: 0 },
            breakdown: { wins: { KO: 0, UD: 1, SD: 0 }, losses: { KO: 0, UD: 0, SD: 0 } }, matches: []
        },
        'AHENG': {
            country: 'INDONESIA', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'HIGH TIER',
            imageUrl: 'images/aheng_profile.jpg', record: { W: 0, L: 1, D: 0 },
            breakdown: { wins: { KO: 0, UD: 0, SD: 0 }, losses: { KO: 0, UD: 1, SD: 0 } }, matches: []
        },
        'ARYANWT': {
            country: 'INDONESIA', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'HIGH TIER',
            imageUrl: 'images/aryanwt_profile.jpg', record: { W: 1, L: 1, D: 0 },
            breakdown: { wins: { KO: 0, UD: 1, SD: 0 }, losses: { KO: 0, UD: 1, SD: 0 } }, matches: []
        },
        'THINZEL': {
            country: 'INDONESIA', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'LOW TIER',
            imageUrl: 'images/thinzel_profile.jpg', record: { W: 0, L: 1, D: 0 },
            breakdown: { wins: { KO: 0, UD: 0, SD: 0 }, losses: { KO: 1, UD: 0, SD: 0 } }, matches: []
        },
        'LIANX': {
            country: 'INDONESIA', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'HIGH TIER',
            imageUrl: 'images/lianx_profile.jpg', record: { W: 1, L: 0, D: 0 },
            breakdown: { wins: { KO: 0, UD: 1, SD: 0 }, losses: { KO: 0, UD: 0, SD: 0 } }, matches: []
        },
        'VALEN': {
            country: 'INDONESIA', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'MID TIER',
            imageUrl: 'images/valen_profile.jpg', record: { W: 0, L: 0, D: 0 },
            breakdown: { wins: { KO: 0, UD: 0, SD: 0 }, losses: { KO: 0, UD: 0, SD: 0 } }, matches: []
        },
        'KUREJI': {
            country: 'INDONESIA', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'LOW TIER',
            imageUrl: 'images/kureji_profile.jpg', record: { W: 0, L: 0, D: 0 },
            breakdown: { wins: { KO: 0, UD: 0, SD: 0 }, losses: { KO: 0, UD: 0, SD: 0 } }, matches: []
        },
        'KARIZ': {
            country: 'INDONESIA', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'HIGH TIER',
            imageUrl: 'images/kariz_profile.jpg', record: { W: 0, L: 0, D: 0 },
            breakdown: { wins: { KO: 0, UD: 0, SD: 0 }, losses: { KO: 0, UD: 0, SD: 0 } }, matches: []
        },
        'THONG': {
            country: 'LAOS', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'HIGH TIER',
            imageUrl: 'images/farras_profile.jpg.png', record: { W: 0, L: 0, D: 0 },
            breakdown: { wins: { KO: 0, UD: 0, SD: 0 }, losses: { KO: 0, UD: 0, SD: 0 } }, matches: []
        },
        'ADYY': {
            country: 'MALAYSIA', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'HIGH TIER',
            imageUrl: 'images/adyy_profile.jpg', record: { W: 1, L: 1, D: 0 },
            breakdown: { wins: { KO: 1, UD: 0, SD: 0 }, losses: { KO: 0, UD: 1, SD: 0 } }, matches: []
        },
        'RYUU': {
            country: 'MALAYSIA', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'HIGH TIER',
            imageUrl: 'images/ryuu_profile.jpg', record: { W: 1, L: 1, D: 0 },
            breakdown: { wins: { KO: 0, UD: 1, SD: 0 }, losses: { KO: 1, UD: 0, SD: 0 } }, matches: []
        },
        'MUCHIBEI': {
            country: 'MALAYSIA', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'HIGH TIER',
            imageUrl: 'images/muchibei_profile.jpg', record: { W: 0, L: 1, D: 0 },
            breakdown: { wins: { KO: 0, UD: 0, SD: 0 }, losses: { KO: 1, UD: 0, SD: 0 } }, matches: []
        },
        'RENJI': {
            country: 'MALAYSIA', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'MID TIER',
            imageUrl: 'images/renji_profile.jpg', record: { W: 0, L: 1, D: 0 },
            breakdown: { wins: { KO: 0, UD: 0, SD: 0 }, losses: { KO: 0, UD: 1, SD: 0 } }, matches: []
        },
        'RIM': {
            country: 'MALAYSIA', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'LOW TIER',
            imageUrl: 'images/rim_profile.jpg', record: { W: 0, L: 1, D: 0 },
            breakdown: { wins: { KO: 0, UD: 0, SD: 0 }, losses: { KO: 0, UD: 1, SD: 0 } }, matches: []
        },
        'SHADE': {
            country: 'MALAYSIA', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'HIGH TIER',
            imageUrl: 'images/shade_profile.jpg', record: { W: 1, L: 1, D: 0 },
            breakdown: { wins: { KO: 1, UD: 0, SD: 0 }, losses: { KO: 1, UD: 0, SD: 0 } }, matches: []
        },
        'KYUKI': {
            country: 'MALAYSIA', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'HIGH TIER',
            imageUrl: 'images/kyuki_profile.jpg', record: { W: 1, L: 0, D: 0 },
            breakdown: { wins: { KO: 1, UD: 0, SD: 0 }, losses: { KO: 0, UD: 0, SD: 0 } }, matches: []
        },
        'KLEIN': {
            country: 'VIETNAM', age: 'UNKNOWN', community: 'DBA', status: 'INACTIVE', division: 'HIGH TIER',
            imageUrl: 'images/klein_profile.jpg', record: { W: 0, L: 0, D: 0 },
            breakdown: { wins: { KO: 0, UD: 0, SD: 0 }, losses: { KO: 0, UD: 0, SD: 0 } }, matches: []
        },
        'KAZ': {
            country: 'PHILIPPINES', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'MID TIER',
            imageUrl: 'images/kaz_profile.jpg', record: { W: 0, L: 1, D: 0 },
            breakdown: { wins: { KO: 0, UD: 0, SD: 0 }, losses: { KO: 0, UD: 1, SD: 0 } }, matches: []
        },
        'AARON': {
            country: 'MEXICO', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'HIGH TIER',
            imageUrl: 'images/Aaron.png', record: { W: 1, L: 0, D: 0 },
            breakdown: { wins: { KO: 0, UD: 1, SD: 0 }, losses: { KO: 0, UD: 0, SD: 0 } }, matches: []
        },
        'XAVIER': {
            country: 'BRAZIL', age: 'UNKNOWN', community: 'DBA', status: 'INACTIVE', division: 'MID TIER',
            imageUrl: 'images/xavier_profile.jpg', record: { W: 0, L: 0, D: 0 },
            breakdown: { wins: { KO: 0, UD: 0, SD: 0 }, losses: { KO: 0, UD: 0, SD: 0 } }, matches: []
        },
        'MIKAEL': {
            country: 'BRAZIL', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'HIGH TIER',
            imageUrl: 'images/mikael_profile.jpg', record: { W: 0, L: 0, D: 0 },
            breakdown: { wins: { KO: 0, UD: 0, SD: 0 }, losses: { KO: 0, UD: 0, SD: 0 } }, matches: []
        },
        'RABBITTO': {
            country: 'CANADA', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'HIGH TIER',
            imageUrl: 'images/rabbito_profile.jpg', record: { W: 0, L: 0, D: 0 },
            breakdown: { wins: { KO: 0, UD: 0, SD: 0 }, losses: { KO: 0, UD: 0, SD: 0 } }, matches: []
        },
        'HYRUKI': {
            country: 'ITALY', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'HIGH TIER',
            imageUrl: 'images/hyruki_profile.jpg', record: { W: 0, L: 0, D: 0 },
            breakdown: { wins: { KO: 0, UD: 0, SD: 0 }, losses: { KO: 0, UD: 0, SD: 0 } }, matches: []
        },
        'LARNEX': {
            country: 'FRANCE', age: 'UNKNOWN', community: 'DBA', status: 'INACTIVE', division: 'MID TIER',
            imageUrl: 'images/larnex_profile.jpg', record: { W: 0, L: 0, D: 0 },
            breakdown: { wins: { KO: 0, UD: 0, SD: 0 }, losses: { KO: 0, UD: 0, SD: 0 } }, matches: []
        },
        'IULIAN': {
            country: 'ROMANIA', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'LOW TIER',
            imageUrl: 'images/iulian_profile.jpg', record: { W: 0, L: 0, D: 0 },
            breakdown: { wins: { KO: 0, UD: 0, SD: 0 }, losses: { KO: 0, UD: 0, SD: 0 } }, matches: []
        },
        'HOMURA KIN': {
            country: 'RUSSIA', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'MID TIER',
            imageUrl: 'images/homura_kin_profile.jpg', record: { W: 0, L: 0, D: 0 },
            breakdown: { wins: { KO: 0, UD: 0, SD: 0 }, losses: { KO: 0, UD: 0, SD: 0 } }, matches: []
        },
        'YULZ CLOVER': {
            country: 'UNKNOWN', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'MID TIER',
            imageUrl: 'images/yulz_clover_profile.jpg', record: { W: 1, L: 0, D: 0 },
            breakdown: { wins: { KO: 0, UD: 1, SD: 0 }, losses: { KO: 0, UD: 0, SD: 0 } }, matches: []
        },
        'RAJU': {
            country: 'UNKNOWN', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'HIGH TIER',
            imageUrl: 'images/raju_profile.jpg', record: { W: 0, L: 1, D: 0 },
            breakdown: { wins: { KO: 0, UD: 0, SD: 0 }, losses: { KO: 0, UD: 1, SD: 0 } }, matches: []
        }
    };

    const matches = [
        { event: 'DBA 1', debater1: 'HIROO', debater2: 'RENJI', winner: 'HIROO', loser: 'RENJI', tier: 'Mid Tier', method: 'UD' },
        { event: 'DBA 1', debater1: 'ZOGRATIS', debater2: 'MUCHIBEI', winner: 'ZOGRATIS', loser: 'MUCHIBEI', tier: 'High Tier', method: 'KO' },
        { event: 'DBA 1', debater1: 'ARYANWT', debater2: 'RIM', winner: 'ARYANWT', loser: 'RIM', tier: 'Low Tier', method: 'UD' },
        { event: 'DBA 1', debater1: 'THINZEL', debater2: 'SHADE', winner: 'SHADE', loser: 'THINZEL', tier: 'Low Tier', method: 'KO' },
        { event: 'DBA 1', debater1: 'RANZT', debater2: 'RYUU', winner: 'RANZT', loser: 'RYUU', tier: 'Mid Tier', method: 'KO' },
        { event: 'DBA 1', debater1: 'LIANX', debater2: 'ADYY', winner: 'LIANX', loser: 'ADYY', tier: 'High Tier', method: 'UD' },
        { event: 'DBA 2', debater1: 'RAJU', debater2: 'RYUU', winner: 'RYUU', loser: 'RAJU', tier: 'High Tier', method: 'UD' },
        { event: 'DBA 2', debater1: 'SHADE', debater2: 'KYUKI', winner: 'KYUKI', loser: 'SHADE', tier: 'High Tier', method: 'KO' },
        { event: 'DBA 2', debater1: 'AHENG', debater2: 'PRATAMA', winner: 'PRATAMA', loser: 'AHENG', tier: 'High Tier', method: 'UD' },
        { event: 'DBA 2', debater1: 'ADYY', debater2: 'ZOGRATIS', winner: 'ADYY', loser: 'ZOGRATIS', tier: 'High Tier', method: 'KO' },
        { event: 'DBA 2', debater1: 'ARYANWT', debater2: 'AARON', winner: 'AARON', loser: 'ARYANWT', tier: 'High Tier', method: 'UD' },
        { event: 'DBA Special Match', debater1: 'YULZ CLOVER', debater2: 'KAZ', winner: 'YULZ CLOVER', loser: 'KAZ', tier: 'Mid Tier', method: 'UD' },
    ];


    // --- FUNGSI UTAMA ---
    function getFlagUrl(countryName) {
        const countryFlags = {
            'INDONESIA': 'https://flagcdn.com/id.svg',
            'MALAYSIA': 'https://flagcdn.com/my.svg',
            'LAOS': 'https://flagcdn.com/la.svg',
            'VIETNAM': 'https://flagcdn.com/vn.svg',
            'PHILIPPINES': 'https://flagcdn.com/ph.svg',
            'MEXICO': 'https://flagcdn.com/mx.svg',
            'BRAZIL': 'https://flagcdn.com/br.svg',
            'CANADA': 'https://flagcdn.com/ca.svg',
            'ITALY': 'https://flagcdn.com/it.svg',
            'FRANCE': 'https://flagcdn.com/fr.svg',
            'ROMANIA': 'https://flagcdn.com/ro.svg',
            'RUSSIA': 'https://flagcdn.com/ru.svg',
            'UNKNOWN': 'https://flagcdn.com/un.svg', // Tambahan untuk negara tidak dikenal
        };
        return countryFlags[countryName] || '';
    }

    // Fungsi untuk mengelompokkan debater berdasarkan divisi
    function groupDebatersByDivision() {
        const divisions = {};
        for (const debaterName in debatersData) {
            const debater = debatersData[debaterName];
            const division = debater.division;
            if (!divisions[division]) {
                divisions[division] = [];
            }
            divisions[division].push(debaterName);
        }
        return divisions;
    }

    // Fungsi untuk menghasilkan daftar peringkat (hanya untuk rankings.html)
    function generateRankings() {
        const rankingsContainer = document.getElementById('rankings-container');
        if (!rankingsContainer) return;

        const divisions = groupDebatersByDivision();

        for (const division in divisions) {
            const rankingList = document.createElement('div');
            rankingList.className = 'ranking-list';
            rankingList.innerHTML = `<h3>DBA ${division.toUpperCase()} RANKINGS</h3>`;

            const sortedDebaters = divisions[division].sort((a, b) => {
                const winsA = debatersData[a].record.W;
                const winsB = debatersData[b].record.W;
                const lossesA = debatersData[a].record.L;
                const lossesB = debatersData[b].record.L;

                if (winsB !== winsA) {
                    return winsB - winsA;
                }
                return lossesA - lossesB;
            });

            sortedDebaters.forEach((debaterName, index) => {
                const debater = debatersData[debaterName];
                const rankingItem = document.createElement('div');
                rankingItem.className = 'ranking-item';

                let itemContent = '';

                if (index === 0) {
                    itemContent = `
                        <div class="ranking-number">#1</div>
                        <div class="debater-info first-place-info">
                            <img class="profile-image" src="${debater.imageUrl}" alt="${debaterName}">
                            <div class="name-record">
                                <span class="name">${debaterName}</span>
                                <span class="record">${debater.record.W}-${debater.record.L}-${debater.record.D}</span>
                            </div>
                        </div>
                        <img class="country-flag" src="${getFlagUrl(debater.country)}" alt="${debater.country}">
                    `;
                } else {
                    itemContent = `
                        <div class="ranking-number">${index + 1}</div>
                        <div class="debater-info">
                            <span class="name">${debaterName}</span>
                            <img class="country-flag" src="${getFlagUrl(debater.country)}" alt="${debater.country}">
                        </div>
                    `;
                }

                rankingItem.innerHTML = itemContent;
                rankingList.appendChild(rankingItem);
            });

            rankingsContainer.appendChild(rankingList);
        }
    }

    // Fungsi untuk menghasilkan card pertandingan (hanya untuk index.html)
    function generateMatches() {
        const matchesContainer = document.getElementById('matches-container');
        if (!matchesContainer) return;

        matches.forEach(match => {
            const matchCard = document.createElement('div');
            matchCard.className = 'match-card';
            
            const debater1 = debatersData[match.debater1];
            const debater2 = debatersData[match.debater2];

            matchCard.innerHTML = `
                <div class="match-images">
                    <img src="${debater1.imageUrl}" alt="${match.debater1}" style="${match.winner === match.debater1 ? 'filter: none;' : 'filter: grayscale(100%);'}">
                    <img src="${debater2.imageUrl}" alt="${match.debater2}" style="${match.winner === match.debater2 ? 'filter: none;' : 'filter: grayscale(100%);'}">
                </div>
                <div class="match-details">
                    <div class="match-title">${match.debater1} vs ${match.debater2}</div>
                    <div class="match-info">
                        ${match.winner} MENANG | ${match.tier} | ${match.method}
                    </div>
                </div>
            `;
            matchesContainer.appendChild(matchCard);
        });
    }

    // Logika untuk menjalankan fungsi yang sesuai dengan halaman
    if (document.getElementById('matches-container')) {
        generateMatches();
    } else if (document.getElementById('rankings-container')) {
        generateRankings();
    }
});

