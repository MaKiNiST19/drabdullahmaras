import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Tükenmişlik ve Depresyon Arasındaki Fark | İç İçe Geçen Tablo',
    description:
        'Sürekli yorgunluk, isteksizlik ve burnout sendromunun, majör depresyon hastalığından ne şekilde ayrıldığını ve nasıl birbirini tetiklediğini öğrenin.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/tukenmislik-ve-depresyon-arasindaki-fark' },
    openGraph: {
        title: 'Bunalım mı, Yoksa Tükenmişlik mi? İç İçe Geçen Ruhsal Krizler',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'İkisi aynı hastalık mıdır?',
        answer: 'Tıbbi anlamda hayır. Tükenmişlik (Burnout) genellikle "bir ortamda" veya "bir stres yükünde" başlar ve sebebi az çok bellidir (ofis mobbingi, ağır bakım sorumluluğu). Depresyon ise hiçbir stres faktörü ya da olay yokken de bezi (benliği) kemiren koca bir "hiçlik ve değersizlik" fırtınasıdır.',
    },
    {
        question: 'Tükenmişlik tatile gidince geçer mi, ya depresyon?',
        answer: 'Saf bir tükenmişlik başlangıcı, toksik iş yerinden biraz izole olduğunda hafifçe gevşer, hasta en azından ailesiyle gülebilir. Oysa majör depresyonda olan birini dünyanın en lüks adasına dahi götürseniz; o denizin mavisinden veya yediği etten kramplar (acı) harici (anhedonik/tatsız) hiçbir şey hissetmez.',
    },
    {
        question: 'Tükenmişlik uzun sürerse depresyon olur mu?',
        answer: 'Kesinlikle evet. Aylarca işi bırakamayıp o acıyı (kortisolü) çeken beyin, bir süre sonra sadece işinden değil; yaşamından, umudundan ve kendi değerinden nefret etmeye ("ben başarısız bir insanım" şemasına) geçer ki, bu klinik olarak çökkünlüğün (Depresyonun) resmidir.',
    },
    {
        question: 'Suçluluk duygusu hangisinde görünür?',
        answer: 'Tükenmiş (Burnout) kişi genelde sistemi suçlar ("Bu işyeri çok adaletsiz, bu patron çok zalim"). Oysa depresyona giren birey her felaketin "Zaten ben değersiz olduğum için/Benim suçum" olduğunu (İçsel suçlama) varsayarak tamamen kendini infaz (psikolojik ceza/aşağılama) eder.',
    },
    {
        question: 'Hangi evrede ilaç kullanılmalıdır?',
        answer: 'Zihin "düzelme umudunu" tamamen yitirip (ölüm fantezilerine/sabah hiç kalkamamaya) kilitlendiyse; ya da bedeni "sebepsiz organ ağrıları" ve panikle sarsılıp iflas ettiyse, nörokimyasal regülasyon (Birebir hekim konsültasyonu) psikiyatrinin kırmızı çizgisidir.',
    },
];

export default function TukenmislikDepresyonFarkiBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/tukenmislik-sendromu">Tükenmişlik Kütüphanesi</Link><span>/</span>
                        <span>Burnout vs. Depresyon</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Psikiyatri, Burnout, Depresif Zemin</span>
                        <time dateTime="2026-06-08">08 Haziran 2026</time>
                        <span>•</span><span>5 dk okuma</span>
                    </div>
                    <h1>Tükenmişlik ve Depresyon Arasındaki Fark: Kesişen Karanlıklar</h1>
                    <p className={styles.heroDesc}>
                        Sizi yataktan kaldırmayan, eşinize bile tahammülünüzü sıfırlayan o devasa "hiçlik ve isteksizlik"
                        dalgası; sadece işten kaynaklı bir <strong>Tükenmişlik (Burnout)</strong> mi,
                        yoksa kliniğin en ağır tablolarından (veya birbirlerinden doğan) bir <strong>Majör Depresyon
                            kasırgası mı?</strong> (Tükenmişliğin depresyonla karıştığı durumları ele alıyoruz).
                    </p>
                    <div className={styles.author}>
                        <div className={styles.authorIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <div><strong>Uzm. Dr. Abdullah Maraş</strong><span>(Ankara, Eryaman Klinik Psikiyatrist)</span></div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.articleGrid}>
                        <article className={styles.article}>

                            <h2 id="nedir-stres">O İnce Çizgi (Neredeyim?)</h2>
                            <p>
                                İkisi dışarıdan bakıldığında ikiz kardeş gibi (iki somurtkan-halsiz-öfkeli insan) görünse de,
                                motorları ve klinikleri apayrıdır.
                                <Link href="/blog/tukenmislik-sendromu-nedir">Tükenmişlik (Burnout) sürecinde</Link>
                                kişinin şikâyeti şöyledir: "Ben bu evraklara bakmaktan, bana saygı duymayan
                                patronla/eşle saatlerce cebelleşmekten bıktım.
                                <strong><Link href="/blog/motivasyon-kaybi-neden-olur">Zaten ne yapsam takdir yok</Link></strong>."
                            </p>

                            <p>
                                Oysa <Link href="/hizmetler/depresyon">Major Çökkünlüğün (Depresyonun)</Link>
                                "Burnout"a göre çok daha (yaygın) bir karadeliği vardır. O kişi o patronuyla ilişkisini kesip evinde otursa
                                dahi mutlu olamaz. "Ben zaten tembelim, ben ne yapsam bir işe yaramam ki" zihniyetiyle; çevreyi değil <strong>kendi özbenliğini</strong> yakıp yıkmaya, ezmeye başlamıştır.
                            </p>

                            <h2 id="ikincil-bozukluk">Duyguların Tükenmesi Mi, Ölmesi Mi?</h2>
                            <p>
                                Tükenmiş (Burnout) olan bir hastada
                                <Link href="/blog/surekli-yorgun-hissetmek-psikolojik-mi">sadece bitmek bilmeyen o yorgunluk</Link>
                                (mesleki o tükenmenin bedene vurması) ve o kuruma karşı
                                öfke (tahammülsüzlük) ile
                                <Link href="/blog/ise-gitmek-istememe-hali">işe gitmek istememe isyanı</Link> vardır.
                                Evinde o stres faktöründen uzaklaştığında bir komedi filmine gülme potansiyeli az da olsa vardır.
                            </p>
                            <ul>
                                <li><strong>Anhedoni: </strong> Depresyon tablosunda ise hasta, eskiden canı istediği o komedi filmine,
                                    evdeki kedisinin oyunlarına "tamamen kör-sağır ve hissiz" kalır. Zevk (ödül) kapıları; beynin işlev kaybıyla
                                    beraber (psikiyatrik olarak) mühürlenmiştir.</li>
                            </ul>

                            <h2 id="uyku-uzerinden-karsilastirma">Uykusuzluğun İki Yüzü</h2>
                            <p>
                                Her isyanda beyin uykuyu bozar; ama stilleri çok farklıdır.
                                Tükenmişlik sergileyen hasta; akşamleyin yatağa girdiğinde
                                <Link href="/hizmetler/anksiyete">"O e-posta geldi mi, yarın bankaya para yattı mı?" diyerek Anksiyeteden (endişeden/panikten)</Link>
                                kendi kendine <Link href="/hizmetler/uyku-bozukluklari">uykuya dalamama (insomniya)</Link> cehennemi kurar.
                            </p>
                            <p>
                                Oysa depresyonik birey (bilhassa Atipik olanı) sabahtan akşama dek
                                <Link href="/blog/asiri-uyuma-hipersomnia-nedir">16 saat yatağın içinden hiç çıkmamayı (hayattan tüm perdeleri çekip ölü gibi dondurulmayı)</Link>
                                ya da gece 04:00'te uyanıp (terminal uykusuzluk) "Hayatın o devasa kahrını o karanlıkta kalp ağrısıyla hissetmeyi" zihinsel kaderi yapar.
                            </p>

                            <h2 id="klinik-gecisler">Eryaman Hastalarımızdaki Kopuş: Biriken Tükenmişliğin Depresyona İnmesi</h2>
                            <p>
                                Kliniğimizin en çok karşılaştığı durum; "Sadece iş yerimi sevmiyorum" diye başlayan tükenmişlik kıvılcımının;
                                yıllarca (paraya muhtaç, çaresiz / hayır diyemeyen) bastırılması yüzünden; bir gün
                                <strong>"Ben artık bir şey hissedemeyen (robot) hiçbir değeri olmayan zavallı bir benliğim"</strong> karadeliğine (Majör Depresyona)
                                (kronikleşerek) evrilmesidir.
                                <br />
                                Tükenmişliğin o ilk uyku bozması ve migren atakları; umutsuzlukla birleşince beynin anatomisindeki
                                (serotonin/dopamin vs motorlarındaki) gerçek "Fiziksel-Kimyasal" regülasyon bozukluğunun tablosunu diker.
                            </p>

                            <h2 id="psikiyatrist">Klinik Değerlendirme Zeminimiz (Birebir Konsültasyon)</h2>
                            <p>
                                <Link href="/hizmetler/tukenmislik-sendromu">Ankara Eryaman tükenmişlik değerlendirme (Burnout süreç)</Link>
                                rotamızda; uzman psikiyatrist sadece omuz sıvazlamaz; bireysel terapi (şemaların / benlik duvarının onarımı) ve gerektiği (şiddetin getirdiği)
                                tıbbi farmakolojik adımlarla sizdeki bu ağrının (yanan bu ruh ateşinin) salt bir kurum öfkesi mi,
                                yoksa temeli atılmış ağır bir depresif-anksiyete sarmalı mı olduğunu bizzat çözümler. Şüphesiz her seyir,
                                "kişiden kişiye değişebilir" oluşuyla masaya getirilmelidir.
                            </p>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Klinik Uyarısı</strong>
                                Belirtilen durumlar (Tükenmişlik ve Depresyon çakışmaları) kesin tedavi makaleleriyle %100 oranında silinemez. İnternetten tahlil ederek "Ben depresyonda değilim ki sadece canım işe gitmek istemiyor" şeklindeki yanılgı ve oyalanmalar; krizleri daha devasa tablolara (işsizlik/boşanma gibi) büyüteceğinden, asıl söz hakkı / muayene hakkı doktoradır (hekimliktir).
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <p>Durumun sadece "şanssızlık" veya "kader" değil; nörokimyasal bir tıkanma olabileceğini kabullenmeli; omuzlardaki yükü tıp biliminin kılavuzluğuyla azaltmayı başlamalıyız.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Depresyon / Burnout Belirti Kontrolü (Randevu) →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Teşhisi Kendi Başınıza Koymayın</h3>
                                <p>Sadece "Bıktım" dediğiniz yer, kocaman bir majör atağın başlangıcı olabilir (Eryaman'da kliniğe gelin).</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Klinik Üzerinden Konsültasyon</Link>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>Sendrom Rotasındaki Uzantılar</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/blog/tukenmislik-ne-kadar-surer">Bu İkilem (Burnout) Kaç Ay Sürecek?</Link></li>
                                    <li><Link href="/blog/tukenmislik-sendromu-belirtileri-nelerdir">Hangi Belirti Daha Acil Gelir?</Link></li>
                                    <li><Link href="/hizmetler/depresyon">Majör Çöküşün Tıbbi Test Zeminleri Nelerdi?</Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* Application / JSON */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org", "@type": "FAQPage",
                    mainEntity: faqItems.map(f => ({
                        "@type": "Question", name: f.question,
                        acceptedAnswer: { "@type": "Answer", text: f.answer },
                    })),
                })
            }} />
        </>
    );
}
