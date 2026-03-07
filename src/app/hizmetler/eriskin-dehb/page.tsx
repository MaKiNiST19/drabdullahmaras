import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon/page.module.css';

export const metadata: Metadata = {
    title: 'Ankara Eryaman EriÅŸkin DEHB DeÄŸerlendirmesi | Uzm. Dr. Abdullah MaraÅŸ',
    description:
        'EriÅŸkin DEHB belirtileri, dikkat daÄŸÄ±nÄ±klÄ±ÄŸÄ± ve odak sorunlarÄ± hakkÄ±nda bilgilendirme ve Eryamanâ€™da psikiyatrik deÄŸerlendirme sÃ¼reci.',
    alternates: { canonical: 'https://drabdullahmaras.com/hizmetler/eriskin-dehb' },
    openGraph: {
        title: 'Ankara Eryamanâ€™da EriÅŸkin DEHB DeÄŸerlendirmesi',
        description: 'EriÅŸkin DEHB belirtileri, dikkat daÄŸÄ±nÄ±klÄ±ÄŸÄ± ve erteleme dÃ¶ngÃ¼leri hakkÄ±nda yetiÅŸkin psikiyatrik deÄŸerlendirme.',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'EriÅŸkin DEHB nedir?',
        answer: 'EriÅŸkin DEHB, kiÅŸinin beynindeki dikkat, odaklanma, dÃ¼rtÃ¼ kontrolÃ¼ ve zaman yÃ¶netiminden sorumlu nÃ¶robiyolojik sistemlerin farklÄ± bir iÅŸleyiÅŸ gÃ¶stermesi sonucu ortaya Ã§Ä±kan yapÄ±sal bir tablodur. Bireysel deÄŸerlendirme ile ayÄ±rt edilir.',
    },
    {
        question: 'DEHB belirtileri nelerdir?',
        answer: 'Dikkati sÃ¼rdÃ¼rmekte zorlanma, baÅŸlanÄ±lan iÅŸleri bitirememe, erteleme dÃ¶ngÃ¼sÃ¼ne girme, odaklanma sorunlarÄ± ve bazen bedensel/zihinsel hiperaktivite (huzursuzluk) ana belirtilerdir.',
    },
    {
        question: 'EriÅŸkin DEHB geÃ§er mi?',
        answer: 'EriÅŸkin DEHB yapÄ±sal (nÃ¶rogeliÅŸimsel) bir durumdur; belirtilerin ÅŸiddeti kiÅŸiden kiÅŸiye deÄŸiÅŸebilir. YaÅŸla birlikte bazÄ± hiperaktif belirtiler azalsa da, dikkat sorunlarÄ± sÃ¼rebilir; klinik izlem ve stratejilerle etkileri en aza indirilir.',
    },
    {
        question: 'DEHB ile dikkat daÄŸÄ±nÄ±klÄ±ÄŸÄ± aynÄ± mÄ±?',
        answer: 'HayÄ±r. Herkes zaman zaman stres veya uyku sorunlarÄ± nedeniyle geÃ§ici dikkat daÄŸÄ±nÄ±klÄ±ÄŸÄ± yaÅŸayabilir. Oysa DEHB, kiÅŸinin tÃ¼m yaÅŸam alanlarÄ±nÄ± sÃ¼rekli ve derinden etkileyen, yapÄ±sal ve nÃ¶robiyolojik bir sÃ¼rekliliktir.',
    },
    {
        question: 'DEHB iÅŸ hayatÄ±nÄ± etkiler mi?',
        answer: 'Evet. Son teslim tarihlerini kaÃ§Ä±rma, toplantÄ±larda odaklanamama, sÃ¼rekli iÅŸ deÄŸiÅŸtirme veya baÅŸlanan projeleri tamamlayamama gibi sorunlarla kariyer geliÅŸimini olumsuz etkileyebilir.',
    },
    {
        question: 'EriÅŸkin DEHB nasÄ±l anlaÅŸÄ±lÄ±r?',
        answer: 'YetiÅŸkinlikte DEHB, Ã§oÄŸunlukla kiÅŸinin sosyal ve mesleki hayatÄ±nÄ±n aksamasÄ±, iliÅŸkilerdeki tahammÃ¼lsÃ¼zlÃ¼kleri ve iÃ§sel huzursuzluk ÅŸikayetlerinin klinik bir hekim tarafÄ±ndan Ã¶ykÃ¼lenmesi (psikiyatrik gÃ¶rÃ¼ÅŸme) ile anlaÅŸÄ±lÄ±r.',
    },
    {
        question: 'DEHB iÃ§in hangi doktora gidilir?',
        answer: 'YetiÅŸkinlerde bu tÃ¼r nÃ¶robiyolojik dikkat ve dÃ¼rtÃ¼ sorunlarÄ±nÄ±n teÅŸhisi, ayrÄ±mÄ± ve izlem programÄ± Ruh SaÄŸlÄ±ÄŸÄ± ve HastalÄ±klarÄ± (Psikiyatri) doktorlarÄ±nca gerÃ§ekleÅŸtirilir.',
    },
    {
        question: 'Eryamanâ€™da DEHB deÄŸerlendirmesi nasÄ±l yapÄ±lÄ±r?',
        answer: 'Ankara Eryamanâ€™da Uzm. Dr. Abdullah MaraÅŸ ile yapÄ±lacak bireysel klinik konsÃ¼ltasyonlarla kiÅŸinin Ã¶ykÃ¼sÃ¼ alÄ±nÄ±r, diÄŸer psikiyatrik durumlardan ayrÄ±mÄ± yapÄ±lÄ±r ve gereksinimleri bireysel olarak yapÄ±landÄ±rÄ±lÄ±r.',
    },
];

export default function EriskinDehbPillarPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroBg}><div className={styles.heroOrb}></div></div>
                <div className={`container ${styles.heroContent}`}>
                    <Link href="/hizmetler" className={styles.backLink}>â† TÃ¼m DeÄŸerlendirme AlanlarÄ±</Link>
                    <span className={styles.heroIcon}>ğŸ¯</span>
                    <h1>Ankara Eryamanâ€™da EriÅŸkin DEHB DeÄŸerlendirmesi</h1>
                    <p className={styles.heroDesc}>
                        YetiÅŸkinlik dÃ¶neminde yakamÄ±zÄ± bÄ±rakmayan o bitmeyen "SÃ¼rekli erteleyip son dakikaya bÄ±rakÄ±yorum" veya
                        "ToplantÄ±larda dalÄ±p gidiyorum" dÃ¶ngÃ¼leri, karakter deÄŸil tÄ±bbi bir tablonun iÅŸareti olabilir.
                        Bireysel deÄŸerlendirme ve klinik izlem ile potansiyelinizi engelleyen baÄŸlarÄ± Ã§Ã¶zelim.
                    </p>
                    <div className={styles.author}>
                        <div className={styles.authorIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <div><strong>Uzm. Dr. Abdullah MaraÅŸ</strong><span>Ruh SaÄŸlÄ±ÄŸÄ± (Psikiyatrist) UzmanÄ±</span></div>
                    </div>

                    <div className="info-banner" style={{ marginTop: 'var(--space-6)' }}>
                        <strong>ğŸ“Œ Bilgilendirme ve Kapsam Notu</strong>
                        Bu sayfa iÃ§eriÄŸi yetiÅŸkin psikiyatrisi kapsamÄ±ndaki EriÅŸkin DEHB (Dikkat EksikliÄŸi ve Hiperaktivite BozukluÄŸu) hakkÄ±ndaki sÃ¼reÃ§leri ele almaktadÄ±r. KliniÄŸimizde <strong>Ã§ocuk ve ergenlere yÃ¶nelik</strong> geliÅŸimsel psikiyatrik deÄŸerlendirme sÃ¼reÃ§leri de yÃ¼rÃ¼tÃ¼lmekte olup, Ã§ocuk-ergen randevularÄ± iÃ§in de baÅŸvuruda bulunabilirsiniz.
                    </div>
                </div>
            </section>

            <section className="section">
                <div className={`container ${styles.contentGrid}`}>
                    <article className={styles.article}>

                        <p className={styles.lead}>
                            Ã‡oÄŸu insan Dikkat EksikliÄŸi ve Hiperaktivite BozukluÄŸu'nun (DEHB) sadece
                            bir okul veya Ã§ocukluk problemi olduÄŸunu sanÄ±r. Oysa yetiÅŸkinlik yÄ±llarÄ±nda
                            da beynin yÃ¼rÃ¼tÃ¼cÃ¼ iÅŸlevlerindeki bu nÃ¶robiyolojik farklÄ±lÄ±k tam gaz devam eder.
                            "Bir iÅŸe baÅŸlayÄ±p bitiremiyorum", "FaturalarÄ± yatÄ±rmayÄ± sÃ¼rekli unutuyorum" ya da "OdaklanamÄ±yorum"
                            yakÄ±nmalarÄ±, yetiÅŸkinlerin kariyerlerini ve evliliklerini sabote eden en sessiz,
                            ancak en etkili psikiyatrik zorluklardan biridir.
                        </p>

                        <h2 id="eriskin-dehb-nedir">EriÅŸkin DEHB Nedir?</h2>
                        <p>EriÅŸkin DEHB (Dikkat EksikliÄŸi ve Hiperaktivite BozukluÄŸu), kiÅŸinin beynindeki dikkat, odaklanma, zaman yÃ¶netimi ve dÃ¼rtÃ¼ kontrolÃ¼ gibi yÃ¼rÃ¼tÃ¼cÃ¼ iÅŸlevlerde nÃ¶robiyolojik farklÄ±lÄ±klara dayalÄ± klinik bir tablodur. Bu durum yetiÅŸkinlerin mesleki, sosyal ve iliÅŸkisel yaÅŸamlarÄ±nda kronik zorluklara yol aÃ§abilmekle birlikte belirtilerin ÅŸiddeti kiÅŸiden kiÅŸiye deÄŸiÅŸebilir.</p>

                        <h3>DEHB bir hastalÄ±k mÄ±dÄ±r yoksa yapÄ±sal mÄ±dÄ±r?</h3>
                        <p>DEHB hem nÃ¶robiyolojik bir bozukluk olarak tÄ±bbi literatÃ¼rde yer alÄ±r hem de beynin bilgi iÅŸlemleme ve frontal lob yapÄ±sÄ±ndaki farklÄ±lÄ±klara dayalÄ± kronik bir yapÄ±sal durumdur.</p>

                        <h3>EriÅŸkin DEHB tamamen geÃ§er mi?</h3>
                        <p>YapÄ±sal (nÃ¶rogeliÅŸimsel) bir tablo olduÄŸu iÃ§in tamamen yok olmak (geÃ§mek) yerine; birebir psikiyatrik gÃ¶rÃ¼ÅŸme ve stratejilerle belirtiler yatÄ±ÅŸtÄ±rÄ±larak yetiÅŸkinin hayat kalitesi yÃ¼ksek standartlara taÅŸÄ±nÄ±r.</p>

                        <p>
                            EriÅŸkinlikteki tablo, hiperaktif motor belirtilerin azalmasÄ±na karÅŸÄ±n daha Ã§ok
                            "iÃ§sel bir huzursuzluk" ve "organize olamama" Ã¼zerinden ÅŸekillenir. EriÅŸkin
                            bireyin dÄ±ÅŸarÄ±dan sakin gÃ¶rÃ¼nmesi, arka planda zihninin saniyede milyonlarca farklÄ±
                            sekmeye atlamadÄ±ÄŸÄ± anlamÄ±na gelmez.
                        </p>

                        <h2 id="dehb-cocuklukta-mi-baslar">DEHB Ã‡ocuklukta mÄ± BaÅŸlar?</h2>
                        <p>
                            GÃ¼ncel tÄ±bbi verilere gÃ¶re, DEHB kÃ¶keni nÃ¶rogeliÅŸimsel bir sÃ¼rece dayanÄ±r. Yani yapÄ± aslÄ±nda
                            erken yÄ±llarda mevcuttur. Ancak pek Ã§ok yetiÅŸkin, zekÃ¢ kapasitesi veya yÃ¼ksek destekli
                            aile ortamÄ± sayesinde Ã§ocukluk yÄ±llarÄ±ndaki kusurlarÄ± kamufle etmeyi baÅŸarmÄ±ÅŸtÄ±r. Sorunlar,
                            Ã¼niversite, evlilik veya sorumluluklarÄ±n ciddi ÅŸekilde arttÄ±ÄŸÄ± iÅŸ hayatÄ±nda "kaptanÄ±n kontrolÃ¼
                            kaybetmesiyle" su yÃ¼zÃ¼ne Ã§Ä±kar. Bu durum, EriÅŸkin DEHB'nin sanki "birdenbire ortaya Ã§Ä±ktÄ±ÄŸÄ±"
                            yanÄ±lsamasÄ±nÄ± doÄŸurur.
                        </p>

                        <h2 id="eriskinlerde-dehb-belirtileri">EriÅŸkinlerde DEHB Belirtileri Nelerdir?</h2>
                        <p>EriÅŸkin DEHB belirtileri, Ã§ocukluktaki fiziksel haraketlilikten ziyade gÃ¶revleri baÅŸlatamama, odaklanma sorunlarÄ± ve organizasyon yetersizliÄŸi ile kendini gÃ¶sterir. UnutkanlÄ±k, Ã¶ncelik sÄ±rasÄ±nÄ± belirleyememe, dinlemiyormuÅŸ gibi gÃ¶rÃ¼nme ve Ã§abuk Ã¶fkelenme yetiÅŸkinlerde en sÄ±k gÃ¶zlenen bulgulardÄ±r ve bunlarÄ±n yaÅŸam kalitesini bozma dÃ¼zeyi kiÅŸiden kiÅŸiye deÄŸiÅŸebilir.</p>
                        <ul>
                            <li>Gereken gÃ¶revleri sÃ¼rekli erteleme</li>
                            <li>Odaklanamama ve Ã§abuk sÄ±kÄ±lma</li>
                            <li>Randevu ve son gÃ¼nleri unutma</li>
                            <li>KarÅŸÄ±sÄ±ndakini dinlemekte zorlanma</li>
                            <li>Ä°Ã§sel, sÃ¼rekli bir huzursuzluk hissi</li>
                        </ul>

                        <h3>DEHB olup olmadÄ±ÄŸÄ±mÄ± nasÄ±l anlarÄ±m?</h3>
                        <p>SÃ¼rekli potansiyelinizin altÄ±nda kaldÄ±ÄŸÄ±nÄ±zÄ±, bir iÅŸe odaklanmanÄ±zÄ±n ancak "son dakika krizi" ile olabildiÄŸini dÃ¼ÅŸÃ¼nÃ¼yorsanÄ±z, bir psikiyatrik deÄŸerlendirme faydalÄ± olacaktÄ±r.</p>

                        <h3>EriÅŸkin DEHB genetik midir?</h3>
                        <p>Evet, Ã¶nemli bir biyolojik ve genetik temeli vardÄ±r; genellikle aile bireylerinde benzer dÃ¼rtÃ¼sellik, odak sorunlarÄ± veya erteleme ÅŸikayetleri olan yetiÅŸkinlerde daha sÄ±k rastlanÄ±r.</p>

                        <h2 id="dikkat-daginikligi">Dikkat DaÄŸÄ±nÄ±klÄ±ÄŸÄ±</h2>
                        <p>
                            "Sanki beynimde aynÄ± anda 50 sekme aÃ§Ä±k ve benim hangisini okuyacaÄŸÄ±m hakkÄ±nda hiÃ§bir
                            fikrim yok" ifadesi, bu tabloyu yaÅŸayan birÃ§ok kiÅŸinin ortak Ã¶zetidir. Bir e-posta yazarken,
                            araya giren bir telefonla bÃ¼tÃ¼n algÄ± savrulur ve saatler sonra o e-postanÄ±n gÃ¶nderilmediÄŸi
                            fark edilir. Buradaki <Link href="/blog/dikkat-daginikligi-mi-dehb-mi">dikkat ve odak sorunlarÄ±</Link>
                            sadece yorgunluktan kaynaklÄ± geÃ§ici bir daÄŸÄ±lma deÄŸil; beynin uyarana (odak sÃ¼rdÃ¼rmeye) yÃ¶nelik kimyasal
                            bÃ¼tÃ¼nlÃ¼ÄŸÃ¼nÃ¼n iÅŸlemesindeki yapÄ±sal zorluktur.
                        </p>

                        <h2 id="erteleme-davranisi">Erteleme DavranÄ±ÅŸÄ± (Procrastination)</h2>
                        <p>
                            EriÅŸkin bireyleri en Ã§ok yÄ±pratan tablolarÄ±n baÅŸÄ±nda gelir. YapÄ±lmasÄ± gereken evraklar,
                            tez Ã§alÄ±ÅŸmasÄ± ya da basit bir e-posta onayÄ± bile zihin tarafÄ±ndan daÄŸ gibi algÄ±lanÄ±r.
                            Hasta bu "aÄŸÄ±r yÃ¼kÃ¼" sÃ¼rekli olarak <Link href="/blog/surekli-erteleme-davranisi-neden-olur">erteleme davranÄ±ÅŸÄ± dÃ¶ngÃ¼sÃ¼</Link> iÃ§ine
                            hapseder. Ancak son dakika, "kriz anÄ±nÄ±n yarattÄ±ÄŸÄ± yÃ¼ksek adrenalin" sayesinde beyin uyarÄ±lÄ±r
                            ve iÅŸ panikle teslim edilir. Bu dÃ¶ngÃ¼ sÃ¼rekli stresi, tÃ¼kenmeyi ve Ã§oÄŸu zaman "SÃ¼rekli
                            erteleyip son dakikaya bÄ±rakÄ±yorum" piÅŸmanlÄ±ÄŸÄ±nÄ± alevlendirir.
                        </p>

                        <h2 id="odaklanma-gucu">Odaklanma GÃ¼Ã§lÃ¼ÄŸÃ¼</h2>
                        <p>
                            KiÅŸi kitap okumak iÃ§in masaya oturur ancak aynÄ± paragrafÄ± beÅŸ kez okumasÄ±na raÄŸmen zihni
                            farklÄ± dÃ¼nyalardadÄ±r. ToplantÄ±lardayken (Ã¶zellikle uyaranÄ±n az olduÄŸu, hareketsiz kalmasÄ±
                            gereken ortamlarda) sanki bir sis bulutu zihnini kaplar. Ã–te yandan, oyun oynamak veya aÅŸÄ±rÄ±
                            ilgilerini Ã§eken kÄ±sa sÃ¼reli bir uyaran (hiper-odak / hyperfocus) sÃ¶z konusu olduÄŸunda ise saatlerce
                            baÅŸÄ±ndan kalkamayabilirler.
                        </p>

                        <h2 id="zaman-yonetimi-sorunu">Zaman YÃ¶netimi Sorunu (Zaman KÃ¶rlÃ¼ÄŸÃ¼)</h2>
                        <p>
                            YetiÅŸkin DEHB'nin klinik belirtilerinden bir diÄŸeri de "zaman kÃ¶rlÃ¼ÄŸÃ¼"dÃ¼r (time blindness).
                            Birey 10 dakikalÄ±k bir gÃ¶revi sanki 1 saatte, 2 saatlik bir gÃ¶revi ise sanki 5 dakikada
                            bitecekmiÅŸ gibi hesaplar. SonuÃ§ her zaman gecikmeler, iptal olan randevular, trafiÄŸe takÄ±lmalar ve
                            buna baÄŸlÄ± "sorumsuz" damgasÄ± yemekle sonlanÄ±r.
                        </p>

                        <h2 id="is-hayatinda-dehb">Ä°ÅŸ HayatÄ±nda DEHB</h2>
                        <p>
                            BÃ¼yÃ¼k projeleri kÃ¼Ã§Ã¼k parÃ§alara bÃ¶lme ve organizasyon eksikliÄŸi, kariyer basamaklarÄ±nÄ±
                            yÄ±kan bir dinamiktir. EriÅŸkin hiperaktivite ve dÃ¼rtÃ¼sellik, toplantÄ±larda Ã§alÄ±ÅŸma arkadaÅŸlarÄ±nÄ±n
                            sÃ¶zÃ¼nÃ¼ bÃ¶lmeye, ani tepkiler vererek Ã§atÄ±ÅŸmalar yaÅŸamaya zemin hazÄ±rlar. Ä°ÅŸ deÄŸiÅŸtirmek
                            veya sÃ¼rekli yeni projelere heyecanla baÅŸlayÄ±p "hiÃ§birini bitirmemek", iÅŸ dÃ¼nyasÄ±nda en
                            bÃ¼yÃ¼k handikap olur. <Link href="/blog/eriskin-dehb-is-hayatini-nasil-etkiler">DEHB'nin mesleki yansÄ±malarÄ±</Link>
                            Ã¶zel bir psikiyatrik yaklaÅŸÄ±m gerektirir.
                        </p>

                        <h2 id="iliskilerde-dehb">Ä°liÅŸkilerde DEHB</h2>
                        <p>
                            Partner tarafÄ±ndan "Beni hiÃ§ dinlemiyor", "SÃ¼rekli unutuyor ve deÄŸer vermiyor" gibi
                            sÃ¶ylemlere fazlaca maruz kalÄ±rlar. KarÅŸÄ±sÄ±ndaki kiÅŸi konuÅŸurken zihni tamamen baÅŸka bir
                            yerdedir. Ev iÃ§indeki daÄŸÄ±nÄ±klÄ±k, faturalarÄ± yatÄ±rmayÄ± erteleme ve fevri karar alma,
                            evliliklerde gÃ¼veni derinden sarsar.
                        </p>

                        <h2 id="dehb-ve-anksiyete-iliskisi">DEHB ve Anksiyete Ä°liÅŸkisi</h2>
                        <p>
                            SÃ¼rekli hata yapma, bir ÅŸeyleri unutma korkusu veya "Yine erteliyorum, baÅŸarÄ±sÄ±z olacaÄŸÄ±m"
                            algÄ±sÄ± zihinde ciddi bir stres barajÄ± oluÅŸturur. Bu durum, kiÅŸinin yaygÄ±n bir <Link href="/hizmetler/anksiyete">anksiyete bozukluÄŸu</Link> veya
                            <Link href="/hizmetler/panik-atak">panik atak geliÅŸimine</Link> uygun zemin sunmasÄ±na sebep olur.
                            Ã–zellikle <Link href="/blog/dehb-ve-anksiyete-arasindaki-iliski">odaklanma gÃ¼Ã§lÃ¼ÄŸÃ¼ ve kaygÄ± iliÅŸkisi</Link>,
                            ikincil ve Ã§ok daha yÄ±kÄ±cÄ± bir kÄ±sÄ±r dÃ¶ngÃ¼ halini alÄ±r.
                        </p>

                        <h2 id="dehb-ve-depresyon-iliskisi">DEHB ve Depresyon Ä°liÅŸkisi</h2>
                        <p>
                            SÃ¼rekli potansiyelinin altÄ±nda kalan, iliÅŸkilerini ve iÅŸlerini berbat eden eriÅŸkin, zamanla
                            iÃ§sel bir yetersizlik hissine sÃ¼rÃ¼klenir. Bu "ben yapamÄ±yorum, tembelim, yetersizim" kurgularÄ±
                            hastayÄ± aÄŸÄ±r bir klinik <Link href="/hizmetler/depresyon">Ã§Ã¶kkÃ¼nlÃ¼ÄŸe (depresyona)</Link> ya da
                            <Link href="/hizmetler/bipolar-bozukluk">duygudurum zÄ±tlÄ±klarÄ±na (bipolar Ã¶ykÃ¼lere)</Link> itebilir.
                        </p>

                        <h2 id="nasil-degerlendirilir">EriÅŸkin DEHB NasÄ±l DeÄŸerlendirilir?</h2>
                        <p>
                            Kan tahlili, MR veya rÃ¶ntgen ile DEHB deÄŸerlendirilemez. SÃ¼reÃ§, bÃ¼tÃ¼nÃ¼yle eriÅŸkin yaÅŸama
                            odaklanmÄ±ÅŸ bir Uzman PsikiyatrÄ±n yapacaÄŸÄ± profesyonel detaylÄ± muayene (klinik gÃ¶rÃ¼ÅŸme),
                            uygun psikometrik deÄŸerlendirmeler ve eriÅŸkin yaÅŸam-geliÅŸim Ã¶ykÃ¼sÃ¼nÃ¼n analizine
                            dayanmaktadÄ±r.
                        </p>

                        <h2 id="ne-zaman-psikiyatri-gorusmesi">Ne Zaman Psikiyatri GÃ¶rÃ¼ÅŸmesi DÃ¼ÅŸÃ¼nÃ¼lmeli?</h2>
                        <p>
                            Åayet sahip olduÄŸunuz erteleme davranÄ±ÅŸlarÄ±, daÄŸÄ±nÄ±klÄ±k, Ã¶fke patlamalarÄ± ve iÅŸleri bitirememe
                            tablosu bir veya birkaÃ§ yaÅŸam alanÄ±nÄ±zÄ± (evliliÄŸiniz, iÅŸiniz veya akademik kariyeriniz gibi)
                            kalÄ±cÄ± olarak bozuyorsa, bu "tembellik" ya da "huy" deÄŸil; hekim gÃ¶rÃ¼ÅŸÃ¼ gerektiren tÄ±bbi bir durumdur.
                        </p>

                        <h2 id="eryaman-degerlendirme">Ankara Eryamanâ€™da EriÅŸkin DEHB DeÄŸerlendirme SÃ¼reci</h2>
                        <p>
                            Ä°ÅŸ hayatÄ±ndaki bitmeyen savrukluk, her projeyi yarÄ±m bÄ±rakmanÄ±n getirdiÄŸi Ã¶zgÃ¼ven kaybÄ±
                            ve zihindeki kaosu yÃ¶netmek iÃ§in, artÄ±k kendinizi suÃ§lamayÄ± bÄ±rakabilirsiniz.
                            Ankara Eryaman (ve baÄŸlÄ± bulunduÄŸu Altay Mh., Etimesgut, BatÄ±kent) odaklÄ± hizmet veren
                            kliniÄŸimizde Uzm. Dr. Abdullah MaraÅŸ, Ã§ocuk, ergen ve yetiÅŸkin tÃ¼m yaÅŸ gruplarÄ±na yÃ¶nelik <Link href="/randevu">Ankara Eryaman DEHB deÄŸerlendirme sÃ¼reci</Link> tasarÄ±sÄ±nÄ±
                            profesyonel olarak uygulamaktadÄ±r.
                        </p>
                        <p>
                            Toplumda sÄ±k kullanÄ±lan "Aman bana da olur" hafife almasÄ±na karÅŸÄ±lÄ±k, DEHB
                            biyolojik-yapÄ±sal bir gerÃ§ektir. Bu gerÃ§eÄŸe uygun, bireysel terapi destekleri
                            ve farmakolojik kÄ±lavuzlukla (bilimsel tÄ±bbi zeminle), hastalarÄ±n kendi
                            potansiyellerinin Ã¼zerindeki kalÄ±n sis tabakasÄ± ortadan kaldÄ±rÄ±labilir.
                        </p>

                        <div className={styles.faqSection} id="sss">
                            <h2>SÄ±k Sorulan Sorular</h2>
                            <FAQSection items={faqItems} />
                        </div>

                        <div className={styles.articleCta}>
                            <h3>Potansiyelinizi Zihin Sisine MahkÃ»m Etmeyin</h3>
                            <p>Ankara Eryaman'da yetkin bir klinik izlem rotasÄ± ile ertelemeye ve dikkat sorunlarÄ±na karÅŸÄ± kendi haritanÄ±zÄ± Ã§Ä±karÄ±n.</p>
                            <Link href="/randevu" className="btn btn--primary btn--lg" style={{ marginTop: 'var(--space-4)' }}>
                                Psikiyatrik GÃ¶rÃ¼ÅŸme Planla â†’
                            </Link>
                        </div>
                    </article>

                    {/* Right: Sidebar */}
                    <aside className={styles.sidebar}>
                        <nav className={styles.sidebarCard}>
                            <h4>Sayfa Rehberi</h4>
                            <ul className={styles.tocList}>
                                <li><a href="#eriskin-dehb-nedir">DEHB Nedir?</a></li>
                                <li><a href="#dehb-cocuklukta-mi-baslar">EriÅŸkinde BaÅŸlar MÄ±?</a></li>
                                <li><a href="#eriskinlerde-dehb-belirtileri">Temel Belirtiler</a></li>
                                <li><a href="#dikkat-daginikligi">Dikkat DaÄŸÄ±nÄ±klÄ±ÄŸÄ±</a></li>
                                <li><a href="#erteleme-davranisi">SÃ¼rÃ¼kle-Ertele BÄ±rak</a></li>
                                <li><a href="#odaklanma-gucu">Odaklanma Sorunu</a></li>
                                <li><a href="#zaman-yonetimi-sorunu">Zaman KÃ¶rlÃ¼ÄŸÃ¼</a></li>
                                <li><a href="#is-hayatinda-dehb">Ä°ÅŸ-Kariyer AlanÄ±</a></li>
                                <li><a href="#iliskilerde-dehb">Evlilik&Ä°kili Ä°liÅŸkiler</a></li>
                                <li><a href="#dehb-ve-anksiyete-iliskisi">Anksiyete Etkisi</a></li>
                                <li><a href="#dehb-ve-depresyon-iliskisi">Depresyona Etkisi</a></li>
                                <li><a href="#nasil-degerlendirilir">NasÄ±l Ä°zlenir?</a></li>
                                <li><a href="#eryaman-degerlendirme">Eryaman Ä°zlem SÃ¼reci</a></li>
                            </ul>
                        </nav>

                        <div className={styles.sidebarCta}>
                            <h3>Doktor DeÄŸerlendirmesi</h3>
                            <p>EriÅŸkin DEHB'de profesyonel psikiyatrik (Ankara) klinik randevunuz.</p>
                            <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Randevu ModÃ¼lÃ¼</Link>
                        </div>

                        <div className={styles.sidebarCard}>
                            <h4>Klinik UzmanÄ±</h4>
                            <div className={styles.doctorCard}>
                                <div className={styles.doctorIcon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                </div>
                                <strong>Uzm. Dr. Abdullah MaraÅŸ</strong>
                                <span>Ruh SaÄŸlÄ±ÄŸÄ± (Psikiyatrist) UzmanÄ±</span>
                                <span>Ankara, Eryaman</span>
                            </div>
                        </div>

                        <div className={styles.sidebarCard}>
                            <h4>DEHB Ä°le Ä°lgili Ä°Ã§erikler</h4>
                            <ul className={styles.sidebarLinks}>
                                <li><Link href="/blog/eriskin-dehb-nedir">GeniÅŸ KapsamlÄ± Bilgi</Link></li>
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
                            "name": "Ankara Eryaman EriÅŸkin DEHB DeÄŸerlendirmesi",
                            "url": "https://drabdullahmaras.com/hizmetler/eriskin-dehb",
                            "about": {
                                "@type": "MedicalCondition",
                                "name": "AttentionDeficitHyperactivityDisorder",
                                "alternateName": "EriÅŸkin DEHB, YetiÅŸkin DEHB"
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
                                { "@type": "ListItem", "position": 3, "name": "EriÅŸkin DEHB", "item": "https://drabdullahmaras.com/hizmetler/eriskin-dehb" }
                            ]
                        }
                    ]
                })
            }} />
        </>
    );
}
