const designs = [
  {href:"/design/elegant",no:"01",name:"安心・信頼",desc:"余白と明朝体で、丁寧な指導と安心感を伝えるデザイン",img:"/concept-elegant.png"},
  {href:"/design/friendly",no:"02",name:"親しみ・楽しさ",desc:"笑顔と丸みのある写真で、はじめやすさを伝えるデザイン",img:"/concept-friendly.png"},
  {href:"/design/dynamic",no:"03",name:"成長・躍動感",desc:"大胆な写真と文字で、努力と成長を伝えるデザイン",img:"/concept-dynamic.png"},
];
export default function Home(){return <main className="choice"><header><p>SHINY☆GIRL</p><span>WEBSITE DESIGN PROPOSAL</span><h1>ホームページ<br/>デザイン3案</h1><p className="choice-lead">ヒアリング内容をもとに、写真・構成・情報の見せ方まで異なる3つのホームページを制作しました。</p></header><section>{designs.map(d=><a href={d.href} className="choice-card" key={d.no}><div className="choice-img" style={{backgroundImage:`url(${d.img})`}}/><div><small>DESIGN {d.no}</small><h2>{d.name}</h2><p>{d.desc}</p><b>このホームページを見る →</b></div></a>)}</section></main>}
