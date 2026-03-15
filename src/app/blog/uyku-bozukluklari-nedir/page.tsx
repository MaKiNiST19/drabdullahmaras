import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Uyku Bozukluğu Nedir? | Yetişkin Uykusuzluk Belirtileri',
    description:
        'Uyku bozukluğu tanımı, belirtileri ve psikiyatrik zeminde gece uyanma/uykuya dalamama sorunları üzerine uzman bilgilendirme sayfası.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/uyku-bozukluklari-nedir' },
    openGraph: {
        title: 'Uyku Bozukluğu Nedir ve Psikiyatri Nasıl Ele Alır?',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Uyku bozukluğu teşhisi sadece laboratuvarda mı konur?',
        answer: 'Hayır, klinik psikiyatri ortamında detaylı hastanın uyku alışkanlıkları ve anksiyete/depresyon seviyesinin ölçüldüğü "psikiyatrik görüşme" eşliğinde büyük oranda belirlenebilmektedir.',
    },
    {
        question: 'Sabahları hiç dinlenmemiş kalkmak bir bozukluk mudur?',
        answer: 'Eğer bir birey 8 saat uygun odada fiziksel olarak yatıp yine de "üzerimden kamyon geçmiş gibi yorgunum" diyerek sabah işe sürünerek gidiyorsa, uykunun kalitatif (derin) kısmı kesinlikle bozuktur.',
    },
    {
        question: 'Kaç gün uykusuz kalınırsa doktora gidilmelidir?',
        answer: 'Sınav ya da ölüm gibi geçici bir stres yüzünden birkaç gün uykusuz kalınabilir, ancak hiçbir belirgin travma yokken ardışık haftalar süren gece uyanmaları uzmanlık desteğini zaruri kılar.',
    },
    {
        question: 'Alkol uykuyu düzene sokar mı?',
        answer: 'Bu yetişkinler arasındaki en büyük tıbbi yanılgılardan biridir; alkol kişiyi uyuşturup sızdırsa da, beynin sağlıklı onarım uykusuna (REM) geçişini engeller ve sabaha karşı terlemeyle veya çarpıntıyla uyandırır.',
    },
    {
        question: 'Her uyuyamayan insanda depresyon var diyebilir miyiz?',
        answer: 'Elbette kesin ve tam her kimsede demiyoruz. Ancak kronik insomniası ve uyku eksikliği çeken yetişkinlerin önemli bir çoğunluğu bu durumu maskelenmiş farklı klinik psikiyatrik (yüklerle) boğuşurken örtük yaşamaktadır.',
    },
];

export default function UykuBozukluklariNedirBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/uyku-bozukluklari">Uyku Bozuklukları</Link><span>/</span>
                        <span>Genel Tanım</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Psikiyatri, Uykusuzluk, İnsomnia</span>
                        <time dateTime="2026-06-25">25 Haziran 2026</time>
                        <span>•</span><span>5 dk okuma</span>
                    </div>
                    <h1>Uyku Bozukluğu Nedir?</h1>
                    <p className={styles.heroDesc}>
                        Uyku bozukluğu; bir bireyin biyolojik onarım ve zihinsel dinlenme aracı olan
                        uyku eylemine sağlıklı biçimde başlayamaması, uykuyu sürdürememesi veya fazlasıyla uzun
                        kalmasına rağmen dinlendirici (kaliteli) uyku mimarisi alamamasıdır.
                        Ortaya çıkan bu klinik tablonun (insomnia, gece uyanmaları) belirtileri kişiden
                        kişiye değişebilir ve psikiyatrik muayene gerektirir.
                    </p>
                    <div className={styles.author}>
                        <div className={styles.authorIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <div><strong>Uzm. Dr. Abdullah Maraş</strong><span>(Yetişkin Temelli Ruh Sağlığı)</span></div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.articleGrid}>
                        <article className={styles.article}>

                            <h2 id="genel-bakis">Uyku Kaybının Bedeli</h2>
                            <p>
                                İnsan vücudu bir jeneratördür ve bu bedenin gün içerisindeki tüm stresi, öğrenilen
                                bilgileri işlemlemesi ve hasarlı kasları yenilemesi "derin uyku" esnasında gerçekleşir.
                                Ancak <strong>"Geceleri sürekli dönüyorum"</strong> ya da <strong>"Yastığa başımı koyduğum an içime bir sıkıntı basıyor"</strong>
                                şeklinde başlayan durumlar; sadece yorgunluk değil, beyindeki o stres hormonunun
                                hala tam kapasite aktif (savaş-kaç modunda) olduğunun kanıtıdır.
                            </p>

                            <h2 id="klinik-tutar">Uyku ve Psikiyatrinin Ayrılmaz Bağı</h2>
                            <p>
                                Çoğu zaman bir hastanın tek başına "Ben uykusuzluk hastasıyım" demesinin tıbbi (psikiyatrik)
                                yönden izahı sığ kalır. Çünkü uyku; <Link href="/hizmetler/anksiyete">Anksiyete bozukluğunda</Link> da,
                                <Link href="/hizmetler/depresyon">çökkünlükte (majör depresyonda)</Link> de veya büyük bir travma
                                sonrası bozuklukta da ilk vurulan kaledir. Doktorlar uykusuzluğu düzeltirken o ilk "kalenin
                                içindeki asıl yıkıcı sebebi" bulup tedavi etmekle (Bireysel Değerlendirme) yükümlüdür.
                            </p>

                            <ul>
                                <li>Uykuya Dalamamak: Beyin hala dış dünyadan bir emir bekliyor ve faturayı dert ediyordur.</li>
                                <li>Gece Sık Uyanmak: Kalp atışı ve nefes darlığı (bedensel uyaranlar) kişiyi uyararak, beynin en ufak bir seste tetikte uyanmasından kaynaklıdır.</li>
                            </ul>

                            <h2 id="nasil-cozulecek">Eryaman-Ankara Yaklaşımı</h2>
                            <p>
                                Reçetesiz internet çözümlerinin ya da kulaktan dolma uyku damlalarının aksine, Erişkin hastaların
                                beynindeki o kimyasal ahengin <strong>psikiyatrik süreçlerle (ilaç/terapi konsültasyonu)</strong>
                                bir <Link href="/hizmetler/uyku-bozukluklari">Ankara Eryaman uyku bozuklukları değerlendirme sürecine</Link>
                                kavuşturulması son derece dirayetli bir tıp kuralıdır. Hiçbir zaman bitap düşmüş bir zihin
                                kendini o dipsiz yorgunluk sarmalından, klinik (doktor) takibi olmadan %100 bir kolaylıkla çıkaramaz.
                            </p>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Klinik Uyarısı</strong>
                                Belirtilen hastalık ve uyku evreleri (insomnia vb.) erişkin klinik kapsamındadır. Belirtiler kişiden kişiye
                                değişebilmekte ve kesin bir reçete her vakaya aynı sonla cevap (garanti) vermemektedir. Uykuyu dengeleyen mekanizmalar
                                için birebir hekim müracaatı tıp etiğinin en büyük gerçeğidir.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <p>Her sabah o yataktan yüzünüz asık kalkmak, iş yerinde dikkatsizlikle boğuşmak kader değildir. Yüz yüze değerlendirmenizi hekimden alarak uykunuzla barışın.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Klinik Uyku Değerlendirmesi →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Kaliteli Uyku Vakti</h3>
                                <p>Kliniğimizde ruhsal uyaranlarınızı ve beden sirkadiyen dengenizi tıp bilimi ile tartalım.</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Anasayfa Randevusu</Link>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>İçerik Uzantıları</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/blog/uyku-bozukluklari">Uyku Detaylı Kütüphanesi</Link></li>
                                    <li><Link href="/blog/uykusuzluk-neden-olur">Uykusuzluğu Tetikleyenler Neler?</Link></li>
                                    <li><Link href="/hizmetler/anksiyete">O Evham Yatağa Neden Geliyor?</Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* Application / JSON */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org", "@type": "FAQPage",
                    mainEntity: faqItems.map(f => ({
                        "@type": "Question", name: f.question,
                        acceptedAnswer: { "@type": "Answer", text: f.answer },
                    })),
                })
            }} />
        </>
    );
}
