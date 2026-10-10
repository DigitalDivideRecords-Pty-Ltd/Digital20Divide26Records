// Digital Divide Records — artists & releases data (static-site version)
const IMG_BASE =
  "https://raw.githubusercontent.com/DigitalDivideRecords-Pty-Ltd/DigitalDivideRecords/main/";

const img = (name) => IMG_BASE + name;

// Label-level store / streaming pages (used when no per-release link exists)
const PLATFORM_LINKS = {
  beatport: "https://www.beatport.com/label/digital-divide-records/100802",
  volumo: "https://volumo.com/label/345972-digital-divide-records",
};

// Catalog numbers (DDR###) are assigned chronologically by release date and
// are placeholders — replace with the label's official catalog numbers anytime.
const ARTISTS = [
  {
    name: "Adam Jesse",
    aka: "Harmony Mills",
    bio: "Adam Jesse aka Harmony Mills is an Australian DJ & Producer. His music is a blend of electro house, coupled with funky vocals. He has releases on Mojoheadz Records, as well as Digital Divide Records.",
    //link: "https://www.junodownload.com/artists/Adam+Jesse-harmony+Mills/",
    releases: [
      { title: "Headcase", catalog: "DDR022", date: "08/12/2023", cover: img("headcase.jpg"), beatport: "https://www.beatport.com/release/headcase/4799076" },
      { title: "The Back Room", catalog: "DDR021", date: "26/08/2023", cover: img("thebackroom.jpg"), beatport: "https://www.beatport.com/release/the-back-room/4799083" },
      { title: "2 Shot Rule", catalog: "DDR020", date: "26/08/2023", cover: img("2shotrule.jpg"), beatport: "https://www.beatport.com/release/2-shot-rule/4798176" },
      { title: "Give It To Me", catalog: "DDR019", date: "16/06/2023", cover: img("giveit2me.jpg"), beatport: "https://www.beatport.com/release/give-it-to-me/4799095" },
      { title: "Please Don't Go", catalog: "DDR018", date: "08/06/2023", cover: img("pleasedontgo.jpg"), beatport: "https://www.beatport.com/release/please-dont-go/4798208" },
      { title: "Law Of House", catalog: "DDR017", date: "05/05/2023", cover: img("lawofhouse.jpg"), beatport: "https://www.beatport.com/release/law-of-house/4799077" },
      { title: "Bla Bla Bla", catalog: "DDR015", date: "20/03/2023", cover: img("blablabla.jpg"), beatport: "https://www.beatport.com/release/bla-bla-bla/4798138" },
      { title: "Flexxin", catalog: "DDR014", date: "13/02/2023", cover: img("flexxin.jpg"), beatport: "https://www.beatport.com/release/flexxin/4799080" },
      { title: "Got to Go", catalog: "DDR011", date: "30/09/2022", cover: img("got2go.jpg"), beatport: "https://www.beatport.com/release/got-to-go/4798162" },
    ],
  },
  {
    name: "Aquarius",
    bio: "Aquarius is a French Based DJ & Producer. He blends a mixture of deep, electronica, organic & downtempo house sounds.",
    //link: "https://www.junodownload.com/artists/Aquarius/",
    releases: [
      { title: "Jungle", catalog: "DDR016", date: "15/04/2023", cover: img("jungle.jpg"), beatport: "https://www.beatport.com/release/jungle/4798175" },
      { title: "Afro Dream", catalog: "DDR013", date: "16/12/2022", cover: img("afrodream.jpg"), beatport: "https://www.beatport.com/release/afro-dream/479778" },
      { title: "Underwater", catalog: "DDR010", date: "09/09/2022", cover: img("underwater.jpg"), beatport: "https://www.beatport.com/release/underwater/4798135" },
    ],
  },
  {
    name: "DJ Jonnas",
    bio: "DJ Jonnas is a South African Based DJ & Producer. His sound is a mixture of deep, minimal, tech house & techno grooves. His catalogue includes deep, techno, tech house & minimal house releases on Ghost District Records, Nova Music Group, Visiomind Records & Labelworx compilations.",
    //link: "https://www.beatport.com/artist/dj-jonnas/656568",
    releases: [
      { title: "In The Rhythm Of Love", catalog: "DDR026", date: "24/10/2025", cover: img("IMG_20250924_212610_(3000_x_3000_pixel).jpg"), beatport: "https://www.beatport.com/release/in-the-rhythm-of-love/5446415" },
      { title: "Next Level", catalog: "DDR025", date: "15/03/2025", cover: img("nextlevel.jpg"), beatport: "https://www.beatport.com/release/next-level/4828459" },
      { title: "Growth", catalog: "DDR024", date: "23/12/2024", cover: img("growth.jpg"), beatport: "https://www.beatport.com/release/growth/4834024" },
      { title: "Distance", catalog: "DDR009", date: "12/08/2022", cover: img("distance.jpg"), beatport: "https://www.beatport.com/release/distance/4799090" },
      { title: "The Odyssey", catalog: "DDR001", date: "14/04/2022", cover: img("odyssey.jpg"), beatport: PLATFORM_LINKS.beatport },
    ],
  },
  {
    name: "Endjour",
    bio: "Endjour is a Malaysian based DJ & Producer. He blends deep & progressive house sounds with his first offering on our label.",
    //link: "https://www.junodownload.com/artists/Endjour/",
    releases: [
      { title: "YOU", catalog: "DDR003", date: "29/04/2022", cover: img("you.jpg"), beatport: "https://www.beatport.com/release/you/4808387" },
    ],
  },
  {
    name: "FrankNoMore",
    bio: "Frank's style of House music varies widely from tech to 2-step. Borrowing from many genres of EDM and traditional sound palettes.",
    //link: "https://www.junodownload.com/artists/Franknomore/",
    releases: [
      { title: "Jingle Queen", catalog: "DDR007", date: "31/05/2022", cover: img("jinglequeen.jpg"), beatport: "https://www.beatport.com/release/jingle-queen/4798137" },
    ],
  },
  {
    name: "SizBlack",
    bio: "SizBlack is a multi-talented producer from Johannesburg, South Africa. He creates various styles of music, this includes music for film & TV. His release is a mixture of chilled deep house tunes.",
    //link: "https://www.junodownload.com/artists/Sizblack/",
    releases: [
      { title: "Nevermind", catalog: "DDR006", date: "20/05/2022", cover: img("nevermind.jpg"), beatport: "https://www.beatport.com/release/nevermind/4797720" },
    ],
  },
  {
    name: "K-Elements",
    bio: "K-Elements is a Portuguese based DJ & Producer. His selection of sounds are a mixture of future house, tech house and experimental electronic music. He has released various grooves on Clubbers Culture, Dewing Records & Rimoshee Traxx.",
    //link: "https://www.beatport.com/artist/k-elements/483627",
    releases: [
      { title: "Logos", catalog: "DDR008", date: "01/08/2022", cover: img("logos.jpg"), beatport: "https://www.beatport.com/release/logos/4808386" },
      { title: "New Balance", catalog: "DDR002", date: "22/04/2022", cover: img("newbalance.jpg"), beatport: "https://www.beatport.com/release/new-balance/4808649" },
    ],
  },
  {
    name: "KRU SIDE",
    bio: '"KRU SIDE" is a brand that was created by house music lovers and professional producers with a goal to bring out sunny house vibes to the world. Their love for jazz music and their meticulous blend of vocals plus their mixture of sounds ensure a smooth chilled out vibe for both jazz & house lovers\' alike.',
    //link: "https://www.junodownload.com/artists/Kru+Side/",
    releases: [
      { title: "Heart Giver", catalog: "DDR023", date: "22/11/2024", cover: img("heartgiver.jpg"), beatport: "https://www.beatport.com/release/heart-giver/4798154" },
      { title: "Magic", catalog: "DDR012", date: "07/10/2022", cover: img("magic.jpg"), beatport: "https://www.beatport.com/release/magic/4798148" },
      { title: "Laidback", catalog: "DDR005", date: "06/05/2022", cover: img("laidback.jpg"), beatport: "https://www.beatport.com/release/laidback/4798170" },
      { title: "First Love", catalog: "DDR004", date: "06/05/2022", cover: img("firstlove.jpg"), beatport: "https://www.beatport.com/release/first-love/4808748" },
    ],
  },
];

// Upcoming release promoted in the animated banner
const UPCOMING_RELEASE = {
  alert: "New Music Alert!!",
  artist: "DJ Jonnas",
  title: "Sunsets In S.A",
  cover: img("DJJonnas-SunsetsInSA-CoverArt.jpeg"),
  phases: [
    { key: "preorder", label: "Pre-Order", icon: "📅", date: "2026-10-30T00:00:00", note: "2 weeks On Beatport & Volumo" },
    { key: "prerelease", label: "Pre-Release", icon: "🔓", date: "2026-11-13T00:00:00", note: "2 weeks On Beatport & Volumo" },
    { key: "release", label: "Release", icon: "🚀", date: "2026-11-27T00:00:00", note: "Worldwide (Except: NetEase, Pandora, Taobao, Tencent)" },
  ],
};
