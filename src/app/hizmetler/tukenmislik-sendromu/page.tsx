import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon/page.module.css';

export const metadata: Metadata = {
    title: 'Ankara Eryaman TÃ¼kenmiÅŸlik Sendromu DeÄŸerlendirmesi | Uzm. Dr. Abdullah MaraÅŸ',
    description:
        'Ä°ÅŸ hayatÄ±nda tÃ¼kenmiÅŸlik, motivasyon kaybÄ± ve duygusal yorgunluk hakkÄ±nda bilgilendirme ve Eryamanâ€™da psikiyatrik deÄŸerlendirme sÃ¼reci.',
    alternates: { canonical: 'https://drabdullahmaras.com/hizmetler/tukenmislik-sendromu' },
    openGraph: {
        title: 'Ankara Eryamanâ€™da TÃ¼kenmiÅŸlik Sendromu DeÄŸerlendirmesi',
        description: 'Ä°ÅŸ hayatÄ±nda tÃ¼kenmiÅŸlik, motivasyon kaybÄ± ve duygusal yorgunluk hakkÄ±nda bilgilendirme ve Eryamanâ€™da psikiyatrik deÄŸerlendirme sÃ¼reci.',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'TÃ¼kenmiÅŸlik sendromu nedir?',
        answer: 'AÄŸÄ±r iÅŸ temposu veya baÅŸa Ã§Ä±kÄ±lamayan duygusal yÃ¼kler altÄ±nda, zihnin ve bedenin kronik strese baÄŸlÄ± olarak tÃ¼m uyum yeteneÄŸini yitirdiÄŸi, performansÄ±n Ã§Ã¶ktÃ¼ÄŸÃ¼ psikiyatrik bir tablo olup, ÅŸiddeti kiÅŸiden kiÅŸiye deÄŸiÅŸebilir.',
    },
    {
        question: 'TÃ¼kenmiÅŸlik depresyon mu?',
        answer: 'Depresyon hayatÄ±n geneline yayÄ±lan bir Ã§Ã¶kkÃ¼nlÃ¼k iken tÃ¼kenmiÅŸlik (burnout) Ã§oÄŸunlukla mesleki veya yoÄŸun sorumluluk alanlarÄ±ndan tetiklenen bir duygusal iflastÄ±r. Ancak her ikisi klinik tabloda Ã¶rtÃ¼ÅŸebilir veya birbirine zemin hazÄ±rlayabilir.',
    },
    {
        question: 'TÃ¼kenmiÅŸlik geÃ§er mi?',
        answer: 'KiÅŸinin Ã¼zerine yÃ¼klenen o kontrol edilemez stres dÃ¶ngÃ¼sÃ¼ yapÄ±landÄ±rÄ±ldÄ±ÄŸÄ±nda ve gerekli psikiyatrik gÃ¶rÃ¼ÅŸme adÄ±mlarÄ±yla kiÅŸinin baÅŸa Ã§Ä±kma stratejileri revize edildiÄŸinde klinik iyileÅŸme potansiyeli yÃ¼ksektir.',
    },
    {
        question: 'TÃ¼kenmiÅŸlik ne kadar sÃ¼rer?',
        answer: 'Duygusal yorgunluÄŸun seyrine ve yetiÅŸkinin yÃ¼klerinden arÄ±nabilme kapasitesine (bireysel deÄŸerlendirme bulgularÄ±na) gÃ¶re haftalar ile aylar arasÄ±nda deÄŸiÅŸkenlik (kiÅŸiden kiÅŸiye deÄŸiÅŸebilir formÃ¼llerle) gÃ¶stererek seyreder.',
    },
    {
        question: 'SÃ¼rekli yorgunluk psikolojik mi?',
        answer: 'Dahili (kansÄ±zlÄ±k veya vitamin) bir sebep ortada yoksa, 10 saat dahi uyunmasÄ±na raÄŸmen geÃ§meyen o aÄŸÄ±r bitkinlik; beynin psikiyatrik stresi taÅŸÄ±yamamasÄ±ndan doÄŸan nÃ¶robiyolojik bir enerji tahliyesidir.',
    },
    {
        question: 'Motivasyon kaybÄ± neden olur?',
        answer: 'KiÅŸinin gÃ¶sterdiÄŸi onca emeÄŸin iÅŸ veya aile hayatÄ±nda (Ã¶dÃ¼l/takdir) dengesinde sÃ¼rekli karÅŸÄ±lÄ±ksÄ±z kalmasÄ±, sonucunda zihnin "Ne yaparsan yap deÄŸiÅŸmeyecek" kodlamasÄ±nÄ± yazmasÄ±yla motivasyon iflas eder.',
    },
    {
        question: 'Ä°ÅŸten soÄŸuma normal mi?',
        answer: 'Ä°ÅŸ yerinde geÃ§ici krizler esnasÄ±nda yaÅŸanacak isteksizlikler olaÄŸandÄ±r. Fakat iÅŸ yerine gitme fikri kiÅŸiyi sadece soÄŸutmakla kalmÄ±yor, fiziksel bedende "mide bulantÄ±sÄ± veya kalpte Ã§arpÄ±ntÄ±" yaratÄ±yorsa orada klinik bir sorun vardÄ±r.',
    },
    {
        question: 'Eryamanâ€™da tÃ¼kenmiÅŸlik deÄŸerlendirmesi nasÄ±l yapÄ±lÄ±r?',
        answer: 'Ankara Eryaman\'daki kliniÄŸimizde, hastanÄ±n yaÅŸam tarzÄ±, Ã§alÄ±ÅŸtÄ±ÄŸÄ± ortamÄ±n dinamikleri ve taÅŸÄ±dÄ±ÄŸÄ± iÃ§sel sorumluluklar psikiyatrik gÃ¶rÃ¼ÅŸme esasÄ±yla haritalandÄ±rÄ±larak tÃ¼kenmiÅŸliÄŸin kÃ¶k neden tespiti (ve terapi/ilaÃ§ entegrasyonu) birebir gÃ¶rÃ¼ÅŸmelerle planlanÄ±r.',
    },
];

export default function TukenmislikPillarPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroBg}><div className={styles.heroOrb}></div></div>
                <div className={`container ${styles.heroContent}`}>
                    <Link href="/hizmetler" className={styles.backLink}>â† TÃ¼m DeÄŸerlendirme AlanlarÄ±</Link>
                    <span className={styles.heroIcon}>ğŸ”‹</span>
                    <h1>Ankara Eryamanâ€™da TÃ¼kenmiÅŸlik Sendromu DeÄŸerlendirmesi</h1>
                    <p className={styles.heroDesc}>
                        "HiÃ§bir ÅŸeye enerjim yok", "Ä°ÅŸe gitmek istemiyorum" ya da "ArtÄ±k hiÃ§bir ÅŸey keyif vermiyor"
                        ÅŸeklindeki cÃ¼mleler, basit bir yorgunluÄŸun Ã¶tesinde; zihnin yÄ±llardÄ±r taÅŸÄ±dÄ±ÄŸÄ± yÃ¼kler altÄ±nda iflas
                        bayraÄŸÄ±nÄ± Ã§ektiÄŸinin kanÄ±tÄ±dÄ±r. Bireysel deÄŸerlendirme ile yeniden enerji regÃ¼lasyonunu saÄŸlayacak adÄ±mlara zemin hazÄ±rlÄ±yoruz.
                    </p>
                    <div className={styles.author}>
                        <div className={styles.authorIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <div><strong>Uzm. Dr. Abdullah MaraÅŸ</strong><span>(Ankara Psikiyatrist UzmanÄ±)</span></div>
                    </div>

                    <div className="info-banner" style={{ marginTop: 'var(--space-6)' }}>
                        <strong>ğŸ“Œ Klinik Bildirim</strong>
                        TÃ¼kenmiÅŸlik (Burnout) olgusu sadece yetiÅŸkin Ã§alÄ±ÅŸma/iÅŸ ve Ã¶zel yaÅŸam pratikleri Ã§erÃ§evesinde ele alÄ±nÄ±r.
                        Bu sayfa Ã¼zerindeki tÄ±bbi bilgilendirmeler Ã§ocuk ve meslek dÄ±ÅŸÄ± Ã§aÄŸlarÄ± kapsamaz. Kesin tedavi vaadinde
                        bulunulmaz, seyrin gidiÅŸatÄ± yalnÄ±zca birebir hekim muayenesi sonrasÄ±nda yapÄ±landÄ±rÄ±labilir.
                    </div>
                </div>
            </section>

            <section className="section">
                <div className={`container ${styles.contentGrid}`}>
                    <article className={styles.article}>

                        <p className={styles.lead}>
                            Ä°ÅŸ dÃ¼nyasÄ±nÄ±n yÃ¼ksek beklentileri, aÄŸÄ±rlaÅŸan ekonomik gerÃ§eklikler veya hayat iÃ§erisindeki
                            sÃ¼rekli "verici" (idare edici) rolde olmak, bir yetiÅŸkinin ruhsal depodaki son kÄ±rÄ±ntÄ±larÄ± dahi tÃ¼ketmesiyle
                            sonuÃ§lanabilir. TÃ¼kenmiÅŸlik; aniden Ã§Ä±kan bir Ã¶fke veya hÃ¼zÃ¼nden ziyade, yÄ±llardÄ±r iÃ§inizde usul usul yanan
                            bir ateÅŸin (stresin), artÄ±k sizi sadece <Link href="/blog/surekli-yorgun-hissetmek-psikolojik-mi">sÃ¼rekli yorgunum</Link> dedirtecek
                            seviyede tamamen kÃ¼le Ã§evirmesi halidir.
                        </p>

                        <h2 id="tukenmislik-nedir">TÃ¼kenmiÅŸlik Sendromu Nedir?</h2>
                        <p>
                            SÄ±klÄ±kla "Burnout" olarak isimlendirilen <Link href="/blog/tukenmislik-sendromu-nedir">TÃ¼kenmiÅŸlik Sendromu</Link>, eriÅŸkinin mesleki
                            veya aÅŸÄ±rÄ± stresli yaÅŸam koÅŸullarÄ± karÅŸÄ±sÄ±nda (Ã¶zellikle emek/Ã¶dÃ¼l dengesinin Ã§Ã¶kmesiyle birlikte) organizmanÄ±n
                            tÃ¼m uyum becerilerini yitirmesidir. Hastada hiÃ§bir ÅŸey iÃ§in ayaÄŸa kalkacak, hatta o sorunu
                            tartÄ±ÅŸacak dahi "pil", yani yaÅŸam gÃ¼cÃ¼ kalmamÄ±ÅŸtÄ±r. Belirtiler kiÅŸiden kiÅŸiye deÄŸiÅŸebilir nitelik taÅŸÄ±sa da,
                            ortak olan tablo aÄŸÄ±r bir duyarsÄ±zlaÅŸmadÄ±r.
                        </p>

                        <h2 id="is-hayati">Ä°ÅŸ HayatÄ±nda TÃ¼kenmiÅŸlik Nedir?</h2>
                        <p>
                            Evde gÃ¶rece daha rahat hissedip, ofis binasÄ±nÄ± veya Ã¼niformayÄ± gÃ¶rdÃ¼ÄŸÃ¼ an midede kramplar baÅŸlayan kiÅŸi;
                            bu tabloyu mesleÄŸine kodlamÄ±ÅŸtÄ±r. Fazla mesailer, deÄŸer gÃ¶rmeme, Ã§alÄ±ÅŸanÄ±n yaptÄ±ÄŸÄ± iyi iÅŸin hiÃ§bir zaman
                            gÃ¶rÃ¼lmeyip hep eksiklerin yÃ¼zÃ¼ne vurulmasÄ±; onu iÅŸ yerine karÅŸÄ± sadece <Link href="/blog/ise-gitmek-istememe-hali">iÅŸe gitmek istemiyorum</Link>
                            diyecek noktaya deÄŸil, mesleÄŸine tamamen "duyarsÄ±z" (ne yaparsanÄ±z yapÄ±n umurumda deÄŸil) diyecek bir kayÄ±tsÄ±zlÄ±ÄŸa iter.
                        </p>

                        <h2 id="surekli-yorgunluk">SÃ¼rekli Yorgun Hissetmek Ne Anlama Gelir?</h2>
                        <p>
                            Fiziksel tahlillerinde ne D vitamini eksikliÄŸi ne de kansÄ±zlÄ±ÄŸÄ± bulunmayan bir hasta, sabahtan akÅŸama
                            kadar "Ben adÄ±m atamÄ±yorum, kemiklerim aÄŸrÄ±yor" diyorsa; orada bedeni felÃ§ eden duygu yorgunluÄŸudur.
                            Stres hormonu olan kortizolÃ¼n arÄ±zalanmasÄ± ile kaslarda biriken kronik gerginlikler; fiziksel deÄŸil,
                            tamamÄ±yla <Link href="/blog/tukenmislik-sendromu-belirtileri-nelerdir">psikolojik yorgunluÄŸun sendromsal belirtisidir</Link>.
                        </p>

                        <h2 id="motivasyon-kaybi">Motivasyon KaybÄ± Neden Olur?</h2>
                        <p>
                            "ArtÄ±k hiÃ§bir ÅŸey keyif vermiyor, ne yapsam sonucunda ne deÄŸiÅŸecek ki?" cÃ¼mlesi, tÃ¼kenmiÅŸ bir zihnin
                            imdat sinyalidir. Beyindeki Ã¶dÃ¼l merkezi (dopamin Ã¼retimi) tamamen bozulmuÅŸtur. KiÅŸi evindeki hobisine, eÅŸiyle yediÄŸi
                            yemeÄŸe, eskiden tutkuyla baÄŸlÄ± olduÄŸu projelerine sadece bir "zorunluluk ve yÃ¼ktÃ¼r" gÃ¶zÃ¼yle bakar. Bu hissin arkasÄ±ndaki
                            <Link href="/blog/motivasyon-kaybi-neden-olur">motivasyon kaybÄ± mekanizmasÄ±nÄ±n</Link> tamiri psikiyatrik vizyonla deÄŸerlendirilebilir.
                        </p>

                        <h2 id="sabah-ise-gitme">Sabah Ä°ÅŸe Gitmek Ä°stememe Hali</h2>
                        <p>
                            Pazartesi sendromundan tamamen farklÄ± bir klinik tablodur. KiÅŸi sadece pazartesi deÄŸil; haftanÄ±n
                            hergÃ¼nÃ¼ uyandÄ±ÄŸÄ±nda yÃ¼zÃ¼nde kocaman bir umutsuzluk taÅŸÄ±r. ArabasÄ±na bindiÄŸinde ayaÄŸÄ± iÅŸ yerine gitmek
                            istemez. Zihin o kadar Ã§ok "beklenti ve tehlike (mobbing) tehdidi" algÄ±lar ki
                            zaten baÅŸtan kapatÄ±r kendini. "Ä°stifa edemem kredim var" ile "Gidersem daha fazla dayanamayacaÄŸÄ±m"
                            arasÄ±nda bedeni sÄ±kar.
                        </p>

                        <h2 id="duygusal-tukenme">Duygusal TÃ¼kenme Nedir?</h2>
                        <p>
                            Fiziksel olarak yorulmanÄ±n bir istirahati vardÄ±r. Fakat <Link href="/blog/tukenmislik-sendromu-nedir">duygusal tÃ¼kenme</Link>;
                            ÅŸefkat, idare etme, Ã¶fke gibi tÃ¼m his barajlarÄ±nÄ±n yÄ±kÄ±lmasÄ±dÄ±r. Evde Ã§ocuÄŸunun en ufak
                            bir sorusuna baÄŸÄ±ran, trafikte Ã¶nÃ¼nden geÃ§en adama terÃ¶rist muamelesi yapan yetiÅŸkinin asÄ±l sorunu o
                            kiÅŸiler deÄŸildir; onun duygusal kapasitesinde "hoÅŸgÃ¶rÃ¼ ve idare (tolerans)" edecek bir santimlik yer kalmamÄ±ÅŸtÄ±r.
                        </p>

                        <h2 id="zihinsel-yorgunluk">Zihinsel Yorgunluk Belirtileri</h2>
                        <p>
                            DuygularÄ±n akabinde beyin de sarsÄ±ntÄ±ya girerek "Brain Fog" denen sisli bir kafa yaÅŸatÄ±r. ToplantÄ±da
                            konuÅŸulanlarÄ±n onda birini anlamama, raporu beÅŸ defa yanlÄ±ÅŸ okuma, evin doÄŸalgazÄ±nÄ± aÃ§Ä±k unutup Ã§Ä±kma gibi
                            durumlarÄ±n temelinde zihinsel yÄ±pranma yatar. Bu tablo bazen <Link href="/hizmetler/eriskin-dehb">EriÅŸkin DEHB</Link> uyarÄ±mÄ±na ve unutkanlÄ±ÄŸÄ±na (gizlenmiÅŸ) zemin de olabilir.
                        </p>

                        <h2 id="depresyon-farki">TÃ¼kenmiÅŸlik ve Depresyon FarkÄ±</h2>
                        <p>
                            DÄ±ÅŸarÄ±dan birbirine Ã§ok karÄ±ÅŸÄ±rlar. Ancak <Link href="/blog/tukenmislik-ve-depresyon-arasindaki-fark">TÃ¼kenmiÅŸliÄŸin depresyondan temel farkÄ±</Link>;
                            tÃ¼kenmiÅŸliÄŸin genellikle aÅŸÄ±rÄ± mesai, "hedef, KPI baskÄ±sÄ±, tÃ¼kenmez Ã§alÄ±ÅŸma listeleri" gibi bir dÄ±ÅŸ etkenin (ortamÄ±n)
                            aÅŸÄ±ndÄ±rmasÄ±yla (Ã¶nce iÅŸle) baÅŸlamasÄ±dÄ±r. <Link href="/hizmetler/depresyon">MajÃ¶r depresyon ise</Link> Ã§alÄ±ÅŸma
                            hayatÄ± olmasa bile veya en mutlu anÄ±nda dahi kiÅŸiyi ezecek dipsiz bir keder veya benlik deÄŸersizliÄŸidir. Lakin uzayan bir tÃ¼kenmiÅŸlik depresyonu (majÃ¶r tabloyu) kolayca doÄŸurabilir.
                        </p>

                        <h2 id="anksiyete-iliskisi">TÃ¼kenmiÅŸlik ve Anksiyete Ä°liÅŸkisi</h2>
                        <p>
                            GÃ¼nde 16 saat Ã§alÄ±ÅŸtÄ±rÄ±lan ve her hata yaptÄ±ÄŸÄ±nda aÅŸaÄŸÄ±lanan bir bireyin sistemi, belli bir aÅŸamada
                            sÃ¼rekli diken Ã¼zerinde (nÃ¶bet yerinde) olmasÄ±yla
                            <Link href="/hizmetler/anksiyete">Anksiyete bozukluÄŸunu (Korku ve panik)</Link> yaratÄ±r. BaÅŸlangÄ±Ã§ta panik olarak
                            Ã§Ä±kan bu tablo, yÄ±llarca devam ettikÃ§e artÄ±k "HiÃ§bir ÅŸeye yetemiyorum, ne olacaksa olsun" noktasÄ±na kayÄ±p kiÅŸiyi "tÃ¼kenmiÅŸlik uyuÅŸukluÄŸuna" kilitler.
                        </p>

                        <h2 id="performans-odak">Performans DÃ¼ÅŸÃ¼ÅŸÃ¼ ve Odak Sorunu</h2>
                        <p>
                            Bir ay Ã¶ncesine dek dÃ¶rt saatte bitirdiÄŸi projeyi; tÃ¼kenmiÅŸlik tablosuna giren yetiÅŸkin bir hasta artÄ±k dÃ¶rt gÃ¼nde zor bitirir.
                            Zihnin odaÄŸÄ±, yapÄ±lan iÅŸe deÄŸil "Ben ne zaman bu iÅŸkenceden kurtulacaÄŸÄ±m" feryadÄ±na takÄ±lÄ± kalmÄ±ÅŸtÄ±r. Bu yÃ¼zden mesleki
                            hatalar katlanÄ±r, hatalar da eleÅŸtiriyi ve Ã¶zgÃ¼ven Ã§Ã¶kÃ¼ÅŸÃ¼nÃ¼ tekrar perÃ§inler.
                        </p>

                        <h2 id="sosyal-geri">Sosyal Geri Ã‡ekilme</h2>
                        <p>
                            ArkadaÅŸ grubunun mesajlarÄ±na cevap veremez hale gelme, akraba dÃ¼ÄŸÃ¼nÃ¼nden veya telefon aramasÄ±ndan ("Yine ne istiyorlar"
                            diyerek) kaÃ§ma; sistemin korunma ve savunmaya geÃ§mesinin klinik fotoÄŸrafÄ±dÄ±r. Birey tek bir saniyesini
                            bile baÅŸkalarÄ±na ayÄ±rmak istemez Ã§Ã¼nkÃ¼ kendine de ayÄ±racak takati yoktur.
                        </p>

                        <h2 id="denge-yasami">Ä°ÅŸ-Ã–zel Hayat Dengesi YÄ±kÄ±mÄ±</h2>
                        <p>
                            Kurumsalda veya esnaflÄ±ktaki aÅŸÄ±rÄ± baskÄ±lar mesai saatinde ÅŸirkette kalmaz. AkÅŸam sofrasÄ±na, yataÄŸÄ±n iÃ§ine, hafta sonundaki
                            pikniÄŸe gelir. Ailesinin yanÄ±nda bedenen dursa da zihnen o bitmeyen projelerin Ä±zdÄ±rabÄ±nda kalan hasta, bu dengesizlik neticesinde eÅŸiyle de (TÃ¼kenmiÅŸliÄŸin yansÄ±masÄ± yÃ¼zÃ¼nden) en asgari muhabbeti yapamayarak boÅŸanma eÅŸiklerine gelir.
                            Bu noktada <Link href="/hizmetler/uyku-bozukluklari">Uyku bozukluklarÄ±ndaki o gece Ã§arpÄ±ntÄ±larÄ±</Link> kaÃ§Ä±nÄ±lmaz bir sondur.
                        </p>

                        <h2 id="belirtiler-genel">TÃ¼kenmiÅŸlik Belirtileri Nelerdir?</h2>
                        <p>
                            GÃ¼ne bitkin doÄŸmak, aÅŸÄ±rÄ± sinirlilik hali (toleranssÄ±zlÄ±k), midede geÃ§meyen bulantÄ±, baÅŸ ve boyun
                            aÄŸrÄ±larÄ±, iÅŸi ve mesleÄŸi deÄŸersiz hissetme, hastalÄ±klara Ã§ok sÄ±k yakalanma (Ã§Ã¶ken baÄŸÄ±ÅŸÄ±klÄ±k).
                            TÃ¼m bu <Link href="/blog/tukenmislik-sendromu-belirtileri-nelerdir">duygusal tÃ¼kenme belirtileri</Link> eriÅŸkini tamamen iÅŸlevden alÄ±koyar.
                        </p>

                        <h2 id="ne-kadar-surer">TÃ¼kenmiÅŸlik Ne Kadar SÃ¼rer?</h2>
                        <p>
                            Burnout; ne yazÄ±k ki Ã¼Ã§ gÃ¼nlÃ¼k bir izin ya da deniz tatiliyle bir anda geÃ§mez. KronikleÅŸmiÅŸ
                            (YÄ±llanmÄ±ÅŸ) bir inatlaÅŸmanÄ±n eseri ise; eÄŸer profesyonel (hekim) yÃ¶nlendirmesi veya terapi konsÃ¼ltasyonu
                            olmazsa, zihin kendi kendine sadece aylar sonrasÄ±nda <Link href="/blog/tukenmislik-ne-kadar-surer">tÃ¼kenmiÅŸlik sÃ¼recini</Link> kronik umutsuzluÄŸa evirecektir.
                        </p>

                        <h2 id="psikiyatri-ne-zaman">Ne Zaman Psikiyatri DeÄŸerlendirmesi DÃ¼ÅŸÃ¼nÃ¼lmeli?</h2>
                        <p>
                            HayatÄ±nÄ±za giren iÅŸ stresi veya aile yÃ¼kÃ¼ nedeniyle <strong>haftalardÄ±r iÅŸtahÄ±nÄ±z, uyku ve tahammÃ¼l kaliteniz koptuysa;</strong> iÅŸe gitmekte fiziksel bir zorlantÄ± Ã§ekiyorsanÄ±z, zihninizin bu alarmÄ±na kulak vermeniz ÅŸarttÄ±r. ReÃ§etesiz ve kendi baÅŸÄ±na atlatÄ±lÄ±r Ã¼midi, sizi telafisi Ã§ok zor majÃ¶r krizlere ya da istifaya zorlar.
                            "Bireysel deÄŸerlendirme" ve gerÃ§ekÃ§i medikal / biliÅŸsel adÄ±mlar tek koruyucu perdedir.
                        </p>

                        <h2 id="eryaman-sureci">Ankara Eryamanâ€™da TÃ¼kenmiÅŸlik DeÄŸerlendirme SÃ¼reci</h2>
                        <p>
                            Uzm. Dr. Abdullah MaraÅŸ gÃ¶zetimindeki (Ankara BatÄ±kent, Etimesgut, Altay Mahallesi rotasÄ±nda yer alan)
                            <Link href="/randevu">Ankara Eryaman tÃ¼kenmiÅŸlik deÄŸerlendirme sÃ¼reci</Link>; sadece "Aman biraz dinlenin" diyen boÅŸ tesellilerle kalmaz. OmuzlarÄ±nÄ±za bindirilmiÅŸ "hayÄ±r diyememe" kilitlerinizi aÃ§arak, iÅŸte veya hayatta motivasyonunuzu kemiren "Ã¶zgÃ¼ven Ã§ukurlarÄ±nÄ±" ve uyaramadÄ±ÄŸÄ±nÄ±z beyninizi regÃ¼le etmek Ã¼zere psikiyatrik gÃ¶rÃ¼ÅŸme ile iÅŸlenen yapÄ±landÄ±rÄ±lmÄ±ÅŸ (hastaya Ã¶zel) medikal-terapÃ¶tik analizleri yÃ¶netmektedir.
                        </p>

                        <div className={styles.faqSection} id="sss">
                            <h2>SÄ±k Sorulan Sorular</h2>
                            <FAQSection items={faqItems} />
                        </div>

                        <div className={styles.articleCta}>
                            <h3>Kendinizi Ä°ÅŸ Ä°Ã§in YakmayÄ±n</h3>
                            <p>OmuzlarÄ±nÄ±zdaki devasa yÃ¼kler, bir psikiyatri muayenesinde (bireysel klinik) incelendiÄŸinde asÄ±l Ã§Ä±kÄ±ÅŸ kapÄ±sÄ±nÄ± rahatlÄ±kla gÃ¶sterecektir.</p>
                            <Link href="/randevu" className="btn btn--primary btn--lg" style={{ marginTop: 'var(--space-4)' }}>
                                Psikiyatrik DeÄŸerlendirmeyi Planla â†’
                            </Link>
                        </div>
                    </article>

                    <aside className={styles.sidebar}>
                        <nav className={styles.sidebarCard}>
                            <h4>Sayfa Rehberi</h4>
                            <ul className={styles.tocList}>
                                <li><a href="#tukenmislik-nedir">TÃ¼kenmiÅŸlik Nedir?</a></li>
                                <li><a href="#is-hayati">Mesleki (Ä°ÅŸ) TÃ¼kenmiÅŸliÄŸi</a></li>
                                <li><a href="#surekli-yorgunluk">SÃ¼rekli Yorgunluk Durumu</a></li>
                                <li><a href="#motivasyon-kaybi">Motivasyonun Ä°flasÄ±</a></li>
                                <li><a href="#sabah-ise-gitme">Gidilmek Ä°stenmeyen Sabahlar</a></li>
                                <li><a href="#duygusal-tukenme">DuygularÄ±n TÃ¼kenmesi</a></li>
                                <li><a href="#zihinsel-yorgunluk">Brain Fog (Sisli Zihin)</a></li>
                                <li><a href="#depresyon-farki">Burnout ve Depresyon KÄ±yasÄ±</a></li>
                                <li><a href="#anksiyete-iliskisi">KaygÄ± ve Korku (Anksiyete)</a></li>
                                <li><a href="#performans-odak">Ä°ÅŸ AksaklÄ±klarÄ±</a></li>
                                <li><a href="#sosyal-geri">Toplumdan (Sosyal) Ã‡ekilme</a></li>
                                <li><a href="#denge-yasami">Ä°ÅŸ-Ã–zel YaÅŸam Erozyonu</a></li>
                                <li><a href="#belirtiler-genel">Burnout Belirtileri</a></li>
                                <li><a href="#ne-kadar-surer">Åikayetlerin SÃ¼resi</a></li>
                                <li><a href="#psikiyatri-ne-zaman">BaÅŸa Ã‡Ä±kÄ±lamayan Durumlar</a></li>
                                <li><a href="#eryaman-sureci">Hekim (Eryaman) YaklaÅŸÄ±mÄ±</a></li>
                            </ul>
                        </nav>

                        <div className={styles.sidebarCta}>
                            <h3>TÃ¼kenmiÅŸlik PolikliniÄŸi</h3>
                            <p>Siz bitmediniz, sadece yanlÄ±ÅŸ enerjiyi harcadÄ±nÄ±z. Onarmaya baÅŸlayÄ±n. Ankara/Eryaman.</p>
                            <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Randevu ModÃ¼lÃ¼</Link>
                        </div>

                        <div className={styles.sidebarCard}>
                            <h4>Klinik MÃ¼racaat</h4>
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
                            <h4>Ä°lgili KÃ¼tÃ¼phane</h4>
                            <ul className={styles.sidebarLinks}>
                                <li><Link href="/blog/tukenmislik-sendromu-nedir">Sonsuz Ä°steksizlik Nedir?</Link></li>
                                <li><Link href="/blog/motivasyon-kaybi-neden-olur">Hayata Neden KÃ¼sÃ¼lÃ¼yoruz?</Link></li>
                                <li><Link href="/blog/tukenmislik-sendromu-belirtileri-nelerdir">Burnout Genel Analizi</Link></li>
                                <li><Link href="/blog/surekli-yorgun-hissetmek-psikolojik-mi">Kemiklerinize Kadar AcÄ±tan AcÄ±</Link></li>
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
                            "name": "Ankara Eryaman TÃ¼kenmiÅŸlik Sendromu DeÄŸerlendirmesi",
                            "url": "https://drabdullahmaras.com/hizmetler/tukenmislik-sendromu",
                            "about": {
                                "@type": "MedicalCondition",
                                "name": "Burnout Syndrome",
                                "alternateName": "TÃ¼kenmiÅŸlik Sendromu, Duygusal ve Mesleki Yorgunluk"
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
                                { "@type": "ListItem", "position": 3, "name": "TÃ¼kenmiÅŸlik Sendromu", "item": "https://drabdullahmaras.com/hizmetler/tukenmislik-sendromu" }
                            ]
                        }
                    ]
                })
            }} />
        </>
    );
}
