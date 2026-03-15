import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon/page.module.css';

export const metadata: Metadata = {
    title: 'Panik Atak Değerlendirmesi | Eryaman Psikiyatrist Uzm. Dr. Abdullah Maraş',
    description:
        'Ankara Eryaman\'da panik atak değerlendirmesi. Ölüm korkusu, nefes alamama, kalp krizi şüphesi ve gece çarpıntısı gibi bedensel/zihinsel belirtilerin psikiyatrik analizi.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/hizmetler/panik-atak' },
    openGraph: {
        title: 'Ankara Eryaman\'da Panik Atak Değerlendirmesi',
        description: 'Ankara Eryaman\'da bilimsel çerçevede panik atak değerlendirmesi. Ruh sağlığı uzmanı ile bireysel klinik görüşme.',
        type: 'article',
        locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Panik atak öldürür mü?',
        answer: 'Hayır, panik atağın kendisi ölümcül değildir ve kalbe zarar vermez. O an yaşanan "ölecekmişim" hissi, beynin yanlış bir alarm vererek vücuda aşırı adrenalin pompalamasından kaynaklanır.',
    },
    {
        question: 'Panik atak kalp krizi midir?',
        answer: 'Panik atak bir kalp krizi değildir. Ancak belirtileri (göğüs ağrısı, çarpıntı, uyuşma) kalp krizini taklit edebilir. Bu nedenle ilk defa yaşandığında mutlaka acil tıbbi değerlendirme ile kalp sağlığı ekarte edilmelidir.',
    },
    {
        question: 'Panik atak kaç dakika sürer?',
        answer: 'Genellikle 10-20 dakika içinde zirveye ulaşır ve nadiren 30 dakikadan uzun sürer. Ancak atağın bıraktığı yorgunluk hissi saatlerce ya da gün boyu devam edebilir.',
    },
    {
        question: 'Gece uykudan panik atakla uyanmak neden olur?',
        answer: 'Bilinçaltındaki biriken stres, gün içi yorgunluk veya uyku apnea gibi organik nedenler tetiği çekebilir. Gece panik atakları, uykudayken dahi beynin tehdit algılamaya devam etmesinden kaynaklanır.',
    },
    {
        question: 'Panik atak tekrarlar mı?',
        answer: 'Kişi bir kez atak yaşadığında genellikle "ya tekrar olursa" beklenti kaygısı geliştirir. Bu korkunun kendisi de maalesef yeni atakların tetikleyicisi olabilmektedir.',
    },
    {
        question: 'Panik atak kendi kendine geçer mi?',
        answer: 'Tek bir atak kendi kendine sonlanabilir. Ancak ataklar sıklaştıysa ve kişinin sürekli kaçınma davranışları (kalabalıktan, asansörden vb.) geliştirmesine neden olduysa profesyonel psikiyatrik değerlendirme düşünülmelidir.',
    },
    {
        question: 'Eryaman’da panik atak için hangi doktora gidilir?',
        answer: 'Organik (fiziksel) rahatsızlıklar ekarte edildikten sonra (kardiyoloji vb temiz çıktıktan sonra), sürecin psikiyatrik analizi ve yapılandırılması için Eryaman’da Uzm. Dr. Abdullah Maraş kliniğimize başvurulur.',
    },
    {
        question: 'Panik atak yaşayan biri ne yapmalı?',
        answer: 'Kriz anında derin ve yavaş nefes alıp vermeye (diyafram nefesi) çalışmak, güvenli bir ortama geçip dikkatini 5 duyuya (çevredeki renk, ses) yöneltmek (grounding tekniği) fayda sağlayabilir.',
    },
];

export default function PanikAtakPillarPage() {
    return (
        <>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroBg}>
                    <div className={styles.heroOrb}></div>
                </div>
                <div className={`container ${styles.heroContent}`}>
                    <Link href="/hizmetler" className={styles.backLink}>← Tüm Değerlendirme Alanları</Link>
                    <span className={styles.heroIcon}>⚡</span>
                    <h1>Ankara Eryaman&apos;da Panik Atak Değerlendirmesi</h1>
                    <p className={styles.heroDesc}>
                        Ortada hiçbir neden yokken gelen anlık ve kuvvetli endişe patlamaları, göğüste
                        yoğun bir sıkışma, terleme, boğulma veya "kalbim bir anda fırlayacak gibi oluyor" hissi...
                    </p>
                    <p className={styles.heroDesc}>
                        Panik ataklar, yarattığı belirsizlik ve ölüm hissiyle hayatınızı kısıtlamamalı. Uzm. Dr.
                        Abdullah Maraş kliniğinde bu şiddetli bedensel ve düşünsel krizlerin psikiyatrik analizini,
                        Eryaman sınırlarında güvenle deneyimleyebilirsiniz.
                    </p>

                    <div className="info-banner" style={{ marginTop: 'var(--space-6)' }}>
                        <strong>📌 Bilgilendirme</strong>
                        Bu metin, tıbbi genel kültür ve bilgilendirme taşımaktadır. Tanı koyma veya kesin bir tedavi
                        vadetme (garanti etme) amacı gütmez. Herhangi bir şiddetli göğüs ağrısı / sol kol uyuşmasında
                        öncelik tıbbi fizyolojik durum olarak yorumlanıp Acil Servis olmalıdır.
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="section">
                <div className={`container ${styles.contentGrid}`}>

                    {/* Left: Article */}
                    <article className={styles.article}>

                        <h2 id="nedir">Panik Atak Nedir?</h2>
                        <p>
                            Panik atak, bireyin aniden (hiçbir görünür ve spesifik uyaran olmadan) yakalandığı, son derece şiddetli
                            korku ve endişe hissini saniyeler / dakikalar içinde tırmanarak doruğa taşıdığı epizodlardır.
                            Sanki hayati bir tehdit ile karşı karşıya imişçesine (Savaş, Kaç tepkisi), vücutta bir dizi fiziksel
                            ve zihinsel belirti patlak verir. Oysaki objektif olarak bakıldığında ortada herhangi bir aslan, herhangi
                            bir deprem vb. büyük bir tehdit unsuru yoktur.
                        </p>
                        <p>
                            Toplumun çok önemli bir kesimi hayatında en az bir defa panik atak yaşar ve bu olağandır.
                            Fakat bu atakların çok sık tekrar etmesi ve <strong>beklenti endişesi</strong> ile kişinin
                            dış dünyadan soyutlanmasına neden olması, Panik Bozukluğu tablosuna yol açar.
                        </p>

                        <h2 id="belirtiler">Panik Atak Belirtileri Nelerdir?</h2>
                        <p>
                            Ataklar tamamen bir anda gelir ve aşağıdaki belirgin semptomların genellikle birkaçını aynı
                            anda güçlü biçimde hissettirir:
                        </p>
                        <ul>
                            <li><strong>Bedensel Belirtiler:</strong> Çarpıntı, göğüs kafesinde şiddetli baskı ağrısı, nefes
                                alamıyorum (hava açlığı) hissi, soğuk terleme, kontrolsüz titreme veya üşüme, elde ayakta uyuşma.</li>
                            <li><strong>Zihinsel Belirtiler:</strong> "Acaba Ölecekmişim gibi hissediyorum",
                                "Aklımı yitiriyorum", "Kontrolümü dışarıya rezil olacak biçimde kaybedebilirim" düşünceleri.</li>
                            <li><strong>Çevresel Algı:</strong> Gözlerin kararması, sanki kişinin etrafa uzaktan, dışarıdan hayal
                                gibi (derealizasyon) veya kendi bedenine yabancılaşıyor (depersonalizasyon) gibi bakması.</li>
                        </ul>

                        <h2 id="vucutta-neler-olur">Panik Atak Sırasında Vücutta Neler Olur?</h2>
                        <p>
                            Vücudun ilkel alarm sistemi (Amigdala), bir yanlış kodlamaya girerek
                            kana bol miktarda <strong>Adrenalin</strong> (epinefrin) salgılar. Kalp kanı hızla pompalar ki kaslara
                            (kaçabilmek için) oksijen gitsin; göz bebekleri büyür; ciğerler ise daha fazla oksijen doldurabilmek için
                            hızlı soluklanmaya geçer. Kendi nefesimizi kontrol edemez bir "hiperventilasyon" (hızlı solup verme)
                            aşamasına gireriz ki bu durum paradoksal biçimde "boğuluyorum" hissini yaratır.
                        </p>

                        <h2 id="kac-dakika-surer">Panik Atak Kaç Dakika Sürer?</h2>
                        <p>Panik atak genellikle aniden başlar ve belirtiler 10 ila 30 dakika içerisinde zirve noktasına ulaşarak yavaşça sönümlenir. Şiddetli atakların süresi ve sıklığı kişiden kişiye değişebilir, ancak bedende bıraktığı yorgunluk ve tedirginlik hissi daha uzun saatlere yayılabilir.</p>
                        <h3>Panik atak saatlerce sürer mi?</h3>
                        <p>Atağın en şiddetli pik safhası saatlerce sürmez, genellikle yarım saatte sonlanır ancak adrenalin deşarjının bedensel yorgunluk hissi gün boyu devam edebilmektedir.</p>
                        <h3>1 günde kaç kez panik atak geçirilir?</h3>
                        <p>Atak sıklığı tamamen bireysel stres faktörlerine bağlıdır; klinik gözlemlerde arka arkaya tetiklenen günlerin yanı sıra aylarca atak yaşanmayan aralıklar da görülmektedir.</p>
                        <p>
                            Hastaların kliniğe anlattığı en yaygın ifade <strong>"Dakikalar geçmek bilmiyor, bu kriz hiç bitmeyecek
                                gibi geliyor"</strong> yönündedir. Ancak aslında bedenin tüm sarmallarını seferber ettiği amigdala ve
                            adrenalin patlaması sonsuza dek sürecek bir depo sunamaz. Saniyeler ile tırmanır ve genellikle
                            <strong>10 ila 30 dakika arasında zirve yaparak sönümlenir</strong>.
                        </p>

                        <h2 id="gece-panik">Gece Panik Atak Neden Olur?</h2>
                        <p>
                            Pek çok hasta, rahatlaması veya gün yorgunluğunu atması beklenen gece saatlerinde "Gece uykudan
                            çarpıntıyla uyanıyorum" şikayetiyle başvurur. Aslında beyin uyuduğumuzda dahi belli bir güvenlik
                            algısını açık tutar. Gece atılan ataklar, genellikle derin veya REM uykusu fazlarındaki kan
                            gazı (oksijen/karbondioksit) algılama hassasiyetidir. Kişi rüyalarında korkup değil, direkt bir
                            adrenalin deşarjıyla büyük bir terlemeyle yatağından bağırarak uyanabilir.
                        </p>

                        <h2 id="kalp-krizi-mi">Panik Atak İle Kalp Krizi Farkı Nedir?</h2>
                        <p>
                            Panik atak o anlık korkunç yüzüyle, bedensel ölüm endişesini "Kalbim sıkışıyor" olarak direkt kalbe yorar.
                            Diyalektik olarak şöyledir:
                        </p>
                        <ul>
                            <li><strong>Kalp krizinde</strong> nefes alma şeklinize ve hareket edip göğüs kasınızı duruşunuzla
                                değiştirmenize bağlı olarak ağrı <em>değişmez</em>. Efor (yürüme vb) ile bu ağır baskı şiddetlenir.</li>
                            <li><strong>Panik ataktaysa</strong> şiddetli ağrı göğsün belirli bölgelerinde daha sızlama veya batma
                                tarzında olabilir; panik deşarjı bittikten sonra (20-30 dk) tamamen normale döner.</li>
                        </ul>
                        <p>
                            Yine de altı çizilmesi gereken kritik kural: İlk defa böyle bir göğüs ağrısı yaşayan hasta,
                            panik de olsa mutlaka fiziksel (EKG/kardiyoloji) ekarte süreci için acil branşlara görülmelidir.
                        </p>

                        <h2 id="oldurur-mu">Panik Atak Öldürür mü?</h2>
                        <p>Hayır, panik atak kalbe veya iç organlara doğrudan zarar veren ölümcül bir akut durum oluşturmaz. O esnada hissedilen yoğun göğüs ağrısı ve nefes darlığı, beynin yanlış alarm vererek salgıladığı yoğun adrenalinin geçici bir bedensel yansımasıdır.</p>
                        <h3>Panik ataktan deliren var mı?</h3>
                        <p>Hayır, panik atak esnasında "aklımı kaybediyorum" hissi çok yaygın ve korkutucu olsa da, bu durum bilinç kaybı veya akıl sağlığının yitirilmesiyle sonuçlanmaz.</p>
                        <h3>Panik atak kalp krizi yapar mı?</h3>
                        <p>Panik atağın kendisi doğrudan kalp krizi tablosuna yol açmaz, ancak ilk kez böyle bir atak yaşanıyorsa kardiyolojik incelemeyle fizyolojik şüphelerin ekarte edilmesi şarttır.</p>
                        <p>
                            Hayır. Yarattığı yüksek hislerin aksine, kalp ya da solunum sisteminin anlık yüksek dozda ve yanlış
                            zamanlı tepkimesidir; kalp-damar dokusuna veya kana bir fiziksel deforme / tıkanıklık ulaştırmaz. Ne
                            kadar dehşet verici hissettirirse hissettirsin panik atağın kendisi öldürücü (fatal) değildir. Ama
                            mutlak manada hayat kalitesini öldürür ve işlevsellikten büyük zararlar doğurur.
                        </p>

                        <h2 id="anksiyete-iliskisi">Panik Atak ve Anksiyete İlişkisi</h2>
                        <p>
                            Panik atakları sıklayan hastaların zamanla o güvende hissetmeme zeminlerinde, her ana sinirlilik ve
                            huzursuzluk sarmalı olan yaygın <Link href="/hizmetler/anksiyete">kaygı bozukluğu / anksiyetesini</Link>
                            birlikte yaşadığı barizdir. Anksiyete (geniş zamana yayılan kaygı süreci) ile beraber gelen ani panikler,
                            sürekli kaygı ve ani atakların birlikteliği (komorbidite) adına
                            profesyonel olarak analiz edilmesi gereken çoklu süreçleri kapsamaktadır. Ayrıca atak beklemekten uyunamayan
                            tüm geceler ciddi bir <Link href="/hizmetler/uyku-bozukluklari">uyku bozukluğuna</Link> veya
                            <Link href="/hizmetler/depresyon">klinik düzeyde depresyona (tükenmişliğe)</Link> sebep olabilir.
                        </p>

                        <h2 id="yorgunluk">Panik Atak Sonrası Yaşanan Yorgunluk</h2>
                        <p>
                            10-20 dakikalık fırtına dinip de vücut normale döndüğünde, sanki kişi dağ tırmanmış veya dev bir kaplanla
                            boğuşup kurtulmuş gibi devasa bir <strong>sersemlik ve kas ezikliği / enerji tükenişi</strong> yaşar. Bu,
                            aşırı salgılanan stres hormonlarının karaciğer veya bedende bıraktığı yoğun yıkım eforundan ileri
                            gelmektedir. Titreme hissi ve kafasını toplayamama durumları saatlerce bazen ertesi güne kadar sürebilir.
                        </p>

                        <h2 id="ne-zaman-basvuru">Ne Zaman Psikiyatri Uzmanına Başvurulmalı?</h2>
                        <p>
                            Vücudunuz, organlarınız fiziksel bir muayeneden tertemiz geçtiyse ve siz hala:
                        </p>
                        <ul>
                            <li>Benzer atakları yeniden yaşamaktan (beklenti evhamı) ötürü uçağa/toplu taşımaya, kapalı odalara
                                ve asansörlere giremiyorsanız (Agorafobi),</li>
                            <li>"Acil bir şey olursa yanımda hastane olsun" diye evden tek başınıza sosyal hayata karışamıyorsanız,</li>
                            <li>Bireysel veya ailenizdeki yaşam enerjiniz korku yüzünden sıfırlanmış ise;
                                mutlaka <strong>bir psikiyatrist hekim</strong> ile görüşmeler (konsültasyon) yapmalısınız.</li>
                        </ul>

                        <h2 id="degerlendirme">Ankara Eryaman'da Panik Atak İçin Değerlendirme Süreci</h2>
                        <p>
                            Eryaman (Altay Mh.), Etimesgut ve Batıkent bölgelerinden kliniğimize panik hisleriyle gelen hastalar;
                            durumun fizyolojik mi yoksa bir amigdala (kaygı merkezli psikiyatrik) sorunu mu olduğunun ayırıcı tanısıyla
                            karşılaşırlar. Uzm. Dr. Abdullah Maraş, panik atakların klinik anatomisini saptayarak, danışanın ihtiyaç duyduğu
                            özel farmakolojik ya da terapik yönlendirmeleri etik normlarda tasarlayacaktır. Hastanın bu bedensel infaz
                            hislerine maruz kalmak zorunda olmadığı bilimsel muayene süreci, Eryaman'da sunulmaktadır.
                        </p>

                        {/* SSS */}
                        <div className={styles.faqSection} id="sss">
                            <h2>Sık Sorulan Sorular</h2>
                            <FAQSection items={faqItems} />
                        </div>

                        {/* CTA */}
                        <div className={styles.articleCta}>
                            <h3>Korku ve Panik İçinde Olmak Zorunda Değilsiniz</h3>
                            <p>
                                Ankara Eryaman panik atak değerlendirme süreci kapsamında kapsamlı değerlendirme için; randevu
                                tercihlerine tıklayarak psikiyatrik ve klinik izlem görüşmesi oluşturabilirsiniz.
                            </p>
                            <Link href="/randevu" className="btn btn--primary btn--lg" style={{ marginTop: 'var(--space-4)' }}>
                                Doktor Değerlendirmesi Randevusu →
                            </Link>
                        </div>
                    </article>

                    {/* Right: Sidebar */}
                    <aside className={styles.sidebar}>
                        {/* TOC */}
                        <nav className={styles.sidebarCard}>
                            <h4>Bu Sayfada</h4>
                            <ul className={styles.tocList}>
                                <li><a href="#nedir">Panik Atak Nedir?</a></li>
                                <li><a href="#belirtiler">Belirtileri</a></li>
                                <li><a href="#vucutta-neler-olur">Vücutta Neler Olur?</a></li>
                                <li><a href="#kac-dakika-surer">Kaç Dakika Sürer?</a></li>
                                <li><a href="#gece-panik">Gece Panik Neden Olur?</a></li>
                                <li><a href="#kalp-krizi-mi">Kalp Krizi Farkı</a></li>
                                <li><a href="#oldurur-mu">Öldürür mü?</a></li>
                                <li><a href="#anksiyete-iliskisi">Anksiyete İlişkisi</a></li>
                                <li><a href="#yorgunluk">Sonrası Yorgunluk</a></li>
                                <li><a href="#ne-zaman-basvuru">Uzm. Başvurusu</a></li>
                                <li><a href="#degerlendirme">Eryaman Değerlendirme</a></li>
                            </ul>
                        </nav>

                        <div className={styles.sidebarCta}>
                            <h3>Değerlendirme Randevusu</h3>
                            <p>Panik ataklarınız için Ankara Eryaman'da klinik değerlendirmesi yapın.</p>
                            <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Randevu Al</Link>
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
                            <h4>İlgili Hizmetler & Kümeler</h4>
                            <ul className={styles.sidebarLinks}>
                                <li><Link href="/hizmetler/anksiyete">Anksiyete Hizmeti</Link></li>
                                <li><Link href="/hizmetler/depresyon">Depresyon Psikiyatrisi</Link></li>
                                <li><Link href="/hizmetler/uyku-bozukluklari">Gece ve Uyku Zorluğu</Link></li>
                                <li><Link href="/blog/panik-atak">Panik Atak Blog (Tümü)</Link></li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </section>

            {/* Structured Data: MedicalWebPage, MedicalCondition, Physician, FAQPage, BreadcrumbList */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "MedicalWebPage",
                            "name": "Panik Atak Değerlendirmesi",
                            "url": "https://www.drabdullahmaras.com.tr/hizmetler/panik-atak",
                            "about": {
                                "@type": "MedicalCondition",
                                "name": "Panic Disorder",
                                "alternateName": "Panik Bozukluğu"
                            },
                            "author": { "@id": "https://www.drabdullahmaras.com.tr/#physician" },
"isPartOf": { "@id": "https://www.drabdullahmaras.com.tr/#website" }
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
                                { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://www.drabdullahmaras.com.tr/" },
                                { "@type": "ListItem", "position": 2, "name": "Hizmetler", "item": "https://www.drabdullahmaras.com.tr/hizmetler" },
                                { "@type": "ListItem", "position": 3, "name": "Panik Atak", "item": "https://www.drabdullahmaras.com.tr/hizmetler/panik-atak" }
                            ]
                        }
                    ]
                })
            }} />
        </>
    );
}
