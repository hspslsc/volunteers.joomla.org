/* JCE Editor - 2.5.24 | 18 August 2016 | http://www.joomlacontenteditor.net | Copyright (C) 2006 - 2016 Ryan Demmer. All rights reserved | GNU/GPL Version 2 or later - http://www.gnu.org/licenses/gpl-2.0.html */
(function(){tinymce.create('tinymce.plugins.Browser',{init:function(ed,url){this.ed=ed;},browse:function(name,url,type,win){var ed=this.ed;ed.windowManager.open({file:ed.getParam('site_url')+'index.php?option=com_jce&view=editor&layout=plugin&plugin=browser&type='+type,width:780+ed.getLang('browser.delta_width',0),height:480+ed.getLang('browser.delta_height',0),resizable:"yes",inline:"yes",close_previous:"no",popup_css:false},{window:win,input:name,url:url,type:type});return false;},getInfo:function(){return{longname:'Browser',author:'Ryan Demmer',authorurl:'http://www.joomlacontenteditor.net',infourl:'http://www.joomlacontenteditor.net/index.php?option=com_content&amp;view=article&amp;task=findkey&amp;tmpl=component&amp;lang=en&amp;keyref=browser.about',version:'2.5.24'};}});tinymce.PluginManager.add('browser',tinymce.plugins.Browser);})();