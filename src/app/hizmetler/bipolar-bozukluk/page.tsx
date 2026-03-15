import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon/page.module.css';

export const metadata: Metadata = {
    title: 'Ankara Eryaman Bipolar Bozukluk Değerlendirmesi | Uzm. Dr. Abdullah Maraş',
    description:
        'Bipolar bozukluk belirtileri, mani ve depresyon dönemleri hakkında bilgilendirme ve Eryaman’da psikiyatrik değerlendirme süreci.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/hizmetler/bipolar-bozukluk' },
    openGraph: {
        title: 'Ankara Eryaman’da Bipolar Bozukluk Değerlendirmesi',
        description: 'Bipolar bozukluk belirtileri, mani ve depresyon dönemleri hakkında bilgilendirme ve Eryaman’da psikiyatrik değerlendirme süreci.',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Bipolar bozukluk nedir?',
        answer: 'Bipolar bozukluk, beynin enerji ve duygu durumunu düzenleyen kimyasallarındaki farklılıklar nedeniyle, kişinin yaşamında birbirine zıt iki ayrı uçta tepki verdiği (bazen aşırı coşkulu bazen tamamen çökkün) biyolojik kökenli döngüsel bir klinik durumdur. Yalnızca bireysel değerlendirme ile ayrımı sağlanır.',
    },
    {
        question: 'Bipolar belirtileri nelerdir?',
        answer: 'Mani (coşku) döneminde az uykuya rağmen yüksek enerji, aşırı hızlı konuşma, riskli maddi/manevi adımlar atma; depresif dönemde ise yataktan çıkamama, enerjisizlik, ilgi kaybı ve yoğun mutsuzluk hali temel bulgulardır.',
    },
    {
        question: 'Mani dönemi nedir?',
        answer: 'Mani dönemi (Manik Atak), hastanın normal karakterinin ötesine çıkarak kendini aşırı özgüvenli, enerjik ve güçlü hissettiği, çoğu zaman dürtüsel kararlar alabildiği "yüksek" duygudurum halidir.',
    },
    {
        question: 'Bipolar ile depresyon farkı nedir?',
        answer: 'Majör depresyonda hasta yalnızca çökkün (düşük duygu) yaşarken, bipolarda depresyon tablolarına mutlaka yaşamın bir evresinde coşku/enerji patlaması (mani veya hipomani) eşlik eder. Bu farklılık, tedavi yapılandırması açısından psikiyatrik bir uzman değerlendirmesi gerektirir.',
    },
    {
        question: 'Bipolar ataklar ne kadar sürer?',
        answer: 'Kişiden kişiye değişebilir. Bazı dönemler haftalarca, kimi zaman aylarca sürebilmektedir. Hızlı döngülü (rapid cycling) formlarda bir yıl içinde birden fazla zıt dönem görülebilir.',
    },
    {
        question: 'Bipolar kendi kendine düzelir mi?',
        answer: 'Hayır. Beyin kimyasındaki bu organik oynamalar sadece irade veya "kendine gel" telkinleriyle geçici olarak bastırılamaz. Tıbbi ve bilimsel (psikiyatrist) kılavuzluğunda ele alınması gereken kalıcı/dalgalı bir yapısal durumdur.',
    },
    {
        question: 'Bipolar için hangi doktora gidilir?',
        answer: 'Yetişkinlerde bu tip zıt döngülerin ruhsal dengedeki yansımasını sadece Ruh Sağlığı ve Hastalıkları (Psikiyatri) doktorları değerlendirebilir ve biyolojik altyapısını tedavi eder.',
    },
    {
        question: 'Eryaman’da bipolar değerlendirmesi nasıl yapılır?',
        answer: 'Ankara (Eryaman) bölgesinde hizmet veren kliniğimizde yetişkin danışanların klinik öyküleri derinlemesine dinlenir; depresyon ile bipolar ayrımı sağlanarak kişisel tıbbi/terapötik takip planı Uzm. Dr. Abdullah Maraş kontrolünde işlenir.',
    },
];

export default function BipolarPillarPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroBg}><div className={styles.heroOrb}></div></div>
                <div className={`container ${styles.heroContent}`}>
                    <Link href="/hizmetler" className={styles.backLink}>← Tüm Değerlendirme Alanları</Link>
                    <span className={styles.heroIcon}>ğŸ­</span>
                    <h1>Ankara Eryaman’da Bipolar Bozukluk Değerlendirmesi</h1>
                    <p className={styles.heroDesc}>
                        Hayatın bazı dönemlerinde fırtına gibi eserken, diğer yanıyla tamamen sessizliğe ve bitkinliğe
                        gömülmenin zorlu yapısını anlamak, bilimsel bir psikiyatrik yaklaşımı mecburi kılar.
                        Yetişkinlikte ortaya çıkan bu duygu durum dalgalanmalarını klinik adımlarıyla ele alıyoruz.
                    </p>
                    <div className={styles.author}>
                        <div className={styles.authorIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <div><strong>Uzm. Dr. Abdullah Maraş</strong><span>Ruh Sağlığı (Psikiyatrist) Uzmanı</span></div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className={`container ${styles.contentGrid}`}>
                    <article className={styles.article}>

                        <p className={styles.lead}>
                            Psikiyatristlere müracaat eden bazı yetişkinlerin hikayesi şöyledir:
                            "Bir dönem çok enerjik oluyorum, uykusuz olsam bile tükenmiyorum, kafamda sürekli yeni
                            planlar var ve bir anda her şeyi yapabileceğimi düşünüyorum; ancak sonraki süreçte
                            enerjim birdenbire kesiliyor, haftalarca hiçbir şey yapmak istemiyorum ve yataktan
                            çıkamıyorum..." İşte bu sıradan bir "kararsızlık" veya "dengesizlik" tablosu değil; tıp biliminde nörobiyolojik
                            olarak incelenen İki Uçlu (Bipolar) Duygudurum Bozukluğu'nun klasik öyküsüdür.
                        </p>

                        <h2 id="bipolar-bozukluk-nedir">Bipolar Bozukluk Nedir?</h2>
                        <p>Bipolar bozukluk, kişinin ruh hali ve enerji seviyelerinde uç noktalar olan coşku (mani) ve çöküş (depresyon) atakları yaşamasına sebep olan klinik psikiyatrik bir hastalıktır. Bu dalgalanmaların ortaya çıkış şekli ve şiddeti kişiden kişiye değişebilir.</p>
                        <h3>Bipolar bozukluk kimlerde görülür?</h3>
                        <p>Genellikle ilk belirtilerini genç yetişkinlik çağında göstermeye başlayan bu durum, genetik biyolojik yatkınlığı bulunan bireylerde çeşitli çevresel streslerle ve uyku sorunlarıyla tetiklenebilir.</p>
                        <h3>Bipolar hastalık kalıtsal mı?</h3>
                        <p>Klinik araştırmalar, birinci derece yakınlarında bipolar bozukluk veya majör depresyon öyküsü bulunan kişilerde bu durumu geliştirme riskinin daha yüksek olduğunu işaret etmektedir.</p>
                        <p>
                            Geçmişteki adıyla "Manik Depresif Hastalık" olarak bilinen <strong>Bipolar Bozukluk</strong>,
                            kişinin enerji seviyesinde, zihinsel hızında, muhakemede ve ruh halinde sıradan veya olağan dalgalanmalardan
                            çok daha keskin, şiddetli zıtlıklar (uçlar) yaşamasına neden olan beyin temelli tıbbi bir hastalıktır.
                            Hastanın ruh hali haftalar ya da aylar boyu bir "taşkınlık ve yüksek enerji" periyodu ile, "tam bir çöküş (depresyon)"
                            dönemi arasında devir daim halindedir. Bu geçişler nadiren kısa aralıklı olabilirken genellikle belirgin
                            denge değişimleri ile tariflenir.
                        </p>

                        <h2 id="bipolar-ile-depresyon-farki">Bipolar Bozukluk İle Depresyon Arasındaki Fark</h2>
                        <p>
                            Çoğu birey doktora çökkünlük devresinde gittiği için sıklıkla sadece "Depresyon" tablosu görünür.
                            Halbuki <Link href="/hizmetler/depresyon">klasik bir majör depresyonda</Link> kişi hayatı
                            boyunca genellikle bu çökkünlüğü ya da nispeten normal bir rutini yaşar. Oysa Bipolar yapıda
                            kişi, o karanlık dönemden çıkıp bir noktada kontrolünü kaybedecek denli, özgüven ve coşku patlaması
                            yaşadığı bir döneme girer.
                        </p>
                        <p>
                            Psikiyatri alanında bu noktada yapılan bireysel uzman değerlendirmesi hayati derecede
                            mühimdir. Eğer hastanın enerji artış öyküsü fark edilmeden salt çökkünlük tedavisi yapılandırılırsa, bu durum beyni
                            karanlıktan sadece aydınlığa değil; en uca, yani "patlamaya" (maniye) itebilir. Hastalık teşhisinin ayrımı doğrudan
                            bir doktor gözetimine aittir.
                        </p>

                        <h2 id="mani-donemi-nedir">Mani Dönemi Nedir?</h2>
                        <p>
                            Mani dönemi bipolar duygu durumunun ilk ucu (high / yüksek) olarak bilinir. Ancak, çoğu film
                            veyahut kulaktan dolma bilgi bu tabloyu sadece bir "aşırı mutluluk ya da hazzın doruğu" gibi yansıtarak büyük
                            bir hataya imza atar. Klinik açıdan mani evresi romantize edilmeyecek kadar ciddi bir zihinsel sapmadır.
                            Kişi uyumadan günlerce idare edebiliyorum der, beyni adeta aşırı hızlı çalışan bir motora dönüşür ve
                            sonunda freni (muhakemeyi) patlatır. Kararları akıl süzgecinden kopar.
                        </p>

                        <h2 id="hipomani-nedir">Hipomani Nedir?</h2>
                        <p>
                            Hipomani de tıpkı mani gibi bir enerji ve duygu yükselmesi dönemidir ancak klinik boyutta
                            maniden daha hafif seyreder. Hasta çoğunlukla enerjik, yaratıcı, çok konuşkandır ve az
                            uyumasına karşın kendini mükemmel hisseder.
                        </p>
                        <p>
                            Bu süreç o kadar "hoşa giden, üretken ve çekici" gelir ki, birey veya çevresi bir hastalığın işareti
                            olduğunu genelde anlamaz ("Çok çalışkan oldu", "Acayip başarılı ve sosyal"). Ne yazık ki hipomaninin sonu
                            da er ya da geç yorgun beynin iflas etmesi ile büyük depresyon duvarına çarpmakla sonuçlanmaktadır.
                        </p>

                        <h2 id="depresif-donem-nedir">Depresif (Çökkünlük) Dönem</h2>
                        <p>
                            Bipolar hastalığın ikinci ve genelde en yıkıcı ucudur. Coşku ile adeta stratosfere çıkan
                            zihnin motoru yanar ve hasta yere çakılır. Beyin artık hiçbir uyaranı alamaz, sevinemez. Daha birkaç
                            hafta önce her şeyi başarabileceğine inanan o karakter gider; yerine yataktan çıkmaya bile
                            mecali olmayan, umutsuz bir birey gelir. Bu düşüş, bedensel hareketlerin yavaşlamasına dek
                            varabilen biyolojik bir "pilin bitişi" anıdır.
                        </p>

                        <h2 id="mani-belirtileri">Mani Döneminde Görülen Belirtiler</h2>
                        <p>
                            Bir hastada manik tablonun ortaya çıktığı sırada karşılaşılan ana psikiyatrik unsurlar şunlardır:
                        </p>
                        <ul>
                            <li><strong>Uyku İhtiyacında Azalma:</strong> Sadece 2 saat uyuyarak bütün gün koşuşturmak ve zerre yorulmamak.</li>
                            <li><strong>Savruk / Dürtüsel Harcama:</strong> Gereksiz yere evler, arabalar almak, hiç düşünmeden tüm birikimi bitirme hissi.</li>
                            <li><strong>Büyüklük Hezeyanları (Grandiözite):</strong> Çok özel, dünyanın en zeki, en güçlü (bazen dini elçi) hissetme, aşırı ve abartılı özgüven.</li>
                            <li><strong>Basınçlı Konuşma (Logore):</strong> Susturulamaz biçimde çok hızlı, konudan konuya atlayarak konuşmak (Zihindeki hız ağızdan taşar).</li>
                            <li><strong>Dürtü Kontrolsüzlüğü:</strong> Riskli ilişkiler ve sınırları aşan olağandışı sosyal cesaretler.</li>
                        </ul>

                        <h2 id="depresif-belirtiler">Depresif Dönemde Görülen Belirtiler</h2>
                        <p>
                            Hastanın mani sonrası girdiği "kış uykusu" periyodunda ise şu klinik unsurlara rastlanır:
                        </p>
                        <ul>
                            <li><strong>Yoğun Çökkünlük:</strong> Gün boyu ve haftalar süren derin, anlamsız bir melankoli, ağlama hisleri.</li>
                            <li><strong>Kaybedilen İlgi:</strong> Daha evvel heyecanlandığı (hatta mani döneminde taparcasına sevdiği) hobilere veya eşine/işine dair sıfır hissiyat (Anhedoni).</li>
                            <li><strong>Enerji Tükenmesi:</strong> Duş almak veya yatağı toplamak gibi en ufak eylemin dağa tırmanmak gibi zor gelmesi.</li>
                            <li><strong>Odaklanma Sorunu:</strong> Karar verememe, dikkat eksikliği ve ölüm düşüncelerinin zihni yoklaması.</li>
                        </ul>

                        <h2 id="ataklar-ne-kadar-surer">Bipolar Ataklar Ne Kadar Sürer?</h2>
                        <p>Bipolar atakların uzunluğu ve şiddeti hastanın durumuna ve klinik sürecine göre kişiden kişiye değişebilir. Manik (taşkınlık) dönemler genellikle haftalar boyunca devam ederken, depresif ataklar çoğunlukla aylarca sürme eğilimi göstermektedir.</p>
                        <h3>Bipolar mani evresi biter mi?</h3>
                        <p>Evet, manik epizodlar sınırsız değildir ve eninde sonunda yatışır; ancak uzman bir klinik izlem olmadığında yüksek ihtimalle çok ağır bir majör depresif döneme çırpınış gerçekleştirir.</p>
                        <h3>Ötimi (sağlam) dönem ne kadardır?</h3>
                        <p>Uzman psikiatrist hekim yaklaşımlarıyla sağlanan klinik ötimi (dengeli) dönemi, başarılı bir takip altında yıllarca devam ettirilebilir ve hastanın yaşam kalitesi korunabilir.</p>
                        <p>
                            Klinik süreç tıbbiyede net rakamlarla ölçülemez çünkü genetik miras ve yaşam stili farklıdır.
                            Düzenli bir atak süreci belirtmeden şöyle tariflenebilir: Seyir kişiden kişiye değişebilir.
                            Mani dönemleri genelde haftalarca sürebilirken, ardından gelen depresyon (eğer araya normalleşme
                            periyodu girmişse ya da hemen düşmüşse) çok daha yayılan aylarca süren bir evre şekline bürünebilmektedir.
                        </p>

                        <h2 id="bipolar-gunluk-yasam">Bipolar Bozukluk Günlük Yaşamı Nasıl Etkiler?</h2>
                        <p>
                            Düzenli ve olağan bir yaşam için bireyin duygu durum dengesi "orta bir bandol" üzerinde akmalıdır. Oysa
                            bipolar yaşayan bir zihinde bu bandol sürekli genişleyen yaylar gibi sarsılır. Hastalığın teşhis edilmediği
                            tablolarda kişi sürekli huysuzlanan, güvenilmeyen ya da "Ne yapacağı hiç belli değil" diye dışarıdan
                            etiketlenen dengesiz bir kalıba sokulur ve hayat potansiyelini tüketir.
                        </p>

                        <h2 id="is-hayatinda-bipolar">İş Hayatında Bipolar Tablo</h2>
                        <p>
                            Bipolar evrelerinin en ağır zararı ekonomik ve kariyer yönetimi alanındadır. Mani evresindeki kişi
                            ansızın şirketini satabilir, işyerinde yöneticisine veya çalışma arkadaşına abartılı hakaretlerde
                            bulunarak anında kovulacak hatalar (patlamalar) yaşayabilir. İşini o kadar kusursuz
                            görür ki takım uyumunu ezer geçer. Çökkün olduğu evrelerde ise tam tersi;
                            iş yerindeki sorumluluklarına ayak basamaz, sürekli izin alır. Bu sürdürülebilirlik kopukluğu;
                            istihdam yapısında büyük gedikler doğurur.
                        </p>

                        <h2 id="iliskilerde-bipolar">İlişkilerde Bipolar Dönemler</h2>
                        <p>
                            Evlilik veya uzun soluklu bir ilişkiler bütünlüğünde, bipolar partnerin "fırtınaları" eşin omzuna
                            ciddi bir yıpranma (tükenmişlik) bindirir. Dürtüsel zamanlarında girdiği sosyal savurganlık,
                            öfke patlamaları veya mantıksız kararlara karşı çıkan eşi "düşman / beni engelliyorsun" olarak kodlar.
                            Bütün bu yapılar ilişkinin temel taşlarını yıkıma uğratır.
                        </p>

                        <h2 id="bipolar-ve-anksiyete">Bipolar ve Anksiyete İlişkisi</h2>
                        <p>
                            Karmaşık (mix) dönemlerde veya bipoların yapısal işleyişinde arka planda genellikle çok ciddi
                            bir yaygın <Link href="/hizmetler/anksiyete">anksiyete (korku ve telaş) tablosu</Link> yatar.
                            Kişi geleceğinden korkar, hasta olduğunun bazen bilincinde olarak kendi zihninden
                            (acaba yine o fırtınalı güne mi giriyorum diyerek) korku duyması çok net bir psikiyotrik haritadır.
                        </p>

                        <h2 id="bipolar-ve-panik-atak">Bipolar ve Panik Atak İlişkisi</h2>
                        <p>
                            Çarpıntı, ani bir kalp krizi geçiriyormuş hissi gibi bedensel alarm veren <Link href="/hizmetler/panik-atak">panik atak
                                bulgularının</Link>, bipolar bozukluğa sahip vakalarda daha sık tetiklenebileceği gözlenmektedir. Biyolojik
                            dalgalanma o kadar güçlüdür ki, vücudun sempatik sinir sistemi kolaylıkla paniğe doğru savrulabilir.
                            (Klinik komorbidite - beraber seyreden durumlar).
                        </p>

                        <h2 id="ne-zaman-uzman">Ne Zaman Psikiyatri Değerlendirmesi Düşünülmeli?</h2>
                        <p>
                            Eğer yukarıda sayılan "aşırı canlanma - anlamsızca çökme" zıtlığını hayatınızın belli periyotlarında
                            net biçimde gözlemliyorsanız veya yakın çevreniz size "eskisi gibi değilsin, bir durgunsun bir coşkulusun"
                            diyor ise bu durumu tek başına üstlenmeyin. Ayrıca <Link href="/hizmetler/okb">obsesif (istenmeyen takıntılı) eforların</Link> dahi
                            zemininde yatan kimyasal değişimler hekim nezaretinde ele alınır.
                        </p>

                        <h2 id="eryaman-degerlendirme">Ankara Eryaman’da Bipolar Değerlendirme Süreci</h2>
                        <p>
                            Ankara Eryaman'da, Etimesgut ve Batıkent havzasındaki erişkin psikiyatri hastalarına kapısını aralayan
                            Uzm. Dr. Abdullah Maraş, bipolar bozukluğa dair o zorlu dönemeçleri tıbbi bilimin izin verdiği metodoloji
                            ile (bireysel değerlendirme / psikiyatrik görüşme ile) değerlendirmektedir.
                        </p>
                        <p>
                            Unutulmamalıdır ki, bipolar "garanti tamamen sökülüp atılır" veya "%100 başarıyla bitecektir" gibi sahte reklam söylemleriyle
                            değil, alanında güvenilir psikiyatristlerin uyguladığı dalgalanmayı koruyucu yaklaşımlarla (farmakolojik planlamalar) yatıştırılır.
                            Uzm. Dr. Abdullah Maraş / Ruh Sağlığı Kliniğindeki uzman değerlendirmesi, zihninizdeki bu dalgaları güvenli bir limana
                            oturtmanızı amaçlayan, gizlilik ve saygı odaklı klinik bir kapıdır.
                        </p>

                        <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                            <strong>📌 Tıbbi Bilgilendirme ve Uyarı Bildirimi</strong>
                            Bu ve buna benzer içerikler tıbbi muayenenin, birebir hekim değerlendirmesinin ya da reçetenin yerini tutmayı amaçlamaz.
                            Psikiyatristiniz tarafından şahsen yapılmayan hiçbir tanı, internetteki okumalarınız ışığında kişiye konulamaz. Kliniğimiz
                            sağlık bakanlığı kısıtlarına tam uyumlu ilerlemekte olup, "kesin tedavi, kalıcı iyileşme başarısı" vadetmez; tedaviler hastalığın durumuna ve kişiye özel seyreder. Kliniğimizde <strong>16 yaş ve üzeri ergenlere yönelik</strong> psikiyatrik değerlendirme sunulmakta olup, 16 yaş altı çocuk süreçlerini kapsamamaktadır.
                        </div>

                        <div className={styles.faqSection} id="sss">
                            <h2>Sık Sorulan Sorular</h2>
                            <FAQSection items={faqItems} />
                        </div>

                        <div className={styles.articleCta}>
                            <h3>Dalgaların Hayatınızı Savurmasına İzin Vermeyin</h3>
                            <p>Aylarca süren tükenmişliğinizi ya da sizi hatalara iten o sahte enerjinizi Ankara Eryaman'daki kliniğimizde uzman hekimle yapılandırarak değerlendirin.</p>
                            <Link href="/randevu" className="btn btn--primary btn--lg" style={{ marginTop: 'var(--space-4)' }}>
                                Bireysel Görüşme Randevusu →
                            </Link>
                        </div>
                    </article>

                    <aside className={styles.sidebar}>
                        <nav className={styles.sidebarCard}>
                            <h4>Sayfa Rehberi</h4>
                            <ul className={styles.tocList}>
                                <li><a href="#bipolar-bozukluk-nedir">Bipolar Nedir?</a></li>
                                <li><a href="#bipolar-ile-depresyon-farki">Depresyon ve Farkı</a></li>
                                <li><a href="#mani-donemi-nedir">Mani Evresi</a></li>
                                <li><a href="#hipomani-nedir">Hipomani (Hafif Taşkınlık)</a></li>
                                <li><a href="#depresif-donem-nedir">Depresyon Haline Dönüş</a></li>
                                <li><a href="#mani-belirtileri">Mani Belirtileri</a></li>
                                <li><a href="#depresif-belirtiler">Çökkünlük Belirtileri</a></li>
                                <li><a href="#ataklar-ne-kadar-surer">Ne Kadar Sürer?</a></li>
                                <li><a href="#bipolar-gunluk-yasam">Günlük Yaşam</a></li>
                                <li><a href="#is-hayatinda-bipolar">İş Evresi</a></li>
                                <li><a href="#iliskilerde-bipolar">İlişkiler</a></li>
                                <li><a href="#bipolar-ve-anksiyete">Anksiyete Farkı</a></li>
                                <li><a href="#bipolar-ve-panik-atak">Panik Atak Görünümü</a></li>
                                <li><a href="#ne-zaman-uzman">Ne Zaman Hekime Gidilmeli?</a></li>
                                <li><a href="#eryaman-degerlendirme">Eryaman İzlem Süreci</a></li>
                            </ul>
                        </nav>

                        <div className={styles.sidebarCta}>
                            <h3>Ankara Tıbbi Görüşme</h3>
                            <p>Bipolar zıtlıklar için klinik muayenenizi planlayın.</p>
                            <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Doktor Değerlendirmesi</Link>
                        </div>

                        <div className={styles.sidebarCard}>
                            <h4>Uzman Hekim</h4>
                            <div className={styles.doctorCard}>
                                <div className={styles.doctorIcon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                </div>
                                <strong>Uzm. Dr. Abdullah Maraş</strong>
                                <span>Ruh Sağlığı (Psikiyatrist) Uzmanı</span>
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
                            "name": "Ankara Eryaman Bipolar Bozukluk Değerlendirmesi",
                            "url": "https://www.drabdullahmaras.com.tr/hizmetler/bipolar-bozukluk",
                            "about": {
                                "@type": "MedicalCondition",
                                "name": "BipolarDisorder",
                                "alternateName": "Bipolar Bozukluk, Manik Depresif Hastalık"
                            },
                            "author": { "@id": "https://www.drabdullahmaras.com.tr/#physician" },
"isPartOf": { "@id": "https://www.drabdullahmaras.com.tr/#website" }
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
                                { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://www.drabdullahmaras.com.tr/" },
                                { "@type": "ListItem", "position": 2, "name": "Hizmetler", "item": "https://www.drabdullahmaras.com.tr/hizmetler" },
                                { "@type": "ListItem", "position": 3, "name": "Bipolar Bozukluk", "item": "https://www.drabdullahmaras.com.tr/hizmetler/bipolar-bozukluk" }
                            ]
                        }
                    ]
                })
            }} />
        </>
    );
}
