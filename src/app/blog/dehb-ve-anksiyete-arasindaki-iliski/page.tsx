import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'DEHB ve Anksiyete Arasındaki İlişki | Yetişkinlerde Kaygı Sorunları',
    description:
        'Odaklanamadığı veya işleri sürekli ertelediği için kendi kapasitesinden korkan yetişkin hastanın giderek yaygın anksiyete uykusuzluğu geliştirmesi.',
    alternates: { canonical: 'https://drabdullahmaras.com/blog/dehb-ve-anksiyete-arasindaki-iliski' },
    openGraph: {
        title: 'Birlikte Gelen Fırtına: Odak Güçlüğü Sonrası Başlayan Yetişkin Kaygıları',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Önce DEHB mi başlar yoksa Anksiyete mi?',
        answer: 'Erişkin DEHB yapısal (gelişimsel) bir durum olduğu için yıllar önce zemin hazırdır. Hasta bu dikkat zorlukları (hata yapma korkusu) nedeniyle süreç içinde üzerine bir anksiyete alevini inşa eder.',
    },
    {
        question: 'Kaygı ile dürtüselliğin farkı nedir?',
        answer: 'Anksiyetede "acaba rezil olur muyum, acaba başıma kötü bir şey gelir mi?" titremesi varken; DEHB dürtüselliğinde kişi o sonuca (kötü de olsa iyi de olsa) saniyesinde düşünmeden, felaketi hesaplamadan atlar.',
    },
    {
        question: 'Her anksiyete hastasında DEHB de mi vardır?',
        answer: 'Kesinlikle hayır; kaygı bozukluğu çok büyük oranda genetik yatkınlık veya büyük bir travma ile tek başına, sapasağlam odaklanan bir zihinde de gayet şiddetli gelişebilmektedir.',
    },
    {
        question: 'İkisi de aynı uzman tarafından mı yürütülmeli?',
        answer: 'Evet. İki tıbbi rahatsızlık da Ruh Sağlığı (Psikiyatrist) masasında eş zamanlı tartılır, dozları ve "ilk hangi yangının söndürüleceğine" doktor karar verir (bireysel klinik değerlendirme ötesi tavsiyeler alınmaz).',
    },
    {
        question: 'DEHB geçmezse anksiyete geçer mi?',
        answer: 'Eğer anksiyetenin altından yatan "rezil olma, işi bitirememe ve patrona yalan söylemek zorunda kalma" döngüsü kırılmazsa (yani DEHB ele alınmazsa); kaygı tıp eliyle baskılansa da kişi sosyal hayata döndüğü an tekrar tetiklenir.',
    },
];

export default function DehbVeAnksiyeteBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/eriskin-dehb">Erişkin DEHB</Link><span>/</span>
                        <span>Birleşik Kaygı Süreci</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Psikiyatri, DEHB, Anksiyete Bozukluğu</span>
                        <time dateTime="2026-06-03">03 Haziran 2026</time>
                        <span>•</span><span>5 dk okuma</span>
                    </div>
                    <h1>DEHB ve Anksiyete Arasındaki İlişki: Aynı Bedende Çifte İkilem</h1>
                    <p className={styles.heroDesc}>
                        Hayatı zaten ertelemelerle kontrolsüz ilerleyen DEHB hastası, bir noktadan sonra
                        bu başarısızlar yüzünden "Rezil olacağım, çok büyük bedeller ödeyeceğim" diyerek
                        klinik düzeyi yüksek bir çifte anksiyete (kaygı ve korku) ateşine teslim olur.
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

                            <h2 id="nedir-isleyis">"Bir İşleri Daha Kaçıracağım" Dehşeti</h2>
                            <p>
                                Klinikte <Link href="/blog/eriskin-dehb-nedir">Erişkin DEHB</Link> tanısı alan veya
                                bunu yıllardır gizli gizli yaşayan hasta; aslında kendi potansiyelinin düşüklüğünden değil,
                                "Sistemin işlediği şekilde organize edememekten" ve "işleri bitirememekten" muzdariptir.
                                Toplumsal "Tembel, dikkatsiz ve umursamaz" etiketleri hastayı,
                                <Link href="/blog/surekli-erteleme-davranisi-neden-olur">bitmek bilmeyen ertelemelerin</Link>
                                neticesinde rezil olma korkusuna terk eder.
                            </p>
                            <p>
                                İlerleyen yetişkinlik evresinde bu biriken borçlar, kızgın patronlar, küsmüş eş veya sevgililer
                                yığınının yaratmış olduğu "yetersizlik/çatışma" havuzu; çok büyük bir fırtınanın kopmasını
                                tetikler. İşte o fırtına, kendi başına çok ağır bir tıbbi durum olan
                                <Link href="/hizmetler/anksiyete">Kaygı (Anksiyete) hastası</Link> olup çıkacak olan krizlerdir.
                            </p>

                            <h2 id="odak">1. Kaygının Motorunu Kim Çalıştırıyor?</h2>
                            <p>
                                Zeki bir Erişkin hastası, o toplantıda anlatılanlara dikkat edemediğinin "olumsuz bir anlık dikkatsizlik"
                                olmadığının tam olarak bilincindedir. "Eyvah, yöneticim bana 3. maddeyi açıklarken ben
                                kesinlikle başka yere daldım, şimdi bana sorarsa ne diyeceğim" der ve o anda beynin
                                terleme, kalp çarpıntısı ve <strong>"ya kötü bir tabloyla çıkarsam"</strong> alarmını çalıştıran
                                Anksiyete uyanır. Bu, DEHB'nin doğurduğu tam bir <Link href="/blog/dikkat-daginikligi-mi-dehb-mi">Odaklanma güçlüğü ve kaygı ilişkisi</Link>
                                kompozisyonudur.
                            </p>

                            <h2 id="surekli-erteleme">2. Anksiyete "Dikkat"i Nasıl Yok Eder?</h2>
                            <p>
                                Kaygı bir bedene yerleştiğinde beynin tüm hayati fonksiyoları, amigdala dediğimiz korteks altı
                                bölge tarafından gasp edilir. Kişi artık "Acaba işteki patronum hatamı anladı mı", "Bugün arabayı kaza
                                yapar mıyım", "Eşim neden 5 saattir bana mesaj atmadı" çemberine tutulmuştur. Bütün bir gün
                                süren "kötü bir şey olacak" alarmı varken; zihin nasıl ocağı söndürmeye, nasıl makaleyi okumaya ve
                                faturasını yatırmaya dikkat edebilir ki?
                            </p>
                            <ul>
                                <li><strong>Yanlış Ayrım:</strong> "Ben çok unutkanım" zannederken aslında unutkanlığın kökünü besleyen tek sebep Anksiyetedir. </li>
                                <li>Bazen DEHB ile Anksiyete o kadar birbirini besler ki, doktor bu <Link href="/hizmetler/eriskin-dehb">Ankara Eryaman erişkin DEHB değerlendirme süreci</Link> sırasında,
                                    "Tavuk mu yumurtadan, yumurta mı tavuktan?" bilmecesiyle çok profesyonel bir ayıklama yapmak durumundadır.</li>
                            </ul>

                            <h2 id="durtusellik">3. Komorbidite: "Ağır Basan Taraf" Hangisi?</h2>
                            <p>
                                DEHB ile anksiyetenin bir arada bulunmasına psikiyatride komorbidite (eş-tanı) ismini vermekteyiz.
                                <Link href="/blog/eriskin-dehb-is-hayatini-nasil-etkiler">Erişkin DEHB iş hayatı ve evlilik kariyerinde</Link>
                                tahribatlar biriktirdikçe, hastanın özgüveni ufalanır. Gürültüden (kalabalıktan) kaçma, başkalarının
                                yargılarına karşı çok yoğun bir hassasiyet geliştirme ve <Link href="/hizmetler/panik-atak">panik atağın (krizlerin)</Link>
                                bedensel yorgunluk hissini de bünyeye ekler.
                            </p>
                            <p>
                                Uzman hekim masasına sadece uykusuzluk, el titremesi veya mide ağrısı şikayetiyle giden o hastanın;
                                derinliklerinde "işleri yetiştirememenin ve kendini yetersiz görmenin" o asıl kalıtsal-yapısal kökleri
                                aranır ve tıbbi plan bu zinciri baştan aşağı inceleyerek kurulur.
                            </p>

                            <h2 id="klinik-tutar">Karar Aşamasında Psikiyatrinin Önemi (Eryaman - Batıkent)</h2>
                            <p>
                                Eşlik eden durumlar varsa (yani depresyon, anksiyete, bipolar), tedaviyi standart şekilde değil;
                                çok hedefli bir bireysel psikiyatrik görüşme çatısında yönetmek mühimdir. Eğer doktor Anksiyeteyi tamamen susturup
                                sadece DEHB'ye odaklanırsa, uyanan nörokimyasal uyarım seviyeleri (kalp çarpıntısı gibi bedensel duyumlar)
                                hastadaki uykuda bekleyen paniği uyandırabilir. Eğer sadece Paniği dindirirseniz; hasta işten yine ve hepten
                                kovulur (çünkü hiç uyarılmaz/hiç işe başlamaz).
                            </p>
                            <p>
                                Uzm. Dr. Abdullah Maraş (Ankara Eryaman bölge ofisi/kliniği), hastanın kişiden kişiye değişebilen ruhsal metabolizmasına, zıt dinamiklerine ve nöro-psikiyatrik dengesine
                                özel bireysel bir strateji haritası çıkararak; hastayı o eski potansiyeline çekmeye kılavuzluk eder. Tırnakla kazınan
                                mesleki yetenekleri, kaygılı ellerin titremesine mahkum kalmaz.
                            </p>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Bilgilendirme Amaçlıdır</strong>
                                Belirtilen hastalık ve tablo örgüntüleri bir tıp hekiminin görüşüp değerlendirmesi gereken klinik durumlardır. Reçetesiz
                                ve doktor teşhisiz internet metinlerinden kesin kurallar, testler veya "100% tedavi" çıkmaz. İki ya da daha fazla bulgusu olan bir bireyin tespiti için polikliniğimiz/randevumuz ile iletişime geçmesi en garantili yol haritası olacaktır. Yetişkin psikiyatrisi prensiplerince ergen veya çocuklu sürelere bakılmamaktadır.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <p>Durmadan zihnini kemiren o kaygıların asıl kaynağında, çocukluğunuzdan beri hissettiğiniz dikkatsizliğin nörobiyolojik payı olabilir. Çözümü Ankara Eryaman’da, kliniğimiz bünyesinde konuşlandırıyoruz.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Kaygısız Odak Formülü Adımı →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Bu İki Cepheyle Savaş Gerekli</h3>
                                <p>Doktor yönlendirmesi için Eryaman (Ankara) Randevu sisteminden hekim tercihini doğrulayın.</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Klinik Üzerinden Alınız</Link>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>Psikiyatride Benzer Çizgiler</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/blog/eriskin-dehb-belirtileri-nelerdir">DEHB Zarları Aslında Nasıl Atılıyor?</Link></li>
                                    <li><Link href="/blog/ surekli-erteleme-davranisi-neden-olur">Zihin İşi Bölmez Mi?</Link></li>
                                    <li><Link href="/hizmetler/anksiyete">Anksiyeteniz Nasıl Kontrol Edilir?</Link></li>
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
