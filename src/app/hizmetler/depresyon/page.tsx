import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Depresyon DeÄŸerlendirmesi Eryaman | Psikiyatrist Ankara - Uzm. Dr. Abdullah MaraÅŸ',
    description:
        'Ankara Eryaman\'da depresyon hakkÄ±nda kapsamlÄ± psikiyatrik deÄŸerlendirme. Depresyon belirtileri, tÃ¼rleri, gÃ¼nlÃ¼k yaÅŸama etkileri ve bireysel deÄŸerlendirme sÃ¼reci. Uzm. Dr. Abdullah MaraÅŸ.',
    alternates: { canonical: 'https://drabdullahmaras.com/hizmetler/depresyon' },
    openGraph: {
        title: 'Eryaman\'da Depresyon DeÄŸerlendirmesi | Uzm. Dr. Abdullah MaraÅŸ',
        description: 'Ankara Eryaman\'da bilimsel Ã§erÃ§evede depresyon deÄŸerlendirmesi. Ruh saÄŸlÄ±ÄŸÄ± uzmanÄ± ile bireysel klinik gÃ¶rÃ¼ÅŸme.',
        type: 'article',
        locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Depresyon belirtileri ne kadar sÃ¼re devam ederse profesyonel deÄŸerlendirme alÄ±nmalÄ±dÄ±r?',
        answer: 'KaramsarlÄ±k, ilgi kaybÄ± ve enerji dÃ¼ÅŸÃ¼klÃ¼ÄŸÃ¼ gibi belirtiler en az iki hafta boyunca Ã§oÄŸu gÃ¼n devam ediyorsa ve gÃ¼nlÃ¼k yaÅŸam iÅŸlevselliÄŸinizi olumsuz etkiliyorsa, bir psikiyatri uzmanÄ±ndan deÄŸerlendirme almanÄ±z Ã¶nerilmektedir.',
    },
    {
        question: 'Depresyon ile normal Ã¼zÃ¼ntÃ¼ arasÄ±ndaki fark nedir?',
        answer: 'Normal Ã¼zÃ¼ntÃ¼ genellikle belirli bir olay veya kayÄ±pla iliÅŸkilidir ve zamanla azalÄ±r. Depresyonda ise belirtiler orantÄ±sÄ±z ÅŸekilde yoÄŸundur, uzun sÃ¼re devam eder, gÃ¼nlÃ¼k iÅŸlevselliÄŸi belirgin biÃ§imde etkiler ve belirli bir tetikleyici olmaksÄ±zÄ±n da sÃ¼rebilir.',
    },
    {
        question: 'Eryaman\'da depresyon deÄŸerlendirmesi nerede yapÄ±lÄ±r?',
        answer: 'Ankara Eryaman, Altay Mahallesi Ã§evresinde Uzm. Dr. Abdullah MaraÅŸ\'Ä±n kliniÄŸinde depresyon deÄŸerlendirmesi yapÄ±lmaktadÄ±r. Etimesgut ve BatÄ±kent bÃ¶lgelerinden kolay ulaÅŸÄ±m saÄŸlanabilir. Randevu sistemiyle Ã§alÄ±ÅŸÄ±lmaktadÄ±r.',
    },
    {
        question: 'Psikiyatrik deÄŸerlendirme sÃ¼reci nasÄ±l iÅŸler?',
        answer: 'Ä°lk gÃ¶rÃ¼ÅŸmede 40-60 dakikalÄ±k kapsamlÄ± bir klinik gÃ¶rÃ¼ÅŸme yapÄ±lÄ±r. Belirtileriniz, geÃ§miÅŸ saÄŸlÄ±k Ã¶ykÃ¼nÃ¼z, aile geÃ§miÅŸiniz ve psikososyal faktÃ¶rler deÄŸerlendirilir. Bireysel bir planlama yapÄ±larak takip sÃ¼reci belirlenir.',
    },
    {
        question: 'Depresyon bedensel belirtilere neden olur mu?',
        answer: 'Evet, depresyon uyku dÃ¼zensizlikleri, kronik yorgunluk, iÅŸtah deÄŸiÅŸiklikleri, baÅŸ aÄŸrÄ±sÄ±, kas aÄŸrÄ±larÄ± ve sindirim sorunlarÄ± gibi Ã§eÅŸitli bedensel belirtilere yol aÃ§abilir. Bu nedenle kapsamlÄ± bir deÄŸerlendirme bÃ¼yÃ¼k Ã¶nem taÅŸÄ±r.',
    },
    {
        question: 'Depresyon ve anksiyete birlikte gÃ¶rÃ¼lebilir mi?',
        answer: 'Evet, depresyon ve anksiyete sÄ±klÄ±kla bir arada gÃ¶rÃ¼lebilen ruh saÄŸlÄ±ÄŸÄ± durumlarÄ±dÄ±r. Her iki durumun birlikte deÄŸerlendirilmesi, bireysel planlamanÄ±n doÄŸru ÅŸekillenmesi aÃ§Ä±sÄ±ndan Ã¶nemlidir.',
    },
    {
        question: 'Ä°lk gÃ¶rÃ¼ÅŸmede ne konuÅŸulur?',
        answer: 'Ä°lk gÃ¶rÃ¼ÅŸmede mevcut yakÄ±nmalarÄ±nÄ±z, belirtilerin ne zaman baÅŸladÄ±ÄŸÄ±, sÃ¼resi ve ÅŸiddeti, geÃ§miÅŸ saÄŸlÄ±k Ã¶ykÃ¼nÃ¼z, aile geÃ§miÅŸiniz ve gÃ¼nlÃ¼k yaÅŸamÄ±nÄ±zÄ± etkileyen durumlar hakkÄ±nda detaylÄ± bir gÃ¶rÃ¼ÅŸme yapÄ±lÄ±r. Bu bilgiler bireysel deÄŸerlendirmenin temelini oluÅŸturur.',
    },
    {
        question: 'Depresyon deÄŸerlendirmesi iÃ§in randevu nasÄ±l alÄ±nÄ±r?',
        answer: 'Web sitemizdeki randevu formu Ã¼zerinden veya doÄŸrudan iletiÅŸim bilgilerimizi kullanarak randevu talebi oluÅŸturabilirsiniz. Talebiniz deÄŸerlendirildikten sonra sizinle iletiÅŸime geÃ§ilecektir.',
    },
];

export default function DepresyonPillarPage() {
    return (
        <>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroBg}><div className={styles.heroOrb}></div></div>
                <div className={`container ${styles.heroContent}`}>
                    <Link href="/hizmetler" className={styles.backLink}>â† TÃ¼m DeÄŸerlendirme AlanlarÄ±</Link>
                    <span className={styles.heroIcon}>ğŸŒ§ï¸</span>
                    <h1>Eryaman&apos;da Depresyon HakkÄ±nda Psikiyatrik DeÄŸerlendirme</h1>
                    <p className={styles.heroDesc}>
                        Depresyon, bireyin yaÅŸam kalitesini, iliÅŸkilerini ve gÃ¼nlÃ¼k iÅŸlevselliÄŸini derinden
                        etkileyebilen yaygÄ±n bir ruh saÄŸlÄ±ÄŸÄ± durumudur. Ankara Eryaman&apos;da Uzm. Dr. Abdullah
                        MaraÅŸ, depresyon belirtilerinin kapsamlÄ± deÄŸerlendirmesini bilimsel ve etik Ã§erÃ§evede
                        gerÃ§ekleÅŸtirmektedir.
                    </p>
                    <p className={styles.heroDesc}>
                        Anadolu Ãœniversitesi TÄ±p FakÃ¼ltesi mezunu olan Dr. MaraÅŸ, Ruh SaÄŸlÄ±ÄŸÄ± ve HastalÄ±klarÄ±
                        alanÄ±nda uzmanlÄ±k belgesine sahiptir. Altay Mahallesi Ã§evresindeki kliniÄŸinde, her bireyin
                        Ã¶zgÃ¼n koÅŸullarÄ±na odaklanan bireysel bir deÄŸerlendirme sÃ¼reci sunmaktadÄ±r.
                    </p>
                    <div className="info-banner" style={{ marginTop: '1rem' }}>
                        <strong>ğŸ“Œ Bilgilendirme</strong>
                        Bu sayfa genel bilgilendirme amaÃ§lÄ±dÄ±r. Bireysel tanÄ± ve tedavi sÃ¼reÃ§leri iÃ§in
                        mutlaka uzman hekim deÄŸerlendirmesi gereklidir.
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
                                Depresyon, tÄ±bbi olarak &ldquo;majÃ¶r depresif bozukluk&rdquo; olarak da bilinen,
                                sÃ¼reÄŸen bir ÅŸekilde Ã§Ã¶kkÃ¼n duygudurum, ilgi ve istek kaybÄ± ile karakterize olan
                                bir ruh saÄŸlÄ±ÄŸÄ± durumudur. DÃ¼nya SaÄŸlÄ±k Ã–rgÃ¼tÃ¼ (WHO) verilerine gÃ¶re dÃ¼nya genelinde
                                280 milyondan fazla insan depresyon belirtileri yaÅŸamaktadÄ±r ve depresyon kÃ¼resel
                                Ã¶lÃ§ekte en Ã¶nde gelen hastalÄ±k yÃ¼kÃ¼ nedenlerinden biri olarak kabul edilmektedir.
                            </p>
                            <p>
                                GÃ¼nlÃ¼k yaÅŸamda herkesin zaman zaman Ã¼zÃ¼ntÃ¼, karamsarlÄ±k veya motivasyon dÃ¼ÅŸÃ¼klÃ¼ÄŸÃ¼
                                hissetmesi doÄŸaldÄ±r. Ancak bu belirtiler en az iki hafta boyunca sÃ¼reklilik
                                gÃ¶sterdiÄŸinde, yoÄŸunlaÅŸtÄ±ÄŸÄ±nda ve kiÅŸinin iÅŸlevselliÄŸini olumsuz etkilediÄŸinde,
                                profesyonel bir psikiyatrik deÄŸerlendirme Ã¶nem kazanmaktadÄ±r.
                            </p>
                            <p>
                                Depresyon, biyolojik, psikolojik ve sosyal faktÃ¶rlerin karmaÅŸÄ±k etkileÅŸimi sonucunda
                                ortaya Ã§Ä±kabilir. Genetik yatkÄ±nlÄ±k, nÃ¶rokimyasal deÄŸiÅŸimler, stresli yaÅŸam olaylarÄ±,
                                kayÄ±p deneyimleri, kronik hastalÄ±klar, hormonal deÄŸiÅŸimler ve Ã§evresel faktÃ¶rler
                                bu durumun oluÅŸumunda rol oynayabilmektedir. Ankara Eryaman&apos;da Uzm. Dr. Abdullah
                                MaraÅŸ, bu Ã§ok boyutlu yapÄ±yÄ± dikkate alan kapsamlÄ± bir deÄŸerlendirme yaklaÅŸÄ±mÄ±
                                benimsemektedir.
                            </p>

                            {/* H2 - 2 */}
                            <h2 id="depresyon-belirtileri">Depresyon Belirtileri Nelerdir?</h2>
                            <p>Depresyon belirtileri arasÄ±nda en yaygÄ±n olanlarÄ± sÃ¼rekli Ã¼zÃ¼ntÃ¼ hali, enerji kaybÄ± ve Ã¶nceden keyif alÄ±nan aktivitelere ilginin azalmasÄ±dÄ±r. Uyku dÃ¼zeninde bozulma, iÅŸtah deÄŸiÅŸiklikleri, odaklanma zorluÄŸu ve aÅŸÄ±rÄ± deÄŸersizlik hissi de sÄ±klÄ±kla gÃ¶rÃ¼lÃ¼r. Bu belirtilerin ÅŸiddeti ve seyri kiÅŸiden kiÅŸiye deÄŸiÅŸebilir olup kapsamlÄ± bir psikiyatrik deÄŸerlendirme gerektirmektedir.</p>
                            <ul>
                                <li>SÃ¼rekli Ã¼zÃ¼ntÃ¼ ve boÅŸluk hissi</li>
                                <li>Aktivitelere belirgin ilginin azalmasÄ±</li>
                                <li>Uyku ve iÅŸtah bozukluÄŸu</li>
                                <li>SÃ¼rekli yorgunluk ve enerji kaybÄ±</li>
                                <li>Odaklanma gÃ¼Ã§lÃ¼ÄŸÃ¼ ve unutkanlÄ±k</li>
                            </ul>
                            <h3>Depresyon fiziksel belirti verir mi?</h3>
                            <p>Evet, depresyon sÄ±klÄ±kla kronik yorgunluk, aÃ§Ä±klanamayan baÅŸ aÄŸrÄ±sÄ±, kas gerginliÄŸi ve sindirim sistemi sorunlarÄ± gibi bedensel belirtilerle kendisini gÃ¶sterebilmektedir.</p>
                            <h3>Depresyon belirtisi ne zaman Ã¶nemsenmelidir?</h3>
                            <p>Bu duygusal ve bedensel belirtiler en az iki hafta boyunca hemen her gÃ¼n devam ediyorsa, uzman klinik deÄŸerlendirmesi dÃ¼ÅŸÃ¼nÃ¼lmelidir.</p>
                            <p>
                                Depresyonun belirtileri bireyden bireye farklÄ±lÄ±k gÃ¶sterebilmektedir. Belirtiler
                                duygusal, bedensel, biliÅŸsel ve davranÄ±ÅŸsal olmak Ã¼zere farklÄ± alanlarda kendini
                                gÃ¶sterebilir. <Link href="/blog/depresyon-belirtileri">Depresyon belirtileri hakkÄ±nda
                                    detaylÄ± blog yazÄ±mÄ±zda</Link> bu konuyu ayrÄ±ntÄ±lÄ± olarak ele almaktayÄ±z.
                            </p>

                            <h3>Duygusal Belirtiler</h3>
                            <ul>
                                <li>SÃ¼reÄŸen karamsarlÄ±k, Ã¼zÃ¼ntÃ¼ ve boÅŸluk hissi</li>
                                <li>Daha Ã¶nce keyif alÄ±nan etkinliklere karÅŸÄ± ilgi ve istek kaybÄ±</li>
                                <li>DeÄŸersizlik, yetersizlik veya aÅŸÄ±rÄ± suÃ§luluk duygularÄ±</li>
                                <li>Umutsuzluk ve Ã§aresizlik hissi</li>
                                <li>Kolay sinirlenme, irritabilite ve huzursuzluk</li>
                            </ul>

                            <h3>Bedensel Belirtiler</h3>
                            <ul>
                                <li>Kronik yorgunluk ve enerji kaybÄ±; basit gÃ¶revler bile aÄŸÄ±r gelebilir</li>
                                <li>Uyku dÃ¼zeninde deÄŸiÅŸiklikler: uykusuzluk (insomnia) veya aÅŸÄ±rÄ± uyuma</li>
                                <li>Ä°ÅŸtah ve kilo deÄŸiÅŸimleri; belirgin iÅŸtah artÄ±ÅŸÄ± veya azalmasÄ±</li>
                                <li>AÃ§Ä±klanamayan baÅŸ aÄŸrÄ±sÄ±, sÄ±rt aÄŸrÄ±sÄ±, kas gerginliÄŸi</li>
                                <li>Sindirim sorunlarÄ± ve mide-baÄŸÄ±rsak ÅŸikÃ¢yetleri</li>
                                <li>Psikomotor yavaÅŸlama veya huzursuz hareket etme</li>
                            </ul>
                            <p>
                                Uyku dÃ¼zenindeki deÄŸiÅŸiklikler depresyonun en belirgin bedensel yansÄ±malarÄ±ndan
                                biridir. Depresyon ve uyku bozukluklarÄ± arasÄ±ndaki Ã§ift yÃ¶nlÃ¼ iliÅŸki hakkÄ±nda{' '}
                                <Link href="/hizmetler/uyku-bozukluklari">uyku bozukluklarÄ±</Link> sayfamÄ±zda
                                detaylÄ± bilgi bulabilirsiniz.
                            </p>

                            <h3>BiliÅŸsel Belirtiler</h3>
                            <ul>
                                <li>Dikkat daÄŸÄ±nÄ±klÄ±ÄŸÄ± ve konsantrasyon gÃ¼Ã§lÃ¼ÄŸÃ¼</li>
                                <li>UnutkanlÄ±k ve zihinsel bulanÄ±klÄ±k</li>
                                <li>Karar vermekte zorlanma; basit kararlar bile aÄŸÄ±r hissedilebilir</li>
                                <li>Olumsuz dÃ¼ÅŸÃ¼nce kalÄ±plarÄ± ve kendi kendini eleÅŸtirme</li>
                            </ul>

                            <h3>DavranÄ±ÅŸsal Belirtiler</h3>
                            <ul>
                                <li>Sosyal izolasyon; arkadaÅŸlardan ve aileden uzaklaÅŸma</li>
                                <li>KiÅŸisel bakÄ±mda ve hijyende azalma</li>
                                <li>Ä°ÅŸ veya okul sorumluluklarÄ±nÄ± ihmal etme</li>
                                <li>Hobiler ve aktivitelerden tamamen Ã§ekilme</li>
                            </ul>

                            {/* H2 - 3 */}
                            <h2 id="depresyon-turleri">Depresyon TÃ¼rleri</h2>
                            <p>
                                Depresyon tek bir durumdan ibaret deÄŸildir; farklÄ± klinik gÃ¶rÃ¼nÃ¼mlere sahip
                                Ã§eÅŸitli alt tÃ¼rleri bulunmaktadÄ±r. Her tÃ¼r, kendine Ã¶zgÃ¼ belirtiler ve seyir
                                Ã¶zellikleri taÅŸÄ±r. Bu nedenle doÄŸru deÄŸerlendirme, bireysel planlama aÃ§Ä±sÄ±ndan
                                kritik Ã¶nem taÅŸÄ±maktadÄ±r.
                            </p>
                            <ul>
                                <li><strong>MajÃ¶r depresif bozukluk:</strong> En yaygÄ±n gÃ¶rÃ¼len biÃ§imdir. Belirtiler en az iki hafta sÃ¼reyle Ã§oÄŸu gÃ¼n devam eder ve iÅŸlevselliÄŸi belirgin biÃ§imde etkiler.</li>
                                <li><strong>Distimi (KalÄ±cÄ± depresif bozukluk):</strong> Daha hafif ÅŸiddette ancak en az iki yÄ±l sÃ¼ren kronik bir formudur. Birey &ldquo;hep bÃ¶yle olduÄŸunu&rdquo; dÃ¼ÅŸÃ¼nerek durumu normalleÅŸtirebilir.</li>
                                <li><strong>Mevsimsel duygudurum bozukluÄŸu:</strong> Genellikle sonbahar ve kÄ±ÅŸ aylarÄ±nda belirtilerin belirginleÅŸtiÄŸi, gÃ¼n Ä±ÅŸÄ±ÄŸÄ± azalmasÄ±yla iliÅŸkili bir tÃ¼rdÃ¼r.</li>
                                <li><strong>DoÄŸum sonrasÄ± (postpartum) duygudurum deÄŸiÅŸiklikleri:</strong> DoÄŸum sonrasÄ±nda hormonal deÄŸiÅŸimler ve yeni yaÅŸam koÅŸullarÄ±yla iliÅŸkili olarak ortaya Ã§Ä±kan duygusal zorluklar. Erken dÃ¶nem deÄŸerlendirme Ã¶nem taÅŸÄ±r.</li>
                                <li><strong>Psikotik Ã¶zellikli depresyon:</strong> AÄŸÄ±r depresif belirtilerin yanÄ± sÄ±ra gerÃ§eklik algÄ±sÄ±nda deÄŸiÅŸikliklerin eÅŸlik ettiÄŸi daha nadir bir formdur.</li>
                            </ul>
                            <p>
                                Depresyon tÃ¼rÃ¼nÃ¼n belirlenmesi, kapsamlÄ± bir klinik gÃ¶rÃ¼ÅŸme ile mÃ¼mkÃ¼ndÃ¼r.
                                Eryaman&apos;da Uzm. Dr. Abdullah MaraÅŸ, bireysel deÄŸerlendirme sÃ¼reci
                                kapsamÄ±nda depresif durumun doÄŸasÄ±nÄ± ve tÃ¼rÃ¼nÃ¼ detaylÄ± olarak ele almaktadÄ±r.
                            </p>

                            {/* H2 - 4 */}
                            <h2 id="depresyon-ne-kadar-surer">Depresyon Ne Kadar SÃ¼rer?</h2>
                            <p>Depresyonun sÃ¼resi bireyin genetik yapÄ±sÄ±na, Ã§evresel stresin ÅŸiddetine ve profesyonel destek alÄ±p almamasÄ±na baÄŸlÄ± olarak kiÅŸiden kiÅŸiye deÄŸiÅŸebilir. BazÄ± klinik durumlarda belirtiler aylar iÃ§inde hafiflerken, distimi gibi tÃ¼rlerde deÄŸerlendirme saÄŸlanmadÄ±ÄŸÄ±nda yÄ±llarca kronikleÅŸerek devam edebilmektedir.</p>
                            <h3>Depresyon bir gÃ¼nde geÃ§er mi?</h3>
                            <p>HayÄ±r, klinik seviyedeki majÃ¶r depresyon kalÄ±cÄ± ve sÃ¼reÄŸen bir durumdur, bir veya iki gÃ¼nde kendiliÄŸinden geÃ§mesi genellikle beklenmez.</p>
                            <h3>Depresyon hiÃ§ bitmez mi?</h3>
                            <p>Uzman psikiyatri hekimi tarafÄ±ndan planlanan yapÄ±landÄ±rÄ±lmÄ±ÅŸ medikal ve terapÃ¶tik izlem yaklaÅŸÄ±mlarÄ±yla, depresyon belirtileri bÃ¼yÃ¼k Ã¶lÃ§Ã¼de yatÄ±ÅŸtÄ±rÄ±labilir ve yaÅŸam kalitesi korunabilir.</p>

                            <h2 id="gunluk-yasam-etkileri">Depresyonun GÃ¼nlÃ¼k YaÅŸam Ãœzerindeki Etkileri</h2>
                            <p>
                                Depresyon, bireyin yaÅŸamÄ±nÄ±n hemen her alanÄ±nÄ± etkileyebilen kapsamlÄ± bir
                                durumdur. GÃ¼nlÃ¼k rutinlerin sÃ¼rdÃ¼rÃ¼lmesi, basit gÃ¶revlerin tamamlanmasÄ±
                                bile depresyon dÃ¶nemlerinde bÃ¼yÃ¼k bir Ã§aba gerektirebilir.
                            </p>
                            <p>
                                Sabah yataktan kalkma, kiÅŸisel bakÄ±m, ev iÅŸleri ve gÃ¼nlÃ¼k sorumluluklar
                                aÅŸÄ±lmasÄ± zor engeller gibi hissedilebilir. Enerji dÃ¼zeyindeki dÃ¼ÅŸÃ¼ÅŸ,
                                motivasyon kaybÄ± ve genel isteksizlik, bireyin yaÅŸam kalitesini doÄŸrudan
                                etkiler. Sosyal aktivitelere katÄ±lÄ±m azalÄ±r, bireyler giderek daha fazla
                                yalnÄ±zlÄ±ÄŸÄ± tercih edebilir.
                            </p>
                            <p>
                                &ldquo;Kendimi sÃ¼rekli mutsuz hissediyorum, hiÃ§bir ÅŸey yapmak
                                istemiyorum&rdquo; ifadesi, klinik pratikte depresyon yaÅŸayan bireylerin
                                en sÄ±k dile getirdiÄŸi yakÄ±nmalardan biridir. Bu tÃ¼r yakÄ±nmalar ciddiye
                                alÄ±nmalÄ± ve profesyonel deÄŸerlendirme dÃ¼ÅŸÃ¼nÃ¼lmelidir.
                            </p>

                            {/* H2 - 5 */}
                            <h2 id="is-aile-etkileri">Ä°ÅŸ ve Aile HayatÄ±na Etkileri</h2>
                            <p>
                                Depresyon, profesyonel yaÅŸamda Ã¶nemli zorluklara yol aÃ§abilmektedir. Ä°ÅŸ yerinde
                                konsantrasyon gÃ¼Ã§lÃ¼ÄŸÃ¼, performans dÃ¼ÅŸÃ¼klÃ¼ÄŸÃ¼, devamsÄ±zlÄ±k ve meslektaÅŸlarla
                                iliÅŸkilerde bozulma sÄ±k karÅŸÄ±laÅŸÄ±lan yansÄ±malardÄ±r. Depresyonun iÅŸ hayatÄ±
                                Ã¼zerindeki etkileri, bireyin kariyerini ve ekonomik durumunu da olumsuz
                                etkileyebilir.
                            </p>
                            <p>
                                Aile iliÅŸkileri de depresyondan Ã¶nemli Ã¶lÃ§Ã¼de etkilenebilir. EÅŸler arasÄ±
                                iletiÅŸimde azalma, ebeveynlik iÅŸlevlerinde gÃ¼Ã§lÃ¼k, Ã§ocuklarla iliÅŸkilerde
                                uzaklaÅŸma ve sosyal rollerin yerine getirilememesi gibi durumlar
                                gÃ¶zlenebilmektedir. Bu zorluklar, bireyin suÃ§luluk ve yetersizlik duygularÄ±nÄ±
                                artÄ±rarak kÄ±sÄ±r bir dÃ¶ngÃ¼ oluÅŸturabilir.
                            </p>
                            <p>
                                Erken dÃ¶nemde profesyonel deÄŸerlendirme almak, bu alanlardaki olumsuz etkilerin
                                sÄ±nÄ±rlandÄ±rÄ±lmasÄ±na katkÄ± saÄŸlayabilir. Eryaman&apos;da psikiyatrist arayan kiÅŸiler,
                                Altay Mahallesi Ã§evresindeki kliniÄŸimize baÅŸvurabilirler.
                            </p>

                            {/* H2 - 6 */}
                            <h2 id="depresyon-anksiyete">Depresyon ile Anksiyete Ä°liÅŸkisi</h2>
                            <p>
                                Depresyon ve <Link href="/hizmetler/anksiyete">anksiyete (kaygÄ±) bozukluklarÄ±</Link>,
                                klinik pratikte sÄ±klÄ±kla bir arada gÃ¶rÃ¼len ruh saÄŸlÄ±ÄŸÄ± durumlarÄ±dÄ±r. AraÅŸtÄ±rmalar,
                                depresyon yaÅŸayan bireylerin Ã¶nemli bir kÄ±smÄ±nda eÅŸ zamanlÄ± olarak anksiyete
                                belirtilerinin de bulunduÄŸunu gÃ¶stermektedir.
                            </p>
                            <p>
                                Her iki durum ortak belirtiler paylaÅŸabilir: uyku bozukluklarÄ±, konsantrasyon
                                gÃ¼Ã§lÃ¼ÄŸÃ¼, irritabilite ve bedensel yakÄ±nmalar hem depresyonda hem de
                                anksiyetede gÃ¶rÃ¼lebilmektedir. Ancak temel ayrÄ±m noktalarÄ± da vardÄ±r; depresyonda
                                aÄŸÄ±rlÄ±klÄ± olarak Ã§Ã¶kkÃ¼nlÃ¼k, ilgi kaybÄ± ve enerji azalmasÄ± Ã¶n plandayken,
                                anksiyetede aÅŸÄ±rÄ± endiÅŸe, korku ve huzursuzluk belirgin olabilmektedir.
                            </p>
                            <p>
                                Her iki durumun birlikte deÄŸerlendirilmesi, bireysel planlamanÄ±n doÄŸru
                                ÅŸekillenmesi aÃ§Ä±sÄ±ndan bÃ¼yÃ¼k Ã¶nem taÅŸÄ±maktadÄ±r. Uzm. Dr. Abdullah MaraÅŸ,
                                Ankara Eryaman&apos;da bÃ¼tÃ¼ncÃ¼l bir bakÄ±ÅŸ aÃ§Ä±sÄ±yla depresyon ve anksiyetenin
                                birlikte deÄŸerlendirmesini gerÃ§ekleÅŸtirmektedir.
                            </p>

                            {/* H2 - 7 */}
                            <h2 id="kimlerde-gorulur">Depresyon Kimlerde GÃ¶rÃ¼lebilir?</h2>
                            <p>
                                Depresyon yaÅŸ, cinsiyet veya sosyal statÃ¼ ayrÄ±mÄ± gÃ¶zetmeksizin herkeste
                                gÃ¶rÃ¼lebilen bir durumdur. Ancak bazÄ± dÃ¶nemler ve koÅŸullar depresyon
                                belirtilerinin ortaya Ã§Ä±kma olasÄ±lÄ±ÄŸÄ±nÄ± artÄ±rabilir:
                            </p>
                            <ul>
                                <li><strong>YaÅŸam geÃ§iÅŸleri:</strong> Emeklilik, iÅŸ deÄŸiÅŸikliÄŸi, boÅŸanma, taÅŸÄ±nma gibi bÃ¼yÃ¼k yaÅŸam deÄŸiÅŸiklikleri</li>
                                <li><strong>KayÄ±p deneyimleri:</strong> Sevilen birinin kaybÄ±, yas sÃ¼reci</li>
                                <li><strong>Kronik hastalÄ±klar:</strong> Uzun sÃ¼reli saÄŸlÄ±k sorunlarÄ± ile baÅŸa Ã§Ä±kma</li>
                                <li><strong>Hormonal deÄŸiÅŸimler:</strong> Ergenlik, hamilelik, doÄŸum sonrasÄ± dÃ¶nem, menopoz</li>
                                <li><strong>Genetik yatkÄ±nlÄ±k:</strong> Ailede depresyon Ã¶ykÃ¼sÃ¼ bulunan bireylerde risk artabilir</li>
                                <li><strong>Psikososyal stresÃ¶rler:</strong> Ekonomik gÃ¼Ã§lÃ¼kler, iÅŸ stresi, iliÅŸki sorunlarÄ±</li>
                            </ul>
                            <p>
                                Etimesgut ve BatÄ±kent bÃ¶lgeleri dahil olmak Ã¼zere Ankara&apos;nÄ±n geniÅŸ bir
                                kesiminden gelen bireyler, Eryaman&apos;daki kliniÄŸimizde depresyon deÄŸerlendirmesi
                                yaptÄ±rabilmektedir.
                            </p>

                            {/* H2 - 8 */}
                            <h2 id="ne-zaman-destek">Ne Zaman Uzman DesteÄŸi DÃ¼ÅŸÃ¼nÃ¼lmelidir?</h2>
                            <p>
                                Ruhsal zorluklar yaÅŸamak insan deneyiminin doÄŸal bir parÃ§asÄ±dÄ±r. Ancak bazÄ±
                                durumlarda profesyonel bir psikiyatrik deÄŸerlendirme almanÄ±z Ã¶nerilmektedir:
                            </p>
                            <ul>
                                <li>Belirtiler <strong>iki hafta veya daha uzun</strong> sÃ¼re Ã§oÄŸu gÃ¼n devam ediyorsa</li>
                                <li>Ä°ÅŸ, ev veya sosyal yaÅŸamÄ±nÄ±zÄ± <strong>sÃ¼rdÃ¼rmekte gÃ¼Ã§lÃ¼k</strong> Ã§ekiyorsanÄ±z</li>
                                <li>Uyku dÃ¼zeniniz veya iÅŸtahÄ±nÄ±zda <strong>belirgin deÄŸiÅŸiklikler</strong> yaÅŸÄ±yorsanÄ±z</li>
                                <li>Daha Ã¶nce keyif aldÄ±ÄŸÄ±nÄ±z ÅŸeylere karÅŸÄ± <strong>tamamen ilgi kaybÄ±</strong> hissediyorsanÄ±z</li>
                                <li>Kendinizi <strong>sÃ¼rekli deÄŸersiz, umutsuz veya Ã§aresiz</strong> hissediyorsanÄ±z</li>
                                <li>YakÄ±nlarÄ±nÄ±z davranÄ±ÅŸlarÄ±nÄ±zda <strong>belirgin deÄŸiÅŸimler</strong> fark ediyorsa</li>
                                <li>DÃ¼ÅŸÃ¼nceleriniz sizi <strong>endiÅŸelendiriyor</strong> ve kontrol edemiyorsanÄ±z</li>
                            </ul>
                            <p>
                                Erken dÃ¶nemde alÄ±nan profesyonel destek, bireyin yaÅŸam kalitesinin korunmasÄ±na
                                ve gÃ¼nlÃ¼k iÅŸlevselliÄŸinin sÃ¼rdÃ¼rÃ¼lmesine Ã¶nemli katkÄ± saÄŸlayabilir. Psikiyatri
                                uzmanÄ±na baÅŸvurmak, zayÄ±flÄ±k deÄŸil; kendi saÄŸlÄ±ÄŸÄ±nÄ± ciddiye almanÄ±n bir
                                gÃ¶stergesidir.
                            </p>

                            {/* H2 - 9 */}
                            <h2 id="degerlendirme-sureci">Psikiyatrik DeÄŸerlendirme SÃ¼reci NasÄ±l Ä°lerler?</h2>
                            <p>
                                Eryaman&apos;daki kliniÄŸimizde depresyon deÄŸerlendirmesi, sistematik ve
                                bireysel bir sÃ¼reÃ§ olarak yÃ¼rÃ¼tÃ¼lmektedir:
                            </p>

                            <h3>1. Ä°lk GÃ¶rÃ¼ÅŸme ve Klinik DeÄŸerlendirme</h3>
                            <p>
                                Ä°lk gÃ¶rÃ¼ÅŸme genellikle 40-60 dakika sÃ¼rmektedir. Bu sÃ¼reÃ§te bireyin mevcut
                                yakÄ±nmalarÄ±, belirtilerin baÅŸlangÄ±Ã§ zamanÄ±, sÃ¼resi ve ÅŸiddeti detaylÄ± olarak
                                ele alÄ±nÄ±r. GÃ¼venli, yargÄ±sÄ±z ve gizlilik ilkelerine baÄŸlÄ± bir ortamda
                                gerÃ§ekleÅŸtirilen gÃ¶rÃ¼ÅŸmede birey kendini rahatÃ§a ifade edebilir.
                            </p>

                            <h3>2. Ã–ykÃ¼ ve Arka Plan DeÄŸerlendirmesi</h3>
                            <p>
                                GeÃ§miÅŸ saÄŸlÄ±k Ã¶ykÃ¼sÃ¼, aile geÃ§miÅŸi, kullanÄ±lan ilaÃ§lar, psikososyal stresÃ¶rler
                                ve yaÅŸam koÅŸullarÄ± kapsamlÄ± olarak sorgulanÄ±r. Depresyonun biyopsikososyal model
                                Ã§erÃ§evesinde deÄŸerlendirilmesi, bireysel planlamanÄ±n temelini oluÅŸturur.
                            </p>

                            <h3>3. Bireysel Planlama</h3>
                            <p>
                                Klinik deÄŸerlendirme sonucunda bireyin ihtiyaÃ§larÄ±na uygun bir yaklaÅŸÄ±m planÄ±
                                oluÅŸturulur. Bu plan; farmakolojik yaklaÅŸÄ±mlar, psikoterapi yÃ¶ntemleri veya
                                her ikisinin birlikte uygulanmasÄ±nÄ± iÃ§erebilir. Plan, bireyin tercihleri ve
                                yaÅŸam koÅŸullarÄ± gÃ¶z Ã¶nÃ¼nde bulundurularak ÅŸekillendirilir.
                            </p>

                            <h3>4. Ä°zlem ve Takip</h3>
                            <p>
                                DeÄŸerlendirme sonrasÄ± dÃ¼zenli takip gÃ¶rÃ¼ÅŸmeleri planlanÄ±r. Bireyin sÃ¼reÃ§
                                iÃ§indeki durumu izlenir ve gerektiÄŸinde yaklaÅŸÄ±m planÄ±nda dÃ¼zenlemeler yapÄ±lÄ±r.
                                Her takip gÃ¶rÃ¼ÅŸmesinde bireyin geri bildirimleri dikkate alÄ±nÄ±r.
                            </p>

                            {/* H2 - 10 */}
                            <h2 id="eryaman-basvuru">Eryaman&apos;da Depresyon Ä°Ã§in BaÅŸvuru SÃ¼reci</h2>
                            <p>
                                Uzm. Dr. Abdullah MaraÅŸ, Ankara Eryaman&apos;da Altay Mahallesi Ã§evresinde
                                bulunan kliniÄŸinde bilimsel ve etik Ã§erÃ§evede depresyon deÄŸerlendirmesi
                                sunmaktadÄ±r. Anadolu Ãœniversitesi TÄ±p FakÃ¼ltesi mezunu olan Dr. MaraÅŸ,
                                Ruh SaÄŸlÄ±ÄŸÄ± ve HastalÄ±klarÄ± alanÄ±nda uzmanlÄ±k belgesine sahiptir.
                            </p>
                            <p>
                                KliniÄŸimiz randevu sistemiyle Ã§alÄ±ÅŸmaktadÄ±r. Randevu almak iÃ§in:
                            </p>
                            <ul>
                                <li>Web sitemizdeki <Link href="/randevu">online randevu formunu</Link> doldurabilirsiniz.</li>
                                <li><Link href="/iletisim">Ä°letiÅŸim sayfamÄ±zdaki</Link> bilgileri kullanarak doÄŸrudan ulaÅŸabilirsiniz.</li>
                            </ul>
                            <p>
                                KliniÄŸimize Eryaman metro istasyonlarÄ±ndan, Etimesgut ve BatÄ±kent gÃ¼zergÃ¢hÄ±ndaki
                                toplu taÅŸÄ±ma araÃ§larÄ±yla kolaylÄ±kla ulaÅŸÄ±labilmektedir.
                            </p>
                            <p>
                                Randevu sistemi sayesinde her bireye yeterli sÃ¼re ve Ã¶zen ayrÄ±lmaktadÄ±r.
                                GÃ¶rÃ¼ÅŸmelerde acele edilmeden, detaylÄ± bir deÄŸerlendirme gerÃ§ekleÅŸtirilmesi
                                hedeflenmektedir.
                            </p>

                            {/* Disclaimer */}
                            <div className="info-banner" style={{ marginTop: '2rem' }}>
                                <strong>ğŸ“Œ Ã–nemli Bilgilendirme</strong>
                                Bu sayfadaki iÃ§erikler genel bilgilendirme amaÃ§lÄ±dÄ±r ve tÄ±bbi tanÄ± ya da
                                tedavi Ã¶nerisi niteliÄŸi taÅŸÄ±mamaktadÄ±r. Depresyon belirtileri yaÅŸÄ±yorsanÄ±z,
                                bireysel tanÄ± ve tedavi sÃ¼reÃ§leri iÃ§in mutlaka bir psikiyatri uzmanÄ±na
                                baÅŸvurunuz. Bu site SaÄŸlÄ±k BakanlÄ±ÄŸÄ± dÃ¼zenlemelerine uygun olarak
                                hazÄ±rlanmÄ±ÅŸtÄ±r.
                            </div>

                            {/* H2 - 11 (FAQ) */}
                            <div className={styles.faqSection}>
                                <h2 id="sss">Depresyon HakkÄ±nda SÄ±k Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            {/* Related */}
                            <div className={styles.relatedBox}>
                                <h3>Ä°lgili Sayfalar ve Okumalar</h3>
                                <div className={styles.relatedGrid}>
                                    <Link href="/blog/depresyon-belirtileri" className={styles.relatedItem}>
                                        <span>ğŸ“</span>
                                        <div>
                                            <strong>Depresyon Belirtileri Nelerdir?</strong>
                                            <span>Blog yazÄ±sÄ±</span>
                                        </div>
                                    </Link>
                                    <Link href="/hizmetler/anksiyete" className={styles.relatedItem}>
                                        <span>ğŸŒ€</span>
                                        <div>
                                            <strong>Anksiyete BozukluklarÄ±</strong>
                                            <span>DeÄŸerlendirme alanÄ±</span>
                                        </div>
                                    </Link>
                                    <Link href="/hizmetler/uyku-bozukluklari" className={styles.relatedItem}>
                                        <span>ğŸŒ™</span>
                                        <div>
                                            <strong>Uyku BozukluklarÄ±</strong>
                                            <span>DeÄŸerlendirme alanÄ±</span>
                                        </div>
                                    </Link>
                                    <Link href="/hizmetler/bipolar-bozukluk" className={styles.relatedItem}>
                                        <span>ğŸ”ƒ</span>
                                        <div>
                                            <strong>Bipolar Bozukluk</strong>
                                            <span>DeÄŸerlendirme alanÄ±</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className={styles.articleCta}>
                                <h3>Profesyonel Depresyon DeÄŸerlendirmesi Ä°Ã§in</h3>
                                <p>
                                    Ankara Eryaman&apos;da bilimsel Ã§erÃ§evede depresyon deÄŸerlendirmesi iÃ§in
                                    randevu alabilirsiniz. Altay Mahallesi Ã§evresindeki kliniÄŸimize Etimesgut
                                    ve BatÄ±kent bÃ¶lgelerinden kolay ulaÅŸÄ±m saÄŸlanabilir.
                                </p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">
                                    Randevu Al â†’
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
                                    <li><a href="#depresyon-turleri">TÃ¼rleri</a></li>
                                    <li><a href="#gunluk-yasam-etkileri">GÃ¼nlÃ¼k YaÅŸam Etkileri</a></li>
                                    <li><a href="#is-aile-etkileri">Ä°ÅŸ ve Aile Etkileri</a></li>
                                    <li><a href="#depresyon-anksiyete">Anksiyete Ä°liÅŸkisi</a></li>
                                    <li><a href="#kimlerde-gorulur">Kimlerde GÃ¶rÃ¼lÃ¼r?</a></li>
                                    <li><a href="#ne-zaman-destek">Ne Zaman Destek?</a></li>
                                    <li><a href="#degerlendirme-sureci">DeÄŸerlendirme SÃ¼reci</a></li>
                                    <li><a href="#eryaman-basvuru">BaÅŸvuru SÃ¼reci</a></li>
                                    <li><a href="#sss">SSS</a></li>
                                </ul>
                            </nav>
                            <div className={styles.sidebarCta}>
                                <h3>DeÄŸerlendirme Randevusu</h3>
                                <p>Depresyon deÄŸerlendirmesi iÃ§in profesyonel psikiyatrik gÃ¶rÃ¼ÅŸme</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Randevu Al</Link>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>Uzman Hekim</h4>
                                <div className={styles.doctorCard}>
                                    <div className={styles.doctorIcon}>
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                    </div>
                                    <strong>Uzm. Dr. Abdullah MaraÅŸ</strong>
                                    <span>Psikiyatri UzmanÄ±</span>
                                    <span>Eryaman, Ankara</span>
                                </div>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>DiÄŸer Alanlar</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/hizmetler/anksiyete">Anksiyete</Link></li>
                                    <li><Link href="/hizmetler/panik-atak">Panik Atak</Link></li>
                                    <li><Link href="/hizmetler/okb">OKB</Link></li>
                                    <li><Link href="/hizmetler/dikkat-eksikligi">DEHB</Link></li>
                                    <li><Link href="/hizmetler/bipolar-bozukluk">Bipolar Bozukluk</Link></li>
                                    <li><Link href="/hizmetler/uyku-bozukluklari">Uyku BozukluklarÄ±</Link></li>
                                    <li><Link href="/hizmetler/yetiskin-psikiyatrisi">YetiÅŸkin Psikiyatrisi</Link></li>
                                    <li><Link href="/hizmetler/cocuk-ve-ergen-psikiyatrisi">Ã‡ocuk ve Ergen</Link></li>
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
                    name: "Eryaman'da Depresyon HakkÄ±nda Psikiyatrik DeÄŸerlendirme",
                    description: metadata.description,
                    url: "https://drabdullahmaras.com/hizmetler/depresyon",
                    specialty: { "@type": "MedicalSpecialty", name: "Psychiatric" },
                    about: { "@type": "MedicalCondition", name: "Depresyon", alternateName: "MajÃ¶r Depresif Bozukluk" },
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
