// ── PLAYER DATA ──
const players = [
  {
    name: "Rohit Sharma", role: "bat", roleLabel: "Batter (Captain)", num: "45",
    photo: "https://imgs.search.brave.com/kqUIk4XcvZVYx6Ivb7_MAWPy5L1BUd4uHAd-mpuOE9s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE3/ODc0MDI3OC9waG90/by9pbmRpYXMtY2Fw/dGFpbi1yb2hpdC1z/aGFybWEtcmVhY3Rz/LWR1cmluZy1hLWNl/cmVtb255LWF0LXRo/ZS1lbmQtb2YtdGhl/aXItZmlyc3QtdGVz/dC1jcmlja2V0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1z/ZjQ1ci0ydnpKbWZ1/UDVObTlwRDQ4bUNr/SHlieUtEYnNLTmhl/ZTFCdXp3PQ",
    color: "#004BA0", initials: "RS",
    stats: [
      { val: "6607", key: "IPL Runs" },
      { val: "31.06", key: "Average" },
      { val: "132.4", key: "Strike Rate" },
      { val: "2", key: "IPL Centuries" }
    ],
    bio: "<strong>Rohit Sharma</strong> is the most successful IPL captain in history, leading Mumbai Indians to five titles. A natural match-winner, the Hitman's ability to switch gears and accelerate at will makes him one of T20 cricket's most feared openers. Born in Nagpur, Rohit has been the backbone of MI since 2011 and remains the heartbeat of the team.",
    pstat1: "6607", pstat2: "31.06", pstatk1: "Runs", pstatk2: "Avg"
  },
  {
    name: "Jasprit Bumrah", role: "bowl", roleLabel: "Bowler", num: "93",
    photo: "https://imgs.search.brave.com/oSTPlUSOri5ywysQlPRzqxYrE8yvSI4m7-vhAvdzRlI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudG9paW1nLmNv/bS90aHVtYi9tc2lk/LTEyMDAzODg3NSxp/bWdzaXplLTUyMzc2/LHdpZHRoLTQwMCxy/ZXNpemVtb2RlLTQv/YnVtcmFoLW1pLXBo/b3RvLmpwZw",
    color: "#001A40", initials: "JB",
    stats: [
      { val: "160+", key: "IPL Wickets" },
      { val: "7.58", key: "Economy" },
      { val: "6/19", key: "Best Figures" },
      { val: "2", key: "Purple Caps" }
    ],
    bio: "<strong>Jasprit Bumrah</strong> is widely regarded as the world's best fast bowler across all formats. His unorthodox action, disguised yorkers, and ability to bowl at pace make him virtually unplayable in the death overs. Bumrah has been the cornerstone of MI's bowling attack and remains the primary wicket-taking weapon.",
    pstat1: "160+", pstat2: "7.58", pstatk1: "Wkts", pstatk2: "Econ"
  },
  {
    name: "Suryakumar Yadav", role: "bat", roleLabel: "Batter (VC)", num: "63",
    photo: "https://imgs.search.brave.com/nhMQY23oEzeql1H4LXz3DfdUTJztU6lWKOXWsw2HhNg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vNTAvMjg0ODUw/LTA1MC1FM0QwNEJB/QS9JbmRpYW4tQ3Jp/Y2tldC1UZWFtLUNh/cHRhaW4tU3VyeWFr/dW1hci1ZYWRhdi1E/dXJpbmctSUNDLU1l/bnMtVDIwLUNyaWNr/ZXQtV29ybGQtQ3Vw/LTIwMjYuanBnP3c9/NDAwJmg9MzAwJmM9/Y3JvcA",
    color: "#E63946", initials: "SKY",
    stats: [
      { val: "3000+", key: "IPL Runs" },
      { val: "33.1", key: "Average" },
      { val: "145.9", key: "Strike Rate" },
      { val: "#1", key: "T20I Ranking" }
    ],
    bio: "<strong>Suryakumar Yadav</strong> is the world's No. 1 ranked T20I batter, known for his 360-degree batting and ability to hit to all parts of the ground. SKY's audacious stroke play and composure under pressure have made him one of the most exciting batters in world cricket. He was key in MI's 2020 title triumph.",
    pstat1: "3000+", pstat2: "145.9", pstatk1: "Runs", pstatk2: "SR"
  },
  {
    name: "Hardik Pandya", role: "ar", roleLabel: "All-Rounder", num: "228",
    photo: "https://pbs.twimg.com/media/GkDrhkhaAAAI3Qt.jpg",
    color: "#C49A00", initials: "HP",
    stats: [
      { val: "1600+", key: "Runs" },
      { val: "50+", key: "Wickets" },
      { val: "145.2", key: "Batting SR" },
      { val: "8.58", key: "Economy" }
    ],
    bio: "<strong>Hardik Pandya</strong> is one of cricket's premier all-rounders — a destructive lower-order batter and effective medium-fast bowler who can change the course of a match in a single over. His match-winning ability in crunch moments has been central to MI's title wins. He returned to MI in 2024 and leads the team alongside Rohit.",
    pstat1: "1600+", pstat2: "50+", pstatk1: "Runs", pstatk2: "Wkts"
  },
  {
    name: "Ishan Kishan", role: "wk", roleLabel: "Wicket-Keeper Batter", num: "32",
    photo: "https://ipltable.in/wp-content/uploads/2024/02/image-16-700x700.jpeg",
    color: "#3A225D", initials: "IK",
    stats: [
      { val: "1800+", key: "IPL Runs" },
      { val: "28.4", key: "Average" },
      { val: "138.7", key: "Strike Rate" },
      { val: "30+", key: "Dismissals" }
    ],
    bio: "<strong>Ishan Kishan</strong> is a dynamic left-handed wicket-keeper batter known for his explosive start with the bat. His ability to hit the ball hard from ball one makes him a dangerous top-order weapon. Behind the stumps, his reflexes and agility are second to none. Ishan is one of the most exciting young talents in Indian cricket.",
    pstat1: "1800+", pstat2: "138.7", pstatk1: "Runs", pstatk2: "SR"
  },
  {
    name: "Tilak Varma", role: "bat", roleLabel: "Batter", num: "8",
    photo: "https://documents.iplt20.com/ipl/IPLHeadshot2025/993.png",
    color: "#0F6E56", initials: "TV",
    stats: [
      { val: "800+", key: "IPL Runs" },
      { val: "35.2", key: "Average" },
      { val: "141.3", key: "Strike Rate" },
      { val: "3", key: "Fifties" }
    ],
    bio: "<strong>Tilak Varma</strong> is one of the brightest young talents to emerge from Indian cricket in recent years. A stylish left-handed batter from Hyderabad, he made an immediate impact in IPL 2022 and has only grown stronger since. His ability to play in the middle overs and anchor innings makes him invaluable to MI's batting lineup.",
    pstat1: "800+", pstat2: "35.2", pstatk1: "Runs", pstatk2: "Avg"
  },
  {
    name: "Gerald Coetzee", role: "bowl", roleLabel: "Bowler", num: "76",
    photo: "https://www.mumbaiindians.com/static-assets/waf-images/21/a4/f5/4-3/592-444/Vo0Ujmy871.jpg",
    color: "#8B0000", initials: "GC",
    stats: [
      { val: "30+", key: "IPL Wickets" },
      { val: "7.84", key: "Economy" },
      { val: "155+", key: "Max Speed km/h" },
      { val: "3/18", key: "Best Figures" }
    ],
    bio: "<strong>Gerald Coetzee</strong> is a South African fast bowler who burst onto the IPL scene with his raw pace and ability to bowl with serious heat. Touching 155km/h regularly, Coetzee's aggressive short-pitch bowling and lethal yorkers make him a fearsome weapon, especially in the powerplay. He is MI's overseas pace spearhead.",
    pstat1: "30+", pstat2: "7.84", pstatk1: "Wkts", pstatk2: "Econ"
  },
  {
    name: "Piyush Chawla", role: "bowl", roleLabel: "Leg-Spin Bowler", num: "21",
    photo: "https://documents.iplt20.com/ipl/IPLHeadshot2024/149.png",
    color: "#533EB0", initials: "PC",
    stats: [
      { val: "180+", key: "Career Wickets" },
      { val: "7.59", key: "Economy" },
      { val: "3/19", key: "Best Figures" },
      { val: "2", key: "Seasons at MI" }
    ],
    bio: "<strong>Piyush Chawla</strong> is one of the most experienced spinners in IPL history. His leg-spin and googly have troubled the world's best batters across his decorated career. Now at MI, Chawla brings tremendous experience and guile to the spin department, offering crucial breakthroughs in the middle overs.",
    pstat1: "180+", pstat2: "7.59", pstatk1: "Wkts", pstatk2: "Econ"
  },
  {
    name: "Naman Dhir", role: "bat", roleLabel: "Batter", num: "19",
    photo: "https://documents.iplt20.com/ipl/IPLHeadshot2025/3107.png",
    color: "#1a6b3c", initials: "ND",
    stats: [
      { val: "400+", key: "IPL Runs" },
      { val: "29.1", key: "Average" },
      { val: "152.3", key: "Strike Rate" },
      { val: "2", key: "Fifties" }
    ],
    bio: "<strong>Naman Dhir</strong> is a hard-hitting right-handed batter from Himachal Pradesh known for his clean ball-striking. His explosive stroke play in the lower order has made him a valuable asset. Dhir is capable of turning matches with his aggressive batting style and is a bright prospect for the future.",
    pstat1: "400+", pstat2: "152.3", pstatk1: "Runs", pstatk2: "SR"
  },
  {
    name: "Mohammad Nabi", role: "ar", roleLabel: "All-Rounder", num: "17",
    photo: "https://documents.iplt20.com/ipl/IPLHeadshot2024/217.png",
    color: "#1a3a6e", initials: "MN",
    stats: [
      { val: "500+", key: "T20 Runs" },
      { val: "100+", key: "T20 Wkts" },
      { val: "130.1", key: "Batting SR" },
      { val: "7.11", key: "Economy" }
    ],
    bio: "<strong>Mohammad Nabi</strong> is Afghanistan's most experienced cricketer and one of the finest T20 all-rounders in the world. His off-spin is supremely effective in the middle overs, while his lower-order hitting has won matches. Nabi's experience in leagues worldwide makes him a seasoned IPL performer.",
    pstat1: "500+", pstat2: "7.11", pstatk1: "Runs", pstatk2: "Econ"
  },
  {
    name: "Romario Shepherd", role: "ar", roleLabel: "All-Rounder", num: "55",
    photo: "https://iplcricbet.com/wp-content/uploads/2024/03/Romario-Shepherd.jpg",
    color: "#5a1e00", initials: "RS",
    stats: [
      { val: "300+", key: "IPL Runs" },
      { val: "25+", key: "IPL Wkts" },
      { val: "180.4", key: "Batting SR" },
      { val: "8.62", key: "Economy" }
    ],
    bio: "<strong>Romario Shepherd</strong> is a West Indian power-hitting all-rounder renowned for his six-hitting ability. His staggering batting strike rate and handy medium-pace bowling make him a match-changing finisher. Shepherd's ability to clear the boundary with ease makes him one of the most exciting power hitters in T20 cricket.",
    pstat1: "300+", pstat2: "180.4", pstatk1: "Runs", pstatk2: "SR"
  },
  {
    name: "Vishnu Vinod", role: "wk", roleLabel: "Wicket-Keeper Batter", num: "7",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhLK4BaiptJqBXOVkEjNSXKqGO6hRoIv1yyQ&s",
    color: "#004060", initials: "VV",
    stats: [
      { val: "200+", key: "IPL Runs" },
      { val: "27.8", key: "Average" },
      { val: "136.2", key: "Strike Rate" },
      { val: "18+", key: "Dismissals" }
    ],
    bio: "<strong>Vishnu Vinod</strong> is a Kerala wicket-keeper batter who impressed in domestic cricket before earning his IPL chance. A technically sound batter who can play both anchor and aggressor roles, Vinod is a reliable backup behind the stumps and a calm head in pressure situations.",
    pstat1: "200+", pstat2: "136.2", pstatk1: "Runs", pstatk2: "SR"
  }
];
 
let currentFilter = 'all';
 
function playerPhotoHTML(p, size, borderRadius) {
  const r = borderRadius || '50%';
  const fallback = `<div style="width:${size}px;height:${size}px;border-radius:${r};background:${p.color};display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-size:${Math.round(size*0.3)}px;font-weight:700;color:#fff;flex-shrink:0;">${p.initials}</div>`;
  if (!p.photo) return fallback;
  return `<img src="${p.photo}" alt="${p.name}" style="width:${size}px;height:${size}px;border-radius:${r};object-fit:cover;object-position:top;flex-shrink:0;" onerror="this.outerHTML='${fallback.replace(/'/g,"&#39;")}'" />`;
}
 
function renderPlayers(filter) {
  const grid = document.getElementById('playersGrid');
  const filtered = filter === 'all' ? players : players.filter(p => p.role === filter);
  grid.innerHTML = filtered.map((p) => {
    const bgImage = p.photo
      ? `background: url('${p.photo}') center/cover no-repeat;`
      : `background: linear-gradient(160deg, ${p.color}dd 0%, ${p.color}55 100%);`;
    return `
    <div class="player-card" onclick="openModal(${players.indexOf(p)})">
      <div class="player-img-area" style="${bgImage} height:220px; align-items:flex-end; padding-bottom:0; overflow:hidden; position:relative;">
        <div class="player-role-badge">${p.roleLabel.split(' ')[0]}</div>
        <div class="player-number-bg" style="position:absolute;top:-10px;right:-5px;font-family:var(--font-display);font-size:6rem;font-weight:700;color:rgba(255,255,255,0.12);line-height:1;pointer-events:none;">#${p.num}</div>
        <div style="position:absolute;bottom:0;left:0;right:0;height:60px;background:linear-gradient(transparent,rgba(0,0,0,0.55));"></div>
      </div>
      <div class="player-info">
        <div class="player-name">${p.name}</div>
        <div class="player-role-text">${p.roleLabel}</div>
        <div class="player-stats-row">
          <div class="pstat"><div class="pstat-val">${p.pstat1}</div><div class="pstat-key">${p.pstatk1}</div></div>
          <div class="pstat"><div class="pstat-val">${p.pstat2}</div><div class="pstat-key">${p.pstatk2}</div></div>
        </div>
      </div>
    </div>
  `;
  }).join('');
}

function filterPlayers(role, btn) {
  currentFilter = role;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderPlayers(role);
}
 
renderPlayers('all');
 
// ── MODAL ──
function openModal(idx) {
  const p = players[idx];
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalRole').textContent = p.roleLabel;
  document.getElementById('modalNum').textContent = '#' + p.num;
  // Photo or initials fallback
  const avatarEl = document.getElementById('modalAvatar');
  if (p.photo) {
    avatarEl.innerHTML = '';
    avatarEl.style.background = 'transparent';
    avatarEl.style.overflow = 'hidden';
    const img = document.createElement('img');
    img.src = p.photo;
    img.alt = p.name;
    img.style.cssText = 'width:80px;height:80px;border-radius:50%;object-fit:cover;object-position:top;display:block;';
    img.onerror = function() {
      avatarEl.innerHTML = p.initials;
      avatarEl.style.background = p.color;
      avatarEl.style.color = '#fff';
      avatarEl.style.overflow = '';
    };
    avatarEl.appendChild(img);
  } else {
    avatarEl.innerHTML = p.initials;
    avatarEl.style.background = p.color;
    avatarEl.style.color = '#fff';
  }
  document.getElementById('modalHeader').style.background = `linear-gradient(135deg, ${p.color}, #001A40)`;
  document.getElementById('modalStats').innerHTML = p.stats.map(s => `
    <div class="modal-stat">
      <div class="modal-stat-val">${s.val}</div>
      <div class="modal-stat-key">${s.key}</div>
    </div>
  `).join('');
  document.getElementById('modalBio').innerHTML = p.bio;
  document.getElementById('playerModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
 
function closeModal(e) {
  if (e.target === document.getElementById('playerModal')) {
    document.getElementById('playerModal').classList.remove('open');
    document.body.style.overflow = '';
  }
}
function closeModalBtn() {
  document.getElementById('playerModal').classList.remove('open');
  document.body.style.overflow = '';
}
 
// ── POLL ──
let voted = false;
const votes = [45, 28, 18, 9];
const totalVotes = 4812;
 
function vote(idx) {
  if (voted) return;
  voted = true;
  votes[idx] += 1;
  const total = votes.reduce((a, b) => a + b, 0);
  votes.forEach((v, i) => {
    const pct = Math.round((v / total) * 100);
    document.getElementById('pct' + i).textContent = pct + '%';
    document.querySelectorAll('.poll-option')[i].querySelector('.poll-bar').style.width = pct + '%';
    document.querySelectorAll('.poll-option')[i].classList.add('voted');
  });
  document.getElementById('pollCount').textContent = (totalVotes + 1).toLocaleString() + ' fans voted · Thank you!';
}
 
 
// ── NAV ──
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}
 
// ── NEWS FILTER ──
function filterNews(cat, btn) {
  document.querySelectorAll('#news .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const allCards = document.querySelectorAll('#news [data-cat]');
  const allStrip = document.querySelectorAll('#news .news-strip-item');
  const allTargets = [...allCards, ...allStrip];
  allTargets.forEach(el => {
    if (cat === 'all' || el.dataset.cat === cat) {
      el.style.display = '';
    } else {
      el.style.display = 'none';
    }
  });
}
 
// ── ACTIVE NAV ──
const sections = document.querySelectorAll('section[id], div[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--gold)' : '';
  });
});
