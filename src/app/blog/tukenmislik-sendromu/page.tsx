import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon/page.module.css';

export const metadata: Metadata = {
    title: 'Tükenmişlik Sendromu Bilgi Kütüphanesi | İş Hayatı ve Yorgunluk',
    description:
        'Yetişkinlerde iş yorgunluğu, hayata karşı motivasyon kaybı, duygusal tükenmişlik ve kronik stresle başa çıkma üzerine Eryaman (Ankara) klinik değerlendirme kütüphanesi.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/tukenmislik-sendromu' },
    openGraph: {
        title: 'Tükenmişlik ve Burnout: Neden Hiçbir Şeye Enerjimiz Yok?',
        type: 'website', locale: 'tr_TR',
    },
};

const burnoutArticles = [
    {
        title: 'Tükenmişlik Sendromu Nedir?',
        path: '/blog/tukenmislik-sendromu-nedir',
        description: 'Aylarca ve yıllarca omuzlanan yoğun mesleki stresi taşıyan bünyenin; duygusal, fiziksel ve zihinsel iflas (çöküş) eşiğini tanıtan ve tıbben yapılandıran rehber.',
    },
    {
        title: 'Tükenmişlik Belirtileri Nelerdir?',
        path: '/blog/tukenmislik-sendromu-belirtileri-nelerdir',
        description: 'Tükenmişliğin; unutkanlıktan saç dökülmesine, her şeye tahammülsüz olmaktan sabah işe gidildiğinde midede hissedilen o kasılmalara uzanan geniş çaplı belirtileri.',
    },
    {
        title: 'Sürekli Yorgun Hissetmek Psikolojik mi?',
        path: '/blog/surekli-yorgun-hissetmek-psikolojik-mi',
        description: 'Ne kan tahlilinde ne de vitaminde bir sorun olmamasına rağmen; kişiyi adeta yataktan kazıyarak (süründürerek) kaldıran o ağır enerjisizliğin ardındaki zihinsel motor çöküşü.',
    },
    {
        title: 'Motivasyon Kaybı Neden Olur?',
        path: '/blog/motivasyon-kaybi-neden-olur',
        description: 'Daha düne kadar işi severek ve koşturarak yapan profesyonelin, bir gün aniden "Bugün de bitse de gitsek, ne yaparsak yapalım takdir yok zaten" deme sürecine girmesi.',
    },
    {
        title: 'İşe Gitmek İstememe Hali',
        path: '/blog/ise-gitmek-istememe-hali',
        description: 'Salt bir üşengeçlik olmayan, aslen işyerini bir savaş meydanı ya da ezici bir mobbing hapishanesi olarak zihninde okuyan çalışanın o büyük fobik (sıkıntılı) reaksiyonu.',
    },
    {
        title: 'Tükenmişlik ve Depresyon Arasındaki Fark',
        path: '/blog/tukenmislik-ve-depresyon-arasindaki-fark',
        description: 'Her tükenmişlik depresyon yaratır mı? İş yeri krizleri ile mutlak klinik çökkünlüğün (Majör Depresif Bozukluğun) o çok karıştırılan ince bilimsel ayrımı.',
    },
    {
        title: 'Tükenmişlik Ne Kadar Sürer?',
        path: '/blog/tukenmislik-ne-kadar-surer',
        description: 'Kendi kendine tatile çıkarak geçmesi beklenen ancak iyileşmeyen o yıpranmanın, klinik görüşme süreciyle nasıl onarılacağı ve kalıcılık riskleri.',
    }
];

export default function TukenmislikHub() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContainer}`}>
                    <div className={styles.heroIcon}>🔋</div>
                    <h1>Tükenmişlik (Burnout) Kültürü Kütüphanesi</h1>
                    <p className={styles.heroDesc}>
                        Hayatın gereğinden fazla yüklediği o sorumlulukları, "ben taşırım, ben hallederim" diyerek sessizce sinesine
                        çeken ancak sonunda duygusal kapasitesi tamamen delinen (patlayan) yetişkin hastalara yönelik derlenmiş,
                        iş hayatının ve özel ev yaşamının kişiyi dibe çeken ağırlıklarıyla klinik olarak yüzleşme (Topical) bilgi alanıdır.
                    </p>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <div className={styles.introBlock}>
                        <h2>Bu İçerikler Kimler İçin Hazırlanmıştır?</h2>
                        <p>Eğer siz de kendinizi "Tüm hücrelerime kadar tükenmişliğin sarmalındayım, bırakın proje üretmeyi,
                            telefonumu çaldığında bile öfkeden deliye dönüyorum" veya "Eşime karşı eskisi gibi hiçbir duygusal barajım (tahammülüm) kalmadı"
                            diyor ve sabaha kadar bu endişeyle kıvranıyorsanız; bu kütüphane mesleki ve duygusal (kronik)
                            ezilme yaşayan yetişkin hastaları klinik değerlendirmeye yönlendirmek için tıp zemininde kurulmuştur.</p>

                        <div className="info-banner" style={{ margin: 'var(--space-6) 0' }}>
                            <strong>📌 Kullanım Bağlamı ve Tıbbi Hukuk</strong>
                            Bu içerik kümesi erişkin ve 16 yaş üzeri ergen odaklıdır; 16 yaş altı çocuk yaş veya ebeveyn (çocuk okul eğitimleri) zorluklarını kapsamaz.
                            Verilen tavsiyeler ya da tanımlar kesin tedavi vaadi barındırmadığı gibi; tanı ve kalıcı çözümler kişinin kendine has yapısının psikiyatrik konsültasyona, (hastalığı okuma vizyonuyla) bireysel değerlendirmeye açılmasıyla Uzm. Dr. Abdullah Maraş / Ankara kliniğimizde elde edilebilir.
                        </div>

                        <Link href="/hizmetler/tukenmislik-sendromu" className="btn btn--primary" style={{ display: 'inline-block' }}>
                            Ankara Eryaman Tükenmişlik Değerlendirme Süreci →
                        </Link>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>Burnout (Tükenmişlik) İçerik Otoritesi</h2>

                    <div className={styles.articleGrid}>
                        {burnoutArticles.map((article, idx) => (
                            <Link href={article.path} key={idx} className={styles.articleCard}>
                                <div className={styles.cardIcon}>❖</div>
                                <h3>{article.title}</h3>
                                <p>{article.description}</p>
                                <span className={styles.readMore}>Konuyu Genişlet →</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section bg-primary" style={{ color: 'white', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ color: 'white', marginBottom: 'var(--space-4)' }}>Son Şarjınızı (Enerjinizi) Kendi İçinize Harcayın</h2>
                    <p style={{ opacity: 0.9, marginBottom: 'var(--space-6)', fontSize: '1.25rem' }}>
                        Daha fazla dayanmak sizin madalyanız olmayacak; bedeninizin o tamamen kapanan (iflas eden) sistemine
                        inadı bıraktığınızda ve Eryaman bölgemizdeki kliniğimizle asıl o yıkımı (tükenmişliği) terapötik ve tıp tabanında değerlendirmeyi (zihni yenilemeyi) seçtiğinizde yeni bir güneş asıl o zaman doğacaktır.
                    </p>
                    <Link href="/randevu" className="btn btn--light btn--lg">
                        Psikiyatrik Muayeneyi Düzenle
                    </Link>
                </div>
            </section>

            {/* Schema Data */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "name": "Tükenmişlik Sendromu Bilgi Kütüphanesi",
                    "description": "Yetişkinlerde mesleki duygusal tükenmişlik ve motivasyonsuzluk (Burnout) problemleri Ankara klinik bilgileri.",
                    "url": "https://www.drabdullahmaras.com.tr/blog/tukenmislik-sendromu",
                    "mainEntity": {
                        "@type": "ItemList",
                        "itemListElement": burnoutArticles.map((article, index) => ({
                            "@type": "ListItem",
                            "position": index + 1,
                            "url": "https://www.drabdullahmaras.com.tr" + article.path,
                            "name": article.title
                        }))
                    }
                })
            }} />
        </>
    );
}
