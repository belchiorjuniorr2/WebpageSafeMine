# SafeMine — Landing Page

Glossário do produto e do posicionamento que esta landing page comercial precisa comunicar. O produto é um sistema web/app de registro de ocorrências de campo por voz, com integração aos sistemas das empresas.

## Produto e posicionamento

**SafeMine**:
Nome atual do produto. Sistema web/app que transforma a voz do operador em registros estruturados de segurança, meio ambiente, ergonomia e checklists, integrados ao sistema da empresa.
_Avoid_: MineVoice (nome antigo da pasta; não usar na comunicação)

**Cabeça-de-ponte (beachhead)**:
Mineração. É o setor inicial em que a landing page foca a mensagem, exemplos e provas. A expansão para outros setores é *sinalizada*, não detalhada.

**Operação que vive no rádio**:
Operação de campo cujo dia a dia já passa pelo rádio — mineração, logística, ferrovia. É o mercado-alvo natural do produto, porque o rádio é o canal de captura provado e o operador não precisa mudar a rotina.

## Canais de captura

**Rádio** (canal provado, em produção):
O canal real do produto hoje. O operador fala no rádio que **já usa** na operação — não aprende nada novo. O áudio é capturado e processado no servidor. É de onde vem o case-âncora (30 min → 30 s por relato). Exige rádio digital.
Por que é o diferencial: o rádio já é o padrão obrigatório da operação, e em muitas áreas (mina, sobretudo) **celular é proibido** — então o rádio não é só mais fácil, é frequentemente o único canal permitido em campo.

**Rádio digital**:
Pré-requisito do canal rádio (não do produto). Só rádios digitais permitem capturar o áudio para transcrição. Operação com rádio analógico não usa o canal rádio, mas pode usar o app — então não é lead perdido, é roteamento de canal.

**App por voz** (canal real, mais novo):
Canal já utilizável e demonstrável hoje. O operador grava o relato por voz num aplicativo. Amplia o alcance para operações sem rádio digital ou que preferem o celular. É real, mas **não é o protagonista** — o rádio é o diferencial.
_Avoid_: ilustrar o app como o produto principal (ex.: mockup de celular no Hero); ele divide o palco, mas não lidera

## Pipeline de processamento

**Agente especializado**:
Modelo de IA, no servidor, que recebe o áudio transcrito e trata a informação como um especialista de segurança faria — estrutura, classifica e prepara o relato.

**JSON de saída**:
A saída do pipeline: um JSON no formato que o sistema da empresa cliente espera receber, de preferência alimentando um fluxo BPMS. É o ponto de entrega da integração.

## Públicos

**Gestor de segurança**:
Público primário da página (manchete e CTA). Coordenador de SSMA / SESMT / técnico de segurança — quem sente a dor (relatos que não chegam, tratamento lento, auditoria) e quem aprova a compra.
_Avoid_: usar genericamente "cliente" para esta persona

**Operador**:
Quem gera relatos no campo falando no rádio que já usa. Público de reforço, não da manchete — ele não decide a compra. Diferencial-chave: não muda a rotina nem aprende ferramenta nova.

## O que o usuário gera

**Relato**:
Um registro de campo criado por voz pelo operador — hoje pela fala no rádio, no futuro também pelo app. É a unidade central do produto. Hoje há 6 tipos (módulos): **Segurança** (quase-acidentes, incidentes, condições inseguras), **Ambiental** (vazamentos, derrames, impactos), **Ergonomia** (riscos posturais, movimentação repetitiva), **Veículo** (checklist diário de equipamento pesado, 11 itens), **Passagem de Turno** (continuidade entre turnos) e **Inspeção** (rotina, especiais e auditorias, com foto e voz).
_Avoid_: Ocorrência (reservar para o evento já tratado no sistema da empresa), report

**Cadeia de repasse manual**:
O caminho atual de um relato sem o SafeMine: operador para a operação → escreve no papel → repassa ao líder de turma → chega (ou não) à área de segurança. A cada elo se perde tempo, fidelidade (erros de grafia) e relatos inteiros. É a dor central que o produto elimina, entregando o relato pronto direto à segurança.

**Líder de turma**:
Elo intermediário da cadeia de repasse — recebia o relato do operador e deveria levá-lo à segurança (gargalo de ~15 min por relato). Com o SafeMine deixa de manusear o relato: é apenas notificado por e-mail e acompanha pelo painel de análise.

**Relato pronto**:
Um relato que chega à segurança já estruturado e sem erros de transcrição, dispensando redigitação ou interpretação. É o resultado que substitui a cadeia de repasse manual.

## Tratamento

**Tratamento**:
O que a área de segurança faz com um relato que chega: validar a informação no sistema e dar a tratativa — marcar como resolvido ou abrir um plano de ação. Substitui o trabalho antigo do técnico de redigitar cada relato no sistema (gargalo com 20+ relatos/dia).

**Tratativa imediata**:
Resolução dada pelo próprio operador no momento da emissão do relato. Caso comum — quando ocorre, a segurança apenas valida.

**Plano de ação**:
Encaminhamento estruturado aberto pela segurança quando um relato exige providências. Destino possível do relato dentro do sistema da empresa.

**Painel de análise**:
Tela do sistema onde líder e segurança acompanham os relatos que chegam — substitui o repasse físico do papel.

## Integração

**Integração assistida**:
Modelo em que a nossa equipe conecta o SafeMine ao sistema da empresa cliente. Alternativa ao autoatendimento via API.

**API SafeMine**:
Conjunto de APIs disponibilizado para o time de TI da empresa fazer a integração por conta própria.
