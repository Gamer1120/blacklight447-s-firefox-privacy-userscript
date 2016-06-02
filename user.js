// firefox privacy setup, last time edited: 02 06 2016 //


// geo switches //
// Preference name                                              Value //
user_pref("geo.enabled",                                        false);
user_pref("geo.wifi.logging.enabled",                           false);
user_pref("geo.wifi.uri", "http://127.0.0.1");


// media switches //
// Preference name                                              Value //
user_pref("media.peerconnection.ice.default_address_only"       true);
user_pref("media.peerconnection.enabled",		        false);
user_pref("media.navigator.enabled",                            false);
user_pref("media.webspeech.recognition.enable",                 false);
user_pref("media.getusermedia.screensharing.enabled",		false);
user_pref("media.getusermedia.screensharing.allowed_domains",   "");
user_pref("media.eme.enabled",                                  false);
user_pref("media.eme.apiVisible",                               false);
user_pref("media.gmp-eme-adobe.enabled",                        false);
user_pref("media.video_stats.enabled",                          false);
user_pref("media.gmp-gmpopenh264.enabled",		        false);
user_pref("media.gmp-manager.url",		                "");
user_pref("media.gmp-provider.enabled",                         false);
user_pref("media.peerconnection.turn.disable",                  true);
user_pref("media.peerconnection.use_document_iceservers",       false);
user_pref("media.peerconnection.video.enabled",                 false);
user_pref("media.peerconnection.identity.timeout",              false);
user_pref("media.autoplay.enabled",                             false);
user_pref("media.getusermedia.screensharing.allowed_domains",   "");

// device switches //
// Preference name                                              Value //
user_pref("device.sensors.enabled",                             false);


// camera switches //
// Preference name                                              Value //
user_pref("camera.control.face_detection.enabled",              false);
user_pref("camera.contro.autofocus_moving_callback.enabled",    false);


// devtool switches //
// Preference name                                              Value //
user_pref("devtools.webide.autoinstallADBHelper",               false);
user_pref("devtools.webide.autoinstallFxdtAdapters",            false);
user_pref("devtools.debugger.remote-enabled",                   false);
user_pref("devtools.webide.enabled",                            false);
user_pref("devtools.chrome.enabled",                            false);
user_pref("devtools.debugger.force-local",                      true);


// network switches //
// Preference name                                              Value //
user_pref("network.http.spdy.enabled",                          false); 
user_pref("network.http.spdy.enabled.v3",                       false);
user_pref("network.http.spdy.enabled.v3-1",                     false);
user_pref("network.http.spdy.enabled.http2",                    false);
user_pref("network.proxy.socks_remote_dns",                     true);
user_pref("network.jar.open-unsafe-types",		        false);
user_pref("network.prefetch-next",		                false);
user_pref("network.dns.disablePrefetch",		        true);
user_pref("network.dns.disablePrefetchFromHTTPS",		true);
user_pref("network.predictor.enabled",                          false);
user_pref("network.seer.enabled",                               false);
user_pref("network.http.speculative-parallel-limit",		0);
user_pref("network.negotiate-auth.allow-insecure-ntlm-v1",      false);
user_pref("network.http.referer.spoofSource",                   true);
user_pref("network.cookie.cookieBehavior",                      2);
user_pref("network.cookie.thirdparty.sessionOnly",		true);
user_pref("network.cookie.lifetimePolicy",                      2);
user_pref("network.stricttransportsecurity.preloadlist",        true);
user_pref("network.http.sendSecureXSiteReferrer",               false);
user_pref("network.http.redirection-limit",                     10);
user_pref("network.http.sendSecureXSiteReferrer",               false);
user_pref("network.http.proxy.keep-alive",                      false);
user_pref("network.IDN_show_punycode",                          true);
user_pref("Network.cookie.p3p", "frfrarar");
user_pref("network.allow-experiments",                          false);


// plugin(s) switches //
// Preference name                                              Value //
user_pref("plugin.state.flash",		                            0);
user_pref("plugin.state.libgnome-shell-browser-plugin",         0);
user_pref("plugins.click_to_play",                              true);
user_pref("plugins.update.notifyUser",		                true);
user_pref("plugins.hide_infobar_for_outdated_plugin",		false);
user_pref("plugin.scan.plid.all",                               false);
user_pref("plugin.scan.Acrobat",                                99999);
user_pref("plugin.scan.Quicktime",                              99999);
user_pref("plugin.scan.WindowsMediaPlayer",                     99999);
user_pref("plugin.default.state",                               0);
user_pref("plugin.defaultXpi.state",                            0);
user_pref("plugin.sessionPermissionNow.intervalInMinutes",      0);
user_pref("plugins.notifyMissingFlash",                         false);


// javascript //
// Preference name                                              Value //
user_pref("javascript.options.methodjit.chrome",		false);
user_pref("javascript.options.methodjit.content",		false);
user_pref("javascript.options.asmjs",		                false);
user_pref("javascript.enabled",                                 false);


// datareport switches //
// Preference name                                              Value //
user_pref("datareporting.healthreport.uploadEnabled",           false);
user_pref("datareporting.healthreport.service.enabled",         false);
user_pref("datareporting.policy.dataSubmissionEnabled",         false);
user_pref("datareporting.healthreport.documentServerURI",       "");
user_pref("datareporting.policy.dataSubmissionEnabled.v2",      false);
user_pref("datareporting.healthreport.about.reportUrl",         "");
user_pref("datareporting.healthreport.about.reportUrlUnified",  "");
user_pref("datareporting.healthreport.documentServerURI",       "");


// toolkit switches //
// Preference name                                              Value //
user_pref("toolkit.telemetry.enabled",                          false);
user_pref("toolkit.telemetry.unified",                          false);
user_pref("toolkit.telemetry.server",                           "");
user_pref("toolkit.telemetry.archive.enabled",                  false);
user_pref("toolkit.telemetry.rejected",                         true);
user_pref("toolkit.telemetry.prompted",                         2);
user_pref("toolkit.telemetry.cachedClientID",                   "");

// extension  switches //
// Preference name                                              Value //
user_pref("extensions.getAddons.cache.enabled",                 false);
user_pref("extensions.update.enabled",                          true);
user_pref("extensions.blocklist.enabled",                       true);
user_pref("extensions.webservice.discoverURL",                  "http://127.0.0.1");

// experiment switches //
// Preference name                                              Value //
user_pref("experiments.supported",		                false);
user_pref("experiments.enabled",		                false);
user_pref("experiments.manifest.uri",                           "");
user_pref("experiments.activeExperiment",                       false);


// social switches //
// Preference name                                              Value //
user_pref("social.whitelist",                                   "");
user_pref("social.toast-notifications.enabled",                 false);
user_pref("social.shareDirectory",                              "");
user_pref("social.remote-install.enabled",                      false);
user_pref("social.directories",                                 "");
user_pref("social.share.activationPanelEnabled",                false);


// dom switches //
// Preference name                                              Value //
user_pref("dom.storage.enabled",                                false);
user_pref("dom.indexedDB.enabled",                              true);
user_pref("dom.webnotifications.serviceworker.enabled",         false);
	  user_pref("dom.disable_image_src_set",                true);
user_pref("dom.battery.enabled",                                false);
user_pref("dom.telephony.enabled",                              false);
user_pref("dom.event.clipboardevents.enabled",                  false);
user_pref("dom.enable_performance",		                false);
user_pref("dom.gamepad.enabled",		                false);
user_pref("dom.vibrator.enabled",                               false);
user_pref("dom.vr.enabled",		                        false);
user_pref("dom.vr.oculus.enabled",                              false);
user_pref("dom.vr.oculus050.enabled",                           false);
user_pref("dom.netinfo.enabled",                                false);
user_pref("dom.network.enabled",                                false);
user_pref("dom.workers.sharedWorkers.enabled",                  false);
user_pref("dom.w3c_touch_events.enabled",                       0);
user_pref("dom.enable_resource_timing",                         false);
user_pref("dom.enable_user_timing",                             false);
user_pref("dom.idle-observers-api.enabled",                     false);
user_pref("dom.webnotifications.enabled",		        false);
user_pref("dom.push.connection.enabled",                        false);
user_pref("dom.push.serverURL",                                 "");
user_pref("dom.push.udp.wakeupEnabled",                         false);
user_pref("dom.push.userAgentID",                               "");
user_pref("dom.push.enabled",                                   false);
user_pref("dom.disable_beforeunload",                           true);
user_pref("dom.push.enabled",                                   false);
user_pref("dom.event.contextmenu.enabled",                      false);
user_pref("dom.disable_window_open_feature.location",           true); 
user_pref("dom.disable_window_open_feature.menubar",            true);
user_pref("dom.disable_window_open_feature.resizable",          true);
user_pref("dom.disable_window_open_feature.scrollbars",         true);
user_pref("dom.disable_window_open_feature.status",             true);
user_pref("dom.disable_window_open_feature.toolbar",            true);
user_pref("dom.disable_window_flip",                            true); 
user_pref("dom.disable_window_move_resize",                     true);
user_pref("dom.disable_window_open_feature.close",              true);
user_pref("dom.disable_window_open_feature.minimizable",        true);
user_pref("dom.disable_window_open_feature.personalbar",        true); 
user_pref("dom.disable_window_open_feature.titlebar",           true);
user_pref("dom.disable_window_status_change",                   true);
user_pref("dom.allow_scripts_to_close_windows",                 false);
user_pref("dom.ipc.plugins.enabled",                            false);
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);



// security switches //
// Preference name                                              Value //
user_pref("security.mixed_content.block_active_content",        true);
user_pref("security.mixed_content.block_display_content",       true);
user_pref("security.xpconnect.plugin.unrestricted",             false);
user_pref("security.fileuri.strict_origin_policy",              true);
user_pref("security.csp.experimentalEnabled",		        true);
user_pref("security.csp.enable",		                true);
user_pref("security.sri.enable",		                true);
user_pref("security.mixed_content.block_active_content",        true);
user_pref("security.dialog_enable_delay",                       1000);


// security -crypto- switches //
// Preference name                                              Value //
user_pref("security.warn_entering_weak",		        true);
user_pref("security.ssl.warn_missing_rfc5746",                  1);
user_pref("security.OCSP.enabled",                              1);
user_pref("security.ssl.enable_ocsp_stapling",		        true);
user_pref("security.OCSP.require",                              true);
user_pref("security.enable_tls_session_tickets",                false);
user_pref("security.tls.version.min",		                3);
user_pref("security.tls.version.max",		                3);
user_pref("security.enable_ssl3",                               false);
user_pref("security.cert_pinning.enforcement_level",            2);
user_pref("security.pki.sha1_enforcement_level",                2);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken",  	true);
user_pref("security.ssl.errorReporting.automatic",              false);
user_pref("security.ssl.errorReporting.enabled",                false);
user_pref("security.ssl.errorReporting.url",                    "");
user_pref("security.ssl3.rsa_null_sha",		                false);
user_pref("security.ssl3.rsa_null_md5",		                false);
user_pref("security.ssl3.ecdhe_rsa_null_sha",		        false);
user_pref("security.ssl3.ecdhe_ecdsa_null_sha",		        false);
user_pref("security.ssl3.ecdh_rsa_null_sha",		        false);
user_pref("security.ssl3.ecdh_ecdsa_null_sha",		        false);
user_pref("security.ssl3.rsa_seed_sha",		                false);
user_pref("security.ssl3.rsa_rc4_40_md5",		        false);
user_pref("security.ssl3.rsa_rc2_40_md5",		        false);
user_pref("security.ssl3.rsa_1024_rc4_56_sha",                  false);
user_pref("security.ssl3.rsa_camellia_128_sha",		        false);
user_pref("security.ssl3.ecdhe_rsa_aes_128_sha",		false);
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha",		false);
user_pref("security.ssl3.ecdh_rsa_aes_128_sha",		        false);
user_pref("security.ssl3.ecdh_ecdsa_aes_128_sha",		false);
user_pref("security.ssl3.dhe_rsa_camellia_128_sha",		false);
user_pref("security.ssl3.dhe_rsa_aes_128_sha",		        false);
user_pref("security.ssl3.ecdh_ecdsa_rc4_128_sha",		false);
user_pref("security.ssl3.ecdh_rsa_rc4_128_sha",		        false);
user_pref("security.ssl3.ecdhe_ecdsa_rc4_128_sha",		false);
user_pref("security.ssl3.ecdhe_rsa_rc4_128_sha",		false);
user_pref("security.ssl3.rsa_rc4_128_md5",		        false);
user_pref("security.ssl3.rsa_rc4_128_sha",		        false);
user_pref("security.tls.unrestricted_rc4_fallback",		false);
user_pref("security.tls.insecure_safe_negotiation",             false);
user_pref("security.ssl.require_safe_negotiation",              true);
user_pref("security.ssl3.dhe_dss_des_ede3_sha",		        false);
user_pref("security.ssl3.dhe_rsa_des_ede3_sha",		        false);
user_pref("security.ssl3.ecdh_ecdsa_des_ede3_sha",              false);
user_pref("security.ssl3.ecdh_rsa_des_ede3_sha",	        false);
user_pref("security.ssl3.ecdhe_ecdsa_des_ede3_sha",	        false);
user_pref("security.ssl3.ecdhe_rsa_des_ede3_sha",	        false);
user_pref("security.ssl3.rsa_des_ede3_sha",	                false);
user_pref("security.ssl3.rsa_fips_des_ede3_sha",		false);
user_pref("security.ssl3.ecdh_rsa_aes_256_sha",		        false);
user_pref("security.ssl3.ecdh_ecdsa_aes_256_sha",	        false);
user_pref("security.ssl3.rsa_camellia_256_sha",                 false);
user_pref("security.ssl3.ecdhe_rsa_aes_256_sha",	        true);
user_pref("security.ssl3.ecdhe_ecdsa_aes_256_sha",	        true);
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_gcm_sha256",	true);
user_pref("security.ssl3.ecdhe_rsa_aes_128_gcm_sha256",         true);
user_pref("security.ssl3.dhe_rsa_camellia_256_sha",	        false);
user_pref("security.ssl3.dhe_rsa_aes_256_sha",	                false);
user_pref("security.ssl3.dhe_dss_aes_128_sha",	                false);
user_pref("security.ssl3.dhe_dss_aes_256_sha",	                false);
user_pref("security.ssl3.dhe_dss_camellia_128_sha",             false);
user_pref("security.ssl3.dhe_dss_camellia_256_sha",	        false);
user_pref("security.ssl3.rsa_aes_256_sha",	                true);
user_pref("security.ssl3.rsa_aes_128_sha",    	                true);


//  browser switches //
// Preference name                                              Value //
user_pref("browser.usedOnWindows10",                            false);
user_pref("browser.usedOnWindows10.introURL",                   "");
user_pref("browser.search.countryCode",                         "US");
user_pref("browser.search.region",                              "US");
user_pref("browser.download.manager.addToRecentDocs",           false);
user_pref("browser.cache.disk.enable",                          false);
user_pref("browser.cache.disk_cache_ssl",                       false);
user_pref("browser.cache.memory.enable",                        false);
user_pref("browser.history_expire_visits",                      0);
user_pref("browser.sessionstore.privacy_level",		        2);
user_pref("browser.helperApps.deleteTempFileOnExit",	        true);
user_pref("browser.pagethumbnails.capturing_disabled",          true);
user_pref("browser.download.useDownloadDir",		        false);
user_pref("browser.sessionstore.postdata",                      0);
user_pref("browser.sessionstore.enabled",                       false);
user_pref("browser.cache.offline.enable",                       false);
user_pref("browser.aboutHomeSnippets.updateUrl",	        "");
user_pref("browser.search.update",	                        false);
user_pref("browser.search.suggest.enabled",                     false);
user_pref("browser.urlbar.suggest.searches",   	                false);
user_pref("browser.casting.enabled",		                false);
user_pref("browser.search.geoip.url",	                        "");
user_pref("browser.newtabpage.enhanced",	                false);
user_pref("browser.newtab.preload",	                        false);
user_pref("browser.newtabpage.directory.ping",                  "");
user_pref("browser.newtabpage.directory.source",                "data:text/plain,{}");
user_pref("browser.selfsupport.url",                            "");
user_pref("browser.safebrowsing.enabled",                       false);
user_pref("browser.safebrowsing.malware.enabled",               false);
user_pref("browser.safebrowsing.downloads.remote.enabled",      false);
user_pref("browser.safebrowsing.reportMalwareMistakeURL",       "");
user_pref("browser.safebrowsing.reportPhishMistakeURL",         "");
user_pref("browser.safebrowsing.reportPhishURL",                "");
user_pref("browser.safebrowsing.provider.google.appRepURL",     "");
user_pref("browser.safebrowsing.provider.google.gethashURL",    "");
user_pref("browser.safebrowsing.provider.google.reportURL",     "");
user_pref("browser.safebrowsing.provider.google.updateURL",     "");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL",   "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL",    "");
user_pref("browser.safebrowsing.downloads.enabled",             false);
user_pref("browser.safebrowsing.downloads.remote.enabled",      false);
user_pref("browser.display.use_document_fonts",	                0);
user_pref("browser.urlbar.filter.javascript",	                true);
user_pref("browser.send_pings",                                 false);
user_pref("browser.send_pings.require_same_host",	        true);
user_pref("browser.fixup.alternate.enabled",                    false);
user_pref("browser.aboutHomeSnippets.updateUrl",                "https://127.0.0.1");
user_pref("browser.eme.ui.enabled",                             false);
user_pref("browser.download.manager.addToRecentDocs",           false); 
user_pref("browser.pagethumbnails.capturing_disabled",          true);
user_pref("browser.pagethumbnails.storage_version",             3);
user_pref("browser.casting.enabled",                            false);
user_pref("browser.sessionhistory.max_entries",                 2);
user_pref("browser.link.open_newwindow.restriction",            0);
user_pref("browser.search.geoSpecificDefaults",                 false);
user_pref("browser.trackingprotection.gethashURL",              "");
user_pref("browser.trackingprotection.getupdateURL",            "");
user_pref("browser.search.param.yahoo-fr",                      "");
user_pref("browser.search.param.yahoo-fr-ja",                   "");


//  font switches //
// Preference name                                              Value //
user_pref("font.name.serif.x-unicode",                          "Georgia");
user_pref("font.name.serif.x-western",                          "Georgia"); 
user_pref("font.name.sans-serif.x-unicode",                     "Arial");
user_pref("font.name.sans-serif.x-western",                     "Arial");  
user_pref("font.name.monospace.x-unicode",                      "Lucida Console");
user_pref("font.name.monospace.x-western",                      "Lucida Console"); 


// privacy switches //
// Preference name                                              Value //
user_pref("privacy.donottrackheader.enabled",                   true);
user_pref("privacy.donottrackheader.value",                     1); 
user_pref("privacy.trackingprotection.enabled",                 true);
user_pref("privacy.trackingprotection.pbmode.enabled",          false);

// webgl switches //
// Preference name                                              Value //
user_pref("webgl.disabled",                                     true);
user_pref("webgl.min_capability_mode",                          true);
user_pref("webgl.disable-extensions",                           true);


// gfx switches //
// Preference name                                              Value //
user_pref("gfx.font_rendering.opentype_svg.enabled",            false);
user_pref("gfx.downloadable_fonts.enabled",                     true);
user_pref("gfx.layerscope.enabled",                             false);
user_pref("gfx.direct2d.disabled",                              true);


// app switches //
user_pref("app.update.enabled",                                 true);
user_pref("app.update.auto",                                    true);
user_pref("app.update.disable_button.showUpdateHistory",        false);
user_pref("app.update.service.enabled",                         false);
user_pref("app.update.showInstalledUI",                         true);
user_pref("app.update.silent",                                  false);
user_pref("app.update.staging.enabled",                         false);


// etc switches //
// Preference name                                              Value //
user_pref("loop.enabled",                                       false);
user_pref("loop.server",                                        "");
user_pref("loop.logDomains",                                    false);
user_pref("gmp-eme-adobe.enabled",                              false);
user_pref("middlemouse.contentLoadURL",                         false);
user_pref("clipboard.autocopy",                                 false);
user_pref("keyword.enabled",		                        false);
user_pref("general.buildID.override",		                "20100101");
user_pref("pdfjs.disabled",                                     true);
user_pref("pdfjs.enableWebGL",                                  false);
user_pref("layout.css.visited_links_enabled",                   false);
user_pref("breakpad.reportURL",                                 "");
user_pref("pageThumbs.enabled",                                 false);
user_pref("beacon.enabled",                                     false);
user_pref("layers.acceleration.disabled",                       true);
