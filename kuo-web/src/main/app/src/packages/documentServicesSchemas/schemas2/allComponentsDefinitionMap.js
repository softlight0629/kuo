export default {
	"core.components.Image": {
		"skins": [],
		"dataTypes": ["Image", ""],
		"styles": {},
		"nickname": "image"
	},
	"core.components.MenuButton": {
		"skins": [],
		"dataTypes": ["Link", "Page", "", "AppPage", "Text", "BasicMenuItem"],
		"styles": {},
		"nickname": "componentLabelMenuButton"
	},
	"mobile.core.components.Page": {
		"skins": [],
		"dataTypes": ["Page"],
		"propertyTypes": ["", "PageProperties"],
		"styles": {
			"p1": "wysiwyg.viewer.skins.page.TransparentPageSkin",
			"p2": "wysiwyg.viewer.skins.page.SloopyPageSkin",
			"p3": "wysiwyg.viewer.skins.page.BasicPageSkin"
		},
		"nickname": "page"
	},
	"mobile.core.components.MasterPage": {
		"skins": [],
		"dataTypes": ["Page"],
		"styles": {},
		"nickname": "masterage"
	},
	"wixapps.integration.components.AppPage": {
		"skins": ["wysiwyg.viewer.skins.page.TransparentPageSkin", "wysiwyg.viewer.skins.page.SloopyPageSkin", "wysiwyg.viewer.skins.page.BasicPageSkin", "wysiwyg.viewer.skins.page.ThreeDeePageSkin", "wysiwyg.viewer.skins.page.InnerShadowPageSkin", "wysiwyg.viewer.skins.page.LiftedBottomPageSkin", "wysiwyg.viewer.skins.page.LiftedTopPageSkin", "wysiwyg.viewer.skins.page.BorderPageSkin", "wysiwyg.viewer.skins.page.LiftedShadowPageSkin", "wysiwyg.viewer.skins.page.ShinyIPageSkin"],
		"dataTypes": ["AppPage"],
		"styles": {
			"p1": "wysiwyg.viewer.skins.page.TransparentPageSkin",
			"p2": "wysiwyg.viewer.skins.page.SloopyPageSkin",
			"p3": "wysiwyg.viewer.skins.page.BasicPageSkin"
		},
		"nickname": "page"
	},
	"wixapps.integration.components.AppPart": {
		"skins": ["wysiwyg.viewer.skins.AppPartSkin"],
		"dataTypes": ["AppPart"],
		"propertyType": "AppPartProperties",
		"styles": {
			"blog_4de5abc5-6da2-4f97-acc3-94bb74285072_1": "wysiwyg.viewer.skins.AppPartSkin",
			"blog_f72fe377-8abc-40f2-8656-89cfe00f3a22_1": "wysiwyg.viewer.skins.AppPartSkin",
			"blog_c7f57b50-8940-4ff1-83c6-6756d6f0a1f4_1": "wysiwyg.viewer.skins.AppPartSkin",
			"blog_56ab6fa4-95ac-4391-9337-6702b8a77011_1": "wysiwyg.viewer.skins.AppPartSkin",
			"blog_e000b4bf-9ff1-4e66-a0d3-d4b365ba3af5_1": "wysiwyg.viewer.skins.AppPartSkin",
			"blog_31c0cede-09db-4ec7-b760-d375d62101e6_1": "wysiwyg.viewer.skins.AppPartSkin",
			"blog_33a9f5e0-b083-4ccc-b55d-3ca5d241a6eb_1": "wysiwyg.viewer.skins.AppPartSkin",
			"blog_1b8c501f-ccc2-47e7-952a-47e264752614_1": "wysiwyg.viewer.skins.AppPartSkin",
			"blog_4656a63c-b316-4315-ab16-e2003f5935ca_1": "wysiwyg.viewer.skins.AppPartSkin"
		},
		"nickname": "blog"
	},
	"wixapps.integration.components.AppPart2": {
		"skins": ["wysiwyg.viewer.skins.AppPartSkin"],
		"dataTypes": ["AppBuilderComponent"],
		"styles": {
			"app1": "wysiwyg.viewer.skins.AppPartSkin"
		},
		"nickname": "list"
	},
	"wysiwyg.viewer.components.inputs.TextInput": {
		"skins": ["wysiwyg.viewer.skins.appinputs.AppsTextInputSkin"],
		"dataTypes": ["TextInput"],
		"propertyType": "TextInputProperties",
		"styles": {
			"wa_ti1": "wysiwyg.viewer.skins.appinputs.AppsTextInputSkin"
		},
		"nickname": "input"
	},
	"wysiwyg.viewer.components.menus.DropDownMenu": {
		"skins": ["wysiwyg.common.components.dropdownmenu.viewer.skins.TextOnlyMenuButtonSkin", "wysiwyg.common.components.dropdownmenu.viewer.skins.TextOnlyMenuButtonBgFixSkin", "wysiwyg.common.components.dropdownmenu.viewer.skins.TextSeparatorsMenuButtonSkin", "wysiwyg.common.components.dropdownmenu.viewer.skins.SolidColorMenuButtonSkin", "wysiwyg.common.components.dropdownmenu.viewer.skins.ShinyMenuIButtonSkin", "wysiwyg.common.components.dropdownmenu.viewer.skins.ShinyMenuIIButtonSkin", "wysiwyg.common.components.dropdownmenu.viewer.skins.OverlineMenuButtonSkin", "wysiwyg.common.components.dropdownmenu.viewer.skins.SeparateBasicMenuButtonSkin", "wysiwyg.common.components.dropdownmenu.viewer.skins.SeparateShinyIMenuButtonSkin", "wysiwyg.common.components.dropdownmenu.viewer.skins.SeparateShinyIIMenuButtonSkin", "wysiwyg.common.components.dropdownmenu.viewer.skins.LinesMenuButtonSkin", "wysiwyg.common.components.dropdownmenu.viewer.skins.SeparateLinesMenuButtonSkin", "wysiwyg.common.components.dropdownmenu.viewer.skins.PointerMenuButtonSkin", "wysiwyg.common.components.dropdownmenu.viewer.skins.RibbonsMenuButtonSkin", "wysiwyg.common.components.dropdownmenu.viewer.skins.VerticalRibbonsMenuButtonSkin", "wysiwyg.common.components.dropdownmenu.viewer.skins.IndentedMenuButtonSkin", "wysiwyg.common.components.dropdownmenu.viewer.skins.SeparateIndentedMenuButtonSkin", "wysiwyg.common.components.dropdownmenu.viewer.skins.SloppyBorderMenuButtonSkin", "wysiwyg.common.components.dropdownmenu.viewer.skins.OverlineMenuButtonHorizontalMenuAdaptationSkin"],
		"dataTypes": ["MenuDataRef", "Menu", "CustomMenuDataRef", ""],
		"propertyType": "HorizontalMenuProperties",
		"styles": {
			"ddm1": "wysiwyg.common.components.dropdownmenu.viewer.skins.TextOnlyMenuButtonSkin",
			"ddm2": "wysiwyg.common.components.dropdownmenu.viewer.skins.SolidColorMenuButtonSkin",
			"ddm3": "wysiwyg.common.components.dropdownmenu.viewer.skins.ShinyMenuIButtonSkin"
		},
		"nickname": "horizontalMenu"
	},
	"wixapps.integration.components.Icon": {
		"skins": [],
		"dataTypes": ["Icon"],
		"styles": {
			"skin": "wixapps.integration.skins.IconSkin"
		},
		"nickname": "icon"
	},
	"wixapps.integration.components.ImageButton": {
		"skins": [],
		"dataTypes": ["ImageButton"],
		"propertyType": "ImageButtonProperties",
		"styles": {
			"ImageButton_1": "wysiwyg.common.components.imagebutton.viewer.skins.ImageButtonSkin"
		},
		"nickname": "iconButton"
	},
	"wysiwyg.common.components.rssbutton.viewer.RSSButton": {
		"skins": [],
		"dataTypes": ["RssButton"],
		"propertyType": "RssButtonProperties",
		"styles": {
			"RSSButton_1": "wysiwyg.common.components.rssbutton.viewer.skins.RSSButtonSkin"
		},
		"nickname": "rssButton"
	},
	"wysiwyg.common.components.anchor.viewer.Anchor": {
		"skins": ["wysiwyg.common.components.anchor.viewer.skins.AnchorSkin"],
		"dataTypes": ["Anchor"],
		"styles": {
			"Anchor_1": "wysiwyg.common.components.anchor.viewer.skins.AnchorSkin"
		},
		"nickname": "anchor"
	},
	"wysiwyg.common.components.verticalanchorsmenu.viewer.VerticalAnchorsMenu": {
		"skins": ["wysiwyg.common.components.verticalanchorsmenu.viewer.skins.VerticalAnchorsMenuSymbolSkin", "wysiwyg.common.components.verticalanchorsmenu.viewer.skins.VerticalAnchorsMenuTextSkin", "wysiwyg.common.components.verticalanchorsmenu.viewer.skins.VerticalAnchorsMenuSymbolWithTextSkin", "wysiwyg.common.components.verticalanchorsmenu.viewer.skins.VerticalAnchorsMenuSymbolWithHiddenTextSkin", "wysiwyg.common.components.verticalanchorsmenu.viewer.skins.VerticalAnchorsMenuLinkedNoTextSkin"],
		"dataTypes": ["VerticalAnchorsMenu"],
		"propertyType": "VerticalAnchorsMenuProperties",
		"styles": {
			"VerticalAnchors_1": "wysiwyg.common.components.verticalanchorsmenu.viewer.skins.VerticalAnchorsMenuSymbolWithHiddenTextSkin",
			"VerticalAnchors_2": "wysiwyg.common.components.verticalanchorsmenu.viewer.skins.VerticalAnchorsMenuSymbolWithTextSkin",
			"VerticalAnchors_3": "wysiwyg.common.components.verticalanchorsmenu.viewer.skins.VerticalAnchorsMenuSymbolSkin",
			"VerticalAnchors_4": "wysiwyg.common.components.verticalanchorsmenu.viewer.skins.VerticalAnchorsMenuTextSkin",
			"VerticalAnchors_5": "wysiwyg.common.components.verticalanchorsmenu.viewer.skins.VerticalAnchorsMenuLinkedNoTextSkin"
		},
		"nickname": "anchorMenu"
	},
	"wysiwyg.common.components.facebooklikebox.viewer.FacebookLikeBox": {
		"skins": ["wysiwyg.common.components.facebooklikebox.viewer.skins.FacebookLikeBoxSkin"],
		"dataTypes": ["FacebookLikeBox"],
		"propertyType": "FacebookLikeBoxProperties",
		"styles": {
			"FacebookLikeBox_1": "wysiwyg.common.components.facebooklikebox.viewer.skins.FacebookLikeBoxSkin"
		},
		"nickname": "facebookPageLike"
	},
	"wysiwyg.common.components.imagebutton.viewer.ImageButton": {
		"skins": ["wysiwyg.common.components.imagebutton.viewer.skins.ImageButtonSkin"],
		"dataTypes": ["ImageButton"],
		"propertyType": "ImageButtonProperties",
		"styles": {
			"ImageButton_1": "wysiwyg.common.components.imagebutton.viewer.skins.ImageButtonSkin"
		},
		"nickname": "iconButton"
	},
	"wysiwyg.common.components.inputs.OptionsListInput": {
		"skins": [],
		"dataTypes": ["SelectableList"],
		"styles": {},
		"nickname": "optionsListInput"
	},
	"wysiwyg.common.components.inputs.SelectOptionsList": {
		"skins": [],
		"dataTypes": ["SelectableList"],
		"styles": {},
		"nickname": "selectOptionsList"
	},
	"wysiwyg.common.components.pinitpinwidget.viewer.PinItPinWidget": {
		"skins": ["wysiwyg.common.components.pinitpinwidget.viewer.skins.PinItPinWidgetSkin"],
		"dataTypes": ["PinItPinWidget"],
		"styles": {
			"PinItPinWidget_1": "wysiwyg.common.components.pinitpinwidget.viewer.skins.PinItPinWidgetSkin"
		},
		"nickname": "shareFromPinterest"
	},
	"wysiwyg.common.components.pinterestpinit.viewer.PinterestPinIt": {
		"skins": ["wysiwyg.common.components.pinterestpinit.viewer.skins.PinterestPinItSkin"],
		"dataTypes": ["PinterestPinIt"],
		"propertyType": "PinterestPinItProperties",
		"styles": {
			"PinterestPinIt_1": "wysiwyg.common.components.pinterestpinit.viewer.skins.PinterestPinItSkin"
		},
		"nickname": "pinToPinterest"
	},
	"wysiwyg.common.components.singleaudioplayer.viewer.SingleAudioPlayer": {
		"skins": ["wysiwyg.common.components.singleaudioplayer.viewer.skins.SingleAudioPlayerSkin", "wysiwyg.common.components.singleaudioplayer.viewer.skins.EPlayerRoundPlay", "wysiwyg.common.components.singleaudioplayer.viewer.skins.EPlayerFramedPlay", "wysiwyg.common.components.singleaudioplayer.viewer.skins.EPlayerLargePlay"],
		"dataTypes": ["SingleAudioPlayer"],
		"propertyType": "SingleAudioPlayerProperties",
		"styles": {
			"SingleAudioPlayer_1": "wysiwyg.common.components.singleaudioplayer.viewer.skins.SingleAudioPlayerSkin"
		},
		"nickname": "trackPlayer"
	},
	"wysiwyg.common.components.skypecallbutton.viewer.SkypeCallButton": {
		"skins": ["wysiwyg.common.components.skypecallbutton.viewer.skins.SkypeCallButtonSkin"],
		"dataTypes": ["SkypeCallButton"],
		"propertyType": "SkypeCallButtonProperties",
		"styles": {
			"SkypeCallButton_1": "wysiwyg.common.components.skypecallbutton.viewer.skins.SkypeCallButtonSkin"
		},
		"nickname": "skypeCall"
	},
	"wysiwyg.common.components.spotifyfollow.viewer.SpotifyFollow": {
		"skins": ["wysiwyg.common.components.spotifyfollow.viewer.skins.SpotifyFollowSkin"],
		"dataTypes": ["SpotifyFollow"],
		"propertyType": "SpotifyFollowProperties",
		"styles": {
			"SpotifyFollow_1": "wysiwyg.common.components.spotifyfollow.viewer.skins.SpotifyFollowSkin"
		},
		"nickname": "spotifyFollow"
	},
	"wysiwyg.common.components.spotifyplayer.viewer.SpotifyPlayer": {
		"skins": ["wysiwyg.common.components.spotifyplayer.viewer.skins.SpotifyPlayerSkin"],
		"dataTypes": ["SpotifyPlayer"],
		"propertyType": "SpotifyPlayerProperties",
		"styles": {
			"SpotifyPlayer_1": "wysiwyg.common.components.spotifyplayer.viewer.skins.SpotifyPlayerSkin"
		},
		"nickname": "spotifyPlayer"
	},
	"wysiwyg.common.components.subscribeform.viewer.SubscribeForm": {
		"skins": ["wysiwyg.common.components.subscribeform.viewer.skins.SubscribeFormPlaceholderSkin", "wysiwyg.common.components.subscribeform.viewer.skins.SubscribeFormBoxLayoutEnvelope", "wysiwyg.common.components.subscribeform.viewer.skins.SubscribeFormBoxLayoutFlat", "wysiwyg.common.components.subscribeform.viewer.skins.SubscribeFormLineLayoutFlat", "wysiwyg.common.components.subscribeform.viewer.skins.SubscribeFormLineLayoutTransparentWithIcon", "wysiwyg.common.components.subscribeform.viewer.skins.SubscribeFormBoxLayoutShiny"],
		"dataTypes": ["SubscribeForm"],
		"propertyType": "SubscribeFormProperties",
		"styles": {
			"SubscribeForm_1": "wysiwyg.common.components.subscribeform.viewer.skins.SubscribeFormBoxLayoutFlat"
		},
		"nickname": "subscribeForm"
	},
	"wysiwyg.common.components.verticalmenu.viewer.VerticalMenu": {
		"skins": ["wysiwyg.common.components.verticalmenu.viewer.skins.VerticalMenuSolidColorSkin", "wysiwyg.common.components.verticalmenu.viewer.skins.VerticalMenuSeparatedButtonFixedWidthSkin", "wysiwyg.common.components.verticalmenu.viewer.skins.VerticalMenuTextSkin", "wysiwyg.common.components.verticalmenu.viewer.skins.VerticalMenuSeparatedButtonSkin", "wysiwyg.common.components.verticalmenu.viewer.skins.VerticalMenuTextWithSeparatorsSkin"],
		"dataTypes": ["MenuDataRef", "Menu", "CustomMenuDataRef", ""],
		"propertyType": "VerticalMenuProperties",
		"styles": {
			"VerticalMenu_1": "wysiwyg.common.components.verticalmenu.viewer.skins.VerticalMenuSolidColorSkin"
		},
		"nickname": "verticalMenu"
	},
	"wysiwyg.common.components.youtubesubscribebutton.viewer.YouTubeSubscribeButton": {
		"skins": ["wysiwyg.common.components.youtubesubscribebutton.viewer.skins.YouTubeSubscribeButtonSkin"],
		"dataTypes": ["YouTubeSubscribeButton"],
		"propertyType": "YouTubeSubscribeButtonProperties",
		"styles": {
			"YouTubeSubscribeButton_1": "wysiwyg.common.components.youtubesubscribebutton.viewer.skins.YouTubeSubscribeButtonSkin"
		},
		"nickname": "youTubeSubscribe"
	},
	"wysiwyg.viewer.components.AdminLoginButton": {
		"skins": ["wysiwyg.viewer.skins.button.AdminLoginButtonSkin"],
		"dataTypes": ["LinkableButton"],
		"propertyType": "ButtonProperties",
		"styles": {
			"admb0": "wysiwyg.viewer.skins.button.AdminLoginButtonSkin"
		},
		"nickname": "webmasterLogin"
	},
	"wysiwyg.viewer.components.AudioPlayer": {
		"skins": ["wysiwyg.viewer.skins.audioplayer.Audio3DPlayer", "wysiwyg.viewer.skins.audioplayer.ShinyPlayer", "wysiwyg.viewer.skins.audioplayer.SimplePlayer", "wysiwyg.viewer.skins.audioplayer.BoldPlayer"],
		"dataTypes": ["AudioPlayer"],
		"styles": {
			"ap1": "wysiwyg.viewer.skins.audioplayer.SimplePlayer",
			"ap2": "wysiwyg.viewer.skins.audioplayer.ShinyPlayer"
		},
		"nickname": "miniPlayer"
	},
	"wysiwyg.viewer.components.BgImageStrip": {
		"skins": ["skins.viewer.bgimagestrip.BgImageStripSkin", "skins.viewer.bgimagestrip.BevelScreenSkin", "skins.viewer.bgimagestrip.IronScreenSkin", "skins.viewer.bgimagestrip.DoubleBorderScreenSkin"],
		"dataTypes": ["Image", ""],
		"propertyTypes": ["BgImageStripUnifiedProperties"],
		"styles": {
			"bgis1": "skins.viewer.bgimagestrip.BgImageStripSkin",
			"bgis2": "skins.viewer.bgimagestrip.BevelScreenSkin",
			"bgis3": "skins.viewer.bgimagestrip.IronScreenSkin",
			"bgis4": "skins.viewer.bgimagestrip.DoubleBorderScreenSkin"
		},
		"nickname": "strip"
	},
	"wysiwyg.viewer.components.ClipArt": {
		"skins": ["wysiwyg.viewer.skins.photo.NoSkinPhoto"],
		"dataTypes": ["Image"],
		"propertyType": "WPhotoProperties",
		"styles": {
			"ca1": "wysiwyg.viewer.skins.photo.NoSkinPhoto"
		},
		"nickname": "clipArt"
	},
	"wysiwyg.viewer.components.ContactForm": {
		"skins": ["wysiwyg.viewer.skins.contactform.DefaultContactForm", "wysiwyg.viewer.skins.contactform.BasicContactFormSkin", "wysiwyg.viewer.skins.contactform.VerticalFormLabelsLeft", "wysiwyg.viewer.skins.contactform.VerticalForm", "contactform.OverlappingButtonSkin", "contactform.FullWidthButtonSkin", "contactform.LineOnlySkin", "contactform.FieldAnimationSkin"],
		"dataTypes": ["ContactForm"],
		"propertyType": "ContactFormProperties",
		"styles": {
			"cf1": "wysiwyg.viewer.skins.contactform.DefaultContactForm",
			"cf2": "wysiwyg.viewer.skins.contactform.BasicContactFormSkin"
		},
		"nickname": "contactForm"
	},
	"wysiwyg.viewer.components.DynamicContactForm": {
		"skins": ["wysiwyg.viewer.skins.contactform.DefaultContactForm", "wysiwyg.viewer.skins.contactform.BasicContactFormSkin", "wysiwyg.viewer.skins.contactform.VerticalFormLabelsLeft", "wysiwyg.viewer.skins.contactform.VerticalForm", "contactform.OverlappingButtonSkin", "contactform.FullWidthButtonSkin", "contactform.LineOnlySkin", "contactform.FieldAnimationSkin", "wysiwyg.viewer.skins.contactform.HorizontalContactFormSkin"],
		"dataTypes": ["DynamicContactForm"],
		"styles": {
			"cf1": "wysiwyg.viewer.skins.contactform.DefaultContactForm",
			"cf2": "wysiwyg.viewer.skins.contactform.BasicContactFormSkin"
		},
		"nickname": "contactForm"
	},
	"wysiwyg.viewer.components.Displayer": {
		"skins": [],
		"dataTypes": ["Image"],
		"styles": {},
		"nickname": "displayer"
	},
	"wysiwyg.viewer.components.documentmedia.DocumentMedia": {
		"skins": ["skins.viewer.documentmedia.DocumentMediaSkin"],
		"dataTypes": ["Image"],
		"propertyType": "DocumentMediaProperties",
		"styles": {
			"dm1": "skins.viewer.documentmedia.DocumentMediaSkin"
		},
		"nickname": "document"
	},
	"wysiwyg.viewer.components.EbayItemsBySeller": {
		"skins": ["wysiwyg.viewer.skins.EbayItemsBySellerSkin"],
		"dataTypes": ["EbayItemsBySeller"],
		"propertyType": "EbayItemsBySellerProperties",
		"styles": {
			"eib1": "wysiwyg.viewer.skins.EbayItemsBySellerSkin"
		},
		"nickname": "eBay"
	},
	"wysiwyg.viewer.components.FacebookShare": {
		"skins": ["skins.viewer.facebookshare.FacebookShareSkin"],
		"dataTypes": ["FacebookShareButton"],
		"styles": {
			"fs1": "skins.viewer.facebookshare.FacebookShareSkin"
		},
		"nickname": "facebookShare"
	},
	"wysiwyg.viewer.components.FlashComponent": {
		"skins": ["wysiwyg.viewer.skins.FlashComponentSkin"],
		"dataTypes": ["LinkableFlashComponent"],
		"propertyType": "FlashComponentProperties",
		"styles": {
			"swf1": "wysiwyg.viewer.skins.FlashComponentSkin"
		},
		"nickname": "flash"
	},
	"wysiwyg.viewer.components.FlickrBadgeWidget": {
		"skins": ["wysiwyg.viewer.skins.FlickrBadgeWidgetSkin"],
		"dataTypes": ["FlickrBadgeWidget"],
		"styles": {
			"fk1": "wysiwyg.viewer.skins.FlickrBadgeWidgetSkin"
		},
		"nickname": "flickrGallery"
	},
	"wysiwyg.viewer.components.GoogleMap": {
		"skins": ["wysiwyg.viewer.skins.GoogleMapSkin", "wysiwyg.viewer.skins.map.GoogleMapDefault", "wysiwyg.viewer.skins.map.GoogleMapSloppy", "wysiwyg.viewer.skins.map.GoogleMapLiftedShadow"],
		"dataTypes": ["GeoMap"],
		"propertyType": "GoogleMapProperties",
		"styles": {
			"gm1": "wysiwyg.viewer.skins.GoogleMapSkin"
		},
		"nickname": "googleMaps"
	},
	"wysiwyg.viewer.components.HtmlComponent": {
		"skins": ["wysiwyg.viewer.skins.HtmlComponentSkin"],
		"dataTypes": ["HtmlComponent"],
		"styles": {
			"htco1": "wysiwyg.viewer.skins.HtmlComponentSkin"
		},
		"nickname": "html"
	},
	"wysiwyg.viewer.components.ItunesButton": {
		"skins": ["skins.viewer.itunesbutton.ItunesButtonSkin"],
		"dataTypes": ["ItunesButton"],
		"propertyType": "ItunesButtonProperties",
		"styles": {
			"ib1": "skins.viewer.itunesbutton.ItunesButtonSkin"
		},
		"nickname": "iTunesButton"
	},
	"wysiwyg.viewer.components.LinkBar": {
		"skins": ["wysiwyg.viewer.skins.LinkBarNoBGSkin"],
		"dataTypes": ["ImageList"],
		"propertyType": "LinkBarProperties",
		"styles": {
			"lb1": "wysiwyg.viewer.skins.LinkBarNoBGSkin"
		},
		"nickname": "socialBar"
	},
	"wysiwyg.viewer.components.LinkBarItem": {
		"skins": [],
		"dataTypes": ["Image"],
		"styles": {},
		"nickname": "linkBarItem"
	},
	"wysiwyg.viewer.components.LoginButton": {
		"skins": ["wysiwyg.viewer.skins.button.LoginButtonSkin"],
		"dataTypes": ["LoginButton", ""],
		"styles": {
			"lgn0": "wysiwyg.viewer.skins.button.LoginButtonSkin"
		},
		"nickname": "memberLoginButton"
	},
	"wysiwyg.viewer.components.LoginSocialBar": {
		"skins": ["wysiwyg.viewer.skins.LoginSocialBarSkin"],
		"dataTypes": ["LoginSocialBar"],
		"propertyType": "LoginSocialBarProperties",
		"styles": {
			"lsb0": "wysiwyg.viewer.skins.LoginSocialBarSkin"
		},
		"nickname": "accountNavBar"
	},
	"wysiwyg.viewer.components.MatrixGallery": {
		"skins": ["wysiwyg.viewer.skins.gallerymatrix.MatrixGalleryDefaultSkin", "wysiwyg.viewer.skins.gallerymatrix.TextBottomCustomHeightSkin", "wysiwyg.viewer.skins.gallerymatrix.PolaroidCustomHeightSkin", "wysiwyg.viewer.skins.gallerymatrix.MatrixGalleryLiftedShadow", "wysiwyg.viewer.skins.gallerymatrix.MatrixGallerySloopy", "wysiwyg.viewer.skins.gallerymatrix.MatrixGalleryCircleSkin", "wysiwyg.viewer.skins.gallerymatrix.MatrixGalleryTextSlideUpSkin", "skins.viewer.gallerymatrix.MatrixGalleryIronSkin", "skins.viewer.gallerymatrix.MatrixGalleryScotchTapeSkin", "wysiwyg.common.components.matrixgallery.viewer.skins.MatrixGalleryTextOnCenterSkin", "wysiwyg.common.components.matrixgallery.viewer.skins.MatrixGallerySeparateTextBoxSkin", "wysiwyg.viewer.skins.gallerymatrix.MatrixGalleryTransparentSkin"],
		"dataTypes": ["ImageList"],
		"propertyType": "MatrixGalleryProperties",
		"styles": {
			"mg1": "wysiwyg.viewer.skins.gallerymatrix.MatrixGalleryDefaultSkin",
			"mg2": "wysiwyg.viewer.skins.gallerymatrix.TextBottomCustomHeightSkin",
			"mg3": "wysiwyg.viewer.skins.gallerymatrix.PolaroidCustomHeightSkin"
		},
		"nickname": "gallery"
	},
	"wysiwyg.viewer.components.MediaRichText": {
		"skins": [],
		"dataTypes": ["MediaRichText", "StyledText"],
		"styles": {},
		"nickname": "text"
	},
	"wysiwyg.viewer.components.PayPalButton": {
		"skins": ["wysiwyg.viewer.skins.PayPalButtonSkin"],
		"dataTypes": ["PayPalButton"],
		"propertyType": "PayPalButtonProperties",
		"styles": {
			"ppb0": "wysiwyg.viewer.skins.PayPalButtonSkin"
		},
		"nickname": "paypalButton"
	},
	"wysiwyg.viewer.components.PinterestFollow": {
		"skins": ["skins.viewer.pinterestfollow.PinterestFollowSkin"],
		"dataTypes": ["PinterestFollow"],
		"styles": {
			"pf1": "skins.viewer.pinterestfollow.PinterestFollowSkin"
		},
		"nickname": "pinterestFollow"
	},
	"wysiwyg.viewer.components.SiteButton": {
		"skins": ["wysiwyg.viewer.skins.button.BasicButton", "wysiwyg.viewer.skins.button.ButtonThreeD", "wysiwyg.viewer.skins.button.ButtonLiftedShadow", "wysiwyg.viewer.skins.button.ShinyButtonInverted", "wysiwyg.viewer.skins.button.ButtonArrow", "wysiwyg.viewer.skins.button.ButtonArrowLeft", "wysiwyg.viewer.skins.button.ButtonInnerShadow", "wysiwyg.viewer.skins.button.ButtonShadowRight", "wysiwyg.viewer.skins.button.ButtonShadowLeft", "wysiwyg.viewer.skins.button.TextOnlyButtonSkin", "wysiwyg.viewer.skins.button.ShinyButtonISkin", "wysiwyg.viewer.skins.button.ShinyButtonIISkin", "wysiwyg.viewer.skins.button.RibbonButton", "wysiwyg.viewer.skins.button.CircleButton", "wysiwyg.viewer.skins.button.SloopyButton", "wysiwyg.viewer.skins.button.IronButton", "wysiwyg.viewer.skins.button.GamingButton", "wysiwyg.viewer.skins.button.ScotchTapeButton"],
		"dataTypes": ["LinkableButton"],
		"propertyType": "ButtonProperties",
		"styles": {
			"b1": "wysiwyg.viewer.skins.button.BasicButton",
			"b2": "wysiwyg.viewer.skins.button.ButtonThreeD",
			"b3": "wysiwyg.viewer.skins.button.ButtonLiftedShadow",
			"b4": "wysiwyg.viewer.skins.button.ShinyButtonInverted"
		},
		"nickname": "button"
	},
	"wysiwyg.viewer.components.SliderGallery": {
		"skins": ["wysiwyg.viewer.skins.galleryslider.SliderGalleryDefaultSkin", "wysiwyg.viewer.skins.galleryslider.SliderGalleryCircleSkin", "wysiwyg.viewer.skins.galleryslider.SliderGalleryNoArrow", "wysiwyg.viewer.skins.galleryslider.SliderGalleryIronSkin", "wysiwyg.viewer.skins.galleryslider.SliderGalleryScotchTapeSkin"],
		"dataTypes": ["ImageList"],
		"propertyType": "SliderGalleryProperties",
		"styles": {
			"sg1": "wysiwyg.viewer.skins.galleryslider.SliderGalleryDefaultSkin",
			"sg2": "wysiwyg.viewer.skins.galleryslider.SliderGalleryCircleSkin",
			"sg3": "wysiwyg.viewer.skins.galleryslider.SliderGalleryNoArrow"
		},
		"nickname": "gallery"
	},
	"wysiwyg.viewer.components.SlideShowGallery": {
		"skins": ["wysiwyg.viewer.skins.gallery.SlideShowTextOverlay", "wysiwyg.viewer.skins.gallery.SlideShowTextFloating", "wysiwyg.viewer.skins.gallery.SlideShowTextRight", "wysiwyg.viewer.skins.gallery.SlideShowPolaroid", "wysiwyg.viewer.skins.gallery.SlideShowTextBottom", "wysiwyg.viewer.skins.gallery.SlideShowGallerySloopy", "wysiwyg.viewer.skins.gallery.SlideShowGalleryLiftedShadowSkin", "skins.viewer.gallery.SlideShowIron", "skins.viewer.gallery.SlideShowCleanAndSimple2", "skins.viewer.gallery.SlideShowScotchTape", "skins.viewer.gallery.SlideShowCleanAndSimple"],
		"dataTypes": ["ImageList"],
		"propertyType": "SlideShowGalleryProperties",
		"styles": {
			"ssg1": "wysiwyg.viewer.skins.gallery.SlideShowTextOverlay",
			"ssg2": "wysiwyg.viewer.skins.gallery.SlideShowTextFloating",
			"ssg3": "wysiwyg.viewer.skins.gallery.SlideShowTextRight"
		},
		"nickname": "gallery"
	},
	"wysiwyg.viewer.components.SoundCloudWidget": {
		"skins": ["wysiwyg.viewer.skins.SoundCloudWidgetSkin"],
		"dataTypes": ["SoundCloudWidget"],
		"styles": {
			"scw1": "wysiwyg.viewer.skins.SoundCloudWidgetSkin"
		},
		"nickname": "soundcloud"
	},
	"wysiwyg.viewer.components.TwitterFeed": {
		"skins": ["wysiwyg.viewer.skins.TwitterFeedSkin"],
		"dataTypes": ["TwitterFollow"],
		"propertyType": "TwitterFeedProperties",
		"styles": {
			"twf1": "wysiwyg.viewer.skins.TwitterFeedSkin"
		},
		"nickname": "twitterFeed"
	},
	"wysiwyg.viewer.components.VerticalRepeater": {
		"skins": ["wysiwyg.viewer.skins.VerticalRepeaterEmptySkin", "wysiwyg.viewer.skins.VerticalRepeaterSkin"],
		"dataTypes": ["", "ImageList"],
		"styles": {
			"vr1": "wysiwyg.viewer.skins.VerticalRepeaterEmptySkin",
			"vr2": "wysiwyg.viewer.skins.VerticalRepeaterSkin",
			"vr3": "wysiwyg.viewer.skins.VerticalRepeaterSkin",
			"vr4": "wysiwyg.viewer.skins.VerticalRepeaterSkin"
		},
		"nickname": "verticalRepeater"
	},
	"wysiwyg.viewer.components.Video": {
		"skins": ["wysiwyg.viewer.skins.VideoSkin", "wysiwyg.viewer.skins.video.VideoDefault", "wysiwyg.viewer.skins.video.VideoSloppy", "wysiwyg.viewer.skins.video.VideoLiftedShadow"],
		"dataTypes": ["Video"],
		"propertyType": "VideoProperties",
		"styles": {
			"v1": "wysiwyg.viewer.skins.VideoSkin",
			"v2": "wysiwyg.viewer.skins.video.VideoDefault"
		},
		"nickname": "video"
	},
	"wysiwyg.viewer.components.VKShareButton": {
		"skins": ["skins.viewer.vkshare.VKShareSkin"],
		"dataTypes": ["VKShareButton"],
		"propertyType": "VKShareProperties",
		"styles": {
			"vks1": "skins.viewer.vkshare.VKShareSkin"
		},
		"nickname": "vkShare"
	},
	"wysiwyg.viewer.components.WPhoto": {
		"skins": ["wysiwyg.viewer.skins.photo.NoSkinPhoto", "wysiwyg.viewer.skins.photo.MouseOverPhoto", "wysiwyg.viewer.skins.photo.RoundPhoto", "wysiwyg.viewer.skins.photo.LiftedShadowPhoto", "wysiwyg.viewer.skins.photo.LiftedTopPhoto", "wysiwyg.viewer.skins.photo.PolaroidPhoto", "wysiwyg.viewer.skins.photo.CirclePhoto", "wysiwyg.viewer.skins.photo.SloppyPhoto", "wysiwyg.viewer.skins.photo.DoubleBorderPhoto", "wysiwyg.viewer.skins.photo.ScotchDoubleHorizontal", "wysiwyg.viewer.skins.photo.ScotchDoubleVertical", "wysiwyg.viewer.skins.photo.ScotchTopPhoto", "wysiwyg.viewer.skins.photo.IronPhoto", "wysiwyg.viewer.skins.photo.GlowLinePhoto", "wysiwyg.viewer.skins.photo.NewPolaroidPhoto"],
		"dataTypes": ["Image"],
		"propertyType": "WPhotoProperties",
		"styles": {
			"ca1": "wysiwyg.viewer.skins.photo.NoSkinPhoto",
			"wp1": "wysiwyg.viewer.skins.photo.NoSkinPhoto",
			"wp2": "wysiwyg.viewer.skins.photo.MouseOverPhoto",
			"wp3": "wysiwyg.viewer.skins.photo.RoundPhoto",
			"wp4": "wysiwyg.viewer.skins.photo.LiftedShadowPhoto"
		},
		"nickname": "image"
	},
	"wysiwyg.viewer.components.WRichText": {
		"skins": ["wysiwyg.viewer.skins.WRichTextSkin", "wysiwyg.viewer.skins.WRichTextNewSkin"],
		"dataTypes": ["RichText", "Text", "StyledText"],
		"propertyTypes": ["", "WRichTextProperties"],
		"styles": {
			"txtNew": "wysiwyg.viewer.skins.WRichTextNewSkin",
			"txt1": "wysiwyg.viewer.skins.WRichTextSkin"
		},
		"nickname": "text"
	},
	"wysiwyg.viewer.components.WTwitterFollow": {
		"skins": ["mobile.core.skins.TwitterFollowSkin", "skins.core.TwitterFollowSkin"],
		"dataTypes": ["TwitterFollow"],
		"propertyType": "WTwitterFollowProperties",
		"styles": {
			"tf1": "skins.core.TwitterFollowSkin"
		},
		"nickname": "twitterFollow"
	},
	"wysiwyg.viewer.components.WTwitterTweet": {
		"skins": ["skins.core.TwitterTweetSkin"],
		"dataTypes": ["TwitterTweet"],
		"propertyType": "WTwitterTweetProperties",
		"styles": {
			"twt1": "skins.core.TwitterTweetSkin"
		},
		"nickname": "twitterTweet"
	},
	"wysiwyg.viewer.components.inputs.ComboBoxInput": {
		"skins": ["ComboBoxInputSkin", "wysiwyg.viewer.skins.input.ComboBoxInputSkin", "wysiwyg.viewer.skins.input.ComboBoxInputSkinNoValidation", "wysiwyg.viewer.skins.appinputs.AppsComboBoxInputSkin", "wysiwyg.viewer.skins.appinputs.AppsComboBoxInputSkinNoValidation"],
		"dataTypes": ["SelectableList"],
		"propertyType": "ComboBoxInputProperties",
		"styles": {
			"wa_cb1": "wysiwyg.viewer.skins.input.ComboBoxInputSkin",
			"wa_cb2": "wysiwyg.viewer.skins.input.ComboBoxInputSkinNoValidation",
			"wa_cb3": "wysiwyg.viewer.skins.appinputs.AppsComboBoxInputSkin"
		},
		"nickname": "dropdown"
	},
	"wysiwyg.viewer.components.inputs.TextOption": {
		"skins": [],
		"dataTypes": ["SelectOption"],
		"styles": {},
		"nickname": "textOption"
	},
	"ecommerce.integration.components.MobileTextOption": {
		"skins": [],
		"dataTypes": ["SelectOption"],
		"styles": {},
		"nickname": "mobileTextOption"
	},
	"wysiwyg.viewer.components.inputs.ColorOption": {
		"skins": [],
		"dataTypes": ["SelectOption"],
		"styles": {},
		"nickname": "colorOption"
	},
	"ecommerce.integration.components.MobileColorOption": {
		"skins": [],
		"dataTypes": ["SelectOption"],
		"styles": {},
		"nickname": "mobileColorOption"
	},
	"wysiwyg.viewer.components.mobile.TinyMenu": {
		"skins": ["wysiwyg.viewer.skins.mobile.TinyMenuFullScreenSkin", "wysiwyg.viewer.skins.mobile.TinyMenuPullFromLeftSkin", "wysiwyg.viewer.skins.mobile.TinyMenuPullFromRightSkin"],
		"dataTypes": ["Menu", "", "TinyMenu"],
		"propertyType": "TinyMenuProperties",
		"styles": {
			"tm1": "wysiwyg.viewer.skins.mobile.TinyMenuSkin",
			"tm2": "wysiwyg.viewer.skins.mobile.TinyMenuSkin",
			"tmFull1": "wysiwyg.viewer.skins.mobile.TinyMenuFullScreenSkin",
			"tmFull2": "wysiwyg.viewer.skins.mobile.TinyMenuFullScreenSkin"
		},
		"nickname": "mobileMenu"
	},
	"wysiwyg.viewer.components.QuickActionBar": {
		"skins": ["wysiwyg.viewer.skins.quickActionBar.anchoredSkin", "wysiwyg.viewer.skins.quickActionBar.floatingSkin", "wysiwyg.viewer.skins.quickActionBar.ovalSkin", "wysiwyg.viewer.skins.quickActionBar.rectSkin"],
		"dataTypes": [""],
		"propertyType": "QuickActionBarProperties",
		"styles": {
			"anchored": "wysiwyg.viewer.skins.quickActionBar.anchoredSkin",
			"floating": "wysiwyg.viewer.skins.quickActionBar.floatingSkin",
			"oval": "wysiwyg.viewer.skins.quickActionBar.ovalSkin",
			"rect": "wysiwyg.viewer.skins.quickActionBar.rectSkin"
		},
		"nickname": "quickActionBar"
	},
	"wysiwyg.viewer.components.QuickActionBarItem": {
		"skins": [],
		"dataTypes": ["QuickActionBarItem"],
		"styles": {},
		"nickname": "quickActionBarItem"
	},
	"tpa.viewer.components.Collage": {
		"skins": ["wysiwyg.viewer.skins.TPACollageSkin"],
		"dataTypes": ["ImageList"],
		"propertyType": "CollageProperties",
		"styles": {
			"tpacol1": "wysiwyg.viewer.skins.TPACollageSkin"
		},
		"nickname": "gallery"
	},
	"tpa.viewer.components.Freestyle": {
		"skins": ["wysiwyg.viewer.skins.TPAFreestyleSkin"],
		"dataTypes": ["ImageList"],
		"propertyType": "FreestyleProperties",
		"styles": {
			"tpafs1": "wysiwyg.viewer.skins.TPAFreestyleSkin"
		},
		"nickname": "gallery"
	},
	"wysiwyg.viewer.components.TouchMediaZoom": {
		"skins": ["wysiwyg.viewer.skins.TouchMediaZoom"],
		"dataTypes": ["ImageList"],
		"styles": {
			"tmZoomSlideshow1": "wysiwyg.viewer.skins.TouchMediaZoom"
		},
		"nickname": "touchMediaZoom"
	},
	"wysiwyg.viewer.components.TouchMediaZoomItem": {
		"skins": ["wysiwyg.viewer.skins.TouchMediaZoomItem"],
		"dataTypes": ["Image"],
		"styles": {
			"touchMediaZoomItem1": "wysiwyg.viewer.skins.TouchMediaZoomItem"
		},
		"nickname": "touchMediaZoomItem"
	},
	"tpa.viewer.components.Honeycomb": {
		"skins": ["wysiwyg.viewer.skins.TPAHoneycombSkin"],
		"dataTypes": ["ImageList"],
		"propertyType": "HoneycombProperties",
		"styles": {
			"tpahc1": "wysiwyg.viewer.skins.TPAHoneycombSkin"
		},
		"nickname": "gallery"
	},
	"tpa.viewer.components.Masonry": {
		"skins": ["wysiwyg.viewer.skins.TPAMasonrySkin"],
		"dataTypes": ["ImageList"],
		"propertyType": "MasonryProperties",
		"styles": {
			"tpms1": "wysiwyg.viewer.skins.TPAMasonrySkin"
		},
		"nickname": "gallery"
	},
	"wysiwyg.viewer.components.tpapps.TPA3DCarousel": {
		"skins": ["wysiwyg.viewer.skins.TPA3DCarouselSkin"],
		"dataTypes": ["ImageList"],
		"propertyType": "SlideShowGalleryProperties",
		"styles": {
			"tfc1": "wysiwyg.viewer.skins.TPA3DCarouselSkin"
		},
		"nickname": "gallery"
	},
	"wysiwyg.viewer.components.tpapps.TPA3DGallery": {
		"skins": ["wysiwyg.viewer.skins.TPA3DGallerySkin"],
		"dataTypes": ["ImageList"],
		"propertyType": "SlideShowGalleryProperties",
		"styles": {
			"tfg1": "wysiwyg.viewer.skins.TPA3DGallerySkin"
		},
		"nickname": "gallery"
	},
	"tpa.viewer.components.StripShowcase": {
		"skins": ["wysiwyg.viewer.skins.TPAStripShowcaseSkin"],
		"dataTypes": ["ImageList"],
		"propertyType": "StripShowcaseProperties",
		"styles": {
			"tpasc1": "wysiwyg.viewer.skins.TPAStripShowcaseSkin"
		},
		"nickname": "gallery"
	},
	"tpa.viewer.components.StripSlideshow": {
		"skins": ["wysiwyg.viewer.skins.TPAStripSlideshowSkin"],
		"dataTypes": ["ImageList"],
		"propertyType": "StripSlideshowProperties",
		"styles": {
			"tpastr1": "wysiwyg.viewer.skins.TPAStripSlideshowSkin"
		},
		"nickname": "gallery"
	},
	"tpa.viewer.components.Thumbnails": {
		"skins": ["wysiwyg.viewer.skins.TPAThumbnailsSkin"],
		"dataTypes": ["ImageList"],
		"propertyType": "ThumbnailsProperties",
		"styles": {
			"thmb1": "wysiwyg.viewer.skins.TPAThumbnailsSkin"
		},
		"nickname": "gallery"
	},
	"tpa.viewer.components.Accordion": {
		"skins": ["wysiwyg.viewer.skins.TPAAccordionSkin"],
		"dataTypes": ["ImageList"],
		"propertyType": "AccordionProperties",
		"styles": {
			"tpaacc1": "wysiwyg.viewer.skins.TPAAccordionSkin"
		},
		"nickname": "gallery"
	},
	"tpa.viewer.components.Impress": {
		"skins": ["wysiwyg.viewer.skins.TPAImpressSkin"],
		"dataTypes": ["ImageList"],
		"propertyType": "ImpressProperties",
		"styles": {
			"tpaimprs": "wysiwyg.viewer.skins.TPAImpressSkin"
		},
		"nickname": "gallery"
	},
	"wysiwyg.common.components.exitmobilemode.viewer.ExitMobileMode": {
		"skins": ["wysiwyg.common.components.exitmobilemode.viewer.skins.ExitMobileModeSkin"],
		"dataTypes": ["LinkableButton"],
		"propertyType": "ButtonProperties",
		"styles": {
			"emb1": "wysiwyg.common.components.exitmobilemode.viewer.skins.ExitMobileModeSkin"
		},
		"nickname": "backToDesktopButton"
	},
	"wysiwyg.common.components.NumericStepper": {
		"skins": ["wysiwyg.common.components.numericstepper.viewer.skins.NumericStepperSimpleSkin"],
		"dataTypes": ["NumericStepper"],
		"propertyType": "NumericStepperProperties",
		"styles": {
			"NumericStepper_1": "wysiwyg.common.components.numericstepper.viewer.skins.NumericStepperSimpleSkin"
		},
		"nickname": "numericStepper"
	},
	"wysiwyg.viewer.components.FiveGridLine": {
		"skins": ["wysiwyg.viewer.skins.line.SolidLine", "wysiwyg.viewer.skins.line.FadeLine", "wysiwyg.viewer.skins.line.FadeNotchTopLine", "wysiwyg.viewer.skins.line.FadeNotchBottomLine", "wysiwyg.viewer.skins.line.NotchDashedLine", "wysiwyg.viewer.skins.line.DashedLine", "wysiwyg.viewer.skins.line.DottedLine", "wysiwyg.viewer.skins.line.DoubleLine", "wysiwyg.viewer.skins.line.NotchLine", "wysiwyg.viewer.skins.line.ShadowTopLine", "wysiwyg.viewer.skins.line.ShadowBottomLine", "wysiwyg.viewer.skins.line.ArrowRightLine", "wysiwyg.viewer.skins.line.ArrowLine", "wysiwyg.viewer.skins.line.SloppyLine", "wysiwyg.viewer.skins.line.IronLine", "wysiwyg.viewer.skins.line.ZigzagLineSkin", "wysiwyg.viewer.skins.line.ZigzagLineFlipSkin"],
		"dataTypes": [""],
		"propertyTypes": ["", "FiveGridLineProperties"],
		"styles": {
			"hl1": "wysiwyg.viewer.skins.line.SolidLine",
			"hl2": "wysiwyg.viewer.skins.line.FadeLine",
			"hl3": "wysiwyg.viewer.skins.line.FadeNotchTopLine",
			"hl4": "wysiwyg.viewer.skins.line.FadeNotchBottomLine"
		},
		"nickname": "line"
	},
	"wysiwyg.viewer.components.PageGroup": {
		"skins": ["wysiwyg.viewer.skins.PageGroupSkin"],
		"dataTypes": [""],
		"propertyType": "PageGroupProperties",
		"styles": {},
		"nickname": "pageGroup"
	},
	"wysiwyg.viewer.components.PaginatedGridGallery": {
		"skins": ["wysiwyg.viewer.skins.paginatedgrid.PaginatedGridDefaultSkin", "wysiwyg.viewer.skins.paginatedgrid.PaginatedGridArrowsOutside", "wysiwyg.viewer.skins.paginatedgrid.PaginatedGridOverlay", "wysiwyg.viewer.skins.paginatedgrid.PaginatedGridRibbonArrows", "wysiwyg.viewer.skins.paginatedgrid.PaginatedGridTextBottom"],
		"dataTypes": ["ImageList"],
		"propertyType": "PaginatedGridGalleryProperties",
		"styles": {
			"pagg1": "wysiwyg.viewer.skins.paginatedgrid.PaginatedGridOverlay",
			"pagg2": "wysiwyg.viewer.skins.paginatedgrid.PaginatedGridArrowsOutside",
			"pagg3": "wysiwyg.viewer.skins.paginatedgrid.PaginatedGridRibbonArrows"
		},
		"nickname": "gallery"
	},
	"wysiwyg.viewer.components.WFacebookComment": {
		"skins": ["mobile.core.skins.FacebookCommentSkin", "skins.core.FacebookCommentSkin"],
		"dataTypes": ["", "WFacebookComment"],
		"propertyType": "WFacebookCommentProperties",
		"styles": {
			"fbc1": "skins.core.FacebookCommentSkin"
		},
		"nickname": "facebookComments"
	},
	"wysiwyg.common.components.disquscomments.viewer.DisqusComments": {
		"skins": ["wysiwyg.common.components.disquscomments.viewer.skins.DisqusCommentsSkin"],
		"dataTypes": ["DisqusComments"],
		"styles": {
			"disq2": "wysiwyg.common.components.disquscomments.viewer.skins.DisqusCommentsSkin"
		},
		"nickname": "disqusComments"
	},
	"wysiwyg.viewer.components.WFacebookLike": {
		"skins": ["skins.core.FacebookLikeSkin"],
		"dataTypes": ["", "WFacebookLike"],
		"propertyType": "WFacebookLikeProperties",
		"styles": {
			"fbl1": "skins.core.FacebookLikeSkin"
		},
		"nickname": "facebookLike"
	},
	"wysiwyg.viewer.components.WGooglePlusOne": {
		"skins": ["mobile.core.skins.GooglePlusOneSkin", "skins.core.GooglePlusOneSkin"],
		"dataTypes": [""],
		"propertyType": "WGooglePlusOneProperties",
		"styles": {
			"gp1": "skins.core.GooglePlusOneSkin"
		},
		"nickname": "google1"
	},
	"wysiwyg.viewer.components.svgshape.SvgShape": {
		"skins": ["skins.viewer.svgshape.SvgShapeDefaultSkin"],
		"dataTypes": ["SvgShape", ""],
		"propertyType": "SvgShapeProperties",
		"styles": {
			"assh": "skins.viewer.svgshape.SvgShapeDefaultSkin"
		},
		"nickname": "shape"
	},
	"wysiwyg.viewer.components.VectorImage": {
		"skins": ["skins.viewer.VectorImageSkin"],
		"dataTypes": ["VectorImage"],
		"propertyType": "VectorImageProperties",
		"styles": {
			"vi1": "skins.viewer.VectorImageSkin"
		},
		"nickname": "vectorImage"
	},
	"wysiwyg.viewer.components.svgPrimitive.SvgPrimitive": {
		"skins": [],
		"dataTypes": [],
		"styles": {
			"svgp1": "skins.viewer.svgPrimitive.SvgShapeDefaultSkin"
		},
		"nickname": "svgPrimitive"
	},
	"wysiwyg.viewer.components.SiteRegionContainer": {
		"skins": ["wysiwyg.viewer.skins.mediaContainer.DefaultMediaContainer"],
		"dataTypes": [""],
		"styles": {
			"sirc1": "wysiwyg.viewer.skins.mediaContainer.DefaultMediaContainer"
		},
		"nickname": "container"
	},
	"mobile.core.components.Container": {
		"skins": [],
		"dataTypes": [""],
		"styles": {
			"c1": "wysiwyg.viewer.skins.area.DefaultAreaSkin",
			"c2": "wysiwyg.viewer.skins.area.RectangleArea",
			"c3": "wysiwyg.viewer.skins.area.AppleArea",
			"c4": "wysiwyg.viewer.skins.area.CircleArea"
		},
		"nickname": "box"
	},
	"wysiwyg.viewer.components.MediaBox": {
		"skins": ["wysiwyg.viewer.skins.mediaContainer.DefaultMediaContainer"],
		"dataTypes": [""],
		"styles": {
			"mc1": "wysiwyg.viewer.skins.mediaContainer.DefaultMediaContainer"
		},
		"nickname": "mediaBox"
	},
	"wysiwyg.viewer.components.HoverBox": {
		"skins": ["wysiwyg.viewer.skins.mediaContainer.DefaultMediaContainer"],
		"dataTypes": [""],
		"propertyType": "HoverBoxProperties",
		"styles": {
			"mc1": "wysiwyg.viewer.skins.mediaContainer.DefaultMediaContainer"
		},
		"nickname": "hoverBox"
	},
	"wysiwyg.viewer.components.PopupContainer": {
		"skins": ["wysiwyg.viewer.skins.stripContainer.DefaultStripContainer"],
		"dataTypes": [""],
		"propertyType": "PopupContainerProperties",
		"styles": {
			"strc1": "wysiwyg.viewer.skins.stripContainer.DefaultStripContainer"
		},
		"nickname": "lightbox"
	},
	"wysiwyg.viewer.components.PopupCloseTextButton": {
		"skins": [],
		"dataTypes": ["LinkableButton"],
		"propertyType": "ButtonProperties",
		"styles": {
			"b1": "wysiwyg.viewer.skins.button.BasicButton",
			"b2": "wysiwyg.viewer.skins.button.ButtonThreeD",
			"b3": "wysiwyg.viewer.skins.button.ButtonLiftedShadow",
			"b4": "wysiwyg.viewer.skins.button.ShinyButtonInverted"
		},
		"nickname": "button"
	},
	"wysiwyg.viewer.components.PopupCloseIconButton": {
		"skins": [],
		"dataTypes": ["SvgShape", ""],
		"propertyType": "SvgShapeProperties",
		"styles": {
			"assh": "skins.viewer.svgshape.SvgShapeDefaultSkin"
		},
		"nickname": "button"
	},
	"wysiwyg.viewer.components.Group": {
		"skins": [],
		"dataTypes": [""],
		"styles": {},
		"nickname": "group"
	},
	"wysiwyg.viewer.components.FormContainer": {
		"skins": ["wysiwyg.viewer.skins.FormContainerSkin"],
		"dataTypes": [""],
		"styles": {},
		"nickname": "form"
	},
	"wysiwyg.viewer.components.WSiteStructure": {
		"skins": [],
		"dataTypes": [""],
		"styles": {},
		"nickname": "site"
	},
	"wysiwyg.viewer.components.HeaderContainer": {
		"skins": ["wysiwyg.viewer.skins.screenwidthcontainer.DefaultScreen", "wysiwyg.viewer.skins.screenwidthcontainer.BevelScreen", "wysiwyg.viewer.skins.screenwidthcontainer.InnerShadowScreen", "wysiwyg.viewer.skins.screenwidthcontainer.ThreeDeeScreen", "wysiwyg.viewer.skins.screenwidthcontainer.TransparentScreen", "wysiwyg.viewer.skins.screenwidthcontainer.LiftedTopScreen", "wysiwyg.viewer.skins.screenwidthcontainer.LiftedBottomScreen", "wysiwyg.viewer.skins.screenwidthcontainer.ShadowBottomScreen", "wysiwyg.viewer.skins.screenwidthcontainer.IronScreen", "wysiwyg.viewer.skins.screenwidthcontainer.DoubleBorderScreen"],
		"dataTypes": [""],
		"styles": {
			"hc1": "wysiwyg.viewer.skins.screenwidthcontainer.DefaultScreen",
			"hc2": "wysiwyg.viewer.skins.screenwidthcontainer.BevelScreen",
			"hc3": "wysiwyg.viewer.skins.screenwidthcontainer.InnerShadowScreen"
		},
		"nickname": "header"
	},
	"wysiwyg.viewer.components.FooterContainer": {
		"skins": ["wysiwyg.viewer.skins.screenwidthcontainer.DefaultScreen", "wysiwyg.viewer.skins.screenwidthcontainer.BevelScreen", "wysiwyg.viewer.skins.screenwidthcontainer.InnerShadowScreen", "wysiwyg.viewer.skins.screenwidthcontainer.ThreeDeeScreen", "wysiwyg.viewer.skins.screenwidthcontainer.TransparentScreen", "wysiwyg.viewer.skins.screenwidthcontainer.LiftedTopScreen", "wysiwyg.viewer.skins.screenwidthcontainer.LiftedBottomScreen", "wysiwyg.viewer.skins.screenwidthcontainer.ShadowTopScreen", "wysiwyg.viewer.skins.screenwidthcontainer.IronScreen", "wysiwyg.viewer.skins.screenwidthcontainer.DoubleBorderScreen"],
		"dataTypes": [""],
		"styles": {
			"fc1": "wysiwyg.viewer.skins.screenwidthcontainer.DefaultScreen",
			"fc2": "wysiwyg.viewer.skins.screenwidthcontainer.BevelScreen",
			"fc3": "wysiwyg.viewer.skins.screenwidthcontainer.InnerShadowScreen"
		},
		"nickname": "footer"
	},
	"wysiwyg.viewer.components.PagesContainer": {
		"skins": ["wysiwyg.viewer.skins.screenwidthcontainer.TransparentScreen"],
		"dataTypes": [""],
		"styles": {
			"pc1": "wysiwyg.viewer.skins.screenwidthcontainer.TransparentScreen",
			"pc2": "wysiwyg.viewer.skins.screenwidthcontainer.TransparentScreen"
		},
		"nickname": "pagesContainer"
	},
	"wysiwyg.viewer.components.StripContainer": {
		"skins": ["wysiwyg.viewer.skins.stripContainer.DefaultStripContainer"],
		"dataTypes": ["StripContainer"],
		"styles": {
			"strc1": "wysiwyg.viewer.skins.stripContainer.DefaultStripContainer"
		},
		"nickname": "strip"
	},
	"wysiwyg.viewer.components.StripColumnsContainer": {
		"dataTypes": [""],
		"skins": ["wysiwyg.viewer.skins.stripContainer.DefaultStripContainer"],
		"propertyType": "StripColumnsContainerProperties",
		"styles": {
			"strc1": "wysiwyg.viewer.skins.stripContainer.DefaultStripContainer"
		},
		"requiredChildType": "wysiwyg.viewer.components.Column",
		"nickname": "columnStrip"
	},
	"wysiwyg.viewer.components.Column": {
		"skins": ["wysiwyg.viewer.skins.mediaContainer.DefaultMediaContainer"],
		"dataTypes": [""],
		"propertyType": "ColumnProperties",
		"styles": {
			"mc1": "wysiwyg.viewer.skins.mediaContainer.DefaultMediaContainer"
		},
		"nickname": "column"
	},
	"wysiwyg.viewer.components.MediaPlayer": {
		"skins": ["wysiwyg.viewer.skins.mediaPlayerSkin"],
		"dataTypes": [""],
		"designDataTypes": ["MediaPlayerDesignData"],
		"propertyType": "MediaPlayerProperties",
		"styles": {
			"mp1": "wysiwyg.viewer.skins.mediaPlayerSkin"
		},
		"nickname": "mediaPlayer"
	},
	"wysiwyg.viewer.components.MediaOverlayControls": {
		"skins": ["skins.viewer.mediaOverlayControlsDefaultSkin"],
		"dataTypes": [""],
		"designDataTypes": ["MediaControlsDesignData"],
		"propertyType": "MediaOverlayControlsProperties",
		"styles": {
			"mocntDefault": "skins.viewer.mediaOverlayControlsDefaultSkin"
		},
		"nickname": "mediaOverlayControls"
	},
	"wysiwyg.viewer.components.MediaControls": {
		"skins": ["skins.viewer.mediaControlsDarkSkin", "skins.viewer.mediaControlsLightSkin", "skins.viewer.mediaControlsNoControlsSkin"],
		"dataTypes": [""],
		"designDataTypes": ["MediaControlsDesignData"],
		"propertyType": "MediaControlsProperties",
		"styles": {
			"mcntLight": "skins.viewer.mediaControlsLightSkin",
			"mcntDark": "skins.viewer.mediaControlsDarkSkin"
		},
		"nickname": "mediaControls"
	},
	"wysiwyg.viewer.components.MediaControlPlay": {
		"skins": ["skins.viewer.mediaControlPlayDefaultSkin"],
		"dataTypes": [""],
		"styles": {
			"mcp1": "skins.viewer.mediaControlPlayDefaultSkin"
		},
		"nickname": "mediaControlPlay"
	},
	"wysiwyg.viewer.components.MediaControlVolume": {
		"skins": ["skins.viewer.mediaControlVolumeDefaultSkin"],
		"dataTypes": [""],
		"styles": {
			"mcv1": "skins.viewer.mediaControlVolumeDefaultSkin"
		},
		"nickname": "mediaControlVolume"
	},
	"wysiwyg.viewer.components.MediaControlFullscreen": {
		"skins": ["skins.viewer.mediaControlFullscreenDefaultSkin"],
		"dataTypes": [""],
		"styles": {
			"mcf1": "skins.viewer.mediaControlFullscreenDefaultSkin"
		},
		"nickname": "mediaControlFullscreen"
	},
	"wysiwyg.viewer.components.MediaControlProgress": {
		"skins": ["skins.viewer.mediaControlProgressDefaultSkin"],
		"dataTypes": [""],
		"styles": {
			"mcfpr1": "skins.viewer.mediaControlProgressDefaultSkin"
		},
		"nickname": "mediaControlProgress"
	},
	"wysiwyg.viewer.components.MediaControlTime": {
		"skins": ["skins.viewer.mediaControlTimeDefaultSkin"],
		"dataTypes": [""],
		"styles": {
			"mct1": "skins.viewer.mediaControlTimeDefaultSkin"
		},
		"nickname": "mediaControlTime"
	},
	"wysiwyg.viewer.components.MediaControlStoryboard": {
		"skins": ["skins.viewer.MediaControlStoryboardDefaultSkin"],
		"dataTypes": [""],
		"styles": {
			"mcsb1": "skins.viewer.mediaControlStoryboardDefaultSkin",
			"mcsb2": "skins.viewer.mediaControlStoryboardMinimalSkin"
		},
		"nickname": "mediaControlStoryboard"
	},
	"wysiwyg.viewer.components.ScreenWidthContainer": {
		"skins": ["wysiwyg.viewer.skins.screenwidthcontainer.DefaultScreen", "wysiwyg.viewer.skins.screenwidthcontainer.BevelScreen", "wysiwyg.viewer.skins.screenwidthcontainer.IronScreen", "wysiwyg.viewer.skins.screenwidthcontainer.DoubleBorderScreen"],
		"dataTypes": [""],
		"styles": {
			"sc1": "wysiwyg.viewer.skins.screenwidthcontainer.DefaultScreen",
			"sc2": "wysiwyg.viewer.skins.screenwidthcontainer.BevelScreen",
			"sc3": "wysiwyg.viewer.skins.screenwidthcontainer.IronScreen",
			"sc4": "wysiwyg.viewer.skins.screenwidthcontainer.DoubleBorderScreen"
		},
		"nickname": "strip"
	},
	"wysiwyg.viewer.components.VerticalLine": {
		"skins": ["wysiwyg.viewer.skins.line.VerticalSolidLine", "wysiwyg.viewer.skins.line.VerticalFadeNotchLeftLine", "wysiwyg.viewer.skins.line.VerticalFadeNotchRightLine", "wysiwyg.viewer.skins.line.VerticalNotchDashedLine", "wysiwyg.viewer.skins.line.VerticalShadowLeftLine", "wysiwyg.viewer.skins.line.VerticalShadowRightLine", "wysiwyg.viewer.skins.line.VerticalDoubleLine", "wysiwyg.viewer.skins.line.VerticalDashedLine", "wysiwyg.viewer.skins.line.VerticalDottedLine", "wysiwyg.viewer.skins.line.VerticalNotchLine", "wysiwyg.viewer.skins.line.VerticalSloopyLine", "wysiwyg.viewer.skins.line.VerticalArrowLineTop", "wysiwyg.viewer.skins.line.VerticalArrowLine", "wysiwyg.viewer.skins.line.VerticalIronLine"],
		"dataTypes": [""],
		"styles": {
			"vl1": "wyiwyg.viewer.skins.line.VerticalSolidLine",
			"vl2": "wysiwyg.viewer.skins.line.VerticalFadeNotchLeftLine",
			"vl3": "wysiwyg.viewer.skins.line.VerticalFadeNotchRightLine",
			"vl4": "wysiwyg.viewer.skins.line.VerticalNotchDashedLine"
		},
		"nickname": "line"
	},
	"wysiwyg.viewer.components.tpapps.TPAGluedWidget": {
		"skins": ["wysiwyg.viewer.skins.TPAWidgetSkin"],
		"dataTypes": ["TPAWidget"],
		"propertyType": "TPAGluedProperties",
		"styles": {
			"tpagw0": "wysiwyg.viewer.skins.TPAWidgetSkin"
		},
		"nickname": "gluedApp"
	},
	"wysiwyg.viewer.components.tpapps.TPAWidget": {
		"skins": ["wysiwyg.viewer.skins.TPAWidgetSkin"],
		"dataTypes": ["TPAWidget"],
		"styles": {
			"tpaw0": "wysiwyg.viewer.skins.TPAWidgetSkin"
		},
		"nickname": "widget"
	},
	"wysiwyg.viewer.components.tpapps.TPASection": {
		"skins": ["wysiwyg.viewer.skins.TPASectionSkin"],
		"dataTypes": ["TPA"],
		"styles": {
			"tpas0": "wysiwyg.viewer.skins.TPASectionSkin"
		},
		"nickname": "pageApp"
	},
	"wysiwyg.viewer.components.tpapps.TPAMultiSection": {
		"skins": ["wysiwyg.viewer.skins.TPASectionSkin"],
		"dataTypes": ["TPAMultiSection"],
		"styles": {
			"tpas0": "wysiwyg.viewer.skins.TPASectionSkin"
		},
		"nickname": "pageApp"
	},
	"wysiwyg.common.components.backtotopbutton.viewer.BackToTopButton": {
		"skins": ["wysiwyg.common.components.backtotopbutton.viewer.skins.BackToTopButtonSkin"],
		"dataTypes": [""],
		"styles": {
			"BackToTopButton_1": "wysiwyg.common.components.backtotopbutton.viewer.skins.BackToTopButtonSkin"
		},
		"nickname": "backToTop"
	},
	"wysiwyg.viewer.components.SiteBackground": {
		"skins": [],
		"dataTypes": ["BackgroundMedia"],
		"styles": {
			"siteBackground": "wysiwyg.viewer.skins.siteBackgroundSkin"
		},
		"nickname": "siteBackground"
	},
	"wysiwyg.viewer.components.dialogs.EnterPasswordDialog": {
		"skins": [],
		"dataTypes": [""],
		"styles": {},
		"nickname": "enterPasswordDialog"
	},
	"wysiwyg.viewer.components.dialogs.NotificationDialog": {
		"skins": [],
		"dataTypes": [""],
		"styles": {},
		"nickname": "notificationDialog"
	},
	"wysiwyg.viewer.components.dialogs.siteMemberDialogs.SignUpDialog": {
		"skins": [],
		"dataTypes": [""],
		"styles": {},
		"nickname": "signUpDialog"
	},
	"wysiwyg.viewer.components.dialogs.siteMemberDialogs.MemberLoginDialog": {
		"skins": [],
		"dataTypes": [""],
		"styles": {},
		"nickname": "memberLoginDialog"
	},
	"wysiwyg.viewer.components.dialogs.siteMemberDialogs.RequestPasswordResetDialog": {
		"skins": [],
		"dataTypes": [""],
		"styles": {},
		"nickname": "requestPasswordResetDialog"
	},
	"wysiwyg.viewer.components.dialogs.siteMemberDialogs.ResetPasswordDialog": {
		"skins": [],
		"dataTypes": [""],
		"styles": {},
		"nickname": "resetPasswordDialog"
	},
	"ecommerce.viewer.dialogs.EcomCheckoutMessageDialog": {
		"skins": [],
		"dataTypes": [""],
		"styles": {},
		"nickname": "ecomCheckoutMessageDialog"
	},
	"core.components.ZoomedImage": {
		"skins": [],
		"dataTypes": ["Image"],
		"styles": {},
		"nickname": "zoomedImage"
	},
	"wysiwyg.components.imageZoom": {
		"skins": [],
		"dataTypes": ["Image"],
		"styles": {},
		"nickname": "imageZoom"
	},
	"wysiwyg.components.ImageZoomDisplayer": {
		"skins": [],
		"dataTypes": ["Image"],
		"styles": {},
		"nickname": "imageZoomDisplayer"
	},
	"wixapps.integration.components.AppPartZoom": {
		"skins": [],
		"dataTypes": ["PermaLink"],
		"styles": {},
		"nickname": "appPartZoom"
	},
	"wysiwyg.viewer.components.MediaZoom": {
		"skins": [],
		"dataTypes": [""],
		"styles": {},
		"nickname": "mediaZoom"
	},
	"wysiwyg.viewer.components.MobileMediaZoom": {
		"skins": [],
		"dataTypes": [""],
		"styles": {},
		"nickname": "mobileMediaZoom"
	},
	"wysiwyg.viewer.components.inputs.ErasableTextInput": {
		"skins": ["wysiwyg.viewer.skins.appinputs.EcomErasableTextInputSkin"],
		"dataTypes": ["TextInput"],
		"propertyType": "TextInputProperties",
		"styles": {
			"ecom_eti1": "wysiwyg.viewer.skins.appinputs.EcomErasableTextInputSkin"
		},
		"nickname": "textInput"
	},
	"wysiwyg.common.components.InfoTip": {
		"skins": [],
		"dataTypes": [""],
		"styles": {},
		"nickname": "infoTip"
	},
	"wysiwyg.components.viewer.inputs.InputWithValidation": {
		"skins": [],
		"dataTypes": [""],
		"styles": {},
		"nickname": "input"
	},
	"wysiwyg.viewer.components.MessageView": {
		"skins": [],
		"dataTypes": [""],
		"styles": {},
		"nickname": "messageView"
	},
	"wixapps.integration.components.Area": {
		"skins": [],
		"dataTypes": [""],
		"styles": {},
		"nickname": "area"
	},
	"wysiwyg.viewer.components.inputs.TextAreaInput": {
		"skins": ["TextAreaDefaultSkin", "wysiwyg.viewer.skins.input.TextAreaInputSkin", "wysiwyg.viewer.skins.appinputs.AppsTextAreaInputSkin", "wysiwyg.viewer.skins.appinputs.AppsTextAreaInputSkinNoValidation"],
		"dataTypes": ["TextAreaInput"],
		"propertyType": "TextAreaInputProperties",
		"styles": {},
		"nickname": "textBox"
	},
	"wixapps.integration.components.inputs.TextArea": {
		"skins": [],
		"dataTypes": ["TextAreaInput"],
		"propertyType": "TextAreaInputProperties",
		"styles": {},
		"nickname": "textArea"
	},
	"wixapps.integration.components.Toggle": {
		"skins": [],
		"dataTypes": [""],
		"styles": {},
		"nickname": "toggle"
	},
	"wysiwyg.viewer.components.MobileActionsMenu": {
		"skins": ["wysiwyg.viewer.skins.mobile.MobileActionsMenuSkin"],
		"dataTypes": [""],
		"styles": {},
		"nickname": "actionMenu"
	},
	"wysiwyg.viewer.components.Table": {
		"skins": [],
		"dataTypes": [""],
		"styles": {},
		"nickname": "table"
	},
	"wysiwyg.viewer.components.tpapps.TPAModal": {
		"skins": [],
		"dataTypes": [""],
		"styles": {},
		"nickname": "tpaModal"
	},
	"wysiwyg.viewer.components.tpapps.TPAPopup": {
		"skins": [],
		"dataTypes": [""],
		"styles": {},
		"nickname": "tpaPopup"
	},
	"wysiwyg.viewer.components.tpapps.TPAPreloaderOverlay": {
		"skins": [],
		"dataTypes": [""],
		"styles": {},
		"nickname": "preloaderOverly"
	},
	"wysiwyg.viewer.components.tpapps.TPAUnavailableMessageOverlay": {
		"skins": [],
		"dataTypes": [""],
		"styles": {},
		"nickname": "unavailableMessageOverlay"
	},
	"tpa.viewer.classes.TPAWorker": {
		"skins": [],
		"dataTypes": [""],
		"styles": {},
		"nickname": "tpaWorker"
	},
	"wysiwyg.viewer.components.tpapps.TPAPlaceholder": {
		"skins": [],
		"dataTypes": [""],
		"styles": {},
		"nickname": "tpaPlaceholder"
	},
	"wysiwyg.viewer.components.cloud.CloudGluedWidget": {
		"skins": [],
		"dataTypes": [""],
		"styles": {},
		"nickname": "cloudWidget"
	},
	"wysiwyg.viewer.components.cloud.CloudWidget": {
		"skins": [],
		"dataTypes": [""],
		"styles": {},
		"nickname": "cloudWidget"
	},
	"wysiwyg.viewer.components.background.bgMedia": {
		"skins": [],
		"dataTypes": [],
		"styles": {
			"bgMedia": "skins.viewer.bgMedia.bgMediaSkin"
		},
		"nickname": "bgMedia"
	},
	"wysiwyg.viewer.components.background.bgImage": {
		"skins": [],
		"dataTypes": ["Image"],
		"styles": {
			"bgImage": "skins.viewer.bgImage.bgImageSkin"
		},
		"nickname": "bgImage"
	},
	"wysiwyg.viewer.components.background.html5Video": {
		"skins": [],
		"dataTypes": ["WixVideo"],
		"styles": {
			"bgVideo": "skins.viewer.bgVideo.html5VideoSkin"
		},
		"nickname": "html5Video"
	},
	"wysiwyg.viewer.components.background.iframeVideo": {
		"skins": [],
		"dataTypes": ["WixVideo"],
		"styles": {
			"iframeVideo": "skins.viewer.bgVideo.iframeVideoSkin"
		},
		"nickname": "iframeVideo"
	},
	"wysiwyg.viewer.components.background.bgOverlay": {
		"skins": [],
		"dataTypes": [],
		"styles": {
			"bgOverlay": "skins.viewer.bgOverlay.bgOverlaySkin"
		},
		"nickname": "bgOverlay"
	},
	"wysiwyg.viewer.components.BoxSlideShow": {
		"skins": ["wysiwyg.common.components.boxSlideShow.viewer.skins.thinArrowsLargeSelectedCircleSkin", "wysiwyg.common.components.boxSlideShow.viewer.skins.thinArrowsSkin", "wysiwyg.common.components.boxSlideShow.viewer.skins.squareButtonsSkin", "wysiwyg.common.components.boxSlideShow.viewer.skins.longArrowsLargeSelectedCircleSkin"],
		"dataTypes": [""],
		"propertyType": "BoxSlideShowProperties",
		"styles": {
			"boxSlide1": "wysiwyg.common.components.boxSlideShow.viewer.skins.thinArrowsLargeSelectedCircleSkin",
			"boxSlide2": "wysiwyg.common.components.boxSlideShow.viewer.skins.thinArrowsSkin",
			"boxSlide3": "wysiwyg.common.components.boxSlideShow.viewer.skins.squareButtonsSkin",
			"boxSlide4": "wysiwyg.common.components.boxSlideShow.viewer.skins.longArrowsLargeSelectedCircleSkin"
		},
		"requiredChildType": "wysiwyg.viewer.components.BoxSlideShowSlide",
		"nickname": "slideshow"
	},
	"wysiwyg.viewer.components.StripContainerSlideShow": {
		"skins": ["wysiwyg.common.components.stripSlideShow.viewer.skins.thinArrowsLargeSelectedCircleSkin", "wysiwyg.common.components.stripSlideShow.viewer.skins.thinArrowsSkin", "wysiwyg.common.components.stripSlideShow.viewer.skins.squareButtonsSkin", "wysiwyg.common.components.stripSlideShow.viewer.skins.longArrowsLargeSelectedCircleSkin"],
		"dataTypes": [""],
		"propertyType": "StripContainerSlideShowProperties",
		"styles": {
			"stripSlide1": "wysiwyg.common.components.stripSlideShow.viewer.skins.thinArrowsLargeSelectedCircleSkin",
			"stripSlide2": "wysiwyg.common.components.stripSlideShow.viewer.skins.thinArrowsSkin",
			"stripSlide3": "wysiwyg.common.components.stripSlideShow.viewer.skins.squareButtonsSkin",
			"stripSlide4": "wysiwyg.common.components.stripSlideShow.viewer.skins.bottomArrowsLargeSelectedCircleSkin"
		},
		"requiredChildType": "wysiwyg.viewer.components.StripContainerSlideShowSlide",
		"nickname": "fullWidthSlides"
	},
	"wysiwyg.viewer.components.BoxSlideShowSlide": {
		"skins": [],
		"dataTypes": ["BoxSlideShowSlide"],
		"propertyTypes": ["", "BoxSlideShowSlideProperties"],
		"designDataTypes": ["MediaContainerDesignData"],
		"styles": {
			"boxSlideShowSlide1": "wysiwyg.common.components.boxSlideShowSlide.viewer.skins.boxSlideShowSlideSkin"
		},
		"nickname": "slideshowSlide"
	},
	"wysiwyg.viewer.components.StripContainerSlideShowSlide": {
		"skins": ["wysiwyg.common.components.stripSlideShowSlide.viewer.skins.stripSlideShowSlideSkin"],
		"dataTypes": ["StripContainerSlideShowSlide"],
		"propertyTypes": ["", "StripContainerSlideShowSlideProperties"],
		"designDataTypes": ["MediaContainerDesignData"],
		"styles": {
			"stripSlideShowSlide1": "wysiwyg.common.components.stripSlideShowSlide.viewer.skins.stripSlideShowSlideSkin"
		},
		"nickname": "slide"
	},
	"wysiwyg.viewer.components.inputs.Checkbox": {
		"skins": ["wysiwyg.viewer.skins.input.CheckboxBasicSkin"],
		"dataTypes": ["CheckboxInput"],
		"propertyType": "CheckboxProperties",
		"nickname": "checkbox",
		"styles": {}
	},
	"wysiwyg.viewer.components.inputs.RadioButton": {
		"skins": ["wysiwyg.common.components.radio.viewer.skins.RadioButtonDefaultSkin"],
		"dataTypes": ["RadioButton"],
		"propertyType": "RadioButtonProperties",
		"styles": {},
		"nickname": "radioButton"
	},
	"wysiwyg.viewer.components.inputs.RadioGroup": {
		"skins": ["skins.input.RadioGroupDefaultSkin"],
		"dataTypes": ["RadioGroup"],
		"propertyType": "RadioGroupProperties",
		"styles": {
			"rg1": "skins.input.RadioGroupDefaultSkin"
		},
		"nickname": "radioGroup"
	},
	"wysiwyg.viewer.components.inputs.CheckboxGroup": {
		"skins": ["skins.input.CheckboxGroupDefaultSkin"],
		"dataTypes": ["CheckboxGroup"],
		"propertyType": "CheckboxGroupProperties",
		"styles": {
			"cg1": "skins.input.CheckboxGroupDefaultSkin"
		},
		"nickname": "checkboxGroup"
	},
	"wysiwyg.viewer.components.inputs.FileUploader": {
		"skins": ["wysiwyg.viewer.skins.FileUploaderDefaultSkin"],
		"dataTypes": ["FileUploader"],
		"propertyType": "FileUploaderProperties",
		"styles": {
			"fu1": "wysiwyg.viewer.skins.FileUploaderDefaultSkin"
		},
		"nickname": "uploadButton"
	},
	"wysiwyg.viewer.components.inputs.uploadName": {
		"skins": ["wysiwyg.viewer.skins.UploadNameDefaultSkin"],
		"dataTypes": ["UploadName"],
		"propertyType": "UploadNameProperties",
		"styles": {
			"un1": "wysiwyg.viewer.skins.UploadNameDefaultSkin"
		},
		"nickname": "uploadName"
	},
	"wysiwyg.viewer.components.inputs.DatePicker": {
		"skins": ["wysiwyg.viewer.skins.input.DatePickerDefaultSkin", "wysiwyg.viewer.skins.input.DatePickerTextBetweenNavSkin", "wysiwyg.viewer.skins.input.DatePickerTextYearNavSkin"],
		"dataTypes": ["DatePicker"],
		"propertyType": "DatePickerProperties",
		"styles": {},
		"nickname": "datePicker"
	},
	"wysiwyg.viewer.components.ImageButtonWithText": {
		"skins": ["wysiwyg.viewer.skins.IconLeftImageButtonWithText"],
		"dataTypes": ["ImageButtonWithText"],
		"propertyType": "DefaultProperties",
		"styles": {
			"imgBtnWTxt1": "wysiwyg.viewer.skins.IconLeftImageButtonWithText"
		},
		"nickname": "button"
	},
	"wysiwyg.viewer.components.Grid": {
		"skins": [],
		"dataTypes": ["Grid"],
		"propertyType": "GridProperties",
		"styles": {},
		"nickname": "table"
	},
	"wysiwyg.viewer.components.Repeater": {
		"skins": ["wysiwyg.viewer.skins.area.DefaultAreaSkin"],
		"propertyTypes": ["CardsLayoutProperties", "VerticalLayoutProperties"],
		"dataTypes": ["Repeater"],
		"styles": {
			"c1": "wysiwyg.viewer.skins.area.DefaultAreaSkin"
		},
		"nickname": "repeater"
	},
	"wysiwyg.viewer.components.MediaContainer": {
		"skins": ["wysiwyg.viewer.skins.mediaContainer.DefaultMediaContainer"],
		"dataTypes": [""],
		"styles": {
			"mc1": "wysiwyg.viewer.skins.mediaContainer.DefaultMediaContainer"
		},
		"nickname": "container"
	},
	"platform.components.AppController": {
		"skins": ["platform.components.skins.controllerSkin", "platform.components.skins.controllerIconAndNameSkin"],
		"dataTypes": ["AppController"],
		"styles": {
			"controller1": "platform.components.skins.controllerSkin"
		},
		"nickname": "controller"
	},
	"platform.components.AppWidget": {
		"skins": [],
		"dataTypes": ["AppController"],
		"styles": {
			"appWidget1": "platform.components.skins.AppWidgetSkin"
		},
		"nickname": "appWidget"
	},
	"wysiwyg.viewer.components.LanguageSelector": {
		"skins": ["wysiwyg.viewer.skins.LanguageSelectorSkin"],
		"dataTypes": ["LanguageSelector", ""],
		"propertyType": "LanguageSelectorProperties",
		"styles": {},
		"nickname": "languageSelector"
	},
	"wixui.RichTextBox": {
		"skins": ["wixui.skins.RichTextBox"],
		"dataTypes": ["RichTextBox"],
		"propertyType": "RichTextBoxProperties",
		"nickname": "richTextBox",
		"styles": {
			"wdj1": "wixui.skins.RichTextBox"
		}
	},
	"wixui.VideoPlayer": {
		"skins": ["wixui.skins.VideoPlayer"],
		"dataTypes": ["VideoPlayer"],
		"propertyType": "VideoPlayerProperties",
		"nickname": "videoPlayer",
		"styles": {
			"vp1": "wixui.skins.VideoPlayer"
		}
	},
	"wixui.ToggleSwitch": {
		"skins": ["wixui.skins.ToggleSwitch"],
		"dataTypes": ["ToggleSwitch"],
		"propertyType": "ToggleSwitchProperties",
		"nickname": "switch",
		"styles": {
			"ts1": "wixui.skins.ToggleSwitch"
		}
	},
	"wixui.Pagination": {
		"skins": ["wixui.skins.Pagination"],
		"dataTypes": ["Pagination"],
		"propertyType": "PaginationProperties",
		"nickname": "pagination",
		"styles": {
			"pag1": "wixui.skins.Pagination"
		}
	},
	"wixui.Tags": {
		"skins": ["wixui.skins.Tags"],
		"dataTypes": ["Tags"],
		"propertyType": "TagsProperties",
		"nickname": "tags",
		"styles": {
			"tags1": "wixui.skins.Tags"
		}
	},
	"wixui.RatingsDisplay": {
		"skins": ["wixui.skins.RatingsDisplay"],
		"dataTypes": ["RatingsDisplay"],
		"propertyType": "RatingsDisplayProperties",
		"nickname": "ratingsDisplay",
		"styles": {
			"rd1": "wixui.skins.Rating"
		}
	},
	"wysiwyg.viewer.components.Popover": {
		"skins": [],
		"dataTypes": [""],
		"propertyType": "PopoverProperties",
		"styles": {
			"pop1": "wysiwyg.viewer.skins.popover.PopoverSkin"
		},
		"nickname": "popover"
	},
	"wixui.Slider": {
		"skins": ["wixui.skins.Slider"],
		"dataTypes": ["Slider"],
		"propertyType": "SliderProperties",
		"nickname": "slider",
		"styles": {
			"slider1": "wixui.skins.Slider"
		}
	},
	"wixui.TimePicker": {
		"skins": ["wixui.skins.TimePicker"],
		"dataTypes": ["TimePickerData"],
		"propertyType": "TimePickerProperties",
		"nickname": "timePicker",
		"styles": {
			"tp1": "wixui.skins.TimePicker"
		}
	},
	"wixui.AddressInput": {
		"skins": ["wixui.skins.AddressInput"],
		"dataTypes": ["AddressInput"],
		"propertyType": "AddressInputProperties",
		"nickname": "addressInput",
		"styles": {
			"ai1": "wixui.skins.AddressInput"
		}
	},
	"wixui.StylableLine": {
		"skins": ["wixui.skins.Skinless"],
		"styles": {},
		"nickname": "stylableLine",
		"isStylableComp": true
	},
	"wixui.RatingsInput": {
		"skins": ["wixui.skins.Rating"],
		"dataTypes": ["RatingsInput"],
		"propertyType": "RatingsInputProperties",
		"nickname": "ratingsInput",
		"styles": {
			"ri1": "wixui.skins.Rating"
		}
	}
}
