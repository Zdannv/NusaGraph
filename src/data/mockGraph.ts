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
    "id": "pulau-jawa",
    "name": "Pulau Jawa",
    "group": "Geografi",
    "image_url": "https://picsum.photos/seed/pulau-jawa/400/300",
    "description": "Pusat pemerintahan dan budaya Nusantara sejak zaman dahulu.",
    "era": "Geologis",
    "location": "Indonesia Tengah",
    "val": 30
  },
  {
    "id": "pulau-sumatera",
    "name": "Pulau Sumatera",
    "group": "Geografi",
    "image_url": "https://picsum.photos/seed/pulau-sumatera/400/300",
    "description": "Pulau besar di barat Indonesia, kaya akan rempah dan sejarah maritim.",
    "era": "Geologis",
    "location": "Indonesia Barat",
    "val": 30
  },
  {
    "id": "pulau-kalimantan",
    "name": "Pulau Kalimantan",
    "group": "Geografi",
    "image_url": "https://picsum.photos/seed/pulau-kalimantan/400/300",
    "description": "Pulau dengan hutan hujan tropis tertua dan sungai-sungai besar.",
    "era": "Geologis",
    "location": "Indonesia Tengah",
    "val": 30
  },
  {
    "id": "pulau-sulawesi",
    "name": "Pulau Sulawesi",
    "group": "Geografi",
    "image_url": "https://picsum.photos/seed/pulau-sulawesi/400/300",
    "description": "Pulau berbentuk K dengan kekayaan laut dan pelaut tangguh.",
    "era": "Geologis",
    "location": "Indonesia Timur",
    "val": 30
  },
  {
    "id": "pulau-papua",
    "name": "Pulau Papua",
    "group": "Geografi",
    "image_url": "https://picsum.photos/seed/pulau-papua/400/300",
    "description": "Pulau di ujung timur, kaya akan keanekaragaman hayati dan budaya suku asli.",
    "era": "Geologis",
    "location": "Indonesia Timur",
    "val": 30
  },
  {
    "id": "pulau-bali",
    "name": "Pulau Bali",
    "group": "Geografi",
    "image_url": "https://picsum.photos/seed/pulau-bali/400/300",
    "description": "Pulau Dewata yang terkenal akan keindahan alam dan kekentalan budayanya.",
    "era": "Geologis",
    "location": "Indonesia Tengah",
    "val": 30
  },
  {
    "id": "nusa-tenggara-barat",
    "name": "Nusa Tenggara Barat",
    "group": "Geografi",
    "image_url": "https://picsum.photos/seed/nusa-tenggara-barat/400/300",
    "description": "Gugusan pulau yang mencakup Lombok dan Sumbawa.",
    "era": "Geologis",
    "location": "Indonesia Tengah",
    "val": 30
  },
  {
    "id": "nusa-tenggara-timur",
    "name": "Nusa Tenggara Timur",
    "group": "Geografi",
    "image_url": "https://picsum.photos/seed/nusa-tenggara-timur/400/300",
    "description": "Gugusan pulau eksotis yang merupakan habitat Komodo.",
    "era": "Geologis",
    "location": "Indonesia Timur",
    "val": 30
  },
  {
    "id": "kepulauan-maluku",
    "name": "Kepulauan Maluku",
    "group": "Geografi",
    "image_url": "https://picsum.photos/seed/kepulauan-maluku/400/300",
    "description": "Kepulauan rempah-rempah yang memicu penjelajahan samudra dunia.",
    "era": "Geologis",
    "location": "Indonesia Timur",
    "val": 30
  },
  {
    "id": "pulau-madura",
    "name": "Pulau Madura",
    "group": "Geografi",
    "image_url": "https://picsum.photos/seed/pulau-madura/400/300",
    "description": "Pulau penghasil garam dengan budaya karapan sapi.",
    "era": "Geologis",
    "location": "Jawa Timur",
    "val": 30
  },
  {
    "id": "pulau-nias",
    "name": "Pulau Nias",
    "group": "Geografi",
    "image_url": "https://picsum.photos/seed/pulau-nias/400/300",
    "description": "Pulau di barat Sumatera yang terkenal dengan tradisi megalitik.",
    "era": "Geologis",
    "location": "Sumatera Utara",
    "val": 30
  },
  {
    "id": "pulau-mentawai",
    "name": "Kepulauan Mentawai",
    "group": "Geografi",
    "image_url": "https://picsum.photos/seed/pulau-mentawai/400/300",
    "description": "Kepulauan dengan budaya tato tertua di dunia.",
    "era": "Geologis",
    "location": "Sumatera Barat",
    "val": 30
  },
  {
    "id": "pulau-lombok",
    "name": "Pulau Lombok",
    "group": "Geografi",
    "image_url": "https://picsum.photos/seed/pulau-lombok/400/300",
    "description": "Pulau tetangga Bali dengan kekayaan budaya Suku Sasak.",
    "era": "Geologis",
    "location": "NTB",
    "val": 30
  },
  {
    "id": "pulau-sumbawa",
    "name": "Pulau Sumbawa",
    "group": "Geografi",
    "image_url": "https://picsum.photos/seed/pulau-sumbawa/400/300",
    "description": "Pulau besar di NTB yang pernah memiliki kesultanan kuat.",
    "era": "Geologis",
    "location": "NTB",
    "val": 30
  },
  {
    "id": "kepulauan-riau",
    "name": "Kepulauan Riau",
    "group": "Geografi",
    "image_url": "https://picsum.photos/seed/kepulauan-riau/400/300",
    "description": "Jalur perdagangan maritim yang strategis di Selat Malaka.",
    "era": "Geologis",
    "location": "Sumatera",
    "val": 30
  },
  {
    "id": "kerajaan-kutai",
    "name": "Kerajaan Kutai",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/kerajaan-kutai/400/300",
    "description": "Kerajaan Hindu tertua di Nusantara peninggalan Prasasti Yupa.",
    "era": "Abad 4",
    "location": "Kalimantan Timur",
    "val": 28
  },
  {
    "id": "kerajaan-tarumanegara",
    "name": "Kerajaan Tarumanegara",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/kerajaan-tarumanegara/400/300",
    "description": "Kerajaan Hindu awal di Jawa Barat, dipimpin Raja Purnawarman.",
    "era": "Abad 4 - 7",
    "location": "Jawa Barat",
    "val": 28
  },
  {
    "id": "kerajaan-sriwijaya",
    "name": "Kerajaan Sriwijaya",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/kerajaan-sriwijaya/400/300",
    "description": "Kemaharajaan maritim Buddha pembangun jalur perdagangan Selat Malaka.",
    "era": "Abad 7 - 13",
    "location": "Sumatera Selatan",
    "val": 28
  },
  {
    "id": "kerajaan-mataram-kuno",
    "name": "Kerajaan Mataram Kuno",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/kerajaan-mataram-kuno/400/300",
    "description": "Pembangun Candi Borobudur dan Prambanan (Wangsa Sanjaya & Syailendra).",
    "era": "Abad 8 - 10",
    "location": "Jawa Tengah",
    "val": 28
  },
  {
    "id": "kerajaan-kediri",
    "name": "Kerajaan Kediri",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/kerajaan-kediri/400/300",
    "description": "Kerajaan bercorak agraris pelestari karya sastra Kakawin.",
    "era": "1042 - 1222",
    "location": "Jawa Timur",
    "val": 28
  },
  {
    "id": "kerajaan-singasari",
    "name": "Kerajaan Singasari",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/kerajaan-singasari/400/300",
    "description": "Kerajaan yang didirikan oleh Ken Arok, awal mula kebangkitan imperium Jawa.",
    "era": "1222 - 1292",
    "location": "Jawa Timur",
    "val": 28
  },
  {
    "id": "kerajaan-majapahit",
    "name": "Kerajaan Majapahit",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/kerajaan-majapahit/400/300",
    "description": "Imperium agung yang menyatukan Nusantara di bawah Gajah Mada.",
    "era": "1293 - 1527",
    "location": "Jawa Timur",
    "val": 28
  },
  {
    "id": "kesultanan-samudera-pasai",
    "name": "Kesultanan Samudera Pasai",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/kesultanan-samudera-pasai/400/300",
    "description": "Kerajaan Islam pertama di Nusantara.",
    "era": "Abad 13",
    "location": "Aceh",
    "val": 28
  },
  {
    "id": "kesultanan-demak",
    "name": "Kesultanan Demak",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/kesultanan-demak/400/300",
    "description": "Pelopor penyebaran Islam di Jawa oleh Walisongo.",
    "era": "1475 - 1554",
    "location": "Jawa Tengah",
    "val": 28
  },
  {
    "id": "kesultanan-banten",
    "name": "Kesultanan Banten",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/kesultanan-banten/400/300",
    "description": "Kerajaan Islam maritim penguasa lada dan pelabuhan internasional.",
    "era": "1526 - 1813",
    "location": "Banten",
    "val": 28
  },
  {
    "id": "kesultanan-mataram-islam",
    "name": "Kesultanan Mataram Islam",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/kesultanan-mataram-islam/400/300",
    "description": "Penyatu Jawa di bawah Sultan Agung yang melawan VOC.",
    "era": "1587 - 1755",
    "location": "Yogyakarta & Solo",
    "val": 28
  },
  {
    "id": "kesultanan-gowa-tallo",
    "name": "Kesultanan Gowa-Tallo",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/kesultanan-gowa-tallo/400/300",
    "description": "Kerajaan maritim tangguh di timur yang dipimpin Sultan Hasanuddin.",
    "era": "Abad 16 - 17",
    "location": "Sulawesi Selatan",
    "val": 28
  },
  {
    "id": "kesultanan-ternate",
    "name": "Kesultanan Ternate",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/kesultanan-ternate/400/300",
    "description": "Penguasa rempah cengkeh di kepulauan Maluku Utara (Uli Lima).",
    "era": "1257 - 1914",
    "location": "Maluku Utara",
    "val": 28
  },
  {
    "id": "kesultanan-tidore",
    "name": "Kesultanan Tidore",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/kesultanan-tidore/400/300",
    "description": "Saingan Ternate dalam monopoli rempah (Uli Siwa).",
    "era": "1081 - 1967",
    "location": "Maluku Utara",
    "val": 28
  },
  {
    "id": "kerajaan-bali",
    "name": "Kerajaan Bali",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/kerajaan-bali/400/300",
    "description": "Pusat pelestarian kebudayaan Hindu-Jawa pasca keruntuhan Majapahit.",
    "era": "Abad 10 - 20",
    "location": "Bali",
    "val": 28
  },
  {
    "id": "kesultanan-aceh",
    "name": "Kesultanan Aceh Darussalam",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/kesultanan-aceh/400/300",
    "description": "Pusat penyebaran Islam dan kekuatan militer terkuat di Sumatera.",
    "era": "1496 - 1903",
    "location": "Aceh",
    "val": 28
  },
  {
    "id": "kesultanan-banjar",
    "name": "Kesultanan Banjar",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/kesultanan-banjar/400/300",
    "description": "Pusat perdagangan lada di Kalimantan Selatan.",
    "era": "1520 - 1860",
    "location": "Kalimantan Selatan",
    "val": 28
  },
  {
    "id": "kerajaan-pajajaran",
    "name": "Kerajaan Sunda Pajajaran",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/kerajaan-pajajaran/400/300",
    "description": "Kerajaan Hindu di tanah Sunda dengan tokoh ikonik Prabu Siliwangi.",
    "era": "1030 - 1579",
    "location": "Jawa Barat",
    "val": 28
  },
  {
    "id": "kesultanan-palembang",
    "name": "Kesultanan Palembang",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/kesultanan-palembang/400/300",
    "description": "Pewaris budaya Sriwijaya yang memadukan Islam dan budaya Melayu-Jawa.",
    "era": "1659 - 1823",
    "location": "Sumatera Selatan",
    "val": 28
  },
  {
    "id": "kerajaan-bima",
    "name": "Kerajaan Bima",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/kerajaan-bima/400/300",
    "description": "Pusat penyebaran Islam di kawasan timur kepulauan Nusa Tenggara.",
    "era": "1620 - 1958",
    "location": "NTB",
    "val": 28
  },
  {
    "id": "gajah-mada",
    "name": "Gajah Mada",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/gajah-mada/400/300",
    "description": "Mahapatih penakluk Nusantara dengan Sumpah Palapa.",
    "era": "Abad 14",
    "location": "Jawa Timur",
    "val": 22
  },
  {
    "id": "hayam-wuruk",
    "name": "Prabu Hayam Wuruk",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/hayam-wuruk/400/300",
    "description": "Raja terbesar Majapahit yang membawa masa keemasan.",
    "era": "1334 - 1389",
    "location": "Jawa Timur",
    "val": 22
  },
  {
    "id": "raden-wijaya",
    "name": "Raden Wijaya",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/raden-wijaya/400/300",
    "description": "Pendiri Kerajaan Majapahit yang berhasil mengalahkan pasukan Mongol.",
    "era": "1293 - 1309",
    "location": "Jawa Timur",
    "val": 22
  },
  {
    "id": "ken-arok",
    "name": "Ken Arok",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/ken-arok/400/300",
    "description": "Pendiri Wangsa Rajasa dan Kerajaan Singasari.",
    "era": "1222 - 1227",
    "location": "Jawa Timur",
    "val": 22
  },
  {
    "id": "sultan-agung",
    "name": "Sultan Agung",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/sultan-agung/400/300",
    "description": "Raja Mataram Islam pelopor kalender Jawa dan penyerang VOC di Batavia.",
    "era": "1613 - 1645",
    "location": "Jawa Tengah",
    "val": 22
  },
  {
    "id": "sultan-hasanuddin",
    "name": "Sultan Hasanuddin",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/sultan-hasanuddin/400/300",
    "description": "Dijuluki Ayam Jantan dari Timur karena keberaniannya melawan VOC.",
    "era": "1631 - 1670",
    "location": "Sulawesi Selatan",
    "val": 22
  },
  {
    "id": "pangeran-diponegoro",
    "name": "Pangeran Diponegoro",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/pangeran-diponegoro/400/300",
    "description": "Pemimpin Perang Jawa melawan kolonial Belanda.",
    "era": "1785 - 1855",
    "location": "Yogyakarta",
    "val": 22
  },
  {
    "id": "cut-nyak-dien",
    "name": "Cut Nyak Dien",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/cut-nyak-dien/400/300",
    "description": "Pahlawan perempuan tangguh dari Aceh.",
    "era": "1848 - 1908",
    "location": "Aceh",
    "val": 22
  },
  {
    "id": "pattimura",
    "name": "Kapitan Pattimura",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/pattimura/400/300",
    "description": "Pemimpin perlawanan rakyat Maluku terhadap monopoli rempah Belanda.",
    "era": "1783 - 1817",
    "location": "Maluku",
    "val": 22
  },
  {
    "id": "sultan-baabullah",
    "name": "Sultan Baabullah",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/sultan-baabullah/400/300",
    "description": "Pengusir bangsa Portugis dari Ternate.",
    "era": "1528 - 1583",
    "location": "Maluku Utara",
    "val": 22
  },
  {
    "id": "prabu-siliwangi",
    "name": "Prabu Siliwangi",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/prabu-siliwangi/400/300",
    "description": "Raja agung Sunda Pajajaran yang sangat dihormati masyarakat Jawa Barat.",
    "era": "1482 - 1521",
    "location": "Jawa Barat",
    "val": 22
  },
  {
    "id": "raden-patah",
    "name": "Raden Patah",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/raden-patah/400/300",
    "description": "Pendiri Kesultanan Demak yang masih keturunan Majapahit.",
    "era": "Abad 15",
    "location": "Jawa Tengah",
    "val": 22
  },
  {
    "id": "sunan-kalijaga",
    "name": "Sunan Kalijaga",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/sunan-kalijaga/400/300",
    "description": "Anggota Walisongo yang berdakwah melalui pendekatan seni budaya Jawa.",
    "era": "Abad 15 - 16",
    "location": "Jawa",
    "val": 22
  },
  {
    "id": "ki-hajar-dewantara",
    "name": "Ki Hajar Dewantara",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/ki-hajar-dewantara/400/300",
    "description": "Bapak Pendidikan Nasional pendiri Taman Siswa.",
    "era": "1889 - 1959",
    "location": "Yogyakarta",
    "val": 22
  },
  {
    "id": "ra-kartini",
    "name": "R.A. Kartini",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/ra-kartini/400/300",
    "description": "Pelopor kebangkitan perempuan Pribumi.",
    "era": "1879 - 1904",
    "location": "Jawa Tengah",
    "val": 22
  },
  {
    "id": "sultan-iskandar-muda",
    "name": "Sultan Iskandar Muda",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/sultan-iskandar-muda/400/300",
    "description": "Raja yang membawa Aceh pada puncak kejayaan dan kemakmuran.",
    "era": "1593 - 1636",
    "location": "Aceh",
    "val": 22
  },
  {
    "id": "tuanku-imambonjol",
    "name": "Tuanku Imam Bonjol",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/tuanku-imambonjol/400/300",
    "description": "Pemimpin Kaum Padri dalam Perang Padri di Sumatera Barat.",
    "era": "1772 - 1864",
    "location": "Sumatera Barat",
    "val": 22
  },
  {
    "id": "pangeran-antasari",
    "name": "Pangeran Antasari",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/pangeran-antasari/400/300",
    "description": "Sultan Banjar dan pahlawan nasional yang melawan Belanda.",
    "era": "1797 - 1862",
    "location": "Kalimantan Selatan",
    "val": 22
  },
  {
    "id": "sisingamangaraja-xii",
    "name": "Sisingamangaraja XII",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/sisingamangaraja-xii/400/300",
    "description": "Raja terakhir tanah Batak yang gugur melawan Belanda.",
    "era": "1845 - 1907",
    "location": "Sumatera Utara",
    "val": 22
  },
  {
    "id": "malahayati",
    "name": "Laksamana Malahayati",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/malahayati/400/300",
    "description": "Laksamana laut perempuan pertama di dunia dari Aceh.",
    "era": "Abad 16",
    "location": "Aceh",
    "val": 22
  },
  {
    "id": "walisongo",
    "name": "Walisongo",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/walisongo/400/300",
    "description": "Sembilan penyebar agama Islam di Nusantara, khususnya di Jawa.",
    "era": "Abad 15 - 16",
    "location": "Jawa",
    "val": 22
  },
  {
    "id": "mulawarman",
    "name": "Raja Mulawarman",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/mulawarman/400/300",
    "description": "Raja Kutai yang kedermawanannya dicatat dalam Prasasti Yupa.",
    "era": "Abad 4",
    "location": "Kalimantan Timur",
    "val": 22
  },
  {
    "id": "purnawarman",
    "name": "Raja Purnawarman",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/purnawarman/400/300",
    "description": "Raja Tarumanegara yang membangun saluran air sungai Gomati.",
    "era": "Abad 5",
    "location": "Jawa Barat",
    "val": 22
  },
  {
    "id": "balaputradewa",
    "name": "Raja Balaputradewa",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/balaputradewa/400/300",
    "description": "Raja Sriwijaya pembangun asrama bagi pelajar Nusantara di Nalanda India.",
    "era": "Abad 9",
    "location": "Sumatera Selatan",
    "val": 22
  },
  {
    "id": "tjut-meutia",
    "name": "Tjut Meutia",
    "group": "Sejarah",
    "image_url": "https://picsum.photos/seed/tjut-meutia/400/300",
    "description": "Pahlawan nasional perempuan yang bergerilya di pedalaman Aceh.",
    "era": "1870 - 1910",
    "location": "Aceh",
    "val": 22
  },
  {
    "id": "tari-saman",
    "name": "Tari Saman",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tari-saman/400/300",
    "description": "Tarian Seribu Tangan yang mengandalkan kekompakan tanpa alat musik dari Gayo.",
    "era": "Tradisional",
    "location": "Aceh",
    "val": 16
  },
  {
    "id": "tari-kecak",
    "name": "Tari Kecak",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tari-kecak/400/300",
    "description": "Tarian melingkar mengisahkan Ramayana dengan paduan suara vokal manusia \"cak\".",
    "era": "Tradisional",
    "location": "Bali",
    "val": 16
  },
  {
    "id": "tari-pendet",
    "name": "Tari Pendet",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tari-pendet/400/300",
    "description": "Tarian penyambutan tamu khas Bali menggunakan taburan bunga.",
    "era": "Tradisional",
    "location": "Bali",
    "val": 16
  },
  {
    "id": "tari-barong",
    "name": "Tari Barong",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tari-barong/400/300",
    "description": "Seni pertunjukan Bali yang menggambarkan pertempuran kebaikan (Barong) melawan kejahatan (Rangda).",
    "era": "Tradisional",
    "location": "Bali",
    "val": 16
  },
  {
    "id": "tari-jaipong",
    "name": "Tari Jaipong",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tari-jaipong/400/300",
    "description": "Tarian pergaulan Sunda yang sangat dinamis dan atraktif.",
    "era": "Tradisional",
    "location": "Jawa Barat",
    "val": 16
  },
  {
    "id": "tari-piring",
    "name": "Tari Piring",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tari-piring/400/300",
    "description": "Tarian Minangkabau yang menampilkan ketangkasan memutar piring tanpa terjatuh.",
    "era": "Tradisional",
    "location": "Sumatera Barat",
    "val": 16
  },
  {
    "id": "tari-payung",
    "name": "Tari Payung",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tari-payung/400/300",
    "description": "Tarian yang melambangkan kasih sayang dan perlindungan.",
    "era": "Tradisional",
    "location": "Sumatera Barat",
    "val": 16
  },
  {
    "id": "tari-tor-tor",
    "name": "Tari Tor-Tor",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tari-tor-tor/400/300",
    "description": "Tarian komunal suku Batak untuk upacara adat dan spiritual.",
    "era": "Tradisional",
    "location": "Sumatera Utara",
    "val": 16
  },
  {
    "id": "tari-serampang-dua-belas",
    "name": "Tari Serampang Dua Belas",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tari-serampang-dua-belas/400/300",
    "description": "Tarian Melayu Deli yang menceritakan proses pencarian jodoh.",
    "era": "Tradisional",
    "location": "Sumatera Utara",
    "val": 16
  },
  {
    "id": "tari-gending-sriwijaya",
    "name": "Tari Gending Sriwijaya",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tari-gending-sriwijaya/400/300",
    "description": "Tarian penyambutan tamu agung peninggalan masa kemaharajaan Sriwijaya.",
    "era": "Tradisional",
    "location": "Sumatera Selatan",
    "val": 16
  },
  {
    "id": "tari-tanggai",
    "name": "Tari Tanggai",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tari-tanggai/400/300",
    "description": "Tarian khas Palembang dengan menggunakan kuku palsu dari emas.",
    "era": "Tradisional",
    "location": "Sumatera Selatan",
    "val": 16
  },
  {
    "id": "tari-bedhaya-ketawang",
    "name": "Tari Bedhaya Ketawang",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tari-bedhaya-ketawang/400/300",
    "description": "Tarian sakral Keraton Kasunanan Surakarta yang hanya dipentaskan saat penobatan raja.",
    "era": "Tradisional",
    "location": "Jawa Tengah",
    "val": 16
  },
  {
    "id": "tari-gambyong",
    "name": "Tari Gambyong",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tari-gambyong/400/300",
    "description": "Tarian klasik Jawa untuk penyambutan tamu dan menyambut panen.",
    "era": "Tradisional",
    "location": "Jawa Tengah",
    "val": 16
  },
  {
    "id": "tari-kuda-lumping",
    "name": "Tari Kuda Lumping",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tari-kuda-lumping/400/300",
    "description": "Tarian kesurupan dengan properti anyaman kuda (Jathilan).",
    "era": "Tradisional",
    "location": "Jawa Timur",
    "val": 16
  },
  {
    "id": "tari-reog-ponorogo",
    "name": "Reog Ponorogo",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tari-reog-ponorogo/400/300",
    "description": "Kesenian megah dengan topeng singa berhiaskan bulu merak (Dadap Merak).",
    "era": "Tradisional",
    "location": "Jawa Timur",
    "val": 16
  },
  {
    "id": "tari-remo",
    "name": "Tari Remo",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tari-remo/400/300",
    "description": "Tarian pembuka seni ludruk khas Jawa Timur.",
    "era": "Tradisional",
    "location": "Jawa Timur",
    "val": 16
  },
  {
    "id": "tari-topeng-cirebon",
    "name": "Tari Topeng Cirebon",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tari-topeng-cirebon/400/300",
    "description": "Tari yang menceritakan siklus kehidupan manusia dengan berganti-ganti topeng.",
    "era": "Tradisional",
    "location": "Jawa Barat",
    "val": 16
  },
  {
    "id": "tari-legong",
    "name": "Tari Legong",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tari-legong/400/300",
    "description": "Tarian keraton Bali yang sangat halus dan dimainkan gadis-gadis muda.",
    "era": "Tradisional",
    "location": "Bali",
    "val": 16
  },
  {
    "id": "tari-gandrung",
    "name": "Tari Gandrung",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tari-gandrung/400/300",
    "description": "Tarian khas Banyuwangi wujud syukur pasca panen raya.",
    "era": "Tradisional",
    "location": "Jawa Timur",
    "val": 16
  },
  {
    "id": "tari-hudog",
    "name": "Tari Hudoq",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tari-hudog/400/300",
    "description": "Tarian topeng suku Dayak untuk mengusir hama tanaman.",
    "era": "Tradisional",
    "location": "Kalimantan Timur",
    "val": 16
  },
  {
    "id": "tari-enggang",
    "name": "Tari Burung Enggang",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tari-enggang/400/300",
    "description": "Tari suku Dayak Kenyah memuliakan burung enggang yang dianggap sakral.",
    "era": "Tradisional",
    "location": "Kalimantan Timur",
    "val": 16
  },
  {
    "id": "tari-baksa-kembang",
    "name": "Tari Baksa Kembang",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tari-baksa-kembang/400/300",
    "description": "Tarian klasik Kesultanan Banjar untuk penyambutan tamu.",
    "era": "Tradisional",
    "location": "Kalimantan Selatan",
    "val": 16
  },
  {
    "id": "tari-pakarena",
    "name": "Tari Pakarena",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tari-pakarena/400/300",
    "description": "Tarian kipas yang lemah lembut dari etnis Makassar.",
    "era": "Tradisional",
    "location": "Sulawesi Selatan",
    "val": 16
  },
  {
    "id": "tari-maengket",
    "name": "Tari Maengket",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tari-maengket/400/300",
    "description": "Tarian Minahasa yang merayakan panen dan kehidupan.",
    "era": "Tradisional",
    "location": "Sulawesi Utara",
    "val": 16
  },
  {
    "id": "tari-kabosaran",
    "name": "Tari Kabasaran",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tari-kabosaran/400/300",
    "description": "Tarian perang tradisional masyarakat Minahasa.",
    "era": "Tradisional",
    "location": "Sulawesi Utara",
    "val": 16
  },
  {
    "id": "tari-cakalele",
    "name": "Tari Cakalele",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tari-cakalele/400/300",
    "description": "Tarian perang Maluku pembakar semangat dengan parang dan salawaku.",
    "era": "Tradisional",
    "location": "Maluku",
    "val": 16
  },
  {
    "id": "tari-sajojo",
    "name": "Tari Sajojo",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tari-sajojo/400/300",
    "description": "Tarian pergaulan Papua yang riang gembira.",
    "era": "Tradisional",
    "location": "Papua",
    "val": 16
  },
  {
    "id": "tari-yospan",
    "name": "Tari Yospan",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tari-yospan/400/300",
    "description": "Tarian persahabatan pemuda Papua.",
    "era": "Tradisional",
    "location": "Papua",
    "val": 16
  },
  {
    "id": "tari-suanggi",
    "name": "Tari Suanggi",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tari-suanggi/400/300",
    "description": "Tarian bernuansa magis dari Papua Barat.",
    "era": "Tradisional",
    "location": "Papua",
    "val": 16
  },
  {
    "id": "tari-caci",
    "name": "Tari Caci",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tari-caci/400/300",
    "description": "Tari uji ketangkasan berbalut cambuk dari Manggarai.",
    "era": "Tradisional",
    "location": "NTT",
    "val": 16
  },
  {
    "id": "tari-gawi",
    "name": "Tari Gawi",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tari-gawi/400/300",
    "description": "Tarian massal melingkar suku Lio untuk syukuran alam.",
    "era": "Tradisional",
    "location": "NTT",
    "val": 16
  },
  {
    "id": "tari-wura-bongi-monca",
    "name": "Tari Wura Bongi Monca",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tari-wura-bongi-monca/400/300",
    "description": "Tarian tabur beras kuning khas Bima.",
    "era": "Tradisional",
    "location": "NTB",
    "val": 16
  },
  {
    "id": "tari-lengger",
    "name": "Tari Lengger",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tari-lengger/400/300",
    "description": "Seni tari rakyat khas Banyumas.",
    "era": "Tradisional",
    "location": "Jawa Tengah",
    "val": 16
  },
  {
    "id": "tari-sekapur-sirih",
    "name": "Tari Sekapur Sirih",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tari-sekapur-sirih/400/300",
    "description": "Tarian penyambutan tamu di Provinsi Jambi.",
    "era": "Tradisional",
    "location": "Jambi",
    "val": 16
  },
  {
    "id": "tari-campak",
    "name": "Tari Campak",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tari-campak/400/300",
    "description": "Tarian pergaulan masyarakat Bangka Belitung.",
    "era": "Tradisional",
    "location": "Bangka Belitung",
    "val": 16
  },
  {
    "id": "tari-melinting",
    "name": "Tari Melinting",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tari-melinting/400/300",
    "description": "Tarian agung keraton warisan Kesultanan Banten di Lampung.",
    "era": "Tradisional",
    "location": "Lampung",
    "val": 16
  },
  {
    "id": "tari-radap-rahayu",
    "name": "Tari Radap Rahayu",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tari-radap-rahayu/400/300",
    "description": "Tarian penolak bala peninggalan kerajaan Daha (Banjar).",
    "era": "Tradisional",
    "location": "Kalimantan Selatan",
    "val": 16
  },
  {
    "id": "tari-pepujan",
    "name": "Tari Pepujan",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tari-pepujan/400/300",
    "description": "Tarian religi dan syukur dari Cirebon.",
    "era": "Tradisional",
    "location": "Cirebon",
    "val": 16
  },
  {
    "id": "tari-bines",
    "name": "Tari Bines",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tari-bines/400/300",
    "description": "Tarian Gayo yang sering dipentaskan bersama Saman.",
    "era": "Tradisional",
    "location": "Aceh",
    "val": 16
  },
  {
    "id": "tari-dinding-badinding",
    "name": "Tari Indang",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tari-dinding-badinding/400/300",
    "description": "Tari dakwah Islam dari Pariaman yang mirip Saman.",
    "era": "Tradisional",
    "location": "Sumatera Barat",
    "val": 16
  },
  {
    "id": "wayang-kulit",
    "name": "Wayang Kulit",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/wayang-kulit/400/300",
    "description": "Seni pertunjukan bayangan dengan lakon Mahabharata & Ramayana.",
    "era": "Kuno - Modern",
    "location": "Jawa & Bali",
    "val": 18
  },
  {
    "id": "wayang-golek",
    "name": "Wayang Golek",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/wayang-golek/400/300",
    "description": "Seni boneka kayu tradisional khas masyarakat Sunda.",
    "era": "Kuno - Modern",
    "location": "Jawa Barat",
    "val": 18
  },
  {
    "id": "wayang-wong",
    "name": "Wayang Wong",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/wayang-wong/400/300",
    "description": "Pertunjukan teater tradisional dengan aktor manusia berperan sebagai tokoh wayang.",
    "era": "Kuno - Modern",
    "location": "Jawa",
    "val": 18
  },
  {
    "id": "ludruk",
    "name": "Ludruk",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/ludruk/400/300",
    "description": "Kesenian drama tradisional Jawa Timur yang menceritakan kehidupan rakyat sehari-hari.",
    "era": "Kuno - Modern",
    "location": "Jawa Timur",
    "val": 18
  },
  {
    "id": "ketoprak",
    "name": "Ketoprak",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/ketoprak/400/300",
    "description": "Seni pertunjukan teater Jawa dengan lakon sejarah dan legenda.",
    "era": "Kuno - Modern",
    "location": "Jawa Tengah",
    "val": 18
  },
  {
    "id": "makyong",
    "name": "Makyong",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/makyong/400/300",
    "description": "Teater tradisional Melayu perpaduan tarian, nyanyian, dan lelucon.",
    "era": "Kuno - Modern",
    "location": "Kepulauan Riau",
    "val": 18
  },
  {
    "id": "randai",
    "name": "Randai",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/randai/400/300",
    "description": "Teater tradisional Minangkabau yang menggabungkan pencak silat, tari, dan drama.",
    "era": "Kuno - Modern",
    "location": "Sumatera Barat",
    "val": 18
  },
  {
    "id": "gamelan",
    "name": "Gamelan",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/gamelan/400/300",
    "description": "Ensembel alat musik pukul Nusantara dari perunggu/besi.",
    "era": "Kuno - Modern",
    "location": "Jawa & Bali",
    "val": 18
  },
  {
    "id": "angklung",
    "name": "Angklung",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/angklung/400/300",
    "description": "Alat musik bambu multitonal yang dimainkan dengan digoyangkan (UNESCO).",
    "era": "Kuno - Modern",
    "location": "Jawa Barat",
    "val": 18
  },
  {
    "id": "sasando",
    "name": "Sasando",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/sasando/400/300",
    "description": "Alat musik dawai unik dari daun lontar kering khas Pulau Rote.",
    "era": "Kuno - Modern",
    "location": "NTT",
    "val": 18
  },
  {
    "id": "kolintang",
    "name": "Kolintang",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/kolintang/400/300",
    "description": "Alat musik perkusi bernada dari bilah kayu khas Minahasa.",
    "era": "Kuno - Modern",
    "location": "Sulawesi Utara",
    "val": 18
  },
  {
    "id": "tifa",
    "name": "Tifa",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/tifa/400/300",
    "description": "Alat musik ritmis berbahan kayu dan kulit binatang khas Indonesia Timur.",
    "era": "Kuno - Modern",
    "location": "Papua & Maluku",
    "val": 18
  },
  {
    "id": "talempong",
    "name": "Talempong",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/talempong/400/300",
    "description": "Alat musik pukul sejenis bonang dari kuningan khas Minangkabau.",
    "era": "Kuno - Modern",
    "location": "Sumatera Barat",
    "val": 18
  },
  {
    "id": "saluang",
    "name": "Saluang",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/saluang/400/300",
    "description": "Alat musik tiup seruling bambu dari Minangkabau.",
    "era": "Kuno - Modern",
    "location": "Sumatera Barat",
    "val": 18
  },
  {
    "id": "kendang",
    "name": "Kendang",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/kendang/400/300",
    "description": "Alat musik ritmis penentu tempo dalam iringan gamelan.",
    "era": "Kuno - Modern",
    "location": "Jawa",
    "val": 18
  },
  {
    "id": "sape",
    "name": "Sape",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/sape/400/300",
    "description": "Alat musik petik tradisional suku Dayak berbentuk panjang.",
    "era": "Kuno - Modern",
    "location": "Kalimantan",
    "val": 18
  },
  {
    "id": "kecapi",
    "name": "Kecapi",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/kecapi/400/300",
    "description": "Alat musik petik Sunda pengiring tembang.",
    "era": "Kuno - Modern",
    "location": "Jawa Barat",
    "val": 18
  },
  {
    "id": "rebab",
    "name": "Rebab",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/rebab/400/300",
    "description": "Alat musik gesek berdawai dua peninggalan budaya Timur Tengah yang berakulturasi.",
    "era": "Kuno - Modern",
    "location": "Nusantara",
    "val": 18
  },
  {
    "id": "gondang-sabangunan",
    "name": "Gondang Sabangunan",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/gondang-sabangunan/400/300",
    "description": "Ensembel musik komplit masyarakat Batak Toba.",
    "era": "Kuno - Modern",
    "location": "Sumatera Utara",
    "val": 18
  },
  {
    "id": "calung",
    "name": "Calung",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/calung/400/300",
    "description": "Alat musik bambu Sunda yang dipukul.",
    "era": "Kuno - Modern",
    "location": "Jawa Barat",
    "val": 18
  },
  {
    "id": "genggong",
    "name": "Genggong",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/genggong/400/300",
    "description": "Alat musik mulut purba yang memanfaatkan rongga mulut sebagai resonator.",
    "era": "Kuno - Modern",
    "location": "Bali",
    "val": 18
  },
  {
    "id": "slenthem",
    "name": "Slenthem",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/slenthem/400/300",
    "description": "Keluarga gamelan bersuara dengung rendah.",
    "era": "Kuno - Modern",
    "location": "Jawa",
    "val": 18
  },
  {
    "id": "bonang",
    "name": "Bonang",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/bonang/400/300",
    "description": "Kumpulan gong kecil yang disusun horisontal.",
    "era": "Kuno - Modern",
    "location": "Jawa",
    "val": 18
  },
  {
    "id": "rindik",
    "name": "Rindik",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/rindik/400/300",
    "description": "Alat musik bambu bernada slendro dari Bali.",
    "era": "Kuno - Modern",
    "location": "Bali",
    "val": 18
  },
  {
    "id": "gordang-sambilan",
    "name": "Gordang Sambilan",
    "group": "Seni",
    "image_url": "https://picsum.photos/seed/gordang-sambilan/400/300",
    "description": "Sembilan gendang raksasa kebanggaan etnis Mandailing.",
    "era": "Kuno - Modern",
    "location": "Sumatera Utara",
    "val": 18
  },
  {
    "id": "keris",
    "name": "Keris",
    "group": "Budaya",
    "image_url": "https://picsum.photos/seed/keris/400/300",
    "description": "Senjata belati asimetris dengan pamor berlekuk, simbol kekuatan magis dan martabat.",
    "era": "Tradisional/Kuno",
    "location": "Jawa & Sumatera",
    "val": 20
  },
  {
    "id": "batik",
    "name": "Batik",
    "group": "Budaya",
    "image_url": "https://picsum.photos/seed/batik/400/300",
    "description": "Kain dengan corak perintang malam, diakui UNESCO sebagai Warisan Kemanusiaan.",
    "era": "Tradisional/Kuno",
    "location": "Solo, Jogja, Pekalongan",
    "val": 20
  },
  {
    "id": "kain-tenun-ikat",
    "name": "Kain Tenun Ikat",
    "group": "Budaya",
    "image_url": "https://picsum.photos/seed/kain-tenun-ikat/400/300",
    "description": "Kain yang benangnya diikat dan dicelup warna sebelum ditenun.",
    "era": "Tradisional/Kuno",
    "location": "Nusantara",
    "val": 20
  },
  {
    "id": "kain-songket",
    "name": "Kain Songket",
    "group": "Budaya",
    "image_url": "https://picsum.photos/seed/kain-songket/400/300",
    "description": "Ratu segala kain Nusantara, ditenun dengan benang emas dan perak.",
    "era": "Tradisional/Kuno",
    "location": "Palembang & Minangkabau",
    "val": 20
  },
  {
    "id": "kain-ulos",
    "name": "Kain Ulos",
    "group": "Budaya",
    "image_url": "https://picsum.photos/seed/kain-ulos/400/300",
    "description": "Kain sakral masyarakat Batak pelambang ikatan kasih sayang.",
    "era": "Tradisional/Kuno",
    "location": "Sumatera Utara",
    "val": 20
  },
  {
    "id": "rencong",
    "name": "Rencong",
    "group": "Budaya",
    "image_url": "https://picsum.photos/seed/rencong/400/300",
    "description": "Senjata tajam khas Aceh berbentu mirip huruf Bismillah.",
    "era": "Tradisional/Kuno",
    "location": "Aceh",
    "val": 20
  },
  {
    "id": "mandau",
    "name": "Mandau",
    "group": "Budaya",
    "image_url": "https://picsum.photos/seed/mandau/400/300",
    "description": "Pedang sakral suku Dayak berhias ukiran dan rambut.",
    "era": "Tradisional/Kuno",
    "location": "Kalimantan",
    "val": 20
  },
  {
    "id": "celurit",
    "name": "Celurit",
    "group": "Budaya",
    "image_url": "https://picsum.photos/seed/celurit/400/300",
    "description": "Senjata berbentuk bulan sabit khas masyarakat Madura.",
    "era": "Tradisional/Kuno",
    "location": "Madura",
    "val": 20
  },
  {
    "id": "badik",
    "name": "Badik",
    "group": "Budaya",
    "image_url": "https://picsum.photos/seed/badik/400/300",
    "description": "Pisau atau belati khas etnis Bugis-Makassar.",
    "era": "Tradisional/Kuno",
    "location": "Sulawesi Selatan",
    "val": 20
  },
  {
    "id": "kujang",
    "name": "Kujang",
    "group": "Budaya",
    "image_url": "https://picsum.photos/seed/kujang/400/300",
    "description": "Senjata magis warisan Prabu Siliwangi masyarakat Pasundan.",
    "era": "Tradisional/Kuno",
    "location": "Jawa Barat",
    "val": 20
  },
  {
    "id": "rumah-gadang",
    "name": "Rumah Gadang",
    "group": "Budaya",
    "image_url": "https://picsum.photos/seed/rumah-gadang/400/300",
    "description": "Rumah komunal atap gonjong khas Minangkabau.",
    "era": "Tradisional/Kuno",
    "location": "Sumatera Barat",
    "val": 20
  },
  {
    "id": "rumah-joglo",
    "name": "Rumah Joglo",
    "group": "Budaya",
    "image_url": "https://picsum.photos/seed/rumah-joglo/400/300",
    "description": "Rumah bangsawan Jawa dengan atap trapesium menjulang.",
    "era": "Tradisional/Kuno",
    "location": "Jawa Tengah",
    "val": 20
  },
  {
    "id": "rumah-tongkonan",
    "name": "Rumah Tongkonan",
    "group": "Budaya",
    "image_url": "https://picsum.photos/seed/rumah-tongkonan/400/300",
    "description": "Rumah adat Toraja berbentuk seperti perahu menghadap utara.",
    "era": "Tradisional/Kuno",
    "location": "Sulawesi Selatan",
    "val": 20
  },
  {
    "id": "rumah-honai",
    "name": "Rumah Honai",
    "group": "Budaya",
    "image_url": "https://picsum.photos/seed/rumah-honai/400/300",
    "description": "Rumah bundar jerami tanpa jendela di pegunungan Papua.",
    "era": "Tradisional/Kuno",
    "location": "Papua",
    "val": 20
  },
  {
    "id": "rumah-betang",
    "name": "Rumah Betang",
    "group": "Budaya",
    "image_url": "https://picsum.photos/seed/rumah-betang/400/300",
    "description": "Rumah panjang Dayak yang menampung belasan kepala keluarga.",
    "era": "Tradisional/Kuno",
    "location": "Kalimantan",
    "val": 20
  },
  {
    "id": "upacara-ngaben",
    "name": "Upacara Ngaben",
    "group": "Budaya",
    "image_url": "https://picsum.photos/seed/upacara-ngaben/400/300",
    "description": "Ritual pembakaran jenazah umat Hindu di Bali.",
    "era": "Tradisional/Kuno",
    "location": "Bali",
    "val": 20
  },
  {
    "id": "tradisi-lompat-batu",
    "name": "Fahombo (Lompat Batu)",
    "group": "Budaya",
    "image_url": "https://picsum.photos/seed/tradisi-lompat-batu/400/300",
    "description": "Tradisi kedewasaan pemuda Nias dengan melompati batu setinggi 2 meter.",
    "era": "Tradisional/Kuno",
    "location": "Nias",
    "val": 20
  },
  {
    "id": "upacara-kasada",
    "name": "Yadnya Kasada",
    "group": "Budaya",
    "image_url": "https://picsum.photos/seed/upacara-kasada/400/300",
    "description": "Ritual Suku Tengger mempersembahkan sesajen ke kawah Gunung Bromo.",
    "era": "Tradisional/Kuno",
    "location": "Jawa Timur",
    "val": 20
  },
  {
    "id": "tradisi-pasola",
    "name": "Tradisi Pasola",
    "group": "Budaya",
    "image_url": "https://picsum.photos/seed/tradisi-pasola/400/300",
    "description": "Festival lempar lembing berkuda Suku Sumba.",
    "era": "Tradisional/Kuno",
    "location": "Sumba, NTT",
    "val": 20
  },
  {
    "id": "upacara-tabuik",
    "name": "Upacara Tabuik",
    "group": "Budaya",
    "image_url": "https://picsum.photos/seed/upacara-tabuik/400/300",
    "description": "Perayaan peringatan Asyura di pesisir Pariaman.",
    "era": "Tradisional/Kuno",
    "location": "Sumatera Barat",
    "val": 20
  },
  {
    "id": "subak",
    "name": "Sistem Subak",
    "group": "Budaya",
    "image_url": "https://picsum.photos/seed/subak/400/300",
    "description": "Sistem tata air irigasi komunal untuk sawah di Bali (UNESCO).",
    "era": "Tradisional/Kuno",
    "location": "Bali",
    "val": 20
  },
  {
    "id": "candi-borobudur",
    "name": "Candi Borobudur",
    "group": "Budaya",
    "image_url": "https://picsum.photos/seed/candi-borobudur/400/300",
    "description": "Monumen candi Buddha terbesar di dunia berselimut stupa.",
    "era": "Tradisional/Kuno",
    "location": "Jawa Tengah",
    "val": 20
  },
  {
    "id": "candi-prambanan",
    "name": "Candi Prambanan",
    "group": "Budaya",
    "image_url": "https://picsum.photos/seed/candi-prambanan/400/300",
    "description": "Kompleks candi Hindu terbesar di Indonesia memuja Trimurti.",
    "era": "Tradisional/Kuno",
    "location": "Yogyakarta",
    "val": 20
  },
  {
    "id": "istana-maimun",
    "name": "Istana Maimun",
    "group": "Budaya",
    "image_url": "https://picsum.photos/seed/istana-maimun/400/300",
    "description": "Istana megah Kesultanan Deli berdesain Melayu, Islam, dan Eropa.",
    "era": "Tradisional/Kuno",
    "location": "Sumatera Utara",
    "val": 20
  },
  {
    "id": "masjid-demak",
    "name": "Masjid Agung Demak",
    "group": "Budaya",
    "image_url": "https://picsum.photos/seed/masjid-demak/400/300",
    "description": "Masjid tertua di Pulau Jawa peninggalan Walisongo.",
    "era": "Tradisional/Kuno",
    "location": "Jawa Tengah",
    "val": 20
  },
  {
    "id": "masjid-menara-kudus",
    "name": "Masjid Menara Kudus",
    "group": "Budaya",
    "image_url": "https://picsum.photos/seed/masjid-menara-kudus/400/300",
    "description": "Masjid peninggalan Sunan Kudus dengan menara berbentuk candi Hindu.",
    "era": "Tradisional/Kuno",
    "location": "Jawa Tengah",
    "val": 20
  },
  {
    "id": "masjid-raya-baiturrahman",
    "name": "Masjid Raya Baiturrahman",
    "group": "Budaya",
    "image_url": "https://picsum.photos/seed/masjid-raya-baiturrahman/400/300",
    "description": "Masjid ikonik di Aceh simbol perjuangan dan kebangkitan rakyat.",
    "era": "Tradisional/Kuno",
    "location": "Aceh",
    "val": 20
  },
  {
    "id": "pencak-silat",
    "name": "Pencak Silat",
    "group": "Budaya",
    "image_url": "https://picsum.photos/seed/pencak-silat/400/300",
    "description": "Seni bela diri asli Nusantara yang mengutamakan keindahan gerakan.",
    "era": "Tradisional/Kuno",
    "location": "Nusantara",
    "val": 20
  },
  {
    "id": "karapan-sapi",
    "name": "Karapan Sapi",
    "group": "Budaya",
    "image_url": "https://picsum.photos/seed/karapan-sapi/400/300",
    "description": "Lomba balap sapi berpasangan khas Madura.",
    "era": "Tradisional/Kuno",
    "location": "Madura",
    "val": 20
  },
  {
    "id": "makepung",
    "name": "Makepung",
    "group": "Budaya",
    "image_url": "https://picsum.photos/seed/makepung/400/300",
    "description": "Lomba balap kerbau masyarakat Jembrana.",
    "era": "Tradisional/Kuno",
    "location": "Bali",
    "val": 20
  },
  {
    "id": "sekaten",
    "name": "Perayaan Sekaten",
    "group": "Budaya",
    "image_url": "https://picsum.photos/seed/sekaten/400/300",
    "description": "Peringatan kelahiran Nabi Muhammad dengan pasar malam keraton.",
    "era": "Tradisional/Kuno",
    "location": "Solo & Jogja",
    "val": 20
  },
  {
    "id": "grebek-suro",
    "name": "Grebek Suro",
    "group": "Budaya",
    "image_url": "https://picsum.photos/seed/grebek-suro/400/300",
    "description": "Perayaan Tahun Baru Islam/Jawa di Ponorogo dengan pentas Reog.",
    "era": "Tradisional/Kuno",
    "location": "Ponorogo",
    "val": 20
  },
  {
    "id": "tedak-siten",
    "name": "Tedak Siten",
    "group": "Budaya",
    "image_url": "https://picsum.photos/seed/tedak-siten/400/300",
    "description": "Upacara turun tanah pertama kali bagi bayi Jawa.",
    "era": "Tradisional/Kuno",
    "location": "Jawa",
    "val": 20
  },
  {
    "id": "tradisi-tiwah",
    "name": "Tiwah",
    "group": "Budaya",
    "image_url": "https://picsum.photos/seed/tradisi-tiwah/400/300",
    "description": "Upacara pemindahan tulang leluhur Suku Dayak Ngaju.",
    "era": "Tradisional/Kuno",
    "location": "Kalimantan Tengah",
    "val": 20
  },
  {
    "id": "kapal-pinisi",
    "name": "Kapal Pinisi",
    "group": "Budaya",
    "image_url": "https://picsum.photos/seed/kapal-pinisi/400/300",
    "description": "Kapal layar tradisional legendaris Suku Bugis pembelah samudra.",
    "era": "Tradisional/Kuno",
    "location": "Sulawesi Selatan",
    "val": 20
  },
  {
    "id": "bambu-runcing",
    "name": "Bambu Runcing",
    "group": "Budaya",
    "image_url": "https://picsum.photos/seed/bambu-runcing/400/300",
    "description": "Senjata darurat yang menjadi simbol perlawanan rakyat Indonesia.",
    "era": "Tradisional/Kuno",
    "location": "Indonesia",
    "val": 20
  },
  {
    "id": "kain-sasirangan",
    "name": "Kain Sasirangan",
    "group": "Budaya",
    "image_url": "https://picsum.photos/seed/kain-sasirangan/400/300",
    "description": "Kain jumputan penolak bala khas Kesultanan Banjar.",
    "era": "Tradisional/Kuno",
    "location": "Kalimantan Selatan",
    "val": 20
  },
  {
    "id": "kain-gringsing",
    "name": "Kain Gringsing",
    "group": "Budaya",
    "image_url": "https://picsum.photos/seed/kain-gringsing/400/300",
    "description": "Satu-satunya kain tenun ikat ganda di Indonesia dari Desa Tenganan.",
    "era": "Tradisional/Kuno",
    "location": "Bali",
    "val": 20
  },
  {
    "id": "candi-penataran",
    "name": "Candi Penataran",
    "group": "Budaya",
    "image_url": "https://picsum.photos/seed/candi-penataran/400/300",
    "description": "Candi negara peninggalan Kerajaan Kediri hingga Majapahit.",
    "era": "Tradisional/Kuno",
    "location": "Blitar",
    "val": 20
  },
  {
    "id": "naskah-la-galigo",
    "name": "Naskah La Galigo",
    "group": "Budaya",
    "image_url": "https://picsum.photos/seed/naskah-la-galigo/400/300",
    "description": "Epos penciptaan dunia Bugis yang merupakan salah satu sastra terpanjang di dunia.",
    "era": "Tradisional/Kuno",
    "location": "Sulawesi Selatan",
    "val": 20
  }
];

export const mockLinks: Link[] = [
  {
    "source": "kerajaan-kutai",
    "target": "pulau-kalimantan",
    "label": "BERLOKASI_DI",
    "explanation": "Kerajaan Kutai berpusat di wilayah yang kini merupakan bagian dari Pulau Kalimantan."
  },
  {
    "source": "kerajaan-tarumanegara",
    "target": "pulau-jawa",
    "label": "BERLOKASI_DI",
    "explanation": "Kerajaan Tarumanegara berpusat di wilayah yang kini merupakan bagian dari Pulau Jawa."
  },
  {
    "source": "kerajaan-sriwijaya",
    "target": "pulau-sumatera",
    "label": "BERLOKASI_DI",
    "explanation": "Kerajaan Sriwijaya berpusat di wilayah yang kini merupakan bagian dari Pulau Sumatera."
  },
  {
    "source": "kerajaan-mataram-kuno",
    "target": "pulau-jawa",
    "label": "BERLOKASI_DI",
    "explanation": "Kerajaan Mataram Kuno berpusat di wilayah yang kini merupakan bagian dari Pulau Jawa."
  },
  {
    "source": "kerajaan-kediri",
    "target": "pulau-jawa",
    "label": "BERLOKASI_DI",
    "explanation": "Kerajaan Kediri berpusat di wilayah yang kini merupakan bagian dari Pulau Jawa."
  },
  {
    "source": "kerajaan-singasari",
    "target": "pulau-jawa",
    "label": "BERLOKASI_DI",
    "explanation": "Kerajaan Singasari berpusat di wilayah yang kini merupakan bagian dari Pulau Jawa."
  },
  {
    "source": "kerajaan-majapahit",
    "target": "pulau-jawa",
    "label": "BERLOKASI_DI",
    "explanation": "Kerajaan Majapahit berpusat di wilayah yang kini merupakan bagian dari Pulau Jawa."
  },
  {
    "source": "kesultanan-samudera-pasai",
    "target": "pulau-sumatera",
    "label": "BERLOKASI_DI",
    "explanation": "Kesultanan Samudera Pasai berpusat di wilayah yang kini merupakan bagian dari Pulau Sumatera."
  },
  {
    "source": "kesultanan-demak",
    "target": "pulau-jawa",
    "label": "BERLOKASI_DI",
    "explanation": "Kesultanan Demak berpusat di wilayah yang kini merupakan bagian dari Pulau Jawa."
  },
  {
    "source": "kesultanan-banten",
    "target": "pulau-jawa",
    "label": "BERLOKASI_DI",
    "explanation": "Kesultanan Banten berpusat di wilayah yang kini merupakan bagian dari Pulau Jawa."
  },
  {
    "source": "kesultanan-mataram-islam",
    "target": "pulau-jawa",
    "label": "BERLOKASI_DI",
    "explanation": "Kesultanan Mataram Islam berpusat di wilayah yang kini merupakan bagian dari Pulau Jawa."
  },
  {
    "source": "kesultanan-gowa-tallo",
    "target": "pulau-sulawesi",
    "label": "BERLOKASI_DI",
    "explanation": "Kesultanan Gowa-Tallo berpusat di wilayah yang kini merupakan bagian dari Pulau Sulawesi."
  },
  {
    "source": "kesultanan-ternate",
    "target": "kepulauan-maluku",
    "label": "BERLOKASI_DI",
    "explanation": "Kesultanan Ternate berpusat di wilayah yang kini merupakan bagian dari Kepulauan Maluku."
  },
  {
    "source": "kesultanan-tidore",
    "target": "kepulauan-maluku",
    "label": "BERLOKASI_DI",
    "explanation": "Kesultanan Tidore berpusat di wilayah yang kini merupakan bagian dari Kepulauan Maluku."
  },
  {
    "source": "kerajaan-bali",
    "target": "pulau-bali",
    "label": "BERLOKASI_DI",
    "explanation": "Kerajaan Bali berpusat di wilayah yang kini merupakan bagian dari Pulau Bali."
  },
  {
    "source": "kesultanan-aceh",
    "target": "pulau-sumatera",
    "label": "BERLOKASI_DI",
    "explanation": "Kesultanan Aceh Darussalam berpusat di wilayah yang kini merupakan bagian dari Pulau Sumatera."
  },
  {
    "source": "kesultanan-banjar",
    "target": "pulau-kalimantan",
    "label": "BERLOKASI_DI",
    "explanation": "Kesultanan Banjar berpusat di wilayah yang kini merupakan bagian dari Pulau Kalimantan."
  },
  {
    "source": "kerajaan-pajajaran",
    "target": "pulau-jawa",
    "label": "BERLOKASI_DI",
    "explanation": "Kerajaan Sunda Pajajaran berpusat di wilayah yang kini merupakan bagian dari Pulau Jawa."
  },
  {
    "source": "kesultanan-palembang",
    "target": "pulau-sumatera",
    "label": "BERLOKASI_DI",
    "explanation": "Kesultanan Palembang berpusat di wilayah yang kini merupakan bagian dari Pulau Sumatera."
  },
  {
    "source": "kerajaan-bima",
    "target": "nusa-tenggara-barat",
    "label": "BERLOKASI_DI",
    "explanation": "Kerajaan Bima berpusat di wilayah yang kini merupakan bagian dari Nusa Tenggara Barat."
  },
  {
    "source": "gajah-mada",
    "target": "kerajaan-majapahit",
    "label": "TERKAIT_DENGAN",
    "explanation": "Tokoh Gajah Mada memiliki keterkaitan erat dalam sejarah Kerajaan Majapahit."
  },
  {
    "source": "hayam-wuruk",
    "target": "kerajaan-majapahit",
    "label": "TERKAIT_DENGAN",
    "explanation": "Tokoh Prabu Hayam Wuruk memiliki keterkaitan erat dalam sejarah Kerajaan Majapahit."
  },
  {
    "source": "raden-wijaya",
    "target": "kerajaan-majapahit",
    "label": "TERKAIT_DENGAN",
    "explanation": "Tokoh Raden Wijaya memiliki keterkaitan erat dalam sejarah Kerajaan Majapahit."
  },
  {
    "source": "ken-arok",
    "target": "kerajaan-singasari",
    "label": "TERKAIT_DENGAN",
    "explanation": "Tokoh Ken Arok memiliki keterkaitan erat dalam sejarah Kerajaan Singasari."
  },
  {
    "source": "sultan-agung",
    "target": "kesultanan-mataram-islam",
    "label": "TERKAIT_DENGAN",
    "explanation": "Tokoh Sultan Agung memiliki keterkaitan erat dalam sejarah Kesultanan Mataram Islam."
  },
  {
    "source": "sultan-hasanuddin",
    "target": "kesultanan-gowa-tallo",
    "label": "TERKAIT_DENGAN",
    "explanation": "Tokoh Sultan Hasanuddin memiliki keterkaitan erat dalam sejarah Kesultanan Gowa Tallo."
  },
  {
    "source": "pangeran-diponegoro",
    "target": "kesultanan-mataram-islam",
    "label": "TERKAIT_DENGAN",
    "explanation": "Tokoh Pangeran Diponegoro memiliki keterkaitan erat dalam sejarah Kesultanan Mataram Islam."
  },
  {
    "source": "cut-nyak-dien",
    "target": "kesultanan-aceh",
    "label": "TERKAIT_DENGAN",
    "explanation": "Tokoh Cut Nyak Dien memiliki keterkaitan erat dalam sejarah Kesultanan Aceh."
  },
  {
    "source": "pattimura",
    "target": "kepulauan-maluku",
    "label": "TERKAIT_DENGAN",
    "explanation": "Tokoh Kapitan Pattimura memiliki keterkaitan erat dalam sejarah Kepulauan Maluku."
  },
  {
    "source": "sultan-baabullah",
    "target": "kesultanan-ternate",
    "label": "TERKAIT_DENGAN",
    "explanation": "Tokoh Sultan Baabullah memiliki keterkaitan erat dalam sejarah Kesultanan Ternate."
  },
  {
    "source": "prabu-siliwangi",
    "target": "kerajaan-pajajaran",
    "label": "TERKAIT_DENGAN",
    "explanation": "Tokoh Prabu Siliwangi memiliki keterkaitan erat dalam sejarah Kerajaan Pajajaran."
  },
  {
    "source": "raden-patah",
    "target": "kesultanan-demak",
    "label": "TERKAIT_DENGAN",
    "explanation": "Tokoh Raden Patah memiliki keterkaitan erat dalam sejarah Kesultanan Demak."
  },
  {
    "source": "sunan-kalijaga",
    "target": "kesultanan-demak",
    "label": "TERKAIT_DENGAN",
    "explanation": "Tokoh Sunan Kalijaga memiliki keterkaitan erat dalam sejarah Kesultanan Demak."
  },
  {
    "source": "ki-hajar-dewantara",
    "target": "pulau-jawa",
    "label": "TERKAIT_DENGAN",
    "explanation": "Tokoh Ki Hajar Dewantara memiliki keterkaitan erat dalam sejarah Pulau Jawa."
  },
  {
    "source": "ra-kartini",
    "target": "pulau-jawa",
    "label": "TERKAIT_DENGAN",
    "explanation": "Tokoh R.A. Kartini memiliki keterkaitan erat dalam sejarah Pulau Jawa."
  },
  {
    "source": "sultan-iskandar-muda",
    "target": "kesultanan-aceh",
    "label": "TERKAIT_DENGAN",
    "explanation": "Tokoh Sultan Iskandar Muda memiliki keterkaitan erat dalam sejarah Kesultanan Aceh."
  },
  {
    "source": "tuanku-imambonjol",
    "target": "pulau-sumatera",
    "label": "TERKAIT_DENGAN",
    "explanation": "Tokoh Tuanku Imam Bonjol memiliki keterkaitan erat dalam sejarah Pulau Sumatera."
  },
  {
    "source": "pangeran-antasari",
    "target": "kesultanan-banjar",
    "label": "TERKAIT_DENGAN",
    "explanation": "Tokoh Pangeran Antasari memiliki keterkaitan erat dalam sejarah Kesultanan Banjar."
  },
  {
    "source": "sisingamangaraja-xii",
    "target": "pulau-sumatera",
    "label": "TERKAIT_DENGAN",
    "explanation": "Tokoh Sisingamangaraja XII memiliki keterkaitan erat dalam sejarah Pulau Sumatera."
  },
  {
    "source": "malahayati",
    "target": "kesultanan-aceh",
    "label": "TERKAIT_DENGAN",
    "explanation": "Tokoh Laksamana Malahayati memiliki keterkaitan erat dalam sejarah Kesultanan Aceh."
  },
  {
    "source": "walisongo",
    "target": "pulau-jawa",
    "label": "TERKAIT_DENGAN",
    "explanation": "Tokoh Walisongo memiliki keterkaitan erat dalam sejarah Pulau Jawa."
  },
  {
    "source": "mulawarman",
    "target": "kerajaan-kutai",
    "label": "TERKAIT_DENGAN",
    "explanation": "Tokoh Raja Mulawarman memiliki keterkaitan erat dalam sejarah Kerajaan Kutai."
  },
  {
    "source": "purnawarman",
    "target": "kerajaan-tarumanegara",
    "label": "TERKAIT_DENGAN",
    "explanation": "Tokoh Raja Purnawarman memiliki keterkaitan erat dalam sejarah Kerajaan Tarumanegara."
  },
  {
    "source": "balaputradewa",
    "target": "kerajaan-sriwijaya",
    "label": "TERKAIT_DENGAN",
    "explanation": "Tokoh Raja Balaputradewa memiliki keterkaitan erat dalam sejarah Kerajaan Sriwijaya."
  },
  {
    "source": "tjut-meutia",
    "target": "kesultanan-aceh",
    "label": "TERKAIT_DENGAN",
    "explanation": "Tokoh Tjut Meutia memiliki keterkaitan erat dalam sejarah Kesultanan Aceh."
  },
  {
    "source": "tari-saman",
    "target": "pulau-sumatera",
    "label": "BERASAL_DARI",
    "explanation": "Tari Saman merupakan kesenian yang berasal atau sangat dipengaruhi oleh sejarah dan budaya di Aceh."
  },
  {
    "source": "tari-kecak",
    "target": "pulau-bali",
    "label": "BERASAL_DARI",
    "explanation": "Tari Kecak merupakan kesenian yang berasal atau sangat dipengaruhi oleh sejarah dan budaya di Bali."
  },
  {
    "source": "tari-pendet",
    "target": "pulau-bali",
    "label": "BERASAL_DARI",
    "explanation": "Tari Pendet merupakan kesenian yang berasal atau sangat dipengaruhi oleh sejarah dan budaya di Bali."
  },
  {
    "source": "tari-barong",
    "target": "pulau-bali",
    "label": "BERASAL_DARI",
    "explanation": "Tari Barong merupakan kesenian yang berasal atau sangat dipengaruhi oleh sejarah dan budaya di Bali."
  },
  {
    "source": "tari-jaipong",
    "target": "pulau-jawa",
    "label": "BERASAL_DARI",
    "explanation": "Tari Jaipong merupakan kesenian yang berasal atau sangat dipengaruhi oleh sejarah dan budaya di Jawa Barat."
  },
  {
    "source": "tari-piring",
    "target": "pulau-sumatera",
    "label": "BERASAL_DARI",
    "explanation": "Tari Piring merupakan kesenian yang berasal atau sangat dipengaruhi oleh sejarah dan budaya di Sumatera Barat."
  },
  {
    "source": "tari-payung",
    "target": "pulau-sumatera",
    "label": "BERASAL_DARI",
    "explanation": "Tari Payung merupakan kesenian yang berasal atau sangat dipengaruhi oleh sejarah dan budaya di Sumatera Barat."
  },
  {
    "source": "tari-tor-tor",
    "target": "pulau-sumatera",
    "label": "BERASAL_DARI",
    "explanation": "Tari Tor-Tor merupakan kesenian yang berasal atau sangat dipengaruhi oleh sejarah dan budaya di Sumatera Utara."
  },
  {
    "source": "tari-serampang-dua-belas",
    "target": "pulau-sumatera",
    "label": "BERASAL_DARI",
    "explanation": "Tari Serampang Dua Belas merupakan kesenian yang berasal atau sangat dipengaruhi oleh sejarah dan budaya di Sumatera Utara."
  },
  {
    "source": "tari-gending-sriwijaya",
    "target": "kerajaan-sriwijaya",
    "label": "BERASAL_DARI",
    "explanation": "Tari Gending Sriwijaya merupakan kesenian yang berasal atau sangat dipengaruhi oleh sejarah dan budaya di Sumatera Selatan."
  },
  {
    "source": "tari-tanggai",
    "target": "pulau-sumatera",
    "label": "BERASAL_DARI",
    "explanation": "Tari Tanggai merupakan kesenian yang berasal atau sangat dipengaruhi oleh sejarah dan budaya di Sumatera Selatan."
  },
  {
    "source": "tari-bedhaya-ketawang",
    "target": "kesultanan-mataram-islam",
    "label": "BERASAL_DARI",
    "explanation": "Tari Bedhaya Ketawang merupakan kesenian yang berasal atau sangat dipengaruhi oleh sejarah dan budaya di Jawa Tengah."
  },
  {
    "source": "tari-gambyong",
    "target": "pulau-jawa",
    "label": "BERASAL_DARI",
    "explanation": "Tari Gambyong merupakan kesenian yang berasal atau sangat dipengaruhi oleh sejarah dan budaya di Jawa Tengah."
  },
  {
    "source": "tari-kuda-lumping",
    "target": "pulau-jawa",
    "label": "BERASAL_DARI",
    "explanation": "Tari Kuda Lumping merupakan kesenian yang berasal atau sangat dipengaruhi oleh sejarah dan budaya di Jawa Timur."
  },
  {
    "source": "tari-reog-ponorogo",
    "target": "pulau-jawa",
    "label": "BERASAL_DARI",
    "explanation": "Reog Ponorogo merupakan kesenian yang berasal atau sangat dipengaruhi oleh sejarah dan budaya di Jawa Timur."
  },
  {
    "source": "tari-remo",
    "target": "pulau-jawa",
    "label": "BERASAL_DARI",
    "explanation": "Tari Remo merupakan kesenian yang berasal atau sangat dipengaruhi oleh sejarah dan budaya di Jawa Timur."
  },
  {
    "source": "tari-topeng-cirebon",
    "target": "pulau-jawa",
    "label": "BERASAL_DARI",
    "explanation": "Tari Topeng Cirebon merupakan kesenian yang berasal atau sangat dipengaruhi oleh sejarah dan budaya di Jawa Barat."
  },
  {
    "source": "tari-legong",
    "target": "pulau-bali",
    "label": "BERASAL_DARI",
    "explanation": "Tari Legong merupakan kesenian yang berasal atau sangat dipengaruhi oleh sejarah dan budaya di Bali."
  },
  {
    "source": "tari-gandrung",
    "target": "pulau-jawa",
    "label": "BERASAL_DARI",
    "explanation": "Tari Gandrung merupakan kesenian yang berasal atau sangat dipengaruhi oleh sejarah dan budaya di Jawa Timur."
  },
  {
    "source": "tari-hudog",
    "target": "pulau-kalimantan",
    "label": "BERASAL_DARI",
    "explanation": "Tari Hudoq merupakan kesenian yang berasal atau sangat dipengaruhi oleh sejarah dan budaya di Kalimantan Timur."
  },
  {
    "source": "tari-enggang",
    "target": "pulau-kalimantan",
    "label": "BERASAL_DARI",
    "explanation": "Tari Burung Enggang merupakan kesenian yang berasal atau sangat dipengaruhi oleh sejarah dan budaya di Kalimantan Timur."
  },
  {
    "source": "tari-baksa-kembang",
    "target": "kesultanan-banjar",
    "label": "BERASAL_DARI",
    "explanation": "Tari Baksa Kembang merupakan kesenian yang berasal atau sangat dipengaruhi oleh sejarah dan budaya di Kalimantan Selatan."
  },
  {
    "source": "tari-pakarena",
    "target": "kesultanan-gowa-tallo",
    "label": "BERASAL_DARI",
    "explanation": "Tari Pakarena merupakan kesenian yang berasal atau sangat dipengaruhi oleh sejarah dan budaya di Sulawesi Selatan."
  },
  {
    "source": "tari-maengket",
    "target": "pulau-sulawesi",
    "label": "BERASAL_DARI",
    "explanation": "Tari Maengket merupakan kesenian yang berasal atau sangat dipengaruhi oleh sejarah dan budaya di Sulawesi Utara."
  },
  {
    "source": "tari-kabosaran",
    "target": "pulau-sulawesi",
    "label": "BERASAL_DARI",
    "explanation": "Tari Kabasaran merupakan kesenian yang berasal atau sangat dipengaruhi oleh sejarah dan budaya di Sulawesi Utara."
  },
  {
    "source": "tari-cakalele",
    "target": "kepulauan-maluku",
    "label": "BERASAL_DARI",
    "explanation": "Tari Cakalele merupakan kesenian yang berasal atau sangat dipengaruhi oleh sejarah dan budaya di Maluku."
  },
  {
    "source": "tari-sajojo",
    "target": "pulau-papua",
    "label": "BERASAL_DARI",
    "explanation": "Tari Sajojo merupakan kesenian yang berasal atau sangat dipengaruhi oleh sejarah dan budaya di Papua."
  },
  {
    "source": "tari-yospan",
    "target": "pulau-papua",
    "label": "BERASAL_DARI",
    "explanation": "Tari Yospan merupakan kesenian yang berasal atau sangat dipengaruhi oleh sejarah dan budaya di Papua."
  },
  {
    "source": "tari-suanggi",
    "target": "pulau-papua",
    "label": "BERASAL_DARI",
    "explanation": "Tari Suanggi merupakan kesenian yang berasal atau sangat dipengaruhi oleh sejarah dan budaya di Papua."
  },
  {
    "source": "tari-caci",
    "target": "nusa-tenggara-timur",
    "label": "BERASAL_DARI",
    "explanation": "Tari Caci merupakan kesenian yang berasal atau sangat dipengaruhi oleh sejarah dan budaya di NTT."
  },
  {
    "source": "tari-gawi",
    "target": "nusa-tenggara-timur",
    "label": "BERASAL_DARI",
    "explanation": "Tari Gawi merupakan kesenian yang berasal atau sangat dipengaruhi oleh sejarah dan budaya di NTT."
  },
  {
    "source": "tari-wura-bongi-monca",
    "target": "kerajaan-bima",
    "label": "BERASAL_DARI",
    "explanation": "Tari Wura Bongi Monca merupakan kesenian yang berasal atau sangat dipengaruhi oleh sejarah dan budaya di NTB."
  },
  {
    "source": "tari-lengger",
    "target": "pulau-jawa",
    "label": "BERASAL_DARI",
    "explanation": "Tari Lengger merupakan kesenian yang berasal atau sangat dipengaruhi oleh sejarah dan budaya di Jawa Tengah."
  },
  {
    "source": "tari-sekapur-sirih",
    "target": "pulau-sumatera",
    "label": "BERASAL_DARI",
    "explanation": "Tari Sekapur Sirih merupakan kesenian yang berasal atau sangat dipengaruhi oleh sejarah dan budaya di Jambi."
  },
  {
    "source": "tari-campak",
    "target": "pulau-sumatera",
    "label": "BERASAL_DARI",
    "explanation": "Tari Campak merupakan kesenian yang berasal atau sangat dipengaruhi oleh sejarah dan budaya di Bangka Belitung."
  },
  {
    "source": "tari-melinting",
    "target": "pulau-sumatera",
    "label": "BERASAL_DARI",
    "explanation": "Tari Melinting merupakan kesenian yang berasal atau sangat dipengaruhi oleh sejarah dan budaya di Lampung."
  },
  {
    "source": "tari-radap-rahayu",
    "target": "kesultanan-banjar",
    "label": "BERASAL_DARI",
    "explanation": "Tari Radap Rahayu merupakan kesenian yang berasal atau sangat dipengaruhi oleh sejarah dan budaya di Kalimantan Selatan."
  },
  {
    "source": "tari-pepujan",
    "target": "pulau-jawa",
    "label": "BERASAL_DARI",
    "explanation": "Tari Pepujan merupakan kesenian yang berasal atau sangat dipengaruhi oleh sejarah dan budaya di Cirebon."
  },
  {
    "source": "tari-bines",
    "target": "pulau-sumatera",
    "label": "BERASAL_DARI",
    "explanation": "Tari Bines merupakan kesenian yang berasal atau sangat dipengaruhi oleh sejarah dan budaya di Aceh."
  },
  {
    "source": "tari-dinding-badinding",
    "target": "pulau-sumatera",
    "label": "BERASAL_DARI",
    "explanation": "Tari Indang merupakan kesenian yang berasal atau sangat dipengaruhi oleh sejarah dan budaya di Sumatera Barat."
  },
  {
    "source": "wayang-kulit",
    "target": "pulau-jawa",
    "label": "KESENIAN_DARI",
    "explanation": "Seni Wayang Kulit adalah bagian tak terpisahkan dari identitas budaya di Jawa & Bali."
  },
  {
    "source": "wayang-golek",
    "target": "pulau-jawa",
    "label": "KESENIAN_DARI",
    "explanation": "Seni Wayang Golek adalah bagian tak terpisahkan dari identitas budaya di Jawa Barat."
  },
  {
    "source": "wayang-wong",
    "target": "pulau-jawa",
    "label": "KESENIAN_DARI",
    "explanation": "Seni Wayang Wong adalah bagian tak terpisahkan dari identitas budaya di Jawa."
  },
  {
    "source": "ludruk",
    "target": "pulau-jawa",
    "label": "KESENIAN_DARI",
    "explanation": "Seni Ludruk adalah bagian tak terpisahkan dari identitas budaya di Jawa Timur."
  },
  {
    "source": "ketoprak",
    "target": "pulau-jawa",
    "label": "KESENIAN_DARI",
    "explanation": "Seni Ketoprak adalah bagian tak terpisahkan dari identitas budaya di Jawa Tengah."
  },
  {
    "source": "makyong",
    "target": "kepulauan-riau",
    "label": "KESENIAN_DARI",
    "explanation": "Seni Makyong adalah bagian tak terpisahkan dari identitas budaya di Kepulauan Riau."
  },
  {
    "source": "randai",
    "target": "pulau-sumatera",
    "label": "KESENIAN_DARI",
    "explanation": "Seni Randai adalah bagian tak terpisahkan dari identitas budaya di Sumatera Barat."
  },
  {
    "source": "gamelan",
    "target": "pulau-jawa",
    "label": "KESENIAN_DARI",
    "explanation": "Seni Gamelan adalah bagian tak terpisahkan dari identitas budaya di Jawa & Bali."
  },
  {
    "source": "angklung",
    "target": "pulau-jawa",
    "label": "KESENIAN_DARI",
    "explanation": "Seni Angklung adalah bagian tak terpisahkan dari identitas budaya di Jawa Barat."
  },
  {
    "source": "sasando",
    "target": "nusa-tenggara-timur",
    "label": "KESENIAN_DARI",
    "explanation": "Seni Sasando adalah bagian tak terpisahkan dari identitas budaya di NTT."
  },
  {
    "source": "kolintang",
    "target": "pulau-sulawesi",
    "label": "KESENIAN_DARI",
    "explanation": "Seni Kolintang adalah bagian tak terpisahkan dari identitas budaya di Sulawesi Utara."
  },
  {
    "source": "tifa",
    "target": "pulau-papua",
    "label": "KESENIAN_DARI",
    "explanation": "Seni Tifa adalah bagian tak terpisahkan dari identitas budaya di Papua & Maluku."
  },
  {
    "source": "talempong",
    "target": "pulau-sumatera",
    "label": "KESENIAN_DARI",
    "explanation": "Seni Talempong adalah bagian tak terpisahkan dari identitas budaya di Sumatera Barat."
  },
  {
    "source": "saluang",
    "target": "pulau-sumatera",
    "label": "KESENIAN_DARI",
    "explanation": "Seni Saluang adalah bagian tak terpisahkan dari identitas budaya di Sumatera Barat."
  },
  {
    "source": "kendang",
    "target": "pulau-jawa",
    "label": "KESENIAN_DARI",
    "explanation": "Seni Kendang adalah bagian tak terpisahkan dari identitas budaya di Jawa."
  },
  {
    "source": "sape",
    "target": "pulau-kalimantan",
    "label": "KESENIAN_DARI",
    "explanation": "Seni Sape adalah bagian tak terpisahkan dari identitas budaya di Kalimantan."
  },
  {
    "source": "kecapi",
    "target": "pulau-jawa",
    "label": "KESENIAN_DARI",
    "explanation": "Seni Kecapi adalah bagian tak terpisahkan dari identitas budaya di Jawa Barat."
  },
  {
    "source": "rebab",
    "target": "pulau-sumatera",
    "label": "KESENIAN_DARI",
    "explanation": "Seni Rebab adalah bagian tak terpisahkan dari identitas budaya di Nusantara."
  },
  {
    "source": "gondang-sabangunan",
    "target": "pulau-sumatera",
    "label": "KESENIAN_DARI",
    "explanation": "Seni Gondang Sabangunan adalah bagian tak terpisahkan dari identitas budaya di Sumatera Utara."
  },
  {
    "source": "calung",
    "target": "pulau-jawa",
    "label": "KESENIAN_DARI",
    "explanation": "Seni Calung adalah bagian tak terpisahkan dari identitas budaya di Jawa Barat."
  },
  {
    "source": "genggong",
    "target": "pulau-bali",
    "label": "KESENIAN_DARI",
    "explanation": "Seni Genggong adalah bagian tak terpisahkan dari identitas budaya di Bali."
  },
  {
    "source": "slenthem",
    "target": "pulau-jawa",
    "label": "KESENIAN_DARI",
    "explanation": "Seni Slenthem adalah bagian tak terpisahkan dari identitas budaya di Jawa."
  },
  {
    "source": "bonang",
    "target": "pulau-jawa",
    "label": "KESENIAN_DARI",
    "explanation": "Seni Bonang adalah bagian tak terpisahkan dari identitas budaya di Jawa."
  },
  {
    "source": "rindik",
    "target": "pulau-bali",
    "label": "KESENIAN_DARI",
    "explanation": "Seni Rindik adalah bagian tak terpisahkan dari identitas budaya di Bali."
  },
  {
    "source": "gordang-sambilan",
    "target": "pulau-sumatera",
    "label": "KESENIAN_DARI",
    "explanation": "Seni Gordang Sambilan adalah bagian tak terpisahkan dari identitas budaya di Sumatera Utara."
  },
  {
    "source": "keris",
    "target": "kerajaan-majapahit",
    "label": "ATRIBUT_BUDAYA",
    "explanation": "Keris merupakan atribut atau hasil karya peradaban yang berasosiasi kuat dengan Kerajaan Majapahit."
  },
  {
    "source": "batik",
    "target": "pulau-jawa",
    "label": "ATRIBUT_BUDAYA",
    "explanation": "Batik merupakan atribut atau hasil karya peradaban yang berasosiasi kuat dengan Pulau Jawa."
  },
  {
    "source": "kain-tenun-ikat",
    "target": "nusa-tenggara-timur",
    "label": "ATRIBUT_BUDAYA",
    "explanation": "Kain Tenun Ikat merupakan atribut atau hasil karya peradaban yang berasosiasi kuat dengan Nusa Tenggara Timur."
  },
  {
    "source": "kain-songket",
    "target": "kerajaan-sriwijaya",
    "label": "ATRIBUT_BUDAYA",
    "explanation": "Kain Songket merupakan atribut atau hasil karya peradaban yang berasosiasi kuat dengan Kerajaan Sriwijaya."
  },
  {
    "source": "kain-ulos",
    "target": "pulau-sumatera",
    "label": "ATRIBUT_BUDAYA",
    "explanation": "Kain Ulos merupakan atribut atau hasil karya peradaban yang berasosiasi kuat dengan Pulau Sumatera."
  },
  {
    "source": "rencong",
    "target": "kesultanan-aceh",
    "label": "ATRIBUT_BUDAYA",
    "explanation": "Rencong merupakan atribut atau hasil karya peradaban yang berasosiasi kuat dengan Kesultanan Aceh."
  },
  {
    "source": "mandau",
    "target": "pulau-kalimantan",
    "label": "ATRIBUT_BUDAYA",
    "explanation": "Mandau merupakan atribut atau hasil karya peradaban yang berasosiasi kuat dengan Pulau Kalimantan."
  },
  {
    "source": "celurit",
    "target": "pulau-madura",
    "label": "ATRIBUT_BUDAYA",
    "explanation": "Celurit merupakan atribut atau hasil karya peradaban yang berasosiasi kuat dengan Pulau Madura."
  },
  {
    "source": "badik",
    "target": "kesultanan-gowa-tallo",
    "label": "ATRIBUT_BUDAYA",
    "explanation": "Badik merupakan atribut atau hasil karya peradaban yang berasosiasi kuat dengan Kesultanan Gowa Tallo."
  },
  {
    "source": "kujang",
    "target": "kerajaan-pajajaran",
    "label": "ATRIBUT_BUDAYA",
    "explanation": "Kujang merupakan atribut atau hasil karya peradaban yang berasosiasi kuat dengan Kerajaan Pajajaran."
  },
  {
    "source": "rumah-gadang",
    "target": "pulau-sumatera",
    "label": "ATRIBUT_BUDAYA",
    "explanation": "Rumah Gadang merupakan atribut atau hasil karya peradaban yang berasosiasi kuat dengan Pulau Sumatera."
  },
  {
    "source": "rumah-joglo",
    "target": "pulau-jawa",
    "label": "ATRIBUT_BUDAYA",
    "explanation": "Rumah Joglo merupakan atribut atau hasil karya peradaban yang berasosiasi kuat dengan Pulau Jawa."
  },
  {
    "source": "rumah-tongkonan",
    "target": "pulau-sulawesi",
    "label": "ATRIBUT_BUDAYA",
    "explanation": "Rumah Tongkonan merupakan atribut atau hasil karya peradaban yang berasosiasi kuat dengan Pulau Sulawesi."
  },
  {
    "source": "rumah-honai",
    "target": "pulau-papua",
    "label": "ATRIBUT_BUDAYA",
    "explanation": "Rumah Honai merupakan atribut atau hasil karya peradaban yang berasosiasi kuat dengan Pulau Papua."
  },
  {
    "source": "rumah-betang",
    "target": "pulau-kalimantan",
    "label": "ATRIBUT_BUDAYA",
    "explanation": "Rumah Betang merupakan atribut atau hasil karya peradaban yang berasosiasi kuat dengan Pulau Kalimantan."
  },
  {
    "source": "upacara-ngaben",
    "target": "pulau-bali",
    "label": "ATRIBUT_BUDAYA",
    "explanation": "Upacara Ngaben merupakan atribut atau hasil karya peradaban yang berasosiasi kuat dengan Pulau Bali."
  },
  {
    "source": "tradisi-lompat-batu",
    "target": "pulau-nias",
    "label": "ATRIBUT_BUDAYA",
    "explanation": "Fahombo (Lompat Batu) merupakan atribut atau hasil karya peradaban yang berasosiasi kuat dengan Pulau Nias."
  },
  {
    "source": "upacara-kasada",
    "target": "pulau-jawa",
    "label": "ATRIBUT_BUDAYA",
    "explanation": "Yadnya Kasada merupakan atribut atau hasil karya peradaban yang berasosiasi kuat dengan Pulau Jawa."
  },
  {
    "source": "tradisi-pasola",
    "target": "nusa-tenggara-timur",
    "label": "ATRIBUT_BUDAYA",
    "explanation": "Tradisi Pasola merupakan atribut atau hasil karya peradaban yang berasosiasi kuat dengan Nusa Tenggara Timur."
  },
  {
    "source": "upacara-tabuik",
    "target": "pulau-sumatera",
    "label": "ATRIBUT_BUDAYA",
    "explanation": "Upacara Tabuik merupakan atribut atau hasil karya peradaban yang berasosiasi kuat dengan Pulau Sumatera."
  },
  {
    "source": "subak",
    "target": "pulau-bali",
    "label": "ATRIBUT_BUDAYA",
    "explanation": "Sistem Subak merupakan atribut atau hasil karya peradaban yang berasosiasi kuat dengan Pulau Bali."
  },
  {
    "source": "candi-borobudur",
    "target": "kerajaan-mataram-kuno",
    "label": "ATRIBUT_BUDAYA",
    "explanation": "Candi Borobudur merupakan atribut atau hasil karya peradaban yang berasosiasi kuat dengan Kerajaan Mataram Kuno."
  },
  {
    "source": "candi-prambanan",
    "target": "kerajaan-mataram-kuno",
    "label": "ATRIBUT_BUDAYA",
    "explanation": "Candi Prambanan merupakan atribut atau hasil karya peradaban yang berasosiasi kuat dengan Kerajaan Mataram Kuno."
  },
  {
    "source": "istana-maimun",
    "target": "pulau-sumatera",
    "label": "ATRIBUT_BUDAYA",
    "explanation": "Istana Maimun merupakan atribut atau hasil karya peradaban yang berasosiasi kuat dengan Pulau Sumatera."
  },
  {
    "source": "masjid-demak",
    "target": "kesultanan-demak",
    "label": "ATRIBUT_BUDAYA",
    "explanation": "Masjid Agung Demak merupakan atribut atau hasil karya peradaban yang berasosiasi kuat dengan Kesultanan Demak."
  },
  {
    "source": "masjid-menara-kudus",
    "target": "walisongo",
    "label": "ATRIBUT_BUDAYA",
    "explanation": "Masjid Menara Kudus merupakan atribut atau hasil karya peradaban yang berasosiasi kuat dengan Walisongo."
  },
  {
    "source": "masjid-raya-baiturrahman",
    "target": "kesultanan-aceh",
    "label": "ATRIBUT_BUDAYA",
    "explanation": "Masjid Raya Baiturrahman merupakan atribut atau hasil karya peradaban yang berasosiasi kuat dengan Kesultanan Aceh."
  },
  {
    "source": "pencak-silat",
    "target": "pulau-sumatera",
    "label": "ATRIBUT_BUDAYA",
    "explanation": "Pencak Silat merupakan atribut atau hasil karya peradaban yang berasosiasi kuat dengan Pulau Sumatera."
  },
  {
    "source": "karapan-sapi",
    "target": "pulau-madura",
    "label": "ATRIBUT_BUDAYA",
    "explanation": "Karapan Sapi merupakan atribut atau hasil karya peradaban yang berasosiasi kuat dengan Pulau Madura."
  },
  {
    "source": "makepung",
    "target": "pulau-bali",
    "label": "ATRIBUT_BUDAYA",
    "explanation": "Makepung merupakan atribut atau hasil karya peradaban yang berasosiasi kuat dengan Pulau Bali."
  },
  {
    "source": "sekaten",
    "target": "kesultanan-mataram-islam",
    "label": "ATRIBUT_BUDAYA",
    "explanation": "Perayaan Sekaten merupakan atribut atau hasil karya peradaban yang berasosiasi kuat dengan Kesultanan Mataram Islam."
  },
  {
    "source": "grebek-suro",
    "target": "tari-reog-ponorogo",
    "label": "ATRIBUT_BUDAYA",
    "explanation": "Grebek Suro merupakan atribut atau hasil karya peradaban yang berasosiasi kuat dengan Tari Reog Ponorogo."
  },
  {
    "source": "tedak-siten",
    "target": "pulau-jawa",
    "label": "ATRIBUT_BUDAYA",
    "explanation": "Tedak Siten merupakan atribut atau hasil karya peradaban yang berasosiasi kuat dengan Pulau Jawa."
  },
  {
    "source": "tradisi-tiwah",
    "target": "pulau-kalimantan",
    "label": "ATRIBUT_BUDAYA",
    "explanation": "Tiwah merupakan atribut atau hasil karya peradaban yang berasosiasi kuat dengan Pulau Kalimantan."
  },
  {
    "source": "kapal-pinisi",
    "target": "kesultanan-gowa-tallo",
    "label": "ATRIBUT_BUDAYA",
    "explanation": "Kapal Pinisi merupakan atribut atau hasil karya peradaban yang berasosiasi kuat dengan Kesultanan Gowa Tallo."
  },
  {
    "source": "bambu-runcing",
    "target": "pulau-jawa",
    "label": "ATRIBUT_BUDAYA",
    "explanation": "Bambu Runcing merupakan atribut atau hasil karya peradaban yang berasosiasi kuat dengan Pulau Jawa."
  },
  {
    "source": "kain-sasirangan",
    "target": "kesultanan-banjar",
    "label": "ATRIBUT_BUDAYA",
    "explanation": "Kain Sasirangan merupakan atribut atau hasil karya peradaban yang berasosiasi kuat dengan Kesultanan Banjar."
  },
  {
    "source": "kain-gringsing",
    "target": "pulau-bali",
    "label": "ATRIBUT_BUDAYA",
    "explanation": "Kain Gringsing merupakan atribut atau hasil karya peradaban yang berasosiasi kuat dengan Pulau Bali."
  },
  {
    "source": "candi-penataran",
    "target": "kerajaan-majapahit",
    "label": "ATRIBUT_BUDAYA",
    "explanation": "Candi Penataran merupakan atribut atau hasil karya peradaban yang berasosiasi kuat dengan Kerajaan Majapahit."
  },
  {
    "source": "naskah-la-galigo",
    "target": "pulau-sulawesi",
    "label": "ATRIBUT_BUDAYA",
    "explanation": "Naskah La Galigo merupakan atribut atau hasil karya peradaban yang berasosiasi kuat dengan Pulau Sulawesi."
  },
  {
    "source": "gamelan",
    "target": "tari-bedhaya-ketawang",
    "label": "MENGIRINGI",
    "explanation": "Gamelan digunakan secara khusus untuk mengiringi ritme sakral Tari Bedhaya."
  },
  {
    "source": "gamelan",
    "target": "tari-jaipong",
    "label": "MENGIRINGI",
    "explanation": "Gamelan Sunda memberikan dentuman tempo cepat dalam Tari Jaipong."
  },
  {
    "source": "gamelan",
    "target": "wayang-wong",
    "label": "MENGIRINGI",
    "explanation": "Wayang Wong sangat bergantung pada Gamelan sebagai ruh pementasannya."
  },
  {
    "source": "wayang-kulit",
    "target": "walisongo",
    "label": "MEDIA_DAKWAH",
    "explanation": "Sunan Kalijaga mengubah bentuk Wayang Kulit agar sesuai syariat Islam dan menggunakannya untuk berdakwah."
  },
  {
    "source": "sunan-kalijaga",
    "target": "masjid-demak",
    "label": "ARSITEK",
    "explanation": "Sunan Kalijaga adalah salah satu perancang tiang (Soko Tatal) Masjid Agung Demak."
  },
  {
    "source": "raden-patah",
    "target": "kerajaan-majapahit",
    "label": "KETURUNAN",
    "explanation": "Raden Patah, pendiri Demak, adalah putra dari Raja Brawijaya V Majapahit."
  },
  {
    "source": "candi-prambanan",
    "target": "candi-borobudur",
    "label": "SEZAMAN",
    "explanation": "Candi Hindu Prambanan dibangun tak lama setelah Candi Buddha Borobudur sebagai penyeimbang kekuatan Wangsa Sanjaya dan Syailendra."
  },
  {
    "source": "gajah-mada",
    "target": "kerajaan-bali",
    "label": "MENAKLUKKAN",
    "explanation": "Gajah Mada memimpin invasi Majapahit ke Bali pada tahun 1343 untuk menyatukan Nusantara."
  },
  {
    "source": "batik",
    "target": "kerajaan-mataram-islam",
    "label": "DIKEMBANGKAN_OLEH",
    "explanation": "Batik corak keraton mengalami perkembangan luar biasa di bawah pembinaan Kesultanan Mataram Islam."
  },
  {
    "source": "kapal-pinisi",
    "target": "pulau-papua",
    "label": "JALUR_PERDAGANGAN",
    "explanation": "Kapal Pinisi Bugis berlayar hingga ke Papua untuk mencari burung Cenderawasih dan hasil laut."
  },
  {
    "source": "kerajaan-sriwijaya",
    "target": "candi-borobudur",
    "label": "PENGARUH_DINASTI",
    "explanation": "Dinasti Syailendra yang membangun Borobudur memiliki kekerabatan erat dengan penguasa Sriwijaya."
  },
  {
    "source": "cut-nyak-dien",
    "target": "rencong",
    "label": "MENGGUNAKAN",
    "explanation": "Cut Nyak Dien dan pasukan Acehnya menggunakan senjata Rencong dalam perang gerilya melawan Belanda."
  },
  {
    "source": "pattimura",
    "target": "tari-cakalele",
    "label": "SEMANGAT_PERANG",
    "explanation": "Semangat perlawanan Pattimura terefleksi dalam heroisme Tari Cakalele."
  },
  {
    "source": "tari-tor-tor",
    "target": "kain-ulos",
    "label": "MEMAKAI",
    "explanation": "Dalam setiap pementasan Tari Tor-Tor, penari diwajibkan menyampirkan Kain Ulos di bahunya."
  },
  {
    "source": "randai",
    "target": "pencak-silat",
    "label": "BERAKAR_DARI",
    "explanation": "Gerakan teater Randai sangat kental dengan jurus-jurus Pencak Silat Minangkabau."
  },
  {
    "source": "tari-piring",
    "target": "pencak-silat",
    "label": "BERAKAR_DARI",
    "explanation": "Langkah kuda-kuda Tari Piring diadaptasi dari gerakan Pencak Silat."
  },
  {
    "source": "keris",
    "target": "gajah-mada",
    "label": "SENJATA_ANDALAN",
    "explanation": "Gajah Mada digambarkan memiliki keris sakti dalam usahanya menyatukan Nusantara."
  },
  {
    "source": "kerajaan-singasari",
    "target": "keris",
    "label": "LEGENDA",
    "explanation": "Keris Mpu Gandring adalah legenda kelam yang membunuh Ken Arok, sang pendiri Singasari."
  },
  {
    "source": "candi-penataran",
    "target": "hayam-wuruk",
    "label": "DIPUGAR_OLEH",
    "explanation": "Candi Penataran sering dikunjungi dan diperluas pada masa pemerintahan Prabu Hayam Wuruk."
  },
  {
    "source": "masjid-menara-kudus",
    "target": "kerajaan-majapahit",
    "label": "AKULTURASI",
    "explanation": "Bentuk Menara Masjid Kudus sangat menyerupai gaya arsitektur candi belah peninggalan Majapahit."
  }
];
