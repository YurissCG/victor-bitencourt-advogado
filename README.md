# Bitencourt Advocacia

Site institucional do escritório Bitencourt Advocacia (advogado Victor Bitencourt), atuação
consultiva e contenciosa em Belo Horizonte/MG. Construído em Next.js, mobile first, com
integração direta de todos os pontos de contato para o WhatsApp.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- motion (Framer Motion) para as animações de entrada e scroll
- lucide-react para os ícones

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Estrutura de conteúdo

Todo o conteúdo textual (nome, telefone, endereço, áreas de atuação, FAQ, depoimentos etc.)
está centralizado em [`src/lib/content.ts`](src/lib/content.ts).

**Importante:** os campos comentados com `FICTÍCIO` nesse arquivo são dados ilustrativos
inventados para preencher o layout (número da OAB, formação, ano de fundação, estatísticas,
e-mail institucional e depoimentos). Eles precisam ser substituídos por informações reais e
validadas, inclusive junto à OAB, antes da publicação oficial do site. O rodapé do site já
exibe um aviso sobre isso.

## Imagens

As imagens de `public/images` (foto do advogado e logo) vieram da pasta `img/` original,
fornecida como referência. `img/` foi mantida no repositório apenas como fonte para reprocessamento futuro (ex.: remoção de fundo em maior qualidade).

## Deploy

Projeto pronto para deploy direto na [Vercel](https://vercel.com/new) (framework Next.js
detectado automaticamente).
