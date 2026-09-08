import React from 'react'
import { ChevronRight } from 'lucide-react'

export function PageHeader({title,subtitle,actions}:{title:string,subtitle?:string,actions?:React.ReactNode}){
  return <div className="page-header"><div><h1>{title}</h1>{subtitle&&<p>{subtitle}</p>}</div><div className="page-actions">{actions}</div></div>
}
export function Card({title,children,actions,className=''}:{title?:string,children:React.ReactNode,actions?:React.ReactNode,className?:string}){
  return <section className={`card ${className}`}><div className="card-head">{title&&<h3>{title}</h3>}{actions}</div><div>{children}</div></section>
}
export function Stat({label,value,helper}:{label:string,value:string,helper?:string}){
  return <div className="stat"><span>{label}</span><strong>{value}</strong>{helper&&<small>{helper}</small>}</div>
}
export function Badge({children,tone='neutral'}:{children:React.ReactNode,tone?:'neutral'|'success'|'warning'|'danger'|'info'}){
  return <span className={`badge ${tone}`}>{children}</span>
}
export function PrimaryButton({children,onClick}:{children:React.ReactNode,onClick?:()=>void}){
  return <button className="btn primary" onClick={onClick}>{children}</button>
}
export function SecondaryButton({children,onClick}:{children:React.ReactNode,onClick?:()=>void}){
  return <button className="btn secondary" onClick={onClick}>{children}</button>
}
export function DataTable({columns,rows}:{columns:string[],rows:(string|React.ReactNode)[][]}){
  return <div className="table-wrap"><table><thead><tr>{columns.map(c=><th key={c}>{c}</th>)}</tr></thead>
  <tbody>{rows.map((r,i)=><tr key={i}>{r.map((c,j)=><td key={j}>{c}</td>)}</tr>)}</tbody></table></div>
}
export function Breadcrumbs({items}:{items:string[]}){
  return <div className="breadcrumbs">{items.map((x,i)=><React.Fragment key={x}><span>{x}</span>{i<items.length-1&&<ChevronRight size={14}/>}</React.Fragment>)}</div>
}
export function EmptyState({title,text}:{title:string,text:string}){return <div className="empty"><h4>{title}</h4><p>{text}</p></div>}
