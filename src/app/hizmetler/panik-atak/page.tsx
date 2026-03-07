import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon/page.module.css';

export const metadata: Metadata = {
    title: 'Panik Atak DeÄŸerlendirmesi | Eryaman Psikiyatrist Uzm. Dr. Abdullah MaraÅŸ',
    description:
        'Ankara Eryaman\'da panik atak deÄŸerlendirmesi. Ã–lÃ¼m korkusu, nefes alamama, kalp krizi ÅŸÃ¼phesi ve gece Ã§arpÄ±ntÄ±sÄ± gibi bedensel/zihinsel belirtilerin psikiyatrik analizi.',
    alternates: { canonical: 'https://drabdullahmaras.com/hizmetler/panik-atak' },
    openGraph: {
        title: 'Ankara Eryaman\'da Panik Atak DeÄŸerlendirmesi',
        description: 'Ankara Eryaman\'da bilimsel Ã§erÃ§evede panik atak deÄŸerlendirmesi. Ruh saÄŸlÄ±ÄŸÄ± uzmanÄ± ile bireysel klinik gÃ¶rÃ¼ÅŸme.',
        type: 'article',
        locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Panik atak Ã¶ldÃ¼rÃ¼r mÃ¼?',
        answer: 'HayÄ±r, panik ataÄŸÄ±n kendisi Ã¶lÃ¼mcÃ¼l deÄŸildir ve kalbe zarar vermez. O an yaÅŸanan "Ã¶lecekmiÅŸim" hissi, beynin yanlÄ±ÅŸ bir alarm vererek vÃ¼cuda aÅŸÄ±rÄ± adrenalin pompalamasÄ±ndan kaynaklanÄ±r.',
    },
    {
        question: 'Panik atak kalp krizi midir?',
        answer: 'Panik atak bir kalp krizi deÄŸildir. Ancak belirtileri (gÃ¶ÄŸÃ¼s aÄŸrÄ±sÄ±, Ã§arpÄ±ntÄ±, uyuÅŸma) kalp krizini taklit edebilir. Bu nedenle ilk defa yaÅŸandÄ±ÄŸÄ±nda mutlaka acil tÄ±bbi deÄŸerlendirme ile kalp saÄŸlÄ±ÄŸÄ± ekarte edilmelidir.',
    },
    {
        question: 'Panik atak kaÃ§ dakika sÃ¼rer?',
        answer: 'Genellikle 10-20 dakika iÃ§inde zirveye ulaÅŸÄ±r ve nadiren 30 dakikadan uzun sÃ¼rer. Ancak ataÄŸÄ±n bÄ±raktÄ±ÄŸÄ± yorgunluk hissi saatlerce ya da gÃ¼n boyu devam edebilir.',
    },
    {
        question: 'Gece uykudan panik atakla uyanmak neden olur?',
        answer: 'BilinÃ§altÄ±ndaki biriken stres, gÃ¼n iÃ§i yorgunluk veya uyku apnea gibi organik nedenler tetiÄŸi Ã§ekebilir. Gece panik ataklarÄ±, uykudayken dahi beynin tehdit algÄ±lamaya devam etmesinden kaynaklanÄ±r.',
    },
    {
        question: 'Panik atak tekrarlar mÄ±?',
        answer: 'KiÅŸi bir kez atak yaÅŸadÄ±ÄŸÄ±nda genellikle "ya tekrar olursa" beklenti kaygÄ±sÄ± geliÅŸtirir. Bu korkunun kendisi de maalesef yeni ataklarÄ±n tetikleyicisi olabilmektedir.',
    },
    {
        question: 'Panik atak kendi kendine geÃ§er mi?',
        answer: 'Tek bir atak kendi kendine sonlanabilir. Ancak ataklar sÄ±klaÅŸtÄ±ysa ve kiÅŸinin sÃ¼rekli kaÃ§Ä±nma davranÄ±ÅŸlarÄ± (kalabalÄ±ktan, asansÃ¶rden vb.) geliÅŸtirmesine neden olduysa profesyonel psikiyatrik deÄŸerlendirme dÃ¼ÅŸÃ¼nÃ¼lmelidir.',
    },
    {
        question: 'Eryamanâ€™da panik atak iÃ§in hangi doktora gidilir?',
        answer: 'Organik (fiziksel) rahatsÄ±zlÄ±klar ekarte edildikten sonra (kardiyoloji vb temiz Ã§Ä±ktÄ±ktan sonra), sÃ¼recin psikiyatrik analizi ve yapÄ±landÄ±rÄ±lmasÄ± iÃ§in Eryamanâ€™da Uzm. Dr. Abdullah MaraÅŸ kliniÄŸimize baÅŸvurulur.',
    },
    {
        question: 'Panik atak yaÅŸayan biri ne yapmalÄ±?',
        answer: 'Kriz anÄ±nda derin ve yavaÅŸ nefes alÄ±p vermeye (diyafram nefesi) Ã§alÄ±ÅŸmak, gÃ¼venli bir ortama geÃ§ip dikkatini 5 duyuya (Ã§evredeki renk, ses) yÃ¶neltmek (grounding tekniÄŸi) fayda saÄŸlayabilir.',
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
                    <Link href="/hizmetler" className={styles.backLink}>â† TÃ¼m DeÄŸerlendirme AlanlarÄ±</Link>
                    <span className={styles.heroIcon}>âš¡</span>
                    <h1>Ankara Eryaman&apos;da Panik Atak DeÄŸerlendirmesi</h1>
                    <p className={styles.heroDesc}>
                        Ortada hiÃ§bir neden yokken gelen anlÄ±k ve kuvvetli endiÅŸe patlamalarÄ±, gÃ¶ÄŸÃ¼ste
                        yoÄŸun bir sÄ±kÄ±ÅŸma, terleme, boÄŸulma veya "kalbim bir anda fÄ±rlayacak gibi oluyor" hissi...
                    </p>
                    <p className={styles.heroDesc}>
                        Panik ataklar, yarattÄ±ÄŸÄ± belirsizlik ve Ã¶lÃ¼m hissiyle hayatÄ±nÄ±zÄ± kÄ±sÄ±tlamamalÄ±. Uzm. Dr.
                        Abdullah MaraÅŸ kliniÄŸinde bu ÅŸiddetli bedensel ve dÃ¼ÅŸÃ¼nsel krizlerin psikiyatrik analizini,
                        Eryaman sÄ±nÄ±rlarÄ±nda gÃ¼venle deneyimleyebilirsiniz.
                    </p>

                    <div className="info-banner" style={{ marginTop: 'var(--space-6)' }}>
                        <strong>ğŸ“Œ Bilgilendirme</strong>
                        Bu metin, tÄ±bbi genel kÃ¼ltÃ¼r ve bilgilendirme taÅŸÄ±maktadÄ±r. TanÄ± koyma veya kesin bir tedavi
                        vadetme (garanti etme) amacÄ± gÃ¼tmez. Herhangi bir ÅŸiddetli gÃ¶ÄŸÃ¼s aÄŸrÄ±sÄ± / sol kol uyuÅŸmasÄ±nda
                        Ã¶ncelik tÄ±bbi fizyolojik durum olarak yorumlanÄ±p Acil Servis olmalÄ±dÄ±r.
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
                            Panik atak, bireyin aniden (hiÃ§bir gÃ¶rÃ¼nÃ¼r ve spesifik uyaran olmadan) yakalandÄ±ÄŸÄ±, son derece ÅŸiddetli
                            korku ve endiÅŸe hissini saniyeler / dakikalar iÃ§inde tÄ±rmanarak doruÄŸa taÅŸÄ±dÄ±ÄŸÄ± epizodlardÄ±r.
                            Sanki hayati bir tehdit ile karÅŸÄ± karÅŸÄ±ya imiÅŸÃ§esine (SavaÅŸ, KaÃ§ tepkisi), vÃ¼cutta bir dizi fiziksel
                            ve zihinsel belirti patlak verir. Oysaki objektif olarak bakÄ±ldÄ±ÄŸÄ±nda ortada herhangi bir aslan, herhangi
                            bir deprem vb. bÃ¼yÃ¼k bir tehdit unsuru yoktur.
                        </p>
                        <p>
                            Toplumun Ã§ok Ã¶nemli bir kesimi hayatÄ±nda en az bir defa panik atak yaÅŸar ve bu olaÄŸandÄ±r.
                            Fakat bu ataklarÄ±n Ã§ok sÄ±k tekrar etmesi ve <strong>beklenti endiÅŸesi</strong> ile kiÅŸinin
                            dÄ±ÅŸ dÃ¼nyadan soyutlanmasÄ±na neden olmasÄ±, Panik BozukluÄŸu tablosuna yol aÃ§ar.
                        </p>

                        <h2 id="belirtiler">Panik Atak Belirtileri Nelerdir?</h2>
                        <p>
                            Ataklar tamamen bir anda gelir ve aÅŸaÄŸÄ±daki belirgin semptomlarÄ±n genellikle birkaÃ§Ä±nÄ± aynÄ±
                            anda gÃ¼Ã§lÃ¼ biÃ§imde hissettirir:
                        </p>
                        <ul>
                            <li><strong>Bedensel Belirtiler:</strong> Ã‡arpÄ±ntÄ±, gÃ¶ÄŸÃ¼s kafesinde ÅŸiddetli baskÄ± aÄŸrÄ±sÄ±, nefes
                                alamÄ±yorum (hava aÃ§lÄ±ÄŸÄ±) hissi, soÄŸuk terleme, kontrolsÃ¼z titreme veya Ã¼ÅŸÃ¼me, elde ayakta uyuÅŸma.</li>
                            <li><strong>Zihinsel Belirtiler:</strong> "Acaba Ã–lecekmiÅŸim gibi hissediyorum",
                                "AklÄ±mÄ± yitiriyorum", "KontrolÃ¼mÃ¼ dÄ±ÅŸarÄ±ya rezil olacak biÃ§imde kaybedebilirim" dÃ¼ÅŸÃ¼nceleri.</li>
                            <li><strong>Ã‡evresel AlgÄ±:</strong> GÃ¶zlerin kararmasÄ±, sanki kiÅŸinin etrafa uzaktan, dÄ±ÅŸarÄ±dan hayal
                                gibi (derealizasyon) veya kendi bedenine yabancÄ±laÅŸÄ±yor (depersonalizasyon) gibi bakmasÄ±.</li>
                        </ul>

                        <h2 id="vucutta-neler-olur">Panik Atak SÄ±rasÄ±nda VÃ¼cutta Neler Olur?</h2>
                        <p>
                            VÃ¼cudun ilkel alarm sistemi (Amigdala), bir yanlÄ±ÅŸ kodlamaya girerek
                            kana bol miktarda <strong>Adrenalin</strong> (epinefrin) salgÄ±lar. Kalp kanÄ± hÄ±zla pompalar ki kaslara
                            (kaÃ§abilmek iÃ§in) oksijen gitsin; gÃ¶z bebekleri bÃ¼yÃ¼r; ciÄŸerler ise daha fazla oksijen doldurabilmek iÃ§in
                            hÄ±zlÄ± soluklanmaya geÃ§er. Kendi nefesimizi kontrol edemez bir "hiperventilasyon" (hÄ±zlÄ± solup verme)
                            aÅŸamasÄ±na gireriz ki bu durum paradoksal biÃ§imde "boÄŸuluyorum" hissini yaratÄ±r.
                        </p>

                        <h2 id="kac-dakika-surer">Panik Atak KaÃ§ Dakika SÃ¼rer?</h2>
                        <p>Panik atak genellikle aniden baÅŸlar ve belirtiler 10 ila 30 dakika iÃ§erisinde zirve noktasÄ±na ulaÅŸarak yavaÅŸÃ§a sÃ¶nÃ¼mlenir. Åiddetli ataklarÄ±n sÃ¼resi ve sÄ±klÄ±ÄŸÄ± kiÅŸiden kiÅŸiye deÄŸiÅŸebilir, ancak bedende bÄ±raktÄ±ÄŸÄ± yorgunluk ve tedirginlik hissi daha uzun saatlere yayÄ±labilir.</p>
                        <h3>Panik atak saatlerce sÃ¼rer mi?</h3>
                        <p>AtaÄŸÄ±n en ÅŸiddetli pik safhasÄ± saatlerce sÃ¼rmez, genellikle yarÄ±m saatte sonlanÄ±r ancak adrenalin deÅŸarjÄ±nÄ±n bedensel yorgunluk hissi gÃ¼n boyu devam edebilmektedir.</p>
                        <h3>1 gÃ¼nde kaÃ§ kez panik atak geÃ§irilir?</h3>
                        <p>Atak sÄ±klÄ±ÄŸÄ± tamamen bireysel stres faktÃ¶rlerine baÄŸlÄ±dÄ±r; klinik gÃ¶zlemlerde arka arkaya tetiklenen gÃ¼nlerin yanÄ± sÄ±ra aylarca atak yaÅŸanmayan aralÄ±klar da gÃ¶rÃ¼lmektedir.</p>
                        <p>
                            HastalarÄ±n kliniÄŸe anlattÄ±ÄŸÄ± en yaygÄ±n ifade <strong>"Dakikalar geÃ§mek bilmiyor, bu kriz hiÃ§ bitmeyecek
                                gibi geliyor"</strong> yÃ¶nÃ¼ndedir. Ancak aslÄ±nda bedenin tÃ¼m sarmallarÄ±nÄ± seferber ettiÄŸi amigdala ve
                            adrenalin patlamasÄ± sonsuza dek sÃ¼recek bir depo sunamaz. Saniyeler ile tÄ±rmanÄ±r ve genellikle
                            <strong>10 ila 30 dakika arasÄ±nda zirve yaparak sÃ¶nÃ¼mlenir</strong>.
                        </p>

                        <h2 id="gece-panik">Gece Panik Atak Neden Olur?</h2>
                        <p>
                            Pek Ã§ok hasta, rahatlamasÄ± veya gÃ¼n yorgunluÄŸunu atmasÄ± beklenen gece saatlerinde "Gece uykudan
                            Ã§arpÄ±ntÄ±yla uyanÄ±yorum" ÅŸikayetiyle baÅŸvurur. AslÄ±nda beyin uyuduÄŸumuzda dahi belli bir gÃ¼venlik
                            algÄ±sÄ±nÄ± aÃ§Ä±k tutar. Gece atÄ±lan ataklar, genellikle derin veya REM uykusu fazlarÄ±ndaki kan
                            gazÄ± (oksijen/karbondioksit) algÄ±lama hassasiyetidir. KiÅŸi rÃ¼yalarÄ±nda korkup deÄŸil, direkt bir
                            adrenalin deÅŸarjÄ±yla bÃ¼yÃ¼k bir terlemeyle yataÄŸÄ±ndan baÄŸÄ±rarak uyanabilir.
                        </p>

                        <h2 id="kalp-krizi-mi">Panik Atak Ä°le Kalp Krizi FarkÄ± Nedir?</h2>
                        <p>
                            Panik atak o anlÄ±k korkunÃ§ yÃ¼zÃ¼yle, bedensel Ã¶lÃ¼m endiÅŸesini "Kalbim sÄ±kÄ±ÅŸÄ±yor" olarak direkt kalbe yorar.
                            Diyalektik olarak ÅŸÃ¶yledir:
                        </p>
                        <ul>
                            <li><strong>Kalp krizinde</strong> nefes alma ÅŸeklinize ve hareket edip gÃ¶ÄŸÃ¼s kasÄ±nÄ±zÄ± duruÅŸunuzla
                                deÄŸiÅŸtirmenize baÄŸlÄ± olarak aÄŸrÄ± <em>deÄŸiÅŸmez</em>. Efor (yÃ¼rÃ¼me vb) ile bu aÄŸÄ±r baskÄ± ÅŸiddetlenir.</li>
                            <li><strong>Panik ataktaysa</strong> ÅŸiddetli aÄŸrÄ± gÃ¶ÄŸsÃ¼n belirli bÃ¶lgelerinde daha sÄ±zlama veya batma
                                tarzÄ±nda olabilir; panik deÅŸarjÄ± bittikten sonra (20-30 dk) tamamen normale dÃ¶ner.</li>
                        </ul>
                        <p>
                            Yine de altÄ± Ã§izilmesi gereken kritik kural: Ä°lk defa bÃ¶yle bir gÃ¶ÄŸÃ¼s aÄŸrÄ±sÄ± yaÅŸayan hasta,
                            panik de olsa mutlaka fiziksel (EKG/kardiyoloji) ekarte sÃ¼reci iÃ§in acil branÅŸlara gÃ¶rÃ¼lmelidir.
                        </p>

                        <h2 id="oldurur-mu">Panik Atak Ã–ldÃ¼rÃ¼r mÃ¼?</h2>
                        <p>HayÄ±r, panik atak kalbe veya iÃ§ organlara doÄŸrudan zarar veren Ã¶lÃ¼mcÃ¼l bir akut durum oluÅŸturmaz. O esnada hissedilen yoÄŸun gÃ¶ÄŸÃ¼s aÄŸrÄ±sÄ± ve nefes darlÄ±ÄŸÄ±, beynin yanlÄ±ÅŸ alarm vererek salgÄ±ladÄ±ÄŸÄ± yoÄŸun adrenalinin geÃ§ici bir bedensel yansÄ±masÄ±dÄ±r.</p>
                        <h3>Panik ataktan deliren var mÄ±?</h3>
                        <p>HayÄ±r, panik atak esnasÄ±nda "aklÄ±mÄ± kaybediyorum" hissi Ã§ok yaygÄ±n ve korkutucu olsa da, bu durum bilinÃ§ kaybÄ± veya akÄ±l saÄŸlÄ±ÄŸÄ±nÄ±n yitirilmesiyle sonuÃ§lanmaz.</p>
                        <h3>Panik atak kalp krizi yapar mÄ±?</h3>
                        <p>Panik ataÄŸÄ±n kendisi doÄŸrudan kalp krizi tablosuna yol aÃ§maz, ancak ilk kez bÃ¶yle bir atak yaÅŸanÄ±yorsa kardiyolojik incelemeyle fizyolojik ÅŸÃ¼phelerin ekarte edilmesi ÅŸarttÄ±r.</p>
                        <p>
                            HayÄ±r. YarattÄ±ÄŸÄ± yÃ¼ksek hislerin aksine, kalp ya da solunum sisteminin anlÄ±k yÃ¼ksek dozda ve yanlÄ±ÅŸ
                            zamanlÄ± tepkimesidir; kalp-damar dokusuna veya kana bir fiziksel deforme / tÄ±kanÄ±klÄ±k ulaÅŸtÄ±rmaz. Ne
                            kadar dehÅŸet verici hissettirirse hissettirsin panik ataÄŸÄ±n kendisi Ã¶ldÃ¼rÃ¼cÃ¼ (fatal) deÄŸildir. Ama
                            mutlak manada hayat kalitesini Ã¶ldÃ¼rÃ¼r ve iÅŸlevsellikten bÃ¼yÃ¼k zararlar doÄŸurur.
                        </p>

                        <h2 id="anksiyete-iliskisi">Panik Atak ve Anksiyete Ä°liÅŸkisi</h2>
                        <p>
                            Panik ataklarÄ± sÄ±klayan hastalarÄ±n zamanla o gÃ¼vende hissetmeme zeminlerinde, her ana sinirlilik ve
                            huzursuzluk sarmalÄ± olan yaygÄ±n <Link href="/hizmetler/anksiyete">kaygÄ± bozukluÄŸu / anksiyetesini</Link>
                            birlikte yaÅŸadÄ±ÄŸÄ± barizdir. Anksiyete (geniÅŸ zamana yayÄ±lan kaygÄ± sÃ¼reci) ile beraber gelen ani panikler,
                            sÃ¼rekli kaygÄ± ve ani ataklarÄ±n birlikteliÄŸi (komorbidite) adÄ±na
                            profesyonel olarak analiz edilmesi gereken Ã§oklu sÃ¼reÃ§leri kapsamaktadÄ±r. AyrÄ±ca atak beklemekten uyunamayan
                            tÃ¼m geceler ciddi bir <Link href="/hizmetler/uyku-bozukluklari">uyku bozukluÄŸuna</Link> veya
                            <Link href="/hizmetler/depresyon">klinik dÃ¼zeyde depresyona (tÃ¼kenmiÅŸliÄŸe)</Link> sebep olabilir.
                        </p>

                        <h2 id="yorgunluk">Panik Atak SonrasÄ± YaÅŸanan Yorgunluk</h2>
                        <p>
                            10-20 dakikalÄ±k fÄ±rtÄ±na dinip de vÃ¼cut normale dÃ¶ndÃ¼ÄŸÃ¼nde, sanki kiÅŸi daÄŸ tÄ±rmanmÄ±ÅŸ veya dev bir kaplanla
                            boÄŸuÅŸup kurtulmuÅŸ gibi devasa bir <strong>sersemlik ve kas ezikliÄŸi / enerji tÃ¼keniÅŸi</strong> yaÅŸar. Bu,
                            aÅŸÄ±rÄ± salgÄ±lanan stres hormonlarÄ±nÄ±n karaciÄŸer veya bedende bÄ±raktÄ±ÄŸÄ± yoÄŸun yÄ±kÄ±m eforundan ileri
                            gelmektedir. Titreme hissi ve kafasÄ±nÄ± toplayamama durumlarÄ± saatlerce bazen ertesi gÃ¼ne kadar sÃ¼rebilir.
                        </p>

                        <h2 id="ne-zaman-basvuru">Ne Zaman Psikiyatri UzmanÄ±na BaÅŸvurulmalÄ±?</h2>
                        <p>
                            VÃ¼cudunuz, organlarÄ±nÄ±z fiziksel bir muayeneden tertemiz geÃ§tiyse ve siz hala:
                        </p>
                        <ul>
                            <li>Benzer ataklarÄ± yeniden yaÅŸamaktan (beklenti evhamÄ±) Ã¶tÃ¼rÃ¼ uÃ§aÄŸa/toplu taÅŸÄ±maya, kapalÄ± odalara
                                ve asansÃ¶rlere giremiyorsanÄ±z (Agorafobi),</li>
                            <li>"Acil bir ÅŸey olursa yanÄ±mda hastane olsun" diye evden tek baÅŸÄ±nÄ±za sosyal hayata karÄ±ÅŸamÄ±yorsanÄ±z,</li>
                            <li>Bireysel veya ailenizdeki yaÅŸam enerjiniz korku yÃ¼zÃ¼nden sÄ±fÄ±rlanmÄ±ÅŸ ise;
                                mutlaka <strong>bir psikiyatrist hekim</strong> ile gÃ¶rÃ¼ÅŸmeler (konsÃ¼ltasyon) yapmalÄ±sÄ±nÄ±z.</li>
                        </ul>

                        <h2 id="degerlendirme">Ankara Eryaman'da Panik Atak Ä°Ã§in DeÄŸerlendirme SÃ¼reci</h2>
                        <p>
                            Eryaman (Altay Mh.), Etimesgut ve BatÄ±kent bÃ¶lgelerinden kliniÄŸimize panik hisleriyle gelen hastalar;
                            durumun fizyolojik mi yoksa bir amigdala (kaygÄ± merkezli psikiyatrik) sorunu mu olduÄŸunun ayÄ±rÄ±cÄ± tanÄ±sÄ±yla
                            karÅŸÄ±laÅŸÄ±rlar. Uzm. Dr. Abdullah MaraÅŸ, panik ataklarÄ±n klinik anatomisini saptayarak, danÄ±ÅŸanÄ±n ihtiyaÃ§ duyduÄŸu
                            Ã¶zel farmakolojik ya da terapik yÃ¶nlendirmeleri etik normlarda tasarlayacaktÄ±r. HastanÄ±n bu bedensel infaz
                            hislerine maruz kalmak zorunda olmadÄ±ÄŸÄ± bilimsel muayene sÃ¼reci, Eryaman'da sunulmaktadÄ±r.
                        </p>

                        {/* SSS */}
                        <div className={styles.faqSection} id="sss">
                            <h2>SÄ±k Sorulan Sorular</h2>
                            <FAQSection items={faqItems} />
                        </div>

                        {/* CTA */}
                        <div className={styles.articleCta}>
                            <h3>Korku ve Panik Ä°Ã§inde Olmak Zorunda DeÄŸilsiniz</h3>
                            <p>
                                Ankara Eryaman panik atak deÄŸerlendirme sÃ¼reci kapsamÄ±nda kapsamlÄ± deÄŸerlendirme iÃ§in; randevu
                                tercihlerine tÄ±klayarak psikiyatrik ve klinik izlem gÃ¶rÃ¼ÅŸmesi oluÅŸturabilirsiniz.
                            </p>
                            <Link href="/randevu" className="btn btn--primary btn--lg" style={{ marginTop: 'var(--space-4)' }}>
                                Doktor DeÄŸerlendirmesi Randevusu â†’
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
                                <li><a href="#vucutta-neler-olur">VÃ¼cutta Neler Olur?</a></li>
                                <li><a href="#kac-dakika-surer">KaÃ§ Dakika SÃ¼rer?</a></li>
                                <li><a href="#gece-panik">Gece Panik Neden Olur?</a></li>
                                <li><a href="#kalp-krizi-mi">Kalp Krizi FarkÄ±</a></li>
                                <li><a href="#oldurur-mu">Ã–ldÃ¼rÃ¼r mÃ¼?</a></li>
                                <li><a href="#anksiyete-iliskisi">Anksiyete Ä°liÅŸkisi</a></li>
                                <li><a href="#yorgunluk">SonrasÄ± Yorgunluk</a></li>
                                <li><a href="#ne-zaman-basvuru">Uzm. BaÅŸvurusu</a></li>
                                <li><a href="#degerlendirme">Eryaman DeÄŸerlendirme</a></li>
                            </ul>
                        </nav>

                        <div className={styles.sidebarCta}>
                            <h3>DeÄŸerlendirme Randevusu</h3>
                            <p>Panik ataklarÄ±nÄ±z iÃ§in Ankara Eryaman'da klinik deÄŸerlendirmesi yapÄ±n.</p>
                            <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Randevu Al</Link>
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
                            <h4>Ä°lgili Hizmetler & KÃ¼meler</h4>
                            <ul className={styles.sidebarLinks}>
                                <li><Link href="/hizmetler/anksiyete">Anksiyete Hizmeti</Link></li>
                                <li><Link href="/hizmetler/depresyon">Depresyon Psikiyatrisi</Link></li>
                                <li><Link href="/hizmetler/uyku-bozukluklari">Gece ve Uyku ZorluÄŸu</Link></li>
                                <li><Link href="/blog/panik-atak">Panik Atak Blog (TÃ¼mÃ¼)</Link></li>
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
                            "name": "Panik Atak DeÄŸerlendirmesi",
                            "url": "https://drabdullahmaras.com/hizmetler/panik-atak",
                            "about": {
                                "@type": "MedicalCondition",
                                "name": "Panic Disorder",
                                "alternateName": "Panik BozukluÄŸu"
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
                                { "@type": "ListItem", "position": 3, "name": "Panik Atak", "item": "https://drabdullahmaras.com/hizmetler/panik-atak" }
                            ]
                        }
                    ]
                })
            }} />
        </>
    );
}
