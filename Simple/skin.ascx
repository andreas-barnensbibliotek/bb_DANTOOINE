<%@ Control Language="vb" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
<%@ Register TagPrefix="dnn" TagName="LOGO" Src="~/Admin/Skins/Logo.ascx" %>
<%@ Register TagPrefix="dnn" TagName="SEARCH" Src="~/Admin/Skins/AJSearch.ascx" %>
<%@ Register TagPrefix="dnn" TagName="BREADCRUMB" Src="~/Admin/Skins/BreadCrumb.ascx" %>
<%@ Register TagPrefix="dnn" TagName="USER" Src="~/Admin/Skins/User.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LOGIN" Src="~/Admin/Skins/Login.ascx" %>
<%@ Register TagPrefix="dnn" TagName="COPYRIGHT" Src="~/Admin/Skins/Copyright.ascx" %>
<%@ Register TagPrefix="dnn" TagName="STYLES" Src="~/Admin/Skins/Styles.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LINKTOMOBILE" Src="~/Admin/Skins/LinkToMobileSite.ascx" %>
<%@ Register TagPrefix="dnn" TagName="MENU" Src="~/DesktopModules/DDRMenu/Menu.ascx" %>
<%@ Register TagPrefix="dnn" TagName="META" Src="~/Admin/Skins/Meta.ascx" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>
<%@ Register TagPrefix="fortyfingers" TagName="STYLEHELPER" Src="~/DesktopModules/40Fingers/SkinObjects/StyleHelper/StyleHelper.ascx" %>
<%@ Register TagPrefix="dnn" TagName="JQUERY" Src="~/Admin/Skins/jQuery.ascx" %>
<%@ Register TagPrefix="dnn" TagName="JavaScriptLibraryInclude" Src="~/admin/Skins/JavaScriptLibraryInclude.ascx" %>

<dnn:DnnCssInclude runat="server" FilePath="../../../../DesktopModules/barnensbiblService/bokemonApi/public/css/app.css" PathNameAlias="SkinPath" Priority="1" />

<!-- ny kod -->
<div id="mainboklistcontainer" class="container batuu-container">

    <!-- Header -->
    <div class="row topheaderbg head_bokhylla"> 
        <!-- Logo -->
        <div class="batuu-logo-container col-2">           
            <img id="logoimg" class="batuu-logo" src="images/bblogo2.png" runat="server" />
        </div>

        <!-- Server -->
        <div class="col-sm-3 col-md-5 col-lg-7">
            <div class="d-none">
                <span id="HeaderPane" runat="server"></span>
            </div>
        </div>

        <!-- inlogg med mera -->
        <div class="col-sm-7 col-md-5 col-lg-3 mt-2 aj_searchbox">          
               
            <dnn:USER ID="USER1" CssClass="font-weight-bold mr-3" runat="server" Text="<i class='fas fa-user'></i> Bli medlem" LegacyMode="true" />
            <dnn:LOGIN ID="LOGIN2" CssClass="font-weight-bold mr-3" runat="server" Text="<i class='fas fa-lock'></i> Logga in" LegacyMode="true" />
            <a id="lyssarealspeaker" href="#"  runat="server" ><i class="fas fa-volume-up"></i></a>           
           
            <span id="searchboxen">
                <dnn:SEARCH runat="server" ID="dnnSEARCH" CssClass="btn btn-batuu-green" UseDropDownList="true" Submit="<i class=&quot;fas fa-search&quot;></i&gt;" />
            </span>
        </div>
        </div>
         <div class="row">
        <!-- meny -->
        <div  class="col px-0">
            
            <nav class="navbar p-0 navbar-expand-lg navbar-dark bg-dark justify-content-end">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                
                    <dnn:MENU ID="MENU1" MenuStyle="Simple" runat="Server" />
                
               </div>
            </nav>

        </div>
    </div>
    <!-- #############################      HEADER ENDS        ################################################## -->

    <!-- content -->
     <!-- Navigerings breadcrumb START -->
         <div class="row mx-n2">
             <div class="col-12">
                 <div id="ReadspeakerBox">
                    <div id="readspeaker_button1" class="rs_skip rsbtn rs_preserve">
						<a rel="nofollow" class="rsbtn_play" accesskey="L" title="Lyssna p&aring; sidans text med ReadSpeaker" href="//app-eu.readspeaker.com/cgi-bin/rsent?customerid=4430&amp;lang=sv_se&amp;readclass=aj_readthis&amp;url=">
							<span class="rsbtn_left rsimg rspart"><span class="rsbtn_text"><span>Lyssna</span></span></span>
							<span class="rsbtn_right rsimg rsplay rspart"></span>
						</a>
					</div>
                </div>
             </div>
         </div>
         <!-- Navigerings breadcrumb END -->
    
        <div id="searchPane" runat="server" class="aj_readthis"></div>
    
    
        <div id="fullwidhtPane" runat="server"></div>
    
    
        <div id="contentPane" runat="server"></div>
    
    <!-- Footer -->

    <div class="row batuu-footer mx-n2">
        <div class="col-3">
            <!-- CONTAINER ################################################################################################ -->
            <div id="foterpane_1_4Pane"><span id="foterPane_1_4" runat="server"></span></div>
        </div>
        <div class="col-3">
            <!-- CONTAINER ################################################################################################ -->
            <div id="foterpane_2_4Pane"><span id="foterPane_2_4" runat="server"></span></div>
        </div>
        <div class="col-3">
            <!-- CONTAINER ################################################################################################ -->
            <div id="foterpane_3_4Pane"><span id="foterPane_3_4" runat="server"></span></div>
        </div>
        <div class="col-3">
            <!-- CONTAINER ################################################################################################ -->
            <div id="foterpane_4_4Pane"><span id="foterPane_4_4" runat="server"></span></div>
        </div>
        <div id="footikonimg">
            <img id="Img1" src="/Portals/_default/Skins/bb_BATUU/images/footerlogo.png"  />
        </div>
    </div>




</div>  <!-- MAIN CONTAINER END -->


<div class="container">
    <div id="licbox" class="wrapper row4">
        <div id="copyright" class="clear">
            <p class="fl_left">&copy; <a href="https://www.barnensbiblotek.se">barnensbibliotek.se</a></p>
            <p class="fl_right"></p>
        </div>
    </div>
    
</div>



<span id="barnensbiblCurrentUserid"><%= UserController.Instance.GetCurrentUserInfo().UserID%></span>
<dnn:DnnJsInclude runat="server" FilePath="../../../../DesktopModules/barnensbiblService/bokemonApi/js/bokemon_v3.js" PathNameAlias="SkinPath" />
<dnn:DnnJsInclude runat="server" FilePath="layout/scripts/jquery.cookiesdirective.js" PathNameAlias="SkinPath" />
<dnn:DnnJsInclude runat="server" FilePath="layout/scripts/jquery.slicknav.min.js" PathNameAlias="SkinPath" />
<dnn:DnnJsInclude runat="server" FilePath="public/js/bootstrap.bundle.min.js" PathNameAlias="SkinPath" />
<dnn:DnnJsInclude runat="server" FilePath="public/js/aj_batuu.1.0.0.js" PathNameAlias="SkinPath" />



<script src="//f1-eu.readspeaker.com/script/4430/ReadSpeaker.js?pids=embhl" type="text/javascript"></script>