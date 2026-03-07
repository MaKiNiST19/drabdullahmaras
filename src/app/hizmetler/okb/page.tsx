import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon/page.module.css';

export const metadata: Metadata = {
    title: 'Ankara Eryaman OKB DeÄŸerlendirmesi | Uzm. Dr. Abdullah MaraÅŸ',
    description:
        'Eryamanâ€™da OKB (takÄ±ntÄ± hastalÄ±ÄŸÄ±) belirtileri, obsesyon ve kompulsiyon dÃ¶ngÃ¼sÃ¼ hakkÄ±nda bilgilendirme ve psikiyatrik deÄŸerlendirme sÃ¼reci.',
    alternates: { canonical: 'https://drabdullahmaras.com/hizmetler/okb' },
    openGraph: {
        title: 'Ankara Eryamanâ€™da OKB (TakÄ±ntÄ± HastalÄ±ÄŸÄ±) DeÄŸerlendirmesi',
        description: 'Eryamanâ€™da OKB (takÄ±ntÄ± hastalÄ±ÄŸÄ±) belirtileri, obsesyon ve kompulsiyon dÃ¶ngÃ¼sÃ¼ hakkÄ±nda yetiÅŸkin psikiyatrik deÄŸerlendirme.',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'OKB nedir?',
        answer: 'OKB (Obsesif Kompulsif Bozukluk), kiÅŸinin aklÄ±na istemsizce gelen ve yoÄŸun kaygÄ± yaratan saplantÄ±lÄ± dÃ¼ÅŸÃ¼nceler (obsesyonlar) ile bu kaygÄ±yÄ± azaltmak iÃ§in yapÄ±lan tekrarlayÄ±cÄ± davranÄ±ÅŸlar (kompulsiyonlar) dÃ¶ngÃ¼sÃ¼yle karakterize klinik bir durumdur.',
    },
    {
        question: 'OKB belirtileri nelerdir?',
        answer: 'AÅŸÄ±rÄ± el yÄ±kama (temizlik), kapÄ±/ocak kontrol etme, eÅŸyalarÄ± simetrik dizme, dini veya zarar verici istenmeyen dÃ¼ÅŸÃ¼nceleri zihinden atamama gibi hem eylemsel hem de biliÅŸsel takÄ±ntÄ±lardÄ±r.',
    },
    {
        question: 'TakÄ±ntÄ± hastalÄ±ÄŸÄ± geÃ§er mi?',
        answer: 'TakÄ±ntÄ± hastalÄ±ÄŸÄ±nda gidiÅŸat kiÅŸiden kiÅŸiye deÄŸiÅŸebilir. Tamamen kaybolmasÄ± her vakada sÃ¶z konusu olmasa da, alanÄ±nda yetiÅŸmiÅŸ hekimlerin sunduÄŸu psikiyatrik deÄŸerlendirme ve yapÄ±landÄ±rma sayesinde (ilaÃ§ ve/veya terapi sÃ¼reÃ§leriyle) belirtiler gÃ¼ndelik yaÅŸamÄ± etkilemeyecek seviyelere indirilebilir.',
    },
    {
        question: 'OKB kendi kendine dÃ¼zelir mi?',
        answer: 'DÃ¼ÅŸÃ¼k seyirli takÄ±ntÄ±lar dÃ¶nemsel olarak hafiflese bile, yerleÅŸmiÅŸ bir OKB tablosunun kendi kendine tamamen dÃ¼zelmesi oldukÃ§a gÃ¼Ã§tÃ¼r. ZorlayÄ±cÄ± dÃ¼ÅŸÃ¼nceler Ã§oÄŸunlukla profesyonel uzmanlÄ±k gerektiren bir biyolojik/fizyolojik yaklaÅŸÄ±ma ihtiyaÃ§ duyar.',
    },
    {
        question: 'OKB anksiyete midir?',
        answer: 'Evet. OKBâ€™nin temel motor gÃ¼cÃ¼ yoÄŸun bir anksiyetedir (kaygÄ±dÄ±r). DÃ¼ÅŸÃ¼ncenin (obsesyon) yarattÄ±ÄŸÄ± korku ve kaygÄ± (anksiyete) o kadar yÃ¼kselir ki, kiÅŸi rahatlamak iÃ§in kompulsiyon (Ã¶rneÄŸin tekrar tekrar el yÄ±kama) yapmak zorunda kalÄ±r.',
    },
    {
        question: 'OKB gÃ¼nlÃ¼k yaÅŸamÄ± etkiler mi?',
        answer: 'Kesinlikle. El yÄ±kamaktan iÅŸe / sosyal hayata geÃ§ kalmak, gÃ¼vende hissetmediÄŸi iÃ§in sÃ¼rekli ocak kontrol edip evden Ã§Ä±kamamak gibi nedenlerle OKB, gÃ¼nlÃ¼k iÅŸlevselliÄŸi, mesleÄŸi ve iliÅŸkileri adeta felce uÄŸratabilir.',
    },
    {
        question: 'OKB iÃ§in hangi doktora gidilir?',
        answer: 'TakÄ±ntÄ± bozukluklarÄ±nÄ±n teÅŸhisi, ayrÄ±mÄ± ve izlem programÄ± hastanelerin veya Ã¶zel kliniklerin Ruh SaÄŸlÄ±ÄŸÄ± ve HastalÄ±klarÄ± (Psikiyatri) hekimlerince gerÃ§ekleÅŸtirilir.',
    },
    {
        question: 'Eryamanâ€™da OKB deÄŸerlendirmesi nasÄ±l yapÄ±lÄ±r?',
        answer: 'Ankara Eryamanâ€™da (Altay Mahallesi) Uzm. Dr. Abdullah MaraÅŸ, yetiÅŸkin hastalarla birebir klinik gÃ¶rÃ¼ÅŸme (konsÃ¼ltasyon) saÄŸlayarak OKBâ€™nin ÅŸiddetini, yaÅŸam Ã¶ykÃ¼sÃ¼ndeki yerini ve gerekli tÄ±bbi sÃ¼recin Ã§erÃ§evesini bireysel olarak yapÄ±landÄ±rÄ±r.',
    },
];

export default function OkbPillarPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroBg}><div className={styles.heroOrb}></div></div>
                <div className={`container ${styles.heroContent}`}>
                    <Link href="/hizmetler" className={styles.backLink}>â† TÃ¼m DeÄŸerlendirme AlanlarÄ±</Link>
                    <span className={styles.heroIcon}>ğŸ”„</span>
                    <h1>Ankara Eryamanâ€™da OKB (TakÄ±ntÄ± HastalÄ±ÄŸÄ±) DeÄŸerlendirmesi</h1>
                    <p className={styles.heroDesc}>
                        AklÄ±nÄ±zdan bir tÃ¼rlÃ¼ atamadÄ±ÄŸÄ±nÄ±z ve sizi yoÄŸun kaygÄ±ya sÃ¼rÃ¼kleyen "o istenmeyen dÃ¼ÅŸÃ¼nceler"
                        ile onlarÄ± susturmak iÃ§in tekrarladÄ±ÄŸÄ±nÄ±z yorucu davranÄ±ÅŸlar bir kader deÄŸildir.
                        YetiÅŸkin bireylerde gÃ¶zlenen takÄ±ntÄ±larÄ±n derin klinik yÃ¼zÃ¼nÃ¼ beraber inceleyelim.
                    </p>
                    <div className={styles.author}>
                        <div className={styles.authorIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <div><strong>Uzm. Dr. Abdullah MaraÅŸ</strong><span>Ruh SaÄŸlÄ±ÄŸÄ± (Psikiyatrist) UzmanÄ±</span></div>
                    </div>

                    <div className="info-banner" style={{ marginTop: 'var(--space-6)' }}>
                        <strong>ğŸ“Œ Bilgilendirme ve Kapsam Notu</strong>
                        Bu metinler yalnÄ±zca yetiÅŸkin psikiyatrisi kapsamÄ±ndaki OKB sÃ¼reÃ§lerine ait bilgilendirmeleri iÃ§erir (Ã§ocuk veya
                        ergen sÃ¼reÃ§lerini iÃ§ermemektedir). TanÄ± koyma, garanti veya kesin tedavi vadetme (tam baÅŸarÄ± gibi) amaÃ§ gÃ¼tmez; bireysel
                        deÄŸerlendirmelerin tÄ±p hekimlerince yapÄ±lmasÄ± zorunludur.
                    </div>
                </div>
            </section>

            <section className="section">
                <div className={`container ${styles.contentGrid}`}>
                    <article className={styles.article}>

                        <p className={styles.lead}>
                            "Acaba kapÄ±yÄ± kilitledim mi diye tekrar tekrar bakÄ±yorum", "Ellerimi yÄ±kamadan
                            bir saniye bile rahat edemiyorum" veya "AklÄ±mdan o korkunÃ§, kÃ¶tÃ¼ dÃ¼ÅŸÃ¼nceler
                            hiÃ§ gitmiyor..." Zihin her gÃ¼n sayÄ±sÄ±z veri iÅŸler. Ancak bazÄ± beyinler, Ã¶nemsiz sayÄ±labilecek
                            ÅŸÃ¼phe ve kuruntulara alarm noktasÄ±nda takÄ±lÄ±p kalÄ±r. YetiÅŸkin bireylerin yaÅŸam kalitesini
                            derinden sarsan Obsesif Kompulsif Bozukluk (OKB), nam-Ä± diÄŸer TakÄ±ntÄ± HastalÄ±ÄŸÄ±, tam olarak
                            bu dÃ¶ngÃ¼ Ã¼zerine kuruludur.
                        </p>

                        <h2 id="okb-nedir">OKB (Obsesif Kompulsif Bozukluk) Nedir?</h2>
                        <p>Obsesif Kompulsif Bozukluk (OKB), kiÅŸinin iradesi dÄ±ÅŸÄ±nda zihnine giren rahatsÄ±z edici obsesif dÃ¼ÅŸÃ¼nceler ve bu dÃ¼ÅŸÃ¼ncelerin yarattÄ±ÄŸÄ± yoÄŸun kaygÄ±yÄ± azaltabilmek iÃ§in yapÄ±lan tekrarlayÄ±cÄ± kompulsif davranÄ±ÅŸlardan oluÅŸan klinik bir ruh saÄŸlÄ±ÄŸÄ± durumudur.</p>
                        <h3>OKB delilik midir?</h3>
                        <p>HayÄ±r, OKB kiÅŸinin muhakemesini kaybetmediÄŸi, sadece mantÄ±ksÄ±z olduÄŸunu bildiÄŸi halde takÄ±ntÄ±lÄ± dÃ¶ngÃ¼lere karÅŸÄ± koyamadÄ±ÄŸÄ± klinik bir anksiyete ve obsesyon tablosudur.</p>
                        <h3>TakÄ±ntÄ± hastalÄ±ÄŸÄ± genetik midir?</h3>
                        <p>Evet, genetik yatkÄ±nlÄ±ÄŸÄ±n beyin kimyasÄ±ndaki (serotonin vb.) deÄŸiÅŸimlerle etkileÅŸime girmesi OKB geliÅŸiminde en Ã¶nemli biyolojik risk faktÃ¶rlerinden biridir.</p>
                        <p>
                            OKB, zihne kiÅŸinin aÃ§Ä±k iradesi dÄ±ÅŸÄ±nda zorla ve aniden giren, rahatsÄ±z edici, kaygÄ±
                            yÃ¼kseltici dÃ¼ÅŸÃ¼nceler (Obsesyon) ile; bu zihinsel bunaltÄ±yÄ± yatÄ±ÅŸtÄ±rmak veya olasÄ±
                            felaketleri Ã¶nlemek maksadÄ±yla gerÃ§ekleÅŸtirilen ve adeta bir ritÃ¼el halini almÄ±ÅŸ
                            tekrarlayÄ±cÄ± eylemler / dÃ¼ÅŸÃ¼nceler (Kompulsiyon) sarmalÄ±dÄ±r.
                        </p>
                        <p>
                            KÄ±sacasÄ± bu hastalÄ±k, ÅŸÃ¼phe hastalÄ±ÄŸÄ±dÄ±r. Beynin "Acaba bir ÅŸeyi eksik yaptÄ±m mÄ± diye iÃ§im
                            rahat etmiyor" mekanizmasÄ± yÃ¼zÃ¼nden kiÅŸiyi aynÄ± hareketi veya savunmayÄ± defalarca kez yapmaya
                            zorlayan nÃ¶robiyolojik ve psikiyatrik bir durumdur.
                        </p>

                        <h2 id="takinti-hastaligi-ne-anlama-gelir">TakÄ±ntÄ± HastalÄ±ÄŸÄ± Ne Anlama Gelir?</h2>
                        <p>
                            Halk arasÄ±nda genellikle basit bir "titizlik" veya "titiz kiÅŸi" karakteriyle karÄ±ÅŸtÄ±rÄ±lÄ±r.
                            Halbuki klinik manada takÄ±ntÄ± hastalÄ±ÄŸÄ± (OKB) demek, bu dÃ¼ÅŸÃ¼ncelerin bireyin saatlerini
                            Ã§almasÄ±, hayatÄ±nÄ± zorlaÅŸtÄ±rmasÄ± demektir. Temel Ã¶zellik bireyin bu durumun (o dÃ¼ÅŸÃ¼ncelerin veya
                            hareketlerin) <em>saÃ§ma, gereksiz ve abartÄ±lÄ± olduÄŸunun gayet iyi farkÄ±nda olmasÄ±dÄ±r.</em>
                            Ancak ne kadar mantÄ±ksÄ±z bulsa da o iÃ§sel itici gÃ¼ce karÅŸÄ± koyamaz; kendisini o davranÄ±ÅŸÄ± (el yÄ±kamak,
                            sayÄ± saymak) yapmaya mecbur hisseder.
                        </p>

                        <h2 id="obsesyon-nedir">Obsesyon Nedir?</h2>
                        <p>
                            Obsesyon, kiÅŸinin bilincine sÃ¼rekli, mantÄ±ksÄ±z ÅŸekilde ve adeta bir davetsiz misafir gibi dalan,
                            istenmeyen (intrusive) fikirler ve dÃ¼rtÃ¼lerdir. Bu dÃ¼ÅŸÃ¼nceler bir an belirir ve kiÅŸide ciddi
                            bir dehÅŸet, suÃ§luluk ya da yÃ¼ksek doza yakÄ±n <Link href="/hizmetler/anksiyete">kaygÄ± tablosu</Link>
                            yaratÄ±r.
                        </p>
                        <p>
                            Ã–rneÄŸin: "Ya ÅŸu masa Ã¼zerindeki kalem mikropsa ve bana hastalÄ±k bulaÅŸtÄ±rÄ±rsa?", "Ya tanrÄ±ya karÅŸÄ± aklÄ±mdan
                            aÃ§Ä±kÃ§a kÃ¼fÃ¼r geÃ§erse?", "OcaÄŸÄ± kapatmadÄ±m ve tÃ¼m ev havaya uÃ§acak." Bu tip kuruntular her insanda geÃ§ebilir
                            Ã§Ã¼nkÃ¼ beyinde milyonlarca dÃ¼ÅŸÃ¼nce saniyede akar. Lakin OKB beyni bu dÃ¼ÅŸÃ¼nceyi yakalar, gerÃ§ek felaket
                            olarak kodlar ve Ã¼stÃ¼ne bir bÃ¼yÃ¼teÃ§le bakar.
                        </p>

                        <h2 id="kompulsiyon-nedir">Kompulsiyon Nedir?</h2>
                        <p>
                            Kompulsiyon, beyni ele geÃ§iren obsesyonun yarattÄ±ÄŸÄ± dayanÄ±lmaz dÃ¼zeydeki korkuyu veya "eyvah" hissini
                            (anksiyetenin ateÅŸini) sÃ¶ndÃ¼rmek iÃ§in kiÅŸinin bedensel veya zihinsel olarak geliÅŸtirdiÄŸi
                            <strong>rahatlama davranÄ±ÅŸlarÄ± (ritÃ¼elleri)</strong>dir.
                        </p>
                        <p>
                            KiÅŸi "ellerim kirli" (obsesyon) fobisinden arÄ±nmak iÃ§in, ellerini kanatana kadar belki de 45 dakika boyunca
                            belirli bir sÄ±rayla sabunlar (kompulsiyon). Ä°lk defa yÄ±kadÄ±ÄŸÄ±nda geÃ§ici bir rahatlama
                            gelir, fakat hemen ardÄ±ndan "Acaba tam temizlenmedi mi?" takÄ±ntÄ±sÄ± dÃ¶ner ve bu kÄ±sÄ±r dÃ¶ngÃ¼
                            baÅŸlar.
                        </p>

                        <h2 id="okb-belirtileri">OKB Belirtileri Nelerdir?</h2>
                        <p>
                            Zihinsel takÄ±ntÄ±lar genelde birbiriyle iÃ§ iÃ§edir. DÄ±ÅŸarÄ±dan en Ã§ok bilinen temizlik takÄ±ntÄ±larÄ±na ek olarak,
                            OKB pek Ã§ok farklÄ± <Link href="/blog/okb-belirtileri">obsesyon ve kompulsiyon dÃ¶ngÃ¼sÃ¼</Link> ile kendini gÃ¶sterebilir:
                        </p>
                        <ul>
                            <li><strong>Temizlik (Mizofobi):</strong> DÄ±ÅŸ dÃ¼nyadan hastalÄ±k kapma korkusuyla yoÄŸun kaÃ§Ä±nma gÃ¶sterilmesi. Buna baÄŸlÄ± <Link href="/blog/temizlik-takintisi">kontrolsÃ¼z temizlik ve yÄ±kanma</Link> dÃ¶ngÃ¼sÃ¼.</li>
                            <li><strong>SÃ¼rekli Kontrol Etme:</strong> KapÄ±, kilit veya ocak gibi eÅŸyalarÄ±n gÃ¼venliÄŸinden kuÅŸku duyarak <Link href="/blog/surekli-kontrol-etme">defalarca kontrol saÄŸlama</Link>.</li>
                            <li><strong>Dini ve Ahlaki TakÄ±ntÄ±lar:</strong> Bireyin deÄŸer yargÄ±larÄ±na tam zÄ±t yÃ¶nde, irade dÄ±ÅŸÄ± beliren <Link href="/blog/dini-takintilar-okb-mi">istenmeyen dini dÃ¼ÅŸÃ¼nceler</Link>.</li>
                            <li><strong>Zarar Verme DÃ¼ÅŸÃ¼ncesi:</strong> Eyleme dÃ¶nÃ¼ÅŸmeyen ancak hastada "sevdiklerime kazara zarar verir miyim" ÅŸÃ¼phesi yaratan, ÅŸiddetli kaygÄ±yla birlikte gelen sahnelerdir. AyrÄ±ntÄ±lÄ± klinik ayrÄ±m iÃ§in <Link href="/blog/zarar-verme-dusuncesi-okb-mi">zarar verme dÃ¼ÅŸÃ¼ncesi deÄŸerlendirmelerine</Link> bakabilirsiniz.</li>
                        </ul>

                        <h2 id="okb-gecer-mi">OKB GeÃ§er mi?</h2>
                        <p>TakÄ±ntÄ± hastalÄ±ÄŸÄ±nÄ±n iyileÅŸme sÃ¼reci kiÅŸinin tedavi uyumuna, nÃ¶rolojik yapÄ±sÄ±na ve Ã§evresel stresine baÄŸlÄ± olarak kiÅŸiden kiÅŸiye deÄŸiÅŸebilir. Klinik psikiyatri desteÄŸi ile (ilaÃ§ ve psikoterapi odaklÄ± desteklerle) belirtiler Ã¶nemli oranda geriletilerek gÃ¼ndelik yaÅŸam kalitesi korunabilmektedir.</p>
                        <h3>OKB kendi kendine geÃ§er mi?</h3>
                        <p>YerleÅŸmiÅŸ bir klinik OKB tablosunun profesyonel uzmanlÄ±k gerektiren yapÄ±sal ve psikoterapÃ¶tik bir destek olmaksÄ±zÄ±n tamamen kendi kendine dÃ¼zelmesi oldukÃ§a gÃ¼Ã§ bir ihtimaldir.</p>
                        <h3>Tedavi edilmeyen OKB ne olur?</h3>
                        <p>Uzman takibi yapÄ±lmadÄ±ÄŸÄ±nda Ã§oÄŸunlukla belirtiler ÅŸiddetlenerek kiÅŸinin evden Ã§Ä±kamamasÄ±na kadar uzanan sÃ¼reÃ§lerde iÅŸ ve temel sosyal uyumunu felce uÄŸratabilir.</p>

                        <h2 id="anksiyete-iliskisi">OKB ve Anksiyete Ä°liÅŸkisi</h2>
                        <p>
                            Her ikisinde de baÅŸ aktÃ¶r "Korku ve beklenti" mekanizmasÄ±dÄ±r. OKB beyni daima tetiktedir.
                            EÄŸer ocaÄŸÄ± kontrol etmesini (kompulsiyon) engellerseniz, hastanÄ±n iÃ§indeki ateÅŸ (anksiyete/kaygÄ±)
                            tavan yapar; kiÅŸi nefes alamaz, ecel terleri dÃ¶ker ve bazen bu durum fiziksel olarak <Link href="/hizmetler/panik-atak">OKB ile birlikte gÃ¶rÃ¼lebilen panik atak belirtileri</Link> ile birleÅŸebilir.
                            YaygÄ±n kaygÄ±nÄ±n obsesyonu beslediÄŸi net bir birlikteliktir.
                        </p>

                        <h2 id="gunluk-yasam-okb">OKB GÃ¼nlÃ¼k YaÅŸamÄ± NasÄ±l Etkiler?</h2>
                        <p>
                            Birey zihninin yarÄ±sÄ± takÄ±ntÄ±larÄ±yla meÅŸgul olduÄŸu iÃ§in; enerjisini tÃ¼keten (sÃ¼rekli iÃ§inden 10'a kadar sayma
                            veya yollarÄ± belli ritÃ¼ellerle gezme gibi) eylemler yapar. Zihinsel veya fiziki bu eforlar sonucunda,
                            hasta hem iÅŸlevsel tÃ¼kenmiÅŸliÄŸe uÄŸrar hem de <Link href="/blog/okb-gunluk-hayati-nasil-etkiler">sÃ¼rekli
                                olarak sosyal platformdan (Ã§evresinden) soyutlanÄ±r</Link>.
                        </p>

                        <h2 id="is-hayatinda-okb">Ä°ÅŸ HayatÄ±nda OKB YansÄ±malarÄ±</h2>
                        <p>
                            YetiÅŸkin bireylerin en verimli Ã§aÄŸlarÄ±nda, bir dosyayÄ± "acaba yanlÄ±ÅŸ bir cÃ¼mle yazdÄ±m da biri bunu okuyup rezil
                            mi olurum" korkusuyla 20 defa kontrol etmesi mesai saatinin bitmesine, dolayÄ±sÄ±yla baÅŸarÄ±sÄ±z olarak iÅŸ
                            yerinden atÄ±lmasÄ±na bile neden olabilmektedir. Odaklanma becerisi, vesveselere harcanÄ±r.
                        </p>

                        <h2 id="iliskilerde-okb">Ä°liÅŸkilerde OKB</h2>
                        <p>
                            Evlilik veya flÃ¶rtlerde partner iÃ§in OKB hastasÄ± ile yaÅŸamak, belirli kurallara zorunlu uymak anlamÄ±na
                            gelebileceÄŸinden eÅŸler arasÄ± Ã§atÄ±ÅŸma kaÃ§Ä±nÄ±lmaz olur ("Sen de eve gelince o kÄ±yafetleri poÅŸetleyeceksin!" gibi
                            dayatmalar veya sÃ¼rekli eÅŸinin kendisini sevip sevmediÄŸini "emin olmak iÃ§in" sorma takÄ±ntÄ±larÄ±).
                            Bireysel hayatÄ±n sÄ±nÄ±rlarÄ± partner tarafÄ±ndan da aÅŸÄ±lamaz ve bu derin bir buhran doÄŸurur.
                        </p>

                        <h2 id="ne-zaman-psikiyatri">Ne Zaman Psikiyatri DeÄŸerlendirmesi DÃ¼ÅŸÃ¼nÃ¼lmeli?</h2>
                        <p>
                            Åayet bu "kuruntular veya savunma davranÄ±ÅŸlarÄ±":
                        </p>
                        <ul>
                            <li>GÃ¼nde asgari 1 saatinizden fazlasÄ±nÄ± Ã§alÄ±yorsa,</li>
                            <li>Size derin bir kaygÄ±, Ä±zdÄ±rap ve suÃ§luluk (Dini dÃ¼ÅŸÃ¼nceler veyahut Zarar verme fikirleri gibi) veriyorsa,</li>
                            <li>Sizi toplumdan/aÅŸkÄ±nÄ±zdan veya iÅŸ motivasyonunuzdan geri bÄ±rakÄ±yorsa; artÄ±k bireysel uÄŸraÅŸlardan ziyade bilimsel bir psikiyatrik deÄŸerlendirme dÃ¼ÅŸÃ¼nÃ¼lmesinin vakti gelmiÅŸtir.</li>
                        </ul>

                        <h2 id="eryaman-degerlendirme">Ankara Eryamanâ€™da OKB DeÄŸerlendirme SÃ¼reci</h2>
                        <p>
                            ObsesyonlarÄ±nÄ±zla yalnÄ±z baÅŸ etmek, yalnÄ±zca OKB'nin canavarÄ±na daha fazla direniÅŸ gÃ¼cÃ¼
                            aÅŸÄ±lar. TakÄ±ntÄ±larÄ±n "Ne Kadar SÃ¼receÄŸi? KiÅŸiden kiÅŸiye nasÄ±l ÅŸekilleneceÄŸi" (bkz. <Link href="/blog/okb-gecer-mi">OKB'nin Seyri</Link>)
                            iletiÅŸime geÃ§tiÄŸiniz uzman deÄŸerlendirmesinin kÄ±lavuzluÄŸunda yanÄ±t bulur.
                        </p>
                        <p>
                            Ankara Eryaman (Altay Mh.) civarÄ±ndaki Etimesgut - BatÄ±kent arterlerinde yetiÅŸkin hastalarÄ±yla Ã§alÄ±ÅŸan
                            Uzm. Dr. Abdullah MaraÅŸ; sahip olduÄŸunuz bu obsesif zihinsel prangalarÄ±n tÄ±bbi psikiyatrik teÅŸhisini,
                            farmakolojik (ilaÃ§) gerekliliklerini ve terapi eksenindeki klinik vizyonunu planlayarak (bireysel
                            deÄŸerlendirme seanslarÄ±yla) Ã¶zgÃ¼rleÅŸme ÅŸemasÄ±nÄ± tarafÄ±nÄ±za sunmaktadÄ±r.
                        </p>


                        <div className={styles.faqSection} id="sss">
                            <h2>SÄ±k Sorulan Sorular</h2>
                            <FAQSection items={faqItems} />
                        </div>

                        <div className={styles.articleCta}>
                            <h3>TakÄ±ntÄ±lar Kaderiniz DeÄŸil, Beraber AÅŸabiliriz</h3>
                            <p>Zihninizi hapseden tekrarlÄ± dÃ¼ÅŸÃ¼ncelerin bilimsel analizine ve tedavi yaklaÅŸÄ±mlarÄ±na (Ankara Eryaman'da) ulaÅŸmak iÃ§in bize randevu sekmesinden baÄŸlanÄ±n.</p>
                            <Link href="/randevu" className="btn btn--primary btn--lg" style={{ marginTop: 'var(--space-4)' }}>
                                Doktor DeÄŸerlendirme Randevusu â†’
                            </Link>
                        </div>
                    </article>


                    {/* Right: Sidebar */}
                    <aside className={styles.sidebar}>
                        {/* TOC */}
                        <nav className={styles.sidebarCard}>
                            <h4>Bu Sayfada</h4>
                            <ul className={styles.tocList}>
                                <li><a href="#okb-nedir">OKB Nedir?</a></li>
                                <li><a href="#takinti-hastaligi-ne-anlama-gelir">TakÄ±ntÄ± Ne Demek?</a></li>
                                <li><a href="#obsesyon-nedir">Obsesyon (DÃ¼ÅŸÃ¼nce)</a></li>
                                <li><a href="#kompulsiyon-nedir">Kompulsiyon (DavranÄ±ÅŸ)</a></li>
                                <li><a href="#okb-belirtileri">Temel Belirtiler</a></li>
                                <li><a href="#anksiyete-iliskisi">Anksiyete FarkÄ±/Ä°liÅŸkisi</a></li>
                                <li><a href="#gunluk-yasam-okb">YaÅŸam Etkileri</a></li>
                                <li><a href="#is-hayatinda-okb">Mesai-Ä°ÅŸ HayatÄ±</a></li>
                                <li><a href="#iliskilerde-okb">Ä°liÅŸkiler</a></li>
                                <li><a href="#ne-zaman-psikiyatri">Uzm. BaÅŸvurusu</a></li>
                                <li><a href="#eryaman-degerlendirme">Eryaman SÃ¼reÃ§leri</a></li>
                            </ul>
                        </nav>

                        <div className={styles.sidebarCta}>
                            <h3>Psikiyatrist Randevusu</h3>
                            <p>TakÄ±ntÄ±larÄ±nÄ±z (OKB) iÃ§in klinik izleme seanslarÄ± planlayÄ±n (Eryaman, Ankara).</p>
                            <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>DeÄŸerlendirme Al</Link>
                        </div>

                        <div className={styles.sidebarCard}>
                            <h4>Uzman Hekim</h4>
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
                            <h4>Ä°lgili HastalÄ±klar ve Bloklar</h4>
                            <ul className={styles.sidebarLinks}>
                                <li><Link href="/hizmetler/anksiyete">Anksiyete ve KaygÄ±</Link></li>
                                <li><Link href="/hizmetler/depresyon">Depresyon ve Mutsuzluk</Link></li>
                                <li><Link href="/hizmetler/panik-atak">Ani Panik Krizleri</Link></li>
                                <li><Link href="/blog/okb">TakÄ±ntÄ± Blog KÃ¼tÃ¼phanesi</Link></li>
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
                            "name": "Ankara Eryaman OKB DeÄŸerlendirmesi",
                            "url": "https://drabdullahmaras.com/hizmetler/okb",
                            "about": {
                                "@type": "MedicalCondition",
                                "name": "ObsessiveCompulsiveDisorder",
                                "alternateName": "OKB, TakÄ±ntÄ± HastalÄ±ÄŸÄ±"
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
                                { "@type": "ListItem", "position": 3, "name": "OKB", "item": "https://drabdullahmaras.com/hizmetler/okb" }
                            ]
                        }
                    ]
                })
            }} />
        </>
    );
}
