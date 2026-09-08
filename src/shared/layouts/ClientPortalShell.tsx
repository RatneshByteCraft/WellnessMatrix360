import { NavLink, Outlet } from 'react-router-dom'
import { CalendarDays, FileText, Pill, ListTodo, ReceiptText, Home, MessageSquareText, LogOut } from 'lucide-react'
const items=[
 {to:'/client-portal',label:'Home',icon:Home,end:true},
 {to:'/client-portal/schedule',label:'Schedule',icon:CalendarDays},
 {to:'/client-portal/reports',label:'Reports',icon:FileText},
 {to:'/client-portal/prescriptions',label:'Prescriptions',icon:Pill},
 {to:'/client-portal/tasks',label:'Tasks',icon:ListTodo},
 {to:'/client-portal/billing',label:'Billing',icon:ReceiptText},
 {to:'/client-portal/messages',label:'Messages',icon:MessageSquareText},
]
export function ClientPortalShell(){
 return <div className="portal-shell">
  <header className="portal-top"><div className="portal-brand"><div className="brand-mark">WM</div><div><strong>WellnessMatrix360</strong><small>My Wellness Portal</small></div></div><div className="portal-user"><span>Kabir Mehra</span><div className="avatar">KM</div><button className="icon-btn"><LogOut size={18}/></button></div></header>
   <div className="portal-body"><aside className="portal-nav">{items.map(({to,label,icon:Icon,end})=><NavLink key={to} end={end} to={to} className={({isActive})=>isActive?'active':''}><Icon size={18}/><span>{label}</span></NavLink>)}</aside><main className="portal-content"><Outlet/></main></div>
   <nav className="portal-bottom">{items.slice(0,6).map(({to,label,icon:Icon,end})=><NavLink key={to} end={end} to={to} className={({isActive})=>isActive?'active':''}><Icon size={19}/><span>{label}</span></NavLink>)}</nav>
 </div>
}
