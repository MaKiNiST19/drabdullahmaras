import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Depresyon Değerlendirmesi Eryaman | Psikiyatrist Ankara - Uzm. Dr. Abdullah Maraş',
    description:
        'Ankara Eryaman\'da depresyon hakkında kapsamlı psikiyatrik değerlendirme. Depresyon belirtileri, türleri, günlük yaşama etkileri ve bireysel değerlendirme süreci. Uzm. Dr. Abdullah Maraş.',
    alternates: { canonical: 'https://drabdullahmaras.com/hizmetler/depresyon' },
    openGraph: {
        title: 'Eryaman\'da Depresyon Değerlendirmesi | Uzm. Dr. Abdullah Maraş',
        description: 'Ankara Eryaman\'da bilimsel çerçevede depresyon değerlendirmesi. Ruh sağlığı uzmanı ile bireysel klinik görüşme.',
        type: 'article',
        locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Depresyon belirtileri ne kadar süre devam ederse profesyonel değerlendirme alınmalıdır?',
        answer: 'Karamsarlık, ilgi kaybı ve enerji düşüklüğü gibi belirtiler en az iki hafta boyunca çoğu gün devam ediyorsa ve günlük yaşam işlevselliğinizi olumsuz etkiliyorsa, bir psikiyatri uzmanından değerlendirme almanız önerilmektedir.',
    },
    {
        question: 'Depresyon ile normal üzüntü arasındaki fark nedir?',
        answer: 'Normal üzüntü genellikle belirli bir olay veya kayıpla ilişkilidir ve zamanla azalır. Depresyonda ise belirtiler orantısız şekilde yoğundur, uzun süre devam eder, günlük işlevselliği belirgin biçimde etkiler ve belirli bir tetikleyici olmaksızın da sürebilir.',
    },
    {
        question: 'Eryaman\'da depresyon değerlendirmesi nerede yapılır?',
        answer: 'Ankara Eryaman, Altay Mahallesi çevresinde Uzm. Dr. Abdullah Maraş\'ın kliniğinde depresyon değerlendirmesi yapılmaktadır. Etimesgut ve Batıkent bölgelerinden kolay ulaşım sağlanabilir. Randevu sistemiyle çalışılmaktadır.',
    },
    {
        question: 'Psikiyatrik değerlendirme süreci nasıl işler?',
        answer: 'İlk görüşmede 40-60 dakikalık kapsamlı bir klinik görüşme yapılır. Belirtileriniz, geçmiş sağlık öykünüz, aile geçmişiniz ve psikososyal faktörler değerlendirilir. Bireysel bir planlama yapılarak takip süreci belirlenir.',
    },
    {
        question: 'Depresyon bedensel belirtilere neden olur mu?',
        answer: 'Evet, depresyon uyku düzensizlikleri, kronik yorgunluk, iştah değişiklikleri, baş ağrısı, kas ağrıları ve sindirim sorunları gibi çeşitli bedensel belirtilere yol açabilir. Bu nedenle kapsamlı bir değerlendirme büyük önem taşır.',
    },
    {
        question: 'Depresyon ve anksiyete birlikte görülebilir mi?',
        answer: 'Evet, depresyon ve anksiyete sıklıkla bir arada görülebilen ruh sağlığı durumlarıdır. Her iki durumun birlikte değerlendirilmesi, bireysel planlamanın doğru şekillenmesi açısından önemlidir.',
    },
    {
        question: 'İlk görüşmede ne konuşulur?',
        answer: 'İlk görüşmede mevcut yakınmalarınız, belirtilerin ne zaman başladığı, süresi ve şiddeti, geçmiş sağlık öykünüz, aile geçmişiniz ve günlük yaşamınızı etkileyen durumlar hakkında detaylı bir görüşme yapılır. Bu bilgiler bireysel değerlendirmenin temelini oluşturur.',
    },
    {
        question: 'Depresyon değerlendirmesi için randevu nasıl alınır?',
        answer: 'Web sitemizdeki randevu formu üzerinden veya doğrudan iletişim bilgilerimizi kullanarak randevu talebi oluşturabilirsiniz. Talebiniz değerlendirildikten sonra sizinle iletişime geçilecektir.',
    },
];

export default function DepresyonPillarPage() {
    return (
        <>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroBg}><div className={styles.heroOrb}></div></div>
                <div className={`container ${styles.heroContent}`}>
                    <Link href="/hizmetler" className={styles.backLink}>← Tüm Değerlendirme Alanları</Link>
                    <span className={styles.heroIcon}>ğŸŒ§ï¸</span>
                    <h1>Eryaman&apos;da Depresyon Hakkında Psikiyatrik Değerlendirme</h1>
                    <p className={styles.heroDesc}>
                        Depresyon, bireyin yaşam kalitesini, ilişkilerini ve günlük işlevselliğini derinden
                        etkileyebilen yaygın bir ruh sağlığı durumudur. Ankara Eryaman&apos;da Uzm. Dr. Abdullah
                        Maraş, depresyon belirtilerinin kapsamlı değerlendirmesini bilimsel ve etik çerçevede
                        gerçekleştirmektedir.
                    </p>
                    <p className={styles.heroDesc}>
                        Anadolu Üniversitesi Tıp Fakültesi mezunu olan Dr. Maraş, Ruh Sağlığı ve Hastalıkları
                        alanında uzmanlık belgesine sahiptir. Altay Mahallesi çevresindeki kliniğinde, her bireyin
                        özgün koşullarına odaklanan bireysel bir değerlendirme süreci sunmaktadır.
                    </p>
                    <div className="info-banner" style={{ marginTop: '1rem' }}>
                        <strong>📌 Bilgilendirme</strong>
                        Bu sayfa genel bilgilendirme amaçlıdır. Bireysel tanı ve tedavi süreçleri için
                        mutlaka uzman hekim değerlendirmesi gereklidir.
                    </div>
                    <div className="divider divider--center" style={{ marginTop: '1.5rem' }}></div>
                </div>
            </section>

            {/* Content */}
            <section className="section">
                <div className="container">
                    <div className={styles.contentGrid}>
                        <article className={styles.article}>

                            {/* H2 - 1 */}
                            <h2 id="depresyon-nedir">Depresyon Nedir?</h2>
                            <p>
                                Depresyon, tıbbi olarak &ldquo;majör depresif bozukluk&rdquo; olarak da bilinen,
                                süreğen bir şekilde çökkün duygudurum, ilgi ve istek kaybı ile karakterize olan
                                bir ruh sağlığı durumudur. Dünya Sağlık Örgütü (WHO) verilerine göre dünya genelinde
                                280 milyondan fazla insan depresyon belirtileri yaşamaktadır ve depresyon küresel
                                ölçekte en önde gelen hastalık yükü nedenlerinden biri olarak kabul edilmektedir.
                            </p>
                            <p>
                                Günlük yaşamda herkesin zaman zaman üzüntü, karamsarlık veya motivasyon düşüklüğü
                                hissetmesi doğaldır. Ancak bu belirtiler en az iki hafta boyunca süreklilik
                                gösterdiğinde, yoğunlaştığında ve kişinin işlevselliğini olumsuz etkilediğinde,
                                profesyonel bir psikiyatrik değerlendirme önem kazanmaktadır.
                            </p>
                            <p>
                                Depresyon, biyolojik, psikolojik ve sosyal faktörlerin karmaşık etkileşimi sonucunda
                                ortaya çıkabilir. Genetik yatkınlık, nörokimyasal değişimler, stresli yaşam olayları,
                                kayıp deneyimleri, kronik hastalıklar, hormonal değişimler ve çevresel faktörler
                                bu durumun oluşumunda rol oynayabilmektedir. Ankara Eryaman&apos;da Uzm. Dr. Abdullah
                                Maraş, bu çok boyutlu yapıyı dikkate alan kapsamlı bir değerlendirme yaklaşımı
                                benimsemektedir.
                            </p>

                            {/* H2 - 2 */}
                            <h2 id="depresyon-belirtileri">Depresyon Belirtileri Nelerdir?</h2>
                            <p>Depresyon belirtileri arasında en yaygın olanları sürekli üzüntü hali, enerji kaybı ve önceden keyif alınan aktivitelere ilginin azalmasıdır. Uyku düzeninde bozulma, iştah değişiklikleri, odaklanma zorluğu ve aşırı değersizlik hissi de sıklıkla görülür. Bu belirtilerin şiddeti ve seyri kişiden kişiye değişebilir olup kapsamlı bir psikiyatrik değerlendirme gerektirmektedir.</p>
                            <ul>
                                <li>Sürekli üzüntü ve boşluk hissi</li>
                                <li>Aktivitelere belirgin ilginin azalması</li>
                                <li>Uyku ve iştah bozukluğu</li>
                                <li>Sürekli yorgunluk ve enerji kaybı</li>
                                <li>Odaklanma güçlüğü ve unutkanlık</li>
                            </ul>
                            <h3>Depresyon fiziksel belirti verir mi?</h3>
                            <p>Evet, depresyon sıklıkla kronik yorgunluk, açıklanamayan baş ağrısı, kas gerginliği ve sindirim sistemi sorunları gibi bedensel belirtilerle kendisini gösterebilmektedir.</p>
                            <h3>Depresyon belirtisi ne zaman önemsenmelidir?</h3>
                            <p>Bu duygusal ve bedensel belirtiler en az iki hafta boyunca hemen her gün devam ediyorsa, uzman klinik değerlendirmesi düşünülmelidir.</p>
                            <p>
                                Depresyonun belirtileri bireyden bireye farklılık gösterebilmektedir. Belirtiler
                                duygusal, bedensel, bilişsel ve davranışsal olmak üzere farklı alanlarda kendini
                                gösterebilir. <Link href="/blog/depresyon-belirtileri">Depresyon belirtileri hakkında
                                    detaylı blog yazımızda</Link> bu konuyu ayrıntılı olarak ele almaktayız.
                            </p>

                            <h3>Duygusal Belirtiler</h3>
                            <ul>
                                <li>Süreğen karamsarlık, üzüntü ve boşluk hissi</li>
                                <li>Daha önce keyif alınan etkinliklere karşı ilgi ve istek kaybı</li>
                                <li>Değersizlik, yetersizlik veya aşırı suçluluk duyguları</li>
                                <li>Umutsuzluk ve çaresizlik hissi</li>
                                <li>Kolay sinirlenme, irritabilite ve huzursuzluk</li>
                            </ul>

                            <h3>Bedensel Belirtiler</h3>
                            <ul>
                                <li>Kronik yorgunluk ve enerji kaybı; basit görevler bile ağır gelebilir</li>
                                <li>Uyku düzeninde değişiklikler: uykusuzluk (insomnia) veya aşırı uyuma</li>
                                <li>İştah ve kilo değişimleri; belirgin iştah artışı veya azalması</li>
                                <li>Açıklanamayan baş ağrısı, sırt ağrısı, kas gerginliği</li>
                                <li>Sindirim sorunları ve mide-bağırsak şikÃ¢yetleri</li>
                                <li>Psikomotor yavaşlama veya huzursuz hareket etme</li>
                            </ul>
                            <p>
                                Uyku düzenindeki değişiklikler depresyonun en belirgin bedensel yansımalarından
                                biridir. Depresyon ve uyku bozuklukları arasındaki çift yönlü ilişki hakkında{' '}
                                <Link href="/hizmetler/uyku-bozukluklari">uyku bozuklukları</Link> sayfamızda
                                detaylı bilgi bulabilirsiniz.
                            </p>

                            <h3>Bilişsel Belirtiler</h3>
                            <ul>
                                <li>Dikkat dağınıklığı ve konsantrasyon güçlüğü</li>
                                <li>Unutkanlık ve zihinsel bulanıklık</li>
                                <li>Karar vermekte zorlanma; basit kararlar bile ağır hissedilebilir</li>
                                <li>Olumsuz düşünce kalıpları ve kendi kendini eleştirme</li>
                            </ul>

                            <h3>Davranışsal Belirtiler</h3>
                            <ul>
                                <li>Sosyal izolasyon; arkadaşlardan ve aileden uzaklaşma</li>
                                <li>Kişisel bakımda ve hijyende azalma</li>
                                <li>İş veya okul sorumluluklarını ihmal etme</li>
                                <li>Hobiler ve aktivitelerden tamamen çekilme</li>
                            </ul>

                            {/* H2 - 3 */}
                            <h2 id="depresyon-turleri">Depresyon Türleri</h2>
                            <p>
                                Depresyon tek bir durumdan ibaret değildir; farklı klinik görünümlere sahip
                                çeşitli alt türleri bulunmaktadır. Her tür, kendine özgü belirtiler ve seyir
                                özellikleri taşır. Bu nedenle doğru değerlendirme, bireysel planlama açısından
                                kritik önem taşımaktadır.
                            </p>
                            <ul>
                                <li><strong>Majör depresif bozukluk:</strong> En yaygın görülen biçimdir. Belirtiler en az iki hafta süreyle çoğu gün devam eder ve işlevselliği belirgin biçimde etkiler.</li>
                                <li><strong>Distimi (Kalıcı depresif bozukluk):</strong> Daha hafif şiddette ancak en az iki yıl süren kronik bir formudur. Birey &ldquo;hep böyle olduğunu&rdquo; düşünerek durumu normalleştirebilir.</li>
                                <li><strong>Mevsimsel duygudurum bozukluğu:</strong> Genellikle sonbahar ve kış aylarında belirtilerin belirginleştiği, gün ışığı azalmasıyla ilişkili bir türdür.</li>
                                <li><strong>Doğum sonrası (postpartum) duygudurum değişiklikleri:</strong> Doğum sonrasında hormonal değişimler ve yeni yaşam koşullarıyla ilişkili olarak ortaya çıkan duygusal zorluklar. Erken dönem değerlendirme önem taşır.</li>
                                <li><strong>Psikotik özellikli depresyon:</strong> Ağır depresif belirtilerin yanı sıra gerçeklik algısında değişikliklerin eşlik ettiği daha nadir bir formdur.</li>
                            </ul>
                            <p>
                                Depresyon türünün belirlenmesi, kapsamlı bir klinik görüşme ile mümkündür.
                                Eryaman&apos;da Uzm. Dr. Abdullah Maraş, bireysel değerlendirme süreci
                                kapsamında depresif durumun doğasını ve türünü detaylı olarak ele almaktadır.
                            </p>

                            {/* H2 - 4 */}
                            <h2 id="depresyon-ne-kadar-surer">Depresyon Ne Kadar Sürer?</h2>
                            <p>Depresyonun süresi bireyin genetik yapısına, çevresel stresin şiddetine ve profesyonel destek alıp almamasına bağlı olarak kişiden kişiye değişebilir. Bazı klinik durumlarda belirtiler aylar içinde hafiflerken, distimi gibi türlerde değerlendirme sağlanmadığında yıllarca kronikleşerek devam edebilmektedir.</p>
                            <h3>Depresyon bir günde geçer mi?</h3>
                            <p>Hayır, klinik seviyedeki majör depresyon kalıcı ve süreğen bir durumdur, bir veya iki günde kendiliğinden geçmesi genellikle beklenmez.</p>
                            <h3>Depresyon hiç bitmez mi?</h3>
                            <p>Uzman psikiyatri hekimi tarafından planlanan yapılandırılmış medikal ve terapötik izlem yaklaşımlarıyla, depresyon belirtileri büyük ölçüde yatıştırılabilir ve yaşam kalitesi korunabilir.</p>

                            <h2 id="gunluk-yasam-etkileri">Depresyonun Günlük Yaşam Üzerindeki Etkileri</h2>
                            <p>
                                Depresyon, bireyin yaşamının hemen her alanını etkileyebilen kapsamlı bir
                                durumdur. Günlük rutinlerin sürdürülmesi, basit görevlerin tamamlanması
                                bile depresyon dönemlerinde büyük bir çaba gerektirebilir.
                            </p>
                            <p>
                                Sabah yataktan kalkma, kişisel bakım, ev işleri ve günlük sorumluluklar
                                aşılması zor engeller gibi hissedilebilir. Enerji düzeyindeki düşüş,
                                motivasyon kaybı ve genel isteksizlik, bireyin yaşam kalitesini doğrudan
                                etkiler. Sosyal aktivitelere katılım azalır, bireyler giderek daha fazla
                                yalnızlığı tercih edebilir.
                            </p>
                            <p>
                                &ldquo;Kendimi sürekli mutsuz hissediyorum, hiçbir şey yapmak
                                istemiyorum&rdquo; ifadesi, klinik pratikte depresyon yaşayan bireylerin
                                en sık dile getirdiği yakınmalardan biridir. Bu tür yakınmalar ciddiye
                                alınmalı ve profesyonel değerlendirme düşünülmelidir.
                            </p>

                            {/* H2 - 5 */}
                            <h2 id="is-aile-etkileri">İş ve Aile Hayatına Etkileri</h2>
                            <p>
                                Depresyon, profesyonel yaşamda önemli zorluklara yol açabilmektedir. İş yerinde
                                konsantrasyon güçlüğü, performans düşüklüğü, devamsızlık ve meslektaşlarla
                                ilişkilerde bozulma sık karşılaşılan yansımalardır. Depresyonun iş hayatı
                                üzerindeki etkileri, bireyin kariyerini ve ekonomik durumunu da olumsuz
                                etkileyebilir.
                            </p>
                            <p>
                                Aile ilişkileri de depresyondan önemli ölçüde etkilenebilir. Eşler arası
                                iletişimde azalma, ebeveynlik işlevlerinde güçlük, çocuklarla ilişkilerde
                                uzaklaşma ve sosyal rollerin yerine getirilememesi gibi durumlar
                                gözlenebilmektedir. Bu zorluklar, bireyin suçluluk ve yetersizlik duygularını
                                artırarak kısır bir döngü oluşturabilir.
                            </p>
                            <p>
                                Erken dönemde profesyonel değerlendirme almak, bu alanlardaki olumsuz etkilerin
                                sınırlandırılmasına katkı sağlayabilir. Eryaman&apos;da psikiyatrist arayan kişiler,
                                Altay Mahallesi çevresindeki kliniğimize başvurabilirler.
                            </p>

                            {/* H2 - 6 */}
                            <h2 id="depresyon-anksiyete">Depresyon ile Anksiyete İlişkisi</h2>
                            <p>
                                Depresyon ve <Link href="/hizmetler/anksiyete">anksiyete (kaygı) bozuklukları</Link>,
                                klinik pratikte sıklıkla bir arada görülen ruh sağlığı durumlarıdır. Araştırmalar,
                                depresyon yaşayan bireylerin önemli bir kısmında eş zamanlı olarak anksiyete
                                belirtilerinin de bulunduğunu göstermektedir.
                            </p>
                            <p>
                                Her iki durum ortak belirtiler paylaşabilir: uyku bozuklukları, konsantrasyon
                                güçlüğü, irritabilite ve bedensel yakınmalar hem depresyonda hem de
                                anksiyetede görülebilmektedir. Ancak temel ayrım noktaları da vardır; depresyonda
                                ağırlıklı olarak çökkünlük, ilgi kaybı ve enerji azalması ön plandayken,
                                anksiyetede aşırı endişe, korku ve huzursuzluk belirgin olabilmektedir.
                            </p>
                            <p>
                                Her iki durumun birlikte değerlendirilmesi, bireysel planlamanın doğru
                                şekillenmesi açısından büyük önem taşımaktadır. Uzm. Dr. Abdullah Maraş,
                                Ankara Eryaman&apos;da bütüncül bir bakış açısıyla depresyon ve anksiyetenin
                                birlikte değerlendirmesini gerçekleştirmektedir.
                            </p>

                            {/* H2 - 7 */}
                            <h2 id="kimlerde-gorulur">Depresyon Kimlerde Görülebilir?</h2>
                            <p>
                                Depresyon yaş, cinsiyet veya sosyal statü ayrımı gözetmeksizin herkeste
                                görülebilen bir durumdur. Ancak bazı dönemler ve koşullar depresyon
                                belirtilerinin ortaya çıkma olasılığını artırabilir:
                            </p>
                            <ul>
                                <li><strong>Yaşam geçişleri:</strong> Emeklilik, iş değişikliği, boşanma, taşınma gibi büyük yaşam değişiklikleri</li>
                                <li><strong>Kayıp deneyimleri:</strong> Sevilen birinin kaybı, yas süreci</li>
                                <li><strong>Kronik hastalıklar:</strong> Uzun süreli sağlık sorunları ile başa çıkma</li>
                                <li><strong>Hormonal değişimler:</strong> Ergenlik, hamilelik, doğum sonrası dönem, menopoz</li>
                                <li><strong>Genetik yatkınlık:</strong> Ailede depresyon öyküsü bulunan bireylerde risk artabilir</li>
                                <li><strong>Psikososyal stresörler:</strong> Ekonomik güçlükler, iş stresi, ilişki sorunları</li>
                            </ul>
                            <p>
                                Etimesgut ve Batıkent bölgeleri dahil olmak üzere Ankara&apos;nın geniş bir
                                kesiminden gelen bireyler, Eryaman&apos;daki kliniğimizde depresyon değerlendirmesi
                                yaptırabilmektedir.
                            </p>

                            {/* H2 - 8 */}
                            <h2 id="ne-zaman-destek">Ne Zaman Uzman Desteği Düşünülmelidir?</h2>
                            <p>
                                Ruhsal zorluklar yaşamak insan deneyiminin doğal bir parçasıdır. Ancak bazı
                                durumlarda profesyonel bir psikiyatrik değerlendirme almanız önerilmektedir:
                            </p>
                            <ul>
                                <li>Belirtiler <strong>iki hafta veya daha uzun</strong> süre çoğu gün devam ediyorsa</li>
                                <li>İş, ev veya sosyal yaşamınızı <strong>sürdürmekte güçlük</strong> çekiyorsanız</li>
                                <li>Uyku düzeniniz veya iştahınızda <strong>belirgin değişiklikler</strong> yaşıyorsanız</li>
                                <li>Daha önce keyif aldığınız şeylere karşı <strong>tamamen ilgi kaybı</strong> hissediyorsanız</li>
                                <li>Kendinizi <strong>sürekli değersiz, umutsuz veya çaresiz</strong> hissediyorsanız</li>
                                <li>Yakınlarınız davranışlarınızda <strong>belirgin değişimler</strong> fark ediyorsa</li>
                                <li>Düşünceleriniz sizi <strong>endişelendiriyor</strong> ve kontrol edemiyorsanız</li>
                            </ul>
                            <p>
                                Erken dönemde alınan profesyonel destek, bireyin yaşam kalitesinin korunmasına
                                ve günlük işlevselliğinin sürdürülmesine önemli katkı sağlayabilir. Psikiyatri
                                uzmanına başvurmak, zayıflık değil; kendi sağlığını ciddiye almanın bir
                                göstergesidir.
                            </p>

                            {/* H2 - 9 */}
                            <h2 id="degerlendirme-sureci">Psikiyatrik Değerlendirme Süreci Nasıl İlerler?</h2>
                            <p>
                                Eryaman&apos;daki kliniğimizde depresyon değerlendirmesi, sistematik ve
                                bireysel bir süreç olarak yürütülmektedir:
                            </p>

                            <h3>1. İlk Görüşme ve Klinik Değerlendirme</h3>
                            <p>
                                İlk görüşme genellikle 40-60 dakika sürmektedir. Bu süreçte bireyin mevcut
                                yakınmaları, belirtilerin başlangıç zamanı, süresi ve şiddeti detaylı olarak
                                ele alınır. Güvenli, yargısız ve gizlilik ilkelerine bağlı bir ortamda
                                gerçekleştirilen görüşmede birey kendini rahatça ifade edebilir.
                            </p>

                            <h3>2. Öykü ve Arka Plan Değerlendirmesi</h3>
                            <p>
                                Geçmiş sağlık öyküsü, aile geçmişi, kullanılan ilaçlar, psikososyal stresörler
                                ve yaşam koşulları kapsamlı olarak sorgulanır. Depresyonun biyopsikososyal model
                                çerçevesinde değerlendirilmesi, bireysel planlamanın temelini oluşturur.
                            </p>

                            <h3>3. Bireysel Planlama</h3>
                            <p>
                                Klinik değerlendirme sonucunda bireyin ihtiyaçlarına uygun bir yaklaşım planı
                                oluşturulur. Bu plan; farmakolojik yaklaşımlar, psikoterapi yöntemleri veya
                                her ikisinin birlikte uygulanmasını içerebilir. Plan, bireyin tercihleri ve
                                yaşam koşulları göz önünde bulundurularak şekillendirilir.
                            </p>

                            <h3>4. İzlem ve Takip</h3>
                            <p>
                                Değerlendirme sonrası düzenli takip görüşmeleri planlanır. Bireyin süreç
                                içindeki durumu izlenir ve gerektiğinde yaklaşım planında düzenlemeler yapılır.
                                Her takip görüşmesinde bireyin geri bildirimleri dikkate alınır.
                            </p>

                            {/* H2 - 10 */}
                            <h2 id="eryaman-basvuru">Eryaman&apos;da Depresyon İçin Başvuru Süreci</h2>
                            <p>
                                Uzm. Dr. Abdullah Maraş, Ankara Eryaman&apos;da Altay Mahallesi çevresinde
                                bulunan kliniğinde bilimsel ve etik çerçevede depresyon değerlendirmesi
                                sunmaktadır. Anadolu Üniversitesi Tıp Fakültesi mezunu olan Dr. Maraş,
                                Ruh Sağlığı ve Hastalıkları alanında uzmanlık belgesine sahiptir.
                            </p>
                            <p>
                                Kliniğimiz randevu sistemiyle çalışmaktadır. Randevu almak için:
                            </p>
                            <ul>
                                <li>Web sitemizdeki <Link href="/randevu">online randevu formunu</Link> doldurabilirsiniz.</li>
                                <li><Link href="/iletisim">İletişim sayfamızdaki</Link> bilgileri kullanarak doğrudan ulaşabilirsiniz.</li>
                            </ul>
                            <p>
                                Kliniğimize Eryaman metro istasyonlarından, Etimesgut ve Batıkent güzergÃ¢hındaki
                                toplu taşıma araçlarıyla kolaylıkla ulaşılabilmektedir.
                            </p>
                            <p>
                                Randevu sistemi sayesinde her bireye yeterli süre ve özen ayrılmaktadır.
                                Görüşmelerde acele edilmeden, detaylı bir değerlendirme gerçekleştirilmesi
                                hedeflenmektedir.
                            </p>

                            {/* Disclaimer */}
                            <div className="info-banner" style={{ marginTop: '2rem' }}>
                                <strong>📌 Önemli Bilgilendirme</strong>
                                Bu sayfadaki içerikler genel bilgilendirme amaçlıdır ve tıbbi tanı ya da
                                tedavi önerisi niteliği taşımamaktadır. Depresyon belirtileri yaşıyorsanız,
                                bireysel tanı ve tedavi süreçleri için mutlaka bir psikiyatri uzmanına
                                başvurunuz. Bu site Sağlık Bakanlığı düzenlemelerine uygun olarak
                                hazırlanmıştır.
                            </div>

                            {/* H2 - 11 (FAQ) */}
                            <div className={styles.faqSection}>
                                <h2 id="sss">Depresyon Hakkında Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            {/* Related */}
                            <div className={styles.relatedBox}>
                                <h3>İlgili Sayfalar ve Okumalar</h3>
                                <div className={styles.relatedGrid}>
                                    <Link href="/blog/depresyon-belirtileri" className={styles.relatedItem}>
                                        <span>ğŸ“</span>
                                        <div>
                                            <strong>Depresyon Belirtileri Nelerdir?</strong>
                                            <span>Blog yazısı</span>
                                        </div>
                                    </Link>
                                    <Link href="/hizmetler/anksiyete" className={styles.relatedItem}>
                                        <span>🌀</span>
                                        <div>
                                            <strong>Anksiyete Bozuklukları</strong>
                                            <span>Değerlendirme alanı</span>
                                        </div>
                                    </Link>
                                    <Link href="/hizmetler/uyku-bozukluklari" className={styles.relatedItem}>
                                        <span>🌙</span>
                                        <div>
                                            <strong>Uyku Bozuklukları</strong>
                                            <span>Değerlendirme alanı</span>
                                        </div>
                                    </Link>
                                    <Link href="/hizmetler/bipolar-bozukluk" className={styles.relatedItem}>
                                        <span>🔄</span>
                                        <div>
                                            <strong>Bipolar Bozukluk</strong>
                                            <span>Değerlendirme alanı</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className={styles.articleCta}>
                                <h3>Profesyonel Depresyon Değerlendirmesi İçin</h3>
                                <p>
                                    Ankara Eryaman&apos;da bilimsel çerçevede depresyon değerlendirmesi için
                                    randevu alabilirsiniz. Altay Mahallesi çevresindeki kliniğimize Etimesgut
                                    ve Batıkent bölgelerinden kolay ulaşım sağlanabilir.
                                </p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">
                                    Randevu Al →
                                </Link>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className={styles.sidebar}>
                            <nav className={styles.sidebarCard}>
                                <h4>Bu Sayfada</h4>
                                <ul className={styles.tocList}>
                                    <li><a href="#depresyon-nedir">Depresyon Nedir?</a></li>
                                    <li><a href="#depresyon-belirtileri">Belirtiler</a></li>
                                    <li><a href="#depresyon-turleri">Türleri</a></li>
                                    <li><a href="#gunluk-yasam-etkileri">Günlük Yaşam Etkileri</a></li>
                                    <li><a href="#is-aile-etkileri">İş ve Aile Etkileri</a></li>
                                    <li><a href="#depresyon-anksiyete">Anksiyete İlişkisi</a></li>
                                    <li><a href="#kimlerde-gorulur">Kimlerde Görülür?</a></li>
                                    <li><a href="#ne-zaman-destek">Ne Zaman Destek?</a></li>
                                    <li><a href="#degerlendirme-sureci">Değerlendirme Süreci</a></li>
                                    <li><a href="#eryaman-basvuru">Başvuru Süreci</a></li>
                                    <li><a href="#sss">SSS</a></li>
                                </ul>
                            </nav>
                            <div className={styles.sidebarCta}>
                                <h3>Değerlendirme Randevusu</h3>
                                <p>Depresyon değerlendirmesi için profesyonel psikiyatrik görüşme</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Randevu Al</Link>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>Uzman Hekim</h4>
                                <div className={styles.doctorCard}>
                                    <div className={styles.doctorIcon}>
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                    </div>
                                    <strong>Uzm. Dr. Abdullah Maraş</strong>
                                    <span>Psikiyatri Uzmanı</span>
                                    <span>Eryaman, Ankara</span>
                                </div>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>Diğer Alanlar</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/hizmetler/anksiyete">Anksiyete</Link></li>
                                    <li><Link href="/hizmetler/panik-atak">Panik Atak</Link></li>
                                    <li><Link href="/hizmetler/okb">OKB</Link></li>
                                    <li><Link href="/hizmetler/dikkat-eksikligi">DEHB</Link></li>
                                    <li><Link href="/hizmetler/bipolar-bozukluk">Bipolar Bozukluk</Link></li>
                                    <li><Link href="/hizmetler/uyku-bozukluklari">Uyku Bozuklukları</Link></li>
                                    <li><Link href="/hizmetler/yetiskin-psikiyatrisi">Yetişkin Psikiyatrisi</Link></li>
                                    <li><Link href="/hizmetler/16-yas-uzeri-ergen-psikiyatrisi">16 Yaş Üzeri Ergen Psikiyatri</Link></li>
                                    <li><Link href="/hizmetler/cinsel-bozukluklar">Cinsel Bozukluklar</Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* Schemas */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org", "@type": "MedicalWebPage",
                    name: "Eryaman'da Depresyon Hakkında Psikiyatrik Değerlendirme",
                    description: metadata.description,
                    url: "https://drabdullahmaras.com/hizmetler/depresyon",
                    specialty: { "@type": "MedicalSpecialty", name: "Psychiatric" },
                    about: { "@type": "MedicalCondition", name: "Depresyon", alternateName: "Majör Depresif Bozukluk" },
                    author: { "@id": "https://drabdullahmaras.com/#physician" },
                    publisher: { "@id": "https://drabdullahmaras.com/#organization" },
                    isPartOf: { "@id": "https://drabdullahmaras.com/#website" },
                    inLanguage: "tr-TR",
                    lastReviewed: "2026-02-27", mainEntityOfPage: "https://drabdullahmaras.com/hizmetler/depresyon"
                })
            }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org", "@type": "FAQPage",
                    "@id": "https://drabdullahmaras.com/hizmetler/depresyon/#faq",
                    mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } }))
                })
            }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org", "@type": "BreadcrumbList",
                    itemListElement: [
                        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://drabdullahmaras.com" },
                        { "@type": "ListItem", position: 2, name: "Hizmetler", item: "https://drabdullahmaras.com/hizmetler" },
                        { "@type": "ListItem", position: 3, name: "Depresyon" }
                    ]
                })
            }} />
        </>
    );
}
