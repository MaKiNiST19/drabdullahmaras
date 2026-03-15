import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Bipolar Bozukluk Nedir? Kısa Özeti | Psikiyatri Kliniği',
    description:
        'Bipolar bozukluk nedir? İki uçlu duygu durum hastalığının temel tanımı, mani ile depresyon evreleri ve yetişkinlerde psikiyatrik süreç.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/bipolar-bozukluk-nedir' },
    openGraph: {
        title: 'Bipolar Bozukluk Nedir? Temel Kılavuz',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Bipolar bozukluk nedir, tıp dilindeki karşılığı nedir?',
        answer: 'Bipolar bozukluk, beynin enerji ve duygu regülasyonunda yaşanan biyolojik aksaklıklar sebebiyle kişinin birbirine çok zıt iki evre (aşırı taşkınlık ve tam bir çökkünlük) yaşamasını tarifleyen (eski adıyla Manik Depresif) bir psikiyatrik hastalıktır.',
    },
    {
        question: 'Çocuğum çok hırçın, bipolar mıdır?',
        answer: 'Kliniğimiz yalnızca yetişkin hasta kabul etmektedir. Bipolar bozukluk genelde genç yetişkinlik çağında (20’ler civarı) veya 30’lu yaşların başında ilk spesifik atağını verir. Ancak kesin tanı asla ebeveyn gözlemiyle konulmaz; hekim konsültasyonu şarttır.',
    },
    {
        question: 'Çaresi olan geçici bir durum mu?',
        answer: 'Kendiliğinden geçmesi (iyileşmesi) çok zordur; lakin "%100 mucize başarı" vadeden yanlış reklamlara aldanılmamalıdır. Psikiyatri bilimi, atak sayısını ve şiddetini kontrol altında tutarak (bireysel değerlendirme ile) kişiyi tamamen sağlıklı bir yaşam formunda sabitleyebilir.',
    },
    {
        question: 'Ne zaman doktora gitmeliyim?',
        answer: 'Kendinizde veya yakınınızda "normalin çok dışında bir özgüven, anlamsız para harcama, uyumamasına rağmen hiperaktif hissetme" ya da bunun tam tersi "haftalarca odadan çıkmama" gibi davranış değişimlerini fark ettiğiniz an gecikmeden gitmelisiniz.',
    },
    {
        question: 'İlaç kullanmadan atlatamam mı?',
        answer: 'Bu hastalık doğrudan beyin kimyasını (amigdala vb.) yöneten devasa bir mekanizmadır. İradenizle durdurmaya çalışmak okyanustaki dalgayı elinizle itmek gibidir. Doktorunuzun önereceği tıbbi formülasyon esastır.',
    }
];

export default function BipolarNedirSnippet() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/bipolar">Bipolar Bozukluk</Link><span>/</span>
                        <span>Bipolar Bozukluk Nedir</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Rehber (Hızlı Bakış)</span>
                        <time dateTime="2026-07-02">2 Temmuz 2026</time>
                        <span>•</span><span>4 dk okuma</span>
                    </div>
                    <h1>Bipolar Bozukluk Nedir?</h1>
                    <p className={styles.heroDesc}>
                        Hastalığın sadece "bugün üzgünüm yarın neşeliyim" olmadığını gösteren, eski adıyla
                        "Manik Depresif" tanısının en yapısal, tıbbi ve en kısa özeti.
                    </p>
                    <div className={styles.author}>
                        <div className={styles.authorIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <div><strong>Uzm. Dr. Abdullah Maraş</strong><span>Ruh Sağlığı (Eryaman)</span></div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.articleGrid}>
                        <article className={styles.article}>

                            {/* SNIPPET-FRIENDLY FIRST PARAGRAPH */}
                            <p className={styles.lead} style={{ fontWeight: '600' }}>
                                Bipolar bozukluk, bireyin ruh halinin her zamanki sınırların çok ötesine geçerek;
                                aşırı coşku, yüksek enerji ve uyku ihtiyacının hissedilmediği "mani (taşkınlık)"
                                dönemi ile hayattan hiçbir zevk alamama ve yataktan çıkamama hali olan "depresif
                                (çökkünlük)" dönemi arasında gidip gelmesiyle seyreden biyolojik kökenli bir psikiyatrik hastalıktır.
                                Hasta bu iki uç arasında kaldığında, duygu durum dalgalanmaları nedeniyle işlevsel kayıplar yaşayabilir.
                                Hem mani hem depresyon evrelerinin doğru ayırımı yalnızca bir Ruh Sağlığı (Psikiyatri) doktorunun
                                bireysel değerlendirmesi sayesinde gerçekleştirilebilir.
                            </p>

                            <h2>Dalgaların Kıyılarındaki Hasar</h2>
                            <p>
                                Halk arasındaki "Hepimizin dengesi bozuk, o da bipolar işte ne olacak?" söylemi
                                bütünüyle cahilcedir. Bipolar bozukluk; bireyin bir süre içinde durduk yere evini arabasını satabileceği
                                veya bilmediği bir ülkeye taşınmaya karar verebileceği kadar <Link href="/blog/mani-donemi-nedir">şiddetli
                                    manik eylemlerden</Link> beslenen somut bir bozukluktur. Diğer yüzünde ise kişinin aylarca
                                evden çıkamayacak kadar karanlığa bağlandığı çok tehlikeli bir <Link href="/blog/bipolar-ile-depresyon-arasindaki-fark">bipolar-depresyon gerçeği</Link> saklıdır.
                            </p>

                            <h2>Nasıl Ortaya Çıkar?</h2>
                            <p>
                                Çoğunlukla yetişkin yaşlarda (askerlik, evlilik süreçleri veya üniversite çağı vs gibi
                                zorlayıcı stresler veyahut biyolojik patlamalar esnasında) su yüzüne çıkar. Hastaların büyük bir
                                kısmı ancak depresyondayken "Hocam hiçbir şey hissedemiyorum" diye başvururlar. Çünkü uykusuz geçirdikleri
                                o aylar içindeki enerjilerini "hasta olmak" gibi algılamazlar; bu tam bir <Link href="/blog/bipolar-belirtileri">gizli
                                    belirti döngüsüdür</Link>.
                            </p>

                            <p>
                                O devasa uykusuzluğu <Link href="/blog/hipomani-nedir">hipomani veya tam taşkınlık (mani)</Link> olarak
                                ayırt edebilmek Eryaman alanında yetişkin psikiyatri servisi sunan uzmanların en net görevlerindendir.
                            </p>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Özet Bilgi Çerçevesi</strong>
                                Kısa bilgilendirme metni; hiçbir ilacın, dozun veya %100 tedavinin tıbbi muadili asla olamaz. Ruhsal dalgalanmalar ciddidir, kendi kendinize telkinle geçiştirilmez; tıbbiyenin hekim kademesi şarttır. Yetişkin (18 yaş ve üstü) seans yapımız, Eryaman'daki psikiyatri ofisimizde şekillenir.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <h3>Bu Yıpratıcı Tiyatroyu Sonlandırın</h3>
                                <p>Durmaksızın size sahte kimlikler (bir enerjik karakter veya çökmüş bir yalnızlık) sunan bu durumu, uzman doktor teşhisiyle ekarte edin.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Ön Değerlendirme Randevusu →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Psikiyatriye Sorun</h3>
                                <Link href="/hizmetler/bipolar-bozukluk" className="btn btn--primary" style={{ width: '100%' }}>Klinik Bipolar Süreci (Ana Sayfa)</Link>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>Okuma ve İnceleme Listesi</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/hizmetler/depresyon">Kısa Depresyon Kılavuzum</Link></li>
                                    <li><Link href="/blog/bipolar-gunluk-hayati-nasil-etkiler">Evliliğinizi Bipolarla Test Etmeyin</Link></li>
                                    <li><Link href="/hizmetler/panik-atak">Benzer <Link href="/hizmetler/panik-atak">Panik</Link> Çakışmaları</Link></li>
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
