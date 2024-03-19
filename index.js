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
import "./plugins/advlist";
import "./plugins/code";
import "./plugins/emoticons";
import "./plugins/emoticons/js/emojis";
import "./plugins/link";
import "./plugins/lists";
import "./plugins/table";
import "./plugins/accordion";
import "./plugins/advlist";
import "./plugins/anchor";
import "./plugins/autolink";
import "./plugins/autoresize";
import "./plugins/autosave";
import "./plugins/charmap";
import "./plugins/code";
import "./plugins/codesample";
import "./plugins/directionality";
import "./plugins/emoticons";
import "./plugins/fullscreen";
import "./plugins/help";
import "./plugins/image";
import "./plugins/importcss";
import "./plugins/insertdatetime";
import "./plugins/link";
import "./plugins/lists";
import "./plugins/media";
import "./plugins/nonbreaking";
import "./plugins/pagebreak";
import "./plugins/preview";
import "./plugins/quickbars";
import "./plugins/save";
import "./plugins/searchreplace";
import "./plugins/table";
import "./plugins/visualblocks";
import "./plugins/visualchars";
import "./plugins/wordcount";

/* Import premium plugins */
/* NOTE: Download separately and add these to /src/plugins */
/* import './plugins/checklist/plugin.js'; */
/* import './plugins/powerpaste/plugin.js'; */
/* import './plugins/powerpaste/js/wordimport.js'; */

/* content UI CSS is required */
import "./skins/ui/oxide/content.js";

/* The default content CSS can be changed or replaced with appropriate CSS for the editor content. */
import "./skins/content/default/content.js";
