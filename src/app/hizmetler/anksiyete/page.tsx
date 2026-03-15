import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon/page.module.css';

export const metadata: Metadata = {
    title: 'Anksiyete (Kaygı Bozukluğu) Değerlendirmesi | Ankara Eryaman Psikiyatri',
    description: 'Ankara Eryaman\'da anksiyete (kaygı bozukluğu) değerlendirmesi. Aşırı kaygı, çarpıntı, huzursuzluk belirtilerine yönelik uzman psikiyatri desteği.',
    alternates: { canonical: 'https://drabdullahmaras.com/hizmetler/anksiyete' },
    openGraph: {
        title: 'Ankara Eryaman\'da Anksiyete (Kaygı Bozukluğu) Değerlendirmesi',
        description: 'Ankara Eryaman\'da anksiyete bozukluğu değerlendirmesi. Klinik görüşme ve bireysel planlama süreci.',
        type: 'website',
        locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Anksiyete (kaygı bozukluğu) tam olarak nedir?',
        answer: 'Anksiyete, yaklaşan bir olay veya belirsizliğe karşı gösterilen doğal bir tepkidir. Ancak bu kaygı orantısız şekilde yoğunsa, uzun süre devam ediyorsa ve günlük yaşamı olumsuz etkiliyorsa anksiyete bozukluğundan söz edilebilir.',
    },
    {
        question: 'Anksiyete bedensel belirtilere yol açar mı?',
        answer: 'Evet. Çarpıntı, terleme, kas gerginliği, hızlı nefes alıp verme, mide ve bağırsak sorunları gibi bedensel belirtiler anksiyete bozukluklarında sıkça görülmektedir.',
    },
    {
        question: 'Ne zaman bir psikiyatri uzmanına başvurmalıyım?',
        answer: 'Kaygınız günlük işlevselliğinizi, iş performansınızı veya ilişkilerinizi bozuyorsa, uyku kalitenizi etkiliyorsa ve kendi başınıza yönetmekte zorlanıyorsanız uzman değerlendirmesi almanız önerilir.',
    },
    {
        question: 'Anksiyete ile panik atak aynı şey midir?',
        answer: 'Hayır, aynı değildir. Anksiyete genellikle uzun süreli, daha hafif ama sürekli bir kaygı hali iken; panik atak dakikalar içinde aniden zirveye ulaşan, şiddetli bedensel belirtilerle seyreden yoğun bir korku halidir.',
    },
    {
        question: 'Anksiyete geçici bir durum mudur?',
        answer: 'Bazı yaşam stresörlerine bağlı kaygılar geçici olabilir. Ancak klinik düzeydeki anksiyete bozuklukları yapılandırılmış profesyonel değerlendirme ve bireysel destek süreleri gerektiren, izlem gereken durumlardır.',
    },
    {
        question: 'Ankara Eryaman bölgesinde değerlendirme hizmeti veriyor musunuz?',
        answer: 'Evet. Ankara Eryaman, Altay Mahallesi çevresinde Etimesgut ve Batıkent bölgelerinden de kolaylıkla ulaşılabilen kliniğimizde anksiyete değerlendirmesi yapılmaktadır.',
    },
    {
        question: 'Değerlendirme görüşmesi nasıl geçmektedir?',
        answer: 'Klinik görüşme, bireyin şikayetlerini, belirtilerin başlangıcını, yaşamına etkisini anlamaya yönelik karşılıklı, yargılayıcı olmayan ve empatik bir çerçevede ilerler.',
    },
];

export default function AnksiyetePillarPage() {
    return (
        <>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroBg}>
                    <div className={styles.heroOrb}></div>
                </div>
                <div className={`container ${styles.heroContent}`}>
                    <Link href="/hizmetler" className={styles.backLink}>← Hizmetlere Dön</Link>
                    <span className={styles.heroIcon}>🧠</span>
                    <h1>Ankara Eryaman&apos;da Anksiyete (Kaygı Bozukluğu) Değerlendirmesi</h1>
                    <p className={styles.heroDesc}>
                        <strong>Sürekli kaygı hali ve kontrol edemediğiniz endişeler günlük hayatınızı zorlaştırıyorsa, yalnız değilsiniz.</strong>
                    </p>
                    <p className={styles.heroDesc}>
                        Kaygı, insan doğasının doğal bir parçası olsa da kontrolden çıktığında yıpratıcı bir sürece dönüşebilir.
                        Uzm. Dr. Abdullah Maraş, Ankara Eryaman&apos;da anksiyete üzerine kapsamlı psikiyatrik değerlendirme hizmeti sunmaktadır.
                    </p>

                    <div className="info-banner" style={{ marginTop: 'var(--space-6)' }}>
                        <strong>📌 Bilgilendirme</strong>
                        Bu sayfa bilgilendirme amaçlıdır. Bireysel tanı ve planlama süreçleri için bir psikiyatri uzmanı değerlendirmesi şarttır.
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="section">
                <div className={`container ${styles.contentGrid}`}>

                    {/* Left: Article */}
                    <article className={styles.article}>
                        <h2 id="nedir">Anksiyete (Kaygı Bozukluğu) Nedir?</h2>
                        <p>
                            Gelecekle ilgili tehdit algısı veya belirsizlik karşısında hissedilen yoğun endişe haline anksiyete denir.
                            Normal sınırlar içerisindeki kaygı, kişiyi olası tehlikelere karşı hazırlayan ve koruyan hayati bir mekanizmadır.
                            Ancak bu doğal savunma mekanizması, gerçek bir tehdit ortada yokken veya basit stresörler karşısında
                            orantısız bir biçimde çalışmaya başladığında <strong>anksiyete bozukluğu</strong> (kaygı bozukluğu) tablosu ortaya çıkar.
                        </p>
                        <p>
                            Bu tabloda kişi, çoğu zaman mantıksız olduğunu bilmesine rağmen, sürekli bir
                            &ldquo;kötü bir şey olacak&rdquo; beklentisi içerisindedir. Bu huzursuzluk hali bireyin enerjisini tüketir.
                        </p>

                        <h2 id="belirtiler">Anksiyete Belirtileri Nelerdir?</h2>
                        <p>Anksiyete belirtileri başlıca duygusal ve bedensel olarak iki grupta kendisini gösterir. Sürekli panik hali, kötü bir şey olacak beklentisi, kalp çarpıntısı, titreme, terleme ve kas ağrıları sıkça görülür. Bu klinik belirtilerin şiddeti kişiden kişiye değişebilir ve uzman psikiyatrik değerlendirmesi ile yapılandırılmalıdır.</p>
                        <ul>
                            <li>Sürekli endişe ve panik hali</li>
                            <li>Kalp çarpıntısı ve nefes darlığı</li>
                            <li>Aşırı terleme ve kas gerginliği</li>
                            <li>Odaklanma güçlüğü ve dalgınlık</li>
                            <li>Sosyal ortamlardan belirgin kaçınma</li>
                        </ul>
                        <h3>Anksiyete bedensel belirti verir mi?</h3>
                        <p>Evet, anksiyete sürekli kaygı düşüncelerinin yanında mide sorunları, baş dönmesi, uyuşma ve göğüs sıkışması gibi bedensel duyumlarla sıklıkla kendini hissettirir.</p>
                        <h3>Anksiyete kendi kendine geçer mi?</h3>
                        <p>Kısa süreli kaygılar yatışabilir ancak klinik düzeydeki yaygın anksiyete belirtileri, profesyonel klinik destek olmadan genellikle kendi kendine ortadan kaybolmaz.</p>
                        <p>
                            Anksiyete bozukluğu kendisini sadece düşünsel bazda değil, aynı zamanda yoğun bedensel sinyallerle gösterir.
                        </p>

                        <h3>Duygusal Belirtiler</h3>
                        <ul>
                            <li>Sürekli devam eden korku ve endişe hali</li>
                            <li>Huzursuzluk, diken üstünde olma hissi (gerginlik)</li>
                            <li>Kontrolü kaybetme veya çıldırma korkusu</li>
                            <li>Tahammülsüzlük ve kolay sinirlenme</li>
                        </ul>

                        <h3>Bedensel Belirtiler</h3>
                        <ul>
                            <li>Çarpıntı, kalp ritminde hızlanma</li>
                            <li>Nefes darlığı, göğüste sıkışma hissi</li>
                            <li>Aşırı terleme, titreme veya üşüme</li>
                            <li>Kas gerginliği (özellikle boyun, sırt ve omuz bölgesinde)</li>
                            <li>Mide bulantısı, karın ağrısı veya bağırsak hareketlerinde değişiklik</li>
                        </ul>

                        <h3>Bilişsel ve Davranışsal Belirtiler</h3>
                        <ul>
                            <li>Odaklanma güçlüğü, zihnin tamamen kaygı verici konuya meşgul olması</li>
                            <li>Sürekli en kötü senaryoyu düşünme (felaketleştirme)</li>
                            <li>Kaygı yaratan ortamlardan veya durumlardan <strong>kaçınma</strong></li>
                        </ul>

                        <h2 id="gunluk-yasam">Anksiyete Günlük Yaşamı Nasıl Etkiler?</h2>
                        <p>
                            Sürekli kaygı hali, ruhsal enerjinin büyük bir kısmını tükettiği için günlük yaşamda ciddi işlevsellik kayıplarına yol açar.
                        </p>
                        <ul>
                            <li><strong>İş ve Okul Hayatı:</strong> Odaklanma sorunları ve stresli durumlardan kaçınma davranışı, performansı doğrudan düşürür. Kişi, potansiyelini sahaya yansıtmakta zorlanır.</li>
                            <li><strong>Sosyal İlişkiler:</strong> Kaygı, kişinin insanlarla iletişim kurmaktan kaçınmasına, kendini izole etmesine neden olabilir.</li>
                            <li><strong>Uyku ve Fiziksel Sağlık:</strong> Düşüncelerin durdurulamaması, sık sık <Link href="/hizmetler/uyku-bozukluklari">uyku bozuklukları ile ilişkili kaygı durumuna</Link> yol açar. Düzenli uyuyamamak da anksiyeteyi artıran bir kısır döngü yaratır.</li>
                        </ul>

                        <h2 id="anksiyete-sure">Anksiyete Ne Kadar Sürer?</h2>
                        <p>Anksiyete bozukluğunun süresi hastanın genetik alt yapısına, maruz kaldığı stres şiddetine ve kliniğe başvuru zamanına göre kişiden kişiye değişebilir. Bazı durumlarda belirtiler aylar içerisinde yatışırken, yaygın anksiyete bozukluğu gibi kronik durumlarda uygun izlem yapılmadığında yıllarca sürebilir.</p>
                        <h3>Anksiyete atakları kaç gün sürer?</h3>
                        <p>Anksiyete atakları genellikle uzun sürelidir ve günler veya haftalar boyunca genel bir gerginlik, huzursuzluk hali olarak yaşamı etkilemeye devam eder.</p>
                        <h3>Anksiyete tamamen biter mi?</h3>
                        <p>Yapılandırılmış psikiyatrik değerlendirme ve düzenli takip süreçleriyle kaygı kontrol altına alınabilir, ancak hastanın stres toleransını uzun vadede yönetmesi gerekir.</p>

                        <h2 id="panik-atak-farki">Anksiyete ile Panik Atak Arasındaki Fark</h2>
                        <p>
                            Toplumda sıkça birbiri yerine kullanılan bu iki kavram aslında farklı tabloları tarif eder.
                            Anksiyete bozukluğu (özellikle Yaygın Anksiyete Bozukluğu); daha sinsi, uzun süreli, günlere yayılan
                            yaygın bir endişe halidir.
                        </p>
                        <p>
                            Panik atak ise aniden ortaya çıkan, dakikalar (genellikle 10-30 dk) içinde zirveye ulaşan ve
                            boğulma hissi, kalp krizi geçiriyorum korkusu gibi çok şiddetli bedensel belirtilerin eşlik ettiği kısa süreli krizlerdir.
                            Daha kapsamlı bilgi için <Link href="/hizmetler/panik-atak">panik atak değerlendirmesi</Link> sayfamızı
                            inceleyebilirsiniz.
                        </p>

                        <h2 id="depresyon-iliskisi">Anksiyete ve Depresyon İlişkisi</h2>
                        <p>
                            Klinik pratikte anksiyete ve depresyon sıklıkla birlikte görülür veya birbirini tetikleyebilir.
                            Sürekli kaygılı olmak bir süre sonra zihinsel tükenmişliğe ve çökkünlüğe (depresif duruma) yol açabilirken;
                            depresyon yaşayan bir kişi de durumunun getirdiği belirsizlikler yüzünden kaygı geliştirebilir.
                            <Link href="/hizmetler/depresyon">Ankara&apos;da depresyon ve anksiyete birlikteliği</Link> durumunda
                            kapsamlı, çift yönlü bir psikiyatrik değerlendirme büyük önem taşır.
                        </p>

                        <h2 id="uzman-destegi">Ne Zaman Uzman Desteği Düşünülmeli?</h2>
                        <p>
                            Aşağıdaki durumları yaşıyorsanız bir <strong>uzman psikiyatri desteği</strong> almayı düşünmelisiniz:
                        </p>
                        <ul>
                            <li>Kaygılarınız mantıklı bir nedene dayanmıyor veya kontrol edilemiyorsa,</li>
                            <li>Günlük sorumluluklarınızı yerine getirmenizi (iş, okul) engelliyorsa,</li>
                            <li>Sürekli bedensel belirtiler (çarpıntı, uyku sorunları, kas ağrıları) yaşıyorsanız,</li>
                            <li>Kaygıdan dolayı sosyal hayattan kendinizi geri çekiyorsanız.</li>
                        </ul>

                        <h2 id="degerlendirme">Ankara Eryaman&apos;da Anksiyete İçin Psikiyatrik Değerlendirme Süreci</h2>
                        <p>
                            Eryaman&apos;da anksiyete değerlendirme süreci klinik ortamda, bireyin kendini güvende ve
                            anlaşılmış hissettiği bir çerçevede yürütülmektedir. Ortalama 40-60 dakika süren ilk klinik
                            görüşmede hastanın öyküsü dinlenir, kaygının şiddeti ve tetikleyicileri analiz edilir.
                        </p>
                        <p>
                            Değerlendirme sonucunda, bireyin klinik yapısına en uygun şekilde, gerekli görülürse
                            biyolojik yaklaşımlar (medikal planlamalar) veya
                            terapötik yaklaşımlar içeren bir yol haritası belirlenir. Altay Mahallesi&apos;nde bulunan kliniğe,
                            <Link href="/hizmetler/yetiskin-psikiyatrisi">yetişkin psikiyatrisi değerlendirmesi</Link> için
                            Etimesgut ve Batıkent bölgelerinden de kolaylıkla ulaşılabilmektedir.
                        </p>

                        {/* FAQ Bölümü */}
                        <div className={styles.faqSection} id="sss">
                            <h2>Sık Sorulan Sorular</h2>
                            <FAQSection items={faqItems} />
                        </div>

                        {/* CTA */}
                        <div className={styles.articleCta}>
                            <h3>Anksiyete Değerlendirmesi İçin Randevu Alın</h3>
                            <p>Ankara Eryaman&apos;da bilimsel ve empatik bir yaklaşımla, aşırı kaygı tablonuzun uzman hekim tarafından değerlendirilmesi için iletişime geçebilirsiniz.</p>
                            <Link href="/randevu" className="btn btn--primary btn--lg" style={{ marginTop: 'var(--space-4)' }}>
                                Randevu Almak İstiyorum →
                            </Link>
                        </div>
                    </article>

                    {/* Right: Sidebar */}
                    <aside className={styles.sidebar}>
                        <div className={styles.sidebarCard}>
                            <h4>Hızlı Menü</h4>
                            <ul className={styles.tocList}>
                                <li><a href="#nedir">Anksiyete Nedir?</a></li>
                                <li><a href="#belirtiler">Belirtiler Nelerdir?</a></li>
                                <li><a href="#gunluk-yasam">Günlük Yaşama Etkileri</a></li>
                                <li><a href="#panik-atak-farki">Panik Atak Farkı</a></li>
                                <li><a href="#depresyon-iliskisi">Depresyonla İlişkisi</a></li>
                                <li><a href="#uzman-destegi">Ne Zaman Destek Alınmalı?</a></li>
                                <li><a href="#degerlendirme">Eryaman&apos;da Değerlendirme Süreci</a></li>
                            </ul>
                        </div>

                        <div className={styles.sidebarCta}>
                            <h3>Klinik Değerlendirme</h3>
                            <p>Sorunlarınızın çözümü için ilk adımı atın.</p>
                            <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>
                                Randevu Al
                            </Link>
                        </div>

                        <div className={styles.sidebarCard}>
                            <h4>Uzman Hekim</h4>
                            <div className={styles.doctorCard}>
                                <div className={styles.doctorIcon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                </div>
                                <strong>Uzm. Dr. Abdullah Maraş</strong>
                                <span>Psikiyatri Uzmanı</span>
                                <span>Ankara, Eryaman</span>
                            </div>
                        </div>

                        <div className={styles.sidebarCard}>
                            <h4>İlgili Çalışma Alanları</h4>
                            <ul className={styles.sidebarLinks}>
                                <li><Link href="/hizmetler/depresyon">Depresyon</Link></li>
                                <li><Link href="/hizmetler/panik-atak">Panik Atak</Link></li>
                                <li><Link href="/hizmetler/uyku-bozukluklari">Uyku Bozuklukları</Link></li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </section>

            {/* JSON-LD Schema: MedicalWebPage, Physician, FAQPage, BreadcrumbList */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "MedicalWebPage",
                            "name": "Anksiyete (Kaygı Bozukluğu) Değerlendirmesi",
                            "url": "https://drabdullahmaras.com/hizmetler/anksiyete",
                            "about": {
                                "@type": "MedicalCondition",
                                "name": "Anksiyete Bozukluğu"
                            },
                            "author": { "@id": "https://drabdullahmaras.com/#physician" },
"isPartOf": { "@id": "https://drabdullahmaras.com/#website" }
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": faqItems.map(item => ({
                                "@type": "Question",
                                "name": item.question,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": item.answer
                                }
                            }))
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://drabdullahmaras.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Hizmetler", "item": "https://drabdullahmaras.com/hizmetler" },
                                { "@type": "ListItem", "position": 3, "name": "Anksiyete", "item": "https://drabdullahmaras.com/hizmetler/anksiyete" }
                            ]
                        }
                    ]
                })
            }} />
        </>
    );
}
