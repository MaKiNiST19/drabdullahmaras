import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Zarar Verme Düşüncesi OKB mi? Kontrolü Kaybettiğim Anlar | Uzm. Dr. Abdullah Maraş',
    description:
        'İstemeden, aniden gelen: "Ya sevdiklerime bıçakla zarar verirsem?" düşüncesi nedir? Zarar verme obsesyonunun (Harm OCD) psikiyatriyik süreç değerlendirmesi.',
    alternates: { canonical: 'https://drabdullahmaras.com/blog/zarar-verme-dusuncesi-okb-mi' },
    openGraph: {
        title: 'Zarar Verme Obsesyonu OKB mi? İstenmeyen Düşünceler',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Aklıma gelen şiddet içerikli sahneler aklımı kaybettiğimi mi gösterir?',
        answer: 'Kesinlikle hayır. Bu düşüncelerin sizi korkutması zaten sizin niyetinizle uyuşmadığını gösterir. Bu tür düşünceler kişinin istemediği ve kendisini rahatsız eden düşüncelerdir; sadece istenmeyen korkutucu sinyaller (OKB) paketidir.',
    },
    {
        question: 'Bu düşüncelere sahipsem, bir gün gerçekten bunları yapar mıyım, potansiyel bir suçlu / tehlikeli miyim?',
        answer: 'Hayır. OKB "zarar verme obsesyonlarında (Harm OCD)", hastanın bu eylemi gerçekleştirme niyeti SIFIRDIR. İstemdışıdır ve tam aksine birey bundan kaçınmak (sevdiklerini korumak için, örneğin evdeki makasları saklamak) için büyük efor sarf eder.',
    },
    {
        question: 'Neden sürekli kendimi sorguluyorum: Acaba az önce ittim mi, ya yaparsam diyorum?',
        answer: 'Çünkü beyninizin güvence (emin olma) mekanizması bozuktur. Anksiyeteniz size "Emin değilsin, belki isteyebilirsin" sahte tehdidini sundukça; siz o düşünceden kurtulmak için sürekli geçmişe veya hissiyatınıza dair kontrol kompulsiyonu (güvence arayışı) yaparsınız.',
    },
    {
        question: 'Zarar verme düşünceleri kendi kendine bir anda susar mı?',
        answer: 'Siz bu düşüncelere direndikçe ve "Sakın düşünme" dedikçe genellikle anksiyete beslendiği için güçlenirler. Profesyonel psikiyatrik değerlendirme çerçevesinde ilerleyen klinik yaklaşım ile o sinir şoklarının ve vesveselerin hızı dindirilebilir. ',
    },
    {
        question: 'Ankara Eryaman’da zarar verme düşüncesi takıntılarımı hangi uzman değerlendirir?',
        answer: 'Toplumda "çok utanılarak, saklanarak" çekilen bu ızdırabı (Harm OCD tablosunu); Ankara Eryaman, Altay Mh.\'de bulunan psikiyatri (Yetişkin) muayenehanemizde Uzm. Dr. Abdullah Maraş aracılığıyla tüm bilimsel/kişisel gizlilik içinde tıbbi olarak değerlendirmekteyiz.',
    },
];

export default function ZararVermeDusuncesiBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/okb">OKB</Link><span>/</span>
                        <span>Zarar Verme Fikri</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>OKB</span>
                        <time dateTime="2026-05-05">5 Mayıs 2026</time>
                        <span>•</span><span>8 dk okuma</span>
                    </div>
                    <h1>Zarar Verme Düşüncesi OKB mi? Kontrolü Kaybetme Korkusu</h1>
                    <p className={styles.heroDesc}>
                        Mutfakta soğan doğrarken (veya yolda eşinizle yürürken) zihninize bir şimşek gibi giren
                        devasa bir şiddet sahnesi: "Ya elimdeki şu bıçağı bir an saplarsam? Ya aklımı yitirip
                        balkondan aşağı itersem?" Bu istenmeyen senaryoları (Zarar Verme OKB'sini - Harm OCD) klinik olarak aydınlatıyoruz.
                    </p>
                    <div className={styles.author}>
                        <div className={styles.authorIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <div><strong>Uzm. Dr. Abdullah Maraş</strong><span>Ruh Sağlığı (Psikiyatrist) Uzmanı</span></div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.articleGrid}>
                        <article className={styles.article}>

                            <p className={styles.lead}>
                                Psikiyatri odalarında, dünyanın belki de en zararsız, en şefkatli
                                insanları karşı koltuğa geçer ve gözyaşları içinde o derin saklı sırlarını
                                verirler: "Aklından öylesine vahşi, öylesine korkunç şeyler geçiyor ki;
                                kendi çocuğuma veya eşime zarar vermekten korkuyorum. Acaba ben kötü bir
                                insan mıyım, potansiyel bir katil yattığı için mi içimde bunları düşünüyorum?"
                            </p>

                            <h2>1. Klinik Durum: Zarar Verme Niyeti Asla "Yoktur"</h2>
                            <p>
                                Yanıt, tıbbın ve nöro-biyolojinin en net konularından biridir. Hayır,
                                siz zarar verme isteği ("eylem niyeti") duymuyorsunuz. Tam aksine sizin
                                yaşadığınız şey obsesif kompulsif bozukluğun (OKB'nin) en dramatik tiplerinden biri
                                olan <strong>Harm OCD (Zarar Verme Obsesyonu)</strong>'dir.
                            </p>
                            <p>
                                Bu durumdaki birey:
                            </p>
                            <ul>
                                <li>Zihne düşen dürtüleri ASLA istemez. En büyük ızdırabı ("Bu düşünceye nasıl sahip olabilirim") suçluluğudur.</li>
                                <li>Düşüncelerden öylesine dehşete kapılır ki, çoğu an <strong>anlık <Link href="/hizmetler/panik-atak">panik atak
                                    (krizi) yaşayacak gibi</Link></strong> <Link href="/hizmetler/anksiyete">ağır bir kaygı
                                        (anksiyete) eşiğine</Link> vurur.</li>
                                <li>Gerçek bir cani, içinden geçen vahşetten keyif alır ya da eylemi planlar. OKB hastası ise, bundan kaçınmak için o an aklını (kontrolünü) yitireceği korkusuyla evdeki tüm sivri aletleri saklar.</li>
                            </ul>

                            <h2>2. Kontrolü Kaybetme Fobisi</h2>
                            <p>
                                Aslında beynin "gerçekleşme ihtimaline karşı" ürettiği bu yoğun alarm hali,
                                kişide kontrolünü tamamen yitireceği kaygısını doğurur.
                                Ancak bu tür düşünceler kişinin istemediği ve kendisini rahatsız eden düşüncelerdir.
                                Literatürde bu düşüncelerin eyleme dönüştüğü bir vaka döngüsü bulunmamaktadır.
                                OKB'li bireyler eylemde bulunmaktan çekinir ve kendisini, çevresini korumaya yönelik
                                aşırı hassasiyetler geliştirirler.
                            </p>

                            <h2>3. Yıpratıcı Savunmalar: Kaçınma Süreçleri</h2>
                            <p>
                                Elbette bu korkunç görüntüler o kadar gerçek gibi gelir ki ("Ya yaparsam"), kişi
                                son çare olarak kompulsiyon (savunma) geliştirir:
                            </p>
                            <ul>
                                <li><strong>Gizleme:</strong> Tüm meyve bıçakları, iğneler, makaslar çöpe atılır. Evdeki ilaçlar kilitlenir (Ya gece kalkıp içirirsem/içersem, camdan aşağı atlarsam).</li>
                                <li><strong>Kontrol ve Soyutlanma:</strong> "Şu an göz bebeklerim büyüdü mü? İçimde ona karşı bir öfke kırıntısı var mı?" gibi sürekli kendini test eder. En acısı, zarar vermemek için sevdiği çocuğu kucağına (fobik düzeyde kaçınarak) aylarca almaz. (<Link href="/blog/okb-belirtileri">Klinik OKB Belirtileri Döngüsü</Link>)</li>
                            </ul>
                            <p>
                                Birey toplumdan öylesine soyutlanır, öylesine sessiz kalır ki ("ben dışarı çıkmamalıyım sorunluyum"
                                diyerek), işin ucu mutlak bir <Link href="/hizmetler/depresyon">OKB’ye eşlik eden depresyon belirtileri</Link> tablosuna değin uzanabilir.
                            </p>

                            <h2>4. Nasıl Yaklaşmalısınız? ("Acaba?" ile Savaşmayı Bırakmak)</h2>
                            <p>
                                Bilinmelidir ki, beyninizde bu sahnelerin yanıp sönüyor olması, beynin elektrik-kimyasal
                                iletimindeki <em>hatalı uyarı şemasından</em> ibarettir. Zaten karakteriniz için çok değerli
                                ve aksi uçta olduğu için amigdalanız bu konuyu bulup size musallat etmiştir (bkz.
                                <Link href="/blog/dini-takintilar-okb-mi">Dini inanç sahiplerinin dini obsesyonlara tutulması gibi</Link>).
                            </p>
                            <p>
                                Bu zihinsel döngü sizin kaderiniz değildir. Düşünceyi "Düşünmeyeyim" diye
                                sansürledikçe (baskı oldukça) beynin korkup o düşünceye odaklanacağını bilmeniz gerekir.
                                Ankara Eryaman (ve çevre Etimesgut bölgesi) ikametgahında, yetişkinlerin gizli ızdırabı olan
                                bu "istemsiz dürtü ve kontrol obsesyonları"; Uzm. Dr. Abdullah Maraş Psikiyatri Kliniğinde
                                etik gizlilik ve bilimsel anlayış (nöro-psikiyatrik) eşliğinde klinik değerlendirmeye alınır.
                            </p>
                            <p>
                                Seanslarda uzman psikiyatristinizle "Bu benim düşüncem değil, hastalığımın gürültüsü" ayrımı
                                yapılandırıldığında, hedeflenen şey (ilaçlar ve/veya güven teşkil eden muayenelerle) beynin o tehlike alarm
                                şalterinin indirilmesidir. Tablonun iyileşme boyutu elbette kişiden kişiye değişebilir fakat tıbbi
                                yol sizi o korkunç utanç duygusuyla yıllarca izole yaşamaktan kurtaracak anahtardır.
                            </p>


                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Yetişkin Sağlığı Bilgilendirme Notu</strong>
                                Yukarıda yazılı satırlar hiçbir klinik acilin / acil teşhisin ve tedavinin yerini tutmaz; OKB hastasını anlamlandırma odaklıdır. Bireyin aklına giren düşüncelerin içeriği eylem/eylemsizlik yönüyle bir Ruh Sağlığı tıbbi doktoru tarafından
                                kesinlikle (teke tek konsültasyonlarla) ekarte edilmelidir. Hastanedeki tıbbi yolculuk "%100 başarı
                                yada kesinlik garantisiyle" ilerlemez ancak bireyin yaşam enerjisi adına bu düşüncelerin klinik olarak adlandırılması rahatlama sağlaması açısından faydalıdır.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <h3>Zihniniz Sizi Acımasızca Yargılamasın</h3>
                                <p>Eryaman Altay Mahallesi kliniğinde; sizi insanlıktan çıkaracakmış gibi gelen o düşüncelerin (aslında sadece yanlış çalan OKB sinyalleri olduğunun) takibini psikiyatrist hekimimizle yapın.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Psikiyatri Ön Görüşmesi Al →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Özel Psikiyatri Randevusu</h3>
                                <p>O ağırlığı eşinize, kimseye duyurmadan yorucu geçirdiğiniz yalnızlığı (uzman hekimle) Eryaman'da çözümleyin.</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Değerlendirme</Link>
                            </div>

                            <div className={styles.sidebarCard}>
                                <h4>Diğer Türleri ve Kaygılar</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/hizmetler/okb">Genel OKB Sınıflandırmaları</Link></li>
                                    <li><Link href="/blog/surekli-kontrol-etme">Sürekli Arka Planda Kontroller</Link></li>
                                    <li><Link href="/hizmetler/panik-atak">Birden Aklıma Girip Panik Ediyor</Link></li>
                                    <li><Link href="/hizmetler/depresyon">Utanç ve Çöküş İzolasyonu</Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* FAQ Schema */}
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
