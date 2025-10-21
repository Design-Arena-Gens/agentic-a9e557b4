# Goku Battle Compilation

Este repositório contém dois componentes principais:

1. Um script Python que gera 30 vídeos curtos de Goku enfrentando diferentes inimigos e, em seguida, concatena todos em um único grande vídeo.
2. Uma aplicação Next.js hospedável na Vercel que apresenta o vídeo final e descreve cada segmento de batalha.

## 🧰 Requisitos

- Python 3.10 ou superior
- [FFmpeg](https://ffmpeg.org/) instalado e disponível no `PATH`
- Node.js 18+ e npm (para a interface web)

## 🎬 Geração dos vídeos

```bash
python3 scripts/generate_videos.py
```

O script cria:

- Vídeos individuais em `videos/segment_XX.mp4`
- Um arquivo de apoio `videos/concat_list.txt`
- O vídeo completo `videos/goku_super_video.mp4`

Após gerar os vídeos, copie o arquivo final para a pasta `web/public` para que a interface web o sirva (o script já realiza esta etapa quando executado a partir da raiz do projeto).

## 🌐 Interface web (Next.js + Tailwind)

```bash
cd web
npm install
npm run dev
```

Acesse `http://localhost:3000` para visualizar a página com o player e a lista dos 30 confrontos.

### Build e deploy

```bash
npm run lint
npm run build
```

Para publicar na Vercel:

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-a9e557b4
```

A aplicação de produção fica disponível em **https://agentic-a9e557b4.vercel.app**.

## 📁 Estrutura

```
.
├── scripts/
│   └── generate_videos.py        # Automação da criação e concatenação dos vídeos
├── videos/                       # Saída dos vídeos segmentados e final
├── web/                          # Aplicação Next.js
│   ├── public/                   # Vídeo final e assets públicos
│   └── src/app/page.tsx          # Página principal estilizada
└── README.md
```

## ⚠️ Observação legal

Os vídeos gerados são estilizados e utilizam apenas textos e cores. Nenhum material audiovisual oficial de Dragon Ball é redistribuído; use este projeto somente para fins pessoais e educativos.
