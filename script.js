// ========== DATA ==========
const materials = [
  {icon: "fa-futbol", title: "Ball Control", desc: "Master the art of controlling the ball with all parts of your body. Key techniques include cushioning, trapping, and juggling. Practice 30min daily with both feet. Focus on soft touch and body positioning. Pro players spend 20% of training on ball control alone. Use wall passes to improve reaction time. Keep your eyes up and body balanced."},
  {icon: "fa-bolt", title: "Dribbling Technique", desc: "Develop close ball control at speed. Learn stepovers, body feints, and change of pace. Use cones for slalom drills. Elite dribblers maintain low center of gravity and keep head up to scan field. Practice 4 types: speed, tight, protective, and skill dribbling. Watch Messi and Neymar for inspiration on close control."},
  {icon: "fa-bullseye", title: "Passing Accuracy", desc: "Precision passing wins games. Master short, long, through, and one-touch passing. Technique: lock ankle, follow through, body over ball. Target: 95% accuracy in 20-pass drill. Study angle of pass and weight control. Communication with teammates is key for timing."},
  {icon: "fa-crosshairs", title: "Shooting Technique", desc: "Finish like a pro. Practice instep drive, volley, chip, and curved shots. Focus on non-kicking foot placement and hip rotation. Target 100 shots per session. Study goalkeeper positioning and shot selection. Practice with both feet from different angles."},
  {icon: "fa-hand-paper", title: "First Touch", desc: "A good first touch creates time and space. Practice receiving with foot, thigh, chest, and head. Drill: pass against wall, control, return. Key is body positioning before ball arrives. Stay on your toes and anticipate the ball's trajectory."},
  {icon: "fa-chess", title: "Tactical Awareness", desc: "Understand formations, pressing triggers, and transitions. Study 4-3-3, 4-2-3-1, 3-5-2 systems. Learn when to press, drop, or counter. Watch game film 2hrs weekly. Anticipation separates good from great players. Learn off-ball movement and space creation."},
  {icon: "fa-shield-alt", title: "Defensive Positioning", desc: "Defense is about angles and body shape. Maintain goal-side position, force attackers wide. Learn zonal vs man marking. Practice 1v1, 2v2 defending. Communication with teammates is crucial. Always be between ball and goal."},
  {icon: "fa-dumbbell", title: "Physical Training", desc: "Build explosive power, endurance, and agility. Weekly: 3x strength, 2x cardio, 2x agility, 1x plyometrics. Focus on hamstrings, quads, core. Recovery is part of training. Sleep 8-9hrs for muscle repair. Proper warm-up prevents injuries."},
  {icon: "fa-apple-alt", title: "Nutrition for Footballers", desc: "Fuel your performance. 60% carbs, 25% protein, 15% fats. Hydrate 3-4L daily. Pre-match: pasta, rice 3hrs before. Post-match: protein shake within 30min. Avoid processed food, alcohol, excess sugar. Meal prep helps maintain consistency."},
  {icon: "fa-brain", title: "Mentality & Discipline", desc: "Mental strength wins titles. Practice visualization, goal setting, and resilience. Handle pressure with breathing techniques. Be first to arrive, last to leave. Discipline in diet, sleep, and training separates pros from amateurs. Stay humble but hungry."}
];

const schedule = {
  Monday: [{task: "Sprint Training", dur: "45min", int: "High"}, {task: "Passing Drill", dur: "30min", int: "Medium"}, {task: "Core Workout", dur: "20min", int: "Medium"}],
  Tuesday: [{task: "Tactical Training", dur: "60min", int: "High"}, {task: "Ball Control", dur: "30min", int: "Medium"}, {task: "Stretching", dur: "15min", int: "Low"}],
  Wednesday: [{task: "Strength Training", dur: "60min", int: "High"}, {task: "Shooting Drill", dur: "40min", int: "High"}, {task: "Recovery", dur: "20min", int: "Low"}],
  Thursday: [{task: "Speed & Agility", dur: "45min", int: "High"}, {task: "Small Sided Game", dur: "45min", int: "High"}],
  Friday: [{task: "Technical Skills", dur: "60min", int: "Medium"}, {task: "Set Piece Practice", dur: "30min", int: "Medium"}],
  Saturday: [{task: "Match Simulation", dur: "90min", int: "High"}, {task: "Cool Down", dur: "15min", int: "Low"}],
  Sunday: [{task: "Active Recovery", dur: "30min", int: "Low"}, {task: "Yoga/Stretching", dur: "45min", int: "Low"}, {task: "Mental Training", dur: "20min", int: "Low"}]
};

const positions = [
  {title: "Goalkeeper", role: "Last line of defense, shot stopping, distribution", skills: "Reflexes, positioning, communication, footwork", example: "Manuel Neuer, Alisson Becker"},
  {title: "Center Back", role: "Organize defense, aerial duels, build-up play", skills: "Heading, tackling, reading game, passing", example: "Virgil van Dijk, Rúben Dias"},
  {title: "Full Back", role: "Defend wide areas, support attack, overlap", skills: "Stamina, crossing, 1v1 defending, pace", example: "Trent Alexander-Arnold, Alphonso Davies"},
  {title: "Defensive Midfielder", role: "Shield defense, break up play, distribute", skills: "Tackling, positioning, passing, stamina", example: "Rodri, N'Golo Kanté"},
  {title: "Central Midfielder", role: "Control tempo, link play, box-to-box", skills: "Passing range, vision, work rate, technique", example: "Kevin De Bruyne, Luka Modrić"},
  {title: "Attacking Midfielder", role: "Create chances, score goals, link mid-attack", skills: "Creativity, dribbling, vision, finishing", example: "Jude Bellingham, Bruno Fernandes"},
  {title: "Winger", role: "Stretch defense, provide crosses, score goals", skills: "Pace, dribbling, crossing, finishing", example: "Vinícius Jr, Mohamed Salah"},
  {title: "Striker", role: "Score goals, hold up play, press defenders", skills: "Finishing, positioning, strength, movement", example: "Erling Haaland, Kylian Mbappé"}
];

// HAPUS video Passing Accuracy
const videos = [
  {title: "Defensive Play", url: "https://www.youtube.com/embed/W90mt_Y2NtU"},
  {title: "Neutral Play", url: "https://www.youtube.com/embed/rsMJJCnJ3Rc"},
  {title: "Attacking Play", url: "https://www.youtube.com/embed/ZyRL3TnTrco"},
  {title: "Dribbling Technique", url: "https://www.youtube.com/embed/JsLaa1Agr44"},
  {title: "Finishing Technique", url: "https://www.youtube.com/embed/jy47SRdcomo"}
];

let quizQuestions = JSON.parse(localStorage.getItem('quizQuestions')) || [
  {q: "What is the offside rule?", o: ["Player ahead of ball", "Player ahead of second-last defender", "Player behind goalkeeper"], a: 1},
  {q: "How many players on a team?", o: ["9", "11", "12"], a: 1},
  {q: "What position is Messi?", o: ["Midfielder", "Striker", "Winger/Forward"], a: 2},
  {q: "Duration of a match?", o: ["80min", "90min", "100min"], a: 1},
  {q: "What is a hat-trick?", o: ["3 goals by one player", "3 assists", "3 yellow cards"], a: 0},
  {q: "How many substitutes allowed in pro matches?", o: ["3", "5", "7"], a: 1},
  {q: "What does VAR stand for?", o: ["Video Assistant Referee", "Visual Analysis Replay", "Virtual Arena Review"], a: 0},
  {q: "Penalty spot distance from goal?", o: ["10 yards", "12 yards", "15 yards"], a: 1},
  {q: "Which club has most UCL titles?", o: ["Barcelona", "Bayern Munich", "Real Madrid"], a: 2},
  {q: "What is a clean sheet?", o: ["No goals conceded", "No yellow cards", "No substitutions"], a: 0},
  {q: "Best formation for possession?", o: ["4-4-2", "4-3-3", "5-3-2"], a: 1},
  {q: "Who is known as 'The GOAT'?", o: ["Ronaldo", "Messi", "Neymar"], a: 1},
  {q: "What is a nutmeg?", o: ["Pass between legs", "Header goal", "Long shot"], a: 0},
  {q: "Duration of extra time?", o: ["15min", "20min", "30min"], a: 2},
  {q: "What is a bicycle kick?", o: ["Overhead volley", "Penalty kick", "Free kick"], a: 0},
  {q: "Which position wears gloves?", o: ["Defender", "Goalkeeper", "Midfielder"], a: 1},
  {q: "What is a derby match?", o: ["Final match", "Rival teams match", "Friendly match"], a: 1},
  {q: "How long is a yellow card ban?", o: ["1 match", "2 matches", "Depends on competition"], a: 2},
  {q: "What is counter-attacking?", o: ["Slow buildup", "Quick transition after winning ball", "Parking the bus"], a: 1},
  {q: "Who won 2022 World Cup?", o: ["France", "Argentina", "Brazil"], a: 1}
];

let currentQuiz = 0;
let score = 0;
let quizStarted = false;

// ========== RENDER FUNCTIONS ==========
function renderMaterials(){
  document.getElementById('materialsGrid').innerHTML = materials.map((m, i) => `
    <div class="card reveal">
      <i class="fas ${m.icon}"></i>
      <h3>${m.title}</h3>
      <p>${m.desc.substring(0, 100)}...</p>
      <button class="btn btn-secondary" onclick="openModal(${i})">Read More</button>
    </div>
  `).join('');
}

function openModal(index){
  document.getElementById('modalTitle').textContent = materials[index].title;
  document.getElementById('modalDesc').textContent = materials[index].desc;
  document.getElementById('materialModal').style.display = 'block';
  document.body.style.overflow = 'hidden';
}

// Tutup modal
document.addEventListener('click', (e) => {
  if(e.target.classList.contains('close-modal') || e.target.id === 'materialModal'){
    document.getElementById('materialModal').style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

function renderSchedule(){
  const saved = JSON.parse(localStorage.getItem('trainingProgress')) || {};
  document.getElementById('scheduleContainer').innerHTML = Object.keys(schedule).map(day => `
    <div class="day-card reveal">
      <h3>${day}</h3>
      ${schedule[day].map((item, i) => `
        <div class="checklist-item">
          <input type="checkbox" id="${day}-${i}" ${saved[`${day}-${i}`]? 'checked' : ''}
                 onchange="saveProgress('${day}-${i}', this.checked)">
          <label for="${day}-${i}">${item.task} - ${item.dur} (${item.int} Intensity)</label>
        </div>
      `).join('')}
    </div>
  `).join('');
}

function saveProgress(key, checked){
  let saved = JSON.parse(localStorage.getItem('trainingProgress')) || {};
  saved[key] = checked;
  localStorage.setItem('trainingProgress', JSON.stringify(saved));
}

function renderPositions(){
  document.getElementById('positionsGrid').innerHTML = positions.map(p => `
    <div class="card reveal">
      <h3>${p.title}</h3>
      <p><strong>Role:</strong> ${p.role}</p>
      <p><strong>Key Skills:</strong> ${p.skills}</p>
      <p><strong>Pro Example:</strong> ${p.example}</p>
    </div>
  `).join('');
}

function renderVideos(){
  document.getElementById('videoGrid').innerHTML = videos.map(v => `
    <div class="video-card reveal">
      <h3>${v.title}</h3>
      <iframe src="${v.url}" allowfullscreen></iframe>
    </div>
  `).join('');
}

function renderQuiz(){
  if(!quizStarted){
    document.getElementById('quizContainer').innerHTML = `
      <div style="text-align:center;">
        <h3>20 Questions About Football</h3>
        <p>Test your knowledge and see your score!</p>
        <button class="btn btn-primary" onclick="startQuiz()">Start Quiz</button>
      </div>
    `;
    return;
  }

  if(currentQuiz >= quizQuestions.length){
    document.getElementById('quizContainer').innerHTML = `
      <div style="text-align:center;">
        <h3>Quiz Complete!</h3>
        <h2>Your Score: ${score}/${quizQuestions.length}</h2>
        <button class="btn btn-primary" onclick="restartQuiz()">Restart Quiz</button>
      </div>
    `;
    return;
  }

  const q = quizQuestions[currentQuiz];
  document.getElementById('quizContainer').innerHTML = `
    <div class="progress-bar"><div class="progress-fill" style="width:${(currentQuiz/quizQuestions.length)*100}%"></div></div>
    <p>Question ${currentQuiz+1}/${quizQuestions.length}</p>
    <div class="quiz-question">${q.q}</div>
    ${q.o.map((opt, i) => `<div class="quiz-option" onclick="selectAnswer(${i})">${opt}</div>`).join('')}
  `;
}

function startQuiz(){
  quizStarted = true;
  currentQuiz = 0;
  score = 0;
  renderQuiz();
}

function selectAnswer(i){
  if(i === quizQuestions[currentQuiz].a) score++;
  currentQuiz++;
  setTimeout(renderQuiz, 300);
}

function restartQuiz(){
  quizStarted = false;
  renderQuiz();
}

// ========== ADMIN FUNCTIONS - HAPUS TAB MATERIALS & SCHEDULE ==========
function loginAdmin(){
  const pass = document.getElementById('adminPass').value;
  if(pass === 'admin123'){
    localStorage.setItem('isAdmin', 'true');
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('adminPanel').style.display = 'block';
    renderAdminPanel();
  } else {
    alert('Wrong password! Use: admin123');
  }
}

function logoutAdmin(){
  localStorage.removeItem('isAdmin');
  location.reload();
}

function showTab(tabId){
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  event.target.classList.add('active');
}

function renderAdminPanel(){
  // Cuma sisain Quiz Tab
  document.getElementById('quizTab').innerHTML = `
    <h3>Add/Edit Question</h3>
    <input id="qText" placeholder="Question" style="width:100%;padding:10px;margin:5px 0;">
    <input id="qOpt0" placeholder="Option 1" style="width:100%;padding:10px;margin:5px 0;">
    <input id="qOpt1" placeholder="Option 2" style="width:100%;padding:10px;margin:5px 0;">
    <input id="qOpt2" placeholder="Option 3" style="width:100%;padding:10px;margin:5px 0;">
    <input id="qAns" type="number" placeholder="Correct Answer Index 0-2" style="width:100%;padding:10px;margin:5px 0;">
    <button class="btn btn-primary" onclick="addQuestion()">Save Question</button>
    <div id="questionList" style="margin-top:20px;"></div>
  `;
  renderQuestionList();
}

function addQuestion(){
  const q = document.getElementById('qText').value.trim();
  const o = [document.getElementById('qOpt0').value.trim(), document.getElementById('qOpt1').value.trim(), document.getElementById('qOpt2').value.trim()];
  const a = parseInt(document.getElementById('qAns').value);
  if(q && o[0] && o[1] && o[2] &&!isNaN(a) && a >= 0 && a <= 2){
    quizQuestions.push({q, o, a});
    localStorage.setItem('quizQuestions', JSON.stringify(quizQuestions));
    renderQuestionList();
    document.getElementById('qText').value = '';
    document.getElementById('qOpt0').value = '';
    document.getElementById('qOpt1').value = '';
    document.getElementById('qOpt2').value = '';
    document.getElementById('qAns').value = '';
    alert('Question added!');
  } else {
    alert('Isi semua field dengan benar!');
  }
}

function renderQuestionList(){
  document.getElementById('questionList').innerHTML = quizQuestions.map((q, i) => `
    <div style="margin:1rem 0; padding:1rem; background:var(--gray); border-radius:10px;">
      <strong>${i+1}. ${q.q}</strong> <br>
      Jawaban: ${q.o[q.a]}
      <button onclick="deleteQuestion(${i})" class="btn btn-danger" style="float:right;">Delete</button>
    </div>
  `).join('');
}

function deleteQuestion(i){
  if(confirm('Delete this question?')){
    quizQuestions.splice(i, 1);
    localStorage.setItem('quizQuestions', JSON.stringify(quizQuestions));
    renderQuestionList();
  }
}

// ========== UTILS ==========
function revealOnScroll(){
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if(elementTop < windowHeight - 100) el.classList.add('active');
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Dark Mode
document.getElementById('themeToggle').onclick = () => {
  document.body.classList.toggle('light-mode');
  localStorage.setItem('theme', document.body.classList.contains('light-mode')? 'light' : 'dark');
};

if(localStorage.getItem('theme') === 'light'){
  document.body.classList.add('light-mode');
}

// Mobile Menu
document.querySelector('.hamburger').onclick = () => {
  document.querySelector('.nav-menu').classList.toggle('active');
};

// Feedback Form
document.getElementById('feedbackForm').onsubmit = (e) => {
  e.preventDefault();
  alert('Thank you for your feedback!');
  e.target.reset();
};

// Init
renderMaterials();
renderSchedule();
renderPositions();
renderVideos();
renderQuiz();

if(localStorage.getItem('isAdmin') === 'true'){
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('adminPanel').style.display = 'block';
  renderAdminPanel();
}

// Create Particles
for(let i=0; i<50; i++){
  const particle = document.createElement('div');
  particle.style.position = 'absolute';
  particle.style.width = '2px';
  particle.style.height = '2px';
  particle.style.background = 'var(--neon-blue)';
  particle.style.left = Math.random()*100 + '%';
  particle.style.top = Math.random()*100 + '%';
  particle.style.animation = `float ${3+Math.random()*2}s ease-in-out infinite`;
  particle.style.opacity = '0.3';
  document.getElementById('particles').appendChild(particle);
}