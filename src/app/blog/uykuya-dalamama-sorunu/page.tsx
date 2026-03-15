import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Uykuya Dalamama Sorunu | Erişkinlerde Yatağa Geçiş Krizleri',
    description:
        'Yatağa girildiğinde başlayan uykuya dalamama (insomnia), kafaya takılan düşünceler ve zihnin kapanmama direnci hakkında tıbbi değerlendirmeler.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/uykuya-dalamama-sorunu' },
    openGraph: {
        title: 'Yatağa Giriyorum Ama Uyku Gelmiyor: Düşünce Susmuyor',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Uykuya dalmak ne kadar sürmelidir?',
        answer: 'Fizyolojik onarıma ve zihinsel suskunluğa geçen bir erişkinin yatağa yattıktan sonra (ve tüm ışıklar kapandıktan) 15 ila 20 dakika içerisinde sağlıklı bir uyku frekansına geçmesi tıbben norm kabul edilir.',
    },
    {
        question: 'Saatlerce yatakta dönmek hastalık mıdır?',
        answer: 'Eğer bu durum haftada en az 3 gece yaşanıyor ve aylar sürüyorsa; ortada sıradan bir kahve çarpıntısı veya heyecan değil; psikiyatrik "başlangıç (uykuya dalma) insomniyası" gibi daha derin bir bozukluk olabilir.',
    },
    {
        question: 'Yatağa girmeden önce telefon bakmak uykuya dalmayı engeller mi?',
        answer: 'Hem de çok şiddetli engeller. Telefonun mavi ışığı beyni "gündüz oldu" sanrısına ikna ederek melatonin (uyku) üretim kulesini kapatır ve zihin, ekrandaki aksiyonlu bilgilerle dopamin (uyanıklık) hormonuna boğulur.',
    },
    {
        question: 'Kitap okumak uykuya daldırır mı?',
        answer: 'Gevşemeyi desteklese de; eğer beyninizdeki o yangının sebebi ertesi günkü bir mahkeme, kovulma korkusu veya bitirilmemiş devasa bir proje ise o "ağır stresi" okunan kitap ve harfler hiçbir hekim yardımı olmadan tamamen örtbas edemez.',
    },
    {
        question: 'Uyku ilacı kullanmak her sorunu çözer mi?',
        answer: 'Sorunu tedavi etmez, o geceyi geçirmenizi sağlar. Doktor/psikiyatri eşliği olmadan rastgele (başkalarının tavsiyesiyle) kullanılan moleküller, ertesi gün tam felç (sedasyon) hali yaratır ve daha yıkıcı bir kısır döngü (bağımlılık) başlatabilir.',
    },
];

export default function UykuyaDalamamaSorunuBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/uyku-bozukluklari">Uyku Bozuklukları</Link><span>/</span>
                        <span>Dalamama (Başlangıç) İnsomniyası</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Psikiyatri, Uyku Kalitesi, Zihin Meşguliyeti</span>
                        <time dateTime="2026-06-12">12 Haziran 2026</time>
                        <span>•</span><span>5 dk okuma</span>
                    </div>
                    <h1>Uykuya Dalamama Sorunu: Kafadaki O Susmayan Sesler</h1>
                    <p className={styles.heroDesc}>
                        "Bütün gün işte o kadar yoruldum ki kafamı yastığa koysam sızarım" dileyerek yatıp;
                        ışıklar kapandığı andan itibaren beynin içinde adeta bir panayır kurulması, saatlerce
                        duvara ve tavana bakıp uykuyu beklemek...
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

                            <h2 id="nedir-stres">Neden İnsan "Gün Bitti" Diyemez?</h2>
                            <p>
                                Uyuma becerisi, evrimsel (biyolojik) manada; etraftaki dış tehditlerin kaybolduğuna (yani mağarada
                                artık aslan vs. olmadığına) beynin %100 oranında güvenmesiyle "Vücut sistemini rölantiye" alma şalteridir.
                            </p>
                            <p>
                                İlerleyen 30'lu 40'lı yaşların devasa bir mesaisini çekip sızlayarak eve dönen erişkin hasta; "Çok yorgunum,
                                yatağa giriyorum ama uyku gelmiyor" diye feryat ederken bilmez ki; beyni hala o "aslanları (kredileri,
                                bitmeyen evrakları, mutsuz evliliğindeki tartışmaları)" kapının önünde bekliyor zannından (vesvesesinden) kurtulamamıştır.
                                Bu kaygıyı silmeyen beden, kişiyi saatlerce yatakta döndürerek bir <Link href="/blog/uykusuzluk-neden-olur">uykusuzluk zindanına (başlangıç insomniyası)</Link>
                                atıp kapıyı da kilitler.
                            </p>

                            <h2 id="ikincil-bozukluk">Dış Sesler Biter, İç Savaş Başlar</h2>
                            <p>
                                Televizyonların gürültüsü, çocukların sesi ve iş telefonları sustuğu zaman kişinin sadece kendisiyle ve vicdanıyla
                                başbaşa kaldığı tek yer gece yastığıdır. Bütün gün boyunca beynini suni gündemlerle oyalayıp "acılarından kaçan"
                                veya o gün yüzleşemediği her sorunu "akşam düşünürüm" diye halının altına süpüren bir
                                <Link href="/hizmetler/anksiyete">Anksiyete hastası (kaygı ile boğuşan kişi)</Link>; yatakta hepsinin bedelini
                                çok faiziyle öder. Zihin der ki: "İşte şimdi buradayız, ne kaçacak yerin var ne de TV gürültün, bütün o korkularını masaya yatır."
                            </p>
                            <ul>
                                <li>Sonuç olarak nabız yavaşlamak yerine kalpte gümbürder ve hasta bırakın uyumayı, aksine güne yeni başlar gibi pür dikkat enerjiyle dolar.</li>
                            </ul>

                            <h2 id="depresyon-bagi">Uyku Yatağının Stres Alanına Dönüşmesi</h2>
                            <p>
                                Hastanın yaptığı en büyük klinik-davranışsal hatalardan biri; o uykuya dalamadığı saatlerde (mesela 3 saat
                                boyunca) o yatağın içerisinde sürekli çırpınarak sağa ve sola dönmesidir (Acı çekerek saatlere bakmasıdır).
                                Bu eylem zihne; "Bu yatak bir uyku ve dinlenme yeri değil, saatlerce kıvranıp ıstırap çektiğimiz bir bataklık
                                bölgesidir" mesajını aşılar. Bu yüzden hasta birkaç hafta sonra artık o yatak odasının sadece kapısına geldiği an,
                                o yatağı gördüğü ilk saniyede bir <Link href="/hizmetler/panik-atak">panik ve korku hissiyle (ya yine aynı şeyi yaşarsam evhamıyla)</Link> dolarak asıl düğümü boğazına dolar.
                            </p>

                            <h2 id="fiziksel-fizyolojik">Erişkin DEHB Zihninin "Bitiremediği Görevler" Oyunu</h2>
                            <p>
                                Tıbbiyenin en spesifik alanlarından biri olan <Link href="/hizmetler/eriskin-dehb">Erişkin Yetişkin DEHB spektrumunda</Link>;
                                dikkat dağınıklığı gündüz saatlerinde hastayı o kadar sömürür, o kadar çok işi
                                <Link href="/blog/surekli-erteleme-davranisi-neden-olur">ertelemeye sürükler ki;</Link> hasta yatağa
                                girdiğinde beyni bu "yarım bırakılmış, yapılmamış yığınca görevin suçluluğu ve telafisiyle" yanar.
                                O saatten sonra aklı bambaşka, birbiriyle eşleşmeyen 15 konuya atlayarak kişiyi uyanık bir "sanal" rüyaya
                                sürükler de, bir türlü gerçek uykuya bağlamaz.
                            </p>

                            <h2 id="psikiyatri-neden-sart">Hekim Desteği ve Değerlendirme Zinciri (Ankara-Eryaman)</h2>
                            <p>
                                Uzman değerlendirmesinin eksik bırakıldığı, aylarca o yatakta çekilen acının; kişiyi sabah tamamen
                                tüketmiş, hayattan zevk alamayan veya kazalara meyilli, dikkatsiz bir öfke makinesine dönüştüreceği aşikardır.
                                Bunun önüne geçmenin (geçici bir "uyku geldi" hissi yaratmaktan fazlasının) tek rotası klinik bir
                                psikiyatrik muayenesidir.
                            </p>

                            <p>
                                Uzm. Dr. Abdullah Maraş, Eryaman (Ankara / Batıkent ve Etimesgut vs.) psikiyatri randevuları
                                çerçevesinde bu tabloda; (Uykuyu ne kaçırıyorsa), uyku öncesi koku ve şartlanma mekanizmalarınızı
                                <Link href="/hizmetler/uyku-bozukluklari">Ankara Eryaman uyku bozuklukları değerlendirme sürecinden</Link> geçirerek (bireysel klinik yapıyla),
                                hedefli tedavi (anksiyete/depresyon gibi altta yatan ana kökün tamiri) uygular.
                                Zihni uyutmak demek; zihnin altından o çok yorucu ocağı çekip ateşi söndürmekle başlar.
                                Semptom ve direnç kişiden kişiye değişebilir olduğu için o uykunun kilidini bulacak makam uzmanlıktır.
                            </p>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Klinik Uyarısı</strong>
                                Belirtilen durumlar yetişkin tıp disiplini (psikiyatri) nezdindeki olgulardır. İnternette yer alan makaleler ve "bu garantidir" diyen tavsiyeler
                                asıl tıbbi muayenenin (Psikiyatrik muayenenin) yerini almaz, tedavisi/yönlendirmesi mutlak bir görüşme ve bireysel değerlendirmeyle sağlanır.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <p>Her gece saatlerle savaşıp sabaha yorgun doğduğunuz o döngüden bir an önce hekim rotasıyla kurtulun. Hastalığınız uyku değil, ardında uyanan görünmez kaygılardır.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Klinik Uyku Terapisi →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Bu Döngüleri Kırın</h3>
                                <p>Sizi yatağa esir eden sebepleri, tıp alanına çekerek analiz edip çözelim.</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Klinik Üzerinden Alınız</Link>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>Uykunun Öteki Yüzü</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/blog/gece-sik-uyanma-nedenleri">Uykuya Dalıp da Uyananlar (Sabahlayanlar)</Link></li>
                                    <li><Link href="/hizmetler/anksiyete">Anksiyete O Yatağı Nasıl Savaş Alanı Yapar?</Link></li>
                                    <li><Link href="/hizmetler/uyku-bozukluklari">Genel Uyku Bozuklukları Değerlendirmesi</Link></li>
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
