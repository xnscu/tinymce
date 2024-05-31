// https://www.tiny.cloud/docs/tinymce/latest/vite-es6-npm/
import "./tinymce.js";

/* Default icons are required. After that, import custom icons if applicable */
import "./icons/default/icons.min.js";

/* Required TinyMCE components */
import "./themes/silver/theme.min.js";
import "./models/dom/model.min.js";

/* Import a skin (can be a custom skin instead of the default) */
import "./skins/ui/oxide/skin.js";

import "./langs/zh-Hans.js";
/* Import plugins */
import "./plugins/advlist/index.js";
import "./plugins/code/index.js";
import "./plugins/emoticons/index.js";
import "./plugins/emoticons/js/emojis.js";
import "./plugins/link/index.js";
import "./plugins/lists/index.js";
import "./plugins/table/index.js";
import "./plugins/accordion/index.js";
import "./plugins/advlist/index.js";
import "./plugins/anchor/index.js";
import "./plugins/autolink/index.js";
import "./plugins/autoresize/index.js";
import "./plugins/autosave/index.js";
import "./plugins/charmap/index.js";
import "./plugins/code/index.js";
import "./plugins/codesample/index.js";
import "./plugins/directionality/index.js";
import "./plugins/emoticons/index.js";
import "./plugins/fullscreen/index.js";
import "./plugins/help/index.js";
import "./plugins/image/index.js";
import "./plugins/importcss/index.js";
import "./plugins/insertdatetime/index.js";
import "./plugins/link/index.js";
import "./plugins/lists/index.js";
import "./plugins/media/index.js";
import "./plugins/nonbreaking/index.js";
import "./plugins/pagebreak/index.js";
import "./plugins/preview/index.js";
import "./plugins/quickbars/index.js";
import "./plugins/save/index.js";
import "./plugins/searchreplace/index.js";
import "./plugins/table/index.js";
import "./plugins/visualblocks/index.js";
import "./plugins/visualchars/index.js";
import "./plugins/wordcount/index.js";

/* Import premium plugins */
/* NOTE: Download separately and add these to /src/plugins */
/* import './plugins/checklist/plugin.js'; */
/* import './plugins/powerpaste/plugin.js'; */
/* import './plugins/powerpaste/js/wordimport.js'; */

/* content UI CSS is required */
import "./skins/ui/oxide/content.js";

/* The default content CSS can be changed or replaced with appropriate CSS for the editor content. */
import "./skins/content/default/content.js";

// test
import "./plugins/help/js/i18n/keynav/en.js";
import "./plugins/help/js/i18n/keynav/zh_CN.js";
// import "./skins/content/default/content.css" // this file contains global css population: body's margin

// import "./skins/ui/oxide/content.css"
import "./skins/ui/oxide/content.min.css";
import "./skins/ui/oxide/content.inline.min.css";
import "./skins/ui/oxide/skin.min.css";
import "./skins/ui/oxide/skin.shadowdom.min.css";
