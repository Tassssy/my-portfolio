import { assetUrl } from '../asset-url';
import { Arrow, Star } from './Icons';

export function EvidenceLinks({ links = [] }) {
  if (!links.length) return null;
  return <div className="evidence-links">{links.map(link=><a className="evidence-link" href={assetUrl(link.url)} key={link.url} target="_blank" rel="noopener noreferrer" download={link.download || undefined}><div className="evidence-link-top"><span>{link.label}</span><Arrow diagonal/></div><h4>{link.title}</h4><p>{link.description}</p><span className="evidence-type">{link.type === 'file' ? '原始文件 / DOWNLOAD' : link.type === 'image' ? '视觉作品 / ORIGINAL' : link.type === 'official' ? '官方资料 / OFFICIAL' : '平台作品 / EXTERNAL'}</span></a>)}</div>;
}

export function Metrics({ metrics = [], note, award }) {
  if (!metrics.length) return null;
  return <section className="case-impact"><div className="case-inner"><p className="section-kicker">IMPACT / 让成果有分量</p><div className="metrics">{metrics.map(metric=><div className="metric" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>{award&&<p className="impact-award"><Star/>{award}</p>}{note&&<p className="metrics-note">{note}</p>}</div></section>;
}
