import bleach_poster1 from "../public/bleach_poster.jpg"


export interface NewsCard {
  id: string;
  img: string;
  name: string;
  desc: string;
}

export const newsInfoData = [
  {
    id: "1",
    img: "https://i.pinimg.com/originals/3a/74/85/3a74856d89c5fcd9679c3f5c1e4978b5.jpg",
    name: "Bleach: Thousand-Year Blood War",
    desc: "Bleach's final arc heats up with the June 2025 release of Part 3. Fans are calling the animation 'studio Pierrot’s best work yet'."
  },
  {
    id: "2",
    img: "https://i.pinimg.com/originals/6a/44/27/6a44277aa416fa2b34e7e8dfc66f82cb.jpg",
    name: "Jujutsu Kaisen Season 3",
    desc: "Season 3 is officially in production and will adapt the Culling Game arc. Release expected in early 2026."
  },
  {
    id: "3",
    img: "https://i.pinimg.com/originals/68/d6/7e/68d67ea8f6e6e745b2c3e5cefc3e27f6.jpg",
    name: "One Piece Live-Action S2",
    desc: "Netflix’s One Piece live-action Season 2 has wrapped filming. Drum Island arc confirmed with Chopper’s debut!"
  },
  {
    id: "4",
    img: "https://i.pinimg.com/originals/df/1c/9e/df1c9eea09179ff617647d0fc271ba5b.jpg",
    name: "Attack on Titan: Legacy Game",
    desc: "A new AAA Attack on Titan game titled 'Legacy' is in development by CyberConnect2. Open-world titan hunting? Yes, please."
  },
  {
    id: "5",
    img: "https://i.pinimg.com/originals/3e/61/20/3e612030e4b7f4b4d89478f60c9fa963.jpg",
    name: "Solo Leveling Season 2",
    desc: "Season 2 of Solo Leveling, titled 'Arise from the Shadow', arrives October 2025. Expect more God-tier animation from A-1 Pictures."
  },
  {
    id: "6",
    img: "https://i.pinimg.com/originals/44/65/f6/4465f689888f8fda062978894ef5c83d.jpg",
    name: "Demon Slayer Movie: Infinity Castle",
    desc: "Ufotable confirms a trilogy of films for Demon Slayer’s final arc. First film drops Spring 2026."
  },
  {
    id: "7",
    img: "https://i.pinimg.com/originals/f3/3a/67/f33a67893c9d804e75f376a1077a9b4f.jpg",
    name: "Chainsaw Man: Reze Arc",
    desc: "MAPPA is releasing the Chainsaw Man Reze arc as a movie — teaser trailer broke 1M views in under 6 hours."
  }
];

