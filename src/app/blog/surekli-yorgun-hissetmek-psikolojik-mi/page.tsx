import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Sürekli Yorgun Hissetmek Psikolojik mi? | Kronik Yorgunluk',
    description:
        'Sürekli yorgunluk hissi, aylarca geçmeyen halsizlik ve bedeni yataktan kazıyamama durumlarının psikiyatrik, depresif ve tükenmişlik (burnout) eksenindeki hekim değerlendirmesi.',
    alternates: { canonical: 'https://drabdullahmaras.com/blog/surekli-yorgun-hissetmek-psikolojik-mi' },
    openGraph: {
        title: 'Geçmeyen Ağır Halsizlik: Psikiyatrik Bir Yorgunluk Mu Yaşıyorsunuz?',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'D vitaminim normal ama hala yorgunum, neden?',
        answer: 'Fiziksel / bedensel yakıtınızda bir sorun yoksa (vitaminler vs. normalse); sorun enerjiyi tüketen "zihinsel kaçaklar"dır. Anksiyete (stres), gün boyu kasları gergin tuttuğu ve omuzlara yük bindirdiği için kan tahlilinde çıkmayan o devasa yorgunluğu tek başına yaratır.',
    },
    {
        question: 'Çok uyursam bu geçmez mi?',
        answer: '14 saat uyusanız dahi uyanır uyanmaz mermer taşımış gibi (dayak yemiş gibi) kalkıyorsanız; bu durumun uyku eksikliğinden ziyade, yatağın bir "kapanma/hayattan kaçış" aracı olarak kullanılmasından (Hipersomnia) kaynaklandığını ifade eder.',
    },
    {
        question: 'Sabah hiç yataktan çıkmak istemiyorum, nedeni ne?',
        answer: 'Psikiyatride buna "terminal uykusuzluk" ya da (depresif) "güneş ışığına karşı anlamsızlık" denilebilir. Eğer sabah uyanıldığında sizi yataktan fırlatacak "bir hedef (motivasyon)" algısı sistemden silinmişse, beyin vücudu kaldırıp boş bir günü geçirmeye değer (dopamin) bulmaz.',
    },
    {
        question: 'Kronik yorgunluk gerçekten psikolojik bir hastalık mıdır?',
        answer: 'Yorgunluk bir duygu veya davranış semptomudur. Eğer bu halsizliğe tükenmişlik hissi (burnout), isteksizlik ve her şeye ağlamaklı olma ekleniyorsa, asıl hastalık "major depresyon" veya ağrılı "somatoform" kaygı zeminleri olabilir.',
    },
    {
        question: 'Spor yapmak o ağırlığı alır mı?',
        answer: 'Dopamin salgılasa da; zihnin dibi tükenmişliğe vurmuş (kendini tamamen kapatmış) bir kişi bırakın 30 dk koşmayı, mutfaktan su bardağını almaya bile derman (kognitif emir) bulamaz. Zorlamalar daha büyük histeri/isteksizlik krizlerine alev verir.',
    },
];

export default function SurekliYorgunPsikolojikMiBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/tukenmislik-sendromu">Tükenmişlik Kütüphanesi</Link><span>/</span>
                        <span>Psikolojik Yorgunluk</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Psikiyatri, Somatizasyon, Yorgunluk</span>
                        <time dateTime="2026-06-15">15 Haziran 2026</time>
                        <span>•</span><span>5 dk okuma</span>
                    </div>
                    <h1>Sürekli Yorgun Hissetmek Psikolojik mi? Bedenin Ruhsal İflası</h1>
                    <p className={styles.heroDesc}>
                        Kan tahlillerinde her şey <strong>tertemiz çıkmasına rağmen</strong>, yataktan bir asır
                        daha kalkmak istiyormuşçasına omuzlarınızda dağlarca yük hissediyorsanız; asıl sorunun
                        kaslarınızda değil, zihninizin <strong>kronik yorgunluk ve "burnout" ateşinde</strong> yanmasında
                        yattığını bizzat psikiyatrik açılardan yapılandırıyoruz.
                    </p>
                    <div className={styles.author}>
                        <div className={styles.authorIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <div><strong>Uzm. Dr. Abdullah Maraş</strong><span>(Ankara Ruh Sağlığı Uzmanı)</span></div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.articleGrid}>
                        <article className={styles.article}>

                            <h2 id="nedir-stres">Tahlilde Çıkmayan, Ekranda Görünmeyen Ağrı</h2>
                            <p>
                                İnsan bedeni o kadar mükemmel bir tasarım ki; zihin içten içe kan ağlarken yahut iş yerinin o
                                o çok iğrenç ve "bitmeyen mesaisi" altında ezilirken, bedeni uzun süre sapasağlam tutamaz.
                                <Link href="/blog/tukenmislik-sendromu-nedir">Tükenmişlik Sendromuyla (Burnout)</Link> ilk temas anında
                                siz ruhsal olarak "Ben bunlara katlanamıyorum" derken; zihniniz o acıyı alır ve direkt (Psikolojik olarak)  sizin kolunuzda, boynunuzda ve adımlarınızdaki <strong>kurşun gibi bir ağırlığa dönüştürür (Somatizasyon)</strong>.
                            </p>

                            <p>
                                O esnada <Link href="/blog/ise-gitmek-istememe-hali">"Ben sadece çok yoruluyorum" (İşe sürülmek istememe)</Link>
                                sanrısına kapılır ve dahiliyelere koşarak torbalarca vitamin/demir hapı denersiniz; lakin sorun benzinde (kanda) değil,
                                asıl sorun marşa basan <strong>beyninizin "çökkünlüğünde (şalter kapatmasında)" dır</strong>.
                            </p>

                            <h2 id="ikincil-bozukluk">Stres Hormonunun Kasları Taşlaştırması</h2>
                            <p>
                                Kafaya takılan evraklar, eşin sorumsuzlukları veya "Ne yaparsam yapayım bu aileyi toparlayamıyorum" diyen o
                                ezici <strong><Link href="/hizmetler/anksiyete">çaresizlik (Anksiyeteli kaygı)</Link></strong> anında;
                                vücut savaşmak adına aylarca boyun, omuz ve sırt kaslarına "kortizol" salgılar (Kasılır kalır).
                            </p>
                            <ul>
                                <li>Sonuç 6 ay sonrasında her saniye çekiştirilmiş bir lastik gibi yıpranan, felç kalmış gibi halsiz düşen devasa (aşkın) bir bedensel acıdır. Kas gevşeticiler, o kafadaki yangın ve düşünce (gelecek fobisi) bitmeden 5 dakikalık konfordan ötesini %100 oranında çözemez.</li>
                            </ul>

                            <h2 id="depresif-uyku">Uykudan "Dayak Yemiş" Gibi Uyanmanın Arka Yüzü</h2>
                            <p>
                                Bir erişkinde o yorgunluk fizyolojik midir, psikiyatrik bir histeri (majör) mi ayrımı sabaha bağlıdır. Gece 14 saatlik
                                devasa bir zaman <Link href="/blog/asiri-uyuma-hipersomnia-nedir">(aşırı uyku)</Link>  diliminde kalsa bile, güne uyandığında:
                            </p>
                            <p>
                                <strong>"Keşke güneş doğmasaydı"</strong> diyerek, bütün dünyadan (çocuğundan işinden) zevk alma hissini yitirmiş (Anhedoni) bir şekilde kıvranan <Link href="/hizmetler/depresyon">çökkünlük (depresyon) vakasında</Link>; zihin sadece
                                <Link href="/blog/tukenmislik-sendromu-belirtileri-nelerdir">tükenmemiş, o hayatla yaşamı arasındaki bağı koparmıştır</Link>.
                            </p>

                            <h2 id="zihinsel-donma">Kognitif Kaçış (Odaklanamayan Yorgunluk)</h2>
                            <p>
                                <Link href="/hizmetler/eriskin-dehb">Erişkin DEHB'nin (Odak sapmalarının)</Link> ya da salt tükenmişliğin yorgunluğunda
                                beynin enerjisi (Glikoz kullanımı) bir dağınık ordu gibidir. Bir işle uğraşırken o
                                bilgisayar ekranına değil; "Ben neden bu işi yapıyorum?", "Yıllardır buradan bana ne fayda geldi ki?" düşüncelerinin
                                arka kapalı sekmelerinde beyni duman (Brain Fog - Sis) basar. Kişi, zihinsel enerjisi sıfıra indiğinde kolunu kaldıracak fiziksel pili de tüketmiş olur.
                            </p>

                            <h2 id="psikiyatrist">Neden Kliniğe / Hekime Gözükmek Şarttır?</h2>
                            <p>
                                Üç paket daha ginseng ilacı almak; kırılmış olan kalbinizi ve zihinsel travmalarla
                                işlenen o "özgüvensizlikleri, mobbing yaralarını" bantlayamaz. <Link href="/hizmetler/tukenmislik-sendromu">Ankara Eryaman tükenmişlik değerlendirme (burnout poliklinik süreci)</Link> adımı; uzman hekim
                                vizyonunda o yorgunluğunuzun ("bireysel psikiyatri değerlendirmeleriyle") arkasındaki asıl o saklı (kapatılmış, yok sayılan) gerçeği tespit edip, onarmak, tıbbi
                                terapatik ve kimyasal o yolları regüle etmek mecburiyetidir.
                            </p>

                            <p>
                                (Süreç hastaların zihin haritalarına - şiddetine bağlı olarak kişiden kişiye değişebilmektedir). Sürünerek gittiğiniz hayat 100 yıllık bir işkence yoluna dönüşmeden asıl nörobiyolojinin kapısını aralayın (Psikiyatrik muayene).
                            </p>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Klinik Uyarısı</strong>
                                Belirtilen durumlar (Somatik Yorgunluk, Depresif Halsizlik) yetişkin tıp disiplini (psikiyatri) nezdindeki olgulardır. Organik kronik (Kanser, Romatizma vs.) fiziksel hastalıklar tenzih edilerek "Tahlilleri temiz çıkanlara" hitaben yazılmıştır. Her iki durumun teyidi de asla ve katiyen (tıp) doktoru hekimden bağımsız gerçekleştirilemez.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <p>Her gün yataktan kalkıp o kapıdan çıkmanız içinizatınızı zorlayarak bedeninize zulmetmeyin. Klinik analizi başlatarak kök nedenini Eryaman'da çözümleyin.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Ruhsal Enerjinizi Geri Al (Randevu) →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Bu Yorgunluk Kaderiniz Değil</h3>
                                <p>Kendinize bir iyilik yapıp bunu Ankara/Eryaman hekim masasında (Tıbben) test edin.</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Klinik Üzerinden Alınız</Link>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>İçerik Yansımaları</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/hizmetler/depresyon">Halsizliğin Major Çöküşle İlgisi</Link></li>
                                    <li><Link href="/blog/tukenmislik-ne-kadar-surer">Bu Sürünme Psikiyatrisiz (Kaç Ay) Sürer?</Link></li>
                                    <li><Link href="/hizmetler/uyku-bozukluklari">Uyku Bozulursa Beden Neden İflas Eder?</Link></li>
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
