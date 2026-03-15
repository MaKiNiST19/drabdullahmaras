import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Uykusuzluk Neden Olur? | Yetişkinlerde Uykusuzluk ve Psikiyatri',
    description:
        'Yetişkinlerde uykusuzluğun (insomnia) temel nörobiyolojik ve stres kaynaklı nedenleri; psikiyatrik değerlendirme ile uykunun geri kazanım adımları.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/uykusuzluk-neden-olur' },
    openGraph: {
        title: 'Gece Kararan Zihinler: Uykusuzluk Neden Olur ve Nasıl Çözülür?',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Stres tek başına haftalarca uykusuzluk yapar mı?',
        answer: 'Geçici bir iş stresi uykuyu 2-3 gün bozarken; bilinçdışında çözülemeyen veya kabul edilemeyen bir "tehlike beklentisi" beyni uykuya aylarca kapatacak kronik (tıbbi) bir uykusuzluk motoruna evrilebilir.',
    },
    {
        question: 'Kahve içmeyi bıraktım ama yine uyuyamıyorum, neden?',
        answer: 'Fiziksel kafein veya yanlış alışkanlıkları bedenden çıkarsanız bile, eğer altta sessizce yatan panik, anksiyete veya ağır depresyon varsa hücresel olarak uykunun nörokimyası o kimyasal sarmalda sıkışıp kalmıştır.',
    },
    {
        question: 'İnsomnia kalıcı hasar bırakır mı?',
        answer: 'Kısa vadede bağışıklığı çökertirken; yıllarca uykusuz (3-4 saatlik sızmalarla) yaşayan bir bedenin ileri yaşlarda tükenmişlik ve ciddi kalp-damar yükleriyle ağır psikiyatrik krizler geçirmesi kaçınılmazdır.',
    },
    {
        question: 'Uykusuzluğun psikiyatrik tedavisi uyutmak mıdır?',
        answer: 'Hayır, amaç beyni yapay yollarla bayıltmak değil; "beyni uyanık tutan o tehlike algısının" bizzat üstüne gidip orayı iyileştirerek (bireysel uyku mimarisini restore ederek) uykuyu doğal seyrine kavuşturmaktır.',
    },
    {
        question: 'Ben yorulmuyorum ki uyuyayım diyen haksız mıdır?',
        answer: 'Sürekli bedensel egzersiz (yorulmak) beyni uyutmaz. Beden çok ağır bir işçi gibi çalışsa da, beyin hala "bir şey olacak" evhamındaysa birey fiziksel olarak yorgunluktan bitse de gözleri faltaşı gibi tavana bakar.',
    },
];

export default function UykusuzlukNedenOlurBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/uyku-bozukluklari">Uyku Bozuklukları</Link><span>/</span>
                        <span>Uykusuzluk Analizi</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Psikiyatri, İnsomnia, Nörobiyoloji</span>
                        <time dateTime="2026-06-20">20 Haziran 2026</time>
                        <span>•</span><span>6 dk okuma</span>
                    </div>
                    <h1>Uykusuzluk Neden Olur? İnsomnianın Psikiyatrik Kodları</h1>
                    <p className={styles.heroDesc}>
                        Günde ancak iki saat uyuyarak "Bende genetik bir gariplik var" diyenlerin gizlediği o uyanık
                        beyin; aslında hangi depresif ve kaygı dolu sinyalleri yakaladığı için uyku sigortasını
                        atıp "Savaş veya Kaç" modunda sabahı bekliyor?
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

                            <h2 id="nedir-stres">Asıl Neden: Kendini Güvende Hissetmeyen Beyin</h2>
                            <p>
                                Dünyada milyonlarca erişkin hasta <strong>"Uykusuzluk neden olur, ben neden uyuyamıyorum?"</strong>
                                sorusunun cevabını yatağının yayı, yediği akşam yemeği veya sadece yaşlanmayla bağdaştırmaya çalışır.
                                Oysa uyku tıbbında çok net bir gerçek vardır: Bir bedenin evrimsel olarak derin bir onarım
                                uykusuna (uykusuzluğunu yenmeye) geçiş yapabilmesi için, organizmanın <strong>"şu an tamamen güvendeyim,
                                    nöbeti bırakabilirim"</strong> demesi lazımdır.
                            </p>

                            <p>
                                İş yeri krizleri, bitme aşamasında olan evlilikler, eşin getirdiği ekonomik yıkımlar veya
                                <Link href="/hizmetler/eriskin-dehb">Erişkin DEHB</Link> beyninin sürekli kendi içinde
                                bitiremediği görevlerin yankısı; o zihne "Sakın uyuma, etraf tehlikelerle dolu" mesajı
                                yollar. O beyin de mecburen bedeni sabaha kadar en ufak bir seste zıplamaya
                                hazır; uykusuz ve bitkin olarak rehin tutar.
                            </p>

                            <h2 id="ikincil-bozukluk">1. Anksiyete (Kaygı Bozukluğu) Etkisi</h2>
                            <p>
                                İnsomnianın klinik olarak arkasındaki en devasa etmen <Link href="/hizmetler/anksiyete">kaygı bozukluğu</Link>
                                halleridir. Kaygısı olan kişi, gün boyu dışarıda çalışıp insanlarla konuşurken o zihnindeki felaket senaryolarını
                                ("Acaba bana güldüler mi?", "Acaba yarın o faturayı nasıl öderim?") öteleyebilir.
                            </p>
                            <p>
                                Akşam eve gelip ışıkları kapattığında ise; beynin tüm meşguliyeti biter ve o bütün bastırılan kaygı cinleri
                                yatağın başucuna dikilir. Gevşeyemeyen o sinir sistemi "uyku kimyasalını" asla aktive etmez.
                            </p>

                            <h2 id="depresyon-bagi">2. Depresyon ve Karanlık Uykusuzluk</h2>
                            <p>
                                Mutsuzluk hissiyatının psikiyatrik bir sendroma <Link href="/hizmetler/depresyon">çökkünlüğe (depresyona)</Link>
                                dönüştüğü o eşikte uyku, kişinin ya en büyük kaçışı (aşırı uyuma) ya da en büyük düşmanı haline gelir.
                                Karanlığın çökmesiyle beraber değersizlik hissinin zihni kemirdiği "Ben bittim" şeklindeki ruhsal acı,
                                hastaya sabaha kadar o tavanı izlettiren mutlak uykusuzluk gerçeğiyle tanıştırır.
                            </p>

                            <h2 id="fiziksel-fizyolojik">3. Ritmin Bozulması: Sirkadiyen Hatalar</h2>
                            <p>
                                Sadece psikiyatrik acılar değil; davranım kusurları da uykusuzluğa kapı aralar. Günü çok yüksek seviyede dopamin
                                arayışıyla geçiren ve geç saatlere dek sosyal medyadan mavi ekran ışığını gözüne pompalayan modern erişkin;
                                beynindeki uyku hormonu olan <strong>Melatonin'i</strong> tamamen kurutur. Beyindeki o sirkadiyen (gece-gündüz)
                                ritmi bir kez sekteye uğrarsa, beden sabahları uyuyup geceleri oturmaya programlanarak sistemi geri döndürülemez
                                bir şarampole sürükler.
                            </p>

                            <h2 id="bilincsiz-takviyeler">4. "Bitki Çayı ve Eczane" Yanılgısı</h2>
                            <p>
                                Uykusuzlukla boğuşan hastaların genelde doktor (Tıp uzmanı) odasına girmeden önce denediği onca bitkisel kür
                                veya kulaktan dolma hormon damlaları maalesef ki çok naif bir avuntudur. Sizin kaygınızı, panik atağınızı ve
                                eşinizle yaşadığınız o mobbing ağırlığını silmeyen bir bardak çay; elbette ki merkezi sinir sistemine
                                sızmış o derin insomniayı söküp atamaz.
                            </p>
                            <p>
                                <Link href="/blog/uyku-hijyeni-nasil-saglanir">Uyku hijyeni kurallarına</Link> uymak önemlidir ancak mesele sadece odayı
                                karanlık yapmakla bitseydi; hastanelerin psikiyatri servisleri bu denli kalabalık olmazdı.
                                İnsomnia her yiğidin kendi içinde farklı bir düğümü olarak; klinik olarak kişiden kişiye değişebilir
                                formlarda (yıllarca bile) devam edebilen dirençli bir tıbbi bozukluktur.
                            </p>

                            <h2 id="psikiyatri-neden-sart">Klinik Değerlendirme ile Uyku Ne Zaman Gelir?</h2>
                            <p>
                                Haftalar süren bu yıkıcı halsizliğin, kalp sorunlarına ve bağışıklık çöküşüne ulaşmadan önce bir
                                tıp hekimiyle <Link href="/hizmetler/uyku-bozukluklari">Ankara Eryaman uyku bozuklukları değerlendirme süreci</Link>
                                çemberine alınması ruh sağlığının en kritik yasasıdır.
                            </p>
                            <ul>
                                <li>Yapılan psikiyatrik görüşme ile beraber, o uykusuzluğun ardındaki asıl (Birincil) yangın (Anksiyete/Travma vs.) bulunur. </li>
                                <li>Uyku mekanizması zorla bayıltılmaz; hedef noktası nörokimyasal bazda tamir edilerek, uykunun eski ve doğal fizyolojik akışına "bireysel değerlendirmelerle" dönmesi amaçlanır. </li>
                            </ul>

                            <p>
                                Unutulmamalıdır ki uyuyamayan her göz; aslında içinde sönmemiş bir yangının varlığını evrene haykırıyordur; tedavi bu alevi uzman eşliğinde dindirmektir.
                            </p>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Klinik Uyarısı</strong>
                                Belirtilen durumlar yetişkin tıp disiplini (psikiyatri) nezdinde kronik insomnia olgularıdır. Kulaktan dolma ve
                                deneme-yanılma stratejileriyle (%100 garanti gibi safsatalarla) bu sorun aşılamaz. Gerçek bir uyku fizyolojisi için birebir hekim muayenesi zaruridir.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <p>Her sabah o yataktan sürünerek kalkmak kaderiniz değildir. Uykusuzluğun tıbbi zeminini teşhis ettirmek için yüz yüze değerlendirmenizi hekiminizden talep edin.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Uyku ve Ruh Sağlığı Randevusu →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Uyku Doktorunuzu Keşfedin</h3>
                                <p>Kopan o bağları ve kaybolan uykuları uzman eliyle bağlayalım. Ankara, Eryaman, Altay Mh.</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Doktora Hızlı Ulaşım</Link>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>Okumaya Devam Edin</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/blog/uyku-bozukluklari-nedir">İnsomnia Tam Olarak Nedir?</Link></li>
                                    <li><Link href="/blog/uykuya-dalamama-sorunu">O Yastık Neden Dikenli?</Link></li>
                                    <li><Link href="/hizmetler/uyku-bozukluklari">Uyku Klinik Yaklaşımı</Link></li>
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
