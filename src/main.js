import Phaser from "phaser";
import "./style.css";
import {
  initMobile,
  isTouchMode,
  onTouchModeChange,
  touchState,
  consumeTouchJump,
  showTouchControls,
  hideTouchControls,
  isFullscreenAvailable,
  isFullscreen,
  toggleFullscreen,
} from "./touch-controls.js";

initMobile();

const pt = Phaser,
  pe = "ben_alice_math_attack_unlocked_skins",
  me = "ben_alice_math_attack_selected_skins",
  Ft = [
    {
      id: "classic",
      icon: "👕",
      category: "sport",
      fr: "Classique",
      en: "Classic",
      primary: [239, 68, 68],
      secondary: [37, 99, 235],
      pants: [30, 58, 138],
      shoes: [59, 130, 246],
      sole: [250, 204, 21],
      hat: "none",
    },
    {
      id: "banana",
      icon: "🍌",
      category: "fruit",
      fr: "Banane",
      en: "Banana",
      primary: [250, 204, 21],
      secondary: [254, 240, 138],
      pants: [234, 179, 8],
      shoes: [120, 53, 15],
      sole: [250, 204, 21],
      hat: "banana",
    },
    {
      id: "panda",
      icon: "🐼",
      category: "animal",
      fr: "Panda",
      en: "Panda",
      primary: [248, 250, 252],
      secondary: [15, 23, 42],
      pants: [15, 23, 42],
      shoes: [15, 23, 42],
      sole: [248, 250, 252],
      hat: "panda",
    },
    {
      id: "karate",
      icon: "🥋",
      category: "sport",
      fr: "Karaté",
      en: "Karate",
      primary: [248, 250, 252],
      secondary: [15, 23, 42],
      pants: [226, 232, 240],
      shoes: [239, 68, 68],
      sole: [255, 255, 255],
      hat: "headband",
    },
    {
      id: "strawberry",
      icon: "🍓",
      category: "fruit",
      fr: "Fraise",
      en: "Strawberry",
      primary: [225, 29, 72],
      secondary: [253, 224, 71],
      pants: [190, 18, 60],
      shoes: [34, 197, 94],
      sole: [22, 101, 52],
      hat: "leaf",
    },
    {
      id: "firefighter",
      icon: "🚒",
      category: "job",
      fr: "Pompier",
      en: "Firefighter",
      primary: [185, 28, 28],
      secondary: [250, 204, 21],
      pants: [30, 41, 59],
      shoes: [239, 68, 68],
      sole: [250, 204, 21],
      hat: "firefighter",
    },
    {
      id: "bunny",
      icon: "🐰",
      category: "animal",
      fr: "Lapin Rose",
      en: "Pink Bunny",
      primary: [244, 114, 182],
      secondary: [252, 231, 243],
      pants: [236, 72, 153],
      shoes: [255, 255, 255],
      sole: [244, 114, 182],
      hat: "bunny",
    },
    {
      id: "astronaut",
      icon: "🚀",
      category: "job",
      fr: "Cosmonaute",
      en: "Astronaut",
      primary: [226, 232, 240],
      secondary: [56, 189, 248],
      pants: [148, 163, 184],
      shoes: [249, 115, 22],
      sole: [255, 255, 255],
      hat: "visor",
    },
    {
      id: "basketball",
      icon: "🏀",
      category: "sport",
      fr: "Basket",
      en: "Basketball",
      primary: [250, 204, 21],
      secondary: [126, 34, 206],
      pants: [107, 33, 168],
      shoes: [249, 115, 22],
      sole: [255, 255, 255],
      hat: "sweatband",
    },
    {
      id: "pineapple",
      icon: "🍍",
      category: "fruit",
      fr: "Ananas",
      en: "Pineapple",
      primary: [234, 179, 8],
      secondary: [161, 98, 7],
      pants: [202, 138, 4],
      shoes: [22, 163, 74],
      sole: [250, 204, 21],
      hat: "pineapple",
    },
    {
      id: "frog_suit",
      icon: "🐸",
      category: "animal",
      fr: "Grenouille",
      en: "Frog",
      primary: [34, 197, 94],
      secondary: [187, 247, 208],
      pants: [21, 128, 61],
      shoes: [22, 101, 52],
      sole: [134, 239, 172],
      hat: "frog_eyes",
    },
    {
      id: "chef",
      icon: "👨‍🍳",
      category: "job",
      fr: "Chef Pâtissier",
      en: "Master Chef",
      primary: [255, 255, 255],
      secondary: [239, 68, 68],
      pants: [51, 65, 85],
      shoes: [15, 23, 42],
      sole: [226, 232, 240],
      hat: "chef",
    },
    {
      id: "watermelon",
      icon: "🍉",
      category: "fruit",
      fr: "Pastèque",
      en: "Watermelon",
      primary: [244, 63, 94],
      secondary: [22, 163, 74],
      pants: [21, 128, 61],
      shoes: [20, 83, 45],
      sole: [134, 239, 172],
      hat: "melon",
    },
    {
      id: "tennis",
      icon: "🎾",
      category: "sport",
      fr: "Tennis",
      en: "Tennis Pro",
      primary: [248, 250, 252],
      secondary: [34, 197, 94],
      pants: [22, 163, 74],
      shoes: [255, 255, 255],
      sole: [132, 204, 22],
      hat: "tennis_visor",
    },
    {
      id: "cat",
      icon: "🐱",
      category: "animal",
      fr: "Chaton Doré",
      en: "Golden Kitten",
      primary: [249, 115, 22],
      secondary: [254, 215, 170],
      pants: [234, 88, 12],
      shoes: [255, 255, 255],
      sole: [249, 115, 22],
      hat: "cat_ears",
    },
    {
      id: "pirate",
      icon: "🏴‍☠️",
      category: "job",
      fr: "Pirate",
      en: "Pirate",
      primary: [185, 28, 28],
      secondary: [250, 204, 21],
      pants: [30, 41, 59],
      shoes: [120, 53, 15],
      sole: [250, 204, 21],
      hat: "pirate",
    },
    {
      id: "orange_fruit",
      icon: "🍊",
      category: "fruit",
      fr: "Orange",
      en: "Orange",
      primary: [249, 115, 22],
      secondary: [253, 186, 116],
      pants: [234, 88, 12],
      shoes: [22, 163, 74],
      sole: [249, 115, 22],
      hat: "orange_leaf",
    },
    {
      id: "skier",
      icon: "⛷️",
      category: "sport",
      fr: "Skieur",
      en: "Alpine Skier",
      primary: [14, 165, 233],
      secondary: [236, 72, 153],
      pants: [2, 132, 199],
      shoes: [248, 250, 252],
      sole: [236, 72, 153],
      hat: "beanie",
    },
    {
      id: "wizard",
      icon: "🧙‍♂️",
      category: "job",
      fr: "Magicien",
      en: "Wizard",
      primary: [109, 40, 217],
      secondary: [250, 204, 21],
      pants: [76, 29, 149],
      shoes: [250, 204, 21],
      sole: [109, 40, 217],
      hat: "wizard",
    },
    {
      id: "grape",
      icon: "🍇",
      category: "fruit",
      fr: "Raisin",
      en: "Grape",
      primary: [147, 51, 234],
      secondary: [216, 180, 254],
      pants: [107, 33, 168],
      shoes: [34, 197, 94],
      sole: [147, 51, 234],
      hat: "leaf",
    },
  ];
let Lt = ["classic", "banana", "panda", "karate"],
  bt = { p1: "classic", p2: "classic" };
try {
  if (typeof window < "u" && window.localStorage) {
    const it = window.localStorage.getItem(pe);
    if (it) {
      const Y = JSON.parse(it);
      Array.isArray(Y) &&
        Y.length > 0 &&
        (Lt = Array.from(new Set(["classic", ...Y])));
    }
    const X = window.localStorage.getItem(me);
    if (X) {
      const Y = JSON.parse(X);
      Y &&
        typeof Y == "object" &&
        (Ft.some((W) => W.id === Y.p1) && (bt.p1 = Y.p1),
        Ft.some((W) => W.id === Y.p2) && (bt.p2 = Y.p2));
    }
  }
} catch {}
function jt() {
  try {
    typeof window < "u" &&
      window.localStorage &&
      (window.localStorage.setItem(pe, JSON.stringify(Lt)),
      window.localStorage.setItem(me, JSON.stringify(bt)));
  } catch {}
}
function ne() {
  return Ft.filter((it) => Lt.includes(it.id));
}
function Me() {
  return (Lt = Ft.map((it) => it.id)), jt(), ne();
}
function re(it = "p1") {
  const X = bt[it] || "classic";
  return Lt.includes(X) ? X : "classic";
}
function Ht(it = "p1") {
  const X = re(it);
  return Ft.find((Y) => Y.id === X) || Ft[0];
}
function Qt(it, X) {
  return (
    Ft.some((Y) => Y.id === X) && Lt.includes(X) && ((bt[it] = X), jt()), Ht(it)
  );
}
function Re(it = "p1", X = 1) {
  const Y = ne();
  if (Y.length === 0) return Ft[0];
  const W = re(it),
    K =
      (Math.max(
        0,
        Y.findIndex((p) => p.id === W),
      ) +
        X +
        Y.length) %
      Y.length;
  return (bt[it] = Y[K].id), jt(), Y[K];
}
function Fe() {
  const it = Ft.filter((Y) => !Lt.includes(Y.id));
  if (it.length === 0) return null;
  const X = it[0];
  return Lt.push(X.id), jt(), X;
}
function ct(it, X, Y = null) {
  const W = Y || re(it);
  return `${it}-${W}-${X}`;
}
function Le(it) {
  const X = ["front", "right", "left", "walk", "ouch"];
  for (const Y of Ft)
    for (const W of ["p1", "p2"]) {
      const Z = W === "p2";
      for (const K of X) {
        const p = `${W}-${Y.id}-${K}`;
        it.textures.exists(p) || Oe(it, p, Z, K, Y);
      }
    }
}
function Oe(it, X, Y, W, Z) {
  const c = new Array(1470).fill(null),
    a = (N, O, B) => {
      N >= 0 && N < 35 && O >= 0 && O < 42 && (c[O * 35 + N] = B);
    },
    n = (N, O, B, L, G) => {
      for (let w = Math.min(O, L); w <= Math.max(O, L); w++)
        for (let b = Math.min(N, B); b <= Math.max(N, B); b++) a(b, w, G);
    },
    r = [15, 23, 42],
    e = [255, 255, 255],
    s = [255, 224, 198],
    o = [244, 198, 166],
    i = [255, 115, 115],
    h = [239, 68, 68],
    l = [251, 146, 180],
    d = [56, 189, 248],
    u = [146, 96, 56],
    v = [182, 128, 82],
    m = W === "ouch",
    x = m ? i : s,
    g = m ? h : o;
  let y = Z.primary,
    T = Z.secondary,
    C = Z.primary,
    E = Z.pants,
    M = Z.shoes,
    P = Z.sole;
  if (
    (Z.id === "classic" &&
      (Y
        ? ((y = [34, 150, 75]),
          (T = [244, 114, 182]),
          (C = [244, 114, 182]),
          (E = [30, 58, 138]),
          (M = [147, 197, 253]),
          (P = [255, 255, 255]))
        : ((y = [239, 68, 68]),
          (T = [37, 99, 235]),
          (C = [239, 68, 68]),
          (E = [195, 34, 34]),
          (M = [59, 130, 246]),
          (P = [250, 204, 21]))),
    W === "front" || W === "ouch")
  )
    n(13, 23, 21, 31, y),
      n(16, 24, 18, 30, T),
      Z.id === "karate"
        ? n(13, 29, 21, 30, T)
        : (Z.id === "strawberry" || Z.id === "watermelon") &&
          (a(14, 26, T),
          a(20, 26, T),
          a(17, 28, T),
          a(15, 30, T),
          a(19, 30, T)),
      n(11, 24, 12, 29, C),
      n(22, 24, 23, 29, C),
      n(11, 30, 12, 31, s),
      n(22, 30, 23, 31, s),
      Y && Z.id === "classic" && n(14, 23, 20, 23, [250, 204, 21]),
      n(13, 32, 21, 34, E),
      n(13, 35, 16, 38, !Y && Z.id === "classic" ? s : E),
      n(18, 35, 21, 38, !Y && Z.id === "classic" ? s : E),
      n(13, 39, 16, 39, M),
      n(13, 40, 16, 40, P),
      n(18, 39, 21, 39, M),
      n(18, 40, 21, 40, P);
  else if (W === "right" || W === "left")
    n(14, 23, 20, 31, y),
      n(16, 25, 18, 29, T),
      n(16, 29, 18, 31, s),
      n(14, 32, 20, 34, E),
      n(14, 35, 16, 38, !Y && Z.id === "classic" ? o : E),
      n(18, 35, 20, 38, !Y && Z.id === "classic" ? s : E),
      n(14, 39, 16, 39, M),
      n(14, 40, 16, 40, P),
      n(18, 39, 20, 39, M),
      n(18, 40, 20, 40, P);
  else if (W === "walk") {
    n(14, 23, 20, 31, y),
      n(16, 25, 18, 29, T),
      n(12, 25, 13, 28, C),
      a(12, 29, s),
      n(21, 25, 22, 28, C),
      a(22, 29, s),
      n(14, 32, 20, 34, E);
    const N = !Y && Z.id === "classic" ? s : E;
    n(12, 35, 15, 36, N),
      n(11, 37, 14, 38, N),
      n(10, 39, 13, 39, M),
      n(10, 40, 13, 40, P),
      n(19, 35, 21, 36, N),
      n(20, 37, 22, 38, N),
      n(20, 39, 23, 39, M),
      n(20, 40, 23, 40, P);
  }
  const A = 17,
    R = 13,
    F = m ? 9.2 : 8.2,
    D = m ? 9.8 : 9;
  for (let N = 4; N <= 22; N++)
    for (let O = 7; O <= 27; O++) {
      const B = (O - A) / F,
        L = (N - R) / D;
      B * B + L * L <= 1 && a(O, N, N >= 20 ? g : x);
    }
  for (let N = 4; N <= 9; N++)
    for (let O = 8; O <= 26; O++) {
      const B = (O - A) / (F + 0.4),
        L = (N - (R - 1)) / D;
      B * B + L * L <= 1 && a(O, N, N <= 5 && O >= 14 && O <= 20 ? v : u);
    }
  if (Y)
    W === "front" || W === "ouch"
      ? (n(8, 8, 9, 22, u), n(25, 8, 26, 22, u))
      : W === "right" || W === "walk"
        ? n(8, 6, 14, 22, u)
        : W === "left" && n(20, 6, 26, 22, u);
  else {
    for (const N of [10, 11, 13, 14, 16, 17, 19, 20, 22, 23])
      c[350 + N] && a(N, 10, u);
    W === "right" || W === "walk"
      ? n(9, 7, 13, 16, u)
      : W === "left" && n(21, 7, 25, 16, u);
  }
  if (Z.hat === "banana")
    n(11, 3, 23, 6, [250, 204, 21]),
      n(14, 2, 20, 3, [254, 240, 138]),
      n(16, 1, 18, 2, [120, 53, 15]),
      n(8, 7, 10, 19, [250, 204, 21]),
      n(24, 7, 26, 19, [250, 204, 21]);
  else if (Z.hat === "headband")
    n(9, 8, 25, 9, [239, 68, 68]),
      a(17, 8, e),
      a(7, 9, [239, 68, 68]),
      a(6, 10, [239, 68, 68]);
  else if (Z.hat === "leaf")
    n(11, 3, 23, 5, [34, 197, 94]),
      n(16, 1, 18, 3, [21, 128, 61]),
      a(10, 6, [34, 197, 94]),
      a(17, 6, [34, 197, 94]),
      a(24, 6, [34, 197, 94]);
  else if (Z.hat === "visor")
    n(10, 2, 24, 5, [226, 232, 240]),
      n(13, 4, 21, 5, [56, 189, 248]),
      n(8, 6, 9, 19, [226, 232, 240]),
      n(25, 6, 26, 19, [226, 232, 240]);
  else if (Z.hat === "sweatband")
    n(9, 8, 25, 9, [126, 34, 206]), n(12, 8, 22, 8, [250, 204, 21]);
  else if (Z.hat === "melon") {
    n(10, 3, 24, 6, [22, 163, 74]);
    for (let N = 11; N <= 23; N += 3) n(N, 3, N, 6, [20, 83, 45]);
  } else
    Z.hat === "pirate"
      ? (n(7, 5, 27, 7, [15, 23, 42]),
        n(10, 2, 24, 5, [30, 41, 59]),
        n(10, 2, 24, 2, [250, 204, 21]),
        n(16, 4, 18, 5, [250, 204, 21]))
      : Z.hat === "panda"
        ? (n(10, 3, 24, 6, [248, 250, 252]),
          n(7, 2, 11, 6, [15, 23, 42]),
          n(23, 2, 27, 6, [15, 23, 42]))
        : Z.hat === "bunny"
          ? (n(11, 0, 14, 6, [244, 114, 182]),
            n(12, 1, 13, 5, [252, 231, 243]),
            n(20, 0, 23, 6, [244, 114, 182]),
            n(21, 1, 22, 5, [252, 231, 243]))
          : Z.hat === "frog_eyes"
            ? (n(10, 4, 24, 6, [34, 197, 94]),
              n(10, 1, 14, 4, [34, 197, 94]),
              n(11, 2, 13, 3, e),
              a(12, 3, r),
              n(20, 1, 24, 4, [34, 197, 94]),
              n(21, 2, 23, 3, e),
              a(22, 3, r))
            : Z.hat === "cat_ears"
              ? (n(9, 2, 13, 6, [249, 115, 22]),
                a(11, 4, [244, 114, 182]),
                n(21, 2, 25, 6, [249, 115, 22]),
                a(23, 4, [244, 114, 182]))
              : Z.hat === "firefighter"
                ? (n(8, 5, 26, 6, [185, 28, 28]),
                  n(11, 2, 23, 5, [220, 38, 38]),
                  n(16, 3, 18, 4, [250, 204, 21]))
                : Z.hat === "chef"
                  ? (n(10, 0, 24, 4, e), n(11, 4, 23, 6, [226, 232, 240]))
                  : Z.hat === "wizard"
                    ? (n(7, 6, 27, 7, [109, 40, 217]),
                      n(11, 3, 23, 6, [126, 34, 206]),
                      n(14, 1, 20, 3, [109, 40, 217]),
                      a(17, 0, [250, 204, 21]),
                      a(15, 4, [250, 204, 21]),
                      a(19, 5, [250, 204, 21]))
                    : Z.hat === "pineapple"
                      ? (n(11, 4, 23, 6, [250, 204, 21]),
                        n(12, 2, 22, 4, [22, 163, 74]),
                        a(11, 1, [34, 197, 94]),
                        a(15, 0, [34, 197, 94]),
                        a(17, 0, [21, 128, 61]),
                        a(19, 0, [34, 197, 94]),
                        a(23, 1, [34, 197, 94]))
                      : Z.hat === "orange_leaf"
                        ? (n(11, 3, 23, 6, [249, 115, 22]),
                          n(17, 1, 22, 3, [34, 197, 94]),
                          a(16, 2, [120, 53, 15]))
                        : Z.hat === "tennis_visor"
                          ? (n(9, 6, 25, 8, e), n(8, 8, 26, 9, [34, 197, 94]))
                          : Z.hat === "beanie" &&
                            (n(10, 3, 24, 7, [14, 165, 233]),
                            n(9, 6, 25, 7, [236, 72, 153]),
                            n(15, 0, 19, 2, e));
  if (m) {
    a(13, 13, r),
      a(14, 14, r),
      a(13, 15, r),
      a(21, 13, r),
      a(20, 14, r),
      a(21, 15, r);
    for (let N = 15; N <= 20; N++)
      a(11, N, d), a(12, N, d), a(22, N, d), a(23, N, d);
    for (let N = 15; N <= 19; N++) a(N, 17, r), a(N, 18, e), a(N, 19, r);
  } else
    W === "front"
      ? (a(13, 13, e),
        a(14, 13, r),
        a(13, 14, r),
        a(14, 14, r),
        a(20, 13, e),
        a(21, 13, r),
        a(20, 14, r),
        a(21, 14, r),
        a(11, 15, l),
        a(12, 15, l),
        a(22, 15, l),
        a(23, 15, l),
        a(15, 17, r),
        a(16, 18, r),
        a(17, 18, r),
        a(18, 18, r),
        a(19, 17, r))
      : W === "right" || W === "walk"
        ? (a(20, 13, e),
          a(21, 13, r),
          a(20, 14, r),
          a(21, 14, r),
          a(18, 15, l),
          a(19, 15, l),
          a(20, 17, r),
          a(21, 18, r),
          a(22, 18, r),
          a(23, 17, r))
        : W === "left" &&
          (a(13, 13, r),
          a(14, 13, e),
          a(13, 14, r),
          a(14, 14, r),
          a(15, 15, l),
          a(16, 15, l),
          a(11, 17, r),
          a(12, 18, r),
          a(13, 18, r),
          a(14, 17, r));
  const I = [...c];
  for (let N = 1; N < 41; N++)
    for (let O = 1; O < 34; O++)
      c[N * 35 + O] ||
        ((c[(N - 1) * 35 + O] ||
          c[(N + 1) * 35 + O] ||
          c[N * 35 + (O - 1)] ||
          c[N * 35 + (O + 1)]) &&
          (I[N * 35 + O] = r));
  const U = it.make.graphics({ x: 0, y: 0, add: !1 });
  for (let N = 0; N < 42; N++)
    for (let O = 0; O < 35; O++) {
      const B = I[N * 35 + O];
      if (!B) continue;
      const L = (B[0] << 16) | (B[1] << 8) | B[2];
      U.fillStyle(L, 1), U.fillRect(O * 4, N * 4 + 1, 4, 4);
    }
  U.generateTexture(X, 140, 170), U.destroy();
}
class we extends pt.Scene {
  constructor() {
    super("BootScene");
  }
  preload() {
    const X = ["front", "right", "left", "walk", "ouch"];
    for (const Y of ["p1", "p2"])
      for (const W of X)
        this.load.image(`${Y}-${W}`, `assets/characters/${Y}-${W}.png`);
  }
  create() {
    Le(this),
      this._createSlimeTexture(),
      this._createMonsterTextures(),
      this._createTrapTextures(),
      this._createPickupTextures(),
      this._createBubbleTextures(),
      this._createParticleTexture(),
      this._createTearTexture(),
      this.scene.start("MenuScene");
  }
  _createMonsterTextures() {
    const X = this.make.graphics({ x: 0, y: 0, add: !1 });
    X.lineStyle(3, 14427686, 1),
      X.strokeLineShape(new pt.Geom.Line(8, 24, 2, 31)),
      X.strokeLineShape(new pt.Geom.Line(13, 25, 7, 32)),
      X.strokeLineShape(new pt.Geom.Line(36, 24, 42, 31)),
      X.strokeLineShape(new pt.Geom.Line(31, 25, 37, 32)),
      X.fillStyle(15680580, 1),
      X.fillCircle(6, 12, 5.5),
      X.fillCircle(38, 12, 5.5),
      X.fillStyle(16347926, 1),
      X.fillEllipse(22, 20, 28, 17),
      X.fillStyle(16777215, 1),
      X.fillCircle(16, 10, 4.2),
      X.fillCircle(28, 10, 4.2),
      X.fillStyle(988970, 1),
      X.fillCircle(16, 10, 2.2),
      X.fillCircle(28, 10, 2.2),
      X.generateTexture("crab", 44, 34),
      X.destroy();
    const Y = this.make.graphics({ x: 0, y: 0, add: !1 });
    Y.fillStyle(4988309, 1),
      Y.fillTriangle(2, 8, 18, 14, 10, 26),
      Y.fillTriangle(46, 8, 30, 14, 38, 26),
      Y.fillStyle(7153881, 1),
      Y.fillTriangle(16, 10, 20, 2, 22, 10),
      Y.fillTriangle(26, 10, 28, 2, 32, 10),
      Y.fillCircle(24, 18, 10),
      Y.fillStyle(16436245, 1),
      Y.fillCircle(20, 17, 2.8),
      Y.fillCircle(28, 17, 2.8),
      Y.fillStyle(16777215, 1),
      Y.fillTriangle(21, 22, 23, 22, 22, 25),
      Y.fillTriangle(25, 22, 27, 22, 26, 25),
      Y.generateTexture("bat", 48, 32),
      Y.destroy();
    const W = this.make.graphics({ x: 0, y: 0, add: !1 });
    W.fillStyle(1409085, 1),
      W.fillEllipse(8, 26, 10, 8),
      W.fillEllipse(34, 26, 10, 8),
      W.fillStyle(2278750, 1),
      W.fillEllipse(21, 21, 28, 18),
      W.fillStyle(12318672, 1),
      W.fillEllipse(21, 23, 18, 10),
      W.fillStyle(2278750, 1),
      W.fillCircle(14, 10, 6),
      W.fillCircle(28, 10, 6),
      W.fillStyle(16777215, 1),
      W.fillCircle(14, 10, 4.2),
      W.fillCircle(28, 10, 4.2),
      W.fillStyle(988970, 1),
      W.fillCircle(14, 10, 2.2),
      W.fillCircle(28, 10, 2.2),
      W.generateTexture("frog", 42, 32),
      W.destroy();
  }
  _createTrapTextures() {
    const X = this.make.graphics({ x: 0, y: 0, add: !1 });
    for (let Z = 0; Z < 3; Z++) {
      const K = Z * 16;
      X.fillStyle(14753096, 1),
        X.fillTriangle(K + 1, 20, K + 8, 2, K + 15, 20),
        X.fillStyle(16622767, 0.85),
        X.fillTriangle(K + 4, 18, K + 8, 5, K + 9, 18);
    }
    X.fillStyle(3359061, 1),
      X.fillRect(0, 17, 48, 3),
      X.generateTexture("trap-spikes", 48, 20),
      X.destroy();
    const Y = this.make.graphics({ x: 0, y: 0, add: !1 });
    Y.fillStyle(16436245, 1),
      Y.fillCircle(22, 22, 20),
      Y.fillStyle(14239471, 1),
      Y.fillCircle(22, 22, 15),
      Y.fillStyle(16777215, 0.9),
      Y.fillCircle(22, 22, 7),
      Y.generateTexture("trap-bumper", 44, 44),
      Y.destroy();
    const W = this.make.graphics({ x: 0, y: 0, add: !1 });
    W.fillStyle(15680580, 0.85),
      W.fillCircle(16, 16, 15),
      W.fillStyle(16347926, 1),
      W.fillCircle(16, 16, 11),
      W.fillStyle(16707722, 1),
      W.fillCircle(16, 16, 6),
      W.generateTexture("trap-fireball", 32, 32),
      W.destroy();
  }
  _createSlimeTexture() {
    const X = this.make.graphics({ x: 0, y: 0, add: !1 });
    X.fillStyle(12616956, 1),
      X.fillRoundedRect(2, 6, 36, 26, 13),
      X.fillStyle(11032055, 1),
      X.fillRoundedRect(2, 22, 36, 10, 5),
      X.fillStyle(16777215, 0.4),
      X.fillEllipse(13, 13, 10, 5),
      X.fillStyle(16777215, 1),
      X.fillCircle(14, 19, 4.2),
      X.fillCircle(26, 19, 4.2),
      X.fillStyle(1973067, 1),
      X.fillCircle(14, 19, 2.2),
      X.fillCircle(26, 19, 2.2),
      X.generateTexture("slime", 40, 32),
      X.destroy();
  }
  _createPickupTextures() {
    const X = this.make.graphics({ x: 0, y: 0, add: !1 });
    X.fillStyle(16096779, 1),
      X.fillCircle(20, 20, 18),
      X.fillStyle(16638023, 1),
      X.fillCircle(20, 20, 14),
      X.fillStyle(16777215, 0.5),
      X.fillEllipse(14, 13, 8, 4),
      X.generateTexture("pickup-unit", 40, 40),
      X.destroy();
    const Y = this.make.graphics({ x: 0, y: 0, add: !1 });
    Y.fillStyle(165063, 1),
      Y.fillCircle(22, 22, 20),
      Y.fillStyle(3718648, 1),
      Y.fillCircle(22, 22, 16),
      Y.fillStyle(16777215, 0.55),
      Y.fillEllipse(16, 14, 9, 5),
      Y.generateTexture("pickup-ten", 44, 44),
      Y.destroy();
    const W = this.make.graphics({ x: 0, y: 0, add: !1 });
    W.fillStyle(12458077, 1),
      W.fillRoundedRect(2, 2, 44, 44, 14),
      W.fillStyle(16020150, 1),
      W.fillRoundedRect(6, 6, 36, 36, 11),
      W.fillStyle(16777215, 0.6),
      W.fillEllipse(17, 14, 10, 5),
      W.generateTexture("pickup-hundred", 48, 48),
      W.destroy();
  }
  _createBubbleTextures() {
    [
      { key: "bubble-+", fill: 2278750, rim: 8843180 },
      { key: "bubble--", fill: 3900150, rim: 9684477 },
      { key: "bubble-×", fill: 16347926, rim: 16628340 },
      { key: "bubble-÷", fill: 11032055, rim: 14202110 },
    ].forEach(({ key: Y, fill: W, rim: Z }) => {
      const K = this.make.graphics({ x: 0, y: 0, add: !1 });
      K.fillStyle(W, 0.85),
        K.fillCircle(24, 24, 21),
        K.lineStyle(3, Z, 0.95),
        K.strokeCircle(24, 24, 21),
        K.fillStyle(16777215, 0.65),
        K.fillEllipse(16, 14, 10, 6),
        K.fillCircle(31, 31, 3),
        K.generateTexture(Y, 48, 48),
        K.destroy();
    });
  }
  _createParticleTexture() {
    const X = this.make.graphics({ x: 0, y: 0, add: !1 });
    X.fillStyle(16777215, 1),
      X.fillCircle(6, 6, 6),
      X.generateTexture("sparkle", 12, 12),
      X.destroy();
  }
  _createTearTexture() {
    const X = this.make.graphics({ x: 0, y: 0, add: !1 });
    X.fillStyle(3718648, 1),
      X.fillEllipse(7, 9, 10, 14),
      X.lineStyle(1.5, 16777215, 0.9),
      X.strokeEllipse(7, 9, 10, 14),
      X.generateTexture("tear", 14, 18),
      X.destroy();
  }
}
const ge = "ben_alice_math_attack_lang",
  xe = "ben_alice_math_attack_swapped",
  ye = "ben_alice_math_attack_mode",
  De = ["fr", "en"],
  Te = ["1p", "2p-coop", "2p-versus"];
let $t = "1p";
try {
  if (typeof window < "u" && window.localStorage) {
    const it = window.localStorage.getItem(ye);
    Te.includes(it) && ($t = it);
  }
} catch {}
function oe() {
  return $t;
}
function he(it) {
  if (Te.includes(it)) {
    $t = it;
    try {
      typeof window < "u" &&
        window.localStorage &&
        window.localStorage.setItem(ye, it);
    } catch {}
  }
  return $t;
}
let Nt = !1;
try {
  typeof window < "u" &&
    window.localStorage &&
    (Nt = window.localStorage.getItem(xe) === "true");
} catch {}
function le() {
  Nt = !Nt;
  try {
    typeof window < "u" &&
      window.localStorage &&
      window.localStorage.setItem(xe, String(Nt));
  } catch {}
  return Nt;
}
function te() {
  return Nt
    ? { p1Name: "Alice", p1Prefix: "p2", p2Name: "Ben", p2Prefix: "p1" }
    : { p1Name: "Ben", p1Prefix: "p1", p2Name: "Alice", p2Prefix: "p2" };
}
function Be(it = typeof navigator < "u" ? navigator : null) {
  if (!it) return "en";
  const X =
    (Array.isArray(it.languages) && it.languages[0]) ||
    it.language ||
    it.userLanguage ||
    "";
  return String(X).toLowerCase().startsWith("fr") ? "fr" : "en";
}
function Ie(
  it = typeof window < "u" ? window.localStorage : null,
  X = typeof navigator < "u" ? navigator : null,
) {
  try {
    if (it && typeof it.getItem == "function") {
      const Y = it.getItem(ge);
      if (Y === "fr" || Y === "en") return Y;
    }
  } catch {}
  // Adaptation: French is the default language (English stays available in the menu).
  return "fr";
}
let Gt = Ie();
function Pt() {
  return Gt;
}
function ee(it) {
  if (De.includes(it)) {
    (Gt = it),
      typeof document < "u" &&
        document.dispatchEvent(new Event("languagechange"));
    try {
      typeof window < "u" &&
        window.localStorage &&
        window.localStorage.setItem(ge, it);
    } catch {}
  }
  return Gt;
}
function ie() {
  return ee(Gt === "fr" ? "en" : "fr");
}
const kt = {
    fr: {
      gameTitle: "Ben & Alice : l'Attaque des Maths",
      menuSubtitle:
        "Attrape les bulles (+10, -2, ×2…) pour atteindre le nombre aléatoire de la porte !",
      langMenuLabel: "LANGUE :",
      chooseMode: "1. CHOISIS LE MODE DE JEU",
      mode1pTitle: "1 Joueur ({p1})",
      mode1pSub: "Flèches + ↑/Espace (Double Saut !)",
      modeCoopTitle: "2J Coop (Ben & Alice)",
      modeCoopSub: "{p1}: Flèches • {p2}: Z,Q,D (2× Saut !)",
      modeVersusTitle: "2J Duel (Ben vs Alice)",
      modeVersusSub: "{p1}: Flèches • {p2}: Z,Q,D (2× Saut !)",
      swapPlayersBtn: "⇄ J1: {p1} / J2: {p2} [S]",
      skinUnlockedBanner: "🎁 NOUVEAU SKIN DÉBLOQUÉ : {icon} {name} !",
      chooseStage: "2. CHOISIS TON NIVEAU (PORTE ALÉATOIRE)",
      stageCardTitle: "Niveau {id} • 🎲 {range}",
      startGameBtn: "▶ JOUER (ESPACE / ENTRÉE)",
      menuBricksFooter:
        "🚀 Double Saut (appuie 2× pour sauter plus haut !)  •  Bulles : Chiffres 1 à 10  •  Bloc [? AIDE] : Affiche une Solution",
      p1Name: "Ben",
      p2Name: "Alice",
      teamName: "Ben & Alice",
      hudCoop: "NOMBRE : {cur}   ➜   PORTE CIBLE : {target}",
      hudVersus: "BEN : {p1}   |   ALICE : {p2}   ➜   PORTE : {target}",
      hudHint: "🚀 Double Saut (2× Saut) • Attrape les bulles !",
      doorLocked: "🔒 FERMÉE",
      doorOpen: "OUVERTE ! ▲",
      doorHalfIn: "1/2 ENTRÉ ▲",
      doorUnlockedToast: "PORTE OUVERTE ! Saute dedans !",
      coopFirstInToast: "{name} est dans la porte ! Au tour de {other} !",
      coopDoorRelockedToast: "Oups ! Porte refermée !",
      luckyPickupToast: "Bulle magique {val} !",
      numbersSwappedToast: "⇄ Nombres échangés !",
      slimeStompToast: "Boing ! +Bonus !",
      slimePenaltyToast: "OUIN ! -{penalty} 😭",
      audioMutedToast: "🔇 Son coupé",
      audioOnToast: "🔊 Son activé",
      tooHighMsg: "Trop grand ! ({candidate} > 999)",
      notDivisibleMsg: "{prev} ÷ {n} ne tombe pas juste !",
      invalidPickupMsg: "Nombre invalide",
      modeSwitchLabel: "Mode : {op}",
      shiftUpLabel: "Décalage ×10 !",
      shiftDownLabel: "Décalage ÷10 !",
      max999Label: "Max 999 !",
      nothingToUndoLabel: "Rien à annuler !",
      undoLabel: "Annulé ! ({val})",
      alreadyResetLabel: "Déjà au départ !",
      resetLabel: "Zéro ({val})",
      resetHistoryExpr: "Retour à {val}",
      victoryVersusTitle: "🏆 {winner} A OUVERT LA PORTE {target} !",
      victoryCoopTitle: "🎉 PORTE {target} OUVERTE !",
      victoryStats:
        "Niveau {level} réussi en {steps} opérations (Par : {par}) • Temps : {sec}s",
      victoryEquationsHeader: "TES OPÉRATIONS MATHÉMATIQUES :",
      victoryReachedFallback: "Objectif {target} atteint !",
      nextStageBtn: "▶ SUIVANT [ESPACE]",
      replayBtn: "↻ REJOUER [R]",
      menuBtn: "☰ MENU [ESC]",
      // --- ajouts de l'adaptation (textes auparavant codés en dur / version tactile) ---
      mode1pSubTouch: "Boutons ◀ ▶ et ⤒ (Double Saut !)",
      modeCoopSubTouch: "Tablette : {p2} à gauche • {p1} à droite",
      modeVersusSubTouch: "Tablette : {p2} à gauche • {p1} à droite",
      menuBricksFooterTouch:
        "🚀 Touche ⤒ 2× = Double Saut  •  Bloc [? AIDE] = Solution",
      hudHintTouch: "🚀 Touche ⤒ 2× : Double Saut !",
      jumpBtn: "SAUT",
      viewSkinsBtn: "👕 Voir les 20 Skins [K]",
      skinsGalleryTitle:
        "👕 GALERIE DES 20 SKINS (BEN & ALICE) — Clique sur un skin pour le choisir !",
      skinsGalleryTitleTouch:
        "👕 GALERIE DES 20 SKINS (BEN & ALICE) — Touche un skin pour le choisir !",
      closeBtn: "✕ FERMER",
      nextDanceBtn: "💃 AUTRE DANSE [D]",
      suggestedSolution: "💡 SOLUTION PROPOSÉE :",
      slimeShortLabel: "-{n} Aïe !",
      slimeBumpExpr: "Aïe, un monstre ! {prev} - {n} = {val}",
      originalGameBtn: "🎮 Jeu original ↗",
      fullscreenBtn: "⛶ Plein écran",
      exitFullscreenBtn: "⛶ Quitter",
    },
    en: {
      gameTitle: "Ben & Alice's Math Attack",
      menuSubtitle:
        "Catch operation bubbles (+10, -2, ×2…) to match the random Door Number!",
      langMenuLabel: "LANGUAGE:",
      chooseMode: "1. CHOOSE PLAYER MODE",
      mode1pTitle: "1 Player ({p1})",
      mode1pSub: "Arrows + ↑/Space (Double Jump!)",
      modeCoopTitle: "2P Co-op (Ben & Alice)",
      modeCoopSub: "{p1}: Arrows • {p2}: W,A,D/Z,Q,D (2× Jump!)",
      modeVersusTitle: "2P Versus (Ben vs Alice)",
      modeVersusSub: "{p1}: Arrows • {p2}: W,A,D/Z,Q,D (2× Jump!)",
      swapPlayersBtn: "⇄ P1: {p1} / P2: {p2} [S]",
      skinUnlockedBanner: "🎁 NEW SKIN UNLOCKED: {icon} {name}!",
      chooseStage: "2. SELECT STAGE (RANDOM DOOR TARGET)",
      stageCardTitle: "Stage {id} • 🎲 {range}",
      startGameBtn: "▶ START GAME (SPACE / ENTER)",
      menuBricksFooter:
        "🚀 Double Jump (press Jump 2× in air!)  •  Bubbles: Numbers 1 to 10  •  [? HELP] Block: Shows a Solution",
      p1Name: "Ben",
      p2Name: "Alice",
      teamName: "Ben & Alice",
      hudCoop: "NUMBER: {cur}   ➜   TARGET DOOR: {target}",
      hudVersus: "BEN: {p1}   |   ALICE: {p2}   ➜   DOOR: {target}",
      hudHint: "🚀 Double Jump (2× Jump) • Catch the bubbles!",
      doorLocked: "🔒 LOCKED",
      doorOpen: "OPEN! ▲",
      doorHalfIn: "1/2 IN! ▲",
      doorUnlockedToast: "DOOR UNLOCKED! Jump in!",
      coopFirstInToast: "{name} is in the door! Waiting for {other}!",
      coopDoorRelockedToast: "Oops! Door locked again!",
      luckyPickupToast: "Magic Bubble {val}!",
      numbersSwappedToast: "⇄ Numbers Swapped!",
      slimeStompToast: "Boing! +Bonus!",
      slimePenaltyToast: "WAAAH! -{penalty} 😭",
      audioMutedToast: "🔇 Audio Muted",
      audioOnToast: "🔊 Audio On",
      tooHighMsg: "Too High! ({candidate} > 999)",
      notDivisibleMsg: "{prev} ÷ {n} has a remainder!",
      invalidPickupMsg: "Invalid number",
      modeSwitchLabel: "Mode: {op}",
      shiftUpLabel: "×10 Shift!",
      shiftDownLabel: "÷10 Shift!",
      max999Label: "Max 999!",
      nothingToUndoLabel: "Nothing to Undo!",
      undoLabel: "Undo! ({val})",
      alreadyResetLabel: "Already at Start!",
      resetLabel: "Reset ({val})",
      resetHistoryExpr: "Reset to {val}",
      victoryVersusTitle: "🏆 {winner} UNLOCKED DOOR {target}!",
      victoryCoopTitle: "🎉 DOOR {target} UNLOCKED!",
      victoryStats:
        "Stage {level} Cleared in {steps} Math Steps (Par: {par}) • Time: {sec}s",
      victoryEquationsHeader: "YOUR MATH EQUATION STEPS:",
      victoryReachedFallback: "Reached {target}!",
      nextStageBtn: "▶ NEXT STAGE [SPACE]",
      replayBtn: "↻ REPLAY [R]",
      menuBtn: "☰ MENU [ESC]",
      mode1pSubTouch: "◀ ▶ pad + ⤒ button (Double Jump!)",
      modeCoopSubTouch: "Tablet: {p2} on the left • {p1} on the right",
      modeVersusSubTouch: "Tablet: {p2} on the left • {p1} on the right",
      menuBricksFooterTouch: "🚀 Tap ⤒ twice = Double Jump  •  [? HELP] Block = Solution",
      hudHintTouch: "🚀 Tap ⤒ twice: Double Jump!",
      jumpBtn: "JUMP",
      viewSkinsBtn: "👕 View 20 Skins [K]",
      skinsGalleryTitle: "👕 ALL 20 SKINS GALLERY (BEN & ALICE) — Click any skin to equip!",
      skinsGalleryTitleTouch: "👕 ALL 20 SKINS GALLERY (BEN & ALICE) — Tap any skin to equip!",
      closeBtn: "✕ CLOSE",
      nextDanceBtn: "💃 NEXT DANCE [D]",
      suggestedSolution: "💡 SUGGESTED SOLUTION:",
      slimeShortLabel: "-{n} Slime!",
      slimeBumpExpr: "Slime bump! {prev} - {n} = {val}",
      originalGameBtn: "🎮 Original game ↗",
      fullscreenBtn: "⛶ Fullscreen",
      exitFullscreenBtn: "⛶ Exit",
    },
  },
  ue = {
    fr: {
      1: {
        world: "Monde 1-1 • Prairie Ensoleillée",
        name: "La Pyramide des Prés",
        subtitle:
          "Grimpe la pyramide et attrape les bulles pour ouvrir la porte (< 030) !",
      },
      2: {
        world: "Monde 1-2 • Plage Tropicale",
        name: "L’Escalier des Palmiers",
        subtitle:
          "Monte l’escalier vers la porte à droite en évitant les Crabes et Pics !",
      },
      3: {
        world: "Monde 2-1 • Grotte de Cristal",
        name: "Les Tours de Cristal",
        subtitle:
          "Attention à la Chauve-Souris ! Porte en haut à gauche (< 100) !",
      },
      4: {
        world: "Monde 2-2 • Désert des Pyramides",
        name: "Le Canyon en Zig-Zag",
        subtitle:
          "Évite la Boule de Feu et le Crapaud sauteur dans le désert !",
      },
      5: {
        world: "Monde 3-1 • Sommets Enneigés",
        name: "Les Îles de Glace",
        subtitle:
          "Utilise [×2] et [×3] sur les glaciers pour atteindre 100–300 !",
      },
      6: {
        world: "Monde 3-2 • Forêt Enchantée",
        name: "La Canopée Enchantée",
        subtitle:
          "Saute de branche en branche vers la cabane en haut à gauche !",
      },
      7: {
        world: "Monde 4-1 • Volcan Magique",
        name: "La Forteresse de Lave",
        subtitle: "Esquive les Boules de Feu et combine [×2], [×3] et [+100] !",
      },
      8: {
        world: "Monde 4-2 • Galaxie Étoilée",
        name: "La Citadelle Galactique",
        subtitle:
          "Flotte entre les planètes et anneaux pour ouvrir la Porte 100–999 !",
      },
    },
    en: {
      1: {
        world: "World 1-1 • Sunny Meadow",
        name: "The Meadow Pyramid",
        subtitle:
          "Climb the pyramid and catch bubbles to unlock the door (< 030)!",
      },
      2: {
        world: "World 1-2 • Tropical Beach",
        name: "Palm Tree Staircase",
        subtitle:
          "Climb up to the top-right door while dodging Crabs and Spikes!",
      },
      3: {
        world: "World 2-1 • Crystal Cavern",
        name: "Twin Crystal Towers",
        subtitle: "Watch out for the swooping Bat! Top-left door (< 100)!",
      },
      4: {
        world: "World 2-2 • Pyramid Desert",
        name: "Zig-Zag Canyon",
        subtitle:
          "Dodge the Fireball and leaping Frog across the desert ledges!",
      },
      5: {
        world: "World 3-1 • Snowy Peaks",
        name: "Floating Ice Islands",
        subtitle: "Use [×2] and [×3] across the glaciers to reach 100–300!",
      },
      6: {
        world: "World 3-2 • Enchanted Forest",
        name: "Canopy Treehouse",
        subtitle:
          "Hop from branch to branch up to the top-left treehouse door!",
      },
      7: {
        world: "World 4-1 • Magic Volcano",
        name: "Lava Fortress",
        subtitle: "Dodge rising Fireballs and combine [×2], [×3], and [+100]!",
      },
      8: {
        world: "World 4-2 • Starlight Galaxy",
        name: "Galactic Citadel",
        subtitle: "Hop between cosmic rings to unlock Door 100–999!",
      },
    },
  };
function ht(it, X = {}) {
  const dict = kt[Gt] || kt.fr,
    touch = isTouchMode();
  let W = (touch && (dict[it + "Touch"] ?? kt.en[it + "Touch"])) || (dict[it] ?? kt.en[it] ?? it);
  for (const [Z, K] of Object.entries(X)) W = W.replaceAll(`{${Z}}`, String(K));
  return touch ? hideKeyHints(W) : W;
}
function hk(s) {
  return isTouchMode() ? hideKeyHints(s) : s;
}
// On touch screens there is no keyboard: remove "[K]", "[ESC]", "(ESPACE / ENTRÉE)"…
// (but keep in-game labels such as "[×2]" or "[? AIDE]").
function hideKeyHints(s) {
  return s
    .replace(/\s*\((?:ESPACE|SPACE) \/ (?:ENTRÉE|ENTER)\)/g, "")
    .replace(/\s*\[(?:[A-Z]|ESC|ESPACE|SPACE|ENTRÉE|ENTER)\]/g, "");
}
function Kt(it, X) {
  const Y = ue[Gt] || ue.fr;
  if (Y[it]) return Y[it];
  const W = String(X).padStart(3, "0");
  return Gt === "fr"
    ? {
        world: `Niveau Infini ${it}`,
        name: `Défi Porte ${W}`,
        subtitle: `Atteins exactement ${W} pour ouvrir la porte !`,
      }
    : {
        world: `Endless Stage ${it}`,
        name: `Target ${W} Challenge`,
        subtitle: `Reach ${W} to unlock the Top Door!`,
      };
}
const Rt = 0,
  At = 999,
  Ge = [
    ...Array.from({ length: 10 }, (it, X) => ({
      op: "+",
      value: X + 1,
      label: `+${X + 1}`,
    })),
    ...Array.from({ length: 10 }, (it, X) => ({
      op: "-",
      value: X + 1,
      label: `-${X + 1}`,
    })),
    ...Array.from({ length: 9 }, (it, X) => ({
      op: "×",
      value: X + 2,
      label: `×${X + 2}`,
    })),
    ...Array.from({ length: 9 }, (it, X) => ({
      op: "÷",
      value: X + 2,
      label: `÷${X + 2}`,
    })),
  ],
  Mt = {
    "+": {
      symbol: "+",
      name: "PLUS",
      color: 2278750,
      hex: "#22c55e",
      badgeBg: "#15803d",
    },
    "-": {
      symbol: "-",
      name: "MINUS",
      color: 3900150,
      hex: "#3b82f6",
      badgeBg: "#1d4ed8",
    },
    "×": {
      symbol: "×",
      name: "TIMES",
      color: 16347926,
      hex: "#f97316",
      badgeBg: "#c2410c",
    },
    "÷": {
      symbol: "÷",
      name: "DIVIDE",
      color: 11032055,
      hex: "#a855f7",
      badgeBg: "#7e22ce",
    },
  };
function St(it) {
  const X = Math.max(Rt, Math.min(At, Math.trunc(Number(it) || 0))),
    Y = String(X).padStart(3, "0");
  return {
    value: X,
    formatted: Y,
    hundreds: Number(Y[0]),
    tens: Number(Y[1]),
    ones: Number(Y[2]),
  };
}
function Ne(it = 5, X = 999, Y = 0) {
  const W = Math.max(Rt, Math.min(At, Math.trunc(it))),
    Z = Math.max(W, Math.min(At, Math.trunc(X)));
  if (W === Z) return W;
  for (let K = 0; K < 20; K++) {
    const p = W + Math.floor(Math.random() * (Z - W + 1));
    if (p !== Y) return p;
  }
  return W === Y ? Z : W;
}
function zt(it, X = "+") {
  if (typeof it == "number") {
    const Y = Math.trunc(it);
    return Y < 0
      ? { op: "-", value: Math.abs(Y), label: `-${Math.abs(Y)}` }
      : { op: X, value: Y, label: `${X}${Y}` };
  }
  if (typeof it == "string") {
    const Y = it.trim().replace("*", "×").replace("/", "÷"),
      W = Y[0];
    if (Mt[W]) {
      const K = Math.trunc(Number(Y.slice(1)));
      return { op: W, value: K, label: `${W}${K}` };
    }
    const Z = Math.trunc(Number(Y));
    return { op: X, value: Z, label: `${X}${Z}` };
  }
  if (it && typeof it == "object") {
    const Y = Mt[it.op] ? it.op : X,
      W = Math.trunc(Number(it.value));
    return { op: Y, value: W, label: `${Y}${W}` };
  }
  return { op: X, value: NaN, label: "?" };
}
class qt {
  constructor({
    startValue: X = 0,
    targetValue: Y = 15,
    initialOperator: W = "+",
  } = {}) {
    (this.startValue = Math.max(Rt, Math.min(At, Math.trunc(X)))),
      (this.targetValue = Math.max(Rt, Math.min(At, Math.trunc(Y)))),
      (this.initialOperator = Mt[W] ? W : "+"),
      (this.currentValue = this.startValue),
      (this.activeOperator = this.initialOperator),
      (this.history = []),
      (this.stepsCount = 0);
  }
  getFormattedCurrent() {
    return St(this.currentValue);
  }
  getFormattedTarget() {
    return St(this.targetValue);
  }
  isDoorUnlocked() {
    return this.currentValue === this.targetValue;
  }
  getSmartMaxLimit() {
    return this.targetValue >= 700
      ? At
      : Math.min(
          At,
          Math.max(this.targetValue + 25, Math.ceil(this.targetValue * 1.45)),
        );
  }
  getSmartOvershootBubble(X = null) {
    const Y = this.currentValue,
      W = this.targetValue;
    if (Y <= W) return this.getSmartBubble(X);
    const Z = Y - W;
    if (Z >= 12) {
      for (let p = 2; p <= 10; p++)
        if (Y % p === 0) {
          const S = Y / p;
          if (Math.abs(W - S) < Z && S >= Math.floor(W * 0.35))
            return { op: "÷", value: p, label: `÷${p}` };
        }
      for (let p = 1; p <= 5; p++) {
        const S = Y - p;
        for (let t = 2; t <= 10; t++)
          if (S > 0 && S % t === 0 && Math.abs(W - S / t) < Z)
            return { op: "-", value: p, label: `-${p}` };
      }
    }
    if (Z <= 10 && Z >= 4) {
      const p = Math.ceil(Z / 2);
      return { op: "-", value: p, label: `-${p}` };
    }
    const K = Math.min(10, Math.max(1, Z));
    return { op: "-", value: K, label: `-${K}` };
  }
  setOperator(X) {
    if (!Mt[X]) return { changed: !1, activeOperator: this.activeOperator };
    const Y = this.activeOperator !== X;
    return (
      (this.activeOperator = X),
      {
        changed: Y,
        activeOperator: this.activeOperator,
        operatorInfo: Mt[this.activeOperator],
      }
    );
  }
  isDivisibleBy(X) {
    const Y = Math.trunc(Number(X));
    return Y <= 0 ? !1 : this.currentValue % Y === 0;
  }
  applyBubble(X) {
    const Y = zt(X, this.activeOperator);
    return !Number.isFinite(Y.value) || Y.value <= 0 || !Mt[Y.op]
      ? {
          accepted: !1,
          reason: "invalid_pickup",
          previousValue: this.currentValue,
          value: this.currentValue,
          message: ht("invalidPickupMsg"),
        }
      : ((this.activeOperator = Y.op), this.applyPickup(Y.value));
  }
  applyPickup(X) {
    const Y = Math.trunc(Number(X));
    if (!Number.isFinite(Y) || Y <= 0)
      return {
        accepted: !1,
        reason: "invalid_pickup",
        previousValue: this.currentValue,
        value: this.currentValue,
        message: ht("invalidPickupMsg"),
      };
    const W = this.currentValue,
      Z = this.activeOperator,
      K = this.getSmartMaxLimit();
    let p = W;
    if (Z === "+") {
      if (((p = W + Y), p > K))
        return {
          accepted: !1,
          reason: "too_high",
          previousValue: W,
          value: W,
          candidate: p,
          operator: Z,
          operand: Y,
          message: ht("tooHighMsg", { candidate: p }),
        };
    } else if (Z === "-") p = Math.max(Rt, W - Y);
    else if (Z === "×") {
      if (((p = W * Y), p > K))
        return {
          accepted: !1,
          reason: "too_high",
          previousValue: W,
          value: W,
          candidate: p,
          operator: Z,
          operand: Y,
          message: ht("tooHighMsg", { candidate: p }),
        };
    } else if (Z === "÷") {
      if (W % Y !== 0)
        return {
          accepted: !1,
          reason: "not_divisible",
          previousValue: W,
          value: W,
          operator: Z,
          operand: Y,
          message: ht("notDivisibleMsg", { prev: W, n: Y }),
        };
      p = W / Y;
    }
    const S = `${St(W).formatted} ${Z} ${Y} = ${St(p).formatted}`;
    return (
      this.history.push({
        previousValue: W,
        newValue: p,
        operator: Z,
        operand: Y,
        expression: S,
      }),
      (this.currentValue = p),
      (this.stepsCount += 1),
      {
        accepted: !0,
        previousValue: W,
        value: this.currentValue,
        operator: Z,
        operand: Y,
        expression: S,
        shortLabel: `${Z}${Y}`,
        unlockedDoor: this.isDoorUnlocked(),
      }
    );
  }
  applyBrick(X) {
    if (Mt[X]) {
      const W = this.setOperator(X);
      return {
        accepted: !0,
        kind: "operator",
        operator: this.activeOperator,
        changed: W.changed,
        value: this.currentValue,
        shortLabel: ht("modeSwitchLabel", { op: X }),
        unlockedDoor: this.isDoorUnlocked(),
      };
    }
    const Y = this.currentValue;
    if (X === "×2" || X === "×3") {
      const W = Number(X.slice(1)),
        Z = Y * W;
      return Z > At
        ? {
            accepted: !1,
            kind: "modifier",
            reason: "too_high",
            previousValue: Y,
            value: Y,
            shortLabel: ht("tooHighMsg", { candidate: Z }),
            unlockedDoor: this.isDoorUnlocked(),
          }
        : (this._recordStep(
            Y,
            Z,
            "×",
            W,
            `${St(Y).formatted} × ${W} = ${St(Z).formatted}`,
          ),
          {
            accepted: !0,
            kind: "modifier",
            previousValue: Y,
            value: this.currentValue,
            shortLabel: `${X}!`,
            unlockedDoor: this.isDoorUnlocked(),
          });
    }
    if (X === "×10") {
      const W = Y * 10;
      return W > At
        ? {
            accepted: !1,
            kind: "modifier",
            reason: "too_high",
            previousValue: Y,
            value: Y,
            shortLabel: ht("tooHighMsg", { candidate: W }),
            unlockedDoor: this.isDoorUnlocked(),
          }
        : (this._recordStep(
            Y,
            W,
            "×",
            10,
            `${St(Y).formatted} × 10 = ${St(W).formatted}`,
          ),
          {
            accepted: !0,
            kind: "modifier",
            previousValue: Y,
            value: this.currentValue,
            shortLabel: ht("shiftUpLabel"),
            unlockedDoor: this.isDoorUnlocked(),
          });
    }
    if (X === "÷10") {
      const W = Math.floor(Y / 10);
      return (
        this._recordStep(
          Y,
          W,
          "÷",
          10,
          `${St(Y).formatted} ÷ 10 = ${St(W).formatted}`,
        ),
        {
          accepted: !0,
          kind: "modifier",
          previousValue: Y,
          value: this.currentValue,
          shortLabel: ht("shiftDownLabel"),
          unlockedDoor: this.isDoorUnlocked(),
        }
      );
    }
    if (X === "+1" || X === "-1" || X === "+10" || X === "-10") {
      const W = Number(X),
        Z = Y + W;
      if (Z > At)
        return {
          accepted: !1,
          kind: "nudge",
          reason: "too_high",
          previousValue: Y,
          value: Y,
          shortLabel: ht("max999Label"),
          unlockedDoor: this.isDoorUnlocked(),
        };
      const K = Math.max(Rt, Z),
        p = W >= 0 ? "+" : "-",
        S = Math.abs(W);
      return (
        this._recordStep(
          Y,
          K,
          p,
          S,
          `${St(Y).formatted} ${p} ${S} = ${St(K).formatted}`,
        ),
        {
          accepted: !0,
          kind: "nudge",
          previousValue: Y,
          value: this.currentValue,
          shortLabel: X,
          unlockedDoor: this.isDoorUnlocked(),
        }
      );
    }
    if (X === "undo") {
      if (this.history.length === 0)
        return {
          accepted: !1,
          kind: "undo",
          reason: "empty_history",
          previousValue: Y,
          value: Y,
          shortLabel: ht("nothingToUndoLabel"),
          unlockedDoor: this.isDoorUnlocked(),
        };
      const W = this.history.pop();
      return (
        (this.currentValue = W.previousValue),
        {
          accepted: !0,
          kind: "undo",
          previousValue: Y,
          value: this.currentValue,
          shortLabel: ht("undoLabel", { val: St(this.currentValue).formatted }),
          unlockedDoor: this.isDoorUnlocked(),
        }
      );
    }
    if (X === "reset") {
      if (
        this.currentValue === this.startValue &&
        this.activeOperator === this.initialOperator
      )
        return {
          accepted: !1,
          kind: "reset",
          reason: "already_reset",
          previousValue: Y,
          value: Y,
          shortLabel: ht("alreadyResetLabel"),
          unlockedDoor: this.isDoorUnlocked(),
        };
      const W = St(this.startValue).formatted;
      return (
        this.history.push({
          previousValue: Y,
          newValue: this.startValue,
          operator: "RESET",
          operand: 0,
          expression: ht("resetHistoryExpr", { val: W }),
        }),
        (this.currentValue = this.startValue),
        (this.activeOperator = this.initialOperator),
        (this.stepsCount += 1),
        {
          accepted: !0,
          kind: "reset",
          previousValue: Y,
          value: this.currentValue,
          shortLabel: ht("resetLabel", { val: W }),
          unlockedDoor: this.isDoorUnlocked(),
        }
      );
    }
    return {
      accepted: !1,
      kind: "unknown",
      reason: "unknown_brick",
      previousValue: Y,
      value: Y,
      shortLabel: "?",
      unlockedDoor: this.isDoorUnlocked(),
    };
  }
  applySlimePenalty(X = 1) {
    const Y = this.currentValue,
      W = Math.max(Rt, Y - X);
    return (
      W !== Y &&
        this._recordStep(
          Y,
          W,
          "-",
          X,
          ht("slimeBumpExpr", { prev: St(Y).formatted, n: X, val: St(W).formatted }),
        ),
      {
        previousValue: Y,
        value: this.currentValue,
        shortLabel: ht("slimeShortLabel", { n: X }),
        unlockedDoor: this.isDoorUnlocked(),
      }
    );
  }
  getSmartHelperValue(X = [1, 2, 3, 5, 10]) {
    const Y = Math.abs(this.targetValue - this.currentValue);
    if (Y === 0) return X[0] || 1;
    if (X.includes(Y)) return Y;
    if (
      this.currentValue > 0 &&
      this.targetValue > this.currentValue &&
      this.targetValue % this.currentValue === 0
    ) {
      const Z = this.targetValue / this.currentValue;
      if (X.includes(Z)) return Z;
    }
    const W = [...X].sort((Z, K) => K - Z);
    for (const Z of W) if (Z <= Y) return Z;
    return W[W.length - 1] || 1;
  }
  getWinningPathBubbles(X = this.currentValue, Y = this.targetValue, W = null) {
    const Z = Math.max(Rt, Math.min(At, Math.trunc(X))),
      K = Math.max(Rt, Math.min(At, Math.trunc(Y)));
    if (Z === K) return [{ op: "+", value: 1, label: "+1" }];
    const p = W
        ? W.map((e) => zt(e)).filter((e) => e.value >= 1 && e.value <= 10)
        : Ge,
      S = Math.max(K, this.getSmartMaxLimit()),
      t = new Uint8Array(At + 1),
      f = new Int16Array(At + 1).fill(-1),
      c = new Array(At + 1).fill(null),
      a = [Z];
    for (t[Z] = 1; a.length > 0; ) {
      const e = a.shift();
      if (e === K) break;
      for (const s of p) {
        const { op: o, value: i } = s;
        let h = -1;
        o === "+"
          ? (h = e + i)
          : o === "-"
            ? (h = e - i)
            : o === "×"
              ? e > 0 && (h = e * i)
              : o === "÷" && e > 0 && e % i === 0 && (h = e / i),
          h >= Rt &&
            h <= S &&
            !t[h] &&
            ((t[h] = 1), (f[h] = e), (c[h] = s), a.push(h));
      }
    }
    if (!t[K])
      return W
        ? this.getWinningPathBubbles(Z, K, null)
        : [{ op: "+", value: 1, label: "+1" }];
    const n = [];
    let r = K;
    for (; r !== Z && c[r]; ) n.push(c[r]), (r = f[r]);
    return n.reverse(), n;
  }
  getHintSolution(X = [], Y = null) {
    const W = this.currentValue,
      Z = this.targetValue;
    if (W === Z) {
      const p = St(Z).formatted;
      return { steps: [], formula: `${p} = ${p}` };
    }
    if (Array.isArray(X) && X.length > 0) {
      const p = X.map((f) => zt(f)),
        S = [{ val: W, usedIndices: [], steps: [] }],
        t = new Set([`${W}:`]);
      for (; S.length > 0; ) {
        const f = S.shift();
        if (f.val === Z && f.steps.length > 0)
          return {
            steps: f.steps,
            formula: this._formatHintFormula(W, f.steps, Z),
          };
        if (!(f.steps.length >= 3))
          for (let c = 0; c < p.length; c++) {
            if (f.usedIndices.includes(c)) continue;
            const a = p[c],
              n = this._simulateSingleStep(f.val, a.op, a.value);
            if (n !== null) {
              const r = `${n}:${f.steps.length + 1}`;
              t.has(r) ||
                (t.add(r),
                S.push({
                  val: n,
                  usedIndices: [...f.usedIndices, c],
                  steps: [...f.steps, a],
                }));
            }
          }
      }
    }
    let K = this.getWinningPathBubbles(W, Z, Y);
    if (
      K.length === 1 &&
      (K[0].op === "+" || K[0].op === "-") &&
      K[0].value >= 4
    ) {
      const p = Math.ceil(K[0].value / 2),
        S = K[0].value - p,
        t = K[0].op;
      K = [
        { op: t, value: p, label: `${t}${p}` },
        { op: t, value: S, label: `${t}${S}` },
      ];
    }
    return { steps: K, formula: this._formatHintFormula(W, K, Z) };
  }
  _simulateSingleStep(X, Y, W) {
    const Z = this.getSmartMaxLimit();
    if (Y === "+") {
      const K = X + W;
      return K <= Z ? K : null;
    }
    if (Y === "-") return X - W >= Rt ? X - W : null;
    if (Y === "×") {
      if (X <= 0) return null;
      const K = X * W;
      return K <= Z ? K : null;
    }
    return Y === "÷" ? (X <= 0 || W <= 0 || X % W !== 0 ? null : X / W) : null;
  }
  _formatHintFormula(X, Y, W) {
    if (!Y || Y.length === 0) return `${X} = ${W}`;
    const Z = X === 0 && Y[0].op === "+" ? 1 : 0;
    let K = `${Z ? Y[0].value : X}`,
      p = null;
    for (let S = Z; S < Y.length; S++) {
      const t = Y[S];
      if (S > Z) {
        const f = t.op === "×" || t.op === "÷",
          c = p === "×" || p === "÷",
          a = p !== null && p !== t.op;
        (f || c || a) && (K = `(${K})`);
      }
      (K = `${K} ${t.op} ${t.value}`), (p = t.op);
    }
    return `${K} = ${W}`;
  }
  getSmartBubble(X = null) {
    const Y = this.getWinningPathBubbles(
      this.currentValue,
      this.targetValue,
      X,
    );
    if (Y.length === 1) {
      const W = Y[0];
      if ((W.op === "+" || W.op === "-") && W.value >= 4) {
        const Z = Math.ceil(W.value / 2);
        return { op: W.op, value: Z, label: `${W.op}${Z}` };
      }
    }
    return Y[0] || { op: "+", value: 1, label: "+1" };
  }
  _recordStep(X, Y, W, Z, K) {
    this.history.push({
      previousValue: X,
      newValue: Y,
      operator: W,
      operand: Z,
      expression: K,
    }),
      (this.currentValue = Y),
      (this.stepsCount += 1);
  }
}
const Xt = [
  {
    id: 1,
    decor: "meadow",
    world: "World 1-1 • Sunny Meadow",
    name: "La Pyramide des Prés (< 030)",
    subtitle:
      "Grimpe la pyramide et attrape les bulles pour ouvrir la porte (< 030) !",
    startValue: 0,
    minTarget: 6,
    maxTarget: 29,
    targetRangeLabel: "006–029",
    targetValue: 14,
    initialOperator: "+",
    parSteps: 4,
    skyTop: 3718648,
    skyBottom: 14742270,
    hillColor: 4906624,
    platColor: 9584654,
    platTopColor: 2278750,
    doorX: 480,
    doorY: 102,
    bubblePool: [
      "+9",
      "+8",
      "+7",
      "+6",
      "+5",
      "+4",
      "+3",
      "+2",
      "+1",
      "-5",
      "-4",
      "-3",
      "-2",
      "-1",
    ],
    platforms: [
      { x: 480, y: 140, width: 210 },
      { x: 260, y: 235, width: 180 },
      { x: 700, y: 235, width: 180 },
      { x: 160, y: 330, width: 170 },
      { x: 520, y: 330, width: 200 },
      { x: 800, y: 330, width: 170 },
      { x: 140, y: 425, width: 170 },
      { x: 820, y: 425, width: 170 },
    ],
    bricks: [{ x: 330, y: 384, type: "mystery", caption: "AIDE" }],
    bubbleSlots: [
      { x: 140, y: 378 },
      { x: 820, y: 378 },
      { x: 160, y: 282 },
      { x: 800, y: 282 },
      { x: 260, y: 188 },
      { x: 700, y: 188 },
    ],
    slimes: [
      {
        kind: "slime",
        penalty: 1,
        x: 520,
        y: 300,
        minX: 435,
        maxX: 605,
        speed: 55,
      },
    ],
    traps: [],
  },
  {
    id: 2,
    decor: "beach",
    world: "World 1-2 • Tropical Beach",
    name: "L’Escalier de la Plage (< 060)",
    subtitle:
      "Monte l’escalier des palmiers jusqu’à la porte en haut à droite !",
    startValue: 0,
    minTarget: 15,
    maxTarget: 59,
    targetRangeLabel: "015–059",
    targetValue: 32,
    initialOperator: "+",
    parSteps: 4,
    skyTop: 165063,
    skyBottom: 16707722,
    hillColor: 16436245,
    platColor: 11817737,
    platTopColor: 16638023,
    doorX: 770,
    doorY: 102,
    bubblePool: [
      "+10",
      "+9",
      "+8",
      "+7",
      "+6",
      "+5",
      "+4",
      "+3",
      "+2",
      "+1",
      "-6",
      "-5",
      "-4",
      "-3",
      "-2",
      "-1",
      "×2",
      "÷2",
    ],
    platforms: [
      { x: 770, y: 140, width: 210 },
      { x: 520, y: 230, width: 220 },
      { x: 290, y: 320, width: 210 },
      { x: 760, y: 325, width: 190 },
      { x: 150, y: 415, width: 190 },
      { x: 430, y: 415, width: 180 },
    ],
    bricks: [
      { x: 590, y: 384, type: "mystery", caption: "AIDE" },
      { x: 290, y: 198, type: "undo", caption: "UNDO" },
    ],
    bubbleSlots: [
      { x: 150, y: 368 },
      { x: 470, y: 368 },
      { x: 760, y: 278 },
      { x: 220, y: 272 },
      { x: 520, y: 182 },
      { x: 830, y: 455 },
    ],
    slimes: [
      {
        kind: "crab",
        penalty: 2,
        x: 760,
        y: 295,
        minX: 680,
        maxX: 840,
        speed: 78,
      },
      {
        kind: "crab",
        penalty: 2,
        x: 520,
        y: 200,
        minX: 430,
        maxX: 610,
        speed: 70,
      },
    ],
    traps: [{ type: "spikes", x: 865, y: 488, penalty: 2 }],
  },
  {
    id: 3,
    decor: "cavern",
    world: "World 2-1 • Crystal Cavern",
    name: "Les Tours de Cristal (< 100)",
    subtitle:
      "Grimpe les deux tours de cristal vers la porte en haut à gauche !",
    startValue: 0,
    minTarget: 20,
    maxTarget: 99,
    targetRangeLabel: "020–099",
    targetValue: 68,
    initialOperator: "+",
    parSteps: 4,
    skyTop: 1973067,
    skyBottom: 4988309,
    hillColor: 8141549,
    platColor: 3223169,
    platTopColor: 3718648,
    doorX: 190,
    doorY: 102,
    bubblePool: [
      "×2",
      "×3",
      "×4",
      "÷2",
      "÷3",
      "+9",
      "+8",
      "+7",
      "+6",
      "+5",
      "+4",
      "+3",
      "+2",
      "+1",
      "-7",
      "-6",
      "-5",
      "-4",
      "-3",
      "-2",
      "-1",
    ],
    platforms: [
      { x: 190, y: 140, width: 210 },
      { x: 460, y: 225, width: 220 },
      { x: 200, y: 320, width: 200 },
      { x: 760, y: 285, width: 200 },
      { x: 520, y: 360, width: 200 },
      { x: 160, y: 415, width: 180 },
      { x: 790, y: 420, width: 180 },
    ],
    bricks: [
      { x: 340, y: 384, type: "mystery", caption: "AIDE" },
      { x: 760, y: 164, type: "undo", caption: "UNDO" },
    ],
    bubbleSlots: [
      { x: 160, y: 368 },
      { x: 790, y: 372 },
      { x: 200, y: 272 },
      { x: 700, y: 238 },
      { x: 460, y: 178 },
      { x: 640, y: 455 },
    ],
    slimes: [
      {
        kind: "bat",
        penalty: 2,
        x: 460,
        y: 145,
        minX: 330,
        maxX: 620,
        speed: 85,
        flyY: 145,
      },
      {
        kind: "slime",
        penalty: 1,
        x: 520,
        y: 330,
        minX: 435,
        maxX: 605,
        speed: 70,
      },
    ],
    traps: [{ type: "spikes", x: 75, y: 488, penalty: 2 }],
  },
  {
    id: 4,
    decor: "desert",
    world: "World 2-2 • Sunset Desert",
    name: "Le Canyon en Zig-Zag (< 100)",
    subtitle:
      "Serpente de plateforme en plateforme au milieu des cactus et pyramides !",
    startValue: 0,
    minTarget: 15,
    maxTarget: 99,
    targetRangeLabel: "015–099",
    targetValue: 74,
    initialOperator: "+",
    parSteps: 4,
    skyTop: 10105874,
    skyBottom: 16628340,
    hillColor: 14251782,
    platColor: 7877903,
    platTopColor: 16096779,
    doorX: 480,
    doorY: 102,
    bubblePool: [
      "×2",
      "×3",
      "×4",
      "×5",
      "÷2",
      "÷3",
      "÷4",
      "+10",
      "+9",
      "+8",
      "+7",
      "+6",
      "+5",
      "+4",
      "+3",
      "+2",
      "+1",
      "-8",
      "-7",
      "-6",
      "-5",
      "-4",
      "-3",
      "-2",
      "-1",
    ],
    platforms: [
      { x: 480, y: 140, width: 220 },
      { x: 720, y: 225, width: 220 },
      { x: 450, y: 280, width: 200 },
      { x: 200, y: 325, width: 220 },
      { x: 660, y: 370, width: 220 },
      { x: 380, y: 425, width: 220 },
    ],
    bricks: [
      { x: 200, y: 203, type: "undo", caption: "UNDO" },
      { x: 840, y: 384, type: "mystery", caption: "AIDE" },
    ],
    bubbleSlots: [
      { x: 380, y: 378 },
      { x: 660, y: 322 },
      { x: 450, y: 232 },
      { x: 720, y: 178 },
      { x: 110, y: 465 },
      { x: 660, y: 465 },
    ],
    slimes: [
      {
        kind: "crab",
        penalty: 2,
        x: 660,
        y: 340,
        minX: 565,
        maxX: 755,
        speed: 85,
      },
      {
        kind: "frog",
        penalty: 3,
        x: 380,
        y: 395,
        minX: 290,
        maxX: 470,
        speed: 65,
      },
    ],
    traps: [
      { type: "spikes", x: 75, y: 488, penalty: 2 },
      {
        type: "fireball",
        x: 560,
        y: 260,
        minY: 160,
        maxY: 340,
        speedY: 110,
        penalty: 3,
      },
    ],
  },
  {
    id: 5,
    decor: "snow",
    world: "World 3-1 • Ice Peaks",
    name: "Les Îles de Glace (100–300)",
    subtitle:
      "Utilise les bulles [×2] et [×3] sur les glaciers pour dépasser 100 !",
    startValue: 0,
    minTarget: 100,
    maxTarget: 300,
    targetRangeLabel: "100–300",
    targetValue: 165,
    initialOperator: "+",
    parSteps: 5,
    skyTop: 988970,
    skyBottom: 12248829,
    hillColor: 14870768,
    platColor: 223649,
    platTopColor: 14742270,
    doorX: 780,
    doorY: 102,
    bubblePool: [
      "×2",
      "×3",
      "×4",
      "×5",
      "×6",
      "÷2",
      "÷3",
      "÷4",
      "÷5",
      "+10",
      "+9",
      "+8",
      "+7",
      "+6",
      "+5",
      "+4",
      "+3",
      "+2",
      "+1",
      "-9",
      "-8",
      "-7",
      "-6",
      "-5",
      "-4",
      "-3",
      "-2",
      "-1",
    ],
    platforms: [
      { x: 780, y: 140, width: 190 },
      { x: 530, y: 215, width: 190 },
      { x: 270, y: 245, width: 190 },
      { x: 760, y: 305, width: 180 },
      { x: 490, y: 335, width: 180 },
      { x: 170, y: 350, width: 180 },
      { x: 640, y: 420, width: 190 },
      { x: 240, y: 425, width: 190 },
    ],
    bricks: [
      { x: 350, y: 384, type: "mystery", caption: "AIDE" },
      { x: 170, y: 228, type: "undo", caption: "UNDO" },
    ],
    bubbleSlots: [
      { x: 240, y: 378 },
      { x: 640, y: 372 },
      { x: 760, y: 258 },
      { x: 460, y: 288 },
      { x: 270, y: 198 },
      { x: 530, y: 168 },
    ],
    slimes: [
      {
        kind: "slime",
        penalty: 2,
        x: 640,
        y: 390,
        minX: 560,
        maxX: 720,
        speed: 80,
      },
      {
        kind: "bat",
        penalty: 3,
        x: 530,
        y: 145,
        minX: 330,
        maxX: 640,
        speed: 95,
        flyY: 145,
      },
    ],
    traps: [{ type: "spikes", x: 865, y: 488, penalty: 3 }],
  },
  {
    id: 6,
    decor: "forest",
    world: "World 3-2 • Enchanted Forest",
    name: "La Canopée Enchantée (100–450)",
    subtitle:
      "Saute de branche en branche avec les bulles [×2], [×3], [÷2] et [÷3] !",
    startValue: 0,
    minTarget: 100,
    maxTarget: 450,
    targetRangeLabel: "100–450",
    targetValue: 240,
    initialOperator: "+",
    parSteps: 5,
    skyTop: 413243,
    skyBottom: 7268279,
    hillColor: 366185,
    platColor: 4528643,
    platTopColor: 1096065,
    doorX: 190,
    doorY: 102,
    bubblePool: [
      "×2",
      "×3",
      "×4",
      "×5",
      "×6",
      "×7",
      "÷2",
      "÷3",
      "÷4",
      "÷5",
      "÷6",
      "+10",
      "+9",
      "+8",
      "+7",
      "+6",
      "+5",
      "+4",
      "+3",
      "+2",
      "+1",
      "-9",
      "-8",
      "-7",
      "-6",
      "-5",
      "-4",
      "-3",
      "-2",
      "-1",
    ],
    platforms: [
      { x: 190, y: 140, width: 210 },
      { x: 450, y: 215, width: 210 },
      { x: 740, y: 265, width: 200 },
      { x: 220, y: 330, width: 200 },
      { x: 560, y: 345, width: 210 },
      { x: 200, y: 420, width: 200 },
      { x: 760, y: 425, width: 200 },
    ],
    bricks: [
      { x: 380, y: 384, type: "mystery", caption: "AIDE" },
      { x: 740, y: 143, type: "undo", caption: "UNDO" },
    ],
    bubbleSlots: [
      { x: 200, y: 372 },
      { x: 760, y: 378 },
      { x: 560, y: 298 },
      { x: 220, y: 282 },
      { x: 450, y: 168 },
      { x: 560, y: 465 },
    ],
    slimes: [
      {
        kind: "frog",
        penalty: 5,
        x: 560,
        y: 315,
        minX: 470,
        maxX: 650,
        speed: 75,
      },
      {
        kind: "bat",
        penalty: 3,
        x: 450,
        y: 140,
        minX: 330,
        maxX: 620,
        speed: 95,
        flyY: 140,
      },
    ],
    traps: [{ type: "spikes", x: 75, y: 488, penalty: 3 }],
  },
  {
    id: 7,
    decor: "volcano",
    world: "World 4-1 • Lava Fortress",
    name: "La Forteresse du Volcan (150–650)",
    subtitle: "Traverse le pont d’obsidienne et combine [×2], [×3] et [+100] !",
    startValue: 0,
    minTarget: 150,
    maxTarget: 650,
    targetRangeLabel: "150–650",
    targetValue: 425,
    initialOperator: "+",
    parSteps: 5,
    skyTop: 4524554,
    skyBottom: 16347926,
    hillColor: 10033947,
    platColor: 1976635,
    platTopColor: 16096779,
    doorX: 480,
    doorY: 102,
    bubblePool: [
      "×2",
      "×3",
      "×4",
      "×5",
      "×6",
      "×7",
      "×8",
      "×9",
      "÷2",
      "÷3",
      "÷4",
      "÷5",
      "÷6",
      "÷7",
      "+10",
      "+9",
      "+8",
      "+7",
      "+6",
      "+5",
      "+4",
      "+3",
      "+2",
      "+1",
      "-10",
      "-9",
      "-8",
      "-7",
      "-6",
      "-5",
      "-4",
      "-3",
      "-2",
      "-1",
    ],
    platforms: [
      { x: 480, y: 140, width: 220 },
      { x: 240, y: 225, width: 190 },
      { x: 720, y: 225, width: 190 },
      { x: 480, y: 310, width: 210 },
      { x: 160, y: 385, width: 190 },
      { x: 800, y: 385, width: 190 },
      { x: 520, y: 430, width: 210 },
    ],
    bricks: [
      { x: 330, y: 384, type: "mystery", caption: "AIDE" },
      { x: 100, y: 264, type: "undo", caption: "UNDO" },
    ],
    bubbleSlots: [
      { x: 520, y: 382 },
      { x: 215, y: 338 },
      { x: 745, y: 338 },
      { x: 480, y: 262 },
      { x: 240, y: 178 },
      { x: 720, y: 178 },
    ],
    slimes: [
      {
        kind: "crab",
        penalty: 5,
        x: 480,
        y: 280,
        minX: 395,
        maxX: 565,
        speed: 95,
      },
      {
        kind: "bat",
        penalty: 5,
        x: 480,
        y: 195,
        minX: 280,
        maxX: 680,
        speed: 105,
        flyY: 195,
      },
    ],
    traps: [
      {
        type: "fireball",
        x: 885,
        y: 310,
        minY: 220,
        maxY: 430,
        speedY: 120,
        penalty: 5,
      },
      { type: "spikes", x: 865, y: 488, penalty: 5 },
    ],
  },
  {
    id: 8,
    decor: "space",
    world: "World 4-2 • Starlight Galaxy",
    name: "La Citadelle Galactique (100–999)",
    subtitle:
      "Flotte entre les anneaux cosmiques pour ouvrir la Grande Porte (100–999) !",
    startValue: 0,
    minTarget: 100,
    maxTarget: 999,
    targetRangeLabel: "100–999",
    targetValue: 745,
    initialOperator: "+",
    parSteps: 6,
    skyTop: 132631,
    skyBottom: 1973067,
    hillColor: 3223169,
    platColor: 3868516,
    platTopColor: 12616956,
    doorX: 480,
    doorY: 102,
    bubblePool: [
      "×2",
      "×3",
      "×4",
      "×5",
      "×6",
      "×7",
      "×8",
      "×9",
      "×10",
      "÷2",
      "÷3",
      "÷4",
      "÷5",
      "÷6",
      "÷7",
      "÷8",
      "÷9",
      "÷10",
      "+10",
      "+9",
      "+8",
      "+7",
      "+6",
      "+5",
      "+4",
      "+3",
      "+2",
      "+1",
      "-10",
      "-9",
      "-8",
      "-7",
      "-6",
      "-5",
      "-4",
      "-3",
      "-2",
      "-1",
    ],
    platforms: [
      { x: 480, y: 140, width: 220 },
      { x: 280, y: 235, width: 170 },
      { x: 680, y: 235, width: 170 },
      { x: 480, y: 330, width: 210 },
      { x: 140, y: 345, width: 170 },
      { x: 820, y: 345, width: 170 },
      { x: 320, y: 425, width: 180 },
      { x: 640, y: 425, width: 180 },
    ],
    bricks: [
      { x: 480, y: 208, type: "mystery", caption: "AIDE" },
      { x: 140, y: 224, type: "undo", caption: "UNDO" },
    ],
    bubbleSlots: [
      { x: 320, y: 378 },
      { x: 640, y: 378 },
      { x: 280, y: 188 },
      { x: 680, y: 188 },
      { x: 350, y: 465 },
      { x: 610, y: 465 },
    ],
    slimes: [
      {
        kind: "bat",
        penalty: 5,
        x: 480,
        y: 195,
        minX: 280,
        maxX: 680,
        speed: 110,
        flyY: 195,
      },
      {
        kind: "frog",
        penalty: 5,
        x: 320,
        y: 395,
        minX: 245,
        maxX: 395,
        speed: 85,
      },
      {
        kind: "crab",
        penalty: 5,
        x: 640,
        y: 395,
        minX: 565,
        maxX: 715,
        speed: 95,
      },
    ],
    traps: [
      {
        type: "fireball",
        x: 885,
        y: 340,
        minY: 240,
        maxY: 450,
        speedY: 130,
        penalty: 5,
      },
      { type: "spikes", x: 865, y: 488, penalty: 5 },
    ],
  },
];
function Ue(it) {
  const X = (Math.max(1, it) - 1) % Xt.length,
    Y = structuredClone(Xt[X]),
    W = it > Xt.length ? 15 : Y.minTarget,
    Z = it > Xt.length ? 999 : Y.maxTarget;
  (Y.targetValue = Ne(W, Z, Y.startValue)), (Y.id = it);
  const K = (n, r) =>
    (Y.bricks || []).some(
      (e) => Math.abs(n - e.x) < 75 && r >= e.y - 30 && r <= e.y + 135,
    );
  Y.bubbleSlots = (Y.bubbleSlots || []).filter((n) => !K(n.x, n.y));
  const S = [
    ...Y.platforms.slice(1).map((n) => ({ x: n.x, y: n.y - 46 })),
    { x: 110, y: 455 },
    { x: 250, y: 455 },
    { x: 480, y: 455 },
    { x: 710, y: 455 },
    { x: 850, y: 455 },
  ].filter(
    (n) =>
      !K(n.x, n.y) &&
      !Y.bubbleSlots.some((r) => Math.hypot(r.x - n.x, r.y - n.y) < 55),
  );
  Y.allBubbleSlots = [...Y.bubbleSlots, ...S];
  const t = Y.bubbleSlots || [],
    f = Y.bubblePool.filter((n) => n.startsWith("+")),
    c = Y.bubblePool.filter((n) => n.startsWith("-")),
    a = Y.bubblePool.filter((n) => n.startsWith("×") || n.startsWith("÷"));
  return (
    (Y.initialBubbles = t.map((n, r) => {
      let e = "+5";
      return (
        r === 0 || r === 1 || (r === 2 && a.length === 0)
          ? (e = f[(r * 2) % f.length] || "+4")
          : r === 3 || (r === 4 && a.length === 0)
            ? (e = c[r % c.length] || "-2")
            : a.length > 0 && (r === 2 || r === 4)
              ? (e = a[r % a.length])
              : (e = f[(r + 3) % f.length] || "+3"),
        { x: n.x, y: n.y, bubble: e }
      );
    })),
    Y
  );
}
const fe = "ben_alice_math_attack_muted",
  Q = {
    _: 0,
    C3: 130.81,
    D3: 146.83,
    E3: 164.81,
    F3: 174.61,
    G3: 196,
    A3: 220,
    B3: 246.94,
    G4: 392,
    A4: 440,
    B4: 493.88,
    C5: 523.25,
    D5: 587.33,
    E5: 659.25,
    F5: 698.46,
    G5: 783.99,
    A5: 880,
  },
  de = {
    menu: {
      stepMs: 210,
      lead: [
        Q.E5,
        Q.G5,
        Q.C5,
        Q.E5,
        Q.D5,
        Q.F5,
        Q.B4,
        Q.D5,
        Q.C5,
        Q.E5,
        Q.G5,
        Q.E5,
        Q.D5,
        Q._,
        Q.G4,
        Q._,
        Q.A4,
        Q.C5,
        Q.F5,
        Q.E5,
        Q.D5,
        Q.B4,
        Q.G4,
        Q.B4,
        Q.C5,
        Q.E5,
        Q.D5,
        Q.B4,
        Q.C5,
        Q._,
        Q.C5,
        Q._,
      ],
      bass: [
        Q.C3,
        Q._,
        Q.G3,
        Q._,
        Q.G3,
        Q._,
        Q.D3,
        Q._,
        Q.C3,
        Q._,
        Q.E3,
        Q._,
        Q.G3,
        Q._,
        Q.G3,
        Q._,
        Q.F3,
        Q._,
        Q.C3,
        Q._,
        Q.G3,
        Q._,
        Q.D3,
        Q._,
        Q.C3,
        Q._,
        Q.G3,
        Q._,
        Q.C3,
        Q._,
        Q._,
        Q._,
      ],
    },
    game: {
      stepMs: 165,
      lead: [
        Q.C5,
        Q.E5,
        Q.G5,
        Q.E5,
        Q.C5,
        Q.G5,
        Q.E5,
        Q._,
        Q.D5,
        Q.F5,
        Q.A5,
        Q.F5,
        Q.D5,
        Q.G5,
        Q.B4,
        Q._,
        Q.C5,
        Q.E5,
        Q.G5,
        Q.C5,
        Q.A4,
        Q.C5,
        Q.F5,
        Q.A5,
        Q.G5,
        Q.E5,
        Q.D5,
        Q.B4,
        Q.C5,
        Q.G4,
        Q.C5,
        Q._,
        Q.E5,
        Q._,
        Q.E5,
        Q.F5,
        Q.G5,
        Q._,
        Q.E5,
        Q.C5,
        Q.D5,
        Q._,
        Q.D5,
        Q.E5,
        Q.F5,
        Q._,
        Q.D5,
        Q.B4,
        Q.C5,
        Q.G4,
        Q.E5,
        Q.C5,
        Q.A5,
        Q.F5,
        Q.D5,
        Q.B4,
        Q.C5,
        Q.E5,
        Q.G5,
        Q.E5,
        Q.C5,
        Q._,
        Q._,
        Q._,
      ],
      bass: [
        Q.C3,
        Q.G3,
        Q.C3,
        Q.G3,
        Q.C3,
        Q.G3,
        Q.C3,
        Q.G3,
        Q.G3,
        Q.D3,
        Q.G3,
        Q.D3,
        Q.G3,
        Q.D3,
        Q.G3,
        Q.D3,
        Q.C3,
        Q.G3,
        Q.E3,
        Q.G3,
        Q.F3,
        Q.C3,
        Q.F3,
        Q.C3,
        Q.G3,
        Q.D3,
        Q.G3,
        Q.D3,
        Q.C3,
        Q.G3,
        Q.C3,
        Q._,
        Q.C3,
        Q.G3,
        Q.C3,
        Q.G3,
        Q.E3,
        Q.G3,
        Q.C3,
        Q.G3,
        Q.G3,
        Q.D3,
        Q.G3,
        Q.D3,
        Q.B3,
        Q.D3,
        Q.G3,
        Q.D3,
        Q.C3,
        Q.E3,
        Q.G3,
        Q.E3,
        Q.F3,
        Q.A3,
        Q.G3,
        Q.B3,
        Q.C3,
        Q.G3,
        Q.E3,
        Q.G3,
        Q.C3,
        Q._,
        Q._,
        Q._,
      ],
    },
    victory: {
      stepMs: 155,
      lead: [
        Q.C5,
        Q.C5,
        Q.E5,
        Q.G5,
        Q.A5,
        Q.G5,
        Q.E5,
        Q.C5,
        Q.D5,
        Q.D5,
        Q.G5,
        Q.B4,
        Q.D5,
        Q.G5,
        Q.A5,
        Q.B4,
        Q.C5,
        Q.E5,
        Q.G5,
        Q.C5,
        Q.F5,
        Q.A5,
        Q.G5,
        Q.E5,
        Q.D5,
        Q.G5,
        Q.E5,
        Q.D5,
        Q.C5,
        Q.G5,
        Q.C5,
        Q._,
      ],
      bass: [
        Q.C3,
        Q.C3,
        Q.E3,
        Q.G3,
        Q.F3,
        Q.F3,
        Q.C3,
        Q.E3,
        Q.G3,
        Q.G3,
        Q.D3,
        Q.G3,
        Q.G3,
        Q.D3,
        Q.G3,
        Q.B3,
        Q.C3,
        Q.E3,
        Q.G3,
        Q.E3,
        Q.F3,
        Q.A3,
        Q.C3,
        Q.E3,
        Q.G3,
        Q.D3,
        Q.G3,
        Q.B3,
        Q.C3,
        Q.G3,
        Q.C3,
        Q._,
      ],
    },
  };
class be {
  constructor() {
    if (typeof window < "u" && window.__MATH_ATTACK_SOUND_MANAGER__)
      try {
        window.__MATH_ATTACK_SOUND_MANAGER__.destroy();
      } catch {}
    (this.ctx = null),
      (this.masterGain = null),
      (this.muted = !1),
      (this.currentTheme = "menu"),
      (this.musicTimer = null),
      (this.musicStep = 0);
    try {
      typeof window < "u" &&
        window.localStorage &&
        (this.muted = window.localStorage.getItem(fe) === "true");
    } catch {}
    (this._onUnlock = () => {
      this.muted ||
        (this._ensureContext(),
        !this.musicTimer &&
          this.currentTheme &&
          this.startMusic(this.currentTheme));
    }),
      typeof window < "u" &&
        (window.addEventListener("pointerdown", this._onUnlock, {
          passive: !0,
        }),
        window.addEventListener("keydown", this._onUnlock, { passive: !0 }),
        window.addEventListener("touchend", this._onUnlock, { passive: !0 }),
        (window.__MATH_ATTACK_SOUND_MANAGER__ = this));
  }
  destroy() {
    if (
      (this.stopMusic(),
      typeof window < "u" &&
        this._onUnlock &&
        (window.removeEventListener("pointerdown", this._onUnlock),
        window.removeEventListener("keydown", this._onUnlock),
        window.removeEventListener("touchend", this._onUnlock)),
      this.ctx)
    ) {
      try {
        this.ctx.close();
      } catch {}
      (this.ctx = null), (this.masterGain = null);
    }
  }
  _ensureContext() {
    if (this.muted || typeof window > "u") return null;
    const X = window.AudioContext || window.webkitAudioContext;
    return X
      ? (this.ctx ||
          ((this.ctx = new X()),
          (this.masterGain = this.ctx.createGain()),
          this.masterGain.gain.setValueAtTime(
            this.muted ? 0 : 1,
            this.ctx.currentTime,
          ),
          this.masterGain.connect(this.ctx.destination)),
        this.ctx.state === "suspended" && this.ctx.resume().catch(() => {}),
        this.masterGain &&
          this.masterGain.gain.setValueAtTime(
            this.muted ? 0 : 1,
            this.ctx.currentTime,
          ),
        this.ctx)
      : null;
  }
  toggleMute() {
    return this.setMuted(!this.muted);
  }
  setMuted(X) {
    this.muted = !!X;
    try {
      typeof window < "u" &&
        window.localStorage &&
        window.localStorage.setItem(fe, String(this.muted));
    } catch {}
    return (
      this.muted
        ? (this.stopMusic(),
          this.masterGain &&
            this.ctx &&
            this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime),
          this.ctx &&
            this.ctx.state === "running" &&
            this.ctx.suspend().catch(() => {}))
        : (this._ensureContext(),
          this.currentTheme && this.startMusic(this.currentTheme)),
      this.muted
    );
  }
  startMusic(X = "game") {
    if (
      ((this.currentTheme = de[X] ? X : "game"),
      this.musicTimer &&
        (clearInterval(this.musicTimer), (this.musicTimer = null)),
      this.muted || typeof window > "u")
    )
      return;
    const Y = de[this.currentTheme];
    this.musicStep = 0;
    const W = () => {
      if (this.muted) return;
      const Z = this._ensureContext();
      if (!Z || Z.state !== "running") return;
      const K = this.musicStep % Y.lead.length,
        p = Y.lead[K],
        S = Y.bass[K % Y.bass.length],
        t = (Y.stepMs / 1e3) * 0.82;
      p > 0 &&
        this._playTone({ freq: p, duration: t, type: "triangle", gain: 0.045 }),
        S > 0 &&
          this._playTone({
            freq: S,
            duration: t * 0.9,
            type: "sine",
            gain: 0.05,
          }),
        (this.musicStep += 1);
    };
    this.musicTimer = setInterval(W, Y.stepMs);
  }
  stopMusic() {
    this.musicTimer &&
      (clearInterval(this.musicTimer), (this.musicTimer = null));
  }
  _playTone({
    freq: X = 440,
    endFreq: Y = null,
    duration: W = 0.12,
    type: Z = "sine",
    gain: K = 0.14,
    delay: p = 0,
  }) {
    const S = this._ensureContext();
    if (!S) return;
    const t = S.currentTime + p,
      f = S.createOscillator(),
      c = S.createGain();
    (f.type = Z),
      f.frequency.setValueAtTime(X, t),
      Y !== null &&
        f.frequency.exponentialRampToValueAtTime(Math.max(20, Y), t + W),
      c.gain.setValueAtTime(0.001, t),
      c.gain.linearRampToValueAtTime(K, t + 0.015),
      c.gain.exponentialRampToValueAtTime(0.001, t + W),
      f.connect(c),
      c.connect(this.masterGain || S.destination),
      f.start(t),
      f.stop(t + W + 0.02);
  }
  playJump() {
    this._playTone({
      freq: 260,
      endFreq: 580,
      duration: 0.14,
      type: "sine",
      gain: 0.12,
    });
  }
  playPickup() {
    this._playTone({
      freq: 587.33,
      duration: 0.08,
      type: "triangle",
      gain: 0.14,
      delay: 0,
    }),
      this._playTone({
        freq: 880,
        duration: 0.14,
        type: "triangle",
        gain: 0.14,
        delay: 0.06,
      });
  }
  playBrickBump() {
    this._playTone({
      freq: 180,
      endFreq: 360,
      duration: 0.11,
      type: "square",
      gain: 0.09,
    });
  }
  playOperatorSwitch() {
    this._playTone({
      freq: 440,
      duration: 0.07,
      type: "sine",
      gain: 0.12,
      delay: 0,
    }),
      this._playTone({
        freq: 659.25,
        duration: 0.11,
        type: "sine",
        gain: 0.12,
        delay: 0.06,
      });
  }
  playReject() {
    this._playTone({
      freq: 240,
      endFreq: 130,
      duration: 0.2,
      type: "sawtooth",
      gain: 0.1,
    });
  }
  playFunnyCry() {
    this._playTone({
      freq: 520,
      endFreq: 310,
      duration: 0.18,
      type: "triangle",
      gain: 0.16,
      delay: 0,
    }),
      this._playTone({
        freq: 460,
        endFreq: 260,
        duration: 0.2,
        type: "triangle",
        gain: 0.16,
        delay: 0.19,
      }),
      this._playTone({
        freq: 390,
        endFreq: 190,
        duration: 0.26,
        type: "sawtooth",
        gain: 0.12,
        delay: 0.39,
      });
  }
  playSlimeStomp() {
    this._playTone({
      freq: 320,
      endFreq: 720,
      duration: 0.15,
      type: "triangle",
      gain: 0.15,
    });
  }
  playDoorUnlock() {
    [523.25, 659.25, 783.99, 1046.5].forEach((Y, W) => {
      this._playTone({
        freq: Y,
        duration: 0.14,
        type: "triangle",
        gain: 0.14,
        delay: W * 0.07,
      });
    });
  }
  playVictory() {
    [
      { freq: 523.25, delay: 0, dur: 0.12 },
      { freq: 659.25, delay: 0.11, dur: 0.12 },
      { freq: 783.99, delay: 0.22, dur: 0.12 },
      { freq: 1046.5, delay: 0.34, dur: 0.28 },
      { freq: 783.99, delay: 0.56, dur: 0.12 },
      { freq: 1046.5, delay: 0.68, dur: 0.38 },
    ].forEach((Y) => {
      this._playTone({
        freq: Y.freq,
        duration: Y.dur,
        type: "triangle",
        gain: 0.15,
        delay: Y.delay,
      });
    });
  }
}
const ut = new be();
// Adaptation: the original sends anonymous level events to the author's Google
// Analytics property (with a consent dialog). This copy does not track anything.
function Yt() {}
class Ye extends pt.Scene {
  constructor() {
    super("MenuScene"), (this.selectedMode = oe()), (this.selectedLevel = 1);
  }
  create() {
    (this.selectedMode = oe()), ut.startMusic("menu");
    const X = this.add.graphics();
    X.fillGradientStyle(1973067, 1973067, 1981066, 1981066, 1),
      X.fillRect(0, 0, 960, 540),
      X.fillStyle(2278750, 0.25),
      X.fillEllipse(220, 520, 480, 140),
      X.fillEllipse(740, 520, 520, 160),
      this._createLanguageMenu(),
      typeof document < "u" && (document.title = ht("gameTitle"));
    const Y = this.add
      .text(480, 54, ht("gameTitle"), {
        fontSize: "38px",
        fontStyle: "bold",
        color: "#fde047",
        stroke: "#0f172a",
        strokeThickness: 8,
      })
      .setOrigin(0.5);
    Y.width > 580 && Y.setScale(580 / Y.width),
      (this.menuSubtitleTxt = this.add
        .text(480, 96, ht("menuSubtitle"), {
          fontSize: "14px",
          fontStyle: "bold",
          color: "#bae6fd",
        })
        .setOrigin(0.5)),
      this.menuSubtitleTxt.width > 560 &&
        this.menuSubtitleTxt.setScale(560 / this.menuSubtitleTxt.width);
    const W = te();
    this._createCharacterSkinPicker(86, 66, W.p1Prefix, `J1: ${W.p1Name}`),
      this._createCharacterSkinPicker(874, 66, W.p2Prefix, `J2: ${W.p2Name}`),
      this.add
        .text(480, 144, ht("chooseMode"), {
          fontSize: "14.5px",
          fontStyle: "bold",
          color: "#93c5fd",
        })
        .setOrigin(0.5),
      (this.modeButtons = []),
      [
        {
          id: "1p",
          label: ht("mode1pTitle", { p1: W.p1Name }),
          sub: ht("mode1pSub"),
        },
        {
          id: "2p-coop",
          label: ht("modeCoopTitle"),
          sub: ht("modeCoopSub", { p1: W.p1Name, p2: W.p2Name }),
        },
        {
          id: "2p-versus",
          label: ht("modeVersusTitle"),
          sub: ht("modeVersusSub", { p1: W.p1Name, p2: W.p2Name }),
        },
      ].forEach((e, s) => {
        const o = 200 + s * 280,
          h = this._createChoiceCard(o, 190, 255, 58, e.label, e.sub, () => {
            ut.playOperatorSwitch(),
              (this.selectedMode = he(e.id)),
              this._refreshSelectionStyles();
          });
        (h.modeId = e.id), this.modeButtons.push(h);
      }),
      this.add
        .text(480, 248, ht("chooseStage"), {
          fontSize: "14.5px",
          fontStyle: "bold",
          color: "#93c5fd",
        })
        .setOrigin(0.5),
      (this.levelButtons = []),
      Xt.forEach((e, s) => {
        const o = s % 4,
          i = Math.floor(s / 4),
          h = 165 + o * 210,
          l = 296 + i * 64,
          d = Kt(e.id, e.targetValue),
          u = this._createChoiceCard(
            h,
            l,
            196,
            52,
            ht("stageCardTitle", { id: e.id, range: e.targetRangeLabel }),
            d.name,
            () => {
              ut.playPickup(),
                (this.selectedLevel = e.id),
                this._refreshSelectionStyles();
            },
          );
        (u.levelId = e.id), this.levelButtons.push(u);
      });
    const K = this.add.graphics();
    K.fillStyle(2278750, 1),
      K.lineStyle(4, 16707722, 1),
      K.fillRoundedRect(290, 412, 380, 54, 16),
      K.strokeRoundedRect(290, 412, 380, 54, 16);
    const p = this.add
      .zone(480, 439, 380, 54)
      .setInteractive({ useHandCursor: !0 });
    this.add
      .text(480, 439, ht("startGameBtn"), {
        fontSize: "19px",
        fontStyle: "bold",
        color: "#052e16",
      })
      .setOrigin(0.5),
      p.on("pointerdown", () => this._startGame());
    const S = this.add.graphics();
    S.fillStyle(988970, 0.85),
      S.lineStyle(1.5, 3359061, 0.9),
      S.fillRoundedRect(168, 478, 624, 46, 10),
      S.strokeRoundedRect(168, 478, 624, 46, 10),
      (this.footerTxt = this.add
        .text(480, 501, ht("menuBricksFooter"), {
          fontSize: "12px",
          fontStyle: "bold",
          color: "#e2e8f0",
        })
        .setOrigin(0.5)),
      this.footerTxt.width > 596 &&
        this.footerTxt.setScale(596 / this.footerTxt.width);
    if (isFullscreenAvailable()) {
      const t = this.add.graphics();
      t.fillStyle(988970, 0.92),
        t.lineStyle(1.5, 6583435, 0.95),
        t.fillRoundedRect(32, 478, 126, 46, 10),
        t.strokeRoundedRect(32, 478, 126, 46, 10);
      const fsLabel = () => ht(isFullscreen() ? "exitFullscreenBtn" : "fullscreenBtn"),
        f = this.add
          .text(95, 501, fsLabel(), {
            fontSize: "13px",
            fontStyle: "bold",
            color: "#93c5fd",
          })
          .setOrigin(0.5),
        c = this.add.zone(95, 501, 126, 46).setInteractive({ useHandCursor: !0 });
      f.width > 116 && f.setScale(116 / f.width);
      const onFsChange = () => {
        f.setScale(1), f.setText(fsLabel()), f.width > 116 && f.setScale(116 / f.width);
      };
      document.addEventListener("fullscreenchange", onFsChange),
        document.addEventListener("webkitfullscreenchange", onFsChange),
        this.events.once("shutdown", () => {
          document.removeEventListener("fullscreenchange", onFsChange),
            document.removeEventListener("webkitfullscreenchange", onFsChange);
        });
      c.on("pointerover", () => f.setColor("#fde047")),
        c.on("pointerout", () => f.setColor("#93c5fd")),
        // pointerup = a real "user gesture" for the Fullscreen API on mobile browsers
        c.on("pointerup", () => toggleFullscreen());
    }
    const a = this.add.graphics();
    a.fillStyle(988970, 0.92),
      a.lineStyle(1.5, 6583435, 0.95),
      a.fillRoundedRect(802, 478, 126, 46, 10),
      a.strokeRoundedRect(802, 478, 126, 46, 10);
    const n = this.add
        .text(865, 501, ht("originalGameBtn"), {
          fontSize: "13px",
          fontStyle: "bold",
          color: "#93c5fd",
        })
        .setOrigin(0.5),
      r = (n.width > 116 && n.setScale(116 / n.width), this.add)
        .zone(865, 501, 126, 46)
        .setInteractive({ useHandCursor: !0 });
    r.on("pointerover", () => n.setColor("#fde047")),
      r.on("pointerout", () => n.setColor("#93c5fd")),
      r.on("pointerdown", () => {
        typeof window < "u" &&
          window.open(
            "https://julien-dubois.com/math-attack/",
            "_blank",
            "noopener,noreferrer",
          );
      }),
      this._refreshSelectionStyles(),
      this.input.keyboard.removeAllListeners(),
      this.input.keyboard.once("keydown-SPACE", () => this._startGame()),
      this.input.keyboard.once("keydown-ENTER", () => this._startGame()),
      this.input.keyboard.on("keydown-L", () => {
        ut.playOperatorSwitch(), ie(), this.scene.restart();
      }),
      this.input.keyboard.on("keydown-S", () => {
        ut.playOperatorSwitch(), le(), this.scene.restart();
      }),
      this.input.keyboard.on("keydown-K", () => {
        ut.playPickup(),
          this.skinsGalleryContainer
            ? this._closeSkinsGallery()
            : this._openSkinsGallery();
      }),
      this.input.keyboard.on("keydown-M", () => {
        const e = ut.toggleMute();
        this.musicTxt &&
          (this.musicTxt.setText(e ? "🔇 [M]" : "🎵 [M]"),
          this.musicTxt.setColor(e ? "#fda4af" : "#4ade80"));
      });
  }
  _createCharacterSkinPicker(X, Y, W, Z) {
    const K = Pt(),
      p = Ht(W);
    ne().length;
    const S = this.add
      .image(X, Y, ct(W, "front"))
      .setScale(0.55)
      .setInteractive({ useHandCursor: !0 });
    this.tweens.add({
      targets: S,
      y: Y - 10,
      duration: 600,
      yoyo: !0,
      repeat: -1,
      ease: "Sine.easeInOut",
    }),
      this.add
        .text(X, Y - 48, Z, {
          fontSize: "11.5px",
          fontStyle: "bold",
          color: "#fde047",
          stroke: "#0f172a",
          strokeThickness: 3,
        })
        .setOrigin(0.5);
    const t = this.add.graphics();
    t.fillStyle(988970, 0.92),
      t.lineStyle(2, 16436245, 0.9),
      t.fillRoundedRect(X - 66, Y + 38, 132, 26, 8),
      t.strokeRoundedRect(X - 66, Y + 38, 132, 26, 8);
    const f = K === "fr" ? p.fr : p.en,
      c = this.add
        .text(X, Y + 51, `◀ ${p.icon} ${f} ▶`, {
          fontSize: "11px",
          fontStyle: "bold",
          color: "#ffffff",
        })
        .setOrigin(0.5);
    c.width > 122 && c.setScale(122 / c.width),
      this.add
        .text(
          X,
          Y + 71,
          ht("viewSkinsBtn"),
          {
            fontSize: isTouchMode() ? "12px" : "10px",
            fontStyle: "bold",
            color: "#fde047",
            backgroundColor: "#1e293b",
            padding: { x: 4, y: 2 },
          },
        )
        .setOrigin(0.5)
        .setInteractive({ useHandCursor: !0 })
        .on("pointerdown", () => {
          ut.playPickup(), this._openSkinsGallery();
        });
    const n = () => {
      ut.playPickup();
      const e = Re(W, 1);
      S.setTexture(ct(W, "front", e.id));
      const s = Pt() === "fr" ? e.fr : e.en;
      c.setScale(1),
        c.setText(`◀ ${e.icon} ${s} ▶`),
        c.width > 122 && c.setScale(122 / c.width);
    };
    S.on("pointerdown", n),
      this.add
        .zone(X, Y + 51, 132, 28)
        .setInteractive({ useHandCursor: !0 })
        .on("pointerdown", n);
  }
  _openSkinsGallery() {
    this.skinsGalleryContainer && this.skinsGalleryContainer.destroy(), Me();
    const X = Pt(),
      Y = this.add.container(0, 0).setDepth(500),
      W = this.add.graphics();
    W.fillStyle(988970, 0.97), W.fillRect(0, 0, 960, 540);
    const Z = this.add.zone(480, 270, 960, 540).setInteractive();
    Y.add([W, Z]);
    const K = ht("skinsGalleryTitle"),
      p = this.add
        .text(440, 24, K, {
          fontSize: "17px",
          fontStyle: "bold",
          color: "#fde047",
        })
        .setOrigin(0.5);
    p.width > 790 && p.setScale(790 / p.width), Y.add(p);
    const S = this.add.graphics();
    S.fillStyle(14753096, 1),
      S.lineStyle(2, 16777215, 0.9),
      S.fillRoundedRect(830, 8, 114, 32, 8),
      S.strokeRoundedRect(830, 8, 114, 32, 8);
    const t = this.add
        .text(887, 24, ht("closeBtn"), {
          fontSize: "13px",
          fontStyle: "bold",
          color: "#ffffff",
        })
        .setOrigin(0.5),
      f = this.add.zone(887, 24, 114, 32).setInteractive({ useHandCursor: !0 });
    f.on("pointerdown", () => this._closeSkinsGallery()), Y.add([S, t, f]);
    const c = 5,
      a = 174,
      n = 112,
      r = 104,
      e = 102,
      s = 188,
      o = 120;
    Ft.forEach((i, h) => {
      const l = h % c,
        d = Math.floor(h / c),
        u = r + l * s,
        v = e + d * o,
        m = Ht("p1").id === i.id || Ht("p2").id === i.id,
        x = this.add.graphics();
      x.fillStyle(m ? 1981066 : 1976635, 0.96),
        x.lineStyle(m ? 3 : 1.5, m ? 16436245 : 4674921, 1),
        x.fillRoundedRect(u - a / 2, v - n / 2, a, n, 12),
        x.strokeRoundedRect(u - a / 2, v - n / 2, a, n, 12);
      const g = this.add
          .image(u - 32, v - 10, ct("p1", "front", i.id))
          .setScale(0.42),
        y = this.add
          .image(u + 32, v - 10, ct("p2", "front", i.id))
          .setScale(0.42),
        T = `${i.icon} ${X === "fr" ? i.fr : i.en}`,
        C = this.add
          .text(u, v + 40, T, {
            fontSize: "12px",
            fontStyle: "bold",
            color: m ? "#fde047" : "#f8fafc",
          })
          .setOrigin(0.5),
        E = this.add.zone(u, v, a, n).setInteractive({ useHandCursor: !0 });
      E.on("pointerdown", () => {
        ut.playPickup(),
          Qt("p1", i.id),
          Qt("p2", i.id),
          this._closeSkinsGallery();
      }),
        Y.add([x, g, y, C, E]);
    }),
      (this.skinsGalleryContainer = Y);
  }
  _closeSkinsGallery() {
    this.skinsGalleryContainer &&
      (this.skinsGalleryContainer.destroy(),
      (this.skinsGalleryContainer = null),
      this.scene.restart());
  }
  _createLanguageMenu() {
    const X = Pt(),
      Y = te(),
      W = this.add.container(480, 18),
      Z = X === "fr",
      K = X === "en",
      p = this.add.graphics();
    p.fillStyle(Z ? 2450411 : 988970, 0.92),
      p.lineStyle(2, Z ? 16436245 : 4674921, 1),
      p.fillRoundedRect(-235, -13, 98, 26, 8),
      p.strokeRoundedRect(-235, -13, 98, 26, 8);
    const S = this.add
        .text(-186, 0, "🇫🇷 Français", {
          fontSize: "12px",
          fontStyle: "bold",
          color: Z ? "#fde047" : "#cbd5e1",
        })
        .setOrigin(0.5),
      t = this.add.zone(-186, 0, 98, isTouchMode() ? 38 : 26).setInteractive({ useHandCursor: !0 });
    t.on("pointerdown", () => {
      Pt() !== "fr" &&
        (ut.playOperatorSwitch(), ee("fr"), this.scene.restart());
    });
    const f = this.add.graphics();
    f.fillStyle(K ? 2450411 : 988970, 0.92),
      f.lineStyle(2, K ? 16436245 : 4674921, 1),
      f.fillRoundedRect(-130, -13, 98, 26, 8),
      f.strokeRoundedRect(-130, -13, 98, 26, 8);
    const c = this.add
        .text(-81, 0, "🇬🇧 English", {
          fontSize: "12px",
          fontStyle: "bold",
          color: K ? "#fde047" : "#cbd5e1",
        })
        .setOrigin(0.5),
      a = this.add.zone(-81, 0, 98, isTouchMode() ? 38 : 26).setInteractive({ useHandCursor: !0 });
    a.on("pointerdown", () => {
      Pt() !== "en" &&
        (ut.playOperatorSwitch(), ee("en"), this.scene.restart());
    });
    const n = this.add.graphics();
    n.fillStyle(8141549, 0.92),
      n.lineStyle(2, 16707722, 0.9),
      n.fillRoundedRect(-24, -13, 178, 26, 8),
      n.strokeRoundedRect(-24, -13, 178, 26, 8);
    const r = this.add
        .text(65, 0, ht("swapPlayersBtn", { p1: Y.p1Name, p2: Y.p2Name }), {
          fontSize: "11.5px",
          fontStyle: "bold",
          color: "#fef08a",
        })
        .setOrigin(0.5),
      e = this.add.zone(65, 0, 178, isTouchMode() ? 38 : 26).setInteractive({ useHandCursor: !0 });
    e.on("pointerdown", () => {
      ut.playOperatorSwitch(), le(), this.scene.restart();
    });
    const s = this.add.graphics();
    s.fillStyle(988970, 0.92),
      s.lineStyle(2, 4674921, 1),
      s.fillRoundedRect(162, -13, 76, 26, 8),
      s.strokeRoundedRect(162, -13, 76, 26, 8),
      (this.musicTxt = this.add
        .text(200, 0, hk(ut.muted ? "🔇 [M]" : "🎵 [M]"), {
          fontSize: "12px",
          fontStyle: "bold",
          color: ut.muted ? "#fda4af" : "#4ade80",
        })
        .setOrigin(0.5));
    const o = this.add
      .zone(200, 0, 76, isTouchMode() ? 38 : 26)
      .setInteractive({ useHandCursor: !0 });
    o.on("pointerdown", () => {
      const i = ut.toggleMute();
      this.musicTxt.setText(hk(i ? "🔇 [M]" : "🎵 [M]")),
        this.musicTxt.setColor(i ? "#fda4af" : "#4ade80");
    }),
      W.add([p, S, t, f, c, a, n, r, e, s, this.musicTxt, o]);
  }
  _createChoiceCard(X, Y, W, Z, K, p, S) {
    const t = this.add.container(X, Y),
      f = this.add.graphics(),
      c = this.add
        .text(0, -8, K, {
          fontSize: isTouchMode() ? "16px" : "14.5px",
          fontStyle: "bold",
          color: "#ffffff",
        })
        .setOrigin(0.5);
    c.width > W - 16 && c.setScale((W - 16) / c.width);
    const a = this.add
      .text(0, 12, p, { fontSize: isTouchMode() ? "12.5px" : "11.5px", color: "#cbd5e1" })
      .setOrigin(0.5);
    a.width > W - 16 && a.setScale((W - 16) / a.width);
    const n = this.add.zone(0, 0, W, Z).setInteractive({ useHandCursor: !0 });
    return (
      n.on("pointerdown", S),
      t.add([f, c, a, n]),
      (t.cardBg = f),
      (t.cardW = W),
      (t.cardH = Z),
      (t.titleTxt = c),
      (t.subTxt = a),
      t
    );
  }
  _refreshSelectionStyles() {
    this.modeButtons.forEach((X) => {
      const Y = X.modeId === this.selectedMode;
      X.cardBg.clear(),
        X.cardBg.fillStyle(Y ? 2450411 : 1976635, 0.95),
        X.cardBg.lineStyle(Y ? 3 : 1.5, Y ? 16436245 : 4674921, 1),
        X.cardBg.fillRoundedRect(
          -X.cardW / 2,
          -X.cardH / 2,
          X.cardW,
          X.cardH,
          12,
        ),
        X.cardBg.strokeRoundedRect(
          -X.cardW / 2,
          -X.cardH / 2,
          X.cardW,
          X.cardH,
          12,
        );
    }),
      this.levelButtons.forEach((X) => {
        const Y = X.levelId === this.selectedLevel;
        X.cardBg.clear(),
          X.cardBg.fillStyle(Y ? 8141549 : 1976635, 0.95),
          X.cardBg.lineStyle(Y ? 3 : 1.5, Y ? 16436245 : 4674921, 1),
          X.cardBg.fillRoundedRect(
            -X.cardW / 2,
            -X.cardH / 2,
            X.cardW,
            X.cardH,
            10,
          ),
          X.cardBg.strokeRoundedRect(
            -X.cardW / 2,
            -X.cardH / 2,
            X.cardW,
            X.cardH,
            10,
          );
      });
  }
  _startGame() {
    he(this.selectedMode),
      ut.playDoorUnlock(),
      this.scene.start("GameScene", {
        mode: this.selectedMode,
        level: this.selectedLevel,
      });
  }
}
class We extends pt.Scene {
  constructor() {
    super("GameScene");
  }
  init(X) {
    (this.gameMode = (X == null ? void 0 : X.mode) || "1p"),
      (this.levelNumber = (X == null ? void 0 : X.level) || 1),
      (this.levelConfig = Ue(this.levelNumber)),
      (this.levelCompleted = !1),
      (this.startTimeMs = 0),
      (this.victoryTimer = null);
  }
  create() {
    this.scene.isActive("MenuScene") && this.scene.stop("MenuScene"),
      this.scene.isActive("VictoryScene") && this.scene.stop("VictoryScene"),
      ut.startMusic("game"),
      (this.startTimeMs = this.time.now),
      this._setupMathCounters(),
      this._drawBackground(),
      this._createPlatforms(),
      this._createTopDoor(),
      this._createBricks(),
      this._createPickups(),
      this._createSlimes(),
      this._createTraps(),
      this._createPlayers(),
      this._createHud(),
      this._setupControls(),
      this._setupCollisions(),
      this._updateAllVisuals(),
      this.hudEquationText.setText(this.hudEquationText.text),
      Yt("level_start", this),
      showTouchControls(this.gameMode, te(), ht("jumpBtn")),
      this.events.once("shutdown", hideTouchControls);
  }
  _restartLevel() {
    var X;
    this.levelCompleted || Yt("level_restart", this),
      (X = this.victoryTimer) == null || X.remove(!1),
      this.scene.restart({ mode: this.gameMode, level: this.levelNumber });
  }
  _exitToMenu() {
    var X;
    this.levelCompleted || Yt("level_exit", this),
      (X = this.victoryTimer) == null || X.remove(!1),
      this.scene.start("MenuScene");
  }
  _setupMathCounters() {
    const {
      startValue: X,
      targetValue: Y,
      initialOperator: W,
    } = this.levelConfig;
    this.gameMode === "2p-versus"
      ? ((this.counterP1 = new qt({
          startValue: X,
          targetValue: Y,
          initialOperator: W,
        })),
        (this.counterP2 = new qt({
          startValue: X,
          targetValue: Y,
          initialOperator: W,
        })))
      : ((this.counterP1 = new qt({
          startValue: X,
          targetValue: Y,
          initialOperator: W,
        })),
        (this.counterP2 = this.counterP1)),
      (this.wasDoorUnlocked = !1);
  }
  _drawBackground() {
    const {
        skyTop: X,
        skyBottom: Y,
        hillColor: W,
        decor: Z = "meadow",
      } = this.levelConfig,
      K = this.add.graphics();
    if (
      (K.fillGradientStyle(X, X, Y, Y, 1),
      K.fillRect(0, 0, 960, 540),
      Z === "meadow")
    )
      K.fillStyle(16638023, 0.9),
        K.fillCircle(120, 95, 38),
        K.fillStyle(16707722, 0.35),
        K.fillCircle(120, 95, 54),
        this._drawClouds(K, 16777215, 0.45),
        K.fillStyle(W, 0.35),
        K.fillEllipse(200, 510, 440, 150),
        K.fillEllipse(760, 510, 480, 165),
        K.fillEllipse(480, 520, 380, 120),
        [110, 260, 410, 620, 830].forEach((p) => {
          K.fillStyle(16007006, 0.8),
            K.fillCircle(p, 490, 5),
            K.fillStyle(16707722, 1),
            K.fillCircle(p, 490, 2.2);
        });
    else if (Z === "beach")
      K.fillStyle(16436245, 0.9),
        K.fillCircle(840, 90, 40),
        this._drawClouds(K, 16777215, 0.4),
        K.fillStyle(165063, 0.45),
        K.fillRect(0, 435, 960, 75),
        K.fillStyle(16638023, 0.45),
        K.fillEllipse(240, 515, 480, 115),
        K.fillEllipse(740, 515, 480, 115),
        [90, 870].forEach((p) => {
          K.fillStyle(9584654, 0.75),
            K.fillRect(p - 6, 375, 12, 125),
            K.fillStyle(1483594, 0.8),
            K.fillEllipse(p - 28, 375, 52, 18),
            K.fillEllipse(p + 28, 375, 52, 18),
            K.fillEllipse(p, 362, 48, 16);
        });
    else if (Z === "cavern") {
      K.fillStyle(3223169, 0.65);
      for (let p = 40; p < 940; p += 90) {
        const S = 45 + ((p * 17) % 45);
        K.fillTriangle(p - 28, 44, p + 28, 44, p, 44 + S);
      }
      [130, 350, 590, 830].forEach((p, S) => {
        K.fillStyle(S % 2 === 0 ? 3718648 : 15235577, 0.45),
          K.fillTriangle(p - 16, 500, p + 16, 500, p, 435),
          K.fillTriangle(p + 8, 500, p + 30, 500, p + 22, 455);
      });
    } else if (Z === "desert")
      K.fillStyle(16707722, 0.8),
        K.fillCircle(480, 110, 48),
        K.fillStyle(14251782, 0.45),
        K.fillTriangle(80, 500, 380, 500, 230, 310),
        K.fillTriangle(540, 500, 880, 500, 710, 290),
        [120, 430, 850].forEach((p) => {
          K.fillStyle(1409085, 0.75),
            K.fillRoundedRect(p - 7, 420, 14, 80, 6),
            K.fillRoundedRect(p - 22, 445, 16, 8, 4),
            K.fillRoundedRect(p - 22, 430, 8, 20, 4),
            K.fillRoundedRect(p + 6, 452, 16, 8, 4),
            K.fillRoundedRect(p + 14, 435, 8, 22, 4);
        });
    else if (Z === "snow") {
      K.fillStyle(6583435, 0.45),
        K.fillTriangle(40, 500, 420, 500, 230, 240),
        K.fillTriangle(480, 500, 920, 500, 700, 220),
        K.fillStyle(16777215, 0.75),
        K.fillTriangle(172, 320, 288, 320, 230, 240),
        K.fillTriangle(635, 305, 765, 305, 700, 220);
      for (let p = 0; p < 28; p++)
        K.fillCircle(((p * 97) % 940) + 10, ((p * 61) % 440) + 50, 3);
    } else if (Z === "forest") {
      K.fillStyle(4140577, 0.4),
        [110, 380, 650, 880].forEach((p) => {
          K.fillRect(p - 24, 44, 48, 460);
        }),
        K.fillStyle(292951, 0.45),
        K.fillEllipse(240, 80, 380, 90),
        K.fillEllipse(720, 80, 420, 90),
        K.fillStyle(16707722, 0.8);
      for (let p = 0; p < 18; p++)
        K.fillCircle(((p * 131) % 900) + 30, ((p * 79) % 380) + 80, 3.5);
    } else if (Z === "volcano") {
      K.fillStyle(1976635, 0.65),
        K.fillTriangle(220, 500, 740, 500, 480, 190),
        K.fillStyle(15680580, 0.65),
        K.fillEllipse(480, 205, 70, 22),
        K.fillRect(0, 482, 960, 22),
        K.fillStyle(16436245, 0.7);
      for (let p = 0; p < 16; p++)
        K.fillCircle(((p * 113) % 920) + 20, ((p * 67) % 400) + 70, 3);
    } else {
      K.fillStyle(16777215, 0.85);
      for (let p = 0; p < 40; p++)
        K.fillCircle(
          ((p * 89) % 940) + 10,
          ((p * 53) % 440) + 48,
          (p % 3) + 1.2,
        );
      K.fillStyle(15485081, 0.55),
        K.fillCircle(170, 125, 36),
        K.lineStyle(5, 16707722, 0.65),
        K.strokeEllipse(170, 125, 110, 24),
        K.fillStyle(3718648, 0.45),
        K.fillCircle(810, 115, 30);
    }
  }
  _drawClouds(X, Y, W) {
    X.fillStyle(Y, W),
      [
        { x: 240, y: 95, r: 26 },
        { x: 540, y: 72, r: 24 },
        { x: 790, y: 105, r: 28 },
      ].forEach((K) => {
        X.fillCircle(K.x - K.r * 0.7, K.y + 4, K.r * 0.75),
          X.fillCircle(K.x, K.y, K.r),
          X.fillCircle(K.x + K.r * 0.7, K.y + 4, K.r * 0.75);
      });
  }
  _createPlatforms() {
    (this.platforms = this.physics.add.staticGroup()),
      this._addPlatformBar(480, 518, 960, 44, !0),
      this.levelConfig.platforms.forEach((X) => {
        this._addPlatformBar(X.x, X.y, X.width, 22, !1);
      });
  }
  _addPlatformBar(X, Y, W, Z, K) {
    const p = this.levelConfig.platColor ?? 9584654,
      S = this.levelConfig.platTopColor ?? 2278750,
      t = `plat-${W}-${Z}-${p}-${S}-${K ? "g" : "p"}`;
    if (!this.textures.exists(t)) {
      const c = this.make.graphics({ x: 0, y: 0, add: !1 });
      c.fillStyle(p, 1),
        c.fillRoundedRect(0, 0, W, Z, K ? 0 : 10),
        c.fillStyle(S, 1),
        c.fillRoundedRect(0, 0, W, Math.min(10, Z * 0.45), K ? 0 : 8),
        c.fillStyle(16777215, 0.35),
        c.fillRect(8, 2, W - 16, 3),
        c.generateTexture(t, W, Z),
        c.destroy();
    }
    const f = this.platforms.create(X, Y, t);
    return f.refreshBody(), f;
  }
  _createTopDoor() {
    const { doorX: X, doorY: Y, targetValue: W } = this.levelConfig,
      Z = St(W);
    (this.doorContainer = this.add.container(X, Y)),
      (this.doorGraphic = this.add.graphics()),
      this.doorContainer.add(this.doorGraphic);
    const K = this.add.graphics();
    K.fillStyle(988970, 0.95),
      K.lineStyle(3, 16436245, 1),
      K.fillRoundedRect(-62, -58, 124, 34, 9),
      K.strokeRoundedRect(-62, -58, 124, 34, 9),
      this.doorContainer.add(K);
    const p = this.add
        .text(-32, -41, String(Z.hundreds), {
          fontSize: "23px",
          fontFamily: "monospace",
          fontStyle: "bold",
          color: "#f472b6",
        })
        .setOrigin(0.5),
      S = this.add
        .text(0, -41, String(Z.tens), {
          fontSize: "23px",
          fontFamily: "monospace",
          fontStyle: "bold",
          color: "#38bdf8",
        })
        .setOrigin(0.5),
      t = this.add
        .text(32, -41, String(Z.ones), {
          fontSize: "23px",
          fontFamily: "monospace",
          fontStyle: "bold",
          color: "#fde047",
        })
        .setOrigin(0.5);
    (this.doorStatusText = this.add
      .text(0, 6, ht("doorLocked"), {
        fontSize: "11px",
        fontStyle: "bold",
        color: "#fda4af",
      })
      .setOrigin(0.5)),
      this.doorContainer.add([p, S, t, this.doorStatusText]),
      (this.doorZone = this.add.zone(X, Y, 64, 56)),
      this.physics.world.enable(this.doorZone, pt.Physics.Arcade.STATIC_BODY),
      this._renderDoorState(!1);
  }
  _renderDoorState(X) {
    this.doorGraphic.clear(),
      X
        ? (this.doorGraphic.fillStyle(16436245, 0.3),
          this.doorGraphic.fillCircle(0, 0, 44),
          this.doorGraphic.fillStyle(16096779, 1),
          this.doorGraphic.fillRoundedRect(-32, -24, 64, 52, 14),
          this.doorGraphic.fillStyle(3462041, 1),
          this.doorGraphic.fillRoundedRect(-24, -18, 48, 46, 10),
          this.doorStatusText.setText(ht("doorOpen")),
          this.doorStatusText.setColor("#064e3b"))
        : (this.doorGraphic.fillStyle(4674921, 1),
          this.doorGraphic.fillRoundedRect(-32, -24, 64, 52, 14),
          this.doorGraphic.fillStyle(1976635, 1),
          this.doorGraphic.fillRoundedRect(-24, -18, 48, 46, 10),
          this.doorStatusText.setText(ht("doorLocked")),
          this.doorStatusText.setColor("#fda4af"));
  }
  _createBricks() {
    (this.bricksGroup = this.physics.add.staticGroup()),
      (this.brickObjects = []),
      [...this.levelConfig.bricks].forEach((Y) => {
        const W = this._createSingleBrick(Y.x, Y.y, Y.type, Y.caption);
        this.brickObjects.push(W);
      });
  }
  _getBrickStyle(X) {
    if (Mt[X]) return { bg: Mt[X].color, border: 16777215, label: X };
    switch (X) {
      case "×2":
      case "×3":
        return { bg: 16347926, border: 16701354, label: X };
      case "×10":
        return { bg: 889992, border: 10090212, label: "×10" };
      case "÷10":
        return { bg: 561586, border: 10875900, label: "÷10" };
      case "+1":
        return { bg: 1483594, border: 12318672, label: "+1" };
      case "-1":
        return { bg: 2450411, border: 12573694, label: "-1" };
      case "undo":
        return { bg: 6583435, border: 14870768, label: "⏪" };
      case "reset":
        return { bg: 14753096, border: 16698835, label: "000" };
      case "swap":
        return { bg: 14239471, border: 16109822, label: "⇄" };
      case "mystery":
      default:
        return { bg: 15381256, border: 16707722, label: "?" };
    }
  }
  _createSingleBrick(X, Y, W, Z = "") {
    const K = this._getBrickStyle(W),
      p = `brick-tex-${W}`;
    if (!this.textures.exists(p)) {
      const c = this.make.graphics({ x: 0, y: 0, add: !1 });
      c.fillStyle(K.bg, 1),
        c.fillRoundedRect(0, 0, 50, 44, 10),
        c.lineStyle(3, K.border, 0.95),
        c.strokeRoundedRect(2, 2, 46, 40, 9),
        c.fillStyle(16777215, 0.65),
        c.fillCircle(7, 7, 2),
        c.fillCircle(43, 7, 2),
        c.fillCircle(7, 37, 2),
        c.fillCircle(43, 37, 2),
        c.generateTexture(p, 50, 44),
        c.destroy();
    }
    const S = this.bricksGroup.create(X, Y, p);
    S.refreshBody();
    const t = this.add
      .text(X, Y - (Z ? 4 : 0), K.label, {
        fontSize: K.label.length > 2 ? "15px" : "20px",
        fontStyle: "bold",
        color: "#ffffff",
        stroke: "#0f172a",
        strokeThickness: 4,
      })
      .setOrigin(0.5);
    let f = null;
    if (Z) {
      const c = this._getLocalizedBrickCaption(W, Z);
      f = this.add
        .text(X, Y + 12, c, {
          fontSize: "9.5px",
          fontStyle: "bold",
          color: "#fef08a",
          stroke: "#0f172a",
          strokeThickness: 3,
        })
        .setOrigin(0.5);
    }
    return (
      (S.brickData = {
        type: W,
        caption: Z,
        baseX: X,
        baseY: Y,
        labelText: t,
        subCaption: f,
        lastBumpAt: 0,
      }),
      S
    );
  }
  _getLocalizedBrickCaption(X, Y = "") {
    const W = Pt() === "fr";
    return X === "mystery"
      ? W
        ? "AIDE"
        : "HELP"
      : X === "undo"
        ? W
          ? "RETOUR"
          : "UNDO"
        : X === "reset"
          ? W
            ? "ZÉRO"
            : "000"
          : Y;
  }
  _createPickups() {
    (this.pickupsGroup = this.physics.add.group({
      allowGravity: !1,
      immovable: !0,
    })),
      (this.levelConfig.initialBubbles || []).forEach((Y) => {
        this._spawnPickup(Y.x, Y.y, Y.bubble, !0);
      });
  }
  _spawnPickup(X, Y, W, Z = !0) {
    const K = zt(W, "+"),
      p = this.textures.exists(`bubble-${K.op}`)
        ? `bubble-${K.op}`
        : "bubble-+",
      S = this.pickupsGroup.create(X, Y, p);
    S.setCircle(21, 3, 3);
    const t = this.add.graphics();
    t.lineStyle(3.5, 4906624, 0.95),
      t.strokeCircle(0, 0, 25),
      t.setPosition(X, Y),
      t.setVisible(!1);
    const f = this.add
        .text(X, Y, K.label, {
          fontSize: K.label.length >= 4 ? "14px" : "17px",
          fontStyle: "bold",
          color: "#ffffff",
          stroke: "#0f172a",
          strokeThickness: 4,
        })
        .setOrigin(0.5),
      c = this.tweens.add({
        targets: [S, f, t],
        y: Y - 8,
        duration: 950 + (X % 300),
        yoyo: !0,
        repeat: -1,
        ease: "Sine.easeInOut",
      });
    return (
      (S.pickupData = {
        bubbleSpec: K,
        op: K.op,
        value: K.value,
        label: K.label,
        spawnX: X,
        spawnY: Y,
        shouldRespawn: Z,
        text: f,
        halo: t,
        floatTween: c,
        lastRejectAt: 0,
      }),
      S
    );
  }
  _createSlimes() {
    (this.slimesGroup = this.physics.add.group()),
      this.levelConfig.slimes.forEach((X) => {
        this._spawnSlime(X);
      });
  }
  _spawnSlime(X) {
    const Y = X.kind || "slime",
      W = X.penalty || 1,
      Z = this.textures.exists(Y) ? Y : "slime",
      K = this.slimesGroup.create(X.x, X.y, Z);
    K.setCollideWorldBounds(!0),
      Y === "bat" ? K.body.setAllowGravity(!1) : K.setBounce(0.2),
      K.setVelocityX(X.speed);
    const p = this.add
      .text(X.x, X.y - 22, `-${W}`, {
        fontSize: "13px",
        fontStyle: "bold",
        color: "#fda4af",
        stroke: "#0f172a",
        strokeThickness: 3.5,
      })
      .setOrigin(0.5);
    return (
      (K.slimeData = {
        ...X,
        kind: Y,
        penalty: W,
        flyY: X.flyY ?? X.y,
        nextHopAt: 0,
        badge: p,
      }),
      K
    );
  }
  _createTraps() {
    (this.spikesGroup = this.physics.add.staticGroup()),
      (this.fireballsGroup = this.physics.add.group({
        allowGravity: !1,
        immovable: !0,
      })),
      (this.levelConfig.traps || []).forEach((Y) => {
        if (Y.type === "spikes") {
          const W = this.spikesGroup.create(Y.x, Y.y, "trap-spikes");
          W.refreshBody(), (W.trapData = { penalty: Y.penalty || 2 });
        } else if (Y.type === "fireball") {
          const W = this.fireballsGroup.create(Y.x, Y.y, "trap-fireball");
          W.setCircle(14, 2, 2),
            W.setVelocityY(-(Y.speedY || 110)),
            (W.trapData = {
              minY: Y.minY ?? 180,
              maxY: Y.maxY ?? 465,
              speedY: Y.speedY || 110,
              penalty: Y.penalty || 3,
            });
        }
      });
  }
  _createPlayers() {
    this.players = [];
    const X = te(),
      Y = this._createSinglePlayer({
        id: 1,
        name: X.p1Name,
        prefix: X.p1Prefix,
        x: this.gameMode === "1p" ? 430 : 350,
        y: 452,
        counter: this.counterP1,
      });
    if ((this.players.push(Y), this.gameMode !== "1p")) {
      const W = this._createSinglePlayer({
        id: 2,
        name: X.p2Name,
        prefix: X.p2Prefix,
        x: 610,
        y: 452,
        counter: this.counterP2,
      });
      this.players.push(W);
    }
  }
  _createSinglePlayer({ id: X, name: Y, prefix: W, x: Z, y: K, counter: p }) {
    const S = this.physics.add.sprite(Z, K, ct(W, "front"));
    S.setScale(0.42),
      S.setCollideWorldBounds(!0),
      S.body.setSize(72, 142),
      S.body.setOffset(34, 22);
    const t = this.add.container(Z, K - 46),
      f = this.add.graphics(),
      c = this.add
        .text(0, 0, "000", {
          fontSize: "14px",
          fontFamily: "monospace",
          fontStyle: "bold",
          color: "#ffffff",
        })
        .setOrigin(0.5);
    return (
      t.add([f, c]),
      (S.playerData = {
        id: X,
        name: Y,
        prefix: W,
        counter: p,
        badgeContainer: t,
        badgeBg: f,
        badgeText: c,
        coyoteUntil: 0,
        invulnerableUntil: 0,
        cryingUntil: 0,
        cryTween: null,
        jumpsUsed: 0,
        facing: "front",
        enteredDoor: !1,
      }),
      S
    );
  }
  _createHud() {
    const X = this.add.graphics();
    X.fillStyle(988970, 0.82),
      X.fillRect(0, 0, 960, 44),
      (this.hudCounterText = this.add.text(16, 11, "", {
        fontSize: "17px",
        fontFamily: "monospace",
        fontStyle: "bold",
        color: "#ffffff",
      }));
    const Y = Kt(this.levelNumber, this.levelConfig.targetValue);
    (this.hudStageText = this.add
      .text(480, 528, `${Y.world} : ${Y.subtitle}`, {
        fontSize: "13px",
        fontStyle: "bold",
        color: "#fef08a",
        stroke: "#0f172a",
        strokeThickness: 4,
      })
      .setOrigin(0.5)),
      (this.hudEquationText = this.add
        .text(710, 13, ht("hudHint"), {
          fontSize: "13px",
          fontStyle: "bold",
          color: "#bae6fd",
        })
        .setOrigin(1, 0)),
      (this.hudUndoBtn = this.add
        .text(720, 12, hk("⏪ [U]"), {
          fontSize: "12.5px",
          fontStyle: "bold",
          color: "#e2e8f0",
          backgroundColor: "#1e293b",
          padding: { x: 5, y: 3 },
        })
        .setInteractive({ useHandCursor: !0 })
        .on("pointerdown", () => this._triggerQuickUndo())),
      (this.hudMuteBtn = this.add
        .text(775, 12, ut.muted ? "🔇" : "🎵", {
          fontSize: "13px",
          fontStyle: "bold",
          color: ut.muted ? "#fda4af" : "#4ade80",
          backgroundColor: "#1e293b",
          padding: { x: 5, y: 3 },
        })
        .setInteractive({ useHandCursor: !0 })),
      this.hudMuteBtn.on("pointerdown", () => {
        const S = ut.toggleMute();
        this.hudMuteBtn.setText(S ? "🔇" : "🎵"),
          this.hudMuteBtn.setColor(S ? "#fda4af" : "#4ade80"),
          this._spawnFloatingText(
            480,
            80,
            ht(S ? "audioMutedToast" : "audioOnToast"),
            "#fde047",
          );
      });
    const Z = this.add
      .text(814, 12, Pt() === "fr" ? "🇫🇷 FR" : "🇬🇧 EN", {
        fontSize: "12.5px",
        fontStyle: "bold",
        color: "#93c5fd",
        backgroundColor: "#1e293b",
        padding: { x: 5, y: 3 },
      })
      .setInteractive({ useHandCursor: !0 });
    Z.on("pointerdown", () => {
      ut.playOperatorSwitch(),
        ie(),
        Z.setText(Pt() === "fr" ? "🇫🇷 FR" : "🇬🇧 EN");
      const S = Kt(this.levelNumber, this.levelConfig.targetValue);
      this.hudStageText.setText(`${S.world} : ${S.subtitle}`),
        this._updateAllVisuals();
    }),
      (this.hudRestartBtn = this.add
        .text(874, 12, hk("↻ [R]"), {
          fontSize: "13px",
          fontStyle: "bold",
          color: "#fde047",
          backgroundColor: "#1e293b",
          padding: { x: 5, y: 3 },
        })
        .setInteractive({ useHandCursor: !0 })
        .on("pointerdown", () => this._restartLevel())),
      (this.hudMenuBtn = this.add
        .text(930, 12, "☰", {
          fontSize: "14px",
          fontStyle: "bold",
          color: "#ffffff",
          backgroundColor: "#1e293b",
          padding: { x: 7, y: 3 },
        })
        .setInteractive({ useHandCursor: !0 })
        .on("pointerdown", () => this._exitToMenu())),
      (this.hudLangBtn = Z),
      this._layoutHudForTouch(),
      this._fitHudEquationText();
  }
  // Touch screens: bigger HUD buttons (with an even bigger invisible hit area),
  // packed from the right edge, so small fingers can hit them.
  _layoutHudForTouch() {
    if (!isTouchMode()) return;
    const btns = [this.hudUndoBtn, this.hudMuteBtn, this.hudLangBtn, this.hudRestartBtn, this.hudMenuBtn];
    let x = 954;
    for (let i = btns.length - 1; i >= 0; i--) {
      const b = btns[i];
      b.setFontSize(19), b.setPadding(10, 6, 10, 6), b.setOrigin(0, 0);
      x -= b.width;
      b.setPosition(x, 2);
      // Enlarge the hit area (half the gap on each side + a bit below the HUD bar).
      b.input.hitArea.setTo(-4, -2, b.width + 8, b.height + 10);
      x -= 8;
    }
    this.hudEquationText.setX(x - 4).setY(12);
  }
  // Keep the equation / hint text between the counter (left) and the buttons (right).
  _fitHudEquationText() {
    const eq = this.hudEquationText,
      counter = this.hudCounterText,
      setText = eq.setText.bind(eq);
    eq.setText = (v) => {
      eq.setScale(1), setText(v);
      const room = eq.x - (counter.x + counter.width) - 14;
      return eq.width > room && eq.setScale(Math.max(0.5, room / eq.width)), eq;
    };
    eq.setText(eq.text);
  }
  _triggerQuickUndo() {
    const X = this.counterP1.applyBrick("undo");
    X.accepted
      ? (ut.playBrickBump(),
        this._spawnFloatingText(480, 90, X.shortLabel, "#4ade80"),
        this._updateAllVisuals())
      : ut.playReject();
  }
  _setupControls() {
    this.input.keyboard.removeAllListeners(),
      this.input.keyboard.removeAllKeys(!0),
      (this.p2JumpQueued = !1),
      (this.keys = this.input.keyboard.addKeys({
        p1Left: pt.Input.Keyboard.KeyCodes.LEFT,
        p1Right: pt.Input.Keyboard.KeyCodes.RIGHT,
        p1Jump: pt.Input.Keyboard.KeyCodes.UP,
        p1JumpAlt: pt.Input.Keyboard.KeyCodes.SPACE,
        p2LeftQ: pt.Input.Keyboard.KeyCodes.Q,
        p2LeftA: pt.Input.Keyboard.KeyCodes.A,
        p2Right: pt.Input.Keyboard.KeyCodes.D,
        p2JumpZ: pt.Input.Keyboard.KeyCodes.Z,
        p2JumpW: pt.Input.Keyboard.KeyCodes.W,
        restart: pt.Input.Keyboard.KeyCodes.R,
        menu: pt.Input.Keyboard.KeyCodes.ESC,
        mute: pt.Input.Keyboard.KeyCodes.M,
        lang: pt.Input.Keyboard.KeyCodes.L,
        undo: pt.Input.Keyboard.KeyCodes.U,
        backspace: pt.Input.Keyboard.KeyCodes.BACKSPACE,
      })),
      this.input.keyboard.on("keydown", (X) => {
        const Y = (X.key || "").toLowerCase();
        (Y === "z" || Y === "w" || X.code === "KeyW" || X.code === "KeyZ") &&
          (this.p2JumpQueued = !0);
      }),
      this.keys.restart.on("down", () => {
        this._restartLevel();
      }),
      this.keys.menu.on("down", () => {
        this._exitToMenu();
      }),
      this.keys.mute.on("down", () => {
        const X = ut.toggleMute();
        this.hudMuteBtn &&
          (this.hudMuteBtn.setText(X ? "🔇" : "🎵"),
          this.hudMuteBtn.setColor(X ? "#fda4af" : "#4ade80")),
          this._spawnFloatingText(
            480,
            80,
            ht(X ? "audioMutedToast" : "audioOnToast"),
            "#fde047",
          );
      }),
      this.keys.lang.on("down", () => {
        ut.playOperatorSwitch(), ie();
        const X = Kt(this.levelNumber, this.levelConfig.targetValue);
        this.hudStageText.setText(`${X.world} : ${X.subtitle}`),
          this._updateAllVisuals();
      }),
      this.keys.undo.on("down", () => this._triggerQuickUndo()),
      this.keys.backspace.on("down", () => this._triggerQuickUndo());
  }
  _setupCollisions() {
    this.physics.add.collider(this.players, this.platforms),
      this.physics.add.collider(this.slimesGroup, this.platforms),
      this.physics.add.collider(this.players, this.bricksGroup, (X, Y) => {
        this._handleBrickCollision(X, Y);
      }),
      this.physics.add.overlap(this.players, this.pickupsGroup, (X, Y) => {
        this._handlePickupOverlap(X, Y);
      }),
      this.physics.add.overlap(this.players, this.slimesGroup, (X, Y) => {
        this._handleSlimeOverlap(X, Y);
      }),
      this.physics.add.overlap(this.players, this.spikesGroup, (X, Y) => {
        var W;
        this._handleTrapHazard(
          X,
          Y.x,
          ((W = Y.trapData) == null ? void 0 : W.penalty) || 2,
          !0,
        );
      }),
      this.physics.add.overlap(this.players, this.fireballsGroup, (X, Y) => {
        var W;
        this._handleTrapHazard(
          X,
          Y.x,
          ((W = Y.trapData) == null ? void 0 : W.penalty) || 3,
          !1,
        );
      }),
      this.physics.add.overlap(this.players, this.doorZone, (X) => {
        this._handleDoorOverlap(X);
      });
  }
  _handleBrickCollision(X, Y) {
    var c;
    const W = Y.brickData;
    if (
      !W ||
      !(
        X.body.touching.up ||
        X.body.blocked.up ||
        (X.body.center.y > Y.body.center.y + 8 &&
          Math.abs(X.body.center.x - Y.body.center.x) < 40)
      )
    )
      return;
    const K = this.time.now;
    if (K - W.lastBumpAt < 280) return;
    W.lastBumpAt = K;
    const p = W.subCaption ? [Y, W.labelText, W.subCaption] : [Y, W.labelText];
    this.tweens.add({
      targets: p,
      y: "-=10",
      duration: 85,
      yoyo: !0,
      ease: "Quad.easeOut",
      onComplete: () => {
        (Y.y = W.baseY),
          (W.labelText.y = W.baseY - (W.subCaption ? 4 : 0)),
          W.subCaption && (W.subCaption.y = W.baseY + 12);
      },
    });
    const t = X.playerData.counter;
    if (W.type === "mystery") {
      ut.playBrickBump();
      const a = this.pickupsGroup
          .getChildren()
          .filter((i) => i.active && i.pickupData),
        n = a.map((i) => i.pickupData.label),
        r = t.getHintSolution(n, this.levelConfig.bubblePool),
        e = new Set(n);
      let s = 0;
      for (const i of r.steps)
        if (!e.has(i.label) && a.length > 0) {
          const h = a[s % a.length];
          this._morphBubblePickup(h, i.label), e.add(i.label), (s += 1);
        }
      const o = ht("suggestedSolution");
      this._spawnHintBanner(o, r.formula),
        this.hudEquationText.setText(`💡 ${r.formula}`),
        this._burstParticles(W.baseX, W.baseY - 16, 16638023, 14),
        this._updateAllVisuals(!0);
      return;
    }
    if (W.type === "swap" && this.gameMode === "2p-versus") {
      ut.playOperatorSwitch();
      const a = this.counterP1.currentValue;
      (this.counterP1.currentValue = this.counterP2.currentValue),
        (this.counterP2.currentValue = a),
        this._spawnFloatingText(
          W.baseX,
          W.baseY - 28,
          ht("numbersSwappedToast"),
          "#f5d0fe",
        ),
        this._updateAllVisuals();
      return;
    }
    const f = t.applyBrick(W.type);
    if (f.kind === "operator") {
      ut.playOperatorSwitch();
      const a = Mt[f.operator].hex;
      this._spawnFloatingText(W.baseX, W.baseY - 28, f.shortLabel, a),
        this._burstParticles(W.baseX, W.baseY, Mt[f.operator].color);
    } else
      f.accepted
        ? (ut.playBrickBump(),
          this._spawnFloatingText(
            W.baseX,
            W.baseY - 28,
            f.shortLabel,
            "#4ade80",
          ),
          this.hudEquationText.setText(
            ((c = t.history[t.history.length - 1]) == null
              ? void 0
              : c.expression) || f.shortLabel,
          ),
          this._burstParticles(W.baseX, W.baseY, 4906624))
        : (ut.playReject(),
          this._spawnFloatingText(
            W.baseX,
            W.baseY - 28,
            f.shortLabel,
            "#fda4af",
          ));
    this._updateAllVisuals();
  }
  _handlePickupOverlap(X, Y) {
    var e, s;
    if (!Y.active || this.levelCompleted) return;
    const W = Y.pickupData,
      p = X.playerData.counter.applyBubble(W.bubbleSpec);
    if (!p.accepted) {
      const o = this.time.now;
      o - W.lastRejectAt > 650 &&
        ((W.lastRejectAt = o),
        ut.playReject(),
        this._spawnFloatingText(Y.x, Y.y - 24, p.message, "#fda4af"));
      return;
    }
    ut.playPickup();
    const S = ((e = Mt[p.operator]) == null ? void 0 : e.hex) || "#fde047";
    this._spawnFloatingText(
      Y.x,
      Y.y - 20,
      `${p.shortLabel} → ${St(p.value).formatted}`,
      S,
    ),
      this._burstParticles(
        Y.x,
        Y.y,
        ((s = Mt[p.operator]) == null ? void 0 : s.color) || 16638023,
      ),
      this.hudEquationText.setText(p.expression);
    const {
      spawnX: t,
      spawnY: f,
      shouldRespawn: c,
      text: a,
      halo: n,
      floatTween: r,
    } = W;
    if ((r.stop(), a.destroy(), n.destroy(), Y.destroy(), c)) {
      const o = X.x,
        i = X.y;
      this.time.delayedCall(2600, () => {
        if (!this.scene.isActive()) return;
        const h = this._pickDistantFreeSlot(t, f, o, i),
          l = this._pickVariedPoolBubble(W.label);
        this._spawnPickup(h.x, h.y, l, !0), this._updateAllVisuals();
      });
    }
    this._updateAllVisuals();
  }
  _pickDistantFreeSlot(X, Y, W, Z) {
    const K =
        this.levelConfig.allBubbleSlots || this.levelConfig.bubbleSlots || [],
      p = this.pickupsGroup.getChildren().filter((f) => f.active),
      S = K.filter((f) => {
        const c = p.some((n) => Math.hypot(n.x - f.x, n.y - f.y) < 42),
          a = Math.hypot(f.x - X, f.y - Y) < 35;
        return !c && !a;
      });
    if (S.length === 0) return { x: X, y: Y };
    S.sort((f, c) => {
      const a = Math.hypot(f.x - W, f.y - Z);
      return Math.hypot(c.x - W, c.y - Z) - a;
    });
    const t = S.slice(0, Math.min(2, S.length));
    return t[Math.floor(Math.random() * t.length)];
  }
  _pickVariedPoolBubble(X) {
    const Y = new Set();
    this.pickupsGroup.getChildren().forEach((n) => {
      var r;
      n.active &&
        (r = n.pickupData) != null &&
        r.label &&
        Y.add(n.pickupData.label);
    });
    const W = this.levelConfig.bubblePool || [
        "+9",
        "+7",
        "+5",
        "+3",
        "+2",
        "+1",
        "-3",
        "-2",
        "-1",
      ],
      Z = this.counterP1.currentValue,
      K = this.counterP1.targetValue;
    if (Z > K) {
      const n = this.counterP1.getSmartOvershootBubble(W);
      if (n && !Y.has(n.label)) return n.label;
      const r = [];
      for (let o = 2; o <= 10; o++)
        Z % o === 0 && Z / o >= Math.floor(K * 0.35) && r.push(`÷${o}`);
      const e = W.filter((o) => o.startsWith("-") && o !== X),
        s = [...r, ...e];
      if (s.length > 0) return s[Math.floor(Math.random() * s.length)];
    }
    const p = ["+1", "+2", "-1", "-2"].filter((n) => W.includes(n));
    if (!p.some((n) => Y.has(n)) && p.length > 0)
      return p[Math.floor(Math.random() * p.length)];
    const t = K - Z,
      f = t > 0 ? `+${t}` : t < 0 ? `${t}` : "",
      c = W.filter((n) => {
        if (n === X || n === f || (Z < K && n.startsWith("÷"))) return !1;
        if (n.startsWith("×")) {
          const r = Number(n.slice(1));
          if (Z === 0 || Z * r > this.counterP1.getSmartMaxLimit()) return !1;
        }
        return !0;
      }),
      a = c.length > 0 ? c : W;
    return a[Math.floor(Math.random() * a.length)];
  }
  _morphBubblePickup(X, Y) {
    if (!(X != null && X.active) || !X.pickupData) return;
    const W = zt(Y, "+"),
      Z = X.pickupData;
    if (Z.label === W.label) return;
    const K = this.textures.exists(`bubble-${W.op}`)
      ? `bubble-${W.op}`
      : "bubble-+";
    X.setTexture(K),
      (Z.bubbleSpec = W),
      (Z.op = W.op),
      (Z.value = W.value),
      (Z.label = W.label),
      Z.text.setText(W.label),
      Z.text.setFontSize(W.label.length >= 4 ? "14px" : "17px");
  }
  _syncBubblesForOvershootState() {
    if (this.gameMode === "2p-versus") return;
    const X = this.counterP1.currentValue,
      Y = this.counterP1.targetValue,
      W = this.pickupsGroup
        .getChildren()
        .filter((K) => K.active && K.pickupData);
    if (W.length === 0) return;
    const Z = this.levelConfig.bubblePool || [
      "+9",
      "+7",
      "+5",
      "+3",
      "+2",
      "+1",
      "-3",
      "-2",
      "-1",
    ];
    if (X > Y) {
      const K = this.counterP1.getSmartOvershootBubble(Z);
      let p = W.some((f) => f.pickupData.label === K.label);
      const S = Z.filter((f) => f.startsWith("-"));
      let t = 0;
      W.forEach((f, c) => {
        const { op: a, value: n } = f.pickupData;
        a === "+" && (t += 1);
        const r = a === "÷" && X % n !== 0,
          e = a === "+" && t > 2;
        if (a === "×" || r || e)
          if (!p && K) this._morphBubblePickup(f, K.label), (p = !0);
          else {
            const s = S[c % S.length] || `-${(c % 5) + 2}`;
            this._morphBubblePickup(f, s);
          }
      });
    } else if (X < Y) {
      const K = Z.filter((S) => S.startsWith("+"));
      let p = 0;
      W.forEach((S, t) => {
        const { op: f, value: c } = S.pickupData,
          a =
            f === "×" && (X === 0 || X * c > this.counterP1.getSmartMaxLimit());
        if (
          ((f === "-" || f === "÷") && (p += 1),
          f === "÷" || (f === "-" && p > 2) || a)
        ) {
          const n = K[t % K.length] || `+${(t % 6) + 2}`;
          this._morphBubblePickup(S, n);
        }
      });
    }
  }
  _handleSlimeOverlap(X, Y) {
    if (!Y.active || this.levelCompleted) return;
    const W = X.playerData,
      Z = Y.slimeData;
    if (X.body.velocity.y > 0 && X.body.bottom <= Y.body.top + 18) {
      ut.playSlimeStomp(),
        X.setVelocityY(-410),
        this._burstParticles(Y.x, Y.y, 12616956),
        this._spawnFloatingText(
          Y.x,
          Y.y - 20,
          ht("slimeStompToast"),
          "#fde047",
        );
      const p = W.counter.getSmartBubble(this.levelConfig.bubblePool).label,
        S = this._pickDistantFreeSlot(Y.x, Y.y, X.x, X.y);
      this._spawnPickup(S.x, S.y, p, !1),
        Z.badge.destroy(),
        Y.destroy(),
        this.time.delayedCall(5e3, () => {
          this.scene.isActive() && this._spawnSlime(Z);
        });
      return;
    }
    this._handleTrapHazard(X, Y.x, Z.penalty || 1, !1);
  }
  _handleTrapHazard(X, Y, W = 1, Z = !1) {
    if (this.levelCompleted) return;
    const K = X.playerData,
      p = this.time.now;
    if (p < K.invulnerableUntil) return;
    (K.invulnerableUntil = p + 1650),
      (K.cryingUntil = p + 1650),
      ut.playFunnyCry(),
      K.counter.applySlimePenalty(W),
      this._spawnFloatingText(
        X.x,
        X.y - 58,
        ht("slimePenaltyToast", { penalty: W }),
        "#fb7185",
      ),
      X.setTexture(ct(K.prefix, "ouch")),
      X.setFlipX(!1),
      K.cryTween && K.cryTween.stop(),
      X.setScale(0.58, 0.62),
      X.setAngle(-10),
      (K.cryTween = this.tweens.add({
        targets: X,
        scaleX: 0.5,
        scaleY: 0.54,
        angle: 10,
        duration: 150,
        yoyo: !0,
        repeat: 9,
        ease: "Sine.easeInOut",
        onComplete: () => {
          X.setScale(0.42), X.setAngle(0);
        },
      })),
      this._burstTears(X);
    const S = X.x < Y ? -1 : 1;
    X.setVelocityX(S * 210),
      X.setVelocityY(Z ? -420 : -250),
      this._updateAllVisuals();
  }
  _burstTears(X) {
    for (let Y = 0; Y < 3; Y++)
      this.time.delayedCall(Y * 320, () => {
        if (!this.scene.isActive() || !X.active) return;
        const W = this.add.particles(X.x - 16, X.y - 16, "tear", {
          speedX: { min: -160, max: -65 },
          speedY: { min: -180, max: -70 },
          gravityY: 500,
          scale: { start: 0.95, end: 0.25 },
          lifespan: 620,
          emitting: !1,
        });
        W.explode(5);
        const Z = this.add.particles(X.x + 16, X.y - 16, "tear", {
          speedX: { min: 65, max: 160 },
          speedY: { min: -180, max: -70 },
          gravityY: 500,
          scale: { start: 0.95, end: 0.25 },
          lifespan: 620,
          emitting: !1,
        });
        Z.explode(5),
          this.time.delayedCall(700, () => {
            W.destroy(), Z.destroy();
          });
      });
  }
  _handleDoorOverlap(X) {
    if (this.levelCompleted) return;
    const Y = X.playerData;
    if (Y.enteredDoor || !Y.counter.isDoorUnlocked()) return;
    if (
      ((Y.enteredDoor = !0),
      this.gameMode === "2p-coop" &&
        !this.players.every((t) => t.playerData.enteredDoor))
    ) {
      ut.playPickup(),
        this._burstParticles(
          this.levelConfig.doorX,
          this.levelConfig.doorY,
          3462041,
          16,
        ),
        (X.body.enable = !1),
        X.setVelocity(0, 0),
        X.setVisible(!1),
        Y.badgeContainer.setVisible(!1);
      const t = Y.id === 1 ? ht("p2Name") : ht("p1Name");
      this._spawnFloatingText(
        this.levelConfig.doorX,
        this.levelConfig.doorY - 70,
        ht("coopFirstInToast", { name: Y.name, other: t }),
        "#34d399",
      ),
        this._updateAllVisuals();
      return;
    }
    (this.levelCompleted = !0),
      Yt("level_end", this),
      (X.body.enable = !1),
      X.setVelocity(0, 0),
      X.setVisible(!1),
      Y.badgeContainer.setVisible(!1),
      ut.playVictory(),
      this._burstParticles(
        this.levelConfig.doorX,
        this.levelConfig.doorY,
        16436245,
        28,
      );
    const W = Math.max(1, Math.round((this.time.now - this.startTimeMs) / 1e3)),
      Z = Y.counter.stepsCount,
      K = this.levelConfig.parSteps || 4,
      p = Z <= K ? 3 : Z <= K + 2 ? 2 : 1;
    this.victoryTimer = this.time.delayedCall(450, () => {
      this.scene.start("VictoryScene", {
        mode: this.gameMode,
        level: this.levelNumber,
        winnerName: this.gameMode === "2p-versus" ? Y.name : ht("teamName"),
        targetValue: Y.counter.targetValue,
        stepsCount: Z,
        parSteps: K,
        stars: p,
        elapsedSec: W,
        history: Y.counter.history,
      });
    });
  }
  _updateAllVisuals(X = !1) {
    X || this._syncBubblesForOvershootState();
    const Y = St(this.levelConfig.targetValue).formatted;
    if (this.gameMode === "2p-versus") {
      const K = this.counterP1.getFormattedCurrent().formatted,
        p = this.counterP2.getFormattedCurrent().formatted;
      this.hudCounterText.setText(ht("hudVersus", { p1: K, p2: p, target: Y }));
    } else {
      const K = this.counterP1.getFormattedCurrent().formatted;
      this.hudCounterText.setText(ht("hudCoop", { cur: K, target: Y }));
    }
    this.brickObjects &&
      this.brickObjects.forEach((K) => {
        var p;
        (p = K == null ? void 0 : K.brickData) != null &&
          p.subCaption &&
          K.brickData.subCaption.setText(
            this._getLocalizedBrickCaption(
              K.brickData.type,
              K.brickData.caption,
            ),
          );
      });
    const W =
      this.counterP1.isDoorUnlocked() ||
      (this.gameMode === "2p-versus" && this.counterP2.isDoorUnlocked());
    this.gameMode === "2p-coop" &&
      !W &&
      this.players &&
      this.players.forEach((K) => {
        K.playerData.enteredDoor &&
          ((K.playerData.enteredDoor = !1),
          K.setPosition(this.levelConfig.doorX, this.levelConfig.doorY + 6),
          (K.body.enable = !0),
          K.setVisible(!0),
          K.playerData.badgeContainer.setVisible(!0),
          this._spawnFloatingText(
            this.levelConfig.doorX,
            this.levelConfig.doorY - 70,
            ht("coopDoorRelockedToast"),
            "#fda4af",
          ));
      }),
      W &&
        !this.wasDoorUnlocked &&
        (ut.playDoorUnlock(),
        this._burstParticles(
          this.levelConfig.doorX,
          this.levelConfig.doorY,
          16436245,
          18,
        ),
        this._spawnFloatingText(
          this.levelConfig.doorX,
          this.levelConfig.doorY - 70,
          ht("doorUnlockedToast"),
          "#fde047",
        )),
      (this.wasDoorUnlocked = W),
      this._renderDoorState(W),
      this.gameMode === "2p-coop" &&
        W &&
        this.players &&
        this.players.filter((p) => p.playerData.enteredDoor).length === 1 &&
        this.doorStatusText.setText(ht("doorHalfIn")),
      this.players.forEach((K) => {
        const p = K.playerData,
          S = p.counter,
          t = Mt[S.activeOperator] || Mt["+"],
          f = S.getFormattedCurrent().formatted;
        p.badgeBg.clear(),
          p.badgeBg.fillStyle(S.isDoorUnlocked() ? 15381256 : t.color, 0.95),
          p.badgeBg.lineStyle(2, 16777215, 0.9),
          p.badgeBg.fillRoundedRect(-28, -12, 56, 24, 8),
          p.badgeBg.strokeRoundedRect(-28, -12, 56, 24, 8),
          p.badgeText.setText(f);
      });
    const Z = this.counterP1;
    this.pickupsGroup.getChildren().forEach((K) => {
      if (!K.active || !K.pickupData) return;
      const { op: p, value: S, halo: t } = K.pickupData,
        f =
          p === "÷" &&
          (Z.isDivisibleBy(S) ||
            (this.gameMode === "2p-versus" && this.counterP2.isDivisibleBy(S)));
      t.setVisible(f);
    });
  }
  _spawnHintBanner(X, Y) {
    this.activeHintBanner &&
      (this.activeHintBanner.destroy(), (this.activeHintBanner = null));
    const W = this.add.container(480, 195).setDepth(200),
      Z = this.add
        .text(0, -16, X, {
          fontSize: "13px",
          fontStyle: "bold",
          color: "#38bdf8",
        })
        .setOrigin(0.5),
      K = this.add
        .text(0, 10, Y, {
          fontSize: "26px",
          fontStyle: "bold",
          color: "#fde047",
          stroke: "#000000",
          strokeThickness: 4,
        })
        .setOrigin(0.5),
      p = Math.max(320, K.width + 48, Z.width + 48),
      S = 68,
      t = this.add.graphics();
    t.fillStyle(988970, 0.96),
      t.lineStyle(3.5, 16436245, 1),
      t.fillRoundedRect(-p / 2, -S / 2, p, S, 14),
      t.strokeRoundedRect(-p / 2, -S / 2, p, S, 14),
      W.add([t, Z, K]),
      (this.activeHintBanner = W),
      W.setScale(0.75),
      this.tweens.add({
        targets: W,
        scaleX: 1,
        scaleY: 1,
        duration: 240,
        ease: "Back.easeOut",
      }),
      this.time.delayedCall(5e3, () => {
        !this.scene.isActive() ||
          !W.active ||
          this.tweens.add({
            targets: W,
            alpha: 0,
            duration: 400,
            onComplete: () => {
              this.activeHintBanner === W && (this.activeHintBanner = null),
                W.destroy();
            },
          });
      });
  }
  _spawnFloatingText(X, Y, W, Z = "#ffffff") {
    const K = this.add
      .text(X, Y, W, {
        fontSize: "16px",
        fontStyle: "bold",
        color: Z,
        stroke: "#0f172a",
        strokeThickness: 4,
      })
      .setOrigin(0.5);
    this.tweens.add({
      targets: K,
      y: Y - 34,
      alpha: 0,
      duration: 900,
      ease: "Cubic.easeOut",
      onComplete: () => K.destroy(),
    });
  }
  _burstParticles(X, Y, W = 16777215, Z = 10) {
    const K = this.add.particles(X, Y, "sparkle", {
      speed: { min: 50, max: 170 },
      scale: { start: 0.7, end: 0 },
      lifespan: 420,
      tint: W,
      emitting: !1,
    });
    K.explode(Z), this.time.delayedCall(500, () => K.destroy());
  }
  update(X) {
    if (this.levelCompleted) return;
    const tJ1 = consumeTouchJump("p1"),
      tJ2 = consumeTouchJump("p2"),
      Y = pt.Input.Keyboard.JustDown(this.keys.p1Jump) || tJ1,
      W = pt.Input.Keyboard.JustDown(this.keys.p1JumpAlt),
      Z =
        this.p2JumpQueued ||
        pt.Input.Keyboard.JustDown(this.keys.p2JumpZ) ||
        pt.Input.Keyboard.JustDown(this.keys.p2JumpW) ||
        tJ2;
    this.p2JumpQueued = !1;
    const K = this.keys.p2LeftQ.isDown || this.keys.p2LeftA.isDown || touchState.p2.left,
      p = this.keys.p2Right.isDown || touchState.p2.right;
    this.players.forEach((S) => {
      const t = S.playerData;
      if (t.enteredDoor) return;
      const f = S.body.blocked.down || S.body.touching.down;
      f && ((t.coyoteUntil = X + 120), (t.jumpsUsed = 0));
      let c = !1,
        a = !1,
        n = !1;
      t.id === 1
        ? ((c = this.keys.p1Left.isDown || touchState.p1.left || (this.gameMode === "1p" && K)),
          (a = this.keys.p1Right.isDown || touchState.p1.right || (this.gameMode === "1p" && p)),
          (n = Y || (this.gameMode === "1p" && (W || Z))))
        : ((c = K), (a = p), (n = Z));
      const r = 250,
        e = Math.floor(X / 130) % 2 === 1,
        s = X < t.cryingUntil;
      if (
        (c && !a
          ? (S.setVelocityX(-r),
            (t.facing = "left"),
            s
              ? (S.setTexture(ct(t.prefix, "ouch")), S.setFlipX(!1))
              : !f || e
                ? (S.setTexture(ct(t.prefix, "walk")), S.setFlipX(!0))
                : (S.setTexture(ct(t.prefix, "left")), S.setFlipX(!1)))
          : a && !c
            ? (S.setVelocityX(r),
              (t.facing = "right"),
              s
                ? (S.setTexture(ct(t.prefix, "ouch")), S.setFlipX(!1))
                : !f || e
                  ? (S.setTexture(ct(t.prefix, "walk")), S.setFlipX(!1))
                  : (S.setTexture(ct(t.prefix, "right")), S.setFlipX(!1)))
            : (S.setVelocityX(S.body.velocity.x * 0.78),
              Math.abs(S.body.velocity.x) < 8 && S.setVelocityX(0),
              s
                ? (S.setTexture(ct(t.prefix, "ouch")), S.setFlipX(!1))
                : f && (S.setTexture(ct(t.prefix, "front")), S.setFlipX(!1))),
        n && (X <= t.coyoteUntil || t.jumpsUsed < 2))
      ) {
        const o = X > t.coyoteUntil && t.jumpsUsed >= 1;
        S.setVelocityY(-485),
          (t.coyoteUntil = 0),
          (t.jumpsUsed += 1),
          ut.playJump(),
          o && this._burstParticles(S.x, S.y + 24, 12248829, 8);
      }
      t.badgeContainer.setPosition(S.x, S.y - (s ? 56 : 46));
    }),
      this.slimesGroup.getChildren().forEach((S) => {
        if (!S.active || !S.slimeData) return;
        const t = S.slimeData;
        S.x <= t.minX
          ? (S.setVelocityX(Math.abs(t.speed)), S.setFlipX(!1))
          : S.x >= t.maxX &&
            (S.setVelocityX(-Math.abs(t.speed)), S.setFlipX(!0));
        const f = S.body.blocked.down || S.body.touching.down;
        t.kind === "bat"
          ? (S.y = t.flyY + Math.sin(X / 240 + t.minX) * 20)
          : t.kind === "frog" && f && X > t.nextHopAt
            ? (S.setVelocityY(-310), (t.nextHopAt = X + 1450))
            : t.kind === "crab" &&
              f &&
              X > t.nextHopAt &&
              (S.setVelocityY(-165), (t.nextHopAt = X + 950)),
          t.badge.setPosition(S.x, S.y - 22);
      }),
      this.fireballsGroup &&
        this.fireballsGroup.getChildren().forEach((S) => {
          if (!S.active || !S.trapData) return;
          const t = S.trapData;
          S.y <= t.minY
            ? S.setVelocityY(Math.abs(t.speedY))
            : S.y >= t.maxY && S.setVelocityY(-Math.abs(t.speedY));
        });
  }
}
const Vt = [
  {
    id: 1,
    fr: "Danse #1 : Le Twist Turbo !",
    en: "Dance #1: The Turbo Twist!",
  },
  {
    id: 2,
    fr: "Danse #2 : Le Moonwalk Cosmique !",
    en: "Dance #2: Cosmic Moonwalk!",
  },
  {
    id: 3,
    fr: "Danse #3 : La Toupie sur la Tête (Headspin) !",
    en: "Dance #3: Big-Head Breakdance Spin!",
  },
  {
    id: 4,
    fr: "Danse #4 : Le Kangourou Disco (Saltos) !",
    en: "Dance #4: Disco Kangaroo Flips!",
  },
  {
    id: 5,
    fr: "Danse #5 : La Salsa des Grosses Têtes !",
    en: "Dance #5: Bobblehead Salsa!",
  },
  {
    id: 6,
    fr: "Danse #6 : Le Robot Électrique !",
    en: "Dance #6: Electric Robot!",
  },
  {
    id: 7,
    fr: "Danse #7 : Le Ressort Gélatine !",
    en: "Dance #7: Jelly Boing-Boing!",
  },
  {
    id: 8,
    fr: "Danse #8 : La Roue Acrobatique !",
    en: "Dance #8: Cartwheel Fiesta!",
  },
  {
    id: 9,
    fr: "Danse #9 : Le Pogo Rock’n’Roll !",
    en: "Dance #9: Rock’n’Roll Pogo!",
  },
  {
    id: 10,
    fr: "Danse #10 : La Pirouette Royale !",
    en: "Dance #10: Royal Pirouette!",
  },
];
class He extends pt.Scene {
  constructor() {
    super("VictoryScene");
  }
  init(X) {
    (this.gameMode = (X == null ? void 0 : X.mode) || "1p"),
      (this.levelNumber = (X == null ? void 0 : X.level) || 1),
      (this.winnerName = (X == null ? void 0 : X.winnerName) || ht("teamName")),
      (this.targetValue = (X == null ? void 0 : X.targetValue) ?? 12),
      (this.stepsCount = (X == null ? void 0 : X.stepsCount) ?? 1),
      (this.parSteps = (X == null ? void 0 : X.parSteps) ?? 4),
      (this.stars = (X == null ? void 0 : X.stars) ?? 3),
      (this.elapsedSec = (X == null ? void 0 : X.elapsedSec) ?? 10),
      (this.history = (X == null ? void 0 : X.history) || []),
      (this.currentDanceIndex =
        typeof (X == null ? void 0 : X.danceIndex) == "number"
          ? X.danceIndex
          : Math.floor(Math.random() * Vt.length)),
      (this.newlyUnlockedSkin = Fe()),
      this.newlyUnlockedSkin &&
        (Qt("p1", this.newlyUnlockedSkin.id),
        Qt("p2", this.newlyUnlockedSkin.id));
  }
  create() {
    ut.startMusic("victory");
    const X = this.add.graphics();
    X.fillGradientStyle(988970, 988970, 1973067, 1973067, 1),
      X.fillRect(0, 0, 960, 540);
    const Y = this.add.graphics();
    Y.fillStyle(1976635, 0.95),
      Y.lineStyle(4, 16436245, 1),
      Y.fillRoundedRect(175, 36, 610, 468, 20),
      Y.strokeRoundedRect(175, 36, 610, 468, 20);
    const W = this.add.graphics();
    W.fillStyle(16707722, 0.14),
      W.fillEllipse(88, 340, 145, 290),
      W.fillEllipse(872, 340, 145, 290),
      W.fillStyle(16436245, 0.35),
      W.fillEllipse(88, 465, 130, 32),
      W.fillEllipse(872, 465, 130, 32);
    const Z = St(this.targetValue).formatted,
      K =
        this.gameMode === "2p-versus"
          ? ht("victoryVersusTitle", { winner: this.winnerName, target: Z })
          : ht("victoryCoopTitle", { target: Z });
    this.add
      .text(480, 78, K, {
        fontSize: "29px",
        fontStyle: "bold",
        color: "#fde047",
        stroke: "#0f172a",
        strokeThickness: 6,
      })
      .setOrigin(0.5);
    const p = "★".repeat(this.stars) + "☆".repeat(3 - this.stars);
    this.add
      .text(480, 122, p, { fontSize: "38px", color: "#facc15" })
      .setOrigin(0.5),
      this.add
        .text(
          480,
          160,
          ht("victoryStats", {
            level: this.levelNumber,
            steps: this.stepsCount,
            par: this.parSteps,
            sec: this.elapsedSec,
          }),
          { fontSize: "14.5px", fontStyle: "bold", color: "#bae6fd" },
        )
        .setOrigin(0.5);
    const S = this.add.graphics();
    S.fillStyle(8141549, 0.9),
      S.lineStyle(2, 16707722, 0.9),
      S.fillRoundedRect(230, 182, 500, 34, 10),
      S.strokeRoundedRect(230, 182, 500, 34, 10),
      (this.danceTitleText = this.add
        .text(480, 199, "", {
          fontSize: "15px",
          fontStyle: "bold",
          color: "#fef08a",
        })
        .setOrigin(0.5));
    const t = this.add.graphics();
    t.fillStyle(988970, 0.85),
      t.fillRoundedRect(215, 224, 530, 134, 12),
      this.add
        .text(480, 242, ht("victoryEquationsHeader"), {
          fontSize: "13px",
          fontStyle: "bold",
          color: "#4ade80",
        })
        .setOrigin(0.5);
    const f = this.history
        .slice(-5)
        .map((n, r) => `${r + 1}.  ${n.expression}`),
      c =
        f.length > 0
          ? f.join(`
`)
          : ht("victoryReachedFallback", { target: Z });
    if (
      (this.add
        .text(480, 298, c, {
          fontSize: "14px",
          fontFamily: "monospace",
          fontStyle: "bold",
          color: "#f8fafc",
          align: "center",
          lineSpacing: 4,
        })
        .setOrigin(0.5),
      this.newlyUnlockedSkin)
    ) {
      const n = this.add.graphics();
      n.fillStyle(1409085, 0.95),
        n.lineStyle(2, 16638023, 1),
        n.fillRoundedRect(215, 364, 530, 28, 8),
        n.strokeRoundedRect(215, 364, 530, 28, 8);
      const r =
        Pt() === "fr" ? this.newlyUnlockedSkin.fr : this.newlyUnlockedSkin.en;
      this.add
        .text(
          480,
          378,
          ht("skinUnlockedBanner", {
            icon: this.newlyUnlockedSkin.icon,
            name: r,
          }),
          { fontSize: "13px", fontStyle: "bold", color: "#fef08a" },
        )
        .setOrigin(0.5);
    }
    (this.dancer1 = this.add.image(88, 390, ct("p1", "front")).setScale(0.75)),
      (this.dancer2 = this.add
        .image(872, 390, ct("p2", "front"))
        .setScale(0.75)),
      (this.danceTweens = []),
      (this.danceTimer = null),
      this._startDance(this.currentDanceIndex),
      this._createActionButton(
        285,
        412,
        180,
        42,
        2278750,
        ht("nextStageBtn"),
        () => {
          this._goNextStage();
        },
      );
    const a = ht("nextDanceBtn");
    this._createActionButton(480, 412, 185, 42, 14239471, a, () => {
      this._triggerAnotherRandomDance();
    }),
      this._createActionButton(
        670,
        412,
        165,
        42,
        3900150,
        ht("replayBtn"),
        () => {
          ut.playOperatorSwitch(),
            this.scene.start("GameScene", {
              mode: this.gameMode,
              level: this.levelNumber,
            });
        },
      ),
      this._createActionButton(
        480,
        466,
        170,
        36,
        6583435,
        ht("menuBtn"),
        () => {
          this.scene.start("MenuScene");
        },
      ),
      this.input.keyboard.removeAllListeners(),
      this.input.keyboard.once("keydown-SPACE", () => this._goNextStage()),
      this.input.keyboard.once("keydown-ENTER", () => this._goNextStage()),
      this.input.keyboard.once("keydown-R", () => {
        this.scene.start("GameScene", {
          mode: this.gameMode,
          level: this.levelNumber,
        });
      }),
      this.input.keyboard.once("keydown-ESC", () => {
        this.scene.start("MenuScene");
      }),
      this.input.keyboard.on("keydown-D", () => {
        this._triggerAnotherRandomDance();
      }),
      this.input.keyboard.on("keydown-M", () => {
        ut.toggleMute();
      });
  }
  _triggerAnotherRandomDance() {
    ut.playPickup();
    let X = Math.floor(Math.random() * Vt.length);
    X === this.currentDanceIndex && (X = (X + 1) % Vt.length),
      (this.currentDanceIndex = X),
      this._startDance(this.currentDanceIndex);
  }
  _startDance(X) {
    this.danceTweens.forEach((S) => S.stop()),
      (this.danceTweens = []),
      this.danceTimer && (this.danceTimer.remove(), (this.danceTimer = null));
    const Y = Vt[X % Vt.length],
      W = Pt();
    this.danceTitleText.setText(`🕺 ${W === "fr" ? Y.fr : Y.en}`);
    const Z = this.dancer1,
      K = this.dancer2;
    [
      { sprite: Z, baseX: 88, prefix: "p1" },
      { sprite: K, baseX: 872, prefix: "p2" },
    ].forEach(({ sprite: S, baseX: t, prefix: f }) => {
      S.setPosition(t, 390),
        S.setScale(0.75),
        S.setAngle(0),
        S.setFlipX(!1),
        S.setTexture(ct(f, "front"));
    }),
      [88, 872].forEach((S) => {
        const t = this.add.particles(S, 390, "sparkle", {
          speed: { min: 40, max: 140 },
          scale: { start: 0.7, end: 0 },
          lifespan: 450,
          tint: 16436245,
          emitting: !1,
        });
        t.explode(12), this.time.delayedCall(500, () => t.destroy());
      });
    const p = Y.id;
    if (p === 1) {
      const S = ["left", "front", "right", "front"];
      let t = 0;
      (this.danceTimer = this.time.addEvent({
        delay: 140,
        loop: !0,
        callback: () => {
          const f = S[t % S.length];
          Z.setTexture(ct("p1", f)), K.setTexture(ct("p2", f)), (t += 1);
        },
      })),
        this.danceTweens.push(
          this.tweens.add({
            targets: [Z, K],
            angle: { from: -18, to: 18 },
            y: 368,
            duration: 180,
            yoyo: !0,
            repeat: -1,
            ease: "Sine.easeInOut",
          }),
        );
    } else if (p === 2)
      Z.setTexture(ct("p1", "walk")),
        K.setTexture(ct("p2", "walk")),
        Z.setFlipX(!0),
        K.setFlipX(!1),
        this.danceTweens.push(
          this.tweens.add({
            targets: Z,
            x: { from: 48, to: 128 },
            y: { from: 390, to: 378 },
            duration: 520,
            yoyo: !0,
            repeat: -1,
            onYoyo: () => Z.setFlipX(!Z.flipX),
            onRepeat: () => Z.setFlipX(!Z.flipX),
          }),
          this.tweens.add({
            targets: K,
            x: { from: 912, to: 832 },
            y: { from: 390, to: 378 },
            duration: 520,
            yoyo: !0,
            repeat: -1,
            onYoyo: () => K.setFlipX(!K.flipX),
            onRepeat: () => K.setFlipX(!K.flipX),
          }),
        );
    else if (p === 3)
      Z.setAngle(180),
        K.setAngle(180),
        Z.setY(380),
        K.setY(380),
        this.danceTweens.push(
          this.tweens.add({
            targets: [Z, K],
            scaleX: { from: 0.75, to: -0.75 },
            y: 362,
            duration: 240,
            yoyo: !0,
            repeat: -1,
            ease: "Sine.easeInOut",
          }),
        );
    else if (p === 4)
      Z.setTexture(ct("p1", "walk")),
        K.setTexture(ct("p2", "walk")),
        this.danceTweens.push(
          this.tweens.add({
            targets: [Z, K],
            y: 275,
            angle: 360,
            duration: 460,
            yoyo: !0,
            repeat: -1,
            ease: "Quad.easeOut",
          }),
        );
    else if (p === 5) {
      let S = 0;
      (this.danceTimer = this.time.addEvent({
        delay: 250,
        loop: !0,
        callback: () => {
          const t = S % 2 === 0 ? "right" : "left";
          Z.setTexture(ct("p1", t)), K.setTexture(ct("p2", t)), (S += 1);
        },
      })),
        this.danceTweens.push(
          this.tweens.add({
            targets: Z,
            x: { from: 56, to: 120 },
            angle: { from: -14, to: 14 },
            duration: 250,
            yoyo: !0,
            repeat: -1,
          }),
          this.tweens.add({
            targets: K,
            x: { from: 904, to: 840 },
            angle: { from: 14, to: -14 },
            duration: 250,
            yoyo: !0,
            repeat: -1,
          }),
        );
    } else if (p === 6) {
      const S = [
        { pose: "left", angle: -22, sy: 0.78 },
        { pose: "front", angle: 0, sy: 0.68 },
        { pose: "right", angle: 22, sy: 0.78 },
        { pose: "walk", angle: -12, sy: 0.82 },
      ];
      let t = 0;
      this.danceTimer = this.time.addEvent({
        delay: 190,
        loop: !0,
        callback: () => {
          const f = S[t % S.length];
          Z.setTexture(ct("p1", f.pose)),
            K.setTexture(ct("p2", f.pose)),
            Z.setAngle(f.angle),
            K.setAngle(-f.angle),
            Z.setScale(0.75, f.sy),
            K.setScale(0.75, f.sy),
            (t += 1);
        },
      });
    } else if (p === 7)
      this.danceTweens.push(
        this.tweens.add({
          targets: [Z, K],
          scaleX: { from: 1.05, to: 0.52 },
          scaleY: { from: 0.48, to: 1.05 },
          y: { from: 410, to: 335 },
          duration: 230,
          yoyo: !0,
          repeat: -1,
          ease: "Sine.easeInOut",
        }),
      );
    else if (p === 8)
      Z.setTexture(ct("p1", "walk")),
        K.setTexture(ct("p2", "walk")),
        this.danceTweens.push(
          this.tweens.add({
            targets: Z,
            angle: 360,
            y: { from: 395, to: 335 },
            duration: 520,
            yoyo: !0,
            repeat: -1,
          }),
          this.tweens.add({
            targets: K,
            angle: -360,
            y: { from: 395, to: 335 },
            duration: 520,
            yoyo: !0,
            repeat: -1,
          }),
        );
    else if (p === 9)
      Z.setTexture(ct("p1", "right")),
        K.setTexture(ct("p2", "left")),
        this.danceTweens.push(
          this.tweens.add({
            targets: [Z, K],
            y: 315,
            angle: { from: -28, to: 28 },
            duration: 135,
            yoyo: !0,
            repeat: -1,
            ease: "Quad.easeOut",
          }),
        );
    else {
      const S = ["front", "right", "front", "left"];
      let t = 0;
      (this.danceTimer = this.time.addEvent({
        delay: 110,
        loop: !0,
        callback: () => {
          const f = S[t % S.length];
          Z.setTexture(ct("p1", f)), K.setTexture(ct("p2", f)), (t += 1);
        },
      })),
        this.danceTweens.push(
          this.tweens.add({
            targets: [Z, K],
            y: 290,
            scaleX: { from: 0.78, to: -0.78 },
            duration: 380,
            yoyo: !0,
            repeat: -1,
            ease: "Sine.easeInOut",
          }),
        );
    }
  }
  _createActionButton(X, Y, W, Z, K, p, S) {
    const t = this.add.graphics();
    t.fillStyle(K, 1),
      t.lineStyle(2.5, 16777215, 0.9),
      t.fillRoundedRect(X - W / 2, Y - Z / 2, W, Z, 12),
      t.strokeRoundedRect(X - W / 2, Y - Z / 2, W, Z, 12),
      ((lbl) => lbl.width > W - 12 && lbl.setScale((W - 12) / lbl.width))(
        this.add
          .text(X, Y, p, {
            fontSize: isTouchMode() ? "16px" : "13px",
            fontStyle: "bold",
            color: "#ffffff",
          })
          .setOrigin(0.5),
      ),
      this.add
        .zone(X, Y, W, Z)
        .setInteractive({ useHandCursor: !0 })
        .on("pointerdown", S);
  }
  _goNextStage() {
    ut.playDoorUnlock(),
      this.scene.start("GameScene", {
        mode: this.gameMode,
        level: this.levelNumber + 1,
      });
  }
}
const Ke = {
    type: pt.AUTO,
    parent: "game-container",
    width: 960,
    height: 540,
    backgroundColor: "#0f172a",
    scale: { mode: pt.Scale.FIT, autoCenter: pt.Scale.CENTER_BOTH },
    physics: { default: "arcade", arcade: { gravity: { y: 920 }, debug: !1 } },
    scene: [we, Ye, We, He],
  },
  Ze = new pt.Game(Ke);
typeof window < "u" && (window.__GAME__ = Ze);

// When a touchscreen is used for the first time (e.g. touchscreen laptop),
// switch the current screen to its touch-friendly version.
onTouchModeChange(() => {
  if (Ze.scene.isActive("MenuScene")) Ze.scene.getScene("MenuScene").scene.restart();
  if (Ze.scene.isActive("GameScene")) {
    const g = Ze.scene.getScene("GameScene");
    showTouchControls(g.gameMode, te(), ht("jumpBtn"));
  }
});
