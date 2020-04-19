// ==UserScript==
// @name         VK Dark
// @namespace    https://github.com/
// @version      0.0.9
// @description  Изменяет внешний вид Вконтакте на темный
// @author       Dmitriy1921
// @downloadURL  https://github.com/Dmitiry1921/VK-Dark/raw/master/vkdark.user.js
// @updateURL    https://github.com/Dmitiry1921/VK-Dark/raw/master/vkdark.meta.js
// @supportURL   https://vk.com/dmitriy1921
// @homepage     https://github.com/Dmitiry1921/VK-Dark#readme
// @include      http://vk.com/*
// @include      https://vk.com/*
// @include      https://vkpay.io/*
// @include      https://new.broadcast.vkforms.ru/*
// @include      https://poll.vip243.vkforms.ru/*
// @include      https://donate.vip243.vkforms.ru/*
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @run-at       document-end
// ==/UserScript==
// Пункт меню, добавляется после старта браузера
// GM_registerMenuCommand('Разработчик', () => {
//     console.log('GM_registerMenuCommand is work');
// });
const css = `*::-webkit-scrollbar {
  width: 5px;
  max-height: 5px;
}
*::-webkit-scrollbar-thumb {
  background-color: #878787;
  border-radius: 50px;
}
.fakeinput,
div[contenteditable=true],
input.big_text,
input.search,
input.text,
textarea,
.page_media_poll_wrap,
.ui_tabs.ui_tabs_box,
*::-webkit-scrollbar-track-piece,
.im-page--chat-header,
.tabbed_box .summary_tab .summary_tab3:hover,
.tabbed_box .summary_tab_sel .summary_tab3:hover,
.tabbed_box .summary_tab_sel a:hover,
.tabbed_box .summary_tab a:hover,
.friends_import_row:hover,
.audio_pl_snippet,
div.fc_tab_txt,
.ui_tabs_header,
.wdd_text {
  background: none;
}
*::-webkit-scrollbar-thumb:hover {
  background-color: #aaa;
}
body {
  background: #1a1a1a !important;
}
*::-webkit-scrollbar,
.article_ed_layer,
.article_layer,
.article,
.photos_container_edit_grid .photos_photo_edit_row,
.pe_filter_thumb.pe_filter_selected,
.pe_actions,
.page_actions_wrap,
#top_profile_menu,
.piechart_col_header th,
.ui_scroll_default_theme > .ui_scroll_bar_container > .ui_scroll_bar_outer > .ui_scroll_bar_inner,
.audio_page_player2 .audio_page_player_track_slider.slider.slider_size_1 .slider_slide,
.photos_choose_upload_area,
.web_cam_photo,
.photos_choose_bottom,
.deep_active .replies .reply_field_wrap .reply_field,
.deep_active .replies .wl_reply_form_wrap .reply_field_wrap .reply_field,
.deep_active.wall_module .replies .reply_field_wrap .reply_field,
.deep_active.wall_module .replies .wl_reply_form_wrap .reply_field_wrap .reply_field,
.deep_active.wall_module .wl_replies_block_wrap .reply_field_wrap .reply_field,
.deep_active.wall_module .wl_replies_block_wrap .wl_reply_form_wrap .reply_field_wrap .reply_field,
.deep_active .wl_replies_block_wrap .reply_field_wrap .reply_field,
.deep_active .wl_replies_block_wrap .wl_reply_form_wrap .reply_field_wrap .reply_field,
#mv_comments_header,
.gifts_box_header,
.gifts_constr_preview,
.wk_voting_option_bar,
.result_list ul li.active,
.selector_container,
.result_list ul,
.summary_tab2:hover,
input.dark,
.sticker_hints_tt,
.deep_active .replies .reply_fakebox,
.like_share_emoji_wrap div[contenteditable=true],
.tt_default,
.tt_default_right,
.AudioPlaylistSnippet,
.ActionsMenu__inner,
.ui_actions_menu,
.ms_items_more,
.media_link__label,
.feed_friends_recomm .ui_gallery_item:first-child,
.privacy_dropdown .header,
.privacy_dropdown .body,
.privacy_dropdown .l_item,
.privacy_dropdown .l_item_sel,
.Dropdown__in,
.emoji_tabs,
.emoji_bg,
.video_choose_upload_area,
.video_add_external,
.video_choosebox_bottom,
.im-to-end:focus .im-to-end__button,
.im-to-end:hover .im-to-end__button,
.im-to-end__button,
.links-list__item:hover,
.PopupHeader,
.ChatSettingsMembersWidget__add:before,
.im_stickers_my_tip,
.medadd_c_linkcon,
.scrollbar_inner,
.scrollbar_hovered,
.scrollbar_inner:hover,
.friends_cur_filters .token,
.idd_popup .idd_items_content,
.idd_popup .idd_header_wrap,
.audio_pl_edit_box .ape_cover,
#audio_status_tt .audio_status_sep,
.audio_row__more_actions .audio_row__more_action:hover,
#groups_menu_items .groups_edit_menu_items .groups_edit_menu_item .groups_edit_menu_item_line,
.market_item_photo_container,
.market_comments_header:hover,
.market_comments_header,
.wke_b:hover,
.mv_desc .can_edit:hover,
.EditableLabel:hover .EditableLabel__text,
.MainActions_action_3owFz:after,
.MainStatus_button_1p4_4,
.Button_block_2bjH0.Button_secondary_3vjw8,
.Card__hr,
.wddi_over,
.im-page.im-page_classic.im-page_group .im-group-online,
.media_voting_option,
.sticker_hints_arrow.sticker_left,
.sticker_hints_arrow.sticker_right,
.page_block .ui_rmenu,
.mv_info .ui_rmenu,
.bd_arrow,
.bd_day_head,
.msg,
.settings_separated_row + .settings_separated_row:after,
input.text.ts_input,
.poster__change-bkg-btn,
input.text.ts_input:focus,
.audio_pl_edit_box .ape_add_audios_btn:hover,
.audio_pl_edit_box .ape_add_pl_audios_btn:hover,
.docs_choose_rows .docs_item:hover,
.docs_choose_upload_area,
.docs_choose_upload_area:hover,
.button_gray button.hover,
.button_gray button:hover,
.flat_button.secondary.hover,
.flat_button.secondary:hover,
textarea,
.pv_cont .pv_can_edit:hover,
em.ts_clist_hl,
.audio_w_covers .audio_row.ui_gridsorter_moveable .audio_row_content,
.ui_search_sugg_list,
.im-page .im-page--history-new-bar:after,
.im-page .im-page--history-new-bar:before,
.ListItem--border:before,
.replies_open,
.wr_header,
.wall_module .page_media_thumbed_link,
.button_gray button,
.flat_button.secondary,
.im_stickers_bl_wrap,
.ap_layer_wrap .ap_layer__content,
div.wdd,
div.wdd.wdd_focused,
.ui_search_new .ui_search_input_inner,
.ui_search_new.ui_search_dark .ui_search_input_inner,
.payments_money_transfer_comment,
.payments_money_transfer_amount,
.im_stickers_buy_header,
.im-page .im-page--top-date-bar,
#mail_box_editable,
.im-mess .im-mess--post,
.feedback_row_answer,
.payments_money_transfer_amount_wrap,
.top_notify_show_all,
.im-mess.im-mess_light,
.bd_day_cell.holiday,
.bd_arrow,
.bd_day_head,
.msg,
.settings_separated_row + .settings_separated_row:after,
input.text.ts_input,
.poster__change-bkg-btn {
  background-color: #242424 !important;
}
.disabled.selector_container,
.dividing_line ul li {
  border-color: #3b3f41 !important;
}
#page_header_cont .back,
.fc_tab_head,
.box_title_wrap,
.im-page_classic.im-page .im-page--header {
  border-color: #1a1a1a !important;
}
body,
h2,
.ui_search_field,
.module_header .header_top,
.ui_tab_sel,
.ui_tabs .ui_tab_sel,
.ui_tabs_box .ui_tab_sel,
.nim-dialog .nim-dialog--preview,
.nim-dialog .nim-dialog--text-preview,
.im-mess-stack .im-mess-stack--content .im-mess-stack--pname > a,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered .nim-dialog--preview,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered .nim-dialog--text-preview,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic .nim-dialog--preview,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic .nim-dialog--text-preview,
.nim-dialog:not(.nim-dialog_deleted):hover .nim-dialog--preview,
.nim-dialog:not(.nim-dialog_deleted):hover .nim-dialog--text-preview,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered .nim-dialog--preview > b,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic .nim-dialog--preview > b,
.nim-dialog:not(.nim-dialog_deleted):hover .nim-dialog--preview > b,
.im-page .im-search-results-head,
.audio_page__shuffle_all .audio_page__shuffle_all_button,
.subheader,
h4.subheader,
.right_list_header,
a.wall_reply_greeting,
.im-fwd.im-fwd_msg .im-fwd--messages,
.mv_title,
.mv_recom_block_title,
.page_block_header,
.tabbed_box .summary_tab_sel .summary_tab3,
.box_title_wrap.box_grey .box_title,
.feedback_header,
.feedback_header b,
#payments_box,
ul.listing li span,
.audio_row .audio_row__lyrics .audio_row__lyrics_inner,
.top_notify_cont .feedback_header,
.feedback_content .feedback_text .wall_post_text,
.feedback_content .feedback_text .wall_reply_text,
.top_notify_header,
.friends_field,
.right_list_field,
.ui_tab,
.ui_tabs .ui_tab,
.audio_page_player .audio_page_player_title_performer,
.im_stickerpack_name,
.bd_header_info,
.bd_header_month,
.selector_container td.selector input.focused,
.selector_container td.selector input.selected,
.selector_input.selected,
.profile_warning_label,
.first > #stats_cont h4,
.first > .stats_head,
.tu_row_comment,
.tickets_reply_text,
.tickets_header,
.help_tile__title_a,
.settings_votes_income .settings_history_amount,
.audio_page_player2 .audio_page_player_title_song,
.im-replied--text,
.ChatSettingsInfo__title,
.wall_module.wl_post .page_media_caption,
.wall_module.wl_post .wall_post_text,
.wl_replies_header,
#payments_money_transfer_summary,
.audio_pl_snippet2 .audio_shuffle_all_button,
.owner_photo_additional,
.apps_access_item_info b,
.apps_options_bar .apps_options_bar_left .app_summary_name,
.flat_button,
.article,
.photos_edit_selection_header,
.help_table_questions__title,
.page_actions_item,
.page_actions_dd_label,
.page_actions_header_inner,
.top_profile_mrow,
#stats_cont h4,
.stats_head,
.graph_menu_item.graph_menu_item_sel,
.graph_menu_item.graph_menu_item_sel:hover,
.feed_updates .explain,
.feed_update_row .post_author,
.ui_gallery_wall_cards .wall_card__title_link,
.im-page .im-page--mess-search,
.result_list ul li.active,
.result_list ul li,
.summary_tab3,
input.dark,
.pedit_label,
.pedit_label_box,
.selector_container td.selector .token_inner,
.selector_container td.selector .token_prefix,
#pedit_result .msg_text,
.pedit_row_notice,
.AudioPlaylistSnippet .ActionButton--shuffle__text,
.ActionsMenu__item,
.ui_actions_menu_item,
.notify_sources_tt_content .line_cell .info,
.notify_sources_tt_content .line_cell,
.privacy_dropdown .item_sel,
.privacy_dropdown .item_sel_plus,
.privacy_dropdown .item,
.privacy_dropdown .item_sel,
.privacy_dropdown .item_sel_plus,
.privacy_dropdown .header,
.privacy_dropdown .l_header .l_header_label,
.privacy_dropdown .l_item,
.privacy_dropdown .l_item_sel,
.page_media_event .page_media_event_name,
.Dropdown__in,
.audio_subscribe_promo__title,
.audio_subscribe_promo__text,
.page_name,
h1.page_name,
.top_notify_cont,
.audio_pl_snippet2 .audio_pl_snippet__description,
.audio_page_layout .audio_recoms_blocks .recoms_special_block_title,
.audio_page_layout .audio_section__recoms .recoms_special_block_title,
._audio_pl.audio_pl_top_audios .audio_row .audio_row__inner:before,
.Tabs__item--active > *,
.im_sticker_bl_name,
.im_stickers_my_tip,
.im_stickers_my_name,
.reply_submit_hint_opts .radiobtn,
.ui_search_fltr_label,
.ui_search_fltr,
.friends_cur_filters .token,
.ui_search_fltr b,
.idd_popup .idd_item,
.idd_popup .idd_header,
.idd_wrap .idd_selected_value,
.audio_pl_edit_box .ape_cover_title,
.gtop_complex_message .gtop_content .gtop_header,
.gtop_complex_message .gtop_content .gtop_message,
#apps_layer .apps_header .apps_name,
#group_section_menu .module_body .ui_gallery .ui_gallery_item .groups_menu_item .groups_menu_item_title,
#groups_menu_promo .apps_group_catalog_promo_header,
.app_widget_list_row,
.market_item_title,
.market_item_price,
.market_comments_summary,
.page_block_sub_header,
.microdata_price,
.msg_text,
#mv_pl_tt .mv_tt_playlist,
.MainActions_itemText_1gXiE,
.MainServices_text_2jbbb,
.MainPromos_item_3RzR1,
.MainHead_block_2hP2d .MainHead_balanceTitle_dHcnD,
.MainServices_icon_black_1bdck,
.MainStatus_button_1p4_4,
.HistoryListItem_amount_rPK5B,
.Mailings_desktop .GroupPage__description,
.Button--secondary__29JKy,
.Card h1,
.Card__header,
.Input__label,
.im-aside-notice-promo.group-messages-notify-block .im-aside-notice--title,
.media_voting_question,
.media_voting_option_text,
.mott_text,
.verified_tt_text,
.tt_w .tt_text,
.ui_search_sugg_list,
.im-page .im-page--history-new-bar:after,
.im-page .im-page--history-new-bar:before,
.ListItem--border:before,
.replies_open,
.wr_header,
.wall_module .page_media_thumbed_link,
.button_gray button,
.flat_button.secondary,
.im_stickers_bl_wrap,
.ap_layer_wrap .ap_layer__content,
div.wdd,
div.wdd.wdd_focused,
.ui_search_new .ui_search_input_inner,
.ui_search_new.ui_search_dark .ui_search_input_inner,
.payments_money_transfer_comment,
.payments_money_transfer_amount,
.im_stickers_buy_header,
.im-page .im-page--top-date-bar,
.article > h1,
.wdd_text,
.profile_info_header,
.im-page .im-page--history-new-bar > span,
.photos_period_delimiter_fixed,
.tabbed_box .summary_tab_sel .summary_tab2,
.audio_pl_edit_box .ape_header,
.group_l_row,
.page_block,
.mv_info,
.fakeinput,
div[contenteditable=true],
input.big_text,
input.search,
input.text,
textarea,
.page_media_poll_wrap,
.ui_tabs.ui_tabs_box,
.profile_info_edit,
.box_title_wrap.box_grey,
.eltt,
input.text.ts_input:focus,
.article > h1,
.im-page--back-btn:hover,
.page_block_header,
#mail_box_editable,
.audio_pl_snippet .audio_pl_snippet__info_title,
.im-page--title-main-inner,
.nim-dialog.nim-dialog_classic.nim-dialog_unread-out .nim-dialog--inner-text,
.nim-dialog.nim-dialog_classic.nim-dialog_unread-out.nim-dialog_muted .nim-dialog--inner-text {
  color: #ffffff !important;
}
.im-create,
.im-create .im-create--tabs,
.ui_rmenu_item:hover,
.ui_rmenu_subitem:hover,
.ui_rmenu_item_sel,
.ui_rmenu_item_sel:hover,
.poster__toolbar,
.poster__slider-arrow,
.apps_i_wrap,
.apps_i_policy,
.apps_options_bar,
.apps_footer,
.audio_pl_snippet2,
#fc_contacts,
.fc_content,
.chat_onl_inner,
.fc_tab,
.fc_tab_notify,
#wk_box,
.pv_author_block,
.faq_tabs.ui_tabs,
.tickets_post_field,
.owner_photo_additional,
.MessageForward__content,
.article_ed_layer .article_ed_layer__header,
.article_layer .article_layer__content_footer,
.photos_edit_selection_header,
.pe_tabs_panel,
.audio_page_player2 .audio_page_player_track_slider.slider.slider_size_1 .slider_back,
.photo_upload_separator,
.wall_module .reply_box,
.wall_module .reply_fakebox_wrap,
.wall_module .reply_fakebox,
.tickets_header,
.box_msg,
.box_msg_gray,
.result_list ul li.active,
.disabled.selector_container,
.selector_container td.selector .token_inner,
.selector_container td.selector .token_prefix,
.emoji_sticker_item.over,
.emoji_sticker_item:hover,
.im-page--toolsw,
.AudioPlaylistSnippet .ActionButton--shuffle:hover,
.im-chat-input,
.ActionsMenu__item--hover,
.ActionsMenu__item:hover,
.ui_actions_menu_item:hover,
.media_selector .ms_items_more .ms_item:hover,
.notify_sources_tt_content .content:not(:hover) .line_cell.selected,
.notify_sources_tt_content .line_cell:hover,
.wall_module:not(.search_results) .post--with-likes:not(.post_copy):not(.post_btl):not(.post_wf):not(.post_fr_likes) .wall_text .media_link:last-child,
.privacy_dropdown .item_sel,
.privacy_dropdown .item_sel_plus,
.privacy_dropdown .l_header,
.privacy_dropdown .l_header .l_header_label,
.privacy_dropdown .l_item:hover,
.privacy_dropdown .l_item_sel:hover,
.thumbed_link__label,
.Dropdown__item:hover,
.mention_tt_actions,
.emoji_tt_wrap,
.emoji_tab_sel,
.emoji_tab_sel:hover,
.emoji_tab:hover,
.emoji_tabs_l_s:hover,
.emoji_tabs_r_s:hover,
.emoji_tabs_l_s,
.emoji_tabs_r_s,
.emoji_tab:hover,
.emoji_shop:hover,
.emoji_cat_title,
.im_sticker_bl,
.ui_search_fltr,
.idd_popup .idd_item.idd_hl,
#apps_layer .apps_header_wrapper,
#groups_menu_items .groups_edit_menu_items .group_apps_list_row_drag_wrapper,
.ui_ownblock:hover,
.market_item_content,
.bookmark_footer,
.wl_post_reply_form_forbidden,
.wpost_post,
.wke_controls,
.wke_page_title_cont,
.pages_header_info,
.pages_history_header_wrap,
#mv_pl_tt .mv_tt_add_playlist:hover,
#mv_pl_tt .mv_tt_add_playlist,
.Panel_block_2RPF-,
.TopMenu_block_1KqlS,
.Panel_footer_epjyB,
.Panel_header_2eRoj,
.Page_contentPanel_3WDOJ,
.audio_page_layout .audio_search_wrapper,
.CatalogBlock--divided,
.Mailings_desktop .GroupPage__footer,
.Button--secondary__29JKy,
.DesktopRoot,
.Card,
.wddi,
.audio_page_player2 .audio_page_player_status.audio_page_player_btn_enabled .btn_icon,
.im-aside-notice,
.im-page.im-page_classic.im-page_group .im-group-online .im-group-online--inner,
.media_voting,
.im-page_classic.im-page .im-chat-history-resize,
.audio_row__more_actions .audio_row__more_action,
.im-page_classic.im-page .im-page--dcontent,
.ui_grey_block,
.ui_search,
.submit_post,
.im_stickers_store_wrap .ui_tabs,
.page_block_header,
.audio_page_player2.audio_page_player_fixed,
div.fc_clist_filter_wrap,
.flat_button.ui_load_more_btn,
.settings_block_footer,
.page_block,
.mv_info,
.top_profile_mrow:hover,
.profile_info_header,
.im-page .im-page--history-new-bar > span,
.photos_period_delimiter_fixed,
.tabbed_box .summary_tab_sel .summary_tab2,
.audio_pl_edit_box .ape_header,
.group_l_row,
.page_block_header,
.audio_page_player.audio_page_player_fixed,
.audio_page_layout .audio_friends_list,
.audio_layer_container .audio_page_player,
.im-page_classic.im-page .im-page--chat-body-wrap-inner,
.im-page .im-page--history-new-bar,
.box_body,
.fc_msgs_unread,
.pv_cont .narrow_column,
.box_body .im_stickers_store_wrap .ui_tabs,
.ap_layer .audio_pl_snippet .audio_pl_snippet__header_inner,
.audio_pl_snippet .audio_pl_snippet__header,
.photos_container .photos_row,
.box_controls,
.ts_cont_wrap,
.feedback_row_wrap.unread:not(.feedback_row_touched),
.pv_white_bg,
.pva_period_fixed,
.wk_history_tabs,
.ChatSettings__content,
.ChatSettingsInfo,
.List,
.ChatSettingsMembersWidget,
.Button--mobile,
.ChatSettingsInvitationLink,
.ChatSettingsResetInvitationLink__text,
.SubmitArea,
.audio_pl_snippet2 .audio_shuffle_all_button:hover,
.audio_page_layout .audio_page_separator,
.audio_page_layout .has_friends_block .audio_page__rows_wrap,
.ui_search_new.ui_search_field_empty .ui_search_button_search,
input.BlockSearchInput,
.photos_container_edit_grid .photos_photo_edit_row_desc_placeholder,
.online.mobile:after,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered .nim-dialog--photo .online.mobile:after,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic .nim-dialog--photo .online.mobile:after,
.nim-dialog:not(.nim-dialog_deleted):hover .nim-dialog--photo .online.mobile:after,
.stl_active.over_fast #stl_bg,
.wall_module .post_like:hover,
.wall_module .post_reply:hover,
.wall_module .post_share:hover,
.audio_row:hover:not(.audio_row__current) .audio_row_content,
.left_count_wrap,
.mail_box_cont,
#group_apps_list .group_apps_list_rows .group_apps_list_row .group_apps_edit,
.apps_i_panel,
.page_status_editor .editor,
.im-page-pinned,
.wall_module .reply_form,
.profile_info_edit,
.box_title_wrap.box_grey,
.eltt,
.bd_day_cell,
.im-chat-input--scroll,
#top_notify_wrap,
.im-mess.im-mess_selected + .im-mess:before,
.im-mess.im-mess_unread + .im-mess:before,
.im-page--back-btn:hover,
.im-chat-input .im-chat-input--txt-wrap {
  background-color: #3b3f41 !important;
}
.wall_module .replies_list,
.ui_rmenu_sep {
  border-top: #A9B7C5 !important;
}
.rb_box_wrap,
.poster__view #poster-field-msg,
.article_snippet .article_snippet__read_btn,
.article_snippet .article_snippet__action_btn_text,
.profile_info_header .im-mess-stack--lnk,
.popup_box_container .im-mess-stack--lnk {
  color: #000000 !important;
}
.page_photo.page_action_menu_groups .group_notification_settings .group_notification_setting:hover,
.page_actions_header,
.page_actions_item:hover:not(.grey_hoverable),
.tu_last:hover,
.im-page .im-page--mess-search,
.gifts_constr_option:hover,
.audio_pl_edit_box .ape_pl_item:hover,
.im-navigation--to-end .im-navigation__button,
.im-mess.im-mess_selected:last-child:before,
.im-mess.im-mess_unread:last-child:before,
.im-page_classic.im-page .im-page--chat-input .im-chat-input,
.im-page_classic .im-page--chat-header .im-page--toolsw {
  background-color: #626568 !important;
}
#page_header_cont .back,
.fc_tab_head,
.box_title_wrap {
  background-color: #2d2f30 !important;
}
a.fc_contact_over,
.chat_tab_wrap:hover,
.ui_search_sugg_list .ui_search_suggestion_selected,
.nim-dialog.nim-dialog_classic.nim-dialog_unread-out .nim-dialog--inner-text,
.nim-dialog.nim-dialog_classic.nim-dialog_unread-out.nim-dialog_muted .nim-dialog--inner-text,
.nim-dialog.nim-dialog_classic:not(.nim-dialog_deleted).nim-dialog_hovered.nim-dialog_unread-out .nim-dialog--inner-text,
.nim-dialog.nim-dialog_classic:not(.nim-dialog_deleted).nim-dialog_hovered.nim-dialog_unread-out.nim-dialog_muted .nim-dialog--inner-text,
.nim-dialog.nim-dialog_classic:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic.nim-dialog_unread-out .nim-dialog--inner-text,
.nim-dialog.nim-dialog_classic:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic.nim-dialog_unread-out.nim-dialog_muted .nim-dialog--inner-text,
.nim-dialog.nim-dialog_classic:not(.nim-dialog_deleted):hover.nim-dialog_unread-out .nim-dialog--inner-text,
.nim-dialog.nim-dialog_classic:not(.nim-dialog_deleted):hover.nim-dialog_unread-out.nim-dialog_muted .nim-dialog--inner-text,
.audio_layer_container .audio_friend:hover,
.audio_page__shuffle_all .audio_page__shuffle_all_button:hover,
.im-mess.im-mess_selected:not(.im-mess_is_editing),
.im-mess.im-mess_selected:not(.im-mess_is_editing):hover,
.my_current_info:hover,
.no_current_info:hover,
.profile_more_info_link:hover,
.audio_row.audio_row__current .audio_row_content,
.tabbed_box .summary_tab_sel a:hover,
.tabbed_box .summary_tab a:hover,
.top_notify_cont .feedback_row:not(.dld).hover,
.top_notify_cont .feedback_row:not(.dld):hover,
a.ts_contact.active,
a.ts_search_link.active,
.ListItem--active,
.ListItem--can-be-hovered.ListItem--selectable:hover,
.article_ed_layer .article_ed_layer__list_item:not(.article_ed_layer__list_item_current):hover,
.media_voting_can_vote.media_voting_clickable_option .media_voting_option_wrap:not(.media_voting_option_selected):hover .media_voting_option {
  background-color: rgba(0, 0, 0, 0.2) !important;
}
.fc_contact_name {
  color: #4a76a8 !important;
}
a,
.ui_rmenu_item,
.ui_rmenu_subitem,
.post_like,
.post_reply,
.post_share,
.fc_tab_notify,
.page_media_poll .page_poll_row_percent {
  color: #4a76a8 !important;
}
.im-page_classic.im-page .im-page--dcontent,
.ui_grey_block,
.submit_post,
.im_stickers_store_wrap .ui_tabs,
.page_block_header,
.audio_page_player2.audio_page_player_fixed {
  border-color: #242424 !important;
}
.im-page--header,
.im-page--dialogs-search {
  margin-left: 0;
}
.ui_search_sugg_list,
.im-page .im-page--history-new-bar:after,
.im-page .im-page--history-new-bar:before,
.ListItem--border:before,
.replies_open,
.wr_header,
.wall_module .page_media_thumbed_link,
.button_gray button,
.flat_button.secondary,
.im_stickers_bl_wrap,
.ap_layer_wrap .ap_layer__content,
div.wdd,
div.wdd.wdd_focused,
.ui_search_new .ui_search_input_inner,
.ui_search_new.ui_search_dark .ui_search_input_inner,
.payments_money_transfer_comment,
.payments_money_transfer_amount,
.im_stickers_buy_header,
.im-page .im-page--top-date-bar {
  border-color: #242424 !important;
}
.im_fwd_log_wrap,
.im_wall_log_wrap {
  border-left: 1px solid #242424 !important;
}
.online:after {
  border: 2px solid #3b3f41 !important;
}
#mail_box_editable {
  border-color: #242424 !important;
}
.olist_item_wrap,
.group_list_row {
  border-bottom: 1px solid #242424 !important;
}
.audio_page_player.audio_page_player_fixed,
.audio_page_layout .audio_friends_list,
.audio_layer_container .audio_page_player,
.im-page_classic.im-page .im-page--chat-body-wrap-inner,
.im-page .im-page--history-new-bar,
.box_body,
.fc_msgs_unread,
.pv_cont .narrow_column,
.box_body .im_stickers_store_wrap .ui_tabs,
.ap_layer .audio_pl_snippet .audio_pl_snippet__header_inner,
.audio_pl_snippet .audio_pl_snippet__header,
.photos_container .photos_row,
.box_controls,
.ts_cont_wrap,
.feedback_row_wrap.unread:not(.feedback_row_touched),
.pv_white_bg,
.pva_period_fixed,
.wk_history_tabs,
.ChatSettings__content,
.ChatSettingsInfo,
.List,
.ChatSettingsMembersWidget,
.Button--mobile,
.ChatSettingsInvitationLink,
.ChatSettingsResetInvitationLink__text,
.SubmitArea,
.audio_pl_snippet2 .audio_shuffle_all_button:hover {
  border-color: #3b3f41 !important;
}
.audio_page_layout .audio_page_separator,
.audio_page_layout .has_friends_block .audio_page__rows_wrap,
.ui_search_new.ui_search_field_empty .ui_search_button_search,
input.BlockSearchInput,
.photos_container_edit_grid .photos_photo_edit_row_desc_placeholder {
  border-color: #242424 !important;
}
.im-mess .im-mess--post,
.feedback_row_answer,
.payments_money_transfer_amount_wrap,
.top_notify_show_all,
.im-mess.im-mess_light {
  border-color: #242424 !important;
}
.page_photos_module,
.page_square_photo {
  height: 135px;
}
.page_photos_module {
  padding: 5px;
}
.page_square_photo {
  width: 135px;
}
.audio_page_player .audio_page_player_title {
  color: inherit;
}
.fakeinput,
div[contenteditable=true],
input.big_text,
input.search,
input.text,
textarea,
.page_media_poll_wrap,
.ui_tabs.ui_tabs_box {
  border-color: #242424 !important;
}
.online.mobile:after,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered .nim-dialog--photo .online.mobile:after,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic .nim-dialog--photo .online.mobile:after,
.nim-dialog:not(.nim-dialog_deleted):hover .nim-dialog--photo .online.mobile:after {
  border: 2px solid #3b3f41 !important;
}
.nim-dialog .nim-dialog--name .nim-dialog--name-w,
.audio_row .audio_row__performer,
.im-popular--name,
.im-page .nim-conversation-search-row .nim-dialog--name .nim-dialog--name-w,
.audio_page_layout .audio_item__title,
.audio_page_layout .audio_item__title > a,
.page_counter .count,
.profile_more_info_link,
.wall_module .media_desc .a,
.ui_tab_plain {
  color: #4a76a8 !important;
}
#side_bar ol li .left_row {
  color: #4a76a8 !important;
}
#side_bar ol li .left_row:hover {
  background: rgba(0, 0, 0, 0.2) !important;
}
.nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic,
.nim-dialog:not(.nim-dialog_deleted):hover,
.im_msg_audiomsg .audio-msg-track:not(.audio-msg-player):hover,
.flat_button.ui_load_more_btn:hover,
.im-mess.im-mess_search:hover,
.olist_item_wrap:hover,
.feedback_row_clickable:not(.feedback_row_touched):hover,
.feed_row ~ .feed_row .feedback_row_clickable:not(.feedback_row_touched):hover,
.top_notify_show_all:hover {
  background: rgba(0, 0, 0, 0.2) !important;
  border-color: #242424 !important;
}
.nim-dialog:not(.nim-dialog_deleted).nim-dialog.nim-dialog_classic.nim-dialog_unread,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog.nim-dialog_hovered,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog:hover,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered + .im-search-results-head,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered + .nim-dialog,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected + .im-search-results-head,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected + .nim-dialog,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic + .im-search-results-head,
.nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic + .nim-dialog,
.nim-dialog:not(.nim-dialog_deleted):hover + .im-search-results-head,
.nim-dialog:not(.nim-dialog_deleted):hover + .nim-dialog,
.nim-dialog .nim-dialog--content,
#side_bar .more_div,
.post_full_like_wrap,
#ads_left.ads_left_empty + .left_menu_nav_wrap,
.counts_module,
.wide_column .page_top,
.module,
.wall_module .reply ~ .reply .dld,
.wall_module .reply ~ .reply .reply_wrap,
.im-page .im-page--dialogs-footer,
.ui_tabs,
.pv_author_block,
.pv_comments,
.feed_new_posts,
.group_l_row,
.group_l_row:last-child,
.group_edit_row_sep,
.media_preview_has_medias,
.like_cont,
.page_status_editor .editor,
div.page_status_input,
.top_notify_header,
.friends_list_bl,
.article_ed_layer .article_ed_layer__publish_settings .article_ed_layer__publish_settings_header,
.settings_line,
.settings_privacy_row,
.settings_bl_row,
.settings_apps .apps_settings_row_wrap,
.settings_block_msg,
.settings_table_row,
.audio_pl_edit_box .ape_add_audios_btn,
.audio_pl_edit_box .ape_add_pl_audios_btn,
.audio_pl_edit_box .ape_header,
.fakeinput:focus,
div[contenteditable=true]:focus,
input.big_text:focus,
input.dark:focus,
input.search:focus,
input.text:focus,
textarea:focus,
.box_title_wrap.box_grey,
.docs_choose_rows .docs_item,
.audio_layer_container .audio_page__footer,
.eltt,
input.dark,
.pedit_separator,
.olist_botsh .box_controls,
.info_msg,
.feed_row ~ .feed_row .feedback_row,
.feed_row ~ .feed_row .feedback_sticky_row,
.feed_row ~ .feed_row_fb_hidden .feed_row:first-child .feedback_row,
.feedback_sticky_rows:not(:empty) + .feed_row .feedback_row,
.feedback_sticky_rows:not(:empty) + .feed_row .feedback_sticky_row,
.ts_search_sep,
.im-page-pinned,
.top_notify_cont .top_notify_header,
.tickets_post_field,
.tu_row,
.help_table_question,
.help_tile_alert,
.settings_history_table tr td,
.media_selector .ms_item.ms_item_article,
.audio_pl_snippet2 .audio_pl_snippet__header,
.owner_photo_additional,
.profile_info_block,
#submit_post_box:not(.shown):not(.own_field) .poster__open-btn-wrapper,
.poster__toolbar,
.apps_i_panel,
.apps_i_policy,
.article_layer .article_layer__content_footer,
.photos_edit_selection_header,
.page_actions_wrap,
.page_actions_inner,
.tickets_header,
.tickets_reply_row,
.tickets_post_form__panel,
.top_profile_sep,
#top_profile_menu,
#stats_cont h4,
.stats_head,
.piechart_table tr td,
.stats_time_info,
.feed_updates .wall_module .feed_row .post,
.photos_choose_bottom,
.deep_active.wl_post .replies .wl_replies_empty,
.deep_active.wl_post.wall_module .replies .wl_replies_empty,
.deep_active.wl_post.wall_module .wl_replies_block_wrap .wl_replies_empty,
.deep_active.wl_post .wl_replies_block_wrap .wl_replies_empty,
.deep_active .replies .reply_fakebox,
.deep_active.wall_module .replies .reply_fakebox,
.deep_active.wall_module .wl_replies_block_wrap .reply_fakebox,
.deep_active .wl_replies_block_wrap .reply_fakebox,
.deep_active .replies .replies_wrap_deep,
.deep_active.wall_module .replies .replies_wrap_deep,
.deep_active.wall_module .wl_replies_block_wrap .replies_wrap_deep,
.deep_active .wl_replies_block_wrap .replies_wrap_deep,
.im-page .im-page--mess-search,
.mv_actions_block,
.wall_module .reply_box,
.wall_module .reply_fakebox_wrap,
.mv_info_narrow_column,
.gifts_section_row,
.gifts_constr_steps_wrap,
.box_msg,
.box_msg_gray,
.disabled.selector_container table.selector_table,
.selector_container table.selector_table,
.result_list,
.poster__open-btn-wrapper,
.sticker_hints_tt,
.tt_default,
.tt_default_right,
.im-page--toolsw,
.im-page--chat-header-in,
.ms_items_more,
.Dropdown__in,
.audio_subscribe_promo,
.emoji_tt_wrap,
.video_choosebox_bottom,
.audio_feed_post,
.im-to-end:focus .im-to-end__button,
.im-to-end:hover .im-to-end__button,
.im-to-end__button,
.ChatSettingsMembersWidget__add:before,
.im_stickers_my_row ~ .im_stickers_my_row,
.ui_search_fltr,
.friends_cur_filters,
.idd_popup,
.audio_pl_edit_box .ape_cover,
.audio_pl_edit_box .ape_pl_item:hover,
.audio_pl_edit_box .ape_pl_item .ape_pl_item_inner,
.post_publish,
.page_actions_separator,
.market_item_footer_wrap,
.market_item_footer_info,
.market_comments_summary,
.app_widget_list_row,
.bookmark_footer,
.wke_controls,
.pages_header_info,
.pages_history_header_wrap,
#mv_pl_tt .mv_tt_add_playlist,
.TopMenu_block_1KqlS,
.Panel_block_2RPF-,
.MainStatus_button_1p4_4,
.Panel_footer_epjyB,
.Panel_header_2eRoj,
.CardListItem_card_1rJmF,
.NumbersInput_item_2-aQb,
.ListItem_block_27maC,
.Mailings_desktop .GroupPage__footer,
#apps_layer .apps_header_wrapper,
.post_actions_btns,
.wddi,
.wddi_over,
.wdd_list,
.payments_money_transfer_comment,
div.fc_clist_filter_wrap,
.flat_button.ui_load_more_btn,
.settings_block_footer {
  border-color: #242424 !important;
}
.tt_default.tt_down:after,
.tt_default.tt_down:before,
.im-chat-input,
.ms_items_more_wrap.to_up .ms_items_more:before,
.ms_items_more_wrap.to_up .ms_items_more:after,
div.fc_tab_txt,
.feedback_row_wrap,
.feedback_row,
.feedback_sticky_row,
.deep_active .post_replies_header,
.deep_active.wall_module .post_replies_header,
.mention_tt_actions,
.emoji_tt_wrap.tt_down:before,
.emoji_tt_wrap.tt_down:after,
.ui_actions_menu_top .ui_actions_menu:after,
.eltt.eltt_top.eltt_arrow_size_normal > .eltt_arrow_back,
.eltt.eltt_top.eltt_arrow_size_normal > .eltt_arrow_back .eltt_arrow {
  border-top-color: #242424 !important;
}
.wall_module .published_by_quote,
.wall_module .published_sec_quote {
  border-left-color: #242424 !important;
}
.border_1_right {
  border-right-color: #242424 !important;
}
.border_1_right,
.ui_search_fltr:before,
.ui_search_fltr:after,
.ms_items_more_wrap.to_down .ms_items_more:before,
.ms_items_more_wrap.to_down .ms_items_more:after,
.emoji_tt_wrap.tt_up:before,
.emoji_tt_wrap.tt_up:after,
.tt_default.tt_up:after {
  border-bottom-color: #242424 !important;
}
.im-page--dialogs-search .ui_search_input_block {
  border-bottom: 1px solid #242424 !important;
}
.im-chat-input,
.ui_actions_menu:before,
.ui_actions_menu:after,
.tt_default.tt_up:before,
.notify_sources.tt_up:after,
.notify_sources.tt_up:before,
.Dropdown--b .Dropdown__in:after,
.Dropdown--b .Dropdown__in:before,
.Dropdown--b .Dropdown__in:after,
.eltt.eltt_bottom.eltt_arrow_size_normal > .eltt_arrow_back,
.eltt.eltt_bottom.eltt_arrow_size_normal > .eltt_arrow_back .eltt_arrow {
  border-bottom-color: #242424 !important;
}
.module,
.wall_module .reply_fakebox,
.tabbed_box .summary_tabs,
#mv_pl_tt .mv_tt_private_only + .mv_tt_playlists,
.im-page--header,
.im-page--dialogs-search,
.im-page_classic.im-page .im-page--chat-input {
  border: none;
}
.ActionsMenu__inner,
.ui_actions_menu,
.privacy_dropdown .header,
.privacy_dropdown,
.apps_footer {
  border-color: #3b3f41 !important;
}
.ui_actions_menu_sep,
.emoji_tt_wrap.emoji_shop_over.tt_down:after,
.ui_actions_menu_top .ui_actions_menu:before {
  border-top-color: #3b3f41 !important;
}
.ActionsMenu__inner:before,
.ActionsMenu__inner:after {
  border-bottom-color: #3b3f41 !important;
}
.fc_tab_pointer:before,
.fc_tab_pointer:after {
  border-left-color: #3b3f41 !important;
}
.anyClassName {
  border-right-color: #3b3f41 !important;
}
.audio_layer_container .audio_page_layout .audio_search {
  margin: -1px 20px 10px;
}
.stl_active.over_fast #stl_bg,
.wall_module .post_like:hover,
.wall_module .post_reply:hover,
.wall_module .post_share:hover,
.audio_row:hover:not(.audio_row__current) .audio_row_content,
.left_count_wrap,
.mail_box_cont,
#group_apps_list .group_apps_list_rows .group_apps_list_row .group_apps_edit,
.apps_i_panel,
.page_status_editor .editor,
.im-page-pinned {
  color: #4a76a8 !important;
}
.copy_quote {
  border-left: 1px solid #242424 !important;
}
.im-mess.im-mess_unread:not(.im-mess_light),
.feed_new_posts:hover,
.pv_like:hover {
  background-color: rgba(0, 0, 0, 0.2) !important;
}
.im-mess.im-mess_selected:last-child:before,
.im-mess.im-mess_unread:last-child:before {
  content: none !important;
}
.im-page_classic.im-page .im-page--chat-input {
  margin-left: 0;
}
.im-page_classic.im-page .im-page--chat-input .im-chat-input {
  box-shadow: 0 1px 0 0 #626568, 0 0 0 1px #626568 !important;
}
.im-chat-input .im-chat-input--txt-wrap {
  border: none !important;
}
.im-page_classic.im-page .im-page--dialogs-search,
.page_block._audio_page_content_block:before,
.audio_page_layout .audio_block:before,
.im-aside-notice,
.im-page.im-page_classic.im-page_group .im-group-online .im-group-online--inner,
.media_voting {
  box-shadow: 0 0 0 1px #242424 !important;
}
.audio_pl_snippet {
  border: solid 1px #242424 !important;
}
.im-mess.im-mess_selected + .im-mess:before,
.im-mess.im-mess_unread + .im-mess:before {
  height: 0 !important;
}
.im-page_classic .im-page--chat-header {
  border: solid 1px #626568 !important;
}
.im-page_classic .im-page--chat-header-in,
.Button--mobile,
.CatalogBlock--divided:before,
.Mailings_desktop .GroupPage__footer,
.top_notify_cont ._notify_unread .feed_row:first-child .feedback_row_wrap,
.im-page_classic.im-page .im-page--dialogs-footer,
.page_block,
.mv_info {
  box-shadow: none;
}
.im-page_classic.im-page .im-page--chat-body-abs,
.post_top_info_wall_guide,
.post_top_info_wall_mention,
.post_top_info_wall_reply,
.im-create.im-create_classic .im-create--table {
  box-shadow: 0 1px 0 0 #242424, 0 0 0 1px #242424 !important;
}
.friends_user_row,
.post_full_like_wrap,
.wl_replies_header,
.wall_module.wl_post .reply .reply_wrap,
.wall_module .wl_reply_form_fixed .reply_box,
.wall_module .wl_reply_form_fixed .reply_fakebox_wrap {
  border-top: 1px solid #242424 !important;
}
.page_square_photo {
  margin: 0;
}
.audio_pl_edit_box .ape_add_audios_btn:hover,
.audio_pl_edit_box .ape_add_pl_audios_btn:hover,
.docs_choose_rows .docs_item:hover,
.docs_choose_upload_area,
.docs_choose_upload_area:hover,
.button_gray button.hover,
.button_gray button:hover,
.flat_button.secondary.hover,
.flat_button.secondary:hover,
textarea,
.pv_cont .pv_can_edit:hover,
em.ts_clist_hl,
.audio_w_covers .audio_row.ui_gridsorter_moveable .audio_row_content {
  border-color: #242424 !important;
}
.search_filters_minimized_text,
.info_msg {
  background-color: #3b3f41 !important;
}
.feedback_row_answer:after,
.feedback_row_answer:before,
#top_profile_menu:before,
#top_profile_menu:after {
  border-bottom-color: #242424 !important;
}
#top_notify_wrap {
  border-color: #3b3f41 !important;
}
#top_notify_wrap:before,
#top_notify_wrap:after {
  border-bottom-color: #3b3f41 !important;
}
.im-chat-input--scroll,
.im-replied {
  border-radius: 5px;
}
.im-chat-input--scroll {
  background: #3b3f41 !important;
}
.im-chat-input--scroll .im-fwd.im-fwd_msg {
  padding: 5px 7px;
}
.msg_text {
  color: #242424 !important;
}
.bd_day_cell {
  border-color: #242424 !important;
}
.bd_day_cell.holiday {
  border-color: #3b3f41 !important;
}
.bd_day_cell.left {
  border-color: #242424 !important;
}
.bd_day_cell.today {
  border-color: #242424 !important;
}
.bd_day_head {
  border-color: #3b3f41 !important;
}
.msg {
  border-color: #242424 !important;
}
.chat_cont_sh_bottom,
.chat_cont_sh_top {
  background: linear-gradient(180deg, rgba(216, 223, 230, 0), #3b3f41 80%) !important;
}
.top_nav_btn.active,
.top_nav_btn:hover,
.top_audio_player:hover,
.top_nav_link:hover,
.top_nav_link.active {
  background-color: rgba(36, 36, 36, 0.5);
}
.top_nav_btn#top_notify_btn .top_nav_btn_icon,
.top_nav_btn#top_notify_btn:hover .top_nav_btn_icon {
  background-image: url('data:image/svg+xml;charset=utf-8,<svg%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"20"%20height%3D"20"%20viewBox%3D"0%200%2020%2020"><path%20fill%3D"%23fff"%20fill-rule%3D"evenodd"%20d%3D"M8%2C18%20C6.64583333%2C18%205.5%2C17.3%205.5%2C16%20L10.5%2C16%20C10.5%2C17.3%209.35416667%2C18%208%2C18%20Z%20M13.9956933%2C11%20C13.9956933%2C12.5%2016%2C12.5%2016%2C13.5%20C16%2C14%2016%2C15%2013.8955984%2C15%20L1.98430985%2C15%20C-6.19060359e-13%2C15%20-1.62536651e-13%2C14%20-1.63424829e-13%2C13.5%20C-1.63369318e-13%2C12.5%201.98430985%2C12.5%202%2C11%20L2%2C8%20C2%2C4%204.09724901%2C1.5%207%2C1.1%20L7%2C1%20C7%2C0.4%207.5%2C5.74053187e-17%208%2C0%20C8.5%2C0%209%2C0.4%209%2C1%20L9%2C1.1%20C11.902751%2C1.5%2013.9956933%2C4%2013.9956933%2C8%20L13.9956933%2C11%20Z"%20transform%3D"translate(2%201)"%2F><%2Fsvg>');
}
.top_nav_btn#top_audio .top_nav_btn_icon,
.top_nav_btn#top_audio:hover .top_nav_btn_icon {
  background-image: url('data:image/svg+xml;charset=utf-8,<svg%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"20"%20height%3D"20"%20viewBox%3D"0%200%2020%2020"><path%20fill%3D"%23fff"%20fill-rule%3D"evenodd"%20d%3D"M14%2C11.1552322%20L14%2C5.5%20L7%2C7.5%20L7%2C15.2999878%20C7%2C15.2999878%206.99923979%2C15.2998738%206.99774901%2C15.2996427%20C6.99305423%2C16.449672%205.98201611%2C17.5525634%204.53840209%2C17.8858479%20C2.90786903%2C18.2622862%201.34293783%2C17.5143682%201.04303041%2C16.2153265%20C0.743122996%2C14.9162848%201.82180821%2C13.5580399%203.45234127%2C13.1816017%20C3.98965862%2C13.0575522%204.51985206%2C13.0556001%205%2C13.1552322%20L5%2C3.9955775%20C5%2C3.44483697%205.42843442%2C2.88315425%205.95693506%2C2.73901771%20L15.0430649%2C0.26098229%20C15.568787%2C0.117603555%2016%2C0.447563354%2016%2C0.999660731%20L16%2C13.2999878%20C15.999253%2C13.2998718%2015.9985027%2C13.2997528%2015.9977491%2C13.2996309%20C15.9930612%2C14.4496644%2014.9820211%2C15.5525622%2013.5384021%2C15.8858479%20C11.907869%2C16.2622862%2010.3429378%2C15.5143682%2010.0430304%2C14.2153265%20C9.743123%2C12.9162848%2010.8218082%2C11.5580399%2012.4523413%2C11.1816017%20C12.9896586%2C11.0575522%2013.5198521%2C11.0556001%2014%2C11.1552322%20Z"%20transform%3D"translate(1%201)"%2F><%2Fsvg>');
}
.top_audio_play__button,
.top_audio_play__button:hover,
.top_audio_play__button:hover:before,
.top_audio_play__button:before {
  background-color: #ffffff;
}
.audio_page_player2.audio_page_player_fixed,
.audio_layer_container .audio_page_player_wrap {
  box-shadow: 0 5px 10px #242424 !important;
}
.top_notify_count,
.top_nav_btn:hover .top_notify_count {
  border: 2px solid #484a4f;
}
#ads_left,
.trg-b-banner {
  display: none !important;
}
.im-replied {
  background: rgba(0, 0, 0, 0.3);
}
.slider .slider_amount,
.slider .slider_handler,
.audio_page_player2 .audio_page_player_play .icon,
.audio-msg-track .audio-msg-track--btn {
  background-color: #e82f94 !important;
}
.audio-msg-track .audio-msg-track--wave-wrapper .audio-msg-track--wave path {
  stroke: #e82f94 !important;
}
.slider .slider_back {
  background-color: #d1d6de;
}
.audio_page_player_title_performer a,
.audio_pl_snippet2 .audio_pl_snippet__info_title,
.audio_row .audio_row__performers a,
.audio_pl_snippet_info_maintitle {
  color: #e82f94 !important;
}
.audio-msg-track .slider .slider_amount {
  background: transparent !important;
}
.audio_layer_container .audio_page_player_wrap {
  border-bottom: 0 solid #e7e8ec !important;
}
.ChatSettingsInfo {
  box-shadow: 0 1px 0 #242424 !important;
}
.List--border,
.ChatSettingsMembersWidget {
  box-shadow: 0 1px 0 #242424, 0 -1px 0 #242424 !important;
}
.ListItem--active,
.ListItem--can-be-hovered.ListItem--selectable:hover,
.Tabs {
  border-color: #242424 !important;
}
.page_list_module .line_cell .desc_info,
.page_list_module .line_cell .extra_info,
.page_list_module .line_cell .info {
  padding: 4px 0 0 7px;
}
.poster__slider-arrow._right {
  box-shadow: -5px 0 5px 0 #3b3f41 !important;
}
.poster__slider-arrow._left {
  box-shadow: 5px 0 5px 0 #3b3f41 !important;
}
#fc_ctabs_cont,
.fc_tab,
.Card,
.sticker_hints_arrow,
.im-page--dialogs-search .ui_search_input_block,
.im-page-pinned,
.footer_wrap {
  border: none!important;
}
.chats_sp.fc_clist_search_icon {
  margin: 10px 7px 0 0;
}
.post_top_info_ads_group_members {
  box-shadow: 0 0 0 1px #242424, 0 1px 0 0 #242424 !important;
}
.ui_scroll_default_theme.ui_scroll_emoji_theme > .ui_scroll_overflow > .ui_scroll_shadow_bottom,
.ui_scroll_default_theme.ui_scroll_emoji_theme > .ui_scroll_overflow > .ui_scroll_shadow_top,
.emoji_tabs_l_sc,
.emoji_tabs_l_sc,
.emoji_tabs_r_sc,
.emoji_cats_title_helper:after,
.im-page .im-page--center-empty {
  background-image: none;
}
.ui_rmenu_count {
  float: left;
  padding: 1px 0;
}
.im-page .im-page--dialogs {
  float: right;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.im-page .im-page--history {
  margin-left: 0;
  margin-right: 317px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected {
  background-color: #2d2f30 !important;
}
.im-create.im-create_material {
  right: 0;
  position: absolute;
}
.Panel_block_2RPF-,
.Page_contentPanel_3WDOJ {
  box-shadow: 0 1px 0 0 #242424, 0 0 0 1px #242424 !important;
}
`;
GM_addStyle(css);
