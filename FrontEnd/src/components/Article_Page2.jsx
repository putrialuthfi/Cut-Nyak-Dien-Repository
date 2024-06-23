import { useParams, Link } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from './Footer';

const Article_Page2 = () => {
  const { articleId } = useParams();

  const articles = [
    {
      id: 1,
      title: "Manfaat Konsumsi Brokoli untuk Anak",
      image: "/src/assets/Rectangle 39.png",
      author: "Jeonghan Pratama",
      date: "2023-06-13",
      content: `
        <div>
          <p class="text-left">Brokoli adalah salah satu sayuran yang sangat baik untuk dikonsumsi oleh anak-anak. Sayuran hijau ini tidak hanya kaya akan nutrisi, tetapi juga memiliki banyak manfaat kesehatan yang penting bagi pertumbuhan dan perkembangan anak. Berikut adalah beberapa manfaat utama dari konsumsi brokoli untuk anak-anak:</p>
          
          <ol>
            <li>
              <strong><br />Sumber Vitamin dan Mineral yang Kaya</strong>
              <p class="text-left">Brokoli mengandung berbagai vitamin dan mineral yang penting untuk kesehatan anak. Beberapa nutrisi utama yang ditemukan dalam brokoli meliputi:</p>
              <ul>
                <li><strong>1. Vitamin C:</strong> Meningkatkan sistem kekebalan tubuh dan membantu dalam penyerapan zat besi.</li>
                <li><strong>2. Vitamin K:</strong> Penting untuk pembekuan darah dan kesehatan tulang.</li>
                <li><strong>3. Vitamin A:</strong> Baik untuk kesehatan mata dan kulit.</li>
                <li><strong>4. Folat:</strong> Mendukung pertumbuhan dan perkembangan sel.</li>
                <li><strong>5. Kalium:</strong> Membantu fungsi otot dan saraf.</li>
              </ul>
            </li>
          </ol>

          <p class="text-left"><strong><br />Manfaat Brokoli bagi Tubuh</strong></p>
          <p class="text-left">Brokoli memiliki banyak manfaat bagi tubuh anak. Beberapa manfaat dari konsumsi brokoli meliputi:</p>
          <ul>
            <li><strong>Meningkatkan Sistem Kekebalan Tubuh</strong> Vitamin C yang tinggi dalam brokoli membantu meningkatkan sistem kekebalan tubuh anak-anak, melindungi mereka dari berbagai infeksi dan penyakit. Konsumsi brokoli secara teratur dapat membantu anak-anak tetap sehat dan aktif.</li>
            <li><strong>Menjaga Kesehatan Pencernaan</strong> Brokoli mengandung serat yang tinggi, yang sangat baik untuk sistem pencernaan anak-anak. Serat membantu mencegah sembelit dan menjaga kesehatan saluran pencernaan. Dengan pencernaan yang baik, nutrisi dari makanan lain juga dapat diserap dengan lebih efektif.</li>
            <li><strong>Mendukung Kesehatan Tulang</strong> Vitamin K dan kalsium dalam brokoli sangat penting untuk kesehatan tulang. Konsumsi brokoli dapat membantu dalam pembentukan tulang yang kuat dan mencegah masalah tulang di kemudian hari.</li>
            <li><strong>Mencegah Anemia</strong> Brokoli juga mengandung zat besi, yang diperlukan untuk produksi sel darah merah. Anemia adalah kondisi yang umum terjadi pada anak-anak, dan konsumsi brokoli dapat membantu mencegahnya dengan meningkatkan asupan zat besi.</li>
            <li><strong>Meningkatkan Fungsi Otak</strong> Beberapa penelitian menunjukkan bahwa brokoli mengandung senyawa yang dapat mendukung fungsi otak dan perkembangan kognitif. Nutrisi seperti kolin dan vitamin K dalam brokoli membantu dalam memori dan fungsi otak.</li>
            <li><strong>Mengurangi Risiko Penyakit Kronis</strong> Antioksidan dalam brokoli, seperti sulforaphane, dapat membantu mengurangi risiko penyakit kronis seperti kanker. Meskipun kanker jarang terjadi pada anak-anak, membiasakan mereka mengonsumsi makanan kaya antioksidan dapat memberikan manfaat jangka panjang bagi kesehatan mereka.</li>
          </ul>

          <p class="text-left"><strong><br />Cara Menyajikan Brokoli untuk Anak</strong></p>
          <p class="text-left">Meskipun brokoli sangat bermanfaat, beberapa anak mungkin tidak menyukai rasanya. Berikut beberapa tips untuk menyajikan brokoli agar lebih menarik bagi anak-anak:</p>
          <ul>
            <li><strong>Sajikan dengan Keju:</strong> Menambahkan sedikit keju leleh di atas brokoli kukus bisa membuatnya lebih lezat.</li>
            <li><strong>Campurkan dengan Makanan Favorit:</strong> Campurkan brokoli dengan makanan favorit anak, seperti pasta atau nasi.</li>
            <li><strong>Buat Sup atau Smoothie:</strong> Blender brokoli menjadi sup atau smoothie untuk menyamarkan rasanya.</li>
            <li><strong>Panggang dengan Sedikit Minyak Zaitun dan Bawang Putih:</strong> Ini dapat memberikan rasa yang gurih dan renyah.</li>
          </ul>

          <p class="text-left"><strong><br />Kesimpulan</strong></p>
          <p class="text-left">Brokoli adalah sayuran yang sangat bergizi dan menawarkan banyak manfaat kesehatan untuk anak-anak. Dengan memasukkan brokoli dalam pola makan harian mereka, Anda dapat membantu memastikan bahwa mereka mendapatkan nutrisi penting yang mereka butuhkan untuk tumbuh sehat dan kuat. Cobalah berbagai cara kreatif untuk menyajikan brokoli agar anak-anak Anda dapat menikmatinya dengan lebih baik.</p>
        </div>
      `,
    },
    {
      id: 2,
      title: "Peran Susu Bagi Pertumbuhan Anak",
      image: "/src/assets/card-artikel-2.png",
      author: "Wonwoo Putra",
      date: "2023-05-26",
      content: `
        <div>
          <p class="text-left">Susu merupakan salah satu sumber nutrisi utama yang sangat penting bagi pertumbuhan dan perkembangan anak-anak. Susu mengandung berbagai zat gizi yang esensial untuk kesehatan tulang, otot, dan sistem kekebalan tubuh. Berikut adalah beberapa manfaat utama dari konsumsi susu bagi anak-anak:</p>

          <ol>
            <li>
              <strong>Sumber Kalsium yang Penting</strong>
              <p class="text-left">Kalsium adalah mineral utama yang ditemukan dalam susu. Kalsium membantu dalam pembentukan tulang dan gigi yang kuat pada anak-anak.</p>
            </li>
            <li>
              <strong>Mengandung Protein Berkualitas Tinggi</strong>
              <p class="text-left">Protein dalam susu sangat penting untuk pertumbuhan dan perbaikan jaringan tubuh anak-anak, termasuk otot dan kulit.</p>
            </li>
            <li>
              <strong>Mengandung Vitamin dan Mineral Penting Lainnya</strong>
              <p class="text-left">Selain kalsium dan protein, susu juga mengandung vitamin D untuk penyerapan kalsium yang lebih baik, serta vitamin A, B, dan riboflavin yang mendukung kesehatan umum anak.</p>
            </li>
            <li>
              <strong>Menyediakan Energi dan Menghidrasi Tubuh</strong>
              <p class="text-left">Susu mengandung karbohidrat yang memberikan energi bagi anak-anak aktif, serta air untuk menjaga tubuh tetap terhidrasi.</p>
            </li>
          </ol>

          <p class="text-left"><strong>Bagaimana Cara Menyajikan Susu agar Anak Menyukainya?</strong></p>
          <ul>
            <li><strong>Tambahkan Sereal atau Buah:</strong> Campur susu dengan sereal atau tambahkan potongan buah favorit anak untuk menambah rasa dan nutrisi.</li>
            <li><strong>Buat Smoothie Susu:</strong> Blender susu dengan buah-buahan untuk membuat smoothie yang lezat dan menyehatkan.</li>
            <li><strong>Sajikan Dingin atau Hangat:</strong> Sesuaikan suhu susu sesuai dengan preferensi anak.</li>
          </ul>

          <p class="text-left"><strong>Kesimpulan</strong></p>
          <p class="text-left">Susu adalah pilihan makanan yang sangat baik untuk memastikan anak-anak mendapatkan nutrisi yang cukup untuk pertumbuhan dan perkembangan mereka. Dengan memasukkan susu dalam pola makan harian anak, Anda membantu memastikan bahwa mereka tumbuh menjadi kuat dan sehat.</p>
        </div>
      `,
    },
    {
      id: 3,
      title: "Tips Ajari Anak Minum Obat Pil atau Tablet",
      image: "/src/assets/Rectangle 36.png",
      author: "Siska Seungcheolina",
      date: "2023-03-09",
      content: `
        <div>
          <p class="text-left">Mengajari anak untuk minum obat pil atau tablet bisa menjadi tantangan, tetapi penting untuk memastikan mereka mengonsumsi obat dengan benar saat diperlukan. Berikut adalah beberapa tips untuk membantu Anda mengajari anak Anda cara yang aman dan efektif dalam mengonsumsi obat:</p>

          <ol>
            <li>
              <strong>Pilih Obat dengan Bentuk dan Rasa yang Disukai Anak</strong>
              <p class="text-left">Cari obat dengan bentuk yang lebih kecil atau dalam bentuk cairan jika mungkin. Beberapa obat memiliki varian rasa yang lebih enak untuk anak-anak.</p>
            </li>
            <li>
              <strong>Ajarkan Anak Tentang Pentingnya Minum Obat</strong>
              <p class="text-left">Jelaskan kepada anak mengapa mereka perlu minum obat, bahaya jika tidak meminumnya, dan bagaimana obat membantu mereka merasa lebih baik.</p>
            </li>
            <li>
              <strong>Gunakan Teknik Bantu Anak Menelan</strong>
              <p class="text-left">Ajarkan anak untuk menelan obat dengan mengajak mereka minum air atau cairan lain setelah menelan obat. Berikan pujian jika mereka melakukannya dengan baik.</p>
            </li>
            <li>
              <strong>Berikan Contoh dan Bimbingan</strong>
              <p class="text-left">Minumlah obat di depan anak untuk menunjukkan bahwa itu aman dilakukan dan menjadi contoh positif bagi mereka.</p>
            </li>
          </ol>

          <p class="text-left"><strong>Memotivasi Anak dengan Reward atau Pujian</strong></p>
          <ul>
            <li><strong>Berikan Reward Kecil:</strong> Berikan penghargaan atau hadiah kecil setelah anak berhasil minum obat dengan baik.</li>
            <li><strong>Berikan Pujian:</strong> Puji anak ketika mereka melakukan dengan baik untuk meningkatkan kepercayaan diri mereka.</li>
            <li><strong>Gunakan Stiker atau Chart:</strong> Buat chart atau gunakan stiker untuk menandai setiap kali anak berhasil minum obat.</li>
          </ul>

          <p class="text-left"><strong>Kesimpulan</strong></p>
          <p class="text-left">Mengajari anak Anda cara yang tepat untuk minum obat penting untuk kesehatan mereka. Dengan memberikan dukungan, pengertian, dan motivasi yang tepat, Anda dapat membantu mereka mengatasi ketakutan atau kesulitan dalam mengonsumsi obat pil atau tablet dengan lebih mudah.</p>
        </div>
      `,
    },
    // Artikel lainnya
  ];

  // Cari artikel sesuai dengan articleId
  const article = articles.find(article => article.id === parseInt(articleId));

  if (!article) {
    return <div>Artikel tidak ditemukan</div>;
  }

  // Filter artikel lainnya untuk ditampilkan dalam card
  const otherArticles = articles.filter(item => item.id !== parseInt(articleId)).slice(0, 2); // Ambil 2 artikel lainnya

  return (
    <article>
      <Navbar />
      <div className="min-h-screen bg-white mx-10 my-10 grid grid-cols-3 gap-8">
        {/* Konten artikel utama */}
        <div className="col-span-2">
          <div className="text-center">
            <h1 className="font-poppinsSemiBold text-header1">{article.title}</h1>
            {/* Menampilkan gambar dan konten artikel */}
            <img src={article.image} alt={article.title} className="rounded-lg object-cover w-full h-80 mb-4" />
            <p className="text-left text-sm text-gray-500 mb-2">
              Oleh {article.author} | {new Date(article.date).toLocaleDateString()}
            </p>
            <div className="prose max-w-none text-left space-y-4" dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
        </div>

        {/* Card untuk artikel lainnya */}
        <div className="col-span-1">
          <div className="text-center">
            <h2 className="font-poppinsSemiBold text-body mb-4">Artikel Lainnya</h2>
            {otherArticles.map(item => (
              <Link to={`/article/${item.id}`} key={item.id} className="block mb-4">
                <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg">
                  <img src={item.image} alt={item.title} className="rounded-t-lg object-cover w-full h-48" />
                  <div className="p-4">
                    <h3 className="font-poppinsSemiBold text-lg">{item.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </article>
  );
};

export default Article_Page2;
