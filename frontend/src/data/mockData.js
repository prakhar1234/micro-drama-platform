export const GENRES = [
  'Romance', 'Thriller', 'Horror', 'Psychological', 'Action',
  'Fantasy', 'Sci-Fi', 'Slice of Life', 'Mystery', 'Dark Comedy',
  'Tragedy', 'Supernatural', 'Mecha', 'Isekai', 'Revenge',
];

// Hero — cyberpunk samurai with neon sword at night
export const HERO_IMAGE = 'https://images.pexels.com/photos/31971484/pexels-photo-31971484.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop';

// CTA — futuristic samurai warrior with neon swords
export const CTA_IMAGE = 'https://images.pexels.com/photos/31971487/pexels-photo-31971487.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop';

export const MOCK_DRAMAS = [
  {
    id: '1',
    title: 'Crimson Vow',
    genre: 'Romance',
    style: 'Anime',
    episodes: 8,
    rating: '18+',
    description: 'Two rival assassins bound by an ancient blood pact discover that betrayal cuts deeper than any blade.',
    gradient: 'linear-gradient(135deg, #e63946, #6b1d23)',
    // Cyberpunk cosplay neon warrior
    image: 'https://images.pexels.com/photos/31971471/pexels-photo-31971471.jpeg?auto=compress&cs=tinysrgb&w=500&h=320&fit=crop',
    views: '2.4M',
    avgRating: 4.8,
  },
  {
    id: '2',
    title: 'Hollow Mind',
    genre: 'Psychological',
    style: 'Anime',
    episodes: 12,
    rating: 'Mature',
    description: 'A therapist begins losing the boundary between her patients\u2019 delusions and her own reality.',
    gradient: 'linear-gradient(135deg, #4a00e0, #1a0a3e)',
    // Neon mask — dark psychological thriller
    image: 'https://images.pexels.com/photos/5744639/pexels-photo-5744639.jpeg?auto=compress&cs=tinysrgb&w=500&h=320&fit=crop',
    views: '1.8M',
    avgRating: 4.9,
  },
  {
    id: '3',
    title: 'Neon Requiem',
    genre: 'Sci-Fi',
    style: 'Anime',
    episodes: 6,
    rating: '18+',
    description: 'In a city where memories are currency, a street hacker steals a dead woman\u2019s final thought\u2014and it changes everything.',
    gradient: 'linear-gradient(135deg, #00f5d4, #0a2e36)',
    // Cyberpunk samurai armor at night
    image: 'https://images.pexels.com/photos/31971483/pexels-photo-31971483.jpeg?auto=compress&cs=tinysrgb&w=500&h=320&fit=crop',
    views: '3.1M',
    avgRating: 4.7,
  },
  {
    id: '4',
    title: 'The Bone Garden',
    genre: 'Horror',
    style: 'Anime',
    episodes: 10,
    rating: '18+',
    description: 'A botanical researcher inherits a greenhouse where the flowers grow from human remains.',
    gradient: 'linear-gradient(135deg, #2d6a4f, #0b1a0f)',
    // Anonymous neon mask — horror vibe
    image: 'https://images.pexels.com/photos/26424766/pexels-photo-26424766.jpeg?auto=compress&cs=tinysrgb&w=500&h=320&fit=crop',
    views: '1.2M',
    avgRating: 4.5,
  },
  {
    id: '5',
    title: 'Last Encore',
    genre: 'Tragedy',
    style: 'Anime',
    episodes: 5,
    rating: 'Mature',
    description: 'A washed-up pianist gets one final shot at redemption\u2014but the stage holds a secret that could destroy her.',
    gradient: 'linear-gradient(135deg, #f4a261, #3d2608)',
    // Neon light face mask — dramatic
    image: 'https://images.pexels.com/photos/12932549/pexels-photo-12932549.jpeg?auto=compress&cs=tinysrgb&w=500&h=320&fit=crop',
    views: '890K',
    avgRating: 4.9,
  },
  {
    id: '6',
    title: 'Rift Walker',
    genre: 'Isekai',
    style: 'Anime',
    episodes: 15,
    rating: 'Mature',
    description: 'Pulled into a fractured dimension, a jaded office worker must survive worlds built from humanity\u2019s worst fears.',
    gradient: 'linear-gradient(135deg, #7209b7, #1a0533)',
    // Cyberpunk warrior with dual neon swords
    image: 'https://images.pexels.com/photos/31971487/pexels-photo-31971487.jpeg?auto=compress&cs=tinysrgb&w=500&h=320&fit=crop',
    views: '4.2M',
    avgRating: 4.6,
  },
  {
    id: '7',
    title: 'Switchblade Serenade',
    genre: 'Action',
    style: 'Anime',
    episodes: 9,
    rating: '18+',
    description: 'An underground fight club meets a symphony orchestra in this high-octane tale of rhythm and violence.',
    gradient: 'linear-gradient(135deg, #ff6b6b, #4a1a1a)',
    // Cyberpunk samurai neon sword closeup
    image: 'https://images.pexels.com/photos/31971485/pexels-photo-31971485.jpeg?auto=compress&cs=tinysrgb&w=500&h=320&fit=crop',
    views: '2.7M',
    avgRating: 4.4,
  },
  {
    id: '8',
    title: 'Phantom Thread',
    genre: 'Mystery',
    style: 'Anime',
    episodes: 7,
    rating: 'Mature',
    description: 'A detective who can see the invisible threads connecting people to their crimes unravels a conspiracy woven across time.',
    gradient: 'linear-gradient(135deg, #457b9d, #0d1b2a)',
    // Neon mask in dark — mysterious
    image: 'https://images.pexels.com/photos/6691950/pexels-photo-6691950.jpeg?auto=compress&cs=tinysrgb&w=500&h=320&fit=crop',
    views: '1.5M',
    avgRating: 4.8,
  },
];

export const MOCK_EPISODES = [
  { id: 'ep1', number: 1, title: 'The First Cut', duration: '8:24', views: '412K' },
  { id: 'ep2', number: 2, title: 'Blood Memory', duration: '7:51', views: '389K' },
  { id: 'ep3', number: 3, title: 'Echoes in Red', duration: '9:10', views: '356K' },
  { id: 'ep4', number: 4, title: 'The Unraveling', duration: '6:33', views: '341K' },
  { id: 'ep5', number: 5, title: 'Shattered Oath', duration: '8:47', views: '328K' },
  { id: 'ep6', number: 6, title: 'Descent', duration: '9:55', views: '302K' },
  { id: 'ep7', number: 7, title: 'The Still Before', duration: '7:12', views: '295K' },
  { id: 'ep8', number: 8, title: 'Crimson Finale', duration: '9:59', views: '510K' },
];
