
export interface Node {
  id: string;
  name: string;
  group: 'Seni' | 'Sejarah' | 'Geografi' | 'Budaya';
  image_url: string;
  description: string;
  era: string;
  location: string;
  val?: number;
}

export interface Link {
  source: string;
  target: string;
  label: string;
  explanation: string;
}

export const mockNodes: Node[] = [
  {
    id: 'wayang-kulit',
    name: 'Wayang Kulit',
    group: 'Seni',
    image_url: 'https://picsum.photos/seed/wayang/400/300',
    description: 'Seni pertunjukan tradisional asli Indonesia yang menggunakan boneka kulit kerbau sebagai tokoh utamanya. Merupakan warisan mahakarya dunia.',
    era: 'Kuno - Modern',
    location: 'Jawa & Bali',
    val: 20
  },
  {
    id: 'kerajaan-mataram',
    name: 'Kerajaan Mataram',
    group: 'Sejarah',
    image_url: 'https://picsum.photos/seed/mataram/400/300',
    description: 'Salah satu kerajaan terbesar di Jawa yang meninggalkan banyak mahakarya arsitektur dan budaya.',
    era: 'Abad 8 - 10',
    location: 'Jawa Tengah',
    val: 18
  },
  {
    id: 'candi-borobudur',
    name: 'Candi Borobudur',
    group: 'Sejarah',
    image_url: 'https://picsum.photos/seed/borobudur/400/300',
    description: 'Candi Buddha terbesar di dunia dan salah satu monumen Buddha terbesar di dunia.',
    era: 'Dinasti Syailendra',
    location: 'Magelang, Jawa Tengah',
    val: 25
  },
  {
    id: 'gamelan',
    name: 'Gamelan',
    group: 'Seni',
    image_url: 'https://picsum.photos/seed/gamelan/400/300',
    description: 'Ensembel musik yang biasanya menonjolkan metalofon, gambang, gendang, dan gong.',
    era: 'Pra-Hindu - Modern',
    location: 'Seluruh Nusantara',
    val: 15
  },
  {
    id: 'walisongo',
    name: 'Walisongo',
    group: 'Sejarah',
    image_url: 'https://picsum.photos/seed/walisongo/400/300',
    description: 'Sembilan tokoh penyebar agama Islam di tanah Jawa yang menggunakan pendekatan budaya.',
    era: 'Abad 14 - 16',
    location: 'Jawa',
    val: 22
  },
  {
    id: 'keris',
    name: 'Keris',
    group: 'Budaya',
    image_url: 'https://picsum.photos/seed/keris/400/300',
    description: 'Senjata tajam golongan belati dengan ujung runcing dan tajam pada kedua sisinya, seringkali dengan bilah berkelok-kelok.',
    era: 'Abad 9 - Modern',
    location: 'Jawa, Madura, Sumatera',
    val: 12
  },
  {
    id: 'pulau-jawa',
    name: 'Pulau Jawa',
    group: 'Geografi',
    image_url: 'https://picsum.photos/seed/jawa/400/300',
    description: 'Pusat pemerintahan dan budaya Nusantara sejak zaman dahulu.',
    era: 'Geologis',
    location: 'Indonesia Tengah',
    val: 30
  },
  {
    id: 'batik',
    name: 'Batik',
    group: 'Seni',
    image_url: 'https://picsum.photos/seed/batik/400/300',
    description: 'Teknik pewarnaan kain menggunakan malam yang telah diakui UNESCO sebagai Warisan Kemanusiaan untuk Budaya Lisan dan Nonbendawi.',
    era: 'Abad 6 - Modern',
    location: 'Solo, Yogyakarta, Pekalongan',
    val: 14
  },
  {
    id: 'kerajaan-majapahit',
    name: 'Kerajaan Majapahit',
    group: 'Sejarah',
    image_url: 'https://picsum.photos/seed/majapahit/400/300',
    description: 'Kerajaan Hindu-Buddha terbesar yang berhasil menyatukan Nusantara di bawah Sumpah Palapa Gajah Mada.',
    era: '1293–1527 M',
    location: 'Trowulan, Jawa Timur',
    val: 28
  },
  {
    id: 'gajah-mada',
    name: 'Gajah Mada',
    group: 'Sejarah',
    image_url: 'https://picsum.photos/seed/gajahmada/400/300',
    description: 'Mahapatih Kerajaan Majapahit yang terkenal dengan Sumpah Palapa.',
    era: 'Abad 14',
    location: 'Majapahit',
    val: 20
  },
  {
    id: 'tari-kecak',
    name: 'Tari Kecak',
    group: 'Seni',
    image_url: 'https://picsum.photos/seed/kecak/400/300',
    description: 'Seni tari dari Bali yang melibatkan puluhan penari laki-laki yang duduk melingkar dan menyerukan suara "cak-cak-cak".',
    era: '1930-an - Modern',
    location: 'Bali',
    val: 16
  },
  {
    id: 'bali',
    name: 'Bali',
    group: 'Geografi',
    image_url: 'https://picsum.photos/seed/bali/400/300',
    description: 'Pulau Dewata yang terkenal akan keindahan alam dan kekentalan budayanya.',
    era: 'Geologis',
    location: 'Indonesia Tengah',
    val: 22
  },
  {
    id: 'sumatera',
    name: 'Sumatera',
    group: 'Geografi',
    image_url: 'https://picsum.photos/seed/sumatera/400/300',
    description: 'Pulau besar di barat Indonesia, rumah bagi Kerajaan Sriwijaya.',
    era: 'Geologis',
    location: 'Indonesia Barat',
    val: 20
  },
  {
    id: 'sriwijaya',
    name: 'Sriwijaya',
    group: 'Sejarah',
    image_url: 'https://picsum.photos/seed/sriwijaya/400/300',
    description: 'Kerajaan maritim Buddha yang kuat dan menjadi pusat pembelajaran agama Buddha di Asia Tenggara.',
    era: 'Abad 7 - 12',
    location: 'Palembang, Sumatera',
    val: 24
  },
  {
    id: 'rumah-gadang',
    name: 'Rumah Gadang',
    group: 'Budaya',
    image_url: 'https://picsum.photos/seed/gadang/400/300',
    description: 'Rumah adat Minangkabau yang memiliki bentuk atap seperti tanduk kerbau.',
    era: 'Kuno - Modern',
    location: 'Sumatera Barat',
    val: 15
  }
];

export const mockLinks: Link[] = [
  { source: 'wayang-kulit', target: 'pulau-jawa', label: 'BERASAL_DARI', explanation: 'Wayang Kulit merupakan kesenian yang berakar kuat dalam budaya masyarakat Jawa selama berabad-abad.' },
  { source: 'candi-borobudur', target: 'kerajaan-mataram', label: 'DIBANGUN_OLEH', explanation: 'Candi Borobudur dibangun pada masa kejayaan Dinasti Syailendra dari Kerajaan Mataram Kuno.' },
  { source: 'kerajaan-mataram', target: 'pulau-jawa', label: 'BERLOKASI_DI', explanation: 'Pusat kekuasaan Mataram Kuno berada di pedalaman Jawa Tengah.' },
  { source: 'gamelan', target: 'wayang-kulit', label: 'MENGIRINGI', explanation: 'Musik Gamelan adalah elemen krusial yang mengiringi setiap pertunjukan Wayang Kulit.' },
  { source: 'walisongo', target: 'wayang-kulit', label: 'MENGGUNAKAN', explanation: 'Para Sunan, terutama Sunan Kalijaga, menggunakan Wayang Kulit sebagai media dakwah Islam.' },
  { source: 'keris', target: 'kerajaan-majapahit', label: 'SIMBOL_KEKUASAAN', explanation: 'Keris menjadi atribut penting prajurit dan bangsawan Majapahit sebagai simbol status dan kekuatan.' },
  { source: 'kerajaan-majapahit', target: 'pulau-jawa', label: 'BERPUSAT_DI', explanation: 'Majapahit berpusat di Trowulan, Jawa Timur, dan menguasai hampir seluruh Nusantara.' },
  { source: 'gajah-mada', target: 'kerajaan-majapahit', label: 'MAHAPATIH', explanation: 'Gajah Mada adalah sosok sentral yang membawa Majapahit mencapai puncak keemasannya.' },
  { source: 'batik', target: 'pulau-jawa', label: 'WARISAN_BUDAYA', explanation: 'Batik berkembang pesat di keraton-keraton Jawa sebelum menyebar ke seluruh Nusantara.' },
  { source: 'tari-kecak', target: 'bali', label: 'BERASAL_DARI', explanation: 'Tari Kecak adalah ikon budaya Bali yang menceritakan fragmen Ramayana.' },
  { source: 'sriwijaya', target: 'sumatera', label: 'BERLOKASI_DI', explanation: 'Sriwijaya adalah kerajaan maritim yang berpusat di wilayah yang sekarang menjadi Palembang.' },
  { source: 'rumah-gadang', target: 'sumatera', label: 'ARSITEKTUR_TRADISIONAL', explanation: 'Rumah Gadang merepresentasikan identitas arsitektur masyarakat Minangkabau di Sumatera Barat.' },
  { source: 'gamelan', target: 'bali', label: 'VARIAN_BALI', explanation: 'Bali memiliki varian Gamelan Gong Kebyar yang sangat dinamis dan energetik.' },
  { source: 'sriwijaya', target: 'kerajaan-mataram', label: 'HUBUNGAN_DIPLO', explanation: 'Kedua kerajaan besar ini memiliki hubungan yang kompleks, mulai dari aliansi pernikahan hingga persaingan politik.' }
];
