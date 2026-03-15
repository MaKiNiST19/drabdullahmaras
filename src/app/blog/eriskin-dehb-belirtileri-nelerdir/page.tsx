import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Erişkin DEHB Belirtileri Nelerdir? | Yetişkinlerde Odak Sorunları',
    description:
        'Yetişkinlik döneminde Dikkat Eksikliği ve Hiperaktivite Bozukluğu (DEHB) belirtileri, içsel huzursuzluk ve zaman yönetimi sorunları; Ankara psikiyatri incelemesi.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/eriskin-dehb-belirtileri-nelerdir' },
    openGraph: {
        title: 'Erişkin DEHB Belirtileri ve Eryaman Yetişkin Psikiyatri Değerlendirmesi',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Erişkin DEHB belitileri zamanla geçer mi?',
        answer: 'Fiziksel hiperaktivite bedenin yaşlanmasıyla birlikte azalma (daha içsel bir gerilime dönüşme) eğilimi gösterebilir; ancak odaklanma, erteleme ve dikkat sürdürme gibi ön beyin bölgelerinin zorlukları ömür boyu kalabilmektedir.',
    },
    {
        question: 'Çabuk sıkılmak DEHB belirtisi midir?',
        answer: 'Çok hızlı ilgi kaybı ve rutin görevlerde bir anda tamamen tükenmişlik hissetmek (ancak sevdiği çok spesifik bir bilgisayar oyununda saatlerce hiper-odak kurabilmek) en sık görülen şikayetler arasındadır.',
    },
    {
        question: 'Dikkatsiz her insan DEHB midir?',
        answer: 'Hayır. Stres, yas süreci veya uzun uyku sorunları da dikkat dağınıklığı yapar. Ancak DEHB geçici değildir; yaşamı boyunca hastayı sabote eden yapısal (beynin farklı çalışma) şeklidir.',
    },
    {
        question: 'Ani öfkelenme DEHB’ye girer mi?',
        answer: 'Dürtülerini kontrol yeteneğinde (frontal bölge işleyişi) zayıflık olduğundan; duygusal tepkileri filtrelemeden patlama, parlayıp sönmeler ve fevrilik erişkinlerin sık raporladığı bir diğer zihinsel görünümdür.',
    },
    {
        question: 'Belirtileri azaltmak mümkün mü?',
        answer: 'Doğru bir klinik ve birebir tıp doktoru yönlendirmesiyle, özellikle hedef odaklı farmakolojik terapi desteği alınarak yetişkinlerin potansiyellerini felce uğratan bu belirtiler kontrol altına alınır.',
    },
];

export default function BelirtilerDehbBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/eriskin-dehb">Erişkin DEHB</Link><span>/</span>
                        <span>Erişkin Belirtileri</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Psikiyatri, DEHB, Odaklanma</span>
                        <time dateTime="2026-06-20">20 Haziran 2026</time>
                        <span>•</span><span>6 dk okuma</span>
                    </div>
                    <h1>Erişkin DEHB Belirtileri Nelerdir? Yetişkinlerde Gizli İşaretler</h1>
                    <p className={styles.heroDesc}>
                        Bir yetişkin olarak "Neden her işi yarım bırakıyorum?" veya "Neden toplantılarda aklım hep başka yerde?"
                        sorularının cevabı; erteleme, dürtüsellik ve içsel huzursuzlukla kodlanmış tıbbi nöropatik bir zeminde saklıdır.
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

                            <h2 id="nedir">Erişkin DEHB Belirtileri Nelerdir?</h2>
                            <p>Erişkin tablolarda DEHB (Dikkat Eksikliği ve Hiperaktivite Bozukluğu) belirtileri; işleri başaramama veya zekadan ziyade, planlamayı yapamamak, sürdürmeyi ertelemek, sürekli unutkanlık yaşamak ve içsel bir kaos (hiperaktivite) duymak şeklinde kümelenir. Bu bulguların bireyin hayatında oluşturduğu mesleki ve sosyal zararın şiddeti kişiden kişiye değişebilir; dolayısıyla belirtilerin yetişkin psikiyatrisi penceresinden klinik olarak ayrılması zorunludur.</p>

                            <h3>Sadece unutkanlık veya dikkatsizlik midir?</h3>
                            <p>Hayır, dikkat dağınıklığı tabloyu görünür kılan tepedeki karlı dağdır, ama aşağıda dürtü denetim sorunu (öfke, fevrilik) ve büyük bir zaman algısı bozukluğu (erteleme) yatar.</p>

                            <h3>İçsel bir huzursuzluk yaratır mı?</h3>
                            <p>Yetişkinlerde, genellikle motor hareketlilikten (sürekli koşma) çok, durduğu yerde duramama, sürekli sigara içme ihtiyacı veya aklın aynı anda on farklı konuya sıçraması kaynaklı gerginlik sıktır.</p>


                            <p>
                                İlerleyen yaşla birlikte "Zamanı gelince oturur, olgunlaşır" zannedilen ancak gerçekte
                                sadece formu değişen <Link href="/hizmetler/eriskin-dehb">Ankara Eryaman erişkin DEHB değerlendirme süreci</Link>
                                gereksinimleri; hastayı yıllarca "ben yapamıyorum, tembelim" karanlığına itmiştir. Aşağıda
                                bu klinik yapının yetişkin profillerindeki yansımalarını detaylandırıyoruz.
                            </p>

                            <h2 id="odak-sorunu">1. Odaklanma ve Dikkati Sürdürme Sorunu</h2>
                            <p>
                                Evvela şu ayrımı yaparak başlamalıyız: Hiç kimse tamamen dikkatsiz değildir. DEHB hastasının beyin paneli
                                tıpkı kopsa bile kendi etrafında fır dönen bir rüzgar gülü gibidir.
                            </p>
                            <ul>
                                <li><strong>Kitap okuma zorluğu:</strong> Aynı paragrafı sayısız kez okumasına rağmen zihninin aslında yemek ne yiyeceğinde olması.</li>
                                <li><strong>Detaylara körleşme:</strong> En önemli e-posta raporlarını yollarken ekleri unutmak; isimleri, anahtarları sürekli kaybetmek.</li>
                                <li><strong>Hiper-Odaklanma:</strong> Beynin çok nadir durumlarda ilgisini çeken spesifik ve haz veren (dopamin) bir duruma kilitlenip saatlerce tuvalete bile gitmeden orada kalması.</li>
                            </ul>

                            <h2 id="zaman-korlugu">2. Engellenemez "Zaman Körlüğü" ve Erteleme (Procrastination)</h2>
                            <p>
                                Normal bir yetişkin yarın bitecek bir işi bugünden programlar. Oysa <Link href="/blog/surekli-erteleme-davranisi-neden-olur">erteleme davranışı döngüsü</Link>
                                yaşayan kişi için "yarın" ve "gelecek ay" beynin frontal yapısında neredeyse ayırt edilemez
                                bir süre gibi işlemlenir.
                                "Birazdan yaparım", "Hele önce bir etrafı toplayıp masaya geçeyim" diyerek o 10 dakikalık iş,
                                teslimine son yarım saat kalana kadar ertelenir. Ta ki patron veya eş bağırıp kriz yaratana dek...
                                O ağır stresle yüklenen panik enerjisi ancak beyni ateşlemeye yeter.
                            </p>

                            <h2 id="organizasyon-eksigi">3. Düzen, Planlama ve Organizasyon Zayıflığı</h2>
                            <p>
                                Bu bireylerin masaları, evleri, çöp tenekeleri kağıtlar veya bitirilmemiş projelerle
                                doludur. Eşyaları genellikle çekmecelere sıkıştırır, bulamadıklarında yeni baştan sipariş
                                verirler. Gündelik işleri küçük basamaklara bölerek bitirmek adeta imkansız gelir. Her işi
                                devasa bir blok halinde gördükleri için başlama arzuları hiçbir zaman gelmez.
                            </p>

                            <h2 id="durtusellik-ve-ofke">4. Dürtüsellik (Fevrilik) ve Ani Öfke</h2>
                            <p>
                                Dürtüsellik (Impulsivity) deyince akla sadece risk alıp borsa oynamak gelmemelidir.
                                Toplantıda birileri bir fikri tartışırken;
                            </p>
                            <ul>
                                <li>Biri cümlesini bitirmeden sabredemeyip onun lafını kesmek,</li>
                                <li>İçinden geçeni "acaba ayıp olur mu?" filtresinden geçirmeden olduğu gibi karşı tarafa "pat!" diye söylemek,</li>
                                <li>Ufak bir eleştiriyi çok devasa bir saldırı algılayıp tahammülsüzce orayı terk etmek; </li>
                            </ul>
                            <p>
                                tamamen yetişkin beynindeki fren mekanizmasının (bekle-düşün-konuş) çok az zayıf olmasından
                                (işlememesinden) doğan sosyal faturalardır. Eşler genelde bu kavgaların ardından "Sanki içinden
                                canavar çıktı" yakınmasıyla yüzleşir, zira beynin regülasyon gücü o an sekteye uğramıştır.
                            </p>

                            <h2 id="dehb-anksiyete-baglantisi">5. İçsel Huzursuzluk ve Kronik Yorgunluk</h2>
                            <p>
                                Dışarıdan gayet sakin oturan bir danışana "İçinde ne hissediyorsun?" dendiğinde "Sürekli çalışan
                                ve beni dinlenmekten bile yoran bir motor var" açıklaması gelmektedir. Hastanın bedeni
                                30 yaşına varmış olabilir; sıraya veya trafiğe girmekten artık "şeklen" kaçmıyor gibi
                                görünse de; beyninin içi alev alev kaynar. Sürekli bacak sallama, sürekli konuşma isteği ve
                                zihnin aynı anda çokça cephede savaşması, hastayı akşama bitap düşürür. Zihnin bu yorgunluğu,
                                hastayı giderek <Link href="/hizmetler/anksiyete">Anksiyete bozukluğuna</Link> çok ciddi biçimde
                                sürükler.
                            </p>

                            <h2 id="nasıl-kurtulunur">Eryaman’da Teşhis Kararı Ne Zaman Alınır?</h2>
                            <p>
                                Yukarıdaki tablolardan 1 veya 2 tanesi her normal insanda olabilir. Ancak bu özellikler:
                            </p>
                            <ul>
                                <li>15-20 senedir sizinle beraberse (hayat boyu karakterinizin bir parçası olduğunu sanıyorsanız),</li>
                                <li>Kredilerinizi, okulunuzu tam da bu ihmaller (yapamadığınız, tembel olduğunuz kanaati) yüzünden kaybettiyseniz,</li>
                                <li>İkili ilişkileriniz bu sebeple artık tahammül edilemez biçimde sonlanıyorsa;</li>
                            </ul>
                            <p>
                                o halde sadece motive olmaya veya yeni ajandalar almaya ihtiyacınız yoktur. Bu tablonun
                                tıbbi bir muhatap olan Psikiyatrist gözetiminde ele alınması, kişiye özel psikiyatrik
                                görüşme seansları ve destek (farmakoterapi / ilaç) zeminleriyle düzenlenmesi gereklidir.
                            </p>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Online Ölçeklere Dair Uyarı</strong>
                                İnternette veya sosyal medyada gördüğünüz "Acaba DEHB miyim testi?" tarzı kısa anketler
                                klinik bir geçerliliğe (teşhis koymaya) haiz değildir. Bu durumun uzman hekim eşliğinde
                                diğer psikiyatrik bulgularla (depresyon, kaygı vs.) birbirinden tamamen ayrıştırılarak
                                tanımlanması kanunidir. Erişkin süreçleri yetişkin muayenesini zorunlu kılar; "mucize çözümler"
                                veya "100% garanti taktikler" bilimden uzaktır.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <p>Sizi potansiyelinizden alıkoyan odak karmaşanızı, profesyonel bir rota ile aşmak için uzman konsültasyonunuza (Ankara Batıkent/Eryaman) hazırlanın.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Psikiyatrik Görüşme Adımları →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Klinik Değerlendirme</h3>
                                <p>Kariyerinizi ertelemeyin; kliniğimizde yüz yüze bireysel değerlendirmenizi ayırtın.</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Doktora Hızlı Ulaşım</Link>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>İlişkili Makaleler</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/blog/eriskin-dehb">DEHB Rehberi Külliyatı</Link></li>
                                    <li><Link href="/blog/dikkat-daginikligi-mi-dehb-mi">Ben Sadece Unutkan Mıyım?</Link></li>
                                    <li><Link href="/hizmetler/depresyon">Bu Tablo Mutsuzluğa Götürür Mü?</Link></li>
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
