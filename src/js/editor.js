import { silverBox } from "./silverBox";
import { getDataFromLs } from "./getDataFromLs";
import { setDataInLs } from "./setDataInLs";
import { showNewsInMenu } from "./showData";

ClassicEditor.create(document.querySelector("#editor"), {
  // Editor configuration.
  ui: {
    poweredBy: {
        position: 'inside',
        side: 'left',
        label: 'This is',
    }
    
}
})
  .then((editor) => {
    window.editor = editor;
  })
  .catch(handleSampleError);

function handleSampleError(error) {
  const issueUrl = "https://github.com/ckeditor/ckeditor5/issues";

  const message = [
    "Oops, something went wrong!",
    `Please, report the following error on ${issueUrl} with the build id "511tyg3plpkm-5yzplsnuerue" and the error stack trace:`,
  ].join("\n");

  console.error(message);
  console.error(error);
}

let submitBtn = document.getElementById("submit");
let name = document.getElementById("name");
let title = document.getElementById("title");
let ck_blurred = document.querySelector(".ck-rounded-corners");

submitBtn.addEventListener("click", valueValidation);

function valueValidation(e) {
  let editorData= editor.getData()
  if (
    name.value.length == 0 ||
    title.value.length == 0 ||
    editorData == ""
  ) {
    silverBox({
      alertIcon: "error",
      text: "please fill all field",
      centerContent: true,
      cancelButton: {
        text: "OK",
      },
    });
  } else {
    silverBox({
      timer: 3000,
      position: "top-right",
      alertIcon: "info",
      text: "news is Added",
      centerContent: true,
      showCloseButton: true,
    });
    newsCreator(title.value,editorData, name.value);
  }
}

function newsCreator(title, editorData, author) {
  let d = new Date().toLocaleDateString('fa-IR-u-nu-latn')
  let data = {
    title: title,
    description: editorData,
    author: author,
    date: `${d},  ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`, 
    comments: [],
  };
  console.log(data);
  let lsData = getDataFromLs("newsList");

  if (lsData == null) {
    let newsList = [];
    newsList.push(data);
    setDataInLs("newsList", JSON.stringify(newsList));
  } else {
    let newsList = JSON.parse(lsData);

    newsList.push(data);

    setDataInLs("newsList", JSON.stringify(newsList));
  }

  setTimeout(() => {
    window.close();
    window.open("/index.html");
  }, 3000);
}
