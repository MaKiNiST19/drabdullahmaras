import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Bipolar Atak Ne Kadar Sürer? (Mani ve Depresyon Süreleri)',
    description:
        'Bipolar bozuklukta mani ve depresyon atak sürelerini inceliyoruz. Hastaların ömür boyu atak geçirip geçirmeyeceği ve Ankara kliniğindeki süreçler.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/bipolar-atak-ne-kadar-surer' },
    openGraph: {
        title: 'Bipolar Ataklar ve Dalgalanma Süreleri | Psikiyatrist Değerlendirmesi',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Mani (coşku) ne kadar sürer?',
        answer: 'Psikiyatri sınıflandırmasına göre tam manik evrenin en az 1 hafta (çoğu zaman çok daha uzun) sürmesi tanı kriteridir. Bazen haftalar alabilir. Hipomani (hafif form) ise daha kısa, en az birkaç günlük bir periyodu kaplar.',
    },
    {
        question: 'Depresyon atakları daha mı uzundur?',
        answer: 'Bipolar hastalarının çok büyük bir bölümünde yataktan çıkılmayan (çökkünlük/low) depresyon fazı, mani atağına kıyasla misliyle daha uzun (aylarca veya yıla sarkan sürelerle) olarak tecrübe edilir.',
    },
    {
        question: 'Ataklar arası normal bir dönem var mı?',
        answer: 'Evet, buna "ötimi" (normal duygudurum) denir. Hasta her zaman hasta değildir. Atak geçirmediği zamanlarda tamamen normal, üretken bir aile-iş profilindedir ve işlevselliği olağandır.',
    },
    {
        question: 'Bu döngü kendiliğinden kırılır mı?',
        answer: 'Hastanın klinik durumu tamamen tedavi / hekim desteğinden uzak kaldıkça atak sürelerinin uzadığına ve aradaki o "normalleşme" döneminin bariz biçimde kapandığına bilimsel sahada şahit olunur. Süreç biyolojiktir, iradeyle kendiliğinden ("hadi uyan") geçmesi (sönmesi) çok düşüktür.',
    },
    {
        question: 'Her hasta senede kaç atak geçirir?',
        answer: 'Kişiden kişiye değişebilir. Bazıları uzun normal dönemlere sahiptir. Ancak "hızlı döngülü (rapid cycling)" bir bipolar varlığından söz ediliyorsa yılda dört (4) ya da daha fazla sayıda manik/depresif atak görülebilmektedir.',
    },
];

export default function BipolarAtakSuresiBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/bipolar">Bipolar Evre</Link><span>/</span>
                        <span>Atak Süreleri</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Döngü Süresi, Ataklar</span>
                        <time dateTime="2026-06-25">25 Haziran 2026</time>
                        <span>•</span><span>5 dk okuma</span>
                    </div>
                    <h1>Bipolar Atak Ne Kadar Sürer?</h1>
                    <p className={styles.heroDesc}>
                        Hastalığın "Bir uyandı ve hastaydı" mitinden çıkarak, günlerce uyumamanın ve haftalarca
                        duvara boş bakarak durmanın o sinsi saatlerinin arkasındaki "süreç (zaman) çizelgesini"
                        psikiyatrinin tıbbi penceresinden anlatıyoruz.
                    </p>
                    <div className={styles.author}>
                        <div className={styles.authorIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <div><strong>Uzm. Dr. Abdullah Maraş</strong><span>(Ankara, Eryaman Şubesi - Yetişkin)</span></div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.articleGrid}>
                        <article className={styles.article}>

                            <p className={styles.lead}>
                                <Link href="/hizmetler/bipolar-bozukluk">Bipolar Bozukluk değerlendirmesinde</Link> (özellikle
                                hasta yakınlarının) en çok merak ettiği sorulardan biri şudur: "Acaba bu çöküklüğü, ya da
                                uykusuz geçirdiği devasa taşkınlık ne gün bitecek?" Tıbbiyede net kalıplardan çok
                                hastanın biyoritmi (genetiği) ön planda olmasına rağmen <Link href="/blog/bipolar-belirtileri">mani</Link> ve
                                depresyon atak sürelerine dair bir omurga (klinik çizgi) çizilebilir.
                            </p>

                            <h2>1. Maninin Süresi: Volkan Gibi (Patlar ve Tüketir)</h2>
                            <p>
                                Beyin devasa bir enerjiye kapıldığında ("Uyumadan günlerce idare edebiliyorum" diyerek) girdiği <Link href="/blog/mani-donemi-nedir">manik o harika(!) fazda</Link>
                                hasta en az 1 hafta (çoğu zaman çok daha fazla, aylarca) kesintisiz bir fırtınanın
                                ortasındadır. Lakin bedensel gücün ve nöronal kimyanın tükenebilecek bir rezervi olduğu gerçeği şudur ki;
                                mani çok uzun seneler sürmez, süremez. Vücut o hıza dayanamaz (Eğer hekimin tıbbi durdurucu planlaması yapılmazsa, enerjik motor adeta yanan evreye girerek
                                son bulur).
                            </p>

                            <h2>2. Hipomaninin Süresi (Kısa Aldatmaca)</h2>
                            <p>
                                <Link href="/blog/hipomani-nedir">Hipomani (kopukluk içermeyen hafif coşkular)</Link> ise günler süren kısmi
                                atılganlıktır. Tıbbi tanı aralığına girmesi için asgari 4 günlük süresi hesaba katılır. Kötü yanı
                                hasta onu hastalık değil de "En verimli haftamdı" olarak adlandırır, o yüzden süresini bir psikiyatrist olmadan tam
                                belirlemek bazen çok güç bir hikayelemeye dönüşür.
                            </p>

                            <h2>3. Depresyon Evresi (Aylar Süren Karanlık Kış)</h2>
                            <p>
                                Bipolar döngünün en çok "zaman kaplayan" yeri çökkünlük durağıdır. Uykusuz enerjiler (mani evresi) kırıldıktan,
                                <Link href="/blog/bipolar-ile-depresyon-arasindaki-fark">kişi gerçeğe uyandıktan</Link> sonra beynin
                                kapattığı kepenk (Bipolar Depresyonu); hastayı haftalar, hatta genellikle aylar boyu o acı verici, umutsuzlukla
                                bezenmiş evde yatan modda rezerve eder.
                            </p>

                            <h2>4. Atak Aralığı (Ötimi) ve Hızlı Döngü Kavramı</h2>
                            <p>
                                Bu bozukluk yaşayan birinin beyni devamlı (ömür boyu) mani / depresyon içinde sallanmıyordur.
                                Aralarda tamamen sağlıklı, hiçbir duygusal abartıya kapılmadığı normal periyotlar (ötimi) bulunur. Lakin klinik
                                (Ruh Sağlığı) tedavisinden kopan, beynin genetik sarkaçlarına farmakoterapi uygulanamayan vakalarda
                                o normal dönemler küçülmeye veya "Hızlı Döngüye (bir senede 4-5 uç değiştirme)" girmeye dek bükülebilir. Hastanın
                                kendi isteğiyle o "dalgalara" direnmesi mümkün olanaksızdır.
                            </p>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Klinik / Medikal Uygulama Bilgisi</strong>
                                Bipolar süreçte atak sürelerinin uzunluğu ve aradaki boşluğun ne kadar olacağı "%100 başarı veya kesin tedaviyle sıfıllanacaktır" vaadi altında satılamaz. Ankara civarı (Eryaman) muayenehanemizde hekimin amacı, hastanın günlük <Link href="/hizmetler/anksiyete">kaygısını yükselten</Link> ataklarını o denli seyrek hale getirmektir ki; hasta kendi stabil yaşantısını ve sağlığını hissetmeye devam edebilsin. Yetişkinler dışındaki gruplar (ergen/çocuk psikiyatrisi süreci) alanımız dışındadır.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <h3>Zaman Aleyhinize Akmadan Bir Hekime Danışın</h3>
                                <p>Sürekli değişen o aylar süren yıkımlarınızdan zihninizi (Eryaman'daki psikiyatri destek ünitesinde) doktorunuzla muayenede stabilize edebilirsiniz.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Bugünden Randevu Oluştur →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Muayene Çerçevesi</h3>
                                <p>Durduğunda bir çöküşle yüzleşmemek veya yatışmadan çıkabilmek üzere klinik takvim.</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Değerlendirme</Link>
                            </div>

                            <div className={styles.sidebarCard}>
                                <h4>Benzer Başlıklar (Okuma Önerileri)</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/blog/mani-donemi-nedir">Bu Hastalık Enerji Dönemi Midir?</Link></li>
                                    <li><Link href="/blog/bipolar-gunluk-hayati-nasil-etkiler">Evliliğinize Olan Fatura</Link></li>
                                    <li><Link href="/hizmetler/okb">İlaveten Obsesyonla Görülmesi (OKB)</Link></li>
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
