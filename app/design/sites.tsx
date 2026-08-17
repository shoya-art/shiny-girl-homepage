const studio=[
  ["月","16:00–16:45","プリサクダンス","初心者"],["月","17:00–17:45","アイドル 初級","初心者"],["火","18:15–19:15","K-POP 中級",""],["水","16:00–16:45","体操基礎［短期］","短期"],["水","17:00–18:00","体操中級［短期］","短期"],["水","18:15–19:15","JAZZ 初中級","★"],["木","17:00–18:00","チア初級","★★"],["木","18:10–19:10","ロック",""],["金","18:15–19:15","キッズダンス低学年","★★"],["土","12:30–13:00","egg","0〜3歳"],["土","16:45–17:45","K-POP 初級","初心者"]
];
const halls=[["中大利公民館","ジュエル","火曜 18:15–19:00"],["上大利公民館","バニー／ドール","水曜 17:30–19:30"],["篠栗町乙犬公民館","パール／ルビー／ビジュー","火曜 15:45–18:30"],["高宮小学校体育館","チア／アクロ","水・金曜"],["賀茂小学校体育館","チア","火曜 19:30–20:20"],["糸島前原南コミュニティセンター","チア／アクロ","水・木曜"]];
const faq=["ダンスが初めてでも大丈夫ですか？","何歳から参加できますか？","男の子も参加できますか？","どのクラスを選べばよいですか？","体験レッスンの料金はいくらですか？","体験レッスンの持ち物は何ですか？","レッスン時の服装を教えてください。","保護者の見学や付き添いは必要ですか？","発表会への参加は必須ですか？","発表会には別途費用がかかりますか？","欠席した場合の振替はできますか？","レッスン日の変更や休講はどこで確認できますか？","入会金や設備費はかかりますか？","複数のクラスを受講できますか？","駐車場はありますか？"];
function Logo(){return <a href="#top" className="sg-logo">SHINY<span>☆</span>GIRL<small>DANCE SCHOOL</small>
</a>}
function Back(){return <a className="back" href="/">← 3案の比較に戻る</a>}
function FAQ(){return <div className="faq-list">{faq.map(q=>
<details key={q}>
<summary>{q}<b>＋</b>
</summary>
<p>詳しい内容は代表者確認後に掲載します。</p>
</details>)}</div>}
function HallList(){return <div className="hall-list">{halls.map(h=>
<article key={h[0]}>
<small>{h[0]}</small>
<h4>{h[1]}</h4>
<p>{h[2]}</p>
</article>)}</div>}
function Trial(){return <section className="trial-common" id="trial">
<p>FIRST STEP</p>
<h2>はじめての一歩を、<br/>Shiny☆Girlで。</h2>
<a href="#">無料体験に申し込む <b>→</b>
</a>
<small>公式LINEから簡単にお申し込みいただけます</small>
</section>}
function ScheduleButton({variant}:{variant:string}){return <a className="schedule-page-link" href={`/schedule/${variant}`}>スケジュール専用ページを見る <b>→</b></a>}
function SchoolIntro({variant}:{variant:string}){return <section className={`added-intro added-${variant}`}><div><small>ABOUT SHINY☆GIRL</small><h2>Shiny☆Girlとは</h2><p>2013年から春日市・大野城市を中心に活動するダンススクールです。ダンスの技術だけでなく、挑戦する気持ち、仲間を思いやる心、自分を信じる力を育てます。</p><p>地域イベントや発表会への出演を通して、一人ひとりの努力が自信と成長につながる環境を大切にしています。</p></div><figure/></section>}
function InstructorSection({variant}:{variant:string}){const teachers=["SATOMI","めぐみ 先生","まさし 先生","れな 先生","きよ コーチ"];return <section className={`added-teachers added-${variant}`}><header><small>INSTRUCTORS</small><h2>一人ひとりに寄り添う講師陣</h2><p>担当クラスだけでなく、子どもたちへの想いも一人ずつ紹介します。</p></header><div>{teachers.map((name,i)=><article key={name}><span>{String(i+1).padStart(2,"0")}</span><div className="teacher-photo"/><h3>{name}</h3><p>担当・プロフィールは確認後に掲載</p></article>)}</div></section>}
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
<ScheduleButton variant="elegant"/>
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
<ScheduleButton variant="friendly"/>
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
<Back/>
<header className="d-head" id="top">
<Logo/>
<nav>
<a href="#growth">私たちの想い</a>
<a href="#d-class">クラス</a>
<a href="#d-schedule">スケジュール</a>
<a href="#d-faq">FAQ</a>
</nav>
<a className="head-cta" href="#trial">無料体験に申し込む</a>
</header>
<main>
<section className="d-hero">
<figure/>
<div>
<p>BEGIN YOUR STORY</p>
<h1>未経験でも<span>安心。</span>
<br/>一人ひとりの<br/>「できた！」を大切に。</h1>
<h2>小さな努力を、<br/>自信と成長へ</h2>
<a href="#trial">無料体験に申し込む　→</a>
</div>
</section>
<div className="d-marquee">
<span>ENJOY</span>
<b>できた！</b>
<span>CHALLENGE</span>
<b>成長</b>
<span>SHINE</span>
</div>
<section className="d-growth" id="growth">
<header>
<small>WHY SHINY☆GIRL</small>
<h2>努力するって、<br/>
<em>楽しい。</em>
</h2>
</header>
<div>
<article>
<b>01</b>
<h3>初めてを、楽しむ</h3>
<p>できないことがあっても大丈夫。挑戦する気持ちを大切にします。</p>
</article>
<article>
<b>02</b>
<h3>個性を、伸ばす</h3>
<p>一人ひとりに合った言葉とサポートで、自分らしさを育てます。</p>
</article>
<article>
<b>03</b>
<h3>努力を、舞台へ</h3>
<p>発表会や地域イベントで、積み重ねた成果を実感します。</p>
</article>
</div>
</section>
<section className="d-stats">
<span>
<b>2013</b> SINCE</span>
<span>
<b>29</b> CLASSES</span>
<span>
<b>200</b> MEMBERS</span>
</section>
<section className="d-classes" id="d-class">
<header>
<small>CLASSES</small>
<h2>好きが見つかる。<br/>夢中になれる。</h2>
</header>
<div>{studio.slice(0,8).map((c,i)=>
<article key={c.join()}>
<span>0{i+1}</span>
<div>
<small>{c[0]}曜日　{c[1]}</small>
<h3>{c[2]}</h3>
</div>
<em>{c[3]}</em>
<b>→</b>
</article>)}</div>
</section>
<section className="d-schedule" id="d-schedule">
<header>
<small>WEEKLY SCHEDULE</small>
<h2>今週のレッスン</h2>
</header>
<div>{["月","火","水","木","金","土"].map(d=>
<article key={d}>
<h3>{d}<small>曜日</small>
</h3>{studio.filter(c=>c[0]===d).map(c=>
<p key={c.join()}>
<time>{c[1]}</time>
<b>{c[2]}</b>
</p>)}</article>)}</div>
<h3 className="sub-title">OTHER LOCATIONS</h3>
<HallList/>
<ScheduleButton variant="dynamic"/>
</section>
<section className="d-event">
<div>
<small>EVENT & PERFORMANCE</small>
<h2>努力が、<br/>スポットライトに変わる。</h2>
<p>地域イベントや発表会への出演を通して、仲間と頑張った経験を大きな自信へ。</p>
</div>
<figure/>
</section>
<SchoolIntro variant="dynamic"/>
<InstructorSection variant="dynamic"/>
<section className="d-price">
<header>
<small>PRICE</small>
<h2>料金</h2>
</header>
<div>
<article>STUDIO CLASS<b>料金確認中</b>
</article>
<article>PUBLIC HALL<b>料金確認中</b>
</article>
</div>
</section>
<section className="d-faq" id="d-faq">
<header>
<small>FAQ</small>
<h2>気になること。</h2>
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

export function ScheduleSite({variant}:{variant:"elegant"|"friendly"|"dynamic"}){const title=variant==="elegant"?"安心・信頼":variant==="friendly"?"親しみ・楽しさ":"成長・躍動感";return <div className={`schedule-site schedule-${variant}`}><header><Logo/><div><small>{title}デザイン</small><a href={`/design/${variant}`}>トップページへ戻る</a></div></header><main><section className="schedule-title"><p>LESSON SCHEDULE</p><h1>レッスンスケジュール</h1><span>曜日・時間・会場から、お子さまに合うクラスをお探しいただけます。</span></section><nav className="schedule-nav"><a href="#studio">Shiny Dance Studio</a><a href="#community">公民館・体育館クラス</a><a href="#notes">料金・ご案内</a></nav><section className="studio-schedule" id="studio"><header><small>STUDIO LESSON</small><h2>Shiny Dance Studio</h2><p>曜日ごとに、時間・クラス・対象の目安を掲載しています。</p></header><div className="schedule-legend"><span>初心者向け</span><span>★ イベント優先</span><span>★★ 大会優先</span></div><div className="schedule-table"><div className="table-head"><b>曜日</b><b>時間</b><b>クラス</b><b>対象・区分</b><b>講師</b></div>{studio.map(c=><article key={c.join()}><b>{c[0]}曜日</b><time>{c[1]}</time><h3>{c[2]}</h3><em>{c[3]||"通常クラス"}</em><span>確認中</span></article>)}</div></section><section className="community-schedule" id="community"><header><small>COMMUNITY CLASS LESSON</small><h2>公民館・体育館クラス</h2><p>会場ごとに、開講クラスと曜日・時間を掲載しています。</p></header><div>{halls.map(h=><article key={h[0]}><div><small>会場</small><h3>{h[0]}</h3></div><div><small>クラス</small><b>{h[1]}</b></div><div><small>曜日・時間</small><b>{h[2]}</b></div><div><small>講師・対象</small><b>確認中</b></div></article>)}</div></section><section className="schedule-notes" id="notes"><div><small>PRICE</small><h2>料金について</h2><p>Shiny Dance Studioと公民館・体育館クラスに分けて掲載予定です。</p><b>料金確認中</b></div><div><small>TRIAL LESSON</small><h2>体験をご希望の方へ</h2><p>お子さまの年齢や経験をLINEでお知らせください。おすすめのクラスをご案内します。</p><a href="#">無料体験に申し込む →</a></div></section></main><footer><Logo/><small>© Shiny☆Girl</small></footer></div>}
