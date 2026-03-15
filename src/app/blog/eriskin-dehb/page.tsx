import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../depresyon/page.module.css';

export const metadata: Metadata = {
    title: 'Erişkin DEHB Rehberi | Ankara Yetişkin Dikkat Dağınıklığı ve Odaklanma',
    description:
        'Yetişkinlerde Dikkat Eksikliği ve Hiperaktivite Bozukluğu, erteleme döngüleri ve iş hayatına etkileri hakkında Eryaman (Ankara) klinik bilgi platformu.',
    alternates: { canonical: 'https://drabdullahmaras.com/blog/eriskin-dehb' },
    openGraph: {
        title: 'Erişkin DEHB Bilgi ve Çözüm Ağı',
        type: 'website', locale: 'tr_TR',
    },
};

const dehbArticles = [
    {
        title: 'Erişkin DEHB Nedir? (Yetişkinlerde Odak Sorunu)',
        path: '/blog/eriskin-dehb-nedir',
        description: 'Odaklanma zorlukları, zaman algısındaki körlük ve içsel hiperaktivitenin zeka veya yetenekle ilgisi olmayan nörobiyolojik tıbbi tanımı.',
    },
    {
        title: 'Erişkin DEHB Belirtileri Nelerdir?',
        path: '/blog/eriskin-dehb-belirtileri-nelerdir',
        description: 'Çocukluktan yetişkinliğe taşınan ve günlük yaşantıda ilişkileri veya iş performansını yıkan ana şikayetlerin geniş özetleri.',
    },
    {
        title: 'Dikkat Dağınıklığı mı DEHB mi?',
        path: '/blog/dikkat-daginikligi-mi-dehb-mi',
        description: 'Her geçici unutkanlık veya stres altındaki odaklanma zorluğu DEHB midir? Ayrımları nasıl belirlenir ve ne zaman klinik bir şüphe gerekir?',
    },
    {
        title: 'Sürekli Erteleme Davranışı Neden Olur?',
        path: '/blog/surekli-erteleme-davranisi-neden-olur',
        description: 'Görevleri daimi olarak son dakikaya bırakma (procrastination) döngüsünün beynin dopamin sistemindeki ve yürütücü işlevlerindeki biyolojik karşılığı.',
    },
    {
        title: 'Erişkin DEHB İş Hayatını Nasıl Etkiler?',
        path: '/blog/eriskin-dehb-is-hayatini-nasil-etkiler',
        description: 'Toplantılarda odaklanamama, sürekli iş değiştirme eğilimi, projeleri zamanında bitirememe ve dürtüsel kararların kariyer üzerindeki mesleki faturası.',
    },
    {
        title: 'DEHB ve Anksiyete Arasındaki İlişki',
        path: '/blog/dehb-ve-anksiyete-arasindaki-iliski',
        description: 'Odaklanamadığı veya sürekli hata yaptığı için kendi kapasitesinden korkan hastanın giderek yaygın anksiyete (kaygı) geliştirmesi süreci.',
    },
    {
        title: 'Erişkin DEHB Nasıl Anlaşılır?',
        path: '/blog/eriskin-dehb-nasil-anlasilir',
        description: 'Kan veya MR testleri ile değil, uzman klinik gözlem ve ayrıntılı hasta öyküsü eşliğinde teşhis edilen yetişkin DEHB psikiyatrik değerlendirme adımları.',
    }
];

export default function EriskinDehbHub() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContainer}`}>
                    <div className={styles.heroIcon}>🎯</div>
                    <h1>Erişkin DEHB Kütüphanesi</h1>
                    <p className={styles.heroDesc}>
                        Yalnızca çocuklara ve öğrencilere atfedilen Dikkat Eksikliği ve Hiperaktivite Bozukluğu, modern tıp verilerine göre teşhisi gözden kaçmış sayısız yetişkinin hayatını da arka planda sessizce yönetmektedir. Bu alan, odaklanmakta zorlanan, işleri hep erteleyen, dürtüsel (ani) kararlarla hem meslek hem evlilik yaşantısında tükenmişlikleri göğüslemeye çalışan <strong>yetişkin (adult) hastalarımıza</strong> rehber olması amacı ile tasarlanmıştır.
                    </p>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <div className={styles.introBlock}>
                        <h2>Bu İçerikler Kimler İçin Hazırlandı?</h2>
                        <p>Eğer "Bütün gün bilgisayar başında oturmama rağmen bir satır yazamadım", "Her işi son saat stresine kadar asla organize edemiyorum", "Eşime tahammül edemeden aniden öfkelenip sonra aşırı pişmanlık çekiyorum" ya da "İçimde bir motor çalışıyor ve asla susmuyor" diyorsanız; sorun karakter zayıflığınız olmayabilir. Nörobiyolojik (beynin kimyası) bir zemin araştırması için yetişkin DEHB spektrumunda dolanıyor olabilirsiniz. Aşağıda uzman görüşüyle detaylandırılmış her makale, beynin "bilgi işleme" kusurunu incelemektedir.</p>

                        <div className="info-banner" style={{ margin: 'var(--space-6) 0' }}>
                            <strong>📌 Kullanım ve Klinik Başvuru Uyarıları</strong>
                            Okuduğunuz maddelerin sizdeki varlığı doğrudan bir "Erişkin DEHB" etiketi olduğu anlamına gelmez (her hastalıkta olduğu gibi). Psikiyatrist Ankara (Eryaman) bölgesinde hekimimiz Uzm. Dr. Abdullah Maraş, bu "Acaba Dikkat Dağınıklığım Mı Var Yoksa Hastalık Mı" sorusunu, erişkin hasta psikiyatrisi normlarında (çocuklar hariç) bizzat birebir muayenede yanıtlamaktadır. Hedef, potansiyelin önüne geçen bu engeli bilimle yönetmektir.
                        </div>

                        <Link href="/hizmetler/eriskin-dehb" className="btn btn--primary" style={{ display: 'inline-block' }}>
                            Ankara Eryaman Erişkin DEHB Değerlendirme Süreci →
                        </Link>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>Daha Fazla Oku: Erişkin DEHB Kütüphanesi</h2>

                    <div className={styles.articleGrid}>
                        {dehbArticles.map((article, idx) => (
                            <Link href={article.path} key={idx} className={styles.articleCard}>
                                <div className={styles.cardIcon}>❖</div>
                                <h3>{article.title}</h3>
                                <p>{article.description}</p>
                                <span className={styles.readMore}>Hekim Notunu Oku →</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section bg-primary" style={{ color: 'white', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ color: 'white', marginBottom: 'var(--space-4)' }}>Odak Gücünüz Sizi Kaybetmesin</h2>
                    <p style={{ opacity: 0.9, marginBottom: 'var(--space-6)', fontSize: '1.25rem' }}>
                        Yetişkin olarak hayatınızı parçalarına ayıran "Bir şeye 5 saniye bile yoğunlaşamama" veya
                        "Her şeyi erteleyip hayatı kaçırma" sarmalına; Ankara Eryaman ofisimizde sadece bir karakter
                        meselesi gibi değil, "tıbbi nörobiyolojik değerlendirme" adımı (bireysel değerlendirme) ile müdahale (psikiyatrik görüşme)
                        edilebilmektedir.
                    </p>
                    <Link href="/randevu" className="btn btn--light btn--lg">
                        Psikiyatri Randevusu Seçimi
                    </Link>
                </div>
            </section>

            {/* Schema Data */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "name": "Erişkin DEHB Bilgi Kütüphanesi",
                    "description": "Yetişkinlerde dehb ve odaklanma zorlukları üzerine Ankara Eryaman klinik bilgileri.",
                    "url": "https://drabdullahmaras.com/blog/eriskin-dehb",
                    "mainEntity": {
                        "@type": "ItemList",
                        "itemListElement": dehbArticles.map((article, index) => ({
                            "@type": "ListItem",
                            "position": index + 1,
                            "url": "https://drabdullahmaras.com" + article.path,
                            "name": article.title
                        }))
                    }
                })
            }} />
        </>
    );
}
