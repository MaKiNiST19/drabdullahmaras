import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Erişkin DEHB Nedir? (Yetişkinlerde Dikkat Eksikliği) | Ankara',
    description:
        'Erişkin DEHB (Dikkat Eksikliği ve Hiperaktivite Bozukluğu) nedir, nasıl teşhis edilir ve odak sorunları hakkında Ankara Eryaman değerlendirmesi.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/eriskin-dehb-nedir' },
    openGraph: {
        title: 'Erişkin DEHB Nedir? Belirtiler ve Yansımaları',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Erişkin DEHB hastaları nasıl hisseder?',
        answer: 'Zihinlerinin sürekli farklı konulara atladığını, odaklanmak için aşırı güç harcadıklarını, son dakikaya kadar işleri ertelediklerini ve genellikle içsel, bitmeyen bir huzursuzluk içinde olduklarını ifade ederler.',
    },
    {
        question: 'Erişkin DEHB olan biri zeki midir?',
        answer: 'DEHB ile zeka seviyesi arasında negatif bir bağlantı yoktur; aksine pek çok hasta yüksek IQ’ya sahip olduğu için çocukluk dönemini kamufle etmiştir. Sorun zekada değil, o zekayı tek bir göreve odaklamada ve yönetmededir.',
    },
    {
        question: 'DEHB nasıl tespit ve teşhis edilir?',
        answer: 'Hastanın klinik hikayesinin, mesleki yıkım tablolarının ve odak/erteleme döngülerinin yetişkin odaklı bir uzman psikiyatrist hekim tarafından, bilimsel muayene kuralları ve psikometrik ölçeklerle değerlendirilmesi ile yapılır.',
    },
    {
        question: 'Erişkin DEHB tedavi (psikiyatrik izlem) edilebilir mi?',
        answer: 'Evet. Özel olarak seçilmiş hedefe yönelik farmakolojik bileşenler ve Bilişsel Davranışçı Terapi (zaman yönetimi, dürtü kontrol eğitimleri) yaklaşımlarıyla hastanın çalışma kapasitesi ve ikili ilişkileri oldukça verimli bir düzeye çıkarılabilmektedir.',
    },
    {
        question: 'DEHB sadece odak sorunu mu?',
        answer: 'Hayır, odaklanamamak buzdağının sadece görünen yüzüdür. Dürtüsellik (sonucunu düşünmeden davranma), öfke kontrol zorluğu, tahammülsüzlük, dağınıklık ve zamanı yönetememe de geniş DEHB çatısının ayrılmaz parçalarıdır.',
    },
];

export default function EriskinDehbNedirBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/eriskin-dehb">Erişkin DEHB</Link><span>/</span>
                        <span>DEHB Nedir?</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Psikiyatri, DEHB, Odak</span>
                        <time dateTime="2026-06-25">25 Haziran 2026</time>
                        <span>•</span><span>5 dk okuma</span>
                    </div>
                    <h1>Erişkin DEHB Nedir? Yetişkinlerde Dikkat ve Odaklanma</h1>
                    <p className={styles.heroDesc}>
                        Yalnızca çocuklara özgü bir akademik sorun sanılan DEHB’nin (Dikkat Eksikliği ve Hiperaktivite Bozukluğu),
                        yetişkin bireylerin kariyer, evlilik ve günlük rutin inşasında ne tür bir rol oynadığını klinik yönleriyle inceliyoruz.
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

                            {/* FEATURED SNIPPET H2 */}
                            <h2 id="nedir">Erişkin DEHB Nedir?</h2>
                            <p>Erişkin DEHB (Dikkat Eksikliği ve Hiperaktivite Bozukluğu), zihnin dikkat, organize olma, zaman yönetimi ve dürtü kontrolü fonksiyonlarından sorumlu frontal lob bölgesindeki nörobiyolojik farklılıklara dayanan klinik bir durumdur. Yetişkin dönemde içsel huzursuzluk, iş erteleme ve odak sorunlarıyla beliren bu kompleks sürecin ve belirtilerin şiddeti kişiden kişiye değişebilir.</p>

                            <h3>Sadece çocuklarda görülmez mi?</h3>
                            <p>Hayır, yıllar boyunca DEHB’nin yaş ilerledikçe kaybolduğuna inanılsa da; modern tıp literatürü bedensel hiperaktivitenin yatışmasına rağmen zihinsel dikkat zorluklarının yaşam boyu sürdüğünü göstermektedir.</p>

                            <h3>Zeka geriliği (eksikliği) midir?</h3>
                            <p>Kesinlikle değildir. Üstün zeka kapasitesine (IQ) sahip bireylerde dahi klinik olarak gözlenebilen, temeli sadece dikkatin (fonksiyonun) sürekliliğine dayalı bir adaptasyon sorunudur.</p>

                            <p>
                                İlerleyen yetişkinlik döneminde dahi yakamızı bırakmayan o "sürekli son dakikaya biriktirme"
                                döngüsünün arka planında çoğu zaman farkına varılmamış, ötelenmiş bir
                                <Link href="/hizmetler/eriskin-dehb">Erişkin DEHB portresi</Link> bulunmaktadır.
                            </p>

                            <h2 id="alt-tipler">DEHB’nin Temel Görünümleri (Alt Tipleri)</h2>
                            <p>
                                Yetişkin bireylerde süreç çoğunlukla tek bir cephede ilerlemez; üç temel çerçevede
                                farklı klinik yüzler gösterir.
                            </p>
                            <ul>
                                <li><strong>Dikkat Eksikliği Önde Giden Tip:</strong> Detayları kaçıran, çabuk dalan, görevleri organize etmekte zorlanan profildir.</li>
                                <li><strong>Hiperaktivite/Dürtüsellik Önde Giden Tip:</strong> Sürekli hareket ihtiyacı hisseden, hızlı konuşan, sonuçlarını düşünmeden (dürtüsel) eyleme geçen gruptur.</li>
                                <li><strong>Bileşik (Karma) Tip:</strong> Her iki spektrumun eş zamanlı yetişkini yıprattığı, en karmaşık tablolardan biridir.</li>
                            </ul>

                            <h2 id="yetişkinlik-sorunu">Bir Karakter Zayıflığı Değil, Nörobiyolojik Cihaz Eksikliği</h2>
                            <p>
                                Çoğu zaman hastalar dış çevrelerinden veya eşlerinden "Çok tembelsin, çaba göstermiyorsun,
                                istersen başarırsın ama istemiyorsun" şeklinde sitemler işitirler. Ancak <Link href="/blog/surekli-erteleme-davranisi-neden-olur">erteleme davranışı döngüsü</Link>,
                                bir tembellik veya huysuzluk değil, dopamin seviyesi ve bilgi işleme merkezlerinin
                                ödül mekanizmasındaki fizyolojik arızalarıdır. DEHB’li bir beyin ille de sadece "kriz" (son
                                1 saat kalmış teslimat) veya aşırı heyecan olduğu anda ateşleme yapabilmektedir.
                            </p>

                            <h2 id="klinik-ayrim">Peki, Dikkat Dağınıklığı ile Hastalığın Farkı Nerede?</h2>
                            <p>
                                Bugün modern yaşamın uyaran bombardımanı ortasında her birey <Link href="/blog/dikkat-daginikligi-mi-dehb-mi">geçici odaklanma güçlüğü ve kaygı ilişkisi</Link>
                                yaşayabilir. Yoğun stres altına girdiğimizde unutkan olmamız bizi hasta etmez. Ancak
                                Erişkin DEHB diyebilmek için bu karmaşanın bireyin:
                            </p>
                            <ul>
                                <li>Çocukluk yaşlarına dayanan uzun bir geçmişinin (kalıcılığının) olması,</li>
                                <li>Meslek, okul, sosyoloji ve evlilik dairesindeki birden fazla yapıyı kronik bozması,</li>
                                <li>Saniyelik uyaranların (telefon, dış sesler) dahi iş gidişatını saatlerce baltalaması gerekmektedir.</li>
                            </ul>

                            <h2 id="yasam-faturasi">Süregelen "Kapasite Altında Kalma" Hissi</h2>
                            <p>
                                Çoğu hastanın ruhsal çöküşünün en temel nedeni, potansiyellerinin farkında olmaları ancak
                                bunu organize edip asla faaliyete geçirememeleridir. 10 sayfalık bir proje için haftalarca
                                "yarın başlayacağım" diyerek zihinsel enerji tüketip, sonunda başarısız veya son yetersiz bir
                                tablo çizmek, <Link href="/hizmetler/depresyon">çökkünlüğe (depresyona)</Link> çok açık bir
                                klinik zemin hazırlar.
                            </p>

                            <h2 id="eryaman-sureci">Ankara Eryaman’da DEHB’ye Bilimsel Bir Bakış</h2>
                            <p>
                                İnsanın tüm gün odada oturup hiç kitap kapağı açamadığı için kendine "ben aptalım"
                                teşhisi koyması kabul edilemez bir trajedidir. <Link href="/randevu">Ankara Eryaman erişkin DEHB değerlendirme süreci</Link> çatısı
                                altında hekimler (Uzm. Dr. Abdullah Maraş); yetişkinlerin bu kronik engeli üzerinde bir
                                tıp penceresinden yapılandırmaya gitmektedir. "İradeni kullan aşarsın" demek yerine
                                nörobiyolojik altyapıya uygun (psikiyatrik görüşme seansları ile) özel bir rota tayin edilmektedir.
                            </p>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Bilgilendirme Amaçlıdır</strong>
                                Belirtilen odak zorlukları zaman zaman geçici çevresel durumlardan kaynaklanabileceği gibi doğrudan klinik kökenli bir bozukluğun yansıması da olabilir. Kesin tedavi yüzdeleri ile bir internet sitesinden "kendi kendinize" karar verilemez. Yazılar, bireysel (psikiyatrist nezaretinde) hekim değerlendirmesi yerine asla geçmez. Polikliniğimiz adult (yetişkin) profili incelemekte olup garanti vaadi barındırmaz.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <p>Sizi potansiyelinizden alıkoyan zihin zincirleriniz için Ankara Eryaman ofisimizle psikiyatrik bireysel konsültasyon oluşturun.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Uzman Görüşme Yönetimi →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Özel Ruh Sağlığı Hizmeti</h3>
                                <p>Ankara Eryaman'da klinik değerlendirmeniz için hekiminizle temas kurun.</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Randevu Planlayıcı</Link>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>Bağlantılı Diğer Konular</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/hizmetler/eriskin-dehb">DEHB Temel Çerçeve (Ana Sayfa)</Link></li>
                                    <li><Link href="/blog/eriskin-dehb-belirtileri-nelerdir">Detaylı Belirti Kılavuzu</Link></li>
                                    <li><Link href="/blog/surekli-erteleme-davranisi-neden-olur">Neden Erteliyoruz?</Link></li>
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
