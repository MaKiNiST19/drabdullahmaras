import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon/page.module.css';

export const metadata: Metadata = {
    title: 'Ankara Eryaman Uyku BozukluklarÄ± DeÄŸerlendirmesi | Uzm. Dr. Abdullah MaraÅŸ',
    description:
        'Uykusuzluk, gece uyanma ve uyku kalitesi sorunlarÄ± hakkÄ±nda bilgilendirme ve Eryamanâ€™da psikiyatrik deÄŸerlendirme sÃ¼reci.',
    alternates: { canonical: 'https://drabdullahmaras.com/hizmetler/uyku-bozukluklari' },
    openGraph: {
        title: 'Ankara Eryamanâ€™da Uyku BozukluklarÄ± DeÄŸerlendirmesi',
        description: 'Uykusuzluk, gece uyanma ve uyku kalitesi sorunlarÄ± hakkÄ±nda bilgilendirme ve Eryamanâ€™da psikiyatrik deÄŸerlendirme sÃ¼reci.',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Uyku bozukluÄŸu nedir?',
        answer: 'Uyku bozukluÄŸu, kiÅŸinin uykuya dalmasÄ±nÄ±, uykuyu sÃ¼rdÃ¼rmesini veya dinlendirici bir uyku almasÄ±nÄ± engelleyerek gÃ¼nlÃ¼k yaÅŸam iÅŸlevselliÄŸini bozan klinik psikiyatrik bir durumdur. Belirtiler kiÅŸiden kiÅŸiye deÄŸiÅŸebilir.',
    },
    {
        question: 'Uykusuzluk neden olur?',
        answer: 'Uykusuzluk (insomnia); aÅŸÄ±rÄ± stres, Ã§Ã¶zÃ¼lemeyen iÃ§sel kaygÄ±lar, vardiyalÄ± Ã§alÄ±ÅŸma dÃ¼zeni, aÅŸÄ±rÄ± kafein tÃ¼ketimi veya gizli bir depresyonun yansÄ±masÄ± olarak ortaya Ã§Ä±kabilir.',
    },
    {
        question: 'Gece uyanma normal mi?',
        answer: 'Gece boyunca kÄ±sa sÃ¼reli 1-2 uyanÄ±ÅŸ fizyolojik olabilir. Ancak uyandÄ±ÄŸÄ±nda kalbi Ã§arpÄ±yor, saatlerce "Gece sÃ¼rekli uyanÄ±yorum" diyerek yatakta dÃ¶nÃ¼lÃ¼yorsa, bu klinik yansÄ±manÄ±n psikiyatrik gÃ¶rÃ¼ÅŸme ile deÄŸerlendirilmesi gerekir.',
    },
    {
        question: 'Uyuyamamak psikolojik mi?',
        answer: 'BÃ¼yÃ¼k oranda Ã¶yledir. Fiziksel bir aÄŸrÄ± veya solunum (apne) sorunu yoksa; "YataÄŸa giriyorum ama uyku gelmiyor" ÅŸikayetinin altÄ±nda Ã§oÄŸunlukla zihnin gÃ¼n iÃ§indeki stresi gece yataÄŸa taÅŸÄ±masÄ± (anksiyete) yatmaktadÄ±r.',
    },
    {
        question: 'Uyku bozukluÄŸu kendi kendine geÃ§er mi?',
        answer: 'GeÃ§ici stres dÃ¶nemlerinde birkaÃ§ gÃ¼nlÃ¼k uykusuzluklar normale dÃ¶nebilir. Ancak haftalar sÃ¼ren kronik uyku bÃ¶lÃ¼nmeleri profesyonel destek (bireysel deÄŸerlendirme) olmadan genellikle sarmal haline gelerek aÄŸÄ±rlaÅŸÄ±r.',
    },
    {
        question: 'Uyku iÃ§in hangi doktora gidilir?',
        answer: 'Uykuya dalma, sÃ¼rdÃ¼rme ve uykudan yorgun kalkma ÅŸikayetlerinin arka planÄ±nda organik (KBB/GÃ¶ÄŸÃ¼s) bir hastalÄ±k yoksa, tespiti ve dÃ¼zenlenmesi Ruh SaÄŸlÄ±ÄŸÄ± ve HastalÄ±klarÄ± (Psikiyatri) doktorlarÄ±nca gerÃ§ekleÅŸtirilir.',
    },
    {
        question: 'Uyku sorunu depresyon belirtisi mi?',
        answer: 'Evet. Ã–zellikle sabahÄ±n Ã§ok erken saatlerinde (Ã¶rneÄŸin 04:00) uyanÄ±p tekrar uykuya dalamamak ve derin bir Ã§Ã¶kkÃ¼nlÃ¼k hissetmek, klasik majÃ¶r depresyon tablosunun majÃ¶r habercilerinden biridir.',
    },
    {
        question: 'Eryamanâ€™da uyku deÄŸerlendirmesi nasÄ±l yapÄ±lÄ±r?',
        answer: 'Ankara Eryamanâ€™da faaliyet gÃ¶steren kliniÄŸimizde yetiÅŸkinlere Ã¶zel psikiyatrik muayene ile uykusuzluÄŸun altÄ±nda yatan kaygÄ± veya depresif unsurlar bireysel ÅŸekilde Ã¶ykÃ¼lenerek yapÄ±landÄ±rÄ±lÄ±r.',
    },
];

export default function UykuBozukluklariPillarPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroBg}><div className={styles.heroOrb}></div></div>
                <div className={`container ${styles.heroContent}`}>
                    <Link href="/hizmetler" className={styles.backLink}>â† TÃ¼m DeÄŸerlendirme AlanlarÄ±</Link>
                    <span className={styles.heroIcon}>ğŸŒ™</span>
                    <h1>Ankara Eryamanâ€™da Uyku BozukluklarÄ± DeÄŸerlendirmesi</h1>
                    <p className={styles.heroDesc}>
                        "Gece sÃ¼rekli uyanÄ±yorum", "Sabaha karÅŸÄ± gÃ¶zÃ¼m aÃ§Ä±lÄ±yor" ya da "YataÄŸa giriyorum ama uyku gelmiyor"
                        ÅŸeklindeki feryatlar; geÃ§ici yorgunluktan ziyade zihnin arka planÄ±ndaki gizli stres, depresyon veya anksiyetenin
                        en net gÃ¶stergesidir. SaÄŸlÄ±klÄ± bir psikiyatrik gÃ¶rÃ¼ÅŸme ile uykunun dinlendirici doÄŸasÄ±na dÃ¶nÃ¼n.
                    </p>
                    <div className={styles.author}>
                        <div className={styles.authorIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <div><strong>Uzm. Dr. Abdullah MaraÅŸ</strong><span>Ruh SaÄŸlÄ±ÄŸÄ± (Psikiyatrist) UzmanÄ±</span></div>
                    </div>

                    <div className="info-banner" style={{ marginTop: 'var(--space-6)' }}>
                        <strong>ğŸ“Œ Bilgilendirme ve Kapsam Notu</strong>
                        Bu sayfa iÃ§eriÄŸi yalnÄ±zca yetiÅŸkin psikiyatrisi kapsamÄ±ndaki Uyku BozukluklarÄ± hakkÄ±nda klinik bilgilendirme saÄŸlar.
                        Metinler Ã§ocuk ve ergen uykusuzluklarÄ±nÄ± kapsamaz. Ä°nternet sayfalarÄ± Ã¼zerinden kesin tedavi vaadi veya standart medikal
                        Ã¶neriler verilemez; tÃ¼m uygulamalar birebir uzman hekim gÃ¶rÃ¼ÅŸmesiyle kiÅŸiye Ã¶zel yapÄ±landÄ±rÄ±lÄ±r.
                    </div>
                </div>
            </section>

            <section className="section">
                <div className={`container ${styles.contentGrid}`}>
                    <article className={styles.article}>

                        <p className={styles.lead}>
                            Ä°nsanoÄŸlu Ã¶mrÃ¼nÃ¼n yaklaÅŸÄ±k Ã¼Ã§te birini uykuda geÃ§irir. SaÄŸlÄ±klÄ± bir uyku; zihinsel ve bedensel
                            yenilenmenin, hafÄ±zanÄ±n onarÄ±mÄ±nÄ±n ve ertesi gÃ¼nkÃ¼ ruh halimizin yegane sigortasÄ±dÄ±r.
                            Ancak gÃ¼nÃ¼mÃ¼zÃ¼n hÄ±zlÄ±, stresli ve aÅŸÄ±rÄ± uyaranlÄ± yetiÅŸkinlik hayatÄ±nda, "uyku" artÄ±k pek Ã§ok birey iÃ§in
                            dinlenilen bir liman deÄŸil, saatlerce yatakta dÃ¶rt dÃ¶nÃ¼len bir Ä±stÄ±rap haline gelmiÅŸtir. "UyuyamÄ±yorum" Ã§Ä±ÄŸlÄ±ÄŸÄ±
                            bir hastalÄ±k deÄŸil; Ã§oÄŸu zaman altta yatan baÅŸka psikiyatrik Ã§Ä±ÄŸlÄ±klarÄ±n yankÄ±sÄ±dÄ±r.
                        </p>

                        <h2 id="uyku-bozuklugu-nedir">Uyku BozukluÄŸu Nedir?</h2>
                        <p>
                            Uyku bozukluÄŸu, kiÅŸinin kalitatif (kalite) veya kantitatif (sÃ¼re) olarak saÄŸlÄ±klÄ± uyku dengesini yitirmesi halidir.
                            KiÅŸi uykuya dalmakta saatlerce sÃ¼re harcayabilir, gece dalar ancak sabaha kadar defalarca tam bir paniÄŸe uyanabilir veya
                            tam tersi gÃ¼n boyu uyuduÄŸu halde yorgun kalkabilir. Bu tablonun yÄ±kÄ±cÄ± etkileri ve sÃ¼resi
                            kiÅŸiden kiÅŸiye deÄŸiÅŸebilir olup, <Link href="/blog/uyku-bozukluklari-nedir">klinik uyku bozukluklarÄ±nÄ±n</Link> tespiti,
                            psikiyatrik aÃ§Ä±dan kritik bir Ã¶neme sahiptir.
                        </p>

                        <h2 id="uykusuzluk-insomnia">Uykusuzluk (Ä°nsomnia) Nedir?</h2>
                        <p>
                            Uyku bozukluklarÄ±nÄ±n kraliÃ§esi olarak bilinen Ä°nsomnia, kiÅŸinin uykuya dalmada gÃ¼Ã§lÃ¼k Ã§ekmesi veya uykuyu sÃ¼rdÃ¼rememesidir.
                            Hasta ya "YataÄŸa giriyorum saatlerce tavana bakÄ±yorum ama uyku gelmiyor" diye sÄ±zlanÄ±r ya da
                            uyur ancak en ufak Ã§Ä±tÄ±rtÄ±da uyanÄ±p bir daha uykuya devam edemez. <Link href="/blog/uykusuzluk-neden-olur">UykusuzluÄŸun nedenleri</Link> arasÄ±nda,
                            kronik yaÅŸam stresi ve iÅŸ baskÄ±sÄ± zirvededir.
                        </p>

                        <h2 id="gece-sik-uyanma">Gece SÄ±k Uyanma Neden Olur?</h2>
                        <p>
                            YataÄŸa rahat girip, gecenin kÃ¶r vakti 3-4 kez kalp Ã§arpÄ±ntÄ±sÄ±yla uyanan hastalar genelde "Benim uykum Ã§ok hafif" diyerek
                            bu durumu normalleÅŸtirir. Oysa <Link href="/blog/gece-sik-uyanma-nedenleri">gece sÄ±k uyanma sorunu</Link>,
                            zihnin gÃ¼n iÃ§inde Ã§Ã¶zemediÄŸi Ã§atÄ±ÅŸmalarÄ± uyku esnasÄ±nda "tehdit" olarak algÄ±layÄ±p adrenalin salgÄ±lamasÄ±yla
                            amigdalanÄ±n zili Ã§almasÄ±ndan ibarettir.
                        </p>

                        <h2 id="uykuya-dalamama">Uykuya Dalamama Sorunu</h2>
                        <p>
                            YastÄ±ÄŸa baÅŸ konduÄŸu an, insanÄ±n kendisiyle baÅŸ baÅŸa kaldÄ±ÄŸÄ± andÄ±r. GÃ¼n iÃ§indeki iÅŸ gÃ¼rÃ¼ltÃ¼sÃ¼ ve tempo susar;
                            iÅŸte tam o an beynin iÃ§inde susturulamayan sesler baÅŸlar. YarÄ±na dair Ã¶denmeyen senetler, eÅŸle edilen kavganÄ±n
                            sÃ¶ylenmemiÅŸ sÃ¶zleri veya <Link href="/hizmetler/eriskin-dehb">EriÅŸkin DEHB</Link> olan hastanÄ±n bitmek
                            bilmeyen fikir uÃ§uÅŸmalarÄ± hastayÄ± esir alÄ±r. <Link href="/blog/uykuya-dalamama-sorunu">Uykuya dalmak</Link> imkansÄ±zlaÅŸÄ±r.
                        </p>

                        <h2 id="sabah-erken-uyanma">Sabah Erken Uyanma (Terminal Ä°nsomnia)</h2>
                        <p>
                            Saat 03:00 ya da 04:00 sularÄ±nda aniden bir aÄŸÄ±rlÄ±kla gÃ¶zlerini aÃ§an ve gÃ¼neÅŸ doÄŸana kadar yatakta kÄ±vranan hasta,
                            tipik "Terminal Ä°nsomnia" yaÅŸÄ±yordur. "Sabaha karÅŸÄ± gÃ¶zÃ¼m aÃ§Ä±lÄ±yor ve cin gibi oluyorum ama
                            kendimi Ã§ok kÃ¶tÃ¼ hissediyorum" sÃ¶ylemi, psikiyatride aÄŸÄ±r bir ruhsal tablonun acil klinik sinyali olarak kabul edilir.
                        </p>

                        <h2 id="asiri-uyuma">AÅŸÄ±rÄ± Uyuma (Hipersomnia)</h2>
                        <p>
                            Sadece uyuyamamak deÄŸil, gereÄŸinden Ã§ok fazla uyuyup yine de uyanamamak da klinik bir konudur.
                            KiÅŸinin gÃ¼nde 12-14 saat uyumasÄ±na raÄŸmen kendini dayak yemiÅŸ gibi bitkin hissettiÄŸi bu <Link href="/blog/asiri-uyuma-hipersomnia-nedir">hipersomnia sÃ¼reÃ§leri</Link>; bedenin
                            dÄ±ÅŸ dÃ¼nyadan, stresten ve mevcut acÄ±larÄ±ndan kaÃ§mak iÃ§in kullandÄ±ÄŸÄ± biyolojik bir "kapanma" yani savuÅŸturma metodudur.
                        </p>

                        <h2 id="kaygi-ve-uyku">KaygÄ± ve Uyku Ä°liÅŸkisi</h2>
                        <p>
                            Ä°nsan beyni evrimsel olarak "tehlike altÄ±ndayken" uyumamak Ã¼zere programlanmÄ±ÅŸtÄ±r. Ormanda kaplan sesini
                            duyan bir insan nasÄ±l uyumazsa; gÃ¼nÃ¼mÃ¼zde faturasÄ±nÄ± Ã¶deyemeyen veya iflas etmekte olan
                            bir <Link href="/hizmetler/anksiyete">Anksiyete hastasÄ±</Link> da beynindeki "hayali kaplan"
                            (stres ve felaket beklentisi) sebebiyle uyuyamaz. GÃ¼venlik hissi olmadan, beyin kendini yenilenme moduna kapatamaz.
                        </p>

                        <h2 id="depresyon-ve-uyku">Depresyon ve Uyku Ä°liÅŸkisi</h2>
                        <p>
                            MajÃ¶r <Link href="/hizmetler/depresyon">Ã§Ã¶kkÃ¼nlÃ¼k (depresyon)</Link> yaÅŸayan eriÅŸkin hastalarÄ±n neredeysre
                            tamamÄ±nda uyku mimarisi yerle bir olmuÅŸtur. Hasta ya hiÃ§ bitmeyen karanlÄ±k dÃ¼ÅŸÃ¼nceler yÃ¼zÃ¼nden
                            "sabaha karÅŸÄ± gÃ¶zÃ¼m aÃ§Ä±lÄ±yor" der; ya da dÄ±ÅŸ dÃ¼nyayla olan tÃ¼m baÄŸÄ±nÄ± kopardÄ±ÄŸÄ± iÃ§in 24 saatin 20 saatini
                            yataÄŸÄ±n iÃ§inde saklanarak geÃ§irir.
                        </p>

                        <h2 id="panik-atak-uyanma">Panik Atak ve Gece Uyanma</h2>
                        <p>
                            YataÄŸa girildiÄŸinde dÄ±ÅŸ seslerin kesilmesiyle kiÅŸi tamamen kendi kalp atÄ±ÅŸÄ±na, iÃ§ organlarÄ±nÄ±n ritmine odaklanÄ±r.
                            <Link href="/hizmetler/panik-atak">Panik atak yatkÄ±nlÄ±ÄŸÄ±</Link> olan bir yetiÅŸkin uykuya daldÄ±ktan
                            1-2 saat sonra derin bir nefes darlÄ±ÄŸÄ±, terleme ve "Ã¶lÃ¼yorum" dehÅŸetiyle uykudan uyanÄ±r (Gece Panik AtaÄŸÄ±).
                            Bu hasta ertesi gÃ¼n yataÄŸa gitmekten (AynÄ± ÅŸeyleri yaÅŸamaktan) korktuÄŸu iÃ§in uykuya bÃ¼yÃ¼k bir direnÃ§ gÃ¶sterir.
                        </p>

                        <h2 id="uyku-hijyeni">Uyku Hijyeni Nedir?</h2>
                        <p>
                            Odadaki her ÅŸeyin uykuya hizmet etmesi kuralÄ±dÄ±r. <Link href="/blog/uyku-hijyeni-nasil-saglanir">Uyku hijyeni kurallarÄ±na</Link> uymayan
                            bir bireyde; karanlÄ±ÄŸÄ±n zayÄ±f olmasÄ±, odanÄ±n gereÄŸinden sÄ±cak veya soÄŸuk tutulmasÄ±, yatÄ±lan yatakta
                            gÃ¼ndÃ¼zleri yemek yenip film izlenmesi gibi davranÄ±ÅŸsal yanlÄ±ÅŸlar, beynin ÅŸartlanmasÄ±nÄ± (Yatak=Uyku komutunu) bozar.
                        </p>

                        <h2 id="ekran-kullanimi">Ekran KullanÄ±mÄ± ve Uyku</h2>
                        <p>
                            Uyuyamayan hastanÄ±n yaptÄ±ÄŸÄ± ilk ÅŸey yatakta dÃ¶nerken eline telefonu almaktÄ±r. Ancak telefon ve tabletlerden
                            salgÄ±lanan "Mavi IÅŸÄ±k", beynin epifiz bezine "Åu an gÃ¼ndÃ¼z vakti, uyanÄ±k olmalÄ±yÄ±z" sinyali gÃ¶nderir.
                            Melatonin (uyku hormonu) salgÄ±sÄ±nÄ± anÄ±nda kesen mavi ekran Ä±ÅŸÄ±klarÄ±, uykusuzluÄŸu en Ã§ok perÃ§inleyen zehirli dÃ¶ngÃ¼dÃ¼r.
                        </p>

                        <h2 id="is-hayati">Ä°ÅŸ HayatÄ± ve Uyku DÃ¼zensizliÄŸi</h2>
                        <p>
                            SÃ¼rekli vardiya deÄŸiÅŸtiren hastane Ã§alÄ±ÅŸanlarÄ±, gÃ¼venlik gÃ¶revlileri veya gece Ã§alÄ±ÅŸan plaza yÃ¶neticilerinde;
                            vÃ¼cudun doÄŸal biyoritmi (sirkadiyen ritim) tepetaklak olur. Hastalar hafta sonu bile normal
                            saatte uyuyamaz ve haftalar ilerledikÃ§e bu kronik yorgunluk doÄŸrudan tÃ¼kenmiÅŸlik sendromuna yol aÃ§ar.
                        </p>

                        <h2 id="gunluk-yasama-etkisi">Uyku BozukluklarÄ± GÃ¼nlÃ¼k YaÅŸamÄ± NasÄ±l Etkiler?</h2>
                        <p>
                            Kronik uykusuzluÄŸun yansÄ±masÄ±, bir iki bardak sert kahveyle atlatÄ±lacak kadar hafif deÄŸildir. Uykusunu
                            alamayan eriÅŸkin birey; trafikte sinir krizleri geÃ§irir, en ufak iletiÅŸim hatalarÄ±nda eÅŸine baÄŸÄ±rÄ±r,
                            iÅŸ yerinde hafÄ±za sorunlarÄ± yÃ¼zÃ¼nden sÃ¼rekli hatalar yapar. En nihayetinde o masum sayÄ±lan uyku eksikliÄŸi,
                            iÅŸten kovulmaya veya evliliÄŸin bitimine giden kocaman bir stresi kuluÃ§kada tutar.
                        </p>

                        <h2 id="psikiyatri-degerlendirmesi">Ne Zaman Psikiyatri DeÄŸerlendirmesi DÃ¼ÅŸÃ¼nÃ¼lmeli?</h2>
                        <p>
                            Åayet 3 gÃ¼nden uzun, 2 haftadan fazladÄ±r "yataÄŸa girip uyuyamamak" veya uyuyup "sÃ¼rekli bitkin
                            ve uykusuz kalkmak" sÃ¶z konusuysa; bunun Ã¼zerine evdeki veya iÅŸteki kaliteniz dip yapÄ±yorsa,
                            oraya bir uzman mÃ¼dahalesi ÅŸarttÄ±r. ReÃ§etesiz internet haplarÄ± veya komÅŸu tavsiyeleri bitkisel
                            Ã§aylarla Ã§Ã¶zÃ¼lemeyecek bir nÃ¶robiyolojik alevlenme baÅŸlamÄ±ÅŸtÄ±r.
                        </p>

                        <h2 id="eryaman-sureci">Ankara Eryamanâ€™da Uyku DeÄŸerlendirme SÃ¼reci</h2>
                        <p>
                            Bir insanÄ±n uykusunu kaybetmesi, aslÄ±nda ruhi dengesini (terazisini) kaybetmesiyle eÅŸdeÄŸerdir.
                            Ankara Eryaman (ve BatÄ±kent, Altay Mahallesi, Etimesgut aÄŸÄ±nda) hizmet saÄŸlayan Uzm. Dr. Abdullah MaraÅŸ; uyuyamayan eriÅŸkinleri
                            standart ezberlerle deÄŸil, uykuyu kaÃ§Ä±ran "Ana yangÄ±nÄ±n nerede olduÄŸunu (Depresyon mu, Anksiyete mi, Travma mÄ±)"
                            bulmak Ã¼zerine kurgulu, detaylÄ± klinik <Link href="/randevu">Ankara Eryaman uyku bozukluklarÄ± deÄŸerlendirme sÃ¼reci</Link> ile inceler.
                            YapÄ±lan psikiyatrik gÃ¶rÃ¼ÅŸme ile beraber o eÅŸsiz uyku tekrar biyolojinizle kavuÅŸturulur.
                        </p>

                        <div className={styles.faqSection} id="sss">
                            <h2>SÄ±k Sorulan Sorular</h2>
                            <FAQSection items={faqItems} />
                        </div>

                        <div className={styles.articleCta}>
                            <h3>Uykusuz Gecelerinize Son Verin</h3>
                            <p>Ankara Eryaman'da yetkin klinik yaklaÅŸÄ±mÄ±mÄ±zla uykusuzluÄŸun altÄ±ndaki psikiyatrik zemini Ã§Ã¶zÃ¼mleyelim.</p>
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
                                <li><a href="#uyku-bozuklugu-nedir">Uyku BozukluÄŸu Nedir?</a></li>
                                <li><a href="#uykusuzluk-insomnia">Ä°nsomnia (Uyuyamamak)</a></li>
                                <li><a href="#gece-sik-uyanma">Gece SÄ±k Uyanmak</a></li>
                                <li><a href="#uykuya-dalamama">Uykuya Dalamama</a></li>
                                <li><a href="#sabah-erken-uyanma">Sabah Erken Uyanmak</a></li>
                                <li><a href="#asiri-uyuma">AÅŸÄ±rÄ± Uyuma (Hipersomnia)</a></li>
                                <li><a href="#kaygi-ve-uyku">KaygÄ± Etkisi</a></li>
                                <li><a href="#depresyon-ve-uyku">Depresyon Etkisi</a></li>
                                <li><a href="#panik-atak-uyanma">Gece Panik AtaÄŸÄ±</a></li>
                                <li><a href="#uyku-hijyeni">Uyku Hijyeni</a></li>
                                <li><a href="#ekran-kullanimi">Ekran KullanÄ±mÄ±</a></li>
                                <li><a href="#is-hayati">Ä°ÅŸ YaÅŸamÄ± Etkileri</a></li>
                                <li><a href="#gunluk-yasama-etkisi">YaÅŸam Kalitesi YÄ±kÄ±mÄ±</a></li>
                                <li><a href="#psikiyatri-degerlendirmesi">Ne Zaman Hekime Gidilmeli?</a></li>
                                <li><a href="#eryaman-sureci">Eryaman Klinik YaklaÅŸÄ±mÄ±</a></li>
                            </ul>
                        </nav>

                        <div className={styles.sidebarCta}>
                            <h3>Doktor DeÄŸerlendirmesi</h3>
                            <p>EriÅŸkin uyku sorunlarÄ±nda profesyonel psikiyatrik (Ankara) klinik randevunuz.</p>
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
                            <h4>Ä°lgili Uyku Ä°Ã§erikleri</h4>
                            <ul className={styles.sidebarLinks}>
                                <li><Link href="/blog/uyku-bozukluklari-nedir">Uyku BozukluÄŸu Ã–zeti</Link></li>
                                <li><Link href="/blog/uykusuzluk-neden-olur">UykusuzluÄŸun Ana Nedenleri</Link></li>
                                <li><Link href="/blog/gece-sik-uyanma-nedenleri">Neden SÃ¼rekli UyanÄ±rÄ±z?</Link></li>
                                <li><Link href="/blog/uyku-hijyeni-nasil-saglanir">Uyku Kalitesini ArtÄ±rma</Link></li>
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
                            "name": "Ankara Eryaman Uyku BozukluklarÄ± DeÄŸerlendirmesi",
                            "url": "https://drabdullahmaras.com/hizmetler/uyku-bozukluklari",
                            "about": {
                                "@type": "MedicalCondition",
                                "name": "Sleep Disorder",
                                "alternateName": "Uyku BozukluklarÄ±, Ä°nsomnia, Uykusuzluk"
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
                                { "@type": "ListItem", "position": 3, "name": "Uyku BozukluklarÄ±", "item": "https://drabdullahmaras.com/hizmetler/uyku-bozukluklari" }
                            ]
                        }
                    ]
                })
            }} />
        </>
    );
}
