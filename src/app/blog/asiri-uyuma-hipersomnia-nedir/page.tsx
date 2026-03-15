import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Aşırı Uyuma (Hipersomnia) Nedir? | Gün Boyu Süren Uyku Hali',
    description:
        'Yetişkinlerde gereğinden fazla uyuma, 12-14 saat uykudan bitkin kalkma, stresten ve depresyondan kaçış aracı olarak hipersomnia.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/asiri-uyuma-hipersomnia-nedir' },
    openGraph: {
        title: 'Hayati Çöküş: Depresyonda Kaçış ve Aşırı Uyuma İhtiyacı',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Günde kaç saat uyumak hipersomnia sayılır?',
        answer: 'Bir erişkinin olağan ve ideal uyku döngüsü yaklaşık 7-8 saat iken; gece 10-12 saat uyuyup, gündüzleri de koltukta süreklisızıp "hiç dinlenememiş" ve çok ağır (bitkin) kalması durumudur.',
    },
    {
        question: 'Çok uyumak sağlıklı olduğumu mu gösterir?',
        answer: 'Kesinlikle hayır; asgari düzeyin çok üzerinde olan kronik uyuma hali, beden onarımı arzusundan ziyade, beynin "dış dünyanın stres ve sorumluluklarından kaçmak için kendini zorla sisteme kapatması" refleksidir.',
    },
    {
        question: 'Hipersomnia tembellik midir?',
        answer: 'Asla sadece tembellik denilemez. İşini, çocuklarını ihmal edecek boyutta, 15 saatlik bir uyku zindanından çıkamayan hastanın iradesi değil; alttan alta nörobiyolojik "çökkünlük/melankoli" motoru bozulmuştur.',
    },
    {
        question: 'Kahve ile günü atlatabilir miyim?',
        answer: 'Uykudan sersemlemiş ve hayat enerjisi çekilmiş (depresif) bir vücudu sadece uyarıcıyla (kafeinle) kırbaçlamak, o yıkımın klinik seviyesini artırmaktan başka bir şey yapmaz. Kök nedene hekim tıp bilimiyle inmelidir.',
    },
    {
        question: 'Psikiyatriste ne zaman gidilmelidir?',
        answer: 'Her sabah çalan alarma rağmen "Dünyada yataktan kalkmaya değecek tek bir amacım yok" diyerek ardışık 2 hafta boyunca örtüyü kafaya çekiyorsanız acilen o koltuğa geçmeli ve "bireysel değerlendirmeden" destek bulmalısınız.',
    },
];

export default function AsiriUyumaHipersomniaBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/uyku-bozukluklari">Uyku Bozuklukları</Link><span>/</span>
                        <span>Fazla Uyuma (Hipersomnia)</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Psikiyatri, Aşırı Uyku, Kaçınma</span>
                        <time dateTime="2026-06-25">25 Haziran 2026</time>
                        <span>•</span><span>5 dk okuma</span>
                    </div>
                    <h1>Aşırı Uyuma (Hipersomnia) Nedir? Kaçışın Biyolojik Zindanı</h1>
                    <p className={styles.heroDesc}>
                        Binlerce kişi uykudan uyanamadığı için acı çekerken; aslında aşırı uyuyan hastanın zihninin
                        uyanık kaldığı o gerçek dünyaya tahammül edememekten uykuyu bir "unutma sığınağı" olarak
                        kullandığını ve "Aşırı (Hipersonmia)" bataklığını inceliyoruz.
                    </p>
                    <div className={styles.author}>
                        <div className={styles.authorIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <div><strong>Uzm. Dr. Abdullah Maraş</strong><span>(Yetişkin Ruh Sağlığı Uzmanı)</span></div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.articleGrid}>
                        <article className={styles.article}>

                            <h2 id="nedir-hipersomnia">"Uyumak Yetmiyor, Daha Cok Yok Olmak İstiyorum"</h2>
                            <p>
                                İlerleyen yetişkinlik evresinde "uyku bozuklukları" denilince genel akla, saatlerce
                                kıvranıp duran <Link href="/blog/uykusuzluk-neden-olur">uykusuzluk veya insomnia</Link> gelse de,
                                bunun tam karşısındaki çok sinsi (sessiz) ve devasa yıkıcı tablo; <strong>Hipersomnia
                                    (Aşırı uyku hali)</strong> bozukluğudur. Bu durumda kişi hastalıklı (patolojik) boyutlarda günde 12, 14
                                veya daha fazla saat uyumaya başlar.
                            </p>
                            <p>
                                Fakat bu uyku bebeklerin uykusu gibi sağlıklı, enerjisini depoladığı bir durum değildir.
                                Gözlerini açtığında üzerine tonlarca yük inmiş, dayak yemiş veya beyni felç kalmış gibi "sersem" bir
                                bataklıktan sabah zorlukla sıyrılır (%100 bitkinlikle kalkar).
                            </p>

                            <h2 id="kacis-kardesligi">Uyku Neden Bir Kaçış Mekanizmasıdır?</h2>
                            <p>
                                Vücutta ne zaman çözmekte zorlandığı devasa bir psikiyatrik yük olsa; zihin en büyük
                                savunma kalkanı olarak bedeni karanlığa (bilinçsizliğe) kapatır. Bunu yapan en net hastalık
                                ise <Link href="/hizmetler/depresyon">Majör Depresyondur</Link>.
                            </p>
                            <ul>
                                <li>Erişkin biri; işten atılmasının veya eşinden boşanmasının ardından yaşadığı devasa ezikliğe ve "gelecek korkusuna" dayanma gücü bulamadığında;</li>
                                <li>Bütün bir gün boş gözlerle o uyanık saatlerini geçireceğine, beyni ona "Uyu ve hiçbir şey hissetme" komutunu zorla yükleyerek onu karanlığa kilitler.</li>
                            </ul>
                            <p>
                                Dışarıdaki o aile veya arkadaşlar, hastaya <strong>"Sen sadece tembellik ediyorsun, kalk dışarı çık"</strong>
                                diyerek onu daha çok ezer; oysa kişinin iradesi değil, beyninin hücreleri acıyan duyguları (travmayı)
                                dondurmak adına devreden bilinci (enerjiyi) çoktan çıkartmış ve "uyuşturmuştur".
                            </p>

                            <h2 id="atipik-tablo">Değişken Depresyon (Atipik Görüntü) ve Yeme Atakları</h2>
                            <p>
                                Klasik depresyonda (kederlenen) kişi, ya <Link href="/blog/uykuya-dalamama-sorunu">sabahlara dek uyuyamaz</Link> ya da
                                hiçbir şey yemez (zayıflar). Fakat Atipik tipte; hasta günde 15 saat aşırı uyur
                                ve uyanır uyanmaz inanılmaz derecede (özellikle karbonhidrat/şeker odaklı) tıkınırcasına yemeğe başlar.
                                Uyku ile yemenin beyni yatıştırıcı dopamin ve serototine verdiği o yalancı tatmin; aslen bedenin feryat (yardım) çığlığıdır.
                            </p>

                            <h2 id="diger-bozukluk-ayrimlari">Apne Mi, Uyku Hastalığı Mı, Psikiyatrik Mi?</h2>
                            <p>
                                Her aşırı uyuyan erişkini doğrudan <Link href="/blog/uyku-bozukluklari-nedir">psikolojik uyku bozukluğu makalesine</Link>
                                tıkamamalıyız. Eğer çok kilolu, çok horlayan ve nefesi kesilen (Uyku apnesi) ya da tiroidi bozuk
                                bir hasta varsa, o hasta da bütün gün sızar. Tıbbiyenin (Psikiyatrinin) ustalık sanatı işte buradadır;
                            </p>
                            <p>
                                Erişkin kişi kliniğe "Ben bütün gün uyuyorum" dediğinde, o kişinin aslında nefesi kesildiği için mi (Apne)
                                derin uyuyamadığı ve yorgun kaldığını; yoksa hiçbir organik fiziksel derdi olmamasına rağmen "hayattan kopup
                                ölmeyi istediği" (Depresif köken / Hipersomnia) sebebiyle mi zindanda yattığını ayırmak
                                mutlak suretle klinik uzmanın değerlendirmesindedir.
                            </p>

                            <h2 id="klinik-tutar">Eryaman-Ankara Kliniğimizin Çözümsel Yol Rotası</h2>
                            <p>
                                Sadece alarm saatlerinizi çoğaltarak veya üç bardak kahve fazla içerek bu 15 saatlik karanlık çöküşü (ve
                                aşırı uyuma uyuşukluğunu) kendi başınıza asamamaktasınız.
                                Ankara, Eryaman, Altay Mh. yöresi kliniğimizde,
                                <Link href="/hizmetler/uyku-bozukluklari">psikiyatrik uyku bozuklukları muayene (Bireysel Değerlendirme)</Link> süreci
                                Uzm. Dr. Abdullah Maraş tarafından yönetilerek; hasta uyanmak istemediği asıl kederleri (kaygıları)
                                ile yapılandırılmış randevularda tamir adımlarına girişir.
                            </p>
                            <ul>
                                <li>Sonuç olarak; amaç hastayı kırbaçlamak (vücudunu kafeinle yormak) değil; uyanacağı dünyanın "kalkmaya
                                    değer" bir potansiyelde olduğunu tıbbın gücü (psikoz / nöro regülasyon) ve motivasyonel
                                    adımlarla hissettirmektir. Hastalığın iyileşme süreleri kişiden kişiye değişebilen klinik
                                    seyrin tabiatı gereğidir. </li>
                            </ul>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Bilgilendirme Amaçlıdır</strong>
                                Belirtilen hastalık ve tablo (Aşırı uyuma) erişkin kapsamındadır. Kulaktan dolma motivasyon videolarıyla (irade testleriyle) aşılabileceği yönündeki "kesin garanti" ibareleri tamamen aldatmacadır ve ruh sağlığı tedavisini geciktirdiği için son derece vahim sonuçlar (intihar/iş kaybı) doğurabilir. Birebir psikiyatrist hekim kontrolü kanundur.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <p>Her sabah o yataktan sanki yüzünüze çimento dökülmüş gibi zorlanarak kalkmak kaderiniz değil. O karanlığı tıbbın eliyle delip ruhunuzu serbest bırakmak için Ankara (Eryaman) randevulaşması seçiminizi başlatın.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Uyku Değerlendirme Al →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Bu Döngüden Uyanın</h3>
                                <p>Beyninizin size çektiği o koyu örtüyü kaldırıp, hayatınızı uzman (Ankara) takibiyle geri alın.</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Klinik Üzerinden Alınız</Link>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>İlişkili Girdaplar</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/blog/sabah-erken-uyanma-ve-ruh-sagligi">15 Saat Uyuyanlara Zıt Dünyalar.</Link></li>
                                    <li><Link href="/hizmetler/depresyon">İkisinin Ortak Melankolisi Ne Olacak?</Link></li>
                                    <li><Link href="/blog/uyku-hijyeni-nasil-saglanir">Bedensel Temizlikler Kafi Gelir Mi?</Link></li>
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
