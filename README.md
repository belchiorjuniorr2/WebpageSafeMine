# SafeMine — Landing Page

Landing page comercial para o app **SafeMine** (registro de ocorrências de segurança em mineração por voz). Stack: Next.js 16 (App Router) + Tailwind CSS v4 + Resend.

## Setup

```bash
npm install
cp .env.local.example .env.local
# preencha RESEND_API_KEY, LEAD_EMAIL_TO, LEAD_EMAIL_FROM
npm run dev
```

Abra http://localhost:3000.

## Variáveis de ambiente

| Var | Descrição |
| --- | --- |
| `RESEND_API_KEY` | Chave do Resend (https://resend.com) |
| `LEAD_EMAIL_TO` | Caixa que recebe os leads |
| `LEAD_EMAIL_FROM` | Remetente — endereço de domínio verificado no Resend |

Sem essas variáveis a API `/api/lead` retorna 500 — formulário não envia.

## Estrutura

```
app/
  layout.js          metadata + Inter
  page.js            compõe as seções
  globals.css        @theme tokens (cores, fonte)
  api/lead/route.js  POST → valida → Resend
components/
  Navbar.js, Footer.js, Logo.js, Placeholder.js
  sections/
    Hero.js, Modules.js, HowItWorks.js, Benefits.js, Demo.js, DemoForm.js
lib/modules.js       dados dos 6 módulos de relatório
```

## Substituir placeholders por imagens

Os blocos de imagem usam o componente `<Placeholder />`. Para encontrá-los:

```bash
grep -rn "data-todo-image" app components
```

Aspect ratios: hero `9/19.5` (mockup celular), how-it-works `4/3`.

## Deploy (Vercel)

```bash
npm i -g vercel
vercel link
vercel env add RESEND_API_KEY
vercel env add LEAD_EMAIL_TO
vercel env add LEAD_EMAIL_FROM
vercel --prod
```

Antes de produção, verificar o domínio remetente no painel do Resend (registros DNS) — caso contrário o `from` é rejeitado.
