const studio=[
  ["月","16:00–16:45","プリサクダンス","幼児・初心者"],["月","17:00–17:45","アイドル 初級","初心者"],
  ["火","17:00–18:00","体操初級［短期］","短期"],["火","18:15–19:15","K-POP 中級","経験者"],["火","19:30–20:30","チア初中級","基礎〜中級"],["火","20:35–21:35","チアテクニック","経験者"],
  ["水","16:00–16:45","体操基礎［短期］","短期"],["水","17:00–18:00","体操中級［短期］","短期"],["水","18:15–19:15","JAZZ 初中級","優先イベントクラス"],["水","19:30–20:30","JAZZ 基礎［大会］","大会クラス"],["水","20:45–21:45","JAZZ 上級","優先イベントクラス"],
  ["木","17:00–18:00","チア初級","優先イベントクラス"],["木","18:10–19:10","ロック","基礎〜中級"],["木","19:20–20:30","JAZZ・JAZZ Girls 初中級","小学生・中学生〜"],["木","20:45–21:45","JAZZ・JAZZ Girls 中上級","中学生〜"],
  ["金","18:15–19:15","キッズダンス低学年","小1〜小3"],["金","19:30–20:30","イベントダンス高学年","小4〜小6"],["金","20:45–21:45","ブレイク","基礎〜中級"],
  ["土","12:30–13:00","egg","0〜3歳"],["土","13:15–14:45","アクロ初中級［満席］","満席"],["土","15:00–16:30","新体操 小・中級","基礎〜中級"],["土","16:45–17:45","K-POP 初級","優先イベントクラス"],["土","18:00–19:00","K-POP 中級","第一優先イベントクラス"],["土","19:15–20:15","リリカルJAZZ①","中学生以上"],["土","20:30–21:30","リリカルJAZZ②","高校生以上"]
];
const halls=[["中大利公民館","ジュエル","火曜 18:15–19:00"],["上大利公民館","バニー","水曜 17:30–18:15"],["上大利公民館","ドール","水曜 18:30–19:30"],["篠栗町乙犬公民館","パール","火曜 15:45–16:30"],["篠栗町乙犬公民館","ルビー","火曜 16:45–17:30"],["篠栗町乙犬公民館","ビジュー","火曜 17:40–18:30"],["篠栗町乙犬公民館","アクロ","火曜 18:45–20:45"],["高宮小学校体育館","チア","金曜 17:00–17:45"],["高宮小学校体育館","アクロ","水曜 17:00–18:00"],["賀茂小学校体育館","チア","火曜 19:30–20:20"],["糸島前原南コミュニティセンター","チア","水曜 18:00–18:50"],["糸島前原南コミュニティセンター","アクロ","水曜 19:00–19:50"]];
const classGuides=[
  {name:"egg・幼児クラス",target:"egg：0〜3歳／幼児：3歳〜小1",image:"/class-preschool-v4.png",text:["音楽に合わせて体を動かし、","リズム感や表現する楽しさを育てる入門クラスです。"]},
  {name:"キッズダンス",target:"小1〜小3",image:"/class-kids-v2.png",text:["ダンスの基本動作を楽しく学びながら、","体力・リズム感・自信を身につけます。"]},
  {name:"K-POP",target:"年齢・レベル別",image:"/class-kpop.png",text:["人気の楽曲に合わせて振付を学び、","見せ方や表現する楽しさを身につけます。"]},
  {name:"JAZZ・JAZZ Girls",target:"小学生・中学生〜",image:"/class-jazz.png",text:["基礎を大切にしながら、","しなやかな動きと豊かな表現力を育てます。"]},
  {name:"チア",target:"年齢・レベル別",image:"/class-cheer.png",text:["元気なダンスとチームワークを通して、","笑顔・協調性・挑戦する力を育てます。"]},
  {name:"体操・新体操・アクロ",target:"年齢・レベル別",image:"/class-acro.png",text:["柔軟性や体の使い方から丁寧に学び、","安全に技の習得を目指します。"]},
  {name:"ロック・ブレイク",target:"小学生〜",image:"/class-lock-break-v2.png",text:["リズムの取り方や基礎ステップから学び、","力強く個性的な表現につなげます。"]},
  {name:"イベント・大会クラス",target:"選抜・経験者",image:"/class-event-v2.png",text:["発表会やイベント、大会に向けて、","仲間と作品をつくり上げるクラスです。"]},
];
const faq=["ダンスが初めてでも大丈夫ですか？","何歳から参加できますか？","どのクラスを選べばよいですか？","体験レッスンの料金はいくらですか？","体験レッスンの持ち物は何ですか？","レッスン時の服装を教えてください。","保護者の見学や付き添いは必要ですか？","発表会への参加は必須ですか？","発表会には別途費用がかかりますか？","欠席した場合の振替はできますか？","レッスン日の変更や休講はどこで確認できますか？","入会金や設備費はかかりますか？","複数のクラスを受講できますか？","駐車場はありますか？"];
function Logo(){return <a href="#top" className="sg-logo" aria-label="Shiny Girl Dance School トップへ"><img src="/shinygirl-logo-official.png" alt="Shiny☆Girl"/></a>}
function Back(){return <a className="back" href="/">← 3案の比較に戻る</a>}
function FAQ(){return <div className="faq-list">{faq.map(q=>
<details key={q}>
<summary>{q}<b>＋</b>
</summary>
<p>詳しい内容は代表者確認後に掲載します。</p>
</details>)}</div>}
function HallList(){return <div className="hall-list">{halls.map(h=>
<article key={h.join()}>
<small>{h[0]}</small>
<h4>{h[1]}</h4>
<p>{h[2]}</p>
</article>)}</div>}
function CommunityTimetable(){const days=["火","水","金"];return <div className="community-calendar-scroll"><div className="community-calendar">{days.map(day=><article key={day}><h3>{day}<small>曜日</small></h3>{halls.filter(h=>h[2].startsWith(`${day}曜`)).map(h=><p key={h.join()}><time>{h[2].replace(`${day}曜 `,"")}</time><b>{h[1]}</b><span>{h[0]}</span></p>)}</article>)}</div></div>}
function Trial(){return <section className="trial-common" id="trial">
<figure className="trial-photo" aria-label="レッスンを楽しむ女の子たち"/>
<div className="trial-copy">
<p>FIRST STEP</p>
<h2>はじめての日が、<br/>楽しみになる</h2>
<span className="trial-lead">「やってみたい！」の気持ちを大切に。<br/>まずは無料体験で、教室の雰囲気を感じてみてください。</span>
<a href="#">無料体験に申し込む</a>
<small>公式LINEから簡単にお申し込みいただけます</small>
</div>
</section>}
function TrialFlow(){return <section className="trial-flow-section" aria-labelledby="trial-flow-title">
<header><small>HOW TO JOIN</small><h2 id="trial-flow-title">無料体験までの<br/><em>かんたん3ステップ</em></h2><p>お申し込みから体験当日まで<br/>公式LINEで分かりやすくご案内します。</p></header>
<div className="trial-flow">
<article><b>STEP 1</b><figure className="flow-illustration" style={{backgroundImage:"url('/trial-step-line-photo-v2.png')"}}/><span>無料体験に申し込む</span><small>ボタンから公式LINEへ</small></article><i className="flow-arrow" aria-hidden="true">→</i>
<article><b>STEP 2</b><figure className="flow-illustration" style={{backgroundImage:"url('/trial-step-date-photo-v2.png')"}}/><span>LINEで日時を確定</span><small>教室・クラスを相談</small></article><i className="flow-arrow" aria-hidden="true">→</i>
<article><b>STEP 3</b><figure className="flow-illustration" style={{backgroundImage:"url('/trial-step-dance-photo-v2.png')"}}/><span>当日、無料体験へ</span><small>動きやすい服装で参加</small></article>
</div>
</section>}
function SchoolIntro({variant}:{variant:string}){return <section className={`added-intro added-${variant}`}><div><small>ABOUT SHINY☆GIRL</small><h2>Shiny☆Girlとは</h2><p>2013年から春日市・大野城市を中心に活動するダンススクールです。ダンスの技術だけでなく、挑戦する気持ち、仲間を思いやる心、自分を信じる力を育てます。</p><p>地域イベントや発表会への出演を通して、一人ひとりの努力が自信と成長につながる環境を大切にしています。</p></div><figure/></section>}
function InstructorSection({variant}:{variant:string}){const teachers=[
  {name:"SATOMI",role:"代表・ダンス",image:"/instructor-satomi.jpg"},
  {name:"めぐみ 先生",role:"バレエ",image:"/instructor-megumi.jpg"},
  {name:"まさし 先生",role:"ヒップホップ＆ロック",image:"/instructor-masashi.jpg"},
  {name:"れな 先生",role:"フィジカルトレーナー",image:"/instructor-rena.jpg"},
  {name:"きよ コーチ",role:"新体操＆アクロバット",image:"/instructor-kiyo.jpg"},
];return <section className={`added-teachers added-${variant}`} id="instructors"><header><small>INSTRUCTORS</small><h2><span>一人ひとりに寄り添う</span><span>講師陣</span></h2><p className="readable-copy"><span>経験豊富な講師が</span><span>それぞれの専門性を活かしてレッスンを行います。</span></p></header><div>{teachers.map((teacher,i)=><article key={teacher.name}><span>{String(i+1).padStart(2,"0")}</span><div className="teacher-photo" style={{backgroundImage:`url(${teacher.image})`}}/><small>{teacher.role}</small><h3>{teacher.name}</h3><div className="teacher-message"><b>MESSAGE</b><p>子どもたちへの想い・指導で大切にしていることを確認後に掲載</p></div></article>)}</div></section>}
function EventSection({variant}:{variant:string}){return <section className={`added-events added-${variant}`}><figure/><div><small>EVENT & INSTAGRAM</small><h2>仲間と頑張った経験を、<br/>大きな自信へ。</h2><p>発表会や地域イベントへの出演、コンテストへの挑戦など、子どもたちの活動を写真で紹介します。Instagramの最新投稿とも連携予定です。</p><a href="https://www.instagram.com/lalaoonojyoukyoushithu/">Instagramを見る →</a></div></section>}

export function ElegantSite(){return <div className="design elegant">
<Back/>
<header className="e-head" id="top">
<Logo/>
<nav>
<a href="#about">はじめての方へ</a>
<a href="#class">クラス紹介</a>
<a href="#schedule">レッスンの流れ</a>
<a href="#teacher">講師紹介</a>
<a href="#faq">よくあるご質問</a>
</nav>
<a className="head-cta" href="#trial">無料体験に申し込む</a>
</header>
<main>
<section className="e-hero">
<div>
<p>初心者も安心のダンススクール</p>
<h1>未経験でも安心。<br/>一人ひとりの「できた！」を大切に。</h1>
<span>小さな努力を、自信と成長へ</span>
<a href="#trial">無料体験に申し込む　→</a>
</div>
<figure/>
</section>
<section className="e-trust">
<h2>はじめてでも、安心して通える<span>3</span>つのポイント</h2>
<div>
<article>
<b>01</b>
<h3>やさしく丁寧な指導</h3>
<p>年齢やペースに合わせて、一人ひとりを支えます。</p>
</article>
<article>
<b>02</b>
<h3>幼児から通えるクラス</h3>
<p>同じ年代のお友だちと、楽しく基礎から学べます。</p>
</article>
<article>
<b>03</b>
<h3>「できた！」を実感</h3>
<p>小さな成功体験を積み重ね、自信を育てます。</p>
</article>
</div>
</section>
<section className="e-philosophy" id="about">
<div>
<small>OUR PHILOSOPHY</small>
<h2>一人ひとりに寄り添い、<br/>努力が報われる環境を。</h2>
<p>春日市・大野城市を中心に2013年から活動するShiny☆Girl。楽しいだけで終わらず、努力することの喜びと成長を、子どもたちと一緒に育てます。</p>
</div>
<div className="e-number">
<span>
<b>2013</b>年から活動</span>
<span>
<b>29</b>クラス</span>
<span>
<b>約200</b>名</span>
</div>
</section>
<section className="e-classes" id="class">
<header>
<small>CLASSES</small>
<h2>クラス紹介</h2>
<p>お子さまの年齢や経験に合わせて、無理なく始められるクラスをご案内します。</p>
</header>
<div>{studio.slice(0,6).map(c=>
<article key={c.join()}>
<span>{c[0]}曜日</span>
<small>{c[1]}</small>
<h3>{c[2]}</h3>
<em>{c[3]}</em>
</article>)}</div>
</section>
<section className="e-schedule" id="schedule">
<header>
<small>SCHEDULE</small>
<h2>レッスンスケジュール</h2>
</header>
<div className="e-table">{studio.map(c=>
<article key={c.join()}>
<b>{c[0]}</b>
<span>{c[1]}</span>
<h3>{c[2]}</h3>
<em>{c[3]}</em>
</article>)}</div>
<h3 className="sub-title">公民館・体育館クラス</h3>
<HallList/>
</section>
<section className="e-teacher" id="teacher">
<div/>
<article>
<small>INSTRUCTORS</small>
<h2>子どもの気持ちに、<br/>丁寧に寄り添う。</h2>
<p>講師一人ひとりの経験だけでなく、子どもたちへの想いまでお伝えします。</p>
<a href="#">講師紹介を見る →</a>
</article>
</section>
<InstructorSection variant="elegant"/>
<EventSection variant="elegant"/>
<section className="e-price">
<small>PRICE</small>
<h2>料金について</h2>
<div>
<article>
<h3>Shiny Dance Studio</h3>
<b>料金確認中</b>
</article>
<article>
<h3>公民館・体育館クラス</h3>
<b>料金確認中</b>
</article>
</div>
<p>※料金、入会金、設備費等は確認後に正式掲載します。</p>
</section>
<section className="e-faq" id="faq">
<header>
<small>FAQ</small>
<h2>よくあるご質問</h2>
</header>
<FAQ/>
</section>
<Trial/>
</main>
<footer>
<Logo/>
<small>© Shiny☆Girl</small>
</footer>
</div>}

export function FriendlySite(){return <div className="design friendly">
<Back/>
<header className="f-head" id="top">
<Logo/>
<nav>
<a href="#first">はじめての方へ</a>
<a href="#find">クラスを探す</a>
<a href="#f-schedule">スケジュール</a>
<a href="#f-faq">よくあるご質問</a>
</nav>
<a className="head-cta" href="#trial">無料体験に申し込む</a>
</header>
<main>
<section className="f-hero">
<div className="f-copy">
<p>はじめてのダンス、ここから。</p>
<h1>未経験でも<span>安心。</span>
<br/>一人ひとりの<br/>「できた！」を大切に。</h1>
<h2>小さな努力を、自信と成長へ</h2>
<a href="#trial">無料体験に申し込む　→</a>
<div>
<span>幼児からOK</span>
<span>初心者歓迎</span>
<span>個性に寄り添う</span>
</div>
</div>
<div className="f-collage">
<figure/>
<figure/>
<figure/>
</div>
</section>
<section className="f-first" id="first">
<p>はじめてのダンスを、<b>安心して楽しめる場所</b>
</p>
<div>
<article>
<span>STEP 1</span>
<h3>楽しい！からスタート</h3>
<p>音楽に合わせて体を動かす楽しさを、まずは体験します。</p>
</article>
<article>
<span>STEP 2</span>
<h3>小さな「できた！」</h3>
<p>一人ひとりのペースで、成功体験を積み重ねます。</p>
</article>
<article>
<span>STEP 3</span>
<h3>自信につながる</h3>
<p>発表やイベントを通して、努力を成長へつなげます。</p>
</article>
</div>
</section>
<section className="f-find" id="find">
<header>
<small>FIND YOUR CLASS</small>
<h2>ぴったりのクラスを<br/>見つけよう！</h2>
</header>
<div className="f-chips">
<button>年齢から探す</button>
<button>曜日から探す</button>
<button>会場から探す</button>
</div>
<div className="f-cardgrid">{studio.slice(0,8).map(c=>
<article key={c.join()}>
<i>{c[0]}</i>
<div>
<small>{c[1]}・Shiny Dance Studio</small>
<h3>{c[2]}</h3>
<span>{c[3]||"基礎からステップアップ"}</span>
</div>
<b>→</b>
</article>)}</div>
</section>
<section className="f-schedule" id="f-schedule">
<header>
<small>LESSON SCHEDULE</small>
<h2>いつ、どこで通える？</h2>
<p>曜日と会場から、通いやすいクラスを確認できます。</p>
</header>
<div className="f-days">{["月","火","水","木","金","土"].map((d,i)=>
<article key={d} className={i===2?"on":""}>
<b>{d}</b>
<small>曜日</small>
</article>)}</div>
<div className="f-daylist">{studio.filter(c=>c[0]==="水").map(c=>
<article key={c.join()}>
<span>{c[1]}</span>
<h3>{c[2]}</h3>
<em>{c[3]}</em>
<b>詳しく見る →</b>
</article>)}</div>
<h3 className="sub-title">公民館・体育館から探す</h3>
<HallList/>
</section>
<section className="f-voices">
<header>
<small>FOR PARENTS</small>
<h2>保護者の方へ</h2>
</header>
<div>
<blockquote>「人見知りだった娘が、毎週楽しみに通っています。」</blockquote>
<blockquote>「先生が小さな成長まで気づいてくれるので安心です。」</blockquote>
</div>
</section>
<SchoolIntro variant="friendly"/>
<InstructorSection variant="friendly"/>
<EventSection variant="friendly"/>
<section className="f-price">
<h2>料金も、分かりやすく。</h2>
<div>
<article>
<span>スタジオクラス</span>
<b>料金確認中</b>
</article>
<article>
<span>公民館・体育館</span>
<b>料金確認中</b>
</article>
</div>
<small>正式料金は代表者確認後に掲載します。</small>
</section>
<section className="f-faq" id="f-faq">
<h2>よくあるご質問</h2>
<FAQ/>
</section>
<Trial/>
</main>
<footer>
<Logo/>
<p>元気！＆ハッピー！をダンスで届けます。</p>
<small>© Shiny☆Girl</small>
</footer>
</div>}

export function DynamicSite(){return <div className="design dynamic">
<header className="d-head" id="top">
<Logo/>
<nav>
<a href="#growth">スクールについて</a>
<a href="#d-class">クラス</a>
<a href="#d-schedule">スケジュール</a>
<a href="#instructors">講師</a>
<a href="#d-faq">FAQ</a>
<a href="#trial">無料体験</a>
</nav>
<details className="mobile-menu">
<summary><i aria-hidden="true"><span/><span/><span/></i>MENU</summary>
<div>
<a href="#growth">スクールについて</a>
<a href="#d-class">クラス</a>
<a href="#d-schedule">スケジュール</a>
<a href="#instructors">講師</a>
<a href="#d-faq">FAQ</a>
<a href="#trial">無料体験</a>
</div>
</details>
<a className="head-cta" href="#trial">無料体験に申し込む</a>
</header>
<main>
<section className="d-hero">
<figure/>
<div>
<p>BEGIN YOUR STORY</p>
<h1><span className="hero-line">未経験でも<em>安心</em></span><span className="hero-line">一人ひとりの</span><span className="hero-line">「できた！」を大切に</span></h1>
<h2>小さな努力を、<br/>自信と成長へ</h2>
<a href="#trial">無料体験に申し込む</a>
</div>
</section>
<section className="d-about" id="growth">
<figure className="d-about-photo" aria-label="一人ひとりに寄り添うレッスンの様子"/>
<div className="d-section-mark">
<small>01　ABOUT SHINY☆GIRL</small>
<span>一人ひとりのペースを大切に</span>
</div>
<div className="d-about-copy">
<h2><span>一人ひとりに寄り添う</span><em>ダンススクール</em></h2>
<p className="d-about-lead">初めての一歩から、その子らしい成長まで</p>
<p className="readable-copy"><span>SHINY☆GIRLは、幼稚園児から</span><span>小学校低学年の未経験のお子さまも安心して始められるダンススクールです。</span><span>年齢や経験だけでなく、一人ひとりの性格やペースにも</span><span>目を向けながら丁寧にレッスンを進めます。</span></p>
<p className="readable-copy"><span>できなかったことが、少しずつできるようになる。</span><span>その小さな積み重ねを大切にし、</span><span>ダンスを通して自信と成長につなげていきます。</span></p>
</div>
</section>
<section className="d-reasons" id="reasons">
<header>
<small>02　WHY SHINY☆GIRL</small>
<h2>SHINY☆GIRLが<br/><em>選ばれる理由</em></h2>
<p className="readable-copy"><span>保護者の方にも、お子さまにも安心して</span><span>通っていただける環境を大切にしています。</span></p>
</header>
<div>
<article>
<figure className="reason-photo" style={{backgroundImage:"url('/reason-beginner.png')"}}/>
<b>01</b>
<small>FOR BEGINNERS</small>
<h3>未経験でも安心の<br/>丁寧なレッスン</h3>
<p className="readable-copy"><span>基礎から無理なく進めるため、</span><span>ダンスが初めてのお子さまも安心して参加できます。</span></p>
</article>
<article>
<figure className="reason-photo" style={{backgroundImage:"url('/reason-support.png')"}}/>
<b>02</b>
<small>PERSONAL SUPPORT</small>
<h3>一人ひとりに合わせた<br/>声かけとサポート</h3>
<p className="readable-copy"><span>年齢・性格・習熟度を見ながら、</span><span>その子に合った伝え方で成長を支えます。</span></p>
</article>
<article>
<figure className="reason-photo" style={{backgroundImage:"url('/reason-confidence.png')"}}/>
<b>03</b>
<small>SMALL SUCCESS</small>
<h3>小さな「できた！」を<br/>自信と成長へ</h3>
<p className="readable-copy"><span>結果だけでなく努力の過程も認め、</span><span>挑戦する気持ちと自信を育てます。</span></p>
</article>
<article>
<figure className="reason-photo" style={{backgroundImage:"url('/reason-local-v3.png')"}}/>
<b>04</b>
<small>LOCAL SCHOOL</small>
<h3>身近な教室から<br/>通い方を選べる</h3>
<p className="readable-copy"><span>大野城スタジオと地域の公民館・体育館から、</span><span>通いやすい教室を選べます。</span></p>
</article>
</div>
</section>
<section className="d-classes" id="d-class">
<header>
<small>CLASSES</small>
<h2>年齢や目的に合った<br/>クラスが見つかる</h2>
<p className="readable-copy"><span>初めてダンスに触れる幼児クラスから</span><span>イベントや大会を目指すクラスまで</span><span>年齢・経験・興味に合わせて選べます。</span></p>
</header>
<div>{classGuides.map((c,i)=>
<article key={c.name}>
<figure className="class-photo" style={{backgroundImage:`url(${c.image})`}}/>
<span>0{i+1}</span>
<div>
<small>{c.target}</small>
<h3>{c.name}</h3>
<p className="readable-copy">{c.text.map(line=><span key={line}>{line}</span>)}</p>
</div>
</article>)}</div>
</section>
<section className="d-schedule" id="d-schedule">
<header>
<small>WEEKLY SCHEDULE</small>
<h2>レッスンスケジュール</h2>
<p className="readable-copy"><span>曜日ごとのレッスンを一覧で確認できます。</span><span>体験可能なクラスは公式LINEからお問い合わせください。</span></p>
</header>
<figure className="schedule-section-photo schedule-studio-photo" aria-label="大野城スタジオでレッスンを楽しむ女の子たち"/>
<h3 className="schedule-location-title"><span>MAIN STUDIO</span>Shiny Dance Studio 大野城</h3>
<p className="timetable-hint">横にスクロールして、曜日ごとの時間割をご確認いただけます。</p>
<div className="timetable-scroll"><div className="timetable-grid">{["月","火","水","木","金","土"].map(d=>
<article key={d}>
<h3>{d}<small>曜日</small>
</h3>{studio.filter(c=>c[0]===d).map(c=>
<p key={c.join()}>
<time>{c[1]}</time>
<b>{c[2]}</b>
</p>)}</article>)}</div></div>
<h3 className="sub-title">OTHER LOCATIONS</h3>
<p className="location-lead">公民館・小学校体育館・コミュニティセンターのクラス</p>
<figure className="schedule-section-photo schedule-community-photo" aria-label="地域の教室でレッスンを楽しむ女の子たち"/>
<CommunityTimetable/>
</section>
<InstructorSection variant="dynamic"/>
<section className="d-price" id="price">
<header>
<small>PRICE</small>
<h2>料金</h2>
</header>
<div>
<article>STUDIO CLASS<b>月額 〇〇〇〇円〜（仮）</b>
</article>
<article>PUBLIC HALL<b>月額 〇〇〇〇円〜（仮）</b>
</article>
</div>
</section>
<section className="d-faq" id="d-faq">
<header>
<small>FAQ</small>
<h2>よくあるご質問</h2>
<p className="readable-copy"><span>体験レッスンやクラス、発表会について</span><span>よくいただく質問をまとめています。</span></p>
</header>
<FAQ/>
</section>
<section className="d-news" id="news">
<header><small>NEWS & TOPICS</small><h2>お知らせ</h2><p className="readable-copy"><span>休講・振替、短期レッスン、イベントなどの</span><span>最新情報をお届けします。</span></p></header>
<div>
<article><figure style={{backgroundImage:"url('/news-closure-v1.png')"}}/><div><time>NEWS</time><h3>休講・振替のお知らせ</h3><p>お盆休みや年末年始など、スクールのお休み情報を掲載します。</p><span>内容確認後に掲載　→</span></div></article>
<article><figure style={{backgroundImage:"url('/news-schedule-v1.png')"}}/><div><time>SCHEDULE</time><h3>最新レッスンスケジュール</h3><p>クラスの時間変更や短期レッスンの開催情報を掲載します。</p><span>内容確認後に掲載　→</span></div></article>
<article><figure style={{backgroundImage:"url('/news-event-v1.png')"}}/><div><time>EVENT</time><h3>イベント・発表会情報</h3><p>出演予定や参加イベント、当日のご案内を掲載します。</p><span>内容確認後に掲載　→</span></div></article>
</div>
</section>
<TrialFlow/>
<Trial/>
<section className="footer-information" aria-label="アクセスと無料体験">
<article className="footer-access"><div><small>ACCESS</small><h2>アクセス</h2><h3>Shiny Dance Studio</h3><p>イオン大野城ショッピングセンター 2F<br/>福岡県大野城市錦町4丁目1-1</p><a href="https://maps.google.com/?q=福岡県大野城市錦町4丁目1-1">地図を確認する　→</a></div><iframe title="Shiny Dance Studio周辺地図" src="https://www.google.com/maps?q=福岡県大野城市錦町4丁目1-1&output=embed" loading="lazy"/></article>
<article className="footer-trial-card"><div><small>TRIAL LESSON</small><h2>まずは<span>無料体験</span>へ！</h2><p>お子さまの「やってみたい！」を応援します。</p><a href="#trial">無料体験に申し込む</a><em>随時受付中！お気軽にご参加ください</em></div><figure aria-label="無料体験を案内する女の子"/></article>
</section>
</main>
<footer>
<Logo/>
<small>© Shiny☆Girl</small>
</footer>
</div>}

export function ScheduleSite({variant}:{variant:"elegant"|"friendly"|"dynamic"}){const title=variant==="elegant"?"安心・信頼":variant==="friendly"?"親しみ・楽しさ":"成長・躍動感";return <div className={`schedule-site schedule-${variant}`}><header><Logo/><div><small>{title}デザイン</small><a href={`/design/${variant}`}>トップページへ戻る</a></div></header><main><section className="schedule-title"><p>LESSON SCHEDULE</p><h1>レッスンスケジュール</h1><span>曜日・時間・会場から、お子さまに合うクラスをお探しいただけます。</span></section><nav className="schedule-nav"><a href="#studio">Shiny Dance Studio</a><a href="#community">公民館・体育館クラス</a><a href="#notes">料金・ご案内</a></nav><section className="studio-schedule" id="studio"><header><small>STUDIO LESSON</small><h2>Shiny Dance Studio</h2><p>曜日ごとに、時間・クラス・対象の目安を掲載しています。</p></header><div className="schedule-legend"><span>初心者向け</span><span>★ イベント優先</span><span>★★ 大会優先</span></div><div className="schedule-table"><div className="table-head"><b>曜日</b><b>時間</b><b>クラス</b><b>対象・区分</b><b>講師</b></div>{studio.map(c=><article key={c.join()}><b>{c[0]}曜日</b><time>{c[1]}</time><h3>{c[2]}</h3><em>{c[3]||"通常クラス"}</em><span>確認中</span></article>)}</div></section><section className="community-schedule" id="community"><header><small>COMMUNITY CLASS LESSON</small><h2>公民館・体育館クラス</h2><p>会場ごとに、開講クラスと曜日・時間を掲載しています。</p></header><div>{halls.map(h=><article key={h.join()}><div><small>会場</small><h3>{h[0]}</h3></div><div><small>クラス</small><b>{h[1]}</b></div><div><small>曜日・時間</small><b>{h[2]}</b></div><div><small>講師・対象</small><b>確認中</b></div></article>)}</div></section><section className="schedule-notes" id="notes"><div><small>PRICE</small><h2>料金について</h2><p>Shiny Dance Studioと公民館・体育館クラスに分けて掲載予定です。</p><b>料金確認中</b></div><div><small>TRIAL LESSON</small><h2>体験をご希望の方へ</h2><p>お子さまの年齢や経験をLINEでお知らせください。おすすめのクラスをご案内します。</p><a href="#">無料体験に申し込む →</a></div></section></main><footer><Logo/><small>© Shiny☆Girl</small></footer></div>}
