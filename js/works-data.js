/* ==========================================================
   Luz Somodio — Featured Works data
   ----------------------------------------------------------
   HOW TO ADD A NEW WORK
   1. Put web-sized images in assets/works/ (WebP or JPG, ~1600px wide).
   2. Add a block to PROJECTS below (copy an existing one).
   3. Save. The card, filter count and case study appear on the
      Featured Works page automatically.
   Each work has a  sub  (sub-category) and a  why  { hook, reason } shown in the case study.
   ========================================================== */

var CATEGORIES = [
  {
    "id": "social",
    "label": "Social Media"
  },
  {
    "id": "design",
    "label": "Graphic Design"
  },
  {
    "id": "web",
    "label": "Web Design"
  },
  {
    "id": "ai",
    "label": "AI Automation"
  }
];

/* Fields: id, cat, title, blurb, intro, images[{src,alt}] (for a video item: src = poster image, video = mp4 file, title), cover{src,alt,fit,pos,bg}, sections[{title,text|steps|list|cards}], tags[], note, unit, teaser */
var PROJECTS = [
  {
    id: "trinity-row-reels",
    cat: "social",
    title: "Trinity Row Residences — Instagram Reels",
    blurb: "Four short vertical reels for a coastal townhome development: lifestyle footage, 3D home renders, brand end cards and a call to action.",
    intro: "Short-form reels made for Trinity Row Residences, a coastal townhome development. They pair slow, calm coastal footage and 3D home renders with minimal on-screen text and the Trinity Row brand.",
    unit: "reels",
    note: "Viewing only — the reels are not offered for download.",
    cover: {
      src: "assets/works/video/reel-home-tour.webp",
      alt: "Trinity Row reel: dark-clad coastal townhome exterior",
      pos: "center 30%"
    },
    images: [
      {
        src: "assets/works/video/reel-build.webp",
        video: "assets/works/video/reel-build.mp4",
        title: "Trinity Row — Build your home with us",
        alt: "Reel: Trinity Row interiors and exteriors with the logo, tagline and a “Build your home with us” call to action"
      },
      {
        src: "assets/works/video/reel-coast.webp",
        video: "assets/works/video/reel-coast.mp4",
        title: "Drifting with the rhythm of the coast",
        alt: "Reel: “Drifting with the rhythm of the coast.” Aerial town and harbour footage, then sailing"
      },
      {
        src: "assets/works/video/reel-ocean.webp",
        video: "assets/works/video/reel-ocean.mp4",
        title: "A life connected to the ocean",
        alt: "Reel: “A life connected to the ocean.” Aerial yacht, sailing and rocky coastline, ending on the Trinity Row logo"
      },
      {
        src: "assets/works/video/reel-home-tour.webp",
        video: "assets/works/video/reel-home-tour.mp4",
        title: "Townhome home tour",
        alt: "Reel: townhome exteriors and bright interiors, from staircases to living spaces and finishes"
      }
    ],
    sections: [
      {
        title: "What’s inside",
        list: [
          "Vertical 9:16 reels sized for Instagram and Facebook",
          "Coastal lifestyle footage and 3D interior and exterior renders",
          "Short, quiet on-screen lines instead of heavy captions",
          "Logo and tagline reveals, plus an end card with a website and contact call to action"
        ]
      }
    ],
    tags: [
      "Reels",
      "Video editing",
      "Instagram",
      "Facebook",
      "Branding"
    ],
    sub: "Reels",
    why: {
      hook: "Open on the feeling, then say one calm line.",
      reason: "Luxury reads as restraint. I use slow coastal footage, very little on-screen text and a clean end card with a call to action, so the first seconds feel like the place and the last seconds tell people what to do."
    }
  },
  {
    id: "valleyfield-reel",
    cat: "social",
    title: "Valleyfield — “Soft Luxury” Reel",
    blurb: "A short vertical reel for Valleyfield: three interior scenes stacked in one frame, a “soft luxury” title and the Stamp & Hammer logo.",
    intro: "A 9-second vertical reel that presents the Valleyfield interiors — a dining and living space, a fireplace lounge and a kitchen — with a quiet “Valleyfield · soft luxury” title and the Stamp & Hammer logo to close.",
    unit: "reel",
    note: "Viewing only — the reel is not offered for download.",
    cover: {
      src: "assets/works/video/reel-valleyfield.webp",
      alt: "Valleyfield reel: three interior scenes stacked in one frame",
      pos: "center 40%"
    },
    images: [
      {
        src: "assets/works/video/reel-valleyfield.webp",
        video: "assets/works/video/reel-valleyfield.mp4",
        title: "Valleyfield — soft luxury",
        alt: "Reel: Valleyfield interiors with the title “soft luxury” and the Stamp & Hammer logo"
      }
    ],
    sections: [
      {
        title: "What’s inside",
        list: [
          "A vertical 9:16 reel sized for Instagram and Facebook",
          "Three interior scenes shown together in one frame",
          "A short “Valleyfield · soft luxury” title",
          "Stamp & Hammer logo end mark"
        ]
      }
    ],
    tags: [
      "Reels",
      "Video editing",
      "Instagram",
      "Real estate"
    ],
    sub: "Reels",
    why: {
      hook: "Lead with the mood, not the specs.",
      reason: "“Soft luxury” is a feeling, so the reel opens on texture, light and calm pacing before any details appear. Viewers who stay get the message without being sold to."
    }
  },
  {
    id: "ai-videos",
    cat: "social",
    title: "AI Generated Videos",
    blurb: "Four short vertical videos made with generative AI: a design center walkthrough, choosing finishes, and aerial and street-level views of a townhome community.",
    intro: "Concept videos created with AI video tools for real estate content. They show experiences that are hard or costly to film, such as a design center visit and a community with its amenities.",
    unit: "videos",
    note: "AI-generated concept footage, shown for viewing only. Not offered for download.",
    cover: {
      src: "assets/works/video/ai-aerial.webp",
      alt: "AI-generated aerial view of a townhome community with a pool, pickleball courts and playground"
    },
    images: [
      {
        src: "assets/works/video/ai-design-center.webp",
        video: "assets/works/video/ai-design-center.mp4",
        title: "Design center walkthrough",
        alt: "AI video: a bright design center with a reception desk and finish samples"
      },
      {
        src: "assets/works/video/ai-selections.webp",
        video: "assets/works/video/ai-selections.mp4",
        title: "Choosing finishes",
        alt: "AI video: two people choosing tiles and finish samples in a showroom"
      },
      {
        src: "assets/works/video/ai-aerial.webp",
        video: "assets/works/video/ai-aerial.mp4",
        title: "Community from above",
        alt: "AI video: aerial view of townhomes, pond, pool, courts and playground"
      },
      {
        src: "assets/works/video/ai-streetscape.webp",
        video: "assets/works/video/ai-streetscape.mp4",
        title: "Streetscape and playground",
        alt: "AI video: townhome street frontage moving to a playground"
      }
    ],
    sections: [
      {
        title: "What’s inside",
        list: [
          "Vertical 9:16 videos sized for Instagram and Facebook Reels",
          "Generated with AI video tools, then trimmed and compressed for the web",
          "Design center, finishes, community and amenity scenes"
        ]
      }
    ],
    tags: [
      "AI video",
      "Generative AI",
      "Real estate",
      "Reels",
      "Social content"
    ],
    sub: "AI Generated Videos",
    why: {
      hook: "Show the experience before there is anything to film.",
      reason: "With a small budget and no film crew, AI-generated footage lets me show moments like choosing finishes at a design center or walking a finished community. Each clip opens on the place itself, not on text, to stop the scroll. They are concept visuals, not footage of a finished site."
    }
  },
  {
    id: "meta-insights",
    cat: "social",
    title: "Meta Insights & Social Media Management",
    blurb: "Facebook and Instagram performance tracked in Meta Business Suite — views, interactions, follows, top content and audience.",
    intro: "Regular check-ins on Meta Business Suite Insights to see what the audience watches, interacts with and follows.",
    unit: "screenshots",
    note: "Account names, post titles and thumbnails are blurred to protect client privacy.",
    cover: {
      src: "assets/works/meta-insights-1.webp",
      alt: "Meta Business Suite content overview with post details blurred",
      pos: "top center"
    },
    images: [
      {
        src: "assets/works/meta-insights-1.webp",
        alt: "Meta Business Suite content overview: views, interactions and top content, with post details blurred"
      },
      {
        src: "assets/works/meta-insights-2.webp",
        alt: "Meta Business Suite performance overview with recent content blurred"
      },
      {
        src: "assets/works/meta-insights-3.webp",
        alt: "Meta Business Suite audience demographics: age, gender, top cities and countries"
      }
    ],
    sections: [
      {
        title: "What’s tracked",
        list: [
          "Views, 3-second views and watch time",
          "Content interactions, follows and unfollows",
          "Top content by views and by format",
          "Audience age, gender, cities and countries"
        ]
      },
      {
        title: "How it’s used",
        text: "Each period’s numbers are reviewed to see which formats earn reach and engagement, so the next content plan leans toward what the audience responds to."
      }
    ],
    tags: [
      "Meta Business Suite",
      "Facebook",
      "Instagram",
      "Analytics"
    ],
    sub: "Meta Insights",
    why: {
      hook: "Turn the numbers into a next step, not just a screenshot.",
      reason: "Clients rarely read a full dashboard. I pull out the figures that show what is working (reach, views, top posts) so the next round of content is decided by evidence. Client details are blurred."
    }
  },
  {
    id: "content-system",
    cat: "social",
    title: "Content Planning System",
    blurb: "A monthly content calendar, Canva template kit and content pillars that keep Instagram and Facebook consistent and scheduled ahead.",
    intro: "A repeatable system for planning, designing and scheduling social content that stays on-brand without last-minute scrambling.",
    images: [
      {
        src: "assets/social-media.webp",
        alt: "Content calendar, Canva designs and Instagram and Facebook feeds"
      }
    ],
    sections: [
      {
        title: "The challenge",
        text: "Posting was reactive and inconsistent, and ideas lived in scattered notes. The brand needed a steady, polished presence on Instagram and Facebook with very little extra budget."
      },
      {
        title: "What I built",
        steps: [
          "A monthly content calendar mapping every post, platform and format.",
          "Content pillars: behind the scenes, project highlights, before & after, tips and education, client journey, lifestyle, Q&A and community engagement.",
          "A Canva template kit with a consistent palette, type and layouts.",
          "Scheduled publishing and community replies through Meta Business Suite."
        ]
      },
      {
        title: "What it delivers",
        cards: [
          "A calendar planned ahead of time",
          "A recognizable, consistent visual style",
          "Faster content production through templates",
          "Active community engagement"
        ]
      }
    ],
    tags: [
      "Canva",
      "Instagram",
      "Facebook",
      "Meta Business Suite"
    ],
    sub: "Content Planning",
    why: {
      hook: "One plan everyone can see.",
      reason: "Posting consistently is mostly about planning ahead. Laying the month out in one place removes the last-minute scramble and keeps the feed looking like one brand."
    }
  },
  {
    id: "furniture-buying-lists",
    cat: "design",
    title: "Furniture Buying Lists",
    blurb: "Branded buying lists with product image, description, supplier and price, for a glamping tent project and a residential community.",
    intro: "Two furniture and styling buying lists: a glamping tent package with its palette and mood boards, and a “Curated Living” collection sheet for a residential community. Each puts product image, name, description and price in one clean, easy-to-compare layout.",
    unit: "pages",
    note: "Preview only — the original files are not available to download.",
    cover: {
      src: "assets/works/furniture-1.webp",
      alt: "Furniture and styling selections, page 1"
    },
    images: [
      {
        title: "Glamping tent — buying list, page 1",
        src: "assets/works/furniture-1.webp",
        alt: "Furniture buying list page 1: cover, buying list and material palette"
      },
      {
        title: "Glamping tent — buying list, page 2",
        src: "assets/works/furniture-2.webp",
        alt: "Furniture buying list page 2: seating, decking, palette and mood boards"
      },
      {
        title: "Residential community — collection sheet, version 1",
        src: "assets/works/collection-1.webp",
        alt: "Home Collections buying list, version 1: eight furniture items A to H with prices"
      },
      {
        title: "Residential community — collection sheet, version 2",
        src: "assets/works/collection-2.webp",
        alt: "Home Collections buying list, version 2: compact layout with the same eight items"
      }
    ],
    sections: [
      {
        title: "What’s inside",
        list: [
          "A buying list with product, description, supplier, price and image",
          "A warm, natural colour palette and design intent for the guest experience",
          "Eight lettered collection items (A to H) with prices beside a community render",
          "Mood and inspiration boards, in a calm branded layout"
        ]
      }
    ],
    tags: [
      "Buying list",
      "Interior styling",
      "Layout",
      "Palette"
    ],
    sub: "Proposals & Listings",
    why: {
      hook: "A buying list that looks like a mood board.",
      reason: "A plain list of items is hard to picture. Showing each piece next to its photo, price and palette lets the client see how the space fits together and compare choices at a glance."
    }
  },
  {
    id: "stamp-brand-boards",
    cat: "design",
    title: "Brand Boards — Stamp Design",
    blurb: "Three rebrand concept boards for an architecture and design studio: logo marks, brand voice, type, colour palette and applications.",
    intro: "Three brand-board concepts for a luxury architectural design, interiors and marketing studio. Each board pairs a logo direction with brand voice, typography, a colour palette and mock-ups of the identity in use.",
    unit: "boards",
    note: "Concept boards shown for viewing only — the original files are not available to download.",
    cover: {
      src: "assets/works/stamp-brand-2.webp",
      alt: "Stamp Design Studio brand board with logo, palette and mock-ups"
    },
    images: [
      {
        src: "assets/works/stamp-brand-1.webp",
        alt: "Stamp Design Inc. brand board: monogram logo, brand voice, typography, colour palette and mock-ups"
      },
      {
        src: "assets/works/stamp-brand-2.webp",
        alt: "Stamp Design Studio brand board: bronze mark, brand voice, typography, colour palette and mock-ups"
      },
      {
        src: "assets/works/stamp-brand-3.webp",
        alt: "Stamp Studio brand board: line-art mark, brand voice, typography, colour palette and mock-ups"
      }
    ],
    sections: [
      {
        title: "What’s on each board",
        list: [
          "A primary logo with a tagline: “Thoughtful spaces. Timeless living.”",
          "Primary icon, secondary mark and stamp mark",
          "Brand voice statement",
          "Heading and body typefaces with a four-colour palette",
          "Applications: business card, signage, notebook, website hero, embossed stamp and shopping bag"
        ]
      },
      {
        title: "Three directions",
        list: [
          "Stamp Design Inc. — a monogram in a square frame, navy and bronze",
          "Stamp Design Studio — a solid bronze mark with a warm, light palette",
          "Stamp Studio — a fine line-art mark on deep navy"
        ]
      }
    ],
    tags: [
      "Brand identity",
      "Logo",
      "Brand board",
      "Mock-ups"
    ],
    sub: "Branding",
    why: {
      hook: "The whole brand on one board.",
      reason: "A single board with the logo, palette, voice and mock-ups lets a client judge the direction at a glance and keeps everyone designing from the same page."
    }
  },
  {
    id: "jonis-logo",
    cat: "design",
    title: "Jonis Airline Ticketing Logo",
    blurb: "A logo that combines a location pin and an aircraft in one orange-to-blue mark.",
    intro: "A logo for Jonis Airline Ticketing: a location pin and an aircraft combined in one mark, in an orange-to-blue gradient.",
    cover: {
      src: "assets/works/logo-1.webp",
      alt: "Jonis Airline Ticketing logo",
      fit: "contain",
      bg: "#ffffff"
    },
    images: [
      {
        src: "assets/works/logo-1.webp",
        alt: "Jonis Airline Ticketing logo: a location pin with an aircraft"
      }
    ],
    sections: [
      {
        title: "The idea",
        text: "A map pin says destination and a swooping aircraft says travel. Together they communicate an airline ticketing service in a single, easy-to-recognise symbol."
      }
    ],
    tags: [
      "Logo",
      "Branding",
      "Travel"
    ],
    sub: "Branding",
    why: {
      hook: "A simple mark that works small.",
      reason: "A travel brand has to be recognizable on a ticket, an app icon or a bag tag. I kept the mark simple so it holds up at any size."
    }
  },
  {
    id: "greenleaf-village",
    cat: "design",
    title: "GreenLeaf Village Signage & Banners",
    blurb: "Roadside signs and fabric banners for a residential community, shown as flat artwork and on-site mockups.",
    intro: "Signage and banner designs for GreenLeaf Village, built around the line “Plant Yourself Here.” and a calm green-and-gold palette.",
    cover: {
      src: "assets/works/greenleaf-1.webp",
      alt: "GreenLeaf Village roadside sign mockup"
    },
    images: [
      {
        src: "assets/works/greenleaf-1.webp",
        alt: "Two GreenLeaf Village sign panels beside a country road"
      },
      {
        src: "assets/works/greenleaf-2.webp",
        alt: "GreenLeaf Village sign panels in a field"
      },
      {
        src: "assets/works/greenleaf-3.webp",
        alt: "GreenLeaf Village fabric pole banners, 2.5 ft by 8 ft"
      },
      {
        src: "assets/works/greenleaf-4.webp",
        alt: "GreenLeaf Village sign artwork, flat"
      }
    ],
    sections: [
      {
        title: "What’s included",
        list: [
          "Two sign panels with a shaped leaf-inspired top edge",
          "Fabric pole banners, 2.5 ft × 8 ft",
          "Flat artwork alongside on-site mockups",
          "Consistent messaging: spacious homes, 3+ acre lots, established community and natural surroundings"
        ]
      }
    ],
    tags: [
      "Signage",
      "Banners",
      "Branding",
      "Mockups"
    ],
    sub: "Signage & Banners",
    why: {
      hook: "Readable from a distance, approved before print.",
      reason: "Signage only works if people can read it quickly. I design for large, simple type and show it in mock-ups first, so the client can approve how it looks in place before anything is printed."
    }
  },
  {
    id: "recruitment-posters",
    cat: "design",
    title: "Recruitment Posters & Banners",
    blurb: "Hiring graphics for an office-based online English teaching centre: a requirements poster, a call-to-action post and a team banner.",
    intro: "Recruitment graphics for an office-based online English teaching centre, designed to be clear, friendly and easy to act on.",
    cover: {
      src: "assets/works/recruit-1.webp",
      alt: "Be an Office Based Online English Teacher post"
    },
    images: [
      {
        src: "assets/works/recruit-1.webp",
        alt: "Be an Office Based Online English Teacher — send us a message now"
      },
      {
        src: "assets/works/recruit-2.webp",
        alt: "Hiring poster listing requirements for an online English teacher"
      },
      {
        src: "assets/works/recruit-3.webp",
        alt: "Be one of us team banner with contact details"
      }
    ],
    sections: [
      {
        title: "What’s included",
        list: [
          "A requirements poster with a clear checklist and a “Be part of our growing family!” closer",
          "A “Send us a message now!” post with a clear call to action",
          "A “Be one of us!” team banner with contact details and the centre’s mascot logo"
        ]
      }
    ],
    tags: [
      "Recruitment",
      "Social graphics",
      "Banner"
    ],
    sub: "Social Graphics",
    why: {
      hook: "One role, one clear way to apply.",
      reason: "A hiring post has seconds to work. Each poster leads with the role and finishes with how to apply, with nothing extra in between."
    }
  },
  {
    id: "arcana-proposal",
    cat: "design",
    title: "Architectural Proposal — Arcana Muskoka",
    blurb: "A five-page architectural services proposal covering scope, delivery schedule, payment milestones and terms.",
    intro: "A proposal for Arcana Muskoka (June 2026) that lets a client see the project note, scope of work, schedule and terms at a glance.",
    unit: "pages",
    note: "Fees and totals are blurred. Preview only — the original file is not available to download.",
    cover: {
      src: "assets/works/proposal-1.webp",
      alt: "Proposal cover page",
      fit: "cover",
      pos: "top center"
    },
    images: [
      {
        src: "assets/works/proposal-1.webp",
        alt: "Proposal page 1: cover and project note"
      },
      {
        src: "assets/works/proposal-2.webp",
        alt: "Proposal page 2: scope overview, fees blurred"
      },
      {
        src: "assets/works/proposal-3.webp",
        alt: "Proposal page 3: scope and totals, fees blurred"
      },
      {
        src: "assets/works/proposal-4.webp",
        alt: "Proposal page 4: delivery schedule, payment milestones and terms"
      },
      {
        src: "assets/works/proposal-5.webp",
        alt: "Proposal page 5: back cover"
      }
    ],
    sections: [
      {
        title: "What’s inside",
        list: [
          "Cover page and a note on the vision for the project",
          "Scope overview with work packages from site planning to rendering",
          "Estimated four-phase delivery schedule",
          "Payment milestones, terms and conditions, and an acceptance section"
        ]
      }
    ],
    tags: [
      "Proposal",
      "Scope of work",
      "Delivery schedule",
      "Terms"
    ],
    sub: "Proposals & Listings",
    why: {
      hook: "Make the scope clear on the first read.",
      reason: "A proposal that is easy to scan gets approved faster. Scope, schedule and terms each get their own clean page, so there is less back-and-forth before the client says yes."
    }
  },
  {
    id: "dino-activity-book",
    cat: "design",
    title: "Dinosaur Tracing & Activity Book",
    blurb: "A children’s dinosaur tracing and activity book — bright cover and a sample inside spread with character cards.",
    intro: "A tracing and activity book for young children, with a cheerful cover and an inside spread that introduces ten dinosaurs.",
    cover: {
      src: "assets/works/dino-1.webp",
      alt: "Dinosaur Tracing & Activity Book cover"
    },
    images: [
      {
        src: "assets/works/dino-1.webp",
        alt: "Dinosaur Tracing & Activity Book cover"
      },
      {
        src: "assets/works/dino-2.webp",
        alt: "Inside spread: Meet the Dinosaurs and Let’s meet them"
      }
    ],
    sections: [
      {
        title: "What’s included",
        list: [
          "Cover listing tracing, mazes, dot-to-dot, coloring, counting and more",
          "Intro page: “Meet the Dinosaurs!” and “What are dinosaurs?”",
          "“Let’s meet them!” spread with ten colour-coded dinosaur cards",
          "Short, friendly text written for early readers"
        ]
      }
    ],
    tags: [
      "Book design",
      "Layout",
      "Kids’ learning"
    ],
    sub: "Book Design",
    why: {
      hook: "Big, friendly, easy to trace.",
      reason: "Young learners need large letters, plenty of space and a fun theme to keep going. The layout is built around those three things."
    }
  },
  {
    id: "printed-activity-books",
    cat: "design",
    title: "Printed Activity Books for Kids",
    blurb: "Printed copies of children’s dinosaur tracing, dinosaur coloring and scissor-skills books, with a look inside.",
    intro: "Photos of the finished, printed books: a dinosaur tracing and activity book, a dinosaur coloring book and a scissor-skills cut-and-paste book, plus a look at the pages inside.",
    cover: {
      src: "assets/works/books-1.webp",
      alt: "Printed dinosaur tracing, dinosaur coloring and scissor skills books"
    },
    images: [
      {
        src: "assets/works/books-1.webp",
        alt: "Printed dinosaur tracing and activity books, a dinosaur coloring book and a scissor skills book"
      },
      {
        src: "assets/works/books-2.webp",
        alt: "Inside pages: dinosaur footprint tracing, a dinosaur coloring page and cut-and-paste animals"
      }
    ],
    sections: [
      {
        title: "What’s included",
        list: [
          "Spiral-bound covers with bright, friendly lettering",
          "Tracing pages, “let’s meet them” dinosaur cards and coloring pages",
          "Cut-and-paste animal sheets for scissor practice",
          "Print-ready layouts photographed as finished copies"
        ]
      }
    ],
    tags: [
      "Book design",
      "Layout",
      "Print",
      "Kids’ learning"
    ],
    sub: "Book Design",
    why: {
      hook: "Show the real thing.",
      reason: "Printed mock-ups help buyers picture the finished book in their hands, which makes the product easier to trust than a flat screen design."
    }
  },
  {
    id: "anime-coloring-books",
    cat: "design",
    title: "Coloring Book Covers",
    blurb: "Cover designs for a series of spiral-bound coloring books, shown as styled mock-ups and as printed copies.",
    intro: "Cover designs for a series of spiral-bound coloring books, shown as styled flat-lay mock-ups and as a printed proof.",
    cover: {
      src: "assets/works/anime-2.webp",
      alt: "Three spiral-bound coloring book covers in a flat-lay"
    },
    images: [
      {
        src: "assets/works/anime-2.webp",
        alt: "Three coloring book covers: Shoujo in Bloom, Ultimate Iconic Characters and a mecha-themed cover"
      },
      {
        src: "assets/works/anime-1.webp",
        alt: "Two coloring book covers: Shoujo in Bloom and The Apothecary Diaries"
      },
      {
        src: "assets/works/anime-3.webp",
        alt: "Two printed copies of the Ultimate Iconic Characters coloring book"
      }
    ],
    sections: [
      {
        title: "What’s included",
        list: [
          "Cover artwork with title lettering and a framed border",
          "A distinct colour mood per book: pastel romance, golden fantasy, dark and gold",
          "Flat-lay mock-ups for previews",
          "A printed copy photographed as a proof"
        ]
      }
    ],
    tags: [
      "Cover design",
      "Book design",
      "Mock-ups",
      "Print"
    ],
    sub: "Book Design",
    why: {
      hook: "The cover sells the book.",
      reason: "Each cover has one clear focal point, a bold title and a strong style, so the book stands out in a small thumbnail."
    }
  },
  {
    id: "event-invitations",
    cat: "design",
    title: "Birthday Invitations",
    blurb: "Two invitation designs: a floral pastel portrait invite and a playful space-themed landscape card.",
    intro: "Two birthday invitations for different moods — a floral, pastel portrait invite and a space-themed landscape card with a photo.",
    cover: {
      src: "assets/works/invitation-1.webp",
      alt: "Space-themed birthday invitation"
    },
    images: [
      {
        src: "assets/works/invitation-1.webp",
        alt: "Space-themed first birthday invitation with a photo frame"
      },
      {
        src: "assets/works/invitation-2.webp",
        alt: "Floral birthday invitation with cupcakes"
      }
    ],
    sections: [
      {
        title: "What’s included",
        list: [
          "A landscape invite with space illustrations, a photo frame, date, time and venue",
          "A portrait invite with a floral border, cupcake art, date, venue and dress-code note",
          "Clear hierarchy so the key details read at a glance"
        ]
      }
    ],
    tags: [
      "Invitations",
      "Layout",
      "Event graphics"
    ],
    sub: "Invitations",
    why: {
      hook: "The celebration front and center.",
      reason: "The guest of honor, the date and the place are the first things you see. Bright colors set the party mood before anyone reads the details."
    }
  },
  {
    id: "lead-system",
    cat: "ai",
    title: "AI Lead Management System",
    blurb: "An n8n workflow that catches every new inquiry, has Claude summarize and score it, updates the CRM and leaves a reply ready for review.",
    intro: "An always-on workflow that turns a new email inquiry into a scored, tracked lead with a follow-up already scheduled.",
    images: [
      {
        src: "assets/ai-automation.webp",
        alt: "n8n workflow that reads Gmail inquiries, scores them with Claude and updates HubSpot"
      },
      {
        src: "assets/works/gmail-1.webp",
        alt: "Gmail inbox with an AI-generated draft reply waiting for review"
      }
    ],
    sections: [
      {
        title: "The challenge",
        text: "Inquiries arrive from several places — the inbox, website forms and manual entry. Without one process, leads can be missed, scored inconsistently or answered late."
      },
      {
        title: "What I built",
        steps: [
          "A Gmail trigger in n8n that detects each new project inquiry.",
          "A Claude analysis step that summarizes the lead, estimates project type, budget range and urgency, and assigns a lead score.",
          "A formatting and enrichment step that cleans the data for the CRM.",
          "HubSpot updates for lead status, project type, budget and next follow-up date.",
          "Automatic follow-up tasks, plus a log of every lead in Google Sheets.",
          "A Gmail draft reply for review — nothing is sent without approval."
        ]
      },
      {
        title: "What it delivers",
        cards: [
          "Every inquiry captured in one place",
          "Consistent AI-assisted lead scoring",
          "Follow-ups created automatically",
          "A reply draft waiting for a human to approve"
        ]
      }
    ],
    tags: [
      "n8n",
      "Claude",
      "HubSpot",
      "Gmail",
      "Google Sheets"
    ],
    sub: "Workflow Automation",
    why: {
      hook: "Never let a new inquiry sit unanswered.",
      reason: "Replying fast is what wins a lead, but sorting and scoring every message by hand eats the day. So the workflow does the sorting and leaves a draft reply ready, and a person only reviews and sends."
    }
  }
];
