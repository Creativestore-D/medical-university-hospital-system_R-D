AUI.add("aui-editor-menu-plugin",function(M){var D=M.Lang,K=D.isString,G=M.ClassNameManager.getClassName,F="editormenu",I="editormenuplugin",R="menu",E="content",B=G(F,E,"list"),N=G(F,E,"text"),C=G(F,E,"item"),H="<{1}{2}>{0}</{1}>",P='<ul class="'+B+'"></ul>',J='<li class="'+N+'"><span>{0}</span></li>',Q='<li class="'+C+'">'+H+"</li>";function O(T){var A="";if(T.attributes){for(var U in T.attributes){A+=" "+U+'="'+T.attributes[U]+'"';}}if(T.styles){A=' style="';for(var U in T.styles){A+=U+": "+T.styles[U]+";";}A+='"';}return A;}var L=M.Component.create({NAME:F,EXTENDS:M.OverlayContext,ATTRS:{host:{value:false},items:{value:null}},prototype:{renderUI:function(){var A=this;L.superclass.renderUI.apply(A,arguments);var W=A.get("host");var T=A.get("contentBox"),U=A.get("items");var V=M.Node.create(P);M.each(U,function(Z){var Y="";if(K(Z)){Y+=D.sub(J,[Z]);}else{var X=O(Z);Y+=D.sub(Q,[Z.label,Z.tag,X]);}var a=M.Node.create(Y);a.setData(F,Z);V.append(a);});T.append(V);A._menuList=V;},bindUI:function(){var A=this;L.superclass.bindUI.apply(A,arguments);var U=A.get("host");var T=A._menuList;T.delegate("click",function(a){var W=this;var Z=a.currentTarget,Y=Z.getData(F);var V=O(Y),X=D.sub(H,["{0}",Y.tag,V]);U.execCommand("wraphtml",X);U.focus();W.hide();},"."+C,A);}}});var S=M.Component.create({NAME:I,NS:R,EXTENDS:M.Plugin.Base,ATTRS:{host:{value:false}},prototype:{add:function(T){var A=this;var U=A.get("host");return new L(M.mix({host:U},T)).render();}}});M.namespace("Plugin").EditorMenuPlugin=S;},"@VERSION@",{requires:["aui-base","editor-base","aui-overlay-context","aui-editor-tools-plugin"]});