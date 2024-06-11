import React from "react";
import Image2 from "../assets/Image2.png";

const ArticlePage2 = () => {
  return (
    <div className="flex" style={{ width: "1296px", height: "1507px" }}>
      {/* Left */}
      <div className="w-2/3 px-12 bg-white">
        <header className="text-left">
          <h1 className="font-poppinsBold font-bold text-2xl">
            Manfaat Konsumsi Brokoli Untuk Anak
          </h1>
          <h1 className="font-bold font-poppinsSemiBold text-lg">
            Ayu Harwati
          </h1>
          <h1 className="font-poppinsMedium py-2">
            Jumat, 31 Mei 2024 09:45 WIB
          </h1>
          <img src={Image2} alt="" style={{ width: "831px", height: "375px" }} />
          <p className="text-left text-primary font-poppinsMedium py-2">
            <i>Ilustrasi Anak Sedang Memegang Brokolo</i>
          </p>
          <hr />
        </header>

        <div className="text-left">
          <p>
            Beberapa anak mungkin tidak menyukai brokoli karena rasanya langu.
            Beberapa anak tidak menyukai brokoli dan terkadang membuang makanan
            bila diberi sayuran brokoli. Padahal brokoli memiliki khasiat untuk
            kesehatan anak. Tanaman brokoli merupakan salah satu jenis tanaman
            yang menjadi pilihan untuk diaplikasikan dengan beberapa jenis
            tanaman yang mengandung serat lainnya, dikarenakan brokoli memiliki
            beberapa kandungan nutrisi yang kaya akan vitamin dan mineral.
            Kandungan vitamin yang dimiliki di antaranya vitamin A, C, E, K, B1,
            B6 yang cukup tinggi sehingga bisa dikolaborasikan dengan serat
            fungsional yang dapat menyebabkan ketidaktersediaan (unavailability)
            zat gizi seperti vitamin-vitamin yang larut dalam lemak.{" "}
          </p>{" "}
          <br />
          <p>
            {" "}
            Menurut data United State Department of Agricultural / USDA brokoli
            mengandung protein, karbohidrat, serat, kalsium, zat besi,
            magnesium, fosfor, kalium, natrium, mangan, vitamin A, vitamin B,
            vitamin C, dan vitamin K. Brokoli merupakan makanan rendah kalori,
            tanpa kolesterol. Brokoli mengandung sulforaphane yang bersifat
            antioksidan sebagai penangkal radikal bebas. Brokoli mengandung
            karotenoid (lutein dan zeaxanthin) bermanfaat untuk kesehatan anak.
          </p>{" "}
          <br />
          Berikut ini manfaat brokoli apabila mengonsumsinya yaitu :
          <h1 className="font-poppinsMedium font-bold">
            1. Meningkatkan Daya Tahan Tubuh
          </h1>
          <p>
            Mempunyai kekebalan tubuh yang kuat merupakan cara untuk menjaga
            kesehatan anak. Dengan kekebalan tubuh yang kuat, maka anak
            terhindar dari penyakit. Brokoli mengandung vitamin C dan senyawa
            antioksidan sehingga dapat melawan radikal bebas, menangkal kuman
            penyebab infeksi, dan memperkuat jaringan tubuh anak.{" "}
          </p>{" "}
          <br />
          <h1 className="font-poppinsMedium font-bold">
            2. Memelihara Kesehatan Pencernaan Anak{" "}
          </h1>
          <p>
            Kandungan serat dalam sayuran dapat membantu menjaga kesehatan
            pencernaan. Dengan memiliki pencernaan yang sehat, anak dapat
            terhindar gangguan pencernaan seperti sembelit. Kandungan serat
            brokoli cukup tinggi yakni sekitar 2,6 gram pada 100 gram brokoli.
          </p>{" "}
          <br />
          <h1 className="font-poppinsMedium font-bold">
            3. Menjaga Kesehatan Mata Anak
          </h1>
          <p>
            Brokoli dapat membantu menjaga kesehatan mata anak. Karena kandungan
            vitamin A pada brokoli, termasuk lutein dan zeaxanthin. Lutein dapat
            membantu melindungi mata dari kerusakan akibat sinar ultraviolet
            matahari dan cahaya biru dari perangkat elektronik seperti
            smartphone dan laptop.
          </p>{" "}
          <br />
          <h1 className="font-poppinsMedium font-bold">
            4. Menjaga Berat Badan Anak
          </h1>
          <p>
            Manfaat brokoli untuk anak lainnya adalah menjaga berat badan anak
            tetap ideal dan sehat. Pasalnya, brokoli merupakan makanan dengan
            kalori dan indeks glikemik yang rendah serta tinggi kandungan serat.
            Sebuah studi menyebutkan bahwa makan sayuran berserat tinggi dan
            rendah glikemik terkait dengan penurunan berat badan yang lebih
            besar daripada sayuran rendah serat dan tinggi glikemik. Hal ini
            tentunya bisa membantu mencegah obesitas pada anak di kemudian hari.
          </p>
        </div>
      </div>

            {/* Right */}
            <div className="w-1/2 px-12 mt-5 shadow-2xl border-black bg-white text-left">
                {/* Artikel */}
                <div className="mb-5">
                <h1>Artikel Populer</h1>
                <div className="flex pr-2 mt-5">
                    <img
                    src={Image2}
                    alt=""
                    style={{ width: "120.03px", height: "91px" }}
                    className="rounded-xl"
                    />
                    <div className="flex flex-col pl-2">
                    <p>5 Cara Ampuh Mengatasi Diare pada Anak</p>
                    <a href="" className="text-red-700 underline">
                        Baca Sekarang
                    </a>
                    </div>
                </div>

                {/* bagian 2 */}
                <div className="flex pr-2 py-5 mt-5">
                    <img
                    src={Image2}
                    alt=""
                    style={{ width: "120.03px", height: "91px" }}
                    className="rounded-xl"
                    />
                    <div className="flex flex-col pl-2">
                    <p>5 Cara Ampuh Mengatasi Diare pada Anak</p>
                    <a href="" className="text-red-700 underline">
                        Baca Sekarang
                    </a>
                    </div>
                </div>

                {/* Bagian 3 */}
                <div className="flex pr-2 mt-5">
                    <img
                    src={Image2}
                    alt=""
                    style={{ width: "120.03px", height: "91px" }}
                    className="rounded-xl"
                    />
                    <div className="flex flex-col pl-2">
                    <p>5 Cara Ampuh Mengatasi Diare pada Anak</p>
                    <a href="" className="text-red-700 underline">
                        Baca Sekarang
                    </a>
                    </div>
                </div>

                {/* Bagian 4 */}
                <div className="flex pr-2 py-5 mt-5">
                    <img
                    src={Image2}
                    alt=""
                    style={{ width: "120.03px", height: "91px" }}
                    className="rounded-xl"
                    />
                    <div className="flex flex-col pl-2">
                    <p>5 Cara Ampuh Mengatasi Diare pada Anak</p>
                    <a href="" className="text-red-700 underline">
                        Baca Sekarang
                    </a>
                    </div>
                </div>

                <div className="flex pr-2 mt-5">
                    <img
                    src={Image2}
                    alt=""
                    style={{ width: "120.03px", height: "91px" }}
                    className="rounded-xl"
                    />
                    <div className="flex flex-col pl-2">
                    <p>5 Cara Ampuh Mengatasi Diare pada Anak</p>
                    <a href="" className="text-red-700 underline">
                        Baca Sekarang
                    </a>
                    </div>
                </div>
                </div>

                {/* Berita */}
                <div className="mt-28">
                <h1>Berita Populer</h1>
                <div className="flex pr-2 mt-5">
                    <img
                    src={Image2}
                    alt=""
                    style={{ width: "120.03px", height: "91px" }}
                    className="rounded-xl"
                    />
                    <div className="flex flex-col pl-2">
                    <p>
                        Partisipasi Masyarakat di Posyandu Jadi Kunci Penurunan Stunting
                    </p>
                    <p>
                        <a href="" className="text-red-700">
                        PEMERINTAH{" "}
                        </a>{" "}
                        - <span></span>30/4/2024, 01:15 WIB
                    </p>
                    </div>
                </div>

                {/* bagian 2 */}
                <div className="flex pr-2 py-5 mt-5">
                    <img
                    src={Image2}
                    alt=""
                    style={{ width: "120.03px", height: "91px" }}
                    className="rounded-xl"
                    />
                    <div className="flex flex-col pl-2">
                    <p>
                        Hari Posyandu Nasional, Fahira Idras Paparkan 4 Langkah
                        Revitaslisasi Posyandu
                    </p>
                    <p>
                        <a href="" className="text-red-700">
                        MEGAPOLITAN
                        </a>{" "}
                        - <span></span>29/4/2024, 07:15 WIB
                    </p>
                    </div>
                </div>

                {/* Bagian 3 */}
                <div className="flex pr-2 mt-5">
                    <img
                    src={Image2}
                    alt=""
                    style={{ width: "120.03px", height: "91px" }}
                    className="rounded-xl"
                    />
                    <div className="flex flex-col pl-2">
                    <p>Tanggal 29 April 2024 Memperingati Hari Apa?</p>
                    <p>
                        <a href="" className="text-red-700">
                        NASIONAL
                        </a>{" "}
                        - <span></span>29/04/2024, 18:32 WIB
                    </p>
                    </div>
                </div>

                {/* Bagian 4 */}
                <div className="flex pr-2 py-5 mt-5">
                    <img
                    src={Image}
                    alt=""
                    style={{ width: "120.03px", height: "91px" }}
                    className="rounded-xl"
                    />
                    <div className="flex flex-col pl-2">
                    <p>Sejahtera Dorong Pemberdayaan Keluarga, Pj Ketua</p>
                    <p>
                        <a href="" className="text-red-700">
                        REGIONAL
                        </a>{" "}
                        - <span></span>30/4/2024, 01:15 WIB
                    </p>
                    </div>
                </div>

                <div className="flex pr-2 mt-5">
                    <img
                    src={Image}
                    alt=""
                    style={{ width: "120.03px", height: "91px" }}
                    className="rounded-xl"
                    />
                    <div className="flex flex-col pl-2">
                    <p>Syarat Menjadi Kader Posyandu dan Perannya</p>
                    <p>
                        <a href="" className="text-red-700">
                        NASIONAL
                        </a>{" "}
                        - <span></span>30/4/2024, 01:15 WIB
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ArticlePage2;
