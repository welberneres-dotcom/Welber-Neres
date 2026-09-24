/**
 * ROBOTEC ONLINE - VISUALIZADOR PROTEGIDO DE MANUAIS
 * Renderização em Canvas com mecanismos anti-cópia e auditoria no frontend.
 */

let currentManual = null;
let currentPage = 1;
let currentZoom = 1.0;

function openManualViewer(manualId) {
    const user = AUTH.getCurrentUser();
    
    // Trava de Autenticação
    if (!user) {
        openLoginModal("Para acessar os manuais protegidos da ROBOTEC, faça login com sua conta.");
        return;
    }

    const manual = ROBOTEC_DB.manuais.find(m => m.id === manualId);
    if (!manual) {
        alert("Manual não encontrado no servidor seguro.");
        return;
    }

    currentManual = manual;
    currentPage = 1;
    currentZoom = 1.0;

    // Registrar Acesso na Tabela de Acessos (Auditoria)
    ROBOTEC_DB.acessos_logs.push({
        id: "acc_" + Date.now(),
        usuario_id: user.id,
        manual_id: manual.id,
        data_hora: new Date().toISOString()
    });

    // Atualiza Interface do Modal
    document.getElementById('viewerManualTitle').innerText = manual.titulo;
    document.getElementById('totalPagesNum').innerText = manual.paginas.length;
    document.getElementById('watermarkText').innerText = `ROBOTEC - ACESSO AUTENTICADO DE: ${user.email.toUpperCase()}`;

    document.getElementById('manualViewerModal').classList.remove('hidden');
    renderCanvasPage();

    // Bloqueios adicionais de interação na área do visualizador
    applyFrontendProtections();
}

function closeManualViewer() {
    document.getElementById('manualViewerModal').classList.add('hidden');
    currentManual = null;
}

function renderCanvasPage() {
    if (!currentManual) return;

    const canvas = document.getElementById('manualCanvas');
    const ctx = canvas.getContext('2d');

    // Configurações de dimensão virtual da página do manual
    const baseWidth = 800 * currentZoom;
    const baseHeight = 1000 * currentZoom;

    canvas.width = baseWidth;
    canvas.height = baseHeight;

    // Fundo da página emulando folha impressa
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, baseWidth, baseHeight);

    // Borda estilizada
    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 4 * currentZoom;
    ctx.strokeRect(20 * currentZoom, 20 * currentZoom, baseWidth - 40 * currentZoom, baseHeight - 40 * currentZoom);

    // Cabeçalho da folha do manual
    ctx.fillStyle = '#090d16';
    ctx.fillRect(20 * currentZoom, 20 * currentZoom, baseWidth - 40 * currentZoom, 80 * currentZoom);

    ctx.fillStyle = '#00f0ff';
    ctx.font = `bold ${22 * currentZoom}px Orbitron`;
    ctx.fillText("ROBOTEC ONLINE - MANUAL OFICIAL", 40 * currentZoom, 65 * currentZoom);

    // Conteúdo da página do manual
    ctx.fillStyle = '#111827';
    ctx.font = `bold ${18 * currentZoom}px Rajdhani`;
    ctx.fillText(`PÁGINA ${currentPage} DE ${currentManual.paginas.length}`, 40 * currentZoom, 140 * currentZoom);

    ctx.fillStyle = '#333333';
    ctx.font = `${16 * currentZoom}px Roboto`;
    
    const pageText = currentManual.paginas[currentPage - 1] || "Conteúdo técnico da página sob proteção de direitos autorais.";
    ctx.fillText(pageText, 40 * currentZoom, 200 * currentZoom);

    // Ilustração Esquemática Fictícia no Canvas
    ctx.strokeStyle = '#7000ff';
    ctx.lineWidth = 2 * currentZoom;
    ctx.strokeRect(60 * currentZoom, 260 * currentZoom, baseWidth - 120 * currentZoom, 300 * currentZoom);
    ctx.fillStyle = '#666';
    ctx.font = `${14 * currentZoom}px Roboto`;
    ctx.fillText("[ Diagrama Técnico / Esquema do Robô ]", (baseWidth / 2) - (100 * currentZoom), 410 * currentZoom);

    // Marca D'água Dinâmica Anti-Print no Canvas
    ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
    ctx.font = `bold ${20 * currentZoom}px Orbitron`;
    ctx.save();
    ctx.translate(baseWidth / 2, baseHeight / 2);
    ctx.rotate(-Math.PI / 6);
    ctx.fillText("CÓPIA NÃO AUTORIZADA - USO EXCLUSIVO ROBOTEC", -220 * currentZoom, 0);
    ctx.restore();

    // Atualizar Contadores
    document.getElementById('currentPageNum').innerText = currentPage;
    document.getElementById('zoomLevelText').innerText = `${Math.round(currentZoom * 100)}%`;
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderCanvasPage();
    }
}

function nextPage() {
    if (currentManual && currentPage < currentManual.paginas.length) {
        currentPage++;
        renderCanvasPage();
    }
}

function zoomIn() {
    if (currentZoom < 1.8) {
        currentZoom += 0.2;
        renderCanvasPage();
    }
}

function zoomOut() {
    if (currentZoom > 0.6) {
        currentZoom -= 0.2;
        renderCanvasPage();
    }
}

function toggleFullscreen() {
    const elem = document.getElementById('manualViewerModal');
    if (!document.fullscreenElement) {
        elem.requestFullscreen().catch(err => alert(`Erro ao ativar Tela Cheia: ${err.message}`));
    } else {
        document.exitFullscreen();
    }
}

// Bloqueios de Interface no Frontend
function applyFrontendProtections() {
    const wrapper = document.getElementById('canvasWrapper');
    
    // Bloquear Botão Direito do Mouse
    wrapper.addEventListener('contextmenu', e => e.preventDefault());

    // Bloquear Teclas de Atalho Comuns (Ctrl+P, Ctrl+S, F12)
    window.addEventListener('keydown', e => {
        if (!document.getElementById('manualViewerModal').classList.contains('hidden')) {
            if ((e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 's' || e.key === 'u')) {
                e.preventDefault();
                alert("Atenção: A cópia ou impressão direta de manuais é bloqueada nesta plataforma.");
            }
        }
    });
}