if (self.CavalryLogger) { CavalryLogger.start_js(["36tAz"]); }

__d("CRMTooltip.react",["cx","React","TooltipMixin"],(function(a,b,c,d,e,f,g){"use strict";a=b("React").createClass({displayName:"CRMTooltip",mixins:[b("TooltipMixin")],render:function(){var a=this.props.tooltip;return a?b("React").createElement("span",{className:"_x29","data-hover":"tooltip","aria-label":a}):b("React").createElement("span",{className:"hidden_elem"})}});e.exports=a}),null);
__d("LiveVideoBroadcastConstants",[],(function(a,b,c,d,e,f){"use strict";a={MSEC_IN_SEC:1e3,DEFAULT_RETRY_TIMEOUT_SECONDS:20,RENDER_DELAY_TIME_MS:500,REQUEST_ACCESS_DELAY_MS:0,AUTO_TAKENDOWN_TIME_FOR_COPYRIGHT_VIOLATION:6e4,COUNTDOWN_START_TIME:3,LIVE_WWW_BROADCASTING_APP_ID:1761791807395020,MINIMUM_BROADCAST_LENGTH_MS:4e3,FINISH_BUTTON_NUX_TIME_MS:3e3,PUBLISH_FAILURE_TIMEOUT_S:90,FUNNEL_LOGGER_NAME:"FACECAST_BROADCASTER_FUNNEL",MAX_CROSSPOST_PAGES_IN_COMPACT_VIEW:5,BROADCAST_STATE:{PREVIEW:"PREVIEW",READY_TO_LIVE:"READY_TO_LIVE",LIVE:"LIVE",FINISHING:"FINISHING",FINISHED:"FINISHED",EDITING:"EDITING"},ENCODER_TYPE:{STREAM_KEY:"STREAM_KEY",PAIRED_ENCODER:"PAIRED_ENCODER"},RHC_TAB_TYPE:{POST:"POST",SETTINGS:"SETTINGS",MONETIZATION:"MONETIZATION",TOOLS:"TOOLS"},CAMERA_STATE:{CHECK_CAMERA_ACCESS:"CHECK_CAMERA_ACCESS",REQUEST_CAMERA_ACCESS:"REQUEST_CAMERA_ACCESS",BROADCAST:"BROADCAST",CAMERA_NOT_FOUND:"CAMERA_NOT_FOUND",MICROPHONE_NOT_FOUND:"MICROPHONE_NOT_FOUND",CAMERA_NOT_ALLOWED:"CAMERA_NOT_ALLOWED"},CAMERA_DIMENSIONS:{ONE_ONE:1,FOUR_THREE:4/3,SIXTEEN_NINE:16/9},INPUT_SOURCE:{API:"API",CAMERA:"CAMERA",EDIT:"EDIT",EDIT_SCHEDULE:"EDIT_SCHEDULE",VIDEO_GAME:"VIDEO_GAME"},ACTIONS:{ACCEPT_ERROR_BROADCAST_COULD_NOT_START:"ACCEPT_ERROR_BROADCAST_COULD_NOT_START",BROADCASTER_SESSION_RATING:"BROADCASTER_SESSION_RATING",BROADCASTER_SESSION_ISSUES:"BROADCASTER_SESSION_ISSUES",FINISH_BROADCAST_REQUEST:"FINISH_BROADCAST_REQUEST",FINISH_BROADCAST_SUCCESS:"FINISH_BROADCAST_SUCCESS",FETCH_INVITED_FRIENDS:"FETCH_INVITED_FRIENDS",SET_INVITED_FRIENDS:"SET_INVITED_FRIENDS",GET_WEBCAM_STREAM_URL_REQUEST:"GET_WEBCAM_STREAM_URL_REQUEST",GET_WEBCAM_STREAM_URL_SUCCESS:"GET_WEBCAM_STREAM_URL_SUCCESS",GET_SCREEN_STREAM_URL_REQUEST:"GET_SCREEN_STREAM_URL_REQUEST",GET_SCREEN_STREAM_URL_SUCCESS:"GET_SCREEN_STREAM_URL_SUCCESS",HIDE_COMMENT_PLACEHOLDER:"HIDE_COMMENT_PLACEHOLDER",INITIALIZE:"INITIALIZE",FINISH_COUNT_DOWN:"FINISH_COUNT_DOWN",START_BROADCAST_REQUEST:"START_BROADCAST_REQUEST",START_BROADCAST_SUCCESS:"START_BROADCAST_SUCCESS",START_LIVE_COUNTDOWN:"START_LIVE_COUNTDOWN",CANCEL_LIVE_COUNTDOWN:"CANCEL_LIVE_COUNTDOWN",UPDATE_CAMERA_STATE:"UPDATE_CAMERA_STATE",UPDATE_COUNTDOWN:"UPDATE_COUNTDOWN",SET_REPLAY_SHOULD_UPLOAD_HIGHER_QUALITY_VIDEO:"SET_REPLAY_SHOULD_UPLOAD_HIGHER_QUALITY_VIDEO",SHOW_REPLAY:"SHOW_REPLAY",ERROR_BROADCAST_COULD_NOT_START:"ERROR_BROADCAST_COULD_NOT_START",ERROR_BROADCAST_PUBLISH_FAIL:"ERROR_BROADCAST_PUBLISH_FAIL",ERROR_CONNECTION_BROKEN:"ERROR_CONNECTION_BROKEN",ERROR_CONNECTION_FAILED:"ERROR_CONNECTION_FAILED",ERROR_END_BROADCAST_MUTATION_FAIL:"ERROR_END_BROADCAST_MUTATION_FAIL",ERROR_MEDIA_VALIDATION:"ERROR_MEDIA_VALIDATION",ERROR_LOADING_BROADCAST_BODY:"ERROR_LOADING_BROADCAST_BODY",ATTEMPT_RECONNECTION:"ATTEMPT_RECONNECTION",WEBRTC_CONNECTION_ESTABLISHED:"WEBRTC_CONNECTION_ESTABLISHED",SET_INVITE_FRIENDS_QUERY:"SET_INVITE_FRIENDS_QUERY",SET_INVITE_FRIENDS_SHOWN:"SET_INVITE_FRIENDS_SHOWN",ICE_CONNECTION_STATE_CHANGED:"ICE_CONNECTION_STATE_CHANGED",DELETE_REPLAY_VIDEO:"DELETE_REPLAY_VIDEO",NETWORK_OFFLINE:"NETWORK_OFFLINE",NETWORK_ONLINE:"NETWORK_ONLINE",PREPARE_THUMBNAIL_URI:"PREPARE_THUMBNAIL_URI",SET_THUMBNAIL_URI:"SET_THUMBNAIL_URI",SET_COPYRIGHT_TRIGGERED:"SET_COPYRIGHT_TRIGGERED",SET_COPYRIGHTS_VIOLATION_DIALOG_STATE:"SET_COPYRIGHTS_VIOLATION_DIALOG_STATE",SET_BROADCAST_ENDED_WITH_COPYRIGHT_VIOLATION:"SET_BROADCAST_ENDED_WITH_COPYRIGHT_VIOLATION",SET_VOD_READY:"SET_VOD_READY",INVITE_FRIEND:"INVITE_FRIEND",SET_INVITE_FRIENDS_RESULTS:"SET_INVITE_FRIENDS_RESULTS",SET_INVITE_FRIENDS_SUGGESTIONS:"SET_INVITE_FRIENDS_SUGGESTIONS",HANDLE_COPYRIGHT_EVENT:"HANDLE_COPYRIGHT_EVENT",SET_SHOW_NUX:"SET_SHOW_NUX",REQUEST_UFI:"REQUEST_UFI",SET_DIALOG:"SET_DIALOG",SET_DIALOG_CONTAINER_ID:"SET_DIALOG_CONTAINER_ID",SET_COMPOSER_CONFIG:"SET_COMPOSER_CONFIG",SETUP_UFI:"SETUP_UFI",LOG_WEBRTC_STATS:"LOG_WEBRTC_STATS",SET_DESCRIPTION_EXPANDED:"SET_DESCRIPTION_EXPANDED",CLEANUP:"CLEANUP",SET_DESCRIPTION:"SET_DESCRIPTION",SET_TAG_LIST:"SET_TAG_LIST",SET_TARGET:"SET_TARGET",CLEAR_BROADCAST_ID:"CLEAR_BROADCAST_ID",CLEAR_API_BROADCAST_ID:"CLEAR_API_BROADCAST_ID",SET_ATTRIBUTION_TAGS:"SET_ATTRIBUTION_TAGS",SET_VIDEO_TITLE:"SET_VIDEO_TITLE",SET_CONTENT_TAGS:"SET_CONTENT_TAGS",SET_SELECTED_ATTRIBUTION_TAG:"SET_SELECTED_ATTRIBUTION_TAG",SET_BROADCAST_ID:"SET_BROADCAST_ID",SET_VIDEO_ID:"SET_VIDEO_ID",SET_PRIVACY_SELECTOR:"SET_PRIVACY_SELECTOR",ERROR_TIME_OUT_WAITING_FOR_PUBLISH:"ERROR_TIME_OUT_WAITING_FOR_PUBLISH",SET_PEOPLE_TAGGER_SOURCE:"SET_PEOPLE_TAGGER_SOURCE",UI_MOUNTED:"UI_MOUNTED",READY_STATE_ENDED:"READY_STATE_ENDED",ERROR_MWS_BAD_AUDIO_OR_VIDEO_DATA:"ERROR_MWS_BAD_AUDIO_OR_VIDEO_DATA",UPDATE_UI_CONFIG:"UPDATE_UI_CONFIG",ERROR_RTC_CLIENT_ERROR:"ERROR_RTC_CLIENT_ERROR",SET_INPUT_SOURCE:"SET_INPUT_SOURCE",ADD_INPUT_STREAM:"ADD_INPUT_STREAM",API_BROADCAST_CREATED:"API_BROADCAST_CREATED",API_BROADCAST_LIVE_PREVIEW_PLAYING:"API_BROADCAST_LIVE_PREVIEW_PLAYING",DELETE_API_REPLAY_VIDEO:"DELETE_API_REPLAY_VIDEO",API_BROADCAST_STOPPED:"API_BROADCAST_STOPPED",API_GO_LIVE_CLICKED:"API_GO_LIVE_CLICKED",SET_API_BROADCAST_PRIVACY_SELECTOR:"SET_API_BROADCAST_PRIVACY_SELECTOR",ERROR_TRACK_ENDED:"ERROR_TRACK_ENDED",ERROR_CREATING_BROADCAST:"ERROR_CREATING_BROADCAST",SET_IS_360_VIDEO:"SET_IS_360_VIDEO",SET_IS_360_AUDIO:"SET_IS_360_AUDIO",SET_IS_SINGLE_FISHEYE:"SET_IS_SINGLE_FISHEYE",SET_SINGLE_FISHEYE_FOV:"SET_SINGLE_FISHEYE_FOV",UPDATE_360_CONFIGURATION:"UPDATE_360_CONFIGURATION",SET_EMBEDDABLE:"SET_EMBEDDABLE",SET_SHOULD_EXPIRE_AFTER_GO_LIVE:"SET_SHOULD_EXPIRE_AFTER_GO_LIVE",SET_SHOULD_SHOW_GRAPHIC_CONTENT_WARNING:"SET_SHOULD_SHOW_GRAPHIC_CONTENT_WARNING",SET_SHOW_EVENT_LOG_DIALOG:"SET_SHOW_EVENT_LOG_DIALOG",SET_CONTINUOUS:"SET_CONTINUOUS",SET_COPYRIGHTED:"SET_COPYRIGHTED",SET_COPYRIGHT_MONITORING_TYPE:"SET_COPYRIGHT_MONITORING_TYPE",SET_COPYRIGHT_CONTENT_CATEGORY:"SET_COPYRIGHT_CONTENT_CATEGORY",SET_COPYRIGHT_OWNERSHIP_COUNTRIES:"SET_COPYRIGHT_OWNERSHIP_COUNTRIES",SET_COPYRIGHT_RULE_ID:"SET_COPYRIGHT_RULE_ID",UPDATE_COPYRIGHT_WHITELISTED_FB_USERS:"UPDATE_COPYRIGHT_WHITELISTED_FB_USERS",UPDATE_COPYRIGHT_WHITELISTED_IG_USERNAMES:"UPDATE_COPYRIGHT_WHITELISTED_IG_USERNAMES",SCHEDULED_LIVE_SUCCESS:"SCHEDULED_LIVE_SUCCESS",SCHEDULED_LIVE_REQUEST:"SCHEDULED_LIVE_REQUEST",SCHEDULED_LIVE_FAIL:"SCHEDULED_LIVE_FAIL",PREPARE_BROADCAST_FOR_SCHEDULED_LIVE:"PREPARE_BROADCAST_FOR_SCHEDULED_LIVE",SET_DIALOG_LOADING:"SET_DIALOG_LOADING",SET_EPISODE_DATA:"SET_EPISODE_DATA",SET_HIDE_INPUT_TOGGLE:"SET_HIDE_INPUT_TOGGLE",BROADCAST_ERROR_RECEIVED:"BROADCAST_ERROR_RECEIVED",ERROR_STARTING_API_BROADCAST:"ERROR_STARTING_API_BROADCAST",ERROR_FETCHING_BROADCAST_INPUT_STREAM:"ERROR_FETCHING_BROADCAST_INPUT_STREAM",ERROR_FETCHING_BROADCAST_METADATA:"ERROR_FETCHING_BROADCAST_METADATA",ERROR_FETCHING_BROADCAST_PREVIEW_INPUT_STREAM:"ERROR_FETCHING_BROADCAST_PREVIEW_INPUT_STREAM",ERROR_FETCHING_BROADCAST_SCHEDULE:"ERROR_FETCHING_BROADCAST_SCHEDULE",ERROR_FETCHING_STREAM_HEALTH:"ERROR_FETCHING_STREAM_HEALTH",ERROR_DELETE_STREAM_BEHAVIOR_CHANGE:"ERROR_DELETE_STREAM_BEHAVIOR_CHANGE",ERROR_AUTO_CAPTIONS_ENABLED_CHANGE:"ERROR_AUTO_CAPTIONS_ENABLED_CHANGE",SET_BROADCAST_STATE:"SET_BROADCAST_STATE",SET_START_TIME:"SET_START_TIME",SET_GAME:"SET_GAME",SET_GROUPS:"SET_GROUPS",SET_VIDEO_TJ_APP:"SET_VIDEO_TJ_APP",SET_SHOULD_CROSSPOST_TO_PAGE:"SET_SHOULD_CROSSPOST_TO_PAGE",TOGGLE_CROSSPOST_TO_SHOW_PARENT_PAGE:"TOGGLE_CROSSPOST_TO_SHOW_PARENT_PAGE",SET_SHOULD_CROSSPOST_TO_ALL_PAGES:"SET_SHOULD_CROSSPOST_TO_ALL_PAGES",RESORT_CROSSPOST_CONFIGS:"RESORT_CROSSPOST_CONFIGS",SET_UPDATE_REQUEST_PENDING:"SET_UPDATE_REQUEST_PENDING",SET_LIVE_COVER_VIDEO_ENABLED:"SET_LIVE_COVER_VIDEO_ENABLED",SET_SELECTED_ENCODER_TYPE:"SET_SELECTED_ENCODER_TYPE",SET_SELECTED_RHC_TAB:"SET_SELECTED_RHC_TAB",SET_SCHEDULED_LIVE_DATA:"SET_SCHEDULED_LIVE_DATA",SET_REWIND_ENABLED:"SET_REWIND_ENABLED",SET_CONTENT_PROTECTION_ENABLED:"SET_CONTENT_PROTECTION_ENABLED",UPDATE_METADATA_CONFIG:"UPDATE_METADATA_CONFIG",SERVER_ERROR:"SERVER_ERROR",SET_SHOW_SAVE_CHANGES_DIALOG:"SET_SHOW_SAVE_CHANGES_DIALOG",SET_COMMENT_MODES:"SET_COMMENT_MODES",SET_ATTACHED_TRIVIA_GAME:"SET_ATTACHED_TRIVIA_GAME",CLICK_FINISH_BUTTON:"CLICK_FINISH_BUTTON",UPDATE_BACKUP_INPUT_STREAM:"UPDATE_BACKUP_INPUT_STREAM",PREVIEW_PLAYER_CRASH:"PREVIEW_PLAYER_CRASH",SET_IS_FUNDRAISER_SELECTED:"SET_IS_FUNDRAISER_SELECTED",SET_FUNDRAISER_GOAL:"SET_FUNDRAISER_GOAL",SET_IS_REHEARSAL:"SET_IS_REHEARSAL",ENABLE_WAS_LIVE_POLL_VOTING:"ENABLE_WAS_LIVE_POLL_VOTING",SET_SHOW_WAS_LIVE_VOTING_TOGGLE:"SET_SHOW_WAS_LIVE_VOTING_TOGGLE",SET_COMMENTATING_DISABLED:"SET_COMMENTATING_DISABLED"}};e.exports=a}),null);
__d("MediaRecorder",[],(function(a,b,c,d,e,f){e.exports=window.MediaRecorder}),null);
__d("Video.react",["React","ReactDOM"],(function(a,b,c,d,e,f){__p&&__p();a=b("React").PropTypes;c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.componentDidMount=function(){var a=b("ReactDOM").findDOMNode(this.refs.video);this.props.paused&&a&&a.pause&&a.pause()};d.UNSAFE_componentWillUpdate=function(a,c){c=b("ReactDOM").findDOMNode(this.refs.video);a.playbackRate&&(c.playbackRate=a.playbackRate);a.paused!=this.props.paused&&c&&(a.paused&&c.pause?c.pause():c.play&&c.play())};d.render=function(){return b("React").createElement("video",babelHelpers["extends"]({},this.props,{ref:"video"}))};return c}(b("React").Component);c.propTypes={autoPlay:a.bool,paused:a.bool,controls:a.bool,height:a.oneOfType([a.string,a.number]),loop:a.bool,muted:a.bool,onAbort:a.func,onCanPlay:a.func,onCanPlayThrough:a.func,onDurationChange:a.func,onEmptied:a.func,onEncrypted:a.func,onEnded:a.func,onError:a.func,onLoadedData:a.func,onLoadedMetadata:a.func,onLoadStart:a.func,onPause:a.func,onPlay:a.func,onPlaying:a.func,onProgress:a.func,onRateChange:a.func,onSeeked:a.func,onSeeking:a.func,onStalled:a.func,onSuspend:a.func,onTimeUpdate:a.func,onVolumeChange:a.func,onWaiting:a.func,playbackRate:a.number,poster:a.string,src:a.string.isRequired,width:a.oneOfType([a.string,a.number])};e.exports=c}),null);
__d("EventCreationEntryPoint",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({GROUP_EVENTS_TAB:"group_events_tab",OTHERS:"others",TOUR_DIALOG:"tour_dialog",PUBLISHING_TOOLS:"publishing_tools",REACT_COMPOSER:"react_composer",EVENT_INSIGHTS_TAB:"event_insights_tab",EVENT_PERMALINK:"event_permalink",EVENT_SPROUT:"event_sprout",ADS_LWI:"ads_lwi",PAGE_POST_FOOTER:"page_post_footer",EVENTS_ADMIN_TOOL:"events_admin_tool",GAMES_STREAMER_DASHBOARD:"games_streamer_dashboard"})}),null);
__d("XLiveVideoBroadcastLaunchComposerController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/live_map/composer_config/",{default_input_source:{type:"String"},composer_entry_point:{type:"String",required:!0},page_id:{type:"FBID"},game_id:{type:"FBID"},hide_input_toggle:{type:"Bool",defaultValue:!1},default_message:{type:"String"}})}),null);