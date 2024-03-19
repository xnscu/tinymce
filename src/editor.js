/* Import TinyMCE */
import tinymce from "tinymce";

/* Default icons are required. After that, import custom icons if applicable */
import "tinymce/icons/default/icons.min.js";

/* Required TinyMCE components */
import "tinymce/themes/silver/theme.min.js";
import "tinymce/models/dom/model.min.js";

/* Import a skin (can be a custom skin instead of the default) */
import "tinymce/skins/ui/oxide/skin.js";

/* Import plugins */
import "tinymce/plugins/advlist";
import "tinymce/plugins/code";
import "tinymce/plugins/emoticons";
import "tinymce/plugins/emoticons/js/emojis";
import "tinymce/plugins/link";
import "tinymce/plugins/lists";
import "tinymce/plugins/table";
import "tinymce/plugins/accordion";
import "tinymce/plugins/advlist";
import "tinymce/plugins/anchor";
import "tinymce/plugins/autolink";
import "tinymce/plugins/autoresize";
import "tinymce/plugins/autosave";
import "tinymce/plugins/charmap";
import "tinymce/plugins/code";
import "tinymce/plugins/codesample";
import "tinymce/plugins/directionality";
import "tinymce/plugins/emoticons";
import "tinymce/plugins/fullscreen";
import "tinymce/plugins/help";
import "tinymce/plugins/image";
import "tinymce/plugins/importcss";
import "tinymce/plugins/insertdatetime";
import "tinymce/plugins/link";
import "tinymce/plugins/lists";
import "tinymce/plugins/media";
import "tinymce/plugins/nonbreaking";
import "tinymce/plugins/pagebreak";
import "tinymce/plugins/preview";
import "tinymce/plugins/quickbars";
import "tinymce/plugins/save";
import "tinymce/plugins/searchreplace";
import "tinymce/plugins/table";
import "tinymce/plugins/visualblocks";
import "tinymce/plugins/visualchars";
import "tinymce/plugins/wordcount";

/* Import premium plugins */
/* NOTE: Download separately and add these to /src/plugins */
/* import './plugins/checklist/plugin.js'; */
/* import './plugins/powerpaste/plugin.js'; */
/* import './plugins/powerpaste/js/wordimport.js'; */

/* content UI CSS is required */
import "tinymce/skins/ui/oxide/content.js";

/* The default content CSS can be changed or replaced with appropriate CSS for the editor content. */
import "tinymce/skins/content/default/content.js";

/* Initialize TinyMCE */
const toolbar = `redo
undo
cut
copy
paste
pastetext
fontfamily
fontsizeinput
forecolor
backcolor
bold
italic
underline
strikethrough
aligncenter
alignjustify
alignleft
alignright
indent
lineheight
outdent
blocks
blockquote
h1
h2
h3
h4
h5
h6
hr
selectall
removeformat
`
  .split("\n")
  .join(" ");

const editorOptions = (props) => ({
  language: "zh-Hans",
  // language: 'zh_CN',
  // https://www.tiny.cloud/docs/tinymce/6/menus-configuration-options/
  menubar: "edit insert format table help",
  menu: {
    // file: { title: 'File', items: 'newdocument restoredraft | preview | export print | deleteallconversations' },
    edit: {
      title: "Edit",
      items: "undo redo | cut copy paste pastetext | selectall | searchreplace",
    },
    // view: { title: 'View', items: 'code | visualaid visualchars visualblocks | spellchecker | preview fullscreen | showcomments' },
    insert: {
      title: "Insert",
      items:
        "image link media addcomment pageembed template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents | insertdatetime",
    },
    format: {
      title: "Format",
      items:
        "bold italic underline strikethrough superscript subscript codeformat | styles blocks fontfamily fontsize align lineheight | forecolor backcolor | language | removeformat",
    },
    // tools: { title: 'Tools', items: 'spellchecker spellcheckerlanguage | a11ycheck code wordcount' },
    table: {
      title: "Table",
      items: "inserttable | cell row column | advtablesort | tableprops deletetable",
    },
    help: { title: "Help", items: "help" },
  },
  toolbar,
  promotion: false,
  branding: false,
  elementpath: false,
  automatic_uploads: true,
  // images_upload_url:"",
  content_style: "img {width:100%;}",
  // width: 1000,
  height: props.height || 800,
  async images_upload_handler(blobInfo, progress) {
    // console.log({blobInfo})
    const file = blobInfo.blob(); //转化为易于理解的file对象
    const size = props.size || process.env.ALIOSS_SIZE;
    if (file.size > utils.parseSize(size)) {
      const error = new Error(`图片太大，不能超过${size}`);
      error.remove = true;
      throw error;
    }
    const url = await Alioss.uploadImage({ file, size });
    return url;
    // return blobInfo.base64()
  },
  plugins: "lists link image table code help wordcount",
});
export default editorOptions;
