import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Tükenmişlik Sendromu Nedir? | Yetişkinlerde Tükenmişlik Halleri',
    description:
        'Tükenmişlik sendromunun (Burnout) psikiyatrik tanımı, duygusal iflas ve kronik motivasyon kaybının zihinsel etkileri hakkında uzman (Eryaman) yazısı.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/tukenmislik-sendromu-nedir' },
    openGraph: {
        title: 'Hiçbir Şeyin Tadı Yok: Tükenmişlik (Burnout) Nedir?',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Burnout her meslekte görülür mü?',
        answer: 'Sadece doktor, öğretmen gibi yoğun "insanla" uğraşan gruplara has bir yanılgı yoktur; beklenti/ödül dengesinin ihlal edildiği her kurumsal ya da kişisel (ev-ilişki içi tükenme) yapıda zihin istifa potansiyeli yaratabilir.',
    },
    {
        question: 'Stresle aynı şey midir?',
        answer: 'Stres genelde anlık bir tehlike/heyecan (panik) verip geçme meylindedir (kaynağı bellidir). Tükenmişlik (Burnout) ise içten içe yanan ve aylarca sönmeyen bir cehenneme alışma hissinin verdiği o devasa hissizlik/tepkisizlik külüdür.',
    },
    {
        question: 'Beyin kendiliğinden iyileşmez mi?',
        answer: 'Hekim desteğine (yapılandırılan klinik muayeneye) alınmayan beyin, o tükenmişliği bir huy haline (psikiyatrik majör tabloya) dönüştürerek; zihinsel kapasiteyi kasıtlı olarak asgari düzeyde kilitlemeye ve asla düzelemeyeceğini dikte etmeye meyillidir.',
    },
    {
        question: 'Eve gelince her şeye bağırmak tükenmişlik mi?',
        answer: 'Psikolojide buna "duygusal havuzun" boşalması denir. İşte patrona diyemediği lafları tutan kişi, akşam eve geldiğinde bardağın yere düşmesine bile tahammülü olmadığı için en sevdiği insanlara devasa krizler yaşatır.',
    },
    {
        question: 'İlaçsız geçer mi?',
        answer: 'Birebir "bireysel değerlendirmede" uzmanın bakacağı semptom şiddetine göre (mesela çok ağır nörobiyolojik bir çöküş/depresyon da eklenmişse) konsültasyonlar eşliğinde o karar hekim ve kişinin tedavi potansiyeli eşliğinde (kişiden kişiye değişebilecek) esastır.',
    },
];

export default function TukenmislikNedirBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/tukenmislik-sendromu">Tükenmişlik Kütüphanesi</Link><span>/</span>
                        <span>Burnout Temel Tanım</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Psikiyatri, Burnout, Ruhsal Yorgunluk</span>
                        <time dateTime="2026-06-25">25 Haziran 2026</time>
                        <span>•</span><span>5 dk okuma</span>
                    </div>
                    <h1>Tükenmişlik Sendromu Nedir? Ruhun Sigortasının Atması</h1>
                    <p className={styles.heroDesc}>
                        Tükenmişlik (Burnout); zihnin yoğun mesleki ve duygusal beklentiler yüzünden kapasitesinin çok
                        üstünde zorlanarak "şalteri tamamen indirmesi" (duyarsızlaşma, bitkinlik ve iflas) halidir.
                        Belirtiler ve sürecin seyri kişiden kişiye değişebilir. Bu tıbbi süreç klinik psikiyatrinin vizyonu
                        altında yapılandırılmalıdır.
                    </p>
                    <div className={styles.author}>
                        <div className={styles.authorIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <div><strong>Uzm. Dr. Abdullah Maraş</strong><span>(Ankara Eryaman Ruh Sağlığı Uzmanı)</span></div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.articleGrid}>
                        <article className={styles.article}>

                            <h2 id="genel-bakis">Sürekli "Hallederim" Demenin Faturası</h2>
                            <p>
                                İnsan bedeni, sınırsız bir dayanıklılık (stress-absorber) makinesi değildir. Yetişkin bir birey
                                mesleğinde "Yeter ki o proje yetişsin", evinde de "Yeter ki kimsenin kalbi kırılmasın" diyerek
                                kendi ruhsal sınırlarını sürekli geriye iterse; günün sonunda ne işyerindeki dosyaları okuyacak aklı
                                (dikkat süresi) ne de evindeki insanlara vereceği bir gram bile şefkati (toleransı) kalmaz.
                            </p>

                            <h2 id="klinik-tutar">Psikiyatri Gözünden Burnout Kavramı</h2>
                            <p>
                                Klinikte hekimlerin aradığı ve teşhis vizyonuna aldığı (tükenmişlik) tabloları genelde sadece
                                <Link href="/blog/surekli-yorgun-hissetmek-psikolojik-mi">fiziksel/bedensel yorgunluk hissi</Link> ile kısıtlı
                                tutulmaz. Kişi öyle bir girdaptadır ki;
                            </p>
                            <ul>
                                <li><strong>Hissizlik ve Duyarsızlık (Depersonalizasyon):</strong> Hastanın artık hiçbir cezaya ya da ödüle "Aldırmaması", her olaya sadece bir et yığını gibi boş gözlerle bakması halidir.</li>
                                <li><strong>Kişisel Başarı Hissinin Yok Olması:</strong> Dünkü o tutkuyla yapılan iş başarısıyla asla ilgilenilmez, tamamen sıfır düzeyde bir takdir <Link href="/blog/motivasyon-kaybi-neden-olur">motivasyon kaybı</Link> hasıl olur.</li>
                            </ul>

                            <h2 id="nasil-cozulecek">Çare Sadece Dinlenmek Midir?</h2>
                            <p>
                                En büyük yanılgılardan biri, tükenmiş bir zihni orman tatiline çıkartıp bir haftada "sıfırlandı ve normale"
                                döndü sanrısıdır. O tatil tamamen bir pansumandır; hasta o ormandan çıkıp tekrar o zehirli iş / ilişki
                                stresi ortamına (hastalıklı dinamiklere) girdiğinde o
                                <Link href="/blog/ise-gitmek-istememe-hali">midesindeki çalışma (işe gitmeme)</Link> bulantıları
                                beşi bir yerde artarak yeniden kusacaktır.
                            </p>
                            <p>
                                Ankara Eryaman ekseninde hekimin yapacağı asıl <Link href="/hizmetler/tukenmislik-sendromu">Ankara Eryaman tükenmişlik değerlendirme süreci</Link>;
                                o "hayır diyememe" sınırlarınızı baştan tıp ve psikolojik yapıda örmek, strese karşı "aşırı tepki" ve o "tükenen zeminlerin (zayıf noktalarınızı - altta yatan majör <Link href="/hizmetler/depresyon">çökkünlük ya da depresyon</Link> gibi patolojilerin)" tamirini medikal/davranışsal biçimde yürütmektir.
                            </p>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Klinik Uyarısı</strong>
                                Belirtilen Burnout (Tükenmişlik Sendromu) psikiyatrik semptomlardır. Bu durumlar internet makalesiyle şifa bulacak süreçler olgusu taşımaz ki
                                "%100 garanti", "hemen geçer" şeklindeki hiçbir gayri-tıbbi ibare gerçeği yansıtmaz. Yetkili (Doktor) vizyonuyla "Psikiyatrik Görüşme / Bireysel Test ve Test"
                                esasına geçilmelidir.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <p>Her gün daha fazla biterek bu ağır taşı taşımak kader değil. Profesyonel psikiyatrik değerlendirme seanslarıyla enerjik bir düzleme kendinizi asıl şimdi kanıtlayın.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Burnout Randevusu ve Tahlili →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Bitkinliğinizi Durdurun</h3>
                                <p>Kendinize yaptığınız bu adaletsiz psikolojik zulmü Eryaman'da hekim muayenesiyle çözelim.</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Klinik Üzerinden Alınız</Link>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>İlişkili Sendrom Zirveleri</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/blog/tukenmislik-sendromu-belirtileri-nelerdir">Nasıl Başladığını Okuyun?</Link></li>
                                    <li><Link href="/hizmetler/anksiyete">Anksiyeteniz Neden Tüketiyor Sizi?</Link></li>
                                    <li><Link href="/hizmetler/uyku-bozukluklari">Gece Bile Neden Yorulursunuz?</Link></li>
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
