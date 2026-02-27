import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Dikkat Dağınıklığı mı DEHB mi? | Ankara Dikkat Eksikliği',
    description:
        'Her anlık unutkanlık veya odaklanma sorunu, klinik düzeyde Erişkin DEHB midir? İki tablo arasındaki yaşamsal farklar ve psikiyatrik ayrım ölçütleri.',
    alternates: { canonical: 'https://drabdullahmaras.com/blog/dikkat-daginikligi-mi-dehb-mi' },
    openGraph: {
        title: 'Geçici Unutkanlık ve Dikkat Dağınıklığı mı, Yoksa Yetişkin DEHB mi?',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Stres odaklanmayı bozar mı?',
        answer: 'Kesinlikle. Aşırı stres, duygusal problemler, ayrılıklar veya işteki kriz dönemleri beyindeki frontal lobun işlevini anlık olarak kitleyerek sağlam bir bireyi dahi "odaklanamayan", şaşkın ve dikkatsiz birine dönüştürebilir.',
    },
    {
        question: 'DEHB olup olmadığımı anlık bir olayla anlar mıyım?',
        answer: 'Hayır. Erişkin tablodaki nörobiyolojik bir bozukluk bir günlük, "bugün aklım dağınıktı anahtarı unuttum" olayıyla ölçülemez. Çocukluğa kadar uzanan geniş ve süreğen (hayat boyu devamlı) bir klinik zemin bulgusu gerektirir.',
    },
    {
        question: 'Telefonlar ve sosyal medya DEHB yapar mı?',
        answer: 'Sosyal medya kullanımı beynin dopamin sistemini yapay yollarla tüketir; bu yüzden günümüz insanı zaten "geçici, kazandığı dikkat dağınıklığına" sahip olur. Ancak bu, klinik/genetik temeli olan yapıyı "doğrudan oluşturur" demek tıp nezdinde hatalıdır.',
    },
    {
        question: 'Dikkat dağınıklığı kendi kendine geçer mi?',
        answer: 'Eğer bir vitamin eksikliği, stres durumu ya da uykusuzluk (geçici nedenler) kaynaklıysa o sorunlar kalkınca kendi kendine düzelir. Lakin klinik düzeydeki DEHB tablosu, tıbbi bir psikiyatrik müdahale (bireysel olarak) gerektirmektedir.',
    },
    {
        question: 'Psikiyatristle ne zaman iletişime geçmeliyim?',
        answer: 'Bu dikkatsizliğin (ve iş erteleme sorununuzun) mesleğinize son verilecek boyutta kritik hatalara dönüştüğü ve ilişkilerinizde telafi edilemez hasarlar bıraktığı an; ertelemeyi kesmeli ve tıbbi bir görüşme oluşturmalısınız.',
    },
];

export default function DikkatDaginikligiDehbBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/eriskin-dehb">Erişkin DEHB</Link><span>/</span>
                        <span>Geçici Dikkat mi, DEHB mi?</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Dikkat Eksikliği, Bilgilendirme</span>
                        <time dateTime="2026-06-15">15 Haziran 2026</time>
                        <span>•</span><span>5 dk okuma</span>
                    </div>
                    <h1>Dikkat Dağınıklığı ile Hastalığın Farkı Nerede?</h1>
                    <p className={styles.heroDesc}>
                        "Anahtarlarımı masada unuttum" diyerek kendinize DEHB teşhisi mi koyuyorsunuz?
                        Hangi unutkanlıkların geçici bir yaşam yorgunluğu, hangilerinin klinik ve yapısal
                        bir psikiyatrik bozukluk olduğunun profesyonel ayrımını yapalım.
                    </p>
                    <div className={styles.author}>
                        <div className={styles.authorIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <div><strong>Uzm. Dr. Abdullah Maraş</strong><span>(Ankara Psikiyatrist Uzmanı)</span></div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.articleGrid}>
                        <article className={styles.article}>

                            <h2 id="nedir">Geçici Zihin Sisi (Yaşamsal Dikkat Dağınıklığı)</h2>
                            <p>
                                Yoğun çalışma saatleri, ekonomik baskılar veya uykusuz geçirilmiş bir hafta sonrasında ocağı
                                kapattığınızdan emin olamamanız, DEHB (Dikkat Eksikliği ve Hiperaktivite Bozukluğu) anlamına
                                gelmez. Geçici dikkatsizlik, tamamen beynin stresle veya yorgunlukla baş etme kapasitesinin
                                geçici olarak dolmasından kaynaklanır.
                            </p>
                            <ul>
                                <li>Dinlenilince, tatile gidince odak eski gücüne kavuşur.</li>
                                <li>Birey hayatı üzerinde kontrolü kaybetmez, sadece "şu ara" işlerini yetiştirememektedir.</li>
                                <li>Arkadaş ilişkilerinde sürekli unutkan ve "dinlemiyor" konumuna düşmez, dönem dönem dalgınlaşır.</li>
                            </ul>

                            <h2 id="dehb-ayrim">Peki DEHB Nerede Başlar?</h2>
                            <p>
                                Erişkin Dikkat Eksikliği ise kısa bir tatil molası, birkaç günlük diyet veya "hafta sonu uyuma"
                                ile üstesinden gelinemeyecek kadar hücre düzeyinde (nörobiyolojik) bir <strong>iletişim kusurudur</strong>.
                                Dopamin metabolizmasındaki bu yapısal farklılık nedeniyle; kişinin
                                "Geçici dikkat sorunlarında" anlatan özelliklerle hiçbir ilgisi kalmayan süregelen bir
                                dağınıklığı mevcuttur. Belirtilerin etkisi kişiden kişiye değişebilir oluşunun altı çizilmelidir fakat
                                bir tablo kliniğe evrildiğinde tablo yıllarca süreklilik gösterir.
                            </p>

                            <h2 id="fark-1">Ayrım 1: Zamanın Sürekliliği</h2>
                            <p>
                                35 yaşındaki bir mühendis, eşinden yeni boşandığı veya işsiz kaldığı ay sürekli bardağı kırıyor
                                ve hiçbir işe elini süremiyorsa (ertelemeye devam ediyorsa); bu
                                <Link href="/hizmetler/depresyon">çökkünlüğe bağlı veya reaktif</Link> (olaya anlık oluşan)
                                bir zihinsel tutukluktur.
                            </p>
                            <p>
                                İlgili hastamızda ancak ilkokul yıllarından bile "çok dağınık, her eşyasını kaybeden" çocuk olarak
                                bilindiğini, üniversitede 3 dersten okulu zar zor bitirdiğini ve mesleğinin iyi yıllarında
                                (stres yokken) dahi toplantılarda odaklanamadığını görüyorsak; klinik ibre tıp uzmanı (hekim)
                                nezdinde Dikkat Eksikliği yönüne çevrilir.
                            </p>

                            <h2 id="fark-2">Ayrım 2: Hayatın Her Alanına Sızması (Global Yıkım)</h2>
                            <p>
                                Eğer bir ebeveynseniz; sadece çalıştığınız evraklarınızı işyerinde unutuyor ama çocuğunuzun
                                maç saatini, arabanızın tamir tarihini vs. saniyesi saniyesine (hiç yorulmadan) organize
                                edebiliyorsanız, o işyerinden sıkılmışsınız demektir.
                            </p>
                            <p>
                                Lakin klinik erişkin DEHB hastası bu karmaşayı <Link href="/blog/eriskin-dehb-is-hayatini-nasil-etkiler">iş yerinde</Link>
                                hissettiği kadar trafikte, tatil planında, sevdiği yazarın kitabını okurken veya market
                                sırasındayken de yoğun şekilde her anında hissetmek zorundadır. Alan (cephe) tek bir
                                noktalı değil, çok boyutludur.
                            </p>

                            <h2 id="fark-3">Ayrım 3: İrade vs Biyoloji (Erteleme Psikolojisi)</h2>
                            <p>
                                Dikkati sadece meşguliyetten dağılan kişi, "bugün yapmıyorum, yarın yapacağım zaten"
                                der, o işi cidden yarın yapar. Ama <Link href="/blog/surekli-erteleme-davranisi-neden-olur">sürekli erteleme davranışına giren</Link>
                                hasta, "Hakkaten kalkıp şunu yapmalıyım, neden kalkamıyorum, neden bu evrak masada duruyor"
                                diyerek kendisine içerde savaş açar ancak o biyolojik freni söküp işe bir türlü
                                başlayamaz. Taaa ki son bir saat kalıp kovulma korkusu alevlenene, büyük kriz adrenalini vücuda pompalanana
                                dek... Çünkü zihin ancak o adrenalin baskısıyla dopamin merkezini uyararak odağı aktif hale getirebilir.
                            </p>

                            <h2 id="baska-neler-karisir">Vitaminler ve Tıbbi Testlerin Ayrıştırıcı Yeri</h2>
                            <p>
                                Aşırı unutkan olan bazı hastalar "DEHB miyim?" korkusuyla hekime veya
                                <Link href="/randevu">Ankara (Eryaman vb.) Psikiyatrist görüşmesine</Link> başvurmadan
                                önce zihinsel güçlendirici vitaminlere sarılır.
                            </p>
                            <ul>
                                <li>B12, Folik asit veya Tiroit fonksiyonları incelenmeden tanı kesin konmaz.</li>
                                <li>Kronik <Link href="/hizmetler/anksiyete">Anksiyete hastalarında</Link> sürekli
                                    bir tehlike beklentisi olacağından dikkat çok dağınıktır. (Hekim ikisini ayrıştırır.)</li>
                                <li>Ağır Uyku Apnesi olan hastalar dahi ertesi güne beynine az oksijen gittiği için "odaklanamayan aptal fıçısı" hissiyle uyanabilir.</li>
                            </ul>

                            <h2 id="kime-basvurulur">Bu Dört Yol Ağzında Tanıyı Kim Koyar?</h2>
                            <p>
                                <Link href="/hizmetler/eriskin-dehb">Erişkin DEHB Değerlendirmeleri</Link> veya depresyon;
                                sizin okuduğunuz her yazıda hissettiğiniz ufak bulguların varlığı ile "Evet kesin bende"
                                denecek tanılar kalıbı değildir. Tam teşekküllü tıp (Ruh Sağlığı) uzmanları,
                                bireysel öykünüzü 45 dakika ile 1 ay dinleyerek, aileden aldığınız verilerle bu haritayı
                                ilmek ilmek ayrıştırır. "Acaba bende ne var?" diyerek geçirdiğiniz panikli geceleri;
                                bilimsel bir yaklaşımla rafa kaldırabilirsiniz.
                            </p>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Klinik Uyarısı</strong>
                                Yıllar boyu odak sorunundan dolayı "isteksiz veya dağınık" profil çizen erişkinlerde; birebir hekim kontrolü
                                dışında hiçbir gıda, diyet veya yöntem durumu "%100 başarıyla ve kesin olarak tedavi" edemez (çünkü konu yetersiz efor değil). Klinik iyileşme, her yetişkinin sosyal durumuna, beyin (frontal korteks) kimyasına hastaya özel bir farmakolojik plan/terapi dengesiyle kişiden kişiye değişebilecek seviyelerde şekillenir; vaatlere dayalı tıp uygulanmaz.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <p>Kendinizi boş yere suçlamak veya hayatı kaçırmak mı, yoksa nörobiyolojik bir profesyonel tıp pusulası mı? Ankara (Eryaman - Altay Mh.) ofisi randevunuzu seçerek kararınızı alın.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Klinik Değerlendirme Al →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Geciktirmeyin</h3>
                                <p>Hayatı sürekli kaçırıyorsanız, randevu takviminizde (Ankara) bireysel bir seans yeri açın.</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Doktor Randevusu</Link>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>Okumaya Devam Edin</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/blog/eriskin-dehb">Sayfa Hub: Erişkin DEHB</Link></li>
                                    <li><Link href="/blog/surekli-erteleme-davranisi-neden-olur">O Başlanamayan Projeler...</Link></li>
                                    <li><Link href="/blog/eriskin-dehb-belirtileri-nelerdir">Hastalık Boyutu Gerçekten Neler?</Link></li>
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
