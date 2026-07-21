// Benchmark table data extracted from the paper (sec/4_experiments.tex).
// Rank classes: "r1" = 1st (cellF), "r2" = 2nd (cellS), "r3" = 3rd (cellT),
// "" = unranked (cellW), "fail" = failure, "" with text "--" = timeout/NA.
// Each cell is [value, rankClass].

const C = (v, r = "") => ({ v, r });

/* ================= Table 1: ETH3D (RRA/RTA @5 deg) ================= */
// Method groups at @5deg: COLMAP, VGGSfM, DF-SfM, MASt3R, MBA, AMB3R, Glob3R,
// Ours-o, Ours-dagger, Ours-o+BA. Each has RRA & RTA.
const ETH3D_METHODS = [
  "COLMAP", "VGGSfM", "DF-SfM", "MASt3R", "MBA", "AMB3R", "Glob3R",
  "Ours\u25E6", "Ours\u2020", "Ours\u25E6+BA",
];
const ETH3D_VENUES = [
  "CVPR'16", "CVPR'24", "CVPR'24", "ECCV'24", "3DV'26", "CVPR'26", "arXiv'25",
  "", "", "",
];
const ETH3D_ROWS = [
  ["courtyard",
    C(56.3), C(60.0), C(50.5), C(51.2), C(80.7), C(74.8), C(89.8,"r3"), C(64.4),
    C(94.7,"r2"), C(94.7), C(100.0,"r1"), C(96.5,"r3"), C(100.0,"r1"), C(97.0,"r2"),
    C(100.0,"r1"), C(84.9), C(100.0,"r1"), C(97.2), C(100.0,"r1"), C(99.6,"r1")],
  ["delivery",
    C(34.0), C(28.1), C(22.0), C(19.6), C(82.5), C(82.0,"r3"), C(83.1,"r3"), C(81.8),
    C(83.1,"r3"), C(83.0,"r2"), C(91.0,"r2"), C(76.6), C(100.0,"r1"), C(81.9),
    C(100.0,"r1"), C(75.8), C(100.0,"r1"), C(95.8), C(100.0,"r1"), C(100.0,"r1")],
  ["electro",
    C(53.3), C(48.5), C(79.9), C(58.6), C(82.8), C(81.2), C(100.0,"r1"), C(95.5,"r2"),
    C(95.6,"r2"), C(78.2), C(95.6,"r2"), C(81.2), C(100.0,"r1"), C(85.3,"r3"),
    C(83.1), C(75.2), C(100.0,"r1"), C(85.8), C(100.0,"r1"), C(99.3,"r1")],
  ["facade",
    C(92.2), C(90.0), C(57.5), C(48.7), C(80.9), C(82.6), C(74.3), C(75.3),
    C(100.0,"r1"), C(99.2,"r2"), C(100.0,"r1"), C(95.4), C(100.0,"r1"), C(96.8,"r3"),
    C(92.3,"r3"), C(83.5), C(100.0,"r1"), C(91.9), C(100.0,"r1"), C(99.9,"r1")],
  ["kicker",
    C(87.3,"r3"), C(86.2), C(100.0,"r1"), C(97.8), C(93.5,"r2"), C(91.0), C(100.0,"r1"), C(100.0,"r1"),
    C(100.0,"r1"), C(98.9), C(100.0,"r1"), C(99.2,"r2"), C(100.0,"r1"), C(95.7),
    C(100.0,"r1"), C(95.1), C(100.0,"r1"), C(99.0), C(100.0,"r1"), C(99.1,"r3")],
  ["meadow",
    C(0.9), C(0.9), C(100.0,"r1"), C(96.2,"r2"), C(56.2), C(58.1), C(58.1), C(58.1),
    C(100.0,"r1"), C(58.1), C(100.0,"r1"), C(95.2,"r3"), C(100.0,"r1"), C(92.0),
    C(81.0,"r3"), C(32.4), C(100.0,"r1"), C(98.1), C(100.0,"r1"), C(100.0,"r1")],
  ["office",
    C(36.9), C(32.3), C(64.9,"r3"), C(42.1), C(71.1,"r2"), C(54.5), C(100.0,"r1"), C(98.5,"r1"),
    C(100.0,"r1"), C(86.2,"r3"), C(100.0,"r1"), C(53.9), C(100.0,"r1"), C(63.9),
    C(100.0,"r1"), C(54.6), C(100.0,"r1"), C(52.6), C(100.0,"r1"), C(87.6,"r2")],
  ["pipes",
    C(30.8,"r3"), C(28.6), C(100.0,"r1"), C(97.8,"r2"), C(72.5,"r2"), C(61.5), C(100.0,"r1"), C(100.0,"r1"),
    C(100.0,"r1"), C(96.7,"r3"), C(100.0,"r1"), C(87.9), C(100.0,"r1"), C(92.9),
    C(100.0,"r1"), C(59.9), C(100.0,"r1"), C(92.3), C(100.0,"r1"), C(100.0,"r1")],
  ["playground",
    C(17.2), C(18.1), C(37.3), C(40.8), C(70.5), C(70.1), C(100.0,"r1"), C(93.6),
    C(94.7), C(93.8,"r3"), C(98.7,"r3"), C(62.2), C(100.0,"r1"), C(95.4,"r2"),
    C(99.9,"r2"), C(43.0), C(100.0,"r1"), C(84.1), C(100.0,"r1"), C(98.2,"r1")],
  ["relief",
    C(16.8), C(16.8), C(59.6,"r3"), C(57.9), C(32.9), C(32.9), C(34.2), C(40.2),
    C(100.0,"r1"), C(98.9,"r1"), C(100.0,"r1"), C(90.1), C(100.0,"r1"), C(96.6,"r3"),
    C(36.1), C(32.7), C(100.0,"r1"), C(88.2), C(100.0,"r1"), C(98.5,"r2")],
  ["relief 2",
    C(11.8), C(11.8), C(69.9,"r3"), C(70.3), C(40.9), C(39.1), C(57.4), C(76.1),
    C(100.0,"r1"), C(98.9,"r2"), C(100.0,"r1"), C(75.7), C(100.0,"r1"), C(95.9,"r3"),
    C(42.4), C(26.0), C(100.0,"r1"), C(76.2), C(100.0,"r1"), C(100.0,"r1")],
  ["terrace",
    C(100.0,"r1"), C(100.0,"r1"), C(38.7,"r2"), C(29.6), C(100.0,"r1"), C(99.6,"r2"), C(100.0,"r1"), C(100.0,"r1"),
    C(100.0,"r1"), C(100.0,"r1"), C(100.0,"r1"), C(97.2,"r3"), C(100.0,"r1"), C(95.6),
    C(100.0,"r1"), C(83.2), C(100.0,"r1"), C(96.8), C(100.0,"r1"), C(100.0,"r1")],
  ["terrains",
    C(100.0,"r1"), C(99.5,"r1"), C(70.4,"r3"), C(54.9), C(100.0,"r1"), C(91.9), C(58.2), C(52.5),
    C(100.0,"r1"), C(95.4,"r3"), C(91.6,"r2"), C(53.8), C(100.0,"r1"), C(97.3,"r2"),
    C(100.0,"r1"), C(39.4), C(100.0,"r1"), C(92.2), C(100.0,"r1"), C(99.5,"r1")],
];
const ETH3D_AVG = ["Average",
  C(49.0), C(47.8), C(65.4), C(58.9), C(74.2), C(70.7), C(81.2), C(79.7),
  C(97.5,"r3"), C(90.9,"r3"), C(98.2,"r2"), C(81.9), C(100.0,"r1"), C(91.3,"r2"),
  C(87.3), C(60.4), C(100.0,"r1"), C(88.5), C(100.0,"r1"), C(98.6,"r1")];

/* ================= Table 2: IMC2021 (AUC @3/5/10) ================= */
const IMC_METHODS = [
  "COLMAP", "GLOMAP", "PixSfM", "MASt3R-SfM", "DF-SfM", "Dense-SfM", "MV-RoMa",
  "VGGSfM", "VGGT", "VGGT+BA", "Pi3", "Pi3+BA", "DA3", "DGSfM", "MBA",
  "Ours\u25E6", "Ours\u2020", "Ours\u25E6+BA",
];
const IMC_VENUES = [
  "CVPR'16", "ECCV'24", "ICCV'21", "3DV'25", "CVPR'24", "CVPR'25", "CVPR'25",
  "CVPR'24", "CVPR'25", "CVPR'25", "ICLR'26", "ICLR'26", "ICLR'26", "ACCV'26", "3DV'26",
  "", "", "",
];
const IMC_ROWS = [
  ["AUC@3",
    C(44.58), C(45.91), C(25.54), C(31.77), C(47.43), C(48.48), C(51.31,"r3"),
    C(45.23), C(41.15), C(44.96), C(43.34), C(55.30,"r1"), C(44.15), C(50.66), C(47.29),
    C(30.88), C(49.55), C(55.28,"r2")],
  ["AUC@5",
    C(56.18), C(58.29), C(34.80), C(46.36), C(59.84), C(60.79), C(62.92),
    C(58.89), C(55.52), C(58.08), C(57.57), C(66.43,"r2"), C(58.54), C(63.03,"r3"), C(60.37),
    C(45.99), C(63.68), C(68.03,"r1")],
  ["AUC@10",
    C(68.73), C(71.81), C(46.73), C(64.37), C(73.19), C(73.90), C(75.92),
    C(73.92), C(71.73), C(73.52), C(73.35), C(78.67,"r2"), C(74.21), C(76.30,"r3"), C(74.59),
    C(64.98), C(78.26), C(80.86,"r1")],
];

/* ================= Table 3: Tanks & Temples ================= */
const TNT_METHODS = [
  "DROID", "GLOMAP", "ACE-0", "Spann3R", "MASt3R", "DF-SfM", "Cut3R", "Light3R",
  "SLAM3R", "VGGT-SLAM", "FlowMap", "SAIL", "SAIL-OPT", "MBA",
  "Ours\u25E6", "Ours\u2020", "Ours\u25E6+BA",
];
const TNT_VENUES = [
  "NeurIPS'21", "ECCV'24", "ECCV'24", "3DV'25", "ECCV'24", "CVPR'24", "CVPR'25", "CVPR'25",
  "CVPR'25", "arXiv'25", "3DV'25", "3DV'26", "3DV'26", "3DV'26",
  "", "", "",
];
const TNT_ROWS = [
  ["RRA@5 \u2191",
    C(31.3), C(75.8,"r2"), C(56.9), C(22.1), C(49.2), C(69.6), C(18.8), C(52.0),
    C(20.3), C(57.3), C(31.7), C(70.4), C(71.5), C(71.7),
    C(70.0), C(83.8,"r2"), C(93.1,"r1")],
  ["RTA@5 \u2191",
    C(40.3), C(76.7), C(57.9), C(30.7), C(54.0), C(69.3), C(25.8), C(52.8),
    C(24.7), C(67.9), C(35.7), C(74.7), C(77.7,"r3"), C(77.0),
    C(74.0), C(85.8,"r2"), C(91.8,"r1")],
  ["ATE \u2193",
    C("0.021"), C("0.010"), C("0.015"), C("0.016"), C("0.011"), C("0.014"), C("0.017"), C("0.011"),
    C("0.015"), C("0.008"), C("0.017"), C("0.008"), C("0.008"), C("0.006","r3"),
    C("0.009"), C("0.005","r2"), C("0.003","r1")],
];

/* ================= Table 4: FastMap (ATE / RTA@3 / AUC@3) ================= */
// Three metric groups, each over 6 methods: COLMAP, FastMap, GLOMAP, Ours-o, Ours-dagger, Ours-o+BA.
const FM_METHODS = ["COLMAP", "FastMap", "GLOMAP", "Ours\u25E6", "Ours\u2020", "Ours\u25E6+BA"];
const FM_GROUPS = ["ATE \u2193", "RTA@3 \u2191", "AUC@3 \u2191"];
// Rows: [scene, nimgs, ...6 ATE, ...6 RTA, ...6 AUC]
const FM_ROWS = [
  ["mipnerf360 (9)", "215.6",
    C("5.8e-5","r2"), C("4.2e-4","r3"), C("3.3e-5","r1"), C("6.1e-3"), C("8.0e-4"), C("1.2e-3"),
    C(100.0,"r1"), C(99.9,"r2"), C(100.0,"r1"), C(71.6), C(91.8), C(97.6,"r3"),
    C(97.2,"r3"), C(97.4,"r2"), C(98.2,"r1"), C(32.0), C(55.6), C(71.9)],
  ["tnt_advn (6)", "337.8",
    C("1.2e-3","r2"), C("6.4e-3","r3"), C("1.2e-2"), C("1.02e-2"), C("1.04e-2"), C("1.1e-3","r1"),
    C(98.5,"r1"), C(71.4), C(79.1,"r3"), C(64.8), C(69.7), C(93.9,"r2"),
    C(94.8,"r1"), C(42.6), C(75.3,"r2"), C(35.4), C(41.9), C(60.0,"r3")],
  ["tnt_intm (8)", "268.6",
    C("2.6e-4","r3"), C("7.8e-5","r2"), C("1.9e-5","r1"), C("5.0e-4"), C("3.0e-4"), C("1.0e-3"),
    C(99.8,"r3"), C(99.9,"r2"), C(100.0,"r1"), C(95.1), C(97.4), C(92.9),
    C(98.9,"r2"), C(94.1,"r3"), C(99.0,"r1"), C(55.7), C(67.3), C(67.9)],
  ["tnt_trng (7)", "470.1",
    C("3.0e-4","r1"), C("3.0e-3","r3"), C("1.1e-2"), C("3.1e-3"), C("2.2e-3","r2"), C("3.2e-3"),
    C(99.9,"r1"), C(87.8), C(88.7,"r3"), C(78.0), C(91.7), C(92.5,"r2"),
    C(99.5,"r1"), C(77.2,"r3"), C(87.9,"r2"), C(44.7), C(59.1), C(68.5)],
  ["nerf_osr (8)", "402.8",
    C("1.3e-3","r3"), C("1.6e-3"), C("1.1e-3","r1"), C("1.2e-3","r2"), C("1.0e-3","r1"), C("1.2e-3","r2"),
    C(92.1,"r1"), C(91.7,"r3"), C(92.0,"r2"), C(85.4), C(91.8), C(87.4),
    C(71.7,"r2"), C(70.9,"r3"), C(71.9,"r1"), C(45.7), C(51.4), C(53.9)],
  ["urban_scene (3)", "3824",
    C("1.4e-5","r1"), C("1.7e-5","r2"), C("1.4e-5","r1"), C("2.9e-3"), C("1.6e-3"), C("4.0e-4","r3"),
    C(100.0,"r1"), C(99.9,"r2"), C(99.9,"r2"), C(39.6), C(67.9), C(96.7,"r3"),
    C(97.0,"r1"), C(95.3,"r2"), C(97.0,"r1"), C(8.9), C(37.4), C(61.5,"r3")],
  ["mill19_bldg", "1920",
    C("1.9e-5","r1"), C("3.0e-4","r3"), C("1.3e-2"), C("3.5e-3"), C("5.0e-4"), C("2.0e-4","r2"),
    C(99.9,"r1"), C(99.9,"r1"), C(0.1,"fail"), C(23.1,"r3"), C(86.6,"r2"), C(99.9,"r1"),
    C(95.6,"r1"), C(95.5,"r2"), C(0.0,"fail"), C(3.1), C(41.4), C(88.4,"r3")],
  ["mill19_rubble", "1657",
    C("3.4e-5","r1"), C("3.6e-5","r2"), C("6.4e-5","r3"), C("2.1e-3"), C("2.0e-4"), C("1.0e-4"),
    C(99.9,"r1"), C(99.9,"r1"), C(99.8,"r2"), C(86.4), C(97.9,"r3"), C(99.8,"r2"),
    C(94.6,"r1"), C(93.6,"r3"), C(94.5,"r2"), C(33.0), C(69.8), C(90.9)],
  ["drone_deploy (9)", "524.7",
    C("2.0e-3","r3"), C("4.9e-3"), C("4.3e-3"), C("2.5e-3"), C("7.0e-4","r2"), C("8.0e-4","r1"),
    C(91.3), C(97.9,"r3"), C(98.2,"r2"), C(61.6), C(93.5), C(98.8,"r1"),
    C(65.2), C(79.2,"r2"), C(81.1,"r1"), C(21.9), C(51.0), C(74.3,"r3")],
  ["eyeful_apt", "3804",
    C("2.2e-3","r3"), C("2.8e-3"), C("9.4e-3"), C("2.5e-3"), C("1.3e-3","r2"), C("2.0e-4","r1"),
    C(90.2,"r2"), C(86.8,"r3"), C(75.0), C(70.2), C(84.1), C(91.0,"r1"),
    C(62.0,"r1"), C(45.5,"r3"), C(50.5,"r2"), C(26.4), C(44.4), C(44.2)],
  ["eyeful_kitch", "6042",
    C("--"), C("3.1e-3"), C("7.4e-3"), C("7.0e-4","r3"), C("2.0e-4","r2"), C("2.0e-4","r1"),
    C("--"), C(85.0,"r3"), C(59.9), C(74.9), C(94.3,"r2"), C(95.5,"r1"),
    C("--"), C(38.1), C(41.2,"r2"), C(27.3), C(56.2,"r3"), C(53.6,"r1")],
];

/* ============================ Rendering ============================ */
function fmt(v) {
  if (typeof v === "number") return Number.isInteger(v) ? v.toFixed(1) : String(v);
  return v;
}
function cellTd(cell, extraClass = "") {
  const cls = [cell.r, extraClass].filter(Boolean).join(" ");
  return `<td${cls ? ` class="${cls}"` : ""}>${fmt(cell.v)}</td>`;
}
// Build a <colgroup>: first `nHead` columns get `headW`, the remaining `nData` share the rest.
function colgroup(nHead, headW, nData) {
  let cg = "<colgroup>";
  for (let i = 0; i < nHead; i++) cg += `<col style="width:${headW}" />`;
  const w = `${(100 - parseFloat(headW) * nHead) / nData}%`;
  for (let i = 0; i < nData; i++) cg += `<col style="width:${w}" />`;
  return cg + "</colgroup>";
}

// Wide method table: each method has `sub` sub-columns (e.g. RRA/RTA), and rows
// are scenes. `oursFrom` marks the first "ours" method index for a divider.
function renderMethodTable(methods, venues, subHeaders, rows, avgRow, oursFrom) {
  const sub = subHeaders.length;
  const cg = colgroup(1, "7%", methods.length * sub);
  let head = '<thead><tr><th class="row-head">Scene</th>';
  methods.forEach((m, i) => {
    const ours = i >= oursFrom ? " ours" : "";
    head += `<th class="${ours.trim()}" colspan="${sub}">${m}</th>`;
  });
  head += "</tr><tr><th class=\"row-head\"></th>";
  methods.forEach((m, i) => {
    const ours = i >= oursFrom ? " ours" : "";
    const vlabel = venues[i] ? venues[i] : "&nbsp;";
    head += `<th class="venue-cell${ours}" colspan="${sub}">${vlabel}</th>`;
  });
  head += "</tr><tr><th class=\"row-head\"></th>";
  methods.forEach((m, i) => {
    subHeaders.forEach((s, j) => {
      const ours = i >= oursFrom && j === 0 ? " ours" : "";
      head += `<th class="subh${ours}">${s}</th>`;
    });
  });
  head += "</tr></thead>";

  const bodyRow = (r, isAvg) => {
    let tds = `<td class="row-head">${r[0]}</td>`;
    for (let k = 1; k < r.length; k++) {
      const methodIdx = Math.floor((k - 1) / sub);
      const subIdx = (k - 1) % sub;
      const ours = methodIdx >= oursFrom && subIdx === 0 ? "ours" : "";
      tds += cellTd(r[k], ours);
    }
    return `<tr class="${isAvg ? "avg-row" : ""}">${tds}</tr>`;
  };
  let body = "<tbody>";
  rows.forEach((r) => (body += bodyRow(r, false)));
  if (avgRow) body += bodyRow(avgRow, true);
  body += "</tbody>";

  return `<div class="table-scroll"><table class="data">${cg}${head}${body}</table></div>`;
}

// Metric-as-rows table (IMC, T&T): methods are columns, metrics are rows.
function renderMetricTable(methods, venues, rows, oursFrom) {
  const cg = colgroup(1, "12%", methods.length);
  let head = '<thead><tr><th class="row-head">Metric</th>';
  methods.forEach((m, i) => {
    head += `<th class="${i >= oursFrom ? "ours" : ""}">${m}</th>`;
  });
  head += '</tr><tr><th class="row-head"></th>';
  methods.forEach((m, i) => {
    head += `<th class="venue-cell ${i >= oursFrom ? "ours" : ""}">${venues[i] || "&nbsp;"}</th>`;
  });
  head += "</tr></thead>";

  let body = "<tbody>";
  rows.forEach((r) => {
    let tds = `<td class="row-head">${r[0]}</td>`;
    for (let k = 1; k < r.length; k++) {
      tds += cellTd(r[k], k - 1 >= oursFrom ? "ours" : "");
    }
    body += `<tr>${tds}</tr>`;
  });
  body += "</tbody>";
  return `<div class="table-scroll"><table class="data">${cg}${head}${body}</table></div>`;
}

// FastMap grouped table: 3 metric groups x 6 methods, rows = scenes.
function renderFastMap(methods, groups, rows) {
  const nm = methods.length;
  const cg = colgroup(2, "9%", nm * groups.length);
  let head = '<thead><tr><th class="row-head" rowspan="2">Scene</th><th class="row-head" rowspan="2">#imgs</th>';
  groups.forEach((g) => (head += `<th colspan="${nm}" class="group-head">${g}</th>`));
  head += '</tr><tr>';
  groups.forEach(() => {
    methods.forEach((m, i) => {
      const ours = m.startsWith("Ours") ? " ours-sub" : "";
      const div = i === 0 ? " grp-div" : "";
      head += `<th class="subh${ours}${div}">${m}</th>`;
    });
  });
  head += "</tr></thead>";

  let body = "<tbody>";
  rows.forEach((r) => {
    let tds = `<td class="row-head">${r[0]}</td><td>${r[1]}</td>`;
    for (let k = 2; k < r.length; k++) {
      const idxInGroup = (k - 2) % nm;
      const div = idxInGroup === 0 ? "grp-div" : "";
      tds += cellTd(r[k], div);
    }
    body += `<tr>${tds}</tr>`;
  });
  body += "</tbody>";
  return `<div class="table-scroll"><table class="data">${cg}${head}${body}</table></div>`;
}

function block(id, title, caption, html) {
  return `<div class="table-block" id="${id}"><h3>${title}</h3><p class="tbl-caption">${caption}</p>${html}</div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("tables");
  if (!root) return;
  const parts = [];

  parts.push(block(
    "tab-eth3d",
    "Table 1 &mdash; SfM on ETH3D",
    "Relative Rotation / Translation Accuracy (RRA / RTA) at the 5&deg; threshold, following the MASt3R-SfM protocol. Baseline numbers from MBA, AMB3R, and Glob3R.",
    renderMethodTable(ETH3D_METHODS, ETH3D_VENUES, ["RRA", "RTA"], ETH3D_ROWS, ETH3D_AVG, 7)
  ));

  parts.push(block(
    "tab-imc",
    "Table 2 &mdash; Pose estimation on IMC2021",
    "AUC of pose error at 3&deg; / 5&deg; / 10&deg;. Baseline numbers taken from DGSfM (best front-end per method); MBA retains its original-source numbers.",
    renderMetricTable(IMC_METHODS, IMC_VENUES, IMC_ROWS, 15)
  ));

  parts.push(block(
    "tab-tnt",
    "Table 3 &mdash; SfM on Tanks &amp; Temples",
    "Overall RRA / RTA at 5&deg; and ATE, averaged across all 21 scenes. Baseline numbers from MBA and SAIL.",
    renderMetricTable(TNT_METHODS, TNT_VENUES, TNT_ROWS, 14)
  ));

  parts.push(block(
    "tab-fastmap",
    "Table 4 &mdash; Pose accuracy on the FastMap benchmark",
    "ATE (&darr;), RTA@3 (&uarr;), and AUC@3 (&uarr;) across eight large-scale datasets. Baseline numbers from FastMap. Red = failure; &ldquo;--&rdquo; = timeout / not available.",
    renderFastMap(FM_METHODS, FM_GROUPS, FM_ROWS)
  ));

  root.innerHTML = parts.join("");
});
