document.addEventListener('DOMContentLoaded', () => {

    const debatersData = {
        'HIROO': {
            country: 'INDONESIA', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'MID TIER',
            imageUrl: 'images/Hiroo.JPEG.png', record: { W: 2, L: 0, D: 0 },
            breakdown: { wins: { KO: 1, UD: 1, SD: 0 }, losses: { KO: 0, UD: 0, SD: 0 } },
            matches: [
                { opponent: 'RENJI', result: 'WIN', event: 'DBA 1', round: 3, time: '2:36', method: 'UD' }
            ]
        },
        'RANZT': {
            country: 'INDONESIA', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'MID TIER',
            imageUrl: 'images/ranzt_profile.jpg', record: { W: 1, L: 0, D: 0 },
            breakdown: { wins: { KO: 1, UD: 0, SD: 0 }, losses: { KO: 0, UD: 0, SD: 0 } },
            matches: [
                { opponent: 'RYUU', result: 'WIN', event: 'DBA 1', round: 1, time: '0:45', method: 'KO' }
            ]
        },
        'ZOGRATIS': {
            country: 'INDONESIA', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'HIGH TIER',
            imageUrl: 'images/zogratis_profile.jpg', record: { W: 1, L: 1, D: 0 },
            breakdown: { wins: { KO: 1, UD: 0, SD: 0 }, losses: { KO: 1, UD: 0, SD: 0 } },
            matches: [
                { opponent: 'MUCHIBEI', result: 'WIN', event: 'DBA 1', round: 2, time: '1:12', method: 'KO' },
                { opponent: 'ADYY', result: 'LOSE', event: 'DBA 2', round: 3, time: '1:50', method: 'KO' }
            ]
        },
        'PRATAMA': {
            country: 'INDONESIA', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'HIGH TIER',
            imageUrl: 'images/pratama_profile.jpg', record: { W: 1, L: 0, D: 0 },
            breakdown: { wins: { KO: 0, UD: 1, SD: 0 }, losses: { KO: 0, UD: 0, SD: 0 } },
            matches: [
                { opponent: 'AHENG', result: 'WIN', event: 'DBA 2', round: 3, time: '2:50', method: 'UD' }
            ]
        },
        'AHENG': {
            country: 'INDONESIA', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'HIGH TIER',
            imageUrl: 'images/aheng_profile.jpg', record: { W: 0, L: 1, D: 0 },
            breakdown: { wins: { KO: 0, UD: 0, SD: 0 }, losses: { KO: 0, UD: 1, SD: 0 } },
            matches: [
                { opponent: 'PRATAMA', result: 'LOSE', event: 'DBA 2', round: 3, time: '2:50', method: 'UD' }
            ]
        },
        'ARYANWT': {
            country: 'INDONESIA', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'HIGH TIER',
            imageUrl: 'images/aryanwt_profile.jpg', record: { W: 1, L: 1, D: 0 },
            breakdown: { wins: { KO: 0, UD: 1, SD: 0 }, losses: { KO: 0, UD: 1, SD: 0 } },
            matches: [
                { opponent: 'RIM', result: 'WIN', event: 'DBA 1', round: 3, time: '2:40', method: 'UD' },
                { opponent: 'AARON', result: 'LOSE', event: 'DBA 2', round: 3, time: '2:59', method: 'UD' }
            ]
        },
        'THINZEL': {
            country: 'INDONESIA', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'LOW TIER',
            imageUrl: 'images/thinzel_profile.jpg', record: { W: 0, L: 1, D: 0 },
            breakdown: { wins: { KO: 0, UD: 0, SD: 0 }, losses: { KO: 1, UD: 0, SD: 0 } },
            matches: [
                { opponent: 'SHADE', result: 'LOSE', event: 'DBA 1', round: 3, time: '1:50', method: 'KO' }
            ]
        },
        'LIANX': {
            country: 'INDONESIA', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'HIGH TIER',
            imageUrl: 'images/lianx_profile.jpg', record: { W: 1, L: 0, D: 0 },
            breakdown: { wins: { KO: 0, UD: 1, SD: 0 }, losses: { KO: 0, UD: 0, SD: 0 } },
            matches: [
                { opponent: 'ADYY', result: 'WIN', event: 'DBA 1', round: 3, time: '2:55', method: 'UD' }
            ]
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
            breakdown: { wins: { KO: 1, UD: 0, SD: 0 }, losses: { KO: 0, UD: 1, SD: 0 } },
            matches: [
                { opponent: 'LIANX', result: 'LOSE', event: 'DBA 1', round: 3, time: '2:55', method: 'UD' },
                { opponent: 'ZOGRATIS', result: 'WIN', event: 'DBA 2', round: 3, time: '1:50', method: 'KO' }
            ]
        },
        'RYUU': {
            country: 'MALAYSIA', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'HIGH TIER',
            imageUrl: 'images/ryuu_profile.jpg', record: { W: 1, L: 1, D: 0 },
            breakdown: { wins: { KO: 0, UD: 1, SD: 0 }, losses: { KO: 1, UD: 0, SD: 0 } },
            matches: [
                { opponent: 'RANZT', result: 'LOSE', event: 'DBA 1', round: 1, time: '0:45', method: 'KO' },
                { opponent: 'RAJU', result: 'WIN', event: 'DBA 2', round: 3, time: '2:20', method: 'UD' }
            ]
        },
        'MUCHIBEI': {
            country: 'MALAYSIA', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'HIGH TIER',
            imageUrl: 'images/muchibei_profile.jpg', record: { W: 0, L: 1, D: 0 },
            breakdown: { wins: { KO: 0, UD: 0, SD: 0 }, losses: { KO: 1, UD: 0, SD: 0 } },
            matches: [
                { opponent: 'ZOGRATIS', result: 'LOSE', event: 'DBA 1', round: 2, time: '1:12', method: 'KO' }
            ]
        },
        'RENJI': {
            country: 'MALAYSIA', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'MID TIER',
            imageUrl: 'images/renji_profile.jpg', record: { W: 0, L: 1, D: 0 },
            breakdown: { wins: { KO: 0, UD: 0, SD: 0 }, losses: { KO: 0, UD: 1, SD: 0 } },
            matches: [
                { opponent: 'HIROO', result: 'LOSE', event: 'DBA 1', round: 3, time: '2:36', method: 'UD' }
            ]
        },
        'RIM': {
            country: 'MALAYSIA', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'LOW TIER',
            imageUrl: 'images/rim_profile.jpg', record: { W: 0, L: 1, D: 0 },
            breakdown: { wins: { KO: 0, UD: 0, SD: 0 }, losses: { KO: 0, UD: 1, SD: 0 } },
            matches: [
                { opponent: 'ARYANWT', result: 'LOSE', event: 'DBA 1', round: 3, time: '2:40', method: 'UD' }
            ]
        },
        'SHADE': {
            country: 'MALAYSIA', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'HIGH TIER',
            imageUrl: 'images/shade_profile.jpg', record: { W: 1, L: 1, D: 0 },
            breakdown: { wins: { KO: 1, UD: 0, SD: 0 }, losses: { KO: 1, UD: 0, SD: 0 } },
            matches: [
                { opponent: 'THINZEL', result: 'WIN', event: 'DBA 1', round: 3, time: '1:50', method: 'KO' },
                { opponent: 'KYUKI', result: 'LOSE', event: 'DBA 2', round: 1, time: '0:50', method: 'KO' }
            ]
        },
        'KYUKI': {
            country: 'MALAYSIA', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'HIGH TIER',
            imageUrl: 'images/kyuki_profile.jpg', record: { W: 1, L: 0, D: 0 },
            breakdown: { wins: { KO: 1, UD: 0, SD: 0 }, losses: { KO: 0, UD: 0, SD: 0 } },
            matches: [
                { opponent: 'SHADE', result: 'WIN', event: 'DBA 2', round: 1, time: '0:50', method: 'KO' }
            ]
        },
        'KLEIN': {
            country: 'VIETNAM', age: 'UNKNOWN', community: 'DBA', status: 'INACTIVE', division: 'HIGH TIER',
            imageUrl: 'images/klein_profile.jpg', record: { W: 0, L: 0, D: 0 },
            breakdown: { wins: { KO: 0, UD: 0, SD: 0 }, losses: { KO: 0, UD: 0, SD: 0 } }, matches: []
        },
        'KAZ': {
            country: 'PHILIPPINES', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'MID TIER',
            imageUrl: 'images/kaz_profile.jpg', record: { W: 0, L: 1, D: 0 },
            breakdown: { wins: { KO: 0, UD: 0, SD: 0 }, losses: { KO: 0, UD: 1, SD: 0 } },
            matches: [
                { opponent: 'YULZ CLOVER', result: 'LOSE', event: 'DBA Special Match', round: 3, time: '2:59', method: 'UD' }
            ]
        },
        'AARON': {
            country: 'MEXICO', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'HIGH TIER',
            imageUrl: 'images/Aaron.png', record: { W: 1, L: 0, D: 0 },
            breakdown: { wins: { KO: 0, UD: 1, SD: 0 }, losses: { KO: 0, UD: 0, SD: 0 } },
            matches: [
                { opponent: 'ARYANWT', result: 'WIN', event: 'DBA 2', round: 3, time: '2:59', method: 'UD' }
            ]
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
            breakdown: { wins: { KO: 0, UD: 1, SD: 0 }, losses: { KO: 0, UD: 0, SD: 0 } },
            matches: [
                { opponent: 'KAZ', result: 'WIN', event: 'DBA Special Match', round: 3, time: '2:59', method: 'UD' }
            ]
        },
        'RAJU': {
            country: 'UNKNOWN', age: 'UNKNOWN', community: 'DBA', status: 'ACTIVE', division: 'HIGH TIER',
            imageUrl: 'images/raju_profile.jpg', record: { W: 0, L: 1, D: 0 },
            breakdown: { wins: { KO: 0, UD: 0, SD: 0 }, losses: { KO: 0, UD: 1, SD: 0 } },
            matches: [
                { opponent: 'RYUU', result: 'LOSE', event: 'DBA 2', round: 3, time: '2:20', method: 'UD' }
            ]
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
            'UNKNOWN': 'https://flagcdn.com/un.svg',
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

    // Fungsi untuk menghasilkan daftar peringkat
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
                const rankingItem = document.createElement('a');
                rankingItem.className = 'ranking-item';
                rankingItem.href = `profile.html?name=${encodeURIComponent(debaterName)}`;

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

    // Fungsi untuk menghasilkan card pertandingan
    function generateMatches() {
        const matchesContainer = document.getElementById('matches-container');
        if (!matchesContainer) return;

        matches.forEach(match => {
            const matchCard = document.createElement('a');
            matchCard.className = 'match-card';
            matchCard.href = `profile.html?name=${encodeURIComponent(match.winner)}`;

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

    // Fungsi untuk menghasilkan halaman profil
    function generateProfilePage() {
        const profileContainer = document.getElementById('profile-container');
        if (!profileContainer) return;

        const urlParams = new URLSearchParams(window.location.search);
        const debaterName = urlParams.get('name');
        const debater = debatersData[debaterName];

        if (!debater) {
            profileContainer.innerHTML = `<p>Debater not found.</p>`;
            document.getElementById('profile-title').innerText = 'Debater not found';
            return;
        }

        document.getElementById('profile-title').innerText = `${debaterName} Profile`;

        const recordTitle = debater.division === 'Kickstriking' ? 'Kickstriking Record' : 'Fight Record';
        
        const profileContent = `
            <div class="profile-header-image" style="background-image: url('${debater.imageUrl}')"></div>
            <div class="profile-info-card">
                <div class="profile-status">
                    <div class="division-title">${debater.division.toUpperCase()} DIVISION</div>
                    <div class="status-indicator ${debater.status.toLowerCase()}">${debater.status}</div>
                </div>
                <h1 class="debater-name">${debaterName}</h1>
                <div class="debater-details">
                    <div class="detail-item">
                        <span class="detail-label">COUNTRY</span>
                        <span class="detail-value">${debater.country}</span>
                        <img class="country-flag" src="${getFlagUrl(debater.country)}" alt="${debater.country}">
                    </div>
                </div>
            </div>

            <div class="record-card">
                <h2>DBA RECORD</h2>
                <div class="record-stats">
                    <div class="stat-box win">
                        <span class="stat-number">${debater.record.W}</span>
                        <span class="stat-label">WIN</span>
                    </div>
                    <div class="stat-box loss">
                        <span class="stat-number">${debater.record.L}</span>
                        <span class="stat-label">LOSS</span>
                    </div>
                    <div class="stat-box draw">
                        <span class="stat-number">${debater.record.D}</span>
                        <span class="stat-label">DRAW</span>
                    </div>
                </div>
                <div class="record-by-method">
                    <div class="method-stat">
                        <span>KO: ${debater.breakdown.wins.KO}</span>
                    </div>
                    <div class="method-stat">
                        <span>UD: ${debater.breakdown.wins.UD}</span>
                    </div>
                    <div class="method-stat">
                        <span>SD: ${debater.breakdown.wins.SD}</span>
                    </div>
                </div>
            </div>

            <div class="match-history-card">
                <h2>DBA RECORD</h2>
                ${debater.matches.length > 0 ? debater.matches.map(match => `
                    <div class="match-history-item">
                        <div class="match-info-text">
                            <span class="opponent-name">VS ${match.opponent.toUpperCase()}</span>
                            <div class="match-details-small">
                                <span>Round ${match.round} | Time ${match.time} | Method ${match.method}</span>
                            </div>
                        </div>
                        <div class="match-result ${match.result.toLowerCase()}">
                            ${match.result}
                        </div>
                    </div>
                `).join('') : '<p>No match history available.</p>'}
            </div>
        `;

        profileContainer.innerHTML = profileContent;
    }

    // Logika untuk menjalankan fungsi yang sesuai dengan halaman
    if (document.getElementById('matches-container')) {
        generateMatches();
    } else if (document.getElementById('rankings-container')) {
        generateRankings();
    } else if (document.getElementById('profile-container')) {
        generateProfilePage();
    }
});
