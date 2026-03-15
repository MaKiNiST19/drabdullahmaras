import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Bipolar Günlük Hayatı Nasıl Etkiler? (İş, İlişkiler ve Evlilik) | Ankara',
    description:
        'Bipolar bozukluğa sahip bireylerin evlilik, iş ve sosyal yaşamlarında karşılaştığı zorluklar ile Eryaman’da psikiyatrik değerlendirme kılavuzu.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/bipolar-gunluk-hayati-nasil-etkiler' },
    openGraph: {
        title: 'Bipolar Bozukluk ve Yaşam Etkileri | Psikiyatrist Değerlendirmesi',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Bipolar hasta evlenebilir mi veya ilişki yürütebilir mi?',
        answer: 'Kesinlikle evet. Bipolar bireylerin çoğu, psikiyatrik destekle (hastalığın teşhisi ve birebir uzman değerlendirmesi sonrası) tedavi süreçlerine uyum sağladıklarında tamamen normal, işlevsel ve mutlu bir evlilik sürdürebilirler.',
    },
    {
        question: 'İşe girmesinde veya çalışmasında engeli var mıdır?',
        answer: 'Ötimik (hastalık dışı normal) dönemde bipolar bireylerin diğer insanlardan hiçbir eksik veya zayıf tarafı yoktur, aksine çok yaratıcı olabilirler. Klinik süreç kontrol altında tutulduğu müddetçe üst düzey kariyerlere sahip sayısız hasta mevcuttur.',
    },
    {
        question: 'Eşime/bipolar hastasına nasıl davranmalıyım?',
        answer: 'Manik evrede onun enerjisiyle veya gerçekçi olmayan fikirleriyle tartışmaya ("Sen delisin, hastasın") girmemek; çökkün evresinde ise onu "Hadi kalk biraz dışarı çık iradesizleşme" gibi telkinlerle bunaltmamak en doğrusudur. Sabırla onu tedavi sürecine kanalize etmek asıl dayanaktır.',
    },
    {
        question: 'Sürekli dengesiz mi yaşarlar?',
        answer: 'Hayır. Tedavi ile atakların araları yıllarca açılabilir ve hastalık kontrol edilebilir. Halk arasında düşünüldüğü gibi bipolar hastası sadece sabahtan akşama farklı karakterlere bürünen biri değildir, hastalık genellikle uzun döngüler (haftalar-aylar) içerir.',
    },
    {
        question: 'Toplumdaki şiddet haberleriyle alakası var mıdır?',
        answer: 'Medyada yaratılan "çılgın, saldırgan ve suça meyilli" algısı büyük bir yanılgıdır. Bipolar bireylerin büyük kısmı dışarıya değil kendilerine (hastalığın getirdiği enerji tüketimi veya çökkünlükle) zarar verir ve şiddete nadiren başvururlar (özellikle düzenli klinik izlem varsa).',
    },
];

export default function BipolarYaşamBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/bipolar">Bipolar Bozukluk</Link><span>/</span>
                        <span>Günlük Hayata Etkisi</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Bipolar, Yaşam, İlişki</span>
                        <time dateTime="2026-06-29">29 Haziran 2026</time>
                        <span>•</span><span>5 dk okuma</span>
                    </div>
                    <h1>Bipolar Günlük Hayatı Nasıl Etkiler? İş ve Sosyal Kırılmalar</h1>
                    <p className={styles.heroDesc}>
                        Manik ve depresif uçlarda savrulan bir yetişkinin kariyerine, evliliğine ve bireysel
                        yaşam kalitesine dair ödediği görünmez bedeller ile, bu döngüden çıkışın (tıbbi stabilizasyonun)
                        yol haritası.
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

                            <p className={styles.lead}>
                                Bireyin, <Link href="/hizmetler/bipolar-bozukluk">bipoların amansız ve yıpratıcı yelpazesinde</Link>
                                sürekli iki farklı ucu tatması salt zihinsel bir dalgalanma değil; yansımasını doğrudan
                                kredi kartı borçlarında, işten atılma gerekçelerinde ve en kötüsü de sevdikleriyle olan yıpranan
                                mizaç toleransında görür. "Bir dönem çok enerjik oluyorum, uykusuz olsam bile çalışıyorum"
                                dedikleri o harika tabloların faturası genellikle aylar süren bir karanlık kış (işsizlik/boşanma) ile kesilir.
                            </p>

                            <h2>1. Mesleki İşlevsellikte Bipoların Silueti (Kariyer Kırıkları)</h2>
                            <p>
                                İş hayatında en çok istikrar istenir. Lakin bipolar spektrumda olan bir çalışan (özellikle müdahalesiz,
                                tedavisiz ise) istikrarın zıttı haline gelir. <Link href="/blog/mani-donemi-nedir">Mani/Hipomani döngülerinde</Link>;
                                bu birey şirketin üzerine en çok düşen "dahisi" gibi parlarken, sınır tanımaz cesareti ve hırçınlığı
                                sebebiyle aynı gün patronuyla veya çalışanlarıyla (yıkıcı) kavgaya tutuşup istifa edebilir.
                            </p>
                            <p>
                                İki ay sonra girdiği o "yataktan çıkmama" (Bipolar Majör Depresyon) evresindeyken ise daha önce harikalar yarattığı
                                bilgisayar masasına oturacak mecali dahi bulamaz. Hastalığın bilincinde olmayan yöneticiler onu
                                "tembel" diyerek işten çıkarır.
                            </p>

                            <h2>2. Bipolar Bireyle Evlilik: Eşlerin Taşıdığı Yük</h2>
                            <p>
                                Evliliğin ve ailenin temelinde de sabır vardır. Lakin eşlerden biri (Psikiyatrist izlemi olmaksızın)
                                zıtlıkları kendi başına göğüslemeye kalkışır ise; manik ataklar sırasındaki dürtüsel cinsel istek artışları/sınır kayıpları
                                veya manik-harcama evrelerinde evin birikimini anlamsız projelere gömmesi (risk faktörüne körleşme),
                                diğer eş için tahammül edilemez bir <Link href="/hizmetler/anksiyete">kaygı tablosuna</Link> dönüşür.
                            </p>

                            <h2>3. Ani Öfke ve Yalnızlaşma / Sosyal Geri Çekilme</h2>
                            <p>
                                Her <Link href="/blog/bipolar-belirtileri">bipolar atak</Link>, zihne olduğu kadar
                                bedene ve sosyolojiye de bir neşter atar. Birey manik dönemde çevresindeki
                                herkesi telefonla arayıp abartılı organizasyonlar yaparken; bir sabah uyandığında
                                (depresyon fazına girdiğinde) kimse ile konuşmak istemez, aylar boyunca odasına
                                kapanarak (toplumdan en <Link href="/hizmetler/depresyon">klasik çökkünlük haliyle</Link>) kopar.
                            </p>
                            <p>
                                Dışarıdaki bir arkadaşı şöyle der: "Eski neşeli hali gitti, aradığımda açmıyor bile, demek
                                ki havalandı". Ve bu kısır döngü, en sonunda hastayı yapayalnız koyar. Oysa
                                ne bir havalanmadır ne de şımarıklık; hasta tıbbiyenin çok ciddi alanına giren "kimyasal dengesizliğinin" pençesinde
                                yaşam faturası ödemektedir.
                            </p>

                            <h2>4. Psikiyatri Değerlendirmesinin Kazandırdığı Kalite</h2>
                            <p>
                                Kişinin tek başına "hadi iyi olayım" diyerek gidişatı tersine çevirmesine çok nadir (neredeyse olanaksız) bir ihtimaldir.
                                Ne hasta "sürekli huysuz"dur ne de yakını (eşi) "kaderine mahpus"tur!
                                Ankara Eryaman'da ve bağlı olduğu arterlerde yetişkin hedefli hizmet veren psikiyatrik
                                yapımızda; Uzm. Dr. Abdullah Maraş ile var olan öyküler dinlenir. Amaçlanan
                                tek olgu, hastayı yatağa yapıştıran depresif çökkünlüklerle manik
                                o dürtüsel parlamalar arasındaki makası kapatarak, evliliğin ve kariyerin devamlılığını
                                sağlayan "stabil (ötimik) duygu durum zeminine" hastayı ulaştırmaktır.
                            </p>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Bilgilendirme Çerçevesi</strong>
                                İnternet üzerinden "bipoların hayatı böyledir, %100 böyledir" şeklindeki okumalarınızın birebir sizin (veyahut yakınınızın) yaşam haritanızı çizmeyebileceğini unutmayınız. Çünkü klinik bir bozukluk genetik yapıtaşına ve yetişkinin iş/sosyoekonomik kapasitesine binaen değişken etkilere sahiptir. "%100 başarıyla bütün dertlerinizi mucize bir seansla veya ilaçla geçer" şeklinde algı yanılsamalarından tıbbi etik kapsamında uzak durmalı, uzman hekimin (hastanın yanında) sunduğu o "uzun rotaya/yapılandırmaya" dayanmalısınız.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <p>Kendinizi toplumdan tamamen koparmadan veya ilişkilerinizi feda etmeden önce uzman doktor randevunuzu (Ankara Eryaman) ayırtın.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Randevu Menüsü ve Görüşme →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Yakınınız / Eşiniz İçin</h3>
                                <p>Evlilik sürecinde bipolara tıbbiyeden uzmanla bakılması.</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Değerlendirme</Link>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>Yol Haritası Blogları</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/hizmetler/bipolar-bozukluk">Bipolar Çerçevemiz (Ana)</Link></li>
                                    <li><Link href="/blog/mani-donemi-nedir">Mani Ataklarını Anlamak</Link></li>
                                    <li><Link href="/hizmetler/anksiyete">Bu Süreçdeki Aşırı Telaş</Link></li>
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
