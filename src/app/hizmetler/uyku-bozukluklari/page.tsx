import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon/page.module.css';

export const metadata: Metadata = {
    title: 'Ankara Eryaman Uyku Bozuklukları Değerlendirmesi | Uzm. Dr. Abdullah Maraş',
    description:
        'Uykusuzluk, gece uyanma ve uyku kalitesi sorunları hakkında bilgilendirme ve Eryaman’da psikiyatrik değerlendirme süreci.',
    alternates: { canonical: 'https://drabdullahmaras.com/hizmetler/uyku-bozukluklari' },
    openGraph: {
        title: 'Ankara Eryaman’da Uyku Bozuklukları Değerlendirmesi',
        description: 'Uykusuzluk, gece uyanma ve uyku kalitesi sorunları hakkında bilgilendirme ve Eryaman’da psikiyatrik değerlendirme süreci.',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Uyku bozukluğu nedir?',
        answer: 'Uyku bozukluğu, kişinin uykuya dalmasını, uykuyu sürdürmesini veya dinlendirici bir uyku almasını engelleyerek günlük yaşam işlevselliğini bozan klinik psikiyatrik bir durumdur. Belirtiler kişiden kişiye değişebilir.',
    },
    {
        question: 'Uykusuzluk neden olur?',
        answer: 'Uykusuzluk (insomnia); aşırı stres, çözülemeyen içsel kaygılar, vardiyalı çalışma düzeni, aşırı kafein tüketimi veya gizli bir depresyonun yansıması olarak ortaya çıkabilir.',
    },
    {
        question: 'Gece uyanma normal mi?',
        answer: 'Gece boyunca kısa süreli 1-2 uyanış fizyolojik olabilir. Ancak uyandığında kalbi çarpıyor, saatlerce "Gece sürekli uyanıyorum" diyerek yatakta dönülüyorsa, bu klinik yansımanın psikiyatrik görüşme ile değerlendirilmesi gerekir.',
    },
    {
        question: 'Uyuyamamak psikolojik mi?',
        answer: 'Büyük oranda öyledir. Fiziksel bir ağrı veya solunum (apne) sorunu yoksa; "Yatağa giriyorum ama uyku gelmiyor" şikayetinin altında çoğunlukla zihnin gün içindeki stresi gece yatağa taşıması (anksiyete) yatmaktadır.',
    },
    {
        question: 'Uyku bozukluğu kendi kendine geçer mi?',
        answer: 'Geçici stres dönemlerinde birkaç günlük uykusuzluklar normale dönebilir. Ancak haftalar süren kronik uyku bölünmeleri profesyonel destek (bireysel değerlendirme) olmadan genellikle sarmal haline gelerek ağırlaşır.',
    },
    {
        question: 'Uyku için hangi doktora gidilir?',
        answer: 'Uykuya dalma, sürdürme ve uykudan yorgun kalkma şikayetlerinin arka planında organik (KBB/Göğüs) bir hastalık yoksa, tespiti ve düzenlenmesi Ruh Sağlığı ve Hastalıkları (Psikiyatri) doktorlarınca gerçekleştirilir.',
    },
    {
        question: 'Uyku sorunu depresyon belirtisi mi?',
        answer: 'Evet. Özellikle sabahın çok erken saatlerinde (örneğin 04:00) uyanıp tekrar uykuya dalamamak ve derin bir çökkünlük hissetmek, klasik majör depresyon tablosunun majör habercilerinden biridir.',
    },
    {
        question: 'Eryaman’da uyku değerlendirmesi nasıl yapılır?',
        answer: 'Ankara Eryaman’da faaliyet gösteren kliniğimizde yetişkinlere özel psikiyatrik muayene ile uykusuzluğun altında yatan kaygı veya depresif unsurlar bireysel şekilde öykülenerek yapılandırılır.',
    },
];

export default function UykuBozukluklariPillarPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroBg}><div className={styles.heroOrb}></div></div>
                <div className={`container ${styles.heroContent}`}>
                    <Link href="/hizmetler" className={styles.backLink}>← Tüm Değerlendirme Alanları</Link>
                    <span className={styles.heroIcon}>🌙</span>
                    <h1>Ankara Eryaman’da Uyku Bozuklukları Değerlendirmesi</h1>
                    <p className={styles.heroDesc}>
                        "Gece sürekli uyanıyorum", "Sabaha karşı gözüm açılıyor" ya da "Yatağa giriyorum ama uyku gelmiyor"
                        şeklindeki feryatlar; geçici yorgunluktan ziyade zihnin arka planındaki gizli stres, depresyon veya anksiyetenin
                        en net göstergesidir. Sağlıklı bir psikiyatrik görüşme ile uykunun dinlendirici doğasına dönün.
                    </p>
                    <div className={styles.author}>
                        <div className={styles.authorIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <div><strong>Uzm. Dr. Abdullah Maraş</strong><span>Ruh Sağlığı (Psikiyatrist) Uzmanı</span></div>
                    </div>

                    <div className="info-banner" style={{ marginTop: 'var(--space-6)' }}>
                        <strong>📌 Bilgilendirme ve Kapsam Notu</strong>
                        Bu sayfa içeriği yalnızca yetişkin psikiyatrisi kapsamındaki Uyku Bozuklukları hakkında klinik bilgilendirme sağlar.
                        Metinler çocuk ve ergen uykusuzluklarını kapsamaz. İnternet sayfaları üzerinden kesin tedavi vaadi veya standart medikal
                        öneriler verilemez; tüm uygulamalar birebir uzman hekim görüşmesiyle kişiye özel yapılandırılır.
                    </div>
                </div>
            </section>

            <section className="section">
                <div className={`container ${styles.contentGrid}`}>
                    <article className={styles.article}>

                        <p className={styles.lead}>
                            İnsanoğlu ömrünün yaklaşık üçte birini uykuda geçirir. Sağlıklı bir uyku; zihinsel ve bedensel
                            yenilenmenin, hafızanın onarımının ve ertesi günkü ruh halimizin yegane sigortasıdır.
                            Ancak günümüzün hızlı, stresli ve aşırı uyaranlı yetişkinlik hayatında, "uyku" artık pek çok birey için
                            dinlenilen bir liman değil, saatlerce yatakta dört dönülen bir ıstırap haline gelmiştir. "Uyuyamıyorum" çığlığı
                            bir hastalık değil; çoğu zaman altta yatan başka psikiyatrik çığlıkların yankısıdır.
                        </p>

                        <h2 id="uyku-bozuklugu-nedir">Uyku Bozukluğu Nedir?</h2>
                        <p>
                            Uyku bozukluğu, kişinin kalitatif (kalite) veya kantitatif (süre) olarak sağlıklı uyku dengesini yitirmesi halidir.
                            Kişi uykuya dalmakta saatlerce süre harcayabilir, gece dalar ancak sabaha kadar defalarca tam bir paniğe uyanabilir veya
                            tam tersi gün boyu uyuduğu halde yorgun kalkabilir. Bu tablonun yıkıcı etkileri ve süresi
                            kişiden kişiye değişebilir olup, <Link href="/blog/uyku-bozukluklari-nedir">klinik uyku bozukluklarının</Link> tespiti,
                            psikiyatrik açıdan kritik bir öneme sahiptir.
                        </p>

                        <h2 id="uykusuzluk-insomnia">Uykusuzluk (İnsomnia) Nedir?</h2>
                        <p>
                            Uyku bozukluklarının kraliçesi olarak bilinen İnsomnia, kişinin uykuya dalmada güçlük çekmesi veya uykuyu sürdürememesidir.
                            Hasta ya "Yatağa giriyorum saatlerce tavana bakıyorum ama uyku gelmiyor" diye sızlanır ya da
                            uyur ancak en ufak çıtırtıda uyanıp bir daha uykuya devam edemez. <Link href="/blog/uykusuzluk-neden-olur">Uykusuzluğun nedenleri</Link> arasında,
                            kronik yaşam stresi ve iş baskısı zirvededir.
                        </p>

                        <h2 id="gece-sik-uyanma">Gece Sık Uyanma Neden Olur?</h2>
                        <p>
                            Yatağa rahat girip, gecenin kör vakti 3-4 kez kalp çarpıntısıyla uyanan hastalar genelde "Benim uykum çok hafif" diyerek
                            bu durumu normalleştirir. Oysa <Link href="/blog/gece-sik-uyanma-nedenleri">gece sık uyanma sorunu</Link>,
                            zihnin gün içinde çözemediği çatışmaları uyku esnasında "tehdit" olarak algılayıp adrenalin salgılamasıyla
                            amigdalanın zili çalmasından ibarettir.
                        </p>

                        <h2 id="uykuya-dalamama">Uykuya Dalamama Sorunu</h2>
                        <p>
                            Yastığa baş konduğu an, insanın kendisiyle baş başa kaldığı andır. Gün içindeki iş gürültüsü ve tempo susar;
                            işte tam o an beynin içinde susturulamayan sesler başlar. Yarına dair ödenmeyen senetler, eşle edilen kavganın
                            söylenmemiş sözleri veya <Link href="/hizmetler/eriskin-dehb">Erişkin DEHB</Link> olan hastanın bitmek
                            bilmeyen fikir uçuşmaları hastayı esir alır. <Link href="/blog/uykuya-dalamama-sorunu">Uykuya dalmak</Link> imkansızlaşır.
                        </p>

                        <h2 id="sabah-erken-uyanma">Sabah Erken Uyanma (Terminal İnsomnia)</h2>
                        <p>
                            Saat 03:00 ya da 04:00 sularında aniden bir ağırlıkla gözlerini açan ve güneş doğana kadar yatakta kıvranan hasta,
                            tipik "Terminal İnsomnia" yaşıyordur. "Sabaha karşı gözüm açılıyor ve cin gibi oluyorum ama
                            kendimi çok kötü hissediyorum" söylemi, psikiyatride ağır bir ruhsal tablonun acil klinik sinyali olarak kabul edilir.
                        </p>

                        <h2 id="asiri-uyuma">Aşırı Uyuma (Hipersomnia)</h2>
                        <p>
                            Sadece uyuyamamak değil, gereğinden çok fazla uyuyup yine de uyanamamak da klinik bir konudur.
                            Kişinin günde 12-14 saat uyumasına rağmen kendini dayak yemiş gibi bitkin hissettiği bu <Link href="/blog/asiri-uyuma-hipersomnia-nedir">hipersomnia süreçleri</Link>; bedenin
                            dış dünyadan, stresten ve mevcut acılarından kaçmak için kullandığı biyolojik bir "kapanma" yani savuşturma metodudur.
                        </p>

                        <h2 id="kaygi-ve-uyku">Kaygı ve Uyku İlişkisi</h2>
                        <p>
                            İnsan beyni evrimsel olarak "tehlike altındayken" uyumamak üzere programlanmıştır. Ormanda kaplan sesini
                            duyan bir insan nasıl uyumazsa; günümüzde faturasını ödeyemeyen veya iflas etmekte olan
                            bir <Link href="/hizmetler/anksiyete">Anksiyete hastası</Link> da beynindeki "hayali kaplan"
                            (stres ve felaket beklentisi) sebebiyle uyuyamaz. Güvenlik hissi olmadan, beyin kendini yenilenme moduna kapatamaz.
                        </p>

                        <h2 id="depresyon-ve-uyku">Depresyon ve Uyku İlişkisi</h2>
                        <p>
                            Majör <Link href="/hizmetler/depresyon">çökkünlük (depresyon)</Link> yaşayan erişkin hastaların neredeysre
                            tamamında uyku mimarisi yerle bir olmuştur. Hasta ya hiç bitmeyen karanlık düşünceler yüzünden
                            "sabaha karşı gözüm açılıyor" der; ya da dış dünyayla olan tüm bağını kopardığı için 24 saatin 20 saatini
                            yatağın içinde saklanarak geçirir.
                        </p>

                        <h2 id="panik-atak-uyanma">Panik Atak ve Gece Uyanma</h2>
                        <p>
                            Yatağa girildiğinde dış seslerin kesilmesiyle kişi tamamen kendi kalp atışına, iç organlarının ritmine odaklanır.
                            <Link href="/hizmetler/panik-atak">Panik atak yatkınlığı</Link> olan bir yetişkin uykuya daldıktan
                            1-2 saat sonra derin bir nefes darlığı, terleme ve "ölüyorum" dehşetiyle uykudan uyanır (Gece Panik Atağı).
                            Bu hasta ertesi gün yatağa gitmekten (Aynı şeyleri yaşamaktan) korktuğu için uykuya büyük bir direnç gösterir.
                        </p>

                        <h2 id="uyku-hijyeni">Uyku Hijyeni Nedir?</h2>
                        <p>
                            Odadaki her şeyin uykuya hizmet etmesi kuralıdır. <Link href="/blog/uyku-hijyeni-nasil-saglanir">Uyku hijyeni kurallarına</Link> uymayan
                            bir bireyde; karanlığın zayıf olması, odanın gereğinden sıcak veya soğuk tutulması, yatılan yatakta
                            gündüzleri yemek yenip film izlenmesi gibi davranışsal yanlışlar, beynin şartlanmasını (Yatak=Uyku komutunu) bozar.
                        </p>

                        <h2 id="ekran-kullanimi">Ekran Kullanımı ve Uyku</h2>
                        <p>
                            Uyuyamayan hastanın yaptığı ilk şey yatakta dönerken eline telefonu almaktır. Ancak telefon ve tabletlerden
                            salgılanan "Mavi Işık", beynin epifiz bezine "Şu an gündüz vakti, uyanık olmalıyız" sinyali gönderir.
                            Melatonin (uyku hormonu) salgısını anında kesen mavi ekran ışıkları, uykusuzluğu en çok perçinleyen zehirli döngüdür.
                        </p>

                        <h2 id="is-hayati">İş Hayatı ve Uyku Düzensizliği</h2>
                        <p>
                            Sürekli vardiya değiştiren hastane çalışanları, güvenlik görevlileri veya gece çalışan plaza yöneticilerinde;
                            vücudun doğal biyoritmi (sirkadiyen ritim) tepetaklak olur. Hastalar hafta sonu bile normal
                            saatte uyuyamaz ve haftalar ilerledikçe bu kronik yorgunluk doğrudan tükenmişlik sendromuna yol açar.
                        </p>

                        <h2 id="gunluk-yasama-etkisi">Uyku Bozuklukları Günlük Yaşamı Nasıl Etkiler?</h2>
                        <p>
                            Kronik uykusuzluğun yansıması, bir iki bardak sert kahveyle atlatılacak kadar hafif değildir. Uykusunu
                            alamayan erişkin birey; trafikte sinir krizleri geçirir, en ufak iletişim hatalarında eşine bağırır,
                            iş yerinde hafıza sorunları yüzünden sürekli hatalar yapar. En nihayetinde o masum sayılan uyku eksikliği,
                            işten kovulmaya veya evliliğin bitimine giden kocaman bir stresi kuluçkada tutar.
                        </p>

                        <h2 id="psikiyatri-degerlendirmesi">Ne Zaman Psikiyatri Değerlendirmesi Düşünülmeli?</h2>
                        <p>
                            Şayet 3 günden uzun, 2 haftadan fazladır "yatağa girip uyuyamamak" veya uyuyup "sürekli bitkin
                            ve uykusuz kalkmak" söz konusuysa; bunun üzerine evdeki veya işteki kaliteniz dip yapıyorsa,
                            oraya bir uzman müdahalesi şarttır. Reçetesiz internet hapları veya komşu tavsiyeleri bitkisel
                            çaylarla çözülemeyecek bir nörobiyolojik alevlenme başlamıştır.
                        </p>

                        <h2 id="eryaman-sureci">Ankara Eryaman’da Uyku Değerlendirme Süreci</h2>
                        <p>
                            Bir insanın uykusunu kaybetmesi, aslında ruhi dengesini (terazisini) kaybetmesiyle eşdeğerdir.
                            Ankara Eryaman (ve Batıkent, Altay Mahallesi, Etimesgut ağında) hizmet sağlayan Uzm. Dr. Abdullah Maraş; uyuyamayan erişkinleri
                            standart ezberlerle değil, uykuyu kaçıran "Ana yangının nerede olduğunu (Depresyon mu, Anksiyete mi, Travma mı)"
                            bulmak üzerine kurgulu, detaylı klinik <Link href="/randevu">Ankara Eryaman uyku bozuklukları değerlendirme süreci</Link> ile inceler.
                            Yapılan psikiyatrik görüşme ile beraber o eşsiz uyku tekrar biyolojinizle kavuşturulur.
                        </p>

                        <div className={styles.faqSection} id="sss">
                            <h2>Sık Sorulan Sorular</h2>
                            <FAQSection items={faqItems} />
                        </div>

                        <div className={styles.articleCta}>
                            <h3>Uykusuz Gecelerinize Son Verin</h3>
                            <p>Ankara Eryaman'da yetkin klinik yaklaşımımızla uykusuzluğun altındaki psikiyatrik zemini çözümleyelim.</p>
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
                                <li><a href="#uyku-bozuklugu-nedir">Uyku Bozukluğu Nedir?</a></li>
                                <li><a href="#uykusuzluk-insomnia">İnsomnia (Uyuyamamak)</a></li>
                                <li><a href="#gece-sik-uyanma">Gece Sık Uyanmak</a></li>
                                <li><a href="#uykuya-dalamama">Uykuya Dalamama</a></li>
                                <li><a href="#sabah-erken-uyanma">Sabah Erken Uyanmak</a></li>
                                <li><a href="#asiri-uyuma">Aşırı Uyuma (Hipersomnia)</a></li>
                                <li><a href="#kaygi-ve-uyku">Kaygı Etkisi</a></li>
                                <li><a href="#depresyon-ve-uyku">Depresyon Etkisi</a></li>
                                <li><a href="#panik-atak-uyanma">Gece Panik Atağı</a></li>
                                <li><a href="#uyku-hijyeni">Uyku Hijyeni</a></li>
                                <li><a href="#ekran-kullanimi">Ekran Kullanımı</a></li>
                                <li><a href="#is-hayati">İş Yaşamı Etkileri</a></li>
                                <li><a href="#gunluk-yasama-etkisi">Yaşam Kalitesi Yıkımı</a></li>
                                <li><a href="#psikiyatri-degerlendirmesi">Ne Zaman Hekime Gidilmeli?</a></li>
                                <li><a href="#eryaman-sureci">Eryaman Klinik Yaklaşımı</a></li>
                            </ul>
                        </nav>

                        <div className={styles.sidebarCta}>
                            <h3>Doktor Değerlendirmesi</h3>
                            <p>Erişkin uyku sorunlarında profesyonel psikiyatrik (Ankara) klinik randevunuz.</p>
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
                            <h4>İlgili Uyku İçerikleri</h4>
                            <ul className={styles.sidebarLinks}>
                                <li><Link href="/blog/uyku-bozukluklari-nedir">Uyku Bozukluğu Özeti</Link></li>
                                <li><Link href="/blog/uykusuzluk-neden-olur">Uykusuzluğun Ana Nedenleri</Link></li>
                                <li><Link href="/blog/gece-sik-uyanma-nedenleri">Neden Sürekli Uyanırız?</Link></li>
                                <li><Link href="/blog/uyku-hijyeni-nasil-saglanir">Uyku Kalitesini Artırma</Link></li>
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
                            "name": "Ankara Eryaman Uyku Bozuklukları Değerlendirmesi",
                            "url": "https://drabdullahmaras.com/hizmetler/uyku-bozukluklari",
                            "about": {
                                "@type": "MedicalCondition",
                                "name": "Sleep Disorder",
                                "alternateName": "Uyku Bozuklukları, İnsomnia, Uykusuzluk"
                            },
                            "author": {
                                "@type": "Physician",
                                "name": "Uzm. Dr. Abdullah Maraş",
                                "medicalSpecialty": "Psychiatric",
                                "url": "https://drabdullahmaras.com/hakkinda"
                            }
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
                                { "@type": "ListItem", "position": 3, "name": "Uyku Bozuklukları", "item": "https://drabdullahmaras.com/hizmetler/uyku-bozukluklari" }
                            ]
                        }
                    ]
                })
            }} />
        </>
    );
}
