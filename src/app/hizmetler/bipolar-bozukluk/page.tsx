import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon/page.module.css';

export const metadata: Metadata = {
    title: 'Ankara Eryaman Bipolar Bozukluk DeÄŸerlendirmesi | Uzm. Dr. Abdullah MaraÅŸ',
    description:
        'Bipolar bozukluk belirtileri, mani ve depresyon dÃ¶nemleri hakkÄ±nda bilgilendirme ve Eryamanâ€™da psikiyatrik deÄŸerlendirme sÃ¼reci.',
    alternates: { canonical: 'https://drabdullahmaras.com/hizmetler/bipolar-bozukluk' },
    openGraph: {
        title: 'Ankara Eryamanâ€™da Bipolar Bozukluk DeÄŸerlendirmesi',
        description: 'Bipolar bozukluk belirtileri, mani ve depresyon dÃ¶nemleri hakkÄ±nda bilgilendirme ve Eryamanâ€™da psikiyatrik deÄŸerlendirme sÃ¼reci.',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Bipolar bozukluk nedir?',
        answer: 'Bipolar bozukluk, beynin enerji ve duygu durumunu dÃ¼zenleyen kimyasallarÄ±ndaki farklÄ±lÄ±klar nedeniyle, kiÅŸinin yaÅŸamÄ±nda birbirine zÄ±t iki ayrÄ± uÃ§ta tepki verdiÄŸi (bazen aÅŸÄ±rÄ± coÅŸkulu bazen tamamen Ã§Ã¶kkÃ¼n) biyolojik kÃ¶kenli dÃ¶ngÃ¼sel bir klinik durumdur. YalnÄ±zca bireysel deÄŸerlendirme ile ayrÄ±mÄ± saÄŸlanÄ±r.',
    },
    {
        question: 'Bipolar belirtileri nelerdir?',
        answer: 'Mani (coÅŸku) dÃ¶neminde az uykuya raÄŸmen yÃ¼ksek enerji, aÅŸÄ±rÄ± hÄ±zlÄ± konuÅŸma, riskli maddi/manevi adÄ±mlar atma; depresif dÃ¶nemde ise yataktan Ã§Ä±kamama, enerjisizlik, ilgi kaybÄ± ve yoÄŸun mutsuzluk hali temel bulgulardÄ±r.',
    },
    {
        question: 'Mani dÃ¶nemi nedir?',
        answer: 'Mani dÃ¶nemi (Manik Atak), hastanÄ±n normal karakterinin Ã¶tesine Ã§Ä±karak kendini aÅŸÄ±rÄ± Ã¶zgÃ¼venli, enerjik ve gÃ¼Ã§lÃ¼ hissettiÄŸi, Ã§oÄŸu zaman dÃ¼rtÃ¼sel kararlar alabildiÄŸi "yÃ¼ksek" duygudurum halidir.',
    },
    {
        question: 'Bipolar ile depresyon farkÄ± nedir?',
        answer: 'MajÃ¶r depresyonda hasta yalnÄ±zca Ã§Ã¶kkÃ¼n (dÃ¼ÅŸÃ¼k duygu) yaÅŸarken, bipolarda depresyon tablolarÄ±na mutlaka yaÅŸamÄ±n bir evresinde coÅŸku/enerji patlamasÄ± (mani veya hipomani) eÅŸlik eder. Bu farklÄ±lÄ±k, tedavi yapÄ±landÄ±rmasÄ± aÃ§Ä±sÄ±ndan psikiyatrik bir uzman deÄŸerlendirmesi gerektirir.',
    },
    {
        question: 'Bipolar ataklar ne kadar sÃ¼rer?',
        answer: 'KiÅŸiden kiÅŸiye deÄŸiÅŸebilir. BazÄ± dÃ¶nemler haftalarca, kimi zaman aylarca sÃ¼rebilmektedir. HÄ±zlÄ± dÃ¶ngÃ¼lÃ¼ (rapid cycling) formlarda bir yÄ±l iÃ§inde birden fazla zÄ±t dÃ¶nem gÃ¶rÃ¼lebilir.',
    },
    {
        question: 'Bipolar kendi kendine dÃ¼zelir mi?',
        answer: 'HayÄ±r. Beyin kimyasÄ±ndaki bu organik oynamalar sadece irade veya "kendine gel" telkinleriyle geÃ§ici olarak bastÄ±rÄ±lamaz. TÄ±bbi ve bilimsel (psikiyatrist) kÄ±lavuzluÄŸunda ele alÄ±nmasÄ± gereken kalÄ±cÄ±/dalgalÄ± bir yapÄ±sal durumdur.',
    },
    {
        question: 'Bipolar iÃ§in hangi doktora gidilir?',
        answer: 'YetiÅŸkinlerde bu tip zÄ±t dÃ¶ngÃ¼lerin ruhsal dengedeki yansÄ±masÄ±nÄ± sadece Ruh SaÄŸlÄ±ÄŸÄ± ve HastalÄ±klarÄ± (Psikiyatri) doktorlarÄ± deÄŸerlendirebilir ve biyolojik altyapÄ±sÄ±nÄ± tedavi eder.',
    },
    {
        question: 'Eryamanâ€™da bipolar deÄŸerlendirmesi nasÄ±l yapÄ±lÄ±r?',
        answer: 'Ankara (Eryaman) bÃ¶lgesinde hizmet veren kliniÄŸimizde yetiÅŸkin danÄ±ÅŸanlarÄ±n klinik Ã¶ykÃ¼leri derinlemesine dinlenir; depresyon ile bipolar ayrÄ±mÄ± saÄŸlanarak kiÅŸisel tÄ±bbi/terapÃ¶tik takip planÄ± Uzm. Dr. Abdullah MaraÅŸ kontrolÃ¼nde iÅŸlenir.',
    },
];

export default function BipolarPillarPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroBg}><div className={styles.heroOrb}></div></div>
                <div className={`container ${styles.heroContent}`}>
                    <Link href="/hizmetler" className={styles.backLink}>â† TÃ¼m DeÄŸerlendirme AlanlarÄ±</Link>
                    <span className={styles.heroIcon}>ğŸ­</span>
                    <h1>Ankara Eryamanâ€™da Bipolar Bozukluk DeÄŸerlendirmesi</h1>
                    <p className={styles.heroDesc}>
                        HayatÄ±n bazÄ± dÃ¶nemlerinde fÄ±rtÄ±na gibi eserken, diÄŸer yanÄ±yla tamamen sessizliÄŸe ve bitkinliÄŸe
                        gÃ¶mÃ¼lmenin zorlu yapÄ±sÄ±nÄ± anlamak, bilimsel bir psikiyatrik yaklaÅŸÄ±mÄ± mecburi kÄ±lar.
                        YetiÅŸkinlikte ortaya Ã§Ä±kan bu duygu durum dalgalanmalarÄ±nÄ± klinik adÄ±mlarÄ±yla ele alÄ±yoruz.
                    </p>
                    <div className={styles.author}>
                        <div className={styles.authorIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <div><strong>Uzm. Dr. Abdullah MaraÅŸ</strong><span>Ruh SaÄŸlÄ±ÄŸÄ± (Psikiyatrist) UzmanÄ±</span></div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className={`container ${styles.contentGrid}`}>
                    <article className={styles.article}>

                        <p className={styles.lead}>
                            Psikiyatristlere mÃ¼racaat eden bazÄ± yetiÅŸkinlerin hikayesi ÅŸÃ¶yledir:
                            "Bir dÃ¶nem Ã§ok enerjik oluyorum, uykusuz olsam bile tÃ¼kenmiyorum, kafamda sÃ¼rekli yeni
                            planlar var ve bir anda her ÅŸeyi yapabileceÄŸimi dÃ¼ÅŸÃ¼nÃ¼yorum; ancak sonraki sÃ¼reÃ§te
                            enerjim birdenbire kesiliyor, haftalarca hiÃ§bir ÅŸey yapmak istemiyorum ve yataktan
                            Ã§Ä±kamÄ±yorum..." Ä°ÅŸte bu sÄ±radan bir "kararsÄ±zlÄ±k" veya "dengesizlik" tablosu deÄŸil; tÄ±p biliminde nÃ¶robiyolojik
                            olarak incelenen Ä°ki UÃ§lu (Bipolar) Duygudurum BozukluÄŸu'nun klasik Ã¶ykÃ¼sÃ¼dÃ¼r.
                        </p>

                        <h2 id="bipolar-bozukluk-nedir">Bipolar Bozukluk Nedir?</h2>
                        <p>Bipolar bozukluk, kiÅŸinin ruh hali ve enerji seviyelerinde uÃ§ noktalar olan coÅŸku (mani) ve Ã§Ã¶kÃ¼ÅŸ (depresyon) ataklarÄ± yaÅŸamasÄ±na sebep olan klinik psikiyatrik bir hastalÄ±ktÄ±r. Bu dalgalanmalarÄ±n ortaya Ã§Ä±kÄ±ÅŸ ÅŸekli ve ÅŸiddeti kiÅŸiden kiÅŸiye deÄŸiÅŸebilir.</p>
                        <h3>Bipolar bozukluk kimlerde gÃ¶rÃ¼lÃ¼r?</h3>
                        <p>Genellikle ilk belirtilerini genÃ§ yetiÅŸkinlik Ã§aÄŸÄ±nda gÃ¶stermeye baÅŸlayan bu durum, genetik biyolojik yatkÄ±nlÄ±ÄŸÄ± bulunan bireylerde Ã§eÅŸitli Ã§evresel streslerle ve uyku sorunlarÄ±yla tetiklenebilir.</p>
                        <h3>Bipolar hastalÄ±k kalÄ±tsal mÄ±?</h3>
                        <p>Klinik araÅŸtÄ±rmalar, birinci derece yakÄ±nlarÄ±nda bipolar bozukluk veya majÃ¶r depresyon Ã¶ykÃ¼sÃ¼ bulunan kiÅŸilerde bu durumu geliÅŸtirme riskinin daha yÃ¼ksek olduÄŸunu iÅŸaret etmektedir.</p>
                        <p>
                            GeÃ§miÅŸteki adÄ±yla "Manik Depresif HastalÄ±k" olarak bilinen <strong>Bipolar Bozukluk</strong>,
                            kiÅŸinin enerji seviyesinde, zihinsel hÄ±zÄ±nda, muhakemede ve ruh halinde sÄ±radan veya olaÄŸan dalgalanmalardan
                            Ã§ok daha keskin, ÅŸiddetli zÄ±tlÄ±klar (uÃ§lar) yaÅŸamasÄ±na neden olan beyin temelli tÄ±bbi bir hastalÄ±ktÄ±r.
                            HastanÄ±n ruh hali haftalar ya da aylar boyu bir "taÅŸkÄ±nlÄ±k ve yÃ¼ksek enerji" periyodu ile, "tam bir Ã§Ã¶kÃ¼ÅŸ (depresyon)"
                            dÃ¶nemi arasÄ±nda devir daim halindedir. Bu geÃ§iÅŸler nadiren kÄ±sa aralÄ±klÄ± olabilirken genellikle belirgin
                            denge deÄŸiÅŸimleri ile tariflenir.
                        </p>

                        <h2 id="bipolar-ile-depresyon-farki">Bipolar Bozukluk Ä°le Depresyon ArasÄ±ndaki Fark</h2>
                        <p>
                            Ã‡oÄŸu birey doktora Ã§Ã¶kkÃ¼nlÃ¼k devresinde gittiÄŸi iÃ§in sÄ±klÄ±kla sadece "Depresyon" tablosu gÃ¶rÃ¼nÃ¼r.
                            Halbuki <Link href="/hizmetler/depresyon">klasik bir majÃ¶r depresyonda</Link> kiÅŸi hayatÄ±
                            boyunca genellikle bu Ã§Ã¶kkÃ¼nlÃ¼ÄŸÃ¼ ya da nispeten normal bir rutini yaÅŸar. Oysa Bipolar yapÄ±da
                            kiÅŸi, o karanlÄ±k dÃ¶nemden Ã§Ä±kÄ±p bir noktada kontrolÃ¼nÃ¼ kaybedecek denli, Ã¶zgÃ¼ven ve coÅŸku patlamasÄ±
                            yaÅŸadÄ±ÄŸÄ± bir dÃ¶neme girer.
                        </p>
                        <p>
                            Psikiyatri alanÄ±nda bu noktada yapÄ±lan bireysel uzman deÄŸerlendirmesi hayati derecede
                            mÃ¼himdir. EÄŸer hastanÄ±n enerji artÄ±ÅŸ Ã¶ykÃ¼sÃ¼ fark edilmeden salt Ã§Ã¶kkÃ¼nlÃ¼k tedavisi yapÄ±landÄ±rÄ±lÄ±rsa, bu durum beyni
                            karanlÄ±ktan sadece aydÄ±nlÄ±ÄŸa deÄŸil; en uca, yani "patlamaya" (maniye) itebilir. HastalÄ±k teÅŸhisinin ayrÄ±mÄ± doÄŸrudan
                            bir doktor gÃ¶zetimine aittir.
                        </p>

                        <h2 id="mani-donemi-nedir">Mani DÃ¶nemi Nedir?</h2>
                        <p>
                            Mani dÃ¶nemi bipolar duygu durumunun ilk ucu (high / yÃ¼ksek) olarak bilinir. Ancak, Ã§oÄŸu film
                            veyahut kulaktan dolma bilgi bu tabloyu sadece bir "aÅŸÄ±rÄ± mutluluk ya da hazzÄ±n doruÄŸu" gibi yansÄ±tarak bÃ¼yÃ¼k
                            bir hataya imza atar. Klinik aÃ§Ä±dan mani evresi romantize edilmeyecek kadar ciddi bir zihinsel sapmadÄ±r.
                            KiÅŸi uyumadan gÃ¼nlerce idare edebiliyorum der, beyni adeta aÅŸÄ±rÄ± hÄ±zlÄ± Ã§alÄ±ÅŸan bir motora dÃ¶nÃ¼ÅŸÃ¼r ve
                            sonunda freni (muhakemeyi) patlatÄ±r. KararlarÄ± akÄ±l sÃ¼zgecinden kopar.
                        </p>

                        <h2 id="hipomani-nedir">Hipomani Nedir?</h2>
                        <p>
                            Hipomani de tÄ±pkÄ± mani gibi bir enerji ve duygu yÃ¼kselmesi dÃ¶nemidir ancak klinik boyutta
                            maniden daha hafif seyreder. Hasta Ã§oÄŸunlukla enerjik, yaratÄ±cÄ±, Ã§ok konuÅŸkandÄ±r ve az
                            uyumasÄ±na karÅŸÄ±n kendini mÃ¼kemmel hisseder.
                        </p>
                        <p>
                            Bu sÃ¼reÃ§ o kadar "hoÅŸa giden, Ã¼retken ve Ã§ekici" gelir ki, birey veya Ã§evresi bir hastalÄ±ÄŸÄ±n iÅŸareti
                            olduÄŸunu genelde anlamaz ("Ã‡ok Ã§alÄ±ÅŸkan oldu", "Acayip baÅŸarÄ±lÄ± ve sosyal"). Ne yazÄ±k ki hipomaninin sonu
                            da er ya da geÃ§ yorgun beynin iflas etmesi ile bÃ¼yÃ¼k depresyon duvarÄ±na Ã§arpmakla sonuÃ§lanmaktadÄ±r.
                        </p>

                        <h2 id="depresif-donem-nedir">Depresif (Ã‡Ã¶kkÃ¼nlÃ¼k) DÃ¶nem</h2>
                        <p>
                            Bipolar hastalÄ±ÄŸÄ±n ikinci ve genelde en yÄ±kÄ±cÄ± ucudur. CoÅŸku ile adeta stratosfere Ã§Ä±kan
                            zihnin motoru yanar ve hasta yere Ã§akÄ±lÄ±r. Beyin artÄ±k hiÃ§bir uyaranÄ± alamaz, sevinemez. Daha birkaÃ§
                            hafta Ã¶nce her ÅŸeyi baÅŸarabileceÄŸine inanan o karakter gider; yerine yataktan Ã§Ä±kmaya bile
                            mecali olmayan, umutsuz bir birey gelir. Bu dÃ¼ÅŸÃ¼ÅŸ, bedensel hareketlerin yavaÅŸlamasÄ±na dek
                            varabilen biyolojik bir "pilin bitiÅŸi" anÄ±dÄ±r.
                        </p>

                        <h2 id="mani-belirtileri">Mani DÃ¶neminde GÃ¶rÃ¼len Belirtiler</h2>
                        <p>
                            Bir hastada manik tablonun ortaya Ã§Ä±ktÄ±ÄŸÄ± sÄ±rada karÅŸÄ±laÅŸÄ±lan ana psikiyatrik unsurlar ÅŸunlardÄ±r:
                        </p>
                        <ul>
                            <li><strong>Uyku Ä°htiyacÄ±nda Azalma:</strong> Sadece 2 saat uyuyarak bÃ¼tÃ¼n gÃ¼n koÅŸuÅŸturmak ve zerre yorulmamak.</li>
                            <li><strong>Savruk / DÃ¼rtÃ¼sel Harcama:</strong> Gereksiz yere evler, arabalar almak, hiÃ§ dÃ¼ÅŸÃ¼nmeden tÃ¼m birikimi bitirme hissi.</li>
                            <li><strong>BÃ¼yÃ¼klÃ¼k HezeyanlarÄ± (GrandiÃ¶zite):</strong> Ã‡ok Ã¶zel, dÃ¼nyanÄ±n en zeki, en gÃ¼Ã§lÃ¼ (bazen dini elÃ§i) hissetme, aÅŸÄ±rÄ± ve abartÄ±lÄ± Ã¶zgÃ¼ven.</li>
                            <li><strong>BasÄ±nÃ§lÄ± KonuÅŸma (Logore):</strong> Susturulamaz biÃ§imde Ã§ok hÄ±zlÄ±, konudan konuya atlayarak konuÅŸmak (Zihindeki hÄ±z aÄŸÄ±zdan taÅŸar).</li>
                            <li><strong>DÃ¼rtÃ¼ KontrolsÃ¼zlÃ¼ÄŸÃ¼:</strong> Riskli iliÅŸkiler ve sÄ±nÄ±rlarÄ± aÅŸan olaÄŸandÄ±ÅŸÄ± sosyal cesaretler.</li>
                        </ul>

                        <h2 id="depresif-belirtiler">Depresif DÃ¶nemde GÃ¶rÃ¼len Belirtiler</h2>
                        <p>
                            HastanÄ±n mani sonrasÄ± girdiÄŸi "kÄ±ÅŸ uykusu" periyodunda ise ÅŸu klinik unsurlara rastlanÄ±r:
                        </p>
                        <ul>
                            <li><strong>YoÄŸun Ã‡Ã¶kkÃ¼nlÃ¼k:</strong> GÃ¼n boyu ve haftalar sÃ¼ren derin, anlamsÄ±z bir melankoli, aÄŸlama hisleri.</li>
                            <li><strong>Kaybedilen Ä°lgi:</strong> Daha evvel heyecanlandÄ±ÄŸÄ± (hatta mani dÃ¶neminde taparcasÄ±na sevdiÄŸi) hobilere veya eÅŸine/iÅŸine dair sÄ±fÄ±r hissiyat (Anhedoni).</li>
                            <li><strong>Enerji TÃ¼kenmesi:</strong> DuÅŸ almak veya yataÄŸÄ± toplamak gibi en ufak eylemin daÄŸa tÄ±rmanmak gibi zor gelmesi.</li>
                            <li><strong>Odaklanma Sorunu:</strong> Karar verememe, dikkat eksikliÄŸi ve Ã¶lÃ¼m dÃ¼ÅŸÃ¼ncelerinin zihni yoklamasÄ±.</li>
                        </ul>

                        <h2 id="ataklar-ne-kadar-surer">Bipolar Ataklar Ne Kadar SÃ¼rer?</h2>
                        <p>Bipolar ataklarÄ±n uzunluÄŸu ve ÅŸiddeti hastanÄ±n durumuna ve klinik sÃ¼recine gÃ¶re kiÅŸiden kiÅŸiye deÄŸiÅŸebilir. Manik (taÅŸkÄ±nlÄ±k) dÃ¶nemler genellikle haftalar boyunca devam ederken, depresif ataklar Ã§oÄŸunlukla aylarca sÃ¼rme eÄŸilimi gÃ¶stermektedir.</p>
                        <h3>Bipolar mani evresi biter mi?</h3>
                        <p>Evet, manik epizodlar sÄ±nÄ±rsÄ±z deÄŸildir ve eninde sonunda yatÄ±ÅŸÄ±r; ancak uzman bir klinik izlem olmadÄ±ÄŸÄ±nda yÃ¼ksek ihtimalle Ã§ok aÄŸÄ±r bir majÃ¶r depresif dÃ¶neme Ã§Ä±rpÄ±nÄ±ÅŸ gerÃ§ekleÅŸtirir.</p>
                        <h3>Ã–timi (saÄŸlam) dÃ¶nem ne kadardÄ±r?</h3>
                        <p>Uzman psikiatrist hekim yaklaÅŸÄ±mlarÄ±yla saÄŸlanan klinik Ã¶timi (dengeli) dÃ¶nemi, baÅŸarÄ±lÄ± bir takip altÄ±nda yÄ±llarca devam ettirilebilir ve hastanÄ±n yaÅŸam kalitesi korunabilir.</p>
                        <p>
                            Klinik sÃ¼reÃ§ tÄ±bbiyede net rakamlarla Ã¶lÃ§Ã¼lemez Ã§Ã¼nkÃ¼ genetik miras ve yaÅŸam stili farklÄ±dÄ±r.
                            DÃ¼zenli bir atak sÃ¼reci belirtmeden ÅŸÃ¶yle tariflenebilir: Seyir kiÅŸiden kiÅŸiye deÄŸiÅŸebilir.
                            Mani dÃ¶nemleri genelde haftalarca sÃ¼rebilirken, ardÄ±ndan gelen depresyon (eÄŸer araya normalleÅŸme
                            periyodu girmiÅŸse ya da hemen dÃ¼ÅŸmÃ¼ÅŸse) Ã§ok daha yayÄ±lan aylarca sÃ¼ren bir evre ÅŸekline bÃ¼rÃ¼nebilmektedir.
                        </p>

                        <h2 id="bipolar-gunluk-yasam">Bipolar Bozukluk GÃ¼nlÃ¼k YaÅŸamÄ± NasÄ±l Etkiler?</h2>
                        <p>
                            DÃ¼zenli ve olaÄŸan bir yaÅŸam iÃ§in bireyin duygu durum dengesi "orta bir bandol" Ã¼zerinde akmalÄ±dÄ±r. Oysa
                            bipolar yaÅŸayan bir zihinde bu bandol sÃ¼rekli geniÅŸleyen yaylar gibi sarsÄ±lÄ±r. HastalÄ±ÄŸÄ±n teÅŸhis edilmediÄŸi
                            tablolarda kiÅŸi sÃ¼rekli huysuzlanan, gÃ¼venilmeyen ya da "Ne yapacaÄŸÄ± hiÃ§ belli deÄŸil" diye dÄ±ÅŸarÄ±dan
                            etiketlenen dengesiz bir kalÄ±ba sokulur ve hayat potansiyelini tÃ¼ketir.
                        </p>

                        <h2 id="is-hayatinda-bipolar">Ä°ÅŸ HayatÄ±nda Bipolar Tablo</h2>
                        <p>
                            Bipolar evrelerinin en aÄŸÄ±r zararÄ± ekonomik ve kariyer yÃ¶netimi alanÄ±ndadÄ±r. Mani evresindeki kiÅŸi
                            ansÄ±zÄ±n ÅŸirketini satabilir, iÅŸyerinde yÃ¶neticisine veya Ã§alÄ±ÅŸma arkadaÅŸÄ±na abartÄ±lÄ± hakaretlerde
                            bulunarak anÄ±nda kovulacak hatalar (patlamalar) yaÅŸayabilir. Ä°ÅŸini o kadar kusursuz
                            gÃ¶rÃ¼r ki takÄ±m uyumunu ezer geÃ§er. Ã‡Ã¶kkÃ¼n olduÄŸu evrelerde ise tam tersi;
                            iÅŸ yerindeki sorumluluklarÄ±na ayak basamaz, sÃ¼rekli izin alÄ±r. Bu sÃ¼rdÃ¼rÃ¼lebilirlik kopukluÄŸu;
                            istihdam yapÄ±sÄ±nda bÃ¼yÃ¼k gedikler doÄŸurur.
                        </p>

                        <h2 id="iliskilerde-bipolar">Ä°liÅŸkilerde Bipolar DÃ¶nemler</h2>
                        <p>
                            Evlilik veya uzun soluklu bir iliÅŸkiler bÃ¼tÃ¼nlÃ¼ÄŸÃ¼nde, bipolar partnerin "fÄ±rtÄ±nalarÄ±" eÅŸin omzuna
                            ciddi bir yÄ±pranma (tÃ¼kenmiÅŸlik) bindirir. DÃ¼rtÃ¼sel zamanlarÄ±nda girdiÄŸi sosyal savurganlÄ±k,
                            Ã¶fke patlamalarÄ± veya mantÄ±ksÄ±z kararlara karÅŸÄ± Ã§Ä±kan eÅŸi "dÃ¼ÅŸman / beni engelliyorsun" olarak kodlar.
                            BÃ¼tÃ¼n bu yapÄ±lar iliÅŸkinin temel taÅŸlarÄ±nÄ± yÄ±kÄ±ma uÄŸratÄ±r.
                        </p>

                        <h2 id="bipolar-ve-anksiyete">Bipolar ve Anksiyete Ä°liÅŸkisi</h2>
                        <p>
                            KarmaÅŸÄ±k (mix) dÃ¶nemlerde veya bipolarÄ±n yapÄ±sal iÅŸleyiÅŸinde arka planda genellikle Ã§ok ciddi
                            bir yaygÄ±n <Link href="/hizmetler/anksiyete">anksiyete (korku ve telaÅŸ) tablosu</Link> yatar.
                            KiÅŸi geleceÄŸinden korkar, hasta olduÄŸunun bazen bilincinde olarak kendi zihninden
                            (acaba yine o fÄ±rtÄ±nalÄ± gÃ¼ne mi giriyorum diyerek) korku duymasÄ± Ã§ok net bir psikiyotrik haritadÄ±r.
                        </p>

                        <h2 id="bipolar-ve-panik-atak">Bipolar ve Panik Atak Ä°liÅŸkisi</h2>
                        <p>
                            Ã‡arpÄ±ntÄ±, ani bir kalp krizi geÃ§iriyormuÅŸ hissi gibi bedensel alarm veren <Link href="/hizmetler/panik-atak">panik atak
                                bulgularÄ±nÄ±n</Link>, bipolar bozukluÄŸa sahip vakalarda daha sÄ±k tetiklenebileceÄŸi gÃ¶zlenmektedir. Biyolojik
                            dalgalanma o kadar gÃ¼Ã§lÃ¼dÃ¼r ki, vÃ¼cudun sempatik sinir sistemi kolaylÄ±kla paniÄŸe doÄŸru savrulabilir.
                            (Klinik komorbidite - beraber seyreden durumlar).
                        </p>

                        <h2 id="ne-zaman-uzman">Ne Zaman Psikiyatri DeÄŸerlendirmesi DÃ¼ÅŸÃ¼nÃ¼lmeli?</h2>
                        <p>
                            EÄŸer yukarÄ±da sayÄ±lan "aÅŸÄ±rÄ± canlanma - anlamsÄ±zca Ã§Ã¶kme" zÄ±tlÄ±ÄŸÄ±nÄ± hayatÄ±nÄ±zÄ±n belli periyotlarÄ±nda
                            net biÃ§imde gÃ¶zlemliyorsanÄ±z veya yakÄ±n Ã§evreniz size "eskisi gibi deÄŸilsin, bir durgunsun bir coÅŸkulusun"
                            diyor ise bu durumu tek baÅŸÄ±na Ã¼stlenmeyin. AyrÄ±ca <Link href="/hizmetler/okb">obsesif (istenmeyen takÄ±ntÄ±lÄ±) eforlarÄ±n</Link> dahi
                            zemininde yatan kimyasal deÄŸiÅŸimler hekim nezaretinde ele alÄ±nÄ±r.
                        </p>

                        <h2 id="eryaman-degerlendirme">Ankara Eryamanâ€™da Bipolar DeÄŸerlendirme SÃ¼reci</h2>
                        <p>
                            Ankara Eryaman'da, Etimesgut ve BatÄ±kent havzasÄ±ndaki eriÅŸkin psikiyatri hastalarÄ±na kapÄ±sÄ±nÄ± aralayan
                            Uzm. Dr. Abdullah MaraÅŸ, bipolar bozukluÄŸa dair o zorlu dÃ¶nemeÃ§leri tÄ±bbi bilimin izin verdiÄŸi metodoloji
                            ile (bireysel deÄŸerlendirme / psikiyatrik gÃ¶rÃ¼ÅŸme ile) deÄŸerlendirmektedir.
                        </p>
                        <p>
                            UnutulmamalÄ±dÄ±r ki, bipolar "garanti tamamen sÃ¶kÃ¼lÃ¼p atÄ±lÄ±r" veya "%100 baÅŸarÄ±yla bitecektir" gibi sahte reklam sÃ¶ylemleriyle
                            deÄŸil, alanÄ±nda gÃ¼venilir psikiyatristlerin uyguladÄ±ÄŸÄ± dalgalanmayÄ± koruyucu yaklaÅŸÄ±mlarla (farmakolojik planlamalar) yatÄ±ÅŸtÄ±rÄ±lÄ±r.
                            Uzm. Dr. Abdullah MaraÅŸ / Ruh SaÄŸlÄ±ÄŸÄ± KliniÄŸindeki uzman deÄŸerlendirmesi, zihninizdeki bu dalgalarÄ± gÃ¼venli bir limana
                            oturtmanÄ±zÄ± amaÃ§layan, gizlilik ve saygÄ± odaklÄ± klinik bir kapÄ±dÄ±r.
                        </p>

                        <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                            <strong>ğŸ“Œ TÄ±bbi Bilgilendirme ve UyarÄ± Bildirimi</strong>
                            Bu ve buna benzer iÃ§erikler tÄ±bbi muayenenin, birebir hekim deÄŸerlendirmesinin ya da reÃ§etenin yerini tutmayÄ± amaÃ§lamaz.
                            Psikiyatristiniz tarafÄ±ndan ÅŸahsen yapÄ±lmayan hiÃ§bir tanÄ±, internetteki okumalarÄ±nÄ±z Ä±ÅŸÄ±ÄŸÄ±nda kiÅŸiye konulamaz. KliniÄŸimiz
                            saÄŸlÄ±k bakanlÄ±ÄŸÄ± kÄ±sÄ±tlarÄ±na tam uyumlu ilerlemekte olup, "kesin tedavi, kalÄ±cÄ± iyileÅŸme baÅŸarÄ±sÄ±" vadetmez; tedaviler hastalÄ±ÄŸÄ±n durumuna ve kiÅŸiye Ã¶zel seyreder. YetiÅŸkin psikiyatrisi hizmetlerimiz sadece belirli yaÅŸ grubundakileri (ergen ve Ã§ocuk
                            hariÃ§) kapsamaktadÄ±r.
                        </div>

                        <div className={styles.faqSection} id="sss">
                            <h2>SÄ±k Sorulan Sorular</h2>
                            <FAQSection items={faqItems} />
                        </div>

                        <div className={styles.articleCta}>
                            <h3>DalgalarÄ±n HayatÄ±nÄ±zÄ± SavurmasÄ±na Ä°zin Vermeyin</h3>
                            <p>Aylarca sÃ¼ren tÃ¼kenmiÅŸliÄŸinizi ya da sizi hatalara iten o sahte enerjinizi Ankara Eryaman'daki kliniÄŸimizde uzman hekimle yapÄ±landÄ±rarak deÄŸerlendirin.</p>
                            <Link href="/randevu" className="btn btn--primary btn--lg" style={{ marginTop: 'var(--space-4)' }}>
                                Bireysel GÃ¶rÃ¼ÅŸme Randevusu â†’
                            </Link>
                        </div>
                    </article>

                    <aside className={styles.sidebar}>
                        <nav className={styles.sidebarCard}>
                            <h4>Sayfa Rehberi</h4>
                            <ul className={styles.tocList}>
                                <li><a href="#bipolar-bozukluk-nedir">Bipolar Nedir?</a></li>
                                <li><a href="#bipolar-ile-depresyon-farki">Depresyon ve FarkÄ±</a></li>
                                <li><a href="#mani-donemi-nedir">Mani Evresi</a></li>
                                <li><a href="#hipomani-nedir">Hipomani (Hafif TaÅŸkÄ±nlÄ±k)</a></li>
                                <li><a href="#depresif-donem-nedir">Depresyon Haline DÃ¶nÃ¼ÅŸ</a></li>
                                <li><a href="#mani-belirtileri">Mani Belirtileri</a></li>
                                <li><a href="#depresif-belirtiler">Ã‡Ã¶kkÃ¼nlÃ¼k Belirtileri</a></li>
                                <li><a href="#ataklar-ne-kadar-surer">Ne Kadar SÃ¼rer?</a></li>
                                <li><a href="#bipolar-gunluk-yasam">GÃ¼nlÃ¼k YaÅŸam</a></li>
                                <li><a href="#is-hayatinda-bipolar">Ä°ÅŸ Evresi</a></li>
                                <li><a href="#iliskilerde-bipolar">Ä°liÅŸkiler</a></li>
                                <li><a href="#bipolar-ve-anksiyete">Anksiyete FarkÄ±</a></li>
                                <li><a href="#bipolar-ve-panik-atak">Panik Atak GÃ¶rÃ¼nÃ¼mÃ¼</a></li>
                                <li><a href="#ne-zaman-uzman">Ne Zaman Hekime Gidilmeli?</a></li>
                                <li><a href="#eryaman-degerlendirme">Eryaman Ä°zlem SÃ¼reci</a></li>
                            </ul>
                        </nav>

                        <div className={styles.sidebarCta}>
                            <h3>Ankara TÄ±bbi GÃ¶rÃ¼ÅŸme</h3>
                            <p>Bipolar zÄ±tlÄ±klar iÃ§in klinik muayenenizi planlayÄ±n.</p>
                            <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Doktor DeÄŸerlendirmesi</Link>
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
                            "name": "Ankara Eryaman Bipolar Bozukluk DeÄŸerlendirmesi",
                            "url": "https://drabdullahmaras.com/hizmetler/bipolar-bozukluk",
                            "about": {
                                "@type": "MedicalCondition",
                                "name": "BipolarDisorder",
                                "alternateName": "Bipolar Bozukluk, Manik Depresif HastalÄ±k"
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
                                { "@type": "ListItem", "position": 3, "name": "Bipolar Bozukluk", "item": "https://drabdullahmaras.com/hizmetler/bipolar-bozukluk" }
                            ]
                        }
                    ]
                })
            }} />
        </>
    );
}
