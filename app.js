/**
 * ROBOTEC ONLINE - APLICAÇÃO PRINCIPAL & ROTEADOR SPA
 */

document.addEventListener('DOMContentLoaded', () => {
    // Inicializa a interface de autenticação
    if (typeof AUTH !== 'undefined') {
        AUTH.updateAuthUI();
    }

    // Roteamento inicial baseado no Hash da URL
    const initialHash = window.location.hash.replace('#', '') || 'home';
    router(initialHash);

    // Listener para o botão do Menu Mobile
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', () => {
            document.getElementById('navMenu').classList.toggle('open');
        });
    }

    // Listener para navegação pelas setas do navegador
    window.addEventListener('hashchange', () => {
        const route = window.location.hash.replace('#', '') || 'home';
        router(route);
    });
});

// Roteador Dinâmico para Single Page Application (SPA)
function router(route) {
    const main = document.getElementById('mainContent');
    const navMenu = document.getElementById('navMenu');
    if (navMenu) navMenu.classList.remove('open');

    // Suporte para rotas de detalhes da Metodologia de Trabalho
    if (route.startsWith('metodologia-')) {
        const item = route.replace('metodologia-', '');
        main.innerHTML = renderMetodologiaDetalhePage(item);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    // Suporte para rota detalhada de Projetos Arduino (ex: arduino-proj_ard_01 ou arduino-ard-01)
    if (route.startsWith('arduino-')) {
        const projectId = route.replace('arduino-', '');
        main.innerHTML = renderArduinoProjectDetailPage(projectId);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    // Atualiza links ativos no menu
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${route}`) {
            link.classList.add('active');
        }
    });

    switch (route) {
        case 'home':
            main.innerHTML = renderHomePage();
            break;
        case 'ev3':
            main.innerHTML = renderCategoryPage('EV3', 'LEGO MINDSTORMS EV3', 'Projetos e construções com a plataforma LEGO EV3.');
            break;
        case 'nxt':
            main.innerHTML = renderCategoryPage('NXT', 'LEGO MINDSTORMS NXT', 'Projetos clássicos utilizando o bloco LEGO NXT.');
            break;
        case 'avulsos':
            main.innerHTML = renderCategoryPage('AVULSOS', 'PROJETOS AVULSOS', 'Construções, mecanismos independentes e desafios práticos de robótica.');
            break;
        case 'arduino':
            main.innerHTML = renderCategoryPage('Arduino', 'ARDUINO', 'Projetos eletrônicos, automação e robótica livre.');
            break;
        case 'reciclaveis':
            main.innerHTML = renderCategoryPage('MATERIAIS RECICLÁVEIS', 'MATERIAIS RECICLÁVEIS', 'Sustentabilidade e robótica com materiais reutilizados.');
            break;
        case 'atividades':
            main.innerHTML = renderAtividadesPage();
            break;
        case 'ouvidoria':
            main.innerHTML = renderOuvidoriaPage();
            break;
        case 'links':
            main.innerHTML = renderLinksPage();
            break;
        case 'manuais':
            main.innerHTML = renderManuaisLibraryPage();
            break;
        case 'admin':
            main.innerHTML = renderAdminDashboard();
            break;
        case 'profile':
            main.innerHTML = renderUserProfilePage();
            break;
        case 'conheca-a-robotec':
            main.innerHTML = renderConhecaRobotecPage();
            break;
        default:
            main.innerHTML = renderHomePage();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --------------------------------------------------------------------------
// RENDERIZADORES DE PÁGINAS
// --------------------------------------------------------------------------

function renderHomePage() {
    return `
        <!-- HERO SECTION -->
        <section class="hero-section fade-in">
            <div class="hero-content">
                <span class="hero-badge"><i class="fa-solid fa-microchip"></i> Robótica Educacional</span>
                <h1 class="hero-title">ROBOTEC ONLINE</h1>
                <h2 class="hero-subtitle">Robótica Educacional, Tecnologia e Inovação</h2>
                <p class="hero-description">
                    "Um espaço digital dedicado à robótica educacional, à criatividade, à aprendizagem prática e ao desenvolvimento de projetos tecnológicos."
                </p>
            <div class="hero-actions">
                 <button class="btn btn-primary" onclick="router('ev3')">EXPLORAR PROJETOS</button>
                 <button class="btn btn-secondary" onclick="router('conheca-a-robotec')">CONHEÇA A ROBOTEC</button>
            </div>
            </div>
            <div class="hero-visual">
                <div class="robot-graphic-container">
                    <img src="img/logo-robotec.png" alt="Logo ROBOTEC" class="hero-logo-img">
                </div>
            </div>
        </section>

        <!-- SEÇÃO SOLUÇÃO COM IA -->
        <section class="container fade-in" style="width: 90%; max-width: 1400px; margin: 40px auto 60px;">
            <div class="text-center" style="margin-bottom: 25px;">
                <img src="img/IA.png" alt="logo IA" class="hero-logo-img" style="max-width: 120px; height: auto;">
                <h3 class="section-title text-center" style="text-transform: none; max-width: 800px; margin: 15px auto 10px; line-height: 1.3;">
                    SOLUÇÃO COM A INTELIGÊNCIA ARTIFICIAL - IA
                </h3>
                <p class="section-subtitle text-center" style="margin-bottom: 30px;">
                    IA como auxilio pedagógico e desenvolvimento de ferramentas.
                </p>
            </div>

            <div class="category-grid" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));">
                <!-- Card BNCC -->
                <div class="category-card" style="position: relative; text-align: left; padding: 24px;">
                    <span style="position: absolute; top: 12px; right: 12px; width: 32px; height: 8px; border-radius: 4px; transform: rotate(-12deg);"></span>
                    <h4 style="font-size: 1.4rem; color: #1d4ed8; margin-bottom: 6px;">BNCC</h4>
                    <p style="color: var(--text-main); font-size: 0.95rem;">A Robótica Educacional contribui para o desenvolvimento de competências previstas na BNCC, estimulando o pensamento crítico, a criatividade, a resolução de problemas, a colaboração e o uso consciente da tecnologia.</p>
                </div>

                <!-- Card IA -->
                <div class="category-card" style="position: relative; text-align: left; padding: 24px;">
                    <span style="position: absolute; top: 12px; right: 12px; width: 32px; height: 8px; border-radius: 4px; transform: rotate(-12deg);"></span>
                    <h4 style="font-size: 1.4rem; color: #1d4ed8; margin-bottom: 6px;">IA</h4>
                    <p style="color: var(--text-main); font-size: 0.95rem;">A Inteligência Artificial (IA) amplia as possibilidades de aprendizagem, estimulando a criatividade, a inovação e o desenvolvimento de novas soluções para desafios educacionais e tecnológicos.</p>
                </div>

                <!-- Card Planejamentos -->
                <div class="category-card" style="position: relative; text-align: left; padding: 24px;">
                    <span style="position: absolute; top: 12px; right: 12px; width: 32px; height: 8px; border-radius: 4px; transform: rotate(-12deg);"></span>
                    <h4 style="font-size: 1.4rem; color: #1d4ed8; margin-bottom: 6px;">Planejamentos</h4>
                    <p style="color: var(--text-main); font-size: 0.95rem;">Planejamentos pedagógicos que integram robótica, tecnologia e aprendizagem prática, organizando atividades e projetos de acordo com os objetivos educacionais e as necessidades dos estudantes.</p>
                </div>
            </div>
        </section>

        <!-- EXPLORE POR CATEGORIA -->
        <section class="container" style="width: 90%; max-width: 1400px; margin: 40px auto 0;">
            <h3 class="section-title text-center">EXPLORE A ROBOTEC</h3>
            <p class="section-subtitle text-center">Escolha uma plataforma e comece a criar</p>
            
            <div class="category-grid">
                <div class="category-card">
                    <i class="fa-solid fa-microchip category-icon"></i>
                    <h4>EV3</h4>
                    <p>Explore construções e projetos avançados com LEGO Mindstorms EV3.</p>
                    <br>
                    <button class="btn btn-secondary btn-sm" onclick="router('ev3')">EXPLORAR</button>
                </div>
                <div class="category-card">
                    <i class="fa-solid fa-cubes category-icon"></i>
                    <h4>NXT</h4>
                    <p>Conheça projetos icônicos e fundamentais desenvolvidos com LEGO NXT.</p>
                    <br>
                    <button class="btn btn-secondary btn-sm" onclick="router('nxt')">EXPLORAR</button>
                </div>
                <div class="category-card">
                    <i class="fa-solid fa-bolt category-icon"></i>
                    <h4>ARDUINO</h4>
                    <p>Descubra projetos eletrônicos, prototipagem e automação com Arduino.</p>
                    <br>
                    <button class="btn btn-secondary btn-sm" onclick="router('arduino')">EXPLORAR</button>
                </div>
                <div class="category-card">
                    <i class="fa-solid fa-recycle category-icon"></i>
                    <h4>RECICLÁVEIS</h4>
                    <p>Transforme materiais reutilizáveis em soluções criativas de robótica.</p>
                    <br>
                    <button class="btn btn-secondary btn-sm" onclick="router('reciclaveis')">EXPLORAR</button>
                </div>
            </div>
        </section>
        
        <!-- METODOLOGIA DE TRABALHO -->
        <section class="container" style="width: 90%; max-width: 1400px; margin: 60px auto 0;">
            <h3 class="section-title text-center">METODOLOGIA DE TRABALHO</h3>
            <p class="section-subtitle text-center">Clique em uma proposta pedagógica para ver detalhes</p>      
            <div class="category-grid">
                <div class="category-card" onclick="router('metodologia-grade')" style="cursor: pointer;">
                    <i class="fa-solid fa-graduation-cap category-icon"></i>
                    <h4>ROBÓTICA NA GRADE CURRICULAR</h4>
                    <p>A Robótica Educacional promove aprendizagem prática, desenvolvendo criatividade e raciocínio lógico.</p>
                    <br>
                    <button class="btn btn-secondary btn-sm">VER DETALHES</button>
                </div>
                <div class="category-card" onclick="router('metodologia-campeonatos')" style="cursor: pointer;">
                    <i class="fa-solid fa-trophy category-icon"></i>
                    <h4>CAMPEONATOS INTERNOS</h4>
                    <p>Desafios práticos na escola que incentivam o trabalho em equipe e o espírito esportivo.</p>
                    <br>
                    <button class="btn btn-secondary btn-sm">VER DETALHES</button>
                </div>
                <div class="category-card" onclick="router('metodologia-palestras')" style="cursor: pointer;">
                    <i class="fa-solid fa-chalkboard-user category-icon"></i>
                    <h4>ORIENTAÇÕES E PALESTRAS</h4>
                    <p>Workshops e apresentações sobre tecnologia, inovação e uso consciente das ferramentas digitais.</p>
                    <br>
                    <button class="btn btn-secondary btn-sm">VER DETALHES</button>
                </div>
                <div class="category-card" onclick="router('metodologia-materiais')" style="cursor: pointer;">
                    <i class="fa-solid fa-boxes-packing category-icon"></i>
                    <h4>MATERIAL UTILIZADO</h4>
                    <p>Conheça os kits didáticos, componentes eletrônicos e materiais reutilizáveis utilizados nas aulas.</p>
                    <br>
                    <button class="btn btn-secondary btn-sm">VER DETALHES</button>
                </div>
                <div class="category-card" onclick="router('metodologia-competicoes')" style="cursor: pointer;">
                    <i class="fa-solid fa-robot category-icon"></i>
                    <h4>COMPETIÇÕES</h4>
                    <p>Preparação e dicas para olimpíadas de robótica regionais e nacionais: OBR, FIRA, FLL.</p>
                    <br>
                    <button class="btn btn-secondary btn-sm">VER DETALHES</button>
                </div>
            </div>
        </section>

        <!-- SEÇÃO HISTÓRIA & TIMELINE COMPLETA -->
        <section id="historia" style="background: rgba(255,255,255,0.02); padding: 60px 0; margin-top: 60px;">
            <div style="width: 90%; max-width: 1400px; margin: 0 auto;">
                <h3 class="section-title text-center">Nossa História</h3>
                <p class="section-subtitle text-center">A trajetória da ROBOTEC no ensino da tecnologia e inovação</p>
                
                <div class="timeline">
                    <!-- 2017 -->
                    <div class="timeline-item left">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <span class="timeline-date">2017</span>
                            <h4>O início de um sonho</h4>
                            <p>Nasce a ideia de criar uma pequena empresa dedicada à oferta de cursos de Robótica Educacional, idealizada pelo Professor e Fundador Ademilton Santos.</p>
                        </div>
                    </div>

                    <!-- 2018 -->
                    <div class="timeline-item right">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <span class="timeline-date">2018</span>
                            <h4>Primeiras parcerias</h4>
                            <p>Após meses de planejamento e desenvolvimento de ideias, o Professor Welber Neres integra-se à sociedade. Nesse mesmo ano, a ROBOTEC firma sua primeira parceria para o treinamento da equipe do Colégio FIPE, que participa da OBR 2018 e conquista o 7º lugar. Também iniciamos nossa participação em importantes eventos de tecnologia e robótica, como o Arduino Day e o Mundo SENAI.</p>
                        </div>
                    </div>

                    <!-- 2019 -->
                    <div class="timeline-item left">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <span class="timeline-date">2019</span>
                            <h4>Crescimento e reconhecimento</h4>
                            <p>O trabalho desenvolvido proporciona novas parcerias com instituições de ensino e amplia nossa participação em workshops e competições de robótica. Os resultados começam a se destacar, incluindo a conquista do Prêmio de Inovação.</p>
                        </div>
                    </div>

                    <!-- 2020 -->
                    <div class="timeline-item right">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <span class="timeline-date">2020</span>
                            <h4>Inovação em tempos de pandemia</h4>
                            <p>Com a chegada da pandemia, a ROBOTEC precisou se reinventar rapidamente. As aulas de robótica passaram a ser realizadas on-line, utilizando diferentes ferramentas e plataformas, como Roberta Lab, Minecraft e Tinkercad, além de projetos desenvolvidos com materiais recicláveis.</p>
                        </div>
                    </div>

                    <!-- 2022 -->
                    <div class="timeline-item left">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <span class="timeline-date">2022</span>
                            <h4>O retorno às aulas presenciais</h4>
                            <p>Com a retomada das atividades presenciais, voltamos com novos projetos e muita inovação, utilizando nossos kits LEGO EV3 e NXT. O retorno às competições trouxe resultados expressivos: 1º e 2º lugares no Nível 2, 2º lugar no Nível 1 e uma marca histórica com o 6º lugar na Etapa Nacional da OBR.</p>
                        </div>
                    </div>

                    <!-- 2023 -->
                    <div class="timeline-item right">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <span class="timeline-date">2023</span>
                            <h4>Expansão</h4>
                            <p>A ROBOTEC continua crescendo e amplia sua rede de instituições parceiras, chegando a aproximadamente 10 escolas atendidas. Novas tecnologias passam a fazer parte dos projetos, incluindo tablets, placas Maker e óculos de realidade virtual, ampliando as possibilidades de aprendizagem e inovação.</p>
                        </div>
                    </div>

                    <!-- 2024 -->
                    <div class="timeline-item left">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <span class="timeline-date">2024</span>
                            <h4>Novas tecnologias e metodologias</h4>
                            <p>A busca constante por inovação leva a ROBOTEC a incorporar novas ferramentas, como Studio 2.0 e Tinkercad, além da programação desplugada, com materiais desenvolvidos pelo Professor Ademilton Santos. Nas competições, a ROBOTEC mantém sua presença no pódio, conquistando o 2º lugar no Nível 1 e o reconhecimento de Melhor Escola Privada no Nível 2.</p>
                        </div>
                    </div>

                    <!-- 2025 -->
                    <div class="timeline-item right">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <span class="timeline-date">2025</span>
                            <h4>Resultados e expansão</h4>
                            <p>A rede de escolas parceiras continua crescendo e os resultados nas competições permanecem em destaque. Em 2025, conquistamos o 1º lugar no Nível 1 e novamente o reconhecimento de Melhor Escola Privada no Nível 2, consolidando uma trajetória marcada por educação, inovação, tecnologia e conquistas.</p>
                        </div>
                    </div>
                </div>

                <!-- CONCLUSÃO DA HISTÓRIA -->
                <div class="category-card" style="margin-top: 50px; text-align: center; padding: 30px; background: rgba(255, 255, 255, 0.95);">
                    <h4 style="font-size: 1.4rem; color: var(--primary-blue); margin-bottom: 12px; text-align: center;">🚀 Uma história construída com inovação</h4>
                    <p style="font-size: 1.05rem; line-height: 1.7; max-width: 1000px; margin: 0 auto;">
                        Desde 2017, a ROBOTEC transforma desafios em oportunidades de aprendizagem. Nossa trajetória é construída por professores, estudantes, escolas parceiras e equipes que acreditam no poder da robótica para transformar a educação.
                    </p>
                </div>
            </div>
        </section>

        <!-- MISSÃO, VISÃO E OBJETIVOS -->
        <section style="width: 90%; max-width: 1400px; margin: 80px auto;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
                <div class="category-card">
                    <i class="fa-solid fa-bullseye category-icon"></i>
                    <h4>Missão</h4>
                    <p>"Promover o ensino da robótica educacional como ferramenta de aprendizagem, criatividade, inovação e desenvolvimento de competências."</p>
                </div>
                <div class="category-card">
                    <i class="fa-solid fa-eye category-icon"></i>
                    <h4>Visão</h4>
                    <p>Ser referência digital no ecossistema de robótica educacional, conectando alunos e educadores à cultura maker de forma acessível e segura.</p>
                </div>
            </div>
        </section>
    `;
}

// --------------------------------------------------------------------------
// RENDERIZADOR UNIVERSAL DE CATEGORIAS (EV3, NXT, AVULSOS E ARDUINO)
// --------------------------------------------------------------------------

function renderCategoryPage(catKey, title, subtitle) {
    const projects = (typeof ROBOTEC_DB !== 'undefined' && ROBOTEC_DB.projects) 
        ? ROBOTEC_DB.projects.filter(p => p.categoria === catKey) 
        : [];

    const isArduino = catKey === 'Arduino';

    return `
        <div class="container fade-in" style="width: 90%; max-width: 1400px; margin: 40px auto;">
            <h2 class="section-title">${title}</h2>
            <p class="section-subtitle">${subtitle}</p>

            ${catKey === 'MATERIAIS RECICLÁVEIS' ? `
                <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid var(--success-green); padding: 20px; border-radius: var(--radius-md); margin-bottom: 40px;">
                    <i class="fa-solid fa-leaf" style="color: var(--success-green); font-size: 1.5rem;"></i>
                    <strong>Destaque em Sustentabilidade:</strong> "Transformando materiais que seriam descartados em soluções criativas para aprender robótica."
                </div>
            ` : ''}

            <div class="projects-grid">
                ${projects.length > 0 ? projects.map(p => `
                    <div class="project-card">
                        <div class="project-thumb">
                            <img src="${p.imagem}" alt="${p.nome}" onerror="this.src='https://via.placeholder.com/300x200?text=Projeto+Robotec'">
                            <span class="project-badge">${p.dificuldade}</span>
                        </div>
                        <div class="project-body">
                            <h3 class="project-title">${p.nome}</h3>
                            <p class="project-desc">${p.descricao}</p>
                            
                            <div class="project-meta">
                                ${p.pecas_aprox ? `<span><i class="fa-solid fa-puzzle-piece"></i> ~${p.pecas_aprox} peças</span>` : ''}
                                ${p.componentes ? `<span><i class="fa-solid fa-microchip"></i> ${p.componentes.length || p.componentes} itens</span>` : ''}
                                ${p.materiais ? `<span><i class="fa-solid fa-recycle"></i> Reutilizável</span>` : ''}
                            </div>

                            ${isArduino ? `
                                <button class="btn btn-primary btn-block" onclick="router('arduino-${p.id}')">
                                    <i class="fa-solid fa-microchip"></i> VER PROJETO
                                </button>
                            ` : `
                                <button class="btn btn-primary btn-block" onclick="openManualViewer('${p.manual_id}')">
                                    <i class="fa-solid fa-file-pdf"></i> VER MANUAL
                                </button>
                            `}
                        </div>
                    </div>
                `).join('') : '<p>Nenhum projeto encontrado nesta categoria.</p>'}
            </div>
        </div>
    `;
}

// --------------------------------------------------------------------------
// PÁGINA DETALHADA DO PROJETO ARDUINO
// --------------------------------------------------------------------------

function renderArduinoProjectDetailPage(projectId) {
    let list = [];
    if (typeof ROBOTEC_DB !== 'undefined') {
        list = ROBOTEC_DB.arduino_projects || ROBOTEC_DB.projects.filter(p => p.categoria === 'Arduino');
    }

    // Busca o projeto pelo ID exato ou pela terminação numérica do ID
    const p = list.find(item => item.id === projectId || item.id === `proj_${projectId}` || item.id.endsWith(projectId)) || list[0];

    if (!p) return `<div class="container text-center" style="padding: 50px;"><h2>Projeto Arduino não encontrado.</h2></div>`;

    return `
    <div class="arduino-page-container" style="max-width: 1200px; margin: 20px auto; padding: 20px;">
        <button class="btn btn-secondary btn-sm" onclick="router('arduino')" style="margin-bottom: 20px;">
            <i class="fa-solid fa-arrow-left"></i> VOLTAR PARA OS PROJETOS ARDUINO
        </button>

        <div class="project-title-banner" style="background-color: #0284c7; color: #fff; text-align: center; padding: 12px 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="margin: 0; font-size: 1.8rem;">${p.numero || '01'}. ${p.nome}</h2>
        </div>

        <div class="project-intro-row" style="display: flex; align-items: center; justify-content: space-between; gap: 20px; margin-bottom: 25px;">
            <p style="flex: 1; font-size: 1.1rem; line-height: 1.6; margin: 0; color: #334155;">${p.introducao || p.descricao}</p>
            <div class="difficulty-card" style="background: #fff; border: 2px solid #cbd5e1; border-radius: 12px; padding: 15px 30px; text-align: center; min-width: 200px;">
                <span style="display: block; font-size: 0.8rem; font-weight: 700; color: #0d1b2a; margin-bottom: 5px;">● NÍVEL DE DIFICULDADE</span>
                <span style="font-size: 1.3rem; font-weight: 800; color: #16a34a;">${p.dificuldade}</span>
            </div>
        </div>

        <div class="arduino-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px;">
            <div class="info-blocks-col" style="display: flex; flex-direction: column; gap: 15px;">
                <div class="info-card" style="background: #fff; border: 2px solid #16a34a; border-radius: 12px; overflow: hidden;">
                    <div style="background: #16a34a; color: #fff; font-weight: 800; padding: 8px 15px;"><i class="fa-solid fa-bullseye"></i> OBJETIVO</div>
                    <div style="padding: 15px;"><p style="margin: 0;">${p.objetivo || 'Aprender conceitos de automação e eletrônica.'}</p></div>
                </div>

                <div class="info-card" style="background: #fff; border: 2px solid #0284c7; border-radius: 12px; overflow: hidden;">
                    <div style="background: #0284c7; color: #fff; font-weight: 800; padding: 8px 15px;"><i class="fa-solid fa-microchip"></i> COMPONENTES / PEÇAS</div>
                    <div style="padding: 15px;">
                        <ul style="margin: 0; padding-left: 20px;">${(p.componentes || []).map(c => `<li>${c}</li>`).join('')}</ul>
                    </div>
                </div>

                <div class="info-card" style="background: #fff; border: 2px solid #06b6d4; border-radius: 12px; overflow: hidden;">
                    <div style="background: #06b6d4; color: #fff; font-weight: 800; padding: 8px 15px;"><i class="fa-solid fa-link"></i> LIGAÇÕES</div>
                    <div style="padding: 15px;">
                        <ul style="margin: 0; padding-left: 20px;">${(p.ligacoes || []).map(l => `<li>${l}</li>`).join('')}</ul>
                    </div>
                </div>

                <div class="info-card" style="background: #fff; border: 2px solid #eab308; border-radius: 12px; overflow: hidden;">
                    <div style="background: #eab308; color: #fff; font-weight: 800; padding: 8px 15px;"><i class="fa-solid fa-gear"></i> COMO FUNCIONA</div>
                    <div style="padding: 15px;"><p style="margin: 0;">${p.como_funciona || 'O circuito opera conforme o código gravado na placa.'}</p></div>
                </div>
            </div>

            <div class="diagram-col" style="display: flex; flex-direction: column; gap: 15px;">
                <div class="diagram-box" style="background: #fff; border: 2px solid #06b6d4; border-radius: 12px; overflow: hidden;">
                    <div style="background: #06b6d4; color: #fff; font-weight: 800; padding: 10px 15px;"><i class="fa-solid fa-link"></i> ESQUEMA DE LIGAÇÃO</div>
                    <div style="padding: 15px; text-align: center;">
                        <img src="${p.esquema_imagem || p.imagem}" alt="${p.nome}" style="max-width: 100%; height: auto;" onerror="this.src='https://via.placeholder.com/500x300?text=Esquema+Arduino'">
                    </div>
                </div>

                <button onclick="toggleCodeSection()" style="width: 100%; background: #fff; border: 2px solid #cbd5e1; border-radius: 12px; padding: 15px 25px; font-size: 1.3rem; font-weight: 900; color: #0f172a; display: flex; justify-content: space-between; align-items: center; cursor: pointer;">
                    <span>PROGRAMAÇÃO</span>
                    <i class="fa-solid fa-chevron-down"></i>
                </button>

                <div id="codePanel" style="display: none; background: #0d1b2a; border-radius: 12px; border: 2px solid #0284c7; overflow: hidden;">
                    <div style="display: flex; justify-content: space-between; align-items: center; background: #1e293b; padding: 10px 20px; color: #38bdf8; font-weight: 700; font-size: 0.85rem;">
                        <span><i class="fa-solid fa-code"></i> CÓDIGO FONTE (ARDUINO C++)</span>
                        <button onclick="copyArduinoCode()" style="background: #0284c7; color: #fff; border: none; padding: 5px 12px; border-radius: 6px; cursor: pointer;">Copiar</button>
                    </div>
                    <pre style="margin: 0; padding: 20px; color: #f8fafc; font-family: monospace; overflow-x: auto;"><code id="arduinoCodeText">${p.codigo || '// Código C++ de exemplo'}</code></pre>
                </div>
            </div>
        </div>
    </div>
    `;
}

function toggleCodeSection() {
    const panel = document.getElementById('codePanel');
    if (panel) {
        panel.style.display = (panel.style.display === 'none' || panel.style.display === '') ? 'block' : 'none';
    }
}

function copyArduinoCode() {
    const codeText = document.getElementById('arduinoCodeText').innerText;
    navigator.clipboard.writeText(codeText).then(() => {
        alert('Código Arduino copiado!');
    });
}

// --------------------------------------------------------------------------
// RENDERIZADOR DETALHADO DA METODOLOGIA DE TRABALHO
// --------------------------------------------------------------------------

function renderMetodologiaDetalhePage(item) {
    const detalhes = {
        'grade': {
            titulo: 'ROBÓTICA NA GRADE CURRICULAR',
            icone: 'fa-graduation-cap',
            subtitulo: 'Integração tecnológica e aprendizagem prática nas aulas regulares',
            descricao: 'A inclusão da robótica na grade curricular visa proporcionar uma formação integral aos alunos, alinhada à BNCC de Computação. Através de encontros semanais, os estudantes vivenciam a teoria estudada em sala através de modelos mecânicos e programação.',
            pontos: [
                'Contextualização de Matemática, Física e Lógica com montagens práticas.',
                'Desenvolvimento da autonomia, raciocínio lógico e resolução de problemas.',
                'Aulas dinâmicas que incentivam a cooperação em equipes de até 4 integrantes.',
                'Propostas alinhadas aos pilares da BNCC de Computação.'
            ]
        },
        'campeonatos': {
            titulo: 'CAMPEONATOS INTERNOS',
            icone: 'fa-trophy',
            subtitulo: 'Estímulo ao engajamento, liderança e resolução de problemas sob pressão',
            descricao: 'Os campeonatos internos promovidos pela ROBOTEC criam um ambiente festivo e desafiador dentro do colégio. Os alunos aplicam suas ideias para superar arenas, labirintos e desafios de resgate criados pelos educadores.',
            pontos: [
                'Aplicação prática de estratégias de programação e engenharia robótica.',
                'Aprimoramento de habilidades socioemocionais como resiliência e cooperação.',
                'Engajamento de toda a comunidade escolar e incentivo à cultura maker.',
                'Identificação de novos talentos para equipes de competição da escola.'
            ]
        },
        'palestras': {
            titulo: 'ORIENTAÇÕES E PALESTRAS',
            icone: 'fa-chalkboard-user',
            subtitulo: 'Capacitação, uso ético da tecnologia e cultura de inovação',
            descricao: 'A ROBOTEC oferece encontros pedagógicos, workshops para professores e palestras direcionadas aos estudantes sobre o papel da inteligência artificial, segurança digital, carreira em STEM e robótica.',
            pontos: [
                'Formação continuada de professores para integração de tecnologias em sala.',
                'Orientações sobre o uso consciente da Inteligência Artificial na educação.',
                'Palestrantes especializados em robótica, engenharia e educação STEM.',
                'Desenvolvimento de visão crítica sobre o futuro do trabalho e tecnologia.'
            ]
        },
        'materiais': {
            titulo: 'MATERIAL UTILIZADO',
            icone: 'fa-boxes-packing',
            subtitulo: 'Acesso a tecnologias de ponta, eletrônica e soluções sustentáveis',
            descricao: 'Utilizamos uma rica diversidade de materiais pedagógicos para garantir que o aprendizado seja acessível e completo, englobando desde kits comerciais renomados até sucata eletrônica e prototipagem.',
            pontos: [
                'Kits LEGO MINDSTORMS EV3 e NXT para robótica estrutural e programação.',
                'Placas Arduino e sensores eletrônicos para introdução à automação e IoT.',
                'Uso de materiais recicláveis promovendo a consciência ambiental e sustentabilidade.',
                'Software de simulação e modelagem 3D (Pybricks, Studio 2.0, Tinkercad).'
            ]
        },
        'competicoes': {
            titulo: 'COMPETIÇÕES E OLIMPÍADAS',
            icone: 'fa-robot',
            subtitulo: 'Preparação técnica para OBR, FIRA, FLL e torneios regionais',
            descricao: 'Preparamos equipes escolares para participar das principais olimpíadas de robótica do país. Nossos alunos aprendem a desenvolver algoritmos avançados (como seguidores de linha com controle PID) e estruturas resistentes.',
            pontos: [
                'Treinamento específico para a Olimpíada Brasileira de Robótica (OBR).',
                'Simulações de arena de resgate e modalidades de Cabo de Guerra da FIRA.',
                'Elaboração de cadernos de engenharia e diários de bordo de projeto.',
                'Desenvolvimento de pensamento de alta performance e liderança em equipe.'
            ],
            conquistas: [
                '4 vezes Campeão da Etapa Estadual da OBR',
                '4 vezes Vice-Campeão da Etapa Estadual da OBR',
                '2 Vezes Terceiro Lugar',
                'Campeão da OBR RACE',
                'Prêmios Extras: melhor design, melhor escola privada',
                '6º Lugar da Etapa Nacional da OBR',
                'Maior Nota do POSTER na Etapa Nacional da OBR',
                'Bi-Campeão da modalidade Cabo de GUerra na Etapa Estadual do FIRA',
                'Vice campeão da modalidade Cabo de GUerra na Etapa Estadual do FIRA',
                'Terceiro Lugar na modalidade MISSÃO IMPOSSÍVEL na Etapa Estadual do FIRA'
            ]
        }
    };

    const dados = detalhes[item] || detalhes['grade'];

    return `
        <div class="container fade-in" style="width: 90%; max-width: 900px; margin: 40px auto;">
            <button class="btn btn-secondary btn-sm" onclick="router('home')" style="margin-bottom: 25px;">
                <i class="fa-solid fa-arrow-left"></i> VOLTAR PARA A HOME
            </button>

            <div class="category-card" style="padding: 40px; text-align: left;">
                <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 20px; flex-wrap: wrap;">
                    <i class="fa-solid ${dados.icone}" style="font-size: 3rem; color: var(--primary-blue);"></i>
                    <div>
                        <h2 style="font-size: 1.8rem; color: #0f172a; margin: 0;">${dados.titulo}</h2>
                        <span style="color: var(--primary-blue); font-weight: 600; font-size: 0.9rem;">METODOLOGIA ROBOTEC</span>
                    </div>
                </div>

                <p class="section-subtitle" style="text-align: left; margin-bottom: 25px; font-weight: 600;">
                    ${dados.subtitulo}
                </p>

                <p style="font-size: 1.05rem; line-height: 1.8; color: var(--text-main); margin-bottom: 30px;">
                    ${dados.descricao}
                </p>

                <h4 style="font-size: 1.15rem; color: #0f172a; margin-bottom: 15px; border-bottom: 2px solid var(--border-color); padding-bottom: 8px;">
                    <i class="fa-solid fa-check-double" style="color: var(--primary-blue);"></i> Destaques e Objetivos desta Proposta:
                </h4>

                <ul style="list-style: none; padding: 0; margin-bottom: 30px;">
                    ${dados.pontos.map(ponto => `
                        <li style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 12px; font-size: 0.98rem;">
                            <i class="fa-solid fa-circle-check" style="color: var(--success-green); margin-top: 4px;"></i>
                            <span>${ponto}</span>
                        </li>
                    `).join('')}
                </ul>

                ${dados.conquistas ? `
                    <h4 style="font-size: 1.15rem; color: #0f172a; margin-top: 25px; margin-bottom: 15px; border-bottom: 2px solid var(--border-color); padding-bottom: 8px;">
                        <i class="fa-solid fa-trophy" style="color: #f59e0b;"></i> CONQUISTAS:
                    </h4>

                    <ul style="list-style: none; padding: 0;">
                        ${dados.conquistas.map(conquista => `
                            <li style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 10px; font-size: 0.98rem;">
                                <i class="fa-solid fa-award" style="color: var(--primary-blue); margin-top: 4px;"></i>
                                <span>${conquista}</span>
                            </li>
                        `).join('')}
                    </ul>
                ` : ''}

                <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px;">
                    <span style="font-size: 0.85rem; color: var(--text-muted);">
                        <i class="fa-solid fa-circle-info"></i> Metodologia desenvolvida pela Equipe Pedagógica ROBOTEC
                    </span>
                    <button class="btn btn-primary btn-sm" onclick="router('home')">
                        VOLTAR À HOME
                    </button>
                </div>
            </div>
        </div>
    `;
}

function renderAtividadesPage() {
    const atividades = (typeof ROBOTEC_DB !== 'undefined' && ROBOTEC_DB.atividades) ? ROBOTEC_DB.atividades : [];
    return `
        <div class="container fade-in" style="width: 90%; max-width: 1400px; margin: 40px auto;">
            <h2 class="section-title">ATIVIDADES EDUCACIONAIS</h2>
            <p class="section-subtitle">Propostas pedagógicas para sala de aula ou laboratório</p>

            <div class="projects-grid">
                ${atividades.map(a => `
                    <div class="category-card">
                        <span class="project-badge">${a.nivel}</span>
                        <h3 style="margin-top: 15px;">${a.titulo}</h3>
                        <p style="color: var(--text-muted); margin: 10px 0;">${a.descricao}</p>
                        <p><small>⏱ Tempo: ${a.tempo_estimado} | 🎯 Faixa Etária: ${a.faixa_etaria}</small></p>
                        <br>
                        <button class="btn btn-secondary btn-sm" onclick="alert('Roteiro da atividade solicitado ao professor.')">VER ROTEIRO COMPLETO</button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderOuvidoriaPage() {
    return `
        <div class="container fade-in" style="width: 90%; max-width: 600px; margin: 40px auto;">
            <h2 class="section-title text-center">OUVIDORIA</h2>
            <p class="section-subtitle text-center">Envie suas sugestões, dúvidas ou manifestações</p>

            <div class="category-card">
                <form onsubmit="handleOuvidoriaSubmit(event)">
                    <div class="form-group">
                        <label>Nome Completo</label>
                        <input type="text" id="ouvNome" required placeholder="Seu nome">
                    </div>
                    <div class="form-group">
                        <label>E-mail para Contato</label>
                        <input type="email" id="ouvEmail" required placeholder="seu@email.com">
                    </div>
                    <div class="form-group">
                        <label>Tipo de Manifestação</label>
                        <select id="ouvTipo">
                            <option value="Sugestão">Sugestão</option>
                            <option value="Elogio">Elogio</option>
                            <option value="Reclamação">Reclamação</option>
                            <option value="Dúvida">Dúvida</option>
                            <option value="Solicitação">Solicitação</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Assunto</label>
                        <input type="text" id="ouvAssunto" required placeholder="Assunto da mensagem">
                    </div>
                    <div class="form-group">
                        <label>Mensagem</label>
                        <textarea id="ouvMensagem" rows="5" required placeholder="Escreva sua mensagem aqui..."></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">ENVIAR MANIFESTAÇÃO</button>
                </form>
            </div>
        </div>
    `;
}

function renderLinksPage() {
    const links = (typeof ROBOTEC_DB !== 'undefined' && ROBOTEC_DB.links) ? ROBOTEC_DB.links : [];
    return `
        <div class="container fade-in" style="width: 90%; max-width: 1400px; margin: 40px auto;">
            <h2 class="section-title">LINKS ÚTEIS E RECURSOS</h2>
            <p class="section-subtitle">Acesso rápido a portais de robótica, software e comunidades maker</p>

            <div class="category-grid">
                ${links.map(l => `
                    <div class="category-card">
                        <i class="fa-solid ${l.icone} category-icon"></i>
                        <h4>${l.nome}</h4>
                        <p>${l.descricao}</p>
                        <br>
                        <a href="${l.url}" target="_blank" class="btn btn-secondary btn-sm">ACESSAR <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderManuaisLibraryPage() {
    const manuais = (typeof ROBOTEC_DB !== 'undefined' && ROBOTEC_DB.manuais) ? ROBOTEC_DB.manuais : [];
    return `
        <div class="container fade-in" style="width: 90%; max-width: 1400px; margin: 40px auto;">
            <h2 class="section-title">BIBLIOTECA DE MANUAIS PROTEGIDOS</h2>
            <p class="section-subtitle">Consulte as instruções de montagem e guiões de robótica</p>
            <div class="projects-grid">
                ${manuais.map(m => `
                    <div class="category-card">
                        <i class="fa-solid fa-file-pdf category-icon"></i>
                        <h4>${m.titulo}</h4>
                        <p>${m.descricao || 'Manual protegido de montagem e programação.'}</p>
                        <br>
                        <button class="btn btn-primary btn-sm" onclick="openManualViewer('${m.id}')">ABRIR MANUAL</button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderUserProfilePage() {
    const user = (typeof AUTH !== 'undefined') ? AUTH.getCurrentUser() : null;
    if (!user) {
        return `<div class="container text-center" style="padding: 100px 0;">
            <h3>Faça login para visualizar seu perfil.</h3>
            <br>
            <button class="btn btn-primary" onclick="openLoginModal()">FAZER LOGIN</button>
        </div>`;
    }

    return `
        <div class="container fade-in" style="width: 90%; max-width: 600px; margin: 40px auto;">
            <h2 class="section-title text-center">PERFIL DO USUÁRIO</h2>
            <div class="category-card">
                <h3>${user.nome}</h3>
                <p><strong>E-mail:</strong> ${user.email}</p>
                <p><strong>Perfil:</strong> ${user.perfil}</p>
                <br>
                <button class="btn btn-danger btn-block" onclick="AUTH.logout()">SAIR DA CONTA</button>
            </div>
        </div>
    `;
}

function renderAdminDashboard() {
    const user = (typeof AUTH !== 'undefined') ? AUTH.getCurrentUser() : null;
    if (!user || user.perfil !== 'ADMINISTRADOR') {
        return `<div class="container text-center" style="padding: 100px 0;"><h3>Acesso restrito a Administradores.</h3></div>`;
    }

    const db = typeof ROBOTEC_DB !== 'undefined' ? ROBOTEC_DB : { users: [], projects: [], manuais: [], acessos_logs: [] };

    return `
        <div class="container fade-in" style="width: 90%; max-width: 1400px; margin: 40px auto;">
            <h2 class="section-title">PAINEL ADMINISTRATIVO</h2>
            <p class="section-subtitle">Gestão de usuários, conteúdos e auditoria de manuais</p>

            <div class="dashboard-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; margin-bottom: 30px;">
                <div class="category-card">
                    <i class="fa-solid fa-users category-icon"></i>
                    <div>
                        <div style="font-size: 1.8rem; font-weight: bold;">${db.users.length}</div>
                        <div>Usuários Cadastrados</div>
                    </div>
                </div>
                <div class="category-card">
                    <i class="fa-solid fa-robot category-icon"></i>
                    <div>
                        <div style="font-size: 1.8rem; font-weight: bold;">${db.projects.length}</div>
                        <div>Projetos Publicados</div>
                    </div>
                </div>
                <div class="category-card">
                    <i class="fa-solid fa-file-shield category-icon"></i>
                    <div>
                        <div style="font-size: 1.8rem; font-weight: bold;">${db.manuais.length}</div>
                        <div>Manuais Protegidos</div>
                    </div>
                </div>
                <div class="category-card">
                    <i class="fa-solid fa-eye category-icon"></i>
                    <div>
                        <div style="font-size: 1.8rem; font-weight: bold;">${db.acessos_logs.length}</div>
                        <div>Acessos Registrados</div>
                    </div>
                </div>
            </div>

            <div class="category-card">
                <h4>Auditoria Recente de Acesso aos Manuais</h4>
                <br>
                <table style="width: 100%; text-align: left; border-collapse: collapse;">
                    <thead>
                        <tr style="border-bottom: 1px solid var(--border-color);">
                            <th style="padding: 10px;">ID Acesso</th>
                            <th>ID Usuário</th>
                            <th>ID Manual</th>
                            <th>Data/Hora</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${db.acessos_logs.length === 0 ? '<tr><td colspan="4" style="padding: 15px;">Nenhum acesso registrado nesta sessão.</td></tr>' : ''}
                        ${db.acessos_logs.map(log => `
                            <tr style="border-bottom: 1px solid rgba(0,0,0,0.05);">
                                <td style="padding: 10px;">${log.id}</td>
                                <td>${log.usuario_id}</td>
                                <td>${log.manual_id}</td>
                                <td>${new Date(log.data_hora).toLocaleString()}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// --------------------------------------------------------------------------
// MODAIS, ABERTURA DE MANUAIS E BUSCA GLOBAL
// --------------------------------------------------------------------------

function openManualViewer(manualId) {
    if (typeof VIEWER !== 'undefined' && VIEWER.open) {
        VIEWER.open(manualId);
    } else {
        alert(`Abrindo o visualizador protegido para o manual: ${manualId}`);
    }
}

function openLoginModal(msg) {
    if (msg) alert(msg);
    const modal = document.getElementById('loginModal');
    if (modal) modal.classList.remove('hidden');
}

function closeLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) modal.classList.add('hidden');
}

function handleLoginSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const pass = document.getElementById('loginPassword').value;

    if (typeof AUTH !== 'undefined') {
        const res = AUTH.login(email, pass);
        if (res.success) {
            closeLoginModal();
            alert(`Bem-vindo, ${res.user.nome}!`);
        } else {
            alert(res.message);
        }
    }
}

function handleOuvidoriaSubmit(e) {
    e.preventDefault();
    if (typeof ROBOTEC_DB !== 'undefined' && ROBOTEC_DB.ouvidoria_logs) {
        ROBOTEC_DB.ouvidoria_logs.push({
            id: "ouv_" + Date.now(),
            nome: document.getElementById('ouvNome').value,
            email: document.getElementById('ouvEmail').value,
            tipo: document.getElementById('ouvTipo').value,
            assunto: document.getElementById('ouvAssunto').value,
            mensagem: document.getElementById('ouvMensagem').value,
            data: new Date().toISOString()
        });
    }
    alert("Manifestação enviada com sucesso à equipe da ROBOTEC!");
    router('home');
}

function handleGlobalSearch(term) {
    const dropdown = document.getElementById('searchResults');
    if (!dropdown) return;

    if (!term || term.trim().length < 2) {
        dropdown.classList.add('hidden');
        return;
    }

    const termLower = term.toLowerCase();
    const projects = (typeof ROBOTEC_DB !== 'undefined' && ROBOTEC_DB.projects) ? ROBOTEC_DB.projects : [];
    const matches = projects.filter(p => p.nome.toLowerCase().includes(termLower) || p.categoria.toLowerCase().includes(termLower));

    if (matches.length > 0) {
        dropdown.innerHTML = matches.map(p => `
            <div class="search-result-item" onclick="openManualViewer('${p.manual_id}'); document.getElementById('searchResults').classList.add('hidden');">
                <span class="search-result-title">${p.nome}</span>
                <span class="search-result-cat">Categoria: ${p.categoria}</span>
            </div>
        `).join('');
        dropdown.classList.remove('hidden');
    } else {
        dropdown.innerHTML = `<div class="search-result-item">Nenhum projeto encontrado.</div>`;
        dropdown.classList.remove('hidden');
    }
}

// --------------------------------------------------------------------------
// RENDERIZADOR DA PÁGINA "CONHEÇA A ROBOTEC"
// --------------------------------------------------------------------------

function renderConhecaRobotecPage() {
    return `
        <div class="container fade-in" style="width: 90%; max-width: 900px; margin: 40px auto;">
            <button class="btn btn-secondary btn-sm" onclick="router('home')" style="margin-bottom: 25px;">
                <i class="fa-solid fa-arrow-left"></i> VOLTAR PARA A HOME
            </button>

            <div class="category-card" style="padding: 40px; text-align: left;">
                <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 25px; flex-wrap: wrap;">
                    <i class="fa-solid fa-robot" style="font-size: 3rem; color: var(--primary-blue);"></i>
                    <div>
                        <h2 style="font-size: 1.8rem; color: #0f172a; margin: 0;">ROBOTEC — Robótica Educacional</h2>
                        <span style="color: var(--primary-blue); font-weight: 600; font-size: 0.9rem;">SOBRE A PLATAFORMA</span>
                    </div>
                </div>

                <p style="font-size: 1.05rem; line-height: 1.8; color: var(--text-main); margin-bottom: 15px;">
                    A <strong>ROBOTEC — Robótica Educacional</strong> é um projeto voltado ao desenvolvimento de competências por meio da tecnologia, robótica, programação, Pensamento Computacional e aprendizagem prática. Nosso trabalho transforma o conhecimento em experiências, incentivando os estudantes a criar, construir, programar, testar e encontrar soluções para diferentes desafios.
                </p>

                <p style="font-size: 1.05rem; line-height: 1.8; color: var(--text-main); margin-bottom: 15px;">
                    Trabalhamos com LEGO EV3, LEGO NXT, Arduino, materiais recicláveis, programação, Inteligência Artificial (IA) e novas tecnologias, desenvolvendo atividades que estimulam o raciocínio lógico, a criatividade, a autonomia, o pensamento crítico, a resolução de problemas e o trabalho em equipe.
                </p>

                <p style="font-size: 1.05rem; line-height: 1.8; color: var(--text-main); margin-bottom: 30px;">
                    Nossa metodologia é baseada no conceito de “aprender fazendo”, permitindo que os estudantes participem ativamente de todas as etapas dos projetos: criação, construção, programação, testes, identificação de problemas e aperfeiçoamento das soluções.
                </p>

                <!-- NOSSA MISSÃO -->
                <h3 style="font-size: 1.3rem; color: var(--primary-blue); margin-bottom: 10px; border-bottom: 2px solid var(--border-color); padding-bottom: 6px;">
                    <i class="fa-solid fa-bullseye"></i> Nossa Missão
                </h3>
                <p style="font-size: 1.05rem; line-height: 1.8; color: var(--text-main); margin-bottom: 30px;">
                    Nossa missão é promover uma educação inovadora, tecnológica e significativa, utilizando a robótica, a programação, o Pensamento Computacional e a Inteligência Artificial como ferramentas para desenvolver competências e preparar os estudantes para os desafios do mundo contemporâneo.
                </p>

                <!-- BNCC COMPUTAÇÃO -->
                <h3 style="font-size: 1.3rem; color: var(--primary-blue); margin-bottom: 10px; border-bottom: 2px solid var(--border-color); padding-bottom: 6px;">
                    <i class="fa-solid fa-book-bookmark"></i> BNCC Computação
                </h3>
                <p style="font-size: 1.05rem; line-height: 1.8; color: var(--text-main); margin-bottom: 30px;">
                    Integramos nossas práticas às competências e habilidades relacionadas à Computação na Educação Básica, utilizando a robótica e a programação para desenvolver Pensamento Computacional, cultura digital, criatividade, resolução de problemas e uso consciente da tecnologia.
                </p>

                <!-- NOSSOS OBJETIVOS -->
                <h3 style="font-size: 1.3rem; color: var(--primary-blue); margin-bottom: 15px; border-bottom: 2px solid var(--border-color); padding-bottom: 6px;">
                    <i class="fa-solid fa-list-check"></i> Nossos Objetivos
                </h3>
                <ul style="list-style: none; padding: 0; margin-bottom: 30px;">
                    <li style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 10px; font-size: 1rem;">
                        <i class="fa-solid fa-circle-check" style="color: var(--success-green); margin-top: 4px;"></i>
                        <span>Desenvolver o Pensamento Computacional e o raciocínio lógico;</span>
                    </li>
                    <li style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 10px; font-size: 1rem;">
                        <i class="fa-solid fa-circle-check" style="color: var(--success-green); margin-top: 4px;"></i>
                        <span>Estimular a criatividade, inovação e pensamento crítico;</span>
                    </li>
                    <li style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 10px; font-size: 1rem;">
                        <i class="fa-solid fa-circle-check" style="color: var(--success-green); margin-top: 4px;"></i>
                        <span>Desenvolver habilidades de programação, robótica e tecnologia;</span>
                    </li>
                    <li style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 10px; font-size: 1rem;">
                        <i class="fa-solid fa-circle-check" style="color: var(--success-green); margin-top: 4px;"></i>
                        <span>Explorar as possibilidades educacionais da Inteligência Artificial;</span>
                    </li>
                    <li style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 10px; font-size: 1rem;">
                        <i class="fa-solid fa-circle-check" style="color: var(--success-green); margin-top: 4px;"></i>
                        <span>Incentivar a resolução de problemas e a aprendizagem prática;</span>
                    </li>
                    <li style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 10px; font-size: 1rem;">
                        <i class="fa-solid fa-circle-check" style="color: var(--success-green); margin-top: 4px;"></i>
                        <span>Promover autonomia, colaboração e trabalho em equipe;</span>
                    </li>
                    <li style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 10px; font-size: 1rem;">
                        <i class="fa-solid fa-circle-check" style="color: var(--success-green); margin-top: 4px;"></i>
                        <span>Integrar a Computação e a tecnologia às diferentes áreas do conhecimento;</span>
                    </li>
                    <li style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 10px; font-size: 1rem;">
                        <i class="fa-solid fa-circle-check" style="color: var(--success-green); margin-top: 4px;"></i>
                        <span>Preparar os estudantes para desafios tecnológicos e acadêmicos.</span>
                    </li>
                </ul>

                <!-- O QUE FAZEMOS -->
                <h3 style="font-size: 1.3rem; color: var(--primary-blue); margin-bottom: 15px; border-bottom: 2px solid var(--border-color); padding-bottom: 6px;">
                    <i class="fa-solid fa-gears"></i> O que Fazemos
                </h3>
                <p style="font-size: 1.05rem; line-height: 1.8; color: var(--text-main); margin-bottom: 15px;">
                    A ROBOTEC desenvolve diferentes ações educacionais, incluindo:
                </p>
                <ul style="list-style: none; padding: 0; margin-bottom: 25px;">
                    <li style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 12px; font-size: 1rem;">
                        <i class="fa-solid fa-angles-right" style="color: var(--primary-blue); margin-top: 4px;"></i>
                        <span><strong>Workshops e Oficinas:</strong> experiências práticas de robótica, programação, tecnologia, IA e projetos maker.</span>
                    </li>
                    <li style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 12px; font-size: 1rem;">
                        <i class="fa-solid fa-angles-right" style="color: var(--primary-blue); margin-top: 4px;"></i>
                        <span><strong>Palestras:</strong> encontros sobre robótica, tecnologia, inovação, Pensamento Computacional, Inteligência Artificial e futuro profissional.</span>
                    </li>
                    <li style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 12px; font-size: 1rem;">
                        <i class="fa-solid fa-angles-right" style="color: var(--primary-blue); margin-top: 4px;"></i>
                        <span><strong>Campeonatos Internos:</strong> competições realizadas nas instituições para estimular a criatividade, estratégia, colaboração e aplicação prática dos conhecimentos.</span>
                    </li>
                    <li style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 12px; font-size: 1rem;">
                        <i class="fa-solid fa-angles-right" style="color: var(--primary-blue); margin-top: 4px;"></i>
                        <span><strong>Preparação para Competições:</strong> formação e treinamento de equipes para participação em competições de robótica, trabalhando construção, programação, estratégia, resolução de desafios e trabalho em equipe.</span>
                    </li>
                    <li style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 12px; font-size: 1rem;">
                        <i class="fa-solid fa-angles-right" style="color: var(--primary-blue); margin-top: 4px;"></i>
                        <span><strong>Projetos Educacionais:</strong> atividades práticas utilizando LEGO, Arduino, materiais recicláveis e diferentes recursos tecnológicos.</span>
                    </li>
                </ul>

                <p style="font-size: 1.1rem; line-height: 1.8; color: var(--primary-blue); font-weight: 600; text-align: center; margin-top: 30px; padding: 15px; background: rgba(2, 132, 199, 0.08); border-radius: var(--radius-sm);">
                    Mais do que construir robôs, a ROBOTEC desenvolve competências, estimula ideias e transforma tecnologia em oportunidades de aprendizagem.
                </p>

                <!-- ÁREA PARA GALERIA DE FOTOS -->
                <h3 style="font-size: 1.3rem; color: var(--primary-blue); margin-top: 40px; margin-bottom: 15px; border-bottom: 2px solid var(--border-color); padding-bottom: 6px;">
                    <i class="fa-solid fa-camera"></i> Nossos Trabalhos na Prática
                </h3>
                <div class="robotec-gallery-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                    <div style="height: 160px; border-radius: 8px; overflow: hidden; border: 1px solid var(--border-color);">
                        <img src="img/oficinas.jpg" alt="Oficinas e Aulas" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div style="height: 160px; border-radius: 8px; overflow: hidden; border: 1px solid var(--border-color);">
                        <img src="img/competicoes.jpg" alt="Competições" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div style="height: 160px; border-radius: 8px; overflow: hidden; border: 1px solid var(--border-color);">
                        <img src="img/maker.jpg" alt="Projetos Maker" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div style="height: 160px; border-radius: 8px; overflow: hidden; border: 1px solid var(--border-color);">
                        <img src="img/equipe.png" alt="Trabalho em Equipe" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                </div>

                <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px;">
                    <span style="font-size: 0.85rem; color: var(--text-muted);">
                        <i class="fa-solid fa-circle-info"></i> ROBOTEC — Robótica Educacional
                    </span>
                    <button class="btn btn-primary btn-sm" onclick="router('home')">
                        VOLTAR À HOME
                    </button>
                </div>
            </div>
        </div>
    `;
}
