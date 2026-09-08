import { NavLink, Outlet } from 'react-router-dom'
import { useState } from 'react'
import {
  LayoutDashboard, WalletCards, Boxes, UsersRound, UserRoundSearch, ClipboardPlus,
  ShieldCheck, Building2, SlidersHorizontal, Bell, Menu, X, LogOut, ChevronDown
} from 'lucide-react'
import { currentUser } from '../../core/access/access'

const nav = [
  {to:'/dashboard',label:'Dashboard',icon:LayoutDashboard},
  {to:'/admission',label:'Admission',icon:ClipboardPlus},
  {to:'/clients',label:'Client Records',icon:UserRoundSearch},
  {to:'/accounts',label:'Accounts',icon:WalletCards},
  {to:'/inventory',label:'Inventory',icon:Boxes},
  {to:'/client-portal',label:'Client Portal',icon:UsersRound},
]
const admin = [
  {to:'/admin/roles',label:'Roles & Security',icon:ShieldCheck},
  {to:'/admin/users',label:'Users',icon:UsersRound},
  {to:'/admin/locations',label:'Locations',icon:Building2},
  {to:'/admin/configuration',label:'Configuration',icon:SlidersHorizontal},
]

export function AppShell(){
  const [open,setOpen]=useState(false)
  return <div className="app-shell">
    <aside className={`sidebar ${open?'open':''}`}>
      <div className="brand"><div className="brand-mark">WM</div><div><strong>WellnessMatrix360</strong><small>Veda Wellness</small></div><button className="icon-btn mobile-close" onClick={()=>setOpen(false)}><X/></button></div>
      <nav>
        <div className="nav-section">Workspace</div>
        {nav.map(({to,label,icon:Icon})=><NavLink to={to} key={to} onClick={()=>setOpen(false)} className={({isActive})=>isActive?'active':''}><Icon size={19}/><span>{label}</span></NavLink>)}
        <div className="nav-section">Administration</div>
        {admin.map(({to,label,icon:Icon})=><NavLink to={to} key={to} onClick={()=>setOpen(false)} className={({isActive})=>isActive?'active':''}><Icon size={19}/><span>{label}</span></NavLink>)}
      </nav>
      <div className="sidebar-footer"><button className="profile-mini"><div className="avatar">AM</div><div><strong>{currentUser.name}</strong><small>{currentUser.role}</small></div><ChevronDown size={16}/></button><button className="logout"><LogOut size={17}/>Sign out</button></div>
    </aside>
    {open&&<div className="scrim" onClick={()=>setOpen(false)}/>}
    <div className="main">
      <header className="topbar"><button className="icon-btn mobile-menu" onClick={()=>setOpen(true)}><Menu/></button><div className="location-pill"><Building2 size={16}/>{currentUser.location}</div><div className="top-actions"><button className="icon-btn"><Bell/></button><div className="avatar">AM</div></div></header>
      <main className="content"><Outlet/></main>
    </div>
  </div>
}
