"use client";

import { useState } from "react";

type Variant = "elegant" | "friendly" | "dynamic";

const variants: { id: Variant; number: string; name: string; note: string }[] = [
  { id: "elegant", number: "01", name: "安心・信頼", note: "上品で落ち着いた印象" },
  { id: "friendly", number: "02", name: "親しみ・楽しさ", note: "明るく通いやすい印象" },
  { id: "dynamic", number: "03", name: "成長・躍動感", note: "今っぽく力強い印象" },
];

const studioClasses = [
  ["月", "16:00–16:45", "プリサクダンス", "初心者向け"],
  ["月", "17:00–17:45", "アイドル 初級", "初心者向け"],
  ["火", "18:15–19:15", "K-POP 中級", ""],
  ["水", "16:00–16:45", "体操基礎［短期］", "短期"],
  ["水", "17:00–18:00", "体操中級［短期］", "短期"],
  ["水", "18:15–19:15", "JAZZ 初中級", "イベント優先"],
  ["木", "17:00–18:00", "チア初級", "大会優先"],
  ["木", "18:10–19:10", "ロック", ""],
  ["金", "18:15–19:15", "キッズダンス低学年", "大会優先"],
  ["土", "12:30–13:00", "egg", "0〜3歳"],
  ["土", "16:45–17:45", "K-POP 初級", "初心者向け"],
];

const venues = [
  ["中大利公民館", "ジュエル", "火曜 18:15–19:00"],
  ["上大利公民館", "バニー", "水曜 17:30–18:15"],
  ["上大利公民館", "ドール", "水曜 18:30–19:30"],
  ["篠栗町乙犬公民館", "パール／ルビー／ビジュー", "火曜 15:45–18:30"],
  ["高宮小学校体育館", "チア／アクロ", "水・金曜"],
  ["賀茂小学校体育館", "チア", "火曜 19:30–20:20"],
  ["糸島前原南コミュニティセンター", "チア／アクロ", "水・木曜"],
];

function Logo() {
  return <a className="logo" href="#top" aria-label="Shiny Girl トップ"><span>SHINY<span className="star">☆</span>GIRL</span><small>DANCE SCHOOL</small></a>;
}

function Header() {
  return <header className="site-header"><Logo /><nav aria-label="メインメニュー"><a href="#about">はじめての方へ</a><a href="#classes">クラス紹介</a><a href="#schedule">スケジュール</a><a href="#teachers">講師紹介</a><a href="#faq">よくあるご質問</a></nav><a className="mini-cta" href="#trial">無料体験に申し込む</a></header>;
}

function Hero() {
  return <section className="hero" id="top"><div className="hero-copy"><p className="eyebrow">BEGINNER FRIENDLY DANCE SCHOOL</p><h1>未経験でも<span>安心。</span><br />一人ひとりの<br className="dynamic-break" />「できた！」を大切に。</h1><p className="tagline">小さな努力を、自信と成長へ</p><a className="primary-cta" href="#trial">無料体験に申し込む <b>→</b></a><div className="trust"><span>幼児からOK</span><span>初心者歓迎</span><span>一人ひとりに寄り添う</span></div></div><div className="hero-photo" role="img" aria-label="明るいスタジオでダンスを楽しむ子どもたち" /></section>;
}

function About() {
  return <section className="section about" id="about"><div className="section-heading"><p>ABOUT SHINY☆GIRL</p><h2>はじめてのダンスを、<br />安心して楽しめる場所</h2></div><div className="about-copy"><p>春日市・大野城市を中心に2013年から活動するShiny☆Girl。年齢や経験、性格もそれぞれ違う子どもたちの気持ちに寄り添い、自分らしく挑戦できる環境を大切にしています。</p><blockquote>一人ひとりに寄り添い、<br />努力が報われる環境をつくります。</blockquote></div><div className="facts"><article><strong>2013</strong><span>年から地域で活動</span></article><article><strong>29</strong><span>の多彩なクラス</span></article><article><strong>約200</strong><span>名のメンバー</span></article></div></section>;
}

function Features() {
  return <section className="section features"><div className="section-heading center"><p>OUR PROMISE</p><h2>安心して通える、3つの理由</h2></div><div className="feature-grid"><article><i>01</i><h3>未経験から楽しく</h3><p>基本のステップから丁寧に。ダンスが初めてのお子さまも、自分のペースで楽しめます。</p></article><article><i>02</i><h3>一人ひとりに寄り添う</h3><p>年齢や個性に合わせた声かけで、小さな「できた！」を見逃さず自信につなげます。</p></article><article><i>03</i><h3>努力を発表の舞台へ</h3><p>地域イベントや発表会を通して、積み重ねた努力を形にする機会を大切にしています。</p></article></div></section>;
}

function Classes() {
  return <section className="section classes" id="classes"><div className="section-heading"><p>FIND YOUR CLASS</p><h2>お子さまに合うクラスを探す</h2><span>年齢・曜日・会場から、通いやすいクラスをご案内します。</span></div><div className="filters"><button>年齢から探す⌄</button><button>曜日から探す⌄</button><button>会場から探す⌄</button><button className="active">初心者向け</button></div><div className="class-cards">{studioClasses.slice(0, 6).map((c, i) => <article key={i}><div className="day">{c[0]}</div><div><span>{c[1]}</span><h3>{c[2]}</h3><p>Shiny Dance Studio</p></div>{c[3] && <em>{c[3]}</em>}<b>→</b></article>)}</div><a className="text-link" href="#schedule">すべてのクラスを見る →</a></section>;
}

function Schedule() {
  return <section className="section schedule" id="schedule"><div className="section-heading"><p>LESSON SCHEDULE</p><h2>レッスンスケジュール</h2><span>スタジオと各会場の予定を、見やすく整理しています。</span></div><div className="schedule-tabs"><button className="active">Shiny Dance Studio</button><button>公民館・体育館</button></div><div className="week-grid"><div className="time-head">時間</div>{["月", "火", "水", "木", "金", "土"].map(d => <div className="week-head" key={d}>{d}曜日</div>)}{studioClasses.slice(0, 7).map((c, i) => <article className={`lesson l${i + 1}`} key={i}><small>{c[1]}</small><strong>{c[2]}</strong>{c[3] && <em>{c[3]}</em>}</article>)}</div><div className="mobile-lessons">{studioClasses.map((c, i) => <article key={i}><div><b>{c[0]}曜日</b><span>{c[1]}</span></div><h3>{c[2]}</h3>{c[3] && <em>{c[3]}</em>}</article>)}</div><h3 className="venue-title">公民館・体育館クラス</h3><div className="venue-grid">{venues.map((v, i) => <article key={i}><span>{v[0]}</span><h4>{v[1]}</h4><p>{v[2]}</p></article>)}</div></section>;
}

function PriceTeachers() {
  return <><section className="section price"><div className="section-heading"><p>PRICE</p><h2>料金について</h2><span>分かりやすい料金で、安心してスタートできます。</span></div><div className="price-grid"><article><p>Shiny Dance Studio</p><h3>通常クラス</h3><strong>料金確認中</strong><span>月謝制・年間42回を予定</span></article><article><p>PUBLIC HALL</p><h3>公民館・体育館クラス</h3><strong>料金確認中</strong><span>会場別の料金を掲載予定</span></article></div><p className="price-note">※料金、入会金、設備費等は代表者確認後に正式掲載します。</p></section><section className="section teachers" id="teachers"><div className="teacher-visual"><div className="photo-placeholder"><span>実際の講師写真を掲載</span></div></div><div className="teacher-copy"><div className="section-heading"><p>INSTRUCTORS</p><h2>子どもの気持ちに<br />寄り添う講師陣</h2></div><p>経験や実績だけでなく、一人ひとりの講師が「どんな想いで子どもたちと向き合っているか」を丁寧に紹介します。</p><a className="text-link" href="#teachers">講師紹介を見る →</a></div></section></>;
}

function FaqTrial() {
  const qs = ["ダンスが初めてでも大丈夫ですか？", "体験レッスンの持ち物は何ですか？", "発表会への参加は必要ですか？", "レッスン日の確認方法を教えてください。"];
  return <><section className="section faq" id="faq"><div className="section-heading"><p>FAQ</p><h2>よくあるご質問</h2></div><div>{qs.map((q, i) => <details key={i}><summary>{q}<span>＋</span></summary><p>詳細内容は代表者への確認後に掲載します。</p></details>)}</div></section><section className="trial" id="trial"><p>まずは、ダンスの楽しさを体験してみませんか？</p><h2>はじめての一歩を、<br />Shiny☆Girlで。</h2><a className="primary-cta" href="#">無料体験に申し込む <b>→</b></a><small>公式LINEから簡単にお申し込みいただけます</small></section></>;
}

function Footer() { return <footer><Logo /><p>春日市・大野城市を中心に活動するダンススクール</p><small>© Shiny☆Girl</small></footer>; }

function Site({ variant }: { variant: Variant }) {
  return <div className={`site variant-${variant}`}><Header /><main><Hero /><About /><Features /><Classes /><Schedule /><PriceTeachers /><FaqTrial /></main><Footer /></div>;
}

export default function Home() {
  const [variant, setVariant] = useState<Variant>("friendly");
  return <><aside className="proposal-bar"><div><b>SHINY☆GIRL</b><span>ホームページ デザイン比較</span></div><div className="variant-switcher">{variants.map(v => <button key={v.id} className={variant === v.id ? "selected" : ""} onClick={() => setVariant(v.id)}><small>{v.number}</small><span>{v.name}<em>{v.note}</em></span></button>)}</div></aside><Site variant={variant} /></>;
}
