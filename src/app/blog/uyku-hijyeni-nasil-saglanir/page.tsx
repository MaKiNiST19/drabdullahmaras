import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Uyku Hijyeni Nasıl Sağlanır? | Kaliteli Uyku Kuralları',
    description:
        'Yetişkinlerde yatak odasının düzenlenmesi, mavi ışık diyeti ve uykusuzluğu yenen davranışsal uyku hijyeni kuralları psikiyatri boyutunda inceleniyor.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/uyku-hijyeni-nasil-saglanir' },
    openGraph: {
        title: 'Bedeni ve Zihni Yatağa Hazırlamak: Uyku Hijyeni Kuralları',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Uyku hijyeni kuralları ilaç kadar etkili midir?',
        answer: 'Hafif insomnia (uykusuzluk) durumlarında uyandırıcı mavi ışığın kesilmesi, oda ısısının 18 dereceye çekilmesi gibi adımlar bedenin kendi hormonlarını tetikleyerek en az bir farmakolojik ajan kadar başarı (kişiden kişiye değişebilen) ivmesi sunar.',
    },
    {
        question: 'Yatakta başka bir şey yapılmamalı mı?',
        answer: 'Psikiyatride temel şartlanma ilkesi çok baskındır. Eğer hasta o yatağın içinde saatlerce patronuna mesaj yazıyor, dizi izliyor ve kaygılanıyorsa; o yastık artık "uyku mekanı" değil, beynin çalışma ofisi (aktif zihin bölümü) haline gelmiş (kodlanmış) demektir.',
    },
    {
        question: 'Uykum gelmiyorsa yatakta beklemeli miyim?',
        answer: 'Kesinlikle hayır; beynin "Burası çile çekme köşesidir" kodunu yazmaması için, şayet 20 dakikada dalınamıyorsa o yataktan kalkılıp serin loş bir koltukta kitap okunmalı (uyku zorlanmamalıdır).',
    },
    {
        question: 'Akşam çok spor yapsam hemen dalar mıyım?',
        answer: 'Tam tersine, uyku saatinden 3-4 saat öncesinde yapılan ağır bedensel stresler kortizolu ve kan dolaşımını fırlatacağı için beyne "daha savaşımız bitmedi (tehlike altındayız)" sinyali aktarıp uykuyu mahveder.',
    },
    {
        question: 'Gündüz uyumak gece uykusunu etkiler mi?',
        answer: 'Erişkin bireyin günde "biriktirmesi gereken bir uyku basıncı (yorgunluğu)" vardır. Gündüz atılan 1-2 saatlik şekerlemeler (kanepe sızmaları) o basıncın kapağını havaya uçurur, hasta gece 03:00’te cin gibi oturmak zorunda kalır.',
    },
];

export default function UykuHijyeniNasilSaglanirBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/uyku-bozukluklari">Uyku Bozuklukları</Link><span>/</span>
                        <span>Uyku Kalite Eğitimi</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Psikiyatri, Uyku Eğitimi, Yaşam Değişikliği</span>
                        <time dateTime="2026-06-30">30 Haziran 2026</time>
                        <span>•</span><span>5 dk okuma</span>
                    </div>
                    <h1>Uyku Hijyeni Nasıl Sağlanır? Yetişkin Bedeni Eğitmek</h1>
                    <p className={styles.heroDesc}>
                        Binlerce kişi her gece saatlerce sağa sola dönmenin ve "uyuyamamanın" sebebini genetikte veya
                        ağır ruhsal çöküşlerde arar; oysa çoğu zaman odalarımız bizim en büyük uykusuzluk tuzağımızdır.
                        Bedenimizin ve odanın "Uyku Hijyenini" hekim vizyonuyla nasıl baştan formatlarız?
                    </p>
                    <div className={styles.author}>
                        <div className={styles.authorIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <div><strong>Uzm. Dr. Abdullah Maraş</strong><span>(Ankara Psikiyatrist Uzmanı)</span></div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.articleGrid}>
                        <article className={styles.article}>

                            <h2 id="nedir-uyku-hijyeni">"Ben Neden Uyumuyorum?" Demeden Önce Odaya Bakın</h2>
                            <p>
                                Uyuma becerisi ne sihirli bir düğme ne de saf bir karanlık işidir. Uyku, tıpkı susamak veya
                                acıkmak gibi beynin kurduğu <strong>biyolojik ritmin (şartlanmanın)</strong> bir meyvesidir.
                                Ancak günümüz erişkin yaşamında, hasta yatağının içinde yemek yemekte, en heyecanlı bilgisayar
                                oyunlarını yatakta oynamakta, iş e-postalarını tavanda (gece lambasında) okumaktadır.
                                Sonra da "ışığı kapattım ama uyuyamadım, bende kesin <Link href="/blog/uyku-bozukluklari-nedir">çok ağır uyku bozukluğu var</Link>" diyerek kliniğe koşar.
                            </p>

                            <h2 id="pavlov-yatak">1. Pavlov ve Köpeği: Yatağın Şartlanması</h2>
                            <p>
                                İnsanın beyni mekanlarla duyguları birbiriyle eşler. <Link href="/blog/uykuya-dalamama-sorunu">Uykuya dalamama sorunlarında</Link>
                                hekimin önce temizlemesi gereken yapı (uyaran kontrolü) budur.
                            </p>
                            <p>
                                Şayet o yatak, zihninizde sadece <strong>ve sadece "uyku" eylemiyle kodlanmamışsa</strong>; beyniniz o kapağı kapatmaz.
                                Siz o yatakta; "Ah eşime şu lafı etseydim", "Yarın patron kesin o raporu soracak" diyerek veya
                                komik kedi videoları izleyerek (<Link href="/blog/uykusuzluk-neden-olur">uykusuzluk sarmalına</Link> girerek) vakit geçirdiyseniz;
                                beynin o yatağa dair yazdığı kod şudur:
                                <em>"Burası çalışma ve düşünme ofisidir, burası gerilim yeridir, uyku yeri değil!"</em>
                            </p>
                            <ul>
                                <li>Uyku gelmeden yatağa girmek psikiyatride yasaktır. </li>
                                <li>Yatakta asla dert düşünülmez (dert için gündüzleri salon koltuğu ayrılır). </li>
                            </ul>

                            <h2 id="mavi-isik-melatonin">2. Telefonların Parlattığı Modern İnsomniya</h2>
                            <p>
                                Dünyada milyonlarca yıllık evrimde insan beyni, ışığın gidip havanın kızarmasını (gün batımını)
                                görünce <strong>Melatonin</strong> hormonunu pompalamaya programlıdır.
                            </p>
                            <p>
                                Ancak bugün o karanlık çökerken siz elinize en parlak 6 inç ekranlı telefonu alır ve o mavi
                                (dalga boyu) ışığı gözünüzden içeri direkt basarsanız; zihindeki saat (epifiz bezi),
                                "Güneş tepede dik açıyla duruyor (Öğlen saati), uyanmalıyız" der ve melatonini anında keser.
                                Ardından <Link href="/blog/gece-sik-uyanma-nedenleri">gecenin 03:00'lerinde sık sık uyanıp</Link>
                                saatlerce kıvranırsınız. Ekranlar uykudan iki saat evvel yatak dışı alanda terk edilmelidir.
                            </p>

                            <h2 id="soguk-karanlik">3. Karanlık, Serin ve "Mağara" Modeli</h2>
                            <p>
                                Bedenin sıcaklığı düştükçe, organlar içerde rölantiye girerek kalp atışlarını REM ve Derin onarım
                                uykularına açar. 24 derecelik sıcacık, kaloriferi sonuna kadar (kuruluk yapacak derecede) yanmış
                                veya sokağın lambaları perde arkasından vuran bir odada sığ uykular yaşanır. <Link href="/blog/sabah-erken-uyanma-ve-ruh-sagligi">Sabaha karşı terminal insomnia</Link> ile uyanmamanın en bedensel ön şartlarından biridir serin loşluk.
                            </p>

                            <h2 id="ne-zaman-psikiyatri">4. Hijyen İşe Yaramadıysa Klinik Evre (Psikiyatri Başvurusu)</h2>
                            <p>
                                Söylenen her şeyi kuralına uygun yaptınız; telefonları odadan çıkardınız, yatakta bir dakika
                                dertleşmediniz, kahveyi sabah kestiniz;
                                <strong>Lakin yine de o yatağa her uzandığınızda göğsünüze bir fil oturuyor;</strong> sabahlara kadar
                                kalbinizi susturamıyor veya bir feryatla 04:00'te nefes nefese fırlıyorsanız;
                            </p>

                            <p>
                                Artık bu tablo bir "Uyku Hijyeni Eksikliği veya acemiliği" değil;
                                <Link href="/hizmetler/anksiyete">Anksiyetenin (Kaygı Bozukluğunun)</Link>, ya da
                                <Link href="/hizmetler/depresyon">Majör Çökkünlüğün</Link> uyku merkezi üzerinden
                                dışavurduğu o kronik "Gizli yangın alarmıdır."
                            </p>
                            <p>
                                Ankara Eryaman bölgesinde, Uzm. Dr. Abdullah Maraş refakatindeki,
                                <Link href="/hizmetler/uyku-bozukluklari">uyku bozuklukları değerlendirme sürecimizle</Link>; sadece bir
                                hapla sedasyon yaratılmadan "o uyutmayan asıl düğüm (düşünsel ya da kimyasal korku izleri)"
                                biyolojik ve birebir yetişkinlere has Bilişsel bir vizyonla sökülüp onarılmaktadır.
                            </p>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Klinik Uyarısı</strong>
                                Belirtilen durumlar yetişkin tıp disiplini nezdinde ve bilgilendirme amaçlıdır. Birkaç günlük uyku düzeni tavsiyeleri; yıllarca sürmüş olan
                                kronik insomnia (kalıcı zihinsel uyanış) hallerinde, alttan yatan patolojiyi tek başına (%100 garantiyle ve mucizevi olarak) halledemez.
                                Sizin hikayenize uygun ve iyileşme sürelerinin kişiden kişiye değişebilir oluşunu barındıran tıbbi yegane meşru merci; hekimlik ve psikiyatrist (poliklinik) görüşmeleridir.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <p>Her kuralı denemenize rağmen uyku hala gelmiyorsa, bedeninizi esir alan kaygıların (ve saklı korkularınızın) çözümü uykunuzun geri gelmesinden geçer. Yüz yüze değerlendirmenizi hekiminizle organize edin.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Uyku Kalitesi İçin Değerlendirme Çözümü →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Odayı Değil Zihni Yenileyin</h3>
                                <p>Ankara/Eryaman hekim müracaatınızı gerçekleştirerek bedeninizi uykusuzluğun kıskacından çıkartın.</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Klinik Üzerinden Randevu Al</Link>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>Okumaya Devam Edin</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/blog/uyku-bozukluklari-nedir">Hijyeni Bozan Asıl Süreç</Link></li>
                                    <li><Link href="/blog/uykusuzluk-neden-olur">Uykudaki Düşmanlar (Kahve mi Stres mi)</Link></li>
                                    <li><Link href="/blog/uykuya-dalamama-sorunu">Bekleme Çilesi Neden Geceliyor?</Link></li>
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
