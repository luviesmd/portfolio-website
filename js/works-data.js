/* ==========================================================
   Luz Somodio — Featured Works data
   ----------------------------------------------------------
   HOW TO ADD A NEW WORK
   1. Put web-sized images in assets/works/ (WebP or JPG, ~1600px wide).
   2. Add a block to PROJECTS below (copy an existing one).
   3. Save. The card, filter count and case study appear on the
      Featured Works page automatically.
   Optional: add  teaser: 1  (or 2, 3) to show a work on the home page.
   ========================================================== */

var CATEGORIES = [
  {
    id: "ai",
    label: "AI Automation"
  },
  {
    id: "social",
    label: "Social Media Management"
  },
  {
    id: "design",
    label: "Graphic Design"
  },
  {
    id: "docs",
    label: "Proposals & Documents"
  },
  {
    id: "ops",
    label: "Admin & Operations"
  },
  {
    id: "reporting",
    label: "Reporting"
  }
];

/* Fields: id, cat, title, blurb, intro, images[{src,alt}] (for a video item: src = poster image, video = mp4 file, title), cover{src,alt,fit,pos,bg}, sections[{title,text|steps|list|cards}], tags[], note, unit, teaser */
var PROJECTS = [
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
    teaser: 1
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
    ]
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
    teaser: 2
  },
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
    ]
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
    ]
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
    ]
  },
  {
    id: "greenleaf-home-collections",
    cat: "docs",
    title: "GreenLeaf Village — Home Collections",
    blurb: "A furniture buying list for a residential community, laid out as a branded one-page sheet in two versions.",
    intro: "A “Curated Living: Home Collections” sheet for GreenLeaf Village: eight lettered products with name, description and price beside a render of the community office. Shown in two layout versions.",
    unit: "versions",
    note: "Preview only — the original files are not available to download.",
    cover: {
      src: "assets/works/collection-1.webp",
      alt: "GreenLeaf Village Home Collections furniture buying list"
    },
    images: [
      {
        src: "assets/works/collection-1.webp",
        alt: "Home Collections buying list, version 1: eight furniture items A to H with prices"
      },
      {
        src: "assets/works/collection-2.webp",
        alt: "Home Collections buying list, version 2: compact layout with the same eight items"
      }
    ],
    sections: [
      {
        title: "What’s inside",
        list: [
          "Eight lettered items, A to H: dining tables, cabinets, chairs, fencing and planters",
          "Product image, name, short description and price for each",
          "Branding: GreenLeaf Village logo, “Collection 01” and a calm green palette",
          "A render of the community office alongside the list"
        ]
      }
    ],
    tags: [
      "Buying list",
      "Layout",
      "Branding",
      "Interior styling"
    ]
  },
  {
    id: "weekly-reporting",
    cat: "reporting",
    title: "Weekly Performance Reports",
    blurb: "A one-page weekly snapshot of reach, engagement, top content and comments — turned into clear next steps.",
    intro: "A one-page weekly snapshot that turns scattered platform numbers into decisions.",
    images: [
      {
        src: "assets/analytics-workspace.webp",
        alt: "Social media and website analytics across Instagram, Facebook and Google Analytics"
      }
    ],
    sections: [
      {
        title: "The challenge",
        text: "Insights were spread across Instagram, Facebook and website analytics, so it was hard to tell what was working or where to put effort next."
      },
      {
        title: "What I built",
        steps: [
          "A weekly template pulling reach, engagement and website activity into one view.",
          "A top-content review showing which posts and formats perform best.",
          "A comments and inquiries check to catch questions that need a reply.",
          "A short “what to do next week” summary with each report."
        ]
      },
      {
        title: "What it delivers",
        cards: [
          "One clear weekly view of performance",
          "Evidence for what to post more of",
          "Quicker, calmer planning meetings",
          "Questions and comments never overlooked"
        ]
      }
    ],
    tags: [
      "Meta Business Suite",
      "Google Analytics",
      "Google Sheets"
    ]
  },
  {
    id: "arcana-proposal",
    cat: "docs",
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
    ]
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
    teaser: 3
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
    ]
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
    ]
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
    ]
  },
  {
    id: "arcana-furniture-list",
    cat: "docs",
    title: "Furniture & Styling Selections",
    blurb: "A curated furnishing package for a glamping tent project: buying list, colour palette and design intent.",
    intro: "A furniture and styling selection for a glamping tent project (June 2026): a clean buying list with supplier, price and product image, plus the palette and mood that guide the choices.",
    unit: "pages",
    note: "Preview only — the original file is not available to download.",
    cover: {
      src: "assets/works/furniture-1.webp",
      alt: "Furniture and styling selections, page 1"
    },
    images: [
      {
        src: "assets/works/furniture-1.webp",
        alt: "Furniture buying list page 1: cover, buying list and material palette"
      },
      {
        src: "assets/works/furniture-2.webp",
        alt: "Furniture buying list page 2: seating, decking, palette and mood boards"
      }
    ],
    sections: [
      {
        title: "What’s inside",
        list: [
          "A cover and design intent for the guest experience",
          "A buying list with product, description, supplier, price and image",
          "A warm, natural colour palette inspired by Muskoka",
          "Mood and inspiration boards"
        ]
      }
    ],
    tags: [
      "Interior styling",
      "Buying list",
      "Palette",
      "Mood board"
    ]
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
    ]
  },
  {
    id: "admin-operations",
    cat: "ops",
    title: "Executive Admin Operations",
    blurb: "Calendar blocks, an organized inbox, meeting follow-ups and project tracking for a calm, predictable week.",
    intro: "The behind-the-scenes structure that keeps meetings, messages and follow-ups moving for a busy founder.",
    images: [
      {
        src: "assets/admin-support.webp",
        alt: "Calendar, inbox, weekly report and task notebook on a desk"
      }
    ],
    sections: [
      {
        title: "The challenge",
        text: "Meetings, client emails and project follow-ups competed for attention, making it hard to see what mattered each day."
      },
      {
        title: "What I built",
        steps: [
          "A color-coded calendar with focus time, client calls and recurring reviews.",
          "An inbox organized by client and project with labels and follow-up flags.",
          "Daily task lists and a weekly planning routine.",
          "Meeting notes, follow-up emails and a simple tracker for invoices and projects."
        ]
      },
      {
        title: "What it delivers",
        cards: [
          "A calmer, more predictable week",
          "Fewer missed follow-ups",
          "Meeting prep and notes always ready",
          "One place to see what’s next"
        ]
      }
    ],
    tags: [
      "Google Calendar",
      "Gmail",
      "Google Sheets",
      "Meeting notes"
    ]
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
    ]
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
    ]
  }
];
