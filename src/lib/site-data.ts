/* Site wide content for TrueFlow Plumbing & Repair.
   All copy is written to sound like a real local business talking to neighbors.
   Keep it that way: short sentences, plain words, no hyphens anywhere. */

export const BRAND = {
  name: "TrueFlow",
  fullName: "TrueFlow Plumbing & Repair",
  tagline: "Plumbing & Repair",
  phone: "(414) 555 0134",
  phoneAlt: "(414) 555 0198",
  email: "help@trueflowplumbing.com",
  address: "1182 Maple Ridge Drive, Columbus OH 43215, United States",
  city: "Columbus, Ohio",
  hours: "7:30 am to 6:00 pm",
  hoursLine: "We are open Monday to Saturday",
  founded: 2002,
};

export const IMAGES = {
  hero1: "/images/hero.png",
  hero2: "/images/service6.png",
  hero3: "/images/process.png",
  about: "/images/about.png",
  ceo: "/images/ceo.png",
  video: "/images/whyvideo.png",
  process: "/images/process.png",
  testimonial: "/images/testimonial.png",
};

export type NavItem = {
  label: string;
  route: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", route: "home" },
  { label: "About Us", route: "about" },
  { label: "Services", route: "services" },
  { label: "Contact", route: "contact" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string;
  points: string[];
  image: string;
  icon: string;
};

export const SERVICES: Service[] = [
  {
    slug: "leak-repair",
    title: "Leak Detection & Repair",
    short:
      "A small leak can quietly waste hundreds of gallons and stain your walls. We find the source fast and fix it so it stays fixed.",
    long:
      "Most leaks hide where you cannot see them, behind walls, under slabs, or inside ceilings. Our crews use acoustic listeners and pressure testing to pinpoint the exact spot before we open anything up. That means smaller holes, faster repairs, and a bill that makes sense. Once the leak is fixed we dry the area and check for water damage so nothing comes back to surprise you later.",
    points: [
      "Electronic and acoustic leak location",
      "Slab and underground pipe repairs",
      "Wall and ceiling patch friendly methods",
      "Pressure test included with every fix",
    ],
    image: "/images/service1.png",
    icon: "droplets",
  },
  {
    slug: "drain-cleaning",
    title: "Drain Cleaning",
    short:
      "Slow sink or standing shower water? Our machines clear stubborn blockages without harming your pipes.",
    long:
      "Hair, grease, soap and tree roots all find their way into drains eventually. We use professional drain machines and hydro jets sized for the job, not the biggest tool on the truck. After the blockage is gone we run a camera through the line and show you exactly what caused it, along with a couple of habits that keep it from coming back. If a section of pipe is broken we show you the footage before we quote a repair.",
    points: [
      "Kitchen, bath, and main line clearing",
      "Camera inspection after every job",
      "Hydro jetting for grease and roots",
      "Safe for older pipe materials",
    ],
    image: "/images/service2.png",
    icon: "waves",
  },
  {
    slug: "water-heaters",
    title: "Water Heater Services",
    short:
      "Quick repairs or full replacement, we install reliable water heaters sized for your household and budget.",
    long:
      "A water heater usually gives warning signs before it quits, rusty water, rumbling, or water around the base. We service all major brands and both tank and tankless systems. If a repair makes sense we will tell you. If replacement is the smarter move we walk you through the options and install your new unit the same day in most cases, and we haul the old tank away at no extra charge.",
    points: [
      "Tank and tankless systems",
      "Same day replacement in most cases",
      "Expansion tanks and code updates included",
      "Old unit removal at no charge",
    ],
    image: "/images/service3.png",
    icon: "flame",
  },
  {
    slug: "fixtures",
    title: "Faucet & Fixture Installation",
    short:
      "Upgrading a kitchen or bathroom? We install faucets, sinks, showers, and toilets with connections that never leak.",
    long:
      "New fixtures change how a room feels, but only when they are installed right. We set faucets, toilets, showers, and garbage disposals with fresh supply lines and sealed connections every time. If you bought the fixture yourself we are happy to install it, and if you want advice before buying we can point you toward models that hold up in hard water. Every install ends with a full flow and leak test.",
    points: [
      "Faucets, toilets, showers, disposals",
      "Fresh supply lines with every install",
      "Hard water friendly fixture advice",
      "Full leak and flow test before we leave",
    ],
    image: "/images/service4.png",
    icon: "shower-head",
  },
  {
    slug: "repiping",
    title: "Repiping & Pipe Installation",
    short:
      "Old galvanized pipes cause rust colored water and weak pressure. We replace them with modern materials built to last.",
    long:
      "If your home still runs on galvanized steel, you have probably noticed brown water, low pressure, or repeats of the same leak in different spots. Our repipe crews replace entire supply systems with copper or PEX, usually in two to three days, and we patch the walls we open. Most repipes happen while you stay in the house, with water back on each evening so your family can sleep at home.",
    points: [
      "Whole house copper and PEX repipes",
      "Two to three day typical timeline",
      "Water restored each evening",
      "Wall patching on every opening",
    ],
    image: "/images/service5.png",
    icon: "git-branch",
  },
  {
    slug: "emergency",
    title: "24 Hour Emergency Plumbing",
    short:
      "Burst pipes do not wait for business hours. Call any time and a licensed plumber heads your way within the hour.",
    long:
      "When a pipe lets go at two in the morning you need a person on the phone, not a menu of options. Our emergency line rings straight to the on call dispatcher who can walk you through shutting off the main while a plumber rolls. We keep trucks stocked for the common failures, burst lines, failed water heaters, and backed up sewers, so most emergencies are handled on the first visit.",
    points: [
      "Live dispatcher around the clock",
      "Stocked trucks for first visit fixes",
      "Guidance on shutting off your main",
      "Weekend and holiday coverage",
    ],
    image: "/images/service6.png",
    icon: "alarm-clock",
  },
];

export const TEAM = [
  {
    name: "Marcus Bennett",
    role: "Master Plumber",
    image: "/images/team1.png",
    bio: "Twenty two years in the trade and still excited by a tricky job. Marcus leads our service crews and trains every new hire.",
  },
  {
    name: "Sofia Reyes",
    role: "Drain Specialist",
    image: "/images/team2.png",
    bio: "Sofia runs our camera and jetting equipment and has cleared main lines other companies wanted to dig up.",
  },
  {
    name: "Tom Gallagher",
    role: "Service Technician",
    image: "/images/team3.png",
    bio: "The calm voice on our emergency line at night. Tom handles water heater repairs and same day service calls.",
  },
  {
    name: "Jake Morrow",
    role: "Installation Expert",
    image: "/images/team4.png",
    bio: "From tankless heaters to whole house repipes, Jake keeps our install jobs on schedule and spotless.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "I had TrueFlow out to fix a burst pipe behind our washing machine and I could not be happier with the service. Marcus showed up inside forty minutes, explained exactly what needed to happen, and had everything back in working order the same afternoon. The final bill matched the quote to the dollar.",
    name: "David Coleman",
    role: "Homeowner in Westerville",
    image: "/images/team1.png",
  },
  {
    quote:
      "We have used TrueFlow for years, from a full bathroom remodel to small fixes like a running toilet. Every plumber they send is polite, tidy, and honest about what is urgent and what can wait a month. That kind of trust is hard to find in this trade.",
    name: "Rachel Simmons",
    role: "Property Manager, Grandview",
    image: "/images/team2.png",
  },
  {
    quote:
      "Our water heater quit on a Sunday night and I expected to wait days for help. TrueFlow had a new one installed by lunch the next morning, and they hauled the old tank away for free. Fair price and a friendly crew, what else can you ask for.",
    name: "Anthony Brooks",
    role: "Homeowner in Dublin",
    image: "/images/team3.png",
  },
];

export const PROCESS_STEPS = [
  {
    step: "Step 01",
    title: "Meet Our Team",
    text: "Give us a call or book online and we will schedule a visit that fits your day, not just ours.",
    icon: "users",
  },
  {
    step: "Step 02",
    title: "Get Estimation",
    text: "Your plumber inspects the problem, explains the options in plain language, and gives you a written price before any work starts.",
    icon: "clipboard-list",
  },
  {
    step: "Step 03",
    title: "Start Your Project",
    text: "Once you approve the quote we get straight to work, test everything twice, and clean up before we leave.",
    icon: "wrench",
  },
];

export const COUNTERS = [
  { value: 2400, suffix: "+", label: "Successful Projects" },
  { value: 1900, suffix: "+", label: "Satisfied Customers" },
  { value: 32, suffix: "", label: "Expert Plumbers" },
  { value: 24, suffix: "", label: "Years Of Experience" },
];

export const PARTNERS = [
  "Ohio Pipe Supply",
  "AquaLine Fittings",
  "Midwest Water Works",
  "ProPlumber Tools",
  "ClearFlow Materials",
];

export const POSTS = [
  {
    title: "Five Plumbing Sounds You Should Never Ignore",
    category: "Pipe Care",
    date: "19",
    month: "Jan",
    image: "/images/blog1.png",
    excerpt:
      "Gurgles, bangs, and hisses are your pipes trying to tell you something. Here is what each sound usually means and when to pick up the phone.",
    route: "services",
  },
  {
    title: "When To Repair A Water Heater And When To Replace It",
    category: "Water Heaters",
    date: "15",
    month: "Jan",
    image: "/images/blog2.png",
    excerpt:
      "A ten year old tank with a leaking base is a goner, but plenty of other problems have cheap fixes. Use these rules to decide.",
    route: "services",
  },
  {
    title: "Simple Habits That Keep Your Drains Clear",
    category: "Drain Care",
    date: "16",
    month: "Jan",
    image: "/images/blog3.png",
    excerpt:
      "You do not need store bought chemicals to avoid clogs. A few small changes in the kitchen and bathroom do most of the work.",
    route: "services",
  },
];

export const SKILLS = [
  { label: "First Visit Fixes", value: 96 },
  { label: "On Time Arrival", value: 94 },
  { label: "Drain Cleaning Success", value: 92 },
  { label: "Customer Satisfaction", value: 98 },
];

export const FAQS = [
  {
    q: "How fast can you get to my house?",
    a: "For regular bookings we usually offer a same day or next morning window. Emergency calls are dispatched right away and our average arrival time across Columbus is under sixty minutes.",
  },
  {
    q: "Do you charge for estimates?",
    a: "Estimates are free for planned work like repipes, water heater replacement, and remodels. For a diagnostic repair visit there is a flat trip charge that we waive when you go ahead with the repair.",
  },
  {
    q: "Are your plumbers licensed and insured?",
    a: "Yes. Every plumber on our trucks holds an Ohio plumbing license and the company carries full liability coverage. You can ask any tech for their license number and they will happily show it.",
  },
  {
    q: "What areas do you serve?",
    a: "We cover Columbus and the surrounding suburbs including Westerville, Dublin, Grove City, Reynoldsburg, and Upper Arlington. If you are a little further out, call us anyway, we can usually work something out.",
  },
  {
    q: "Do you really answer calls at night?",
    a: "We do. The emergency line rings to a live dispatcher around the clock, weekends and holidays included. They can talk you through shutting off your main while a plumber heads your way.",
  },
];

export const ABOUT_VALUES = [
  {
    title: "Honesty First",
    text: "If a repair will hold for years we say so, and if a replacement is the smarter spend we show you the math instead of pushing a sale.",
    icon: "badge-check",
  },
  {
    title: "Clean Work Guaranteed",
    text: "Drop cloths go down before tools come out and we vacuum before we leave. You should not be able to tell we were there, except that everything works.",
    icon: "sparkles",
  },
  {
    title: "Fair, Written Prices",
    text: "You approve the price before we start and the number on the invoice matches it. No surprise line items when the truck pulls away.",
    icon: "wallet",
  },
];

export const FOOTER_SERVICES = [
  "Leak Detection & Repair",
  "Drain Cleaning",
  "Water Heater Repair",
  "Repiping Services",
  "Emergency Plumbing",
];
