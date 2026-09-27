/**
 * ROBOTEC ONLINE - MOCK DATABASE
 * Estrutura conceitual e dados fictícios para demonstração da plataforma.
 */

const ROBOTEC_DB = {
    // 1. Usuários Cadastrados
    users: [
        {
            id: "usr_101",
            nome: "Professor Admin",
            email: "admin@robotec.com",
            senha_hash: "admin123", // Em produção: hash bcrypt/argon2
            perfil: "ADMINISTRADOR",
            status: "ATIVO",
            data_cadastro: "2025-01-15"
        },
        {
            id: "usr_102",
            nome: "Aluno ROBOTEC",
            email: "aluno@robotec.com",
            senha_hash: "aluno123",
            perfil: "USUARIO",
            status: "ATIVO",
            data_cadastro: "2025-02-10"
        }
    ],

    // 2. Projetos e Construções
    projects: [
        // ==================== EV3 (50 PROJETOS) ====================
        {
            id: "proj_01",
            nome: "AEROGERADOR",
            categoria: "EV3",
            descricao: "Um projeto que utiliza a força do vento para explorar conceitos de energia, movimento e sustentabilidade por meio da robótica educacional.",
            dificuldade: "Iniciante",
            pecas_aprox: 100,
            imagem: "img/EV3/aerogerador.png",
            manual_id: "man_01",
            destaque: false
        },      
        {
            id: "proj_02",
            nome: "ARANHA 1",
            categoria: "EV3",
            descricao: "Uma aranha LEGO que combina movimento, mecânica e programação em um projeto de robótica criativo e educativo.",
            dificuldade: "Intermediário",
            pecas_aprox: 150,
            imagem: "img/EV3/aranha1.png",
            manual_id: "man_02",
            destaque: false
        },
        {
            id: "proj_03",
            nome: "ARANHA 2",
            categoria: "EV3",
            descricao: "Uma aranha LEGO que combina movimento, mecânica e programação em um projeto de robótica criativo e educativo.",
            dificuldade: "Avançado",
            pecas_aprox: 200,
            imagem: "img/EV3/aranha2.png",
            manual_id: "man_03",
            destaque: false
        },
        {
            id: "proj_04",
            nome: "ATLETA",
            categoria: "EV3",
            descricao: "Um atleta LEGO que transforma movimento e criatividade em uma experiência divertida de robótica educacional.",
            dificuldade: "Intermediário",
            pecas_aprox: 150,
            imagem: "img/EV3/atleta.png",
            manual_id: "man_04",
            destaque: false
        },
        {
            id: "proj_05",
            nome: "BALANÇO",
            categoria: "EV3",
            descricao: "Projeto que trabalha movimento, equilíbrio e oscilação, unindo robótica e aprendizagem prática.",
            dificuldade: "Iniciante",
            pecas_aprox: 100,
            imagem: "img/ev3/balanço.png",
            manual_id: "man_08",
            destaque: false
        },
        {
            id: "proj_06",
            nome: "BATE ESTACA",
            categoria: "EV3",
            descricao: "Projeto que explora força, movimento e mecânica por meio da robótica.",
            dificuldade: "Intermediário",
            pecas_aprox: 180,
            imagem: "img/ev3/bate estaca.png",
            manual_id: "man_09",
            destaque: false
        },
        {
            id: "proj_07",
            nome: "BEYBLADE",
            categoria: "EV3",
            descricao: "Descrição do projeto 10...",
            dificuldade: "Iniciante",
            pecas_aprox: 20,
            imagem: "img/ev3/beyblade.png",
            manual_id: "man_10",
            destaque: false
        },
        {
            id: "proj_08",
            nome: "BORBOLETA AUTOMATO",
            categoria: "EV3",
            descricao: "Uma construção LEGO que transforma movimento, criatividade e tecnologia em aprendizado.",
            dificuldade: "Fácil",
            pecas_aprox: 150,
            imagem: "img/EV3/borboleta.png",
            manual_id: "man_05",
            destaque: false
        },
        {
            id: "proj_09",
            nome: "BRAILE",
            categoria: "EV3",
            descricao: "Máquina de Braille: Projeto de tecnologia assistiva que utiliza robótica e programação para promover acessibilidade, inclusão e autonomia na escrita em Braille.",
            dificuldade: "Intermediário",
            pecas_aprox: 143,
            imagem: "img/EV3/braile.png",
            manual_id: "man_06",
            destaque: false
        },
        {
            id: "proj_10",
            nome: "CACHORRO ADESTRADO",
            categoria: "EV3",
            descricao: "Projeto que explora movimento, programação e interação por meio da robótica.",
            dificuldade: "Intermediário",
            pecas_aprox: 150,
            imagem: "img/ev3/cachorro adestrado.png",
            manual_id: "man_11",
            destaque: false
        },
        {
            id: "proj_11",
            nome: "CACHORRO",
            categoria: "EV3",
            descricao: "Construção robótica que trabalha movimento, mecânica e criatividade.",
            dificuldade: "Iniciante",
            pecas_aprox: 60,
            imagem: "img/ev3/cachorro.png",
            manual_id: "man_11",
            destaque: false
        },
        {
            id: "proj_12",
            nome: "CADEIRA DE RODAS",
            categoria: "EV3",
            descricao: "Projeto de tecnologia assistiva que explora mobilidade, acessibilidade e automação.",
            dificuldade: "Intermediário",
            pecas_aprox: 100,
            imagem: "img/ev3/cadeira de rodas.png",
            manual_id: "man_12",
            destaque: false
        },
        {
            id: "proj_13",
            nome: "CARRO",
            categoria: "EV3",
            descricao: "Projeto que trabalha movimento, mecânica, programação e controle.",
            dificuldade: "Iniciante",
            pecas_aprox: 60,
            imagem: "img/ev3/carro.png",
            manual_id: "man_13",
            destaque: false
        },
        {
            id: "proj_14",
            nome: "CATAPULTA",
            categoria: "EV3",
            descricao: "Projeto que explora força, movimento, lançamento e princípios da mecânica.",
            dificuldade: "Avançado",
            pecas_aprox: 180,
            imagem: "img/ev3/catapulta.png",
            manual_id: "man_14",
            destaque: false
        },
        {
            id: "proj_15",
            nome: "CORREDOR",
            categoria: "EV3",
            descricao: "Projeto que combina movimento, velocidade e programação em um desafio de robótica.",
            dificuldade: "Iniciante",
            pecas_aprox: 80,
            imagem: "img/ev3/corredor.png",
            manual_id: "man_15",
            destaque: false
        },
        {
            id: "proj_16",
            nome: "CORTADOR DE GRAMA",
            categoria: "EV3",
            descricao: "Projeto que explora automação, movimento e tecnologia aplicados a uma atividade do cotidiano.",
            dificuldade: "Avançado",
            pecas_aprox: 190,
            imagem: "img/ev3/cortador de grama.png",
            manual_id: "man_16",
            destaque: false
        },
        {
            id: "proj_17",
            nome: "DESENHISTA",
            categoria: "EV3",
            descricao: "Projeto que utiliza robótica e programação para criar desenhos e formas.",
            dificuldade: "Avançado",
            pecas_aprox: 160,
            imagem: "img/ev3/desenhista.png",
            manual_id: "man_17",
            destaque: false
        },
        {
            id: "proj_18",
            nome: "DRAGSTER COM MOTOR",
            categoria: "EV3",
            descricao: "Projeto que explora velocidade, força, movimento e mecânica.",
            dificuldade: "Intermediário",
            pecas_aprox: 130,
            imagem: "img/ev3/dragster com motor.png",
            manual_id: "man_18",
            destaque: false
        },
        {
            id: "proj_19",
            nome: "EMPILHADEIRA",
            categoria: "EV3",
            descricao: "Uma empilhadeira LEGO que transforma mecânica, movimento e criatividade em uma experiência de robótica educativa.",
            dificuldade: "Avançado",
            pecas_aprox: 250,
            imagem: "img/EV3/empilhadeira.png",
            manual_id: "man_07",
            destaque: false
        },
        {
            id: "proj_20",
            nome: "ESGRIMA",
            categoria: "EV3",
            descricao: "Projeto que trabalha movimento, estratégia e programação por meio da robótica.",
            dificuldade: "Avançado",
            pecas_aprox: 180,
            imagem: "img/ev3/esgrima.png",
            manual_id: "man_20",
            destaque: false
        },
        {
            id: "proj_21",
            nome: "ESTEIRA SELETORA",
            categoria: "EV3",
            descricao: "Projeto que utiliza automação, sensores e programação para realizar a seleção de objetos.",
            dificuldade: "Iniciante",
            pecas_aprox: 125,
            imagem: "img/ev3/esteira seletora.png",
            manual_id: "man_21",
            destaque: false
        },
        {
            id: "proj_22",
            nome: "EXPLORADOR",
            categoria: "EV3",
            descricao: "Projeto robótico que estimula a autonomia, movimentação e resolução de desafios.",
            dificuldade: "Iniciante",
            pecas_aprox: 120,
            imagem: "img/ev3/explorador.png",
            manual_id: "man_22",
            destaque: false
        },
        {
            id: "proj_23",
            nome: "GARRA",
            categoria: "EV3",
            descricao: "Projeto que explora movimento, força, mecânica e controle por meio da robótica.",
            dificuldade: "Iniciante",
            pecas_aprox: 70,
            imagem: "img/EV3/garra.png",
            manual_id: "man_23",
            destaque: false
        },
        {
            id: "proj_24",
            nome: "GINASTA",
            categoria: "EV3",
            descricao: "Projeto que trabalha movimento, equilíbrio e coordenação.",
            dificuldade: "Intermediário",
            pecas_aprox: 140,
            imagem: "img/ev3/ginasta.png",
            manual_id: "man_24",
            destaque: false
        },
        {
            id: "proj_25",
            nome: "GIRAFA",
            categoria: "EV3",
            descricao: "Construção robótica que explora movimento, mecânica e criatividade.",
            dificuldade: "Iniciante",
            pecas_aprox: 100,
            imagem: "img/ev3/girafa.png",
            manual_id: "man_25",
            destaque: false
        },
        {
            id: "proj_26",
            nome: "GUINDASTE",
            categoria: "EV3",
            descricao: "Projeto que trabalha força, elevação, movimento e automação.",
            dificuldade: "Avançado",
            pecas_aprox: 260,
            imagem: "img/ev3/guindaste.png",
            manual_id: "man_26",
            destaque: false
        },
        {
            id: "proj_27",
            nome: "GUITARRA",
            categoria: "EV3",
            descricao: "Projeto que combina música, tecnologia, programação e criatividade.",
            dificuldade: "Iniciante",
            pecas_aprox: 120,
            imagem: "img/ev3/guitarra.png",
            manual_id: "man_27",
            destaque: false
        },
        {
            id: "proj_28",
            nome: "HELICÓPTERO",
            categoria: "EV3",
            descricao: "Projeto que explora movimento, rotação e mecânica por meio da robótica.",
            dificuldade: "Iniciante",
            pecas_aprox: 75,
            imagem: "img/ev3/helicóptero.png",
            manual_id: "man_28",
            destaque: false
        },
        {
            id: "proj_29",
            nome: "ILUSÃO DE ÓTICA",
            categoria: "EV3",
            descricao: "Projeto que explora percepção visual, movimento e criatividade.",
            dificuldade: "Iniciante",
            pecas_aprox: 75,
            imagem: "img/ev3/ilusão de otica.png",
            manual_id: "man_29",
            destaque: false
        },
        {
            id: "proj_30",
            nome: "JIPE LUNAR",
            categoria: "EV3",
            descricao: "Projeto que trabalha exploração, movimento, mecânica e tecnologia.",
            dificuldade: "Intermediário",
            pecas_aprox: 130,
            imagem: "img/ev3/jipe lunar.png",
            manual_id: "man_30",
            destaque: false
        },
        {
            id: "proj_31",
            nome: "LANÇADOR DE BOLA",
            categoria: "EV3",
            descricao: "Projeto que explora força, movimento, precisão e programação.",
            dificuldade: "Iniciante",
            pecas_aprox: 90,
            imagem: "img/ev3/lançador de bola.png",
            manual_id: "man_31",
            destaque: false
        },
        {
            id: "proj_32",
            nome: "LOCALIZADOR",
            categoria: "EV3",
            descricao: "Projeto que utiliza sensores, programação e automação para identificar e localizar objetos.",
            dificuldade: "Intermediário",
            pecas_aprox: 140,
            imagem: "img/ev3/localizador.png",
            manual_id: "man_32",
            destaque: false
        },
        {
            id: "proj_33",
            nome: "LUTADOR DE BOXE",
            categoria: "EV3",
            descricao: "Projeto interativo com braços articulados simulando um lutador de boxe.",
            dificuldade: "Avançado",
            pecas_aprox: 170,
            imagem: "img/ev3/lutador de boxe.png",
            manual_id: "man_33",
            destaque: false
        },
        {
            id: "proj_34",
            nome: "MINI GOLF",
            categoria: "EV3",
            descricao: "Projeto que explora precisão, movimento, estratégia e controle.",
            dificuldade: "Iniciante",
            pecas_aprox: 90,
            imagem: "img/ev3/mini golf.png",
            manual_id: "man_34",
            destaque: false
        },
        {
            id: "proj_35",
            nome: "MOVIMENTO DE ROTAÇÃO",
            categoria: "EV3",
            descricao: "Projeto que demonstra rotação, velocidade, força e mecânica.",
            dificuldade: "Intermediário",
            pecas_aprox: 100,
            imagem: "img/ev3/movimento de rotação.png",
            manual_id: "man_35",
            destaque: false
        },
        {
            id: "proj_36",
            nome: "PEIXE",
            categoria: "EV3",
            descricao: "Projeto que explora movimento, mecânica e programação.",
            dificuldade: "Intermediário",
            pecas_aprox: 110,
            imagem: "img/ev3/peixe.png",
            manual_id: "man_36",
            destaque: false
        },
        {
            id: "proj_37",
            nome: "PICA PAU",
            categoria: "EV3",
            descricao: "Projeto que trabalha movimento, repetição e automação.",
            dificuldade: "Iniciante",
            pecas_aprox: 70,
            imagem: "img/ev3/pica pau.png",
            manual_id: "man_37",
            destaque: false
        },
        {
            id: "proj_38",
            nome: "PONTE ROLANTE",
            categoria: "EV3",
            descricao: "Projeto que explora elevação, deslocamento, força e automação.",
            dificuldade: "Intermediário",
            pecas_aprox: 170,
            imagem: "img/ev3/ponte rolante.png",
            manual_id: "man_38",
            destaque: false
        },
        {
            id: "proj_39",
            nome: "PULMÃO",
            categoria: "EV3",
            descricao: "Construção desenvolvida para simular o movimento de inspiração e expiração do Pulmão.",
            dificuldade: "Intermediário",
            pecas_aprox: 180,
            imagem: "img/ev3/pulmao.png",
            manual_id: "man_39",
            destaque: false
        },
        {
            id: "proj_40",
            nome: "PTERODÁTILO",
            categoria: "EV3",
            descricao: "Projeto robótico que explora movimento, voo, mecânica e criatividade.",
            dificuldade: "Intermediário",
            pecas_aprox: 120,
            imagem: "img/ev3/pterodatilo.png",
            manual_id: "man_40",
            destaque: false
        },
        {
            id: "proj_41",
            nome: "REBATEDOR DE BEISEBOL",
            categoria: "EV3",
            descricao: "Projeto que explora movimento, força, precisão e programação.",
            dificuldade: "Iniciante",
            pecas_aprox: 70,
            imagem: "img/EV3/rebatedor.png",
            manual_id: "man_41",
            destaque: true
        },
        {
            id: "proj_42",
            nome: "RELÓGIO",
            categoria: "EV3",
            descricao: "Projeto que trabalha tempo, movimento, engrenagens e programação.",
            dificuldade: "Iniciante",
            pecas_aprox: 60,
            imagem: "img/ev3/relogio1.png",
            manual_id: "man_42",
            destaque: false
        },
        {
            id: "proj_43",
            nome: "RELÓGIO 2",
            categoria: "EV3",
            descricao: "Projeto que trabalha tempo, movimento, engrenagens e programação.",
            dificuldade: "Iniciante",
            pecas_aprox: 60,
            imagem: "img/ev3/relogio2.png",
            manual_id: "man_43",
            destaque: false
        },
        {
            id: "proj_44",
            nome: "ROBO DETECTOR DE OBJETOS",
            categoria: "EV3",
            descricao: "Projeto que utiliza sensores, programação e automação para detectar objetos.",
            dificuldade: "Iniciante",
            pecas_aprox: 80,
            imagem: "img/ev3/detector.png",
            manual_id: "man_44",
            destaque: false
        },
        {
            id: "proj_45",
            nome: "ROLETA",
            categoria: "EV3",
            descricao: "Projeto robótico que simula uma roleta, explorando movimento, rotação, programação e aleatoriedade.",
            dificuldade: "Iniciante",
            pecas_aprox: 40,
            imagem: "img/ev3/roleta.png",
            manual_id: "man_45",
            destaque: false
        },
        {
            id: "proj_46",
            nome: "SISTEMA SOLAR",
            categoria: "EV3",
            descricao: "Projeto que explora astronomia, movimento, rotação e tecnologia por meio da robótica.",
            dificuldade: "Avançado",
            pecas_aprox: 170,
            imagem: "img/ev3/sistema solar.png",
            manual_id: "man_46",
            destaque: false
        },
        {
            id: "proj_47",
            nome: "TABELA DE BASQUETE",
            categoria: "EV3",
            descricao: "Projeto que explora movimento, precisão, força e programação por meio da prática esportiva.",
            dificuldade: "Iniciante",
            pecas_aprox: 90,
            imagem: "img/ev3/tabela.png",
            manual_id: "man_47",
            destaque: false
        },
        {
            id: "proj_48",
            nome: "TRENÔ DE NEVE",
            categoria: "EV3",
            descricao: "Projeto simulando tração e locomoção em superfícies lisas.",
            dificuldade: "Avançado",
            pecas_aprox: 250,
            imagem: "img/ev3/treno.png",
            manual_id: "man_48",
            destaque: false
        },
        {
            id: "proj_49",
            nome: "T-REX",
            categoria: "EV3",
            descricao: "Projeto robótico que explora movimento, mecânica, programação e criatividade.",
            dificuldade: "Intermediário",
            pecas_aprox: 180,
            imagem: "img/ev3/t-rex.png",
            manual_id: "man_49",
            destaque: false
        },
        {
            id: "proj_50",
            nome: "WALL-E",
            categoria: "EV3",
            descricao: "Projeto inspirado no personagem do filme, explorando robótica, movimento, programação e criatividade.",
            dificuldade: "Iniciante",
            pecas_aprox: 80,
            imagem: "img/ev3/wall-e.png",
            manual_id: "man_50",
            destaque: false
        },

        // ==================== NXT (24 PROJETOS) ====================
        {
            id: "proj_nxt_01",
            nome: "ANENOMETRO",
            categoria: "NXT",
            descricao: "Projeto que explora vento, velocidade, movimento e medição.",
            dificuldade: "Iniciante",
            pecas_aprox: 45,
            imagem: "img/NXT/anenometro.png",
            manual_id: "man_nxt_01",
            destaque: false
        },
        {
            id: "proj_nxt_02",
            nome: "BRAÇO MECÂNICO",
            categoria: "NXT",
            descricao: "Projeto que trabalha movimento, força, articulação e automação.",
            dificuldade: "Iniciante",
            pecas_aprox: 23,
            imagem: "img/NXT/braco.png",
            manual_id: "man_nxt_02",
            destaque: false
        },
        {
            id: "proj_nxt_03",
            nome: "BUGGY",
            categoria: "NXT",
            descricao: "Projeto que explora movimento, velocidade, mecânica e controle.",
            dificuldade: "Iniciante",
            pecas_aprox: 40,
            imagem: "img/NXT/buggy.png",
            manual_id: "man_nxt_03",
            destaque: false
        },
        {
            id: "proj_nxt_04",
            nome: "BÚSSOLA",
            categoria: "NXT",
            descricao: "Projeto que trabalha orientação, direção, sensores e tecnologia.",
            dificuldade: "Iniciante",
            pecas_aprox: 20,
            imagem: "img/NXT/bussola.png",
            manual_id: "man_nxt_04",
            destaque: false
        },
        {
            id: "proj_nxt_05",
            nome: "CARA OU COROA",
            categoria: "NXT",
            descricao: "Robô que lança uma moeda para o alto, explorando movimento, programação e aleatoriedade.",
            dificuldade: "Iniciante",
            pecas_aprox: 120,
            imagem: "img/NXT/caraoucoroa.png",
            manual_id: "man_nxt_05",
            destaque: false
        },
        {
            id: "proj_nxt_06",
            nome: "CARRO 1",
            categoria: "NXT",
            descricao: "Projeto que trabalha movimento, mecânica, programação e controle.",
            dificuldade: "Iniciante",
            pecas_aprox: 85,
            imagem: "img/NXT/carro1.png",
            manual_id: "man_nxt_06",
            destaque: false
        },
        {
            id: "proj_nxt_07",
            nome: "CARRO 2",
            categoria: "NXT",
            descricao: "Projeto que trabalha movimento, mecânica, programação e controle.",
            dificuldade: "Iniciante",
            pecas_aprox: 75,
            imagem: "img/NXT/carro2.png",
            manual_id: "man_nxt_07",
            destaque: false
        },
        {
            id: "proj_nxt_08",
            nome: "CARRO 3",
            categoria: "NXT",
            descricao: "Projeto que trabalha movimento, mecânica, programação e controle.",
            dificuldade: "Intermediário",
            pecas_aprox: 100,
            imagem: "img/NXT/carro3.png",
            manual_id: "man_nxt_08",
            destaque: false
        },
        {
            id: "proj_nxt_09",
            nome: "ELEVADOR",
            categoria: "NXT",
            descricao: "Projeto que explora movimento vertical, força, engrenagens e automação.",
            dificuldade: "Iniciante",
            pecas_aprox: 70,
            imagem: "img/NXT/elevador.png",
            manual_id: "man_nxt_09",
            destaque: false
        },
        {
            id: "proj_nxt_10",
            nome: "JANELA AUTOMÁTICA",
            categoria: "NXT",
            descricao: "Projeto que utiliza sensores, programação e automação para controlar a abertura e o fechamento.",
            dificuldade: "Intermediário",
            pecas_aprox: 100,
            imagem: "img/NXT/janela.png",
            manual_id: "man_nxt_10",
            destaque: false
        },
        {
            id: "proj_nxt_11",
            nome: "MÁQUINA DA SORTE",
            categoria: "NXT",
            descricao: "Projeto que explora movimento, programação e aleatoriedade.",
            dificuldade: "Iniciante",
            pecas_aprox: 80,
            imagem: "img/NXT/maquina.png",
            manual_id: "man_nxt_11",
            destaque: false
        },
        {
            id: "proj_nxt_12",
            nome: "MECANISMO DE VOÔ",
            categoria: "NXT",
            descricao: "Projeto que trabalha movimento, força, aerodinâmica e mecânica.",
            dificuldade: "Iniciante",
            pecas_aprox: 70,
            imagem: "img/NXT/mecanismo.png",
            manual_id: "man_nxt_12",
            destaque: false
        },
        {
            id: "proj_nxt_13",
            nome: "MEDIDOR DE ALTURA",
            categoria: "NXT",
            descricao: "Projeto que explora medição, sensores e tecnologia.",
            dificuldade: "Iniciante",
            pecas_aprox: 75,
            imagem: "img/NXT/medidor.png",
            manual_id: "man_nxt_13",
            destaque: false
        },
        {
            id: "proj_nxt_14",
            nome: "MESA DE PINTURA",
            categoria: "NXT",
            descricao: "Projeto que combina movimento, automação e criatividade.",
            dificuldade: "Iniciante",
            pecas_aprox: 40,
            imagem: "img/NXT/mesadepintura.png",
            manual_id: "man_nxt_14",
            destaque: false
        },
        {
            id: "proj_nxt_15",
            nome: "MINI GOLFE",
            categoria: "NXT",
            descricao: "Projeto que trabalha precisão, movimento, estratégia e controle.",
            dificuldade: "Iniciante",
            pecas_aprox: 85,
            imagem: "img/NXT/mini.png",
            manual_id: "man_nxt_15",
            destaque: false
        },
        {
            id: "proj_nxt_16",
            nome: "PEÃO",
            categoria: "NXT",
            descricao: "Projeto que explora rotação, equilíbrio, movimento e mecânica.",
            dificuldade: "Iniciante",
            pecas_aprox: 20,
            imagem: "img/NXT/peao.png",
            manual_id: "man_nxt_16",
            destaque: false
        },
        {
            id: "proj_nxt_17",
            nome: "PLUVIÔMETRO",
            categoria: "NXT",
            descricao: "Projeto que utiliza medição, sensores e tecnologia para estudar a chuva.",
            dificuldade: "Intermediário",
            pecas_aprox: 100,
            imagem: "img/NXT/pluviometro.png",
            manual_id: "man_nxt_17",
            destaque: false
        },
        {
            id: "proj_nxt_18",
            nome: "REBATEDOR",
            categoria: "NXT",
            descricao: "Projeto que explora movimento, força, precisão e programação.",
            dificuldade: "Iniciante",
            pecas_aprox: 60,
            imagem: "img/NXT/rebatedor.png",
            manual_id: "man_nxt_18",
            destaque: false
        },
        {
            id: "proj_nxt_19",
            nome: "ROBO BÍPEDE",
            categoria: "NXT",
            descricao: "Projeto que trabalha equilíbrio, movimento, mecânica e programação.",
            dificuldade: "Intermediário",
            pecas_aprox: 105,
            imagem: "img/NXT/bipede.png",
            manual_id: "man_nxt_19",
            destaque: false
        },
        {
            id: "proj_nxt_20",
            nome: "ROBÔ DANÇARINO",
            categoria: "NXT",
            descricao: "Projeto que combina movimento, ritmo, programação e criatividade.",
            dificuldade: "Iniciante",
            pecas_aprox: 50,
            imagem: "img/NXT/dancarino.png",
            manual_id: "man_nxt_20",
            destaque: false
        },
        {
            id: "proj_nxt_21",
            nome: "ROBÔ DESENHISTA",
            categoria: "NXT",
            descricao: "Projeto que utiliza programação e movimento para criar desenhos.",
            dificuldade: "Intermediário",
            pecas_aprox: 80,
            imagem: "img/NXT/desenhista.png",
            manual_id: "man_nxt_21",
            destaque: false
        },
        {
            id: "proj_nxt_22",
            nome: "ROBÔ LOCALIZADOR",
            categoria: "NXT",
            descricao: "Projeto que utiliza sensores, programação e automação para localizar objetos.",
            dificuldade: "Iniciante",
            pecas_aprox: 60,
            imagem: "img/NXT/localizador.png",
            manual_id: "man_nxt_22",
            destaque: false
        },
        {
            id: "proj_nxt_23",
            nome: "ROBÔ TÁTIL",
            categoria: "NXT",
            descricao: "Projeto de tecnologia assistiva que utiliza robótica e sensores para auxiliar pessoas com deficiência visual.",
            dificuldade: "Iniciante",
            pecas_aprox: 105,
            imagem: "img/NXT/tatil.png",
            manual_id: "man_nxt_23",
            destaque: false
        },
        {
            id: "proj_nxt_24",
            nome: "TRENA ULTRASSÔNICA",
            categoria: "NXT",
            descricao: "Projeto que utiliza sensor ultrassônico, medição e programação para calcular distâncias.",
            dificuldade: "Iniciante",
            pecas_aprox: 45,
            imagem: "img/NXT/trena.png",
            manual_id: "man_nxt_24",
            destaque: false
        },

        // ===================== PROJETOS AVULSOS =======================
        {
            id: "avulso-1",
            nome: "BAILARINA",
            categoria: "AVULSOS",
            dificuldade: "Iniciante",
            descricao: "Construção simples que explora movimento, equilíbrio e expressão corporal.",
            imagem: "img/avulsos/bailarina.png",
            pecas_aprox: 45,
            manual_id: "m_avulso_1"
        },
        {
            id: "avulso-2",
            nome: "BARCO A VELA",
            categoria: "AVULSOS",
            dificuldade: "Iniciante",
            descricao: "Construção que apresenta conceitos de movimento, vento e imaginação.",
            imagem: "img/avulsos/barco.png",
            pecas_aprox: 22,
            manual_id: "m_avulso_2"
        },
        {
            id: "avulso-3",
            nome: "CAMINHÃO",
            categoria: "AVULSOS",
            dificuldade: "Intermediário",
            descricao: "Construção que estimula a criatividade, coordenação motora e percepção de movimento.",
            imagem: "img/avulsos/caminhao.png",
            pecas_aprox: 86,
            manual_id: "m_avulso_3"
        },
        {
            id: "avulso-4",
            nome: "CARRO COM PONTEIRO",
            categoria: "AVULSOS",
            dificuldade: "Intermediário",
            descricao: "Construção que trabalha movimento, direção e percepção visual de forma lúdica.",
            imagem: "img/avulsos/carrocomponteiro.png",
            pecas_aprox: 50,
            manual_id: "m_avulso_4"
        },
        {
            id: "avulso-5",
            nome: "CARRO COM RELÓGIO",
            categoria: "AVULSOS",
            dificuldade: "Intermediário",
            descricao: "Construção que une movimento e percepção do tempo em uma atividade divertida.",
            imagem: "img/avulsos/carrocomrelogio.png",
            pecas_aprox: 50,
            manual_id: "m_avulso_5"
        },
        {
            id: "avulso-6",
            nome: "CARRO DE MÃO 1",
            categoria: "AVULSOS",
            dificuldade: "Intermediário",
            descricao: "Construção simples que estimula a coordenação motora, criatividade e percepção de movimento.",
            imagem: "img/avulsos/carrodemao1.png",
            pecas_aprox: 60,
            manual_id: "m_avulso_6"
        },
        {
            id: "avulso-7",
            nome: "CARRO DE MÃO 2",
            categoria: "AVULSOS",
            dificuldade: "Iniciante",
            descricao: "Construção simples que estimula a coordenação motora, criatividade e percepção de movimento.",
            imagem: "img/avulsos/carrodemao2.png",
            pecas_aprox: 45,
            manual_id: "m_avulso_7"
        },
        {
            id: "avulso-8",
            nome: "CARRO 1",
            categoria: "AVULSOS",
            dificuldade: "Iniciante",
            descricao: "Construção que explora movimento, direção e imaginação de forma lúdica.",
            imagem: "img/avulsos/carro1.png",
            pecas_aprox: 53,
            manual_id: "m_avulso_8"
        },
        {
            id: "avulso-9",
            nome: "CARRO 2",
            categoria: "AVULSOS",
            dificuldade: "Iniciante",
            descricao: "Construção que estimula a criatividade, coordenação motora e exploração do movimento.",
            imagem: "img/avulsos/carro2.png",
            pecas_aprox: 32,
            manual_id: "m_avulso_9"
        },
        {
            id: "avulso-10",
            nome: "CATAPULTA",
            categoria: "AVULSOS",
            dificuldade: "Iniciante",
            descricao: "Construção que apresenta, de forma lúdica, conceitos de força, movimento e lançamento.",
            imagem: "img/avulsos/catapulta.png",
            pecas_aprox: 52,
            manual_id: "m_avulso_10"
        },
        {
            id: "avulso-11",
            nome: "DRAGSTER",
            categoria: "AVULSOS",
            dificuldade: "Iniciante",
            descricao: "Construção simples que explora movimento, velocidade, direção e criatividade de forma lúdica.",
            imagem: "img/avulsos/dragster.png",
            pecas_aprox: 35,
            manual_id: "m_avulso_11"
        },
        {
            id: "avulso-12",
            nome: "GARRA",
            categoria: "AVULSOS",
            dificuldade: "Iniciante",
            descricao: "Construção simples que estimula a coordenação motora, movimento e criatividade.",
            imagem: "img/avulsos/garra.png",
            pecas_aprox: 60,
            manual_id: "m_avulso_12"
        },
        {
            id: "avulso-13",
            nome: "MOTO",
            categoria: "AVULSOS",
            dificuldade: "Iniciante",
            descricao: "Construção que explora movimento, equilíbrio e imaginação de forma lúdica.",
            imagem: "img/avulsos/moto.png",
            pecas_aprox: 115,
            manual_id: "m_avulso_13"
        },
        {
            id: "avulso-14",
            nome: "PONTE",
            categoria: "AVULSOS",
            dificuldade: "Intermediário",
            descricao: "Construção que trabalha equilíbrio, espaço, formas e criatividade.",
            imagem: "img/avulsos/ponte.png",
            pecas_aprox: 200,
            manual_id: "m_avulso_14"
        },
        {
            id: "avulso-15",
            nome: "RODA GIGANTE",
            categoria: "AVULSOS",
            dificuldade: "Iniciante",
            descricao: "Construção que explora movimento circular, rotação e percepção visual.",
            imagem: "img/avulsos/rodagigante.png",
            pecas_aprox: 80,
            manual_id: "m_avulso_15"
        },
        {
            id: "avulso-16",
            nome: "VELOCIMETRO",
            categoria: "AVULSOS",
            dificuldade: "Iniciante",
            descricao: "Construção que apresenta, de forma lúdica, conceitos de velocidade e movimento.",
            imagem: "img/avulsos/velocimetro.png",
            pecas_aprox: 60,
            manual_id: "m_avulso_16"
        },
        {
            id: "avulso-17",
            nome: "VARA DE PESCA",
            categoria: "AVULSOS",
            dificuldade: "Avançado",
            descricao: "Construção que estimula a coordenação motora, movimento e brincadeira simbólica.",
            imagem: "img/avulsos/pesca.png",
            pecas_aprox: 70,
            manual_id: "m_avulso_17"
        },

        // ==================== ARDUINO ====================      
        {
            id: "proj_ard_01",
            numero: "01",
            nome: "Piscando um LED",
            categoria: "Arduino",
            introducao: "O projeto é o 'Olá, Mundo!' da eletrônica. Ele ensina como controlar a saída digital do Arduino para ligar e desligar um LED em um intervalo regular.",
            descricao: "Introdução à eletrônica básica e saída digital com Arduino acendendo um LED piscante.",
            dificuldade: "Iniciante",
            objetivo: "Aprender os conceitos fundamentais de portas digitais, lógica de programação, circuitos elétricos e tempo de atraso (delay).",
            componentes: [
                "1x Placa Arduino Uno",
                "1x LED (qualquer cor)",
                "1x Resistor de 220 Ohms",
                "1x Protoboard",
                "Jumpers macho-macho"
            ],
            ligacoes: [
                "Anodo do LED (Perna longa) -> Conectado ao Resistor -> Pino Digital 6 do Arduino",
                "Catodo do LED (Perna curta) -> Conectado ao Pino GND do Arduino"
            ],
            como_funciona: "O código envia um sinal de ALTO (HIGH / 5V) para o pino digital 13 por 1 segundo, fazendo o LED acender, e depois envia um sinal BAIXO (LOW / 0V) por 3 segundo, apagando-o em um ciclo contínuo.",
            esquema_imagem: "img/Arduino/led.png",
            imagem: "img/Arduino/arduino.png",
            manual_id: "man_ard_01",
            destaque: true,
            codigo: `// Projeto 01 - Pisca LED
            const int pinLED = 6; // Define o pino do LED

            void setup() {
            pinMode(pinLED, OUTPUT); // Configura o pino 13 como saída
            }

            void loop() {
            digitalWrite(pinLED, HIGH); // Liga o LED
            delay(3000);                // Aguarda 3 segundo
            digitalWrite(pinLED, LOW);  // Desliga o LED
            delay(3000);                // Aguarda 3 segundo
            }`
        },
        {
            id: "proj_ard_02",
            numero: "02",
            nome: "Sinal de Trânsito (Semáforo)",
            categoria: "Arduino",
            introducao: "Simulação de um sistema de semáforo de trânsito utilizando três LEDs organizados em sequência cronometrada.",
            descricao: "Projeto para controle de múltiplos LEDs em sequência temporal utilizando estruturas de repetição e tempo.",
            dificuldade: "Iniciante",
            objetivo: "Aprender a controlar múltiplas saídas digitais em sequência para simular uma aplicação prática do cotidiano.",
            componentes: [
                "1x Placa Arduino Uno",
                "1x LED Vermelho",
                "1x LED Amarelo",
                "1x LED Verde",
                "3x Resistores de 220 Ohms",
                "1x Protoboard",
                "Jumpers macho-macho"
            ],
            ligacoes: [
                "LED Vermelho -> Pino Digital 12 (com resistor em série)",
                "LED Amarelo -> Pino Digital 11 (com resistor em série)",
                "LED Verde -> Pino Digital 10 (com resistor em série)",
                "Catodos de todos os LEDs -> Conectados ao GND da placa"
            ],
            como_funciona: "O Arduino executa um loop mantendo o LED Verde aceso por 5 segundos, depois o Amarelo por 2 segundos e por fim o Vermelho por 5 segundos, repetindo o ciclo da mesma forma que um semáforo real.",
            esquema_imagem: "img/Arduino/semaforo.png",
            imagem: "img/Arduino/arduino.png",
            manual_id: "man_ard_02",
            destaque: false,
            codigo: `// Projeto 02 - Semáforo
const int ledVerde = 10;
const int ledAmarelo = 11;
const int ledVermelho = 12;

void setup() {
  pinMode(ledVerde, OUTPUT);
  pinMode(ledAmarelo, OUTPUT);
  pinMode(ledVermelho, OUTPUT);
}

void loop() {
  // Estado Verde
  digitalWrite(ledVerde, HIGH);
  digitalWrite(ledAmarelo, LOW);
  digitalWrite(ledVermelho, LOW);
  delay(5000);

  // Estado Amarelo
  digitalWrite(ledVerde, LOW);
  digitalWrite(ledAmarelo, HIGH);
  digitalWrite(ledVermelho, LOW);
  delay(2000);

  // Estado Vermelho
  digitalWrite(ledVerde, LOW);
  digitalWrite(ledAmarelo, LOW);
  digitalWrite(ledVermelho, HIGH);
  delay(5000);
}`
        }
    ],

    // 3. Manuais Protegidos
    manuais: [
        // ==================== EV3 ====================
        {
            id: "man_01",
            projeto_id: "proj_01",
            titulo: "Manual de Montagem: Borboleta Automato",
            total_paginas: 18,
            categoria: "EV3",
            pdf_url: "manuais/borboleta.pdf",
            paginas: [
                "PASSO 1: Estrutura Base do Chassi.",
                "PASSO 2: Fixação das Engrenagens.",
                "PASSO 3: Conexão do Motor P1."
            ]
        },
        {
            id: "man_02",
            projeto_id: "proj_02",
            titulo: "Manual de Montagem: Robô Pulmão",
            total_paginas: 12,
            categoria: "EV3",
            pdf_url: "manuais/pulmao.pdf",
            paginas: [
                "PASSO 1: Estrutura do Peitoral e Pistões.",
                "PASSO 2: Sincronização dos Motores."
            ]
        },
        {
            id: "man_03",
            projeto_id: "proj_03",
            titulo: "Manual de Montagem: Empilhadeira",
            total_paginas: 20,
            categoria: "EV3",
            pdf_url: "manuais/empilhadeira.pdf",
            paginas: [
                "PASSO 1: Montagem da Garra Elevatória.",
                "PASSO 2: Sistema de Roldanas."
            ]
        },
        {
            id: "man_04",
            projeto_id: "proj_04",
            titulo: "Manual de Montagem: PROJETO 04",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_04.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_05",
            projeto_id: "proj_05",
            titulo: "Manual de Montagem: PROJETO 05",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_05.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_06",
            projeto_id: "proj_06",
            titulo: "Manual de Montagem: PROJETO 06",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_06.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_07",
            projeto_id: "proj_07",
            titulo: "Manual de Montagem: PROJETO 07",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_07.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_08",
            projeto_id: "proj_08",
            titulo: "Manual de Montagem: PROJETO 08",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_08.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_09",
            projeto_id: "proj_09",
            titulo: "Manual de Montagem: PROJETO 09",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_09.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_10",
            projeto_id: "proj_10",
            titulo: "Manual de Montagem: PROJETO 10",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_10.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_11",
            projeto_id: "proj_11",
            titulo: "Manual de Montagem: PROJETO 11",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_11.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_12",
            projeto_id: "proj_12",
            titulo: "Manual de Montagem: PROJETO 12",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_12.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_13",
            projeto_id: "proj_13",
            titulo: "Manual de Montagem: PROJETO 13",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_13.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_14",
            projeto_id: "proj_14",
            titulo: "Manual de Montagem: PROJETO 14",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_14.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_15",
            projeto_id: "proj_15",
            titulo: "Manual de Montagem: PROJETO 15",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_15.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_16",
            projeto_id: "proj_16",
            titulo: "Manual de Montagem: PROJETO 16",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_16.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_17",
            projeto_id: "proj_17",
            titulo: "Manual de Montagem: PROJETO 17",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_17.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_18",
            projeto_id: "proj_18",
            titulo: "Manual de Montagem: PROJETO 18",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_18.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_19",
            projeto_id: "proj_19",
            titulo: "Manual de Montagem: PROJETO 19",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_19.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_20",
            projeto_id: "proj_20",
            titulo: "Manual de Montagem: PROJETO 20",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_20.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_21",
            projeto_id: "proj_21",
            titulo: "Manual de Montagem: PROJETO 21",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_21.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_22",
            projeto_id: "proj_22",
            titulo: "Manual de Montagem: PROJETO 22",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_22.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_23",
            projeto_id: "proj_23",
            titulo: "Manual de Montagem: PROJETO 23",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_23.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_24",
            projeto_id: "proj_24",
            titulo: "Manual de Montagem: PROJETO 24",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_24.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_25",
            projeto_id: "proj_25",
            titulo: "Manual de Montagem: PROJETO 25",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_25.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_26",
            projeto_id: "proj_26",
            titulo: "Manual de Montagem: PROJETO 26",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_26.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_27",
            projeto_id: "proj_27",
            titulo: "Manual de Montagem: PROJETO 27",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_27.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_28",
            projeto_id: "proj_28",
            titulo: "Manual de Montagem: PROJETO 28",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_28.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_29",
            projeto_id: "proj_29",
            titulo: "Manual de Montagem: PROJETO 29",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_29.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_30",
            projeto_id: "proj_30",
            titulo: "Manual de Montagem: PROJETO 30",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_30.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_31",
            projeto_id: "proj_31",
            titulo: "Manual de Montagem: PROJETO 31",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_31.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_32",
            projeto_id: "proj_32",
            titulo: "Manual de Montagem: PROJETO 32",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_32.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_33",
            projeto_id: "proj_33",
            titulo: "Manual de Montagem: PROJETO 33",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_33.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_34",
            projeto_id: "proj_34",
            titulo: "Manual de Montagem: PROJETO 34",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_34.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_35",
            projeto_id: "proj_35",
            titulo: "Manual de Montagem: PROJETO 35",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_35.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_36",
            projeto_id: "proj_36",
            titulo: "Manual de Montagem: PROJETO 36",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_36.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_37",
            projeto_id: "proj_37",
            titulo: "Manual de Montagem: PROJETO 37",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_37.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_38",
            projeto_id: "proj_38",
            titulo: "Manual de Montagem: PROJETO 38",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_38.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_39",
            projeto_id: "proj_39",
            titulo: "Manual de Montagem: PROJETO 39",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_39.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_40",
            projeto_id: "proj_40",
            titulo: "Manual de Montagem: PROJETO 40",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_40.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_41",
            projeto_id: "proj_41",
            titulo: "Manual de Montagem: PROJETO 41",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_41.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_42",
            projeto_id: "proj_42",
            titulo: "Manual de Montagem: PROJETO 42",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_42.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_43",
            projeto_id: "proj_43",
            titulo: "Manual de Montagem: PROJETO 43",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_43.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_44",
            projeto_id: "proj_44",
            titulo: "Manual de Montagem: PROJETO 44",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_44.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_45",
            projeto_id: "proj_45",
            titulo: "Manual de Montagem: PROJETO 45",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_45.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_46",
            projeto_id: "proj_46",
            titulo: "Manual de Montagem: PROJETO 46",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_46.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_47",
            projeto_id: "proj_47",
            titulo: "Manual de Montagem: PROJETO 47",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_47.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_48",
            projeto_id: "proj_48",
            titulo: "Manual de Montagem: PROJETO 48",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_48.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_49",
            projeto_id: "proj_49",
            titulo: "Manual de Montagem: PROJETO 49",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_49.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_50",
            projeto_id: "proj_50",
            titulo: "Manual de Montagem: PROJETO 50",
            total_paginas: 10,
            categoria: "EV3",
            pdf_url: "manuais/manual_50.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },

        // ==================== NXT ====================
        {
            id: "man_nxt_01",
            projeto_id: "proj_nxt_01",
            titulo: "Manual de Montagem: PROJETO NXT 01",
            total_paginas: 10,
            categoria: "NXT",
            pdf_url: "manuais/NXT/manual_nxt_01.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_nxt_02",
            projeto_id: "proj_nxt_02",
            titulo: "Manual de Montagem: PROJETO NXT 02",
            total_paginas: 10,
            categoria: "NXT",
            pdf_url: "manuais/NXT/manual_nxt_02.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_nxt_03",
            projeto_id: "proj_nxt_03",
            titulo: "Manual de Montagem: PROJETO NXT 03",
            total_paginas: 10,
            categoria: "NXT",
            pdf_url: "manuais/NXT/manual_nxt_03.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_nxt_04",
            projeto_id: "proj_nxt_04",
            titulo: "Manual de Montagem: PROJETO NXT 04",
            total_paginas: 10,
            categoria: "NXT",
            pdf_url: "manuais/NXT/manual_nxt_04.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_nxt_05",
            projeto_id: "proj_nxt_05",
            titulo: "Manual de Montagem: PROJETO NXT 05",
            total_paginas: 10,
            categoria: "NXT",
            pdf_url: "manuais/NXT/manual_nxt_05.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_nxt_06",
            projeto_id: "proj_nxt_06",
            titulo: "Manual de Montagem: PROJETO NXT 06",
            total_paginas: 10,
            categoria: "NXT",
            pdf_url: "manuais/NXT/manual_nxt_06.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_nxt_07",
            projeto_id: "proj_nxt_07",
            titulo: "Manual de Montagem: PROJETO NXT 07",
            total_paginas: 10,
            categoria: "NXT",
            pdf_url: "manuais/NXT/manual_nxt_07.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_nxt_08",
            projeto_id: "proj_nxt_08",
            titulo: "Manual de Montagem: PROJETO NXT 08",
            total_paginas: 10,
            categoria: "NXT",
            pdf_url: "manuais/NXT/manual_nxt_08.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_nxt_09",
            projeto_id: "proj_nxt_09",
            titulo: "Manual de Montagem: PROJETO NXT 09",
            total_paginas: 10,
            categoria: "NXT",
            pdf_url: "manuais/NXT/manual_nxt_09.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_nxt_10",
            projeto_id: "proj_nxt_10",
            titulo: "Manual de Montagem: PROJETO NXT 10",
            total_paginas: 10,
            categoria: "NXT",
            pdf_url: "manuais/NXT/manual_nxt_10.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_nxt_11",
            projeto_id: "proj_nxt_11",
            titulo: "Manual de Montagem: PROJETO NXT 11",
            total_paginas: 10,
            categoria: "NXT",
            pdf_url: "manuais/NXT/manual_nxt_11.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_nxt_12",
            projeto_id: "proj_nxt_12",
            titulo: "Manual de Montagem: PROJETO NXT 12",
            total_paginas: 10,
            categoria: "NXT",
            pdf_url: "manuais/NXT/manual_nxt_12.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_nxt_13",
            projeto_id: "proj_nxt_13",
            titulo: "Manual de Montagem: PROJETO NXT 13",
            total_paginas: 10,
            categoria: "NXT",
            pdf_url: "manuais/NXT/manual_nxt_13.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_nxt_14",
            projeto_id: "proj_nxt_14",
            titulo: "Manual de Montagem: PROJETO NXT 14",
            total_paginas: 10,
            categoria: "NXT",
            pdf_url: "manuais/NXT/manual_nxt_14.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_nxt_15",
            projeto_id: "proj_nxt_15",
            titulo: "Manual de Montagem: PROJETO NXT 15",
            total_paginas: 10,
            categoria: "NXT",
            pdf_url: "manuais/NXT/manual_nxt_15.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_nxt_16",
            projeto_id: "proj_nxt_16",
            titulo: "Manual de Montagem: PROJETO NXT 16",
            total_paginas: 10,
            categoria: "NXT",
            pdf_url: "manuais/NXT/manual_nxt_16.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_nxt_17",
            projeto_id: "proj_nxt_17",
            titulo: "Manual de Montagem: PROJETO NXT 17",
            total_paginas: 10,
            categoria: "NXT",
            pdf_url: "manuais/NXT/manual_nxt_17.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_nxt_18",
            projeto_id: "proj_nxt_18",
            titulo: "Manual de Montagem: PROJETO NXT 18",
            total_paginas: 10,
            categoria: "NXT",
            pdf_url: "manuais/NXT/manual_nxt_18.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_nxt_19",
            projeto_id: "proj_nxt_19",
            titulo: "Manual de Montagem: PROJETO NXT 19",
            total_paginas: 10,
            categoria: "NXT",
            pdf_url: "manuais/NXT/manual_nxt_19.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_nxt_20",
            projeto_id: "proj_nxt_20",
            titulo: "Manual de Montagem: PROJETO NXT 20",
            total_paginas: 10,
            categoria: "NXT",
            pdf_url: "manuais/NXT/manual_nxt_20.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_nxt_21",
            projeto_id: "proj_nxt_21",
            titulo: "Manual de Montagem: PROJETO NXT 21",
            total_paginas: 10,
            categoria: "NXT",
            pdf_url: "manuais/NXT/manual_nxt_21.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_nxt_22",
            projeto_id: "proj_nxt_22",
            titulo: "Manual de Montagem: PROJETO NXT 22",
            total_paginas: 10,
            categoria: "NXT",
            pdf_url: "manuais/NXT/manual_nxt_22.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_nxt_23",
            projeto_id: "proj_nxt_23",
            titulo: "Manual de Montagem: PROJETO NXT 23",
            total_paginas: 10,
            categoria: "NXT",
            pdf_url: "manuais/NXT/manual_nxt_23.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },
        {
            id: "man_nxt_24",
            projeto_id: "proj_nxt_24",
            titulo: "Manual de Montagem: PROJETO NXT 24",
            total_paginas: 10,
            categoria: "NXT",
            pdf_url: "manuais/NXT/manual_nxt_24.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },

        // ==================== AVULSOS ====================
        {
            id: "m_avulso_1",
            projeto_id: "avulso-1",
            titulo: "Manual de Montagem: Bailarina",
            total_paginas: 9,
            categoria: "AVULSOS",
            pdf_url: "manuais/avulsos/bailarina.pdf",
            paginas: ["PASSO 1: Estrutura Base."]
        },

        // ==================== ARDUINO ====================
        {
            id: "man_ard_01",
            projeto_id: "proj_ard_01",
            titulo: "Manual de Montagem: PROJETO ARDUINO 01",
            total_paginas: 10,
            categoria: "Arduino",
            pdf_url: "manuais/Arduino/manual_ard_01.pdf",
            paginas: ["PASSO 1: Esquemático Eletrônico."]
        },
        {
            id: "man_ard_02",
            projeto_id: "proj_ard_02",
            titulo: "Manual de Montagem: PROJETO ARDUINO 02",
            total_paginas: 10,
            categoria: "Arduino",
            pdf_url: "manuais/Arduino/manual_ard_02.pdf",
            paginas: ["PASSO 1: Esquemático Eletrônico."]
        }
    ],

    // 4. Atividades Educacionais
    atividades: [
        {
            id: "ativ_01",
            titulo: "Desafio da Arena de Obstáculos",
            nivel: "Iniciante",
            faixa_etaria: "10 a 14 anos",
            tempo_estimado: "90 min",
            descricao: "Programar um robô para navegar em um labirinto sem colidir nas paredes usando sensores.",
            competencias: ["Lógica de Programação", "Trabalho em Equipe", "Resolução de Problemas"]
        },
        {
            id: "ativ_02",
            titulo: "Automação Agrícola Sustentável",
            nivel: "Intermediário",
            faixa_etaria: "12 a 16 anos",
            tempo_estimado: "120 min",
            descricao: "Criar um irrigador automático acionado por sensor de umidade do solo com Arduino e bomba d'água.",
            competencias: ["Eletrônica Básica", "Sustentabilidade", "Pensamento Computacional"]
        }
    ],

    // 5. Links Úteis
    links: [
        {
            nome: "LEGO Education Portal",
            categoria: "LEGO",
            descricao: "Planos de aula oficiais e atualizações de firmware para EV3 e SPIKE Prime.",
            url: "https://education.lego.com",
            icone: "fa-cubes"
        },
        {
            nome: "Arduino Project Hub",
            categoria: "Arduino",
            descricao: "Comunidade mundial com milhares de esquemáticos e códigos abertos.",
            url: "https://create.arduino.cc/projecthub",
            icone: "fa-bolt"
        },
        {
            nome: "Tinkercad Circuits",
            categoria: "Programação",
            descricao: "Simulador online gratuito de circuitos eletrônicos e blocos de código.",
            url: "https://www.tinkercad.com",
            icone: "fa-laptop-code"
        }
    ],

    // 6. Registros de Ouvidoria
    ouvidoria_logs: [],

    // 7. Registros de Acesso a Manuais (Auditoria de Segurança)
    acessos_logs: []
};

// Suporte para ambiente Node.js e Navegador (Browser)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ROBOTEC_DB;
} else {
    window.ROBOTEC_DB = ROBOTEC_DB;
}
