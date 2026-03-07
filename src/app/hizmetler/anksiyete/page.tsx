import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon/page.module.css';

export const metadata: Metadata = {
    title: 'Anksiyete (KaygÄ± BozukluÄŸu) DeÄŸerlendirmesi | Ankara Eryaman Psikiyatri',
    description: 'Ankara Eryaman\'da anksiyete (kaygÄ± bozukluÄŸu) deÄŸerlendirmesi. AÅŸÄ±rÄ± kaygÄ±, Ã§arpÄ±ntÄ±, huzursuzluk belirtilerine yÃ¶nelik uzman psikiyatri desteÄŸi.',
    alternates: { canonical: 'https://drabdullahmaras.com/hizmetler/anksiyete' },
    openGraph: {
        title: 'Ankara Eryaman\'da Anksiyete (KaygÄ± BozukluÄŸu) DeÄŸerlendirmesi',
        description: 'Ankara Eryaman\'da anksiyete bozukluÄŸu deÄŸerlendirmesi. Klinik gÃ¶rÃ¼ÅŸme ve bireysel planlama sÃ¼reci.',
        type: 'website',
        locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Anksiyete (kaygÄ± bozukluÄŸu) tam olarak nedir?',
        answer: 'Anksiyete, yaklaÅŸan bir olay veya belirsizliÄŸe karÅŸÄ± gÃ¶sterilen doÄŸal bir tepkidir. Ancak bu kaygÄ± orantÄ±sÄ±z ÅŸekilde yoÄŸunsa, uzun sÃ¼re devam ediyorsa ve gÃ¼nlÃ¼k yaÅŸamÄ± olumsuz etkiliyorsa anksiyete bozukluÄŸundan sÃ¶z edilebilir.',
    },
    {
        question: 'Anksiyete bedensel belirtilere yol aÃ§ar mÄ±?',
        answer: 'Evet. Ã‡arpÄ±ntÄ±, terleme, kas gerginliÄŸi, hÄ±zlÄ± nefes alÄ±p verme, mide ve baÄŸÄ±rsak sorunlarÄ± gibi bedensel belirtiler anksiyete bozukluklarÄ±nda sÄ±kÃ§a gÃ¶rÃ¼lmektedir.',
    },
    {
        question: 'Ne zaman bir psikiyatri uzmanÄ±na baÅŸvurmalÄ±yÄ±m?',
        answer: 'KaygÄ±nÄ±z gÃ¼nlÃ¼k iÅŸlevselliÄŸinizi, iÅŸ performansÄ±nÄ±zÄ± veya iliÅŸkilerinizi bozuyorsa, uyku kalitenizi etkiliyorsa ve kendi baÅŸÄ±nÄ±za yÃ¶netmekte zorlanÄ±yorsanÄ±z uzman deÄŸerlendirmesi almanÄ±z Ã¶nerilir.',
    },
    {
        question: 'Anksiyete ile panik atak aynÄ± ÅŸey midir?',
        answer: 'HayÄ±r, aynÄ± deÄŸildir. Anksiyete genellikle uzun sÃ¼reli, daha hafif ama sÃ¼rekli bir kaygÄ± hali iken; panik atak dakikalar iÃ§inde aniden zirveye ulaÅŸan, ÅŸiddetli bedensel belirtilerle seyreden yoÄŸun bir korku halidir.',
    },
    {
        question: 'Anksiyete geÃ§ici bir durum mudur?',
        answer: 'BazÄ± yaÅŸam stresÃ¶rlerine baÄŸlÄ± kaygÄ±lar geÃ§ici olabilir. Ancak klinik dÃ¼zeydeki anksiyete bozukluklarÄ± yapÄ±landÄ±rÄ±lmÄ±ÅŸ profesyonel deÄŸerlendirme ve bireysel destek sÃ¼releri gerektiren, izlem gereken durumlardÄ±r.',
    },
    {
        question: 'Ankara Eryaman bÃ¶lgesinde deÄŸerlendirme hizmeti veriyor musunuz?',
        answer: 'Evet. Ankara Eryaman, Altay Mahallesi Ã§evresinde Etimesgut ve BatÄ±kent bÃ¶lgelerinden de kolaylÄ±kla ulaÅŸÄ±labilen kliniÄŸimizde anksiyete deÄŸerlendirmesi yapÄ±lmaktadÄ±r.',
    },
    {
        question: 'DeÄŸerlendirme gÃ¶rÃ¼ÅŸmesi nasÄ±l geÃ§mektedir?',
        answer: 'Klinik gÃ¶rÃ¼ÅŸme, bireyin ÅŸikayetlerini, belirtilerin baÅŸlangÄ±cÄ±nÄ±, yaÅŸamÄ±na etkisini anlamaya yÃ¶nelik karÅŸÄ±lÄ±klÄ±, yargÄ±layÄ±cÄ± olmayan ve empatik bir Ã§erÃ§evede ilerler.',
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
                    <Link href="/hizmetler" className={styles.backLink}>â† Hizmetlere DÃ¶n</Link>
                    <span className={styles.heroIcon}>ğŸ§ </span>
                    <h1>Ankara Eryaman&apos;da Anksiyete (KaygÄ± BozukluÄŸu) DeÄŸerlendirmesi</h1>
                    <p className={styles.heroDesc}>
                        <strong>SÃ¼rekli kaygÄ± hali ve kontrol edemediÄŸiniz endiÅŸeler gÃ¼nlÃ¼k hayatÄ±nÄ±zÄ± zorlaÅŸtÄ±rÄ±yorsa, yalnÄ±z deÄŸilsiniz.</strong>
                    </p>
                    <p className={styles.heroDesc}>
                        KaygÄ±, insan doÄŸasÄ±nÄ±n doÄŸal bir parÃ§asÄ± olsa da kontrolden Ã§Ä±ktÄ±ÄŸÄ±nda yÄ±pratÄ±cÄ± bir sÃ¼rece dÃ¶nÃ¼ÅŸebilir.
                        Uzm. Dr. Abdullah MaraÅŸ, Ankara Eryaman&apos;da anksiyete Ã¼zerine kapsamlÄ± psikiyatrik deÄŸerlendirme hizmeti sunmaktadÄ±r.
                    </p>

                    <div className="info-banner" style={{ marginTop: 'var(--space-6)' }}>
                        <strong>ğŸ“Œ Bilgilendirme</strong>
                        Bu sayfa bilgilendirme amaÃ§lÄ±dÄ±r. Bireysel tanÄ± ve planlama sÃ¼reÃ§leri iÃ§in bir psikiyatri uzmanÄ± deÄŸerlendirmesi ÅŸarttÄ±r.
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="section">
                <div className={`container ${styles.contentGrid}`}>

                    {/* Left: Article */}
                    <article className={styles.article}>
                        <h2 id="nedir">Anksiyete (KaygÄ± BozukluÄŸu) Nedir?</h2>
                        <p>
                            Gelecekle ilgili tehdit algÄ±sÄ± veya belirsizlik karÅŸÄ±sÄ±nda hissedilen yoÄŸun endiÅŸe haline anksiyete denir.
                            Normal sÄ±nÄ±rlar iÃ§erisindeki kaygÄ±, kiÅŸiyi olasÄ± tehlikelere karÅŸÄ± hazÄ±rlayan ve koruyan hayati bir mekanizmadÄ±r.
                            Ancak bu doÄŸal savunma mekanizmasÄ±, gerÃ§ek bir tehdit ortada yokken veya basit stresÃ¶rler karÅŸÄ±sÄ±nda
                            orantÄ±sÄ±z bir biÃ§imde Ã§alÄ±ÅŸmaya baÅŸladÄ±ÄŸÄ±nda <strong>anksiyete bozukluÄŸu</strong> (kaygÄ± bozukluÄŸu) tablosu ortaya Ã§Ä±kar.
                        </p>
                        <p>
                            Bu tabloda kiÅŸi, Ã§oÄŸu zaman mantÄ±ksÄ±z olduÄŸunu bilmesine raÄŸmen, sÃ¼rekli bir
                            &ldquo;kÃ¶tÃ¼ bir ÅŸey olacak&rdquo; beklentisi iÃ§erisindedir. Bu huzursuzluk hali bireyin enerjisini tÃ¼ketir.
                        </p>

                        <h2 id="belirtiler">Anksiyete Belirtileri Nelerdir?</h2>
                        <p>Anksiyete belirtileri baÅŸlÄ±ca duygusal ve bedensel olarak iki grupta kendisini gÃ¶sterir. SÃ¼rekli panik hali, kÃ¶tÃ¼ bir ÅŸey olacak beklentisi, kalp Ã§arpÄ±ntÄ±sÄ±, titreme, terleme ve kas aÄŸrÄ±larÄ± sÄ±kÃ§a gÃ¶rÃ¼lÃ¼r. Bu klinik belirtilerin ÅŸiddeti kiÅŸiden kiÅŸiye deÄŸiÅŸebilir ve uzman psikiyatrik deÄŸerlendirmesi ile yapÄ±landÄ±rÄ±lmalÄ±dÄ±r.</p>
                        <ul>
                            <li>SÃ¼rekli endiÅŸe ve panik hali</li>
                            <li>Kalp Ã§arpÄ±ntÄ±sÄ± ve nefes darlÄ±ÄŸÄ±</li>
                            <li>AÅŸÄ±rÄ± terleme ve kas gerginliÄŸi</li>
                            <li>Odaklanma gÃ¼Ã§lÃ¼ÄŸÃ¼ ve dalgÄ±nlÄ±k</li>
                            <li>Sosyal ortamlardan belirgin kaÃ§Ä±nma</li>
                        </ul>
                        <h3>Anksiyete bedensel belirti verir mi?</h3>
                        <p>Evet, anksiyete sÃ¼rekli kaygÄ± dÃ¼ÅŸÃ¼ncelerinin yanÄ±nda mide sorunlarÄ±, baÅŸ dÃ¶nmesi, uyuÅŸma ve gÃ¶ÄŸÃ¼s sÄ±kÄ±ÅŸmasÄ± gibi bedensel duyumlarla sÄ±klÄ±kla kendini hissettirir.</p>
                        <h3>Anksiyete kendi kendine geÃ§er mi?</h3>
                        <p>KÄ±sa sÃ¼reli kaygÄ±lar yatÄ±ÅŸabilir ancak klinik dÃ¼zeydeki yaygÄ±n anksiyete belirtileri, profesyonel klinik destek olmadan genellikle kendi kendine ortadan kaybolmaz.</p>
                        <p>
                            Anksiyete bozukluÄŸu kendisini sadece dÃ¼ÅŸÃ¼nsel bazda deÄŸil, aynÄ± zamanda yoÄŸun bedensel sinyallerle gÃ¶sterir.
                        </p>

                        <h3>Duygusal Belirtiler</h3>
                        <ul>
                            <li>SÃ¼rekli devam eden korku ve endiÅŸe hali</li>
                            <li>Huzursuzluk, diken Ã¼stÃ¼nde olma hissi (gerginlik)</li>
                            <li>KontrolÃ¼ kaybetme veya Ã§Ä±ldÄ±rma korkusu</li>
                            <li>TahammÃ¼lsÃ¼zlÃ¼k ve kolay sinirlenme</li>
                        </ul>

                        <h3>Bedensel Belirtiler</h3>
                        <ul>
                            <li>Ã‡arpÄ±ntÄ±, kalp ritminde hÄ±zlanma</li>
                            <li>Nefes darlÄ±ÄŸÄ±, gÃ¶ÄŸÃ¼ste sÄ±kÄ±ÅŸma hissi</li>
                            <li>AÅŸÄ±rÄ± terleme, titreme veya Ã¼ÅŸÃ¼me</li>
                            <li>Kas gerginliÄŸi (Ã¶zellikle boyun, sÄ±rt ve omuz bÃ¶lgesinde)</li>
                            <li>Mide bulantÄ±sÄ±, karÄ±n aÄŸrÄ±sÄ± veya baÄŸÄ±rsak hareketlerinde deÄŸiÅŸiklik</li>
                        </ul>

                        <h3>BiliÅŸsel ve DavranÄ±ÅŸsal Belirtiler</h3>
                        <ul>
                            <li>Odaklanma gÃ¼Ã§lÃ¼ÄŸÃ¼, zihnin tamamen kaygÄ± verici konuya meÅŸgul olmasÄ±</li>
                            <li>SÃ¼rekli en kÃ¶tÃ¼ senaryoyu dÃ¼ÅŸÃ¼nme (felaketleÅŸtirme)</li>
                            <li>KaygÄ± yaratan ortamlardan veya durumlardan <strong>kaÃ§Ä±nma</strong></li>
                        </ul>

                        <h2 id="gunluk-yasam">Anksiyete GÃ¼nlÃ¼k YaÅŸamÄ± NasÄ±l Etkiler?</h2>
                        <p>
                            SÃ¼rekli kaygÄ± hali, ruhsal enerjinin bÃ¼yÃ¼k bir kÄ±smÄ±nÄ± tÃ¼kettiÄŸi iÃ§in gÃ¼nlÃ¼k yaÅŸamda ciddi iÅŸlevsellik kayÄ±plarÄ±na yol aÃ§ar.
                        </p>
                        <ul>
                            <li><strong>Ä°ÅŸ ve Okul HayatÄ±:</strong> Odaklanma sorunlarÄ± ve stresli durumlardan kaÃ§Ä±nma davranÄ±ÅŸÄ±, performansÄ± doÄŸrudan dÃ¼ÅŸÃ¼rÃ¼r. KiÅŸi, potansiyelini sahaya yansÄ±tmakta zorlanÄ±r.</li>
                            <li><strong>Sosyal Ä°liÅŸkiler:</strong> KaygÄ±, kiÅŸinin insanlarla iletiÅŸim kurmaktan kaÃ§Ä±nmasÄ±na, kendini izole etmesine neden olabilir.</li>
                            <li><strong>Uyku ve Fiziksel SaÄŸlÄ±k:</strong> DÃ¼ÅŸÃ¼ncelerin durdurulamamasÄ±, sÄ±k sÄ±k <Link href="/hizmetler/uyku-bozukluklari">uyku bozukluklarÄ± ile iliÅŸkili kaygÄ± durumuna</Link> yol aÃ§ar. DÃ¼zenli uyuyamamak da anksiyeteyi artÄ±ran bir kÄ±sÄ±r dÃ¶ngÃ¼ yaratÄ±r.</li>
                        </ul>

                        <h2 id="anksiyete-sure">Anksiyete Ne Kadar SÃ¼rer?</h2>
                        <p>Anksiyete bozukluÄŸunun sÃ¼resi hastanÄ±n genetik alt yapÄ±sÄ±na, maruz kaldÄ±ÄŸÄ± stres ÅŸiddetine ve kliniÄŸe baÅŸvuru zamanÄ±na gÃ¶re kiÅŸiden kiÅŸiye deÄŸiÅŸebilir. BazÄ± durumlarda belirtiler aylar iÃ§erisinde yatÄ±ÅŸÄ±rken, yaygÄ±n anksiyete bozukluÄŸu gibi kronik durumlarda uygun izlem yapÄ±lmadÄ±ÄŸÄ±nda yÄ±llarca sÃ¼rebilir.</p>
                        <h3>Anksiyete ataklarÄ± kaÃ§ gÃ¼n sÃ¼rer?</h3>
                        <p>Anksiyete ataklarÄ± genellikle uzun sÃ¼relidir ve gÃ¼nler veya haftalar boyunca genel bir gerginlik, huzursuzluk hali olarak yaÅŸamÄ± etkilemeye devam eder.</p>
                        <h3>Anksiyete tamamen biter mi?</h3>
                        <p>YapÄ±landÄ±rÄ±lmÄ±ÅŸ psikiyatrik deÄŸerlendirme ve dÃ¼zenli takip sÃ¼reÃ§leriyle kaygÄ± kontrol altÄ±na alÄ±nabilir, ancak hastanÄ±n stres toleransÄ±nÄ± uzun vadede yÃ¶netmesi gerekir.</p>

                        <h2 id="panik-atak-farki">Anksiyete ile Panik Atak ArasÄ±ndaki Fark</h2>
                        <p>
                            Toplumda sÄ±kÃ§a birbiri yerine kullanÄ±lan bu iki kavram aslÄ±nda farklÄ± tablolarÄ± tarif eder.
                            Anksiyete bozukluÄŸu (Ã¶zellikle YaygÄ±n Anksiyete BozukluÄŸu); daha sinsi, uzun sÃ¼reli, gÃ¼nlere yayÄ±lan
                            yaygÄ±n bir endiÅŸe halidir.
                        </p>
                        <p>
                            Panik atak ise aniden ortaya Ã§Ä±kan, dakikalar (genellikle 10-30 dk) iÃ§inde zirveye ulaÅŸan ve
                            boÄŸulma hissi, kalp krizi geÃ§iriyorum korkusu gibi Ã§ok ÅŸiddetli bedensel belirtilerin eÅŸlik ettiÄŸi kÄ±sa sÃ¼reli krizlerdir.
                            Daha kapsamlÄ± bilgi iÃ§in <Link href="/hizmetler/panik-atak">panik atak deÄŸerlendirmesi</Link> sayfamÄ±zÄ±
                            inceleyebilirsiniz.
                        </p>

                        <h2 id="depresyon-iliskisi">Anksiyete ve Depresyon Ä°liÅŸkisi</h2>
                        <p>
                            Klinik pratikte anksiyete ve depresyon sÄ±klÄ±kla birlikte gÃ¶rÃ¼lÃ¼r veya birbirini tetikleyebilir.
                            SÃ¼rekli kaygÄ±lÄ± olmak bir sÃ¼re sonra zihinsel tÃ¼kenmiÅŸliÄŸe ve Ã§Ã¶kkÃ¼nlÃ¼ÄŸe (depresif duruma) yol aÃ§abilirken;
                            depresyon yaÅŸayan bir kiÅŸi de durumunun getirdiÄŸi belirsizlikler yÃ¼zÃ¼nden kaygÄ± geliÅŸtirebilir.
                            <Link href="/hizmetler/depresyon">Ankara&apos;da depresyon ve anksiyete birlikteliÄŸi</Link> durumunda
                            kapsamlÄ±, Ã§ift yÃ¶nlÃ¼ bir psikiyatrik deÄŸerlendirme bÃ¼yÃ¼k Ã¶nem taÅŸÄ±r.
                        </p>

                        <h2 id="uzman-destegi">Ne Zaman Uzman DesteÄŸi DÃ¼ÅŸÃ¼nÃ¼lmeli?</h2>
                        <p>
                            AÅŸaÄŸÄ±daki durumlarÄ± yaÅŸÄ±yorsanÄ±z bir <strong>uzman psikiyatri desteÄŸi</strong> almayÄ± dÃ¼ÅŸÃ¼nmelisiniz:
                        </p>
                        <ul>
                            <li>KaygÄ±larÄ±nÄ±z mantÄ±klÄ± bir nedene dayanmÄ±yor veya kontrol edilemiyorsa,</li>
                            <li>GÃ¼nlÃ¼k sorumluluklarÄ±nÄ±zÄ± yerine getirmenizi (iÅŸ, okul) engelliyorsa,</li>
                            <li>SÃ¼rekli bedensel belirtiler (Ã§arpÄ±ntÄ±, uyku sorunlarÄ±, kas aÄŸrÄ±larÄ±) yaÅŸÄ±yorsanÄ±z,</li>
                            <li>KaygÄ±dan dolayÄ± sosyal hayattan kendinizi geri Ã§ekiyorsanÄ±z.</li>
                        </ul>

                        <h2 id="degerlendirme">Ankara Eryaman&apos;da Anksiyete Ä°Ã§in Psikiyatrik DeÄŸerlendirme SÃ¼reci</h2>
                        <p>
                            Eryaman&apos;da anksiyete deÄŸerlendirme sÃ¼reci klinik ortamda, bireyin kendini gÃ¼vende ve
                            anlaÅŸÄ±lmÄ±ÅŸ hissettiÄŸi bir Ã§erÃ§evede yÃ¼rÃ¼tÃ¼lmektedir. Ortalama 40-60 dakika sÃ¼ren ilk klinik
                            gÃ¶rÃ¼ÅŸmede hastanÄ±n Ã¶ykÃ¼sÃ¼ dinlenir, kaygÄ±nÄ±n ÅŸiddeti ve tetikleyicileri analiz edilir.
                        </p>
                        <p>
                            DeÄŸerlendirme sonucunda, bireyin klinik yapÄ±sÄ±na en uygun ÅŸekilde, gerekli gÃ¶rÃ¼lÃ¼rse
                            biyolojik yaklaÅŸÄ±mlar (medikal planlamalar) veya
                            terapÃ¶tik yaklaÅŸÄ±mlar iÃ§eren bir yol haritasÄ± belirlenir. Altay Mahallesi&apos;nde bulunan kliniÄŸe,
                            <Link href="/hizmetler/yetiskin-psikiyatrisi">yetiÅŸkin psikiyatrisi deÄŸerlendirmesi</Link> iÃ§in
                            Etimesgut ve BatÄ±kent bÃ¶lgelerinden de kolaylÄ±kla ulaÅŸÄ±labilmektedir.
                        </p>

                        {/* FAQ BÃ¶lÃ¼mÃ¼ */}
                        <div className={styles.faqSection} id="sss">
                            <h2>SÄ±k Sorulan Sorular</h2>
                            <FAQSection items={faqItems} />
                        </div>

                        {/* CTA */}
                        <div className={styles.articleCta}>
                            <h3>Anksiyete DeÄŸerlendirmesi Ä°Ã§in Randevu AlÄ±n</h3>
                            <p>Ankara Eryaman&apos;da bilimsel ve empatik bir yaklaÅŸÄ±mla, aÅŸÄ±rÄ± kaygÄ± tablonuzun uzman hekim tarafÄ±ndan deÄŸerlendirilmesi iÃ§in iletiÅŸime geÃ§ebilirsiniz.</p>
                            <Link href="/randevu" className="btn btn--primary btn--lg" style={{ marginTop: 'var(--space-4)' }}>
                                Randevu Almak Ä°stiyorum â†’
                            </Link>
                        </div>
                    </article>

                    {/* Right: Sidebar */}
                    <aside className={styles.sidebar}>
                        <div className={styles.sidebarCard}>
                            <h4>HÄ±zlÄ± MenÃ¼</h4>
                            <ul className={styles.tocList}>
                                <li><a href="#nedir">Anksiyete Nedir?</a></li>
                                <li><a href="#belirtiler">Belirtiler Nelerdir?</a></li>
                                <li><a href="#gunluk-yasam">GÃ¼nlÃ¼k YaÅŸama Etkileri</a></li>
                                <li><a href="#panik-atak-farki">Panik Atak FarkÄ±</a></li>
                                <li><a href="#depresyon-iliskisi">Depresyonla Ä°liÅŸkisi</a></li>
                                <li><a href="#uzman-destegi">Ne Zaman Destek AlÄ±nmalÄ±?</a></li>
                                <li><a href="#degerlendirme">Eryaman&apos;da DeÄŸerlendirme SÃ¼reci</a></li>
                            </ul>
                        </div>

                        <div className={styles.sidebarCta}>
                            <h3>Klinik DeÄŸerlendirme</h3>
                            <p>SorunlarÄ±nÄ±zÄ±n Ã§Ã¶zÃ¼mÃ¼ iÃ§in ilk adÄ±mÄ± atÄ±n.</p>
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
                                <strong>Uzm. Dr. Abdullah MaraÅŸ</strong>
                                <span>Psikiyatri UzmanÄ±</span>
                                <span>Ankara, Eryaman</span>
                            </div>
                        </div>

                        <div className={styles.sidebarCard}>
                            <h4>Ä°lgili Hizmetler</h4>
                            <ul className={styles.sidebarLinks}>
                                <li><Link href="/hizmetler/depresyon">Depresyon</Link></li>
                                <li><Link href="/hizmetler/panik-atak">Panik Atak</Link></li>
                                <li><Link href="/hizmetler/uyku-bozukluklari">Uyku BozukluklarÄ±</Link></li>
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
                            "name": "Anksiyete (KaygÄ± BozukluÄŸu) DeÄŸerlendirmesi",
                            "url": "https://drabdullahmaras.com/hizmetler/anksiyete",
                            "about": {
                                "@type": "MedicalCondition",
                                "name": "Anksiyete BozukluÄŸu"
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
