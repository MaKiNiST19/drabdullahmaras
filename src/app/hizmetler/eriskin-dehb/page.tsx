import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon/page.module.css';

export const metadata: Metadata = {
    title: 'Ankara Eryaman Erişkin DEHB Değerlendirmesi | Uzm. Dr. Abdullah Maraş',
    description:
        'Erişkin DEHB belirtileri, dikkat dağınıklığı ve odak sorunları hakkında bilgilendirme ve Eryaman’da psikiyatrik değerlendirme süreci.',
    alternates: { canonical: 'https://drabdullahmaras.com/hizmetler/eriskin-dehb' },
    openGraph: {
        title: 'Ankara Eryaman’da Erişkin DEHB Değerlendirmesi',
        description: 'Erişkin DEHB belirtileri, dikkat dağınıklığı ve erteleme döngüleri hakkında yetişkin psikiyatrik değerlendirme.',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Erişkin DEHB nedir?',
        answer: 'Erişkin DEHB, kişinin beynindeki dikkat, odaklanma, dürtü kontrolü ve zaman yönetiminden sorumlu nörobiyolojik sistemlerin farklı bir işleyiş göstermesi sonucu ortaya çıkan yapısal bir tablodur. Bireysel değerlendirme ile ayırt edilir.',
    },
    {
        question: 'DEHB belirtileri nelerdir?',
        answer: 'Dikkati sürdürmekte zorlanma, başlanılan işleri bitirememe, erteleme döngüsüne girme, odaklanma sorunları ve bazen bedensel/zihinsel hiperaktivite (huzursuzluk) ana belirtilerdir.',
    },
    {
        question: 'Erişkin DEHB geçer mi?',
        answer: 'Erişkin DEHB yapısal (nörogelişimsel) bir durumdur; belirtilerin şiddeti kişiden kişiye değişebilir. Yaşla birlikte bazı hiperaktif belirtiler azalsa da, dikkat sorunları sürebilir; klinik izlem ve stratejilerle etkileri en aza indirilir.',
    },
    {
        question: 'DEHB ile dikkat dağınıklığı aynı mı?',
        answer: 'Hayır. Herkes zaman zaman stres veya uyku sorunları nedeniyle geçici dikkat dağınıklığı yaşayabilir. Oysa DEHB, kişinin tüm yaşam alanlarını sürekli ve derinden etkileyen, yapısal ve nörobiyolojik bir sürekliliktir.',
    },
    {
        question: 'DEHB iş hayatını etkiler mi?',
        answer: 'Evet. Son teslim tarihlerini kaçırma, toplantılarda odaklanamama, sürekli iş değiştirme veya başlanan projeleri tamamlayamama gibi sorunlarla kariyer gelişimini olumsuz etkileyebilir.',
    },
    {
        question: 'Erişkin DEHB nasıl anlaşılır?',
        answer: 'Yetişkinlikte DEHB, çoğunlukla kişinin sosyal ve mesleki hayatının aksaması, ilişkilerdeki tahammülsüzlükleri ve içsel huzursuzluk şikayetlerinin klinik bir hekim tarafından öykülenmesi (psikiyatrik görüşme) ile anlaşılır.',
    },
    {
        question: 'DEHB için hangi doktora gidilir?',
        answer: 'Yetişkinlerde bu tür nörobiyolojik dikkat ve dürtü sorunlarının teşhisi, ayrımı ve izlem programı Ruh Sağlığı ve Hastalıkları (Psikiyatri) doktorlarınca gerçekleştirilir.',
    },
    {
        question: 'Eryaman’da DEHB değerlendirmesi nasıl yapılır?',
        answer: 'Ankara Eryaman’da Uzm. Dr. Abdullah Maraş ile yapılacak bireysel klinik konsültasyonlarla kişinin öyküsü alınır, diğer psikiyatrik durumlardan ayrımı yapılır ve gereksinimleri bireysel olarak yapılandırılır.',
    },
];

export default function EriskinDehbPillarPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroBg}><div className={styles.heroOrb}></div></div>
                <div className={`container ${styles.heroContent}`}>
                    <Link href="/hizmetler" className={styles.backLink}>← Tüm Değerlendirme Alanları</Link>
                    <span className={styles.heroIcon}>ğŸ¯</span>
                    <h1>Ankara Eryaman’da Erişkin DEHB Değerlendirmesi</h1>
                    <p className={styles.heroDesc}>
                        Yetişkinlik döneminde yakamızı bırakmayan o bitmeyen "Sürekli erteleyip son dakikaya bırakıyorum" veya
                        "Toplantılarda dalıp gidiyorum" döngüleri, karakter değil tıbbi bir tablonun işareti olabilir.
                        Bireysel değerlendirme ve klinik izlem ile potansiyelinizi engelleyen bağları çözelim.
                    </p>
                    <div className={styles.author}>
                        <div className={styles.authorIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <div><strong>Uzm. Dr. Abdullah Maraş</strong><span>Ruh Sağlığı (Psikiyatrist) Uzmanı</span></div>
                    </div>

                    <div className="info-banner" style={{ marginTop: 'var(--space-6)' }}>
                        <strong>📌 Bilgilendirme ve Kapsam Notu</strong>
                        Bu sayfa içeriği yetişkin psikiyatrisi kapsamındaki Erişkin DEHB (Dikkat Eksikliği ve Hiperaktivite Bozukluğu) hakkındaki süreçleri ele almaktadır. Kliniğimizde <strong>16 yaş ve üzeri ergenlere yönelik</strong> psikiyatrik değerlendirme süreçleri yürütülmekte olup, ergen randevuları için de başvuruda bulunabilirsiniz.
                    </div>
                </div>
            </section>

            <section className="section">
                <div className={`container ${styles.contentGrid}`}>
                    <article className={styles.article}>

                        <p className={styles.lead}>
                            Çoğu insan Dikkat Eksikliği ve Hiperaktivite Bozukluğu'nun (DEHB) sadece
                            bir okul veya çocukluk problemi olduğunu sanır. Oysa yetişkinlik yıllarında
                            da beynin yürütücü işlevlerindeki bu nörobiyolojik farklılık tam gaz devam eder.
                            "Bir işe başlayıp bitiremiyorum", "Faturaları yatırmayı sürekli unutuyorum" ya da "Odaklanamıyorum"
                            yakınmaları, yetişkinlerin kariyerlerini ve evliliklerini sabote eden en sessiz,
                            ancak en etkili psikiyatrik zorluklardan biridir.
                        </p>

                        <h2 id="eriskin-dehb-nedir">Erişkin DEHB Nedir?</h2>
                        <p>Erişkin DEHB (Dikkat Eksikliği ve Hiperaktivite Bozukluğu), kişinin beynindeki dikkat, odaklanma, zaman yönetimi ve dürtü kontrolü gibi yürütücü işlevlerde nörobiyolojik farklılıklara dayalı klinik bir tablodur. Bu durum yetişkinlerin mesleki, sosyal ve ilişkisel yaşamlarında kronik zorluklara yol açabilmekle birlikte belirtilerin şiddeti kişiden kişiye değişebilir.</p>

                        <h3>DEHB bir hastalık mıdır yoksa yapısal mıdır?</h3>
                        <p>DEHB hem nörobiyolojik bir bozukluk olarak tıbbi literatürde yer alır hem de beynin bilgi işlemleme ve frontal lob yapısındaki farklılıklara dayalı kronik bir yapısal durumdur.</p>

                        <h3>Erişkin DEHB tamamen geçer mi?</h3>
                        <p>Yapısal (nörogelişimsel) bir tablo olduğu için tamamen yok olmak (geçmek) yerine; birebir psikiyatrik görüşme ve stratejilerle belirtiler yatıştırılarak yetişkinin hayat kalitesi yüksek standartlara taşınır.</p>

                        <p>
                            Erişkinlikteki tablo, hiperaktif motor belirtilerin azalmasına karşın daha çok
                            "içsel bir huzursuzluk" ve "organize olamama" üzerinden şekillenir. Erişkin
                            bireyin dışarıdan sakin görünmesi, arka planda zihninin saniyede milyonlarca farklı
                            sekmeye atlamadığı anlamına gelmez.
                        </p>

                        <h2 id="dehb-cocuklukta-mi-baslar">DEHB Çocuklukta mı Başlar?</h2>
                        <p>
                            Güncel tıbbi verilere göre, DEHB kökeni nörogelişimsel bir sürece dayanır. Yani yapı aslında
                            erken yıllarda mevcuttur. Ancak pek çok yetişkin, zekÃ¢ kapasitesi veya yüksek destekli
                            aile ortamı sayesinde çocukluk yıllarındaki kusurları kamufle etmeyi başarmıştır. Sorunlar,
                            üniversite, evlilik veya sorumlulukların ciddi şekilde arttığı iş hayatında "kaptanın kontrolü
                            kaybetmesiyle" su yüzüne çıkar. Bu durum, Erişkin DEHB'nin sanki "birdenbire ortaya çıktığı"
                            yanılsamasını doğurur.
                        </p>

                        <h2 id="eriskinlerde-dehb-belirtileri">Erişkinlerde DEHB Belirtileri Nelerdir?</h2>
                        <p>Erişkin DEHB belirtileri, çocukluktaki fiziksel haraketlilikten ziyade görevleri başlatamama, odaklanma sorunları ve organizasyon yetersizliği ile kendini gösterir. Unutkanlık, öncelik sırasını belirleyememe, dinlemiyormuş gibi görünme ve çabuk öfkelenme yetişkinlerde en sık gözlenen bulgulardır ve bunların yaşam kalitesini bozma düzeyi kişiden kişiye değişebilir.</p>
                        <ul>
                            <li>Gereken görevleri sürekli erteleme</li>
                            <li>Odaklanamama ve çabuk sıkılma</li>
                            <li>Randevu ve son günleri unutma</li>
                            <li>Karşısındakini dinlemekte zorlanma</li>
                            <li>İçsel, sürekli bir huzursuzluk hissi</li>
                        </ul>

                        <h3>DEHB olup olmadığımı nasıl anlarım?</h3>
                        <p>Sürekli potansiyelinizin altında kaldığınızı, bir işe odaklanmanızın ancak "son dakika krizi" ile olabildiğini düşünüyorsanız, bir psikiyatrik değerlendirme faydalı olacaktır.</p>

                        <h3>Erişkin DEHB genetik midir?</h3>
                        <p>Evet, önemli bir biyolojik ve genetik temeli vardır; genellikle aile bireylerinde benzer dürtüsellik, odak sorunları veya erteleme şikayetleri olan yetişkinlerde daha sık rastlanır.</p>

                        <h2 id="dikkat-daginikligi">Dikkat Dağınıklığı</h2>
                        <p>
                            "Sanki beynimde aynı anda 50 sekme açık ve benim hangisini okuyacağım hakkında hiçbir
                            fikrim yok" ifadesi, bu tabloyu yaşayan birçok kişinin ortak özetidir. Bir e-posta yazarken,
                            araya giren bir telefonla bütün algı savrulur ve saatler sonra o e-postanın gönderilmediği
                            fark edilir. Buradaki <Link href="/blog/dikkat-daginikligi-mi-dehb-mi">dikkat ve odak sorunları</Link>
                            sadece yorgunluktan kaynaklı geçici bir dağılma değil; beynin uyarana (odak sürdürmeye) yönelik kimyasal
                            bütünlüğünün işlemesindeki yapısal zorluktur.
                        </p>

                        <h2 id="erteleme-davranisi">Erteleme Davranışı (Procrastination)</h2>
                        <p>
                            Erişkin bireyleri en çok yıpratan tabloların başında gelir. Yapılması gereken evraklar,
                            tez çalışması ya da basit bir e-posta onayı bile zihin tarafından dağ gibi algılanır.
                            Hasta bu "ağır yükü" sürekli olarak <Link href="/blog/surekli-erteleme-davranisi-neden-olur">erteleme davranışı döngüsü</Link> içine
                            hapseder. Ancak son dakika, "kriz anının yarattığı yüksek adrenalin" sayesinde beyin uyarılır
                            ve iş panikle teslim edilir. Bu döngü sürekli stresi, tükenmeyi ve çoğu zaman "Sürekli
                            erteleyip son dakikaya bırakıyorum" pişmanlığını alevlendirir.
                        </p>

                        <h2 id="odaklanma-gucu">Odaklanma Güçlüğü</h2>
                        <p>
                            Kişi kitap okumak için masaya oturur ancak aynı paragrafı beş kez okumasına rağmen zihni
                            farklı dünyalardadır. Toplantılardayken (özellikle uyaranın az olduğu, hareketsiz kalması
                            gereken ortamlarda) sanki bir sis bulutu zihnini kaplar. Öte yandan, oyun oynamak veya aşırı
                            ilgilerini çeken kısa süreli bir uyaran (hiper-odak / hyperfocus) söz konusu olduğunda ise saatlerce
                            başından kalkamayabilirler.
                        </p>

                        <h2 id="zaman-yonetimi-sorunu">Zaman Yönetimi Sorunu (Zaman Körlüğü)</h2>
                        <p>
                            Yetişkin DEHB'nin klinik belirtilerinden bir diğeri de "zaman körlüğü"dür (time blindness).
                            Birey 10 dakikalık bir görevi sanki 1 saatte, 2 saatlik bir görevi ise sanki 5 dakikada
                            bitecekmiş gibi hesaplar. Sonuç her zaman gecikmeler, iptal olan randevular, trafiğe takılmalar ve
                            buna bağlı "sorumsuz" damgası yemekle sonlanır.
                        </p>

                        <h2 id="is-hayatinda-dehb">İş Hayatında DEHB</h2>
                        <p>
                            Büyük projeleri küçük parçalara bölme ve organizasyon eksikliği, kariyer basamaklarını
                            yıkan bir dinamiktir. Erişkin hiperaktivite ve dürtüsellik, toplantılarda çalışma arkadaşlarının
                            sözünü bölmeye, ani tepkiler vererek çatışmalar yaşamaya zemin hazırlar. İş değiştirmek
                            veya sürekli yeni projelere heyecanla başlayıp "hiçbirini bitirmemek", iş dünyasında en
                            büyük handikap olur. <Link href="/blog/eriskin-dehb-is-hayatini-nasil-etkiler">DEHB'nin mesleki yansımaları</Link>
                            özel bir psikiyatrik yaklaşım gerektirir.
                        </p>

                        <h2 id="iliskilerde-dehb">İlişkilerde DEHB</h2>
                        <p>
                            Partner tarafından "Beni hiç dinlemiyor", "Sürekli unutuyor ve değer vermiyor" gibi
                            söylemlere fazlaca maruz kalırlar. Karşısındaki kişi konuşurken zihni tamamen başka bir
                            yerdedir. Ev içindeki dağınıklık, faturaları yatırmayı erteleme ve fevri karar alma,
                            evliliklerde güveni derinden sarsar.
                        </p>

                        <h2 id="dehb-ve-anksiyete-iliskisi">DEHB ve Anksiyete İlişkisi</h2>
                        <p>
                            Sürekli hata yapma, bir şeyleri unutma korkusu veya "Yine erteliyorum, başarısız olacağım"
                            algısı zihinde ciddi bir stres barajı oluşturur. Bu durum, kişinin yaygın bir <Link href="/hizmetler/anksiyete">anksiyete bozukluğu</Link> veya
                            <Link href="/hizmetler/panik-atak">panik atak gelişimine</Link> uygun zemin sunmasına sebep olur.
                            Özellikle <Link href="/blog/dehb-ve-anksiyete-arasindaki-iliski">odaklanma güçlüğü ve kaygı ilişkisi</Link>,
                            ikincil ve çok daha yıkıcı bir kısır döngü halini alır.
                        </p>

                        <h2 id="dehb-ve-depresyon-iliskisi">DEHB ve Depresyon İlişkisi</h2>
                        <p>
                            Sürekli potansiyelinin altında kalan, ilişkilerini ve işlerini berbat eden erişkin, zamanla
                            içsel bir yetersizlik hissine sürüklenir. Bu "ben yapamıyorum, tembelim, yetersizim" kurguları
                            hastayı ağır bir klinik <Link href="/hizmetler/depresyon">çökkünlüğe (depresyona)</Link> ya da
                            <Link href="/hizmetler/bipolar-bozukluk">duygudurum zıtlıklarına (bipolar öykülere)</Link> itebilir.
                        </p>

                        <h2 id="nasil-degerlendirilir">Erişkin DEHB Nasıl Değerlendirilir?</h2>
                        <p>
                            Kan tahlili, MR veya röntgen ile DEHB değerlendirilemez. Süreç, bütünüyle erişkin yaşama
                            odaklanmış bir Uzman Psikiyatrın yapacağı profesyonel detaylı muayene (klinik görüşme),
                            uygun psikometrik değerlendirmeler ve erişkin yaşam-gelişim öyküsünün analizine
                            dayanmaktadır.
                        </p>

                        <h2 id="ne-zaman-psikiyatri-gorusmesi">Ne Zaman Psikiyatri Görüşmesi Düşünülmeli?</h2>
                        <p>
                            Şayet sahip olduğunuz erteleme davranışları, dağınıklık, öfke patlamaları ve işleri bitirememe
                            tablosu bir veya birkaç yaşam alanınızı (evliliğiniz, işiniz veya akademik kariyeriniz gibi)
                            kalıcı olarak bozuyorsa, bu "tembellik" ya da "huy" değil; hekim görüşü gerektiren tıbbi bir durumdur.
                        </p>

                        <h2 id="eryaman-degerlendirme">Ankara Eryaman’da Erişkin DEHB Değerlendirme Süreci</h2>
                        <p>
                            İş hayatındaki bitmeyen savrukluk, her projeyi yarım bırakmanın getirdiği özgüven kaybı
                            ve zihindeki kaosu yönetmek için, artık kendinizi suçlamayı bırakabilirsiniz.
                            Ankara Eryaman (ve bağlı bulunduğu Altay Mh., Etimesgut, Batıkent) odaklı hizmet veren
                            kliniğimizde Uzm. Dr. Abdullah Maraş, 16 yaş üzeri ergen ve yetişkin tüm yaş gruplarına yönelik <Link href="/randevu">Ankara Eryaman DEHB değerlendirme süreci</Link> tasarısını
                            profesyonel olarak uygulamaktadır.
                        </p>
                        <p>
                            Toplumda sık kullanılan "Aman bana da olur" hafife almasına karşılık, DEHB
                            biyolojik-yapısal bir gerçektir. Bu gerçeğe uygun, bireysel terapi destekleri
                            ve farmakolojik kılavuzlukla (bilimsel tıbbi zeminle), hastaların kendi
                            potansiyellerinin üzerindeki kalın sis tabakası ortadan kaldırılabilir.
                        </p>

                        <div className={styles.faqSection} id="sss">
                            <h2>Sık Sorulan Sorular</h2>
                            <FAQSection items={faqItems} />
                        </div>

                        <div className={styles.articleCta}>
                            <h3>Potansiyelinizi Zihin Sisine MahkÃ»m Etmeyin</h3>
                            <p>Ankara Eryaman'da yetkin bir klinik izlem rotası ile ertelemeye ve dikkat sorunlarına karşı kendi haritanızı çıkarın.</p>
                            <Link href="/randevu" className="btn btn--primary btn--lg" style={{ marginTop: 'var(--space-4)' }}>
                                Psikiyatrik Görüşme Planla →
                            </Link>
                        </div>
                    </article>

                    {/* Right: Sidebar */}
                    <aside className={styles.sidebar}>
                        <nav className={styles.sidebarCard}>
                            <h4>Sayfa Rehberi</h4>
                            <ul className={styles.tocList}>
                                <li><a href="#eriskin-dehb-nedir">DEHB Nedir?</a></li>
                                <li><a href="#dehb-cocuklukta-mi-baslar">Erişkinde Başlar Mı?</a></li>
                                <li><a href="#eriskinlerde-dehb-belirtileri">Temel Belirtiler</a></li>
                                <li><a href="#dikkat-daginikligi">Dikkat Dağınıklığı</a></li>
                                <li><a href="#erteleme-davranisi">Sürükle-Ertele Bırak</a></li>
                                <li><a href="#odaklanma-gucu">Odaklanma Sorunu</a></li>
                                <li><a href="#zaman-yonetimi-sorunu">Zaman Körlüğü</a></li>
                                <li><a href="#is-hayatinda-dehb">İş-Kariyer Alanı</a></li>
                                <li><a href="#iliskilerde-dehb">Evlilik&İkili İlişkiler</a></li>
                                <li><a href="#dehb-ve-anksiyete-iliskisi">Anksiyete Etkisi</a></li>
                                <li><a href="#dehb-ve-depresyon-iliskisi">Depresyona Etkisi</a></li>
                                <li><a href="#nasil-degerlendirilir">Nasıl İzlenir?</a></li>
                                <li><a href="#eryaman-degerlendirme">Eryaman İzlem Süreci</a></li>
                            </ul>
                        </nav>

                        <div className={styles.sidebarCta}>
                            <h3>Doktor Değerlendirmesi</h3>
                            <p>Erişkin DEHB'de profesyonel psikiyatrik (Ankara) klinik randevunuz.</p>
                            <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Randevu Modülü</Link>
                        </div>

                        <div className={styles.sidebarCard}>
                            <h4>Klinik Uzmanı</h4>
                            <div className={styles.doctorCard}>
                                <div className={styles.doctorIcon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                </div>
                                <strong>Uzm. Dr. Abdullah Maraş</strong>
                                <span>Ruh Sağlığı (Psikiyatrist) Uzmanı</span>
                                <span>Ankara, Eryaman</span>
                            </div>
                        </div>

                        <div className={styles.sidebarCard}>
                            <h4>DEHB İle İlgili İçerikler</h4>
                            <ul className={styles.sidebarLinks}>
                                <li><Link href="/blog/eriskin-dehb-nedir">Geniş Kapsamlı Bilgi</Link></li>
                                <li><Link href="/blog/eriskin-dehb-belirtileri-nelerdir">Belirtileri Nelerdir?</Link></li>
                                <li><Link href="/blog/surekli-erteleme-davranisi-neden-olur">Neden Erteliyoruz?</Link></li>
                                <li><Link href="/hizmetler/depresyon">Depresyon Riski</Link></li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </section>

            {/* Schema Data */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "MedicalWebPage",
                            "name": "Ankara Eryaman Erişkin DEHB Değerlendirmesi",
                            "url": "https://drabdullahmaras.com/hizmetler/eriskin-dehb",
                            "about": {
                                "@type": "MedicalCondition",
                                "name": "AttentionDeficitHyperactivityDisorder",
                                "alternateName": "Erişkin DEHB, Yetişkin DEHB"
                            },
                            "author": { "@id": "https://drabdullahmaras.com/#physician" },
"isPartOf": { "@id": "https://drabdullahmaras.com/#website" }
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": faqItems.map(item => ({
                                "@type": "Question",
                                "name": item.question,
                                "acceptedAnswer": { "@type": "Answer", "text": item.answer }
                            }))
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://drabdullahmaras.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Hizmetler", "item": "https://drabdullahmaras.com/hizmetler" },
                                { "@type": "ListItem", "position": 3, "name": "Erişkin DEHB", "item": "https://drabdullahmaras.com/hizmetler/eriskin-dehb" }
                            ]
                        }
                    ]
                })
            }} />
        </>
    );
}
