let photo = document.getElementById("photo");
let upload = document.getElementById("upload");

upload.onchange = function(){
 photo.src = URL.createObjectURL(upload.files[0]);
}

function filter1(){ photo.style.filter = "grayscale(100%)"; }
function filter2(){ photo.style.filter = "brightness(150%)"; }
function filter3(){ photo.style.filter = "blur(3px)"; }
function reset(){ photo.style.filter = "none"; }

document.getElementById("download").onclick = function(){
 let link = document.createElement("a");
 link.download = "chaman-edit.png";
 link.href = photo.src;
 link.*{margin:0;padding:0;box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif}
body{background:#000;color:#fff}
.phone{max-width:430px;margin:0 auto;background:#0a0a0a;min-height:100vh;border:1px solid #222}
.top{padding:12px;display:flex;justify-content:space-between;align-items:center;background:#111;position:sticky;top:0;z-index:20}
.icon{background:#ffffff22;border:none;width:36px;height:36px;border-radius:50%;color:#fff;cursor:pointer}
.preview{position:relative;background:#111;aspect-ratio:9/12;overflow:hidden}
.preview video,.preview img{width:100%;height:100%;object-fit:cover}
.cap{position:absolute;bottom:30%;width:100%;text-align:center;font-weight:900;font-size:22px;text-shadow:0 2px 10px #000,-2px -2px 0 #000,2px -2px 0 #000;pointer-events:none}
.txt{position:absolute;top:20%;width:100%;text-align:center;font-weight:800;font-size:28px;text-shadow:0 2px 8px #000;pointer-events:none}
.bar{display:flex;gap:8px;padding:10px;overflow-x:auto;background:#0a0a0a;border-bottom:1px solid #222}
.t{padding:8px 14px;background:#1c1c1e;border:1px solid #333;border-radius:20px;font-size:12px;white-space:nowrap;cursor:pointer;flex-shrink:0}
.t.active{background:#fff;color:#000;font-weight:700}
.panel{background:#1c1c1e;border-radius:20px 20px 0 0;padding:16px;margin-top:8px}
.btn{background:#0A84FF;color:#fff;border:none;width:100%;padding:14px;border-radius:30px;font-weight:700;font-size:15px;margin-top:10px;cursor:pointer}
.btn2{background:#fff;color:#000;border:none;width:100%;padding:14px;border-radius:30px;font-weight:800;margin-top:10px;cursor:pointer}
.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:10px}
.f{aspect-ratio:1;background:#2c2c2e;border-radius:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:11px;border:2px solid transparent;cursor:pointer}
.f.active{border-color:#0A84FF;background:#0A84FF22}
.up{border:2px dashed #444;border-radius:16px;padding:20px;text-align:center;margin:10px 0;background:#111;cursor:pointer}
.ai-badge{background:linear-gradient(90deg,#a855f7,#ec4899);padding:3px 8px;border-radius:20px;font-size:10px;font-weight:800}
