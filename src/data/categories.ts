const barMitzvaImages = Object.values(
  import.meta.glob('../images/BarMitzvaBalloons/*.{png,jpg,jpeg,webp,HEIC}', { eager: true, query: '?url', import: 'default' })
) as string[];

const batMitzvaImages = Object.values(
  import.meta.glob('../images/BatMitzvaBalloons/*.{png,jpg,jpeg,webp,HEIC}', { eager: true, query: '?url', import: 'default' })
) as string[];

const marryMeImages = Object.values(
  import.meta.glob('../images/MarryMeBalloons/*.{png,jpg,jpeg,webp,HEIC}', { eager: true, query: '?url', import: 'default' })
) as string[];

const weddingsImages = Object.values(
  import.meta.glob('../images/WeddingsBalloons/*.{png,jpg,jpeg,webp,HEIC}', { eager: true, query: '?url', import: 'default' })
) as string[];

const britotImages = Object.values(
  import.meta.glob('../images/BritotBalloons/*.{png,jpg,jpeg,webp,HEIC}', { eager: true, query: '?url', import: 'default' })
) as string[];

const businessImages = Object.values(
  import.meta.glob('../images/BusinessBalloons/*.{png,jpg,jpeg,webp,HEIC}', { eager: true, query: '?url', import: 'default' })
) as string[];

const standImages = Object.values(
  import.meta.glob('../images/StandBalloons/*.{png,jpg,jpeg,webp,HEIC}', { eager: true, query: '?url', import: 'default' })
) as string[];

export const categories = [

  {
    id: 'weddings',
    title: 'חתונות',
    folder: 'WeddingsBalloons',
    coverImage: weddingsImages[0] || '',
    images: weddingsImages,
  },
  {
    id: 'marry-me',
    title: 'הצעות נישואין',
    folder: 'MarryMeBalloons',
    coverImage: marryMeImages[0] || '',
    images: marryMeImages,
  },
    {
    id: 'britot',
    title: 'בריתות',
    folder: 'BritotBalloons',
    coverImage: britotImages[0] || '',
    images: britotImages,
  },
  {
    id: 'bar-mitzva',
    title: 'בר מצווה',
    folder: 'BarMitzvaBalloons',
    coverImage: barMitzvaImages[0] || '',
    images: barMitzvaImages,
  },
    {
    id: 'bat-mitzva',
    title: 'בת מצווה',
    folder: 'BatMitzvaBalloons',
    coverImage: batMitzvaImages.find(img => img.includes('BatMitzvaBalloons_Main')) || batMitzvaImages[0],
    images: batMitzvaImages,
  },
    {
    id: 'stands',
    title: 'עמודי בלונים',
    folder: 'StandBalloons',
    coverImage: standImages[0] || '',
    images: standImages,
  },

  {
    id: 'business',
    title: 'עסקים',
    folder: 'BusinessBalloons',
    coverImage: businessImages[0] || '',
    images: businessImages,
  },

];
