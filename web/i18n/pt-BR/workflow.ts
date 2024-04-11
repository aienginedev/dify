const translation = {
  common: {
    editing: 'Editando',
    autoSaved: 'Auto-salvo',
    unpublished: 'Não publicado',
    published: 'Publicado',
    publish: 'Publicar',
    update: 'Atualizar',
    run: 'Executar',
    running: 'Executando',
    inRunMode: 'No modo de execução',
    inPreview: 'Na prévia',
    inPreviewMode: 'No modo de prévia',
    preview: 'Prévia',
    viewRunHistory: 'Ver histórico de execução',
    runHistory: 'Histórico de execução',
    goBackToEdit: 'Voltar para a edição',
    conversationLog: 'Registro de conversa',
    features: 'Recursos',
    debugAndPreview: 'Depurar e pré-visualizar',
    restart: 'Reiniciar',
    currentDraft: 'Rascunho atual',
    currentDraftUnpublished: 'Rascunho atual não publicado',
    latestPublished: 'Último publicado',
    publishedAt: 'Publicado em',
    restore: 'Restaurar',
    runApp: 'Executar aplicativo',
    batchRunApp: 'Executar aplicativo em lote',
    accessAPIReference: 'Acessar referência da API',
    embedIntoSite: 'Incorporar no site',
    addTitle: 'Adicionar título...',
    addDescription: 'Adicionar descrição...',
    noVar: 'Sem variável',
    searchVar: 'Buscar variável',
    variableNamePlaceholder: 'Nome da variável',
    setVarValuePlaceholder: 'Definir variável',
    needConnecttip: 'Esta etapa não está conectada a nada',
    maxTreeDepth: 'Limite máximo de {{depth}} nós por ramificação',
    needEndNode: 'O bloco de fim deve ser adicionado',
    needAnswerNode: 'O bloco de resposta deve ser adicionado',
    workflowProcess: 'Processo de fluxo de trabalho',
    notRunning: 'Ainda não em execução',
    previewPlaceholder: 'Digite o conteúdo na caixa abaixo para iniciar a depuração do Chatbot',
    effectVarConfirm: {
      title: 'Remover variável',
      content: 'A variável está sendo usada em outros nós. Deseja removê-la mesmo assim?',
    },
    insertVarTip: 'Pressione a tecla \'/\' para inserir rapidamente',
    processData: 'Processar dados',
    input: 'Entrada',
    output: 'Saída',
  },
  errorMsg: {
    fieldRequired: '{{field}} é obrigatório',
    authRequired: 'Autorização é necessária',
    invalidJson: '{{field}} é JSON inválido',
    fields: {
      variable: 'Nome da Variável',
      variableValue: 'Valor da Variável',
      code: 'Código',
      model: 'Modelo',
      rerankModel: 'Modelo de Re-ordenação',
    },
    invalidVariable: 'Variável inválida',
  },
  singleRun: {
    testRun: 'Execução de teste ',
    startRun: 'Iniciar execução',
    running: 'Executando',
  },
  tabs: {
    'searchBlock': 'Buscar bloco',
    'blocks': 'Blocos',
    'builtInTool': 'Ferramenta incorporada',
    'customTool': 'Ferramenta personalizada',
    'question-understand': 'Entendimento da pergunta',
    'logic': 'Lógica',
    'transform': 'Transformar',
    'utilities': 'Utilitários',
    'noResult': 'Nenhum resultado encontrado',
  },
  blocks: {
    'start': 'Início',
    'end': 'Fim',
    'answer': 'Resposta',
    'llm': 'LLM',
    'knowledge-retrieval': 'Recuperação de conhecimento',
    'question-classifier': 'Classificador de perguntas',
    'if-else': 'Se/Senão',
    'code': 'Código',
    'template-transform': 'Modelo',
    'http-request': 'Requisição HTTP',
    'variable-assigner': 'Atribuidor de variáveis',
  },
  blocksAbout: {
    'start': 'Defina os parâmetros iniciais para iniciar um fluxo de trabalho',
    'end': 'Defina o final e o tipo de resultado de um fluxo de trabalho',
    'answer': 'Defina o conteúdo da resposta de uma conversa no chat',
    'llm': 'Invocar grandes modelos de linguagem para responder perguntas ou processar linguagem natural',
    'knowledge-retrieval': 'Permite consultar conteúdo de texto relacionado a perguntas de usuário do conhecimento',
    'question-classifier': 'Define as condições de classificação de perguntas do usuário, LLM pode definir como a conversa progride com base na descrição da classificação',
    'if-else': 'Permite dividir o fluxo de trabalho em dois ramos com base em condições if/else',
    'code': 'Execute um trecho de código Python ou NodeJS para implementar lógica personalizada',
    'template-transform': 'Converta dados em string usando a sintaxe do modelo Jinja',
    'http-request': 'Permite enviar solicitações de servidor sobre o protocolo HTTP',
    'variable-assigner': 'Atribua variáveis em diferentes ramos à mesma variável para alcançar uma configuração unificada de pós-nós',
  },
  operator: {
    zoomIn: 'Aumentar zoom',
    zoomOut: 'Diminuir zoom',
    zoomTo50: 'Zoom para 50%',
    zoomTo100: 'Zoom para 100%',
    zoomToFit: 'Zoom para ajustar',
  },
  panel: {
    userInputField: 'Campo de entrada do usuário',
    changeBlock: 'Mudar bloco',
    helpLink: 'Link de ajuda',
    about: 'Sobre',
    createdBy: 'Criado por ',
    nextStep: 'Próximo passo',
    addNextStep: 'Adicionar o próximo bloco neste fluxo de trabalho',
    selectNextStep: 'Selecionar próximo bloco',
    runThisStep: 'Executar este passo',
    checklist: 'Lista de verificação',
    checklistTip: 'Certifique-se de resolver todos os problemas antes de publicar',
    checklistResolved: 'Todos os problemas estão resolvidos',
    organizeBlocks: 'Organizar blocos',
    change: 'Mudar',
  },
  nodes: {
    common: {
      outputVars: 'Variáveis de saída',
      insertVarTip: 'Pressione a tecla \'/\' para inserir',
      memory: {
        memory: 'Memória',
        memoryTip: 'Configurações de memória do chat',
        windowSize: 'Tamanho da janela',
        conversationRoleName: 'Nome do papel na conversa',
        user: 'Prefixo do usuário',
        assistant: 'Prefixo do assistente',
      },
      memories: {
        title: 'Memórias',
        tip: 'Memória do chat',
        builtIn: 'Incorporada',
      },
    },
    start: {
      required: 'obrigatório',
      inputField: 'Campo de entrada',
      builtInVar: 'Variáveis incorporadas',
      outputVars: {
        query: 'Entrada do usuário',
        memories: {
          des: 'Histórico da conversa',
          type: 'Tipo de mensagem',
          content: 'Conteúdo da mensagem',
        },
        files: 'Lista de arquivos',
      },
      noVarTip: 'Defina as entradas que podem ser usadas no fluxo de trabalho',
    },
    end: {
      outputs: 'Saídas',
      output: {
        type: 'Tipo de saída',
        variable: 'Variável de saída',
      },
      type: {
        'none': 'Nenhum',
        'plain-text': 'Texto simples',
        'structured': 'Estruturado',
      },
    },
    answer: {
      answer: 'Resposta',
      outputVars: 'Variáveis de saída',
    },
    llm: {
      model: 'modelo',
      variables: 'variáveis',
      context: 'contexto',
      contextTooltip: 'Você pode importar conhecimento como contexto',
      notSetContextInPromptTip: 'Para habilitar o recurso de contexto, preencha a variável de contexto em PROMPT.',
      prompt: 'prompt',
      roleDescription: {
        system: 'Dar instruções de alto nível para a conversa',
        user: 'Fornecer instruções, consultas ou qualquer entrada baseada em texto para o modelo',
        assistant: 'Respostas do modelo com base nas mensagens do usuário',
      },
      addMessage: 'Adicionar mensagem',
      vision: 'visão',
      files: 'Arquivos',
      resolution: {
        name: 'Resolução',
        high: 'Alta',
        low: 'Baixa',
      },
      outputVars: {
        output: 'Gerar conteúdo',
        usage: 'Informações de uso do modelo',
      },
      singleRun: {
        variable: 'Variável',
      },
    },
    knowledgeRetrieval: {
      queryVariable: 'Variável de consulta',
      knowledge: 'Conhecimento',
      outputVars: {
        output: 'Dados segmentados de recuperação',
        content: 'Conteúdo segmentado',
        title: 'Título segmentado',
        icon: 'Ícone segmentado',
        url: 'URL segmentada',
        metadata: 'Outros metadados',
      },
    },
    http: {
      inputVars: 'Variáveis de entrada',
      api: 'API',
      apiPlaceholder: 'Insira o URL, digite \'/\' para inserir a variável',
      notStartWithHttp: 'A API deve começar com http:// ou https://',
      key: 'Chave',
      value: 'Valor',
      bulkEdit: 'Editar em massa',
      keyValueEdit: 'Edição de chave-valor',
      headers: 'Cabeçalhos',
      params: 'Parâmetros',
      body: 'Corpo',
      outputVars: {
        body: 'Conteúdo da resposta',
        statusCode: 'Código de status da resposta',
        headers: 'Lista de cabeçalhos de resposta JSON',
        files: 'Lista de arquivos',
      },
      authorization: {
        'authorization': 'Autorização',
        'authorizationType': 'Tipo de autorização',
        'no-auth': 'Nenhum',
        'api-key': 'Chave da API',
        'auth-type': 'Tipo de autenticação',
        'basic': 'Básica',
        'bearer': 'Bearer',
        'custom': 'Personalizada',
        'api-key-title': 'Chave da API',
        'header': 'Cabeçalho',
      },
      insertVarPlaceholder: 'digite \'/\' para inserir variável',
    },
    code: {
      inputVars: 'Variáveis de entrada',
      outputVars: 'Variáveis de saída',
    },
    templateTransform: {
      inputVars: 'Variáveis de entrada',
      code: 'Código',
      codeSupportTip: 'Suporta apenas Jinja2',
      outputVars: {
        output: 'Conteúdo transformado',
      },
    },
    ifElse: {
      if: 'Se',
      else: 'Senão',
      elseDescription: 'Usado para definir a lógica que deve ser executada quando a condição if não é atendida.',
      and: 'e',
      or: 'ou',
      operator: 'Operador',
      notSetVariable: 'Por favor, defina a variável primeiro',
      comparisonOperator: {
        'contains': 'contém',
        'not contains': 'não contém',
        'start with': 'começa com',
        'end with': 'termina com',
        'is': 'é',
        'is not': 'não é',
        'empty': 'vazio',
        'not empty': 'não está vazio',
        'null': 'nulo',
        'not null': 'não é nulo',
      },
      enterValue: 'Digite o valor',
      addCondition: 'Adicionar condição',
      conditionNotSetup: 'Condição NÃO configurada',
    },
    variableAssigner: {
      title: 'Atribuir variáveis',
      outputType: 'Tipo de saída',
      outputVarType: 'Tipo de variável de saída',
      varNotSet: 'Variável não definida',
      noVarTip: 'Adicione as variáveis a serem atribuídas',
      type: {
        string: 'String',
        number: 'Número',
        object: 'Objeto',
        array: 'Array',
      },
      outputVars: {
        output: 'Valor da variável atribuída',
      },
    },
    tool: {
      toAuthorize: 'Para autorizar',
      inputVars: 'Variáveis de entrada',
      outputVars: {
        text: 'conteúdo gerado pela ferramenta',
        files: {
          title: 'arquivos gerados pela ferramenta',
          type: 'Tipo de suporte. Agora apenas suporte a imagem',
          transfer_method: 'Método de transferência. O valor é remote_url ou local_file',
          url: 'URL da imagem',
          upload_file_id: 'ID de upload do arquivo',
        },
      },
    },
    questionClassifiers: {
      model: 'modelo',
      inputVars: 'Variáveis de entrada',
      class: 'Classe',
      classNamePlaceholder: 'Escreva o nome da classe',
      advancedSetting: 'Configuração avançada',
      topicName: 'Nome do tópico',
      topicPlaceholder: 'Escreva o nome do tópico',
      addClass: 'Adicionar classe',
      instruction: 'Instrução',
      instructionPlaceholder: 'Escreva sua instrução',
    },
  },
  tracing: {
    stopBy: 'Parado por {{user}}',
  },
}

export default translation
