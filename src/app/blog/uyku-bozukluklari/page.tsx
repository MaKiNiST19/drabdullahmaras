import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon/page.module.css';

export const metadata: Metadata = {
    title: 'Uyku Bozuklukları Bilgi Kütüphanesi | Uykusuzluk ve Çözümleri',
    description:
        'Uykusuzluk, gece sık uyanma sorunu, uyku kalitesi ve yataktaki kaygı döngüleriyle mücadele eden yetişkinlere yönelik Eryaman (Ankara) klinik bilgi platformu.',
    alternates: { canonical: 'https://drabdullahmaras.com/blog/uyku-bozukluklari' },
    openGraph: {
        title: 'Yetişkinlerde Uyku Bozuklukları: İnsomnia ve Gece Uyanmaları',
        type: 'website', locale: 'tr_TR',
    },
};

const uykuArticles = [
    {
        title: 'Uyku Bozukluğu Nedir?',
        path: '/blog/uyku-bozukluklari-nedir',
        description: 'Vücudun en hayati yenilenme süreci olan uykunun anksiyete, depresyon veya kronik stres ile nasıl klinik ölçüde sekteye uğradığının genel tanımı.',
    },
    {
        title: 'Uykusuzluk Neden Olur?',
        path: '/blog/uykusuzluk-neden-olur',
        description: 'Fiziksel hastalıkları elediğimizde zihinde uykusuzluğu yaratan o "durmayan motorun" (kaygı ve evhamların) uyku fizyolojisi üzerindeki etkileri.',
    },
    {
        title: 'Gece Sık Uyanma Nedenleri',
        path: '/blog/gece-sik-uyanma-nedenleri',
        description: 'Tehlike algısına şartlanmış ve derin uyku döngüsüne geçemeyen yetişkin beyninin sabaha karşı sergilediği parçalı şok uyanışları.',
    },
    {
        title: 'Uykuya Dalamama Sorunu',
        path: '/blog/uykuya-dalamama-sorunu',
        description: 'Gün içindeki tempodan yatağa geçişte, kafaya takılan binlerce düşünce nedeniyle yastıkta saatlerce kıvranmanın psikiyatrik öyküsü.',
    },
    {
        title: 'Sabah Erken Uyanma ve Ruh Sağlığı',
        path: '/blog/sabah-erken-uyanma-ve-ruh-sagligi',
        description: 'Özellikle majör çökkünlük (depresyon) tablosu ile doğrudan bağlantılı olan sabaha karşı 03:00 veya 04:00 uyanışlarının klinik alarmı.',
    },
    {
        title: 'Aşırı Uyuma (Hipersomnia) Nedir?',
        path: '/blog/asiri-uyuma-hipersomnia-nedir',
        description: 'Bireyin uyanık kalarak o acıya, iş stresi veya travmaya katlanamadığı için bedeni gün boyu savunma (kapatma) moduna aldığı uyku kaçışları.',
    },
    {
        title: 'Uyku Hijyeni Nasıl Sağlanır?',
        path: '/blog/uyku-hijyeni-nasil-saglanir',
        description: 'Mavi ışık ve yanlış alışkanlıkların resetlenerek; uyku rutininin ve karanlık mimarisinin tıbbi olarak sağlıklı temellere nasıl kavuşturulacağı.',
    }
];

export default function UykuBozukluklariHub() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContainer}`}>
                    <div className={styles.heroIcon}>🌙</div>
                    <h1>Uyku Bozuklukları Kütüphanesi</h1>
                    <p className={styles.heroDesc}>
                        Gecenin en karanlık ve sessiz anları, iç dünyası fırtınalarla dolu yetişkin hastalarımız için bazen
                        saatlerce süren bir işkence ve yatakta dönme seansına dönüşmektedir. Bu "kapanamayan" beyin; uyku kalitesi bozulmuş,
                        gece sık uyanan (insomnia ve diğer süreçlerle boğuşan) ve ertelenmeyen uyku yoksunluğuyla (uykusuzluk) her yeni gününün
                        verimini düşüren bireylere yönelik özel olarak klinik (yetişkin psikiyatrisi) bir çerçevede dizayn edilmiştir.
                    </p>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <div className={styles.introBlock}>
                        <h2>Bu İçerikler Kimler İçin Hazırlandı?</h2>
                        <p>Eğer "Saatlerce yatağımda öylece tavana bakıyorum", "Sabahın köründe aniden bir kalp çarpıntısıyla fırlayıp
                            uyanıyorum" veya "Günde 12 saat uyusam bile kendimi dayak yemiş gibi bitkin hissediyorum" diyenlerdenseniz;
                            bilmelisiniz ki asıl hastalığınız "uykusuzluk" değil, çoğunlukla altta sessizce yatan panik, kaygı ve
                            gizli depresif evhamlardır. Bu içerik havuzu tam da bu psikiyatrik sarmalı ayrıştırmak için inşa edildi.</p>

                        <div className="info-banner" style={{ margin: 'var(--space-6) 0' }}>
                            <strong>📌 Kullanım ve Klinik Başvuru Uyarıları</strong>
                            Bilgi amaçlı olan bu yazılar 16 yaş altı çocukların uyku problemlerini kapsamaz. Kliniğimizde <strong>16 yaş ve üzeri ergenlere yönelik</strong> değerlendirme yapılmaktadır. Psikiyatrist Ankara (Eryaman - Altay Mh.) bölgesinde hekimimiz Uzm. Dr. Abdullah Maraş, "sadece eczaneden uyku takviyesi alınacak zannedilen bu tablonun", gerçek bir yetişkin hasta psikiyatrisi normlarında; hastanın hayat hikayesi doğrultusunda birebir muayenede yanıtlamakta ve kişiye has bireysel değerlendirme çizelgesi ile yürütmektedir.
                        </div>

                        <Link href="/hizmetler/uyku-bozukluklari" className="btn btn--primary" style={{ display: 'inline-block' }}>
                            Ankara Eryaman Uyku Bozuklukları Değerlendirme Süreci →
                        </Link>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>Daha Fazla Oku: Uyku ve İnsomnia Kütüphanesi</h2>

                    <div className={styles.articleGrid}>
                        {uykuArticles.map((article, idx) => (
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
                    <h2 style={{ color: 'white', marginBottom: 'var(--space-4)' }}>Uykusuzluğunuz Kaygılarınızı Büyütmesin</h2>
                    <p style={{ opacity: 0.9, marginBottom: 'var(--space-6)', fontSize: '1.25rem' }}>
                        Gece kaliteli ve dinlendirici uykuyu yitirmeniz aslında zihninizin "Bir şeyler ters gidiyor ve stresim var, bu yüzden tehlikedeyim uyuyamıyorum"
                        çığlığıdır. Ankara Eryaman kliniğimizde, o "uyuyamama halinin" sırf geçici bir yorgunluk gibi değil,
                        psikiyatrik görüşme ile derin bir tıbbi nörobiyolojik değerlendirmeye (bireysel klinik) tabi tutulması planlanır.
                    </p>
                    <Link href="/randevu" className="btn btn--light btn--lg">
                        Uyku Kalitesi İçin Hekim Randevusu
                    </Link>
                </div>
            </section>

            {/* Schema Data */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "name": "Uyku Bozuklukları Bilgi Kütüphanesi",
                    "description": "Yetişkinlerde uyku ve uykusuzluk zorlukları üzerine Ankara Eryaman klinik bilgileri.",
                    "url": "https://drabdullahmaras.com/blog/uyku-bozukluklari",
                    "mainEntity": {
                        "@type": "ItemList",
                        "itemListElement": uykuArticles.map((article, index) => ({
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
