export interface ChartData {
  title: string
  category: string
  image: string
  href?: string
}

export const chartsData: ChartData[] = [
  {
    title: 'How China dominates global lithium refining',
    category: 'Energy',
    image:
      'https://cdn.i-scmp.com/sites/default/files/styles/540x360/public/d8/images/canvas/2026/01/14/3291c1b0-94ac-47db-a127-8f623fb081c8_0aa70deb.jpg?itok=4sTYxd4x',
  },
  {
    title: 'The world’s largest trading partners in 2025',
    category: 'Trade',
    image:
      'https://www.visualcapitalist.com/wp-content/uploads/2026/01/Currency_US-vs-World_02-share-1000x600.webp',
  },
  {
    title: 'Who controls global semiconductor supply chains',
    category: 'Technology',
    image:
      'https://cdn.i-scmp.com/sites/default/files/styles/540x360/public/d8/images/canvas/2026/01/14/ead5f3eb-f46f-40bb-8c7f-1149f80de37c_a29451a3.jpg?itok=M_f3UA-I',
  },
]
