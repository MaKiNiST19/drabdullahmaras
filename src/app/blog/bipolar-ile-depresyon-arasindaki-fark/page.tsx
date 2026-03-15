import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Bipolar ile Depresyon Arasındaki Fark Nedir? | Psikiyatrist Değerlendirmesi',
    description:
        'Sadece depresyonda mısınız yoksa bipolar spektrumunda mısınız? İki duygu durum bozukluğu arasındaki farklar ve Eryaman’da psikiyatrik değerlendirme süreci.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/bipolar-ile-depresyon-arasindaki-fark' },
    openGraph: {
        title: 'Bipolar vs Depresyon: Kritik Ayrım | Uzm. Dr. Abdullah Maraş',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Depresyondayım, bu bipolara dönüşür mü?',
        answer: 'Klasik (unipolar/tek uçlu) majör depresyon kendiliğinden bipolara evrilmez. Eğer kişinin beyninde bipolar genetiği-potansiyeli varsa zamanla "mani" evresi zaten ortaya çıkacak ve asıl hastalık tablosu netleşecektir.',
    },
    {
        question: 'Bipolarla depresyon dışarıdan aynı mı görünür?',
        answer: 'Hastanın "çökkünlük/depresif" döneminde dışarıdan bakıldığında tıpatıp klasik depresyon tablosudur. İkisini de ayırt etmek için kişinin geçmişinde veya yapısında "coşkulu mani/hipomani" atakları yaşayıp yaşamadığı sorgulanır.',
    },
    {
        question: 'Yanlış teşhis (depresyon yerine bipolar denmesi) neye yol açar?',
        answer: 'Psikiyatride en önemli ayrımlardan biridir. Bipolar bir hastaya sadece "depresyon" reçetesi verilirse, kullanılan hekim onaysız maddeler/ilaçlar beyni aniden şiddetli bir "manik taşkınlık" aşamasına sıçratarak hastaya psikolojik tehlike yaratabilir.',
    },
    {
        question: 'Ben kendim evde hangisi olduğumu test edebilir miyim?',
        answer: 'Kesinlikle hayır. Çoğu hasta "hipomani" evresini (enerji yüksekliğini) hastalık değilmiş, normalmiş gibi varsayar ve sadece çöktüğünde doktora gider. Sizin anımsamadığınız klinik detayları ancak yetişkin psikiyatrisi konsültasyonunda fark ederiz.',
    },
    {
        question: 'Antidepresanlar bipoları tetikler mi?',
        answer: 'Bipolara genetik / biyolojik olarak yatkın bir beyin yapısı mevcutsa, hekim onayından geçmeyen kontrolsüz antidepresan kullanımları kişiyi aniden aşırı enerjik ve kopuk (mani) duruma fırlatabilmektedir. (Tıbbiyede "switch" olarak adlandırılır).',
    },
];

export default function BipolarVsDepresyonBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/bipolar">Bipolar Bozukluk</Link><span>/</span>
                        <span>Depresyonla Farkı</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Karşılaştırma (Bipolar vs Depresyon)</span>
                        <time dateTime="2026-06-21">21 Haziran 2026</time>
                        <span>•</span><span>6 dk okuma</span>
                    </div>
                    <h1>Bipolar ile Depresyon Arasındaki Fark Nedir?</h1>
                    <p className={styles.heroDesc}>
                        Yataktan çıkmak istemeyen, sürekli ağlayan ve hayattan tat alamayan iki farklı insanın
                        karanlığı aynı mıdır? Psikiyatride hayati önem taşıyan "Tek Uçlu Depresyon" ile "Bipolar Çökkünlük"
                        ayrımını klinik hatlarıyla inceliyoruz.
                    </p>
                    <div className={styles.author}>
                        <div className={styles.authorIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <div><strong>Uzm. Dr. Abdullah Maraş</strong><span>Eryaman Psikiyatri İzlem Kliniği</span></div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.articleGrid}>
                        <article className={styles.article}>

                            <p className={styles.lead}>
                                <Link href="/hizmetler/depresyon">Klasik bir majör depresyon tablosunda</Link> kişi mutsuzluk,
                                enerjisizlik ve umutsuzluk girdabındadır. Bipolar bozukluk yaşayan bir birey de atak döneminde
                                tam olarak bu aynı dibe vuruşu (çökkünlüğü) deneyimler. Peki bu kadar net örtüşen
                                iki hastalığın, <Link href="/hizmetler/bipolar-bozukluk">Ankara Eryaman bipolar değerlendirme süreci</Link> sırasında
                                neden çok keskin (farklı) ele alınması gerekir?
                            </p>

                            <h2>1. Zıt Kutbun (Mani) Varlığı </h2>
                            <p>
                                Tek uçlu (unipolar) depresyonda hastanın duygu durumu asla "normalin üstüne" (koma derecesinde coşkulu)
                                sıçramaz. Arada bir yüzü gülse de genel bir çökkünlük hakimdir. Halbuki
                                bipolar bozukluktaki danışanın geçmiş öyküsünde muhakkak bir <Link href="/blog/mani-donemi-nedir">mani
                                    veya hipomani (yüksek enerji/taşkınlık) dönemi</Link> yatmaktadır. "Bir dönem çok enerjik oluyorum, günlerce uyumuyorum ama
                                sonra haftalarca hiçbir şey yapmak istemiyorum yataktan çıkamıyorum" diyorsanız; hekiminiz
                                beynin biyolojik sarkaçında "bipolar" spektrumunu arayacaktır.
                            </p>

                            <h2>2. Klinik Ayrımdaki En Büyük Zorluk: Hipomaniyi Unutmak</h2>
                            <p>
                                Psikiyatri uzmanlarına gelen hastaların büyük çoğunluğu "Hocam çok mutsuzum, depresyondayım" diyerek gelir.
                                Ancak bir kişi çok enerjik hissettiğinde (az uyuyup çok konuştuğunda) asla "Ben hastayım, aşırı neşeliyim doktora
                                gideyim" demez (Bkz. <Link href="/blog/hipomani-nedir">hipomani belirtileri</Link>). Bu yüzden, hastanın
                                bipolar genetiği gizli kalabilir. Eğer uzman hekim bunu klinik öyküleme ile (geçmişinize dair hassas
                                sorularla) deşmezse tedavi stratejisinde eksik kalabnilir.
                            </p>

                            <h2>3. Neden Ayrım Yapmak Zorunludur? ("Switch" Tehlikesi)</h2>
                            <p>
                                İki hastalığın farmakolojik yaklaşımları (kullanılan stratejiler) birbirinden son derece farklıdır.
                                Sırf mutsuz diye, bipolar olan ancak doktoruna mani geçmişinden bahsetmeyen bir yetişkine
                                "sadece salt depresyon hedefli (antidepresan)" terapi / tıbbi seyir uygulandığında;
                                beynin kimyası aniden o çok sinsi "mani" (patlama) dönemine aşırı hızlı tetiklenebilir.
                                "Switch (anahtar atması / evre atlaması)" dediğimiz bu tablo, kişinin bütün dengesini, maddi
                                varlığını veya mesleğini kaybetmesine sebebiyet verecek bir dürtüselliğe sürükler.
                            </p>

                            <h2>4. Aile Öyküsünün Rolü</h2>
                            <p>
                                Klasik depresyon daha çok strese (hayat olaylarına) veya genel <Link href="/hizmetler/anksiyete">bir
                                    anksiyete (kaygı ve evhamlar) baskısına</Link> bağlı olsa da; bipolar rahatsızlık organik (biyolojik, genetik)
                                altyapısı çok daha güçlü bir tablodur. Yakın ailenizdeki bireylerin benzer
                                coşku/çöküş <Link href="/blog/bipolar-atak-ne-kadar-surer">duygudurum dalgalanmaları döngüsüne sahip olması</Link>,
                                sizin teşhis profilinizi farklı bir kulvara oturtur.
                            </p>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Klinik Rehber / Psikiyatrist Uyarı Niteliklidir</strong>
                                Herhangi bir psikolojik durumda "Bende şu özellik var, ben depresyondayım/bipolarım" etiketini hastanın kendi kendine (veyahut testlerle) okuması sağlık açısından doğru değildir. Öznel yargılar yerine Ankara (Eryaman, Batıkent vs) havzasındaki muayenehanemizde (Uzm. Dr. Abdullah Maraş) klinik değerlendirme sağlanmaktadır. "%100 mucize başarı" ve "hap atarsın geçiverir" garantileri bilimi zedeler, tıbbi süreçler zaman alan bir yeniden inşadır.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <h3>Adını Yanlış Koymak Süreci Uzatır</h3>
                                <p>Kendinizi depresif sanıyor ama arada hiç "siz" olmayan o dürtüsel zamanları yaşıyorsanız (kavga, para vb) uzman hekime danışın.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Depresyon ve Bipolar Konsültasyonu →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Ankara Psikiyatri </h3>
                                <p>Birebir (gizli/klinik) seanslar ile Eryaman'da zihinsel ayrım (bipolar vs depresyon) tanısı.</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Doktor Değerlendirmesi(Yetişkin)</Link>
                            </div>

                            <div className={styles.sidebarCard}>
                                <h4>Yakın Durumlar</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/hizmetler/depresyon">Klasik Çökkünlük</Link></li>
                                    <li><Link href="/hizmetler/bipolar-bozukluk">İki Uçlu (Bipolar) Denge</Link></li>
                                    <li><Link href="/hizmetler/anksiyete">Anlamsızca Kaygılanma ve Endişe</Link></li>
                                    <li><Link href="/hizmetler/panik-atak">Birden Boğuluyor Gibi Panik Hali</Link></li>
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
