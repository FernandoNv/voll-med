"use strict";(self.webpackChunkvoll_med=self.webpackChunkvoll_med||[]).push([[177],{1177:(W,x,c)=>{c.r(x),c.d(x,{DoctorsModule:()=>v});var r=c(6895),p=c(2510),y=c(7579),S=c(2722),T=c(4004),f=c(5698),g=c(3900),C=c(9300),t=c(4650),h=c(5204),D=c(8945),M=c(1572),_=c(4859),I=c(9267);function b(i,o){1&i&&(t.TgZ(0,"div",3),t._UZ(1,"mat-spinner",4),t.qZA())}function P(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"div")(1,"app-list-expansion-panel",9),t.NdJ("edit-button-clicked",function(s){t.CHM(e);const a=t.oxw(3);return t.KtG(a.onEditButtonClicked(s))})("deactivate-button-clicked",function(s){t.CHM(e);const a=t.oxw(3);return t.KtG(a.onDeactivateButtonClicked(s))}),t.qZA()()}if(2&i){const e=t.oxw().ngIf;t.xp6(1),t.Q6J("items",e)}}const w=function(){return["/doctors/new"]};function A(i,o){if(1&i&&(t.TgZ(0,"div"),t.YNc(1,P,2,1,"div",6),t.TgZ(2,"div",7)(3,"button",8),t._uU(4," Cadastrar novo perfil "),t.qZA()()()),2&i){const e=o.ngIf;t.oxw();const n=t.MAs(4);t.xp6(1),t.Q6J("ngIf",e.length>0)("ngIfElse",n),t.xp6(2),t.Q6J("routerLink",t.DdM(3,w))}}function Z(i,o){1&i&&(t.TgZ(0,"div",10)(1,"p"),t._uU(2,"Sem m\xe9dicos cadastrados..."),t.qZA()())}function E(i,o){if(1&i&&(t.TgZ(0,"span"),t.YNc(1,A,5,4,"div",2),t.ALo(2,"async"),t.YNc(3,Z,3,0,"ng-template",null,5,t.W1O),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,e.items$))}}class d{constructor(o,e,n){this.doctorsService=o,this.router=e,this.deactivateAccountPopupService=n,this.destroySubject$=new y.x,this.doctorsService.loading().pipe((0,S.R)(this.destroySubject$)).subscribe(s=>{this.isLoading=s})}ngOnDestroy(){this.destroySubject$.next(!0),this.destroySubject$.complete()}ngOnInit(){this.setItems()}setItems(){this.doctors$=this.doctorsService.getDoctors(),this.items$=this.doctors$.pipe((0,T.U)(o=>this.mapperToItems(o)))}mapperToItems(o){return o.map(n=>({id:n.id,title:n.nome,description:`${n.especialidade} | ${n.crm}`,content:[n.email]}))}onEditButtonClicked(o){this.router.navigate(["/doctors/edit",o])}onDeactivateButtonClicked(o){this.doctorsService.getDoctorById(o).pipe((0,f.q)(1),(0,g.w)(n=>{const s={informationName:n.nome,informationText:this.doctorsService.formatTextModal(n)};return this.deactivateAccountPopupService.open(s)})).pipe((0,C.h)(n=>!0===n),(0,g.w)(n=>this.doctorsService.deactivateAccountById(o))).subscribe({next:n=>{this.setItems()},error:n=>{console.log("Erro with the deactivation"),console.log(n),this.deactivateAccountPopupService.open()}})}}d.\u0275fac=function(o){return new(o||d)(t.Y36(h.e),t.Y36(p.F0),t.Y36(D.I))},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-doctors"]],decls:3,vars:2,consts:[[1,"app-doctors"],["class","spinner-area",4,"ngIf"],[4,"ngIf"],[1,"spinner-area"],["diameter","40"],["noItems",""],[4,"ngIf","ngIfElse"],[1,"actions-area"],["mat-flat-button","",3,"routerLink"],[3,"items","edit-button-clicked","deactivate-button-clicked"],[1,"no-content-area"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0),t.YNc(1,b,2,0,"div",1),t.YNc(2,E,5,3,"span",2),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngIf",e.isLoading),t.xp6(1),t.Q6J("ngIf",!e.isLoading))},dependencies:[r.O5,p.rH,M.Ou,_.lW,I.e,r.Ov],styles:[".app-doctors[_ngcontent-%COMP%]{width:100%}@media (min-width: 640px){.app-doctors[_ngcontent-%COMP%]{max-width:640px}}@media (min-width: 768px){.app-doctors[_ngcontent-%COMP%]{max-width:768px}}@media (min-width: 1024px){.app-doctors[_ngcontent-%COMP%]{max-width:1024px}}@media (min-width: 1280px){.app-doctors[_ngcontent-%COMP%]{max-width:1280px}}@media (min-width: 1536px){.app-doctors[_ngcontent-%COMP%]{max-width:1536px}}.app-doctors[_ngcontent-%COMP%]{height:100%}.app-doctors[_ngcontent-%COMP%]   .spinner-area[_ngcontent-%COMP%]{display:flex;height:100%;flex-direction:column;align-items:center;justify-content:center}.app-doctors[_ngcontent-%COMP%]   .actions-area[_ngcontent-%COMP%]{display:flex;height:auto;flex-direction:row;justify-content:center;padding-top:3rem;padding-bottom:1.5rem}.app-doctors[_ngcontent-%COMP%]   .actions-area[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:.75rem;font-size:1rem;line-height:1.5rem;font-weight:700;padding:24px!important;background-color:#0b3b60!important;color:#fff}.app-doctors[_ngcontent-%COMP%]   .no-content-area[_ngcontent-%COMP%]{padding:1rem;--tw-text-opacity: 1;color:rgb(71 85 105 / var(--tw-text-opacity))}"]});var O=c(3609);function N(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"app-registration-form",2),t.NdJ("form-values-emitter",function(s){t.CHM(e);const a=t.oxw();return t.KtG(a.onSubmit(s))})("deactivate-account-emitter",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.onDeactivateButtonClicked())}),t.qZA()}if(2&i){const e=o.ngIf,n=t.oxw();t.Q6J("form-options",n.buildFormOptions(e))("update",!0)}}class m{constructor(o,e,n,s,a){this.doctorsService=o,this.router=e,this.ativatedRoute=n,this.location=s,this.deactivateAccountPopupService=a,this.doctor$=this.ativatedRoute.paramMap.pipe((0,g.w)(X=>(this.idDoctor=Number(X.get("id")),this.doctorsService.getDoctorById(this.idDoctor))))}buildFormOptions(o){return{type:"doctor",inputValues:{nome:o.nome,crm:o.crm,email:o.email,especialidade:o.especialidade,telefone:o.telefone??"",logradouro:o.endereco?.logradouro??"",numero:o.endereco?.numero??"",uf:o.endereco?.uf??"",complemento:o.endereco?.complemento??"",cidade:o.endereco?.cidade??"",cep:o.endereco?.cep??"",bairro:o.endereco?.bairro??""}}}onSubmit(o){console.log("submit ",o),this.doctorsService.updateById({id:this.idDoctor,nome:o.nome,telefone:o.telefone,endereco:{logradouro:o.logradouro,bairro:o.bairro,cidade:o.cidade,cep:o.cep,numero:o.numero,complemento:o.complemento,uf:o.uf}}).pipe((0,f.q)(1)).subscribe({next:()=>{this.message="Dados atualizados com sucesso",this.success=!0,setTimeout(()=>{this.location.back()},1e3)},error:()=>{this.message="Erro ao atualizar os dados",this.success=!1}})}onDeactivateButtonClicked(){this.doctorsService.getDoctorById(this.idDoctor).pipe((0,f.q)(1),(0,g.w)(e=>{const n={informationName:e.nome,informationText:this.doctorsService.formatTextModal(e)};return this.deactivateAccountPopupService.open(n)})).pipe((0,C.h)(e=>!0===e),(0,g.w)(e=>this.doctorsService.deactivateAccountById(this.idDoctor))).subscribe({next:e=>{this.router.navigate(["/doctors"])},error:e=>{console.log("Erro with the deactivation"),console.log(e),this.deactivateAccountPopupService.open()}})}}m.\u0275fac=function(o){return new(o||m)(t.Y36(h.e),t.Y36(p.F0),t.Y36(p.gz),t.Y36(r.Ye),t.Y36(D.I))},m.\u0275cmp=t.Xpm({type:m,selectors:[["app-edit-doctor"]],decls:3,vars:3,consts:[[1,"app-doctor-edit"],[3,"form-options","update","form-values-emitter","deactivate-account-emitter",4,"ngIf"],[3,"form-options","update","form-values-emitter","deactivate-account-emitter"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0),t.YNc(1,N,1,2,"app-registration-form",1),t.ALo(2,"async"),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,e.doctor$)))},dependencies:[r.O5,O.Q,r.Ov]});class l{constructor(o,e){this.doctorsService=o,this.location=e,this.message="",this.success=!1}ngOnInit(){this.formOptions={type:"doctor"}}onSubmit(o){const e={nome:o.nome,telefone:o.telefone,crm:o.crm,email:o.email,especialidade:o.especialidade,endereco:{logradouro:o.logradouro,bairro:o.bairro,cidade:o.cidade,cep:o.cep,numero:o.numero,complemento:o.complemento,uf:o.uf}};console.log("submit ",e),this.doctorsService.newDoctor(e).pipe((0,f.q)(1)).subscribe({next:()=>{this.message="Dados salvos com sucesso",this.success=!0,setTimeout(()=>{this.location.back()},1e3)},error:()=>{this.message="Erro ao cadastrar os dados",this.success=!1}})}}l.\u0275fac=function(o){return new(o||l)(t.Y36(h.e),t.Y36(r.Ye))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-new-doctor"]],decls:2,vars:1,consts:[[1,"app-new-doctor"],[3,"form-options","form-values-emitter"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"app-registration-form",1),t.NdJ("form-values-emitter",function(s){return e.onSubmit(s)}),t.qZA()()),2&o&&(t.xp6(1),t.Q6J("form-options",e.formOptions))},dependencies:[O.Q],styles:["[_nghost-%COMP%]{display:block}"]});const Y=[{path:"",pathMatch:"full",component:d,title:"M\xe9dicos"},{path:"edit/:id",component:m,title:"Editar"},{path:"new",component:l,title:"Novo Perfil"}];class u{}u.\u0275fac=function(o){return new(o||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[p.Bz.forChild(Y),p.Bz]});var B=c(9549),$=c(4144),J=c(4385),F=c(4006),Q=c(4466),j=c(3737),L=c(2095),z=c(1458),U=c(5106),H=c(4980);const R=[M.Cq,B.lN,_.ot,$.c,J.LD],G=[r.ez,u,F.UX],K=[U.k,Q.m,z.x,H.v];class v{}v.\u0275fac=function(o){return new(o||v)},v.\u0275mod=t.oAB({type:v}),v.\u0275inj=t.cJS({providers:[j.E,L.q],imports:[G,R,K]})}}]);