(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{TDBs:function(t,e,a){"use strict";a.r(e),a.d(e,"DashboardModule",function(){return ue});var n=a("ofXK"),i=a("tyNb"),c=a("fXoL"),o=a("bTqV");let r=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Ib({type:t,selectors:[["app-access-control"]],decls:3,vars:0,consts:[["mat-raised-button","","color","primary"]],template:function(t,e){1&t&&(c.Ub(0,"div"),c.Ub(1,"button",0),c.xc(2,"INICIAR PROCESO DE RECONOCIMIENTO"),c.Tb(),c.Tb())},directives:[o.a],styles:[""]}),t})();var s=a("M9IT"),l=a("Dh3D"),b=a("+0xr"),u=a("tk/3"),m=a("z6cu"),d=a("JIr8");let p=(()=>{class t{constructor(t){this.http=t,this.assets=[],this.httpOptions={headers:new u.c({"Content-Type":"application/json"})}}getAssets(){return this.http.get("https://fm-assets-system-api.us-e1.cloudhub.io/api/assets").pipe(Object(d.a)(this.handleError))}handleError(t){return Object(m.a)(t)}}return t.\u0275fac=function(e){return new(e||t)(c.Yb(u.a))},t.\u0275prov=c.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var f=a("dNgK"),h=a("0IaG"),g=a("NFeN");let T=(()=>{class t{constructor(t){this.data=t}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(c.Ob(h.a))},t.\u0275cmp=c.Ib({type:t,selectors:[["app-dialog"]],decls:14,vars:8,consts:[[1,"header"],["mat-dialog-title",""],["mat-icon-button","",3,"mat-dialog-close"],["mat-dialog-content",""],["mat-dialog-actions","",3,"align"],["mat-raised-button","",3,"mat-dialog-close"],["mat-raised-button","","color","primary",3,"mat-dialog-close"]],template:function(t,e){1&t&&(c.Ub(0,"div",0),c.Ub(1,"h2",1),c.xc(2),c.Tb(),c.Ub(3,"button",2),c.Ub(4,"mat-icon"),c.xc(5,"close"),c.Tb(),c.Tb(),c.Tb(),c.Ub(6,"div",3),c.Ub(7,"p"),c.xc(8),c.Tb(),c.Tb(),c.Ub(9,"div",4),c.Ub(10,"button",5),c.xc(11),c.Tb(),c.Ub(12,"button",6),c.xc(13),c.Tb(),c.Tb()),2&t&&(c.Db(2),c.yc(null==e.data?null:e.data.title),c.Db(1),c.lc("mat-dialog-close",!1),c.Db(5),c.yc(null==e.data?null:e.data.message),c.Db(1),c.lc("align","end"),c.Db(1),c.lc("mat-dialog-close",!1),c.Db(1),c.zc(" ",null==e.data?null:e.data.cancelCaption," "),c.Db(1),c.lc("mat-dialog-close",!0),c.Db(1),c.zc(" ",null==e.data?null:e.data.confirmCaption," "))},directives:[h.g,o.a,h.d,g.a,h.e,h.c],styles:[".header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}.header[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{margin:0}"]}),t})(),w=(()=>{class t{constructor(t){this.dialog=t}confirmDialog(t){return this.dialog.open(T,{data:t,width:"400px",disableClose:!0}).afterClosed()}}return t.\u0275fac=function(e){return new(e||t)(c.Yb(h.b))},t.\u0275prov=c.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var U=a("/t3+"),D=a("kmnG"),_=a("qFsG"),C=a("Qu3c");function x(t,e){1&t&&(c.Ub(0,"th",25),c.xc(1," ID "),c.Tb())}function y(t,e){if(1&t&&(c.Ub(0,"td",26),c.xc(1),c.Tb()),2&t){const t=e.$implicit;c.Db(1),c.zc(" ",t.id," ")}}function v(t,e){1&t&&(c.Ub(0,"th",27),c.xc(1," Description "),c.Tb())}function k(t,e){if(1&t&&(c.Ub(0,"td",26),c.xc(1),c.Tb()),2&t){const t=e.$implicit;c.Db(1),c.zc(" ",t.a_description," ")}}function S(t,e){1&t&&(c.Ub(0,"th",25),c.xc(1," Quantity "),c.Tb())}function O(t,e){if(1&t&&(c.Ub(0,"td",26),c.xc(1),c.Tb()),2&t){const t=e.$implicit;c.Db(1),c.zc(" ",t.a_quantity," ")}}function I(t,e){1&t&&(c.Ub(0,"th",25),c.xc(1," Date created "),c.Tb())}function R(t,e){if(1&t&&(c.Ub(0,"td",26),c.xc(1),c.Tb()),2&t){const t=e.$implicit;c.Db(1),c.zc(" ",t.a_date_created," ")}}function P(t,e){1&t&&(c.Ub(0,"th",27),c.xc(1," Type "),c.Tb())}function E(t,e){if(1&t&&(c.Ub(0,"td",26),c.xc(1),c.Tb()),2&t){const t=e.$implicit;c.Db(1),c.zc(" ",t.a_type," ")}}function z(t,e){1&t&&(c.Ub(0,"th",27),c.xc(1," Filler 1 "),c.Tb())}function A(t,e){if(1&t&&(c.Ub(0,"td",26),c.xc(1),c.Tb()),2&t){const t=e.$implicit;c.Db(1),c.zc(" ",t.a_filler1," ")}}function M(t,e){1&t&&(c.Ub(0,"th",27),c.xc(1," Filler 2 "),c.Tb())}function N(t,e){if(1&t&&(c.Ub(0,"td",26),c.xc(1),c.Tb()),2&t){const t=e.$implicit;c.Db(1),c.zc(" ",t.a_filler2," ")}}function $(t,e){1&t&&(c.Ub(0,"th",27),c.xc(1," Propietor "),c.Tb())}function L(t,e){if(1&t&&(c.Ub(0,"td",26),c.xc(1),c.Tb()),2&t){const t=e.$implicit;c.Db(1),c.zc(" ",t.fk_propietor," ")}}function F(t,e){1&t&&(c.Ub(0,"th",27),c.xc(1," Building "),c.Tb())}function j(t,e){if(1&t&&(c.Ub(0,"td",26),c.xc(1),c.Tb()),2&t){const t=e.$implicit;c.Db(1),c.zc(" ",t.fk_building," ")}}function q(t,e){1&t&&c.Pb(0,"th",27)}function H(t,e){if(1&t){const t=c.Vb();c.Ub(0,"td",28),c.Ub(1,"a",29),c.cc("click",function(){c.qc(t);const a=e.$implicit;return c.gc(2).updateUser(a)}),c.Ub(2,"mat-icon"),c.xc(3,"edit"),c.Tb(),c.Tb(),c.Ub(4,"a",30),c.cc("click",function(){c.qc(t);const a=e.$implicit;return c.gc(2).confirmCancelDialog(a.id)}),c.Ub(5,"mat-icon"),c.xc(6,"delete"),c.Tb(),c.Tb(),c.Tb()}}function V(t,e){1&t&&c.Pb(0,"tr",31)}function B(t,e){1&t&&c.Pb(0,"tr",32)}const K=function(){return[5,10,25,100]};function G(t,e){if(1&t){const t=c.Vb();c.Ub(0,"div"),c.Ub(1,"mat-form-field",3),c.Ub(2,"mat-label"),c.xc(3,"Filter"),c.Tb(),c.Ub(4,"input",4,5),c.cc("keyup",function(e){return c.qc(t),c.gc().applyFilter(e)}),c.Tb(),c.Tb(),c.Ub(6,"div",6),c.Ub(7,"table",7),c.Sb(8,8),c.wc(9,x,2,0,"th",9),c.wc(10,y,2,1,"td",10),c.Rb(),c.Sb(11,11),c.wc(12,v,2,0,"th",12),c.wc(13,k,2,1,"td",10),c.Rb(),c.Sb(14,13),c.wc(15,S,2,0,"th",9),c.wc(16,O,2,1,"td",10),c.Rb(),c.Sb(17,14),c.wc(18,I,2,0,"th",9),c.wc(19,R,2,1,"td",10),c.Rb(),c.Sb(20,15),c.wc(21,P,2,0,"th",12),c.wc(22,E,2,1,"td",10),c.Rb(),c.Sb(23,16),c.wc(24,z,2,0,"th",12),c.wc(25,A,2,1,"td",10),c.Rb(),c.Sb(26,17),c.wc(27,M,2,0,"th",12),c.wc(28,N,2,1,"td",10),c.Rb(),c.Sb(29,18),c.wc(30,$,2,0,"th",12),c.wc(31,L,2,1,"td",10),c.Rb(),c.Sb(32,19),c.wc(33,F,2,0,"th",12),c.wc(34,j,2,1,"td",10),c.Rb(),c.Sb(35,20),c.wc(36,q,1,0,"th",12),c.wc(37,H,7,0,"td",21),c.Rb(),c.wc(38,V,1,0,"tr",22),c.wc(39,B,1,0,"tr",23),c.Tb(),c.Pb(40,"mat-paginator",24),c.Tb(),c.Tb()}if(2&t){const t=c.gc();c.Db(7),c.lc("dataSource",t.dataSource),c.Db(31),c.lc("matHeaderRowDef",t.displayedColumns),c.Db(1),c.lc("matRowDefColumns",t.displayedColumns),c.Db(1),c.lc("pageSizeOptions",c.mc(4,K))}}function J(t,e){1&t&&(c.Ub(0,"h2"),c.xc(1,"No hay registro de activos"),c.Tb())}const Q=function(){return["/dashboard/assets"]};let X=(()=>{class t{constructor(t,e,a,n){this._assetService=t,this._snackBar=e,this.router=a,this.dialog=n,this.assets=[],this.displayedColumns=["id","a_description","a_quantity","a_date_created","a_type","a_filler1","a_filler2","fk_propietor","fk_building","actions"]}ngOnInit(){this.loadAssets()}loadAssets(){this.dataSource=new b.k,this._assetService.getAssets().subscribe(t=>{t.data.length>0&&(console.log(t),this.assets=t.data.slice(),this.dataSource=new b.k(this.assets),console.log(this.assets))})}confirmCancelDialog(t){this.dialog.confirmDialog({title:"Confirmar acci\xf3n",message:"\xbfDeseas eliminar este activo?",confirmCaption:"Eliminar",cancelCaption:"Cancelar"}).subscribe(t=>{t&&console.log("El usuario confirmo esta acci\xf3n.")})}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}applyFilter(t){this.dataSource.filter=t.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}}return t.\u0275fac=function(e){return new(e||t)(c.Ob(p),c.Ob(f.a),c.Ob(i.a),c.Ob(w))},t.\u0275cmp=c.Ib({type:t,selectors:[["app-assets"]],viewQuery:function(t,e){if(1&t&&(c.Ac(s.a,1),c.Ac(l.a,1)),2&t){let t;c.nc(t=c.dc())&&(e.paginator=t.first),c.nc(t=c.dc())&&(e.sort=t.first)}},decls:8,vars:6,consts:[[1,"container"],["mat-raised-button","","color","primary","routerLinkActive","router-link-active",3,"routerLink"],[4,"ngIf"],["appearance","standard"],["matInput","","placeholder","Ex. Mia","autocomplete","off",3,"keyup"],["input",""],[1,"mat-elevation-z8"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","a_description"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","a_quantity"],["matColumnDef","a_date_created"],["matColumnDef","a_type"],["matColumnDef","a_filler1"],["matColumnDef","a_filler2"],["matColumnDef","fk_propietor"],["matColumnDef","fk_building"],["matColumnDef","actions"],["mat-cell","","style","text-align: right;",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["aria-label","Select page of assets",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],["mat-cell","",2,"text-align","right"],["matTooltip","Editar Activo",1,"pointer",2,"color","#1f516f",3,"click"],["matTooltip","Eliminar Activo",1,"pointer",2,"color","#e15639",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(c.Ub(0,"div",0),c.Ub(1,"mat-toolbar"),c.Ub(2,"button",1),c.xc(3,"CREAR"),c.Tb(),c.Ub(4,"button",1),c.xc(5,"EXPORTAR"),c.Tb(),c.Tb(),c.wc(6,G,41,5,"div",2),c.wc(7,J,2,0,"h2",2),c.Tb()),2&t&&(c.Db(2),c.lc("routerLink",c.mc(4,Q)),c.Db(2),c.lc("routerLink",c.mc(5,Q)),c.Db(2),c.lc("ngIf",e.assets.length>0),c.Db(1),c.lc("ngIf",0==e.assets.length))},directives:[U.a,o.a,i.c,i.b,n.k,D.b,D.e,_.a,b.j,l.a,b.c,b.e,b.b,b.g,b.i,s.a,b.d,l.b,b.a,C.a,g.a,b.f,b.h],styles:["table[_ngcontent-%COMP%]{width:100%;margin-top:10px}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{width:11.11%}.pointer[_ngcontent-%COMP%]{cursor:pointer}.mat-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}"]}),t})(),Y=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Ib({type:t,selectors:[["app-bi"]],decls:2,vars:0,template:function(t,e){1&t&&(c.Ub(0,"p"),c.xc(1,"bi works!"),c.Tb())},styles:[""]}),t})(),W=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Ib({type:t,selectors:[["app-clients"]],decls:3,vars:0,consts:[["mat-raised-button","","color","primary"]],template:function(t,e){1&t&&(c.Ub(0,"div"),c.Ub(1,"button",0),c.xc(2,"ABRIR PANEL DE ADMINISTRACI\xd3N DE CLIENTES"),c.Tb(),c.Tb())},directives:[o.a],styles:[""]}),t})(),Z=(()=>{class t{constructor(t){this.http=t}getMenu(){return this.http.get("./assets/data/menu.json")}}return t.\u0275fac=function(e){return new(e||t)(c.Yb(u.a))},t.\u0275prov=c.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function tt(t,e){if(1&t&&(c.Ub(0,"button",4),c.xc(1),c.Tb()),2&t){const t=e.$implicit;c.lc("routerLink",t.redirect),c.Db(1),c.yc(t.name)}}let et=(()=>{class t{constructor(t){this._menuService=t,this.menu=[]}ngOnInit(){this.loadMenu()}loadMenu(){this._menuService.getMenu().subscribe(t=>{this.menu=t})}}return t.\u0275fac=function(e){return new(e||t)(c.Ob(Z))},t.\u0275cmp=c.Ib({type:t,selectors:[["app-sidenav"]],decls:9,vars:1,consts:[["src","assets/img/grupo-hlq-logo.png","width","180px"],[1,"example-spacer"],["mat-button","",3,"routerLink",4,"ngFor","ngForOf"],["routerLink","/logout","mat-icon-button","","aria-label","Example icon-button with heart icon",1,"example-icon","favorite-icon"],["mat-button","",3,"routerLink"]],template:function(t,e){1&t&&(c.Ub(0,"mat-toolbar"),c.Ub(1,"span"),c.Pb(2,"img",0),c.Tb(),c.Pb(3,"span",1),c.wc(4,tt,2,2,"button",2),c.Pb(5,"span",1),c.Ub(6,"button",3),c.Ub(7,"mat-icon"),c.xc(8,"logout"),c.Tb(),c.Tb(),c.Tb()),2&t&&(c.Db(4),c.lc("ngForOf",e.menu))},directives:[U.a,n.j,o.a,i.b,g.a],styles:[""]}),t})(),at=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Ib({type:t,selectors:[["app-dashboard"]],decls:2,vars:0,template:function(t,e){1&t&&(c.Pb(0,"app-sidenav"),c.Pb(1,"router-outlet"))},directives:[et,i.e],styles:[""]}),t})(),nt=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Ib({type:t,selectors:[["app-maintenance"]],decls:5,vars:0,consts:[["mat-raised-button","","color","primary"],["mat-raised-button","","color","warn"]],template:function(t,e){1&t&&(c.Ub(0,"div"),c.Ub(1,"button",0),c.xc(2,"ABRIR PANEL DE MANTENIMIENTO"),c.Tb(),c.Ub(3,"button",1),c.xc(4,"ABRIR PANEL DE INSPECCI\xd3N VIRTUAL"),c.Tb(),c.Tb())},directives:[o.a],styles:[""]}),t})(),it=(()=>{class t{constructor(t){this.http=t,this.tasks=[],this.httpOptions={headers:new u.c({"Content-Type":"application/json"})}}getTasks(){return this.http.get("https://fm-tasks-system-api.us-e1.cloudhub.io/api/tasks").pipe(Object(d.a)(this.handleError))}handleError(t){return Object(m.a)(t)}}return t.\u0275fac=function(e){return new(e||t)(c.Yb(u.a))},t.\u0275prov=c.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function ct(t,e){1&t&&(c.Ub(0,"th",24),c.xc(1," ID "),c.Tb())}function ot(t,e){if(1&t&&(c.Ub(0,"td",25),c.xc(1),c.Tb()),2&t){const t=e.$implicit;c.Db(1),c.zc(" ",t.id," ")}}function rt(t,e){1&t&&(c.Ub(0,"th",26),c.xc(1," Description "),c.Tb())}function st(t,e){if(1&t&&(c.Ub(0,"td",25),c.xc(1),c.Tb()),2&t){const t=e.$implicit;c.Db(1),c.zc(" ",t.t_description," ")}}function lt(t,e){1&t&&(c.Ub(0,"th",24),c.xc(1," Date created "),c.Tb())}function bt(t,e){if(1&t&&(c.Ub(0,"td",25),c.xc(1),c.Tb()),2&t){const t=e.$implicit;c.Db(1),c.zc(" ",t.t_date_created," ")}}function ut(t,e){1&t&&(c.Ub(0,"th",26),c.xc(1," Status "),c.Tb())}function mt(t,e){if(1&t&&(c.Ub(0,"td",25),c.xc(1),c.Tb()),2&t){const t=e.$implicit;c.Db(1),c.zc(" ",t.t_status," ")}}function dt(t,e){1&t&&(c.Ub(0,"th",26),c.xc(1," Filler 1 "),c.Tb())}function pt(t,e){if(1&t&&(c.Ub(0,"td",25),c.xc(1),c.Tb()),2&t){const t=e.$implicit;c.Db(1),c.zc(" ",t.t_filler1," ")}}function ft(t,e){1&t&&(c.Ub(0,"th",26),c.xc(1," Filler 2 "),c.Tb())}function ht(t,e){if(1&t&&(c.Ub(0,"td",25),c.xc(1),c.Tb()),2&t){const t=e.$implicit;c.Db(1),c.zc(" ",t.t_filler2," ")}}function gt(t,e){1&t&&(c.Ub(0,"th",26),c.xc(1," Employee "),c.Tb())}function Tt(t,e){if(1&t&&(c.Ub(0,"td",25),c.xc(1),c.Tb()),2&t){const t=e.$implicit;c.Db(1),c.zc(" ",t.fk_employee," ")}}function wt(t,e){1&t&&(c.Ub(0,"th",26),c.xc(1," Shift "),c.Tb())}function Ut(t,e){if(1&t&&(c.Ub(0,"td",25),c.xc(1),c.Tb()),2&t){const t=e.$implicit;c.Db(1),c.zc(" ",t.fk_shift," ")}}function Dt(t,e){1&t&&c.Pb(0,"th",26)}function _t(t,e){if(1&t){const t=c.Vb();c.Ub(0,"td",27),c.Ub(1,"a",28),c.cc("click",function(){c.qc(t);const a=e.$implicit;return c.gc(2).updateUser(a)}),c.Ub(2,"mat-icon"),c.xc(3,"edit"),c.Tb(),c.Tb(),c.Ub(4,"a",29),c.cc("click",function(){c.qc(t);const a=e.$implicit;return c.gc(2).confirmCancelDialog(a.id)}),c.Ub(5,"mat-icon"),c.xc(6,"delete"),c.Tb(),c.Tb(),c.Tb()}}function Ct(t,e){1&t&&c.Pb(0,"tr",30)}function xt(t,e){1&t&&c.Pb(0,"tr",31)}const yt=function(){return[5,10,25,100]};function vt(t,e){if(1&t){const t=c.Vb();c.Ub(0,"div"),c.Ub(1,"mat-form-field",3),c.Ub(2,"mat-label"),c.xc(3,"Filter"),c.Tb(),c.Ub(4,"input",4,5),c.cc("keyup",function(e){return c.qc(t),c.gc().applyFilter(e)}),c.Tb(),c.Tb(),c.Ub(6,"div",6),c.Ub(7,"table",7),c.Sb(8,8),c.wc(9,ct,2,0,"th",9),c.wc(10,ot,2,1,"td",10),c.Rb(),c.Sb(11,11),c.wc(12,rt,2,0,"th",12),c.wc(13,st,2,1,"td",10),c.Rb(),c.Sb(14,13),c.wc(15,lt,2,0,"th",9),c.wc(16,bt,2,1,"td",10),c.Rb(),c.Sb(17,14),c.wc(18,ut,2,0,"th",12),c.wc(19,mt,2,1,"td",10),c.Rb(),c.Sb(20,15),c.wc(21,dt,2,0,"th",12),c.wc(22,pt,2,1,"td",10),c.Rb(),c.Sb(23,16),c.wc(24,ft,2,0,"th",12),c.wc(25,ht,2,1,"td",10),c.Rb(),c.Sb(26,17),c.wc(27,gt,2,0,"th",12),c.wc(28,Tt,2,1,"td",10),c.Rb(),c.Sb(29,18),c.wc(30,wt,2,0,"th",12),c.wc(31,Ut,2,1,"td",10),c.Rb(),c.Sb(32,19),c.wc(33,Dt,1,0,"th",12),c.wc(34,_t,7,0,"td",20),c.Rb(),c.wc(35,Ct,1,0,"tr",21),c.wc(36,xt,1,0,"tr",22),c.Tb(),c.Pb(37,"mat-paginator",23),c.Tb(),c.Tb()}if(2&t){const t=c.gc();c.Db(7),c.lc("dataSource",t.dataSource),c.Db(28),c.lc("matHeaderRowDef",t.displayedColumns),c.Db(1),c.lc("matRowDefColumns",t.displayedColumns),c.Db(1),c.lc("pageSizeOptions",c.mc(4,yt))}}function kt(t,e){1&t&&(c.Ub(0,"h2"),c.xc(1,"No hay registro de tareas"),c.Tb())}const St=function(){return["/dashboard/tasks"]};let Ot=(()=>{class t{constructor(t,e,a,n){this._taskService=t,this._snackBar=e,this.router=a,this.dialog=n,this.tasks=[],this.displayedColumns=["id","t_description","t_date_created","t_status","t_filler1","t_filler2","fk_employee","fk_shift","actions"]}ngOnInit(){this.loadTasks()}loadTasks(){this.dataSource=new b.k,this._taskService.getTasks().subscribe(t=>{t.data.length>0&&(console.log(t),this.tasks=t.data.slice(),this.dataSource=new b.k(this.tasks),console.log(this.tasks))})}confirmCancelDialog(t){this.dialog.confirmDialog({title:"Confirmar acci\xf3n",message:"\xbfDeseas eliminar esta tarea?",confirmCaption:"Eliminar",cancelCaption:"Cancelar"}).subscribe(t=>{t&&console.log("El usuario confirmo esta acci\xf3n.")})}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}applyFilter(t){this.dataSource.filter=t.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}}return t.\u0275fac=function(e){return new(e||t)(c.Ob(it),c.Ob(f.a),c.Ob(i.a),c.Ob(w))},t.\u0275cmp=c.Ib({type:t,selectors:[["app-tasks"]],viewQuery:function(t,e){if(1&t&&(c.Ac(s.a,1),c.Ac(l.a,1)),2&t){let t;c.nc(t=c.dc())&&(e.paginator=t.first),c.nc(t=c.dc())&&(e.sort=t.first)}},decls:8,vars:6,consts:[[1,"container"],["mat-raised-button","","color","primary","routerLinkActive","router-link-active",3,"routerLink"],[4,"ngIf"],["appearance","standard"],["matInput","","placeholder","Ex. Mia","autocomplete","off",3,"keyup"],["input",""],[1,"mat-elevation-z8"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","t_description"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","t_date_created"],["matColumnDef","t_status"],["matColumnDef","t_filler1"],["matColumnDef","t_filler2"],["matColumnDef","fk_employee"],["matColumnDef","fk_shift"],["matColumnDef","actions"],["mat-cell","","style","text-align: right;",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["aria-label","Select page of tasks",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],["mat-cell","",2,"text-align","right"],["matTooltip","Editar Tarea",1,"pointer",2,"color","#1f516f",3,"click"],["matTooltip","Eliminar Tarea",1,"pointer",2,"color","#e15639",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(c.Ub(0,"div",0),c.Ub(1,"mat-toolbar"),c.Ub(2,"button",1),c.xc(3,"CREAR"),c.Tb(),c.Ub(4,"button",1),c.xc(5,"EXPORTAR"),c.Tb(),c.Tb(),c.wc(6,vt,38,5,"div",2),c.wc(7,kt,2,0,"h2",2),c.Tb()),2&t&&(c.Db(2),c.lc("routerLink",c.mc(4,St)),c.Db(2),c.lc("routerLink",c.mc(5,St)),c.Db(2),c.lc("ngIf",e.tasks.length>0),c.Db(1),c.lc("ngIf",0==e.tasks.length))},directives:[U.a,o.a,i.c,i.b,n.k,D.b,D.e,_.a,b.j,l.a,b.c,b.e,b.b,b.g,b.i,s.a,b.d,l.b,b.a,C.a,g.a,b.f,b.h],styles:["table[_ngcontent-%COMP%]{width:100%;margin-top:10px}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{width:11.11%}.pointer[_ngcontent-%COMP%]{cursor:pointer}.mat-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}"]}),t})();var It=a("3Pt+");let Rt=(()=>{class t{constructor(t){this.http=t,this.users=[],this.httpOptions={headers:new u.c({"Content-Type":"application/json"})}}getUsers(){return this.http.get("https://fm-users-system-api.us-e1.cloudhub.io/api/users").pipe(Object(d.a)(this.handleError))}deleteUser(t){return this.http.delete("https://fm-users-system-api.us-e1.cloudhub.io/api/users/"+t).pipe(Object(d.a)(this.handleError))}createUser(t){const e={u_email:t.u_email,u_password:t.u_password,u_name:t.u_name,u_surname:t.u_surname,u_type:t.u_type,u_status:t.u_status};return console.log(JSON.stringify(e)),this.http.post("https://fm-users-system-api.us-e1.cloudhub.io/api/users",JSON.stringify(e),this.httpOptions).pipe(Object(d.a)(this.handleError))}handleError(t){return Object(m.a)(t)}}return t.\u0275fac=function(e){return new(e||t)(c.Yb(u.a))},t.\u0275prov=c.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var Pt=a("Wp6s"),Et=a("zkoq"),zt=a("d3UM"),At=a("FKr1");function Mt(t,e){if(1&t&&(c.Ub(0,"mat-option",13),c.xc(1),c.Tb()),2&t){const t=e.$implicit;c.lc("value",t),c.Db(1),c.zc(" ",t," ")}}const Nt=function(){return["/dashboard/users"]};let $t=(()=>{class t{constructor(t,e,a,n){this.fb=t,this._userService=e,this.router=a,this._snackBar=n,this.u_type=["ADMIN"],this.form=this.fb.group({email:["",It.m.required],pw:["",It.m.required],name:["",It.m.required],surname:["",It.m.required],utype:["",It.m.required]})}ngOnInit(){}createUser(){this._userService.createUser({id:0,u_email:this.form.value.email,u_password:this.form.value.pw,u_name:this.form.value.name,u_surname:this.form.value.surname,u_type:this.form.value.utype,u_status:!0}).subscribe(()=>{this.router.navigate(["dashboard"]),this._snackBar.open("Usuario agregado exitosamente.","",{duration:1500,horizontalPosition:"center",verticalPosition:"bottom"})})}}return t.\u0275fac=function(e){return new(e||t)(c.Ob(It.b),c.Ob(Rt),c.Ob(i.a),c.Ob(f.a))},t.\u0275cmp=c.Ib({type:t,selectors:[["app-add-user"]],decls:35,vars:17,consts:[[1,"container"],[3,"formGroup","ngSubmit"],["cols","3","rowHeight","70px"],[3,"colspan","rowspan"],[1,"width"],["matInput","","formControlName","email","autocomplete","off"],["matInput","","formControlName","pw","autocomplete","off"],["matInput","","formControlName","name","autocomplete","off"],["matInput","","formControlName","surname","autocomplete","off"],["formControlName","utype"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","",2,"margin-right","10px",3,"routerLink"],["type","submit","mat-raised-button","","color","primary",3,"disabled"],[3,"value"]],template:function(t,e){1&t&&(c.Ub(0,"div",0),c.Ub(1,"mat-card"),c.Ub(2,"form",1),c.cc("ngSubmit",function(){return e.createUser()}),c.Ub(3,"mat-grid-list",2),c.Ub(4,"mat-grid-tile",3),c.Ub(5,"mat-form-field",4),c.Ub(6,"mat-label"),c.xc(7,"Correo Electr\xf3nico"),c.Tb(),c.Pb(8,"input",5),c.Tb(),c.Tb(),c.Ub(9,"mat-grid-tile",3),c.Ub(10,"mat-form-field",4),c.Ub(11,"mat-label"),c.xc(12,"Contrase\xf1a"),c.Tb(),c.Pb(13,"input",6),c.Tb(),c.Tb(),c.Ub(14,"mat-grid-tile",3),c.Ub(15,"mat-form-field",4),c.Ub(16,"mat-label"),c.xc(17,"Nombre"),c.Tb(),c.Pb(18,"input",7),c.Tb(),c.Tb(),c.Ub(19,"mat-grid-tile",3),c.Ub(20,"mat-form-field",4),c.Ub(21,"mat-label"),c.xc(22,"Apellido"),c.Tb(),c.Pb(23,"input",8),c.Tb(),c.Tb(),c.Ub(24,"mat-grid-tile",3),c.Ub(25,"mat-form-field",4),c.Ub(26,"mat-label"),c.xc(27,"Tipo de usuario"),c.Tb(),c.Ub(28,"mat-select",9),c.wc(29,Mt,2,2,"mat-option",10),c.Tb(),c.Tb(),c.Tb(),c.Ub(30,"mat-grid-tile",3),c.Ub(31,"button",11),c.xc(32,"VOLVER"),c.Tb(),c.Ub(33,"button",12),c.xc(34,"ACEPTAR"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb()),2&t&&(c.Db(2),c.lc("formGroup",e.form),c.Db(2),c.lc("colspan",1)("rowspan",1),c.Db(5),c.lc("colspan",2)("rowspan",1),c.Db(5),c.lc("colspan",1)("rowspan",1),c.Db(5),c.lc("colspan",2)("rowspan",1),c.Db(5),c.lc("colspan",1)("rowspan",1),c.Db(5),c.lc("ngForOf",e.u_type),c.Db(1),c.lc("colspan",3)("rowspan",1),c.Db(1),c.lc("routerLink",c.mc(16,Nt)),c.Db(2),c.lc("disabled",e.form.invalid))},directives:[Pt.a,It.n,It.j,It.f,Et.a,Et.c,D.b,D.e,_.a,It.a,It.i,It.d,zt.a,n.j,o.a,i.b,At.i],styles:[".width[_ngcontent-%COMP%]{width:80%}"]}),t})(),Lt=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Ib({type:t,selectors:[["app-update-user"]],decls:2,vars:0,template:function(t,e){1&t&&(c.Ub(0,"p"),c.xc(1,"update-user works!"),c.Tb())},styles:[""]}),t})();function Ft(t,e){1&t&&(c.Ub(0,"th",22),c.xc(1," ID "),c.Tb())}function jt(t,e){if(1&t&&(c.Ub(0,"td",23),c.xc(1),c.Tb()),2&t){const t=e.$implicit;c.Db(1),c.zc(" ",t.id," ")}}function qt(t,e){1&t&&(c.Ub(0,"th",22),c.xc(1," Email "),c.Tb())}function Ht(t,e){if(1&t&&(c.Ub(0,"td",23),c.xc(1),c.Tb()),2&t){const t=e.$implicit;c.Db(1),c.zc(" ",t.u_email," ")}}function Vt(t,e){1&t&&(c.Ub(0,"th",24),c.xc(1," Name "),c.Tb())}function Bt(t,e){if(1&t&&(c.Ub(0,"td",23),c.xc(1),c.Tb()),2&t){const t=e.$implicit;c.Db(1),c.zc(" ",t.u_name," ")}}function Kt(t,e){1&t&&(c.Ub(0,"th",24),c.xc(1," Surname "),c.Tb())}function Gt(t,e){if(1&t&&(c.Ub(0,"td",23),c.xc(1),c.Tb()),2&t){const t=e.$implicit;c.Db(1),c.zc(" ",t.u_surname," ")}}function Jt(t,e){1&t&&(c.Ub(0,"th",22),c.xc(1," Type "),c.Tb())}function Qt(t,e){if(1&t&&(c.Ub(0,"td",23),c.xc(1),c.Tb()),2&t){const t=e.$implicit;c.Db(1),c.zc(" ",t.u_type," ")}}function Xt(t,e){1&t&&(c.Ub(0,"th",22),c.xc(1," Status "),c.Tb())}function Yt(t,e){if(1&t&&(c.Ub(0,"td",23),c.xc(1),c.Tb()),2&t){const t=e.$implicit;c.Db(1),c.zc(" ",t.u_status," ")}}function Wt(t,e){1&t&&c.Pb(0,"th",24)}function Zt(t,e){if(1&t){const t=c.Vb();c.Ub(0,"td",25),c.Ub(1,"a",26),c.cc("click",function(){c.qc(t);const a=e.$implicit;return c.gc(2).updateUser(a)}),c.Ub(2,"mat-icon"),c.xc(3,"edit"),c.Tb(),c.Tb(),c.Ub(4,"a",27),c.cc("click",function(){c.qc(t);const a=e.$implicit;return c.gc(2).confirmCancelDialog(a.id)}),c.Ub(5,"mat-icon"),c.xc(6,"delete"),c.Tb(),c.Tb(),c.Tb()}}function te(t,e){1&t&&c.Pb(0,"tr",28)}function ee(t,e){1&t&&c.Pb(0,"tr",29)}const ae=function(){return[5,10,25,100]};function ne(t,e){if(1&t){const t=c.Vb();c.Ub(0,"div"),c.Ub(1,"mat-form-field",3),c.Ub(2,"mat-label"),c.xc(3,"Filter"),c.Tb(),c.Ub(4,"input",4,5),c.cc("keyup",function(e){return c.qc(t),c.gc().applyFilter(e)}),c.Tb(),c.Tb(),c.Ub(6,"div",6),c.Ub(7,"table",7),c.Sb(8,8),c.wc(9,Ft,2,0,"th",9),c.wc(10,jt,2,1,"td",10),c.Rb(),c.Sb(11,11),c.wc(12,qt,2,0,"th",9),c.wc(13,Ht,2,1,"td",10),c.Rb(),c.Sb(14,12),c.wc(15,Vt,2,0,"th",13),c.wc(16,Bt,2,1,"td",10),c.Rb(),c.Sb(17,14),c.wc(18,Kt,2,0,"th",13),c.wc(19,Gt,2,1,"td",10),c.Rb(),c.Sb(20,15),c.wc(21,Jt,2,0,"th",9),c.wc(22,Qt,2,1,"td",10),c.Rb(),c.Sb(23,16),c.wc(24,Xt,2,0,"th",9),c.wc(25,Yt,2,1,"td",10),c.Rb(),c.Sb(26,17),c.wc(27,Wt,1,0,"th",13),c.wc(28,Zt,7,0,"td",18),c.Rb(),c.wc(29,te,1,0,"tr",19),c.wc(30,ee,1,0,"tr",20),c.Tb(),c.Pb(31,"mat-paginator",21),c.Tb(),c.Tb()}if(2&t){const t=c.gc();c.Db(7),c.lc("dataSource",t.dataSource),c.Db(22),c.lc("matHeaderRowDef",t.displayedColumns),c.Db(1),c.lc("matRowDefColumns",t.displayedColumns),c.Db(1),c.lc("pageSizeOptions",c.mc(4,ae))}}function ie(t,e){1&t&&(c.Ub(0,"h2"),c.xc(1,"No hay registro de usuarios"),c.Tb())}const ce=function(){return["/dashboard/users/add"]},oe=function(){return["/dashboard/users"]};let re=(()=>{class t{constructor(t,e,a,n){this._userService=t,this._snackBar=e,this.router=a,this.dialog=n,this.users=[],this.displayedColumns=["id","u_email","u_name","u_surname","u_type","u_status","actions"]}ngOnInit(){this.loadUsers()}loadUsers(){this.dataSource=new b.k,this._userService.getUsers().subscribe(t=>{t.data.length>0&&(console.log(t),this.users=t.data.slice(),this.dataSource=new b.k(this.users),console.log(this.users))})}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}applyFilter(t){this.dataSource.filter=t.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}confirmCancelDialog(t){this.dialog.confirmDialog({title:"Confirmar acci\xf3n",message:"\xbfDeseas eliminar este usuario?",confirmCaption:"Eliminar",cancelCaption:"Cancelar"}).subscribe(e=>{e&&(console.log("El usuario confirmo esta acci\xf3n."),this.deleteUser(t))})}deleteUser(t){console.log(t),this._userService.deleteUser(t.toString()).subscribe(()=>{this.loadUsers(),this._snackBar.open("Usuario eliminado exitosamente.","",{duration:1500,horizontalPosition:"center",verticalPosition:"bottom"})})}}return t.\u0275fac=function(e){return new(e||t)(c.Ob(Rt),c.Ob(f.a),c.Ob(i.a),c.Ob(w))},t.\u0275cmp=c.Ib({type:t,selectors:[["app-users"]],viewQuery:function(t,e){if(1&t&&(c.Ac(s.a,1),c.Ac(l.a,1)),2&t){let t;c.nc(t=c.dc())&&(e.paginator=t.first),c.nc(t=c.dc())&&(e.sort=t.first)}},decls:8,vars:6,consts:[[1,"container"],["mat-raised-button","","color","primary","routerLinkActive","router-link-active",3,"routerLink"],[4,"ngIf"],["appearance","standard"],["matInput","","placeholder","Ex. Mia","autocomplete","off",3,"keyup"],["input",""],[1,"mat-elevation-z8"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","u_email"],["matColumnDef","u_name"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","u_surname"],["matColumnDef","u_type"],["matColumnDef","u_status"],["matColumnDef","actions"],["mat-cell","","style","text-align: right;",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["aria-label","Select page of users",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],["mat-cell","",2,"text-align","right"],["matTooltip","Editar usuario",1,"pointer",2,"color","#1f516f",3,"click"],["matTooltip","Eliminar usuario",1,"pointer",2,"color","#e15639",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(c.Ub(0,"div",0),c.Ub(1,"mat-toolbar"),c.Ub(2,"button",1),c.xc(3,"CREAR"),c.Tb(),c.Ub(4,"button",1),c.xc(5,"EXPORTAR"),c.Tb(),c.Tb(),c.wc(6,ne,32,5,"div",2),c.wc(7,ie,2,0,"h2",2),c.Tb()),2&t&&(c.Db(2),c.lc("routerLink",c.mc(4,ce)),c.Db(2),c.lc("routerLink",c.mc(5,oe)),c.Db(2),c.lc("ngIf",e.users.length>0),c.Db(1),c.lc("ngIf",0==e.users.length))},directives:[U.a,o.a,i.c,i.b,n.k,D.b,D.e,_.a,b.j,l.a,b.c,b.e,b.b,b.g,b.i,s.a,b.d,l.b,b.a,C.a,g.a,b.f,b.h],styles:["table[_ngcontent-%COMP%]{width:100%;margin-top:10px}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{width:14.29%}.pointer[_ngcontent-%COMP%]{cursor:pointer}.mat-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}"]}),t})();const se=[{path:"",component:at,children:[{path:"",component:re},{path:"users",component:re},{path:"users/add",component:$t},{path:"users/update",component:Lt},{path:"tasks",component:Ot},{path:"assets",component:X},{path:"access-control",component:r},{path:"clients",component:W},{path:"maintenance",component:nt},{path:"bi",component:Y}]}];let le=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Mb({type:t}),t.\u0275inj=c.Lb({imports:[[i.d.forChild(se)],i.d]}),t})();var be=a("PCNd");let ue=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Mb({type:t}),t.\u0275inj=c.Lb({imports:[[n.c,le,be.a]]}),t})()}}]);