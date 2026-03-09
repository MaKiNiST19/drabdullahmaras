import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon/page.module.css';

export const metadata: Metadata = {
    title: 'Ankara Eryaman OKB Değerlendirmesi | Uzm. Dr. Abdullah Maraş',
    description:
        'Eryaman’da OKB (takıntı hastalığı) belirtileri, obsesyon ve kompulsiyon döngüsü hakkında bilgilendirme ve psikiyatrik değerlendirme süreci.',
    alternates: { canonical: 'https://drabdullahmaras.com/hizmetler/okb' },
    openGraph: {
        title: 'Ankara Eryaman’da OKB (Takıntı Hastalığı) Değerlendirmesi',
        description: 'Eryaman’da OKB (takıntı hastalığı) belirtileri, obsesyon ve kompulsiyon döngüsü hakkında yetişkin psikiyatrik değerlendirme.',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'OKB nedir?',
        answer: 'OKB (Obsesif Kompulsif Bozukluk), kişinin aklına istemsizce gelen ve yoğun kaygı yaratan saplantılı düşünceler (obsesyonlar) ile bu kaygıyı azaltmak için yapılan tekrarlayıcı davranışlar (kompulsiyonlar) döngüsüyle karakterize klinik bir durumdur.',
    },
    {
        question: 'OKB belirtileri nelerdir?',
        answer: 'Aşırı el yıkama (temizlik), kapı/ocak kontrol etme, eşyaları simetrik dizme, dini veya zarar verici istenmeyen düşünceleri zihinden atamama gibi hem eylemsel hem de bilişsel takıntılardır.',
    },
    {
        question: 'Takıntı hastalığı geçer mi?',
        answer: 'Takıntı hastalığında gidişat kişiden kişiye değişebilir. Tamamen kaybolması her vakada söz konusu olmasa da, alanında yetişmiş hekimlerin sunduğu psikiyatrik değerlendirme ve yapılandırma sayesinde (ilaç ve/veya terapi süreçleriyle) belirtiler gündelik yaşamı etkilemeyecek seviyelere indirilebilir.',
    },
    {
        question: 'OKB kendi kendine düzelir mi?',
        answer: 'Düşük seyirli takıntılar dönemsel olarak hafiflese bile, yerleşmiş bir OKB tablosunun kendi kendine tamamen düzelmesi oldukça güçtür. Zorlayıcı düşünceler çoğunlukla profesyonel uzmanlık gerektiren bir biyolojik/fizyolojik yaklaşıma ihtiyaç duyar.',
    },
    {
        question: 'OKB anksiyete midir?',
        answer: 'Evet. OKB’nin temel motor gücü yoğun bir anksiyetedir (kaygıdır). Düşüncenin (obsesyon) yarattığı korku ve kaygı (anksiyete) o kadar yükselir ki, kişi rahatlamak için kompulsiyon (örneğin tekrar tekrar el yıkama) yapmak zorunda kalır.',
    },
    {
        question: 'OKB günlük yaşamı etkiler mi?',
        answer: 'Kesinlikle. El yıkamaktan işe / sosyal hayata geç kalmak, güvende hissetmediği için sürekli ocak kontrol edip evden çıkamamak gibi nedenlerle OKB, günlük işlevselliği, mesleği ve ilişkileri adeta felce uğratabilir.',
    },
    {
        question: 'OKB için hangi doktora gidilir?',
        answer: 'Takıntı bozukluklarının teşhisi, ayrımı ve izlem programı hastanelerin veya özel kliniklerin Ruh Sağlığı ve Hastalıkları (Psikiyatri) hekimlerince gerçekleştirilir.',
    },
    {
        question: 'Eryaman’da OKB değerlendirmesi nasıl yapılır?',
        answer: 'Ankara Eryaman’da (Altay Mahallesi) Uzm. Dr. Abdullah Maraş, yetişkin hastalarla birebir klinik görüşme (konsültasyon) sağlayarak OKB’nin şiddetini, yaşam öyküsündeki yerini ve gerekli tıbbi sürecin çerçevesini bireysel olarak yapılandırır.',
    },
];

export default function OkbPillarPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroBg}><div className={styles.heroOrb}></div></div>
                <div className={`container ${styles.heroContent}`}>
                    <Link href="/hizmetler" className={styles.backLink}>← Tüm Değerlendirme Alanları</Link>
                    <span className={styles.heroIcon}>ğŸ”„</span>
                    <h1>Ankara Eryaman’da OKB (Takıntı Hastalığı) Değerlendirmesi</h1>
                    <p className={styles.heroDesc}>
                        Aklınızdan bir türlü atamadığınız ve sizi yoğun kaygıya sürükleyen "o istenmeyen düşünceler"
                        ile onları susturmak için tekrarladığınız yorucu davranışlar bir kader değildir.
                        Yetişkin bireylerde gözlenen takıntıların derin klinik yüzünü beraber inceleyelim.
                    </p>
                    <div className={styles.author}>
                        <div className={styles.authorIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <div><strong>Uzm. Dr. Abdullah Maraş</strong><span>Ruh Sağlığı (Psikiyatrist) Uzmanı</span></div>
                    </div>

                    <div className="info-banner" style={{ marginTop: 'var(--space-6)' }}>
                        <strong>📌 Bilgilendirme ve Kapsam Notu</strong>
                        Bu metinler yalnızca yetişkin psikiyatrisi kapsamındaki OKB süreçlerine ait bilgilendirmeleri içerir (çocuk veya
                        ergen süreçlerini içermemektedir). Tanı koyma, garanti veya kesin tedavi vadetme (tam başarı gibi) amaç gütmez; bireysel
                        değerlendirmelerin tıp hekimlerince yapılması zorunludur.
                    </div>
                </div>
            </section>

            <section className="section">
                <div className={`container ${styles.contentGrid}`}>
                    <article className={styles.article}>

                        <p className={styles.lead}>
                            "Acaba kapıyı kilitledim mi diye tekrar tekrar bakıyorum", "Ellerimi yıkamadan
                            bir saniye bile rahat edemiyorum" veya "Aklımdan o korkunç, kötü düşünceler
                            hiç gitmiyor..." Zihin her gün sayısız veri işler. Ancak bazı beyinler, önemsiz sayılabilecek
                            şüphe ve kuruntulara alarm noktasında takılıp kalır. Yetişkin bireylerin yaşam kalitesini
                            derinden sarsan Obsesif Kompulsif Bozukluk (OKB), nam-ı diğer Takıntı Hastalığı, tam olarak
                            bu döngü üzerine kuruludur.
                        </p>

                        <h2 id="okb-nedir">OKB (Obsesif Kompulsif Bozukluk) Nedir?</h2>
                        <p>Obsesif Kompulsif Bozukluk (OKB), kişinin iradesi dışında zihnine giren rahatsız edici obsesif düşünceler ve bu düşüncelerin yarattığı yoğun kaygıyı azaltabilmek için yapılan tekrarlayıcı kompulsif davranışlardan oluşan klinik bir ruh sağlığı durumudur.</p>
                        <h3>OKB delilik midir?</h3>
                        <p>Hayır, OKB kişinin muhakemesini kaybetmediği, sadece mantıksız olduğunu bildiği halde takıntılı döngülere karşı koyamadığı klinik bir anksiyete ve obsesyon tablosudur.</p>
                        <h3>Takıntı hastalığı genetik midir?</h3>
                        <p>Evet, genetik yatkınlığın beyin kimyasındaki (serotonin vb.) değişimlerle etkileşime girmesi OKB gelişiminde en önemli biyolojik risk faktörlerinden biridir.</p>
                        <p>
                            OKB, zihne kişinin açık iradesi dışında zorla ve aniden giren, rahatsız edici, kaygı
                            yükseltici düşünceler (Obsesyon) ile; bu zihinsel bunaltıyı yatıştırmak veya olası
                            felaketleri önlemek maksadıyla gerçekleştirilen ve adeta bir ritüel halini almış
                            tekrarlayıcı eylemler / düşünceler (Kompulsiyon) sarmalıdır.
                        </p>
                        <p>
                            Kısacası bu hastalık, şüphe hastalığıdır. Beynin "Acaba bir şeyi eksik yaptım mı diye içim
                            rahat etmiyor" mekanizması yüzünden kişiyi aynı hareketi veya savunmayı defalarca kez yapmaya
                            zorlayan nörobiyolojik ve psikiyatrik bir durumdur.
                        </p>

                        <h2 id="takinti-hastaligi-ne-anlama-gelir">Takıntı Hastalığı Ne Anlama Gelir?</h2>
                        <p>
                            Halk arasında genellikle basit bir "titizlik" veya "titiz kişi" karakteriyle karıştırılır.
                            Halbuki klinik manada takıntı hastalığı (OKB) demek, bu düşüncelerin bireyin saatlerini
                            çalması, hayatını zorlaştırması demektir. Temel özellik bireyin bu durumun (o düşüncelerin veya
                            hareketlerin) <em>saçma, gereksiz ve abartılı olduğunun gayet iyi farkında olmasıdır.</em>
                            Ancak ne kadar mantıksız bulsa da o içsel itici güce karşı koyamaz; kendisini o davranışı (el yıkamak,
                            sayı saymak) yapmaya mecbur hisseder.
                        </p>

                        <h2 id="obsesyon-nedir">Obsesyon Nedir?</h2>
                        <p>
                            Obsesyon, kişinin bilincine sürekli, mantıksız şekilde ve adeta bir davetsiz misafir gibi dalan,
                            istenmeyen (intrusive) fikirler ve dürtülerdir. Bu düşünceler bir an belirir ve kişide ciddi
                            bir dehşet, suçluluk ya da yüksek doza yakın <Link href="/hizmetler/anksiyete">kaygı tablosu</Link>
                            yaratır.
                        </p>
                        <p>
                            Örneğin: "Ya şu masa üzerindeki kalem mikropsa ve bana hastalık bulaştırırsa?", "Ya tanrıya karşı aklımdan
                            açıkça küfür geçerse?", "Ocağı kapatmadım ve tüm ev havaya uçacak." Bu tip kuruntular her insanda geçebilir
                            çünkü beyinde milyonlarca düşünce saniyede akar. Lakin OKB beyni bu düşünceyi yakalar, gerçek felaket
                            olarak kodlar ve üstüne bir büyüteçle bakar.
                        </p>

                        <h2 id="kompulsiyon-nedir">Kompulsiyon Nedir?</h2>
                        <p>
                            Kompulsiyon, beyni ele geçiren obsesyonun yarattığı dayanılmaz düzeydeki korkuyu veya "eyvah" hissini
                            (anksiyetenin ateşini) söndürmek için kişinin bedensel veya zihinsel olarak geliştirdiği
                            <strong>rahatlama davranışları (ritüelleri)</strong>dir.
                        </p>
                        <p>
                            Kişi "ellerim kirli" (obsesyon) fobisinden arınmak için, ellerini kanatana kadar belki de 45 dakika boyunca
                            belirli bir sırayla sabunlar (kompulsiyon). İlk defa yıkadığında geçici bir rahatlama
                            gelir, fakat hemen ardından "Acaba tam temizlenmedi mi?" takıntısı döner ve bu kısır döngü
                            başlar.
                        </p>

                        <h2 id="okb-belirtileri">OKB Belirtileri Nelerdir?</h2>
                        <p>
                            Zihinsel takıntılar genelde birbiriyle iç içedir. Dışarıdan en çok bilinen temizlik takıntılarına ek olarak,
                            OKB pek çok farklı <Link href="/blog/okb-belirtileri">obsesyon ve kompulsiyon döngüsü</Link> ile kendini gösterebilir:
                        </p>
                        <ul>
                            <li><strong>Temizlik (Mizofobi):</strong> Dış dünyadan hastalık kapma korkusuyla yoğun kaçınma gösterilmesi. Buna bağlı <Link href="/blog/temizlik-takintisi">kontrolsüz temizlik ve yıkanma</Link> döngüsü.</li>
                            <li><strong>Sürekli Kontrol Etme:</strong> Kapı, kilit veya ocak gibi eşyaların güvenliğinden kuşku duyarak <Link href="/blog/surekli-kontrol-etme">defalarca kontrol sağlama</Link>.</li>
                            <li><strong>Dini ve Ahlaki Takıntılar:</strong> Bireyin değer yargılarına tam zıt yönde, irade dışı beliren <Link href="/blog/dini-takintilar-okb-mi">istenmeyen dini düşünceler</Link>.</li>
                            <li><strong>Zarar Verme Düşüncesi:</strong> Eyleme dönüşmeyen ancak hastada "sevdiklerime kazara zarar verir miyim" şüphesi yaratan, şiddetli kaygıyla birlikte gelen sahnelerdir. Ayrıntılı klinik ayrım için <Link href="/blog/zarar-verme-dusuncesi-okb-mi">zarar verme düşüncesi değerlendirmelerine</Link> bakabilirsiniz.</li>
                        </ul>

                        <h2 id="okb-gecer-mi">OKB Geçer mi?</h2>
                        <p>Takıntı hastalığının iyileşme süreci kişinin tedavi uyumuna, nörolojik yapısına ve çevresel stresine bağlı olarak kişiden kişiye değişebilir. Klinik psikiyatri desteği ile (ilaç ve psikoterapi odaklı desteklerle) belirtiler önemli oranda geriletilerek gündelik yaşam kalitesi korunabilmektedir.</p>
                        <h3>OKB kendi kendine geçer mi?</h3>
                        <p>Yerleşmiş bir klinik OKB tablosunun profesyonel uzmanlık gerektiren yapısal ve psikoterapötik bir destek olmaksızın tamamen kendi kendine düzelmesi oldukça güç bir ihtimaldir.</p>
                        <h3>Tedavi edilmeyen OKB ne olur?</h3>
                        <p>Uzman takibi yapılmadığında çoğunlukla belirtiler şiddetlenerek kişinin evden çıkamamasına kadar uzanan süreçlerde iş ve temel sosyal uyumunu felce uğratabilir.</p>

                        <h2 id="anksiyete-iliskisi">OKB ve Anksiyete İlişkisi</h2>
                        <p>
                            Her ikisinde de baş aktör "Korku ve beklenti" mekanizmasıdır. OKB beyni daima tetiktedir.
                            Eğer ocağı kontrol etmesini (kompulsiyon) engellerseniz, hastanın içindeki ateş (anksiyete/kaygı)
                            tavan yapar; kişi nefes alamaz, ecel terleri döker ve bazen bu durum fiziksel olarak <Link href="/hizmetler/panik-atak">OKB ile birlikte görülebilen panik atak belirtileri</Link> ile birleşebilir.
                            Yaygın kaygının obsesyonu beslediği net bir birlikteliktir.
                        </p>

                        <h2 id="gunluk-yasam-okb">OKB Günlük Yaşamı Nasıl Etkiler?</h2>
                        <p>
                            Birey zihninin yarısı takıntılarıyla meşgul olduğu için; enerjisini tüketen (sürekli içinden 10'a kadar sayma
                            veya yolları belli ritüellerle gezme gibi) eylemler yapar. Zihinsel veya fiziki bu eforlar sonucunda,
                            hasta hem işlevsel tükenmişliğe uğrar hem de <Link href="/blog/okb-gunluk-hayati-nasil-etkiler">sürekli
                                olarak sosyal platformdan (çevresinden) soyutlanır</Link>.
                        </p>

                        <h2 id="is-hayatinda-okb">İş Hayatında OKB Yansımaları</h2>
                        <p>
                            Yetişkin bireylerin en verimli çağlarında, bir dosyayı "acaba yanlış bir cümle yazdım da biri bunu okuyup rezil
                            mi olurum" korkusuyla 20 defa kontrol etmesi mesai saatinin bitmesine, dolayısıyla başarısız olarak iş
                            yerinden atılmasına bile neden olabilmektedir. Odaklanma becerisi, vesveselere harcanır.
                        </p>

                        <h2 id="iliskilerde-okb">İlişkilerde OKB</h2>
                        <p>
                            Evlilik veya flörtlerde partner için OKB hastası ile yaşamak, belirli kurallara zorunlu uymak anlamına
                            gelebileceğinden eşler arası çatışma kaçınılmaz olur ("Sen de eve gelince o kıyafetleri poşetleyeceksin!" gibi
                            dayatmalar veya sürekli eşinin kendisini sevip sevmediğini "emin olmak için" sorma takıntıları).
                            Bireysel hayatın sınırları partner tarafından da aşılamaz ve bu derin bir buhran doğurur.
                        </p>

                        <h2 id="ne-zaman-psikiyatri">Ne Zaman Psikiyatri Değerlendirmesi Düşünülmeli?</h2>
                        <p>
                            Şayet bu "kuruntular veya savunma davranışları":
                        </p>
                        <ul>
                            <li>Günde asgari 1 saatinizden fazlasını çalıyorsa,</li>
                            <li>Size derin bir kaygı, ızdırap ve suçluluk (Dini düşünceler veyahut Zarar verme fikirleri gibi) veriyorsa,</li>
                            <li>Sizi toplumdan/aşkınızdan veya iş motivasyonunuzdan geri bırakıyorsa; artık bireysel uğraşlardan ziyade bilimsel bir psikiyatrik değerlendirme düşünülmesinin vakti gelmiştir.</li>
                        </ul>

                        <h2 id="eryaman-degerlendirme">Ankara Eryaman’da OKB Değerlendirme Süreci</h2>
                        <p>
                            Obsesyonlarınızla yalnız baş etmek, yalnızca OKB'nin canavarına daha fazla direniş gücü
                            aşılar. Takıntıların "Ne Kadar Süreceği? Kişiden kişiye nasıl şekilleneceği" (bkz. <Link href="/blog/okb-gecer-mi">OKB'nin Seyri</Link>)
                            iletişime geçtiğiniz uzman değerlendirmesinin kılavuzluğunda yanıt bulur.
                        </p>
                        <p>
                            Ankara Eryaman (Altay Mh.) civarındaki Etimesgut - Batıkent arterlerinde yetişkin hastalarıyla çalışan
                            Uzm. Dr. Abdullah Maraş; sahip olduğunuz bu obsesif zihinsel prangaların tıbbi psikiyatrik teşhisini,
                            farmakolojik (ilaç) gerekliliklerini ve terapi eksenindeki klinik vizyonunu planlayarak (bireysel
                            değerlendirme seanslarıyla) özgürleşme şemasını tarafınıza sunmaktadır.
                        </p>


                        <div className={styles.faqSection} id="sss">
                            <h2>Sık Sorulan Sorular</h2>
                            <FAQSection items={faqItems} />
                        </div>

                        <div className={styles.articleCta}>
                            <h3>Takıntılar Kaderiniz Değil, Beraber Aşabiliriz</h3>
                            <p>Zihninizi hapseden tekrarlı düşüncelerin bilimsel analizine ve tedavi yaklaşımlarına (Ankara Eryaman'da) ulaşmak için bize randevu sekmesinden bağlanın.</p>
                            <Link href="/randevu" className="btn btn--primary btn--lg" style={{ marginTop: 'var(--space-4)' }}>
                                Doktor Değerlendirme Randevusu →
                            </Link>
                        </div>
                    </article>


                    {/* Right: Sidebar */}
                    <aside className={styles.sidebar}>
                        {/* TOC */}
                        <nav className={styles.sidebarCard}>
                            <h4>Bu Sayfada</h4>
                            <ul className={styles.tocList}>
                                <li><a href="#okb-nedir">OKB Nedir?</a></li>
                                <li><a href="#takinti-hastaligi-ne-anlama-gelir">Takıntı Ne Demek?</a></li>
                                <li><a href="#obsesyon-nedir">Obsesyon (Düşünce)</a></li>
                                <li><a href="#kompulsiyon-nedir">Kompulsiyon (Davranış)</a></li>
                                <li><a href="#okb-belirtileri">Temel Belirtiler</a></li>
                                <li><a href="#anksiyete-iliskisi">Anksiyete Farkı/İlişkisi</a></li>
                                <li><a href="#gunluk-yasam-okb">Yaşam Etkileri</a></li>
                                <li><a href="#is-hayatinda-okb">Mesai-İş Hayatı</a></li>
                                <li><a href="#iliskilerde-okb">İlişkiler</a></li>
                                <li><a href="#ne-zaman-psikiyatri">Uzm. Başvurusu</a></li>
                                <li><a href="#eryaman-degerlendirme">Eryaman Süreçleri</a></li>
                            </ul>
                        </nav>

                        <div className={styles.sidebarCta}>
                            <h3>Psikiyatrist Randevusu</h3>
                            <p>Takıntılarınız (OKB) için klinik izleme seansları planlayın (Eryaman, Ankara).</p>
                            <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Değerlendirme Al</Link>
                        </div>

                        <div className={styles.sidebarCard}>
                            <h4>Uzman Hekim</h4>
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
                            <h4>İlgili Hastalıklar ve Bloklar</h4>
                            <ul className={styles.sidebarLinks}>
                                <li><Link href="/hizmetler/anksiyete">Anksiyete ve Kaygı</Link></li>
                                <li><Link href="/hizmetler/depresyon">Depresyon ve Mutsuzluk</Link></li>
                                <li><Link href="/hizmetler/panik-atak">Ani Panik Krizleri</Link></li>
                                <li><Link href="/blog/okb">Takıntı Blog Kütüphanesi</Link></li>
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
                            "name": "Ankara Eryaman OKB Değerlendirmesi",
                            "url": "https://drabdullahmaras.com/hizmetler/okb",
                            "about": {
                                "@type": "MedicalCondition",
                                "name": "ObsessiveCompulsiveDisorder",
                                "alternateName": "OKB, Takıntı Hastalığı"
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
                                { "@type": "ListItem", "position": 3, "name": "OKB", "item": "https://drabdullahmaras.com/hizmetler/okb" }
                            ]
                        }
                    ]
                })
            }} />
        </>
    );
}
