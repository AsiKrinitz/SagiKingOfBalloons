const barMitzvaImages = Object.values(
  import.meta.glob('../images/BarMitzvaBalloons/*.{png,jpg,jpeg,webp,HEIC}', { eager: true, query: '?url', import: 'default' })
) as string[];

const marryMeImages = Object.values(
  import.meta.glob('../images/MarryMeBalloons/*.{png,jpg,jpeg,webp,HEIC}', { eager: true, query: '?url', import: 'default' })
) as string[];

const weddingsImages = Object.values(
  import.meta.glob('../images/WeddingsBalloons/*.{png,jpg,jpeg,webp,HEIC}', { eager: true, query: '?url', import: 'default' })
) as string[];

export const categories = [
  {
    id: 'bar-mitzva',
    title: 'Bar Mitzva',
    folder: 'BarMitzvaBalloons',
    coverImage: barMitzvaImages[0] || '',
    images: barMitzvaImages,
  },
  {
    id: 'marry-me',
    title: 'Marry Me',
    folder: 'MarryMeBalloons',
    coverImage: marryMeImages[0] || '',
    images: marryMeImages,
  },
  {
    id: 'weddings',
    title: 'Weddings',
    folder: 'WeddingsBalloons',
    coverImage: weddingsImages[0] || '',
    images: weddingsImages,
  }
];
