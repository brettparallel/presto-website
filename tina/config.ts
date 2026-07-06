import { defineConfig } from 'tinacms';

export default defineConfig({
  // In local dev: run `npx tinacms dev -c "astro dev"` to get local editing.
  // In production: set TINA_PUBLIC_CLIENT_ID and TINA_TOKEN in Cloudflare env vars.
  clientId: process.env.TINA_PUBLIC_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  branch: process.env.GITHUB_BRANCH || 'main',

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'assets',
      publicFolder: 'public',
    },
  },

  schema: {
    collections: [
      {
        name: 'pages',
        label: 'Pages',
        path: 'src/content/pages',
        format: 'json',
        fields: [
          // ── SEO ──
          {
            type: 'object',
            name: 'seo',
            label: 'SEO',
            fields: [
              { type: 'string', name: 'title', label: 'Page Title', required: true },
              { type: 'string', name: 'description', label: 'Meta Description', ui: { component: 'textarea' }, required: true },
              { type: 'image', name: 'ogImage', label: 'OG Image (optional)' },
            ],
          },
          // ── HERO ──
          {
            type: 'object',
            name: 'hero',
            label: 'Hero',
            fields: [
              { type: 'string', name: 'badge', label: 'Badge text' },
              { type: 'string', name: 'headline', label: 'Headline', ui: { component: 'textarea' }, required: true },
              { type: 'string', name: 'subline', label: 'Sub-line', ui: { component: 'textarea' } },
              {
                type: 'object', name: 'primaryCta', label: 'Primary CTA',
                fields: [{ type: 'string', name: 'label', label: 'Label' }, { type: 'string', name: 'href', label: 'Link' }],
              },
              {
                type: 'object', name: 'secondaryCta', label: 'Secondary CTA',
                fields: [{ type: 'string', name: 'label', label: 'Label' }, { type: 'string', name: 'href', label: 'Link' }],
              },
              { type: 'string', name: 'footnote', label: 'Footnote' },
            ],
          },
          // ── TRUST BAR ──
          {
            type: 'object', name: 'trustBar', label: 'Trust Bar',
            fields: [{ type: 'string', name: 'text', label: 'Trust text', ui: { component: 'textarea' } }],
          },
          // ── PROBLEM ──
          {
            type: 'object',
            name: 'problem',
            label: 'Problem section',
            fields: [
              { type: 'string', name: 'eyebrow', label: 'Eyebrow' },
              { type: 'string', name: 'heading', label: 'Heading' },
              { type: 'string', name: 'body', label: 'Body', ui: { component: 'textarea' } },
              { type: 'string', name: 'pains', label: 'Pain points', list: true },
              { type: 'string', name: 'fixLabel', label: 'Fix label' },
              { type: 'string', name: 'fixHeadline', label: 'Fix headline' },
            ],
          },
          // ── HOW IT WORKS ──
          {
            type: 'object',
            name: 'howItWorks',
            label: 'How it works',
            fields: [
              { type: 'string', name: 'eyebrow', label: 'Eyebrow' },
              { type: 'string', name: 'heading', label: 'Heading' },
              {
                type: 'object', name: 'steps', label: 'Steps', list: true,
                fields: [
                  { type: 'string', name: 'num', label: 'Number' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
                  { type: 'boolean', name: 'featured', label: 'Featured (lime card)' },
                ],
              },
            ],
          },
          // ── PORTFOLIO ──
          {
            type: 'object',
            name: 'portfolio',
            label: 'Portfolio',
            fields: [
              { type: 'string', name: 'eyebrow', label: 'Eyebrow' },
              { type: 'string', name: 'heading', label: 'Heading' },
              { type: 'string', name: 'subline', label: 'Sub-line' },
              { type: 'string', name: 'rowA', label: 'Row A image slugs', list: true },
              { type: 'string', name: 'rowB', label: 'Row B image slugs', list: true },
            ],
          },
          // ── INCLUDED ──
          {
            type: 'object',
            name: 'included',
            label: "What's included",
            fields: [
              { type: 'string', name: 'eyebrow', label: 'Eyebrow' },
              { type: 'string', name: 'heading', label: 'Heading' },
              {
                type: 'object', name: 'cards', label: 'Cards', list: true,
                fields: [
                  { type: 'string', name: 'title', label: 'Title' },
                  {
                    type: 'string', name: 'variant', label: 'Color variant',
                    options: ['accent', 'navy', 'lime'],
                  },
                  { type: 'string', name: 'items', label: 'Items', list: true },
                ],
              },
              { type: 'string', name: 'note', label: 'Footer note' },
            ],
          },
          // ── PRICING ──
          {
            type: 'object',
            name: 'pricing',
            label: 'Pricing',
            fields: [
              { type: 'string', name: 'eyebrow', label: 'Eyebrow' },
              { type: 'string', name: 'heading', label: 'Heading' },
              { type: 'string', name: 'subline', label: 'Sub-line' },
              { type: 'string', name: 'note', label: 'Note', ui: { component: 'textarea' } },
              {
                type: 'object', name: 'tiers', label: 'Plans', list: true,
                fields: [
                  { type: 'string', name: 'name', label: 'Plan name' },
                  { type: 'string', name: 'tagline', label: 'Tagline' },
                  { type: 'string', name: 'price', label: 'Price (number only, e.g. 2,450)' },
                  { type: 'boolean', name: 'featured', label: 'Featured (dark card)' },
                  { type: 'string', name: 'badge', label: 'Badge text (optional)' },
                  { type: 'string', name: 'items', label: 'Feature list items', list: true },
                  { type: 'string', name: 'bestFor', label: 'Best for' },
                  { type: 'string', name: 'ctaLabel', label: 'CTA label' },
                  { type: 'string', name: 'ctaHref', label: 'CTA link' },
                ],
              },
            ],
          },
          // ── PLATFORMS ──
          {
            type: 'object',
            name: 'platforms',
            label: 'Platforms marquee',
            fields: [
              { type: 'string', name: 'label', label: 'Label' },
              { type: 'string', name: 'tools', label: 'Tool names', list: true },
            ],
          },
          // ── FAQ ──
          {
            type: 'object',
            name: 'faq',
            label: 'FAQ',
            fields: [
              { type: 'string', name: 'eyebrow', label: 'Eyebrow' },
              { type: 'string', name: 'heading', label: 'Heading' },
              {
                type: 'object', name: 'items', label: 'Questions', list: true,
                fields: [
                  { type: 'string', name: 'question', label: 'Question' },
                  { type: 'string', name: 'answer', label: 'Answer', ui: { component: 'textarea' } },
                ],
              },
            ],
          },
          // ── FINAL CTA ──
          {
            type: 'object',
            name: 'finalCta',
            label: 'Final CTA',
            fields: [
              { type: 'string', name: 'headline', label: 'Headline', ui: { component: 'textarea' } },
              { type: 'string', name: 'subline', label: 'Sub-line', ui: { component: 'textarea' } },
              {
                type: 'object', name: 'primaryCta', label: 'Primary CTA',
                fields: [{ type: 'string', name: 'label', label: 'Label' }, { type: 'string', name: 'href', label: 'Link' }],
              },
              {
                type: 'object', name: 'secondaryCta', label: 'Secondary CTA',
                fields: [{ type: 'string', name: 'label', label: 'Label' }, { type: 'string', name: 'href', label: 'Link' }],
              },
              { type: 'string', name: 'footnote', label: 'Footnote' },
            ],
          },
          // ── FOOTER ──
          {
            type: 'object',
            name: 'footer',
            label: 'Footer',
            fields: [
              { type: 'string', name: 'tagline', label: 'Tagline', ui: { component: 'textarea' } },
              { type: 'string', name: 'copyright', label: 'Copyright' },
              {
                type: 'object', name: 'columns', label: 'Link columns', list: true,
                fields: [
                  { type: 'string', name: 'heading', label: 'Column heading' },
                  {
                    type: 'object', name: 'links', label: 'Links', list: true,
                    fields: [
                      { type: 'string', name: 'label', label: 'Label' },
                      { type: 'string', name: 'href', label: 'URL' },
                    ],
                  },
                ],
              },
            ],
          },
          // ── COMPARE ──
          {
            type: 'object',
            name: 'compare',
            label: 'Compare table',
            fields: [
              { type: 'string', name: 'eyebrow', label: 'Eyebrow' },
              { type: 'string', name: 'heading', label: 'Heading' },
              {
                type: 'object', name: 'rows', label: 'Rows', list: true,
                fields: [
                  { type: 'string', name: 'label', label: 'Row label' },
                  { type: 'string', name: 'presto', label: 'Presto (yes/no/text)' },
                  { type: 'string', name: 'agency', label: 'Agency' },
                  { type: 'string', name: 'freelancer', label: 'Freelancer' },
                  { type: 'string', name: 'inhouse', label: 'In-house' },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'thankYou',
        label: 'Thank You Page',
        path: 'src/content/thank-you',
        format: 'json',
        fields: [
          // ── SEO ──
          {
            type: 'object',
            name: 'seo',
            label: 'SEO',
            fields: [
              { type: 'string', name: 'title', label: 'Page Title', required: true },
              { type: 'string', name: 'description', label: 'Meta Description', ui: { component: 'textarea' }, required: true },
            ],
          },
          // ── HERO ──
          {
            type: 'object',
            name: 'hero',
            label: 'Hero',
            fields: [
              { type: 'string', name: 'badge', label: 'Badge text' },
              { type: 'string', name: 'headlineLine1', label: 'Headline — line 1' },
              { type: 'string', name: 'headlineLine2', label: 'Headline — line 2 (highlighted)' },
              { type: 'string', name: 'subline', label: 'Sub-line', ui: { component: 'textarea' } },
            ],
          },
          // ── BANNER ──
          {
            type: 'object', name: 'banner', label: 'Lime banner strip',
            fields: [{ type: 'string', name: 'text', label: 'Banner text' }],
          },
          // ── NEXT STEPS ──
          {
            type: 'object',
            name: 'nextSteps',
            label: 'Next steps',
            fields: [
              { type: 'string', name: 'eyebrow', label: 'Eyebrow' },
              { type: 'string', name: 'heading', label: 'Heading' },
              {
                type: 'object', name: 'steps', label: 'Steps', list: true,
                fields: [
                  { type: 'string', name: 'num', label: 'Number' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
                  {
                    type: 'string', name: 'variant', label: 'Card style',
                    options: ['lime', 'navy', 'outline'],
                  },
                ],
              },
            ],
          },
          // ── CTA ──
          {
            type: 'object',
            name: 'cta',
            label: 'Bottom CTA card',
            fields: [
              { type: 'string', name: 'label', label: 'Eyebrow label' },
              { type: 'string', name: 'text', label: 'Text', ui: { component: 'textarea' } },
              { type: 'string', name: 'buttonLabel', label: 'Button label' },
              { type: 'string', name: 'buttonHref', label: 'Button link' },
            ],
          },
        ],
      },
      {
        name: 'reveal',
        label: 'The Reveal (report landing page)',
        path: 'src/content/the-reveal',
        format: 'json',
        fields: [
          // ── SEO ──
          {
            type: 'object',
            name: 'seo',
            label: 'SEO',
            fields: [
              { type: 'string', name: 'title', label: 'Page Title', required: true },
              { type: 'string', name: 'description', label: 'Meta Description', ui: { component: 'textarea' }, required: true },
            ],
          },
          // ── HERO ──
          {
            type: 'object',
            name: 'hero',
            label: 'Hero',
            fields: [
              { type: 'string', name: 'badge', label: 'Badge text' },
              { type: 'string', name: 'headlineLine1', label: 'Headline — line 1' },
              { type: 'string', name: 'headlineLine2', label: 'Headline — line 2 (highlighted)' },
              { type: 'string', name: 'subline', label: 'Sub-line', ui: { component: 'textarea' } },
              { type: 'string', name: 'ctaLabel', label: 'Hero CTA label (scrolls to form)' },
            ],
          },
          // ── BANNER ──
          {
            type: 'object', name: 'banner', label: 'Lime banner strip',
            fields: [{ type: 'string', name: 'text', label: 'Banner text' }],
          },
          // ── HIGHLIGHTS ──
          {
            type: 'object',
            name: 'highlights',
            label: "This issue's highlights",
            fields: [
              { type: 'string', name: 'eyebrow', label: 'Eyebrow' },
              { type: 'string', name: 'heading', label: 'Heading' },
              {
                type: 'object', name: 'items', label: 'Highlight cards', list: true,
                fields: [
                  { type: 'string', name: 'num', label: 'Number' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
                  {
                    type: 'string', name: 'variant', label: 'Card style',
                    options: ['lime', 'navy', 'outline'],
                  },
                ],
              },
            ],
          },
          // ── FORM ──
          {
            type: 'object',
            name: 'form',
            label: 'Signup / download form',
            fields: [
              { type: 'string', name: 'eyebrow', label: 'Eyebrow' },
              { type: 'string', name: 'heading', label: 'Heading' },
              { type: 'string', name: 'trustLine', label: 'Trust / reassurance line' },
              { type: 'string', name: 'emailLabel', label: 'Email field label' },
              { type: 'string', name: 'buttonLabel', label: 'Submit button label' },
              { type: 'string', name: 'successHeading', label: 'Success heading' },
              { type: 'string', name: 'successText', label: 'Success text', ui: { component: 'textarea' } },
              { type: 'string', name: 'downloadLabel', label: 'Download button label' },
            ],
          },
          { type: 'string', name: 'footerNote', label: 'Footer note' },
        ],
      },
    ],
  },
});
