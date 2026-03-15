import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Gece Sık Uyanma Nedenleri | Uyku Bölünmesinin Psikiyatrisi',
    description:
        'Yetişkinlerde gece sürekli veya sık uyanma, uykunun bölünmesi ve sabaha karşı kalp çarpıntısıyla uyanmanın anksiyete ve stres kökenli nedenleri.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/gece-sik-uyanma-nedenleri' },
    openGraph: {
        title: 'Gece Uyanışları ve Parçalanan Uyku Mimarisi',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Gece bir kere uyanmak tehlikeli midir?',
        answer: 'Gece fizyolojik olarak (su içmek veya tuvalet gibi) kısa süreli uyanıp sonra anında uykuya dalmak bedenin doğal (tıbbi) bir savuşturmasıdır. Sorun olan şey o uyanışın terleme ve çarpıntıyla fırlama boyutuna gelip bir daha asla saatlerce uykuya izin vermemesidir.',
    },
    {
        question: 'Gece uyanmamın sebebi yatak veya oda ısısı olabilir mi?',
        answer: 'Uyku hijyeninin zayıflığı (çok sıcak/soğuk olması) sığ bir uykuyu doğrudan baltalar. Ancak bu şartlar düzelse de her gece saat 03:00’te uyanılıyorsa, sorun yataktan değil zihnin derinindeki bir kaygı "kapanışından" ibarettir.',
    },
    {
        question: 'Kabustan uyanmakla gece uyanması aynı şey midir?',
        answer: 'Farklıdır. Kabusta bilinen bir dehşet rüyasıyla kortizol uyanır. Oysa panik atağa benzer uyanmalar, kişi hiçbir kötü rüya görmese de beynin (amigdalanın) nedensiz yere "tehlike var uyan" demesiyle oluşan ruhsal paniklerdir.',
    },
    {
        question: 'Sürekli uyanmak gün içini nasıl bozar?',
        answer: 'Derin uyku (REM) uyku evresine geçilemediği için biriken toksinler atılamaz. Sonuç olarak sabahları felç kalmış gibi halsizlik, odaklanamama, eşle durduk yere patlayan ani şiddetli kavgalar gelişir.',
    },
    {
        question: 'Bu durum yaşlanmaya mı bağlıdır?',
        answer: 'İleri yaşla birlikte uyku evresi süresi doğası gereği kısalma gösterebilse de, "her saat başı kalbi küt küt atarak" ve uyuşukluğu asla atamadan uyanmak yaşla değil, sadece tedavi/bireysel değerlendirme gerektiren bir hastalıkla bağdaşır.',
    },
];

export default function GeceSikUyanmaNedenleriBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/uyku-bozukluklari">Uyku Bozuklukları</Link><span>/</span>
                        <span>Gece Uyanışları</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Psikiyatri, Uyku Kalitesi, Panik</span>
                        <time dateTime="2026-06-15">15 Haziran 2026</time>
                        <span>•</span><span>5 dk okuma</span>
                    </div>
                    <h1>Gece Sık Uyanma Nedenleri: Bölünen Uykunun Arka Planı</h1>
                    <p className={styles.heroDesc}>
                        Yatağa çok rahat dalmasına rağmen sabaha kadar dört beş kez terleyerek veya sebepsiz bir iç
                        sıkıntısıyla "Gece sürekli uyanıyorum" diyen beynin, aslında karanlığın içinde neyle savaştığının analizi.
                    </p>
                    <div className={styles.author}>
                        <div className={styles.authorIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <div><strong>Uzm. Dr. Abdullah Maraş</strong><span>(Ankara Ruh Sağlığı Uzmanı)</span></div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.articleGrid}>
                        <article className={styles.article}>

                            <h2 id="nedir-stres">Aslında Uykuya Dalıyorsunuz, Peki Ya Sonrası?</h2>
                            <p>
                                İnsomnia (Uykusuzluk) hastalarının bir kısmı sabahtan akşama dek "uyuyamama" (<Link href="/blog/uykuya-dalamama-sorunu">uykuya dalamama sorunundan</Link>)
                                muzdaripken, daha vahset verici bir kesim ise yatağa koyar koymaz on dakikada sızdığını ancak
                                gecenin 02:00'sinde, sonra 03:00'ünde, sonra 04:00'ünde defalarca hiçbir mantıksal sebebi olmadan,
                                kalp çarpıntısıyla ve çok büyük bir sıkıntıyla uyanmaktan şikayetçidir.
                            </p>

                            <p>
                                Halk arasında "Uykum tüy gibi hafif" ya da "Tavuktavanım ben, uykum hiç yok" şeklinde
                                esprisi yapılan bu <strong>gece sık uyanma sorunu</strong>, gerçek anlamda psikiyatrinin kırmızı çizgisidir.
                                Erişkin kişi aslında uykunun "Derin ve Onarıcı (REM)" denen çok hayati bölümüne beynini
                                geçiremiyor, sadece sığ bir bataklık misali uyanıklıkla uyku arasında zihnini sürüklüyordur.
                            </p>

                            <h2 id="ikincil-bozukluk">Amigdalanın "Tehlike" Alarmı</h2>
                            <p>
                                İnsan beyni; çok büyük bir kaygı, <Link href="/hizmetler/anksiyete">geçmemiş panikler (anksiyete)</Link> veya
                                çözülmemiş travmalar taşıyorsa, uykudaki bilincin kapanışını "ölüm" veya "tehlikeye açık olmak" gibi okur.
                                Ormanda etrafında her türlü vahşi hayvanı bekleyen bir mağara adamı ne kadar sık uyanır ve o ateşi kontrol ederse,
                                o gün faturasını ödeyemeyen ve evine haciz geleceğinden korkan işadamı da o kadar uykuda çarpıntıyla
                                uyanır. O an o odada onu o uykudan fırlatan şey; ne eşinin horlamasıdır ne de yoldan geçen arabanın sesidir;
                                uyanmasını sağlayan tamamen zihnindeki amigdalanın alarm krizidir.
                            </p>

                            <h2 id="depresyon-bagi">Gece Panik Atakları (Nokturnal Panik)</h2>
                            <p>
                                Beden uykuya geçerken nabzı düşer ve rahatlama hormonu pompalanır. Panik atağı veya maskelenmiş
                                panik bozukluğu (<Link href="/hizmetler/panik-atak">panik atak hastalık evresi</Link>) olan bazı erişkin hastalarda
                                bu durum tam tersine döner.
                            </p>
                            <p>
                                Uykunun ortasında beynin nefes ve nabız düşüklüğünü "Boğuluyorum, ölüyorum galiba!" diye çok kaba bir
                                yanılgıya düşürmesiyle, sistem saniyeler içinde bütün bedene devasa bir adrenalin boca eder. Erişkin hasta
                                yataktan gerçekten alev alev terleyerek, fırlayarak kalkar. Bu uyanıştan sonra zaten saatlerce beynin o
                                ateşi sönmeyeceği için uyku, o gece adına hastaya kesin olarak kapılarını kapatır. O artık
                                <Link href="/blog/uykusuzluk-neden-olur">uykusuzluğun o derin tüneline</Link> girmiştir.
                            </p>

                            <h2 id="fiziksel-fizyolojik">Erişkin DEHB'de Fikir Uçuşkanlığı</h2>
                            <p>
                                Hiç dikkatinizi çekti mi; yetişkinlerde sadece iş erteleme yapmaz <Link href="/hizmetler/eriskin-dehb">Erişkin DEHB teşhisi</Link>.
                                Dopamin yoksulluğu çeken ve sürekli hiperaktif dürtüleri olan zihin, gece uyuduğunda da susmaz. Bir anda rüyasında bir
                                makalenin veya oyunun detaylarına kafayı takıp, "Bunu hemen araştırmalıyım" şeklindeki o inanılmaz çocukça
                                (dürtüsel) bir alevle uyanıverir. O gecenin bir yarısı telefondan o konuyu araştırmaya başlamak, uykunun artık
                                bittiğini belgeler.
                            </p>

                            <h2 id="psikiyatri-neden-sart">Psikiyatrik Çözüm Neden "Hayat Kurtarır"?</h2>
                            <p>
                                Her saat başı uyandığınızda (Derin uykunun kesilmesi); beyin o gün öğrendiğiniz bütün anıları, ezberlediğiniz
                                dökümanları hafızaya aktarma (kaydetme) işini yarıda bırakarak çöpe atar. O sabah uyandığınızda ise her şeye
                                öfkelenip, isminizi dahi hatırlayamayacak denli bir "Zihin Sisi (Brain Fog)" denen unutkanlık cenderesine
                                itilirseniz;
                            </p>
                            <ul>
                                <li><strong>Bunun sonu tamamen eşinizle, çevrenizle bozuşulması ve bitkin düşülmesidir. </strong></li>
                                <li>Bu yüzden <Link href="/hizmetler/uyku-bozukluklari">Ankara Eryaman uyku bozuklukları değerlendirme süreci</Link>,
                                    size o dinlendirici rüyalarla ve blok halindeki uzun "sağlam" onarımlarla geri dönüş imkanınızı psikiyatrik bir görüşme
                                    çatısında sağlamayı (bireysel değerlendirme zemininde kişiden kişiye değişebilecek yapıyla) temin edecektir.
                                    Gece sık uyanmaları ancak uykunun boğazını sıkan elleri bularak, yani temelindeki asıl tıbbi (ruhsal) arızayı gidererek onarılır.</li>
                            </ul>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Klinik Uyarısı</strong>
                                Belirtilen durumlar yetişkin tıp disiplini (psikiyatri) nezdindeki olgulardır. Eğer organik bir fiziksel rahatsızlığınız
                                ("uyku apnesi, KOAH vs.") varsa bu durumlar zaten dahiliye veya göğüs hastalıklarının tedavisidir. Bahsedilen tablolar, tüm bedeni
                                sağlam ama zihni "stres yüküyle dolu (panik, anksiyete, depresyon)" kimseler için yazılmıştır ve tıbbi tedavi/muayene şartıyla bağdaşmaktadır.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <p>Sizi sabaha kadar sürekli dürtüp o rüyanızdan uyanmanıza sebep olan kaygı perdesinin asıl failini, tıbbi ve bilimsel yöntemlerle kliniğimizde tedavi masasına yatıralım.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Ankara Kliniğimiz Randevusu Yönlendiricisi →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Yeter Artık Uyanmak</h3>
                                <p>Her uyanış yepyeni bir yorgunluktur. Uykunuzun tılsımını uzman yardımıyla kazanın.</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Klinik Üzerinden Alınız</Link>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>Okumaya Devam Edin</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/blog/uykusuzluk-neden-olur">Uykudaki Düşmanlar.</Link></li>
                                    <li><Link href="/blog/sabah-erken-uyanma-ve-ruh-sagligi">03:00'te Uyanmanın Anlamı</Link></li>
                                    <li><Link href="/hizmetler/uyku-bozukluklari">Bozuklukların Gerçek Yüzü Neler?</Link></li>
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
