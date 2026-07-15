import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pagesCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/pages' }),
  schema: z.object({
    seo: z.object({
      title: z.string(),
      description: z.string(),
      ogImage: z.string().optional(),
    }),
    hero: z.object({
      badge: z.string(),
      headline: z.string(),
      subline: z.string(),
      primaryCta: z.object({ label: z.string(), href: z.string() }),
      secondaryCta: z.object({ label: z.string(), href: z.string() }),
      footnote: z.string(),
    }),
    trustBar: z.object({ text: z.string() }),
    problem: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      body: z.string(),
      pains: z.array(z.string()),
      fixLabel: z.string(),
      fixHeadline: z.string(),
    }),
    howItWorks: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      steps: z.array(z.object({
        num: z.string(),
        title: z.string(),
        description: z.string(),
        featured: z.boolean().optional(),
      })),
    }),
    portfolio: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      subline: z.string(),
      cta: z.object({ label: z.string(), href: z.string() }),
      rowA: z.array(z.string()),
      rowB: z.array(z.string()),
    }),
    included: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      cards: z.array(z.object({
        title: z.string(),
        variant: z.enum(['accent', 'navy', 'lime']),
        items: z.array(z.string()),
      })),
      note: z.string(),
    }),
    compare: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      rows: z.array(z.object({
        label: z.string(),
        presto: z.string(),
        agency: z.string(),
        freelancer: z.string(),
        inhouse: z.string(),
      })),
    }),
    pricing: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      subline: z.string(),
      note: z.string(),
      tiers: z.array(z.object({
        name: z.string(),
        tagline: z.string(),
        price: z.string(),
        featured: z.boolean().optional(),
        badge: z.string().optional(),
        items: z.array(z.string()),
        bestFor: z.string(),
        ctaLabel: z.string(),
        ctaHref: z.string(),
      })),
    }),
    platforms: z.object({
      label: z.string(),
      tools: z.array(z.string()),
    }),
    revealPromo: z.object({
      eyebrow: z.string(),
      headline: z.string(),
      subline: z.string(),
      cta: z.object({ label: z.string(), href: z.string() }),
      image: z.string(),
      imageAlt: z.string(),
    }),
    faq: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      items: z.array(z.object({
        question: z.string(),
        answer: z.string(),
      })),
    }),
    finalCta: z.object({
      headline: z.string(),
      subline: z.string(),
      primaryCta: z.object({ label: z.string(), href: z.string() }),
      secondaryCta: z.object({ label: z.string(), href: z.string() }),
      footnote: z.string(),
    }),
    footer: z.object({
      tagline: z.string(),
      copyright: z.string(),
      columns: z.array(z.object({
        heading: z.string(),
        links: z.array(z.object({ label: z.string(), href: z.string() })),
      })),
    }),
  }),
});

const thankYouCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/thank-you' }),
  schema: z.object({
    seo: z.object({
      title: z.string(),
      description: z.string(),
    }),
    hero: z.object({
      badge: z.string(),
      headlineLine1: z.string(),
      headlineLine2: z.string(),
      subline: z.string(),
    }),
    banner: z.object({ text: z.string() }),
    nextSteps: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      steps: z.array(z.object({
        num: z.string(),
        title: z.string(),
        description: z.string(),
        variant: z.enum(['lime', 'navy', 'outline']),
      })),
    }),
    cta: z.object({
      label: z.string(),
      text: z.string(),
      buttonLabel: z.string(),
      buttonHref: z.string(),
    }),
  }),
});

const revealCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/the-reveal' }),
  schema: z.object({
    seo: z.object({
      title: z.string(),
      description: z.string(),
    }),
    hero: z.object({
      badge: z.string(),
      headlineLine1: z.string(),
      headlineLine2: z.string(),
      subline: z.string(),
      ctaLabel: z.string(),
    }),
    banner: z.object({ text: z.string() }),
    highlights: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      items: z.array(z.object({
        num: z.string(),
        title: z.string(),
        description: z.string(),
        variant: z.enum(['lime', 'navy', 'outline']),
      })),
    }),
    form: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      trustLine: z.string(),
      emailLabel: z.string(),
      buttonLabel: z.string(),
      successHeading: z.string(),
      successText: z.string(),
      downloadLabel: z.string(),
    }),
    footerNote: z.string(),
  }),
});

const caseStudiesCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/case-studies' }),
  schema: z.object({
    order: z.number(),
    featured: z.boolean().optional(),
    category: z.string(),
    title: z.string(),
    tagline: z.string(),
    cardTags: z.array(z.string()).optional(),
    description: z.string(),
    deliverables: z.array(z.string()),
    turnaround: z.string(),
    heroImage: z.string(),
    heroImageAlt: z.string(),
    cardImage: z.string(),
    cardImageAlt: z.string(),
    gallery: z.array(z.object({
      image: z.string(),
      alt: z.string(),
    })),
    seo: z.object({
      title: z.string(),
      description: z.string(),
    }),
  }),
});

const workCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/work' }),
  schema: z.object({
    seo: z.object({
      title: z.string(),
      description: z.string(),
    }),
    hero: z.object({
      eyebrow: z.string(),
      headline: z.string(),
      subline: z.string(),
      stats: z.array(z.object({
        value: z.string(),
        label: z.string(),
      })),
    }),
  }),
});

export const collections = {
  pages: pagesCollection,
  thankYou: thankYouCollection,
  reveal: revealCollection,
  caseStudies: caseStudiesCollection,
  work: workCollection,
};
