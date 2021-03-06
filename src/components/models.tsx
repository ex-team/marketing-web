// Footer
import appStore from '../assets/images/AppStoreBadge.svg';
import playStore from '../assets/images/GooglePlayBadge.svg';
import BLOGPAGE from '../assets/images/blog.jpg';
// import SERVICE1 from './../assets/images/box1.png';
// import SERVICE2 from './../assets/images/box2.png';
import IMG_1 from '../assets/images/img-1.jpg';
import IMG_2 from '../assets/images/img-2.jpg';
import IMG_3 from '../assets/images/img-3.jpg';
import IMG_4 from '../assets/images/img-4.jpg';
import IMG_5 from '../assets/images/img-5.jpg';
import IMG_6 from '../assets/images/img-6.jpg';
import IMG_7 from '../assets/images/img-7.jpg';
import IMG_8 from '../assets/images/img-8.jpg';
import IMG_9 from '../assets/images/img-9.jpg';
import BANNER_BG from '../assets/images/img-home.jpg';
import IMGPARTNER_1 from '../assets/images/klien/1.png';
import IMGPARTNER_2 from '../assets/images/klien/2.png';
import IMGPARTNER_3 from '../assets/images/klien/3.png';
import IMGPARTNER_4 from '../assets/images/klien/4.png';
import IMGPARTNER_5 from '../assets/images/klien/5.png';
import IMGPARTNER_6 from '../assets/images/klien/6.png';
import IMGPARTNER_7 from '../assets/images/klien/7.png';
import IMGPARTNER_8 from '../assets/images/klien/8.png';
import IMGPARTNER_9 from '../assets/images/klien/9.png';
import IMGPARTNER_10 from '../assets/images/klien/10.png';
import IMGPARTNER_11 from '../assets/images/klien/11.png';
import IMGPARTNER_12 from '../assets/images/klien/12.png';
import IMGPARTNER_13 from '../assets/images/klien/13.png';
import LANDINGPAGE_1 from '../assets/images/landingpage_1.jpg';
import logoLight2 from '../assets/images/logo-light.png';
import logoLight from '../assets/images/logo_light_digipeta.svg';
import SAMPLE_1 from '../assets/images/sample1.png';
import SAMPLE_2 from '../assets/images/sample2.png';
import SAMPLE_3 from '../assets/images/sample3.png';
import SAMPLE_4 from '../assets/images/sample4.png';
import SAMPLE_5 from '../assets/images/sample5.png';
import SAMPLE_6 from '../assets/images/sample6.png';
import SAMPLE_7 from '../assets/images/sample7.png';
import SAMPLE_8 from '../assets/images/sample8.png';
import SERVICEPAGE from '../assets/images/service.jpg';
import ICONSERVICE_4 from '../assets/images/services/custom.svg';
import ICONSERVICE_3 from '../assets/images/services/integrasi.svg';
import ICONSERVICE_2 from '../assets/images/services/mobilegis.svg';
import ICONSERVICE_1 from '../assets/images/services/webgis.svg';
import THEMA_BG from '../assets/images/tema.jpg';


const VIDEO_1 = '/videos/video-1.mp4';
// const VIDEO_2 = '/videos/video-2.mp4';

// Home Setting
export const dataHomes = {
  id: 1,
  header_type: 0, // 0: Static Banner, 1: Slider Banner, 2: Video Banner
  header_title: 'GIS ON DEMAND',
  header_description: 'Jasa Pengembangan Sistem & Aplikasi Berbasis GIS ',
  header_button: 'Service',
  header_url: 'services',
  header_button_wa: 'Konsultasi',
  header_url_wa: 'https://wa.me/6289623498800/',
  header_image: LANDINGPAGE_1,
  header_video: VIDEO_1,
  abouts: true, // true for show, false to hidden
  features: true, // true for show, false to hidden
  features_heading: 'Features Products',
  features_subheading:
    'Location intelligence saves time and money for the company. Analytics departments and stakeholders are able to watch traction and save up to 37% of the managers time monthly',
  industries: true, // true for show, false to hidden
  industries_heading: 'Industri',
  industries_subheading:
    'Infrastruktur, Utilitas, Lingkungan, Kehutanan, Perkebunan, Pertambangan, Perminyakan, Transportasi, Bisnis, Smart City',
  services: true, // true for show, false to hidden
  services_heading: 'Service',
  services_subheading:
    'Gis On Demand. Konsultasikan dan diskusikan konsep sistem yang anda butuhkan bersama kami, Gratis melalui WA, Email maupun telepon langsung.',
  thematics: true, // true for show, false to hidden
  thematics_heading: 'Tema',
  thematics_subheading: 'Beberapa tema yang sudah kami kerjakan :',
  thematics_banner: THEMA_BG,
  thematics_slider: false, // true for show, false to hidden
  samples: true, // true for show, false to hidden
  samples_heading: 'Sampel dan Demo',
  samples_subheading: '',
  blogs: false, // true for show, false to hidden
  blogs_heading: 'News and Product Updates',
  blogs_subheading: 'Dapatkan berbagi informasi dan berita terbaru terkait produk dan layanan kami.',
  partners: true, // true for show, false to hidden
};

export interface Slider {
  id: number;
  title: string;
  description: string;
  btn_name: string;
  url: string;
  images: string;
}

export const dataSliders: Slider[] = [
  {
    id: 1,
    title: 'A Company Lorem Ipsum Dummy',
    description: 'Explore the hidden waterfall deep inside the Amazon Jungle What are you waiting for?',
    btn_name: 'Show more',
    url: 'company.com',
    images: IMG_1,
  },
  {
    id: 2,
    title: 'What are you waiting for?',
    description: 'Explore the hidden waterfall deep inside the Amazon Jungle What are you waiting for?',
    btn_name: 'Show more',
    url: 'company.com',
    images: IMG_2,
  },
  {
    id: 3,
    title: 'What are you waiting for?',
    description: 'What are you waiting for?',
    btn_name: 'Show more',
    url: '',
    images: IMG_3,
  },
  {
    id: 4,
    title: 'What are you waiting for?',
    description: 'Explore the hidden waterfall deep inside the Amazon Jungle What are you waiting for?',
    btn_name: 'Show more',
    url: 'company.com',
    images: IMG_4,
  },
  {
    id: 5,
    title: 'What are you waiting for?',
    description: 'What are you waiting for?',
    btn_name: 'Show more',
    url: 'company.com',
    images: IMG_5,
  },
  {
    id: 6,
    title: 'What are you waiting for?',
    description: 'Explore the hidden waterfall deep inside the Amazon Jungle What are you waiting for?',
    btn_name: 'Show more',
    url: 'company.com',
    images: IMG_6,
  },
  {
    id: 7,
    title: 'What are you waiting for?',
    description: 'Explore the hidden waterfall deep inside the Amazon Jungle What are you waiting for?',
    btn_name: 'Show more',
    url: 'company.com',
    images: IMG_7,
  },
];

export const dataFeatures = [
  {
    title: 'Webgis',
    description: 'Explore the hidden waterfall deep inside the Amazon Jungle',
    images: IMG_1,
  },
  {
    title: 'Mobile GIS',
    description: 'Explore the hidden waterfall deep inside the Amazon Jungle',
    images: IMG_2,
  },
  {
    title: 'Integrasi',
    description: 'Explore the hidden waterfall deep inside the Amazon Jungle',
    images: IMG_3,
  },
  {
    title: 'Custom',
    description: 'Explore the hidden waterfall deep inside the Amazon Jungle',
    images: IMG_4,
  },
];

export const dataAbouts = {
  abouts:
    'Infrastruktur, Utilitas, Lingkungan, Kehutanan, Perkebunan, Pertambangan, Perminyakan, Transportasi, Bisnis, Smart City',
};

export const dataThematics = [
  {
    id: 1,
    title: 'Jalan & Jembatan',
  },
  {
    id: 2,
    title: 'Irigasi',
  },
  {
    id: 3,
    title: 'Jaringan Pipa',
  },
  {
    id: 4,
    title: 'IMB',
  },
  {
    id: 5,
    title: 'Inspeksi Aset Tambang',
  },
  {
    id: 6,
    title: 'Dermaga',
  },
  {
    id: 7,
    title: 'Kehutanan',
  },
  {
    id: 8,
    title: 'Kawasan Pemukiman',
  },
  {
    id: 9,
    title: 'Keanekaragaman Hayati',
  },
  {
    id: 10,
    title: 'Patroli Satwa Taman Nasional',
  },
  {
    id: 11,
    title: 'Aset KAI',
  },
  {
    id: 12,
    title: 'Dan Lainnya',
  },
];

export const dataThematicSliders = [
  {
    id: 1,
    title: '',
    description: '',
    images: IMG_1,
  },
  {
    id: 2,
    title: '',
    description: '',
    images: IMG_2,
  },
  {
    id: 3,
    title: '',
    description: '',
    images: IMG_3,
  },
  {
    id: 4,
    title: '',
    description: '',
    images: IMG_4,
  },
  {
    id: 5,
    title: '',
    description: '',
    images: IMG_5,
  },
  {
    id: 6,
    title: '',
    description: '',
    images: IMG_6,
  },
  {
    id: 7,
    title: '',
    description: '',
    images: IMG_7,
  },
  {
    id: 8,
    title: '',
    description: '',
    images: IMG_8,
  },
  {
    id: 9,
    title: '',
    description: '',
    images: IMG_9,
  },
  {
    id: 10,
    title: '',
    description: '',
    images: IMG_5,
  },
  {
    id: 11,
    title: '',
    description: '',
    images: IMG_6,
  },
];

export interface ServiceDatum {
  id: number;
  title: string;
  icon: string;
  description: string;
}

export const dataServices: ServiceDatum[] = [
  {
    id: 1,
    title: 'GISWeb',
    icon: ICONSERVICE_1,
    description:
      'Gisweb merupakan Sistem Informasi berbasis Geografi yang dijalankan secara online. Pada saat ini GIS sudah hampir digunakan disemua bidang pekerjaan khususnya dalam pengelolaan data aset spatial baik dipemerintahan maupun swasta. Dengan ditunjang fitur-fitur analisa seperti statistik GIS mampu memberikan nilai lebih dalam penyajian data secara visual dan memudahkan dalam pengambilan keputusan.',
  },
  {
    id: 2,
    title: 'Mobile GIS',
    icon: ICONSERVICE_2,
    description:
      'Mobille GIS merupakan tool untuk pengambilan data (Mobile Data Collection) berbasis lokasi. Kami melayani pengembangan aplikasi khusus untuk pengambilan data yang bisa menyesuaikan kebutuhan perusahaan atau organisasi. Beberapa contoh penggunaan aplikasi mobile GIS ini seperti survey data kependudukan, survey sosial, survey pelanggan, survey flora dan fauna dan lain-lain.',
  },
  {
    id: 3,
    title: 'Integrasi Webgis dan Mobile',
    icon: ICONSERVICE_3,
    description:
      'Integrasi dua sistem ini sangat powerfull dalam pekerjaan managemen data dan monitoring aset. Mobile berfungsi sebagai alat pengambilan data dilokasi yang langsung akan terkirim secara realtime. Data dari lapangan yang diterima oleh Webgis akan diolah, dianalisa serta disajikan secara otomatis. Integrasi sistem ini mampu meningkatkan efisiensi kerja dan nilai ekonomis bagi organisasi baik pemerintah maupun swasta.',
  },
  {
    id: 4,
    title: 'Custom',
    icon: ICONSERVICE_4,
    description:
      'Layanan custom berupa pengembangan sistem dan fitur-fiturnya sesuai dengan permintaan klien. Contoh pengembangan sistem pada pemerintah seperti sistem monitoring kebakaran, sistem patroli kehutanan, monitoring aset infrastruktur, sistem informasi dan tanggap bencana. Pengembangan sistem di swasta seperti ; sistem pemanenan sawit, tracking logistik, inspeksi pipa dan haulling, analisa bisnis, dan lain-lain.',
  },
];

export const dataSamples = [
  {
    id: 1,
    title: 'Sistem Informasi Jalan dan Jembatan',
    description:
      'Sistem Informasi ini sering disebut Database Jalan dan jembatan. Sistem ini dibutuhkan di semua dinas PUPR kabupaten untuk pengelolaan data aset mulai dari penyimpanan, updating, analisa dan penyajian data. Data masukan berupa peta digital dan data atribut sesuai dengan form DAK kementrian PUPR dan format kebijakan satu peta, seperti :',
    features: [
      { id: 1, title: 'Ruas jalan', description: '' },
      { id: 2, title: 'Status', description: '' },
      { id: 3, title: 'Posisi', description: '' },
      { id: 4, title: 'Dimensi (Panjang, lebar)', description: '' },
      { id: 5, title: 'Jenis permukaan', description: '' },
      { id: 6, title: 'Tingkat kerusakan', description: '' },
      { id: 7, title: 'Dan lain-lain', description: '' },
    ],
    thumbnail: SAMPLE_1,
    url: '',
  },
  {
    id: 2,
    title: 'Sistem Informasi Irigasi',
    description:
      'Sistem Informasi Irigasi digunakan oleh pemerintah daerah sebagai sistem penyimpanan dan pengelolaan data irigasi. Sistem ini mengelola data keirigasian mulai dari areal, saluran dan bangunan irigasi. Contoh data layer sistem informasi ini adalah ;',
    features: [
      { id: 1, title: 'Daerah Irigasi (Baku, Fungsional, Potensial)', description: '' },
      { id: 2, title: 'Saluran (primer, skunder, tersier)', description: '' },
      { id: 3, title: 'Bangunan (bendung, pintu air, dll)', description: '' },
      { id: 4, title: 'Sungai', description: '' },
    ],
    thumbnail: SAMPLE_2,
    url: '',
  },
  {
    id: 3,
    title: 'Sistem Informasi Jaringan Pipa PDAM',
    description:
      'Sistem informasi Jaringan Pipa PDAM berbasis GIS merupakan sebuah sistem yang sangat dibutuhkan oleh PDAM dalam pengelolaan aset. Integrasi sistem WebGIS dengan mobile mampu menaikkan efisiensi kerja dan meningkatkan sistem pelayanan konsumen yang lebih baik. Aset-aset PDAM yang dikelola dalam sistem dan bisa diintegrasikan dengan sistem yang sudah ada pada perusahaan adalah ;',
    features: [
      { id: 1, title: 'Jaringan pipa', description: '' },
      { id: 2, title: 'Jaringan SR/Pelanggan', description: '' },
      { id: 3, title: 'Instalasi', description: '' },
      { id: 4, title: 'Aksesoris', description: '' },
    ],
    thumbnail: SAMPLE_3,
    url: '',
  },
  {
    id: 4,
    title: 'Sistem Informasi Bangunan (IMB)',
    description:
      'Sistem Informasi Bangunan ini digunakan untuk managemen data IMB, Mulai dari pendataan bangunan eksisting sampai ke proses pengajuan ijin. Dengan kelengkapan data seperti peta Tata Ruang, topografi dan citra satelit sistem ini sangat memudahkan analisa awal lokasi bangunan ataupun mendeteksi permasalahan secara keruangan.',
    features: [],
    thumbnail: SAMPLE_4,
    url: '',
  },
  {
    id: 5,
    title: 'Sistem Informasi Infrastruktur',
    description:
      'Sistem Informasi infrastruktur merupakan sistem yang sangat komplek karena digunakan untuk mengelola berbagai jenis dan type data. Jenis data aset infrastruktur termasuk utilitas yang dikelola seperti ; jalan, jembatan, gedung, drainase, utilitas, tiang listrik, gorong-gorong, pipa, hydran, tiang telpon dan lain-lain. Sistem ini biasanya dibangun dengan konsep dinamis karena digunakan oleh beberapa bidang pengelola. Sistem bisa diintegrasikan dengan mobile sebagai alat pengambil data dilapangan yang langsung akan terkirim ke sistem utama (WebGIS) secara real time.',
    features: [],
    thumbnail: SAMPLE_5,
    url: '',
  },
  {
    id: 6,
    title: 'Database dan Inspeksi Kehutanan di Pertambangan ',
    description:
      'Sistem informasi kehutanan ini diaplikasikan pada perusahaan tambang untuk mengelola data batas (IUP), rehabilitasi dan penanaman. Sistem diintegrasikan dengan mobile system yang digunakan sebagai alat monitoring atau inspeksi dilapangan. Mobile system untuk kegiatan inspeksi perawatan patok batas dan pengambilan data progres penanaman pada kegiatan rehabilitasi.',
    features: [],
    thumbnail: SAMPLE_6,
    url: '',
  },
  {
    id: 7,
    title: 'Sistem Informasi Drainase',
    description:
      'Drainase merupakan bagian dari bidang infrastruktur atau utilitas. Dalam pengelolaan data sistem drainase ini berisikan tentang peta jaringan drainase dan data suport berupa peta jalan, sungai, tataruang dan kontur. Data-data ini kemudian digunakan sebagai bahan perencanaan atau kebijakan dalam pengelolaan jaringan drainase kota atau kabupaten.',
    features: [],
    thumbnail: SAMPLE_7,
    url: '',
  },
  {
    id: 8,
    title: 'SI Biodiversitas (Keaneka Ragaman Hayati)',
    description:
      'Sistem Informasi Kehati merupakan integrasi Webgis dan mobile system. Selain digunakan untuk penyimpanan data keanekaragaman hayati (flora dan fauna) sistem juga digunakan untukk penyimpanan data sosial kehutanan seperti pencurian kayu, kebakaran dll. Mobile system digunakan sebagai tool pengambilan data survey maupun patroli. Data akan langsung terkirim dan akan dikelola oleh webgis. Kelengkapan  sistem tersebut berupa metode survey, Tracking, dan daftar flora dan fauna.',
    features: [],
    thumbnail: SAMPLE_8,
    url: '',
  },
];

export const dataPartners = [
  { id: 1, name: 'A Company', url: 'company.com', images: IMGPARTNER_1 },
  { id: 2, name: 'B Company', url: 'company.com', images: IMGPARTNER_2 },
  { id: 3, name: 'C Company', url: 'company.com', images: IMGPARTNER_3 },
  { id: 4, name: 'D Company', url: 'company.com', images: IMGPARTNER_4 },
  { id: 5, name: 'E Company', url: 'company.com', images: IMGPARTNER_5 },
  { id: 6, name: 'F Company', url: 'company.com', images: IMGPARTNER_6 },
  { id: 7, name: 'G Company', url: 'company.com', images: IMGPARTNER_7 },
  { id: 7, name: 'G Company', url: 'company.com', images: IMGPARTNER_8 },
  { id: 7, name: 'G Company', url: 'company.com', images: IMGPARTNER_9 },
  { id: 7, name: 'G Company', url: 'company.com', images: IMGPARTNER_10 },
  { id: 7, name: 'G Company', url: 'company.com', images: IMGPARTNER_11 },
  { id: 7, name: 'G Company', url: 'company.com', images: IMGPARTNER_12 },
  { id: 7, name: 'G Company', url: 'company.com', images: IMGPARTNER_13 },
];

// Page Setting
export const dataPages = [
  {
    id: 1,
    name: 'About',
    heading: 'About Dummy',
    subheading: 'Explore the hidden waterfall deep inside the Amazon Jungle',
    banner: BANNER_BG,
    title: 'Lorem ipsum dummy',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar venenatis ultrices. Sed viverra justo vel urna tempor luctus.Mauris eget vehicula dui.Curabitur molestie nibh nec convallis eleifend. Nunc rutrum velit tellus, non gravida quam consectetur et. Nullam ut sodales urna. Nunc varius molestie rhoncus. Fusce rutrum tortor tincidunt velit cursus efficitur. Aliquam quis malesuada nisl, in tincidunt mauris. Nullamaccumsan sit amet felis vitae sodales. Cras eleifend, massa ac pellentesque sollicitudin, ligula magna interdum orci, eu scelerisque lorem sapien dapibus lorem. Nunc vel lorem sit amet enim commodo interdum sitamet at odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Maecenas sit amet tellus lobortis, pharetra massa in, varius sem. Suspendisse sollicitudin nec lectus quis sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices urna a dui dapibus, attempus arcu aliquam. Aliquam hendrerit elit sit amet nisl iaculis iaculis. Etiam et mauris at sem elementum feugiat. Sed fermentum leo erat, nec iaculis leo efficitur non. Nam consequat volutpat eros, nec volutpat erat mattis vitae. Sed rhoncus felis at enim fringilla iaculis. Vestibulum sit amet dui tempus, vulputate orci ac, iaculis est. Nam consequat odio efficitur lacus tempor hendrerit. In eget ex tempor, congue nisi ac, condimentum sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium iaculis arcu, sit amet pretium erat sagittis id. Nunc porta, lacus interdum fringilla congue, orci massa pretium augue, non gravida libero arcu vitae arcu. Vivamus ut mauris venenatis sem sollicitudin volutpat. Etiam sit amet purus in sem consectetur euismod in nec metus. Suspendisse volutpat lacinia dui, facilisis mattis augue scelerisque in. Maecenas et dolor diam. Proin massa justo, hendrerit sed nulla eu, interdum dictum enim. Donec non lacus idurna vulputate convallis eget et ex. Ut sem quam, convallis sit amet elit id, venenatis sollicitudin urna. Curabitur dignissim elit mauris, at varius leo egestas iaculis. Aenean tempus mattis turpis. Phasellus feugiat erat et orci facilisis viverra facilisis ut lectus. Suspendisse luctus ligula nec justo ullamcorper finibus euvel magna. Aliquam at tortor faucibus, eleifend diam sit amet, efficitur risus. Phasellus vehicula, mi nec tristique bibendum, enim erat suscipit tellus, congue dapibus nunc orci at risus. Vivamus nibh urna, consequatat sagittis et, hendrerit at arcu. In luctus odio odio, vitae mattis metus dignissim ut. Mauris viverra, libero at ullamcorper lacinia, arcu quam egestas elit, id mollis odio mi a metus. Donec sit amet magna id felis pulvinar euismod. Maecenas non pharetra augue. Nullam pharetra fermentum orci sit amet convallis. Etiam malesuada, risus eget sagittis commodo, sapien erat laoreet leo, vitae commodo tellus lectus vitae velit. Maecenas quis cursus quam. Nulla facilisi. Vestibulum quis felis in nisl efficitur cursus at nec diam. Vestibulum eros justo, tempus in vestibulum et, imperdiet eu lectus.',
  },
  {
    id: 2,
    name: 'Service',
    heading: 'Gis On Demand',
    subheading: 'Gratis konsultasi dan diskusi untuk pengembangan sistem',
    banner: SERVICEPAGE,
    title: 'Layanan',
    description: '',
  },
  {
    id: 3,
    name: 'Blog',
    heading: 'Blogs',
    subheading: 'Dapatkan berbagai informasi dan berita terbaru terkait produk dan layanan kami',
    banner: BLOGPAGE,
    title: '',
    description: '',
  },
];

// Footer Setting
export const dataFooter = [
  {
    logo: logoLight,
    logo2: logoLight2,
    description: 'Kami konsultan profesional yang khusus bergerak dibidang pengembangan sistem informasi berbasis GIS.',
    downloads: [
      {
        name: 'Apps Store',
        icon: appStore,
        url: '',
      },
      {
        name: 'Play Store',
        icon: playStore,
        url: '',
      },
    ],
    copyrights: 'CV. Karomap Semesta. All rights reserved.',
    quicklinks: [
      {
        name: 'Home',
        url: '/',
      },
      {
        name: 'Services',
        url: '/services',
      },
      {
        name: 'Blogs',
        url: '/blogs',
      },
      {
        name: 'Karomap',
        url: 'https://www.karomap.com/',
      },
    ],
    contacts: [
      {
        name: 'Phone',
        description: '(62) 274 2820 302',
      },
      {
        name: 'Whatsapp',
        description: '+62 896 2349 8800',
      },
      {
        name: 'Email',
        description: 'contact.digipeta@gmail.com',
      },
      {
        name: 'Alamat',
        description: 'Jl. Cendrawasih, Mejing Lor, Ambarketawang, Gamping, Sleman 55294',
      },
    ],
    socials: [
      {
        name: 'Facebook',
        icon: 'facebook',
        url: 'https://www.facebook.com/digipeta.id',
      },
      {
        name: 'Twitter',
        icon: 'twitter',
        url: 'https://twitter.com/digipeta',
      },
      {
        name: 'Linkedin',
        icon: 'info',
        url: 'https://www.linkedin.com/in/digipeta-semesta-30612216b/',
      },
      {
        name: 'Youtube',
        icon: 'youtube',
        url: 'https://www.youtube.com/channel/UC0xnj0tLDCiPHiZrFPnE2Wg',
      },
      {
        name: 'Google',
        icon: 'google',
        url: 'https://google.com',
      },
    ],
  },
];

// Blog Resource Data
export const dataBlogs = [
  {
    id: 1,
    title: 'Geocoding',
    slug: 'geocoding',
    category: 'articles',
    description:
      'In the age of ever-advancing business intelligence technology, customer???s data is one of the most valuable assets. Today, clients??? addresses, for instance, reveal so much more than just where target audiences reside. With the help of geocoding this information becomes a lucrative source of insights. Geocoding is the process of converting data about locations into a spot on the planet. Simply put, it is the process of assigning the Global Positioning System (GPS) coordinates (in other words latitude/longitude), to an address. Obtained results are used for geocoding mapping. Even though the immediate answer to this question is rather simple, putting it into life gives rise to difficulties. If you???re looking for an accurate geocode, the most reliable way to obtain it is to travel to the location yourself and drop a pin on your GPS device. By doing so, you will receive the most precise location with latitude and longitude. However, practicality is not the strong suit of this approach, especially for those who need to collect the locations of hundreds of thousands of objects.',
    images: IMG_1,
    author: 'admin',
    created_at: '2021-06-10 17:59:50',
    updated_at: '2021-06-10 18:59:50',
  },
  {
    id: 2,
    title: 'Celebrating GIS Day 2020!',
    slug: 'celebrating-gis-day-2020',
    category: 'articles',
    description:
      'Since 1999, November 18th  has been celebrated as the international Geographic Information System day. It???s main purpose is to popularize the GIS industry, to encourage people to learn about geography and spatial technologies, and to give people in the GISindustry their own professional holiday. Each year, this date serves as a good occasion to gather GIS-related events and exhibitions. But this year, due to COVID-19 restrictions, all events are being held online. And we at Aspectum, as a part of the GIS community, would like to participate in the movement by interviewing industry professionals. We have talked with six GIS specialists, asking them simple questions to get to know them a little better ???  not only as professionals, but as people. It is their day after all!',
    images: IMG_2,
    author: 'admin',
    created_at: '2021-06-10 17:59:50',
    updated_at: '2021-06-10 18:59:50',
  },
  {
    id: 3,
    title: 'Geography Awareness Week: How to Create a Better Future with GIS Technologies',
    slug: 'geography-awareness-week',
    category: 'articles',
    description:
      'For over 25 years, the third week of November has been traditionally dedicated to the science of geography. By celebrating Geography Awareness Week, the global community raises awareness of this underestimated field and excites people about its significance in everyday life. For the Aspectum team, geography is a cornerstone of our activity.That???s why we???d like to shed some light and show what a multifaceted tool this science can be. The following is a list of GIS maps serving to detect, prevent, and overcome ecological, medical, humanitarian, municipal, and other issues.',
    images: IMG_3,
    author: 'admin',
    created_at: '2021-06-10 17:59:50',
    updated_at: '2021-06-10 18:59:50',
  },
  {
    id: 4,
    title: 'Why Marketing Needs GIS Right Now',
    slug: 'why-marketing-needs-gis-right-now',
    category: 'blogs',
    description:
      'Geographical Information Systems (GIS) can be implemented in numerous spheres but not in marketing. What nonsense one might think! And they will be absolutely right. GIS software is a useful tool in both direct and digital marketing. It enables businesses to enter a new, cost-effective stage of their development. In many cases, data converted into maps is a tidbit of information that enhances the efficiency of advertising and promotional campaigns. GIS provides a comprehensive picture of the potential audiences and allows fresh approaches to testing on the best ways of targeting based on customers??? locations.',
    images: IMG_4,
    author: 'admin',
    created_at: '2021-06-10 17:59:50',
    updated_at: '2021-06-10 18:59:50',
  },
  {
    id: 5,
    title: 'ZIP Codes For Geospatial Analysis',
    slug: 'zip-codes-for-geospatial-analysis',
    category: 'news',
    description:
      'Zone Improvement Codes ??? or ZIP codes, as they???re commonly known ??? have different reputations among different people. Some are very familiar with them and may even know them by heart due to their use of postal mail. Others, however, google them frantically when submitting or completing a delivery form. There???s even an argument to make that thanks to the advancement of technology, people shouldn???t even need to remember these codes. However, data specialists know perfectly well ZIP codes are here to stay. They are still used by professionals across industries to map data. But how efficient is this method of data visualization and when should it be used?',
    images: IMG_5,
    author: 'admin',
    created_at: '2021-06-10 17:59:50',
    updated_at: '2021-06-10 18:59:50',
  },
  {
    id: 6,
    title: 'Location intelligence and why your business should embrace it in 2021',
    slug: 'location-intelligence-and-why-your-business',
    category: 'news',
    description:
      'What is your favourite cliche about 2020 and the COVID-19 pandemic? Is it that at the end of the day, no matter how much we earn or where we live, we are all the same? Or perhaps it is that ???nothing will ever be the same again???, or maybe you are sick of hearing about how many new hobbies your friends have decided to take up.So while the last 12 months have been full of mantras and cliches, there is one that does at least hold true. This is that if you wanted your business to survive in 2020, you had to improvise and adapt quickly. You had to optimize everything about your daily processes and in 2021 you need to be prepared for more of the same.',
    images: IMG_6,
    author: 'admin',
    created_at: '2021-06-10 17:59:50',
    updated_at: '2021-06-10 18:59:50',
  },
  {
    id: 7,
    title: 'Data Security: How to Protect Cloud Systems in 2020',
    slug: 'data-security',
    category: 'blogs',
    description:
      'On July 14th, we introduced domain-based access that verifies users on the network and responds to authentication requests. The feature enables us to provide total visibility and additional security for our clients??? data in the cloud. As one of the Privacy Shield certified companies, the Aspectum team complies with data protection requirements when transferring personal information from the European Union and Switzerland. Should you have any questions on mechanisms for non-American clients, we are always ready to suggest the best solutions for you.',
    images: IMG_7,
    author: 'admin',
    created_at: '2021-06-10 17:59:50',
    updated_at: '2021-06-10 18:59:50',
  },
  {
    id: 8,
    title: 'GIS Community Insights 2020',
    slug: 'gis-community-insights-2020',
    category: 'blogs',
    description:
      'Usually, industry-related reports show the market. GIS Community Survey is the first people-centered research in GIS. We are very grateful to all participants from different countries who contributed to GIS Community Research by Aspectum! During these months we have reached out to more than 5000 specialists from EMEA, North America, and Asia Pacific working with data to help businesses make informed decisions.',
    images: IMG_8,
    author: 'admin',
    created_at: '2021-06-10 17:59:50',
    updated_at: '2021-06-10 18:59:50',
  },
  {
    id: 9,
    title: '5 Sectors That Benefited Most from Data Visualization Software',
    slug: '5-sectors-that-benefited',
    category: 'blogs',
    description:
      'When organizations wish to monitor business metrics and key performance indicators in real time to gain a better grasp on their performance and objectives, they turn to data visualization tools to translate data into charts and graphs. These solutions include various data visualization techniques such as geospatial imagery, mapping, dashboard creation, graph configuration and to some extent, data analysis. Although data visualization software can offer a wide array of features, they are centered on supplying visualizations and dashboards to keep tabs on crucial information for businesses. ',
    images: IMG_9,
    author: 'admin',
    created_at: '2021-06-10 17:59:50',
    updated_at: '2021-06-10 18:59:50',
  },
  {
    id: 10,
    title: 'Lorem Ipsum Dummy 9',
    slug: 'lorem-ipsum-dummy',
    category: 'blogs',
    description: 'Lorem Ipsum Dummy Lorem Ipsum Dummy',
    images: IMG_1,
    author: 'admin',
    created_at: '2021-06-10 17:59:50',
    updated_at: '2021-06-10 18:59:50',
  },
  {
    id: 11,
    title: 'Lorem Ipsum Dummy 10',
    slug: 'lorem-ipsum-dummy',
    category: 'blogs',
    description: 'Lorem Ipsum Dummy Lorem Ipsum Dummy',
    images: IMG_2,
    author: 'admin',
    created_at: '2021-06-10 17:59:50',
    updated_at: '2021-06-10 18:59:50',
  },
  {
    id: 12,
    title: 'Test Ipsum Dummy',
    slug: 'lorem-ipsum-dummy',
    category: 'blogs',
    description: 'Lorem Ipsum Dummy Lorem Ipsum Dummy',
    images: IMG_3,
    author: 'admin',
    created_at: '2021-06-10 17:59:50',
    updated_at: '2021-06-10 18:59:50',
  },
  {
    id: 13,
    title: 'Lorem Ipsum Dummy',
    slug: 'lorem-ipsum-dummy',
    category: 'blogs',
    description: 'Lorem Ipsum Dummy Lorem Ipsum Dummy',
    images: IMG_4,
    author: 'admin',
    created_at: '2021-06-10 17:59:50',
    updated_at: '2021-06-10 18:59:50',
  },
  {
    id: 14,
    title: 'Test Ipsum Dummy',
    slug: 'lorem-ipsum-dummy',
    category: 'blogs',
    description: 'Lorem Ipsum Dummy Lorem Ipsum Dummy',
    images: IMG_5,
    author: 'admin',
    created_at: '2021-06-10 17:59:50',
    updated_at: '2021-06-10 18:59:50',
  },
  {
    id: 15,
    title: 'Lorem Ipsum Dummy',
    slug: 'lorem-ipsum-dummy',
    category: 'news',
    description: 'Lorem Ipsum Dummy Lorem Ipsum Dummy',
    images: IMG_6,
    author: 'admin',
    created_at: '2021-06-10 17:59:50',
    updated_at: '2021-06-10 18:59:50',
  },
  {
    id: 16,
    title: 'Test Ipsum Dummy',
    slug: 'lorem-ipsum-dummy',
    category: 'news',
    description: 'Lorem Ipsum Dummy Lorem Ipsum Dummy',
    images: IMG_7,
    author: 'admin',
    created_at: '2021-06-10 17:59:50',
    updated_at: '2021-06-10 18:59:50',
  },
  {
    id: 17,
    title: 'Last Lorem Ipsum Dummy 16',
    slug: 'lorem-ipsum-dummy',
    category: 'news',
    description: 'Lorem Ipsum Dummy Lorem Ipsum Dummy',
    images: IMG_8,
    author: 'admin',
    created_at: '2021-06-10 17:59:50',
    updated_at: '2021-06-10 18:59:50',
  },
];

export const speedDials = [
  {
    label: 'Hubungi Kami',
    icon: 'pi pi-phone',
    command: () => {
      window.location.href = 'https://wa.me/6289623498800/';
    },
  },
];
