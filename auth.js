/**
 * ROBOTEC ONLINE - SISTEMA DE AUTENTICAÇÃO E PERMISSÕES
 */

const AUTH = {
    SESSION_KEY: 'robotec_user_session',

    // Retorna o usuário logado atualmente ou null
    getCurrentUser() {
        const session = localStorage.getItem(this.SESSION_KEY);
        return session ? JSON.parse(session) : null;
    },

    // Realiza o login
    login(email, senha) {
        const user = ROBOTEC_DB.users.find(u => u.email === email && u.senha_hash === senha);
        if (user) {
            const sessionData = {
                id: user.id,
                nome: user.nome,
                email: user.email,
                perfil: user.perfil,
                loginTime: new Date().toISOString()
            };
            localStorage.setItem(this.SESSION_KEY, JSON.stringify(sessionData));
            this.updateAuthUI();
            return { success: true, user: sessionData };
        }
        return { success: false, message: "E-mail ou senha inválidos." };
    },

    // Realiza o logout
    logout() {
        localStorage.removeItem(this.SESSION_KEY);
        this.updateAuthUI();
        router('home');
    },

    // Atualiza a interface (Botão de Login/Perfil no Menu)
    updateAuthUI() {
        const authArea = document.getElementById('authNavArea');
        if (!authArea) return;

        const user = this.getCurrentUser();
        if (user) {
            authArea.innerHTML = `
                <div class="user-menu-dropdown">
                    <button class="btn btn-secondary btn-sm" onclick="router('profile')">
                        <i class="fa-solid fa-user-gear"></i> ${user.nome.split(' ')[0]} (${user.perfil})
                    </button>
                    ${user.perfil === 'ADMINISTRADOR' ? `
                        <button class="btn btn-primary btn-sm" onclick="router('admin')">
                            <i class="fa-solid fa-gauge-high"></i> ADMIN
                        </button>
                    ` : ''}
                    <button class="btn btn-danger btn-sm" onclick="AUTH.logout()" title="Sair">
                        <i class="fa-solid fa-power-off"></i>
                    </button>
                </div>
            `;
        } else {
            authArea.innerHTML = `
                <button class="btn btn-primary btn-sm" onclick="openLoginModal()">
                    <i class="fa-solid fa-lock"></i> ENTRAR
                </button>
            `;
        }
    }
};